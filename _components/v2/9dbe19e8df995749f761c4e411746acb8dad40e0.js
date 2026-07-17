const Ve = () => Promise.resolve().then(() => Re), P = globalThis.__GLOBALS__.ReactJSXRuntime, { Fragment: $e, jsx: a, jsxs: l } = P;
"use" in globalThis.__GLOBALS__.React || (globalThis.__GLOBALS__.React.use = () => {
  throw new Error("`use` is not available in this version of React. Make currently only supports React 18, but `use` is only available in React 19+.");
});
function M(s) {
  const r = s?.props?._fgT, o = typeof r == "function" || typeof r == "string" || typeof r == "object" && r !== null && "$$typeof" in r;
  return globalThis.__GLOBALS__.React.isValidElement(s) && o;
}
function u(s) {
  return globalThis.__GLOBALS__.React.isValidElement(s) && s.type === "fg-txt";
}
function F(s) {
  const { _fgT: r, _fgS: o, _fgB: p, _fgD: f, ...c } = s.props;
  return globalThis.__GLOBALS__.React.createElement(r, {
    ...c,
    key: s.key
  }, c.children);
}
function y(s) {
  return M(s) ? F(s) : u(s) ? s.props.children : s;
}
const h = globalThis.__GLOBALS__.React.Children, O = {
  map(s, r, o) {
    return h.map(s, (p, f) => {
      const c = y(p);
      return u(p) ? null : r.call(o, c, f);
    });
  },
  forEach(s, r, o) {
    h.forEach(s, (p, f) => {
      if (u(p))
        return;
      const c = y(p);
      r.call(o, c, f);
    });
  },
  count(s) {
    let r = 0;
    return h.forEach(s, (o) => {
      u(o) || r++;
    }), r;
  },
  toArray(s) {
    const r = [];
    return h.forEach(s, (o) => {
      u(o) || r.push(y(o));
    }), r;
  },
  only(s) {
    const r = h.only(s);
    return y(r);
  }
}, S = [
  "_fgT",
  "_fgS",
  "_fgB",
  "_fgD"
];
function R(s) {
  if (s == null || typeof s != "object") return s;
  const r = Object.keys(s);
  let o = !1;
  for (let f = 0; f < S.length; f++)
    if (S[f] in s) {
      o = !0;
      break;
    }
  if (!o) return s;
  const p = {};
  for (let f = 0; f < r.length; f++) {
    const c = r[f];
    S.indexOf(c) === -1 && (p[c] = s[c]);
  }
  return p;
}
const E = globalThis.__GLOBALS__.React.cloneElement, V = (s, ...r) => {
  if (M(s)) {
    const o = F(s), p = r[0];
    return p != null && typeof p == "object" && (r = [
      R(p),
      ...r.slice(1)
    ]), E(o, ...r);
  }
  return E(s, ...r);
}, T = {
  ...globalThis.__GLOBALS__.React,
  Children: O,
  cloneElement: V
}, { Component: Ie, createContext: Ge, createElement: w, createFactory: qe, createRef: He, forwardRef: z, Fragment: Ke, isValidElement: Ze, lazy: We, memo: Ye, Profiler: Je, PureComponent: Ue, startTransition: Xe, StrictMode: Qe, Suspense: ea, use: aa, useCallback: ta, useContext: la, useDebugValue: sa, useDeferredValue: da, useEffect: $, useId: ra, useImperativeHandle: oa, useInsertionEffect: pa, useLayoutEffect: ga, useMemo: fa, useReducer: ca, useRef: na, useState: v, useSyncExternalStore: ia, useTransition: ba, version: _a, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ma } = globalThis.__GLOBALS__.React, e = T.forwardRef(function({ _fgT: r, _fgS: o, _fgB: p, ...f }, c) {
  const _ = c ? { ...f, ref: c } : f;
  return typeof window < "u" && window.__FGInspectorCmp ? T.createElement(window.__FGInspectorCmp, { _fgT: r, _fgS: o, _fgB: p, ..._ }) : T.createElement(r, _);
});
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const I = (s) => s.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), G = (s) => s.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (r, o, p) => p ? p.toUpperCase() : o.toLowerCase()
), j = (s) => {
  const r = G(s);
  return r.charAt(0).toUpperCase() + r.slice(1);
}, D = (...s) => s.filter((r, o, p) => !!r && r.trim() !== "" && p.indexOf(r) === o).join(" ").trim();
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var q = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const H = z(
  ({
    color: s = "currentColor",
    size: r = 24,
    strokeWidth: o = 2,
    absoluteStrokeWidth: p,
    className: f = "",
    children: c,
    iconNode: _,
    ...k
  }, B) => w(
    "svg",
    {
      ref: B,
      ...q,
      width: r,
      height: r,
      stroke: s,
      strokeWidth: p ? Number(o) * 24 / Number(r) : o,
      className: D("lucide", f),
      ...k
    },
    [
      ..._.map(([x, t]) => w(x, t)),
      ...Array.isArray(c) ? c : [c]
    ]
  )
);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const g = (s, r) => {
  const o = z(
    ({ className: p, ...f }, c) => w(H, {
      ref: c,
      iconNode: r,
      className: D(
        `lucide-${I(j(s))}`,
        `lucide-${s}`,
        p
      ),
      ...f
    })
  );
  return o.displayName = j(s), o;
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const K = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], m = g("arrow-right", K);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Z = [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y"
    }
  ]
], W = g("book-open", Z);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Y = [
  [
    "path",
    {
      d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
      key: "l5xja"
    }
  ],
  [
    "path",
    {
      d: "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",
      key: "ep3f8r"
    }
  ],
  ["path", { d: "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4", key: "1p4c4q" }],
  ["path", { d: "M17.599 6.5a3 3 0 0 0 .399-1.375", key: "tmeiqw" }],
  ["path", { d: "M6.003 5.125A3 3 0 0 0 6.401 6.5", key: "105sqy" }],
  ["path", { d: "M3.477 10.896a4 4 0 0 1 .585-.396", key: "ql3yin" }],
  ["path", { d: "M19.938 10.5a4 4 0 0 1 .585.396", key: "1qfode" }],
  ["path", { d: "M6 18a4 4 0 0 1-1.967-.516", key: "2e4loj" }],
  ["path", { d: "M19.967 17.484A4 4 0 0 1 18 18", key: "159ez6" }]
], J = g("brain", Y);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const U = [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }]
], C = g("download", U);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const X = [
  [
    "path",
    {
      d: "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",
      key: "1ptgy4"
    }
  ],
  [
    "path",
    {
      d: "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",
      key: "1sl1rz"
    }
  ]
], Q = g("droplets", X);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ee = [
  ["path", { d: "M14.4 14.4 9.6 9.6", key: "ic80wn" }],
  [
    "path",
    {
      d: "M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z",
      key: "nnl7wr"
    }
  ],
  ["path", { d: "m21.5 21.5-1.4-1.4", key: "1f1ice" }],
  ["path", { d: "M3.9 3.9 2.5 2.5", key: "1evmna" }],
  [
    "path",
    {
      d: "M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z",
      key: "yhosts"
    }
  ]
], ae = g("dumbbell", ee);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const te = [
  [
    "path",
    { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z", key: "1jg4f8" }
  ]
], le = g("facebook", te);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const se = [
  [
    "path",
    {
      d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
      key: "96xj49"
    }
  ]
], de = g("flame", se);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const re = [
  ["rect", { x: "3", y: "8", width: "18", height: "4", rx: "1", key: "bkv52" }],
  ["path", { d: "M12 8v13", key: "1c76mn" }],
  ["path", { d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7", key: "6wjy6b" }],
  [
    "path",
    {
      d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",
      key: "1ihvrl"
    }
  ]
], oe = g("gift", re);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pe = [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ]
], ge = g("heart", pe);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fe = [
  ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5", key: "2e1cvw" }],
  ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" }],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }]
], ce = g("instagram", fe);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ne = [
  [
    "path",
    {
      d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
      key: "nnexq3"
    }
  ],
  ["path", { d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12", key: "mt58a7" }]
], A = g("leaf", ne);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ie = [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
], be = g("mail", ie);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _e = [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]
], me = g("menu", _e);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xe = [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
], he = g("moon", xe);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ue = [
  [
    "path",
    {
      d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
      key: "1a0edw"
    }
  ],
  ["path", { d: "M12 22V12", key: "d0xqtd" }],
  ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }]
], ye = g("package", ue);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ve = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
], Ae = g("refresh-cw", ve);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ke = [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx"
    }
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }]
], Be = g("sparkles", ke);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Se = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
], Te = g("star", Se);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ne = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
], we = g("sun", Ne);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ee = [
  ["path", { d: "M12.8 19.6A2 2 0 1 0 14 16H2", key: "148xed" }],
  ["path", { d: "M17.5 8a2.5 2.5 0 1 1 2 4H2", key: "1u4tom" }],
  ["path", { d: "M9.8 4.4A2 2 0 1 1 11 8H2", key: "75valh" }]
], je = g("wind", Ee);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ce = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Me = g("x", Ce);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fe = [
  [
    "path",
    {
      d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",
      key: "1q2vi4"
    }
  ],
  ["path", { d: "m10 15 5-3-5-3z", key: "1jp15x" }]
], ze = g("youtube", Fe), N = [
  { label: "Domov", href: "#domov" },
  { label: "Kategórie", href: "#kategorie" },
  { label: "Chronos Vitae", href: "#chronos", accent: !0 },
  { label: "Články", href: "/clanky/" },
  { label: "Ambasádori", href: "#ambasadori" },
  { label: "O nás", href: "#o-nas" },
  { label: "Kontakt", href: "#kontakt" }
], De = [
  { icon: ae, label: "Fitness", bg: "#E8F4ED", color: "#3d7857" },
  { icon: de, label: "Jóga", bg: "#FFF0E6", color: "#B86A2E" },
  { icon: je, label: "Pohyb", bg: "#E8EFF8", color: "#3A6EA8" },
  { icon: A, label: "Výživa", bg: "#EDF5E8", color: "#4E8B68" },
  { icon: ye, label: "Doplnky výživy", bg: "#F3EDE4", color: "#8A6A4A" },
  { icon: he, label: "Spánok", bg: "#EDE8F5", color: "#6A5A9A" },
  { icon: Ae, label: "Regenerácia", bg: "#E6F4F0", color: "#3A8A78" },
  { icon: J, label: "Myseľ", bg: "#F5EBF0", color: "#9A4A78" },
  { icon: W, label: "Osobný rozvoj", bg: "#FFF8E6", color: "#A87A2E" },
  { icon: ge, label: "Sexualita", bg: "#FDEAEA", color: "#B84A4A" },
  { icon: Be, label: "Wellbeing", bg: "#EFF5E6", color: "#6A8A3A" },
  { icon: Q, label: "Starostlivosť o telo", bg: "#E6F4F5", color: "#3A8A9A" },
  { icon: we, label: "Lifestyle", bg: "#FFF6E6", color: "#B8882E" },
  { icon: oe, label: "Darčeky", bg: "#F5E8F5", color: "#8A4A9A" }
], Le = [
  {
    id: 1,
    name: "Omega-3 Ultra Pure",
    brand: "Nordic Naturals",
    category: "Doplnky výživy",
    description: "Prémiové omega-3 mastné kyseliny z divokých rýb nórskych morí. Podporuje zdravie srdca, mozgu a zraku.",
    price: "34,90 €",
    badge: "Odporúčame",
    badgeBg: "#4E8B68",
    rating: 4.9,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1728931710064-57f73342f5f5?w=600&h=600&fit=crop&auto=format"
  },
  {
    id: 2,
    name: "Horčík Glycinát 400",
    brand: "Magnesium Pro",
    category: "Regenerácia",
    description: "Najlepšie vstrebateľná forma horčíka pre telo. Ideálny pre kvalitný spánok, svalovú regeneráciu a pokoj mysle.",
    price: "24,90 €",
    badge: "Najobľúbenejšie",
    badgeBg: "#1C1C1A",
    rating: 4.8,
    reviews: 256,
    image: "https://images.unsplash.com/photo-1610599849066-26448093e044?w=600&h=600&fit=crop&auto=format"
  },
  {
    id: 3,
    name: "Korkový jogamatrac Premium",
    brand: "Manduka",
    category: "Jóga",
    description: "Ekologický matrac z prírodného korku a prírodnej gumy. Výnimočná priľnavosť, odolnosť a udržateľnosť.",
    price: "89,90 €",
    badge: "Novinka",
    badgeBg: "#C4853A",
    rating: 4.7,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1558632218-4d2bc591f898?w=600&h=600&fit=crop&auto=format"
  }
], Pe = [
  {
    id: 1,
    name: "Lucia Kováčová",
    role: "Certifikovaná jogínka & wellness koučka",
    bio: "Lucia spája východnú filozofiu s moderným vedeckým prístupom k zdraviu. Vedie kurzy jógy a meditácie po celom Slovensku a verí, že každý deň je novou príležitosťou.",
    categories: ["Jóga", "Myseľ", "Wellbeing"],
    image: "https://images.unsplash.com/photo-1759476530043-73bc19584efd?w=600&h=800&fit=crop&auto=format"
  },
  {
    id: 2,
    name: "Marek Holub",
    role: "Výkonnostný tréner & nutričný poradca",
    bio: "Marek pomáha športovcom aj bežným ľuďom nájsť rovnováhu medzi výkonom a regeneráciou. Verí, že zdravie je tá najlepšia investícia, akú môžete urobiť.",
    categories: ["Fitness", "Výživa", "Regenerácia"],
    image: "https://images.unsplash.com/photo-1780155744061-5992bdd64467?w=600&h=800&fit=crop&auto=format"
  },
  {
    id: 3,
    name: "Natália Blaho",
    role: "Psychologička & mindfulness lektorka",
    bio: "Natália sa venuje duševnému zdraviu a pomáha ľuďom rozvíjať odolnosť a vnútorný pokoj. Je autorkou populárneho podcastu Tichá sila.",
    categories: ["Myseľ", "Osobný rozvoj", "Spánok"],
    image: "https://images.unsplash.com/photo-1759476598140-37fb141d1695?w=600&h=800&fit=crop&auto=format"
  }
], i = [
  {
    id: 1,
    featured: !0,
    category: "Myseľ",
    title: "Menej rozhodovania, viac priestoru v hlave",
    excerpt: "Rozhodovacia únava nevzniká iba pri veľkých voľbách. Pomôcť môže niekoľko jednoduchých pravidiel, ktoré šetria pozornosť bez toho, aby obmedzovali slobodu.",
    readTime: "4 min čítania",
    date: "16. júla 2026",
    image: "/assets/clanky/mysel.png",
    href: "/clanky/mene-rozhodovani-viac-priestoru/"
  },
  {
    id: 2,
    category: "Duša",
    title: "Malé rituály, ktoré dávajú dňu zmysel",
    excerpt: "Rituál nemusí byť veľký ani slávnostný. Pravidelný vedomý moment môže priniesť pocit ukotvenia.",
    readTime: "4 min čítania",
    date: "14. júla 2026",
    image: "/assets/clanky/dusa.png",
    href: "/clanky/male-ritualy-pre-zmysluplny-den/"
  },
  {
    id: 3,
    category: "Telo",
    title: "Pohyblivosť a regenerácia bez tlaku na výkon",
    excerpt: "Stuhnuté telo často nepotrebuje náročný tréning, ale pestrú a primeranú dávku pohybu.",
    readTime: "4 min čítania",
    date: "10. júla 2026",
    image: "/assets/clanky/telo.png",
    href: "/clanky/pohyblivost-a-regeneracia-bez-tlaku/"
  },
  {
    id: 4,
    category: "Myseľ",
    title: "Mentálny oddych nie je prázdno",
    excerpt: "Myseľ potrebuje zmenu nárokov, menej vstupov a chvíle bez povinnosti niečo spracovať.",
    readTime: "4 min čítania",
    date: "7. júla 2026",
    image: "/assets/clanky/mysel.png",
    href: "/clanky/mentalny-oddych-nie-je-prazdno/"
  }
];
function Oe() {
  const [s, r] = v(!1), [o, p] = v(!1), [f, c] = v(""), [_, k] = v(!1);
  const [ambOpen, setAmbOpen] = v(() => {
    try {
      return sessionStorage.getItem("zm_amb") === "1";
    } catch {
      return !1;
    }
  }), [ambPw, setAmbPw] = v(""), [ambErr, setAmbErr] = v(!1);
  const ambSubmit = (t) => {
    t.preventDefault();
    if (ambPw === "ChronosVitae") {
      setAmbOpen(!0);
      setAmbErr(!1);
      try {
        sessionStorage.setItem("zm_amb", "1");
      } catch {}
    } else {
      setAmbErr(!0);
    }
  };
  $(() => {
    const t = () => p(window.scrollY > 60);
    return window.addEventListener("scroll", t, { passive: !0 }), () => window.removeEventListener("scroll", t);
  }, []);
  const B = (t) => {
    t.preventDefault(), f && (k(!0), c(""));
  }, x = o || s ? "#1C1C1A" : "#ffffff";
  return /* @__PURE__ */ l(e, { _fgT: "div", _fgS: "d3bl0", _fgB: 1784204816503, _fgD: !0, style: { fontFamily: "'DM Sans', sans-serif" }, className: "min-h-screen bg-[#F8F5F0] text-[#1C1C1A]", "data-fg-d3bl0": ":0:/src/app/App.tsx:172:5:6681:48152:e:div:xtetetxte:1", children: [
    /* @__PURE__ */ l(
      e,
      {
        _fgT: "header",
        _fgS: "d3bl2",
        _fgB: 1784204816503,
        className: "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        style: {
          background: o ? "rgba(248,245,240,0.96)" : "transparent",
          backdropFilter: o ? "blur(16px)" : "none",
          boxShadow: o ? "0 1px 0 rgba(28,28,26,0.08)" : "none"
        },
        "data-fg-d3bl2": ":0:/src/app/App.tsx:175:7:6828:3332:e:header:etxte",
        children: [
            /* @__PURE__ */ l(e, { _fgT: "div", _fgS: "d3bl3", _fgB: 1784204816503, className: "zm-headrow max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 flex items-center justify-between h-16 lg:h-20", "data-fg-d3bl3": ":0:/src/app/App.tsx:183:9:7173:2111:e:div:xtetxtetxte", children: [
            /* @__PURE__ */ l(e, { _fgT: "a", _fgS: "d3bl5", _fgB: 1784204816503, href: "#domov", className: "flex items-center gap-2.5 flex-shrink-0", "data-fg-d3bl5": ":0:/src/app/App.tsx:185:11:7311:509:e:a:ete", children: [
              /* @__PURE__ */ a(e, { _fgT: "div", _fgS: "d3bl6", _fgB: 1784204816503, className: "w-8 h-8 rounded-full bg-[#4E8B68] flex items-center justify-center", "data-fg-d3bl6": ":0:/src/app/App.tsx:186:13:7393:157:e:div:e", children: /* @__PURE__ */ a(e, { _fgT: A, _fgS: "d3bl7", _fgB: 1784204816503, className: "w-4 h-4 text-white", "data-fg-d3bl7": ":0:node_modules/lucide-react:187:15:7492:39:e:Leaf::::::Dxgq" }) }),
              /* @__PURE__ */ a(
                e,
                {
                  _fgT: "span",
                  _fgS: "d3bl8",
                  _fgB: 1784204816503,
                  className: "text-xl font-semibold tracking-tight transition-colors duration-300",
                  style: { fontFamily: "'Playfair Display', serif", color: x },
                  "data-fg-d3bl8": ":0:/src/app/App.tsx:189:13:7563:242:e:span:t",
                  children: "zije.me"
                }
              )
            ] }),
            /* @__PURE__ */ a(e, { _fgT: "nav", _fgS: "d3bl11", _fgB: 1784204816503, className: "zm-nav hidden xl:flex items-center gap-7", "data-fg-d3bl11": ":0:/src/app/App.tsx:198:11:7869:440:e:nav:x", children: N.map((t) => /* @__PURE__ */ a(
              e,
              {
                _fgT: "a",
                _fgS: "d3bl13",
                _fgB: 1784204816503,
                href: t.href,
                className: "text-sm font-medium transition-colors duration-300 hover:opacity-70",
                style: { color: t.accent ? "#4E8B68" : x },
                "data-fg-d3bl13": ":0:/src/app/App.tsx:200:15:7974:302:e:a:x",
                children: t.label
              },
              t.label
            )) }),
            /* @__PURE__ */ l(e, { _fgT: "div", _fgS: "d3bl16", _fgB: 1784204816503, className: "flex items-center gap-3", "data-fg-d3bl16": ":0:/src/app/App.tsx:212:11:8355:914:e:div:ete", children: [
              /* @__PURE__ */ a(
                e,
                {
                  _fgT: "a",
                  _fgS: "d3bl17",
                  _fgB: 1784204816503,
                  href: "https://www.instagram.com/zije.me/",
                  target: "_blank",
                  rel: "noreferrer",
                  className: "hidden lg:inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300",
                  style: o ? { background: "#4E8B68", color: "#fff" } : { background: "rgba(255,255,255,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.3)", backdropFilter: "blur(8px)" },
                  "data-fg-d3bl17": ":0:/src/app/App.tsx:213:13:8409:497:e:a:t",
                  children: "Instagram ↗"
                }
              ),
              /* @__PURE__ */ a(
                e,
                {
                  _fgT: "button",
                  _fgS: "d3bl19",
                  _fgB: 1784204816503,
                  onClick: () => r(!s),
                  className: "zm-burger xl:hidden p-2 rounded-lg transition-colors",
                  style: { color: x },
                  "aria-label": "Menu",
                  "data-fg-d3bl19": ":0:/src/app/App.tsx:224:13:8919:333:e:button:x",
                  children: s ? /* @__PURE__ */ a(e, { _fgT: Me, _fgS: "d3bl21", _fgB: 1784204816503, className: "w-5 h-5", "data-fg-d3bl21": ":0:node_modules/lucide-react:230:29:9173:25:e:X::::::TvS" }) : /* @__PURE__ */ a(e, { _fgT: me, _fgS: "d3bl22", _fgB: 1784204816503, className: "w-5 h-5", "data-fg-d3bl22": ":0:node_modules/lucide-react:230:57:9201:28:e:Menu::::::D5X5" })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ a(
            e,
            {
              _fgT: "div",
              _fgS: "d3bl24",
              _fgB: 1784204816503,
              className: "zm-mobilemenu xl:hidden overflow-hidden transition-all duration-300",
              style: {
                maxHeight: s ? "500px" : "0px",
                background: "#F8F5F0",
                borderTop: s ? "1px solid rgba(28,28,26,0.08)" : "none"
              },
              "data-fg-d3bl24": ":0:/src/app/App.tsx:236:9:9322:822:e:div:e",
              children: /* @__PURE__ */ a(e, { _fgT: "nav", _fgS: "d3bl25", _fgB: 1784204816503, className: "px-5 sm:px-8 py-6 flex flex-col gap-1", "data-fg-d3bl25": ":0:/src/app/App.tsx:244:11:9621:508:e:nav:x", children: N.map((t) => /* @__PURE__ */ a(
                e,
                {
                  _fgT: "a",
                  _fgS: "d3bl27",
                  _fgB: 1784204816503,
                  href: t.href,
                  onClick: () => r(!1),
                  className: "py-2.5 px-3 rounded-xl text-base font-medium transition-colors hover:bg-[#F0EBE3]",
                  style: { color: t.accent ? "#4E8B68" : "#1C1C1A" },
                  "data-fg-d3bl27": ":0:/src/app/App.tsx:246:15:9730:366:e:a:x",
                  children: t.label
                },
                t.label
              )) })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ l(e, { _fgT: "main", _fgS: "d3bl29", _fgB: 1784204816503, "data-fg-d3bl29": ":0:/src/app/App.tsx:260:7:10168:36968:e:main:xtetxtetxtetxtetxtetxtetxtetxtetxte", children: [
      /* @__PURE__ */ l(e, { _fgT: "section", _fgS: "d3bl31", _fgB: 1784204816503, id: "domov", className: "relative h-screen min-h-[620px] flex items-center overflow-hidden", "data-fg-d3bl31": ":0:/src/app/App.tsx:262:9:10212:3017:e:section:etetxte", children: [
        /* @__PURE__ */ l(e, { _fgT: "div", _fgS: "d3bl32", _fgB: 1784204816503, className: "absolute inset-0 bg-[#2C3D30]", "data-fg-d3bl32": ":0:/src/app/App.tsx:263:11:10321:586:e:div:ete", children: [
          /* @__PURE__ */ a(
            e,
            {
              _fgT: "img",
              _fgS: "d3bl33",
              _fgB: 1784204816503,
              src: "https://images.unsplash.com/photo-1524863479829-916d8e77f114?w=1920&h=1080&fit=crop&auto=format",
              alt: "Žena cvičiaca na vrchole hory pri východe slnka",
              className: "w-full h-full object-cover",
              style: { opacity: 0.65 },
              "data-fg-d3bl33": ":0:/src/app/App.tsx:264:13:10381:296:e:img"
            }
          ),
          /* @__PURE__ */ a(
            e,
            {
              _fgT: "div",
              _fgS: "d3bl34",
              _fgB: 1784204816503,
              className: "absolute inset-0",
              style: { background: "linear-gradient(135deg, rgba(28,28,26,0.55) 0%, rgba(28,28,26,0.2) 50%, rgba(28,28,26,0.65) 100%)" },
              "data-fg-d3bl34": ":0:/src/app/App.tsx:270:13:10690:200:e:div"
            }
          )
        ] }),
        /* @__PURE__ */ a(e, { _fgT: "div", _fgS: "d3bl35", _fgB: 1784204816503, className: "relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 w-full", "data-fg-d3bl35": ":0:/src/app/App.tsx:276:11:10919:1948:e:div:e", children: /* @__PURE__ */ l(e, { _fgT: "div", _fgS: "d3bl36", _fgB: 1784204816503, className: "max-w-2xl", "data-fg-d3bl36": ":0:/src/app/App.tsx:277:13:11010:1840:e:div:etetete", children: [
          /* @__PURE__ */ a(
            e,
            {
              _fgT: "p",
              _fgS: "d3bl37",
              _fgB: 1784204816503,
              className: "text-sm font-medium tracking-widest uppercase mb-6",
              style: { color: "#A8D4B8", letterSpacing: "0.2em" },
              "data-fg-d3bl37": ":0:/src/app/App.tsx:278:15:11052:222:e:p:t",
              children: "Wellness & Lifestyle"
            }
          ),
          /* @__PURE__ */ l(
            e,
            {
              _fgT: "h1",
              _fgS: "d3bl39",
              _fgB: 1784204816503,
              className: "text-5xl sm:text-6xl lg:text-7xl font-normal text-white mb-6 leading-tight",
              style: { fontFamily: "'Playfair Display', serif" },
              "data-fg-d3bl39": ":0:/src/app/App.tsx:284:15:11289:360:e:h1:tstest",
              children: [
                "Všetko pre telo,",
                " ",
                /* @__PURE__ */ a(e, { _fgT: "em", _fgS: "d3bl42", _fgB: 1784204816503, className: "not-italic", style: { color: "#A8D4B8" }, "data-fg-d3bl42": ":0:/src/app/App.tsx:289:17:11534:66:e:em:t", children: "myseľ" }),
                " ",
                "a dušu."
              ]
            }
          ),
          /* @__PURE__ */ a(e, { _fgT: "p", _fgS: "d3bl46", _fgB: 1784204816503, className: "text-white/75 text-lg lg:text-xl mb-10 leading-relaxed max-w-xl", "data-fg-d3bl46": ":0:/src/app/App.tsx:292:15:11664:203:e:p:t", children: "Starostlivo vyberáme produkty, ktoré podporujú zdravší, spokojnejší a kvalitnejší život." }),
          /* @__PURE__ */ l(e, { _fgT: "div", _fgS: "d3bl48", _fgB: 1784204816503, className: "flex flex-col sm:flex-row gap-4", "data-fg-d3bl48": ":0:/src/app/App.tsx:295:15:11882:949:e:div:ete", children: [
            /* @__PURE__ */ l(
              e,
              {
                _fgT: "a",
                _fgS: "d3bl49",
                _fgB: 1784204816503,
                href: "#o-nas",
                className: "inline-flex items-center justify-center gap-2.5 font-medium px-8 py-4 rounded-full transition-all duration-300 hover:gap-4",
                style: { background: "#4E8B68", color: "#fff" },
                "data-fg-d3bl49": ":0:/src/app/App.tsx:296:17:11948:382:e:a:te",
                children: [
                  "Spoznať zije.me",
                  /* @__PURE__ */ a(e, { _fgT: m, _fgS: "d3bl51", _fgB: 1784204816503, className: "w-4 h-4", "data-fg-d3bl51": ":0:node_modules/lucide-react:302:19:12275:34:e:ArrowRight::::::s5N" })
                ]
              }
            ),
            /* @__PURE__ */ l(
              e,
              {
                _fgT: "a",
                _fgS: "d3bl52",
                _fgB: 1784204816503,
                href: "#chronos",
                className: "inline-flex items-center justify-center gap-2.5 font-medium px-8 py-4 rounded-full transition-all duration-300",
                style: { background: "rgba(255,255,255,0.12)", color: "#fff", border: "1px solid rgba(255,255,255,0.28)", backdropFilter: "blur(8px)" },
                "data-fg-d3bl52": ":0:/src/app/App.tsx:304:17:12347:463:e:a:et",
                children: [
                  /* @__PURE__ */ a(e, { _fgT: C, _fgS: "d3bl53", _fgB: 1784204816503, className: "w-4 h-4", "data-fg-d3bl53": ":0:node_modules/lucide-react:309:19:12716:32:e:Download::::::yh6" }),
                  "Bezplatná aplikácia"
                ]
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ a(e, { _fgT: "div", _fgS: "d3bl56", _fgB: 1784204816503, className: "absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2", "data-fg-d3bl56": ":0:/src/app/App.tsx:317:11:12916:294:e:div:e", children: /* @__PURE__ */ a(
          e,
          {
            _fgT: "div",
            _fgS: "d3bl57",
            _fgB: 1784204816503,
            className: "w-px h-14",
            style: { background: "linear-gradient(to bottom, rgba(255,255,255,0.0), rgba(255,255,255,0.35))" },
            "data-fg-d3bl57": ":0:/src/app/App.tsx:318:13:13024:169:e:div"
          }
        ) })
      ] }),
      /* @__PURE__ */ a(e, { _fgT: "div", _fgS: "d3bl59", _fgB: 1784204816503, style: { background: "#1C1C1A" }, className: "py-5 overflow-hidden", "data-fg-d3bl59": ":0:/src/app/App.tsx:326:9:13273:573:e:div:e", children: /* @__PURE__ */ a(e, { _fgT: "div", _fgS: "d3bl60", _fgB: 1784204816503, className: "max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 flex flex-wrap items-center justify-center gap-6 lg:gap-14", "data-fg-d3bl60": ":0:/src/app/App.tsx:327:11:13356:475:e:div:x", children: ["Starostlivo vybrané", "Odborne overené", "Zodpovedné zdroje", "Udržateľnosť", "Overená komunita"].map((t) => /* @__PURE__ */ a(e, { _fgT: "span", _fgS: "d3bl62", _fgB: 1784204816503, className: "text-xs font-medium tracking-widest uppercase whitespace-nowrap", style: { color: "rgba(255,255,255,0.35)" }, "data-fg-d3bl62": ":0:/src/app/App.tsx:329:15:13616:182:e:span:x", children: t }, t)) }) }),
      /* @__PURE__ */ a(e, { _fgT: "section", _fgS: "d3bl65", _fgB: 1784204816503, id: "kategorie", className: "py-24 lg:py-32", style: { background: "#F8F5F0" }, "data-fg-d3bl65": ":0:/src/app/App.tsx:337:9:13891:2718:e:section:e", children: /* @__PURE__ */ l(e, { _fgT: "div", _fgS: "d3bl66", _fgB: 1784204816503, className: "max-w-7xl mx-auto px-5 sm:px-8 lg:px-10", "data-fg-d3bl66": ":0:/src/app/App.tsx:338:11:13987:2603:e:div:ete", children: [
        /* @__PURE__ */ l(e, { _fgT: "div", _fgS: "d3bl67", _fgB: 1784204816503, className: "flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6", "data-fg-d3bl67": ":0:/src/app/App.tsx:339:13:14057:851:e:div:ete", children: [
          /* @__PURE__ */ l(e, { _fgT: "div", _fgS: "d3bl68", _fgB: 1784204816503, "data-fg-d3bl68": ":0:/src/app/App.tsx:340:15:14156:518:e:div:ete", children: [
            /* @__PURE__ */ a(e, { _fgT: "p", _fgS: "d3bl69", _fgB: 1784204816503, className: "text-sm font-medium tracking-widest uppercase mb-3", style: { color: "#4E8B68", letterSpacing: "0.18em" }, "data-fg-d3bl69": ":0:/src/app/App.tsx:341:17:14178:169:e:p:t", children: "Kategórie" }),
            /* @__PURE__ */ l(
              e,
              {
                _fgT: "h2",
                _fgS: "d3bl71",
                _fgB: 1784204816503,
                className: "text-4xl lg:text-5xl font-normal leading-tight",
                style: { fontFamily: "'Playfair Display', serif", color: "#1C1C1A" },
                "data-fg-d3bl71": ":0:/src/app/App.tsx:344:17:14364:289:e:h2:tet",
                children: [
                  "Nájdite svoju cestu ",
                  /* @__PURE__ */ a(e, { _fgT: "br", _fgS: "d3bl73", _fgB: 1784204816503, className: "hidden lg:block", "data-fg-d3bl73": ":0:/src/app/App.tsx:348:39:14589:34:e:br" }),
                  "k svojmu šťastiu"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ a(e, { _fgT: "p", _fgS: "d3bl75", _fgB: 1784204816503, className: "text-base leading-relaxed max-w-sm", style: { color: "#8A8478" }, "data-fg-d3bl75": ":0:/src/app/App.tsx:351:15:14689:200:e:p:t", children: "Od fyzickej kondície po duševný rozvoj – pozeráme sa na kvalitný život ako na jeden prepojený celok." })
        ] }),
        /* @__PURE__ */ a(e, { _fgT: "div", _fgS: "d3bl77", _fgB: 1784204816503, className: "grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3", "data-fg-d3bl77": ":0:/src/app/App.tsx:356:13:14922:1651:e:div:x", children: De.map(({ icon: t, label: d, bg: n, color: L }) => /* @__PURE__ */ l(
          e,
          {
            _fgT: "a",
            _fgS: "d3bl79",
            _fgB: 1784204816503,
            href: "#kategorie",
            className: "group flex flex-col items-center gap-3 p-4 lg:p-5 rounded-2xl cursor-pointer text-center transition-all duration-300",
            style: { background: "#fff", border: "1px solid rgba(28,28,26,0.06)" },
            onMouseEnter: (b) => {
              b.currentTarget.style.borderColor = "rgba(78,139,104,0.3)", b.currentTarget.style.boxShadow = "0 8px 24px rgba(78,139,104,0.08)", b.currentTarget.style.transform = "translateY(-2px)";
            },
            onMouseLeave: (b) => {
              b.currentTarget.style.borderColor = "rgba(28,28,26,0.06)", b.currentTarget.style.boxShadow = "none", b.currentTarget.style.transform = "translateY(0)";
            },
            "data-fg-d3bl79": ":0:/src/app/App.tsx:358:17:15079:1457:e:a:ete",
            children: [
              /* @__PURE__ */ a(
                e,
                {
                  _fgT: "div",
                  _fgS: "d3bl80",
                  _fgB: 1784204816503,
                  className: "w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110",
                  style: { background: n },
                  "data-fg-d3bl80": ":0:/src/app/App.tsx:374:19:16096:305:e:div:e",
                  children: /* @__PURE__ */ a(e, { _fgT: t, _fgS: "d3bl81", _fgB: 1784204816503, className: "w-5 h-5", style: { color: L }, "data-fg-d3bl81": ":0:/src/app/App.tsx:378:21:16330:46:e:Icon" })
                }
              ),
              /* @__PURE__ */ a(e, { _fgT: "span", _fgS: "d3bl82", _fgB: 1784204816503, className: "text-xs font-medium leading-tight", style: { color: "#1C1C1A" }, "data-fg-d3bl82": ":0:/src/app/App.tsx:380:19:16420:95:e:span:x", children: d })
            ]
          },
          d
        )) })
      ] }) }),
      /* @__PURE__ */ a(e, { _fgT: "section", _fgS: "d3bl85", _fgB: 1784204816503, id: "obchod", className: "hidden", style: { background: "#F0EBE3" }, "data-fg-d3bl85": ":0:/src/app/App.tsx:388:9:16661:4979:e:section:e", children: /* @__PURE__ */ l(e, { _fgT: "div", _fgS: "d3bl86", _fgB: 1784204816503, className: "max-w-7xl mx-auto px-5 sm:px-8 lg:px-10", "data-fg-d3bl86": ":0:/src/app/App.tsx:389:11:16754:4867:e:div:ete", children: [
        /* @__PURE__ */ l(e, { _fgT: "div", _fgS: "d3bl87", _fgB: 1784204816503, className: "flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6", "data-fg-d3bl87": ":0:/src/app/App.tsx:390:13:16824:926:e:div:ete", children: [
          /* @__PURE__ */ l(e, { _fgT: "div", _fgS: "d3bl88", _fgB: 1784204816503, "data-fg-d3bl88": ":0:/src/app/App.tsx:391:15:16923:485:e:div:ete", children: [
            /* @__PURE__ */ a(e, { _fgT: "p", _fgS: "d3bl89", _fgB: 1784204816503, className: "text-sm font-medium tracking-widest uppercase mb-3", style: { color: "#4E8B68", letterSpacing: "0.18em" }, "data-fg-d3bl89": ":0:/src/app/App.tsx:392:17:16945:170:e:p:t", children: "Odporúčané" }),
            /* @__PURE__ */ a(
              e,
              {
                _fgT: "h2",
                _fgS: "d3bl91",
                _fgB: 1784204816503,
                className: "text-4xl lg:text-5xl font-normal leading-tight",
                style: { fontFamily: "'Playfair Display', serif", color: "#1C1C1A" },
                "data-fg-d3bl91": ":0:/src/app/App.tsx:395:17:17132:255:e:h2:t",
                children: "Starostlivo vybrané produkty"
              }
            )
          ] }),
          /* @__PURE__ */ l(
            e,
            {
              _fgT: "a",
              _fgS: "d3bl93",
              _fgB: 1784204816503,
              href: "#obchod",
              className: "inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:gap-3",
              style: { color: "#4E8B68" },
              "data-fg-d3bl93": ":0:/src/app/App.tsx:402:15:17423:308:e:a:te",
              children: [
                "Zobraziť všetky produkty ",
                /* @__PURE__ */ a(e, { _fgT: m, _fgS: "d3bl95", _fgB: 1784204816503, className: "w-4 h-4", "data-fg-d3bl95": ":0:node_modules/lucide-react:407:42:17678:34:e:ArrowRight::::::s5N" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ a(e, { _fgT: "div", _fgS: "d3bl96", _fgB: 1784204816503, className: "grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8", "data-fg-d3bl96": ":0:/src/app/App.tsx:411:13:17764:3840:e:div:x", children: Le.map((t) => /* @__PURE__ */ l(
          e,
          {
            _fgT: "article",
            _fgS: "d3bl98",
            _fgB: 1784204816503,
            className: "group rounded-3xl overflow-hidden cursor-pointer transition-all duration-500",
            style: { background: "#fff" },
            onMouseEnter: (d) => {
              d.currentTarget.style.boxShadow = "0 24px 60px rgba(28,28,26,0.12)", d.currentTarget.style.transform = "translateY(-4px)";
            },
            onMouseLeave: (d) => {
              d.currentTarget.style.boxShadow = "none", d.currentTarget.style.transform = "translateY(0)";
            },
            "data-fg-d3bl98": ":0:/src/app/App.tsx:413:17:17888:3679:e:article:ete",
            children: [
              /* @__PURE__ */ l(e, { _fgT: "div", _fgS: "d3bl99", _fgB: 1784204816503, className: "relative overflow-hidden aspect-square", style: { background: "#F8F5F0" }, "data-fg-d3bl99": ":0:/src/app/App.tsx:426:19:18608:733:e:div:ete", children: [
                /* @__PURE__ */ a(
                  e,
                  {
                    _fgT: "img",
                    _fgS: "d3bl100",
                    _fgB: 1784204816503,
                    src: t.image,
                    alt: t.name,
                    className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]",
                    "data-fg-d3bl100": ":0:/src/app/App.tsx:427:21:18719:230:e:img"
                  }
                ),
                /* @__PURE__ */ a(e, { _fgT: "div", _fgS: "d3bl101", _fgB: 1784204816503, className: "absolute top-4 left-4", "data-fg-d3bl101": ":0:/src/app/App.tsx:432:21:18970:346:e:div:e", children: /* @__PURE__ */ a(
                  e,
                  {
                    _fgT: "span",
                    _fgS: "d3bl102",
                    _fgB: 1784204816503,
                    className: "text-xs font-semibold px-3 py-1.5 rounded-full text-white",
                    style: { background: t.badgeBg },
                    "data-fg-d3bl102": ":0:/src/app/App.tsx:433:23:19032:257:e:span:x",
                    children: t.badge
                  }
                ) })
              ] }),
              /* @__PURE__ */ l(e, { _fgT: "div", _fgS: "d3bl104", _fgB: 1784204816503, className: "p-6 lg:p-7", "data-fg-d3bl104": ":0:/src/app/App.tsx:441:19:19360:2180:e:div:etetetete", children: [
                /* @__PURE__ */ l(e, { _fgT: "p", _fgS: "d3bl105", _fgB: 1784204816503, className: "text-xs font-medium uppercase tracking-wider mb-2", style: { color: "#8A8478" }, "data-fg-d3bl105": ":0:/src/app/App.tsx:442:21:19409:178:e:p:xtx", children: [
                  t.brand,
                  " · ",
                  t.category
                ] }),
                /* @__PURE__ */ a(
                  e,
                  {
                    _fgT: "h3",
                    _fgS: "d3bl109",
                    _fgB: 1784204816503,
                    className: "text-xl font-semibold mb-3 leading-tight",
                    style: { fontFamily: "'Playfair Display', serif", color: "#1C1C1A" },
                    "data-fg-d3bl109": ":0:/src/app/App.tsx:445:21:19608:255:e:h3:x",
                    children: t.name
                  }
                ),
                /* @__PURE__ */ a(e, { _fgT: "p", _fgS: "d3bl111", _fgB: 1784204816503, className: "text-sm leading-relaxed mb-5", style: { color: "#8A8478" }, "data-fg-d3bl111": ":0:/src/app/App.tsx:451:21:19884:142:e:p:x", children: t.description }),
                /* @__PURE__ */ l(e, { _fgT: "div", _fgS: "d3bl113", _fgB: 1784204816503, className: "flex items-center gap-1.5 mb-5", "data-fg-d3bl113": ":0:/src/app/App.tsx:454:21:20047:646:e:div:xte", children: [
                  [...Array(5)].map((d, n) => /* @__PURE__ */ a(
                    e,
                    {
                      _fgT: Te,
                      _fgS: "d3bl115",
                      _fgB: 1784204816503,
                      className: "w-3.5 h-3.5",
                      style: {
                        fill: n < Math.floor(t.rating) ? "#C4853A" : "none",
                        color: n < Math.floor(t.rating) ? "#C4853A" : "#D8D0C6"
                      },
                      "data-fg-d3bl115": ":0:node_modules/lucide-react:456:25:20173:358:e:Star::::::hX0"
                    },
                    n
                  )),
                  /* @__PURE__ */ l(e, { _fgT: "span", _fgS: "d3bl116", _fgB: 1784204816503, className: "text-xs ml-1", style: { color: "#8A8478" }, "data-fg-d3bl116": ":0:/src/app/App.tsx:465:23:20580:86:e:span:txt", children: [
                    "(",
                    t.reviews,
                    ")"
                  ] })
                ] }),
                /* @__PURE__ */ l(e, { _fgT: "div", _fgS: "d3bl120", _fgB: 1784204816503, className: "flex items-center justify-between", "data-fg-d3bl120": ":0:/src/app/App.tsx:467:21:20714:801:e:div:ete", children: [
                  /* @__PURE__ */ a(e, { _fgT: "span", _fgS: "d3bl121", _fgB: 1784204816503, className: "text-2xl font-semibold", style: { color: "#1C1C1A" }, "data-fg-d3bl121": ":0:/src/app/App.tsx:468:23:20788:92:e:span:x", children: t.price }),
                  /* @__PURE__ */ l(
                    e,
                    {
                      _fgT: "button",
                      _fgS: "d3bl123",
                      _fgB: 1784204816503,
                      className: "flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300 text-white",
                      style: { background: "#4E8B68" },
                      onMouseEnter: (d) => d.currentTarget.style.background = "#3d6e52",
                      onMouseLeave: (d) => d.currentTarget.style.background = "#4E8B68",
                      "data-fg-d3bl123": ":0:/src/app/App.tsx:469:23:20903:585:e:button:te",
                      children: [
                        "Pridať do košíka",
                        /* @__PURE__ */ a(e, { _fgT: m, _fgS: "d3bl125", _fgB: 1784204816503, className: "w-3.5 h-3.5", "data-fg-d3bl125": ":0:node_modules/lucide-react:476:25:21418:38:e:ArrowRight::::::s5N" })
                      ]
                    }
                  )
                ] })
              ] })
            ]
          },
          t.id
        )) })
      ] }) }),
      /* @__PURE__ */ l(e, { _fgT: "section", _fgS: "d3bl127", _fgB: 1784204816503, id: "chronos", className: "relative py-24 lg:py-32 overflow-hidden", style: { background: "#1C1C1A" }, "data-fg-d3bl127": ":0:/src/app/App.tsx:487:9:21688:8749:e:section:etxtete", children: [
        /* @__PURE__ */ a(e, { _fgT: "div", _fgS: "d3bl128", _fgB: 1784204816503, className: "absolute inset-0 opacity-15", "data-fg-d3bl128": ":0:/src/app/App.tsx:488:11:21807:283:e:div:e", children: /* @__PURE__ */ a(
          e,
          {
            _fgT: "img",
            _fgS: "d3bl129",
            _fgB: 1784204816503,
            src: "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?w=1400&h=900&fit=crop&auto=format",
            alt: "",
            className: "w-full h-full object-cover",
            "data-fg-d3bl129": ":0:/src/app/App.tsx:489:13:21865:208:e:img"
          }
        ) }),
        /* @__PURE__ */ a(
          e,
          {
            _fgT: "div",
            _fgS: "d3bl131",
            _fgB: 1784204816503,
            className: "absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl pointer-events-none",
            style: { background: "rgba(78,139,104,0.15)" },
            "data-fg-d3bl131": ":0:/src/app/App.tsx:496:11:22137:197:e:div"
          }
        ),
        /* @__PURE__ */ a(e, { _fgT: "div", _fgS: "d3bl132", _fgB: 1784204816503, className: "relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10", "data-fg-d3bl132": ":0:/src/app/App.tsx:501:11:22346:8072:e:div:e", children: /* @__PURE__ */ l(e, { _fgT: "div", _fgS: "d3bl133", _fgB: 1784204816503, className: "grid lg:grid-cols-2 gap-16 items-center", "data-fg-d3bl133": ":0:/src/app/App.tsx:502:13:22430:7971:e:div:xtetxte", children: [
          /* @__PURE__ */ l(e, { _fgT: "div", _fgS: "d3bl135", _fgB: 1784204816503, "data-fg-d3bl135": ":0:/src/app/App.tsx:504:15:22529:2505:e:div:etetetete", children: [
            /* @__PURE__ */ a(e, { _fgT: "p", _fgS: "d3bl136", _fgB: 1784204816503, className: "text-sm font-medium tracking-widest uppercase mb-4", style: { color: "#6EC491", letterSpacing: "0.18em" }, "data-fg-d3bl136": ":0:/src/app/App.tsx:505:17:22551:179:e:p:t", children: "Bezplatná aplikácia" }),
            /* @__PURE__ */ a(
              e,
              {
                _fgT: "h2",
                _fgS: "d3bl138",
                _fgB: 1784204816503,
                className: "text-5xl lg:text-6xl font-normal text-white mb-6 leading-tight",
                style: { fontFamily: "'Playfair Display', serif" },
                "data-fg-d3bl138": ":0:/src/app/App.tsx:508:17:22747:238:e:h2:t",
                children: "Chronos Vitae"
              }
            ),
            /* @__PURE__ */ a(e, { _fgT: "p", _fgS: "d3bl140", _fgB: 1784204816503, className: "text-lg lg:text-xl mb-8 leading-relaxed", style: { color: "rgba(255,255,255,0.65)" }, "data-fg-d3bl140": ":0:/src/app/App.tsx:514:17:23002:246:e:p:t", children: "Bezplatná aplikácia, ktorá vám pomôže plánovať život, budovať návyky a dosahovať vaše ciele krok za krokom." }),
            /* @__PURE__ */ a(e, { _fgT: "ul", _fgS: "d3bl142", _fgB: 1784204816503, className: "space-y-4 mb-10", "data-fg-d3bl142": ":0:/src/app/App.tsx:517:17:23265:915:e:ul:x", children: [
              "Denný plán pre prácu, pohyb aj oddych",
              "Life Modes a vlastné rutiny",
              "Kalendár, úlohy, alarmy a sledovanie pokroku",
              "Daily Life Lessons pre dlhodobý rast"
            ].map((t) => /* @__PURE__ */ l(e, { _fgT: "li", _fgS: "d3bl144", _fgB: 1784204816503, className: "flex items-start gap-3 text-sm", style: { color: "rgba(255,255,255,0.6)" }, "data-fg-d3bl144": ":0:/src/app/App.tsx:524:21:23647:489:e:li:etx", children: [
              /* @__PURE__ */ a(
                e,
                {
                  _fgT: "div",
                  _fgS: "d3bl145",
                  _fgB: 1784204816503,
                  className: "w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5",
                  style: { background: "#4E8B68" },
                  "data-fg-d3bl145": ":0:/src/app/App.tsx:525:23:23774:304:e:div:e",
                  children: /* @__PURE__ */ a(e, { _fgT: "div", _fgS: "d3bl146", _fgB: 1784204816503, className: "w-1.5 h-1.5 rounded-full bg-white", "data-fg-d3bl146": ":0:/src/app/App.tsx:529:25:23996:53:e:div" })
                }
              ),
              t
            ] }, t)) }),
            /* @__PURE__ */ l(e, { _fgT: "div", _fgS: "d3bl148", _fgB: 1784204816503, className: "flex flex-col sm:flex-row items-start sm:items-center gap-4", "data-fg-d3bl148": ":0:/src/app/App.tsx:535:17:24197:816:e:div:ete", children: [
              /* @__PURE__ */ l(
                e,
                {
                  _fgT: "a",
                  _fgS: "d3bl149",
                  _fgB: 1784204816503,
                  href: "#chronos",
                  className: "inline-flex items-center gap-2.5 font-medium px-8 py-4 rounded-full transition-all duration-300 text-white",
                  style: { background: "#4E8B68" },
                  onMouseEnter: (t) => t.currentTarget.style.background = "#3d6e52",
                  onMouseLeave: (t) => t.currentTarget.style.background = "#4E8B68",
                  "data-fg-d3bl149": ":0:/src/app/App.tsx:536:19:24293:572:e:a:et",
                  children: [
                    /* @__PURE__ */ a(e, { _fgT: C, _fgS: "d3bl150", _fgB: 1784204816503, className: "w-4 h-4", "data-fg-d3bl150": ":0:node_modules/lucide-react:543:21:24773:32:e:Download::::::yh6" }),
                    "Aplikáciu pripravujeme"
                  ]
                }
              ),
              /* @__PURE__ */ a(e, { _fgT: "span", _fgS: "d3bl152", _fgB: 1784204816503, className: "text-sm", style: { color: "rgba(255,255,255,0.35)" }, "data-fg-d3bl152": ":0:/src/app/App.tsx:546:19:24884:106:e:span:t", children: "Android · Bezplatne" })
            ] })
          ] }),
          /* @__PURE__ */ a(e, { _fgT: "div", _fgS: "d3bl155", _fgB: 1784204816503, className: "flex justify-center lg:justify-end", "data-fg-d3bl155": ":0:/src/app/App.tsx:551:15:25085:5297:e:div:e", children: /* @__PURE__ */ l(e, { _fgT: "div", _fgS: "d3bl156", _fgB: 1784204816503, className: "relative", "data-fg-d3bl156": ":0:/src/app/App.tsx:552:17:25154:5207:e:div:etxte", children: [
            /* @__PURE__ */ a("img", { src: "/assets/chronos-vitae-home.png", alt: "Chronos Vitae – aktuálna obrazovka aplikácie", className: "w-[260px] rounded-[36px] relative", style: { boxShadow: "0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.12)" } }),
            /* @__PURE__ */ a(
              e,
              {
                _fgT: "div",
                _fgS: "d3bl193",
                _fgB: 1784204816503,
                className: "absolute -bottom-6 left-1/2 -translate-x-1/2 w-48 h-16 rounded-full blur-3xl pointer-events-none",
                style: { background: "rgba(78,139,104,0.35)" },
                "data-fg-d3bl193": ":0:/src/app/App.tsx:641:19:30116:222:e:div"
              }
            )
          ] }) })
        ] }) })
      ] }),
      /* @__PURE__ */ a(e, { _fgT: "section", _fgS: "d3bl195", _fgB: 1784204816503, id: "o-nas", className: "py-24 lg:py-32 overflow-hidden", style: { background: "#F8F5F0" }, "data-fg-d3bl195": ":0:/src/app/App.tsx:652:9:30477:3082:e:section:e", children: /* @__PURE__ */ a(e, { _fgT: "div", _fgS: "d3bl196", _fgB: 1784204816503, className: "max-w-7xl mx-auto px-5 sm:px-8 lg:px-10", "data-fg-d3bl196": ":0:/src/app/App.tsx:653:11:30585:2955:e:div:e", children: /* @__PURE__ */ l(e, { _fgT: "div", _fgS: "d3bl197", _fgB: 1784204816503, className: "grid lg:grid-cols-2 gap-12 lg:gap-20 items-center", "data-fg-d3bl197": ":0:/src/app/App.tsx:654:13:30655:2868:e:div:ete", children: [
        /* @__PURE__ */ l(e, { _fgT: "div", _fgS: "d3bl198", _fgB: 1784204816503, className: "relative", "data-fg-d3bl198": ":0:/src/app/App.tsx:655:15:30737:991:e:div:etxte", children: [
          /* @__PURE__ */ a(e, { _fgT: "div", _fgS: "d3bl199", _fgB: 1784204816503, className: "rounded-3xl overflow-hidden aspect-[4/3]", style: { background: "#E8E3DC" }, "data-fg-d3bl199": ":0:/src/app/App.tsx:656:17:30780:396:e:div:e", children: /* @__PURE__ */ a(
            e,
            {
              _fgT: "img",
              _fgS: "d3bl200",
              _fgB: 1784204816503,
              src: "https://images.unsplash.com/photo-1667586733515-bf0bacbf325b?w=900&h=700&fit=crop&auto=format",
              alt: "Pohoda v prírode – žena v tichu",
              className: "w-full h-full object-cover",
              "data-fg-d3bl200": ":0:/src/app/App.tsx:657:19:30891:262:e:img"
            }
          ) }),
          /* @__PURE__ */ l(
            e,
            {
              _fgT: "div",
              _fgS: "d3bl202",
              _fgB: 1784204816503,
              className: "absolute -bottom-6 -right-4 lg:right-8 rounded-2xl px-6 py-5 shadow-xl",
              style: { background: "#fff" },
              "data-fg-d3bl202": ":0:/src/app/App.tsx:664:17:31231:476:e:div:ete",
              children: [
                /* @__PURE__ */ a(e, { _fgT: "p", _fgS: "d3bl203", _fgB: 1784204816503, className: "text-3xl font-semibold mb-0.5", style: { fontFamily: "'Playfair Display', serif", color: "#4E8B68" }, "data-fg-d3bl203": ":0:/src/app/App.tsx:668:19:31422:166:e:p:t", children: "2026" }),
                /* @__PURE__ */ a(e, { _fgT: "p", _fgS: "d3bl205", _fgB: 1784204816503, className: "text-xs", style: { color: "#8A8478" }, "data-fg-d3bl205": ":0:/src/app/App.tsx:671:19:31607:77:e:p:t", children: "pripravujeme spustenie" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ l(e, { _fgT: "div", _fgS: "d3bl207", _fgB: 1784204816503, "data-fg-d3bl207": ":0:/src/app/App.tsx:674:15:31743:1761:e:div:etetetete", children: [
          /* @__PURE__ */ a(e, { _fgT: "p", _fgS: "d3bl208", _fgB: 1784204816503, className: "text-sm font-medium tracking-widest uppercase mb-4", style: { color: "#4E8B68", letterSpacing: "0.18em" }, "data-fg-d3bl208": ":0:/src/app/App.tsx:675:17:31765:165:e:p:t", children: "O nás" }),
          /* @__PURE__ */ a(
            e,
            {
              _fgT: "h2",
              _fgS: "d3bl210",
              _fgB: 1784204816503,
              className: "text-4xl lg:text-5xl font-normal mb-6 leading-tight",
              style: { fontFamily: "'Playfair Display', serif", color: "#1C1C1A" },
              "data-fg-d3bl210": ":0:/src/app/App.tsx:678:17:31947:275:e:h2:t",
              children: "Wellness nie je trend. Je to spôsob života."
            }
          ),
          /* @__PURE__ */ a(e, { _fgT: "p", _fgS: "d3bl212", _fgB: 1784204816503, className: "text-base leading-relaxed mb-5", style: { color: "#8A8478" }, "data-fg-d3bl212": ":0:/src/app/App.tsx:684:17:32239:280:e:p:t", children: "zije.me vzniklo z presvedčenia, že každý človek si zaslúži žiť naplno – v zdraví, v rovnováhe a v radosti. Nie je to o dokonalosti. Je to o malých, vedomých krokoch." }),
          /* @__PURE__ */ a(e, { _fgT: "p", _fgS: "d3bl214", _fgB: 1784204816503, className: "text-base leading-relaxed mb-8", style: { color: "#8A8478" }, "data-fg-d3bl214": ":0:/src/app/App.tsx:687:17:32536:264:e:p:t", children: "Každý produkt, ktorý odporúčame, prechádza dôkladným výberom. Spolupracujeme s odborníkmi, testujeme, skúmame a vyberáme iba to, čo skutočne funguje." }),
          /* @__PURE__ */ a(e, { _fgT: "div", _fgS: "d3bl216", _fgB: 1784204816503, className: "flex flex-col gap-4", "data-fg-d3bl216": ":0:/src/app/App.tsx:690:17:32817:666:e:div:x", children: [
            "Oblasti života",
            "Bezplatná aplikácia",
            "Rastúca komunita"
          ].map((d) => /* @__PURE__ */ l(e, { _fgT: "div", _fgS: "d3bl218", _fgB: 1784204816503, className: "flex items-center gap-3", "data-fg-d3bl218": ":0:/src/app/App.tsx:696:21:33115:323:e:div:ete", children: [
            /* @__PURE__ */ a(e, { _fgT: "div", _fgS: "d3bl219", _fgB: 1784204816503, className: "w-2 h-2 rounded-full flex-shrink-0", style: { background: "#4E8B68" }, "data-fg-d3bl219": ":0:/src/app/App.tsx:697:23:33155:170:e:div" }),
            /* @__PURE__ */ a(e, { _fgT: "p", _fgS: "d3bl221", _fgB: 1784204816503, className: "text-2xl lg:text-3xl font-semibold", style: { fontFamily: "'Playfair Display', serif", color: "#1C1C1A" }, "data-fg-d3bl221": ":0:/src/app/App.tsx:700:23:33348:63:e:p:x", children: d })
          ] }, d)) })
        ] })
      ] }) }) }),
      /* @__PURE__ */ a(e, { _fgT: "section", _fgS: "d3bl224", _fgB: 1784204816503, id: "ambasadori", className: "py-24 lg:py-32", style: { background: "#F0EBE3" }, "data-fg-d3bl224": ":0:/src/app/App.tsx:710:9:33605:4317:e:section:e", children: ambOpen ? /* @__PURE__ */ l(e, { _fgT: "div", _fgS: "d3bl225", _fgB: 1784204816503, className: "max-w-7xl mx-auto px-5 sm:px-8 lg:px-10", "data-fg-d3bl225": ":0:/src/app/App.tsx:711:11:33702:4201:e:div:ete", children: [
        /* @__PURE__ */ l(e, { _fgT: "div", _fgS: "d3bl226", _fgB: 1784204816503, className: "text-center mb-16", "data-fg-d3bl226": ":0:/src/app/App.tsx:712:13:33772:679:e:div:etete", children: [
          /* @__PURE__ */ a(e, { _fgT: "p", _fgS: "d3bl227", _fgB: 1784204816503, className: "text-sm font-medium tracking-widest uppercase mb-3", style: { color: "#4E8B68", letterSpacing: "0.18em" }, "data-fg-d3bl227": ":0:/src/app/App.tsx:713:15:33822:164:e:p:t", children: "Komunita" }),
          /* @__PURE__ */ a(
            e,
            {
              _fgT: "h2",
              _fgS: "d3bl229",
              _fgB: 1784204816503,
              className: "text-4xl lg:text-5xl font-normal mb-4 leading-tight",
              style: { fontFamily: "'Playfair Display', serif", color: "#1C1C1A" },
              "data-fg-d3bl229": ":0:/src/app/App.tsx:716:15:34001:237:e:h2:t",
              children: "Naši ambasádori"
            }
          ),
          /* @__PURE__ */ a(e, { _fgT: "p", _fgS: "d3bl231", _fgB: 1784204816503, className: "text-base max-w-md mx-auto", style: { color: "#8A8478" }, "data-fg-d3bl231": ":0:/src/app/App.tsx:722:15:34253:179:e:p:t", children: "Ľudia, ktorí žijú hodnoty zije.me každý deň a inšpirujú tých okolo seba." })
        ] }),
        /* @__PURE__ */ a(e, { _fgT: "div", _fgS: "d3bl233", _fgB: 1784204816503, className: "grid grid-cols-1 md:grid-cols-3 gap-8", "data-fg-d3bl233": ":0:/src/app/App.tsx:727:13:34465:3421:e:div:x", children: Pe.map((t) => /* @__PURE__ */ l(
          e,
          {
            _fgT: "article",
            _fgS: "d3bl235",
            _fgB: 1784204816503,
            className: "group rounded-3xl overflow-hidden transition-all duration-500 cursor-pointer",
            style: { background: "#fff" },
            onMouseEnter: (d) => {
              d.currentTarget.style.boxShadow = "0 24px 60px rgba(28,28,26,0.1)", d.currentTarget.style.transform = "translateY(-4px)";
            },
            onMouseLeave: (d) => {
              d.currentTarget.style.boxShadow = "none", d.currentTarget.style.transform = "translateY(0)";
            },
            "data-fg-d3bl235": ":0:/src/app/App.tsx:729:17:34586:3263:e:article:ete",
            children: [
              /* @__PURE__ */ l(e, { _fgT: "div", _fgS: "d3bl236", _fgB: 1784204816503, className: "relative h-72 overflow-hidden", style: { background: "#E8E3DC" }, "data-fg-d3bl236": ":0:/src/app/App.tsx:742:19:35308:585:e:div:ete", children: [
                /* @__PURE__ */ a(
                  e,
                  {
                    _fgT: "img",
                    _fgS: "d3bl237",
                    _fgB: 1784204816503,
                    src: t.image,
                    alt: t.name,
                    className: "w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]",
                    "data-fg-d3bl237": ":0:/src/app/App.tsx:743:21:35410:247:e:img"
                  }
                ),
                /* @__PURE__ */ a(
                  e,
                  {
                    _fgT: "div",
                    _fgS: "d3bl238",
                    _fgB: 1784204816503,
                    className: "absolute inset-0",
                    style: { background: "linear-gradient(to top, rgba(28,28,26,0.4) 0%, transparent 60%)" },
                    "data-fg-d3bl238": ":0:/src/app/App.tsx:748:21:35678:190:e:div"
                  }
                )
              ] }),
              /* @__PURE__ */ l(e, { _fgT: "div", _fgS: "d3bl239", _fgB: 1784204816503, className: "p-7", "data-fg-d3bl239": ":0:/src/app/App.tsx:753:19:35912:1910:e:div:etetetete", children: [
                /* @__PURE__ */ a(
                  e,
                  {
                    _fgT: "h3",
                    _fgS: "d3bl240",
                    _fgB: 1784204816503,
                    className: "text-xl font-semibold mb-1",
                    style: { fontFamily: "'Playfair Display', serif", color: "#1C1C1A" },
                    "data-fg-d3bl240": ":0:/src/app/App.tsx:754:21:35954:244:e:h3:x",
                    children: t.name
                  }
                ),
                /* @__PURE__ */ a(e, { _fgT: "p", _fgS: "d3bl242", _fgB: 1784204816503, className: "text-sm font-medium mb-4", style: { color: "#4E8B68" }, "data-fg-d3bl242": ":0:/src/app/App.tsx:760:21:36219:90:e:p:x", children: t.role }),
                /* @__PURE__ */ a(e, { _fgT: "p", _fgS: "d3bl244", _fgB: 1784204816503, className: "text-sm leading-relaxed mb-5", style: { color: "#8A8478" }, "data-fg-d3bl244": ":0:/src/app/App.tsx:761:21:36330:93:e:p:x", children: t.bio }),
                /* @__PURE__ */ a(e, { _fgT: "div", _fgS: "d3bl246", _fgB: 1784204816503, className: "flex flex-wrap gap-2 mb-6", "data-fg-d3bl246": ":0:/src/app/App.tsx:762:21:36444:471:e:div:x", children: t.categories.map((d) => /* @__PURE__ */ a(
                  e,
                  {
                    _fgT: "span",
                    _fgS: "d3bl248",
                    _fgB: 1784204816503,
                    className: "text-xs font-medium px-3 py-1 rounded-full",
                    style: { background: "#F0EBE3", color: "#8A8478" },
                    "data-fg-d3bl248": ":0:/src/app/App.tsx:764:25:36572:290:e:span:x",
                    children: d
                  },
                  d
                )) }),
                /* @__PURE__ */ l(
                  e,
                  {
                    _fgT: "button",
                    _fgS: "d3bl250",
                    _fgB: 1784204816503,
                    className: "w-full flex items-center justify-center gap-2 font-medium text-sm py-3 rounded-full transition-all duration-300",
                    style: { border: "1.5px solid #4E8B68", color: "#4E8B68" },
                    onMouseEnter: (d) => {
                      d.currentTarget.style.background = "#4E8B68", d.currentTarget.style.color = "#fff";
                    },
                    onMouseLeave: (d) => {
                      d.currentTarget.style.background = "transparent", d.currentTarget.style.color = "#4E8B68";
                    },
                    "data-fg-d3bl250": ":0:/src/app/App.tsx:773:21:36936:861:e:button:te",
                    children: [
                      "Odporúčané produkty",
                      /* @__PURE__ */ a(e, { _fgT: m, _fgS: "d3bl252", _fgB: 1784204816503, className: "w-4 h-4", "data-fg-d3bl252": ":0:node_modules/lucide-react:786:23:37733:34:e:ArrowRight::::::s5N" })
                    ]
                  }
                )
              ] })
            ]
          },
          t.id
        )) })
      ] }) : /* @__PURE__ */ l("div", { className: "max-w-xl mx-auto px-5 sm:px-8 text-center", children: [
        /* @__PURE__ */ a("p", { className: "text-sm font-medium tracking-widest uppercase mb-3", style: { color: "#4E8B68", letterSpacing: "0.18em" }, children: "Komunita" }),
        /* @__PURE__ */ a("h2", { className: "text-4xl lg:text-5xl font-normal mb-4 leading-tight", style: { fontFamily: "'Playfair Display', serif", color: "#1C1C1A" }, children: "Ambasádori" }),
        /* @__PURE__ */ a("p", { className: "text-base mb-10", style: { color: "#8A8478" }, children: "Táto sekcia je zatiaľ uzamknutá. Prístup majú iba pozvaní partneri." }),
        /* @__PURE__ */ l("form", { onSubmit: ambSubmit, className: "flex flex-col sm:flex-row gap-3 max-w-md mx-auto", children: [
          /* @__PURE__ */ a("input", { type: "password", value: ambPw, onChange: (t) => {
            setAmbPw(t.target.value);
            setAmbErr(!1);
          }, placeholder: "Zadajte heslo", "aria-label": "Heslo pre sekciu Ambasádori", className: "flex-1 px-5 py-4 rounded-full text-sm focus:outline-none", style: { background: "#fff", color: "#1C1C1A", border: ambErr ? "1.5px solid #B84A4A" : "1.5px solid rgba(28,28,26,0.1)", fontFamily: "'DM Sans', sans-serif" } }),
          /* @__PURE__ */ a("button", { type: "submit", className: "flex-shrink-0 font-medium px-8 py-4 rounded-full text-sm text-white transition-all duration-300", style: { background: "#4E8B68" }, children: "Odomknúť" })
        ] }),
        ambErr && /* @__PURE__ */ a("p", { className: "text-xs mt-4", style: { color: "#B84A4A" }, children: "Nesprávne heslo. Skúste to znova." })
      ] }) }),
      /* @__PURE__ */ a(e, { _fgT: "section", _fgS: "d3bl254", _fgB: 1784204816503, id: "clanky", className: "py-24 lg:py-32", style: { background: "#F8F5F0" }, "data-fg-d3bl254": ":0:/src/app/App.tsx:796:9:37965:5561:e:section:e", children: /* @__PURE__ */ l(e, { _fgT: "div", _fgS: "d3bl255", _fgB: 1784204816503, className: "max-w-7xl mx-auto px-5 sm:px-8 lg:px-10", "data-fg-d3bl255": ":0:/src/app/App.tsx:797:11:38058:5449:e:div:ete", children: [
        /* @__PURE__ */ l(e, { _fgT: "div", _fgS: "d3bl256", _fgB: 1784204816503, className: "flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6", "data-fg-d3bl256": ":0:/src/app/App.tsx:798:13:38128:912:e:div:ete", children: [
          /* @__PURE__ */ l(e, { _fgT: "div", _fgS: "d3bl257", _fgB: 1784204816503, "data-fg-d3bl257": ":0:/src/app/App.tsx:799:15:38227:473:e:div:ete", children: [
            /* @__PURE__ */ a(e, { _fgT: "p", _fgS: "d3bl258", _fgB: 1784204816503, className: "text-sm font-medium tracking-widest uppercase mb-3", style: { color: "#4E8B68", letterSpacing: "0.18em" }, "data-fg-d3bl258": ":0:/src/app/App.tsx:800:17:38249:167:e:p:t", children: "Magazín" }),
            /* @__PURE__ */ a(
              e,
              {
                _fgT: "h2",
                _fgS: "d3bl260",
                _fgB: 1784204816503,
                className: "text-4xl lg:text-5xl font-normal leading-tight",
                style: { fontFamily: "'Playfair Display', serif", color: "#1C1C1A" },
                "data-fg-d3bl260": ":0:/src/app/App.tsx:803:17:38433:246:e:h2:t",
                children: "Inšpirujúce čítanie"
              }
            )
          ] }),
          /* @__PURE__ */ l(
            e,
            {
              _fgT: "a",
              _fgS: "d3bl262",
              _fgB: 1784204816503,
              href: "/clanky/",
              className: "inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:gap-3",
              style: { color: "#4E8B68" },
              "data-fg-d3bl262": ":0:/src/app/App.tsx:810:15:38715:306:e:a:te",
              children: [
                "Zobraziť všetky články ",
                /* @__PURE__ */ a(e, { _fgT: m, _fgS: "d3bl264", _fgB: 1784204816503, className: "w-4 h-4", "data-fg-d3bl264": ":0:node_modules/lucide-react:815:40:38968:34:e:ArrowRight::::::s5N" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ l(e, { _fgT: "div", _fgS: "d3bl265", _fgB: 1784204816503, className: "grid lg:grid-cols-5 gap-6 lg:gap-10", "data-fg-d3bl265": ":0:/src/app/App.tsx:819:13:39054:4436:e:div:xtetxte", children: [
          /* @__PURE__ */ l(e, { _fgT: "a", _fgS: "d3bl267", _fgB: 1784204816503, href: i[0].href, className: "lg:col-span-3 group cursor-pointer block", "data-fg-d3bl267": ":0:/src/app/App.tsx:821:15:39161:2034:e:article:etetete", children: [
            /* @__PURE__ */ l(
              e,
              {
                _fgT: "div",
                _fgS: "d3bl268",
                _fgB: 1784204816503,
                className: "relative rounded-3xl overflow-hidden mb-6",
                style: { background: "#E8E3DC", aspectRatio: "16/10" },
                "data-fg-d3bl268": ":0:/src/app/App.tsx:822:17:39234:931:e:div:etete",
                children: [
                  /* @__PURE__ */ a(
                    e,
                    {
                      _fgT: "img",
                      _fgS: "d3bl269",
                      _fgB: 1784204816503,
                      src: i[0].image,
                      alt: i[0].title,
                      className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]",
                      "data-fg-d3bl269": ":0:/src/app/App.tsx:826:19:39421:231:e:img"
                    }
                  ),
                  /* @__PURE__ */ a(
                    e,
                    {
                      _fgT: "div",
                      _fgS: "d3bl270",
                      _fgB: 1784204816503,
                      className: "absolute inset-0",
                      style: { background: "linear-gradient(to top, rgba(28,28,26,0.5) 0%, transparent 60%)" },
                      "data-fg-d3bl270": ":0:/src/app/App.tsx:831:19:39671:184:e:div"
                    }
                  ),
                  /* @__PURE__ */ a(e, { _fgT: "div", _fgS: "d3bl271", _fgB: 1784204816503, className: "absolute top-5 left-5", "data-fg-d3bl271": ":0:/src/app/App.tsx:835:19:39874:268:e:div:e", children: /* @__PURE__ */ a(e, { _fgT: "span", _fgS: "d3bl272", _fgB: 1784204816503, className: "text-xs font-semibold px-3 py-1.5 rounded-full text-white", style: { background: "#4E8B68" }, "data-fg-d3bl272": ":0:/src/app/App.tsx:836:21:39934:183:e:span:x", children: i[0].category }) })
                ]
              }
            ),
            /* @__PURE__ */ l(e, { _fgT: "div", _fgS: "d3bl274", _fgB: 1784204816503, className: "flex items-center gap-2 text-xs mb-3", style: { color: "#8A8478" }, "data-fg-d3bl274": ":0:/src/app/App.tsx:841:17:40182:386:e:div:etetetete", children: [
              /* @__PURE__ */ a(e, { _fgT: "span", _fgS: "d3bl279", _fgB: 1784204816503, "data-fg-d3bl279": ":0:/src/app/App.tsx:844:19:40398:35:e:span:x", children: i[0].readTime }),
              /* @__PURE__ */ a(e, { _fgT: "span", _fgS: "d3bl281", _fgB: 1784204816503, style: { color: "#C8C2BA" }, "data-fg-d3bl281": ":0:/src/app/App.tsx:845:19:40452:43:e:span:t", children: "·" }),
              /* @__PURE__ */ a(e, { _fgT: "span", _fgS: "d3bl283", _fgB: 1784204816503, "data-fg-d3bl283": ":0:/src/app/App.tsx:846:19:40514:31:e:span:x", children: i[0].date })
            ] }),
            /* @__PURE__ */ a(
              e,
              {
                _fgT: "h3",
                _fgS: "d3bl285",
                _fgB: 1784204816503,
                className: "text-2xl lg:text-3xl font-normal mb-3 leading-snug transition-colors duration-300",
                style: { fontFamily: "'Playfair Display', serif", color: "#1C1C1A" },
                onMouseEnter: (t) => t.currentTarget.style.color = "#4E8B68",
                onMouseLeave: (t) => t.currentTarget.style.color = "#1C1C1A",
                "data-fg-d3bl285": ":0:/src/app/App.tsx:848:17:40585:475:e:h3:x",
                children: i[0].title
              }
            ),
            /* @__PURE__ */ a(e, { _fgT: "p", _fgS: "d3bl287", _fgB: 1784204816503, className: "text-sm leading-relaxed", style: { color: "#8A8478" }, "data-fg-d3bl287": ":0:/src/app/App.tsx:856:17:41077:93:e:p:x", children: i[0].excerpt })
          ] }),
          /* @__PURE__ */ a(e, { _fgT: "div", _fgS: "d3bl290", _fgB: 1784204816503, className: "lg:col-span-2 flex flex-col gap-7", "data-fg-d3bl290": ":0:/src/app/App.tsx:860:15:41247:2224:e:div:x", children: i.slice(1).map((t) => /* @__PURE__ */ l(e, { _fgT: "a", _fgS: "d3bl292", _fgB: 1784204816503, href: t.href, className: "group flex gap-4 cursor-pointer", "data-fg-d3bl292": ":0:/src/app/App.tsx:862:19:41371:2059:e:article:ete", children: [
            /* @__PURE__ */ a(
              e,
              {
                _fgT: "div",
                _fgS: "d3bl293",
                _fgB: 1784204816503,
                className: "relative w-28 h-28 flex-shrink-0 rounded-2xl overflow-hidden",
                style: { background: "#E8E3DC" },
                "data-fg-d3bl293": ":0:/src/app/App.tsx:863:21:41462:466:e:div:e",
                children: /* @__PURE__ */ a(
                  e,
                  {
                    _fgT: "img",
                    _fgS: "d3bl294",
                    _fgB: 1784204816503,
                    src: t.image,
                    alt: t.title,
                    className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]",
                    "data-fg-d3bl294": ":0:/src/app/App.tsx:867:23:41662:239:e:img"
                  }
                )
              }
            ),
            /* @__PURE__ */ l(e, { _fgT: "div", _fgS: "d3bl295", _fgB: 1784204816503, className: "flex-1 min-w-0", "data-fg-d3bl295": ":0:/src/app/App.tsx:873:21:41949:1452:e:div:etete", children: [
              /* @__PURE__ */ l(e, { _fgT: "div", _fgS: "d3bl296", _fgB: 1784204816503, className: "flex items-center gap-2 mb-2", "data-fg-d3bl296": ":0:/src/app/App.tsx:874:23:42004:489:e:div:ete", children: [
                /* @__PURE__ */ a(
                  e,
                  {
                    _fgT: "span",
                    _fgS: "d3bl297",
                    _fgB: 1784204816503,
                    className: "text-xs font-semibold px-2 py-0.5 rounded-full",
                    style: { background: "rgba(78,139,104,0.1)", color: "#4E8B68" },
                    "data-fg-d3bl297": ":0:/src/app/App.tsx:875:25:42075:284:e:span:x",
                    children: t.category
                  }
                ),
                /* @__PURE__ */ a(e, { _fgT: "span", _fgS: "d3bl299", _fgB: 1784204816503, className: "text-xs", style: { color: "#8A8478" }, "data-fg-d3bl299": ":0:/src/app/App.tsx:881:25:42384:80:e:span:x", children: t.readTime })
              ] }),
              /* @__PURE__ */ a(
                e,
                {
                  _fgT: "h4",
                  _fgS: "d3bl301",
                  _fgB: 1784204816503,
                  className: "text-base font-medium leading-snug mb-1 transition-colors duration-300 overflow-hidden",
                  style: {
                    fontFamily: "'Playfair Display', serif",
                    color: "#1C1C1A",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical"
                  },
                  onMouseEnter: (d) => d.currentTarget.style.color = "#4E8B68",
                  onMouseLeave: (d) => d.currentTarget.style.color = "#1C1C1A",
                  "data-fg-d3bl301": ":0:/src/app/App.tsx:883:23:42516:746:e:h4:x",
                  children: t.title
                }
              ),
              /* @__PURE__ */ a(e, { _fgT: "p", _fgS: "d3bl303", _fgB: 1784204816503, className: "text-xs", style: { color: "#8A8478" }, "data-fg-d3bl303": ":0:/src/app/App.tsx:897:23:43285:89:e:p:x", children: t.date })
            ] })
          ] }, t.id)) })
        ] })
      ] }) }),
      /* @__PURE__ */ l(
        e,
        {
          _fgT: "section",
          _fgS: "d3bl308",
          _fgB: 1784204816503,
          className: "py-24 lg:py-32 relative overflow-hidden",
          style: { background: "#4E8B68" },
          "data-fg-d3bl308": ":0:/src/app/App.tsx:907:9:43571:3551:e:section:ete",
          children: [
            /* @__PURE__ */ a(
              e,
              {
                _fgT: "div",
                _fgS: "d3bl309",
                _fgB: 1784204816503,
                className: "absolute inset-0 opacity-10",
                style: { background: "radial-gradient(ellipse at 80% 50%, rgba(255,255,255,0.3) 0%, transparent 60%)" },
                "data-fg-d3bl309": ":0:/src/app/App.tsx:911:11:43706:186:e:div"
              }
            ),
            /* @__PURE__ */ l(e, { _fgT: "div", _fgS: "d3bl310", _fgB: 1784204816503, className: "relative z-10 max-w-xl mx-auto px-5 sm:px-8 text-center", "data-fg-d3bl310": ":0:/src/app/App.tsx:915:11:43903:3200:e:div:etetetxte", children: [
              /* @__PURE__ */ a(e, { _fgT: "p", _fgS: "d3bl311", _fgB: 1784204816503, className: "text-sm font-medium tracking-widest uppercase mb-4", style: { color: "#A8D4B8", letterSpacing: "0.18em" }, "data-fg-d3bl311": ":0:/src/app/App.tsx:916:13:43989:162:e:p:t", children: "Newsletter" }),
              /* @__PURE__ */ a(
                e,
                {
                  _fgT: "h2",
                  _fgS: "d3bl313",
                  _fgB: 1784204816503,
                  className: "text-4xl lg:text-5xl font-normal text-white mb-5 leading-tight",
                  style: { fontFamily: "'Playfair Display', serif" },
                  "data-fg-d3bl313": ":0:/src/app/App.tsx:919:13:44164:230:e:h2:t",
                  children: "Získajte dávku inšpirácie"
                }
              ),
              /* @__PURE__ */ a(e, { _fgT: "p", _fgS: "d3bl315", _fgB: 1784204816503, className: "text-base mb-10 leading-relaxed", style: { color: "rgba(255,255,255,0.72)" }, "data-fg-d3bl315": ":0:/src/app/App.tsx:925:13:44407:228:e:p:t", children: "Nové články, produkty a tipy pre zdravší život priamo do vašej schránky. Bez spamu, iba skutočná hodnota." }),
              _ ? /* @__PURE__ */ l(e, { _fgT: "div", _fgS: "d3bl318", _fgB: 1784204816503, className: "flex flex-col items-center gap-3", "data-fg-d3bl318": ":0:/src/app/App.tsx:930:15:44679:810:e:div:etete", children: [
                /* @__PURE__ */ a(
                  e,
                  {
                    _fgT: "div",
                    _fgS: "d3bl319",
                    _fgB: 1784204816503,
                    className: "w-16 h-16 rounded-full flex items-center justify-center mb-2",
                    style: { background: "rgba(255,255,255,0.15)" },
                    "data-fg-d3bl319": ":0:/src/app/App.tsx:931:17:44746:426:e:div:e",
                    children: /* @__PURE__ */ a(e, { _fgT: "div", _fgS: "d3bl320", _fgB: 1784204816503, className: "w-7 h-7 rounded-full bg-white flex items-center justify-center", "data-fg-d3bl320": ":0:/src/app/App.tsx:935:19:44945:204:e:div:e", children: /* @__PURE__ */ a(e, { _fgT: "div", _fgS: "d3bl321", _fgB: 1784204816503, className: "w-2.5 h-2.5 rounded-full", style: { background: "#4E8B68" }, "data-fg-d3bl321": ":0:/src/app/App.tsx:936:21:45046:78:e:div" }) })
                  }
                ),
                /* @__PURE__ */ a(e, { _fgT: "p", _fgS: "d3bl322", _fgB: 1784204816503, className: "text-2xl font-semibold text-white", style: { fontFamily: "'Playfair Display', serif" }, "data-fg-d3bl322": ":0:/src/app/App.tsx:939:17:45189:165:e:p:t", children: "Ďakujeme za prihlásenie!" }),
                /* @__PURE__ */ a(e, { _fgT: "p", _fgS: "d3bl324", _fgB: 1784204816503, className: "text-sm", style: { color: "rgba(255,255,255,0.65)" }, "data-fg-d3bl324": ":0:/src/app/App.tsx:942:17:45371:97:e:p:t", children: "Vitajte v komunite zije.me" })
              ] }) : /* @__PURE__ */ l(e, { _fgT: "form", _fgS: "d3bl326", _fgB: 1784204816503, onSubmit: B, className: "flex flex-col sm:flex-row gap-3 max-w-md mx-auto", "data-fg-d3bl326": ":0:/src/app/App.tsx:945:15:45522:1377:e:form:ete", children: [
                /* @__PURE__ */ l(e, { _fgT: "div", _fgS: "d3bl327", _fgB: 1784204816503, className: "relative flex-1", "data-fg-d3bl327": ":0:/src/app/App.tsx:946:17:45633:713:e:div:ete", children: [
                  /* @__PURE__ */ a(e, { _fgT: be, _fgS: "d3bl328", _fgB: 1784204816503, className: "absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4", style: { color: "#8A8478" }, "data-fg-d3bl328": ":0:node_modules/lucide-react:947:19:45685:98:e:Mail::::::D4VR" }),
                  /* @__PURE__ */ a(
                    e,
                    {
                      _fgT: "input",
                      _fgS: "d3bl329",
                      _fgB: 1784204816503,
                      type: "email",
                      value: f,
                      onChange: (t) => c(t.target.value),
                      placeholder: "vas@email.sk",
                      required: !0,
                      className: "w-full pl-11 pr-4 py-4 rounded-full text-sm focus:outline-none",
                      style: {
                        background: "#fff",
                        color: "#1C1C1A",
                        fontFamily: "'DM Sans', sans-serif"
                      },
                      "data-fg-d3bl329": ":0:/src/app/App.tsx:948:19:45802:521:e:input"
                    }
                  )
                ] }),
                /* @__PURE__ */ a(
                  e,
                  {
                    _fgT: "button",
                    _fgS: "d3bl330",
                    _fgB: 1784204816503,
                    type: "submit",
                    className: "flex-shrink-0 font-medium px-8 py-4 rounded-full transition-all duration-300 text-sm whitespace-nowrap text-white",
                    style: { background: "#1C1C1A" },
                    onMouseEnter: (t) => t.currentTarget.style.background = "#2e2e2a",
                    onMouseLeave: (t) => t.currentTarget.style.background = "#1C1C1A",
                    "data-fg-d3bl330": ":0:/src/app/App.tsx:962:17:46363:514:e:button:t",
                    children: "Prihlásiť sa"
                  }
                )
              ] }),
              /* @__PURE__ */ a(e, { _fgT: "p", _fgS: "d3bl332", _fgB: 1784204816503, className: "text-xs mt-5", style: { color: "rgba(255,255,255,0.35)" }, "data-fg-d3bl332": ":0:/src/app/App.tsx:973:13:46927:159:e:p:t", children: "Môžete sa kedykoľvek odhlásiť. Vaše údaje sú v bezpečí." })
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ a(e, { _fgT: "footer", _fgS: "d3bl335", _fgB: 1784204816503, style: { background: "#1C1C1A", color: "#fff" }, className: "pt-20 pb-10", "data-fg-d3bl335": ":0:/src/app/App.tsx:981:7:47173:7648:e:footer:e", children: /* @__PURE__ */ l(e, { _fgT: "div", _fgS: "d3bl336", _fgB: 1784204816503, className: "max-w-7xl mx-auto px-5 sm:px-8 lg:px-10", "data-fg-d3bl336": ":0:/src/app/App.tsx:982:9:47263:7542:e:div:etxte", children: [
      /* @__PURE__ */ l(e, { _fgT: "div", _fgS: "d3bl337", _fgB: 1784204816503, className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16", "data-fg-d3bl337": ":0:/src/app/App.tsx:983:11:47331:6398:e:div:xtetxtetxtetxte", children: [
        /* @__PURE__ */ l(e, { _fgT: "div", _fgS: "d3bl339", _fgB: 1784204816503, "data-fg-d3bl339": ":0:/src/app/App.tsx:985:13:47447:2815:e:div:etete", children: [
          /* @__PURE__ */ l(e, { _fgT: "div", _fgS: "d3bl340", _fgB: 1784204816503, className: "flex items-center gap-2.5 mb-5", "data-fg-d3bl340": ":0:/src/app/App.tsx:986:15:47467:489:e:div:ete", children: [
            /* @__PURE__ */ a(e, { _fgT: "div", _fgS: "d3bl341", _fgB: 1784204816503, className: "w-8 h-8 rounded-full bg-[#4E8B68] flex items-center justify-center", "data-fg-d3bl341": ":0:/src/app/App.tsx:987:17:47532:165:e:div:e", children: /* @__PURE__ */ a(e, { _fgT: A, _fgS: "d3bl342", _fgB: 1784204816503, className: "w-4 h-4 text-white", "data-fg-d3bl342": ":0:node_modules/lucide-react:988:19:47635:39:e:Leaf::::::Dxgq" }) }),
            /* @__PURE__ */ a(
              e,
              {
                _fgT: "span",
                _fgS: "d3bl343",
                _fgB: 1784204816503,
                className: "text-xl font-semibold tracking-tight text-white",
                style: { fontFamily: "'Playfair Display', serif" },
                "data-fg-d3bl343": ":0:/src/app/App.tsx:990:17:47714:221:e:span:t",
                children: "zije.me"
              }
            )
          ] }),
          /* @__PURE__ */ a(e, { _fgT: "p", _fgS: "d3bl345", _fgB: 1784204816503, className: "text-sm leading-relaxed mb-6", style: { color: "rgba(255,255,255,0.45)" }, "data-fg-d3bl345": ":0:/src/app/App.tsx:997:15:47971:230:e:p:t", children: "Prémiový wellness lifestyle pre ľudí, ktorým záleží na kvalite každého dňa. Všetko pre telo, myseľ a dušu." }),
          /* @__PURE__ */ l(e, { _fgT: "div", _fgS: "d3bl347", _fgB: 1784204816503, className: "flex items-center gap-2.5", "data-fg-d3bl347": ":0:/src/app/App.tsx:1000:15:48216:2027:e:div:xtxte", children: [
            [
              { Icon: ce, label: "Instagram" },
              { Icon: le, label: "Facebook" },
              { Icon: ze, label: "YouTube" }
            ].map(({ Icon: t, label: d }) => /* @__PURE__ */ a(
              e,
              {
                _fgT: "a",
                _fgS: "d3bl349",
                _fgB: 1784204816503,
                href: "#",
                "aria-label": d,
                className: "w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300",
                style: { background: "rgba(255,255,255,0.08)" },
                onMouseEnter: (n) => n.currentTarget.style.background = "#4E8B68",
                onMouseLeave: (n) => n.currentTarget.style.background = "rgba(255,255,255,0.08)",
                "data-fg-d3bl349": ":0:/src/app/App.tsx:1006:19:48589:603:e:a:e",
                children: /* @__PURE__ */ a(e, { _fgT: t, _fgS: "d3bl350", _fgB: 1784204816503, className: "w-4 h-4", "data-fg-d3bl350": ":0:/src/app/App.tsx:1015:21:49141:28:e:Icon" })
              },
              d
            )),
            /* @__PURE__ */ a(
              e,
              {
                _fgT: "a",
                _fgS: "d3bl352",
                _fgB: 1784204816503,
                href: "#",
                "aria-label": "TikTok",
                className: "w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300",
                style: { background: "rgba(255,255,255,0.08)" },
                onMouseEnter: (t) => t.currentTarget.style.background = "#4E8B68",
                onMouseLeave: (t) => t.currentTarget.style.background = "rgba(255,255,255,0.08)",
                "data-fg-d3bl352": ":0:/src/app/App.tsx:1019:17:49260:962:e:a:e",
                children: /* @__PURE__ */ a(e, { _fgT: "svg", _fgS: "d3bl353", _fgB: 1784204816503, className: "w-4 h-4 fill-current", viewBox: "0 0 24 24", "aria-hidden": "true", "data-fg-d3bl353": ":0:/src/app/App.tsx:1027:19:49765:436:e:svg:e", children: /* @__PURE__ */ a("path", { d: "M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.53V6.79a4.85 4.85 0 01-1.01-.1z", "data-fg-d3bl354": ":0:/src/app/App.tsx:1028:21:49863:313:e:path" }) })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ l(e, { _fgT: "div", _fgS: "d3bl356", _fgB: 1784204816503, "data-fg-d3bl356": ":0:/src/app/App.tsx:1035:13:50307:901:e:div:ete", children: [
          /* @__PURE__ */ a(e, { _fgT: "h4", _fgS: "d3bl357", _fgB: 1784204816503, className: "text-xs font-semibold uppercase tracking-widest mb-5", style: { color: "rgba(255,255,255,0.3)" }, "data-fg-d3bl357": ":0:/src/app/App.tsx:1036:15:50327:158:e:h4:t", children: "Navigácia" }),
          /* @__PURE__ */ a(e, { _fgT: "nav", _fgS: "d3bl359", _fgB: 1784204816503, className: "flex flex-col gap-3", "data-fg-d3bl359": ":0:/src/app/App.tsx:1039:15:50500:689:e:nav:x", children: N.map((t) => /* @__PURE__ */ a(
            e,
            {
              _fgT: "a",
              _fgS: "d3bl361",
              _fgB: 1784204816503,
              href: t.href,
              className: "text-sm transition-colors duration-300",
              style: { color: t.accent ? "#6EC491" : "rgba(255,255,255,0.55)" },
              onMouseEnter: (d) => d.currentTarget.style.color = "#fff",
              onMouseLeave: (d) => d.currentTarget.style.color = t.accent ? "#6EC491" : "rgba(255,255,255,0.55)",
              "data-fg-d3bl361": ":0:/src/app/App.tsx:1041:19:50599:549:e:a:x",
              children: t.label
            },
            t.label
          )) })
        ] }),
        /* @__PURE__ */ l(e, { _fgT: "div", _fgS: "d3bl364", _fgB: 1784204816503, "data-fg-d3bl364": ":0:/src/app/App.tsx:1056:13:51253:916:e:div:ete", children: [
          /* @__PURE__ */ a(e, { _fgT: "h4", _fgS: "d3bl365", _fgB: 1784204816503, className: "text-xs font-semibold uppercase tracking-widest mb-5", style: { color: "rgba(255,255,255,0.3)" }, "data-fg-d3bl365": ":0:/src/app/App.tsx:1057:15:51273:158:e:h4:t", children: "Kategórie" }),
          /* @__PURE__ */ a(e, { _fgT: "nav", _fgS: "d3bl367", _fgB: 1784204816503, className: "flex flex-col gap-3", "data-fg-d3bl367": ":0:/src/app/App.tsx:1060:15:51446:704:e:nav:x", children: ["Fitness", "Jóga", "Pohyb", "Výživa", "Doplnky výživy", "Spánok", "Regenerácia", "Myseľ"].map((t) => /* @__PURE__ */ a(
            e,
            {
              _fgT: "a",
              _fgS: "d3bl369",
              _fgB: 1784204816503,
              href: "#kategorie",
              className: "text-sm transition-colors duration-300",
              style: { color: "rgba(255,255,255,0.55)" },
              onMouseEnter: (d) => d.currentTarget.style.color = "#fff",
              onMouseLeave: (d) => d.currentTarget.style.color = "rgba(255,255,255,0.55)",
              "data-fg-d3bl369": ":0:/src/app/App.tsx:1062:19:51625:484:e:a:x",
              children: t
            },
            t
          )) })
        ] }),
        /* @__PURE__ */ l(e, { _fgT: "div", _fgS: "d3bl372", _fgB: 1784204816503, id: "kontakt", "data-fg-d3bl372": ":0:/src/app/App.tsx:1077:13:52211:1501:e:div:etetetete", children: [
          /* @__PURE__ */ a(e, { _fgT: "h4", _fgS: "d3bl373", _fgB: 1784204816503, className: "text-xs font-semibold uppercase tracking-widest mb-5", style: { color: "rgba(255,255,255,0.3)" }, "data-fg-d3bl373": ":0:/src/app/App.tsx:1078:15:52244:156:e:h4:t", children: "Kontakt" }),
          /* @__PURE__ */ l(e, { _fgT: "div", _fgS: "d3bl375", _fgB: 1784204816503, className: "flex flex-col gap-3 text-sm mb-8", style: { color: "rgba(255,255,255,0.55)" }, "data-fg-d3bl375": ":0:/src/app/App.tsx:1081:15:52415:425:e:div:etete", children: [
            /* @__PURE__ */ a(e, { _fgT: "a", _fgS: "d3bl376", _fgB: 1784204816503, href: "mailto:info@zije.me", className: "hover:text-white transition-colors", "data-fg-d3bl376": ":0:/src/app/App.tsx:1082:17:52526:93:e:a:t", children: "info@zije.me" }),
            /* @__PURE__ */ a(e, { _fgT: "a", _fgS: "d3bl378", _fgB: 1784204816503, href: "tel:+421910123456", className: "hover:text-white transition-colors", "data-fg-d3bl378": ":0:/src/app/App.tsx:1083:17:52636:95:e:a:t", children: "+421 910 123 456" }),
            /* @__PURE__ */ l(e, { _fgT: "p", _fgS: "d3bl380", _fgB: 1784204816503, className: "leading-relaxed", "data-fg-d3bl380": ":0:/src/app/App.tsx:1084:17:52748:71:e:p:tet", children: [
              "Bratislava,",
              /* @__PURE__ */ a(e, { _fgT: "br", _fgS: "d3bl382", _fgB: 1784204816503, "data-fg-d3bl382": ":0:/src/app/App.tsx:1084:59:52790:6:e:br" }),
              "Slovenská republika"
            ] })
          ] }),
          /* @__PURE__ */ a(e, { _fgT: "h4", _fgS: "d3bl384", _fgB: 1784204816503, className: "text-xs font-semibold uppercase tracking-widest mb-3", style: { color: "rgba(255,255,255,0.3)" }, "data-fg-d3bl384": ":0:/src/app/App.tsx:1086:15:52855:159:e:h4:t", children: "Newsletter" }),
          /* @__PURE__ */ a(e, { _fgT: "p", _fgS: "d3bl386", _fgB: 1784204816503, className: "text-xs leading-relaxed mb-4", style: { color: "rgba(255,255,255,0.4)" }, "data-fg-d3bl386": ":0:/src/app/App.tsx:1089:15:53029:162:e:p:t", children: "Prihláste sa a buďte vždy o krok vpred." }),
          /* @__PURE__ */ l(
            e,
            {
              _fgT: "a",
              _fgS: "d3bl388",
              _fgB: 1784204816503,
              href: "#newsletter",
              className: "inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-300",
              style: { color: "#6EC491" },
              onMouseEnter: (t) => t.currentTarget.style.color = "#A8D4B8",
              onMouseLeave: (t) => t.currentTarget.style.color = "#6EC491",
              "data-fg-d3bl388": ":0:/src/app/App.tsx:1092:15:53206:487:e:a:te",
              children: [
                "Prihlásiť sa ",
                /* @__PURE__ */ a(e, { _fgT: m, _fgS: "d3bl390", _fgB: 1784204816503, className: "w-3.5 h-3.5", "data-fg-d3bl390": ":0:node_modules/lucide-react:1099:30:53636:38:e:ArrowRight::::::s5N" })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ l(
        e,
        {
          _fgT: "div",
          _fgS: "d3bl392",
          _fgB: 1784204816503,
          className: "flex flex-col sm:flex-row items-center justify-between gap-4 pt-8",
          style: { borderTop: "1px solid rgba(255,255,255,0.08)" },
          "data-fg-d3bl392": ":0:/src/app/App.tsx:1105:11:53770:1020:e:div:ete",
          children: [
            /* @__PURE__ */ a(e, { _fgT: "p", _fgS: "d3bl393", _fgB: 1784204816503, className: "text-xs", style: { color: "rgba(255,255,255,0.25)" }, "data-fg-d3bl393": ":0:/src/app/App.tsx:1109:13:53959:138:e:p:t", children: "© 2025 zije.me – Všetky práva vyhradené" }),
            /* @__PURE__ */ a(e, { _fgT: "div", _fgS: "d3bl395", _fgB: 1784204816503, className: "flex items-center gap-6", "data-fg-d3bl395": ":0:/src/app/App.tsx:1112:13:54110:663:e:div:x", children: ["Ochrana osobných údajov", "Obchodné podmienky", "Cookies"].map((t) => /* @__PURE__ */ a(
              e,
              {
                _fgT: "a",
                _fgS: "d3bl397",
                _fgB: 1784204816503,
                href: "#",
                className: "text-xs transition-colors duration-300",
                style: { color: "rgba(255,255,255,0.25)" },
                onMouseEnter: (d) => d.currentTarget.style.color = "rgba(255,255,255,0.6)",
                onMouseLeave: (d) => d.currentTarget.style.color = "rgba(255,255,255,0.25)",
                "data-fg-d3bl397": ":0:/src/app/App.tsx:1114:17:54260:476:e:a:x",
                children: t
              },
              t
            )) })
          ]
        }
      )
    ] }) })
  ] });
}
const Re = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Oe
}, Symbol.toStringTag, { value: "Module" }));
export {
  Ve as Code0_8
};
