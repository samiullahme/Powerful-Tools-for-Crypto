// @ts-nocheck
'use client';

import { useState, useEffect } from 'react';
import { btnSecondary, btnSm, formGroup, formLabel, formSelect, formTextarea, resultBoxSuccess, resultLabel, tabBtn, tabBtnActive, tabs } from '@/lib/ui-classes';

export default function TextSorter() {
  const [tab, setTab] = useState('alpha');
  // Alpha states
  const [alphaText, setAlphaText] = useState('');
  const [alphaOrder, setAlphaOrder] = useState('az');
  const [alphaMode, setAlphaMode] = useState('lines');
  // Number states
  const [numberText, setNumberText] = useState('');
  const [numOrder, setNumOrder] = useState('asc');
  const [copied, setCopied] = useState(false);
  useEffect(()=>{
  const a = localStorage.getItem('cryptoredar_sorter_alpha');
  const n = localStorage.getItem('cryptoredar_sorter_number');
  if (a) setAlphaText(a);
  if (n) setNumberText(n);
  }, []);
  useEffect(()=>{
  localStorage.setItem('cryptoredar_sorter_alpha', alphaText);
  }, [
  alphaText
  ]);
  useEffect(()=>{
  localStorage.setItem('cryptoredar_sorter_number', numberText);
  }, [
  numberText
  ]);
  const sortAlpha = ()=>{
  if (!alphaText.trim()) return '';
  if (alphaMode === 'lines') {
  const lines = alphaText.split('\n').filter((l)=>l.trim());
  lines.sort((a, b)=>a.localeCompare(b, undefined, {
  sensitivity: 'base'
  }));
  return (alphaOrder === 'za' ? lines.reverse() : lines).join('\n');
  } else {
  const words = alphaText.split(/\s+/).filter(Boolean);
  words.sort((a, b)=>a.localeCompare(b, undefined, {
  sensitivity: 'base'
  }));
  return (alphaOrder === 'za' ? words.reverse() : words).join(' ');
  }
  };
  const sortNumbers = ()=>{
  if (!numberText.trim()) return '';
  const nums = numberText.split(/[\s,\n]+/).filter(Boolean).map(Number).filter((n)=>!isNaN(n));
  nums.sort((a, b)=>numOrder === 'asc' ? a - b : b - a);
  return nums.join(', ');
  };
  const output = tab === 'alpha' ? sortAlpha() : sortNumbers();
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
    <button className={tab === 'alpha' ? tabBtnActive : tabBtn} onClick={()=>setTab('alpha')}>🔤 Alphabetical Sorter</button>
    <button className={tab === 'number' ? tabBtnActive : tabBtn} onClick={()=>setTab('number')}>🔢 Number Sorter</button>
    </div>
    <>
    <div style={{
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap'
    }}>
    <div className={formGroup} style={{
    flex: 1,
    minWidth: 160
    }}>
    <label className={formLabel}>Sort Mode</label>
    <select className={formSelect} value={alphaMode} onChange={(e)=>setAlphaMode(e.target.value)}>
    <option value="lines">Sort Lines (one per line)</option>
    <option value="words">Sort Words (space-separated)</option>
    </select>
    </div>
    <div className={formGroup} style={{
    flex: 1,
    minWidth: 160
    }}>
    <label className={formLabel}>Order</label>
    <select className={formSelect} value={alphaOrder} onChange={(e)=>setAlphaOrder(e.target.value)}>
    <option value="az">A → Z (Ascending)</option>
    <option value="za">Z → A (Descending)</option>
    </select>
    </div>
    </div>
    <div className={formGroup}>
    <label className={formLabel}>Enter words or lines to sort</label>
    <textarea className={formTextarea} placeholder={'Enter items to sort alphabetically...\nOne item per line for line mode\nOr separated by spaces for word mode'} value={alphaText} onChange={(e)=>setAlphaText(e.target.value)} style={{
    minHeight: 140
    }} />
    <div style={{
    fontSize: '0.78rem',
    color: '#64748B',
    marginTop: 4
    }}>
    {alphaText.trim().split('\n').filter(Boolean).length}
    lines · Draft auto-saved
    </div>
    </div>
    </>
    <>
    <div className={formGroup} style={{
    maxWidth: 240
    }}>
    <label className={formLabel}>Sort Order</label>
    <select className={formSelect} value={numOrder} onChange={(e)=>setNumOrder(e.target.value)}>
    <option value="asc">Ascending (smallest first)</option>
    <option value="desc">Descending (largest first)</option>
    </select>
    </div>
    <div className={formGroup}>
    <label className={formLabel}>Enter numbers (comma, space, or newline separated)</label>
    <textarea className={formTextarea} placeholder={'e.g. 42, 7, 100, 3\nor one per line:\n42\n7\n100'} value={numberText} onChange={(e)=>setNumberText(e.target.value)} style={{
    minHeight: 130
    }} />
    <div style={{
    fontSize: '0.78rem',
    color: '#64748B',
    marginTop: 4
    }}>
    {numberText.trim().split(/[\s,\n]+/).filter(Boolean).length}
    numbers · Draft auto-saved
    </div>
    </div>
    </>
    <div className={resultBoxSuccess}>
    <div style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
    }}>
    <div className={resultLabel}>      {tab === 'alpha' ? `Sorted ${alphaOrder === 'az' ? 'A→Z' : 'Z→A'}` : `Sorted ${numOrder === 'asc' ? '↑ Ascending' : '↓ Descending'}`}</div>
    <button className={`${btnSecondary} ${btnSm}`} onClick={handleCopy}>      {copied ? '✅ Copied!' : '📋 Copy'}</button>
    </div>
    <div style={{
    background: 'rgba(248,250,252,0.95)',
    padding: '14px 16px',
    borderRadius: '0.75rem',
    fontSize: '1rem',
    lineHeight: 1.8,
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
    }}>💡 Use cases:</strong>
    {' '}
    Sort lists alphabetically for reports, presentations, coding, or data cleaning. Use as an alphabetical order generator, abc order sorter, or alphabetical order sorter. The number sorter is great for arranging datasets, prices, scores, or statistics in ascending or descending order.
    </div>
    </div>
  );
}
