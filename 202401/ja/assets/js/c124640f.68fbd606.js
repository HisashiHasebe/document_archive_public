"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[39918],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=l(r),f=o,d=s["".concat(i,".").concat(f)]||s[f]||m[f]||a;return r?n.createElement(d,c(c({ref:t},p),{},{components:r})):n.createElement(d,c({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[s]="string"==typeof e?e:o,c[1]=u;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},13433:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294);function o(e){let{faqs:t=[]}=e;if(0===(Array.isArray(t)?t.filter((e=>e.question&&e.answer)):[]).length)return null;const r={"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))},o=JSON.stringify(r,null,2);return n.createElement("script",{type:"application/ld+json"},o)}},82775:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var n=r(87462),o=(r(67294),r(3905)),a=r(13433);const c={title:"\u3069\u306e\u3088\u3046\u306a\u3068\u304d\u306b\u5f93\u91cf\u8ab2\u91d1\u3068\u3057\u3066\u8a08\u4e0a\u3055\u308c\u307e\u3059\u304b",description:"Kuroco\u306f\u5f93\u91cf\u8ab2\u91d1\u30e2\u30c7\u30eb\u3068\u306a\u308a\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u3001\u6bce\u6708\u3054\u5229\u7528\u5206\u306e\u307f\u304a\u652f\u6255\u3044\u3044\u305f\u3060\u304f\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002\u6599\u91d1\u4f53\u7cfb\u306f\u4e0b\u8a18\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002",category:"contracts"},u=void 0,i={unversionedId:"faq/how-much-does-kuroco-cost",id:"faq/how-much-does-kuroco-cost",title:"\u3069\u306e\u3088\u3046\u306a\u3068\u304d\u306b\u5f93\u91cf\u8ab2\u91d1\u3068\u3057\u3066\u8a08\u4e0a\u3055\u308c\u307e\u3059\u304b",description:"Kuroco\u306f\u5f93\u91cf\u8ab2\u91d1\u30e2\u30c7\u30eb\u3068\u306a\u308a\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u3001\u6bce\u6708\u3054\u5229\u7528\u5206\u306e\u307f\u304a\u652f\u6255\u3044\u3044\u305f\u3060\u304f\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002\u6599\u91d1\u4f53\u7cfb\u306f\u4e0b\u8a18\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/faq/how-much-does-kuroco-cost.mdx",sourceDirName:"faq",slug:"/faq/how-much-does-kuroco-cost",permalink:"/ja/docs/faq/how-much-does-kuroco-cost",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/how-much-does-kuroco-cost.mdx",tags:[],version:"current",frontMatter:{title:"\u3069\u306e\u3088\u3046\u306a\u3068\u304d\u306b\u5f93\u91cf\u8ab2\u91d1\u3068\u3057\u3066\u8a08\u4e0a\u3055\u308c\u307e\u3059\u304b",description:"Kuroco\u306f\u5f93\u91cf\u8ab2\u91d1\u30e2\u30c7\u30eb\u3068\u306a\u308a\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u3001\u6bce\u6708\u3054\u5229\u7528\u5206\u306e\u307f\u304a\u652f\u6255\u3044\u3044\u305f\u3060\u304f\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002\u6599\u91d1\u4f53\u7cfb\u306f\u4e0b\u8a18\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002",category:"contracts"},sidebar:"faqSidebar",previous:{title:"ltd\u30d5\u30a9\u30eb\u30c0\u306e\u30d5\u30a1\u30a4\u30eb\u306b\u3064\u304ft=\u30fb\u30fb\u30fb\u306eURL\u306e\u6709\u52b9\u671f\u9650\u306f\u3044\u304f\u3064\u3067\u3059\u304b\uff1f",permalink:"/ja/docs/faq/how-long-is-the-t-url-in-the-ltd-folder-valid"},next:{title:"Iframely\u81ea\u52d5\u5909\u63db\u3092\u5229\u7528\u3059\u308b\u306b\u306f\uff1f",permalink:"/ja/docs/faq/how-to-auto-convert-iframes"}},l={},p=[{value:"\u30b3\u30f3\u30d4\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0\u306e\u6599\u91d1\u8a08\u4e0a\u4f8b",id:"\u30b3\u30f3\u30d4\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0\u306e\u6599\u91d1\u8a08\u4e0a\u4f8b",level:2},{value:"\u7121\u6599\u67a0\u306b\u3064\u3044\u3066",id:"\u7121\u6599\u67a0\u306b\u3064\u3044\u3066",level:2},{value:"\u6599\u91d1\u306e\u78ba\u8a8d\u65b9\u6cd5",id:"\u6599\u91d1\u306e\u78ba\u8a8d\u65b9\u6cd5",level:2}],s={toc:p},m="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,{faqs:[{question:"\u3069\u306e\u3088\u3046\u306a\u3068\u304d\u306b\u5f93\u91cf\u8ab2\u91d1\u3068\u3057\u3066\u8a08\u4e0a\u3055\u308c\u307e\u3059\u304b",answer:"Kuroco\u306f\u5f93\u91cf\u8ab2\u91d1\u30e2\u30c7\u30eb\u3068\u306a\u308a\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u3001\u6bce\u6708\u3054\u5229\u7528\u5206\u306e\u307f\u304a\u652f\u6255\u3044\u3044\u305f\u3060\u304f\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002\u6599\u91d1\u4f53\u7cfb\u306f\u4e0b\u8a18\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"}],mdxType:"StructuredDataFaqs"}),(0,o.kt)("p",null,"Kuroco\u306f\u5f93\u91cf\u8ab2\u91d1\u30e2\u30c7\u30eb\u3068\u306a\u308a\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u3001\u6bce\u6708\u3054\u5229\u7528\u5206\u306e\u307f\u304a\u652f\u6255\u3044\u3044\u305f\u3060\u304f\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u6599\u91d1\u4f53\u7cfb\u306f\u4e0b\u8a18\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/6fa4e8983fdf655038c4fb88e0bb9a16.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/6fa4e8983fdf655038c4fb88e0bb9a16.png",alt:"Image (fetched from Gyazo)"}),"\n\u53c2\u8003: ",(0,o.kt)("a",{parentName:"p",href:"https://hisashihasebe.github.io/document_archive_public/202401/files/sheets/ja/kuroco_salessheet.pdf"},"Kuroco\u8aac\u660e\u8cc7\u6599 P.18")),(0,o.kt)("h2",{id:"\u30b3\u30f3\u30d4\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0\u306e\u6599\u91d1\u8a08\u4e0a\u4f8b"},"\u30b3\u30f3\u30d4\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0\u306e\u6599\u91d1\u8a08\u4e0a\u4f8b"),(0,o.kt)("p",null,"\u300c\u30b3\u30f3\u30d4\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0\u300d\u306b\u300c0.0132\u5186/100\u30df\u30ea\u79d2\u300d\u3068\u3042\u308a\u307e\u3059\u304c\u3001\u30d0\u30c3\u30c1\u51e6\u7406\u3084API\u3067300ms\u3092\u8d85\u3048\u308b\u3088\u3046\u306a\u30ec\u30b9\u30dd\u30f3\u30b9\u304c\u3042\u3063\u305f\u5834\u5408\u306b\u8a08\u4e0a\u3055\u308c\u307e\u3059\u3002  "),(0,o.kt)("p",null,"\u4f8b\u3048\u3070\u3001Kuroco\u306fSmarty\u3092\u5229\u7528\u3067\u304d\u308b\u306e\u3067\u3001\u3054\u81ea\u8eab\u3067\u3042\u308b\u7a0b\u5ea6\u81ea\u7531\u306b\u51e6\u7406\u3092\u4f5c\u308b\u3053\u3068\u304c\u51fa\u6765\u307e\u3059\u3002\n\u305d\u306e\u305f\u3081\u3001\u4e0b\u8a18\u306e\u3088\u3046\u306a\u51e6\u7406\u3092\u4f5c\u6210\u30fb\u5229\u7528\u3059\u308b\u3068\u6599\u91d1\u8a08\u4e0a\u3055\u308c\u308b\u53ef\u80fd\u6027\u304c\u3054\u3056\u3044\u307e\u3059\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ZIP\u30d5\u30a1\u30a4\u30eb\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u3066\u3001ZIP\u306e\u89e3\u51cd\u3092\u3059\u308b\u51e6\u7406"),(0,o.kt)("li",{parentName:"ul"},"\u5916\u90e8API\u3092\u5b9a\u671f\u7684\u306b\u53e9\u3044\u3066\u4f55\u3089\u304b\u306e\u51e6\u7406\u3092\u3059\u308b"),(0,o.kt)("li",{parentName:"ul"},"\u5927\u91cf\u306e\u914d\u4fe1\u3092\u3059\u308b"),(0,o.kt)("li",{parentName:"ul"},"API\u306b\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u3092\u5165\u308c\u3066\u8907\u96d1\u306a\u51e6\u7406\u3092\u3057\u3066\u3001300ms\u3092\u8d85\u3048\u308b\u30ec\u30b9\u30dd\u30f3\u30b9\u306eAPI\u3092\u4f5c\u6210\u3059\u308b")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u30d0\u30c3\u30c1\u51e6\u7406\u306b\u3064\u3044\u3066\u306e\u8a73\u7d30\u306f\u4e0b\u8a18\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"/ja/docs/tutorials/how-to-use-batch/"},"\u30d0\u30c3\u30c1\u51e6\u7406"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"/ja/docs/reference/pre-processing/"},"Pre-processing"))),(0,o.kt)("h2",{id:"\u7121\u6599\u67a0\u306b\u3064\u3044\u3066"},"\u7121\u6599\u67a0\u306b\u3064\u3044\u3066"),(0,o.kt)("p",null,"Kuroco\u306f\u3001\u6bce\u67081100\u5186(\u7a0e\u8fbc)\u307e\u3067\u306f\u7121\u6599\u3067\u3054\u5229\u7528\u306b\u306a\u308c\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u7ba1\u7406\u753b\u9762\u3092\u898b\u3066\u307f\u305f\u3044\u3001\u8a66\u3057\u306bAPI\u3092\u4f5c\u6210\u3057\u3066\u307f\u305f\u3044\u3001\u3068\u3044\u3046\u30ec\u30d9\u30eb\u3067\u3042\u308c\u3070\u7121\u6599\u67a0\u3092\u8d85\u3048\u308b\u3053\u3068\u306f\u3054\u3056\u3044\u307e\u305b\u3093\u3002\u307e\u305f\u3001\u6700\u521d\u306f\u30af\u30ec\u30b8\u30c3\u30c8\u30ab\u30fc\u30c9\u767b\u9332\u306e\u5fc5\u8981\u304c\u306a\u3044\u306e\u3067\u3001\u3054\u5b89\u5fc3\u3057\u3066\u4e00\u5ea6\u304a\u8a66\u3057\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://hisashihasebe.github.io/document_archive_public/202401/ja/free_trial/"},"Kuroco \u3092\u8a66\u3057\u3066\u307f\u308b"))),(0,o.kt)("h2",{id:"\u6599\u91d1\u306e\u78ba\u8a8d\u65b9\u6cd5"},"\u6599\u91d1\u306e\u78ba\u8a8d\u65b9\u6cd5"),(0,o.kt)("p",null,"\u8a73\u7d30\u306a\u5229\u7528\u6599\u91d1\u306f\u3001","[\u74b0\u5883\u8a2d\u5b9a]"," -> ","[\u5229\u7528\u72b6\u6cc1]","\u3088\u308a\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u8a73\u3057\u304f\u306f\u3001\u7ba1\u7406\u753b\u9762\u30de\u30cb\u30e5\u30a2\u30eb -> ",(0,o.kt)("a",{parentName:"p",href:"/ja/docs/management/usage/"},"\u5229\u7528\u72b6\u6cc1"),"\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002"))}f.isMDXComponent=!0}}]);