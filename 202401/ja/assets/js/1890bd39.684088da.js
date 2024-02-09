"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[20171],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=p(n),f=a,m=s["".concat(u,".").concat(f)]||s[f]||d[f]||o;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},13433:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294);function a(e){let{faqs:t=[]}=e;if(0===(Array.isArray(t)?t.filter((e=>e.question&&e.answer)):[]).length)return null;const n={"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))},a=JSON.stringify(n,null,2);return r.createElement("script",{type:"application/ld+json"},a)}},80375:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),o=n(13433);const l={title:"\u591a\u8a00\u8a9e\u30b5\u30a4\u30c8\u3092\u69cb\u7bc9\u3059\u308b\u969b\u306b\u6c17\u3092\u3064\u3051\u308b\u3053\u3068\u3092\u6559\u3048\u3066\u304f\u3060\u3055\u3044",description:"Kuroco\u3067\u306f\u591a\u8a00\u8a9e\u30b5\u30a4\u30c8\u3092\u7c21\u5358\u306b\u69cb\u7bc9\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u304c\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u70b9\u306b\u6ce8\u610f\u3057\u3066\u69cb\u7bc9\u3092\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044",category:"other"},i=void 0,u={unversionedId:"faq/what-should-i-take-note-of-when-building-a-multilanguage-site",id:"faq/what-should-i-take-note-of-when-building-a-multilanguage-site",title:"\u591a\u8a00\u8a9e\u30b5\u30a4\u30c8\u3092\u69cb\u7bc9\u3059\u308b\u969b\u306b\u6c17\u3092\u3064\u3051\u308b\u3053\u3068\u3092\u6559\u3048\u3066\u304f\u3060\u3055\u3044",description:"Kuroco\u3067\u306f\u591a\u8a00\u8a9e\u30b5\u30a4\u30c8\u3092\u7c21\u5358\u306b\u69cb\u7bc9\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u304c\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u70b9\u306b\u6ce8\u610f\u3057\u3066\u69cb\u7bc9\u3092\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/faq/what-should-i-take-note-of-when-building-a-multilanguage-site.mdx",sourceDirName:"faq",slug:"/faq/what-should-i-take-note-of-when-building-a-multilanguage-site",permalink:"/ja/docs/faq/what-should-i-take-note-of-when-building-a-multilanguage-site",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/what-should-i-take-note-of-when-building-a-multilanguage-site.mdx",tags:[],version:"current",frontMatter:{title:"\u591a\u8a00\u8a9e\u30b5\u30a4\u30c8\u3092\u69cb\u7bc9\u3059\u308b\u969b\u306b\u6c17\u3092\u3064\u3051\u308b\u3053\u3068\u3092\u6559\u3048\u3066\u304f\u3060\u3055\u3044",description:"Kuroco\u3067\u306f\u591a\u8a00\u8a9e\u30b5\u30a4\u30c8\u3092\u7c21\u5358\u306b\u69cb\u7bc9\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u304c\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u70b9\u306b\u6ce8\u610f\u3057\u3066\u69cb\u7bc9\u3092\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044",category:"other"},sidebar:"faqSidebar",previous:{title:"\u30a8\u30e9\u30fc\u767a\u751f\u6642\u306e\u78ba\u8a8d\u65b9\u6cd5\u3092\u6559\u3048\u3066\u304f\u3060\u3055\u3044",permalink:"/ja/docs/faq/what-should-i-do-in-case-of-errors"},next:{title:"Kuroco\u3067\u5229\u7528\u3059\u308b\u30c9\u30e1\u30a4\u30f3\u306e\u7a2e\u985e\u306b\u3064\u3044\u3066\u6559\u3048\u3066\u304f\u3060\u3055\u3044",permalink:"/ja/docs/faq/what-types-of-domains-does-kuroco-use"}},p={},c=[{value:"\u6ce8\u610f\u70b9",id:"\u6ce8\u610f\u70b9",level:2},{value:"1.\u591a\u8a00\u8a9e\u306e\u6982\u5ff5\u306b\u3064\u3044\u3066",id:"1\u591a\u8a00\u8a9e\u306e\u6982\u5ff5\u306b\u3064\u3044\u3066",level:3},{value:"2.\u591a\u8a00\u8a9e\u30b5\u30a4\u30c8\u306e\u30d5\u30a9\u30eb\u30c0\u3084\u30c9\u30e1\u30a4\u30f3\u306e\u69cb\u9020\u306b\u3064\u3044\u3066",id:"2\u591a\u8a00\u8a9e\u30b5\u30a4\u30c8\u306e\u30d5\u30a9\u30eb\u30c0\u3084\u30c9\u30e1\u30a4\u30f3\u306e\u69cb\u9020\u306b\u3064\u3044\u3066",level:3},{value:"3.SEO\u5bfe\u7b56\u306b\u3064\u3044\u3066",id:"3seo\u5bfe\u7b56\u306b\u3064\u3044\u3066",level:3},{value:"4.\u3057\u3063\u304b\u308a\u7ffb\u8a33\u3059\u308b",id:"4\u3057\u3063\u304b\u308a\u7ffb\u8a33\u3059\u308b",level:3},{value:"5.\u30da\u30fc\u30b8\u306e\u8868\u793a\u901f\u5ea6\u304c\u4e0a\u304c\u308b\u3088\u3046\u306b\u5de5\u592b\u3059\u308b",id:"5\u30da\u30fc\u30b8\u306e\u8868\u793a\u901f\u5ea6\u304c\u4e0a\u304c\u308b\u3088\u3046\u306b\u5de5\u592b\u3059\u308b",level:3},{value:"6.\u5730\u57df\u6bce\u306b\u5bfe\u5fdc\u304c\u5fc5\u8981\u306a\u6cd5\u5f8b\u306b\u3064\u3044\u3066",id:"6\u5730\u57df\u6bce\u306b\u5bfe\u5fdc\u304c\u5fc5\u8981\u306a\u6cd5\u5f8b\u306b\u3064\u3044\u3066",level:3}],s={toc:c},d="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{faqs:[{question:"\u591a\u8a00\u8a9e\u30b5\u30a4\u30c8\u3092\u69cb\u7bc9\u3059\u308b\u969b\u306b\u6c17\u3092\u3064\u3051\u308b\u3053\u3068\u3092\u6559\u3048\u3066\u304f\u3060\u3055\u3044",answer:"Kuroco\u3067\u306f\u591a\u8a00\u8a9e\u30b5\u30a4\u30c8\u3092\u7c21\u5358\u306b\u69cb\u7bc9\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u304c\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u70b9\u306b\u6ce8\u610f\u3057\u3066\u69cb\u7bc9\u3092\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044"}],mdxType:"StructuredDataFaqs"}),(0,a.kt)("p",null,"Kuroco\u3067\u306f\u591a\u8a00\u8a9e\u30b5\u30a4\u30c8\u3092\u7c21\u5358\u306b\u69cb\u7bc9\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u304c\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u70b9\u306b\u6ce8\u610f\u3057\u3066\u69cb\u7bc9\u3092\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("h2",{id:"\u6ce8\u610f\u70b9"},"\u6ce8\u610f\u70b9"),(0,a.kt)("h3",{id:"1\u591a\u8a00\u8a9e\u306e\u6982\u5ff5\u306b\u3064\u3044\u3066"},"1.\u591a\u8a00\u8a9e\u306e\u6982\u5ff5\u306b\u3064\u3044\u3066"),(0,a.kt)("p",null,"Kuroco\u3067\u306f\u4e3b\u8a00\u8a9e\u30fb\u526f\u8a00\u8a9e\u3068\u3044\u3046\u6982\u5ff5\u304c\u57fa\u672c\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002\u4e3b\u8a00\u8a9e\u3067\u69cb\u6210\u3055\u308c\u305f\u30b5\u30a4\u30c8\u306b\u526f\u8a00\u8a9e\u3067\u591a\u8a00\u8a9e\u306e\u60c5\u5831\u3092\u4ed8\u4e0e\u3059\u308b\u3068\u3044\u3046\u4ed5\u7d44\u307f\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u591a\u8a00\u8a9e\u69cb\u6210\u3059\u308b\u4f8b\uff09",(0,a.kt)("br",{parentName:"p"}),"\n","\u4e3b\u8a00\u8a9e\uff1a\u65e5\u672c\u8a9e",(0,a.kt)("br",{parentName:"p"}),"\n","\u526f\u8a00\u8a9e\uff1a\u82f1\u8a9e\u3001\u30b9\u30da\u30a4\u30f3\u8a9e\u3001\u30d5\u30e9\u30f3\u30b9\u8a9e\u306a\u3069  "),(0,a.kt)("p",null,"\u3053\u306e\u4ed5\u7d44\u307f\u304c\u8981\u6c42\u4ed5\u69d8\u306b\u5408\u308f\u306a\u3044\u5834\u5408\u306b\u306f\u3001\u8907\u6570\u306e\u7ba1\u7406\u753b\u9762\u3067\u7ba1\u7406\u3059\u308b\u65b9\u304c\u3088\u3044\u3067\u3059\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u306a\u304a\u3001\u526f\u8a00\u8a9e\u3092\u8a2d\u5b9a\u3057\u305f\u5f8c\u306b\u4e3b\u8a00\u8a9e\u3092\u5909\u66f4\u3059\u308b\u3053\u3068\u306f\u51fa\u6765\u306a\u3044\u306e\u3067\u3054\u6ce8\u610f\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("h3",{id:"2\u591a\u8a00\u8a9e\u30b5\u30a4\u30c8\u306e\u30d5\u30a9\u30eb\u30c0\u3084\u30c9\u30e1\u30a4\u30f3\u306e\u69cb\u9020\u306b\u3064\u3044\u3066"},"2.\u591a\u8a00\u8a9e\u30b5\u30a4\u30c8\u306e\u30d5\u30a9\u30eb\u30c0\u3084\u30c9\u30e1\u30a4\u30f3\u306e\u69cb\u9020\u306b\u3064\u3044\u3066"),(0,a.kt)("p",null,"\u4e00\u822c\u7684\u306b\u306f\u3001\u591a\u8a00\u8a9e\u30b5\u30a4\u30c8\u306f\u7b2c1\u968e\u5c64\u306e\u30d5\u30a9\u30eb\u30c0\u540d\u306b\u3001\u77ed\u7e2e\u3055\u308c\u305f\u8a00\u8a9e\u306e\u30d5\u30a9\u30eb\u30c0\u304c\u5165\u308b\u304b\u3001\u30b5\u30d6\u30c9\u30e1\u30a4\u30f3\u306b\u8a00\u8a9e\u306a\u3069\u306e\u6587\u5b57\u5217\u3092\u30bb\u30c3\u30c8\u3057\u307e\u3059\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","API\u3092\u547c\u3073\u51fa\u3059\u969b\u306b_lang\u306a\u3069\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3067\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u5236\u5fa1\u3057\u307e\u3057\u3087\u3046\u3002"),(0,a.kt)("p",null,"\u30d5\u30a9\u30eb\u30c0\u306e\u4f8b\uff09",(0,a.kt)("br",{parentName:"p"}),"\n","\u4e3b\u8a00\u8a9e\uff1a/example/",(0,a.kt)("br",{parentName:"p"}),"\n","\u526f\u8a00\u8a9e\uff08\u82f1\u8a9e\uff09\uff1a/en/example/  "),(0,a.kt)("h3",{id:"3seo\u5bfe\u7b56\u306b\u3064\u3044\u3066"},"3.SEO\u5bfe\u7b56\u306b\u3064\u3044\u3066"),(0,a.kt)("p",null,"\u591a\u8a00\u8a9e\u30b5\u30a4\u30c8\u306eSEO\u3082\u5927\u5207\u306a\u306e\u3067\u3001\u30d8\u30c3\u30c0\u30fc\u306bhreflang\u3092\u5fc5\u305a\u8a2d\u7f6e\u3057\u307e\u3057\u3087\u3046\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u591a\u8a00\u8a9e\u30b5\u30a4\u30c8\u306eSEO\u5bfe\u7b56\u306b\u3064\u3044\u3066\u306f\u3001",(0,a.kt)("a",{parentName:"p",href:"https://support.google.com/webmasters/answer/182192?hl=ja"},"Google\u306e\u591a\u5730\u57df\u3001\u591a\u8a00\u8a9e\u306e\u30b5\u30a4\u30c8\u306e\u6848\u5185")," \u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("p",null,"Kuroco\u306f\u4e3b\u8a00\u8a9e\u30fb\u526f\u8a00\u8a9e\u3068\u3044\u3046\u5f62\u3067\u540c\u69d8\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u8907\u6570\u306e\u8a00\u8a9e\u3067\u8868\u793a\u3059\u308b\u4ed5\u7d44\u307f\u306a\u306e\u3067\u3001canonical\u5c5e\u6027\u3068alternate\u5c5e\u6027\u3068\u540c\u69d8\u306bhreflang\u5c5e\u6027\u3092\u5229\u7528\u3059\u308b\u65b9\u6cd5\u304c\u9069\u3057\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("p",null,"sitemap.xml\u3067\u8907\u6570\u8a00\u8a9e\u306eURL\u3092\u30a2\u30ce\u30c6\u30fc\u30b7\u30e7\u30f3\u3059\u308b\u65b9\u6cd5\u3082\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("h3",{id:"4\u3057\u3063\u304b\u308a\u7ffb\u8a33\u3059\u308b"},"4.\u3057\u3063\u304b\u308a\u7ffb\u8a33\u3059\u308b"),(0,a.kt)("p",null,"\u4e2d\u9014\u534a\u7aef\u306b\u7ffb\u8a33\u3055\u308c\u305f\u30da\u30fc\u30b8\u306f\u3001\u95b2\u89a7\u8005\u306f\u3082\u3061\u308d\u3093\u691c\u7d22\u30a8\u30f3\u30b8\u30f3\u3082\u6df7\u4e71\u3055\u305b\u3066\u3057\u307e\u3046\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002\u3057\u3063\u304b\u308a\u3068\u3057\u305f\u7ffb\u8a33\u3092\u5fc3\u304c\u3051\u307e\u3057\u3087\u3046\u3002\n\u7ffb\u8a33\u304c\u96e3\u3057\u3044\u5834\u5408\u306f\u3001Google\u7ffb\u8a33\u306a\u3069\u306e\u30c4\u30fc\u30eb\u3092\u5229\u7528\u3059\u308b\u306e\u3082\u6709\u52b9\u3067\u3059\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","Google\u7ffb\u8a33\u3092\u5229\u7528\u3059\u308b\u5834\u5408\u306f\u3001\u4e3b\u8a9e\u3092\u660e\u78ba\u306b\u3057\u3001\u6587\u7ae0\u3092\u77ed\u304f\u7c21\u6f54\u306b\u8a18\u8ff0\u3057\u3066\u304b\u3089\u81ea\u52d5\u7ffb\u8a33\u3092\u3059\u308b\u306e\u304c\u304a\u52e7\u3081\u3067\u3059\u3002  "),(0,a.kt)("p",null,"\u4f8b)",(0,a.kt)("br",{parentName:"p"}),"\n","\u6539\u5584\u524d:\u5f8c\u3067\u898b\u307e\u3059",(0,a.kt)("br",{parentName:"p"}),"\n","\u6539\u5584\u5f8c:\u79c1\u306f\u5f8c\u3067\u3042\u306a\u305f\u306e\u8cc7\u6599\u3092\u898b\u307e\u3059\u3002  "),(0,a.kt)("h3",{id:"5\u30da\u30fc\u30b8\u306e\u8868\u793a\u901f\u5ea6\u304c\u4e0a\u304c\u308b\u3088\u3046\u306b\u5de5\u592b\u3059\u308b"},"5.\u30da\u30fc\u30b8\u306e\u8868\u793a\u901f\u5ea6\u304c\u4e0a\u304c\u308b\u3088\u3046\u306b\u5de5\u592b\u3059\u308b"),(0,a.kt)("p",null,"Kuroco\u306fCDN\u304c\u6a19\u6e96\u3067\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u307e\u3059\u306e\u3067\u3001\u4e0a\u624b\u304f\u5229\u7528\u3057\u3066\u30da\u30fc\u30b8\u306e\u8868\u793a\u901f\u5ea6\u304c\u4e0a\u304c\u308b\u3088\u3046\u306b\u5de5\u592b\u3057\u307e\u3057\u3087\u3046\u3002SEO\u306b\u3082\u6709\u52b9\u3067\u3059\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u4e2d\u56fd\u3067\u306f\u30b0\u30ec\u30fc\u30c8\u30d5\u30a1\u30a4\u30a2\u30a6\u30a9\u30fc\u30eb\u3084\u901a\u4fe1\u306e\u5357\u5317\u554f\u984c\u3001Google\u306e\u30c9\u30e1\u30a4\u30f3\u306e\u3088\u3046\u306a\u30d6\u30ed\u30c3\u30af\u3055\u308c\u3066\u3044\u308b\u30c9\u30e1\u30a4\u30f3\u3092\u5229\u7528\u3057\u306a\u3044\u306a\u3069\u3082\u8003\u616e\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("h3",{id:"6\u5730\u57df\u6bce\u306b\u5bfe\u5fdc\u304c\u5fc5\u8981\u306a\u6cd5\u5f8b\u306b\u3064\u3044\u3066"},"6.\u5730\u57df\u6bce\u306b\u5bfe\u5fdc\u304c\u5fc5\u8981\u306a\u6cd5\u5f8b\u306b\u3064\u3044\u3066"),(0,a.kt)("p",null,"GDPR\uff08General Data Protection Regulation\uff1aEU\u4e00\u822c\u30c7\u30fc\u30bf\u4fdd\u8b77\u898f\u5247\uff09\u306a\u3069\u3001\u5730\u57df\u6bce\u306b\u5bfe\u5fdc\u304c\u5fc5\u8981\u306a\u6cd5\u5f8b\u3082\u3042\u308a\u307e\u3059\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u8a2d\u5b9a\u3059\u308b\u5730\u57df\u306e\u6cd5\u5f8b\u306b\u9055\u53cd\u3057\u3066\u3044\u306a\u3044\u304b\u3001\u6ce8\u610f\u3057\u3066\u8a2d\u5b9a\u304f\u3060\u3055\u3044\u3002"))}f.isMDXComponent=!0}}]);