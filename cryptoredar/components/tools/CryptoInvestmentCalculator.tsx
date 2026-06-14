// @ts-nocheck
'use client';

import { useState } from 'react';
import { formGroup, formInput, formLabel, formRow, formSelect, infoBanner, resultBoxDanger, resultBoxSuccess, resultGrid, resultItem, resultLabel, resultValue } from '@/lib/ui-classes';

export default function CryptoInvestmentCalculator() {
  const [buyPrice, setBuyPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [targetPrice, setTargetPrice] = useState('');
  const [currency, setCurrency] = useState('₹');
  const bp = parseFloat(buyPrice) || 0;
  const qty = parseFloat(quantity) || 0;
  const tp = parseFloat(targetPrice) || 0;
  const initialInvestment = bp * qty;
  const finalValue = tp * qty;
  const profit = finalValue - initialInvestment;
  const roi = initialInvestment > 0 ? profit / initialInvestment * 100 : 0;
  const isProfit = profit >= 0;
  const hasInput = bp > 0 && qty > 0 && tp > 0;
  const fmt = (n)=>new Intl.NumberFormat('en-IN', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
  }).format(n);

  return (
    <div>
    <div className={formRow}>
    <div>
    <div className={formLabel}>Currency</div>
    <select className={formSelect} value={currency} onChange={(e)=>setCurrency(e.target.value)} id="inv-currency-select">
    <option value="₹">₹ INR</option>
    <option value="$">$ USD</option>
    <option value="€">€ EUR</option>
    </select>
    </div>
    <div className={formGroup}>
    <label className={formLabel} htmlFor="inv-qty-input">Quantity (Coins)</label>
    <input id="inv-qty-input" className={formInput} type="number" placeholder="e.g. 2" value={quantity} onChange={(e)=>setQuantity(e.target.value)} min="0" step="any" />
    </div>
    </div>
    <div className={formRow}>
    <div className={formGroup}>
    <label className={formLabel} htmlFor="inv-buy-price-input">
    Historical Buy Price (
    {currency}
    )
    </label>
    <input id="inv-buy-price-input" className={formInput} type="number" placeholder="e.g. 50000" value={buyPrice} onChange={(e)=>setBuyPrice(e.target.value)} min="0" step="any" />
    </div>
    <div className={formGroup}>
    <label className={formLabel} htmlFor="inv-target-price-input">
    Current / Target Price (
    {currency}
    )
    </label>
    <input id="inv-target-price-input" className={formInput} type="number" placeholder="e.g. 150000" value={targetPrice} onChange={(e)=>setTargetPrice(e.target.value)} min="0" step="any" />
    </div>
    </div>
    <div className={isProfit ? 'success' : 'danger' ? resultBoxSuccess : resultBoxDanger}>
    <div className={resultGrid}>
    <div className={resultItem}>
    <div className={resultLabel}>Initial Investment</div>
    <div className={resultValue} style={{
    fontSize: '1.2rem'
    }}>
    {currency}
    {fmt(initialInvestment)}
    </div>
    </div>
    <div className={resultItem}>
    <div className={resultLabel}>Future Value</div>
    <div className={resultValue} style={{
    fontSize: '1.2rem'
    }}>
    {currency}
    {fmt(finalValue)}
    </div>
    </div>
    <div className={resultItem} style={{
    gridColumn: '1/-1'
    }}>
    <div className={resultLabel}>      {isProfit ? 'Profit' : 'Loss'}</div>
    <div className={`${resultValue} ${isProfit ? 'text-emerald-600' : 'text-red-500'}`}>
    {isProfit ? '+' : ''}
    {currency}
    {fmt(profit)}
    </div>
    </div>
    <div className={resultItem}>
    <div className={resultLabel}>ROI</div>
    <div className={`${resultValue} ${isProfit ? 'text-emerald-600' : 'text-red-500'}`} style={{
    fontSize: '1.4rem'
    }}>
    {isProfit ? '+' : ''}
    {roi.toFixed(2)}
    %
    </div>
    </div>
    </div>
    </div>
    <div className={infoBanner}>💡 Enter the price you bought at, how many coins, and what the price is now (or your target).</div>
    </div>
  );
}
