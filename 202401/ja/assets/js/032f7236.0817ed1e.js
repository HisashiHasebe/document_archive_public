"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[28469],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=u(n),m=a,d=l["".concat(s,".").concat(m)]||l[m]||f[m]||o;return n?r.createElement(d,c(c({ref:t},p),{},{components:n})):r.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[l]="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13433:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294);function a(e){let{faqs:t=[]}=e;if(0===(Array.isArray(t)?t.filter((e=>e.question&&e.answer)):[]).length)return null;const n={"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))},a=JSON.stringify(n,null,2);return r.createElement("script",{type:"application/ld+json"},a)}},96691:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>c,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),o=n(13433);const c={title:"Basic\u8a8d\u8a3c\u306f\u5229\u7528\u3067\u304d\u307e\u3059\u304b\uff1f",description:"\u306f\u3044\u3001Basic\u8a8d\u8a3c\u306e\u5229\u7528\u53ef\u80fd\u3067\u3059\u3002kuroco_front.json\u30d5\u30a1\u30a4\u30eb\u3067Basic\u8a8d\u8a3c\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002",category:"howto"},i=void 0,s={unversionedId:"faq/can-i-use-basic-authentication",id:"faq/can-i-use-basic-authentication",title:"Basic\u8a8d\u8a3c\u306f\u5229\u7528\u3067\u304d\u307e\u3059\u304b\uff1f",description:"\u306f\u3044\u3001Basic\u8a8d\u8a3c\u306e\u5229\u7528\u53ef\u80fd\u3067\u3059\u3002kuroco_front.json\u30d5\u30a1\u30a4\u30eb\u3067Basic\u8a8d\u8a3c\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/faq/can-i-use-basic-authentication.mdx",sourceDirName:"faq",slug:"/faq/can-i-use-basic-authentication",permalink:"/ja/docs/faq/can-i-use-basic-authentication",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/can-i-use-basic-authentication.mdx",tags:[],version:"current",frontMatter:{title:"Basic\u8a8d\u8a3c\u306f\u5229\u7528\u3067\u304d\u307e\u3059\u304b\uff1f",description:"\u306f\u3044\u3001Basic\u8a8d\u8a3c\u306e\u5229\u7528\u53ef\u80fd\u3067\u3059\u3002kuroco_front.json\u30d5\u30a1\u30a4\u30eb\u3067Basic\u8a8d\u8a3c\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002",category:"howto"},sidebar:"faqSidebar",previous:{title:"\u30b9\u30c6\u30fc\u30b8\u30b5\u30a4\u30c8\u306b\u3060\u3051Basic\u8a8d\u8a3c\u3092\u304b\u3051\u3089\u308c\u307e\u3059\u304b\uff1f",permalink:"/ja/docs/faq/can-i-use-basic-authentication-only-on-the-staging-site"},next:{title:"\u52b9\u679c\u6e2c\u5b9a\u30bf\u30b0\u3092\u4f7f\u3046\u3053\u3068\u306f\u3067\u304d\u307e\u3059\u304b\uff1f",permalink:"/ja/docs/faq/can-i-use-conversion-tracking-tags"}},u={},p=[],l={toc:p},f="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{faqs:[{question:"Basic\u8a8d\u8a3c\u306f\u5229\u7528\u3067\u304d\u307e\u3059\u304b\uff1f",answer:"\u306f\u3044\u3001Basic\u8a8d\u8a3c\u306e\u5229\u7528\u53ef\u80fd\u3067\u3059\u3002kuroco_front.json\u30d5\u30a1\u30a4\u30eb\u3067Basic\u8a8d\u8a3c\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002"}],mdxType:"StructuredDataFaqs"}),(0,a.kt)("p",null,"\u306f\u3044\u3001Basic\u8a8d\u8a3c\u306e\u5229\u7528\u53ef\u80fd\u3067\u3059\u3002kuroco_front.json\u30d5\u30a1\u30a4\u30eb\u3067Basic\u8a8d\u8a3c\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"Basic\u8a8d\u8a3c\u3092\u5229\u7528\u3059\u308b\u5834\u5408\u3001kuroco_front.json\u306b\u4e0b\u8a18\u3092\u8ffd\u8a18\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:"[kuroco_front.json]","[kuroco_front.json]":!0},'{\n    "basic":["kuroco:kuroco"],\n}\n')),(0,a.kt)("p",null,"\u30d5\u30ed\u30f3\u30c8\u753b\u9762\u3067\u30b5\u30a4\u30c8\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u3068\u3001Basic\u8a8d\u8a3c\u304c\u304b\u304b\u308a\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/d97ce43675561ee728b757dde15043c2.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/d97ce43675561ee728b757dde15043c2.png",alt:"Image (fetched from Gyazo)"})),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"kuroco_front.json \u306b\u3064\u3044\u3066\u306f\u3001",(0,a.kt)("a",{parentName:"p",href:"/ja/docs/faq/what-is-kuroco_front_json/"},"kuroco_front.json\u3068\u306f\u4f55\u3067\u3059\u304b\uff1f"),"\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002")),(0,a.kt)("p",null,"\u306a\u304a\u3001\u7ba1\u7406\u753b\u9762\u306b\u306fBasic\u8a8d\u8a3c\u306e\u8a2d\u5b9a\u306f\u3067\u304d\u307e\u305b\u3093\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u3057\u304b\u3057\u306a\u304c\u3089\u3001\u300c\u7ba1\u7406\u753b\u9762\u306e\u30a2\u30af\u30bb\u30b9\u5236\u9650\u300d\u6a5f\u80fd\u3092\u3054\u5229\u7528\u3044\u305f\u3060\u304f\u3053\u3068\u3067\u3001IP\u30a2\u30c9\u30ec\u30b9\u306b\u3066\u7ba1\u7406\u753b\u9762\u306e\u30a2\u30af\u30bb\u30b9\u5236\u5fa1\u3092\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u7ba1\u7406\u753b\u9762\u3088\u308a","[\u74b0\u5883\u8a2d\u5b9a]"," -> ","[\u7ba1\u7406\u753b\u9762]","\u306b\u79fb\u52d5\u3057\u3001\u300c\u7ba1\u7406\u753b\u9762\u306e\u30a2\u30af\u30bb\u30b9\u5236\u9650(IP\u30a2\u30c9\u30ec\u30b9)\u300d\u30d5\u30a3\u30fc\u30eb\u30c9\u306bIP\u30a2\u30c9\u30ec\u30b9\u3092\u8a18\u5165\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/c5234bf12a75e2b2b96045b2f7ddc729.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/c5234bf12a75e2b2b96045b2f7ddc729.png",alt:"Image (fetched from Gyazo)"})),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u7ba1\u7406\u753b\u9762\u306b\u3064\u3044\u3066\u306f\u3001","[\u7ba1\u7406\u753b\u9762\u30de\u30cb\u30e5\u30a2\u30eb]"," -> ",(0,a.kt)("a",{parentName:"p",href:"/ja/docs/management/management-screen/"},"[\u7ba1\u7406\u753b\u9762]"),"\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002")))}m.isMDXComponent=!0}}]);