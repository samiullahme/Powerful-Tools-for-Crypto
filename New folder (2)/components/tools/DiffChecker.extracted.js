function DiffChecker() {
    _s();
    const [text1, setText1] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [text2, setText2] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [diff, setDiff] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Load saved drafts on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DiffChecker.useEffect": ()=>{
            const saved1 = localStorage.getItem('cryptoredar_diff_text1');
            const saved2 = localStorage.getItem('cryptoredar_diff_text2');
            if (saved1) setText1(saved1);
            if (saved2) setText2(saved2);
        }
    }["DiffChecker.useEffect"], []);
    // Save drafts on change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DiffChecker.useEffect": ()=>{
            localStorage.setItem('cryptoredar_diff_text1', text1);
        }
    }["DiffChecker.useEffect"], [
        text1
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DiffChecker.useEffect": ()=>{
            localStorage.setItem('cryptoredar_diff_text2', text2);
        }
    }["DiffChecker.useEffect"], [
        text2
    ]);
    const computeDiff = ()=>{
        if (!text1 && !text2) return;
        // Very simple line-based diff for demonstration
        // (A real robust diff checker would use an external library like 'diff', 
        // but we'll do a simple array comparison here to avoid dependencies)
        const lines1 = text1.split('\n');
        const lines2 = text2.split('\n');
        const result = [];
        const maxLines = Math.max(lines1.length, lines2.length);
        for(let i = 0; i < maxLines; i++){
            const l1 = lines1[i];
            const l2 = lines2[i];
            if (l1 === l2) {
                if (l1 !== undefined) result.push({
                    type: 'unchanged',
                    value: l1
                });
            } else {
                if (l1 !== undefined) result.push({
                    type: 'removed',
                    value: l1
                });
                if (l2 !== undefined) result.push({
                    type: 'added',
                    value: l2
                });
            }
        }
        setDiff(result);
    };
    const clear = ()=>{
        setText1('');
        setText2('');
        setDiff(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 16,
                    marginBottom: 16
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "form-label",
                                htmlFor: "diff-orig-input",
                                children: "Original Text"
                            }, void 0, false, {
                                fileName: "[project]/components/tools/DiffChecker.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                id: "diff-orig-input",
                                className: "form-textarea",
                                value: text1,
                                onChange: (e)=>setText1(e.target.value),
                                style: {
                                    minHeight: 200,
                                    fontFamily: 'monospace',
                                    fontSize: '0.9rem'
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/tools/DiffChecker.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/tools/DiffChecker.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "form-label",
                                htmlFor: "diff-new-input",
                                children: "Changed Text"
                            }, void 0, false, {
                                fileName: "[project]/components/tools/DiffChecker.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                id: "diff-new-input",
                                className: "form-textarea",
                                value: text2,
                                onChange: (e)=>setText2(e.target.value),
                                style: {
                                    minHeight: 200,
                                    fontFamily: 'monospace',
                                    fontSize: '0.9rem'
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/tools/DiffChecker.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/tools/DiffChecker.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/tools/DiffChecker.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    gap: 12,
                    justifyContent: 'center',
                    marginBottom: 24
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn btn-primary",
                        onClick: computeDiff,
                        disabled: !text1 && !text2,
                        children: "Compare Text"
                    }, void 0, false, {
                        fileName: "[project]/components/tools/DiffChecker.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn btn-secondary",
                        onClick: clear,
                        children: "Clear"
                    }, void 0, false, {
                        fileName: "[project]/components/tools/DiffChecker.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/tools/DiffChecker.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            diff && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "result-box",
                style: {
                    padding: 0,
                    overflow: 'hidden'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: '12px 16px',
                            background: 'var(--bg-elevated)',
                            borderBottom: '1px solid var(--border)',
                            fontWeight: 600
                        },
                        children: "Comparison Result"
                    }, void 0, false, {
                        fileName: "[project]/components/tools/DiffChecker.tsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: 'monospace',
                            fontSize: '0.9rem',
                            lineHeight: 1.5,
                            overflowX: 'auto',
                            maxHeight: 500
                        },
                        children: diff.map((part, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    background: part.type === 'added' ? 'rgba(16,185,129,0.1)' : part.type === 'removed' ? 'rgba(239,68,68,0.1)' : 'transparent',
                                    color: part.type === 'added' ? 'var(--success)' : part.type === 'removed' ? 'var(--danger)' : 'var(--text-primary)',
                                    padding: '2px 16px',
                                    whiteSpace: 'pre-wrap',
                                    wordBreak: 'break-all'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            width: 24,
                                            flexShrink: 0,
                                            opacity: 0.5,
                                            userSelect: 'none'
                                        },
                                        children: part.type === 'added' ? '+' : part.type === 'removed' ? '-' : ' '
                                    }, void 0, false, {
                                        fileName: "[project]/components/tools/DiffChecker.tsx",
                                        lineNumber: 112,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: part.value || ' '
                                    }, void 0, false, {
                                        fileName: "[project]/components/tools/DiffChecker.tsx",
                                        lineNumber: 115,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/components/tools/DiffChecker.tsx",
                                lineNumber: 101,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/tools/DiffChecker.tsx",
                        lineNumber: 99,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/tools/DiffChecker.tsx",
                lineNumber: 95,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/tools/DiffChecker.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}