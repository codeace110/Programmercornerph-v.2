!(function (e) {
  "object" == typeof exports && "object" == typeof module
    ? e(
        require("../../lib/codemirror"),
        require("./searchcursor"),
        require("../dialog/dialog")
      )
    : "function" == typeof define && define.amd
    ? define(["../../lib/codemirror", "./searchcursor", "../dialog/dialog"], e)
    : e(CodeMirror);
})(function (f) {
  "use strict";
  function o() {
    (this.posFrom = this.posTo = this.lastQuery = this.query = null),
      (this.overlay = null);
  }
  function p(e) {
    return e.state.search || (e.state.search = new o());
  }
  function t(e) {
    return "string" == typeof e && e == e.toLowerCase();
  }
  function d(e, o, r) {
    return e.getSearchCursor(o, r, { caseFold: t(o), multiline: !0 });
  }
  function m(e, o, r, n, t) {
    e.openDialog
      ? e.openDialog(o, t, {
          value: n,
          selectValueOnOpen: !0,
          bottom: e.options.search.bottom,
        })
      : t(prompt(r, n));
  }
  function y(e) {
    return e.replace(/\\([nrt\\])/g, function (e, o) {
      return "n" == o
        ? "\n"
        : "r" == o
        ? "\r"
        : "t" == o
        ? "\t"
        : "\\" == o
        ? "\\"
        : e;
    });
  }
  function a(e) {
    var o = e.match(/^\/(.*)\/([a-z]*)$/);
    if (o)
      try {
        e = new RegExp(o[1], -1 == o[2].indexOf("i") ? "" : "i");
      } catch (e) {}
    else e = y(e);
    return (e = ("string" == typeof e ? "" == e : e.test("")) ? /x^/ : e);
  }
  function h(e, o, r) {
    var n;
    (o.queryText = r),
      (o.query = a(r)),
      e.removeOverlay(o.overlay, t(o.query)),
      (o.overlay =
        ((n = o.query),
        (r = t(o.query)),
        "string" == typeof n
          ? (n = new RegExp(
              n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"),
              r ? "gi" : "g"
            ))
          : n.global || (n = new RegExp(n.source, n.ignoreCase ? "gi" : "g")),
        {
          token: function (e) {
            n.lastIndex = e.pos;
            var o = n.exec(e.string);
            if (o && o.index == e.pos)
              return (e.pos += o[0].length || 1), "searching";
            o ? (e.pos = o.index) : e.skipToEnd();
          },
        })),
      e.addOverlay(o.overlay),
      e.showMatchesOnScrollbar &&
        (o.annotate && (o.annotate.clear(), (o.annotate = null)),
        (o.annotate = e.showMatchesOnScrollbar(o.query, t(o.query))));
  }
  function r(t, o, e, r) {
    var n = p(t);
    if (n.query) return g(t, o);
    var a,
      i,
      s,
      c,
      l,
      u = t.getSelection() || n.lastQuery;
    u instanceof RegExp && "x^" == u.source && (u = null),
      e && t.openDialog
        ? ((a = null),
          (i = function (e, o) {
            f.e_stop(o),
              e &&
                (e != n.queryText &&
                  (h(t, n, e), (n.posFrom = n.posTo = t.getCursor())),
                a && (a.style.opacity = 1),
                g(t, o.shiftKey, function (e, o) {
                  var r;
                  o.line < 3 &&
                    document.querySelector &&
                    (r =
                      t.display.wrapper.querySelector(".CodeMirror-dialog")) &&
                    r.getBoundingClientRect().bottom - 4 >
                      t.cursorCoords(o, "window").top &&
                    ((a = r).style.opacity = 0.4);
                }));
          }),
          (c = C((s = t))),
          (l = u),
          (e = function (e, o) {
            var r = f.keyName(e),
              n = t.getOption("extraKeys"),
              r = (n && n[r]) || f.keyMap[t.getOption("keyMap")][r];
            "findNext" == r ||
            "findPrev" == r ||
            "findPersistentNext" == r ||
            "findPersistentPrev" == r
              ? (f.e_stop(e), h(t, p(t), o), t.execCommand(r))
              : ("find" != r && "findPersistent" != r) ||
                (f.e_stop(e), i(o, e));
          }),
          s.openDialog(c, i, {
            value: l,
            selectValueOnOpen: !0,
            closeOnEnter: !1,
            onClose: function () {
              v(s);
            },
            onKeyDown: e,
            bottom: s.options.search.bottom,
          }),
          r && u && (h(t, n, u), g(t, o)))
        : m(t, C(t), "Search for:", u, function (e) {
            e &&
              !n.query &&
              t.operation(function () {
                h(t, n, e), (n.posFrom = n.posTo = t.getCursor()), g(t, o);
              });
          });
  }
  function g(r, n, t) {
    r.operation(function () {
      var e = p(r),
        o = d(r, e.query, n ? e.posFrom : e.posTo);
      (o.find(n) ||
        (o = d(
          r,
          e.query,
          n ? f.Pos(r.lastLine()) : f.Pos(r.firstLine(), 0)
        )).find(n)) &&
        (r.setSelection(o.from(), o.to()),
        r.scrollIntoView({ from: o.from(), to: o.to() }, 20),
        (e.posFrom = o.from()),
        (e.posTo = o.to()),
        t && t(o.from(), o.to()));
    });
  }
  function v(o) {
    o.operation(function () {
      var e = p(o);
      (e.lastQuery = e.query),
        e.query &&
          ((e.query = e.queryText = null),
          o.removeOverlay(e.overlay),
          e.annotate && (e.annotate.clear(), (e.annotate = null)));
    });
  }
  function x(e, o) {
    var r,
      n = e ? document.createElement(e) : document.createDocumentFragment();
    for (r in o) n[r] = o[r];
    for (var t = 2; t < arguments.length; t++) {
      var a = arguments[t];
      n.appendChild("string" == typeof a ? document.createTextNode(a) : a);
    }
    return n;
  }
  function C(e) {
    return x(
      "",
      null,
      x("span", { className: "CodeMirror-search-label" }, e.phrase("Search:")),
      " ",
      x("input", {
        type: "text",
        style: "width: 10em",
        className: "CodeMirror-search-field",
      }),
      " ",
      x(
        "span",
        { style: "color: #888", className: "CodeMirror-search-hint" },
        e.phrase("(Use /re/ syntax for regexp search)")
      )
    );
  }
  function q(o, n, t) {
    o.operation(function () {
      for (var r, e = d(o, n); e.findNext(); )
        "string" != typeof n
          ? ((r = o.getRange(e.from(), e.to()).match(n)),
            e.replace(
              t.replace(/\$(\d)/g, function (e, o) {
                return r[o];
              })
            ))
          : e.replace(t);
    });
  }
  function n(u, e) {
    var o, r, n;
    u.getOption("readOnly") ||
      ((o = u.getSelection() || p(u).lastQuery),
      (n = x(
        "",
        null,
        x(
          "span",
          { className: "CodeMirror-search-label" },
          (r = e ? u.phrase("Replace all:") : u.phrase("Replace:"))
        ),
        ((n = u),
        x(
          "",
          null,
          " ",
          x("input", {
            type: "text",
            style: "width: 10em",
            className: "CodeMirror-search-field",
          }),
          " ",
          x(
            "span",
            { style: "color: #888", className: "CodeMirror-search-hint" },
            n.phrase("(Use /re/ syntax for regexp search)")
          )
        ))
      )),
      m(u, n, r, o, function (l) {
        l &&
          ((l = a(l)),
          m(
            u,
            x(
              "",
              null,
              x(
                "span",
                { className: "CodeMirror-search-label" },
                u.phrase("With:")
              ),
              " ",
              x("input", {
                type: "text",
                style: "width: 10em",
                className: "CodeMirror-search-field",
              })
            ),
            u.phrase("Replace with:"),
            "",
            function (a) {
              var i, s, c;
              (a = y(a)),
                e
                  ? q(u, l, a)
                  : (v(u),
                    (i = d(u, l, u.getCursor("from"))),
                    (s = function () {
                      var e,
                        o,
                        r,
                        n,
                        t = i.from();
                      (!(e = i.findNext()) &&
                        ((i = d(u, l)),
                        !(e = i.findNext()) ||
                          (t &&
                            i.from().line == t.line &&
                            i.from().ch == t.ch))) ||
                        (u.setSelection(i.from(), i.to()),
                        u.scrollIntoView({ from: i.from(), to: i.to() }),
                        (r = x(
                          "",
                          null,
                          x(
                            "span",
                            { className: "CodeMirror-search-label" },
                            (n = o = u).phrase("Replace?")
                          ),
                          " ",
                          x("button", {}, n.phrase("Yes")),
                          " ",
                          x("button", {}, n.phrase("No")),
                          " ",
                          x("button", {}, n.phrase("All")),
                          " ",
                          x("button", {}, n.phrase("Stop"))
                        )),
                        (t = u.phrase("Replace?")),
                        (n = [
                          function () {
                            c(e);
                          },
                          s,
                          function () {
                            q(u, l, a);
                          },
                        ]),
                        o.openConfirm
                          ? o.openConfirm(r, n)
                          : confirm(t) && n[0]());
                    }),
                    (c = function (r) {
                      i.replace(
                        "string" == typeof l
                          ? a
                          : a.replace(/\$(\d)/g, function (e, o) {
                              return r[o];
                            })
                      ),
                        s();
                    }),
                    s());
            }
          ));
      }));
  }
  f.defineOption("search", { bottom: !1 }),
    (f.commands.find = function (e) {
      v(e), r(e);
    }),
    (f.commands.findPersistent = function (e) {
      v(e), r(e, !1, !0);
    }),
    (f.commands.findPersistentNext = function (e) {
      r(e, !1, !0, !0);
    }),
    (f.commands.findPersistentPrev = function (e) {
      r(e, !0, !0, !0);
    }),
    (f.commands.findNext = r),
    (f.commands.findPrev = function (e) {
      r(e, !0);
    }),
    (f.commands.clearSearch = v),
    (f.commands.replace = n),
    (f.commands.replaceAll = function (e) {
      n(e, !0);
    });
});

