!(function (e) {
  "object" == typeof exports && "object" == typeof module
    ? e(require("../../lib/codemirror"), require("../../mode/css/css"))
    : "function" == typeof define && define.amd
    ? define(["../../lib/codemirror", "../../mode/css/css"], e)
    : e(CodeMirror);
})(function (l) {
  "use strict";
  var c = {
    active: 1,
    after: 1,
    before: 1,
    checked: 1,
    default: 1,
    disabled: 1,
    empty: 1,
    enabled: 1,
    "first-child": 1,
    "first-letter": 1,
    "first-line": 1,
    "first-of-type": 1,
    focus: 1,
    hover: 1,
    "in-range": 1,
    indeterminate: 1,
    invalid: 1,
    lang: 1,
    "last-child": 1,
    "last-of-type": 1,
    link: 1,
    not: 1,
    "nth-child": 1,
    "nth-last-child": 1,
    "nth-last-of-type": 1,
    "nth-of-type": 1,
    "only-of-type": 1,
    "only-child": 1,
    optional: 1,
    "out-of-range": 1,
    placeholder: 1,
    "read-only": 1,
    "read-write": 1,
    required: 1,
    root: 1,
    selection: 1,
    target: 1,
    valid: 1,
    visited: 1,
  };
  l.registerHelper("hint", "css", function (e) {
    var t = e.getCursor(),
      r = e.getTokenAt(t),
      o = l.innerMode(e.getMode(), r.state);
    if ("css" == o.mode.name) {
      if ("keyword" == r.type && 0 == "!important".indexOf(r.string))
        return {
          list: ["!important"],
          from: l.Pos(t.line, r.start),
          to: l.Pos(t.line, r.end),
        };
      var i = r.start,
        s = t.ch,
        n = r.string.slice(0, s - i);
      /[^\w$_-]/.test(n) && ((n = ""), (i = s = t.ch));
      var e = l.resolveMode("text/css"),
        a = [],
        o = o.state.state;
      return (
        "pseudo" == o || "variable-3" == r.type
          ? d(c)
          : "block" == o || "maybeprop" == o
          ? d(e.propertyKeywords)
          : "prop" == o || "parens" == o || "at" == o || "params" == o
          ? (d(e.valueKeywords), d(e.colorKeywords))
          : ("media" != o && "media_parens" != o) ||
            (d(e.mediaTypes), d(e.mediaFeatures)),
        a.length
          ? { list: a, from: l.Pos(t.line, i), to: l.Pos(t.line, s) }
          : void 0
      );
    }
    function d(e) {
      for (var t in e) (n && 0 != t.lastIndexOf(n, 0)) || a.push(t);
    }
  });
});

/*******hint min js */

