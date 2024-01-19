"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[10847],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>y});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),s=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=s(t.components);return a.createElement(c.Provider,{value:e},t.children)},g="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),g=s(n),m=r,y=g["".concat(c,".").concat(m)]||g[m]||d[m]||o;return n?a.createElement(y,i(i({ref:e},p),{},{components:n})):a.createElement(y,i({ref:e},p))}));function y(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[g]="string"==typeof t?t:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13433:(t,e,n)=>{n.d(e,{Z:()=>r});var a=n(67294);function r(t){let{faqs:e=[]}=t;if(0===(Array.isArray(e)?e.filter((t=>t.question&&t.answer)):[]).length)return null;const n={"@context":"https://schema.org","@type":"FAQPage",mainEntity:e.map((t=>({"@type":"Question",name:t.question,acceptedAnswer:{"@type":"Answer",text:t.answer}})))},r=JSON.stringify(n,null,2);return a.createElement("script",{type:"application/ld+json"},r)}},37086:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),o=n(13433);const i={title:"Filtering API responses by tag category",description:"Please specify the parameter `tag_category_id` to filter. The specification of this parameter takes into account the parent-child relationship of tag categories.",category:"howto"},l=void 0,c={unversionedId:"faq/filtering-api-responses-by-tag-category",id:"faq/filtering-api-responses-by-tag-category",title:"Filtering API responses by tag category",description:"Please specify the parameter `tag_category_id` to filter. The specification of this parameter takes into account the parent-child relationship of tag categories.",source:"@site/docs/faq/filtering-api-responses-by-tag-category.mdx",sourceDirName:"faq",slug:"/faq/filtering-api-responses-by-tag-category",permalink:"/docs/faq/filtering-api-responses-by-tag-category",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/filtering-api-responses-by-tag-category.mdx",tags:[],version:"current",frontMatter:{title:"Filtering API responses by tag category",description:"Please specify the parameter `tag_category_id` to filter. The specification of this parameter takes into account the parent-child relationship of tag categories.",category:"howto"},sidebar:"faqSidebar",previous:{title:"Filtering API responses by content category",permalink:"/docs/faq/filtering-api-responses-by-content-category"},next:{title:"Can I modify the contents of the notification e-mails sent to admins?",permalink:"/docs/faq/how-can-i-change-the-content-of-the-notification-e-mail-for-each-form"}},s={},p=[{value:"Content Examples",id:"content-examples",level:2},{value:"Filtering by <code>tag_category_id</code>",id:"filtering-by-tag_category_id",level:3},{value:"Specifying <code>tag_category_id=[7]</code>",id:"specifying-tag_category_id7",level:4},{value:"Specifying <code>tag_category_id=[8]</code>",id:"specifying-tag_category_id8",level:4},{value:"Related Documents",id:"related-documents",level:2}],g={toc:p},d="wrapper";function m(t){let{components:e,...n}=t;return(0,r.kt)(d,(0,a.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{faqs:[{question:"Filtering API responses by tag category",answer:"Please specify the parameter `tag_category_id` to filter. The specification of this parameter takes into account the parent-child relationship of tag categories."}],mdxType:"StructuredDataFaqs"}),(0,r.kt)("p",null,"Specify the ",(0,r.kt)("inlineCode",{parentName:"p"},"tag_category_id")," parameter to filter. The specification of this parameter takes into account the parent-child relationship of tag categories."),(0,r.kt)("h2",{id:"content-examples"},"Content Examples"),(0,r.kt)("p",null,"Results of filtering the following contents are as follows."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Topic ID"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Tag Category ID"),(0,r.kt)("th",{parentName:"tr",align:null},"Tag Category Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Tag ID"),(0,r.kt)("th",{parentName:"tr",align:null},"Tag Name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1152"),(0,r.kt)("td",{parentName:"tr",align:null},"Content of parent category"),(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"Parent tag category"),(0,r.kt)("td",{parentName:"tr",align:null},"186"),(0,r.kt)("td",{parentName:"tr",align:null},"ParentTag")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1153"),(0,r.kt)("td",{parentName:"tr",align:null},"Content of child category"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"Child tag category"),(0,r.kt)("td",{parentName:"tr",align:null},"187"),(0,r.kt)("td",{parentName:"tr",align:null},"ChildTag")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1154"),(0,r.kt)("td",{parentName:"tr",align:null},"Content of grandchild category"),(0,r.kt)("td",{parentName:"tr",align:null},"9"),(0,r.kt)("td",{parentName:"tr",align:null},"Grandchild tag category"),(0,r.kt)("td",{parentName:"tr",align:null},"188"),(0,r.kt)("td",{parentName:"tr",align:null},"GrandchildTag")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Tag category settings\n",(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/16624e7b466528e89ce41d821e8f86df.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/16624e7b466528e89ce41d821e8f86df.png",alt:"Image from Gyazo"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Tag list\n",(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/0d4f1db687e9d1b2f4f6615133f6cb28.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/0d4f1db687e9d1b2f4f6615133f6cb28.png",alt:"Image from Gyazo"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Content list\n",(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/24ba152e439627be8a48089fdc48fcd4.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/24ba152e439627be8a48089fdc48fcd4.png",alt:"Image from Gyazo"})))),(0,r.kt)("h3",{id:"filtering-by-tag_category_id"},"Filtering by ",(0,r.kt)("inlineCode",{parentName:"h3"},"tag_category_id")),(0,r.kt)("p",null,"Filtering by ",(0,r.kt)("inlineCode",{parentName:"p"},"tag_category_id")," takes into account the parent-child relationship of tag categories, and returns a list of content with tags belonging to the specified tag category and its subcategories."),(0,r.kt)("h4",{id:"specifying-tag_category_id7"},"Specifying ",(0,r.kt)("inlineCode",{parentName:"h4"},"tag_category_id=[7]")),(0,r.kt)("p",null,'Displays "Content of parent category", "Content of child category", and "Content of grandchild category".'),(0,r.kt)("p",null,"Request URL:",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"https://example.g.kuroco.app/rcms-api/13/news?tag_category_id=7")),(0,r.kt)("p",null,"Response Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errors": [],\n  "messages": [],\n  "list": [\n    {\n      "topics_id": 1152,\n      "ymd": "2023-02-16",\n      "contents_type": 17,\n      "contents": "",\n      "subject": "Content of parent category",\n      \u30fb\n      \u30fb\n      \u30fb\n      "tags": [\n        {\n          "tag_id": 186,\n          "tag_nm": "ParentTag",\n          "open_contents_cnt": 1,\n          "all_contents_cnt": 1,\n          "inst_ymdhi": "2023-02-16T15:40:07+09:00",\n          "update_ymdhi": "2023-02-16T15:40:52+09:00",\n          "tag_category_id": 7,\n          \u30fb\n          \u30fb\n          \u30fb\n        }\n      ],\n      \u30fb\n      \u30fb\n      \u30fb\n    },\n    {\n      "topics_id": 1153,\n      "ymd": "2023-02-16",\n      "contents_type": 54,\n      "contents": "",\n      "subject": "Content of child category",\n      \u30fb\n      \u30fb\n      \u30fb\n      "tags": [\n        {\n          "tag_id": 187,\n          "tag_nm": "ChildTag",\n          "open_contents_cnt": 1,\n          "all_contents_cnt": 1,\n          "inst_ymdhi": "2023-02-16T15:40:21+09:00",\n          "update_ymdhi": "2023-02-16T15:40:52+09:00",\n          "tag_category_id": 8,\n          \u30fb\n          \u30fb\n          \u30fb\n        }\n      ],\n      \u30fb\n      \u30fb\n      \u30fb\n    },\n    {\n      "topics_id": 1154,\n      "ymd": null,\n      "contents_type": 55,\n      "contents": "",\n      "subject": "Content of grandchild category",\n      \u30fb\n      \u30fb\n      \u30fb\n      "tags": [\n        {\n          "tag_id": 188,\n          "tag_nm": "GrandchildTag",\n          "open_contents_cnt": 1,\n          "all_contents_cnt": 1,\n          "inst_ymdhi": "2023-02-16T15:40:34+09:00",\n          "update_ymdhi": "2023-02-16T15:40:52+09:00",\n          "tag_category_id": 9,\n          \u30fb\n          \u30fb\n          \u30fb\n        }\n      ],\n      \u30fb\n      \u30fb\n      \u30fb\n    }\n  ],\n  "pageInfo": {\n    "totalCnt": 3,\n    \u30fb\n    \u30fb\n    \u30fb\n  }\n}\n')),(0,r.kt)("h4",{id:"specifying-tag_category_id8"},"Specifying ",(0,r.kt)("inlineCode",{parentName:"h4"},"tag_category_id=[8]")),(0,r.kt)("p",null,'Displays "Content of child category" and "Content of grandchild category".'),(0,r.kt)("p",null,"Request URL:",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"https://example.g.kuroco.app/rcms-api/13/news?tag_category_id=8")),(0,r.kt)("p",null,"Response Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errors": [],\n  "messages": [],\n  "list": [\n    {\n      "topics_id": 1153,\n      "ymd": "2023-02-16",\n      "contents_type": 54,\n      "contents": "",\n      "subject": "Content of child category",\n      \u30fb\n      \u30fb\n      \u30fb\n      "tags": [\n        {\n          "tag_id": 187,\n          "tag_nm": "ChildTag",\n          "open_contents_cnt": 1,\n          "all_contents_cnt": 1,\n          "inst_ymdhi": "2023-02-16T15:40:21+09:00",\n          "update_ymdhi": "2023-02-16T15:40:52+09:00",\n          "tag_category_id": 8,\n          \u30fb\n          \u30fb\n          \u30fb\n        }\n      ],\n      \u30fb\n      \u30fb\n      \u30fb\n    },\n    {\n      "topics_id": 1154,\n      "ymd": null,\n      "contents_type": 55,\n      "contents": "",\n      "subject": "Content of grandchild category",\n      \u30fb\n      \u30fb\n      \u30fb\n      "tags": [\n        {\n          "tag_id": 188,\n          "tag_nm": "GrandchildTag",\n          "open_contents_cnt": 1,\n          "all_contents_cnt": 1,\n          "inst_ymdhi": "2023-02-16T15:40:34+09:00",\n          "update_ymdhi": "2023-02-16T15:40:52+09:00",\n          "tag_category_id": 9,\n          \u30fb\n          \u30fb\n          \u30fb\n        }\n      ],\n      \u30fb\n      \u30fb\n      \u30fb\n    }\n  ],\n  "pageInfo": {\n    "totalCnt": 2,\n    \u30fb\n    \u30fb\n    \u30fb\n  }\n}\n')),(0,r.kt)("h2",{id:"related-documents"},"Related Documents"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/faq/filtering-api-responses-by-content-category"},"Narrowing down API responses by content category"))))}m.isMDXComponent=!0}}]);