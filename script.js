(function() {
    const o = document.createElement("link").relList;
    if (o && o.supports && o.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) l(i);
    new MutationObserver(i => {
        for (const c of i)
            if (c.type === "childList")
                for (const d of c.addedNodes) d.tagName === "LINK" && d.rel === "modulepreload" && l(d)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function s(i) {
        const c = {};
        return i.integrity && (c.integrity = i.integrity), i.referrerPolicy && (c.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? c.credentials = "include" : i.crossOrigin === "anonymous" ? c.credentials = "omit" : c.credentials = "same-origin", c
    }

    function l(i) {
        if (i.ep) return;
        i.ep = !0;
        const c = s(i);
        fetch(i.href, c)
    }
})();
var ge = {
    exports: {}
};
(function(r) {
    var o = function(s) {
        var l = Object.prototype,
            i = l.hasOwnProperty,
            c = Object.defineProperty || function(t, e, n) {
                t[e] = n.value
            },
            d, v = typeof Symbol == "function" ? Symbol : {},
            O = v.iterator || "@@iterator",
            j = v.asyncIterator || "@@asyncIterator",
            $ = v.toStringTag || "@@toStringTag";

        function h(t, e, n) {
            return Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }), t[e]
        }
        try {
            h({}, "")
        } catch {
            h = function(e, n, u) {
                return e[n] = u
            }
        }

        function y(t, e, n, u) {
            var a = e && e.prototype instanceof W ? e : W,
                m = Object.create(a.prototype),
                L = new b(u || []);
            return c(m, "_invoke", {
                value: Z(t, n, L)
            }), m
        }
        s.wrap = y;

        function _(t, e, n) {
            try {
                return {
                    type: "normal",
                    arg: t.call(e, n)
                }
            } catch (u) {
                return {
                    type: "throw",
                    arg: u
                }
            }
        }
        var w = "suspendedStart",
            M = "suspendedYield",
            N = "executing",
            P = "completed",
            A = {};

        function W() {}

        function G() {}

        function I() {}
        var K = {};
        h(K, O, function() {
            return this
        });
        var H = Object.getPrototypeOf,
            B = H && H(H(E([])));
        B && B !== l && i.call(B, O) && (K = B);
        var C = I.prototype = W.prototype = Object.create(K);
        G.prototype = I, c(C, "constructor", {
            value: I,
            configurable: !0
        }), c(I, "constructor", {
            value: G,
            configurable: !0
        }), G.displayName = h(I, $, "GeneratorFunction");

        function q(t) {
            ["next", "throw", "return"].forEach(function(e) {
                h(t, e, function(n) {
                    return this._invoke(e, n)
                })
            })
        }
        s.isGeneratorFunction = function(t) {
            var e = typeof t == "function" && t.constructor;
            return e ? e === G || (e.displayName || e.name) === "GeneratorFunction" : !1
        }, s.mark = function(t) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(t, I) : (t.__proto__ = I, h(t, $, "GeneratorFunction")), t.prototype = Object.create(C), t
        }, s.awrap = function(t) {
            return {
                __await: t
            }
        };

        function F(t, e) {
            function n(m, L, k, R) {
                var S = _(t[m], t, L);
                if (S.type === "throw") R(S.arg);
                else {
                    var Q = S.arg,
                        J = Q.value;
                    return J && typeof J == "object" && i.call(J, "__await") ? e.resolve(J.__await).then(function(D) {
                        n("next", D, k, R)
                    }, function(D) {
                        n("throw", D, k, R)
                    }) : e.resolve(J).then(function(D) {
                        Q.value = D, k(Q)
                    }, function(D) {
                        return n("throw", D, k, R)
                    })
                }
            }
            var u;

            function a(m, L) {
                function k() {
                    return new e(function(R, S) {
                        n(m, L, R, S)
                    })
                }
                return u = u ? u.then(k, k) : k()
            }
            c(this, "_invoke", {
                value: a
            })
        }
        q(F.prototype), h(F.prototype, j, function() {
            return this
        }), s.AsyncIterator = F, s.async = function(t, e, n, u, a) {
            a === void 0 && (a = Promise);
            var m = new F(y(t, e, n, u), a);
            return s.isGeneratorFunction(e) ? m : m.next().then(function(L) {
                return L.done ? L.value : m.next()
            })
        };

        function Z(t, e, n) {
            var u = w;
            return function(m, L) {
                if (u === N) throw new Error("Generator is already running");
                if (u === P) {
                    if (m === "throw") throw L;
                    return U()
                }
                for (n.method = m, n.arg = L;;) {
                    var k = n.delegate;
                    if (k) {
                        var R = f(k, n);
                        if (R) {
                            if (R === A) continue;
                            return R
                        }
                    }
                    if (n.method === "next") n.sent = n._sent = n.arg;
                    else if (n.method === "throw") {
                        if (u === w) throw u = P, n.arg;
                        n.dispatchException(n.arg)
                    } else n.method === "return" && n.abrupt("return", n.arg);
                    u = N;
                    var S = _(t, e, n);
                    if (S.type === "normal") {
                        if (u = n.done ? P : M, S.arg === A) continue;
                        return {
                            value: S.arg,
                            done: n.done
                        }
                    } else S.type === "throw" && (u = P, n.method = "throw", n.arg = S.arg)
                }
            }
        }

        function f(t, e) {
            var n = e.method,
                u = t.iterator[n];
            if (u === d) return e.delegate = null, n === "throw" && t.iterator.return && (e.method = "return", e.arg = d, f(t, e), e.method === "throw") || n !== "return" && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), A;
            var a = _(u, t.iterator, e.arg);
            if (a.type === "throw") return e.method = "throw", e.arg = a.arg, e.delegate = null, A;
            var m = a.arg;
            if (!m) return e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, A;
            if (m.done) e[t.resultName] = m.value, e.next = t.nextLoc, e.method !== "return" && (e.method = "next", e.arg = d);
            else return m;
            return e.delegate = null, A
        }
        q(C), h(C, $, "Generator"), h(C, O, function() {
            return this
        }), h(C, "toString", function() {
            return "[object Generator]"
        });

        function p(t) {
            var e = {
                tryLoc: t[0]
            };
            1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
        }

        function g(t) {
            var e = t.completion || {};
            e.type = "normal", delete e.arg, t.completion = e
        }

        function b(t) {
            this.tryEntries = [{
                tryLoc: "root"
            }], t.forEach(p, this), this.reset(!0)
        }
        s.keys = function(t) {
            var e = Object(t),
                n = [];
            for (var u in e) n.push(u);
            return n.reverse(),
                function a() {
                    for (; n.length;) {
                        var m = n.pop();
                        if (m in e) return a.value = m, a.done = !1, a
                    }
                    return a.done = !0, a
                }
        };

        function E(t) {
            if (t) {
                var e = t[O];
                if (e) return e.call(t);
                if (typeof t.next == "function") return t;
                if (!isNaN(t.length)) {
                    var n = -1,
                        u = function a() {
                            for (; ++n < t.length;)
                                if (i.call(t, n)) return a.value = t[n], a.done = !1, a;
                            return a.value = d, a.done = !0, a
                        };
                    return u.next = u
                }
            }
            return {
                next: U
            }
        }
        s.values = E;

        function U() {
            return {
                value: d,
                done: !0
            }
        }
        return b.prototype = {
            constructor: b,
            reset: function(t) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = d, this.done = !1, this.delegate = null, this.method = "next", this.arg = d, this.tryEntries.forEach(g), !t)
                    for (var e in this) e.charAt(0) === "t" && i.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = d)
            },
            stop: function() {
                this.done = !0;
                var t = this.tryEntries[0],
                    e = t.completion;
                if (e.type === "throw") throw e.arg;
                return this.rval
            },
            dispatchException: function(t) {
                if (this.done) throw t;
                var e = this;

                function n(R, S) {
                    return m.type = "throw", m.arg = t, e.next = R, S && (e.method = "next", e.arg = d), !!S
                }
                for (var u = this.tryEntries.length - 1; u >= 0; --u) {
                    var a = this.tryEntries[u],
                        m = a.completion;
                    if (a.tryLoc === "root") return n("end");
                    if (a.tryLoc <= this.prev) {
                        var L = i.call(a, "catchLoc"),
                            k = i.call(a, "finallyLoc");
                        if (L && k) {
                            if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                            if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                        } else if (L) {
                            if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
                        } else if (k) {
                            if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                        } else throw new Error("try statement without catch or finally")
                    }
                }
            },
            abrupt: function(t, e) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var u = this.tryEntries[n];
                    if (u.tryLoc <= this.prev && i.call(u, "finallyLoc") && this.prev < u.finallyLoc) {
                        var a = u;
                        break
                    }
                }
                a && (t === "break" || t === "continue") && a.tryLoc <= e && e <= a.finallyLoc && (a = null);
                var m = a ? a.completion : {};
                return m.type = t, m.arg = e, a ? (this.method = "next", this.next = a.finallyLoc, A) : this.complete(m)
            },
            complete: function(t, e) {
                if (t.type === "throw") throw t.arg;
                return t.type === "break" || t.type === "continue" ? this.next = t.arg : t.type === "return" ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : t.type === "normal" && e && (this.next = e), A
            },
            finish: function(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var n = this.tryEntries[e];
                    if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), g(n), A
                }
            },
            catch: function(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var n = this.tryEntries[e];
                    if (n.tryLoc === t) {
                        var u = n.completion;
                        if (u.type === "throw") {
                            var a = u.arg;
                            g(n)
                        }
                        return a
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(t, e, n) {
                return this.delegate = {
                    iterator: E(t),
                    resultName: e,
                    nextLoc: n
                }, this.method === "next" && (this.arg = d), A
            }
        }, s
    }(r.exports);
    try {
        regeneratorRuntime = o
    } catch {
        typeof globalThis == "object" ? globalThis.regeneratorRuntime = o : Function("r", "regeneratorRuntime = r")(o)
    }
})(ge);
var te = (r, o) => `${r}-${o}-${Math.random().toString(16).slice(3, 8)}`;
const ve = te;
let ne = 0;
var fe = ({
        id: r,
        action: o,
        payload: s = {}
    }) => {
        let l = r;
        return typeof l > "u" && (l = ve("Job", ne), ne += 1), {
            id: l,
            action: o,
            payload: s
        }
    },
    z = {};
