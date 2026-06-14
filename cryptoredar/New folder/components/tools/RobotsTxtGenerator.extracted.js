function RobotsTxtGenerator() {
    _s();
    const [rules, setRules] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            agent: '*',
            directive: 'Allow',
            path: '/'
        }
    ]);
    const [sitemap, setSitemap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [output, setOutput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RobotsTxtGenerator.useEffect": ()=>{
            let txt = '';
            // Group by User-agent
            const grouped = rules.reduce({
                "RobotsTxtGenerator.useEffect.grouped": (acc, rule)=>{
                    const a = rule.agent || '*';
                    if (!acc[a]) acc[a] = [];
                    acc[a].push(rule);
                    return acc;
                }
            }["RobotsTxtGenerator.useEffect.grouped"], {});
            Object.entries(grouped).forEach({
                "RobotsTxtGenerator.useEffect": ([agent, agentRules])=>{
                    txt += `User-agent: ${agent}\n`;
                    agentRules.forEach({
                        "RobotsTxtGenerator.useEffect": (r)=>{
                            if (r.path) txt += `${r.directive}: ${r.path}\n`;
                        }
                    }["RobotsTxtGenerator.useEffect"]);
                    txt += '\n';
                }
            }["RobotsTxtGenerator.useEffect"]);
            if (sitemap) {
                txt += `Sitemap: ${sitemap}\n`;
            }
            setOutput(txt.trim());
        }
    }["RobotsTxtGenerator.useEffect"], [
        rules,
        sitemap
    ]);
    const addRule = ()=>{
        setRules([
            ...rules,
            {
                agent: '*',
                directive: 'Disallow',
                path: '/private-path/'
            }
        ]);
    };
    const updateRule = (index, field, value)=>{
        const newRules = [
            ...rules
        ];
        newRules[index][field] = value;
        setRules(newRules);
    };
    const removeRule = (index)=>{
        setRules(rules.filter((_, i)=>i !== index));
    };
    const copyToClipboard = ()=>{
        if (!output) return;
        navigator.clipboard.writeText(output);
        setCopied(true);
        setTimeout(()=>setCopied(false), 2000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: 24
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginBottom: 16
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: {
                                        fontSize: '1.1rem',
                                        margin: 0
                                    },
                                    children: "Rules"
                                }, void 0, false, {
                                    fileName: "[project]/components/tools/RobotsTxtGenerator.tsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn btn-secondary btn-sm",
                                    onClick: addRule,
                                    children: "+ Add Rule"
                                }, void 0, false, {
                                    fileName: "[project]/components/tools/RobotsTxtGenerator.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/tools/RobotsTxtGenerator.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 12
                            },
                            children: rules.map((rule, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        gap: 8,
                                        background: 'var(--bg-elevated)',
                                        padding: 12,
                                        borderRadius: 'var(--radius-sm)',
                                        border: '1px solid var(--border)',
                                        alignItems: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            className: "form-input",
                                            style: {
                                                width: '80px',
                                                padding: '4px 8px'
                                            },
                                            value: rule.agent,
                                            onChange: (e)=>updateRule(i, 'agent', e.target.value),
                                            placeholder: "Agent",
                                            title: "User-agent (e.g. *, Googlebot)"
                                        }, void 0, false, {
                                            fileName: "[project]/components/tools/RobotsTxtGenerator.tsx",
                                            lineNumber: 71,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            className: "form-select",
                                            style: {
                                                width: '100px',
                                                padding: '4px 8px'
                                            },
                                            value: rule.directive,
                                            onChange: (e)=>updateRule(i, 'directive', e.target.value),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Allow",
                                                    children: "Allow"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/tools/RobotsTxtGenerator.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Disallow",
                                                    children: "Disallow"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/tools/RobotsTxtGenerator.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/tools/RobotsTxtGenerator.tsx",
                                            lineNumber: 80,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            className: "form-input",
                                            style: {
                                                flex: 1,
                                                padding: '4px 8px'
                                            },
                                            value: rule.path,
                                            onChange: (e)=>updateRule(i, 'path', e.target.value),
                                            placeholder: "/path/"
                                        }, void 0, false, {
                                            fileName: "[project]/components/tools/RobotsTxtGenerator.tsx",
                                            lineNumber: 89,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>removeRule(i),
                                            style: {
                                                background: 'none',
                                                border: 'none',
                                                color: 'var(--danger)',
                                                cursor: 'pointer',
                                                padding: '0 4px'
                                            },
                                            title: "Remove rule",
                                            children: "✖"
                                        }, void 0, false, {
                                            fileName: "[project]/components/tools/RobotsTxtGenerator.tsx",
                                            lineNumber: 97,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/components/tools/RobotsTxtGenerator.tsx",
                                    lineNumber: 70,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/tools/RobotsTxtGenerator.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "form-group",
                            style: {
                                marginTop: 20
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "form-label",
                                    children: "Sitemap URL (Optional)"
                                }, void 0, false, {
                                    fileName: "[project]/components/tools/RobotsTxtGenerator.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    className: "form-input",
                                    type: "text",
                                    value: sitemap,
                                    onChange: (e)=>setSitemap(e.target.value),
                                    placeholder: "https://example.com/sitemap.xml"
                                }, void 0, false, {
                                    fileName: "[project]/components/tools/RobotsTxtGenerator.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/tools/RobotsTxtGenerator.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/tools/RobotsTxtGenerator.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "form-group",
                    style: {
                        marginBottom: 0,
                        position: 'relative'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "form-label",
                            children: "Generated robots.txt"
                        }, void 0, false, {
                            fileName: "[project]/components/tools/RobotsTxtGenerator.tsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            className: "output-area",
                            value: output,
                            readOnly: true,
                            style: {
                                height: 'calc(100% - 28px)',
                                minHeight: 250,
                                fontFamily: 'monospace',
                                fontSize: '0.9rem',
                                whiteSpace: 'pre'
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/tools/RobotsTxtGenerator.tsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, this),
                        output && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `btn-copy ${copied ? 'copied' : ''}`,
                            onClick: copyToClipboard,
                            style: {
                                position: 'absolute',
                                top: 32,
                                right: 12
                            },
                            children: copied ? '✅ Copied!' : '📋 Copy'
                        }, void 0, false, {
                            fileName: "[project]/components/tools/RobotsTxtGenerator.tsx",
                            lineNumber: 125,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/tools/RobotsTxtGenerator.tsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/tools/RobotsTxtGenerator.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/tools/RobotsTxtGenerator.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}