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

function cleanPreamble(code) {
  return code
    .replace(/^\s*;\s*/gm, '')
    .replace(/var _s = __turbopack_context__\.k\.signature\(\);\s*/g, '')
    .replace(/'use client';\s*/g, '')
    .trim();
}

const content = fs.readFileSync(CHUNK, 'utf8');
const modules = extractModules(content);

for (const mod of modules) {
  const fnName = mod.name.replace('.tsx', '');
  const fnIdx = mod.body.indexOf(`function ${fnName}(`);
  if (fnIdx === -1) continue;

  const afterClient = mod.body.indexOf("'use client'");
  if (afterClient === -1 || afterClient >= fnIdx) continue;

  let preamble = mod.body.slice(afterClient + "'use client';".length, fnIdx);
  preamble = cleanPreamble(preamble);
  if (!preamble || !preamble.includes('const ')) continue;

  const tsxPath = path.join(OUT_DIR, mod.name);
  if (!fs.existsSync(tsxPath)) continue;

  let tsx = fs.readFileSync(tsxPath, 'utf8');
  if (tsx.includes('SYLLABLE_MAP') && preamble.includes('SYLLABLE_MAP')) continue;
  if (tsx.includes(preamble.slice(0, 40))) continue;

  tsx = tsx.replace(
    /('use client';\n\n)(import[^\n]+\n(?:import[^\n]+\n)*)/,
    `$1${preamble}\n\n$2`
  );

  fs.writeFileSync(tsxPath, tsx, 'utf8');
  console.log('Prepended constants to', mod.name, preamble.length);
}
