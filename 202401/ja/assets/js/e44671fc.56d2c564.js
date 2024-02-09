"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[96184],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=s(r),d=a,m=l["".concat(u,".").concat(d)]||l[d]||f[d]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[l]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},13433:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294);function a(e){let{faqs:t=[]}=e;if(0===(Array.isArray(t)?t.filter((e=>e.question&&e.answer)):[]).length)return null;const r={"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))},a=JSON.stringify(r,null,2);return n.createElement("script",{type:"application/ld+json"},a)}},23741:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=r(87462),a=(r(67294),r(3905)),o=r(13433);const i={title:"API\u306e\u4ed5\u69d8\u306b\u95a2\u3059\u308b\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306f\u3042\u308a\u307e\u3059\u304b\uff1f",description:"Kuroco\u306eAPI\u306b\u95a2\u3057\u3066\u306f\u3001\u591a\u6570\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u3054\u7528\u610f\u304c\u3042\u308a\u307e\u3059\u3002API\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002",category:"other"},c=void 0,u={unversionedId:"faq/do-you-have-any-documentation-on-the-api-specification",id:"faq/do-you-have-any-documentation-on-the-api-specification",title:"API\u306e\u4ed5\u69d8\u306b\u95a2\u3059\u308b\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306f\u3042\u308a\u307e\u3059\u304b\uff1f",description:"Kuroco\u306eAPI\u306b\u95a2\u3057\u3066\u306f\u3001\u591a\u6570\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u3054\u7528\u610f\u304c\u3042\u308a\u307e\u3059\u3002API\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/faq/do-you-have-any-documentation-on-the-api-specification.mdx",sourceDirName:"faq",slug:"/faq/do-you-have-any-documentation-on-the-api-specification",permalink:"/ja/docs/faq/do-you-have-any-documentation-on-the-api-specification",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/do-you-have-any-documentation-on-the-api-specification.mdx",tags:[],version:"current",frontMatter:{title:"API\u306e\u4ed5\u69d8\u306b\u95a2\u3059\u308b\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306f\u3042\u308a\u307e\u3059\u304b\uff1f",description:"Kuroco\u306eAPI\u306b\u95a2\u3057\u3066\u306f\u3001\u591a\u6570\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u3054\u7528\u610f\u304c\u3042\u308a\u307e\u3059\u3002API\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002",category:"other"},sidebar:"faqSidebar",previous:{title:"SSL\u8a3c\u660e\u66f8\u306f\u72ec\u81ea\u306b\u53d6\u5f97\u3059\u308b\u5fc5\u8981\u306f\u3042\u308a\u307e\u3059\u304b",permalink:"/ja/docs/faq/do-i-need-an-ssl-certificate"},next:{title:"KurocoFiles\u3067\u306f\u3001Nuxt Image\u306f\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u304b\uff1f",permalink:"/ja/docs/faq/does-kuroco-files-support-nuxt-image"}},s={},p=[],l={toc:p},f="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(f,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{faqs:[{question:"API\u306e\u4ed5\u69d8\u306b\u95a2\u3059\u308b\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306f\u3042\u308a\u307e\u3059\u304b\uff1f",answer:"Kuroco\u306eAPI\u306b\u95a2\u3057\u3066\u306f\u3001\u591a\u6570\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u3054\u7528\u610f\u304c\u3042\u308a\u307e\u3059\u3002API\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002"}],mdxType:"StructuredDataFaqs"}),(0,a.kt)("p",null,"API\u306b\u95a2\u3057\u3066\u8907\u6570\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u7528\u610f\u3057\u3066\u304a\u308a\u307e\u3059\u3002\u307e\u305a\u306f\u4e0b\u8a18\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ja/docs/tutorials/configure-endpoint/"},"\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306e\u8a2d\u5b9a\u65b9\u6cd5")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ja/docs/reference/endpoint-settings/"},"\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8 \u8a2d\u5b9a\u9805\u76ee\u4e00\u89a7")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ja/docs/management/api-security/"},"API \u30bb\u30ad\u30e5\u30ea\u30c6\u30a3"))),(0,a.kt)("p",null,"\u307e\u305f\u3001\u7ba1\u7406\u753b\u9762\u3067\u306fSwagger UI\u304c\u5229\u7528\u3067\u304d\u307e\u3059\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u7ba1\u7406\u753b\u9762\u306eAPI\u30ea\u30b9\u30c8\u306b\u3066\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u4f5c\u6210\u3059\u308b\u3068\u3001Swagger UI\u3067\u4ed5\u69d8\u306e\u78ba\u8a8d\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002Swagger UI\u306b\u3064\u3044\u3066\u306f\u3001\u4ee5\u4e0b\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ja/docs/management/api-list/#swagger-ui"},"Swagger UI")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ja/docs/tutorials/using-swagger-to-check-the-structure-of-data"},"Swagger UI\u3092\u5229\u7528\u3057\u3066\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u30c7\u30fc\u30bf\u69cb\u9020\u3092\u78ba\u8a8d\u3059\u308b")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ja/docs/tutorials/how-to-use-swagger-ui/"},"Swagger UI\u3092\u5229\u7528\u3057\u3066\u3001API\u306e\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u3092\u78ba\u8a8d\u3059\u308b"))))}d.isMDXComponent=!0}}]);