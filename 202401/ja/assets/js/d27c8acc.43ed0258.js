"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[97487],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(r),f=a,d=s["".concat(l,".").concat(f)]||s[f]||m[f]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},13433:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294);function a(e){let{faqs:t=[]}=e;if(0===(Array.isArray(t)?t.filter((e=>e.question&&e.answer)):[]).length)return null;const r={"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))},a=JSON.stringify(r,null,2);return n.createElement("script",{type:"application/ld+json"},a)}},47495:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905)),o=r(13433);const i={title:"Kuroco\u5229\u7528\u6599\u306e\u7121\u6599\u67a0\u306e\u8a08\u7b97\u65b9\u6cd5\u3092\u6559\u3048\u3066\u304f\u3060\u3055\u3044",description:"Kuroco\u306e\u3054\u5229\u7528\u306b\u306f\u7121\u6599\u67a0\u3092\u8a2d\u3051\u3066\u304a\u308a\u3001\u74b0\u5883\u8a2d\u5b9a\u5185\u306e\u5229\u7528\u72b6\u6cc1\u306b\u3066\u8868\u793a\u3055\u308c\u308b\u3054\u5229\u7528\u6599\uff08\u7dcf\u984d\uff09\u304b\u3089\u3001\u7121\u6599\u67a0\u5206\u3092\u5dee\u3057\u5f15\u3044\u305f\u91d1\u984d\u3092\u3054\u8acb\u6c42\u3055\u305b\u3066\u9802\u3044\u3066\u304a\u308a\u307e\u3059\u3002\u7121\u6599\u67a0\u5206\u306f\u65e5\u6b21\u3067\u8a2d\u5b9a\u3057\u3066\u304a\u308a\u300137\u5186/\u65e5\u3067\u8a08\u7b97\u3057\u3066\u304a\u308a\u307e\u3059\u3002\u3053\u306e\u305f\u3081\u6708\u306b\u3088\u3063\u3066\u7121\u6599\u67a0\u306e\u91d1\u984d\u306f\u5909\u52d5\u81f4\u3057\u307e\u3059\u3002",category:"contracts"},c=void 0,l={unversionedId:"faq/how-do-i-calculate-my-free-limit",id:"faq/how-do-i-calculate-my-free-limit",title:"Kuroco\u5229\u7528\u6599\u306e\u7121\u6599\u67a0\u306e\u8a08\u7b97\u65b9\u6cd5\u3092\u6559\u3048\u3066\u304f\u3060\u3055\u3044",description:"Kuroco\u306e\u3054\u5229\u7528\u306b\u306f\u7121\u6599\u67a0\u3092\u8a2d\u3051\u3066\u304a\u308a\u3001\u74b0\u5883\u8a2d\u5b9a\u5185\u306e\u5229\u7528\u72b6\u6cc1\u306b\u3066\u8868\u793a\u3055\u308c\u308b\u3054\u5229\u7528\u6599\uff08\u7dcf\u984d\uff09\u304b\u3089\u3001\u7121\u6599\u67a0\u5206\u3092\u5dee\u3057\u5f15\u3044\u305f\u91d1\u984d\u3092\u3054\u8acb\u6c42\u3055\u305b\u3066\u9802\u3044\u3066\u304a\u308a\u307e\u3059\u3002\u7121\u6599\u67a0\u5206\u306f\u65e5\u6b21\u3067\u8a2d\u5b9a\u3057\u3066\u304a\u308a\u300137\u5186/\u65e5\u3067\u8a08\u7b97\u3057\u3066\u304a\u308a\u307e\u3059\u3002\u3053\u306e\u305f\u3081\u6708\u306b\u3088\u3063\u3066\u7121\u6599\u67a0\u306e\u91d1\u984d\u306f\u5909\u52d5\u81f4\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/faq/how-do-i-calculate-my-free-limit.mdx",sourceDirName:"faq",slug:"/faq/how-do-i-calculate-my-free-limit",permalink:"/ja/docs/faq/how-do-i-calculate-my-free-limit",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/how-do-i-calculate-my-free-limit.mdx",tags:[],version:"current",frontMatter:{title:"Kuroco\u5229\u7528\u6599\u306e\u7121\u6599\u67a0\u306e\u8a08\u7b97\u65b9\u6cd5\u3092\u6559\u3048\u3066\u304f\u3060\u3055\u3044",description:"Kuroco\u306e\u3054\u5229\u7528\u306b\u306f\u7121\u6599\u67a0\u3092\u8a2d\u3051\u3066\u304a\u308a\u3001\u74b0\u5883\u8a2d\u5b9a\u5185\u306e\u5229\u7528\u72b6\u6cc1\u306b\u3066\u8868\u793a\u3055\u308c\u308b\u3054\u5229\u7528\u6599\uff08\u7dcf\u984d\uff09\u304b\u3089\u3001\u7121\u6599\u67a0\u5206\u3092\u5dee\u3057\u5f15\u3044\u305f\u91d1\u984d\u3092\u3054\u8acb\u6c42\u3055\u305b\u3066\u9802\u3044\u3066\u304a\u308a\u307e\u3059\u3002\u7121\u6599\u67a0\u5206\u306f\u65e5\u6b21\u3067\u8a2d\u5b9a\u3057\u3066\u304a\u308a\u300137\u5186/\u65e5\u3067\u8a08\u7b97\u3057\u3066\u304a\u308a\u307e\u3059\u3002\u3053\u306e\u305f\u3081\u6708\u306b\u3088\u3063\u3066\u7121\u6599\u67a0\u306e\u91d1\u984d\u306f\u5909\u52d5\u81f4\u3057\u307e\u3059\u3002",category:"contracts"},sidebar:"faqSidebar",previous:{title:"\u7ba1\u7406\u753b\u9762\u304b\u3089\u30e1\u30f3\u30d0\u30fc\u767b\u9332\u3057\u305f\u969b\u306b\u30e1\u30fc\u30eb\u3067\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u901a\u77e5\u3067\u304d\u307e\u3059\u304b\uff1f",permalink:"/ja/docs/faq/how-can-i-send-a-registration-email-with-pw-information"},next:{title:"\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3\u306e\u5909\u66f4\u65b9\u6cd5\u3092\u6559\u3048\u3066\u304f\u3060\u3055\u3044\u3002",permalink:"/ja/docs/faq/how-do-i-change-my-domain-name"}},u={},p=[{value:"\u7121\u6599\u67a0\u306b\u3064\u3044\u3066",id:"\u7121\u6599\u67a0\u306b\u3064\u3044\u3066",level:2},{value:"\uff08\u4f8b\uff09\u8a72\u5f53\u6708\u304c31\u65e5\u3067\u3042\u3063\u305f\u5834\u5408",id:"\u4f8b\u8a72\u5f53\u6708\u304c31\u65e5\u3067\u3042\u3063\u305f\u5834\u5408",level:3},{value:"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8",id:"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8",level:2}],s={toc:p},m="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{faqs:[{question:"Kuroco\u5229\u7528\u6599\u306e\u7121\u6599\u67a0\u306e\u8a08\u7b97\u65b9\u6cd5\u3092\u6559\u3048\u3066\u304f\u3060\u3055\u3044",answer:"Kuroco\u306e\u3054\u5229\u7528\u306b\u306f\u7121\u6599\u67a0\u3092\u8a2d\u3051\u3066\u304a\u308a\u3001\u74b0\u5883\u8a2d\u5b9a\u5185\u306e\u5229\u7528\u72b6\u6cc1\u306b\u3066\u8868\u793a\u3055\u308c\u308b\u3054\u5229\u7528\u6599\uff08\u7dcf\u984d\uff09\u304b\u3089\u3001\u7121\u6599\u67a0\u5206\u3092\u5dee\u3057\u5f15\u3044\u305f\u91d1\u984d\u3092\u3054\u8acb\u6c42\u3055\u305b\u3066\u9802\u3044\u3066\u304a\u308a\u307e\u3059\u3002\u7121\u6599\u67a0\u5206\u306f\u65e5\u6b21\u3067\u8a2d\u5b9a\u3057\u3066\u304a\u308a\u300137\u5186/\u65e5\u3067\u8a08\u7b97\u3057\u3066\u304a\u308a\u307e\u3059\u3002\u3053\u306e\u305f\u3081\u6708\u306b\u3088\u3063\u3066\u7121\u6599\u67a0\u306e\u91d1\u984d\u306f\u5909\u52d5\u81f4\u3057\u307e\u3059\u3002"}],mdxType:"StructuredDataFaqs"}),(0,a.kt)("h2",{id:"\u7121\u6599\u67a0\u306b\u3064\u3044\u3066"},"\u7121\u6599\u67a0\u306b\u3064\u3044\u3066"),(0,a.kt)("p",null,"Kuroco\u306e\u3054\u5229\u7528\u306b\u306f\u7121\u6599\u67a0\u3092\u8a2d\u3051\u3066\u304a\u308a\u3001\u74b0\u5883\u8a2d\u5b9a\u5185\u306e\u5229\u7528\u72b6\u6cc1\u306b\u3066\u8868\u793a\u3055\u308c\u308b\u3054\u5229\u7528\u6599\uff08\u7dcf\u984d\uff09\u304b\u3089\u3001\u7121\u6599\u67a0\u5206\u3092\u5dee\u3057\u5f15\u3044\u305f\u91d1\u984d\u3092\u3054\u8acb\u6c42\u3055\u305b\u3066\u9802\u3044\u3066\u304a\u308a\u307e\u3059\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u7121\u6599\u67a0\u5206\u306f\u65e5\u6b21\u3067\u8a2d\u5b9a\u3057\u3066\u304a\u308a\u300137\u5186/\u65e5\u3067\u8a08\u7b97\u3057\u3066\u304a\u308a\u307e\u3059\u3002\u3053\u306e\u305f\u3081\u6708\u306b\u3088\u3063\u3066\u7121\u6599\u67a0\u306e\u91d1\u984d\u306f\u5909\u52d5\u81f4\u3057\u307e\u3059\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u203bKuroco\u7ba1\u7406\u753b\u9762\u306e\u91d1\u984d\u306f\u7a0e\u8fbc\u307f\u8868\u793a\u3068\u306a\u308a\u307e\u3059\u3002"),(0,a.kt)("h3",{id:"\u4f8b\u8a72\u5f53\u6708\u304c31\u65e5\u3067\u3042\u3063\u305f\u5834\u5408"},"\uff08\u4f8b\uff09\u8a72\u5f53\u6708\u304c31\u65e5\u3067\u3042\u3063\u305f\u5834\u5408"),(0,a.kt)("p",null,"\u4f8b\u3048\u3070\u3001\u8a72\u5f53\u306e\u6708\u304c31\u65e5\u307e\u3067\u3042\u308b\u5834\u5408\u306f\u4ee5\u4e0b\u306e\u8a08\u7b97\u65b9\u6cd5\u3068\u306a\u308a\u307e\u3059\u3002  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u3054\u5229\u7528\u6599\uff08\u7dcf\u984d\uff09\uff1a10,000\u5186 - \u7121\u6599\u67a0\u5206\uff1a1,147\u5186\uff0837\u5186\xd731\u65e5\uff09= \u3054\u8acb\u6c42\u91d1\u984d\uff1a8,853\u5186\uff08\u7a0e\u8fbc\uff09")),(0,a.kt)("h2",{id:"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"},"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://hisashihasebe.github.io/document_archive_public/202401/ja/pricing/"},"\u5229\u7528\u6599\u91d1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ja/docs/management/site-payment/"},"\u8acb\u6c42\u60c5\u5831")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ja/docs/faq/how-much-does-kuroco-cost/"},"\u3069\u306e\u3088\u3046\u306a\u3068\u304d\u306b\u5f93\u91cf\u8ab2\u91d1\u3068\u3057\u3066\u8a08\u4e0a\u3055\u308c\u307e\u3059\u304b")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ja/docs/faq/what-is-the-invoice-issue-date/"},"\u8acb\u6c42\u66f8\u306e\u767a\u884c\u65e5\u3092\u6559\u3048\u3066\u304f\u3060\u3055\u3044"))))}f.isMDXComponent=!0}}]);