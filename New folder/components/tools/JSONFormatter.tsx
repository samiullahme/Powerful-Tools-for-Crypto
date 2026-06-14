// @ts-nocheck
'use client';

import { useState, useEffect } from 'react';
import { btnCopy, btnPrimary, btnSecondary, formGroup, formLabel, formSelect, formTextarea, outputArea } from '@/lib/ui-classes';

export default function JSONFormatter() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState(null);
  const [indent, setIndent] = useState('2');
  const [copied, setCopied] = useState(false);
  // Load saved draft on mount
  useEffect(()=>{
  const saved = localStorage.getItem('cryptoredar_json_formatter_input');
  if (saved) setInput(saved);
  }, []);
  // Save draft on change
  useEffect(()=>{
  localStorage.setItem('cryptoredar_json_formatter_input', input);
  }, [
  input
  ]);
  const formatJSON = (space)=>{
  if (!input.trim()) {
  setOutput('');
  setError(null);
  return;
  }
  try {
  const parsed = JSON.parse(input);
  setOutput(JSON.stringify(parsed, null, space));
  setError(null);
  } catch (err) {
  setError(err.message || 'Invalid JSON syntax');
  }
  };
  const minifyJSON = ()=>formatJSON(0);
  const prettifyJSON = ()=>formatJSON(parseInt(indent, 10));
  const copyToClipboard = ()=>{
  if (!output) return;
  navigator.clipboard.writeText(output);
  setCopied(true);
  setTimeout(()=>setCopied(false), 2000);
  };

  return (
    <div>
    <div className={formGroup}>
    <div style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6
    }}>
    <label className={formLabel} htmlFor="json-input">Input JSON</label>
    <div style={{
    display: 'flex',
    gap: 8,
    alignItems: 'center'
    }}>
    <span style={{
    fontSize: '0.8rem',
    color: '#64748B'
    }}>Indent:</span>
    <select className={formSelect} style={{
    padding: '2px 8px',
    fontSize: '0.8rem',
    width: 'auto'
    }} value={indent} onChange={(e)=>setIndent(e.target.value)}>
    <option value="2">2 spaces</option>
    <option value="4">4 spaces</option>
    <option value="\\t">Tabs</option>
    </select>
    </div>
    </div>
    <textarea id="json-input" className={formTextarea} placeholder={'{"paste": "your JSON here"}'} value={input} onChange={(e)=>{
    setInput(e.target.value);
    setError(null);
    }} style={{
    minHeight: 200
    }} />
    </div>
    <div style={{
    display: 'flex',
    gap: 12,
    marginBottom: 20
    }}>
    <button className={btnPrimary} onClick={prettifyJSON} disabled={!input}>Format / Prettify</button>
    <button className={btnSecondary} onClick={minifyJSON} disabled={!input}>Minify</button>
    </div>
    <div className="result-box danger" style={{
    padding: '12px 16px',
    marginBottom: 20
    }}>
    <div style={{
    color: '#EF4444',
    fontWeight: 600,
    fontSize: '0.9rem',
    display: 'flex',
    alignItems: 'center',
    gap: 8
    }}>
    ❌ Syntax Error:
    {error}
    </div>
    </div>
    <div className={formGroup} style={{
    position: 'relative'
    }}>
    <label className={formLabel} htmlFor="json-output">Output</label>
    <textarea id="json-output" className={outputArea} value={output} readOnly style={{
    minHeight: 250
    }} />
    <button className={`${btnCopy}${copied ? ' bg-emerald-50 text-emerald-700' : ''}`} onClick={copyToClipboard} style={{
    position: 'absolute',
    top: 32,
    right: 12
    }}>      {copied ? '✅ Copied!' : '📋 Copy JSON'}</button>
    </div>
    </div>
  );
}
