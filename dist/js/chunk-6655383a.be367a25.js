(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6655383a"],{"00e0":function(t,e,n){"use strict";n("af2b")},2423:function(t,e,n){"use strict";n.d(e,"f",(function(){return r})),n.d(e,"e",(function(){return i})),n.d(e,"a",(function(){return c})),n.d(e,"c",(function(){return s})),n.d(e,"b",(function(){return o})),n.d(e,"d",(function(){return l}));var a=n("b775"),r=function(t){return Object(a["a"])({method:"GET",url:"/app/v1_1/articles",params:t})},i=function(t){return Object(a["a"])({method:"GET",url:"/app/v1_0/articles/".concat(t)})},c=function(t){return Object(a["a"])({method:"POST",url:"/app/v1_0/article/collections",data:{target:t}})},s=function(t){return Object(a["a"])({method:"DELETE",url:"/app/v1_0/article/collections/".concat(t)})},o=function(t){return Object(a["a"])({method:"POST",url:"/app/v1_0/article/likings",data:{target:t}})},l=function(t){return Object(a["a"])({method:"DELETE",url:"/app/v1_0/article/likings/".concat(t)})}},"2b6e":function(t,e,n){},"2fcb":function(t,e,n){"use strict";n("90da")},"4cd6":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-container"},[n("van-nav-bar",{staticClass:"page-nav-bar",attrs:{fixed:""}},[n("van-button",{staticClass:"search-btn",attrs:{slot:"title",type:"info",size:"small",round:"",icon:"search",to:"/search"},slot:"title"},[t._v("搜索")])],1),n("van-tabs",{staticClass:"van-tabs",attrs:{animated:"",swipeable:""},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[t._l(t.channels,(function(t){return n("van-tab",{key:t.id,attrs:{title:t.name}},[n("article-list",{attrs:{channel:t}})],1)})),n("div",{staticClass:"placeholder",attrs:{slot:"nav-right"},slot:"nav-right"}),n("div",{staticClass:"hamburger-btn",attrs:{slot:"nav-right"},on:{click:function(e){t.isChannelEditShow=!0}},slot:"nav-right"},[n("i",{staticClass:"iconfont icon-gengduo"})])],2),n("van-popup",{style:{height:"100%"},attrs:{closeable:"",position:"bottom","close-icon-position":"top-left"},model:{value:t.isChannelEditShow,callback:function(e){t.isChannelEditShow=e},expression:"isChannelEditShow"}},[n("channel-edit",{attrs:{"my-channels":t.channels,active:t.active},on:{"update-active":t.onUpdateActive}})],1)],1)},r=[],i=n("1da1"),c=n("5530"),s=(n("96cf"),n("c24f")),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"article-list",staticClass:"article-list"},[n("van-pull-refresh",{attrs:{"success-text":t.reFreshSuccessText,"success-duration":"1500"},on:{refresh:t.onRefresh},model:{value:t.isreFreshLoading,callback:function(e){t.isreFreshLoading=e},expression:"isreFreshLoading"}},[n("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了",error:t.error,"error-text":"加载失败,请点击重新加载"},on:{"update:error":function(e){t.error=e},load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,(function(t,e){return n("article-item",{key:e,attrs:{article:t}})})),1)],1)],1)},l=[],u=n("2909"),d=n("2423"),f=n("6ea2"),h=n("2ef0"),p={name:"ArticleList",components:{ArticleItem:f["a"]},props:{channel:{type:Object,required:!0}},data:function(){return{list:[],loading:!1,finished:!1,timestamp:null,error:!1,isreFreshLoading:!1,reFreshSuccessText:"刷新成功",scrollTop:""}},watch:{},computed:{},methods:{onLoad:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,a,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,Object(d["f"])({channel_id:t.channel.id,timestamp:t.timestamp||Date.now(),with_top:1});case 4:a=e.sent,r=a.data,i=r.data.results,(n=t.list).push.apply(n,Object(u["a"])(i)),t.loading=!1,i.length?t.timestamp=r.data.pre_timestamp:t.finished=!0,e.next=16;break;case 12:e.prev=12,e.t0=e["catch"](1),t.error=!0,t.loading=!1;case 16:case"end":return e.stop()}}),e,null,[[1,12]])})))()},onRefresh:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,a,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(d["f"])({channel_id:t.channel.id,timestamp:Date.now(),with_top:1});case 3:a=e.sent,r=a.data,i=r.data.results,(n=t.list).unshift.apply(n,Object(u["a"])(i)),t.isreFreshLoading=!1,t.reFreshSuccessText="刷新成功,更新了".concat(i.length,"条数据"),e.next=15;break;case 11:e.prev=11,e.t0=e["catch"](0),t.isreFreshLoading=!1,t.reFreshSuccessText="刷新失败";case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))()}},created:function(){},mounted:function(){var t=this,e=this.$refs["article-list"];e.onscroll=Object(h["debounce"])((function(){console.log(e.scrollTop),t.scrollTop=e.scrollTop}),100)},activated:function(){this.$refs["article-list"].scrollTop=this.scrollTop}},v=p,m=(n("2fcb"),n("2877")),b=Object(m["a"])(v,o,l,!1,null,"03f17ba8",null),g=b.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"channel-edit"},[n("van-cell",{attrs:{border:!1}},[n("div",{staticClass:"title-text",attrs:{slot:"title"},slot:"title"},[t._v("我的频道")]),n("van-button",{staticClass:"edit-btn",attrs:{type:"danger",plain:"",round:"",size:"mini"},on:{click:function(e){t.isEdit=!t.isEdit}}},[t._v(t._s(t.isEdit?"完成":"编辑"))])],1),n("van-grid",{staticClass:"my-grid",attrs:{gutter:10}},t._l(t.myChannels,(function(e,a){return n("van-grid-item",{key:a,staticClass:"grid-item",on:{click:function(n){return t.onMyChannelClick(e,a)}}},[n("van-icon",{directives:[{name:"show",rawName:"v-show",value:t.isEdit&&!t.fixedChannels.includes(e.id),expression:"isEdit && !fixedChannels.includes(channel.id)"}],attrs:{slot:"icon",name:"clear"},slot:"icon"}),n("span",{staticClass:"text",class:{active:a===t.active},attrs:{slot:"text"},slot:"text"},[t._v(t._s(e.name))])],1)})),1),n("van-cell",{attrs:{border:!1}},[n("div",{staticClass:"title-text",attrs:{slot:"title"},slot:"title"},[t._v("频道推荐")])]),n("van-grid",{staticClass:"recommend-grid",attrs:{gutter:10}},t._l(t.recommendChannels,(function(e,a){return n("van-grid-item",{key:a,staticClass:"grid-item",attrs:{text:e.name,icon:"plus"},on:{click:function(n){return t.onAddChannel(e)}}})})),1)],1)},C=[],O=(n("a9e3"),n("4de4"),n("7db0"),n("caad"),n("2532"),n("a434"),n("b775")),E=function(){return Object(O["a"])({method:"GET",url:"/app/v1_0/channels"})},x=function(t){return Object(O["a"])({method:"PATCH",url:"/app/v1_0/user/channels",data:{channels:[t]}})},j=function(t){return Object(O["a"])({method:"DELETE",url:"/app/v1_0/user/channels/".concat(t)})},w=n("2f62"),T=n("5d2d"),k={name:"ChannelEdit",components:{},props:{myChannels:{type:Array,required:!0},active:{type:Number,required:!0}},data:function(){return{allChannels:[],isEdit:!1,fixedChannels:[0]}},watch:{},computed:Object(c["a"])(Object(c["a"])({},Object(w["b"])(["user"])),{},{recommendChannels:function(){var t=this;return this.allChannels.filter((function(e){return!t.myChannels.find((function(t){return t.id===e.id}))}))}}),methods:{loadAllChannels:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E();case 3:n=e.sent,a=n.data,console.log(a),t.allChannels=a.data.channels,e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),t.$toast("数据获取失败");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},onAddChannel:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.myChannels.push(t);try{e.user?x({id:t.id,seq:e.myChannels.length}):Object(T["b"])("TOUTIAO_CHANNELS",e.myChannels)}catch(a){e.$toast("保存失败,请稍后重试")}case 2:case"end":return n.stop()}}),n)})))()},onMyChannelClick:function(t,e){if(this.isEdit){if(this.fixedChannels.includes(e))return;this.myChannels.splice(e,1),e<=this.active&&this.$emit("update-active",this.active-1),this.deleteChannel(t)}else this.$emit("update-active",e,!1)},deleteChannel:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(n.prev=0,!e.user){n.next=6;break}return n.next=4,j(t.id);case 4:n.next=7;break;case 6:Object(T["b"])("TOUTIAO_CHANNELS",e.myChannels);case 7:n.next=12;break;case 9:n.prev=9,n.t0=n["catch"](0),e.$toast("操作失败,请稍后重试");case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))()}},created:function(){this.loadAllChannels()},mounted:function(){}},y=k,A=(n("f1f8"),Object(m["a"])(y,_,C,!1,null,"4eb25d12",null)),I=A.exports,N={name:"HomeIndex",components:{ArticleList:g,ChannelEdit:I},props:{},data:function(){return{active:0,channels:[],isChannelEditShow:!1}},watch:{},computed:Object(c["a"])({},Object(w["b"])(["user"])),methods:{loadChannels:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,a,r,i,c,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,n=[],!t.user){e.next=10;break}return e.next=5,Object(s["d"])();case 5:a=e.sent,r=a.data,n=r.data.channels,e.next=20;break;case 10:if(i=Object(T["a"])("TOUTIAO_CHANNELS"),!i){e.next=15;break}n=i,e.next=20;break;case 15:return e.next=17,Object(s["d"])();case 17:c=e.sent,o=c.data,n=o.data.channels;case 20:t.channels=n,e.next=26;break;case 23:e.prev=23,e.t0=e["catch"](0),t.$toast("获取频道数据失败");case 26:case"end":return e.stop()}}),e,null,[[0,23]])})))()},onUpdateActive:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.active=t,this.isChannelEditShow=e}},created:function(){this.loadChannels()},mounted:function(){}},S=N,L=(n("00e0"),Object(m["a"])(S,a,r,!1,null,"6987d672",null));e["default"]=L.exports},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var a=n("1d80"),r=n("5899"),i="["+r+"]",c=RegExp("^"+i+i+"*"),s=RegExp(i+i+"*$"),o=function(t){return function(e){var n=String(a(e));return 1&t&&(n=n.replace(c,"")),2&t&&(n=n.replace(s,"")),n}};t.exports={start:o(1),end:o(2),trim:o(3)}},"6ea2":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-cell",{staticClass:"article-item",attrs:{to:"/article/"+t.article.art_id}},[n("div",{staticClass:"title van-multi-ellipsis--l2",attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.article.title))]),n("div",{attrs:{slot:"label"},slot:"label"},[3===t.article.cover.type?n("div",{staticClass:"cover-wrap"},t._l(t.article.cover.images,(function(t,e){return n("div",{key:e,staticClass:"cover-item"},[n("van-image",{attrs:{slot:"default",fit:"cover",src:t},slot:"default"})],1)})),0):t._e(),t.userInfo?t._e():n("div",{staticClass:"label-info-wrap"},[n("span",[t._v(t._s(t.article.aut_name))]),n("span",[t._v(t._s(t.article.comm_count)+"评论")]),n("span",[t._v(t._s(t._f("relativeTime")(t.article.pubdate)))])])]),1===t.article.cover.type?n("van-image",{attrs:{slot:"default",fit:"cover",src:t.article.cover.images[0]},slot:"default"}):t._e()],1)},r=[],i={name:"ArticleItem",components:{},props:{article:{type:Object,required:!0},userInfo:{type:Object}},data:function(){return{}},watch:{},computed:{},methods:{},created:function(){},mounted:function(){}},c=i,s=(n("d3dc"),n("2877")),o=Object(s["a"])(c,a,r,!1,null,"0b1315a3",null);e["a"]=o.exports},"7db0":function(t,e,n){"use strict";var a=n("23e7"),r=n("b727").find,i=n("44d2"),c="find",s=!0;c in[]&&Array(1)[c]((function(){s=!1})),a({target:"Array",proto:!0,forced:s},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),i(c)},"88b6":function(t,e,n){},"90da":function(t,e,n){},a9e3:function(t,e,n){"use strict";var a=n("83ab"),r=n("da84"),i=n("94ca"),c=n("6eeb"),s=n("5135"),o=n("c6b6"),l=n("7156"),u=n("c04e"),d=n("d039"),f=n("7c73"),h=n("241c").f,p=n("06cf").f,v=n("9bf2").f,m=n("58a8").trim,b="Number",g=r[b],_=g.prototype,C=o(f(_))==b,O=function(t){var e,n,a,r,i,c,s,o,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=m(l),e=l.charCodeAt(0),43===e||45===e){if(n=l.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+l}for(i=l.slice(2),c=i.length,s=0;s<c;s++)if(o=i.charCodeAt(s),o<48||o>r)return NaN;return parseInt(i,a)}return+l};if(i(b,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var E,x=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof x&&(C?d((function(){_.valueOf.call(n)})):o(n)!=b)?l(new g(O(e)),n,x):O(e)},j=a?h(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),w=0;j.length>w;w++)s(g,E=j[w])&&!s(x,E)&&v(x,E,p(g,E));x.prototype=_,_.constructor=x,c(r,b,x)}},af2b:function(t,e,n){},c24f:function(t,e,n){"use strict";n.d(e,"h",(function(){return r})),n.d(e,"i",(function(){return i})),n.d(e,"e",(function(){return c})),n.d(e,"d",(function(){return s})),n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return l})),n.d(e,"g",(function(){return u})),n.d(e,"c",(function(){return d})),n.d(e,"f",(function(){return f})),n.d(e,"k",(function(){return h})),n.d(e,"j",(function(){return p}));var a=n("b775"),r=function(t){return Object(a["a"])({method:"POST",url:"./app/v1_0/authorizations",data:t})},i=function(t){return Object(a["a"])({method:"GET",url:"/app/v1_0/sms/codes/".concat(t)})},c=function(){return Object(a["a"])({method:"GET",url:"/app/v1_0/user"})},s=function(){return Object(a["a"])({method:"GET",url:"/app/v1_0/user/channels"})},o=function(t){return Object(a["a"])({method:"POST",url:"/app/v1_0/user/followings",data:{target:t}})},l=function(t){return Object(a["a"])({method:"DELETE",url:"/app/v1_0/user/followings/".concat(t)})},u=function(t){return Object(a["a"])({method:"GET",url:"/app/v1_0/users/".concat(t)})},d=function(t){return Object(a["a"])({method:"GET",url:"/app/v1_0/users/".concat(t,"/articles")})},f=function(t){return Object(a["a"])({method:"GET",url:"/app/v1_0/user/profile"})},h=function(t){return Object(a["a"])({method:"PATCH",url:"/app/v1_0/user/profile",data:t})},p=function(t){return Object(a["a"])({method:"PATCH",url:"/app/v1_0/user/photo",data:t})}},d3dc:function(t,e,n){"use strict";n("2b6e")},f1f8:function(t,e,n){"use strict";n("88b6")}}]);
//# sourceMappingURL=chunk-6655383a.be367a25.js.map