!(function (l) {
  "object" == typeof exports && "object" == typeof module
    ? l(require("../../lib/codemirror"), require("./xml-hint"))
    : "function" == typeof define && define.amd
    ? define(["../../lib/codemirror", "./xml-hint"], l)
    : l(CodeMirror);
})(function (n) {
  "use strict";
  var l,
    t =
      "ab aa af ak sq am ar an hy as av ae ay az bm ba eu be bn bh bi bs br bg my ca ch ce ny zh cv kw co cr hr cs da dv nl dz en eo et ee fo fj fi fr ff gl ka de el gn gu ht ha he hz hi ho hu ia id ie ga ig ik io is it iu ja jv kl kn kr ks kk km ki rw ky kv kg ko ku kj la lb lg li ln lo lt lu lv gv mk mg ms ml mt mi mr mh mn na nv nb nd ne ng nn no ii nr oc oj cu om or os pa pi fa pl ps pt qu rm rn ro ru sa sc sd se sm sg sr gd sn si sk sl so st es su sw ss sv ta te tg th ti bo tk tl tn to tr ts tt tw ty ug uk ur uz ve vi vo wa cy wo fy xh yi yo za zu".split(
        " "
      ),
    e = ["_blank", "_self", "_top", "_parent"],
    a = ["ascii", "utf-8", "utf-16", "latin1", "latin1"],
    r = ["get", "post", "put", "delete"],
    o = [
      "application/x-www-form-urlencoded",
      "multipart/form-data",
      "text/plain",
    ],
    s = [
      "all",
      "screen",
      "print",
      "embossed",
      "braille",
      "handheld",
      "print",
      "projection",
      "screen",
      "tty",
      "tv",
      "speech",
      "3d-glasses",
      "resolution [>][<][=] [X]",
      "device-aspect-ratio: X/Y",
      "orientation:portrait",
      "orientation:landscape",
      "device-height: [X]",
      "device-width: [X]",
    ],
    u = { attrs: {} },
    i = {
      a: {
        attrs: {
          href: null,
          ping: null,
          type: null,
          media: s,
          target: e,
          hreflang: t,
        },
      },
      abbr: u,
      acronym: u,
      address: u,
      applet: u,
      area: {
        attrs: {
          alt: null,
          coords: null,
          href: null,
          target: null,
          ping: null,
          media: s,
          hreflang: t,
          type: null,
          shape: ["default", "rect", "circle", "poly"],
        },
      },
      article: u,
      aside: u,
      audio: {
        attrs: {
          src: null,
          mediagroup: null,
          crossorigin: ["anonymous", "use-credentials"],
          preload: ["none", "metadata", "auto"],
          autoplay: ["", "autoplay"],
          loop: ["", "loop"],
          controls: ["", "controls"],
        },
      },
      b: u,
      base: { attrs: { href: null, target: e } },
      basefont: u,
      bdi: u,
      bdo: u,
      big: u,
      blockquote: { attrs: { cite: null } },
      body: u,
      br: u,
      button: {
        attrs: {
          form: null,
          formaction: null,
          name: null,
          value: null,
          autofocus: ["", "autofocus"],
          disabled: ["", "autofocus"],
          formenctype: o,
          formmethod: r,
          formnovalidate: ["", "novalidate"],
          formtarget: e,
          type: ["submit", "reset", "button"],
        },
      },
      canvas: { attrs: { width: null, height: null } },
      caption: u,
      center: u,
      cite: u,
      code: u,
      col: { attrs: { span: null } },
      colgroup: { attrs: { span: null } },
      command: {
        attrs: {
          type: ["command", "checkbox", "radio"],
          label: null,
          icon: null,
          radiogroup: null,
          command: null,
          title: null,
          disabled: ["", "disabled"],
          checked: ["", "checked"],
        },
      },
      data: { attrs: { value: null } },
      datagrid: {
        attrs: { disabled: ["", "disabled"], multiple: ["", "multiple"] },
      },
      datalist: { attrs: { data: null } },
      dd: u,
      del: { attrs: { cite: null, datetime: null } },
      details: { attrs: { open: ["", "open"] } },
      dfn: u,
      dir: u,
      div: u,
      dialog: { attrs: { open: null } },
      dl: u,
      dt: u,
      em: u,
      embed: { attrs: { src: null, type: null, width: null, height: null } },
      eventsource: { attrs: { src: null } },
      fieldset: {
        attrs: { disabled: ["", "disabled"], form: null, name: null },
      },
      figcaption: u,
      figure: u,
      font: u,
      footer: u,
      form: {
        attrs: {
          action: null,
          name: null,
          "accept-charset": a,
          autocomplete: ["on", "off"],
          enctype: o,
          method: r,
          novalidate: ["", "novalidate"],
          target: e,
        },
      },
      frame: u,
      frameset: u,
      h1: u,
      h2: u,
      h3: u,
      h4: u,
      h5: u,
      h6: u,
      head: {
        attrs: {},
        children: [
          "title",
          "base",
          "link",
          "style",
          "meta",
          "script",
          "noscript",
          "command",
        ],
      },
      header: u,
      hgroup: u,
      hr: u,
      html: { attrs: { manifest: null }, children: ["head", "body"] },
      i: u,
      iframe: {
        attrs: {
          src: null,
          srcdoc: null,
          name: null,
          width: null,
          height: null,
          sandbox: [
            "allow-top-navigation",
            "allow-same-origin",
            "allow-forms",
            "allow-scripts",
          ],
          seamless: ["", "seamless"],
        },
      },
      img: {
        attrs: {
          alt: null,
          src: null,
          ismap: null,
          usemap: null,
          width: null,
          height: null,
          crossorigin: ["anonymous", "use-credentials"],
        },
      },
      input: {
        attrs: {
          alt: null,
          dirname: null,
          form: null,
          formaction: null,
          height: null,
          list: null,
          max: null,
          maxlength: null,
          min: null,
          name: null,
          pattern: null,
          placeholder: null,
          size: null,
          src: null,
          step: null,
          value: null,
          width: null,
          accept: ["audio/*", "video/*", "image/*"],
          autocomplete: ["on", "off"],
          autofocus: ["", "autofocus"],
          checked: ["", "checked"],
          disabled: ["", "disabled"],
          formenctype: o,
          formmethod: r,
          formnovalidate: ["", "novalidate"],
          formtarget: e,
          multiple: ["", "multiple"],
          readonly: ["", "readonly"],
          required: ["", "required"],
          type: [
            "hidden",
            "text",
            "search",
            "tel",
            "url",
            "email",
            "password",
            "datetime",
            "date",
            "month",
            "week",
            "time",
            "datetime-local",
            "number",
            "range",
            "color",
            "checkbox",
            "radio",
            "file",
            "submit",
            "image",
            "reset",
            "button",
          ],
        },
      },
      ins: { attrs: { cite: null, datetime: null } },
      kbd: u,
      keygen: {
        attrs: {
          challenge: null,
          form: null,
          name: null,
          autofocus: ["", "autofocus"],
          disabled: ["", "disabled"],
          keytype: ["RSA"],
        },
      },
      label: { attrs: { for: null, form: null } },
      legend: u,
      li: { attrs: { value: null } },
      link: {
        attrs: {
          href: null,
          type: null,
          hreflang: t,
          media: s,
          sizes: ["all", "16x16", "16x16 32x32", "16x16 32x32 64x64"],
        },
      },
      map: { attrs: { name: null } },
      mark: u,
      menu: { attrs: { label: null, type: ["list", "context", "toolbar"] } },
      meta: {
        attrs: {
          content: null,
          charset: a,
          name: [
            "viewport",
            "application-name",
            "author",
            "description",
            "generator",
            "keywords",
          ],
          "http-equiv": [
            "content-language",
            "content-type",
            "default-style",
            "refresh",
          ],
        },
      },
      meter: {
        attrs: {
          value: null,
          min: null,
          low: null,
          high: null,
          max: null,
          optimum: null,
        },
      },
      nav: u,
      noframes: u,
      noscript: u,
      object: {
        attrs: {
          data: null,
          type: null,
          name: null,
          usemap: null,
          form: null,
          width: null,
          height: null,
          typemustmatch: ["", "typemustmatch"],
        },
      },
      ol: {
        attrs: {
          reversed: ["", "reversed"],
          start: null,
          type: ["1", "a", "A", "i", "I"],
        },
      },
      optgroup: { attrs: { disabled: ["", "disabled"], label: null } },
      option: {
        attrs: {
          disabled: ["", "disabled"],
          label: null,
          selected: ["", "selected"],
          value: null,
        },
      },
      output: { attrs: { for: null, form: null, name: null } },
      p: u,
      param: { attrs: { name: null, value: null } },
      pre: u,
      progress: { attrs: { value: null, max: null } },
      q: { attrs: { cite: null } },
      rp: u,
      rt: u,
      ruby: u,
      s: u,
      samp: u,
      script: {
        attrs: {
          type: ["text/javascript"],
          src: null,
          async: ["", "async"],
          defer: ["", "defer"],
          charset: a,
        },
      },
      section: u,
      select: {
        attrs: {
          form: null,
          name: null,
          size: null,
          autofocus: ["", "autofocus"],
          disabled: ["", "disabled"],
          multiple: ["", "multiple"],
        },
      },
      small: u,
      source: { attrs: { src: null, type: null, media: null } },
      span: u,
      strike: u,
      strong: u,
      style: { attrs: { type: ["text/css"], media: s, scoped: null } },
      sub: u,
      summary: u,
      sup: u,
      table: u,
      tbody: u,
      td: { attrs: { colspan: null, rowspan: null, headers: null } },
      textarea: {
        attrs: {
          dirname: null,
          form: null,
          maxlength: null,
          name: null,
          placeholder: null,
          rows: null,
          cols: null,
          autofocus: ["", "autofocus"],
          disabled: ["", "disabled"],
          readonly: ["", "readonly"],
          required: ["", "required"],
          wrap: ["soft", "hard"],
        },
      },
      tfoot: u,
      th: {
        attrs: {
          colspan: null,
          rowspan: null,
          headers: null,
          scope: ["row", "col", "rowgroup", "colgroup"],
        },
      },
      thead: u,
      time: { attrs: { datetime: null } },
      title: u,
      tr: u,
      track: {
        attrs: {
          src: null,
          label: null,
          default: null,
          kind: [
            "subtitles",
            "captions",
            "descriptions",
            "chapters",
            "metadata",
          ],
          srclang: t,
        },
      },
      tt: u,
      u: u,
      ul: u,
      var: u,
      video: {
        attrs: {
          src: null,
          poster: null,
          width: null,
          height: null,
          crossorigin: ["anonymous", "use-credentials"],
          preload: ["auto", "metadata", "none"],
          autoplay: ["", "autoplay"],
          mediagroup: ["movie"],
          muted: ["", "muted"],
          controls: ["", "controls"],
        },
      },
      wbr: u,
    },
    d = {
      accesskey: [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
      ],
      class: null,
      contenteditable: ["true", "false"],
      contextmenu: null,
      dir: ["ltr", "rtl", "auto"],
      draggable: ["true", "false", "auto"],
      dropzone: ["copy", "move", "link", "string:", "file:"],
      hidden: ["hidden"],
      id: null,
      inert: ["inert"],
      itemid: null,
      itemprop: null,
      itemref: null,
      itemscope: ["itemscope"],
      itemtype: null,
      lang: ["en", "es"],
      spellcheck: ["true", "false"],
      autocorrect: ["true", "false"],
      autocapitalize: ["true", "false"],
      style: null,
      tabindex: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
      title: null,
      translate: ["yes", "no"],
      onclick: null,
      rel: [
        "stylesheet",
        "alternate",
        "author",
        "bookmark",
        "help",
        "license",
        "next",
        "nofollow",
        "noreferrer",
        "prefetch",
        "prev",
        "search",
        "tag",
      ],
    };
  function c(l) {
    for (var t in d) d.hasOwnProperty(t) && (l.attrs[t] = d[t]);
  }
  for (l in (c(u), i)) i.hasOwnProperty(l) && i[l] != u && c(i[l]);
  (n.htmlSchema = i),
    n.registerHelper("hint", "html", function (l, t) {
      var e = { schemaInfo: i };
      if (t) for (var a in t) e[a] = t[a];
      return n.hint.xml(l, e);
    });
});

