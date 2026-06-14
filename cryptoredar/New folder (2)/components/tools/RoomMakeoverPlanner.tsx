// @ts-nocheck
'use client';

const STYLE_THEMES = {
    goth: {
        name: 'Modern Goth & Dark Academia 🖤',
        description: 'Moody, dramatic spaces featuring deep blacks, dark purples, charcoal, and warm accents.',
        colors: [
            {
                name: 'Obsidian Black',
                hex: '#1A1A1A'
            },
            {
                name: 'Charcoal Grey',
                hex: '#363636'
            },
            {
                name: 'Midnight Purple',
                hex: '#2E1A47'
            },
            {
                name: 'Crimson Blood',
                hex: '#660000'
            }
        ]
    },
    boho: {
        name: 'Cozy Boho & Terracotta 🌿',
        description: 'Earth-toned, natural aesthetics focusing on warmth, plants, and cozy wood elements.',
        colors: [
            {
                name: 'Terracotta',
                hex: '#C27D5E'
            },
            {
                name: 'Sand Beige',
                hex: '#D2B48C'
            },
            {
                name: 'Sage Green',
                hex: '#606C38'
            },
            {
                name: 'Warm Cream',
                hex: '#F5F3E7'
            }
        ]
    },
    minimalist: {
        name: 'Warm Minimalist & Oak 🪵',
        description: 'Clean lines, uncluttered surfaces, focus on timber, light grey, and neutral tones.',
        colors: [
            {
                name: 'Plain Chalk',
                hex: '#F9F9F9'
            },
            {
                name: 'Soft Pebble',
                hex: '#DCDCDC'
            },
            {
                name: 'Warm Oak',
                hex: '#9F8170'
            },
            {
                name: 'Muted Clay',
                hex: '#B8A18F'
            }
        ]
    },
    vanilla: {
        name: 'Vanilla Girl & Warm Cream 🍦',
        description: 'Ultra-cozy, aesthetic beige and cream layouts highlighting light woods and soft wools.',
        colors: [
            {
                name: 'Warm Vanilla',
                hex: '#F3E9DC'
            },
            {
                name: 'Oatmeal',
                hex: '#E8D8C8'
            },
            {
                name: 'Soft Gold',
                hex: '#E2C799'
            },
            {
                name: 'Pearly White',
                hex: '#FFFDF9'
            }
        ]
    },
    hellokitty: {
        name: 'Aesthetic Pink & Hello Kitty 🎀',
        description: 'Fun, bright pastel layouts built around sweet pinks and marshmallow whites.',
        colors: [
            {
                name: 'Bubblegum Pink',
                hex: '#FFB6C1'
            },
            {
                name: 'Candy Pink',
                hex: '#FF69B4'
            },
            {
                name: 'Cherry Red',
                hex: '#D2143A'
            },
            {
                name: 'Marshmallow Cream',
                hex: '#FFF5EE'
            }
        ]
    }
};

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { btnPrimary, btnSecondary, btnSm, formGroup, formInput, formLabel, formRow, formSelect, resultBoxSuccess, resultLabel, resultValue, tabBtn, tabBtnActive, tabs } from '@/lib/ui-classes';

