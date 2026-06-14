// @ts-nocheck
'use client';

const SYLLABLES = {
    random: {
        onset: [
            'b',
            'br',
            'c',
            'ch',
            'cr',
            'd',
            'dr',
            'f',
            'fl',
            'fr',
            'g',
            'gl',
            'gr',
            'h',
            'j',
            'k',
            'kl',
            'kr',
            'l',
            'm',
            'n',
            'p',
            'pl',
            'pr',
            'qu',
            'r',
            's',
            'sh',
            'sl',
            'sm',
            'sn',
            'sp',
            'st',
            'str',
            'sw',
            't',
            'th',
            'tr',
            'v',
            'w',
            'wh',
            'z'
        ],
        nucleus: [
            'a',
            'ai',
            'au',
            'e',
            'ea',
            'ee',
            'i',
            'ie',
            'o',
            'oa',
            'oe',
            'oo',
            'ou',
            'u',
            'ue',
            'ui'
        ],
        coda: [
            '',
            '',
            '',
            '',
            '',
            '',
            'b',
            'd',
            'g',
            'k',
            'l',
            'm',
            'n',
            'ng',
            'p',
            'r',
            's',
            'sh',
            't',
            'th',
            'x',
            'z'
        ]
    },
    fantasy: {
        onset: [
            'ael',
            'aer',
            'al',
            'an',
            'ar',
            'aur',
            'bal',
            'bel',
            'cal',
            'cor',
            'dar',
            'dor',
            'el',
            'er',
            'eth',
            'far',
            'fer',
            'gal',
            'gar',
            'gel',
            'hal',
            'har',
            'il',
            'ior',
            'ir',
            'kal',
            'ker',
            'khor',
            'lal',
            'lan',
            'lor',
            'mal',
            'mor',
            'nal',
            'nor',
            'ol',
            'or',
            'ral',
            'ran',
            'sar',
            'sel',
            'sil',
            'sol',
            'sul',
            'tal',
            'tar',
            'ter',
            'thal',
            'thor',
            'val',
            'var',
            'vel',
            'vor',
            'wal',
            'war',
            'xal',
            'xer',
            'yar',
            'zel',
            'zor'
        ],
        nucleus: [
            'ae',
            'ai',
            'ao',
            'ar',
            'au',
            'ay',
            'ea',
            'ei',
            'er',
            'ia',
            'ie',
            'io',
            'oa',
            'oe',
            'oi',
            'or',
            'ua',
            'ue',
            'ui',
            'ur'
        ],
        coda: [
            '',
            '',
            '',
            '',
            'ael',
            'aer',
            'al',
            'an',
            'ar',
            'as',
            'ath',
            'el',
            'er',
            'eth',
            'il',
            'in',
            'ion',
            'ir',
            'ith',
            'on',
            'or',
            'ul',
            'un',
            'ur',
            'yl'
        ]
    },
    scifi: {
        onset: [
            'ax',
            'bry',
            'cel',
            'cor',
            'cyr',
            'dec',
            'del',
            'dra',
            'dyx',
            'el',
            'em',
            'en',
            'ex',
            'fel',
            'fen',
            'fer',
            'gal',
            'gex',
            'hex',
            'io',
            'ix',
            'jex',
            'kal',
            'ker',
            'kex',
            'kron',
            'lex',
            'lyx',
            'mec',
            'mel',
            'nex',
            'nox',
            'oct',
            'ox',
            'pex',
            'pho',
            'plex',
            'pro',
            'pyx',
            'qua',
            'quin',
            'rex',
            'rho',
            'ryx',
            'sel',
            'sex',
            'sol',
            'syn',
            'tec',
            'tel',
            'tex',
            'trex',
            'ulex',
            'vel',
            'ver',
            'vex',
            'vox',
            'xel',
            'xen',
            'xer',
            'xon',
            'yen',
            'yex',
            'zel',
            'zep',
            'zex',
            'zyx'
        ],
        nucleus: [
            'a',
            'e',
            'eo',
            'i',
            'ia',
            'io',
            'o',
            'oa',
            'oe',
            'u',
            'ua',
            'ue',
            'ui'
        ],
        coda: [
            '',
            '',
            '',
            '',
            'ax',
            'ex',
            'ic',
            'ix',
            'on',
            'or',
            'ox',
            'tron',
            'us',
            'vex',
            'x',
            'yx',
            'z'
        ]
    },
    cute: {
        onset: [
            'b',
            'bl',
            'br',
            'c',
            'ch',
            'cr',
            'd',
            'f',
            'fl',
            'g',
            'gl',
            'h',
            'j',
            'k',
            'l',
            'm',
            'mew',
            'mi',
            'moo',
            'n',
            'p',
            'pl',
            'pr',
            'r',
            's',
            'sh',
            'sn',
            'sp',
            'st',
            't',
            'tw',
            'w',
            'wh',
            'y'
        ],
        nucleus: [
            'a',
            'aw',
            'ay',
            'e',
            'ee',
            'ew',
            'i',
            'ie',
            'o',
            'oo',
            'ou',
            'u',
            'ue'
        ],
        coda: [
            '',
            '',
            '',
            '',
            '',
            'bu',
            'cha',
            'chi',
            'chu',
            'dy',
            'kie',
            'ku',
            'la',
            'le',
            'li',
            'lo',
            'lu',
            'mi',
            'mo',
            'mu',
            'ny',
            'pie',
            'pu',
            'ri',
            'ro',
            'ru',
            'shy',
            'su',
            'sy',
            'ty',
            'wi',
            'wy',
            'xi',
            'xy',
            'yu'
        ]
    }
};
const randomItem = (arr)=>arr[Math.floor(Math.random() * arr.length)];
const generateWord = (style, syllableCount)=>{
    const s = SYLLABLES[style];
    let word = '';
    for(let i = 0; i < syllableCount; i++){
        word += randomItem(s.onset) + randomItem(s.nucleus) + randomItem(s.coda);
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
};

import { useState } from 'react';
import { btnPrimary, btnSecondary, btnSm, formGroup, formLabel, resultBoxSuccess, resultLabel } from '@/lib/ui-classes';

export default function FakeWordGenerator() {
  const [style, setStyle] = useState('random');
  const [count, setCount] = useState(10);
  const [syllables, setSyllables] = useState(2);
  const [words, setWords] = useState([]);
  const [copied, setCopied] = useState(false);
  const generate = ()=>{
  const generated = Array.from({
  length: count
  }, ()=>generateWord(style, syllables));
  setWords(generated);
  };
  const handleCopy = async ()=>{
  if (!words.length) return;
  await navigator.clipboard.writeText(words.join('\n'));
  setCopied(true);
  setTimeout(()=>setCopied(false), 2000);
  };
  const STYLES = [
  {
  id: 'random',
  label: 'Random',
  emoji: '🎲'
  },
  {
  id: 'fantasy',
  label: 'Fantasy',
  emoji: '🧝'
  },
  {
  id: 'scifi',
  label: 'Sci-Fi',
  emoji: '🚀'
  },
  {
  id: 'cute',
  label: 'Cute',
  emoji: '🐱'
  }
  ];

  return (
    <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
    }}>
    <div>
    <div className={formLabel} style={{
    marginBottom: 10
    }}>Word Style</div>
    <div style={{
    display: 'flex',
    gap: 10,
    flexWrap: 'wrap'
    }}>
    {STYLES.map((s) => (
    <button key={s.id} className={style === s.id ? btnPrimary : btnSecondary} onClick={()=>setStyle(s.id)}>
    {s.emoji} {s.label}
    </button>
    ))}
    </div>
    </div>
    <div style={{
    display: 'flex',
    gap: 16,
    flexWrap: 'wrap'
    }}>
    <div className={formGroup} style={{
    flex: 1,
    minWidth: 160
    }}>
    <label className={formLabel}>
    Number of Words:
    <strong>      {count}</strong>
    </label>
    <input type="range" min={1} max={50} value={count} onChange={(e)=>setCount(Number(e.target.value))} style={{
    width: '100%',
    accentColor: '#FF9500'
    }} />
    <div style={{
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.75rem',
    color: '#64748B'
    }}>
    <span>1</span>
    <span>50</span>
    </div>
    </div>
    <div className={formGroup} style={{
    flex: 1,
    minWidth: 160
    }}>
    <label className={formLabel}>
    Syllables per Word:
    <strong>      {syllables}</strong>
    </label>
    <input type="range" min={1} max={5} value={syllables} onChange={(e)=>setSyllables(Number(e.target.value))} style={{
    width: '100%',
    accentColor: '#FF9500'
    }} />
    <div style={{
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.75rem',
    color: '#64748B'
    }}>
    <span>1 (short)</span>
    <span>5 (long)</span>
    </div>
    </div>
    </div>
    <button className={btnPrimary} onClick={generate} style={{
    alignSelf: 'start'
    }}>🎲 Generate Fake Words</button>
    {words.length > 0 && <div className={resultBoxSuccess}>
    <div style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12
    }}>
    <div className={resultLabel}>
    {words.length}
    Generated Words
    </div>
    <div style={{
    display: 'flex',
    gap: 8
    }}>
    <button className={`${btnSecondary} ${btnSm}`} onClick={generate}>🔄 Regenerate</button>
    <button className={`${btnSecondary} ${btnSm}`} onClick={handleCopy}>      {copied ? '✅ Copied!' : '📋 Copy All'}</button>
    </div>
    </div>
    <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8
    }}>
    {words.map((word, i)=>
    <span key={i} onClick={async ()=>{
    await navigator.clipboard.writeText(word);
    }} style={{
    background: 'rgba(248,250,252,0.95)',
    border: '1px solid rgba(15,23,42,0.08)',
    padding: '6px 12px',
    borderRadius: '0.75rem',
    fontSize: '0.95rem',
    color: '#FF9500',
    cursor: 'pointer',
    fontWeight: 600,
    transition: 'border-color 0.2s, background 0.2s'
    }} title="Click to copy this word" onMouseEnter={(e)=>{
    e.currentTarget.style.background = 'rgba(255,149,0,0.15)';
    e.currentTarget.style.borderColor = '#FF9500';
    }} onMouseLeave={(e)=>{
    e.currentTarget.style.background = 'rgba(248,250,252,0.95)';
    e.currentTarget.style.borderColor = 'rgba(15,23,42,0.08)';
    }}>{word}</span>
    )}
    </div>
    </div>}
    <div style={{
    background: 'rgba(248,250,252,0.95)',
    border: '1px solid rgba(15,23,42,0.08)',
    borderRadius: '1rem',
    padding: 16,
    fontSize: '0.85rem',
    color: '#64748B',
    lineHeight: 1.7
    }}>
    <strong style={{
    color: '#0F172A'
    }}>💡 Use cases:</strong>
    {' '}
    Generate fake words for fantasy world-building, sci-fi stories, game character names, placeholder text, brand name brainstorming, or language invention. This fake word generator and fake words generator creates pronounceable, original words every time — no real language, purely invented vocabulary.
    </div>
    </div>
  );
}
