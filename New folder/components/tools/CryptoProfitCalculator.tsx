// @ts-nocheck
'use client';

import { useState } from 'react';
import { btnCopy, formGroup, formInput, formLabel, formRow, formSelect, infoBanner, resultBoxDanger, resultBoxSuccess, resultGrid, resultItem, resultLabel, resultValue } from '@/lib/ui-classes';

export default function CryptoProfitCalculator() {
  const [buyPrice, setBuyPrice] = useState('');
  const [sellPrice, setSellPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [buyFee, setBuyFee] = useState('0');
  const [sellFee, setSellFee] = useState('0');
  const [currency, setCurrency] = useState('₹');
  const [copied, setCopied] = useState(false);
  const bp = parseFloat(buyPrice) || 0;
  const sp = parseFloat(sellPrice) || 0;
  const qty = parseFloat(quantity) || 0;
  const bf = parseFloat(buyFee) || 0;
  const sf = parseFloat(sellFee) || 0;
  const investmentCost = bp * qty + bp * qty * bf / 100;
  const saleRevenue = sp * qty - sp * qty * sf / 100;
  const profit = saleRevenue - investmentCost;
  const roi = investmentCost > 0 ? profit / investmentCost * 100 : 0;
  const isProfit = profit >= 0;
  const hasInput = bp > 0 && sp > 0 && qty > 0;
  const fmt = (n)=>new Intl.NumberFormat('en-IN', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
  }).format(n);
  const copyResult = ()=>{
  const text = `Crypto P&L Summary\nInvestment: ${currency}${fmt(investmentCost)}\nSale Value: ${currency}${fmt(saleRevenue)}\nProfit/Loss: ${currency}${fmt(profit)}\nROI: ${roi.toFixed(2)}%`;
  navigator.clipboard.writeText(text);
  setCopied(true);
  setTimeout(()=>setCopied(false), 2000);
  };

  return (
    <div>
    <div className={formRow}>
    <div>
    <div className={formLabel}>Currency</div>
    <select className={formSelect} value={currency} onChange={(e)=>setCurrency(e.target.value)} id="currency-select">
    <option value="₹">₹ INR</option>
    <option value="$">$ USD</option>
    <option value="€">€ EUR</option>
    </select>
    </div>
    <div className={formGroup}>
    <label className={formLabel} htmlFor="quantity-input">Quantity (Coins)</label>
    <input id="quantity-input" className={formInput} type="number" placeholder="e.g. 0.5" value={quantity} onChange={(e)=>setQuantity(e.target.value)} min="0" step="any" />
    </div>
    </div>
    <div className={formRow}>
    <div className={formGroup}>
    <label className={formLabel} htmlFor="buy-price-input">
    Buy Price per Coin (
    {currency}
    )
    </label>
    <input id="buy-price-input" className={formInput} type="number" placeholder="e.g. 2500000" value={buyPrice} onChange={(e)=>setBuyPrice(e.target.value)} min="0" step="any" />
    </div>
    <div className={formGroup}>
    <label className={formLabel} htmlFor="sell-price-input">
    Sell Price per Coin (
    {currency}
    )
    </label>
    <input id="sell-price-input" className={formInput} type="number" placeholder="e.g. 4000000" value={sellPrice} onChange={(e)=>setSellPrice(e.target.value)} min="0" step="any" />
    </div>
    </div>
    <div className={formRow}>
    <div className={formGroup}>
    <label className={formLabel} htmlFor="buy-fee-input">Buy Fee (%)</label>
    <input id="buy-fee-input" className={formInput} type="number" placeholder="0.1" value={buyFee} onChange={(e)=>setBuyFee(e.target.value)} min="0" step="any" />
    </div>
    <div className={formGroup}>
    <label className={formLabel} htmlFor="sell-fee-input">Sell Fee (%)</label>
    <input id="sell-fee-input" className={formInput} type="number" placeholder="0.1" value={sellFee} onChange={(e)=>setSellFee(e.target.value)} min="0" step="any" />
    </div>
    </div>
    <div className={isProfit ? 'success' : 'danger' ? resultBoxSuccess : resultBoxDanger}>
    <div className={resultGrid}>
    <div className={resultItem}>
    <div className={resultLabel}>Investment Cost</div>
    <div className={resultValue} style={{
    fontSize: '1.2rem'
    }}>
    {currency}
    {fmt(investmentCost)}
    </div>
    </div>
    <div className={resultItem}>
    <div className={resultLabel}>Sale Revenue</div>
    <div className={resultValue} style={{
    fontSize: '1.2rem'
    }}>
    {currency}
    {fmt(saleRevenue)}
    </div>
    </div>
    <div className={resultItem} style={{
    gridColumn: '1/-1'
    }}>
    <div className={resultLabel}>      {isProfit ? '✅ Total Profit' : '❌ Total Loss'}</div>
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
    <div className={resultItem}>
    <div className={resultLabel}>Multiplier</div>
    <div className={resultValue} style={{
    fontSize: '1.4rem',
    color: '#0F172A'
    }}>
    {investmentCost > 0 ? (saleRevenue / investmentCost).toFixed(2) : '—'}
    x
    </div>
    </div>
    </div>
    <div style={{
    marginTop: 16,
    display: 'flex',
    justifyContent: 'flex-end'
    }}>      <button className={`${btnCopy}${copied ? ' bg-emerald-50 text-emerald-700' : ''}`} onClick={copyResult} id="copy-result-btn">      {copied ? '✅ Copied!' : '📋 Copy Results'}</button></div>
    </div>
    <div className={infoBanner}>💡 Enter your buy price, sell price, and quantity to calculate profit instantly.</div>
    </div>
  );
}
