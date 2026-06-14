function FakeWordGenerator() {
    _s();
    const [style, setStyle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('random');
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(10);
    const [syllables, setSyllables] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(2);
    const [words, setWords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 24
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-label",
                        style: {
                            marginBottom: 10
                        },
                        children: "Word Style"
                    }, void 0, false, {
                        fileName: "[project]/components/tools/FakeWordGenerator.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: 10,
                            flexWrap: 'wrap'
                        },
                        children: STYLES.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `btn ${style === s.id ? 'btn-primary' : 'btn-secondary'}`,
                                onClick: ()=>setStyle(s.id),
                                children: [
                                    s.emoji,
                                    " ",
                                    s.label
                                ]
                            }, s.id, true, {
                                fileName: "[project]/components/tools/FakeWordGenerator.tsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/tools/FakeWordGenerator.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/tools/FakeWordGenerator.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    gap: 16,
                    flexWrap: 'wrap'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-group",
                        style: {
                            flex: 1,
                            minWidth: 160
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "form-label",
                                children: [
                                    "Number of Words: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: count
                                    }, void 0, false, {
                                        fileName: "[project]/components/tools/FakeWordGenerator.tsx",
                                        lineNumber: 87,
                                        columnNumber: 58
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tools/FakeWordGenerator.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "range",
                                min: 1,
                                max: 50,
                                value: count,
                                onChange: (e)=>setCount(Number(e.target.value)),
                                style: {
                                    width: '100%',
                                    accentColor: 'var(--c-crypto)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/tools/FakeWordGenerator.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    fontSize: '0.75rem',
                                    color: 'var(--text-muted)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "1"
                                    }, void 0, false, {
                                        fileName: "[project]/components/tools/FakeWordGenerator.tsx",
                                        lineNumber: 94,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "50"
                                    }, void 0, false, {
                                        fileName: "[project]/components/tools/FakeWordGenerator.tsx",
                                        lineNumber: 94,
                                        columnNumber: 27
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tools/FakeWordGenerator.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/tools/FakeWordGenerator.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-group",
                        style: {
                            flex: 1,
                            minWidth: 160
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "form-label",
                                children: [
                                    "Syllables per Word: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: syllables
                                    }, void 0, false, {
                                        fileName: "[project]/components/tools/FakeWordGenerator.tsx",
                                        lineNumber: 98,
                                        columnNumber: 61
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tools/FakeWordGenerator.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "range",
                                min: 1,
                                max: 5,
                                value: syllables,
                                onChange: (e)=>setSyllables(Number(e.target.value)),
                                style: {
                                    width: '100%',
                                    accentColor: 'var(--c-crypto)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/tools/FakeWordGenerator.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    fontSize: '0.75rem',
                                    color: 'var(--text-muted)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "1 (short)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/tools/FakeWordGenerator.tsx",
                                        lineNumber: 105,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "5 (long)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/tools/FakeWordGenerator.tsx",
                                        lineNumber: 105,
                                        columnNumber: 35
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tools/FakeWordGenerator.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/tools/FakeWordGenerator.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/tools/FakeWordGenerator.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "btn btn-primary",
                onClick: generate,
                style: {
                    alignSelf: 'start'
                },
                children: "🎲 Generate Fake Words"
            }, void 0, false, {
                fileName: "[project]/components/tools/FakeWordGenerator.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            words.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "result-box success animate-fade-up",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: 12
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "result-label",
                                children: [
                                    words.length,
                                    " Generated Words"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tools/FakeWordGenerator.tsx",
                                lineNumber: 119,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: 8
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btn btn-secondary btn-sm",
                                        onClick: generate,
                                        children: "🔄 Regenerate"
                                    }, void 0, false, {
                                        fileName: "[project]/components/tools/FakeWordGenerator.tsx",
                                        lineNumber: 121,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btn btn-secondary btn-sm",
                                        onClick: handleCopy,
                                        children: copied ? '✅ Copied!' : '📋 Copy All'
                                    }, void 0, false, {
                                        fileName: "[project]/components/tools/FakeWordGenerator.tsx",
                                        lineNumber: 122,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tools/FakeWordGenerator.tsx",
                                lineNumber: 120,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/tools/FakeWordGenerator.tsx",
                        lineNumber: 118,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 8
                        },
                        children: words.map((word, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                onClick: async ()=>{
                                    await navigator.clipboard.writeText(word);
                                },
                                style: {
                                    background: 'var(--bg-elevated)',
                                    border: '1px solid var(--border)',
                                    padding: '6px 12px',
                                    borderRadius: 'var(--radius-sm)',
                                    fontSize: '0.95rem',
                                    color: 'var(--c-crypto)',
                                    cursor: 'pointer',
                                    fontWeight: 600,
                                    transition: 'border-color 0.2s, background 0.2s'
                                },
                                title: "Click to copy this word",
                                onMouseEnter: (e)=>{
                                    e.currentTarget.style.background = 'var(--c-crypto-dim)';
                                    e.currentTarget.style.borderColor = 'var(--c-crypto)';
                                },
                                onMouseLeave: (e)=>{
                                    e.currentTarget.style.background = 'var(--bg-elevated)';
                                    e.currentTarget.style.borderColor = 'var(--border)';
                                },
                                children: word
                            }, i, false, {
                                fileName: "[project]/components/tools/FakeWordGenerator.tsx",
                                lineNumber: 129,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/tools/FakeWordGenerator.tsx",
                        lineNumber: 127,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/tools/FakeWordGenerator.tsx",
                lineNumber: 117,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: 'var(--bg-elevated)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-md)',
                    padding: 16,
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        style: {
                            color: 'var(--text-primary)'
                        },
                        children: "💡 Use cases:"
                    }, void 0, false, {
                        fileName: "[project]/components/tools/FakeWordGenerator.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this),
                    ' ',
                    "Generate fake words for fantasy world-building, sci-fi stories, game character names, placeholder text, brand name brainstorming, or language invention. This fake word generator and fake words generator creates pronounceable, original words every time — no real language, purely invented vocabulary."
                ]
            }, void 0, true, {
                fileName: "[project]/components/tools/FakeWordGenerator.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/tools/FakeWordGenerator.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}