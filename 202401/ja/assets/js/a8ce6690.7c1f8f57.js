"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[95303],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(r),d=o,f=s["".concat(p,".").concat(d)]||s[d]||m[d]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},13433:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294);function o(e){let{faqs:t=[]}=e;if(0===(Array.isArray(t)?t.filter((e=>e.question&&e.answer)):[]).length)return null;const r={"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))},o=JSON.stringify(r,null,2);return n.createElement("script",{type:"application/ld+json"},o)}},44854:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var n=r(87462),o=(r(67294),r(3905)),a=r(13433);const i={title:"\u7ba1\u7406\u753b\u9762\u306e\u63a8\u5968\u74b0\u5883\u3092\u6559\u3048\u3066\u304f\u3060\u3055\u3044",description:"\u4ee5\u4e0b\u306e\u5185\u5bb9\u306fKuroco\u306e\u7ba1\u7406\u753b\u9762\u306e\u63a8\u5968\u74b0\u5883\u3067\u3059\u3002\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u5074\u306e\u63a8\u5968\u74b0\u5883\u3084\u30a2\u30d7\u30ea\u3001IoT\u7b49\u3067\u306e\u3054\u5229\u7528\u306fAPI\u3092\u5229\u7528\u3057\u307e\u3059\u306e\u3067\u3001\u4ee5\u4e0b\u306e\u5236\u7d04\u306f\u3054\u3056\u3044\u307e\u305b\u3093\u3002\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u306e\u69cb\u7bc9\u3092\u3055\u308c\u305f\u65b9\u306b\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002",category:"system"},l=void 0,p={unversionedId:"faq/what-environments-do-you-recommend-for-the-admin-panel",id:"faq/what-environments-do-you-recommend-for-the-admin-panel",title:"\u7ba1\u7406\u753b\u9762\u306e\u63a8\u5968\u74b0\u5883\u3092\u6559\u3048\u3066\u304f\u3060\u3055\u3044",description:"\u4ee5\u4e0b\u306e\u5185\u5bb9\u306fKuroco\u306e\u7ba1\u7406\u753b\u9762\u306e\u63a8\u5968\u74b0\u5883\u3067\u3059\u3002\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u5074\u306e\u63a8\u5968\u74b0\u5883\u3084\u30a2\u30d7\u30ea\u3001IoT\u7b49\u3067\u306e\u3054\u5229\u7528\u306fAPI\u3092\u5229\u7528\u3057\u307e\u3059\u306e\u3067\u3001\u4ee5\u4e0b\u306e\u5236\u7d04\u306f\u3054\u3056\u3044\u307e\u305b\u3093\u3002\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u306e\u69cb\u7bc9\u3092\u3055\u308c\u305f\u65b9\u306b\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/faq/what-environments-do-you-recommend-for-the-admin-panel.mdx",sourceDirName:"faq",slug:"/faq/what-environments-do-you-recommend-for-the-admin-panel",permalink:"/ja/docs/faq/what-environments-do-you-recommend-for-the-admin-panel",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/what-environments-do-you-recommend-for-the-admin-panel.mdx",tags:[],version:"current",frontMatter:{title:"\u7ba1\u7406\u753b\u9762\u306e\u63a8\u5968\u74b0\u5883\u3092\u6559\u3048\u3066\u304f\u3060\u3055\u3044",description:"\u4ee5\u4e0b\u306e\u5185\u5bb9\u306fKuroco\u306e\u7ba1\u7406\u753b\u9762\u306e\u63a8\u5968\u74b0\u5883\u3067\u3059\u3002\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u5074\u306e\u63a8\u5968\u74b0\u5883\u3084\u30a2\u30d7\u30ea\u3001IoT\u7b49\u3067\u306e\u3054\u5229\u7528\u306fAPI\u3092\u5229\u7528\u3057\u307e\u3059\u306e\u3067\u3001\u4ee5\u4e0b\u306e\u5236\u7d04\u306f\u3054\u3056\u3044\u307e\u305b\u3093\u3002\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u306e\u69cb\u7bc9\u3092\u3055\u308c\u305f\u65b9\u306b\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002",category:"system"},sidebar:"faqSidebar",previous:{title:"\u30e1\u30f3\u30d0\u30fc\u7ba1\u7406\u306e\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u306b\u5229\u7528\u3067\u304d\u308b\u6587\u5b57\u3092\u6559\u3048\u3066\u304f\u3060\u3055\u3044",permalink:"/ja/docs/faq/what-characters-can-be-used-as-email"},next:{title:"\u30d5\u30a1\u30a4\u30eb\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u3067\u5229\u7528\u3067\u304d\u308b\u30d5\u30a1\u30a4\u30eb\u306e\u7a2e\u985e\u3092\u6559\u3048\u3066\u304f\u3060\u3055\u3044",permalink:"/ja/docs/faq/what-file-formats-does-the-file-manager-support"}},c={},u=[{value:"PC\u304b\u3089\u306e\u5229\u7528",id:"pc\u304b\u3089\u306e\u5229\u7528",level:2},{value:"\u30b9\u30de\u30fc\u30c8\u30d5\u30a9\u30f3\u3001\u30bf\u30d6\u30ec\u30c3\u30c8\u304b\u3089\u306e\u5229\u7528",id:"\u30b9\u30de\u30fc\u30c8\u30d5\u30a9\u30f3\u30bf\u30d6\u30ec\u30c3\u30c8\u304b\u3089\u306e\u5229\u7528",level:2},{value:"\u30e2\u30d0\u30a4\u30eb\uff08\u30d5\u30a3\u30fc\u30c1\u30e3\u30fc\u30d5\u30a9\u30f3\uff09\u304b\u3089\u306e\u5229\u7528",id:"\u30e2\u30d0\u30a4\u30eb\u30d5\u30a3\u30fc\u30c1\u30e3\u30fc\u30d5\u30a9\u30f3\u304b\u3089\u306e\u5229\u7528",level:2}],s={toc:u},m="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,{faqs:[{question:"\u7ba1\u7406\u753b\u9762\u306e\u63a8\u5968\u74b0\u5883\u3092\u6559\u3048\u3066\u304f\u3060\u3055\u3044",answer:"\u4ee5\u4e0b\u306e\u5185\u5bb9\u306fKuroco\u306e\u7ba1\u7406\u753b\u9762\u306e\u63a8\u5968\u74b0\u5883\u3067\u3059\u3002\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u5074\u306e\u63a8\u5968\u74b0\u5883\u3084\u30a2\u30d7\u30ea\u3001IoT\u7b49\u3067\u306e\u3054\u5229\u7528\u306fAPI\u3092\u5229\u7528\u3057\u307e\u3059\u306e\u3067\u3001\u4ee5\u4e0b\u306e\u5236\u7d04\u306f\u3054\u3056\u3044\u307e\u305b\u3093\u3002\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u306e\u69cb\u7bc9\u3092\u3055\u308c\u305f\u65b9\u306b\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002"}],mdxType:"StructuredDataFaqs"}),(0,o.kt)("p",null,"\u4ee5\u4e0b\u306e\u5185\u5bb9\u306f",(0,o.kt)("strong",{parentName:"p"},"Kuroco\u306e\u7ba1\u7406\u753b\u9762\u306e\u63a8\u5968\u74b0\u5883"),"\u3067\u3059\u3002\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u5074\u306e\u63a8\u5968\u74b0\u5883\u3084\u30a2\u30d7\u30ea\u3001IoT\u7b49\u3067\u306e\u3054\u5229\u7528\u306fAPI\u3092\u5229\u7528\u3057\u307e\u3059\u306e\u3067\u3001\u4ee5\u4e0b\u306e\u5236\u7d04\u306f\u3054\u3056\u3044\u307e\u305b\u3093\u3002\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u306e\u69cb\u7bc9\u3092\u3055\u308c\u305f\u65b9\u306b\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)("h2",{id:"pc\u304b\u3089\u306e\u5229\u7528"},"PC\u304b\u3089\u306e\u5229\u7528"),(0,o.kt)("p",null,"\u4e0b\u8a18\u30d6\u30e9\u30a6\u30b6\u306e\u6700\u65b0\u7248\u3067\u306e\u5229\u7528\u3092\u63a8\u5968\u3057\u3066\u304a\u308a\u307e\u3059\u3002  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Google Chrome \u6700\u65b0\u7248"),(0,o.kt)("li",{parentName:"ul"},"Mozilla Firefox \u6700\u65b0\u7248"),(0,o.kt)("li",{parentName:"ul"},"Microsoft Edge \u6700\u65b0\u7248")),(0,o.kt)("p",null,"\u203b\u4e0a\u8a18\u63a8\u5968\u74b0\u5883\u3067\u306a\u304f\u3066\u3082\u5229\u7528\u53ef\u80fd\u306a\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u304c\u3001\u52d5\u4f5c\u3092\u4fdd\u8a3c\u3059\u308b\u3082\u306e\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Internet Explorer 11\u3067\u306e\u52d5\u4f5c\u306b\u3064\u3044\u3066"),(0,o.kt)("br",{parentName:"p"}),"\n","\u203bInternet Explorer 11\u3067\u3082\u52d5\u4f5c\u3059\u308b\u53ef\u80fd\u6027\u306f\u3042\u308a\u307e\u3059\u304c\u3001\u4ee5\u4e0b\u306e\u7406\u7531\u304b\u3089\u63a8\u5968\u74b0\u5883\u306b\u306f\u542b\u3081\u3066\u304a\u308a\u307e\u305b\u3093\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u65e2\u306b\u4e3b\u306aOS\u3067Microsoft\u306e\u516c\u5f0f\u30b5\u30dd\u30fc\u30c8\u304c\u5207\u308c\u3066\u304a\u308a\u307e\u3059\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u4e0a\u8a18\u306e\u7406\u7531\u304b\u3089\u793e\u5185\u3067\u306e\u52d5\u4f5c\u30c6\u30b9\u30c8\u306f\u3057\u3066\u304a\u308a\u307e\u305b\u3093\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u4e00\u90e8\u6a5f\u80fd\u304c\u52d5\u4f5c\u3057\u306a\u3044\u5834\u5408\u306b\u6280\u8853\u7684\u306b\u5bfe\u5fdc\u3067\u304d\u306a\u3044\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://blogs.windows.com/japan/2015/11/11/iesupport/"},"Microsoft|Windows Blogs"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://security.yahoo.co.jp/news/tls12.html"},"Yahoo! JAPAN|\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30fc\u30bb\u30f3\u30bf\u30fc"),(0,o.kt)("br",{parentName:"p"}),"\n","\u203bInternet Explorer / Microsoft Edge\u306e\u4e92\u63db\u30e2\u30fc\u30c9\u3067\u306f\u6b63\u3057\u304f\u52d5\u4f5c\u3044\u305f\u3057\u307e\u305b\u3093\u306e\u3067\u3001\u4e92\u63db\u30e2\u30fc\u30c9\u3092\u7121\u52b9\u306b\u3057\u3066\u3054\u5229\u7528\u304f\u3060\u3055\u3044\u3002")),(0,o.kt)("h2",{id:"\u30b9\u30de\u30fc\u30c8\u30d5\u30a9\u30f3\u30bf\u30d6\u30ec\u30c3\u30c8\u304b\u3089\u306e\u5229\u7528"},"\u30b9\u30de\u30fc\u30c8\u30d5\u30a9\u30f3\u3001\u30bf\u30d6\u30ec\u30c3\u30c8\u304b\u3089\u306e\u5229\u7528"),(0,o.kt)("p",null,"\u30b9\u30de\u30fc\u30c8\u30d5\u30a9\u30f3\u3084\u30bf\u30d6\u30ec\u30c3\u30c8\u306fPC\u5411\u3051\u7ba1\u7406\u753b\u9762\u306b\u3066\u3054\u5229\u7528\u3044\u305f\u3060\u3051\u307e\u3059\u304c\u3001\u4e00\u90e8\u6a5f\u80fd\u304c\u52d5\u4f5c\u3057\u306a\u3044\u53ef\u80fd\u6027\u3082\u3042\u308a\u307e\u3059\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u5074\u306e\u63a8\u5968\u74b0\u5883\u306f\u69cb\u7bc9\u3055\u308c\u305f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u4f9d\u5b58\u3057\u307e\u3059\u3002"),(0,o.kt)("h2",{id:"\u30e2\u30d0\u30a4\u30eb\u30d5\u30a3\u30fc\u30c1\u30e3\u30fc\u30d5\u30a9\u30f3\u304b\u3089\u306e\u5229\u7528"},"\u30e2\u30d0\u30a4\u30eb\uff08\u30d5\u30a3\u30fc\u30c1\u30e3\u30fc\u30d5\u30a9\u30f3\uff09\u304b\u3089\u306e\u5229\u7528"),(0,o.kt)("p",null,"\u7ba1\u7406\u753b\u9762\u306f\u30d5\u30a3\u30fc\u30c1\u30e3\u30fc\u30d5\u30a9\u30f3\u3067\u306e\u5229\u7528\u306f\u60f3\u5b9a\u3057\u3066\u304a\u308a\u307e\u305b\u3093\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u5074\u306e\u63a8\u5968\u74b0\u5883\u306f\u69cb\u7bc9\u3055\u308c\u305f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u4f9d\u5b58\u3057\u307e\u3059\u3002"))}d.isMDXComponent=!0}}]);