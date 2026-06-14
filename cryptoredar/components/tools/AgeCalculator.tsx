// @ts-nocheck
'use client';

import { useState, useEffect } from 'react';
import { formGroup, formInput, formLabel, formRow, infoBanner, resultBox, resultGrid, resultItem, resultLabel, resultValue } from '@/lib/ui-classes';

export default function AgeCalculator() {
  const [dob, setDob] = useState('');
  const [targetDate, setTargetDate] = useState('');
  const [result, setResult] = useState(null);
  useEffect(()=>{
  // Set target date to today initially
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  setTargetDate(`${yyyy}-${mm}-${dd}`);
  }, []);
  const calculateAge = ()=>{
  if (!dob || !targetDate) return;
  const d1 = new Date(dob);
  const d2 = new Date(targetDate);
  if (isNaN(d1.getTime()) || isNaN(d2.getTime())) return;
  if (d1 > d2) {
  setResult(null);
  return;
  }
  let years = d2.getFullYear() - d1.getFullYear();
  let months = d2.getMonth() - d1.getMonth();
  let days = d2.getDate() - d1.getDate();
  if (days < 0) {
  months--;
  // Get days in previous month of target date
  const prevMonth = new Date(d2.getFullYear(), d2.getMonth(), 0);
  days += prevMonth.getDate();
  }
  if (months < 0) {
  years--;
  months += 12;
  }
  const totalDays = Math.floor((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24));
  setResult({
  years,
  months,
  days,
  totalDays
  });
  };
  useEffect(()=>{
  calculateAge();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
  dob,
  targetDate
  ]);

  return (
    <div>
    <div className={formRow}>
    <div className={formGroup}>
    <label className={formLabel} htmlFor="age-dob-input">Date of Birth</label>
    <input id="age-dob-input" className={formInput} type="date" value={dob} onChange={(e)=>setDob(e.target.value)} max={targetDate} />
    </div>
    <div className={formGroup}>
    <label className={formLabel} htmlFor="age-target-input">Calculate age at</label>
    <input id="age-target-input" className={formInput} type="date" value={targetDate} onChange={(e)=>setTargetDate(e.target.value)} />
    </div>
    </div>
    {result && (
    <div className={resultBox}>
    <div style={{
    textAlign: 'center',
    marginBottom: 24
    }}>
    <div className={resultLabel}>Age</div>
    <div className={resultValue} style={{
    fontSize: '2.5rem',
    color: '#0F172A'
    }}>
    {result.years}
    
    <span style={{
    fontSize: '1.2rem',
    color: '#64748B'
    }}>years</span>
    {' '}
    {result.months}
    
    <span style={{
    fontSize: '1.2rem',
    color: '#64748B'
    }}>months</span>
    {' '}
    {result.days}
    
    <span style={{
    fontSize: '1.2rem',
    color: '#64748B'
    }}>days</span>
    </div>
    </div>
    <div className={resultGrid}>
    <div className={resultItem} style={{
    gridColumn: '1/-1',
    textAlign: 'center'
    }}>
    <div className={resultLabel}>Total Days Alive</div>
    <div className={resultValue} style={{
    fontSize: '1.4rem'
    }}>
    {new Intl.NumberFormat('en-US').format(result.totalDays)}
    days
    </div>
    </div>
    </div>
    </div>
    )}
    <div className={infoBanner}>💡 Select your Date of Birth to calculate your exact age in years, months, and days.</div>
    </div>
  );
}
