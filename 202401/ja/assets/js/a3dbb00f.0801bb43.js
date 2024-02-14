"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[60741],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,d=p["".concat(c,".").concat(m)]||p[m]||f[m]||o;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},13433:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294);function a(e){let{faqs:t=[]}=e;if(0===(Array.isArray(t)?t.filter((e=>e.question&&e.answer)):[]).length)return null;const r={"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))},a=JSON.stringify(r,null,2);return n.createElement("script",{type:"application/ld+json"},a)}},9658:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(87462),a=(r(67294),r(3905)),o=r(13433);const i={title:"\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u5bfe\u7b56\u306e\u8cc7\u6599\u306f\u3042\u308a\u307e\u3059\u304b\uff1f",description:"Kuroco\u306e\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u5bfe\u7b56\u306b\u3064\u3044\u3066\u306f\u3001\u55b6\u696d\u8cc7\u6599\u306e\u300c\u30a4\u30f3\u30d5\u30e9\u306b\u95a2\u3059\u308b\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u300d\u5185\u300c\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u6a5f\u80fd\u306b\u3064\u3044\u3066\u300d\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044",category:"security"},s=void 0,c={unversionedId:"faq/materials-on-security-measures",id:"faq/materials-on-security-measures",title:"\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u5bfe\u7b56\u306e\u8cc7\u6599\u306f\u3042\u308a\u307e\u3059\u304b\uff1f",description:"Kuroco\u306e\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u5bfe\u7b56\u306b\u3064\u3044\u3066\u306f\u3001\u55b6\u696d\u8cc7\u6599\u306e\u300c\u30a4\u30f3\u30d5\u30e9\u306b\u95a2\u3059\u308b\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u300d\u5185\u300c\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u6a5f\u80fd\u306b\u3064\u3044\u3066\u300d\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/faq/materials-on-security-measures.mdx",sourceDirName:"faq",slug:"/faq/materials-on-security-measures",permalink:"/ja/docs/faq/materials-on-security-measures",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/materials-on-security-measures.mdx",tags:[],version:"current",frontMatter:{title:"\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u5bfe\u7b56\u306e\u8cc7\u6599\u306f\u3042\u308a\u307e\u3059\u304b\uff1f",description:"Kuroco\u306e\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u5bfe\u7b56\u306b\u3064\u3044\u3066\u306f\u3001\u55b6\u696d\u8cc7\u6599\u306e\u300c\u30a4\u30f3\u30d5\u30e9\u306b\u95a2\u3059\u308b\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u300d\u5185\u300c\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u6a5f\u80fd\u306b\u3064\u3044\u3066\u300d\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044",category:"security"},sidebar:"faqSidebar",previous:{title:"\u30e1\u30fc\u30eb\u914d\u4fe1\u6642\u306e\u4ef6\u6570\u5236\u9650\u306f\u3042\u308a\u307e\u3059\u304b\u3002",permalink:"/ja/docs/faq/is-there-a-limit-to-the-number-of-e-mails-i-can-send"},next:{title:"CSV\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u305f\u591a\u8a00\u8a9e\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u304c\u6587\u5b57\u5316\u3051\u3057\u307e\u3059",permalink:"/ja/docs/faq/multilanguage-content-in-downloaded-csv-file-is-garbled"}},u={},l=[],p={toc:l},f="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(f,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{faqs:[{question:"\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u5bfe\u7b56\u306e\u8cc7\u6599\u306f\u3042\u308a\u307e\u3059\u304b\uff1f",answer:"Kuroco\u306e\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u5bfe\u7b56\u306b\u3064\u3044\u3066\u306f\u3001\u55b6\u696d\u8cc7\u6599\u306e\u300c\u30a4\u30f3\u30d5\u30e9\u306b\u95a2\u3059\u308b\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u300d\u5185\u300c\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u6a5f\u80fd\u306b\u3064\u3044\u3066\u300d\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044"}],mdxType:"StructuredDataFaqs"}),(0,a.kt)("p",null,"\u306f\u3044\u3001\u8cc7\u6599\u6e96\u5099\u3057\u3066\u304a\u308a\u307e\u3059\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","Kuroco\u306e\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u5bfe\u7b56\u306b\u3064\u3044\u3066\u306f\u3001",(0,a.kt)("a",{parentName:"p",href:"/ja/docs/about/sales/"},"\u55b6\u696d\u8cc7\u6599"),"\u306e",(0,a.kt)("a",{parentName:"p",href:"https://hisashihasebe.github.io/document_archive_public/202401/files/sheets/ja/kuroco_infrastructure.pdf"},"\u30a4\u30f3\u30d5\u30e9\u306b\u95a2\u3059\u308b\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),"\u5185\u300c\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u6a5f\u80fd\u306b\u3064\u3044\u3066\u300d\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002"))}m.isMDXComponent=!0}}]);