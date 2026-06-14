import fs from 'fs';
import path from 'path';

const dir = '.next/dev/static/chunks';
const toolFiles = new Set();
for (const f of fs.readdirSync(dir)) {
  if (!f.endsWith('.js') || f.endsWith('.js.map')) continue;
  const content = fs.readFileSync(path.join(dir, f), 'utf8');
  const re = /\[project\]\/components\/tools\/([^"]+\.tsx)/g;
  let m;
  while ((m = re.exec(content))) toolFiles.add(m[1]);
}
console.log([...toolFiles].sort().join('\n'));
console.log('Total:', toolFiles.size);
