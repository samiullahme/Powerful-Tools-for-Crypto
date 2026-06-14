// @ts-nocheck
'use client';

import { useState, useEffect } from 'react';
import { formGroup, formLabel, formTextarea, resultBox, resultLabel } from '@/lib/ui-classes';

export default function JWTDecoder() {
  const [token, setToken] = useState('');
  const [header, setHeader] = useState(null);
  const [payload, setPayload] = useState(null);
  const [signature, setSignature] = useState('');
  const [error, setError] = useState(null);
  useEffect(()=>{
  if (!token.trim()) {
  setHeader(null);
  setPayload(null);
  setSignature('');
  setError(null);
  return;
  }
  try {
  const parts = token.split('.');
  if (parts.length !== 3) throw new Error('Invalid JWT: Must have 3 parts separated by dots.');
  const h = JSON.parse(atob(parts[0].replace(/-/g, '+').replace(/_/g, '/')));
  const p = JSON.parse(atob(parts[1].replace(/-/g, '+').replace(/_/g, '/')));
  setHeader(h);
  setPayload(p);
  setSignature(parts[2]);
  setError(null);
  } catch (err) {
  setHeader(null);
  setPayload(null);
  setSignature('');
  setError(err.message || 'Failed to decode token. Ensure it is a valid JWT.');
  }
  }, [
  token
  ]);
  const isExpired = payload?.exp ? payload.exp * 1000 < Date.now() : false;
  const expDate = payload?.exp ? new Date(payload.exp * 1000).toLocaleString() : null;
  const iatDate = payload?.iat ? new Date(payload.iat * 1000).toLocaleString() : null;

  return (
    <div>
    <div className={formGroup}>
    <label className={formLabel} htmlFor="jwt-input">Encoded JWT Token</label>
    <textarea id="jwt-input" className={formTextarea} placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." value={token} onChange={(e)=>setToken(e.target.value)} style={{
    minHeight: 120,
    fontFamily: 'monospace',
    wordBreak: 'break-all'
    }} />
    </div>
    <div className="result-box danger" style={{
    padding: '12px 16px',
    marginBottom: 20
    }}>
    <div style={{
    color: '#EF4444',
    fontWeight: 600,
    fontSize: '0.9rem'
    }}>
    ❌
    {error}
    </div>
    </div>
    <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 20
    }}>
    <div className={resultBox} style={{
    margin: 0,
    borderColor: 'rgba(139,92,246,0.3)'
    }}>
    <div className={resultLabel} style={{
    color: '#6366F1',
    marginBottom: 12
    }}>Payload (Data)</div>
    <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
    padding: '8px 12px',
    background: 'rgba(248,250,252,0.95)',
    borderRadius: '0.75rem',
    fontSize: '0.85rem'
    }}>
    <span style={{
    fontWeight: 600
    }}>Status:</span>
    <span style={{
    color: '#EF4444',
    fontWeight: 600
    }}>
    Expired on
    {expDate}
    </span>
    </div>
    <pre style={{
    margin: 0,
    background: 'rgba(248,250,252,0.95)',
    padding: 16,
    borderRadius: '1rem',
    fontSize: '0.85rem',
    overflowX: 'auto',
    color: '#6366F1',
    fontFamily: 'monospace'
    }}>      {JSON.stringify(payload, null, 2)}</pre>
    <div style={{
    marginTop: 12,
    fontSize: '0.8rem',
    color: '#64748B'
    }}>
    <div>
    <strong style={{
    color: '#64748B'
    }}>iat:</strong>
    
    {iatDate}
    </div>
    <div>
    <strong style={{
    color: '#64748B'
    }}>exp:</strong>
    
    {expDate}
    </div>
    </div>
    </div>
    <div className={resultBox} style={{
    margin: 0,
    borderColor: 'rgba(239,68,68,0.3)'
    }}>
    <div className={resultLabel} style={{
    color: '#EF4444',
    marginBottom: 12
    }}>Header (Algorithm & Token Type)</div>
    <pre style={{
    margin: 0,
    background: 'rgba(248,250,252,0.95)',
    padding: 16,
    borderRadius: '1rem',
    fontSize: '0.85rem',
    overflowX: 'auto',
    color: '#EF4444',
    fontFamily: 'monospace'
    }}>      {JSON.stringify(header, null, 2)}</pre>
    </div>
    <div className={resultBox} style={{
    margin: 0,
    borderColor: 'rgba(16,185,129,0.3)'
    }}>
    <div className={resultLabel} style={{
    color: 'var(--success)',
    marginBottom: 8
    }}>Signature</div>
    <div style={{
    background: 'rgba(248,250,252,0.95)',
    padding: '12px 16px',
    borderRadius: '1rem',
    fontSize: '0.85rem',
    color: 'var(--success)',
    fontFamily: 'monospace',
    wordBreak: 'break-all'
    }}>      {signature}</div>
    <div style={{
    fontSize: '0.75rem',
    color: '#64748B',
    marginTop: 8
    }}>* Signature cannot be verified without the secret key.</div>
    </div>
    </div>
    </div>
  );
}
