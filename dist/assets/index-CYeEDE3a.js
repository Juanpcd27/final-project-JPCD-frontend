function nf(t, n) {
  for (var r = 0; r < n.length; r++) {
    const l = n[r];
    if (typeof l != "string" && !Array.isArray(l)) {
      for (const o in l)
        if (o !== "default" && !(o in t)) {
          const i = Object.getOwnPropertyDescriptor(l, o);
          i &&
            Object.defineProperty(
              t,
              o,
              i.get ? i : { enumerable: !0, get: () => l[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(t, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) l(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const u of i.addedNodes)
          u.tagName === "LINK" && u.rel === "modulepreload" && l(u);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function l(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = r(o);
    fetch(o.href, i);
  }
})();
function rf(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
var Ps = { exports: {} },
  hl = {},
  js = { exports: {} },
  O = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var rr = Symbol.for("react.element"),
  lf = Symbol.for("react.portal"),
  of = Symbol.for("react.fragment"),
  uf = Symbol.for("react.strict_mode"),
  sf = Symbol.for("react.profiler"),
  af = Symbol.for("react.provider"),
  cf = Symbol.for("react.context"),
  ff = Symbol.for("react.forward_ref"),
  df = Symbol.for("react.suspense"),
  pf = Symbol.for("react.memo"),
  hf = Symbol.for("react.lazy"),
  iu = Symbol.iterator;
function mf(t) {
  return t === null || typeof t != "object"
    ? null
    : ((t = (iu && t[iu]) || t["@@iterator"]),
      typeof t == "function" ? t : null);
}
var Ts = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Rs = Object.assign,
  Ls = {};
function dn(t, n, r) {
  (this.props = t),
    (this.context = n),
    (this.refs = Ls),
    (this.updater = r || Ts);
}
dn.prototype.isReactComponent = {};
dn.prototype.setState = function (t, n) {
  if (typeof t != "object" && typeof t != "function" && t != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, t, n, "setState");
};
dn.prototype.forceUpdate = function (t) {
  this.updater.enqueueForceUpdate(this, t, "forceUpdate");
};
function zs() {}
zs.prototype = dn.prototype;
function ii(t, n, r) {
  (this.props = t),
    (this.context = n),
    (this.refs = Ls),
    (this.updater = r || Ts);
}
var ui = (ii.prototype = new zs());
ui.constructor = ii;
Rs(ui, dn.prototype);
ui.isPureReactComponent = !0;
var uu = Array.isArray,
  Os = Object.prototype.hasOwnProperty,
  si = { current: null },
  Is = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ms(t, n, r) {
  var l,
    o = {},
    i = null,
    u = null;
  if (n != null)
    for (l in (n.ref !== void 0 && (u = n.ref),
    n.key !== void 0 && (i = "" + n.key),
    n))
      Os.call(n, l) && !Is.hasOwnProperty(l) && (o[l] = n[l]);
  var s = arguments.length - 2;
  if (s === 1) o.children = r;
  else if (1 < s) {
    for (var a = Array(s), c = 0; c < s; c++) a[c] = arguments[c + 2];
    o.children = a;
  }
  if (t && t.defaultProps)
    for (l in ((s = t.defaultProps), s)) o[l] === void 0 && (o[l] = s[l]);
  return {
    $$typeof: rr,
    type: t,
    key: i,
    ref: u,
    props: o,
    _owner: si.current,
  };
}
function vf(t, n) {
  return {
    $$typeof: rr,
    type: t.type,
    key: n,
    ref: t.ref,
    props: t.props,
    _owner: t._owner,
  };
}
function ai(t) {
  return typeof t == "object" && t !== null && t.$$typeof === rr;
}
function gf(t) {
  var n = { "=": "=0", ":": "=2" };
  return (
    "$" +
    t.replace(/[=:]/g, function (r) {
      return n[r];
    })
  );
}
var su = /\/+/g;
function Il(t, n) {
  return typeof t == "object" && t !== null && t.key != null
    ? gf("" + t.key)
    : n.toString(36);
}
function jr(t, n, r, l, o) {
  var i = typeof t;
  (i === "undefined" || i === "boolean") && (t = null);
  var u = !1;
  if (t === null) u = !0;
  else
    switch (i) {
      case "string":
      case "number":
        u = !0;
        break;
      case "object":
        switch (t.$$typeof) {
          case rr:
          case lf:
            u = !0;
        }
    }
  if (u)
    return (
      (u = t),
      (o = o(u)),
      (t = l === "" ? "." + Il(u, 0) : l),
      uu(o)
        ? ((r = ""),
          t != null && (r = t.replace(su, "$&/") + "/"),
          jr(o, n, r, "", function (c) {
            return c;
          }))
        : o != null &&
          (ai(o) &&
            (o = vf(
              o,
              r +
                (!o.key || (u && u.key === o.key)
                  ? ""
                  : ("" + o.key).replace(su, "$&/") + "/") +
                t
            )),
          n.push(o)),
      1
    );
  if (((u = 0), (l = l === "" ? "." : l + ":"), uu(t)))
    for (var s = 0; s < t.length; s++) {
      i = t[s];
      var a = l + Il(i, s);
      u += jr(i, n, r, a, o);
    }
  else if (((a = mf(t)), typeof a == "function"))
    for (t = a.call(t), s = 0; !(i = t.next()).done; )
      (i = i.value), (a = l + Il(i, s++)), (u += jr(i, n, r, a, o));
  else if (i === "object")
    throw (
      ((n = String(t)),
      Error(
        "Objects are not valid as a React child (found: " +
          (n === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : n) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return u;
}
function fr(t, n, r) {
  if (t == null) return t;
  var l = [],
    o = 0;
  return (
    jr(t, l, "", "", function (i) {
      return n.call(r, i, o++);
    }),
    l
  );
}
function yf(t) {
  if (t._status === -1) {
    var n = t._result;
    (n = n()),
      n.then(
        function (r) {
          (t._status === 0 || t._status === -1) &&
            ((t._status = 1), (t._result = r));
        },
        function (r) {
          (t._status === 0 || t._status === -1) &&
            ((t._status = 2), (t._result = r));
        }
      ),
      t._status === -1 && ((t._status = 0), (t._result = n));
  }
  if (t._status === 1) return t._result.default;
  throw t._result;
}
var ce = { current: null },
  Tr = { transition: null },
  wf = {
    ReactCurrentDispatcher: ce,
    ReactCurrentBatchConfig: Tr,
    ReactCurrentOwner: si,
  };
function Ds() {
  throw Error("act(...) is not supported in production builds of React.");
}
O.Children = {
  map: fr,
  forEach: function (t, n, r) {
    fr(
      t,
      function () {
        n.apply(this, arguments);
      },
      r
    );
  },
  count: function (t) {
    var n = 0;
    return (
      fr(t, function () {
        n++;
      }),
      n
    );
  },
  toArray: function (t) {
    return (
      fr(t, function (n) {
        return n;
      }) || []
    );
  },
  only: function (t) {
    if (!ai(t))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return t;
  },
};
O.Component = dn;
O.Fragment = of;
O.Profiler = sf;
O.PureComponent = ii;
O.StrictMode = uf;
O.Suspense = df;
O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wf;
O.act = Ds;
O.cloneElement = function (t, n, r) {
  if (t == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        t +
        "."
    );
  var l = Rs({}, t.props),
    o = t.key,
    i = t.ref,
    u = t._owner;
  if (n != null) {
    if (
      (n.ref !== void 0 && ((i = n.ref), (u = si.current)),
      n.key !== void 0 && (o = "" + n.key),
      t.type && t.type.defaultProps)
    )
      var s = t.type.defaultProps;
    for (a in n)
      Os.call(n, a) &&
        !Is.hasOwnProperty(a) &&
        (l[a] = n[a] === void 0 && s !== void 0 ? s[a] : n[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) l.children = r;
  else if (1 < a) {
    s = Array(a);
    for (var c = 0; c < a; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  return { $$typeof: rr, type: t.type, key: o, ref: i, props: l, _owner: u };
};
O.createContext = function (t) {
  return (
    (t = {
      $$typeof: cf,
      _currentValue: t,
      _currentValue2: t,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (t.Provider = { $$typeof: af, _context: t }),
    (t.Consumer = t)
  );
};
O.createElement = Ms;
O.createFactory = function (t) {
  var n = Ms.bind(null, t);
  return (n.type = t), n;
};
O.createRef = function () {
  return { current: null };
};
O.forwardRef = function (t) {
  return { $$typeof: ff, render: t };
};
O.isValidElement = ai;
O.lazy = function (t) {
  return { $$typeof: hf, _payload: { _status: -1, _result: t }, _init: yf };
};
O.memo = function (t, n) {
  return { $$typeof: pf, type: t, compare: n === void 0 ? null : n };
};
O.startTransition = function (t) {
  var n = Tr.transition;
  Tr.transition = {};
  try {
    t();
  } finally {
    Tr.transition = n;
  }
};
O.unstable_act = Ds;
O.useCallback = function (t, n) {
  return ce.current.useCallback(t, n);
};
O.useContext = function (t) {
  return ce.current.useContext(t);
};
O.useDebugValue = function () {};
O.useDeferredValue = function (t) {
  return ce.current.useDeferredValue(t);
};
O.useEffect = function (t, n) {
  return ce.current.useEffect(t, n);
};
O.useId = function () {
  return ce.current.useId();
};
O.useImperativeHandle = function (t, n, r) {
  return ce.current.useImperativeHandle(t, n, r);
};
O.useInsertionEffect = function (t, n) {
  return ce.current.useInsertionEffect(t, n);
};
O.useLayoutEffect = function (t, n) {
  return ce.current.useLayoutEffect(t, n);
};
O.useMemo = function (t, n) {
  return ce.current.useMemo(t, n);
};
O.useReducer = function (t, n, r) {
  return ce.current.useReducer(t, n, r);
};
O.useRef = function (t) {
  return ce.current.useRef(t);
};
O.useState = function (t) {
  return ce.current.useState(t);
};
O.useSyncExternalStore = function (t, n, r) {
  return ce.current.useSyncExternalStore(t, n, r);
};
O.useTransition = function () {
  return ce.current.useTransition();
};
O.version = "18.3.1";
js.exports = O;
var _ = js.exports;
const Fs = rf(_),
  Sf = nf({ __proto__: null, default: Fs }, [_]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var kf = _,
  xf = Symbol.for("react.element"),
  Ef = Symbol.for("react.fragment"),
  _f = Object.prototype.hasOwnProperty,
  Cf = kf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Nf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Us(t, n, r) {
  var l,
    o = {},
    i = null,
    u = null;
  r !== void 0 && (i = "" + r),
    n.key !== void 0 && (i = "" + n.key),
    n.ref !== void 0 && (u = n.ref);
  for (l in n) _f.call(n, l) && !Nf.hasOwnProperty(l) && (o[l] = n[l]);
  if (t && t.defaultProps)
    for (l in ((n = t.defaultProps), n)) o[l] === void 0 && (o[l] = n[l]);
  return {
    $$typeof: xf,
    type: t,
    key: i,
    ref: u,
    props: o,
    _owner: Cf.current,
  };
}
hl.Fragment = Ef;
hl.jsx = Us;
hl.jsxs = Us;
Ps.exports = hl;
var y = Ps.exports,
  uo = {},
  $s = { exports: {} },
  ke = {},
  Bs = { exports: {} },
  As = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (t) {
  function n(P, L) {
    var z = P.length;
    P.push(L);
    e: for (; 0 < z; ) {
      var K = (z - 1) >>> 1,
        q = P[K];
      if (0 < o(q, L)) (P[K] = L), (P[z] = q), (z = K);
      else break e;
    }
  }
  function r(P) {
    return P.length === 0 ? null : P[0];
  }
  function l(P) {
    if (P.length === 0) return null;
    var L = P[0],
      z = P.pop();
    if (z !== L) {
      P[0] = z;
      e: for (var K = 0, q = P.length, ar = q >>> 1; K < ar; ) {
        var xt = 2 * (K + 1) - 1,
          Ol = P[xt],
          Et = xt + 1,
          cr = P[Et];
        if (0 > o(Ol, z))
          Et < q && 0 > o(cr, Ol)
            ? ((P[K] = cr), (P[Et] = z), (K = Et))
            : ((P[K] = Ol), (P[xt] = z), (K = xt));
        else if (Et < q && 0 > o(cr, z)) (P[K] = cr), (P[Et] = z), (K = Et);
        else break e;
      }
    }
    return L;
  }
  function o(P, L) {
    var z = P.sortIndex - L.sortIndex;
    return z !== 0 ? z : P.id - L.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    t.unstable_now = function () {
      return i.now();
    };
  } else {
    var u = Date,
      s = u.now();
    t.unstable_now = function () {
      return u.now() - s;
    };
  }
  var a = [],
    c = [],
    m = 1,
    h = null,
    v = 3,
    w = !1,
    S = !1,
    k = !1,
    C = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(P) {
    for (var L = r(c); L !== null; ) {
      if (L.callback === null) l(c);
      else if (L.startTime <= P)
        l(c), (L.sortIndex = L.expirationTime), n(a, L);
      else break;
      L = r(c);
    }
  }
  function g(P) {
    if (((k = !1), p(P), !S))
      if (r(a) !== null) (S = !0), Ll(E);
      else {
        var L = r(c);
        L !== null && zl(g, L.startTime - P);
      }
  }
  function E(P, L) {
    (S = !1), k && ((k = !1), d(R), (R = -1)), (w = !0);
    var z = v;
    try {
      for (
        p(L), h = r(a);
        h !== null && (!(h.expirationTime > L) || (P && !Te()));

      ) {
        var K = h.callback;
        if (typeof K == "function") {
          (h.callback = null), (v = h.priorityLevel);
          var q = K(h.expirationTime <= L);
          (L = t.unstable_now()),
            typeof q == "function" ? (h.callback = q) : h === r(a) && l(a),
            p(L);
        } else l(a);
        h = r(a);
      }
      if (h !== null) var ar = !0;
      else {
        var xt = r(c);
        xt !== null && zl(g, xt.startTime - L), (ar = !1);
      }
      return ar;
    } finally {
      (h = null), (v = z), (w = !1);
    }
  }
  var j = !1,
    T = null,
    R = -1,
    Q = 5,
    I = -1;
  function Te() {
    return !(t.unstable_now() - I < Q);
  }
  function vn() {
    if (T !== null) {
      var P = t.unstable_now();
      I = P;
      var L = !0;
      try {
        L = T(!0, P);
      } finally {
        L ? gn() : ((j = !1), (T = null));
      }
    } else j = !1;
  }
  var gn;
  if (typeof f == "function")
    gn = function () {
      f(vn);
    };
  else if (typeof MessageChannel < "u") {
    var ou = new MessageChannel(),
      tf = ou.port2;
    (ou.port1.onmessage = vn),
      (gn = function () {
        tf.postMessage(null);
      });
  } else
    gn = function () {
      C(vn, 0);
    };
  function Ll(P) {
    (T = P), j || ((j = !0), gn());
  }
  function zl(P, L) {
    R = C(function () {
      P(t.unstable_now());
    }, L);
  }
  (t.unstable_IdlePriority = 5),
    (t.unstable_ImmediatePriority = 1),
    (t.unstable_LowPriority = 4),
    (t.unstable_NormalPriority = 3),
    (t.unstable_Profiling = null),
    (t.unstable_UserBlockingPriority = 2),
    (t.unstable_cancelCallback = function (P) {
      P.callback = null;
    }),
    (t.unstable_continueExecution = function () {
      S || w || ((S = !0), Ll(E));
    }),
    (t.unstable_forceFrameRate = function (P) {
      0 > P || 125 < P
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (Q = 0 < P ? Math.floor(1e3 / P) : 5);
    }),
    (t.unstable_getCurrentPriorityLevel = function () {
      return v;
    }),
    (t.unstable_getFirstCallbackNode = function () {
      return r(a);
    }),
    (t.unstable_next = function (P) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = v;
      }
      var z = v;
      v = L;
      try {
        return P();
      } finally {
        v = z;
      }
    }),
    (t.unstable_pauseExecution = function () {}),
    (t.unstable_requestPaint = function () {}),
    (t.unstable_runWithPriority = function (P, L) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          P = 3;
      }
      var z = v;
      v = P;
      try {
        return L();
      } finally {
        v = z;
      }
    }),
    (t.unstable_scheduleCallback = function (P, L, z) {
      var K = t.unstable_now();
      switch (
        (typeof z == "object" && z !== null
          ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? K + z : K))
          : (z = K),
        P)
      ) {
        case 1:
          var q = -1;
          break;
        case 2:
          q = 250;
          break;
        case 5:
          q = 1073741823;
          break;
        case 4:
          q = 1e4;
          break;
        default:
          q = 5e3;
      }
      return (
        (q = z + q),
        (P = {
          id: m++,
          callback: L,
          priorityLevel: P,
          startTime: z,
          expirationTime: q,
          sortIndex: -1,
        }),
        z > K
          ? ((P.sortIndex = z),
            n(c, P),
            r(a) === null &&
              P === r(c) &&
              (k ? (d(R), (R = -1)) : (k = !0), zl(g, z - K)))
          : ((P.sortIndex = q), n(a, P), S || w || ((S = !0), Ll(E))),
        P
      );
    }),
    (t.unstable_shouldYield = Te),
    (t.unstable_wrapCallback = function (P) {
      var L = v;
      return function () {
        var z = v;
        v = L;
        try {
          return P.apply(this, arguments);
        } finally {
          v = z;
        }
      };
    });
})(As);
Bs.exports = As;
var Pf = Bs.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jf = _,
  Se = Pf;
function x(t) {
  for (
    var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, r = 1;
    r < arguments.length;
    r++
  )
    n += "&args[]=" + encodeURIComponent(arguments[r]);
  return (
    "Minified React error #" +
    t +
    "; visit " +
    n +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Vs = new Set(),
  $n = {};
function Dt(t, n) {
  ln(t, n), ln(t + "Capture", n);
}
function ln(t, n) {
  for ($n[t] = n, t = 0; t < n.length; t++) Vs.add(n[t]);
}
var Ye = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  so = Object.prototype.hasOwnProperty,
  Tf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  au = {},
  cu = {};
function Rf(t) {
  return so.call(cu, t)
    ? !0
    : so.call(au, t)
    ? !1
    : Tf.test(t)
    ? (cu[t] = !0)
    : ((au[t] = !0), !1);
}
function Lf(t, n, r, l) {
  if (r !== null && r.type === 0) return !1;
  switch (typeof n) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return l
        ? !1
        : r !== null
        ? !r.acceptsBooleans
        : ((t = t.toLowerCase().slice(0, 5)), t !== "data-" && t !== "aria-");
    default:
      return !1;
  }
}
function zf(t, n, r, l) {
  if (n === null || typeof n > "u" || Lf(t, n, r, l)) return !0;
  if (l) return !1;
  if (r !== null)
    switch (r.type) {
      case 3:
        return !n;
      case 4:
        return n === !1;
      case 5:
        return isNaN(n);
      case 6:
        return isNaN(n) || 1 > n;
    }
  return !1;
}
function fe(t, n, r, l, o, i, u) {
  (this.acceptsBooleans = n === 2 || n === 3 || n === 4),
    (this.attributeName = l),
    (this.attributeNamespace = o),
    (this.mustUseProperty = r),
    (this.propertyName = t),
    (this.type = n),
    (this.sanitizeURL = i),
    (this.removeEmptyString = u);
}
var re = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (t) {
    re[t] = new fe(t, 0, !1, t, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (t) {
  var n = t[0];
  re[n] = new fe(n, 1, !1, t[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (t) {
  re[t] = new fe(t, 2, !1, t.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (t) {
  re[t] = new fe(t, 2, !1, t, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (t) {
    re[t] = new fe(t, 3, !1, t.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (t) {
  re[t] = new fe(t, 3, !0, t, null, !1, !1);
});
["capture", "download"].forEach(function (t) {
  re[t] = new fe(t, 4, !1, t, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (t) {
  re[t] = new fe(t, 6, !1, t, null, !1, !1);
});
["rowSpan", "start"].forEach(function (t) {
  re[t] = new fe(t, 5, !1, t.toLowerCase(), null, !1, !1);
});
var ci = /[\-:]([a-z])/g;
function fi(t) {
  return t[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (t) {
    var n = t.replace(ci, fi);
    re[n] = new fe(n, 1, !1, t, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (t) {
    var n = t.replace(ci, fi);
    re[n] = new fe(n, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (t) {
  var n = t.replace(ci, fi);
  re[n] = new fe(n, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (t) {
  re[t] = new fe(t, 1, !1, t.toLowerCase(), null, !1, !1);
});
re.xlinkHref = new fe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (t) {
  re[t] = new fe(t, 1, !1, t.toLowerCase(), null, !0, !0);
});
function di(t, n, r, l) {
  var o = re.hasOwnProperty(n) ? re[n] : null;
  (o !== null
    ? o.type !== 0
    : l ||
      !(2 < n.length) ||
      (n[0] !== "o" && n[0] !== "O") ||
      (n[1] !== "n" && n[1] !== "N")) &&
    (zf(n, r, o, l) && (r = null),
    l || o === null
      ? Rf(n) && (r === null ? t.removeAttribute(n) : t.setAttribute(n, "" + r))
      : o.mustUseProperty
      ? (t[o.propertyName] = r === null ? (o.type === 3 ? !1 : "") : r)
      : ((n = o.attributeName),
        (l = o.attributeNamespace),
        r === null
          ? t.removeAttribute(n)
          : ((o = o.type),
            (r = o === 3 || (o === 4 && r === !0) ? "" : "" + r),
            l ? t.setAttributeNS(l, n, r) : t.setAttribute(n, r))));
}
var Ze = jf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  dr = Symbol.for("react.element"),
  $t = Symbol.for("react.portal"),
  Bt = Symbol.for("react.fragment"),
  pi = Symbol.for("react.strict_mode"),
  ao = Symbol.for("react.profiler"),
  Ws = Symbol.for("react.provider"),
  Hs = Symbol.for("react.context"),
  hi = Symbol.for("react.forward_ref"),
  co = Symbol.for("react.suspense"),
  fo = Symbol.for("react.suspense_list"),
  mi = Symbol.for("react.memo"),
  be = Symbol.for("react.lazy"),
  Qs = Symbol.for("react.offscreen"),
  fu = Symbol.iterator;
function yn(t) {
  return t === null || typeof t != "object"
    ? null
    : ((t = (fu && t[fu]) || t["@@iterator"]),
      typeof t == "function" ? t : null);
}
var W = Object.assign,
  Ml;
function Nn(t) {
  if (Ml === void 0)
    try {
      throw Error();
    } catch (r) {
      var n = r.stack.trim().match(/\n( *(at )?)/);
      Ml = (n && n[1]) || "";
    }
  return (
    `
` +
    Ml +
    t
  );
}
var Dl = !1;
function Fl(t, n) {
  if (!t || Dl) return "";
  Dl = !0;
  var r = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (n)
      if (
        ((n = function () {
          throw Error();
        }),
        Object.defineProperty(n.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(n, []);
        } catch (c) {
          var l = c;
        }
        Reflect.construct(t, [], n);
      } else {
        try {
          n.call();
        } catch (c) {
          l = c;
        }
        t.call(n.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        l = c;
      }
      t();
    }
  } catch (c) {
    if (c && l && typeof c.stack == "string") {
      for (
        var o = c.stack.split(`
`),
          i = l.stack.split(`
`),
          u = o.length - 1,
          s = i.length - 1;
        1 <= u && 0 <= s && o[u] !== i[s];

      )
        s--;
      for (; 1 <= u && 0 <= s; u--, s--)
        if (o[u] !== i[s]) {
          if (u !== 1 || s !== 1)
            do
              if ((u--, s--, 0 > s || o[u] !== i[s])) {
                var a =
                  `
` + o[u].replace(" at new ", " at ");
                return (
                  t.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", t.displayName)),
                  a
                );
              }
            while (1 <= u && 0 <= s);
          break;
        }
    }
  } finally {
    (Dl = !1), (Error.prepareStackTrace = r);
  }
  return (t = t ? t.displayName || t.name : "") ? Nn(t) : "";
}
function Of(t) {
  switch (t.tag) {
    case 5:
      return Nn(t.type);
    case 16:
      return Nn("Lazy");
    case 13:
      return Nn("Suspense");
    case 19:
      return Nn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (t = Fl(t.type, !1)), t;
    case 11:
      return (t = Fl(t.type.render, !1)), t;
    case 1:
      return (t = Fl(t.type, !0)), t;
    default:
      return "";
  }
}
function po(t) {
  if (t == null) return null;
  if (typeof t == "function") return t.displayName || t.name || null;
  if (typeof t == "string") return t;
  switch (t) {
    case Bt:
      return "Fragment";
    case $t:
      return "Portal";
    case ao:
      return "Profiler";
    case pi:
      return "StrictMode";
    case co:
      return "Suspense";
    case fo:
      return "SuspenseList";
  }
  if (typeof t == "object")
    switch (t.$$typeof) {
      case Hs:
        return (t.displayName || "Context") + ".Consumer";
      case Ws:
        return (t._context.displayName || "Context") + ".Provider";
      case hi:
        var n = t.render;
        return (
          (t = t.displayName),
          t ||
            ((t = n.displayName || n.name || ""),
            (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
          t
        );
      case mi:
        return (
          (n = t.displayName || null), n !== null ? n : po(t.type) || "Memo"
        );
      case be:
        (n = t._payload), (t = t._init);
        try {
          return po(t(n));
        } catch {}
    }
  return null;
}
function If(t) {
  var n = t.type;
  switch (t.tag) {
    case 24:
      return "Cache";
    case 9:
      return (n.displayName || "Context") + ".Consumer";
    case 10:
      return (n._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (t = n.render),
        (t = t.displayName || t.name || ""),
        n.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return n;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return po(n);
    case 8:
      return n === pi ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof n == "function") return n.displayName || n.name || null;
      if (typeof n == "string") return n;
  }
  return null;
}
function ht(t) {
  switch (typeof t) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return t;
    case "object":
      return t;
    default:
      return "";
  }
}
function Ks(t) {
  var n = t.type;
  return (
    (t = t.nodeName) &&
    t.toLowerCase() === "input" &&
    (n === "checkbox" || n === "radio")
  );
}
function Mf(t) {
  var n = Ks(t) ? "checked" : "value",
    r = Object.getOwnPropertyDescriptor(t.constructor.prototype, n),
    l = "" + t[n];
  if (
    !t.hasOwnProperty(n) &&
    typeof r < "u" &&
    typeof r.get == "function" &&
    typeof r.set == "function"
  ) {
    var o = r.get,
      i = r.set;
    return (
      Object.defineProperty(t, n, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (u) {
          (l = "" + u), i.call(this, u);
        },
      }),
      Object.defineProperty(t, n, { enumerable: r.enumerable }),
      {
        getValue: function () {
          return l;
        },
        setValue: function (u) {
          l = "" + u;
        },
        stopTracking: function () {
          (t._valueTracker = null), delete t[n];
        },
      }
    );
  }
}
function pr(t) {
  t._valueTracker || (t._valueTracker = Mf(t));
}
function Ys(t) {
  if (!t) return !1;
  var n = t._valueTracker;
  if (!n) return !0;
  var r = n.getValue(),
    l = "";
  return (
    t && (l = Ks(t) ? (t.checked ? "true" : "false") : t.value),
    (t = l),
    t !== r ? (n.setValue(t), !0) : !1
  );
}
function Ar(t) {
  if (((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u"))
    return null;
  try {
    return t.activeElement || t.body;
  } catch {
    return t.body;
  }
}
function ho(t, n) {
  var r = n.checked;
  return W({}, n, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: r ?? t._wrapperState.initialChecked,
  });
}
function du(t, n) {
  var r = n.defaultValue == null ? "" : n.defaultValue,
    l = n.checked != null ? n.checked : n.defaultChecked;
  (r = ht(n.value != null ? n.value : r)),
    (t._wrapperState = {
      initialChecked: l,
      initialValue: r,
      controlled:
        n.type === "checkbox" || n.type === "radio"
          ? n.checked != null
          : n.value != null,
    });
}
function Xs(t, n) {
  (n = n.checked), n != null && di(t, "checked", n, !1);
}
function mo(t, n) {
  Xs(t, n);
  var r = ht(n.value),
    l = n.type;
  if (r != null)
    l === "number"
      ? ((r === 0 && t.value === "") || t.value != r) && (t.value = "" + r)
      : t.value !== "" + r && (t.value = "" + r);
  else if (l === "submit" || l === "reset") {
    t.removeAttribute("value");
    return;
  }
  n.hasOwnProperty("value")
    ? vo(t, n.type, r)
    : n.hasOwnProperty("defaultValue") && vo(t, n.type, ht(n.defaultValue)),
    n.checked == null &&
      n.defaultChecked != null &&
      (t.defaultChecked = !!n.defaultChecked);
}
function pu(t, n, r) {
  if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
    var l = n.type;
    if (
      !(
        (l !== "submit" && l !== "reset") ||
        (n.value !== void 0 && n.value !== null)
      )
    )
      return;
    (n = "" + t._wrapperState.initialValue),
      r || n === t.value || (t.value = n),
      (t.defaultValue = n);
  }
  (r = t.name),
    r !== "" && (t.name = ""),
    (t.defaultChecked = !!t._wrapperState.initialChecked),
    r !== "" && (t.name = r);
}
function vo(t, n, r) {
  (n !== "number" || Ar(t.ownerDocument) !== t) &&
    (r == null
      ? (t.defaultValue = "" + t._wrapperState.initialValue)
      : t.defaultValue !== "" + r && (t.defaultValue = "" + r));
}
var Pn = Array.isArray;
function qt(t, n, r, l) {
  if (((t = t.options), n)) {
    n = {};
    for (var o = 0; o < r.length; o++) n["$" + r[o]] = !0;
    for (r = 0; r < t.length; r++)
      (o = n.hasOwnProperty("$" + t[r].value)),
        t[r].selected !== o && (t[r].selected = o),
        o && l && (t[r].defaultSelected = !0);
  } else {
    for (r = "" + ht(r), n = null, o = 0; o < t.length; o++) {
      if (t[o].value === r) {
        (t[o].selected = !0), l && (t[o].defaultSelected = !0);
        return;
      }
      n !== null || t[o].disabled || (n = t[o]);
    }
    n !== null && (n.selected = !0);
  }
}
function go(t, n) {
  if (n.dangerouslySetInnerHTML != null) throw Error(x(91));
  return W({}, n, {
    value: void 0,
    defaultValue: void 0,
    children: "" + t._wrapperState.initialValue,
  });
}
function hu(t, n) {
  var r = n.value;
  if (r == null) {
    if (((r = n.children), (n = n.defaultValue), r != null)) {
      if (n != null) throw Error(x(92));
      if (Pn(r)) {
        if (1 < r.length) throw Error(x(93));
        r = r[0];
      }
      n = r;
    }
    n == null && (n = ""), (r = n);
  }
  t._wrapperState = { initialValue: ht(r) };
}
function Gs(t, n) {
  var r = ht(n.value),
    l = ht(n.defaultValue);
  r != null &&
    ((r = "" + r),
    r !== t.value && (t.value = r),
    n.defaultValue == null && t.defaultValue !== r && (t.defaultValue = r)),
    l != null && (t.defaultValue = "" + l);
}
function mu(t) {
  var n = t.textContent;
  n === t._wrapperState.initialValue && n !== "" && n !== null && (t.value = n);
}
function Js(t) {
  switch (t) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function yo(t, n) {
  return t == null || t === "http://www.w3.org/1999/xhtml"
    ? Js(n)
    : t === "http://www.w3.org/2000/svg" && n === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : t;
}
var hr,
  Zs = (function (t) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (n, r, l, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return t(n, r, l, o);
          });
        }
      : t;
  })(function (t, n) {
    if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t)
      t.innerHTML = n;
    else {
      for (
        hr = hr || document.createElement("div"),
          hr.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>",
          n = hr.firstChild;
        t.firstChild;

      )
        t.removeChild(t.firstChild);
      for (; n.firstChild; ) t.appendChild(n.firstChild);
    }
  });
function Bn(t, n) {
  if (n) {
    var r = t.firstChild;
    if (r && r === t.lastChild && r.nodeType === 3) {
      r.nodeValue = n;
      return;
    }
  }
  t.textContent = n;
}
var Rn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Df = ["Webkit", "ms", "Moz", "O"];
Object.keys(Rn).forEach(function (t) {
  Df.forEach(function (n) {
    (n = n + t.charAt(0).toUpperCase() + t.substring(1)), (Rn[n] = Rn[t]);
  });
});
function qs(t, n, r) {
  return n == null || typeof n == "boolean" || n === ""
    ? ""
    : r || typeof n != "number" || n === 0 || (Rn.hasOwnProperty(t) && Rn[t])
    ? ("" + n).trim()
    : n + "px";
}
function bs(t, n) {
  t = t.style;
  for (var r in n)
    if (n.hasOwnProperty(r)) {
      var l = r.indexOf("--") === 0,
        o = qs(r, n[r], l);
      r === "float" && (r = "cssFloat"), l ? t.setProperty(r, o) : (t[r] = o);
    }
}
var Ff = W(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function wo(t, n) {
  if (n) {
    if (Ff[t] && (n.children != null || n.dangerouslySetInnerHTML != null))
      throw Error(x(137, t));
    if (n.dangerouslySetInnerHTML != null) {
      if (n.children != null) throw Error(x(60));
      if (
        typeof n.dangerouslySetInnerHTML != "object" ||
        !("__html" in n.dangerouslySetInnerHTML)
      )
        throw Error(x(61));
    }
    if (n.style != null && typeof n.style != "object") throw Error(x(62));
  }
}
function So(t, n) {
  if (t.indexOf("-") === -1) return typeof n.is == "string";
  switch (t) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var ko = null;
function vi(t) {
  return (
    (t = t.target || t.srcElement || window),
    t.correspondingUseElement && (t = t.correspondingUseElement),
    t.nodeType === 3 ? t.parentNode : t
  );
}
var xo = null,
  bt = null,
  en = null;
function vu(t) {
  if ((t = ir(t))) {
    if (typeof xo != "function") throw Error(x(280));
    var n = t.stateNode;
    n && ((n = wl(n)), xo(t.stateNode, t.type, n));
  }
}
function ea(t) {
  bt ? (en ? en.push(t) : (en = [t])) : (bt = t);
}
function ta() {
  if (bt) {
    var t = bt,
      n = en;
    if (((en = bt = null), vu(t), n)) for (t = 0; t < n.length; t++) vu(n[t]);
  }
}
function na(t, n) {
  return t(n);
}
function ra() {}
var Ul = !1;
function la(t, n, r) {
  if (Ul) return t(n, r);
  Ul = !0;
  try {
    return na(t, n, r);
  } finally {
    (Ul = !1), (bt !== null || en !== null) && (ra(), ta());
  }
}
function An(t, n) {
  var r = t.stateNode;
  if (r === null) return null;
  var l = wl(r);
  if (l === null) return null;
  r = l[n];
  e: switch (n) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (l = !l.disabled) ||
        ((t = t.type),
        (l = !(
          t === "button" ||
          t === "input" ||
          t === "select" ||
          t === "textarea"
        ))),
        (t = !l);
      break e;
    default:
      t = !1;
  }
  if (t) return null;
  if (r && typeof r != "function") throw Error(x(231, n, typeof r));
  return r;
}
var Eo = !1;
if (Ye)
  try {
    var wn = {};
    Object.defineProperty(wn, "passive", {
      get: function () {
        Eo = !0;
      },
    }),
      window.addEventListener("test", wn, wn),
      window.removeEventListener("test", wn, wn);
  } catch {
    Eo = !1;
  }
function Uf(t, n, r, l, o, i, u, s, a) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    n.apply(r, c);
  } catch (m) {
    this.onError(m);
  }
}
var Ln = !1,
  Vr = null,
  Wr = !1,
  _o = null,
  $f = {
    onError: function (t) {
      (Ln = !0), (Vr = t);
    },
  };
function Bf(t, n, r, l, o, i, u, s, a) {
  (Ln = !1), (Vr = null), Uf.apply($f, arguments);
}
function Af(t, n, r, l, o, i, u, s, a) {
  if ((Bf.apply(this, arguments), Ln)) {
    if (Ln) {
      var c = Vr;
      (Ln = !1), (Vr = null);
    } else throw Error(x(198));
    Wr || ((Wr = !0), (_o = c));
  }
}
function Ft(t) {
  var n = t,
    r = t;
  if (t.alternate) for (; n.return; ) n = n.return;
  else {
    t = n;
    do (n = t), n.flags & 4098 && (r = n.return), (t = n.return);
    while (t);
  }
  return n.tag === 3 ? r : null;
}
function oa(t) {
  if (t.tag === 13) {
    var n = t.memoizedState;
    if (
      (n === null && ((t = t.alternate), t !== null && (n = t.memoizedState)),
      n !== null)
    )
      return n.dehydrated;
  }
  return null;
}
function gu(t) {
  if (Ft(t) !== t) throw Error(x(188));
}
function Vf(t) {
  var n = t.alternate;
  if (!n) {
    if (((n = Ft(t)), n === null)) throw Error(x(188));
    return n !== t ? null : t;
  }
  for (var r = t, l = n; ; ) {
    var o = r.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((l = o.return), l !== null)) {
        r = l;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === r) return gu(o), t;
        if (i === l) return gu(o), n;
        i = i.sibling;
      }
      throw Error(x(188));
    }
    if (r.return !== l.return) (r = o), (l = i);
    else {
      for (var u = !1, s = o.child; s; ) {
        if (s === r) {
          (u = !0), (r = o), (l = i);
          break;
        }
        if (s === l) {
          (u = !0), (l = o), (r = i);
          break;
        }
        s = s.sibling;
      }
      if (!u) {
        for (s = i.child; s; ) {
          if (s === r) {
            (u = !0), (r = i), (l = o);
            break;
          }
          if (s === l) {
            (u = !0), (l = i), (r = o);
            break;
          }
          s = s.sibling;
        }
        if (!u) throw Error(x(189));
      }
    }
    if (r.alternate !== l) throw Error(x(190));
  }
  if (r.tag !== 3) throw Error(x(188));
  return r.stateNode.current === r ? t : n;
}
function ia(t) {
  return (t = Vf(t)), t !== null ? ua(t) : null;
}
function ua(t) {
  if (t.tag === 5 || t.tag === 6) return t;
  for (t = t.child; t !== null; ) {
    var n = ua(t);
    if (n !== null) return n;
    t = t.sibling;
  }
  return null;
}
var sa = Se.unstable_scheduleCallback,
  yu = Se.unstable_cancelCallback,
  Wf = Se.unstable_shouldYield,
  Hf = Se.unstable_requestPaint,
  Y = Se.unstable_now,
  Qf = Se.unstable_getCurrentPriorityLevel,
  gi = Se.unstable_ImmediatePriority,
  aa = Se.unstable_UserBlockingPriority,
  Hr = Se.unstable_NormalPriority,
  Kf = Se.unstable_LowPriority,
  ca = Se.unstable_IdlePriority,
  ml = null,
  Be = null;
function Yf(t) {
  if (Be && typeof Be.onCommitFiberRoot == "function")
    try {
      Be.onCommitFiberRoot(ml, t, void 0, (t.current.flags & 128) === 128);
    } catch {}
}
var Ie = Math.clz32 ? Math.clz32 : Jf,
  Xf = Math.log,
  Gf = Math.LN2;
function Jf(t) {
  return (t >>>= 0), t === 0 ? 32 : (31 - ((Xf(t) / Gf) | 0)) | 0;
}
var mr = 64,
  vr = 4194304;
function jn(t) {
  switch (t & -t) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return t & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return t;
  }
}
function Qr(t, n) {
  var r = t.pendingLanes;
  if (r === 0) return 0;
  var l = 0,
    o = t.suspendedLanes,
    i = t.pingedLanes,
    u = r & 268435455;
  if (u !== 0) {
    var s = u & ~o;
    s !== 0 ? (l = jn(s)) : ((i &= u), i !== 0 && (l = jn(i)));
  } else (u = r & ~o), u !== 0 ? (l = jn(u)) : i !== 0 && (l = jn(i));
  if (l === 0) return 0;
  if (
    n !== 0 &&
    n !== l &&
    !(n & o) &&
    ((o = l & -l), (i = n & -n), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return n;
  if ((l & 4 && (l |= r & 16), (n = t.entangledLanes), n !== 0))
    for (t = t.entanglements, n &= l; 0 < n; )
      (r = 31 - Ie(n)), (o = 1 << r), (l |= t[r]), (n &= ~o);
  return l;
}
function Zf(t, n) {
  switch (t) {
    case 1:
    case 2:
    case 4:
      return n + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return n + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function qf(t, n) {
  for (
    var r = t.suspendedLanes,
      l = t.pingedLanes,
      o = t.expirationTimes,
      i = t.pendingLanes;
    0 < i;

  ) {
    var u = 31 - Ie(i),
      s = 1 << u,
      a = o[u];
    a === -1
      ? (!(s & r) || s & l) && (o[u] = Zf(s, n))
      : a <= n && (t.expiredLanes |= s),
      (i &= ~s);
  }
}
function Co(t) {
  return (
    (t = t.pendingLanes & -1073741825),
    t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
  );
}
function fa() {
  var t = mr;
  return (mr <<= 1), !(mr & 4194240) && (mr = 64), t;
}
function $l(t) {
  for (var n = [], r = 0; 31 > r; r++) n.push(t);
  return n;
}
function lr(t, n, r) {
  (t.pendingLanes |= n),
    n !== 536870912 && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
    (t = t.eventTimes),
    (n = 31 - Ie(n)),
    (t[n] = r);
}
function bf(t, n) {
  var r = t.pendingLanes & ~n;
  (t.pendingLanes = n),
    (t.suspendedLanes = 0),
    (t.pingedLanes = 0),
    (t.expiredLanes &= n),
    (t.mutableReadLanes &= n),
    (t.entangledLanes &= n),
    (n = t.entanglements);
  var l = t.eventTimes;
  for (t = t.expirationTimes; 0 < r; ) {
    var o = 31 - Ie(r),
      i = 1 << o;
    (n[o] = 0), (l[o] = -1), (t[o] = -1), (r &= ~i);
  }
}
function yi(t, n) {
  var r = (t.entangledLanes |= n);
  for (t = t.entanglements; r; ) {
    var l = 31 - Ie(r),
      o = 1 << l;
    (o & n) | (t[l] & n) && (t[l] |= n), (r &= ~o);
  }
}
var D = 0;
function da(t) {
  return (t &= -t), 1 < t ? (4 < t ? (t & 268435455 ? 16 : 536870912) : 4) : 1;
}
var pa,
  wi,
  ha,
  ma,
  va,
  No = !1,
  gr = [],
  ot = null,
  it = null,
  ut = null,
  Vn = new Map(),
  Wn = new Map(),
  tt = [],
  ed =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function wu(t, n) {
  switch (t) {
    case "focusin":
    case "focusout":
      ot = null;
      break;
    case "dragenter":
    case "dragleave":
      it = null;
      break;
    case "mouseover":
    case "mouseout":
      ut = null;
      break;
    case "pointerover":
    case "pointerout":
      Vn.delete(n.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Wn.delete(n.pointerId);
  }
}
function Sn(t, n, r, l, o, i) {
  return t === null || t.nativeEvent !== i
    ? ((t = {
        blockedOn: n,
        domEventName: r,
        eventSystemFlags: l,
        nativeEvent: i,
        targetContainers: [o],
      }),
      n !== null && ((n = ir(n)), n !== null && wi(n)),
      t)
    : ((t.eventSystemFlags |= l),
      (n = t.targetContainers),
      o !== null && n.indexOf(o) === -1 && n.push(o),
      t);
}
function td(t, n, r, l, o) {
  switch (n) {
    case "focusin":
      return (ot = Sn(ot, t, n, r, l, o)), !0;
    case "dragenter":
      return (it = Sn(it, t, n, r, l, o)), !0;
    case "mouseover":
      return (ut = Sn(ut, t, n, r, l, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return Vn.set(i, Sn(Vn.get(i) || null, t, n, r, l, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), Wn.set(i, Sn(Wn.get(i) || null, t, n, r, l, o)), !0
      );
  }
  return !1;
}
function ga(t) {
  var n = Nt(t.target);
  if (n !== null) {
    var r = Ft(n);
    if (r !== null) {
      if (((n = r.tag), n === 13)) {
        if (((n = oa(r)), n !== null)) {
          (t.blockedOn = n),
            va(t.priority, function () {
              ha(r);
            });
          return;
        }
      } else if (n === 3 && r.stateNode.current.memoizedState.isDehydrated) {
        t.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
        return;
      }
    }
  }
  t.blockedOn = null;
}
function Rr(t) {
  if (t.blockedOn !== null) return !1;
  for (var n = t.targetContainers; 0 < n.length; ) {
    var r = Po(t.domEventName, t.eventSystemFlags, n[0], t.nativeEvent);
    if (r === null) {
      r = t.nativeEvent;
      var l = new r.constructor(r.type, r);
      (ko = l), r.target.dispatchEvent(l), (ko = null);
    } else return (n = ir(r)), n !== null && wi(n), (t.blockedOn = r), !1;
    n.shift();
  }
  return !0;
}
function Su(t, n, r) {
  Rr(t) && r.delete(n);
}
function nd() {
  (No = !1),
    ot !== null && Rr(ot) && (ot = null),
    it !== null && Rr(it) && (it = null),
    ut !== null && Rr(ut) && (ut = null),
    Vn.forEach(Su),
    Wn.forEach(Su);
}
function kn(t, n) {
  t.blockedOn === n &&
    ((t.blockedOn = null),
    No ||
      ((No = !0),
      Se.unstable_scheduleCallback(Se.unstable_NormalPriority, nd)));
}
function Hn(t) {
  function n(o) {
    return kn(o, t);
  }
  if (0 < gr.length) {
    kn(gr[0], t);
    for (var r = 1; r < gr.length; r++) {
      var l = gr[r];
      l.blockedOn === t && (l.blockedOn = null);
    }
  }
  for (
    ot !== null && kn(ot, t),
      it !== null && kn(it, t),
      ut !== null && kn(ut, t),
      Vn.forEach(n),
      Wn.forEach(n),
      r = 0;
    r < tt.length;
    r++
  )
    (l = tt[r]), l.blockedOn === t && (l.blockedOn = null);
  for (; 0 < tt.length && ((r = tt[0]), r.blockedOn === null); )
    ga(r), r.blockedOn === null && tt.shift();
}
var tn = Ze.ReactCurrentBatchConfig,
  Kr = !0;
function rd(t, n, r, l) {
  var o = D,
    i = tn.transition;
  tn.transition = null;
  try {
    (D = 1), Si(t, n, r, l);
  } finally {
    (D = o), (tn.transition = i);
  }
}
function ld(t, n, r, l) {
  var o = D,
    i = tn.transition;
  tn.transition = null;
  try {
    (D = 4), Si(t, n, r, l);
  } finally {
    (D = o), (tn.transition = i);
  }
}
function Si(t, n, r, l) {
  if (Kr) {
    var o = Po(t, n, r, l);
    if (o === null) Gl(t, n, l, Yr, r), wu(t, l);
    else if (td(o, t, n, r, l)) l.stopPropagation();
    else if ((wu(t, l), n & 4 && -1 < ed.indexOf(t))) {
      for (; o !== null; ) {
        var i = ir(o);
        if (
          (i !== null && pa(i),
          (i = Po(t, n, r, l)),
          i === null && Gl(t, n, l, Yr, r),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && l.stopPropagation();
    } else Gl(t, n, l, null, r);
  }
}
var Yr = null;
function Po(t, n, r, l) {
  if (((Yr = null), (t = vi(l)), (t = Nt(t)), t !== null))
    if (((n = Ft(t)), n === null)) t = null;
    else if (((r = n.tag), r === 13)) {
      if (((t = oa(n)), t !== null)) return t;
      t = null;
    } else if (r === 3) {
      if (n.stateNode.current.memoizedState.isDehydrated)
        return n.tag === 3 ? n.stateNode.containerInfo : null;
      t = null;
    } else n !== t && (t = null);
  return (Yr = t), null;
}
function ya(t) {
  switch (t) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Qf()) {
        case gi:
          return 1;
        case aa:
          return 4;
        case Hr:
        case Kf:
          return 16;
        case ca:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var rt = null,
  ki = null,
  Lr = null;
function wa() {
  if (Lr) return Lr;
  var t,
    n = ki,
    r = n.length,
    l,
    o = "value" in rt ? rt.value : rt.textContent,
    i = o.length;
  for (t = 0; t < r && n[t] === o[t]; t++);
  var u = r - t;
  for (l = 1; l <= u && n[r - l] === o[i - l]; l++);
  return (Lr = o.slice(t, 1 < l ? 1 - l : void 0));
}
function zr(t) {
  var n = t.keyCode;
  return (
    "charCode" in t
      ? ((t = t.charCode), t === 0 && n === 13 && (t = 13))
      : (t = n),
    t === 10 && (t = 13),
    32 <= t || t === 13 ? t : 0
  );
}
function yr() {
  return !0;
}
function ku() {
  return !1;
}
function xe(t) {
  function n(r, l, o, i, u) {
    (this._reactName = r),
      (this._targetInst = o),
      (this.type = l),
      (this.nativeEvent = i),
      (this.target = u),
      (this.currentTarget = null);
    for (var s in t)
      t.hasOwnProperty(s) && ((r = t[s]), (this[s] = r ? r(i) : i[s]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? yr
        : ku),
      (this.isPropagationStopped = ku),
      this
    );
  }
  return (
    W(n.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var r = this.nativeEvent;
        r &&
          (r.preventDefault
            ? r.preventDefault()
            : typeof r.returnValue != "unknown" && (r.returnValue = !1),
          (this.isDefaultPrevented = yr));
      },
      stopPropagation: function () {
        var r = this.nativeEvent;
        r &&
          (r.stopPropagation
            ? r.stopPropagation()
            : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
          (this.isPropagationStopped = yr));
      },
      persist: function () {},
      isPersistent: yr,
    }),
    n
  );
}
var pn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  xi = xe(pn),
  or = W({}, pn, { view: 0, detail: 0 }),
  od = xe(or),
  Bl,
  Al,
  xn,
  vl = W({}, or, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ei,
    button: 0,
    buttons: 0,
    relatedTarget: function (t) {
      return t.relatedTarget === void 0
        ? t.fromElement === t.srcElement
          ? t.toElement
          : t.fromElement
        : t.relatedTarget;
    },
    movementX: function (t) {
      return "movementX" in t
        ? t.movementX
        : (t !== xn &&
            (xn && t.type === "mousemove"
              ? ((Bl = t.screenX - xn.screenX), (Al = t.screenY - xn.screenY))
              : (Al = Bl = 0),
            (xn = t)),
          Bl);
    },
    movementY: function (t) {
      return "movementY" in t ? t.movementY : Al;
    },
  }),
  xu = xe(vl),
  id = W({}, vl, { dataTransfer: 0 }),
  ud = xe(id),
  sd = W({}, or, { relatedTarget: 0 }),
  Vl = xe(sd),
  ad = W({}, pn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  cd = xe(ad),
  fd = W({}, pn, {
    clipboardData: function (t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    },
  }),
  dd = xe(fd),
  pd = W({}, pn, { data: 0 }),
  Eu = xe(pd),
  hd = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  md = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  vd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function gd(t) {
  var n = this.nativeEvent;
  return n.getModifierState ? n.getModifierState(t) : (t = vd[t]) ? !!n[t] : !1;
}
function Ei() {
  return gd;
}
var yd = W({}, or, {
    key: function (t) {
      if (t.key) {
        var n = hd[t.key] || t.key;
        if (n !== "Unidentified") return n;
      }
      return t.type === "keypress"
        ? ((t = zr(t)), t === 13 ? "Enter" : String.fromCharCode(t))
        : t.type === "keydown" || t.type === "keyup"
        ? md[t.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ei,
    charCode: function (t) {
      return t.type === "keypress" ? zr(t) : 0;
    },
    keyCode: function (t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function (t) {
      return t.type === "keypress"
        ? zr(t)
        : t.type === "keydown" || t.type === "keyup"
        ? t.keyCode
        : 0;
    },
  }),
  wd = xe(yd),
  Sd = W({}, vl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  _u = xe(Sd),
  kd = W({}, or, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ei,
  }),
  xd = xe(kd),
  Ed = W({}, pn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  _d = xe(Ed),
  Cd = W({}, vl, {
    deltaX: function (t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function (t) {
      return "deltaY" in t
        ? t.deltaY
        : "wheelDeltaY" in t
        ? -t.wheelDeltaY
        : "wheelDelta" in t
        ? -t.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Nd = xe(Cd),
  Pd = [9, 13, 27, 32],
  _i = Ye && "CompositionEvent" in window,
  zn = null;
Ye && "documentMode" in document && (zn = document.documentMode);
var jd = Ye && "TextEvent" in window && !zn,
  Sa = Ye && (!_i || (zn && 8 < zn && 11 >= zn)),
  Cu = " ",
  Nu = !1;
function ka(t, n) {
  switch (t) {
    case "keyup":
      return Pd.indexOf(n.keyCode) !== -1;
    case "keydown":
      return n.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function xa(t) {
  return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
}
var At = !1;
function Td(t, n) {
  switch (t) {
    case "compositionend":
      return xa(n);
    case "keypress":
      return n.which !== 32 ? null : ((Nu = !0), Cu);
    case "textInput":
      return (t = n.data), t === Cu && Nu ? null : t;
    default:
      return null;
  }
}
function Rd(t, n) {
  if (At)
    return t === "compositionend" || (!_i && ka(t, n))
      ? ((t = wa()), (Lr = ki = rt = null), (At = !1), t)
      : null;
  switch (t) {
    case "paste":
      return null;
    case "keypress":
      if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
        if (n.char && 1 < n.char.length) return n.char;
        if (n.which) return String.fromCharCode(n.which);
      }
      return null;
    case "compositionend":
      return Sa && n.locale !== "ko" ? null : n.data;
    default:
      return null;
  }
}
var Ld = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Pu(t) {
  var n = t && t.nodeName && t.nodeName.toLowerCase();
  return n === "input" ? !!Ld[t.type] : n === "textarea";
}
function Ea(t, n, r, l) {
  ea(l),
    (n = Xr(n, "onChange")),
    0 < n.length &&
      ((r = new xi("onChange", "change", null, r, l)),
      t.push({ event: r, listeners: n }));
}
var On = null,
  Qn = null;
function zd(t) {
  Ia(t, 0);
}
function gl(t) {
  var n = Ht(t);
  if (Ys(n)) return t;
}
function Od(t, n) {
  if (t === "change") return n;
}
var _a = !1;
if (Ye) {
  var Wl;
  if (Ye) {
    var Hl = "oninput" in document;
    if (!Hl) {
      var ju = document.createElement("div");
      ju.setAttribute("oninput", "return;"),
        (Hl = typeof ju.oninput == "function");
    }
    Wl = Hl;
  } else Wl = !1;
  _a = Wl && (!document.documentMode || 9 < document.documentMode);
}
function Tu() {
  On && (On.detachEvent("onpropertychange", Ca), (Qn = On = null));
}
function Ca(t) {
  if (t.propertyName === "value" && gl(Qn)) {
    var n = [];
    Ea(n, Qn, t, vi(t)), la(zd, n);
  }
}
function Id(t, n, r) {
  t === "focusin"
    ? (Tu(), (On = n), (Qn = r), On.attachEvent("onpropertychange", Ca))
    : t === "focusout" && Tu();
}
function Md(t) {
  if (t === "selectionchange" || t === "keyup" || t === "keydown")
    return gl(Qn);
}
function Dd(t, n) {
  if (t === "click") return gl(n);
}
function Fd(t, n) {
  if (t === "input" || t === "change") return gl(n);
}
function Ud(t, n) {
  return (t === n && (t !== 0 || 1 / t === 1 / n)) || (t !== t && n !== n);
}
var De = typeof Object.is == "function" ? Object.is : Ud;
function Kn(t, n) {
  if (De(t, n)) return !0;
  if (typeof t != "object" || t === null || typeof n != "object" || n === null)
    return !1;
  var r = Object.keys(t),
    l = Object.keys(n);
  if (r.length !== l.length) return !1;
  for (l = 0; l < r.length; l++) {
    var o = r[l];
    if (!so.call(n, o) || !De(t[o], n[o])) return !1;
  }
  return !0;
}
function Ru(t) {
  for (; t && t.firstChild; ) t = t.firstChild;
  return t;
}
function Lu(t, n) {
  var r = Ru(t);
  t = 0;
  for (var l; r; ) {
    if (r.nodeType === 3) {
      if (((l = t + r.textContent.length), t <= n && l >= n))
        return { node: r, offset: n - t };
      t = l;
    }
    e: {
      for (; r; ) {
        if (r.nextSibling) {
          r = r.nextSibling;
          break e;
        }
        r = r.parentNode;
      }
      r = void 0;
    }
    r = Ru(r);
  }
}
function Na(t, n) {
  return t && n
    ? t === n
      ? !0
      : t && t.nodeType === 3
      ? !1
      : n && n.nodeType === 3
      ? Na(t, n.parentNode)
      : "contains" in t
      ? t.contains(n)
      : t.compareDocumentPosition
      ? !!(t.compareDocumentPosition(n) & 16)
      : !1
    : !1;
}
function Pa() {
  for (var t = window, n = Ar(); n instanceof t.HTMLIFrameElement; ) {
    try {
      var r = typeof n.contentWindow.location.href == "string";
    } catch {
      r = !1;
    }
    if (r) t = n.contentWindow;
    else break;
    n = Ar(t.document);
  }
  return n;
}
function Ci(t) {
  var n = t && t.nodeName && t.nodeName.toLowerCase();
  return (
    n &&
    ((n === "input" &&
      (t.type === "text" ||
        t.type === "search" ||
        t.type === "tel" ||
        t.type === "url" ||
        t.type === "password")) ||
      n === "textarea" ||
      t.contentEditable === "true")
  );
}
function $d(t) {
  var n = Pa(),
    r = t.focusedElem,
    l = t.selectionRange;
  if (
    n !== r &&
    r &&
    r.ownerDocument &&
    Na(r.ownerDocument.documentElement, r)
  ) {
    if (l !== null && Ci(r)) {
      if (
        ((n = l.start),
        (t = l.end),
        t === void 0 && (t = n),
        "selectionStart" in r)
      )
        (r.selectionStart = n), (r.selectionEnd = Math.min(t, r.value.length));
      else if (
        ((t = ((n = r.ownerDocument || document) && n.defaultView) || window),
        t.getSelection)
      ) {
        t = t.getSelection();
        var o = r.textContent.length,
          i = Math.min(l.start, o);
        (l = l.end === void 0 ? i : Math.min(l.end, o)),
          !t.extend && i > l && ((o = l), (l = i), (i = o)),
          (o = Lu(r, i));
        var u = Lu(r, l);
        o &&
          u &&
          (t.rangeCount !== 1 ||
            t.anchorNode !== o.node ||
            t.anchorOffset !== o.offset ||
            t.focusNode !== u.node ||
            t.focusOffset !== u.offset) &&
          ((n = n.createRange()),
          n.setStart(o.node, o.offset),
          t.removeAllRanges(),
          i > l
            ? (t.addRange(n), t.extend(u.node, u.offset))
            : (n.setEnd(u.node, u.offset), t.addRange(n)));
      }
    }
    for (n = [], t = r; (t = t.parentNode); )
      t.nodeType === 1 &&
        n.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
    for (typeof r.focus == "function" && r.focus(), r = 0; r < n.length; r++)
      (t = n[r]),
        (t.element.scrollLeft = t.left),
        (t.element.scrollTop = t.top);
  }
}
var Bd = Ye && "documentMode" in document && 11 >= document.documentMode,
  Vt = null,
  jo = null,
  In = null,
  To = !1;
function zu(t, n, r) {
  var l = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  To ||
    Vt == null ||
    Vt !== Ar(l) ||
    ((l = Vt),
    "selectionStart" in l && Ci(l)
      ? (l = { start: l.selectionStart, end: l.selectionEnd })
      : ((l = (
          (l.ownerDocument && l.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (l = {
          anchorNode: l.anchorNode,
          anchorOffset: l.anchorOffset,
          focusNode: l.focusNode,
          focusOffset: l.focusOffset,
        })),
    (In && Kn(In, l)) ||
      ((In = l),
      (l = Xr(jo, "onSelect")),
      0 < l.length &&
        ((n = new xi("onSelect", "select", null, n, r)),
        t.push({ event: n, listeners: l }),
        (n.target = Vt))));
}
function wr(t, n) {
  var r = {};
  return (
    (r[t.toLowerCase()] = n.toLowerCase()),
    (r["Webkit" + t] = "webkit" + n),
    (r["Moz" + t] = "moz" + n),
    r
  );
}
var Wt = {
    animationend: wr("Animation", "AnimationEnd"),
    animationiteration: wr("Animation", "AnimationIteration"),
    animationstart: wr("Animation", "AnimationStart"),
    transitionend: wr("Transition", "TransitionEnd"),
  },
  Ql = {},
  ja = {};
Ye &&
  ((ja = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Wt.animationend.animation,
    delete Wt.animationiteration.animation,
    delete Wt.animationstart.animation),
  "TransitionEvent" in window || delete Wt.transitionend.transition);
function yl(t) {
  if (Ql[t]) return Ql[t];
  if (!Wt[t]) return t;
  var n = Wt[t],
    r;
  for (r in n) if (n.hasOwnProperty(r) && r in ja) return (Ql[t] = n[r]);
  return t;
}
var Ta = yl("animationend"),
  Ra = yl("animationiteration"),
  La = yl("animationstart"),
  za = yl("transitionend"),
  Oa = new Map(),
  Ou =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function vt(t, n) {
  Oa.set(t, n), Dt(n, [t]);
}
for (var Kl = 0; Kl < Ou.length; Kl++) {
  var Yl = Ou[Kl],
    Ad = Yl.toLowerCase(),
    Vd = Yl[0].toUpperCase() + Yl.slice(1);
  vt(Ad, "on" + Vd);
}
vt(Ta, "onAnimationEnd");
vt(Ra, "onAnimationIteration");
vt(La, "onAnimationStart");
vt("dblclick", "onDoubleClick");
vt("focusin", "onFocus");
vt("focusout", "onBlur");
vt(za, "onTransitionEnd");
ln("onMouseEnter", ["mouseout", "mouseover"]);
ln("onMouseLeave", ["mouseout", "mouseover"]);
ln("onPointerEnter", ["pointerout", "pointerover"]);
ln("onPointerLeave", ["pointerout", "pointerover"]);
Dt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Dt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Dt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Dt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Dt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Dt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Tn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Wd = new Set("cancel close invalid load scroll toggle".split(" ").concat(Tn));
function Iu(t, n, r) {
  var l = t.type || "unknown-event";
  (t.currentTarget = r), Af(l, n, void 0, t), (t.currentTarget = null);
}
function Ia(t, n) {
  n = (n & 4) !== 0;
  for (var r = 0; r < t.length; r++) {
    var l = t[r],
      o = l.event;
    l = l.listeners;
    e: {
      var i = void 0;
      if (n)
        for (var u = l.length - 1; 0 <= u; u--) {
          var s = l[u],
            a = s.instance,
            c = s.currentTarget;
          if (((s = s.listener), a !== i && o.isPropagationStopped())) break e;
          Iu(o, s, c), (i = a);
        }
      else
        for (u = 0; u < l.length; u++) {
          if (
            ((s = l[u]),
            (a = s.instance),
            (c = s.currentTarget),
            (s = s.listener),
            a !== i && o.isPropagationStopped())
          )
            break e;
          Iu(o, s, c), (i = a);
        }
    }
  }
  if (Wr) throw ((t = _o), (Wr = !1), (_o = null), t);
}
function U(t, n) {
  var r = n[Io];
  r === void 0 && (r = n[Io] = new Set());
  var l = t + "__bubble";
  r.has(l) || (Ma(n, t, 2, !1), r.add(l));
}
function Xl(t, n, r) {
  var l = 0;
  n && (l |= 4), Ma(r, t, l, n);
}
var Sr = "_reactListening" + Math.random().toString(36).slice(2);
function Yn(t) {
  if (!t[Sr]) {
    (t[Sr] = !0),
      Vs.forEach(function (r) {
        r !== "selectionchange" && (Wd.has(r) || Xl(r, !1, t), Xl(r, !0, t));
      });
    var n = t.nodeType === 9 ? t : t.ownerDocument;
    n === null || n[Sr] || ((n[Sr] = !0), Xl("selectionchange", !1, n));
  }
}
function Ma(t, n, r, l) {
  switch (ya(n)) {
    case 1:
      var o = rd;
      break;
    case 4:
      o = ld;
      break;
    default:
      o = Si;
  }
  (r = o.bind(null, n, r, t)),
    (o = void 0),
    !Eo ||
      (n !== "touchstart" && n !== "touchmove" && n !== "wheel") ||
      (o = !0),
    l
      ? o !== void 0
        ? t.addEventListener(n, r, { capture: !0, passive: o })
        : t.addEventListener(n, r, !0)
      : o !== void 0
      ? t.addEventListener(n, r, { passive: o })
      : t.addEventListener(n, r, !1);
}
function Gl(t, n, r, l, o) {
  var i = l;
  if (!(n & 1) && !(n & 2) && l !== null)
    e: for (;;) {
      if (l === null) return;
      var u = l.tag;
      if (u === 3 || u === 4) {
        var s = l.stateNode.containerInfo;
        if (s === o || (s.nodeType === 8 && s.parentNode === o)) break;
        if (u === 4)
          for (u = l.return; u !== null; ) {
            var a = u.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = u.stateNode.containerInfo),
              a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return;
            u = u.return;
          }
        for (; s !== null; ) {
          if (((u = Nt(s)), u === null)) return;
          if (((a = u.tag), a === 5 || a === 6)) {
            l = i = u;
            continue e;
          }
          s = s.parentNode;
        }
      }
      l = l.return;
    }
  la(function () {
    var c = i,
      m = vi(r),
      h = [];
    e: {
      var v = Oa.get(t);
      if (v !== void 0) {
        var w = xi,
          S = t;
        switch (t) {
          case "keypress":
            if (zr(r) === 0) break e;
          case "keydown":
          case "keyup":
            w = wd;
            break;
          case "focusin":
            (S = "focus"), (w = Vl);
            break;
          case "focusout":
            (S = "blur"), (w = Vl);
            break;
          case "beforeblur":
          case "afterblur":
            w = Vl;
            break;
          case "click":
            if (r.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            w = xu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = ud;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = xd;
            break;
          case Ta:
          case Ra:
          case La:
            w = cd;
            break;
          case za:
            w = _d;
            break;
          case "scroll":
            w = od;
            break;
          case "wheel":
            w = Nd;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = dd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = _u;
        }
        var k = (n & 4) !== 0,
          C = !k && t === "scroll",
          d = k ? (v !== null ? v + "Capture" : null) : v;
        k = [];
        for (var f = c, p; f !== null; ) {
          p = f;
          var g = p.stateNode;
          if (
            (p.tag === 5 &&
              g !== null &&
              ((p = g),
              d !== null && ((g = An(f, d)), g != null && k.push(Xn(f, g, p)))),
            C)
          )
            break;
          f = f.return;
        }
        0 < k.length &&
          ((v = new w(v, S, null, r, m)), h.push({ event: v, listeners: k }));
      }
    }
    if (!(n & 7)) {
      e: {
        if (
          ((v = t === "mouseover" || t === "pointerover"),
          (w = t === "mouseout" || t === "pointerout"),
          v &&
            r !== ko &&
            (S = r.relatedTarget || r.fromElement) &&
            (Nt(S) || S[Xe]))
        )
          break e;
        if (
          (w || v) &&
          ((v =
            m.window === m
              ? m
              : (v = m.ownerDocument)
              ? v.defaultView || v.parentWindow
              : window),
          w
            ? ((S = r.relatedTarget || r.toElement),
              (w = c),
              (S = S ? Nt(S) : null),
              S !== null &&
                ((C = Ft(S)), S !== C || (S.tag !== 5 && S.tag !== 6)) &&
                (S = null))
            : ((w = null), (S = c)),
          w !== S)
        ) {
          if (
            ((k = xu),
            (g = "onMouseLeave"),
            (d = "onMouseEnter"),
            (f = "mouse"),
            (t === "pointerout" || t === "pointerover") &&
              ((k = _u),
              (g = "onPointerLeave"),
              (d = "onPointerEnter"),
              (f = "pointer")),
            (C = w == null ? v : Ht(w)),
            (p = S == null ? v : Ht(S)),
            (v = new k(g, f + "leave", w, r, m)),
            (v.target = C),
            (v.relatedTarget = p),
            (g = null),
            Nt(m) === c &&
              ((k = new k(d, f + "enter", S, r, m)),
              (k.target = p),
              (k.relatedTarget = C),
              (g = k)),
            (C = g),
            w && S)
          )
            t: {
              for (k = w, d = S, f = 0, p = k; p; p = Ut(p)) f++;
              for (p = 0, g = d; g; g = Ut(g)) p++;
              for (; 0 < f - p; ) (k = Ut(k)), f--;
              for (; 0 < p - f; ) (d = Ut(d)), p--;
              for (; f--; ) {
                if (k === d || (d !== null && k === d.alternate)) break t;
                (k = Ut(k)), (d = Ut(d));
              }
              k = null;
            }
          else k = null;
          w !== null && Mu(h, v, w, k, !1),
            S !== null && C !== null && Mu(h, C, S, k, !0);
        }
      }
      e: {
        if (
          ((v = c ? Ht(c) : window),
          (w = v.nodeName && v.nodeName.toLowerCase()),
          w === "select" || (w === "input" && v.type === "file"))
        )
          var E = Od;
        else if (Pu(v))
          if (_a) E = Fd;
          else {
            E = Md;
            var j = Id;
          }
        else
          (w = v.nodeName) &&
            w.toLowerCase() === "input" &&
            (v.type === "checkbox" || v.type === "radio") &&
            (E = Dd);
        if (E && (E = E(t, c))) {
          Ea(h, E, r, m);
          break e;
        }
        j && j(t, v, c),
          t === "focusout" &&
            (j = v._wrapperState) &&
            j.controlled &&
            v.type === "number" &&
            vo(v, "number", v.value);
      }
      switch (((j = c ? Ht(c) : window), t)) {
        case "focusin":
          (Pu(j) || j.contentEditable === "true") &&
            ((Vt = j), (jo = c), (In = null));
          break;
        case "focusout":
          In = jo = Vt = null;
          break;
        case "mousedown":
          To = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (To = !1), zu(h, r, m);
          break;
        case "selectionchange":
          if (Bd) break;
        case "keydown":
        case "keyup":
          zu(h, r, m);
      }
      var T;
      if (_i)
        e: {
          switch (t) {
            case "compositionstart":
              var R = "onCompositionStart";
              break e;
            case "compositionend":
              R = "onCompositionEnd";
              break e;
            case "compositionupdate":
              R = "onCompositionUpdate";
              break e;
          }
          R = void 0;
        }
      else
        At
          ? ka(t, r) && (R = "onCompositionEnd")
          : t === "keydown" && r.keyCode === 229 && (R = "onCompositionStart");
      R &&
        (Sa &&
          r.locale !== "ko" &&
          (At || R !== "onCompositionStart"
            ? R === "onCompositionEnd" && At && (T = wa())
            : ((rt = m),
              (ki = "value" in rt ? rt.value : rt.textContent),
              (At = !0))),
        (j = Xr(c, R)),
        0 < j.length &&
          ((R = new Eu(R, t, null, r, m)),
          h.push({ event: R, listeners: j }),
          T ? (R.data = T) : ((T = xa(r)), T !== null && (R.data = T)))),
        (T = jd ? Td(t, r) : Rd(t, r)) &&
          ((c = Xr(c, "onBeforeInput")),
          0 < c.length &&
            ((m = new Eu("onBeforeInput", "beforeinput", null, r, m)),
            h.push({ event: m, listeners: c }),
            (m.data = T)));
    }
    Ia(h, n);
  });
}
function Xn(t, n, r) {
  return { instance: t, listener: n, currentTarget: r };
}
function Xr(t, n) {
  for (var r = n + "Capture", l = []; t !== null; ) {
    var o = t,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = An(t, r)),
      i != null && l.unshift(Xn(t, i, o)),
      (i = An(t, n)),
      i != null && l.push(Xn(t, i, o))),
      (t = t.return);
  }
  return l;
}
function Ut(t) {
  if (t === null) return null;
  do t = t.return;
  while (t && t.tag !== 5);
  return t || null;
}
function Mu(t, n, r, l, o) {
  for (var i = n._reactName, u = []; r !== null && r !== l; ) {
    var s = r,
      a = s.alternate,
      c = s.stateNode;
    if (a !== null && a === l) break;
    s.tag === 5 &&
      c !== null &&
      ((s = c),
      o
        ? ((a = An(r, i)), a != null && u.unshift(Xn(r, a, s)))
        : o || ((a = An(r, i)), a != null && u.push(Xn(r, a, s)))),
      (r = r.return);
  }
  u.length !== 0 && t.push({ event: n, listeners: u });
}
var Hd = /\r\n?/g,
  Qd = /\u0000|\uFFFD/g;
function Du(t) {
  return (typeof t == "string" ? t : "" + t)
    .replace(
      Hd,
      `
`
    )
    .replace(Qd, "");
}
function kr(t, n, r) {
  if (((n = Du(n)), Du(t) !== n && r)) throw Error(x(425));
}
function Gr() {}
var Ro = null,
  Lo = null;
function zo(t, n) {
  return (
    t === "textarea" ||
    t === "noscript" ||
    typeof n.children == "string" ||
    typeof n.children == "number" ||
    (typeof n.dangerouslySetInnerHTML == "object" &&
      n.dangerouslySetInnerHTML !== null &&
      n.dangerouslySetInnerHTML.__html != null)
  );
}
var Oo = typeof setTimeout == "function" ? setTimeout : void 0,
  Kd = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Fu = typeof Promise == "function" ? Promise : void 0,
  Yd =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Fu < "u"
      ? function (t) {
          return Fu.resolve(null).then(t).catch(Xd);
        }
      : Oo;
function Xd(t) {
  setTimeout(function () {
    throw t;
  });
}
function Jl(t, n) {
  var r = n,
    l = 0;
  do {
    var o = r.nextSibling;
    if ((t.removeChild(r), o && o.nodeType === 8))
      if (((r = o.data), r === "/$")) {
        if (l === 0) {
          t.removeChild(o), Hn(n);
          return;
        }
        l--;
      } else (r !== "$" && r !== "$?" && r !== "$!") || l++;
    r = o;
  } while (r);
  Hn(n);
}
function st(t) {
  for (; t != null; t = t.nextSibling) {
    var n = t.nodeType;
    if (n === 1 || n === 3) break;
    if (n === 8) {
      if (((n = t.data), n === "$" || n === "$!" || n === "$?")) break;
      if (n === "/$") return null;
    }
  }
  return t;
}
function Uu(t) {
  t = t.previousSibling;
  for (var n = 0; t; ) {
    if (t.nodeType === 8) {
      var r = t.data;
      if (r === "$" || r === "$!" || r === "$?") {
        if (n === 0) return t;
        n--;
      } else r === "/$" && n++;
    }
    t = t.previousSibling;
  }
  return null;
}
var hn = Math.random().toString(36).slice(2),
  $e = "__reactFiber$" + hn,
  Gn = "__reactProps$" + hn,
  Xe = "__reactContainer$" + hn,
  Io = "__reactEvents$" + hn,
  Gd = "__reactListeners$" + hn,
  Jd = "__reactHandles$" + hn;
function Nt(t) {
  var n = t[$e];
  if (n) return n;
  for (var r = t.parentNode; r; ) {
    if ((n = r[Xe] || r[$e])) {
      if (
        ((r = n.alternate),
        n.child !== null || (r !== null && r.child !== null))
      )
        for (t = Uu(t); t !== null; ) {
          if ((r = t[$e])) return r;
          t = Uu(t);
        }
      return n;
    }
    (t = r), (r = t.parentNode);
  }
  return null;
}
function ir(t) {
  return (
    (t = t[$e] || t[Xe]),
    !t || (t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3) ? null : t
  );
}
function Ht(t) {
  if (t.tag === 5 || t.tag === 6) return t.stateNode;
  throw Error(x(33));
}
function wl(t) {
  return t[Gn] || null;
}
var Mo = [],
  Qt = -1;
function gt(t) {
  return { current: t };
}
function $(t) {
  0 > Qt || ((t.current = Mo[Qt]), (Mo[Qt] = null), Qt--);
}
function F(t, n) {
  Qt++, (Mo[Qt] = t.current), (t.current = n);
}
var mt = {},
  ue = gt(mt),
  he = gt(!1),
  Lt = mt;
function on(t, n) {
  var r = t.type.contextTypes;
  if (!r) return mt;
  var l = t.stateNode;
  if (l && l.__reactInternalMemoizedUnmaskedChildContext === n)
    return l.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in r) o[i] = n[i];
  return (
    l &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = n),
      (t.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function me(t) {
  return (t = t.childContextTypes), t != null;
}
function Jr() {
  $(he), $(ue);
}
function $u(t, n, r) {
  if (ue.current !== mt) throw Error(x(168));
  F(ue, n), F(he, r);
}
function Da(t, n, r) {
  var l = t.stateNode;
  if (((n = n.childContextTypes), typeof l.getChildContext != "function"))
    return r;
  l = l.getChildContext();
  for (var o in l) if (!(o in n)) throw Error(x(108, If(t) || "Unknown", o));
  return W({}, r, l);
}
function Zr(t) {
  return (
    (t =
      ((t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext) || mt),
    (Lt = ue.current),
    F(ue, t),
    F(he, he.current),
    !0
  );
}
function Bu(t, n, r) {
  var l = t.stateNode;
  if (!l) throw Error(x(169));
  r
    ? ((t = Da(t, n, Lt)),
      (l.__reactInternalMemoizedMergedChildContext = t),
      $(he),
      $(ue),
      F(ue, t))
    : $(he),
    F(he, r);
}
var We = null,
  Sl = !1,
  Zl = !1;
function Fa(t) {
  We === null ? (We = [t]) : We.push(t);
}
function Zd(t) {
  (Sl = !0), Fa(t);
}
function yt() {
  if (!Zl && We !== null) {
    Zl = !0;
    var t = 0,
      n = D;
    try {
      var r = We;
      for (D = 1; t < r.length; t++) {
        var l = r[t];
        do l = l(!0);
        while (l !== null);
      }
      (We = null), (Sl = !1);
    } catch (o) {
      throw (We !== null && (We = We.slice(t + 1)), sa(gi, yt), o);
    } finally {
      (D = n), (Zl = !1);
    }
  }
  return null;
}
var Kt = [],
  Yt = 0,
  qr = null,
  br = 0,
  Ee = [],
  _e = 0,
  zt = null,
  He = 1,
  Qe = "";
function _t(t, n) {
  (Kt[Yt++] = br), (Kt[Yt++] = qr), (qr = t), (br = n);
}
function Ua(t, n, r) {
  (Ee[_e++] = He), (Ee[_e++] = Qe), (Ee[_e++] = zt), (zt = t);
  var l = He;
  t = Qe;
  var o = 32 - Ie(l) - 1;
  (l &= ~(1 << o)), (r += 1);
  var i = 32 - Ie(n) + o;
  if (30 < i) {
    var u = o - (o % 5);
    (i = (l & ((1 << u) - 1)).toString(32)),
      (l >>= u),
      (o -= u),
      (He = (1 << (32 - Ie(n) + o)) | (r << o) | l),
      (Qe = i + t);
  } else (He = (1 << i) | (r << o) | l), (Qe = t);
}
function Ni(t) {
  t.return !== null && (_t(t, 1), Ua(t, 1, 0));
}
function Pi(t) {
  for (; t === qr; )
    (qr = Kt[--Yt]), (Kt[Yt] = null), (br = Kt[--Yt]), (Kt[Yt] = null);
  for (; t === zt; )
    (zt = Ee[--_e]),
      (Ee[_e] = null),
      (Qe = Ee[--_e]),
      (Ee[_e] = null),
      (He = Ee[--_e]),
      (Ee[_e] = null);
}
var we = null,
  ye = null,
  B = !1,
  Oe = null;
function $a(t, n) {
  var r = Ce(5, null, null, 0);
  (r.elementType = "DELETED"),
    (r.stateNode = n),
    (r.return = t),
    (n = t.deletions),
    n === null ? ((t.deletions = [r]), (t.flags |= 16)) : n.push(r);
}
function Au(t, n) {
  switch (t.tag) {
    case 5:
      var r = t.type;
      return (
        (n =
          n.nodeType !== 1 || r.toLowerCase() !== n.nodeName.toLowerCase()
            ? null
            : n),
        n !== null
          ? ((t.stateNode = n), (we = t), (ye = st(n.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (n = t.pendingProps === "" || n.nodeType !== 3 ? null : n),
        n !== null ? ((t.stateNode = n), (we = t), (ye = null), !0) : !1
      );
    case 13:
      return (
        (n = n.nodeType !== 8 ? null : n),
        n !== null
          ? ((r = zt !== null ? { id: He, overflow: Qe } : null),
            (t.memoizedState = {
              dehydrated: n,
              treeContext: r,
              retryLane: 1073741824,
            }),
            (r = Ce(18, null, null, 0)),
            (r.stateNode = n),
            (r.return = t),
            (t.child = r),
            (we = t),
            (ye = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Do(t) {
  return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
}
function Fo(t) {
  if (B) {
    var n = ye;
    if (n) {
      var r = n;
      if (!Au(t, n)) {
        if (Do(t)) throw Error(x(418));
        n = st(r.nextSibling);
        var l = we;
        n && Au(t, n)
          ? $a(l, r)
          : ((t.flags = (t.flags & -4097) | 2), (B = !1), (we = t));
      }
    } else {
      if (Do(t)) throw Error(x(418));
      (t.flags = (t.flags & -4097) | 2), (B = !1), (we = t);
    }
  }
}
function Vu(t) {
  for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
    t = t.return;
  we = t;
}
function xr(t) {
  if (t !== we) return !1;
  if (!B) return Vu(t), (B = !0), !1;
  var n;
  if (
    ((n = t.tag !== 3) &&
      !(n = t.tag !== 5) &&
      ((n = t.type),
      (n = n !== "head" && n !== "body" && !zo(t.type, t.memoizedProps))),
    n && (n = ye))
  ) {
    if (Do(t)) throw (Ba(), Error(x(418)));
    for (; n; ) $a(t, n), (n = st(n.nextSibling));
  }
  if ((Vu(t), t.tag === 13)) {
    if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
      throw Error(x(317));
    e: {
      for (t = t.nextSibling, n = 0; t; ) {
        if (t.nodeType === 8) {
          var r = t.data;
          if (r === "/$") {
            if (n === 0) {
              ye = st(t.nextSibling);
              break e;
            }
            n--;
          } else (r !== "$" && r !== "$!" && r !== "$?") || n++;
        }
        t = t.nextSibling;
      }
      ye = null;
    }
  } else ye = we ? st(t.stateNode.nextSibling) : null;
  return !0;
}
function Ba() {
  for (var t = ye; t; ) t = st(t.nextSibling);
}
function un() {
  (ye = we = null), (B = !1);
}
function ji(t) {
  Oe === null ? (Oe = [t]) : Oe.push(t);
}
var qd = Ze.ReactCurrentBatchConfig;
function En(t, n, r) {
  if (
    ((t = r.ref), t !== null && typeof t != "function" && typeof t != "object")
  ) {
    if (r._owner) {
      if (((r = r._owner), r)) {
        if (r.tag !== 1) throw Error(x(309));
        var l = r.stateNode;
      }
      if (!l) throw Error(x(147, t));
      var o = l,
        i = "" + t;
      return n !== null &&
        n.ref !== null &&
        typeof n.ref == "function" &&
        n.ref._stringRef === i
        ? n.ref
        : ((n = function (u) {
            var s = o.refs;
            u === null ? delete s[i] : (s[i] = u);
          }),
          (n._stringRef = i),
          n);
    }
    if (typeof t != "string") throw Error(x(284));
    if (!r._owner) throw Error(x(290, t));
  }
  return t;
}
function Er(t, n) {
  throw (
    ((t = Object.prototype.toString.call(n)),
    Error(
      x(
        31,
        t === "[object Object]"
          ? "object with keys {" + Object.keys(n).join(", ") + "}"
          : t
      )
    ))
  );
}
function Wu(t) {
  var n = t._init;
  return n(t._payload);
}
function Aa(t) {
  function n(d, f) {
    if (t) {
      var p = d.deletions;
      p === null ? ((d.deletions = [f]), (d.flags |= 16)) : p.push(f);
    }
  }
  function r(d, f) {
    if (!t) return null;
    for (; f !== null; ) n(d, f), (f = f.sibling);
    return null;
  }
  function l(d, f) {
    for (d = new Map(); f !== null; )
      f.key !== null ? d.set(f.key, f) : d.set(f.index, f), (f = f.sibling);
    return d;
  }
  function o(d, f) {
    return (d = dt(d, f)), (d.index = 0), (d.sibling = null), d;
  }
  function i(d, f, p) {
    return (
      (d.index = p),
      t
        ? ((p = d.alternate),
          p !== null
            ? ((p = p.index), p < f ? ((d.flags |= 2), f) : p)
            : ((d.flags |= 2), f))
        : ((d.flags |= 1048576), f)
    );
  }
  function u(d) {
    return t && d.alternate === null && (d.flags |= 2), d;
  }
  function s(d, f, p, g) {
    return f === null || f.tag !== 6
      ? ((f = lo(p, d.mode, g)), (f.return = d), f)
      : ((f = o(f, p)), (f.return = d), f);
  }
  function a(d, f, p, g) {
    var E = p.type;
    return E === Bt
      ? m(d, f, p.props.children, g, p.key)
      : f !== null &&
        (f.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === be &&
            Wu(E) === f.type))
      ? ((g = o(f, p.props)), (g.ref = En(d, f, p)), (g.return = d), g)
      : ((g = $r(p.type, p.key, p.props, null, d.mode, g)),
        (g.ref = En(d, f, p)),
        (g.return = d),
        g);
  }
  function c(d, f, p, g) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== p.containerInfo ||
      f.stateNode.implementation !== p.implementation
      ? ((f = oo(p, d.mode, g)), (f.return = d), f)
      : ((f = o(f, p.children || [])), (f.return = d), f);
  }
  function m(d, f, p, g, E) {
    return f === null || f.tag !== 7
      ? ((f = Rt(p, d.mode, g, E)), (f.return = d), f)
      : ((f = o(f, p)), (f.return = d), f);
  }
  function h(d, f, p) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = lo("" + f, d.mode, p)), (f.return = d), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case dr:
          return (
            (p = $r(f.type, f.key, f.props, null, d.mode, p)),
            (p.ref = En(d, null, f)),
            (p.return = d),
            p
          );
        case $t:
          return (f = oo(f, d.mode, p)), (f.return = d), f;
        case be:
          var g = f._init;
          return h(d, g(f._payload), p);
      }
      if (Pn(f) || yn(f))
        return (f = Rt(f, d.mode, p, null)), (f.return = d), f;
      Er(d, f);
    }
    return null;
  }
  function v(d, f, p, g) {
    var E = f !== null ? f.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return E !== null ? null : s(d, f, "" + p, g);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case dr:
          return p.key === E ? a(d, f, p, g) : null;
        case $t:
          return p.key === E ? c(d, f, p, g) : null;
        case be:
          return (E = p._init), v(d, f, E(p._payload), g);
      }
      if (Pn(p) || yn(p)) return E !== null ? null : m(d, f, p, g, null);
      Er(d, p);
    }
    return null;
  }
  function w(d, f, p, g, E) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (d = d.get(p) || null), s(f, d, "" + g, E);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case dr:
          return (d = d.get(g.key === null ? p : g.key) || null), a(f, d, g, E);
        case $t:
          return (d = d.get(g.key === null ? p : g.key) || null), c(f, d, g, E);
        case be:
          var j = g._init;
          return w(d, f, p, j(g._payload), E);
      }
      if (Pn(g) || yn(g)) return (d = d.get(p) || null), m(f, d, g, E, null);
      Er(f, g);
    }
    return null;
  }
  function S(d, f, p, g) {
    for (
      var E = null, j = null, T = f, R = (f = 0), Q = null;
      T !== null && R < p.length;
      R++
    ) {
      T.index > R ? ((Q = T), (T = null)) : (Q = T.sibling);
      var I = v(d, T, p[R], g);
      if (I === null) {
        T === null && (T = Q);
        break;
      }
      t && T && I.alternate === null && n(d, T),
        (f = i(I, f, R)),
        j === null ? (E = I) : (j.sibling = I),
        (j = I),
        (T = Q);
    }
    if (R === p.length) return r(d, T), B && _t(d, R), E;
    if (T === null) {
      for (; R < p.length; R++)
        (T = h(d, p[R], g)),
          T !== null &&
            ((f = i(T, f, R)), j === null ? (E = T) : (j.sibling = T), (j = T));
      return B && _t(d, R), E;
    }
    for (T = l(d, T); R < p.length; R++)
      (Q = w(T, d, R, p[R], g)),
        Q !== null &&
          (t && Q.alternate !== null && T.delete(Q.key === null ? R : Q.key),
          (f = i(Q, f, R)),
          j === null ? (E = Q) : (j.sibling = Q),
          (j = Q));
    return (
      t &&
        T.forEach(function (Te) {
          return n(d, Te);
        }),
      B && _t(d, R),
      E
    );
  }
  function k(d, f, p, g) {
    var E = yn(p);
    if (typeof E != "function") throw Error(x(150));
    if (((p = E.call(p)), p == null)) throw Error(x(151));
    for (
      var j = (E = null), T = f, R = (f = 0), Q = null, I = p.next();
      T !== null && !I.done;
      R++, I = p.next()
    ) {
      T.index > R ? ((Q = T), (T = null)) : (Q = T.sibling);
      var Te = v(d, T, I.value, g);
      if (Te === null) {
        T === null && (T = Q);
        break;
      }
      t && T && Te.alternate === null && n(d, T),
        (f = i(Te, f, R)),
        j === null ? (E = Te) : (j.sibling = Te),
        (j = Te),
        (T = Q);
    }
    if (I.done) return r(d, T), B && _t(d, R), E;
    if (T === null) {
      for (; !I.done; R++, I = p.next())
        (I = h(d, I.value, g)),
          I !== null &&
            ((f = i(I, f, R)), j === null ? (E = I) : (j.sibling = I), (j = I));
      return B && _t(d, R), E;
    }
    for (T = l(d, T); !I.done; R++, I = p.next())
      (I = w(T, d, R, I.value, g)),
        I !== null &&
          (t && I.alternate !== null && T.delete(I.key === null ? R : I.key),
          (f = i(I, f, R)),
          j === null ? (E = I) : (j.sibling = I),
          (j = I));
    return (
      t &&
        T.forEach(function (vn) {
          return n(d, vn);
        }),
      B && _t(d, R),
      E
    );
  }
  function C(d, f, p, g) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === Bt &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case dr:
          e: {
            for (var E = p.key, j = f; j !== null; ) {
              if (j.key === E) {
                if (((E = p.type), E === Bt)) {
                  if (j.tag === 7) {
                    r(d, j.sibling),
                      (f = o(j, p.props.children)),
                      (f.return = d),
                      (d = f);
                    break e;
                  }
                } else if (
                  j.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === be &&
                    Wu(E) === j.type)
                ) {
                  r(d, j.sibling),
                    (f = o(j, p.props)),
                    (f.ref = En(d, j, p)),
                    (f.return = d),
                    (d = f);
                  break e;
                }
                r(d, j);
                break;
              } else n(d, j);
              j = j.sibling;
            }
            p.type === Bt
              ? ((f = Rt(p.props.children, d.mode, g, p.key)),
                (f.return = d),
                (d = f))
              : ((g = $r(p.type, p.key, p.props, null, d.mode, g)),
                (g.ref = En(d, f, p)),
                (g.return = d),
                (d = g));
          }
          return u(d);
        case $t:
          e: {
            for (j = p.key; f !== null; ) {
              if (f.key === j)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === p.containerInfo &&
                  f.stateNode.implementation === p.implementation
                ) {
                  r(d, f.sibling),
                    (f = o(f, p.children || [])),
                    (f.return = d),
                    (d = f);
                  break e;
                } else {
                  r(d, f);
                  break;
                }
              else n(d, f);
              f = f.sibling;
            }
            (f = oo(p, d.mode, g)), (f.return = d), (d = f);
          }
          return u(d);
        case be:
          return (j = p._init), C(d, f, j(p._payload), g);
      }
      if (Pn(p)) return S(d, f, p, g);
      if (yn(p)) return k(d, f, p, g);
      Er(d, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        f !== null && f.tag === 6
          ? (r(d, f.sibling), (f = o(f, p)), (f.return = d), (d = f))
          : (r(d, f), (f = lo(p, d.mode, g)), (f.return = d), (d = f)),
        u(d))
      : r(d, f);
  }
  return C;
}
var sn = Aa(!0),
  Va = Aa(!1),
  el = gt(null),
  tl = null,
  Xt = null,
  Ti = null;
function Ri() {
  Ti = Xt = tl = null;
}
function Li(t) {
  var n = el.current;
  $(el), (t._currentValue = n);
}
function Uo(t, n, r) {
  for (; t !== null; ) {
    var l = t.alternate;
    if (
      ((t.childLanes & n) !== n
        ? ((t.childLanes |= n), l !== null && (l.childLanes |= n))
        : l !== null && (l.childLanes & n) !== n && (l.childLanes |= n),
      t === r)
    )
      break;
    t = t.return;
  }
}
function nn(t, n) {
  (tl = t),
    (Ti = Xt = null),
    (t = t.dependencies),
    t !== null &&
      t.firstContext !== null &&
      (t.lanes & n && (pe = !0), (t.firstContext = null));
}
function Pe(t) {
  var n = t._currentValue;
  if (Ti !== t)
    if (((t = { context: t, memoizedValue: n, next: null }), Xt === null)) {
      if (tl === null) throw Error(x(308));
      (Xt = t), (tl.dependencies = { lanes: 0, firstContext: t });
    } else Xt = Xt.next = t;
  return n;
}
var Pt = null;
function zi(t) {
  Pt === null ? (Pt = [t]) : Pt.push(t);
}
function Wa(t, n, r, l) {
  var o = n.interleaved;
  return (
    o === null ? ((r.next = r), zi(n)) : ((r.next = o.next), (o.next = r)),
    (n.interleaved = r),
    Ge(t, l)
  );
}
function Ge(t, n) {
  t.lanes |= n;
  var r = t.alternate;
  for (r !== null && (r.lanes |= n), r = t, t = t.return; t !== null; )
    (t.childLanes |= n),
      (r = t.alternate),
      r !== null && (r.childLanes |= n),
      (r = t),
      (t = t.return);
  return r.tag === 3 ? r.stateNode : null;
}
var et = !1;
function Oi(t) {
  t.updateQueue = {
    baseState: t.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ha(t, n) {
  (t = t.updateQueue),
    n.updateQueue === t &&
      (n.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        effects: t.effects,
      });
}
function Ke(t, n) {
  return {
    eventTime: t,
    lane: n,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function at(t, n, r) {
  var l = t.updateQueue;
  if (l === null) return null;
  if (((l = l.shared), M & 2)) {
    var o = l.pending;
    return (
      o === null ? (n.next = n) : ((n.next = o.next), (o.next = n)),
      (l.pending = n),
      Ge(t, r)
    );
  }
  return (
    (o = l.interleaved),
    o === null ? ((n.next = n), zi(l)) : ((n.next = o.next), (o.next = n)),
    (l.interleaved = n),
    Ge(t, r)
  );
}
function Or(t, n, r) {
  if (
    ((n = n.updateQueue), n !== null && ((n = n.shared), (r & 4194240) !== 0))
  ) {
    var l = n.lanes;
    (l &= t.pendingLanes), (r |= l), (n.lanes = r), yi(t, r);
  }
}
function Hu(t, n) {
  var r = t.updateQueue,
    l = t.alternate;
  if (l !== null && ((l = l.updateQueue), r === l)) {
    var o = null,
      i = null;
    if (((r = r.firstBaseUpdate), r !== null)) {
      do {
        var u = {
          eventTime: r.eventTime,
          lane: r.lane,
          tag: r.tag,
          payload: r.payload,
          callback: r.callback,
          next: null,
        };
        i === null ? (o = i = u) : (i = i.next = u), (r = r.next);
      } while (r !== null);
      i === null ? (o = i = n) : (i = i.next = n);
    } else o = i = n;
    (r = {
      baseState: l.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: l.shared,
      effects: l.effects,
    }),
      (t.updateQueue = r);
    return;
  }
  (t = r.lastBaseUpdate),
    t === null ? (r.firstBaseUpdate = n) : (t.next = n),
    (r.lastBaseUpdate = n);
}
function nl(t, n, r, l) {
  var o = t.updateQueue;
  et = !1;
  var i = o.firstBaseUpdate,
    u = o.lastBaseUpdate,
    s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var a = s,
      c = a.next;
    (a.next = null), u === null ? (i = c) : (u.next = c), (u = a);
    var m = t.alternate;
    m !== null &&
      ((m = m.updateQueue),
      (s = m.lastBaseUpdate),
      s !== u &&
        (s === null ? (m.firstBaseUpdate = c) : (s.next = c),
        (m.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var h = o.baseState;
    (u = 0), (m = c = a = null), (s = i);
    do {
      var v = s.lane,
        w = s.eventTime;
      if ((l & v) === v) {
        m !== null &&
          (m = m.next =
            {
              eventTime: w,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var S = t,
            k = s;
          switch (((v = n), (w = r), k.tag)) {
            case 1:
              if (((S = k.payload), typeof S == "function")) {
                h = S.call(w, h, v);
                break e;
              }
              h = S;
              break e;
            case 3:
              S.flags = (S.flags & -65537) | 128;
            case 0:
              if (
                ((S = k.payload),
                (v = typeof S == "function" ? S.call(w, h, v) : S),
                v == null)
              )
                break e;
              h = W({}, h, v);
              break e;
            case 2:
              et = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((t.flags |= 64),
          (v = o.effects),
          v === null ? (o.effects = [s]) : v.push(s));
      } else
        (w = {
          eventTime: w,
          lane: v,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          m === null ? ((c = m = w), (a = h)) : (m = m.next = w),
          (u |= v);
      if (((s = s.next), s === null)) {
        if (((s = o.shared.pending), s === null)) break;
        (v = s),
          (s = v.next),
          (v.next = null),
          (o.lastBaseUpdate = v),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (m === null && (a = h),
      (o.baseState = a),
      (o.firstBaseUpdate = c),
      (o.lastBaseUpdate = m),
      (n = o.shared.interleaved),
      n !== null)
    ) {
      o = n;
      do (u |= o.lane), (o = o.next);
      while (o !== n);
    } else i === null && (o.shared.lanes = 0);
    (It |= u), (t.lanes = u), (t.memoizedState = h);
  }
}
function Qu(t, n, r) {
  if (((t = n.effects), (n.effects = null), t !== null))
    for (n = 0; n < t.length; n++) {
      var l = t[n],
        o = l.callback;
      if (o !== null) {
        if (((l.callback = null), (l = r), typeof o != "function"))
          throw Error(x(191, o));
        o.call(l);
      }
    }
}
var ur = {},
  Ae = gt(ur),
  Jn = gt(ur),
  Zn = gt(ur);
function jt(t) {
  if (t === ur) throw Error(x(174));
  return t;
}
function Ii(t, n) {
  switch ((F(Zn, n), F(Jn, t), F(Ae, ur), (t = n.nodeType), t)) {
    case 9:
    case 11:
      n = (n = n.documentElement) ? n.namespaceURI : yo(null, "");
      break;
    default:
      (t = t === 8 ? n.parentNode : n),
        (n = t.namespaceURI || null),
        (t = t.tagName),
        (n = yo(n, t));
  }
  $(Ae), F(Ae, n);
}
function an() {
  $(Ae), $(Jn), $(Zn);
}
function Qa(t) {
  jt(Zn.current);
  var n = jt(Ae.current),
    r = yo(n, t.type);
  n !== r && (F(Jn, t), F(Ae, r));
}
function Mi(t) {
  Jn.current === t && ($(Ae), $(Jn));
}
var A = gt(0);
function rl(t) {
  for (var n = t; n !== null; ) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (
        r !== null &&
        ((r = r.dehydrated), r === null || r.data === "$?" || r.data === "$!")
      )
        return n;
    } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
      if (n.flags & 128) return n;
    } else if (n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return null;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
  return null;
}
var ql = [];
function Di() {
  for (var t = 0; t < ql.length; t++)
    ql[t]._workInProgressVersionPrimary = null;
  ql.length = 0;
}
var Ir = Ze.ReactCurrentDispatcher,
  bl = Ze.ReactCurrentBatchConfig,
  Ot = 0,
  V = null,
  J = null,
  b = null,
  ll = !1,
  Mn = !1,
  qn = 0,
  bd = 0;
function le() {
  throw Error(x(321));
}
function Fi(t, n) {
  if (n === null) return !1;
  for (var r = 0; r < n.length && r < t.length; r++)
    if (!De(t[r], n[r])) return !1;
  return !0;
}
function Ui(t, n, r, l, o, i) {
  if (
    ((Ot = i),
    (V = n),
    (n.memoizedState = null),
    (n.updateQueue = null),
    (n.lanes = 0),
    (Ir.current = t === null || t.memoizedState === null ? rp : lp),
    (t = r(l, o)),
    Mn)
  ) {
    i = 0;
    do {
      if (((Mn = !1), (qn = 0), 25 <= i)) throw Error(x(301));
      (i += 1),
        (b = J = null),
        (n.updateQueue = null),
        (Ir.current = op),
        (t = r(l, o));
    } while (Mn);
  }
  if (
    ((Ir.current = ol),
    (n = J !== null && J.next !== null),
    (Ot = 0),
    (b = J = V = null),
    (ll = !1),
    n)
  )
    throw Error(x(300));
  return t;
}
function $i() {
  var t = qn !== 0;
  return (qn = 0), t;
}
function Ue() {
  var t = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return b === null ? (V.memoizedState = b = t) : (b = b.next = t), b;
}
function je() {
  if (J === null) {
    var t = V.alternate;
    t = t !== null ? t.memoizedState : null;
  } else t = J.next;
  var n = b === null ? V.memoizedState : b.next;
  if (n !== null) (b = n), (J = t);
  else {
    if (t === null) throw Error(x(310));
    (J = t),
      (t = {
        memoizedState: J.memoizedState,
        baseState: J.baseState,
        baseQueue: J.baseQueue,
        queue: J.queue,
        next: null,
      }),
      b === null ? (V.memoizedState = b = t) : (b = b.next = t);
  }
  return b;
}
function bn(t, n) {
  return typeof n == "function" ? n(t) : n;
}
function eo(t) {
  var n = je(),
    r = n.queue;
  if (r === null) throw Error(x(311));
  r.lastRenderedReducer = t;
  var l = J,
    o = l.baseQueue,
    i = r.pending;
  if (i !== null) {
    if (o !== null) {
      var u = o.next;
      (o.next = i.next), (i.next = u);
    }
    (l.baseQueue = o = i), (r.pending = null);
  }
  if (o !== null) {
    (i = o.next), (l = l.baseState);
    var s = (u = null),
      a = null,
      c = i;
    do {
      var m = c.lane;
      if ((Ot & m) === m)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (l = c.hasEagerState ? c.eagerState : t(l, c.action));
      else {
        var h = {
          lane: m,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        a === null ? ((s = a = h), (u = l)) : (a = a.next = h),
          (V.lanes |= m),
          (It |= m);
      }
      c = c.next;
    } while (c !== null && c !== i);
    a === null ? (u = l) : (a.next = s),
      De(l, n.memoizedState) || (pe = !0),
      (n.memoizedState = l),
      (n.baseState = u),
      (n.baseQueue = a),
      (r.lastRenderedState = l);
  }
  if (((t = r.interleaved), t !== null)) {
    o = t;
    do (i = o.lane), (V.lanes |= i), (It |= i), (o = o.next);
    while (o !== t);
  } else o === null && (r.lanes = 0);
  return [n.memoizedState, r.dispatch];
}
function to(t) {
  var n = je(),
    r = n.queue;
  if (r === null) throw Error(x(311));
  r.lastRenderedReducer = t;
  var l = r.dispatch,
    o = r.pending,
    i = n.memoizedState;
  if (o !== null) {
    r.pending = null;
    var u = (o = o.next);
    do (i = t(i, u.action)), (u = u.next);
    while (u !== o);
    De(i, n.memoizedState) || (pe = !0),
      (n.memoizedState = i),
      n.baseQueue === null && (n.baseState = i),
      (r.lastRenderedState = i);
  }
  return [i, l];
}
function Ka() {}
function Ya(t, n) {
  var r = V,
    l = je(),
    o = n(),
    i = !De(l.memoizedState, o);
  if (
    (i && ((l.memoizedState = o), (pe = !0)),
    (l = l.queue),
    Bi(Ja.bind(null, r, l, t), [t]),
    l.getSnapshot !== n || i || (b !== null && b.memoizedState.tag & 1))
  ) {
    if (
      ((r.flags |= 2048),
      er(9, Ga.bind(null, r, l, o, n), void 0, null),
      ee === null)
    )
      throw Error(x(349));
    Ot & 30 || Xa(r, n, o);
  }
  return o;
}
function Xa(t, n, r) {
  (t.flags |= 16384),
    (t = { getSnapshot: n, value: r }),
    (n = V.updateQueue),
    n === null
      ? ((n = { lastEffect: null, stores: null }),
        (V.updateQueue = n),
        (n.stores = [t]))
      : ((r = n.stores), r === null ? (n.stores = [t]) : r.push(t));
}
function Ga(t, n, r, l) {
  (n.value = r), (n.getSnapshot = l), Za(n) && qa(t);
}
function Ja(t, n, r) {
  return r(function () {
    Za(n) && qa(t);
  });
}
function Za(t) {
  var n = t.getSnapshot;
  t = t.value;
  try {
    var r = n();
    return !De(t, r);
  } catch {
    return !0;
  }
}
function qa(t) {
  var n = Ge(t, 1);
  n !== null && Me(n, t, 1, -1);
}
function Ku(t) {
  var n = Ue();
  return (
    typeof t == "function" && (t = t()),
    (n.memoizedState = n.baseState = t),
    (t = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: bn,
      lastRenderedState: t,
    }),
    (n.queue = t),
    (t = t.dispatch = np.bind(null, V, t)),
    [n.memoizedState, t]
  );
}
function er(t, n, r, l) {
  return (
    (t = { tag: t, create: n, destroy: r, deps: l, next: null }),
    (n = V.updateQueue),
    n === null
      ? ((n = { lastEffect: null, stores: null }),
        (V.updateQueue = n),
        (n.lastEffect = t.next = t))
      : ((r = n.lastEffect),
        r === null
          ? (n.lastEffect = t.next = t)
          : ((l = r.next), (r.next = t), (t.next = l), (n.lastEffect = t))),
    t
  );
}
function ba() {
  return je().memoizedState;
}
function Mr(t, n, r, l) {
  var o = Ue();
  (V.flags |= t),
    (o.memoizedState = er(1 | n, r, void 0, l === void 0 ? null : l));
}
function kl(t, n, r, l) {
  var o = je();
  l = l === void 0 ? null : l;
  var i = void 0;
  if (J !== null) {
    var u = J.memoizedState;
    if (((i = u.destroy), l !== null && Fi(l, u.deps))) {
      o.memoizedState = er(n, r, i, l);
      return;
    }
  }
  (V.flags |= t), (o.memoizedState = er(1 | n, r, i, l));
}
function Yu(t, n) {
  return Mr(8390656, 8, t, n);
}
function Bi(t, n) {
  return kl(2048, 8, t, n);
}
function ec(t, n) {
  return kl(4, 2, t, n);
}
function tc(t, n) {
  return kl(4, 4, t, n);
}
function nc(t, n) {
  if (typeof n == "function")
    return (
      (t = t()),
      n(t),
      function () {
        n(null);
      }
    );
  if (n != null)
    return (
      (t = t()),
      (n.current = t),
      function () {
        n.current = null;
      }
    );
}
function rc(t, n, r) {
  return (
    (r = r != null ? r.concat([t]) : null), kl(4, 4, nc.bind(null, n, t), r)
  );
}
function Ai() {}
function lc(t, n) {
  var r = je();
  n = n === void 0 ? null : n;
  var l = r.memoizedState;
  return l !== null && n !== null && Fi(n, l[1])
    ? l[0]
    : ((r.memoizedState = [t, n]), t);
}
function oc(t, n) {
  var r = je();
  n = n === void 0 ? null : n;
  var l = r.memoizedState;
  return l !== null && n !== null && Fi(n, l[1])
    ? l[0]
    : ((t = t()), (r.memoizedState = [t, n]), t);
}
function ic(t, n, r) {
  return Ot & 21
    ? (De(r, n) || ((r = fa()), (V.lanes |= r), (It |= r), (t.baseState = !0)),
      n)
    : (t.baseState && ((t.baseState = !1), (pe = !0)), (t.memoizedState = r));
}
function ep(t, n) {
  var r = D;
  (D = r !== 0 && 4 > r ? r : 4), t(!0);
  var l = bl.transition;
  bl.transition = {};
  try {
    t(!1), n();
  } finally {
    (D = r), (bl.transition = l);
  }
}
function uc() {
  return je().memoizedState;
}
function tp(t, n, r) {
  var l = ft(t);
  if (
    ((r = {
      lane: l,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    sc(t))
  )
    ac(n, r);
  else if (((r = Wa(t, n, r, l)), r !== null)) {
    var o = ae();
    Me(r, t, l, o), cc(r, n, l);
  }
}
function np(t, n, r) {
  var l = ft(t),
    o = { lane: l, action: r, hasEagerState: !1, eagerState: null, next: null };
  if (sc(t)) ac(n, o);
  else {
    var i = t.alternate;
    if (
      t.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = n.lastRenderedReducer), i !== null)
    )
      try {
        var u = n.lastRenderedState,
          s = i(u, r);
        if (((o.hasEagerState = !0), (o.eagerState = s), De(s, u))) {
          var a = n.interleaved;
          a === null
            ? ((o.next = o), zi(n))
            : ((o.next = a.next), (a.next = o)),
            (n.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (r = Wa(t, n, o, l)),
      r !== null && ((o = ae()), Me(r, t, l, o), cc(r, n, l));
  }
}
function sc(t) {
  var n = t.alternate;
  return t === V || (n !== null && n === V);
}
function ac(t, n) {
  Mn = ll = !0;
  var r = t.pending;
  r === null ? (n.next = n) : ((n.next = r.next), (r.next = n)),
    (t.pending = n);
}
function cc(t, n, r) {
  if (r & 4194240) {
    var l = n.lanes;
    (l &= t.pendingLanes), (r |= l), (n.lanes = r), yi(t, r);
  }
}
var ol = {
    readContext: Pe,
    useCallback: le,
    useContext: le,
    useEffect: le,
    useImperativeHandle: le,
    useInsertionEffect: le,
    useLayoutEffect: le,
    useMemo: le,
    useReducer: le,
    useRef: le,
    useState: le,
    useDebugValue: le,
    useDeferredValue: le,
    useTransition: le,
    useMutableSource: le,
    useSyncExternalStore: le,
    useId: le,
    unstable_isNewReconciler: !1,
  },
  rp = {
    readContext: Pe,
    useCallback: function (t, n) {
      return (Ue().memoizedState = [t, n === void 0 ? null : n]), t;
    },
    useContext: Pe,
    useEffect: Yu,
    useImperativeHandle: function (t, n, r) {
      return (
        (r = r != null ? r.concat([t]) : null),
        Mr(4194308, 4, nc.bind(null, n, t), r)
      );
    },
    useLayoutEffect: function (t, n) {
      return Mr(4194308, 4, t, n);
    },
    useInsertionEffect: function (t, n) {
      return Mr(4, 2, t, n);
    },
    useMemo: function (t, n) {
      var r = Ue();
      return (
        (n = n === void 0 ? null : n), (t = t()), (r.memoizedState = [t, n]), t
      );
    },
    useReducer: function (t, n, r) {
      var l = Ue();
      return (
        (n = r !== void 0 ? r(n) : n),
        (l.memoizedState = l.baseState = n),
        (t = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: n,
        }),
        (l.queue = t),
        (t = t.dispatch = tp.bind(null, V, t)),
        [l.memoizedState, t]
      );
    },
    useRef: function (t) {
      var n = Ue();
      return (t = { current: t }), (n.memoizedState = t);
    },
    useState: Ku,
    useDebugValue: Ai,
    useDeferredValue: function (t) {
      return (Ue().memoizedState = t);
    },
    useTransition: function () {
      var t = Ku(!1),
        n = t[0];
      return (t = ep.bind(null, t[1])), (Ue().memoizedState = t), [n, t];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (t, n, r) {
      var l = V,
        o = Ue();
      if (B) {
        if (r === void 0) throw Error(x(407));
        r = r();
      } else {
        if (((r = n()), ee === null)) throw Error(x(349));
        Ot & 30 || Xa(l, n, r);
      }
      o.memoizedState = r;
      var i = { value: r, getSnapshot: n };
      return (
        (o.queue = i),
        Yu(Ja.bind(null, l, i, t), [t]),
        (l.flags |= 2048),
        er(9, Ga.bind(null, l, i, r, n), void 0, null),
        r
      );
    },
    useId: function () {
      var t = Ue(),
        n = ee.identifierPrefix;
      if (B) {
        var r = Qe,
          l = He;
        (r = (l & ~(1 << (32 - Ie(l) - 1))).toString(32) + r),
          (n = ":" + n + "R" + r),
          (r = qn++),
          0 < r && (n += "H" + r.toString(32)),
          (n += ":");
      } else (r = bd++), (n = ":" + n + "r" + r.toString(32) + ":");
      return (t.memoizedState = n);
    },
    unstable_isNewReconciler: !1,
  },
  lp = {
    readContext: Pe,
    useCallback: lc,
    useContext: Pe,
    useEffect: Bi,
    useImperativeHandle: rc,
    useInsertionEffect: ec,
    useLayoutEffect: tc,
    useMemo: oc,
    useReducer: eo,
    useRef: ba,
    useState: function () {
      return eo(bn);
    },
    useDebugValue: Ai,
    useDeferredValue: function (t) {
      var n = je();
      return ic(n, J.memoizedState, t);
    },
    useTransition: function () {
      var t = eo(bn)[0],
        n = je().memoizedState;
      return [t, n];
    },
    useMutableSource: Ka,
    useSyncExternalStore: Ya,
    useId: uc,
    unstable_isNewReconciler: !1,
  },
  op = {
    readContext: Pe,
    useCallback: lc,
    useContext: Pe,
    useEffect: Bi,
    useImperativeHandle: rc,
    useInsertionEffect: ec,
    useLayoutEffect: tc,
    useMemo: oc,
    useReducer: to,
    useRef: ba,
    useState: function () {
      return to(bn);
    },
    useDebugValue: Ai,
    useDeferredValue: function (t) {
      var n = je();
      return J === null ? (n.memoizedState = t) : ic(n, J.memoizedState, t);
    },
    useTransition: function () {
      var t = to(bn)[0],
        n = je().memoizedState;
      return [t, n];
    },
    useMutableSource: Ka,
    useSyncExternalStore: Ya,
    useId: uc,
    unstable_isNewReconciler: !1,
  };
function Le(t, n) {
  if (t && t.defaultProps) {
    (n = W({}, n)), (t = t.defaultProps);
    for (var r in t) n[r] === void 0 && (n[r] = t[r]);
    return n;
  }
  return n;
}
function $o(t, n, r, l) {
  (n = t.memoizedState),
    (r = r(l, n)),
    (r = r == null ? n : W({}, n, r)),
    (t.memoizedState = r),
    t.lanes === 0 && (t.updateQueue.baseState = r);
}
var xl = {
  isMounted: function (t) {
    return (t = t._reactInternals) ? Ft(t) === t : !1;
  },
  enqueueSetState: function (t, n, r) {
    t = t._reactInternals;
    var l = ae(),
      o = ft(t),
      i = Ke(l, o);
    (i.payload = n),
      r != null && (i.callback = r),
      (n = at(t, i, o)),
      n !== null && (Me(n, t, o, l), Or(n, t, o));
  },
  enqueueReplaceState: function (t, n, r) {
    t = t._reactInternals;
    var l = ae(),
      o = ft(t),
      i = Ke(l, o);
    (i.tag = 1),
      (i.payload = n),
      r != null && (i.callback = r),
      (n = at(t, i, o)),
      n !== null && (Me(n, t, o, l), Or(n, t, o));
  },
  enqueueForceUpdate: function (t, n) {
    t = t._reactInternals;
    var r = ae(),
      l = ft(t),
      o = Ke(r, l);
    (o.tag = 2),
      n != null && (o.callback = n),
      (n = at(t, o, l)),
      n !== null && (Me(n, t, l, r), Or(n, t, l));
  },
};
function Xu(t, n, r, l, o, i, u) {
  return (
    (t = t.stateNode),
    typeof t.shouldComponentUpdate == "function"
      ? t.shouldComponentUpdate(l, i, u)
      : n.prototype && n.prototype.isPureReactComponent
      ? !Kn(r, l) || !Kn(o, i)
      : !0
  );
}
function fc(t, n, r) {
  var l = !1,
    o = mt,
    i = n.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Pe(i))
      : ((o = me(n) ? Lt : ue.current),
        (l = n.contextTypes),
        (i = (l = l != null) ? on(t, o) : mt)),
    (n = new n(r, i)),
    (t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null),
    (n.updater = xl),
    (t.stateNode = n),
    (n._reactInternals = t),
    l &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = o),
      (t.__reactInternalMemoizedMaskedChildContext = i)),
    n
  );
}
function Gu(t, n, r, l) {
  (t = n.state),
    typeof n.componentWillReceiveProps == "function" &&
      n.componentWillReceiveProps(r, l),
    typeof n.UNSAFE_componentWillReceiveProps == "function" &&
      n.UNSAFE_componentWillReceiveProps(r, l),
    n.state !== t && xl.enqueueReplaceState(n, n.state, null);
}
function Bo(t, n, r, l) {
  var o = t.stateNode;
  (o.props = r), (o.state = t.memoizedState), (o.refs = {}), Oi(t);
  var i = n.contextType;
  typeof i == "object" && i !== null
    ? (o.context = Pe(i))
    : ((i = me(n) ? Lt : ue.current), (o.context = on(t, i))),
    (o.state = t.memoizedState),
    (i = n.getDerivedStateFromProps),
    typeof i == "function" && ($o(t, n, i, r), (o.state = t.memoizedState)),
    typeof n.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((n = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      n !== o.state && xl.enqueueReplaceState(o, o.state, null),
      nl(t, r, o, l),
      (o.state = t.memoizedState)),
    typeof o.componentDidMount == "function" && (t.flags |= 4194308);
}
function cn(t, n) {
  try {
    var r = "",
      l = n;
    do (r += Of(l)), (l = l.return);
    while (l);
    var o = r;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: t, source: n, stack: o, digest: null };
}
function no(t, n, r) {
  return { value: t, source: null, stack: r ?? null, digest: n ?? null };
}
function Ao(t, n) {
  try {
    console.error(n.value);
  } catch (r) {
    setTimeout(function () {
      throw r;
    });
  }
}
var ip = typeof WeakMap == "function" ? WeakMap : Map;
function dc(t, n, r) {
  (r = Ke(-1, r)), (r.tag = 3), (r.payload = { element: null });
  var l = n.value;
  return (
    (r.callback = function () {
      ul || ((ul = !0), (Zo = l)), Ao(t, n);
    }),
    r
  );
}
function pc(t, n, r) {
  (r = Ke(-1, r)), (r.tag = 3);
  var l = t.type.getDerivedStateFromError;
  if (typeof l == "function") {
    var o = n.value;
    (r.payload = function () {
      return l(o);
    }),
      (r.callback = function () {
        Ao(t, n);
      });
  }
  var i = t.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (r.callback = function () {
        Ao(t, n),
          typeof l != "function" &&
            (ct === null ? (ct = new Set([this])) : ct.add(this));
        var u = n.stack;
        this.componentDidCatch(n.value, {
          componentStack: u !== null ? u : "",
        });
      }),
    r
  );
}
function Ju(t, n, r) {
  var l = t.pingCache;
  if (l === null) {
    l = t.pingCache = new ip();
    var o = new Set();
    l.set(n, o);
  } else (o = l.get(n)), o === void 0 && ((o = new Set()), l.set(n, o));
  o.has(r) || (o.add(r), (t = Sp.bind(null, t, n, r)), n.then(t, t));
}
function Zu(t) {
  do {
    var n;
    if (
      ((n = t.tag === 13) &&
        ((n = t.memoizedState), (n = n !== null ? n.dehydrated !== null : !0)),
      n)
    )
      return t;
    t = t.return;
  } while (t !== null);
  return null;
}
function qu(t, n, r, l, o) {
  return t.mode & 1
    ? ((t.flags |= 65536), (t.lanes = o), t)
    : (t === n
        ? (t.flags |= 65536)
        : ((t.flags |= 128),
          (r.flags |= 131072),
          (r.flags &= -52805),
          r.tag === 1 &&
            (r.alternate === null
              ? (r.tag = 17)
              : ((n = Ke(-1, 1)), (n.tag = 2), at(r, n, 1))),
          (r.lanes |= 1)),
      t);
}
var up = Ze.ReactCurrentOwner,
  pe = !1;
function se(t, n, r, l) {
  n.child = t === null ? Va(n, null, r, l) : sn(n, t.child, r, l);
}
function bu(t, n, r, l, o) {
  r = r.render;
  var i = n.ref;
  return (
    nn(n, o),
    (l = Ui(t, n, r, l, i, o)),
    (r = $i()),
    t !== null && !pe
      ? ((n.updateQueue = t.updateQueue),
        (n.flags &= -2053),
        (t.lanes &= ~o),
        Je(t, n, o))
      : (B && r && Ni(n), (n.flags |= 1), se(t, n, l, o), n.child)
  );
}
function es(t, n, r, l, o) {
  if (t === null) {
    var i = r.type;
    return typeof i == "function" &&
      !Gi(i) &&
      i.defaultProps === void 0 &&
      r.compare === null &&
      r.defaultProps === void 0
      ? ((n.tag = 15), (n.type = i), hc(t, n, i, l, o))
      : ((t = $r(r.type, null, l, n, n.mode, o)),
        (t.ref = n.ref),
        (t.return = n),
        (n.child = t));
  }
  if (((i = t.child), !(t.lanes & o))) {
    var u = i.memoizedProps;
    if (
      ((r = r.compare), (r = r !== null ? r : Kn), r(u, l) && t.ref === n.ref)
    )
      return Je(t, n, o);
  }
  return (
    (n.flags |= 1),
    (t = dt(i, l)),
    (t.ref = n.ref),
    (t.return = n),
    (n.child = t)
  );
}
function hc(t, n, r, l, o) {
  if (t !== null) {
    var i = t.memoizedProps;
    if (Kn(i, l) && t.ref === n.ref)
      if (((pe = !1), (n.pendingProps = l = i), (t.lanes & o) !== 0))
        t.flags & 131072 && (pe = !0);
      else return (n.lanes = t.lanes), Je(t, n, o);
  }
  return Vo(t, n, r, l, o);
}
function mc(t, n, r) {
  var l = n.pendingProps,
    o = l.children,
    i = t !== null ? t.memoizedState : null;
  if (l.mode === "hidden")
    if (!(n.mode & 1))
      (n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        F(Jt, ge),
        (ge |= r);
    else {
      if (!(r & 1073741824))
        return (
          (t = i !== null ? i.baseLanes | r : r),
          (n.lanes = n.childLanes = 1073741824),
          (n.memoizedState = {
            baseLanes: t,
            cachePool: null,
            transitions: null,
          }),
          (n.updateQueue = null),
          F(Jt, ge),
          (ge |= t),
          null
        );
      (n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (l = i !== null ? i.baseLanes : r),
        F(Jt, ge),
        (ge |= l);
    }
  else
    i !== null ? ((l = i.baseLanes | r), (n.memoizedState = null)) : (l = r),
      F(Jt, ge),
      (ge |= l);
  return se(t, n, o, r), n.child;
}
function vc(t, n) {
  var r = n.ref;
  ((t === null && r !== null) || (t !== null && t.ref !== r)) &&
    ((n.flags |= 512), (n.flags |= 2097152));
}
function Vo(t, n, r, l, o) {
  var i = me(r) ? Lt : ue.current;
  return (
    (i = on(n, i)),
    nn(n, o),
    (r = Ui(t, n, r, l, i, o)),
    (l = $i()),
    t !== null && !pe
      ? ((n.updateQueue = t.updateQueue),
        (n.flags &= -2053),
        (t.lanes &= ~o),
        Je(t, n, o))
      : (B && l && Ni(n), (n.flags |= 1), se(t, n, r, o), n.child)
  );
}
function ts(t, n, r, l, o) {
  if (me(r)) {
    var i = !0;
    Zr(n);
  } else i = !1;
  if ((nn(n, o), n.stateNode === null))
    Dr(t, n), fc(n, r, l), Bo(n, r, l, o), (l = !0);
  else if (t === null) {
    var u = n.stateNode,
      s = n.memoizedProps;
    u.props = s;
    var a = u.context,
      c = r.contextType;
    typeof c == "object" && c !== null
      ? (c = Pe(c))
      : ((c = me(r) ? Lt : ue.current), (c = on(n, c)));
    var m = r.getDerivedStateFromProps,
      h =
        typeof m == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
        typeof u.componentWillReceiveProps != "function") ||
      ((s !== l || a !== c) && Gu(n, u, l, c)),
      (et = !1);
    var v = n.memoizedState;
    (u.state = v),
      nl(n, l, u, o),
      (a = n.memoizedState),
      s !== l || v !== a || he.current || et
        ? (typeof m == "function" && ($o(n, r, m, l), (a = n.memoizedState)),
          (s = et || Xu(n, r, s, l, v, a, c))
            ? (h ||
                (typeof u.UNSAFE_componentWillMount != "function" &&
                  typeof u.componentWillMount != "function") ||
                (typeof u.componentWillMount == "function" &&
                  u.componentWillMount(),
                typeof u.UNSAFE_componentWillMount == "function" &&
                  u.UNSAFE_componentWillMount()),
              typeof u.componentDidMount == "function" && (n.flags |= 4194308))
            : (typeof u.componentDidMount == "function" && (n.flags |= 4194308),
              (n.memoizedProps = l),
              (n.memoizedState = a)),
          (u.props = l),
          (u.state = a),
          (u.context = c),
          (l = s))
        : (typeof u.componentDidMount == "function" && (n.flags |= 4194308),
          (l = !1));
  } else {
    (u = n.stateNode),
      Ha(t, n),
      (s = n.memoizedProps),
      (c = n.type === n.elementType ? s : Le(n.type, s)),
      (u.props = c),
      (h = n.pendingProps),
      (v = u.context),
      (a = r.contextType),
      typeof a == "object" && a !== null
        ? (a = Pe(a))
        : ((a = me(r) ? Lt : ue.current), (a = on(n, a)));
    var w = r.getDerivedStateFromProps;
    (m =
      typeof w == "function" ||
      typeof u.getSnapshotBeforeUpdate == "function") ||
      (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
        typeof u.componentWillReceiveProps != "function") ||
      ((s !== h || v !== a) && Gu(n, u, l, a)),
      (et = !1),
      (v = n.memoizedState),
      (u.state = v),
      nl(n, l, u, o);
    var S = n.memoizedState;
    s !== h || v !== S || he.current || et
      ? (typeof w == "function" && ($o(n, r, w, l), (S = n.memoizedState)),
        (c = et || Xu(n, r, c, l, v, S, a) || !1)
          ? (m ||
              (typeof u.UNSAFE_componentWillUpdate != "function" &&
                typeof u.componentWillUpdate != "function") ||
              (typeof u.componentWillUpdate == "function" &&
                u.componentWillUpdate(l, S, a),
              typeof u.UNSAFE_componentWillUpdate == "function" &&
                u.UNSAFE_componentWillUpdate(l, S, a)),
            typeof u.componentDidUpdate == "function" && (n.flags |= 4),
            typeof u.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024))
          : (typeof u.componentDidUpdate != "function" ||
              (s === t.memoizedProps && v === t.memoizedState) ||
              (n.flags |= 4),
            typeof u.getSnapshotBeforeUpdate != "function" ||
              (s === t.memoizedProps && v === t.memoizedState) ||
              (n.flags |= 1024),
            (n.memoizedProps = l),
            (n.memoizedState = S)),
        (u.props = l),
        (u.state = S),
        (u.context = a),
        (l = c))
      : (typeof u.componentDidUpdate != "function" ||
          (s === t.memoizedProps && v === t.memoizedState) ||
          (n.flags |= 4),
        typeof u.getSnapshotBeforeUpdate != "function" ||
          (s === t.memoizedProps && v === t.memoizedState) ||
          (n.flags |= 1024),
        (l = !1));
  }
  return Wo(t, n, r, l, i, o);
}
function Wo(t, n, r, l, o, i) {
  vc(t, n);
  var u = (n.flags & 128) !== 0;
  if (!l && !u) return o && Bu(n, r, !1), Je(t, n, i);
  (l = n.stateNode), (up.current = n);
  var s =
    u && typeof r.getDerivedStateFromError != "function" ? null : l.render();
  return (
    (n.flags |= 1),
    t !== null && u
      ? ((n.child = sn(n, t.child, null, i)), (n.child = sn(n, null, s, i)))
      : se(t, n, s, i),
    (n.memoizedState = l.state),
    o && Bu(n, r, !0),
    n.child
  );
}
function gc(t) {
  var n = t.stateNode;
  n.pendingContext
    ? $u(t, n.pendingContext, n.pendingContext !== n.context)
    : n.context && $u(t, n.context, !1),
    Ii(t, n.containerInfo);
}
function ns(t, n, r, l, o) {
  return un(), ji(o), (n.flags |= 256), se(t, n, r, l), n.child;
}
var Ho = { dehydrated: null, treeContext: null, retryLane: 0 };
function Qo(t) {
  return { baseLanes: t, cachePool: null, transitions: null };
}
function yc(t, n, r) {
  var l = n.pendingProps,
    o = A.current,
    i = !1,
    u = (n.flags & 128) !== 0,
    s;
  if (
    ((s = u) ||
      (s = t !== null && t.memoizedState === null ? !1 : (o & 2) !== 0),
    s
      ? ((i = !0), (n.flags &= -129))
      : (t === null || t.memoizedState !== null) && (o |= 1),
    F(A, o & 1),
    t === null)
  )
    return (
      Fo(n),
      (t = n.memoizedState),
      t !== null && ((t = t.dehydrated), t !== null)
        ? (n.mode & 1
            ? t.data === "$!"
              ? (n.lanes = 8)
              : (n.lanes = 1073741824)
            : (n.lanes = 1),
          null)
        : ((u = l.children),
          (t = l.fallback),
          i
            ? ((l = n.mode),
              (i = n.child),
              (u = { mode: "hidden", children: u }),
              !(l & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = u))
                : (i = Cl(u, l, 0, null)),
              (t = Rt(t, l, r, null)),
              (i.return = n),
              (t.return = n),
              (i.sibling = t),
              (n.child = i),
              (n.child.memoizedState = Qo(r)),
              (n.memoizedState = Ho),
              t)
            : Vi(n, u))
    );
  if (((o = t.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return sp(t, n, u, l, s, o, r);
  if (i) {
    (i = l.fallback), (u = n.mode), (o = t.child), (s = o.sibling);
    var a = { mode: "hidden", children: l.children };
    return (
      !(u & 1) && n.child !== o
        ? ((l = n.child),
          (l.childLanes = 0),
          (l.pendingProps = a),
          (n.deletions = null))
        : ((l = dt(o, a)), (l.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (i = dt(s, i)) : ((i = Rt(i, u, r, null)), (i.flags |= 2)),
      (i.return = n),
      (l.return = n),
      (l.sibling = i),
      (n.child = l),
      (l = i),
      (i = n.child),
      (u = t.child.memoizedState),
      (u =
        u === null
          ? Qo(r)
          : {
              baseLanes: u.baseLanes | r,
              cachePool: null,
              transitions: u.transitions,
            }),
      (i.memoizedState = u),
      (i.childLanes = t.childLanes & ~r),
      (n.memoizedState = Ho),
      l
    );
  }
  return (
    (i = t.child),
    (t = i.sibling),
    (l = dt(i, { mode: "visible", children: l.children })),
    !(n.mode & 1) && (l.lanes = r),
    (l.return = n),
    (l.sibling = null),
    t !== null &&
      ((r = n.deletions),
      r === null ? ((n.deletions = [t]), (n.flags |= 16)) : r.push(t)),
    (n.child = l),
    (n.memoizedState = null),
    l
  );
}
function Vi(t, n) {
  return (
    (n = Cl({ mode: "visible", children: n }, t.mode, 0, null)),
    (n.return = t),
    (t.child = n)
  );
}
function _r(t, n, r, l) {
  return (
    l !== null && ji(l),
    sn(n, t.child, null, r),
    (t = Vi(n, n.pendingProps.children)),
    (t.flags |= 2),
    (n.memoizedState = null),
    t
  );
}
function sp(t, n, r, l, o, i, u) {
  if (r)
    return n.flags & 256
      ? ((n.flags &= -257), (l = no(Error(x(422)))), _r(t, n, u, l))
      : n.memoizedState !== null
      ? ((n.child = t.child), (n.flags |= 128), null)
      : ((i = l.fallback),
        (o = n.mode),
        (l = Cl({ mode: "visible", children: l.children }, o, 0, null)),
        (i = Rt(i, o, u, null)),
        (i.flags |= 2),
        (l.return = n),
        (i.return = n),
        (l.sibling = i),
        (n.child = l),
        n.mode & 1 && sn(n, t.child, null, u),
        (n.child.memoizedState = Qo(u)),
        (n.memoizedState = Ho),
        i);
  if (!(n.mode & 1)) return _r(t, n, u, null);
  if (o.data === "$!") {
    if (((l = o.nextSibling && o.nextSibling.dataset), l)) var s = l.dgst;
    return (l = s), (i = Error(x(419))), (l = no(i, l, void 0)), _r(t, n, u, l);
  }
  if (((s = (u & t.childLanes) !== 0), pe || s)) {
    if (((l = ee), l !== null)) {
      switch (u & -u) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (l.suspendedLanes | u) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), Ge(t, o), Me(l, t, o, -1));
    }
    return Xi(), (l = no(Error(x(421)))), _r(t, n, u, l);
  }
  return o.data === "$?"
    ? ((n.flags |= 128),
      (n.child = t.child),
      (n = kp.bind(null, t)),
      (o._reactRetry = n),
      null)
    : ((t = i.treeContext),
      (ye = st(o.nextSibling)),
      (we = n),
      (B = !0),
      (Oe = null),
      t !== null &&
        ((Ee[_e++] = He),
        (Ee[_e++] = Qe),
        (Ee[_e++] = zt),
        (He = t.id),
        (Qe = t.overflow),
        (zt = n)),
      (n = Vi(n, l.children)),
      (n.flags |= 4096),
      n);
}
function rs(t, n, r) {
  t.lanes |= n;
  var l = t.alternate;
  l !== null && (l.lanes |= n), Uo(t.return, n, r);
}
function ro(t, n, r, l, o) {
  var i = t.memoizedState;
  i === null
    ? (t.memoizedState = {
        isBackwards: n,
        rendering: null,
        renderingStartTime: 0,
        last: l,
        tail: r,
        tailMode: o,
      })
    : ((i.isBackwards = n),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = l),
      (i.tail = r),
      (i.tailMode = o));
}
function wc(t, n, r) {
  var l = n.pendingProps,
    o = l.revealOrder,
    i = l.tail;
  if ((se(t, n, l.children, r), (l = A.current), l & 2))
    (l = (l & 1) | 2), (n.flags |= 128);
  else {
    if (t !== null && t.flags & 128)
      e: for (t = n.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && rs(t, r, n);
        else if (t.tag === 19) rs(t, r, n);
        else if (t.child !== null) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === n) break e;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === n) break e;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    l &= 1;
  }
  if ((F(A, l), !(n.mode & 1))) n.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (r = n.child, o = null; r !== null; )
          (t = r.alternate),
            t !== null && rl(t) === null && (o = r),
            (r = r.sibling);
        (r = o),
          r === null
            ? ((o = n.child), (n.child = null))
            : ((o = r.sibling), (r.sibling = null)),
          ro(n, !1, o, r, i);
        break;
      case "backwards":
        for (r = null, o = n.child, n.child = null; o !== null; ) {
          if (((t = o.alternate), t !== null && rl(t) === null)) {
            n.child = o;
            break;
          }
          (t = o.sibling), (o.sibling = r), (r = o), (o = t);
        }
        ro(n, !0, r, null, i);
        break;
      case "together":
        ro(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
  return n.child;
}
function Dr(t, n) {
  !(n.mode & 1) &&
    t !== null &&
    ((t.alternate = null), (n.alternate = null), (n.flags |= 2));
}
function Je(t, n, r) {
  if (
    (t !== null && (n.dependencies = t.dependencies),
    (It |= n.lanes),
    !(r & n.childLanes))
  )
    return null;
  if (t !== null && n.child !== t.child) throw Error(x(153));
  if (n.child !== null) {
    for (
      t = n.child, r = dt(t, t.pendingProps), n.child = r, r.return = n;
      t.sibling !== null;

    )
      (t = t.sibling), (r = r.sibling = dt(t, t.pendingProps)), (r.return = n);
    r.sibling = null;
  }
  return n.child;
}
function ap(t, n, r) {
  switch (n.tag) {
    case 3:
      gc(n), un();
      break;
    case 5:
      Qa(n);
      break;
    case 1:
      me(n.type) && Zr(n);
      break;
    case 4:
      Ii(n, n.stateNode.containerInfo);
      break;
    case 10:
      var l = n.type._context,
        o = n.memoizedProps.value;
      F(el, l._currentValue), (l._currentValue = o);
      break;
    case 13:
      if (((l = n.memoizedState), l !== null))
        return l.dehydrated !== null
          ? (F(A, A.current & 1), (n.flags |= 128), null)
          : r & n.child.childLanes
          ? yc(t, n, r)
          : (F(A, A.current & 1),
            (t = Je(t, n, r)),
            t !== null ? t.sibling : null);
      F(A, A.current & 1);
      break;
    case 19:
      if (((l = (r & n.childLanes) !== 0), t.flags & 128)) {
        if (l) return wc(t, n, r);
        n.flags |= 128;
      }
      if (
        ((o = n.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        F(A, A.current),
        l)
      )
        break;
      return null;
    case 22:
    case 23:
      return (n.lanes = 0), mc(t, n, r);
  }
  return Je(t, n, r);
}
var Sc, Ko, kc, xc;
Sc = function (t, n) {
  for (var r = n.child; r !== null; ) {
    if (r.tag === 5 || r.tag === 6) t.appendChild(r.stateNode);
    else if (r.tag !== 4 && r.child !== null) {
      (r.child.return = r), (r = r.child);
      continue;
    }
    if (r === n) break;
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === n) return;
      r = r.return;
    }
    (r.sibling.return = r.return), (r = r.sibling);
  }
};
Ko = function () {};
kc = function (t, n, r, l) {
  var o = t.memoizedProps;
  if (o !== l) {
    (t = n.stateNode), jt(Ae.current);
    var i = null;
    switch (r) {
      case "input":
        (o = ho(t, o)), (l = ho(t, l)), (i = []);
        break;
      case "select":
        (o = W({}, o, { value: void 0 })),
          (l = W({}, l, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = go(t, o)), (l = go(t, l)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof l.onClick == "function" &&
          (t.onclick = Gr);
    }
    wo(r, l);
    var u;
    r = null;
    for (c in o)
      if (!l.hasOwnProperty(c) && o.hasOwnProperty(c) && o[c] != null)
        if (c === "style") {
          var s = o[c];
          for (u in s) s.hasOwnProperty(u) && (r || (r = {}), (r[u] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            ($n.hasOwnProperty(c)
              ? i || (i = [])
              : (i = i || []).push(c, null));
    for (c in l) {
      var a = l[c];
      if (
        ((s = o != null ? o[c] : void 0),
        l.hasOwnProperty(c) && a !== s && (a != null || s != null))
      )
        if (c === "style")
          if (s) {
            for (u in s)
              !s.hasOwnProperty(u) ||
                (a && a.hasOwnProperty(u)) ||
                (r || (r = {}), (r[u] = ""));
            for (u in a)
              a.hasOwnProperty(u) &&
                s[u] !== a[u] &&
                (r || (r = {}), (r[u] = a[u]));
          } else r || (i || (i = []), i.push(c, r)), (r = a);
        else
          c === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (s = s ? s.__html : void 0),
              a != null && s !== a && (i = i || []).push(c, a))
            : c === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (i = i || []).push(c, "" + a)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              ($n.hasOwnProperty(c)
                ? (a != null && c === "onScroll" && U("scroll", t),
                  i || s === a || (i = []))
                : (i = i || []).push(c, a));
    }
    r && (i = i || []).push("style", r);
    var c = i;
    (n.updateQueue = c) && (n.flags |= 4);
  }
};
xc = function (t, n, r, l) {
  r !== l && (n.flags |= 4);
};
function _n(t, n) {
  if (!B)
    switch (t.tailMode) {
      case "hidden":
        n = t.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null ? (t.tail = null) : (r.sibling = null);
        break;
      case "collapsed":
        r = t.tail;
        for (var l = null; r !== null; )
          r.alternate !== null && (l = r), (r = r.sibling);
        l === null
          ? n || t.tail === null
            ? (t.tail = null)
            : (t.tail.sibling = null)
          : (l.sibling = null);
    }
}
function oe(t) {
  var n = t.alternate !== null && t.alternate.child === t.child,
    r = 0,
    l = 0;
  if (n)
    for (var o = t.child; o !== null; )
      (r |= o.lanes | o.childLanes),
        (l |= o.subtreeFlags & 14680064),
        (l |= o.flags & 14680064),
        (o.return = t),
        (o = o.sibling);
  else
    for (o = t.child; o !== null; )
      (r |= o.lanes | o.childLanes),
        (l |= o.subtreeFlags),
        (l |= o.flags),
        (o.return = t),
        (o = o.sibling);
  return (t.subtreeFlags |= l), (t.childLanes = r), n;
}
function cp(t, n, r) {
  var l = n.pendingProps;
  switch ((Pi(n), n.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return oe(n), null;
    case 1:
      return me(n.type) && Jr(), oe(n), null;
    case 3:
      return (
        (l = n.stateNode),
        an(),
        $(he),
        $(ue),
        Di(),
        l.pendingContext &&
          ((l.context = l.pendingContext), (l.pendingContext = null)),
        (t === null || t.child === null) &&
          (xr(n)
            ? (n.flags |= 4)
            : t === null ||
              (t.memoizedState.isDehydrated && !(n.flags & 256)) ||
              ((n.flags |= 1024), Oe !== null && (ei(Oe), (Oe = null)))),
        Ko(t, n),
        oe(n),
        null
      );
    case 5:
      Mi(n);
      var o = jt(Zn.current);
      if (((r = n.type), t !== null && n.stateNode != null))
        kc(t, n, r, l, o),
          t.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
      else {
        if (!l) {
          if (n.stateNode === null) throw Error(x(166));
          return oe(n), null;
        }
        if (((t = jt(Ae.current)), xr(n))) {
          (l = n.stateNode), (r = n.type);
          var i = n.memoizedProps;
          switch (((l[$e] = n), (l[Gn] = i), (t = (n.mode & 1) !== 0), r)) {
            case "dialog":
              U("cancel", l), U("close", l);
              break;
            case "iframe":
            case "object":
            case "embed":
              U("load", l);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Tn.length; o++) U(Tn[o], l);
              break;
            case "source":
              U("error", l);
              break;
            case "img":
            case "image":
            case "link":
              U("error", l), U("load", l);
              break;
            case "details":
              U("toggle", l);
              break;
            case "input":
              du(l, i), U("invalid", l);
              break;
            case "select":
              (l._wrapperState = { wasMultiple: !!i.multiple }),
                U("invalid", l);
              break;
            case "textarea":
              hu(l, i), U("invalid", l);
          }
          wo(r, i), (o = null);
          for (var u in i)
            if (i.hasOwnProperty(u)) {
              var s = i[u];
              u === "children"
                ? typeof s == "string"
                  ? l.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 &&
                      kr(l.textContent, s, t),
                    (o = ["children", s]))
                  : typeof s == "number" &&
                    l.textContent !== "" + s &&
                    (i.suppressHydrationWarning !== !0 &&
                      kr(l.textContent, s, t),
                    (o = ["children", "" + s]))
                : $n.hasOwnProperty(u) &&
                  s != null &&
                  u === "onScroll" &&
                  U("scroll", l);
            }
          switch (r) {
            case "input":
              pr(l), pu(l, i, !0);
              break;
            case "textarea":
              pr(l), mu(l);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (l.onclick = Gr);
          }
          (l = o), (n.updateQueue = l), l !== null && (n.flags |= 4);
        } else {
          (u = o.nodeType === 9 ? o : o.ownerDocument),
            t === "http://www.w3.org/1999/xhtml" && (t = Js(r)),
            t === "http://www.w3.org/1999/xhtml"
              ? r === "script"
                ? ((t = u.createElement("div")),
                  (t.innerHTML = "<script></script>"),
                  (t = t.removeChild(t.firstChild)))
                : typeof l.is == "string"
                ? (t = u.createElement(r, { is: l.is }))
                : ((t = u.createElement(r)),
                  r === "select" &&
                    ((u = t),
                    l.multiple
                      ? (u.multiple = !0)
                      : l.size && (u.size = l.size)))
              : (t = u.createElementNS(t, r)),
            (t[$e] = n),
            (t[Gn] = l),
            Sc(t, n, !1, !1),
            (n.stateNode = t);
          e: {
            switch (((u = So(r, l)), r)) {
              case "dialog":
                U("cancel", t), U("close", t), (o = l);
                break;
              case "iframe":
              case "object":
              case "embed":
                U("load", t), (o = l);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Tn.length; o++) U(Tn[o], t);
                o = l;
                break;
              case "source":
                U("error", t), (o = l);
                break;
              case "img":
              case "image":
              case "link":
                U("error", t), U("load", t), (o = l);
                break;
              case "details":
                U("toggle", t), (o = l);
                break;
              case "input":
                du(t, l), (o = ho(t, l)), U("invalid", t);
                break;
              case "option":
                o = l;
                break;
              case "select":
                (t._wrapperState = { wasMultiple: !!l.multiple }),
                  (o = W({}, l, { value: void 0 })),
                  U("invalid", t);
                break;
              case "textarea":
                hu(t, l), (o = go(t, l)), U("invalid", t);
                break;
              default:
                o = l;
            }
            wo(r, o), (s = o);
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var a = s[i];
                i === "style"
                  ? bs(t, a)
                  : i === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && Zs(t, a))
                  : i === "children"
                  ? typeof a == "string"
                    ? (r !== "textarea" || a !== "") && Bn(t, a)
                    : typeof a == "number" && Bn(t, "" + a)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    ($n.hasOwnProperty(i)
                      ? a != null && i === "onScroll" && U("scroll", t)
                      : a != null && di(t, i, a, u));
              }
            switch (r) {
              case "input":
                pr(t), pu(t, l, !1);
                break;
              case "textarea":
                pr(t), mu(t);
                break;
              case "option":
                l.value != null && t.setAttribute("value", "" + ht(l.value));
                break;
              case "select":
                (t.multiple = !!l.multiple),
                  (i = l.value),
                  i != null
                    ? qt(t, !!l.multiple, i, !1)
                    : l.defaultValue != null &&
                      qt(t, !!l.multiple, l.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (t.onclick = Gr);
            }
            switch (r) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!l.autoFocus;
                break e;
              case "img":
                l = !0;
                break e;
              default:
                l = !1;
            }
          }
          l && (n.flags |= 4);
        }
        n.ref !== null && ((n.flags |= 512), (n.flags |= 2097152));
      }
      return oe(n), null;
    case 6:
      if (t && n.stateNode != null) xc(t, n, t.memoizedProps, l);
      else {
        if (typeof l != "string" && n.stateNode === null) throw Error(x(166));
        if (((r = jt(Zn.current)), jt(Ae.current), xr(n))) {
          if (
            ((l = n.stateNode),
            (r = n.memoizedProps),
            (l[$e] = n),
            (i = l.nodeValue !== r) && ((t = we), t !== null))
          )
            switch (t.tag) {
              case 3:
                kr(l.nodeValue, r, (t.mode & 1) !== 0);
                break;
              case 5:
                t.memoizedProps.suppressHydrationWarning !== !0 &&
                  kr(l.nodeValue, r, (t.mode & 1) !== 0);
            }
          i && (n.flags |= 4);
        } else
          (l = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(l)),
            (l[$e] = n),
            (n.stateNode = l);
      }
      return oe(n), null;
    case 13:
      if (
        ($(A),
        (l = n.memoizedState),
        t === null ||
          (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
      ) {
        if (B && ye !== null && n.mode & 1 && !(n.flags & 128))
          Ba(), un(), (n.flags |= 98560), (i = !1);
        else if (((i = xr(n)), l !== null && l.dehydrated !== null)) {
          if (t === null) {
            if (!i) throw Error(x(318));
            if (
              ((i = n.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(x(317));
            i[$e] = n;
          } else
            un(), !(n.flags & 128) && (n.memoizedState = null), (n.flags |= 4);
          oe(n), (i = !1);
        } else Oe !== null && (ei(Oe), (Oe = null)), (i = !0);
        if (!i) return n.flags & 65536 ? n : null;
      }
      return n.flags & 128
        ? ((n.lanes = r), n)
        : ((l = l !== null),
          l !== (t !== null && t.memoizedState !== null) &&
            l &&
            ((n.child.flags |= 8192),
            n.mode & 1 &&
              (t === null || A.current & 1 ? Z === 0 && (Z = 3) : Xi())),
          n.updateQueue !== null && (n.flags |= 4),
          oe(n),
          null);
    case 4:
      return (
        an(), Ko(t, n), t === null && Yn(n.stateNode.containerInfo), oe(n), null
      );
    case 10:
      return Li(n.type._context), oe(n), null;
    case 17:
      return me(n.type) && Jr(), oe(n), null;
    case 19:
      if (($(A), (i = n.memoizedState), i === null)) return oe(n), null;
      if (((l = (n.flags & 128) !== 0), (u = i.rendering), u === null))
        if (l) _n(i, !1);
        else {
          if (Z !== 0 || (t !== null && t.flags & 128))
            for (t = n.child; t !== null; ) {
              if (((u = rl(t)), u !== null)) {
                for (
                  n.flags |= 128,
                    _n(i, !1),
                    l = u.updateQueue,
                    l !== null && ((n.updateQueue = l), (n.flags |= 4)),
                    n.subtreeFlags = 0,
                    l = r,
                    r = n.child;
                  r !== null;

                )
                  (i = r),
                    (t = l),
                    (i.flags &= 14680066),
                    (u = i.alternate),
                    u === null
                      ? ((i.childLanes = 0),
                        (i.lanes = t),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = u.childLanes),
                        (i.lanes = u.lanes),
                        (i.child = u.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = u.memoizedProps),
                        (i.memoizedState = u.memoizedState),
                        (i.updateQueue = u.updateQueue),
                        (i.type = u.type),
                        (t = u.dependencies),
                        (i.dependencies =
                          t === null
                            ? null
                            : {
                                lanes: t.lanes,
                                firstContext: t.firstContext,
                              })),
                    (r = r.sibling);
                return F(A, (A.current & 1) | 2), n.child;
              }
              t = t.sibling;
            }
          i.tail !== null &&
            Y() > fn &&
            ((n.flags |= 128), (l = !0), _n(i, !1), (n.lanes = 4194304));
        }
      else {
        if (!l)
          if (((t = rl(u)), t !== null)) {
            if (
              ((n.flags |= 128),
              (l = !0),
              (r = t.updateQueue),
              r !== null && ((n.updateQueue = r), (n.flags |= 4)),
              _n(i, !0),
              i.tail === null && i.tailMode === "hidden" && !u.alternate && !B)
            )
              return oe(n), null;
          } else
            2 * Y() - i.renderingStartTime > fn &&
              r !== 1073741824 &&
              ((n.flags |= 128), (l = !0), _n(i, !1), (n.lanes = 4194304));
        i.isBackwards
          ? ((u.sibling = n.child), (n.child = u))
          : ((r = i.last),
            r !== null ? (r.sibling = u) : (n.child = u),
            (i.last = u));
      }
      return i.tail !== null
        ? ((n = i.tail),
          (i.rendering = n),
          (i.tail = n.sibling),
          (i.renderingStartTime = Y()),
          (n.sibling = null),
          (r = A.current),
          F(A, l ? (r & 1) | 2 : r & 1),
          n)
        : (oe(n), null);
    case 22:
    case 23:
      return (
        Yi(),
        (l = n.memoizedState !== null),
        t !== null && (t.memoizedState !== null) !== l && (n.flags |= 8192),
        l && n.mode & 1
          ? ge & 1073741824 && (oe(n), n.subtreeFlags & 6 && (n.flags |= 8192))
          : oe(n),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(x(156, n.tag));
}
function fp(t, n) {
  switch ((Pi(n), n.tag)) {
    case 1:
      return (
        me(n.type) && Jr(),
        (t = n.flags),
        t & 65536 ? ((n.flags = (t & -65537) | 128), n) : null
      );
    case 3:
      return (
        an(),
        $(he),
        $(ue),
        Di(),
        (t = n.flags),
        t & 65536 && !(t & 128) ? ((n.flags = (t & -65537) | 128), n) : null
      );
    case 5:
      return Mi(n), null;
    case 13:
      if (($(A), (t = n.memoizedState), t !== null && t.dehydrated !== null)) {
        if (n.alternate === null) throw Error(x(340));
        un();
      }
      return (
        (t = n.flags), t & 65536 ? ((n.flags = (t & -65537) | 128), n) : null
      );
    case 19:
      return $(A), null;
    case 4:
      return an(), null;
    case 10:
      return Li(n.type._context), null;
    case 22:
    case 23:
      return Yi(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Cr = !1,
  ie = !1,
  dp = typeof WeakSet == "function" ? WeakSet : Set,
  N = null;
function Gt(t, n) {
  var r = t.ref;
  if (r !== null)
    if (typeof r == "function")
      try {
        r(null);
      } catch (l) {
        H(t, n, l);
      }
    else r.current = null;
}
function Yo(t, n, r) {
  try {
    r();
  } catch (l) {
    H(t, n, l);
  }
}
var ls = !1;
function pp(t, n) {
  if (((Ro = Kr), (t = Pa()), Ci(t))) {
    if ("selectionStart" in t)
      var r = { start: t.selectionStart, end: t.selectionEnd };
    else
      e: {
        r = ((r = t.ownerDocument) && r.defaultView) || window;
        var l = r.getSelection && r.getSelection();
        if (l && l.rangeCount !== 0) {
          r = l.anchorNode;
          var o = l.anchorOffset,
            i = l.focusNode;
          l = l.focusOffset;
          try {
            r.nodeType, i.nodeType;
          } catch {
            r = null;
            break e;
          }
          var u = 0,
            s = -1,
            a = -1,
            c = 0,
            m = 0,
            h = t,
            v = null;
          t: for (;;) {
            for (
              var w;
              h !== r || (o !== 0 && h.nodeType !== 3) || (s = u + o),
                h !== i || (l !== 0 && h.nodeType !== 3) || (a = u + l),
                h.nodeType === 3 && (u += h.nodeValue.length),
                (w = h.firstChild) !== null;

            )
              (v = h), (h = w);
            for (;;) {
              if (h === t) break t;
              if (
                (v === r && ++c === o && (s = u),
                v === i && ++m === l && (a = u),
                (w = h.nextSibling) !== null)
              )
                break;
              (h = v), (v = h.parentNode);
            }
            h = w;
          }
          r = s === -1 || a === -1 ? null : { start: s, end: a };
        } else r = null;
      }
    r = r || { start: 0, end: 0 };
  } else r = null;
  for (Lo = { focusedElem: t, selectionRange: r }, Kr = !1, N = n; N !== null; )
    if (((n = N), (t = n.child), (n.subtreeFlags & 1028) !== 0 && t !== null))
      (t.return = n), (N = t);
    else
      for (; N !== null; ) {
        n = N;
        try {
          var S = n.alternate;
          if (n.flags & 1024)
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (S !== null) {
                  var k = S.memoizedProps,
                    C = S.memoizedState,
                    d = n.stateNode,
                    f = d.getSnapshotBeforeUpdate(
                      n.elementType === n.type ? k : Le(n.type, k),
                      C
                    );
                  d.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var p = n.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(x(163));
            }
        } catch (g) {
          H(n, n.return, g);
        }
        if (((t = n.sibling), t !== null)) {
          (t.return = n.return), (N = t);
          break;
        }
        N = n.return;
      }
  return (S = ls), (ls = !1), S;
}
function Dn(t, n, r) {
  var l = n.updateQueue;
  if (((l = l !== null ? l.lastEffect : null), l !== null)) {
    var o = (l = l.next);
    do {
      if ((o.tag & t) === t) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && Yo(n, r, i);
      }
      o = o.next;
    } while (o !== l);
  }
}
function El(t, n) {
  if (
    ((n = n.updateQueue), (n = n !== null ? n.lastEffect : null), n !== null)
  ) {
    var r = (n = n.next);
    do {
      if ((r.tag & t) === t) {
        var l = r.create;
        r.destroy = l();
      }
      r = r.next;
    } while (r !== n);
  }
}
function Xo(t) {
  var n = t.ref;
  if (n !== null) {
    var r = t.stateNode;
    switch (t.tag) {
      case 5:
        t = r;
        break;
      default:
        t = r;
    }
    typeof n == "function" ? n(t) : (n.current = t);
  }
}
function Ec(t) {
  var n = t.alternate;
  n !== null && ((t.alternate = null), Ec(n)),
    (t.child = null),
    (t.deletions = null),
    (t.sibling = null),
    t.tag === 5 &&
      ((n = t.stateNode),
      n !== null &&
        (delete n[$e], delete n[Gn], delete n[Io], delete n[Gd], delete n[Jd])),
    (t.stateNode = null),
    (t.return = null),
    (t.dependencies = null),
    (t.memoizedProps = null),
    (t.memoizedState = null),
    (t.pendingProps = null),
    (t.stateNode = null),
    (t.updateQueue = null);
}
function _c(t) {
  return t.tag === 5 || t.tag === 3 || t.tag === 4;
}
function os(t) {
  e: for (;;) {
    for (; t.sibling === null; ) {
      if (t.return === null || _c(t.return)) return null;
      t = t.return;
    }
    for (
      t.sibling.return = t.return, t = t.sibling;
      t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

    ) {
      if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
      (t.child.return = t), (t = t.child);
    }
    if (!(t.flags & 2)) return t.stateNode;
  }
}
function Go(t, n, r) {
  var l = t.tag;
  if (l === 5 || l === 6)
    (t = t.stateNode),
      n
        ? r.nodeType === 8
          ? r.parentNode.insertBefore(t, n)
          : r.insertBefore(t, n)
        : (r.nodeType === 8
            ? ((n = r.parentNode), n.insertBefore(t, r))
            : ((n = r), n.appendChild(t)),
          (r = r._reactRootContainer),
          r != null || n.onclick !== null || (n.onclick = Gr));
  else if (l !== 4 && ((t = t.child), t !== null))
    for (Go(t, n, r), t = t.sibling; t !== null; ) Go(t, n, r), (t = t.sibling);
}
function Jo(t, n, r) {
  var l = t.tag;
  if (l === 5 || l === 6)
    (t = t.stateNode), n ? r.insertBefore(t, n) : r.appendChild(t);
  else if (l !== 4 && ((t = t.child), t !== null))
    for (Jo(t, n, r), t = t.sibling; t !== null; ) Jo(t, n, r), (t = t.sibling);
}
var te = null,
  ze = !1;
function qe(t, n, r) {
  for (r = r.child; r !== null; ) Cc(t, n, r), (r = r.sibling);
}
function Cc(t, n, r) {
  if (Be && typeof Be.onCommitFiberUnmount == "function")
    try {
      Be.onCommitFiberUnmount(ml, r);
    } catch {}
  switch (r.tag) {
    case 5:
      ie || Gt(r, n);
    case 6:
      var l = te,
        o = ze;
      (te = null),
        qe(t, n, r),
        (te = l),
        (ze = o),
        te !== null &&
          (ze
            ? ((t = te),
              (r = r.stateNode),
              t.nodeType === 8 ? t.parentNode.removeChild(r) : t.removeChild(r))
            : te.removeChild(r.stateNode));
      break;
    case 18:
      te !== null &&
        (ze
          ? ((t = te),
            (r = r.stateNode),
            t.nodeType === 8
              ? Jl(t.parentNode, r)
              : t.nodeType === 1 && Jl(t, r),
            Hn(t))
          : Jl(te, r.stateNode));
      break;
    case 4:
      (l = te),
        (o = ze),
        (te = r.stateNode.containerInfo),
        (ze = !0),
        qe(t, n, r),
        (te = l),
        (ze = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ie &&
        ((l = r.updateQueue), l !== null && ((l = l.lastEffect), l !== null))
      ) {
        o = l = l.next;
        do {
          var i = o,
            u = i.destroy;
          (i = i.tag),
            u !== void 0 && (i & 2 || i & 4) && Yo(r, n, u),
            (o = o.next);
        } while (o !== l);
      }
      qe(t, n, r);
      break;
    case 1:
      if (
        !ie &&
        (Gt(r, n),
        (l = r.stateNode),
        typeof l.componentWillUnmount == "function")
      )
        try {
          (l.props = r.memoizedProps),
            (l.state = r.memoizedState),
            l.componentWillUnmount();
        } catch (s) {
          H(r, n, s);
        }
      qe(t, n, r);
      break;
    case 21:
      qe(t, n, r);
      break;
    case 22:
      r.mode & 1
        ? ((ie = (l = ie) || r.memoizedState !== null), qe(t, n, r), (ie = l))
        : qe(t, n, r);
      break;
    default:
      qe(t, n, r);
  }
}
function is(t) {
  var n = t.updateQueue;
  if (n !== null) {
    t.updateQueue = null;
    var r = t.stateNode;
    r === null && (r = t.stateNode = new dp()),
      n.forEach(function (l) {
        var o = xp.bind(null, t, l);
        r.has(l) || (r.add(l), l.then(o, o));
      });
  }
}
function Re(t, n) {
  var r = n.deletions;
  if (r !== null)
    for (var l = 0; l < r.length; l++) {
      var o = r[l];
      try {
        var i = t,
          u = n,
          s = u;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (te = s.stateNode), (ze = !1);
              break e;
            case 3:
              (te = s.stateNode.containerInfo), (ze = !0);
              break e;
            case 4:
              (te = s.stateNode.containerInfo), (ze = !0);
              break e;
          }
          s = s.return;
        }
        if (te === null) throw Error(x(160));
        Cc(i, u, o), (te = null), (ze = !1);
        var a = o.alternate;
        a !== null && (a.return = null), (o.return = null);
      } catch (c) {
        H(o, n, c);
      }
    }
  if (n.subtreeFlags & 12854)
    for (n = n.child; n !== null; ) Nc(n, t), (n = n.sibling);
}
function Nc(t, n) {
  var r = t.alternate,
    l = t.flags;
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Re(n, t), Fe(t), l & 4)) {
        try {
          Dn(3, t, t.return), El(3, t);
        } catch (k) {
          H(t, t.return, k);
        }
        try {
          Dn(5, t, t.return);
        } catch (k) {
          H(t, t.return, k);
        }
      }
      break;
    case 1:
      Re(n, t), Fe(t), l & 512 && r !== null && Gt(r, r.return);
      break;
    case 5:
      if (
        (Re(n, t),
        Fe(t),
        l & 512 && r !== null && Gt(r, r.return),
        t.flags & 32)
      ) {
        var o = t.stateNode;
        try {
          Bn(o, "");
        } catch (k) {
          H(t, t.return, k);
        }
      }
      if (l & 4 && ((o = t.stateNode), o != null)) {
        var i = t.memoizedProps,
          u = r !== null ? r.memoizedProps : i,
          s = t.type,
          a = t.updateQueue;
        if (((t.updateQueue = null), a !== null))
          try {
            s === "input" && i.type === "radio" && i.name != null && Xs(o, i),
              So(s, u);
            var c = So(s, i);
            for (u = 0; u < a.length; u += 2) {
              var m = a[u],
                h = a[u + 1];
              m === "style"
                ? bs(o, h)
                : m === "dangerouslySetInnerHTML"
                ? Zs(o, h)
                : m === "children"
                ? Bn(o, h)
                : di(o, m, h, c);
            }
            switch (s) {
              case "input":
                mo(o, i);
                break;
              case "textarea":
                Gs(o, i);
                break;
              case "select":
                var v = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var w = i.value;
                w != null
                  ? qt(o, !!i.multiple, w, !1)
                  : v !== !!i.multiple &&
                    (i.defaultValue != null
                      ? qt(o, !!i.multiple, i.defaultValue, !0)
                      : qt(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[Gn] = i;
          } catch (k) {
            H(t, t.return, k);
          }
      }
      break;
    case 6:
      if ((Re(n, t), Fe(t), l & 4)) {
        if (t.stateNode === null) throw Error(x(162));
        (o = t.stateNode), (i = t.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (k) {
          H(t, t.return, k);
        }
      }
      break;
    case 3:
      if (
        (Re(n, t), Fe(t), l & 4 && r !== null && r.memoizedState.isDehydrated)
      )
        try {
          Hn(n.containerInfo);
        } catch (k) {
          H(t, t.return, k);
        }
      break;
    case 4:
      Re(n, t), Fe(t);
      break;
    case 13:
      Re(n, t),
        Fe(t),
        (o = t.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Qi = Y())),
        l & 4 && is(t);
      break;
    case 22:
      if (
        ((m = r !== null && r.memoizedState !== null),
        t.mode & 1 ? ((ie = (c = ie) || m), Re(n, t), (ie = c)) : Re(n, t),
        Fe(t),
        l & 8192)
      ) {
        if (
          ((c = t.memoizedState !== null),
          (t.stateNode.isHidden = c) && !m && t.mode & 1)
        )
          for (N = t, m = t.child; m !== null; ) {
            for (h = N = m; N !== null; ) {
              switch (((v = N), (w = v.child), v.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Dn(4, v, v.return);
                  break;
                case 1:
                  Gt(v, v.return);
                  var S = v.stateNode;
                  if (typeof S.componentWillUnmount == "function") {
                    (l = v), (r = v.return);
                    try {
                      (n = l),
                        (S.props = n.memoizedProps),
                        (S.state = n.memoizedState),
                        S.componentWillUnmount();
                    } catch (k) {
                      H(l, r, k);
                    }
                  }
                  break;
                case 5:
                  Gt(v, v.return);
                  break;
                case 22:
                  if (v.memoizedState !== null) {
                    ss(h);
                    continue;
                  }
              }
              w !== null ? ((w.return = v), (N = w)) : ss(h);
            }
            m = m.sibling;
          }
        e: for (m = null, h = t; ; ) {
          if (h.tag === 5) {
            if (m === null) {
              m = h;
              try {
                (o = h.stateNode),
                  c
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((s = h.stateNode),
                      (a = h.memoizedProps.style),
                      (u =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (s.style.display = qs("display", u)));
              } catch (k) {
                H(t, t.return, k);
              }
            }
          } else if (h.tag === 6) {
            if (m === null)
              try {
                h.stateNode.nodeValue = c ? "" : h.memoizedProps;
              } catch (k) {
                H(t, t.return, k);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === t) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === t) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === t) break e;
            m === h && (m = null), (h = h.return);
          }
          m === h && (m = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      Re(n, t), Fe(t), l & 4 && is(t);
      break;
    case 21:
      break;
    default:
      Re(n, t), Fe(t);
  }
}
function Fe(t) {
  var n = t.flags;
  if (n & 2) {
    try {
      e: {
        for (var r = t.return; r !== null; ) {
          if (_c(r)) {
            var l = r;
            break e;
          }
          r = r.return;
        }
        throw Error(x(160));
      }
      switch (l.tag) {
        case 5:
          var o = l.stateNode;
          l.flags & 32 && (Bn(o, ""), (l.flags &= -33));
          var i = os(t);
          Jo(t, i, o);
          break;
        case 3:
        case 4:
          var u = l.stateNode.containerInfo,
            s = os(t);
          Go(t, s, u);
          break;
        default:
          throw Error(x(161));
      }
    } catch (a) {
      H(t, t.return, a);
    }
    t.flags &= -3;
  }
  n & 4096 && (t.flags &= -4097);
}
function hp(t, n, r) {
  (N = t), Pc(t);
}
function Pc(t, n, r) {
  for (var l = (t.mode & 1) !== 0; N !== null; ) {
    var o = N,
      i = o.child;
    if (o.tag === 22 && l) {
      var u = o.memoizedState !== null || Cr;
      if (!u) {
        var s = o.alternate,
          a = (s !== null && s.memoizedState !== null) || ie;
        s = Cr;
        var c = ie;
        if (((Cr = u), (ie = a) && !c))
          for (N = o; N !== null; )
            (u = N),
              (a = u.child),
              u.tag === 22 && u.memoizedState !== null
                ? as(o)
                : a !== null
                ? ((a.return = u), (N = a))
                : as(o);
        for (; i !== null; ) (N = i), Pc(i), (i = i.sibling);
        (N = o), (Cr = s), (ie = c);
      }
      us(t);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (N = i)) : us(t);
  }
}
function us(t) {
  for (; N !== null; ) {
    var n = N;
    if (n.flags & 8772) {
      var r = n.alternate;
      try {
        if (n.flags & 8772)
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              ie || El(5, n);
              break;
            case 1:
              var l = n.stateNode;
              if (n.flags & 4 && !ie)
                if (r === null) l.componentDidMount();
                else {
                  var o =
                    n.elementType === n.type
                      ? r.memoizedProps
                      : Le(n.type, r.memoizedProps);
                  l.componentDidUpdate(
                    o,
                    r.memoizedState,
                    l.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = n.updateQueue;
              i !== null && Qu(n, i, l);
              break;
            case 3:
              var u = n.updateQueue;
              if (u !== null) {
                if (((r = null), n.child !== null))
                  switch (n.child.tag) {
                    case 5:
                      r = n.child.stateNode;
                      break;
                    case 1:
                      r = n.child.stateNode;
                  }
                Qu(n, u, r);
              }
              break;
            case 5:
              var s = n.stateNode;
              if (r === null && n.flags & 4) {
                r = s;
                var a = n.memoizedProps;
                switch (n.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && r.focus();
                    break;
                  case "img":
                    a.src && (r.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (n.memoizedState === null) {
                var c = n.alternate;
                if (c !== null) {
                  var m = c.memoizedState;
                  if (m !== null) {
                    var h = m.dehydrated;
                    h !== null && Hn(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(x(163));
          }
        ie || (n.flags & 512 && Xo(n));
      } catch (v) {
        H(n, n.return, v);
      }
    }
    if (n === t) {
      N = null;
      break;
    }
    if (((r = n.sibling), r !== null)) {
      (r.return = n.return), (N = r);
      break;
    }
    N = n.return;
  }
}
function ss(t) {
  for (; N !== null; ) {
    var n = N;
    if (n === t) {
      N = null;
      break;
    }
    var r = n.sibling;
    if (r !== null) {
      (r.return = n.return), (N = r);
      break;
    }
    N = n.return;
  }
}
function as(t) {
  for (; N !== null; ) {
    var n = N;
    try {
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          var r = n.return;
          try {
            El(4, n);
          } catch (a) {
            H(n, r, a);
          }
          break;
        case 1:
          var l = n.stateNode;
          if (typeof l.componentDidMount == "function") {
            var o = n.return;
            try {
              l.componentDidMount();
            } catch (a) {
              H(n, o, a);
            }
          }
          var i = n.return;
          try {
            Xo(n);
          } catch (a) {
            H(n, i, a);
          }
          break;
        case 5:
          var u = n.return;
          try {
            Xo(n);
          } catch (a) {
            H(n, u, a);
          }
      }
    } catch (a) {
      H(n, n.return, a);
    }
    if (n === t) {
      N = null;
      break;
    }
    var s = n.sibling;
    if (s !== null) {
      (s.return = n.return), (N = s);
      break;
    }
    N = n.return;
  }
}
var mp = Math.ceil,
  il = Ze.ReactCurrentDispatcher,
  Wi = Ze.ReactCurrentOwner,
  Ne = Ze.ReactCurrentBatchConfig,
  M = 0,
  ee = null,
  X = null,
  ne = 0,
  ge = 0,
  Jt = gt(0),
  Z = 0,
  tr = null,
  It = 0,
  _l = 0,
  Hi = 0,
  Fn = null,
  de = null,
  Qi = 0,
  fn = 1 / 0,
  Ve = null,
  ul = !1,
  Zo = null,
  ct = null,
  Nr = !1,
  lt = null,
  sl = 0,
  Un = 0,
  qo = null,
  Fr = -1,
  Ur = 0;
function ae() {
  return M & 6 ? Y() : Fr !== -1 ? Fr : (Fr = Y());
}
function ft(t) {
  return t.mode & 1
    ? M & 2 && ne !== 0
      ? ne & -ne
      : qd.transition !== null
      ? (Ur === 0 && (Ur = fa()), Ur)
      : ((t = D),
        t !== 0 || ((t = window.event), (t = t === void 0 ? 16 : ya(t.type))),
        t)
    : 1;
}
function Me(t, n, r, l) {
  if (50 < Un) throw ((Un = 0), (qo = null), Error(x(185)));
  lr(t, r, l),
    (!(M & 2) || t !== ee) &&
      (t === ee && (!(M & 2) && (_l |= r), Z === 4 && nt(t, ne)),
      ve(t, l),
      r === 1 && M === 0 && !(n.mode & 1) && ((fn = Y() + 500), Sl && yt()));
}
function ve(t, n) {
  var r = t.callbackNode;
  qf(t, n);
  var l = Qr(t, t === ee ? ne : 0);
  if (l === 0)
    r !== null && yu(r), (t.callbackNode = null), (t.callbackPriority = 0);
  else if (((n = l & -l), t.callbackPriority !== n)) {
    if ((r != null && yu(r), n === 1))
      t.tag === 0 ? Zd(cs.bind(null, t)) : Fa(cs.bind(null, t)),
        Yd(function () {
          !(M & 6) && yt();
        }),
        (r = null);
    else {
      switch (da(l)) {
        case 1:
          r = gi;
          break;
        case 4:
          r = aa;
          break;
        case 16:
          r = Hr;
          break;
        case 536870912:
          r = ca;
          break;
        default:
          r = Hr;
      }
      r = Mc(r, jc.bind(null, t));
    }
    (t.callbackPriority = n), (t.callbackNode = r);
  }
}
function jc(t, n) {
  if (((Fr = -1), (Ur = 0), M & 6)) throw Error(x(327));
  var r = t.callbackNode;
  if (rn() && t.callbackNode !== r) return null;
  var l = Qr(t, t === ee ? ne : 0);
  if (l === 0) return null;
  if (l & 30 || l & t.expiredLanes || n) n = al(t, l);
  else {
    n = l;
    var o = M;
    M |= 2;
    var i = Rc();
    (ee !== t || ne !== n) && ((Ve = null), (fn = Y() + 500), Tt(t, n));
    do
      try {
        yp();
        break;
      } catch (s) {
        Tc(t, s);
      }
    while (!0);
    Ri(),
      (il.current = i),
      (M = o),
      X !== null ? (n = 0) : ((ee = null), (ne = 0), (n = Z));
  }
  if (n !== 0) {
    if (
      (n === 2 && ((o = Co(t)), o !== 0 && ((l = o), (n = bo(t, o)))), n === 1)
    )
      throw ((r = tr), Tt(t, 0), nt(t, l), ve(t, Y()), r);
    if (n === 6) nt(t, l);
    else {
      if (
        ((o = t.current.alternate),
        !(l & 30) &&
          !vp(o) &&
          ((n = al(t, l)),
          n === 2 && ((i = Co(t)), i !== 0 && ((l = i), (n = bo(t, i)))),
          n === 1))
      )
        throw ((r = tr), Tt(t, 0), nt(t, l), ve(t, Y()), r);
      switch (((t.finishedWork = o), (t.finishedLanes = l), n)) {
        case 0:
        case 1:
          throw Error(x(345));
        case 2:
          Ct(t, de, Ve);
          break;
        case 3:
          if (
            (nt(t, l), (l & 130023424) === l && ((n = Qi + 500 - Y()), 10 < n))
          ) {
            if (Qr(t, 0) !== 0) break;
            if (((o = t.suspendedLanes), (o & l) !== l)) {
              ae(), (t.pingedLanes |= t.suspendedLanes & o);
              break;
            }
            t.timeoutHandle = Oo(Ct.bind(null, t, de, Ve), n);
            break;
          }
          Ct(t, de, Ve);
          break;
        case 4:
          if ((nt(t, l), (l & 4194240) === l)) break;
          for (n = t.eventTimes, o = -1; 0 < l; ) {
            var u = 31 - Ie(l);
            (i = 1 << u), (u = n[u]), u > o && (o = u), (l &= ~i);
          }
          if (
            ((l = o),
            (l = Y() - l),
            (l =
              (120 > l
                ? 120
                : 480 > l
                ? 480
                : 1080 > l
                ? 1080
                : 1920 > l
                ? 1920
                : 3e3 > l
                ? 3e3
                : 4320 > l
                ? 4320
                : 1960 * mp(l / 1960)) - l),
            10 < l)
          ) {
            t.timeoutHandle = Oo(Ct.bind(null, t, de, Ve), l);
            break;
          }
          Ct(t, de, Ve);
          break;
        case 5:
          Ct(t, de, Ve);
          break;
        default:
          throw Error(x(329));
      }
    }
  }
  return ve(t, Y()), t.callbackNode === r ? jc.bind(null, t) : null;
}
function bo(t, n) {
  var r = Fn;
  return (
    t.current.memoizedState.isDehydrated && (Tt(t, n).flags |= 256),
    (t = al(t, n)),
    t !== 2 && ((n = de), (de = r), n !== null && ei(n)),
    t
  );
}
function ei(t) {
  de === null ? (de = t) : de.push.apply(de, t);
}
function vp(t) {
  for (var n = t; ; ) {
    if (n.flags & 16384) {
      var r = n.updateQueue;
      if (r !== null && ((r = r.stores), r !== null))
        for (var l = 0; l < r.length; l++) {
          var o = r[l],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!De(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((r = n.child), n.subtreeFlags & 16384 && r !== null))
      (r.return = n), (n = r);
    else {
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return !0;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }
  return !0;
}
function nt(t, n) {
  for (
    n &= ~Hi,
      n &= ~_l,
      t.suspendedLanes |= n,
      t.pingedLanes &= ~n,
      t = t.expirationTimes;
    0 < n;

  ) {
    var r = 31 - Ie(n),
      l = 1 << r;
    (t[r] = -1), (n &= ~l);
  }
}
function cs(t) {
  if (M & 6) throw Error(x(327));
  rn();
  var n = Qr(t, 0);
  if (!(n & 1)) return ve(t, Y()), null;
  var r = al(t, n);
  if (t.tag !== 0 && r === 2) {
    var l = Co(t);
    l !== 0 && ((n = l), (r = bo(t, l)));
  }
  if (r === 1) throw ((r = tr), Tt(t, 0), nt(t, n), ve(t, Y()), r);
  if (r === 6) throw Error(x(345));
  return (
    (t.finishedWork = t.current.alternate),
    (t.finishedLanes = n),
    Ct(t, de, Ve),
    ve(t, Y()),
    null
  );
}
function Ki(t, n) {
  var r = M;
  M |= 1;
  try {
    return t(n);
  } finally {
    (M = r), M === 0 && ((fn = Y() + 500), Sl && yt());
  }
}
function Mt(t) {
  lt !== null && lt.tag === 0 && !(M & 6) && rn();
  var n = M;
  M |= 1;
  var r = Ne.transition,
    l = D;
  try {
    if (((Ne.transition = null), (D = 1), t)) return t();
  } finally {
    (D = l), (Ne.transition = r), (M = n), !(M & 6) && yt();
  }
}
function Yi() {
  (ge = Jt.current), $(Jt);
}
function Tt(t, n) {
  (t.finishedWork = null), (t.finishedLanes = 0);
  var r = t.timeoutHandle;
  if ((r !== -1 && ((t.timeoutHandle = -1), Kd(r)), X !== null))
    for (r = X.return; r !== null; ) {
      var l = r;
      switch ((Pi(l), l.tag)) {
        case 1:
          (l = l.type.childContextTypes), l != null && Jr();
          break;
        case 3:
          an(), $(he), $(ue), Di();
          break;
        case 5:
          Mi(l);
          break;
        case 4:
          an();
          break;
        case 13:
          $(A);
          break;
        case 19:
          $(A);
          break;
        case 10:
          Li(l.type._context);
          break;
        case 22:
        case 23:
          Yi();
      }
      r = r.return;
    }
  if (
    ((ee = t),
    (X = t = dt(t.current, null)),
    (ne = ge = n),
    (Z = 0),
    (tr = null),
    (Hi = _l = It = 0),
    (de = Fn = null),
    Pt !== null)
  ) {
    for (n = 0; n < Pt.length; n++)
      if (((r = Pt[n]), (l = r.interleaved), l !== null)) {
        r.interleaved = null;
        var o = l.next,
          i = r.pending;
        if (i !== null) {
          var u = i.next;
          (i.next = o), (l.next = u);
        }
        r.pending = l;
      }
    Pt = null;
  }
  return t;
}
function Tc(t, n) {
  do {
    var r = X;
    try {
      if ((Ri(), (Ir.current = ol), ll)) {
        for (var l = V.memoizedState; l !== null; ) {
          var o = l.queue;
          o !== null && (o.pending = null), (l = l.next);
        }
        ll = !1;
      }
      if (
        ((Ot = 0),
        (b = J = V = null),
        (Mn = !1),
        (qn = 0),
        (Wi.current = null),
        r === null || r.return === null)
      ) {
        (Z = 1), (tr = n), (X = null);
        break;
      }
      e: {
        var i = t,
          u = r.return,
          s = r,
          a = n;
        if (
          ((n = ne),
          (s.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var c = a,
            m = s,
            h = m.tag;
          if (!(m.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var v = m.alternate;
            v
              ? ((m.updateQueue = v.updateQueue),
                (m.memoizedState = v.memoizedState),
                (m.lanes = v.lanes))
              : ((m.updateQueue = null), (m.memoizedState = null));
          }
          var w = Zu(u);
          if (w !== null) {
            (w.flags &= -257),
              qu(w, u, s, i, n),
              w.mode & 1 && Ju(i, c, n),
              (n = w),
              (a = c);
            var S = n.updateQueue;
            if (S === null) {
              var k = new Set();
              k.add(a), (n.updateQueue = k);
            } else S.add(a);
            break e;
          } else {
            if (!(n & 1)) {
              Ju(i, c, n), Xi();
              break e;
            }
            a = Error(x(426));
          }
        } else if (B && s.mode & 1) {
          var C = Zu(u);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256),
              qu(C, u, s, i, n),
              ji(cn(a, s));
            break e;
          }
        }
        (i = a = cn(a, s)),
          Z !== 4 && (Z = 2),
          Fn === null ? (Fn = [i]) : Fn.push(i),
          (i = u);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (n &= -n), (i.lanes |= n);
              var d = dc(i, a, n);
              Hu(i, d);
              break e;
            case 1:
              s = a;
              var f = i.type,
                p = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (ct === null || !ct.has(p))))
              ) {
                (i.flags |= 65536), (n &= -n), (i.lanes |= n);
                var g = pc(i, s, n);
                Hu(i, g);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      zc(r);
    } catch (E) {
      (n = E), X === r && r !== null && (X = r = r.return);
      continue;
    }
    break;
  } while (!0);
}
function Rc() {
  var t = il.current;
  return (il.current = ol), t === null ? ol : t;
}
function Xi() {
  (Z === 0 || Z === 3 || Z === 2) && (Z = 4),
    ee === null || (!(It & 268435455) && !(_l & 268435455)) || nt(ee, ne);
}
function al(t, n) {
  var r = M;
  M |= 2;
  var l = Rc();
  (ee !== t || ne !== n) && ((Ve = null), Tt(t, n));
  do
    try {
      gp();
      break;
    } catch (o) {
      Tc(t, o);
    }
  while (!0);
  if ((Ri(), (M = r), (il.current = l), X !== null)) throw Error(x(261));
  return (ee = null), (ne = 0), Z;
}
function gp() {
  for (; X !== null; ) Lc(X);
}
function yp() {
  for (; X !== null && !Wf(); ) Lc(X);
}
function Lc(t) {
  var n = Ic(t.alternate, t, ge);
  (t.memoizedProps = t.pendingProps),
    n === null ? zc(t) : (X = n),
    (Wi.current = null);
}
function zc(t) {
  var n = t;
  do {
    var r = n.alternate;
    if (((t = n.return), n.flags & 32768)) {
      if (((r = fp(r, n)), r !== null)) {
        (r.flags &= 32767), (X = r);
        return;
      }
      if (t !== null)
        (t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null);
      else {
        (Z = 6), (X = null);
        return;
      }
    } else if (((r = cp(r, n, ge)), r !== null)) {
      X = r;
      return;
    }
    if (((n = n.sibling), n !== null)) {
      X = n;
      return;
    }
    X = n = t;
  } while (n !== null);
  Z === 0 && (Z = 5);
}
function Ct(t, n, r) {
  var l = D,
    o = Ne.transition;
  try {
    (Ne.transition = null), (D = 1), wp(t, n, r, l);
  } finally {
    (Ne.transition = o), (D = l);
  }
  return null;
}
function wp(t, n, r, l) {
  do rn();
  while (lt !== null);
  if (M & 6) throw Error(x(327));
  r = t.finishedWork;
  var o = t.finishedLanes;
  if (r === null) return null;
  if (((t.finishedWork = null), (t.finishedLanes = 0), r === t.current))
    throw Error(x(177));
  (t.callbackNode = null), (t.callbackPriority = 0);
  var i = r.lanes | r.childLanes;
  if (
    (bf(t, i),
    t === ee && ((X = ee = null), (ne = 0)),
    (!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
      Nr ||
      ((Nr = !0),
      Mc(Hr, function () {
        return rn(), null;
      })),
    (i = (r.flags & 15990) !== 0),
    r.subtreeFlags & 15990 || i)
  ) {
    (i = Ne.transition), (Ne.transition = null);
    var u = D;
    D = 1;
    var s = M;
    (M |= 4),
      (Wi.current = null),
      pp(t, r),
      Nc(r, t),
      $d(Lo),
      (Kr = !!Ro),
      (Lo = Ro = null),
      (t.current = r),
      hp(r),
      Hf(),
      (M = s),
      (D = u),
      (Ne.transition = i);
  } else t.current = r;
  if (
    (Nr && ((Nr = !1), (lt = t), (sl = o)),
    (i = t.pendingLanes),
    i === 0 && (ct = null),
    Yf(r.stateNode),
    ve(t, Y()),
    n !== null)
  )
    for (l = t.onRecoverableError, r = 0; r < n.length; r++)
      (o = n[r]), l(o.value, { componentStack: o.stack, digest: o.digest });
  if (ul) throw ((ul = !1), (t = Zo), (Zo = null), t);
  return (
    sl & 1 && t.tag !== 0 && rn(),
    (i = t.pendingLanes),
    i & 1 ? (t === qo ? Un++ : ((Un = 0), (qo = t))) : (Un = 0),
    yt(),
    null
  );
}
function rn() {
  if (lt !== null) {
    var t = da(sl),
      n = Ne.transition,
      r = D;
    try {
      if (((Ne.transition = null), (D = 16 > t ? 16 : t), lt === null))
        var l = !1;
      else {
        if (((t = lt), (lt = null), (sl = 0), M & 6)) throw Error(x(331));
        var o = M;
        for (M |= 4, N = t.current; N !== null; ) {
          var i = N,
            u = i.child;
          if (N.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var c = s[a];
                for (N = c; N !== null; ) {
                  var m = N;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Dn(8, m, i);
                  }
                  var h = m.child;
                  if (h !== null) (h.return = m), (N = h);
                  else
                    for (; N !== null; ) {
                      m = N;
                      var v = m.sibling,
                        w = m.return;
                      if ((Ec(m), m === c)) {
                        N = null;
                        break;
                      }
                      if (v !== null) {
                        (v.return = w), (N = v);
                        break;
                      }
                      N = w;
                    }
                }
              }
              var S = i.alternate;
              if (S !== null) {
                var k = S.child;
                if (k !== null) {
                  S.child = null;
                  do {
                    var C = k.sibling;
                    (k.sibling = null), (k = C);
                  } while (k !== null);
                }
              }
              N = i;
            }
          }
          if (i.subtreeFlags & 2064 && u !== null) (u.return = i), (N = u);
          else
            e: for (; N !== null; ) {
              if (((i = N), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Dn(9, i, i.return);
                }
              var d = i.sibling;
              if (d !== null) {
                (d.return = i.return), (N = d);
                break e;
              }
              N = i.return;
            }
        }
        var f = t.current;
        for (N = f; N !== null; ) {
          u = N;
          var p = u.child;
          if (u.subtreeFlags & 2064 && p !== null) (p.return = u), (N = p);
          else
            e: for (u = f; N !== null; ) {
              if (((s = N), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      El(9, s);
                  }
                } catch (E) {
                  H(s, s.return, E);
                }
              if (s === u) {
                N = null;
                break e;
              }
              var g = s.sibling;
              if (g !== null) {
                (g.return = s.return), (N = g);
                break e;
              }
              N = s.return;
            }
        }
        if (
          ((M = o), yt(), Be && typeof Be.onPostCommitFiberRoot == "function")
        )
          try {
            Be.onPostCommitFiberRoot(ml, t);
          } catch {}
        l = !0;
      }
      return l;
    } finally {
      (D = r), (Ne.transition = n);
    }
  }
  return !1;
}
function fs(t, n, r) {
  (n = cn(r, n)),
    (n = dc(t, n, 1)),
    (t = at(t, n, 1)),
    (n = ae()),
    t !== null && (lr(t, 1, n), ve(t, n));
}
function H(t, n, r) {
  if (t.tag === 3) fs(t, t, r);
  else
    for (; n !== null; ) {
      if (n.tag === 3) {
        fs(n, t, r);
        break;
      } else if (n.tag === 1) {
        var l = n.stateNode;
        if (
          typeof n.type.getDerivedStateFromError == "function" ||
          (typeof l.componentDidCatch == "function" &&
            (ct === null || !ct.has(l)))
        ) {
          (t = cn(r, t)),
            (t = pc(n, t, 1)),
            (n = at(n, t, 1)),
            (t = ae()),
            n !== null && (lr(n, 1, t), ve(n, t));
          break;
        }
      }
      n = n.return;
    }
}
function Sp(t, n, r) {
  var l = t.pingCache;
  l !== null && l.delete(n),
    (n = ae()),
    (t.pingedLanes |= t.suspendedLanes & r),
    ee === t &&
      (ne & r) === r &&
      (Z === 4 || (Z === 3 && (ne & 130023424) === ne && 500 > Y() - Qi)
        ? Tt(t, 0)
        : (Hi |= r)),
    ve(t, n);
}
function Oc(t, n) {
  n === 0 &&
    (t.mode & 1
      ? ((n = vr), (vr <<= 1), !(vr & 130023424) && (vr = 4194304))
      : (n = 1));
  var r = ae();
  (t = Ge(t, n)), t !== null && (lr(t, n, r), ve(t, r));
}
function kp(t) {
  var n = t.memoizedState,
    r = 0;
  n !== null && (r = n.retryLane), Oc(t, r);
}
function xp(t, n) {
  var r = 0;
  switch (t.tag) {
    case 13:
      var l = t.stateNode,
        o = t.memoizedState;
      o !== null && (r = o.retryLane);
      break;
    case 19:
      l = t.stateNode;
      break;
    default:
      throw Error(x(314));
  }
  l !== null && l.delete(n), Oc(t, r);
}
var Ic;
Ic = function (t, n, r) {
  if (t !== null)
    if (t.memoizedProps !== n.pendingProps || he.current) pe = !0;
    else {
      if (!(t.lanes & r) && !(n.flags & 128)) return (pe = !1), ap(t, n, r);
      pe = !!(t.flags & 131072);
    }
  else (pe = !1), B && n.flags & 1048576 && Ua(n, br, n.index);
  switch (((n.lanes = 0), n.tag)) {
    case 2:
      var l = n.type;
      Dr(t, n), (t = n.pendingProps);
      var o = on(n, ue.current);
      nn(n, r), (o = Ui(null, n, l, t, o, r));
      var i = $i();
      return (
        (n.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((n.tag = 1),
            (n.memoizedState = null),
            (n.updateQueue = null),
            me(l) ? ((i = !0), Zr(n)) : (i = !1),
            (n.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Oi(n),
            (o.updater = xl),
            (n.stateNode = o),
            (o._reactInternals = n),
            Bo(n, l, t, r),
            (n = Wo(null, n, l, !0, i, r)))
          : ((n.tag = 0), B && i && Ni(n), se(null, n, o, r), (n = n.child)),
        n
      );
    case 16:
      l = n.elementType;
      e: {
        switch (
          (Dr(t, n),
          (t = n.pendingProps),
          (o = l._init),
          (l = o(l._payload)),
          (n.type = l),
          (o = n.tag = _p(l)),
          (t = Le(l, t)),
          o)
        ) {
          case 0:
            n = Vo(null, n, l, t, r);
            break e;
          case 1:
            n = ts(null, n, l, t, r);
            break e;
          case 11:
            n = bu(null, n, l, t, r);
            break e;
          case 14:
            n = es(null, n, l, Le(l.type, t), r);
            break e;
        }
        throw Error(x(306, l, ""));
      }
      return n;
    case 0:
      return (
        (l = n.type),
        (o = n.pendingProps),
        (o = n.elementType === l ? o : Le(l, o)),
        Vo(t, n, l, o, r)
      );
    case 1:
      return (
        (l = n.type),
        (o = n.pendingProps),
        (o = n.elementType === l ? o : Le(l, o)),
        ts(t, n, l, o, r)
      );
    case 3:
      e: {
        if ((gc(n), t === null)) throw Error(x(387));
        (l = n.pendingProps),
          (i = n.memoizedState),
          (o = i.element),
          Ha(t, n),
          nl(n, l, null, r);
        var u = n.memoizedState;
        if (((l = u.element), i.isDehydrated))
          if (
            ((i = {
              element: l,
              isDehydrated: !1,
              cache: u.cache,
              pendingSuspenseBoundaries: u.pendingSuspenseBoundaries,
              transitions: u.transitions,
            }),
            (n.updateQueue.baseState = i),
            (n.memoizedState = i),
            n.flags & 256)
          ) {
            (o = cn(Error(x(423)), n)), (n = ns(t, n, l, r, o));
            break e;
          } else if (l !== o) {
            (o = cn(Error(x(424)), n)), (n = ns(t, n, l, r, o));
            break e;
          } else
            for (
              ye = st(n.stateNode.containerInfo.firstChild),
                we = n,
                B = !0,
                Oe = null,
                r = Va(n, null, l, r),
                n.child = r;
              r;

            )
              (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
        else {
          if ((un(), l === o)) {
            n = Je(t, n, r);
            break e;
          }
          se(t, n, l, r);
        }
        n = n.child;
      }
      return n;
    case 5:
      return (
        Qa(n),
        t === null && Fo(n),
        (l = n.type),
        (o = n.pendingProps),
        (i = t !== null ? t.memoizedProps : null),
        (u = o.children),
        zo(l, o) ? (u = null) : i !== null && zo(l, i) && (n.flags |= 32),
        vc(t, n),
        se(t, n, u, r),
        n.child
      );
    case 6:
      return t === null && Fo(n), null;
    case 13:
      return yc(t, n, r);
    case 4:
      return (
        Ii(n, n.stateNode.containerInfo),
        (l = n.pendingProps),
        t === null ? (n.child = sn(n, null, l, r)) : se(t, n, l, r),
        n.child
      );
    case 11:
      return (
        (l = n.type),
        (o = n.pendingProps),
        (o = n.elementType === l ? o : Le(l, o)),
        bu(t, n, l, o, r)
      );
    case 7:
      return se(t, n, n.pendingProps, r), n.child;
    case 8:
      return se(t, n, n.pendingProps.children, r), n.child;
    case 12:
      return se(t, n, n.pendingProps.children, r), n.child;
    case 10:
      e: {
        if (
          ((l = n.type._context),
          (o = n.pendingProps),
          (i = n.memoizedProps),
          (u = o.value),
          F(el, l._currentValue),
          (l._currentValue = u),
          i !== null)
        )
          if (De(i.value, u)) {
            if (i.children === o.children && !he.current) {
              n = Je(t, n, r);
              break e;
            }
          } else
            for (i = n.child, i !== null && (i.return = n); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                u = i.child;
                for (var a = s.firstContext; a !== null; ) {
                  if (a.context === l) {
                    if (i.tag === 1) {
                      (a = Ke(-1, r & -r)), (a.tag = 2);
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var m = c.pending;
                        m === null
                          ? (a.next = a)
                          : ((a.next = m.next), (m.next = a)),
                          (c.pending = a);
                      }
                    }
                    (i.lanes |= r),
                      (a = i.alternate),
                      a !== null && (a.lanes |= r),
                      Uo(i.return, r, n),
                      (s.lanes |= r);
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) u = i.type === n.type ? null : i.child;
              else if (i.tag === 18) {
                if (((u = i.return), u === null)) throw Error(x(341));
                (u.lanes |= r),
                  (s = u.alternate),
                  s !== null && (s.lanes |= r),
                  Uo(u, r, n),
                  (u = i.sibling);
              } else u = i.child;
              if (u !== null) u.return = i;
              else
                for (u = i; u !== null; ) {
                  if (u === n) {
                    u = null;
                    break;
                  }
                  if (((i = u.sibling), i !== null)) {
                    (i.return = u.return), (u = i);
                    break;
                  }
                  u = u.return;
                }
              i = u;
            }
        se(t, n, o.children, r), (n = n.child);
      }
      return n;
    case 9:
      return (
        (o = n.type),
        (l = n.pendingProps.children),
        nn(n, r),
        (o = Pe(o)),
        (l = l(o)),
        (n.flags |= 1),
        se(t, n, l, r),
        n.child
      );
    case 14:
      return (
        (l = n.type),
        (o = Le(l, n.pendingProps)),
        (o = Le(l.type, o)),
        es(t, n, l, o, r)
      );
    case 15:
      return hc(t, n, n.type, n.pendingProps, r);
    case 17:
      return (
        (l = n.type),
        (o = n.pendingProps),
        (o = n.elementType === l ? o : Le(l, o)),
        Dr(t, n),
        (n.tag = 1),
        me(l) ? ((t = !0), Zr(n)) : (t = !1),
        nn(n, r),
        fc(n, l, o),
        Bo(n, l, o, r),
        Wo(null, n, l, !0, t, r)
      );
    case 19:
      return wc(t, n, r);
    case 22:
      return mc(t, n, r);
  }
  throw Error(x(156, n.tag));
};
function Mc(t, n) {
  return sa(t, n);
}
function Ep(t, n, r, l) {
  (this.tag = t),
    (this.key = r),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = n),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = l),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ce(t, n, r, l) {
  return new Ep(t, n, r, l);
}
function Gi(t) {
  return (t = t.prototype), !(!t || !t.isReactComponent);
}
function _p(t) {
  if (typeof t == "function") return Gi(t) ? 1 : 0;
  if (t != null) {
    if (((t = t.$$typeof), t === hi)) return 11;
    if (t === mi) return 14;
  }
  return 2;
}
function dt(t, n) {
  var r = t.alternate;
  return (
    r === null
      ? ((r = Ce(t.tag, n, t.key, t.mode)),
        (r.elementType = t.elementType),
        (r.type = t.type),
        (r.stateNode = t.stateNode),
        (r.alternate = t),
        (t.alternate = r))
      : ((r.pendingProps = n),
        (r.type = t.type),
        (r.flags = 0),
        (r.subtreeFlags = 0),
        (r.deletions = null)),
    (r.flags = t.flags & 14680064),
    (r.childLanes = t.childLanes),
    (r.lanes = t.lanes),
    (r.child = t.child),
    (r.memoizedProps = t.memoizedProps),
    (r.memoizedState = t.memoizedState),
    (r.updateQueue = t.updateQueue),
    (n = t.dependencies),
    (r.dependencies =
      n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
    (r.sibling = t.sibling),
    (r.index = t.index),
    (r.ref = t.ref),
    r
  );
}
function $r(t, n, r, l, o, i) {
  var u = 2;
  if (((l = t), typeof t == "function")) Gi(t) && (u = 1);
  else if (typeof t == "string") u = 5;
  else
    e: switch (t) {
      case Bt:
        return Rt(r.children, o, i, n);
      case pi:
        (u = 8), (o |= 8);
        break;
      case ao:
        return (
          (t = Ce(12, r, n, o | 2)), (t.elementType = ao), (t.lanes = i), t
        );
      case co:
        return (t = Ce(13, r, n, o)), (t.elementType = co), (t.lanes = i), t;
      case fo:
        return (t = Ce(19, r, n, o)), (t.elementType = fo), (t.lanes = i), t;
      case Qs:
        return Cl(r, o, i, n);
      default:
        if (typeof t == "object" && t !== null)
          switch (t.$$typeof) {
            case Ws:
              u = 10;
              break e;
            case Hs:
              u = 9;
              break e;
            case hi:
              u = 11;
              break e;
            case mi:
              u = 14;
              break e;
            case be:
              (u = 16), (l = null);
              break e;
          }
        throw Error(x(130, t == null ? t : typeof t, ""));
    }
  return (
    (n = Ce(u, r, n, o)), (n.elementType = t), (n.type = l), (n.lanes = i), n
  );
}
function Rt(t, n, r, l) {
  return (t = Ce(7, t, l, n)), (t.lanes = r), t;
}
function Cl(t, n, r, l) {
  return (
    (t = Ce(22, t, l, n)),
    (t.elementType = Qs),
    (t.lanes = r),
    (t.stateNode = { isHidden: !1 }),
    t
  );
}
function lo(t, n, r) {
  return (t = Ce(6, t, null, n)), (t.lanes = r), t;
}
function oo(t, n, r) {
  return (
    (n = Ce(4, t.children !== null ? t.children : [], t.key, n)),
    (n.lanes = r),
    (n.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation,
    }),
    n
  );
}
function Cp(t, n, r, l, o) {
  (this.tag = n),
    (this.containerInfo = t),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = $l(0)),
    (this.expirationTimes = $l(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = $l(0)),
    (this.identifierPrefix = l),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Ji(t, n, r, l, o, i, u, s, a) {
  return (
    (t = new Cp(t, n, r, s, a)),
    n === 1 ? ((n = 1), i === !0 && (n |= 8)) : (n = 0),
    (i = Ce(3, null, null, n)),
    (t.current = i),
    (i.stateNode = t),
    (i.memoizedState = {
      element: l,
      isDehydrated: r,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Oi(i),
    t
  );
}
function Np(t, n, r) {
  var l = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: $t,
    key: l == null ? null : "" + l,
    children: t,
    containerInfo: n,
    implementation: r,
  };
}
function Dc(t) {
  if (!t) return mt;
  t = t._reactInternals;
  e: {
    if (Ft(t) !== t || t.tag !== 1) throw Error(x(170));
    var n = t;
    do {
      switch (n.tag) {
        case 3:
          n = n.stateNode.context;
          break e;
        case 1:
          if (me(n.type)) {
            n = n.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      n = n.return;
    } while (n !== null);
    throw Error(x(171));
  }
  if (t.tag === 1) {
    var r = t.type;
    if (me(r)) return Da(t, r, n);
  }
  return n;
}
function Fc(t, n, r, l, o, i, u, s, a) {
  return (
    (t = Ji(r, l, !0, t, o, i, u, s, a)),
    (t.context = Dc(null)),
    (r = t.current),
    (l = ae()),
    (o = ft(r)),
    (i = Ke(l, o)),
    (i.callback = n ?? null),
    at(r, i, o),
    (t.current.lanes = o),
    lr(t, o, l),
    ve(t, l),
    t
  );
}
function Nl(t, n, r, l) {
  var o = n.current,
    i = ae(),
    u = ft(o);
  return (
    (r = Dc(r)),
    n.context === null ? (n.context = r) : (n.pendingContext = r),
    (n = Ke(i, u)),
    (n.payload = { element: t }),
    (l = l === void 0 ? null : l),
    l !== null && (n.callback = l),
    (t = at(o, n, u)),
    t !== null && (Me(t, o, u, i), Or(t, o, u)),
    u
  );
}
function cl(t) {
  if (((t = t.current), !t.child)) return null;
  switch (t.child.tag) {
    case 5:
      return t.child.stateNode;
    default:
      return t.child.stateNode;
  }
}
function ds(t, n) {
  if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
    var r = t.retryLane;
    t.retryLane = r !== 0 && r < n ? r : n;
  }
}
function Zi(t, n) {
  ds(t, n), (t = t.alternate) && ds(t, n);
}
function Pp() {
  return null;
}
var Uc =
  typeof reportError == "function"
    ? reportError
    : function (t) {
        console.error(t);
      };
function qi(t) {
  this._internalRoot = t;
}
Pl.prototype.render = qi.prototype.render = function (t) {
  var n = this._internalRoot;
  if (n === null) throw Error(x(409));
  Nl(t, n, null, null);
};
Pl.prototype.unmount = qi.prototype.unmount = function () {
  var t = this._internalRoot;
  if (t !== null) {
    this._internalRoot = null;
    var n = t.containerInfo;
    Mt(function () {
      Nl(null, t, null, null);
    }),
      (n[Xe] = null);
  }
};
function Pl(t) {
  this._internalRoot = t;
}
Pl.prototype.unstable_scheduleHydration = function (t) {
  if (t) {
    var n = ma();
    t = { blockedOn: null, target: t, priority: n };
    for (var r = 0; r < tt.length && n !== 0 && n < tt[r].priority; r++);
    tt.splice(r, 0, t), r === 0 && ga(t);
  }
};
function bi(t) {
  return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
}
function jl(t) {
  return !(
    !t ||
    (t.nodeType !== 1 &&
      t.nodeType !== 9 &&
      t.nodeType !== 11 &&
      (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "))
  );
}
function ps() {}
function jp(t, n, r, l, o) {
  if (o) {
    if (typeof l == "function") {
      var i = l;
      l = function () {
        var c = cl(u);
        i.call(c);
      };
    }
    var u = Fc(n, l, t, 0, null, !1, !1, "", ps);
    return (
      (t._reactRootContainer = u),
      (t[Xe] = u.current),
      Yn(t.nodeType === 8 ? t.parentNode : t),
      Mt(),
      u
    );
  }
  for (; (o = t.lastChild); ) t.removeChild(o);
  if (typeof l == "function") {
    var s = l;
    l = function () {
      var c = cl(a);
      s.call(c);
    };
  }
  var a = Ji(t, 0, !1, null, null, !1, !1, "", ps);
  return (
    (t._reactRootContainer = a),
    (t[Xe] = a.current),
    Yn(t.nodeType === 8 ? t.parentNode : t),
    Mt(function () {
      Nl(n, a, r, l);
    }),
    a
  );
}
function Tl(t, n, r, l, o) {
  var i = r._reactRootContainer;
  if (i) {
    var u = i;
    if (typeof o == "function") {
      var s = o;
      o = function () {
        var a = cl(u);
        s.call(a);
      };
    }
    Nl(n, u, t, o);
  } else u = jp(r, n, t, o, l);
  return cl(u);
}
pa = function (t) {
  switch (t.tag) {
    case 3:
      var n = t.stateNode;
      if (n.current.memoizedState.isDehydrated) {
        var r = jn(n.pendingLanes);
        r !== 0 &&
          (yi(n, r | 1), ve(n, Y()), !(M & 6) && ((fn = Y() + 500), yt()));
      }
      break;
    case 13:
      Mt(function () {
        var l = Ge(t, 1);
        if (l !== null) {
          var o = ae();
          Me(l, t, 1, o);
        }
      }),
        Zi(t, 1);
  }
};
wi = function (t) {
  if (t.tag === 13) {
    var n = Ge(t, 134217728);
    if (n !== null) {
      var r = ae();
      Me(n, t, 134217728, r);
    }
    Zi(t, 134217728);
  }
};
ha = function (t) {
  if (t.tag === 13) {
    var n = ft(t),
      r = Ge(t, n);
    if (r !== null) {
      var l = ae();
      Me(r, t, n, l);
    }
    Zi(t, n);
  }
};
ma = function () {
  return D;
};
va = function (t, n) {
  var r = D;
  try {
    return (D = t), n();
  } finally {
    D = r;
  }
};
xo = function (t, n, r) {
  switch (n) {
    case "input":
      if ((mo(t, r), (n = r.name), r.type === "radio" && n != null)) {
        for (r = t; r.parentNode; ) r = r.parentNode;
        for (
          r = r.querySelectorAll(
            "input[name=" + JSON.stringify("" + n) + '][type="radio"]'
          ),
            n = 0;
          n < r.length;
          n++
        ) {
          var l = r[n];
          if (l !== t && l.form === t.form) {
            var o = wl(l);
            if (!o) throw Error(x(90));
            Ys(l), mo(l, o);
          }
        }
      }
      break;
    case "textarea":
      Gs(t, r);
      break;
    case "select":
      (n = r.value), n != null && qt(t, !!r.multiple, n, !1);
  }
};
na = Ki;
ra = Mt;
var Tp = { usingClientEntryPoint: !1, Events: [ir, Ht, wl, ea, ta, Ki] },
  Cn = {
    findFiberByHostInstance: Nt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Rp = {
    bundleType: Cn.bundleType,
    version: Cn.version,
    rendererPackageName: Cn.rendererPackageName,
    rendererConfig: Cn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ze.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (t) {
      return (t = ia(t)), t === null ? null : t.stateNode;
    },
    findFiberByHostInstance: Cn.findFiberByHostInstance || Pp,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Pr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Pr.isDisabled && Pr.supportsFiber)
    try {
      (ml = Pr.inject(Rp)), (Be = Pr);
    } catch {}
}
ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Tp;
ke.createPortal = function (t, n) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!bi(n)) throw Error(x(200));
  return Np(t, n, null, r);
};
ke.createRoot = function (t, n) {
  if (!bi(t)) throw Error(x(299));
  var r = !1,
    l = "",
    o = Uc;
  return (
    n != null &&
      (n.unstable_strictMode === !0 && (r = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (n = Ji(t, 1, !1, null, null, r, !1, l, o)),
    (t[Xe] = n.current),
    Yn(t.nodeType === 8 ? t.parentNode : t),
    new qi(n)
  );
};
ke.findDOMNode = function (t) {
  if (t == null) return null;
  if (t.nodeType === 1) return t;
  var n = t._reactInternals;
  if (n === void 0)
    throw typeof t.render == "function"
      ? Error(x(188))
      : ((t = Object.keys(t).join(",")), Error(x(268, t)));
  return (t = ia(n)), (t = t === null ? null : t.stateNode), t;
};
ke.flushSync = function (t) {
  return Mt(t);
};
ke.hydrate = function (t, n, r) {
  if (!jl(n)) throw Error(x(200));
  return Tl(null, t, n, !0, r);
};
ke.hydrateRoot = function (t, n, r) {
  if (!bi(t)) throw Error(x(405));
  var l = (r != null && r.hydratedSources) || null,
    o = !1,
    i = "",
    u = Uc;
  if (
    (r != null &&
      (r.unstable_strictMode === !0 && (o = !0),
      r.identifierPrefix !== void 0 && (i = r.identifierPrefix),
      r.onRecoverableError !== void 0 && (u = r.onRecoverableError)),
    (n = Fc(n, null, t, 1, r ?? null, o, !1, i, u)),
    (t[Xe] = n.current),
    Yn(t),
    l)
  )
    for (t = 0; t < l.length; t++)
      (r = l[t]),
        (o = r._getVersion),
        (o = o(r._source)),
        n.mutableSourceEagerHydrationData == null
          ? (n.mutableSourceEagerHydrationData = [r, o])
          : n.mutableSourceEagerHydrationData.push(r, o);
  return new Pl(n);
};
ke.render = function (t, n, r) {
  if (!jl(n)) throw Error(x(200));
  return Tl(null, t, n, !1, r);
};
ke.unmountComponentAtNode = function (t) {
  if (!jl(t)) throw Error(x(40));
  return t._reactRootContainer
    ? (Mt(function () {
        Tl(null, null, t, !1, function () {
          (t._reactRootContainer = null), (t[Xe] = null);
        });
      }),
      !0)
    : !1;
};
ke.unstable_batchedUpdates = Ki;
ke.unstable_renderSubtreeIntoContainer = function (t, n, r, l) {
  if (!jl(r)) throw Error(x(200));
  if (t == null || t._reactInternals === void 0) throw Error(x(38));
  return Tl(t, n, r, !1, l);
};
ke.version = "18.3.1-next-f1338f8080-20240426";
function $c() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($c);
    } catch (t) {
      console.error(t);
    }
}
$c(), ($s.exports = ke);
var Lp = $s.exports,
  hs = Lp;
(uo.createRoot = hs.createRoot), (uo.hydrateRoot = hs.hydrateRoot);
/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ti() {
  return (
    (ti = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var n = 1; n < arguments.length; n++) {
            var r = arguments[n];
            for (var l in r)
              Object.prototype.hasOwnProperty.call(r, l) && (t[l] = r[l]);
          }
          return t;
        }),
    ti.apply(this, arguments)
  );
}
var fl;
(function (t) {
  (t.Pop = "POP"), (t.Push = "PUSH"), (t.Replace = "REPLACE");
})(fl || (fl = {}));
function G(t, n) {
  if (t === !1 || t === null || typeof t > "u") throw new Error(n);
}
function Bc(t, n) {
  if (!t) {
    typeof console < "u" && console.warn(n);
    try {
      throw new Error(n);
    } catch {}
  }
}
function ms(t) {
  let { pathname: n = "/", search: r = "", hash: l = "" } = t;
  return (
    r && r !== "?" && (n += r.charAt(0) === "?" ? r : "?" + r),
    l && l !== "#" && (n += l.charAt(0) === "#" ? l : "#" + l),
    n
  );
}
function sr(t) {
  let n = {};
  if (t) {
    let r = t.indexOf("#");
    r >= 0 && ((n.hash = t.substr(r)), (t = t.substr(0, r)));
    let l = t.indexOf("?");
    l >= 0 && ((n.search = t.substr(l)), (t = t.substr(0, l))),
      t && (n.pathname = t);
  }
  return n;
}
var vs;
(function (t) {
  (t.data = "data"),
    (t.deferred = "deferred"),
    (t.redirect = "redirect"),
    (t.error = "error");
})(vs || (vs = {}));
function zp(t, n, r) {
  return r === void 0 && (r = "/"), Op(t, n, r, !1);
}
function Op(t, n, r, l) {
  let o = typeof n == "string" ? sr(n) : n,
    i = Wc(o.pathname || "/", r);
  if (i == null) return null;
  let u = Ac(t);
  Ip(u);
  let s = null;
  for (let a = 0; s == null && a < u.length; ++a) {
    let c = Qp(i);
    s = Wp(u[a], c, l);
  }
  return s;
}
function Ac(t, n, r, l) {
  n === void 0 && (n = []), r === void 0 && (r = []), l === void 0 && (l = "");
  let o = (i, u, s) => {
    let a = {
      relativePath: s === void 0 ? i.path || "" : s,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: u,
      route: i,
    };
    a.relativePath.startsWith("/") &&
      (G(
        a.relativePath.startsWith(l),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + l + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (a.relativePath = a.relativePath.slice(l.length)));
    let c = pt([l, a.relativePath]),
      m = r.concat(a);
    i.children &&
      i.children.length > 0 &&
      (G(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + c + '".')
      ),
      Ac(i.children, n, m, c)),
      !(i.path == null && !i.index) &&
        n.push({ path: c, score: Ap(c, i.index), routesMeta: m });
  };
  return (
    t.forEach((i, u) => {
      var s;
      if (i.path === "" || !((s = i.path) != null && s.includes("?"))) o(i, u);
      else for (let a of Vc(i.path)) o(i, u, a);
    }),
    n
  );
}
function Vc(t) {
  let n = t.split("/");
  if (n.length === 0) return [];
  let [r, ...l] = n,
    o = r.endsWith("?"),
    i = r.replace(/\?$/, "");
  if (l.length === 0) return o ? [i, ""] : [i];
  let u = Vc(l.join("/")),
    s = [];
  return (
    s.push(...u.map((a) => (a === "" ? i : [i, a].join("/")))),
    o && s.push(...u),
    s.map((a) => (t.startsWith("/") && a === "" ? "/" : a))
  );
}
function Ip(t) {
  t.sort((n, r) =>
    n.score !== r.score
      ? r.score - n.score
      : Vp(
          n.routesMeta.map((l) => l.childrenIndex),
          r.routesMeta.map((l) => l.childrenIndex)
        )
  );
}
const Mp = /^:[\w-]+$/,
  Dp = 3,
  Fp = 2,
  Up = 1,
  $p = 10,
  Bp = -2,
  gs = (t) => t === "*";
function Ap(t, n) {
  let r = t.split("/"),
    l = r.length;
  return (
    r.some(gs) && (l += Bp),
    n && (l += Fp),
    r
      .filter((o) => !gs(o))
      .reduce((o, i) => o + (Mp.test(i) ? Dp : i === "" ? Up : $p), l)
  );
}
function Vp(t, n) {
  return t.length === n.length && t.slice(0, -1).every((l, o) => l === n[o])
    ? t[t.length - 1] - n[n.length - 1]
    : 0;
}
function Wp(t, n, r) {
  let { routesMeta: l } = t,
    o = {},
    i = "/",
    u = [];
  for (let s = 0; s < l.length; ++s) {
    let a = l[s],
      c = s === l.length - 1,
      m = i === "/" ? n : n.slice(i.length) || "/",
      h = ys(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: c },
        m
      ),
      v = a.route;
    if (
      (!h &&
        c &&
        r &&
        !l[l.length - 1].route.index &&
        (h = ys(
          { path: a.relativePath, caseSensitive: a.caseSensitive, end: !1 },
          m
        )),
      !h)
    )
      return null;
    Object.assign(o, h.params),
      u.push({
        params: o,
        pathname: pt([i, h.pathname]),
        pathnameBase: Gp(pt([i, h.pathnameBase])),
        route: v,
      }),
      h.pathnameBase !== "/" && (i = pt([i, h.pathnameBase]));
  }
  return u;
}
function ys(t, n) {
  typeof t == "string" && (t = { path: t, caseSensitive: !1, end: !0 });
  let [r, l] = Hp(t.path, t.caseSensitive, t.end),
    o = n.match(r);
  if (!o) return null;
  let i = o[0],
    u = i.replace(/(.)\/+$/, "$1"),
    s = o.slice(1);
  return {
    params: l.reduce((c, m, h) => {
      let { paramName: v, isOptional: w } = m;
      if (v === "*") {
        let k = s[h] || "";
        u = i.slice(0, i.length - k.length).replace(/(.)\/+$/, "$1");
      }
      const S = s[h];
      return (
        w && !S ? (c[v] = void 0) : (c[v] = (S || "").replace(/%2F/g, "/")), c
      );
    }, {}),
    pathname: i,
    pathnameBase: u,
    pattern: t,
  };
}
function Hp(t, n, r) {
  n === void 0 && (n = !1),
    r === void 0 && (r = !0),
    Bc(
      t === "*" || !t.endsWith("*") || t.endsWith("/*"),
      'Route path "' +
        t +
        '" will be treated as if it were ' +
        ('"' + t.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + t.replace(/\*$/, "/*") + '".')
    );
  let l = [],
    o =
      "^" +
      t
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (u, s, a) => (
            l.push({ paramName: s, isOptional: a != null }),
            a ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    t.endsWith("*")
      ? (l.push({ paramName: "*" }),
        (o += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : r
      ? (o += "\\/*$")
      : t !== "" && t !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, n ? void 0 : "i"), l]
  );
}
function Qp(t) {
  try {
    return t
      .split("/")
      .map((n) => decodeURIComponent(n).replace(/\//g, "%2F"))
      .join("/");
  } catch (n) {
    return (
      Bc(
        !1,
        'The URL path "' +
          t +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + n + ").")
      ),
      t
    );
  }
}
function Wc(t, n) {
  if (n === "/") return t;
  if (!t.toLowerCase().startsWith(n.toLowerCase())) return null;
  let r = n.endsWith("/") ? n.length - 1 : n.length,
    l = t.charAt(r);
  return l && l !== "/" ? null : t.slice(r) || "/";
}
function Kp(t, n) {
  n === void 0 && (n = "/");
  let {
    pathname: r,
    search: l = "",
    hash: o = "",
  } = typeof t == "string" ? sr(t) : t;
  return {
    pathname: r ? (r.startsWith("/") ? r : Yp(r, n)) : n,
    search: Jp(l),
    hash: Zp(o),
  };
}
function Yp(t, n) {
  let r = n.replace(/\/+$/, "").split("/");
  return (
    t.split("/").forEach((o) => {
      o === ".." ? r.length > 1 && r.pop() : o !== "." && r.push(o);
    }),
    r.length > 1 ? r.join("/") : "/"
  );
}
function io(t, n, r, l) {
  return (
    "Cannot include a '" +
    t +
    "' character in a manually specified " +
    ("`to." +
      n +
      "` field [" +
      JSON.stringify(l) +
      "].  Please separate it out to the ") +
    ("`to." + r + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Xp(t) {
  return t.filter(
    (n, r) => r === 0 || (n.route.path && n.route.path.length > 0)
  );
}
function eu(t, n) {
  let r = Xp(t);
  return n
    ? r.map((l, o) => (o === r.length - 1 ? l.pathname : l.pathnameBase))
    : r.map((l) => l.pathnameBase);
}
function tu(t, n, r, l) {
  l === void 0 && (l = !1);
  let o;
  typeof t == "string"
    ? (o = sr(t))
    : ((o = ti({}, t)),
      G(
        !o.pathname || !o.pathname.includes("?"),
        io("?", "pathname", "search", o)
      ),
      G(
        !o.pathname || !o.pathname.includes("#"),
        io("#", "pathname", "hash", o)
      ),
      G(!o.search || !o.search.includes("#"), io("#", "search", "hash", o)));
  let i = t === "" || o.pathname === "",
    u = i ? "/" : o.pathname,
    s;
  if (u == null) s = r;
  else {
    let h = n.length - 1;
    if (!l && u.startsWith("..")) {
      let v = u.split("/");
      for (; v[0] === ".."; ) v.shift(), (h -= 1);
      o.pathname = v.join("/");
    }
    s = h >= 0 ? n[h] : "/";
  }
  let a = Kp(o, s),
    c = u && u !== "/" && u.endsWith("/"),
    m = (i || u === ".") && r.endsWith("/");
  return !a.pathname.endsWith("/") && (c || m) && (a.pathname += "/"), a;
}
const pt = (t) => t.join("/").replace(/\/\/+/g, "/"),
  Gp = (t) => t.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Jp = (t) => (!t || t === "?" ? "" : t.startsWith("?") ? t : "?" + t),
  Zp = (t) => (!t || t === "#" ? "" : t.startsWith("#") ? t : "#" + t);
function qp(t) {
  return (
    t != null &&
    typeof t.status == "number" &&
    typeof t.statusText == "string" &&
    typeof t.internal == "boolean" &&
    "data" in t
  );
}
const Hc = ["post", "put", "patch", "delete"];
new Set(Hc);
const bp = ["get", ...Hc];
new Set(bp);
/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function nr() {
  return (
    (nr = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var n = 1; n < arguments.length; n++) {
            var r = arguments[n];
            for (var l in r)
              Object.prototype.hasOwnProperty.call(r, l) && (t[l] = r[l]);
          }
          return t;
        }),
    nr.apply(this, arguments)
  );
}
const nu = _.createContext(null),
  eh = _.createContext(null),
  wt = _.createContext(null),
  Rl = _.createContext(null),
  St = _.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Qc = _.createContext(null);
function th(t, n) {
  let { relative: r } = n === void 0 ? {} : n;
  mn() || G(!1);
  let { basename: l, navigator: o } = _.useContext(wt),
    { hash: i, pathname: u, search: s } = Yc(t, { relative: r }),
    a = u;
  return (
    l !== "/" && (a = u === "/" ? l : pt([l, u])),
    o.createHref({ pathname: a, search: s, hash: i })
  );
}
function mn() {
  return _.useContext(Rl) != null;
}
function kt() {
  return mn() || G(!1), _.useContext(Rl).location;
}
function Kc(t) {
  _.useContext(wt).static || _.useLayoutEffect(t);
}
function ru() {
  let { isDataRoute: t } = _.useContext(St);
  return t ? hh() : nh();
}
function nh() {
  mn() || G(!1);
  let t = _.useContext(nu),
    { basename: n, future: r, navigator: l } = _.useContext(wt),
    { matches: o } = _.useContext(St),
    { pathname: i } = kt(),
    u = JSON.stringify(eu(o, r.v7_relativeSplatPath)),
    s = _.useRef(!1);
  return (
    Kc(() => {
      s.current = !0;
    }),
    _.useCallback(
      function (c, m) {
        if ((m === void 0 && (m = {}), !s.current)) return;
        if (typeof c == "number") {
          l.go(c);
          return;
        }
        let h = tu(c, JSON.parse(u), i, m.relative === "path");
        t == null &&
          n !== "/" &&
          (h.pathname = h.pathname === "/" ? n : pt([n, h.pathname])),
          (m.replace ? l.replace : l.push)(h, m.state, m);
      },
      [n, l, u, i, t]
    )
  );
}
function Yc(t, n) {
  let { relative: r } = n === void 0 ? {} : n,
    { future: l } = _.useContext(wt),
    { matches: o } = _.useContext(St),
    { pathname: i } = kt(),
    u = JSON.stringify(eu(o, l.v7_relativeSplatPath));
  return _.useMemo(() => tu(t, JSON.parse(u), i, r === "path"), [t, u, i, r]);
}
function rh(t, n) {
  return lh(t, n);
}
function lh(t, n, r, l) {
  mn() || G(!1);
  let { navigator: o } = _.useContext(wt),
    { matches: i } = _.useContext(St),
    u = i[i.length - 1],
    s = u ? u.params : {};
  u && u.pathname;
  let a = u ? u.pathnameBase : "/";
  u && u.route;
  let c = kt(),
    m;
  if (n) {
    var h;
    let C = typeof n == "string" ? sr(n) : n;
    a === "/" || ((h = C.pathname) != null && h.startsWith(a)) || G(!1),
      (m = C);
  } else m = c;
  let v = m.pathname || "/",
    w = v;
  if (a !== "/") {
    let C = a.replace(/^\//, "").split("/");
    w = "/" + v.replace(/^\//, "").split("/").slice(C.length).join("/");
  }
  let S = zp(t, { pathname: w }),
    k = ah(
      S &&
        S.map((C) =>
          Object.assign({}, C, {
            params: Object.assign({}, s, C.params),
            pathname: pt([
              a,
              o.encodeLocation
                ? o.encodeLocation(C.pathname).pathname
                : C.pathname,
            ]),
            pathnameBase:
              C.pathnameBase === "/"
                ? a
                : pt([
                    a,
                    o.encodeLocation
                      ? o.encodeLocation(C.pathnameBase).pathname
                      : C.pathnameBase,
                  ]),
          })
        ),
      i,
      r,
      l
    );
  return n && k
    ? _.createElement(
        Rl.Provider,
        {
          value: {
            location: nr(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              m
            ),
            navigationType: fl.Pop,
          },
        },
        k
      )
    : k;
}
function oh() {
  let t = ph(),
    n = qp(t)
      ? t.status + " " + t.statusText
      : t instanceof Error
      ? t.message
      : JSON.stringify(t),
    r = t instanceof Error ? t.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return _.createElement(
    _.Fragment,
    null,
    _.createElement("h2", null, "Unexpected Application Error!"),
    _.createElement("h3", { style: { fontStyle: "italic" } }, n),
    r ? _.createElement("pre", { style: o }, r) : null,
    null
  );
}
const ih = _.createElement(oh, null);
class uh extends _.Component {
  constructor(n) {
    super(n),
      (this.state = {
        location: n.location,
        revalidation: n.revalidation,
        error: n.error,
      });
  }
  static getDerivedStateFromError(n) {
    return { error: n };
  }
  static getDerivedStateFromProps(n, r) {
    return r.location !== n.location ||
      (r.revalidation !== "idle" && n.revalidation === "idle")
      ? { error: n.error, location: n.location, revalidation: n.revalidation }
      : {
          error: n.error !== void 0 ? n.error : r.error,
          location: r.location,
          revalidation: n.revalidation || r.revalidation,
        };
  }
  componentDidCatch(n, r) {
    console.error(
      "React Router caught the following error during render",
      n,
      r
    );
  }
  render() {
    return this.state.error !== void 0
      ? _.createElement(
          St.Provider,
          { value: this.props.routeContext },
          _.createElement(Qc.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function sh(t) {
  let { routeContext: n, match: r, children: l } = t,
    o = _.useContext(nu);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = r.route.id),
    _.createElement(St.Provider, { value: n }, l)
  );
}
function ah(t, n, r, l) {
  var o;
  if (
    (n === void 0 && (n = []),
    r === void 0 && (r = null),
    l === void 0 && (l = null),
    t == null)
  ) {
    var i;
    if (!r) return null;
    if (r.errors) t = r.matches;
    else if (
      (i = l) != null &&
      i.v7_partialHydration &&
      n.length === 0 &&
      !r.initialized &&
      r.matches.length > 0
    )
      t = r.matches;
    else return null;
  }
  let u = t,
    s = (o = r) == null ? void 0 : o.errors;
  if (s != null) {
    let m = u.findIndex(
      (h) => h.route.id && (s == null ? void 0 : s[h.route.id]) !== void 0
    );
    m >= 0 || G(!1), (u = u.slice(0, Math.min(u.length, m + 1)));
  }
  let a = !1,
    c = -1;
  if (r && l && l.v7_partialHydration)
    for (let m = 0; m < u.length; m++) {
      let h = u[m];
      if (
        ((h.route.HydrateFallback || h.route.hydrateFallbackElement) && (c = m),
        h.route.id)
      ) {
        let { loaderData: v, errors: w } = r,
          S =
            h.route.loader &&
            v[h.route.id] === void 0 &&
            (!w || w[h.route.id] === void 0);
        if (h.route.lazy || S) {
          (a = !0), c >= 0 ? (u = u.slice(0, c + 1)) : (u = [u[0]]);
          break;
        }
      }
    }
  return u.reduceRight((m, h, v) => {
    let w,
      S = !1,
      k = null,
      C = null;
    r &&
      ((w = s && h.route.id ? s[h.route.id] : void 0),
      (k = h.route.errorElement || ih),
      a &&
        (c < 0 && v === 0
          ? ((S = !0), (C = null))
          : c === v &&
            ((S = !0), (C = h.route.hydrateFallbackElement || null))));
    let d = n.concat(u.slice(0, v + 1)),
      f = () => {
        let p;
        return (
          w
            ? (p = k)
            : S
            ? (p = C)
            : h.route.Component
            ? (p = _.createElement(h.route.Component, null))
            : h.route.element
            ? (p = h.route.element)
            : (p = m),
          _.createElement(sh, {
            match: h,
            routeContext: { outlet: m, matches: d, isDataRoute: r != null },
            children: p,
          })
        );
      };
    return r && (h.route.ErrorBoundary || h.route.errorElement || v === 0)
      ? _.createElement(uh, {
          location: r.location,
          revalidation: r.revalidation,
          component: k,
          error: w,
          children: f(),
          routeContext: { outlet: null, matches: d, isDataRoute: !0 },
        })
      : f();
  }, null);
}
var Xc = (function (t) {
    return (
      (t.UseBlocker = "useBlocker"),
      (t.UseRevalidator = "useRevalidator"),
      (t.UseNavigateStable = "useNavigate"),
      t
    );
  })(Xc || {}),
  dl = (function (t) {
    return (
      (t.UseBlocker = "useBlocker"),
      (t.UseLoaderData = "useLoaderData"),
      (t.UseActionData = "useActionData"),
      (t.UseRouteError = "useRouteError"),
      (t.UseNavigation = "useNavigation"),
      (t.UseRouteLoaderData = "useRouteLoaderData"),
      (t.UseMatches = "useMatches"),
      (t.UseRevalidator = "useRevalidator"),
      (t.UseNavigateStable = "useNavigate"),
      (t.UseRouteId = "useRouteId"),
      t
    );
  })(dl || {});
function ch(t) {
  let n = _.useContext(nu);
  return n || G(!1), n;
}
function fh(t) {
  let n = _.useContext(eh);
  return n || G(!1), n;
}
function dh(t) {
  let n = _.useContext(St);
  return n || G(!1), n;
}
function Gc(t) {
  let n = dh(),
    r = n.matches[n.matches.length - 1];
  return r.route.id || G(!1), r.route.id;
}
function ph() {
  var t;
  let n = _.useContext(Qc),
    r = fh(dl.UseRouteError),
    l = Gc(dl.UseRouteError);
  return n !== void 0 ? n : (t = r.errors) == null ? void 0 : t[l];
}
function hh() {
  let { router: t } = ch(Xc.UseNavigateStable),
    n = Gc(dl.UseNavigateStable),
    r = _.useRef(!1);
  return (
    Kc(() => {
      r.current = !0;
    }),
    _.useCallback(
      function (o, i) {
        i === void 0 && (i = {}),
          r.current &&
            (typeof o == "number"
              ? t.navigate(o)
              : t.navigate(o, nr({ fromRouteId: n }, i)));
      },
      [t, n]
    )
  );
}
function ws(t) {
  let { to: n, replace: r, state: l, relative: o } = t;
  mn() || G(!1);
  let { future: i, static: u } = _.useContext(wt),
    { matches: s } = _.useContext(St),
    { pathname: a } = kt(),
    c = ru(),
    m = tu(n, eu(s, i.v7_relativeSplatPath), a, o === "path"),
    h = JSON.stringify(m);
  return (
    _.useEffect(
      () => c(JSON.parse(h), { replace: r, state: l, relative: o }),
      [c, h, o, r, l]
    ),
    null
  );
}
function Br(t) {
  G(!1);
}
function mh(t) {
  let {
    basename: n = "/",
    children: r = null,
    location: l,
    navigationType: o = fl.Pop,
    navigator: i,
    static: u = !1,
    future: s,
  } = t;
  mn() && G(!1);
  let a = n.replace(/^\/*/, "/"),
    c = _.useMemo(
      () => ({
        basename: a,
        navigator: i,
        static: u,
        future: nr({ v7_relativeSplatPath: !1 }, s),
      }),
      [a, s, i, u]
    );
  typeof l == "string" && (l = sr(l));
  let {
      pathname: m = "/",
      search: h = "",
      hash: v = "",
      state: w = null,
      key: S = "default",
    } = l,
    k = _.useMemo(() => {
      let C = Wc(m, a);
      return C == null
        ? null
        : {
            location: { pathname: C, search: h, hash: v, state: w, key: S },
            navigationType: o,
          };
    }, [a, m, h, v, w, S, o]);
  return k == null
    ? null
    : _.createElement(
        wt.Provider,
        { value: c },
        _.createElement(Rl.Provider, { children: r, value: k })
      );
}
function vh(t) {
  let { children: n, location: r } = t;
  return rh(ni(n), r);
}
new Promise(() => {});
function ni(t, n) {
  n === void 0 && (n = []);
  let r = [];
  return (
    _.Children.forEach(t, (l, o) => {
      if (!_.isValidElement(l)) return;
      let i = [...n, o];
      if (l.type === _.Fragment) {
        r.push.apply(r, ni(l.props.children, i));
        return;
      }
      l.type !== Br && G(!1), !l.props.index || !l.props.children || G(!1);
      let u = {
        id: l.props.id || i.join("-"),
        caseSensitive: l.props.caseSensitive,
        element: l.props.element,
        Component: l.props.Component,
        index: l.props.index,
        path: l.props.path,
        loader: l.props.loader,
        action: l.props.action,
        errorElement: l.props.errorElement,
        ErrorBoundary: l.props.ErrorBoundary,
        hasErrorBoundary:
          l.props.ErrorBoundary != null || l.props.errorElement != null,
        shouldRevalidate: l.props.shouldRevalidate,
        handle: l.props.handle,
        lazy: l.props.lazy,
      };
      l.props.children && (u.children = ni(l.props.children, i)), r.push(u);
    }),
    r
  );
}
/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function pl() {
  return (
    (pl = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var n = 1; n < arguments.length; n++) {
            var r = arguments[n];
            for (var l in r)
              Object.prototype.hasOwnProperty.call(r, l) && (t[l] = r[l]);
          }
          return t;
        }),
    pl.apply(this, arguments)
  );
}
var Zt;
(function (t) {
  (t.Pop = "POP"), (t.Push = "PUSH"), (t.Replace = "REPLACE");
})(Zt || (Zt = {}));
const Ss = "popstate";
function gh(t) {
  t === void 0 && (t = {});
  function n(l, o) {
    let { pathname: i, search: u, hash: s } = l.location;
    return ri(
      "",
      { pathname: i, search: u, hash: s },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function r(l, o) {
    return typeof o == "string" ? o : Jc(o);
  }
  return kh(n, r, null, t);
}
function yh(t, n) {
  if (t === !1 || t === null || typeof t > "u") throw new Error(n);
}
function wh() {
  return Math.random().toString(36).substr(2, 8);
}
function ks(t, n) {
  return { usr: t.state, key: t.key, idx: n };
}
function ri(t, n, r, l) {
  return (
    r === void 0 && (r = null),
    pl(
      { pathname: typeof t == "string" ? t : t.pathname, search: "", hash: "" },
      typeof n == "string" ? Sh(n) : n,
      { state: r, key: (n && n.key) || l || wh() }
    )
  );
}
function Jc(t) {
  let { pathname: n = "/", search: r = "", hash: l = "" } = t;
  return (
    r && r !== "?" && (n += r.charAt(0) === "?" ? r : "?" + r),
    l && l !== "#" && (n += l.charAt(0) === "#" ? l : "#" + l),
    n
  );
}
function Sh(t) {
  let n = {};
  if (t) {
    let r = t.indexOf("#");
    r >= 0 && ((n.hash = t.substr(r)), (t = t.substr(0, r)));
    let l = t.indexOf("?");
    l >= 0 && ((n.search = t.substr(l)), (t = t.substr(0, l))),
      t && (n.pathname = t);
  }
  return n;
}
function kh(t, n, r, l) {
  l === void 0 && (l = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = l,
    u = o.history,
    s = Zt.Pop,
    a = null,
    c = m();
  c == null && ((c = 0), u.replaceState(pl({}, u.state, { idx: c }), ""));
  function m() {
    return (u.state || { idx: null }).idx;
  }
  function h() {
    s = Zt.Pop;
    let C = m(),
      d = C == null ? null : C - c;
    (c = C), a && a({ action: s, location: k.location, delta: d });
  }
  function v(C, d) {
    s = Zt.Push;
    let f = ri(k.location, C, d);
    c = m() + 1;
    let p = ks(f, c),
      g = k.createHref(f);
    try {
      u.pushState(p, "", g);
    } catch (E) {
      if (E instanceof DOMException && E.name === "DataCloneError") throw E;
      o.location.assign(g);
    }
    i && a && a({ action: s, location: k.location, delta: 1 });
  }
  function w(C, d) {
    s = Zt.Replace;
    let f = ri(k.location, C, d);
    c = m();
    let p = ks(f, c),
      g = k.createHref(f);
    u.replaceState(p, "", g),
      i && a && a({ action: s, location: k.location, delta: 0 });
  }
  function S(C) {
    let d = o.location.origin !== "null" ? o.location.origin : o.location.href,
      f = typeof C == "string" ? C : Jc(C);
    return (
      (f = f.replace(/ $/, "%20")),
      yh(
        d,
        "No window.location.(origin|href) available to create URL for href: " +
          f
      ),
      new URL(f, d)
    );
  }
  let k = {
    get action() {
      return s;
    },
    get location() {
      return t(o, u);
    },
    listen(C) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(Ss, h),
        (a = C),
        () => {
          o.removeEventListener(Ss, h), (a = null);
        }
      );
    },
    createHref(C) {
      return n(o, C);
    },
    createURL: S,
    encodeLocation(C) {
      let d = S(C);
      return { pathname: d.pathname, search: d.search, hash: d.hash };
    },
    push: v,
    replace: w,
    go(C) {
      return u.go(C);
    },
  };
  return k;
}
var xs;
(function (t) {
  (t.data = "data"),
    (t.deferred = "deferred"),
    (t.redirect = "redirect"),
    (t.error = "error");
})(xs || (xs = {}));
function xh(t, n) {
  if (n === "/") return t;
  if (!t.toLowerCase().startsWith(n.toLowerCase())) return null;
  let r = n.endsWith("/") ? n.length - 1 : n.length,
    l = t.charAt(r);
  return l && l !== "/" ? null : t.slice(r) || "/";
}
const Zc = ["post", "put", "patch", "delete"];
new Set(Zc);
const Eh = ["get", ...Zc];
new Set(Eh);
/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function li() {
  return (
    (li = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var n = 1; n < arguments.length; n++) {
            var r = arguments[n];
            for (var l in r)
              Object.prototype.hasOwnProperty.call(r, l) && (t[l] = r[l]);
          }
          return t;
        }),
    li.apply(this, arguments)
  );
}
function _h(t, n) {
  if (t == null) return {};
  var r = {},
    l = Object.keys(t),
    o,
    i;
  for (i = 0; i < l.length; i++)
    (o = l[i]), !(n.indexOf(o) >= 0) && (r[o] = t[o]);
  return r;
}
function Ch(t) {
  return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
}
function Nh(t, n) {
  return t.button === 0 && (!n || n === "_self") && !Ch(t);
}
const Ph = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  jh = "6";
try {
  window.__reactRouterVersion = jh;
} catch {}
const Th = "startTransition",
  Es = Sf[Th];
function Rh(t) {
  let { basename: n, children: r, future: l, window: o } = t,
    i = _.useRef();
  i.current == null && (i.current = gh({ window: o, v5Compat: !0 }));
  let u = i.current,
    [s, a] = _.useState({ action: u.action, location: u.location }),
    { v7_startTransition: c } = l || {},
    m = _.useCallback(
      (h) => {
        c && Es ? Es(() => a(h)) : a(h);
      },
      [a, c]
    );
  return (
    _.useLayoutEffect(() => u.listen(m), [u, m]),
    _.createElement(mh, {
      basename: n,
      children: r,
      location: s.location,
      navigationType: s.action,
      navigator: u,
      future: l,
    })
  );
}
const Lh =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  zh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  oi = _.forwardRef(function (n, r) {
    let {
        onClick: l,
        relative: o,
        reloadDocument: i,
        replace: u,
        state: s,
        target: a,
        to: c,
        preventScrollReset: m,
        unstable_viewTransition: h,
      } = n,
      v = _h(n, Ph),
      { basename: w } = _.useContext(wt),
      S,
      k = !1;
    if (typeof c == "string" && zh.test(c) && ((S = c), Lh))
      try {
        let p = new URL(window.location.href),
          g = c.startsWith("//") ? new URL(p.protocol + c) : new URL(c),
          E = xh(g.pathname, w);
        g.origin === p.origin && E != null
          ? (c = E + g.search + g.hash)
          : (k = !0);
      } catch {}
    let C = th(c, { relative: o }),
      d = Oh(c, {
        replace: u,
        state: s,
        target: a,
        preventScrollReset: m,
        relative: o,
        unstable_viewTransition: h,
      });
    function f(p) {
      l && l(p), p.defaultPrevented || d(p);
    }
    return _.createElement(
      "a",
      li({}, v, { href: S || C, onClick: k || i ? l : f, ref: r, target: a })
    );
  });
var _s;
(function (t) {
  (t.UseScrollRestoration = "useScrollRestoration"),
    (t.UseSubmit = "useSubmit"),
    (t.UseSubmitFetcher = "useSubmitFetcher"),
    (t.UseFetcher = "useFetcher"),
    (t.useViewTransitionState = "useViewTransitionState");
})(_s || (_s = {}));
var Cs;
(function (t) {
  (t.UseFetcher = "useFetcher"),
    (t.UseFetchers = "useFetchers"),
    (t.UseScrollRestoration = "useScrollRestoration");
})(Cs || (Cs = {}));
function Oh(t, n) {
  let {
      target: r,
      replace: l,
      state: o,
      preventScrollReset: i,
      relative: u,
      unstable_viewTransition: s,
    } = n === void 0 ? {} : n,
    a = ru(),
    c = kt(),
    m = Yc(t, { relative: u });
  return _.useCallback(
    (h) => {
      if (Nh(h, r)) {
        h.preventDefault();
        let v = l !== void 0 ? l : ms(c) === ms(m);
        a(t, {
          replace: v,
          state: o,
          preventScrollReset: i,
          relative: u,
          unstable_viewTransition: s,
        });
      }
    },
    [c, a, m, l, o, r, t, i, u, s]
  );
}
function Ih({ openSignInModal: t, isLoggedIn: n }) {
  const r = kt(),
    l = () =>
      r.pathname === "/saved-news" ? { color: "black" } : { color: "white" };
  return y.jsxs("header", {
    className: "header",
    style: l(),
    children: [
      y.jsx("p", { className: "header__title", children: "NewsExplorer" }),
      y.jsx(oi, {
        to: "/",
        children: y.jsx("button", {
          className: "header__home-button",
          style: l(),
          children: "Home",
        }),
      }),
      r.pathname === "/saved-news"
        ? y.jsxs(y.Fragment, {
            children: [
              y.jsx("button", {
                className: "saved__article-button",
                children: " Saved articles",
              }),
              y.jsx("div", {
                className: "header__user-container",
                children: y.jsx("p", {
                  className: "header__username",
                  children: "Juan",
                }),
              }),
            ],
          })
        : y.jsx(y.Fragment, {
            children: y.jsx("button", {
              className: "header__signin-button",
              onClick: t,
              style: l(),
              children: "Sign in",
            }),
          }),
    ],
  });
}
function Mh(t) {
  const n = () => {
    e.preventDefault(), t();
  };
  return y.jsx("form", {
    className: "search__form",
    children: y.jsxs("label", {
      htmlFor: "search-form",
      className: "search__label",
      children: [
        y.jsx("input", {
          className: "search__input",
          type: "search",
          name: "search",
          placeholder: "Enter topic",
          id: "search-form",
        }),
        y.jsx("button", {
          className: "submit__search-button",
          onSubmit: n,
          children: "Search",
        }),
      ],
    }),
  });
}
const Dh = "/assets/JL-_kEbiqq_.jpeg";
function Fh() {
  return y.jsxs("section", {
    className: "about",
    children: [
      y.jsx("img", { className: "about__picture", src: Dh }),
      y.jsxs("div", {
        className: "about__text",
        children: [
          y.jsx("h1", {
            className: "about__title",
            children: "About Juan Carrion",
          }),
          y.jsx("p", {
            className: "about__description",
            children: "Talk about me etc.",
          }),
        ],
      }),
    ],
  });
}
function qc({ isLoggedIn: t, article: n }) {
  return y.jsx("div", {
    className: "card__container",
    children: y.jsxs("li", {
      className: "card",
      children: [
        y.jsx("button", { className: "card__save", type: "button" }),
        y.jsx("img", {
          className: "card__image",
          src: n.urlToImage,
          alt: n.title,
        }),
        y.jsx("p", { className: "card__date", children: n.publishedAt }),
        y.jsx("h2", { className: "card__title", children: n.title }),
        y.jsx("p", { className: "card__description", children: n.description }),
        y.jsx("p", { className: "card__source", children: n.author }),
      ],
    }),
  });
}
function Uh({ isLoggedIn: t, cardItem: n, handleSearchNews: r, article: l }) {
  return y.jsxs("main", {
    className: "main",
    children: [
      y.jsx("h1", {
        className: "main__title",
        children: "What's going on in the world?",
      }),
      y.jsx("p", {
        className: "main__description",
        children:
          "Find the latest news on any topic and save them in your personal account.",
      }),
      y.jsx(Mh, { handleSearchNews: r }),
      y.jsxs("section", {
        className: "cards",
        children: [
          y.jsx("h2", {
            className: "search__title",
            children: "Search results",
          }),
          y.jsx("ul", {
            className: "cards__list",
            children: n.map((o, i) =>
              y.jsx(qc, { article: o, isLoggedIn: t }, i)
            ),
          }),
        ],
      }),
      y.jsx("button", {
        className: "card__more",
        type: "button",
        children: "Show more",
      }),
      y.jsx(Fh, {}),
    ],
  });
}
function $h() {
  return y.jsxs("footer", {
    className: "footer",
    children: [
      y.jsx("p", {
        className: "footer__copyright",
        children: "2024 Supersite, Powered by News API",
      }),
      y.jsx(oi, {
        to: "/",
        children: y.jsx("button", {
          className: "footer__home-button",
          children: "Home",
        }),
      }),
      y.jsx(oi, {
        to: "https://tripleten.com/",
        children: y.jsx("button", {
          className: "footer__tripleten-button",
          children: "TripleTen",
        }),
      }),
      y.jsx("button", { className: "footer__github-button" }),
      y.jsx("button", { className: "footer__facebook-button" }),
    ],
  });
}
function bc({
  children: t,
  title: n,
  buttonText: r,
  isOpen: l,
  closeModal: o,
  onSubmit: i,
}) {
  return y.jsx("div", {
    className: `modal ${l && "modal_opened"}`,
    children: y.jsxs("div", {
      className: "modal__container",
      children: [
        y.jsx("button", {
          className: "modal__close",
          type: "button",
          onClick: o,
          children: "X",
        }),
        y.jsx("h3", { className: "modal__title", children: n }),
        y.jsxs("form", {
          className: "modal__form",
          onSubmit: i,
          children: [
            t,
            y.jsx("button", {
              className: "button__submit",
              type: "submit",
              children: r,
            }),
          ],
        }),
      ],
    }),
  });
}
function Bh({
  isOpen: t,
  closeModal: n,
  opensignIn: r,
  handleRegistration: l,
}) {
  const [o, i] = _.useState({ email: "", password: "", username: "" }),
    u = (a) => {
      const { name: c, value: m } = a.target;
      i((h) => ({ ...h, [c]: m }));
    },
    s = (a) => {
      a.preventDefault(), l(o), n();
    };
  return y.jsxs(bc, {
    title: "Sign Up",
    buttonText: "Sign Up",
    isOpen: t,
    closeModal: n,
    onSubmit: s,
    children: [
      y.jsxs("label", {
        htmlFor: "email-signup",
        className: "modal__label",
        children: [
          y.jsx("h3", { className: "modal__label-title", children: "Email" }),
          y.jsx("input", {
            className: "modal__input",
            type: "email",
            name: "email",
            placeholder: "Enter email",
            id: "email-signup",
            required: !0,
            value: o.email,
            onChange: u,
          }),
        ],
      }),
      y.jsxs("label", {
        htmlFor: "password-signup",
        className: "modal__label",
        children: [
          y.jsx("h3", {
            className: "modal__label-title",
            children: "Password",
          }),
          y.jsx("input", {
            className: "modal__input",
            type: "password",
            name: "password",
            placeholder: "Enter password",
            id: "password-signup",
            required: !0,
            value: o.password,
            onChange: u,
          }),
        ],
      }),
      y.jsxs("label", {
        htmlFor: "username-signup",
        className: "modal__label",
        children: [
          y.jsx("h3", {
            className: "modal__label-title",
            children: "Username",
          }),
          y.jsx("input", {
            className: "modal__input",
            type: "username",
            name: "username",
            placeholder: "Enter your username",
            id: "username-signup",
            required: !0,
            value: o.username,
            onChange: u,
          }),
        ],
      }),
      y.jsx("button", {
        className: "signin__button-redirect",
        type: "button",
        onClick: r,
        children: "or Sign in",
      }),
    ],
  });
}
function Ah({
  isOpen: t,
  closeModal: n,
  openSignUp: r,
  handlesignin: l,
  handleEscKey: o,
}) {
  const [i, u] = _.useState({ email: "", password: "" }),
    s = (c) => {
      const { name: m, value: h } = c.target;
      u((v) => ({ ...v, [m]: h }));
    },
    a = (c) => {
      c.preventDefault(), l(i), n();
    };
  return y.jsxs(bc, {
    title: "Sign In",
    buttonText: "Sign In",
    isOpen: t,
    closeModal: n,
    onSubmit: a,
    handleEscKey: o,
    children: [
      y.jsxs("label", {
        htmlFor: "email-signin",
        className: "modal__label",
        children: [
          y.jsx("h3", { className: "modal__label-title", children: "Email" }),
          y.jsx("input", {
            className: "modal__input",
            type: "email",
            name: "email",
            placeholder: "Enter email",
            id: "email-signin",
            value: i.email,
            required: !0,
            onChange: s,
          }),
        ],
      }),
      y.jsxs("label", {
        htmlFor: "password-signin",
        className: "modal__label",
        children: [
          y.jsx("h3", {
            className: "modal__label-title",
            children: "Password",
          }),
          y.jsx("input", {
            className: "modal__input",
            type: "password",
            name: "password",
            placeholder: "Enter password",
            id: "password-signin",
            value: i.password,
            required: !0,
            onChange: s,
          }),
        ],
      }),
      y.jsx("button", {
        className: "signup__button-redirect",
        type: "button",
        onClick: r,
        children: "or Sign up",
      }),
    ],
  });
}
const ef = "http://localhost:5174",
  Ns = "4124653ffd0544568789bf77a2554a41",
  Vh = new Date(),
  Wh = new Date();
Wh.setDate(Vh.getDate() - 7);
const lu = (t) => (t.ok ? t.json() : Promise.reject(`Error: ${t.status}`)),
  Hh = () =>
    new Promise((t, n) =>
      t([
        {
          status: "ok",
          totalResults: 10,
          articles: [
            {
              source: { id: null, name: "Biztoc.com" },
              author: "news.google.com",
              title:
                "Tesla robotaxi anticipation hits fever pitch ahead of debut",
              description: `Tesla robotaxi anticipation hits fever pitch ahead of debut Axios
Tesla robotaxi event comes after a decade of unfulfilled promises from Elon Musk CNBC
Elon Musk is promising to unveil the future of Tesla tonight CNN
Tesla is expected to unveil a robotaxi ton…`,
              url: "https://biztoc.com/x/1c6bb1209e1f5bc4",
              urlToImage: "https://biztoc.com/cdn/803/og.png",
              publishedAt: "2024-10-11T02:46:44Z",
              content:
                "Tesla robotaxi anticipation hits fever pitch ahead of debut AxiosTesla robotaxi event comes after a decade of unfulfilled promises from Elon Musk CNBCElon Musk is promising to unveil the future of Te… [+131 chars]",
            },
            {
              source: { id: null, name: "Biztoc.com" },
              author: "barrons.com",
              title: "Robotaxi Event Start Delayed for 'Medical Emergency'",
              description: `Updated 5 min ago
Robotaxi Event Start Delayed for 'Medical Emergency'
Tesla CEO Elon Musk on X said the Robotaxi Event, which was scheduled to start at 10 p.m. Eastern time tonight, is delayed because a person in attendance had "a medical emergency."
He adde…`,
              url: "https://biztoc.com/x/59a1156fef58f75e",
              urlToImage: "https://biztoc.com/cdn/803/og.png",
              publishedAt: "2024-10-11T02:46:27Z",
              content:
                "Updated 5 min agoRobotaxi Event Start Delayed for 'Medical Emergency'Tesla CEO Elon Musk on X said the Robotaxi Event, which was scheduled to start at 10 p.m. Eastern time tonight, is delayed because… [+130 chars]",
            },
            {
              source: { id: null, name: "Investing.com" },
              author: "Reuters",
              title:
                "Asian shares set for first weekly loss in five, China stimulus eyed",
              description:
                "Asian shares set for first weekly loss in five, China stimulus eyed",
              url: "https://www.investing.com/news/economy-news/asian-shares-set-for-first-weekly-loss-in-five-china-stimulus-eyed-3659005",
              urlToImage:
                "https://i-invdn-com.investing.com/news/STOCK-EXCHANGE-RUSSIAN-TRADING-SYSTEMS_800x533_L_1414427815.jpg",
              publishedAt: "2024-10-11T02:23:15Z",
              content: `By Stella Qiu\r
SYDNEY (Reuters) - Asian shares were headed for the first weekly loss in five as the stunning rally in Chinese shares took a breather, although all eyes are on the details of the much-… [+3045 chars]`,
            },
          ],
        },
      ])
    );
function Qh(t, n) {
  return fetch(`${ef}/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: t, password: n }),
  }).then(lu);
}
function Kh(t, n, r) {
  return fetch(`${ef}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: t, password: n, name: r }),
  }).then(lu);
}
const Yh = "jwt",
  Xh = (t) => {
    localStorage.setItem(Yh, t);
  },
  Gh = "https://newsapi.org/v2/everything",
  Jh = (t) => {
    const n = {
      q: t,
      apiKey: Ns,
      from: new Date(
        new Date().setDate(new Date().getDate() - 7)
      ).toISOString(),
      to: new Date().toISOString(),
      pageSize: 100,
    };
    return fetch(
      `${Gh}?q=${n.q}&apiKey=${Ns}&from=${n.from}&to=${n.to}&pageSize=${n.pageSize}`
    )
      .then(lu)
      .then((r) => r.articles);
  };
function Zh({ isLoggedIn: t, cardItem: n }) {
  const r = kt(),
    l = () => {
      if (r.pathname === "/saved-news") return { paddingTop: "0" };
    };
  return y.jsxs("div", {
    className: "saved__news",
    children: [
      y.jsx("h3", {
        className: "saved__description",
        children: "Saved articles",
      }),
      y.jsx("h1", {
        className: "saved__title",
        children: "Juan, you have 3 saved articles ",
      }),
      y.jsxs("div", {
        className: "saved__text",
        children: [
          y.jsx("p", {
            className: "saved__keywords",
            children: "By keywords:",
          }),
          y.jsx("span", {
            className: "saved__span",
            children: "Tesla, Robotaxi, Asian shares",
          }),
        ],
      }),
      y.jsxs("section", {
        className: "cards",
        children: [
          y.jsx("h2", {
            className: "search__title",
            style: l(),
            children: "Search results",
          }),
          y.jsx("ul", {
            className: "cards__list",
            children: n.map((o, i) =>
              y.jsx(qc, { article: o, isLoggedIn: t }, i)
            ),
          }),
        ],
      }),
      y.jsx("div", {
        className: "button__more",
        children: y.jsx("button", {
          className: "card__more",
          type: "button",
          children: "Show more",
        }),
      }),
    ],
  });
}
const qh = "/assets/mainimage-D6iu7roj.png";
function bh() {
  const [t, n] = _.useState(""),
    [r, l] = _.useState([]),
    [o, i] = _.useState(!1);
  _.useState([]);
  const [u, s] = _.useState(!1),
    [a, c] = _.useState(!1);
  _.useState(!1), _.useState({ username: "", email: "" }), _.useState({});
  function m() {
    n("signin");
  }
  function h() {
    n("signup");
  }
  function v() {
    n("");
  }
  function w(g) {
    if (g.key === "Escape") return v();
  }
  const S = ru(),
    k = kt(),
    C = () =>
      k.pathname === "/saved-news"
        ? { backgroundImage: "none" }
        : { backgroundImage: { mainImg: qh } };
  _.useEffect(() => {
    Hh()
      .then((g) => {
        const E = g[0].articles;
        l(E), console.log(E);
      })
      .catch(console.error);
  }, []);
  const d = ({ email: g, password: E, username: j }) => {
      Kh(g, E, j)
        .then(() => {
          m();
        })
        .catch(console.error);
    },
    f = ({ email: g, password: E }) => {
      !g ||
        !E ||
        Qh(g, E)
          .then((j) => {
            j.token && (Xh(j.token), console.log(j), c(!0), S("/saved-news"));
          })
          .catch(console.error);
    },
    p = (g) => {
      i(!0),
        Jh(g)
          .then((E) => {
            E.length === 0 ? s(!0) : s(!1), l(E);
          })
          .catch((E) => {
            console.error(E);
          })
          .finally(() => {
            i(!1);
          });
    };
  return y.jsxs("div", {
    className: "app",
    children: [
      y.jsxs("div", {
        className: "app__content",
        style: C(),
        children: [
          y.jsx(Ih, { openSignInModal: m, isLoggedIn: a }),
          y.jsxs(vh, {
            children: [
              y.jsx(Br, {
                path: "/",
                element: y.jsx(Uh, {
                  isLoggedIn: a,
                  cardItem: r,
                  handleSearchNews: p,
                }),
              }),
              y.jsx(Br, {
                id: "app__content",
                path: "/saved-news",
                element: y.jsx(Zh, { isLoggedIn: a, cardItem: r }),
              }),
              y.jsx(Br, {
                path: "*",
                element: a
                  ? y.jsx(ws, { to: "/", replace: !0 })
                  : y.jsx(ws, { to: "/signin", replace: !0 }),
              }),
            ],
          }),
          y.jsx($h, {}),
        ],
      }),
      y.jsx(Ah, {
        isOpen: t === "signin",
        closeModal: v,
        openSignUp: h,
        handlesignin: f,
        handleEscKey: w,
      }),
      y.jsx(Bh, {
        isOpen: t === "signup",
        closeModal: v,
        opensignIn: m,
        handleRegistration: d,
        handleEscKey: w,
      }),
    ],
  });
}
uo.createRoot(document.getElementById("root")).render(
  y.jsx(Fs.StrictMode, { children: y.jsx(Rh, { children: y.jsx(bh, {}) }) })
);
