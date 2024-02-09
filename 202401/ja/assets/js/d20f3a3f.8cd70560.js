"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[52629],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),i=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=i(n),y=r,m=d["".concat(c,".").concat(y)]||d[y]||u[y]||o;return n?a.createElement(m,p(p({ref:t},s),{},{components:n})):a.createElement(m,p({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:r,p[1]=l;for(var i=2;i<o;i++)p[i]=n[i];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},13433:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294);function r(e){let{faqs:t=[]}=e;if(0===(Array.isArray(t)?t.filter((e=>e.question&&e.answer)):[]).length)return null;const n={"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))},r=JSON.stringify(n,null,2);return a.createElement("script",{type:"application/ld+json"},r)}},72303:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>y,frontMatter:()=>p,metadata:()=>c,toc:()=>s});var a=n(87462),r=(n(67294),n(3905)),o=n(13433);const p={title:"API\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u3092\u30b3\u30f3\u30c6\u30f3\u30c4\u30ab\u30c6\u30b4\u30ea\u3067\u7d5e\u308a\u8fbc\u307f\u305f\u3044",description:"contents_type\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6307\u5b9a\u3057\u3066\u7d5e\u8fbc\u307f\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u30b3\u30f3\u30c6\u30f3\u30c4\u30ab\u30c6\u30b4\u30ea\u306e\u89aa\u5b50\u95a2\u4fc2\u3092\u8003\u616e\u3059\u308b\u5834\u5408\u306fcategory_parent_id\u3084exclude_category_parent_id\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u5229\u7528\u3057\u307e\u3059\u3002",category:"howto"},l=void 0,c={unversionedId:"faq/filtering-api-responses-by-content-category",id:"faq/filtering-api-responses-by-content-category",title:"API\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u3092\u30b3\u30f3\u30c6\u30f3\u30c4\u30ab\u30c6\u30b4\u30ea\u3067\u7d5e\u308a\u8fbc\u307f\u305f\u3044",description:"contents_type\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6307\u5b9a\u3057\u3066\u7d5e\u8fbc\u307f\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u30b3\u30f3\u30c6\u30f3\u30c4\u30ab\u30c6\u30b4\u30ea\u306e\u89aa\u5b50\u95a2\u4fc2\u3092\u8003\u616e\u3059\u308b\u5834\u5408\u306fcategory_parent_id\u3084exclude_category_parent_id\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u5229\u7528\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/faq/filtering-api-responses-by-content-category.mdx",sourceDirName:"faq",slug:"/faq/filtering-api-responses-by-content-category",permalink:"/ja/docs/faq/filtering-api-responses-by-content-category",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/filtering-api-responses-by-content-category.mdx",tags:[],version:"current",frontMatter:{title:"API\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u3092\u30b3\u30f3\u30c6\u30f3\u30c4\u30ab\u30c6\u30b4\u30ea\u3067\u7d5e\u308a\u8fbc\u307f\u305f\u3044",description:"contents_type\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6307\u5b9a\u3057\u3066\u7d5e\u8fbc\u307f\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u30b3\u30f3\u30c6\u30f3\u30c4\u30ab\u30c6\u30b4\u30ea\u306e\u89aa\u5b50\u95a2\u4fc2\u3092\u8003\u616e\u3059\u308b\u5834\u5408\u306fcategory_parent_id\u3084exclude_category_parent_id\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u5229\u7528\u3057\u307e\u3059\u3002",category:"howto"},sidebar:"faqSidebar",previous:{title:"Kuroco\u304b\u3089\u9001\u4fe1\u3055\u308c\u308b\u30e1\u30fc\u30eb\u304c\u8ff7\u60d1\u30e1\u30fc\u30eb\u306b\u306a\u3063\u3066\u3057\u307e\u3044\u307e\u3059\u3002\u89e3\u6c7a\u65b9\u6cd5\u3092\u6559\u3048\u3066\u304f\u3060\u3055\u3044\u3002",permalink:"/ja/docs/faq/emails-sent-from-kuroco-are-going-to-spam-what-should-i-do"},next:{title:"API\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u3092\u30bf\u30b0\u30ab\u30c6\u30b4\u30ea\u3067\u7d5e\u308a\u8fbc\u307f\u305f\u3044",permalink:"/ja/docs/faq/filtering-api-responses-by-tag-category"}},i={},s=[{value:"\u30b3\u30f3\u30c6\u30f3\u30c4\u4f8b",id:"\u30b3\u30f3\u30c6\u30f3\u30c4\u4f8b",level:2},{value:"contents_type\u3067\u306e\u30d5\u30a3\u30eb\u30bf\u30fc",id:"contents_type\u3067\u306e\u30d5\u30a3\u30eb\u30bf\u30fc",level:3},{value:"contents_type=17\u3092\u6307\u5b9a",id:"contents_type17\u3092\u6307\u5b9a",level:4},{value:"contents_type=17,54\u3092\u6307\u5b9a",id:"contents_type1754\u3092\u6307\u5b9a",level:4},{value:"category_parent_id\u3067\u306e\u30d5\u30a3\u30eb\u30bf\u30fc",id:"category_parent_id\u3067\u306e\u30d5\u30a3\u30eb\u30bf\u30fc",level:3},{value:"category_parent_id=17\u3092\u6307\u5b9a",id:"category_parent_id17\u3092\u6307\u5b9a",level:4},{value:"category_parent_id=54\u3092\u6307\u5b9a",id:"category_parent_id54\u3092\u6307\u5b9a",level:4},{value:"exclude_category_parent_id\u3067\u306e\u30d5\u30a3\u30eb\u30bf\u30fc",id:"exclude_category_parent_id\u3067\u306e\u30d5\u30a3\u30eb\u30bf\u30fc",level:3},{value:"exclude_category_parent_id=54\u3092\u6307\u5b9a",id:"exclude_category_parent_id54\u3092\u6307\u5b9a",level:4},{value:"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8",id:"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8",level:2}],d={toc:s},u="wrapper";function y(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{faqs:[{question:"API\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u3092\u30b3\u30f3\u30c6\u30f3\u30c4\u30ab\u30c6\u30b4\u30ea\u3067\u7d5e\u308a\u8fbc\u307f\u305f\u3044",answer:"contents_type\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6307\u5b9a\u3057\u3066\u7d5e\u8fbc\u307f\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u30b3\u30f3\u30c6\u30f3\u30c4\u30ab\u30c6\u30b4\u30ea\u306e\u89aa\u5b50\u95a2\u4fc2\u3092\u8003\u616e\u3059\u308b\u5834\u5408\u306fcategory_parent_id\u3084exclude_category_parent_id\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u5229\u7528\u3057\u307e\u3059\u3002"}],mdxType:"StructuredDataFaqs"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"contents_type"),"\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6307\u5b9a\u3057\u3066\u7d5e\u8fbc\u307f\u3057\u3066\u304f\u3060\u3055\u3044\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u30b3\u30f3\u30c6\u30f3\u30c4\u30ab\u30c6\u30b4\u30ea\u306e\u89aa\u5b50\u95a2\u4fc2\u3092\u8003\u616e\u3059\u308b\u5834\u5408\u306f",(0,r.kt)("inlineCode",{parentName:"p"},"category_parent_id"),"\u3084",(0,r.kt)("inlineCode",{parentName:"p"},"exclude_category_parent_id"),"\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u5229\u7528\u3057\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"\u30b3\u30f3\u30c6\u30f3\u30c4\u4f8b"},"\u30b3\u30f3\u30c6\u30f3\u30c4\u4f8b"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u30d5\u30a3\u30eb\u30bf\u30fc\u3057\u305f\u5834\u5408\u306e\u7d50\u679c\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u30c8\u30d4\u30c3\u30af\u30b9ID"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u30bf\u30a4\u30c8\u30eb"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30c6\u30f3\u30c4\u30ab\u30c6\u30b4\u30eaID"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u30ab\u30c6\u30b4\u30ea\u540d"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1152"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u89aa\u30ab\u30c6\u30b4\u30ea\u306e\u8a18\u4e8b"),(0,r.kt)("td",{parentName:"tr",align:"left"},"17"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u89aaNEWS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1153"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5b50\u30ab\u30c6\u30b4\u30ea\u306e\u8a18\u4e8b"),(0,r.kt)("td",{parentName:"tr",align:"left"},"54"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5b50NEWS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1154"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5b6b\u30ab\u30c6\u30b4\u30ea\u306e\u8a18\u4e8b"),(0,r.kt)("td",{parentName:"tr",align:"left"},"55"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5b6bNEWS")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u30b3\u30f3\u30c6\u30f3\u30c4\u30ab\u30c6\u30b4\u30ea\u8a2d\u5b9a\n",(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/bae8bc040d19387a4a4a3fd4ca6cad31.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/bae8bc040d19387a4a4a3fd4ca6cad31.png",alt:"Image from Gyazo"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u30b3\u30f3\u30c6\u30f3\u30c4\u4e00\u89a7\n",(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/7b63f011c03ab287ea84bc56d69059ad.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/7b63f011c03ab287ea84bc56d69059ad.png",alt:"Image from Gyazo"})))),(0,r.kt)("h3",{id:"contents_type\u3067\u306e\u30d5\u30a3\u30eb\u30bf\u30fc"},"contents_type\u3067\u306e\u30d5\u30a3\u30eb\u30bf\u30fc"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"contents_type"),"\u306b\u3088\u308b\u30d5\u30a3\u30eb\u30bf\u30fc\u306f\u30b3\u30f3\u30c6\u30f3\u30c4\u30ab\u30c6\u30b4\u30ea\u306e\u89aa\u5b50\u95a2\u4fc2\u3092\u8003\u616e\u3057\u306a\u3044\u305f\u3081\u3001\u6307\u5b9a\u3057\u305f\u30b3\u30f3\u30c6\u30f3\u30c4\u30ab\u30c6\u30b4\u30ea\u306b\u6240\u5c5e\u3059\u308b\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u4e00\u89a7\u304c\u30ec\u30b9\u30dd\u30f3\u30b9\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("h4",{id:"contents_type17\u3092\u6307\u5b9a"},"contents_type=","[17]","\u3092\u6307\u5b9a"),(0,r.kt)("p",null,"\u300c\u89aa\u30ab\u30c6\u30b4\u30ea\u306e\u8a18\u4e8b\u300d\u306e\u307f\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002  "),(0,r.kt)("p",null,"Request URL\uff1a",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"https://example.g.kuroco.app/rcms-api/13/news?contents_type%5B%5D=17")),(0,r.kt)("p",null,"Response body\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errors": [],\n  "messages": [],\n  "list": [\n    {\n      "topics_id": 1152,\n      "ymd": "2023-02-16",\n      "contents_type": 17,\n      "contents": "",\n      "subject": "\u89aa\u30ab\u30c6\u30b4\u30ea\u306e\u8a18\u4e8b",\n      \u30fb\n      \u30fb\n      \u30fb\n    }\n  ],\n  "pageInfo": {\n    "totalCnt": 1,\n    \u30fb\n    \u30fb\n    \u30fb\n  }\n}\n')),(0,r.kt)("h4",{id:"contents_type1754\u3092\u6307\u5b9a"},"contents_type=","[17,54]","\u3092\u6307\u5b9a"),(0,r.kt)("p",null,"\u300c\u89aa\u30ab\u30c6\u30b4\u30ea\u306e\u8a18\u4e8b\u300d\u3068\u300c\u5b50\u30ab\u30c6\u30b4\u30ea\u306e\u8a18\u4e8b\u300d\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002  "),(0,r.kt)("p",null,"Request URL\uff1a",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"https://example.g.kuroco.app/rcms-api/13/news?contents_type%5B%5D=17&contents_type%5B%5D=54")),(0,r.kt)("p",null,"Response body\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errors": [],\n  "messages": [],\n  "list": [\n    {\n      "topics_id": 1152,\n      "ymd": "2023-02-16",\n      "contents_type": 17,\n      "contents": "",\n      "subject": "\u89aa\u30ab\u30c6\u30b4\u30ea\u306e\u8a18\u4e8b",\n      \u30fb\n      \u30fb\n      \u30fb\n    },\n    {\n      "topics_id": 1153,\n      "ymd": "2023-02-16",\n      "contents_type": 54,\n      "contents": "",\n      "subject": "\u5b50\u30ab\u30c6\u30b4\u30ea\u306e\u8a18\u4e8b",\n      \u30fb\n      \u30fb\n      \u30fb\n    }\n  ],\n  "pageInfo": {\n    "totalCnt": 2,\n    \u30fb\n    \u30fb\n    \u30fb\n  }\n}\n')),(0,r.kt)("h3",{id:"category_parent_id\u3067\u306e\u30d5\u30a3\u30eb\u30bf\u30fc"},"category_parent_id\u3067\u306e\u30d5\u30a3\u30eb\u30bf\u30fc"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"category_parent_id"),"\u306b\u3088\u308b\u30d5\u30a3\u30eb\u30bf\u30fc\u306f\u30b3\u30f3\u30c6\u30f3\u30c4\u30ab\u30c6\u30b4\u30ea\u306e\u89aa\u5b50\u95a2\u4fc2\u3092\u8003\u616e\u3059\u308b\u305f\u3081\u3001\u6307\u5b9a\u3057\u305f\u30b3\u30f3\u30c6\u30f3\u30c4\u30ab\u30c6\u30b4\u30ea\u3068\u305d\u306e\u914d\u4e0b\u306e\u30ab\u30c6\u30b4\u30ea\u306b\u6240\u5c5e\u3059\u308b\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u4e00\u89a7\u304c\u30ec\u30b9\u30dd\u30f3\u30b9\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("h4",{id:"category_parent_id17\u3092\u6307\u5b9a"},"category_parent_id=","[17]","\u3092\u6307\u5b9a"),(0,r.kt)("p",null,"\u300c\u89aa\u30ab\u30c6\u30b4\u30ea\u306e\u8a18\u4e8b\u300d\u300c\u5b50\u30ab\u30c6\u30b4\u30ea\u306e\u8a18\u4e8b\u300d\u300c\u5b6b\u30ab\u30c6\u30b4\u30ea\u306e\u8a18\u4e8b\u300d\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002  "),(0,r.kt)("p",null,"Request URL\uff1a",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"https://example.g.kuroco.app/rcms-api/13/news?category_parent_id%5B%5D=17")),(0,r.kt)("p",null,"Response body\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errors": [],\n  "messages": [],\n  "list": [\n    {\n      "topics_id": 1152,\n      "ymd": "2023-02-16",\n      "contents_type": 17,\n      "contents": "",\n      "subject": "\u89aa\u30ab\u30c6\u30b4\u30ea\u306e\u8a18\u4e8b",\n      \u30fb\n      \u30fb\n      \u30fb\n    },\n    {\n      "topics_id": 1153,\n      "ymd": "2023-02-16",\n      "contents_type": 54,\n      "contents": "",\n      "subject": "\u5b50\u30ab\u30c6\u30b4\u30ea\u306e\u8a18\u4e8b",\n      \u30fb\n      \u30fb\n      \u30fb\n    },\n    {\n      "topics_id": 1154,\n      "ymd": null,\n      "contents_type": 55,\n      "contents": "",\n      "subject": "\u5b6b\u30ab\u30c6\u30b4\u30ea\u306e\u8a18\u4e8b",\n      \u30fb\n      \u30fb\n      \u30fb\n    }\n  ],\n  "pageInfo": {\n    "totalCnt": 3,\n    \u30fb\n    \u30fb\n    \u30fb\n  }\n}\n')),(0,r.kt)("h4",{id:"category_parent_id54\u3092\u6307\u5b9a"},"category_parent_id=","[54]","\u3092\u6307\u5b9a"),(0,r.kt)("p",null,"\u300c\u5b50\u30ab\u30c6\u30b4\u30ea\u306e\u8a18\u4e8b\u300d\u3068\u300c\u5b6b\u30ab\u30c6\u30b4\u30ea\u306e\u8a18\u4e8b\u300d\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002 "),(0,r.kt)("p",null,"Request URL\uff1a",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"https://example.g.kuroco.app/rcms-api/13/news?category_parent_id%5B%5D=54")),(0,r.kt)("p",null,"Response body\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errors": [],\n  "messages": [],\n  "list": [\n    {\n      "topics_id": 1153,\n      "ymd": "2023-02-16",\n      "contents_type": 54,\n      "contents": "",\n      "subject": "\u5b50\u30ab\u30c6\u30b4\u30ea\u306e\u8a18\u4e8b",\n      \u30fb\n      \u30fb\n      \u30fb\n    },\n    {\n      "topics_id": 1154,\n      "ymd": null,\n      "contents_type": 55,\n      "contents": "",\n      "subject": "\u5b6b\u30ab\u30c6\u30b4\u30ea\u306e\u8a18\u4e8b",\n      \u30fb\n      \u30fb\n      \u30fb\n    }\n  ],\n  "pageInfo": {\n    "totalCnt": 2,\n    \u30fb\n    \u30fb\n    \u30fb\n  }\n}\n')),(0,r.kt)("h3",{id:"exclude_category_parent_id\u3067\u306e\u30d5\u30a3\u30eb\u30bf\u30fc"},"exclude_category_parent_id\u3067\u306e\u30d5\u30a3\u30eb\u30bf\u30fc"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"exclude_category_parent_id"),"\u306b\u3088\u308b\u30d5\u30a3\u30eb\u30bf\u30fc\u3092\u4f7f\u3046\u3068\u3001\u6307\u5b9a\u3057\u305f\u30b3\u30f3\u30c6\u30f3\u30c4\u30ab\u30c6\u30b4\u30ea\u3068\u305d\u306e\u914d\u4e0b\u306e\u30ab\u30c6\u30b4\u30ea\u306b\u6240\u5c5e\u3059\u308b\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u4e00\u89a7\u304c\u30ec\u30b9\u30dd\u30f3\u30b9\u304b\u3089\u9664\u5916\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("h4",{id:"exclude_category_parent_id54\u3092\u6307\u5b9a"},"exclude_category_parent_id=","[54]","\u3092\u6307\u5b9a"),(0,r.kt)("p",null,"\u300c\u89aa\u30ab\u30c6\u30b4\u30ea\u306e\u8a18\u4e8b\u300d\u306e\u307f\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,"Request URL\uff1a",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"https://example.g.kuroco.app/rcms-api/13/news?exclude_category_parent_id%5B%5D=54")),(0,r.kt)("p",null,"Response body\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errors": [],\n  "messages": [],\n  "list": [\n    {\n      "topics_id": 1152,\n      "ymd": "2023-02-16",\n      "contents_type": 17,\n      "contents": "",\n      "subject": "\u89aa\u30ab\u30c6\u30b4\u30ea\u306e\u8a18\u4e8b",\n      \u30fb\n      \u30fb\n      \u30fb\n    }\n  ],\n  "pageInfo": {\n    "totalCnt": 1,\n    \u30fb\n    \u30fb\n    \u30fb\n  }\n}\n')),(0,r.kt)("h2",{id:"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"},"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ja/docs/faq/filtering-api-responses-by-tag-category"},"API\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u3092\u30bf\u30b0\u30ab\u30c6\u30b4\u30ea\u3067\u7d5e\u308a\u8fbc\u307f\u305f\u3044"))))}y.isMDXComponent=!0}}]);