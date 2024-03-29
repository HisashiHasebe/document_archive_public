/*!
 * Name: lib.js
 * Since: 2017-03-30
 * Update: -
 * Version: 1.0.0
 * Description: プロジェクトで共通して使用するJavaScriptプラグイン・ライブラリ
 */
/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
    'use strict';
    'object' == typeof module && 'object' == typeof module.exports
        ? (module.exports = e.document
              ? t(e, !0)
              : function (e) {
                    if (!e.document)
                        throw new Error(
                            'jQuery requires a window with a document'
                        );
                    return t(e);
                })
        : t(e);
})('undefined' != typeof window ? window : this, function (C, e) {
    'use strict';
    var t = [],
        r = Object.getPrototypeOf,
        s = t.slice,
        g = t.flat
            ? function (e) {
                  return t.flat.call(e);
              }
            : function (e) {
                  return t.concat.apply([], e);
              },
        u = t.push,
        i = t.indexOf,
        n = {},
        o = n.toString,
        v = n.hasOwnProperty,
        a = v.toString,
        l = a.call(Object),
        y = {},
        m = function (e) {
            return 'function' == typeof e && 'number' != typeof e.nodeType;
        },
        x = function (e) {
            return null != e && e === e.window;
        },
        E = C.document,
        c = { type: !0, src: !0, nonce: !0, noModule: !0 };
    function b(e, t, n) {
        var r,
            i,
            o = (n = n || E).createElement('script');
        if (((o.text = e), t))
            for (r in c)
                (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
                    o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o);
    }
    function w(e) {
        return null == e
            ? e + ''
            : 'object' == typeof e || 'function' == typeof e
            ? n[o.call(e)] || 'object'
            : typeof e;
    }
    var f = '3.5.1',
        S = function (e, t) {
            return new S.fn.init(e, t);
        };
    function p(e) {
        var t = !!e && 'length' in e && e.length,
            n = w(e);
        return (
            !m(e) &&
            !x(e) &&
            ('array' === n ||
                0 === t ||
                ('number' == typeof t && 0 < t && t - 1 in e))
        );
    }
    (S.fn = S.prototype = {
        jquery: f,
        constructor: S,
        length: 0,
        toArray: function () {
            return s.call(this);
        },
        get: function (e) {
            return null == e
                ? s.call(this)
                : e < 0
                ? this[e + this.length]
                : this[e];
        },
        pushStack: function (e) {
            var t = S.merge(this.constructor(), e);
            return (t.prevObject = this), t;
        },
        each: function (e) {
            return S.each(this, e);
        },
        map: function (n) {
            return this.pushStack(
                S.map(this, function (e, t) {
                    return n.call(e, t, e);
                })
            );
        },
        slice: function () {
            return this.pushStack(s.apply(this, arguments));
        },
        first: function () {
            return this.eq(0);
        },
        last: function () {
            return this.eq(-1);
        },
        even: function () {
            return this.pushStack(
                S.grep(this, function (e, t) {
                    return (t + 1) % 2;
                })
            );
        },
        odd: function () {
            return this.pushStack(
                S.grep(this, function (e, t) {
                    return t % 2;
                })
            );
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : []);
        },
        end: function () {
            return this.prevObject || this.constructor();
        },
        push: u,
        sort: t.sort,
        splice: t.splice
    }),
        (S.extend = S.fn.extend = function () {
            var e,
                t,
                n,
                r,
                i,
                o,
                a = arguments[0] || {},
                s = 1,
                u = arguments.length,
                l = !1;
            for (
                'boolean' == typeof a &&
                    ((l = a), (a = arguments[s] || {}), s++),
                    'object' == typeof a || m(a) || (a = {}),
                    s === u && ((a = this), s--);
                s < u;
                s++
            )
                if (null != (e = arguments[s]))
                    for (t in e)
                        (r = e[t]),
                            '__proto__' !== t &&
                                a !== r &&
                                (l &&
                                r &&
                                (S.isPlainObject(r) || (i = Array.isArray(r)))
                                    ? ((n = a[t]),
                                      (o =
                                          i && !Array.isArray(n)
                                              ? []
                                              : i || S.isPlainObject(n)
                                              ? n
                                              : {}),
                                      (i = !1),
                                      (a[t] = S.extend(l, o, r)))
                                    : void 0 !== r && (a[t] = r));
            return a;
        }),
        S.extend({
            expando: 'jQuery' + (f + Math.random()).replace(/\D/g, ''),
            isReady: !0,
            error: function (e) {
                throw new Error(e);
            },
            noop: function () {},
            isPlainObject: function (e) {
                var t, n;
                return (
                    !(!e || '[object Object]' !== o.call(e)) &&
                    (!(t = r(e)) ||
                        ('function' ==
                            typeof (n =
                                v.call(t, 'constructor') && t.constructor) &&
                            a.call(n) === l))
                );
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
            },
            globalEval: function (e, t, n) {
                b(e, { nonce: t && t.nonce }, n);
            },
            each: function (e, t) {
                var n,
                    r = 0;
                if (p(e)) {
                    for (n = e.length; r < n; r++)
                        if (!1 === t.call(e[r], r, e[r])) break;
                } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                return e;
            },
            makeArray: function (e, t) {
                var n = t || [];
                return (
                    null != e &&
                        (p(Object(e))
                            ? S.merge(n, 'string' == typeof e ? [e] : e)
                            : u.call(n, e)),
                    n
                );
            },
            inArray: function (e, t, n) {
                return null == t ? -1 : i.call(t, e, n);
            },
            merge: function (e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                    e[i++] = t[r];
                return (e.length = i), e;
            },
            grep: function (e, t, n) {
                for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                    !t(e[i], i) !== a && r.push(e[i]);
                return r;
            },
            map: function (e, t, n) {
                var r,
                    i,
                    o = 0,
                    a = [];
                if (p(e))
                    for (r = e.length; o < r; o++)
                        null != (i = t(e[o], o, n)) && a.push(i);
                else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
                return g(a);
            },
            guid: 1,
            support: y
        }),
        'function' == typeof Symbol &&
            (S.fn[Symbol.iterator] = t[Symbol.iterator]),
        S.each(
            'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(
                ' '
            ),
            function (e, t) {
                n['[object ' + t + ']'] = t.toLowerCase();
            }
        );
    var d = (function (n) {
        var e,
            d,
            b,
            o,
            i,
            h,
            f,
            g,
            w,
            u,
            l,
            T,
            C,
            a,
            E,
            v,
            s,
            c,
            y,
            S = 'sizzle' + 1 * new Date(),
            p = n.document,
            k = 0,
            r = 0,
            m = ue(),
            x = ue(),
            A = ue(),
            N = ue(),
            D = function (e, t) {
                return e === t && (l = !0), 0;
            },
            j = {}.hasOwnProperty,
            t = [],
            q = t.pop,
            L = t.push,
            H = t.push,
            O = t.slice,
            P = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1;
            },
            R =
                'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
            M = '[\\x20\\t\\r\\n\\f]',
            I =
                '(?:\\\\[\\da-fA-F]{1,6}' +
                M +
                '?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+',
            W =
                '\\[' +
                M +
                '*(' +
                I +
                ')(?:' +
                M +
                '*([*^$|!~]?=)' +
                M +
                '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
                I +
                '))|)' +
                M +
                '*\\]',
            F =
                ':(' +
                I +
                ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
                W +
                ')*)|.*)\\)|)',
            B = new RegExp(M + '+', 'g'),
            $ = new RegExp(
                '^' + M + '+|((?:^|[^\\\\])(?:\\\\.)*)' + M + '+$',
                'g'
            ),
            _ = new RegExp('^' + M + '*,' + M + '*'),
            z = new RegExp('^' + M + '*([>+~]|' + M + ')' + M + '*'),
            U = new RegExp(M + '|>'),
            X = new RegExp(F),
            V = new RegExp('^' + I + '$'),
            G = {
                ID: new RegExp('^#(' + I + ')'),
                CLASS: new RegExp('^\\.(' + I + ')'),
                TAG: new RegExp('^(' + I + '|[*])'),
                ATTR: new RegExp('^' + W),
                PSEUDO: new RegExp('^' + F),
                CHILD: new RegExp(
                    '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
                        M +
                        '*(even|odd|(([+-]|)(\\d*)n|)' +
                        M +
                        '*(?:([+-]|)' +
                        M +
                        '*(\\d+)|))' +
                        M +
                        '*\\)|)',
                    'i'
                ),
                bool: new RegExp('^(?:' + R + ')$', 'i'),
                needsContext: new RegExp(
                    '^' +
                        M +
                        '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
                        M +
                        '*((?:-\\d)?\\d*)' +
                        M +
                        '*\\)|)(?=[^-]|$)',
                    'i'
                )
            },
            Y = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp(
                '\\\\[\\da-fA-F]{1,6}' + M + '?|\\\\([^\\r\\n\\f])',
                'g'
            ),
            ne = function (e, t) {
                var n = '0x' + e.slice(1) - 65536;
                return (
                    t ||
                    (n < 0
                        ? String.fromCharCode(n + 65536)
                        : String.fromCharCode(
                              (n >> 10) | 55296,
                              (1023 & n) | 56320
                          ))
                );
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function (e, t) {
                return t
                    ? '\0' === e
                        ? '\ufffd'
                        : e.slice(0, -1) +
                          '\\' +
                          e.charCodeAt(e.length - 1).toString(16) +
                          ' '
                    : '\\' + e;
            },
            oe = function () {
                T();
            },
            ae = be(
                function (e) {
                    return (
                        !0 === e.disabled &&
                        'fieldset' === e.nodeName.toLowerCase()
                    );
                },
                { dir: 'parentNode', next: 'legend' }
            );
        try {
            H.apply((t = O.call(p.childNodes)), p.childNodes),
                t[p.childNodes.length].nodeType;
        } catch (e) {
            H = {
                apply: t.length
                    ? function (e, t) {
                          L.apply(e, O.call(t));
                      }
                    : function (e, t) {
                          var n = e.length,
                              r = 0;
                          while ((e[n++] = t[r++]));
                          e.length = n - 1;
                      }
            };
        }
        function se(t, e, n, r) {
            var i,
                o,
                a,
                s,
                u,
                l,
                c,
                f = e && e.ownerDocument,
                p = e ? e.nodeType : 9;
            if (
                ((n = n || []),
                'string' != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))
            )
                return n;
            if (!r && (T(e), (e = e || C), E)) {
                if (11 !== p && (u = Z.exec(t)))
                    if ((i = u[1])) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i))) return n;
                            if (a.id === i) return n.push(a), n;
                        } else if (
                            f &&
                            (a = f.getElementById(i)) &&
                            y(e, a) &&
                            a.id === i
                        )
                            return n.push(a), n;
                    } else {
                        if (u[2])
                            return H.apply(n, e.getElementsByTagName(t)), n;
                        if (
                            (i = u[3]) &&
                            d.getElementsByClassName &&
                            e.getElementsByClassName
                        )
                            return H.apply(n, e.getElementsByClassName(i)), n;
                    }
                if (
                    d.qsa &&
                    !N[t + ' '] &&
                    (!v || !v.test(t)) &&
                    (1 !== p || 'object' !== e.nodeName.toLowerCase())
                ) {
                    if (
                        ((c = t), (f = e), 1 === p && (U.test(t) || z.test(t)))
                    ) {
                        ((f = (ee.test(t) && ye(e.parentNode)) || e) === e &&
                            d.scope) ||
                            ((s = e.getAttribute('id'))
                                ? (s = s.replace(re, ie))
                                : e.setAttribute('id', (s = S))),
                            (o = (l = h(t)).length);
                        while (o--)
                            l[o] = (s ? '#' + s : ':scope') + ' ' + xe(l[o]);
                        c = l.join(',');
                    }
                    try {
                        return H.apply(n, f.querySelectorAll(c)), n;
                    } catch (e) {
                        N(t, !0);
                    } finally {
                        s === S && e.removeAttribute('id');
                    }
                }
            }
            return g(t.replace($, '$1'), e, n, r);
        }
        function ue() {
            var r = [];
            return function e(t, n) {
                return (
                    r.push(t + ' ') > b.cacheLength && delete e[r.shift()],
                    (e[t + ' '] = n)
                );
            };
        }
        function le(e) {
            return (e[S] = !0), e;
        }
        function ce(e) {
            var t = C.createElement('fieldset');
            try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
        }
        function fe(e, t) {
            var n = e.split('|'),
                r = n.length;
            while (r--) b.attrHandle[n[r]] = t;
        }
        function pe(e, t) {
            var n = t && e,
                r =
                    n &&
                    1 === e.nodeType &&
                    1 === t.nodeType &&
                    e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) while ((n = n.nextSibling)) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function de(t) {
            return function (e) {
                return 'input' === e.nodeName.toLowerCase() && e.type === t;
            };
        }
        function he(n) {
            return function (e) {
                var t = e.nodeName.toLowerCase();
                return ('input' === t || 'button' === t) && e.type === n;
            };
        }
        function ge(t) {
            return function (e) {
                return 'form' in e
                    ? e.parentNode && !1 === e.disabled
                        ? 'label' in e
                            ? 'label' in e.parentNode
                                ? e.parentNode.disabled === t
                                : e.disabled === t
                            : e.isDisabled === t ||
                              (e.isDisabled !== !t && ae(e) === t)
                        : e.disabled === t
                    : 'label' in e && e.disabled === t;
            };
        }
        function ve(a) {
            return le(function (o) {
                return (
                    (o = +o),
                    le(function (e, t) {
                        var n,
                            r = a([], e.length, o),
                            i = r.length;
                        while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
                    })
                );
            });
        }
        function ye(e) {
            return e && 'undefined' != typeof e.getElementsByTagName && e;
        }
        for (e in ((d = se.support = {}),
        (i = se.isXML = function (e) {
            var t = e.namespaceURI,
                n = (e.ownerDocument || e).documentElement;
            return !Y.test(t || (n && n.nodeName) || 'HTML');
        }),
        (T = se.setDocument = function (e) {
            var t,
                n,
                r = e ? e.ownerDocument || e : p;
            return (
                r != C &&
                    9 === r.nodeType &&
                    r.documentElement &&
                    ((a = (C = r).documentElement),
                    (E = !i(C)),
                    p != C &&
                        (n = C.defaultView) &&
                        n.top !== n &&
                        (n.addEventListener
                            ? n.addEventListener('unload', oe, !1)
                            : n.attachEvent && n.attachEvent('onunload', oe)),
                    (d.scope = ce(function (e) {
                        return (
                            a
                                .appendChild(e)
                                .appendChild(C.createElement('div')),
                            'undefined' != typeof e.querySelectorAll &&
                                !e.querySelectorAll(':scope fieldset div')
                                    .length
                        );
                    })),
                    (d.attributes = ce(function (e) {
                        return (
                            (e.className = 'i'), !e.getAttribute('className')
                        );
                    })),
                    (d.getElementsByTagName = ce(function (e) {
                        return (
                            e.appendChild(C.createComment('')),
                            !e.getElementsByTagName('*').length
                        );
                    })),
                    (d.getElementsByClassName = K.test(
                        C.getElementsByClassName
                    )),
                    (d.getById = ce(function (e) {
                        return (
                            (a.appendChild(e).id = S),
                            !C.getElementsByName ||
                                !C.getElementsByName(S).length
                        );
                    })),
                    d.getById
                        ? ((b.filter.ID = function (e) {
                              var t = e.replace(te, ne);
                              return function (e) {
                                  return e.getAttribute('id') === t;
                              };
                          }),
                          (b.find.ID = function (e, t) {
                              if ('undefined' != typeof t.getElementById && E) {
                                  var n = t.getElementById(e);
                                  return n ? [n] : [];
                              }
                          }))
                        : ((b.filter.ID = function (e) {
                              var n = e.replace(te, ne);
                              return function (e) {
                                  var t =
                                      'undefined' !=
                                          typeof e.getAttributeNode &&
                                      e.getAttributeNode('id');
                                  return t && t.value === n;
                              };
                          }),
                          (b.find.ID = function (e, t) {
                              if ('undefined' != typeof t.getElementById && E) {
                                  var n,
                                      r,
                                      i,
                                      o = t.getElementById(e);
                                  if (o) {
                                      if (
                                          (n = o.getAttributeNode('id')) &&
                                          n.value === e
                                      )
                                          return [o];
                                      (i = t.getElementsByName(e)), (r = 0);
                                      while ((o = i[r++]))
                                          if (
                                              (n = o.getAttributeNode('id')) &&
                                              n.value === e
                                          )
                                              return [o];
                                  }
                                  return [];
                              }
                          })),
                    (b.find.TAG = d.getElementsByTagName
                        ? function (e, t) {
                              return 'undefined' !=
                                  typeof t.getElementsByTagName
                                  ? t.getElementsByTagName(e)
                                  : d.qsa
                                  ? t.querySelectorAll(e)
                                  : void 0;
                          }
                        : function (e, t) {
                              var n,
                                  r = [],
                                  i = 0,
                                  o = t.getElementsByTagName(e);
                              if ('*' === e) {
                                  while ((n = o[i++]))
                                      1 === n.nodeType && r.push(n);
                                  return r;
                              }
                              return o;
                          }),
                    (b.find.CLASS =
                        d.getElementsByClassName &&
                        function (e, t) {
                            if (
                                'undefined' !=
                                    typeof t.getElementsByClassName &&
                                E
                            )
                                return t.getElementsByClassName(e);
                        }),
                    (s = []),
                    (v = []),
                    (d.qsa = K.test(C.querySelectorAll)) &&
                        (ce(function (e) {
                            var t;
                            (a.appendChild(e).innerHTML =
                                "<a id='" +
                                S +
                                "'></a><select id='" +
                                S +
                                "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                e.querySelectorAll("[msallowcapture^='']")
                                    .length &&
                                    v.push('[*^$]=' + M + '*(?:\'\'|"")'),
                                e.querySelectorAll('[selected]').length ||
                                    v.push('\\[' + M + '*(?:value|' + R + ')'),
                                e.querySelectorAll('[id~=' + S + '-]').length ||
                                    v.push('~='),
                                (t = C.createElement('input')).setAttribute(
                                    'name',
                                    ''
                                ),
                                e.appendChild(t),
                                e.querySelectorAll("[name='']").length ||
                                    v.push(
                                        '\\[' +
                                            M +
                                            '*name' +
                                            M +
                                            '*=' +
                                            M +
                                            '*(?:\'\'|"")'
                                    ),
                                e.querySelectorAll(':checked').length ||
                                    v.push(':checked'),
                                e.querySelectorAll('a#' + S + '+*').length ||
                                    v.push('.#.+[+~]'),
                                e.querySelectorAll('\\\f'),
                                v.push('[\\r\\n\\f]');
                        }),
                        ce(function (e) {
                            e.innerHTML =
                                "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var t = C.createElement('input');
                            t.setAttribute('type', 'hidden'),
                                e.appendChild(t).setAttribute('name', 'D'),
                                e.querySelectorAll('[name=d]').length &&
                                    v.push('name' + M + '*[*^$|!~]?='),
                                2 !== e.querySelectorAll(':enabled').length &&
                                    v.push(':enabled', ':disabled'),
                                (a.appendChild(e).disabled = !0),
                                2 !== e.querySelectorAll(':disabled').length &&
                                    v.push(':enabled', ':disabled'),
                                e.querySelectorAll('*,:x'),
                                v.push(',.*:');
                        })),
                    (d.matchesSelector = K.test(
                        (c =
                            a.matches ||
                            a.webkitMatchesSelector ||
                            a.mozMatchesSelector ||
                            a.oMatchesSelector ||
                            a.msMatchesSelector)
                    )) &&
                        ce(function (e) {
                            (d.disconnectedMatch = c.call(e, '*')),
                                c.call(e, "[s!='']:x"),
                                s.push('!=', F);
                        }),
                    (v = v.length && new RegExp(v.join('|'))),
                    (s = s.length && new RegExp(s.join('|'))),
                    (t = K.test(a.compareDocumentPosition)),
                    (y =
                        t || K.test(a.contains)
                            ? function (e, t) {
                                  var n =
                                          9 === e.nodeType
                                              ? e.documentElement
                                              : e,
                                      r = t && t.parentNode;
                                  return (
                                      e === r ||
                                      !(
                                          !r ||
                                          1 !== r.nodeType ||
                                          !(n.contains
                                              ? n.contains(r)
                                              : e.compareDocumentPosition &&
                                                16 &
                                                    e.compareDocumentPosition(
                                                        r
                                                    ))
                                      )
                                  );
                              }
                            : function (e, t) {
                                  if (t)
                                      while ((t = t.parentNode))
                                          if (t === e) return !0;
                                  return !1;
                              }),
                    (D = t
                        ? function (e, t) {
                              if (e === t) return (l = !0), 0;
                              var n =
                                  !e.compareDocumentPosition -
                                  !t.compareDocumentPosition;
                              return (
                                  n ||
                                  (1 &
                                      (n =
                                          (e.ownerDocument || e) ==
                                          (t.ownerDocument || t)
                                              ? e.compareDocumentPosition(t)
                                              : 1) ||
                                  (!d.sortDetached &&
                                      t.compareDocumentPosition(e) === n)
                                      ? e == C ||
                                        (e.ownerDocument == p && y(p, e))
                                          ? -1
                                          : t == C ||
                                            (t.ownerDocument == p && y(p, t))
                                          ? 1
                                          : u
                                          ? P(u, e) - P(u, t)
                                          : 0
                                      : 4 & n
                                      ? -1
                                      : 1)
                              );
                          }
                        : function (e, t) {
                              if (e === t) return (l = !0), 0;
                              var n,
                                  r = 0,
                                  i = e.parentNode,
                                  o = t.parentNode,
                                  a = [e],
                                  s = [t];
                              if (!i || !o)
                                  return e == C
                                      ? -1
                                      : t == C
                                      ? 1
                                      : i
                                      ? -1
                                      : o
                                      ? 1
                                      : u
                                      ? P(u, e) - P(u, t)
                                      : 0;
                              if (i === o) return pe(e, t);
                              n = e;
                              while ((n = n.parentNode)) a.unshift(n);
                              n = t;
                              while ((n = n.parentNode)) s.unshift(n);
                              while (a[r] === s[r]) r++;
                              return r
                                  ? pe(a[r], s[r])
                                  : a[r] == p
                                  ? -1
                                  : s[r] == p
                                  ? 1
                                  : 0;
                          })),
                C
            );
        }),
        (se.matches = function (e, t) {
            return se(e, null, null, t);
        }),
        (se.matchesSelector = function (e, t) {
            if (
                (T(e),
                d.matchesSelector &&
                    E &&
                    !N[t + ' '] &&
                    (!s || !s.test(t)) &&
                    (!v || !v.test(t)))
            )
                try {
                    var n = c.call(e, t);
                    if (
                        n ||
                        d.disconnectedMatch ||
                        (e.document && 11 !== e.document.nodeType)
                    )
                        return n;
                } catch (e) {
                    N(t, !0);
                }
            return 0 < se(t, C, null, [e]).length;
        }),
        (se.contains = function (e, t) {
            return (e.ownerDocument || e) != C && T(e), y(e, t);
        }),
        (se.attr = function (e, t) {
            (e.ownerDocument || e) != C && T(e);
            var n = b.attrHandle[t.toLowerCase()],
                r =
                    n && j.call(b.attrHandle, t.toLowerCase())
                        ? n(e, t, !E)
                        : void 0;
            return void 0 !== r
                ? r
                : d.attributes || !E
                ? e.getAttribute(t)
                : (r = e.getAttributeNode(t)) && r.specified
                ? r.value
                : null;
        }),
        (se.escape = function (e) {
            return (e + '').replace(re, ie);
        }),
        (se.error = function (e) {
            throw new Error('Syntax error, unrecognized expression: ' + e);
        }),
        (se.uniqueSort = function (e) {
            var t,
                n = [],
                r = 0,
                i = 0;
            if (
                ((l = !d.detectDuplicates),
                (u = !d.sortStable && e.slice(0)),
                e.sort(D),
                l)
            ) {
                while ((t = e[i++])) t === e[i] && (r = n.push(i));
                while (r--) e.splice(n[r], 1);
            }
            return (u = null), e;
        }),
        (o = se.getText = function (e) {
            var t,
                n = '',
                r = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ('string' == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
                } else if (3 === i || 4 === i) return e.nodeValue;
            } else while ((t = e[r++])) n += o(t);
            return n;
        }),
        ((b = se.selectors = {
            cacheLength: 50,
            createPseudo: le,
            match: G,
            attrHandle: {},
            find: {},
            relative: {
                '>': { dir: 'parentNode', first: !0 },
                ' ': { dir: 'parentNode' },
                '+': { dir: 'previousSibling', first: !0 },
                '~': { dir: 'previousSibling' }
            },
            preFilter: {
                ATTR: function (e) {
                    return (
                        (e[1] = e[1].replace(te, ne)),
                        (e[3] = (e[3] || e[4] || e[5] || '').replace(te, ne)),
                        '~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
                        e.slice(0, 4)
                    );
                },
                CHILD: function (e) {
                    return (
                        (e[1] = e[1].toLowerCase()),
                        'nth' === e[1].slice(0, 3)
                            ? (e[3] || se.error(e[0]),
                              (e[4] = +(e[4]
                                  ? e[5] + (e[6] || 1)
                                  : 2 * ('even' === e[3] || 'odd' === e[3]))),
                              (e[5] = +(e[7] + e[8] || 'odd' === e[3])))
                            : e[3] && se.error(e[0]),
                        e
                    );
                },
                PSEUDO: function (e) {
                    var t,
                        n = !e[6] && e[2];
                    return G.CHILD.test(e[0])
                        ? null
                        : (e[3]
                              ? (e[2] = e[4] || e[5] || '')
                              : n &&
                                X.test(n) &&
                                (t = h(n, !0)) &&
                                (t = n.indexOf(')', n.length - t) - n.length) &&
                                ((e[0] = e[0].slice(0, t)),
                                (e[2] = n.slice(0, t))),
                          e.slice(0, 3));
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return '*' === e
                        ? function () {
                              return !0;
                          }
                        : function (e) {
                              return (
                                  e.nodeName && e.nodeName.toLowerCase() === t
                              );
                          };
                },
                CLASS: function (e) {
                    var t = m[e + ' '];
                    return (
                        t ||
                        ((t = new RegExp(
                            '(^|' + M + ')' + e + '(' + M + '|$)'
                        )) &&
                            m(e, function (e) {
                                return t.test(
                                    ('string' == typeof e.className &&
                                        e.className) ||
                                        ('undefined' != typeof e.getAttribute &&
                                            e.getAttribute('class')) ||
                                        ''
                                );
                            }))
                    );
                },
                ATTR: function (n, r, i) {
                    return function (e) {
                        var t = se.attr(e, n);
                        return null == t
                            ? '!=' === r
                            : !r ||
                                  ((t += ''),
                                  '=' === r
                                      ? t === i
                                      : '!=' === r
                                      ? t !== i
                                      : '^=' === r
                                      ? i && 0 === t.indexOf(i)
                                      : '*=' === r
                                      ? i && -1 < t.indexOf(i)
                                      : '$=' === r
                                      ? i && t.slice(-i.length) === i
                                      : '~=' === r
                                      ? -1 <
                                        (' ' + t.replace(B, ' ') + ' ').indexOf(
                                            i
                                        )
                                      : '|=' === r &&
                                        (t === i ||
                                            t.slice(0, i.length + 1) ===
                                                i + '-'));
                    };
                },
                CHILD: function (h, e, t, g, v) {
                    var y = 'nth' !== h.slice(0, 3),
                        m = 'last' !== h.slice(-4),
                        x = 'of-type' === e;
                    return 1 === g && 0 === v
                        ? function (e) {
                              return !!e.parentNode;
                          }
                        : function (e, t, n) {
                              var r,
                                  i,
                                  o,
                                  a,
                                  s,
                                  u,
                                  l =
                                      y !== m
                                          ? 'nextSibling'
                                          : 'previousSibling',
                                  c = e.parentNode,
                                  f = x && e.nodeName.toLowerCase(),
                                  p = !n && !x,
                                  d = !1;
                              if (c) {
                                  if (y) {
                                      while (l) {
                                          a = e;
                                          while ((a = a[l]))
                                              if (
                                                  x
                                                      ? a.nodeName.toLowerCase() ===
                                                        f
                                                      : 1 === a.nodeType
                                              )
                                                  return !1;
                                          u = l =
                                              'only' === h &&
                                              !u &&
                                              'nextSibling';
                                      }
                                      return !0;
                                  }
                                  if (
                                      ((u = [m ? c.firstChild : c.lastChild]),
                                      m && p)
                                  ) {
                                      (d =
                                          (s =
                                              (r =
                                                  (i =
                                                      (o =
                                                          (a = c)[S] ||
                                                          (a[S] = {}))[
                                                          a.uniqueID
                                                      ] ||
                                                      (o[a.uniqueID] = {}))[
                                                      h
                                                  ] || [])[0] === k && r[1]) &&
                                          r[2]),
                                          (a = s && c.childNodes[s]);
                                      while (
                                          (a =
                                              (++s && a && a[l]) ||
                                              (d = s = 0) ||
                                              u.pop())
                                      )
                                          if (
                                              1 === a.nodeType &&
                                              ++d &&
                                              a === e
                                          ) {
                                              i[h] = [k, s, d];
                                              break;
                                          }
                                  } else if (
                                      (p &&
                                          (d = s =
                                              (r =
                                                  (i =
                                                      (o =
                                                          (a = e)[S] ||
                                                          (a[S] = {}))[
                                                          a.uniqueID
                                                      ] ||
                                                      (o[a.uniqueID] = {}))[
                                                      h
                                                  ] || [])[0] === k && r[1]),
                                      !1 === d)
                                  )
                                      while (
                                          (a =
                                              (++s && a && a[l]) ||
                                              (d = s = 0) ||
                                              u.pop())
                                      )
                                          if (
                                              (x
                                                  ? a.nodeName.toLowerCase() ===
                                                    f
                                                  : 1 === a.nodeType) &&
                                              ++d &&
                                              (p &&
                                                  ((i =
                                                      (o = a[S] || (a[S] = {}))[
                                                          a.uniqueID
                                                      ] ||
                                                      (o[a.uniqueID] = {}))[
                                                      h
                                                  ] = [k, d]),
                                              a === e)
                                          )
                                              break;
                                  return (
                                      (d -= v) === g ||
                                      (d % g == 0 && 0 <= d / g)
                                  );
                              }
                          };
                },
                PSEUDO: function (e, o) {
                    var t,
                        a =
                            b.pseudos[e] ||
                            b.setFilters[e.toLowerCase()] ||
                            se.error('unsupported pseudo: ' + e);
                    return a[S]
                        ? a(o)
                        : 1 < a.length
                        ? ((t = [e, e, '', o]),
                          b.setFilters.hasOwnProperty(e.toLowerCase())
                              ? le(function (e, t) {
                                    var n,
                                        r = a(e, o),
                                        i = r.length;
                                    while (i--)
                                        e[(n = P(e, r[i]))] = !(t[n] = r[i]);
                                })
                              : function (e) {
                                    return a(e, 0, t);
                                })
                        : a;
                }
            },
            pseudos: {
                not: le(function (e) {
                    var r = [],
                        i = [],
                        s = f(e.replace($, '$1'));
                    return s[S]
                        ? le(function (e, t, n, r) {
                              var i,
                                  o = s(e, null, r, []),
                                  a = e.length;
                              while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
                          })
                        : function (e, t, n) {
                              return (
                                  (r[0] = e),
                                  s(r, null, n, i),
                                  (r[0] = null),
                                  !i.pop()
                              );
                          };
                }),
                has: le(function (t) {
                    return function (e) {
                        return 0 < se(t, e).length;
                    };
                }),
                contains: le(function (t) {
                    return (
                        (t = t.replace(te, ne)),
                        function (e) {
                            return -1 < (e.textContent || o(e)).indexOf(t);
                        }
                    );
                }),
                lang: le(function (n) {
                    return (
                        V.test(n || '') || se.error('unsupported lang: ' + n),
                        (n = n.replace(te, ne).toLowerCase()),
                        function (e) {
                            var t;
                            do {
                                if (
                                    (t = E
                                        ? e.lang
                                        : e.getAttribute('xml:lang') ||
                                          e.getAttribute('lang'))
                                )
                                    return (
                                        (t = t.toLowerCase()) === n ||
                                        0 === t.indexOf(n + '-')
                                    );
                            } while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1;
                        }
                    );
                }),
                target: function (e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id;
                },
                root: function (e) {
                    return e === a;
                },
                focus: function (e) {
                    return (
                        e === C.activeElement &&
                        (!C.hasFocus || C.hasFocus()) &&
                        !!(e.type || e.href || ~e.tabIndex)
                    );
                },
                enabled: ge(!1),
                disabled: ge(!0),
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (
                        ('input' === t && !!e.checked) ||
                        ('option' === t && !!e.selected)
                    );
                },
                selected: function (e) {
                    return (
                        e.parentNode && e.parentNode.selectedIndex,
                        !0 === e.selected
                    );
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0;
                },
                parent: function (e) {
                    return !b.pseudos.empty(e);
                },
                header: function (e) {
                    return J.test(e.nodeName);
                },
                input: function (e) {
                    return Q.test(e.nodeName);
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (
                        ('input' === t && 'button' === e.type) || 'button' === t
                    );
                },
                text: function (e) {
                    var t;
                    return (
                        'input' === e.nodeName.toLowerCase() &&
                        'text' === e.type &&
                        (null == (t = e.getAttribute('type')) ||
                            'text' === t.toLowerCase())
                    );
                },
                first: ve(function () {
                    return [0];
                }),
                last: ve(function (e, t) {
                    return [t - 1];
                }),
                eq: ve(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                }),
                even: ve(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                }),
                odd: ve(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                }),
                lt: ve(function (e, t, n) {
                    for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; )
                        e.push(r);
                    return e;
                }),
                gt: ve(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                    return e;
                })
            }
        }).pseudos.nth = b.pseudos.eq),
        { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            b.pseudos[e] = de(e);
        for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e);
        function me() {}
        function xe(e) {
            for (var t = 0, n = e.length, r = ''; t < n; t++) r += e[t].value;
            return r;
        }
        function be(s, e, t) {
            var u = e.dir,
                l = e.next,
                c = l || u,
                f = t && 'parentNode' === c,
                p = r++;
            return e.first
                ? function (e, t, n) {
                      while ((e = e[u]))
                          if (1 === e.nodeType || f) return s(e, t, n);
                      return !1;
                  }
                : function (e, t, n) {
                      var r,
                          i,
                          o,
                          a = [k, p];
                      if (n) {
                          while ((e = e[u]))
                              if ((1 === e.nodeType || f) && s(e, t, n))
                                  return !0;
                      } else
                          while ((e = e[u]))
                              if (1 === e.nodeType || f)
                                  if (
                                      ((i =
                                          (o = e[S] || (e[S] = {}))[
                                              e.uniqueID
                                          ] || (o[e.uniqueID] = {})),
                                      l && l === e.nodeName.toLowerCase())
                                  )
                                      e = e[u] || e;
                                  else {
                                      if (
                                          (r = i[c]) &&
                                          r[0] === k &&
                                          r[1] === p
                                      )
                                          return (a[2] = r[2]);
                                      if (((i[c] = a)[2] = s(e, t, n)))
                                          return !0;
                                  }
                      return !1;
                  };
        }
        function we(i) {
            return 1 < i.length
                ? function (e, t, n) {
                      var r = i.length;
                      while (r--) if (!i[r](e, t, n)) return !1;
                      return !0;
                  }
                : i[0];
        }
        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                (o = e[s]) &&
                    ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
            return a;
        }
        function Ce(d, h, g, v, y, e) {
            return (
                v && !v[S] && (v = Ce(v)),
                y && !y[S] && (y = Ce(y, e)),
                le(function (e, t, n, r) {
                    var i,
                        o,
                        a,
                        s = [],
                        u = [],
                        l = t.length,
                        c =
                            e ||
                            (function (e, t, n) {
                                for (var r = 0, i = t.length; r < i; r++)
                                    se(e, t[r], n);
                                return n;
                            })(h || '*', n.nodeType ? [n] : n, []),
                        f = !d || (!e && h) ? c : Te(c, s, d, n, r),
                        p = g ? (y || (e ? d : l || v) ? [] : t) : f;
                    if ((g && g(f, p, n, r), v)) {
                        (i = Te(p, u)), v(i, [], n, r), (o = i.length);
                        while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
                    }
                    if (e) {
                        if (y || d) {
                            if (y) {
                                (i = []), (o = p.length);
                                while (o--) (a = p[o]) && i.push((f[o] = a));
                                y(null, (p = []), i, r);
                            }
                            o = p.length;
                            while (o--)
                                (a = p[o]) &&
                                    -1 < (i = y ? P(e, a) : s[o]) &&
                                    (e[i] = !(t[i] = a));
                        }
                    } else (p = Te(p === t ? p.splice(l, p.length) : p)), y ? y(null, t, p, r) : H.apply(t, p);
                })
            );
        }
        function Ee(e) {
            for (
                var i,
                    t,
                    n,
                    r = e.length,
                    o = b.relative[e[0].type],
                    a = o || b.relative[' '],
                    s = o ? 1 : 0,
                    u = be(
                        function (e) {
                            return e === i;
                        },
                        a,
                        !0
                    ),
                    l = be(
                        function (e) {
                            return -1 < P(i, e);
                        },
                        a,
                        !0
                    ),
                    c = [
                        function (e, t, n) {
                            var r =
                                (!o && (n || t !== w)) ||
                                ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                            return (i = null), r;
                        }
                    ];
                s < r;
                s++
            )
                if ((t = b.relative[e[s].type])) c = [be(we(c), t)];
                else {
                    if (
                        (t = b.filter[e[s].type].apply(null, e[s].matches))[S]
                    ) {
                        for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type]) break;
                        return Ce(
                            1 < s && we(c),
                            1 < s &&
                                xe(
                                    e.slice(0, s - 1).concat({
                                        value: ' ' === e[s - 2].type ? '*' : ''
                                    })
                                ).replace($, '$1'),
                            t,
                            s < n && Ee(e.slice(s, n)),
                            n < r && Ee((e = e.slice(n))),
                            n < r && xe(e)
                        );
                    }
                    c.push(t);
                }
            return we(c);
        }
        return (
            (me.prototype = b.filters = b.pseudos),
            (b.setFilters = new me()),
            (h = se.tokenize = function (e, t) {
                var n,
                    r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l = x[e + ' '];
                if (l) return t ? 0 : l.slice(0);
                (a = e), (s = []), (u = b.preFilter);
                while (a) {
                    for (o in ((n && !(r = _.exec(a))) ||
                        (r && (a = a.slice(r[0].length) || a),
                        s.push((i = []))),
                    (n = !1),
                    (r = z.exec(a)) &&
                        ((n = r.shift()),
                        i.push({ value: n, type: r[0].replace($, ' ') }),
                        (a = a.slice(n.length))),
                    b.filter))
                        !(r = G[o].exec(a)) ||
                            (u[o] && !(r = u[o](r))) ||
                            ((n = r.shift()),
                            i.push({ value: n, type: o, matches: r }),
                            (a = a.slice(n.length)));
                    if (!n) break;
                }
                return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
            }),
            (f = se.compile = function (e, t) {
                var n,
                    v,
                    y,
                    m,
                    x,
                    r,
                    i = [],
                    o = [],
                    a = A[e + ' '];
                if (!a) {
                    t || (t = h(e)), (n = t.length);
                    while (n--) (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
                    (a = A(
                        e,
                        ((v = o),
                        (m = 0 < (y = i).length),
                        (x = 0 < v.length),
                        (r = function (e, t, n, r, i) {
                            var o,
                                a,
                                s,
                                u = 0,
                                l = '0',
                                c = e && [],
                                f = [],
                                p = w,
                                d = e || (x && b.find.TAG('*', i)),
                                h = (k += null == p ? 1 : Math.random() || 0.1),
                                g = d.length;
                            for (
                                i && (w = t == C || t || i);
                                l !== g && null != (o = d[l]);
                                l++
                            ) {
                                if (x && o) {
                                    (a = 0),
                                        t ||
                                            o.ownerDocument == C ||
                                            (T(o), (n = !E));
                                    while ((s = v[a++]))
                                        if (s(o, t || C, n)) {
                                            r.push(o);
                                            break;
                                        }
                                    i && (k = h);
                                }
                                m && ((o = !s && o) && u--, e && c.push(o));
                            }
                            if (((u += l), m && l !== u)) {
                                a = 0;
                                while ((s = y[a++])) s(c, f, t, n);
                                if (e) {
                                    if (0 < u)
                                        while (l--)
                                            c[l] || f[l] || (f[l] = q.call(r));
                                    f = Te(f);
                                }
                                H.apply(r, f),
                                    i &&
                                        !e &&
                                        0 < f.length &&
                                        1 < u + y.length &&
                                        se.uniqueSort(r);
                            }
                            return i && ((k = h), (w = p)), c;
                        }),
                        m ? le(r) : r)
                    )).selector = e;
                }
                return a;
            }),
            (g = se.select = function (e, t, n, r) {
                var i,
                    o,
                    a,
                    s,
                    u,
                    l = 'function' == typeof e && e,
                    c = !r && h((e = l.selector || e));
                if (((n = n || []), 1 === c.length)) {
                    if (
                        2 < (o = c[0] = c[0].slice(0)).length &&
                        'ID' === (a = o[0]).type &&
                        9 === t.nodeType &&
                        E &&
                        b.relative[o[1].type]
                    ) {
                        if (
                            !(t = (b.find.ID(a.matches[0].replace(te, ne), t) ||
                                [])[0])
                        )
                            return n;
                        l && (t = t.parentNode),
                            (e = e.slice(o.shift().value.length));
                    }
                    i = G.needsContext.test(e) ? 0 : o.length;
                    while (i--) {
                        if (((a = o[i]), b.relative[(s = a.type)])) break;
                        if (
                            (u = b.find[s]) &&
                            (r = u(
                                a.matches[0].replace(te, ne),
                                (ee.test(o[0].type) && ye(t.parentNode)) || t
                            ))
                        ) {
                            if ((o.splice(i, 1), !(e = r.length && xe(o))))
                                return H.apply(n, r), n;
                            break;
                        }
                    }
                }
                return (
                    (l || f(e, c))(
                        r,
                        t,
                        !E,
                        n,
                        !t || (ee.test(e) && ye(t.parentNode)) || t
                    ),
                    n
                );
            }),
            (d.sortStable = S.split('').sort(D).join('') === S),
            (d.detectDuplicates = !!l),
            T(),
            (d.sortDetached = ce(function (e) {
                return (
                    1 & e.compareDocumentPosition(C.createElement('fieldset'))
                );
            })),
            ce(function (e) {
                return (
                    (e.innerHTML = "<a href='#'></a>"),
                    '#' === e.firstChild.getAttribute('href')
                );
            }) ||
                fe('type|href|height|width', function (e, t, n) {
                    if (!n)
                        return e.getAttribute(
                            t,
                            'type' === t.toLowerCase() ? 1 : 2
                        );
                }),
            (d.attributes &&
                ce(function (e) {
                    return (
                        (e.innerHTML = '<input/>'),
                        e.firstChild.setAttribute('value', ''),
                        '' === e.firstChild.getAttribute('value')
                    );
                })) ||
                fe('value', function (e, t, n) {
                    if (!n && 'input' === e.nodeName.toLowerCase())
                        return e.defaultValue;
                }),
            ce(function (e) {
                return null == e.getAttribute('disabled');
            }) ||
                fe(R, function (e, t, n) {
                    var r;
                    if (!n)
                        return !0 === e[t]
                            ? t.toLowerCase()
                            : (r = e.getAttributeNode(t)) && r.specified
                            ? r.value
                            : null;
                }),
            se
        );
    })(C);
    (S.find = d),
        (S.expr = d.selectors),
        (S.expr[':'] = S.expr.pseudos),
        (S.uniqueSort = S.unique = d.uniqueSort),
        (S.text = d.getText),
        (S.isXMLDoc = d.isXML),
        (S.contains = d.contains),
        (S.escapeSelector = d.escape);
    var h = function (e, t, n) {
            var r = [],
                i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && S(e).is(n)) break;
                    r.push(e);
                }
            return r;
        },
        T = function (e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n;
        },
        k = S.expr.match.needsContext;
    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function D(e, n, r) {
        return m(n)
            ? S.grep(e, function (e, t) {
                  return !!n.call(e, t, e) !== r;
              })
            : n.nodeType
            ? S.grep(e, function (e) {
                  return (e === n) !== r;
              })
            : 'string' != typeof n
            ? S.grep(e, function (e) {
                  return -1 < i.call(n, e) !== r;
              })
            : S.filter(n, e, r);
    }
    (S.filter = function (e, t, n) {
        var r = t[0];
        return (
            n && (e = ':not(' + e + ')'),
            1 === t.length && 1 === r.nodeType
                ? S.find.matchesSelector(r, e)
                    ? [r]
                    : []
                : S.find.matches(
                      e,
                      S.grep(t, function (e) {
                          return 1 === e.nodeType;
                      })
                  )
        );
    }),
        S.fn.extend({
            find: function (e) {
                var t,
                    n,
                    r = this.length,
                    i = this;
                if ('string' != typeof e)
                    return this.pushStack(
                        S(e).filter(function () {
                            for (t = 0; t < r; t++)
                                if (S.contains(i[t], this)) return !0;
                        })
                    );
                for (n = this.pushStack([]), t = 0; t < r; t++)
                    S.find(e, i[t], n);
                return 1 < r ? S.uniqueSort(n) : n;
            },
            filter: function (e) {
                return this.pushStack(D(this, e || [], !1));
            },
            not: function (e) {
                return this.pushStack(D(this, e || [], !0));
            },
            is: function (e) {
                return !!D(
                    this,
                    'string' == typeof e && k.test(e) ? S(e) : e || [],
                    !1
                ).length;
            }
        });
    var j,
        q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    ((S.fn.init = function (e, t, n) {
        var r, i;
        if (!e) return this;
        if (((n = n || j), 'string' == typeof e)) {
            if (
                !(r =
                    '<' === e[0] && '>' === e[e.length - 1] && 3 <= e.length
                        ? [null, e, null]
                        : q.exec(e)) ||
                (!r[1] && t)
            )
                return !t || t.jquery
                    ? (t || n).find(e)
                    : this.constructor(t).find(e);
            if (r[1]) {
                if (
                    ((t = t instanceof S ? t[0] : t),
                    S.merge(
                        this,
                        S.parseHTML(
                            r[1],
                            t && t.nodeType ? t.ownerDocument || t : E,
                            !0
                        )
                    ),
                    N.test(r[1]) && S.isPlainObject(t))
                )
                    for (r in t)
                        m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this;
            }
            return (
                (i = E.getElementById(r[2])) &&
                    ((this[0] = i), (this.length = 1)),
                this
            );
        }
        return e.nodeType
            ? ((this[0] = e), (this.length = 1), this)
            : m(e)
            ? void 0 !== n.ready
                ? n.ready(e)
                : e(S)
            : S.makeArray(e, this);
    }).prototype = S.fn),
        (j = S(E));
    var L = /^(?:parents|prev(?:Until|All))/,
        H = { children: !0, contents: !0, next: !0, prev: !0 };
    function O(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType);
        return e;
    }
    S.fn.extend({
        has: function (e) {
            var t = S(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++)
                    if (S.contains(this, t[e])) return !0;
            });
        },
        closest: function (e, t) {
            var n,
                r = 0,
                i = this.length,
                o = [],
                a = 'string' != typeof e && S(e);
            if (!k.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (
                            n.nodeType < 11 &&
                            (a
                                ? -1 < a.index(n)
                                : 1 === n.nodeType &&
                                  S.find.matchesSelector(n, e))
                        ) {
                            o.push(n);
                            break;
                        }
            return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
        },
        index: function (e) {
            return e
                ? 'string' == typeof e
                    ? i.call(S(e), this[0])
                    : i.call(this, e.jquery ? e[0] : e)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
        },
        add: function (e, t) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
        },
        addBack: function (e) {
            return this.add(
                null == e ? this.prevObject : this.prevObject.filter(e)
            );
        }
    }),
        S.each(
            {
                parent: function (e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                    return h(e, 'parentNode');
                },
                parentsUntil: function (e, t, n) {
                    return h(e, 'parentNode', n);
                },
                next: function (e) {
                    return O(e, 'nextSibling');
                },
                prev: function (e) {
                    return O(e, 'previousSibling');
                },
                nextAll: function (e) {
                    return h(e, 'nextSibling');
                },
                prevAll: function (e) {
                    return h(e, 'previousSibling');
                },
                nextUntil: function (e, t, n) {
                    return h(e, 'nextSibling', n);
                },
                prevUntil: function (e, t, n) {
                    return h(e, 'previousSibling', n);
                },
                siblings: function (e) {
                    return T((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                    return T(e.firstChild);
                },
                contents: function (e) {
                    return null != e.contentDocument && r(e.contentDocument)
                        ? e.contentDocument
                        : (A(e, 'template') && (e = e.content || e),
                          S.merge([], e.childNodes));
                }
            },
            function (r, i) {
                S.fn[r] = function (e, t) {
                    var n = S.map(this, i, e);
                    return (
                        'Until' !== r.slice(-5) && (t = e),
                        t && 'string' == typeof t && (n = S.filter(t, n)),
                        1 < this.length &&
                            (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()),
                        this.pushStack(n)
                    );
                };
            }
        );
    var P = /[^\x20\t\r\n\f]+/g;
    function R(e) {
        return e;
    }
    function M(e) {
        throw e;
    }
    function I(e, t, n, r) {
        var i;
        try {
            e && m((i = e.promise))
                ? i.call(e).done(t).fail(n)
                : e && m((i = e.then))
                ? i.call(e, t, n)
                : t.apply(void 0, [e].slice(r));
        } catch (e) {
            n.apply(void 0, [e]);
        }
    }
    (S.Callbacks = function (r) {
        var e, n;
        r =
            'string' == typeof r
                ? ((e = r),
                  (n = {}),
                  S.each(e.match(P) || [], function (e, t) {
                      n[t] = !0;
                  }),
                  n)
                : S.extend({}, r);
        var i,
            t,
            o,
            a,
            s = [],
            u = [],
            l = -1,
            c = function () {
                for (a = a || r.once, o = i = !0; u.length; l = -1) {
                    t = u.shift();
                    while (++l < s.length)
                        !1 === s[l].apply(t[0], t[1]) &&
                            r.stopOnFalse &&
                            ((l = s.length), (t = !1));
                }
                r.memory || (t = !1), (i = !1), a && (s = t ? [] : '');
            },
            f = {
                add: function () {
                    return (
                        s &&
                            (t && !i && ((l = s.length - 1), u.push(t)),
                            (function n(e) {
                                S.each(e, function (e, t) {
                                    m(t)
                                        ? (r.unique && f.has(t)) || s.push(t)
                                        : t &&
                                          t.length &&
                                          'string' !== w(t) &&
                                          n(t);
                                });
                            })(arguments),
                            t && !i && c()),
                        this
                    );
                },
                remove: function () {
                    return (
                        S.each(arguments, function (e, t) {
                            var n;
                            while (-1 < (n = S.inArray(t, s, n)))
                                s.splice(n, 1), n <= l && l--;
                        }),
                        this
                    );
                },
                has: function (e) {
                    return e ? -1 < S.inArray(e, s) : 0 < s.length;
                },
                empty: function () {
                    return s && (s = []), this;
                },
                disable: function () {
                    return (a = u = []), (s = t = ''), this;
                },
                disabled: function () {
                    return !s;
                },
                lock: function () {
                    return (a = u = []), t || i || (s = t = ''), this;
                },
                locked: function () {
                    return !!a;
                },
                fireWith: function (e, t) {
                    return (
                        a ||
                            ((t = [e, (t = t || []).slice ? t.slice() : t]),
                            u.push(t),
                            i || c()),
                        this
                    );
                },
                fire: function () {
                    return f.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!o;
                }
            };
        return f;
    }),
        S.extend({
            Deferred: function (e) {
                var o = [
                        [
                            'notify',
                            'progress',
                            S.Callbacks('memory'),
                            S.Callbacks('memory'),
                            2
                        ],
                        [
                            'resolve',
                            'done',
                            S.Callbacks('once memory'),
                            S.Callbacks('once memory'),
                            0,
                            'resolved'
                        ],
                        [
                            'reject',
                            'fail',
                            S.Callbacks('once memory'),
                            S.Callbacks('once memory'),
                            1,
                            'rejected'
                        ]
                    ],
                    i = 'pending',
                    a = {
                        state: function () {
                            return i;
                        },
                        always: function () {
                            return s.done(arguments).fail(arguments), this;
                        },
                        catch: function (e) {
                            return a.then(null, e);
                        },
                        pipe: function () {
                            var i = arguments;
                            return S.Deferred(function (r) {
                                S.each(o, function (e, t) {
                                    var n = m(i[t[4]]) && i[t[4]];
                                    s[t[1]](function () {
                                        var e = n && n.apply(this, arguments);
                                        e && m(e.promise)
                                            ? e
                                                  .promise()
                                                  .progress(r.notify)
                                                  .done(r.resolve)
                                                  .fail(r.reject)
                                            : r[t[0] + 'With'](
                                                  this,
                                                  n ? [e] : arguments
                                              );
                                    });
                                }),
                                    (i = null);
                            }).promise();
                        },
                        then: function (t, n, r) {
                            var u = 0;
                            function l(i, o, a, s) {
                                return function () {
                                    var n = this,
                                        r = arguments,
                                        e = function () {
                                            var e, t;
                                            if (!(i < u)) {
                                                if (
                                                    (e = a.apply(n, r)) ===
                                                    o.promise()
                                                )
                                                    throw new TypeError(
                                                        'Thenable self-resolution'
                                                    );
                                                (t =
                                                    e &&
                                                    ('object' == typeof e ||
                                                        'function' ==
                                                            typeof e) &&
                                                    e.then),
                                                    m(t)
                                                        ? s
                                                            ? t.call(
                                                                  e,
                                                                  l(u, o, R, s),
                                                                  l(u, o, M, s)
                                                              )
                                                            : (u++,
                                                              t.call(
                                                                  e,
                                                                  l(u, o, R, s),
                                                                  l(u, o, M, s),
                                                                  l(
                                                                      u,
                                                                      o,
                                                                      R,
                                                                      o.notifyWith
                                                                  )
                                                              ))
                                                        : (a !== R &&
                                                              ((n = void 0),
                                                              (r = [e])),
                                                          (s || o.resolveWith)(
                                                              n,
                                                              r
                                                          ));
                                            }
                                        },
                                        t = s
                                            ? e
                                            : function () {
                                                  try {
                                                      e();
                                                  } catch (e) {
                                                      S.Deferred
                                                          .exceptionHook &&
                                                          S.Deferred.exceptionHook(
                                                              e,
                                                              t.stackTrace
                                                          ),
                                                          u <= i + 1 &&
                                                              (a !== M &&
                                                                  ((n = void 0),
                                                                  (r = [e])),
                                                              o.rejectWith(
                                                                  n,
                                                                  r
                                                              ));
                                                  }
                                              };
                                    i
                                        ? t()
                                        : (S.Deferred.getStackHook &&
                                              (t.stackTrace = S.Deferred.getStackHook()),
                                          C.setTimeout(t));
                                };
                            }
                            return S.Deferred(function (e) {
                                o[0][3].add(
                                    l(0, e, m(r) ? r : R, e.notifyWith)
                                ),
                                    o[1][3].add(l(0, e, m(t) ? t : R)),
                                    o[2][3].add(l(0, e, m(n) ? n : M));
                            }).promise();
                        },
                        promise: function (e) {
                            return null != e ? S.extend(e, a) : a;
                        }
                    },
                    s = {};
                return (
                    S.each(o, function (e, t) {
                        var n = t[2],
                            r = t[5];
                        (a[t[1]] = n.add),
                            r &&
                                n.add(
                                    function () {
                                        i = r;
                                    },
                                    o[3 - e][2].disable,
                                    o[3 - e][3].disable,
                                    o[0][2].lock,
                                    o[0][3].lock
                                ),
                            n.add(t[3].fire),
                            (s[t[0]] = function () {
                                return (
                                    s[t[0] + 'With'](
                                        this === s ? void 0 : this,
                                        arguments
                                    ),
                                    this
                                );
                            }),
                            (s[t[0] + 'With'] = n.fireWith);
                    }),
                    a.promise(s),
                    e && e.call(s, s),
                    s
                );
            },
            when: function (e) {
                var n = arguments.length,
                    t = n,
                    r = Array(t),
                    i = s.call(arguments),
                    o = S.Deferred(),
                    a = function (t) {
                        return function (e) {
                            (r[t] = this),
                                (i[t] =
                                    1 < arguments.length
                                        ? s.call(arguments)
                                        : e),
                                --n || o.resolveWith(r, i);
                        };
                    };
                if (
                    n <= 1 &&
                    (I(e, o.done(a(t)).resolve, o.reject, !n),
                    'pending' === o.state() || m(i[t] && i[t].then))
                )
                    return o.then();
                while (t--) I(i[t], a(t), o.reject);
                return o.promise();
            }
        });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (S.Deferred.exceptionHook = function (e, t) {
        C.console &&
            C.console.warn &&
            e &&
            W.test(e.name) &&
            C.console.warn(
                'jQuery.Deferred exception: ' + e.message,
                e.stack,
                t
            );
    }),
        (S.readyException = function (e) {
            C.setTimeout(function () {
                throw e;
            });
        });
    var F = S.Deferred();
    function B() {
        E.removeEventListener('DOMContentLoaded', B),
            C.removeEventListener('load', B),
            S.ready();
    }
    (S.fn.ready = function (e) {
        return (
            F.then(e)['catch'](function (e) {
                S.readyException(e);
            }),
            this
        );
    }),
        S.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
                (!0 === e ? --S.readyWait : S.isReady) ||
                    ((S.isReady = !0) !== e && 0 < --S.readyWait) ||
                    F.resolveWith(E, [S]);
            }
        }),
        (S.ready.then = F.then),
        'complete' === E.readyState ||
        ('loading' !== E.readyState && !E.documentElement.doScroll)
            ? C.setTimeout(S.ready)
            : (E.addEventListener('DOMContentLoaded', B),
              C.addEventListener('load', B));
    var $ = function (e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ('object' === w(n))
                for (s in ((i = !0), n)) $(e, t, s, n[s], !0, o, a);
            else if (
                void 0 !== r &&
                ((i = !0),
                m(r) || (a = !0),
                l &&
                    (a
                        ? (t.call(e, r), (t = null))
                        : ((l = t),
                          (t = function (e, t, n) {
                              return l.call(S(e), n);
                          }))),
                t)
            )
                for (; s < u; s++)
                    t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
        },
        _ = /^-ms-/,
        z = /-([a-z])/g;
    function U(e, t) {
        return t.toUpperCase();
    }
    function X(e) {
        return e.replace(_, 'ms-').replace(z, U);
    }
    var V = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
    function G() {
        this.expando = S.expando + G.uid++;
    }
    (G.uid = 1),
        (G.prototype = {
            cache: function (e) {
                var t = e[this.expando];
                return (
                    t ||
                        ((t = {}),
                        V(e) &&
                            (e.nodeType
                                ? (e[this.expando] = t)
                                : Object.defineProperty(e, this.expando, {
                                      value: t,
                                      configurable: !0
                                  }))),
                    t
                );
            },
            set: function (e, t, n) {
                var r,
                    i = this.cache(e);
                if ('string' == typeof t) i[X(t)] = n;
                else for (r in t) i[X(r)] = t[r];
                return i;
            },
            get: function (e, t) {
                return void 0 === t
                    ? this.cache(e)
                    : e[this.expando] && e[this.expando][X(t)];
            },
            access: function (e, t, n) {
                return void 0 === t ||
                    (t && 'string' == typeof t && void 0 === n)
                    ? this.get(e, t)
                    : (this.set(e, t, n), void 0 !== n ? n : t);
            },
            remove: function (e, t) {
                var n,
                    r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t)
                            ? t.map(X)
                            : (t = X(t)) in r
                            ? [t]
                            : t.match(P) || []).length;
                        while (n--) delete r[t[n]];
                    }
                    (void 0 === t || S.isEmptyObject(r)) &&
                        (e.nodeType
                            ? (e[this.expando] = void 0)
                            : delete e[this.expando]);
                }
            },
            hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !S.isEmptyObject(t);
            }
        });
    var Y = new G(),
        Q = new G(),
        J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        K = /[A-Z]/g;
    function Z(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (
                ((r = 'data-' + t.replace(K, '-$&').toLowerCase()),
                'string' == typeof (n = e.getAttribute(r)))
            ) {
                try {
                    n =
                        'true' === (i = n) ||
                        ('false' !== i &&
                            ('null' === i
                                ? null
                                : i === +i + ''
                                ? +i
                                : J.test(i)
                                ? JSON.parse(i)
                                : i));
                } catch (e) {}
                Q.set(e, t, n);
            } else n = void 0;
        return n;
    }
    S.extend({
        hasData: function (e) {
            return Q.hasData(e) || Y.hasData(e);
        },
        data: function (e, t, n) {
            return Q.access(e, t, n);
        },
        removeData: function (e, t) {
            Q.remove(e, t);
        },
        _data: function (e, t, n) {
            return Y.access(e, t, n);
        },
        _removeData: function (e, t) {
            Y.remove(e, t);
        }
    }),
        S.fn.extend({
            data: function (n, e) {
                var t,
                    r,
                    i,
                    o = this[0],
                    a = o && o.attributes;
                if (void 0 === n) {
                    if (
                        this.length &&
                        ((i = Q.get(o)),
                        1 === o.nodeType && !Y.get(o, 'hasDataAttrs'))
                    ) {
                        t = a.length;
                        while (t--)
                            a[t] &&
                                0 === (r = a[t].name).indexOf('data-') &&
                                ((r = X(r.slice(5))), Z(o, r, i[r]));
                        Y.set(o, 'hasDataAttrs', !0);
                    }
                    return i;
                }
                return 'object' == typeof n
                    ? this.each(function () {
                          Q.set(this, n);
                      })
                    : $(
                          this,
                          function (e) {
                              var t;
                              if (o && void 0 === e)
                                  return void 0 !== (t = Q.get(o, n))
                                      ? t
                                      : void 0 !== (t = Z(o, n))
                                      ? t
                                      : void 0;
                              this.each(function () {
                                  Q.set(this, n, e);
                              });
                          },
                          null,
                          e,
                          1 < arguments.length,
                          null,
                          !0
                      );
            },
            removeData: function (e) {
                return this.each(function () {
                    Q.remove(this, e);
                });
            }
        }),
        S.extend({
            queue: function (e, t, n) {
                var r;
                if (e)
                    return (
                        (t = (t || 'fx') + 'queue'),
                        (r = Y.get(e, t)),
                        n &&
                            (!r || Array.isArray(n)
                                ? (r = Y.access(e, t, S.makeArray(n)))
                                : r.push(n)),
                        r || []
                    );
            },
            dequeue: function (e, t) {
                t = t || 'fx';
                var n = S.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    o = S._queueHooks(e, t);
                'inprogress' === i && ((i = n.shift()), r--),
                    i &&
                        ('fx' === t && n.unshift('inprogress'),
                        delete o.stop,
                        i.call(
                            e,
                            function () {
                                S.dequeue(e, t);
                            },
                            o
                        )),
                    !r && o && o.empty.fire();
            },
            _queueHooks: function (e, t) {
                var n = t + 'queueHooks';
                return (
                    Y.get(e, n) ||
                    Y.access(e, n, {
                        empty: S.Callbacks('once memory').add(function () {
                            Y.remove(e, [t + 'queue', n]);
                        })
                    })
                );
            }
        }),
        S.fn.extend({
            queue: function (t, n) {
                var e = 2;
                return (
                    'string' != typeof t && ((n = t), (t = 'fx'), e--),
                    arguments.length < e
                        ? S.queue(this[0], t)
                        : void 0 === n
                        ? this
                        : this.each(function () {
                              var e = S.queue(this, t, n);
                              S._queueHooks(this, t),
                                  'fx' === t &&
                                      'inprogress' !== e[0] &&
                                      S.dequeue(this, t);
                          })
                );
            },
            dequeue: function (e) {
                return this.each(function () {
                    S.dequeue(this, e);
                });
            },
            clearQueue: function (e) {
                return this.queue(e || 'fx', []);
            },
            promise: function (e, t) {
                var n,
                    r = 1,
                    i = S.Deferred(),
                    o = this,
                    a = this.length,
                    s = function () {
                        --r || i.resolveWith(o, [o]);
                    };
                'string' != typeof e && ((t = e), (e = void 0)),
                    (e = e || 'fx');
                while (a--)
                    (n = Y.get(o[a], e + 'queueHooks')) &&
                        n.empty &&
                        (r++, n.empty.add(s));
                return s(), i.promise(t);
            }
        });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp('^(?:([+-])=|)(' + ee + ')([a-z%]*)$', 'i'),
        ne = ['Top', 'Right', 'Bottom', 'Left'],
        re = E.documentElement,
        ie = function (e) {
            return S.contains(e.ownerDocument, e);
        },
        oe = { composed: !0 };
    re.getRootNode &&
        (ie = function (e) {
            return (
                S.contains(e.ownerDocument, e) ||
                e.getRootNode(oe) === e.ownerDocument
            );
        });
    var ae = function (e, t) {
        return (
            'none' === (e = t || e).style.display ||
            ('' === e.style.display && ie(e) && 'none' === S.css(e, 'display'))
        );
    };
    function se(e, t, n, r) {
        var i,
            o,
            a = 20,
            s = r
                ? function () {
                      return r.cur();
                  }
                : function () {
                      return S.css(e, t, '');
                  },
            u = s(),
            l = (n && n[3]) || (S.cssNumber[t] ? '' : 'px'),
            c =
                e.nodeType &&
                (S.cssNumber[t] || ('px' !== l && +u)) &&
                te.exec(S.css(e, t));
        if (c && c[3] !== l) {
            (u /= 2), (l = l || c[3]), (c = +u || 1);
            while (a--)
                S.style(e, t, c + l),
                    (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
                    (c /= o);
            (c *= 2), S.style(e, t, c + l), (n = n || []);
        }
        return (
            n &&
                ((c = +c || +u || 0),
                (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
                r && ((r.unit = l), (r.start = c), (r.end = i))),
            i
        );
    }
    var ue = {};
    function le(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
            (r = e[c]).style &&
                ((n = r.style.display),
                t
                    ? ('none' === n &&
                          ((l[c] = Y.get(r, 'display') || null),
                          l[c] || (r.style.display = '')),
                      '' === r.style.display &&
                          ae(r) &&
                          (l[c] =
                              ((u = a = o = void 0),
                              (a = (i = r).ownerDocument),
                              (s = i.nodeName),
                              (u = ue[s]) ||
                                  ((o = a.body.appendChild(a.createElement(s))),
                                  (u = S.css(o, 'display')),
                                  o.parentNode.removeChild(o),
                                  'none' === u && (u = 'block'),
                                  (ue[s] = u)))))
                    : 'none' !== n &&
                      ((l[c] = 'none'), Y.set(r, 'display', n)));
        for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
        return e;
    }
    S.fn.extend({
        show: function () {
            return le(this, !0);
        },
        hide: function () {
            return le(this);
        },
        toggle: function (e) {
            return 'boolean' == typeof e
                ? e
                    ? this.show()
                    : this.hide()
                : this.each(function () {
                      ae(this) ? S(this).show() : S(this).hide();
                  });
        }
    });
    var ce,
        fe,
        pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i;
    (ce = E.createDocumentFragment().appendChild(E.createElement('div'))),
        (fe = E.createElement('input')).setAttribute('type', 'radio'),
        fe.setAttribute('checked', 'checked'),
        fe.setAttribute('name', 't'),
        ce.appendChild(fe),
        (y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (ce.innerHTML = '<textarea>x</textarea>'),
        (y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue),
        (ce.innerHTML = '<option></option>'),
        (y.option = !!ce.lastChild);
    var ge = {
        thead: [1, '<table>', '</table>'],
        col: [2, '<table><colgroup>', '</colgroup></table>'],
        tr: [2, '<table><tbody>', '</tbody></table>'],
        td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
        _default: [0, '', '']
    };
    function ve(e, t) {
        var n;
        return (
            (n =
                'undefined' != typeof e.getElementsByTagName
                    ? e.getElementsByTagName(t || '*')
                    : 'undefined' != typeof e.querySelectorAll
                    ? e.querySelectorAll(t || '*')
                    : []),
            void 0 === t || (t && A(e, t)) ? S.merge([e], n) : n
        );
    }
    function ye(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            Y.set(e[n], 'globalEval', !t || Y.get(t[n], 'globalEval'));
    }
    (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
        (ge.th = ge.td),
        y.option ||
            (ge.optgroup = ge.option = [
                1,
                "<select multiple='multiple'>",
                '</select>'
            ]);
    var me = /<|&#?\w+;/;
    function xe(e, t, n, r, i) {
        for (
            var o,
                a,
                s,
                u,
                l,
                c,
                f = t.createDocumentFragment(),
                p = [],
                d = 0,
                h = e.length;
            d < h;
            d++
        )
            if ((o = e[d]) || 0 === o)
                if ('object' === w(o)) S.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
                    (a = a || f.appendChild(t.createElement('div'))),
                        (s = (de.exec(o) || ['', ''])[1].toLowerCase()),
                        (u = ge[s] || ge._default),
                        (a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2]),
                        (c = u[0]);
                    while (c--) a = a.lastChild;
                    S.merge(p, a.childNodes),
                        ((a = f.firstChild).textContent = '');
                } else p.push(t.createTextNode(o));
        (f.textContent = ''), (d = 0);
        while ((o = p[d++]))
            if (r && -1 < S.inArray(o, r)) i && i.push(o);
            else if (
                ((l = ie(o)),
                (a = ve(f.appendChild(o), 'script')),
                l && ye(a),
                n)
            ) {
                c = 0;
                while ((o = a[c++])) he.test(o.type || '') && n.push(o);
            }
        return f;
    }
    var be = /^key/,
        we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Te = /^([^.]*)(?:\.(.+)|)/;
    function Ce() {
        return !0;
    }
    function Ee() {
        return !1;
    }
    function Se(e, t) {
        return (
            (e ===
                (function () {
                    try {
                        return E.activeElement;
                    } catch (e) {}
                })()) ==
            ('focus' === t)
        );
    }
    function ke(e, t, n, r, i, o) {
        var a, s;
        if ('object' == typeof t) {
            for (s in ('string' != typeof n && ((r = r || n), (n = void 0)), t))
                ke(e, s, n, r, t[s], o);
            return e;
        }
        if (
            (null == r && null == i
                ? ((i = n), (r = n = void 0))
                : null == i &&
                  ('string' == typeof n
                      ? ((i = r), (r = void 0))
                      : ((i = r), (r = n), (n = void 0))),
            !1 === i)
        )
            i = Ee;
        else if (!i) return e;
        return (
            1 === o &&
                ((a = i),
                ((i = function (e) {
                    return S().off(e), a.apply(this, arguments);
                }).guid = a.guid || (a.guid = S.guid++))),
            e.each(function () {
                S.event.add(this, t, i, r, n);
            })
        );
    }
    function Ae(e, i, o) {
        o
            ? (Y.set(e, i, !1),
              S.event.add(e, i, {
                  namespace: !1,
                  handler: function (e) {
                      var t,
                          n,
                          r = Y.get(this, i);
                      if (1 & e.isTrigger && this[i]) {
                          if (r.length)
                              (S.event.special[i] || {}).delegateType &&
                                  e.stopPropagation();
                          else if (
                              ((r = s.call(arguments)),
                              Y.set(this, i, r),
                              (t = o(this, i)),
                              this[i](),
                              r !== (n = Y.get(this, i)) || t
                                  ? Y.set(this, i, !1)
                                  : (n = {}),
                              r !== n)
                          )
                              return (
                                  e.stopImmediatePropagation(),
                                  e.preventDefault(),
                                  n.value
                              );
                      } else
                          r.length &&
                              (Y.set(this, i, {
                                  value: S.event.trigger(
                                      S.extend(r[0], S.Event.prototype),
                                      r.slice(1),
                                      this
                                  )
                              }),
                              e.stopImmediatePropagation());
                  }
              }))
            : void 0 === Y.get(e, i) && S.event.add(e, i, Ce);
    }
    (S.event = {
        global: {},
        add: function (t, e, n, r, i) {
            var o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                v = Y.get(t);
            if (V(t)) {
                n.handler && ((n = (o = n).handler), (i = o.selector)),
                    i && S.find.matchesSelector(re, i),
                    n.guid || (n.guid = S.guid++),
                    (u = v.events) || (u = v.events = Object.create(null)),
                    (a = v.handle) ||
                        (a = v.handle = function (e) {
                            return 'undefined' != typeof S &&
                                S.event.triggered !== e.type
                                ? S.event.dispatch.apply(t, arguments)
                                : void 0;
                        }),
                    (l = (e = (e || '').match(P) || ['']).length);
                while (l--)
                    (d = g = (s = Te.exec(e[l]) || [])[1]),
                        (h = (s[2] || '').split('.').sort()),
                        d &&
                            ((f = S.event.special[d] || {}),
                            (d = (i ? f.delegateType : f.bindType) || d),
                            (f = S.event.special[d] || {}),
                            (c = S.extend(
                                {
                                    type: d,
                                    origType: g,
                                    data: r,
                                    handler: n,
                                    guid: n.guid,
                                    selector: i,
                                    needsContext:
                                        i && S.expr.match.needsContext.test(i),
                                    namespace: h.join('.')
                                },
                                o
                            )),
                            (p = u[d]) ||
                                (((p = u[d] = []).delegateCount = 0),
                                (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                                    (t.addEventListener &&
                                        t.addEventListener(d, a))),
                            f.add &&
                                (f.add.call(t, c),
                                c.handler.guid || (c.handler.guid = n.guid)),
                            i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                            (S.event.global[d] = !0));
            }
        },
        remove: function (e, t, n, r, i) {
            var o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                v = Y.hasData(e) && Y.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || '').match(P) || ['']).length;
                while (l--)
                    if (
                        ((d = g = (s = Te.exec(t[l]) || [])[1]),
                        (h = (s[2] || '').split('.').sort()),
                        d)
                    ) {
                        (f = S.event.special[d] || {}),
                            (p =
                                u[
                                    (d = (r ? f.delegateType : f.bindType) || d)
                                ] || []),
                            (s =
                                s[2] &&
                                new RegExp(
                                    '(^|\\.)' +
                                        h.join('\\.(?:.*\\.|)') +
                                        '(\\.|$)'
                                )),
                            (a = o = p.length);
                        while (o--)
                            (c = p[o]),
                                (!i && g !== c.origType) ||
                                    (n && n.guid !== c.guid) ||
                                    (s && !s.test(c.namespace)) ||
                                    (r &&
                                        r !== c.selector &&
                                        ('**' !== r || !c.selector)) ||
                                    (p.splice(o, 1),
                                    c.selector && p.delegateCount--,
                                    f.remove && f.remove.call(e, c));
                        a &&
                            !p.length &&
                            ((f.teardown &&
                                !1 !== f.teardown.call(e, h, v.handle)) ||
                                S.removeEvent(e, d, v.handle),
                            delete u[d]);
                    } else for (d in u) S.event.remove(e, d + t[l], n, r, !0);
                S.isEmptyObject(u) && Y.remove(e, 'handle events');
            }
        },
        dispatch: function (e) {
            var t,
                n,
                r,
                i,
                o,
                a,
                s = new Array(arguments.length),
                u = S.event.fix(e),
                l =
                    (Y.get(this, 'events') || Object.create(null))[u.type] ||
                    [],
                c = S.event.special[u.type] || {};
            for (s[0] = u, t = 1; t < arguments.length; t++)
                s[t] = arguments[t];
            if (
                ((u.delegateTarget = this),
                !c.preDispatch || !1 !== c.preDispatch.call(this, u))
            ) {
                (a = S.event.handlers.call(this, u, l)), (t = 0);
                while ((i = a[t++]) && !u.isPropagationStopped()) {
                    (u.currentTarget = i.elem), (n = 0);
                    while (
                        (o = i.handlers[n++]) &&
                        !u.isImmediatePropagationStopped()
                    )
                        (u.rnamespace &&
                            !1 !== o.namespace &&
                            !u.rnamespace.test(o.namespace)) ||
                            ((u.handleObj = o),
                            (u.data = o.data),
                            void 0 !==
                                (r = (
                                    (S.event.special[o.origType] || {})
                                        .handle || o.handler
                                ).apply(i.elem, s)) &&
                                !1 === (u.result = r) &&
                                (u.preventDefault(), u.stopPropagation()));
                }
                return c.postDispatch && c.postDispatch.call(this, u), u.result;
            }
        },
        handlers: function (e, t) {
            var n,
                r,
                i,
                o,
                a,
                s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !('click' === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (
                        1 === l.nodeType &&
                        ('click' !== e.type || !0 !== l.disabled)
                    ) {
                        for (o = [], a = {}, n = 0; n < u; n++)
                            void 0 === a[(i = (r = t[n]).selector + ' ')] &&
                                (a[i] = r.needsContext
                                    ? -1 < S(i, this).index(l)
                                    : S.find(i, this, null, [l]).length),
                                a[i] && o.push(r);
                        o.length && s.push({ elem: l, handlers: o });
                    }
            return (
                (l = this),
                u < t.length && s.push({ elem: l, handlers: t.slice(u) }),
                s
            );
        },
        addProp: function (t, e) {
            Object.defineProperty(S.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e)
                    ? function () {
                          if (this.originalEvent) return e(this.originalEvent);
                      }
                    : function () {
                          if (this.originalEvent) return this.originalEvent[t];
                      },
                set: function (e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    });
                }
            });
        },
        fix: function (e) {
            return e[S.expando] ? e : new S.Event(e);
        },
        special: {
            load: { noBubble: !0 },
            click: {
                setup: function (e) {
                    var t = this || e;
                    return (
                        pe.test(t.type) &&
                            t.click &&
                            A(t, 'input') &&
                            Ae(t, 'click', Ce),
                        !1
                    );
                },
                trigger: function (e) {
                    var t = this || e;
                    return (
                        pe.test(t.type) &&
                            t.click &&
                            A(t, 'input') &&
                            Ae(t, 'click'),
                        !0
                    );
                },
                _default: function (e) {
                    var t = e.target;
                    return (
                        (pe.test(t.type) &&
                            t.click &&
                            A(t, 'input') &&
                            Y.get(t, 'click')) ||
                        A(t, 'a')
                    );
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result &&
                        e.originalEvent &&
                        (e.originalEvent.returnValue = e.result);
                }
            }
        }
    }),
        (S.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n);
        }),
        (S.Event = function (e, t) {
            if (!(this instanceof S.Event)) return new S.Event(e, t);
            e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented =
                      e.defaultPrevented ||
                      (void 0 === e.defaultPrevented && !1 === e.returnValue)
                          ? Ce
                          : Ee),
                  (this.target =
                      e.target && 3 === e.target.nodeType
                          ? e.target.parentNode
                          : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && S.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[S.expando] = !0);
        }),
        (S.Event.prototype = {
            constructor: S.Event,
            isDefaultPrevented: Ee,
            isPropagationStopped: Ee,
            isImmediatePropagationStopped: Ee,
            isSimulated: !1,
            preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = Ce),
                    e && !this.isSimulated && e.preventDefault();
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = Ce),
                    e && !this.isSimulated && e.stopPropagation();
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = Ce),
                    e && !this.isSimulated && e.stopImmediatePropagation(),
                    this.stopPropagation();
            }
        }),
        S.each(
            {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function (e) {
                    var t = e.button;
                    return null == e.which && be.test(e.type)
                        ? null != e.charCode
                            ? e.charCode
                            : e.keyCode
                        : !e.which && void 0 !== t && we.test(e.type)
                        ? 1 & t
                            ? 1
                            : 2 & t
                            ? 3
                            : 4 & t
                            ? 2
                            : 0
                        : e.which;
                }
            },
            S.event.addProp
        ),
        S.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
            S.event.special[e] = {
                setup: function () {
                    return Ae(this, e, Se), !1;
                },
                trigger: function () {
                    return Ae(this, e), !0;
                },
                delegateType: t
            };
        }),
        S.each(
            {
                mouseenter: 'mouseover',
                mouseleave: 'mouseout',
                pointerenter: 'pointerover',
                pointerleave: 'pointerout'
            },
            function (e, i) {
                S.event.special[e] = {
                    delegateType: i,
                    bindType: i,
                    handle: function (e) {
                        var t,
                            n = e.relatedTarget,
                            r = e.handleObj;
                        return (
                            (n && (n === this || S.contains(this, n))) ||
                                ((e.type = r.origType),
                                (t = r.handler.apply(this, arguments)),
                                (e.type = i)),
                            t
                        );
                    }
                };
            }
        ),
        S.fn.extend({
            on: function (e, t, n, r) {
                return ke(this, e, t, n, r);
            },
            one: function (e, t, n, r) {
                return ke(this, e, t, n, r, 1);
            },
            off: function (e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj)
                    return (
                        (r = e.handleObj),
                        S(e.delegateTarget).off(
                            r.namespace
                                ? r.origType + '.' + r.namespace
                                : r.origType,
                            r.selector,
                            r.handler
                        ),
                        this
                    );
                if ('object' == typeof e) {
                    for (i in e) this.off(i, t, e[i]);
                    return this;
                }
                return (
                    (!1 !== t && 'function' != typeof t) ||
                        ((n = t), (t = void 0)),
                    !1 === n && (n = Ee),
                    this.each(function () {
                        S.event.remove(this, e, n, t);
                    })
                );
            }
        });
    var Ne = /<script|<style|<link/i,
        De = /checked\s*(?:[^=]|=\s*.checked.)/i,
        je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function qe(e, t) {
        return (
            (A(e, 'table') &&
                A(11 !== t.nodeType ? t : t.firstChild, 'tr') &&
                S(e).children('tbody')[0]) ||
            e
        );
    }
    function Le(e) {
        return (e.type = (null !== e.getAttribute('type')) + '/' + e.type), e;
    }
    function He(e) {
        return (
            'true/' === (e.type || '').slice(0, 5)
                ? (e.type = e.type.slice(5))
                : e.removeAttribute('type'),
            e
        );
    }
    function Oe(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (s = Y.get(e).events))
                for (i in (Y.remove(t, 'handle events'), s))
                    for (n = 0, r = s[i].length; n < r; n++)
                        S.event.add(t, i, s[i][n]);
            Q.hasData(e) &&
                ((o = Q.access(e)), (a = S.extend({}, o)), Q.set(t, a));
        }
    }
    function Pe(n, r, i, o) {
        r = g(r);
        var e,
            t,
            a,
            s,
            u,
            l,
            c = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = m(d);
        if (h || (1 < f && 'string' == typeof d && !y.checkClone && De.test(d)))
            return n.each(function (e) {
                var t = n.eq(e);
                h && (r[0] = d.call(this, e, t.html())), Pe(t, r, i, o);
            });
        if (
            f &&
            ((t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild),
            1 === e.childNodes.length && (e = t),
            t || o)
        ) {
            for (s = (a = S.map(ve(e, 'script'), Le)).length; c < f; c++)
                (u = e),
                    c !== p &&
                        ((u = S.clone(u, !0, !0)),
                        s && S.merge(a, ve(u, 'script'))),
                    i.call(n[c], u, c);
            if (s)
                for (
                    l = a[a.length - 1].ownerDocument, S.map(a, He), c = 0;
                    c < s;
                    c++
                )
                    (u = a[c]),
                        he.test(u.type || '') &&
                            !Y.access(u, 'globalEval') &&
                            S.contains(l, u) &&
                            (u.src && 'module' !== (u.type || '').toLowerCase()
                                ? S._evalUrl &&
                                  !u.noModule &&
                                  S._evalUrl(
                                      u.src,
                                      {
                                          nonce:
                                              u.nonce || u.getAttribute('nonce')
                                      },
                                      l
                                  )
                                : b(u.textContent.replace(je, ''), u, l));
        }
        return n;
    }
    function Re(e, t, n) {
        for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || S.cleanData(ve(r)),
                r.parentNode &&
                    (n && ie(r) && ye(ve(r, 'script')),
                    r.parentNode.removeChild(r));
        return e;
    }
    S.extend({
        htmlPrefilter: function (e) {
            return e;
        },
        clone: function (e, t, n) {
            var r,
                i,
                o,
                a,
                s,
                u,
                l,
                c = e.cloneNode(!0),
                f = ie(e);
            if (
                !(
                    y.noCloneChecked ||
                    (1 !== e.nodeType && 11 !== e.nodeType) ||
                    S.isXMLDoc(e)
                )
            )
                for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++)
                    (s = o[r]),
                        (u = a[r]),
                        void 0,
                        'input' === (l = u.nodeName.toLowerCase()) &&
                        pe.test(s.type)
                            ? (u.checked = s.checked)
                            : ('input' !== l && 'textarea' !== l) ||
                              (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (
                        o = o || ve(e), a = a || ve(c), r = 0, i = o.length;
                        r < i;
                        r++
                    )
                        Oe(o[r], a[r]);
                else Oe(e, c);
            return (
                0 < (a = ve(c, 'script')).length &&
                    ye(a, !f && ve(e, 'script')),
                c
            );
        },
        cleanData: function (e) {
            for (
                var t, n, r, i = S.event.special, o = 0;
                void 0 !== (n = e[o]);
                o++
            )
                if (V(n)) {
                    if ((t = n[Y.expando])) {
                        if (t.events)
                            for (r in t.events)
                                i[r]
                                    ? S.event.remove(n, r)
                                    : S.removeEvent(n, r, t.handle);
                        n[Y.expando] = void 0;
                    }
                    n[Q.expando] && (n[Q.expando] = void 0);
                }
        }
    }),
        S.fn.extend({
            detach: function (e) {
                return Re(this, e, !0);
            },
            remove: function (e) {
                return Re(this, e);
            },
            text: function (e) {
                return $(
                    this,
                    function (e) {
                        return void 0 === e
                            ? S.text(this)
                            : this.empty().each(function () {
                                  (1 !== this.nodeType &&
                                      11 !== this.nodeType &&
                                      9 !== this.nodeType) ||
                                      (this.textContent = e);
                              });
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            append: function () {
                return Pe(this, arguments, function (e) {
                    (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        qe(this, e).appendChild(e);
                });
            },
            prepend: function () {
                return Pe(this, arguments, function (e) {
                    if (
                        1 === this.nodeType ||
                        11 === this.nodeType ||
                        9 === this.nodeType
                    ) {
                        var t = qe(this, e);
                        t.insertBefore(e, t.firstChild);
                    }
                });
            },
            before: function () {
                return Pe(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this);
                });
            },
            after: function () {
                return Pe(this, arguments, function (e) {
                    this.parentNode &&
                        this.parentNode.insertBefore(e, this.nextSibling);
                });
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)
                    1 === e.nodeType &&
                        (S.cleanData(ve(e, !1)), (e.textContent = ''));
                return this;
            },
            clone: function (e, t) {
                return (
                    (e = null != e && e),
                    (t = null == t ? e : t),
                    this.map(function () {
                        return S.clone(this, e, t);
                    })
                );
            },
            html: function (e) {
                return $(
                    this,
                    function (e) {
                        var t = this[0] || {},
                            n = 0,
                            r = this.length;
                        if (void 0 === e && 1 === t.nodeType)
                            return t.innerHTML;
                        if (
                            'string' == typeof e &&
                            !Ne.test(e) &&
                            !ge[(de.exec(e) || ['', ''])[1].toLowerCase()]
                        ) {
                            e = S.htmlPrefilter(e);
                            try {
                                for (; n < r; n++)
                                    1 === (t = this[n] || {}).nodeType &&
                                        (S.cleanData(ve(t, !1)),
                                        (t.innerHTML = e));
                                t = 0;
                            } catch (e) {}
                        }
                        t && this.empty().append(e);
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            replaceWith: function () {
                var n = [];
                return Pe(
                    this,
                    arguments,
                    function (e) {
                        var t = this.parentNode;
                        S.inArray(this, n) < 0 &&
                            (S.cleanData(ve(this)),
                            t && t.replaceChild(e, this));
                    },
                    n
                );
            }
        }),
        S.each(
            {
                appendTo: 'append',
                prependTo: 'prepend',
                insertBefore: 'before',
                insertAfter: 'after',
                replaceAll: 'replaceWith'
            },
            function (e, a) {
                S.fn[e] = function (e) {
                    for (
                        var t, n = [], r = S(e), i = r.length - 1, o = 0;
                        o <= i;
                        o++
                    )
                        (t = o === i ? this : this.clone(!0)),
                            S(r[o])[a](t),
                            u.apply(n, t.get());
                    return this.pushStack(n);
                };
            }
        );
    var Me = new RegExp('^(' + ee + ')(?!px)[a-z%]+$', 'i'),
        Ie = function (e) {
            var t = e.ownerDocument.defaultView;
            return (t && t.opener) || (t = C), t.getComputedStyle(e);
        },
        We = function (e, t, n) {
            var r,
                i,
                o = {};
            for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
            for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
            return r;
        },
        Fe = new RegExp(ne.join('|'), 'i');
    function Be(e, t, n) {
        var r,
            i,
            o,
            a,
            s = e.style;
        return (
            (n = n || Ie(e)) &&
                ('' !== (a = n.getPropertyValue(t) || n[t]) ||
                    ie(e) ||
                    (a = S.style(e, t)),
                !y.pixelBoxStyles() &&
                    Me.test(a) &&
                    Fe.test(t) &&
                    ((r = s.width),
                    (i = s.minWidth),
                    (o = s.maxWidth),
                    (s.minWidth = s.maxWidth = s.width = a),
                    (a = n.width),
                    (s.width = r),
                    (s.minWidth = i),
                    (s.maxWidth = o))),
            void 0 !== a ? a + '' : a
        );
    }
    function $e(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
            }
        };
    }
    !(function () {
        function e() {
            if (l) {
                (u.style.cssText =
                    'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
                    (l.style.cssText =
                        'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
                    re.appendChild(u).appendChild(l);
                var e = C.getComputedStyle(l);
                (n = '1%' !== e.top),
                    (s = 12 === t(e.marginLeft)),
                    (l.style.right = '60%'),
                    (o = 36 === t(e.right)),
                    (r = 36 === t(e.width)),
                    (l.style.position = 'absolute'),
                    (i = 12 === t(l.offsetWidth / 3)),
                    re.removeChild(u),
                    (l = null);
            }
        }
        function t(e) {
            return Math.round(parseFloat(e));
        }
        var n,
            r,
            i,
            o,
            a,
            s,
            u = E.createElement('div'),
            l = E.createElement('div');
        l.style &&
            ((l.style.backgroundClip = 'content-box'),
            (l.cloneNode(!0).style.backgroundClip = ''),
            (y.clearCloneStyle = 'content-box' === l.style.backgroundClip),
            S.extend(y, {
                boxSizingReliable: function () {
                    return e(), r;
                },
                pixelBoxStyles: function () {
                    return e(), o;
                },
                pixelPosition: function () {
                    return e(), n;
                },
                reliableMarginLeft: function () {
                    return e(), s;
                },
                scrollboxSize: function () {
                    return e(), i;
                },
                reliableTrDimensions: function () {
                    var e, t, n, r;
                    return (
                        null == a &&
                            ((e = E.createElement('table')),
                            (t = E.createElement('tr')),
                            (n = E.createElement('div')),
                            (e.style.cssText =
                                'position:absolute;left:-11111px'),
                            (t.style.height = '1px'),
                            (n.style.height = '9px'),
                            re.appendChild(e).appendChild(t).appendChild(n),
                            (r = C.getComputedStyle(t)),
                            (a = 3 < parseInt(r.height)),
                            re.removeChild(e)),
                        a
                    );
                }
            }));
    })();
    var _e = ['Webkit', 'Moz', 'ms'],
        ze = E.createElement('div').style,
        Ue = {};
    function Xe(e) {
        var t = S.cssProps[e] || Ue[e];
        return (
            t ||
            (e in ze
                ? e
                : (Ue[e] =
                      (function (e) {
                          var t = e[0].toUpperCase() + e.slice(1),
                              n = _e.length;
                          while (n--) if ((e = _e[n] + t) in ze) return e;
                      })(e) || e))
        );
    }
    var Ve = /^(none|table(?!-c[ea]).+)/,
        Ge = /^--/,
        Ye = { position: 'absolute', visibility: 'hidden', display: 'block' },
        Qe = { letterSpacing: '0', fontWeight: '400' };
    function Je(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || 'px') : t;
    }
    function Ke(e, t, n, r, i, o) {
        var a = 'width' === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? 'border' : 'content')) return 0;
        for (; a < 4; a += 2)
            'margin' === n && (u += S.css(e, n + ne[a], !0, i)),
                r
                    ? ('content' === n &&
                          (u -= S.css(e, 'padding' + ne[a], !0, i)),
                      'margin' !== n &&
                          (u -= S.css(e, 'border' + ne[a] + 'Width', !0, i)))
                    : ((u += S.css(e, 'padding' + ne[a], !0, i)),
                      'padding' !== n
                          ? (u += S.css(e, 'border' + ne[a] + 'Width', !0, i))
                          : (s += S.css(e, 'border' + ne[a] + 'Width', !0, i)));
        return (
            !r &&
                0 <= o &&
                (u +=
                    Math.max(
                        0,
                        Math.ceil(
                            e['offset' + t[0].toUpperCase() + t.slice(1)] -
                                o -
                                u -
                                s -
                                0.5
                        )
                    ) || 0),
            u
        );
    }
    function Ze(e, t, n) {
        var r = Ie(e),
            i =
                (!y.boxSizingReliable() || n) &&
                'border-box' === S.css(e, 'boxSizing', !1, r),
            o = i,
            a = Be(e, t, r),
            s = 'offset' + t[0].toUpperCase() + t.slice(1);
        if (Me.test(a)) {
            if (!n) return a;
            a = 'auto';
        }
        return (
            ((!y.boxSizingReliable() && i) ||
                (!y.reliableTrDimensions() && A(e, 'tr')) ||
                'auto' === a ||
                (!parseFloat(a) && 'inline' === S.css(e, 'display', !1, r))) &&
                e.getClientRects().length &&
                ((i = 'border-box' === S.css(e, 'boxSizing', !1, r)),
                (o = s in e) && (a = e[s])),
            (a = parseFloat(a) || 0) +
                Ke(e, t, n || (i ? 'border' : 'content'), o, r, a) +
                'px'
        );
    }
    function et(e, t, n, r, i) {
        return new et.prototype.init(e, t, n, r, i);
    }
    S.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Be(e, 'opacity');
                        return '' === n ? '1' : n;
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i,
                    o,
                    a,
                    s = X(t),
                    u = Ge.test(t),
                    l = e.style;
                if (
                    (u || (t = Xe(s)),
                    (a = S.cssHooks[t] || S.cssHooks[s]),
                    void 0 === n)
                )
                    return a && 'get' in a && void 0 !== (i = a.get(e, !1, r))
                        ? i
                        : l[t];
                'string' === (o = typeof n) &&
                    (i = te.exec(n)) &&
                    i[1] &&
                    ((n = se(e, t, i)), (o = 'number')),
                    null != n &&
                        n == n &&
                        ('number' !== o ||
                            u ||
                            (n += (i && i[3]) || (S.cssNumber[s] ? '' : 'px')),
                        y.clearCloneStyle ||
                            '' !== n ||
                            0 !== t.indexOf('background') ||
                            (l[t] = 'inherit'),
                        (a && 'set' in a && void 0 === (n = a.set(e, n, r))) ||
                            (u ? l.setProperty(t, n) : (l[t] = n)));
            }
        },
        css: function (e, t, n, r) {
            var i,
                o,
                a,
                s = X(t);
            return (
                Ge.test(t) || (t = Xe(s)),
                (a = S.cssHooks[t] || S.cssHooks[s]) &&
                    'get' in a &&
                    (i = a.get(e, !0, n)),
                void 0 === i && (i = Be(e, t, r)),
                'normal' === i && t in Qe && (i = Qe[t]),
                '' === n || n
                    ? ((o = parseFloat(i)),
                      !0 === n || isFinite(o) ? o || 0 : i)
                    : i
            );
        }
    }),
        S.each(['height', 'width'], function (e, u) {
            S.cssHooks[u] = {
                get: function (e, t, n) {
                    if (t)
                        return !Ve.test(S.css(e, 'display')) ||
                            (e.getClientRects().length &&
                                e.getBoundingClientRect().width)
                            ? Ze(e, u, n)
                            : We(e, Ye, function () {
                                  return Ze(e, u, n);
                              });
                },
                set: function (e, t, n) {
                    var r,
                        i = Ie(e),
                        o = !y.scrollboxSize() && 'absolute' === i.position,
                        a =
                            (o || n) &&
                            'border-box' === S.css(e, 'boxSizing', !1, i),
                        s = n ? Ke(e, u, n, a, i) : 0;
                    return (
                        a &&
                            o &&
                            (s -= Math.ceil(
                                e['offset' + u[0].toUpperCase() + u.slice(1)] -
                                    parseFloat(i[u]) -
                                    Ke(e, u, 'border', !1, i) -
                                    0.5
                            )),
                        s &&
                            (r = te.exec(t)) &&
                            'px' !== (r[3] || 'px') &&
                            ((e.style[u] = t), (t = S.css(e, u))),
                        Je(0, t, s)
                    );
                }
            };
        }),
        (S.cssHooks.marginLeft = $e(y.reliableMarginLeft, function (e, t) {
            if (t)
                return (
                    (parseFloat(Be(e, 'marginLeft')) ||
                        e.getBoundingClientRect().left -
                            We(e, { marginLeft: 0 }, function () {
                                return e.getBoundingClientRect().left;
                            })) + 'px'
                );
        })),
        S.each({ margin: '', padding: '', border: 'Width' }, function (i, o) {
            (S.cssHooks[i + o] = {
                expand: function (e) {
                    for (
                        var t = 0,
                            n = {},
                            r = 'string' == typeof e ? e.split(' ') : [e];
                        t < 4;
                        t++
                    )
                        n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
                    return n;
                }
            }),
                'margin' !== i && (S.cssHooks[i + o].set = Je);
        }),
        S.fn.extend({
            css: function (e, t) {
                return $(
                    this,
                    function (e, t, n) {
                        var r,
                            i,
                            o = {},
                            a = 0;
                        if (Array.isArray(t)) {
                            for (r = Ie(e), i = t.length; a < i; a++)
                                o[t[a]] = S.css(e, t[a], !1, r);
                            return o;
                        }
                        return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
                    },
                    e,
                    t,
                    1 < arguments.length
                );
            }
        }),
        (((S.Tween = et).prototype = {
            constructor: et,
            init: function (e, t, n, r, i, o) {
                (this.elem = e),
                    (this.prop = n),
                    (this.easing = i || S.easing._default),
                    (this.options = t),
                    (this.start = this.now = this.cur()),
                    (this.end = r),
                    (this.unit = o || (S.cssNumber[n] ? '' : 'px'));
            },
            cur: function () {
                var e = et.propHooks[this.prop];
                return e && e.get
                    ? e.get(this)
                    : et.propHooks._default.get(this);
            },
            run: function (e) {
                var t,
                    n = et.propHooks[this.prop];
                return (
                    this.options.duration
                        ? (this.pos = t = S.easing[this.easing](
                              e,
                              this.options.duration * e,
                              0,
                              1,
                              this.options.duration
                          ))
                        : (this.pos = t = e),
                    (this.now = (this.end - this.start) * t + this.start),
                    this.options.step &&
                        this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : et.propHooks._default.set(this),
                    this
                );
            }
        }).init.prototype = et.prototype),
        ((et.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return 1 !== e.elem.nodeType ||
                        (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                        ? e.elem[e.prop]
                        : (t = S.css(e.elem, e.prop, '')) && 'auto' !== t
                        ? t
                        : 0;
                },
                set: function (e) {
                    S.fx.step[e.prop]
                        ? S.fx.step[e.prop](e)
                        : 1 !== e.elem.nodeType ||
                          (!S.cssHooks[e.prop] &&
                              null == e.elem.style[Xe(e.prop)])
                        ? (e.elem[e.prop] = e.now)
                        : S.style(e.elem, e.prop, e.now + e.unit);
                }
            }
        }).scrollTop = et.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType &&
                    e.elem.parentNode &&
                    (e.elem[e.prop] = e.now);
            }
        }),
        (S.easing = {
            linear: function (e) {
                return e;
            },
            swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
            },
            _default: 'swing'
        }),
        (S.fx = et.prototype.init),
        (S.fx.step = {});
    var tt,
        nt,
        rt,
        it,
        ot = /^(?:toggle|show|hide)$/,
        at = /queueHooks$/;
    function st() {
        nt &&
            (!1 === E.hidden && C.requestAnimationFrame
                ? C.requestAnimationFrame(st)
                : C.setTimeout(st, S.fx.interval),
            S.fx.tick());
    }
    function ut() {
        return (
            C.setTimeout(function () {
                tt = void 0;
            }),
            (tt = Date.now())
        );
    }
    function lt(e, t) {
        var n,
            r = 0,
            i = { height: e };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i['margin' + (n = ne[r])] = i['padding' + n] = e;
        return t && (i.opacity = i.width = e), i;
    }
    function ct(e, t, n) {
        for (
            var r,
                i = (ft.tweeners[t] || []).concat(ft.tweeners['*']),
                o = 0,
                a = i.length;
            o < a;
            o++
        )
            if ((r = i[o].call(n, t, e))) return r;
    }
    function ft(o, e, t) {
        var n,
            a,
            r = 0,
            i = ft.prefilters.length,
            s = S.Deferred().always(function () {
                delete u.elem;
            }),
            u = function () {
                if (a) return !1;
                for (
                    var e = tt || ut(),
                        t = Math.max(0, l.startTime + l.duration - e),
                        n = 1 - (t / l.duration || 0),
                        r = 0,
                        i = l.tweens.length;
                    r < i;
                    r++
                )
                    l.tweens[r].run(n);
                return (
                    s.notifyWith(o, [l, n, t]),
                    n < 1 && i
                        ? t
                        : (i || s.notifyWith(o, [l, 1, 0]),
                          s.resolveWith(o, [l]),
                          !1)
                );
            },
            l = s.promise({
                elem: o,
                props: S.extend({}, e),
                opts: S.extend(
                    !0,
                    { specialEasing: {}, easing: S.easing._default },
                    t
                ),
                originalProperties: e,
                originalOptions: t,
                startTime: tt || ut(),
                duration: t.duration,
                tweens: [],
                createTween: function (e, t) {
                    var n = S.Tween(
                        o,
                        l.opts,
                        e,
                        t,
                        l.opts.specialEasing[e] || l.opts.easing
                    );
                    return l.tweens.push(n), n;
                },
                stop: function (e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) l.tweens[t].run(1);
                    return (
                        e
                            ? (s.notifyWith(o, [l, 1, 0]),
                              s.resolveWith(o, [l, e]))
                            : s.rejectWith(o, [l, e]),
                        this
                    );
                }
            }),
            c = l.props;
        for (
            !(function (e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (
                        ((i = t[(r = X(n))]),
                        (o = e[n]),
                        Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
                        n !== r && ((e[r] = o), delete e[n]),
                        (a = S.cssHooks[r]) && ('expand' in a))
                    )
                        for (n in ((o = a.expand(o)), delete e[r], o))
                            (n in e) || ((e[n] = o[n]), (t[n] = i));
                    else t[r] = i;
            })(c, l.opts.specialEasing);
            r < i;
            r++
        )
            if ((n = ft.prefilters[r].call(l, o, c, l.opts)))
                return (
                    m(n.stop) &&
                        (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(
                            n
                        )),
                    n
                );
        return (
            S.map(c, ct, l),
            m(l.opts.start) && l.opts.start.call(o, l),
            l
                .progress(l.opts.progress)
                .done(l.opts.done, l.opts.complete)
                .fail(l.opts.fail)
                .always(l.opts.always),
            S.fx.timer(S.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
            l
        );
    }
    (S.Animation = S.extend(ft, {
        tweeners: {
            '*': [
                function (e, t) {
                    var n = this.createTween(e, t);
                    return se(n.elem, e, te.exec(t), n), n;
                }
            ]
        },
        tweener: function (e, t) {
            m(e) ? ((t = e), (e = ['*'])) : (e = e.match(P));
            for (var n, r = 0, i = e.length; r < i; r++)
                (n = e[r]),
                    (ft.tweeners[n] = ft.tweeners[n] || []),
                    ft.tweeners[n].unshift(t);
        },
        prefilters: [
            function (e, t, n) {
                var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l,
                    c,
                    f = 'width' in t || 'height' in t,
                    p = this,
                    d = {},
                    h = e.style,
                    g = e.nodeType && ae(e),
                    v = Y.get(e, 'fxshow');
                for (r in (n.queue ||
                    (null == (a = S._queueHooks(e, 'fx')).unqueued &&
                        ((a.unqueued = 0),
                        (s = a.empty.fire),
                        (a.empty.fire = function () {
                            a.unqueued || s();
                        })),
                    a.unqueued++,
                    p.always(function () {
                        p.always(function () {
                            a.unqueued--,
                                S.queue(e, 'fx').length || a.empty.fire();
                        });
                    })),
                t))
                    if (((i = t[r]), ot.test(i))) {
                        if (
                            (delete t[r],
                            (o = o || 'toggle' === i),
                            i === (g ? 'hide' : 'show'))
                        ) {
                            if ('show' !== i || !v || void 0 === v[r]) continue;
                            g = !0;
                        }
                        d[r] = (v && v[r]) || S.style(e, r);
                    }
                if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
                    for (r in (f &&
                        1 === e.nodeType &&
                        ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                        null == (l = v && v.display) &&
                            (l = Y.get(e, 'display')),
                        'none' === (c = S.css(e, 'display')) &&
                            (l
                                ? (c = l)
                                : (le([e], !0),
                                  (l = e.style.display || l),
                                  (c = S.css(e, 'display')),
                                  le([e]))),
                        ('inline' === c ||
                            ('inline-block' === c && null != l)) &&
                            'none' === S.css(e, 'float') &&
                            (u ||
                                (p.done(function () {
                                    h.display = l;
                                }),
                                null == l &&
                                    ((c = h.display),
                                    (l = 'none' === c ? '' : c))),
                            (h.display = 'inline-block'))),
                    n.overflow &&
                        ((h.overflow = 'hidden'),
                        p.always(function () {
                            (h.overflow = n.overflow[0]),
                                (h.overflowX = n.overflow[1]),
                                (h.overflowY = n.overflow[2]);
                        })),
                    (u = !1),
                    d))
                        u ||
                            (v
                                ? 'hidden' in v && (g = v.hidden)
                                : (v = Y.access(e, 'fxshow', { display: l })),
                            o && (v.hidden = !g),
                            g && le([e], !0),
                            p.done(function () {
                                for (r in (g || le([e]),
                                Y.remove(e, 'fxshow'),
                                d))
                                    S.style(e, r, d[r]);
                            })),
                            (u = ct(g ? v[r] : 0, r, p)),
                            r in v ||
                                ((v[r] = u.start),
                                g && ((u.end = u.start), (u.start = 0)));
            }
        ],
        prefilter: function (e, t) {
            t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
        }
    })),
        (S.speed = function (e, t, n) {
            var r =
                e && 'object' == typeof e
                    ? S.extend({}, e)
                    : {
                          complete: n || (!n && t) || (m(e) && e),
                          duration: e,
                          easing: (n && t) || (t && !m(t) && t)
                      };
            return (
                S.fx.off
                    ? (r.duration = 0)
                    : 'number' != typeof r.duration &&
                      (r.duration in S.fx.speeds
                          ? (r.duration = S.fx.speeds[r.duration])
                          : (r.duration = S.fx.speeds._default)),
                (null != r.queue && !0 !== r.queue) || (r.queue = 'fx'),
                (r.old = r.complete),
                (r.complete = function () {
                    m(r.old) && r.old.call(this),
                        r.queue && S.dequeue(this, r.queue);
                }),
                r
            );
        }),
        S.fn.extend({
            fadeTo: function (e, t, n, r) {
                return this.filter(ae)
                    .css('opacity', 0)
                    .show()
                    .end()
                    .animate({ opacity: t }, e, n, r);
            },
            animate: function (t, e, n, r) {
                var i = S.isEmptyObject(t),
                    o = S.speed(e, n, r),
                    a = function () {
                        var e = ft(this, S.extend({}, t), o);
                        (i || Y.get(this, 'finish')) && e.stop(!0);
                    };
                return (
                    (a.finish = a),
                    i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
                );
            },
            stop: function (i, e, o) {
                var a = function (e) {
                    var t = e.stop;
                    delete e.stop, t(o);
                };
                return (
                    'string' != typeof i && ((o = e), (e = i), (i = void 0)),
                    e && this.queue(i || 'fx', []),
                    this.each(function () {
                        var e = !0,
                            t = null != i && i + 'queueHooks',
                            n = S.timers,
                            r = Y.get(this);
                        if (t) r[t] && r[t].stop && a(r[t]);
                        else
                            for (t in r)
                                r[t] && r[t].stop && at.test(t) && a(r[t]);
                        for (t = n.length; t--; )
                            n[t].elem !== this ||
                                (null != i && n[t].queue !== i) ||
                                (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
                        (!e && o) || S.dequeue(this, i);
                    })
                );
            },
            finish: function (a) {
                return (
                    !1 !== a && (a = a || 'fx'),
                    this.each(function () {
                        var e,
                            t = Y.get(this),
                            n = t[a + 'queue'],
                            r = t[a + 'queueHooks'],
                            i = S.timers,
                            o = n ? n.length : 0;
                        for (
                            t.finish = !0,
                                S.queue(this, a, []),
                                r && r.stop && r.stop.call(this, !0),
                                e = i.length;
                            e--;

                        )
                            i[e].elem === this &&
                                i[e].queue === a &&
                                (i[e].anim.stop(!0), i.splice(e, 1));
                        for (e = 0; e < o; e++)
                            n[e] && n[e].finish && n[e].finish.call(this);
                        delete t.finish;
                    })
                );
            }
        }),
        S.each(['toggle', 'show', 'hide'], function (e, r) {
            var i = S.fn[r];
            S.fn[r] = function (e, t, n) {
                return null == e || 'boolean' == typeof e
                    ? i.apply(this, arguments)
                    : this.animate(lt(r, !0), e, t, n);
            };
        }),
        S.each(
            {
                slideDown: lt('show'),
                slideUp: lt('hide'),
                slideToggle: lt('toggle'),
                fadeIn: { opacity: 'show' },
                fadeOut: { opacity: 'hide' },
                fadeToggle: { opacity: 'toggle' }
            },
            function (e, r) {
                S.fn[e] = function (e, t, n) {
                    return this.animate(r, e, t, n);
                };
            }
        ),
        (S.timers = []),
        (S.fx.tick = function () {
            var e,
                t = 0,
                n = S.timers;
            for (tt = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || S.fx.stop(), (tt = void 0);
        }),
        (S.fx.timer = function (e) {
            S.timers.push(e), S.fx.start();
        }),
        (S.fx.interval = 13),
        (S.fx.start = function () {
            nt || ((nt = !0), st());
        }),
        (S.fx.stop = function () {
            nt = null;
        }),
        (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (S.fn.delay = function (r, e) {
            return (
                (r = (S.fx && S.fx.speeds[r]) || r),
                (e = e || 'fx'),
                this.queue(e, function (e, t) {
                    var n = C.setTimeout(e, r);
                    t.stop = function () {
                        C.clearTimeout(n);
                    };
                })
            );
        }),
        (rt = E.createElement('input')),
        (it = E.createElement('select').appendChild(E.createElement('option'))),
        (rt.type = 'checkbox'),
        (y.checkOn = '' !== rt.value),
        (y.optSelected = it.selected),
        ((rt = E.createElement('input')).value = 't'),
        (rt.type = 'radio'),
        (y.radioValue = 't' === rt.value);
    var pt,
        dt = S.expr.attrHandle;
    S.fn.extend({
        attr: function (e, t) {
            return $(this, S.attr, e, t, 1 < arguments.length);
        },
        removeAttr: function (e) {
            return this.each(function () {
                S.removeAttr(this, e);
            });
        }
    }),
        S.extend({
            attr: function (e, t, n) {
                var r,
                    i,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return 'undefined' == typeof e.getAttribute
                        ? S.prop(e, t, n)
                        : ((1 === o && S.isXMLDoc(e)) ||
                              (i =
                                  S.attrHooks[t.toLowerCase()] ||
                                  (S.expr.match.bool.test(t) ? pt : void 0)),
                          void 0 !== n
                              ? null === n
                                  ? void S.removeAttr(e, t)
                                  : i &&
                                    'set' in i &&
                                    void 0 !== (r = i.set(e, n, t))
                                  ? r
                                  : (e.setAttribute(t, n + ''), n)
                              : i && 'get' in i && null !== (r = i.get(e, t))
                              ? r
                              : null == (r = S.find.attr(e, t))
                              ? void 0
                              : r);
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!y.radioValue && 'radio' === t && A(e, 'input')) {
                            var n = e.value;
                            return (
                                e.setAttribute('type', t), n && (e.value = n), t
                            );
                        }
                    }
                }
            },
            removeAttr: function (e, t) {
                var n,
                    r = 0,
                    i = t && t.match(P);
                if (i && 1 === e.nodeType)
                    while ((n = i[r++])) e.removeAttribute(n);
            }
        }),
        (pt = {
            set: function (e, t, n) {
                return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
            }
        }),
        S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var a = dt[t] || S.find.attr;
            dt[t] = function (e, t, n) {
                var r,
                    i,
                    o = t.toLowerCase();
                return (
                    n ||
                        ((i = dt[o]),
                        (dt[o] = r),
                        (r = null != a(e, t, n) ? o : null),
                        (dt[o] = i)),
                    r
                );
            };
        });
    var ht = /^(?:input|select|textarea|button)$/i,
        gt = /^(?:a|area)$/i;
    function vt(e) {
        return (e.match(P) || []).join(' ');
    }
    function yt(e) {
        return (e.getAttribute && e.getAttribute('class')) || '';
    }
    function mt(e) {
        return Array.isArray(e)
            ? e
            : ('string' == typeof e && e.match(P)) || [];
    }
    S.fn.extend({
        prop: function (e, t) {
            return $(this, S.prop, e, t, 1 < arguments.length);
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[S.propFix[e] || e];
            });
        }
    }),
        S.extend({
            prop: function (e, t, n) {
                var r,
                    i,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return (
                        (1 === o && S.isXMLDoc(e)) ||
                            ((t = S.propFix[t] || t), (i = S.propHooks[t])),
                        void 0 !== n
                            ? i && 'set' in i && void 0 !== (r = i.set(e, n, t))
                                ? r
                                : (e[t] = n)
                            : i && 'get' in i && null !== (r = i.get(e, t))
                            ? r
                            : e[t]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = S.find.attr(e, 'tabindex');
                        return t
                            ? parseInt(t, 10)
                            : ht.test(e.nodeName) ||
                              (gt.test(e.nodeName) && e.href)
                            ? 0
                            : -1;
                    }
                }
            },
            propFix: { for: 'htmlFor', class: 'className' }
        }),
        y.optSelected ||
            (S.propHooks.selected = {
                get: function (e) {
                    var t = e.parentNode;
                    return (
                        t && t.parentNode && t.parentNode.selectedIndex, null
                    );
                },
                set: function (e) {
                    var t = e.parentNode;
                    t &&
                        (t.selectedIndex,
                        t.parentNode && t.parentNode.selectedIndex);
                }
            }),
        S.each(
            [
                'tabIndex',
                'readOnly',
                'maxLength',
                'cellSpacing',
                'cellPadding',
                'rowSpan',
                'colSpan',
                'useMap',
                'frameBorder',
                'contentEditable'
            ],
            function () {
                S.propFix[this.toLowerCase()] = this;
            }
        ),
        S.fn.extend({
            addClass: function (t) {
                var e,
                    n,
                    r,
                    i,
                    o,
                    a,
                    s,
                    u = 0;
                if (m(t))
                    return this.each(function (e) {
                        S(this).addClass(t.call(this, e, yt(this)));
                    });
                if ((e = mt(t)).length)
                    while ((n = this[u++]))
                        if (
                            ((i = yt(n)),
                            (r = 1 === n.nodeType && ' ' + vt(i) + ' '))
                        ) {
                            a = 0;
                            while ((o = e[a++]))
                                r.indexOf(' ' + o + ' ') < 0 && (r += o + ' ');
                            i !== (s = vt(r)) && n.setAttribute('class', s);
                        }
                return this;
            },
            removeClass: function (t) {
                var e,
                    n,
                    r,
                    i,
                    o,
                    a,
                    s,
                    u = 0;
                if (m(t))
                    return this.each(function (e) {
                        S(this).removeClass(t.call(this, e, yt(this)));
                    });
                if (!arguments.length) return this.attr('class', '');
                if ((e = mt(t)).length)
                    while ((n = this[u++]))
                        if (
                            ((i = yt(n)),
                            (r = 1 === n.nodeType && ' ' + vt(i) + ' '))
                        ) {
                            a = 0;
                            while ((o = e[a++]))
                                while (-1 < r.indexOf(' ' + o + ' '))
                                    r = r.replace(' ' + o + ' ', ' ');
                            i !== (s = vt(r)) && n.setAttribute('class', s);
                        }
                return this;
            },
            toggleClass: function (i, t) {
                var o = typeof i,
                    a = 'string' === o || Array.isArray(i);
                return 'boolean' == typeof t && a
                    ? t
                        ? this.addClass(i)
                        : this.removeClass(i)
                    : m(i)
                    ? this.each(function (e) {
                          S(this).toggleClass(i.call(this, e, yt(this), t), t);
                      })
                    : this.each(function () {
                          var e, t, n, r;
                          if (a) {
                              (t = 0), (n = S(this)), (r = mt(i));
                              while ((e = r[t++]))
                                  n.hasClass(e)
                                      ? n.removeClass(e)
                                      : n.addClass(e);
                          } else (void 0 !== i && 'boolean' !== o) || ((e = yt(this)) && Y.set(this, '__className__', e), this.setAttribute && this.setAttribute('class', e || !1 === i ? '' : Y.get(this, '__className__') || ''));
                      });
            },
            hasClass: function (e) {
                var t,
                    n,
                    r = 0;
                t = ' ' + e + ' ';
                while ((n = this[r++]))
                    if (
                        1 === n.nodeType &&
                        -1 < (' ' + vt(yt(n)) + ' ').indexOf(t)
                    )
                        return !0;
                return !1;
            }
        });
    var xt = /\r/g;
    S.fn.extend({
        val: function (n) {
            var r,
                e,
                i,
                t = this[0];
            return arguments.length
                ? ((i = m(n)),
                  this.each(function (e) {
                      var t;
                      1 === this.nodeType &&
                          (null == (t = i ? n.call(this, e, S(this).val()) : n)
                              ? (t = '')
                              : 'number' == typeof t
                              ? (t += '')
                              : Array.isArray(t) &&
                                (t = S.map(t, function (e) {
                                    return null == e ? '' : e + '';
                                })),
                          ((r =
                              S.valHooks[this.type] ||
                              S.valHooks[this.nodeName.toLowerCase()]) &&
                              'set' in r &&
                              void 0 !== r.set(this, t, 'value')) ||
                              (this.value = t));
                  }))
                : t
                ? (r =
                      S.valHooks[t.type] ||
                      S.valHooks[t.nodeName.toLowerCase()]) &&
                  'get' in r &&
                  void 0 !== (e = r.get(t, 'value'))
                    ? e
                    : 'string' == typeof (e = t.value)
                    ? e.replace(xt, '')
                    : null == e
                    ? ''
                    : e
                : void 0;
        }
    }),
        S.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = S.find.attr(e, 'value');
                        return null != t ? t : vt(S.text(e));
                    }
                },
                select: {
                    get: function (e) {
                        var t,
                            n,
                            r,
                            i = e.options,
                            o = e.selectedIndex,
                            a = 'select-one' === e.type,
                            s = a ? null : [],
                            u = a ? o + 1 : i.length;
                        for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                            if (
                                ((n = i[r]).selected || r === o) &&
                                !n.disabled &&
                                (!n.parentNode.disabled ||
                                    !A(n.parentNode, 'optgroup'))
                            ) {
                                if (((t = S(n).val()), a)) return t;
                                s.push(t);
                            }
                        return s;
                    },
                    set: function (e, t) {
                        var n,
                            r,
                            i = e.options,
                            o = S.makeArray(t),
                            a = i.length;
                        while (a--)
                            ((r = i[a]).selected =
                                -1 < S.inArray(S.valHooks.option.get(r), o)) &&
                                (n = !0);
                        return n || (e.selectedIndex = -1), o;
                    }
                }
            }
        }),
        S.each(['radio', 'checkbox'], function () {
            (S.valHooks[this] = {
                set: function (e, t) {
                    if (Array.isArray(t))
                        return (e.checked = -1 < S.inArray(S(e).val(), t));
                }
            }),
                y.checkOn ||
                    (S.valHooks[this].get = function (e) {
                        return null === e.getAttribute('value')
                            ? 'on'
                            : e.value;
                    });
        }),
        (y.focusin = 'onfocusin' in C);
    var bt = /^(?:focusinfocus|focusoutblur)$/,
        wt = function (e) {
            e.stopPropagation();
        };
    S.extend(S.event, {
        trigger: function (e, t, n, r) {
            var i,
                o,
                a,
                s,
                u,
                l,
                c,
                f,
                p = [n || E],
                d = v.call(e, 'type') ? e.type : e,
                h = v.call(e, 'namespace') ? e.namespace.split('.') : [];
            if (
                ((o = f = a = n = n || E),
                3 !== n.nodeType &&
                    8 !== n.nodeType &&
                    !bt.test(d + S.event.triggered) &&
                    (-1 < d.indexOf('.') &&
                        ((d = (h = d.split('.')).shift()), h.sort()),
                    (u = d.indexOf(':') < 0 && 'on' + d),
                    ((e = e[S.expando]
                        ? e
                        : new S.Event(
                              d,
                              'object' == typeof e && e
                          )).isTrigger = r ? 2 : 3),
                    (e.namespace = h.join('.')),
                    (e.rnamespace = e.namespace
                        ? new RegExp(
                              '(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)'
                          )
                        : null),
                    (e.result = void 0),
                    e.target || (e.target = n),
                    (t = null == t ? [e] : S.makeArray(t, [e])),
                    (c = S.event.special[d] || {}),
                    r || !c.trigger || !1 !== c.trigger.apply(n, t)))
            ) {
                if (!r && !c.noBubble && !x(n)) {
                    for (
                        s = c.delegateType || d,
                            bt.test(s + d) || (o = o.parentNode);
                        o;
                        o = o.parentNode
                    )
                        p.push(o), (a = o);
                    a === (n.ownerDocument || E) &&
                        p.push(a.defaultView || a.parentWindow || C);
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped())
                    (f = o),
                        (e.type = 1 < i ? s : c.bindType || d),
                        (l =
                            (Y.get(o, 'events') || Object.create(null))[
                                e.type
                            ] && Y.get(o, 'handle')) && l.apply(o, t),
                        (l = u && o[u]) &&
                            l.apply &&
                            V(o) &&
                            ((e.result = l.apply(o, t)),
                            !1 === e.result && e.preventDefault());
                return (
                    (e.type = d),
                    r ||
                        e.isDefaultPrevented() ||
                        (c._default && !1 !== c._default.apply(p.pop(), t)) ||
                        !V(n) ||
                        (u &&
                            m(n[d]) &&
                            !x(n) &&
                            ((a = n[u]) && (n[u] = null),
                            (S.event.triggered = d),
                            e.isPropagationStopped() &&
                                f.addEventListener(d, wt),
                            n[d](),
                            e.isPropagationStopped() &&
                                f.removeEventListener(d, wt),
                            (S.event.triggered = void 0),
                            a && (n[u] = a))),
                    e.result
                );
            }
        },
        simulate: function (e, t, n) {
            var r = S.extend(new S.Event(), n, { type: e, isSimulated: !0 });
            S.event.trigger(r, null, t);
        }
    }),
        S.fn.extend({
            trigger: function (e, t) {
                return this.each(function () {
                    S.event.trigger(e, t, this);
                });
            },
            triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return S.event.trigger(e, t, n, !0);
            }
        }),
        y.focusin ||
            S.each({ focus: 'focusin', blur: 'focusout' }, function (n, r) {
                var i = function (e) {
                    S.event.simulate(r, e.target, S.event.fix(e));
                };
                S.event.special[r] = {
                    setup: function () {
                        var e = this.ownerDocument || this.document || this,
                            t = Y.access(e, r);
                        t || e.addEventListener(n, i, !0),
                            Y.access(e, r, (t || 0) + 1);
                    },
                    teardown: function () {
                        var e = this.ownerDocument || this.document || this,
                            t = Y.access(e, r) - 1;
                        t
                            ? Y.access(e, r, t)
                            : (e.removeEventListener(n, i, !0), Y.remove(e, r));
                    }
                };
            });
    var Tt = C.location,
        Ct = { guid: Date.now() },
        Et = /\?/;
    S.parseXML = function (e) {
        var t;
        if (!e || 'string' != typeof e) return null;
        try {
            t = new C.DOMParser().parseFromString(e, 'text/xml');
        } catch (e) {
            t = void 0;
        }
        return (
            (t && !t.getElementsByTagName('parsererror').length) ||
                S.error('Invalid XML: ' + e),
            t
        );
    };
    var St = /\[\]$/,
        kt = /\r?\n/g,
        At = /^(?:submit|button|image|reset|file)$/i,
        Nt = /^(?:input|select|textarea|keygen)/i;
    function Dt(n, e, r, i) {
        var t;
        if (Array.isArray(e))
            S.each(e, function (e, t) {
                r || St.test(n)
                    ? i(n, t)
                    : Dt(
                          n +
                              '[' +
                              ('object' == typeof t && null != t ? e : '') +
                              ']',
                          t,
                          r,
                          i
                      );
            });
        else if (r || 'object' !== w(e)) i(n, e);
        else for (t in e) Dt(n + '[' + t + ']', e[t], r, i);
    }
    (S.param = function (e, t) {
        var n,
            r = [],
            i = function (e, t) {
                var n = m(t) ? t() : t;
                r[r.length] =
                    encodeURIComponent(e) +
                    '=' +
                    encodeURIComponent(null == n ? '' : n);
            };
        if (null == e) return '';
        if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
            S.each(e, function () {
                i(this.name, this.value);
            });
        else for (n in e) Dt(n, e[n], t, i);
        return r.join('&');
    }),
        S.fn.extend({
            serialize: function () {
                return S.param(this.serializeArray());
            },
            serializeArray: function () {
                return this.map(function () {
                    var e = S.prop(this, 'elements');
                    return e ? S.makeArray(e) : this;
                })
                    .filter(function () {
                        var e = this.type;
                        return (
                            this.name &&
                            !S(this).is(':disabled') &&
                            Nt.test(this.nodeName) &&
                            !At.test(e) &&
                            (this.checked || !pe.test(e))
                        );
                    })
                    .map(function (e, t) {
                        var n = S(this).val();
                        return null == n
                            ? null
                            : Array.isArray(n)
                            ? S.map(n, function (e) {
                                  return {
                                      name: t.name,
                                      value: e.replace(kt, '\r\n')
                                  };
                              })
                            : { name: t.name, value: n.replace(kt, '\r\n') };
                    })
                    .get();
            }
        });
    var jt = /%20/g,
        qt = /#.*$/,
        Lt = /([?&])_=[^&]*/,
        Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ot = /^(?:GET|HEAD)$/,
        Pt = /^\/\//,
        Rt = {},
        Mt = {},
        It = '*/'.concat('*'),
        Wt = E.createElement('a');
    function Ft(o) {
        return function (e, t) {
            'string' != typeof e && ((t = e), (e = '*'));
            var n,
                r = 0,
                i = e.toLowerCase().match(P) || [];
            if (m(t))
                while ((n = i[r++]))
                    '+' === n[0]
                        ? ((n = n.slice(1) || '*'),
                          (o[n] = o[n] || []).unshift(t))
                        : (o[n] = o[n] || []).push(t);
        };
    }
    function Bt(t, i, o, a) {
        var s = {},
            u = t === Mt;
        function l(e) {
            var r;
            return (
                (s[e] = !0),
                S.each(t[e] || [], function (e, t) {
                    var n = t(i, o, a);
                    return 'string' != typeof n || u || s[n]
                        ? u
                            ? !(r = n)
                            : void 0
                        : (i.dataTypes.unshift(n), l(n), !1);
                }),
                r
            );
        }
        return l(i.dataTypes[0]) || (!s['*'] && l('*'));
    }
    function $t(e, t) {
        var n,
            r,
            i = S.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && S.extend(!0, e, r), e;
    }
    (Wt.href = Tt.href),
        S.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Tt.href,
                type: 'GET',
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                    Tt.protocol
                ),
                global: !0,
                processData: !0,
                async: !0,
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                accepts: {
                    '*': It,
                    text: 'text/plain',
                    html: 'text/html',
                    xml: 'application/xml, text/xml',
                    json: 'application/json, text/javascript'
                },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: {
                    xml: 'responseXML',
                    text: 'responseText',
                    json: 'responseJSON'
                },
                converters: {
                    '* text': String,
                    'text html': !0,
                    'text json': JSON.parse,
                    'text xml': S.parseXML
                },
                flatOptions: { url: !0, context: !0 }
            },
            ajaxSetup: function (e, t) {
                return t ? $t($t(e, S.ajaxSettings), t) : $t(S.ajaxSettings, e);
            },
            ajaxPrefilter: Ft(Rt),
            ajaxTransport: Ft(Mt),
            ajax: function (e, t) {
                'object' == typeof e && ((t = e), (e = void 0)), (t = t || {});
                var c,
                    f,
                    p,
                    n,
                    d,
                    r,
                    h,
                    g,
                    i,
                    o,
                    v = S.ajaxSetup({}, t),
                    y = v.context || v,
                    m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
                    x = S.Deferred(),
                    b = S.Callbacks('once memory'),
                    w = v.statusCode || {},
                    a = {},
                    s = {},
                    u = 'canceled',
                    T = {
                        readyState: 0,
                        getResponseHeader: function (e) {
                            var t;
                            if (h) {
                                if (!n) {
                                    n = {};
                                    while ((t = Ht.exec(p)))
                                        n[t[1].toLowerCase() + ' '] = (
                                            n[t[1].toLowerCase() + ' '] || []
                                        ).concat(t[2]);
                                }
                                t = n[e.toLowerCase() + ' '];
                            }
                            return null == t ? null : t.join(', ');
                        },
                        getAllResponseHeaders: function () {
                            return h ? p : null;
                        },
                        setRequestHeader: function (e, t) {
                            return (
                                null == h &&
                                    ((e = s[e.toLowerCase()] =
                                        s[e.toLowerCase()] || e),
                                    (a[e] = t)),
                                this
                            );
                        },
                        overrideMimeType: function (e) {
                            return null == h && (v.mimeType = e), this;
                        },
                        statusCode: function (e) {
                            var t;
                            if (e)
                                if (h) T.always(e[T.status]);
                                else for (t in e) w[t] = [w[t], e[t]];
                            return this;
                        },
                        abort: function (e) {
                            var t = e || u;
                            return c && c.abort(t), l(0, t), this;
                        }
                    };
                if (
                    (x.promise(T),
                    (v.url = ((e || v.url || Tt.href) + '').replace(
                        Pt,
                        Tt.protocol + '//'
                    )),
                    (v.type = t.method || t.type || v.method || v.type),
                    (v.dataTypes = (v.dataType || '*')
                        .toLowerCase()
                        .match(P) || ['']),
                    null == v.crossDomain)
                ) {
                    r = E.createElement('a');
                    try {
                        (r.href = v.url),
                            (r.href = r.href),
                            (v.crossDomain =
                                Wt.protocol + '//' + Wt.host !=
                                r.protocol + '//' + r.host);
                    } catch (e) {
                        v.crossDomain = !0;
                    }
                }
                if (
                    (v.data &&
                        v.processData &&
                        'string' != typeof v.data &&
                        (v.data = S.param(v.data, v.traditional)),
                    Bt(Rt, v, t, T),
                    h)
                )
                    return T;
                for (i in ((g = S.event && v.global) &&
                    0 == S.active++ &&
                    S.event.trigger('ajaxStart'),
                (v.type = v.type.toUpperCase()),
                (v.hasContent = !Ot.test(v.type)),
                (f = v.url.replace(qt, '')),
                v.hasContent
                    ? v.data &&
                      v.processData &&
                      0 ===
                          (v.contentType || '').indexOf(
                              'application/x-www-form-urlencoded'
                          ) &&
                      (v.data = v.data.replace(jt, '+'))
                    : ((o = v.url.slice(f.length)),
                      v.data &&
                          (v.processData || 'string' == typeof v.data) &&
                          ((f += (Et.test(f) ? '&' : '?') + v.data),
                          delete v.data),
                      !1 === v.cache &&
                          ((f = f.replace(Lt, '$1')),
                          (o =
                              (Et.test(f) ? '&' : '?') + '_=' + Ct.guid++ + o)),
                      (v.url = f + o)),
                v.ifModified &&
                    (S.lastModified[f] &&
                        T.setRequestHeader(
                            'If-Modified-Since',
                            S.lastModified[f]
                        ),
                    S.etag[f] &&
                        T.setRequestHeader('If-None-Match', S.etag[f])),
                ((v.data && v.hasContent && !1 !== v.contentType) ||
                    t.contentType) &&
                    T.setRequestHeader('Content-Type', v.contentType),
                T.setRequestHeader(
                    'Accept',
                    v.dataTypes[0] && v.accepts[v.dataTypes[0]]
                        ? v.accepts[v.dataTypes[0]] +
                              ('*' !== v.dataTypes[0]
                                  ? ', ' + It + '; q=0.01'
                                  : '')
                        : v.accepts['*']
                ),
                v.headers))
                    T.setRequestHeader(i, v.headers[i]);
                if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
                    return T.abort();
                if (
                    ((u = 'abort'),
                    b.add(v.complete),
                    T.done(v.success),
                    T.fail(v.error),
                    (c = Bt(Mt, v, t, T)))
                ) {
                    if (
                        ((T.readyState = 1),
                        g && m.trigger('ajaxSend', [T, v]),
                        h)
                    )
                        return T;
                    v.async &&
                        0 < v.timeout &&
                        (d = C.setTimeout(function () {
                            T.abort('timeout');
                        }, v.timeout));
                    try {
                        (h = !1), c.send(a, l);
                    } catch (e) {
                        if (h) throw e;
                        l(-1, e);
                    }
                } else l(-1, 'No Transport');
                function l(e, t, n, r) {
                    var i,
                        o,
                        a,
                        s,
                        u,
                        l = t;
                    h ||
                        ((h = !0),
                        d && C.clearTimeout(d),
                        (c = void 0),
                        (p = r || ''),
                        (T.readyState = 0 < e ? 4 : 0),
                        (i = (200 <= e && e < 300) || 304 === e),
                        n &&
                            (s = (function (e, t, n) {
                                var r,
                                    i,
                                    o,
                                    a,
                                    s = e.contents,
                                    u = e.dataTypes;
                                while ('*' === u[0])
                                    u.shift(),
                                        void 0 === r &&
                                            (r =
                                                e.mimeType ||
                                                t.getResponseHeader(
                                                    'Content-Type'
                                                ));
                                if (r)
                                    for (i in s)
                                        if (s[i] && s[i].test(r)) {
                                            u.unshift(i);
                                            break;
                                        }
                                if (u[0] in n) o = u[0];
                                else {
                                    for (i in n) {
                                        if (
                                            !u[0] ||
                                            e.converters[i + ' ' + u[0]]
                                        ) {
                                            o = i;
                                            break;
                                        }
                                        a || (a = i);
                                    }
                                    o = o || a;
                                }
                                if (o) return o !== u[0] && u.unshift(o), n[o];
                            })(v, T, n)),
                        !i &&
                            -1 < S.inArray('script', v.dataTypes) &&
                            (v.converters['text script'] = function () {}),
                        (s = (function (e, t, n, r) {
                            var i,
                                o,
                                a,
                                s,
                                u,
                                l = {},
                                c = e.dataTypes.slice();
                            if (c[1])
                                for (a in e.converters)
                                    l[a.toLowerCase()] = e.converters[a];
                            o = c.shift();
                            while (o)
                                if (
                                    (e.responseFields[o] &&
                                        (n[e.responseFields[o]] = t),
                                    !u &&
                                        r &&
                                        e.dataFilter &&
                                        (t = e.dataFilter(t, e.dataType)),
                                    (u = o),
                                    (o = c.shift()))
                                )
                                    if ('*' === o) o = u;
                                    else if ('*' !== u && u !== o) {
                                        if (
                                            !(a = l[u + ' ' + o] || l['* ' + o])
                                        )
                                            for (i in l)
                                                if (
                                                    (s = i.split(' '))[1] ===
                                                        o &&
                                                    (a =
                                                        l[u + ' ' + s[0]] ||
                                                        l['* ' + s[0]])
                                                ) {
                                                    !0 === a
                                                        ? (a = l[i])
                                                        : !0 !== l[i] &&
                                                          ((o = s[0]),
                                                          c.unshift(s[1]));
                                                    break;
                                                }
                                        if (!0 !== a)
                                            if (a && e['throws']) t = a(t);
                                            else
                                                try {
                                                    t = a(t);
                                                } catch (e) {
                                                    return {
                                                        state: 'parsererror',
                                                        error: a
                                                            ? e
                                                            : 'No conversion from ' +
                                                              u +
                                                              ' to ' +
                                                              o
                                                    };
                                                }
                                    }
                            return { state: 'success', data: t };
                        })(v, s, T, i)),
                        i
                            ? (v.ifModified &&
                                  ((u = T.getResponseHeader('Last-Modified')) &&
                                      (S.lastModified[f] = u),
                                  (u = T.getResponseHeader('etag')) &&
                                      (S.etag[f] = u)),
                              204 === e || 'HEAD' === v.type
                                  ? (l = 'nocontent')
                                  : 304 === e
                                  ? (l = 'notmodified')
                                  : ((l = s.state),
                                    (o = s.data),
                                    (i = !(a = s.error))))
                            : ((a = l),
                              (!e && l) || ((l = 'error'), e < 0 && (e = 0))),
                        (T.status = e),
                        (T.statusText = (t || l) + ''),
                        i
                            ? x.resolveWith(y, [o, l, T])
                            : x.rejectWith(y, [T, l, a]),
                        T.statusCode(w),
                        (w = void 0),
                        g &&
                            m.trigger(i ? 'ajaxSuccess' : 'ajaxError', [
                                T,
                                v,
                                i ? o : a
                            ]),
                        b.fireWith(y, [T, l]),
                        g &&
                            (m.trigger('ajaxComplete', [T, v]),
                            --S.active || S.event.trigger('ajaxStop')));
                }
                return T;
            },
            getJSON: function (e, t, n) {
                return S.get(e, t, n, 'json');
            },
            getScript: function (e, t) {
                return S.get(e, void 0, t, 'script');
            }
        }),
        S.each(['get', 'post'], function (e, i) {
            S[i] = function (e, t, n, r) {
                return (
                    m(t) && ((r = r || n), (n = t), (t = void 0)),
                    S.ajax(
                        S.extend(
                            {
                                url: e,
                                type: i,
                                dataType: r,
                                data: t,
                                success: n
                            },
                            S.isPlainObject(e) && e
                        )
                    )
                );
            };
        }),
        S.ajaxPrefilter(function (e) {
            var t;
            for (t in e.headers)
                'content-type' === t.toLowerCase() &&
                    (e.contentType = e.headers[t] || '');
        }),
        (S._evalUrl = function (e, t, n) {
            return S.ajax({
                url: e,
                type: 'GET',
                dataType: 'script',
                cache: !0,
                async: !1,
                global: !1,
                converters: { 'text script': function () {} },
                dataFilter: function (e) {
                    S.globalEval(e, t, n);
                }
            });
        }),
        S.fn.extend({
            wrapAll: function (e) {
                var t;
                return (
                    this[0] &&
                        (m(e) && (e = e.call(this[0])),
                        (t = S(e, this[0].ownerDocument).eq(0).clone(!0)),
                        this[0].parentNode && t.insertBefore(this[0]),
                        t
                            .map(function () {
                                var e = this;
                                while (e.firstElementChild)
                                    e = e.firstElementChild;
                                return e;
                            })
                            .append(this)),
                    this
                );
            },
            wrapInner: function (n) {
                return m(n)
                    ? this.each(function (e) {
                          S(this).wrapInner(n.call(this, e));
                      })
                    : this.each(function () {
                          var e = S(this),
                              t = e.contents();
                          t.length ? t.wrapAll(n) : e.append(n);
                      });
            },
            wrap: function (t) {
                var n = m(t);
                return this.each(function (e) {
                    S(this).wrapAll(n ? t.call(this, e) : t);
                });
            },
            unwrap: function (e) {
                return (
                    this.parent(e)
                        .not('body')
                        .each(function () {
                            S(this).replaceWith(this.childNodes);
                        }),
                    this
                );
            }
        }),
        (S.expr.pseudos.hidden = function (e) {
            return !S.expr.pseudos.visible(e);
        }),
        (S.expr.pseudos.visible = function (e) {
            return !!(
                e.offsetWidth ||
                e.offsetHeight ||
                e.getClientRects().length
            );
        }),
        (S.ajaxSettings.xhr = function () {
            try {
                return new C.XMLHttpRequest();
            } catch (e) {}
        });
    var _t = { 0: 200, 1223: 204 },
        zt = S.ajaxSettings.xhr();
    (y.cors = !!zt && 'withCredentials' in zt),
        (y.ajax = zt = !!zt),
        S.ajaxTransport(function (i) {
            var o, a;
            if (y.cors || (zt && !i.crossDomain))
                return {
                    send: function (e, t) {
                        var n,
                            r = i.xhr();
                        if (
                            (r.open(
                                i.type,
                                i.url,
                                i.async,
                                i.username,
                                i.password
                            ),
                            i.xhrFields)
                        )
                            for (n in i.xhrFields) r[n] = i.xhrFields[n];
                        for (n in (i.mimeType &&
                            r.overrideMimeType &&
                            r.overrideMimeType(i.mimeType),
                        i.crossDomain ||
                            e['X-Requested-With'] ||
                            (e['X-Requested-With'] = 'XMLHttpRequest'),
                        e))
                            r.setRequestHeader(n, e[n]);
                        (o = function (e) {
                            return function () {
                                o &&
                                    ((o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null),
                                    'abort' === e
                                        ? r.abort()
                                        : 'error' === e
                                        ? 'number' != typeof r.status
                                            ? t(0, 'error')
                                            : t(r.status, r.statusText)
                                        : t(
                                              _t[r.status] || r.status,
                                              r.statusText,
                                              'text' !==
                                                  (r.responseType || 'text') ||
                                                  'string' !=
                                                      typeof r.responseText
                                                  ? { binary: r.response }
                                                  : { text: r.responseText },
                                              r.getAllResponseHeaders()
                                          ));
                            };
                        }),
                            (r.onload = o()),
                            (a = r.onerror = r.ontimeout = o('error')),
                            void 0 !== r.onabort
                                ? (r.onabort = a)
                                : (r.onreadystatechange = function () {
                                      4 === r.readyState &&
                                          C.setTimeout(function () {
                                              o && a();
                                          });
                                  }),
                            (o = o('abort'));
                        try {
                            r.send((i.hasContent && i.data) || null);
                        } catch (e) {
                            if (o) throw e;
                        }
                    },
                    abort: function () {
                        o && o();
                    }
                };
        }),
        S.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1);
        }),
        S.ajaxSetup({
            accepts: {
                script:
                    'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
            },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
                'text script': function (e) {
                    return S.globalEval(e), e;
                }
            }
        }),
        S.ajaxPrefilter('script', function (e) {
            void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = 'GET');
        }),
        S.ajaxTransport('script', function (n) {
            var r, i;
            if (n.crossDomain || n.scriptAttrs)
                return {
                    send: function (e, t) {
                        (r = S('<script>')
                            .attr(n.scriptAttrs || {})
                            .prop({ charset: n.scriptCharset, src: n.url })
                            .on(
                                'load error',
                                (i = function (e) {
                                    r.remove(),
                                        (i = null),
                                        e &&
                                            t(
                                                'error' === e.type ? 404 : 200,
                                                e.type
                                            );
                                })
                            )),
                            E.head.appendChild(r[0]);
                    },
                    abort: function () {
                        i && i();
                    }
                };
        });
    var Ut,
        Xt = [],
        Vt = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({
        jsonp: 'callback',
        jsonpCallback: function () {
            var e = Xt.pop() || S.expando + '_' + Ct.guid++;
            return (this[e] = !0), e;
        }
    }),
        S.ajaxPrefilter('json jsonp', function (e, t, n) {
            var r,
                i,
                o,
                a =
                    !1 !== e.jsonp &&
                    (Vt.test(e.url)
                        ? 'url'
                        : 'string' == typeof e.data &&
                          0 ===
                              (e.contentType || '').indexOf(
                                  'application/x-www-form-urlencoded'
                              ) &&
                          Vt.test(e.data) &&
                          'data');
            if (a || 'jsonp' === e.dataTypes[0])
                return (
                    (r = e.jsonpCallback = m(e.jsonpCallback)
                        ? e.jsonpCallback()
                        : e.jsonpCallback),
                    a
                        ? (e[a] = e[a].replace(Vt, '$1' + r))
                        : !1 !== e.jsonp &&
                          (e.url +=
                              (Et.test(e.url) ? '&' : '?') + e.jsonp + '=' + r),
                    (e.converters['script json'] = function () {
                        return o || S.error(r + ' was not called'), o[0];
                    }),
                    (e.dataTypes[0] = 'json'),
                    (i = C[r]),
                    (C[r] = function () {
                        o = arguments;
                    }),
                    n.always(function () {
                        void 0 === i ? S(C).removeProp(r) : (C[r] = i),
                            e[r] &&
                                ((e.jsonpCallback = t.jsonpCallback),
                                Xt.push(r)),
                            o && m(i) && i(o[0]),
                            (o = i = void 0);
                    }),
                    'script'
                );
        }),
        (y.createHTMLDocument =
            (((Ut = E.implementation.createHTMLDocument('').body).innerHTML =
                '<form></form><form></form>'),
            2 === Ut.childNodes.length)),
        (S.parseHTML = function (e, t, n) {
            return 'string' != typeof e
                ? []
                : ('boolean' == typeof t && ((n = t), (t = !1)),
                  t ||
                      (y.createHTMLDocument
                          ? (((r = (t = E.implementation.createHTMLDocument(
                                ''
                            )).createElement('base')).href = E.location.href),
                            t.head.appendChild(r))
                          : (t = E)),
                  (o = !n && []),
                  (i = N.exec(e))
                      ? [t.createElement(i[1])]
                      : ((i = xe([e], t, o)),
                        o && o.length && S(o).remove(),
                        S.merge([], i.childNodes)));
            var r, i, o;
        }),
        (S.fn.load = function (e, t, n) {
            var r,
                i,
                o,
                a = this,
                s = e.indexOf(' ');
            return (
                -1 < s && ((r = vt(e.slice(s))), (e = e.slice(0, s))),
                m(t)
                    ? ((n = t), (t = void 0))
                    : t && 'object' == typeof t && (i = 'POST'),
                0 < a.length &&
                    S.ajax({
                        url: e,
                        type: i || 'GET',
                        dataType: 'html',
                        data: t
                    })
                        .done(function (e) {
                            (o = arguments),
                                a.html(
                                    r
                                        ? S('<div>')
                                              .append(S.parseHTML(e))
                                              .find(r)
                                        : e
                                );
                        })
                        .always(
                            n &&
                                function (e, t) {
                                    a.each(function () {
                                        n.apply(
                                            this,
                                            o || [e.responseText, t, e]
                                        );
                                    });
                                }
                        ),
                this
            );
        }),
        (S.expr.pseudos.animated = function (t) {
            return S.grep(S.timers, function (e) {
                return t === e.elem;
            }).length;
        }),
        (S.offset = {
            setOffset: function (e, t, n) {
                var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l = S.css(e, 'position'),
                    c = S(e),
                    f = {};
                'static' === l && (e.style.position = 'relative'),
                    (s = c.offset()),
                    (o = S.css(e, 'top')),
                    (u = S.css(e, 'left')),
                    ('absolute' === l || 'fixed' === l) &&
                    -1 < (o + u).indexOf('auto')
                        ? ((a = (r = c.position()).top), (i = r.left))
                        : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
                    m(t) && (t = t.call(e, n, S.extend({}, s))),
                    null != t.top && (f.top = t.top - s.top + a),
                    null != t.left && (f.left = t.left - s.left + i),
                    'using' in t
                        ? t.using.call(e, f)
                        : ('number' == typeof f.top && (f.top += 'px'),
                          'number' == typeof f.left && (f.left += 'px'),
                          c.css(f));
            }
        }),
        S.fn.extend({
            offset: function (t) {
                if (arguments.length)
                    return void 0 === t
                        ? this
                        : this.each(function (e) {
                              S.offset.setOffset(this, t, e);
                          });
                var e,
                    n,
                    r = this[0];
                return r
                    ? r.getClientRects().length
                        ? ((e = r.getBoundingClientRect()),
                          (n = r.ownerDocument.defaultView),
                          {
                              top: e.top + n.pageYOffset,
                              left: e.left + n.pageXOffset
                          })
                        : { top: 0, left: 0 }
                    : void 0;
            },
            position: function () {
                if (this[0]) {
                    var e,
                        t,
                        n,
                        r = this[0],
                        i = { top: 0, left: 0 };
                    if ('fixed' === S.css(r, 'position'))
                        t = r.getBoundingClientRect();
                    else {
                        (t = this.offset()),
                            (n = r.ownerDocument),
                            (e = r.offsetParent || n.documentElement);
                        while (
                            e &&
                            (e === n.body || e === n.documentElement) &&
                            'static' === S.css(e, 'position')
                        )
                            e = e.parentNode;
                        e &&
                            e !== r &&
                            1 === e.nodeType &&
                            (((i = S(e).offset()).top += S.css(
                                e,
                                'borderTopWidth',
                                !0
                            )),
                            (i.left += S.css(e, 'borderLeftWidth', !0)));
                    }
                    return {
                        top: t.top - i.top - S.css(r, 'marginTop', !0),
                        left: t.left - i.left - S.css(r, 'marginLeft', !0)
                    };
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    var e = this.offsetParent;
                    while (e && 'static' === S.css(e, 'position'))
                        e = e.offsetParent;
                    return e || re;
                });
            }
        }),
        S.each(
            { scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' },
            function (t, i) {
                var o = 'pageYOffset' === i;
                S.fn[t] = function (e) {
                    return $(
                        this,
                        function (e, t, n) {
                            var r;
                            if (
                                (x(e)
                                    ? (r = e)
                                    : 9 === e.nodeType && (r = e.defaultView),
                                void 0 === n)
                            )
                                return r ? r[i] : e[t];
                            r
                                ? r.scrollTo(
                                      o ? r.pageXOffset : n,
                                      o ? n : r.pageYOffset
                                  )
                                : (e[t] = n);
                        },
                        t,
                        e,
                        arguments.length
                    );
                };
            }
        ),
        S.each(['top', 'left'], function (e, n) {
            S.cssHooks[n] = $e(y.pixelPosition, function (e, t) {
                if (t)
                    return (
                        (t = Be(e, n)),
                        Me.test(t) ? S(e).position()[n] + 'px' : t
                    );
            });
        }),
        S.each({ Height: 'height', Width: 'width' }, function (a, s) {
            S.each(
                { padding: 'inner' + a, content: s, '': 'outer' + a },
                function (r, o) {
                    S.fn[o] = function (e, t) {
                        var n =
                                arguments.length &&
                                (r || 'boolean' != typeof e),
                            i =
                                r ||
                                (!0 === e || !0 === t ? 'margin' : 'border');
                        return $(
                            this,
                            function (e, t, n) {
                                var r;
                                return x(e)
                                    ? 0 === o.indexOf('outer')
                                        ? e['inner' + a]
                                        : e.document.documentElement[
                                              'client' + a
                                          ]
                                    : 9 === e.nodeType
                                    ? ((r = e.documentElement),
                                      Math.max(
                                          e.body['scroll' + a],
                                          r['scroll' + a],
                                          e.body['offset' + a],
                                          r['offset' + a],
                                          r['client' + a]
                                      ))
                                    : void 0 === n
                                    ? S.css(e, t, i)
                                    : S.style(e, t, n, i);
                            },
                            s,
                            n ? e : void 0,
                            n
                        );
                    };
                }
            );
        }),
        S.each(
            [
                'ajaxStart',
                'ajaxStop',
                'ajaxComplete',
                'ajaxError',
                'ajaxSuccess',
                'ajaxSend'
            ],
            function (e, t) {
                S.fn[t] = function (e) {
                    return this.on(t, e);
                };
            }
        ),
        S.fn.extend({
            bind: function (e, t, n) {
                return this.on(e, null, t, n);
            },
            unbind: function (e, t) {
                return this.off(e, null, t);
            },
            delegate: function (e, t, n, r) {
                return this.on(t, e, n, r);
            },
            undelegate: function (e, t, n) {
                return 1 === arguments.length
                    ? this.off(e, '**')
                    : this.off(t, e || '**', n);
            },
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
            }
        }),
        S.each(
            'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
                ' '
            ),
            function (e, n) {
                S.fn[n] = function (e, t) {
                    return 0 < arguments.length
                        ? this.on(n, null, e, t)
                        : this.trigger(n);
                };
            }
        );
    var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    (S.proxy = function (e, t) {
        var n, r, i;
        if (('string' == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
            return (
                (r = s.call(arguments, 2)),
                ((i = function () {
                    return e.apply(t || this, r.concat(s.call(arguments)));
                }).guid = e.guid = e.guid || S.guid++),
                i
            );
    }),
        (S.holdReady = function (e) {
            e ? S.readyWait++ : S.ready(!0);
        }),
        (S.isArray = Array.isArray),
        (S.parseJSON = JSON.parse),
        (S.nodeName = A),
        (S.isFunction = m),
        (S.isWindow = x),
        (S.camelCase = X),
        (S.type = w),
        (S.now = Date.now),
        (S.isNumeric = function (e) {
            var t = S.type(e);
            return (
                ('number' === t || 'string' === t) && !isNaN(e - parseFloat(e))
            );
        }),
        (S.trim = function (e) {
            return null == e ? '' : (e + '').replace(Gt, '');
        }),
        'function' == typeof define &&
            define.amd &&
            define('jquery', [], function () {
                return S;
            });
    var Yt = C.jQuery,
        Qt = C.$;
    return (
        (S.noConflict = function (e) {
            return (
                C.$ === S && (C.$ = Qt),
                e && C.jQuery === S && (C.jQuery = Yt),
                S
            );
        }),
        'undefined' == typeof e && (C.jQuery = C.$ = S),
        S
    );
});

/*! VelocityJS.org (1.5.0). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
!(function (a) {
    'use strict';
    function b(a) {
        var b = a.length,
            d = c.type(a);
        return (
            'function' !== d &&
            !c.isWindow(a) &&
            (!(1 !== a.nodeType || !b) ||
                'array' === d ||
                0 === b ||
                ('number' == typeof b && b > 0 && b - 1 in a))
        );
    }
    if (!a.jQuery) {
        var c = function (a, b) {
            return new c.fn.init(a, b);
        };
        (c.isWindow = function (a) {
            return a && a === a.window;
        }),
            (c.type = function (a) {
                return a
                    ? 'object' == typeof a || 'function' == typeof a
                        ? e[g.call(a)] || 'object'
                        : typeof a
                    : a + '';
            }),
            (c.isArray =
                Array.isArray ||
                function (a) {
                    return 'array' === c.type(a);
                }),
            (c.isPlainObject = function (a) {
                var b;
                if (!a || 'object' !== c.type(a) || a.nodeType || c.isWindow(a))
                    return !1;
                try {
                    if (
                        a.constructor &&
                        !f.call(a, 'constructor') &&
                        !f.call(a.constructor.prototype, 'isPrototypeOf')
                    )
                        return !1;
                } catch (d) {
                    return !1;
                }
                for (b in a);
                return b === undefined || f.call(a, b);
            }),
            (c.each = function (a, c, d) {
                var e = 0,
                    f = a.length,
                    g = b(a);
                if (d) {
                    if (g) for (; e < f && !1 !== c.apply(a[e], d); e++);
                    else
                        for (e in a)
                            if (a.hasOwnProperty(e) && !1 === c.apply(a[e], d))
                                break;
                } else if (g)
                    for (; e < f && !1 !== c.call(a[e], e, a[e]); e++);
                else
                    for (e in a)
                        if (a.hasOwnProperty(e) && !1 === c.call(a[e], e, a[e]))
                            break;
                return a;
            }),
            (c.data = function (a, b, e) {
                if (e === undefined) {
                    var f = a[c.expando],
                        g = f && d[f];
                    if (b === undefined) return g;
                    if (g && b in g) return g[b];
                } else if (b !== undefined) {
                    var h = a[c.expando] || (a[c.expando] = ++c.uuid);
                    return (d[h] = d[h] || {}), (d[h][b] = e), e;
                }
            }),
            (c.removeData = function (a, b) {
                var e = a[c.expando],
                    f = e && d[e];
                f &&
                    (b
                        ? c.each(b, function (a, b) {
                              delete f[b];
                          })
                        : delete d[e]);
            }),
            (c.extend = function () {
                var a,
                    b,
                    d,
                    e,
                    f,
                    g,
                    h = arguments[0] || {},
                    i = 1,
                    j = arguments.length,
                    k = !1;
                for (
                    'boolean' == typeof h &&
                        ((k = h), (h = arguments[i] || {}), i++),
                        'object' != typeof h &&
                            'function' !== c.type(h) &&
                            (h = {}),
                        i === j && ((h = this), i--);
                    i < j;
                    i++
                )
                    if ((f = arguments[i]))
                        for (e in f)
                            f.hasOwnProperty(e) &&
                                ((a = h[e]),
                                (d = f[e]),
                                h !== d &&
                                    (k &&
                                    d &&
                                    (c.isPlainObject(d) || (b = c.isArray(d)))
                                        ? (b
                                              ? ((b = !1),
                                                (g =
                                                    a && c.isArray(a) ? a : []))
                                              : (g =
                                                    a && c.isPlainObject(a)
                                                        ? a
                                                        : {}),
                                          (h[e] = c.extend(k, g, d)))
                                        : d !== undefined && (h[e] = d)));
                return h;
            }),
            (c.queue = function (a, d, e) {
                if (a) {
                    d = (d || 'fx') + 'queue';
                    var f = c.data(a, d);
                    return e
                        ? (!f || c.isArray(e)
                              ? (f = c.data(
                                    a,
                                    d,
                                    (function (a, c) {
                                        var d = c || [];
                                        return (
                                            a &&
                                                (b(Object(a))
                                                    ? (function (a, b) {
                                                          for (
                                                              var c = +b.length,
                                                                  d = 0,
                                                                  e = a.length;
                                                              d < c;

                                                          )
                                                              a[e++] = b[d++];
                                                          if (c !== c)
                                                              for (
                                                                  ;
                                                                  b[d] !==
                                                                  undefined;

                                                              )
                                                                  a[e++] =
                                                                      b[d++];
                                                          a.length = e;
                                                      })(
                                                          d,
                                                          'string' == typeof a
                                                              ? [a]
                                                              : a
                                                      )
                                                    : [].push.call(d, a)),
                                            d
                                        );
                                    })(e)
                                ))
                              : f.push(e),
                          f)
                        : f || [];
                }
            }),
            (c.dequeue = function (a, b) {
                c.each(a.nodeType ? [a] : a, function (a, d) {
                    b = b || 'fx';
                    var e = c.queue(d, b),
                        f = e.shift();
                    'inprogress' === f && (f = e.shift()),
                        f &&
                            ('fx' === b && e.unshift('inprogress'),
                            f.call(d, function () {
                                c.dequeue(d, b);
                            }));
                });
            }),
            (c.fn = c.prototype = {
                init: function (a) {
                    if (a.nodeType) return (this[0] = a), this;
                    throw new Error('Not a DOM node.');
                },
                offset: function () {
                    var b = this[0].getBoundingClientRect
                        ? this[0].getBoundingClientRect()
                        : { top: 0, left: 0 };
                    return {
                        top:
                            b.top +
                            (a.pageYOffset || document.scrollTop || 0) -
                            (document.clientTop || 0),
                        left:
                            b.left +
                            (a.pageXOffset || document.scrollLeft || 0) -
                            (document.clientLeft || 0)
                    };
                },
                position: function () {
                    var a = this[0],
                        b = (function (a) {
                            for (
                                var b = a.offsetParent;
                                b &&
                                'html' !== b.nodeName.toLowerCase() &&
                                b.style &&
                                'static' === b.style.position.toLowerCase();

                            )
                                b = b.offsetParent;
                            return b || document;
                        })(a),
                        d = this.offset(),
                        e = /^(?:body|html)$/i.test(b.nodeName)
                            ? { top: 0, left: 0 }
                            : c(b).offset();
                    return (
                        (d.top -= parseFloat(a.style.marginTop) || 0),
                        (d.left -= parseFloat(a.style.marginLeft) || 0),
                        b.style &&
                            ((e.top += parseFloat(b.style.borderTopWidth) || 0),
                            (e.left +=
                                parseFloat(b.style.borderLeftWidth) || 0)),
                        { top: d.top - e.top, left: d.left - e.left }
                    );
                }
            });
        var d = {};
        (c.expando = 'velocity' + new Date().getTime()), (c.uuid = 0);
        for (
            var e = {},
                f = e.hasOwnProperty,
                g = e.toString,
                h = 'Boolean Number String Function Array Date RegExp Object Error'.split(
                    ' '
                ),
                i = 0;
            i < h.length;
            i++
        )
            e['[object ' + h[i] + ']'] = h[i].toLowerCase();
        (c.fn.init.prototype = c.fn), (a.Velocity = { Utilities: c });
    }
})(window),
    (function (a) {
        'use strict';
        'object' == typeof module && 'object' == typeof module.exports
            ? (module.exports = a())
            : 'function' == typeof define && define.amd
            ? define(a)
            : a();
    })(function () {
        'use strict';
        return (function (a, b, c, d) {
            function e(a) {
                for (var b = -1, c = a ? a.length : 0, d = []; ++b < c; ) {
                    var e = a[b];
                    e && d.push(e);
                }
                return d;
            }
            function f(a) {
                return (
                    u.isWrapped(a) ? (a = s.call(a)) : u.isNode(a) && (a = [a]),
                    a
                );
            }
            function g(a) {
                var b = o.data(a, 'velocity');
                return null === b ? d : b;
            }
            function h(a, b) {
                var c = g(a);
                c &&
                    c.delayTimer &&
                    !c.delayPaused &&
                    ((c.delayRemaining = c.delay - b + c.delayBegin),
                    (c.delayPaused = !0),
                    clearTimeout(c.delayTimer.setTimeout));
            }
            function i(a, b) {
                var c = g(a);
                c &&
                    c.delayTimer &&
                    c.delayPaused &&
                    ((c.delayPaused = !1),
                    (c.delayTimer.setTimeout = setTimeout(
                        c.delayTimer.next,
                        c.delayRemaining
                    )));
            }
            function j(a) {
                return function (b) {
                    return Math.round(b * a) * (1 / a);
                };
            }
            function k(a, c, d, e) {
                function f(a, b) {
                    return 1 - 3 * b + 3 * a;
                }
                function g(a, b) {
                    return 3 * b - 6 * a;
                }
                function h(a) {
                    return 3 * a;
                }
                function i(a, b, c) {
                    return ((f(b, c) * a + g(b, c)) * a + h(b)) * a;
                }
                function j(a, b, c) {
                    return 3 * f(b, c) * a * a + 2 * g(b, c) * a + h(b);
                }
                function k(b, c) {
                    for (var e = 0; e < p; ++e) {
                        var f = j(c, a, d);
                        if (0 === f) return c;
                        c -= (i(c, a, d) - b) / f;
                    }
                    return c;
                }
                function l() {
                    for (var b = 0; b < t; ++b) x[b] = i(b * u, a, d);
                }
                function m(b, c, e) {
                    var f,
                        g,
                        h = 0;
                    do {
                        (g = c + (e - c) / 2),
                            (f = i(g, a, d) - b),
                            f > 0 ? (e = g) : (c = g);
                    } while (Math.abs(f) > r && ++h < s);
                    return g;
                }
                function n(b) {
                    for (var c = 0, e = 1, f = t - 1; e !== f && x[e] <= b; ++e)
                        c += u;
                    --e;
                    var g = (b - x[e]) / (x[e + 1] - x[e]),
                        h = c + g * u,
                        i = j(h, a, d);
                    return i >= q ? k(b, h) : 0 === i ? h : m(b, c, c + u);
                }
                function o() {
                    (y = !0), (a === c && d === e) || l();
                }
                var p = 4,
                    q = 0.001,
                    r = 1e-7,
                    s = 10,
                    t = 11,
                    u = 1 / (t - 1),
                    v = 'Float32Array' in b;
                if (4 !== arguments.length) return !1;
                for (var w = 0; w < 4; ++w)
                    if (
                        'number' != typeof arguments[w] ||
                        isNaN(arguments[w]) ||
                        !isFinite(arguments[w])
                    )
                        return !1;
                (a = Math.min(a, 1)),
                    (d = Math.min(d, 1)),
                    (a = Math.max(a, 0)),
                    (d = Math.max(d, 0));
                var x = v ? new Float32Array(t) : new Array(t),
                    y = !1,
                    z = function (b) {
                        return (
                            y || o(),
                            a === c && d === e
                                ? b
                                : 0 === b
                                ? 0
                                : 1 === b
                                ? 1
                                : i(n(b), c, e)
                        );
                    };
                z.getControlPoints = function () {
                    return [
                        { x: a, y: c },
                        { x: d, y: e }
                    ];
                };
                var A = 'generateBezier(' + [a, c, d, e] + ')';
                return (
                    (z.toString = function () {
                        return A;
                    }),
                    z
                );
            }
            function l(a, b) {
                var c = a;
                return (
                    u.isString(a)
                        ? y.Easings[a] || (c = !1)
                        : (c =
                              u.isArray(a) && 1 === a.length
                                  ? j.apply(null, a)
                                  : u.isArray(a) && 2 === a.length
                                  ? z.apply(null, a.concat([b]))
                                  : !(!u.isArray(a) || 4 !== a.length) &&
                                    k.apply(null, a)),
                    !1 === c &&
                        (c = y.Easings[y.defaults.easing]
                            ? y.defaults.easing
                            : x),
                    c
                );
            }
            function m(a) {
                if (a) {
                    var b = y.timestamp && !0 !== a ? a : r.now(),
                        c = y.State.calls.length;
                    c > 1e4 &&
                        ((y.State.calls = e(y.State.calls)),
                        (c = y.State.calls.length));
                    for (var f = 0; f < c; f++)
                        if (y.State.calls[f]) {
                            var h = y.State.calls[f],
                                i = h[0],
                                j = h[2],
                                k = h[3],
                                l = !k,
                                q = null,
                                s = h[5],
                                t = h[6];
                            if ((k || (k = y.State.calls[f][3] = b - 16), s)) {
                                if (!0 !== s.resume) continue;
                                (k = h[3] = Math.round(b - t - 16)),
                                    (h[5] = null);
                            }
                            t = h[6] = b - k;
                            for (
                                var v = Math.min(t / j.duration, 1),
                                    w = 0,
                                    x = i.length;
                                w < x;
                                w++
                            ) {
                                var z = i[w],
                                    B = z.element;
                                if (g(B)) {
                                    var D = !1;
                                    if (
                                        j.display !== d &&
                                        null !== j.display &&
                                        'none' !== j.display
                                    ) {
                                        if ('flex' === j.display) {
                                            var E = [
                                                '-webkit-box',
                                                '-moz-box',
                                                '-ms-flexbox',
                                                '-webkit-flex'
                                            ];
                                            o.each(E, function (a, b) {
                                                A.setPropertyValue(
                                                    B,
                                                    'display',
                                                    b
                                                );
                                            });
                                        }
                                        A.setPropertyValue(
                                            B,
                                            'display',
                                            j.display
                                        );
                                    }
                                    j.visibility !== d &&
                                        'hidden' !== j.visibility &&
                                        A.setPropertyValue(
                                            B,
                                            'visibility',
                                            j.visibility
                                        );
                                    for (var F in z)
                                        if (
                                            z.hasOwnProperty(F) &&
                                            'element' !== F
                                        ) {
                                            var G,
                                                H = z[F],
                                                I = u.isString(H.easing)
                                                    ? y.Easings[H.easing]
                                                    : H.easing;
                                            if (u.isString(H.pattern)) {
                                                var J =
                                                    1 === v
                                                        ? function (a, b, c) {
                                                              var d =
                                                                  H.endValue[b];
                                                              return c
                                                                  ? Math.round(
                                                                        d
                                                                    )
                                                                  : d;
                                                          }
                                                        : function (a, b, c) {
                                                              var d =
                                                                      H
                                                                          .startValue[
                                                                          b
                                                                      ],
                                                                  e =
                                                                      H
                                                                          .endValue[
                                                                          b
                                                                      ] - d,
                                                                  f =
                                                                      d +
                                                                      e *
                                                                          I(
                                                                              v,
                                                                              j,
                                                                              e
                                                                          );
                                                              return c
                                                                  ? Math.round(
                                                                        f
                                                                    )
                                                                  : f;
                                                          };
                                                G = H.pattern.replace(
                                                    /{(\d+)(!)?}/g,
                                                    J
                                                );
                                            } else if (1 === v) G = H.endValue;
                                            else {
                                                var K =
                                                    H.endValue - H.startValue;
                                                G =
                                                    H.startValue +
                                                    K * I(v, j, K);
                                            }
                                            if (!l && G === H.currentValue)
                                                continue;
                                            if (
                                                ((H.currentValue = G),
                                                'tween' === F)
                                            )
                                                q = G;
                                            else {
                                                var L;
                                                if (A.Hooks.registered[F]) {
                                                    L = A.Hooks.getRoot(F);
                                                    var M = g(B)
                                                        .rootPropertyValueCache[
                                                        L
                                                    ];
                                                    M &&
                                                        (H.rootPropertyValue = M);
                                                }
                                                var N = A.setPropertyValue(
                                                    B,
                                                    F,
                                                    H.currentValue +
                                                        (p < 9 &&
                                                        0 === parseFloat(G)
                                                            ? ''
                                                            : H.unitType),
                                                    H.rootPropertyValue,
                                                    H.scrollData
                                                );
                                                A.Hooks.registered[F] &&
                                                    (A.Normalizations
                                                        .registered[L]
                                                        ? (g(
                                                              B
                                                          ).rootPropertyValueCache[
                                                              L
                                                          ] = A.Normalizations.registered[
                                                              L
                                                          ](
                                                              'extract',
                                                              null,
                                                              N[1]
                                                          ))
                                                        : (g(
                                                              B
                                                          ).rootPropertyValueCache[
                                                              L
                                                          ] = N[1])),
                                                    'transform' === N[0] &&
                                                        (D = !0);
                                            }
                                        }
                                    j.mobileHA &&
                                        g(B).transformCache.translate3d === d &&
                                        ((g(B).transformCache.translate3d =
                                            '(0px, 0px, 0px)'),
                                        (D = !0)),
                                        D && A.flushTransformCache(B);
                                }
                            }
                            j.display !== d &&
                                'none' !== j.display &&
                                (y.State.calls[f][2].display = !1),
                                j.visibility !== d &&
                                    'hidden' !== j.visibility &&
                                    (y.State.calls[f][2].visibility = !1),
                                j.progress &&
                                    j.progress.call(
                                        h[1],
                                        h[1],
                                        v,
                                        Math.max(0, k + j.duration - b),
                                        k,
                                        q
                                    ),
                                1 === v && n(f);
                        }
                }
                y.State.isTicking && C(m);
            }
            function n(a, b) {
                if (!y.State.calls[a]) return !1;
                for (
                    var c = y.State.calls[a][0],
                        e = y.State.calls[a][1],
                        f = y.State.calls[a][2],
                        h = y.State.calls[a][4],
                        i = !1,
                        j = 0,
                        k = c.length;
                    j < k;
                    j++
                ) {
                    var l = c[j].element;
                    b ||
                        f.loop ||
                        ('none' === f.display &&
                            A.setPropertyValue(l, 'display', f.display),
                        'hidden' === f.visibility &&
                            A.setPropertyValue(l, 'visibility', f.visibility));
                    var m = g(l);
                    if (
                        !0 !== f.loop &&
                        (o.queue(l)[1] === d ||
                            !/\.velocityQueueEntryFlag/i.test(o.queue(l)[1])) &&
                        m
                    ) {
                        (m.isAnimating = !1), (m.rootPropertyValueCache = {});
                        var n = !1;
                        o.each(A.Lists.transforms3D, function (a, b) {
                            var c = /^scale/.test(b) ? 1 : 0,
                                e = m.transformCache[b];
                            m.transformCache[b] !== d &&
                                new RegExp('^\\(' + c + '[^.]').test(e) &&
                                ((n = !0), delete m.transformCache[b]);
                        }),
                            f.mobileHA &&
                                ((n = !0), delete m.transformCache.translate3d),
                            n && A.flushTransformCache(l),
                            A.Values.removeClass(l, 'velocity-animating');
                    }
                    if (!b && f.complete && !f.loop && j === k - 1)
                        try {
                            f.complete.call(e, e);
                        } catch (r) {
                            setTimeout(function () {
                                throw r;
                            }, 1);
                        }
                    h && !0 !== f.loop && h(e),
                        m &&
                            !0 === f.loop &&
                            !b &&
                            (o.each(m.tweensContainer, function (a, b) {
                                if (
                                    /^rotate/.test(a) &&
                                    (parseFloat(b.startValue) -
                                        parseFloat(b.endValue)) %
                                        360 ==
                                        0
                                ) {
                                    var c = b.startValue;
                                    (b.startValue = b.endValue),
                                        (b.endValue = c);
                                }
                                /^backgroundPosition/.test(a) &&
                                    100 === parseFloat(b.endValue) &&
                                    '%' === b.unitType &&
                                    ((b.endValue = 0), (b.startValue = 100));
                            }),
                            y(l, 'reverse', { loop: !0, delay: f.delay })),
                        !1 !== f.queue && o.dequeue(l, f.queue);
                }
                y.State.calls[a] = !1;
                for (var p = 0, q = y.State.calls.length; p < q; p++)
                    if (!1 !== y.State.calls[p]) {
                        i = !0;
                        break;
                    }
                !1 === i &&
                    ((y.State.isTicking = !1),
                    delete y.State.calls,
                    (y.State.calls = []));
            }
            var o,
                p = (function () {
                    if (c.documentMode) return c.documentMode;
                    for (var a = 7; a > 4; a--) {
                        var b = c.createElement('div');
                        if (
                            ((b.innerHTML =
                                '\x3c!--[if IE ' +
                                a +
                                ']><span></span><![endif]--\x3e'),
                            b.getElementsByTagName('span').length)
                        )
                            return (b = null), a;
                    }
                    return d;
                })(),
                q = (function () {
                    var a = 0;
                    return (
                        b.webkitRequestAnimationFrame ||
                        b.mozRequestAnimationFrame ||
                        function (b) {
                            var c,
                                d = new Date().getTime();
                            return (
                                (c = Math.max(0, 16 - (d - a))),
                                (a = d + c),
                                setTimeout(function () {
                                    b(d + c);
                                }, c)
                            );
                        }
                    );
                })(),
                r = (function () {
                    var a = b.performance || {};
                    if ('function' != typeof a.now) {
                        var c =
                            a.timing && a.timing.navigationStart
                                ? a.timing.navigationStart
                                : new Date().getTime();
                        a.now = function () {
                            return new Date().getTime() - c;
                        };
                    }
                    return a;
                })(),
                s = (function () {
                    var a = Array.prototype.slice;
                    try {
                        return a.call(c.documentElement), a;
                    } catch (b) {
                        return function (b, c) {
                            var d = this.length;
                            if (
                                ('number' != typeof b && (b = 0),
                                'number' != typeof c && (c = d),
                                this.slice)
                            )
                                return a.call(this, b, c);
                            var e,
                                f = [],
                                g = b >= 0 ? b : Math.max(0, d + b),
                                h = c < 0 ? d + c : Math.min(c, d),
                                i = h - g;
                            if (i > 0)
                                if (((f = new Array(i)), this.charAt))
                                    for (e = 0; e < i; e++)
                                        f[e] = this.charAt(g + e);
                                else for (e = 0; e < i; e++) f[e] = this[g + e];
                            return f;
                        };
                    }
                })(),
                t = function () {
                    return Array.prototype.includes
                        ? function (a, b) {
                              return a.includes(b);
                          }
                        : Array.prototype.indexOf
                        ? function (a, b) {
                              return a.indexOf(b) >= 0;
                          }
                        : function (a, b) {
                              for (var c = 0; c < a.length; c++)
                                  if (a[c] === b) return !0;
                              return !1;
                          };
                },
                u = {
                    isNumber: function (a) {
                        return 'number' == typeof a;
                    },
                    isString: function (a) {
                        return 'string' == typeof a;
                    },
                    isArray:
                        Array.isArray ||
                        function (a) {
                            return (
                                '[object Array]' ===
                                Object.prototype.toString.call(a)
                            );
                        },
                    isFunction: function (a) {
                        return (
                            '[object Function]' ===
                            Object.prototype.toString.call(a)
                        );
                    },
                    isNode: function (a) {
                        return a && a.nodeType;
                    },
                    isWrapped: function (a) {
                        return (
                            a &&
                            a !== b &&
                            u.isNumber(a.length) &&
                            !u.isString(a) &&
                            !u.isFunction(a) &&
                            !u.isNode(a) &&
                            (0 === a.length || u.isNode(a[0]))
                        );
                    },
                    isSVG: function (a) {
                        return b.SVGElement && a instanceof b.SVGElement;
                    },
                    isEmptyObject: function (a) {
                        for (var b in a) if (a.hasOwnProperty(b)) return !1;
                        return !0;
                    }
                },
                v = !1;
            if (
                (a.fn && a.fn.jquery
                    ? ((o = a), (v = !0))
                    : (o = b.Velocity.Utilities),
                p <= 8 && !v)
            )
                throw new Error(
                    'Velocity: IE8 and below require jQuery to be loaded before Velocity.'
                );
            if (p <= 7) return void (jQuery.fn.velocity = jQuery.fn.animate);
            var w = 400,
                x = 'swing',
                y = {
                    State: {
                        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                            b.navigator.userAgent
                        ),
                        isAndroid: /Android/i.test(b.navigator.userAgent),
                        isGingerbread: /Android 2\.3\.[3-7]/i.test(
                            b.navigator.userAgent
                        ),
                        isChrome: b.chrome,
                        isFirefox: /Firefox/i.test(b.navigator.userAgent),
                        prefixElement: c.createElement('div'),
                        prefixMatches: {},
                        scrollAnchor: null,
                        scrollPropertyLeft: null,
                        scrollPropertyTop: null,
                        isTicking: !1,
                        calls: [],
                        delayedElements: { count: 0 }
                    },
                    CSS: {},
                    Utilities: o,
                    Redirects: {},
                    Easings: {},
                    Promise: b.Promise,
                    defaults: {
                        queue: '',
                        duration: w,
                        easing: x,
                        begin: d,
                        complete: d,
                        progress: d,
                        display: d,
                        visibility: d,
                        loop: !1,
                        delay: !1,
                        mobileHA: !0,
                        _cacheValues: !0,
                        promiseRejectEmpty: !0
                    },
                    init: function (a) {
                        o.data(a, 'velocity', {
                            isSVG: u.isSVG(a),
                            isAnimating: !1,
                            computedStyle: null,
                            tweensContainer: null,
                            rootPropertyValueCache: {},
                            transformCache: {}
                        });
                    },
                    hook: null,
                    mock: !1,
                    version: { major: 1, minor: 5, patch: 1 },
                    debug: !1,
                    timestamp: !0,
                    pauseAll: function (a) {
                        var b = new Date().getTime();
                        o.each(y.State.calls, function (b, c) {
                            if (c) {
                                if (
                                    a !== d &&
                                    (c[2].queue !== a || !1 === c[2].queue)
                                )
                                    return !0;
                                c[5] = { resume: !1 };
                            }
                        }),
                            o.each(y.State.delayedElements, function (a, c) {
                                c && h(c, b);
                            });
                    },
                    resumeAll: function (a) {
                        var b = new Date().getTime();
                        o.each(y.State.calls, function (b, c) {
                            if (c) {
                                if (
                                    a !== d &&
                                    (c[2].queue !== a || !1 === c[2].queue)
                                )
                                    return !0;
                                c[5] && (c[5].resume = !0);
                            }
                        }),
                            o.each(y.State.delayedElements, function (a, c) {
                                c && i(c, b);
                            });
                    }
                };
            b.pageYOffset !== d
                ? ((y.State.scrollAnchor = b),
                  (y.State.scrollPropertyLeft = 'pageXOffset'),
                  (y.State.scrollPropertyTop = 'pageYOffset'))
                : ((y.State.scrollAnchor =
                      c.documentElement || c.body.parentNode || c.body),
                  (y.State.scrollPropertyLeft = 'scrollLeft'),
                  (y.State.scrollPropertyTop = 'scrollTop'));
            var z = (function () {
                function a(a) {
                    return -a.tension * a.x - a.friction * a.v;
                }
                function b(b, c, d) {
                    var e = {
                        x: b.x + d.dx * c,
                        v: b.v + d.dv * c,
                        tension: b.tension,
                        friction: b.friction
                    };
                    return { dx: e.v, dv: a(e) };
                }
                function c(c, d) {
                    var e = { dx: c.v, dv: a(c) },
                        f = b(c, 0.5 * d, e),
                        g = b(c, 0.5 * d, f),
                        h = b(c, d, g),
                        i = (1 / 6) * (e.dx + 2 * (f.dx + g.dx) + h.dx),
                        j = (1 / 6) * (e.dv + 2 * (f.dv + g.dv) + h.dv);
                    return (c.x = c.x + i * d), (c.v = c.v + j * d), c;
                }
                return function d(a, b, e) {
                    var f,
                        g,
                        h,
                        i = { x: -1, v: 0, tension: null, friction: null },
                        j = [0],
                        k = 0;
                    for (
                        a = parseFloat(a) || 500,
                            b = parseFloat(b) || 20,
                            e = e || null,
                            i.tension = a,
                            i.friction = b,
                            f = null !== e,
                            f
                                ? ((k = d(a, b)), (g = (k / e) * 0.016))
                                : (g = 0.016);
                        ;

                    )
                        if (
                            ((h = c(h || i, g)),
                            j.push(1 + h.x),
                            (k += 16),
                            !(Math.abs(h.x) > 1e-4 && Math.abs(h.v) > 1e-4))
                        )
                            break;
                    return f
                        ? function (a) {
                              return j[(a * (j.length - 1)) | 0];
                          }
                        : k;
                };
            })();
            (y.Easings = {
                linear: function (a) {
                    return a;
                },
                swing: function (a) {
                    return 0.5 - Math.cos(a * Math.PI) / 2;
                },
                spring: function (a) {
                    return 1 - Math.cos(4.5 * a * Math.PI) * Math.exp(6 * -a);
                }
            }),
                o.each(
                    [
                        ['ease', [0.25, 0.1, 0.25, 1]],
                        ['ease-in', [0.42, 0, 1, 1]],
                        ['ease-out', [0, 0, 0.58, 1]],
                        ['ease-in-out', [0.42, 0, 0.58, 1]],
                        ['easeInSine', [0.47, 0, 0.745, 0.715]],
                        ['easeOutSine', [0.39, 0.575, 0.565, 1]],
                        ['easeInOutSine', [0.445, 0.05, 0.55, 0.95]],
                        ['easeInQuad', [0.55, 0.085, 0.68, 0.53]],
                        ['easeOutQuad', [0.25, 0.46, 0.45, 0.94]],
                        ['easeInOutQuad', [0.455, 0.03, 0.515, 0.955]],
                        ['easeInCubic', [0.55, 0.055, 0.675, 0.19]],
                        ['easeOutCubic', [0.215, 0.61, 0.355, 1]],
                        ['easeInOutCubic', [0.645, 0.045, 0.355, 1]],
                        ['easeInQuart', [0.895, 0.03, 0.685, 0.22]],
                        ['easeOutQuart', [0.165, 0.84, 0.44, 1]],
                        ['easeInOutQuart', [0.77, 0, 0.175, 1]],
                        ['easeInQuint', [0.755, 0.05, 0.855, 0.06]],
                        ['easeOutQuint', [0.23, 1, 0.32, 1]],
                        ['easeInOutQuint', [0.86, 0, 0.07, 1]],
                        ['easeInExpo', [0.95, 0.05, 0.795, 0.035]],
                        ['easeOutExpo', [0.19, 1, 0.22, 1]],
                        ['easeInOutExpo', [1, 0, 0, 1]],
                        ['easeInCirc', [0.6, 0.04, 0.98, 0.335]],
                        ['easeOutCirc', [0.075, 0.82, 0.165, 1]],
                        ['easeInOutCirc', [0.785, 0.135, 0.15, 0.86]]
                    ],
                    function (a, b) {
                        y.Easings[b[0]] = k.apply(null, b[1]);
                    }
                );
            var A = (y.CSS = {
                RegEx: {
                    isHex: /^#([A-f\d]{3}){1,2}$/i,
                    valueUnwrap: /^[A-z]+\((.*)\)$/i,
                    wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                    valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
                },
                Lists: {
                    colors: [
                        'fill',
                        'stroke',
                        'stopColor',
                        'color',
                        'backgroundColor',
                        'borderColor',
                        'borderTopColor',
                        'borderRightColor',
                        'borderBottomColor',
                        'borderLeftColor',
                        'outlineColor'
                    ],
                    transformsBase: [
                        'translateX',
                        'translateY',
                        'scale',
                        'scaleX',
                        'scaleY',
                        'skewX',
                        'skewY',
                        'rotateZ'
                    ],
                    transforms3D: [
                        'transformPerspective',
                        'translateZ',
                        'scaleZ',
                        'rotateX',
                        'rotateY'
                    ],
                    units: [
                        '%',
                        'em',
                        'ex',
                        'ch',
                        'rem',
                        'vw',
                        'vh',
                        'vmin',
                        'vmax',
                        'cm',
                        'mm',
                        'Q',
                        'in',
                        'pc',
                        'pt',
                        'px',
                        'deg',
                        'grad',
                        'rad',
                        'turn',
                        's',
                        'ms'
                    ],
                    colorNames: {
                        aliceblue: '240,248,255',
                        antiquewhite: '250,235,215',
                        aquamarine: '127,255,212',
                        aqua: '0,255,255',
                        azure: '240,255,255',
                        beige: '245,245,220',
                        bisque: '255,228,196',
                        black: '0,0,0',
                        blanchedalmond: '255,235,205',
                        blueviolet: '138,43,226',
                        blue: '0,0,255',
                        brown: '165,42,42',
                        burlywood: '222,184,135',
                        cadetblue: '95,158,160',
                        chartreuse: '127,255,0',
                        chocolate: '210,105,30',
                        coral: '255,127,80',
                        cornflowerblue: '100,149,237',
                        cornsilk: '255,248,220',
                        crimson: '220,20,60',
                        cyan: '0,255,255',
                        darkblue: '0,0,139',
                        darkcyan: '0,139,139',
                        darkgoldenrod: '184,134,11',
                        darkgray: '169,169,169',
                        darkgrey: '169,169,169',
                        darkgreen: '0,100,0',
                        darkkhaki: '189,183,107',
                        darkmagenta: '139,0,139',
                        darkolivegreen: '85,107,47',
                        darkorange: '255,140,0',
                        darkorchid: '153,50,204',
                        darkred: '139,0,0',
                        darksalmon: '233,150,122',
                        darkseagreen: '143,188,143',
                        darkslateblue: '72,61,139',
                        darkslategray: '47,79,79',
                        darkturquoise: '0,206,209',
                        darkviolet: '148,0,211',
                        deeppink: '255,20,147',
                        deepskyblue: '0,191,255',
                        dimgray: '105,105,105',
                        dimgrey: '105,105,105',
                        dodgerblue: '30,144,255',
                        firebrick: '178,34,34',
                        floralwhite: '255,250,240',
                        forestgreen: '34,139,34',
                        fuchsia: '255,0,255',
                        gainsboro: '220,220,220',
                        ghostwhite: '248,248,255',
                        gold: '255,215,0',
                        goldenrod: '218,165,32',
                        gray: '128,128,128',
                        grey: '128,128,128',
                        greenyellow: '173,255,47',
                        green: '0,128,0',
                        honeydew: '240,255,240',
                        hotpink: '255,105,180',
                        indianred: '205,92,92',
                        indigo: '75,0,130',
                        ivory: '255,255,240',
                        khaki: '240,230,140',
                        lavenderblush: '255,240,245',
                        lavender: '230,230,250',
                        lawngreen: '124,252,0',
                        lemonchiffon: '255,250,205',
                        lightblue: '173,216,230',
                        lightcoral: '240,128,128',
                        lightcyan: '224,255,255',
                        lightgoldenrodyellow: '250,250,210',
                        lightgray: '211,211,211',
                        lightgrey: '211,211,211',
                        lightgreen: '144,238,144',
                        lightpink: '255,182,193',
                        lightsalmon: '255,160,122',
                        lightseagreen: '32,178,170',
                        lightskyblue: '135,206,250',
                        lightslategray: '119,136,153',
                        lightsteelblue: '176,196,222',
                        lightyellow: '255,255,224',
                        limegreen: '50,205,50',
                        lime: '0,255,0',
                        linen: '250,240,230',
                        magenta: '255,0,255',
                        maroon: '128,0,0',
                        mediumaquamarine: '102,205,170',
                        mediumblue: '0,0,205',
                        mediumorchid: '186,85,211',
                        mediumpurple: '147,112,219',
                        mediumseagreen: '60,179,113',
                        mediumslateblue: '123,104,238',
                        mediumspringgreen: '0,250,154',
                        mediumturquoise: '72,209,204',
                        mediumvioletred: '199,21,133',
                        midnightblue: '25,25,112',
                        mintcream: '245,255,250',
                        mistyrose: '255,228,225',
                        moccasin: '255,228,181',
                        navajowhite: '255,222,173',
                        navy: '0,0,128',
                        oldlace: '253,245,230',
                        olivedrab: '107,142,35',
                        olive: '128,128,0',
                        orangered: '255,69,0',
                        orange: '255,165,0',
                        orchid: '218,112,214',
                        palegoldenrod: '238,232,170',
                        palegreen: '152,251,152',
                        paleturquoise: '175,238,238',
                        palevioletred: '219,112,147',
                        papayawhip: '255,239,213',
                        peachpuff: '255,218,185',
                        peru: '205,133,63',
                        pink: '255,192,203',
                        plum: '221,160,221',
                        powderblue: '176,224,230',
                        purple: '128,0,128',
                        red: '255,0,0',
                        rosybrown: '188,143,143',
                        royalblue: '65,105,225',
                        saddlebrown: '139,69,19',
                        salmon: '250,128,114',
                        sandybrown: '244,164,96',
                        seagreen: '46,139,87',
                        seashell: '255,245,238',
                        sienna: '160,82,45',
                        silver: '192,192,192',
                        skyblue: '135,206,235',
                        slateblue: '106,90,205',
                        slategray: '112,128,144',
                        snow: '255,250,250',
                        springgreen: '0,255,127',
                        steelblue: '70,130,180',
                        tan: '210,180,140',
                        teal: '0,128,128',
                        thistle: '216,191,216',
                        tomato: '255,99,71',
                        turquoise: '64,224,208',
                        violet: '238,130,238',
                        wheat: '245,222,179',
                        whitesmoke: '245,245,245',
                        white: '255,255,255',
                        yellowgreen: '154,205,50',
                        yellow: '255,255,0'
                    }
                },
                Hooks: {
                    templates: {
                        textShadow: ['Color X Y Blur', 'black 0px 0px 0px'],
                        boxShadow: [
                            'Color X Y Blur Spread',
                            'black 0px 0px 0px 0px'
                        ],
                        clip: ['Top Right Bottom Left', '0px 0px 0px 0px'],
                        backgroundPosition: ['X Y', '0% 0%'],
                        transformOrigin: ['X Y Z', '50% 50% 0px'],
                        perspectiveOrigin: ['X Y', '50% 50%']
                    },
                    registered: {},
                    register: function () {
                        for (var a = 0; a < A.Lists.colors.length; a++) {
                            var b =
                                'color' === A.Lists.colors[a]
                                    ? '0 0 0 1'
                                    : '255 255 255 1';
                            A.Hooks.templates[A.Lists.colors[a]] = [
                                'Red Green Blue Alpha',
                                b
                            ];
                        }
                        var c, d, e;
                        if (p)
                            for (c in A.Hooks.templates)
                                if (A.Hooks.templates.hasOwnProperty(c)) {
                                    (d = A.Hooks.templates[c]),
                                        (e = d[0].split(' '));
                                    var f = d[1].match(A.RegEx.valueSplit);
                                    'Color' === e[0] &&
                                        (e.push(e.shift()),
                                        f.push(f.shift()),
                                        (A.Hooks.templates[c] = [
                                            e.join(' '),
                                            f.join(' ')
                                        ]));
                                }
                        for (c in A.Hooks.templates)
                            if (A.Hooks.templates.hasOwnProperty(c)) {
                                (d = A.Hooks.templates[c]),
                                    (e = d[0].split(' '));
                                for (var g in e)
                                    if (e.hasOwnProperty(g)) {
                                        var h = c + e[g],
                                            i = g;
                                        A.Hooks.registered[h] = [c, i];
                                    }
                            }
                    },
                    getRoot: function (a) {
                        var b = A.Hooks.registered[a];
                        return b ? b[0] : a;
                    },
                    getUnit: function (a, b) {
                        var c =
                            (a.substr(b || 0, 5).match(/^[a-z%]+/) || [])[0] ||
                            '';
                        return c && t(A.Lists.units, c) ? c : '';
                    },
                    fixColors: function (a) {
                        return a.replace(
                            /(rgba?\(\s*)?(\b[a-z]+\b)/g,
                            function (a, b, c) {
                                return A.Lists.colorNames.hasOwnProperty(c)
                                    ? (b || 'rgba(') +
                                          A.Lists.colorNames[c] +
                                          (b ? '' : ',1)')
                                    : b + c;
                            }
                        );
                    },
                    cleanRootPropertyValue: function (a, b) {
                        return (
                            A.RegEx.valueUnwrap.test(b) &&
                                (b = b.match(A.RegEx.valueUnwrap)[1]),
                            A.Values.isCSSNullValue(b) &&
                                (b = A.Hooks.templates[a][1]),
                            b
                        );
                    },
                    extractValue: function (a, b) {
                        var c = A.Hooks.registered[a];
                        if (c) {
                            var d = c[0],
                                e = c[1];
                            return (
                                (b = A.Hooks.cleanRootPropertyValue(d, b)),
                                b.toString().match(A.RegEx.valueSplit)[e]
                            );
                        }
                        return b;
                    },
                    injectValue: function (a, b, c) {
                        var d = A.Hooks.registered[a];
                        if (d) {
                            var e,
                                f = d[0],
                                g = d[1];
                            return (
                                (c = A.Hooks.cleanRootPropertyValue(f, c)),
                                (e = c.toString().match(A.RegEx.valueSplit)),
                                (e[g] = b),
                                e.join(' ')
                            );
                        }
                        return c;
                    }
                },
                Normalizations: {
                    registered: {
                        clip: function (a, b, c) {
                            switch (a) {
                                case 'name':
                                    return 'clip';
                                case 'extract':
                                    var d;
                                    return (
                                        A.RegEx.wrappedValueAlreadyExtracted.test(
                                            c
                                        )
                                            ? (d = c)
                                            : ((d = c
                                                  .toString()
                                                  .match(A.RegEx.valueUnwrap)),
                                              (d = d
                                                  ? d[1].replace(
                                                        /,(\s+)?/g,
                                                        ' '
                                                    )
                                                  : c)),
                                        d
                                    );
                                case 'inject':
                                    return 'rect(' + c + ')';
                            }
                        },
                        blur: function (a, b, c) {
                            switch (a) {
                                case 'name':
                                    return y.State.isFirefox
                                        ? 'filter'
                                        : '-webkit-filter';
                                case 'extract':
                                    var d = parseFloat(c);
                                    if (!d && 0 !== d) {
                                        var e = c
                                            .toString()
                                            .match(/blur\(([0-9]+[A-z]+)\)/i);
                                        d = e ? e[1] : 0;
                                    }
                                    return d;
                                case 'inject':
                                    return parseFloat(c)
                                        ? 'blur(' + c + ')'
                                        : 'none';
                            }
                        },
                        opacity: function (a, b, c) {
                            if (p <= 8)
                                switch (a) {
                                    case 'name':
                                        return 'filter';
                                    case 'extract':
                                        var d = c
                                            .toString()
                                            .match(/alpha\(opacity=(.*)\)/i);
                                        return (c = d ? d[1] / 100 : 1);
                                    case 'inject':
                                        return (
                                            (b.style.zoom = 1),
                                            parseFloat(c) >= 1
                                                ? ''
                                                : 'alpha(opacity=' +
                                                  parseInt(
                                                      100 * parseFloat(c),
                                                      10
                                                  ) +
                                                  ')'
                                        );
                                }
                            else
                                switch (a) {
                                    case 'name':
                                        return 'opacity';
                                    case 'extract':
                                    case 'inject':
                                        return c;
                                }
                        }
                    },
                    register: function () {
                        function a(a, b, c) {
                            if (
                                ('border-box' ===
                                    A.getPropertyValue(b, 'boxSizing')
                                        .toString()
                                        .toLowerCase()) ===
                                (c || !1)
                            ) {
                                var d,
                                    e,
                                    f = 0,
                                    g =
                                        'width' === a
                                            ? ['Left', 'Right']
                                            : ['Top', 'Bottom'],
                                    h = [
                                        'padding' + g[0],
                                        'padding' + g[1],
                                        'border' + g[0] + 'Width',
                                        'border' + g[1] + 'Width'
                                    ];
                                for (d = 0; d < h.length; d++)
                                    (e = parseFloat(
                                        A.getPropertyValue(b, h[d])
                                    )),
                                        isNaN(e) || (f += e);
                                return c ? -f : f;
                            }
                            return 0;
                        }
                        function b(b, c) {
                            return function (d, e, f) {
                                switch (d) {
                                    case 'name':
                                        return b;
                                    case 'extract':
                                        return parseFloat(f) + a(b, e, c);
                                    case 'inject':
                                        return (
                                            parseFloat(f) - a(b, e, c) + 'px'
                                        );
                                }
                            };
                        }
                        (p && !(p > 9)) ||
                            y.State.isGingerbread ||
                            (A.Lists.transformsBase = A.Lists.transformsBase.concat(
                                A.Lists.transforms3D
                            ));
                        for (var c = 0; c < A.Lists.transformsBase.length; c++)
                            !(function () {
                                var a = A.Lists.transformsBase[c];
                                A.Normalizations.registered[a] = function (
                                    b,
                                    c,
                                    e
                                ) {
                                    switch (b) {
                                        case 'name':
                                            return 'transform';
                                        case 'extract':
                                            return g(c) === d ||
                                                g(c).transformCache[a] === d
                                                ? /^scale/i.test(a)
                                                    ? 1
                                                    : 0
                                                : g(c).transformCache[
                                                      a
                                                  ].replace(/[()]/g, '');
                                        case 'inject':
                                            var f = !1;
                                            switch (a.substr(0, a.length - 1)) {
                                                case 'translate':
                                                    f = !/(%|px|em|rem|vw|vh|\d)$/i.test(
                                                        e
                                                    );
                                                    break;
                                                case 'scal':
                                                case 'scale':
                                                    y.State.isAndroid &&
                                                        g(c).transformCache[
                                                            a
                                                        ] === d &&
                                                        e < 1 &&
                                                        (e = 1),
                                                        (f = !/(\d)$/i.test(e));
                                                    break;
                                                case 'skew':
                                                case 'rotate':
                                                    f = !/(deg|\d)$/i.test(e);
                                            }
                                            return (
                                                f ||
                                                    (g(c).transformCache[a] =
                                                        '(' + e + ')'),
                                                g(c).transformCache[a]
                                            );
                                    }
                                };
                            })();
                        for (var e = 0; e < A.Lists.colors.length; e++)
                            !(function () {
                                var a = A.Lists.colors[e];
                                A.Normalizations.registered[a] = function (
                                    b,
                                    c,
                                    e
                                ) {
                                    switch (b) {
                                        case 'name':
                                            return a;
                                        case 'extract':
                                            var f;
                                            if (
                                                A.RegEx.wrappedValueAlreadyExtracted.test(
                                                    e
                                                )
                                            )
                                                f = e;
                                            else {
                                                var g,
                                                    h = {
                                                        black: 'rgb(0, 0, 0)',
                                                        blue: 'rgb(0, 0, 255)',
                                                        gray:
                                                            'rgb(128, 128, 128)',
                                                        green: 'rgb(0, 128, 0)',
                                                        red: 'rgb(255, 0, 0)',
                                                        white:
                                                            'rgb(255, 255, 255)'
                                                    };
                                                /^[A-z]+$/i.test(e)
                                                    ? (g =
                                                          h[e] !== d
                                                              ? h[e]
                                                              : h.black)
                                                    : A.RegEx.isHex.test(e)
                                                    ? (g =
                                                          'rgb(' +
                                                          A.Values.hexToRgb(
                                                              e
                                                          ).join(' ') +
                                                          ')')
                                                    : /^rgba?\(/i.test(e) ||
                                                      (g = h.black),
                                                    (f = (g || e)
                                                        .toString()
                                                        .match(
                                                            A.RegEx.valueUnwrap
                                                        )[1]
                                                        .replace(
                                                            /,(\s+)?/g,
                                                            ' '
                                                        ));
                                            }
                                            return (
                                                (!p || p > 8) &&
                                                    3 === f.split(' ').length &&
                                                    (f += ' 1'),
                                                f
                                            );
                                        case 'inject':
                                            return /^rgb/.test(e)
                                                ? e
                                                : (p <= 8
                                                      ? 4 ===
                                                            e.split(' ')
                                                                .length &&
                                                        (e = e
                                                            .split(/\s+/)
                                                            .slice(0, 3)
                                                            .join(' '))
                                                      : 3 ===
                                                            e.split(' ')
                                                                .length &&
                                                        (e += ' 1'),
                                                  (p <= 8 ? 'rgb' : 'rgba') +
                                                      '(' +
                                                      e
                                                          .replace(/\s+/g, ',')
                                                          .replace(
                                                              /\.(\d)+(?=,)/g,
                                                              ''
                                                          ) +
                                                      ')');
                                    }
                                };
                            })();
                        (A.Normalizations.registered.innerWidth = b(
                            'width',
                            !0
                        )),
                            (A.Normalizations.registered.innerHeight = b(
                                'height',
                                !0
                            )),
                            (A.Normalizations.registered.outerWidth = b(
                                'width'
                            )),
                            (A.Normalizations.registered.outerHeight = b(
                                'height'
                            ));
                    }
                },
                Names: {
                    camelCase: function (a) {
                        return a.replace(/-(\w)/g, function (a, b) {
                            return b.toUpperCase();
                        });
                    },
                    SVGAttribute: function (a) {
                        var b = 'width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2';
                        return (
                            (p || (y.State.isAndroid && !y.State.isChrome)) &&
                                (b += '|transform'),
                            new RegExp('^(' + b + ')$', 'i').test(a)
                        );
                    },
                    prefixCheck: function (a) {
                        if (y.State.prefixMatches[a])
                            return [y.State.prefixMatches[a], !0];
                        for (
                            var b = ['', 'Webkit', 'Moz', 'ms', 'O'],
                                c = 0,
                                d = b.length;
                            c < d;
                            c++
                        ) {
                            var e;
                            if (
                                ((e =
                                    0 === c
                                        ? a
                                        : b[c] +
                                          a.replace(/^\w/, function (a) {
                                              return a.toUpperCase();
                                          })),
                                u.isString(y.State.prefixElement.style[e]))
                            )
                                return (y.State.prefixMatches[a] = e), [e, !0];
                        }
                        return [a, !1];
                    }
                },
                Values: {
                    hexToRgb: function (a) {
                        var b,
                            c = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                            d = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                        return (
                            (a = a.replace(c, function (a, b, c, d) {
                                return b + b + c + c + d + d;
                            })),
                            (b = d.exec(a)),
                            b
                                ? [
                                      parseInt(b[1], 16),
                                      parseInt(b[2], 16),
                                      parseInt(b[3], 16)
                                  ]
                                : [0, 0, 0]
                        );
                    },
                    isCSSNullValue: function (a) {
                        return (
                            !a ||
                            /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(
                                a
                            )
                        );
                    },
                    getUnitType: function (a) {
                        return /^(rotate|skew)/i.test(a)
                            ? 'deg'
                            : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(
                                  a
                              )
                            ? ''
                            : 'px';
                    },
                    getDisplayType: function (a) {
                        var b = a && a.tagName.toString().toLowerCase();
                        return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(
                            b
                        )
                            ? 'inline'
                            : /^(li)$/i.test(b)
                            ? 'list-item'
                            : /^(tr)$/i.test(b)
                            ? 'table-row'
                            : /^(table)$/i.test(b)
                            ? 'table'
                            : /^(tbody)$/i.test(b)
                            ? 'table-row-group'
                            : 'block';
                    },
                    addClass: function (a, b) {
                        if (a)
                            if (a.classList) a.classList.add(b);
                            else if (u.isString(a.className))
                                a.className +=
                                    (a.className.length ? ' ' : '') + b;
                            else {
                                var c =
                                    a.getAttribute(
                                        p <= 7 ? 'className' : 'class'
                                    ) || '';
                                a.setAttribute('class', c + (c ? ' ' : '') + b);
                            }
                    },
                    removeClass: function (a, b) {
                        if (a)
                            if (a.classList) a.classList.remove(b);
                            else if (u.isString(a.className))
                                a.className = a.className
                                    .toString()
                                    .replace(
                                        new RegExp(
                                            '(^|\\s)' +
                                                b.split(' ').join('|') +
                                                '(\\s|$)',
                                            'gi'
                                        ),
                                        ' '
                                    );
                            else {
                                var c =
                                    a.getAttribute(
                                        p <= 7 ? 'className' : 'class'
                                    ) || '';
                                a.setAttribute(
                                    'class',
                                    c.replace(
                                        new RegExp(
                                            '(^|s)' +
                                                b.split(' ').join('|') +
                                                '(s|$)',
                                            'gi'
                                        ),
                                        ' '
                                    )
                                );
                            }
                    }
                },
                getPropertyValue: function (a, c, e, f) {
                    function h(a, c) {
                        var e = 0;
                        if (p <= 8) e = o.css(a, c);
                        else {
                            var i = !1;
                            /^(width|height)$/.test(c) &&
                                0 === A.getPropertyValue(a, 'display') &&
                                ((i = !0),
                                A.setPropertyValue(
                                    a,
                                    'display',
                                    A.Values.getDisplayType(a)
                                ));
                            var j = function () {
                                i && A.setPropertyValue(a, 'display', 'none');
                            };
                            if (!f) {
                                if (
                                    'height' === c &&
                                    'border-box' !==
                                        A.getPropertyValue(a, 'boxSizing')
                                            .toString()
                                            .toLowerCase()
                                ) {
                                    var k =
                                        a.offsetHeight -
                                        (parseFloat(
                                            A.getPropertyValue(
                                                a,
                                                'borderTopWidth'
                                            )
                                        ) || 0) -
                                        (parseFloat(
                                            A.getPropertyValue(
                                                a,
                                                'borderBottomWidth'
                                            )
                                        ) || 0) -
                                        (parseFloat(
                                            A.getPropertyValue(a, 'paddingTop')
                                        ) || 0) -
                                        (parseFloat(
                                            A.getPropertyValue(
                                                a,
                                                'paddingBottom'
                                            )
                                        ) || 0);
                                    return j(), k;
                                }
                                if (
                                    'width' === c &&
                                    'border-box' !==
                                        A.getPropertyValue(a, 'boxSizing')
                                            .toString()
                                            .toLowerCase()
                                ) {
                                    var l =
                                        a.offsetWidth -
                                        (parseFloat(
                                            A.getPropertyValue(
                                                a,
                                                'borderLeftWidth'
                                            )
                                        ) || 0) -
                                        (parseFloat(
                                            A.getPropertyValue(
                                                a,
                                                'borderRightWidth'
                                            )
                                        ) || 0) -
                                        (parseFloat(
                                            A.getPropertyValue(a, 'paddingLeft')
                                        ) || 0) -
                                        (parseFloat(
                                            A.getPropertyValue(
                                                a,
                                                'paddingRight'
                                            )
                                        ) || 0);
                                    return j(), l;
                                }
                            }
                            var m;
                            (m =
                                g(a) === d
                                    ? b.getComputedStyle(a, null)
                                    : g(a).computedStyle
                                    ? g(a).computedStyle
                                    : (g(a).computedStyle = b.getComputedStyle(
                                          a,
                                          null
                                      ))),
                                'borderColor' === c && (c = 'borderTopColor'),
                                (e =
                                    9 === p && 'filter' === c
                                        ? m.getPropertyValue(c)
                                        : m[c]),
                                ('' !== e && null !== e) || (e = a.style[c]),
                                j();
                        }
                        if (
                            'auto' === e &&
                            /^(top|right|bottom|left)$/i.test(c)
                        ) {
                            var n = h(a, 'position');
                            ('fixed' === n ||
                                ('absolute' === n && /top|left/i.test(c))) &&
                                (e = o(a).position()[c] + 'px');
                        }
                        return e;
                    }
                    var i;
                    if (A.Hooks.registered[c]) {
                        var j = c,
                            k = A.Hooks.getRoot(j);
                        e === d &&
                            (e = A.getPropertyValue(
                                a,
                                A.Names.prefixCheck(k)[0]
                            )),
                            A.Normalizations.registered[k] &&
                                (e = A.Normalizations.registered[k](
                                    'extract',
                                    a,
                                    e
                                )),
                            (i = A.Hooks.extractValue(j, e));
                    } else if (A.Normalizations.registered[c]) {
                        var l, m;
                        (l = A.Normalizations.registered[c]('name', a)),
                            'transform' !== l &&
                                ((m = h(a, A.Names.prefixCheck(l)[0])),
                                A.Values.isCSSNullValue(m) &&
                                    A.Hooks.templates[c] &&
                                    (m = A.Hooks.templates[c][1])),
                            (i = A.Normalizations.registered[c](
                                'extract',
                                a,
                                m
                            ));
                    }
                    if (!/^[\d-]/.test(i)) {
                        var n = g(a);
                        if (n && n.isSVG && A.Names.SVGAttribute(c))
                            if (/^(height|width)$/i.test(c))
                                try {
                                    i = a.getBBox()[c];
                                } catch (q) {
                                    i = 0;
                                }
                            else i = a.getAttribute(c);
                        else i = h(a, A.Names.prefixCheck(c)[0]);
                    }
                    return (
                        A.Values.isCSSNullValue(i) && (i = 0),
                        y.debug >= 2 && console.log('Get ' + c + ': ' + i),
                        i
                    );
                },
                setPropertyValue: function (a, c, d, e, f) {
                    var h = c;
                    if ('scroll' === c)
                        f.container
                            ? (f.container['scroll' + f.direction] = d)
                            : 'Left' === f.direction
                            ? b.scrollTo(d, f.alternateValue)
                            : b.scrollTo(f.alternateValue, d);
                    else if (
                        A.Normalizations.registered[c] &&
                        'transform' ===
                            A.Normalizations.registered[c]('name', a)
                    )
                        A.Normalizations.registered[c]('inject', a, d),
                            (h = 'transform'),
                            (d = g(a).transformCache[c]);
                    else {
                        if (A.Hooks.registered[c]) {
                            var i = c,
                                j = A.Hooks.getRoot(c);
                            (e = e || A.getPropertyValue(a, j)),
                                (d = A.Hooks.injectValue(i, d, e)),
                                (c = j);
                        }
                        if (
                            (A.Normalizations.registered[c] &&
                                ((d = A.Normalizations.registered[c](
                                    'inject',
                                    a,
                                    d
                                )),
                                (c = A.Normalizations.registered[c](
                                    'name',
                                    a
                                ))),
                            (h = A.Names.prefixCheck(c)[0]),
                            p <= 8)
                        )
                            try {
                                a.style[h] = d;
                            } catch (l) {
                                y.debug &&
                                    console.log(
                                        'Browser does not support [' +
                                            d +
                                            '] for [' +
                                            h +
                                            ']'
                                    );
                            }
                        else {
                            var k = g(a);
                            k && k.isSVG && A.Names.SVGAttribute(c)
                                ? a.setAttribute(c, d)
                                : (a.style[h] = d);
                        }
                        y.debug >= 2 &&
                            console.log('Set ' + c + ' (' + h + '): ' + d);
                    }
                    return [h, d];
                },
                flushTransformCache: function (a) {
                    var b = '',
                        c = g(a);
                    if (
                        (p || (y.State.isAndroid && !y.State.isChrome)) &&
                        c &&
                        c.isSVG
                    ) {
                        var d = function (b) {
                                return parseFloat(A.getPropertyValue(a, b));
                            },
                            e = {
                                translate: [d('translateX'), d('translateY')],
                                skewX: [d('skewX')],
                                skewY: [d('skewY')],
                                scale:
                                    1 !== d('scale')
                                        ? [d('scale'), d('scale')]
                                        : [d('scaleX'), d('scaleY')],
                                rotate: [d('rotateZ'), 0, 0]
                            };
                        o.each(g(a).transformCache, function (a) {
                            /^translate/i.test(a)
                                ? (a = 'translate')
                                : /^scale/i.test(a)
                                ? (a = 'scale')
                                : /^rotate/i.test(a) && (a = 'rotate'),
                                e[a] &&
                                    ((b += a + '(' + e[a].join(' ') + ') '),
                                    delete e[a]);
                        });
                    } else {
                        var f, h;
                        o.each(g(a).transformCache, function (c) {
                            if (
                                ((f = g(a).transformCache[c]),
                                'transformPerspective' === c)
                            )
                                return (h = f), !0;
                            9 === p && 'rotateZ' === c && (c = 'rotate'),
                                (b += c + f + ' ');
                        }),
                            h && (b = 'perspective' + h + ' ' + b);
                    }
                    A.setPropertyValue(a, 'transform', b);
                }
            });
            A.Hooks.register(),
                A.Normalizations.register(),
                (y.hook = function (a, b, c) {
                    var e;
                    return (
                        (a = f(a)),
                        o.each(a, function (a, f) {
                            if ((g(f) === d && y.init(f), c === d))
                                e === d && (e = A.getPropertyValue(f, b));
                            else {
                                var h = A.setPropertyValue(f, b, c);
                                'transform' === h[0] &&
                                    y.CSS.flushTransformCache(f),
                                    (e = h);
                            }
                        }),
                        e
                    );
                });
            var B = function () {
                function a() {
                    return k ? z.promise || null : p;
                }
                function e(a, e) {
                    function f(f) {
                        var k, n;
                        if (i.begin && 0 === D)
                            try {
                                i.begin.call(r, r);
                            } catch (V) {
                                setTimeout(function () {
                                    throw V;
                                }, 1);
                            }
                        if ('scroll' === G) {
                            var p,
                                q,
                                w,
                                x = /^x$/i.test(i.axis) ? 'Left' : 'Top',
                                B = parseFloat(i.offset) || 0;
                            i.container
                                ? u.isWrapped(i.container) ||
                                  u.isNode(i.container)
                                    ? ((i.container =
                                          i.container[0] || i.container),
                                      (p = i.container['scroll' + x]),
                                      (w =
                                          p +
                                          o(a).position()[x.toLowerCase()] +
                                          B))
                                    : (i.container = null)
                                : ((p =
                                      y.State.scrollAnchor[
                                          y.State['scrollProperty' + x]
                                      ]),
                                  (q =
                                      y.State.scrollAnchor[
                                          y.State[
                                              'scrollProperty' +
                                                  ('Left' === x
                                                      ? 'Top'
                                                      : 'Left')
                                          ]
                                      ]),
                                  (w = o(a).offset()[x.toLowerCase()] + B)),
                                (j = {
                                    scroll: {
                                        rootPropertyValue: !1,
                                        startValue: p,
                                        currentValue: p,
                                        endValue: w,
                                        unitType: '',
                                        easing: i.easing,
                                        scrollData: {
                                            container: i.container,
                                            direction: x,
                                            alternateValue: q
                                        }
                                    },
                                    element: a
                                }),
                                y.debug &&
                                    console.log(
                                        'tweensContainer (scroll): ',
                                        j.scroll,
                                        a
                                    );
                        } else if ('reverse' === G) {
                            if (!(k = g(a))) return;
                            if (!k.tweensContainer)
                                return void o.dequeue(a, i.queue);
                            'none' === k.opts.display &&
                                (k.opts.display = 'auto'),
                                'hidden' === k.opts.visibility &&
                                    (k.opts.visibility = 'visible'),
                                (k.opts.loop = !1),
                                (k.opts.begin = null),
                                (k.opts.complete = null),
                                v.easing || delete i.easing,
                                v.duration || delete i.duration,
                                (i = o.extend({}, k.opts, i)),
                                (n = o.extend(
                                    !0,
                                    {},
                                    k ? k.tweensContainer : null
                                ));
                            for (var E in n)
                                if (n.hasOwnProperty(E) && 'element' !== E) {
                                    var F = n[E].startValue;
                                    (n[E].startValue = n[E].currentValue =
                                        n[E].endValue),
                                        (n[E].endValue = F),
                                        u.isEmptyObject(v) ||
                                            (n[E].easing = i.easing),
                                        y.debug &&
                                            console.log(
                                                'reverse tweensContainer (' +
                                                    E +
                                                    '): ' +
                                                    JSON.stringify(n[E]),
                                                a
                                            );
                                }
                            j = n;
                        } else if ('start' === G) {
                            (k = g(a)),
                                k &&
                                    k.tweensContainer &&
                                    !0 === k.isAnimating &&
                                    (n = k.tweensContainer);
                            var H = function (e, f) {
                                var g,
                                    l = A.Hooks.getRoot(e),
                                    m = !1,
                                    p = f[0],
                                    q = f[1],
                                    r = f[2];
                                if (
                                    !(
                                        (k && k.isSVG) ||
                                        'tween' === l ||
                                        !1 !== A.Names.prefixCheck(l)[1] ||
                                        A.Normalizations.registered[l] !== d
                                    )
                                )
                                    return void (
                                        y.debug &&
                                        console.log(
                                            'Skipping [' +
                                                l +
                                                '] due to a lack of browser support.'
                                        )
                                    );
                                ((i.display !== d &&
                                    null !== i.display &&
                                    'none' !== i.display) ||
                                    (i.visibility !== d &&
                                        'hidden' !== i.visibility)) &&
                                    /opacity|filter/.test(e) &&
                                    !r &&
                                    0 !== p &&
                                    (r = 0),
                                    i._cacheValues && n && n[e]
                                        ? (r === d &&
                                              (r =
                                                  n[e].endValue +
                                                  n[e].unitType),
                                          (m = k.rootPropertyValueCache[l]))
                                        : A.Hooks.registered[e]
                                        ? r === d
                                            ? ((m = A.getPropertyValue(a, l)),
                                              (r = A.getPropertyValue(a, e, m)))
                                            : (m = A.Hooks.templates[l][1])
                                        : r === d &&
                                          (r = A.getPropertyValue(a, e));
                                var s,
                                    t,
                                    v,
                                    w = !1,
                                    x = function (a, b) {
                                        var c, d;
                                        return (
                                            (d = (b || '0')
                                                .toString()
                                                .toLowerCase()
                                                .replace(/[%A-z]+$/, function (
                                                    a
                                                ) {
                                                    return (c = a), '';
                                                })),
                                            c || (c = A.Values.getUnitType(a)),
                                            [d, c]
                                        );
                                    };
                                if (r !== p && u.isString(r) && u.isString(p)) {
                                    g = '';
                                    var z = 0,
                                        B = 0,
                                        C = [],
                                        D = [],
                                        E = 0,
                                        F = 0,
                                        G = 0;
                                    for (
                                        r = A.Hooks.fixColors(r),
                                            p = A.Hooks.fixColors(p);
                                        z < r.length && B < p.length;

                                    ) {
                                        var H = r[z],
                                            I = p[B];
                                        if (
                                            /[\d\.-]/.test(H) &&
                                            /[\d\.-]/.test(I)
                                        ) {
                                            for (
                                                var J = H,
                                                    K = I,
                                                    L = '.',
                                                    N = '.';
                                                ++z < r.length;

                                            ) {
                                                if ((H = r[z]) === L) L = '..';
                                                else if (!/\d/.test(H)) break;
                                                J += H;
                                            }
                                            for (; ++B < p.length; ) {
                                                if ((I = p[B]) === N) N = '..';
                                                else if (!/\d/.test(I)) break;
                                                K += I;
                                            }
                                            var O = A.Hooks.getUnit(r, z),
                                                P = A.Hooks.getUnit(p, B);
                                            if (
                                                ((z += O.length),
                                                (B += P.length),
                                                O === P)
                                            )
                                                J === K
                                                    ? (g += J + O)
                                                    : ((g +=
                                                          '{' +
                                                          C.length +
                                                          (F ? '!' : '') +
                                                          '}' +
                                                          O),
                                                      C.push(parseFloat(J)),
                                                      D.push(parseFloat(K)));
                                            else {
                                                var Q = parseFloat(J),
                                                    R = parseFloat(K);
                                                (g +=
                                                    (E < 5 ? 'calc' : '') +
                                                    '(' +
                                                    (Q
                                                        ? '{' +
                                                          C.length +
                                                          (F ? '!' : '') +
                                                          '}'
                                                        : '0') +
                                                    O +
                                                    ' + ' +
                                                    (R
                                                        ? '{' +
                                                          (C.length +
                                                              (Q ? 1 : 0)) +
                                                          (F ? '!' : '') +
                                                          '}'
                                                        : '0') +
                                                    P +
                                                    ')'),
                                                    Q && (C.push(Q), D.push(0)),
                                                    R && (C.push(0), D.push(R));
                                            }
                                        } else {
                                            if (H !== I) {
                                                E = 0;
                                                break;
                                            }
                                            (g += H),
                                                z++,
                                                B++,
                                                (0 === E && 'c' === H) ||
                                                (1 === E && 'a' === H) ||
                                                (2 === E && 'l' === H) ||
                                                (3 === E && 'c' === H) ||
                                                (E >= 4 && '(' === H)
                                                    ? E++
                                                    : ((E && E < 5) ||
                                                          (E >= 4 &&
                                                              ')' === H &&
                                                              --E < 5)) &&
                                                      (E = 0),
                                                (0 === F && 'r' === H) ||
                                                (1 === F && 'g' === H) ||
                                                (2 === F && 'b' === H) ||
                                                (3 === F && 'a' === H) ||
                                                (F >= 3 && '(' === H)
                                                    ? (3 === F &&
                                                          'a' === H &&
                                                          (G = 1),
                                                      F++)
                                                    : G && ',' === H
                                                    ? ++G > 3 && (F = G = 0)
                                                    : ((G && F < (G ? 5 : 4)) ||
                                                          (F >= (G ? 4 : 3) &&
                                                              ')' === H &&
                                                              --F <
                                                                  (G
                                                                      ? 5
                                                                      : 4))) &&
                                                      (F = G = 0);
                                        }
                                    }
                                    (z === r.length && B === p.length) ||
                                        (y.debug &&
                                            console.error(
                                                'Trying to pattern match mis-matched strings ["' +
                                                    p +
                                                    '", "' +
                                                    r +
                                                    '"]'
                                            ),
                                        (g = d)),
                                        g &&
                                            (C.length
                                                ? (y.debug &&
                                                      console.log(
                                                          'Pattern found "' +
                                                              g +
                                                              '" -> ',
                                                          C,
                                                          D,
                                                          '[' +
                                                              r +
                                                              ',' +
                                                              p +
                                                              ']'
                                                      ),
                                                  (r = C),
                                                  (p = D),
                                                  (t = v = ''))
                                                : (g = d));
                                }
                                g ||
                                    ((s = x(e, r)),
                                    (r = s[0]),
                                    (v = s[1]),
                                    (s = x(e, p)),
                                    (p = s[0].replace(/^([+-\/*])=/, function (
                                        a,
                                        b
                                    ) {
                                        return (w = b), '';
                                    })),
                                    (t = s[1]),
                                    (r = parseFloat(r) || 0),
                                    (p = parseFloat(p) || 0),
                                    '%' === t &&
                                        (/^(fontSize|lineHeight)$/.test(e)
                                            ? ((p /= 100), (t = 'em'))
                                            : /^scale/.test(e)
                                            ? ((p /= 100), (t = ''))
                                            : /(Red|Green|Blue)$/i.test(e) &&
                                              ((p = (p / 100) * 255),
                                              (t = ''))));
                                if (/[\/*]/.test(w)) t = v;
                                else if (v !== t && 0 !== r)
                                    if (0 === p) t = v;
                                    else {
                                        h =
                                            h ||
                                            (function () {
                                                var d = {
                                                        myParent:
                                                            a.parentNode ||
                                                            c.body,
                                                        position: A.getPropertyValue(
                                                            a,
                                                            'position'
                                                        ),
                                                        fontSize: A.getPropertyValue(
                                                            a,
                                                            'fontSize'
                                                        )
                                                    },
                                                    e =
                                                        d.position ===
                                                            M.lastPosition &&
                                                        d.myParent ===
                                                            M.lastParent,
                                                    f =
                                                        d.fontSize ===
                                                        M.lastFontSize;
                                                (M.lastParent = d.myParent),
                                                    (M.lastPosition =
                                                        d.position),
                                                    (M.lastFontSize =
                                                        d.fontSize);
                                                var g = {};
                                                if (f && e)
                                                    (g.emToPx = M.lastEmToPx),
                                                        (g.percentToPxWidth =
                                                            M.lastPercentToPxWidth),
                                                        (g.percentToPxHeight =
                                                            M.lastPercentToPxHeight);
                                                else {
                                                    var h =
                                                        k && k.isSVG
                                                            ? c.createElementNS(
                                                                  'http://www.w3.org/2000/svg',
                                                                  'rect'
                                                              )
                                                            : c.createElement(
                                                                  'div'
                                                              );
                                                    y.init(h),
                                                        d.myParent.appendChild(
                                                            h
                                                        ),
                                                        o.each(
                                                            [
                                                                'overflow',
                                                                'overflowX',
                                                                'overflowY'
                                                            ],
                                                            function (a, b) {
                                                                y.CSS.setPropertyValue(
                                                                    h,
                                                                    b,
                                                                    'hidden'
                                                                );
                                                            }
                                                        ),
                                                        y.CSS.setPropertyValue(
                                                            h,
                                                            'position',
                                                            d.position
                                                        ),
                                                        y.CSS.setPropertyValue(
                                                            h,
                                                            'fontSize',
                                                            d.fontSize
                                                        ),
                                                        y.CSS.setPropertyValue(
                                                            h,
                                                            'boxSizing',
                                                            'content-box'
                                                        ),
                                                        o.each(
                                                            [
                                                                'minWidth',
                                                                'maxWidth',
                                                                'width',
                                                                'minHeight',
                                                                'maxHeight',
                                                                'height'
                                                            ],
                                                            function (a, b) {
                                                                y.CSS.setPropertyValue(
                                                                    h,
                                                                    b,
                                                                    '100%'
                                                                );
                                                            }
                                                        ),
                                                        y.CSS.setPropertyValue(
                                                            h,
                                                            'paddingLeft',
                                                            '100em'
                                                        ),
                                                        (g.percentToPxWidth = M.lastPercentToPxWidth =
                                                            (parseFloat(
                                                                A.getPropertyValue(
                                                                    h,
                                                                    'width',
                                                                    null,
                                                                    !0
                                                                )
                                                            ) || 1) / 100),
                                                        (g.percentToPxHeight = M.lastPercentToPxHeight =
                                                            (parseFloat(
                                                                A.getPropertyValue(
                                                                    h,
                                                                    'height',
                                                                    null,
                                                                    !0
                                                                )
                                                            ) || 1) / 100),
                                                        (g.emToPx = M.lastEmToPx =
                                                            (parseFloat(
                                                                A.getPropertyValue(
                                                                    h,
                                                                    'paddingLeft'
                                                                )
                                                            ) || 1) / 100),
                                                        d.myParent.removeChild(
                                                            h
                                                        );
                                                }
                                                return (
                                                    null === M.remToPx &&
                                                        (M.remToPx =
                                                            parseFloat(
                                                                A.getPropertyValue(
                                                                    c.body,
                                                                    'fontSize'
                                                                )
                                                            ) || 16),
                                                    null === M.vwToPx &&
                                                        ((M.vwToPx =
                                                            parseFloat(
                                                                b.innerWidth
                                                            ) / 100),
                                                        (M.vhToPx =
                                                            parseFloat(
                                                                b.innerHeight
                                                            ) / 100)),
                                                    (g.remToPx = M.remToPx),
                                                    (g.vwToPx = M.vwToPx),
                                                    (g.vhToPx = M.vhToPx),
                                                    y.debug >= 1 &&
                                                        console.log(
                                                            'Unit ratios: ' +
                                                                JSON.stringify(
                                                                    g
                                                                ),
                                                            a
                                                        ),
                                                    g
                                                );
                                            })();
                                        var S =
                                            /margin|padding|left|right|width|text|word|letter/i.test(
                                                e
                                            ) ||
                                            /X$/.test(e) ||
                                            'x' === e
                                                ? 'x'
                                                : 'y';
                                        switch (v) {
                                            case '%':
                                                r *=
                                                    'x' === S
                                                        ? h.percentToPxWidth
                                                        : h.percentToPxHeight;
                                                break;
                                            case 'px':
                                                break;
                                            default:
                                                r *= h[v + 'ToPx'];
                                        }
                                        switch (t) {
                                            case '%':
                                                r *=
                                                    1 /
                                                    ('x' === S
                                                        ? h.percentToPxWidth
                                                        : h.percentToPxHeight);
                                                break;
                                            case 'px':
                                                break;
                                            default:
                                                r *= 1 / h[t + 'ToPx'];
                                        }
                                    }
                                switch (w) {
                                    case '+':
                                        p = r + p;
                                        break;
                                    case '-':
                                        p = r - p;
                                        break;
                                    case '*':
                                        p *= r;
                                        break;
                                    case '/':
                                        p = r / p;
                                }
                                (j[e] = {
                                    rootPropertyValue: m,
                                    startValue: r,
                                    currentValue: r,
                                    endValue: p,
                                    unitType: t,
                                    easing: q
                                }),
                                    g && (j[e].pattern = g),
                                    y.debug &&
                                        console.log(
                                            'tweensContainer (' +
                                                e +
                                                '): ' +
                                                JSON.stringify(j[e]),
                                            a
                                        );
                            };
                            for (var I in s)
                                if (s.hasOwnProperty(I)) {
                                    var J = A.Names.camelCase(I),
                                        K = (function (b, c) {
                                            var d, f, g;
                                            return (
                                                u.isFunction(b) &&
                                                    (b = b.call(a, e, C)),
                                                u.isArray(b)
                                                    ? ((d = b[0]),
                                                      (!u.isArray(b[1]) &&
                                                          /^[\d-]/.test(
                                                              b[1]
                                                          )) ||
                                                      u.isFunction(b[1]) ||
                                                      A.RegEx.isHex.test(b[1])
                                                          ? (g = b[1])
                                                          : (u.isString(b[1]) &&
                                                                !A.RegEx.isHex.test(
                                                                    b[1]
                                                                ) &&
                                                                y.Easings[
                                                                    b[1]
                                                                ]) ||
                                                            u.isArray(b[1])
                                                          ? ((f = c
                                                                ? b[1]
                                                                : l(
                                                                      b[1],
                                                                      i.duration
                                                                  )),
                                                            (g = b[2]))
                                                          : (g = b[1] || b[2]))
                                                    : (d = b),
                                                c || (f = f || i.easing),
                                                u.isFunction(d) &&
                                                    (d = d.call(a, e, C)),
                                                u.isFunction(g) &&
                                                    (g = g.call(a, e, C)),
                                                [d || 0, f, g]
                                            );
                                        })(s[I]);
                                    if (t(A.Lists.colors, J)) {
                                        var L = K[0],
                                            O = K[1],
                                            P = K[2];
                                        if (A.RegEx.isHex.test(L)) {
                                            for (
                                                var Q = [
                                                        'Red',
                                                        'Green',
                                                        'Blue'
                                                    ],
                                                    R = A.Values.hexToRgb(L),
                                                    S = P
                                                        ? A.Values.hexToRgb(P)
                                                        : d,
                                                    T = 0;
                                                T < Q.length;
                                                T++
                                            ) {
                                                var U = [R[T]];
                                                O && U.push(O),
                                                    S !== d && U.push(S[T]),
                                                    H(J + Q[T], U);
                                            }
                                            continue;
                                        }
                                    }
                                    H(J, K);
                                }
                            j.element = a;
                        }
                        j.element &&
                            (A.Values.addClass(a, 'velocity-animating'),
                            N.push(j),
                            (k = g(a)),
                            k &&
                                ('' === i.queue &&
                                    ((k.tweensContainer = j), (k.opts = i)),
                                (k.isAnimating = !0)),
                            D === C - 1
                                ? (y.State.calls.push([
                                      N,
                                      r,
                                      i,
                                      null,
                                      z.resolver,
                                      null,
                                      0
                                  ]),
                                  !1 === y.State.isTicking &&
                                      ((y.State.isTicking = !0), m()))
                                : D++);
                    }
                    var h,
                        i = o.extend({}, y.defaults, v),
                        j = {};
                    switch (
                        (g(a) === d && y.init(a),
                        parseFloat(i.delay) &&
                            !1 !== i.queue &&
                            o.queue(a, i.queue, function (b, c) {
                                if (!0 === c) return !0;
                                y.velocityQueueEntryFlag = !0;
                                var d = y.State.delayedElements.count++;
                                y.State.delayedElements[d] = a;
                                var e = (function (a) {
                                    return function () {
                                        (y.State.delayedElements[a] = !1), b();
                                    };
                                })(d);
                                (g(a).delayBegin = new Date().getTime()),
                                    (g(a).delay = parseFloat(i.delay)),
                                    (g(a).delayTimer = {
                                        setTimeout: setTimeout(
                                            b,
                                            parseFloat(i.delay)
                                        ),
                                        next: e
                                    });
                            }),
                        i.duration.toString().toLowerCase())
                    ) {
                        case 'fast':
                            i.duration = 200;
                            break;
                        case 'normal':
                            i.duration = w;
                            break;
                        case 'slow':
                            i.duration = 600;
                            break;
                        default:
                            i.duration = parseFloat(i.duration) || 1;
                    }
                    if (
                        (!1 !== y.mock &&
                            (!0 === y.mock
                                ? (i.duration = i.delay = 1)
                                : ((i.duration *= parseFloat(y.mock) || 1),
                                  (i.delay *= parseFloat(y.mock) || 1))),
                        (i.easing = l(i.easing, i.duration)),
                        i.begin && !u.isFunction(i.begin) && (i.begin = null),
                        i.progress &&
                            !u.isFunction(i.progress) &&
                            (i.progress = null),
                        i.complete &&
                            !u.isFunction(i.complete) &&
                            (i.complete = null),
                        i.display !== d &&
                            null !== i.display &&
                            ((i.display = i.display.toString().toLowerCase()),
                            'auto' === i.display &&
                                (i.display = y.CSS.Values.getDisplayType(a))),
                        i.visibility !== d &&
                            null !== i.visibility &&
                            (i.visibility = i.visibility
                                .toString()
                                .toLowerCase()),
                        (i.mobileHA =
                            i.mobileHA &&
                            y.State.isMobile &&
                            !y.State.isGingerbread),
                        !1 === i.queue)
                    )
                        if (i.delay) {
                            var k = y.State.delayedElements.count++;
                            y.State.delayedElements[k] = a;
                            var n = (function (a) {
                                return function () {
                                    (y.State.delayedElements[a] = !1), f();
                                };
                            })(k);
                            (g(a).delayBegin = new Date().getTime()),
                                (g(a).delay = parseFloat(i.delay)),
                                (g(a).delayTimer = {
                                    setTimeout: setTimeout(
                                        f,
                                        parseFloat(i.delay)
                                    ),
                                    next: n
                                });
                        } else f();
                    else
                        o.queue(a, i.queue, function (a, b) {
                            if (!0 === b) return z.promise && z.resolver(r), !0;
                            (y.velocityQueueEntryFlag = !0), f(a);
                        });
                    ('' !== i.queue && 'fx' !== i.queue) ||
                        'inprogress' === o.queue(a)[0] ||
                        o.dequeue(a);
                }
                var j,
                    k,
                    p,
                    q,
                    r,
                    s,
                    v,
                    x =
                        arguments[0] &&
                        (arguments[0].p ||
                            (o.isPlainObject(arguments[0].properties) &&
                                !arguments[0].properties.names) ||
                            u.isString(arguments[0].properties));
                u.isWrapped(this)
                    ? ((k = !1), (q = 0), (r = this), (p = this))
                    : ((k = !0),
                      (q = 1),
                      (r = x
                          ? arguments[0].elements || arguments[0].e
                          : arguments[0]));
                var z = { promise: null, resolver: null, rejecter: null };
                if (
                    (k &&
                        y.Promise &&
                        (z.promise = new y.Promise(function (a, b) {
                            (z.resolver = a), (z.rejecter = b);
                        })),
                    x
                        ? ((s = arguments[0].properties || arguments[0].p),
                          (v = arguments[0].options || arguments[0].o))
                        : ((s = arguments[q]), (v = arguments[q + 1])),
                    !(r = f(r)))
                )
                    return void (
                        z.promise &&
                        (s && v && !1 === v.promiseRejectEmpty
                            ? z.resolver()
                            : z.rejecter())
                    );
                var C = r.length,
                    D = 0;
                if (
                    !/^(stop|finish|finishAll|pause|resume)$/i.test(s) &&
                    !o.isPlainObject(v)
                ) {
                    var E = q + 1;
                    v = {};
                    for (var F = E; F < arguments.length; F++)
                        u.isArray(arguments[F]) ||
                        (!/^(fast|normal|slow)$/i.test(arguments[F]) &&
                            !/^\d/.test(arguments[F]))
                            ? u.isString(arguments[F]) ||
                              u.isArray(arguments[F])
                                ? (v.easing = arguments[F])
                                : u.isFunction(arguments[F]) &&
                                  (v.complete = arguments[F])
                            : (v.duration = arguments[F]);
                }
                var G;
                switch (s) {
                    case 'scroll':
                        G = 'scroll';
                        break;
                    case 'reverse':
                        G = 'reverse';
                        break;
                    case 'pause':
                        var H = new Date().getTime();
                        return (
                            o.each(r, function (a, b) {
                                h(b, H);
                            }),
                            o.each(y.State.calls, function (a, b) {
                                var c = !1;
                                b &&
                                    o.each(b[1], function (a, e) {
                                        var f = v === d ? '' : v;
                                        return (
                                            (!0 !== f &&
                                                b[2].queue !== f &&
                                                (v !== d ||
                                                    !1 !== b[2].queue)) ||
                                            (o.each(r, function (a, d) {
                                                if (d === e)
                                                    return (
                                                        (b[5] = { resume: !1 }),
                                                        (c = !0),
                                                        !1
                                                    );
                                            }),
                                            !c && void 0)
                                        );
                                    });
                            }),
                            a()
                        );
                    case 'resume':
                        return (
                            o.each(r, function (a, b) {
                                i(b, H);
                            }),
                            o.each(y.State.calls, function (a, b) {
                                var c = !1;
                                b &&
                                    o.each(b[1], function (a, e) {
                                        var f = v === d ? '' : v;
                                        return (
                                            (!0 !== f &&
                                                b[2].queue !== f &&
                                                (v !== d ||
                                                    !1 !== b[2].queue)) ||
                                            !b[5] ||
                                            (o.each(r, function (a, d) {
                                                if (d === e)
                                                    return (
                                                        (b[5].resume = !0),
                                                        (c = !0),
                                                        !1
                                                    );
                                            }),
                                            !c && void 0)
                                        );
                                    });
                            }),
                            a()
                        );
                    case 'finish':
                    case 'finishAll':
                    case 'stop':
                        o.each(r, function (a, b) {
                            g(b) &&
                                g(b).delayTimer &&
                                (clearTimeout(g(b).delayTimer.setTimeout),
                                g(b).delayTimer.next && g(b).delayTimer.next(),
                                delete g(b).delayTimer),
                                'finishAll' !== s ||
                                    (!0 !== v && !u.isString(v)) ||
                                    (o.each(
                                        o.queue(b, u.isString(v) ? v : ''),
                                        function (a, b) {
                                            u.isFunction(b) && b();
                                        }
                                    ),
                                    o.queue(b, u.isString(v) ? v : '', []));
                        });
                        var I = [];
                        return (
                            o.each(y.State.calls, function (a, b) {
                                b &&
                                    o.each(b[1], function (c, e) {
                                        var f = v === d ? '' : v;
                                        if (
                                            !0 !== f &&
                                            b[2].queue !== f &&
                                            (v !== d || !1 !== b[2].queue)
                                        )
                                            return !0;
                                        o.each(r, function (c, d) {
                                            if (d === e)
                                                if (
                                                    ((!0 === v ||
                                                        u.isString(v)) &&
                                                        (o.each(
                                                            o.queue(
                                                                d,
                                                                u.isString(v)
                                                                    ? v
                                                                    : ''
                                                            ),
                                                            function (a, b) {
                                                                u.isFunction(
                                                                    b
                                                                ) &&
                                                                    b(null, !0);
                                                            }
                                                        ),
                                                        o.queue(
                                                            d,
                                                            u.isString(v)
                                                                ? v
                                                                : '',
                                                            []
                                                        )),
                                                    'stop' === s)
                                                ) {
                                                    var h = g(d);
                                                    h &&
                                                        h.tweensContainer &&
                                                        !1 !== f &&
                                                        o.each(
                                                            h.tweensContainer,
                                                            function (a, b) {
                                                                b.endValue =
                                                                    b.currentValue;
                                                            }
                                                        ),
                                                        I.push(a);
                                                } else
                                                    ('finish' !== s &&
                                                        'finishAll' !== s) ||
                                                        (b[2].duration = 1);
                                        });
                                    });
                            }),
                            'stop' === s &&
                                (o.each(I, function (a, b) {
                                    n(b, !0);
                                }),
                                z.promise && z.resolver(r)),
                            a()
                        );
                    default:
                        if (!o.isPlainObject(s) || u.isEmptyObject(s)) {
                            if (u.isString(s) && y.Redirects[s]) {
                                j = o.extend({}, v);
                                var J = j.duration,
                                    K = j.delay || 0;
                                return (
                                    !0 === j.backwards &&
                                        (r = o.extend(!0, [], r).reverse()),
                                    o.each(r, function (a, b) {
                                        parseFloat(j.stagger)
                                            ? (j.delay =
                                                  K + parseFloat(j.stagger) * a)
                                            : u.isFunction(j.stagger) &&
                                              (j.delay =
                                                  K + j.stagger.call(b, a, C)),
                                            j.drag &&
                                                ((j.duration =
                                                    parseFloat(J) ||
                                                    (/^(callout|transition)/.test(
                                                        s
                                                    )
                                                        ? 1e3
                                                        : w)),
                                                (j.duration = Math.max(
                                                    j.duration *
                                                        (j.backwards
                                                            ? 1 - a / C
                                                            : (a + 1) / C),
                                                    0.75 * j.duration,
                                                    200
                                                ))),
                                            y.Redirects[s].call(
                                                b,
                                                b,
                                                j || {},
                                                a,
                                                C,
                                                r,
                                                z.promise ? z : d
                                            );
                                    }),
                                    a()
                                );
                            }
                            var L =
                                'Velocity: First argument (' +
                                s +
                                ') was not a property map, a known action, or a registered redirect. Aborting.';
                            return (
                                z.promise
                                    ? z.rejecter(new Error(L))
                                    : b.console && console.log(L),
                                a()
                            );
                        }
                        G = 'start';
                }
                var M = {
                        lastParent: null,
                        lastPosition: null,
                        lastFontSize: null,
                        lastPercentToPxWidth: null,
                        lastPercentToPxHeight: null,
                        lastEmToPx: null,
                        remToPx: null,
                        vwToPx: null,
                        vhToPx: null
                    },
                    N = [];
                o.each(r, function (a, b) {
                    u.isNode(b) && e(b, a);
                }),
                    (j = o.extend({}, y.defaults, v)),
                    (j.loop = parseInt(j.loop, 10));
                var O = 2 * j.loop - 1;
                if (j.loop)
                    for (var P = 0; P < O; P++) {
                        var Q = { delay: j.delay, progress: j.progress };
                        P === O - 1 &&
                            ((Q.display = j.display),
                            (Q.visibility = j.visibility),
                            (Q.complete = j.complete)),
                            B(r, 'reverse', Q);
                    }
                return a();
            };
            (y = o.extend(B, y)), (y.animate = B);
            var C = b.requestAnimationFrame || q;
            if (!y.State.isMobile && c.hidden !== d) {
                var D = function () {
                    c.hidden
                        ? ((C = function (a) {
                              return setTimeout(function () {
                                  a(!0);
                              }, 16);
                          }),
                          m())
                        : (C = b.requestAnimationFrame || q);
                };
                D(), c.addEventListener('visibilitychange', D);
            }
            return (
                (a.Velocity = y),
                a !== b &&
                    ((a.fn.velocity = B),
                    (a.fn.velocity.defaults = y.defaults)),
                o.each(['Down', 'Up'], function (a, b) {
                    y.Redirects['slide' + b] = function (a, c, e, f, g, h) {
                        var i = o.extend({}, c),
                            j = i.begin,
                            k = i.complete,
                            l = {},
                            m = {
                                height: '',
                                marginTop: '',
                                marginBottom: '',
                                paddingTop: '',
                                paddingBottom: ''
                            };
                        i.display === d &&
                            (i.display =
                                'Down' === b
                                    ? 'inline' ===
                                      y.CSS.Values.getDisplayType(a)
                                        ? 'inline-block'
                                        : 'block'
                                    : 'none'),
                            (i.begin = function () {
                                0 === e && j && j.call(g, g);
                                for (var c in m)
                                    if (m.hasOwnProperty(c)) {
                                        l[c] = a.style[c];
                                        var d = A.getPropertyValue(a, c);
                                        m[c] = 'Down' === b ? [d, 0] : [0, d];
                                    }
                                (l.overflow = a.style.overflow),
                                    (a.style.overflow = 'hidden');
                            }),
                            (i.complete = function () {
                                for (var b in l)
                                    l.hasOwnProperty(b) && (a.style[b] = l[b]);
                                e === f - 1 &&
                                    (k && k.call(g, g), h && h.resolver(g));
                            }),
                            y(a, m, i);
                    };
                }),
                o.each(['In', 'Out'], function (a, b) {
                    y.Redirects['fade' + b] = function (a, c, e, f, g, h) {
                        var i = o.extend({}, c),
                            j = i.complete,
                            k = { opacity: 'In' === b ? 1 : 0 };
                        0 !== e && (i.begin = null),
                            (i.complete =
                                e !== f - 1
                                    ? null
                                    : function () {
                                          j && j.call(g, g), h && h.resolver(g);
                                      }),
                            i.display === d &&
                                (i.display = 'In' === b ? 'auto' : 'none'),
                            y(this, k, i);
                    };
                }),
                y
            );
        })(
            window.jQuery || window.Zepto || window,
            window,
            window ? window.document : undefined
        );
    });

/*!
 * is.js 0.8.0
 * Author: Aras Atasaygin
 */
(function (n, t) {
    if (typeof define === 'function' && define.amd) {
        define(function () {
            return (n.is = t());
        });
    } else if (typeof exports === 'object') {
        module.exports = t();
    } else {
        n.is = t();
    }
})(this, function () {
    var n = {};
    n.VERSION = '0.8.0';
    n.not = {};
    n.all = {};
    n.any = {};
    var t = Object.prototype.toString;
    var e = Array.prototype.slice;
    var r = Object.prototype.hasOwnProperty;
    function a(n) {
        return function () {
            return !n.apply(null, e.call(arguments));
        };
    }
    function u(n) {
        return function () {
            var t = c(arguments);
            var e = t.length;
            for (var r = 0; r < e; r++) {
                if (!n.call(null, t[r])) {
                    return false;
                }
            }
            return true;
        };
    }
    function o(n) {
        return function () {
            var t = c(arguments);
            var e = t.length;
            for (var r = 0; r < e; r++) {
                if (n.call(null, t[r])) {
                    return true;
                }
            }
            return false;
        };
    }
    var i = {
        '<': function (n, t) {
            return n < t;
        },
        '<=': function (n, t) {
            return n <= t;
        },
        '>': function (n, t) {
            return n > t;
        },
        '>=': function (n, t) {
            return n >= t;
        }
    };
    function f(n, t) {
        var e = t + '';
        var r = +(e.match(/\d+/) || NaN);
        var a = e.match(/^[<>]=?|/)[0];
        return i[a] ? i[a](n, r) : n == r || r !== r;
    }
    function c(t) {
        var r = e.call(t);
        var a = r.length;
        if (a === 1 && n.array(r[0])) {
            r = r[0];
        }
        return r;
    }
    n.arguments = function (n) {
        return (
            t.call(n) === '[object Arguments]' ||
            (n != null && typeof n === 'object' && 'callee' in n)
        );
    };
    n.array =
        Array.isArray ||
        function (n) {
            return t.call(n) === '[object Array]';
        };
    n.boolean = function (n) {
        return n === true || n === false || t.call(n) === '[object Boolean]';
    };
    n.char = function (t) {
        return n.string(t) && t.length === 1;
    };
    n.date = function (n) {
        return t.call(n) === '[object Date]';
    };
    n.domNode = function (t) {
        return n.object(t) && t.nodeType > 0;
    };
    n.error = function (n) {
        return t.call(n) === '[object Error]';
    };
    n['function'] = function (n) {
        return t.call(n) === '[object Function]' || typeof n === 'function';
    };
    n.json = function (n) {
        return t.call(n) === '[object Object]';
    };
    n.nan = function (n) {
        return n !== n;
    };
    n['null'] = function (n) {
        return n === null;
    };
    n.number = function (e) {
        return n.not.nan(e) && t.call(e) === '[object Number]';
    };
    n.object = function (n) {
        return Object(n) === n;
    };
    n.regexp = function (n) {
        return t.call(n) === '[object RegExp]';
    };
    n.sameType = function (e, r) {
        var a = t.call(e);
        if (a !== t.call(r)) {
            return false;
        }
        if (a === '[object Number]') {
            return !n.any.nan(e, r) || n.all.nan(e, r);
        }
        return true;
    };
    n.sameType.api = ['not'];
    n.string = function (n) {
        return t.call(n) === '[object String]';
    };
    n.undefined = function (n) {
        return n === void 0;
    };
    n.windowObject = function (n) {
        return n != null && typeof n === 'object' && 'setInterval' in n;
    };
    n.empty = function (t) {
        if (n.object(t)) {
            var e = Object.getOwnPropertyNames(t).length;
            if (
                e === 0 ||
                (e === 1 && n.array(t)) ||
                (e === 2 && n.arguments(t))
            ) {
                return true;
            }
            return false;
        }
        return t === '';
    };
    n.existy = function (n) {
        return n != null;
    };
    n.falsy = function (n) {
        return !n;
    };
    n.truthy = a(n.falsy);
    n.above = function (t, e) {
        return n.all.number(t, e) && t > e;
    };
    n.above.api = ['not'];
    n.decimal = function (t) {
        return n.number(t) && t % 1 !== 0;
    };
    n.equal = function (t, e) {
        if (n.all.number(t, e)) {
            return t === e && 1 / t === 1 / e;
        }
        if (n.all.string(t, e) || n.all.regexp(t, e)) {
            return '' + t === '' + e;
        }
        if (n.all.boolean(t, e)) {
            return t === e;
        }
        return false;
    };
    n.equal.api = ['not'];
    n.even = function (t) {
        return n.number(t) && t % 2 === 0;
    };
    n.finite =
        isFinite ||
        function (t) {
            return n.not.infinite(t) && n.not.nan(t);
        };
    n.infinite = function (n) {
        return n === Infinity || n === -Infinity;
    };
    n.integer = function (t) {
        return n.number(t) && t % 1 === 0;
    };
    n.negative = function (t) {
        return n.number(t) && t < 0;
    };
    n.odd = function (t) {
        return n.number(t) && t % 2 === 1;
    };
    n.positive = function (t) {
        return n.number(t) && t > 0;
    };
    n.under = function (t, e) {
        return n.all.number(t, e) && t < e;
    };
    n.under.api = ['not'];
    n.within = function (t, e, r) {
        return n.all.number(t, e, r) && t > e && t < r;
    };
    n.within.api = ['not'];
    var l = {
        affirmative: /^(?:1|t(?:rue)?|y(?:es)?|ok(?:ay)?)$/,
        alphaNumeric: /^[A-Za-z0-9]+$/,
        caPostalCode: /^(?!.*[DFIOQU])[A-VXY][0-9][A-Z]\s?[0-9][A-Z][0-9]$/,
        creditCard: /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/,
        dateString: /^(1[0-2]|0?[1-9])([\/-])(3[01]|[12][0-9]|0?[1-9])(?:\2)(?:[0-9]{2})?[0-9]{2}$/,
        email: /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,
        eppPhone: /^\+[0-9]{1,3}\.[0-9]{4,14}(?:x.+)?$/,
        hexadecimal: /^(?:0x)?[0-9a-fA-F]+$/,
        hexColor: /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/,
        ipv4: /^(?:(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.){3}(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])$/,
        ipv6: /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i,
        nanpPhone: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
        socialSecurityNumber: /^(?!000|666)[0-8][0-9]{2}-?(?!00)[0-9]{2}-?(?!0000)[0-9]{4}$/,
        timeString: /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])$/,
        ukPostCode: /^[A-Z]{1,2}[0-9RCHNQ][0-9A-Z]?\s?[0-9][ABD-HJLNP-UW-Z]{2}$|^[A-Z]{2}-?[0-9]{4}$/,
        url: /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/i,
        usZipCode: /^[0-9]{5}(?:-[0-9]{4})?$/
    };
    function d(t, e) {
        n[t] = function (n) {
            return e[t].test(n);
        };
    }
    for (var s in l) {
        if (l.hasOwnProperty(s)) {
            d(s, l);
        }
    }
    n.ip = function (t) {
        return n.ipv4(t) || n.ipv6(t);
    };
    n.capitalized = function (t) {
        if (n.not.string(t)) {
            return false;
        }
        var e = t.split(' ');
        for (var r = 0; r < e.length; r++) {
            var a = e[r];
            if (a.length) {
                var u = a.charAt(0);
                if (u !== u.toUpperCase()) {
                    return false;
                }
            }
        }
        return true;
    };
    n.endWith = function (t, e) {
        if (n.not.string(t)) {
            return false;
        }
        e += '';
        var r = t.length - e.length;
        return r >= 0 && t.indexOf(e, r) === r;
    };
    n.endWith.api = ['not'];
    n.include = function (n, t) {
        return n.indexOf(t) > -1;
    };
    n.include.api = ['not'];
    n.lowerCase = function (t) {
        return n.string(t) && t === t.toLowerCase();
    };
    n.palindrome = function (t) {
        if (n.not.string(t)) {
            return false;
        }
        t = t.replace(/[^a-zA-Z0-9]+/g, '').toLowerCase();
        var e = t.length - 1;
        for (var r = 0, a = Math.floor(e / 2); r <= a; r++) {
            if (t.charAt(r) !== t.charAt(e - r)) {
                return false;
            }
        }
        return true;
    };
    n.space = function (t) {
        if (n.not.char(t)) {
            return false;
        }
        var e = t.charCodeAt(0);
        return (e > 8 && e < 14) || e === 32;
    };
    n.startWith = function (t, e) {
        return n.string(t) && t.indexOf(e) === 0;
    };
    n.startWith.api = ['not'];
    n.upperCase = function (t) {
        return n.string(t) && t === t.toUpperCase();
    };
    var F = [
        'sunday',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday'
    ];
    var p = [
        'january',
        'february',
        'march',
        'april',
        'may',
        'june',
        'july',
        'august',
        'september',
        'october',
        'november',
        'december'
    ];
    n.day = function (t, e) {
        return n.date(t) && e.toLowerCase() === F[t.getDay()];
    };
    n.day.api = ['not'];
    n.dayLightSavingTime = function (n) {
        var t = new Date(n.getFullYear(), 0, 1);
        var e = new Date(n.getFullYear(), 6, 1);
        var r = Math.max(t.getTimezoneOffset(), e.getTimezoneOffset());
        return n.getTimezoneOffset() < r;
    };
    n.future = function (t) {
        var e = new Date();
        return n.date(t) && t.getTime() > e.getTime();
    };
    n.inDateRange = function (t, e, r) {
        if (n.not.date(t) || n.not.date(e) || n.not.date(r)) {
            return false;
        }
        var a = t.getTime();
        return a > e.getTime() && a < r.getTime();
    };
    n.inDateRange.api = ['not'];
    n.inLastMonth = function (t) {
        return n.inDateRange(
            t,
            new Date(new Date().setMonth(new Date().getMonth() - 1)),
            new Date()
        );
    };
    n.inLastWeek = function (t) {
        return n.inDateRange(
            t,
            new Date(new Date().setDate(new Date().getDate() - 7)),
            new Date()
        );
    };
    n.inLastYear = function (t) {
        return n.inDateRange(
            t,
            new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
            new Date()
        );
    };
    n.inNextMonth = function (t) {
        return n.inDateRange(
            t,
            new Date(),
            new Date(new Date().setMonth(new Date().getMonth() + 1))
        );
    };
    n.inNextWeek = function (t) {
        return n.inDateRange(
            t,
            new Date(),
            new Date(new Date().setDate(new Date().getDate() + 7))
        );
    };
    n.inNextYear = function (t) {
        return n.inDateRange(
            t,
            new Date(),
            new Date(new Date().setFullYear(new Date().getFullYear() + 1))
        );
    };
    n.leapYear = function (t) {
        return n.number(t) && ((t % 4 === 0 && t % 100 !== 0) || t % 400 === 0);
    };
    n.month = function (t, e) {
        return n.date(t) && e.toLowerCase() === p[t.getMonth()];
    };
    n.month.api = ['not'];
    n.past = function (t) {
        var e = new Date();
        return n.date(t) && t.getTime() < e.getTime();
    };
    n.quarterOfYear = function (t, e) {
        return (
            n.date(t) && n.number(e) && e === Math.floor((t.getMonth() + 3) / 3)
        );
    };
    n.quarterOfYear.api = ['not'];
    n.today = function (t) {
        var e = new Date();
        var r = e.toDateString();
        return n.date(t) && t.toDateString() === r;
    };
    n.tomorrow = function (t) {
        var e = new Date();
        var r = new Date(e.setDate(e.getDate() + 1)).toDateString();
        return n.date(t) && t.toDateString() === r;
    };
    n.weekend = function (t) {
        return n.date(t) && (t.getDay() === 6 || t.getDay() === 0);
    };
    n.weekday = a(n.weekend);
    n.year = function (t, e) {
        return n.date(t) && n.number(e) && e === t.getFullYear();
    };
    n.year.api = ['not'];
    n.yesterday = function (t) {
        var e = new Date();
        var r = new Date(e.setDate(e.getDate() - 1)).toDateString();
        return n.date(t) && t.toDateString() === r;
    };
    var D = n.windowObject(typeof global == 'object' && global) && global;
    var h = n.windowObject(typeof self == 'object' && self) && self;
    var v = n.windowObject(typeof this == 'object' && this) && this;
    var b = D || h || v || Function('return this')();
    var g = h && h.document;
    var m = b.is;
    var w = h && h.navigator;
    var y = ((w && w.appVersion) || '').toLowerCase();
    var x = ((w && w.userAgent) || '').toLowerCase();
    var A = ((w && w.vendor) || '').toLowerCase();
    n.android = function () {
        return /android/.test(x);
    };
    n.android.api = ['not'];
    n.androidPhone = function () {
        return /android/.test(x) && /mobile/.test(x);
    };
    n.androidPhone.api = ['not'];
    n.androidTablet = function () {
        return /android/.test(x) && !/mobile/.test(x);
    };
    n.androidTablet.api = ['not'];
    n.blackberry = function () {
        return /blackberry/.test(x) || /bb10/.test(x);
    };
    n.blackberry.api = ['not'];
    n.chrome = function (n) {
        var t = /google inc/.test(A)
            ? x.match(/(?:chrome|crios)\/(\d+)/)
            : null;
        return t !== null && f(t[1], n);
    };
    n.chrome.api = ['not'];
    n.desktop = function () {
        return n.not.mobile() && n.not.tablet();
    };
    n.desktop.api = ['not'];
    n.edge = function (n) {
        var t = x.match(/edge\/(\d+)/);
        return t !== null && f(t[1], n);
    };
    n.edge.api = ['not'];
    n.firefox = function (n) {
        var t = x.match(/(?:firefox|fxios)\/(\d+)/);
        return t !== null && f(t[1], n);
    };
    n.firefox.api = ['not'];
    n.ie = function (n) {
        var t = x.match(/(?:msie |trident.+?; rv:)(\d+)/);
        return t !== null && f(t[1], n);
    };
    n.ie.api = ['not'];
    n.ios = function () {
        return n.iphone() || n.ipad() || n.ipod();
    };
    n.ios.api = ['not'];
    n.ipad = function (n) {
        var t = x.match(/ipad.+?os (\d+)/);
        return t !== null && f(t[1], n);
    };
    n.ipad.api = ['not'];
    n.iphone = function (n) {
        var t = x.match(/iphone(?:.+?os (\d+))?/);
        return t !== null && f(t[1] || 1, n);
    };
    n.iphone.api = ['not'];
    n.ipod = function (n) {
        var t = x.match(/ipod.+?os (\d+)/);
        return t !== null && f(t[1], n);
    };
    n.ipod.api = ['not'];
    n.linux = function () {
        return /linux/.test(y);
    };
    n.linux.api = ['not'];
    n.mac = function () {
        return /mac/.test(y);
    };
    n.mac.api = ['not'];
    n.mobile = function () {
        return (
            n.iphone() ||
            n.ipod() ||
            n.androidPhone() ||
            n.blackberry() ||
            n.windowsPhone()
        );
    };
    n.mobile.api = ['not'];
    n.offline = a(n.online);
    n.offline.api = ['not'];
    n.online = function () {
        return !w || w.onLine === true;
    };
    n.online.api = ['not'];
    n.opera = function (n) {
        var t = x.match(/(?:^opera.+?version|opr)\/(\d+)/);
        return t !== null && f(t[1], n);
    };
    n.opera.api = ['not'];
    n.phantom = function (n) {
        var t = x.match(/phantomjs\/(\d+)/);
        return t !== null && f(t[1], n);
    };
    n.phantom.api = ['not'];
    n.safari = function (n) {
        var t = x.match(/version\/(\d+).+?safari/);
        return t !== null && f(t[1], n);
    };
    n.safari.api = ['not'];
    n.tablet = function () {
        return n.ipad() || n.androidTablet() || n.windowsTablet();
    };
    n.tablet.api = ['not'];
    n.touchDevice = function () {
        return (
            !!g &&
            ('ontouchstart' in h ||
                ('DocumentTouch' in h && g instanceof DocumentTouch))
        );
    };
    n.touchDevice.api = ['not'];
    n.windows = function () {
        return /win/.test(y);
    };
    n.windows.api = ['not'];
    n.windowsPhone = function () {
        return n.windows() && /phone/.test(x);
    };
    n.windowsPhone.api = ['not'];
    n.windowsTablet = function () {
        return n.windows() && n.not.windowsPhone() && /touch/.test(x);
    };
    n.windowsTablet.api = ['not'];
    n.propertyCount = function (t, e) {
        if (n.not.object(t) || n.not.number(e)) {
            return false;
        }
        var a = 0;
        for (var u in t) {
            if (r.call(t, u) && ++a > e) {
                return false;
            }
        }
        return a === e;
    };
    n.propertyCount.api = ['not'];
    n.propertyDefined = function (t, e) {
        return n.object(t) && n.string(e) && e in t;
    };
    n.propertyDefined.api = ['not'];
    n.inArray = function (t, e) {
        if (n.not.array(e)) {
            return false;
        }
        for (var r = 0; r < e.length; r++) {
            if (e[r] === t) {
                return true;
            }
        }
        return false;
    };
    n.inArray.api = ['not'];
    n.sorted = function (t, e) {
        if (n.not.array(t)) {
            return false;
        }
        var r = i[e] || i['>='];
        for (var a = 1; a < t.length; a++) {
            if (!r(t[a], t[a - 1])) {
                return false;
            }
        }
        return true;
    };
    function j() {
        var t = n;
        for (var e in t) {
            if (r.call(t, e) && n['function'](t[e])) {
                var i = t[e].api || ['not', 'all', 'any'];
                for (var f = 0; f < i.length; f++) {
                    if (i[f] === 'not') {
                        n.not[e] = a(n[e]);
                    }
                    if (i[f] === 'all') {
                        n.all[e] = u(n[e]);
                    }
                    if (i[f] === 'any') {
                        n.any[e] = o(n[e]);
                    }
                }
            }
        }
    }
    j();
    n.setNamespace = function () {
        b.is = m;
        return this;
    };
    n.setRegexp = function (n, t) {
        for (var e in l) {
            if (r.call(l, e) && t === e) {
                l[e] = n;
            }
        }
    };
    return n;
});

/*!
 * Copyright (c) 2015 Koen Romers
 * The MIT License (MIT)
 */
!(function (e) {
    if ('object' == typeof exports && 'undefined' != typeof module)
        module.exports = e();
    else if ('function' == typeof define && define.amd) define([], e);
    else {
        var t;
        (t =
            'undefined' != typeof window
                ? window
                : 'undefined' != typeof global
                ? global
                : 'undefined' != typeof self
                ? self
                : this),
            (t.Cocoen = e());
    }
})(function () {
    return (function e(t, n, i) {
        function s(o, a) {
            if (!n[o]) {
                if (!t[o]) {
                    var l = 'function' == typeof require && require;
                    if (!a && l) return l(o, !0);
                    if (r) return r(o, !0);
                    var d = new Error("Cannot find module '" + o + "'");
                    throw ((d.code = 'MODULE_NOT_FOUND'), d);
                }
                var h = (n[o] = { exports: {} });
                t[o][0].call(
                    h.exports,
                    function (e) {
                        var n = t[o][1][e];
                        return s(n ? n : e);
                    },
                    h,
                    h.exports,
                    e,
                    t,
                    n,
                    i
                );
            }
            return n[o].exports;
        }
        for (
            var r = 'function' == typeof require && require, o = 0;
            o < i.length;
            o++
        )
            s(i[o]);
        return s;
    })(
        {
            1: [
                function (e, t, n) {
                    'use strict';
                    function i(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError(
                                'Cannot call a class as a function'
                            );
                    }
                    var s =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var i in n)
                                        Object.prototype.hasOwnProperty.call(
                                            n,
                                            i
                                        ) && (e[i] = n[i]);
                                }
                                return e;
                            },
                        r = (function () {
                            function e(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var i = t[n];
                                    (i.enumerable = i.enumerable || !1),
                                        (i.configurable = !0),
                                        'value' in i && (i.writable = !0),
                                        Object.defineProperty(e, i.key, i);
                                }
                            }
                            return function (t, n, i) {
                                return n && e(t.prototype, n), i && e(t, i), t;
                            };
                        })(),
                        o = (function () {
                            function e(t, n) {
                                i(this, e),
                                    (this.options = s({}, e.defaults, n)),
                                    (this.element =
                                        t || document.querySelector('.cocoen')),
                                    this.init();
                            }
                            return (
                                r(e, [
                                    {
                                        key: 'init',
                                        value: function () {
                                            this.createElements(),
                                                this.addEventListeners(),
                                                this.dimensions();
                                        }
                                    },
                                    {
                                        key: 'createElements',
                                        value: function () {
                                            var e = document.createElement(
                                                'span'
                                            );
                                            (e.className = this.options.dragElementSelector.replace(
                                                '.',
                                                ''
                                            )),
                                                this.element.appendChild(e);
                                            var t = document.createElement(
                                                    'div'
                                                ),
                                                n = this.element.querySelector(
                                                    'img:first-child'
                                                );
                                            t.appendChild(n.cloneNode(!0)),
                                                n.parentNode.replaceChild(t, n),
                                                (this.dragElement = this.element.querySelector(
                                                    this.options
                                                        .dragElementSelector
                                                )),
                                                (this.beforeElement = this.element.querySelector(
                                                    'div:first-child'
                                                )),
                                                (this.beforeImage = this.beforeElement.querySelector(
                                                    'img'
                                                ));
                                        }
                                    },
                                    {
                                        key: 'addEventListeners',
                                        value: function () {
                                            this.element.addEventListener(
                                                'click',
                                                this.onTap.bind(this)
                                            ),
                                                this.element.addEventListener(
                                                    'mousemove',
                                                    this.onDrag.bind(this)
                                                ),
                                                this.element.addEventListener(
                                                    'touchmove',
                                                    this.onDrag.bind(this)
                                                ),
                                                this.dragElement.addEventListener(
                                                    'mousedown',
                                                    this.onDragStart.bind(this)
                                                ),
                                                this.dragElement.addEventListener(
                                                    'touchstart',
                                                    this.onDragStart.bind(this)
                                                ),
                                                window.addEventListener(
                                                    'mouseup',
                                                    this.onDragEnd.bind(this)
                                                ),
                                                window.addEventListener(
                                                    'resize',
                                                    this.dimensions.bind(this)
                                                );
                                        }
                                    },
                                    {
                                        key: 'dimensions',
                                        value: function () {
                                            (this.elementWidth = parseInt(
                                                window.getComputedStyle(
                                                    this.element
                                                ).width,
                                                10
                                            )),
                                                (this.elementOffsetLeft =
                                                    this.element.getBoundingClientRect()
                                                        .left +
                                                    document.body.scrollLeft),
                                                (this.beforeImage.style.width =
                                                    this.elementWidth + 'px'),
                                                (this.dragElementWidth = parseInt(
                                                    window.getComputedStyle(
                                                        this.dragElement
                                                    ).width,
                                                    10
                                                )),
                                                (this.minLeftPos =
                                                    this.elementOffsetLeft +
                                                    10),
                                                (this.maxLeftPos =
                                                    this.elementOffsetLeft +
                                                    this.elementWidth -
                                                    this.dragElementWidth -
                                                    10);
                                        }
                                    },
                                    {
                                        key: 'onTap',
                                        value: function (e) {
                                            e.preventDefault(),
                                                (this.leftPos = e.pageX
                                                    ? e.pageX
                                                    : e.touches[0].pageX),
                                                this.requestDrag();
                                        }
                                    },
                                    {
                                        key: 'onDragStart',
                                        value: function (e) {
                                            e.preventDefault();
                                            var t = e.pageX
                                                    ? e.pageX
                                                    : e.touches[0].pageX,
                                                n =
                                                    this.dragElement.getBoundingClientRect()
                                                        .left +
                                                    document.body.scrollLeft;
                                            (this.posX =
                                                n + this.dragElementWidth - t),
                                                (this.isDragging = !0);
                                        }
                                    },
                                    {
                                        key: 'onDragEnd',
                                        value: function (e) {
                                            e.preventDefault(),
                                                (this.isDragging = !1);
                                        }
                                    },
                                    {
                                        key: 'onDrag',
                                        value: function (e) {
                                            e.preventDefault(),
                                                this.isDragging &&
                                                    ((this.moveX = e.pageX
                                                        ? e.pageX
                                                        : e.touches[0].pageX),
                                                    (this.leftPos =
                                                        this.moveX +
                                                        this.posX -
                                                        this.dragElementWidth),
                                                    this.requestDrag());
                                        }
                                    },
                                    {
                                        key: 'drag',
                                        value: function () {
                                            this.leftPos < this.minLeftPos
                                                ? (this.leftPos = this.minLeftPos)
                                                : this.leftPos >
                                                      this.maxLeftPos &&
                                                  (this.leftPos = this.maxLeftPos);
                                            var e =
                                                this.leftPos +
                                                this.dragElementWidth / 2 -
                                                this.elementOffsetLeft;
                                            e /= this.elementWidth;
                                            var t = 100 * e + '%';
                                            (this.dragElement.style.left = t),
                                                (this.beforeElement.style.width = t),
                                                this.options.dragCallback &&
                                                    this.options.dragCallback(
                                                        e
                                                    );
                                        }
                                    },
                                    {
                                        key: 'requestDrag',
                                        value: function () {
                                            window.requestAnimationFrame(
                                                this.drag.bind(this)
                                            );
                                        }
                                    }
                                ]),
                                e
                            );
                        })();
                    (o.defaults = {
                        dragElementSelector: '.cocoen-drag',
                        dragCallback: null
                    }),
                        (t.exports = o);
                },
                {}
            ]
        },
        {},
        [1]
    )(1);
});

!(function r(n, e, t) {
    function o(i, f) {
        if (!e[i]) {
            if (!n[i]) {
                var c = 'function' == typeof require && require;
                if (!f && c) return c(i, !0);
                if (u) return u(i, !0);
                var a = new Error("Cannot find module '" + i + "'");
                throw ((a.code = 'MODULE_NOT_FOUND'), a);
            }
            var s = (e[i] = { exports: {} });
            n[i][0].call(
                s.exports,
                function (r) {
                    var e = n[i][1][r];
                    return o(e ? e : r);
                },
                s,
                s.exports,
                r,
                n,
                e,
                t
            );
        }
        return e[i].exports;
    }
    for (
        var u = 'function' == typeof require && require, i = 0;
        i < t.length;
        i++
    )
        o(t[i]);
    return o;
})(
    {
        1: [
            function (r, n, e) {
                'use strict';
                !(function (r, n) {
                    r &&
                        n &&
                        (r.fn.cocoen = function (e) {
                            function t() {
                                return new n(this, r.extend({}, n.defaults, e));
                            }
                            return this.each(t);
                        });
                })(window.jQuery, window.Cocoen);
            },
            {}
        ]
    },
    {},
    [1]
);

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.8.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
!(function (i) {
    'use strict';
    'function' == typeof define && define.amd
        ? define(['jquery'], i)
        : 'undefined' != typeof exports
        ? (module.exports = i(require('jquery')))
        : i(jQuery);
})(function (i) {
    'use strict';
    var e = window.Slick || {};
    ((e = (function () {
        var e = 0;
        return function (t, o) {
            var s,
                n = this;
            (n.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: i(t),
                appendDots: i(t),
                arrows: !0,
                asNavFor: null,
                prevArrow:
                    '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow:
                    '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function (e, t) {
                    return i('<button type="button" />').text(t + 1);
                },
                dots: !1,
                dotsClass: 'slick-dots',
                draggable: !0,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }),
                (n.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    scrolling: !1,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    swiping: !1,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1
                }),
                i.extend(n, n.initials),
                (n.activeBreakpoint = null),
                (n.animType = null),
                (n.animProp = null),
                (n.breakpoints = []),
                (n.breakpointSettings = []),
                (n.cssTransitions = !1),
                (n.focussed = !1),
                (n.interrupted = !1),
                (n.hidden = 'hidden'),
                (n.paused = !0),
                (n.positionProp = null),
                (n.respondTo = null),
                (n.rowCount = 1),
                (n.shouldClick = !0),
                (n.$slider = i(t)),
                (n.$slidesCache = null),
                (n.transformType = null),
                (n.transitionType = null),
                (n.visibilityChange = 'visibilitychange'),
                (n.windowWidth = 0),
                (n.windowTimer = null),
                (s = i(t).data('slick') || {}),
                (n.options = i.extend({}, n.defaults, o, s)),
                (n.currentSlide = n.options.initialSlide),
                (n.originalSettings = n.options),
                void 0 !== document.mozHidden
                    ? ((n.hidden = 'mozHidden'),
                      (n.visibilityChange = 'mozvisibilitychange'))
                    : void 0 !== document.webkitHidden &&
                      ((n.hidden = 'webkitHidden'),
                      (n.visibilityChange = 'webkitvisibilitychange')),
                (n.autoPlay = i.proxy(n.autoPlay, n)),
                (n.autoPlayClear = i.proxy(n.autoPlayClear, n)),
                (n.autoPlayIterator = i.proxy(n.autoPlayIterator, n)),
                (n.changeSlide = i.proxy(n.changeSlide, n)),
                (n.clickHandler = i.proxy(n.clickHandler, n)),
                (n.selectHandler = i.proxy(n.selectHandler, n)),
                (n.setPosition = i.proxy(n.setPosition, n)),
                (n.swipeHandler = i.proxy(n.swipeHandler, n)),
                (n.dragHandler = i.proxy(n.dragHandler, n)),
                (n.keyHandler = i.proxy(n.keyHandler, n)),
                (n.instanceUid = e++),
                (n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
                n.registerBreakpoints(),
                n.init(!0);
        };
    })()).prototype.activateADA = function () {
        this.$slideTrack
            .find('.slick-active')
            .attr({ 'aria-hidden': 'false' })
            .find('a, input, button, select')
            .attr({ tabindex: '0' });
    }),
        (e.prototype.addSlide = e.prototype.slickAdd = function (e, t, o) {
            var s = this;
            if ('boolean' == typeof t) (o = t), (t = null);
            else if (t < 0 || t >= s.slideCount) return !1;
            s.unload(),
                'number' == typeof t
                    ? 0 === t && 0 === s.$slides.length
                        ? i(e).appendTo(s.$slideTrack)
                        : o
                        ? i(e).insertBefore(s.$slides.eq(t))
                        : i(e).insertAfter(s.$slides.eq(t))
                    : !0 === o
                    ? i(e).prependTo(s.$slideTrack)
                    : i(e).appendTo(s.$slideTrack),
                (s.$slides = s.$slideTrack.children(this.options.slide)),
                s.$slideTrack.children(this.options.slide).detach(),
                s.$slideTrack.append(s.$slides),
                s.$slides.each(function (e, t) {
                    i(t).attr('data-slick-index', e);
                }),
                (s.$slidesCache = s.$slides),
                s.reinit();
        }),
        (e.prototype.animateHeight = function () {
            var i = this;
            if (
                1 === i.options.slidesToShow &&
                !0 === i.options.adaptiveHeight &&
                !1 === i.options.vertical
            ) {
                var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
                i.$list.animate({ height: e }, i.options.speed);
            }
        }),
        (e.prototype.animateSlide = function (e, t) {
            var o = {},
                s = this;
            s.animateHeight(),
                !0 === s.options.rtl && !1 === s.options.vertical && (e = -e),
                !1 === s.transformsEnabled
                    ? !1 === s.options.vertical
                        ? s.$slideTrack.animate(
                              { left: e },
                              s.options.speed,
                              s.options.easing,
                              t
                          )
                        : s.$slideTrack.animate(
                              { top: e },
                              s.options.speed,
                              s.options.easing,
                              t
                          )
                    : !1 === s.cssTransitions
                    ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft),
                      i({ animStart: s.currentLeft }).animate(
                          { animStart: e },
                          {
                              duration: s.options.speed,
                              easing: s.options.easing,
                              step: function (i) {
                                  (i = Math.ceil(i)),
                                      !1 === s.options.vertical
                                          ? ((o[s.animType] =
                                                'translate(' + i + 'px, 0px)'),
                                            s.$slideTrack.css(o))
                                          : ((o[s.animType] =
                                                'translate(0px,' + i + 'px)'),
                                            s.$slideTrack.css(o));
                              },
                              complete: function () {
                                  t && t.call();
                              }
                          }
                      ))
                    : (s.applyTransition(),
                      (e = Math.ceil(e)),
                      !1 === s.options.vertical
                          ? (o[s.animType] =
                                'translate3d(' + e + 'px, 0px, 0px)')
                          : (o[s.animType] =
                                'translate3d(0px,' + e + 'px, 0px)'),
                      s.$slideTrack.css(o),
                      t &&
                          setTimeout(function () {
                              s.disableTransition(), t.call();
                          }, s.options.speed));
        }),
        (e.prototype.getNavTarget = function () {
            var e = this,
                t = e.options.asNavFor;
            return t && null !== t && (t = i(t).not(e.$slider)), t;
        }),
        (e.prototype.asNavFor = function (e) {
            var t = this.getNavTarget();
            null !== t &&
                'object' == typeof t &&
                t.each(function () {
                    var t = i(this).slick('getSlick');
                    t.unslicked || t.slideHandler(e, !0);
                });
        }),
        (e.prototype.applyTransition = function (i) {
            var e = this,
                t = {};
            !1 === e.options.fade
                ? (t[e.transitionType] =
                      e.transformType +
                      ' ' +
                      e.options.speed +
                      'ms ' +
                      e.options.cssEase)
                : (t[e.transitionType] =
                      'opacity ' + e.options.speed + 'ms ' + e.options.cssEase),
                !1 === e.options.fade
                    ? e.$slideTrack.css(t)
                    : e.$slides.eq(i).css(t);
        }),
        (e.prototype.autoPlay = function () {
            var i = this;
            i.autoPlayClear(),
                i.slideCount > i.options.slidesToShow &&
                    (i.autoPlayTimer = setInterval(
                        i.autoPlayIterator,
                        i.options.autoplaySpeed
                    ));
        }),
        (e.prototype.autoPlayClear = function () {
            var i = this;
            i.autoPlayTimer && clearInterval(i.autoPlayTimer);
        }),
        (e.prototype.autoPlayIterator = function () {
            var i = this,
                e = i.currentSlide + i.options.slidesToScroll;
            i.paused ||
                i.interrupted ||
                i.focussed ||
                (!1 === i.options.infinite &&
                    (1 === i.direction &&
                    i.currentSlide + 1 === i.slideCount - 1
                        ? (i.direction = 0)
                        : 0 === i.direction &&
                          ((e = i.currentSlide - i.options.slidesToScroll),
                          i.currentSlide - 1 == 0 && (i.direction = 1))),
                i.slideHandler(e));
        }),
        (e.prototype.buildArrows = function () {
            var e = this;
            !0 === e.options.arrows &&
                ((e.$prevArrow = i(e.options.prevArrow).addClass(
                    'slick-arrow'
                )),
                (e.$nextArrow = i(e.options.nextArrow).addClass('slick-arrow')),
                e.slideCount > e.options.slidesToShow
                    ? (e.$prevArrow
                          .removeClass('slick-hidden')
                          .removeAttr('aria-hidden tabindex'),
                      e.$nextArrow
                          .removeClass('slick-hidden')
                          .removeAttr('aria-hidden tabindex'),
                      e.htmlExpr.test(e.options.prevArrow) &&
                          e.$prevArrow.prependTo(e.options.appendArrows),
                      e.htmlExpr.test(e.options.nextArrow) &&
                          e.$nextArrow.appendTo(e.options.appendArrows),
                      !0 !== e.options.infinite &&
                          e.$prevArrow
                              .addClass('slick-disabled')
                              .attr('aria-disabled', 'true'))
                    : e.$prevArrow
                          .add(e.$nextArrow)
                          .addClass('slick-hidden')
                          .attr({ 'aria-disabled': 'true', tabindex: '-1' }));
        }),
        (e.prototype.buildDots = function () {
            var e,
                t,
                o = this;
            if (!0 === o.options.dots) {
                for (
                    o.$slider.addClass('slick-dotted'),
                        t = i('<ul />').addClass(o.options.dotsClass),
                        e = 0;
                    e <= o.getDotCount();
                    e += 1
                )
                    t.append(
                        i('<li />').append(
                            o.options.customPaging.call(this, o, e)
                        )
                    );
                (o.$dots = t.appendTo(o.options.appendDots)),
                    o.$dots.find('li').first().addClass('slick-active');
            }
        }),
        (e.prototype.buildOut = function () {
            var e = this;
            (e.$slides = e.$slider
                .children(e.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide')),
                (e.slideCount = e.$slides.length),
                e.$slides.each(function (e, t) {
                    i(t)
                        .attr('data-slick-index', e)
                        .data('originalStyling', i(t).attr('style') || '');
                }),
                e.$slider.addClass('slick-slider'),
                (e.$slideTrack =
                    0 === e.slideCount
                        ? i('<div class="slick-track"/>').appendTo(e.$slider)
                        : e.$slides
                              .wrapAll('<div class="slick-track"/>')
                              .parent()),
                (e.$list = e.$slideTrack
                    .wrap('<div class="slick-list"/>')
                    .parent()),
                e.$slideTrack.css('opacity', 0),
                (!0 !== e.options.centerMode &&
                    !0 !== e.options.swipeToSlide) ||
                    (e.options.slidesToScroll = 1),
                i('img[data-lazy]', e.$slider)
                    .not('[src]')
                    .addClass('slick-loading'),
                e.setupInfinite(),
                e.buildArrows(),
                e.buildDots(),
                e.updateDots(),
                e.setSlideClasses(
                    'number' == typeof e.currentSlide ? e.currentSlide : 0
                ),
                !0 === e.options.draggable && e.$list.addClass('draggable');
        }),
        (e.prototype.buildRows = function () {
            var i,
                e,
                t,
                o,
                s,
                n,
                r,
                l = this;
            if (
                ((o = document.createDocumentFragment()),
                (n = l.$slider.children()),
                l.options.rows > 1)
            ) {
                for (
                    r = l.options.slidesPerRow * l.options.rows,
                        s = Math.ceil(n.length / r),
                        i = 0;
                    i < s;
                    i++
                ) {
                    var d = document.createElement('div');
                    for (e = 0; e < l.options.rows; e++) {
                        var a = document.createElement('div');
                        for (t = 0; t < l.options.slidesPerRow; t++) {
                            var c = i * r + (e * l.options.slidesPerRow + t);
                            n.get(c) && a.appendChild(n.get(c));
                        }
                        d.appendChild(a);
                    }
                    o.appendChild(d);
                }
                l.$slider.empty().append(o),
                    l.$slider
                        .children()
                        .children()
                        .children()
                        .css({
                            width: 100 / l.options.slidesPerRow + '%',
                            display: 'inline-block'
                        });
            }
        }),
        (e.prototype.checkResponsive = function (e, t) {
            var o,
                s,
                n,
                r = this,
                l = !1,
                d = r.$slider.width(),
                a = window.innerWidth || i(window).width();
            if (
                ('window' === r.respondTo
                    ? (n = a)
                    : 'slider' === r.respondTo
                    ? (n = d)
                    : 'min' === r.respondTo && (n = Math.min(a, d)),
                r.options.responsive &&
                    r.options.responsive.length &&
                    null !== r.options.responsive)
            ) {
                s = null;
                for (o in r.breakpoints)
                    r.breakpoints.hasOwnProperty(o) &&
                        (!1 === r.originalSettings.mobileFirst
                            ? n < r.breakpoints[o] && (s = r.breakpoints[o])
                            : n > r.breakpoints[o] && (s = r.breakpoints[o]));
                null !== s
                    ? null !== r.activeBreakpoint
                        ? (s !== r.activeBreakpoint || t) &&
                          ((r.activeBreakpoint = s),
                          'unslick' === r.breakpointSettings[s]
                              ? r.unslick(s)
                              : ((r.options = i.extend(
                                    {},
                                    r.originalSettings,
                                    r.breakpointSettings[s]
                                )),
                                !0 === e &&
                                    (r.currentSlide = r.options.initialSlide),
                                r.refresh(e)),
                          (l = s))
                        : ((r.activeBreakpoint = s),
                          'unslick' === r.breakpointSettings[s]
                              ? r.unslick(s)
                              : ((r.options = i.extend(
                                    {},
                                    r.originalSettings,
                                    r.breakpointSettings[s]
                                )),
                                !0 === e &&
                                    (r.currentSlide = r.options.initialSlide),
                                r.refresh(e)),
                          (l = s))
                    : null !== r.activeBreakpoint &&
                      ((r.activeBreakpoint = null),
                      (r.options = r.originalSettings),
                      !0 === e && (r.currentSlide = r.options.initialSlide),
                      r.refresh(e),
                      (l = s)),
                    e || !1 === l || r.$slider.trigger('breakpoint', [r, l]);
            }
        }),
        (e.prototype.changeSlide = function (e, t) {
            var o,
                s,
                n,
                r = this,
                l = i(e.currentTarget);
            switch (
                (l.is('a') && e.preventDefault(),
                l.is('li') || (l = l.closest('li')),
                (n = r.slideCount % r.options.slidesToScroll != 0),
                (o = n
                    ? 0
                    : (r.slideCount - r.currentSlide) %
                      r.options.slidesToScroll),
                e.data.message)
            ) {
                case 'previous':
                    (s =
                        0 === o
                            ? r.options.slidesToScroll
                            : r.options.slidesToShow - o),
                        r.slideCount > r.options.slidesToShow &&
                            r.slideHandler(r.currentSlide - s, !1, t);
                    break;
                case 'next':
                    (s = 0 === o ? r.options.slidesToScroll : o),
                        r.slideCount > r.options.slidesToShow &&
                            r.slideHandler(r.currentSlide + s, !1, t);
                    break;
                case 'index':
                    var d =
                        0 === e.data.index
                            ? 0
                            : e.data.index ||
                              l.index() * r.options.slidesToScroll;
                    r.slideHandler(r.checkNavigable(d), !1, t),
                        l.children().trigger('focus');
                    break;
                default:
                    return;
            }
        }),
        (e.prototype.checkNavigable = function (i) {
            var e, t;
            if (
                ((e = this.getNavigableIndexes()), (t = 0), i > e[e.length - 1])
            )
                i = e[e.length - 1];
            else
                for (var o in e) {
                    if (i < e[o]) {
                        i = t;
                        break;
                    }
                    t = e[o];
                }
            return i;
        }),
        (e.prototype.cleanUpEvents = function () {
            var e = this;
            e.options.dots &&
                null !== e.$dots &&
                (i('li', e.$dots)
                    .off('click.slick', e.changeSlide)
                    .off('mouseenter.slick', i.proxy(e.interrupt, e, !0))
                    .off('mouseleave.slick', i.proxy(e.interrupt, e, !1)),
                !0 === e.options.accessibility &&
                    e.$dots.off('keydown.slick', e.keyHandler)),
                e.$slider.off('focus.slick blur.slick'),
                !0 === e.options.arrows &&
                    e.slideCount > e.options.slidesToShow &&
                    (e.$prevArrow &&
                        e.$prevArrow.off('click.slick', e.changeSlide),
                    e.$nextArrow &&
                        e.$nextArrow.off('click.slick', e.changeSlide),
                    !0 === e.options.accessibility &&
                        (e.$prevArrow &&
                            e.$prevArrow.off('keydown.slick', e.keyHandler),
                        e.$nextArrow &&
                            e.$nextArrow.off('keydown.slick', e.keyHandler))),
                e.$list.off('touchstart.slick mousedown.slick', e.swipeHandler),
                e.$list.off('touchmove.slick mousemove.slick', e.swipeHandler),
                e.$list.off('touchend.slick mouseup.slick', e.swipeHandler),
                e.$list.off(
                    'touchcancel.slick mouseleave.slick',
                    e.swipeHandler
                ),
                e.$list.off('click.slick', e.clickHandler),
                i(document).off(e.visibilityChange, e.visibility),
                e.cleanUpSlideEvents(),
                !0 === e.options.accessibility &&
                    e.$list.off('keydown.slick', e.keyHandler),
                !0 === e.options.focusOnSelect &&
                    i(e.$slideTrack)
                        .children()
                        .off('click.slick', e.selectHandler),
                i(window).off(
                    'orientationchange.slick.slick-' + e.instanceUid,
                    e.orientationChange
                ),
                i(window).off('resize.slick.slick-' + e.instanceUid, e.resize),
                i('[draggable!=true]', e.$slideTrack).off(
                    'dragstart',
                    e.preventDefault
                ),
                i(window).off(
                    'load.slick.slick-' + e.instanceUid,
                    e.setPosition
                );
        }),
        (e.prototype.cleanUpSlideEvents = function () {
            var e = this;
            e.$list.off('mouseenter.slick', i.proxy(e.interrupt, e, !0)),
                e.$list.off('mouseleave.slick', i.proxy(e.interrupt, e, !1));
        }),
        (e.prototype.cleanUpRows = function () {
            var i,
                e = this;
            e.options.rows > 1 &&
                ((i = e.$slides.children().children()).removeAttr('style'),
                e.$slider.empty().append(i));
        }),
        (e.prototype.clickHandler = function (i) {
            !1 === this.shouldClick &&
                (i.stopImmediatePropagation(),
                i.stopPropagation(),
                i.preventDefault());
        }),
        (e.prototype.destroy = function (e) {
            var t = this;
            t.autoPlayClear(),
                (t.touchObject = {}),
                t.cleanUpEvents(),
                i('.slick-cloned', t.$slider).detach(),
                t.$dots && t.$dots.remove(),
                t.$prevArrow &&
                    t.$prevArrow.length &&
                    (t.$prevArrow
                        .removeClass('slick-disabled slick-arrow slick-hidden')
                        .removeAttr('aria-hidden aria-disabled tabindex')
                        .css('display', ''),
                    t.htmlExpr.test(t.options.prevArrow) &&
                        t.$prevArrow.remove()),
                t.$nextArrow &&
                    t.$nextArrow.length &&
                    (t.$nextArrow
                        .removeClass('slick-disabled slick-arrow slick-hidden')
                        .removeAttr('aria-hidden aria-disabled tabindex')
                        .css('display', ''),
                    t.htmlExpr.test(t.options.nextArrow) &&
                        t.$nextArrow.remove()),
                t.$slides &&
                    (t.$slides
                        .removeClass(
                            'slick-slide slick-active slick-center slick-visible slick-current'
                        )
                        .removeAttr('aria-hidden')
                        .removeAttr('data-slick-index')
                        .each(function () {
                            i(this).attr(
                                'style',
                                i(this).data('originalStyling')
                            );
                        }),
                    t.$slideTrack.children(this.options.slide).detach(),
                    t.$slideTrack.detach(),
                    t.$list.detach(),
                    t.$slider.append(t.$slides)),
                t.cleanUpRows(),
                t.$slider.removeClass('slick-slider'),
                t.$slider.removeClass('slick-initialized'),
                t.$slider.removeClass('slick-dotted'),
                (t.unslicked = !0),
                e || t.$slider.trigger('destroy', [t]);
        }),
        (e.prototype.disableTransition = function (i) {
            var e = this,
                t = {};
            (t[e.transitionType] = ''),
                !1 === e.options.fade
                    ? e.$slideTrack.css(t)
                    : e.$slides.eq(i).css(t);
        }),
        (e.prototype.fadeSlide = function (i, e) {
            var t = this;
            !1 === t.cssTransitions
                ? (t.$slides.eq(i).css({ zIndex: t.options.zIndex }),
                  t.$slides
                      .eq(i)
                      .animate(
                          { opacity: 1 },
                          t.options.speed,
                          t.options.easing,
                          e
                      ))
                : (t.applyTransition(i),
                  t.$slides.eq(i).css({ opacity: 1, zIndex: t.options.zIndex }),
                  e &&
                      setTimeout(function () {
                          t.disableTransition(i), e.call();
                      }, t.options.speed));
        }),
        (e.prototype.fadeSlideOut = function (i) {
            var e = this;
            !1 === e.cssTransitions
                ? e.$slides
                      .eq(i)
                      .animate(
                          { opacity: 0, zIndex: e.options.zIndex - 2 },
                          e.options.speed,
                          e.options.easing
                      )
                : (e.applyTransition(i),
                  e.$slides
                      .eq(i)
                      .css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
        }),
        (e.prototype.filterSlides = e.prototype.slickFilter = function (i) {
            var e = this;
            null !== i &&
                ((e.$slidesCache = e.$slides),
                e.unload(),
                e.$slideTrack.children(this.options.slide).detach(),
                e.$slidesCache.filter(i).appendTo(e.$slideTrack),
                e.reinit());
        }),
        (e.prototype.focusHandler = function () {
            var e = this;
            e.$slider
                .off('focus.slick blur.slick')
                .on('focus.slick blur.slick', '*', function (t) {
                    t.stopImmediatePropagation();
                    var o = i(this);
                    setTimeout(function () {
                        e.options.pauseOnFocus &&
                            ((e.focussed = o.is(':focus')), e.autoPlay());
                    }, 0);
                });
        }),
        (e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
            return this.currentSlide;
        }),
        (e.prototype.getDotCount = function () {
            var i = this,
                e = 0,
                t = 0,
                o = 0;
            if (!0 === i.options.infinite)
                if (i.slideCount <= i.options.slidesToShow) ++o;
                else
                    for (; e < i.slideCount; )
                        ++o,
                            (e = t + i.options.slidesToScroll),
                            (t +=
                                i.options.slidesToScroll <=
                                i.options.slidesToShow
                                    ? i.options.slidesToScroll
                                    : i.options.slidesToShow);
            else if (!0 === i.options.centerMode) o = i.slideCount;
            else if (i.options.asNavFor)
                for (; e < i.slideCount; )
                    ++o,
                        (e = t + i.options.slidesToScroll),
                        (t +=
                            i.options.slidesToScroll <= i.options.slidesToShow
                                ? i.options.slidesToScroll
                                : i.options.slidesToShow);
            else
                o =
                    1 +
                    Math.ceil(
                        (i.slideCount - i.options.slidesToShow) /
                            i.options.slidesToScroll
                    );
            return o - 1;
        }),
        (e.prototype.getLeft = function (i) {
            var e,
                t,
                o,
                s,
                n = this,
                r = 0;
            return (
                (n.slideOffset = 0),
                (t = n.$slides.first().outerHeight(!0)),
                !0 === n.options.infinite
                    ? (n.slideCount > n.options.slidesToShow &&
                          ((n.slideOffset =
                              n.slideWidth * n.options.slidesToShow * -1),
                          (s = -1),
                          !0 === n.options.vertical &&
                              !0 === n.options.centerMode &&
                              (2 === n.options.slidesToShow
                                  ? (s = -1.5)
                                  : 1 === n.options.slidesToShow && (s = -2)),
                          (r = t * n.options.slidesToShow * s)),
                      n.slideCount % n.options.slidesToScroll != 0 &&
                          i + n.options.slidesToScroll > n.slideCount &&
                          n.slideCount > n.options.slidesToShow &&
                          (i > n.slideCount
                              ? ((n.slideOffset =
                                    (n.options.slidesToShow -
                                        (i - n.slideCount)) *
                                    n.slideWidth *
                                    -1),
                                (r =
                                    (n.options.slidesToShow -
                                        (i - n.slideCount)) *
                                    t *
                                    -1))
                              : ((n.slideOffset =
                                    (n.slideCount % n.options.slidesToScroll) *
                                    n.slideWidth *
                                    -1),
                                (r =
                                    (n.slideCount % n.options.slidesToScroll) *
                                    t *
                                    -1))))
                    : i + n.options.slidesToShow > n.slideCount &&
                      ((n.slideOffset =
                          (i + n.options.slidesToShow - n.slideCount) *
                          n.slideWidth),
                      (r = (i + n.options.slidesToShow - n.slideCount) * t)),
                n.slideCount <= n.options.slidesToShow &&
                    ((n.slideOffset = 0), (r = 0)),
                !0 === n.options.centerMode &&
                n.slideCount <= n.options.slidesToShow
                    ? (n.slideOffset =
                          (n.slideWidth * Math.floor(n.options.slidesToShow)) /
                              2 -
                          (n.slideWidth * n.slideCount) / 2)
                    : !0 === n.options.centerMode && !0 === n.options.infinite
                    ? (n.slideOffset +=
                          n.slideWidth *
                              Math.floor(n.options.slidesToShow / 2) -
                          n.slideWidth)
                    : !0 === n.options.centerMode &&
                      ((n.slideOffset = 0),
                      (n.slideOffset +=
                          n.slideWidth *
                          Math.floor(n.options.slidesToShow / 2))),
                (e =
                    !1 === n.options.vertical
                        ? i * n.slideWidth * -1 + n.slideOffset
                        : i * t * -1 + r),
                !0 === n.options.variableWidth &&
                    ((o =
                        n.slideCount <= n.options.slidesToShow ||
                        !1 === n.options.infinite
                            ? n.$slideTrack.children('.slick-slide').eq(i)
                            : n.$slideTrack
                                  .children('.slick-slide')
                                  .eq(i + n.options.slidesToShow)),
                    (e =
                        !0 === n.options.rtl
                            ? o[0]
                                ? -1 *
                                  (n.$slideTrack.width() -
                                      o[0].offsetLeft -
                                      o.width())
                                : 0
                            : o[0]
                            ? -1 * o[0].offsetLeft
                            : 0),
                    !0 === n.options.centerMode &&
                        ((o =
                            n.slideCount <= n.options.slidesToShow ||
                            !1 === n.options.infinite
                                ? n.$slideTrack.children('.slick-slide').eq(i)
                                : n.$slideTrack
                                      .children('.slick-slide')
                                      .eq(i + n.options.slidesToShow + 1)),
                        (e =
                            !0 === n.options.rtl
                                ? o[0]
                                    ? -1 *
                                      (n.$slideTrack.width() -
                                          o[0].offsetLeft -
                                          o.width())
                                    : 0
                                : o[0]
                                ? -1 * o[0].offsetLeft
                                : 0),
                        (e += (n.$list.width() - o.outerWidth()) / 2))),
                e
            );
        }),
        (e.prototype.getOption = e.prototype.slickGetOption = function (i) {
            return this.options[i];
        }),
        (e.prototype.getNavigableIndexes = function () {
            var i,
                e = this,
                t = 0,
                o = 0,
                s = [];
            for (
                !1 === e.options.infinite
                    ? (i = e.slideCount)
                    : ((t = -1 * e.options.slidesToScroll),
                      (o = -1 * e.options.slidesToScroll),
                      (i = 2 * e.slideCount));
                t < i;

            )
                s.push(t),
                    (t = o + e.options.slidesToScroll),
                    (o +=
                        e.options.slidesToScroll <= e.options.slidesToShow
                            ? e.options.slidesToScroll
                            : e.options.slidesToShow);
            return s;
        }),
        (e.prototype.getSlick = function () {
            return this;
        }),
        (e.prototype.getSlideCount = function () {
            var e,
                t,
                o = this;
            return (
                (t =
                    !0 === o.options.centerMode
                        ? o.slideWidth * Math.floor(o.options.slidesToShow / 2)
                        : 0),
                !0 === o.options.swipeToSlide
                    ? (o.$slideTrack.find('.slick-slide').each(function (s, n) {
                          if (
                              n.offsetLeft - t + i(n).outerWidth() / 2 >
                              -1 * o.swipeLeft
                          )
                              return (e = n), !1;
                      }),
                      Math.abs(
                          i(e).attr('data-slick-index') - o.currentSlide
                      ) || 1)
                    : o.options.slidesToScroll
            );
        }),
        (e.prototype.goTo = e.prototype.slickGoTo = function (i, e) {
            this.changeSlide(
                { data: { message: 'index', index: parseInt(i) } },
                e
            );
        }),
        (e.prototype.init = function (e) {
            var t = this;
            i(t.$slider).hasClass('slick-initialized') ||
                (i(t.$slider).addClass('slick-initialized'),
                t.buildRows(),
                t.buildOut(),
                t.setProps(),
                t.startLoad(),
                t.loadSlider(),
                t.initializeEvents(),
                t.updateArrows(),
                t.updateDots(),
                t.checkResponsive(!0),
                t.focusHandler()),
                e && t.$slider.trigger('init', [t]),
                !0 === t.options.accessibility && t.initADA(),
                t.options.autoplay && ((t.paused = !1), t.autoPlay());
        }),
        (e.prototype.initADA = function () {
            var e = this,
                t = Math.ceil(e.slideCount / e.options.slidesToShow),
                o = e.getNavigableIndexes().filter(function (i) {
                    return i >= 0 && i < e.slideCount;
                });
            e.$slides
                .add(e.$slideTrack.find('.slick-cloned'))
                .attr({ 'aria-hidden': 'true', tabindex: '-1' })
                .find('a, input, button, select')
                .attr({ tabindex: '-1' }),
                null !== e.$dots &&
                    (e.$slides
                        .not(e.$slideTrack.find('.slick-cloned'))
                        .each(function (t) {
                            var s = o.indexOf(t);
                            i(this).attr({
                                role: 'tabpanel',
                                id: 'slick-slide' + e.instanceUid + t,
                                tabindex: -1
                            }),
                                -1 !== s &&
                                    i(this).attr({
                                        'aria-describedby':
                                            'slick-slide-control' +
                                            e.instanceUid +
                                            s
                                    });
                        }),
                    e.$dots
                        .attr('role', 'tablist')
                        .find('li')
                        .each(function (s) {
                            var n = o[s];
                            i(this).attr({ role: 'presentation' }),
                                i(this)
                                    .find('button')
                                    .first()
                                    .attr({
                                        role: 'tab',
                                        id:
                                            'slick-slide-control' +
                                            e.instanceUid +
                                            s,
                                        'aria-controls':
                                            'slick-slide' + e.instanceUid + n,
                                        'aria-label': s + 1 + ' of ' + t,
                                        'aria-selected': null,
                                        tabindex: '-1'
                                    });
                        })
                        .eq(e.currentSlide)
                        .find('button')
                        .attr({ 'aria-selected': 'true', tabindex: '0' })
                        .end());
            for (
                var s = e.currentSlide, n = s + e.options.slidesToShow;
                s < n;
                s++
            )
                e.$slides.eq(s).attr('tabindex', 0);
            e.activateADA();
        }),
        (e.prototype.initArrowEvents = function () {
            var i = this;
            !0 === i.options.arrows &&
                i.slideCount > i.options.slidesToShow &&
                (i.$prevArrow
                    .off('click.slick')
                    .on('click.slick', { message: 'previous' }, i.changeSlide),
                i.$nextArrow
                    .off('click.slick')
                    .on('click.slick', { message: 'next' }, i.changeSlide),
                !0 === i.options.accessibility &&
                    (i.$prevArrow.on('keydown.slick', i.keyHandler),
                    i.$nextArrow.on('keydown.slick', i.keyHandler)));
        }),
        (e.prototype.initDotEvents = function () {
            var e = this;
            !0 === e.options.dots &&
                (i('li', e.$dots).on(
                    'click.slick',
                    { message: 'index' },
                    e.changeSlide
                ),
                !0 === e.options.accessibility &&
                    e.$dots.on('keydown.slick', e.keyHandler)),
                !0 === e.options.dots &&
                    !0 === e.options.pauseOnDotsHover &&
                    i('li', e.$dots)
                        .on('mouseenter.slick', i.proxy(e.interrupt, e, !0))
                        .on('mouseleave.slick', i.proxy(e.interrupt, e, !1));
        }),
        (e.prototype.initSlideEvents = function () {
            var e = this;
            e.options.pauseOnHover &&
                (e.$list.on('mouseenter.slick', i.proxy(e.interrupt, e, !0)),
                e.$list.on('mouseleave.slick', i.proxy(e.interrupt, e, !1)));
        }),
        (e.prototype.initializeEvents = function () {
            var e = this;
            e.initArrowEvents(),
                e.initDotEvents(),
                e.initSlideEvents(),
                e.$list.on(
                    'touchstart.slick mousedown.slick',
                    { action: 'start' },
                    e.swipeHandler
                ),
                e.$list.on(
                    'touchmove.slick mousemove.slick',
                    { action: 'move' },
                    e.swipeHandler
                ),
                e.$list.on(
                    'touchend.slick mouseup.slick',
                    { action: 'end' },
                    e.swipeHandler
                ),
                e.$list.on(
                    'touchcancel.slick mouseleave.slick',
                    { action: 'end' },
                    e.swipeHandler
                ),
                e.$list.on('click.slick', e.clickHandler),
                i(document).on(e.visibilityChange, i.proxy(e.visibility, e)),
                !0 === e.options.accessibility &&
                    e.$list.on('keydown.slick', e.keyHandler),
                !0 === e.options.focusOnSelect &&
                    i(e.$slideTrack)
                        .children()
                        .on('click.slick', e.selectHandler),
                i(window).on(
                    'orientationchange.slick.slick-' + e.instanceUid,
                    i.proxy(e.orientationChange, e)
                ),
                i(window).on(
                    'resize.slick.slick-' + e.instanceUid,
                    i.proxy(e.resize, e)
                ),
                i('[draggable!=true]', e.$slideTrack).on(
                    'dragstart',
                    e.preventDefault
                ),
                i(window).on(
                    'load.slick.slick-' + e.instanceUid,
                    e.setPosition
                ),
                i(e.setPosition);
        }),
        (e.prototype.initUI = function () {
            var i = this;
            !0 === i.options.arrows &&
                i.slideCount > i.options.slidesToShow &&
                (i.$prevArrow.show(), i.$nextArrow.show()),
                !0 === i.options.dots &&
                    i.slideCount > i.options.slidesToShow &&
                    i.$dots.show();
        }),
        (e.prototype.keyHandler = function (i) {
            var e = this;
            i.target.tagName.match('TEXTAREA|INPUT|SELECT') ||
                (37 === i.keyCode && !0 === e.options.accessibility
                    ? e.changeSlide({
                          data: {
                              message:
                                  !0 === e.options.rtl ? 'next' : 'previous'
                          }
                      })
                    : 39 === i.keyCode &&
                      !0 === e.options.accessibility &&
                      e.changeSlide({
                          data: {
                              message:
                                  !0 === e.options.rtl ? 'previous' : 'next'
                          }
                      }));
        }),
        (e.prototype.lazyLoad = function () {
            function e(e) {
                i('img[data-lazy]', e).each(function () {
                    var e = i(this),
                        t = i(this).attr('data-lazy'),
                        o = i(this).attr('data-srcset'),
                        s =
                            i(this).attr('data-sizes') ||
                            n.$slider.attr('data-sizes'),
                        r = document.createElement('img');
                    (r.onload = function () {
                        e.animate({ opacity: 0 }, 100, function () {
                            o && (e.attr('srcset', o), s && e.attr('sizes', s)),
                                e
                                    .attr('src', t)
                                    .animate({ opacity: 1 }, 200, function () {
                                        e.removeAttr(
                                            'data-lazy data-srcset data-sizes'
                                        ).removeClass('slick-loading');
                                    }),
                                n.$slider.trigger('lazyLoaded', [n, e, t]);
                        });
                    }),
                        (r.onerror = function () {
                            e
                                .removeAttr('data-lazy')
                                .removeClass('slick-loading')
                                .addClass('slick-lazyload-error'),
                                n.$slider.trigger('lazyLoadError', [n, e, t]);
                        }),
                        (r.src = t);
                });
            }
            var t,
                o,
                s,
                n = this;
            if (
                (!0 === n.options.centerMode
                    ? !0 === n.options.infinite
                        ? (s =
                              (o =
                                  n.currentSlide +
                                  (n.options.slidesToShow / 2 + 1)) +
                              n.options.slidesToShow +
                              2)
                        : ((o = Math.max(
                              0,
                              n.currentSlide - (n.options.slidesToShow / 2 + 1)
                          )),
                          (s =
                              n.options.slidesToShow / 2 +
                              1 +
                              2 +
                              n.currentSlide))
                    : ((o = n.options.infinite
                          ? n.options.slidesToShow + n.currentSlide
                          : n.currentSlide),
                      (s = Math.ceil(o + n.options.slidesToShow)),
                      !0 === n.options.fade &&
                          (o > 0 && o--, s <= n.slideCount && s++)),
                (t = n.$slider.find('.slick-slide').slice(o, s)),
                'anticipated' === n.options.lazyLoad)
            )
                for (
                    var r = o - 1,
                        l = s,
                        d = n.$slider.find('.slick-slide'),
                        a = 0;
                    a < n.options.slidesToScroll;
                    a++
                )
                    r < 0 && (r = n.slideCount - 1),
                        (t = (t = t.add(d.eq(r))).add(d.eq(l))),
                        r--,
                        l++;
            e(t),
                n.slideCount <= n.options.slidesToShow
                    ? e(n.$slider.find('.slick-slide'))
                    : n.currentSlide >= n.slideCount - n.options.slidesToShow
                    ? e(
                          n.$slider
                              .find('.slick-cloned')
                              .slice(0, n.options.slidesToShow)
                      )
                    : 0 === n.currentSlide &&
                      e(
                          n.$slider
                              .find('.slick-cloned')
                              .slice(-1 * n.options.slidesToShow)
                      );
        }),
        (e.prototype.loadSlider = function () {
            var i = this;
            i.setPosition(),
                i.$slideTrack.css({ opacity: 1 }),
                i.$slider.removeClass('slick-loading'),
                i.initUI(),
                'progressive' === i.options.lazyLoad && i.progressiveLazyLoad();
        }),
        (e.prototype.next = e.prototype.slickNext = function () {
            this.changeSlide({ data: { message: 'next' } });
        }),
        (e.prototype.orientationChange = function () {
            var i = this;
            i.checkResponsive(), i.setPosition();
        }),
        (e.prototype.pause = e.prototype.slickPause = function () {
            var i = this;
            i.autoPlayClear(), (i.paused = !0);
        }),
        (e.prototype.play = e.prototype.slickPlay = function () {
            var i = this;
            i.autoPlay(),
                (i.options.autoplay = !0),
                (i.paused = !1),
                (i.focussed = !1),
                (i.interrupted = !1);
        }),
        (e.prototype.postSlide = function (e) {
            var t = this;
            t.unslicked ||
                (t.$slider.trigger('afterChange', [t, e]),
                (t.animating = !1),
                t.slideCount > t.options.slidesToShow && t.setPosition(),
                (t.swipeLeft = null),
                t.options.autoplay && t.autoPlay(),
                !0 === t.options.accessibility &&
                    (t.initADA(),
                    t.options.focusOnChange &&
                        i(t.$slides.get(t.currentSlide))
                            .attr('tabindex', 0)
                            .focus()));
        }),
        (e.prototype.prev = e.prototype.slickPrev = function () {
            this.changeSlide({ data: { message: 'previous' } });
        }),
        (e.prototype.preventDefault = function (i) {
            i.preventDefault();
        }),
        (e.prototype.progressiveLazyLoad = function (e) {
            e = e || 1;
            var t,
                o,
                s,
                n,
                r,
                l = this,
                d = i('img[data-lazy]', l.$slider);
            d.length
                ? ((t = d.first()),
                  (o = t.attr('data-lazy')),
                  (s = t.attr('data-srcset')),
                  (n = t.attr('data-sizes') || l.$slider.attr('data-sizes')),
                  ((r = document.createElement('img')).onload = function () {
                      s && (t.attr('srcset', s), n && t.attr('sizes', n)),
                          t
                              .attr('src', o)
                              .removeAttr('data-lazy data-srcset data-sizes')
                              .removeClass('slick-loading'),
                          !0 === l.options.adaptiveHeight && l.setPosition(),
                          l.$slider.trigger('lazyLoaded', [l, t, o]),
                          l.progressiveLazyLoad();
                  }),
                  (r.onerror = function () {
                      e < 3
                          ? setTimeout(function () {
                                l.progressiveLazyLoad(e + 1);
                            }, 500)
                          : (t
                                .removeAttr('data-lazy')
                                .removeClass('slick-loading')
                                .addClass('slick-lazyload-error'),
                            l.$slider.trigger('lazyLoadError', [l, t, o]),
                            l.progressiveLazyLoad());
                  }),
                  (r.src = o))
                : l.$slider.trigger('allImagesLoaded', [l]);
        }),
        (e.prototype.refresh = function (e) {
            var t,
                o,
                s = this;
            (o = s.slideCount - s.options.slidesToShow),
                !s.options.infinite &&
                    s.currentSlide > o &&
                    (s.currentSlide = o),
                s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
                (t = s.currentSlide),
                s.destroy(!0),
                i.extend(s, s.initials, { currentSlide: t }),
                s.init(),
                e ||
                    s.changeSlide({ data: { message: 'index', index: t } }, !1);
        }),
        (e.prototype.registerBreakpoints = function () {
            var e,
                t,
                o,
                s = this,
                n = s.options.responsive || null;
            if ('array' === i.type(n) && n.length) {
                s.respondTo = s.options.respondTo || 'window';
                for (e in n)
                    if (((o = s.breakpoints.length - 1), n.hasOwnProperty(e))) {
                        for (t = n[e].breakpoint; o >= 0; )
                            s.breakpoints[o] &&
                                s.breakpoints[o] === t &&
                                s.breakpoints.splice(o, 1),
                                o--;
                        s.breakpoints.push(t),
                            (s.breakpointSettings[t] = n[e].settings);
                    }
                s.breakpoints.sort(function (i, e) {
                    return s.options.mobileFirst ? i - e : e - i;
                });
            }
        }),
        (e.prototype.reinit = function () {
            var e = this;
            (e.$slides = e.$slideTrack
                .children(e.options.slide)
                .addClass('slick-slide')),
                (e.slideCount = e.$slides.length),
                e.currentSlide >= e.slideCount &&
                    0 !== e.currentSlide &&
                    (e.currentSlide =
                        e.currentSlide - e.options.slidesToScroll),
                e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
                e.registerBreakpoints(),
                e.setProps(),
                e.setupInfinite(),
                e.buildArrows(),
                e.updateArrows(),
                e.initArrowEvents(),
                e.buildDots(),
                e.updateDots(),
                e.initDotEvents(),
                e.cleanUpSlideEvents(),
                e.initSlideEvents(),
                e.checkResponsive(!1, !0),
                !0 === e.options.focusOnSelect &&
                    i(e.$slideTrack)
                        .children()
                        .on('click.slick', e.selectHandler),
                e.setSlideClasses(
                    'number' == typeof e.currentSlide ? e.currentSlide : 0
                ),
                e.setPosition(),
                e.focusHandler(),
                (e.paused = !e.options.autoplay),
                e.autoPlay(),
                e.$slider.trigger('reInit', [e]);
        }),
        (e.prototype.resize = function () {
            var e = this;
            i(window).width() !== e.windowWidth &&
                (clearTimeout(e.windowDelay),
                (e.windowDelay = window.setTimeout(function () {
                    (e.windowWidth = i(window).width()),
                        e.checkResponsive(),
                        e.unslicked || e.setPosition();
                }, 50)));
        }),
        (e.prototype.removeSlide = e.prototype.slickRemove = function (
            i,
            e,
            t
        ) {
            var o = this;
            if (
                ((i =
                    'boolean' == typeof i
                        ? !0 === (e = i)
                            ? 0
                            : o.slideCount - 1
                        : !0 === e
                        ? --i
                        : i),
                o.slideCount < 1 || i < 0 || i > o.slideCount - 1)
            )
                return !1;
            o.unload(),
                !0 === t
                    ? o.$slideTrack.children().remove()
                    : o.$slideTrack.children(this.options.slide).eq(i).remove(),
                (o.$slides = o.$slideTrack.children(this.options.slide)),
                o.$slideTrack.children(this.options.slide).detach(),
                o.$slideTrack.append(o.$slides),
                (o.$slidesCache = o.$slides),
                o.reinit();
        }),
        (e.prototype.setCSS = function (i) {
            var e,
                t,
                o = this,
                s = {};
            !0 === o.options.rtl && (i = -i),
                (e = 'left' == o.positionProp ? Math.ceil(i) + 'px' : '0px'),
                (t = 'top' == o.positionProp ? Math.ceil(i) + 'px' : '0px'),
                (s[o.positionProp] = i),
                !1 === o.transformsEnabled
                    ? o.$slideTrack.css(s)
                    : ((s = {}),
                      !1 === o.cssTransitions
                          ? ((s[o.animType] =
                                'translate(' + e + ', ' + t + ')'),
                            o.$slideTrack.css(s))
                          : ((s[o.animType] =
                                'translate3d(' + e + ', ' + t + ', 0px)'),
                            o.$slideTrack.css(s)));
        }),
        (e.prototype.setDimensions = function () {
            var i = this;
            !1 === i.options.vertical
                ? !0 === i.options.centerMode &&
                  i.$list.css({ padding: '0px ' + i.options.centerPadding })
                : (i.$list.height(
                      i.$slides.first().outerHeight(!0) * i.options.slidesToShow
                  ),
                  !0 === i.options.centerMode &&
                      i.$list.css({
                          padding: i.options.centerPadding + ' 0px'
                      })),
                (i.listWidth = i.$list.width()),
                (i.listHeight = i.$list.height()),
                !1 === i.options.vertical && !1 === i.options.variableWidth
                    ? ((i.slideWidth = Math.ceil(
                          i.listWidth / i.options.slidesToShow
                      )),
                      i.$slideTrack.width(
                          Math.ceil(
                              i.slideWidth *
                                  i.$slideTrack.children('.slick-slide').length
                          )
                      ))
                    : !0 === i.options.variableWidth
                    ? i.$slideTrack.width(5e3 * i.slideCount)
                    : ((i.slideWidth = Math.ceil(i.listWidth)),
                      i.$slideTrack.height(
                          Math.ceil(
                              i.$slides.first().outerHeight(!0) *
                                  i.$slideTrack.children('.slick-slide').length
                          )
                      ));
            var e =
                i.$slides.first().outerWidth(!0) - i.$slides.first().width();
            !1 === i.options.variableWidth &&
                i.$slideTrack.children('.slick-slide').width(i.slideWidth - e);
        }),
        (e.prototype.setFade = function () {
            var e,
                t = this;
            t.$slides.each(function (o, s) {
                (e = t.slideWidth * o * -1),
                    !0 === t.options.rtl
                        ? i(s).css({
                              position: 'relative',
                              right: e,
                              top: 0,
                              zIndex: t.options.zIndex - 2,
                              opacity: 0
                          })
                        : i(s).css({
                              position: 'relative',
                              left: e,
                              top: 0,
                              zIndex: t.options.zIndex - 2,
                              opacity: 0
                          });
            }),
                t.$slides
                    .eq(t.currentSlide)
                    .css({ zIndex: t.options.zIndex - 1, opacity: 1 });
        }),
        (e.prototype.setHeight = function () {
            var i = this;
            if (
                1 === i.options.slidesToShow &&
                !0 === i.options.adaptiveHeight &&
                !1 === i.options.vertical
            ) {
                var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
                i.$list.css('height', e);
            }
        }),
        (e.prototype.setOption = e.prototype.slickSetOption = function () {
            var e,
                t,
                o,
                s,
                n,
                r = this,
                l = !1;
            if (
                ('object' === i.type(arguments[0])
                    ? ((o = arguments[0]), (l = arguments[1]), (n = 'multiple'))
                    : 'string' === i.type(arguments[0]) &&
                      ((o = arguments[0]),
                      (s = arguments[1]),
                      (l = arguments[2]),
                      'responsive' === arguments[0] &&
                      'array' === i.type(arguments[1])
                          ? (n = 'responsive')
                          : void 0 !== arguments[1] && (n = 'single')),
                'single' === n)
            )
                r.options[o] = s;
            else if ('multiple' === n)
                i.each(o, function (i, e) {
                    r.options[i] = e;
                });
            else if ('responsive' === n)
                for (t in s)
                    if ('array' !== i.type(r.options.responsive))
                        r.options.responsive = [s[t]];
                    else {
                        for (e = r.options.responsive.length - 1; e >= 0; )
                            r.options.responsive[e].breakpoint ===
                                s[t].breakpoint &&
                                r.options.responsive.splice(e, 1),
                                e--;
                        r.options.responsive.push(s[t]);
                    }
            l && (r.unload(), r.reinit());
        }),
        (e.prototype.setPosition = function () {
            var i = this;
            i.setDimensions(),
                i.setHeight(),
                !1 === i.options.fade
                    ? i.setCSS(i.getLeft(i.currentSlide))
                    : i.setFade(),
                i.$slider.trigger('setPosition', [i]);
        }),
        (e.prototype.setProps = function () {
            var i = this,
                e = document.body.style;
            (i.positionProp = !0 === i.options.vertical ? 'top' : 'left'),
                'top' === i.positionProp
                    ? i.$slider.addClass('slick-vertical')
                    : i.$slider.removeClass('slick-vertical'),
                (void 0 === e.WebkitTransition &&
                    void 0 === e.MozTransition &&
                    void 0 === e.msTransition) ||
                    (!0 === i.options.useCSS && (i.cssTransitions = !0)),
                i.options.fade &&
                    ('number' == typeof i.options.zIndex
                        ? i.options.zIndex < 3 && (i.options.zIndex = 3)
                        : (i.options.zIndex = i.defaults.zIndex)),
                void 0 !== e.OTransform &&
                    ((i.animType = 'OTransform'),
                    (i.transformType = '-o-transform'),
                    (i.transitionType = 'OTransition'),
                    void 0 === e.perspectiveProperty &&
                        void 0 === e.webkitPerspective &&
                        (i.animType = !1)),
                void 0 !== e.MozTransform &&
                    ((i.animType = 'MozTransform'),
                    (i.transformType = '-moz-transform'),
                    (i.transitionType = 'MozTransition'),
                    void 0 === e.perspectiveProperty &&
                        void 0 === e.MozPerspective &&
                        (i.animType = !1)),
                void 0 !== e.webkitTransform &&
                    ((i.animType = 'webkitTransform'),
                    (i.transformType = '-webkit-transform'),
                    (i.transitionType = 'webkitTransition'),
                    void 0 === e.perspectiveProperty &&
                        void 0 === e.webkitPerspective &&
                        (i.animType = !1)),
                void 0 !== e.msTransform &&
                    ((i.animType = 'msTransform'),
                    (i.transformType = '-ms-transform'),
                    (i.transitionType = 'msTransition'),
                    void 0 === e.msTransform && (i.animType = !1)),
                void 0 !== e.transform &&
                    !1 !== i.animType &&
                    ((i.animType = 'transform'),
                    (i.transformType = 'transform'),
                    (i.transitionType = 'transition')),
                (i.transformsEnabled =
                    i.options.useTransform &&
                    null !== i.animType &&
                    !1 !== i.animType);
        }),
        (e.prototype.setSlideClasses = function (i) {
            var e,
                t,
                o,
                s,
                n = this;
            if (
                ((t = n.$slider
                    .find('.slick-slide')
                    .removeClass('slick-active slick-center slick-current')
                    .attr('aria-hidden', 'true')),
                n.$slides.eq(i).addClass('slick-current'),
                !0 === n.options.centerMode)
            ) {
                var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
                (e = Math.floor(n.options.slidesToShow / 2)),
                    !0 === n.options.infinite &&
                        (i >= e && i <= n.slideCount - 1 - e
                            ? n.$slides
                                  .slice(i - e + r, i + e + 1)
                                  .addClass('slick-active')
                                  .attr('aria-hidden', 'false')
                            : ((o = n.options.slidesToShow + i),
                              t
                                  .slice(o - e + 1 + r, o + e + 2)
                                  .addClass('slick-active')
                                  .attr('aria-hidden', 'false')),
                        0 === i
                            ? t
                                  .eq(t.length - 1 - n.options.slidesToShow)
                                  .addClass('slick-center')
                            : i === n.slideCount - 1 &&
                              t
                                  .eq(n.options.slidesToShow)
                                  .addClass('slick-center')),
                    n.$slides.eq(i).addClass('slick-center');
            } else
                i >= 0 && i <= n.slideCount - n.options.slidesToShow
                    ? n.$slides
                          .slice(i, i + n.options.slidesToShow)
                          .addClass('slick-active')
                          .attr('aria-hidden', 'false')
                    : t.length <= n.options.slidesToShow
                    ? t.addClass('slick-active').attr('aria-hidden', 'false')
                    : ((s = n.slideCount % n.options.slidesToShow),
                      (o =
                          !0 === n.options.infinite
                              ? n.options.slidesToShow + i
                              : i),
                      n.options.slidesToShow == n.options.slidesToScroll &&
                      n.slideCount - i < n.options.slidesToShow
                          ? t
                                .slice(o - (n.options.slidesToShow - s), o + s)
                                .addClass('slick-active')
                                .attr('aria-hidden', 'false')
                          : t
                                .slice(o, o + n.options.slidesToShow)
                                .addClass('slick-active')
                                .attr('aria-hidden', 'false'));
            ('ondemand' !== n.options.lazyLoad &&
                'anticipated' !== n.options.lazyLoad) ||
                n.lazyLoad();
        }),
        (e.prototype.setupInfinite = function () {
            var e,
                t,
                o,
                s = this;
            if (
                (!0 === s.options.fade && (s.options.centerMode = !1),
                !0 === s.options.infinite &&
                    !1 === s.options.fade &&
                    ((t = null), s.slideCount > s.options.slidesToShow))
            ) {
                for (
                    o =
                        !0 === s.options.centerMode
                            ? s.options.slidesToShow + 1
                            : s.options.slidesToShow,
                        e = s.slideCount;
                    e > s.slideCount - o;
                    e -= 1
                )
                    (t = e - 1),
                        i(s.$slides[t])
                            .clone(!0)
                            .attr('id', '')
                            .attr('data-slick-index', t - s.slideCount)
                            .prependTo(s.$slideTrack)
                            .addClass('slick-cloned');
                for (e = 0; e < o + s.slideCount; e += 1)
                    (t = e),
                        i(s.$slides[t])
                            .clone(!0)
                            .attr('id', '')
                            .attr('data-slick-index', t + s.slideCount)
                            .appendTo(s.$slideTrack)
                            .addClass('slick-cloned');
                s.$slideTrack
                    .find('.slick-cloned')
                    .find('[id]')
                    .each(function () {
                        i(this).attr('id', '');
                    });
            }
        }),
        (e.prototype.interrupt = function (i) {
            var e = this;
            i || e.autoPlay(), (e.interrupted = i);
        }),
        (e.prototype.selectHandler = function (e) {
            var t = this,
                o = i(e.target).is('.slick-slide')
                    ? i(e.target)
                    : i(e.target).parents('.slick-slide'),
                s = parseInt(o.attr('data-slick-index'));
            s || (s = 0),
                t.slideCount <= t.options.slidesToShow
                    ? t.slideHandler(s, !1, !0)
                    : t.slideHandler(s);
        }),
        (e.prototype.slideHandler = function (i, e, t) {
            var o,
                s,
                n,
                r,
                l,
                d = null,
                a = this;
            if (
                ((e = e || !1),
                !(
                    (!0 === a.animating && !0 === a.options.waitForAnimate) ||
                    (!0 === a.options.fade && a.currentSlide === i)
                ))
            )
                if (
                    (!1 === e && a.asNavFor(i),
                    (o = i),
                    (d = a.getLeft(o)),
                    (r = a.getLeft(a.currentSlide)),
                    (a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft),
                    !1 === a.options.infinite &&
                        !1 === a.options.centerMode &&
                        (i < 0 ||
                            i > a.getDotCount() * a.options.slidesToScroll))
                )
                    !1 === a.options.fade &&
                        ((o = a.currentSlide),
                        !0 !== t
                            ? a.animateSlide(r, function () {
                                  a.postSlide(o);
                              })
                            : a.postSlide(o));
                else if (
                    !1 === a.options.infinite &&
                    !0 === a.options.centerMode &&
                    (i < 0 || i > a.slideCount - a.options.slidesToScroll)
                )
                    !1 === a.options.fade &&
                        ((o = a.currentSlide),
                        !0 !== t
                            ? a.animateSlide(r, function () {
                                  a.postSlide(o);
                              })
                            : a.postSlide(o));
                else {
                    if (
                        (a.options.autoplay && clearInterval(a.autoPlayTimer),
                        (s =
                            o < 0
                                ? a.slideCount % a.options.slidesToScroll != 0
                                    ? a.slideCount -
                                      (a.slideCount % a.options.slidesToScroll)
                                    : a.slideCount + o
                                : o >= a.slideCount
                                ? a.slideCount % a.options.slidesToScroll != 0
                                    ? 0
                                    : o - a.slideCount
                                : o),
                        (a.animating = !0),
                        a.$slider.trigger('beforeChange', [
                            a,
                            a.currentSlide,
                            s
                        ]),
                        (n = a.currentSlide),
                        (a.currentSlide = s),
                        a.setSlideClasses(a.currentSlide),
                        a.options.asNavFor &&
                            (l = (l = a.getNavTarget()).slick('getSlick'))
                                .slideCount <= l.options.slidesToShow &&
                            l.setSlideClasses(a.currentSlide),
                        a.updateDots(),
                        a.updateArrows(),
                        !0 === a.options.fade)
                    )
                        return (
                            !0 !== t
                                ? (a.fadeSlideOut(n),
                                  a.fadeSlide(s, function () {
                                      a.postSlide(s);
                                  }))
                                : a.postSlide(s),
                            void a.animateHeight()
                        );
                    !0 !== t
                        ? a.animateSlide(d, function () {
                              a.postSlide(s);
                          })
                        : a.postSlide(s);
                }
        }),
        (e.prototype.startLoad = function () {
            var i = this;
            !0 === i.options.arrows &&
                i.slideCount > i.options.slidesToShow &&
                (i.$prevArrow.hide(), i.$nextArrow.hide()),
                !0 === i.options.dots &&
                    i.slideCount > i.options.slidesToShow &&
                    i.$dots.hide(),
                i.$slider.addClass('slick-loading');
        }),
        (e.prototype.swipeDirection = function () {
            var i,
                e,
                t,
                o,
                s = this;
            return (
                (i = s.touchObject.startX - s.touchObject.curX),
                (e = s.touchObject.startY - s.touchObject.curY),
                (t = Math.atan2(e, i)),
                (o = Math.round((180 * t) / Math.PI)) < 0 &&
                    (o = 360 - Math.abs(o)),
                o <= 45 && o >= 0
                    ? !1 === s.options.rtl
                        ? 'left'
                        : 'right'
                    : o <= 360 && o >= 315
                    ? !1 === s.options.rtl
                        ? 'left'
                        : 'right'
                    : o >= 135 && o <= 225
                    ? !1 === s.options.rtl
                        ? 'right'
                        : 'left'
                    : !0 === s.options.verticalSwiping
                    ? o >= 35 && o <= 135
                        ? 'down'
                        : 'up'
                    : 'vertical'
            );
        }),
        (e.prototype.swipeEnd = function (i) {
            var e,
                t,
                o = this;
            if (((o.dragging = !1), (o.swiping = !1), o.scrolling))
                return (o.scrolling = !1), !1;
            if (
                ((o.interrupted = !1),
                (o.shouldClick = !(o.touchObject.swipeLength > 10)),
                void 0 === o.touchObject.curX)
            )
                return !1;
            if (
                (!0 === o.touchObject.edgeHit &&
                    o.$slider.trigger('edge', [o, o.swipeDirection()]),
                o.touchObject.swipeLength >= o.touchObject.minSwipe)
            ) {
                switch ((t = o.swipeDirection())) {
                    case 'left':
                    case 'down':
                        (e = o.options.swipeToSlide
                            ? o.checkNavigable(
                                  o.currentSlide + o.getSlideCount()
                              )
                            : o.currentSlide + o.getSlideCount()),
                            (o.currentDirection = 0);
                        break;
                    case 'right':
                    case 'up':
                        (e = o.options.swipeToSlide
                            ? o.checkNavigable(
                                  o.currentSlide - o.getSlideCount()
                              )
                            : o.currentSlide - o.getSlideCount()),
                            (o.currentDirection = 1);
                }
                'vertical' != t &&
                    (o.slideHandler(e),
                    (o.touchObject = {}),
                    o.$slider.trigger('swipe', [o, t]));
            } else
                o.touchObject.startX !== o.touchObject.curX &&
                    (o.slideHandler(o.currentSlide), (o.touchObject = {}));
        }),
        (e.prototype.swipeHandler = function (i) {
            var e = this;
            if (
                !(
                    !1 === e.options.swipe ||
                    ('ontouchend' in document && !1 === e.options.swipe) ||
                    (!1 === e.options.draggable &&
                        -1 !== i.type.indexOf('mouse'))
                )
            )
                switch (
                    ((e.touchObject.fingerCount =
                        i.originalEvent && void 0 !== i.originalEvent.touches
                            ? i.originalEvent.touches.length
                            : 1),
                    (e.touchObject.minSwipe =
                        e.listWidth / e.options.touchThreshold),
                    !0 === e.options.verticalSwiping &&
                        (e.touchObject.minSwipe =
                            e.listHeight / e.options.touchThreshold),
                    i.data.action)
                ) {
                    case 'start':
                        e.swipeStart(i);
                        break;
                    case 'move':
                        e.swipeMove(i);
                        break;
                    case 'end':
                        e.swipeEnd(i);
                }
        }),
        (e.prototype.swipeMove = function (i) {
            var e,
                t,
                o,
                s,
                n,
                r,
                l = this;
            return (
                (n =
                    void 0 !== i.originalEvent
                        ? i.originalEvent.touches
                        : null),
                !(!l.dragging || l.scrolling || (n && 1 !== n.length)) &&
                    ((e = l.getLeft(l.currentSlide)),
                    (l.touchObject.curX =
                        void 0 !== n ? n[0].pageX : i.clientX),
                    (l.touchObject.curY =
                        void 0 !== n ? n[0].pageY : i.clientY),
                    (l.touchObject.swipeLength = Math.round(
                        Math.sqrt(
                            Math.pow(
                                l.touchObject.curX - l.touchObject.startX,
                                2
                            )
                        )
                    )),
                    (r = Math.round(
                        Math.sqrt(
                            Math.pow(
                                l.touchObject.curY - l.touchObject.startY,
                                2
                            )
                        )
                    )),
                    !l.options.verticalSwiping && !l.swiping && r > 4
                        ? ((l.scrolling = !0), !1)
                        : (!0 === l.options.verticalSwiping &&
                              (l.touchObject.swipeLength = r),
                          (t = l.swipeDirection()),
                          void 0 !== i.originalEvent &&
                              l.touchObject.swipeLength > 4 &&
                              ((l.swiping = !0), i.preventDefault()),
                          (s =
                              (!1 === l.options.rtl ? 1 : -1) *
                              (l.touchObject.curX > l.touchObject.startX
                                  ? 1
                                  : -1)),
                          !0 === l.options.verticalSwiping &&
                              (s =
                                  l.touchObject.curY > l.touchObject.startY
                                      ? 1
                                      : -1),
                          (o = l.touchObject.swipeLength),
                          (l.touchObject.edgeHit = !1),
                          !1 === l.options.infinite &&
                              ((0 === l.currentSlide && 'right' === t) ||
                                  (l.currentSlide >= l.getDotCount() &&
                                      'left' === t)) &&
                              ((o =
                                  l.touchObject.swipeLength *
                                  l.options.edgeFriction),
                              (l.touchObject.edgeHit = !0)),
                          !1 === l.options.vertical
                              ? (l.swipeLeft = e + o * s)
                              : (l.swipeLeft =
                                    e +
                                    o * (l.$list.height() / l.listWidth) * s),
                          !0 === l.options.verticalSwiping &&
                              (l.swipeLeft = e + o * s),
                          !0 !== l.options.fade &&
                              !1 !== l.options.touchMove &&
                              (!0 === l.animating
                                  ? ((l.swipeLeft = null), !1)
                                  : void l.setCSS(l.swipeLeft))))
            );
        }),
        (e.prototype.swipeStart = function (i) {
            var e,
                t = this;
            if (
                ((t.interrupted = !0),
                1 !== t.touchObject.fingerCount ||
                    t.slideCount <= t.options.slidesToShow)
            )
                return (t.touchObject = {}), !1;
            void 0 !== i.originalEvent &&
                void 0 !== i.originalEvent.touches &&
                (e = i.originalEvent.touches[0]),
                (t.touchObject.startX = t.touchObject.curX =
                    void 0 !== e ? e.pageX : i.clientX),
                (t.touchObject.startY = t.touchObject.curY =
                    void 0 !== e ? e.pageY : i.clientY),
                (t.dragging = !0);
        }),
        (e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
            var i = this;
            null !== i.$slidesCache &&
                (i.unload(),
                i.$slideTrack.children(this.options.slide).detach(),
                i.$slidesCache.appendTo(i.$slideTrack),
                i.reinit());
        }),
        (e.prototype.unload = function () {
            var e = this;
            i('.slick-cloned', e.$slider).remove(),
                e.$dots && e.$dots.remove(),
                e.$prevArrow &&
                    e.htmlExpr.test(e.options.prevArrow) &&
                    e.$prevArrow.remove(),
                e.$nextArrow &&
                    e.htmlExpr.test(e.options.nextArrow) &&
                    e.$nextArrow.remove(),
                e.$slides
                    .removeClass(
                        'slick-slide slick-active slick-visible slick-current'
                    )
                    .attr('aria-hidden', 'true')
                    .css('width', '');
        }),
        (e.prototype.unslick = function (i) {
            var e = this;
            e.$slider.trigger('unslick', [e, i]), e.destroy();
        }),
        (e.prototype.updateArrows = function () {
            var i = this;
            Math.floor(i.options.slidesToShow / 2),
                !0 === i.options.arrows &&
                    i.slideCount > i.options.slidesToShow &&
                    !i.options.infinite &&
                    (i.$prevArrow
                        .removeClass('slick-disabled')
                        .attr('aria-disabled', 'false'),
                    i.$nextArrow
                        .removeClass('slick-disabled')
                        .attr('aria-disabled', 'false'),
                    0 === i.currentSlide
                        ? (i.$prevArrow
                              .addClass('slick-disabled')
                              .attr('aria-disabled', 'true'),
                          i.$nextArrow
                              .removeClass('slick-disabled')
                              .attr('aria-disabled', 'false'))
                        : i.currentSlide >=
                              i.slideCount - i.options.slidesToShow &&
                          !1 === i.options.centerMode
                        ? (i.$nextArrow
                              .addClass('slick-disabled')
                              .attr('aria-disabled', 'true'),
                          i.$prevArrow
                              .removeClass('slick-disabled')
                              .attr('aria-disabled', 'false'))
                        : i.currentSlide >= i.slideCount - 1 &&
                          !0 === i.options.centerMode &&
                          (i.$nextArrow
                              .addClass('slick-disabled')
                              .attr('aria-disabled', 'true'),
                          i.$prevArrow
                              .removeClass('slick-disabled')
                              .attr('aria-disabled', 'false')));
        }),
        (e.prototype.updateDots = function () {
            var i = this;
            null !== i.$dots &&
                (i.$dots.find('li').removeClass('slick-active').end(),
                i.$dots
                    .find('li')
                    .eq(Math.floor(i.currentSlide / i.options.slidesToScroll))
                    .addClass('slick-active'));
        }),
        (e.prototype.visibility = function () {
            var i = this;
            i.options.autoplay &&
                (document[i.hidden]
                    ? (i.interrupted = !0)
                    : (i.interrupted = !1));
        }),
        (i.fn.slick = function () {
            var i,
                t,
                o = this,
                s = arguments[0],
                n = Array.prototype.slice.call(arguments, 1),
                r = o.length;
            for (i = 0; i < r; i++)
                if (
                    ('object' == typeof s || void 0 === s
                        ? (o[i].slick = new e(o[i], s))
                        : (t = o[i].slick[s].apply(o[i].slick, n)),
                    void 0 !== t)
                )
                    return t;
            return o;
        });
});

/*! Magnific Popup - v1.1.0 - 2016-02-20
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov; */
!(function (a) {
    'function' == typeof define && define.amd
        ? define(['jquery'], a)
        : a(
              'object' == typeof exports
                  ? require('jquery')
                  : window.jQuery || window.Zepto
          );
})(function (a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h = 'Close',
        i = 'BeforeClose',
        j = 'AfterClose',
        k = 'BeforeAppend',
        l = 'MarkupParse',
        m = 'Open',
        n = 'Change',
        o = 'mfp',
        p = '.' + o,
        q = 'mfp-ready',
        r = 'mfp-removing',
        s = 'mfp-prevent-close',
        t = function () {},
        u = !!window.jQuery,
        v = a(window),
        w = function (a, c) {
            b.ev.on(o + a + p, c);
        },
        x = function (b, c, d, e) {
            var f = document.createElement('div');
            return (
                (f.className = 'mfp-' + b),
                d && (f.innerHTML = d),
                e ? c && c.appendChild(f) : ((f = a(f)), c && f.appendTo(c)),
                f
            );
        },
        y = function (c, d) {
            b.ev.triggerHandler(o + c, d),
                b.st.callbacks &&
                    ((c = c.charAt(0).toLowerCase() + c.slice(1)),
                    b.st.callbacks[c] &&
                        b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]));
        },
        z = function (c) {
            return (
                (c === g && b.currTemplate.closeBtn) ||
                    ((b.currTemplate.closeBtn = a(
                        b.st.closeMarkup.replace('%title%', b.st.tClose)
                    )),
                    (g = c)),
                b.currTemplate.closeBtn
            );
        },
        A = function () {
            a.magnificPopup.instance ||
                ((b = new t()), b.init(), (a.magnificPopup.instance = b));
        },
        B = function () {
            var a = document.createElement('p').style,
                b = ['ms', 'O', 'Moz', 'Webkit'];
            if (void 0 !== a.transition) return !0;
            for (; b.length; ) if (b.pop() + 'Transition' in a) return !0;
            return !1;
        };
    (t.prototype = {
        constructor: t,
        init: function () {
            var c = navigator.appVersion;
            (b.isLowIE = b.isIE8 = document.all && !document.addEventListener),
                (b.isAndroid = /android/gi.test(c)),
                (b.isIOS = /iphone|ipad|ipod/gi.test(c)),
                (b.supportsTransition = B()),
                (b.probablyMobile =
                    b.isAndroid ||
                    b.isIOS ||
                    /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
                        navigator.userAgent
                    )),
                (d = a(document)),
                (b.popupsCache = {});
        },
        open: function (c) {
            var e;
            if (c.isObj === !1) {
                (b.items = c.items.toArray()), (b.index = 0);
                var g,
                    h = c.items;
                for (e = 0; e < h.length; e++)
                    if (
                        ((g = h[e]), g.parsed && (g = g.el[0]), g === c.el[0])
                    ) {
                        b.index = e;
                        break;
                    }
            } else
                (b.items = a.isArray(c.items) ? c.items : [c.items]),
                    (b.index = c.index || 0);
            if (b.isOpen) return void b.updateItemHTML();
            (b.types = []),
                (f = ''),
                c.mainEl && c.mainEl.length
                    ? (b.ev = c.mainEl.eq(0))
                    : (b.ev = d),
                c.key
                    ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}),
                      (b.currTemplate = b.popupsCache[c.key]))
                    : (b.currTemplate = {}),
                (b.st = a.extend(!0, {}, a.magnificPopup.defaults, c)),
                (b.fixedContentPos =
                    'auto' === b.st.fixedContentPos
                        ? !b.probablyMobile
                        : b.st.fixedContentPos),
                b.st.modal &&
                    ((b.st.closeOnContentClick = !1),
                    (b.st.closeOnBgClick = !1),
                    (b.st.showCloseBtn = !1),
                    (b.st.enableEscapeKey = !1)),
                b.bgOverlay ||
                    ((b.bgOverlay = x('bg').on('click' + p, function () {
                        b.close();
                    })),
                    (b.wrap = x('wrap')
                        .attr('tabindex', -1)
                        .on('click' + p, function (a) {
                            b._checkIfClose(a.target) && b.close();
                        })),
                    (b.container = x('container', b.wrap))),
                (b.contentContainer = x('content')),
                b.st.preloader &&
                    (b.preloader = x('preloader', b.container, b.st.tLoading));
            var i = a.magnificPopup.modules;
            for (e = 0; e < i.length; e++) {
                var j = i[e];
                (j = j.charAt(0).toUpperCase() + j.slice(1)),
                    b['init' + j].call(b);
            }
            y('BeforeOpen'),
                b.st.showCloseBtn &&
                    (b.st.closeBtnInside
                        ? (w(l, function (a, b, c, d) {
                              c.close_replaceWith = z(d.type);
                          }),
                          (f += ' mfp-close-btn-in'))
                        : b.wrap.append(z())),
                b.st.alignTop && (f += ' mfp-align-top'),
                b.fixedContentPos
                    ? b.wrap.css({
                          overflow: b.st.overflowY,
                          overflowX: 'hidden',
                          overflowY: b.st.overflowY
                      })
                    : b.wrap.css({ top: v.scrollTop(), position: 'absolute' }),
                (b.st.fixedBgPos === !1 ||
                    ('auto' === b.st.fixedBgPos && !b.fixedContentPos)) &&
                    b.bgOverlay.css({
                        height: d.height(),
                        position: 'absolute'
                    }),
                b.st.enableEscapeKey &&
                    d.on('keyup' + p, function (a) {
                        27 === a.keyCode && b.close();
                    }),
                v.on('resize' + p, function () {
                    b.updateSize();
                }),
                b.st.closeOnContentClick || (f += ' mfp-auto-cursor'),
                f && b.wrap.addClass(f);
            var k = (b.wH = v.height()),
                n = {};
            if (b.fixedContentPos && b._hasScrollBar(k)) {
                var o = b._getScrollbarSize();
                o && (n.marginRight = o);
            }
            b.fixedContentPos &&
                (b.isIE7
                    ? a('body, html').css('overflow', 'hidden')
                    : (n.overflow = 'hidden'));
            var r = b.st.mainClass;
            return (
                b.isIE7 && (r += ' mfp-ie7'),
                r && b._addClassToMFP(r),
                b.updateItemHTML(),
                y('BuildControls'),
                a('html').css(n),
                b.bgOverlay
                    .add(b.wrap)
                    .prependTo(b.st.prependTo || a(document.body)),
                (b._lastFocusedEl = document.activeElement),
                setTimeout(function () {
                    b.content
                        ? (b._addClassToMFP(q), b._setFocus())
                        : b.bgOverlay.addClass(q),
                        d.on('focusin' + p, b._onFocusIn);
                }, 16),
                (b.isOpen = !0),
                b.updateSize(k),
                y(m),
                c
            );
        },
        close: function () {
            b.isOpen &&
                (y(i),
                (b.isOpen = !1),
                b.st.removalDelay && !b.isLowIE && b.supportsTransition
                    ? (b._addClassToMFP(r),
                      setTimeout(function () {
                          b._close();
                      }, b.st.removalDelay))
                    : b._close());
        },
        _close: function () {
            y(h);
            var c = r + ' ' + q + ' ';
            if (
                (b.bgOverlay.detach(),
                b.wrap.detach(),
                b.container.empty(),
                b.st.mainClass && (c += b.st.mainClass + ' '),
                b._removeClassFromMFP(c),
                b.fixedContentPos)
            ) {
                var e = { marginRight: '' };
                b.isIE7
                    ? a('body, html').css('overflow', '')
                    : (e.overflow = ''),
                    a('html').css(e);
            }
            d.off('keyup' + p + ' focusin' + p),
                b.ev.off(p),
                b.wrap.attr('class', 'mfp-wrap').removeAttr('style'),
                b.bgOverlay.attr('class', 'mfp-bg'),
                b.container.attr('class', 'mfp-container'),
                !b.st.showCloseBtn ||
                    (b.st.closeBtnInside &&
                        b.currTemplate[b.currItem.type] !== !0) ||
                    (b.currTemplate.closeBtn &&
                        b.currTemplate.closeBtn.detach()),
                b.st.autoFocusLast &&
                    b._lastFocusedEl &&
                    a(b._lastFocusedEl).focus(),
                (b.currItem = null),
                (b.content = null),
                (b.currTemplate = null),
                (b.prevHeight = 0),
                y(j);
        },
        updateSize: function (a) {
            if (b.isIOS) {
                var c =
                        document.documentElement.clientWidth /
                        window.innerWidth,
                    d = window.innerHeight * c;
                b.wrap.css('height', d), (b.wH = d);
            } else b.wH = a || v.height();
            b.fixedContentPos || b.wrap.css('height', b.wH), y('Resize');
        },
        updateItemHTML: function () {
            var c = b.items[b.index];
            b.contentContainer.detach(),
                b.content && b.content.detach(),
                c.parsed || (c = b.parseEl(b.index));
            var d = c.type;
            if (
                (y('BeforeChange', [b.currItem ? b.currItem.type : '', d]),
                (b.currItem = c),
                !b.currTemplate[d])
            ) {
                var f = b.st[d] ? b.st[d].markup : !1;
                y('FirstMarkupParse', f),
                    f ? (b.currTemplate[d] = a(f)) : (b.currTemplate[d] = !0);
            }
            e &&
                e !== c.type &&
                b.container.removeClass('mfp-' + e + '-holder');
            var g = b['get' + d.charAt(0).toUpperCase() + d.slice(1)](
                c,
                b.currTemplate[d]
            );
            b.appendContent(g, d),
                (c.preloaded = !0),
                y(n, c),
                (e = c.type),
                b.container.prepend(b.contentContainer),
                y('AfterChange');
        },
        appendContent: function (a, c) {
            (b.content = a),
                a
                    ? b.st.showCloseBtn &&
                      b.st.closeBtnInside &&
                      b.currTemplate[c] === !0
                        ? b.content.find('.mfp-close').length ||
                          b.content.append(z())
                        : (b.content = a)
                    : (b.content = ''),
                y(k),
                b.container.addClass('mfp-' + c + '-holder'),
                b.contentContainer.append(b.content);
        },
        parseEl: function (c) {
            var d,
                e = b.items[c];
            if (
                (e.tagName
                    ? (e = { el: a(e) })
                    : ((d = e.type), (e = { data: e, src: e.src })),
                e.el)
            ) {
                for (var f = b.types, g = 0; g < f.length; g++)
                    if (e.el.hasClass('mfp-' + f[g])) {
                        d = f[g];
                        break;
                    }
                (e.src = e.el.attr('data-mfp-src')),
                    e.src || (e.src = e.el.attr('href'));
            }
            return (
                (e.type = d || b.st.type || 'inline'),
                (e.index = c),
                (e.parsed = !0),
                (b.items[c] = e),
                y('ElementParse', e),
                b.items[c]
            );
        },
        addGroup: function (a, c) {
            var d = function (d) {
                (d.mfpEl = this), b._openClick(d, a, c);
            };
            c || (c = {});
            var e = 'click.magnificPopup';
            (c.mainEl = a),
                c.items
                    ? ((c.isObj = !0), a.off(e).on(e, d))
                    : ((c.isObj = !1),
                      c.delegate
                          ? a.off(e).on(e, c.delegate, d)
                          : ((c.items = a), a.off(e).on(e, d)));
        },
        _openClick: function (c, d, e) {
            var f =
                void 0 !== e.midClick
                    ? e.midClick
                    : a.magnificPopup.defaults.midClick;
            if (
                f ||
                !(
                    2 === c.which ||
                    c.ctrlKey ||
                    c.metaKey ||
                    c.altKey ||
                    c.shiftKey
                )
            ) {
                var g =
                    void 0 !== e.disableOn
                        ? e.disableOn
                        : a.magnificPopup.defaults.disableOn;
                if (g)
                    if (a.isFunction(g)) {
                        if (!g.call(b)) return !0;
                    } else if (v.width() < g) return !0;
                c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()),
                    (e.el = a(c.mfpEl)),
                    e.delegate && (e.items = d.find(e.delegate)),
                    b.open(e);
            }
        },
        updateStatus: function (a, d) {
            if (b.preloader) {
                c !== a && b.container.removeClass('mfp-s-' + c),
                    d || 'loading' !== a || (d = b.st.tLoading);
                var e = { status: a, text: d };
                y('UpdateStatus', e),
                    (a = e.status),
                    (d = e.text),
                    b.preloader.html(d),
                    b.preloader.find('a').on('click', function (a) {
                        a.stopImmediatePropagation();
                    }),
                    b.container.addClass('mfp-s-' + a),
                    (c = a);
            }
        },
        _checkIfClose: function (c) {
            if (!a(c).hasClass(s)) {
                var d = b.st.closeOnContentClick,
                    e = b.st.closeOnBgClick;
                if (d && e) return !0;
                if (
                    !b.content ||
                    a(c).hasClass('mfp-close') ||
                    (b.preloader && c === b.preloader[0])
                )
                    return !0;
                if (c === b.content[0] || a.contains(b.content[0], c)) {
                    if (d) return !0;
                } else if (e && a.contains(document, c)) return !0;
                return !1;
            }
        },
        _addClassToMFP: function (a) {
            b.bgOverlay.addClass(a), b.wrap.addClass(a);
        },
        _removeClassFromMFP: function (a) {
            this.bgOverlay.removeClass(a), b.wrap.removeClass(a);
        },
        _hasScrollBar: function (a) {
            return (
                (b.isIE7 ? d.height() : document.body.scrollHeight) >
                (a || v.height())
            );
        },
        _setFocus: function () {
            (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus();
        },
        _onFocusIn: function (c) {
            return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target)
                ? void 0
                : (b._setFocus(), !1);
        },
        _parseMarkup: function (b, c, d) {
            var e;
            d.data && (c = a.extend(d.data, c)),
                y(l, [b, c, d]),
                a.each(c, function (c, d) {
                    if (void 0 === d || d === !1) return !0;
                    if (((e = c.split('_')), e.length > 1)) {
                        var f = b.find(p + '-' + e[0]);
                        if (f.length > 0) {
                            var g = e[1];
                            'replaceWith' === g
                                ? f[0] !== d[0] && f.replaceWith(d)
                                : 'img' === g
                                ? f.is('img')
                                    ? f.attr('src', d)
                                    : f.replaceWith(
                                          a('<img>')
                                              .attr('src', d)
                                              .attr('class', f.attr('class'))
                                      )
                                : f.attr(e[1], d);
                        }
                    } else b.find(p + '-' + c).html(d);
                });
        },
        _getScrollbarSize: function () {
            if (void 0 === b.scrollbarSize) {
                var a = document.createElement('div');
                (a.style.cssText =
                    'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;'),
                    document.body.appendChild(a),
                    (b.scrollbarSize = a.offsetWidth - a.clientWidth),
                    document.body.removeChild(a);
            }
            return b.scrollbarSize;
        }
    }),
        (a.magnificPopup = {
            instance: null,
            proto: t.prototype,
            modules: [],
            open: function (b, c) {
                return (
                    A(),
                    (b = b ? a.extend(!0, {}, b) : {}),
                    (b.isObj = !0),
                    (b.index = c || 0),
                    this.instance.open(b)
                );
            },
            close: function () {
                return (
                    a.magnificPopup.instance && a.magnificPopup.instance.close()
                );
            },
            registerModule: function (b, c) {
                c.options && (a.magnificPopup.defaults[b] = c.options),
                    a.extend(this.proto, c.proto),
                    this.modules.push(b);
            },
            defaults: {
                disableOn: 0,
                key: null,
                midClick: !1,
                mainClass: '',
                preloader: !0,
                focus: '',
                closeOnContentClick: !1,
                closeOnBgClick: !0,
                closeBtnInside: !0,
                showCloseBtn: !0,
                enableEscapeKey: !0,
                modal: !1,
                alignTop: !1,
                removalDelay: 0,
                prependTo: null,
                fixedContentPos: 'auto',
                fixedBgPos: 'auto',
                overflowY: 'auto',
                closeMarkup:
                    '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
                tClose: 'Close (Esc)',
                tLoading: 'Loading...',
                autoFocusLast: !0
            }
        }),
        (a.fn.magnificPopup = function (c) {
            A();
            var d = a(this);
            if ('string' == typeof c)
                if ('open' === c) {
                    var e,
                        f = u ? d.data('magnificPopup') : d[0].magnificPopup,
                        g = parseInt(arguments[1], 10) || 0;
                    f.items
                        ? (e = f.items[g])
                        : ((e = d),
                          f.delegate && (e = e.find(f.delegate)),
                          (e = e.eq(g))),
                        b._openClick({ mfpEl: e }, d, f);
                } else
                    b.isOpen &&
                        b[c].apply(b, Array.prototype.slice.call(arguments, 1));
            else
                (c = a.extend(!0, {}, c)),
                    u ? d.data('magnificPopup', c) : (d[0].magnificPopup = c),
                    b.addGroup(d, c);
            return d;
        });
    var C,
        D,
        E,
        F = 'inline',
        G = function () {
            E && (D.after(E.addClass(C)).detach(), (E = null));
        };
    a.magnificPopup.registerModule(F, {
        options: {
            hiddenClass: 'hide',
            markup: '',
            tNotFound: 'Content not found'
        },
        proto: {
            initInline: function () {
                b.types.push(F),
                    w(h + '.' + F, function () {
                        G();
                    });
            },
            getInline: function (c, d) {
                if ((G(), c.src)) {
                    var e = b.st.inline,
                        f = a(c.src);
                    if (f.length) {
                        var g = f[0].parentNode;
                        g &&
                            g.tagName &&
                            (D ||
                                ((C = e.hiddenClass),
                                (D = x(C)),
                                (C = 'mfp-' + C)),
                            (E = f.after(D).detach().removeClass(C))),
                            b.updateStatus('ready');
                    } else
                        b.updateStatus('error', e.tNotFound), (f = a('<div>'));
                    return (c.inlineElement = f), f;
                }
                return b.updateStatus('ready'), b._parseMarkup(d, {}, c), d;
            }
        }
    });
    var H,
        I = 'ajax',
        J = function () {
            H && a(document.body).removeClass(H);
        },
        K = function () {
            J(), b.req && b.req.abort();
        };
    a.magnificPopup.registerModule(I, {
        options: {
            settings: null,
            cursor: 'mfp-ajax-cur',
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function () {
                b.types.push(I),
                    (H = b.st.ajax.cursor),
                    w(h + '.' + I, K),
                    w('BeforeChange.' + I, K);
            },
            getAjax: function (c) {
                H && a(document.body).addClass(H), b.updateStatus('loading');
                var d = a.extend(
                    {
                        url: c.src,
                        success: function (d, e, f) {
                            var g = { data: d, xhr: f };
                            y('ParseAjax', g),
                                b.appendContent(a(g.data), I),
                                (c.finished = !0),
                                J(),
                                b._setFocus(),
                                setTimeout(function () {
                                    b.wrap.addClass(q);
                                }, 16),
                                b.updateStatus('ready'),
                                y('AjaxContentAdded');
                        },
                        error: function () {
                            J(),
                                (c.finished = c.loadError = !0),
                                b.updateStatus(
                                    'error',
                                    b.st.ajax.tError.replace('%url%', c.src)
                                );
                        }
                    },
                    b.st.ajax.settings
                );
                return (b.req = a.ajax(d)), '';
            }
        }
    });
    var L,
        M = function (c) {
            if (c.data && void 0 !== c.data.title) return c.data.title;
            var d = b.st.image.titleSrc;
            if (d) {
                if (a.isFunction(d)) return d.call(b, c);
                if (c.el) return c.el.attr(d) || '';
            }
            return '';
        };
    a.magnificPopup.registerModule('image', {
        options: {
            markup:
                '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: 'mfp-zoom-out-cur',
            titleSrc: 'title',
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function () {
                var c = b.st.image,
                    d = '.image';
                b.types.push('image'),
                    w(m + d, function () {
                        'image' === b.currItem.type &&
                            c.cursor &&
                            a(document.body).addClass(c.cursor);
                    }),
                    w(h + d, function () {
                        c.cursor && a(document.body).removeClass(c.cursor),
                            v.off('resize' + p);
                    }),
                    w('Resize' + d, b.resizeImage),
                    b.isLowIE && w('AfterChange', b.resizeImage);
            },
            resizeImage: function () {
                var a = b.currItem;
                if (a && a.img && b.st.image.verticalFit) {
                    var c = 0;
                    b.isLowIE &&
                        (c =
                            parseInt(a.img.css('padding-top'), 10) +
                            parseInt(a.img.css('padding-bottom'), 10)),
                        a.img.css('max-height', b.wH - c);
                }
            },
            _onImageHasSize: function (a) {
                a.img &&
                    ((a.hasSize = !0),
                    L && clearInterval(L),
                    (a.isCheckingImgSize = !1),
                    y('ImageHasSize', a),
                    a.imgHidden &&
                        (b.content && b.content.removeClass('mfp-loading'),
                        (a.imgHidden = !1)));
            },
            findImageSize: function (a) {
                var c = 0,
                    d = a.img[0],
                    e = function (f) {
                        L && clearInterval(L),
                            (L = setInterval(function () {
                                return d.naturalWidth > 0
                                    ? void b._onImageHasSize(a)
                                    : (c > 200 && clearInterval(L),
                                      c++,
                                      void (3 === c
                                          ? e(10)
                                          : 40 === c
                                          ? e(50)
                                          : 100 === c && e(500)));
                            }, f));
                    };
                e(1);
            },
            getImage: function (c, d) {
                var e = 0,
                    f = function () {
                        c &&
                            (c.img[0].complete
                                ? (c.img.off('.mfploader'),
                                  c === b.currItem &&
                                      (b._onImageHasSize(c),
                                      b.updateStatus('ready')),
                                  (c.hasSize = !0),
                                  (c.loaded = !0),
                                  y('ImageLoadComplete'))
                                : (e++, 200 > e ? setTimeout(f, 100) : g()));
                    },
                    g = function () {
                        c &&
                            (c.img.off('.mfploader'),
                            c === b.currItem &&
                                (b._onImageHasSize(c),
                                b.updateStatus(
                                    'error',
                                    h.tError.replace('%url%', c.src)
                                )),
                            (c.hasSize = !0),
                            (c.loaded = !0),
                            (c.loadError = !0));
                    },
                    h = b.st.image,
                    i = d.find('.mfp-img');
                if (i.length) {
                    var j = document.createElement('img');
                    (j.className = 'mfp-img'),
                        c.el &&
                            c.el.find('img').length &&
                            (j.alt = c.el.find('img').attr('alt')),
                        (c.img = a(j)
                            .on('load.mfploader', f)
                            .on('error.mfploader', g)),
                        (j.src = c.src),
                        i.is('img') && (c.img = c.img.clone()),
                        (j = c.img[0]),
                        j.naturalWidth > 0
                            ? (c.hasSize = !0)
                            : j.width || (c.hasSize = !1);
                }
                return (
                    b._parseMarkup(
                        d,
                        { title: M(c), img_replaceWith: c.img },
                        c
                    ),
                    b.resizeImage(),
                    c.hasSize
                        ? (L && clearInterval(L),
                          c.loadError
                              ? (d.addClass('mfp-loading'),
                                b.updateStatus(
                                    'error',
                                    h.tError.replace('%url%', c.src)
                                ))
                              : (d.removeClass('mfp-loading'),
                                b.updateStatus('ready')),
                          d)
                        : (b.updateStatus('loading'),
                          (c.loading = !0),
                          c.hasSize ||
                              ((c.imgHidden = !0),
                              d.addClass('mfp-loading'),
                              b.findImageSize(c)),
                          d)
                );
            }
        }
    });
    var N,
        O = function () {
            return (
                void 0 === N &&
                    (N =
                        void 0 !==
                        document.createElement('p').style.MozTransform),
                N
            );
        };
    a.magnificPopup.registerModule('zoom', {
        options: {
            enabled: !1,
            easing: 'ease-in-out',
            duration: 300,
            opener: function (a) {
                return a.is('img') ? a : a.find('img');
            }
        },
        proto: {
            initZoom: function () {
                var a,
                    c = b.st.zoom,
                    d = '.zoom';
                if (c.enabled && b.supportsTransition) {
                    var e,
                        f,
                        g = c.duration,
                        j = function (a) {
                            var b = a
                                    .clone()
                                    .removeAttr('style')
                                    .removeAttr('class')
                                    .addClass('mfp-animated-image'),
                                d = 'all ' + c.duration / 1e3 + 's ' + c.easing,
                                e = {
                                    position: 'fixed',
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    '-webkit-backface-visibility': 'hidden'
                                },
                                f = 'transition';
                            return (
                                (e['-webkit-' + f] = e['-moz-' + f] = e[
                                    '-o-' + f
                                ] = e[f] = d),
                                b.css(e),
                                b
                            );
                        },
                        k = function () {
                            b.content.css('visibility', 'visible');
                        };
                    w('BuildControls' + d, function () {
                        if (b._allowZoom()) {
                            if (
                                (clearTimeout(e),
                                b.content.css('visibility', 'hidden'),
                                (a = b._getItemToZoom()),
                                !a)
                            )
                                return void k();
                            (f = j(a)),
                                f.css(b._getOffset()),
                                b.wrap.append(f),
                                (e = setTimeout(function () {
                                    f.css(b._getOffset(!0)),
                                        (e = setTimeout(function () {
                                            k(),
                                                setTimeout(function () {
                                                    f.remove(),
                                                        (a = f = null),
                                                        y('ZoomAnimationEnded');
                                                }, 16);
                                        }, g));
                                }, 16));
                        }
                    }),
                        w(i + d, function () {
                            if (b._allowZoom()) {
                                if (
                                    (clearTimeout(e),
                                    (b.st.removalDelay = g),
                                    !a)
                                ) {
                                    if (((a = b._getItemToZoom()), !a)) return;
                                    f = j(a);
                                }
                                f.css(b._getOffset(!0)),
                                    b.wrap.append(f),
                                    b.content.css('visibility', 'hidden'),
                                    setTimeout(function () {
                                        f.css(b._getOffset());
                                    }, 16);
                            }
                        }),
                        w(h + d, function () {
                            b._allowZoom() &&
                                (k(), f && f.remove(), (a = null));
                        });
                }
            },
            _allowZoom: function () {
                return 'image' === b.currItem.type;
            },
            _getItemToZoom: function () {
                return b.currItem.hasSize ? b.currItem.img : !1;
            },
            _getOffset: function (c) {
                var d;
                d = c
                    ? b.currItem.img
                    : b.st.zoom.opener(b.currItem.el || b.currItem);
                var e = d.offset(),
                    f = parseInt(d.css('padding-top'), 10),
                    g = parseInt(d.css('padding-bottom'), 10);
                e.top -= a(window).scrollTop() - f;
                var h = {
                    width: d.width(),
                    height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f
                };
                return (
                    O()
                        ? (h['-moz-transform'] = h.transform =
                              'translate(' + e.left + 'px,' + e.top + 'px)')
                        : ((h.left = e.left), (h.top = e.top)),
                    h
                );
            }
        }
    });
    var P = 'iframe',
        Q = '//about:blank',
        R = function (a) {
            if (b.currTemplate[P]) {
                var c = b.currTemplate[P].find('iframe');
                c.length &&
                    (a || (c[0].src = Q),
                    b.isIE8 && c.css('display', a ? 'block' : 'none'));
            }
        };
    a.magnificPopup.registerModule(P, {
        options: {
            markup:
                '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: 'iframe_src',
            patterns: {
                youtube: {
                    index: 'youtube.com',
                    id: 'v=',
                    src: '//www.youtube.com/embed/%id%?autoplay=1'
                },
                vimeo: {
                    index: 'vimeo.com/',
                    id: '/',
                    src: '//player.vimeo.com/video/%id%?autoplay=1'
                },
                gmaps: { index: '//maps.google.', src: '%id%&output=embed' }
            }
        },
        proto: {
            initIframe: function () {
                b.types.push(P),
                    w('BeforeChange', function (a, b, c) {
                        b !== c && (b === P ? R() : c === P && R(!0));
                    }),
                    w(h + '.' + P, function () {
                        R();
                    });
            },
            getIframe: function (c, d) {
                var e = c.src,
                    f = b.st.iframe;
                a.each(f.patterns, function () {
                    return e.indexOf(this.index) > -1
                        ? (this.id &&
                              (e =
                                  'string' == typeof this.id
                                      ? e.substr(
                                            e.lastIndexOf(this.id) +
                                                this.id.length,
                                            e.length
                                        )
                                      : this.id.call(this, e)),
                          (e = this.src.replace('%id%', e)),
                          !1)
                        : void 0;
                });
                var g = {};
                return (
                    f.srcAction && (g[f.srcAction] = e),
                    b._parseMarkup(d, g, c),
                    b.updateStatus('ready'),
                    d
                );
            }
        }
    });
    var S = function (a) {
            var c = b.items.length;
            return a > c - 1 ? a - c : 0 > a ? c + a : a;
        },
        T = function (a, b, c) {
            return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c);
        };
    a.magnificPopup.registerModule('gallery', {
        options: {
            enabled: !1,
            arrowMarkup:
                '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: 'Previous (Left arrow key)',
            tNext: 'Next (Right arrow key)',
            tCounter: '%curr% of %total%'
        },
        proto: {
            initGallery: function () {
                var c = b.st.gallery,
                    e = '.mfp-gallery';
                return (
                    (b.direction = !0),
                    c && c.enabled
                        ? ((f += ' mfp-gallery'),
                          w(m + e, function () {
                              c.navigateByImgClick &&
                                  b.wrap.on(
                                      'click' + e,
                                      '.mfp-img',
                                      function () {
                                          return b.items.length > 1
                                              ? (b.next(), !1)
                                              : void 0;
                                      }
                                  ),
                                  d.on('keydown' + e, function (a) {
                                      37 === a.keyCode
                                          ? b.prev()
                                          : 39 === a.keyCode && b.next();
                                  });
                          }),
                          w('UpdateStatus' + e, function (a, c) {
                              c.text &&
                                  (c.text = T(
                                      c.text,
                                      b.currItem.index,
                                      b.items.length
                                  ));
                          }),
                          w(l + e, function (a, d, e, f) {
                              var g = b.items.length;
                              e.counter =
                                  g > 1 ? T(c.tCounter, f.index, g) : '';
                          }),
                          w('BuildControls' + e, function () {
                              if (
                                  b.items.length > 1 &&
                                  c.arrows &&
                                  !b.arrowLeft
                              ) {
                                  var d = c.arrowMarkup,
                                      e = (b.arrowLeft = a(
                                          d
                                              .replace(/%title%/gi, c.tPrev)
                                              .replace(/%dir%/gi, 'left')
                                      ).addClass(s)),
                                      f = (b.arrowRight = a(
                                          d
                                              .replace(/%title%/gi, c.tNext)
                                              .replace(/%dir%/gi, 'right')
                                      ).addClass(s));
                                  e.click(function () {
                                      b.prev();
                                  }),
                                      f.click(function () {
                                          b.next();
                                      }),
                                      b.container.append(e.add(f));
                              }
                          }),
                          w(n + e, function () {
                              b._preloadTimeout &&
                                  clearTimeout(b._preloadTimeout),
                                  (b._preloadTimeout = setTimeout(function () {
                                      b.preloadNearbyImages(),
                                          (b._preloadTimeout = null);
                                  }, 16));
                          }),
                          void w(h + e, function () {
                              d.off(e),
                                  b.wrap.off('click' + e),
                                  (b.arrowRight = b.arrowLeft = null);
                          }))
                        : !1
                );
            },
            next: function () {
                (b.direction = !0),
                    (b.index = S(b.index + 1)),
                    b.updateItemHTML();
            },
            prev: function () {
                (b.direction = !1),
                    (b.index = S(b.index - 1)),
                    b.updateItemHTML();
            },
            goTo: function (a) {
                (b.direction = a >= b.index), (b.index = a), b.updateItemHTML();
            },
            preloadNearbyImages: function () {
                var a,
                    c = b.st.gallery.preload,
                    d = Math.min(c[0], b.items.length),
                    e = Math.min(c[1], b.items.length);
                for (a = 1; a <= (b.direction ? e : d); a++)
                    b._preloadItem(b.index + a);
                for (a = 1; a <= (b.direction ? d : e); a++)
                    b._preloadItem(b.index - a);
            },
            _preloadItem: function (c) {
                if (((c = S(c)), !b.items[c].preloaded)) {
                    var d = b.items[c];
                    d.parsed || (d = b.parseEl(c)),
                        y('LazyLoad', d),
                        'image' === d.type &&
                            (d.img = a('<img class="mfp-img" />')
                                .on('load.mfploader', function () {
                                    d.hasSize = !0;
                                })
                                .on('error.mfploader', function () {
                                    (d.hasSize = !0),
                                        (d.loadError = !0),
                                        y('LazyLoadError', d);
                                })
                                .attr('src', d.src)),
                        (d.preloaded = !0);
                }
            }
        }
    });
    var U = 'retina';
    a.magnificPopup.registerModule(U, {
        options: {
            replaceSrc: function (a) {
                return a.src.replace(/\.\w+$/, function (a) {
                    return '@2x' + a;
                });
            },
            ratio: 1
        },
        proto: {
            initRetina: function () {
                if (window.devicePixelRatio > 1) {
                    var a = b.st.retina,
                        c = a.ratio;
                    (c = isNaN(c) ? c() : c),
                        c > 1 &&
                            (w('ImageHasSize.' + U, function (a, b) {
                                b.img.css({
                                    'max-width': b.img[0].naturalWidth / c,
                                    width: '100%'
                                });
                            }),
                            w('ElementParse.' + U, function (b, d) {
                                d.src = a.replaceSrc(d, c);
                            }));
                }
            }
        }
    }),
        A();
});

/*! highlight.js v9.18.1 | BSD3 License | git.io/hljslicense */
!(function (e) {
    var t =
        ('object' == typeof window && window) ||
        ('object' == typeof self && self);
    'undefined' == typeof exports || exports.nodeType
        ? t &&
          ((t.hljs = e({})),
          'function' == typeof define &&
              define.amd &&
              define([], function () {
                  return t.hljs;
              }))
        : e(exports);
})(function (n) {
    var u = [],
        s = Object.keys,
        w = {},
        b = {},
        x = !0,
        t = /^(no-?highlight|plain|text)$/i,
        p = /\blang(?:uage)?-([\w-]+)\b/i,
        r = /((^(<[^>]+>|\t|)+|(?:\n)))/gm,
        a = {
            case_insensitive: 'cI',
            lexemes: 'l',
            contains: 'c',
            keywords: 'k',
            subLanguage: 'sL',
            className: 'cN',
            begin: 'b',
            beginKeywords: 'bK',
            end: 'e',
            endsWithParent: 'eW',
            illegal: 'i',
            excludeBegin: 'eB',
            excludeEnd: 'eE',
            returnBegin: 'rB',
            returnEnd: 'rE',
            variants: 'v',
            IDENT_RE: 'IR',
            UNDERSCORE_IDENT_RE: 'UIR',
            NUMBER_RE: 'NR',
            C_NUMBER_RE: 'CNR',
            BINARY_NUMBER_RE: 'BNR',
            RE_STARTERS_RE: 'RSR',
            BACKSLASH_ESCAPE: 'BE',
            APOS_STRING_MODE: 'ASM',
            QUOTE_STRING_MODE: 'QSM',
            PHRASAL_WORDS_MODE: 'PWM',
            C_LINE_COMMENT_MODE: 'CLCM',
            C_BLOCK_COMMENT_MODE: 'CBCM',
            HASH_COMMENT_MODE: 'HCM',
            NUMBER_MODE: 'NM',
            C_NUMBER_MODE: 'CNM',
            BINARY_NUMBER_MODE: 'BNM',
            CSS_NUMBER_MODE: 'CSSNM',
            REGEXP_MODE: 'RM',
            TITLE_MODE: 'TM',
            UNDERSCORE_TITLE_MODE: 'UTM',
            COMMENT: 'C',
            beginRe: 'bR',
            endRe: 'eR',
            illegalRe: 'iR',
            lexemesRe: 'lR',
            terminators: 't',
            terminator_end: 'tE'
        },
        k = '</span>',
        E =
            "Could not find the language '{}', did you forget to load/include a language module?",
        M = {
            classPrefix: 'hljs-',
            tabReplace: null,
            useBR: !1,
            languages: void 0
        },
        c = 'of and for in not or if then'.split(' ');
    function C(e) {
        return e
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }
    function f(e) {
        return e.nodeName.toLowerCase();
    }
    function m(e) {
        return t.test(e);
    }
    function i(e) {
        var t,
            r = {},
            a = Array.prototype.slice.call(arguments, 1);
        for (t in e) r[t] = e[t];
        return (
            a.forEach(function (e) {
                for (t in e) r[t] = e[t];
            }),
            r
        );
    }
    function g(e) {
        var n = [];
        return (
            (function e(t, r) {
                for (var a = t.firstChild; a; a = a.nextSibling)
                    3 === a.nodeType
                        ? (r += a.nodeValue.length)
                        : 1 === a.nodeType &&
                          (n.push({ event: 'start', offset: r, node: a }),
                          (r = e(a, r)),
                          f(a).match(/br|hr|img|input/) ||
                              n.push({ event: 'stop', offset: r, node: a }));
                return r;
            })(e, 0),
            n
        );
    }
    function _(e, t, r) {
        var a = 0,
            n = '',
            i = [];
        function s() {
            return e.length && t.length
                ? e[0].offset !== t[0].offset
                    ? e[0].offset < t[0].offset
                        ? e
                        : t
                    : 'start' === t[0].event
                    ? e
                    : t
                : e.length
                ? e
                : t;
        }
        function c(e) {
            n +=
                '<' +
                f(e) +
                u.map
                    .call(e.attributes, function (e) {
                        return (
                            ' ' +
                            e.nodeName +
                            '="' +
                            C(e.value).replace(/"/g, '&quot;') +
                            '"'
                        );
                    })
                    .join('') +
                '>';
        }
        function o(e) {
            n += '</' + f(e) + '>';
        }
        function l(e) {
            ('start' === e.event ? c : o)(e.node);
        }
        for (; e.length || t.length; ) {
            var d = s();
            if (
                ((n += C(r.substring(a, d[0].offset))),
                (a = d[0].offset),
                d === e)
            ) {
                for (
                    i.reverse().forEach(o);
                    l(d.splice(0, 1)[0]),
                        (d = s()) === e && d.length && d[0].offset === a;

                );
                i.reverse().forEach(c);
            } else
                'start' === d[0].event ? i.push(d[0].node) : i.pop(),
                    l(d.splice(0, 1)[0]);
        }
        return n + C(r.substr(a));
    }
    function o(t) {
        return (
            t.v &&
                !t.cached_variants &&
                (t.cached_variants = t.v.map(function (e) {
                    return i(t, { v: null }, e);
                })),
            t.cached_variants
                ? t.cached_variants
                : (function e(t) {
                      return !!t && (t.eW || e(t.starts));
                  })(t)
                ? [i(t, { starts: t.starts ? i(t.starts) : null })]
                : Object.isFrozen(t)
                ? [i(t)]
                : [t]
        );
    }
    function l(e) {
        if (a && !e.langApiRestored) {
            for (var t in ((e.langApiRestored = !0), a))
                e[t] && (e[a[t]] = e[t]);
            (e.c || []).concat(e.v || []).forEach(l);
        }
    }
    function h(t, r) {
        var i = {};
        return (
            'string' == typeof t
                ? a('keyword', t)
                : s(t).forEach(function (e) {
                      a(e, t[e]);
                  }),
            i
        );
        function a(n, e) {
            r && (e = e.toLowerCase()),
                e.split(' ').forEach(function (e) {
                    var t,
                        r,
                        a = e.split('|');
                    i[a[0]] = [
                        n,
                        ((t = a[0]),
                        (r = a[1])
                            ? Number(r)
                            : (function (e) {
                                  return -1 != c.indexOf(e.toLowerCase());
                              })(t)
                            ? 0
                            : 1)
                    ];
                });
        }
    }
    function B(a) {
        function d(e) {
            return (e && e.source) || e;
        }
        function u(e, t) {
            return new RegExp(d(e), 'm' + (a.cI ? 'i' : '') + (t ? 'g' : ''));
        }
        function n(n) {
            var i,
                e,
                s = {},
                c = [],
                o = {},
                r = 1;
            function t(e, t) {
                (s[r] = e),
                    c.push([e, t]),
                    (r +=
                        new RegExp(t.toString() + '|').exec('').length - 1 + 1);
            }
            for (var a = 0; a < n.c.length; a++) {
                t((e = n.c[a]), e.bK ? '\\.?(?:' + e.b + ')\\.?' : e.b);
            }
            n.tE && t('end', n.tE), n.i && t('illegal', n.i);
            var l = c.map(function (e) {
                return e[1];
            });
            return (
                (i = u(
                    (function (e, t) {
                        for (
                            var r = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,
                                a = 0,
                                n = '',
                                i = 0;
                            i < e.length;
                            i++
                        ) {
                            var s = (a += 1),
                                c = d(e[i]);
                            for (0 < i && (n += t), n += '('; 0 < c.length; ) {
                                var o = r.exec(c);
                                if (null == o) {
                                    n += c;
                                    break;
                                }
                                (n += c.substring(0, o.index)),
                                    (c = c.substring(o.index + o[0].length)),
                                    '\\' == o[0][0] && o[1]
                                        ? (n += '\\' + String(Number(o[1]) + s))
                                        : ((n += o[0]), '(' == o[0] && a++);
                            }
                            n += ')';
                        }
                        return n;
                    })(l, '|'),
                    !0
                )),
                (o.lastIndex = 0),
                (o.exec = function (e) {
                    var t;
                    if (0 === c.length) return null;
                    i.lastIndex = o.lastIndex;
                    var r = i.exec(e);
                    if (!r) return null;
                    for (var a = 0; a < r.length; a++)
                        if (null != r[a] && null != s['' + a]) {
                            t = s['' + a];
                            break;
                        }
                    return (
                        'string' == typeof t
                            ? ((r.type = t), (r.extra = [n.i, n.tE]))
                            : ((r.type = 'begin'), (r.rule = t)),
                        r
                    );
                }),
                o
            );
        }
        if (a.c && -1 != a.c.indexOf('self')) {
            if (!x)
                throw new Error(
                    'ERR: contains `self` is not supported at the top-level of a language.  See documentation.'
                );
            a.c = a.c.filter(function (e) {
                return 'self' != e;
            });
        }
        !(function t(r, e) {
            r.compiled ||
                ((r.compiled = !0),
                (r.k = r.k || r.bK),
                r.k && (r.k = h(r.k, a.cI)),
                (r.lR = u(r.l || /\w+/, !0)),
                e &&
                    (r.bK &&
                        (r.b = '\\b(' + r.bK.split(' ').join('|') + ')\\b'),
                    r.b || (r.b = /\B|\b/),
                    (r.bR = u(r.b)),
                    r.endSameAsBegin && (r.e = r.b),
                    r.e || r.eW || (r.e = /\B|\b/),
                    r.e && (r.eR = u(r.e)),
                    (r.tE = d(r.e) || ''),
                    r.eW && e.tE && (r.tE += (r.e ? '|' : '') + e.tE)),
                r.i && (r.iR = u(r.i)),
                null == r.relevance && (r.relevance = 1),
                r.c || (r.c = []),
                (r.c = Array.prototype.concat.apply(
                    [],
                    r.c.map(function (e) {
                        return o('self' === e ? r : e);
                    })
                )),
                r.c.forEach(function (e) {
                    t(e, r);
                }),
                r.starts && t(r.starts, e),
                (r.t = n(r)));
        })(a);
    }
    function R(t, e, n, r) {
        var i = e;
        function c(e, t, r, a) {
            if (!r && '' === t) return '';
            if (!e) return t;
            var n = '<span class="' + (a ? '' : M.classPrefix);
            return (n += e + '">') + t + (r ? '' : k);
        }
        function s() {
            (g += (null != f.sL
                ? function () {
                      var e = 'string' == typeof f.sL;
                      if (e && !w[f.sL]) return C(_);
                      var t = e
                          ? R(f.sL, _, !0, m[f.sL])
                          : S(_, f.sL.length ? f.sL : void 0);
                      return (
                          0 < f.relevance && (h += t.relevance),
                          e && (m[f.sL] = t.top),
                          c(t.language, t.value, !1, !0)
                      );
                  }
                : function () {
                      var e, t, r, a, n, i, s;
                      if (!f.k) return C(_);
                      for (
                          a = '', t = 0, f.lR.lastIndex = 0, r = f.lR.exec(_);
                          r;

                      )
                          (a += C(_.substring(t, r.index))),
                              (n = f),
                              (i = r),
                              (s = b.cI ? i[0].toLowerCase() : i[0]),
                              (e = n.k.hasOwnProperty(s) && n.k[s])
                                  ? ((h += e[1]), (a += c(e[0], C(r[0]))))
                                  : (a += C(r[0])),
                              (t = f.lR.lastIndex),
                              (r = f.lR.exec(_));
                      return a + C(_.substr(t));
                  })()),
                (_ = '');
        }
        function o(e) {
            (g += e.cN ? c(e.cN, '', !0) : ''),
                (f = Object.create(e, { parent: { value: f } }));
        }
        function l(e) {
            var t = e[0],
                r = e.rule;
            return (
                r &&
                    r.endSameAsBegin &&
                    (r.eR = new RegExp(
                        t.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'),
                        'm'
                    )),
                r.skip
                    ? (_ += t)
                    : (r.eB && (_ += t), s(), r.rB || r.eB || (_ = t)),
                o(r),
                r.rB ? 0 : t.length
            );
        }
        function d(e) {
            var t = e[0],
                r = i.substr(e.index),
                a = (function e(t, r) {
                    if (
                        ((a = t.eR),
                        (n = r),
                        (i = a && a.exec(n)) && 0 === i.index)
                    ) {
                        for (; t.endsParent && t.parent; ) t = t.parent;
                        return t;
                    }
                    var a, n, i;
                    if (t.eW) return e(t.parent, r);
                })(f, r);
            if (a) {
                var n = f;
                for (
                    n.skip
                        ? (_ += t)
                        : (n.rE || n.eE || (_ += t), s(), n.eE && (_ = t));
                    f.cN && (g += k),
                        f.skip || f.sL || (h += f.relevance),
                        (f = f.parent) !== a.parent;

                );
                return (
                    a.starts &&
                        (a.endSameAsBegin && (a.starts.eR = a.eR), o(a.starts)),
                    n.rE ? 0 : t.length
                );
            }
        }
        var u = {};
        function a(e, t) {
            var r = t && t[0];
            if (((_ += e), null == r)) return s(), 0;
            if (
                'begin' == u.type &&
                'end' == t.type &&
                u.index == t.index &&
                '' === r
            )
                return (_ += i.slice(t.index, t.index + 1)), 1;
            if ('begin' === (u = t).type) return l(t);
            if ('illegal' === t.type && !n)
                throw new Error(
                    'Illegal lexeme "' +
                        r +
                        '" for mode "' +
                        (f.cN || '<unnamed>') +
                        '"'
                );
            if ('end' === t.type) {
                var a = d(t);
                if (null != a) return a;
            }
            return (_ += r), r.length;
        }
        var b = A(t);
        if (!b)
            throw (
                (console.error(E.replace('{}', t)),
                new Error('Unknown language: "' + t + '"'))
            );
        B(b);
        var p,
            f = r || b,
            m = {},
            g = '';
        for (p = f; p !== b; p = p.parent) p.cN && (g = c(p.cN, '', !0) + g);
        var _ = '',
            h = 0;
        try {
            for (var v, y, N = 0; (f.t.lastIndex = N), (v = f.t.exec(i)); )
                (y = a(i.substring(N, v.index), v)), (N = v.index + y);
            for (a(i.substr(N)), p = f; p.parent; p = p.parent)
                p.cN && (g += k);
            return { relevance: h, value: g, i: !1, language: t, top: f };
        } catch (e) {
            if (e.message && -1 !== e.message.indexOf('Illegal'))
                return { i: !0, relevance: 0, value: C(i) };
            if (x)
                return {
                    relevance: 0,
                    value: C(i),
                    language: t,
                    top: f,
                    errorRaised: e
                };
            throw e;
        }
    }
    function S(r, e) {
        e = e || M.languages || s(w);
        var a = { relevance: 0, value: C(r) },
            n = a;
        return (
            e
                .filter(A)
                .filter(L)
                .forEach(function (e) {
                    var t = R(e, r, !1);
                    (t.language = e),
                        t.relevance > n.relevance && (n = t),
                        t.relevance > a.relevance && ((n = a), (a = t));
                }),
            n.language && (a.second_best = n),
            a
        );
    }
    function v(e) {
        return M.tabReplace || M.useBR
            ? e.replace(r, function (e, t) {
                  return M.useBR && '\n' === e
                      ? '<br>'
                      : M.tabReplace
                      ? t.replace(/\t/g, M.tabReplace)
                      : '';
              })
            : e;
    }
    function d(e) {
        var t,
            r,
            a,
            n,
            i,
            s,
            c,
            o,
            l,
            d,
            u = (function (e) {
                var t,
                    r,
                    a,
                    n,
                    i = e.className + ' ';
                if (
                    ((i += e.parentNode ? e.parentNode.className : ''),
                    (r = p.exec(i)))
                ) {
                    var s = A(r[1]);
                    return (
                        s ||
                            (console.warn(E.replace('{}', r[1])),
                            console.warn(
                                'Falling back to no-highlight mode for this block.',
                                e
                            )),
                        s ? r[1] : 'no-highlight'
                    );
                }
                for (t = 0, a = (i = i.split(/\s+/)).length; t < a; t++)
                    if (m((n = i[t])) || A(n)) return n;
            })(e);
        m(u) ||
            (M.useBR
                ? ((t = document.createElement(
                      'div'
                  )).innerHTML = e.innerHTML
                      .replace(/\n/g, '')
                      .replace(/<br[ \/]*>/g, '\n'))
                : (t = e),
            (i = t.textContent),
            (a = u ? R(u, i, !0) : S(i)),
            (r = g(t)).length &&
                (((n = document.createElement('div')).innerHTML = a.value),
                (a.value = _(r, g(n), i))),
            (a.value = v(a.value)),
            (e.innerHTML = a.value),
            (e.className =
                ((s = e.className),
                (c = u),
                (o = a.language),
                (l = c ? b[c] : o),
                (d = [s.trim()]),
                s.match(/\bhljs\b/) || d.push('hljs'),
                -1 === s.indexOf(l) && d.push(l),
                d.join(' ').trim())),
            (e.result = { language: a.language, re: a.relevance }),
            a.second_best &&
                (e.second_best = {
                    language: a.second_best.language,
                    re: a.second_best.relevance
                }));
    }
    function y() {
        if (!y.called) {
            y.called = !0;
            var e = document.querySelectorAll('pre code');
            u.forEach.call(e, d);
        }
    }
    var N = { disableAutodetect: !0 };
    function A(e) {
        return (e = (e || '').toLowerCase()), w[e] || w[b[e]];
    }
    function L(e) {
        var t = A(e);
        return t && !t.disableAutodetect;
    }
    return (
        (n.highlight = R),
        (n.highlightAuto = S),
        (n.fixMarkup = v),
        (n.highlightBlock = d),
        (n.configure = function (e) {
            M = i(M, e);
        }),
        (n.initHighlighting = y),
        (n.initHighlightingOnLoad = function () {
            window.addEventListener('DOMContentLoaded', y, !1),
                window.addEventListener('load', y, !1);
        }),
        (n.registerLanguage = function (t, e) {
            var r;
            try {
                r = e(n);
            } catch (e) {
                if (
                    (console.error(
                        "Language definition for '{}' could not be registered.".replace(
                            '{}',
                            t
                        )
                    ),
                    !x)
                )
                    throw e;
                console.error(e), (r = N);
            }
            l((w[t] = r)),
                (r.rawDefinition = e.bind(null, n)),
                r.aliases &&
                    r.aliases.forEach(function (e) {
                        b[e] = t;
                    });
        }),
        (n.listLanguages = function () {
            return s(w);
        }),
        (n.getLanguage = A),
        (n.requireLanguage = function (e) {
            var t = A(e);
            if (t) return t;
            throw new Error(
                "The '{}' language is required, but not loaded.".replace(
                    '{}',
                    e
                )
            );
        }),
        (n.autoDetection = L),
        (n.inherit = i),
        (n.debugMode = function () {
            x = !1;
        }),
        (n.IR = n.IDENT_RE = '[a-zA-Z]\\w*'),
        (n.UIR = n.UNDERSCORE_IDENT_RE = '[a-zA-Z_]\\w*'),
        (n.NR = n.NUMBER_RE = '\\b\\d+(\\.\\d+)?'),
        (n.CNR = n.C_NUMBER_RE =
            '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)'),
        (n.BNR = n.BINARY_NUMBER_RE = '\\b(0b[01]+)'),
        (n.RSR = n.RE_STARTERS_RE =
            '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~'),
        (n.BE = n.BACKSLASH_ESCAPE = { b: '\\\\[\\s\\S]', relevance: 0 }),
        (n.ASM = n.APOS_STRING_MODE = {
            cN: 'string',
            b: "'",
            e: "'",
            i: '\\n',
            c: [n.BE]
        }),
        (n.QSM = n.QUOTE_STRING_MODE = {
            cN: 'string',
            b: '"',
            e: '"',
            i: '\\n',
            c: [n.BE]
        }),
        (n.PWM = n.PHRASAL_WORDS_MODE = {
            b: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
        }),
        (n.C = n.COMMENT = function (e, t, r) {
            var a = n.inherit({ cN: 'comment', b: e, e: t, c: [] }, r || {});
            return (
                a.c.push(n.PWM),
                a.c.push({
                    cN: 'doctag',
                    b: '(?:TODO|FIXME|NOTE|BUG|XXX):',
                    relevance: 0
                }),
                a
            );
        }),
        (n.CLCM = n.C_LINE_COMMENT_MODE = n.C('//', '$')),
        (n.CBCM = n.C_BLOCK_COMMENT_MODE = n.C('/\\*', '\\*/')),
        (n.HCM = n.HASH_COMMENT_MODE = n.C('#', '$')),
        (n.NM = n.NUMBER_MODE = { cN: 'number', b: n.NR, relevance: 0 }),
        (n.CNM = n.C_NUMBER_MODE = { cN: 'number', b: n.CNR, relevance: 0 }),
        (n.BNM = n.BINARY_NUMBER_MODE = {
            cN: 'number',
            b: n.BNR,
            relevance: 0
        }),
        (n.CSSNM = n.CSS_NUMBER_MODE = {
            cN: 'number',
            b:
                n.NR +
                '(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?',
            relevance: 0
        }),
        (n.RM = n.REGEXP_MODE = {
            cN: 'regexp',
            b: /\//,
            e: /\/[gimuy]*/,
            i: /\n/,
            c: [n.BE, { b: /\[/, e: /\]/, relevance: 0, c: [n.BE] }]
        }),
        (n.TM = n.TITLE_MODE = { cN: 'title', b: n.IR, relevance: 0 }),
        (n.UTM = n.UNDERSCORE_TITLE_MODE = {
            cN: 'title',
            b: n.UIR,
            relevance: 0
        }),
        (n.METHOD_GUARD = { b: '\\.\\s*' + n.UIR, relevance: 0 }),
        [
            n.BE,
            n.ASM,
            n.QSM,
            n.PWM,
            n.C,
            n.CLCM,
            n.CBCM,
            n.HCM,
            n.NM,
            n.CNM,
            n.BNM,
            n.CSSNM,
            n.RM,
            n.TM,
            n.UTM,
            n.METHOD_GUARD
        ].forEach(function (e) {
            !(function t(r) {
                Object.freeze(r);
                var a = 'function' == typeof r;
                Object.getOwnPropertyNames(r).forEach(function (e) {
                    !r.hasOwnProperty(e) ||
                        null === r[e] ||
                        ('object' != typeof r[e] &&
                            'function' != typeof r[e]) ||
                        (a &&
                            ('caller' === e ||
                                'callee' === e ||
                                'arguments' === e)) ||
                        Object.isFrozen(r[e]) ||
                        t(r[e]);
                });
                return r;
            })(e);
        }),
        n.registerLanguage('apache', function (e) {
            var t = { cN: 'number', b: '[\\$%]\\d+' };
            return {
                aliases: ['apacheconf'],
                cI: !0,
                c: [
                    e.HCM,
                    { cN: 'section', b: '</?', e: '>' },
                    {
                        cN: 'attribute',
                        b: /\w+/,
                        relevance: 0,
                        k: {
                            nomarkup:
                                'order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername'
                        },
                        starts: {
                            e: /$/,
                            relevance: 0,
                            k: { literal: 'on off all' },
                            c: [
                                { cN: 'meta', b: '\\s\\[', e: '\\]$' },
                                {
                                    cN: 'variable',
                                    b: '[\\$%]\\{',
                                    e: '\\}',
                                    c: ['self', t]
                                },
                                t,
                                e.QSM
                            ]
                        }
                    }
                ],
                i: /\S/
            };
        }),
        n.registerLanguage('bash', function (e) {
            var t = {
                    cN: 'variable',
                    v: [{ b: /\$[\w\d#@][\w\d_]*/ }, { b: /\$\{(.*?)}/ }]
                },
                r = {
                    cN: 'string',
                    b: /"/,
                    e: /"/,
                    c: [
                        e.BE,
                        t,
                        { cN: 'variable', b: /\$\(/, e: /\)/, c: [e.BE] }
                    ]
                };
            return {
                aliases: ['sh', 'zsh'],
                l: /\b-?[a-z\._]+\b/,
                k: {
                    keyword:
                        'if then else elif fi for while in do done case esac function',
                    literal: 'true false',
                    built_in:
                        'break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp',
                    _: '-ne -eq -lt -gt -f -d -e -s -l -a'
                },
                c: [
                    { cN: 'meta', b: /^#![^\n]+sh\s*$/, relevance: 10 },
                    {
                        cN: 'function',
                        b: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
                        rB: !0,
                        c: [e.inherit(e.TM, { b: /\w[\w\d_]*/ })],
                        relevance: 0
                    },
                    e.HCM,
                    r,
                    { cN: '', b: /\\"/ },
                    { cN: 'string', b: /'/, e: /'/ },
                    t
                ]
            };
        }),
        n.registerLanguage('coffeescript', function (e) {
            var t = {
                    keyword:
                        'in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super yield import export from as default await then unless until loop of by when and or is isnt not',
                    literal: 'true false null undefined yes no on off',
                    built_in:
                        'npm require console print module global window document'
                },
                r = '[A-Za-z$_][0-9A-Za-z$_]*',
                a = { cN: 'subst', b: /#\{/, e: /}/, k: t },
                n = [
                    e.BNM,
                    e.inherit(e.CNM, {
                        starts: { e: '(\\s*/)?', relevance: 0 }
                    }),
                    {
                        cN: 'string',
                        v: [
                            { b: /'''/, e: /'''/, c: [e.BE] },
                            { b: /'/, e: /'/, c: [e.BE] },
                            { b: /"""/, e: /"""/, c: [e.BE, a] },
                            { b: /"/, e: /"/, c: [e.BE, a] }
                        ]
                    },
                    {
                        cN: 'regexp',
                        v: [
                            { b: '///', e: '///', c: [a, e.HCM] },
                            { b: '//[gim]{0,3}(?=\\W)', relevance: 0 },
                            { b: /\/(?![ *]).*?(?![\\]).\/[gim]{0,3}(?=\W)/ }
                        ]
                    },
                    { b: '@' + r },
                    {
                        sL: 'javascript',
                        eB: !0,
                        eE: !0,
                        v: [
                            { b: '```', e: '```' },
                            { b: '`', e: '`' }
                        ]
                    }
                ];
            a.c = n;
            var i = e.inherit(e.TM, { b: r }),
                s = '(\\(.*\\))?\\s*\\B[-=]>',
                c = {
                    cN: 'params',
                    b: '\\([^\\(]',
                    rB: !0,
                    c: [{ b: /\(/, e: /\)/, k: t, c: ['self'].concat(n) }]
                };
            return {
                aliases: ['coffee', 'cson', 'iced'],
                k: t,
                i: /\/\*/,
                c: n.concat([
                    e.C('###', '###'),
                    e.HCM,
                    {
                        cN: 'function',
                        b: '^\\s*' + r + '\\s*=\\s*' + s,
                        e: '[-=]>',
                        rB: !0,
                        c: [i, c]
                    },
                    {
                        b: /[:\(,=]\s*/,
                        relevance: 0,
                        c: [
                            { cN: 'function', b: s, e: '[-=]>', rB: !0, c: [c] }
                        ]
                    },
                    {
                        cN: 'class',
                        bK: 'class',
                        e: '$',
                        i: /[:="\[\]]/,
                        c: [
                            { bK: 'extends', eW: !0, i: /[:="\[\]]/, c: [i] },
                            i
                        ]
                    },
                    { b: r + ':', e: ':', rB: !0, rE: !0, relevance: 0 }
                ])
            };
        }),
        n.registerLanguage('cpp', function (e) {
            function t(e) {
                return '(?:' + e + ')?';
            }
            var r = 'decltype\\(auto\\)',
                a = '[a-zA-Z_]\\w*::',
                n =
                    (t(a),
                    t('<.*?>'),
                    { cN: 'keyword', b: '\\b[a-z\\d_]*_t\\b' }),
                i = {
                    cN: 'string',
                    v: [
                        { b: '(u8?|U|L)?"', e: '"', i: '\\n', c: [e.BE] },
                        {
                            b:
                                "(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
                            e: "'",
                            i: '.'
                        },
                        { b: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\((?:.|\n)*?\)\1"/ }
                    ]
                },
                s = {
                    cN: 'number',
                    v: [
                        { b: "\\b(0b[01']+)" },
                        {
                            b:
                                "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"
                        },
                        {
                            b:
                                "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
                        }
                    ],
                    relevance: 0
                },
                c = {
                    cN: 'meta',
                    b: /#\s*[a-z]+\b/,
                    e: /$/,
                    k: {
                        'meta-keyword':
                            'if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include'
                    },
                    c: [
                        { b: /\\\n/, relevance: 0 },
                        e.inherit(i, { cN: 'meta-string' }),
                        { cN: 'meta-string', b: /<.*?>/, e: /$/, i: '\\n' },
                        e.CLCM,
                        e.CBCM
                    ]
                },
                o = { cN: 'title', b: t(a) + e.IR, relevance: 0 },
                l = t(a) + e.IR + '\\s*\\(',
                d = {
                    keyword:
                        'int float while private char char8_t char16_t char32_t catch import module export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using asm case typeid wchar_tshort reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignas alignof constexpr consteval constinit decltype concept co_await co_return co_yield requires noexcept static_assert thread_local restrict final override atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong new throw return and and_eq bitand bitor compl not not_eq or or_eq xor xor_eq',
                    built_in:
                        'std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr _Bool complex _Complex imaginary _Imaginary',
                    literal: 'true false nullptr NULL'
                },
                u = [n, e.CLCM, e.CBCM, s, i],
                b = {
                    v: [
                        { b: /=/, e: /;/ },
                        { b: /\(/, e: /\)/ },
                        { bK: 'new throw return else', e: /;/ }
                    ],
                    k: d,
                    c: u.concat([
                        {
                            b: /\(/,
                            e: /\)/,
                            k: d,
                            c: u.concat(['self']),
                            relevance: 0
                        }
                    ]),
                    relevance: 0
                },
                p = {
                    cN: 'function',
                    b:
                        '((decltype\\(auto\\)|(?:[a-zA-Z_]\\w*::)?[a-zA-Z_]\\w*(?:<.*?>)?)[\\*&\\s]+)+' +
                        l,
                    rB: !0,
                    e: /[{;=]/,
                    eE: !0,
                    k: d,
                    i: /[^\w\s\*&:<>]/,
                    c: [
                        { b: r, k: d, relevance: 0 },
                        { b: l, rB: !0, c: [o], relevance: 0 },
                        {
                            cN: 'params',
                            b: /\(/,
                            e: /\)/,
                            k: d,
                            relevance: 0,
                            c: [
                                e.CLCM,
                                e.CBCM,
                                i,
                                s,
                                n,
                                {
                                    b: /\(/,
                                    e: /\)/,
                                    k: d,
                                    relevance: 0,
                                    c: ['self', e.CLCM, e.CBCM, i, s, n]
                                }
                            ]
                        },
                        n,
                        e.CLCM,
                        e.CBCM,
                        c
                    ]
                };
            return {
                aliases: [
                    'c',
                    'cc',
                    'h',
                    'c++',
                    'h++',
                    'hpp',
                    'hh',
                    'hxx',
                    'cxx'
                ],
                k: d,
                i: '</',
                c: [].concat(b, p, u, [
                    c,
                    {
                        b:
                            '\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<',
                        e: '>',
                        k: d,
                        c: ['self', n]
                    },
                    { b: e.IR + '::', k: d },
                    {
                        cN: 'class',
                        bK: 'class struct',
                        e: /[{;:]/,
                        c: [{ b: /</, e: />/, c: ['self'] }, e.TM]
                    }
                ]),
                exports: { preprocessor: c, strings: i, k: d }
            };
        }),
        n.registerLanguage('cs', function (e) {
            var t = {
                    keyword:
                        'abstract as base bool break byte case catch char checked const continue decimal default delegate do double enum event explicit extern finally fixed float for foreach goto if implicit in int interface internal is lock long object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this try typeof uint ulong unchecked unsafe ushort using virtual void volatile while add alias ascending async await by descending dynamic equals from get global group into join let nameof on orderby partial remove select set value var when where yield',
                    literal: 'null false true'
                },
                r = {
                    cN: 'number',
                    v: [
                        { b: "\\b(0b[01']+)" },
                        {
                            b:
                                "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"
                        },
                        {
                            b:
                                "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
                        }
                    ],
                    relevance: 0
                },
                a = { cN: 'string', b: '@"', e: '"', c: [{ b: '""' }] },
                n = e.inherit(a, { i: /\n/ }),
                i = { cN: 'subst', b: '{', e: '}', k: t },
                s = e.inherit(i, { i: /\n/ }),
                c = {
                    cN: 'string',
                    b: /\$"/,
                    e: '"',
                    i: /\n/,
                    c: [{ b: '{{' }, { b: '}}' }, e.BE, s]
                },
                o = {
                    cN: 'string',
                    b: /\$@"/,
                    e: '"',
                    c: [{ b: '{{' }, { b: '}}' }, { b: '""' }, i]
                },
                l = e.inherit(o, {
                    i: /\n/,
                    c: [{ b: '{{' }, { b: '}}' }, { b: '""' }, s]
                });
            (i.c = [o, c, a, e.ASM, e.QSM, r, e.CBCM]),
                (s.c = [
                    l,
                    c,
                    n,
                    e.ASM,
                    e.QSM,
                    r,
                    e.inherit(e.CBCM, { i: /\n/ })
                ]);
            var d = { v: [o, c, a, e.ASM, e.QSM] },
                u = e.IR + '(<' + e.IR + '(\\s*,\\s*' + e.IR + ')*>)?(\\[\\])?';
            return {
                aliases: ['csharp', 'c#'],
                k: t,
                i: /::/,
                c: [
                    e.C('///', '$', {
                        rB: !0,
                        c: [
                            {
                                cN: 'doctag',
                                v: [
                                    { b: '///', relevance: 0 },
                                    { b: '\x3c!--|--\x3e' },
                                    { b: '</?', e: '>' }
                                ]
                            }
                        ]
                    }),
                    e.CLCM,
                    e.CBCM,
                    {
                        cN: 'meta',
                        b: '#',
                        e: '$',
                        k: {
                            'meta-keyword':
                                'if else elif endif define undef warning error line region endregion pragma checksum'
                        }
                    },
                    d,
                    r,
                    {
                        bK: 'class interface',
                        e: /[{;=]/,
                        i: /[^\s:,]/,
                        c: [e.TM, e.CLCM, e.CBCM]
                    },
                    {
                        bK: 'namespace',
                        e: /[{;=]/,
                        i: /[^\s:]/,
                        c: [
                            e.inherit(e.TM, { b: '[a-zA-Z](\\.?\\w)*' }),
                            e.CLCM,
                            e.CBCM
                        ]
                    },
                    {
                        cN: 'meta',
                        b: '^\\s*\\[',
                        eB: !0,
                        e: '\\]',
                        eE: !0,
                        c: [{ cN: 'meta-string', b: /"/, e: /"/ }]
                    },
                    { bK: 'new return throw await else', relevance: 0 },
                    {
                        cN: 'function',
                        b: '(' + u + '\\s+)+' + e.IR + '\\s*\\(',
                        rB: !0,
                        e: /\s*[{;=]/,
                        eE: !0,
                        k: t,
                        c: [
                            {
                                b: e.IR + '\\s*\\(',
                                rB: !0,
                                c: [e.TM],
                                relevance: 0
                            },
                            {
                                cN: 'params',
                                b: /\(/,
                                e: /\)/,
                                eB: !0,
                                eE: !0,
                                k: t,
                                relevance: 0,
                                c: [d, r, e.CBCM]
                            },
                            e.CLCM,
                            e.CBCM
                        ]
                    }
                ]
            };
        }),
        n.registerLanguage('css', function (e) {
            var t = {
                b: /(?:[A-Z\_\.\-]+|--[a-zA-Z0-9_-]+)\s*:/,
                rB: !0,
                e: ';',
                eW: !0,
                c: [
                    {
                        cN: 'attribute',
                        b: /\S/,
                        e: ':',
                        eE: !0,
                        starts: {
                            eW: !0,
                            eE: !0,
                            c: [
                                {
                                    b: /[\w-]+\(/,
                                    rB: !0,
                                    c: [
                                        { cN: 'built_in', b: /[\w-]+/ },
                                        {
                                            b: /\(/,
                                            e: /\)/,
                                            c: [e.ASM, e.QSM, e.CSSNM]
                                        }
                                    ]
                                },
                                e.CSSNM,
                                e.QSM,
                                e.ASM,
                                e.CBCM,
                                { cN: 'number', b: '#[0-9A-Fa-f]+' },
                                { cN: 'meta', b: '!important' }
                            ]
                        }
                    }
                ]
            };
            return {
                cI: !0,
                i: /[=\/|'\$]/,
                c: [
                    e.CBCM,
                    { cN: 'selector-id', b: /#[A-Za-z0-9_-]+/ },
                    { cN: 'selector-class', b: /\.[A-Za-z0-9_-]+/ },
                    {
                        cN: 'selector-attr',
                        b: /\[/,
                        e: /\]/,
                        i: '$',
                        c: [e.ASM, e.QSM]
                    },
                    {
                        cN: 'selector-pseudo',
                        b: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/
                    },
                    {
                        b: '@(page|font-face)',
                        l: '@[a-z-]+',
                        k: '@page @font-face'
                    },
                    {
                        b: '@',
                        e: '[{;]',
                        i: /:/,
                        rB: !0,
                        c: [
                            { cN: 'keyword', b: /@\-?\w[\w]*(\-\w+)*/ },
                            {
                                b: /\s/,
                                eW: !0,
                                eE: !0,
                                relevance: 0,
                                k: 'and or not only',
                                c: [
                                    { b: /[a-z-]+:/, cN: 'attribute' },
                                    e.ASM,
                                    e.QSM,
                                    e.CSSNM
                                ]
                            }
                        ]
                    },
                    {
                        cN: 'selector-tag',
                        b: '[a-zA-Z-][a-zA-Z0-9_-]*',
                        relevance: 0
                    },
                    { b: '{', e: '}', i: /\S/, c: [e.CBCM, t] }
                ]
            };
        }),
        n.registerLanguage('diff', function (e) {
            return {
                aliases: ['patch'],
                c: [
                    {
                        cN: 'meta',
                        relevance: 10,
                        v: [
                            { b: /^@@ +\-\d+,\d+ +\+\d+,\d+ +@@$/ },
                            { b: /^\*\*\* +\d+,\d+ +\*\*\*\*$/ },
                            { b: /^\-\-\- +\d+,\d+ +\-\-\-\-$/ }
                        ]
                    },
                    {
                        cN: 'comment',
                        v: [
                            { b: /Index: /, e: /$/ },
                            { b: /={3,}/, e: /$/ },
                            { b: /^\-{3}/, e: /$/ },
                            { b: /^\*{3} /, e: /$/ },
                            { b: /^\+{3}/, e: /$/ },
                            { b: /^\*{15}$/ }
                        ]
                    },
                    { cN: 'addition', b: '^\\+', e: '$' },
                    { cN: 'deletion', b: '^\\-', e: '$' },
                    { cN: 'addition', b: '^\\!', e: '$' }
                ]
            };
        }),
        n.registerLanguage('go', function (e) {
            var t = {
                keyword:
                    'break default func interface select case map struct chan else goto package switch const fallthrough if range type continue for import return var go defer bool byte complex64 complex128 float32 float64 int8 int16 int32 int64 string uint8 uint16 uint32 uint64 int uint uintptr rune',
                literal: 'true false iota nil',
                built_in:
                    'append cap close complex copy imag len make new panic print println real recover delete'
            };
            return {
                aliases: ['golang'],
                k: t,
                i: '</',
                c: [
                    e.CLCM,
                    e.CBCM,
                    { cN: 'string', v: [e.QSM, e.ASM, { b: '`', e: '`' }] },
                    {
                        cN: 'number',
                        v: [{ b: e.CNR + '[i]', relevance: 1 }, e.CNM]
                    },
                    { b: /:=/ },
                    {
                        cN: 'function',
                        bK: 'func',
                        e: '\\s*(\\{|$)',
                        eE: !0,
                        c: [
                            e.TM,
                            { cN: 'params', b: /\(/, e: /\)/, k: t, i: /["']/ }
                        ]
                    }
                ]
            };
        }),
        n.registerLanguage('http', function (e) {
            var t = 'HTTP/[0-9\\.]+';
            return {
                aliases: ['https'],
                i: '\\S',
                c: [
                    {
                        b: '^' + t,
                        e: '$',
                        c: [{ cN: 'number', b: '\\b\\d{3}\\b' }]
                    },
                    {
                        b: '^[A-Z]+ (.*?) ' + t + '$',
                        rB: !0,
                        e: '$',
                        c: [
                            { cN: 'string', b: ' ', e: ' ', eB: !0, eE: !0 },
                            { b: t },
                            { cN: 'keyword', b: '[A-Z]+' }
                        ]
                    },
                    {
                        cN: 'attribute',
                        b: '^\\w',
                        e: ': ',
                        eE: !0,
                        i: '\\n|\\s|=',
                        starts: { e: '$', relevance: 0 }
                    },
                    { b: '\\n\\n', starts: { sL: [], eW: !0 } }
                ]
            };
        }),
        n.registerLanguage('ini', function (e) {
            var t = {
                    cN: 'number',
                    relevance: 0,
                    v: [{ b: /([\+\-]+)?[\d]+_[\d_]+/ }, { b: e.NR }]
                },
                r = e.C();
            r.v = [
                { b: /;/, e: /$/ },
                { b: /#/, e: /$/ }
            ];
            var a = {
                    cN: 'variable',
                    v: [{ b: /\$[\w\d"][\w\d_]*/ }, { b: /\$\{(.*?)}/ }]
                },
                n = { cN: 'literal', b: /\bon|off|true|false|yes|no\b/ },
                i = {
                    cN: 'string',
                    c: [e.BE],
                    v: [
                        { b: "'''", e: "'''", relevance: 10 },
                        { b: '"""', e: '"""', relevance: 10 },
                        { b: '"', e: '"' },
                        { b: "'", e: "'" }
                    ]
                };
            return {
                aliases: ['toml'],
                cI: !0,
                i: /\S/,
                c: [
                    r,
                    { cN: 'section', b: /\[+/, e: /\]+/ },
                    {
                        b: /^[a-z0-9\[\]_\.-]+(?=\s*=\s*)/,
                        cN: 'attr',
                        starts: {
                            e: /$/,
                            c: [
                                r,
                                {
                                    b: /\[/,
                                    e: /\]/,
                                    c: [r, n, a, i, t, 'self'],
                                    relevance: 0
                                },
                                n,
                                a,
                                i,
                                t
                            ]
                        }
                    }
                ]
            };
        }),
        n.registerLanguage('java', function (e) {
            var t =
                    'false synchronized int abstract float private char boolean var static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private module requires exports do',
                r = {
                    cN: 'number',
                    b:
                        '\\b(0[bB]([01]+[01_]+[01]+|[01]+)|0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)|(([\\d]+[\\d_]+[\\d]+|[\\d]+)(\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))?|\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))([eE][-+]?\\d+)?)[lLfF]?',
                    relevance: 0
                };
            return {
                aliases: ['jsp'],
                k: t,
                i: /<\/|#/,
                c: [
                    e.C('/\\*\\*', '\\*/', {
                        relevance: 0,
                        c: [
                            { b: /\w+@/, relevance: 0 },
                            { cN: 'doctag', b: '@[A-Za-z]+' }
                        ]
                    }),
                    e.CLCM,
                    e.CBCM,
                    e.ASM,
                    e.QSM,
                    {
                        cN: 'class',
                        bK: 'class interface',
                        e: /[{;=]/,
                        eE: !0,
                        k: 'class interface',
                        i: /[:"\[\]]/,
                        c: [{ bK: 'extends implements' }, e.UTM]
                    },
                    { bK: 'new throw return else', relevance: 0 },
                    {
                        cN: 'function',
                        b:
                            '([À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*(<[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*(\\s*,\\s*[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*)*>)?\\s+)+' +
                            e.UIR +
                            '\\s*\\(',
                        rB: !0,
                        e: /[{;=]/,
                        eE: !0,
                        k: t,
                        c: [
                            {
                                b: e.UIR + '\\s*\\(',
                                rB: !0,
                                relevance: 0,
                                c: [e.UTM]
                            },
                            {
                                cN: 'params',
                                b: /\(/,
                                e: /\)/,
                                k: t,
                                relevance: 0,
                                c: [e.ASM, e.QSM, e.CNM, e.CBCM]
                            },
                            e.CLCM,
                            e.CBCM
                        ]
                    },
                    r,
                    { cN: 'meta', b: '@[A-Za-z]+' }
                ]
            };
        }),
        n.registerLanguage('javascript', function (e) {
            var t = '<>',
                r = '</>',
                a = {
                    b: /<[A-Za-z0-9\\._:-]+/,
                    e: /\/[A-Za-z0-9\\._:-]+>|\/>/
                },
                n = '[A-Za-z$_][0-9A-Za-z$_]*',
                i = {
                    keyword:
                        'in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as',
                    literal: 'true false null undefined NaN Infinity',
                    built_in:
                        'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise'
                },
                s = {
                    cN: 'number',
                    v: [
                        { b: '\\b(0[bB][01]+)n?' },
                        { b: '\\b(0[oO][0-7]+)n?' },
                        { b: e.CNR + 'n?' }
                    ],
                    relevance: 0
                },
                c = { cN: 'subst', b: '\\$\\{', e: '\\}', k: i, c: [] },
                o = {
                    b: 'html`',
                    e: '',
                    starts: { e: '`', rE: !1, c: [e.BE, c], sL: 'xml' }
                },
                l = {
                    b: 'css`',
                    e: '',
                    starts: { e: '`', rE: !1, c: [e.BE, c], sL: 'css' }
                },
                d = { cN: 'string', b: '`', e: '`', c: [e.BE, c] };
            c.c = [e.ASM, e.QSM, o, l, d, s, e.RM];
            var u = c.c.concat([e.CBCM, e.CLCM]);
            return {
                aliases: ['js', 'jsx', 'mjs', 'cjs'],
                k: i,
                c: [
                    {
                        cN: 'meta',
                        relevance: 10,
                        b: /^\s*['"]use (strict|asm)['"]/
                    },
                    { cN: 'meta', b: /^#!/, e: /$/ },
                    e.ASM,
                    e.QSM,
                    o,
                    l,
                    d,
                    e.CLCM,
                    e.C('/\\*\\*', '\\*/', {
                        relevance: 0,
                        c: [
                            {
                                cN: 'doctag',
                                b: '@[A-Za-z]+',
                                c: [
                                    {
                                        cN: 'type',
                                        b: '\\{',
                                        e: '\\}',
                                        relevance: 0
                                    },
                                    {
                                        cN: 'variable',
                                        b: n + '(?=\\s*(-)|$)',
                                        endsParent: !0,
                                        relevance: 0
                                    },
                                    { b: /(?=[^\n])\s/, relevance: 0 }
                                ]
                            }
                        ]
                    }),
                    e.CBCM,
                    s,
                    {
                        b: /[{,\n]\s*/,
                        relevance: 0,
                        c: [
                            {
                                b: n + '\\s*:',
                                rB: !0,
                                relevance: 0,
                                c: [{ cN: 'attr', b: n, relevance: 0 }]
                            }
                        ]
                    },
                    {
                        b: '(' + e.RSR + '|\\b(case|return|throw)\\b)\\s*',
                        k: 'return throw case',
                        c: [
                            e.CLCM,
                            e.CBCM,
                            e.RM,
                            {
                                cN: 'function',
                                b: '(\\(.*?\\)|' + n + ')\\s*=>',
                                rB: !0,
                                e: '\\s*=>',
                                c: [
                                    {
                                        cN: 'params',
                                        v: [
                                            { b: n },
                                            { b: /\(\s*\)/ },
                                            {
                                                b: /\(/,
                                                e: /\)/,
                                                eB: !0,
                                                eE: !0,
                                                k: i,
                                                c: u
                                            }
                                        ]
                                    }
                                ]
                            },
                            { cN: '', b: /\s/, e: /\s*/, skip: !0 },
                            {
                                v: [
                                    { b: t, e: r },
                                    { b: a.b, e: a.e }
                                ],
                                sL: 'xml',
                                c: [{ b: a.b, e: a.e, skip: !0, c: ['self'] }]
                            }
                        ],
                        relevance: 0
                    },
                    {
                        cN: 'function',
                        bK: 'function',
                        e: /\{/,
                        eE: !0,
                        c: [
                            e.inherit(e.TM, { b: n }),
                            {
                                cN: 'params',
                                b: /\(/,
                                e: /\)/,
                                eB: !0,
                                eE: !0,
                                c: u
                            }
                        ],
                        i: /\[|%/
                    },
                    { b: /\$[(.]/ },
                    e.METHOD_GUARD,
                    {
                        cN: 'class',
                        bK: 'class',
                        e: /[{;=]/,
                        eE: !0,
                        i: /[:"\[\]]/,
                        c: [{ bK: 'extends' }, e.UTM]
                    },
                    { bK: 'constructor get set', e: /\{/, eE: !0 }
                ],
                i: /#(?!!)/
            };
        }),
        n.registerLanguage('json', function (e) {
            var t = { literal: 'true false null' },
                r = [e.CLCM, e.CBCM],
                a = [e.QSM, e.CNM],
                n = { e: ',', eW: !0, eE: !0, c: a, k: t },
                i = {
                    b: '{',
                    e: '}',
                    c: [
                        { cN: 'attr', b: /"/, e: /"/, c: [e.BE], i: '\\n' },
                        e.inherit(n, { b: /:/ })
                    ].concat(r),
                    i: '\\S'
                },
                s = { b: '\\[', e: '\\]', c: [e.inherit(n)], i: '\\S' };
            return (
                a.push(i, s),
                r.forEach(function (e) {
                    a.push(e);
                }),
                { c: a, k: t, i: '\\S' }
            );
        }),
        n.registerLanguage('kotlin', function (e) {
            var t = {
                    keyword:
                        'abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual trait volatile transient native default',
                    built_in:
                        'Byte Short Char Int Long Boolean Float Double Void Unit Nothing',
                    literal: 'true false null'
                },
                r = { cN: 'symbol', b: e.UIR + '@' },
                a = { cN: 'subst', b: '\\${', e: '}', c: [e.CNM] },
                n = { cN: 'variable', b: '\\$' + e.UIR },
                i = {
                    cN: 'string',
                    v: [
                        { b: '"""', e: '"""(?=[^"])', c: [n, a] },
                        { b: "'", e: "'", i: /\n/, c: [e.BE] },
                        { b: '"', e: '"', i: /\n/, c: [e.BE, n, a] }
                    ]
                };
            a.c.push(i);
            var s = {
                    cN: 'meta',
                    b:
                        '@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*' +
                        e.UIR +
                        ')?'
                },
                c = {
                    cN: 'meta',
                    b: '@' + e.UIR,
                    c: [
                        {
                            b: /\(/,
                            e: /\)/,
                            c: [e.inherit(i, { cN: 'meta-string' })]
                        }
                    ]
                },
                o = {
                    cN: 'number',
                    b:
                        '\\b(0[bB]([01]+[01_]+[01]+|[01]+)|0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)|(([\\d]+[\\d_]+[\\d]+|[\\d]+)(\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))?|\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))([eE][-+]?\\d+)?)[lLfF]?',
                    relevance: 0
                },
                l = e.C('/\\*', '\\*/', { c: [e.CBCM] }),
                d = {
                    v: [
                        { cN: 'type', b: e.UIR },
                        { b: /\(/, e: /\)/, c: [] }
                    ]
                },
                u = d;
            return (
                (u.v[1].c = [d]),
                (d.v[1].c = [u]),
                {
                    aliases: ['kt'],
                    k: t,
                    c: [
                        e.C('/\\*\\*', '\\*/', {
                            relevance: 0,
                            c: [{ cN: 'doctag', b: '@[A-Za-z]+' }]
                        }),
                        e.CLCM,
                        l,
                        {
                            cN: 'keyword',
                            b: /\b(break|continue|return|this)\b/,
                            starts: { c: [{ cN: 'symbol', b: /@\w+/ }] }
                        },
                        r,
                        s,
                        c,
                        {
                            cN: 'function',
                            bK: 'fun',
                            e: '[(]|$',
                            rB: !0,
                            eE: !0,
                            k: t,
                            i: /fun\s+(<.*>)?[^\s\(]+(\s+[^\s\(]+)\s*=/,
                            relevance: 5,
                            c: [
                                {
                                    b: e.UIR + '\\s*\\(',
                                    rB: !0,
                                    relevance: 0,
                                    c: [e.UTM]
                                },
                                {
                                    cN: 'type',
                                    b: /</,
                                    e: />/,
                                    k: 'reified',
                                    relevance: 0
                                },
                                {
                                    cN: 'params',
                                    b: /\(/,
                                    e: /\)/,
                                    endsParent: !0,
                                    k: t,
                                    relevance: 0,
                                    c: [
                                        {
                                            b: /:/,
                                            e: /[=,\/]/,
                                            eW: !0,
                                            c: [d, e.CLCM, l],
                                            relevance: 0
                                        },
                                        e.CLCM,
                                        l,
                                        s,
                                        c,
                                        i,
                                        e.CNM
                                    ]
                                },
                                l
                            ]
                        },
                        {
                            cN: 'class',
                            bK: 'class interface trait',
                            e: /[:\{(]|$/,
                            eE: !0,
                            i: 'extends implements',
                            c: [
                                {
                                    bK:
                                        'public protected internal private constructor'
                                },
                                e.UTM,
                                {
                                    cN: 'type',
                                    b: /</,
                                    e: />/,
                                    eB: !0,
                                    eE: !0,
                                    relevance: 0
                                },
                                {
                                    cN: 'type',
                                    b: /[,:]\s*/,
                                    e: /[<\(,]|$/,
                                    eB: !0,
                                    rE: !0
                                },
                                s,
                                c
                            ]
                        },
                        i,
                        { cN: 'meta', b: '^#!/usr/bin/env', e: '$', i: '\n' },
                        o
                    ]
                }
            );
        }),
        n.registerLanguage('less', function (e) {
            function t(e) {
                return { cN: 'string', b: '~?' + e + '.*?' + e };
            }
            function r(e, t, r) {
                return { cN: e, b: t, relevance: r };
            }
            var a = '[\\w-]+',
                n = '(' + a + '|@{' + a + '})',
                i = [],
                s = [],
                c = { b: '\\(', e: '\\)', c: s, relevance: 0 };
            s.push(
                e.CLCM,
                e.CBCM,
                t("'"),
                t('"'),
                e.CSSNM,
                {
                    b: '(url|data-uri)\\(',
                    starts: { cN: 'string', e: '[\\)\\n]', eE: !0 }
                },
                r('number', '#[0-9A-Fa-f]+\\b'),
                c,
                r('variable', '@@?' + a, 10),
                r('variable', '@{' + a + '}'),
                r('built_in', '~?`[^`]*?`'),
                { cN: 'attribute', b: a + '\\s*:', e: ':', rB: !0, eE: !0 },
                { cN: 'meta', b: '!important' }
            );
            var o = s.concat({ b: '{', e: '}', c: i }),
                l = { bK: 'when', eW: !0, c: [{ bK: 'and not' }].concat(s) },
                d = {
                    b: n + '\\s*:',
                    rB: !0,
                    e: '[;}]',
                    relevance: 0,
                    c: [
                        {
                            cN: 'attribute',
                            b: n,
                            e: ':',
                            eE: !0,
                            starts: { eW: !0, i: '[<=$]', relevance: 0, c: s }
                        }
                    ]
                },
                u = {
                    cN: 'keyword',
                    b:
                        '@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b',
                    starts: { e: '[;{}]', rE: !0, c: s, relevance: 0 }
                },
                b = {
                    cN: 'variable',
                    v: [
                        { b: '@' + a + '\\s*:', relevance: 15 },
                        { b: '@' + a }
                    ],
                    starts: { e: '[;}]', rE: !0, c: o }
                },
                p = {
                    v: [
                        { b: '[\\.#:&\\[>]', e: '[;{}]' },
                        { b: n, e: '{' }
                    ],
                    rB: !0,
                    rE: !0,
                    i: '[<=\'$"]',
                    relevance: 0,
                    c: [
                        e.CLCM,
                        e.CBCM,
                        l,
                        r('keyword', 'all\\b'),
                        r('variable', '@{' + a + '}'),
                        r('selector-tag', n + '%?', 0),
                        r('selector-id', '#' + n),
                        r('selector-class', '\\.' + n, 0),
                        r('selector-tag', '&', 0),
                        { cN: 'selector-attr', b: '\\[', e: '\\]' },
                        {
                            cN: 'selector-pseudo',
                            b: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/
                        },
                        { b: '\\(', e: '\\)', c: o },
                        { b: '!important' }
                    ]
                };
            return (
                i.push(e.CLCM, e.CBCM, u, b, d, p),
                { cI: !0, i: '[=>\'/<($"]', c: i }
            );
        }),
        n.registerLanguage('lua', function (e) {
            var t = '\\[=*\\[',
                r = '\\]=*\\]',
                a = { b: t, e: r, c: ['self'] },
                n = [
                    e.C('--(?!' + t + ')', '$'),
                    e.C('--' + t, r, { c: [a], relevance: 10 })
                ];
            return {
                l: e.UIR,
                k: {
                    literal: 'true false nil',
                    keyword:
                        'and break do else elseif end for goto if in local not or repeat return then until while',
                    built_in:
                        '_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len __gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstringmodule next pairs pcall print rawequal rawget rawset require select setfenvsetmetatable tonumber tostring type unpack xpcall arg selfcoroutine resume yield status wrap create running debug getupvalue debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv io lines write close flush open output type read stderr stdin input stdout popen tmpfile math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower table setn insert getn foreachi maxn foreach concat sort remove'
                },
                c: n.concat([
                    {
                        cN: 'function',
                        bK: 'function',
                        e: '\\)',
                        c: [
                            e.inherit(e.TM, {
                                b:
                                    '([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*'
                            }),
                            { cN: 'params', b: '\\(', eW: !0, c: n }
                        ].concat(n)
                    },
                    e.CNM,
                    e.ASM,
                    e.QSM,
                    { cN: 'string', b: t, e: r, c: [a], relevance: 5 }
                ])
            };
        }),
        n.registerLanguage('makefile', function (e) {
            var t = {
                    cN: 'variable',
                    v: [
                        { b: '\\$\\(' + e.UIR + '\\)', c: [e.BE] },
                        { b: /\$[@%<?\^\+\*]/ }
                    ]
                },
                r = { cN: 'string', b: /"/, e: /"/, c: [e.BE, t] },
                a = {
                    cN: 'variable',
                    b: /\$\([\w-]+\s/,
                    e: /\)/,
                    k: {
                        built_in:
                            'subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value'
                    },
                    c: [t]
                },
                n = { b: '^' + e.UIR + '\\s*(?=[:+?]?=)' },
                i = { cN: 'section', b: /^[^\s]+:/, e: /$/, c: [t] };
            return {
                aliases: ['mk', 'mak'],
                k:
                    'define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath',
                l: /[\w-]+/,
                c: [
                    e.HCM,
                    t,
                    r,
                    a,
                    n,
                    {
                        cN: 'meta',
                        b: /^\.PHONY:/,
                        e: /$/,
                        k: { 'meta-keyword': '.PHONY' },
                        l: /[\.\w]+/
                    },
                    i
                ]
            };
        }),
        n.registerLanguage('xml', function (e) {
            var t = { cN: 'symbol', b: '&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;' },
                r = {
                    b: '\\s',
                    c: [
                        {
                            cN: 'meta-keyword',
                            b: '#?[a-z_][a-z1-9_-]+',
                            i: '\\n'
                        }
                    ]
                },
                a = e.inherit(r, { b: '\\(', e: '\\)' }),
                n = e.inherit(e.ASM, { cN: 'meta-string' }),
                i = e.inherit(e.QSM, { cN: 'meta-string' }),
                s = {
                    eW: !0,
                    i: /</,
                    relevance: 0,
                    c: [
                        { cN: 'attr', b: '[A-Za-z0-9\\._:-]+', relevance: 0 },
                        {
                            b: /=\s*/,
                            relevance: 0,
                            c: [
                                {
                                    cN: 'string',
                                    endsParent: !0,
                                    v: [
                                        { b: /"/, e: /"/, c: [t] },
                                        { b: /'/, e: /'/, c: [t] },
                                        { b: /[^\s"'=<>`]+/ }
                                    ]
                                }
                            ]
                        }
                    ]
                };
            return {
                aliases: [
                    'html',
                    'xhtml',
                    'rss',
                    'atom',
                    'xjb',
                    'xsd',
                    'xsl',
                    'plist',
                    'wsf',
                    'svg'
                ],
                cI: !0,
                c: [
                    {
                        cN: 'meta',
                        b: '<![a-z]',
                        e: '>',
                        relevance: 10,
                        c: [
                            r,
                            i,
                            n,
                            a,
                            {
                                b: '\\[',
                                e: '\\]',
                                c: [
                                    {
                                        cN: 'meta',
                                        b: '<![a-z]',
                                        e: '>',
                                        c: [r, a, i, n]
                                    }
                                ]
                            }
                        ]
                    },
                    e.C('\x3c!--', '--\x3e', { relevance: 10 }),
                    { b: '<\\!\\[CDATA\\[', e: '\\]\\]>', relevance: 10 },
                    t,
                    { cN: 'meta', b: /<\?xml/, e: /\?>/, relevance: 10 },
                    {
                        b: /<\?(php)?/,
                        e: /\?>/,
                        sL: 'php',
                        c: [
                            { b: '/\\*', e: '\\*/', skip: !0 },
                            { b: 'b"', e: '"', skip: !0 },
                            { b: "b'", e: "'", skip: !0 },
                            e.inherit(e.ASM, {
                                i: null,
                                cN: null,
                                c: null,
                                skip: !0
                            }),
                            e.inherit(e.QSM, {
                                i: null,
                                cN: null,
                                c: null,
                                skip: !0
                            })
                        ]
                    },
                    {
                        cN: 'tag',
                        b: '<style(?=\\s|>)',
                        e: '>',
                        k: { name: 'style' },
                        c: [s],
                        starts: { e: '</style>', rE: !0, sL: ['css', 'xml'] }
                    },
                    {
                        cN: 'tag',
                        b: '<script(?=\\s|>)',
                        e: '>',
                        k: { name: 'script' },
                        c: [s],
                        starts: {
                            e: '</script>',
                            rE: !0,
                            sL: [
                                'actionscript',
                                'javascript',
                                'handlebars',
                                'xml'
                            ]
                        }
                    },
                    {
                        cN: 'tag',
                        b: '</?',
                        e: '/?>',
                        c: [{ cN: 'name', b: /[^\/><\s]+/, relevance: 0 }, s]
                    }
                ]
            };
        }),
        n.registerLanguage('markdown', function (e) {
            return {
                aliases: ['md', 'mkdown', 'mkd'],
                c: [
                    {
                        cN: 'section',
                        v: [{ b: '^#{1,6}', e: '$' }, { b: '^.+?\\n[=-]{2,}$' }]
                    },
                    { b: '<', e: '>', sL: 'xml', relevance: 0 },
                    { cN: 'bullet', b: '^\\s*([*+-]|(\\d+\\.))\\s+' },
                    { cN: 'strong', b: '[*_]{2}.+?[*_]{2}' },
                    {
                        cN: 'emphasis',
                        v: [{ b: '\\*.+?\\*' }, { b: '_.+?_', relevance: 0 }]
                    },
                    { cN: 'quote', b: '^>\\s+', e: '$' },
                    {
                        cN: 'code',
                        v: [
                            { b: '^```\\w*\\s*$', e: '^```[ ]*$' },
                            { b: '`.+?`' },
                            { b: '^( {4}|\\t)', e: '$', relevance: 0 }
                        ]
                    },
                    { b: '^[-\\*]{3,}', e: '$' },
                    {
                        b: '\\[.+?\\][\\(\\[].*?[\\)\\]]',
                        rB: !0,
                        c: [
                            {
                                cN: 'string',
                                b: '\\[',
                                e: '\\]',
                                eB: !0,
                                rE: !0,
                                relevance: 0
                            },
                            {
                                cN: 'link',
                                b: '\\]\\(',
                                e: '\\)',
                                eB: !0,
                                eE: !0
                            },
                            {
                                cN: 'symbol',
                                b: '\\]\\[',
                                e: '\\]',
                                eB: !0,
                                eE: !0
                            }
                        ],
                        relevance: 10
                    },
                    {
                        b: /^\[[^\n]+\]:/,
                        rB: !0,
                        c: [
                            { cN: 'symbol', b: /\[/, e: /\]/, eB: !0, eE: !0 },
                            { cN: 'link', b: /:\s*/, e: /$/, eB: !0 }
                        ]
                    }
                ]
            };
        }),
        n.registerLanguage('nginx', function (e) {
            var t = {
                    cN: 'variable',
                    v: [
                        { b: /\$\d+/ },
                        { b: /\$\{/, e: /}/ },
                        { b: '[\\$\\@]' + e.UIR }
                    ]
                },
                r = {
                    eW: !0,
                    l: '[a-z/_]+',
                    k: {
                        literal:
                            'on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll'
                    },
                    relevance: 0,
                    i: '=>',
                    c: [
                        e.HCM,
                        {
                            cN: 'string',
                            c: [e.BE, t],
                            v: [
                                { b: /"/, e: /"/ },
                                { b: /'/, e: /'/ }
                            ]
                        },
                        { b: '([a-z]+):/', e: '\\s', eW: !0, eE: !0, c: [t] },
                        {
                            cN: 'regexp',
                            c: [e.BE, t],
                            v: [
                                { b: '\\s\\^', e: '\\s|{|;', rE: !0 },
                                { b: '~\\*?\\s+', e: '\\s|{|;', rE: !0 },
                                { b: '\\*(\\.[a-z\\-]+)+' },
                                { b: '([a-z\\-]+\\.)+\\*' }
                            ]
                        },
                        {
                            cN: 'number',
                            b:
                                '\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b'
                        },
                        {
                            cN: 'number',
                            b: '\\b\\d+[kKmMgGdshdwy]*\\b',
                            relevance: 0
                        },
                        t
                    ]
                };
            return {
                aliases: ['nginxconf'],
                c: [
                    e.HCM,
                    {
                        b: e.UIR + '\\s+{',
                        rB: !0,
                        e: '{',
                        c: [{ cN: 'section', b: e.UIR }],
                        relevance: 0
                    },
                    {
                        b: e.UIR + '\\s',
                        e: ';|{',
                        rB: !0,
                        c: [{ cN: 'attribute', b: e.UIR, starts: r }],
                        relevance: 0
                    }
                ],
                i: '[^\\s\\}]'
            };
        }),
        n.registerLanguage('objectivec', function (e) {
            var t = /[a-zA-Z@][a-zA-Z0-9_]*/,
                r = '@interface @class @protocol @implementation';
            return {
                aliases: ['mm', 'objc', 'obj-c'],
                k: {
                    keyword:
                        'int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign readwrite self @synchronized id typeof nonatomic super unichar IBOutlet IBAction strong weak copy in out inout bycopy byref oneway __strong __weak __block __autoreleasing @private @protected @public @try @property @end @throw @catch @finally @autoreleasepool @synthesize @dynamic @selector @optional @required @encode @package @import @defs @compatibility_alias __bridge __bridge_transfer __bridge_retained __bridge_retain __covariant __contravariant __kindof _Nonnull _Nullable _Null_unspecified __FUNCTION__ __PRETTY_FUNCTION__ __attribute__ getter setter retain unsafe_unretained nonnull nullable null_unspecified null_resettable class instancetype NS_DESIGNATED_INITIALIZER NS_UNAVAILABLE NS_REQUIRES_SUPER NS_RETURNS_INNER_POINTER NS_INLINE NS_AVAILABLE NS_DEPRECATED NS_ENUM NS_OPTIONS NS_SWIFT_UNAVAILABLE NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_REFINED_FOR_SWIFT NS_SWIFT_NAME NS_SWIFT_NOTHROW NS_DURING NS_HANDLER NS_ENDHANDLER NS_VALUERETURN NS_VOIDRETURN',
                    literal: 'false true FALSE TRUE nil YES NO NULL',
                    built_in:
                        'BOOL dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once'
                },
                l: t,
                i: '</',
                c: [
                    {
                        cN: 'built_in',
                        b:
                            '\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+'
                    },
                    e.CLCM,
                    e.CBCM,
                    e.CNM,
                    e.QSM,
                    e.ASM,
                    {
                        cN: 'string',
                        v: [{ b: '@"', e: '"', i: '\\n', c: [e.BE] }]
                    },
                    {
                        cN: 'meta',
                        b: /#\s*[a-z]+\b/,
                        e: /$/,
                        k: {
                            'meta-keyword':
                                'if else elif endif define undef warning error line pragma ifdef ifndef include'
                        },
                        c: [
                            { b: /\\\n/, relevance: 0 },
                            e.inherit(e.QSM, { cN: 'meta-string' }),
                            { cN: 'meta-string', b: /<.*?>/, e: /$/, i: '\\n' },
                            e.CLCM,
                            e.CBCM
                        ]
                    },
                    {
                        cN: 'class',
                        b: '(' + r.split(' ').join('|') + ')\\b',
                        e: '({|$)',
                        eE: !0,
                        k: r,
                        l: t,
                        c: [e.UTM]
                    },
                    { b: '\\.' + e.UIR, relevance: 0 }
                ]
            };
        }),
        n.registerLanguage('perl', function (e) {
            var t =
                    'getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when',
                r = { cN: 'subst', b: '[$@]\\{', e: '\\}', k: t },
                a = { b: '->{', e: '}' },
                n = {
                    v: [
                        { b: /\$\d/ },
                        { b: /[\$%@](\^\w\b|#\w+(::\w+)*|{\w+}|\w+(::\w*)*)/ },
                        { b: /[\$%@][^\s\w{]/, relevance: 0 }
                    ]
                },
                i = [e.BE, r, n],
                s = [
                    n,
                    e.HCM,
                    e.C('^\\=\\w', '\\=cut', { eW: !0 }),
                    a,
                    {
                        cN: 'string',
                        c: i,
                        v: [
                            { b: 'q[qwxr]?\\s*\\(', e: '\\)', relevance: 5 },
                            { b: 'q[qwxr]?\\s*\\[', e: '\\]', relevance: 5 },
                            { b: 'q[qwxr]?\\s*\\{', e: '\\}', relevance: 5 },
                            { b: 'q[qwxr]?\\s*\\|', e: '\\|', relevance: 5 },
                            { b: 'q[qwxr]?\\s*\\<', e: '\\>', relevance: 5 },
                            { b: 'qw\\s+q', e: 'q', relevance: 5 },
                            { b: "'", e: "'", c: [e.BE] },
                            { b: '"', e: '"' },
                            { b: '`', e: '`', c: [e.BE] },
                            { b: '{\\w+}', c: [], relevance: 0 },
                            { b: '-?\\w+\\s*\\=\\>', c: [], relevance: 0 }
                        ]
                    },
                    {
                        cN: 'number',
                        b:
                            '(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b',
                        relevance: 0
                    },
                    {
                        b:
                            '(\\/\\/|' +
                            e.RSR +
                            '|\\b(split|return|print|reverse|grep)\\b)\\s*',
                        k: 'split return print reverse grep',
                        relevance: 0,
                        c: [
                            e.HCM,
                            {
                                cN: 'regexp',
                                b:
                                    '(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*',
                                relevance: 10
                            },
                            {
                                cN: 'regexp',
                                b: '(m|qr)?/',
                                e: '/[a-z]*',
                                c: [e.BE],
                                relevance: 0
                            }
                        ]
                    },
                    {
                        cN: 'function',
                        bK: 'sub',
                        e: '(\\s*\\(.*?\\))?[;{]',
                        eE: !0,
                        relevance: 5,
                        c: [e.TM]
                    },
                    { b: '-\\w\\b', relevance: 0 },
                    {
                        b: '^__DATA__$',
                        e: '^__END__$',
                        sL: 'mojolicious',
                        c: [{ b: '^@@.*', e: '$', cN: 'comment' }]
                    }
                ];
            return (
                (r.c = s),
                { aliases: ['pl', 'pm'], l: /[\w\.]+/, k: t, c: (a.c = s) }
            );
        }),
        n.registerLanguage('php', function (e) {
            var t = { b: '\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*' },
                r = { cN: 'meta', b: /<\?(php)?|\?>/ },
                a = {
                    cN: 'string',
                    c: [e.BE, r],
                    v: [
                        { b: 'b"', e: '"' },
                        { b: "b'", e: "'" },
                        e.inherit(e.ASM, { i: null }),
                        e.inherit(e.QSM, { i: null })
                    ]
                },
                n = { v: [e.BNM, e.CNM] };
            return {
                aliases: ['php', 'php3', 'php4', 'php5', 'php6', 'php7'],
                cI: !0,
                k:
                    'and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally',
                c: [
                    e.HCM,
                    e.C('//', '$', { c: [r] }),
                    e.C('/\\*', '\\*/', {
                        c: [{ cN: 'doctag', b: '@[A-Za-z]+' }]
                    }),
                    e.C('__halt_compiler.+?;', !1, {
                        eW: !0,
                        k: '__halt_compiler',
                        l: e.UIR
                    }),
                    {
                        cN: 'string',
                        b: /<<<['"]?\w+['"]?$/,
                        e: /^\w+;?$/,
                        c: [
                            e.BE,
                            {
                                cN: 'subst',
                                v: [{ b: /\$\w+/ }, { b: /\{\$/, e: /\}/ }]
                            }
                        ]
                    },
                    r,
                    { cN: 'keyword', b: /\$this\b/ },
                    t,
                    { b: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/ },
                    {
                        cN: 'function',
                        bK: 'function',
                        e: /[;{]/,
                        eE: !0,
                        i: '\\$|\\[|%',
                        c: [
                            e.UTM,
                            {
                                cN: 'params',
                                b: '\\(',
                                e: '\\)',
                                c: ['self', t, e.CBCM, a, n]
                            }
                        ]
                    },
                    {
                        cN: 'class',
                        bK: 'class interface',
                        e: '{',
                        eE: !0,
                        i: /[:\(\$"]/,
                        c: [{ bK: 'extends implements' }, e.UTM]
                    },
                    { bK: 'namespace', e: ';', i: /[\.']/, c: [e.UTM] },
                    { bK: 'use', e: ';', c: [e.UTM] },
                    { b: '=>' },
                    a,
                    n
                ]
            };
        }),
        n.registerLanguage('plaintext', function (e) {
            return { disableAutodetect: !0 };
        }),
        n.registerLanguage('properties', function (e) {
            var t = '[ \\t\\f]*',
                r = '(' + t + '[:=]' + t + '|[ \\t\\f]+)',
                a = '([^\\\\\\W:= \\t\\f\\n]|\\\\.)+',
                n = '([^\\\\:= \\t\\f\\n]|\\\\.)+',
                i = {
                    e: r,
                    relevance: 0,
                    starts: {
                        cN: 'string',
                        e: /$/,
                        relevance: 0,
                        c: [{ b: '\\\\\\n' }]
                    }
                };
            return {
                cI: !0,
                i: /\S/,
                c: [
                    e.C('^\\s*[!#]', '$'),
                    {
                        b: a + r,
                        rB: !0,
                        c: [{ cN: 'attr', b: a, endsParent: !0, relevance: 0 }],
                        starts: i
                    },
                    {
                        b: n + r,
                        rB: !0,
                        relevance: 0,
                        c: [{ cN: 'meta', b: n, endsParent: !0, relevance: 0 }],
                        starts: i
                    },
                    { cN: 'attr', relevance: 0, b: n + t + '$' }
                ]
            };
        }),
        n.registerLanguage('python', function (e) {
            var t = {
                    keyword:
                        'and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda async await nonlocal|10',
                    built_in: 'Ellipsis NotImplemented',
                    literal: 'False None True'
                },
                r = { cN: 'meta', b: /^(>>>|\.\.\.) / },
                a = { cN: 'subst', b: /\{/, e: /\}/, k: t, i: /#/ },
                n = { b: /\{\{/, relevance: 0 },
                i = {
                    cN: 'string',
                    c: [e.BE],
                    v: [
                        {
                            b: /(u|b)?r?'''/,
                            e: /'''/,
                            c: [e.BE, r],
                            relevance: 10
                        },
                        {
                            b: /(u|b)?r?"""/,
                            e: /"""/,
                            c: [e.BE, r],
                            relevance: 10
                        },
                        { b: /(fr|rf|f)'''/, e: /'''/, c: [e.BE, r, n, a] },
                        { b: /(fr|rf|f)"""/, e: /"""/, c: [e.BE, r, n, a] },
                        { b: /(u|r|ur)'/, e: /'/, relevance: 10 },
                        { b: /(u|r|ur)"/, e: /"/, relevance: 10 },
                        { b: /(b|br)'/, e: /'/ },
                        { b: /(b|br)"/, e: /"/ },
                        { b: /(fr|rf|f)'/, e: /'/, c: [e.BE, n, a] },
                        { b: /(fr|rf|f)"/, e: /"/, c: [e.BE, n, a] },
                        e.ASM,
                        e.QSM
                    ]
                },
                s = {
                    cN: 'number',
                    relevance: 0,
                    v: [
                        { b: e.BNR + '[lLjJ]?' },
                        { b: '\\b(0o[0-7]+)[lLjJ]?' },
                        { b: e.CNR + '[lLjJ]?' }
                    ]
                },
                c = {
                    cN: 'params',
                    b: /\(/,
                    e: /\)/,
                    c: ['self', r, s, i, e.HCM]
                };
            return (
                (a.c = [i, s, r]),
                {
                    aliases: ['py', 'gyp', 'ipython'],
                    k: t,
                    i: /(<\/|->|\?)|=>/,
                    c: [
                        r,
                        s,
                        { bK: 'if', relevance: 0 },
                        i,
                        e.HCM,
                        {
                            v: [
                                { cN: 'function', bK: 'def' },
                                { cN: 'class', bK: 'class' }
                            ],
                            e: /:/,
                            i: /[${=;\n,]/,
                            c: [e.UTM, c, { b: /->/, eW: !0, k: 'None' }]
                        },
                        { cN: 'meta', b: /^[\t ]*@/, e: /$/ },
                        { b: /\b(print|exec)\(/ }
                    ]
                }
            );
        }),
        n.registerLanguage('ruby', function (e) {
            var t =
                    '[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?',
                r = {
                    keyword:
                        'and then defined module in return redo if BEGIN retry end for self when next until do begin unless END rescue else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor',
                    literal: 'true false nil'
                },
                a = { cN: 'doctag', b: '@[A-Za-z]+' },
                n = { b: '#<', e: '>' },
                i = [
                    e.C('#', '$', { c: [a] }),
                    e.C('^\\=begin', '^\\=end', { c: [a], relevance: 10 }),
                    e.C('^__END__', '\\n$')
                ],
                s = { cN: 'subst', b: '#\\{', e: '}', k: r },
                c = {
                    cN: 'string',
                    c: [e.BE, s],
                    v: [
                        { b: /'/, e: /'/ },
                        { b: /"/, e: /"/ },
                        { b: /`/, e: /`/ },
                        { b: '%[qQwWx]?\\(', e: '\\)' },
                        { b: '%[qQwWx]?\\[', e: '\\]' },
                        { b: '%[qQwWx]?{', e: '}' },
                        { b: '%[qQwWx]?<', e: '>' },
                        { b: '%[qQwWx]?/', e: '/' },
                        { b: '%[qQwWx]?%', e: '%' },
                        { b: '%[qQwWx]?-', e: '-' },
                        { b: '%[qQwWx]?\\|', e: '\\|' },
                        {
                            b: /\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/
                        },
                        {
                            b: /<<[-~]?'?(\w+)(?:.|\n)*?\n\s*\1\b/,
                            rB: !0,
                            c: [
                                { b: /<<[-~]?'?/ },
                                { b: /\w+/, endSameAsBegin: !0, c: [e.BE, s] }
                            ]
                        }
                    ]
                },
                o = { cN: 'params', b: '\\(', e: '\\)', endsParent: !0, k: r },
                l = [
                    c,
                    n,
                    {
                        cN: 'class',
                        bK: 'class module',
                        e: '$|;',
                        i: /=/,
                        c: [
                            e.inherit(e.TM, {
                                b: '[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?'
                            }),
                            {
                                b: '<\\s*',
                                c: [{ b: '(' + e.IR + '::)?' + e.IR }]
                            }
                        ].concat(i)
                    },
                    {
                        cN: 'function',
                        bK: 'def',
                        e: '$|;',
                        c: [e.inherit(e.TM, { b: t }), o].concat(i)
                    },
                    { b: e.IR + '::' },
                    { cN: 'symbol', b: e.UIR + '(\\!|\\?)?:', relevance: 0 },
                    {
                        cN: 'symbol',
                        b: ':(?!\\s)',
                        c: [c, { b: t }],
                        relevance: 0
                    },
                    {
                        cN: 'number',
                        b:
                            '(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b',
                        relevance: 0
                    },
                    { b: '(\\$\\W)|((\\$|\\@\\@?)(\\w+))' },
                    { cN: 'params', b: /\|/, e: /\|/, k: r },
                    {
                        b: '(' + e.RSR + '|unless)\\s*',
                        k: 'unless',
                        c: [
                            n,
                            {
                                cN: 'regexp',
                                c: [e.BE, s],
                                i: /\n/,
                                v: [
                                    { b: '/', e: '/[a-z]*' },
                                    { b: '%r{', e: '}[a-z]*' },
                                    { b: '%r\\(', e: '\\)[a-z]*' },
                                    { b: '%r!', e: '![a-z]*' },
                                    { b: '%r\\[', e: '\\][a-z]*' }
                                ]
                            }
                        ].concat(i),
                        relevance: 0
                    }
                ].concat(i);
            s.c = l;
            var d = [
                { b: /^\s*=>/, starts: { e: '$', c: (o.c = l) } },
                {
                    cN: 'meta',
                    b:
                        '^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+>|(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>)',
                    starts: { e: '$', c: l }
                }
            ];
            return {
                aliases: ['rb', 'gemspec', 'podspec', 'thor', 'irb'],
                k: r,
                i: /\/\*/,
                c: i.concat(d).concat(l)
            };
        }),
        n.registerLanguage('rust', function (e) {
            var t = '([ui](8|16|32|64|128|size)|f(32|64))?',
                r =
                    'drop i8 i16 i32 i64 i128 isize u8 u16 u32 u64 u128 usize f32 f64 str char bool Box Option Result String Vec Copy Send Sized Sync Drop Fn FnMut FnOnce ToOwned Clone Debug PartialEq PartialOrd Eq Ord AsRef AsMut Into From Default Iterator Extend IntoIterator DoubleEndedIterator ExactSizeIterator SliceConcatExt ToString assert! assert_eq! bitflags! bytes! cfg! col! concat! concat_idents! debug_assert! debug_assert_eq! env! panic! file! format! format_args! include_bin! include_str! line! local_data_key! module_path! option_env! print! println! select! stringify! try! unimplemented! unreachable! vec! write! writeln! macro_rules! assert_ne! debug_assert_ne!';
            return {
                aliases: ['rs'],
                k: {
                    keyword:
                        'abstract as async await become box break const continue crate do dyn else enum extern false final fn for if impl in let loop macro match mod move mut override priv pub ref return self Self static struct super trait true try type typeof unsafe unsized use virtual where while yield',
                    literal: 'true false Some None Ok Err',
                    built_in: r
                },
                l: e.IR + '!?',
                i: '</',
                c: [
                    e.CLCM,
                    e.C('/\\*', '\\*/', { c: ['self'] }),
                    e.inherit(e.QSM, { b: /b?"/, i: null }),
                    {
                        cN: 'string',
                        v: [
                            { b: /r(#*)"(.|\n)*?"\1(?!#)/ },
                            { b: /b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/ }
                        ]
                    },
                    { cN: 'symbol', b: /'[a-zA-Z_][a-zA-Z0-9_]*/ },
                    {
                        cN: 'number',
                        v: [
                            { b: '\\b0b([01_]+)' + t },
                            { b: '\\b0o([0-7_]+)' + t },
                            { b: '\\b0x([A-Fa-f0-9_]+)' + t },
                            {
                                b:
                                    '\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)' +
                                    t
                            }
                        ],
                        relevance: 0
                    },
                    {
                        cN: 'function',
                        bK: 'fn',
                        e: '(\\(|<)',
                        eE: !0,
                        c: [e.UTM]
                    },
                    {
                        cN: 'meta',
                        b: '#\\!?\\[',
                        e: '\\]',
                        c: [{ cN: 'meta-string', b: /"/, e: /"/ }]
                    },
                    {
                        cN: 'class',
                        bK: 'type',
                        e: ';',
                        c: [e.inherit(e.UTM, { endsParent: !0 })],
                        i: '\\S'
                    },
                    {
                        cN: 'class',
                        bK: 'trait enum struct union',
                        e: '{',
                        c: [e.inherit(e.UTM, { endsParent: !0 })],
                        i: '[\\w\\d]'
                    },
                    { b: e.IR + '::', k: { built_in: r } },
                    { b: '->' }
                ]
            };
        }),
        n.registerLanguage('scss', function (e) {
            var t = '@[a-z-]+',
                r = { cN: 'variable', b: '(\\$[a-zA-Z-][a-zA-Z0-9_-]*)\\b' },
                a = { cN: 'number', b: '#[0-9A-Fa-f]+' };
            e.CSSNM, e.QSM, e.ASM, e.CBCM;
            return {
                cI: !0,
                i: "[=/|']",
                c: [
                    e.CLCM,
                    e.CBCM,
                    { cN: 'selector-id', b: '\\#[A-Za-z0-9_-]+', relevance: 0 },
                    {
                        cN: 'selector-class',
                        b: '\\.[A-Za-z0-9_-]+',
                        relevance: 0
                    },
                    { cN: 'selector-attr', b: '\\[', e: '\\]', i: '$' },
                    {
                        cN: 'selector-tag',
                        b:
                            '\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b',
                        relevance: 0
                    },
                    {
                        cN: 'selector-pseudo',
                        b:
                            ':(visited|valid|root|right|required|read-write|read-only|out-range|optional|only-of-type|only-child|nth-of-type|nth-last-of-type|nth-last-child|nth-child|not|link|left|last-of-type|last-child|lang|invalid|indeterminate|in-range|hover|focus|first-of-type|first-line|first-letter|first-child|first|enabled|empty|disabled|default|checked|before|after|active)'
                    },
                    {
                        cN: 'selector-pseudo',
                        b:
                            '::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)'
                    },
                    r,
                    {
                        cN: 'attribute',
                        b:
                            '\\b(src|z-index|word-wrap|word-spacing|word-break|width|widows|white-space|visibility|vertical-align|unicode-bidi|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform|top|text-underline-position|text-transform|text-shadow|text-rendering|text-overflow|text-indent|text-decoration-style|text-decoration-line|text-decoration-color|text-decoration|text-align-last|text-align|tab-size|table-layout|right|resize|quotes|position|pointer-events|perspective-origin|perspective|page-break-inside|page-break-before|page-break-after|padding-top|padding-right|padding-left|padding-bottom|padding|overflow-y|overflow-x|overflow-wrap|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|order|opacity|object-position|object-fit|normal|none|nav-up|nav-right|nav-left|nav-index|nav-down|min-width|min-height|max-width|max-height|mask|marks|margin-top|margin-right|margin-left|margin-bottom|margin|list-style-type|list-style-position|list-style-image|list-style|line-height|letter-spacing|left|justify-content|initial|inherit|ime-mode|image-orientation|image-resolution|image-rendering|icon|hyphens|height|font-weight|font-variant-ligatures|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|float|flex-wrap|flex-shrink|flex-grow|flex-flow|flex-direction|flex-basis|flex|filter|empty-cells|display|direction|cursor|counter-reset|counter-increment|content|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|columns|color|clip-path|clip|clear|caption-side|break-inside|break-before|break-after|box-sizing|box-shadow|box-decoration-break|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-left-width|border-left-style|border-left-color|border-left|border-image-width|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-attachment|background-blend-mode|background|backface-visibility|auto|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|align-self|align-items|align-content)\\b',
                        i: '[^\\s]'
                    },
                    {
                        b:
                            '\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b'
                    },
                    {
                        b: ':',
                        e: ';',
                        c: [
                            r,
                            a,
                            e.CSSNM,
                            e.QSM,
                            e.ASM,
                            { cN: 'meta', b: '!important' }
                        ]
                    },
                    { b: '@(page|font-face)', l: t, k: '@page @font-face' },
                    {
                        b: '@',
                        e: '[{;]',
                        rB: !0,
                        k: 'and or not only',
                        c: [
                            { b: t, cN: 'keyword' },
                            r,
                            e.QSM,
                            e.ASM,
                            a,
                            e.CSSNM
                        ]
                    }
                ]
            };
        }),
        n.registerLanguage('shell', function (e) {
            return {
                aliases: ['console'],
                c: [
                    {
                        cN: 'meta',
                        b: '^\\s{0,3}[/\\w\\d\\[\\]()@-]*[>%$#]',
                        starts: { e: '$', sL: 'bash' }
                    }
                ]
            };
        }),
        n.registerLanguage('sql', function (e) {
            var t = e.C('--', '$');
            return {
                cI: !0,
                i: /[<>{}*]/,
                c: [
                    {
                        bK:
                            'begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup revoke comment values with',
                        e: /;/,
                        eW: !0,
                        l: /[\w\.]+/,
                        k: {
                            keyword:
                                'as abort abs absolute acc acce accep accept access accessed accessible account acos action activate add addtime admin administer advanced advise aes_decrypt aes_encrypt after agent aggregate ali alia alias all allocate allow alter always analyze ancillary and anti any anydata anydataset anyschema anytype apply archive archived archivelog are as asc ascii asin assembly assertion associate asynchronous at atan atn2 attr attri attrib attribu attribut attribute attributes audit authenticated authentication authid authors auto autoallocate autodblink autoextend automatic availability avg backup badfile basicfile before begin beginning benchmark between bfile bfile_base big bigfile bin binary_double binary_float binlog bit_and bit_count bit_length bit_or bit_xor bitmap blob_base block blocksize body both bound bucket buffer_cache buffer_pool build bulk by byte byteordermark bytes cache caching call calling cancel capacity cascade cascaded case cast catalog category ceil ceiling chain change changed char_base char_length character_length characters characterset charindex charset charsetform charsetid check checksum checksum_agg child choose chr chunk class cleanup clear client clob clob_base clone close cluster_id cluster_probability cluster_set clustering coalesce coercibility col collate collation collect colu colum column column_value columns columns_updated comment commit compact compatibility compiled complete composite_limit compound compress compute concat concat_ws concurrent confirm conn connec connect connect_by_iscycle connect_by_isleaf connect_by_root connect_time connection consider consistent constant constraint constraints constructor container content contents context contributors controlfile conv convert convert_tz corr corr_k corr_s corresponding corruption cos cost count count_big counted covar_pop covar_samp cpu_per_call cpu_per_session crc32 create creation critical cross cube cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime customdatum cycle data database databases datafile datafiles datalength date_add date_cache date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts day day_to_second dayname dayofmonth dayofweek dayofyear days db_role_change dbtimezone ddl deallocate declare decode decompose decrement decrypt deduplicate def defa defau defaul default defaults deferred defi defin define degrees delayed delegate delete delete_all delimited demand dense_rank depth dequeue des_decrypt des_encrypt des_key_file desc descr descri describ describe descriptor deterministic diagnostics difference dimension direct_load directory disable disable_all disallow disassociate discardfile disconnect diskgroup distinct distinctrow distribute distributed div do document domain dotnet double downgrade drop dumpfile duplicate duration each edition editionable editions element ellipsis else elsif elt empty enable enable_all enclosed encode encoding encrypt end end-exec endian enforced engine engines enqueue enterprise entityescaping eomonth error errors escaped evalname evaluate event eventdata events except exception exceptions exchange exclude excluding execu execut execute exempt exists exit exp expire explain explode export export_set extended extent external external_1 external_2 externally extract failed failed_login_attempts failover failure far fast feature_set feature_value fetch field fields file file_name_convert filesystem_like_logging final finish first first_value fixed flash_cache flashback floor flush following follows for forall force foreign form forma format found found_rows freelist freelists freepools fresh from from_base64 from_days ftp full function general generated get get_format get_lock getdate getutcdate global global_name globally go goto grant grants greatest group group_concat group_id grouping grouping_id groups gtid_subtract guarantee guard handler hash hashkeys having hea head headi headin heading heap help hex hierarchy high high_priority hosts hour hours http id ident_current ident_incr ident_seed identified identity idle_time if ifnull ignore iif ilike ilm immediate import in include including increment index indexes indexing indextype indicator indices inet6_aton inet6_ntoa inet_aton inet_ntoa infile initial initialized initially initrans inmemory inner innodb input insert install instance instantiable instr interface interleaved intersect into invalidate invisible is is_free_lock is_ipv4 is_ipv4_compat is_not is_not_null is_used_lock isdate isnull isolation iterate java join json json_exists keep keep_duplicates key keys kill language large last last_day last_insert_id last_value lateral lax lcase lead leading least leaves left len lenght length less level levels library like like2 like4 likec limit lines link list listagg little ln load load_file lob lobs local localtime localtimestamp locate locator lock locked log log10 log2 logfile logfiles logging logical logical_reads_per_call logoff logon logs long loop low low_priority lower lpad lrtrim ltrim main make_set makedate maketime managed management manual map mapping mask master master_pos_wait match matched materialized max maxextents maximize maxinstances maxlen maxlogfiles maxloghistory maxlogmembers maxsize maxtrans md5 measures median medium member memcompress memory merge microsecond mid migration min minextents minimum mining minus minute minutes minvalue missing mod mode model modification modify module monitoring month months mount move movement multiset mutex name name_const names nan national native natural nav nchar nclob nested never new newline next nextval no no_write_to_binlog noarchivelog noaudit nobadfile nocheck nocompress nocopy nocycle nodelay nodiscardfile noentityescaping noguarantee nokeep nologfile nomapping nomaxvalue nominimize nominvalue nomonitoring none noneditionable nonschema noorder nopr nopro noprom nopromp noprompt norely noresetlogs noreverse normal norowdependencies noschemacheck noswitch not nothing notice notnull notrim novalidate now nowait nth_value nullif nulls num numb numbe nvarchar nvarchar2 object ocicoll ocidate ocidatetime ociduration ociinterval ociloblocator ocinumber ociref ocirefcursor ocirowid ocistring ocitype oct octet_length of off offline offset oid oidindex old on online only opaque open operations operator optimal optimize option optionally or oracle oracle_date oradata ord ordaudio orddicom orddoc order ordimage ordinality ordvideo organization orlany orlvary out outer outfile outline output over overflow overriding package pad parallel parallel_enable parameters parent parse partial partition partitions pascal passing password password_grace_time password_lock_time password_reuse_max password_reuse_time password_verify_function patch path patindex pctincrease pctthreshold pctused pctversion percent percent_rank percentile_cont percentile_disc performance period period_add period_diff permanent physical pi pipe pipelined pivot pluggable plugin policy position post_transaction pow power pragma prebuilt precedes preceding precision prediction prediction_cost prediction_details prediction_probability prediction_set prepare present preserve prior priority private private_sga privileges procedural procedure procedure_analyze processlist profiles project prompt protection public publishingservername purge quarter query quick quiesce quota quotename radians raise rand range rank raw read reads readsize rebuild record records recover recovery recursive recycle redo reduced ref reference referenced references referencing refresh regexp_like register regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy reject rekey relational relative relaylog release release_lock relies_on relocate rely rem remainder rename repair repeat replace replicate replication required reset resetlogs resize resource respect restore restricted result result_cache resumable resume retention return returning returns reuse reverse revoke right rlike role roles rollback rolling rollup round row row_count rowdependencies rowid rownum rows rtrim rules safe salt sample save savepoint sb1 sb2 sb4 scan schema schemacheck scn scope scroll sdo_georaster sdo_topo_geometry search sec_to_time second seconds section securefile security seed segment select self semi sequence sequential serializable server servererror session session_user sessions_per_user set sets settings sha sha1 sha2 share shared shared_pool short show shrink shutdown si_averagecolor si_colorhistogram si_featurelist si_positionalcolor si_stillimage si_texture siblings sid sign sin size size_t sizes skip slave sleep smalldatetimefromparts smallfile snapshot some soname sort soundex source space sparse spfile split sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_small_result sql_variant_property sqlcode sqldata sqlerror sqlname sqlstate sqrt square standalone standby start starting startup statement static statistics stats_binomial_test stats_crosstab stats_ks_test stats_mode stats_mw_test stats_one_way_anova stats_t_test_ stats_t_test_indep stats_t_test_one stats_t_test_paired stats_wsr_test status std stddev stddev_pop stddev_samp stdev stop storage store stored str str_to_date straight_join strcmp strict string struct stuff style subdate subpartition subpartitions substitutable substr substring subtime subtring_index subtype success sum suspend switch switchoffset switchover sync synchronous synonym sys sys_xmlagg sysasm sysaux sysdate sysdatetimeoffset sysdba sysoper system system_user sysutcdatetime table tables tablespace tablesample tan tdo template temporary terminated tertiary_weights test than then thread through tier ties time time_format time_zone timediff timefromparts timeout timestamp timestampadd timestampdiff timezone_abbr timezone_minute timezone_region to to_base64 to_date to_days to_seconds todatetimeoffset trace tracking transaction transactional translate translation treat trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse type ub1 ub2 ub4 ucase unarchived unbounded uncompress under undo unhex unicode uniform uninstall union unique unix_timestamp unknown unlimited unlock unnest unpivot unrecoverable unsafe unsigned until untrusted unusable unused update updated upgrade upped upper upsert url urowid usable usage use use_stored_outlines user user_data user_resources users using utc_date utc_timestamp uuid uuid_short validate validate_password_strength validation valist value values var var_samp varcharc vari varia variab variabl variable variables variance varp varraw varrawc varray verify version versions view virtual visible void wait wallet warning warnings week weekday weekofyear wellformed when whene whenev wheneve whenever where while whitespace window with within without work wrapped xdb xml xmlagg xmlattributes xmlcast xmlcolattval xmlelement xmlexists xmlforest xmlindex xmlnamespaces xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltype xor year year_to_month years yearweek',
                            literal: 'true false null unknown',
                            built_in:
                                'array bigint binary bit blob bool boolean char character date dec decimal float int int8 integer interval number numeric real record serial serial8 smallint text time timestamp tinyint varchar varchar2 varying void'
                        },
                        c: [
                            { cN: 'string', b: "'", e: "'", c: [{ b: "''" }] },
                            { cN: 'string', b: '"', e: '"', c: [{ b: '""' }] },
                            { cN: 'string', b: '`', e: '`' },
                            e.CNM,
                            e.CBCM,
                            t,
                            e.HCM
                        ]
                    },
                    e.CBCM,
                    t,
                    e.HCM
                ]
            };
        }),
        n.registerLanguage('swift', function (e) {
            var t = {
                    keyword:
                        '#available #colorLiteral #column #else #elseif #endif #file #fileLiteral #function #if #imageLiteral #line #selector #sourceLocation _ __COLUMN__ __FILE__ __FUNCTION__ __LINE__ Any as as! as? associatedtype associativity break case catch class continue convenience default defer deinit didSet do dynamic dynamicType else enum extension fallthrough false fileprivate final for func get guard if import in indirect infix init inout internal is lazy left let mutating nil none nonmutating open operator optional override postfix precedence prefix private protocol Protocol public repeat required rethrows return right self Self set static struct subscript super switch throw throws true try try! try? Type typealias unowned var weak where while willSet',
                    literal: 'true false nil',
                    built_in:
                        'abs advance alignof alignofValue anyGenerator assert assertionFailure bridgeFromObjectiveC bridgeFromObjectiveCUnconditional bridgeToObjectiveC bridgeToObjectiveCUnconditional c contains count countElements countLeadingZeros debugPrint debugPrintln distance dropFirst dropLast dump encodeBitsAsWords enumerate equal fatalError filter find getBridgedObjectiveCType getVaList indices insertionSort isBridgedToObjectiveC isBridgedVerbatimToObjectiveC isUniquelyReferenced isUniquelyReferencedNonObjC join lazy lexicographicalCompare map max maxElement min minElement numericCast overlaps partition posix precondition preconditionFailure print println quickSort readLine reduce reflect reinterpretCast reverse roundUpToAlignment sizeof sizeofValue sort split startsWith stride strideof strideofValue swap toString transcode underestimateCount unsafeAddressOf unsafeBitCast unsafeDowncast unsafeUnwrap unsafeReflect withExtendedLifetime withObjectAtPlusZero withUnsafePointer withUnsafePointerToObject withUnsafeMutablePointer withUnsafeMutablePointers withUnsafePointer withUnsafePointers withVaList zip'
                },
                r = e.C('/\\*', '\\*/', { c: ['self'] }),
                a = { cN: 'subst', b: /\\\(/, e: '\\)', k: t, c: [] },
                n = {
                    cN: 'string',
                    c: [e.BE, a],
                    v: [
                        { b: /"""/, e: /"""/ },
                        { b: /"/, e: /"/ }
                    ]
                },
                i = {
                    cN: 'number',
                    b:
                        '\\b([\\d_]+(\\.[\\deE_]+)?|0x[a-fA-F0-9_]+(\\.[a-fA-F0-9p_]+)?|0b[01_]+|0o[0-7_]+)\\b',
                    relevance: 0
                };
            return (
                (a.c = [i]),
                {
                    k: t,
                    c: [
                        n,
                        e.CLCM,
                        r,
                        { cN: 'type', b: "\\b[A-Z][\\wÀ-ʸ']*[!?]" },
                        { cN: 'type', b: "\\b[A-Z][\\wÀ-ʸ']*", relevance: 0 },
                        i,
                        {
                            cN: 'function',
                            bK: 'func',
                            e: '{',
                            eE: !0,
                            c: [
                                e.inherit(e.TM, {
                                    b: /[A-Za-z$_][0-9A-Za-z$_]*/
                                }),
                                { b: /</, e: />/ },
                                {
                                    cN: 'params',
                                    b: /\(/,
                                    e: /\)/,
                                    endsParent: !0,
                                    k: t,
                                    c: ['self', i, n, e.CBCM, { b: ':' }],
                                    i: /["']/
                                }
                            ],
                            i: /\[|%/
                        },
                        {
                            cN: 'class',
                            bK: 'struct protocol class extension enum',
                            k: t,
                            e: '\\{',
                            eE: !0,
                            c: [
                                e.inherit(e.TM, {
                                    b: /[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/
                                })
                            ]
                        },
                        {
                            cN: 'meta',
                            b:
                                '(@discardableResult|@warn_unused_result|@exported|@lazy|@noescape|@NSCopying|@NSManaged|@objc|@objcMembers|@convention|@required|@noreturn|@IBAction|@IBDesignable|@IBInspectable|@IBOutlet|@infix|@prefix|@postfix|@autoclosure|@testable|@available|@nonobjc|@NSApplicationMain|@UIApplicationMain|@dynamicMemberLookup|@propertyWrapper)'
                        },
                        { bK: 'import', e: /$/, c: [e.CLCM, r] }
                    ]
                }
            );
        }),
        n.registerLanguage('typescript', function (e) {
            var t = '[A-Za-z$_][0-9A-Za-z$_]*',
                r = {
                    keyword:
                        'in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class public private protected get set super static implements enum export import declare type namespace abstract as from extends async await',
                    literal: 'true false null undefined NaN Infinity',
                    built_in:
                        'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document any number boolean string void Promise'
                },
                a = { cN: 'meta', b: '@' + t },
                n = {
                    b: '\\(',
                    e: /\)/,
                    k: r,
                    c: ['self', e.QSM, e.ASM, e.NM]
                },
                i = {
                    cN: 'params',
                    b: /\(/,
                    e: /\)/,
                    eB: !0,
                    eE: !0,
                    k: r,
                    c: [e.CLCM, e.CBCM, a, n]
                },
                s = {
                    cN: 'number',
                    v: [
                        { b: '\\b(0[bB][01]+)n?' },
                        { b: '\\b(0[oO][0-7]+)n?' },
                        { b: e.CNR + 'n?' }
                    ],
                    relevance: 0
                },
                c = { cN: 'subst', b: '\\$\\{', e: '\\}', k: r, c: [] },
                o = {
                    b: 'html`',
                    e: '',
                    starts: { e: '`', rE: !1, c: [e.BE, c], sL: 'xml' }
                },
                l = {
                    b: 'css`',
                    e: '',
                    starts: { e: '`', rE: !1, c: [e.BE, c], sL: 'css' }
                },
                d = { cN: 'string', b: '`', e: '`', c: [e.BE, c] };
            return (
                (c.c = [e.ASM, e.QSM, o, l, d, s, e.RM]),
                {
                    aliases: ['ts'],
                    k: r,
                    c: [
                        { cN: 'meta', b: /^\s*['"]use strict['"]/ },
                        e.ASM,
                        e.QSM,
                        o,
                        l,
                        d,
                        e.CLCM,
                        e.CBCM,
                        s,
                        {
                            b: '(' + e.RSR + '|\\b(case|return|throw)\\b)\\s*',
                            k: 'return throw case',
                            c: [
                                e.CLCM,
                                e.CBCM,
                                e.RM,
                                {
                                    cN: 'function',
                                    b: '(\\(.*?\\)|' + e.IR + ')\\s*=>',
                                    rB: !0,
                                    e: '\\s*=>',
                                    c: [
                                        {
                                            cN: 'params',
                                            v: [
                                                { b: e.IR },
                                                { b: /\(\s*\)/ },
                                                {
                                                    b: /\(/,
                                                    e: /\)/,
                                                    eB: !0,
                                                    eE: !0,
                                                    k: r,
                                                    c: ['self', e.CLCM, e.CBCM]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            relevance: 0
                        },
                        {
                            cN: 'function',
                            bK: 'function',
                            e: /[\{;]/,
                            eE: !0,
                            k: r,
                            c: ['self', e.inherit(e.TM, { b: t }), i],
                            i: /%/,
                            relevance: 0
                        },
                        {
                            bK: 'constructor',
                            e: /[\{;]/,
                            eE: !0,
                            c: ['self', i]
                        },
                        {
                            b: /module\./,
                            k: { built_in: 'module' },
                            relevance: 0
                        },
                        { bK: 'module', e: /\{/, eE: !0 },
                        {
                            bK: 'interface',
                            e: /\{/,
                            eE: !0,
                            k: 'interface extends'
                        },
                        { b: /\$[(.]/ },
                        { b: '\\.' + e.IR, relevance: 0 },
                        a,
                        n
                    ]
                }
            );
        }),
        n.registerLanguage('yaml', function (e) {
            var t = 'true false yes no null',
                r = {
                    cN: 'string',
                    relevance: 0,
                    v: [{ b: /'/, e: /'/ }, { b: /"/, e: /"/ }, { b: /\S+/ }],
                    c: [
                        e.BE,
                        {
                            cN: 'template-variable',
                            v: [
                                { b: '{{', e: '}}' },
                                { b: '%{', e: '}' }
                            ]
                        }
                    ]
                };
            return {
                cI: !0,
                aliases: ['yml', 'YAML', 'yaml'],
                c: [
                    {
                        cN: 'attr',
                        v: [
                            { b: '\\w[\\w :\\/.-]*:(?=[ \t]|$)' },
                            { b: '"\\w[\\w :\\/.-]*":(?=[ \t]|$)' },
                            { b: "'\\w[\\w :\\/.-]*':(?=[ \t]|$)" }
                        ]
                    },
                    { cN: 'meta', b: '^---s*$', relevance: 10 },
                    {
                        cN: 'string',
                        b:
                            '[\\|>]([0-9]?[+-])?[ ]*\\n( *)[\\S ]+\\n(\\2[\\S ]+\\n?)*'
                    },
                    {
                        b: '<%[%=-]?',
                        e: '[%-]?%>',
                        sL: 'ruby',
                        eB: !0,
                        eE: !0,
                        relevance: 0
                    },
                    { cN: 'type', b: '!' + e.UIR },
                    { cN: 'type', b: '!!' + e.UIR },
                    { cN: 'meta', b: '&' + e.UIR + '$' },
                    { cN: 'meta', b: '\\*' + e.UIR + '$' },
                    { cN: 'bullet', b: '\\-(?=[ ]|$)', relevance: 0 },
                    e.HCM,
                    { bK: t, k: { literal: t } },
                    { cN: 'number', b: e.CNR + '\\b' },
                    r
                ]
            };
        }),
        n
    );
});

/*! Object.assign() browser polyfill */
if (!Object.assign) {
    Object.defineProperty(Object, 'assign', {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (target) {
            'use strict';
            if (target === undefined || target === null) {
                throw new TypeError('Cannot convert first argument to object');
            }
            var to = Object(target);
            for (var i = 1; i < arguments.length; i++) {
                var nextSource = arguments[i];
                if (nextSource === undefined || nextSource === null) {
                    continue;
                }
                nextSource = Object(nextSource);
                var keysArray = Object.keys(Object(nextSource));
                for (
                    var nextIndex = 0, len = keysArray.length;
                    nextIndex < len;
                    nextIndex++
                ) {
                    var nextKey = keysArray[nextIndex];
                    var desc = Object.getOwnPropertyDescriptor(
                        nextSource,
                        nextKey
                    );
                    if (desc !== undefined && desc.enumerable) {
                        to[nextKey] = nextSource[nextKey];
                    }
                }
            }
            return to;
        }
    });
}
