"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[37871],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=p(r),f=n,u=m["".concat(s,".").concat(f)]||m[f]||l[f]||o;return r?a.createElement(u,i(i({ref:t},d),{},{components:r})):a.createElement(u,i({ref:t},d))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[m]="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},13433:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(67294);function n(e){let{faqs:t=[]}=e;if(0===(Array.isArray(t)?t.filter((e=>e.question&&e.answer)):[]).length)return null;const r={"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))},n=JSON.stringify(r,null,2);return a.createElement("script",{type:"application/ld+json"},n)}},95344:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=r(87462),n=(r(67294),r(3905)),o=r(13433);const i={title:"\u30d5\u30a9\u30fc\u30e0\u306e\u56de\u7b54\u5f62\u614b\u300c\u65e5\u4ed8\u300d\u306e\u671f\u9593\u3092\u3001\u4efb\u610f\u306e\u671f\u9593\u3067\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u304b\uff1f",description:"\u65e5\u4ed8\u306e\u897f\u66a6\u306f\u3001\u4efb\u610f\u306e\u671f\u9593\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",category:"howto"},c=void 0,s={unversionedId:"faq/can-i-set-a-custom-time-period-for-the-inquiry-response-date-selection",id:"faq/can-i-set-a-custom-time-period-for-the-inquiry-response-date-selection",title:"\u30d5\u30a9\u30fc\u30e0\u306e\u56de\u7b54\u5f62\u614b\u300c\u65e5\u4ed8\u300d\u306e\u671f\u9593\u3092\u3001\u4efb\u610f\u306e\u671f\u9593\u3067\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u304b\uff1f",description:"\u65e5\u4ed8\u306e\u897f\u66a6\u306f\u3001\u4efb\u610f\u306e\u671f\u9593\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/faq/can-i-set-a-custom-time-period-for-the-inquiry-response-date-selection.mdx",sourceDirName:"faq",slug:"/faq/can-i-set-a-custom-time-period-for-the-inquiry-response-date-selection",permalink:"/ja/docs/faq/can-i-set-a-custom-time-period-for-the-inquiry-response-date-selection",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/can-i-set-a-custom-time-period-for-the-inquiry-response-date-selection.mdx",tags:[],version:"current",frontMatter:{title:"\u30d5\u30a9\u30fc\u30e0\u306e\u56de\u7b54\u5f62\u614b\u300c\u65e5\u4ed8\u300d\u306e\u671f\u9593\u3092\u3001\u4efb\u610f\u306e\u671f\u9593\u3067\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u304b\uff1f",description:"\u65e5\u4ed8\u306e\u897f\u66a6\u306f\u3001\u4efb\u610f\u306e\u671f\u9593\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",category:"howto"},sidebar:"faqSidebar",previous:{title:"\u53d7\u4fe1\u8005\u306e\u74b0\u5883\u306b\u5408\u308f\u305b\u3066\u3001\u9001\u4fe1\u3059\u308b\u30e1\u30fc\u30eb\u3092HTML\u30e1\u30fc\u30eb\u306b\u3059\u308b\u304b\u30c6\u30ad\u30b9\u30c8\u30e1\u30fc\u30eb\u306b\u3067\u304d\u307e\u3059\u304b\uff1f",permalink:"/ja/docs/faq/can-i-send-html-or-plain-text-emails-depending-on-the-recipients-environment"},next:{title:"\u30ed\u30b0\u30a4\u30f3\u306e\u6709\u52b9\u671f\u9650\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u3059\u304b",permalink:"/ja/docs/faq/can-i-set-a-login-expiration-date"}},p={},d=[{value:"\u30d5\u30a9\u30fc\u30e0\u3067\u671f\u9593\u8a2d\u5b9a\u624b\u9806",id:"\u30d5\u30a9\u30fc\u30e0\u3067\u671f\u9593\u8a2d\u5b9a\u624b\u9806",level:2},{value:"\u88dc\u8db3",id:"\u88dc\u8db3",level:2},{value:"\u73fe\u5728\u306e\u5e74\u3092\u8d77\u70b9\u306b\u671f\u9593\u3092\u6307\u5b9a\u3057\u305f\u3044\u5834\u5408",id:"\u73fe\u5728\u306e\u5e74\u3092\u8d77\u70b9\u306b\u671f\u9593\u3092\u6307\u5b9a\u3057\u305f\u3044\u5834\u5408",level:3}],m={toc:d},l="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(l,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{faqs:[{question:"\u30d5\u30a9\u30fc\u30e0\u306e\u56de\u7b54\u5f62\u614b\u300c\u65e5\u4ed8\u300d\u306e\u671f\u9593\u3092\u3001\u4efb\u610f\u306e\u671f\u9593\u3067\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u304b\uff1f",answer:"\u65e5\u4ed8\u306e\u897f\u66a6\u306f\u3001\u4efb\u610f\u306e\u671f\u9593\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}],mdxType:"StructuredDataFaqs"}),(0,n.kt)("p",null,"\u65e5\u4ed8\u306e\u897f\u66a6\u306f\u3001\u4efb\u610f\u306e\u671f\u9593\u3092\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("h2",{id:"\u30d5\u30a9\u30fc\u30e0\u3067\u671f\u9593\u8a2d\u5b9a\u624b\u9806"},"\u30d5\u30a9\u30fc\u30e0\u3067\u671f\u9593\u8a2d\u5b9a\u624b\u9806"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"1. ",(0,n.kt)("a",{parentName:"strong",href:"/ja/docs/management/form-field-settings"},"[\u30d5\u30a9\u30fc\u30e0] -> [\u9805\u76ee\u8a2d\u5b9a]"),"\u306e\u56de\u7b54\u5f62\u614b\u3067","[\u65e5\u4ed8\u30d5\u30a9\u30fc\u30de\u30c3\u30c8]","\u3092\u9078\u629e\u3059\u308b")," "),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/710ee5ccba2698fd87a6d7b69936b387.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/710ee5ccba2698fd87a6d7b69936b387.png",alt:"Image (fetched from Gyazo)"}),"\n",(0,n.kt)("strong",{parentName:"p"},"2. \u300c\u8a2d\u5b9a\u300d\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001\u300c\u5e74(\u4e0b\u9650)\u300d\u300c\u5e74(\u4e0a\u9650)\u300d\u3092\u8a2d\u5b9a\u3059\u308b")," "),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/7da470ebdf93c92b682b3c15385b3b1e.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/7da470ebdf93c92b682b3c15385b3b1e.png",alt:"Image (fetched from Gyazo)"}),"  "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"3. \u300c\u8a2d\u5b9a\u300d\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/ef2098f7de9228d3c25d20c4f8c771df.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/ef2098f7de9228d3c25d20c4f8c771df.png",alt:"Image (fetched from Gyazo)"}),"  "),(0,n.kt)("p",null,"2020\u5e74\uff5e2025\u5e74\u3092\u6307\u5b9a\u3057\u305f\u5834\u5408\u3001\u753b\u50cf\u306e\u3088\u3046\u306b\u81ea\u52d5\u3067\u5165\u529b\u3055\u308c\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/171df155aa45b0e35edef20f46334e79.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/171df155aa45b0e35edef20f46334e79.png",alt:"Image (fetched from Gyazo)"}),"\n",(0,n.kt)("strong",{parentName:"p"},"4. \u66f4\u65b0\u3059\u308b"),(0,n.kt)("br",{parentName:"p"}),"\n","\u753b\u9762\u4e0b\u90e8\u306e\u300c\u66f4\u65b0\u3059\u308b\u300d\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u5b8c\u4e86\u3067\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/16ab3c5fda1ae36f96c3bceaef9f7769.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/16ab3c5fda1ae36f96c3bceaef9f7769.png",alt:"Image (fetched from Gyazo)"})),(0,n.kt)("h2",{id:"\u88dc\u8db3"},"\u88dc\u8db3"),(0,n.kt)("h3",{id:"\u73fe\u5728\u306e\u5e74\u3092\u8d77\u70b9\u306b\u671f\u9593\u3092\u6307\u5b9a\u3057\u305f\u3044\u5834\u5408"},"\u73fe\u5728\u306e\u5e74\u3092\u8d77\u70b9\u306b\u671f\u9593\u3092\u6307\u5b9a\u3057\u305f\u3044\u5834\u5408"),(0,n.kt)("p",null,"\u300c\u73fe\u5728\u306e\u5e74\u3092\u57fa\u70b9\u306b-10\u5e74\u300d\u300c\u73fe\u5728\u306e\u5e74\u3092\u57fa\u70b9\u306b\uff0b15\u5e74\u300d\u306e\u3088\u3046\u306a\u6307\u5b9a\u3092\u3057\u305f\u3044\u5834\u5408\u306f\u3001\u56de\u7b54\u5f62\u614b/\u5165\u529b\u5236\u9650\u306e\u5165\u529b\u6b04\u306b\u3001\u4e0b\u8a18\u306e\u3088\u3046\u306b\u8a18\u5165\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"minYear::-10\nmaxYear::+15\n")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/b443f06d4fb98f3fa0f4c86972727d6f.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/b443f06d4fb98f3fa0f4c86972727d6f.png",alt:"Image (fetched from Gyazo)"})))}f.isMDXComponent=!0}}]);