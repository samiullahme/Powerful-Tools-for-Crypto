// @ts-nocheck
'use client';

import { useState, useEffect } from 'react';
import { btnCopy, formGroup, formLabel, formSelect, formTextarea, outputArea } from '@/lib/ui-classes';

export default function HashGenerator() {
  const [input, setInput] = useState('');
  const [algo, setAlgo] = useState('SHA-256');
  const [hash, setHash] = useState('');
  const [copied, setCopied] = useState(false);
  useEffect(()=>{
  async function generateHash() {
  if (!input) {
  setHash('');
  return;
  }
  try {
  const msgUint8 = new TextEncoder().encode(input);
  const hashBuffer = await crypto.subtle.digest(algo, msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map({
  "HashGenerator.useEffect.generateHash.hashHex": (b)=>b.toString(16).padStart(2, '0')
  }["HashGenerator.useEffect.generateHash.hashHex"]).join('');
  setHash(hashHex);
  } catch (err) {
  setHash('Error generating hash');
  }
  }
  generateHash();
  }, [
  input,
  algo
  ]);
  const copyToClipboard = ()=>{
  if (!hash) return;
  navigator.clipboard.writeText(hash);
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
    marginBottom: 8
    }}>
    <label className={formLabel} htmlFor="hash-input" style={{
    marginBottom: 0
    }}>Input Text</label>
    <select className={formSelect} style={{
    width: 'auto',
    padding: '4px 12px'
    }} value={algo} onChange={(e)=>setAlgo(e.target.value)}>
    <option value="SHA-1">SHA-1</option>
    <option value="SHA-256">SHA-256</option>
    <option value="SHA-384">SHA-384</option>
    <option value="SHA-512">SHA-512</option>
    </select>
    </div>
    <textarea id="hash-input" className={formTextarea} value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Type something to hash..." style={{
    minHeight: 150
    }} />
    </div>
    <div className={formGroup} style={{
    position: 'relative'
    }}>
    <label className={formLabel}>
    Hash Output (
    {algo}
    )
    </label>
    <textarea className={outputArea} value={hash} readOnly style={{
    minHeight: 100,
    fontFamily: 'monospace',
    wordBreak: 'break-all'
    }} placeholder="Hash will appear here..." />
    <button className={`${btnCopy}${copied ? ' bg-emerald-50 text-emerald-700' : ''}`} onClick={copyToClipboard} style={{
    position: 'absolute',
    top: 32,
    right: 12
    }}>      {copied ? '✅ Copied!' : '📋 Copy'}</button>
    </div>
    </div>
  );
}
