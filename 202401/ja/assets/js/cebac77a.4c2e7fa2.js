"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[6842],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>u});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var l=n.createContext({}),c=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=c(t.components);return n.createElement(l.Provider,{value:e},t.children)},m="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),m=c(a),f=r,u=m["".concat(l,".").concat(f)]||m[f]||s[f]||o;return a?n.createElement(u,i(i({ref:e},d),{},{components:a})):n.createElement(u,i({ref:e},d))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,i=new Array(o);i[0]=f;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p[m]="string"==typeof t?t:r,i[1]=p;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},13433:(t,e,a)=>{a.d(e,{Z:()=>r});var n=a(67294);function r(t){let{faqs:e=[]}=t;if(0===(Array.isArray(e)?e.filter((t=>t.question&&t.answer)):[]).length)return null;const a={"@context":"https://schema.org","@type":"FAQPage",mainEntity:e.map((t=>({"@type":"Question",name:t.question,acceptedAnswer:{"@type":"Answer",text:t.answer}})))},r=JSON.stringify(a,null,2);return n.createElement("script",{type:"application/ld+json"},r)}},24291:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>p,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),o=a(13433);const i={title:"API\u3067\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u66f4\u65b0\u30fb\u8ffd\u52a0\u6642\u306b\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u306f\u5229\u7528\u3067\u304d\u307e\u3059\u304b\uff1f",description:"\u53ef\u80fd\u3067\u3059\u3002\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u5185\u5bb9\u3068\u5408\u308f\u305b\u3066\u3001approvalflow_id\u3067\u627f\u8a8d\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u306eid\u3092POST\u3057\u3066\u304f\u3060\u3055\u3044\u3002",category:"howto"},p=void 0,l={unversionedId:"faq/can-i-add-or-update-workflow-content-via-api",id:"faq/can-i-add-or-update-workflow-content-via-api",title:"API\u3067\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u66f4\u65b0\u30fb\u8ffd\u52a0\u6642\u306b\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u306f\u5229\u7528\u3067\u304d\u307e\u3059\u304b\uff1f",description:"\u53ef\u80fd\u3067\u3059\u3002\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u5185\u5bb9\u3068\u5408\u308f\u305b\u3066\u3001approvalflow_id\u3067\u627f\u8a8d\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u306eid\u3092POST\u3057\u3066\u304f\u3060\u3055\u3044\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/faq/can-i-add-or-update-workflow-content-via-api.mdx",sourceDirName:"faq",slug:"/faq/can-i-add-or-update-workflow-content-via-api",permalink:"/ja/docs/faq/can-i-add-or-update-workflow-content-via-api",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/can-i-add-or-update-workflow-content-via-api.mdx",tags:[],version:"current",frontMatter:{title:"API\u3067\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u66f4\u65b0\u30fb\u8ffd\u52a0\u6642\u306b\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u306f\u5229\u7528\u3067\u304d\u307e\u3059\u304b\uff1f",description:"\u53ef\u80fd\u3067\u3059\u3002\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u5185\u5bb9\u3068\u5408\u308f\u305b\u3066\u3001approvalflow_id\u3067\u627f\u8a8d\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u306eid\u3092POST\u3057\u3066\u304f\u3060\u3055\u3044\u3002",category:"howto"},sidebar:"faqSidebar",previous:{title:"\u30d7\u30ec\u30d3\u30e5\u30fc\u6a5f\u80fd\u3067\u526f\u8a00\u8a9e\u306e\u5834\u5408\u306b_lang\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u4ed8\u4e0e\u3067\u304d\u307e\u3059\u304b?",permalink:"/ja/docs/faq/can-i-add-a-_lang-parameter-for-sub-language-in-the-preview-function"},next:{title:"\u7ba1\u7406\u753b\u9762\u306e\u898b\u305f\u76ee\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3067\u304d\u307e\u3059\u304b\uff1f",permalink:"/ja/docs/faq/can-i-adjust-the-appearance-of-the-admin-panel"}},c={},d=[{value:"\u78ba\u8a8d\u65b9\u6cd5",id:"\u78ba\u8a8d\u65b9\u6cd5",level:2},{value:"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8",id:"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8",level:2}],m={toc:d},s="wrapper";function f(t){let{components:e,...a}=t;return(0,r.kt)(s,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{faqs:[{question:"API\u3067\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u66f4\u65b0\u30fb\u8ffd\u52a0\u6642\u306b\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u306f\u5229\u7528\u3067\u304d\u307e\u3059\u304b\uff1f",answer:"\u53ef\u80fd\u3067\u3059\u3002\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u5185\u5bb9\u3068\u5408\u308f\u305b\u3066\u3001approvalflow_id\u3067\u627f\u8a8d\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u306eid\u3092POST\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}],mdxType:"StructuredDataFaqs"}),(0,r.kt)("p",null,"\u53ef\u80fd\u3067\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u5185\u5bb9\u3068\u5408\u308f\u305b\u3066\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"approvalflow_id"),"\u3067\u627f\u8a8d\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u306eid\u3092POST\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h2",{id:"\u78ba\u8a8d\u65b9\u6cd5"},"\u78ba\u8a8d\u65b9\u6cd5"),(0,r.kt)("p",null,"\u307e\u305a\u306f\u5229\u7528\u3059\u308b\u627f\u8a8d\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u5f8c\u307b\u3069\u5229\u7528\u3059\u308b\u306e\u3067\u3001\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u306eID\u3092\u30e1\u30e2\u3057\u3066\u304a\u304d\u307e\u3059\u3002\n",(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/b9fae97e3612666449875607469bb530.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/b9fae97e3612666449875607469bb530.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"\u6b21\u306b\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u8ffd\u52a0\u3092\u3059\u308b\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u9805\u76ee"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8a2d\u5b9a"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30ab\u30c6\u30b4\u30ea\u30fc"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30c6\u30f3\u30c4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30e2\u30c7\u30eb"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Topics, v1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"insert")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"topics_group_id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5bfe\u8c61\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9ID")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u66f4\u65b0\u3092\u3059\u308b\u5834\u5408\u306f\u3001\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3\u304cinsert\u3067\u306f\u306a\u304fupdate\u306b\u306a\u308a\u307e\u3059\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/19d5cbe72afaace06a20d77afdff8d13.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/19d5cbe72afaace06a20d77afdff8d13.png",alt:"Image from Gyazo"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/887673ea3c80d42adbc181468623893f.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/887673ea3c80d42adbc181468623893f.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"\u6700\u5f8c\u306b\u3001Swagger UI\u3067\u4ee5\u4e0b\u306e\u30c7\u30fc\u30bf\u3092\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306bPOST\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"[POST\u30c7\u30fc\u30bf\u4f8b]","[POST\u30c7\u30fc\u30bf\u4f8b]":!0},'{\n  "subject": "Content Title",\n  "contents": "Content",\n  "open_flg": 1,\n  "ymd": "2022-11-07",\n  "approvalflow_id": 1\n}\n')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},'"approvalflow_id": 1'),"\u306e\u90e8\u5206\u306f\u3054\u81ea\u8eab\u306e\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u306eID\u3092\u4f7f\u7528\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,r.kt)("p",null,"\u30b3\u30f3\u30c6\u30f3\u30c4\u4e00\u89a7\u3092\u78ba\u8a8d\u3059\u308b\u3068\u3001\u627f\u8a8d\u5f85\u3061\u306e\u30c7\u30fc\u30bf\u304c\u8ffd\u52a0\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u304c\u5206\u304b\u308a\u307e\u3059\u3002  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/76f2ac7b933c4777f0c2411ccdaaec40.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/76f2ac7b933c4777f0c2411ccdaaec40.png",alt:"Image from Gyazo"})),(0,r.kt)("h2",{id:"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"},"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ja/docs/management/workflow/"},"\u627f\u8a8d\u30ef\u30fc\u30af\u30d5\u30ed\u30fc"))))}f.isMDXComponent=!0}}]);