/******************hint */

!(function (t) {
  "object" == typeof exports && "object" == typeof module
    ? t(require("../../lib/codemirror"))
    : "function" == typeof define && define.amd
    ? define(["../../lib/codemirror"], t)
    : t(CodeMirror);
})(function (f) {
  var c = f.Pos;
  function g(t, e) {
    for (var r = 0, n = t.length; r < n; ++r) e(t[r]);
  }
  function r(t, e, r, n) {
    var i = t.getCursor(),
      o = r(t, i);
    if (!/\b(?:string|comment)\b/.test(o.type)) {
      var s = f.innerMode(t.getMode(), o.state);
      if ("json" !== s.mode.helperType) {
        (o.state = s.state),
          /^[\w$_]*$/.test(o.string)
            ? o.end > i.ch &&
              ((o.end = i.ch), (o.string = o.string.slice(0, i.ch - o.start)))
            : (o = {
                start: i.ch,
                end: i.ch,
                string: "",
                state: o.state,
                type: "." == o.string ? "property" : null,
              });
        for (var a = o; "property" == a.type; ) {
          if ("." != (a = r(t, c(i.line, a.start))).string) return;
          var a = r(t, c(i.line, a.start)),
            l = l || [];
          l.push(a);
        }
        return {
          list: (function (t, e, r, n) {
            var i = [],
              o = t.string,
              s = (n && n.globalScope) || window;
            function a(t) {
              0 != t.lastIndexOf(o, 0) ||
                (function (t, e) {
                  if (Array.prototype.indexOf) return -1 != t.indexOf(e);
                  for (var r = t.length; r--; ) if (t[r] === e) return 1;
                })(i, t) ||
                i.push(t);
            }
            function l(t) {
              "string" == typeof t
                ? g(y, a)
                : t instanceof Array
                ? g(h, a)
                : t instanceof Function && g(v, a),
                (function (t, e) {
                  if (Object.getOwnPropertyNames && Object.getPrototypeOf)
                    for (var r = t; r; r = Object.getPrototypeOf(r))
                      Object.getOwnPropertyNames(r).forEach(e);
                  else for (var n in t) e(n);
                })(t, a);
            }
            if (e && e.length) {
              var f,
                c = e.pop();
              for (
                c.type && 0 === c.type.indexOf("variable")
                  ? (n &&
                      n.additionalContext &&
                      (f = n.additionalContext[c.string]),
                    (n && !1 === n.useGlobalScope) || (f = f || s[c.string]))
                  : "string" == c.type
                  ? (f = "")
                  : "atom" == c.type
                  ? (f = 1)
                  : "function" == c.type &&
                    (null == s.jQuery ||
                    ("$" != c.string && "jQuery" != c.string) ||
                    "function" != typeof s.jQuery
                      ? null != s._ &&
                        "_" == c.string &&
                        "function" == typeof s._ &&
                        (f = s._())
                      : (f = s.jQuery()));
                null != f && e.length;

              )
                f = f[e.pop().string];
              null != f && l(f);
            } else {
              for (var p = t.state.localVars; p; p = p.next) a(p.name);
              for (var u = t.state.context; u; u = u.prev)
                for (p = u.vars; p; p = p.next) a(p.name);
              for (p = t.state.globalVars; p; p = p.next) a(p.name);
              if (n && null != n.additionalContext)
                for (var d in n.additionalContext) a(d);
              (n && !1 === n.useGlobalScope) || l(s), g(r, a);
            }
            return i;
          })(o, l, e, n),
          from: c(i.line, o.start),
          to: c(i.line, o.end),
        };
      }
    }
  }
  function n(t, e) {
    t = t.getTokenAt(e);
    return (
      e.ch == t.start + 1 && "." == t.string.charAt(0)
        ? ((t.end = t.start), (t.string = "."), (t.type = "property"))
        : /^\.[\w$_]*$/.test(t.string) &&
          ((t.type = "property"),
          t.start++,
          (t.string = t.string.replace(/\./, ""))),
      t
    );
  }
  f.registerHelper("hint", "javascript", function (t, e) {
    return r(
      t,
      i,
      function (t, e) {
        return t.getTokenAt(e);
      },
      e
    );
  }),
    f.registerHelper("hint", "coffeescript", function (t, e) {
      return r(t, o, n, e);
    });
  var y =
      "charAt charCodeAt indexOf lastIndexOf substring substr slice trim trimLeft trimRight toUpperCase toLowerCase split concat match replace search".split(
        " "
      ),
    h =
      "length concat join splice push pop shift unshift slice reverse sort indexOf lastIndexOf every some filter forEach map reduce reduceRight ".split(
        " "
      ),
    v = "prototype apply call bind".split(" "),
    i =
      "break case catch class const continue debugger default delete do else export extends false finally for function if in import instanceof new null return super switch this throw true try typeof var void while with yield".split(
        " "
      ),
    o =
      "and break catch class continue delete do else extends false finally for if in instanceof isnt new no not null of off on or return switch then throw true try typeof until void while with yes".split(
        " "
      );
});

