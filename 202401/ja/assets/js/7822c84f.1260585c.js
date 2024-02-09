"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[6121],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>m});var n=r(67294);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var s=n.createContext({}),l=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},c=function(t){var e=l(t.components);return n.createElement(s.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},b=n.forwardRef((function(t,e){var r=t.components,i=t.mdxType,a=t.originalType,s=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),p=l(r),b=i,m=p["".concat(s,".").concat(b)]||p[b]||d[b]||a;return r?n.createElement(m,o(o({ref:e},c),{},{components:r})):n.createElement(m,o({ref:e},c))}));function m(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=r.length,o=new Array(a);o[0]=b;var u={};for(var s in e)hasOwnProperty.call(e,s)&&(u[s]=e[s]);u.originalType=t,u[p]="string"==typeof t?t:i,o[1]=u;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},13433:(t,e,r)=>{r.d(e,{Z:()=>i});var n=r(67294);function i(t){let{faqs:e=[]}=t;if(0===(Array.isArray(e)?e.filter((t=>t.question&&t.answer)):[]).length)return null;const r={"@context":"https://schema.org","@type":"FAQPage",mainEntity:e.map((t=>({"@type":"Question",name:t.question,acceptedAnswer:{"@type":"Answer",text:t.answer}})))},i=JSON.stringify(r,null,2);return n.createElement("script",{type:"application/ld+json"},i)}},60897:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>u,default:()=>b,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),i=(r(67294),r(3905)),a=r(13433);const o={title:"Diverta\u7ba1\u7406\u306eGitHub\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u306f\u53ef\u80fd\u3067\u3059\u304b\uff1f",description:"\u7279\u5b9a\u306e\u6761\u4ef6\u3092\u6e80\u305f\u3059\u5834\u5408\u3001\u30c7\u30a3\u30d0\u30fc\u30bf\u7ba1\u7406\u306eGitHub\u30ea\u30dd\u30b8\u30c8\u30ea\u306b2\u30a2\u30ab\u30a6\u30f3\u30c8\u307e\u3067\u62db\u5f85\u304c\u53ef\u80fd\u3067\u3059\u3002",category:"other"},u=void 0,s={unversionedId:"faq/is-it-possible-to-use-a-diverta-managed-github-repository",id:"faq/is-it-possible-to-use-a-diverta-managed-github-repository",title:"Diverta\u7ba1\u7406\u306eGitHub\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u306f\u53ef\u80fd\u3067\u3059\u304b\uff1f",description:"\u7279\u5b9a\u306e\u6761\u4ef6\u3092\u6e80\u305f\u3059\u5834\u5408\u3001\u30c7\u30a3\u30d0\u30fc\u30bf\u7ba1\u7406\u306eGitHub\u30ea\u30dd\u30b8\u30c8\u30ea\u306b2\u30a2\u30ab\u30a6\u30f3\u30c8\u307e\u3067\u62db\u5f85\u304c\u53ef\u80fd\u3067\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/faq/is-it-possible-to-use-a-diverta-managed-github-repository.mdx",sourceDirName:"faq",slug:"/faq/is-it-possible-to-use-a-diverta-managed-github-repository",permalink:"/ja/docs/faq/is-it-possible-to-use-a-diverta-managed-github-repository",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/is-it-possible-to-use-a-diverta-managed-github-repository.mdx",tags:[],version:"current",frontMatter:{title:"Diverta\u7ba1\u7406\u306eGitHub\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u306f\u53ef\u80fd\u3067\u3059\u304b\uff1f",description:"\u7279\u5b9a\u306e\u6761\u4ef6\u3092\u6e80\u305f\u3059\u5834\u5408\u3001\u30c7\u30a3\u30d0\u30fc\u30bf\u7ba1\u7406\u306eGitHub\u30ea\u30dd\u30b8\u30c8\u30ea\u306b2\u30a2\u30ab\u30a6\u30f3\u30c8\u307e\u3067\u62db\u5f85\u304c\u53ef\u80fd\u3067\u3059\u3002",category:"other"},sidebar:"faqSidebar",previous:{title:"\u95b2\u89a7\u6a29\u9650\u306e\u306a\u3044\u30d5\u30a1\u30a4\u30eb\u3078\u30a2\u30af\u30bb\u30b9\u3057\u305f\u5834\u5408\u306b\u4efb\u610f\u306e\u30da\u30fc\u30b8\u306b\u30ea\u30c0\u30a4\u30ec\u30af\u30c8\u3055\u305b\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u3059\u304b\uff1f",permalink:"/ja/docs/faq/is-it-possible-to-redirect-to-any-page-when-accessing-files-in-the-ltd-directory"},next:{title:"\u30e1\u30fc\u30eb\u914d\u4fe1\u6642\u306e\u4ef6\u6570\u5236\u9650\u306f\u3042\u308a\u307e\u3059\u304b\u3002",permalink:"/ja/docs/faq/is-there-a-limit-to-the-number-of-e-mails-i-can-send"}},l={},c=[{value:"\u53c2\u8003:GitHub\u306b\u3064\u3044\u3066",id:"\u53c2\u8003github\u306b\u3064\u3044\u3066",level:2}],p={toc:c},d="wrapper";function b(t){let{components:e,...r}=t;return(0,i.kt)(d,(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)(a.Z,{faqs:[{question:"Diverta\u7ba1\u7406\u306eGitHub\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u306f\u53ef\u80fd\u3067\u3059\u304b\uff1f",answer:"\u7279\u5b9a\u306e\u6761\u4ef6\u3092\u6e80\u305f\u3059\u5834\u5408\u3001\u30c7\u30a3\u30d0\u30fc\u30bf\u7ba1\u7406\u306eGitHub\u30ea\u30dd\u30b8\u30c8\u30ea\u306b2\u30a2\u30ab\u30a6\u30f3\u30c8\u307e\u3067\u62db\u5f85\u304c\u53ef\u80fd\u3067\u3059\u3002"}],mdxType:"StructuredDataFaqs"}),(0,i.kt)("p",null,"\u4e0b\u8a18\u6761\u4ef6\u306e\u5834\u5408\u3001\u30c7\u30a3\u30d0\u30fc\u30bf\u7ba1\u7406\u306eGitHub\u30ea\u30dd\u30b8\u30c8\u30ea\u306b2\u30a2\u30ab\u30a6\u30f3\u30c8\u307e\u3067\u62db\u5f85\u304c\u53ef\u80fd\u3067\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u30c7\u30a3\u30d0\u30fc\u30bf\u3067\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u69cb\u7bc9\u3092\u62c5\u5f53\u3057\u3066\u3044\u308b\u5834\u5408"),(0,i.kt)("li",{parentName:"ul"},"\u6709\u511f\u904b\u7528\u4fdd\u5b88\u30b5\u30dd\u30fc\u30c8\u5951\u7d04\u3092\u9802\u3044\u3066\u3044\u308b\u5834\u5408")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"3\u30a2\u30ab\u30a6\u30f3\u30c8\u76ee\u304b\u3089\u306f\uff11\u30a2\u30ab\u30a6\u30f3\u30c8 1,500\u5186/\u6708 \u306e\u8cbb\u7528\u304c\u304b\u304b\u308a\u307e\u3059\u3002")),(0,i.kt)("p",null,"\u4e0a\u8a18\u306e\u6761\u4ef6\u4ee5\u5916\u306e\u5834\u5408\u3001Diverta\u304c\u7ba1\u7406\u3057\u3066\u3044\u308bGitHub\u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u306f\u4f7f\u7528\u3067\u304d\u307e\u305b\u3093\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","GitHub\u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u4f5c\u6210\u306f\u304a\u5ba2\u69d8\u306b\u3066\u304a\u9858\u3044\u3057\u3066\u304a\u308a\u3001\u5fc5\u8981\u306b\u5fdc\u3058\u3066\u5f0a\u793e\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u62db\u5f85\u3092\u304a\u9858\u3044\u3044\u305f\u3057\u307e\u3059\u3002"),(0,i.kt)("h2",{id:"\u53c2\u8003github\u306b\u3064\u3044\u3066"},"\u53c2\u8003:GitHub\u306b\u3064\u3044\u3066"),(0,i.kt)("p",null,"GitHub\u306e\u30d7\u30e9\u30f3\u306b\u3064\u3044\u3066\u306f\u4e0b\u8a18\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.co.jp/pricing.html"},"GitHub -> \u4fa1\u683c"))),(0,i.kt)("p",null,"GitHub\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u4f5c\u6210\u65b9\u6cd5\u306f\u4e0b\u8a18\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/ja/get-started/signing-up-for-github/signing-up-for-a-new-github-account"},"GitHub Docs -> \u65b0\u3057\u3044 GitHub \u30a2\u30ab\u30a6\u30f3\u30c8\u3078\u306e\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7"))),(0,i.kt)("p",null,"GitHub\u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u4f5c\u6210\u65b9\u6cd5\u306f\u4e0b\u8a18\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/ja/get-started/quickstart/create-a-repo"},"GitHub Docs -> \u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u4f5c\u6210\u3059\u308b"))))}b.isMDXComponent=!0}}]);