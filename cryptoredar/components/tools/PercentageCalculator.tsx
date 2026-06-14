// @ts-nocheck
'use client';

import { useState } from 'react';
import { formGroup, formInput, formLabel, formRow, infoBanner, resultBox, resultLabel, resultValue, tabBtn, tabBtnActive, tabs } from '@/lib/ui-classes';

export default function PercentageCalculator() {
  const [val1, setVal1] = useState('');
  const [val2, setVal2] = useState('');
  const [mode, setMode] = useState('percentOf');
  const v1 = parseFloat(val1) || 0;
  const v2 = parseFloat(val2) || 0;
  let result = 0;
  let resultText = '';
  const fmt = (n)=>new Intl.NumberFormat('en-US', {
  maximumFractionDigits: 4
  }).format(n);
  if (v1 && v2) {
  if (mode === 'percentOf') {
  result = v1 / 100 * v2;
  resultText = `${v1}% of ${v2} is ${fmt(result)}`;
  } else if (mode === 'isWhatPercent') {
  result = v1 / v2 * 100;
  resultText = `${v1} is ${fmt(result)}% of ${v2}`;
  } else if (mode === 'percentChange') {
  result = (v2 - v1) / v1 * 100;
  const changeStr = result >= 0 ? 'Increase' : 'Decrease';
  resultText = `${Math.abs(result).toFixed(2)}% ${changeStr} (from ${v1} to ${v2})`;
  }
  }
  const hasInput = val1 !== '' && val2 !== '';

  return (
    <div>
    <div className={tabs} style={{
    marginBottom: 24
    }}>
    <button className={mode === 'percentOf' ? tabBtnActive : tabBtn} onClick={()=>{
    setMode('percentOf');
    setVal1('');
    setVal2('');
    }}>X% of Y</button>
    <button className={mode === 'isWhatPercent' ? tabBtnActive : tabBtn} onClick={()=>{
    setMode('isWhatPercent');
    setVal1('');
    setVal2('');
    }}>X is what % of Y</button>
    <button className={mode === 'percentChange' ? tabBtnActive : tabBtn} onClick={()=>{
    setMode('percentChange');
    setVal1('');
    setVal2('');
    }}>% Change (X to Y)</button>
    </div>
    <div className={formRow} style={{
    alignItems: 'flex-end'
    }}>
    <div className={formGroup} style={{
    marginBottom: 0
    }}>
    <label className={formLabel} htmlFor="perc-v1-input">
    {mode === 'percentOf' && 'What is X%'}
    {mode === 'isWhatPercent' && 'Value X'}
    {mode === 'percentChange' && 'From Value (Old)'}
    </label>
    <input id="perc-v1-input" className={formInput} type="number" value={val1} onChange={(e)=>setVal1(e.target.value)} step="any" placeholder="Enter X" />
    </div>
    <div style={{
    padding: '10px 0',
    fontWeight: 600,
    color: '#64748B'
    }}>
    {mode === 'percentOf' && 'of'}
    {mode === 'isWhatPercent' && 'is what % of'}
    {mode === 'percentChange' && 'to'}
    </div>
    <div className={formGroup} style={{
    marginBottom: 0
    }}>
    <label className={formLabel} htmlFor="perc-v2-input">
    {mode === 'percentOf' && 'Value Y'}
    {mode === 'isWhatPercent' && 'Value Y'}
    {mode === 'percentChange' && 'To Value (New)'}
    </label>
    <input id="perc-v2-input" className={formInput} type="number" value={val2} onChange={(e)=>setVal2(e.target.value)} step="any" placeholder="Enter Y" />
    </div>
    </div>
    <div className={resultBox} style={{
    marginTop: 24,
    textAlign: 'center'
    }}>
    <div className={resultLabel}>Result</div>
    <div className={resultValue} style={{
    fontSize: '1.6rem',
    color: '#0F766E',
    marginTop: 8
    }}>      {resultText}</div>
    </div>
    <div className={infoBanner} style={{
    marginTop: 24
    }}>💡 Select a calculation mode and enter both numbers to see the percentage result.</div>
    </div>
  );
}
