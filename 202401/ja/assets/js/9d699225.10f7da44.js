"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[27813],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},13433:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294);function o(e){let{faqs:t=[]}=e;if(0===(Array.isArray(t)?t.filter((e=>e.question&&e.answer)):[]).length)return null;const n={"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))},o=JSON.stringify(n,null,2);return r.createElement("script",{type:"application/ld+json"},o)}},81457:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905)),i=n(13433);const a={title:"\u30b3\u30f3\u30c6\u30f3\u30c4\u306eID\u304c\u98db\u3093\u3067\u3057\u307e\u3063\u3066\u3044\u305f\u308a\u30011\u304b\u3089\u59cb\u307e\u3063\u3066\u3044\u306a\u3044\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\u30b3\u30f3\u30c6\u30f3\u30c4\u306eID\u306e\u30ab\u30a6\u30f3\u30c8\u30ed\u30b8\u30c3\u30af\u3092\u6559\u3048\u3066\u304f\u3060\u3055\u3044\u3002",description:"\u30b3\u30f3\u30c6\u30f3\u30c4\u306eID\u306f\u3001\u4f5c\u6210\u9806\u306b\u30ab\u30a6\u30f3\u30c8\u30a2\u30c3\u30d7\u3055\u308c\u307e\u3059\u3002",category:"trouble"},c=void 0,s={unversionedId:"faq/what-is-the-counting-logic-behind-content-ids",id:"faq/what-is-the-counting-logic-behind-content-ids",title:"\u30b3\u30f3\u30c6\u30f3\u30c4\u306eID\u304c\u98db\u3093\u3067\u3057\u307e\u3063\u3066\u3044\u305f\u308a\u30011\u304b\u3089\u59cb\u307e\u3063\u3066\u3044\u306a\u3044\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\u30b3\u30f3\u30c6\u30f3\u30c4\u306eID\u306e\u30ab\u30a6\u30f3\u30c8\u30ed\u30b8\u30c3\u30af\u3092\u6559\u3048\u3066\u304f\u3060\u3055\u3044\u3002",description:"\u30b3\u30f3\u30c6\u30f3\u30c4\u306eID\u306f\u3001\u4f5c\u6210\u9806\u306b\u30ab\u30a6\u30f3\u30c8\u30a2\u30c3\u30d7\u3055\u308c\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/faq/what-is-the-counting-logic-behind-content-ids.mdx",sourceDirName:"faq",slug:"/faq/what-is-the-counting-logic-behind-content-ids",permalink:"/ja/docs/faq/what-is-the-counting-logic-behind-content-ids",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/what-is-the-counting-logic-behind-content-ids.mdx",tags:[],version:"current",frontMatter:{title:"\u30b3\u30f3\u30c6\u30f3\u30c4\u306eID\u304c\u98db\u3093\u3067\u3057\u307e\u3063\u3066\u3044\u305f\u308a\u30011\u304b\u3089\u59cb\u307e\u3063\u3066\u3044\u306a\u3044\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\u30b3\u30f3\u30c6\u30f3\u30c4\u306eID\u306e\u30ab\u30a6\u30f3\u30c8\u30ed\u30b8\u30c3\u30af\u3092\u6559\u3048\u3066\u304f\u3060\u3055\u3044\u3002",description:"\u30b3\u30f3\u30c6\u30f3\u30c4\u306eID\u306f\u3001\u4f5c\u6210\u9806\u306b\u30ab\u30a6\u30f3\u30c8\u30a2\u30c3\u30d7\u3055\u308c\u307e\u3059\u3002",category:"trouble"},sidebar:"faqSidebar",previous:{title:"\u30d3\u30eb\u30c9\u306e\u969b\u306bNode.js 12 actions are deprecated\u306e\u8b66\u544a\u304c\u51fa\u307e\u3059\u304c\u89e3\u6d88\u3067\u304d\u307e\u3059\u304b\uff1f",permalink:"/ja/docs/faq/what-is-node-js-12-actions-are-deprecated"},next:{title:"\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306b\u9001\u308b\u30d1\u30e9\u30e1\u30fc\u30bf\u306b\u3064\u3044\u3066\u3001\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u304b\u3089\u30af\u30a8\u30ea\u3067\u30ea\u30af\u30a8\u30b9\u30c8\u3059\u308b\u306e\u3068\u3001Kuroco\u306e\u7ba1\u7406\u753b\u9762\u3067\u8a2d\u5b9a\u3059\u308b\u306e\u3068\u3067\u9055\u3044\u304c\u3042\u308a\u307e\u3059\u304b\uff1f",permalink:"/ja/docs/faq/what-is-the-difference-between-requesting-endpoint-parameters-via-a-query-and-setting-them-in-kuroco-admin-panel"}},u={},l=[{value:"ID\u304c\uff11\u304b\u3089\u59cb\u307e\u3089\u306a\u3044\u7406\u7531",id:"id\u304c\uff11\u304b\u3089\u59cb\u307e\u3089\u306a\u3044\u7406\u7531",level:2},{value:"ID\u304c\u98db\u3093\u3067\u3044\u308b\u7406\u7531",id:"id\u304c\u98db\u3093\u3067\u3044\u308b\u7406\u7531",level:2}],p={toc:l},d="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{faqs:[{question:"\u30b3\u30f3\u30c6\u30f3\u30c4\u306eID\u304c\u98db\u3093\u3067\u3057\u307e\u3063\u3066\u3044\u305f\u308a\u30011\u304b\u3089\u59cb\u307e\u3063\u3066\u3044\u306a\u3044\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\u30b3\u30f3\u30c6\u30f3\u30c4\u306eID\u306e\u30ab\u30a6\u30f3\u30c8\u30ed\u30b8\u30c3\u30af\u3092\u6559\u3048\u3066\u304f\u3060\u3055\u3044\u3002",answer:"\u30b3\u30f3\u30c6\u30f3\u30c4\u306eID\u306f\u3001\u4f5c\u6210\u9806\u306b\u30ab\u30a6\u30f3\u30c8\u30a2\u30c3\u30d7\u3055\u308c\u307e\u3059\u3002"}],mdxType:"StructuredDataFaqs"}),(0,o.kt)("p",null,"\u30b3\u30f3\u30c6\u30f3\u30c4\u306eID\u306f\u3001\u4f5c\u6210\u9806\u306b\u30ab\u30a6\u30f3\u30c8\u30a2\u30c3\u30d7\u3055\u308c\u307e\u3059\u3002"),(0,o.kt)("h2",{id:"id\u304c\uff11\u304b\u3089\u59cb\u307e\u3089\u306a\u3044\u7406\u7531"},"ID\u304c\uff11\u304b\u3089\u59cb\u307e\u3089\u306a\u3044\u7406\u7531"),(0,o.kt)("p",null,"Kuroco\u306f\u4ed5\u7d44\u307f\u4e0a\u3001\u5e38\u306b\u65e2\u5b58\u30b5\u30a4\u30c8\u3092\u30b3\u30d4\u30fc\u3057\u3066\u65b0\u898f\u30b5\u30a4\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u3001ID\u306f1\u304b\u3089\u59cb\u307e\u3089\u306a\u3044\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002  "),(0,o.kt)("h2",{id:"id\u304c\u98db\u3093\u3067\u3044\u308b\u7406\u7531"},"ID\u304c\u98db\u3093\u3067\u3044\u308b\u7406\u7531"),(0,o.kt)("p",null,"ID\u306f\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u3092\u8de8\u3044\u3067\u30ab\u30a6\u30f3\u30c8\u30a2\u30c3\u30d7\u3057\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u6bce\u306b\u898b\u308b\u3068ID\u756a\u53f7\u304c\u98db\u3093\u3067\u3044\u308b\u3088\u3046\u306b\u898b\u3048\u307e\u3059\u3002  "),(0,o.kt)("p",null,"\u306a\u304a\u3001\u65b0\u898f\u30b3\u30f3\u30c6\u30f3\u30c4(A)\u3092\u9014\u4e2d\u4fdd\u5b58\u3057\u305f\u72b6\u614b\u3067\u3001\u66f4\u306b\u65b0\u898f\u30b3\u30f3\u30c6\u30f3\u30c4(B)\u3092\u4f5c\u6210\u3057\u3066\u4fdd\u5b58\u3092\u3059\u308b\u3068\u3001\u65b0\u898f\u30b3\u30f3\u30c6\u30f3\u30c4(B)\u306eID\u306f\u65b0\u898f\u30b3\u30f3\u30c6\u30f3\u30c4(A)\u306e\u5206\u3092\u98db\u3070\u3057\u305f\u756a\u53f7\u3067\u767b\u9332\u3055\u308c\u307e\u3059\u3002"))}f.isMDXComponent=!0}}]);