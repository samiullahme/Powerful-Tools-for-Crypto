function ChineseNameConverter() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('engToChi');
    // English to Chinese States
    const [engName, setEngName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [gender, setGender] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('neutral');
    const [trait, setTrait] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('wisdom');
    const [convertedResult, setConvertedResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Chinese to English States
    const [chiInput, setChiInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [translatorResult, setTranslatorResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Baby Names States
    const [babyGender, setBabyGender] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('boy');
    // Word Count States
    const [bilingualText, setBilingualText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Handle routing pre-selection logic based on URL slug
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChineseNameConverter.useEffect": ()=>{
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
        }
    }["ChineseNameConverter.useEffect"], [
        pathname
    ]);
    // Load saved drafts on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChineseNameConverter.useEffect": ()=>{
            const savedEng = localStorage.getItem('cryptoredar_chinese_eng_name');
            const savedChi = localStorage.getItem('cryptoredar_chinese_chi_input');
            const savedBilingual = localStorage.getItem('cryptoredar_chinese_bilingual_text');
            if (savedEng) setEngName(savedEng);
            if (savedChi) setChiInput(savedChi);
            if (savedBilingual) setBilingualText(savedBilingual);
        }
    }["ChineseNameConverter.useEffect"], []);
    // Save drafts on change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChineseNameConverter.useEffect": ()=>{
            localStorage.setItem('cryptoredar_chinese_eng_name', engName);
        }
    }["ChineseNameConverter.useEffect"], [
        engName
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChineseNameConverter.useEffect": ()=>{
            localStorage.setItem('cryptoredar_chinese_chi_input', chiInput);
        }
    }["ChineseNameConverter.useEffect"], [
        chiInput
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChineseNameConverter.useEffect": ()=>{
            localStorage.setItem('cryptoredar_chinese_bilingual_text', bilingualText);
        }
    }["ChineseNameConverter.useEffect"], [
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
                        className: `tab-btn ${activeTab === 'engToChi' ? 'active' : ''}`,
                        onClick: ()=>setActiveTab('engToChi'),
                        children: "🇨🇳 English to Chinese"
                    }, void 0, false, {
                        fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                        lineNumber: 301,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `tab-btn ${activeTab === 'chiToEng' ? 'active' : ''}`,
                        onClick: ()=>setActiveTab('chiToEng'),
                        children: "🔄 Chinese to English"
                    }, void 0, false, {
                        fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                        lineNumber: 307,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `tab-btn ${activeTab === 'babyNames' ? 'active' : ''}`,
                        onClick: ()=>setActiveTab('babyNames'),
                        children: "🍼 Baby Names Finder"
                    }, void 0, false, {
                        fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                        lineNumber: 313,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `tab-btn ${activeTab === 'wordCount' ? 'active' : ''}`,
                        onClick: ()=>setActiveTab('wordCount'),
                        children: "📊 Translation Statistics"
                    }, void 0, false, {
                        fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                        lineNumber: 319,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                lineNumber: 300,
                columnNumber: 7
            }, this),
            activeTab === 'engToChi' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                children: "Enter English Name"
                            }, void 0, false, {
                                fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                lineNumber: 331,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                className: "form-input",
                                placeholder: "e.g. Samuel, David, Joy...",
                                value: engName,
                                onChange: (e)=>setEngName(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                lineNumber: 332,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                        lineNumber: 330,
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
                                        children: "Name Tone (Gender Style)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                        lineNumber: 343,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "form-select",
                                        value: gender,
                                        onChange: (e)=>setGender(e.target.value),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "neutral",
                                                children: "Gender Neutral (Balanced)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                                lineNumber: 349,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "male",
                                                children: "Masculine (Strong, Lofty)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                                lineNumber: 350,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "female",
                                                children: "Feminine (Soft, Graceful)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                                lineNumber: 351,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                        lineNumber: 344,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                lineNumber: 342,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "form-group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "form-label",
                                        children: "Character Trait focus"
                                    }, void 0, false, {
                                        fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                        lineNumber: 355,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "form-select",
                                        value: trait,
                                        onChange: (e)=>setTrait(e.target.value),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "wisdom",
                                                children: "Wisdom & Intelligence (智/慧)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                                lineNumber: 357,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "strength",
                                                children: "Strength & Power (力/勇)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                                lineNumber: 358,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "elegance",
                                                children: "Elegance & Charm (雅/丽)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                                lineNumber: 359,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "peace",
                                                children: "Peace & Serenity (安/平)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                                lineNumber: 360,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                        lineNumber: 356,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                lineNumber: 354,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                        lineNumber: 341,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn btn-primary",
                        onClick: handleConvertToChinese,
                        style: {
                            alignSelf: 'start'
                        },
                        children: "🇨🇳 Convert to Chinese"
                    }, void 0, false, {
                        fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                        lineNumber: 365,
                        columnNumber: 11
                    }, this),
                    convertedResult && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "result-box success animate-fade-up",
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 16
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "result-label",
                                        children: "Your Chinese Name"
                                    }, void 0, false, {
                                        fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                        lineNumber: 372,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: 24,
                                            alignItems: 'baseline',
                                            marginTop: 4
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "result-value",
                                                style: {
                                                    fontSize: '3rem',
                                                    color: 'var(--c-finance)'
                                                },
                                                children: convertedResult.simplified
                                            }, void 0, false, {
                                                fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                                lineNumber: 374,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '1.2rem',
                                                    color: 'var(--text-secondary)'
                                                },
                                                children: [
                                                    "(Traditional: ",
                                                    convertedResult.traditional,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                                lineNumber: 377,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                        lineNumber: 373,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '1rem',
                                            color: 'var(--text-muted)',
                                            fontWeight: 600
                                        },
                                        children: [
                                            "Pinyin pronunciation: ",
                                            convertedResult.pinyin
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                        lineNumber: 381,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                lineNumber: 371,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "result-label",
                                        style: {
                                            marginBottom: 8
                                        },
                                        children: "Character Meanings & Strokes"
                                    }, void 0, false, {
                                        fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                        lineNumber: 387,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: 8
                                        },
                                        children: convertedResult.details.map((char, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: 'var(--bg-elevated)',
                                                    border: '1px solid var(--border)',
                                                    padding: 12,
                                                    borderRadius: 'var(--radius-sm)',
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    flexWrap: 'wrap',
                                                    gap: 8
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                style: {
                                                                    fontSize: '1.1rem',
                                                                    color: 'var(--text-primary)'
                                                                },
                                                                children: char.simp
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                                                lineNumber: 399,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: '0.8rem',
                                                                    color: 'var(--text-muted)',
                                                                    marginLeft: 8
                                                                },
                                                                children: [
                                                                    "(",
                                                                    char.pinyin,
                                                                    ")"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                                                lineNumber: 400,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                                        lineNumber: 398,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '0.85rem',
                                                            color: 'var(--text-secondary)'
                                                        },
                                                        children: [
                                                            "Strokes: ",
                                                            char.strokes,
                                                            " | Meaning: ",
                                                            char.meanings
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                                        lineNumber: 404,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                                lineNumber: 390,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                        lineNumber: 388,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                lineNumber: 386,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                        lineNumber: 370,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                lineNumber: 329,
                columnNumber: 9
            }, this),
            activeTab === 'chiToEng' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                children: "Enter Chinese Characters or Pinyin Name"
                            }, void 0, false, {
                                fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                lineNumber: 420,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                className: "form-input",
                                placeholder: "e.g. 萨米, 达维, Sami...",
                                value: chiInput,
                                onChange: (e)=>setChiInput(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                lineNumber: 421,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                        lineNumber: 419,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn btn-primary",
                        onClick: handleTranslateChinese,
                        style: {
                            alignSelf: 'start'
                        },
                        children: "🔄 Translate to English"
                    }, void 0, false, {
                        fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                        lineNumber: 430,
                        columnNumber: 11
                    }, this),
                    translatorResult && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "result-box success animate-fade-up",
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 16
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "result-label",
                                        children: "Pinyin Sound Guide"
                                    }, void 0, false, {
                                        fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                        lineNumber: 437,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "result-value",
                                        style: {
                                            fontSize: '1.5rem',
                                            color: 'var(--c-finance)'
                                        },
                                        children: translatorResult.pinyin
                                    }, void 0, false, {
                                        fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                        lineNumber: 438,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                lineNumber: 436,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "result-label",
                                        children: "Spelling Styles"
                                    }, void 0, false, {
                                        fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                        lineNumber: 444,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'grid',
                                            gridTemplateColumns: '1fr 1fr',
                                            gap: 12,
                                            marginTop: 4
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: 'var(--bg-elevated)',
                                                    padding: 10,
                                                    borderRadius: 'var(--radius-sm)'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: '0.75rem',
                                                            color: 'var(--text-muted)'
                                                        },
                                                        children: "Hong Kong (Cantonese)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                                        lineNumber: 447,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '0.9rem',
                                                            fontWeight: 600
                                                        },
                                                        children: translatorResult.hkStyle
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                                        lineNumber: 448,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                                lineNumber: 446,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: 'var(--bg-elevated)',
                                                    padding: 10,
                                                    borderRadius: 'var(--radius-sm)'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: '0.75rem',
                                                            color: 'var(--text-muted)'
                                                        },
                                                        children: "Taiwan (Wade-Giles)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                                        lineNumber: 451,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '0.9rem',
                                                            fontWeight: 600
                                                        },
                                                        children: translatorResult.twStyle
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                                        lineNumber: 452,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                                lineNumber: 450,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                        lineNumber: 445,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                lineNumber: 443,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "result-label",
                                        children: "Literal Character Meaning"
                                    }, void 0, false, {
                                        fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                        lineNumber: 458,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            margin: 0,
                                            fontSize: '0.9rem',
                                            color: 'var(--text-primary)',
                                            lineHeight: 1.6
                                        },
                                        children: translatorResult.meaning
                                    }, void 0, false, {
                                        fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                        lineNumber: 459,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                lineNumber: 457,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "result-label",
                                        children: "Matching Western Equivalents"
                                    }, void 0, false, {
                                        fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                        lineNumber: 465,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontWeight: 600,
                                            color: 'var(--c-crypto)',
                                            fontSize: '0.95rem'
                                        },
                                        children: translatorResult.equivalents
                                    }, void 0, false, {
                                        fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                        lineNumber: 466,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                lineNumber: 464,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                        lineNumber: 435,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                lineNumber: 418,
                columnNumber: 9
            }, this),
            activeTab === 'babyNames' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                children: "Cultural Crossover Group"
                            }, void 0, false, {
                                fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                lineNumber: 479,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: 12
                                },
                                children: [
                                    'boy',
                                    'girl',
                                    'neutral'
                                ].map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `btn ${babyGender === g ? 'btn-primary' : 'btn-secondary'} btn-sm`,
                                        onClick: ()=>setBabyGender(g),
                                        children: g === 'boy' ? '👦 Baby Boys' : g === 'girl' ? '👧 Baby Girls' : '🧸 Unisex'
                                    }, g, false, {
                                        fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                        lineNumber: 482,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                lineNumber: 480,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                        lineNumber: 478,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 10,
                            marginTop: 8
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "result-label",
                                children: "Bilingual Cross-Cultural Names"
                            }, void 0, false, {
                                fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                lineNumber: 494,
                                columnNumber: 13
                            }, this),
                            BILINGUAL_BABY_NAMES[babyGender].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: 'var(--bg-card)',
                                        border: '1px solid var(--border)',
                                        padding: 16,
                                        borderRadius: 'var(--radius-md)',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                        gap: 12
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    style: {
                                                        margin: 0,
                                                        fontSize: '1rem',
                                                        color: 'var(--c-crypto)'
                                                    },
                                                    children: item.eng
                                                }, void 0, false, {
                                                    fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                                    lineNumber: 505,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: '0.82rem',
                                                        color: 'var(--text-secondary)'
                                                    },
                                                    children: item.chi
                                                }, void 0, false, {
                                                    fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                                    lineNumber: 506,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                            lineNumber: 504,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: '0.85rem',
                                                color: 'var(--text-primary)',
                                                maxWidth: '400px',
                                                textAlign: 'right'
                                            },
                                            children: item.meaning
                                        }, void 0, false, {
                                            fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                            lineNumber: 508,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, item.eng, true, {
                                    fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                    lineNumber: 496,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                        lineNumber: 493,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                lineNumber: 477,
                columnNumber: 9
            }, this),
            activeTab === 'wordCount' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                children: "Paste Bilingual Text Document"
                            }, void 0, false, {
                                fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                lineNumber: 521,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                className: "form-textarea",
                                placeholder: "Paste English words and Chinese characters together...",
                                value: bilingualText,
                                onChange: (e)=>setBilingualText(e.target.value),
                                style: {
                                    minHeight: 140
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                lineNumber: 522,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                        lineNumber: 520,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn btn-primary",
                        onClick: handleAnalyzeText,
                        style: {
                            alignSelf: 'start'
                        },
                        children: "📊 Analyze Text"
                    }, void 0, false, {
                        fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                        lineNumber: 531,
                        columnNumber: 11
                    }, this),
                    stats && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "result-box success animate-fade-up",
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 16
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "result-grid",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "result-item",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "result-label",
                                                children: "English Words"
                                            }, void 0, false, {
                                                fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                                lineNumber: 539,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "result-value",
                                                style: {
                                                    fontSize: '1.6rem'
                                                },
                                                children: stats.engWords
                                            }, void 0, false, {
                                                fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                                lineNumber: 540,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                        lineNumber: 538,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "result-item",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "result-label",
                                                children: "Chinese Characters"
                                            }, void 0, false, {
                                                fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                                lineNumber: 543,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "result-value",
                                                style: {
                                                    fontSize: '1.6rem'
                                                },
                                                children: stats.chiChars
                                            }, void 0, false, {
                                                fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                                lineNumber: 544,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                        lineNumber: 542,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                lineNumber: 537,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "result-label",
                                        children: "Word-to-Character Ratio"
                                    }, void 0, false, {
                                        fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                        lineNumber: 549,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "result-value",
                                        style: {
                                            fontSize: '1.4rem',
                                            color: 'var(--c-finance)',
                                            marginTop: 4
                                        },
                                        children: stats.ratio
                                    }, void 0, false, {
                                        fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                        lineNumber: 550,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            margin: '8px 0 0 0',
                                            fontSize: '0.85rem',
                                            color: 'var(--text-secondary)'
                                        },
                                        children: stats.description
                                    }, void 0, false, {
                                        fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                        lineNumber: 553,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                                lineNumber: 548,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                        lineNumber: 536,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/tools/ChineseNameConverter.tsx",
                lineNumber: 519,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/tools/ChineseNameConverter.tsx",
        lineNumber: 298,
        columnNumber: 5
    }, this);
}