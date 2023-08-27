"use strict";
(self.webpackChunksisalpay_client = self.webpackChunksisalpay_client || []).push([
    [7920], {
        7920: function(l, e, n) {
            n.r(e), n.d(e, {
                default: function() {
                    return g
                }
            });
            var i = n(1413),
                r = n(885),
                t = n(7660),
                a = n(7541),
                o = n(3803),
                s = n(733),
                d = n(7313),
                c = n(7320),
                u = n(2135),
                v = n(3061),
                x = n(6417);

            function h(l) {
                var e, n = l.url,
                    r = l.logo_color,
                    t = l.logo,
                    a = l.id,
                    o = l.className,
                    s = l.variant,
                    d = (0, x.jsx)("div", {
                        className: (0, v.default)("mo-card-servizi", o && o),
                        style: {
                            background: r || null
                        },
                        children: (0, x.jsx)(c.Z, (0, i.Z)((0, i.Z)({}, null === t || void 0 === t || null === (e = t.data) || void 0 === e ? void 0 : e.attributes), {}, {
                            objectFit: "contain",
                            fixedWidth: "64",
                            fixedHeight: "64"
                        }))
                    });
                return "notClickable" === s ? (0, x.jsx)(x.Fragment, {
                    children: d
                }) : (0, x.jsx)(u.rU, {
                    to: n || "",
                    id: "cardBox-" + a,
                    children: d
                })
            }
            var m = n(860);

            function g(l) {
                var e = l.title,
                    n = l.button,
                    c = l.background_color,
                    u = void 0 === c ? null : c,
                    g = l.logo_color,
                    f = l.list_cards,
                    p = l.variant,
                    j = void 0 === p ? "default" : p,
                    Z = l.max_card_per_row_desktop,
                    _ = (0, d.useState)([]),
                    b = (0, r.Z)(_, 2),
                    k = b[0],
                    w = b[1],
                    F = (0, m.Z)();
                (0, d.useEffect)((function() {
                    "multiple-rows" === j && ["lg", "xl"].includes(F) ? w(N(f, Z)) : w(f)
                }), [f, Z, F]);
                var N = function(l, e) {
                        for (var n = 0, i = [], r = [], t = l.length - 1; t >= 0; t--) n < e && (i.push(l[t]), n++, i.length !== e && 0 !== t || (i.reverse(), r.push(i), i = [], n = 0));
                        var a = [];
                        return r.forEach((function(l) {
                            l.forEach((function(l) {
                                a.push(l)
                            }))
                        })), a
                    },
                    y = (0, x.jsx)(x.Fragment, {
                        children: (0, x.jsx)(o.Z, {
                            className: (0, v.default)("container-cards", f.length <= 3 && "short", "row-reverse"),
                            children: null === k || void 0 === k ? void 0 : k.map((function(l, e) {
                                var n = 100 / Z;
                                return (0, x.jsx)("div", {
                                    style: {
                                        flexBasis: n + "%",
                                        padding: "0 8px"
                                    },
                                    children: (0, d.createElement)(h, (0, i.Z)((0, i.Z)({}, l), {}, {
                                        logo_color: g,
                                        key: l.id,
                                        id: e,
                                        className: "multiple-row",
                                        variant: "notClickable"
                                    }))
                                }, e)
                            }))
                        })
                    }),
                    C = (0, x.jsx)(x.Fragment, {
                        children: (0, x.jsx)(o.Z, {
                            className: (0, v.default)("container-cards", "multiple-rows" === j && "wrapper", (null === f || void 0 === f ? void 0 : f.length) <= 3 && "container-cards short"),
                            children: null === f || void 0 === f ? void 0 : f.map((function(l, e) {
                                return (0, x.jsx)(a.Z, {
                                    xs: "multiple-rows" === j ? "3" : "4",
                                    md: "multiple-rows" === j ? "1" : "2",
                                    lg: "1",
                                    children: (0, d.createElement)(h, (0, i.Z)((0, i.Z)({}, l), {}, {
                                        logo_color: g,
                                        key: l.id,
                                        id: e,
                                        variant: "multiple-rows" === j ? "notClickable" : null,
                                        className: (0, v.default)("multiple-rows" === j && "multiple-row")
                                    }))
                                }, e)
                            }))
                        })
                    });
                return (0, x.jsx)(x.Fragment, {
                    children: (null === k || void 0 === k ? void 0 : k.length) >= 1 && (0, x.jsxs)("div", {
                        className: (0, v.default)("mo-box-cards"),
                        style: {
                            background: u || null
                        },
                        children: [(0, x.jsx)(a.Z, {
                            xs: "12",
                            children: (0, x.jsx)(s.Z, {
                                className: "titolo",
                                content: e
                            })
                        }), "multiple-rows" === j && ["lg", "xl"].includes(F) ? (0, x.jsx)(x.Fragment, {
                            children: Z === (null === k || void 0 === k ? void 0 : k.length) ? (0, x.jsx)(x.Fragment, {
                                children: y
                            }) : (0, x.jsx)(x.Fragment, {
                                children: (0, x.jsxs)(o.Z, {
                                    children: [(0, x.jsx)(a.Z, {
                                        xs: "0",
                                        lg: "2"
                                    }), (0, x.jsx)(a.Z, {
                                        xs: "0",
                                        lg: "8",
                                        nopadding: !0,
                                        children: y
                                    }), (0, x.jsx)(a.Z, {
                                        xs: "0",
                                        lg: "2"
                                    })]
                                })
                            })
                        }) : (0, x.jsx)(x.Fragment, {
                            children: C
                        }), n && (0, x.jsx)(a.Z, {
                            xs: "12",
                            className: "container-button",
                            children: (0, x.jsx)(t.Z, {
                                title: null === n || void 0 === n ? void 0 : n.title,
                                url: null === n || void 0 === n ? void 0 : n.url,
                                target_blank: null === n || void 0 === n ? void 0 : n.target_blank,
                                url_id: null === n || void 0 === n ? void 0 : n.url_id,
                                variant: null === n || void 0 === n ? void 0 : n.variant,
                                variant_color: null === n || void 0 === n ? void 0 : n.variant_color
                            })
                        })]
                    })
                })
            }
        }
    }
]);