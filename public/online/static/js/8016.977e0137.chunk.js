"use strict";
(self.webpackChunksisalpay_client = self.webpackChunksisalpay_client || []).push([
    [8016], {
        8016: function(t, n, e) {
            e.r(n), e.d(n, {
                default: function() {
                    return w
                }
            });
            var o = e(4165),
                i = e(1413),
                a = e(5861),
                r = e(885),
                u = e(7313),
                c = e(8467),
                s = e(3395),
                l = e(6308),
                d = e(2982),
                p = e(3711),
                v = e(8507),
                f = e(5762),
                h = e(903),
                m = e(3379),
                b = "NOT_LOADED",
                g = null,
                A = "ChabotSUB",
                E = {
                    "BASE-font-family": "Gotham, Calibri, Times, serif",
                    "BASE-header-font-family": "Gotham, Calibri, Times, serif",
                    "BASE-box-shadow": "0 0 7px 0 rgba(0, 0, 0, 0.08)",
                    "BASE-z-index": "899",
                    "HOME_SCREEN-greeting-font-family": "Gotham, Calibri, Times, serif",
                    "PRIMARY-color": "#FFC627",
                    "PRIMARY-color-text": "#4F4F4F",
                    "SECONDARY-color": "#EDEDED",
                    "SECONDARY-color-text": "#4F4F4F",
                    "CARBON-text-01": "#4F4F4F",
                    "CARBON-link-01": "#4F4F4F",
                    "CARBON-ui-background": "#FAF9F9",
                    "CARBON-interactive-01": "#FFC627",
                    "CARBON-focus": "#FFC627",
                    "CARBON-support-04": "#FFC627",
                    "CARBON-hover-primary": "#FED440"
                };

            function C() {
                var t = (0, u.useState)(b),
                    n = (0, r.Z)(t, 2),
                    e = n[0],
                    i = n[1],
                    c = (0, u.useState)(b === C.STATES.LOADED),
                    s = (0, r.Z)(c, 2),
                    l = s[0],
                    T = s[1],
                    y = (0, u.useState)(),
                    S = (0, r.Z)(y, 2),
                    w = S[0],
                    Z = S[1],
                    O = (0, u.useState)([]),
                    D = (0, r.Z)(O, 2),
                    _ = D[0],
                    x = D[1],
                    k = (0, h.aF)(),
                    N = (0, m.Z)().config;

                function F() {
                    return L.apply(this, arguments)
                }

                function L() {
                    return (L = (0, a.Z)((0, o.Z)().mark((function t() {
                        var n, e, i, a;
                        return (0, o.Z)().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, e = v.Z.get(A), t.next = 4, p.Z.get("".concat(f.Z.API_BASE_URL, "miscellaneous/chatbot-jwt").concat(e ? "?previousJwt=".concat(e) : ""));
                                case 4:
                                    return i = t.sent, a = i.chatbotJwt, Z(a), null === (n = g) || void 0 === n || n.updateIdentityToken(a), e || v.Z.set(A, a, {
                                        expires: 45,
                                        path: "/",
                                        domain: "",
                                        sameSite: "strict"
                                    }), t.abrupt("return", a);
                                case 12:
                                    t.prev = 12, t.t0 = t.catch(0), console.log("Chatbot getJWT error", t.t0), j(), H();
                                case 17:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [0, 12]
                        ])
                    })))).apply(this, arguments)
                }

                function I(t) {
                    return R.apply(this, arguments)
                }

                function R() {
                    return (R = (0, a.Z)((0, o.Z)().mark((function t(n) {
                        var e, i, a, r, u;
                        return (0, o.Z)().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    null !== n && void 0 !== n && n.data && x([].concat((0, d.Z)(_), [!0])), null !== n && void 0 !== n && null !== (e = n.data) && void 0 !== e && null !== (i = e.context) && void 0 !== i && null !== (a = i.skills) && void 0 !== a && null !== (r = a["main skill"]) && void 0 !== r && null !== (u = r.user_defined) && void 0 !== u && u.fineConversazione && (W(!1), setTimeout((function() {
                                        x([]), H(), j()
                                    }), 5e3));
                                case 2:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))).apply(this, arguments)
                }

                function B(t) {
                    return G.apply(this, arguments)
                }

                function G() {
                    return G = (0, a.Z)((0, o.Z)().mark((function t(n) {
                        return (0, o.Z)().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, t.abrupt("return", new Promise(function() {
                                        var t = (0, a.Z)((0, o.Z)().mark((function t(e) {
                                            var i;
                                            return (0, o.Z)().wrap((function(t) {
                                                for (;;) switch (t.prev = t.next) {
                                                    case 0:
                                                        return t.next = 2, F();
                                                    case 2:
                                                        i = t.sent, n.identityToken = i, e();
                                                    case 5:
                                                    case "end":
                                                        return t.stop()
                                                }
                                            }), t)
                                        })));
                                        return function(n) {
                                            return t.apply(this, arguments)
                                        }
                                    }()));
                                case 4:
                                    t.prev = 4, t.t0 = t.catch(0), console.log("Chatbot refreshJWT error", t.t0), H();
                                case 8:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [0, 4]
                        ])
                    }))), G.apply(this, arguments)
                }

                function H() {
                    try {
                        var t;
                        null === (t = g) || void 0 === t || t.destroySession()
                    } catch (n) {
                        console.error("CHATBOT error occurred trying to destroy session", n)
                    }
                }

                function W(t) {
                    var n;
                    null === (n = g) || void 0 === n || n.updateAssistantInputFieldVisibility(t)
                }

                function j() {
                    var t;
                    W(!0), null === (t = g) || void 0 === t || t.restartConversation()
                }
                return (0, u.useEffect)((function() {
                    k.current.sessionIsLoading || (F(), k.current.authenticated || j())
                }), [k.current.sessionIsLoading, k.current.authenticated]), (0, u.useEffect)((function() {
                    if (b === C.STATES.NOT_LOADED && w) {
                        b = C.STATES.LOADING, i(C.STATES.LOADING), window.watsonAssistantChatOptions = {
                            integrationID: N.CHATBOT_INTEGRATION_ID,
                            region: "eu-gb",
                            serviceInstanceID: N.CHATBOT_SERVICE_INSTANCE_ID,
                            CLIENT_VERSION: "7.0.0",
                            identityToken: w,
                            showLauncher: !1,
                            onLoad: function(t) {
                                t.updateCSSVariables(E), t.render(), "it" !== t.getLocale() && t.updateLocale("it"), g = t, window.WebChatInstance = t, t.on({
                                    type: "window:open",
                                    handler: function() {
                                        return x([])
                                    }
                                }), t.on({
                                    type: "window:close",
                                    handler: function() {
                                        return x([])
                                    }
                                }), t.on({
                                    type: "receive",
                                    handler: I
                                }), t.on({
                                    type: "identityTokenExpired",
                                    handler: B
                                }), b = C.STATES.LOADED, i(C.STATES.LOADED), T(!0)
                            }
                        };
                        var t = document.createElement("script");
                        t.type = "text/javascript", t.async = !0, t.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/7.0.0/WatsonAssistantChatEntry.js", document.head.appendChild(t)
                    }
                }), [w]), {
                    isReady: l,
                    state: e,
                    openChat: function() {
                        var t;
                        return null === (t = g) || void 0 === t ? void 0 : t.openWindow()
                    },
                    closeChat: function() {
                        var t;
                        return null === (t = g) || void 0 === t ? void 0 : t.closeWindow()
                    },
                    watsonState: function() {
                        var t;
                        return null === (t = g) || void 0 === t ? void 0 : t.getState()
                    },
                    destroySession: H,
                    notifications: _
                }
            }
            C.STATES = {
                NOT_LOADED: "NOT_LOADED",
                LOADING: "LOADING",
                LOADED: "LOADED"
            };
            var T = e(6417),
                y = "/cms",
                S = {
                    populate: {
                        blacklist_routes: "*",
                        custom_images: {
                            populate: "*"
                        },
                        avatar_icon: "*",
                        chatbot_icon: "*",
                        writer_icon: "*",
                        chat_ghost: "*"
                    }
                };

            function w() {
                var t = C(),
                    n = t.isReady,
                    e = t.closeChat,
                    d = t.openChat,
                    p = t.notifications,
                    v = (0, u.useState)(!1),
                    f = (0, r.Z)(v, 2),
                    h = f[0],
                    m = f[1],
                    b = (0, u.useState)([]),
                    g = (0, r.Z)(b, 2),
                    A = g[0],
                    E = g[1],
                    w = (0, u.useState)(),
                    Z = (0, r.Z)(w, 2),
                    O = Z[0],
                    D = Z[1],
                    _ = (0, c.TH)().pathname,
                    x = function() {
                        var t = (0, a.Z)((0, o.Z)().mark((function t() {
                            var n, e, a, r, u, c, d, p, v, f, h, m, b, g, A, C, T, w, Z;
                            return (0, o.Z)().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, t.next = 3, l.Z.getSingleType("chatbot", S).then((function(t) {
                                            var n;
                                            return null === t || void 0 === t || null === (n = t.data) || void 0 === n ? void 0 : n.attributes
                                        })).catch((function(t) {}));
                                    case 3:
                                        p = t.sent, v = (0, i.Z)({}, p), f = v.blacklist_routes, h = v.custom_images, v.destroySessionTimeout, m = v.chatbot_icon, b = v.avatar_icon, g = v.writer_icon, E(null !== (n = null === f || void 0 === f ? void 0 : f.map((function(t) {
                                            return null === t || void 0 === t ? void 0 : t.content
                                        }))) && void 0 !== n ? n : []), h && h.forEach((function(t) {
                                            var n, e, o, i = t.classname,
                                                a = t.image,
                                                r = null === (n = s.Z.document()) || void 0 === n ? void 0 : n.createElement("style");
                                            r.innerHTML = ".".concat(i, " {\n                            background-image: url(").concat(y).concat(null === a || void 0 === a || null === (e = a.data) || void 0 === e || null === (o = e.attributes) || void 0 === o ? void 0 : o.url, ") !important;\n                            background-repeat: no-repeat !important;\n                            background-position: center !important;\n                            color: transparent !important;\n                            display: block !important;\n                            margin-top: 12px !important;\n                            position: relative !important;\n                            height: 100px !important;\n                            min-width: 200px !important;\n                            width: 100% !important;\n                        }"), s.Z.document().body.appendChild(r)
                                        })), null !== m && void 0 !== m && null !== (e = m.data) && void 0 !== e && null !== (a = e.attributes) && void 0 !== a && a.url && D(y + m.data.attributes.url), A = function(t) {
                                            return ".ibm-web-chat--default-styles:after, .WAC__LoadingIcon:after {\n                content: '' !important;\n                background-image: url(".concat(y).concat(t, ") !important;\n                background-size: contain !important;\n                position: absolute !important;\n                left: -36px !important;\n                top: 0 !important;\n                height: 32px !important;\n                width: 32px !important;}")
                                        }, null !== b && void 0 !== b && null !== (r = b.data) && void 0 !== r && null !== (u = r.attributes) && void 0 !== u && u.url && ((T = null === (C = s.Z.document()) || void 0 === C ? void 0 : C.createElement("style")).innerHTML = A(b.data.attributes.url), s.Z.document().body.appendChild(T)), null !== g && void 0 !== g && null !== (c = g.data) && void 0 !== c && null !== (d = c.attributes) && void 0 !== d && d.url && ((Z = null === (w = s.Z.document()) || void 0 === w ? void 0 : w.createElement("style")).innerHTML = A(g.data.attributes.url), s.Z.document().body.appendChild(Z)), t.next = 17;
                                        break;
                                    case 14:
                                        t.prev = 14, t.t0 = t.catch(0), console.log("Chatbot getContent error", t.t0);
                                    case 17:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [0, 14]
                            ])
                        })));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }();
                return (0, u.useEffect)((function() {
                    (0, u.startTransition)((function() {
                        x()
                    }))
                }), []), (0, u.useEffect)((function() {
                    var t;
                    null !== A && void 0 !== A && A.length && null !== A && void 0 !== A && null !== (t = A.filter((function(t) {
                        return null === _ || void 0 === _ ? void 0 : _.includes(t)
                    }))) && void 0 !== t && t.length ? (e(), m(!0)) : m(!1)
                }), [A, _]), !n || h ? null : O && (0, T.jsxs)("div", {
                    id: "mo-chatbot",
                    className: "chatbot animation-pop-in",
                    children: [(0, T.jsx)("img", {
                        alt: "chatbot",
                        src: O,
                        width: "63",
                        height: "63",
                        className: "chat-toggle",
                        onClick: function() {
                            return d()
                        }
                    }), null !== p && void 0 !== p && p.length ? (0, T.jsx)("span", {
                        className: "notification-badge",
                        children: p.length
                    }) : null]
                })
            }
        }
    }
]);