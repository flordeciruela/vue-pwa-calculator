(function(t){function e(e){for(var r,s,c=e[0],u=e[1],l=e[2],d=0,f=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&f.push(i[s][0]),i[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);a&&a(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,c=1;c<n.length;c++){var u=n[c];0!==i[u]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},i={app:0},o=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/vue-pwa-calculator/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var a=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"11f6":function(t,e,n){"use strict";n("4d45")},"4d45":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t._m(0),n("main",[n("Calculator")],1)])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("h1",[t._v("Vuejs Calculator")])])}],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"calculator",attrs:{onselectstart:"return false"}},[n("input",{staticClass:"result",attrs:{type:"text",disabled:""},domProps:{value:t.result}}),n("div",{staticClass:"wrapper-grid"},[n("div",{staticClass:"btn",on:{click:function(e){return t.reset()}}},[t._v("C")]),n("div",{staticClass:"btn",on:{click:function(e){return t.sign()}}},[t._v("+/-")]),n("div",{staticClass:"btn",on:{click:function(e){return t.percent()}}},[t._v("%")]),n("div",{staticClass:"btn operator",on:{click:function(e){return t.divide()}}},[t._v("/")]),n("div",{staticClass:"btn",on:{click:function(e){return t.add(7)}}},[t._v("7")]),n("div",{staticClass:"btn",on:{click:function(e){return t.add(8)}}},[t._v("8")]),n("div",{staticClass:"btn",on:{click:function(e){return t.add(9)}}},[t._v("9")]),n("div",{staticClass:"btn operator",on:{click:function(e){return t.multiply()}}},[t._v("*")]),n("div",{staticClass:"btn",on:{click:function(e){return t.add(4)}}},[t._v("4")]),n("div",{staticClass:"btn",on:{click:function(e){return t.add(5)}}},[t._v("5")]),n("div",{staticClass:"btn",on:{click:function(e){return t.add(6)}}},[t._v("6")]),n("div",{staticClass:"btn operator",on:{click:function(e){return t.subtract()}}},[t._v("-")]),n("div",{staticClass:"btn",on:{click:function(e){return t.add(1)}}},[t._v("1")]),n("div",{staticClass:"btn",on:{click:function(e){return t.add(2)}}},[t._v("2")]),n("div",{staticClass:"btn",on:{click:function(e){return t.add(3)}}},[t._v("3")]),n("div",{staticClass:"btn operator",on:{click:function(e){return t.sum()}}},[t._v("+")]),n("div",{staticClass:"btn zero",on:{click:function(e){return t.add(0)}}},[t._v("0")]),n("div",{staticClass:"btn",on:{click:function(e){return t.decimalDot()}}},[t._v(".")]),n("div",{staticClass:"btn operator",on:{click:function(e){return t.calculate()}}},[t._v("=")])])])},c=[],u=(n("a9e3"),{name:"Calculator",props:{msg:String},data:function(){return{result:0,operatorClick:!1,operator:null,preValue:null,dot:!1}},methods:{reset:function(){this.result=0},sign:function(){this.result=(this.result,this.result=this.result-2*this.result)},percent:function(){this.result=this.result/100},add:function(t){this.operatorClick&&!this.dot?(this.result=t,this.operatorClick=!1):this.operatorClick&&this.dot?(this.result=""+this.result+t,this.dot=!1,this.operatorClick=!1):this.result=0===this.result?this.result=t:""+this.result+t},decimalDot:function(){this.operatorClick&&(this.result="0.",this.dot=!0),/\d+\.+/g.test(this.result)||(this.result=this.result+".")},divide:function(){this.operator=function(t,e){return t/e},this.preValue=this.result,this.operatorClick=!0},multiply:function(){this.operator=function(t,e){return t*e},this.preValue=this.result,this.operatorClick=!0},subtract:function(){this.operator=function(t,e){return t-e},this.preValue=this.result,this.operatorClick=!0},sum:function(){this.operator=function(t,e){return t+e},this.preValue=this.result,this.operatorClick=!0},calculate:function(){this.result=this.operator(Number(this.preValue),Number(this.result)),this.preValue=null,this.operatorClick=!0}}}),l=u,a=(n("11f6"),n("2877")),d=Object(a["a"])(l,s,c,!1,null,"79ca4d68",null),f=d.exports,p={name:"App",components:{Calculator:f}},h=p,v=(n("5c0b"),Object(a["a"])(h,i,o,!1,null,null,null)),b=v.exports,C=n("9483");Object(C["a"])("".concat("/vue-pwa-calculator/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(b)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"9c0c":function(t,e,n){}});
//# sourceMappingURL=app.39390d21.js.map