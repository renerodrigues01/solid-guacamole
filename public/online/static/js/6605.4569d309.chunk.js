"use strict";
(self.webpackChunksisalpay_client = self.webpackChunksisalpay_client || []).push([
    [6605], {
        6268: function(t, e, n) {
            n.d(e, {
                cE: function() {
                    return b
                },
                uV: function() {
                    return f
                },
                zE: function() {
                    return v
                }
            });
            var i = n(885),
                o = n(1413),
                a = n(3061),
                s = n(7313),
                l = n(5762),
                r = n(7701),
                c = n(9898),
                u = n(7660),
                m = n(7320),
                d = n(733),
                _ = n(1201),
                g = n(6417);

            function v(t) {
                var e, n = t.background_image;
                return (0, g.jsx)(m.Z, (0, o.Z)((0, o.Z)({}, null === n || void 0 === n || null === (e = n.data) || void 0 === e ? void 0 : e.attributes), {}, {
                    objectFit: "cover",
                    className: "background-image"
                }))
            }

            function b(t) {
                var e = t.content,
                    n = t.button1,
                    i = t.button2,
                    a = t.footer_content;
                return (0, g.jsxs)(g.Fragment, {
                    children: [(0, g.jsx)(d.Z, {
                        className: "met_content_container",
                        content: e
                    }), (n || i) && (0, g.jsxs)("div", {
                        className: "met_button_row",
                        children: [n && (0, g.jsx)(u.Z, (0, o.Z)({}, n)), i && (0, g.jsx)(u.Z, (0, o.Z)({}, i))]
                    }), (0, g.jsx)(d.Z, {
                        content: a,
                        className: "met-footer-content"
                    })]
                })
            }

            function f(t) {
                var e, n, u, d, v, b = t.image,
                    f = t.image_mobile,
                    x = t.image_object_position,
                    j = t.image_object_fit,
                    h = t.image_max_height,
                    Z = t.breakpoint,
                    p = void 0 === Z ? "lg" : Z,
                    N = t.visual_animation,
                    k = t.image_round_corners,
                    w = (0, s.useRef)(),
                    E = (0, s.useState)(!1),
                    S = (0, i.Z)(E, 2),
                    y = S[0],
                    A = S[1],
                    F = N && N !== _.Z.VISUAL_ANIMATIONS.NONE;
                return (0, s.useEffect)((function() {
                    if (F) {
                        var t = function() {
                            A((0, c.v4)(w.current, !0))
                        };
                        if (!y) return A((0, c.v4)(w.current, !0)), window.addEventListener("scroll", t),
                            function() {
                                return window.removeEventListener("scroll", t)
                            };
                        window.removeEventListener("scroll", t)
                    }
                }), [y, F]), (0, g.jsxs)("picture", {
                    className: (0, a.default)(F && "animate", F && y && "animation-fade-in-from-top", k && "met_visual__image-round-corners"),
                    ref: w,
                    children: [(null === f || void 0 === f || null === (e = f.data) || void 0 === e ? void 0 : e.attributes) && (0, g.jsx)("source", {
                        media: "(max-width:".concat(l.Z.BREAKPOINTS[p], "px)"),
                        srcSet: r.Z.generateSrcSet(null !== f && void 0 !== f && null !== (n = f.data) && void 0 !== n && n.attributes.formats ? (0, o.Z)({}, null === f || void 0 === f || null === (u = f.data) || void 0 === u ? void 0 : u.attributes.formats) : null, null, null === f || void 0 === f || null === (d = f.data) || void 0 === d ? void 0 : d.attributes.url),
                        style: {
                            objectFit: x,
                            objectPosition: x,
                            maxHeight: h ? h + "px" : "100%"
                        }
                    }), (0, g.jsx)(m.Z, (0, o.Z)((0, o.Z)({}, null === b || void 0 === b || null === (v = b.data) || void 0 === v ? void 0 : v.attributes), {}, {
                        objectFit: j,
                        objectPosition: x,
                        maxHeight: h
                    }))]
                })
            }
        },
        6605: function(t, e, n) {
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var i = n(3061),
                o = (n(7313), n(7541)),
                a = n(6667),
                s = n(3803),
                l = n(733),
                r = n(6268),
                c = n(6417);

            function u(t) {
                var e = t.title,
                    n = t.background_color,
                    u = t.background_image,
                    m = t.content,
                    d = t.image,
                    _ = t.image_position,
                    g = t.image_position_mobile,
                    v = t.footer_content,
                    b = t.button1,
                    f = t.button2,
                    x = t.image_object_fit,
                    j = void 0 === x ? "contain" : x,
                    h = t.image_object_position,
                    Z = void 0 === h ? "center" : h,
                    p = t.min_height,
                    N = t.image_max_height,
                    k = t.image_mobile,
                    w = t.content_align,
                    E = t.visual_animation,
                    S = t.image_round_corners,
                    y = {
                        background: null !== u && void 0 !== u && u.data ? null : n
                    },
                    A = ["top", "bottom"].includes(_),
                    F = A ? 3 : 1,
                    I = A ? 6 : 5,
                    L = A ? 12 : 6;
                return (0, c.jsxs)("div", {
                    className: "mo-media-and-text full " + (A ? "vertical" : "horizontal"),
                    style: y,
                    children: [(0, c.jsx)(r.zE, {
                        background_image: u
                    }), (0, c.jsxs)(a.Z, {
                        className: "met_main_container",
                        children: [e && (0, c.jsx)(s.Z, {
                            children: (0, c.jsx)(o.Z, {
                                xs: "12",
                                className: "met_title",
                                children: (0, c.jsx)(l.Z, {
                                    content: e
                                })
                            })
                        }), (0, c.jsxs)(s.Z, {
                            className: (0, i.default)("met_wrapper", "xs-" + g, "lg-" + _),
                            style: {
                                minHeight: p || null
                            },
                            children: [(0, c.jsx)(o.Z, {
                                xs: "12",
                                lg: F
                            }), (0, c.jsx)(o.Z, {
                                xs: "12",
                                lg: I,
                                className: (0, i.default)("met_content", p && "fixed-height", w && "met_content--align-" + w),
                                children: (0, c.jsx)(r.cE, {
                                    content: m,
                                    button1: b,
                                    button2: f,
                                    footer_content: v
                                })
                            }), A && (0, c.jsx)(o.Z, {
                                xs: "12",
                                lg: F
                            }), (0, c.jsx)(o.Z, {
                                xs: "12",
                                lg: L,
                                className: (0, i.default)("met_visual", "img-position-" + Z),
                                children: (0, c.jsx)(r.uV, {
                                    breakpoint: "lg",
                                    image: d,
                                    image_mobile: k,
                                    image_object_position: Z,
                                    image_object_fit: j,
                                    image_max_height: N,
                                    visual_animation: E,
                                    image_round_corners: S
                                })
                            })]
                        })]
                    })]
                })
            }
        }
    }
]);