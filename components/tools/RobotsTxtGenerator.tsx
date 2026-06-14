// @ts-nocheck
'use client';

import { useState, useEffect } from 'react';
import { btnCopy, btnSecondary, btnSm, formGroup, formInput, formLabel, formSelect, outputArea } from '@/lib/ui-classes';

export default function RobotsTxtGenerator() {
  const [rules, setRules] = useState([
  {
  agent: '*',
  directive: 'Allow',
  path: '/'
  }
  ]);
  const [sitemap, setSitemap] = useState('');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);
  useEffect(()=>{
  let txt = '';
  // Group by User-agent
  const grouped = rules.reduce({
  "RobotsTxtGenerator.useEffect.grouped": (acc, rule)=>{
  const a = rule.agent || '*';
  if (!acc[a]) acc[a] = [];
  acc[a].push(rule);
  return acc;
  }
  }["RobotsTxtGenerator.useEffect.grouped"], {});
  Object.entries(grouped).forEach({
  "RobotsTxtGenerator.useEffect": ([agent, agentRules])=>{
  txt += `User-agent: ${agent}\n`;
  agentRules.forEach({
  "RobotsTxtGenerator.useEffect": (r)=>{
  if (r.path) txt += `${r.directive}: ${r.path}\n`;
  }
  }["RobotsTxtGenerator.useEffect"]);
  txt += '\n';
  }
  }["RobotsTxtGenerator.useEffect"]);
  if (sitemap) {
  txt += `Sitemap: ${sitemap}\n`;
  }
  setOutput(txt.trim());
  }, [
  rules,
  sitemap
  ]);
  const addRule = ()=>{
  setRules([
  ...rules,
  {
  agent: '*',
  directive: 'Disallow',
  path: '/private-path/'
  }
  ]);
  };
  const updateRule = (index, field, value)=>{
  const newRules = [
  ...rules
  ];
  newRules[index][field] = value;
  setRules(newRules);
  };
  const removeRule = (index)=>{
  setRules(rules.filter((_, i)=>i !== index));
  };
  const copyToClipboard = ()=>{
  if (!output) return;
  navigator.clipboard.writeText(output);
  setCopied(true);
  setTimeout(()=>setCopied(false), 2000);
  };

  return (
    <div>
    <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: 24
    }}>
    <div>
    <div style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16
    }}>
    <h3 style={{
    fontSize: '1.1rem',
    margin: 0
    }}>Rules</h3>
    <button className={`${btnSecondary} ${btnSm}`} onClick={addRule}>+ Add Rule</button>
    </div>
    <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
    }}>
    {rules.map((rule, i)=>
    <div key={i} style={{
    display: 'flex',
    gap: 8,
    background: 'rgba(248,250,252,0.95)',
    padding: 12,
    borderRadius: '0.75rem',
    border: '1px solid rgba(15,23,42,0.08)',
    alignItems: 'center'
    }}>
    <input type="text" className={formInput} style={{
    width: '80px',
    padding: '4px 8px'
    }} value={rule.agent} onChange={(e)=>updateRule(i, 'agent', e.target.value)} placeholder="Agent" title="User-agent (e.g. *, Googlebot)" />
    <select className={formSelect} style={{
    width: '100px',
    padding: '4px 8px'
    }} value={rule.directive} onChange={(e)=>updateRule(i, 'directive', e.target.value)}>
    <option value="Allow">Allow</option>
    <option value="Disallow">Disallow</option>
    </select>
    <input type="text" className={formInput} style={{
    flex: 1,
    padding: '4px 8px'
    }} value={rule.path} onChange={(e)=>updateRule(i, 'path', e.target.value)} placeholder="/path/" />
    <button onClick={()=>removeRule(i)} style={{
    background: 'none',
    border: 'none',
    color: '#EF4444',
    cursor: 'pointer',
    padding: '0 4px'
    }} title="Remove rule">✖</button>
    </div>
    )}
    </div>
    <div className={formGroup} style={{
    marginTop: 20
    }}>
    <label className={formLabel}>Sitemap URL (Optional)</label>
    <input className={formInput} type="text" value={sitemap} onChange={(e)=>setSitemap(e.target.value)} placeholder="https://example.com/sitemap.xml" />
    </div>
    </div>
    <div className={formGroup} style={{
    marginBottom: 0,
    position: 'relative'
    }}>
    <label className={formLabel}>Generated robots.txt</label>
    <textarea className={outputArea} value={output} readOnly style={{
    height: 'calc(100% - 28px)',
    minHeight: 250,
    fontFamily: 'monospace',
    fontSize: '0.9rem',
    whiteSpace: 'pre'
    }} />
    <button className={`${btnCopy}${copied ? ' bg-emerald-50 text-emerald-700' : ''}`} onClick={copyToClipboard} style={{
    position: 'absolute',
    top: 32,
    right: 12
    }}>      {copied ? '✅ Copied!' : '📋 Copy'}</button>
    </div>
    </div>
    </div>
  );
}