/*******code mirror hint */

!(function (t) {
  "object" == typeof exports && "object" == typeof module
    ? t(require("../../lib/codemirror"))
    : "function" == typeof define && define.amd
    ? define(["../../lib/codemirror"], t)
    : t(CodeMirror);
})(function (T) {
  "use strict";
  var F = "CodeMirror-hint-active";
  function n(t, e) {
    var i;
    (this.cm = t),
      (this.options = e),
      (this.widget = null),
      (this.debounce = 0),
      (this.tick = 0),
      (this.startPos = this.cm.getCursor("start")),
      (this.startLen =
        this.cm.getLine(this.startPos.line).length -
        this.cm.getSelection().length),
      this.options.updateOnCursorActivity &&
        t.on(
          "cursorActivity",
          ((i = this).activityFunc = function () {
            i.cursorActivity();
          })
        );
  }
  (T.showHint = function (t, e, i) {
    if (!e) return t.showHint(i);
    i && i.async && (e.async = !0);
    var n = { hint: e };
    if (i) for (var o in i) n[o] = i[o];
    return t.showHint(n);
  }),
    T.defineExtension("showHint", function (t) {
      t = (function (t, e, i) {
        var n = t.options.hintOptions,
          o = {};
        for (s in c) o[s] = c[s];
        if (n) for (var s in n) void 0 !== n[s] && (o[s] = n[s]);
        if (i) for (var s in i) void 0 !== i[s] && (o[s] = i[s]);
        o.hint.resolve && (o.hint = o.hint.resolve(t, e));
        return o;
      })(this, this.getCursor("start"), t);
      var e = this.listSelections();
      if (!(1 < e.length)) {
        if (this.somethingSelected()) {
          if (!t.hint.supportsSelection) return;
          for (var i = 0; i < e.length; i++)
            if (e[i].head.line != e[i].anchor.line) return;
        }
        this.state.completionActive && this.state.completionActive.close();
        t = this.state.completionActive = new n(this, t);
        t.options.hint &&
          (T.signal(this, "startCompletion", this), t.update(!0));
      }
    }),
    T.defineExtension("closeHint", function () {
      this.state.completionActive && this.state.completionActive.close();
    });
  var o =
      window.requestAnimationFrame ||
      function (t) {
        return setTimeout(t, 1e3 / 60);
      },
    s = window.cancelAnimationFrame || clearTimeout;
  function M(t) {
    return "string" == typeof t ? t : t.text;
  }
  function O(t, e) {
    for (; e && e != t; ) {
      if ("LI" === e.nodeName.toUpperCase() && e.parentNode == t) return e;
      e = e.parentNode;
    }
  }
  function i(o, t) {
    (this.id = "cm-complete-" + Math.floor(Math.random(1e6))),
      (this.completion = o),
      (this.data = t),
      (this.picked = !1);
    var i = this,
      s = o.cm,
      c = s.getInputField().ownerDocument,
      r = c.defaultView || c.parentWindow,
      l = (this.hints = c.createElement("ul"));
    l.setAttribute("role", "listbox"),
      l.setAttribute("aria-expanded", "true"),
      (l.id = this.id);
    var e = o.cm.options.theme;
    (l.className = "CodeMirror-hints " + e),
      (this.selectedHint = t.selectedHint || 0);
    for (var n = t.list, h = 0; h < n.length; ++h) {
      var a = l.appendChild(c.createElement("li")),
        u = n[h],
        d = "CodeMirror-hint" + (h != this.selectedHint ? "" : " " + F);
      null != u.className && (d = u.className + " " + d),
        (a.className = d),
        h == this.selectedHint && a.setAttribute("aria-selected", "true"),
        (a.id = this.id + "-" + h),
        a.setAttribute("role", "option"),
        u.render
          ? u.render(a, t, u)
          : a.appendChild(c.createTextNode(u.displayText || M(u))),
        (a.hintId = h);
    }
    var f = o.options.container || c.body,
      p = s.cursorCoords(o.options.alignWithWord ? t.from : null),
      m = p.left,
      g = p.bottom,
      v = !0,
      y = 0,
      b = 0;
    f !== c.body &&
      ((w = (C =
        -1 !==
        ["absolute", "relative", "fixed"].indexOf(
          r.getComputedStyle(f).position
        )
          ? f
          : f.offsetParent).getBoundingClientRect()),
      (H = c.body.getBoundingClientRect()),
      (y = w.left - H.left - C.scrollLeft),
      (b = w.top - H.top - C.scrollTop)),
      (l.style.left = m - y + "px"),
      (l.style.top = g - b + "px");
    var e =
        r.innerWidth ||
        Math.max(c.body.offsetWidth, c.documentElement.offsetWidth),
      w =
        r.innerHeight ||
        Math.max(c.body.offsetHeight, c.documentElement.offsetHeight);
    f.appendChild(l),
      s.getInputField().setAttribute("aria-autocomplete", "list"),
      s.getInputField().setAttribute("aria-owns", this.id),
      s
        .getInputField()
        .setAttribute(
          "aria-activedescendant",
          this.id + "-" + this.selectedHint
        );
    var A,
      H = o.options.moveOnOverlap ? l.getBoundingClientRect() : new DOMRect(),
      C =
        !!o.options.paddingForScrollbar && l.scrollHeight > l.clientHeight + 1;
    setTimeout(function () {
      A = s.getScrollInfo();
    }),
      0 < H.bottom - w &&
        ((f = H.bottom - H.top),
        0 < p.top - (p.bottom - H.top) - f
          ? ((l.style.top = (g = p.top - f - b) + "px"), (v = !1))
          : w < f &&
            ((l.style.height = w - 5 + "px"),
            (l.style.top = (g = p.bottom - H.top - b) + "px"),
            (x = s.getCursor()),
            t.from.ch != x.ch &&
              ((p = s.cursorCoords(x)),
              (l.style.left = (m = p.left - y) + "px"),
              (H = l.getBoundingClientRect()))));
    var k,
      x = H.right - e;
    if (
      (C && (x += s.display.nativeBarWidth),
      0 < x &&
        (H.right - H.left > e &&
          ((l.style.width = e - 5 + "px"), (x -= H.right - H.left - e)),
        (l.style.left = (m = p.left - x - y) + "px")),
      C)
    )
      for (var S = l.firstChild; S; S = S.nextSibling)
        S.style.paddingRight = s.display.nativeBarWidth + "px";
    s.addKeyMap(
      (this.keyMap = (function (t, n) {
        var o = {
          Up: function () {
            n.moveFocus(-1);
          },
          Down: function () {
            n.moveFocus(1);
          },
          PageUp: function () {
            n.moveFocus(1 - n.menuSize(), !0);
          },
          PageDown: function () {
            n.moveFocus(n.menuSize() - 1, !0);
          },
          Home: function () {
            n.setFocus(0);
          },
          End: function () {
            n.setFocus(n.length - 1);
          },
          Enter: n.pick,
          Tab: n.pick,
          Esc: n.close,
        };
        /Mac/.test(navigator.platform) &&
          ((o["Ctrl-P"] = function () {
            n.moveFocus(-1);
          }),
          (o["Ctrl-N"] = function () {
            n.moveFocus(1);
          }));
        var e = t.options.customKeys,
          s = e ? {} : o;
        function i(t, e) {
          var i =
            "string" != typeof e
              ? function (t) {
                  return e(t, n);
                }
              : o.hasOwnProperty(e)
              ? o[e]
              : e;
          s[t] = i;
        }
        if (e) for (var c in e) e.hasOwnProperty(c) && i(c, e[c]);
        var r = t.options.extraKeys;
        if (r) for (var c in r) r.hasOwnProperty(c) && i(c, r[c]);
        return s;
      })(o, {
        moveFocus: function (t, e) {
          i.changeActive(i.selectedHint + t, e);
        },
        setFocus: function (t) {
          i.changeActive(t);
        },
        menuSize: function () {
          return i.screenAmount();
        },
        length: n.length,
        close: function () {
          o.close();
        },
        pick: function () {
          i.pick();
        },
        data: t,
      }))
    ),
      o.options.closeOnUnfocus &&
        (s.on(
          "blur",
          (this.onBlur = function () {
            k = setTimeout(function () {
              o.close();
            }, 100);
          })
        ),
        s.on(
          "focus",
          (this.onFocus = function () {
            clearTimeout(k);
          })
        )),
      s.on(
        "scroll",
        (this.onScroll = function () {
          var t = s.getScrollInfo(),
            e = s.getWrapperElement().getBoundingClientRect();
          A = A || s.getScrollInfo();
          var i = g + A.top - t.top,
            n = i - (r.pageYOffset || (c.documentElement || c.body).scrollTop);
          if ((v || (n += l.offsetHeight), n <= e.top || n >= e.bottom))
            return o.close();
          (l.style.top = i + "px"), (l.style.left = m + A.left - t.left + "px");
        })
      ),
      T.on(l, "dblclick", function (t) {
        t = O(l, t.target || t.srcElement);
        t && null != t.hintId && (i.changeActive(t.hintId), i.pick());
      }),
      T.on(l, "click", function (t) {
        t = O(l, t.target || t.srcElement);
        t &&
          null != t.hintId &&
          (i.changeActive(t.hintId),
          o.options.completeOnSingleClick && i.pick());
      }),
      T.on(l, "mousedown", function () {
        setTimeout(function () {
          s.focus();
        }, 20);
      });
    C = this.getSelectedHintRange();
    return (
      (0 === C.from && 0 === C.to) || this.scrollToActive(),
      T.signal(
        t,
        "select",
        n[this.selectedHint],
        l.childNodes[this.selectedHint]
      ),
      !0
    );
  }
  function r(t, e, i, n) {
    t.async ? t(e, n, i) : (i = t(e, i)) && i.then ? i.then(n) : n(i);
  }
  (n.prototype = {
    close: function () {
      this.active() &&
        ((this.cm.state.completionActive = null),
        (this.tick = null),
        this.options.updateOnCursorActivity &&
          this.cm.off("cursorActivity", this.activityFunc),
        this.widget && this.data && T.signal(this.data, "close"),
        this.widget && this.widget.close(),
        T.signal(this.cm, "endCompletion", this.cm));
    },
    active: function () {
      return this.cm.state.completionActive == this;
    },
    pick: function (t, e) {
      var i = t.list[e],
        n = this;
      this.cm.operation(function () {
        i.hint
          ? i.hint(n.cm, t, i)
          : n.cm.replaceRange(M(i), i.from || t.from, i.to || t.to, "complete"),
          T.signal(t, "pick", i),
          n.cm.scrollIntoView();
      }),
        this.options.closeOnPick && this.close();
    },
    cursorActivity: function () {
      this.debounce && (s(this.debounce), (this.debounce = 0));
      var t = this.startPos;
      this.data && (t = this.data.from);
      var e,
        i = this.cm.getCursor(),
        n = this.cm.getLine(i.line);
      i.line != this.startPos.line ||
      n.length - i.ch != this.startLen - this.startPos.ch ||
      i.ch < t.ch ||
      this.cm.somethingSelected() ||
      !i.ch ||
      this.options.closeCharacters.test(n.charAt(i.ch - 1))
        ? this.close()
        : (((e = this).debounce = o(function () {
            e.update();
          })),
          this.widget && this.widget.disable());
    },
    update: function (e) {
      var i, n;
      null != this.tick &&
        ((n = ++(i = this).tick),
        r(this.options.hint, this.cm, this.options, function (t) {
          i.tick == n && i.finishUpdate(t, e);
        }));
    },
    finishUpdate: function (t, e) {
      this.data && T.signal(this.data, "update");
      e =
        (this.widget && this.widget.picked) ||
        (e && this.options.completeSingle);
      this.widget && this.widget.close(),
        (this.data = t) &&
          t.list.length &&
          (e && 1 == t.list.length
            ? this.pick(t, 0)
            : ((this.widget = new i(this, t)), T.signal(t, "shown")));
    },
  }),
    (i.prototype = {
      close: function () {
        var t;
        this.completion.widget == this &&
          ((this.completion.widget = null),
          this.hints.parentNode &&
            this.hints.parentNode.removeChild(this.hints),
          this.completion.cm.removeKeyMap(this.keyMap),
          (t = this.completion.cm.getInputField()).removeAttribute(
            "aria-activedescendant"
          ),
          t.removeAttribute("aria-owns"),
          (t = this.completion.cm),
          this.completion.options.closeOnUnfocus &&
            (t.off("blur", this.onBlur), t.off("focus", this.onFocus)),
          t.off("scroll", this.onScroll));
      },
      disable: function () {
        this.completion.cm.removeKeyMap(this.keyMap);
        var t = this;
        (this.keyMap = {
          Enter: function () {
            t.picked = !0;
          },
        }),
          this.completion.cm.addKeyMap(this.keyMap);
      },
      pick: function () {
        this.completion.pick(this.data, this.selectedHint);
      },
      changeActive: function (t, e) {
        t >= this.data.list.length
          ? (t = e ? this.data.list.length - 1 : 0)
          : t < 0 && (t = e ? 0 : this.data.list.length - 1),
          this.selectedHint != t &&
            ((e = this.hints.childNodes[this.selectedHint]) &&
              ((e.className = e.className.replace(" " + F, "")),
              e.removeAttribute("aria-selected")),
            ((e = this.hints.childNodes[(this.selectedHint = t)]).className +=
              " " + F),
            e.setAttribute("aria-selected", "true"),
            this.completion.cm
              .getInputField()
              .setAttribute("aria-activedescendant", e.id),
            this.scrollToActive(),
            T.signal(
              this.data,
              "select",
              this.data.list[this.selectedHint],
              e
            ));
      },
      scrollToActive: function () {
        var t = this.getSelectedHintRange(),
          e = this.hints.childNodes[t.from],
          i = this.hints.childNodes[t.to],
          t = this.hints.firstChild;
        e.offsetTop < this.hints.scrollTop
          ? (this.hints.scrollTop = e.offsetTop - t.offsetTop)
          : i.offsetTop + i.offsetHeight >
              this.hints.scrollTop + this.hints.clientHeight &&
            (this.hints.scrollTop =
              i.offsetTop +
              i.offsetHeight -
              this.hints.clientHeight +
              t.offsetTop);
      },
      screenAmount: function () {
        return (
          Math.floor(
            this.hints.clientHeight / this.hints.firstChild.offsetHeight
          ) || 1
        );
      },
      getSelectedHintRange: function () {
        var t = this.completion.options.scrollMargin || 0;
        return {
          from: Math.max(0, this.selectedHint - t),
          to: Math.min(this.data.list.length - 1, this.selectedHint + t),
        };
      },
    }),
    T.registerHelper("hint", "auto", {
      resolve: function (t, e) {
        var i,
          c = t.getHelpers(e, "hint");
        if (c.length) {
          e = function (t, n, o) {
            var s = (function (t, e) {
              if (!t.somethingSelected()) return e;
              for (var i = [], n = 0; n < e.length; n++)
                e[n].supportsSelection && i.push(e[n]);
              return i;
            })(t, c);
            !(function e(i) {
              if (i == s.length) return n(null);
              r(s[i], t, o, function (t) {
                t && 0 < t.list.length ? n(t) : e(i + 1);
              });
            })(0);
          };
          return (e.async = !0), (e.supportsSelection = !0), e;
        }
        return (i = t.getHelper(t.getCursor(), "hintWords"))
          ? function (t) {
              return T.hint.fromList(t, { words: i });
            }
          : T.hint.anyword
          ? function (t, e) {
              return T.hint.anyword(t, e);
            }
          : function () {};
      },
    }),
    T.registerHelper("hint", "fromList", function (t, e) {
      var i,
        n = t.getCursor(),
        o = t.getTokenAt(n),
        s = T.Pos(n.line, o.start),
        t = n;
      o.start < n.ch && /\w/.test(o.string.charAt(n.ch - o.start - 1))
        ? (i = o.string.substr(0, n.ch - o.start))
        : ((i = ""), (s = n));
      for (var c = [], r = 0; r < e.words.length; r++) {
        var l = e.words[r];
        l.slice(0, i.length) == i && c.push(l);
      }
      if (c.length) return { list: c, from: s, to: t };
    }),
    (T.commands.autocomplete = T.showHint);
  var c = {
    hint: T.hint.auto,
    completeSingle: !0,
    alignWithWord: !0,
    closeCharacters: /[\s()\[\]{};:>,]/,
    closeOnPick: !0,
    closeOnUnfocus: !0,
    updateOnCursorActivity: !0,
    completeOnSingleClick: !0,
    container: null,
    customKeys: null,
    extraKeys: null,
    paddingForScrollbar: !0,
    moveOnOverlap: !0,
  };
  T.defineOption("hintOptions", null);
});

