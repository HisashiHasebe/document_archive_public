"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[3158],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(r),d=a,m=l["".concat(s,".").concat(d)]||l[d]||f[d]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[l]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},13433:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294);function a(e){let{faqs:t=[]}=e;if(0===(Array.isArray(t)?t.filter((e=>e.question&&e.answer)):[]).length)return null;const r={"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))},a=JSON.stringify(r,null,2);return n.createElement("script",{type:"application/ld+json"},a)}},14224:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(87462),a=(r(67294),r(3905)),o=r(13433);const i={title:"\u30d0\u30c3\u30c1\u51e6\u7406\u304c\u8d77\u52d5\u3057\u3066\u3044\u308b\u304b\u78ba\u8a8d\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u3059\u304b\uff1f",description:"\u306f\u3044\u3001\u78ba\u8a8d\u53ef\u80fd\u3067\u3059\u3002\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3 -> \u30d0\u30c3\u30c1\u4e00\u89a7\u306b\u3066\u3001\u30d0\u30c3\u30c1\u51e6\u7406\u306e\u6a5f\u52d5\u72b6\u6cc1\u304c\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002",category:"trouble"},c=void 0,s={unversionedId:"faq/is-it-possible-to-check-if-a-batch-process-is-running",id:"faq/is-it-possible-to-check-if-a-batch-process-is-running",title:"\u30d0\u30c3\u30c1\u51e6\u7406\u304c\u8d77\u52d5\u3057\u3066\u3044\u308b\u304b\u78ba\u8a8d\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u3059\u304b\uff1f",description:"\u306f\u3044\u3001\u78ba\u8a8d\u53ef\u80fd\u3067\u3059\u3002\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3 -> \u30d0\u30c3\u30c1\u4e00\u89a7\u306b\u3066\u3001\u30d0\u30c3\u30c1\u51e6\u7406\u306e\u6a5f\u52d5\u72b6\u6cc1\u304c\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/faq/is-it-possible-to-check-if-a-batch-process-is-running.mdx",sourceDirName:"faq",slug:"/faq/is-it-possible-to-check-if-a-batch-process-is-running",permalink:"/ja/docs/faq/is-it-possible-to-check-if-a-batch-process-is-running",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/is-it-possible-to-check-if-a-batch-process-is-running.mdx",tags:[],version:"current",frontMatter:{title:"\u30d0\u30c3\u30c1\u51e6\u7406\u304c\u8d77\u52d5\u3057\u3066\u3044\u308b\u304b\u78ba\u8a8d\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u3059\u304b\uff1f",description:"\u306f\u3044\u3001\u78ba\u8a8d\u53ef\u80fd\u3067\u3059\u3002\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3 -> \u30d0\u30c3\u30c1\u4e00\u89a7\u306b\u3066\u3001\u30d0\u30c3\u30c1\u51e6\u7406\u306e\u6a5f\u52d5\u72b6\u6cc1\u304c\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002",category:"trouble"},sidebar:"faqSidebar",previous:{title:"\u95b2\u89a7\u5236\u9650\u306e\u512a\u5148\u9806\u4f4d\u306b\u3064\u3044\u3066\u6559\u3048\u3066\u304f\u3060\u3055\u3044",permalink:"/ja/docs/faq/in-what-order-are-viewing-restrictions-applied"},next:{title:"Kuroco\u4e0a\u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u305fPDF\u30d5\u30a1\u30a4\u30eb\u306a\u3069\u306b\u542b\u307e\u308c\u308b\u30c6\u30ad\u30b9\u30c8\u3092\u691c\u7d22\u3059\u308bAPI\u3092\u4f5c\u6210\u3067\u304d\u307e\u3059\u304b\uff1f",permalink:"/ja/docs/faq/is-it-possible-to-create-an-api-to-search-the-contents-of-pdf-files-uploaded-to-kuroco"}},p={},u=[],l={toc:u},f="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(f,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{faqs:[{question:"\u30d0\u30c3\u30c1\u51e6\u7406\u304c\u8d77\u52d5\u3057\u3066\u3044\u308b\u304b\u78ba\u8a8d\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u3059\u304b\uff1f",answer:"\u306f\u3044\u3001\u78ba\u8a8d\u53ef\u80fd\u3067\u3059\u3002\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3 -> \u30d0\u30c3\u30c1\u4e00\u89a7\u306b\u3066\u3001\u30d0\u30c3\u30c1\u51e6\u7406\u306e\u6a5f\u52d5\u72b6\u6cc1\u304c\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"}],mdxType:"StructuredDataFaqs"}),(0,a.kt)("p",null,"\u306f\u3044\u3001\u78ba\u8a8d\u53ef\u80fd\u3067\u3059\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3 -> \u30d0\u30c3\u30c1\u4e00\u89a7\u306b\u3066\u3001\u30d0\u30c3\u30c1\u51e6\u7406\u306e\u6a5f\u52d5\u72b6\u6cc1\u304c\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002\n",(0,a.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/1dd6200e719e3e6ca4115d819238c925.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/1dd6200e719e3e6ca4115d819238c925.png",alt:"Image from Gyazo"}),"\n\u753b\u9762\u306e\u8a73\u7d30\u306f\u3001\u7ba1\u7406\u753b\u9762\u30de\u30cb\u30e5\u30a2\u30eb\u306e",(0,a.kt)("a",{parentName:"p",href:"/ja/docs/management/batch/#batch-list"},"\u30d0\u30c3\u30c1\u4e00\u89a7"),"\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002"))}d.isMDXComponent=!0}}]);