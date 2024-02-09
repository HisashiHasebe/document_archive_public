"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[60368],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),p=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=p(r),d=n,m=l["".concat(c,".").concat(d)]||l[d]||f[d]||a;return r?o.createElement(m,s(s({ref:t},u),{},{components:r})):o.createElement(m,s({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[l]="string"==typeof e?e:n,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},13433:(e,t,r)=>{r.d(t,{Z:()=>n});var o=r(67294);function n(e){let{faqs:t=[]}=e;if(0===(Array.isArray(t)?t.filter((e=>e.question&&e.answer)):[]).length)return null;const r={"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))},n=JSON.stringify(r,null,2);return o.createElement("script",{type:"application/ld+json"},n)}},39504:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var o=r(87462),n=(r(67294),r(3905)),a=r(13433);const s={title:"KurocoFront\u3067\u3069\u306e\u30cf\u30c3\u30b7\u30e5\u304c\u5229\u7528\u3055\u308c\u3066\u3044\u308b\u304b\u306e\u78ba\u8a8d\u65b9\u6cd5\u3092\u6559\u3048\u3066\u304f\u3060\u3055\u3044",description:"HAR\u30d5\u30a1\u30a4\u30eb\u3084Developer tools\u3067HTTP\u30ec\u30b9\u30dd\u30f3\u30b9\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002",category:"trouble"},i=void 0,c={unversionedId:"faq/how-do-i-verify-the-hash-responses-used-by-kurocofront",id:"faq/how-do-i-verify-the-hash-responses-used-by-kurocofront",title:"KurocoFront\u3067\u3069\u306e\u30cf\u30c3\u30b7\u30e5\u304c\u5229\u7528\u3055\u308c\u3066\u3044\u308b\u304b\u306e\u78ba\u8a8d\u65b9\u6cd5\u3092\u6559\u3048\u3066\u304f\u3060\u3055\u3044",description:"HAR\u30d5\u30a1\u30a4\u30eb\u3084Developer tools\u3067HTTP\u30ec\u30b9\u30dd\u30f3\u30b9\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/faq/how-do-i-verify-the-hash-responses-used-by-kurocofront.mdx",sourceDirName:"faq",slug:"/faq/how-do-i-verify-the-hash-responses-used-by-kurocofront",permalink:"/ja/docs/faq/how-do-i-verify-the-hash-responses-used-by-kurocofront",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/how-do-i-verify-the-hash-responses-used-by-kurocofront.mdx",tags:[],version:"current",frontMatter:{title:"KurocoFront\u3067\u3069\u306e\u30cf\u30c3\u30b7\u30e5\u304c\u5229\u7528\u3055\u308c\u3066\u3044\u308b\u304b\u306e\u78ba\u8a8d\u65b9\u6cd5\u3092\u6559\u3048\u3066\u304f\u3060\u3055\u3044",description:"HAR\u30d5\u30a1\u30a4\u30eb\u3084Developer tools\u3067HTTP\u30ec\u30b9\u30dd\u30f3\u30b9\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002",category:"trouble"},sidebar:"faqSidebar",previous:{title:"CDN\u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u3055\u308c\u305f\u30ec\u30b9\u30dd\u30f3\u30b9\u304b\u3069\u3046\u304b\u306e\u78ba\u8a8d\u65b9\u6cd5\u3092\u6559\u3048\u3066\u304f\u3060\u3055\u3044",permalink:"/ja/docs/faq/how-do-i-verify-responses-in-the-cdn-cache"},next:{title:"ltd\u30d5\u30a9\u30eb\u30c0\u306e\u30d5\u30a1\u30a4\u30eb\u306b\u3064\u304ft=\u30fb\u30fb\u30fb\u306eURL\u306e\u6709\u52b9\u671f\u9650\u306f\u3044\u304f\u3064\u3067\u3059\u304b\uff1f",permalink:"/ja/docs/faq/how-long-is-the-t-url-in-the-ltd-folder-valid"}},p={},u=[{value:"\u4f8b",id:"\u4f8b",level:3}],l={toc:u},f="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(f,(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(a.Z,{faqs:[{question:"KurocoFront\u3067\u3069\u306e\u30cf\u30c3\u30b7\u30e5\u304c\u5229\u7528\u3055\u308c\u3066\u3044\u308b\u304b\u306e\u78ba\u8a8d\u65b9\u6cd5\u3092\u6559\u3048\u3066\u304f\u3060\u3055\u3044",answer:"HAR\u30d5\u30a1\u30a4\u30eb\u3084Developer tools\u3067HTTP\u30ec\u30b9\u30dd\u30f3\u30b9\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002"}],mdxType:"StructuredDataFaqs"}),(0,n.kt)("p",null,"HAR\u30d5\u30a1\u30a4\u30eb\u3084Developer tools\u3067HTTP\u30ec\u30b9\u30dd\u30f3\u30b9\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u300cx-rcms-hash\u300d\u306b\u8868\u793a\u3055\u308c\u3066\u3044\u308b\u6587\u5b57\u5217\u304c\u3001\u5229\u7528\u3055\u308c\u3066\u3044\u308b\u30cf\u30c3\u30b7\u30e5\u306e\u6700\u521d\u306e7\u6587\u5b57\u3067\u3059\u3002\n",(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/5f87738a9fd9b0bfa2999ec8b88ef4d4.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/5f87738a9fd9b0bfa2999ec8b88ef4d4.png",alt:"Image (fetched from Gyazo)"})),(0,n.kt)("h3",{id:"\u4f8b"},"\u4f8b"),(0,n.kt)("p",null,"x-rcms-hash \u304c 51632bf \u306e\u5834\u5408\u306f\u3001GitHub\u306751632bf\u306e\u30cf\u30c3\u30b7\u30e5\u5024\u3092\u63a2\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002\u8868\u793a\u3055\u308c\u3066\u3044\u308b\u30da\u30fc\u30b8\u306f\u305d\u306e\u30b3\u30df\u30c3\u30c8\u3092\u5229\u7528\u3057\u305f\u3082\u306e\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"HAR\u30d5\u30a1\u30a4\u30eb\u306e\u751f\u6210\u65b9\u6cd5\u306f\u4e0b\u8a18\u30ea\u30f3\u30af\u3092\u3054\u53c2\u7167\u304f\u3060\u3055\u3044\u3002",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",{parentName:"p",href:"/ja/docs/faq/how-do-i-create-a-har-file/"},"HAR\u30d5\u30a1\u30a4\u30eb\u306e\u4f5c\u308a\u65b9\u3092\u6559\u3048\u3066\u304f\u3060\u3055\u3044"))))}d.isMDXComponent=!0}}]);