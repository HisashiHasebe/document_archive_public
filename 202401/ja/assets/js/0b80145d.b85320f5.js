"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[31789],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),f=a,y=p["".concat(s,".").concat(f)]||p[f]||m[f]||o;return r?n.createElement(y,i(i({ref:t},l),{},{components:r})):n.createElement(y,i({ref:t},l))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},13433:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294);function a(e){let{faqs:t=[]}=e;if(0===(Array.isArray(t)?t.filter((e=>e.question&&e.answer)):[]).length)return null;const r={"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))},a=JSON.stringify(r,null,2);return n.createElement("script",{type:"application/ld+json"},a)}},75206:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(87462),a=(r(67294),r(3905)),o=r(13433);const i={title:"Smarty\u306e\u30de\u30cb\u30e5\u30a2\u30eb\u306f\u3042\u308a\u307e\u3059\u304b\uff1f",description:"Smarty\u306b\u3064\u3044\u3066\u306f\u3001[Smarty\u30de\u30cb\u30e5\u30a2\u30eb]\u3092\u3054\u53c2\u7167\u304f\u3060\u3055\u3044\u3002",category:"howto"},c=void 0,s={unversionedId:"faq/where-can-i-find-the-manual-for-smarty",id:"faq/where-can-i-find-the-manual-for-smarty",title:"Smarty\u306e\u30de\u30cb\u30e5\u30a2\u30eb\u306f\u3042\u308a\u307e\u3059\u304b\uff1f",description:"Smarty\u306b\u3064\u3044\u3066\u306f\u3001[Smarty\u30de\u30cb\u30e5\u30a2\u30eb]\u3092\u3054\u53c2\u7167\u304f\u3060\u3055\u3044\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/faq/where-can-i-find-the-manual-for-smarty.mdx",sourceDirName:"faq",slug:"/faq/where-can-i-find-the-manual-for-smarty",permalink:"/ja/docs/faq/where-can-i-find-the-manual-for-smarty",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/where-can-i-find-the-manual-for-smarty.mdx",tags:[],version:"current",frontMatter:{title:"Smarty\u306e\u30de\u30cb\u30e5\u30a2\u30eb\u306f\u3042\u308a\u307e\u3059\u304b\uff1f",description:"Smarty\u306b\u3064\u3044\u3066\u306f\u3001[Smarty\u30de\u30cb\u30e5\u30a2\u30eb]\u3092\u3054\u53c2\u7167\u304f\u3060\u3055\u3044\u3002",category:"howto"},sidebar:"faqSidebar",previous:{title:"API\u306e\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8\u4e00\u89a7\u306f\u3042\u308a\u307e\u3059\u304b\uff1f",permalink:"/ja/docs/faq/where-can-i-find-a-list-of-api-error-messages"},next:{title:"TLS\u8a3c\u660e\u66f8\u306e\u8a8d\u8a3c\u5c40\u3092\u6559\u3048\u3066\u304f\u3060\u3055\u3044",permalink:"/ja/docs/faq/which-authority-issues-the-tls-certificates"}},u={},l=[],p={toc:l},m="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{faqs:[{question:"Smarty\u306e\u30de\u30cb\u30e5\u30a2\u30eb\u306f\u3042\u308a\u307e\u3059\u304b\uff1f",answer:"Smarty\u306b\u3064\u3044\u3066\u306f\u3001[Smarty\u30de\u30cb\u30e5\u30a2\u30eb]\u3092\u3054\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"}],mdxType:"StructuredDataFaqs"}),(0,a.kt)("p",null,"Smarty\u306b\u3064\u3044\u3066\u306f\u3001",(0,a.kt)("a",{parentName:"p",href:"https://www.smarty.net/docsv2/ja/"},"Smarty\u30de\u30cb\u30e5\u30a2\u30eb"),"\u3092\u3054\u53c2\u7167\u304f\u3060\u3055\u3044\u3002  "),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u306e\u554f\u984c\u7b49\u3067Kuroco\u3067\u306f\u5229\u7528\u3067\u304d\u306a\u3044\u5834\u5408\u3082\u3054\u3056\u3044\u307e\u3059\u3002")),(0,a.kt)("p",null,"Kuroco\u306e\u72ec\u81ea\u306e\u30bf\u30b0\u306b\u95a2\u3057\u3066\u306f\u4ee5\u4e0b\u306b\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u914d\u7f6e\u3057\u307e\u3059\u306e\u3067\u3001\u3053\u3061\u3089\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ja/docs/reference/smarty-plugin/"},"Smarty\u30d7\u30e9\u30b0\u30a4\u30f3"))))}f.isMDXComponent=!0}}]);