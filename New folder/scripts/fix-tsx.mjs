import fs from 'fs';
import path from 'path';

const dir = 'components/tools';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx') && !f.includes('.extracted'));

function cleanTurbopack(c) {
  const mod = String.raw`__TURBOPACK__imported__module__$[a-zA-Z0-9_$]+`;

  c = c.replace(new RegExp(String.raw`\(0, ${mod}\)\["useState"\]\)`, 'g'), 'useState');
  c = c.replace(new RegExp(String.raw`\(0, ${mod}\)\["useEffect"\]\)`, 'g'), 'useEffect');
  c = c.replace(new RegExp(String.raw`\(0, ${mod}\)\["useMemo"\]\)`, 'g'), 'useMemo');
  c = c.replace(new RegExp(String.raw`\(0, ${mod}\)\["useCallback"\]\)`, 'g'), 'useCallback');
  c = c.replace(new RegExp(String.raw`\(0, ${mod}\)\["useRef"\]\)`, 'g'), 'useRef');
  c = c.replace(new RegExp(String.raw`\(0, ${mod}\)\["usePathname"\]\)`, 'g'), 'usePathname');

  c = c.replace(
    /useEffect\(\{\s*"[^"]+\.useEffect":\s*(\(\)\s*=>\s*\{[\s\S]*?\})\s*\}\["[^"]+"\],\s*(\[[^\]]*\])\)/g,
    'useEffect($1, $2)'
  );

  c = c.replace(/<\/?__TURBOPACK__imported__module__\$[a-zA-Z0-9_$]+\[[^\]]+\]>/g, (m) =>
    m.startsWith('</') ? '</>' : '<>'
  );

  return c;
}

for (const file of files) {
  let c = fs.readFileSync(path.join(dir, file), 'utf8');
  c = cleanTurbopack(c);

  c = c.replace(
    /onChange=\{\(e\)=>([^,}]+),\s*"aria-label":\s*"([^"]+)"\}/g,
    'onChange={(e)=>$1} aria-label="$2"'
  );

  c = c.replace(
    /className=\{\$\{resultValue\} \$\{([^}]+) \? 'positive' : 'negative' \? 'text-emerald-600' : 'text-red-500'\}\}/g,
    "className={`${resultValue} ${$1 ? 'text-emerald-600' : 'text-red-500'}`}"
  );

  c = c.replace(
    /className=\{\$\{btnCopy\}\$\{([^}]+) \? 'copied' : '' \? ' bg-emerald-50 text-emerald-700' : ''\}\}/g,
    "className={`${btnCopy}${$1 ? ' bg-emerald-50 text-emerald-700' : ''}`}"
  );
  c = c.replace(
    /className=\{\$\{btnCopy\}\$\{([^}]+) === 'all' \? 'copied' : '' \? ' bg-emerald-50 text-emerald-700' : ''\}\}/g,
    "className={`${btnCopy}${$1 === 'all' ? ' bg-emerald-50 text-emerald-700' : ''}`}"
  );
  c = c.replace(
    /className=\{\$\{btnCopy\}\$\{([^}]+) === index \? 'copied' : '' \? ' bg-emerald-50 text-emerald-700' : ''\}\}/g,
    "className={`${btnCopy}${$1 === index ? ' bg-emerald-50 text-emerald-700' : ''}`}"
  );

  c = c.replace(
    /className=\{btn \$\{([^}]+\? 'btn-primary' : 'btn-secondary')\} btn-sm\}/g,
    'className={`${$1 ? btnPrimary : btnSecondary} ${btnSm}`}'
  );
  c = c.replace(
    /className=\{btn \$\{([^}]+\? 'btn-primary' : 'btn-secondary')\}\}/g,
    'className={$1 ? btnPrimary : btnSecondary}'
  );

  c = c.replace(/\{(\w+) === '([^']+)' &&\s+\{'([^']+)'\}\}/g, "{$1 === '$2' && '$3'}");
  c = c.replace(/className="result-box success animate-fade-up"/g, 'className={resultBoxSuccess}');
  c = c.replace(/className="result-box"/g, 'className={resultBox}');

  c = c.replace(/var\(--text-muted\)/g, '#64748B');
  c = c.replace(/var\(--text-primary\)/g, '#0F172A');
  c = c.replace(/var\(--text-secondary\)/g, '#64748B');
  c = c.replace(/var\(--c-text\)/g, '#0F172A');
  c = c.replace(/var\(--bg-elevated\)/g, 'rgba(248,250,252,0.95)');
  c = c.replace(/var\(--bg-surface\)/g, 'rgba(248,250,252,0.95)');
  c = c.replace(/var\(--bg-card\)/g, 'rgba(255,255,255,0.72)');
  c = c.replace(/var\(--border\)/g, 'rgba(15,23,42,0.08)');
  c = c.replace(/var\(--radius-sm\)/g, '0.75rem');
  c = c.replace(/var\(--radius-md\)/g, '1rem');
  c = c.replace(/var\(--radius-lg\)/g, '1.25rem');
  c = c.replace(/var\(--c-finance\)/g, '#0F766E');
  c = c.replace(/var\(--c-crypto\)/g, '#FF9500');
  c = c.replace(/var\(--c-dev\)/g, '#6366F1');
  c = c.replace(/var\(--c-dev-dim\)/g, 'rgba(99,102,241,0.08)');
  c = c.replace(/var\(--danger\)/g, '#EF4444');
  c = c.replace(/var\(--c-text\)/g, '#0F172A');

  const hooks = ['useState', 'useEffect', 'useMemo', 'useCallback', 'useRef'].filter((h) =>
    new RegExp(`\\b${h}\\(`).test(c)
  );
  const needsPathname = /\busePathname\(/.test(c);

  let reactImport = hooks.length
    ? `import { ${hooks.join(', ')} } from 'react';`
    : "import React from 'react';";

  if (/import \{[^}]+\} from 'react';/.test(c)) {
    c = c.replace(/import \{[^}]+\} from 'react';/, reactImport);
  } else if (/import React from 'react';/.test(c)) {
    c = c.replace(/import React from 'react';/, reactImport);
  }

  if (needsPathname && !c.includes("from 'next/navigation'")) {
    c = c.replace(/^(import[^\n]+\n)/m, `$1import { usePathname } from 'next/navigation';\n`);
  }

  // Ensure resultBox in imports if used
  if (c.includes('{resultBox}') && !c.includes('resultBox')) {
    c = c.replace(/from '@\/lib\/ui-classes';/, (m) => {
      const imp = c.match(/import \{([^}]+)\} from '@\/lib\/ui-classes';/);
      if (imp && !imp[1].includes('resultBox')) {
        return `import { ${imp[1].trim()}, resultBox } from '@/lib/ui-classes';`;
      }
      return m;
    });
  }

  fs.writeFileSync(path.join(dir, file), c, 'utf8');
  console.log('Fixed', file);
}
