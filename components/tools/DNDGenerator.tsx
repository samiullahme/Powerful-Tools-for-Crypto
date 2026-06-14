// @ts-nocheck
'use client';

// ─── DATASETS ───
const RACES = [
    {
        value: 'elf',
        label: 'Elf 🧝'
    },
    {
        value: 'tiefling',
        label: 'Tiefling 😈'
    },
    {
        value: 'dragonborn',
        label: 'Dragonborn 🐉'
    },
    {
        value: 'human',
        label: 'Human 🧔'
    },
    {
        value: 'goliath',
        label: 'Goliath 🏔️'
    },
    {
        value: 'dwarf',
        label: 'Dwarf 🧔‍♂️'
    },
    {
        value: 'halfling',
        label: 'Halfling 🍀'
    },
    {
        value: 'gnome',
        label: 'Gnome 🍄'
    }
];
const CLASSES = [
    {
        value: 'wizard',
        label: 'Wizard 🧙'
    },
    {
        value: 'bard',
        label: 'Bard 🎸'
    },
    {
        value: 'fighter',
        label: 'Fighter ⚔️'
    },
    {
        value: 'rogue',
        label: 'Rogue 🗡️'
    },
    {
        value: 'cleric',
        label: 'Cleric ⛪'
    },
    {
        value: 'ranger',
        label: 'Ranger 🏹'
    },
    {
        value: 'barbarian',
        label: 'Barbarian 🪓'
    },
    {
        value: 'druid',
        label: 'Druid 🌿'
    },
    {
        value: 'monk',
        label: 'Monk 🧘'
    },
    {
        value: 'paladin',
        label: 'Paladin 🛡️'
    }
];
const GENDERS = [
    'male',
    'female',
    'neutral'
];
const ALIGNMENTS = [
    'Lawful Good',
    'Neutral Good',
    'Chaotic Good',
    'Lawful Neutral',
    'True Neutral',
    'Chaotic Neutral',
    'Lawful Evil',
    'Neutral Evil',
    'Chaotic Evil'
];
const ELF_NAMES = {
    male: [
        'Aerin',
        'Corin',
        'Elidor',
        'Haldir',
        'Legolas',
        'Thranduil',
        'Valen',
        'Feren',
        'Galon',
        'Lindir',
        'Aramil',
        'Hadran',
        'Larethian',
        'Soveliss'
    ],
    female: [
        'Arwen',
        'Galadriel',
        'Luthien',
        'Tauriel',
        'Celebrian',
        'Nimrodel',
        'Haleth',
        'Elwing',
        'Idril',
        'Yavanna',
        'Adrie',
        'Birel',
        'Keyleth',
        'Sariel'
    ],
    neutral: [
        'Ael',
        'Bryn',
        'Glyn',
        'Lien',
        'Miri',
        'Sian',
        'Val',
        'Ara',
        'Fae',
        'Rael'
    ],
    surnames: [
        'Moonwhisper',
        'Sunstrider',
        'Starflower',
        'Windrunner',
        'Greenleaf',
        'Silverbow',
        'Oakhaven',
        'Shadowwalker',
        'Brightwood',
        'Highforest'
    ]
};
const TIEFLING_NAMES = {
    male: [
        'Akmenos',
        'Barakas',
        'Damakos',
        'Morthos',
        'Therai',
        'Kyron',
        'Malakai',
        'Iados',
        'Skamos',
        'Zevon'
    ],
    female: [
        'Kallista',
        'Nemeia',
        'Orianna',
        'Phelaia',
        'Rieta',
        'Makaria',
        'Anakis',
        'Criella',
        'Lerissa',
        'Ea'
    ],
    neutral: [
        'Creed',
        'Glory',
        'Hope',
        'Sorrow',
        'Torment',
        'Mercy',
        'Patience',
        'Art',
        'Fear',
        'Poetry'
    ],
    surnames: [
        'Ash',
        'Cinder',
        'Brimstone',
        'Void',
        'Shadow',
        'Hellfire',
        'Malice',
        'Dread',
        'Grave',
        'Ruin'
    ]
};
const DRAGONBORN_NAMES = {
    male: [
        'Arjhan',
        'Balasar',
        'Bharash',
        'Donaar',
        'Ghesh',
        'Kriv',
        'Medrash',
        'Patrin',
        'Rhogar',
        'Tarhun',
        'Torinn'
    ],
    female: [
        'Akra',
        'Biri',
        'Daar',
        'Harann',
        'Kava',
        'Korinn',
        'Mishann',
        'Nala',
        'Perra',
        'Surina',
        'Uadjit'
    ],
    neutral: [
        'Bren',
        'Kro',
        'Zan',
        'Tash',
        'Kesh',
        'Ryx',
        'Vyl',
        'Dre',
        'Gax',
        'Morn'
    ],
    surnames: [
        'Clethtinthiallor',
        'Daardendrian',
        'Delmirev',
        'Drachedandrion',
        'Fenkenkabradon',
        'Kepeshkmolik',
        'Kerrhylon',
        'Kimbatuul',
        'Linxakasendalor',
        'Myastan'
    ]
};
const GOLIATH_NAMES = {
    male: [
        'Aukan',
        'Gae-Al',
        'Keothi',
        'Lo-Kag',
        'Maveith',
        'Thatham',
        'Uthal',
        'Viglaik',
        'Kavak',
        'Nalak'
    ],
    female: [
        'Ehalice',
        'Kuori',
        'Thalai',
        'Orla',
        'Gana',
        'Kari',
        'Ranya',
        'Vola',
        'Manila',
        'Punya'
    ],
    neutral: [
        'Bear',
        'Storm',
        'Rock',
        'Wind',
        'Flint',
        'Climber',
        'Hunter',
        'Falcon',
        'Talon',
        'Shield'
    ],
    surnames: [
        'Anakalathai',
        'Elanithino',
        'Gathakanathi',
        'Kalagiano',
        'Ogolakanu',
        'Thuunlakalaga',
        'Kola-Kula',
        'Vanakalga'
    ]
};
const HUMAN_NAMES = {
    male: [
        'Ragnar',
        'Torstein',
        'Bjorn',
        'Valerius',
        'Cassian',
        'Lysander',
        'Harun',
        'Tariq',
        'Zayn',
        'Alistair',
        'Arthur',
        'Cedric'
    ],
    female: [
        'Astrid',
        'Freya',
        'Sigrid',
        'Octavia',
        'Aurelia',
        'Helena',
        'Leila',
        'Yasmin',
        'Farah',
        'Guinevere',
        'Elaine',
        'Rowena'
    ],
    neutral: [
        'Robin',
        'Alex',
        'Rowan',
        'Morgan',
        'Taylor',
        'Jordan',
        'Finley',
        'Casey',
        'Peyton',
        'Jamie'
    ],
    surnames: [
        'Ironside',
        'Stonefist',
        'Stormbringer',
        'Sterling',
        'Blackwood',
        'Vane',
        'Al-Jamil',
        'Hawthorne',
        'Cromwell',
        'Fairfax'
    ]
};
const DWARF_NAMES = {
    male: [
        'Adrik',
        'Alberich',
        'Baern',
        'Brottor',
        'Bruenor',
        'Fargrim',
        'Flint',
        'Harbek',
        'Orsik',
        'Oskar',
        'Thorin'
    ],
    female: [
        'Amber',
        'Artin',
        'Audhild',
        'Dagnal',
        'Diesa',
        'Eldeth',
        'Falkrunn',
        'Finellen',
        'Gunnloda',
        'Helja'
    ],
    neutral: [
        'Brim',
        'Durn',
        'Gold',
        'Iron',
        'Mine',
        'Stone',
        'Anvil',
        'Hearth',
        'Rusty',
        'Opal'
    ],
    surnames: [
        'Balderk',
        'Battlehammer',
        'Brawnanvil',
        'Dankil',
        'Fireforge',
        'Frostbeard',
        'Holderhek',
        'Ironfist',
        'Loderr',
        'Lutgehr'
    ]
};
const FANTASY_DRINKS = [
    'Dwarven Fire Stout',
    'Elven Honeydew Mead',
    'Dragonbreath Whiskey',
    'Goblin Swamp Grog',
    'Witch\'s Midnight Brew',
    'Pixie Dust Ale',
    'Grave-Digger\'s Porter',
    'Kraken Sour Rum',
    'Starlight Cider',
    'Mountain Giant Mead'
];
const TAVERN_ADJECTIVES = [
    'Drunken',
    'Golden',
    'Rusty',
    'Wobbly',
    'Roaring',
    'Sleeping',
    'Tipsy',
    'Prancing',
    'Gilded',
    'Lonely',
    'Silver',
    'Copper',
    'Black',
    'Red',
    'Screaming',
    'Blind',
    'Lazy',
    'Hungry',
    'Merry'
];
const TAVERN_NOUNS = [
    'Dragon',
    'Pony',
    'Flagon',
    'Mug',
    'Shield',
    'Goblin',
    'Mermaid',
    'Sword',
    'Griffin',
    'Boar',
    'Anchor',
    'Bard',
    'Wizard',
    'Wolf',
    'Anvil',
    'Cask',
    'Hen',
    'Fox',
    'Crow',
    'Lantern'
];
const TAVERN_RUMORS = [
    'A local merchant is looking for mercenaries to retrieve a shipment lost in the Whispering Woods.',
    'They say the cellar of this very tavern is connected to an ancient subterranean sewer labyrinth.',
    'Every full moon, local livestock vanishes from the nearby farms. Footprints look like giant wolves.',
    'A shady figure was asking questions about a magic amulet matching the description of your wizard\'s.',
    'The local guard is taking bribes from a thief guild operation running out of the docks.',
    'An ancient temple of silver has risen from the marshlands south of the city.'
];
const LAND_ADJECTIVES = [
    'Whispering',
    'Shadowy',
    'Sunken',
    'Eldritch',
    'Forgotten',
    'Frozen',
    'Crystal',
    'Burning',
    'Starlit',
    'Stormy',
    'Crimson',
    'Emerald',
    'Silent',
    'Wailing',
    'Golden',
    'Misty',
    'Shattered'
];
const LAND_NOUNS = [
    'Valley',
    'Forest',
    'Isles',
    'Peaks',
    'Wilds',
    'Cove',
    'Reach',
    'Coast',
    'Hills',
    'Swamp',
    'Desert',
    'Plateau',
    'Glade',
    'Sands',
    'Woods',
    'Fjord',
    'Pass',
    'Ridge',
    'Archipelago'
];
const NPC_HAIR = [
    'messy grey hair',
    'a shaved head',
    'a flamboyant braided beard',
    'crimson dyed hair',
    'long neat black hair',
    'a wild auburn mane',
    'balding white curls'
];
const NPC_CLOTHES = [
    'frayed leather doublet',
    'extravagant silk robes',
    'dull steel chainmail',
    'a hooded traveler\'s cloak',
    'aristocratic velvet vest',
    'dirty blacksmith apron'
];
const NPC_QUIRKS = [
    'Always speaks in low whispers',
    'Constantly checks over their shoulder as if watched',
    'Insists on using your full titles',
    'Prone to flipping a copper coin while pondering',
    'Possesses an extremely loud and sudden laugh',
    'Frequently rubs a lucky rabbit foot key ring',
    'Speaks with an exaggerated foreign accent'
];
const NPC_SECRETS = [
    'Is secretly a spy reporting back to a rival gang.',
    'Is heavily in debt to a local goblin loan shark.',
    'Discovered a chest of wizard scrolls but doesn\'t know how to read them.',
    'Is searching for their long-lost sibling who joined an outlaw group.',
    'Is hiding their identity as a deposed noble from a foreign empire.',
    'Possesses a map showing the tomb of the ancient Crimson King.'
];

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { btnPrimary, btnSecondary, btnSm, formGroup, formLabel, formRow, formSelect, resultBoxSuccess, resultLabel, tabBtn, tabBtnActive, tabs } from '@/lib/ui-classes';

