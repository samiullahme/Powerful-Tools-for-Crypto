// @ts-nocheck
'use client';

import { useState, useEffect } from 'react';
import { formGroup, formLabel, formTextarea, resultBox } from '@/lib/ui-classes';

export default function WordCounter() {
  const [text, setText] = useState('');
  const [stats, setStats] = useState({
  words: 0,
  chars: 0,
  charsNoSpaces: 0,
  sentences: 0,
  paragraphs: 0,
  readingTime: 0
  });
  // Load saved draft on mount
  useEffect(()=>{
  const saved = localStorage.getItem('cryptoredar_word_counter_text');
  if (saved) setText(saved);
  }, []);
  useEffect(()=>{
  localStorage.setItem('cryptoredar_word_counter_text', text);
  const chars = text.length;
  const charsNoSpaces = text.replace(/\s+/g, '').length;
  // Trim and split by whitespace, filter out empty strings
  const wordsArr = text.trim().split(/\s+/).filter({
  "WordCounter.useEffect.wordsArr": (w)=>w.length > 0
  }["WordCounter.useEffect.wordsArr"]);
  const words = wordsArr.length;
  // Simple sentence regex (ends with . ! ?)
  const sentences = text.split(/[.!?]+/).filter({
  "WordCounter.useEffect": (s)=>s.trim().length > 0
  }["WordCounter.useEffect"]).length;
  // Paragraphs split by newlines
  const paragraphs = text.split(/\n+/).filter({
  "WordCounter.useEffect": (p)=>p.trim().length > 0
  }["WordCounter.useEffect"]).length;
  // Reading time (avg 200 words per minute) -> output in seconds
  const readingTimeSec = Math.ceil(words / 200 * 60);
  setStats({
  words,
  chars,
  charsNoSpaces,
  sentences,
  paragraphs,
  readingTime: readingTimeSec
  });
  }, [
  text
  ]);
  const formatTime = (sec)=>{
  if (sec < 60) return `${sec} sec`;
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m} min ${s > 0 ? s + ' sec' : ''}`;
  };

  return (
    <div>
    <div className={resultBox} style={{
    marginBottom: 24,
    padding: '16px'
    }}>
    <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
    gap: 16,
    textAlign: 'center'
    }}>
    <div>
    <div style={{
    fontSize: '2rem',
    fontWeight: 800,
    color: '#0F172A'
    }}>      {stats.words}</div>
    <div style={{
    fontSize: '0.85rem',
    color: '#64748B',
    textTransform: 'uppercase',
    letterSpacing: '1px'
    }}>Words</div>
    </div>
    <div>
    <div style={{
    fontSize: '2rem',
    fontWeight: 800,
    color: '#0F172A'
    }}>      {stats.chars}</div>
    <div style={{
    fontSize: '0.85rem',
    color: '#64748B',
    textTransform: 'uppercase',
    letterSpacing: '1px'
    }}>Characters</div>
    </div>
    <div>
    <div style={{
    fontSize: '2rem',
    fontWeight: 800,
    color: '#0F172A'
    }}>      {stats.sentences}</div>
    <div style={{
    fontSize: '0.85rem',
    color: '#64748B',
    textTransform: 'uppercase',
    letterSpacing: '1px'
    }}>Sentences</div>
    </div>
    <div>
    <div style={{
    fontSize: '2rem',
    fontWeight: 800,
    color: '#0F172A'
    }}>      {stats.paragraphs}</div>
    <div style={{
    fontSize: '0.85rem',
    color: '#64748B',
    textTransform: 'uppercase',
    letterSpacing: '1px'
    }}>Paragraphs</div>
    </div>
    </div>
    </div>
    <div className={formGroup}>
    <div style={{
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 8
    }}>
    <label className={formLabel} style={{
    marginBottom: 0
    }}>Input Text</label>
    <button onClick={()=>setText('')} style={{
    background: 'none',
    border: 'none',
    color: '#64748B',
    cursor: 'pointer',
    fontSize: '0.85rem'
    }}>Clear Text</button>
    </div>
    <textarea className={formTextarea} value={text} onChange={(e)=>setText(e.target.value)} placeholder="Start typing or paste your document here..." style={{
    minHeight: 300,
    fontSize: '1rem',
    lineHeight: 1.6
    }} />
    </div>
    <div style={{
    display: 'flex',
    gap: 24,
    fontSize: '0.85rem',
    color: '#64748B',
    justifyContent: 'center'
    }}>
    <div>
    Chars (no spaces):
    <span style={{
    color: '#0F172A',
    fontWeight: 600
    }}>      {stats.charsNoSpaces}</span>
    </div>
    <div>
    Est. Reading Time:
    <span style={{
    color: '#0F172A',
    fontWeight: 600
    }}>      {formatTime(stats.readingTime)}</span>
    </div>
    </div>
    </div>
  );
}
