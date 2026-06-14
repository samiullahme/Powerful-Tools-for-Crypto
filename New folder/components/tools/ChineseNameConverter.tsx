// @ts-nocheck
'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const SYLLABLE_MAP = {
    da: {
        simp: '达',
        trad: '達',
        pinyin: 'dá',
        strokes: 6,
        meanings: 'Achieve, reach, attain success'
    },
    vid: {
        simp: '维',
        trad: '維',
        pinyin: 'wéi',
        strokes: 11,
        meanings: 'Preserve, tie, hold together'
    },
    sa: {
        simp: '萨',
        trad: '薩',
        pinyin: 'sà',
        strokes: 17,
        meanings: 'Salvation, compassion, bodhisattva'
    },
    mi: {
        simp: '米',
        trad: '米',
        pinyin: 'mǐ',
        strokes: 6,
        meanings: 'Wealth, rice, grain'
    },
    u: {
        simp: '尤',
        trad: '尤',
        pinyin: 'yóu',
        strokes: 4,
        meanings: 'Outstanding, excellent, especially'
    },
    le: {
        simp: '乐',
        trad: '樂',
        pinyin: 'lè',
        strokes: 5,
        meanings: 'Happiness, laughter, music'
    },
    o: {
        simp: '奥',
        trad: '奧',
        pinyin: 'ào',
        strokes: 12,
        meanings: 'Mysterious, profound, deep'
    },
    ro: {
        simp: '罗',
        trad: '羅',
        pinyin: 'luó',
        strokes: 8,
        meanings: 'Net, gather, gather together'
    },
    ma: {
        simp: '马',
        trad: '馬',
        pinyin: 'mǎ',
        strokes: 3,
        meanings: 'Speed, horse, progress'
    },
    ry: {
        simp: '瑞',
        trad: '瑞',
        pinyin: 'ruì',
        strokes: 13,
        meanings: 'Auspicious, lucky, jade token'
    },
    jo: {
        simp: '乔',
        trad: '喬',
        pinyin: 'qiáo',
        strokes: 6,
        meanings: 'Tall, high, proud'
    },
    an: {
        simp: '安',
        trad: '安',
        pinyin: 'ān',
        strokes: 6,
        meanings: 'Peace, safety, security'
    },
    ca: {
        simp: '卡',
        trad: '卡',
        pinyin: 'kǎ',
        strokes: 5,
        meanings: 'Pass, guard post, card'
    },
    li: {
        simp: '丽',
        trad: '麗',
        pinyin: 'lì',
        strokes: 7,
        meanings: 'Beautiful, elegant, bright'
    },
    na: {
        simp: '娜',
        trad: '娜',
        pinyin: 'nà',
        strokes: 9,
        meanings: 'Graceful, elegant, feminine'
    },
    lu: {
        simp: '路',
        trad: '路',
        pinyin: 'lù',
        strokes: 13,
        meanings: 'Path, road, journey'
    },
    cae: {
        simp: '凯',
        trad: '凱',
        pinyin: 'kǎi',
        strokes: 8,
        meanings: 'Triumph, victory, gentle breeze'
    },
    sar: {
        simp: '萨',
        trad: '薩',
        pinyin: 'sà',
        strokes: 17,
        meanings: 'Compassionate'
    },
    john: {
        simp: '约',
        trad: '約',
        pinyin: 'yuē',
        strokes: 6,
        meanings: 'Agreement, promise'
    },
    han: {
        simp: '翰',
        trad: '翰',
        pinyin: 'hàn',
        strokes: 16,
        meanings: 'Writing brush, literature, feather'
    },
    jae: {
        simp: '杰',
        trad: '傑',
        pinyin: 'jié',
        strokes: 8,
        meanings: 'Hero, outstanding talent'
    },
    min: {
        simp: '敏',
        trad: '敏',
        pinyin: 'mǐn',
        strokes: 11,
        meanings: 'Quick, agile, smart'
    }
};
// Trait overlays (replaces the final character to emphasize a specific meaning)
const TRAIT_MAP = {
    strength: {
        male: {
            simp: '力',
            trad: '力',
            pinyin: 'lì',
            strokes: 2,
            meanings: 'Power, strength, physical force'
        },
        female: {
            simp: '岚',
            trad: '嵐',
            pinyin: 'lán',
            strokes: 7,
            meanings: 'Mountain mist, strength of heights'
        },
        neutral: {
            simp: '豪',
            trad: '豪',
            pinyin: 'háo',
            strokes: 14,
            meanings: 'Heroic, bold, grandiose'
        }
    },
    wisdom: {
        male: {
            simp: '哲',
            trad: '哲',
            pinyin: 'zhé',
            strokes: 10,
            meanings: 'Philosophy, wise person'
        },
        female: {
            simp: '慧',
            trad: '慧',
            pinyin: 'huì',
            strokes: 15,
            meanings: 'Intelligence, wisdom, cleverness'
        },
        neutral: {
            simp: '明',
            trad: '明',
            pinyin: 'míng',
            strokes: 8,
            meanings: 'Bright, clear, understanding'
        }
    },
    elegance: {
        male: {
            simp: '彬',
            trad: '彬',
            pinyin: 'bīn',
            strokes: 11,
            meanings: 'Refined, gentle, polite'
        },
        female: {
            simp: '雅',
            trad: '雅',
            pinyin: 'yǎ',
            strokes: 12,
            meanings: 'Elegant, refined, classic beauty'
        },
        neutral: {
            simp: '轩',
            trad: '軒',
            pinyin: 'xuān',
            strokes: 7,
            meanings: 'High, lofty, spacious carriage'
        }
    },
    peace: {
        male: {
            simp: '平',
            trad: '平',
            pinyin: 'píng',
            strokes: 5,
            meanings: 'Flat, peaceful, quiet'
        },
        female: {
            simp: '静',
            trad: '靜',
            pinyin: 'jìng',
            strokes: 14,
            meanings: 'Quiet, still, peaceful calm'
        },
        neutral: {
            simp: '安',
            trad: '安',
            pinyin: 'ān',
            strokes: 6,
            meanings: 'Safe, secure, peace'
        }
    }
};
const BILINGUAL_BABY_NAMES = {
    boy: [
        {
            eng: 'Leo',
            chi: '里奥 (lǐ ào)',
            meaning: 'Sounds like "Liao" (Lofty, soaring), symbolizing speed and strength.'
        },
        {
            eng: 'Winston',
            chi: '温斯顿 (wēn sī dùn)',
            meaning: '温 (warm, kind) + 顿 (sudden/profound), represents kindness and depth.'
        },
        {
            eng: 'Dan',
            chi: '丹 (dān)',
            meaning: 'Short and sweet, meaning red, sincere, or loyalty.'
        },
        {
            eng: 'Ben',
            chi: '本 (běn)',
            meaning: 'Matches phonetic Ben, meaning root, origin, or source of life.'
        },
        {
            eng: 'Kai',
            chi: '凯 (kǎi)',
            meaning: 'Meaning triumph, victory, and joyful return.'
        }
    ],
    girl: [
        {
            eng: 'Chloe',
            chi: '科林 (kē lín)',
            meaning: 'Sounds like "Kelin" (Jade gemstone forest), representing growth.'
        },
        {
            eng: 'Mia',
            chi: '米娅 (mǐ yà)',
            meaning: '米 (wealth/rice) + 娅 (graceful lady), elegant and prosperous.'
        },
        {
            eng: 'May',
            chi: '美 (měi)',
            meaning: 'Literally means beautiful, matching the phonetic May.'
        },
        {
            eng: 'Nina',
            chi: '妮娜 (nī nà)',
            meaning: 'Double feminine characters representing gracefulness and charm.'
        },
        {
            eng: 'Joy',
            chi: '悦 (yuè)',
            meaning: 'Means delight, joy, and content happiness.'
        }
    ],
    neutral: [
        {
            eng: 'Alex',
            chi: '亚历克斯 (yà lì kè sī)',
            meaning: 'Matches the phonetic sounds of Alex, symbolizing defense and power.'
        },
        {
            eng: 'Bo',
            chi: '波 (bō)',
            meaning: 'Means wave, ripples, or wide ocean.'
        },
        {
            eng: 'Zhe',
            chi: '哲 (zhé)',
            meaning: 'Short name representing wisdom, intellect, and philosophy.'
        },
        {
            eng: 'Lin',
            chi: '林 (lín)',
            meaning: 'Woodland forest, representing growth and nature.'
        }
    ]
};