let re = !1;
z.logging = re;
z.setLogging = r => {
    re = r
};
z.log = (...r) => re ? console.log.apply(globalThis, r) : null;
const we = fe,
    {
        log: x
    } = z,
    ye = te;
let oe = 0;
var be = () => {
    const r = ye("Scheduler", oe),
        o = {},
        s = {};
    let l = [];
    oe += 1;
    const i = () => l.length,
        c = () => Object.keys(o).length,
        d = () => {
            if (l.length !== 0) {
                const h = Object.keys(o);
                for (let y = 0; y < h.length; y += 1)
                    if (typeof s[h[y]] > "u") {
                        l[0](o[h[y]]);
                        break
                    }
            }
        },
        v = (h, y) => new Promise((_, w) => {
            const M = we({
                action: h,
                payload: y
            });
            l.push(async N => {
                l.shift(), s[N.id] = M;
                try {
                    _(await N[h].apply(globalThis, [...y, M.id]))
                } catch (P) {
                    w(P)
                } finally {
                    delete s[N.id], d()
                }
            }), x(`[${r}]: Add ${M.id} to JobQueue`), x(`[${r}]: JobQueue length=${l.length}`), d()
        });
    return {
        addWorker: h => (o[h.id] = h, x(`[${r}]: Add ${h.id}`), x(`[${r}]: Number of workers=${c()}`), d(), h.id),
        addJob: async (h, ...y) => {
            if (c() === 0) throw Error(`[${r}]: You need to have at least one worker before adding jobs`);
            return v(h, y)
        },
        terminate: async () => {
            Object.keys(o).forEach(async h => {
                await o[h].terminate()
            }), l = []
        },
        getQueueLen: i,
        getNumWorkers: c
    }
};

