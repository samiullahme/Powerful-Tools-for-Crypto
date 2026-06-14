function ReverseTextGenerator() {
    _s();
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('reverseText');
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReverseTextGenerator.useEffect": ()=>{
            const saved = localStorage.getItem('cryptoredar_reverse_text');
            if (saved) setText(saved);
        }
    }["ReverseTextGenerator.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReverseTextGenerator.useEffect": ()=>{
            localStorage.setItem('cryptoredar_reverse_text', text);
        }
    }["ReverseTextGenerator.useEffect"], [
        text
    ]);
    const reverseText = (s)=>s.split('').reverse().join('');
    const reverseWords = (s)=>s.split('\n').map((line)=>line.split(' ').reverse().join(' ')).join('\n');
    const output = text ? tab === 'reverseText' ? reverseText(text) : reverseWords(text) : '';
    const handleCopy = async ()=>{
        if (!output) return;
        await navigator.clipboard.writeText(output);
        setCopied(true);
        setTimeout(()=>setCopied(false), 2000);
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
                        className: `tab-btn ${tab === 'reverseText' ? 'active' : ''}`,
                        onClick: ()=>setTab('reverseText'),
                        children: "🔄 Reverse Text"
                    }, void 0, false, {
                        fileName: "[project]/components/tools/ReverseTextGenerator.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `tab-btn ${tab === 'reverseWords' ? 'active' : ''}`,
                        onClick: ()=>setTab('reverseWords'),
                        children: "🔀 Reverse Words"
                    }, void 0, false, {
                        fileName: "[project]/components/tools/ReverseTextGenerator.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/tools/ReverseTextGenerator.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: '0.88rem',
                    color: 'var(--text-secondary)',
                    background: 'var(--bg-elevated)',
                    padding: '10px 14px',
                    borderRadius: 'var(--radius-sm)'
                },
                children: tab === 'reverseText' ? '🔄 Reverses every character in your text. "Hello World" → "dlroW olleH"' : '🔀 Reverses the order of words, keeping each word intact. "Hello World" → "World Hello"'
            }, void 0, false, {
                fileName: "[project]/components/tools/ReverseTextGenerator.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "form-group",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "form-label",
                        children: "Enter your text"
                    }, void 0, false, {
                        fileName: "[project]/components/tools/ReverseTextGenerator.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        className: "form-textarea",
                        placeholder: tab === 'reverseText' ? 'Type text to reverse it character by character...' : 'Type text to reverse the word order...',
                        value: text,
                        onChange: (e)=>setText(e.target.value),
                        style: {
                            minHeight: 130
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/tools/ReverseTextGenerator.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: '0.78rem',
                            color: 'var(--text-muted)',
                            marginTop: 4
                        },
                        children: [
                            text.length,
                            " characters · ",
                            text.trim() ? text.trim().split(/\s+/).length : 0,
                            " words · Draft auto-saved"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/tools/ReverseTextGenerator.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/tools/ReverseTextGenerator.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            output && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "result-box success animate-fade-up",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: 10
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "result-label",
                                children: tab === 'reverseText' ? 'Reversed Text' : 'Reversed Words'
                            }, void 0, false, {
                                fileName: "[project]/components/tools/ReverseTextGenerator.tsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn btn-secondary btn-sm",
                                onClick: handleCopy,
                                children: copied ? '✅ Copied!' : '📋 Copy'
                            }, void 0, false, {
                                fileName: "[project]/components/tools/ReverseTextGenerator.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/tools/ReverseTextGenerator.tsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: 'var(--bg-elevated)',
                            padding: '14px 16px',
                            borderRadius: 'var(--radius-sm)',
                            fontSize: '1rem',
                            lineHeight: 1.7,
                            color: 'var(--text-primary)',
                            wordBreak: 'break-word',
                            whiteSpace: 'pre-wrap'
                        },
                        children: output
                    }, void 0, false, {
                        fileName: "[project]/components/tools/ReverseTextGenerator.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/tools/ReverseTextGenerator.tsx",
                lineNumber: 71,
                columnNumber: 9
            }, this),
            text && output && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 12
                },
                children: [
                    {
                        label: 'Original',
                        value: text
                    },
                    {
                        label: tab === 'reverseText' ? 'Reversed' : 'Words Reversed',
                        value: output
                    }
                ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: 'var(--bg-card)',
                            border: '1px solid var(--border)',
                            borderRadius: 'var(--radius-sm)',
                            padding: 12
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: '0.75rem',
                                    color: 'var(--text-muted)',
                                    marginBottom: 6,
                                    fontWeight: 600,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em'
                                },
                                children: item.label
                            }, void 0, false, {
                                fileName: "[project]/components/tools/ReverseTextGenerator.tsx",
                                lineNumber: 102,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: '0.9rem',
                                    color: 'var(--text-primary)',
                                    wordBreak: 'break-word'
                                },
                                children: [
                                    item.value.slice(0, 120),
                                    item.value.length > 120 ? '…' : ''
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tools/ReverseTextGenerator.tsx",
                                lineNumber: 105,
                                columnNumber: 15
                            }, this)
                        ]
                    }, item.label, true, {
                        fileName: "[project]/components/tools/ReverseTextGenerator.tsx",
                        lineNumber: 98,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/tools/ReverseTextGenerator.tsx",
                lineNumber: 93,
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
                        fileName: "[project]/components/tools/ReverseTextGenerator.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    ' ',
                    "Reverse text for social media tricks, mirror writing, backwards name games, creative art, secret messages, and fun puzzles. Works as a backwards text generator, text reverser, invert text generator, and backwards translator all in one."
                ]
            }, void 0, true, {
                fileName: "[project]/components/tools/ReverseTextGenerator.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/tools/ReverseTextGenerator.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}