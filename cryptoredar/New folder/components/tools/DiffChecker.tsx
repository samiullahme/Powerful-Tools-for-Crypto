// @ts-nocheck
'use client';

import { useState, useEffect } from 'react';
import { btnPrimary, btnSecondary, formGroup, formLabel, formTextarea, resultBox } from '@/lib/ui-classes';

export default function DiffChecker() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [diff, setDiff] = useState(null);
  // Load saved drafts on mount
  useEffect(()=>{
  const saved1 = localStorage.getItem('cryptoredar_diff_text1');
  const saved2 = localStorage.getItem('cryptoredar_diff_text2');
  if (saved1) setText1(saved1);
  if (saved2) setText2(saved2);
  }, []);
  // Save drafts on change
  useEffect(()=>{
  localStorage.setItem('cryptoredar_diff_text1', text1);
  }, [
  text1
  ]);
  useEffect(()=>{
  localStorage.setItem('cryptoredar_diff_text2', text2);
  }, [
  text2
  ]);
  const computeDiff = ()=>{
  if (!text1 && !text2) return;
  // Very simple line-based diff for demonstration
  // (A real robust diff checker would use an external library like 'diff',
  // but we'll do a simple array comparison here to avoid dependencies)
  const lines1 = text1.split('\n');
  const lines2 = text2.split('\n');
  const result = [];
  const maxLines = Math.max(lines1.length, lines2.length);
  for(let i = 0; i < maxLines; i++){
  const l1 = lines1[i];
  const l2 = lines2[i];
  if (l1 === l2) {
  if (l1 !== undefined) result.push({
  type: 'unchanged',
  value: l1
  });
  } else {
  if (l1 !== undefined) result.push({
  type: 'removed',
  value: l1
  });
  if (l2 !== undefined) result.push({
  type: 'added',
  value: l2
  });
  }
  }
  setDiff(result);
  };
  const clear = ()=>{
  setText1('');
  setText2('');
  setDiff(null);
  };

  return (
    <div>
    <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 16,
    marginBottom: 16
    }}>
    <div className={formGroup}>
    <label className={formLabel} htmlFor="diff-orig-input">Original Text</label>
    <textarea id="diff-orig-input" className={formTextarea} value={text1} onChange={(e)=>setText1(e.target.value)} style={{
    minHeight: 200,
    fontFamily: 'monospace',
    fontSize: '0.9rem'
    }} />
    </div>
    <div className={formGroup}>
    <label className={formLabel} htmlFor="diff-new-input">Changed Text</label>
    <textarea id="diff-new-input" className={formTextarea} value={text2} onChange={(e)=>setText2(e.target.value)} style={{
    minHeight: 200,
    fontFamily: 'monospace',
    fontSize: '0.9rem'
    }} />
    </div>
    </div>
    <div style={{
    display: 'flex',
    gap: 12,
    justifyContent: 'center',
    marginBottom: 24
    }}>
    <button className={btnPrimary} onClick={computeDiff} disabled={!text1 && !text2}>Compare Text</button>
    <button className={btnSecondary} onClick={clear}>Clear</button>
    </div>
    {diff && <div className={resultBox} style={{
    padding: 0,
    overflow: 'hidden'
    }}>
    <div style={{
    padding: '12px 16px',
    background: 'rgba(248,250,252,0.95)',
    borderBottom: '1px solid rgba(15,23,42,0.08)',
    fontWeight: 600
    }}>Comparison Result</div>
    <div style={{
    fontFamily: 'monospace',
    fontSize: '0.9rem',
    lineHeight: 1.5,
    overflowX: 'auto',
    maxHeight: 500
    }}>
    {diff.map((part, i) => (
    <div key={i} style={{
    display: 'flex',
    background: part.type === 'added' ? 'rgba(16,185,129,0.1)' : part.type === 'removed' ? 'rgba(239,68,68,0.1)' : 'transparent',
    color: part.type === 'added' ? '#10B981' : part.type === 'removed' ? '#EF4444' : '#0F172A',
    padding: '2px 16px',
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-all'
    }}>
    <span style={{
    width: 24,
    flexShrink: 0,
    opacity: 0.5,
    userSelect: 'none'
    }}>{part.type === 'added' ? '+' : part.type === 'removed' ? '-' : ' '}</span>
    <span>{part.value || ' '}</span>
    </div>
    ))}
    </div>
    </div>}
    </div>
  );
}
