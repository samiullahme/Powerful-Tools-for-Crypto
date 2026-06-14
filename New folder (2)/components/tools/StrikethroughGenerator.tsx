// @ts-nocheck
'use client';

const applyStrike = (s, char)=>s.split('').map((c)=>c === ' ' || c === '\n' ? c : c + char).join('');
const STYLES = {
    strikethrough: {
        label: '̶S̶t̶r̶i̶k̶e̶',
        char: '\u0336',
        desc: 'Classic strikethrough — draws a line through each character.'
    },
    doubleStrike: {
        label: '̷D̷o̷u̷b̷l̷e̷',
        char: '\u0337',
        desc: 'Double/short strikethrough overlay through each character.'
    },
    crossedOut: {
        label: '̸C̸r̸o̸s̸s̸e̸d̸',
        char: '\u0338',
        desc: 'Crossed-out (solidus) overlay — like crossed out text or a cancel symbol.'
    }
};

import { useState, useEffect } from 'react';
import { btnSecondary, btnSm, formGroup, formLabel, formTextarea, resultBoxSuccess, resultLabel, tabBtn, tabBtnActive, tabs } from '@/lib/ui-classes';

export default function StrikethroughGenerator() {
  const [text, setText] = useState('');
  const [tab, setTab] = useState('strikethrough');
  const [copied, setCopied] = useState(false);
  useEffect(()=>{
  const saved = localStorage.getItem('cryptoredar_strikethrough_text');
  if (saved) setText(saved);
  }, []);
  useEffect(()=>{
  localStorage.setItem('cryptoredar_strikethrough_text', text);
  }, [
  text
  ]);
  const output = text ? applyStrike(text, STYLES[tab].char) : '';
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
    {Object.keys(STYLES).map((key)=>
    <button key={key} className={tab === key ? tabBtnActive : tabBtn} onClick={()=>setTab(key)}>{STYLES[key].label}</button>
    )}
    </div>
    <div style={{
    fontSize: '0.88rem',
    color: '#64748B',
    background: 'rgba(248,250,252,0.95)',
    padding: '10px 14px',
    borderRadius: '0.75rem'
    }}>      {STYLES[tab].desc}</div>
    <div className={formGroup}>
    <label className={formLabel}>Enter your text</label>
    <textarea className={formTextarea} placeholder="Type text to apply strikethrough formatting..." value={text} onChange={(e)=>setText(e.target.value)} style={{
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
    <div className={resultLabel}>Strikethrough Output</div>
    <button className={`${btnSecondary} ${btnSm}`} onClick={handleCopy}>      {copied ? '✅ Copied!' : '📋 Copy'}</button>
    </div>
    <div style={{
    background: 'rgba(248,250,252,0.95)',
    padding: '14px 16px',
    borderRadius: '0.75rem',
    fontSize: '1.15rem',
    lineHeight: 1.8,
    color: '#0F172A',
    wordBreak: 'break-word',
    whiteSpace: 'pre-wrap'
    }}>{output}</div>
    </div>}
    <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
    gap: 10
    }}>
    {['Hello World', 'Sale Price', 'OLD TEXT'].map((ex)=>
    <div key={ex} onClick={()=>setText(ex)} style={{
    background: 'rgba(255,255,255,0.72)',
    border: '1px solid rgba(15,23,42,0.08)',
    borderRadius: '0.75rem',
    padding: '10px 14px',
    cursor: 'pointer',
    fontSize: '0.88rem',
    textAlign: 'center',
    transition: 'border-color 0.2s'
    }} onMouseEnter={(e)=>e.currentTarget.style.borderColor = '#0F172A'} onMouseLeave={(e)=>e.currentTarget.style.borderColor = 'rgba(15,23,42,0.08)'}>
    <div style={{
    color: '#64748B',
    fontSize: '0.75rem',
    marginBottom: 4
    }}>Try example</div>
    <div style={{
    color: '#0F172A'
    }}>{applyStrike(ex, STYLES[tab].char)}</div>
    </div>
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
    }}>💡 Works everywhere:</strong>
    {' '}
    These strikethrough characters use Unicode combining overlays, so they work on Twitter, Instagram, Facebook, Discord, WhatsApp, Reddit, and any platform that supports Unicode text. Use it for crossed out text, line through text, strike out text, or crossed out font effects.
    </div>
    </div>
  );
}
