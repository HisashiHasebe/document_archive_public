"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[61030],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,y=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(y,l(l({ref:t},c),{},{components:r})):n.createElement(y,l({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},13433:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294);function a(e){let{faqs:t=[]}=e;if(0===(Array.isArray(t)?t.filter((e=>e.question&&e.answer)):[]).length)return null;const r={"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))},a=JSON.stringify(r,null,2);return n.createElement("script",{type:"application/ld+json"},a)}},68982:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var n=r(87462),a=(r(67294),r(3905)),i=r(13433);const l={title:"\u8106\u5f31\u6027\u8a3a\u65ad\u3067\u6307\u6458\u3092\u53d7\u3051\u305f\u306e\u3067\u3069\u3046\u3059\u308c\u3070\u3044\u3044\u304b\u6559\u3048\u3066\u304f\u3060\u3055\u3044",description:"\u8106\u5f31\u6027\u304c\u3042\u308b\u3068\u5224\u5b9a\u3055\u308c\u305f\u5834\u5408\u306b\u306f\u3001[\u5f0a\u793e\u30b5\u30dd\u30fc\u30c8]\u307e\u3067\u3054\u9023\u7d61\u3092\u9802\u3051\u308c\u3070\u901f\u3084\u304b\u306b\u8abf\u67fb\u30fb\u5bfe\u5fdc\u3092\u3044\u305f\u3057\u307e\u3059\u3002",category:"security"},o=void 0,u={unversionedId:"faq/my-site-was-diagnosed-with-a-security-vulnerability",id:"faq/my-site-was-diagnosed-with-a-security-vulnerability",title:"\u8106\u5f31\u6027\u8a3a\u65ad\u3067\u6307\u6458\u3092\u53d7\u3051\u305f\u306e\u3067\u3069\u3046\u3059\u308c\u3070\u3044\u3044\u304b\u6559\u3048\u3066\u304f\u3060\u3055\u3044",description:"\u8106\u5f31\u6027\u304c\u3042\u308b\u3068\u5224\u5b9a\u3055\u308c\u305f\u5834\u5408\u306b\u306f\u3001[\u5f0a\u793e\u30b5\u30dd\u30fc\u30c8]\u307e\u3067\u3054\u9023\u7d61\u3092\u9802\u3051\u308c\u3070\u901f\u3084\u304b\u306b\u8abf\u67fb\u30fb\u5bfe\u5fdc\u3092\u3044\u305f\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/faq/my-site-was-diagnosed-with-a-security-vulnerability.mdx",sourceDirName:"faq",slug:"/faq/my-site-was-diagnosed-with-a-security-vulnerability",permalink:"/ja/docs/faq/my-site-was-diagnosed-with-a-security-vulnerability",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/my-site-was-diagnosed-with-a-security-vulnerability.mdx",tags:[],version:"current",frontMatter:{title:"\u8106\u5f31\u6027\u8a3a\u65ad\u3067\u6307\u6458\u3092\u53d7\u3051\u305f\u306e\u3067\u3069\u3046\u3059\u308c\u3070\u3044\u3044\u304b\u6559\u3048\u3066\u304f\u3060\u3055\u3044",description:"\u8106\u5f31\u6027\u304c\u3042\u308b\u3068\u5224\u5b9a\u3055\u308c\u305f\u5834\u5408\u306b\u306f\u3001[\u5f0a\u793e\u30b5\u30dd\u30fc\u30c8]\u307e\u3067\u3054\u9023\u7d61\u3092\u9802\u3051\u308c\u3070\u901f\u3084\u304b\u306b\u8abf\u67fb\u30fb\u5bfe\u5fdc\u3092\u3044\u305f\u3057\u307e\u3059\u3002",category:"security"},sidebar:"faqSidebar",previous:{title:"CSV\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u305f\u591a\u8a00\u8a9e\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u304c\u6587\u5b57\u5316\u3051\u3057\u307e\u3059",permalink:"/ja/docs/faq/multilanguage-content-in-downloaded-csv-file-is-garbled"},next:{title:"\u793e\u5185\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u30c9\u30e1\u30a4\u30f3\u306e\u8a31\u53ef\u304c\u5fc5\u8981\u3067\u3059\u3002\u3069\u306e\u30c9\u30e1\u30a4\u30f3\u304c\u5229\u7528\u3055\u308c\u3066\u3044\u307e\u3059\u304b\uff1f",permalink:"/ja/docs/faq/permission-required-for-accessing-internal-network-which-domain-is-in-use"}},s={},c=[{value:"\u5bfe\u5fdc\u4e0d\u8981\u306a\u4e8b\u9805\u306b\u3064\u3044\u3066",id:"\u5bfe\u5fdc\u4e0d\u8981\u306a\u4e8b\u9805\u306b\u3064\u3044\u3066",level:2},{value:"\u5bfe\u5fdc\u3059\u308b\u4e88\u5b9a\u306e\u306a\u3044\u6307\u6458\u4e8b\u9805",id:"\u5bfe\u5fdc\u3059\u308b\u4e88\u5b9a\u306e\u306a\u3044\u6307\u6458\u4e8b\u9805",level:3},{value:"CMS\u3068\u3044\u3046\u4ed5\u7d44\u307f\u306e\u7279\u6027\u4e0a\u5bfe\u5fdc\u304c\u96e3\u3057\u3044\u6307\u6458\u4e8b\u9805",id:"cms\u3068\u3044\u3046\u4ed5\u7d44\u307f\u306e\u7279\u6027\u4e0a\u5bfe\u5fdc\u304c\u96e3\u3057\u3044\u6307\u6458\u4e8b\u9805",level:3},{value:"\u5229\u4fbf\u6027\u3084\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u306e\u8003\u3048\u65b9\u3068\u306e\u517c\u306d\u5408\u3044\u3067\u5bfe\u5fdc\u3092\u3057\u3066\u3044\u306a\u3044\u6307\u6458\u4e8b\u9805",id:"\u5229\u4fbf\u6027\u3084\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u306e\u8003\u3048\u65b9\u3068\u306e\u517c\u306d\u5408\u3044\u3067\u5bfe\u5fdc\u3092\u3057\u3066\u3044\u306a\u3044\u6307\u6458\u4e8b\u9805",level:3},{value:"\u5bfe\u5fdc\u4e88\u5b9a\u306e\u306a\u3044\u3082\u306e",id:"\u5bfe\u5fdc\u4e88\u5b9a\u306e\u306a\u3044\u3082\u306e",level:3},{value:"Kuroco\u3067\u5bfe\u5fdc\u5bfe\u8c61\u5916\u306e\u3082\u306e",id:"kuroco\u3067\u5bfe\u5fdc\u5bfe\u8c61\u5916\u306e\u3082\u306e",level:3},{value:"\u95a2\u9023\u3059\u308b\u30da\u30fc\u30b8",id:"\u95a2\u9023\u3059\u308b\u30da\u30fc\u30b8",level:2}],p={toc:c},d="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{faqs:[{question:"\u8106\u5f31\u6027\u8a3a\u65ad\u3067\u6307\u6458\u3092\u53d7\u3051\u305f\u306e\u3067\u3069\u3046\u3059\u308c\u3070\u3044\u3044\u304b\u6559\u3048\u3066\u304f\u3060\u3055\u3044",answer:"\u8106\u5f31\u6027\u304c\u3042\u308b\u3068\u5224\u5b9a\u3055\u308c\u305f\u5834\u5408\u306b\u306f\u3001[\u5f0a\u793e\u30b5\u30dd\u30fc\u30c8]\u307e\u3067\u3054\u9023\u7d61\u3092\u9802\u3051\u308c\u3070\u901f\u3084\u304b\u306b\u8abf\u67fb\u30fb\u5bfe\u5fdc\u3092\u3044\u305f\u3057\u307e\u3059\u3002"}],mdxType:"StructuredDataFaqs"}),(0,a.kt)("p",null,"\u8106\u5f31\u6027\u304c\u3042\u308b\u3068\u5224\u5b9a\u3055\u308c\u305f\u5834\u5408\u306b\u306f\u3001",(0,a.kt)("a",{parentName:"p",href:"https://kuroco.zendesk.com/"},"\u5f0a\u793e\u30b5\u30dd\u30fc\u30c8"),"\u307e\u3067\u3054\u9023\u7d61\u3092\u9802\u3051\u308c\u3070\u901f\u3084\u304b\u306b\u8abf\u67fb\u30fb\u5bfe\u5fdc\u3092\u3044\u305f\u3057\u307e\u3059\u3002  "),(0,a.kt)("p",null,"\u305f\u3060\u3057\u3001\u6307\u6458\u4e8b\u9805\u306b\u3088\u3063\u3066\u306f\u5bfe\u5fdc\u306e\u5fc5\u8981\u304c\u306a\u3044\u3068\u306e\u5224\u65ad\u306b\u306a\u308b\u3082\u306e\u3082\u3042\u308a\u307e\u3059\u306e\u3067\u3054\u4e86\u627f\u304f\u3060\u3055\u3044\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u307e\u305f\u3001\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u306a\u3069\u3067\u306e\u81ea\u52d5\u8a3a\u65ad\u306f\u8aa4\u8a3a\u65ad\u304c\u767a\u751f\u3057\u3084\u3059\u3044\u3082\u306e\u3082\u3042\u308a\u307e\u3059\u306e\u3067\u3001\u8a3a\u65ad\u7d50\u679c\u3092\u518d\u78ba\u8a8d\u3057\u3066\u3044\u305f\u3060\u3044\u3066\u304b\u3089\u306e\u3054\u9023\u7d61\u3092\u304a\u9858\u3044\u3044\u305f\u3057\u307e\u3059\u3002  "),(0,a.kt)("h2",{id:"\u5bfe\u5fdc\u4e0d\u8981\u306a\u4e8b\u9805\u306b\u3064\u3044\u3066"},"\u5bfe\u5fdc\u4e0d\u8981\u306a\u4e8b\u9805\u306b\u3064\u3044\u3066"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u9805\u76ee\u306f\u5bfe\u5fdc\u4e0d\u8981\u3068\u306a\u308a\u307e\u3059\u3002 "),(0,a.kt)("h3",{id:"\u5bfe\u5fdc\u3059\u308b\u4e88\u5b9a\u306e\u306a\u3044\u6307\u6458\u4e8b\u9805"},"\u5bfe\u5fdc\u3059\u308b\u4e88\u5b9a\u306e\u306a\u3044\u6307\u6458\u4e8b\u9805"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"HTTP\u30ec\u30b9\u30dd\u30f3\u30b9\u30b9\u30c6\u30fc\u30bf\u30b9\u304c300\u756a\u53f0\u7b49\u3067\u3001X-Content-Type-Options\u7b49\u306e\u30d8\u30c3\u30c0\u304c\u4ed8\u4e0e\u3055\u308c\u3066\u3044\u306a\u3044\u3002")),(0,a.kt)("h3",{id:"cms\u3068\u3044\u3046\u4ed5\u7d44\u307f\u306e\u7279\u6027\u4e0a\u5bfe\u5fdc\u304c\u96e3\u3057\u3044\u6307\u6458\u4e8b\u9805"},"CMS\u3068\u3044\u3046\u4ed5\u7d44\u307f\u306e\u7279\u6027\u4e0a\u5bfe\u5fdc\u304c\u96e3\u3057\u3044\u6307\u6458\u4e8b\u9805"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7ba1\u7406\u753b\u9762\u3067\u3001X-XSS-Protection\u304c\u4ed8\u4e0e\u3055\u308c\u3066\u3044\u306a\u3044\u3002\u7406\u7531\u3068\u3057\u3066\u306f\u3001\u66f4\u65b0\u753b\u9762\u3067\u66f4\u65b0\u306a\u3069\u306e\u6319\u52d5\u3092\u30a8\u30e9\u30fc\u5224\u5b9a\u3055\u308c\u308b\u3053\u3068\u304c\u591a\u3044\u305f\u3081\u306b\u306a\u308a\u307e\u3059\u3002")),(0,a.kt)("h3",{id:"\u5229\u4fbf\u6027\u3084\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u306e\u8003\u3048\u65b9\u3068\u306e\u517c\u306d\u5408\u3044\u3067\u5bfe\u5fdc\u3092\u3057\u3066\u3044\u306a\u3044\u6307\u6458\u4e8b\u9805"},"\u5229\u4fbf\u6027\u3084\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u306e\u8003\u3048\u65b9\u3068\u306e\u517c\u306d\u5408\u3044\u3067\u5bfe\u5fdc\u3092\u3057\u3066\u3044\u306a\u3044\u6307\u6458\u4e8b\u9805"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u30d1\u30b9\u30ef\u30fc\u30c9\u30ea\u30de\u30a4\u30f3\u30c0\u30fc\u3067\u306e\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u306e\u5b58\u5728\u306e\u3042\u308a\u30fb\u306a\u3057\u8868\u793a\uff08\u56de\u6570\u5236\u9650\u306f\u5b9f\u88c5\uff09 "),(0,a.kt)("li",{parentName:"ul"},"\u4f1a\u54e1\u767b\u9332\u6642\u3067\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u306e\u5b58\u5728\u306e\u3042\u308a\u30fb\u306a\u3057\u8868\u793a\uff08\u56de\u6570\u5236\u9650\u306f\u5b9f\u88c5\u30fb\u30e1\u30fc\u30eb\u306e\u307f\u3092\u5165\u529b\u3057\u3066\u8fd4\u4fe1\u30e1\u30fc\u30eb\u304b\u3089\u4f1a\u54e1\u767b\u9332\u3059\u308b\u6a5f\u80fd\u306a\u3069\u3092\u5229\u7528\u3057\u3066\u56de\u907f\u53ef\u80fd\uff09  "),(0,a.kt)("li",{parentName:"ul"},"\u30d1\u30b9\u30ef\u30fc\u30c9\u306e\u5b9a\u671f\u7684\u5909\u66f4\u306e\u5f37\u5236\uff08\u7ba1\u7406\u753b\u9762\u3067\u8a2d\u5b9a\u306f\u53ef\u80fd\uff09"),(0,a.kt)("li",{parentName:"ul"},"Cookie\u306eSameSite\u5c5e\u6027\u304cStrict\u3067\u306f\u306a\u3044\u3002\u7ba1\u7406\u753b\u9762\u306eCookie\u306fStrict\u306b\u306a\u3063\u3066\u3044\u308b\u304c\u3001API\u306e\u5834\u5408\u306fNone\u306b\u306a\u308a\u307e\u3059\u3002")),(0,a.kt)("h3",{id:"\u5bfe\u5fdc\u4e88\u5b9a\u306e\u306a\u3044\u3082\u306e"},"\u5bfe\u5fdc\u4e88\u5b9a\u306e\u306a\u3044\u3082\u306e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6307\u6458\u4e8b\u9805\u5185\u3067INFO(\u60c5\u5831)\u306a\u3069\u306e\u3088\u3046\u306b\u8106\u5f31\u6027\u3067\u306f\u306a\u3044\u6307\u6458\u4e8b\u9805\u306e\u3082\u306e\u3002\u305f\u3060\u3057\u3001\u3054\u63d0\u793a\u3044\u305f\u3060\u3044\u3066\u5bfe\u5fdc\u3092\u3059\u308b\u5834\u5408\u3082\u3042\u308a\u307e\u3059\u3002")),(0,a.kt)("h3",{id:"kuroco\u3067\u5bfe\u5fdc\u5bfe\u8c61\u5916\u306e\u3082\u306e"},"Kuroco\u3067\u5bfe\u5fdc\u5bfe\u8c61\u5916\u306e\u3082\u306e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u5b9f\u88c5\u3084API\u30fb\u7ba1\u7406\u753b\u9762\u3067\u306e\u8a2d\u5b9a\u6f0f\u308c\u306a\u3069\u306b\u3088\u308b\u8106\u5f31\u6027\u3002\u6307\u6458\u4e8b\u9805\u306e\u89e3\u6c7a\u7b56\u306f\u30b5\u30dd\u30fc\u30c8\u306b\u9023\u7d61\u3044\u305f\u3060\u3051\u308c\u3070\u89e3\u6c7a\u306b\u5411\u3051\u3066\u306e\u30b5\u30dd\u30fc\u30c8\u306f\u3044\u305f\u3057\u307e\u3059\u3002")),(0,a.kt)("h2",{id:"\u95a2\u9023\u3059\u308b\u30da\u30fc\u30b8"},"\u95a2\u9023\u3059\u308b\u30da\u30fc\u30b8"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ja/docs/about/security/"},"\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ja/docs/faq/can-you-send-me-your-vulnerability-assessment-findings/"},"\u8106\u5f31\u6027\u691c\u67fb\u306e\u30a8\u30d3\u30c7\u30f3\u30b9\u3092\u63d0\u4f9b\u3057\u3066\u3082\u3089\u3046\u3053\u3068\u306f\u3067\u304d\u307e\u3059\u304b\uff1f"))))}m.isMDXComponent=!0}}]);