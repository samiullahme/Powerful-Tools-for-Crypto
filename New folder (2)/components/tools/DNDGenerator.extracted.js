function DNDGenerator() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('character');
    // Character State
    const [race, setRace] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('human');
    const [charClass, setCharClass] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('wizard');
    const [gender, setGender] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('male');
    const [alignment, setAlignment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Neutral Good');
    const [generatedChar, setGeneratedChar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // World State
    const [worldType, setWorldType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('tavern');
    const [generatedWorld, setGeneratedWorld] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // NPC State
    const [npcAlignment, setNpcAlignment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('True Neutral');
    const [generatedNPC, setGeneratedNPC] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Handle routing pre-selection logic based on URL slug
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DNDGenerator.useEffect": ()=>{
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
        }
    }["DNDGenerator.useEffect"], [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 24
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "tabs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `tab-btn ${activeTab === 'character' ? 'active' : ''}`,
                        onClick: ()=>setActiveTab('character'),
                        children: "🎭 Character Generator"
                    }, void 0, false, {
                        fileName: "[project]/components/tools/DNDGenerator.tsx",
                        lineNumber: 289,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `tab-btn ${activeTab === 'world' ? 'active' : ''}`,
                        onClick: ()=>setActiveTab('world'),
                        children: "🏰 World / Location"
                    }, void 0, false, {
                        fileName: "[project]/components/tools/DNDGenerator.tsx",
                        lineNumber: 295,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `tab-btn ${activeTab === 'npc' ? 'active' : ''}`,
                        onClick: ()=>setActiveTab('npc'),
                        children: "👥 NPC & Villain"
                    }, void 0, false, {
                        fileName: "[project]/components/tools/DNDGenerator.tsx",
                        lineNumber: 301,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/tools/DNDGenerator.tsx",
                lineNumber: 288,
                columnNumber: 7
            }, this),
            activeTab === 'character' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 16
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "form-group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "form-label",
                                        children: "Character Race"
                                    }, void 0, false, {
                                        fileName: "[project]/components/tools/DNDGenerator.tsx",
                                        lineNumber: 314,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "form-select",
                                        value: race,
                                        onChange: (e)=>setRace(e.target.value),
                                        children: RACES.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: r.value,
                                                children: r.label
                                            }, r.value, false, {
                                                fileName: "[project]/components/tools/DNDGenerator.tsx",
                                                lineNumber: 317,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/tools/DNDGenerator.tsx",
                                        lineNumber: 315,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tools/DNDGenerator.tsx",
                                lineNumber: 313,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "form-group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "form-label",
                                        children: "Character Class"
                                    }, void 0, false, {
                                        fileName: "[project]/components/tools/DNDGenerator.tsx",
                                        lineNumber: 322,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "form-select",
                                        value: charClass,
                                        onChange: (e)=>setCharClass(e.target.value),
                                        children: CLASSES.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: c.value,
                                                children: c.label
                                            }, c.value, false, {
                                                fileName: "[project]/components/tools/DNDGenerator.tsx",
                                                lineNumber: 325,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/tools/DNDGenerator.tsx",
                                        lineNumber: 323,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tools/DNDGenerator.tsx",
                                lineNumber: 321,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/tools/DNDGenerator.tsx",
                        lineNumber: 312,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "form-group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "form-label",
                                        children: "Gender Selection"
                                    }, void 0, false, {
                                        fileName: "[project]/components/tools/DNDGenerator.tsx",
                                        lineNumber: 333,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "form-select",
                                        value: gender,
                                        onChange: (e)=>setGender(e.target.value),
                                        children: GENDERS.map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: g,
                                                children: g.charAt(0).toUpperCase() + g.slice(1)
                                            }, g, false, {
                                                fileName: "[project]/components/tools/DNDGenerator.tsx",
                                                lineNumber: 336,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/tools/DNDGenerator.tsx",
                                        lineNumber: 334,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tools/DNDGenerator.tsx",
                                lineNumber: 332,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "form-group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "form-label",
                                        children: "Alignment"
                                    }, void 0, false, {
                                        fileName: "[project]/components/tools/DNDGenerator.tsx",
                                        lineNumber: 341,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "form-select",
                                        value: alignment,
                                        onChange: (e)=>setAlignment(e.target.value),
                                        children: ALIGNMENTS.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: a,
                                                children: a
                                            }, a, false, {
                                                fileName: "[project]/components/tools/DNDGenerator.tsx",
                                                lineNumber: 344,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/tools/DNDGenerator.tsx",
                                        lineNumber: 342,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tools/DNDGenerator.tsx",
                                lineNumber: 340,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/tools/DNDGenerator.tsx",
                        lineNumber: 331,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn btn-primary",
                        onClick: handleGenerateCharacter,
                        style: {
                            alignSelf: 'start'
                        },
                        children: "🎲 Generate Character"
                    }, void 0, false, {
                        fileName: "[project]/components/tools/DNDGenerator.tsx",
                        lineNumber: 350,
                        columnNumber: 11
                    }, this),
                    generatedChar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "result-box success animate-fade-up",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    fontSize: '1.2rem',
                                    marginBottom: 8,
                                    color: 'var(--c-crypto)',
                                    fontWeight: 800
                                },
                                children: generatedChar.name
                            }, void 0, false, {
                                fileName: "[project]/components/tools/DNDGenerator.tsx",
                                lineNumber: 356,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: '0.8rem',
                                    color: 'var(--text-muted)',
                                    marginBottom: 12
                                },
                                children: [
                                    generatedChar.alignment,
                                    " · ",
                                    race.toUpperCase(),
                                    " ",
                                    charClass.toUpperCase()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tools/DNDGenerator.tsx",
                                lineNumber: 359,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: 'var(--bg-elevated)',
                                    border: '1px solid var(--border)',
                                    padding: 10,
                                    borderRadius: 'var(--radius-sm)',
                                    fontFamily: 'monospace',
                                    fontSize: '0.85rem',
                                    marginBottom: 12
                                },
                                children: generatedChar.stats
                            }, void 0, false, {
                                fileName: "[project]/components/tools/DNDGenerator.tsx",
                                lineNumber: 362,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    margin: 0,
                                    fontSize: '0.9rem',
                                    color: 'var(--text-primary)',
                                    lineHeight: 1.6
                                },
                                children: generatedChar.backstory
                            }, void 0, false, {
                                fileName: "[project]/components/tools/DNDGenerator.tsx",
                                lineNumber: 369,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/tools/DNDGenerator.tsx",
                        lineNumber: 355,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/tools/DNDGenerator.tsx",
                lineNumber: 311,
                columnNumber: 9
            }, this),
            activeTab === 'world' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 16
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "form-label",
                                children: "Location Type"
                            }, void 0, false, {
                                fileName: "[project]/components/tools/DNDGenerator.tsx",
                                lineNumber: 381,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: 12
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `btn ${worldType === 'tavern' ? 'btn-primary' : 'btn-secondary'} btn-sm`,
                                        onClick: ()=>setWorldType('tavern'),
                                        children: "🍺 Tavern / Inn"
                                    }, void 0, false, {
                                        fileName: "[project]/components/tools/DNDGenerator.tsx",
                                        lineNumber: 383,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `btn ${worldType === 'location' ? 'btn-primary' : 'btn-secondary'} btn-sm`,
                                        onClick: ()=>setWorldType('location'),
                                        children: "🗺️ Wilds & Lands"
                                    }, void 0, false, {
                                        fileName: "[project]/components/tools/DNDGenerator.tsx",
                                        lineNumber: 389,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tools/DNDGenerator.tsx",
                                lineNumber: 382,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/tools/DNDGenerator.tsx",
                        lineNumber: 380,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn btn-primary",
                        onClick: handleGenerateWorld,
                        style: {
                            alignSelf: 'start'
                        },
                        children: "🗺️ Generate Location"
                    }, void 0, false, {
                        fileName: "[project]/components/tools/DNDGenerator.tsx",
                        lineNumber: 398,
                        columnNumber: 11
                    }, this),
                    generatedWorld && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "result-box success animate-fade-up",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    fontSize: '1.2rem',
                                    marginBottom: 8,
                                    color: 'var(--c-crypto)',
                                    fontWeight: 800
                                },
                                children: generatedWorld.name
                            }, void 0, false, {
                                fileName: "[project]/components/tools/DNDGenerator.tsx",
                                lineNumber: 404,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: '0.9rem',
                                    marginBottom: 16
                                },
                                children: generatedWorld.description
                            }, void 0, false, {
                                fileName: "[project]/components/tools/DNDGenerator.tsx",
                                lineNumber: 407,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "result-label",
                                children: generatedWorld.detailLabel
                            }, void 0, false, {
                                fileName: "[project]/components/tools/DNDGenerator.tsx",
                                lineNumber: 409,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                style: {
                                    background: 'var(--bg-elevated)',
                                    border: '1px solid var(--border)',
                                    padding: 12,
                                    borderRadius: 'var(--radius-sm)',
                                    whiteSpace: 'pre-wrap',
                                    fontFamily: 'inherit',
                                    fontSize: '0.85rem',
                                    color: 'var(--text-primary)'
                                },
                                children: generatedWorld.detailValue
                            }, void 0, false, {
                                fileName: "[project]/components/tools/DNDGenerator.tsx",
                                lineNumber: 410,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/tools/DNDGenerator.tsx",
                        lineNumber: 403,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/tools/DNDGenerator.tsx",
                lineNumber: 379,
                columnNumber: 9
            }, this),
            activeTab === 'npc' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 16
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "form-label",
                                children: "NPC Alignment"
                            }, void 0, false, {
                                fileName: "[project]/components/tools/DNDGenerator.tsx",
                                lineNumber: 426,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "form-select",
                                value: npcAlignment,
                                onChange: (e)=>setNpcAlignment(e.target.value),
                                children: ALIGNMENTS.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: a,
                                        children: a
                                    }, a, false, {
                                        fileName: "[project]/components/tools/DNDGenerator.tsx",
                                        lineNumber: 429,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/tools/DNDGenerator.tsx",
                                lineNumber: 427,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/tools/DNDGenerator.tsx",
                        lineNumber: 425,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn btn-primary",
                        onClick: handleGenerateNPC,
                        style: {
                            alignSelf: 'start'
                        },
                        children: "👥 Generate NPC"
                    }, void 0, false, {
                        fileName: "[project]/components/tools/DNDGenerator.tsx",
                        lineNumber: 434,
                        columnNumber: 11
                    }, this),
                    generatedNPC && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "result-box success animate-fade-up",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    fontSize: '1.2rem',
                                    marginBottom: 8,
                                    color: 'var(--c-crypto)',
                                    fontWeight: 800
                                },
                                children: generatedNPC.name
                            }, void 0, false, {
                                fileName: "[project]/components/tools/DNDGenerator.tsx",
                                lineNumber: 440,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: '0.9rem',
                                    marginBottom: 12
                                },
                                children: generatedNPC.description
                            }, void 0, false, {
                                fileName: "[project]/components/tools/DNDGenerator.tsx",
                                lineNumber: 443,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 8
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "result-label",
                                                style: {
                                                    display: 'block',
                                                    marginBottom: 2
                                                },
                                                children: "Personality Quirk"
                                            }, void 0, false, {
                                                fileName: "[project]/components/tools/DNDGenerator.tsx",
                                                lineNumber: 447,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: '0.9rem',
                                                    color: 'var(--text-primary)'
                                                },
                                                children: generatedNPC.quirk
                                            }, void 0, false, {
                                                fileName: "[project]/components/tools/DNDGenerator.tsx",
                                                lineNumber: 448,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/tools/DNDGenerator.tsx",
                                        lineNumber: 446,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginTop: 6
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "result-label",
                                                style: {
                                                    display: 'block',
                                                    marginBottom: 2,
                                                    color: 'var(--danger)'
                                                },
                                                children: "Secret/Motive"
                                            }, void 0, false, {
                                                fileName: "[project]/components/tools/DNDGenerator.tsx",
                                                lineNumber: 451,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: '0.9rem',
                                                    color: 'var(--text-primary)'
                                                },
                                                children: generatedNPC.secret
                                            }, void 0, false, {
                                                fileName: "[project]/components/tools/DNDGenerator.tsx",
                                                lineNumber: 452,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/tools/DNDGenerator.tsx",
                                        lineNumber: 450,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tools/DNDGenerator.tsx",
                                lineNumber: 445,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/tools/DNDGenerator.tsx",
                        lineNumber: 439,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/tools/DNDGenerator.tsx",
                lineNumber: 424,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/tools/DNDGenerator.tsx",
        lineNumber: 286,
        columnNumber: 5
    }, this);
}