export default function RoomMakeoverPlanner() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState('estimator');
  // Estimator States
  const [roomType, setRoomType] = useState('bedroom');
  const [width, setWidth] = useState(12);
  const [length, setLength] = useState(14);
  const [height, setHeight] = useState(9);
  const [coats, setCoats] = useState(2);
  const [flooring, setFlooring] = useState('hardwood');
  const [furniturePkg, setFurniturePkg] = useState('standard');
  const [lighting, setLighting] = useState('recessed');
  // Visualizer States
  const [activeTheme, setActiveTheme] = useState('boho');
  const [selectedPaintColor, setSelectedPaintColor] = useState('#C27D5E');
  // Custom colors for SVG elements
  const [wallColor, setWallColor] = useState('#D2B48C');
  const [accentWallColor, setAccentWallColor] = useState('#C27D5E');
  const [floorColor, setFloorColor] = useState('#8B5A2B');
  const [bedColor, setBedColor] = useState('#F5F3E7');
  const [activePaintTarget, setActivePaintTarget] = useState('accent');
  // Handle routing pre-selection logic based on URL slug
  useEffect(()=>{
  if (!pathname) return;
  const slug = pathname.split('/').pop();
  if (slug) {
  if (slug.includes('goth-room')) {
  setActiveTheme('goth');
  setSelectedPaintColor('#1A1A1A');
  setAccentWallColor('#1A1A1A');
  setWallColor('#363636');
  setFloorColor('#2E1A47');
  setActiveTab('visualizer');
  } else if (slug.includes('teen-girl-room')) {
  setActiveTheme('hellokitty');
  setSelectedPaintColor('#FFB6C1');
  setAccentWallColor('#FFB6C1');
  setWallColor('#FFF5EE');
  setFloorColor('#E8D8C8');
  setActiveTab('visualizer');
  } else if (slug.includes('budget-calculator')) {
  setActiveTab('estimator');
  }
  }
  }, [
  pathname
  ]);
  // Calculations
  const wallArea = 2 * (width + length) * height;
  const paintGallonsNeeded = Math.ceil(wallArea / 350 * coats);
  const paintCost = paintGallonsNeeded * 45; // $45/gallon
  const floorArea = width * length;
  const flooringCost = floorArea * (flooring === 'carpet' ? 4 : flooring === 'hardwood' ? 10 : 8);
  const lightingCost = lighting === 'basic' ? 150 : lighting === 'recessed' ? 600 : 1200;
  const furnitureCost = furniturePkg === 'budget' ? 800 : furniturePkg === 'standard' ? 2200 : 5500;
  const totalCost = paintCost + flooringCost + lightingCost + furnitureCost;
  // Apply selected paint color to SVG parts
  const applyPaint = (target)=>{
  if (target === 'wall') setWallColor(selectedPaintColor);
  if (target === 'accent') setAccentWallColor(selectedPaintColor);
  if (target === 'floor') setFloorColor(selectedPaintColor);
  if (target === 'bed') setBedColor(selectedPaintColor);
  };

  return (
    <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
    }}>
    <div className={tabs}>
    <button className={activeTab === 'estimator' ? tabBtnActive : tabBtn} onClick={()=>setActiveTab('estimator')}>💰 Cost & Paint Estimator</button>
    <button className={activeTab === 'visualizer' ? tabBtnActive : tabBtn} onClick={()=>setActiveTab('visualizer')}>🎨 Color Board Visualizer</button>
    <button className={activeTab === 'schedule' ? tabBtnActive : tabBtn} onClick={()=>setActiveTab('schedule')}>📅 7-Day Project Schedule</button>
    </div>
    <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
    }}>
    <div className={formRow}>
    <div className={formGroup}>
    <label className={formLabel}>Room Type</label>
    <select className={formSelect} value={roomType} onChange={(e)=>setRoomType(e.target.value)}>
    <option value="bedroom">Bedroom</option>
    <option value="living">Living Room</option>
    <option value="kitchen">Kitchen</option>
    <option value="bathroom">Bathroom</option>
    <option value="yard">Yard/Balcony</option>
    </select>
    </div>
    <div className={formGroup}>
    <label className={formLabel}>Wall Height (feet)</label>
    <input type="number" className={formInput} value={height} onChange={(e)=>setHeight(Number(e.target.value))} />
    </div>
    </div>
    <div className={formRow}>
    <div className={formGroup}>
    <label className={formLabel}>Room Width (feet)</label>
    <input type="number" className={formInput} value={width} onChange={(e)=>setWidth(Number(e.target.value))} />
    </div>
    <div className={formGroup}>
    <label className={formLabel}>Room Length (feet)</label>
    <input type="number" className={formInput} value={length} onChange={(e)=>setLength(Number(e.target.value))} />
    </div>
    </div>
    <div className={formRow}>
    <div className={formGroup}>
    <label className={formLabel}>Paint Coats</label>
    <select className={formSelect} value={coats} onChange={(e)=>setCoats(Number(e.target.value))}>
    <option value={1}>1 Coat (Touch-up)</option>
    <option value={2}>2 Coats (Full Finish)</option>
    </select>
    </div>
    <div className={formGroup}>
    <label className={formLabel}>Flooring Type</label>
    <select className={formSelect} value={flooring} onChange={(e)=>setFlooring(e.target.value)}>
    <option value="carpet">Carpet ($4/sqft)</option>
    <option value="tile">Tile ($8/sqft)</option>
    <option value="hardwood">Hardwood ($10/sqft)</option>
    </select>
    </div>
    </div>
    <div className={formRow}>
    <div className={formGroup}>
    <label className={formLabel}>Furniture Styling Package</label>
    <select className={formSelect} value={furniturePkg} onChange={(e)=>setFurniturePkg(e.target.value)}>
    <option value="budget">Budget DIY ($800)</option>
    <option value="standard">Standard Designer ($2,200)</option>
    <option value="luxury">Luxury Custom ($5,500)</option>
    </select>
    </div>
    <div className={formGroup}>
    <label className={formLabel}>Lighting System</label>
    <select className={formSelect} value={lighting} onChange={(e)=>setLighting(e.target.value)}>
    <option value="basic">Standard Fixture ($150)</option>
    <option value="recessed">Recessed Spots ($600)</option>
    <option value="luxury">Designer Chandelier ($1,200)</option>
    </select>
    </div>
    </div>
    <div className={resultBoxSuccess} style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
    }}>
    <div>
    <div className={resultLabel}>Total Estimated Makeover Budget</div>
    <div className={resultValue} style={{
    color: '#0F766E',
    fontSize: '2.5rem'
    }}>
    $
    {totalCost.toLocaleString()}
    </div>
    </div>
    <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
    gap: 12
    }}>
    <div style={{
    background: 'rgba(248,250,252,0.95)',
    padding: 12,
    borderRadius: '0.75rem'
    }}>
    <span className={resultLabel} style={{
    display: 'block',
    fontSize: '0.7rem'
    }}>
    Paint (
    {paintGallonsNeeded}
    gal)
    </span>
    <span style={{
    fontSize: '1rem',
    fontWeight: 600
    }}>
    $
    {paintCost}
    </span>
    </div>
    <div style={{
    background: 'rgba(248,250,252,0.95)',
    padding: 12,
    borderRadius: '0.75rem'
    }}>
    <span className={resultLabel} style={{
    display: 'block',
    fontSize: '0.7rem'
    }}>
    Flooring (
    {floorArea}
    sqft)
    </span>
    <span style={{
    fontSize: '1rem',
    fontWeight: 600
    }}>
    $
    {flooringCost}
    </span>
    </div>
    <div style={{
    background: 'rgba(248,250,252,0.95)',
    padding: 12,
    borderRadius: '0.75rem'
    }}>
    <span className={resultLabel} style={{
    display: 'block',
    fontSize: '0.7rem'
    }}>Lighting</span>
    <span style={{
    fontSize: '1rem',
    fontWeight: 600
    }}>
    $
    {lightingCost}
    </span>
    </div>
    <div style={{
    background: 'rgba(248,250,252,0.95)',
    padding: 12,
    borderRadius: '0.75rem'
    }}>
    <span className={resultLabel} style={{
    display: 'block',
    fontSize: '0.7rem'
    }}>Furniture</span>
    <span style={{
    fontSize: '1rem',
    fontWeight: 600
    }}>
    $
    {furnitureCost}
    </span>
    </div>
    </div>
    </div>
    </div>
    <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
    }}>
    <div className={formGroup}>
    <label className={formLabel}>Select Room Aesthetic</label>
    <div style={{
    display: 'flex',
    gap: 8,
    flexWrap: 'wrap'
    }}>
    {Object.keys(STYLE_THEMES).map((themeKey) => (
    <button key={themeKey} className={`${activeTheme === themeKey ? btnPrimary : btnSecondary} ${btnSm}`} onClick={()=>{
    setActiveTheme(themeKey);
    setSelectedPaintColor(STYLE_THEMES[themeKey].colors[0].hex);
    }}>{themeKey.toUpperCase()}</button>
    ))}
    </div>
    </div>
    <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr 280px',
    gap: 24,
    alignItems: 'start'
    }} className={formRow}>
    <div style={{
    background: '#0B101D',
    border: '1px solid rgba(15,23,42,0.08)',
    borderRadius: '1.25rem',
    padding: 16,
    display: 'flex',
    justifyContent: 'center'
    }}>
    <svg width="100%" height="240" viewBox="0 0 400 240" style={{
    maxWidth: '400px'
    }}>
    <polygon points="80,40 320,40 320,180 80,180" fill={accentWallColor} stroke="rgba(0,0,0,0.3)" strokeWidth="2" cursor="pointer" onClick={()=>applyPaint('accent')} />
    <polygon points="0,0 80,40 80,180 0,220" fill={wallColor} stroke="rgba(0,0,0,0.3)" strokeWidth="2" cursor="pointer" onClick={()=>applyPaint('wall')} />
    <polygon points="320,40 400,0 400,220 320,180" fill={wallColor} stroke="rgba(0,0,0,0.3)" strokeWidth="2" cursor="pointer" onClick={()=>applyPaint('wall')} />
    <polygon points="0,0 400,0 320,40 80,40" fill="#FFF" opacity="0.9" stroke="rgba(0,0,0,0.3)" strokeWidth="2" />
    <polygon points="0,220 80,180 320,180 400,220" fill={floorColor} stroke="rgba(0,0,0,0.3)" strokeWidth="2" cursor="pointer" onClick={()=>applyPaint('floor')} />
    <rect x="140" y="120" width="120" height="50" rx="6" fill={bedColor} stroke="rgba(0,0,0,0.4)" strokeWidth="2" cursor="pointer" onClick={()=>applyPaint('bed')} />
    <rect x="155" y="125" width="40" height="15" rx="3" fill="#FFF" opacity="0.8" />
    <rect x="205" y="125" width="40" height="15" rx="3" fill="#FFF" opacity="0.8" />
    <text x="15" y="105" fill="#FFF" fontSize="10" pointerEvents="none">Side Wall</text>
    <text x="160" y="95" fill="#FFF" fontSize="10" pointerEvents="none">Accent Wall</text>
    <text x="180" y="150" fill="#000" fontSize="10" pointerEvents="none">Bed</text>
    <text x="45" y="200" fill="#FFF" fontSize="10" pointerEvents="none">Floor</text>
    </svg>
    </div>
    <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
    }}>
    <div>
    <h4 style={{
    margin: 0,
    fontSize: '0.9rem',
    color: '#FF9500'
    }}>      {STYLE_THEMES[activeTheme].name}</h4>
    <p style={{
    fontSize: '0.75rem',
    margin: '4px 0 0 0',
    lineHeight: 1.4
    }}>      {STYLE_THEMES[activeTheme].description}</p>
    </div>
    <div>
    <div className={resultLabel} style={{
    marginBottom: 6
    }}>1. Pick Color from Palette</div>
    <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 8
    }}>
    {STYLE_THEMES[activeTheme].colors.map((color) => (
    <button key={color.hex} style={{
    backgroundColor: color.hex,
    height: 38,
    borderRadius: '0.75rem',
    border: selectedPaintColor === color.hex ? '3px solid #FF9500' : '1px solid rgba(15,23,42,0.08)',
    cursor: 'pointer'
    }} title={color.name} onClick={()=>setSelectedPaintColor(color.hex)} />
    ))}
    </div>
    </div>
    <div>
    <div className={resultLabel} style={{
    marginBottom: 6
    }}>2. Select Target & Paint</div>
    <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 8
    }}>
    {[
    { key: 'accent', label: 'Accent Wall' },
    { key: 'wall', label: 'Side Wall' },
    { key: 'floor', label: 'Floor' },
    { key: 'bed', label: 'Bed/Furniture' }
    ].map((target) => (
    <button key={target.key} className={`${activePaintTarget === target.key ? btnPrimary : btnSecondary} ${btnSm}`} onClick={()=>{
    setActivePaintTarget(target.key);
    applyPaint(target.key);
    }} style={{
    fontSize: '0.75rem',
    padding: '6px'
    }}>
    🖌️ {target.label}
    </button>
    ))}
    </div>
    </div>
    </div>
    </div>
    </div>
    <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
    }}>
    <div className={resultLabel}>7-Day Renovation Schedule</div>
    <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
    }}>
    {[
    { day: 'Day 1', task: 'Prep & Clean-up', desc: 'Clear all furniture from the room. Tape baseboards, cover floor boards, and sand down cracks.' },
    { day: 'Day 2', task: 'Wall Priming', desc: 'Apply a single uniform coat of primer paint to the ceiling and walls to ensure paint sticks properly.' },
    { day: 'Day 3', task: 'First Coat of Paint', desc: `Paint the main side walls with '${wallColor}' and the main Accent Wall with '${accentWallColor}'.` },
    { day: 'Day 4', task: 'Second Coat of Paint', desc: 'Apply the second coat of paint to achieve a thick, premium finish. Clean up painting tape.' },
    { day: 'Day 5', task: 'Lighting Upgrades', desc: `Install the '${lighting}' lighting fixtures. Update switch plates to match the theme.` },
    { day: 'Day 6', task: 'Flooring Setup', desc: `Lay down the new '${flooring}' flooring or coordinate area rugs to lock in warmth.` },
    { day: 'Day 7', task: 'Style & Decorate', desc: `Move in the '${furniturePkg}' furniture and decorate with accessories matching the ${activeTheme.toUpperCase()} theme.` }
    ].map((item) => (
    <div key={item.day} style={{
    background: 'rgba(255,255,255,0.72)',
    border: '1px solid rgba(15,23,42,0.08)',
    padding: 16,
    borderRadius: '1rem',
    display: 'flex',
    gap: 16,
    alignItems: 'flex-start'
    }}>
    <div style={{
    background: 'rgba(15,118,110,0.1)',
    color: '#0F766E',
    fontWeight: 700,
    padding: '4px 10px',
    borderRadius: '0.75rem',
    fontSize: '0.75rem',
    whiteSpace: 'nowrap'
    }}>{item.day}</div>
    <div>
    <h4 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 700 }}>{item.task}</h4>
    <p style={{ margin: '4px 0 0 0', fontSize: '0.82rem', color: '#64748B' }}>{item.desc}</p>
    </div>
    </div>
    ))}
    </div>
    </div>
    </div>
  );
}
