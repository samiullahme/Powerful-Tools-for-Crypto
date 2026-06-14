// @ts-nocheck
'use client';

import { useState, useEffect } from 'react';
import { btnCopy, btnPrimary, formGroup, formInput, formLabel, formRow, resultBox, resultLabel } from '@/lib/ui-classes';

export default function UUIDGenerator() {
  const [uuids, setUuids] = useState([]);
  const [count, setCount] = useState('1');
  const [copied, setCopied] = useState(null);
  const generateUUID = ()=>{
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
  const r = Math.random() * 16 | 0;
  const v = c === 'x' ? r : r & 0x3 | 0x8;
  return v.toString(16);
  });
  };
  const handleGenerate = ()=>{
  const c = parseInt(count, 10) || 1;
  const safeCount = Math.min(Math.max(c, 1), 100);
  const newUuids = Array.from({
  length: safeCount
  }, generateUUID);
  setUuids(newUuids);
  };
  // Generate 1 on mount
  useEffect(()=>{
  handleGenerate();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const copySingle = (uuid, index)=>{
  navigator.clipboard.writeText(uuid);
  setCopied(index);
  setTimeout(()=>setCopied(null), 2000);
  };
  const copyAll = ()=>{
  navigator.clipboard.writeText(uuids.join('\n'));
  setCopied('all');
  setTimeout(()=>setCopied(null), 2000);
  };

  return (
    <div>
    <div className={formRow} style={{
    alignItems: 'flex-end',
    marginBottom: 24
    }}>
    <div className={formGroup} style={{
    marginBottom: 0
    }}>
    <label className={formLabel} htmlFor="uuid-count-input">How many UUIDs? (Max 100)</label>
    <input id="uuid-count-input" className={formInput} type="number" value={count} onChange={(e)=>setCount(e.target.value)} min="1" max="100" />
    </div>
    <button className={btnPrimary} onClick={handleGenerate}>Generate v4 UUIDs</button>
    </div>
    <div className={resultBox}>
    <div style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12
    }}>
    <div className={resultLabel}>Generated UUIDs</div>
    <button className={`${btnCopy}${copied === 'all' ? ' bg-emerald-50 text-emerald-700' : ''}`} onClick={copyAll}>      {copied === 'all' ? '✅ Copied All' : '📋 Copy All'}</button>
    </div>
    <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    maxHeight: 400,
    overflowY: 'auto'
    }}>
    {uuids.map((uuid, i) => (
    <div key={i} style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'rgba(248,250,252,0.95)',
    padding: '10px 16px',
    borderRadius: '1rem',
    border: '1px solid rgba(15,23,42,0.08)',
    fontFamily: 'monospace',
    fontSize: '1rem'
    }}>
    <span>{uuid}</span>
    <button onClick={()=>copySingle(uuid, i)} style={{
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1.2rem',
    opacity: 0.6,
    transition: 'opacity 0.2s'
    }} title="Copy" onMouseEnter={(e)=>e.currentTarget.style.opacity = '1'} onMouseLeave={(e)=>e.currentTarget.style.opacity = '0.6'}>{copied === i ? '✅' : '📋'}</button>
    </div>
    ))}
    </div>
    </div>
    </div>
  );
}
