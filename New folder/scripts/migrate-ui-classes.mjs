import fs from 'fs';
import path from 'path';

const toolsDir = path.join(process.cwd(), 'components', 'tools');
const files = fs.readdirSync(toolsDir).filter(f => f.endsWith('.tsx'));

const classMap = [
  ['className="form-group"', 'className={formGroup}'],
  ["className='form-group'", 'className={formGroup}'],
  ['className="form-label"', 'className={formLabel}'],
  ['className="form-input"', 'className={formInput}'],
  ['className="form-select"', 'className={formSelect}'],
  ['className="form-textarea"', 'className={formTextarea}'],
  ['className="form-row"', 'className={formRow}'],
  ['className="result-box success animate-fade-up"', 'className={resultBoxSuccess}'],
  ['className="result-box success"', 'className={resultBoxSuccess}'],
  ['className="result-box danger"', 'className={resultBoxDanger}'],
  ['className="result-box"', 'className={resultBox}'],
  ['className="result-label"', 'className={resultLabel}'],
  ['className="result-value"', 'className={resultValue}'],
  ['className="result-grid"', 'className={resultGrid}'],
  ['className="result-item"', 'className={resultItem}'],
  ['className="btn btn-primary"', 'className={btnPrimary}'],
  ['className="btn btn-secondary btn-sm"', 'className={btnSm}'],
  ['className="btn btn-secondary"', 'className={btnSecondary}'],
  ['className="btn btn-primary btn-sm"', 'className={`${btnPrimary} !px-4 !py-1.5 !text-[0.82rem] !rounded-lg`}'],
  ['className="btn-copy"', 'className={btnCopy}'],
  ['className="output-area"', 'className={outputArea}'],
  ['className="section-label"', 'className={sectionLabel}'],
  ['className="container"', 'className={container}'],
  ['className="divider"', 'className={divider}'],
];

const importNames = new Set([
  'formGroup', 'formLabel', 'formInput', 'formSelect', 'formTextarea', 'formRow',
  'resultBox', 'resultBoxSuccess', 'resultBoxDanger', 'resultLabel', 'resultValue',
  'resultGrid', 'resultItem', 'btnPrimary', 'btnSecondary', 'btnSm', 'btnCopy',
  'outputArea', 'sectionLabel', 'container', 'divider', 'btn',
]);

const importLine = (names) =>
  `import { ${[...names].sort().join(', ')} } from '@/lib/ui-classes';\n`;

for (const file of files) {
  let content = fs.readFileSync(path.join(toolsDir, file), 'utf8');
  let changed = false;

  for (const [from, to] of classMap) {
    if (content.includes(from)) {
      content = content.split(from).join(to);
      changed = true;
    }
  }

  // template literals with btn
  content = content.replace(
    /className=\{`btn \$\{([^}]+)\s*\?\s*'btn-primary'\s*:\s*'btn-secondary'\}`\}/g,
    'className={$1 ? btnPrimary : btnSecondary}'
  );
  content = content.replace(
    /className=\{`btn \$\{([^}]+)\s*\?\s*'btn-primary'\s*:\s*'btn-secondary'\}\s*btn-sm`\}/g,
    'className={$1 ? `${btnPrimary} !px-4 !py-1.5 !text-[0.82rem] !rounded-lg` : btnSm}'
  );

  if (!changed && !content.includes("from '@/lib/ui-classes'")) continue;

  const used = new Set();
  for (const name of importNames) {
    if (content.includes(name)) used.add(name);
  }

  if (used.size === 0) continue;

  if (content.includes("from '@/lib/ui-classes'")) {
    content = content.replace(
      /import \{[^}]+\} from '@\/lib\/ui-classes';\n/,
      importLine(used)
    );
  } else {
    const useClientMatch = content.match(/^('use client';\n)/);
    const insert = importLine(used);
    if (useClientMatch) {
      content = useClientMatch[1] + insert + content.slice(useClientMatch[1].length);
    } else {
      content = insert + content;
    }
  }

  fs.writeFileSync(path.join(toolsDir, file), content);
  console.log('Updated', file);
}

console.log('Done');
