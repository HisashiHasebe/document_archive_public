"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[10824],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=c(r),m=a,k=s["".concat(p,".").concat(m)]||s[m]||d[m]||l;return r?n.createElement(k,i(i({ref:t},u),{},{components:r})):n.createElement(k,i({ref:t},u))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},13433:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294);function a(e){let{faqs:t=[]}=e;if(0===(Array.isArray(t)?t.filter((e=>e.question&&e.answer)):[]).length)return null;const r={"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))},a=JSON.stringify(r,null,2);return n.createElement("script",{type:"application/ld+json"},a)}},41622:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var n=r(87462),a=(r(67294),r(3905)),l=r(13433);const i={title:"\u30e1\u30f3\u30d0\u30fc\u7ba1\u7406\u306e\u30d1\u30b9\u30ef\u30fc\u30c9\u306b\u5229\u7528\u3067\u304d\u308b\u6587\u5b57\u3092\u6559\u3048\u3066\u304f\u3060\u3055\u3044",description:"\u534a\u89d2\u6587\u5b57\u306e\u82f1\u8a9e\u30a2\u30eb\u30d5\u30a1\u30d9\u30c3\u30c8\u3001\u6570\u5b57\u3001\u8a18\u53f7\u3092\u3054\u5229\u7528\u306b\u306a\u308c\u307e\u3059\u3002\u4e0b\u8a18\u306e\u300c\u5229\u7528\u53ef\u80fd\u306a\u6587\u5b57\u300d\u3092\u3054\u53c2\u7167\u304f\u3060\u3055\u3044\u3002",category:"security"},o=void 0,p={unversionedId:"faq/what-characters-are-allowed-in-passwords",id:"faq/what-characters-are-allowed-in-passwords",title:"\u30e1\u30f3\u30d0\u30fc\u7ba1\u7406\u306e\u30d1\u30b9\u30ef\u30fc\u30c9\u306b\u5229\u7528\u3067\u304d\u308b\u6587\u5b57\u3092\u6559\u3048\u3066\u304f\u3060\u3055\u3044",description:"\u534a\u89d2\u6587\u5b57\u306e\u82f1\u8a9e\u30a2\u30eb\u30d5\u30a1\u30d9\u30c3\u30c8\u3001\u6570\u5b57\u3001\u8a18\u53f7\u3092\u3054\u5229\u7528\u306b\u306a\u308c\u307e\u3059\u3002\u4e0b\u8a18\u306e\u300c\u5229\u7528\u53ef\u80fd\u306a\u6587\u5b57\u300d\u3092\u3054\u53c2\u7167\u304f\u3060\u3055\u3044\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/faq/what-characters-are-allowed-in-passwords.mdx",sourceDirName:"faq",slug:"/faq/what-characters-are-allowed-in-passwords",permalink:"/ja/docs/faq/what-characters-are-allowed-in-passwords",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/what-characters-are-allowed-in-passwords.mdx",tags:[],version:"current",frontMatter:{title:"\u30e1\u30f3\u30d0\u30fc\u7ba1\u7406\u306e\u30d1\u30b9\u30ef\u30fc\u30c9\u306b\u5229\u7528\u3067\u304d\u308b\u6587\u5b57\u3092\u6559\u3048\u3066\u304f\u3060\u3055\u3044",description:"\u534a\u89d2\u6587\u5b57\u306e\u82f1\u8a9e\u30a2\u30eb\u30d5\u30a1\u30d9\u30c3\u30c8\u3001\u6570\u5b57\u3001\u8a18\u53f7\u3092\u3054\u5229\u7528\u306b\u306a\u308c\u307e\u3059\u3002\u4e0b\u8a18\u306e\u300c\u5229\u7528\u53ef\u80fd\u306a\u6587\u5b57\u300d\u3092\u3054\u53c2\u7167\u304f\u3060\u3055\u3044\u3002",category:"security"},sidebar:"faqSidebar",previous:{title:"\u30ed\u30b0\u30a4\u30f3\u30ed\u30c3\u30af\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u51fa\u308b\u539f\u56e0\u3092\u6559\u3048\u3066\u304f\u3060\u3055\u3044",permalink:"/ja/docs/faq/what-causes-accounts-to-be-locked"},next:{title:"\u30e1\u30f3\u30d0\u30fc\u7ba1\u7406\u306e\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u306b\u5229\u7528\u3067\u304d\u308b\u6587\u5b57\u3092\u6559\u3048\u3066\u304f\u3060\u3055\u3044",permalink:"/ja/docs/faq/what-characters-can-be-used-as-email"}},c={},u=[{value:"\u5229\u7528\u53ef\u80fd\u306a\u6587\u5b57",id:"\u5229\u7528\u53ef\u80fd\u306a\u6587\u5b57",level:2},{value:"\u82f1\u8a9e\u30a2\u30eb\u30d5\u30a1\u30d9\u30c3\u30c8",id:"\u82f1\u8a9e\u30a2\u30eb\u30d5\u30a1\u30d9\u30c3\u30c8",level:3},{value:"\u6570\u5b57",id:"\u6570\u5b57",level:3},{value:"\u8a18\u53f7",id:"\u8a18\u53f7",level:3}],s={toc:u},d="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(l.Z,{faqs:[{question:"\u30e1\u30f3\u30d0\u30fc\u7ba1\u7406\u306e\u30d1\u30b9\u30ef\u30fc\u30c9\u306b\u5229\u7528\u3067\u304d\u308b\u6587\u5b57\u3092\u6559\u3048\u3066\u304f\u3060\u3055\u3044",answer:"\u534a\u89d2\u6587\u5b57\u306e\u82f1\u8a9e\u30a2\u30eb\u30d5\u30a1\u30d9\u30c3\u30c8\u3001\u6570\u5b57\u3001\u8a18\u53f7\u3092\u3054\u5229\u7528\u306b\u306a\u308c\u307e\u3059\u3002\u4e0b\u8a18\u306e\u300c\u5229\u7528\u53ef\u80fd\u306a\u6587\u5b57\u300d\u3092\u3054\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"}],mdxType:"StructuredDataFaqs"}),(0,a.kt)("p",null,"\u534a\u89d2\u6587\u5b57\u306e\u82f1\u8a9e\u30a2\u30eb\u30d5\u30a1\u30d9\u30c3\u30c8\u3001\u6570\u5b57\u3001\u8a18\u53f7\u3092\u3054\u5229\u7528\u306b\u306a\u308c\u307e\u3059\u3002\u4e0b\u8a18\u306e\u300c\u5229\u7528\u53ef\u80fd\u306a\u6587\u5b57\u300d\u3092\u3054\u53c2\u7167\u304f\u3060\u3055\u3044\u3002  "),(0,a.kt)("p",null,"\u5168\u89d2\u6587\u5b57\u306f\u3054\u5229\u7528\u306b\u306a\u308c\u307e\u305b\u3093\u3002"),(0,a.kt)("h2",{id:"\u5229\u7528\u53ef\u80fd\u306a\u6587\u5b57"},"\u5229\u7528\u53ef\u80fd\u306a\u6587\u5b57"),(0,a.kt)("h3",{id:"\u82f1\u8a9e\u30a2\u30eb\u30d5\u30a1\u30d9\u30c3\u30c8"},"\u82f1\u8a9e\u30a2\u30eb\u30d5\u30a1\u30d9\u30c3\u30c8"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"abcdefghijklmnopqrstuvwxyz  "),(0,a.kt)("li",{parentName:"ul"},"ABCDEFGHIJKLMNOPQRSTUVWXYZ  ")),(0,a.kt)("p",null,"\u5927\u6587\u5b57\u5c0f\u6587\u5b57\u306f\u533a\u5225\u3055\u308c\u307e\u3059\u3002"),(0,a.kt)("h3",{id:"\u6570\u5b57"},"\u6570\u5b57"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"0123456789")),(0,a.kt)("h3",{id:"\u8a18\u53f7"},"\u8a18\u53f7"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-"),"\uff08\u30cf\u30a4\u30d5\u30f3\uff09  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_"),"\uff08\u30a2\u30f3\u30c0\u30fc\u30e9\u30a4\u30f3\uff09  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"&"),"\uff08\u30a2\u30f3\u30d1\u30b5\u30f3\u30c9\uff09  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"="),"\uff08\u30a4\u30b3\u30fc\u30eb\uff09  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+"),"\uff08\u30d7\u30e9\u30b9\uff09  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"%"),"\uff08\u30d1\u30fc\u30bb\u30f3\u30c8\uff09  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\\#"),"\uff08\u30b7\u30e3\u30fc\u30d7\uff09  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@"),"\uff08\u30a2\u30c3\u30c8\u30de\u30fc\u30af\uff09  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"$"),"\uff08\u30c9\u30eb\u8a18\u53f7\uff09  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"*"),"\uff08\u30a2\u30b9\u30bf\u30ea\u30b9\u30af\uff09  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"."),"\uff08\u30d4\u30ea\u30aa\u30c9\uff09  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"!"),"\uff08\u611f\u5606\u7b26\uff09  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},":"),"\uff08\u30b3\u30ed\u30f3\uff09"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<>"),"\uff08\u4e0d\u7b49\u53f7\uff09"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"^"),"\uff08\u30ad\u30e3\u30ec\u30c3\u30c8\uff09  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"()"),"\uff08\u4e38\u62ec\u5f27\uff09  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"~"),"\uff08\u30c1\u30eb\u30c0\uff09  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},";"),"\uff08\u30bb\u30df\u30b3\u30ed\u30f3\uff09")))}m.isMDXComponent=!0}}]);