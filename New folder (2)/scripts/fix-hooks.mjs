import fs from 'fs';
import path from 'path';

const dir = 'components/tools';
const hookRe =
  /\(0, __TURBOPACK__imported__module__\$[a-zA-Z0-9_$]+\["(useState|useEffect|useMemo|useCallback|useRef|usePathname)"\]\)/g;

const effectRe =
  /useEffect\(\{\s*"[^"]+\.useEffect":\s*(\(\)\s*=>\s*\{[\s\S]*?\})\s*\}\["[^"]+"\],\s*(\[[^\]]*\])\)/g;

function fixImports(c) {
  const hooks = ['useState', 'useEffect', 'useMemo', 'useCallback', 'useRef'].filter((h) =>
    new RegExp(`\\b${h}\\(`).test(c)
  );
  const needsPathname = /\busePathname\(/.test(c);

  if (hooks.length) {
    const importLine = `import { ${hooks.join(', ')} } from 'react';`;
    if (/import \{[^}]+\} from 'react';/.test(c)) {
      c = c.replace(/import \{[^}]+\} from 'react';/, importLine);
    } else if (/import React from 'react';/.test(c)) {
      c = c.replace(/import React from 'react';/, importLine);
    } else {
      c = c.replace("'use client';\n\n", `'use client';\n\n${importLine}\n`);
    }
  }

  if (needsPathname && !c.includes("from 'next/navigation'")) {
    c = c.replace(/^(import[^\n]+\n)/m, `$1import { usePathname } from 'next/navigation';\n`);
  }

  return c;
}

for (const file of fs.readdirSync(dir).filter((f) => f.endsWith('.tsx') && !f.includes('.extracted'))) {
  let c = fs.readFileSync(path.join(dir, file), 'utf8');
  c = c.replace(hookRe, '$1');
  c = c.replace(effectRe, 'useEffect($1, $2)');
  c = fixImports(c);
  fs.writeFileSync(path.join(dir, file), c, 'utf8');
  console.log('Fixed', file);
}
