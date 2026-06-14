// @ts-nocheck
'use client';

import { useState } from 'react';
import { formGroup, formInput, formLabel, formRow, formSelect, infoBanner, resultBox, resultGrid, resultItem, resultLabel, resultValue } from '@/lib/ui-classes';

export default function CryptoTaxCalculator() {
  const [buyPrice, setBuyPrice] = useState('');
  const [sellPrice, setSellPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [currency, setCurrency] = useState('₹');
  const bp = parseFloat(buyPrice) || 0;
  const sp = parseFloat(sellPrice) || 0;
  const qty = parseFloat(quantity) || 0;
  const cost = bp * qty;
  const revenue = sp * qty;
  const grossProfit = revenue - cost;
  // Tax logic (India: 30% on profit, 1% TDS on sale amount > 10k but we'll calculate it broadly here)
  const isProfit = grossProfit > 0;
  const tax30 = isProfit ? grossProfit * 0.30 : 0;
  const tds1 = revenue * 0.01;
  const totalTax = tax30 + tds1;
  const netProfit = isProfit ? grossProfit - totalTax : grossProfit - tds1;
  const hasInput = bp > 0 && sp > 0 && qty > 0;
  const fmt = (n)=>new Intl.NumberFormat('en-IN', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
  }).format(n);

  return (
    <div>
    <div className={formRow}>
    <div>
    <div className={formLabel}>Currency</div>
    <select className={formSelect} value={currency} onChange={(e)=>setCurrency(e.target.value)} id="tax-currency-select">
    <option value="₹">₹ INR</option>
    <option value="$">$ USD</option>
    </select>
    </div>
    <div className={formGroup}>
    <label className={formLabel} htmlFor="tax-qty-input">Quantity Sold</label>
    <input id="tax-qty-input" className={formInput} type="number" placeholder="e.g. 0.5" value={quantity} onChange={(e)=>setQuantity(e.target.value)} min="0" step="any" />
    </div>
    </div>
    <div className={formRow}>
    <div className={formGroup}>
    <label className={formLabel} htmlFor="tax-buy-price-input">
    Buy Price per Coin (
    {currency}
    )
    </label>
    <input id="tax-buy-price-input" className={formInput} type="number" placeholder="e.g. 2500000" value={buyPrice} onChange={(e)=>setBuyPrice(e.target.value)} min="0" step="any" />
    </div>
    <div className={formGroup}>
    <label className={formLabel} htmlFor="tax-sell-price-input">
    Sell Price per Coin (
    {currency}
    )
    </label>
    <input id="tax-sell-price-input" className={formInput} type="number" placeholder="e.g. 3500000" value={sellPrice} onChange={(e)=>setSellPrice(e.target.value)} min="0" step="any" />
    </div>
    </div>
    <div className={resultBox}>
    <div className={resultGrid}>
    <div className={resultItem} style={{
    gridColumn: '1/-1',
    borderBottom: '1px solid rgba(15,23,42,0.08)',
    paddingBottom: 16
    }}>
    <div className={resultLabel}>
    Gross
    {isProfit ? 'Profit' : 'Loss'}
    (Before Tax)
    </div>
    <div className={`${resultValue} ${isProfit ? 'text-emerald-600' : 'text-red-500'}`}>
    {isProfit ? '+' : ''}
    {currency}
    {fmt(grossProfit)}
    </div>
    </div>
    <div className={resultItem} style={{
    background: 'rgba(239,68,68,0.1)',
    border: '1px solid rgba(239,68,68,0.2)'
    }}>
    <div className={resultLabel} style={{
    color: '#EF4444'
    }}>30% Tax on Gains</div>
    <div className={resultValue} style={{
    fontSize: '1.2rem',
    color: '#EF4444'
    }}>
    -
    {currency}
    {fmt(tax30)}
    </div>
    </div>
    <div className={resultItem} style={{
    background: 'rgba(239,68,68,0.1)',
    border: '1px solid rgba(239,68,68,0.2)'
    }}>
    <div className={resultLabel} style={{
    color: '#EF4444'
    }}>1% TDS (On Sale Value)</div>
    <div className={resultValue} style={{
    fontSize: '1.2rem',
    color: '#EF4444'
    }}>
    -
    {currency}
    {fmt(tds1)}
    </div>
    </div>
    <div className={resultItem} style={{
    gridColumn: '1/-1',
    marginTop: 8
    }}>
    <div className={resultLabel}>
    Net
    {netProfit >= 0 ? 'Profit' : 'Loss'}
    (After Tax)
    </div>
    <div className={`${resultValue} ${netProfit >= 0 ? 'text-emerald-600' : 'text-red-500'}`} style={{
    fontSize: '1.8rem'
    }}>
    {netProfit >= 0 ? '+' : ''}
    {currency}
    {fmt(netProfit)}
    </div>
    </div>
    </div>
    </div>
    <div className={infoBanner}>💡 Enter transaction details to see 30% tax and 1% TDS calculations (India tax rules).</div>
    </div>
  );
}
