"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[81399],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),f=a,y=s["".concat(c,".").concat(f)]||s[f]||d[f]||i;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},13433:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294);function a(e){let{faqs:t=[]}=e;if(0===(Array.isArray(t)?t.filter((e=>e.question&&e.answer)):[]).length)return null;const n={"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))},a=JSON.stringify(n,null,2);return r.createElement("script",{type:"application/ld+json"},a)}},64424:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(87462),a=(n(67294),n(3905)),i=n(13433);const o={title:"API\u306b\u3088\u308b\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u8ffd\u52a0/\u66f4\u65b0\u6642\u306b\u95a2\u9023\u60c5\u5831\u3092slug\u3067\u6307\u5b9a\u3067\u304d\u307e\u3059\u304b",description:"profile API\u306f\u4f1a\u54e1\u5236\u30b5\u30a4\u30c8\u3067\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u3044\u308b\u304b\u3069\u3046\u304b\u306e\u30c1\u30a7\u30c3\u30af\u3092\u3059\u308b\u306e\u306b\u5229\u7528\u3067\u304d\u308bAPI\u3068\u306a\u3063\u3066\u304a\u308a\u307e\u3059",category:"howto"},l=void 0,c={unversionedId:"faq/can-i-specify-relational-data-by-slug-when-adding-updating-content-via-api",id:"faq/can-i-specify-relational-data-by-slug-when-adding-updating-content-via-api",title:"API\u306b\u3088\u308b\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u8ffd\u52a0/\u66f4\u65b0\u6642\u306b\u95a2\u9023\u60c5\u5831\u3092slug\u3067\u6307\u5b9a\u3067\u304d\u307e\u3059\u304b",description:"profile API\u306f\u4f1a\u54e1\u5236\u30b5\u30a4\u30c8\u3067\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u3044\u308b\u304b\u3069\u3046\u304b\u306e\u30c1\u30a7\u30c3\u30af\u3092\u3059\u308b\u306e\u306b\u5229\u7528\u3067\u304d\u308bAPI\u3068\u306a\u3063\u3066\u304a\u308a\u307e\u3059",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/faq/can-i-specify-relational-data-by-slug-when-adding-updating-content-via-api.mdx",sourceDirName:"faq",slug:"/faq/can-i-specify-relational-data-by-slug-when-adding-updating-content-via-api",permalink:"/ja/docs/faq/can-i-specify-relational-data-by-slug-when-adding-updating-content-via-api",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/can-i-specify-relational-data-by-slug-when-adding-updating-content-via-api.mdx",tags:[],version:"current",frontMatter:{title:"API\u306b\u3088\u308b\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u8ffd\u52a0/\u66f4\u65b0\u6642\u306b\u95a2\u9023\u60c5\u5831\u3092slug\u3067\u6307\u5b9a\u3067\u304d\u307e\u3059\u304b",description:"profile API\u306f\u4f1a\u54e1\u5236\u30b5\u30a4\u30c8\u3067\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u3044\u308b\u304b\u3069\u3046\u304b\u306e\u30c1\u30a7\u30c3\u30af\u3092\u3059\u308b\u306e\u306b\u5229\u7528\u3067\u304d\u308bAPI\u3068\u306a\u3063\u3066\u304a\u308a\u307e\u3059",category:"howto"},sidebar:"faqSidebar",previous:{title:"\u30b3\u30f3\u30c6\u30f3\u30c4\u306eid\u3092\u6307\u5b9a\u3057\u305f\u308a\u5909\u66f4\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u3059\u304b\uff1f",permalink:"/ja/docs/faq/can-i-specify-or-change-topic-ids"},next:{title:"\u30b3\u30f3\u30c6\u30f3\u30c4\u306ebulk_upsert API\u3067\u753b\u50cf\u30fb\u30d5\u30a1\u30a4\u30eb\u9805\u76ee\u306e\u66f4\u65b0\u306f\u3067\u304d\u307e\u3059\u304b\uff1f",permalink:"/ja/docs/faq/can-i-update-topics-files-using-bulk_upsert-api"}},p={},u=[],s={toc:u},d="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{faqs:[{question:"API\u306b\u3088\u308b\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u8ffd\u52a0/\u66f4\u65b0\u6642\u306b\u95a2\u9023\u60c5\u5831\u3092slug\u3067\u6307\u5b9a\u3067\u304d\u307e\u3059\u304b",answer:"profile \u53ef\u80fd\u3067\u3059\u3002\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u95a2\u9023\u60c5\u5831\u9078\u629e\u306fmodule_id\u3092slug\u3067\u6307\u5b9a\u3057\u305f\u30ea\u30af\u30a8\u30b9\u30c8\u306b\u5bfe\u5fdc\u3057\u3066\u3044\u307e\u3059\u3002"}],mdxType:"StructuredDataFaqs"}),(0,a.kt)("p",null,"\u53ef\u80fd\u3067\u3059\u3002\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u95a2\u9023\u60c5\u5831\u9078\u629e\u306f",(0,a.kt)("inlineCode",{parentName:"p"},"module_id"),"\u3092slug\u3067\u6307\u5b9a\u3057\u305f\u30ea\u30af\u30a8\u30b9\u30c8\u306b\u5bfe\u5fdc\u3057\u3066\u3044\u307e\u3059\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u4ee5\u4e0b\u306e\u5f62\u5f0f\u3067\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u3063\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"GET\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u3068\u540c\u3058\u5f62\u5f0f")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"ext_1": {\n  "module_id": "slug",\n  "module_type": "topics"\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u77ed\u7e2e\u8a18\u6cd5")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'"ext_1": "slug"\n')))}f.isMDXComponent=!0}}]);