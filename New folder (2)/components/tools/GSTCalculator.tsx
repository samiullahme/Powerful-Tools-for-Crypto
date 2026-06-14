// @ts-nocheck
'use client';

import { useState } from 'react';
import { formGroup, formInput, formLabel, formRow, formSelect, infoBanner, resultBox, resultGrid, resultItem, resultLabel, resultValue, tabBtn, tabBtnActive, tabs } from '@/lib/ui-classes';

export default function GSTCalculator() {
  const [amount, setAmount] = useState('');
  const [rate, setRate] = useState('18');
  const [mode, setMode] = useState('exclusive');
  const amt = parseFloat(amount) || 0;
  const r = parseFloat(rate) || 0;
  let gstAmount = 0;
  let preGstAmount = 0;
  let totalAmount = 0;
  if (mode === 'exclusive') {
  preGstAmount = amt;
  gstAmount = amt * r / 100;
  totalAmount = amt + gstAmount;
  } else {
  totalAmount = amt;
  gstAmount = amt - amt * (100 / (100 + r));
  preGstAmount = totalAmount - gstAmount;
  }
  const cgst = gstAmount / 2;
  const sgst = gstAmount / 2;
  const hasInput = amt > 0;
  const fmt = (n)=>new Intl.NumberFormat('en-IN', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
  }).format(n);

  return (
    <div>
    <div className={tabs} style={{
    marginBottom: 24
    }}>
    <button className={mode === 'exclusive' ? tabBtnActive : tabBtn} onClick={()=>setMode('exclusive')}>Add GST (Exclusive)</button>
    <button className={mode === 'inclusive' ? tabBtnActive : tabBtn} onClick={()=>setMode('inclusive')}>Remove GST (Inclusive)</button>
    </div>
    <div className={formRow}>
    <div className={formGroup}>
    <label className={formLabel} htmlFor="gst-amount-input">      {mode === 'exclusive' ? 'Base Amount (₹)' : 'Total Amount (₹)'}</label>
    <input id="gst-amount-input" className={formInput} type="number" placeholder="e.g. 10000" value={amount} onChange={(e)=>setAmount(e.target.value)} min="0" step="any" />
    </div>
    <div className={formGroup}>
    <label className={formLabel} htmlFor="gst-rate-select">GST Rate (%)</label>
    <select id="gst-rate-select" className={formSelect} value={rate} onChange={(e)=>setRate(e.target.value)}>
    <option value="5">5%</option>
    <option value="12">12%</option>
    <option value="18">18%</option>
    <option value="28">28%</option>
    </select>
    </div>
    </div>
    <div className={resultBox}>
    <div className={resultGrid}>
    <div className={resultItem}>
    <div className={resultLabel}>Base Price (Pre-GST)</div>
    <div className={resultValue} style={{
    fontSize: '1.2rem'
    }}>
    ₹
    {fmt(preGstAmount)}
    </div>
    </div>
    <div className={resultItem}>
    <div className={resultLabel}>
    Total GST (
    {r}
    %)
    </div>
    <div className={resultValue} style={{
    fontSize: '1.2rem',
    color: '#0F766E'
    }}>
    + ₹
    {fmt(gstAmount)}
    </div>
    </div>
    <div className={resultItem} style={{
    gridColumn: '1/-1',
    borderTop: '1px solid rgba(15,23,42,0.08)',
    paddingTop: 16
    }}>
    <div className={resultLabel}>Total Price (Post-GST)</div>
    <div className={resultValue} style={{
    fontSize: '1.8rem',
    color: '#0F172A'
    }}>
    ₹
    {fmt(totalAmount)}
    </div>
    </div>
    </div>
    <div style={{
    display: 'flex',
    gap: 16,
    marginTop: 16,
    padding: '12px 16px',
    background: 'rgba(248,250,252,0.95)',
    borderRadius: '1rem',
    fontSize: '0.85rem'
    }}>
    <div style={{
    flex: 1
    }}>
    <div style={{
    color: '#64748B',
    marginBottom: 2
    }}>
    CGST (
    {(r / 2).toFixed(1)}
    %)
    </div>
    <div style={{
    fontWeight: 600
    }}>
    ₹
    {fmt(cgst)}
    </div>
    </div>
    <div style={{
    flex: 1
    }}>
    <div style={{
    color: '#64748B',
    marginBottom: 2
    }}>
    SGST (
    {(r / 2).toFixed(1)}
    %)
    </div>
    <div style={{
    fontWeight: 600
    }}>
    ₹
    {fmt(sgst)}
    </div>
    </div>
    <div style={{
    flex: 1
    }}>
    <div style={{
    color: '#64748B',
    marginBottom: 2
    }}>
    IGST (
    {r}
    %)
    </div>
    <div style={{
    fontWeight: 600
    }}>
    ₹
    {fmt(gstAmount)}
    </div>
    </div>
    </div>
    </div>
    <div className={infoBanner}>      {'💡 Enter an amount to calculate GST. Toggle "Add/Remove GST" to calculate inclusive or exclusive taxes.'}</div>
    </div>
  );
}
