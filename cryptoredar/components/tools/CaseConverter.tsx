// @ts-nocheck
'use client';

import { useState, useEffect } from 'react';
import { btnCopy, btnSecondary, btnSm, formGroup, formTextarea } from '@/lib/ui-classes';

export default function CaseConverter() {
  const [text, setText] = useState('');
  const [copied, setCopied] = useState(false);
  // Load saved draft on mount
  useEffect(()=>{
  const saved = localStorage.getItem('cryptoredar_case_converter_text');
  if (saved) setText(saved);
  }, []);
  // Save draft on change
  useEffect(()=>{
  localStorage.setItem('cryptoredar_case_converter_text', text);
  }, [
  text
  ]);
  const convert = (type)=>{
  if (!text) return;
  let res = text;
  switch(type){
  case 'upper':
  res = text.toUpperCase();
  break;
  case 'lower':
  res = text.toLowerCase();
  break;
  case 'title':
  res = text.toLowerCase().split(' ').map((w)=>w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  break;
  case 'sentence':
  res = text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, (c)=>c.toUpperCase());
  break;
  case 'camel':
  res = text.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr)=>chr.toUpperCase());
  break;
  case 'snake':
  res = text.replace(/\W+/g, ' ').split(/ |\B(?=[A-Z])/).map((word)=>word.toLowerCase()).join('_');
  break;
  case 'kebab':
  res = text.replace(/\W+/g, ' ').split(/ |\B(?=[A-Z])/).map((word)=>word.toLowerCase()).join('-');
  break;
  }
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
    <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 16
    }}>
    <button className={`${btnSecondary} ${btnSm}`} onClick={()=>convert('sentence')}>Sentence case</button>
    <button className={`${btnSecondary} ${btnSm}`} onClick={()=>convert('lower')}>lower case</button>
    <button className={`${btnSecondary} ${btnSm}`} onClick={()=>convert('upper')}>UPPER CASE</button>
    <button className={`${btnSecondary} ${btnSm}`} onClick={()=>convert('title')}>Title Case</button>
    <button className={`${btnSecondary} ${btnSm}`} onClick={()=>convert('camel')}>camelCase</button>
    <button className={`${btnSecondary} ${btnSm}`} onClick={()=>convert('snake')}>snake_case</button>
    <button className={`${btnSecondary} ${btnSm}`} onClick={()=>convert('kebab')}>kebab-case</button>
    </div>
    <div className={formGroup} style={{
    position: 'relative'
    }}>
    <textarea className={formTextarea} value={text} onChange={(e)=>setText(e.target.value)} placeholder="Type or paste text here..." style={{
    minHeight: 300,
    fontSize: '1rem'
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
    fontSize: '0.85rem',
    color: '#64748B'
    }}>
    Character Count:
    <span style={{
    color: '#0F172A'
    }}>      {text.length}</span>
    </div>
    </div>
  );
}
