function JWTDecoder() {
    _s();
    const [token, setToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [header, setHeader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [payload, setPayload] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [signature, setSignature] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "JWTDecoder.useEffect": ()=>{
            if (!token.trim()) {
                setHeader(null);
                setPayload(null);
                setSignature('');
                setError(null);
                return;
            }
            try {
                const parts = token.split('.');
                if (parts.length !== 3) throw new Error('Invalid JWT: Must have 3 parts separated by dots.');
                const h = JSON.parse(atob(parts[0].replace(/-/g, '+').replace(/_/g, '/')));
                const p = JSON.parse(atob(parts[1].replace(/-/g, '+').replace(/_/g, '/')));
                setHeader(h);
                setPayload(p);
                setSignature(parts[2]);
                setError(null);
            } catch (err) {
                setHeader(null);
                setPayload(null);
                setSignature('');
                setError(err.message || 'Failed to decode token. Ensure it is a valid JWT.');
            }
        }
    }["JWTDecoder.useEffect"], [
        token
    ]);
    const isExpired = payload?.exp ? payload.exp * 1000 < Date.now() : false;
    const expDate = payload?.exp ? new Date(payload.exp * 1000).toLocaleString() : null;
    const iatDate = payload?.iat ? new Date(payload.iat * 1000).toLocaleString() : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "form-group",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "form-label",
                        htmlFor: "jwt-input",
                        children: "Encoded JWT Token"
                    }, void 0, false, {
                        fileName: "[project]/components/tools/JWTDecoder.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        id: "jwt-input",
                        className: "form-textarea",
                        placeholder: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
                        value: token,
                        onChange: (e)=>setToken(e.target.value),
                        style: {
                            minHeight: 120,
                            fontFamily: 'monospace',
                            wordBreak: 'break-all'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/tools/JWTDecoder.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/tools/JWTDecoder.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "result-box danger",
                style: {
                    padding: '12px 16px',
                    marginBottom: 20
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        color: 'var(--danger)',
                        fontWeight: 600,
                        fontSize: '0.9rem'
                    },
                    children: [
                        "❌ ",
                        error
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/tools/JWTDecoder.tsx",
                    lineNumber: 59,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/tools/JWTDecoder.tsx",
                lineNumber: 58,
                columnNumber: 9
            }, this),
            header && payload && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 20
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "result-box",
                        style: {
                            margin: 0,
                            borderColor: 'rgba(139,92,246,0.3)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "result-label",
                                style: {
                                    color: 'var(--c-dev)',
                                    marginBottom: 12
                                },
                                children: "Payload (Data)"
                            }, void 0, false, {
                                fileName: "[project]/components/tools/JWTDecoder.tsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, this),
                            expDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 8,
                                    marginBottom: 12,
                                    padding: '8px 12px',
                                    background: 'var(--bg-elevated)',
                                    borderRadius: 'var(--radius-sm)',
                                    fontSize: '0.85rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontWeight: 600
                                        },
                                        children: "Status:"
                                    }, void 0, false, {
                                        fileName: "[project]/components/tools/JWTDecoder.tsx",
                                        lineNumber: 71,
                                        columnNumber: 17
                                    }, this),
                                    isExpired ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: 'var(--danger)',
                                            fontWeight: 600
                                        },
                                        children: [
                                            "Expired on ",
                                            expDate
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/tools/JWTDecoder.tsx",
                                        lineNumber: 73,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: 'var(--success)',
                                            fontWeight: 600
                                        },
                                        children: [
                                            "Valid until ",
                                            expDate
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/tools/JWTDecoder.tsx",
                                        lineNumber: 75,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tools/JWTDecoder.tsx",
                                lineNumber: 70,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                style: {
                                    margin: 0,
                                    background: 'var(--bg-elevated)',
                                    padding: 16,
                                    borderRadius: 'var(--radius-md)',
                                    fontSize: '0.85rem',
                                    overflowX: 'auto',
                                    color: 'var(--c-dev)',
                                    fontFamily: 'monospace'
                                },
                                children: JSON.stringify(payload, null, 2)
                            }, void 0, false, {
                                fileName: "[project]/components/tools/JWTDecoder.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this),
                            (payload.iat || payload.exp) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: 12,
                                    fontSize: '0.8rem',
                                    color: 'var(--text-muted)'
                                },
                                children: [
                                    payload.iat && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                style: {
                                                    color: 'var(--text-secondary)'
                                                },
                                                children: "iat:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/tools/JWTDecoder.tsx",
                                                lineNumber: 90,
                                                columnNumber: 38
                                            }, this),
                                            " ",
                                            iatDate
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/tools/JWTDecoder.tsx",
                                        lineNumber: 90,
                                        columnNumber: 33
                                    }, this),
                                    payload.exp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                style: {
                                                    color: 'var(--text-secondary)'
                                                },
                                                children: "exp:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/tools/JWTDecoder.tsx",
                                                lineNumber: 91,
                                                columnNumber: 38
                                            }, this),
                                            " ",
                                            expDate
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/tools/JWTDecoder.tsx",
                                        lineNumber: 91,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tools/JWTDecoder.tsx",
                                lineNumber: 89,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/tools/JWTDecoder.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "result-box",
                        style: {
                            margin: 0,
                            borderColor: 'rgba(239,68,68,0.3)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "result-label",
                                style: {
                                    color: 'var(--danger)',
                                    marginBottom: 12
                                },
                                children: "Header (Algorithm & Token Type)"
                            }, void 0, false, {
                                fileName: "[project]/components/tools/JWTDecoder.tsx",
                                lineNumber: 98,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                style: {
                                    margin: 0,
                                    background: 'var(--bg-elevated)',
                                    padding: 16,
                                    borderRadius: 'var(--radius-md)',
                                    fontSize: '0.85rem',
                                    overflowX: 'auto',
                                    color: 'var(--danger)',
                                    fontFamily: 'monospace'
                                },
                                children: JSON.stringify(header, null, 2)
                            }, void 0, false, {
                                fileName: "[project]/components/tools/JWTDecoder.tsx",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/tools/JWTDecoder.tsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "result-box",
                        style: {
                            margin: 0,
                            borderColor: 'rgba(16,185,129,0.3)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "result-label",
                                style: {
                                    color: 'var(--success)',
                                    marginBottom: 8
                                },
                                children: "Signature"
                            }, void 0, false, {
                                fileName: "[project]/components/tools/JWTDecoder.tsx",
                                lineNumber: 110,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: 'var(--bg-elevated)',
                                    padding: '12px 16px',
                                    borderRadius: 'var(--radius-md)',
                                    fontSize: '0.85rem',
                                    color: 'var(--success)',
                                    fontFamily: 'monospace',
                                    wordBreak: 'break-all'
                                },
                                children: signature
                            }, void 0, false, {
                                fileName: "[project]/components/tools/JWTDecoder.tsx",
                                lineNumber: 111,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: '0.75rem',
                                    color: 'var(--text-muted)',
                                    marginTop: 8
                                },
                                children: "* Signature cannot be verified without the secret key."
                            }, void 0, false, {
                                fileName: "[project]/components/tools/JWTDecoder.tsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/tools/JWTDecoder.tsx",
                        lineNumber: 109,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/tools/JWTDecoder.tsx",
                lineNumber: 64,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/tools/JWTDecoder.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}