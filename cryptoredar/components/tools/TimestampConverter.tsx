// @ts-nocheck
'use client';

import { useState, useEffect } from 'react';
import { formGroup, formInput, formLabel, resultBox, resultLabel, tabBtn, tabBtnActive } from '@/lib/ui-classes';

export default function TimestampConverter() {
  const [timestamp, setTimestamp] = useState('');
  const [isoString, setIsoString] = useState('');
  // Current time state
  const [currentTs, setCurrentTs] = useState(Math.floor(Date.now() / 1000));
  const [currentMode, setCurrentMode] = useState('s');
  useEffect(()=>{
  const timer = setInterval({
  "TimestampConverter.useEffect.timer": ()=>{
  setCurrentTs(currentMode === 's' ? Math.floor(Date.now() / 1000) : Date.now());
  }
  }["TimestampConverter.useEffect.timer"], currentMode === 's' ? 1000 : 100);
  return ({
  "TimestampConverter.useEffect": ()=>clearInterval(timer)
  })["TimestampConverter.useEffect"];
  }, [
  currentMode
  ]);
  // Convert timestamp to human readable
  const [resultTs, setResultTs] = useState(null);
  const [errorTs, setErrorTs] = useState(null);
  useEffect(()=>{
  if (!timestamp.trim()) {
  setResultTs(null);
  setErrorTs(null);
  return;
  }
  try {
  let num = parseInt(timestamp, 10);
  if (isNaN(num)) throw new Error('Invalid number');
  // Auto-detect seconds vs ms (heuristic: if < year 3000 in seconds, treat as seconds)
  if (num < 32503680000) num = num * 1000;
  const date = new Date(num);
  if (isNaN(date.getTime())) throw new Error('Invalid date format');
  const now = new Date();
  const diffMs = date.getTime() - now.getTime();
  const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));
  let relative = '';
  if (Math.abs(diffDays) < 1) relative = 'Today';
  else if (diffDays === -1) relative = 'Yesterday';
  else if (diffDays === 1) relative = 'Tomorrow';
  else if (diffDays < 0) relative = `${Math.abs(diffDays)} days ago`;
  else relative = `In ${diffDays} days`;
  setResultTs({
  gmt: date.toUTCString(),
  local: date.toLocaleString(),
  relative
  });
  setErrorTs(null);
  } catch (e) {
  setResultTs(null);
  setErrorTs('Invalid timestamp');
  }
  }, [
  timestamp
  ]);
  // Convert string to timestamp
  const [resultIso, setResultIso] = useState(null);
  const [errorIso, setErrorIso] = useState(null);
  useEffect(()=>{
  if (!isoString.trim()) {
  setResultIso(null);
  setErrorIso(null);
  return;
  }
  try {
  const date = new Date(isoString);
  if (isNaN(date.getTime())) throw new Error('Invalid date string');
  setResultIso({
  s: Math.floor(date.getTime() / 1000),
  ms: date.getTime()
  });
  setErrorIso(null);
  } catch (e) {
  setResultIso(null);
  setErrorIso('Invalid date format (Try: YYYY-MM-DD or ISO 8601)');
  }
  }, [
  isoString
  ]);

  return (
    <div>
    <div className={resultBox} style={{
    marginBottom: 32,
    textAlign: 'center',
    background: 'rgba(99,102,241,0.08)',
    border: '1px solid rgba(139,92,246,0.3)'
    }}>
    <div className={resultLabel} style={{
    color: '#6366F1',
    marginBottom: 8
    }}>Current Epoch Time</div>
    <div style={{
    fontSize: '2.5rem',
    fontWeight: 800,
    color: '#0F172A',
    fontFamily: 'monospace',
    letterSpacing: '2px',
    cursor: 'pointer'
    }} onClick={()=>navigator.clipboard.writeText(currentTs.toString())} title="Click to copy">      {currentTs}</div>
    <div style={{
    display: 'flex',
    justifyContent: 'center',
    gap: 12,
    marginTop: 12
    }}>
    <button className={currentMode === 's' ? tabBtnActive : tabBtn} onClick={()=>setCurrentMode('s')} style={{
    padding: '4px 12px',
    fontSize: '0.8rem'
    }}>Seconds</button>
    <button className={currentMode === 'ms' ? tabBtnActive : tabBtn} onClick={()=>setCurrentMode('ms')} style={{
    padding: '4px 12px',
    fontSize: '0.8rem'
    }}>Milliseconds</button>
    </div>
    </div>
    <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: 24
    }}>
    <div style={{
    background: 'rgba(248,250,252,0.95)',
    padding: 20,
    borderRadius: '1.25rem',
    border: '1px solid rgba(15,23,42,0.08)'
    }}>
    <h3 style={{
    fontSize: '1.1rem',
    marginBottom: 16
    }}>Timestamp to Date</h3>
    <div className={formGroup}>
    <label className={formLabel} htmlFor="ts-input">Unix Timestamp (s or ms)</label>
    <input id="ts-input" className={formInput} type="number" value={timestamp} onChange={(e)=>setTimestamp(e.target.value)} placeholder="e.g. 1704067200" />
    </div>
    {errorTs && <div style={{
    color: '#EF4444',
    fontSize: '0.85rem'
    }}>
    ❌ {errorTs}
    </div>}
    {resultTs && <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    marginTop: 16,
    fontSize: '0.9rem'
    }}>
    <div>
    <div style={{
    color: '#64748B',
    fontSize: '0.75rem',
    marginBottom: 2
    }}>GMT/UTC</div>
    <div style={{
    fontWeight: 600
    }}>      {resultTs.gmt}</div>
    </div>
    <div>
    <div style={{
    color: '#64748B',
    fontSize: '0.75rem',
    marginBottom: 2
    }}>Your Local Time</div>
    <div style={{
    fontWeight: 600,
    color: '#6366F1'
    }}>      {resultTs.local}</div>
    </div>
    <div>
    <div style={{
    color: '#64748B',
    fontSize: '0.75rem',
    marginBottom: 2
    }}>Relative</div>
    <div style={{
    fontWeight: 600
    }}>{resultTs.relative}</div>
    </div>
    </div>}
    </div>
    <div style={{
    background: 'rgba(248,250,252,0.95)',
    padding: 20,
    borderRadius: '1.25rem',
    border: '1px solid rgba(15,23,42,0.08)'
    }}>
    <h3 style={{
    fontSize: '1.1rem',
    marginBottom: 16
    }}>Date to Timestamp</h3>
    <div className={formGroup}>
    <label className={formLabel} htmlFor="date-input">Date String (e.g. YYYY-MM-DD)</label>
    <input id="date-input" className={formInput} type="text" value={isoString} onChange={(e)=>setIsoString(e.target.value)} placeholder="2024-01-01 12:00:00" />
    </div>
    {errorIso && <div style={{
    color: '#EF4444',
    fontSize: '0.85rem'
    }}>
    ❌ {errorIso}
    </div>}
    {resultIso && <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    marginTop: 16,
    fontSize: '0.9rem'
    }}>
    <div>
    <div style={{
    color: '#64748B',
    fontSize: '0.75rem',
    marginBottom: 2
    }}>Seconds</div>
    <div style={{
    fontWeight: 600,
    fontFamily: 'monospace',
    fontSize: '1.1rem',
    color: '#6366F1'
    }}>      {resultIso.s}</div>
    </div>
    <div>
    <div style={{
    color: '#64748B',
    fontSize: '0.75rem',
    marginBottom: 2
    }}>Milliseconds</div>
    <div style={{
    fontWeight: 600,
    fontFamily: 'monospace',
    fontSize: '1.1rem'
    }}>{resultIso.ms}</div>
    </div>
    </div>}
    </div>
    </div>
    </div>
  );
}
