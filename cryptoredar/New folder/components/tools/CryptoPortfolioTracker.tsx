// @ts-nocheck
'use client';

import { useState, useEffect } from 'react';
import { btnPrimary, btnSm, formGroup, formInput, formLabel, formRow, formSelect, infoBanner, resultBox, resultGrid, resultItem, resultLabel, resultValue, sectionLabel } from '@/lib/ui-classes';

export default function CryptoPortfolioTracker() {
  const [holdings, setHoldings] = useState([]);
  const [coin, setCoin] = useState('');
  const [buyPrice, setBuyPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [currentPrice, setCurrentPrice] = useState('');
  const [currency, setCurrency] = useState('₹');
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(()=>{
  const saved = localStorage.getItem('crypto_portfolio');
  const savedCurr = localStorage.getItem('crypto_currency');
  if (saved) setHoldings(JSON.parse(saved));
  if (savedCurr) setCurrency(savedCurr);
  setIsLoaded(true);
  }, []);
  useEffect(()=>{
  if (isLoaded) {
  localStorage.setItem('crypto_portfolio', JSON.stringify(holdings));
  localStorage.setItem('crypto_currency', currency);
  }
  }, [
  holdings,
  currency,
  isLoaded
  ]);
  const addHolding = ()=>{
  if (!coin || !buyPrice || !quantity) return;
  const newHolding = {
  id: Math.random().toString(36).substring(7),
  coin: coin.toUpperCase(),
  buyPrice: parseFloat(buyPrice) || 0,
  quantity: parseFloat(quantity) || 0,
  currentPrice: parseFloat(currentPrice) || parseFloat(buyPrice) || 0
  };
  setHoldings([
  ...holdings,
  newHolding
  ]);
  setCoin('');
  setBuyPrice('');
  setQuantity('');
  setCurrentPrice('');
  };
  const removeHolding = (id)=>{
  setHoldings(holdings.filter((h)=>h.id !== id));
  };
  const updateCurrentPrice = (id, price)=>{
  const p = parseFloat(price) || 0;
  setHoldings(holdings.map((h)=>h.id === id ? {
  ...h,
  currentPrice: p
  } : h));
  };
  const fmt = (n)=>new Intl.NumberFormat('en-IN', {
  maximumFractionDigits: 2
  }).format(n);
  const totalInvested = holdings.reduce((sum, h)=>sum + h.buyPrice * h.quantity, 0);
  const totalValue = holdings.reduce((sum, h)=>sum + h.currentPrice * h.quantity, 0);
  const totalProfit = totalValue - totalInvested;
  const totalRoi = totalInvested > 0 ? totalProfit / totalInvested * 100 : 0;
  if (!isLoaded) return null;

  return (
    <div>
    <div style={{
    background: 'rgba(248,250,252,0.95)',
    padding: 20,
    borderRadius: '1.25rem',
    marginBottom: 24,
    border: '1px solid rgba(15,23,42,0.08)'
    }}>
    <h3 style={{
    fontSize: '1rem',
    marginBottom: 16
    }}>Add Coin</h3>
    <div className={formRow}>
    <div className={formGroup}>
    <label className={formLabel} htmlFor="port-coin-input">Coin (e.g. BTC)</label>
    <input id="port-coin-input" className={formInput} type="text" placeholder="BTC" value={coin} onChange={(e)=>setCoin(e.target.value)} />
    </div>
    <div className={formGroup}>
    <label className={formLabel} htmlFor="port-qty-input">Quantity</label>
    <input id="port-qty-input" className={formInput} type="number" placeholder="0.5" value={quantity} onChange={(e)=>setQuantity(e.target.value)} min="0" step="any" />
    </div>
    </div>
    <div className={formRow}>
    <div className={formGroup}>
    <label className={formLabel} htmlFor="port-buy-input">Avg Buy Price</label>
    <input id="port-buy-input" className={formInput} type="number" placeholder="60000" value={buyPrice} onChange={(e)=>setBuyPrice(e.target.value)} min="0" step="any" />
    </div>
    <div className={formGroup}>
    <label className={formLabel} htmlFor="port-curr-input">Current Price (Optional)</label>
    <input id="port-curr-input" className={formInput} type="number" placeholder="Current market price" value={currentPrice} onChange={(e)=>setCurrentPrice(e.target.value)} min="0" step="any" />
    </div>
    </div>
    <div style={{
    display: 'flex',
    justifyContent: 'flex-end',
    gap: 12,
    marginTop: 8
    }}>
    <select className={formSelect} style={{
    width: 'auto'
    }} value={currency} onChange={(e)=>setCurrency(e.target.value)} aria-label="Select currency">
    <option value="₹">₹ INR</option>
    <option value="$">$ USD</option>
    </select>
    <button className={`${btnPrimary} ${btnSm}`} onClick={addHolding} disabled={!coin || !buyPrice || !quantity}>+ Add to Portfolio</button>
    </div>
    </div>
    <>
    <div className={resultBox} style={{
    marginBottom: 24
    }}>
    <div className={resultGrid}>
    <div className={resultItem}>
    <div className={resultLabel}>Total Invested</div>
    <div className={resultValue} style={{
    fontSize: '1.2rem'
    }}>
    {currency}
    {fmt(totalInvested)}
    </div>
    </div>
    <div className={resultItem}>
    <div className={resultLabel}>Current Value</div>
    <div className={resultValue} style={{
    fontSize: '1.4rem'
    }}>
    {currency}
    {fmt(totalValue)}
    </div>
    </div>
    <div className={resultItem}>
    <div className={resultLabel}>Total P&L</div>
    <div className={`${resultValue} ${totalProfit >= 0 ? 'text-emerald-600' : 'text-red-500'}`} style={{
    fontSize: '1.2rem'
    }}>
    {totalProfit >= 0 ? '+' : ''}
    {currency}
    {fmt(totalProfit)}
    </div>
    </div>
    <div className={resultItem}>
    <div className={resultLabel}>Total ROI</div>
    <div className={`${resultValue} ${totalRoi >= 0 ? 'text-emerald-600' : 'text-red-500'}`} style={{
    fontSize: '1.2rem'
    }}>
    {totalRoi >= 0 ? '+' : ''}
    {totalRoi.toFixed(2)}
    %
    </div>
    </div>
    </div>
    </div>
    <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
    }}>
    <div className={sectionLabel} style={{
    marginBottom: 4
    }}>Your Assets</div>
    {holdings.map((h) => {
    const invested = h.buyPrice * h.quantity;
    const value = h.currentPrice * h.quantity;
    const pl = value - invested;
    const roi = invested > 0 ? pl / invested * 100 : 0;
    const allocation = totalValue > 0 ? value / totalValue * 100 : 0;
    return (
    <div key={h.id} style={{
    background: 'rgba(248,250,252,0.95)',
    padding: 16,
    borderRadius: '1rem',
    border: '1px solid rgba(15,23,42,0.08)',
    display: 'grid',
    gridTemplateColumns: '1fr auto',
    gap: 16,
    alignItems: 'center'
    }}>
    <div>
    <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8
    }}>
    <span style={{
    fontWeight: 800,
    fontSize: '1.1rem'
    }}>{h.coin}</span>
    <span style={{
    fontSize: '0.8rem',
    color: '#64748B'
    }}>
    {h.quantity} coins
    </span>
    <span style={{
    background: 'rgba(248,250,252,0.95)',
    border: '1px solid rgba(15,23,42,0.08)',
    color: '#64748B',
    fontSize: '0.75rem',
    padding: '2px 8px',
    borderRadius: '999px'
    }}>
    {allocation.toFixed(1)}%
    </span>
    </div>
    <div style={{
    display: 'flex',
    gap: 16,
    fontSize: '0.85rem',
    flexWrap: 'wrap'
    }}>
    <div>
    <span style={{ color: '#64748B' }}>Avg Buy:</span> {currency}{fmt(h.buyPrice)}
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
    <span style={{ color: '#64748B' }}>Current:</span>
    <input type="number" value={h.currentPrice || ''} onChange={(e)=>updateCurrentPrice(h.id, e.target.value)} style={{
    background: 'rgba(248,250,252,0.95)',
    border: '1px solid rgba(15,23,42,0.08)',
    borderRadius: 4,
    width: 80,
    padding: '2px 6px',
    fontSize: '0.8rem',
    color: '#0F172A'
    }} aria-label={`Update current price for ${h.coin}`} />
    </div>
    <div>
    <span style={{ color: '#64748B' }}>Value:</span> {currency}{fmt(value)}
    </div>
    </div>
    </div>
    <div style={{
    textAlign: 'right',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: 4
    }}>
    <div className={pl >= 0 ? 'text-emerald-600' : 'text-red-500'} style={{
    fontWeight: 700,
    fontSize: '1.1rem'
    }}>
    {pl >= 0 ? '+' : ''}{currency}{fmt(pl)}
    </div>
    <div className={roi >= 0 ? 'text-emerald-600' : 'text-red-500'} style={{
    fontSize: '0.85rem',
    fontWeight: 600
    }}>
    {roi >= 0 ? '+' : ''}{roi.toFixed(2)}%
    </div>
    <button onClick={()=>removeHolding(h.id)} style={{
    fontSize: '0.75rem',
    color: '#EF4444',
    marginTop: 4,
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    opacity: 0.8
    }} aria-label={`Remove ${h.coin}`}>Remove</button>
    </div>
    </div>
    );})}
    </div>
    </>
    <div className={infoBanner}>💡 Your portfolio is empty. Add a coin above to start tracking. Data is saved locally in your browser.</div>
    </div>
  );
}
