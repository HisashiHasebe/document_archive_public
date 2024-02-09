"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[38540],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>g});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=r.createContext({}),c=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=c(a),d=n,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return a?r.createElement(g,i(i({ref:e},p),{},{components:a})):r.createElement(g,i({ref:e},p))}));function g(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[u]="string"==typeof t?t:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},89710:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={title:"\u9759\u7684\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u306b\u3088\u308bAPI\u30a2\u30af\u30bb\u30b9\u5236\u9650\u306e\u65b9\u6cd5",category:"API",weight:1},i=void 0,l={unversionedId:"tutorials/restricting-api-access-with-statictoken",id:"tutorials/restricting-api-access-with-statictoken",title:"\u9759\u7684\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u306b\u3088\u308bAPI\u30a2\u30af\u30bb\u30b9\u5236\u9650\u306e\u65b9\u6cd5",description:"Kuroco\u306eAPI\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u306b\u3064\u3044\u3066",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/tutorials/restricting-api-access-with-statictoken.md",sourceDirName:"tutorials",slug:"/tutorials/restricting-api-access-with-statictoken",permalink:"/ja/docs/tutorials/restricting-api-access-with-statictoken",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/tutorials/restricting-api-access-with-statictoken.md",tags:[],version:"current",frontMatter:{title:"\u9759\u7684\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u306b\u3088\u308bAPI\u30a2\u30af\u30bb\u30b9\u5236\u9650\u306e\u65b9\u6cd5",category:"API",weight:1},sidebar:"documentationSidebar",previous:{title:"Swagger UI\u3092\u5229\u7528\u3057\u3066\u3001API\u306e\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u3092\u78ba\u8a8d\u3059\u308b",permalink:"/ja/docs/tutorials/how-to-use-swagger-ui"},next:{title:"API\u306b\u30a2\u30af\u30bb\u30b9\u5143\u306e\u56fd\u3084\u90fd\u9053\u5e9c\u770c\u3092\u8ffd\u52a0\u3059\u308b",permalink:"/ja/docs/tutorials/how-to-add-region-data"}},s={},c=[{value:"Kuroco\u306eAPI\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u306b\u3064\u3044\u3066",id:"kuroco\u306eapi\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u306b\u3064\u3044\u3066",level:2},{value:"\u9759\u7684\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u306b\u3088\u308bAPI\u30a2\u30af\u30bb\u30b9\u5236\u9650\u65b9\u6cd5",id:"\u9759\u7684\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u306b\u3088\u308bapi\u30a2\u30af\u30bb\u30b9\u5236\u9650\u65b9\u6cd5",level:2},{value:"1. Kuroco\u306eAPI\u306e\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u3092\u8a2d\u5b9a\u3059\u308b",id:"1-kuroco\u306eapi\u306e\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u3092\u8a2d\u5b9a\u3059\u308b",level:3},{value:"2.\u9759\u7684\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u3092\u767a\u884c\u3059\u308b",id:"2\u9759\u7684\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u3092\u767a\u884c\u3059\u308b",level:3},{value:"3. axios-middleware\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"3-axios-middleware\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",level:3},{value:"4. nuxt.config.js\u306b\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u8ffd\u8a18",id:"4-nuxtconfigjs\u306b\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u8ffd\u8a18",level:3},{value:"5. plugins\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u300caxios.js\u300d\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210",id:"5-plugins\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306baxiosjs\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],p={toc:c},u="wrapper";function m(t){let{components:e,...a}=t;return(0,n.kt)(u,(0,r.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"kuroco\u306eapi\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u306b\u3064\u3044\u3066"},"Kuroco\u306eAPI\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u306b\u3064\u3044\u3066"),(0,n.kt)("p",null,"Kuroco\u306eAPI\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u306f\u4e0b\u8a18\uff14\u3064\u304b\u3089\u9078\u629e\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7121\u3057"),(0,n.kt)("li",{parentName:"ul"},"\u9759\u7684\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3"),(0,n.kt)("li",{parentName:"ul"},"\u52d5\u7684\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3"),(0,n.kt)("li",{parentName:"ul"},"Cookie")),(0,n.kt)("p",null,"\u4e00\u6642\u7684\u306a\u958b\u767a\u7528API\u3092\u4f5c\u6210\u3057\u3066\u30c6\u30b9\u30c8\u3092\u3059\u308b\u5834\u5408\u3084\u3001\u5b8c\u5168\u306b\u30aa\u30fc\u30d7\u30f3\u306a\u30c7\u30fc\u30bf\u3092\u5229\u7528\u3059\u308b\u5834\u5408\u306f\u300c\u7121\u3057\u300d\u3092\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/6f01c6328767339b23838b18a0940dbd.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/6f01c6328767339b23838b18a0940dbd.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"\u3057\u304b\u3057\u306a\u304c\u3089\u3001API\u306e\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u8a2d\u5b9a\u3092\u300c\u7121\u3057\u300d\u306b\u3057\u3066\u3057\u307e\u3046\u3068\u8ab0\u3067\u3082API\u304c\u5229\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u3001\u5916\u90e8\u304b\u3089\u7121\u5dee\u5225\u306bAPI\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u53d7\u3051\u4ed8\u3051\u308b\u3053\u3068\u304c\u53ef\u80fd\u306b\u306a\u308a\u307e\u3059\u3002  "),(0,n.kt)("p",null,"\u3053\u306e\u72b6\u614b\u304c\u60f3\u5b9a\u901a\u308a\u3067\u306f\u306a\u3044\u5834\u5408\u3001\u9759\u7684\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u6a5f\u80fd\u3092\u5229\u7528\u3059\u308b\u3053\u3068\u3067\u3042\u308b\u7a0b\u5ea6\u306e\u5236\u9650\u3092\u304b\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u4eca\u56de\u306f\u9759\u7684\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u3092\u5229\u7528\u3057\u3066\u30a2\u30af\u30bb\u30b9\u5236\u9650\u3092\u304b\u3051\u308b\u65b9\u6cd5\u3092\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"\u9759\u7684\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u306e\u6587\u5b57\u5217\u306f\u516c\u958b\u30b5\u30a4\u30c8\u306e\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u901a\u4fe1\u3084JS\u30d5\u30a1\u30a4\u30eb\u5185\u306e\u8a18\u8ff0\u3092\u53c2\u7167\u3059\u308b\u3053\u3068\u3067\u5916\u90e8\u304b\u3089\u3082\u95b2\u89a7\u53ef\u80fd\u306a\u60c5\u5831\u3068\u306a\u308a\u307e\u3059\u3002\u305d\u306e\u70ba\u3001\u30bb\u30ad\u30e5\u30a2\u306a\u60c5\u5831\u306b\u5bfe\u3059\u308b\u5236\u9650\u3092\u304b\u3051\u305f\u3044\u5834\u5408\u306f\u9759\u7684\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u3067\u306f\u306a\u304f\u52d5\u7684\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u30fbCookie\u5236\u9650\u306b\u3088\u308b\u30ed\u30b0\u30a4\u30f3\u8a8d\u8a3c\u3084API\u306b\u95b2\u89a7\u30b0\u30eb\u30fc\u30d7\u306b\u3088\u308b\u5236\u9650\u3092\u304b\u3051\u308b\u5f62\u3067\u5bfe\u5fdc\u3092\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,n.kt)("h2",{id:"\u9759\u7684\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u306b\u3088\u308bapi\u30a2\u30af\u30bb\u30b9\u5236\u9650\u65b9\u6cd5"},"\u9759\u7684\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u306b\u3088\u308bAPI\u30a2\u30af\u30bb\u30b9\u5236\u9650\u65b9\u6cd5"),(0,n.kt)("p",null,"\u9759\u7684\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u306b\u3088\u308bAPI\u30a2\u30af\u30bb\u30b9\u5236\u9650\u306e\u65b9\u6cd5\u3092\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,n.kt)("h3",{id:"1-kuroco\u306eapi\u306e\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u3092\u8a2d\u5b9a\u3059\u308b"},"1. Kuroco\u306eAPI\u306e\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u3092\u8a2d\u5b9a\u3059\u308b"),(0,n.kt)("p",null,"\u4efb\u610f\u306eAPI\u4e00\u89a7\u30da\u30fc\u30b8\u304b\u3089","[\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/d4def3cf4d3594707701c3052ef09d2b.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/d4def3cf4d3594707701c3052ef09d2b.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"\u300c\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u300d\u3092\u9759\u7684\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u306b\u5909\u66f4\u3057\u3001","[\u4fdd\u5b58\u3059\u308b]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/2bcf006b2a9598350d7a2993419ae44d.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/2bcf006b2a9598350d7a2993419ae44d.png",alt:"Image from Gyazo"})),(0,n.kt)("h3",{id:"2\u9759\u7684\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u3092\u767a\u884c\u3059\u308b"},"2.\u9759\u7684\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u3092\u767a\u884c\u3059\u308b"),(0,n.kt)("p",null,"API\u4e00\u89a7\u30da\u30fc\u30b8\u304b\u3089","[Swagger UI]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/e5b6af39026c75af192d5a329d647591.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/e5b6af39026c75af192d5a329d647591.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"Swagger\u753b\u9762\u306e\u4e0a\u90e8\u306b\u3042\u308b \u300c\u9759\u7684\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u300d \u306e\u300c\u6709\u52b9\u671f\u9650\u300d\u3088\u308a\u6709\u52b9\u671f\u9650\u3092\u8a2d\u5b9a\u3057\u3001","[\u751f\u6210\u3059\u308b]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/7115b681f876864bce2fb483e6b27046.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/7115b681f876864bce2fb483e6b27046.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"\u30c8\u30fc\u30af\u30f3\u304c\u767a\u884c\u3055\u308c\u307e\u3059\u3002\u5f8c\u307b\u3069\u5229\u7528\u3059\u308b\u306e\u3067\u30b3\u30d4\u30fc\u3057\u3066\u304a\u3044\u3066\u304f\u3060\u3055\u3044\u3002\n",(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/06518b76d5caa7a90a1a2809e56ee0d2.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/06518b76d5caa7a90a1a2809e56ee0d2.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"\u4ee5\u4e0a\u3067Kuroco\u7ba1\u7406\u753b\u9762\u3067\u306e\u64cd\u4f5c\u306f\u5b8c\u4e86\u3067\u3059\u3002  "),(0,n.kt)("h3",{id:"3-axios-middleware\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},"3. axios-middleware\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,n.kt)("p",null,"\u6b21\u306b\u30bf\u30fc\u30df\u30ca\u30eb\u3067\u64cd\u4f5c\u3092\u884c\u306a\u3063\u3066\u3044\u304d\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u30bf\u30fc\u30df\u30ca\u30eb\u3092\u958b\u304d\u3001\u4e0b\u8a18\u306e\u30b3\u30de\u30f3\u30c9\u3067",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/axios-middleware"},"axios-middleware"),"\u3092\u5bfe\u8c61\u30b5\u30a4\u30c8\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"npm install --save axios-middleware\n")),(0,n.kt)("h3",{id:"4-nuxtconfigjs\u306b\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u8ffd\u8a18"},"4. nuxt.config.js\u306b\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u8ffd\u8a18"),(0,n.kt)("p",null,"nuxt.config.js\u306b\u4ee5\u4e0b\u306e\u30b3\u30fc\u30c9\u3092\u8ffd\u8a18\u3057\u307e\u3059\u3002  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="nuxt.config.js"',title:'"nuxt.config.js"'},"plugins: ['@/plugins/axios']\n")),(0,n.kt)("h3",{id:"5-plugins\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306baxiosjs\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210"},"5. plugins\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u300caxios.js\u300d\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210"),(0,n.kt)("p",null,"plugins\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u300caxios.js\u300d\u3068\u3044\u3046\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3057\u3001\u4e0b\u8a18\u3092\u8a18\u8f09\u3057\u307e\u3059\u3002  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="/plugins/axios.js"',title:'"/plugins/axios.js"'},"import axios from 'axios'\n\nexport default function({ $axios }) {\n  $axios.onRequest((config) => {\n    config.headers['x-rcms-api-access-token'] = '\u5148\u307b\u3069\u30b3\u30d4\u30fc\u3057\u305f\u30c8\u30fc\u30af\u30f3'\n    return config\n  })\n}\n")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"\u30ea\u30af\u30a8\u30b9\u30c8\u30d8\u30c3\u30c0\u30fc\u306b\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"X-RCMS-API-ACCESS-TOKEN")," \u3092\u30ad\u30fc\u3068\u3057\u3066\u9759\u7684\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u3092\u8a2d\u5b9a\u3057\u3001\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u4fe1\u3059\u308b\u3053\u3068\u3067\u30c7\u30fc\u30bf\u53d6\u5f97\u304c\u53ef\u80fd\u3067\u3059\u3002")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"\u4eca\u56de\u306f\u30d5\u30a1\u30a4\u30eb\u5185\u306b\u30c8\u30fc\u30af\u30f3\u60c5\u5831\u3092\u8a18\u8ff0\u3057\u3066\u3044\u307e\u3059\u304c\u3001\u5b9f\u969b\u306b\u306f.env\u30d5\u30a1\u30a4\u30eb\u306a\u3069\u5225\u30d5\u30a1\u30a4\u30eb\u306b\u8a18\u8ff0\u3059\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002  ")),(0,n.kt)("p",null,"\u4ee5\u4e0a\u3067\u9759\u7684\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u306b\u3088\u308bAPI\u30a2\u30af\u30bb\u30b9\u5236\u9650\u306e\u8a2d\u5b9a\u304c\u5b8c\u4e86\u3067\u3059\u3002"),(0,n.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/ja/docs/management/api-security/"},"API Security")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/ja/docs/tutorials/how-to-use-swagger-ui/"},"Swagger UI\u3092\u5229\u7528\u3057\u3066\u3001API\u306e\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u3092\u78ba\u8a8d\u3059\u308b"))))}m.isMDXComponent=!0}}]);