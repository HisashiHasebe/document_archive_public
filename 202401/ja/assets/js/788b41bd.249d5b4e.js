"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[557],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,k=d["".concat(c,".").concat(m)]||d[m]||s[m]||i;return r?a.createElement(k,o(o({ref:t},u),{},{components:r})):a.createElement(k,o({ref:t},u))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},82910:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={title:"Web\u30b5\u30a4\u30c8\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u6539\u5584\u306b\u3064\u3044\u3066",category:"kuroco",weight:1},o=void 0,l={unversionedId:"tutorials/website-performance-tuning-with-kuroco",id:"tutorials/website-performance-tuning-with-kuroco",title:"Web\u30b5\u30a4\u30c8\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u6539\u5584\u306b\u3064\u3044\u3066",description:"Web\u30b5\u30a4\u30c8\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u6539\u5584\u306b\u3064\u3044\u3066",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/tutorials/website-performance-tuning-with-kuroco.md",sourceDirName:"tutorials",slug:"/tutorials/website-performance-tuning-with-kuroco",permalink:"/ja/docs/tutorials/website-performance-tuning-with-kuroco",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/tutorials/website-performance-tuning-with-kuroco.md",tags:[],version:"current",frontMatter:{title:"Web\u30b5\u30a4\u30c8\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u6539\u5584\u306b\u3064\u3044\u3066",category:"kuroco",weight:1},sidebar:"documentationSidebar",previous:{title:"Kuroco\u3067\u3067\u304d\u308bCore Web Vitals\u3078\u306e\u5bfe\u5fdc\u306e\u9032\u3081\u65b9",permalink:"/ja/docs/tutorials/core-web-vitals-with-kuroco"},next:{title:"Kuroco\u3068Nuxt.js\u3067\u3001\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u3092\u69cb\u7bc9\u3059\u308b",permalink:"/ja/docs/tutorials/integrate-login"}},c={},p=[{value:"Web\u30b5\u30a4\u30c8\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u6539\u5584\u306b\u3064\u3044\u3066",id:"web\u30b5\u30a4\u30c8\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u6539\u5584\u306b\u3064\u3044\u3066",level:2},{value:"<code>&lt;img&gt;</code> \u3084 <code>&lt;video&gt;</code> \u8981\u7d20\u306bwidth\u3068height\u3092\u6307\u5b9a\u3059\u308b",id:"img-\u3084-video-\u8981\u7d20\u306bwidth\u3068height\u3092\u6307\u5b9a\u3059\u308b",level:3},{value:"\u30d5\u30a1\u30fc\u30b9\u30c8\u30d3\u30e5\u30fc\u306e\u7bc4\u56f2\u5916\u306b\u3042\u308b <code>&lt;img&gt;</code> \u3084 <code>&lt;iframe&gt;</code> \u8981\u7d20\u306eloading\u5c5e\u6027\u306blazy\u3092\u8ffd\u52a0\u3059\u308b",id:"\u30d5\u30a1\u30fc\u30b9\u30c8\u30d3\u30e5\u30fc\u306e\u7bc4\u56f2\u5916\u306b\u3042\u308b-img-\u3084-iframe-\u8981\u7d20\u306eloading\u5c5e\u6027\u306blazy\u3092\u8ffd\u52a0\u3059\u308b",level:3},{value:"Web\u30d5\u30a9\u30f3\u30c8\u306e\u8aad\u307f\u8fbc\u307f\u3092\u6700\u9069\u5316\u3059\u308b",id:"web\u30d5\u30a9\u30f3\u30c8\u306e\u8aad\u307f\u8fbc\u307f\u3092\u6700\u9069\u5316\u3059\u308b",level:3},{value:"JavaScript\u306fbody\u306e\u672b\u5c3e\u3067\u8aad\u307f\u8fbc\u3080",id:"javascript\u306fbody\u306e\u672b\u5c3e\u3067\u8aad\u307f\u8fbc\u3080",level:3},{value:"HTML\u3001CSS\u3001JS\u3092minify\u5316\u3059\u308b",id:"htmlcssjs\u3092minify\u5316\u3059\u308b",level:3},{value:"\u753b\u50cf\u306fwebp\u306a\u3069\u306e\u6b21\u4e16\u4ee3\u753b\u50cf\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u4f7f\u3046",id:"\u753b\u50cf\u306fwebp\u306a\u3069\u306e\u6b21\u4e16\u4ee3\u753b\u50cf\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u4f7f\u3046",level:3},{value:"\u753b\u50cf\u30fbSVG\u306e\u30b5\u30a4\u30ba\u3092\u5727\u7e2e\u3059\u308b",id:"\u753b\u50cfsvg\u306e\u30b5\u30a4\u30ba\u3092\u5727\u7e2e\u3059\u308b",level:3},{value:"SSG\u3067\u30da\u30fc\u30b8\u3092\u751f\u6210\u3059\u308b\u969b\u3001payload\u3092\u5229\u7528\u3057\u305f\u51e6\u7406\u3092\u884c\u3046",id:"ssg\u3067\u30da\u30fc\u30b8\u3092\u751f\u6210\u3059\u308b\u969bpayload\u3092\u5229\u7528\u3057\u305f\u51e6\u7406\u3092\u884c\u3046",level:3},{value:"CDN\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u5229\u7528\u3059\u308b",id:"cdn\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u5229\u7528\u3059\u308b",level:3},{value:"\u5e83\u544a\u3001SNS\u30dc\u30bf\u30f3\u3068\u3044\u3063\u305f\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u306eJavaScript\u3092\u524a\u6e1b\u30fb\u975e\u540c\u671f\u3067\u8aad\u307f\u8fbc\u3080",id:"\u5e83\u544asns\u30dc\u30bf\u30f3\u3068\u3044\u3063\u305f\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u306ejavascript\u3092\u524a\u6e1b\u975e\u540c\u671f\u3067\u8aad\u307f\u8fbc\u3080",level:3},{value:"\u5e83\u544a\u3001<code>&lt;iframe&gt;</code>\u3001\u52d5\u7684\u306a\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u8868\u793a\u6539\u5584",id:"\u5e83\u544aiframe\u52d5\u7684\u306a\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u8868\u793a\u6539\u5584",level:3},{value:"\u30ea\u30af\u30a8\u30b9\u30c8\u6570\u3092\u6e1b\u3089\u3059",id:"\u30ea\u30af\u30a8\u30b9\u30c8\u6570\u3092\u6e1b\u3089\u3059",level:3}],u={toc:p},d="wrapper";function s(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"web\u30b5\u30a4\u30c8\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u6539\u5584\u306b\u3064\u3044\u3066"},"Web\u30b5\u30a4\u30c8\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u6539\u5584\u306b\u3064\u3044\u3066"),(0,n.kt)("h3",{id:"img-\u3084-video-\u8981\u7d20\u306bwidth\u3068height\u3092\u6307\u5b9a\u3059\u308b"},(0,n.kt)("inlineCode",{parentName:"h3"},"<img>")," \u3084 ",(0,n.kt)("inlineCode",{parentName:"h3"},"<video>")," \u8981\u7d20\u306bwidth\u3068height\u3092\u6307\u5b9a\u3059\u308b"),(0,n.kt)("p",null,"\u753b\u50cf\u3084\u52d5\u753b\u306b\u5e45\u3068\u9ad8\u3055\u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u3067\u3001\u30d6\u30e9\u30a6\u30b6\u306f\u4e8b\u524d\u306b\u305d\u306e\u30b9\u30da\u30fc\u30b9\u3092\u78ba\u4fdd\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u30da\u30fc\u30b8\u306e\u518d\u63cf\u753b\u3084\u30ec\u30a4\u30a2\u30a6\u30c8\u306e\u30b7\u30d5\u30c8\u304c\u767a\u751f\u3057\u306b\u304f\u304f\u306a\u308a\u3001\u30e6\u30fc\u30b6\u30fc\u4f53\u9a13\u304c\u5411\u4e0a\u3057\u307e\u3059\u3002"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"\u30ec\u30a4\u30a2\u30a6\u30c8\u30b7\u30d5\u30c8\u306b\u3064\u3044\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",{parentName:"p",href:"/ja/docs/tutorials/core-web-vitals-with-kuroco/#cls%E3%82%B9%E3%82%B3%E3%82%A2"},"CLS\u30b9\u30b3\u30a2\u306b\u3064\u3044\u3066"),"  ")),(0,n.kt)("h3",{id:"\u30d5\u30a1\u30fc\u30b9\u30c8\u30d3\u30e5\u30fc\u306e\u7bc4\u56f2\u5916\u306b\u3042\u308b-img-\u3084-iframe-\u8981\u7d20\u306eloading\u5c5e\u6027\u306blazy\u3092\u8ffd\u52a0\u3059\u308b"},"\u30d5\u30a1\u30fc\u30b9\u30c8\u30d3\u30e5\u30fc\u306e\u7bc4\u56f2\u5916\u306b\u3042\u308b ",(0,n.kt)("inlineCode",{parentName:"h3"},"<img>")," \u3084 ",(0,n.kt)("inlineCode",{parentName:"h3"},"<iframe>")," \u8981\u7d20\u306eloading\u5c5e\u6027\u306blazy\u3092\u8ffd\u52a0\u3059\u308b"),(0,n.kt)("p",null,"\u30da\u30fc\u30b8\u306e\u30ed\u30fc\u30c9\u6642\u9593\u3092\u77ed\u7e2e\u3059\u308b\u305f\u3081\u306b\u3001'loading=\"lazy\"'\u3092\u4f7f\u7528\u3057\u3066\u30d5\u30a1\u30fc\u30b9\u30c8\u30d3\u30e5\u30fc\u306e\u7bc4\u56f2\u5916\u306e\u753b\u50cf\u306e\u9045\u5ef6\u8aad\u307f\u8fbc\u307f\u304c\u884c\u3048\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u30e6\u30fc\u30b6\u30fc\u304c\u30b9\u30af\u30ed\u30fc\u30eb\u3057\u3066\u521d\u3081\u3066\u898b\u308b\u90e8\u5206\u306e\u753b\u50cf\u306e\u8aad\u307f\u8fbc\u307f\u304c\u884c\u308f\u308c\u307e\u3059\u3002"),(0,n.kt)("h3",{id:"web\u30d5\u30a9\u30f3\u30c8\u306e\u8aad\u307f\u8fbc\u307f\u3092\u6700\u9069\u5316\u3059\u308b"},"Web\u30d5\u30a9\u30f3\u30c8\u306e\u8aad\u307f\u8fbc\u307f\u3092\u6700\u9069\u5316\u3059\u308b"),(0,n.kt)("p",null,"Web\u30d5\u30a9\u30f3\u30c8\u3092\u5229\u7528\u3059\u308b\u5834\u5408\u3001\u30ed\u30fc\u30c9\u6642\u9593\u304c\u9577\u304f\u306a\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u308c\u3092\u9632\u3050\u305f\u3081\u306b\u3001'rel=\"preload\"'\u3092\u4f7f\u7528\u3057\u3066\u30d5\u30a9\u30f3\u30c8\u306e\u8aad\u307f\u8fbc\u307f\u3092\u6700\u9069\u5316\u3057\u3001\u5fc5\u8981\u306a\u30c6\u30ad\u30b9\u30c8\u3060\u3051\u3092\u8868\u793a\u3059\u308b\u305f\u3081\u306b\u30d5\u30a9\u30f3\u30c8\u306e\u30b5\u30d6\u30bb\u30c3\u30c8\u5316\u3092\u884c\u3046\u3068\u826f\u3044\u3067\u3057\u3087\u3046\u3002"),(0,n.kt)("h3",{id:"javascript\u306fbody\u306e\u672b\u5c3e\u3067\u8aad\u307f\u8fbc\u3080"},"JavaScript\u306fbody\u306e\u672b\u5c3e\u3067\u8aad\u307f\u8fbc\u3080"),(0,n.kt)("p",null,"JavaScript\u3092body\u306e\u672b\u5c3e\u3067\u8aad\u307f\u8fbc\u3080\u3053\u3068\u3067\u3001HTML\u3068CSS\u304c\u5148\u306b\u8aad\u307f\u8fbc\u307e\u308c\u3001\u30e6\u30fc\u30b6\u30fc\u306b\u65e9\u304f\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u8868\u793a\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("h3",{id:"htmlcssjs\u3092minify\u5316\u3059\u308b"},"HTML\u3001CSS\u3001JS\u3092minify\u5316\u3059\u308b"),(0,n.kt)("p",null,"Minify\u5316\u3059\u308b\u3053\u3068\u3067\u3001\u4e0d\u8981\u306a\u7a7a\u767d\u3084\u30b3\u30e1\u30f3\u30c8\u3092\u524a\u9664\u3057\u3001\u30d5\u30a1\u30a4\u30eb\u30b5\u30a4\u30ba\u3092\u524a\u6e1b\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u8aad\u307f\u8fbc\u307f\u901f\u5ea6\u304c\u5411\u4e0a\u3057\u3001\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u304c\u6539\u5584\u3055\u308c\u307e\u3059\u3002"),(0,n.kt)("h3",{id:"\u753b\u50cf\u306fwebp\u306a\u3069\u306e\u6b21\u4e16\u4ee3\u753b\u50cf\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u4f7f\u3046"},"\u753b\u50cf\u306fwebp\u306a\u3069\u306e\u6b21\u4e16\u4ee3\u753b\u50cf\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u4f7f\u3046"),(0,n.kt)("p",null,"WebP\u306a\u3069\u306e\u6b21\u4e16\u4ee3\u753b\u50cf\u5f62\u5f0f\u306f\u3001JPEG\u3084PNG\u306b\u6bd4\u3079\u3066\u30d5\u30a1\u30a4\u30eb\u30b5\u30a4\u30ba\u304c\u5c0f\u3055\u3044\u305f\u3081\u3001\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u304c\u5411\u4e0a\u3057\u307e\u3059\u3002"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Kuroco\u3067Webp\u3092\u5229\u7528\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",{parentName:"p",href:"/ja/docs/reference/api-convert-image/"},"\u753b\u50cf\u306e\u52d5\u7684\u5909\u63db\u306b\u3064\u3044\u3066"),"  ")),(0,n.kt)("h3",{id:"\u753b\u50cfsvg\u306e\u30b5\u30a4\u30ba\u3092\u5727\u7e2e\u3059\u308b"},"\u753b\u50cf\u30fbSVG\u306e\u30b5\u30a4\u30ba\u3092\u5727\u7e2e\u3059\u308b"),(0,n.kt)("p",null,"\u753b\u50cf\u3084SVG\u306e\u30b5\u30a4\u30ba\u3092\u5727\u7e2e\u3059\u308b\u3053\u3068\u3067\u3001\u30d5\u30a1\u30a4\u30eb\u30b5\u30a4\u30ba\u304c\u524a\u6e1b\u3055\u308c\u3001\u30ed\u30fc\u30c9\u6642\u9593\u304c\u77ed\u7e2e\u3055\u308c\u307e\u3059\u3002"),(0,n.kt)("h3",{id:"ssg\u3067\u30da\u30fc\u30b8\u3092\u751f\u6210\u3059\u308b\u969bpayload\u3092\u5229\u7528\u3057\u305f\u51e6\u7406\u3092\u884c\u3046"},"SSG\u3067\u30da\u30fc\u30b8\u3092\u751f\u6210\u3059\u308b\u969b\u3001payload\u3092\u5229\u7528\u3057\u305f\u51e6\u7406\u3092\u884c\u3046"),(0,n.kt)("p",null,"\u9759\u7684\u30b5\u30a4\u30c8\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fc\uff08SSG\uff09\u3092\u7528\u3044\u3066\u30da\u30fc\u30b8\u3092\u751f\u6210\u3059\u308b\u3068\u3001\u30da\u30fc\u30b8\u304c\u30d7\u30ea\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3055\u308c\u308b\u305f\u3081\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u5074\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u8ca0\u8377\u304c\u6e1b\u308a\u307e\u3059\u3002Payload\u3092\u5229\u7528\u3057\u305f\u51e6\u7406\u3092\u884c\u3046\u3053\u3068\u3067\u3001\u5fc5\u8981\u306a\u30c7\u30fc\u30bf\u3060\u3051\u30ed\u30fc\u30c9\u3057\u3001\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3092\u6539\u5584\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"payload\u3092\u5229\u7528\u3057\u3066API\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u524a\u6e1b\u3059\u308b\u51e6\u7406\u306b\u3064\u3044\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",{parentName:"p",href:"/ja/docs/faq/can-i-use-nuxt-js-ssg-to-reduce-api-calls/"},"Nuxt.js\u306eSSG\u3067\u3001\u30da\u30fc\u30b8\u306e\u751f\u6210\u6642\u306bAPI\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u6e1b\u3089\u3059\u65b9\u6cd5\u306f\u3042\u308a\u307e\u3059\u304b\uff1f"),"  ")),(0,n.kt)("h3",{id:"cdn\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u5229\u7528\u3059\u308b"},"CDN\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u5229\u7528\u3059\u308b"),(0,n.kt)("p",null,"CDN\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u30ea\u30bd\u30fc\u30b9\u3092\u30e6\u30fc\u30b6\u30fc\u306b\u8fd1\u3044\u30b5\u30fc\u30d0\u30fc\u304b\u3089\u63d0\u4f9b\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u3001\u30ed\u30fc\u30c9\u6642\u9593\u3092\u77ed\u7e2e\u3057\u307e\u3059\u3002\u307e\u305f\u3001CDN\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u6a5f\u80fd\u3092\u5229\u7528\u3059\u308b\u3053\u3068\u3067\u3001\u66f4\u306b\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306e\u5411\u4e0a\u304c\u671f\u5f85\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"CDN\u3092\u5229\u7528\u3057\u305fLCP\u306e\u30b9\u30b3\u30a2\u6539\u5584\u306b\u3064\u3044\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",{parentName:"p",href:"/ja/docs/tutorials/core-web-vitals-with-kuroco/#lcp%E3%82%B9%E3%82%B3%E3%82%A2"},"Kuroco\u3067\u7c21\u5358\u306b\u3067\u304d\u308bLCP\u306e\u30b9\u30b3\u30a2\u6539\u5584"),"  ")),(0,n.kt)("h3",{id:"\u5e83\u544asns\u30dc\u30bf\u30f3\u3068\u3044\u3063\u305f\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u306ejavascript\u3092\u524a\u6e1b\u975e\u540c\u671f\u3067\u8aad\u307f\u8fbc\u3080"},"\u5e83\u544a\u3001SNS\u30dc\u30bf\u30f3\u3068\u3044\u3063\u305f\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u306eJavaScript\u3092\u524a\u6e1b\u30fb\u975e\u540c\u671f\u3067\u8aad\u307f\u8fbc\u3080"),(0,n.kt)("p",null,"\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u306eJavaScript\u306f\u3001\u30ed\u30fc\u30c9\u6642\u9593\u306e\u5897\u52a0\u3084\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306e\u4f4e\u4e0b\u3092\u5f15\u304d\u8d77\u3053\u3059\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u308c\u3092\u524a\u6e1b\u3057\u3001\u975e\u540c\u671f\u3067\u8aad\u307f\u8fbc\u3080\u3053\u3068\u3067\u3001\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3092\u6539\u5584\u3057\u307e\u3059\u3002"),(0,n.kt)("h3",{id:"\u5e83\u544aiframe\u52d5\u7684\u306a\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u8868\u793a\u6539\u5584"},"\u5e83\u544a\u3001",(0,n.kt)("inlineCode",{parentName:"h3"},"<iframe>"),"\u3001\u52d5\u7684\u306a\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u8868\u793a\u6539\u5584"),(0,n.kt)("p",null,"\u3053\u308c\u3089\u306e\u8981\u7d20\u306e\u30b5\u30a4\u30ba\u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u3067\u3001\u30d6\u30e9\u30a6\u30b6\u306f\u4e8b\u524d\u306b\u30b9\u30da\u30fc\u30b9\u3092\u78ba\u4fdd\u3067\u304d\u3001CLS\u3092\u9632\u3050\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"CLS\u306e\u30b9\u30b3\u30a2\u6539\u5584\u306b\u3064\u3044\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",{parentName:"p",href:"/ja/docs/tutorials/core-web-vitals-with-kuroco/#cls%E3%82%B9%E3%82%B3%E3%82%A2"},"CLS\u30b9\u30b3\u30a2\u306b\u3064\u3044\u3066"),"  ")),(0,n.kt)("h3",{id:"\u30ea\u30af\u30a8\u30b9\u30c8\u6570\u3092\u6e1b\u3089\u3059"},"\u30ea\u30af\u30a8\u30b9\u30c8\u6570\u3092\u6e1b\u3089\u3059"),(0,n.kt)("p",null,"\u30ea\u30af\u30a8\u30b9\u30c8\u6570\u3092\u6e1b\u3089\u3059\u3053\u3068\u3067\u3001\u30b5\u30fc\u30d0\u30fc\u3078\u306e\u8ca0\u8377\u3092\u6e1b\u3089\u3057\u3001\u30da\u30fc\u30b8\u306e\u30ed\u30fc\u30c9\u6642\u9593\u3092\u77ed\u7e2e\u3057\u307e\u3059\u3002\nCSS\u3084JavaScript\u30d5\u30a1\u30a4\u30eb\u306e\u7d50\u5408\u3001\u30b9\u30d7\u30e9\u30a4\u30c8\u753b\u50cf\u306e\u4f7f\u7528\u306a\u3069\u306b\u3088\u308a\u5b9f\u73fe\u53ef\u80fd\u3067\u3059\u3002"))}s.isMDXComponent=!0}}]);