function Ee(r) {
    throw new Error('Could not dynamically require "' + r + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
}

function Le() {
    return !!(typeof window < "u" && typeof window.process == "object" && window.process.type === "renderer" || typeof process < "u" && typeof process.versions == "object" && process.versions.electron || typeof navigator == "object" && typeof navigator.userAgent == "string" && navigator.userAgent.indexOf("Electron") >= 0)
}
var ke = Le;
const Se = ke;
var Oe = r => {
    const o = {};
    return typeof WorkerGlobalScope < "u" ? o.type = "webworker" : Se() ? o.type = "electron" : typeof window == "object" ? o.type = "browser" : typeof process == "object" && typeof Ee == "function" && (o.type = "node"), typeof r > "u" ? o : o[r]
};
const Ae = Oe("type") === "browser",
    Re = Ae ? r => new URL(r, window.location.href).href : r => r;
var Te = r => {
        const o = {
            ...r
        };
        return ["corePath", "workerPath", "langPath"].forEach(s => {
            r[s] && (o[s] = Re(o[s]))
        }), o
    },
    Ie = r => {
        const o = [],
            s = [],
            l = [],
            i = [],
            c = [];
        return r.blocks && r.blocks.forEach(d => {
            d.paragraphs.forEach(v => {
                v.lines.forEach(O => {
                    O.words.forEach(j => {
                        j.symbols.forEach($ => {
                            c.push({
                                ...$,
                                page: r,
                                block: d,
                                paragraph: v,
                                line: O,
                                word: j
                            })
                        }), i.push({
                            ...j,
                            page: r,
                            block: d,
                            paragraph: v,
                            line: O
                        })
                    }), l.push({
                        ...O,
                        page: r,
                        block: d,
                        paragraph: v
                    })
                }), s.push({
                    ...v,
                    page: r,
                    block: d
                })
            }), o.push({
                ...d,
                page: r
            })
        }), {
            ...r,
            blocks: o,
            paragraphs: s,
            lines: l,
            words: i,
            symbols: c
        }
    },
    pe = {
        TESSERACT_ONLY: 0,
        LSTM_ONLY: 1,
        TESSERACT_LSTM_COMBINED: 2,
        DEFAULT: 3
    };
const je = pe;
var $e = {
    defaultOEM: je.DEFAULT
};
const _e = "tesseract.js",
    Ne = "4.1.2",
    Pe = "Pure Javascript Multilingual OCR",
    Ce = "src/index.js",
    Me = "src/index.d.ts",
    De = "dist/tesseract.min.js",
    Ge = "dist/tesseract.min.js",
    Be = {
        start: "node scripts/server.js",
        build: "rimraf dist && webpack --config scripts/webpack.config.prod.js && rollup -c scripts/rollup.esm.mjs",
        "profile:tesseract": "webpack-bundle-analyzer dist/tesseract-stats.json",
        "profile:worker": "webpack-bundle-analyzer dist/worker-stats.json",
        prepublishOnly: "npm run build",
        wait: "rimraf dist && wait-on http://localhost:3000/dist/tesseract.dev.js",
        test: "npm-run-all -p -r start test:all",
        "test:all": "npm-run-all wait test:browser:* test:node:all",
        "test:node": "nyc mocha --exit --bail --require ./scripts/test-helper.js",
        "test:node:all": "npm run test:node -- ./tests/*.test.js",
        "test:browser-tpl": "mocha-headless-chrome -a incognito -a no-sandbox -a disable-setuid-sandbox -a disable-logging -t 300000",
        "test:browser:detect": "npm run test:browser-tpl -- -f ./tests/detect.test.html",
        "test:browser:recognize": "npm run test:browser-tpl -- -f ./tests/recognize.test.html",
        "test:browser:scheduler": "npm run test:browser-tpl -- -f ./tests/scheduler.test.html",
        "test:browser:FS": "npm run test:browser-tpl -- -f ./tests/FS.test.html",
        lint: "eslint src",
        "lint:fix": "eslint --fix src",
        postinstall: "opencollective-postinstall || true"
    },
    Fe = {
        "./src/worker/node/index.js": "./src/worker/browser/index.js"
    },
    Ue = "",
    ze = ["jeromewu"],
    We = "Apache-2.0",
    Ke = {
        "@babel/core": "^7.21.4",
        "@babel/eslint-parser": "^7.21.3",
        "@babel/preset-env": "^7.21.4",
        "@rollup/plugin-commonjs": "^24.1.0",
        acorn: "^8.8.2",
        "babel-loader": "^9.1.2",
        buffer: "^6.0.3",
        cors: "^2.8.5",
        eslint: "^7.32.0",
        "eslint-config-airbnb-base": "^14.2.1",
        "eslint-plugin-import": "^2.27.5",
        "expect.js": "^0.3.1",
        express: "^4.18.2",
        mocha: "^10.2.0",
        "mocha-headless-chrome": "^4.0.0",
        "npm-run-all": "^4.1.5",
        nyc: "^15.1.0",
        rimraf: "^5.0.0",
        rollup: "^3.20.7",
        "wait-on": "^7.0.1",
        webpack: "^5.79.0",
        "webpack-bundle-analyzer": "^4.8.0",
        "webpack-cli": "^5.0.1",
        "webpack-dev-middleware": "^6.0.2",
        "rollup-plugin-sourcemaps": "^0.6.3"
    },
    He = {
        "bmp-js": "^0.1.0",
        "idb-keyval": "^6.2.0",
        "is-electron": "^2.2.2",
        "is-url": "^1.2.4",
        "node-fetch": "^2.6.9",
        "opencollective-postinstall": "^2.0.3",
        "regenerator-runtime": "^0.13.3",
        "tesseract.js-core": "^4.0.4",
        "wasm-feature-detect": "^1.2.11",
        zlibjs: "^0.3.1"
    },
    Je = {
        "@rollup/pluginutils": "^5.0.2"
    },
    Ye = {
        type: "git",
        url: "https://github.com/naptha/tesseract.js.git"
    },
    qe = {
        url: "https://github.com/naptha/tesseract.js/issues"
    },
    xe = "https://github.com/naptha/tesseract.js",
    Ve = {
        type: "opencollective",
        url: "https://opencollective.com/tesseractjs"
    },
    Ze = {
        name: _e,
        version: Ne,
        description: Pe,
        main: Ce,
        types: Me,
        unpkg: De,
        jsdelivr: Ge,
        scripts: Be,
        browser: Fe,
        author: Ue,
        contributors: ze,
        license: We,
        devDependencies: Ke,
        dependencies: He,
        overrides: Je,
        repository: Ye,
        bugs: qe,
        homepage: xe,
        collective: Ve
    };
var Qe = {
    langPath: "https://tessdata.projectnaptha.com/4.0.0",
    workerBlobURL: !0,
    logger: () => {}
};
const Xe = r => new URL(r, window.location.href).href,
    {
        version: et
    } = Ze,
    tt = Qe;
var rt = {
        ...tt,
        workerPath: typeof process < "u" && {}.TESS_ENV === "development" ? Xe(`/dist/worker.dev.js?nocache=${Math.random().toString(36).slice(3)}`) : `https://cdn.jsdelivr.net/npm/tesseract.js@v${et}/dist/worker.min.js`,
        corePath: null
    },
    nt = ({
        workerPath: r,
        workerBlobURL: o
    }) => {
        let s;
        if (Blob && URL && o) {
            const l = new Blob([`importScripts("${r}");`], {
                type: "application/javascript"
            });
            s = new Worker(URL.createObjectURL(l))
        } else s = new Worker(r);
        return s
    },
    ot = r => {
        r.terminate()
    },
    st = (r, o) => {
        r.onmessage = ({
            data: s
        }) => {
            o(s)
        }
    },
    at = async (r, o) => {
        r.postMessage(o)
    };
const X = r => new Promise((o, s) => {
        const l = new FileReader;
        l.onload = () => {
            o(l.result)
        }, l.onerror = ({
            target: {
                error: {
                    code: i
                }
            }
        }) => {
            s(Error(`File could not be read! Code=${i}`))
        }, l.readAsArrayBuffer(r)
    }),
    ee = async r => {
        let o = r;
        if (typeof r > "u") return "undefined";
        if (typeof r == "string") /data:image\/([a-zA-Z]*);base64,([^"]*)/.test(r) ? o = atob(r.split(",")[1]).split("").map(s => s.charCodeAt(0)) : o = await (await fetch(r)).arrayBuffer();
        else if (typeof HTMLElement < "u" && r instanceof HTMLElement) r.tagName === "IMG" && (o = await ee(r.src)), r.tagName === "VIDEO" && (o = await ee(r.poster)), r.tagName === "CANVAS" && await new Promise(s => {
            r.toBlob(async l => {
                o = await X(l), s()
            })
        });
        else if (typeof OffscreenCanvas < "u" && r instanceof OffscreenCanvas) {
            const s = await r.convertToBlob();
            o = await X(s)
        } else(r instanceof File || r instanceof Blob) && (o = await X(r));
        return new Uint8Array(o)
    };
var it = ee;
const ct = rt,
    lt = nt,
    ut = ot,
    dt = st,
    ft = at,
    pt = it;
var ht = {
    defaultOptions: ct,
    spawnWorker: lt,
    terminateWorker: ut,
    onMessage: dt,
    send: ft,
    loadImage: pt
};
const mt = Te,
    gt = Ie,
    T = fe,
    {
        log: se
    } = z,
    vt = te,
    {
        defaultOEM: wt
    } = $e,
    {
        defaultOptions: yt,
        spawnWorker: bt,
        terminateWorker: Et,
        onMessage: Lt,
        loadImage: ae,
        send: kt
    } = ht;
let ie = 0;
var he = async (r = {}) => {
    const o = vt("Worker", ie),
        {
            logger: s,
            errorHandler: l,
            ...i
        } = mt({
            ...yt,
            ...r
        }),
        c = {},
        d = {};
    let v, O;
    const j = new Promise((f, p) => {
            O = f, v = p
        }),
        $ = f => {
            v(f.message)
        };
    let h = bt(i);
    h.onerror = $, ie += 1;
    const y = (f, p) => {
            c[f] = p
        },
        _ = (f, p) => {
            d[f] = p
        },
        w = ({
            id: f,
            action: p,
            payload: g
        }) => new Promise((b, E) => {
            se(`[${o}]: Start ${f}, action=${p}`), y(p, b), _(p, E), kt(h, {
                workerId: o,
                jobId: f,
                action: p,
                payload: g
            })
        }),
        M = () => console.warn("`load` is depreciated and should be removed from code (workers now come pre-loaded)"),
        N = f => w(T({
            id: f,
            action: "load",
            payload: {
                options: i
            }
        })),
        P = (f, p, g) => w(T({
            id: g,
            action: "FS",
            payload: {
                method: "writeFile",
                args: [f, p]
            }
        })),
        A = (f, p) => w(T({
            id: p,
            action: "FS",
            payload: {
                method: "readFile",
                args: [f, {
                    encoding: "utf8"
                }]
            }
        })),
        W = (f, p) => w(T({
            id: p,
            action: "FS",
            payload: {
                method: "unlink",
                args: [f]
            }
        })),
        G = (f, p, g) => w(T({
            id: g,
            action: "FS",
            payload: {
                method: f,
                args: p
            }
        })),
        I = (f = "eng", p) => w(T({
            id: p,
            action: "loadLanguage",
            payload: {
                langs: f,
                options: i
            }
        })),
        K = (f = "eng", p = wt, g, b) => w(T({
            id: b,
            action: "initialize",
            payload: {
                langs: f,
                oem: p,
                config: g
            }
        })),
        H = (f = {}, p) => w(T({
            id: p,
            action: "setParameters",
            payload: {
                params: f
            }
        })),
        B = async (f, p = {}, g = {
            blocks: !0,
            text: !0,
            hocr: !0,
            tsv: !0
        }, b) => w(T({
            id: b,
            action: "recognize",
            payload: {
                image: await ae(f),
                options: p,
                output: g
            }
        })), C = (f = "Tesseract OCR Result", p = !1, g) => (console.log("`getPDF` function is depreciated. `recognize` option `savePDF` should be used instead."), w(T({
            id: g,
            action: "getPDF",
            payload: {
                title: f,
                textonly: p
            }
        }))), q = async (f, p) => w(T({
            id: p,
            action: "detect",
            payload: {
                image: await ae(f)
            }
        })), F = async () => (h !== null && (Et(h), h = null), Promise.resolve());
    Lt(h, ({
        workerId: f,
        jobId: p,
        status: g,
        action: b,
        data: E
    }) => {
        if (g === "resolve") {
            se(`[${f}]: Complete ${p}`);
            let U = E;
            b === "recognize" ? U = gt(E) : b === "getPDF" && (U = Array.from({
                ...E,
                length: Object.keys(E).length
            })), c[b]({
                jobId: p,
                data: U
            })
        } else if (g === "reject")
            if (d[b](E), b === "load" && v(E), l) l(E);
            else throw Error(E);
        else g === "progress" && s({
            ...E,
            userJobId: p
        })
    });
    const Z = {
        id: o,
        worker: h,
        setResolve: y,
        setReject: _,
        load: M,
        writeText: P,
        readText: A,
        removeFile: W,
        FS: G,
        loadLanguage: I,
        initialize: K,
        setParameters: H,
        recognize: B,
        getPDF: C,
        detect: q,
        terminate: F
    };
    return N().then(() => O(Z)).catch(() => {}), j
};
const me = he,
    St = async (r, o, s) => {
        const l = await me(s);
        return await l.loadLanguage(o), await l.initialize(o), l.recognize(r).finally(async () => {
            await l.terminate()
        })
    }, Ot = async (r, o) => {
        const s = await me(o);
        return await s.loadLanguage("osd"), await s.initialize("osd"), s.detect(r).finally(async () => {
            await s.terminate()
        })
    };
var At = {
        recognize: St,
        detect: Ot
    },
    Rt = {
        AFR: "afr",
        AMH: "amh",
        ARA: "ara",
        ASM: "asm",
        AZE: "aze",
        AZE_CYRL: "aze_cyrl",
        BEL: "bel",
        BEN: "ben",
        BOD: "bod",
        BOS: "bos",
        BUL: "bul",
        CAT: "cat",
        CEB: "ceb",
        CES: "ces",
        CHI_SIM: "chi_sim",
        CHI_TRA: "chi_tra",
        CHR: "chr",
        CYM: "cym",
        DAN: "dan",
        DEU: "deu",
        DZO: "dzo",
        ELL: "ell",
        ENG: "eng",
        ENM: "enm",
        EPO: "epo",
        EST: "est",
        EUS: "eus",
        FAS: "fas",
        FIN: "fin",
        FRA: "fra",
        FRK: "frk",
        FRM: "frm",
        GLE: "gle",
        GLG: "glg",
        GRC: "grc",
        GUJ: "guj",
        HAT: "hat",
        HEB: "heb",
        HIN: "hin",
        HRV: "hrv",
        HUN: "hun",
        IKU: "iku",
        IND: "ind",
        ISL: "isl",
        ITA: "ita",
        ITA_OLD: "ita_old",
        JAV: "jav",
        JPN: "jpn",
        KAN: "kan",
        KAT: "kat",
        KAT_OLD: "kat_old",
        KAZ: "kaz",
        KHM: "khm",
        KIR: "kir",
        KOR: "kor",
        KUR: "kur",
        LAO: "lao",
        LAT: "lat",
        LAV: "lav",
        LIT: "lit",
        MAL: "mal",
        MAR: "mar",
        MKD: "mkd",
        MLT: "mlt",
        MSA: "msa",
        MYA: "mya",
        NEP: "nep",
        NLD: "nld",
        NOR: "nor",
        ORI: "ori",
        PAN: "pan",
        POL: "pol",
        POR: "por",
        PUS: "pus",
        RON: "ron",
        RUS: "rus",
        SAN: "san",
        SIN: "sin",
        SLK: "slk",
        SLV: "slv",
        SPA: "spa",
        SPA_OLD: "spa_old",
        SQI: "sqi",
        SRP: "srp",
        SRP_LATN: "srp_latn",
        SWA: "swa",
        SWE: "swe",
        SYR: "syr",
        TAM: "tam",
        TEL: "tel",
        TGK: "tgk",
        TGL: "tgl",
        THA: "tha",
        TIR: "tir",
        TUR: "tur",
        UIG: "uig",
        UKR: "ukr",
        URD: "urd",
        UZB: "uzb",
        UZB_CYRL: "uzb_cyrl",
        VIE: "vie",
        YID: "yid"
    },
    Tt = {
        OSD_ONLY: "0",
        AUTO_OSD: "1",
        AUTO_ONLY: "2",
        AUTO: "3",
        SINGLE_COLUMN: "4",
        SINGLE_BLOCK_VERT_TEXT: "5",
        SINGLE_BLOCK: "6",
        SINGLE_LINE: "7",
        SINGLE_WORD: "8",
        CIRCLE_WORD: "9",
        SINGLE_CHAR: "10",
        SPARSE_TEXT: "11",
        SPARSE_TEXT_OSD: "12",
        RAW_LINE: "13"
    };
const It = be,
    jt = he,
    $t = At,
    _t = Rt,
    Nt = pe,
    Pt = Tt,
    {
        setLogging: Ct
    } = z;
var Mt = {
    languages: _t,
    OEM: Nt,
    PSM: Pt,
    createScheduler: It,
    createWorker: jt,
    setLogging: Ct,
    ...$t
};
const ce = document.getElementById("progress"),
    le = document.getElementById("input-image"),
    ue = document.getElementById("file"),
    de = document.getElementById("extracted-text"),
    Dt = [{
        code: "ara",
        name: "Arabic"
    }, {
        code: "ben",
        name: "Bengali"
    }, {
        code: "dan",
        name: "Danish"
    }, {
        code: "deu",
        name: "German"
    }, {
        code: "eng",
        name: "English"
    }, {
        code: "fas",
        name: "Persian"
    }, {
        code: "fin",
        name: "Finnish"
    }, {
        code: "fra",
        name: "French"
    }, {
        code: "gle",
        name: "Irish"
    }, {
        code: "ita",
        name: "Italian"
    }, {
        code: "chi_sim",
        name: "Chinese - Simplified"
    }, {
        code: "chi_tra",
        name: "Chinese - Traditional"
    }, {
        code: "kor",
        name: "Korean"
    }, {
        code: "jpn",
        name: "Japanese"
    }, {
        code: "por",
        name: "Portuguese"
    }, {
        code: "pol",
        name: "Portuguese"
    }, {
        code: "hin",
        name: "Hindi"
    }, {
        code: "rus",
        name: "Russian"
    }, {
        code: "tur",
        name: "Turkish"
    }, {
        code: "spa",
        name: "Spanish; Castilian"
    }, {
        code: "spa_old",
        name: "Spanish; Castilian - Old"
    }, {
        code: "nor",
        name: "Norwegian"
    }, {
        code: "nld",
        name: "Dutch; Flemish"
    }, {
        code: "est",
        name: "Estonian"
    }];
let Y = "",
    V = "/quote.webp";
document.addEventListener("DOMContentLoaded", async () => {
    var o, s, l;
    Dt.forEach(i => {
        var d;
        const c = document.createElement("option");
        c.textContent = i.name, c.value = i.code, (d = document.getElementById("language")) == null || d.appendChild(c)
    });
    const r = await Mt.createWorker({
        logger: i => {
            const c = i.progress * 100;
            ce.value = c, ce.textContent = "" + c, document.getElementById("logs").innerText = `${i.status.replace("tesseract", "")} (${c}%)
(${i.userJobId}/${i.workerId})`
        }
    });
    ue.addEventListener("change", i => {
        if (Y = i.target.files[0], Y && Y.type.startsWith("image/")) {
            const c = new FileReader;
            c.addEventListener("load", d => {
                V = d.target.result, le.src = d.target.result, document.getElementById("file-name").textContent = Y.name
            }), c.readAsDataURL(Y)
        }
    }), (o = document.getElementById("btn-file")) == null || o.addEventListener("click", () => {
        ue.click()
    }), (s = document.getElementById("form-extract")) == null || s.addEventListener("submit", async i => {
        i.preventDefault();
        try {
            const c = i.target.elements[0].value,
                d = i.target.elements[1].value;
            c && c.length > 10 && (V = c, le.src = V), await r.loadLanguage(d), await r.initialize(d);
            const {
                data: {
                    text: v
                }
            } = await r.recognize(V);
            de.innerText = v, window.scrollTo({
                top: de.offsetTop - 70,
                behavior: "smooth"
            })
        } catch (c) {
            document.getElementById("logs").innerText = c.message
        }
    }), (l = document.getElementById("btn-terminate-worker")) == null || l.addEventListener("click", async () => {
        window.confirm("Do you really want to terminate worker?") && await r.terminate()
    })
});