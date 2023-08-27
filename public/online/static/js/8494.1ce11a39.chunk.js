"use strict";
(self.webpackChunksisalpay_client = self.webpackChunksisalpay_client || []).push([
    [8494], {
        8494: function(e, t, n) {
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var a = n(4165),
                l = n(5861),
                r = n(1413),
                i = n(3061),
                s = (n(7313), n(7320)),
                c = n(733),
                o = n(2135),
                d = n(2072),
                u = n(5762),
                v = n(903),
                m = n(3379),
                k = n(8997),
                f = n(5568),
                x = n(6417);
            var N = function(e) {
                var t, N, b, h = e.title,
                    Z = e.content,
                    A = e.url_title,
                    _ = e.url,
                    p = e.target_blank,
                    j = e.background_image,
                    g = e.className,
                    C = e.url_id,
                    R = e.titleClasses,
                    I = e.contentClasses,
                    D = e.style,
                    O = e.onClick,
                    T = e.back_content,
                    L = e.image_click,
                    F = e.card_variant,
                    y = void 0 === F ? f.Z.CARD_VARIANT.DEFAULT : F,
                    E = e.linkOnClick,
                    S = e.hidden_link_in_tablet,
                    U = e.custom_action,
                    V = e.background_color,
                    M = (0, v.BF)(),
                    w = (0, m.Z)().getStoreLocatorUrl,
                    P = y && y === f.Z.CARD_VARIANT.VISUAL ? (0, x.jsxs)(x.Fragment, {
                        children: [(0, x.jsx)(s.Z, (0, r.Z)((0, r.Z)({}, null === j || void 0 === j || null === (t = j.data) || void 0 === t ? void 0 : t.attributes), {}, {
                            objectPosition: "bottom",
                            objectFit: "cover",
                            className: "background-image"
                        })), (0, x.jsxs)("div", {
                            className: "container-content",
                            children: [(0, x.jsx)(c.Z, {
                                content: h,
                                className: (0, i.default)("title", R)
                            }), (0, x.jsx)(c.Z, {
                                content: Z,
                                className: (0, i.default)("content", I)
                            }), A && (0, x.jsx)(x.Fragment, {
                                children: (0, x.jsxs)("span", {
                                    className: (0, i.default)("mo-link", "force-hover", k.Z.VARIANTS.LINKARROW, k.Z.VARIANT_COLOR.PRIMARY, k.Z.DIMENSION.MIDDLE),
                                    children: [A, (0, x.jsx)(d.r, {})]
                                })
                            })]
                        })]
                    }) : (0, x.jsxs)(x.Fragment, {
                        children: [(0, x.jsx)(s.Z, (0, r.Z)((0, r.Z)({}, null === j || void 0 === j || null === (N = j.data) || void 0 === N ? void 0 : N.attributes), {}, {
                            objectFit: "cover",
                            className: "background-image"
                        })), (0, x.jsxs)("div", {
                            className: "container-card",
                            children: [(0, x.jsxs)("div", {
                                className: "container-content",
                                children: [(0, x.jsx)(c.Z, {
                                    content: h,
                                    className: (0, i.default)("title", R)
                                }), (0, x.jsx)(c.Z, {
                                    content: Z,
                                    className: (0, i.default)("content", I)
                                }), A && (0, x.jsx)(x.Fragment, {
                                    children: (0, x.jsxs)("span", {
                                        className: (0, i.default)("mo-link", "force-hover", y && y === f.Z.CARD_VARIANT.DEFAULT && "visible-link", S && "hide-link-tablet", k.Z.VARIANTS.LINKARROW, k.Z.VARIANT_COLOR.PRIMARY, k.Z.DIMENSION.MIDDLE),
                                        children: [A, (0, x.jsx)(d.r, {})]
                                    })
                                })]
                            }), y && y === f.Z.CARD_VARIANT.DEFAULT && (0, x.jsx)("div", {
                                className: "img-click-container",
                                children: (0, x.jsx)(s.Z, (0, r.Z)((0, r.Z)({}, null === L || void 0 === L || null === (b = L.data) || void 0 === b ? void 0 : b.attributes), {}, {
                                    className: "img-click"
                                }))
                            })]
                        })]
                    }),
                    W = function() {
                        var e = (0, l.Z)((0, a.Z)().mark((function e(t) {
                            var l;
                            return (0, a.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!T) {
                                            e.next = 5;
                                            break
                                        }
                                        t.preventDefault(), M.alert(null, null, (0, x.jsx)(c.Z, {
                                            content: T
                                        })), e.next = 17;
                                        break;
                                    case 5:
                                        if (!O) {
                                            e.next = 10;
                                            break
                                        }
                                        t.preventDefault(), O(), e.next = 17;
                                        break;
                                    case 10:
                                        if (!U) {
                                            e.next = 17;
                                            break
                                        }
                                        return t.preventDefault(), e.next = 14, Promise.all([n.e(9041), n.e(9458), n.e(266)]).then(n.bind(n, 266));
                                    case 14:
                                        l = e.sent, l.CustomActionsUtil.handleCustomAction({
                                            custom_action: U,
                                            popup: M,
                                            url: _,
                                            target_blank: p
                                        });
                                    case 17:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    K = function() {
                        var e = (0, l.Z)((0, a.Z)().mark((function e(t) {
                            var l;
                            return (0, a.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!E) {
                                            e.next = 5;
                                            break
                                        }
                                        t.preventDefault(), E(), e.next = 12;
                                        break;
                                    case 5:
                                        if (!U) {
                                            e.next = 12;
                                            break
                                        }
                                        return t.preventDefault(), e.next = 9, Promise.all([n.e(9041), n.e(9458), n.e(266)]).then(n.bind(n, 266));
                                    case 9:
                                        l = e.sent, l.CustomActionsUtil.handleCustomAction({
                                            custom_action: U,
                                            popup: M,
                                            url: _,
                                            target_blank: p
                                        });
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Y = D ? (0, r.Z)({}, D) : {};
                Y ? V && (Y.backgroundColor = V) : Y.backgroundColor = V || null;
                var B = {
                    to: _,
                    className: (0, i.default)("mo-card", "clickable", "variant-cards__card--" + y),
                    target: p ? "_blank" : null,
                    id: C,
                    style: Y,
                    onClick: K
                };
                return U === u.Z.CUSTOM_ACTIONS.OPEN_STORE_LOCATOR ? (delete B.onClick, (0, x.jsx)("a", {
                    id: null === B || void 0 === B ? void 0 : B.id,
                    href: w(_),
                    className: null === B || void 0 === B ? void 0 : B.className,
                    target: null === B || void 0 === B ? void 0 : B.target,
                    rel: "noopener noreferrer",
                    style: Y,
                    children: P
                })) : _ ? null !== _ && void 0 !== _ && _.startsWith("http") || null !== _ && void 0 !== _ && _.startsWith("mailto:") || null !== _ && void 0 !== _ && _.startsWith("tel:") ? (0, x.jsx)("a", {
                    id: null === B || void 0 === B ? void 0 : B.id,
                    href: null === B || void 0 === B ? void 0 : B.to,
                    className: null === B || void 0 === B ? void 0 : B.className,
                    target: null === B || void 0 === B ? void 0 : B.target,
                    rel: "noopener noreferrer",
                    style: Y,
                    children: P
                }) : (0, x.jsx)(o.rU, (0, r.Z)((0, r.Z)({}, B), {}, {
                    children: P
                })) : (0, x.jsx)("div", {
                    className: (0, i.default)("mo-card", g, T && "clickable", "variant-cards__card--" + y),
                    id: C,
                    style: Y,
                    onClick: W,
                    children: P
                })
            }
        }
    }
]);