import fs from 'fs';
import path from 'path';

const TOOLS_DIR = 'components/tools';

const CLASS_MAP = {
  'form-group': 'formGroup',
  'form-label': 'formLabel',
  'form-input': 'formInput',
  'form-select': 'formSelect',
  'form-textarea': 'formTextarea',
  'form-row': 'formRow',
  'result-label': 'resultLabel',
  'result-value': 'resultValue',
  'result-grid': 'resultGrid',
  'result-item': 'resultItem',
  'btn btn-primary btn-sm': '${btnPrimary} ${btnSm}',
  'btn btn-secondary btn-sm': '${btnSecondary} ${btnSm}',
  'btn btn-primary': 'btnPrimary',
  'btn btn-secondary': 'btnSecondary',
  'btn-copy': 'btnCopy',
  'output-area': 'outputArea',
  'section-label': 'sectionLabel',
  'info-banner': 'infoBanner',
  tabs: 'tabs',
  'btn-icon': 'btnIcon',
};

const ALL_IMPORTS = [
  'formGroup', 'formLabel', 'formInput', 'formSelect', 'formTextarea', 'formRow',
  'resultBox', 'resultBoxSuccess', 'resultBoxDanger', 'resultLabel', 'resultValue',
  'resultGrid', 'resultItem', 'btnPrimary', 'btnSecondary', 'btnSm', 'btnCopy',
  'outputArea', 'sectionLabel', 'infoBanner', 'tabs', 'tabBtn', 'tabBtnActive', 'btnIcon',
];

function splitTopLevel(str, sep = ',') {
  const parts = [];
  let depth = 0;
  let cur = '';
  let inStr = null;
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (inStr) {
      cur += ch;
      if (ch === inStr && str[i - 1] !== '\\') inStr = null;
      continue;
    }
    if (ch === '"' || ch === "'" || ch === '`') { inStr = ch; cur += ch; continue; }
    if (ch === '(' || ch === '{' || ch === '[') depth++;
    if (ch === ')' || ch === '}' || ch === ']') depth--;
    if (ch === sep && depth === 0) {
      parts.push(cur.trim());
      cur = '';
      continue;
    }
    cur += ch;
  }
  if (cur.trim()) parts.push(cur.trim());
  return parts;
}

function findMatching(str, openIdx, open = '(', close = ')') {
  let depth = 0;
  for (let i = openIdx; i < str.length; i++) {
    if (str[i] === open) depth++;
    else if (str[i] === close) {
      depth--;
      if (depth === 0) return i;
    }
  }
  return -1;
}

function cleanLogic(code) {
  let c = code
    .replace(/\n\s*_s\(\);\n/, '\n')
    .replace(/^\s*_s\(\);\n/, '')
    .replace(
      /\(0, __TURBOPACK__imported__module\$[\s\S]*?\)\["(useState|useEffect|useMemo|useCallback|useRef)"\]\)/g,
      '$1'
    )
    .replace(
      /\(0, __TURBOPACK__imported__module\$[\s\S]*?\)\["usePathname"\]\)/g,
      'usePathname'
    )
    .replace(/\(0, __TURBOPACK__imported__module[\s\S]*?\)\["Fragment"\]\)/g, 'Fragment')
    .replace(/var\(--text-primary\)/g, '#0F172A')
    .replace(/var\(--text-muted\)/g, '#64748B')
    .replace(/var\(--c-finance\)/g, '#0F766E')
    .replace(/var\(--c-crypto\)/g, '#FF9500')
    .replace(/var\(--c-danger\)/g, '#EF4444')
    .replace(/var\(--c-success\)/g, '#10B981');
  return c;
}

function mapClassString(value) {
  if (CLASS_MAP[value]) {
    const m = CLASS_MAP[value];
    if (m.includes('${')) return `{\`${m}\`}`;
    return `{${m}}`;
  }
  return `"${value}"`;
}

