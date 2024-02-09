"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[23605],{3905:(t,e,a)=>{a.d(e,{Zo:()=>i,kt:()=>f});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),d=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},i=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},c="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,p=t.parentName,i=m(t,["components","mdxType","originalType","parentName"]),c=d(a),u=n,f=c["".concat(p,".").concat(u)]||c[u]||s[u]||o;return a?r.createElement(f,l(l({ref:e},i),{},{components:a})):r.createElement(f,l({ref:e},i))}));function f(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,l=new Array(o);l[0]=u;var m={};for(var p in e)hasOwnProperty.call(e,p)&&(m[p]=e[p]);m.originalType=t,m[c]="string"==typeof t?t:n,l[1]=m;for(var d=2;d<o;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},78277:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>m,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const o={title:"\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9",description:"Kuroco\u306fAPI\u30d5\u30a1\u30fc\u30b9\u30c8\u306eHeadless CMS\u3067\u3059\u3002\u5f93\u6765\u306eCMS\u306e\u3088\u3046\u306b\u30b7\u30b9\u30c6\u30e0\u306b\u7e1b\u3089\u308c\u308b\u3053\u3068\u306a\u304f\u3001\u67d4\u8edf\u306a\u30b7\u30b9\u30c6\u30e0\u306e\u69cb\u7bc9\u304c\u53ef\u80fd\u3068\u306a\u308a\u307e\u3059\u3002\u6b32\u3057\u3044\u6a5f\u80fd\u3092\u3001\u6b32\u3057\u3044\u6642\u306b\u3001\u6b32\u3057\u3044\u3060\u3051\u3001\u9078\u3073\u53d6\u3063\u3066\u304f\u3060\u3055\u3044\u3002"},l=void 0,m={unversionedId:"management/dashboard",id:"management/dashboard",title:"\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9",description:"Kuroco\u306fAPI\u30d5\u30a1\u30fc\u30b9\u30c8\u306eHeadless CMS\u3067\u3059\u3002\u5f93\u6765\u306eCMS\u306e\u3088\u3046\u306b\u30b7\u30b9\u30c6\u30e0\u306b\u7e1b\u3089\u308c\u308b\u3053\u3068\u306a\u304f\u3001\u67d4\u8edf\u306a\u30b7\u30b9\u30c6\u30e0\u306e\u69cb\u7bc9\u304c\u53ef\u80fd\u3068\u306a\u308a\u307e\u3059\u3002\u6b32\u3057\u3044\u6a5f\u80fd\u3092\u3001\u6b32\u3057\u3044\u6642\u306b\u3001\u6b32\u3057\u3044\u3060\u3051\u3001\u9078\u3073\u53d6\u3063\u3066\u304f\u3060\u3055\u3044\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/management/dashboard.md",sourceDirName:"management",slug:"/management/dashboard",permalink:"/ja/docs/management/dashboard",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/management/dashboard.md",tags:[],version:"current",frontMatter:{title:"\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9",description:"Kuroco\u306fAPI\u30d5\u30a1\u30fc\u30b9\u30c8\u306eHeadless CMS\u3067\u3059\u3002\u5f93\u6765\u306eCMS\u306e\u3088\u3046\u306b\u30b7\u30b9\u30c6\u30e0\u306b\u7e1b\u3089\u308c\u308b\u3053\u3068\u306a\u304f\u3001\u67d4\u8edf\u306a\u30b7\u30b9\u30c6\u30e0\u306e\u69cb\u7bc9\u304c\u53ef\u80fd\u3068\u306a\u308a\u307e\u3059\u3002\u6b32\u3057\u3044\u6a5f\u80fd\u3092\u3001\u6b32\u3057\u3044\u6642\u306b\u3001\u6b32\u3057\u3044\u3060\u3051\u3001\u9078\u3073\u53d6\u3063\u3066\u304f\u3060\u3055\u3044\u3002"},sidebar:"documentationSidebar",previous:{title:"Kuroco\u306eSmarty\u3067\u5229\u7528\u53ef\u80fd\u306aPHP\u95a2\u6570",permalink:"/ja/docs/reference/smarty-php-function"},next:{title:"\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9",permalink:"/ja/docs/management/content-structure-topics-group"}},p={},d=[{value:"\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306e\u78ba\u8a8d\u65b9\u6cd5",id:"\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306e\u78ba\u8a8d\u65b9\u6cd5",level:2},{value:"\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306e\u9805\u76ee\u8aac\u660e",id:"\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306e\u9805\u76ee\u8aac\u660e",level:2},{value:"\u5404\u30dc\u30bf\u30f3",id:"\u5404\u30dc\u30bf\u30f3",level:2},{value:"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8",id:"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8",level:2}],i={toc:d},c="wrapper";function s(t){let{components:e,...a}=t;return(0,n.kt)(c,(0,r.Z)({},i,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306e\u78ba\u8a8d\u65b9\u6cd5"},"\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306e\u78ba\u8a8d\u65b9\u6cd5"),(0,n.kt)("p",null,"[\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002  "),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/eea958738f634a1bdfa662270172da62.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/eea958738f634a1bdfa662270172da62.png",alt:"Image from Gyazo"})),(0,n.kt)("h2",{id:"\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306e\u9805\u76ee\u8aac\u660e"},"\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306e\u9805\u76ee\u8aac\u660e"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/bc18821bfe3d40084b6ab32c09772e68.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/bc18821bfe3d40084b6ab32c09772e68.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/22ac9747a237298b99e73416404a101a.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/22ac9747a237298b99e73416404a101a.png",alt:"Image from Gyazo"})),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u9805\u76ee"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8aac\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7ba1\u7406\u30e1\u30e2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7ba1\u7406\u30e1\u30e2\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002",(0,n.kt)("br",null),"[\u7de8\u96c6\u3059\u308b]","\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u30e1\u30e2\u306e\u7de8\u96c6\u304c\u3067\u304d\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u691c\u7d22"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30c6\u30f3\u30c4\u691c\u7d22\u3092\u884c\u3048\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7533\u8acb\u4e2d\u30b3\u30f3\u30c6\u30f3\u30c4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7533\u8acb\u4e2d\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6700\u8fd1\u306e\u66f4\u65b0\u30b3\u30f3\u30c6\u30f3\u30c4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u66f4\u65b0\u3055\u308c\u305f\u30b3\u30f3\u30c6\u30f3\u30c4\u304c\u6700\u65b010\u4ef6\u8868\u793a\u3055\u308c\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u4eca\u6708\u306e\u8ee2\u9001\u91cf"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u4eca\u6708\u5229\u7528\u3057\u305f\u8ee2\u9001\u91cf\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u4eca\u6708\u306e\u8cbb\u7528(\u7121\u6599\u67a01,100\u5186\u9069\u7528\u524d)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u4eca\u6708\u5229\u7528\u3057\u305f\u8cbb\u7528\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5229\u7528\u72b6\u6cc1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1\u9031\u9593\u5206\u306e\u5229\u7528\u72b6\u6cc1\u304c\u30b0\u30e9\u30d5\u3067\u8868\u793a\u3055\u308c\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6700\u65b0\u30b3\u30e1\u30f3\u30c8"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30a2\u30af\u30c6\u30a3\u30d3\u30c6\u30a3\u3067\u8ffd\u52a0\u3055\u308c\u305f\u30b3\u30e1\u30f3\u30c8\u304c\u6700\u65b010\u4ef6\u8868\u793a\u3055\u308c\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30d5\u30a9\u30fc\u30e0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u9001\u4fe1\u3055\u308c\u305f\u30d5\u30a9\u30fc\u30e0\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002")))),(0,n.kt)("h2",{id:"\u5404\u30dc\u30bf\u30f3"},"\u5404\u30dc\u30bf\u30f3"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/7412c1cdb27f900c8321a7a2307a5196.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/7412c1cdb27f900c8321a7a2307a5196.png",alt:"Image from Gyazo"})),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u9805\u76ee"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8aac\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8a2d\u5b9a"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/ja/docs/management/dashboard-widget/"},"\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306e\u30a6\u30a3\u30b8\u30c3\u30c8"),"\u3078\u9077\u79fb\u3057\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7de8\u96c6\u3059\u308b"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7ba1\u7406\u30e1\u30e2\u306e\u7de8\u96c6\u304c\u3067\u304d\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u691c\u7d22\u3059\u308b"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/ja/docs/management/search/"},"\u691c\u7d22"),"\u6a5f\u80fd\u3092\u5229\u7528\u3057\u305f\u30ad\u30fc\u30ef\u30fc\u30c9\u691c\u7d22\u304c\u3067\u304d\u307e\u3059\u3002")))),(0,n.kt)("h2",{id:"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"},"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/ja/docs/tutorials/edit-the-dashboard-view/"},"\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u5229\u7528\u3057\u3066\u7ba1\u7406\u753b\u9762\u306e\u8868\u793a\u3092\u7de8\u96c6\u3059\u308b"))))}s.isMDXComponent=!0}}]);