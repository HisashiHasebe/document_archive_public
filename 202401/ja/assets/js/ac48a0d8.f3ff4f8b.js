"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[31894],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),u=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,d=p["".concat(l,".").concat(m)]||p[m]||f[m]||a;return r?o.createElement(d,i(i({ref:t},s),{},{components:r})):o.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:n,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},13433:(e,t,r)=>{r.d(t,{Z:()=>n});var o=r(67294);function n(e){let{faqs:t=[]}=e;if(0===(Array.isArray(t)?t.filter((e=>e.question&&e.answer)):[]).length)return null;const r={"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))},n=JSON.stringify(r,null,2);return o.createElement("script",{type:"application/ld+json"},n)}},98188:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=r(87462),n=(r(67294),r(3905)),a=r(13433);const i={title:"\u30b5\u30a4\u30c8\u5185\u3067\u5229\u7528\u3057\u3066\u3044\u308b\u9759\u7684\u30d5\u30a1\u30a4\u30eb\uff08\u753b\u50cf\u3001JS\u3001CSS\u306a\u3069\uff09\u306f\u3069\u3053\u306b\u914d\u7f6e\u3059\u308b\u306e\u304c\u826f\u3044\u3067\u3057\u3087\u3046\u304b\uff1f",description:"Kuroco\u3067\u30b5\u30a4\u30c8\u904b\u7528\u3092\u3059\u308b\u5834\u5408\u3001\u9759\u7684\u30d5\u30a1\u30a4\u30eb\u306e\u914d\u7f6e\u5834\u6240\u3068\u3057\u3066KurocoFront\u3068KurocoFiles\u306e2\u3064\u304c\u5b58\u5728\u3057\u307e\u3059\u3002\u305d\u308c\u305e\u308c\u306e\u5229\u7528\u7528\u9014\u3001\u30e1\u30ea\u30c3\u30c8\u30c7\u30e1\u30ea\u30c3\u30c8\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002",category:"system"},c=void 0,l={unversionedId:"faq/how-to-place-static-files",id:"faq/how-to-place-static-files",title:"\u30b5\u30a4\u30c8\u5185\u3067\u5229\u7528\u3057\u3066\u3044\u308b\u9759\u7684\u30d5\u30a1\u30a4\u30eb\uff08\u753b\u50cf\u3001JS\u3001CSS\u306a\u3069\uff09\u306f\u3069\u3053\u306b\u914d\u7f6e\u3059\u308b\u306e\u304c\u826f\u3044\u3067\u3057\u3087\u3046\u304b\uff1f",description:"Kuroco\u3067\u30b5\u30a4\u30c8\u904b\u7528\u3092\u3059\u308b\u5834\u5408\u3001\u9759\u7684\u30d5\u30a1\u30a4\u30eb\u306e\u914d\u7f6e\u5834\u6240\u3068\u3057\u3066KurocoFront\u3068KurocoFiles\u306e2\u3064\u304c\u5b58\u5728\u3057\u307e\u3059\u3002\u305d\u308c\u305e\u308c\u306e\u5229\u7528\u7528\u9014\u3001\u30e1\u30ea\u30c3\u30c8\u30c7\u30e1\u30ea\u30c3\u30c8\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/faq/how-to-place-static-files.mdx",sourceDirName:"faq",slug:"/faq/how-to-place-static-files",permalink:"/ja/docs/faq/how-to-place-static-files",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/how-to-place-static-files.mdx",tags:[],version:"current",frontMatter:{title:"\u30b5\u30a4\u30c8\u5185\u3067\u5229\u7528\u3057\u3066\u3044\u308b\u9759\u7684\u30d5\u30a1\u30a4\u30eb\uff08\u753b\u50cf\u3001JS\u3001CSS\u306a\u3069\uff09\u306f\u3069\u3053\u306b\u914d\u7f6e\u3059\u308b\u306e\u304c\u826f\u3044\u3067\u3057\u3087\u3046\u304b\uff1f",description:"Kuroco\u3067\u30b5\u30a4\u30c8\u904b\u7528\u3092\u3059\u308b\u5834\u5408\u3001\u9759\u7684\u30d5\u30a1\u30a4\u30eb\u306e\u914d\u7f6e\u5834\u6240\u3068\u3057\u3066KurocoFront\u3068KurocoFiles\u306e2\u3064\u304c\u5b58\u5728\u3057\u307e\u3059\u3002\u305d\u308c\u305e\u308c\u306e\u5229\u7528\u7528\u9014\u3001\u30e1\u30ea\u30c3\u30c8\u30c7\u30e1\u30ea\u30c3\u30c8\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002",category:"system"},sidebar:"faqSidebar",previous:{title:"\u30d5\u30a9\u30fc\u30e0\u306e\u56de\u7b54\u30921\u30e6\u30fc\u30b6\u30fc1\u56de\u307e\u3067\u306b\u3067\u304d\u307e\u3059\u304b\uff1f",permalink:"/ja/docs/faq/how-to-limit-form-responses-to-once-per-user"},next:{title:"GitHub Actions\u306e\u30d3\u30eb\u30c9&\u30c7\u30d7\u30ed\u30a4\u306b\u6642\u9593\u304c\u304b\u304b\u3063\u3066\u3057\u307e\u3044\u307e\u3059\u3002\u89e3\u6c7a\u65b9\u6cd5\u306f\u3042\u308a\u307e\u3059\u304b\uff1f",permalink:"/ja/docs/faq/how-to-reduce-artifact-file-sizes"}},u={},s=[{value:"\u30bd\u30fc\u30b9\u30d5\u30a1\u30a4\u30eb\u5185\u306b\u914d\u7f6e\u3092\u304a\u3059\u3059\u3081\u3059\u308b\u5834\u5408",id:"\u30bd\u30fc\u30b9\u30d5\u30a1\u30a4\u30eb\u5185\u306b\u914d\u7f6e\u3092\u304a\u3059\u3059\u3081\u3059\u308b\u5834\u5408",level:2},{value:"KurocoFiles\u3092\u304a\u3059\u3059\u3081\u3059\u308b\u5834\u5408",id:"kurocofiles\u3092\u304a\u3059\u3059\u3081\u3059\u308b\u5834\u5408",level:2},{value:"KurocoFiles\u5229\u7528\u306e\u30e1\u30ea\u30c3\u30c8",id:"kurocofiles\u5229\u7528\u306e\u30e1\u30ea\u30c3\u30c8",level:3},{value:"KurocoFiles\u5229\u7528\u306e\u30c7\u30e1\u30ea\u30c3\u30c8",id:"kurocofiles\u5229\u7528\u306e\u30c7\u30e1\u30ea\u30c3\u30c8",level:3}],p={toc:s},f="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(f,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(a.Z,{faqs:[{question:"\u30b5\u30a4\u30c8\u5185\u3067\u5229\u7528\u3057\u3066\u3044\u308b\u9759\u7684\u30d5\u30a1\u30a4\u30eb\uff08\u753b\u50cf\u3001JS\u3001CSS\u306a\u3069\uff09\u306f\u3069\u3053\u306b\u914d\u7f6e\u3059\u308b\u306e\u304c\u826f\u3044\u3067\u3057\u3087\u3046\u304b\uff1f",answer:"Kuroco\u3067\u30b5\u30a4\u30c8\u904b\u7528\u3092\u3059\u308b\u5834\u5408\u3001\u9759\u7684\u30d5\u30a1\u30a4\u30eb\u306e\u914d\u7f6e\u5834\u6240\u3068\u3057\u3066KurocoFront\u3068KurocoFiles\u306e2\u3064\u304c\u5b58\u5728\u3057\u307e\u3059\u3002\u305d\u308c\u305e\u308c\u306e\u5229\u7528\u7528\u9014\u3001\u30e1\u30ea\u30c3\u30c8\u30c7\u30e1\u30ea\u30c3\u30c8\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"}],mdxType:"StructuredDataFaqs"}),(0,n.kt)("p",null,"Kuroco\u3067\u30b5\u30a4\u30c8\u904b\u7528\u3092\u3059\u308b\u5834\u5408\u3001\u9759\u7684\u30d5\u30a1\u30a4\u30eb\u306e\u914d\u7f6e\u5834\u6240\u3068\u3057\u3066\u4e0b\u8a182\u3064\u304c\u5b58\u5728\u3057\u307e\u3059\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u30bd\u30fc\u30b9\u30d5\u30a1\u30a4\u30eb\u5185\u306b\u914d\u7f6e\u3059\u308b(\u4f8b\uff1aNuxt.js\u306e\u5834\u5408\u306fstatic\u30c7\u30a3\u30ec\u30af\u30c8\u30ea)"),(0,n.kt)("li",{parentName:"ul"},"KurocoFiles\u306b\u914d\u7f6e\u3059\u308b")),(0,n.kt)("p",null,"\u305d\u308c\u305e\u308c\u306e\u304a\u3059\u3059\u3081\u306e\u5229\u7528\u7528\u9014\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,n.kt)("h2",{id:"\u30bd\u30fc\u30b9\u30d5\u30a1\u30a4\u30eb\u5185\u306b\u914d\u7f6e\u3092\u304a\u3059\u3059\u3081\u3059\u308b\u5834\u5408"},"\u30bd\u30fc\u30b9\u30d5\u30a1\u30a4\u30eb\u5185\u306b\u914d\u7f6e\u3092\u304a\u3059\u3059\u3081\u3059\u308b\u5834\u5408"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u30b5\u30a4\u30c8\u306e\u30c7\u30b6\u30a4\u30f3\u306b\u5229\u7528\u3057\u3066\u3044\u308b\u30d5\u30a1\u30a4\u30eb\uff08\u753b\u50cf\u3001CSS\u3001JS\u306a\u3069\uff09")),(0,n.kt)("h2",{id:"kurocofiles\u3092\u304a\u3059\u3059\u3081\u3059\u308b\u5834\u5408"},"KurocoFiles\u3092\u304a\u3059\u3059\u3081\u3059\u308b\u5834\u5408"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u904b\u7528\u3067\u5229\u7528\u3059\u308b\u3088\u3046\u306a\u66f4\u65b0\u983b\u5ea6\u306e\u9ad8\u3044\u30d5\u30a1\u30a4\u30eb"),(0,n.kt)("li",{parentName:"ul"},"\u30d5\u30a1\u30a4\u30eb\u30b5\u30a4\u30ba\u304c\u5927\u304d\u3044\u5834\u5408(\u4f8b\uff1a\u753b\u50cf\u3060\u3051\u306730MB\u3092\u8d85\u3048\u308b)")),(0,n.kt)("h3",{id:"kurocofiles\u5229\u7528\u306e\u30e1\u30ea\u30c3\u30c8"},"KurocoFiles\u5229\u7528\u306e\u30e1\u30ea\u30c3\u30c8"),(0,n.kt)("p",null,"\u30d5\u30a1\u30a4\u30eb\u30b5\u30a4\u30ba\u306e\u5927\u304d\u3044\u30d5\u30a1\u30a4\u30eb\u3092KurocoFiles\u306b\u914d\u7f6e\u3059\u308b\u3053\u3068\u3067\u30bd\u30fc\u30b9\u30d5\u30a1\u30a4\u30eb\u5168\u4f53\u306e\u30d5\u30a1\u30a4\u30eb\u30b5\u30a4\u30ba\u3092\u524a\u6e1b\u3067\u304d\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u30bd\u30fc\u30b9\u30d5\u30a1\u30a4\u30eb\u306e\u30b5\u30a4\u30ba\u304c\u5c11\u306a\u304f\u306a\u308b\u3068\u3001GitHub Actions\u3067\u306eBuild&Deploy\u306e\u6642\u9593\u304c\u77ed\u7e2e\u3055\u308c\u307e\u3059\u3002  "),(0,n.kt)("h3",{id:"kurocofiles\u5229\u7528\u306e\u30c7\u30e1\u30ea\u30c3\u30c8"},"KurocoFiles\u5229\u7528\u306e\u30c7\u30e1\u30ea\u30c3\u30c8"),(0,n.kt)("p",null,"\u30c7\u30e1\u30ea\u30c3\u30c8\u3068\u3057\u3066\u3001KurocoFiles\u306b\u30d0\u30fc\u30b8\u30e7\u30f3\u7ba1\u7406\u306e\u6a5f\u80fd\u306f\u306a\u3044\u305f\u3081\u3001CSS\u3084JS\u3092KurocoFiles\u306b\u30a2\u30c3\u30d7\u3059\u308b\u5834\u5408\u3001\u305d\u308c\u3089\u306e\u30d5\u30a1\u30a4\u30eb\u306f\u30d0\u30fc\u30b8\u30e7\u30f3\u7ba1\u7406\u3067\u304d\u306a\u304f\u306a\u3063\u3066\u3057\u307e\u3044\u307e\u3059\u3002  "),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"\u3088\u308a\u8a73\u7d30\u306a\u4f7f\u3044\u5206\u3051\u65b9\u6cd5\u306b\u3064\u3044\u3066\u306f\u3001",(0,n.kt)("a",{parentName:"p",href:"/ja/docs/tutorials/difference-between-kurocofiles-and-kurocofront/"},"\u753b\u50cf\u30fb\u30d5\u30a1\u30a4\u30eb\u7ba1\u7406\u306b\u304a\u3051\u308bKurocoFiles\u3068KurocoFront\u306e\u4f7f\u3044\u5206\u3051\u306b\u3064\u3044\u3066"),"\u3082\u4f75\u305b\u3066\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"KurocoFront\u3001KurocoFiles\u306b\u3064\u3044\u3066\u306f\u4e0b\u8a18\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","-",(0,n.kt)("a",{parentName:"p",href:"/ja/docs/about/kurocofront/"},"KurocoFront\u306b\u3064\u3044\u3066"),(0,n.kt)("br",{parentName:"p"}),"\n","-",(0,n.kt)("a",{parentName:"p",href:"/ja/docs/management/file-manager/"},"\u30d5\u30a1\u30a4\u30eb\u30de\u30cd\u30fc\u30b8\u30e3\u30fc"))))}m.isMDXComponent=!0}}]);