// @ts-nocheck
'use client';

import { useState, useEffect } from 'react';
import { btnCopy, formGroup, formInput, formLabel, formRow, formSelect, formTextarea, outputArea } from '@/lib/ui-classes';

export default function MetaGenerator() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [keywords, setKeywords] = useState('');
  const [author, setAuthor] = useState('');
  const [robots, setRobots] = useState('index, follow');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);
  useEffect(()=>{
  let html = '';
  if (title) html += `<title>${title}</title>\n`;
  if (title) html += `<meta name="title" content="${title}">\n`;
  if (desc) html += `<meta name="description" content="${desc}">\n`;
  if (keywords) html += `<meta name="keywords" content="${keywords}">\n`;
  if (robots) html += `<meta name="robots" content="${robots}">\n`;
  if (author) html += `<meta name="author" content="${author}">\n`;
  // OG Tags
  if (title || desc) html += `\n<!-- Open Graph / Facebook -->\n<meta property="og:type" content="website">\n`;
  if (title) html += `<meta property="og:title" content="${title}">\n`;
  if (desc) html += `<meta property="og:description" content="${desc}">\n`;
  // Twitter Tags
  if (title || desc) html += `\n<!-- Twitter -->\n<meta property="twitter:card" content="summary_large_image">\n`;
  if (title) html += `<meta property="twitter:title" content="${title}">\n`;
  if (desc) html += `<meta property="twitter:description" content="${desc}">\n`;
  setOutput(html);
  }, [
  title,
  desc,
  keywords,
  author,
  robots
  ]);
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: 24
    }}>
    <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
    }}>
    <div className={formGroup} style={{
    marginBottom: 0
    }}>
    <label className={formLabel} style={{
    display: 'flex',
    justifyContent: 'space-between'
    }}>
    <span>Page Title</span>
    <span style={{
    color: title.length > 60 ? '#EF4444' : '#64748B'
    }}>
    {title.length}
    /60
    </span>
    </label>
    <input className={formInput} type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="CryptoRedar - Free Tools" />
    </div>
    <div className={formGroup} style={{
    marginBottom: 0
    }}>
    <label className={formLabel} style={{
    display: 'flex',
    justifyContent: 'space-between'
    }}>
    <span>Meta Description</span>
    <span style={{
    color: desc.length > 160 ? '#EF4444' : '#64748B'
    }}>
    {desc.length}
    /160
    </span>
    </label>
    <textarea className={formTextarea} value={desc} onChange={(e)=>setDesc(e.target.value)} placeholder="A brief description of your page..." style={{
    minHeight: 80
    }} />
    </div>
    <div className={formGroup} style={{
    marginBottom: 0
    }}>
    <label className={formLabel}>Keywords (comma separated)</label>
    <input className={formInput} type="text" value={keywords} onChange={(e)=>setKeywords(e.target.value)} placeholder="crypto, tools, calculator" />
    </div>
    <div className={formRow} style={{
    marginBottom: 0
    }}>
    <div className={formGroup} style={{
    marginBottom: 0
    }}>
    <label className={formLabel}>Author (optional)</label>
    <input className={formInput} type="text" value={author} onChange={(e)=>setAuthor(e.target.value)} placeholder="John Doe" />
    </div>
    <div className={formGroup} style={{
    marginBottom: 0
    }}>
    <label className={formLabel}>Robots Indexing</label>
    <select className={formSelect} value={robots} onChange={(e)=>setRobots(e.target.value)}>
    <option value="index, follow">Index, Follow</option>
    <option value="noindex, follow">No-Index, Follow</option>
    <option value="index, nofollow">Index, No-Follow</option>
    <option value="noindex, nofollow">No-Index, No-Follow</option>
    </select>
    </div>
    </div>
    </div>
    <div className={formGroup} style={{
    marginBottom: 0,
    position: 'relative'
    }}>
    <label className={formLabel}>Generated HTML</label>
    <textarea className={outputArea} value={output} readOnly style={{
    height: 'calc(100% - 28px)',
    fontFamily: 'monospace',
    fontSize: '0.85rem',
    whiteSpace: 'pre'
    }} placeholder="Fill out the form to generate meta tags..." />
    <button className={`${btnCopy}${copied ? ' bg-emerald-50 text-emerald-700' : ''}`} onClick={copyToClipboard} style={{
    position: 'absolute',
    top: 32,
    right: 12
    }}>      {copied ? '✅ Copied!' : '📋 Copy HTML'}</button>
    </div>
    </div>
    </div>
  );
}
