// @ts-nocheck
'use client';

import { useState, useEffect } from 'react';
import { btnCopy, btnPrimary, formGroup, formTextarea, tabBtn, tabBtnActive, tabs } from '@/lib/ui-classes';

export default function RemoveLineBreaks() {
  const [text, setText] = useState('');
  const [mode, setMode] = useState('preserve-para');
  const [copied, setCopied] = useState(false);
  // Load saved draft on mount
  useEffect(()=>{
  const saved = localStorage.getItem('cryptoredar_remove_linebreaks_text');
  if (saved) setText(saved);
  }, []);
  // Save draft on change
  useEffect(()=>{
  localStorage.setItem('cryptoredar_remove_linebreaks_text', text);
  }, [
  text
  ]);
  const handleRemove = ()=>{
  if (!text) return;
  let res = text;
  if (mode === 'preserve-para') {
  // Replace single newlines with space, but preserve double newlines (paragraphs)
  // First normalize all newlines to \n
  res = res.replace(/\r\n/g, '\n');
  // Replace single newlines with space
  res = res.replace(/(?<!\n)\n(?!\n)/g, ' ');
  } else {
  // Remove all line breaks and replace with space
  res = res.replace(/(\r\n|\n|\r)/gm, ' ');
  }
  // Clean up multiple spaces
  res = res.replace(/ +/g, ' ').trim();
  setText(res);
  };
  const copyToClipboard = ()=>{
  if (!text) return;
  navigator.clipboard.writeText(text);
  setCopied(true);
  setTimeout(()=>setCopied(false), 2000);
  };

  return (
    <div>
    <div className={tabs} style={{
    marginBottom: 16
    }}>
    <button className={mode === 'preserve-para' ? tabBtnActive : tabBtn} onClick={()=>setMode('preserve-para')}>Remove Line Breaks (Preserve Paragraphs)</button>
    <button className={mode === 'all' ? tabBtnActive : tabBtn} onClick={()=>setMode('all')}>Remove ALL Line Breaks</button>
    </div>
    <div className={formGroup} style={{
    position: 'relative'
    }}>
    <textarea className={formTextarea} value={text} onChange={(e)=>setText(e.target.value)} placeholder="Paste text with messy line breaks (e.g. copied from PDF)..." style={{
    minHeight: 300,
    fontSize: '1rem',
    lineHeight: 1.6
    }} />
    <div style={{
    position: 'absolute',
    top: 12,
    right: 12,
    display: 'flex',
    gap: 8
    }}>
    <button className={`${btnCopy}${copied ? ' bg-emerald-50 text-emerald-700' : ''}`} onClick={copyToClipboard}>      {copied ? '✅ Copied!' : '📋 Copy'}</button>
    <button className={btnCopy} onClick={()=>setText('')}>Clear</button>
    </div>
    </div>
    <div style={{
    textAlign: 'center'
    }}>
    <button className={btnPrimary} onClick={handleRemove} disabled={!text} style={{
    padding: '12px 32px'
    }}>Format Text</button>
    </div>
    </div>
  );
}
