"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[27437],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},m="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),m=p(n),u=r,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(f,i(i({ref:e},c),{},{components:n})):a.createElement(f,i({ref:e},c))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[m]="string"==typeof t?t:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},13433:(t,e,n)=>{n.d(e,{Z:()=>r});var a=n(67294);function r(t){let{faqs:e=[]}=t;if(0===(Array.isArray(e)?e.filter((t=>t.question&&t.answer)):[]).length)return null;const n={"@context":"https://schema.org","@type":"FAQPage",mainEntity:e.map((t=>({"@type":"Question",name:t.question,acceptedAnswer:{"@type":"Answer",text:t.answer}})))},r=JSON.stringify(n,null,2);return a.createElement("script",{type:"application/ld+json"},r)}},36749:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),o=n(13433);const i={title:"\u30d5\u30a9\u30fc\u30e0\u306e\u56de\u7b54\u30921\u30e6\u30fc\u30b6\u30fc1\u56de\u307e\u3067\u306b\u3067\u304d\u307e\u3059\u304b\uff1f",description:"\u5bfe\u8c61\u306e\u30e6\u30fc\u30b6\u30fc\u304c\u56de\u7b54\u3092\u9001\u4ed8\u6e08\u307f\u304b\u5426\u304b\u3092\u5224\u5225\u3059\u308b\u305f\u3081\u306e\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u4f5c\u6210\u3057\u3001\u305d\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u306b\u3088\u3063\u3066\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u306e\u8868\u793a\u3092\u5207\u308a\u66ff\u3048\u308b\u3088\u3046\u306b\u5bfe\u5fdc\u3057\u3066\u304f\u3060\u3055\u3044\u3002",category:"howto"},l=void 0,s={unversionedId:"faq/how-to-limit-form-responses-to-once-per-user",id:"faq/how-to-limit-form-responses-to-once-per-user",title:"\u30d5\u30a9\u30fc\u30e0\u306e\u56de\u7b54\u30921\u30e6\u30fc\u30b6\u30fc1\u56de\u307e\u3067\u306b\u3067\u304d\u307e\u3059\u304b\uff1f",description:"\u5bfe\u8c61\u306e\u30e6\u30fc\u30b6\u30fc\u304c\u56de\u7b54\u3092\u9001\u4ed8\u6e08\u307f\u304b\u5426\u304b\u3092\u5224\u5225\u3059\u308b\u305f\u3081\u306e\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u4f5c\u6210\u3057\u3001\u305d\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u306b\u3088\u3063\u3066\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u306e\u8868\u793a\u3092\u5207\u308a\u66ff\u3048\u308b\u3088\u3046\u306b\u5bfe\u5fdc\u3057\u3066\u304f\u3060\u3055\u3044\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/faq/how-to-limit-form-responses-to-once-per-user.mdx",sourceDirName:"faq",slug:"/faq/how-to-limit-form-responses-to-once-per-user",permalink:"/ja/docs/faq/how-to-limit-form-responses-to-once-per-user",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/how-to-limit-form-responses-to-once-per-user.mdx",tags:[],version:"current",frontMatter:{title:"\u30d5\u30a9\u30fc\u30e0\u306e\u56de\u7b54\u30921\u30e6\u30fc\u30b6\u30fc1\u56de\u307e\u3067\u306b\u3067\u304d\u307e\u3059\u304b\uff1f",description:"\u5bfe\u8c61\u306e\u30e6\u30fc\u30b6\u30fc\u304c\u56de\u7b54\u3092\u9001\u4ed8\u6e08\u307f\u304b\u5426\u304b\u3092\u5224\u5225\u3059\u308b\u305f\u3081\u306e\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u4f5c\u6210\u3057\u3001\u305d\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u306b\u3088\u3063\u3066\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u306e\u8868\u793a\u3092\u5207\u308a\u66ff\u3048\u308b\u3088\u3046\u306b\u5bfe\u5fdc\u3057\u3066\u304f\u3060\u3055\u3044\u3002",category:"howto"},sidebar:"faqSidebar",previous:{title:"\u9078\u629e\u80a2\u6bce\u306b\u7d10\u4ed8\u304f\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u4ef6\u6570\u3092\u53d6\u5f97\u3059\u308b\u65b9\u6cd5\u306f\u3042\u308a\u307e\u3059\u304b\uff1f",permalink:"/ja/docs/faq/how-to-get-the-number-of-contents-linked-to-each-option"},next:{title:"\u30b5\u30a4\u30c8\u5185\u3067\u5229\u7528\u3057\u3066\u3044\u308b\u9759\u7684\u30d5\u30a1\u30a4\u30eb\uff08\u753b\u50cf\u3001JS\u3001CSS\u306a\u3069\uff09\u306f\u3069\u3053\u306b\u914d\u7f6e\u3059\u308b\u306e\u304c\u826f\u3044\u3067\u3057\u3087\u3046\u304b\uff1f",permalink:"/ja/docs/faq/how-to-place-static-files"}},p={},c=[{value:"\u8a2d\u5b9a\u4f8b",id:"\u8a2d\u5b9a\u4f8b",level:2},{value:"\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8",id:"\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8",level:3},{value:"\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u306e\u8a18\u8ff0\u4f8b",id:"\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u306e\u8a18\u8ff0\u4f8b",level:3},{value:"\u56de\u7b54\u6e08\u307f\u306e\u5834\u5408\u306b\u30d5\u30a9\u30fc\u30e0\u306e\u9805\u76ee\u81ea\u4f53\u3092\u975e\u8868\u793a\u306b\u3059\u308b",id:"\u56de\u7b54\u6e08\u307f\u306e\u5834\u5408\u306b\u30d5\u30a9\u30fc\u30e0\u306e\u9805\u76ee\u81ea\u4f53\u3092\u975e\u8868\u793a\u306b\u3059\u308b",level:4},{value:"\u56de\u7b54\u6e08\u307f\u306e\u5834\u5408\u306b\u30d5\u30a9\u30fc\u30e0\u9001\u4fe1\u30dc\u30bf\u30f3\u3092disabled\u306b\u3059\u308b",id:"\u56de\u7b54\u6e08\u307f\u306e\u5834\u5408\u306b\u30d5\u30a9\u30fc\u30e0\u9001\u4fe1\u30dc\u30bf\u30f3\u3092disabled\u306b\u3059\u308b",level:4},{value:"\u56de\u7b54\u6e08\u307f\u306e\u5834\u5408\u306b\u3001\u30d5\u30a9\u30fc\u30e0\u9001\u4fe1\u6642\u306b\u30a8\u30e9\u30fc\u3092\u8fd4\u3059",id:"\u56de\u7b54\u6e08\u307f\u306e\u5834\u5408\u306b\u30d5\u30a9\u30fc\u30e0\u9001\u4fe1\u6642\u306b\u30a8\u30e9\u30fc\u3092\u8fd4\u3059",level:4},{value:"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8",id:"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8",level:2}],m={toc:c},d="wrapper";function u(t){let{components:e,...n}=t;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{faqs:[{question:"\u30d5\u30a9\u30fc\u30e0\u306e\u56de\u7b54\u30921\u30e6\u30fc\u30b6\u30fc1\u56de\u307e\u3067\u306b\u3067\u304d\u307e\u3059\u304b\uff1f",answer:"\u5bfe\u8c61\u306e\u30e6\u30fc\u30b6\u30fc\u304c\u56de\u7b54\u3092\u9001\u4ed8\u6e08\u307f\u304b\u5426\u304b\u3092\u5224\u5225\u3059\u308b\u305f\u3081\u306e\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u4f5c\u6210\u3057\u3001\u305d\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u306b\u3088\u3063\u3066\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u306e\u8868\u793a\u3092\u5207\u308a\u66ff\u3048\u308b\u3088\u3046\u306b\u5bfe\u5fdc\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}],mdxType:"StructuredDataFaqs"}),(0,r.kt)("p",null,"\u5bfe\u8c61\u306e\u30e6\u30fc\u30b6\u30fc\u304c\u56de\u7b54\u3092\u9001\u4ed8\u6e08\u307f\u304b\u5426\u304b\u3092\u5224\u5225\u3059\u308b\u305f\u3081\u306e\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u4f5c\u6210\u3057\u3001\u305d\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u306b\u3088\u3063\u3066\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u306e\u8868\u793a\u3092\u5207\u308a\u66ff\u3048\u308b\u3088\u3046\u306b\u5bfe\u5fdc\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h2",{id:"\u8a2d\u5b9a\u4f8b"},"\u8a2d\u5b9a\u4f8b"),(0,r.kt)("h3",{id:"\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8"},"\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8"),(0,r.kt)("p",null,"Kuroco\u7ba1\u7406\u753b\u9762\u3067\u4ee5\u4e0b\u306e\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\n\u56de\u7b54\u304c\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u306f",(0,r.kt)("inlineCode",{parentName:"p"},"pageInfo.totalCnt"),"\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u304c0\u3068\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u9805\u76ee"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8a2d\u5b9a\u5185\u5bb9"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30d1\u30b9"),(0,r.kt)("td",{parentName:"tr",align:"left"},"check_answer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30ab\u30c6\u30b4\u30ea"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30d5\u30a9\u30fc\u30e0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30e2\u30c7\u30eb"),(0,r.kt)("td",{parentName:"tr",align:"left"},"InquiryMessage")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"list")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"inquiry_id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5bfe\u8c61\u306e\u30d5\u30a9\u30fc\u30e0ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"self_only"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30c1\u30a7\u30c3\u30af\u3092\u5165\u308c\u308b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cnt"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1")))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/fe6a4be07625feee631f36220880f239.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/fe6a4be07625feee631f36220880f239.png",alt:"Image from Gyazo"}),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/a9a99a41be482f8d219cf97566a7e567.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/a9a99a41be482f8d219cf97566a7e567.png",alt:"Image from Gyazo"})),(0,r.kt)("h3",{id:"\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u306e\u8a18\u8ff0\u4f8b"},"\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u306e\u8a18\u8ff0\u4f8b"),(0,r.kt)("h4",{id:"\u56de\u7b54\u6e08\u307f\u306e\u5834\u5408\u306b\u30d5\u30a9\u30fc\u30e0\u306e\u9805\u76ee\u81ea\u4f53\u3092\u975e\u8868\u793a\u306b\u3059\u308b"},"\u56de\u7b54\u6e08\u307f\u306e\u5834\u5408\u306b\u30d5\u30a9\u30fc\u30e0\u306e\u9805\u76ee\u81ea\u4f53\u3092\u975e\u8868\u793a\u306b\u3059\u308b"),(0,r.kt)("p",null,"\u4f8b\u3048\u3070\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u8a18\u8ff0\u3059\u308b\u3068\u56de\u7b54\u6e08\u307f\u306e\u5834\u5408\u306f\u30d5\u30a9\u30fc\u30e0\u306e\u9805\u76ee\u81ea\u4f53\u304c\u8868\u793a\u3055\u308c\u306a\u304f\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markup"},"<template>\n  <div>\n    <div v-if=\"hadSubmitted.pageInfo.totalCnt == 0\">\n      <form>\n        \u30fb\u30fb\u30fb\n        \u30d5\u30a9\u30fc\u30e0\u9805\u76ee\u306e\u8868\u793a\n        \u30fb\u30fb\u30fb\n      </form>\n    </div>\n    <div v-else>\n      \u56de\u7b54\u6e08\u307f\u3067\u3059\u3002\n    </div>\n  </div>\n</template>\n\n<script>\nexport default {\n  async asyncData({ $axios }) {\n    return {\n      response: await $axios.$get('/rcms-api/1/inquiry/1'),\n      hadSubmitted: await $axios.$get('/rcms-api/1/check_answer'),\n    };\n  },\n  methods: {\n    async handleOnSubmit() {\n      \u30fb\u30fb\u30fb\n      \u30d5\u30a9\u30fc\u30e0\u306e\u9001\u4fe1\u51e6\u7406\n      \u30fb\u30fb\u30fb\n    }\n  }\n};\n<\/script>\n")),(0,r.kt)("h4",{id:"\u56de\u7b54\u6e08\u307f\u306e\u5834\u5408\u306b\u30d5\u30a9\u30fc\u30e0\u9001\u4fe1\u30dc\u30bf\u30f3\u3092disabled\u306b\u3059\u308b"},"\u56de\u7b54\u6e08\u307f\u306e\u5834\u5408\u306b\u30d5\u30a9\u30fc\u30e0\u9001\u4fe1\u30dc\u30bf\u30f3\u3092disabled\u306b\u3059\u308b"),(0,r.kt)("p",null,"\u30d5\u30a9\u30fc\u30e0\u306e\u9805\u76ee\u306f\u8868\u793a\u3057\u305f\u307e\u307e\u3001\u56de\u7b54\u6e08\u307f\u306e\u5834\u5408\u306f\u30d5\u30a9\u30fc\u30e0\u306e\u30dc\u30bf\u30f3\u3092disabled\u306b\u3059\u308b\u5834\u5408\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u30dc\u30bf\u30f3\u90e8\u5206\u306e\u8868\u793a\u3092\u5909\u66f4\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markup"},"<template>\n  <div>\n    <form>\n      \u30fb\u30fb\u30fb\n      \u30d5\u30a9\u30fc\u30e0\u9805\u76ee\u306e\u8868\u793a\n      \u30fb\u30fb\u30fb\n      <button v-if=\"hadSubmitted.pageInfo.totalCnt == 0\" @click.prevent=\"handleOnSubmit\">\n        \u9001\u4fe1\u3059\u308b\n      </button>\n      <button v-else disabled>\n        \u56de\u7b54\u6e08\u307f\n      </button>\n    </form>\n  </div>\n</template>\n\n<script>\nexport default {\n  async asyncData({ $axios }) {\n    return {\n      response: await $axios.$get('/rcms-api/1/inquiry/1'),\n      hadSubmitted: await $axios.$get('/rcms-api/1/check_answer'),\n    };\n  },\n  methods: {\n    async handleOnSubmit() {\n      \u30fb\u30fb\u30fb\n      \u30d5\u30a9\u30fc\u30e0\u306e\u9001\u4fe1\u51e6\u7406\n      \u30fb\u30fb\u30fb\n    }\n  }\n};\n<\/script>\n")),(0,r.kt)("h4",{id:"\u56de\u7b54\u6e08\u307f\u306e\u5834\u5408\u306b\u30d5\u30a9\u30fc\u30e0\u9001\u4fe1\u6642\u306b\u30a8\u30e9\u30fc\u3092\u8fd4\u3059"},"\u56de\u7b54\u6e08\u307f\u306e\u5834\u5408\u306b\u3001\u30d5\u30a9\u30fc\u30e0\u9001\u4fe1\u6642\u306b\u30a8\u30e9\u30fc\u3092\u8fd4\u3059"),(0,r.kt)("p",null,"\u4e0a\u8a182\u3064\u306e\u5834\u5408\u306f\u3001\u56de\u7b54\u524d\u306b\u30d5\u30a9\u30fc\u30e0\u30922\u3064\u958b\u3044\u3066\u304a\u304f\u3053\u3068\u3067\u4e8c\u91cd\u56de\u7b54\u304c\u53ef\u80fd\u3067\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u56de\u7b54\u306e\u9001\u4fe1\u6642\u306b\u30c1\u30a7\u30c3\u30af\u3092\u884c\u3046\u306b\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u3057\u307e\u3059\u3002  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markup"},"<template>\n  <div>\n    <form>\n      \u30fb\u30fb\u30fb\n      \u30d5\u30a9\u30fc\u30e0\u9805\u76ee\u306e\u8868\u793a\n      \u30fb\u30fb\u30fb\n    </form>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      error: null,\n    }\n  },\n  async asyncData({ $axios }) {\n    return {\n      response: await $axios.$get('/rcms-api/1/inquiry/1'),\n    };\n  },\n  methods: {\n    async handleOnSubmit() {\n      const hadSubmitted = await this.$axios.$get('/rcms-api/1/check_answer')\n      if (hadSubmitted.pageInfo.totalCnt == 0){\n        \u30fb\u30fb\u30fb\n        \u30d5\u30a9\u30fc\u30e0\u306e\u9001\u4fe1\u51e6\u7406\n        \u30fb\u30fb\u30fb\n      }\n      else{\n        this.error = \"\u56de\u7b54\u6e08\u307f\u3067\u3059\";\n      }\n    }\n  }\n};\n<\/script>\n")),(0,r.kt)("h2",{id:"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"},"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ja/docs/tutorials/setting-up-inquiry-forms/"},"Kuroco\u3068Nuxt.js\u3067\u3001\u30d5\u30a9\u30fc\u30e0\u753b\u9762\u3092\u69cb\u7bc9\u3059\u308b"))))}u.isMDXComponent=!0}}]);