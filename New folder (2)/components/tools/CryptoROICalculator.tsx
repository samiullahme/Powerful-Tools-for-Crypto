// @ts-nocheck
'use client';

import { useState } from 'react';
import { formGroup, formInput, formLabel, formRow, formSelect, infoBanner, resultBoxDanger, resultBoxSuccess, resultGrid, resultItem, resultLabel, resultValue } from '@/lib/ui-classes';

export default function CryptoROICalculator() {
  const [invested, setInvested] = useState('');
  const [currentValue, setCurrentValue] = useState('');
  const [currency, setCurrency] = useState('₹');
  const inv = parseFloat(invested) || 0;
  const cur = parseFloat(currentValue) || 0;
  const profit = cur - inv;
  const roi = inv > 0 ? profit / inv * 100 : 0;
  const isProfit = profit >= 0;
  const hasInput = inv > 0 && cur > 0;
  const fmt = (n)=>new Intl.NumberFormat('en-IN', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
  }).format(n);

  return (
    <div>
    <div className={formRow}>
    <div>
    <div className={formLabel}>Currency</div>
    <select className={formSelect} value={currency} onChange={(e)=>setCurrency(e.target.value)} id="roi-currency-select">
    <option value="₹">₹ INR</option>
    <option value="$">$ USD</option>
    </select>
    </div>
    </div>
    <div className={formRow}>
    <div className={formGroup}>
    <label className={formLabel} htmlFor="invested-input">
    Initial Investment (
    {currency}
    )
    </label>
    <input id="invested-input" className={formInput} type="number" placeholder="e.g. 100000" value={invested} onChange={(e)=>setInvested(e.target.value)} min="0" step="any" />
    </div>
    <div className={formGroup}>
    <label className={formLabel} htmlFor="current-value-input">
    Current / Final Value (
    {currency}
    )
    </label>
    <input id="current-value-input" className={formInput} type="number" placeholder="e.g. 350000" value={currentValue} onChange={(e)=>setCurrentValue(e.target.value)} min="0" step="any" />
    </div>
    </div>
    <div className={isProfit ? 'success' : 'danger' ? resultBoxSuccess : resultBoxDanger}>
    <div className={resultGrid}>
    <div className={resultItem}>
    <div className={resultLabel}>Invested</div>
    <div className={resultValue} style={{
    fontSize: '1.2rem'
    }}>
    {currency}
    {fmt(inv)}
    </div>
    </div>
    <div className={resultItem}>
    <div className={resultLabel}>Current Value</div>
    <div className={resultValue} style={{
    fontSize: '1.2rem'
    }}>
    {currency}
    {fmt(cur)}
    </div>
    </div>
    <div className={resultItem}>
    <div className={resultLabel}>      {isProfit ? 'Profit' : 'Loss'}</div>
    <div className={`${resultValue} ${isProfit ? 'text-emerald-600' : 'text-red-500'}`} style={{
    fontSize: '1.4rem'
    }}>
    {isProfit ? '+' : ''}
    {currency}
    {fmt(Math.abs(profit))}
    </div>
    </div>
    <div className={resultItem}>
    <div className={resultLabel}>ROI %</div>
    <div className={`${resultValue} ${isProfit ? 'text-emerald-600' : 'text-red-500'}`} style={{
    fontSize: '1.8rem'
    }}>
    {isProfit ? '+' : ''}
    {roi.toFixed(2)}
    %
    </div>
    </div>
    </div>
    <div style={{
    marginTop: 16
    }}>
    <div style={{
    fontSize: '0.75rem',
    color: '#64748B',
    marginBottom: 6
    }}>ROI Progress</div>
    <div style={{
    height: 8,
    background: 'rgba(248,250,252,0.95)',
    borderRadius: 4,
    overflow: 'hidden'
    }}>
    <div style={{
    height: '100%',
    width: `${Math.min(Math.abs(roi), 200) / 2}%`,
    background: isProfit ? 'var(--success)' : '#EF4444',
    borderRadius: 4,
    transition: 'width 0.5s ease'
    }} />
    </div>
    </div>
    </div>
    <div className={infoBanner}>💡 Enter your initial investment and current value to calculate ROI.</div>
    </div>
  );
}