export default function DNDGenerator() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState('character');
  // Character State
  const [race, setRace] = useState('human');
  const [charClass, setCharClass] = useState('wizard');
  const [gender, setGender] = useState('male');
  const [alignment, setAlignment] = useState('Neutral Good');
  const [generatedChar, setGeneratedChar] = useState(null);
  // World State
  const [worldType, setWorldType] = useState('tavern');
  const [generatedWorld, setGeneratedWorld] = useState(null);
  // NPC State
  const [npcAlignment, setNpcAlignment] = useState('True Neutral');
  const [generatedNPC, setGeneratedNPC] = useState(null);
  // Handle routing pre-selection logic based on URL slug
  useEffect(()=>{
  if (!pathname) return;
  const slug = pathname.split('/').pop();
  if (slug) {
  if (slug.includes('dnd-elf')) {
  setRace('elf');
  setActiveTab('character');
  } else if (slug.includes('dnd-tiefling')) {
  setRace('tiefling');
  setActiveTab('character');
  } else if (slug.includes('dnd-dragonborn')) {
  setRace('dragonborn');
  setActiveTab('character');
  } else if (slug.includes('dnd-human')) {
  setRace('human');
  setActiveTab('character');
  } else if (slug.includes('dnd-goliath')) {
  setRace('goliath');
  setActiveTab('character');
  } else if (slug.includes('dnd-wizard')) {
  setCharClass('wizard');
  setActiveTab('character');
  } else if (slug.includes('dnd-bard')) {
  setCharClass('bard');
  setActiveTab('character');
  } else if (slug.includes('dnd-tavern')) {
  setActiveTab('world');
  setWorldType('tavern');
  } else if (slug.includes('npc-name')) {
  setActiveTab('npc');
  }
  }
  }, [
  pathname
  ]);
  // Generate Character Logic
  const handleGenerateCharacter = ()=>{
  let dataset = HUMAN_NAMES;
  if (race === 'elf') dataset = ELF_NAMES;
  else if (race === 'tiefling') dataset = TIEFLING_NAMES;
  else if (race === 'dragonborn') dataset = DRAGONBORN_NAMES;
  else if (race === 'goliath') dataset = GOLIATH_NAMES;
  else if (race === 'dwarf') dataset = DWARF_NAMES;
  else if (race === 'halfling' || race === 'gnome') dataset = ELF_NAMES; // Fallback helper
  const genderKey = gender;
  const firstNames = dataset[genderKey] || dataset.neutral || dataset.male;
  const surnames = dataset.surnames || [
  'Stone'
  ];
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const surname = surnames[Math.floor(Math.random() * surnames.length)];
  const fullName = `${firstName} ${surname}`;
  // Stat roll
  const rollStat = ()=>{
  const rolls = Array.from({
  length: 4
  }, ()=>Math.floor(Math.random() * 6) + 1);
  rolls.sort((a, b)=>b - a);
  return rolls[0] + rolls[1] + rolls[2]; // drop lowest
  };
  const statsStr = `STR: ${rollStat()} | DEX: ${rollStat()} | CON: ${rollStat()} | INT: ${rollStat()} | WIS: ${rollStat()} | CHA: ${rollStat()}`;
  // Procedural Backstory generator
  const motives = [
  `sought arcane knowledge to cure a curse laid upon their family`,
  `embarked on adventure after their home town was raided by goblins`,
  `was cast out of their order/guild due to a false betrayal`,
  `is searching for an ancient artifact to pay off an outstanding debt`,
  `aims to prove their worth to their family legacy by defeating a legendary dragon`
  ];
  const quirks = [
  `possesses a strange habit of muttering to themselves in ancient tongues`,
  `is extremely protective of a cracked leather book they carry`,
  `never drinks anything unless they see it poured before them`,
  `has a nervous twitch when lying`
  ];
  const motive = motives[Math.floor(Math.random() * motives.length)];
  const quirk = quirks[Math.floor(Math.random() * quirks.length)];
  const backstoryText = `${fullName} is a ${race} ${charClass} hailing from a remote borderland. Guided by a ${alignment} outlook, they first ${motive}. In battle, they are recognized by their traits and the fact they ${quirk}.`;
  setGeneratedChar({
  name: fullName,
  alignment,
  stats: statsStr,
  backstory: backstoryText
  });
  };
  // Generate World Logic
  const handleGenerateWorld = ()=>{
  if (worldType === 'tavern') {
  const adj = TAVERN_ADJECTIVES[Math.floor(Math.random() * TAVERN_ADJECTIVES.length)];
  const noun = TAVERN_NOUNS[Math.floor(Math.random() * TAVERN_NOUNS.length)];
  const drink = FANTASY_DRINKS[Math.floor(Math.random() * FANTASY_DRINKS.length)];
  const rumor = TAVERN_RUMORS[Math.floor(Math.random() * TAVERN_RUMORS.length)];
  setGeneratedWorld({
  name: `The ${adj} ${noun}`,
  description: `A warm and rowdy establishment smelling of roasted mutton and woodsmoke. Customers range from local guards to shadowy thieves.`,
  detailLabel: 'Specialty Drink & Rumour',
  detailValue: `House Specialty: ${drink}\n\nWhisper in the corner: "${rumor}"`
  });
  } else {
  const adj = LAND_ADJECTIVES[Math.floor(Math.random() * LAND_ADJECTIVES.length)];
  const noun = LAND_NOUNS[Math.floor(Math.random() * LAND_NOUNS.length)];
  setGeneratedWorld({
  name: `The ${adj} ${noun}`,
  description: `A mystical region shrouded in myth, home to forgotten dungeons, lethal monsters, and dangerous magical anomalies.`,
  detailLabel: 'Key Feature',
  detailValue: `A region known for its high elemental activity and hidden caverns where travelers rarely return.`
  });
  }
  };
  // Generate NPC Logic
  const handleGenerateNPC = ()=>{
  // Pick random base race name database
  const databases = [
  HUMAN_NAMES,
  ELF_NAMES,
  DWARF_NAMES
  ];
  const db = databases[Math.floor(Math.random() * databases.length)];
  const name = `${db.male[Math.floor(Math.random() * db.male.length)]} ${db.surnames[Math.floor(Math.random() * db.surnames.length)]}`;
  const hair = NPC_HAIR[Math.floor(Math.random() * NPC_HAIR.length)];
  const clothes = NPC_CLOTHES[Math.floor(Math.random() * NPC_CLOTHES.length)];
  const quirk = NPC_QUIRKS[Math.floor(Math.random() * NPC_QUIRKS.length)];
  const secret = NPC_SECRETS[Math.floor(Math.random() * NPC_SECRETS.length)];
  setGeneratedNPC({
  name,
  description: `A ${npcAlignment} NPC with ${hair}, wearing a ${clothes}.`,
  quirk,
  secret
  });
  };

  return (
    <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
    }}>
    <div className={tabs}>
    <button className={activeTab === 'character' ? tabBtnActive : tabBtn} onClick={()=>setActiveTab('character')}>🎭 Character Generator</button>
    <button className={activeTab === 'world' ? tabBtnActive : tabBtn} onClick={()=>setActiveTab('world')}>🏰 World / Location</button>
    <button className={activeTab === 'npc' ? tabBtnActive : tabBtn} onClick={()=>setActiveTab('npc')}>👥 NPC & Villain</button>
    </div>
    {activeTab === 'character' && <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
    }}>
    <div className={formRow}>
    <div className={formGroup}>
    <label className={formLabel}>Character Race</label>
    <select className={formSelect} value={race} onChange={(e)=>setRace(e.target.value)}>
    {RACES.map((r)=><option key={r.value} value={r.value}>{r.label}</option>)}
    </select>
    </div>
    <div className={formGroup}>
    <label className={formLabel}>Character Class</label>
    <select className={formSelect} value={charClass} onChange={(e)=>setCharClass(e.target.value)}>
    {CLASSES.map((c)=><option key={c.value} value={c.value}>{c.label}</option>)}
    </select>
    </div>
    </div>
    <div className={formRow}>
    <div className={formGroup}>
    <label className={formLabel}>Gender Selection</label>
    <select className={formSelect} value={gender} onChange={(e)=>setGender(e.target.value)}>
    {GENDERS.map((g)=><option key={g} value={g}>{g.charAt(0).toUpperCase() + g.slice(1)}</option>)}
    </select>
    </div>
    <div className={formGroup}>
    <label className={formLabel}>Alignment</label>
    <select className={formSelect} value={alignment} onChange={(e)=>setAlignment(e.target.value)}>
    {ALIGNMENTS.map((a)=><option key={a} value={a}>{a}</option>)}
    </select>
    </div>
    </div>
    <button className={btnPrimary} onClick={handleGenerateCharacter} style={{
    alignSelf: 'start'
    }}>🎲 Generate Character</button>
    {generatedChar && <div className={resultBoxSuccess}>
    <h3 style={{
    fontSize: '1.2rem',
    marginBottom: 8,
    color: '#FF9500',
    fontWeight: 800
    }}>      {generatedChar.name}</h3>
    <div style={{
    fontSize: '0.8rem',
    color: '#64748B',
    marginBottom: 12
    }}>
    {generatedChar.alignment}
    ·
    {race.toUpperCase()}
    
    {charClass.toUpperCase()}
    </div>
    <div style={{
    background: 'rgba(248,250,252,0.95)',
    border: '1px solid rgba(15,23,42,0.08)',
    padding: 10,
    borderRadius: '0.75rem',
    fontFamily: 'monospace',
    fontSize: '0.85rem',
    marginBottom: 12
    }}>      {generatedChar.stats}</div>
    <p style={{
    margin: 0,
    fontSize: '0.9rem',
    color: '#0F172A',
    lineHeight: 1.6
    }}>{generatedChar.backstory}</p>
    </div>}
    </div>}
    {activeTab === 'world' && <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
    }}>
    <div className={formGroup}>
    <label className={formLabel}>Location Type</label>
    <div style={{
    display: 'flex',
    gap: 12
    }}>
    <button className={`${worldType === 'tavern' ? btnPrimary : btnSecondary} ${btnSm}`} onClick={()=>setWorldType('tavern')}>🍺 Tavern / Inn</button>
    <button className={`${worldType === 'location' ? btnPrimary : btnSecondary} ${btnSm}`} onClick={()=>setWorldType('location')}>🗺️ Wilds & Lands</button>
    </div>
    </div>
    <button className={btnPrimary} onClick={handleGenerateWorld} style={{
    alignSelf: 'start'
    }}>🗺️ Generate Location</button>
    {generatedWorld && <div className={resultBoxSuccess}>
    <h3 style={{
    fontSize: '1.2rem',
    marginBottom: 8,
    color: '#FF9500',
    fontWeight: 800
    }}>      {generatedWorld.name}</h3>
    <p style={{
    fontSize: '0.9rem',
    marginBottom: 16
    }}>      {generatedWorld.description}</p>
    <div className={resultLabel}>      {generatedWorld.detailLabel}</div>
    <pre style={{
    background: 'rgba(248,250,252,0.95)',
    border: '1px solid rgba(15,23,42,0.08)',
    padding: 12,
    borderRadius: '0.75rem',
    whiteSpace: 'pre-wrap',
    fontFamily: 'inherit',
    fontSize: '0.85rem',
    color: '#0F172A'
    }}>{generatedWorld.detailValue}</pre>
    </div>}
    </div>}
    {activeTab === 'npc' && <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
    }}>
    <div className={formGroup}>
    <label className={formLabel}>NPC Alignment</label>
    <select className={formSelect} value={npcAlignment} onChange={(e)=>setNpcAlignment(e.target.value)}>
    {ALIGNMENTS.map((a)=><option key={a} value={a}>{a}</option>)}
    </select>
    </div>
    <button className={btnPrimary} onClick={handleGenerateNPC} style={{
    alignSelf: 'start'
    }}>👥 Generate NPC</button>
    {generatedNPC && <div className={resultBoxSuccess}>
    <h3 style={{
    fontSize: '1.2rem',
    marginBottom: 8,
    color: '#FF9500',
    fontWeight: 800
    }}>      {generatedNPC.name}</h3>
    <p style={{
    fontSize: '0.9rem',
    marginBottom: 12
    }}>      {generatedNPC.description}</p>
    <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 8
    }}>
    <div>
    <span className={resultLabel} style={{
    display: 'block',
    marginBottom: 2
    }}>Personality Quirk</span>
    <span style={{
    fontSize: '0.9rem',
    color: '#0F172A'
    }}>      {generatedNPC.quirk}</span>
    </div>
    <div style={{
    marginTop: 6
    }}>
    <span className={resultLabel} style={{
    display: 'block',
    marginBottom: 2,
    color: '#EF4444'
    }}>Secret/Motive</span>
    <span style={{
    fontSize: '0.9rem',
    color: '#0F172A'
    }}>{generatedNPC.secret}</span>
    </div>
    </div>
    </div>}
    </div>}
    </div>
  );
}
