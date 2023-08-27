"use strict";
(self.webpackChunksisalpay_client = self.webpackChunksisalpay_client || []).push([
    [6652], {
        7975: function(n, a, e) {
            e.d(a, {
                Z: function() {
                    return o
                }
            });
            var t = e(885),
                i = e(3061),
                r = e(7313),
                l = e(6417);

            function u(n) {
                var a = n.numPage,
                    e = void 0 === a ? 5 : a,
                    o = n.duration,
                    c = void 0 === o ? 0 : o,
                    s = n.variant,
                    d = void 0 === s ? u.VARIANTS.default : s,
                    f = n.activePage,
                    v = void 0 === f ? 0 : f,
                    h = n.onPageChange,
                    m = n.isRunning,
                    g = void 0 === m || m,
                    p = n.className,
                    x = (0, r.useState)(),
                    N = (0, t.Z)(x, 2),
                    b = N[0],
                    j = N[1];
                (0, r.useEffect)((function() {
                    j(v)
                }), [v]);
                if (e <= 1) return null;
                var A = null;
                return c > 0 && (A = {
                    transitionDuration: "".concat(c, "s")
                }), (0, l.jsx)("div", {
                    className: (0, i.default)("mo-line-paginator", d, p),
                    children: Array(null !== e && void 0 !== e ? e : 0).fill().map((function(n, a) {
                        return (0, l.jsx)("div", {
                            className: (0, i.default)("line", b === a && "active", c > 0 && "with-transition", g && "isRunning"),
                            onClick: function() {
                                return n = a, h && h(n), void j(n);
                                var n
                            },
                            children: (0, l.jsx)("div", {
                                className: "line-fill",
                                style: A
                            })
                        }, a)
                    }))
                })
            }
            u.VARIANTS = {
                primary: "primary",
                default: "default",
                white: "white",
                dark: "dark"
            };
            var o = u
        },
        2651: function(n, a, e) {
            e.d(a, {
                Z: function() {
                    return h
                }
            });
            var t = e(885),
                i = e(3061),
                r = e(2279),
                l = e.n(r),
                u = e(7313),
                o = e(7975),
                c = e(8805),
                s = e(6417);

            function d(n) {
                var a = n.numPage,
                    e = void 0 === a ? 5 : a,
                    r = n.variant,
                    l = void 0 === r ? d.VARIANTS.default : r,
                    o = n.activePage,
                    f = void 0 === o ? 0 : o,
                    v = n.onPageChange,
                    h = n.className,
                    m = (0, u.useState)(),
                    g = (0, t.Z)(m, 2),
                    p = g[0],
                    x = g[1];
                (0, u.useEffect)((function() {
                    x(f)
                }), [f]);
                var N = function(n) {
                    v && v(n), x(n)
                };
                return (0, s.jsxs)("div", {
                    className: (0, i.default)("mo-button-paginator", l, h),
                    children: [(0, s.jsx)("button", {
                        className: "mo-button-paginator__prev",
                        disabled: f <= 0,
                        onClick: function() {
                            N(Math.max(0, p - 1))
                        },
                        "aria-label": "Pagina precedente",
                        type: "button",
                        children: (0, s.jsx)(c.r, {})
                    }), (0, s.jsx)("button", {
                        className: "mo-button-paginator__next",
                        onClick: function() {
                            N(Math.min(e - 1, p + 1))
                        },
                        "aria-label": "Pagina successiva",
                        disabled: p >= e - 1,
                        type: "button",
                        children: (0, s.jsx)(c.r, {})
                    })]
                })
            }
            d.VARIANTS = {
                primary: "primary",
                secondary: "secondary",
                default: "default"
            };
            var f = d;

            function v(n) {
                var a = n.className,
                    e = n.entries,
                    r = void 0 === e ? [] : e,
                    c = n.pagination_variant,
                    d = void 0 === c ? v.PAGINATION_VARIANT.lines : c,
                    h = n.pagination_variant_style,
                    m = n.loop_active,
                    g = n.duration,
                    p = (0, u.useState)(0),
                    x = (0, t.Z)(p, 2),
                    N = x[0],
                    b = x[1],
                    j = (0, u.useRef)(null),
                    A = (0, u.useRef)(null);

                function Z(n) {
                    var a = (A.current.scrollWidth - A.current.clientWidth) / (r.length - 1) * n;
                    A.current.scrollTo({
                        left: a,
                        behavior: "smooth"
                    }), b(Math.min(n, r.length))
                }
                var k = (0, u.useCallback)(l()((function() {
                    var n = Math.round(A.current.scrollLeft / (A.current.scrollWidth - A.current.clientWidth) * (r.length - 1));
                    b(Math.min(n, r.length))
                }), 100), [r]);
                (0, u.useEffect)((function() {
                    if (r && m) return setTimeout((function() {
                            P()
                        }), 500),
                        function() {
                            null !== j && void 0 !== j && j.current && clearTimeout(j.current)
                        }
                }), [N, r]);
                var P = function() {
                    null !== j && void 0 !== j && j.current && clearTimeout(j.current), (0, u.startTransition)((function() {
                        j.current = setTimeout((function() {
                            Z(N + 1 < (null === r || void 0 === r ? void 0 : r.length) ? N + 1 : 0)
                        }), 1e3 * g)
                    }))
                };
                return r && 0 !== r.length ? (0, s.jsxs)("div", {
                    className: (0, i.default)("mo-paginator-container", a),
                    children: [(0, s.jsx)("div", {
                        className: "wrapper",
                        ref: A,
                        onScroll: k,
                        children: r.map((function(n) {
                            return n
                        }))
                    }), d && d !== v.PAGINATION_VARIANT.lines ? (0, s.jsx)(f, {
                        numPage: r.length,
                        onPageChange: function(n) {
                            return Z(n)
                        },
                        activePage: N,
                        variant: h
                    }) : (0, s.jsx)(o.Z, {
                        numPage: r.length,
                        onPageChange: function(n) {
                            return Z(n)
                        },
                        activePage: N,
                        variant: h
                    })]
                }) : null
            }
            v.PAGINATION_VARIANT = {
                lines: "lines",
                buttons: "buttons"
            };
            var h = v
        },
        6652: function(n, a, e) {
            e.r(a), e.d(a, {
                default: function() {
                    return h
                }
            });
            var t = e(1413),
                i = e(5987),
                r = e(3061),
                l = (e(7313), e(5568)),
                u = e(7541),
                o = e(6667),
                c = e(3803),
                s = e(2651),
                d = e(733),
                f = e(6417),
                v = ["background"];

            function h(n) {
                var a = n.title,
                    e = n.background_color,
                    h = n.cards,
                    m = void 0 === h ? [] : h;
                if (!m || 0 === m.length) return null;
                var g = [],
                    p = !0;
                return m.forEach((function(n) {
                    var a;
                    null !== (a = n.background) && void 0 !== a && a.data ? (g.push([n]), p = !0) : p ? (g.push([n]), p = !1) : (g[g.length - 1].push(n), p = !0)
                })), (0, f.jsx)("div", {
                    className: "mo-mansonery",
                    style: {
                        backgroundColor: e
                    },
                    children: (0, f.jsxs)(o.Z, {
                        children: [(0, f.jsx)(c.Z, {
                            children: (0, f.jsx)(u.Z, {
                                xs: "12",
                                children: (0, f.jsx)(d.Z, {
                                    content: a
                                })
                            })
                        }), (0, f.jsx)(c.Z, {
                            className: "cards-wrapper",
                            nopadding: !0,
                            children: (0, f.jsx)(u.Z, {
                                xs: "12",
                                children: (0, f.jsx)(s.Z, {
                                    entries: g.map((function(n, a) {
                                        return (0, f.jsx)(u.Z, {
                                            xs: "8",
                                            md: "4",
                                            lg: "3",
                                            className: (0, r.default)("column", n.length > 1 && "split"),
                                            children: (0, f.jsx)(c.Z, {
                                                children: n.map((function(n, a) {
                                                    var e = n.background,
                                                        r = (0, i.Z)(n, v);
                                                    return (0, f.jsx)(u.Z, {
                                                        xs: "12",
                                                        className: null !== e && void 0 !== e && e.data ? "full" : "half",
                                                        children: (0, f.jsx)(l.Z, (0, t.Z)((0, t.Z)({}, r), {}, {
                                                            background_image: e,
                                                            className: "link-mobile"
                                                        }))
                                                    }, a)
                                                }))
                                            })
                                        }, a)
                                    }))
                                })
                            })
                        })]
                    })
                })
            }
        }
    }
]);