function transformClassNameExpr(expr) {
  expr = expr.trim();
  if (expr.startsWith('"') && expr.endsWith('"')) return mapClassString(expr.slice(1, -1));

  // `tab-btn ${x === 'y' ? 'active' : ''}`
  const tabEq = expr.match(/^`tab-btn \$\{(\w+) === '([^']+)' \? 'active' : ''\}`$/);
  if (tabEq) return `{${tabEq[1]} === '${tabEq[2]}' ? tabBtnActive : tabBtn}`;

  const tabEq2 = expr.match(/^`tab-btn \$\{(\w+) === "([^"]+)" \? 'active' : ''\}`$/);
  if (tabEq2) return `{${tabEq2[1]} === '${tabEq2[2]}' ? tabBtnActive : tabBtn}`;

  const tabKey = expr.match(/^`tab-btn \$\{(\w+) === (\w+) \? 'active' : ''\}`$/);
  if (tabKey) return `{${tabKey[1]} === ${tabKey[2]} ? tabBtnActive : tabBtn}`;

  const tabT = expr.match(/^`tab-btn \$\{(\w+) === ([^?]+) \? 'active' : ''\}`$/);
  if (tabT) return `{${tabT[1]} === ${tabT[2].trim()} ? tabBtnActive : tabBtn}`;

  // `btn ${style === s.id ? 'btn-primary' : 'btn-secondary'}`
  const btnToggle = expr.match(/^`btn \$\{([^}]+\? 'btn-primary' : 'btn-secondary')\}`$/);
  if (btnToggle) return `{${btnToggle[1]} ? btnPrimary : btnSecondary}`;

  if (expr.startsWith('`result-box ${')) {
    const cond = expr.match(/\$\{([^}]+)\}/)?.[1];
    return `{${cond} ? resultBoxSuccess : resultBoxDanger}`;
  }
  if (expr.includes('result-box success')) return '{resultBoxSuccess}';

  if (expr.includes('result-value') && expr.includes("'positive'")) {
    const cond = expr.match(/\$\{([^}]+)\}/)?.[1];
    return `{${'${resultValue} ${' + cond + " ? 'text-emerald-600' : 'text-red-500'}"}}`;
  }

  if (expr.includes('btn-copy')) {
    if (expr.includes("'copied'") || expr.includes('copied')) {
      const cond = expr.match(/\$\{([^}]+)\}/)?.[1];
      return `{${'${btnCopy}${' + cond + " ? ' bg-emerald-50 text-emerald-700' : ''}"}}`;
    }
    return '{btnCopy}';
  }

  if (expr.startsWith('`') && expr.endsWith('`')) return `{${expr.slice(1, -1)}}`;
  return `{${expr}}`;
}

function parseObject(raw) {
  const props = {};
  const inner = raw.trim().replace(/^\{|\}$/g, '').trim();
  if (!inner) return props;

  let i = 0;
  while (i < inner.length) {
    while (i < inner.length && /[\s,]/.test(inner[i])) i++;
    if (i >= inner.length) break;

    const keyMatch = inner.slice(i).match(/^(\w+):/);
    if (!keyMatch) break;
    const key = keyMatch[1];
    i += keyMatch[0].length;
    while (inner[i] === ' ') i++;

    const valStart = i;
    let depth = 0;
    let inStr = null;
    while (i < inner.length) {
      const ch = inner[i];
      if (inStr) {
        if (ch === inStr && inner[i - 1] !== '\\') inStr = null;
        i++;
        continue;
      }
      if (ch === '"' || ch === "'" || ch === '`') { inStr = ch; i++; continue; }
      if (ch === '(' || ch === '{' || ch === '[') depth++;
      if (ch === ')' || ch === '}' || ch === ']') depth--;
      if (depth === 0 && ch === ',' && inner[i + 1] !== ' ') {
        // might be end of value - check if next is word:
        const rest = inner.slice(i + 1).trimStart();
        if (/^\w+:/.test(rest)) break;
      }
      if (depth < 0) break;
      i++;
    }
    props[key] = inner.slice(valStart, i).trim();
    if (inner[i] === ',') i++;
  }
  return props;
}

