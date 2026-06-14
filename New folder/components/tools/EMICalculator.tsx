// @ts-nocheck
'use client';

import { useState } from 'react';
import { formGroup, formInput, formLabel, formRow, formSelect, infoBanner, resultBox, resultGrid, resultItem, resultLabel, resultValue } from '@/lib/ui-classes';

export default function EMICalculator() {
  const [amount, setAmount] = useState('1000000');
  const [rate, setRate] = useState('8.5');
  const [tenure, setTenure] = useState('10');
  const [tenureType, setTenureType] = useState('years');
  const p = parseFloat(amount) || 0;
  const r = parseFloat(rate) || 0;
  const t = parseFloat(tenure) || 0;
  const months = tenureType === 'years' ? t * 12 : t;
  const monthlyRate = r / 12 / 100;
  let emi = 0;
  let totalPayment = 0;
  let totalInterest = 0;
  if (p > 0 && r > 0 && months > 0) {
  emi = p * monthlyRate * (Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1));
  totalPayment = emi * months;
  totalInterest = totalPayment - p;
  }
  const hasInput = p > 0 && r > 0 && months > 0;
  const fmt = (n)=>new Intl.NumberFormat('en-IN', {
  maximumFractionDigits: 0
  }).format(n);

  return (
    <div>
    <div className={formGroup}>
    <label className={formLabel} htmlFor="emi-amount-input">Loan Amount (₹)</label>
    <input id="emi-amount-input" className={formInput} type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} min="0" step="any" />
    </div>
    <div className={formRow}>
    <div className={formGroup}>
    <label className={formLabel} htmlFor="emi-rate-input">Interest Rate (% p.a.)</label>
    <input id="emi-rate-input" className={formInput} type="number" value={rate} onChange={(e)=>setRate(e.target.value)} min="0" step="any" />
    </div>
    <div className={formGroup}>
    <label className={formLabel} htmlFor="emi-tenure-input">Loan Tenure</label>
    <div style={{
    display: 'flex',
    gap: 8
    }}>
    <input id="emi-tenure-input" className={formInput} style={{
    flex: 1
    }} type="number" value={tenure} onChange={(e)=>setTenure(e.target.value)} min="0" step="any" />
    <select className={formSelect} style={{
    width: '100px'
    }} value={tenureType} onChange={(e)=>setTenureType(e.target.value)} aria-label="Tenure type">
    <option value="years">Years</option>
    <option value="months">Months</option>
    </select>
    </div>
    </div>
    </div>
    <div className={resultBox}>
    <div style={{
    textAlign: 'center',
    marginBottom: 24
    }}>
    <div className={resultLabel}>Monthly EMI</div>
    <div className={resultValue} style={{
    fontSize: '2.5rem',
    color: '#0F766E'
    }}>
    ₹
    {fmt(emi)}
    </div>
    </div>
    <div className={resultGrid}>
    <div className={resultItem}>
    <div className={resultLabel}>Principal Amount</div>
    <div className={resultValue} style={{
    fontSize: '1.2rem'
    }}>
    ₹
    {fmt(p)}
    </div>
    </div>
    <div className={resultItem}>
    <div className={resultLabel}>Total Interest</div>
    <div className={resultValue} style={{
    fontSize: '1.2rem'
    }}>
    ₹
    {fmt(totalInterest)}
    </div>
    </div>
    <div className={resultItem} style={{
    gridColumn: '1/-1'
    }}>
    <div className={resultLabel}>Total Amount Payable</div>
    <div className={resultValue} style={{
    fontSize: '1.4rem'
    }}>
    ₹
    {fmt(totalPayment)}
    </div>
    </div>
    </div>
    <div style={{
    marginTop: 24
    }}>
    <div style={{
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.75rem',
    marginBottom: 6,
    fontWeight: 600
    }}>
    <span style={{
    color: '#64748B'
    }}>
    Principal (
    {(p / totalPayment * 100).toFixed(1)}
    %)
    </span>
    <span style={{
    color: '#0F766E'
    }}>
    Interest (
    {(totalInterest / totalPayment * 100).toFixed(1)}
    %)
    </span>
    </div>
    <div style={{
    height: 12,
    display: 'flex',
    borderRadius: 6,
    overflow: 'hidden'
    }}>
    <div style={{
    width: `${p / totalPayment * 100}%`,
    background: '#64748B'
    }} />
    <div style={{
    width: `${totalInterest / totalPayment * 100}%`,
    background: '#0F766E'
    }} />
    </div>
    </div>
    </div>
    <div className={infoBanner}>💡 Enter loan amount, interest rate, and tenure to calculate your monthly EMI.</div>
    </div>
  );
}
