// @ts-nocheck
'use client';

import { useState, useEffect } from 'react';
import { btnCopy, btnPrimary, formGroup, formLabel, resultBox } from '@/lib/ui-classes';

export default function PasswordGenerator() {
  const [length, setLength] = useState(16);
  const [useUpper, setUseUpper] = useState(true);
  const [useLower, setUseLower] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(true);
  const [password, setPassword] = useState('');
  const [copied, setCopied] = useState(false);
  const generatePassword = ()=>{
  let chars = '';
  if (useUpper) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (useLower) chars += 'abcdefghijklmnopqrstuvwxyz';
  if (useNumbers) chars += '0123456789';
  if (useSymbols) chars += '!@#$%^&*()_+~`|}{[]:;?><,./-=';
  if (!chars) {
  setPassword('Select at least one character type!');
  return;
  }
  let result = '';
  const array = new Uint32Array(length);
  crypto.getRandomValues(array);
  for(let i = 0; i < length; i++){
  result += chars[array[i] % chars.length];
  }
  setPassword(result);
  };
  useEffect(()=>{
  generatePassword();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
  length,
  useUpper,
  useLower,
  useNumbers,
  useSymbols
  ]);
  const copyToClipboard = ()=>{
  if (password === 'Select at least one character type!') return;
  navigator.clipboard.writeText(password);
  setCopied(true);
  setTimeout(()=>setCopied(false), 2000);
  };
  // Calculate entropy/strength roughly
  let poolSize = 0;
  if (useUpper) poolSize += 26;
  if (useLower) poolSize += 26;
  if (useNumbers) poolSize += 10;
  if (useSymbols) poolSize += 30;
  const entropy = poolSize > 0 ? length * Math.log2(poolSize) : 0;
  let strength = 'Weak';
  let strengthColor = '#EF4444';
  if (entropy > 60) {
  strength = 'Strong';
  strengthColor = 'var(--success)';
  } else if (entropy > 40) {
  strength = 'Good';
  strengthColor = '#0F766E';
  }

  return (
    <div>
    <div className={resultBox} style={{
    marginBottom: 24,
    textAlign: 'center',
    position: 'relative'
    }}>
    <div style={{
    fontSize: '2rem',
    fontFamily: 'monospace',
    wordBreak: 'break-all',
    minHeight: '3rem',
    color: '#0F172A',
    letterSpacing: '2px'
    }}>      {password}</div>
    <button className={`${btnCopy}${copied ? ' bg-emerald-50 text-emerald-700' : ''}`} onClick={copyToClipboard} style={{
    position: 'absolute',
    top: 12,
    right: 12
    }}>      {copied ? '✅' : '📋 Copy'}</button>
    <div style={{
    marginTop: 12,
    fontSize: '0.85rem',
    color: strengthColor,
    fontWeight: 600
    }}>
    Strength:
    {strength}
    </div>
    </div>
    <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: 24
    }}>
    <div>
    <div className={formGroup}>
    <label className={formLabel} style={{
    display: 'flex',
    justifyContent: 'space-between'
    }}>
    <span>Password Length</span>
    <span style={{
    color: '#6366F1',
    fontWeight: 700
    }}>      {length}</span>
    </label>
    <input type="range" min="4" max="64" value={length} onChange={(e)=>setLength(parseInt(e.target.value))} style={{
    width: '100%',
    accentColor: '#6366F1',
    cursor: 'pointer'
    }} />
    </div>
    </div>
    <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
    }}>
    <label style={{
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    cursor: 'pointer',
    userSelect: 'none'
    }}>
    <input type="checkbox" checked={useUpper} onChange={(e)=>setUseUpper(e.target.checked)} style={{
    width: 18,
    height: 18,
    accentColor: '#6366F1'
    }} />
    <span>Uppercase (A-Z)</span>
    </label>
    <label style={{
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    cursor: 'pointer',
    userSelect: 'none'
    }}>
    <input type="checkbox" checked={useLower} onChange={(e)=>setUseLower(e.target.checked)} style={{
    width: 18,
    height: 18,
    accentColor: '#6366F1'
    }} />
    <span>Lowercase (a-z)</span>
    </label>
    <label style={{
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    cursor: 'pointer',
    userSelect: 'none'
    }}>
    <input type="checkbox" checked={useNumbers} onChange={(e)=>setUseNumbers(e.target.checked)} style={{
    width: 18,
    height: 18,
    accentColor: '#6366F1'
    }} />
    <span>Numbers (0-9)</span>
    </label>
    <label style={{
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    cursor: 'pointer',
    userSelect: 'none'
    }}>
    <input type="checkbox" checked={useSymbols} onChange={(e)=>setUseSymbols(e.target.checked)} style={{
    width: 18,
    height: 18,
    accentColor: '#6366F1'
    }} />
    <span>Symbols (!@#$%)</span>
    </label>
    </div>
    </div>
    <div style={{
    marginTop: 24,
    textAlign: 'center'
    }}>
    <button className={btnPrimary} onClick={generatePassword} style={{
    padding: '12px 32px'
    }}>🔄 Generate New</button>
    </div>
    </div>
  );
}
