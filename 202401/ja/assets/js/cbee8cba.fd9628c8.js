"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[10040],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>u});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),p=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=p(t.components);return a.createElement(c.Provider,{value:e},t.children)},d="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,c=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),d=p(n),m=r,u=d["".concat(c,".").concat(m)]||d[m]||g[m]||o;return n?a.createElement(u,i(i({ref:e},s),{},{components:n})):a.createElement(u,i({ref:e},s))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[d]="string"==typeof t?t:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13433:(t,e,n)=>{n.d(e,{Z:()=>r});var a=n(67294);function r(t){let{faqs:e=[]}=t;if(0===(Array.isArray(e)?e.filter((t=>t.question&&t.answer)):[]).length)return null;const n={"@context":"https://schema.org","@type":"FAQPage",mainEntity:e.map((t=>({"@type":"Question",name:t.question,acceptedAnswer:{"@type":"Answer",text:t.answer}})))},r=JSON.stringify(n,null,2);return a.createElement("script",{type:"application/ld+json"},r)}},92234:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var a=n(87462),r=(n(67294),n(3905)),o=n(13433);const i={title:"API\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u3092\u30bf\u30b0\u30ab\u30c6\u30b4\u30ea\u3067\u7d5e\u308a\u8fbc\u307f\u305f\u3044",description:"tag_category_id\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6307\u5b9a\u3057\u3066\u7d5e\u8fbc\u307f\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u3053\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u6307\u5b9a\u306f\u30bf\u30b0\u30ab\u30c6\u30b4\u30ea\u306e\u89aa\u5b50\u95a2\u4fc2\u3092\u8003\u616e\u3057\u307e\u3059\u3002",category:"howto"},l=void 0,c={unversionedId:"faq/filtering-api-responses-by-tag-category",id:"faq/filtering-api-responses-by-tag-category",title:"API\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u3092\u30bf\u30b0\u30ab\u30c6\u30b4\u30ea\u3067\u7d5e\u308a\u8fbc\u307f\u305f\u3044",description:"tag_category_id\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6307\u5b9a\u3057\u3066\u7d5e\u8fbc\u307f\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u3053\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u6307\u5b9a\u306f\u30bf\u30b0\u30ab\u30c6\u30b4\u30ea\u306e\u89aa\u5b50\u95a2\u4fc2\u3092\u8003\u616e\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/faq/filtering-api-responses-by-tag-category.mdx",sourceDirName:"faq",slug:"/faq/filtering-api-responses-by-tag-category",permalink:"/ja/docs/faq/filtering-api-responses-by-tag-category",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/filtering-api-responses-by-tag-category.mdx",tags:[],version:"current",frontMatter:{title:"API\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u3092\u30bf\u30b0\u30ab\u30c6\u30b4\u30ea\u3067\u7d5e\u308a\u8fbc\u307f\u305f\u3044",description:"tag_category_id\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6307\u5b9a\u3057\u3066\u7d5e\u8fbc\u307f\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u3053\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u6307\u5b9a\u306f\u30bf\u30b0\u30ab\u30c6\u30b4\u30ea\u306e\u89aa\u5b50\u95a2\u4fc2\u3092\u8003\u616e\u3057\u307e\u3059\u3002",category:"howto"},sidebar:"faqSidebar",previous:{title:"API\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u3092\u30b3\u30f3\u30c6\u30f3\u30c4\u30ab\u30c6\u30b4\u30ea\u3067\u7d5e\u308a\u8fbc\u307f\u305f\u3044",permalink:"/ja/docs/faq/filtering-api-responses-by-content-category"},next:{title:"\u30d5\u30a9\u30fc\u30e0\u6bce\u306b\u7ba1\u7406\u8005\u5b9b\u901a\u77e5\u30e1\u30fc\u30eb\u306e\u5185\u5bb9\u3092\u5909\u3048\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u3059\u304b\uff1f",permalink:"/ja/docs/faq/how-can-i-change-the-content-of-the-notification-e-mail-for-each-form"}},p={},s=[{value:"\u30b3\u30f3\u30c6\u30f3\u30c4\u4f8b",id:"\u30b3\u30f3\u30c6\u30f3\u30c4\u4f8b",level:2},{value:"tag_category_id\u3067\u306e\u30d5\u30a3\u30eb\u30bf\u30fc",id:"tag_category_id\u3067\u306e\u30d5\u30a3\u30eb\u30bf\u30fc",level:3},{value:"tag_category_id=7\u3092\u6307\u5b9a",id:"tag_category_id7\u3092\u6307\u5b9a",level:4},{value:"tag_category_id=8\u3092\u6307\u5b9a",id:"tag_category_id8\u3092\u6307\u5b9a",level:4},{value:"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8",id:"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8",level:2}],d={toc:s},g="wrapper";function m(t){let{components:e,...n}=t;return(0,r.kt)(g,(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{faqs:[{question:"API\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u3092\u30bf\u30b0\u30ab\u30c6\u30b4\u30ea\u3067\u7d5e\u308a\u8fbc\u307f\u305f\u3044",answer:"tag_category_id\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6307\u5b9a\u3057\u3066\u7d5e\u8fbc\u307f\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u3053\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u6307\u5b9a\u306f\u30bf\u30b0\u30ab\u30c6\u30b4\u30ea\u306e\u89aa\u5b50\u95a2\u4fc2\u3092\u8003\u616e\u3057\u307e\u3059\u3002"}],mdxType:"StructuredDataFaqs"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"tag_category_id"),"\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6307\u5b9a\u3057\u3066\u7d5e\u8fbc\u307f\u3057\u3066\u304f\u3060\u3055\u3044\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u3053\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u6307\u5b9a\u306f\u30bf\u30b0\u30ab\u30c6\u30b4\u30ea\u306e\u89aa\u5b50\u95a2\u4fc2\u3092\u8003\u616e\u3057\u307e\u3059\u3002  "),(0,r.kt)("h2",{id:"\u30b3\u30f3\u30c6\u30f3\u30c4\u4f8b"},"\u30b3\u30f3\u30c6\u30f3\u30c4\u4f8b"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u30d5\u30a3\u30eb\u30bf\u30fc\u3057\u305f\u5834\u5408\u306e\u7d50\u679c\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u30c8\u30d4\u30c3\u30af\u30b9ID"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u30bf\u30a4\u30c8\u30eb"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u30bf\u30b0\u30ab\u30c6\u30b4\u30eaID"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u30bf\u30b0\u30ab\u30c6\u30b4\u30ea\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u30bf\u30b0ID"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u30bf\u30b0\u540d"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1152"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u89aa\u30ab\u30c6\u30b4\u30ea\u306e\u8a18\u4e8b"),(0,r.kt)("td",{parentName:"tr",align:"left"},"7"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u89aa\u30bf\u30b0\u30ab\u30c6\u30b4\u30ea"),(0,r.kt)("td",{parentName:"tr",align:"left"},"186"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u89aa\u30bf\u30b0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1153"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5b50\u30ab\u30c6\u30b4\u30ea\u306e\u8a18\u4e8b"),(0,r.kt)("td",{parentName:"tr",align:"left"},"8"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5b50\u30bf\u30b0\u30ab\u30c6\u30b4\u30ea"),(0,r.kt)("td",{parentName:"tr",align:"left"},"187"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5b50\u30bf\u30b0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1154"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5b6b\u30ab\u30c6\u30b4\u30ea\u306e\u8a18\u4e8b"),(0,r.kt)("td",{parentName:"tr",align:"left"},"9"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5b6b\u30bf\u30b0\u30ab\u30c6\u30b4\u30ea"),(0,r.kt)("td",{parentName:"tr",align:"left"},"188"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5b6b\u30bf\u30b0")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u30bf\u30b0\u30ab\u30c6\u30b4\u30ea\u8a2d\u5b9a\n",(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/7b0c4420598d83f884aa2d5d78e3c32b.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/7b0c4420598d83f884aa2d5d78e3c32b.png",alt:"Image from Gyazo"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u30bf\u30b0\u4e00\u89a7\n",(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/698a6bb0d9a23c7928acca421efea9a9.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/698a6bb0d9a23c7928acca421efea9a9.png",alt:"Image from Gyazo"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u30b3\u30f3\u30c6\u30f3\u30c4\u4e00\u89a7\n",(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/cef0804c19153bddc8c8a6e2aa9cb4d1.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/cef0804c19153bddc8c8a6e2aa9cb4d1.png",alt:"Image from Gyazo"})))),(0,r.kt)("h3",{id:"tag_category_id\u3067\u306e\u30d5\u30a3\u30eb\u30bf\u30fc"},"tag_category_id\u3067\u306e\u30d5\u30a3\u30eb\u30bf\u30fc"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"tag_category_id"),"\u306b\u3088\u308b\u30d5\u30a3\u30eb\u30bf\u30fc\u306f\u30bf\u30b0\u30ab\u30c6\u30b4\u30ea\u306e\u89aa\u5b50\u95a2\u4fc2\u3092\u8003\u616e\u3057\u3001\u6307\u5b9a\u3057\u305f\u30bf\u30b0\u30ab\u30c6\u30b4\u30ea\u53ca\u3073\u305d\u306e\u914d\u4e0b\u306e\u30bf\u30b0\u30ab\u30c6\u30b4\u30ea\u306b\u6240\u5c5e\u3059\u308b\u30bf\u30b0\u304c\u4ed8\u4e0e\u3055\u308c\u305f\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u4e00\u89a7\u304c\u30ec\u30b9\u30dd\u30f3\u30b9\u3055\u308c\u307e\u3059\u3002  "),(0,r.kt)("h4",{id:"tag_category_id7\u3092\u6307\u5b9a"},"tag_category_id=","[7]","\u3092\u6307\u5b9a"),(0,r.kt)("p",null,"\u300c\u89aa\u30ab\u30c6\u30b4\u30ea\u306e\u8a18\u4e8b\u300d\u300c\u5b50\u30ab\u30c6\u30b4\u30ea\u306e\u8a18\u4e8b\u300d\u300c\u5b6b\u30ab\u30c6\u30b4\u30ea\u306e\u8a18\u4e8b\u300d\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002    "),(0,r.kt)("p",null,"Request URL\uff1a",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"https://example.g.kuroco.app/rcms-api/13/news?tag_category_id=7")),(0,r.kt)("p",null,"Response body\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errors": [],\n  "messages": [],\n  "list": [\n    {\n      "topics_id": 1152,\n      "ymd": "2023-02-16",\n      "contents_type": 17,\n      "contents": "",\n      "subject": "\u89aa\u30ab\u30c6\u30b4\u30ea\u306e\u8a18\u4e8b",\n      \u30fb\n      \u30fb\n      \u30fb\n      "tags": [\n        {\n          "tag_id": 186,\n          "tag_nm": "\u89aa\u30bf\u30b0",\n          "open_contents_cnt": 1,\n          "all_contents_cnt": 1,\n          "inst_ymdhi": "2023-02-16T15:40:07+09:00",\n          "update_ymdhi": "2023-02-16T15:40:52+09:00",\n          "tag_category_id": 7,\n          \u30fb\n          \u30fb\n          \u30fb\n        }\n      ],\n      \u30fb\n      \u30fb\n      \u30fb\n    },\n    {\n      "topics_id": 1153,\n      "ymd": "2023-02-16",\n      "contents_type": 54,\n      "contents": "",\n      "subject": "\u5b50\u30ab\u30c6\u30b4\u30ea\u306e\u8a18\u4e8b",\n      \u30fb\n      \u30fb\n      \u30fb\n      "tags": [\n        {\n          "tag_id": 187,\n          "tag_nm": "\u5b50\u30bf\u30b0",\n          "open_contents_cnt": 1,\n          "all_contents_cnt": 1,\n          "inst_ymdhi": "2023-02-16T15:40:21+09:00",\n          "update_ymdhi": "2023-02-16T15:40:52+09:00",\n          "tag_category_id": 8,\n          \u30fb\n          \u30fb\n          \u30fb\n        }\n      ],\n      \u30fb\n      \u30fb\n      \u30fb\n    },\n    {\n      "topics_id": 1154,\n      "ymd": null,\n      "contents_type": 55,\n      "contents": "",\n      "subject": "\u5b6b\u30ab\u30c6\u30b4\u30ea\u306e\u8a18\u4e8b",\n      \u30fb\n      \u30fb\n      \u30fb\n      "tags": [\n        {\n          "tag_id": 188,\n          "tag_nm": "\u5b6b\u30bf\u30b0",\n          "open_contents_cnt": 1,\n          "all_contents_cnt": 1,\n          "inst_ymdhi": "2023-02-16T15:40:34+09:00",\n          "update_ymdhi": "2023-02-16T15:40:52+09:00",\n          "tag_category_id": 9,\n          \u30fb\n          \u30fb\n          \u30fb\n        }\n      ],\n      \u30fb\n      \u30fb\n      \u30fb\n    }\n  ],\n  "pageInfo": {\n    "totalCnt": 3,\n    \u30fb\n    \u30fb\n    \u30fb\n  }\n}\n')),(0,r.kt)("h4",{id:"tag_category_id8\u3092\u6307\u5b9a"},"tag_category_id=","[8]","\u3092\u6307\u5b9a"),(0,r.kt)("p",null,"\u300c\u5b50\u30ab\u30c6\u30b4\u30ea\u306e\u8a18\u4e8b\u300d\u300c\u5b6b\u30ab\u30c6\u30b4\u30ea\u306e\u8a18\u4e8b\u300d\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002      "),(0,r.kt)("p",null,"Request URL\uff1a",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"https://example.g.kuroco.app/rcms-api/13/news?tag_category_id=8")),(0,r.kt)("p",null,"Response body\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errors": [],\n  "messages": [],\n  "list": [\n    {\n      "topics_id": 1153,\n      "ymd": "2023-02-16",\n      "contents_type": 54,\n      "contents": "",\n      "subject": "\u5b50\u30ab\u30c6\u30b4\u30ea\u306e\u8a18\u4e8b",\n      \u30fb\n      \u30fb\n      \u30fb\n      "tags": [\n        {\n          "tag_id": 187,\n          "tag_nm": "\u5b50\u30bf\u30b0",\n          "open_contents_cnt": 1,\n          "all_contents_cnt": 1,\n          "inst_ymdhi": "2023-02-16T15:40:21+09:00",\n          "update_ymdhi": "2023-02-16T15:40:52+09:00",\n          "tag_category_id": 8,\n          \u30fb\n          \u30fb\n          \u30fb\n        }\n      ],\n      \u30fb\n      \u30fb\n      \u30fb\n    },\n    {\n      "topics_id": 1154,\n      "ymd": null,\n      "contents_type": 55,\n      "contents": "",\n      "subject": "\u5b6b\u30ab\u30c6\u30b4\u30ea\u306e\u8a18\u4e8b",\n      \u30fb\n      \u30fb\n      \u30fb\n      "tags": [\n        {\n          "tag_id": 188,\n          "tag_nm": "\u5b6b\u30bf\u30b0",\n          "open_contents_cnt": 1,\n          "all_contents_cnt": 1,\n          "inst_ymdhi": "2023-02-16T15:40:34+09:00",\n          "update_ymdhi": "2023-02-16T15:40:52+09:00",\n          "tag_category_id": 9,\n          \u30fb\n          \u30fb\n          \u30fb\n        }\n      ],\n      \u30fb\n      \u30fb\n      \u30fb\n    }\n  ],\n  "pageInfo": {\n    "totalCnt": 2,\n    \u30fb\n    \u30fb\n    \u30fb\n  }\n}\n')),(0,r.kt)("h2",{id:"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"},"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ja/docs/faq/filtering-api-responses-by-content-category"},"API\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u3092\u30b3\u30f3\u30c6\u30f3\u30c4\u30ab\u30c6\u30b4\u30ea\u3067\u7d5e\u308a\u8fbc\u307f\u305f\u3044"))))}m.isMDXComponent=!0}}]);