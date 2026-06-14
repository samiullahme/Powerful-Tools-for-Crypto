// @ts-nocheck
'use client';

import { useState } from 'react';
import { formGroup, formInput, formLabel, formRow, formSelect, infoBanner, resultBox, resultGrid, resultItem, resultLabel, resultValue } from '@/lib/ui-classes';

export default function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState('10000');
  const [rate, setRate] = useState('8');
  const [years, setYears] = useState('10');
  const [frequency, setFrequency] = useState('12');
  const p = parseFloat(principal) || 0;
  const r = parseFloat(rate) || 0;
  const t = parseFloat(years) || 0;
  const n = parseInt(frequency, 10) || 12;
  let amount = 0;
  let interest = 0;
  if (p > 0 && r > 0 && t > 0) {
  const rateDecimal = r / 100;
  amount = p * Math.pow(1 + rateDecimal / n, n * t);
  interest = amount - p;
  }
  const hasInput = p > 0 && r > 0 && t > 0;
  const fmt = (n)=>new Intl.NumberFormat('en-IN', {
  maximumFractionDigits: 2
  }).format(n);

  return (
    <div>
    <div className={formRow}>
    <div className={formGroup}>
    <label className={formLabel} htmlFor="ci-principal-input">Initial Principal (₹)</label>
    <input id="ci-principal-input" className={formInput} type="number" value={principal} onChange={(e)=>setPrincipal(e.target.value)} min="0" step="any" />
    </div>
    <div className={formGroup}>
    <label className={formLabel} htmlFor="ci-rate-input">Interest Rate (% p.a.)</label>
    <input id="ci-rate-input" className={formInput} type="number" value={rate} onChange={(e)=>setRate(e.target.value)} min="0" step="any" />
    </div>
    </div>
    <div className={formRow}>
    <div className={formGroup}>
    <label className={formLabel} htmlFor="ci-years-input">Time Period (Years)</label>
    <input id="ci-years-input" className={formInput} type="number" value={years} onChange={(e)=>setYears(e.target.value)} min="0" step="any" />
    </div>
    <div className={formGroup}>
    <label className={formLabel} htmlFor="ci-freq-select">Compound Frequency</label>
    <select id="ci-freq-select" className={formSelect} value={frequency} onChange={(e)=>setFrequency(e.target.value)}>
    <option value="365">Daily</option>
    <option value="12">Monthly</option>
    <option value="4">Quarterly</option>
    <option value="2">Semi-Annually</option>
    <option value="1">Annually</option>
    </select>
    </div>
    </div>
    <div className={resultBox}>
    <div className={resultGrid}>
    <div className={resultItem}>
    <div className={resultLabel}>Initial Balance</div>
    <div className={resultValue} style={{
    fontSize: '1.2rem'
    }}>
    ₹
    {fmt(p)}
    </div>
    </div>
    <div className={resultItem}>
    <div className={resultLabel}>Total Interest</div>
    <div className="result-value positive" style={{
    fontSize: '1.2rem'
    }}>
    +₹
    {fmt(interest)}
    </div>
    </div>
    <div className={resultItem} style={{
    gridColumn: '1/-1'
    }}>
    <div className={resultLabel}>Final Future Value</div>
    <div className={resultValue} style={{
    fontSize: '1.8rem',
    color: '#0F766E'
    }}>
    ₹
    {fmt(amount)}
    </div>
    </div>
    </div>
    </div>
    <div className={infoBanner}>💡 Enter principal, interest rate, and duration to calculate compound interest.</div>
    </div>
  );
}
