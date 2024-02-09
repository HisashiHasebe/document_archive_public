"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[85093],{3905:(t,e,n)=>{n.d(e,{Zo:()=>g,kt:()=>f});var o=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=o.createContext({}),u=function(t){var e=o.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},g=function(t){var e=u(t.components);return o.createElement(s.Provider,{value:e},t.children)},c="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,s=t.parentName,g=l(t,["components","mdxType","originalType","parentName"]),c=u(n),d=r,f=c["".concat(s,".").concat(d)]||c[d]||p[d]||a;return n?o.createElement(f,i(i({ref:e},g),{},{components:n})):o.createElement(f,i({ref:e},g))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[c]="string"==typeof t?t:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},13433:(t,e,n)=>{n.d(e,{Z:()=>r});var o=n(67294);function r(t){let{faqs:e=[]}=t;if(0===(Array.isArray(e)?e.filter((t=>t.question&&t.answer)):[]).length)return null;const n={"@context":"https://schema.org","@type":"FAQPage",mainEntity:e.map((t=>({"@type":"Question",name:t.question,acceptedAnswer:{"@type":"Answer",text:t.answer}})))},r=JSON.stringify(n,null,2);return o.createElement("script",{type:"application/ld+json"},r)}},84223:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>g});var o=n(87462),r=(n(67294),n(3905)),a=n(13433);const i={title:"Nuxt.js\u3067GoogleAnalytics4(GA4)\u3092\u3069\u306e\u3088\u3046\u306b\u8a2d\u5b9a\u3059\u308c\u3070\u3044\u3044\u3067\u3059\u304b\uff1f",description:"nuxtjs/google-gtag\u3084nuxtjs/gtm\u3092\u4f7f\u3046\u65b9\u6cd5\u304c\u3042\u308a\u307e\u3059\u3002\u8a73\u3057\u304f\u306fGoogle Analytics\u9023\u643a\u65b9\u6cd5\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002",category:"howto"},l=void 0,s={unversionedId:"faq/how-do-i-set-up-google-analytics-4-in-nuxtjs",id:"faq/how-do-i-set-up-google-analytics-4-in-nuxtjs",title:"Nuxt.js\u3067GoogleAnalytics4(GA4)\u3092\u3069\u306e\u3088\u3046\u306b\u8a2d\u5b9a\u3059\u308c\u3070\u3044\u3044\u3067\u3059\u304b\uff1f",description:"nuxtjs/google-gtag\u3084nuxtjs/gtm\u3092\u4f7f\u3046\u65b9\u6cd5\u304c\u3042\u308a\u307e\u3059\u3002\u8a73\u3057\u304f\u306fGoogle Analytics\u9023\u643a\u65b9\u6cd5\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/faq/how-do-i-set-up-google-analytics-4-in-nuxtjs.mdx",sourceDirName:"faq",slug:"/faq/how-do-i-set-up-google-analytics-4-in-nuxtjs",permalink:"/ja/docs/faq/how-do-i-set-up-google-analytics-4-in-nuxtjs",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/how-do-i-set-up-google-analytics-4-in-nuxtjs.mdx",tags:[],version:"current",frontMatter:{title:"Nuxt.js\u3067GoogleAnalytics4(GA4)\u3092\u3069\u306e\u3088\u3046\u306b\u8a2d\u5b9a\u3059\u308c\u3070\u3044\u3044\u3067\u3059\u304b\uff1f",description:"nuxtjs/google-gtag\u3084nuxtjs/gtm\u3092\u4f7f\u3046\u65b9\u6cd5\u304c\u3042\u308a\u307e\u3059\u3002\u8a73\u3057\u304f\u306fGoogle Analytics\u9023\u643a\u65b9\u6cd5\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002",category:"howto"},sidebar:"faqSidebar",previous:{title:"PDF\u30d5\u30a1\u30a4\u30eb\u3092\u8868\u793a\u3055\u305b\u305f\u308a\u3001\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u306a\u3069\u3092\u5236\u9650\u3059\u308b\u65b9\u6cd5\u306f\u3042\u308a\u307e\u3059\u304b\uff1f",permalink:"/ja/docs/faq/how-do-i-restrict-pdf-access-and-download"},next:{title:"\u30e1\u30f3\u30d0\u30fc\u767b\u9332\u5f8c\u30e1\u30fc\u30eb\u304c\u5c4a\u304d\u307e\u305b\u3093\u3002\u8a2d\u5b9a\u65b9\u6cd5\u3092\u6559\u3048\u3066\u304f\u3060\u3055\u3044\u3002",permalink:"/ja/docs/faq/how-do-i-set-up-member-registration-confirmation-emails"}},u={},g=[{value:"@nuxtjs/google-gtag\u3092\u5229\u7528\u3059\u308b\u65b9\u6cd5",id:"nuxtjsgoogle-gtag\u3092\u5229\u7528\u3059\u308b\u65b9\u6cd5",level:2},{value:"@nuxtjs/google-gtag\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",id:"nuxtjsgoogle-gtag\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",level:3},{value:"nuxt.config.js\u306b\u30e2\u30b8\u30e5\u30fc\u30eb\u8ffd\u52a0",id:"nuxtconfigjs\u306b\u30e2\u30b8\u30e5\u30fc\u30eb\u8ffd\u52a0",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],c={toc:g},p="wrapper";function d(t){let{components:e,...n}=t;return(0,r.kt)(p,(0,o.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(a.Z,{faqs:[{question:"Nuxt.js\u3067GoogleAnalytics4(GA4)\u3092\u3069\u306e\u3088\u3046\u306b\u8a2d\u5b9a\u3059\u308c\u3070\u3044\u3044\u3067\u3059\u304b\uff1f",answer:"nuxtjs/google-gtag\u3084nuxtjs/gtm\u3092\u4f7f\u3046\u65b9\u6cd5\u304c\u3042\u308a\u307e\u3059\u3002\u8a73\u3057\u304f\u306fGoogle Analytics\u9023\u643a\u65b9\u6cd5\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}],mdxType:"StructuredDataFaqs"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@nuxtjs/google-gtag"),"\u3092\u5229\u7528\u3057\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"nuxtjsgoogle-gtag\u3092\u5229\u7528\u3059\u308b\u65b9\u6cd5"},"@nuxtjs/google-gtag\u3092\u5229\u7528\u3059\u308b\u65b9\u6cd5"),(0,r.kt)("h3",{id:"nuxtjsgoogle-gtag\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b"},"@nuxtjs/google-gtag\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b"),(0,r.kt)("p",null,"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306bGoogle Analytics\u7528\u306e\u30e2\u30b8\u30e5\u30fc\u30eb ",(0,r.kt)("inlineCode",{parentName:"p"},"@nuxtjs/google-gtag")," \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u4e0b\u8a18\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install --save @nuxtjs/google-gtag\n")),(0,r.kt)("h3",{id:"nuxtconfigjs\u306b\u30e2\u30b8\u30e5\u30fc\u30eb\u8ffd\u52a0"},"nuxt.config.js\u306b\u30e2\u30b8\u30e5\u30fc\u30eb\u8ffd\u52a0"),(0,r.kt)("p",null,"nuxt.config.js\u306bGoogle Analytics\u306e\u8a2d\u5b9a\u3092\u3057\u307e\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","nuxt.config.js\u3092\u958b\u304d\u3001\u4e0b\u8a18\u8ffd\u8a18\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="nuxt.config.js"',title:'"nuxt.config.js"'},"  modules: [\n    '@nuxtjs/google-gtag'\n  ],\n  'google-gtag': {\n    id: \"G-XXXXXXX\",\n    debug: false\n  },\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"G-XXXXXXX\u306b\u306f\u3001\u3054\u81ea\u8eab\u306e\u30c8\u30e9\u30c3\u30ad\u30f3\u30b0 ID\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,r.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,r.kt)("p",null,"\u4ed6\u306b\u3082\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"@nuxtjs/gtm"),"\u3092\u4f7f\u3046\u65b9\u6cd5\u3067\u3082\u5bfe\u5fdc\u53ef\u80fd\u3067\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u8a73\u3057\u304f\u306f",(0,r.kt)("a",{parentName:"p",href:"/ja/docs/tutorials/how-to-link-google-analytics/"},"Google Analytics\u9023\u643a\u65b9\u6cd5"),"\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))}d.isMDXComponent=!0}}]);