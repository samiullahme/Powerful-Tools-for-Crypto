// @ts-nocheck
'use client';

import { useState, useEffect } from 'react';
import { btnCopy, btnIcon, formGroup, formLabel, formTextarea, outputArea, tabBtn, tabBtnActive, tabs } from '@/lib/ui-classes';

export default function Base64EncoderDecoder() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [mode, setMode] = useState('encode');
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);
  useEffect(()=>{
  if (!input) {
  setOutput('');
  setError(null);
  return;
  }
  try {
  if (mode === 'encode') {
  setOutput(btoa(unescape(encodeURIComponent(input))));
  setError(null);
  } else {
  setOutput(decodeURIComponent(escape(atob(input.trim()))));
  setError(null);
  }
  } catch (err) {
  setOutput('');
  setError(mode === 'decode' ? 'Invalid Base64 string' : 'Encoding error');
  }
  }, [
  input,
  mode
  ]);
  const copyToClipboard = ()=>{
  if (!output) return;
  navigator.clipboard.writeText(output);
  setCopied(true);
  setTimeout(()=>setCopied(false), 2000);
  };
  const handleSwap = ()=>{
  setMode(mode === 'encode' ? 'decode' : 'encode');
  setInput(output);
  };

  return (
    <div>
    <div className={tabs} style={{
    marginBottom: 20
    }}>
    <button className={mode === 'encode' ? tabBtnActive : tabBtn} onClick={()=>setMode('encode')}>Encode (Text → Base64)</button>
    <button className={mode === 'decode' ? tabBtnActive : tabBtn} onClick={()=>setMode('decode')}>Decode (Base64 → Text)</button>
    </div>
    <div className={formGroup}>
    <label className={formLabel} htmlFor="b64-input">      {mode === 'encode' ? 'Enter Text to Encode' : 'Enter Base64 to Decode'}</label>
    <textarea id="b64-input" className={formTextarea} value={input} onChange={(e)=>setInput(e.target.value)} placeholder={mode === 'encode' ? 'Type something...' : 'SGVsbG8gV29ybGQ='} style={{
    minHeight: 120
    }} />
    </div>
    <div style={{
    display: 'flex',
    justifyContent: 'center',
    margin: '16px 0'
    }}>
    <button className={btnIcon} onClick={handleSwap} style={{
    background: 'rgba(248,250,252,0.95)',
    border: '1px solid rgba(15,23,42,0.08)'
    }} title="Swap input/output">↕️</button>
    </div>
    <div className={formGroup} style={{
    position: 'relative'
    }}>
    <label className={formLabel} htmlFor="b64-output">Result</label>
    <div className={outputArea} style={{
    color: '#EF4444',
    display: 'flex',
    alignItems: 'center',
    minHeight: 120
    }}>
    ❌
    {error}
    </div>
    <button className={`${btnCopy}${copied ? ' bg-emerald-50 text-emerald-700' : ''}`} onClick={copyToClipboard} style={{
    position: 'absolute',
    top: 32,
    right: 12
    }}>      {copied ? '✅ Copied!' : '📋 Copy'}</button>
    </div>
    </div>
  );
}
