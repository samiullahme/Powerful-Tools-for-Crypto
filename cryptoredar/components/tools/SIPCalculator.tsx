// @ts-nocheck
'use client';

import { useState } from 'react';
import { formGroup, formInput, formLabel, formRow, infoBanner, resultBox, resultGrid, resultItem, resultLabel, resultValue } from '@/lib/ui-classes';

export default function SIPCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState('5000');
  const [returnRate, setReturnRate] = useState('12');
  const [years, setYears] = useState('10');
  const p = parseFloat(monthlyInvestment) || 0;
  const r = parseFloat(returnRate) || 0;
  const t = parseFloat(years) || 0;
  let totalInvested = 0;
  let maturityAmount = 0;
  let totalWealthGain = 0;
  if (p > 0 && r > 0 && t > 0) {
  const i = r / 12 / 100;
  const n = t * 12;
  totalInvested = p * n;
  maturityAmount = p * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
  totalWealthGain = maturityAmount - totalInvested;
  }
  const hasInput = p > 0 && t > 0;
  const fmt = (n)=>new Intl.NumberFormat('en-IN', {
  maximumFractionDigits: 0
  }).format(n);

  return (
    <div>
    <div className={formGroup}>
    <label className={formLabel} htmlFor="sip-amount-input">Monthly Investment (₹)</label>
    <input id="sip-amount-input" className={formInput} type="number" value={monthlyInvestment} onChange={(e)=>setMonthlyInvestment(e.target.value)} min="0" step="any" />
    </div>
    <div className={formRow}>
    <div className={formGroup}>
    <label className={formLabel} htmlFor="sip-rate-input">Expected Return Rate (% p.a.)</label>
    <input id="sip-rate-input" className={formInput} type="number" value={returnRate} onChange={(e)=>setReturnRate(e.target.value)} min="0" step="any" />
    </div>
    <div className={formGroup}>
    <label className={formLabel} htmlFor="sip-years-input">Time Period (Years)</label>
    <input id="sip-years-input" className={formInput} type="number" value={years} onChange={(e)=>setYears(e.target.value)} min="0" step="any" />
    </div>
    </div>
    <div className={resultBox}>
    <div style={{
    textAlign: 'center',
    marginBottom: 24
    }}>
    <div className={resultLabel}>Expected Maturity Amount</div>
    <div className={resultValue} style={{
    fontSize: '2.5rem',
    color: '#0F766E'
    }}>
    ₹
    {fmt(maturityAmount)}
    </div>
    </div>
    <div className={resultGrid}>
    <div className={resultItem}>
    <div className={resultLabel}>Invested Amount</div>
    <div className={resultValue} style={{
    fontSize: '1.2rem'
    }}>
    ₹
    {fmt(totalInvested)}
    </div>
    </div>
    <div className={resultItem}>
    <div className={resultLabel}>Wealth Gained</div>
    <div className={resultValue} style={{
    fontSize: '1.2rem'
    }}>
    ₹
    {fmt(totalWealthGain)}
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
    Invested (
    {(totalInvested / maturityAmount * 100).toFixed(1)}
    %)
    </span>
    <span style={{
    color: '#0F766E'
    }}>
    Returns (
    {(totalWealthGain / maturityAmount * 100).toFixed(1)}
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
    width: `${totalInvested / maturityAmount * 100}%`,
    background: '#64748B'
    }} />
    <div style={{
    width: `${totalWealthGain / maturityAmount * 100}%`,
    background: '#0F766E'
    }} />
    </div>
    </div>
    </div>
    <div className={infoBanner}>💡 Enter monthly investment amount, expected returns, and duration to see your wealth grow.</div>
    </div>
  );
}
