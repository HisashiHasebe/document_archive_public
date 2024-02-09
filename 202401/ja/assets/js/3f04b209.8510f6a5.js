"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[94484],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(r),d=a,m=l["".concat(c,".").concat(d)]||l[d]||f[d]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},13433:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294);function a(e){let{faqs:t=[]}=e;if(0===(Array.isArray(t)?t.filter((e=>e.question&&e.answer)):[]).length)return null;const r={"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))},a=JSON.stringify(r,null,2);return n.createElement("script",{type:"application/ld+json"},a)}},18559:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(87462),a=(r(67294),r(3905)),o=r(13433);const i={title:"\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u306e\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u305f\u5f8c\u3067\u3001\u904e\u53bb\u306e\u8a18\u4e8b\u3092\u8868\u793a\u3059\u308b\u3068\u3001\u5b58\u5728\u3057\u306a\u3044\u30c7\u30fc\u30bf\u304c\u5165\u3063\u3066\u3044\u308b\u3053\u3068\u304c\u3042\u308b\u306e\u306f\u306a\u305c\u3067\u3059\u304b\uff1f",description:"\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u66f4\u65b0\u5c65\u6b74\u306f\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u7de8\u96c6\u3084\u30b3\u30f3\u30c6\u30f3\u30c4\u30ab\u30c6\u30b4\u30ea\u306e\u66f4\u65b0\u5c65\u6b74\u3068\u9023\u52d5\u3057\u3066\u3044\u307e\u305b\u3093\u3002\u305d\u306e\u305f\u3081\u3001\u66f4\u65b0\u5c65\u6b74\u3067\u904e\u53bb\u306e\u8a18\u4e8b\u3092\u8868\u793a\u3059\u308b\u3068\u304d\u306b\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u7de8\u96c6\u3084\u30ab\u30c6\u30b4\u30ea\u306e\u8a2d\u5b9a\u3067\u306f\u6700\u65b0\u306e\u30c7\u30fc\u30bf\u3092\u5229\u7528\u3057\u3066\u3057\u307e\u3044\u3001\u5b58\u5728\u3057\u306a\u3044\u30c7\u30fc\u30bf\u304c\u5165\u308b\u3068\u3044\u3063\u305f\u73fe\u8c61\u304c\u767a\u751f\u3059\u308b\u5834\u5408\u3082\u3042\u308a\u307e\u3059\u3002",category:"trouble"},s=void 0,c={unversionedId:"faq/why-do-I-sometimes-see-nonexistent-data-in-past-articles-after-modifying-the-content-structure",id:"faq/why-do-I-sometimes-see-nonexistent-data-in-past-articles-after-modifying-the-content-structure",title:"\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u306e\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u305f\u5f8c\u3067\u3001\u904e\u53bb\u306e\u8a18\u4e8b\u3092\u8868\u793a\u3059\u308b\u3068\u3001\u5b58\u5728\u3057\u306a\u3044\u30c7\u30fc\u30bf\u304c\u5165\u3063\u3066\u3044\u308b\u3053\u3068\u304c\u3042\u308b\u306e\u306f\u306a\u305c\u3067\u3059\u304b\uff1f",description:"\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u66f4\u65b0\u5c65\u6b74\u306f\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u7de8\u96c6\u3084\u30b3\u30f3\u30c6\u30f3\u30c4\u30ab\u30c6\u30b4\u30ea\u306e\u66f4\u65b0\u5c65\u6b74\u3068\u9023\u52d5\u3057\u3066\u3044\u307e\u305b\u3093\u3002\u305d\u306e\u305f\u3081\u3001\u66f4\u65b0\u5c65\u6b74\u3067\u904e\u53bb\u306e\u8a18\u4e8b\u3092\u8868\u793a\u3059\u308b\u3068\u304d\u306b\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u7de8\u96c6\u3084\u30ab\u30c6\u30b4\u30ea\u306e\u8a2d\u5b9a\u3067\u306f\u6700\u65b0\u306e\u30c7\u30fc\u30bf\u3092\u5229\u7528\u3057\u3066\u3057\u307e\u3044\u3001\u5b58\u5728\u3057\u306a\u3044\u30c7\u30fc\u30bf\u304c\u5165\u308b\u3068\u3044\u3063\u305f\u73fe\u8c61\u304c\u767a\u751f\u3059\u308b\u5834\u5408\u3082\u3042\u308a\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/faq/why-do-I-sometimes-see-nonexistent-data-in-past-articles-after-modifying-the-content-structure.mdx",sourceDirName:"faq",slug:"/faq/why-do-I-sometimes-see-nonexistent-data-in-past-articles-after-modifying-the-content-structure",permalink:"/ja/docs/faq/why-do-I-sometimes-see-nonexistent-data-in-past-articles-after-modifying-the-content-structure",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/why-do-I-sometimes-see-nonexistent-data-in-past-articles-after-modifying-the-content-structure.mdx",tags:[],version:"current",frontMatter:{title:"\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u306e\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u305f\u5f8c\u3067\u3001\u904e\u53bb\u306e\u8a18\u4e8b\u3092\u8868\u793a\u3059\u308b\u3068\u3001\u5b58\u5728\u3057\u306a\u3044\u30c7\u30fc\u30bf\u304c\u5165\u3063\u3066\u3044\u308b\u3053\u3068\u304c\u3042\u308b\u306e\u306f\u306a\u305c\u3067\u3059\u304b\uff1f",description:"\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u66f4\u65b0\u5c65\u6b74\u306f\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u7de8\u96c6\u3084\u30b3\u30f3\u30c6\u30f3\u30c4\u30ab\u30c6\u30b4\u30ea\u306e\u66f4\u65b0\u5c65\u6b74\u3068\u9023\u52d5\u3057\u3066\u3044\u307e\u305b\u3093\u3002\u305d\u306e\u305f\u3081\u3001\u66f4\u65b0\u5c65\u6b74\u3067\u904e\u53bb\u306e\u8a18\u4e8b\u3092\u8868\u793a\u3059\u308b\u3068\u304d\u306b\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u7de8\u96c6\u3084\u30ab\u30c6\u30b4\u30ea\u306e\u8a2d\u5b9a\u3067\u306f\u6700\u65b0\u306e\u30c7\u30fc\u30bf\u3092\u5229\u7528\u3057\u3066\u3057\u307e\u3044\u3001\u5b58\u5728\u3057\u306a\u3044\u30c7\u30fc\u30bf\u304c\u5165\u308b\u3068\u3044\u3063\u305f\u73fe\u8c61\u304c\u767a\u751f\u3059\u308b\u5834\u5408\u3082\u3042\u308a\u307e\u3059\u3002",category:"trouble"},sidebar:"faqSidebar",previous:{title:"TLS\u8a3c\u660e\u66f8\u306e\u66f4\u65b0\u3084\u7ba1\u7406\u306f\u8ab0\u304c\u884c\u3046\u306e\u304b\u6559\u3048\u3066\u304f\u3060\u3055\u3044",permalink:"/ja/docs/faq/who-updates-and-manages-the-tls-certificates"},next:{title:"\u30b3\u30f3\u30c6\u30f3\u30c4\u66f4\u65b0\u5f8c\u306e\u30c8\u30ea\u30ac\u304c\u4e8c\u91cd\u306b\u547c\u3070\u308c\u308b\u306e\u306f\u306a\u305c\u3067\u3059\u304b\uff1f",permalink:"/ja/docs/faq/why-is-the-trigger-called-twice-after-content-update"}},u={},p=[],l={toc:p},f="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(f,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{faqs:[{question:"\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u306e\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u305f\u5f8c\u3067\u3001\u904e\u53bb\u306e\u8a18\u4e8b\u3092\u8868\u793a\u3059\u308b\u3068\u3001\u5b58\u5728\u3057\u306a\u3044\u30c7\u30fc\u30bf\u304c\u5165\u3063\u3066\u3044\u308b\u3053\u3068\u304c\u3042\u308b\u306e\u306f\u306a\u305c\u3067\u3059\u304b\uff1f",answer:"\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u66f4\u65b0\u5c65\u6b74\u306f\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u7de8\u96c6\u3084\u30b3\u30f3\u30c6\u30f3\u30c4\u30ab\u30c6\u30b4\u30ea\u306e\u66f4\u65b0\u5c65\u6b74\u3068\u9023\u52d5\u3057\u3066\u3044\u307e\u305b\u3093\u3002\u305d\u306e\u305f\u3081\u3001\u66f4\u65b0\u5c65\u6b74\u3067\u904e\u53bb\u306e\u8a18\u4e8b\u3092\u8868\u793a\u3059\u308b\u3068\u304d\u306b\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u7de8\u96c6\u3084\u30ab\u30c6\u30b4\u30ea\u306e\u8a2d\u5b9a\u3067\u306f\u6700\u65b0\u306e\u30c7\u30fc\u30bf\u3092\u5229\u7528\u3057\u3066\u3057\u307e\u3044\u3001\u5b58\u5728\u3057\u306a\u3044\u30c7\u30fc\u30bf\u304c\u5165\u308b\u3068\u3044\u3063\u305f\u73fe\u8c61\u304c\u767a\u751f\u3059\u308b\u5834\u5408\u3082\u3042\u308a\u307e\u3059\u3002"}],mdxType:"StructuredDataFaqs"}),(0,a.kt)("p",null,"\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u66f4\u65b0\u5c65\u6b74\u306f\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u7de8\u96c6\u3084\u30b3\u30f3\u30c6\u30f3\u30c4\u30ab\u30c6\u30b4\u30ea\u306e\u66f4\u65b0\u5c65\u6b74\u3068\u9023\u52d5\u3057\u3066\u3044\u307e\u305b\u3093\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u305d\u306e\u305f\u3081\u3001\u66f4\u65b0\u5c65\u6b74\u3067\u904e\u53bb\u306e\u8a18\u4e8b\u3092\u8868\u793a\u3059\u308b\u3068\u304d\u306b\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u7de8\u96c6\u3084\u30ab\u30c6\u30b4\u30ea\u306e\u8a2d\u5b9a\u3067\u306f\u6700\u65b0\u306e\u30c7\u30fc\u30bf\u3092\u5229\u7528\u3057\u3066\u3057\u307e\u3044\u3001\u5b58\u5728\u3057\u306a\u3044\u30c7\u30fc\u30bf\u304c\u5165\u308b\u3068\u3044\u3063\u305f\u73fe\u8c61\u304c\u767a\u751f\u3059\u308b\u5834\u5408\u3082\u3042\u308a\u307e\u3059\u3002"))}d.isMDXComponent=!0}}]);