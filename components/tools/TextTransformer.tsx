// @ts-nocheck
'use client';

const FLIP_MAP = {
    a: 'ɐ',
    b: 'q',
    c: 'ɔ',
    d: 'p',
    e: 'ǝ',
    f: 'ɟ',
    g: 'ƃ',
    h: 'ɥ',
    i: 'ᴉ',
    j: 'ɾ',
    k: 'ʞ',
    l: 'l',
    m: 'ɯ',
    n: 'u',
    o: 'o',
    p: 'd',
    q: 'b',
    r: 'ɹ',
    s: 's',
    t: 'ʇ',
    u: 'n',
    v: 'ʌ',
    w: 'ʍ',
    x: 'x',
    y: 'ʎ',
    z: 'z',
    A: '∀',
    B: 'ᗺ',
    C: 'Ɔ',
    D: 'ᗡ',
    E: 'Ǝ',
    F: 'Ⅎ',
    G: 'פ',
    H: 'H',
    I: 'I',
    J: 'ſ',
    K: 'ʞ',
    L: '˥',
    M: 'W',
    N: 'N',
    O: 'O',
    P: 'Ԁ',
    Q: 'Q',
    R: 'ᴚ',
    S: 'S',
    T: '┴',
    U: '∩',
    V: 'Λ',
    W: 'M',
    X: 'X',
    Y: '⅄',
    Z: 'Z',
    '0': '0',
    '1': 'Ɩ',
    '2': 'ᄅ',
    '3': 'Ɛ',
    '4': 'ㄣ',
    '5': 'ϛ',
    '6': '9',
    '7': 'ʌ',
    '8': '8',
    '9': '6',
    '.': '˙',
    ',': '\'',
    '?': '¿',
    '!': '¡',
    '\'': '.',
    '"': '"',
    '(': ')',
    ')': '(',
    '[': ']',
    ']': '[',
    '{': '}',
    '}': '{',
    ' ': ' ',
    '\n': '\n'
};
const WIDE_MAP = (c)=>{
    const code = c.codePointAt(0);
    if (code >= 33 && code <= 126) return String.fromCodePoint(code + 0xFEE0);
    if (c === ' ') return '\u3000';
    return c;
};
const transforms = {
    altCaps: {
        label: '🔠 aLtErNaTiNg CaPs',
        desc: 'Alternates between lowercase and uppercase letters — the classic "mocking" style.',
        fn: (s)=>s.split('').map((c, i)=>/[a-zA-Z]/.test(c) ? i % 2 === 0 ? c.toLowerCase() : c.toUpperCase() : c).join('')
    },
    allCaps: {
        label: '🔡 ALL CAPS',
        desc: 'Converts every letter to UPPERCASE. Great for strong emphasis or headlines.',
        fn: (s)=>s.toUpperCase()
    },
    wide: {
        label: 'Ｗ ｉ ｄ ｅ',
        desc: 'Converts text to full-width Unicode characters — creates that wide aesthetic font look.',
        fn: (s)=>s.split('').map(WIDE_MAP).join('')
    },
    mirror: {
        label: '🪞 Mirror Text',
        desc: 'Reverses the text string to create a mirrored writing effect (reads right-to-left).',
        fn: (s)=>s.split('\n').map((line)=>line.split('').reverse().join('')).join('\n')
    },
    flip: {
        label: '🙃 Upside Down',
        desc: 'Flips each character upside-down using special Unicode look-alike characters.',
        fn: (s)=>s.split('').map((c)=>FLIP_MAP[c] ?? c).reverse().join('')
    }
};

import { useState, useEffect } from 'react';
import { btnSecondary, btnSm, formGroup, formLabel, formTextarea, resultBoxSuccess, resultLabel, tabBtn, tabBtnActive, tabs } from '@/lib/ui-classes';

export default function TextTransformer() {
  const [text, setText] = useState('');
  const [tab, setTab] = useState('altCaps');
  const [copied, setCopied] = useState(false);
  useEffect(()=>{
  const saved = localStorage.getItem('cryptoredar_text_transformer');
  if (saved) setText(saved);
  }, []);
  useEffect(()=>{
  localStorage.setItem('cryptoredar_text_transformer', text);
  }, [
  text
  ]);
  const output = text ? transforms[tab].fn(text) : '';
  const handleCopy = async ()=>{
  if (!output) return;
  await navigator.clipboard.writeText(output);
  setCopied(true);
  setTimeout(()=>setCopied(false), 2000);
  };

  return (
    <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
    }}>
    <div className={tabs} style={{
    flexWrap: 'wrap'
    }}>
    {Object.keys(transforms).map((key)=>
    <button key={key} className={tab === key ? tabBtnActive : tabBtn} onClick={()=>setTab(key)}>{transforms[key].label}</button>
    )}
    </div>
    <div style={{
    fontSize: '0.88rem',
    color: '#64748B',
    background: 'rgba(248,250,252,0.95)',
    padding: '10px 14px',
    borderRadius: '0.75rem'
    }}>      {transforms[tab].desc}</div>
    <div className={formGroup}>
    <label className={formLabel}>Enter your text</label>
    <textarea className={formTextarea} placeholder="Type or paste your text to transform it..." value={text} onChange={(e)=>setText(e.target.value)} style={{
    minHeight: 120
    }} />
    <div style={{
    fontSize: '0.78rem',
    color: '#64748B',
    marginTop: 4
    }}>
    {text.length}
    characters · Draft auto-saved
    </div>
    </div>
    {output && <div className={resultBoxSuccess}>
    <div style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
    }}>
    <div className={resultLabel}>Transformed Output</div>
    <button className={`${btnSecondary} ${btnSm}`} onClick={handleCopy}>      {copied ? '✅ Copied!' : '📋 Copy'}</button>
    </div>
    <div style={{
    background: 'rgba(248,250,252,0.95)',
    padding: '14px 16px',
    borderRadius: '0.75rem',
    fontSize: '1.1rem',
    lineHeight: 1.8,
    color: '#0F172A',
    wordBreak: 'break-word',
    whiteSpace: 'pre-wrap'
    }}>{output}</div>
    </div>}
    <div style={{
    display: 'flex',
    gap: 10,
    flexWrap: 'wrap'
    }}>
    {['Hello World', 'I Love You', 'Crypto Redar'].map((ex)=>
    <button key={ex} className={`${btnSecondary} ${btnSm}`} onClick={()=>setText(ex)}>
    {'Try: "'}{ex}{'"'}
    </button>
    )}
    </div>
    <div style={{
    background: 'rgba(248,250,252,0.95)',
    border: '1px solid rgba(15,23,42,0.08)',
    borderRadius: '1rem',
    padding: 16,
    fontSize: '0.85rem',
    color: '#64748B',
    lineHeight: 1.7
    }}>
    <strong style={{
    color: '#0F172A'
    }}>💡 Where to use:</strong>
    {' '}
    These Unicode text styles work everywhere — social media bios, Discord usernames, Twitter posts, WhatsApp messages, Instagram captions, and more. Capslock generator, wide text generator, mirror writing generator, and upside-down flip text all in one free tool.
    </div>
    </div>
  );
}
