"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[43526],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=s(r),f=a,m=l["".concat(p,".").concat(f)]||l[f]||d[f]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[l]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},13433:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294);function a(e){let{faqs:t=[]}=e;if(0===(Array.isArray(t)?t.filter((e=>e.question&&e.answer)):[]).length)return null;const r={"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))},a=JSON.stringify(r,null,2);return n.createElement("script",{type:"application/ld+json"},a)}},28071:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var n=r(87462),a=(r(67294),r(3905)),o=r(13433);const i={title:"\u300c\uff12\u91cd\u9001\u4fe1\u306e\u53ef\u80fd\u6027\u304c\u3042\u308b\u306e\u3067\u3001\u66f4\u65b0\u3092\u3057\u307e\u305b\u3093\u3067\u3057\u305f\u3002\u3082\u3046\u4e00\u5ea6\u66f4\u65b0\u51e6\u7406\u3092\u884c\u3063\u3066\u304f\u3060\u3055\u3044\u3002\u300d\u3068\u3044\u3046\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u8868\u793a\u3055\u308c\u3066\u3057\u307e\u3044\u307e\u3059\u3002",description:"\u30b3\u30f3\u30c6\u30f3\u30c4\u304c\u6b63\u5e38\u306b\u9001\u4fe1\u3067\u304d\u3066\u3044\u306a\u3044\u5834\u5408\u306b\u3053\u3061\u3089\u306e\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002",category:"trouble"},c=void 0,p={unversionedId:"faq/i-received-the-error--update-process-was-interrupted",id:"faq/i-received-the-error--update-process-was-interrupted",title:"\u300c\uff12\u91cd\u9001\u4fe1\u306e\u53ef\u80fd\u6027\u304c\u3042\u308b\u306e\u3067\u3001\u66f4\u65b0\u3092\u3057\u307e\u305b\u3093\u3067\u3057\u305f\u3002\u3082\u3046\u4e00\u5ea6\u66f4\u65b0\u51e6\u7406\u3092\u884c\u3063\u3066\u304f\u3060\u3055\u3044\u3002\u300d\u3068\u3044\u3046\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u8868\u793a\u3055\u308c\u3066\u3057\u307e\u3044\u307e\u3059\u3002",description:"\u30b3\u30f3\u30c6\u30f3\u30c4\u304c\u6b63\u5e38\u306b\u9001\u4fe1\u3067\u304d\u3066\u3044\u306a\u3044\u5834\u5408\u306b\u3053\u3061\u3089\u306e\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/faq/i-received-the-error--update-process-was-interrupted.mdx",sourceDirName:"faq",slug:"/faq/i-received-the-error--update-process-was-interrupted",permalink:"/ja/docs/faq/i-received-the-error--update-process-was-interrupted",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/i-received-the-error--update-process-was-interrupted.mdx",tags:[],version:"current",frontMatter:{title:"\u300c\uff12\u91cd\u9001\u4fe1\u306e\u53ef\u80fd\u6027\u304c\u3042\u308b\u306e\u3067\u3001\u66f4\u65b0\u3092\u3057\u307e\u305b\u3093\u3067\u3057\u305f\u3002\u3082\u3046\u4e00\u5ea6\u66f4\u65b0\u51e6\u7406\u3092\u884c\u3063\u3066\u304f\u3060\u3055\u3044\u3002\u300d\u3068\u3044\u3046\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u8868\u793a\u3055\u308c\u3066\u3057\u307e\u3044\u307e\u3059\u3002",description:"\u30b3\u30f3\u30c6\u30f3\u30c4\u304c\u6b63\u5e38\u306b\u9001\u4fe1\u3067\u304d\u3066\u3044\u306a\u3044\u5834\u5408\u306b\u3053\u3061\u3089\u306e\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002",category:"trouble"},sidebar:"faqSidebar",previous:{title:"\u5951\u7d04\u8005\u30fb\u7ba1\u7406\u8005\u306e\u60c5\u5831\u3092\u5909\u66f4\u3057\u305f\u3044\u3067\u3059\u3002\u624b\u7d9a\u304d\u3092\u6559\u3048\u3066\u304f\u3060\u3055\u3044\u3002",permalink:"/ja/docs/faq/i-need-to-change-contractor-or-admin-details-how-do-i-proceed"},next:{title:"\u95b2\u89a7\u5236\u9650\u306e\u512a\u5148\u9806\u4f4d\u306b\u3064\u3044\u3066\u6559\u3048\u3066\u304f\u3060\u3055\u3044",permalink:"/ja/docs/faq/in-what-order-are-viewing-restrictions-applied"}},s={},u=[],l={toc:u},d="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{faqs:[{question:"\u300c\uff12\u91cd\u9001\u4fe1\u306e\u53ef\u80fd\u6027\u304c\u3042\u308b\u306e\u3067\u3001\u66f4\u65b0\u3092\u3057\u307e\u305b\u3093\u3067\u3057\u305f\u3002\u3082\u3046\u4e00\u5ea6\u66f4\u65b0\u51e6\u7406\u3092\u884c\u3063\u3066\u304f\u3060\u3055\u3044\u3002\u300d\u3068\u3044\u3046\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u8868\u793a\u3055\u308c\u3066\u3057\u307e\u3044\u307e\u3059\u3002",answer:"\u30b3\u30f3\u30c6\u30f3\u30c4\u304c\u6b63\u5e38\u306b\u9001\u4fe1\u3067\u304d\u3066\u3044\u306a\u3044\u5834\u5408\u306b\u3053\u3061\u3089\u306e\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"}],mdxType:"StructuredDataFaqs"}),(0,a.kt)("p",null,"\u30b3\u30f3\u30c6\u30f3\u30c4\u304c\u6b63\u5e38\u306b\u9001\u4fe1\u3067\u304d\u3066\u3044\u306a\u3044\u5834\u5408\u306b\u3053\u3061\u3089\u306e\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002\n",(0,a.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/d4fea2749b8992ec3c9406196befe37d.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/d4fea2749b8992ec3c9406196befe37d.png",alt:"Image (fetched from Gyazo)"}),"\n\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f\u3002\n\uff12\u91cd\u9001\u4fe1\u306e\u53ef\u80fd\u6027\u304c\u3042\u308b\u306e\u3067\u3001\u66f4\u65b0\u3092\u3057\u307e\u305b\u3093\u3067\u3057\u305f\u3002\u3082\u3046\u4e00\u5ea6\u66f4\u65b0\u51e6\u7406\u3092\u884c\u3063\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("p",null,"\u7406\u7531\u3068\u3057\u3066\u306f\u3001\u4e0b\u8a18\u304c\u8003\u3048\u3089\u308c\u307e\u3059\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u6295\u7a3f\u3084\u66f4\u65b0\u306e\u969b\u306b\u3001\u66f4\u65b0\u30dc\u30bf\u30f3\u3092\u7d9a\u3051\u30662\u5ea6\u30af\u30ea\u30c3\u30af\u3057\u305f"),(0,a.kt)("li",{parentName:"ul"},"\u4e00\u5ea6\u66f4\u65b0\u3057\u305f\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u30d6\u30e9\u30a6\u30b6\u30d0\u30c3\u30af\u3057\u3066\u66f4\u65b0\u3092\u3057\u305f")),(0,a.kt)("p",null,"\u3053\u3061\u3089\u306e\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u305f\u5834\u5408\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u7de8\u96c6\u5185\u5bb9\u306f\u4fdd\u5b58\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002\u518d\u5ea6\u66f4\u65b0\u4f5c\u696d\u3092\u304a\u9858\u3044\u3057\u307e\u3059\u3002"))}f.isMDXComponent=!0}}]);