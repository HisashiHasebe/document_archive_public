"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[23817],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=s(r),f=o,m=l["".concat(u,".").concat(f)]||l[f]||d[f]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[l]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},13433:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294);function o(e){let{faqs:t=[]}=e;if(0===(Array.isArray(t)?t.filter((e=>e.question&&e.answer)):[]).length)return null;const r={"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))},o=JSON.stringify(r,null,2);return n.createElement("script",{type:"application/ld+json"},o)}},57225:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=r(87462),o=(r(67294),r(3905)),a=r(13433);const i={title:"\u554f\u3044\u5408\u308f\u305b\u30d5\u30a9\u30fc\u30e0\u306b\u5927\u91cf\u306e\u30b9\u30d1\u30e0\u30e1\u30fc\u30eb\u304c\u5c4a\u304d\u307e\u3059\u3002\u5bfe\u7b56\u306f\u3042\u308a\u307e\u305b\u3093\u304b\uff1f",description:"reCAPTCHA\u3092\u5229\u7528\u3059\u308b\u3053\u3068\u3067\u3001\u60aa\u8cea\u306a\u30b9\u30d1\u30e0\u6295\u7a3f\u304b\u3089Web\u30b5\u30a4\u30c8\u3092\u5b88\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",category:"trouble"},c=void 0,u={unversionedId:"faq/how-do-i-reduce-spam-inquiries",id:"faq/how-do-i-reduce-spam-inquiries",title:"\u554f\u3044\u5408\u308f\u305b\u30d5\u30a9\u30fc\u30e0\u306b\u5927\u91cf\u306e\u30b9\u30d1\u30e0\u30e1\u30fc\u30eb\u304c\u5c4a\u304d\u307e\u3059\u3002\u5bfe\u7b56\u306f\u3042\u308a\u307e\u305b\u3093\u304b\uff1f",description:"reCAPTCHA\u3092\u5229\u7528\u3059\u308b\u3053\u3068\u3067\u3001\u60aa\u8cea\u306a\u30b9\u30d1\u30e0\u6295\u7a3f\u304b\u3089Web\u30b5\u30a4\u30c8\u3092\u5b88\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/faq/how-do-i-reduce-spam-inquiries.mdx",sourceDirName:"faq",slug:"/faq/how-do-i-reduce-spam-inquiries",permalink:"/ja/docs/faq/how-do-i-reduce-spam-inquiries",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/how-do-i-reduce-spam-inquiries.mdx",tags:[],version:"current",frontMatter:{title:"\u554f\u3044\u5408\u308f\u305b\u30d5\u30a9\u30fc\u30e0\u306b\u5927\u91cf\u306e\u30b9\u30d1\u30e0\u30e1\u30fc\u30eb\u304c\u5c4a\u304d\u307e\u3059\u3002\u5bfe\u7b56\u306f\u3042\u308a\u307e\u305b\u3093\u304b\uff1f",description:"reCAPTCHA\u3092\u5229\u7528\u3059\u308b\u3053\u3068\u3067\u3001\u60aa\u8cea\u306a\u30b9\u30d1\u30e0\u6295\u7a3f\u304b\u3089Web\u30b5\u30a4\u30c8\u3092\u5b88\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",category:"trouble"},sidebar:"faqSidebar",previous:{title:"\u30e1\u30f3\u30d0\u30fc\u8ffd\u52a0\u30fb\u7de8\u96c6\u753b\u9762\u3067\u30ed\u30b0\u30a4\u30f3ID\u3068\u30d1\u30b9\u30ef\u30fc\u30c9\u306e\u81ea\u52d5\u5165\u529b\u3092\u56de\u907f\u3059\u308b\u65b9\u6cd5\u306f\u3042\u308a\u307e\u3059\u304b\uff1f",permalink:"/ja/docs/faq/how-do-i-prevent-login-id-and-password-autofill-on-the-member-editor-screen"},next:{title:"SSG\u306b\u3057\u3066\u3044\u307e\u3059\u3002\u30b3\u30f3\u30c6\u30f3\u30c4\u66f4\u65b0\u5f8c\u3059\u3050\u306b\u30d5\u30ed\u30f3\u30c8\u306b\u53cd\u6620\u3055\u305b\u308b\u306b\u306f\u3069\u3046\u3057\u305f\u3089\u3044\u3044\u3067\u3059\u304b\uff1f",permalink:"/ja/docs/faq/how-do-i-reflect-updated-ssg-contents-on-the-frontend"}},s={},p=[{value:"reCAPTCHA\u306b\u3064\u3044\u3066",id:"recaptcha\u306b\u3064\u3044\u3066",level:2}],l={toc:p},d="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,{faqs:[{question:"\u554f\u3044\u5408\u308f\u305b\u30d5\u30a9\u30fc\u30e0\u306b\u5927\u91cf\u306e\u30b9\u30d1\u30e0\u30e1\u30fc\u30eb\u304c\u5c4a\u304d\u307e\u3059\u3002\u5bfe\u7b56\u306f\u3042\u308a\u307e\u305b\u3093\u304b\uff1f",answer:"reCAPTCHA\u3092\u5229\u7528\u3059\u308b\u3053\u3068\u3067\u3001\u60aa\u8cea\u306a\u30b9\u30d1\u30e0\u6295\u7a3f\u304b\u3089Web\u30b5\u30a4\u30c8\u3092\u5b88\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}],mdxType:"StructuredDataFaqs"}),(0,o.kt)("p",null,"\u30d5\u30a9\u30fc\u30e0\u306e\u30b9\u30d1\u30e0\u5bfe\u7b56\u306b\u306freCAPTCHA\u3092\u3054\u5229\u7528\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)("h2",{id:"recaptcha\u306b\u3064\u3044\u3066"},"reCAPTCHA\u306b\u3064\u3044\u3066"),(0,o.kt)("p",null,"reCAPTCHA\u3068\u306f\u3001Google\u304c\u7121\u511f\u3067\u63d0\u4f9b\u3057\u3066\u3044\u308b\u6a5f\u80fd\u3067\u3059\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","Web\u30b5\u30a4\u30c8\u306e\u304a\u554f\u3044\u5408\u308f\u305b\u30d5\u30a9\u30fc\u30e0\u7b49\u3067\u60c5\u5831\u3092\u767b\u9332\u3059\u308b\u969b\u3001\u60aa\u8cea\u306a\u30b9\u30d1\u30e0\u6295\u7a3f\u304b\u3089Web\u30b5\u30a4\u30c8\u3092\u5b88\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u8a73\u3057\u3044\u8a2d\u5b9a\u65b9\u6cd5\u306f\u3001",(0,o.kt)("a",{parentName:"p",href:"/ja/docs/tutorials/using-recaptcha/"},"reCAPTCHA\u306e\u5229\u7528\u65b9\u6cd5"),"\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"))}f.isMDXComponent=!0}}]);