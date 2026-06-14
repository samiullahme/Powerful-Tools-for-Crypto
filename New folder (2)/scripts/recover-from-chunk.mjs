import fs from 'fs';
import path from 'path';

const CHUNK = '.next/dev/static/chunks/components_1p9tei5._.js';
const OUT_DIR = 'components/tools';

function extractModules(content) {
  const re = /"\[project\]\/components\/tools\/([^"]+\.tsx) \[app-client\] \(ecmascript\)"/g;
  const matches = [...content.matchAll(re)];
  return matches.map((m, i) => ({
    name: m[1],
    body: content.slice(m.index, i + 1 < matches.length ? matches[i + 1].index : content.length),
  }));
}

function extractFunction(body, fnName) {
  const fnRe = new RegExp(`function ${fnName}\\(\\)[\\s\\S]*?(?=\\n_s\\(${fnName})`);
  return body.match(fnRe)?.[0] ?? null;
}

const content = fs.readFileSync(CHUNK, 'utf8');
const modules = extractModules(content);
fs.mkdirSync(OUT_DIR, { recursive: true });

for (const mod of modules) {
  const fnName = mod.name.replace('.tsx', '');
  const fn = extractFunction(mod.body, fnName);
  if (!fn) {
    console.error('FAILED', mod.name);
    continue;
  }
  fs.writeFileSync(path.join(OUT_DIR, fnName + '.extracted.js'), fn, 'utf8');
  console.log('OK', mod.name, fn.length);
}