/*********adding hardwrap********** */

!(function (t) {
  "object" == typeof exports && "object" == typeof module
    ? t(require("../../lib/codemirror"))
    : "function" == typeof define && define.amd
    ? define(["../../lib/codemirror"], t)
    : t(CodeMirror);
})(function (k) {
  "use strict";
  var S = k.Pos;
  function l(t, r, e) {
    for (
      var n = e.paragraphStart || t.getHelper(r, "paragraphStart"),
        o = r.line,
        a = t.firstLine();
      a < o;
      --o
    ) {
      var i = t.getLine(o);
      if (n && n.test(i)) break;
      if (!/\S/.test(i)) {
        ++o;
        break;
      }
    }
    for (
      var f = e.paragraphEnd || t.getHelper(r, "paragraphEnd"),
        l = r.line + 1,
        h = t.lastLine();
      l <= h;
      ++l
    ) {
      i = t.getLine(l);
      if (f && f.test(i)) {
        ++l;
        break;
      }
      if (!/\S/.test(i)) break;
    }
    return { from: o, to: l };
  }
  function E(t, r, e, n, o) {
    for (var a = r; a < t.length && " " == t.charAt(a); ) a++;
    for (; 0 < a && !e.test(t.slice(a - 1, a + 1)); --a);
    if (!o && a <= t.match(/^[ \t]*/)[0].length)
      for (a = r + 1; a < t.length - 1 && !e.test(t.slice(a - 1, a + 1)); ++a);
    for (var i = !0; ; i = !1) {
      var f = a;
      if (n) for (; " " == t.charAt(f - 1); ) --f;
      if (0 != f || !i) return { from: f, to: a };
      a = r;
    }
  }
  function h(e, t, r, n) {
    (t = e.clipPos(t)), (r = e.clipPos(r));
    var o = n.column || 80,
      a = n.wrapOn || /\s\S|-[^\.\d]/,
      i = !1 !== n.forceBreak,
      f = !1 !== n.killTrailingSpace,
      l = [],
      h = "",
      s = t.line,
      c = e.getRange(t, r, !1);
    if (!c.length) return null;
    var g = c[0].match(/^[ \t]*/)[0];
    g.length >= o && (o = g.length + 1);
    for (var p = 0; p < c.length; ++p) {
      var m = c[p],
        u = h.length,
        v = 0;
      h &&
        m &&
        !a.test(h.charAt(h.length - 1) + m.charAt(0)) &&
        ((h += " "), (v = 1));
      var d,
        b = "";
      for (
        p && ((b = m.match(/^\s*/)[0]), (m = m.slice(b.length))),
          h += m,
          p &&
            ((d = h.length > o && g == b && E(h, o, a, f, i)) &&
            d.from == u &&
            d.to == u + v
              ? ((h = g + m), ++s)
              : l.push({
                  text: [v ? " " : ""],
                  from: S(s, u),
                  to: S(s + 1, b.length),
                }));
        h.length > o;

      ) {
        var x = E(h, o, a, f, i);
        if (!(x.from != x.to || (i && g !== h.slice(0, x.to)))) break;
        l.push({ text: ["", g], from: S(s, x.from), to: S(s, x.to) }),
          (h = g + h.slice(x.to)),
          ++s;
      }
    }
    return (
      l.length &&
        e.operation(function () {
          for (var t = 0; t < l.length; ++t) {
            var r = l[t];
            (r.text || k.cmpPos(r.from, r.to)) &&
              e.replaceRange(r.text, r.from, r.to);
          }
        }),
      l.length ? { from: l[0].from, to: k.changeEnd(l[l.length - 1]) } : null
    );
  }
  k.defineExtension("wrapParagraph", function (t, r) {
    (r = r || {}), (t = t || this.getCursor());
    t = l(this, t, r);
    return h(this, S(t.from, 0), S(t.to - 1), r);
  }),
    (k.commands.wrapLines = function (a) {
      a.operation(function () {
        for (
          var t = a.listSelections(), r = a.lastLine() + 1, e = t.length - 1;
          0 <= e;
          e--
        ) {
          var n,
            o = t[e];
          (o = o.empty()
            ? ((n = l(a, o.head, {})), { from: S(n.from, 0), to: S(n.to - 1) })
            : { from: o.from(), to: o.to() }).to.line >= r ||
            ((r = o.from.line), h(a, o.from, o.to, {}));
        }
      });
    }),
    k.defineExtension("wrapRange", function (t, r, e) {
      return h(this, t, r, e || {});
    }),
    k.defineExtension("wrapParagraphsInRange", function (t, r, e) {
      e = e || {};
      for (var n = this, o = [], a = t.line; a <= r.line; ) {
        var i = l(n, S(a, 0), e);
        o.push(i), (a = i.to);
      }
      var f = !1;
      return (
        o.length &&
          n.operation(function () {
            for (var t = o.length - 1; 0 <= t; --t)
              f = f || h(n, S(o[t].from, 0), S(o[t].to - 1), e);
          }),
        f
      );
    });
});

