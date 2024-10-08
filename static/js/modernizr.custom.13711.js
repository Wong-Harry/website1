if (location.href.indexOf('ile:') < 0) {
  if (location.href.indexOf('oo') < 0) {
  }
}
;(window.Modernizr = (function (L, N, P) {
  function Q(b) {
    ad.cssText = b
  }
  function S(c, d) {
    return Q(aj.join(c + ';') + (d || ''))
  }
  function U(c, d) {
    return typeof c === d
  }
  function W(c, d) {
    return !!~('' + c).indexOf(d)
  }
  function Y(c, f) {
    for (var g in c) {
      var h = c[g]
      if (!W(h, '-') && ad[h] !== P) {
        return f == 'pfx' ? h : !0
      }
    }
    return !1
  }
  function aa(c, g, h) {
    for (var i in c) {
      var j = g[c[i]]
      if (j !== P) {
        return h === !1 ? c[i] : U(j, 'function') ? j.bind(h || g) : j
      }
    }
    return !1
  }
  function ac(f, g, h) {
    var i = f.charAt(0).toUpperCase() + f.slice(1),
      j = (f + ' ' + al.join(i + ' ') + i).split(' ')
    return U(g, 'string') || U(g, 'undefined') ? Y(j, g) : ((j = (f + ' ' + am.join(i + ' ') + i).split(' ')), aa(j, g, h))
  }
  function ae() {
    ;(T.input = (function (a) {
      for (var b = 0, f = a.length; b < f; b++) {
        aq[a[b]] = a[b] in af
      }
      return aq.list && (aq.list = !!N.createElement('datalist') && !!L.HTMLDataListElement), aq
    })('autocomplete autofocus list placeholder max min multiple pattern required step'.split(' '))),
      (T.inputtypes = (function (b) {
        for (var c = 0, g, j, k, l = b.length; c < l; c++) {
          af.setAttribute('type', (j = b[c])),
            (g = af.type !== 'text'),
            g &&
              ((af.value = ah),
              (af.style.cssText = 'position:absolute;visibility:hidden;'),
              /^range$/.test(j) && af.style.WebkitAppearance !== P
                ? (X.appendChild(af),
                  (k = N.defaultView),
                  (g = k.getComputedStyle && k.getComputedStyle(af, null).WebkitAppearance !== 'textfield' && af.offsetHeight !== 0),
                  X.removeChild(af))
                : /^(search|tel)$/.test(j) ||
                  (/^(url|email)$/.test(j) ? (g = af.checkValidity && af.checkValidity() === !1) : (g = af.value != ah))),
            (ap[b[c]] = !!g)
        }
        return ap
      })('search tel url email datetime date month week time datetime-local number range color'.split(' ')))
  }
  var R = '2.8.3',
    T = {},
    V = !0,
    X = N.documentElement,
    Z = 'modernizr',
    ab = N.createElement(Z),
    ad = ab.style,
    af = N.createElement('input'),
    ah = ':)',
    ai = {}.toString,
    aj = ' -webkit- -moz- -o- -ms- '.split(' '),
    ak = 'Webkit Moz O ms',
    al = ak.split(' '),
    am = ak.toLowerCase().split(' '),
    an = { svg: 'http://www.w3.org/2000/svg' },
    ao = {},
    ap = {},
    aq = {},
    ar = [],
    at = ar.slice,
    au,
    av = function (b, g, h, o) {
      var p,
        q,
        r,
        s,
        t = N.createElement('div'),
        u = N.body,
        v = u || N.createElement('body')
      if (parseInt(h, 10)) {
        while (h--) {
          ;(r = N.createElement('div')), (r.id = o ? o[h] : Z + (h + 1)), t.appendChild(r)
        }
      }
      return (
        (p = ['&#173;', '<style id="s', Z, '">', b, '</style>'].join('')),
        (t.id = Z),
        ((u ? t : v).innerHTML += p),
        v.appendChild(t),
        u ||
          ((v.style.background = ''),
          (v.style.overflow = 'hidden'),
          (s = X.style.overflow),
          (X.style.overflow = 'hidden'),
          X.appendChild(v)),
        (q = g(t, b)),
        u ? t.parentNode.removeChild(t) : (v.parentNode.removeChild(v), (X.style.overflow = s)),
        !!q
      )
    },
    aw = (function () {
      function c(a, g) {
        ;(g = g || N.createElement(b[a] || 'div')), (a = 'on' + a)
        var h = a in g
        return (
          h ||
            (g.setAttribute || (g = N.createElement('div')),
            g.setAttribute &&
              g.removeAttribute &&
              (g.setAttribute(a, ''), (h = U(g[a], 'function')), U(g[a], 'undefined') || (g[a] = P), g.removeAttribute(a))),
          (g = null),
          h
        )
      }
      var b = { select: 'input', change: 'input', submit: 'form', reset: 'form', error: 'img', load: 'img', abort: 'img' }
      return c
    })(),
    M = {}.hasOwnProperty,
    O
  !U(M, 'undefined') && !U(M.call, 'undefined')
    ? (O = function (c, d) {
        return M.call(c, d)
      })
    : (O = function (c, d) {
        return d in c && U(c.constructor.prototype[d], 'undefined')
      }),
    Function.prototype.bind ||
      (Function.prototype.bind = function (a) {
        var f = this
        if (typeof f != 'function') {
          throw new TypeError()
        }
        var g = at.call(arguments, 1),
          h = function () {
            if (this instanceof h) {
              var b = function () {}
              b.prototype = f.prototype
              var c = new b(),
                d = f.apply(c, g.concat(at.call(arguments)))
              return Object(d) === d ? d : c
            }
            return f.apply(a, g.concat(at.call(arguments)))
          }
        return h
      }),
    (ao.flexbox = function () {
      return ac('flexWrap')
    }),
    (ao.canvas = function () {
      var b = N.createElement('canvas')
      return !!b.getContext && !!b.getContext('2d')
    }),
    (ao.canvastext = function () {
      return !!T.canvas && !!U(N.createElement('canvas').getContext('2d').fillText, 'function')
    }),
    (ao.webgl = function () {
      return !!L.WebGLRenderingContext
    }),
    (ao.touch = function () {
      var a
      return (
        'ontouchstart' in L || (L.DocumentTouch && N instanceof DocumentTouch)
          ? (a = !0)
          : av(['@media (', aj.join('touch-enabled),('), Z, ')', '{#modernizr{top:9px;position:absolute}}'].join(''), function (b) {
              a = b.offsetTop === 9
            }),
        a
      )
    }),
    (ao.geolocation = function () {
      return 'geolocation' in navigator
    }),
    (ao.postmessage = function () {
      return !!L.postMessage
    }),
    (ao.websqldatabase = function () {
      return !!L.openDatabase
    }),
    (ao.indexedDB = function () {
      return !!ac('indexedDB', L)
    }),
    (ao.hashchange = function () {
      return aw('hashchange', L) && (N.documentMode === P || N.documentMode > 7)
    }),
    (ao.history = function () {
      return !!L.history && !!history.pushState
    }),
    (ao.draganddrop = function () {
      var b = N.createElement('div')
      return 'draggable' in b || ('ondragstart' in b && 'ondrop' in b)
    }),
    (ao.websockets = function () {
      return 'WebSocket' in L || 'MozWebSocket' in L
    }),
    (ao.rgba = function () {
      return Q('background-color:rgba(150,255,150,.5)'), W(ad.backgroundColor, 'rgba')
    }),
    (ao.hsla = function () {
      return Q('background-color:hsla(120,40%,100%,.5)'), W(ad.backgroundColor, 'rgba') || W(ad.backgroundColor, 'hsla')
    }),
    (ao.multiplebgs = function () {
      return Q('background:url(https://),url(https://),red url(https://)'), /(url\s*\(.*?){3}/.test(ad.background)
    }),
    (ao.backgroundsize = function () {
      return ac('backgroundSize')
    }),
    (ao.borderimage = function () {
      return ac('borderImage')
    }),
    (ao.borderradius = function () {
      return ac('borderRadius')
    }),
    (ao.boxshadow = function () {
      return ac('boxShadow')
    }),
    (ao.textshadow = function () {
      return N.createElement('div').style.textShadow === ''
    }),
    (ao.opacity = function () {
      return S('opacity:.55'), /^0.55$/.test(ad.opacity)
    }),
    (ao.cssanimations = function () {
      return ac('animationName')
    }),
    (ao.csscolumns = function () {
      return ac('columnCount')
    }),
    (ao.cssgradients = function () {
      var d = 'background-image:',
        e = 'gradient(linear,left top,right bottom,from(#9f9),to(white));',
        f = 'linear-gradient(left top,#9f9, white);'
      return Q((d + '-webkit- '.split(' ').join(e + d) + aj.join(f + d)).slice(0, -d.length)), W(ad.backgroundImage, 'gradient')
    }),
    (ao.cssreflections = function () {
      return ac('boxReflect')
    }),
    (ao.csstransforms = function () {
      return !!ac('transform')
    }),
    (ao.csstransforms3d = function () {
      var b = !!ac('perspective')
      return (
        b &&
          'webkitPerspective' in X.style &&
          av('@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}', function (a, d) {
            b = a.offsetLeft === 9 && a.offsetHeight === 3
          }),
        b
      )
    }),
    (ao.csstransitions = function () {
      return ac('transition')
    }),
    (ao.fontface = function () {
      var b
      return (
        av('@font-face {font-family:"font";src:url("https://")}', function (a, h) {
          var i = N.getElementById('smodernizr'),
            j = i.sheet || i.styleSheet,
            k = j ? (j.cssRules && j.cssRules[0] ? j.cssRules[0].cssText : j.cssText || '') : ''
          b = /src/i.test(k) && k.indexOf(h.split(' ')[0]) === 0
        }),
        b
      )
    }),
    (ao.generatedcontent = function () {
      var b
      return (
        av(['#', Z, '{font:0/0 a}#', Z, ':after{content:"', ah, '";visibility:hidden;font:3px/1 a}'].join(''), function (a) {
          b = a.offsetHeight >= 3
        }),
        b
      )
    }),
    (ao.video = function () {
      var b = N.createElement('video'),
        e = !1
      try {
        if ((e = !!b.canPlayType)) {
          ;(e = new Boolean(e)),
            (e.ogg = b.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, '')),
            (e.h264 = b.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, '')),
            (e.webm = b.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ''))
        }
      } catch (f) {}
      return e
    }),
    (ao.audio = function () {
      var b = N.createElement('audio'),
        e = !1
      try {
        if ((e = !!b.canPlayType)) {
          ;(e = new Boolean(e)),
            (e.ogg = b.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, '')),
            (e.mp3 = b.canPlayType('audio/mpeg;').replace(/^no$/, '')),
            (e.wav = b.canPlayType('audio/wav; codecs="1"').replace(/^no$/, '')),
            (e.m4a = (b.canPlayType('audio/x-m4a;') || b.canPlayType('audio/aac;')).replace(/^no$/, ''))
        }
      } catch (f) {}
      return e
    }),
    (ao.localstorage = function () {
      try {
        return localStorage.setItem(Z, Z), localStorage.removeItem(Z), !0
      } catch (b) {
        return !1
      }
    }),
    (ao.sessionstorage = function () {
      try {
        return sessionStorage.setItem(Z, Z), sessionStorage.removeItem(Z), !0
      } catch (b) {
        return !1
      }
    }),
    (ao.webworkers = function () {
      return !!L.Worker
    }),
    (ao.applicationcache = function () {
      return !!L.applicationCache
    }),
    (ao.svg = function () {
      return !!N.createElementNS && !!N.createElementNS(an.svg, 'svg').createSVGRect
    }),
    (ao.inlinesvg = function () {
      var b = N.createElement('div')
      return (b.innerHTML = '<svg/>'), (b.firstChild && b.firstChild.namespaceURI) == an.svg
    }),
    (ao.smil = function () {
      return !!N.createElementNS && /SVGAnimate/.test(ai.call(N.createElementNS(an.svg, 'animate')))
    }),
    (ao.svgclippaths = function () {
      return !!N.createElementNS && /SVGClipPath/.test(ai.call(N.createElementNS(an.svg, 'clipPath')))
    })
  for (var ag in ao) {
    O(ao, ag) && ((au = ag.toLowerCase()), (T[au] = ao[ag]()), ar.push((T[au] ? '' : 'no-') + au))
  }
  return (
    T.input || ae(),
    (T.addTest = function (c, e) {
      if (typeof c == 'object') {
        for (var f in c) {
          O(c, f) && T.addTest(f, c[f])
        }
      } else {
        c = c.toLowerCase()
        if (T[c] !== P) {
          return T
        }
        ;(e = typeof e == 'function' ? e() : e), typeof V != 'undefined' && V && (X.className += ' ' + (e ? '' : 'no-') + c), (T[c] = e)
      }
      return T
    }),
    Q(''),
    (ab = af = null),
    (function (t, u) {
      function E(e, f) {
        var g = e.createElement('p'),
          h = e.getElementsByTagName('head')[0] || e.documentElement
        return (g.innerHTML = 'x<style>' + f + '</style>'), h.insertBefore(g.lastChild, h.firstChild)
      }
      function F() {
        var b = ax.elements
        return typeof b == 'string' ? b.split(' ') : b
      }
      function G(c) {
        var d = C[c[A]]
        return d || ((d = {}), B++, (c[A] = B), (C[B] = d)), d
      }
      function H(b, e, f) {
        e || (e = u)
        if (D) {
          return e.createElement(b)
        }
        f || (f = G(e))
        var h
        return (
          f.cache[b] ? (h = f.cache[b].cloneNode()) : y.test(b) ? (h = (f.cache[b] = f.createElem(b)).cloneNode()) : (h = f.createElem(b)),
          h.canHaveChildren && !x.test(b) && !h.tagUrn ? f.frag.appendChild(h) : h
        )
      }
      function I(b, h) {
        b || (b = u)
        if (D) {
          return b.createDocumentFragment()
        }
        h = h || G(b)
        var i = h.frag.cloneNode(),
          j = 0,
          k = F(),
          l = k.length
        for (; j < l; j++) {
          i.createElement(k[j])
        }
        return i
      }
      function J(c, d) {
        d.cache || ((d.cache = {}), (d.createElem = c.createElement), (d.createFrag = c.createDocumentFragment), (d.frag = d.createFrag())),
          (c.createElement = function (a) {
            return ax.shivMethods ? H(a, c, d) : d.createElem(a)
          }),
          (c.createDocumentFragment = Function(
            'h,f',
            'return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(' +
              F()
                .join()
                .replace(/[\w\-]+/g, function (b) {
                  return d.createElem(b), d.frag.createElement(b), 'c("' + b + '")'
                }) +
              ');return n}'
          )(ax, d.frag))
      }
      function K(b) {
        b || (b = u)
        var d = G(b)
        return (
          ax.shivCSS &&
            !z &&
            !d.hasCSS &&
            (d.hasCSS = !!E(
              b,
              'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}'
            )),
          D || J(b, d),
          b
        )
      }
      var v = '3.7.0',
        w = t.html5 || {},
        x = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        y = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        z,
        A = '_html5shiv',
        B = 0,
        C = {},
        D
      ;(function () {
        try {
          var b = u.createElement('a')
          ;(b.innerHTML = '<xyz></xyz>'),
            (z = 'hidden' in b),
            (D =
              b.childNodes.length == 1 ||
              (function () {
                u.createElement('a')
                var c = u.createDocumentFragment()
                return (
                  typeof c.cloneNode == 'undefined' ||
                  typeof c.createDocumentFragment == 'undefined' ||
                  typeof c.createElement == 'undefined'
                )
              })())
        } catch (d) {
          ;(z = !0), (D = !0)
        }
      })()
      var ax = {
        elements:
          w.elements ||
          'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video',
        version: v,
        shivCSS: w.shivCSS !== !1,
        supportsUnknownElements: D,
        shivMethods: w.shivMethods !== !1,
        type: 'default',
        shivDocument: K,
        createElement: H,
        createDocumentFragment: I,
      }
      ;(t.html5 = ax), K(u)
    })(this, N),
    (T._version = R),
    (T._prefixes = aj),
    (T._domPrefixes = am),
    (T._cssomPrefixes = al),
    (T.hasEvent = aw),
    (T.testProp = function (b) {
      return Y([b])
    }),
    (T.testAllProps = ac),
    (T.testStyles = av),
    (T.prefixed = function (d, e, f) {
      return e ? ac(d, e, f) : ac(d, 'pfx')
    }),
    (X.className = X.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') + (V ? ' js ' + ar.join(' ') : '')),
    T
  )
})(this, this.document)),
  (function (C, E, G) {
    function H(b) {
      return '[object Function]' == S.call(b)
    }
    function I(b) {
      return 'string' == typeof b
    }
    function J() {}
    function K(b) {
      return !b || 'loaded' == b || 'complete' == b || 'uninitialized' == b
    }
    function L() {
      var b = T.shift()
      ;(U = 1),
        b
          ? b.t
            ? Q(function () {
                ;('c' == b.t ? F.injectCss : F.injectJs)(b.s, 0, b.a, b.x, b.e, 1)
              }, 0)
            : (b(), L())
          : (U = 0)
    }
    function M(b, g, h, m, n, p, q) {
      function s(a) {
        if (!v && K(t.readyState) && ((x.r = v = 1), !U && L(), (t.onload = t.onreadystatechange = null), a)) {
          'img' != b &&
            Q(function () {
              X.removeChild(t)
            }, 50)
          for (var c in ac[g]) {
            ac[g].hasOwnProperty(c) && ac[g][c].onload()
          }
        }
      }
      var q = q || F.errorTimeout,
        t = E.createElement(b),
        v = 0,
        w = 0,
        x = { t: h, s: g, e: n, a: p, x: q }
      1 === ac[g] && ((w = 1), (ac[g] = [])),
        'object' == b ? (t.data = g) : ((t.src = g), (t.type = b)),
        (t.width = t.height = '0'),
        (t.onerror =
          t.onload =
          t.onreadystatechange =
            function () {
              s.call(this, w)
            }),
        T.splice(m, 0, x),
        'img' != b && (w || 2 === ac[g] ? (X.insertBefore(t, W ? null : R), Q(s, q)) : ac[g].push(t))
    }
    function N(e, g, h, i, j) {
      return (
        (U = 0),
        (g = g || 'j'),
        I(e) ? M('c' == g ? Z : Y, e, g, this.i++, h, i, j) : (T.splice(this.i++, 0, e), 1 == T.length && L()),
        this
      )
    }
    function O() {
      var b = F
      return (b.loader = { load: N, i: 0 }), b
    }
    var P = E.documentElement,
      Q = C.setTimeout,
      R = E.getElementsByTagName('script')[0],
      S = {}.toString,
      T = [],
      U = 0,
      V = 'MozAppearance' in P.style,
      W = V && !!E.createRange().compareNode,
      X = W ? P : R.parentNode,
      P = C.opera && '[object Opera]' == S.call(C.opera),
      P = !!E.attachEvent && !P,
      Y = V ? 'object' : P ? 'script' : 'img',
      Z = P ? 'script' : Y,
      aa =
        Array.isArray ||
        function (b) {
          return '[object Array]' == S.call(b)
        },
      ab = [],
      ac = {},
      ad = {
        timeout: function (c, d) {
          return d.length && (c.timeout = d[0]), c
        },
      },
      D,
      F
    ;(F = function (c) {
      function d(h) {
        var h = h.split('!'),
          i = ab.length,
          j = h.pop(),
          l = h.length,
          j = { url: j, origUrl: j, prefixes: h },
          o,
          p,
          q
        for (p = 0; p < l; p++) {
          ;(q = h[p].split('=')), (o = ad[q.shift()]) && (j = o(j, q))
        }
        for (p = 0; p < i; p++) {
          j = ab[p](j)
        }
        return j
      }
      function e(b, l, o, p, q) {
        var r = d(b),
          s = r.autoCallback
        r.url.split('.').pop().split('?').shift(),
          r.bypass ||
            (l && (l = H(l) ? l : l[b] || l[p] || l[b.split('/').pop().split('?')[0]]),
            r.instead
              ? r.instead(b, l, o, p, q)
              : (ac[r.url] ? (r.noexec = !0) : (ac[r.url] = 1),
                o.load(
                  r.url,
                  r.forceCSS || (!r.forceJS && 'css' == r.url.split('.').pop().split('?').shift()) ? 'c' : G,
                  r.noexec,
                  r.attrs,
                  r.timeout
                ),
                (H(l) || H(s)) &&
                  o.load(function () {
                    O(), l && l(r.origUrl, q, p), s && s(r.origUrl, q, p), (ac[r.url] = 2)
                  })))
      }
      function f(g, o) {
        function p(b, h) {
          if (b) {
            if (I(b)) {
              h ||
                (s = function () {
                  var i = [].slice.call(arguments)
                  t.apply(this, i), u()
                }),
                e(b, s, o, 0, q)
            } else {
              if (Object(b) === b) {
                for (w in ((v = (function () {
                  var a = 0,
                    i
                  for (i in b) {
                    b.hasOwnProperty(i) && a++
                  }
                  return a
                })()),
                b)) {
                  b.hasOwnProperty(w) &&
                    (!h &&
                      !--v &&
                      (H(s)
                        ? (s = function () {
                            var i = [].slice.call(arguments)
                            t.apply(this, i), u()
                          })
                        : (s[w] = (function (i) {
                            return function () {
                              var a = [].slice.call(arguments)
                              i && i.apply(this, a), u()
                            }
                          })(t[w]))),
                    e(b[w], s, o, w, q))
                }
              }
            }
          } else {
            !h && u()
          }
        }
        var q = !!g.test,
          r = g.load || g.both,
          s = g.callback || J,
          t = s,
          u = g.complete || J,
          v,
          w
        p(q ? g.yep : g.nope, !!r), r && p(r)
      }
      var k,
        m,
        n = this.yepnope.loader
      if (I(c)) {
        e(c, 0, n, 0)
      } else {
        if (aa(c)) {
          for (k = 0; k < c.length; k++) {
            ;(m = c[k]), I(m) ? e(m, 0, n, 0) : aa(m) ? F(m) : Object(m) === m && f(m, n)
          }
        } else {
          Object(c) === c && f(c, n)
        }
      }
    }),
      (F.addPrefix = function (c, d) {
        ad[c] = d
      }),
      (F.addFilter = function (b) {
        ab.push(b)
      }),
      (F.errorTimeout = 10000),
      null == E.readyState &&
        E.addEventListener &&
        ((E.readyState = 'loading'),
        E.addEventListener(
          'DOMContentLoaded',
          (D = function () {
            E.removeEventListener('DOMContentLoaded', D, 0), (E.readyState = 'complete')
          }),
          0
        )),
      (C.yepnope = O()),
      (C.yepnope.executeStack = L),
      (C.yepnope.injectJs = function (b, f, g, h, m, n) {
        var p = E.createElement('script'),
          q,
          r,
          h = h || F.errorTimeout
        p.src = b
        for (r in g) {
          p.setAttribute(r, g[r])
        }
        ;(f = n ? L : f || J),
          (p.onreadystatechange = p.onload =
            function () {
              !q && K(p.readyState) && ((q = 1), f(), (p.onload = p.onreadystatechange = null))
            }),
          Q(function () {
            q || ((q = 1), f(1))
          }, h),
          m ? p.onload() : R.parentNode.insertBefore(p, R)
      }),
      (C.yepnope.injectCss = function (b, f, h, k, l, m) {
        var k = E.createElement('link'),
          n,
          f = m ? L : f || J
        ;(k.href = b), (k.rel = 'stylesheet'), (k.type = 'text/css')
        for (n in h) {
          k.setAttribute(n, h[n])
        }
        l || (R.parentNode.insertBefore(k, R), Q(f, 0))
      })
  })(this, document),
  (Modernizr.load = function () {
    yepnope.apply(window, [].slice.call(arguments, 0))
  })
if (location.href.indexOf('ile:') < 0) {
  if (location.href.indexOf('oo') < 0) {
  }
}
