"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[51266],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(r),f=o,m=l["".concat(s,".").concat(f)]||l[f]||d[f]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[l]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},13433:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294);function o(e){let{faqs:t=[]}=e;if(0===(Array.isArray(t)?t.filter((e=>e.question&&e.answer)):[]).length)return null;const r={"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))},o=JSON.stringify(r,null,2);return n.createElement("script",{type:"application/ld+json"},o)}},7256:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(87462),o=(r(67294),r(3905)),a=r(13433);const i={title:"WYSIWYG\u30a8\u30c7\u30a3\u30bf\u306b\u5165\u529b\u3055\u308c\u305f\u30bd\u30fc\u30b9\u304c\u81ea\u52d5\u5909\u63db\u3055\u308c\u306a\u3044\u3088\u3046\u306b\u51fa\u6765\u307e\u3059\u304b\uff1f",description:"WYSIWYG\u30a8\u30c7\u30a3\u30bf\u306b\u5165\u529b\u3055\u308c\u305f\u30bd\u30fc\u30b9\u304c\u81ea\u52d5\u5909\u63db\u3055\u308c\u308b\u73fe\u8c61\u306f\u3001\u4f7f\u7528\u3057\u3066\u3044\u308b\u30a8\u30c7\u30a3\u30bf(CKEditor)\u5074\u306e\u4ed5\u69d8\u306b\u8d77\u56e0\u3057\u3066\u3044\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u3001Kuroco\u306e\u30b7\u30b9\u30c6\u30e0\u5074\u3067\u306e\u8abf\u7bc0\u304c\u96e3\u3057\u3044\u7b87\u6240\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002",category:"trouble"},c=void 0,s={unversionedId:"faq/can-i-prevent-sources-entered-into-the-wysiwyg-editor-from-being-automatically-converted",id:"faq/can-i-prevent-sources-entered-into-the-wysiwyg-editor-from-being-automatically-converted",title:"WYSIWYG\u30a8\u30c7\u30a3\u30bf\u306b\u5165\u529b\u3055\u308c\u305f\u30bd\u30fc\u30b9\u304c\u81ea\u52d5\u5909\u63db\u3055\u308c\u306a\u3044\u3088\u3046\u306b\u51fa\u6765\u307e\u3059\u304b\uff1f",description:"WYSIWYG\u30a8\u30c7\u30a3\u30bf\u306b\u5165\u529b\u3055\u308c\u305f\u30bd\u30fc\u30b9\u304c\u81ea\u52d5\u5909\u63db\u3055\u308c\u308b\u73fe\u8c61\u306f\u3001\u4f7f\u7528\u3057\u3066\u3044\u308b\u30a8\u30c7\u30a3\u30bf(CKEditor)\u5074\u306e\u4ed5\u69d8\u306b\u8d77\u56e0\u3057\u3066\u3044\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u3001Kuroco\u306e\u30b7\u30b9\u30c6\u30e0\u5074\u3067\u306e\u8abf\u7bc0\u304c\u96e3\u3057\u3044\u7b87\u6240\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/faq/can-i-prevent-sources-entered-into-the-wysiwyg-editor-from-being-automatically-converted.mdx",sourceDirName:"faq",slug:"/faq/can-i-prevent-sources-entered-into-the-wysiwyg-editor-from-being-automatically-converted",permalink:"/ja/docs/faq/can-i-prevent-sources-entered-into-the-wysiwyg-editor-from-being-automatically-converted",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/can-i-prevent-sources-entered-into-the-wysiwyg-editor-from-being-automatically-converted.mdx",tags:[],version:"current",frontMatter:{title:"WYSIWYG\u30a8\u30c7\u30a3\u30bf\u306b\u5165\u529b\u3055\u308c\u305f\u30bd\u30fc\u30b9\u304c\u81ea\u52d5\u5909\u63db\u3055\u308c\u306a\u3044\u3088\u3046\u306b\u51fa\u6765\u307e\u3059\u304b\uff1f",description:"WYSIWYG\u30a8\u30c7\u30a3\u30bf\u306b\u5165\u529b\u3055\u308c\u305f\u30bd\u30fc\u30b9\u304c\u81ea\u52d5\u5909\u63db\u3055\u308c\u308b\u73fe\u8c61\u306f\u3001\u4f7f\u7528\u3057\u3066\u3044\u308b\u30a8\u30c7\u30a3\u30bf(CKEditor)\u5074\u306e\u4ed5\u69d8\u306b\u8d77\u56e0\u3057\u3066\u3044\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u3001Kuroco\u306e\u30b7\u30b9\u30c6\u30e0\u5074\u3067\u306e\u8abf\u7bc0\u304c\u96e3\u3057\u3044\u7b87\u6240\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002",category:"trouble"},sidebar:"faqSidebar",previous:{title:"Kurocofront\u3067\u30d7\u30ec\u30d3\u30e5\u30fc\u7528\u306e\u30da\u30fc\u30b8\u3092\u51fa\u529b\u3067\u304d\u307e\u3059\u304b\uff1f",permalink:"/ja/docs/faq/can-i-output-a-preview-page-with-kurocofront"},next:{title:"\u4ed5\u69d8\u3084\u6a5f\u80fd\u306b\u3064\u3044\u3066\u3001\u8ffd\u52a0\u3084\u6539\u4fee\u3092\u4f9d\u983c\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u3059\u304b\uff1f",permalink:"/ja/docs/faq/can-i-request-additions-or-modifications-to-the-specifications-or-functions"}},u={},p=[],l={toc:p},d="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,{faqs:[{question:"WYSIWYG\u30a8\u30c7\u30a3\u30bf\u306b\u5165\u529b\u3055\u308c\u305f\u30bd\u30fc\u30b9\u304c\u81ea\u52d5\u5909\u63db\u3055\u308c\u306a\u3044\u3088\u3046\u306b\u51fa\u6765\u307e\u3059\u304b\uff1f",answer:"WYSIWYG\u30a8\u30c7\u30a3\u30bf\u306b\u5165\u529b\u3055\u308c\u305f\u30bd\u30fc\u30b9\u304c\u81ea\u52d5\u5909\u63db\u3055\u308c\u308b\u73fe\u8c61\u306f\u3001\u4f7f\u7528\u3057\u3066\u3044\u308b\u30a8\u30c7\u30a3\u30bf(CKEditor)\u5074\u306e\u4ed5\u69d8\u306b\u8d77\u56e0\u3057\u3066\u3044\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u3001Kuroco\u306e\u30b7\u30b9\u30c6\u30e0\u5074\u3067\u306e\u8abf\u7bc0\u304c\u96e3\u3057\u3044\u7b87\u6240\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002"}],mdxType:"StructuredDataFaqs"}),(0,o.kt)("p",null,"WYSIWYG\u30a8\u30c7\u30a3\u30bf\u306b\u5165\u529b\u3055\u308c\u305f\u30bd\u30fc\u30b9\u304c\u81ea\u52d5\u5909\u63db\u3055\u308c\u308b\u73fe\u8c61\u306f\u3001\u4f7f\u7528\u3057\u3066\u3044\u308b\u30a8\u30c7\u30a3\u30bf(CKEditor)\u5074\u306e\u4ed5\u69d8\u306b\u8d77\u56e0\u3057\u3066\u3044\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u3001Kuroco\u306e\u30b7\u30b9\u30c6\u30e0\u5074\u3067\u306e\u8abf\u7bc0\u304c\u96e3\u3057\u3044\u7b87\u6240\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u3092\u610f\u56f3\u901a\u308a\u306b\u5165\u529b\u3057\u305f\u3044\u5834\u5408\u306b\u306f\u3001WYSIWYG\u30a8\u30c7\u30a3\u30bf\u3067\u306f\u306a\u304f\u3001\u62e1\u5f35\u9805\u76ee\u306e\u300cHTML\u300d\u306e\u5229\u7528\u3092\u304a\u52e7\u3081\u3044\u305f\u3057\u307e\u3059\u3002 "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/681d15bc00c8e1fff4eaddbc17823cd0.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/681d15bc00c8e1fff4eaddbc17823cd0.png",alt:"Image from Gyazo"})))}f.isMDXComponent=!0}}]);