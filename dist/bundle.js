(() => {
  "use strict";
  var e = {
      780: (e, t, n) => {
        n.d(t, { Z: () => p });
        var a = n(81),
          i = n.n(a),
          r = n(645),
          c = n.n(r),
          s = n(667),
          o = n.n(s),
          d = new URL(n(614), n.b),
          l = c()(i()),
          m = o()(d);
        l.push([e.id, ".content {\n    background: url(" + m + ");\n}", ""]);
        const p = l;
      },
      254: (e, t, n) => {
        n.d(t, { Z: () => s });
        var a = n(81),
          i = n.n(a),
          r = n(645),
          c = n.n(r)()(i());
        c.push([
          e.id,
          ".contact {\n    height: calc(100vh - 100px - 1.835rem);\n    align-items: center;\n    justify-content: center;\n    display: none;\n}\n.contact-text {\n    border: 1px solid white;\n    color: white;\n    height: 300px;\n    width: 300px;\n    display: flex;\n    align-items: center;justify-content: center;font-size: 2rem;\n    text-transform: uppercase;\n    border-radius: 50%;\n    box-shadow: 1px 1px 10px black;\n    background: #000;\n}\n.contact.active {\n    display: flex;\n}",
          "",
        ]);
        const s = c;
      },
      755: (e, t, n) => {
        n.d(t, { Z: () => s });
        var a = n(81),
          i = n.n(a),
          r = n(645),
          c = n.n(r)()(i());
        c.push([
          e.id,
          ".singleItem {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: left;\n    gap: 0 1rem;\n    background: rgb(177, 177, 177);\n    height: 250px;\n    padding: 0 1rem;\n}\n.item-title {\n    color: rgba(99, 99, 99, 0.6);\n}\n\n.item-image {\n    height: 120px;\n    border-radius: 75px;\n}",
          "",
        ]);
        const s = c;
      },
      271: (e, t, n) => {
        n.d(t, { Z: () => s });
        var a = n(81),
          i = n.n(a),
          r = n(645),
          c = n.n(r)()(i());
        c.push([
          e.id,
          ".header {\n    background: rgba(0, 0, 0, 0.7);\n    padding: 4rem 0;\n    color: white;\n    height: 100px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.header__logo {\n    margin-bottom: 1rem;\n    background: #000;\n}\n\n.link {\n    margin: 0 2rem;\n    font-size: 1.75rem;\n    color: white;\n    text-decoration: none;\n}\n.link.active {\n    text-decoration: underline;\n    color: red;\n}\n.link:hover {\n    text-decoration: underline;\n}\n.home.active{\n    display: flex;\n}",
          "",
        ]);
        const s = c;
      },
      146: (e, t, n) => {
        n.d(t, { Z: () => s });
        var a = n(81),
          i = n.n(a),
          r = n(645),
          c = n.n(r)()(i());
        c.push([
          e.id,
          ".home {\n    height: calc(100vh - 100px - 1.835rem);\n    align-items: center;\n    justify-content: center;\n    display: none;\n}\n.home-text {\n    border: 1px solid white;\n    color: white;\n    height: 300px;\n    width: 300px;\n    display: flex;\n    align-items: center;justify-content: center;font-size: 2rem;\n    text-transform: uppercase;\n    border-radius: 50%;\n        box-shadow: 1px 1px 10px black;\n    background: #000;\n}\n.home.active {\n    display: flex;\n}",
          "",
        ]);
        const s = c;
      },
      483: (e, t, n) => {
        n.d(t, { Z: () => s });
        var a = n(81),
          i = n.n(a),
          r = n(645),
          c = n.n(r)()(i());
        c.push([
          e.id,
          ".ctr {\n    height: calc(100vh - 100px);\n    display: none;\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n}\n.ctr.active{\n    display: block;\n}\n.gridCtr {\n    margin: 0 auto;\n}\n.title {\n    color: white;\n}\n.mainGrid {\n    width: 100%;\n}\n.mainGrid {\n    margin-top: 1rem;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 1rem;\n}",
          "",
        ]);
        const s = c;
      },
      645: (e) => {
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = "",
                  a = void 0 !== t[5];
                return (
                  t[4] && (n += "@supports (".concat(t[4], ") {")),
                  t[2] && (n += "@media ".concat(t[2], " {")),
                  a &&
                    (n += "@layer".concat(
                      t[5].length > 0 ? " ".concat(t[5]) : "",
                      " {"
                    )),
                  (n += e(t)),
                  a && (n += "}"),
                  t[2] && (n += "}"),
                  t[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (t.i = function (e, n, a, i, r) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var c = {};
              if (a)
                for (var s = 0; s < this.length; s++) {
                  var o = this[s][0];
                  null != o && (c[o] = !0);
                }
              for (var d = 0; d < e.length; d++) {
                var l = [].concat(e[d]);
                (a && c[l[0]]) ||
                  (void 0 !== r &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = r)),
                  n &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = n))
                      : (l[2] = n)),
                  i &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = i))
                      : (l[4] = "".concat(i))),
                  t.push(l));
              }
            }),
            t
          );
        };
      },
      667: (e) => {
        e.exports = function (e, t) {
          return (
            t || (t = {}),
            e
              ? ((e = String(e.__esModule ? e.default : e)),
                /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
                t.hash && (e += t.hash),
                /["'() \t\n]|(%20)/.test(e) || t.needQuotes
                  ? '"'.concat(
                      e.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
                      '"'
                    )
                  : e)
              : e
          );
        };
      },
      81: (e) => {
        e.exports = function (e) {
          return e[1];
        };
      },
      379: (e) => {
        var t = [];
        function n(e) {
          for (var n = -1, a = 0; a < t.length; a++)
            if (t[a].identifier === e) {
              n = a;
              break;
            }
          return n;
        }
        function a(e, a) {
          for (var r = {}, c = [], s = 0; s < e.length; s++) {
            var o = e[s],
              d = a.base ? o[0] + a.base : o[0],
              l = r[d] || 0,
              m = "".concat(d, " ").concat(l);
            r[d] = l + 1;
            var p = n(m),
              u = {
                css: o[1],
                media: o[2],
                sourceMap: o[3],
                supports: o[4],
                layer: o[5],
              };
            if (-1 !== p) t[p].references++, t[p].updater(u);
            else {
              var h = i(u, a);
              (a.byIndex = s),
                t.splice(s, 0, { identifier: m, updater: h, references: 1 });
            }
            c.push(m);
          }
          return c;
        }
        function i(e, t) {
          var n = t.domAPI(t);
          return (
            n.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                n.update((e = t));
              } else n.remove();
            }
          );
        }
        e.exports = function (e, i) {
          var r = a((e = e || []), (i = i || {}));
          return function (e) {
            e = e || [];
            for (var c = 0; c < r.length; c++) {
              var s = n(r[c]);
              t[s].references--;
            }
            for (var o = a(e, i), d = 0; d < r.length; d++) {
              var l = n(r[d]);
              0 === t[l].references && (t[l].updater(), t.splice(l, 1));
            }
            r = o;
          };
        };
      },
      569: (e) => {
        var t = {};
        e.exports = function (e, n) {
          var a = (function (e) {
            if (void 0 === t[e]) {
              var n = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              t[e] = n;
            }
            return t[e];
          })(e);
          if (!a)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          a.appendChild(n);
        };
      },
      216: (e) => {
        e.exports = function (e) {
          var t = document.createElement("style");
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      565: (e, t, n) => {
        e.exports = function (e) {
          var t = n.nc;
          t && e.setAttribute("nonce", t);
        };
      },
      795: (e) => {
        e.exports = function (e) {
          var t = e.insertStyleElement(e);
          return {
            update: function (n) {
              !(function (e, t, n) {
                var a = "";
                n.supports && (a += "@supports (".concat(n.supports, ") {")),
                  n.media && (a += "@media ".concat(n.media, " {"));
                var i = void 0 !== n.layer;
                i &&
                  (a += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {"
                  )),
                  (a += n.css),
                  i && (a += "}"),
                  n.media && (a += "}"),
                  n.supports && (a += "}");
                var r = n.sourceMap;
                r &&
                  "undefined" != typeof btoa &&
                  (a +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(r)))),
                      " */"
                    )),
                  t.styleTagTransform(a, e, t.options);
              })(t, e, n);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      589: (e) => {
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
      614: (e, t, n) => {
        e.exports = n.p + "ae2d3cab2227c903f22c.jpg";
      },
    },
    t = {};
  function n(a) {
    var i = t[a];
    if (void 0 !== i) return i.exports;
    var r = (t[a] = { id: a, exports: {} });
    return e[a](r, r.exports, n), r.exports;
  }
  (n.m = e),
    (n.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, { a: t }), t;
    }),
    (n.d = (e, t) => {
      for (var a in t)
        n.o(t, a) &&
          !n.o(e, a) &&
          Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e;
      n.g.importScripts && (e = n.g.location + "");
      var t = n.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var a = t.getElementsByTagName("script");
        a.length && (e = a[a.length - 1].src);
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (n.p = e);
    })(),
    (n.b = document.baseURI || self.location.href),
    (n.nc = void 0),
    (() => {
      var e = n(379),
        t = n.n(e),
        a = n(795),
        i = n.n(a),
        r = n(569),
        c = n.n(r),
        s = n(565),
        o = n.n(s),
        d = n(216),
        l = n.n(d),
        m = n(589),
        p = n.n(m),
        u = n(271),
        h = {};
      (h.styleTagTransform = p()),
        (h.setAttributes = o()),
        (h.insert = c().bind(null, "head")),
        (h.domAPI = i()),
        (h.insertStyleElement = l()),
        t()(u.Z, h),
        u.Z && u.Z.locals && u.Z.locals,
        n(614);
      var f = n(755),
        v = {};
      (v.styleTagTransform = p()),
        (v.setAttributes = o()),
        (v.insert = c().bind(null, "head")),
        (v.domAPI = i()),
        (v.insertStyleElement = l()),
        t()(f.Z, v),
        f.Z && f.Z.locals && f.Z.locals;
      const g = [
        {
          id: 1,
          name: "Spaghetti Carbonara",
          price: 12.99,
          description:
            "A classic Italian dish made with spaghetti, eggs, Parmesan cheese, and bacon.",
          image:
            "https://www.delish.com/uk/cooking/recipes/a31007083/spaghetti-carbonara-recipe/",
        },
        {
          id: 2,
          name: "Beef Stroganoff",
          price: 16.99,
          description:
            "A hearty Russian dish made with tender beef, mushrooms, and sour cream sauce.",
          image: "https://www.allrecipes.com/recipe/219066/beef-stroganoff/",
        },
        {
          id: 3,
          name: "Chicken Tikka Masala",
          price: 14.99,
          description:
            "A popular Indian dish made with marinated chicken in a creamy tomato-based sauce.",
          image: "https://www.bbcgoodfood.com/recipes/chicken-tikka-masala-1",
        },
        {
          id: 4,
          name: "Beef Bourguignon",
          price: 18.99,
          description:
            "A French dish made with slow-cooked beef, red wine, and vegetables.",
          image:
            "https://www.epicurious.com/recipes/food/views/beef-bourguignon-104754",
        },
        {
          id: 5,
          name: "Pad Thai",
          price: 12.99,
          description:
            "A popular Thai dish made with rice noodles, shrimp, tofu, and peanuts.",
          image: "https://www.food.com/recipe/pad-thai-83405",
        },
        {
          id: 6,
          name: "Mushroom Risotto",
          price: 13.99,
          description:
            "An Italian rice dish made with mushrooms, Parmesan cheese, and white wine.",
          image:
            "https://www.jamieoliver.com/recipes/rice-recipes/mushroom-risotto/",
        },
        {
          id: 7,
          name: "Beef Tacos",
          price: 10.99,
          description:
            "A Mexican dish made with seasoned ground beef, lettuce, tomato, and cheese in a crispy taco shell.",
          image:
            "https://www.foodnetwork.com/recipes/food-network-kitchen/beef-tacos-recipe-2011423",
        },
        {
          id: 8,
          name: "Lentil Soup",
          price: 8.99,
          description:
            "A hearty soup made with lentils, vegetables, and spices.",
          image: "https://www.bbcgoodfood.com/recipes/lentil-soup",
        },
        {
          id: 9,
          name: "Spinach and Feta Stuffed Chicken Breast",
          price: 15.99,
          description:
            "A healthy and flavorful dish made with chicken breasts, spinach, feta cheese, and herbs.",
          image:
            "https://www.delish.com/uk/cooking/recipes/a30320747/spinach-and-feta-stuffed-chicken-breasts-recipe/",
        },
      ];
      var b = n(483),
        y = {};
      (y.styleTagTransform = p()),
        (y.setAttributes = o()),
        (y.insert = c().bind(null, "head")),
        (y.domAPI = i()),
        (y.insertStyleElement = l()),
        t()(b.Z, y),
        b.Z && b.Z.locals && b.Z.locals;
      var w = n(146),
        x = {};
      (x.styleTagTransform = p()),
        (x.setAttributes = o()),
        (x.insert = c().bind(null, "head")),
        (x.domAPI = i()),
        (x.insertStyleElement = l()),
        t()(w.Z, x),
        w.Z && w.Z.locals && w.Z.locals;
      const L = () => {
        let e = document.createElement("div");
        e.classList.add("active");
        let t = document.createElement("div");
        return (
          t.classList.add("home-text"),
          e.classList.add("home"),
          (e.id = "home-ctr"),
          (t.innerText = "homeContainer"),
          e.append(t),
          e
        );
      };
      var E = n(780),
        k = {};
      (k.styleTagTransform = p()),
        (k.setAttributes = o()),
        (k.insert = c().bind(null, "head")),
        (k.domAPI = i()),
        (k.insertStyleElement = l()),
        t()(E.Z, k),
        E.Z && E.Z.locals && E.Z.locals;
      var T = n(254),
        Z = {};
      (Z.styleTagTransform = p()),
        (Z.setAttributes = o()),
        (Z.insert = c().bind(null, "head")),
        (Z.domAPI = i()),
        (Z.insertStyleElement = l()),
        t()(T.Z, Z),
        T.Z && T.Z.locals && T.Z.locals;
      let I = document.getElementById("content");
      I.classList.add("content"),
        I.append(
          (() => {
            let e = document.createElement("div");
            e.classList.add("header");
            let t = document.createElement("div");
            t.classList.add("template");
            let n = document.createElement("h1");
            n.classList.add("header__logo"), (n.innerText = "KDF");
            let a = document.createElement("div");
            a.classList.add("links");
            let i = ["Home", "Menu", "Contact"];
            for (let e = 0; e < i.length; e++) {
              let t = document.createElement("a");
              t.classList.add("link"),
                (t.id = i[e].toLocaleLowerCase()),
                (t.target = "_blank"),
                (t.innerText = i[e]),
                a.append(t);
            }
            e.append(t), t.append(n), t.append(a);
            const r = a.childNodes;
            return (
              r[0].classList.add("active"),
              r[0].addEventListener("click", () => {
                r[0].classList.add("active"),
                  r[1].classList.remove("active"),
                  r[2].classList.remove("active"),
                  L().classList.add("active"),
                  document.getElementById("home-ctr").classList.add("active"),
                  document
                    .getElementById("menu-ctr")
                    .classList.remove("active"),
                  document
                    .getElementById("contact-ctr")
                    .classList.remove("active");
              }),
              r[1].addEventListener("click", () => {
                r[0].classList.remove("active"),
                  r[1].classList.add("active"),
                  r[2].classList.remove("active"),
                  document
                    .getElementById("home-ctr")
                    .classList.remove("active"),
                  document.getElementById("menu-ctr").classList.add("active"),
                  document
                    .getElementById("contact-ctr")
                    .classList.remove("active");
              }),
              r[2].addEventListener("click", () => {
                r[0].classList.remove("active"),
                  r[1].classList.remove("active"),
                  r[2].classList.add("active"),
                  document
                    .getElementById("home-ctr")
                    .classList.remove("active"),
                  document
                    .getElementById("menu-ctr")
                    .classList.remove("active"),
                  document
                    .getElementById("contact-ctr")
                    .classList.add("active");
              }),
              e
            );
          })()
        ),
        I.append(
          (() => {
            const e = document.createElement("div");
            e.id = "menu-ctr";
            const t = document.createElement("div");
            t.classList.add("gridCtr"),
              t.classList.add("template"),
              e.classList.add("ctr");
            const n = document.createElement("h1");
            (n.innerText = "Menu"), n.classList.add("title");
            const a = document.createElement("grid");
            return (
              a.classList.add("mainGrid"),
              g.map((e, t) => {
                a.append(
                  ((e, t, n, a) => {
                    let i = document.createElement("div");
                    i.classList.add("singleItem");
                    let r = document.createElement("div");
                    r.classList.add("text-container");
                    let c = document.createElement("h2");
                    (c.innerText = e), c.classList.add("item-title");
                    let s = document.createElement("p");
                    (s.innerText = a), s.classList.add("price");
                    let o = document.createElement("p");
                    o.classList.add("item-desc"), (o.innerText = t);
                    let d = document.createElement("img");
                    return (
                      d.classList.add("item-image"),
                      (d.src = n),
                      r.append(c, s, o),
                      i.append(r, d),
                      i
                    );
                  })(e.name, e.description, e.image, e.price)
                );
              }),
              t.append(n),
              t.append(a),
              e.append(t),
              e
            );
          })()
        ),
        I.append(L()),
        I.append(
          (() => {
            let e = document.createElement("div"),
              t = document.createElement("div");
            return (
              t.classList.add("contact-text"),
              e.classList.add("contact"),
              (e.id = "contact-ctr"),
              (t.innerText = "CONTACT"),
              e.append(t),
              e
            );
          })()
        );
    })();
})();