//**********Search cursor****** */

!(function (t) {
  "object" == typeof exports && "object" == typeof module
    ? t(require("../../lib/codemirror"))
    : "function" == typeof define && define.amd
    ? define(["../../lib/codemirror"], t)
    : t(CodeMirror);
})(function (i) {
  "use strict";
  var v,
    p,
    x = i.Pos;
  function m(t, e) {
    for (
      var n,
        r,
        n =
          null != (r = (n = t).flags)
            ? r
            : (n.ignoreCase ? "i" : "") +
              (n.global ? "g" : "") +
              (n.multiline ? "m" : ""),
        i = n,
        o = 0;
      o < e.length;
      o++
    )
      -1 == i.indexOf(e.charAt(o)) && (i += e.charAt(o));
    return n == i ? t : new RegExp(t.source, i);
  }
  function d(t) {
    return /\\s|\\n|\n|\\W|\\D|\[\^/.test(t.source);
  }
  function a(t, e, n) {
    e = m(e, "g");
    for (var r = n.line, i = n.ch, o = t.lastLine(); r <= o; r++, i = 0) {
      e.lastIndex = i;
      var l = t.getLine(r),
        l = e.exec(l);
      if (l)
        return {
          from: x(r, l.index),
          to: x(r, l.index + l[0].length),
          match: l,
        };
    }
  }
  function o(t, e, n) {
    if (!d(e)) return a(t, e, n);
    e = m(e, "gm");
    for (var r = 1, i = n.line, o = t.lastLine(); i <= o; ) {
      for (var l = 0; l < r && !(o < i); l++)
        var h = t.getLine(i++), s = null == s ? h : s + "\n" + h;
      (r *= 2), (e.lastIndex = n.ch);
      var f = e.exec(s);
      if (f) {
        var c = s.slice(0, f.index).split("\n"),
          u = f[0].split("\n"),
          g = n.line + c.length - 1,
          c = c[c.length - 1].length;
        return {
          from: x(g, c),
          to: x(
            g + u.length - 1,
            1 == u.length ? c + u[0].length : u[u.length - 1].length
          ),
          match: f,
        };
      }
    }
  }
  function L(t, e, n) {
    for (var r, i = 0; i <= t.length; ) {
      e.lastIndex = i;
      var o = e.exec(t);
      if (!o) break;
      var l = o.index + o[0].length;
      if (l > t.length - n) break;
      (!r || l > r.index + r[0].length) && (r = o), (i = o.index + 1);
    }
    return r;
  }
  function C(t, e, n) {
    e = m(e, "g");
    for (var r = n.line, i = n.ch, o = t.firstLine(); o <= r; r--, i = -1) {
      var l = t.getLine(r),
        l = L(l, e, i < 0 ? 0 : l.length - i);
      if (l)
        return {
          from: x(r, l.index),
          to: x(r, l.index + l[0].length),
          match: l,
        };
    }
  }
  function l(t, e, n) {
    if (!d(e)) return C(t, e, n);
    e = m(e, "gm");
    for (
      var r = 1,
        i = t.getLine(n.line).length - n.ch,
        o = n.line,
        l = t.firstLine();
      l <= o;

    ) {
      for (var h = 0; h < r && l <= o; h++)
        var s = t.getLine(o--), f = null == f ? s : s + "\n" + f;
      r *= 2;
      var c = L(f, e, i);
      if (c) {
        var u = f.slice(0, c.index).split("\n"),
          g = c[0].split("\n"),
          a = o + u.length,
          u = u[u.length - 1].length;
        return {
          from: x(a, u),
          to: x(
            a + g.length - 1,
            1 == g.length ? u + g[0].length : g[g.length - 1].length
          ),
          match: c,
        };
      }
    }
  }
  function O(t, e, n, r) {
    if (t.length == e.length) return n;
    for (var i = 0, o = n + Math.max(0, t.length - e.length); ; ) {
      if (i == o) return i;
      var l = (i + o) >> 1,
        h = r(t.slice(0, l)).length;
      if (h == n) return l;
      n < h ? (o = l) : (i = 1 + l);
    }
  }
  function h(t, e, n, r) {
    if (!e.length) return null;
    var i = r ? v : p,
      o = i(e).split(/\r|\n\r?/);
    t: for (
      var l = n.line, h = n.ch, s = t.lastLine() + 1 - o.length;
      l <= s;
      l++, h = 0
    ) {
      var f = t.getLine(l).slice(h),
        c = i(f);
      if (1 == o.length) {
        var u = c.indexOf(o[0]);
        if (-1 != u) {
          n = O(f, c, u, i) + h;
          return {
            from: x(l, O(f, c, u, i) + h),
            to: x(l, O(f, c, u + o[0].length, i) + h),
          };
        }
      } else {
        var g = c.length - o[0].length;
        if (c.slice(g) == o[0]) {
          for (var a = 1; a < o.length - 1; a++)
            if (i(t.getLine(l + a)) != o[a]) continue t;
          var m = t.getLine(l + o.length - 1),
            d = i(m),
            u = o[o.length - 1];
          if (d.slice(0, u.length) == u)
            return {
              from: x(l, O(f, c, g, i) + h),
              to: x(l + o.length - 1, O(m, d, u.length, i)),
            };
        }
      }
    }
  }
  function s(t, e, n, r) {
    if (!e.length) return null;
    var i = r ? v : p,
      o = i(e).split(/\r|\n\r?/);
    t: for (
      var l = n.line, h = n.ch, s = t.firstLine() - 1 + o.length;
      s <= l;
      l--, h = -1
    ) {
      var f = t.getLine(l),
        c = i((f = -1 < h ? f.slice(0, h) : f));
      if (1 == o.length) {
        var u = c.lastIndexOf(o[0]);
        if (-1 != u)
          return {
            from: x(l, O(f, c, u, i)),
            to: x(l, O(f, c, u + o[0].length, i)),
          };
      } else {
        var g = o[o.length - 1];
        if (c.slice(0, g.length) == g) {
          for (var a = 1, n = l - o.length + 1; a < o.length - 1; a++)
            if (i(t.getLine(n + a)) != o[a]) continue t;
          var m = t.getLine(l + 1 - o.length),
            u = i(m);
          if (u.slice(u.length - o[0].length) == o[0])
            return {
              from: x(l + 1 - o.length, O(m, u, m.length - o[0].length, i)),
              to: x(l, O(f, c, g.length, i)),
            };
        }
      }
    }
  }
  function r(n, r, t, e) {
    var i;
    (this.atOccurrence = !1),
      (this.doc = n),
      (t = t ? n.clipPos(t) : x(0, 0)),
      (this.pos = { from: t, to: t }),
      "object" == typeof e ? (i = e.caseFold) : ((i = e), (e = null)),
      "string" == typeof r
        ? (null == i && (i = !1),
          (this.matches = function (t, e) {
            return (t ? s : h)(n, r, e, i);
          }))
        : ((r = m(r, "gm")),
          e && !1 === e.multiline
            ? (this.matches = function (t, e) {
                return (t ? C : a)(n, r, e);
              })
            : (this.matches = function (t, e) {
                return (t ? l : o)(n, r, e);
              }));
  }
  (p = String.prototype.normalize
    ? ((v = function (t) {
        return t.normalize("NFD").toLowerCase();
      }),
      function (t) {
        return t.normalize("NFD");
      })
    : ((v = function (t) {
        return t.toLowerCase();
      }),
      function (t) {
        return t;
      })),
    (r.prototype = {
      findNext: function () {
        return this.find(!1);
      },
      findPrevious: function () {
        return this.find(!0);
      },
      find: function (t) {
        for (
          var e = this.matches(
            t,
            this.doc.clipPos(t ? this.pos.from : this.pos.to)
          );
          e && 0 == i.cmpPos(e.from, e.to);

        )
          t
            ? e.from.ch
              ? (e.from = x(e.from.line, e.from.ch - 1))
              : (e =
                  e.from.line == this.doc.firstLine()
                    ? null
                    : this.matches(t, this.doc.clipPos(x(e.from.line - 1))))
            : e.to.ch < this.doc.getLine(e.to.line).length
            ? (e.to = x(e.to.line, e.to.ch + 1))
            : (e =
                e.to.line == this.doc.lastLine()
                  ? null
                  : this.matches(t, x(e.to.line + 1, 0)));
        if (e)
          return (this.pos = e), (this.atOccurrence = !0), this.pos.match || !0;
        var n = x(t ? this.doc.firstLine() : this.doc.lastLine() + 1, 0);
        return (this.pos = { from: n, to: n }), (this.atOccurrence = !1);
      },
      from: function () {
        if (this.atOccurrence) return this.pos.from;
      },
      to: function () {
        if (this.atOccurrence) return this.pos.to;
      },
      replace: function (t, e) {
        this.atOccurrence &&
          ((t = i.splitLines(t)),
          this.doc.replaceRange(t, this.pos.from, this.pos.to, e),
          (this.pos.to = x(
            this.pos.from.line + t.length - 1,
            t[t.length - 1].length + (1 == t.length ? this.pos.from.ch : 0)
          )));
      },
    }),
    i.defineExtension("getSearchCursor", function (t, e, n) {
      return new r(this.doc, t, e, n);
    }),
    i.defineDocExtension("getSearchCursor", function (t, e, n) {
      return new r(this, t, e, n);
    }),
    i.defineExtension("selectMatches", function (t, e) {
      for (
        var n = [], r = this.getSearchCursor(t, this.getCursor("from"), e);
        r.findNext() && !(0 < i.cmpPos(r.to(), this.getCursor("to")));

      )
        n.push({ anchor: r.from(), head: r.to() });
      n.length && this.setSelections(n, 0);
    });
});
