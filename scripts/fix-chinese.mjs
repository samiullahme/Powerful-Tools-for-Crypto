import fs from 'fs';

const chunk = fs.readFileSync('.next/dev/static/chunks/components_1p9tei5._.js', 'utf8');
const start = chunk.indexOf('const SYLLABLE_MAP = {');
const end = chunk.indexOf('function ChineseNameConverter()', start);
const preamble = chunk.slice(start, end).trim();

let tsx = fs.readFileSync('components/tools/ChineseNameConverter.tsx', 'utf8');
if (!tsx.includes('const SYLLABLE_MAP')) {
  tsx = tsx.replace(
    /(import \{ usePathname \} from 'next\/navigation';\n)/,
    `$1\n${preamble}\n\n`
  );
  fs.writeFileSync('components/tools/ChineseNameConverter.tsx', tsx);
  console.log('Added SYLLABLE_MAP', preamble.length);
} else {
  console.log('Already has SYLLABLE_MAP');
}