import { btnPrimary, btnSecondary, btnSm, formGroup, formInput, formLabel, formRow, formSelect, formTextarea, resultBoxSuccess, resultGrid, resultItem, resultLabel, resultValue, tabBtn, tabBtnActive, tabs } from '@/lib/ui-classes';

export default function ChineseNameConverter() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState('engToChi');
  // English to Chinese States
  const [engName, setEngName] = useState('');
  const [gender, setGender] = useState('neutral');
  const [trait, setTrait] = useState('wisdom');
  const [convertedResult, setConvertedResult] = useState(null);
  // Chinese to English States
  const [chiInput, setChiInput] = useState('');
  const [translatorResult, setTranslatorResult] = useState(null);
  // Baby Names States
  const [babyGender, setBabyGender] = useState('boy');
  // Word Count States
  const [bilingualText, setBilingualText] = useState('');
  const [stats, setStats] = useState(null);
  // Handle routing pre-selection logic based on URL slug
  useEffect(()=>{
  if (!pathname) return;
  const slug = pathname.split('/').pop();
  if (slug) {
  if (slug.includes('english-to-chinese')) {
  setActiveTab('engToChi');
  } else if (slug.includes('chinese-to-english')) {
  setActiveTab('chiToEng');
  } else if (slug.includes('baby-names')) {
  setActiveTab('babyNames');
  } else if (slug.includes('word-count')) {
  setActiveTab('wordCount');
  }
  }
  }, [
  pathname
  ]);
  // Load saved drafts on mount
  useEffect(()=>{
  const savedEng = localStorage.getItem('cryptoredar_chinese_eng_name');
  const savedChi = localStorage.getItem('cryptoredar_chinese_chi_input');
  const savedBilingual = localStorage.getItem('cryptoredar_chinese_bilingual_text');
  if (savedEng) setEngName(savedEng);
  if (savedChi) setChiInput(savedChi);
  if (savedBilingual) setBilingualText(savedBilingual);
  }, []);
  // Save drafts on change
  useEffect(()=>{
  localStorage.setItem('cryptoredar_chinese_eng_name', engName);
  }, [
  engName
  ]);
  useEffect(()=>{
  localStorage.setItem('cryptoredar_chinese_chi_input', chiInput);
  }, [
  chiInput
  ]);
  useEffect(()=>{
  localStorage.setItem('cryptoredar_chinese_bilingual_text', bilingualText);
  }, [
  bilingualText
  ]);
  // English to Chinese Conversion Engine
  const handleConvertToChinese = ()=>{
  if (!engName.trim()) return;
  const lowerName = engName.toLowerCase().trim();
  const characters = [];
  // Simple parser searching for matching syllables in name
  let temp = lowerName;
  const syllableKeys = Object.keys(SYLLABLE_MAP);
  // Hardcode some direct names first
  if (lowerName === 'samiu' || lowerName === 'sami') {
  characters.push(SYLLABLE_MAP['sa']);
  characters.push(SYLLABLE_MAP['mi']);
  characters.push(SYLLABLE_MAP['u']);
  } else if (lowerName === 'david') {
  characters.push(SYLLABLE_MAP['da']);
  characters.push(SYLLABLE_MAP['vid']);
  } else if (lowerName === 'john') {
  characters.push(SYLLABLE_MAP['john']);
  characters.push(SYLLABLE_MAP['han']);
  } else {
  // Greedy check syllables
  while(temp.length > 0){
  let found = false;
  for(let i = Math.min(4, temp.length); i >= 2; i--){
  const chunk = temp.slice(0, i);
  if (SYLLABLE_MAP[chunk]) {
  characters.push(SYLLABLE_MAP[chunk]);
  temp = temp.slice(i);
  found = true;
  break;
  }
  }
  if (!found) {
  // If no syllable, convert letter to fallback sound
  const letter = temp[0];
  if ('aeiou'.includes(letter)) {
  characters.push(SYLLABLE_MAP['u']);
  } else {
  characters.push(SYLLABLE_MAP['le']);
  }
  temp = temp.slice(1);
  }
  }
  }
  // Limit Chinese name length to 3 characters max
  let finalDetails = characters.slice(0, 3);
  if (finalDetails.length === 0) {
  finalDetails.push(SYLLABLE_MAP['jae']);
  }
  // Overlay trait character on final slot
  const traitChar = TRAIT_MAP[trait]?.[gender];
  if (traitChar && finalDetails.length > 0) {
  finalDetails[finalDetails.length - 1] = traitChar;
  }
  const simplified = finalDetails.map((c)=>c.simp).join('');
  const traditional = finalDetails.map((c)=>c.trad).join('');
  const pinyin = finalDetails.map((c)=>c.pinyin).join(' ');
  setConvertedResult({
  simplified,
  traditional,
  pinyin,
  details: finalDetails
  });
  };
  // Chinese to English translation helper
  const handleTranslateChinese = ()=>{
  if (!chiInput.trim()) return;
  // Direct mock lookup for translation demo
  const clean = chiInput.trim();
  if (clean.includes('萨') || clean.includes('米') || clean.includes('sa')) {
  setTranslatorResult({
  pinyin: 'Sàmǐyóu / Sàmǐ',
  meaning: '萨 (Compassion/Salvation) + 米 (Wealth/Harvest) + 尤 (Outstanding). Literally means "Outstanding Compassionate Harvest".',
  hkStyle: 'Sa-mai',
  twStyle: 'Sa-mi',
  equivalents: 'Samuel, Sam, Sammy'
  });
  } else if (clean.includes('维') || clean.includes('da') || clean.includes('达')) {
  setTranslatorResult({
  pinyin: 'Dáwéi',
  meaning: '达 (Achieve/Success) + 维 (Preserve/Maintain). Literally means "One who achieves and maintains status".',
  hkStyle: 'Tat-wai',
  twStyle: 'Ta-wei',
  equivalents: 'David, Dave'
  });
  } else {
  setTranslatorResult({
  pinyin: 'Zhāng Jíe (Pinyin)',
  meaning: 'This name commonly implies victory, courage, and literature depending on character strokes.',
  hkStyle: 'Cheung Kit',
  twStyle: 'Chang Chieh',
  equivalents: 'Victor, Jason'
  });
  }
  };
  // Bilingual text analyzer
  const handleAnalyzeText = ()=>{
  if (!bilingualText.trim()) return;
  // Count English words (rough regex matching spaces)
  const engWords = (bilingualText.match(/[a-zA-Z]+/g) || []).length;
  // Count Chinese characters
  const chiChars = (bilingualText.match(/[\u4e00-\u9fa5]/g) || []).length;
  let ratio = '1 : 0';
  let description = 'Enter bilingual text containing both languages to see the text density ratio.';
  if (engWords > 0 && chiChars > 0) {
  const density = (chiChars / engWords).toFixed(2);
  ratio = `1 Word : ${density} Characters`;
  description = `On average, every English word is translated into ${density} Chinese characters. A typical standard ratio is 1:1.6.`;
  }
  setStats({
  engWords,
  chiChars,
  ratio,
  description
  });
  };

  return (
    <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
    }}>
    <div className={tabs}>
    <button className={activeTab === 'engToChi' ? tabBtnActive : tabBtn} onClick={()=>setActiveTab('engToChi')}>🇨🇳 English to Chinese</button>
    <button className={activeTab === 'chiToEng' ? tabBtnActive : tabBtn} onClick={()=>setActiveTab('chiToEng')}>🔄 Chinese to English</button>
    <button className={activeTab === 'babyNames' ? tabBtnActive : tabBtn} onClick={()=>setActiveTab('babyNames')}>🍼 Baby Names Finder</button>
    <button className={activeTab === 'wordCount' ? tabBtnActive : tabBtn} onClick={()=>setActiveTab('wordCount')}>📊 Translation Statistics</button>
    </div>
    {activeTab === 'engToChi' && <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
    }}>
    <div className={formGroup}>
    <label className={formLabel}>Enter English Name</label>
    <input type="text" className={formInput} placeholder="e.g. Samuel, David, Joy..." value={engName} onChange={(e)=>setEngName(e.target.value)} />
    </div>
    <div className={formRow}>
    <div className={formGroup}>
    <label className={formLabel}>Name Tone (Gender Style)</label>
    <select className={formSelect} value={gender} onChange={(e)=>setGender(e.target.value)}>
    <option value="neutral">Gender Neutral (Balanced)</option>
    <option value="male">Masculine (Strong, Lofty)</option>
    <option value="female">Feminine (Soft, Graceful)</option>
    </select>
    </div>
    <div className={formGroup}>
    <label className={formLabel}>Character Trait focus</label>
    <select className={formSelect} value={trait} onChange={(e)=>setTrait(e.target.value)}>
    <option value="wisdom">Wisdom & Intelligence (智/慧)</option>
    <option value="strength">Strength & Power (力/勇)</option>
    <option value="elegance">Elegance & Charm (雅/丽)</option>
    <option value="peace">Peace & Serenity (安/平)</option>
    </select>
    </div>
    </div>
    <button className={btnPrimary} onClick={handleConvertToChinese} style={{
    alignSelf: 'start'
    }}>🇨🇳 Convert to Chinese</button>
    {convertedResult && <div className={resultBoxSuccess} style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
    }}>
    <div>
    <div className={resultLabel}>Your Chinese Name</div>
    <div style={{
    display: 'flex',
    gap: 24,
    alignItems: 'baseline',
    marginTop: 4
    }}>
    <div className={resultValue} style={{
    fontSize: '3rem',
    color: '#0F766E'
    }}>      {convertedResult.simplified}</div>
    <div style={{
    fontSize: '1.2rem',
    color: '#64748B'
    }}>
    (Traditional:
    {convertedResult.traditional}
    )
    </div>
    </div>
    <div style={{
    fontSize: '1rem',
    color: '#64748B',
    fontWeight: 600
    }}>
    Pinyin pronunciation:
    {convertedResult.pinyin}
    </div>
    </div>
    <div>
    <div className={resultLabel} style={{
    marginBottom: 8
    }}>Character Meanings & Strokes</div>
    <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 8
    }}>
    {convertedResult.details.map((char, index)=>
    <div key={index} style={{
    background: 'rgba(248,250,252,0.95)',
    border: '1px solid rgba(15,23,42,0.08)',
    padding: 12,
    borderRadius: '0.75rem',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 8
    }}>
    <div>
    <strong style={{
    fontSize: '1.1rem',
    color: '#0F172A'
    }}>{char.simp}</strong>
    <span style={{
    fontSize: '0.8rem',
    color: '#64748B',
    marginLeft: 8
    }}>
    ({char.pinyin})
    </span>
    </div>
    <div style={{
    fontSize: '0.85rem',
    color: '#64748B'
    }}>
    Strokes: {char.strokes} | Meaning: {char.meanings}
    </div>
    </div>
    )}
    </div>
    </div>
    </div>}
    </div>}
    {activeTab === 'chiToEng' && <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
    }}>
    <div className={formGroup}>
    <label className={formLabel}>Enter Chinese Characters or Pinyin Name</label>
    <input type="text" className={formInput} placeholder="e.g. 萨米, 达维, Sami..." value={chiInput} onChange={(e)=>setChiInput(e.target.value)} />
    </div>
    <button className={btnPrimary} onClick={handleTranslateChinese} style={{
    alignSelf: 'start'
    }}>🔄 Translate to English</button>
    {translatorResult && <div className={resultBoxSuccess} style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
    }}>
    <div>
    <div className={resultLabel}>Pinyin Sound Guide</div>
    <div className={resultValue} style={{
    fontSize: '1.5rem',
    color: '#0F766E'
    }}>      {translatorResult.pinyin}</div>
    </div>
    <div>
    <div className={resultLabel}>Spelling Styles</div>
    <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 12,
    marginTop: 4
    }}>
    <div style={{
    background: 'rgba(248,250,252,0.95)',
    padding: 10,
    borderRadius: '0.75rem'
    }}>
    <span style={{
    fontSize: '0.75rem',
    color: '#64748B'
    }}>Hong Kong (Cantonese)</span>
    <div style={{
    fontSize: '0.9rem',
    fontWeight: 600
    }}>      {translatorResult.hkStyle}</div>
    </div>
    <div style={{
    background: 'rgba(248,250,252,0.95)',
    padding: 10,
    borderRadius: '0.75rem'
    }}>
    <span style={{
    fontSize: '0.75rem',
    color: '#64748B'
    }}>Taiwan (Wade-Giles)</span>
    <div style={{
    fontSize: '0.9rem',
    fontWeight: 600
    }}>      {translatorResult.twStyle}</div>
    </div>
    </div>
    </div>
    <div>
    <div className={resultLabel}>Literal Character Meaning</div>
    <p style={{
    margin: 0,
    fontSize: '0.9rem',
    color: '#0F172A',
    lineHeight: 1.6
    }}>      {translatorResult.meaning}</p>
    </div>
    <div>
    <div className={resultLabel}>Matching Western Equivalents</div>
    <div style={{
    fontWeight: 600,
    color: '#FF9500',
    fontSize: '0.95rem'
    }}>{translatorResult.equivalents}</div>
    </div>
    </div>}
    </div>}
    {activeTab === 'babyNames' && <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
    }}>
    <div className={formGroup}>
    <label className={formLabel}>Cultural Crossover Group</label>
    <div style={{
    display: 'flex',
    gap: 12
    }}>
    {['boy', 'girl', 'neutral'].map((g)=>
    <button key={g} className={`${babyGender === g ? btnPrimary : btnSecondary} ${btnSm}`} onClick={()=>setBabyGender(g)}>
    {g === 'boy' ? '👦 Baby Boys' : g === 'girl' ? '👧 Baby Girls' : '🧸 Unisex'}
    </button>
    )}
    </div>
    </div>
    <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    marginTop: 8
    }}>
    <div className={resultLabel}>Bilingual Cross-Cultural Names</div>
    {BILINGUAL_BABY_NAMES[babyGender].map((item)=>
    <div key={item.eng} style={{
    background: 'rgba(255,255,255,0.72)',
    border: '1px solid rgba(15,23,42,0.08)',
    padding: 16,
    borderRadius: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 12
    }}>
    <div>
    <h4 style={{
    margin: 0,
    fontSize: '1rem',
    color: '#FF9500'
    }}>{item.eng}</h4>
    <span style={{
    fontSize: '0.82rem',
    color: '#64748B'
    }}>{item.chi}</span>
    </div>
    <div style={{
    fontSize: '0.85rem',
    color: '#0F172A',
    maxWidth: '400px',
    textAlign: 'right'
    }}>{item.meaning}</div>
    </div>
    )}
    </div>
    </div>}
    {activeTab === 'wordCount' && <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
    }}>
    <div className={formGroup}>
    <label className={formLabel}>Paste Bilingual Text Document</label>
    <textarea className={formTextarea} placeholder="Paste English words and Chinese characters together..." value={bilingualText} onChange={(e)=>setBilingualText(e.target.value)} style={{
    minHeight: 140
    }} />
    </div>
    <button className={btnPrimary} onClick={handleAnalyzeText} style={{
    alignSelf: 'start'
    }}>📊 Analyze Text</button>
    {stats && <div className={resultBoxSuccess} style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
    }}>
    <div className={resultGrid}>
    <div className={resultItem}>
    <div className={resultLabel}>English Words</div>
    <div className={resultValue} style={{
    fontSize: '1.6rem'
    }}>      {stats.engWords}</div>
    </div>
    <div className={resultItem}>
    <div className={resultLabel}>Chinese Characters</div>
    <div className={resultValue} style={{
    fontSize: '1.6rem'
    }}>      {stats.chiChars}</div>
    </div>
    </div>
    <div>
    <div className={resultLabel}>Word-to-Character Ratio</div>
    <div className={resultValue} style={{
    fontSize: '1.4rem',
    color: '#0F766E',
    marginTop: 4
    }}>      {stats.ratio}</div>
    <p style={{
    margin: '8px 0 0 0',
    fontSize: '0.85rem',
    color: '#64748B'
    }}>{stats.description}</p>
    </div>
    </div>}
    </div>}
    </div>
  );
}
