"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[79742],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(r),s=a,d=m["".concat(u,".").concat(s)]||m[s]||k[s]||l;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},89531:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const l={date:new Date("2022-04-08T00:00:00.000Z"),title:"\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9\u306e\u5171\u901a\u30d1\u30bf\u30fc\u30f3",description:"\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u5185\u3067\u898b\u3089\u308c\u308b\u5171\u901a\u30d1\u30bf\u30fc\u30f3",slug:"common-patterns-for-microservices",authors:"diverta",hide_table_of_contents:!1},o=void 0,i={permalink:"/ja/blog/common-patterns-for-microservices",source:"@site/i18n/ja/docusaurus-plugin-content-blog/common-patterns-for-microservices.md",title:"\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9\u306e\u5171\u901a\u30d1\u30bf\u30fc\u30f3",description:"\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u5185\u3067\u898b\u3089\u308c\u308b\u5171\u901a\u30d1\u30bf\u30fc\u30f3",date:"2022-04-08T00:00:00.000Z",formattedDate:"2022\u5e744\u67088\u65e5",tags:[],readingTime:10.4,hasTruncateMarker:!0,authors:[{name:"Diverta",title:"Creator of Kuroco service",url:"https://www.diverta.co.jp",imageURL:"https://github.com/diverta.png",key:"diverta"}],frontMatter:{date:"2022-04-08T00:00:00.000Z",title:"\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9\u306e\u5171\u901a\u30d1\u30bf\u30fc\u30f3",description:"\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u5185\u3067\u898b\u3089\u308c\u308b\u5171\u901a\u30d1\u30bf\u30fc\u30f3",slug:"common-patterns-for-microservices",authors:"diverta",hide_table_of_contents:!1},prevItem:{title:"API\u7ba1\u7406",permalink:"/ja/blog/api-management"},nextItem:{title:"Jamstack\u7528\u306e\u30d8\u30c3\u30c9\u30ec\u30b9CMS",permalink:"/ja/blog/headless-cms-for-jamstack"}},u={authorsImageUrls:[void 0]},p=[{value:"\u76ee\u6b21",id:"\u76ee\u6b21",level:2},{value:"\u6982\u8981",id:"\u6982\u8981",level:2},{value:"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304b\u3089\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9\u3078\u306e\u76f4\u63a5\u901a\u4fe1",id:"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304b\u3089\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9\u3078\u306e\u76f4\u63a5\u901a\u4fe1",level:2},{value:"API\u30b2\u30fc\u30c8\u30a6\u30a7\u30a4\u30d1\u30bf\u30fc\u30f3",id:"api\u30b2\u30fc\u30c8\u30a6\u30a7\u30a4\u30d1\u30bf\u30fc\u30f3",level:2},{value:"API\u30b2\u30fc\u30c8\u30a6\u30a7\u30a4",id:"api\u30b2\u30fc\u30c8\u30a6\u30a7\u30a4",level:2},{value:"\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u96c6\u7d04",id:"\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u96c6\u7d04",level:3},{value:"\u30b2\u30fc\u30c8\u30a6\u30a7\u30a4\u306e\u30aa\u30d5\u30ed\u30fc\u30c9",id:"\u30b2\u30fc\u30c8\u30a6\u30a7\u30a4\u306e\u30aa\u30d5\u30ed\u30fc\u30c9",level:2},{value:"\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u7528\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\uff08BFF\uff09",id:"\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u7528\u30d0\u30c3\u30af\u30a8\u30f3\u30c9bff",level:2},{value:"Kuroco API Management",id:"kuroco-api-management",level:2}],c={toc:p},m="wrapper";function k(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u5185\u3067\u898b\u3089\u308c\u308b\u5171\u901a\u30d1\u30bf\u30fc\u30f3"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u3053\u306e\u6587\u7ae0\u306f\u6a5f\u68b0\u7ffb\u8a33\u306b\u3088\u3063\u3066\u63d0\u4f9b\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u539f\u6587\u306f\u82f1\u8a9e\u3067\u3042\u308a\u3001OpenAI\u306b\u3088\u3063\u3066\u7ffb\u8a33\u3055\u308c\u307e\u3057\u305f\u3002")),(0,a.kt)("h2",{id:"\u76ee\u6b21"},"\u76ee\u6b21"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6982\u8981"),(0,a.kt)("li",{parentName:"ul"},"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304b\u3089\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9\u3078\u306e\u76f4\u63a5\u901a\u4fe1"),(0,a.kt)("li",{parentName:"ul"},"API\u30b2\u30fc\u30c8\u30a6\u30a7\u30a4\u30d1\u30bf\u30fc\u30f3"),(0,a.kt)("li",{parentName:"ul"},"\u30b2\u30fc\u30c8\u30a6\u30a7\u30a4\u30aa\u30d5\u30ed\u30fc\u30c7\u30a3\u30f3\u30b0"),(0,a.kt)("li",{parentName:"ul"},"\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u5411\u3051\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\uff08BFF\uff09"),(0,a.kt)("li",{parentName:"ul"},"Kuroco API\u7ba1\u7406")),(0,a.kt)("h2",{id:"\u6982\u8981"},"\u6982\u8981"),(0,a.kt)("p",null,"\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u8907\u6570\u306e\u30b5\u30fc\u30d3\u30b9\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u5206\u5272\u3059\u308b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u306e\u4e00\u7a2e\u3067\u3042\u308a\u3001\u3059\u3079\u3066\u306e\u90e8\u5206\u304c\u7d50\u3073\u3064\u3044\u3066\u4f9d\u5b58\u95a2\u4fc2\u3092\u5171\u6709\u3059\u308b\u5f93\u6765\u306e\u30e2\u30ce\u30ea\u30b7\u30c3\u30af\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u3068\u306f\u5bfe\u7167\u7684\u3067\u3059\u3002"),(0,a.kt)("p",null,"\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9\u306f\u3001\u4ed6\u306e\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9\u3068\u72ec\u7acb\u3057\u3066\u6a5f\u80fd\u3059\u308b\u7d30\u7c92\u5ea6\u306e\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u516c\u958b\u3057\u307e\u3059\u3002\u76ee\u6a19\u306f\u3001\u5404\u30b5\u30fc\u30d3\u30b9\u3092\u3088\u308a\u7c21\u5358\u306b\u69cb\u7bc9\u304a\u3088\u3073\u30e1\u30f3\u30c6\u30ca\u30f3\u30b9\u3057\u3001\u4f9d\u5b58\u95a2\u4fc2\u3092\u6e1b\u3089\u3057\u3001\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9\u306e\u901f\u5ea6\u3068\u30b9\u30b1\u30fc\u30e9\u30d3\u30ea\u30c6\u30a3\u3092\u5411\u4e0a\u3055\u305b\u308b\u3053\u3068\u3067\u3059\u3002\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u8907\u96d1\u306b\u306a\u308b\u306b\u3064\u308c\u3066\u3001\u591a\u304f\u306e\u30d0\u30f3\u30c9\u30eb\u3055\u308c\u305f\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9\u3068\u306e\u901a\u4fe1\u306f\u554f\u984c\u3092\u5f15\u304d\u8d77\u3053\u3059\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002\u4ee5\u4e0b\u3067\u8a73\u3057\u304f\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304b\u3089\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9\u3078\u306e\u76f4\u63a5\u901a\u4fe1"},"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304b\u3089\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9\u3078\u306e\u76f4\u63a5\u901a\u4fe1"),(0,a.kt)("p",null,"\u6700\u3082\u57fa\u672c\u7684\u306a\u30d1\u30bf\u30fc\u30f3\u306f\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304b\u3089\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9\u3078\u306e\u76f4\u63a5\u901a\u4fe1\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u3067\u3059\u3002\u3053\u306e\u30d1\u30bf\u30fc\u30f3\u3067\u306f\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9\u306b\u76f4\u63a5\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u884c\u3044\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u5927\u898f\u6a21\u306a\u30b5\u30fc\u30d0\u30fc\u30b5\u30a4\u30c9\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u901a\u5e38\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304b\u3089\u9069\u5207\u306a\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9\u3078\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u7ba1\u7406\u3059\u308b\u305f\u3081\u306b\u8ca0\u8377\u5206\u6563\u304c\u5fc5\u8981\u306a\u30af\u30e9\u30b9\u30bf\u30fc\u3068\u3057\u3066\u7d44\u7e54\u5316\u3055\u308c\u307e\u3059\u3002\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u6210\u9577\u3059\u308b\u306b\u3064\u308c\u3066\u3001\u4f7f\u7528\u3059\u308b\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9\u306e\u6570\u304c\u6570\u5341\u306b\u306a\u308b\u5834\u5408\u3001\u3053\u308c\u306f\u7ba1\u7406\u304c\u56f0\u96e3\u306b\u306a\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u3057\u305f\u304c\u3063\u3066\u3001\u5927\u898f\u6a21\u306a\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u306f\u3001\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9\u3078\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u6570\u3092\u6700\u5c0f\u9650\u306b\u6291\u3048\u308b\u3053\u3068\u304c\u91cd\u8981\u3067\u3059\u3002\u306a\u305c\u306a\u3089\u3001\u3053\u308c\u306b\u3088\u308a\u30ec\u30a4\u30c6\u30f3\u30b7\u304c\u5897\u52a0\u3057\u3001\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u304c\u4f4e\u4e0b\u3059\u308b\u53ef\u80fd\u6027\u304c\u3042\u308b\u304b\u3089\u3067\u3059\u3002\u4ee3\u308f\u308a\u306b\u3001\u5fc5\u8981\u306a\u30c7\u30fc\u30bf\u304c\u96c6\u7d04\u3055\u308c\u305f\u3068\u304d\u306b\u3001\u30b5\u30fc\u30d0\u30fc\u30b5\u30a4\u30c9\u3067\u30ec\u30b9\u30dd\u30f3\u30b9\u3092\u30d0\u30f3\u30c9\u30eb\u3057\u3066\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u306b\u63d0\u4f9b\u3059\u308b\u3079\u304d\u3067\u3059\u3002"),(0,a.kt)("p",null,"\u76f4\u63a5\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304b\u3089\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9\u3078\u306e\u901a\u4fe1\u30d1\u30bf\u30fc\u30f3\u306e\u3082\u3046\u4e00\u3064\u306e\u4e3b\u8981\u306a\u554f\u984c\u306f\u3001\u8a8d\u8a3c\u3001\u30c7\u30fc\u30bf\u306e\u5909\u63db\u3001\u52d5\u7684\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u30c7\u30a3\u30b9\u30d1\u30c3\u30c1\u306a\u3069\u306e\u6a5f\u80fd\u306e\u51e6\u7406\u3067\u3059\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5404\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9\u3054\u3068\u306b\u8a8d\u8a3c\u304c\u5fc5\u8981\u306a\u5834\u5408\u3001\u3053\u308c\u306f\u5927\u898f\u6a21\u306a\u958b\u767a\u30aa\u30fc\u30d0\u30fc\u30d8\u30c3\u30c9\u3068\u7e70\u308a\u8fd4\u3057\u30b3\u30fc\u30c9\u3092\u4f5c\u6210\u3057\u3001\u30b9\u30b1\u30fc\u30eb\u3067\u304d\u306a\u3044\u96e3\u3057\u3044\u7ba1\u7406\u304c\u751f\u3058\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304c\u76f4\u63a5\u6d88\u8cbb\u3059\u308b\u305f\u3081\u306b\u306f\u9069\u3057\u3066\u3044\u306a\u3044\u30d7\u30ed\u30c8\u30b3\u30eb\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u3001\u307e\u305aHTTP/HTTPS\u306b\u5909\u63db\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u3001\u3053\u308c\u3082\u591a\u304f\u306e\u958b\u767a\u30aa\u30fc\u30d0\u30fc\u30d8\u30c3\u30c9\u3092\u8981\u3059\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u3068Web\u30d6\u30e9\u30a6\u30b6\u306a\u3069\u3001\u7570\u306a\u308b\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u306e\u7279\u5b9a\u306e\u30cb\u30fc\u30ba\u3092\u6e80\u305f\u3059\u305f\u3081\u306bAPI\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9\u3092\u30d0\u30f3\u30c9\u30eb\u3059\u308b\u3053\u3068")),(0,a.kt)("h2",{id:"api\u30b2\u30fc\u30c8\u30a6\u30a7\u30a4\u30d1\u30bf\u30fc\u30f3"},"API\u30b2\u30fc\u30c8\u30a6\u30a7\u30a4\u30d1\u30bf\u30fc\u30f3"),(0,a.kt)("p",null,"\u4e0a\u8a18\u306e\u30d1\u30bf\u30fc\u30f3\u3067\u306f\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u6642\u9593\u306e\u7d4c\u904e\u3068\u3068\u3082\u306b\u591a\u304f\u306e\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306b\u7d50\u3073\u3064\u3044\u3066\u3057\u307e\u3044\u307e\u3059\u3002\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u69cb\u9020\u3092\u5909\u66f4\u3057\u305f\u308a\u65b0\u3057\u3044\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9\u3092\u5c0e\u5165\u3057\u305f\u308a\u3059\u308b\u3068\u3001\u591a\u304f\u306e\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u51e6\u7406\u3059\u308b\u3053\u3068\u306f\u975e\u5e38\u306b\u56f0\u96e3\u306b\u306a\u308a\u307e\u3059\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7d50\u5408\uff1a\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9\u306f\u4e92\u3044\u306b\u72ec\u7acb\u3057\u3066\u3044\u307e\u3059\u304c\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u3057\u3070\u3057\u3070\u5185\u90e8\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9\u306b\u76f4\u63a5\u53c2\u7167\u3092\u884c\u3046\u305f\u3081\u3001\u5185\u90e8\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9\u304c\u30ea\u30d5\u30a1\u30af\u30bf\u30ea\u30f3\u30b0\u3055\u308c\u308b\u3068\u7834\u58ca\u7684\u306a\u5909\u66f4\u304c\u767a\u751f\u3059\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u30ec\u30a4\u30c6\u30f3\u30b7\uff1a\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30d3\u30e5\u30fc\u306e\u3044\u305a\u308c\u304b\u304c\u8907\u6570\u306e\u30b5\u30fc\u30d3\u30b9\u3078\u306e\u591a\u6570\u306e\u547c\u3073\u51fa\u3057\u3092\u5fc5\u8981\u3068\u3059\u308b\u5834\u5408\u3001\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u304c\u9045\u304f\u306a\u308a\u3001\u30ec\u30a4\u30c6\u30f3\u30b7\u304c\u5927\u5e45\u306b\u5897\u52a0\u3059\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002\u96c6\u7d04\u306f\u3001\u3053\u308c\u306b\u5bfe\u3059\u308b\u6700\u3082\u660e\u3089\u304b\u306a\u89e3\u6c7a\u7b56\u3067\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\uff1a\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9\u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u4e00\u822c\u516c\u958b\u3055\u308c\u3066\u3044\u308b\u305f\u3081\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u76f4\u63a5\u4f7f\u7528\u3057\u306a\u3044\u5185\u90e8\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9\u3088\u308a\u3082\u653b\u6483\u9762\u304c\u5e83\u304f\u306a\u308a\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u8a8d\u8a3c\uff1a\u4e00\u822c\u516c\u958b\u3055\u308c\u3066\u3044\u308b\u5404\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9\u306f\u3001\u8a8d\u8a3c\u3084SSL\u306a\u3069\u306e\u30af\u30ed\u30b9\u30ab\u30c3\u30c8\u306e\u95a2\u5fc3\u4e8b\u3092\u51e6\u7406\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u5404\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9\u3054\u3068\u306b\u958b\u767a\u30aa\u30fc\u30d0\u30fc\u30d8\u30c3\u30c9\u3068\u7e70\u308a\u8fd4\u3057\u30b3\u30fc\u30c9\u304c\u767a\u751f\u3057\u3001\u7d71\u5408\u3067\u304d\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002")),(0,a.kt)("p",null,"\u4e0a\u8a18\u306e\u554f\u984c\u306b\u5bfe\u3059\u308b\u6700\u3082\u5e83\u304f\u4f7f\u7528\u3055\u308c\u3066\u3044\u308b\u89e3\u6c7a\u7b56\u306f\u3001API\u30b2\u30fc\u30c8\u30a6\u30a7\u30a4\u3067\u3059\u3002"),(0,a.kt)("h2",{id:"api\u30b2\u30fc\u30c8\u30a6\u30a7\u30a4"},"API\u30b2\u30fc\u30c8\u30a6\u30a7\u30a4"),(0,a.kt)("p",null,"API\u30b2\u30fc\u30c8\u30a6\u30a7\u30a4\u30d1\u30bf\u30fc\u30f3\u306f\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30cb\u30fc\u30ba\u3092\u6700\u512a\u5148\u306b\u8003\u3048\u308b\u3053\u3068\u306b\u95a2\u9023\u3057\u3066\u3044\u307e\u3059\u3002API\u30b2\u30fc\u30c8\u30a6\u30a7\u30a4\u306f\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3068\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9\u306e\u9593\u306b\u4f4d\u7f6e\u3057\u3001\u30ea\u30d0\u30fc\u30b9\u30d7\u30ed\u30ad\u30b7\u3068\u3057\u3066\u6a5f\u80fd\u3057\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304b\u3089\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u30b5\u30fc\u30d3\u30b9\u306b\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0\u3057\u307e\u3059\u3002\u307e\u305f\u3001\u8a8d\u8a3c\u3001SSL\u7d42\u4e86\u3001\u30ad\u30e3\u30c3\u30b7\u30f3\u30b0\u306a\u3069\u306e\u6a5f\u80fd\u3082\u51e6\u7406\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("p",null,"API\u30b2\u30fc\u30c8\u30a6\u30a7\u30a4\u306f\u3001\u30ea\u30d0\u30fc\u30b9\u30d7\u30ed\u30ad\u30b7\u307e\u305f\u306f\u30b2\u30fc\u30c8\u30a6\u30a7\u30a4\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0\u306a\u3069\u306e\u3055\u307e\u3056\u307e\u306a\u6a5f\u80fd\u3092\u63d0\u4f9b\u3067\u304d\u307e\u3059\u3002\u30b2\u30fc\u30c8\u30a6\u30a7\u30a4\u306f\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u5bfe\u3057\u3066\u5358\u4e00\u306e\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u307e\u305f\u306fURL\u3092\u63d0\u4f9b\u3057\u3001\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u30b0\u30eb\u30fc\u30d7\u5316\u3055\u308c\u305f\u5185\u90e8\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9\u306e\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306b\u5185\u90e8\u7684\u306b\u30de\u30c3\u30d4\u30f3\u30b0\u3057\u307e\u3059\u3002\u3053\u306e\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0\u6a5f\u80fd\u306b\u3088\u308a\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3068\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9\u306e\u7d50\u5408\u304c\u7de9\u548c\u3055\u308c\u307e\u3059\u3002\u307e\u305f\u3001\u30e2\u30ce\u30ea\u30b7\u30c3\u30afAPI\u306e\u30e2\u30c0\u30ca\u30a4\u30ba\u6642\u306b\u3082\u4fbf\u5229\u3067\u3059\u3002\u30e2\u30ce\u30ea\u30b7\u30c3\u30afAPI\u3068\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u9593\u306bAPI\u30b2\u30fc\u30c8\u30a6\u30a7\u30a4\u3092\u914d\u7f6e\u3057\u3001\u5c06\u6765\u7684\u306b\u306f\u30e2\u30ce\u30ea\u30b7\u30c3\u30afAPI\u3092\u8907\u6570\u306e\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9\u306b\u5206\u5272\u3059\u308b\u307e\u3067\u3001\u65b0\u3057\u3044API\u3092\u65b0\u3057\u3044\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9\u3068\u3057\u3066\u8ffd\u52a0\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("p",null,"API\u30b2\u30fc\u30c8\u30a6\u30a7\u30a4\u306e\u304a\u304b\u3052\u3067\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u4f7f\u7528\u3055\u308c\u3066\u3044\u308bAPI\u304c\u5185\u90e8\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9\u3068\u3057\u3066\u5b9f\u88c5\u3055\u308c\u3066\u3044\u308b\u306e\u304b\u3001\u30e2\u30ce\u30ea\u30b7\u30c3\u30afAPI\u3068\u3057\u3066\u5b9f\u88c5\u3055\u308c\u3066\u3044\u308b\u306e\u304b\u3092\u6c17\u306b\u3059\u308b\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u3055\u3089\u306b\u91cd\u8981\u306a\u306e\u306f\u3001\u30e2\u30ce\u30ea\u30b7\u30c3\u30afAPI\u3092\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9\u306b\u9032\u5316\u3055\u305b\u3001\u30ea\u30d5\u30a1\u30af\u30bf\u30ea\u30f3\u30b0\u3059\u308b\u969b\u306b\u3001API\u30b2\u30fc\u30c8\u30a6\u30a7\u30a4\u306e\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0\u306b\u3088\u308a\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306bURI\u306e\u5909\u66f4\u304c\u5f71\u97ff\u3092\u4e0e\u3048\u306a\u3044\u3053\u3068\u3067\u3059\u3002"),(0,a.kt)("h3",{id:"\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u96c6\u7d04"},"\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u96c6\u7d04"),(0,a.kt)("p",null,"\u30b2\u30fc\u30c8\u30a6\u30a7\u30a4\u30d1\u30bf\u30fc\u30f3\u306e\u4e00\u74b0\u3068\u3057\u3066\u3001\u8907\u6570\u306e\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30ea\u30af\u30a8\u30b9\u30c8\uff08\u901a\u5e38\u306fHTTP\u30ea\u30af\u30a8\u30b9\u30c8\uff09\u3092\u8907\u6570\u306e\u5185\u90e8\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9\u306b\u5bfe\u3059\u308b\u5358\u4e00\u306e\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30ea\u30af\u30a8\u30b9\u30c8\u306b\u96c6\u7d04\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u3053\u306e\u30d1\u30bf\u30fc\u30f3\u306f\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u30da\u30fc\u30b8/\u753b\u9762\u304c\u8907\u6570\u306e\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9\u304b\u3089\u60c5\u5831\u3092\u5fc5\u8981\u3068\u3059\u308b\u5834\u5408\u306b\u7279\u306b\u4fbf\u5229\u3067\u3059\u3002 \u3053\u306e\u30a2\u30d7\u30ed\u30fc\u30c1\u3067\u306f\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306fAPI\u30b2\u30fc\u30c8\u30a6\u30a7\u30a4\u306b\u5358\u4e00\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u4fe1\u3057\u3001API\u30b2\u30fc\u30c8\u30a6\u30a7\u30a4\u306f\u8907\u6570\u306e\u5185\u90e8\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9\u306b\u5bfe\u3057\u3066\u8907\u6570\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u30c7\u30a3\u30b9\u30d1\u30c3\u30c1\u3057\u3001\u305d\u306e\u7d50\u679c\u3092\u307e\u3068\u3081\u3066\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u9001\u308a\u8fd4\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u3053\u306e\u30c7\u30b6\u30a4\u30f3\u30d1\u30bf\u30fc\u30f3\u306e\u4e3b\u306a\u5229\u70b9\u3068\u76ee\u6a19\u306f\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3068\u30d0\u30c3\u30af\u30a8\u30f3\u30c9API\u306e\u9593\u306e\u3084\u308a\u53d6\u308a\u3092\u6e1b\u5c11\u3055\u305b\u308b\u3053\u3068\u3067\u3042\u308a\u3001\u7279\u306b\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u3084JavaScript\u304b\u3089\u306eSPA\u30a2\u30d7\u30ea\u304b\u3089\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u306a\u3069\u306e\u30ea\u30e2\u30fc\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u3068\u3063\u3066\u91cd\u8981\u3067\u3059\u3002 \u901a\u5e38\u306eWeb\u30a2\u30d7\u30ea\u306f\u30b5\u30fc\u30d0\u30fc\u74b0\u5883\u3067\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u5b9f\u884c\u3059\u308b\u305f\u3081\u3001\u30ea\u30e2\u30fc\u30c8\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3088\u308a\u3082\u306f\u308b\u304b\u306b\u4f4e\u3044\u9045\u5ef6\u304c\u3042\u308b\u305f\u3081\u3001\u3053\u306e\u30d1\u30bf\u30fc\u30f3\u306f\u305d\u308c\u307b\u3069\u91cd\u8981\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002"),(0,a.kt)("p",null,"\u4f7f\u7528\u3059\u308bAPI\u30b2\u30fc\u30c8\u30a6\u30a7\u30a4\u306b\u3088\u3063\u3066\u306f\u3001\u3053\u306e\u96c6\u7d04\u3092\u5b9f\u884c\u3067\u304d\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002 \u305f\u3060\u3057\u3001\u591a\u304f\u306e\u5834\u5408\u3001API\u30b2\u30fc\u30c8\u30a6\u30a7\u30a4\u306e\u7bc4\u56f2\u5185\u3067\u96c6\u7d04\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9\u3092\u4f5c\u6210\u3059\u308b\u65b9\u304c\u67d4\u8edf\u6027\u304c\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"\u30b2\u30fc\u30c8\u30a6\u30a7\u30a4\u306e\u30aa\u30d5\u30ed\u30fc\u30c9"},"\u30b2\u30fc\u30c8\u30a6\u30a7\u30a4\u306e\u30aa\u30d5\u30ed\u30fc\u30c9"),(0,a.kt)("p",null,"API\u30b2\u30fc\u30c8\u30a6\u30a7\u30a4\u304c\u63d0\u4f9b\u3059\u308b\u6a5f\u80fd\u306b\u3088\u3063\u3066\u306f\u3001\u5404\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9\u304b\u3089\u30b2\u30fc\u30c8\u30a6\u30a7\u30a4\u306b\u6a5f\u80fd\u3092\u30aa\u30d5\u30ed\u30fc\u30c9\u3067\u304d\u3001\u5404\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9\u306e\u5b9f\u88c5\u3092\u7c21\u7d20\u5316\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u3053\u306e\u30a2\u30d7\u30ed\u30fc\u30c1\u306f\u3001\u4ee5\u4e0b\u306e\u6a5f\u80fd\u306a\u3069\u3001\u3059\u3079\u3066\u306e\u5185\u90e8\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9\u3067\u6b63\u3057\u304f\u5b9f\u88c5\u3059\u308b\u306e\u304c\u8907\u96d1\u306a\u5c02\u9580\u306e\u6a5f\u80fd\u306b\u9069\u3057\u3066\u3044\u307e\u3059\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8a8d\u8a3c\u304a\u3088\u3073\u627f\u8a8d"),(0,a.kt)("li",{parentName:"ul"},"\u30b5\u30fc\u30d3\u30b9\u30c7\u30a3\u30b9\u30ab\u30d0\u30ea\u7d71\u5408"),(0,a.kt)("li",{parentName:"ul"},"\u30ec\u30b9\u30dd\u30f3\u30b9\u30ad\u30e3\u30c3\u30b7\u30e5"),(0,a.kt)("li",{parentName:"ul"},"\u30ec\u30fc\u30c8\u5236\u9650\u3068\u30b9\u30ed\u30c3\u30c8\u30ea\u30f3\u30b0"),(0,a.kt)("li",{parentName:"ul"},"\u30ed\u30fc\u30c9\u30d0\u30e9\u30f3\u30b7\u30f3\u30b0"),(0,a.kt)("li",{parentName:"ul"},"\u30ed\u30ae\u30f3\u30b0\u3001\u30c8\u30ec\u30fc\u30b7\u30f3\u30b0\u3001\u76f8\u95a2"),(0,a.kt)("li",{parentName:"ul"},"\u30d8\u30c3\u30c0\u30fc\u3001\u30af\u30a8\u30ea\u6587\u5b57\u5217\u3001\u304a\u3088\u3073\u30af\u30ec\u30fc\u30e0\u306e\u5909\u63db")),(0,a.kt)("h2",{id:"\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u7528\u30d0\u30c3\u30af\u30a8\u30f3\u30c9bff"},"\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u7528\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\uff08BFF\uff09"),(0,a.kt)("p",null,"API\u30b2\u30fc\u30c8\u30a6\u30a7\u30a4\u30d1\u30bf\u30fc\u30f3\u3068\u540c\u69d8\u306b\u3001\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u7528\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\uff08BFF\uff09\u30d1\u30bf\u30fc\u30f3\u306f\u8907\u6570\u306e\u30b2\u30fc\u30c8\u30a6\u30a7\u30a4\u3092\u4f7f\u7528\u3057\u3001\u305d\u308c\u305e\u308c\u304c\u7279\u5b9a\u306e\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30c1\u30e3\u30cd\u30eb\u306b\u5c02\u7528\u306e\u3082\u306e\u3067\u3059\u3002 \u305f\u3068\u3048\u3070\u3001\u30cd\u30a4\u30c6\u30a3\u30d6\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u306e\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u3068\u4f1d\u7d71\u7684\u306a\u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u30d6\u30e9\u30a6\u30b6Web\u30a2\u30d7\u30ea\u306f\u3001\u305d\u308c\u305e\u308c\u7d71\u5408\u3059\u308b\u305f\u3081\u306eAPI\u30b2\u30fc\u30c8\u30a6\u30a7\u30a4\u3092\u6301\u3061\u3001\u305d\u308c\u304c\u5fc5\u8981\u306a\u30c7\u30fc\u30bf\u3092\u9069\u5207\u306a\u5f62\u5f0f\u3067\u96c6\u7d04\u3057\u63d0\u4f9b\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u3053\u306e\u30d1\u30bf\u30fc\u30f3\u306b\u3064\u3044\u3066\u306e\u8a73\u7d30\u306f\u3001",(0,a.kt)("a",{parentName:"p",href:"/ja/blog/what-is-the-backend-to-frontend-design-pattern/"},"\u3053\u306e\u8a18\u4e8b"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("h2",{id:"kuroco-api-management"},"Kuroco API Management"),(0,a.kt)("p",null,"Kuroco\u306e\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u306f\u3001\u7d44\u307f\u8fbc\u307f\u306e\u30c8\u30e9\u30c3\u30ad\u30f3\u30b0\u3068\u30a2\u30ca\u30ea\u30c6\u30a3\u30af\u30b9\u3092\u5099\u3048\u305fAPI\u30b2\u30fc\u30c8\u30a6\u30a7\u30a4\u6a5f\u80fd\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("p",null,"Kuroco\u306f\u3001API\u306e\u30ed\u30b0\u8a18\u9332\u3001\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u3001\u30e1\u30fc\u30bf\u30ea\u30f3\u30b0\u3092\u53ef\u80fd\u306b\u3057\u3001\u3053\u308c\u3089\u306e\u6d1e\u5bdf\u3092\u901a\u3058\u3066\u4f01\u696d\u304cAPI\u306e\u4f7f\u7528\u72b6\u6cc1\u3068\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3092\u7406\u89e3\u3059\u308b\u306e\u306b\u5f79\u7acb\u3061\u307e\u3059\u3002 \u3053\u308c\u306b\u3088\u308a\u3001\u307b\u307c\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u306e\u30a2\u30ca\u30ea\u30c6\u30a3\u30af\u30b9\u30ec\u30dd\u30fc\u30c8\u3092\u8868\u793a\u3057\u3001\u30d3\u30b8\u30cd\u30b9\u306b\u5f71\u97ff\u3092\u4e0e\u3048\u308b\u53ef\u80fd\u6027\u306e\u3042\u308b\u30c8\u30ec\u30f3\u30c9\u3092\u7279\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u3055\u3089\u306b\u3001\u30ea\u30af\u30a8\u30b9\u30c8\u3068\u30ec\u30b9\u30dd\u30f3\u30b9\u306e\u30a2\u30af\u30c6\u30a3\u30d3\u30c6\u30a3\u306b\u95a2\u3059\u308b\u30ed\u30b0\u3092\u8868\u793a\u3057\u3066\u3001\u30aa\u30f3\u30e9\u30a4\u30f3\u304a\u3088\u3073\u30aa\u30d5\u30e9\u30a4\u30f3\u3067\u306e\u5206\u6790\u304c\u53ef\u80fd\u3067\u3059\u3002"),(0,a.kt)("p",null,"\u4eca\u3059\u3050\u7121\u6599\u3067\u8a66\u3057\u3066\u307f\u308b\u304b\u3001\u8cea\u554f\u304c\u3042\u308b\u5834\u5408\u306f",(0,a.kt)("a",{parentName:"p",href:"https://kuroco.app/ja/docs/about/support/"},"\u30ab\u30b9\u30bf\u30de\u30fc\u30b5\u30dd\u30fc\u30c8\u30c1\u30fc\u30e0\u306b\u304a\u554f\u3044\u5408\u308f\u305b"),"\u3057\u3066\u304f\u3060\u3055\u3044\uff01"))}k.isMDXComponent=!0}}]);