(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{199:function(t,s,e){"use strict";e.r(s);var n=e(0),a=Object(n.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[e("p",[e("a",{attrs:{href:"http://dojay.cn/fe/js3.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("上节"),e("OutboundLink")],1),t._v("已经提到，"),e("strong",[t._v("每一个函数function都有一个prototype")]),t._v("，即原型。这里再加一句话："),e("strong",[t._v("每一个对象都有一个__proto__")]),t._v("，即隐式原型。")]),t._v(" "),e("p",[t._v("这个__proto__是一个隐藏的属性，可以通过来显示：")]),t._v(" "),t._m(0),e("p",[t._v("结果为：")]),t._v(" "),t._m(1),t._v(" "),e("p",[t._v("上面截图来看: obj.__proto__和Object.prototype的属性一样！")]),t._v(" "),e("p",[t._v("obj这个对象本质上就是被Object函数创建的，因此:")]),t._v(" "),t._m(2),e("p",[t._v("用图来表示就是：")]),t._v(" "),e("p",[t._v("即，")]),t._v(" "),t._m(3),t._v(" "),e("p",[t._v("那么，咱们之前说到，Object.prototype也是一个对象，那么，它的__proto__指向谁呢？")]),t._v(" "),e("p",[t._v("好问题！")]),t._v(" "),e("p",[t._v("在说明“Object.prototype”之前，先说一下自定义函数的prototype。自定义函数的prototype本质上就是和let obj = {} 是一样的，都是被Object创建，所以它的__proto__指向的就是Object.prototype。")])])},[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" obj "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("picture",[s("source",{attrs:{srcset:"/prototype/__proto__.png"}}),this._v(" "),s("img",{staticClass:"search-snap",attrs:{alt:"Image"}})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("  obj"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" Object"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("每个对象都有一个__proto__属性，指向创建该对象的函数的prototype。")])])}],!1,null,null,null);s.default=a.exports}}]);