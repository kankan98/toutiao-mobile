(function(e){function n(n){for(var c,r,o=n[0],i=n[1],l=n[2],h=0,d=[];h<o.length;h++)r=o[h],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);f&&f(n);while(d.length)d.shift()();return u.push.apply(u,l||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],c=!0,r=1;r<t.length;r++){var o=t[r];0!==a[o]&&(c=!1)}c&&(u.splice(n--,1),e=i(i.s=t[0]))}return e}var c={},r={app:0},a={app:0},u=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0dfc7cae":"9f01b600","chunk-2d0dd850":"102489a0","chunk-2d0e64d7":"5a066cf7","chunk-3cf2ca24":"b3cd3f53","chunk-69c94b77":"19b77b93","chunk-13bac2c5":"77e234eb","chunk-3d82e86c":"562a7e31","chunk-248445f5":"a28ceccb","chunk-6655383a":"be367a25","chunk-4aed4425":"ae0cafcd","chunk-78fc056f":"1c4df542","chunk-c268d130":"167bad50","chunk-cae381ba":"adb5e5a6"}[e]+".js"}function i(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-0dfc7cae":1,"chunk-3cf2ca24":1,"chunk-13bac2c5":1,"chunk-248445f5":1,"chunk-6655383a":1,"chunk-4aed4425":1,"chunk-78fc056f":1,"chunk-c268d130":1,"chunk-cae381ba":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise((function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-0dfc7cae":"098244e9","chunk-2d0dd850":"31d6cfe0","chunk-2d0e64d7":"31d6cfe0","chunk-3cf2ca24":"37377e1c","chunk-69c94b77":"31d6cfe0","chunk-13bac2c5":"090910ff","chunk-3d82e86c":"31d6cfe0","chunk-248445f5":"c60f451b","chunk-6655383a":"2c73b623","chunk-4aed4425":"45e5d495","chunk-78fc056f":"1fc4249b","chunk-c268d130":"ac31c061","chunk-cae381ba":"4ed77d24"}[e]+".css",a=i.p+c,u=document.getElementsByTagName("link"),o=0;o<u.length;o++){var l=u[o],h=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(h===c||h===a))return n()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],h=l.getAttribute("data-href");if(h===c||h===a)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var c=n&&n.target&&n.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=c,delete r[e],f.parentNode.removeChild(f),t(u)},f.href=a;var s=document.getElementsByTagName("head")[0];s.appendChild(f)})).then((function(){r[e]=0})));var c=a[e];if(0!==c)if(c)n.push(c[2]);else{var u=new Promise((function(n,t){c=a[e]=[n,t]}));n.push(c[2]=u);var l,h=document.createElement("script");h.charset="utf-8",h.timeout=120,i.nc&&h.setAttribute("nonce",i.nc),h.src=o(e);var d=new Error;l=function(n){h.onerror=h.onload=null,clearTimeout(f);var t=a[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+c+": "+r+")",d.name="ChunkLoadError",d.type=c,d.request=r,t[1](d)}a[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:h})}),12e4);h.onerror=h.onload=l,document.head.appendChild(h)}return Promise.all(n)},i.m=e,i.c=c,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)i.d(t,c,function(n){return e[n]}.bind(null,c));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],h=l.push.bind(l);l.push=n,l=l.slice();for(var d=0;d<l.length;d++)n(l[d]);var f=h;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},4360:function(e,n,t){"use strict";t("caad"),t("2532"),t("c975"),t("a434");var c=t("2b0e"),r=t("2f62"),a=t("5d2d");c["a"].use(r["a"]);var u="TOUTIAO_USER";n["a"]=new r["a"].Store({state:{user:Object(a["a"])(u),cachePages:["LayoutIndex"]},mutations:{setUser:function(e,n){e.user=n,Object(a["b"])(u,e.user)},addCachePage:function(e,n){e.cachePages.includes(n)||e.cachePages.push(n)},removeCachePage:function(e,n){var t=e.cachePages.indexOf(n);-1!==t&&e.cachePages.splice(t,1)}},actions:{},modules:{}})},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var c=t("2b0e"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("keep-alive",{attrs:{include:e.cachePages}},[t("router-view")],1)],1)},a=[],u=t("5530"),o=t("2f62"),i={name:"App",components:{},computed:Object(u["a"])({},Object(o["b"])(["cachePages"])),watch:{$route:{handler:function(e){console.log("val",e)},immediate:!0}}},l=i,h=t("2877"),d=Object(h["a"])(l,r,a,!1,null,null,null),f=d.exports,s=t("a18c"),p=t("4360"),m=t("b970"),b=(t("157a"),t("a4b1"),t("5cfb"),t("4de4"),t("5a0c")),k=t.n(b),g=(t("a471"),t("4208")),v=t.n(g),y=t("23ad"),P=t.n(y);k.a.extend(v.a),k.a.extend(P.a),k.a.locale("zh-cn"),c["a"].filter("relativeTime",(function(e){return k()().to(k()(e))})),c["a"].filter("localFormat",(function(e){return k()(e).format("YYYY-MM-DD")})),c["a"].use(m["a"]),c["a"].config.productionTip=!1,new c["a"]({router:s["a"],store:p["a"],render:function(e){return e(f)}}).$mount("#app")},"5d2d":function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return a}));var c=t("53ca"),r=function(e,n){"object"===Object(c["a"])(n)&&(n=JSON.stringify(n)),window.localStorage.setItem(e,n)},a=function(e){var n=window.localStorage.getItem(e);try{return JSON.parse(n)}catch(t){return n}}},a18c:function(e,n,t){"use strict";t("d3b7"),t("3ca3"),t("ddb0");var c=t("2b0e"),r=t("8c4f"),a=t("2241"),u=t("4360");c["a"].use(r["a"]);var o=[{path:"/login",title:"Login",component:function(){return Promise.all([t.e("chunk-69c94b77"),t.e("chunk-c268d130")]).then(t.bind(null,"d126"))},meta:{requireAuth:!1,title:"登录"}},{path:"/",component:function(){return t.e("chunk-3cf2ca24").then(t.bind(null,"e702"))},children:[{path:"",name:"home",component:function(){return Promise.all([t.e("chunk-69c94b77"),t.e("chunk-3d82e86c"),t.e("chunk-6655383a")]).then(t.bind(null,"4cd6"))},meta:{requireAuth:!1,title:"首页"}},{path:"/qa",name:"Qa",component:function(){return t.e("chunk-2d0dd850").then(t.bind(null,"8277"))},meta:{requireAuth:!1,title:"问答"}},{path:"/video",name:"Video",component:function(){return t.e("chunk-2d0e64d7").then(t.bind(null,"97be"))},meta:{requireAuth:!1,title:"视频"}},{path:"/user",name:"User",component:function(){return Promise.all([t.e("chunk-69c94b77"),t.e("chunk-cae381ba")]).then(t.bind(null,"8ba5"))},meta:{requireAuth:!1,title:"我的"}}]},{path:"/search",name:"Search",component:function(){return Promise.all([t.e("chunk-69c94b77"),t.e("chunk-3d82e86c"),t.e("chunk-248445f5")]).then(t.bind(null,"16f2"))},meta:{requireAuth:!1,title:"搜索"}},{path:"/article/:articleId",name:"Article",component:function(){return Promise.all([t.e("chunk-69c94b77"),t.e("chunk-13bac2c5")]).then(t.bind(null,"9e20"))},props:!0,meta:{requireAuth:!0,title:"文章详情"}},{path:"/users/:userId",name:"Users",component:function(){return Promise.all([t.e("chunk-69c94b77"),t.e("chunk-78fc056f")]).then(t.bind(null,"661a"))},props:!0,meta:{requireAuth:!0,title:"用户主页"}},{path:"/user/profile",name:"User-Profile",component:function(){return Promise.all([t.e("chunk-69c94b77"),t.e("chunk-4aed4425")]).then(t.bind(null,"d00c"))},meta:{requireAuth:!0,title:"个人资料"}},{path:"/user/chat",name:"User-Chat",component:function(){return t.e("chunk-0dfc7cae").then(t.bind(null,"6863"))},meta:{requireAuth:!0,title:"小智同学"}}],i=new r["a"]({routes:o});i.beforeEach((function(e,n,t){if(document.title=e.meta.title?"".concat(e.meta.title," | 黑马头条"):"黑马头条",e.meta.requireAuth){if(u["a"].state.user)return t();a["a"].confirm({title:"访问提示",message:"该功能需要登录才能访问，确认登录吗？"}).then((function(){t({path:"/login",query:{redirect:i.currentRoute.fullPath}})})).catch((function(){t(!1)}))}else t()})),n["a"]=i},a4b1:function(e,n,t){}});
//# sourceMappingURL=app.afaab4af.js.map