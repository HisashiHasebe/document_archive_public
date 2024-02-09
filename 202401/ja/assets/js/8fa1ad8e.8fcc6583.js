"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[54737],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,d=p["".concat(l,".").concat(m)]||p[m]||f[m]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[p]="string"==typeof e?e:a,i[1]=u;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13433:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294);function a(e){let{faqs:t=[]}=e;if(0===(Array.isArray(t)?t.filter((e=>e.question&&e.answer)):[]).length)return null;const n={"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))},a=JSON.stringify(n,null,2);return r.createElement("script",{type:"application/ld+json"},a)}},10080:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),o=n(13433);const i={title:"OAuth\u3092\u4f7f\u7528\u3057\u305f\u30b7\u30f3\u30b0\u30eb\u30b5\u30a4\u30f3\u30aa\u30f3\u306f\u3067\u304d\u307e\u3059\u304b",description:"\u306f\u3044\u3001Kuroco\u306fOAuth\u3092\u4f7f\u7528\u3057\u305f\u30b7\u30f3\u30b0\u30eb\u30b5\u30a4\u30f3\u30aa\u30f3\u306e\u5229\u7528\u53ef\u80fd\u3067\u3059\u3002",category:"security"},u=void 0,l={unversionedId:"faq/can-I-use-single-sign-on-using-oauth",id:"faq/can-I-use-single-sign-on-using-oauth",title:"OAuth\u3092\u4f7f\u7528\u3057\u305f\u30b7\u30f3\u30b0\u30eb\u30b5\u30a4\u30f3\u30aa\u30f3\u306f\u3067\u304d\u307e\u3059\u304b",description:"\u306f\u3044\u3001Kuroco\u306fOAuth\u3092\u4f7f\u7528\u3057\u305f\u30b7\u30f3\u30b0\u30eb\u30b5\u30a4\u30f3\u30aa\u30f3\u306e\u5229\u7528\u53ef\u80fd\u3067\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/faq/can-I-use-single-sign-on-using-oauth.mdx",sourceDirName:"faq",slug:"/faq/can-I-use-single-sign-on-using-oauth",permalink:"/ja/docs/faq/can-I-use-single-sign-on-using-oauth",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/can-I-use-single-sign-on-using-oauth.mdx",tags:[],version:"current",frontMatter:{title:"OAuth\u3092\u4f7f\u7528\u3057\u305f\u30b7\u30f3\u30b0\u30eb\u30b5\u30a4\u30f3\u30aa\u30f3\u306f\u3067\u304d\u307e\u3059\u304b",description:"\u306f\u3044\u3001Kuroco\u306fOAuth\u3092\u4f7f\u7528\u3057\u305f\u30b7\u30f3\u30b0\u30eb\u30b5\u30a4\u30f3\u30aa\u30f3\u306e\u5229\u7528\u53ef\u80fd\u3067\u3059\u3002",category:"security"},sidebar:"faqSidebar",previous:{title:"Kuroco\u30b5\u30fc\u30d3\u30b9\u306e\u30b5\u30fc\u30d0\u30fc\u306f\u5197\u9577\u5316\u3055\u308c\u3066\u3044\u307e\u3059\u304b\uff1f",permalink:"/ja/docs/faq/are_the_kuroco_service_redundant"},next:{title:"SAML\u8a8d\u8a3c\u3092\u4f7f\u7528\u3057\u305f\u30b7\u30f3\u30b0\u30eb\u30b5\u30a4\u30f3\u30aa\u30f3\u3092\u5229\u7528\u3067\u304d\u307e\u3059\u304b",permalink:"/ja/docs/faq/can-I-use-single-sign-on-using-saml"}},s={},c=[{value:"\u7279\u5fb4",id:"\u7279\u5fb4",level:2},{value:"\u30b5\u30dd\u30fc\u30c8\u5bfe\u8c61\u5916",id:"\u30b5\u30dd\u30fc\u30c8\u5bfe\u8c61\u5916",level:2}],p={toc:c},f="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{faqs:[{question:"OAuth\u3092\u4f7f\u7528\u3057\u305f\u30b7\u30f3\u30b0\u30eb\u30b5\u30a4\u30f3\u30aa\u30f3\u306f\u3067\u304d\u307e\u3059\u304b",answer:"\u306f\u3044\u3001Kuroco\u306fOAuth\u3092\u4f7f\u7528\u3057\u305f\u30b7\u30f3\u30b0\u30eb\u30b5\u30a4\u30f3\u30aa\u30f3\u306e\u5229\u7528\u53ef\u80fd\u3067\u3059\u3002"}],mdxType:"StructuredDataFaqs"}),(0,a.kt)("p",null,"\u306f\u3044\u3001Kuroco\u306fOAuth\u3092\u4f7f\u7528\u3057\u305f\u30b7\u30f3\u30b0\u30eb\u30b5\u30a4\u30f3\u30aa\u30f3\u306e\u5229\u7528\u53ef\u80fd\u3067\u3059\u3002"),(0,a.kt)("h2",{id:"\u7279\u5fb4"},"\u7279\u5fb4"),(0,a.kt)("p",null,"OAuth\u8a8d\u8a3c\u30b7\u30f3\u30b0\u30eb\u30b5\u30a4\u30f3\u30aa\u30f3\u306e\u7279\u5fb4\u306f\u4e0b\u8a18\u306e\u901a\u308a\u3067\u3059\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u30b7\u30f3\u30b0\u30eb\u30af\u30ea\u30c3\u30af\u30ed\u30b0\u30a4\u30f3\u3068\u30e6\u30fc\u30b6\u30fc\u767b\u9332\u306b\u5bfe\u5fdc\u3057\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u30e6\u30fc\u30b6\u30fc\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u306e\u4fdd\u5b58\u306b\u5bfe\u5fdc\u3057\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u8907\u6570\u306eSSO\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u540c\u6642\u306b\u6709\u52b9\u306b\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},"SSO\u306b\u3088\u308b\u767b\u9332\u6642\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30e6\u30fc\u30b6\u30fc\u6a29\u9650\u8a2d\u5b9a\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u30b3\u30fc\u30c9\u3092\u66f8\u304f\u3053\u3068\u306a\u304f\u3001\u30e6\u30fc\u30b6\u30fc\u60c5\u5831\u3092\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},"SSO\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u516c\u958b\u3059\u308b\u524d\u306b\u3001\u30c6\u30b9\u30c8\u30c4\u30fc\u30eb\u306b\u3066\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},"GitHub\u3001Facebook\u3001Zoho\u3001Microsoft\u3001Chatwork\u3001Atlassian\u306a\u3069\u3001\u3055\u307e\u3056\u307e\u306a\u30b5\u30fc\u30d3\u30b9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002")),(0,a.kt)("h2",{id:"\u30b5\u30dd\u30fc\u30c8\u5bfe\u8c61\u5916"},"\u30b5\u30dd\u30fc\u30c8\u5bfe\u8c61\u5916"),(0,a.kt)("p",null,"\u4e0b\u8a18\u306f\u30b5\u30dd\u30fc\u30c8\u5bfe\u8c61\u5916\u3068\u306a\u308a\u307e\u3059\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Identity Provider"),(0,a.kt)("li",{parentName:"ul"},"OAuth 2.0 JWT Profile.")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"OAuth\u306f\u30b7\u30f3\u30b0\u30eb\u30b5\u30a4\u30f3\u30aa\u30f3\u306e\u4e00\u7a2e\u3067\u3059\u3002SAML\u306e\u5834\u5408\u306f",(0,a.kt)("a",{parentName:"p",href:"/ja/docs/faq/can-I-use-single-sign-on-using-saml/"},"\u3053\u3061\u3089"),"\u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002")))}m.isMDXComponent=!0}}]);