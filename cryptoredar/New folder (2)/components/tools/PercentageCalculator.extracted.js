function PercentageCalculator() {
    _s();
    const [val1, setVal1] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [val2, setVal2] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('percentOf');
    const v1 = parseFloat(val1) || 0;
    const v2 = parseFloat(val2) || 0;
    let result = 0;
    let resultText = '';
    const fmt = (n)=>new Intl.NumberFormat('en-US', {
            maximumFractionDigits: 4
        }).format(n);
    if (v1 && v2) {
        if (mode === 'percentOf') {
            result = v1 / 100 * v2;
            resultText = `${v1}% of ${v2} is ${fmt(result)}`;
        } else if (mode === 'isWhatPercent') {
            result = v1 / v2 * 100;
            resultText = `${v1} is ${fmt(result)}% of ${v2}`;
        } else if (mode === 'percentChange') {
            result = (v2 - v1) / v1 * 100;
            const changeStr = result >= 0 ? 'Increase' : 'Decrease';
            resultText = `${Math.abs(result).toFixed(2)}% ${changeStr} (from ${v1} to ${v2})`;
        }
    }
    const hasInput = val1 !== '' && val2 !== '';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "tabs",
                style: {
                    marginBottom: 24
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `tab-btn ${mode === 'percentOf' ? 'active' : ''}`,
                        onClick: ()=>{
                            setMode('percentOf');
                            setVal1('');
                            setVal2('');
                        },
                        children: "X% of Y"
                    }, void 0, false, {
                        fileName: "[project]/components/tools/PercentageCalculator.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `tab-btn ${mode === 'isWhatPercent' ? 'active' : ''}`,
                        onClick: ()=>{
                            setMode('isWhatPercent');
                            setVal1('');
                            setVal2('');
                        },
                        children: "X is what % of Y"
                    }, void 0, false, {
                        fileName: "[project]/components/tools/PercentageCalculator.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `tab-btn ${mode === 'percentChange' ? 'active' : ''}`,
                        onClick: ()=>{
                            setMode('percentChange');
                            setVal1('');
                            setVal2('');
                        },
                        children: "% Change (X to Y)"
                    }, void 0, false, {
                        fileName: "[project]/components/tools/PercentageCalculator.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/tools/PercentageCalculator.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "form-row",
                style: {
                    alignItems: 'flex-end'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-group",
                        style: {
                            marginBottom: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "form-label",
                                htmlFor: "perc-v1-input",
                                children: [
                                    mode === 'percentOf' && 'What is X%',
                                    mode === 'isWhatPercent' && 'Value X',
                                    mode === 'percentChange' && 'From Value (Old)'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tools/PercentageCalculator.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "perc-v1-input",
                                className: "form-input",
                                type: "number",
                                value: val1,
                                onChange: (e)=>setVal1(e.target.value),
                                step: "any",
                                placeholder: "Enter X"
                            }, void 0, false, {
                                fileName: "[project]/components/tools/PercentageCalculator.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/tools/PercentageCalculator.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: '10px 0',
                            fontWeight: 600,
                            color: 'var(--text-muted)'
                        },
                        children: [
                            mode === 'percentOf' && 'of',
                            mode === 'isWhatPercent' && 'is what % of',
                            mode === 'percentChange' && 'to'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/tools/PercentageCalculator.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-group",
                        style: {
                            marginBottom: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "form-label",
                                htmlFor: "perc-v2-input",
                                children: [
                                    mode === 'percentOf' && 'Value Y',
                                    mode === 'isWhatPercent' && 'Value Y',
                                    mode === 'percentChange' && 'To Value (New)'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tools/PercentageCalculator.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "perc-v2-input",
                                className: "form-input",
                                type: "number",
                                value: val2,
                                onChange: (e)=>setVal2(e.target.value),
                                step: "any",
                                placeholder: "Enter Y"
                            }, void 0, false, {
                                fileName: "[project]/components/tools/PercentageCalculator.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/tools/PercentageCalculator.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/tools/PercentageCalculator.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            hasInput && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "result-box",
                style: {
                    marginTop: 24,
                    textAlign: 'center'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "result-label",
                        children: "Result"
                    }, void 0, false, {
                        fileName: "[project]/components/tools/PercentageCalculator.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "result-value",
                        style: {
                            fontSize: '1.6rem',
                            color: 'var(--c-finance)',
                            marginTop: 8
                        },
                        children: resultText
                    }, void 0, false, {
                        fileName: "[project]/components/tools/PercentageCalculator.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/tools/PercentageCalculator.tsx",
                lineNumber: 72,
                columnNumber: 9
            }, this),
            !hasInput && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "info-banner",
                style: {
                    marginTop: 24
                },
                children: "💡 Select a calculation mode and enter both numbers to see the percentage result."
            }, void 0, false, {
                fileName: "[project]/components/tools/PercentageCalculator.tsx",
                lineNumber: 81,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/tools/PercentageCalculator.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}