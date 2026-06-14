// @ts-nocheck
'use client';

const SUP_MAP = {
    '0': '⁰',
    '1': '¹',
    '2': '²',
    '3': '³',
    '4': '⁴',
    '5': '⁵',
    '6': '⁶',
    '7': '⁷',
    '8': '⁸',
    '9': '⁹',
    'a': 'ᵃ',
    'b': 'ᵇ',
    'c': 'ᶜ',
    'd': 'ᵈ',
    'e': 'ᵉ',
    'f': 'ᶠ',
    'g': 'ᵍ',
    'h': 'ʰ',
    'i': 'ⁱ',
    'j': 'ʲ',
    'k': 'ᵏ',
    'l': 'ˡ',
    'm': 'ᵐ',
    'n': 'ⁿ',
    'o': 'ᵒ',
    'p': 'ᵖ',
    'r': 'ʳ',
    's': 'ˢ',
    't': 'ᵗ',
    'u': 'ᵘ',
    'v': 'ᵛ',
    'w': 'ʷ',
    'x': 'ˣ',
    'y': 'ʸ',
    'z': 'ᶻ',
    'A': 'ᴬ',
    'B': 'ᴮ',
    'D': 'ᴰ',
    'E': 'ᴱ',
    'G': 'ᴳ',
    'H': 'ᴴ',
    'I': 'ᴵ',
    'J': 'ᴶ',
    'K': 'ᴷ',
    'L': 'ᴸ',
    'M': 'ᴹ',
    'N': 'ᴺ',
    'O': 'ᴼ',
    'P': 'ᴾ',
    'R': 'ᴿ',
    'T': 'ᵀ',
    'U': 'ᵁ',
    'V': 'ⱽ',
    'W': 'ᵂ',
    '+': '⁺',
    '-': '⁻',
    '=': '⁼',
    '(': '⁽',
    ')': '⁾'
};
const SUB_MAP = {
    '0': '₀',
    '1': '₁',
    '2': '₂',
    '3': '₃',
    '4': '₄',
    '5': '₅',
    '6': '₆',
    '7': '₇',
    '8': '₈',
    '9': '₉',
    'a': 'ₐ',
    'e': 'ₑ',
    'o': 'ₒ',
    'x': 'ₓ',
    'h': 'ₕ',
    'k': 'ₖ',
    'l': 'ₗ',
    'm': 'ₘ',
    'n': 'ₙ',
    'p': 'ₚ',
    's': 'ₛ',
    't': 'ₜ',
    'u': 'ᵤ',
    'v': 'ᵥ',
    'r': 'ᵣ',
    'i': 'ᵢ',
    'j': 'ⱼ',
    '+': '₊',
    '-': '₋',
    '=': '₌',
    '(': '₍',
    ')': '₎'
};
const convert = (s, map)=>s.split('').map((c)=>map[c] ?? c).join('');

import { useState, useEffect } from 'react';
import { btnSecondary, btnSm, formGroup, formLabel, formTextarea, resultBoxSuccess, resultLabel, tabBtn, tabBtnActive, tabs } from '@/lib/ui-classes';

export default function SuperscriptGenerator() {
  const [text, setText] = useState('');
  const [tab, setTab] = useState('superscript');
  const [copied, setCopied] = useState(false);
  useEffect(()=>{
  const saved = localStorage.getItem('cryptoredar_superscript_text');
  if (saved) setText(saved);
  }, []);
  useEffect(()=>{
  localStorage.setItem('cryptoredar_superscript_text', text);
  }, [
  text
  ]);
  const output = text ? convert(text, tab === 'superscript' ? SUP_MAP : SUB_MAP) : '';
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
    <div className={tabs}>
    <button className={tab === 'superscript' ? tabBtnActive : tabBtn} onClick={()=>setTab('superscript')}>Aˢᵘᵖ Superscript</button>
    <button className={tab === 'subscript' ? tabBtnActive : tabBtn} onClick={()=>setTab('subscript')}>Aₛᵤᵦ Subscript</button>
    </div>
    <div style={{
    fontSize: '0.88rem',
    color: '#64748B',
    background: 'rgba(248,250,252,0.95)',
    padding: '10px 14px',
    borderRadius: '0.75rem'
    }}>      {tab === 'superscript' ? '↑ Converts letters and numbers to their Unicode superscript equivalents. Great for footnotes, math, and social posts like H²O.' : '↓ Converts letters and numbers to their Unicode subscript equivalents. Perfect for chemical formulas like H₂O, CO₂.'}</div>
    <div className={formGroup}>
    <label className={formLabel}>Enter your text</label>
    <textarea className={formTextarea} placeholder={tab === 'superscript' ? 'e.g. x2 + y2 = z2...' : 'e.g. H2O or CO2...'} value={text} onChange={(e)=>setText(e.target.value)} style={{
    minHeight: 110
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
    <div className={resultLabel}>
    {tab === 'superscript' ? 'Superscript' : 'Subscript'}
    Output
    </div>
    <button className={`${btnSecondary} ${btnSm}`} onClick={handleCopy}>      {copied ? '✅ Copied!' : '📋 Copy'}</button>
    </div>
    <div style={{
    background: 'rgba(248,250,252,0.95)',
    padding: '14px 16px',
    borderRadius: '0.75rem',
    fontSize: '1.2rem',
    lineHeight: 1.8,
    color: '#0F172A',
    wordBreak: 'break-word',
    whiteSpace: 'pre-wrap'
    }}>{output}</div>
    </div>}
    <div>
    <div className={resultLabel} style={{
    marginBottom: 8
    }}>Quick Examples</div>
    <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
    gap: 10
    }}>
    {(tab === 'superscript' ? [
    ['x2+y2=z2', 'Pythagorean'],
    ['E=mc2', 'Einstein'],
    ['10th', 'Ordinal']
    ] : [
    ['H2O', 'Water'],
    ['CO2', 'Carbon Dioxide'],
    ['CH4', 'Methane']
    ]).map(([val, name])=>
    <div key={val} onClick={()=>setText(val)} style={{
    background: 'rgba(255,255,255,0.72)',
    border: '1px solid rgba(15,23,42,0.08)',
    borderRadius: '0.75rem',
    padding: '10px 14px',
    cursor: 'pointer',
    textAlign: 'center'
    }}>
    <div style={{
    fontSize: '0.75rem',
    color: '#64748B',
    marginBottom: 2
    }}>{name}</div>
    <div style={{
    color: '#6366F1',
    fontWeight: 700,
    fontSize: '1.1rem'
    }}>{convert(val, tab === 'superscript' ? SUP_MAP : SUB_MAP)}</div>
    </div>
    )}
    </div>
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
    }}>💡 Note:</strong>
    {' '}
    Not all letters have official Unicode superscript/subscript versions. Unsupported characters are kept as-is. Use this superscript and subscript generator for math notation, chemistry formulas, footnotes, and styled social media text.
    </div>
    </div>
  );
}
