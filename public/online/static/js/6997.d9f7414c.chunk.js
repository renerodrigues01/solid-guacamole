"use strict";
(self.webpackChunksisalpay_client = self.webpackChunksisalpay_client || []).push([
    [6997], {
        6248: function(e, n, t) {
            t.d(n, {
                r: function() {
                    return m
                }
            });
            var i, a, r, l, o, s = t(7313),
                c = ["title", "titleId"];

            function d() {
                return d = Object.assign ? Object.assign.bind() : function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                    }
                    return e
                }, d.apply(this, arguments)
            }

            function u(e, n) {
                if (null == e) return {};
                var t, i, a = function(e, n) {
                    if (null == e) return {};
                    var t, i, a = {},
                        r = Object.keys(e);
                    for (i = 0; i < r.length; i++) t = r[i], n.indexOf(t) >= 0 || (a[t] = e[t]);
                    return a
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    for (i = 0; i < r.length; i++) t = r[i], n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (a[t] = e[t])
                }
                return a
            }

            function v(e, n) {
                var t = e.title,
                    v = e.titleId,
                    m = u(e, c);
                return s.createElement("svg", d({
                    viewBox: "0 0 62 62",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: n,
                    "aria-labelledby": v
                }, m), t ? s.createElement("title", {
                    id: v
                }, t) : null, i || (i = s.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M31.3726 12.28C32.7643 12.28 33.8926 13.4083 33.8926 14.8L33.8926 20.56C33.8926 21.9518 32.7643 23.08 31.3726 23.08C29.9808 23.08 28.8526 21.9518 28.8526 20.56L28.8526 14.8C28.8526 13.4083 29.9808 12.28 31.3726 12.28Z",
                    fill: "#EDA900"
                })), a || (a = s.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M31.3726 25.96C32.7643 25.96 33.8926 27.0882 33.8926 28.48L33.8926 46.84C33.8926 48.2317 32.7643 49.36 31.3726 49.36C29.9808 49.36 28.8526 48.2317 28.8526 46.84L28.8526 28.48C28.8526 27.0882 29.9808 25.96 31.3726 25.96Z",
                    fill: "#EDA900"
                })), r || (r = s.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M38.1997 47.2C38.1997 48.5917 37.0715 49.72 35.6797 49.72L27.0397 49.72C25.648 49.72 24.5197 48.5917 24.5197 47.2C24.5197 45.8082 25.648 44.68 27.0397 44.68L35.6797 44.68C37.0715 44.68 38.1997 45.8082 38.1997 47.2Z",
                    fill: "#EDA900"
                })), l || (l = s.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M33.8799 28.48C33.8799 29.8718 32.7516 31 31.3599 31L27.3999 31C26.0081 31 24.8799 29.8718 24.8799 28.48C24.8799 27.0882 26.0081 25.96 27.3999 25.96L31.3599 25.96C32.7516 25.96 33.8799 27.0882 33.8799 28.48Z",
                    fill: "#EDA900"
                })), o || (o = s.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M31.3598 59.08C46.6691 59.08 59.0798 46.6693 59.0798 31.36C59.0798 16.0507 46.6691 3.64001 31.3598 3.64001C16.0504 3.64001 3.63977 16.0507 3.63977 31.36C3.63977 46.6693 16.0504 59.08 31.3598 59.08ZM31.3598 61.96C48.2597 61.96 61.9598 48.2599 61.9598 31.36C61.9598 14.4601 48.2597 0.76001 31.3598 0.76001C14.4599 0.76001 0.759766 14.4601 0.759766 31.36C0.759766 48.2599 14.4599 61.96 31.3598 61.96Z",
                    fill: "#4F4F4F"
                })))
            }
            var m = s.forwardRef(v);
            t.p
        },
        924: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return s
                }
            });
            var i = t(2135),
                a = t(733),
                r = t(2072),
                l = t(3637),
                o = t(6417);

            function s(e) {
                var n = e.title,
                    t = e.description,
                    s = e.link_label,
                    c = e.link_url;
                return (0, o.jsx)(i.rU, {
                    to: c || "",
                    children: (0, o.jsxs)("div", {
                        className: "mo-card-payment",
                        children: [(0, o.jsx)("div", {
                            className: "mo-card-payment__title",
                            children: (0, o.jsx)("div", {
                                className: "h5",
                                dangerouslySetInnerHTML: {
                                    __html: l.Z.stripTag(n)
                                }
                            })
                        }), (0, o.jsxs)("div", {
                            className: "mo-card-payment__content",
                            children: [(0, o.jsx)(a.Z, {
                                content: n,
                                className: "body1 bold font-no-margin"
                            }), (0, o.jsx)(a.Z, {
                                content: t,
                                className: "body2 mo-card-payment__description"
                            }), (0, o.jsx)("div", {
                                className: "url",
                                children: (0, o.jsxs)("span", {
                                    className: "mo-link link-arrow force-hover middle",
                                    children: [s, (0, o.jsx)(r.r, {})]
                                })
                            })]
                        })]
                    })
                })
            }
        },
        7975: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return s
                }
            });
            var i = t(885),
                a = t(3061),
                r = t(7313),
                l = t(6417);

            function o(e) {
                var n = e.numPage,
                    t = void 0 === n ? 5 : n,
                    s = e.duration,
                    c = void 0 === s ? 0 : s,
                    d = e.variant,
                    u = void 0 === d ? o.VARIANTS.default : d,
                    v = e.activePage,
                    m = void 0 === v ? 0 : v,
                    f = e.onPageChange,
                    p = e.isRunning,
                    g = void 0 === p || p,
                    h = e.className,
                    Z = (0, r.useState)(),
                    x = (0, i.Z)(Z, 2),
                    j = x[0],
                    b = x[1];
                (0, r.useEffect)((function() {
                    b(m)
                }), [m]);
                if (t <= 1) return null;
                var _ = null;
                return c > 0 && (_ = {
                    transitionDuration: "".concat(c, "s")
                }), (0, l.jsx)("div", {
                    className: (0, a.default)("mo-line-paginator", u, h),
                    children: Array(null !== t && void 0 !== t ? t : 0).fill().map((function(e, n) {
                        return (0, l.jsx)("div", {
                            className: (0, a.default)("line", j === n && "active", c > 0 && "with-transition", g && "isRunning"),
                            onClick: function() {
                                return e = n, f && f(e), void b(e);
                                var e
                            },
                            children: (0, l.jsx)("div", {
                                className: "line-fill",
                                style: _
                            })
                        }, n)
                    }))
                })
            }
            o.VARIANTS = {
                primary: "primary",
                default: "default",
                white: "white",
                dark: "dark"
            };
            var s = o
        },
        2046: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return c
                }
            });
            var i = t(1413),
                a = (t(7313), t(7660)),
                r = t(8997),
                l = t(7320),
                o = t(733),
                s = t(6417);
            var c = function(e) {
                var n, t = e.image,
                    c = e.title,
                    d = e.content,
                    u = e.disclaimer,
                    v = e.link,
                    m = e.button1,
                    f = e.button2;
                return (0, s.jsxs)("div", {
                    className: "mo-news-modal",
                    children: [(0, s.jsx)(l.Z, (0, i.Z)((0, i.Z)({}, null === t || void 0 === t || null === (n = t.data) || void 0 === n ? void 0 : n.attributes), {}, {
                        className: "news-image",
                        objectFit: "cover"
                    })), (0, s.jsxs)("div", {
                        className: "news-container",
                        children: [(0, s.jsxs)("div", {
                            className: "scrollable",
                            children: [(0, s.jsx)(o.Z, {
                                content: c,
                                className: "news-title"
                            }), (0, s.jsx)(o.Z, {
                                content: d,
                                className: "news-content mb-24"
                            }), (null === v || void 0 === v ? void 0 : v.title) && (0, s.jsx)(r.Z, (0, i.Z)((0, i.Z)({}, v), {}, {
                                className: "mb-24"
                            })), (0, s.jsx)(o.Z, {
                                content: u,
                                className: "news-disclaimer"
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "action-row",
                            children: [m && (0, s.jsx)(a.Z, (0, i.Z)({}, m)), f && (0, s.jsx)(a.Z, (0, i.Z)({}, f))]
                        })]
                    })]
                })
            }
        },
        3637: function(e, n) {
            var t = {
                stripTag: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return e ? e.replace(/(<([^>]+)>)/gi, "") : ""
                }
            };
            n.Z = t
        },
        6997: function(e, n, t) {
            t.r(n), t.d(n, {
                default: function() {
                    return L
                },
                ssr: function() {
                    return D
                }
            });
            var i = t(4165),
                a = t(5861),
                r = t(885),
                l = t(7313),
                o = t(1413),
                s = t(733),
                c = t(7660),
                d = t(6667),
                u = t(3061),
                v = t(8997),
                m = t(6417);
            var f = function(e) {
                    var n, t = e.id,
                        i = e.card_image,
                        a = e.card_link_label,
                        o = e.card_link_target_blank,
                        c = e.card_link_url_id,
                        d = e.card_title,
                        f = e.isActive,
                        p = e.order,
                        g = e.isRunning,
                        h = e.progressbarDuration,
                        Z = void 0 === h ? 5 : h,
                        x = e.openPopup,
                        j = (0, l.useState)(!1),
                        b = (0, r.Z)(j, 2),
                        _ = b[0],
                        N = b[1];
                    (0, l.useEffect)((function() {
                        N(f)
                    }), [f]);
                    var w = null === i || void 0 === i || null === (n = i.data) || void 0 === n ? void 0 : n.attributes,
                        y = function(e) {
                            return null !== e && void 0 !== e && e.startsWith("http") ? e : "/cms" + e
                        };
                    return (0, m.jsxs)("div", {
                        className: (0, u.default)("mo-news-card", _ && "active", g && "isRunning"),
                        style: {
                            backgroundImage: "".concat("linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%)", ", url(").concat(y(null === w || void 0 === w ? void 0 : w.url), ")"),
                            order: p
                        },
                        "data-order": p,
                        children: [(0, m.jsx)("div", {
                            className: "progress-bar",
                            children: (0, m.jsx)("span", {
                                className: "progress-bar-fill",
                                style: {
                                    transitionDuration: "".concat(Z, "s")
                                }
                            })
                        }), (0, m.jsx)("div", {
                            className: "space",
                            children: "\xa0"
                        }), (0, m.jsx)(s.Z, {
                            className: "card-title",
                            content: d
                        }), (0, m.jsx)(v.Z, {
                            className: (0, u.default)("stretched-link", "force-hover"),
                            title: a,
                            target_blank: o,
                            url_id: c,
                            variant: v.Z.VARIANTS.LINKARROW,
                            variant_color: v.Z.VARIANT_COLOR.PRIMARY,
                            dimension: v.Z.DIMENSION.BIG,
                            onClick: function() {
                                x && x(t)
                            }
                        })]
                    })
                },
                p = t(7975),
                g = t(6308),
                h = t(2046),
                Z = t(903),
                x = t(8472);
            var j = function(e) {
                    var n, t = e.background_color,
                        v = e.title,
                        j = e.newsList,
                        b = e.duration,
                        _ = e.bottomUrl,
                        N = (0, l.useRef)(null),
                        w = (0, Z.U2)(),
                        y = (0, Z.BF)(),
                        k = (0, l.useState)(0),
                        C = (0, r.Z)(k, 2),
                        E = C[0],
                        R = C[1],
                        P = (0, l.useState)(!1),
                        S = (0, r.Z)(P, 2),
                        A = S[0],
                        I = S[1];
                    (0, l.useEffect)((function() {
                        if (j) return setTimeout((function() {
                                O()
                            }), 500),
                            function() {
                                null !== N && void 0 !== N && N.current && clearTimeout(N.current)
                            }
                    }), [E, j]);
                    var O = function() {
                            null !== N && void 0 !== N && N.current && clearTimeout(N.current), (0, l.startTransition)((function() {
                                N.current = setTimeout((function() {
                                    R(E + 1 < (null === j || void 0 === j ? void 0 : j.length) ? E + 1 : 0)
                                }), 1e3 * b), I(!0)
                            }))
                        },
                        T = {
                            populate: {
                                image: "*",
                                link: "*",
                                button1: "*",
                                button2: "*",
                                news_tags: "*"
                            },
                            fields: ["title", "content", "disclaimer"]
                        },
                        L = function() {
                            var e = (0, a.Z)((0, i.Z)().mark((function e(n) {
                                var t, a;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, w.show(), clearTimeout(N.current), I(!1), e.next = 5, g.Z.getCollectionEntry("news-item", n, T);
                                        case 5:
                                            a = e.sent, x.H.openPopup(y, (0, o.Z)((0, o.Z)({}, x.H.DefaultProps.NewsModal), {}, {
                                                children: (0, m.jsx)(h.Z, (0, o.Z)({}, null === a || void 0 === a || null === (t = a.data) || void 0 === t ? void 0 : t.attributes)),
                                                onClose: function() {
                                                    return O()
                                                },
                                                classNameContent: "d-flex"
                                            })), e.next = 12;
                                            break;
                                        case 9:
                                            e.prev = 9, e.t0 = e.catch(0), console.log("Error getting news-item id[".concat(n, "]"));
                                        case 12:
                                            return e.prev = 12, w.hide(), e.finish(12);
                                        case 15:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 9, 12, 15]
                                ])
                            })));
                            return function(n) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        D = function(e) {
                            return e + 1 - E > 0 ? e + 1 - E : (null === j || void 0 === j ? void 0 : j.length) + e + 1 - E
                        };
                    return (0, m.jsx)(m.Fragment, {
                        children: (0, m.jsxs)(d.Z, {
                            className: (0, u.default)("mo-news"),
                            style: {
                                background: null !== t && void 0 !== t ? t : ""
                            },
                            children: [(0, m.jsx)(s.Z, {
                                className: "title",
                                content: v
                            }), (0, m.jsx)("div", {
                                className: "mo-news-container",
                                children: null === j || void 0 === j || null === (n = j.map) || void 0 === n ? void 0 : n.call(j, (function(e, n) {
                                    return (0, m.jsx)(f, (0, o.Z)((0, o.Z)({
                                        order: D(n)
                                    }, null === e || void 0 === e ? void 0 : e.attributes), {}, {
                                        id: null === e || void 0 === e ? void 0 : e.id,
                                        isActive: n === E,
                                        isRunning: A,
                                        progressbarDuration: b,
                                        openPopup: L
                                    }), "item_".concat(n))
                                }))
                            }), (0, m.jsx)(p.Z, {
                                activePage: E,
                                onPageChange: function(e) {
                                    R(e)
                                },
                                isRunning: A,
                                duration: b
                            }), (0, m.jsx)("div", {
                                className: "mo-news-actions",
                                children: _ && 0 !== Object.keys(_).length && (0, m.jsx)(c.Z, (0, o.Z)({}, _))
                            })]
                        })
                    })
                },
                b = t(5799),
                _ = t(4466),
                N = t(7541),
                w = t(3803),
                y = t(7320),
                k = t(7701),
                C = t(6248),
                E = t(5762),
                R = t(924);

            function P(e) {
                var n = e.payment_cards;
                return (0, m.jsx)("div", {
                    className: "mo-hero-payment-card-wrapper",
                    children: (0, m.jsx)(d.Z, {
                        children: (0, m.jsx)(w.Z, {
                            nowrap: !0,
                            children: null === n || void 0 === n ? void 0 : n.map((function(e) {
                                return (0, m.jsx)(N.Z, {
                                    xs: "8",
                                    md: "4",
                                    lg: "2",
                                    children: (0, m.jsx)(R.Z, (0, o.Z)({}, e))
                                }, e.title)
                            }))
                        })
                    })
                })
            }

            function S(e) {
                var n = e.slides,
                    t = (0, l.useState)(0),
                    i = (0, r.Z)(t, 2),
                    a = i[0],
                    s = i[1];
                return (0, l.useEffect)((function() {
                    if (n.length > 1) {
                        var e = setInterval((function() {
                            s(a + 1 >= n.length ? 0 : a + 1)
                        }), 5e3);
                        return function() {
                            return clearInterval(e)
                        }
                    }
                }), [a, n.length]), (0, l.useEffect)((function() {
                    s(0)
                }), [n]), (0, m.jsx)("div", {
                    className: "slides-wrapper",
                    children: null === n || void 0 === n ? void 0 : n.map((function(e, t) {
                        return (0, l.createElement)(A, (0, o.Z)((0, o.Z)({}, e), {}, {
                            activeSlide: a,
                            key: t,
                            index: t,
                            numPage: n.length,
                            setActiveSlide: s
                        }))
                    }))
                })
            }

            function A(e) {
                var n, t, i, a = e.background,
                    r = e.background_mobile,
                    l = e.image,
                    v = e.title,
                    f = e.content,
                    g = e.additional_content,
                    h = e.url,
                    j = e.custom_action,
                    b = e.url_title,
                    _ = e.url_target_blank,
                    R = e.url_id,
                    P = e.activeSlide,
                    S = e.numPage,
                    A = e.setActiveSlide,
                    I = e.index,
                    O = e.button_variant,
                    T = e.button_style,
                    L = e.loader_variant,
                    D = e.background_color,
                    F = e.image_object_fit,
                    M = void 0 === F ? "cover" : F,
                    B = e.image_object_position,
                    H = void 0 === B ? "center" : B,
                    V = (0, Z.BF)();
                return (0, m.jsxs)("div", {
                    className: (0, u.default)("slide", I === P && "active"),
                    style: {
                        background: D || null
                    },
                    children: [((null === a || void 0 === a ? void 0 : a.data) || (null === r || void 0 === r ? void 0 : r.data)) && !D && (0, m.jsxs)("picture", {
                        className: "background",
                        children: [(0, m.jsx)("source", {
                            media: "(max-width:".concat(E.Z.BREAKPOINTS.md, "px)"),
                            srcSet: k.Z.generateSrcSet((0, o.Z)({}, null === r || void 0 === r || null === (n = r.data) || void 0 === n ? void 0 : n.attributes.formats))
                        }), (0, m.jsx)(y.Z, (0, o.Z)((0, o.Z)({}, null === a || void 0 === a || null === (t = a.data) || void 0 === t ? void 0 : t.attributes), {}, {
                            className: "background",
                            objectFit: "cover",
                            loading: "eager"
                        }))]
                    }), (0, m.jsx)(d.Z, {
                        children: (0, m.jsxs)(w.Z, {
                            nopadding: !0,
                            children: [(0, m.jsx)(N.Z, {
                                md: "1",
                                className: "hide-xs hide-sm"
                            }), (0, m.jsxs)(N.Z, {
                                xs: "12",
                                md: "6",
                                lg: "5",
                                className: "slide-content",
                                children: [(0, m.jsx)(s.Z, {
                                    className: "title mb-16",
                                    content: v
                                }), b && (0, m.jsx)("div", {
                                    className: "mo-hero-hp-actions",
                                    children: (0, m.jsx)(c.Z, {
                                        url: h,
                                        target_blank: _,
                                        url_id: R,
                                        custom_action: j,
                                        variant: O,
                                        variant_color: T,
                                        children: b
                                    })
                                }), (0, m.jsx)(s.Z, {
                                    className: "disclamer body4 mt-16",
                                    content: f,
                                    onClick: function(e) {
                                        e.preventDefault();
                                        var n = e.target.closest("a");
                                        n && e.currentTarget.contains(n) && x.H.openPopup(V, (0, o.Z)((0, o.Z)({}, x.H.DefaultProps.HeroPopup), {}, {
                                            children: (0, m.jsxs)("div", {
                                                className: "hero-popup-content",
                                                children: [(0, m.jsx)("div", {
                                                    className: "image-container",
                                                    style: {
                                                        textAlign: "center",
                                                        marginBottom: "37px"
                                                    },
                                                    children: (0, m.jsx)(C.r, {})
                                                }), (0, m.jsx)(s.Z, {
                                                    content: g
                                                })]
                                            })
                                        }))
                                    }
                                }), S > 1 && (0, m.jsx)(p.Z, {
                                    duration: 5,
                                    variant: L,
                                    numPage: S,
                                    activePage: P,
                                    onPageChange: function(e) {
                                        return A(e)
                                    }
                                })]
                            }), (0, m.jsx)(N.Z, {
                                md: "5",
                                lg: "5",
                                className: "hide-xs hide-sm d-flex image-col",
                                nopadding: !0,
                                children: (0, m.jsx)(y.Z, (0, o.Z)((0, o.Z)({}, null === l || void 0 === l || null === (i = l.data) || void 0 === i ? void 0 : i.attributes), {}, {
                                    className: "visual",
                                    objectFit: M,
                                    objectPosition: H,
                                    loading: "eager"
                                }))
                            })]
                        })
                    })]
                })
            }
            var I = t(9898),
                O = {
                    "homepage.hero-home-page": function(e) {
                        var n = e.payment_cards,
                            t = void 0 === n ? [] : n,
                            i = e.slides,
                            a = void 0 === i ? [] : i,
                            r = (0, Z.aF)().current;
                        return (0, m.jsxs)("div", {
                            className: (0, u.default)("mo-hero-homepage", r.authenticated && "authenticated"),
                            children: [(0, m.jsx)(S, {
                                slides: a
                            }), (0, m.jsx)(P, {
                                payment_cards: t
                            })]
                        })
                    },
                    "homepage.transactions-widget": l.lazy((function() {
                        return Promise.all([t.e(2783), t.e(7167), t.e(7742)]).then(t.bind(t, 7167))
                    })),
                    "homepage.news": j
                },
                T = {
                    populate: {
                        card_image: "*"
                    },
                    fields: ["card_link_base_url", "card_link_label", "card_link_target_blank", "card_link_url_id", "card_title", "news_id"],
                    sort: ["order:desc"],
                    pagination: {
                        limit: 5
                    }
                };

            function L() {
                var e, n = (0, _.Z)("home", {
                        data: {}
                    }),
                    t = (0, r.Z)(n, 2),
                    i = t[0],
                    a = t[1],
                    o = (0, _.Z)("homepage_news", {
                        data: []
                    }),
                    s = (0, r.Z)(o, 2),
                    c = s[0],
                    d = s[1],
                    u = (0, Z.aF)().current;
                (0, l.useEffect)((function() {
                    (0, I.oO)(), g.Z.getCollection("news-item", T).then((function(e) {
                        (0, l.startTransition)((function() {
                            return d(e)
                        }))
                    })).catch((function(e) {
                        console.log("Errore recupero News")
                    }))
                }), []), (0, l.useEffect)((function() {
                    if (!u.sessionIsLoading) {
                        var e = u.authenticated;
                        (0, l.startTransition)((function() {
                            g.Z.getSingleType("home" + (e ? "-loggato" : "")).then((function(n) {
                                var t, i, r;
                                e && (null === n || void 0 === n || null === (t = n.data) || void 0 === t || null === (i = t.attributes) || void 0 === i || null === (r = i.content) || void 0 === r || r.forEach((function(e) {
                                    var n, t;
                                    "homepage.hero-home-page" === e.__component && (null === (n = e.slides) || void 0 === n ? void 0 : n.length) > 0 && (e.slides[0].title = null === (t = e.slides[0].title) || void 0 === t ? void 0 : t.replace("{name}", u.name))
                                })));
                                a(n)
                            })).catch((function(e) {
                                console.log("Errore")
                            }))
                        }))
                    }
                }), [u.authenticated, u.sessionIsLoading]);
                var v = i.data.attributes;
                return null === v || void 0 === v || null === (e = v.content) || void 0 === e || e.forEach((function(e) {
                    "homepage.news" === e.__component && (e.newsList = null === c || void 0 === c ? void 0 : c.data)
                })), (0, m.jsx)(b.Z, {
                    attributes: v,
                    additional_components: O,
                    className: "page-home"
                })
            }

            function D(e) {
                return F.apply(this, arguments)
            }

            function F() {
                return (F = (0, a.Z)((0, i.Z)().mark((function e(n) {
                    return (0, i.Z)().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, g.Z.getSingleType("home");
                            case 3:
                                return e.t0 = e.sent, e.next = 6, g.Z.getCollection("news-item", T);
                            case 6:
                                return e.t1 = e.sent, e.t2 = {
                                    home: e.t0,
                                    homepage_news: e.t1
                                }, e.abrupt("return", {
                                    props: e.t2
                                });
                            case 11:
                                return e.prev = 11, e.t3 = e.catch(0), e.abrupt("return", {
                                    notFound: !0
                                });
                            case 14:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 11]
                    ])
                })))).apply(this, arguments)
            }
        }
    }
]);