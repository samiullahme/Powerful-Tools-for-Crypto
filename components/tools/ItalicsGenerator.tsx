// @ts-nocheck
'use client';

const toItalic = (str)=>{
    return str.split('').map((c)=>{
        const code = c.codePointAt(0);
        if (code >= 65 && code <= 90) return String.fromCodePoint(code - 65 + 0x1D434);
        if (code >= 97 && code <= 122) return String.fromCodePoint(code - 97 + 0x1D44E);
        return c;
    }).join('');
};
const toBoldItalic = (str)=>{
    return str.split('').map((c)=>{
        const code = c.codePointAt(0);
        if (code >= 65 && code <= 90) return String.fromCodePoint(code - 65 + 0x1D468);
        if (code >= 97 && code <= 122) return String.fromCodePoint(code - 97 + 0x1D482);
        return c;
    }).join('');
};
const toSansItalic = (str)=>{
    return str.split('').map((c)=>{
        const code = c.codePointAt(0);
        if (code >= 65 && code <= 90) return String.fromCodePoint(code - 65 + 0x1D608);
        if (code >= 97 && code <= 122) return String.fromCodePoint(code - 97 + 0x1D622);
        return c;
    }).join('');
};
const TRANSFORMS = {
    italic: toItalic,
    boldItalic: toBoldItalic,
    sansItalic: toSansItalic
};

import { useState, useEffect } from 'react';
import { btnSecondary, btnSm, formGroup, formLabel, formTextarea, resultBoxSuccess, resultLabel, tabBtn, tabBtnActive, tabs as tabsClass } from '@/lib/ui-classes';

export default function ItalicsGenerator() {
  const [text, setText] = useState('');
  const [tab, setTab] = useState('italic');
  const [copied, setCopied] = useState(false);
  useEffect(()=>{
  const saved = localStorage.getItem('cryptoredar_italics_text');
  if (saved) setText(saved);
  }, []);
  useEffect(()=>{
  localStorage.setItem('cryptoredar_italics_text', text);
  }, [
  text
  ]);
  const output = text ? TRANSFORMS[tab](text) : '';
  const handleCopy = async ()=>{
  if (!output) return;
  await navigator.clipboard.writeText(output);
  setCopied(true);
  setTimeout(()=>setCopied(false), 2000);
  };
  const tabOptions = [
  {
  id: 'italic',
  label: '𝘐𝘵𝘢𝘭𝘪𝘤',
  example: 'italic'
  },
  {
  id: 'boldItalic',
  label: '𝑩𝒐𝒍𝒅 𝑰𝒕𝒂𝒍𝒊𝒄',
  example: 'bold italic'
  },
  {
  id: 'sansItalic',
  label: '𝘚𝘢𝘯𝘴 𝘐𝘵𝘢𝘭𝘪𝘤',
  example: 'sans-serif italic'
  }
  ];

  return (
    <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
    }}>
    <div className={tabsClass}>
    {tabOptions.map((t) => (
    <button key={t.id} className={tab === t.id ? tabBtnActive : tabBtn} onClick={()=>setTab(t.id)}>{t.label}</button>
    ))}
    </div>
    <div className={formGroup}>
    <label className={formLabel}>Enter your text</label>
    <textarea className={formTextarea} placeholder="Type or paste your text here to italicize it..." value={text} onChange={(e)=>setText(e.target.value)} style={{
    minHeight: 130
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
    <div className={resultBoxSuccess}>
    <div style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
    }}>
    <div className={resultLabel}>
    {tab === 'italic' ? '𝘐𝘵𝘢𝘭𝘪𝘤' : tab === 'boldItalic' ? '𝑩𝒐𝒍𝒅 𝑰𝒕𝒂𝒍𝒊𝒄' : '𝘚𝘢𝘯𝘴 𝘐𝘵𝘢𝘭𝘪𝘤'}
    Output
    </div>
    <button className={`${btnSecondary} ${btnSm}`} onClick={handleCopy}>      {copied ? '✅ Copied!' : '📋 Copy'}</button>
    </div>
    <div style={{
    background: 'rgba(248,250,252,0.95)',
    padding: '14px 16px',
    borderRadius: '0.75rem',
    fontSize: '1.1rem',
    lineHeight: 1.7,
    color: '#0F172A',
    wordBreak: 'break-word',
    whiteSpace: 'pre-wrap'
    }}>      {output}</div>
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
    }}>💡 How it works:</strong>
    {' '}
    This italics text generator converts your regular text into Unicode italic characters that work anywhere — Twitter, Instagram, WhatsApp, Discord, Facebook, and more. Unlike HTML
    {' '}
    <em>italic</em>
    tags, these are actual Unicode letters that copy-paste as styled text everywhere.
    </div>
    </div>
  );
}
