function SuperscriptGenerator() {
    _s();
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('superscript');
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SuperscriptGenerator.useEffect": ()=>{
            const saved = localStorage.getItem('cryptoredar_superscript_text');
            if (saved) setText(saved);
        }
    }["SuperscriptGenerator.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SuperscriptGenerator.useEffect": ()=>{
            localStorage.setItem('cryptoredar_superscript_text', text);
        }
    }["SuperscriptGenerator.useEffect"], [
        text
    ]);
    const output = text ? convert(text, tab === 'superscript' ? SUP_MAP : SUB_MAP) : '';
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
                        className: `tab-btn ${tab === 'superscript' ? 'active' : ''}`,
                        onClick: ()=>setTab('superscript'),
                        children: "Aˢᵘᵖ Superscript"
                    }, void 0, false, {
                        fileName: "[project]/components/tools/SuperscriptGenerator.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `tab-btn ${tab === 'subscript' ? 'active' : ''}`,
                        onClick: ()=>setTab('subscript'),
                        children: "Aₛᵤᵦ Subscript"
                    }, void 0, false, {
                        fileName: "[project]/components/tools/SuperscriptGenerator.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/tools/SuperscriptGenerator.tsx",
                lineNumber: 52,
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
                children: tab === 'superscript' ? '↑ Converts letters and numbers to their Unicode superscript equivalents. Great for footnotes, math, and social posts like H²O.' : '↓ Converts letters and numbers to their Unicode subscript equivalents. Perfect for chemical formulas like H₂O, CO₂.'
            }, void 0, false, {
                fileName: "[project]/components/tools/SuperscriptGenerator.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "form-group",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "form-label",
                        children: "Enter your text"
                    }, void 0, false, {
                        fileName: "[project]/components/tools/SuperscriptGenerator.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        className: "form-textarea",
                        placeholder: tab === 'superscript' ? 'e.g. x2 + y2 = z2...' : 'e.g. H2O or CO2...',
                        value: text,
                        onChange: (e)=>setText(e.target.value),
                        style: {
                            minHeight: 110
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/tools/SuperscriptGenerator.tsx",
                        lineNumber: 71,
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
                            " characters · Draft auto-saved"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/tools/SuperscriptGenerator.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/tools/SuperscriptGenerator.tsx",
                lineNumber: 69,
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
                                children: [
                                    tab === 'superscript' ? 'Superscript' : 'Subscript',
                                    " Output"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tools/SuperscriptGenerator.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn btn-secondary btn-sm",
                                onClick: handleCopy,
                                children: copied ? '✅ Copied!' : '📋 Copy'
                            }, void 0, false, {
                                fileName: "[project]/components/tools/SuperscriptGenerator.tsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/tools/SuperscriptGenerator.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: 'var(--bg-elevated)',
                            padding: '14px 16px',
                            borderRadius: 'var(--radius-sm)',
                            fontSize: '1.2rem',
                            lineHeight: 1.8,
                            color: 'var(--text-primary)',
                            wordBreak: 'break-word',
                            whiteSpace: 'pre-wrap'
                        },
                        children: output
                    }, void 0, false, {
                        fileName: "[project]/components/tools/SuperscriptGenerator.tsx",
                        lineNumber: 92,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/tools/SuperscriptGenerator.tsx",
                lineNumber: 85,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "result-label",
                        style: {
                            marginBottom: 8
                        },
                        children: "Quick Examples"
                    }, void 0, false, {
                        fileName: "[project]/components/tools/SuperscriptGenerator.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                            gap: 10
                        },
                        children: (tab === 'superscript' ? [
                            [
                                'x2+y2=z2',
                                'Pythagorean'
                            ],
                            [
                                'E=mc2',
                                'Einstein'
                            ],
                            [
                                '10th',
                                'Ordinal'
                            ]
                        ] : [
                            [
                                'H2O',
                                'Water'
                            ],
                            [
                                'CO2',
                                'Carbon Dioxide'
                            ],
                            [
                                'CH4',
                                'Methane'
                            ]
                        ]).map(([val, name])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>setText(val),
                                style: {
                                    background: 'var(--bg-card)',
                                    border: '1px solid var(--border)',
                                    borderRadius: 'var(--radius-sm)',
                                    padding: '10px 14px',
                                    cursor: 'pointer',
                                    textAlign: 'center'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '0.75rem',
                                            color: 'var(--text-muted)',
                                            marginBottom: 2
                                        },
                                        children: name
                                    }, void 0, false, {
                                        fileName: "[project]/components/tools/SuperscriptGenerator.tsx",
                                        lineNumber: 120,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            color: 'var(--c-dev)',
                                            fontWeight: 700,
                                            fontSize: '1.1rem'
                                        },
                                        children: convert(val, tab === 'superscript' ? SUP_MAP : SUB_MAP)
                                    }, void 0, false, {
                                        fileName: "[project]/components/tools/SuperscriptGenerator.tsx",
                                        lineNumber: 121,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, val, true, {
                                fileName: "[project]/components/tools/SuperscriptGenerator.tsx",
                                lineNumber: 111,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/tools/SuperscriptGenerator.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/tools/SuperscriptGenerator.tsx",
                lineNumber: 104,
                columnNumber: 7
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
                        children: "💡 Note:"
                    }, void 0, false, {
                        fileName: "[project]/components/tools/SuperscriptGenerator.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this),
                    ' ',
                    "Not all letters have official Unicode superscript/subscript versions. Unsupported characters are kept as-is. Use this superscript and subscript generator for math notation, chemistry formulas, footnotes, and styled social media text."
                ]
            }, void 0, true, {
                fileName: "[project]/components/tools/SuperscriptGenerator.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/tools/SuperscriptGenerator.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}