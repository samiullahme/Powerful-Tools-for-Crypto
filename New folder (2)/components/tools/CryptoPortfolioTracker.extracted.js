function CryptoPortfolioTracker() {
    _s();
    const [holdings, setHoldings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [coin, setCoin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [buyPrice, setBuyPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [quantity, setQuantity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [currentPrice, setCurrentPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [currency, setCurrency] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('₹');
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CryptoPortfolioTracker.useEffect": ()=>{
            const saved = localStorage.getItem('crypto_portfolio');
            const savedCurr = localStorage.getItem('crypto_currency');
            if (saved) setHoldings(JSON.parse(saved));
            if (savedCurr) setCurrency(savedCurr);
            setIsLoaded(true);
        }
    }["CryptoPortfolioTracker.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CryptoPortfolioTracker.useEffect": ()=>{
            if (isLoaded) {
                localStorage.setItem('crypto_portfolio', JSON.stringify(holdings));
                localStorage.setItem('crypto_currency', currency);
            }
        }
    }["CryptoPortfolioTracker.useEffect"], [
        holdings,
        currency,
        isLoaded
    ]);
    const addHolding = ()=>{
        if (!coin || !buyPrice || !quantity) return;
        const newHolding = {
            id: Math.random().toString(36).substring(7),
            coin: coin.toUpperCase(),
            buyPrice: parseFloat(buyPrice) || 0,
            quantity: parseFloat(quantity) || 0,
            currentPrice: parseFloat(currentPrice) || parseFloat(buyPrice) || 0
        };
        setHoldings([
            ...holdings,
            newHolding
        ]);
        setCoin('');
        setBuyPrice('');
        setQuantity('');
        setCurrentPrice('');
    };
    const removeHolding = (id)=>{
        setHoldings(holdings.filter((h)=>h.id !== id));
    };
    const updateCurrentPrice = (id, price)=>{
        const p = parseFloat(price) || 0;
        setHoldings(holdings.map((h)=>h.id === id ? {
                ...h,
                currentPrice: p
            } : h));
    };
    const fmt = (n)=>new Intl.NumberFormat('en-IN', {
            maximumFractionDigits: 2
        }).format(n);
    const totalInvested = holdings.reduce((sum, h)=>sum + h.buyPrice * h.quantity, 0);
    const totalValue = holdings.reduce((sum, h)=>sum + h.currentPrice * h.quantity, 0);
    const totalProfit = totalValue - totalInvested;
    const totalRoi = totalInvested > 0 ? totalProfit / totalInvested * 100 : 0;
    if (!isLoaded) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: 'var(--bg-elevated)',
                    padding: 20,
                    borderRadius: 'var(--radius-lg)',
                    marginBottom: 24,
                    border: '1px solid var(--border)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        style: {
                            fontSize: '1rem',
                            marginBottom: 16
                        },
                        children: "Add Coin"
                    }, void 0, false, {
                        fileName: "[project]/components/tools/CryptoPortfolioTracker.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "form-group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "form-label",
                                        htmlFor: "port-coin-input",
                                        children: "Coin (e.g. BTC)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/tools/CryptoPortfolioTracker.tsx",
                                        lineNumber: 74,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        id: "port-coin-input",
                                        className: "form-input",
                                        type: "text",
                                        placeholder: "BTC",
                                        value: coin,
                                        onChange: (e)=>setCoin(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/components/tools/CryptoPortfolioTracker.tsx",
                                        lineNumber: 75,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tools/CryptoPortfolioTracker.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "form-group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "form-label",
                                        htmlFor: "port-qty-input",
                                        children: "Quantity"
                                    }, void 0, false, {
                                        fileName: "[project]/components/tools/CryptoPortfolioTracker.tsx",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        id: "port-qty-input",
                                        className: "form-input",
                                        type: "number",
                                        placeholder: "0.5",
                                        value: quantity,
                                        onChange: (e)=>setQuantity(e.target.value),
                                        min: "0",
                                        step: "any"
                                    }, void 0, false, {
                                        fileName: "[project]/components/tools/CryptoPortfolioTracker.tsx",
                                        lineNumber: 79,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tools/CryptoPortfolioTracker.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/tools/CryptoPortfolioTracker.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "form-group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "form-label",
                                        htmlFor: "port-buy-input",
                                        children: "Avg Buy Price"
                                    }, void 0, false, {
                                        fileName: "[project]/components/tools/CryptoPortfolioTracker.tsx",
                                        lineNumber: 84,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        id: "port-buy-input",
                                        className: "form-input",
                                        type: "number",
                                        placeholder: "60000",
                                        value: buyPrice,
                                        onChange: (e)=>setBuyPrice(e.target.value),
                                        min: "0",
                                        step: "any"
                                    }, void 0, false, {
                                        fileName: "[project]/components/tools/CryptoPortfolioTracker.tsx",
                                        lineNumber: 85,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tools/CryptoPortfolioTracker.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "form-group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "form-label",
                                        htmlFor: "port-curr-input",
                                        children: "Current Price (Optional)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/tools/CryptoPortfolioTracker.tsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        id: "port-curr-input",
                                        className: "form-input",
                                        type: "number",
                                        placeholder: "Current market price",
                                        value: currentPrice,
                                        onChange: (e)=>setCurrentPrice(e.target.value),
                                        min: "0",
                                        step: "any"
                                    }, void 0, false, {
                                        fileName: "[project]/components/tools/CryptoPortfolioTracker.tsx",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tools/CryptoPortfolioTracker.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/tools/CryptoPortfolioTracker.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            justifyContent: 'flex-end',
                            gap: 12,
                            marginTop: 8
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "form-select",
                                style: {
                                    width: 'auto'
                                },
                                value: currency,
                                onChange: (e)=>setCurrency(e.target.value),
                                "aria-label": "Select currency",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "₹",
                                        children: "₹ INR"
                                    }, void 0, false, {
                                        fileName: "[project]/components/tools/CryptoPortfolioTracker.tsx",
                                        lineNumber: 94,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "$",
                                        children: "$ USD"
                                    }, void 0, false, {
                                        fileName: "[project]/components/tools/CryptoPortfolioTracker.tsx",
                                        lineNumber: 95,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tools/CryptoPortfolioTracker.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn btn-primary btn-sm",
                                onClick: addHolding,
                                disabled: !coin || !buyPrice || !quantity,
                                children: "+ Add to Portfolio"
                            }, void 0, false, {
                                fileName: "[project]/components/tools/CryptoPortfolioTracker.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/tools/CryptoPortfolioTracker.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/tools/CryptoPortfolioTracker.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            holdings.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "result-box",
                        style: {
                            marginBottom: 24
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "result-grid",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "result-item",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "result-label",
                                            children: "Total Invested"
                                        }, void 0, false, {
                                            fileName: "[project]/components/tools/CryptoPortfolioTracker.tsx",
                                            lineNumber: 107,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "result-value",
                                            style: {
                                                fontSize: '1.2rem'
                                            },
                                            children: [
                                                currency,
                                                fmt(totalInvested)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/tools/CryptoPortfolioTracker.tsx",
                                            lineNumber: 108,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/tools/CryptoPortfolioTracker.tsx",
                                    lineNumber: 106,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "result-item",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "result-label",
                                            children: "Current Value"
                                        }, void 0, false, {
                                            fileName: "[project]/components/tools/CryptoPortfolioTracker.tsx",
                                            lineNumber: 111,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "result-value",
                                            style: {
                                                fontSize: '1.4rem'
                                            },
                                            children: [
                                                currency,
                                                fmt(totalValue)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/tools/CryptoPortfolioTracker.tsx",
                                            lineNumber: 112,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/tools/CryptoPortfolioTracker.tsx",
                                    lineNumber: 110,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "result-item",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "result-label",
                                            children: "Total P&L"
                                        }, void 0, false, {
                                            fileName: "[project]/components/tools/CryptoPortfolioTracker.tsx",
                                            lineNumber: 115,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `result-value ${totalProfit >= 0 ? 'positive' : 'negative'}`,
                                            style: {
                                                fontSize: '1.2rem'
                                            },
                                            children: [
                                                totalProfit >= 0 ? '+' : '',
                                                currency,
                                                fmt(totalProfit)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/tools/CryptoPortfolioTracker.tsx",
                                            lineNumber: 116,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/tools/CryptoPortfolioTracker.tsx",
                                    lineNumber: 114,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "result-item",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "result-label",
                                            children: "Total ROI"
                                        }, void 0, false, {
                                            fileName: "[project]/components/tools/CryptoPortfolioTracker.tsx",
                                            lineNumber: 121,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `result-value ${totalRoi >= 0 ? 'positive' : 'negative'}`,
                                            style: {
                                                fontSize: '1.2rem'
                                            },
                                            children: [
                                                totalRoi >= 0 ? '+' : '',
                                                totalRoi.toFixed(2),
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/tools/CryptoPortfolioTracker.tsx",
                                            lineNumber: 122,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/tools/CryptoPortfolioTracker.tsx",
                                    lineNumber: 120,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/tools/CryptoPortfolioTracker.tsx",
                            lineNumber: 105,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/tools/CryptoPortfolioTracker.tsx",
                        lineNumber: 104,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 12
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "section-label",
                                style: {
                                    marginBottom: 4
                                },
                                children: "Your Assets"
                            }, void 0, false, {
                                fileName: "[project]/components/tools/CryptoPortfolioTracker.tsx",
                                lineNumber: 131,
                                columnNumber: 13
                            }, this),
                            holdings.map((h)=>{
                                const invested = h.buyPrice * h.quantity;
                                const value = h.currentPrice * h.quantity;
                                const pl = value - invested;
                                const roi = invested > 0 ? pl / invested * 100 : 0;
                                const allocation = totalValue > 0 ? value / totalValue * 100 : 0;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: 'var(--bg-elevated)',
                                        padding: 16,
                                        borderRadius: 'var(--radius-md)',
                                        border: '1px solid var(--border)',
                                        display: 'grid',
                                        gridTemplateColumns: '1fr auto',
                                        gap: 16,
                                        alignItems: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: 8,
                                                        marginBottom: 8
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontWeight: 800,
                                                                fontSize: '1.1rem'
                                                            },
                                                            children: h.coin
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/tools/CryptoPortfolioTracker.tsx",
                                                            lineNumber: 143,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: '0.8rem',
                                                                color: 'var(--text-muted)'
                                                            },
                                                            children: [
                                                                h.quantity,
                                                                " coins"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/tools/CryptoPortfolioTracker.tsx",
                                                            lineNumber: 144,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "badge",
                                                            style: {
                                                                background: 'var(--bg-surface)',
                                                                border: '1px solid var(--border)',
                                                                color: 'var(--text-secondary)'
                                                            },
                                                            children: [
                                                                allocation.toFixed(1),
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/tools/CryptoPortfolioTracker.tsx",
                                                            lineNumber: 145,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/tools/CryptoPortfolioTracker.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'flex',
                                                        gap: 16,
                                                        fontSize: '0.85rem',
                                                        flexWrap: 'wrap'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        color: 'var(--text-muted)'
                                                                    },
                                                                    children: "Avg Buy:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/tools/CryptoPortfolioTracker.tsx",
                                                                    lineNumber: 148,
                                                                    columnNumber: 28
                                                                }, this),
                                                                " ",
                                                                currency,
                                                                fmt(h.buyPrice)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/tools/CryptoPortfolioTracker.tsx",
                                                            lineNumber: 148,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                gap: 6
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        color: 'var(--text-muted)'
                                                                    },
                                                                    children: "Current:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/tools/CryptoPortfolioTracker.tsx",
                                                                    lineNumber: 150,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "number",
                                                                    value: h.currentPrice || '',
                                                                    onChange: (e)=>updateCurrentPrice(h.id, e.target.value),
                                                                    style: {
                                                                        background: 'var(--bg-surface)',
                                                                        border: '1px solid var(--border)',
                                                                        borderRadius: 4,
                                                                        width: 80,
                                                                        padding: '2px 6px',
                                                                        fontSize: '0.8rem',
                                                                        color: 'var(--text-primary)'
                                                                    },
                                                                    "aria-label": `Update current price for ${h.coin}`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/tools/CryptoPortfolioTracker.tsx",
                                                                    lineNumber: 151,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/tools/CryptoPortfolioTracker.tsx",
                                                            lineNumber: 149,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        color: 'var(--text-muted)'
                                                                    },
                                                                    children: "Value:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/tools/CryptoPortfolioTracker.tsx",
                                                                    lineNumber: 159,
                                                                    columnNumber: 28
                                                                }, this),
                                                                " ",
                                                                currency,
                                                                fmt(value)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/tools/CryptoPortfolioTracker.tsx",
                                                            lineNumber: 159,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/tools/CryptoPortfolioTracker.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/tools/CryptoPortfolioTracker.tsx",
                                            lineNumber: 141,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                textAlign: 'right',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'flex-end',
                                                gap: 4
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: pl >= 0 ? 'positive' : 'negative',
                                                    style: {
                                                        fontWeight: 700,
                                                        fontSize: '1.1rem'
                                                    },
                                                    children: [
                                                        pl >= 0 ? '+' : '',
                                                        currency,
                                                        fmt(pl)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/tools/CryptoPortfolioTracker.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: roi >= 0 ? 'positive' : 'negative',
                                                    style: {
                                                        fontSize: '0.85rem',
                                                        fontWeight: 600
                                                    },
                                                    children: [
                                                        roi >= 0 ? '+' : '',
                                                        roi.toFixed(2),
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/tools/CryptoPortfolioTracker.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>removeHolding(h.id),
                                                    style: {
                                                        fontSize: '0.75rem',
                                                        color: 'var(--danger)',
                                                        marginTop: 4,
                                                        background: 'none',
                                                        border: 'none',
                                                        cursor: 'pointer',
                                                        opacity: 0.8
                                                    },
                                                    "aria-label": `Remove ${h.coin}`,
                                                    children: "Remove"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/tools/CryptoPortfolioTracker.tsx",
                                                    lineNumber: 169,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/tools/CryptoPortfolioTracker.tsx",
                                            lineNumber: 162,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, h.id, true, {
                                    fileName: "[project]/components/tools/CryptoPortfolioTracker.tsx",
                                    lineNumber: 140,
                                    columnNumber: 17
                                }, this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/tools/CryptoPortfolioTracker.tsx",
                        lineNumber: 130,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            holdings.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "info-banner",
                children: "💡 Your portfolio is empty. Add a coin above to start tracking. Data is saved locally in your browser."
            }, void 0, false, {
                fileName: "[project]/components/tools/CryptoPortfolioTracker.tsx",
                lineNumber: 179,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/tools/CryptoPortfolioTracker.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}