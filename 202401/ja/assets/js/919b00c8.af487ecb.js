"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[47891],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=s(r),m=a,f=l["".concat(u,".").concat(m)]||l[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[l]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},13433:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294);function a(e){let{faqs:t=[]}=e;if(0===(Array.isArray(t)?t.filter((e=>e.question&&e.answer)):[]).length)return null;const r={"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))},a=JSON.stringify(r,null,2);return n.createElement("script",{type:"application/ld+json"},a)}},91214:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var n=r(87462),a=(r(67294),r(3905)),o=r(13433);const i={title:"\u8907\u6570\u306e\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3\u306e\u30e1\u30fc\u30eb\u3092\u5229\u7528\u3067\u304d\u307e\u3059\u304b\uff1f",description:"SendGrid\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u72ec\u81ea\u306b\u3054\u5951\u7d04\u3044\u305f\u3060\u3044\u3066\u3044\u308b\u5834\u5408\u3001SendGrid\u306b\u8907\u6570\u306e\u30c9\u30e1\u30a4\u30f3\u306e\u9001\u4fe1\u5143\u3092\u8a2d\u5b9a\u304c\u53ef\u80fd\u3067\u3059\u3002",category:"howto"},c=void 0,u={unversionedId:"faq/can-i-use-more-than-one-unique-e-mail-domain",id:"faq/can-i-use-more-than-one-unique-e-mail-domain",title:"\u8907\u6570\u306e\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3\u306e\u30e1\u30fc\u30eb\u3092\u5229\u7528\u3067\u304d\u307e\u3059\u304b\uff1f",description:"SendGrid\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u72ec\u81ea\u306b\u3054\u5951\u7d04\u3044\u305f\u3060\u3044\u3066\u3044\u308b\u5834\u5408\u3001SendGrid\u306b\u8907\u6570\u306e\u30c9\u30e1\u30a4\u30f3\u306e\u9001\u4fe1\u5143\u3092\u8a2d\u5b9a\u304c\u53ef\u80fd\u3067\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/faq/can-i-use-more-than-one-unique-e-mail-domain.mdx",sourceDirName:"faq",slug:"/faq/can-i-use-more-than-one-unique-e-mail-domain",permalink:"/ja/docs/faq/can-i-use-more-than-one-unique-e-mail-domain",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/can-i-use-more-than-one-unique-e-mail-domain.mdx",tags:[],version:"current",frontMatter:{title:"\u8907\u6570\u306e\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3\u306e\u30e1\u30fc\u30eb\u3092\u5229\u7528\u3067\u304d\u307e\u3059\u304b\uff1f",description:"SendGrid\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u72ec\u81ea\u306b\u3054\u5951\u7d04\u3044\u305f\u3060\u3044\u3066\u3044\u308b\u5834\u5408\u3001SendGrid\u306b\u8907\u6570\u306e\u30c9\u30e1\u30a4\u30f3\u306e\u9001\u4fe1\u5143\u3092\u8a2d\u5b9a\u304c\u53ef\u80fd\u3067\u3059\u3002",category:"howto"},sidebar:"faqSidebar",previous:{title:"\u30d5\u30a1\u30a4\u30eb\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u305f\u753b\u50cf\u3092\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u62e1\u5f35\u9805\u76ee\u3067\u4f7f\u7528\u3067\u304d\u307e\u3059\u304b\uff1f",permalink:"/ja/docs/faq/can-i-use-kurocofiles-images-in-additional-fields"},next:{title:"\u30e1\u30fc\u30eb\u306e\u9001\u4fe1\u5143\u306b\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3\u3092\u5229\u7528\u3059\u308b\u306b\u306f\u3069\u3046\u3057\u305f\u3089\u3088\u3044\u3067\u3057\u3087\u3046\u304b\uff1f",permalink:"/ja/docs/faq/can-i-use-my-custom-domain-for-the-sender-address"}},s={},d=[],l={toc:d},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{faqs:[{question:"\u8907\u6570\u306e\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3\u306e\u30e1\u30fc\u30eb\u3092\u5229\u7528\u3067\u304d\u307e\u3059\u304b\uff1f",answer:"SendGrid\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u72ec\u81ea\u306b\u3054\u5951\u7d04\u3044\u305f\u3060\u3044\u3066\u3044\u308b\u5834\u5408\u3001SendGrid\u306b\u8907\u6570\u306e\u30c9\u30e1\u30a4\u30f3\u306e\u9001\u4fe1\u5143\u3092\u8a2d\u5b9a\u304c\u53ef\u80fd\u3067\u3059\u3002"}],mdxType:"StructuredDataFaqs"}),(0,a.kt)("p",null,"SendGrid\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u72ec\u81ea\u306b\u3054\u5951\u7d04\u3044\u305f\u3060\u3044\u3066\u3044\u308b\u5834\u5408\u3001SendGrid\u306b\u8907\u6570\u306e\u30c9\u30e1\u30a4\u30f3\u306e\u9001\u4fe1\u5143\u3092\u8a2d\u5b9a\u304c\u53ef\u80fd\u3067\u3059\u3002"),(0,a.kt)("p",null,"SendGrid\u3067\u8a2d\u5b9a\u5f8c\u3001Kuroco\u5074\u306eSendGrid\u306e\u8a2d\u5b9a\u753b\u9762\u3067\u9001\u4fe1\u8a31\u53ef\u30c9\u30e1\u30a4\u30f3\u30fb\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u306b\u3001\u8ffd\u52a0\u306e\u30c9\u30e1\u30a4\u30f3\u3092\u30bb\u30c3\u30c8\u3057\u3066\u304f\u3060\u3055\u3044\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u554f\u3044\u5408\u308f\u305b\u306a\u3069\u306e\u8fd4\u4fe1\u306e\u9001\u4fe1\u5143\u3068\u3057\u3066\u5229\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002  "),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/440a5fa7aaa4de2139629ba0addce028.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/440a5fa7aaa4de2139629ba0addce028.png",alt:"Image from Gyazo"})),(0,a.kt)("p",null,"SendGrid\u306b\u3064\u3044\u3066\u306f\u4e0b\u8a18\u3092\u3054\u53c2\u7167\u304f\u3060\u3055\u3044\u3002  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kuroco.app/ja/docs/faq/can-i-change-the-senders-email-address/"},"\u30e1\u30fc\u30eb\u914d\u4fe1\u306e\u969b\u306e\u9001\u4fe1\u5143\u306e\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u300cnoreply@kuroco-mail.app\u300d\u3092\u5909\u66f4\u3067\u304d\u307e\u3059\u304b\uff1f"),"  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kuroco.app/ja/docs/tutorials/how-to-link-sendgrid/"},"SendGrid\u9023\u643a\u65b9\u6cd5"))))}m.isMDXComponent=!0}}]);