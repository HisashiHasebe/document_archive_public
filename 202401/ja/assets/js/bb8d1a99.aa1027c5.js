"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[26768],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=p(r),d=a,m=l["".concat(u,".").concat(d)]||l[d]||f[d]||i;return r?n.createElement(m,o(o({ref:t},s),{},{components:r})):n.createElement(m,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[l]="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},13433:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294);function a(e){let{faqs:t=[]}=e;if(0===(Array.isArray(t)?t.filter((e=>e.question&&e.answer)):[]).length)return null;const r={"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))},a=JSON.stringify(r,null,2);return n.createElement("script",{type:"application/ld+json"},a)}},20098:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var n=r(87462),a=(r(67294),r(3905)),i=r(13433);const o={title:"GitHub\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u88fd\u306e\u30a2\u30d7\u30ea\u3092\u5229\u7528\u3057\u3066\u554f\u984c\u306a\u3044\u3067\u3057\u3087\u3046\u304b\uff1f",description:"GitHub\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u30fc\u30a2\u30d7\u30ea\u3092\u5229\u7528\u3059\u308b\u3053\u3068\u306f\u554f\u984c\u3054\u3056\u3044\u307e\u305b\u3093\u3002\u6ce8\u610f\u70b9\u3068\u3057\u3066\u3001\u5229\u7528\u5143\u306e\u30a2\u30d7\u30ea\u304c\u524a\u9664\u3084\u4fee\u6b63\u3055\u308c\u308b\u3053\u3068\u3082\u3042\u308a\u307e\u3059\u3002\u307e\u305f\u3001\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u88fd\u306e\u30a2\u30d7\u30ea\u306e\u5b89\u5168\u6027\u306a\u3069\u306f\u5f0a\u793e\u3067\u78ba\u8a8d\u306f\u3067\u304d\u307e\u305b\u3093\u306e\u3067\u3001\u516c\u958b\u3055\u308c\u3066\u3044\u308b\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002",category:"system"},c=void 0,u={unversionedId:"faq/can-i-use-third-party-github-applications",id:"faq/can-i-use-third-party-github-applications",title:"GitHub\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u88fd\u306e\u30a2\u30d7\u30ea\u3092\u5229\u7528\u3057\u3066\u554f\u984c\u306a\u3044\u3067\u3057\u3087\u3046\u304b\uff1f",description:"GitHub\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u30fc\u30a2\u30d7\u30ea\u3092\u5229\u7528\u3059\u308b\u3053\u3068\u306f\u554f\u984c\u3054\u3056\u3044\u307e\u305b\u3093\u3002\u6ce8\u610f\u70b9\u3068\u3057\u3066\u3001\u5229\u7528\u5143\u306e\u30a2\u30d7\u30ea\u304c\u524a\u9664\u3084\u4fee\u6b63\u3055\u308c\u308b\u3053\u3068\u3082\u3042\u308a\u307e\u3059\u3002\u307e\u305f\u3001\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u88fd\u306e\u30a2\u30d7\u30ea\u306e\u5b89\u5168\u6027\u306a\u3069\u306f\u5f0a\u793e\u3067\u78ba\u8a8d\u306f\u3067\u304d\u307e\u305b\u3093\u306e\u3067\u3001\u516c\u958b\u3055\u308c\u3066\u3044\u308b\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/faq/can-i-use-third-party-github-applications.mdx",sourceDirName:"faq",slug:"/faq/can-i-use-third-party-github-applications",permalink:"/ja/docs/faq/can-i-use-third-party-github-applications",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/can-i-use-third-party-github-applications.mdx",tags:[],version:"current",frontMatter:{title:"GitHub\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u88fd\u306e\u30a2\u30d7\u30ea\u3092\u5229\u7528\u3057\u3066\u554f\u984c\u306a\u3044\u3067\u3057\u3087\u3046\u304b\uff1f",description:"GitHub\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u30fc\u30a2\u30d7\u30ea\u3092\u5229\u7528\u3059\u308b\u3053\u3068\u306f\u554f\u984c\u3054\u3056\u3044\u307e\u305b\u3093\u3002\u6ce8\u610f\u70b9\u3068\u3057\u3066\u3001\u5229\u7528\u5143\u306e\u30a2\u30d7\u30ea\u304c\u524a\u9664\u3084\u4fee\u6b63\u3055\u308c\u308b\u3053\u3068\u3082\u3042\u308a\u307e\u3059\u3002\u307e\u305f\u3001\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u88fd\u306e\u30a2\u30d7\u30ea\u306e\u5b89\u5168\u6027\u306a\u3069\u306f\u5f0a\u793e\u3067\u78ba\u8a8d\u306f\u3067\u304d\u307e\u305b\u3093\u306e\u3067\u3001\u516c\u958b\u3055\u308c\u3066\u3044\u308b\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002",category:"system"},sidebar:"faqSidebar",previous:{title:"Internet Explorer11\u3067\u7ba1\u7406\u753b\u9762\u3092\u5229\u7528\u3067\u304d\u307e\u3059\u304b\uff1f",permalink:"/ja/docs/faq/can-i-use-the-admin-panel-with-internet-explorer-11"},next:{title:"Kuroco\u3067WAF\u3092\u5229\u7528\u3067\u304d\u307e\u3059\u304b\uff1f",permalink:"/ja/docs/faq/can-i-use-wafs-with-kuroco"}},p={},s=[],l={toc:s},f="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(f,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{faqs:[{question:"GitHub\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u88fd\u306e\u30a2\u30d7\u30ea\u3092\u5229\u7528\u3057\u3066\u554f\u984c\u306a\u3044\u3067\u3057\u3087\u3046\u304b\uff1f",answer:"GitHub\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u30fc\u30a2\u30d7\u30ea\u3092\u5229\u7528\u3059\u308b\u3053\u3068\u306f\u554f\u984c\u3054\u3056\u3044\u307e\u305b\u3093\u3002\u6ce8\u610f\u70b9\u3068\u3057\u3066\u3001\u5229\u7528\u5143\u306e\u30a2\u30d7\u30ea\u304c\u524a\u9664\u3084\u4fee\u6b63\u3055\u308c\u308b\u3053\u3068\u3082\u3042\u308a\u307e\u3059\u3002\u307e\u305f\u3001\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u88fd\u306e\u30a2\u30d7\u30ea\u306e\u5b89\u5168\u6027\u306a\u3069\u306f\u5f0a\u793e\u3067\u78ba\u8a8d\u306f\u3067\u304d\u307e\u305b\u3093\u306e\u3067\u3001\u516c\u958b\u3055\u308c\u3066\u3044\u308b\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002"}],mdxType:"StructuredDataFaqs"}),(0,a.kt)("p",null,"GitHub\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u30fc\u30a2\u30d7\u30ea\u3092\u5229\u7528\u3059\u308b\u3053\u3068\u306f\u554f\u984c\u3054\u3056\u3044\u307e\u305b\u3093\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u6ce8\u610f\u70b9\u3068\u3057\u3066\u3001\u5229\u7528\u5143\u306e\u30a2\u30d7\u30ea\u304c\u524a\u9664\u3084\u4fee\u6b63\u3055\u308c\u308b\u3053\u3068\u3082\u3042\u308a\u307e\u3059\u3002\u307e\u305f\u3001\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u88fd\u306e\u30a2\u30d7\u30ea\u306e\u5b89\u5168\u6027\u306a\u3069\u306f\u5f0a\u793e\u3067\u78ba\u8a8d\u306f\u3067\u304d\u307e\u305b\u3093\u306e\u3067\u3001\u516c\u958b\u3055\u308c\u3066\u3044\u308b\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002  "),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/marketplace?type=actions"},"GitHub Marketplace"),"\u3067Verified creator\u3068\u306a\u3063\u3066\u3044\u308b\u30e6\u30fc\u30b6\u30fc\u304c\u4f5c\u6210\u3057\u305f\u3082\u306e\u3092\u304a\u52e7\u3081\u3044\u305f\u3057\u307e\u3059\u3002  "),(0,a.kt)("p",null,"\u307e\u305f\u3001\u4e0d\u610f\u306b\u30a2\u30d7\u30ea\u304c\u524a\u9664\u3084\u4fee\u6b63\u3055\u308c\u308b\u3053\u3068\u3082\u3042\u308a\u307e\u3059\u3002\u305d\u306e\u5834\u5408\u306b\u52d5\u4f5c\u4e0d\u826f\u3092\u8d77\u3053\u3059\u53ef\u80fd\u6027\u3082\u8003\u616e\u3059\u308b\u3068\u3001\u4ee5\u4e0b\u306e\u5bfe\u7b56\u3082\u3054\u691c\u8a0e\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u30d0\u30fc\u30b8\u30e7\u30f3\u6307\u5b9a\u3092\u3057\u3066\u5b9f\u884c\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},"\u3054\u81ea\u8eab\u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u5074\u306bfork\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},"\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3059\u308b")))}d.isMDXComponent=!0}}]);