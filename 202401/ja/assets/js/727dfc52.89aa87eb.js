"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[13377],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(r),d=o,m=l["".concat(i,".").concat(d)]||l[d]||f[d]||a;return r?n.createElement(m,s(s({ref:t},p),{},{components:r})):n.createElement(m,s({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[l]="string"==typeof e?e:o,s[1]=c;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},13433:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294);function o(e){let{faqs:t=[]}=e;if(0===(Array.isArray(t)?t.filter((e=>e.question&&e.answer)):[]).length)return null;const r={"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))},o=JSON.stringify(r,null,2);return n.createElement("script",{type:"application/ld+json"},o)}},83258:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=r(87462),o=(r(67294),r(3905)),a=r(13433);const s={title:"\u6700\u65b0\u306eOS\u3078\u306e\u5bfe\u5fdc\u72b6\u6cc1\u3092\u6559\u3048\u3066\u304f\u3060\u3055\u3044",description:"OS\u6bce\u306e\u5bfe\u5fdc\u72b6\u6cc1\u306f\u3001\u63d0\u793a\u3092\u3057\u3066\u304a\u308a\u307e\u305b\u3093\u3002\u6700\u65b0\u306eOS\u306f\u5f0a\u793e\u3067\u3082\u5165\u624b\u3057\u3066\u691c\u8a3c\u3059\u308b\u3088\u3046\u306b\u5fc3\u304c\u3051\u3066\u304a\u308a\u307e\u3059\u304c\u3001\u3082\u3057\u52d5\u4f5c\u4e0d\u826f\u306e\u7b87\u6240\u306a\u3069\u4f55\u304b\u304a\u6c17\u3065\u304d\u306e\u70b9\u304c\u3042\u308a\u307e\u3057\u305f\u3089\u3001[\u5f0a\u793e\u30b5\u30dd\u30fc\u30c8]\u307e\u3067\u304a\u554f\u3044\u5408\u308f\u305b\u304f\u3060\u3055\u3044\u3002",category:"other"},c=void 0,i={unversionedId:"faq/what-is-kurocos-support-status-for-my-os-version",id:"faq/what-is-kurocos-support-status-for-my-os-version",title:"\u6700\u65b0\u306eOS\u3078\u306e\u5bfe\u5fdc\u72b6\u6cc1\u3092\u6559\u3048\u3066\u304f\u3060\u3055\u3044",description:"OS\u6bce\u306e\u5bfe\u5fdc\u72b6\u6cc1\u306f\u3001\u63d0\u793a\u3092\u3057\u3066\u304a\u308a\u307e\u305b\u3093\u3002\u6700\u65b0\u306eOS\u306f\u5f0a\u793e\u3067\u3082\u5165\u624b\u3057\u3066\u691c\u8a3c\u3059\u308b\u3088\u3046\u306b\u5fc3\u304c\u3051\u3066\u304a\u308a\u307e\u3059\u304c\u3001\u3082\u3057\u52d5\u4f5c\u4e0d\u826f\u306e\u7b87\u6240\u306a\u3069\u4f55\u304b\u304a\u6c17\u3065\u304d\u306e\u70b9\u304c\u3042\u308a\u307e\u3057\u305f\u3089\u3001[\u5f0a\u793e\u30b5\u30dd\u30fc\u30c8]\u307e\u3067\u304a\u554f\u3044\u5408\u308f\u305b\u304f\u3060\u3055\u3044\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/faq/what-is-kurocos-support-status-for-my-os-version.mdx",sourceDirName:"faq",slug:"/faq/what-is-kurocos-support-status-for-my-os-version",permalink:"/ja/docs/faq/what-is-kurocos-support-status-for-my-os-version",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/what-is-kurocos-support-status-for-my-os-version.mdx",tags:[],version:"current",frontMatter:{title:"\u6700\u65b0\u306eOS\u3078\u306e\u5bfe\u5fdc\u72b6\u6cc1\u3092\u6559\u3048\u3066\u304f\u3060\u3055\u3044",description:"OS\u6bce\u306e\u5bfe\u5fdc\u72b6\u6cc1\u306f\u3001\u63d0\u793a\u3092\u3057\u3066\u304a\u308a\u307e\u305b\u3093\u3002\u6700\u65b0\u306eOS\u306f\u5f0a\u793e\u3067\u3082\u5165\u624b\u3057\u3066\u691c\u8a3c\u3059\u308b\u3088\u3046\u306b\u5fc3\u304c\u3051\u3066\u304a\u308a\u307e\u3059\u304c\u3001\u3082\u3057\u52d5\u4f5c\u4e0d\u826f\u306e\u7b87\u6240\u306a\u3069\u4f55\u304b\u304a\u6c17\u3065\u304d\u306e\u70b9\u304c\u3042\u308a\u307e\u3057\u305f\u3089\u3001[\u5f0a\u793e\u30b5\u30dd\u30fc\u30c8]\u307e\u3067\u304a\u554f\u3044\u5408\u308f\u305b\u304f\u3060\u3055\u3044\u3002",category:"other"},sidebar:"faqSidebar",previous:{title:"kuroco_front.json\u3068\u306f\u4f55\u3067\u3059\u304b\uff1f",permalink:"/ja/docs/faq/what-is-kuroco_front_json"},next:{title:"\u30d3\u30eb\u30c9\u306e\u969b\u306bNode.js 12 actions are deprecated\u306e\u8b66\u544a\u304c\u51fa\u307e\u3059\u304c\u89e3\u6d88\u3067\u304d\u307e\u3059\u304b\uff1f",permalink:"/ja/docs/faq/what-is-node-js-12-actions-are-deprecated"}},u={},p=[],l={toc:p},f="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(f,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,{faqs:[{question:"\u6700\u65b0\u306eOS\u3078\u306e\u5bfe\u5fdc\u72b6\u6cc1\u3092\u6559\u3048\u3066\u304f\u3060\u3055\u3044",answer:"OS\u6bce\u306e\u5bfe\u5fdc\u72b6\u6cc1\u306f\u3001\u63d0\u793a\u3092\u3057\u3066\u304a\u308a\u307e\u305b\u3093\u3002\u6700\u65b0\u306eOS\u306f\u5f0a\u793e\u3067\u3082\u5165\u624b\u3057\u3066\u691c\u8a3c\u3059\u308b\u3088\u3046\u306b\u5fc3\u304c\u3051\u3066\u304a\u308a\u307e\u3059\u304c\u3001\u3082\u3057\u52d5\u4f5c\u4e0d\u826f\u306e\u7b87\u6240\u306a\u3069\u4f55\u304b\u304a\u6c17\u3065\u304d\u306e\u70b9\u304c\u3042\u308a\u307e\u3057\u305f\u3089\u3001[\u5f0a\u793e\u30b5\u30dd\u30fc\u30c8]\u307e\u3067\u304a\u554f\u3044\u5408\u308f\u305b\u304f\u3060\u3055\u3044\u3002"}],mdxType:"StructuredDataFaqs"}),(0,o.kt)("p",null,"OS\u6bce\u306e\u5bfe\u5fdc\u72b6\u6cc1\u306f\u3001\u63d0\u793a\u3092\u3057\u3066\u304a\u308a\u307e\u305b\u3093\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u6700\u65b0\u306eOS\u306f\u5f0a\u793e\u3067\u3082\u5165\u624b\u3057\u3066\u691c\u8a3c\u3059\u308b\u3088\u3046\u306b\u5fc3\u304c\u3051\u3066\u304a\u308a\u307e\u3059\u304c\u3001\u3082\u3057\u52d5\u4f5c\u4e0d\u826f\u306e\u7b87\u6240\u306a\u3069\u4f55\u304b\u304a\u6c17\u3065\u304d\u306e\u70b9\u304c\u3042\u308a\u307e\u3057\u305f\u3089\u3001",(0,o.kt)("a",{parentName:"p",href:"https://kuroco.zendesk.com/"},"\u5f0a\u793e\u30b5\u30dd\u30fc\u30c8"),"\u307e\u3067\u304a\u554f\u3044\u5408\u308f\u305b\u304f\u3060\u3055\u3044\u3002"))}d.isMDXComponent=!0}}]);