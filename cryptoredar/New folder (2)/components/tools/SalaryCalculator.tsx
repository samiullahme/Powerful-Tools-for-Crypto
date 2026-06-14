// @ts-nocheck
'use client';

import { useState } from 'react';
import { formGroup, formInput, formLabel, formRow, infoBanner, resultBox, resultGrid, resultItem, resultLabel, resultValue, sectionLabel } from '@/lib/ui-classes';

export default function SalaryCalculator() {
  const [ctc, setCtc] = useState('1200000');
  const [basicPct, setBasicPct] = useState('50');
  const ctcVal = parseFloat(ctc) || 0;
  const basic = parseFloat(basicPct) || 50;
  let basicSalary = 0;
  let hra = 0;
  let specialAllowance = 0;
  let pfEmployer = 0;
  let pfEmployee = 0;
  let professionalTax = 0;
  let grossSalary = 0;
  let netSalary = 0;
  let monthlyNet = 0;
  let standardDeduction = 50000;
  let taxableIncome = 0;
  let tax = 0;
  if (ctcVal > 0) {
  // Basic structure estimation
  basicSalary = ctcVal * (basic / 100);
  hra = basicSalary * 0.40; // Assuming 40% non-metro
  pfEmployer = basicSalary * 0.12;
  pfEmployee = basicSalary * 0.12;
  professionalTax = 2400; // Annual typical
  // Remaining is special allowance
  specialAllowance = ctcVal - basicSalary - hra - pfEmployer;
  if (specialAllowance < 0) {
  specialAllowance = 0;
  }
  grossSalary = ctcVal - pfEmployer;
  // Very simplified New Tax Regime calculation (approx)
  taxableIncome = grossSalary - standardDeduction;
  if (taxableIncome <= 700000) {
  tax = 0;
  } else {
  // Simplified brackets for estimate
  if (taxableIncome > 300000) tax += Math.min(taxableIncome - 300000, 300000) * 0.05;
  if (taxableIncome > 600000) tax += Math.min(taxableIncome - 600000, 300000) * 0.10;
  if (taxableIncome > 900000) tax += Math.min(taxableIncome - 900000, 300000) * 0.15;
  if (taxableIncome > 1200000) tax += Math.min(taxableIncome - 1200000, 300000) * 0.20;
  if (taxableIncome > 1500000) tax += (taxableIncome - 1500000) * 0.30;
  tax = tax * 1.04; // Cess
  }
  netSalary = grossSalary - pfEmployee - professionalTax - tax;
  monthlyNet = netSalary / 12;
  }
  const hasInput = ctcVal > 0;
  const fmt = (n)=>new Intl.NumberFormat('en-IN', {
  maximumFractionDigits: 0
  }).format(n);

  return (
    <div>
    <div className={formRow}>
    <div className={formGroup}>
    <label className={formLabel} htmlFor="sal-ctc-input">Annual CTC (₹)</label>
    <input id="sal-ctc-input" className={formInput} type="number" value={ctc} onChange={(e)=>setCtc(e.target.value)} min="0" step="any" />
    </div>
    <div className={formGroup}>
    <label className={formLabel} htmlFor="sal-basic-input">Basic Salary % of CTC</label>
    <input id="sal-basic-input" className={formInput} type="number" value={basicPct} onChange={(e)=>setBasicPct(e.target.value)} min="0" max="100" />
    </div>
    </div>
    <div className={resultBox}>
    <div style={{
    textAlign: 'center',
    marginBottom: 24
    }}>
    <div className={resultLabel}>Estimated Monthly In-Hand</div>
    <div className={resultValue} style={{
    fontSize: '2.5rem',
    color: '#0F766E'
    }}>
    ₹
    {fmt(monthlyNet)}
    </div>
    <div style={{
    fontSize: '0.85rem',
    color: '#64748B'
    }}>
    Net Annual: ₹
    {fmt(netSalary)}
    </div>
    </div>
    <div className={sectionLabel} style={{
    marginBottom: 12
    }}>Earnings Breakdown (Annual)</div>
    <div className={resultGrid} style={{
    marginBottom: 20
    }}>
    <div className={resultItem}>
    <div className={resultLabel}>Basic</div>
    <div className={resultValue} style={{
    fontSize: '1rem'
    }}>
    ₹
    {fmt(basicSalary)}
    </div>
    </div>
    <div className={resultItem}>
    <div className={resultLabel}>HRA</div>
    <div className={resultValue} style={{
    fontSize: '1rem'
    }}>
    ₹
    {fmt(hra)}
    </div>
    </div>
    <div className={resultItem}>
    <div className={resultLabel}>Special Allowance</div>
    <div className={resultValue} style={{
    fontSize: '1rem'
    }}>
    ₹
    {fmt(specialAllowance)}
    </div>
    </div>
    </div>
    <div className={sectionLabel} style={{
    marginBottom: 12
    }}>Deductions (Annual)</div>
    <div className={resultGrid}>
    <div className={resultItem} style={{
    background: 'rgba(239,68,68,0.1)'
    }}>
    <div className={resultLabel}>EPF (Employee)</div>
    <div className={resultValue} style={{
    fontSize: '1rem',
    color: '#EF4444'
    }}>
    -₹
    {fmt(pfEmployee)}
    </div>
    </div>
    <div className={resultItem} style={{
    background: 'rgba(239,68,68,0.1)'
    }}>
    <div className={resultLabel}>Prof. Tax</div>
    <div className={resultValue} style={{
    fontSize: '1rem',
    color: '#EF4444'
    }}>
    -₹
    {fmt(professionalTax)}
    </div>
    </div>
    <div className={resultItem} style={{
    background: 'rgba(239,68,68,0.1)'
    }}>
    <div className={resultLabel}>Estimated Income Tax</div>
    <div className={resultValue} style={{
    fontSize: '1rem',
    color: '#EF4444'
    }}>
    -₹
    {fmt(tax)}
    </div>
    </div>
    </div>
    </div>
    <div className={infoBanner}>💡 Enter your Annual CTC to estimate your take-home salary based on standard Indian corporate structures and the new tax regime.</div>
    </div>
  );
}
