(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-category-category"],{"0769":function(t,e,n){"use strict";var r=n("cb24"),i=n.n(r);i.a},"3b8d":function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return a});var r=n("795b"),i=n.n(r);function o(t,e,n,r,o,a,c){try{var s=t[a](c),l=s.value}catch(u){return void n(u)}s.done?e(l):i.a.resolve(l).then(r,o)}function a(t){return function(){var e=this,n=arguments;return new i.a(function(r,i){var a=t.apply(e,n);function c(t){o(a,r,i,c,s,"next",t)}function s(t){o(a,r,i,c,s,"throw",t)}c(void 0)})}}},4836:function(t,e,n){"use strict";var r=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("20d6"),n("ac6a"),n("96cf");var i=r(n("3b8d")),o={data:function(){return{sizeCalcState:!1,tabScrollTop:0,currentId:1,flist:[],slist:[],tlist:[]}},onLoad:function(){this.loadData()},methods:{loadData:function(){var t=(0,i.default)(regeneratorRuntime.mark(function t(){var e,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.json("cateList");case 2:e=t.sent,e.forEach(function(t){t.pid?t.picture?n.tlist.push(t):n.slist.push(t):n.flist.push(t)});case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),tabtap:function(t){this.sizeCalcState||this.calcSize(),this.currentId=t.id;var e=this.slist.findIndex(function(e){return e.pid===t.id});this.tabScrollTop=this.slist[e].top},asideScroll:function(t){this.sizeCalcState||this.calcSize();var e=t.detail.scrollTop,n=this.slist.filter(function(t){return t.top<=e}).reverse();n.length>0&&(this.currentId=n[0].pid)},calcSize:function(){var t=0;this.slist.forEach(function(e){var n=uni.createSelectorQuery().select("#main-"+e.id);n.fields({size:!0},function(n){e.top=t,t+=n.height,e.bottom=t}).exec()}),this.sizeCalcState=!0},navToList:function(t,e){uni.navigateTo({url:"/pages/product/list?fid=".concat(this.currentId,"&sid=").concat(t,"&tid=").concat(e)})}}};e.default=o},"833d":function(t,e,n){"use strict";n.r(e);var r=n("f7ad"),i=n("c7e0");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("0769");var a,c=n("f0c5"),s=Object(c["a"])(i["default"],r["b"],r["c"],!1,null,"2c6d3218",null,!1,r["a"],a);e["default"]=s.exports},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,i=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag",l="object"===typeof t,u=e.regeneratorRuntime;if(u)l&&(t.exports=u);else{u=e.regeneratorRuntime=l?t.exports:{},u.wrap=m;var f="suspendedStart",h="suspendedYield",d="executing",p="completed",v={},y={};y[a]=function(){return this};var w=Object.getPrototypeOf,g=w&&w(w(G([])));g&&g!==r&&i.call(g,a)&&(y=g);var b=E.prototype=k.prototype=Object.create(y);L.prototype=b.constructor=E,E.constructor=L,E[s]=L.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===L||"GeneratorFunction"===(e.displayName||e.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(b),t},u.awrap=function(t){return{__await:t}},_(j.prototype),j.prototype[c]=function(){return this},u.AsyncIterator=j,u.async=function(t,e,n,r){var i=new j(m(t,e,n,r));return u.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},_(b),b[s]="Generator",b[a]=function(){return this},b.toString=function(){return"[object Generator]"},u.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},u.values=G,z.prototype={constructor:z,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,i){return c.type="throw",c.arg=t,e.next=r,i&&(e.method="next",e.arg=n),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var s=i.call(a,"catchLoc"),l=i.call(a,"finallyLoc");if(s&&l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),C(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;C(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:G(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function m(t,e,n,r){var i=e&&e.prototype instanceof k?e:k,o=Object.create(i.prototype),a=new z(r||[]);return o._invoke=S(t,n,a),o}function x(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function k(){}function L(){}function E(){}function _(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function j(t){function e(n,r,o,a){var c=x(t[n],t,r);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"===typeof l&&i.call(l,"__await")?Promise.resolve(l.__await).then(function(t){e("next",t,o,a)},function(t){e("throw",t,o,a)}):Promise.resolve(l).then(function(t){s.value=t,o(s)},function(t){return e("throw",t,o,a)})}a(c.arg)}var n;function r(t,r){function i(){return new Promise(function(n,i){e(t,r,n,i)})}return n=n?n.then(i,i):i()}this._invoke=r}function S(t,e,n){var r=f;return function(i,o){if(r===d)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw o;return I()}n.method=i,n.arg=o;while(1){var a=n.delegate;if(a){var c=O(a,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var s=x(t,e,n);if("normal"===s.type){if(r=n.done?p:h,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=p,n.method="throw",n.arg=s.arg)}}}function O(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,O(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=x(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,v;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function z(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function G(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){while(++r<t.length)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return o.next=o}}return{next:I}}function I(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},c2b7:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.content[data-v-2c6d3218],uni-page-body[data-v-2c6d3218]{height:100%;background-color:#f8f8f8}.content[data-v-2c6d3218]{display:-webkit-box;display:-webkit-flex;display:flex}.left-aside[data-v-2c6d3218]{-webkit-flex-shrink:0;flex-shrink:0;width:%?200?%;height:100%;background-color:#fff}.f-item[data-v-2c6d3218]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:100%;height:%?100?%;font-size:%?28?%;color:#606266;position:relative}.f-item.active[data-v-2c6d3218]{color:#fa436a;background:#f8f8f8}.f-item.active[data-v-2c6d3218]:before{content:"";position:absolute;left:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);height:%?36?%;width:%?8?%;background-color:#fa436a;border-radius:0 4px 4px 0;opacity:.8}.right-aside[data-v-2c6d3218]{-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:hidden;padding-left:%?20?%}.s-item[data-v-2c6d3218]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?70?%;padding-top:%?8?%;font-size:%?28?%;color:#303133}.t-list[data-v-2c6d3218]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;width:100%;background:#fff;padding-top:%?12?%}.t-list[data-v-2c6d3218]:after{content:"";-webkit-box-flex:99;-webkit-flex:99;flex:99;height:0}.t-item[data-v-2c6d3218]{-webkit-flex-shrink:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;width:%?176?%;font-size:%?26?%;color:#666;padding-bottom:%?20?%}.t-item uni-image[data-v-2c6d3218]{width:%?140?%;height:%?140?%}body.?%PAGE?%[data-v-2c6d3218]{background-color:#f8f8f8}',""])},c7e0:function(t,e,n){"use strict";n.r(e);var r=n("4836"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e["default"]=i.a},cb24:function(t,e,n){var r=n("c2b7");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("4f06").default;i("7c09eb31",r,!0,{sourceMap:!1,shadowMode:!1})},f7ad:function(t,e,n){"use strict";var r,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("v-uni-scroll-view",{staticClass:"left-aside",attrs:{"scroll-y":!0}},t._l(t.flist,function(e){return n("v-uni-view",{key:e.id,staticClass:"f-item b-b",class:{active:e.id===t.currentId},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.tabtap(e)}}},[t._v(t._s(e.name))])}),1),n("v-uni-scroll-view",{staticClass:"right-aside",attrs:{"scroll-with-animation":!0,"scroll-y":!0,"scroll-top":t.tabScrollTop},on:{scroll:function(e){arguments[0]=e=t.$handleEvent(e),t.asideScroll.apply(void 0,arguments)}}},t._l(t.slist,function(e){return n("v-uni-view",{key:e.id,staticClass:"s-list",attrs:{id:"main-"+e.id}},[n("v-uni-text",{staticClass:"s-item"},[t._v(t._s(e.name))]),n("v-uni-view",{staticClass:"t-list"},t._l(t.tlist,function(r){return r.pid===e.id?n("v-uni-view",{key:r.id,staticClass:"t-item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.navToList(e.id,r.id)}}},[n("v-uni-image",{attrs:{src:r.picture}}),n("v-uni-text",[t._v(t._s(r.name))])],1):t._e()}),1)],1)}),1)],1)},o=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return r})}}]);