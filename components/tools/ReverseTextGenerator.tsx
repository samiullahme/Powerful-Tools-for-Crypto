// @ts-nocheck
'use client';

import { useState, useEffect } from 'react';
import { btnSecondary, btnSm, formGroup, formLabel, formTextarea, resultBoxSuccess, resultLabel, tabBtn, tabBtnActive, tabs } from '@/lib/ui-classes';

export default function ReverseTextGenerator() {
  const [text, setText] = useState('');
  const [tab, setTab] = useState('reverseText');
  const [copied, setCopied] = useState(false);
  useEffect(()=>{
  const saved = localStorage.getItem('cryptoredar_reverse_text');
  if (saved) setText(saved);
  }, []);
  useEffect(()=>{
  localStorage.setItem('cryptoredar_reverse_text', text);
  }, [
  text
  ]);
  const reverseText = (s)=>s.split('').reverse().join('');
  const reverseWords = (s)=>s.split('\n').map((line)=>line.split(' ').reverse().join(' ')).join('\n');
  const output = text ? tab === 'reverseText' ? reverseText(text) : reverseWords(text) : '';
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
    <button className={tab === 'reverseText' ? tabBtnActive : tabBtn} onClick={()=>setTab('reverseText')}>🔄 Reverse Text</button>
    <button className={tab === 'reverseWords' ? tabBtnActive : tabBtn} onClick={()=>setTab('reverseWords')}>🔀 Reverse Words</button>
    </div>
    <div style={{
    fontSize: '0.88rem',
    color: '#64748B',
    background: 'rgba(248,250,252,0.95)',
    padding: '10px 14px',
    borderRadius: '0.75rem'
    }}>      {tab === 'reverseText' ? '🔄 Reverses every character in your text. "Hello World" → "dlroW olleH"' : '🔀 Reverses the order of words, keeping each word intact. "Hello World" → "World Hello"'}</div>
    <div className={formGroup}>
    <label className={formLabel}>Enter your text</label>
    <textarea className={formTextarea} placeholder={tab === 'reverseText' ? 'Type text to reverse it character by character...' : 'Type text to reverse the word order...'} value={text} onChange={(e)=>setText(e.target.value)} style={{
    minHeight: 130
    }} />
    <div style={{
    fontSize: '0.78rem',
    color: '#64748B',
    marginTop: 4
    }}>
    {text.length}
    characters ·
    {text.trim() ? text.trim().split(/\s+/).length : 0}
    words · Draft auto-saved
    </div>
    </div>
    {output && <div className={resultBoxSuccess}>
    <div style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
    }}>
    <div className={resultLabel}>{tab === 'reverseText' ? 'Reversed Text' : 'Reversed Words'}</div>
    <button className={`${btnSecondary} ${btnSm}`} onClick={handleCopy}>{copied ? '✅ Copied!' : '📋 Copy'}</button>
    </div>
    <div style={{
    background: 'rgba(248,250,252,0.95)',
    padding: '14px 16px',
    borderRadius: '0.75rem',
    fontSize: '1rem',
    lineHeight: 1.7,
    color: '#0F172A',
    wordBreak: 'break-word',
    whiteSpace: 'pre-wrap'
    }}>{output}</div>
    </div>}
    {text && output && <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 12
    }}>
    {[
    { label: 'Original', value: text },
    { label: tab === 'reverseText' ? 'Reversed' : 'Words Reversed', value: output }
    ].map((item)=>
    <div key={item.label} style={{
    background: 'rgba(255,255,255,0.72)',
    border: '1px solid rgba(15,23,42,0.08)',
    borderRadius: '0.75rem',
    padding: 12
    }}>
    <div style={{
    fontSize: '0.75rem',
    color: '#64748B',
    marginBottom: 6,
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.05em'
    }}>{item.label}</div>
    <div style={{
    fontSize: '0.9rem',
    color: '#0F172A',
    wordBreak: 'break-word'
    }}>
    {item.value.slice(0, 120)}
    {item.value.length > 120 ? '…' : ''}
    </div>
    </div>
    )}
    </div>}
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
    }}>💡 Use cases:</strong>
    {' '}
    Reverse text for social media tricks, mirror writing, backwards name games, creative art, secret messages, and fun puzzles. Works as a backwards text generator, text reverser, invert text generator, and backwards translator all in one.
    </div>
    </div>
  );
}