function convertExpr(expr, indent = 4) {
  expr = expr.trim();
  if (!expr) return '';

  // Strip purity prefix
  expr = expr.replace(/\/\*#__PURE__\*\/\s*\(0,\s*__TURBOPACK__imported__module[^)]+\)\("jsxDEV"\)/g, 'jsxDEV');

  // Conditional jsxDEV
  const condMatch = expr.match(/^(.+?) && \/\*#__PURE__\*\/[\s\S]+jsxDEV/);
  if (condMatch) {
    const jsx = convertJsxDevExpr(expr.slice(expr.indexOf('/*#__PURE__*/')));
    return `{${condMatch[1].trim()} && (\n${' '.repeat(indent)}${jsx}\n${' '.repeat(indent - 2)})}`;
  }
  if (expr.includes('&&') && expr.includes('jsxDEV')) {
    const idx = expr.indexOf('&&');
    const cond = expr.slice(0, idx).trim();
    const rest = expr.slice(idx + 2).trim();
    const jsx = convertJsxDevExpr(rest);
    return `{${cond} && (\n${' '.repeat(indent)}${jsx}\n${' '.repeat(indent - 2)})}`;
  }

  // map expressions
  if (expr.includes('.map(') && expr.includes('jsxDEV')) {
    return `{${expr.replace(/\/\*#__PURE__\*\/\s*\(0,\s*__TURBOPACK__imported__module[^)]+\)\("jsxDEV"\)/g, '').replace(/jsxDEV/g, '__JSX__')}}`.replace(/__JSX__/g, 'jsxDEV');
    // fallback: keep expression, convert inner jsxDEV
  }

  if (expr.includes('jsxDEV')) return convertJsxDevExpr(expr);

  // plain text/expression
  if (expr.startsWith('"') && expr.endsWith('"')) return expr.slice(1, -1);
  return `{${expr}}`;
}

function convertJsxDevExpr(expr) {
  const idx = expr.indexOf('jsxDEV');
  if (idx === -1) return expr;
  const open = expr.indexOf('(', idx);
  const close = findMatching(expr, open);
  const args = splitTopLevel(expr.slice(open + 1, close));
  return renderJsxDev(args, 0);
}

function renderJsxDev(args, depth) {
  const pad = ' '.repeat(depth * 2 + 4);
  let tag = args[0].trim();
  if (tag === '__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"]' || tag === 'Fragment') {
    tag = '';
  } else {
    tag = tag.replace(/^"|"$/g, '');
  }

  const props = parseObject(args[1]);
  const propLines = [];

  for (const [k, v] of Object.entries(props)) {
    if (k === 'children') continue;
    if (k === 'className') {
      if (v.startsWith('"')) propLines.push(`className=${mapClassString(v.slice(1, -1))}`);
      else propLines.push(`className=${transformClassNameExpr(v)}`);
    } else if (k === 'style') {
      propLines.push(`style={${v}}`);
    } else if (v === 'true') {
      propLines.push(k);
    } else if (v.startsWith('"')) {
      propLines.push(`${k}="${v.slice(1, -1)}"`);
    } else {
      propLines.push(`${k}={${v}}`);
    }
  }

  let children = [];
  if (props.children) {
    const c = props.children.trim();
    if (c.startsWith('[')) {
      const inner = c.slice(1, -1);
      const items = splitTopLevel(inner);
      children = items.map(item => convertChild(item.trim(), depth + 1)).filter(Boolean);
    } else {
      children = [convertChild(c, depth + 1)].filter(Boolean);
    }
  }

  const propsStr = propLines.length ? ' ' + propLines.join(' ') : '';
  if (!tag) {
    if (children.length === 1) return children[0];
    return `<>\n${children.join('\n')}\n${pad.slice(0, -2)}</>`;
  }
  if (!children.length) return `<${tag}${propsStr} />`;
  if (children.length === 1 && !children[0].includes('\n')) {
    return `<${tag}${propsStr}>${children[0]}</${tag}>`;
  }
  return `<${tag}${propsStr}>\n${children.join('\n')}\n${pad}</${tag}>`;
}

function convertChild(expr, depth) {
  expr = expr.trim();
  if (!expr || expr === 'void 0') return '';
  const pad = ' '.repeat(depth * 2 + 4);

  if (expr.startsWith('"') && expr.endsWith('"')) return expr.slice(1, -1);

  if (expr.includes('jsxDEV')) {
    const jsx = convertJsxDevExpr(expr);
    return pad + jsx.replace(/\n/g, `\n${pad}`).trim();
  }

  if (expr.includes('&&')) {
    const idx = expr.indexOf('&&');
    const cond = expr.slice(0, idx).trim();
    const rest = expr.slice(idx + 2).trim();
    const inner = convertChild(rest, depth + 1);
    return `${pad}{${cond} && ${inner.trim().startsWith('<') ? `(\n${inner}\n${pad})` : inner}}`;
  }

  // array expression with variables
  if (expr.startsWith('[')) {
    return `{${expr}}`;
  }

  return `${pad}{${expr}}`;
}

function detectImports(source) {
  const used = new Set();
  for (const imp of ALL_IMPORTS) {
    const patterns = {
      formGroup: ['"form-group"'],
      formLabel: ['"form-label"'],
      formInput: ['"form-input"'],
      formSelect: ['"form-select"'],
      formTextarea: ['"form-textarea"'],
      formRow: ['"form-row"'],
      resultBoxSuccess: ['result-box success', "result-box ${", "'success' : 'danger'"],
      resultBoxDanger: ["'danger'"],
      resultLabel: ['"result-label"'],
      resultValue: ['"result-value"', 'result-value ${'],
      resultGrid: ['"result-grid"'],
      resultItem: ['"result-item"'],
      btnPrimary: ['"btn btn-primary"', "'btn-primary'"],
      btnSecondary: ['"btn btn-secondary"', "'btn-secondary'"],
      btnSm: ['btn-sm'],
      btnCopy: ['"btn-copy"', 'btn-copy ${'],
      outputArea: ['"output-area"'],
      sectionLabel: ['"section-label"'],
      infoBanner: ['"info-banner"'],
      tabs: ['"tabs"'],
      tabBtn: ['tab-btn'],
      tabBtnActive: ['tab-btn'],
      btnIcon: ['"btn-icon"'],
    };
    for (const p of patterns[imp] || []) {
      if (source.includes(p)) used.add(imp);
    }
  }
  if (used.has('tabBtn')) used.add('tabBtnActive');
  return [...used].sort();
}

function convertFile(extractedPath) {
  const fnName = path.basename(extractedPath, '.extracted.js');
  const raw = fs.readFileSync(extractedPath, 'utf8');
  const fnMatch = raw.match(new RegExp(`function ${fnName}\\(\\)[\\s\\S]*`));
  if (!fnMatch) throw new Error('No function in ' + extractedPath);
  const fnCode = fnMatch[0];

  const returnIdx = fnCode.indexOf('return /*#__PURE__');
  if (returnIdx === -1) throw new Error('No return in ' + fnName);

  let logic = cleanLogic(fnCode.slice(0, returnIdx).replace(new RegExp(`^function ${fnName}\\(\\)\\s*\\{`), '').trim());
  const returnPart = fnCode.slice(returnIdx + 'return '.length);

  let jsx = convertJsxDevExpr(returnPart);
  jsx = jsx.split('\n').map(l => '    ' + l.trim()).join('\n');

  const usedImports = detectImports(fnCode);
  const cleanedForHooks = cleanLogic(fnCode);
  const reactHooks = [];
  for (const h of ['useState', 'useEffect', 'useMemo', 'useCallback', 'useRef', 'usePathname']) {
    if (new RegExp(`\\b${h}\\(`).test(cleanedForHooks)) reactHooks.push(h);
  }

  let nextImport = '';
  if (reactHooks.includes('usePathname')) {
    nextImport = "\nimport { usePathname } from 'next/navigation';";
    reactHooks.splice(reactHooks.indexOf('usePathname'), 1);
  }

  const uiImport = usedImports.length
    ? `import { ${usedImports.join(', ')} } from '@/lib/ui-classes';\n`
    : '';

  const reactImport = reactHooks.length
    ? `import { ${reactHooks.join(', ')} } from 'react';`
    : "import React from 'react';";

  const tsx = `'use client';

${reactImport}${nextImport}
${uiImport}
export default function ${fnName}() {
${logic.split('\n').map(l => '  ' + l.trim()).join('\n')}

  return (
${jsx}
  );
}
`;

  return tsx;
}

const files = fs.readdirSync(TOOLS_DIR).filter(f => f.endsWith('.extracted.js'));
let ok = 0;
let fail = 0;
for (const f of files) {
  try {
    const tsx = convertFile(path.join(TOOLS_DIR, f));
    const out = path.join(TOOLS_DIR, f.replace('.extracted.js', '.tsx'));
    fs.writeFileSync(out, tsx, 'utf8');
    console.log('OK', f.replace('.extracted.js', ''));
    ok++;
  } catch (e) {
    console.error('FAIL', f, e.message);
    fail++;
  }
}
console.log(`Done: ${ok} ok, ${fail} fail`);