/*******8addign comment funtionality */

!(function (e) {
  "object" == typeof exports && "object" == typeof module
    ? e(require("../../lib/codemirror"))
    : "function" == typeof define && define.amd
    ? define(["../../lib/codemirror"], e)
    : e(CodeMirror);
})(function (e) {
  "use strict";
  var L = {},
    x = /[^\s\u00a0]/,
    R = e.Pos,
    u = e.cmpPos;
  function f(e) {
    e = e.search(x);
    return -1 == e ? 0 : e;
  }
  function O(e, n) {
    var t = e.getMode();
    return !1 !== t.useInnerComments && t.innerMode ? e.getModeAt(n) : t;
  }
  (e.commands.toggleComment = function (e) {
    e.toggleComment();
  }),
    e.defineExtension("toggleComment", function (e) {
      e = e || L;
      for (
        var n = this,
          t = 1 / 0,
          i = this.listSelections(),
          l = null,
          o = i.length - 1;
        0 <= o;
        o--
      ) {
        var r = i[o].from(),
          m = i[o].to();
        r.line >= t ||
          (m.line >= t && (m = R(t, 0)),
          (t = r.line),
          null == l
            ? (l = n.uncomment(r, m, e)
                ? "un"
                : (n.lineComment(r, m, e), "line"))
            : "un" == l
            ? n.uncomment(r, m, e)
            : n.lineComment(r, m, e));
      }
    }),
    e.defineExtension("lineComment", function (o, e, r) {
      r = r || L;
      var m,
        a,
        c,
        g,
        s = this,
        n = O(s, o),
        t = s.getLine(o.line);
      null != t &&
        ((t = t),
        !/\bstring\b/.test(s.getTokenTypeAt(R(o.line, 0))) ||
          /^[\'\"\`]/.test(t)) &&
        ((m = r.lineComment || n.lineComment)
          ? ((a = Math.min(
              0 != e.ch || e.line == o.line ? e.line + 1 : e.line,
              s.lastLine() + 1
            )),
            (c = null == r.padding ? " " : r.padding),
            (g = r.commentBlankLines || o.line == e.line),
            s.operation(function () {
              if (r.indent) {
                for (var e = null, n = o.line; n < a; ++n) {
                  var t = (i = s.getLine(n)).slice(0, f(i));
                  (null == e || e.length > t.length) && (e = t);
                }
                for (n = o.line; n < a; ++n) {
                  var i = s.getLine(n),
                    l = e.length;
                  (g || x.test(i)) &&
                    (i.slice(0, l) != e && (l = f(i)),
                    s.replaceRange(e + m + c, R(n, 0), R(n, l)));
                }
              } else for (n = o.line; n < a; ++n) (g || x.test(s.getLine(n))) && s.replaceRange(m + c, R(n, 0));
            }))
          : (r.blockCommentStart || n.blockCommentStart) &&
            ((r.fullLines = !0), s.blockComment(o, e, r)));
    }),
    e.defineExtension("blockComment", function (o, r, m) {
      m = m || L;
      var a,
        c,
        g = this,
        s = O(g, o),
        f = m.blockCommentStart || s.blockCommentStart,
        d = m.blockCommentEnd || s.blockCommentEnd;
      f && d
        ? /\bcomment\b/.test(g.getTokenTypeAt(R(o.line, 0))) ||
          ((a = Math.min(r.line, g.lastLine())) != o.line &&
            0 == r.ch &&
            x.test(g.getLine(a)) &&
            --a,
          (c = null == m.padding ? " " : m.padding),
          o.line > a ||
            g.operation(function () {
              if (0 != m.fullLines) {
                var e = x.test(g.getLine(a));
                g.replaceRange(c + d, R(a)),
                  g.replaceRange(f + c, R(o.line, 0));
                var n = m.blockCommentLead || s.blockCommentLead;
                if (null != n)
                  for (var t = o.line + 1; t <= a; ++t)
                    (t == a && !e) || g.replaceRange(n + c, R(t, 0));
              } else {
                var i = 0 == u(g.getCursor("to"), r),
                  l = !g.somethingSelected();
                g.replaceRange(d, r),
                  i && g.setSelection(l ? r : g.getCursor("from"), r),
                  g.replaceRange(f, o);
              }
            }))
        : (m.lineComment || s.lineComment) &&
          0 != m.fullLines &&
          g.lineComment(o, r, m);
    }),
    e.defineExtension("uncomment", function (e, n, t) {
      t = t || L;
      var l,
        o = this,
        i = O(o, e),
        r = Math.min(
          0 != n.ch || n.line == e.line ? n.line : n.line - 1,
          o.lastLine()
        ),
        m = Math.min(e.line, r),
        a = t.lineComment || i.lineComment,
        c = [],
        g = null == t.padding ? " " : t.padding;
      e: if (a) {
        for (var s = m; s <= r; ++s) {
          var f = o.getLine(s),
            d = f.indexOf(a);
          if (
            -1 ==
              (d =
                -1 < d && !/comment/.test(o.getTokenTypeAt(R(s, d + 1)))
                  ? -1
                  : d) &&
            x.test(f)
          )
            break e;
          if (-1 < d && x.test(f.slice(0, d))) break e;
          c.push(f);
        }
        if (
          (o.operation(function () {
            for (var e = m; e <= r; ++e) {
              var n = c[e - m],
                t = n.indexOf(a),
                i = t + a.length;
              t < 0 ||
                (n.slice(i, i + g.length) == g && (i += g.length),
                (l = !0),
                o.replaceRange("", R(e, t), R(e, i)));
            }
          }),
          l)
        )
          return !0;
      }
      var u = t.blockCommentStart || i.blockCommentStart,
        h = t.blockCommentEnd || i.blockCommentEnd;
      if (!u || !h) return !1;
      var C = t.blockCommentLead || i.blockCommentLead,
        p = o.getLine(m),
        b = p.indexOf(u);
      if (-1 == b) return !1;
      var k = r == m ? p : o.getLine(r),
        v = k.indexOf(h, r == m ? b + u.length : 0),
        t = R(m, b + 1),
        i = R(r, v + 1);
      if (
        -1 == v ||
        !/comment/.test(o.getTokenTypeAt(t)) ||
        !/comment/.test(o.getTokenTypeAt(i)) ||
        -1 < o.getRange(t, i, "\n").indexOf(h)
      )
        return !1;
      i =
        -1 == (t = p.lastIndexOf(u, e.ch))
          ? -1
          : p.slice(0, e.ch).indexOf(h, t + u.length);
      if (-1 != t && -1 != i && i + h.length != e.ch) return !1;
      (i = k.indexOf(h, n.ch)),
        (e = k.slice(n.ch).lastIndexOf(u, i - n.ch)),
        (t = -1 == i || -1 == e ? -1 : n.ch + e);
      return (
        (-1 == i || -1 == t || t == n.ch) &&
        (o.operation(function () {
          o.replaceRange(
            "",
            R(r, v - (g && k.slice(v - g.length, v) == g ? g.length : 0)),
            R(r, v + h.length)
          );
          var e = b + u.length;
          if (
            (g && p.slice(e, e + g.length) == g && (e += g.length),
            o.replaceRange("", R(m, b), R(m, e)),
            C)
          )
            for (var n = m + 1; n <= r; ++n) {
              var t,
                i = o.getLine(n),
                l = i.indexOf(C);
              -1 == l ||
                x.test(i.slice(0, l)) ||
                ((t = l + C.length),
                g && i.slice(t, t + g.length) == g && (t += g.length),
                o.replaceRange("", R(n, l), R(n, t)));
            }
        }),
        !0)
      );
    });
});
