"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[96056],{3905:(t,e,a)=>{a.d(e,{Zo:()=>l,kt:()=>g});var r=a(67294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,r,o=function(t,e){if(null==t)return{};var a,r,o={},n=Object.keys(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var m=r.createContext({}),s=function(t){var e=r.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},l=function(t){var e=s(t.components);return r.createElement(m.Provider,{value:e},t.children)},i="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var a=t.components,o=t.mdxType,n=t.originalType,m=t.parentName,l=d(t,["components","mdxType","originalType","parentName"]),i=s(a),f=o,g=i["".concat(m,".").concat(f)]||i[f]||c[f]||n;return a?r.createElement(g,p(p({ref:e},l),{},{components:a})):r.createElement(g,p({ref:e},l))}));function g(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var n=a.length,p=new Array(n);p[0]=f;var d={};for(var m in e)hasOwnProperty.call(e,m)&&(d[m]=e[m]);d.originalType=t,d[i]="string"==typeof t?t:o,p[1]=d;for(var s=2;s<n;s++)p[s]=a[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},46300:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>p,default:()=>c,frontMatter:()=>n,metadata:()=>d,toc:()=>s});var r=a(87462),o=(a(67294),a(3905));const n={title:"WordPress\u306eXML\u30d5\u30a1\u30a4\u30eb\u3092Kuroco\u3078\u30a4\u30f3\u30dd\u30fc\u30c8\u3059\u308b",description:"WordPress\u3067\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3057\u305fXML\u30c7\u30fc\u30bf\u53ca\u3073\u30e1\u30c7\u30a3\u30a2\u30d5\u30a1\u30a4\u30eb\u3092Kuroco\u3078\u30a4\u30f3\u30dd\u30fc\u30c8\u3067\u304d\u307e\u3059\u3002"},p=void 0,d={unversionedId:"tutorials/import-wordpress-xml-files-into-kuroco",id:"tutorials/import-wordpress-xml-files-into-kuroco",title:"WordPress\u306eXML\u30d5\u30a1\u30a4\u30eb\u3092Kuroco\u3078\u30a4\u30f3\u30dd\u30fc\u30c8\u3059\u308b",description:"WordPress\u3067\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3057\u305fXML\u30c7\u30fc\u30bf\u53ca\u3073\u30e1\u30c7\u30a3\u30a2\u30d5\u30a1\u30a4\u30eb\u3092Kuroco\u3078\u30a4\u30f3\u30dd\u30fc\u30c8\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/tutorials/import-wordpress-xml-files-into-kuroco.md",sourceDirName:"tutorials",slug:"/tutorials/import-wordpress-xml-files-into-kuroco",permalink:"/ja/docs/tutorials/import-wordpress-xml-files-into-kuroco",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/tutorials/import-wordpress-xml-files-into-kuroco.md",tags:[],version:"current",frontMatter:{title:"WordPress\u306eXML\u30d5\u30a1\u30a4\u30eb\u3092Kuroco\u3078\u30a4\u30f3\u30dd\u30fc\u30c8\u3059\u308b",description:"WordPress\u3067\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3057\u305fXML\u30c7\u30fc\u30bf\u53ca\u3073\u30e1\u30c7\u30a3\u30a2\u30d5\u30a1\u30a4\u30eb\u3092Kuroco\u3078\u30a4\u30f3\u30dd\u30fc\u30c8\u3067\u304d\u307e\u3059\u3002"},sidebar:"documentationSidebar",previous:{title:"Twitter\u3068\u9023\u643a\u3057\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u6295\u7a3f\u6642\u306bTwitter\u3078\u81ea\u52d5\u6295\u7a3f\u3059\u308b",permalink:"/ja/docs/tutorials/setting-up-twitter-integration"},next:{title:"LINE\u30e6\u30fc\u30b6\u30fc\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u4ed8\u3059\u308b",permalink:"/ja/docs/tutorials/how-to-connect-to-line"}},m={},s=[{value:"\u6982\u8981",id:"\u6982\u8981",level:2},{value:"\u5b66\u3079\u308b\u3053\u3068",id:"\u5b66\u3079\u308b\u3053\u3068",level:3},{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:3},{value:"WordPress\u3067\u6295\u7a3f\u30c7\u30fc\u30bf\u3092\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3059\u308b",id:"wordpress\u3067\u6295\u7a3f\u30c7\u30fc\u30bf\u3092\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3059\u308b",level:2},{value:"\u30a4\u30f3\u30dd\u30fc\u30c8\u5148\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u3092\u6e96\u5099\u3059\u308b",id:"\u30a4\u30f3\u30dd\u30fc\u30c8\u5148\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u3092\u6e96\u5099\u3059\u308b",level:2},{value:"WordPress\u30a4\u30f3\u30dd\u30fc\u30bf\u30fc\u3067XML\u30d5\u30a1\u30a4\u30eb\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3059\u308b",id:"wordpress\u30a4\u30f3\u30dd\u30fc\u30bf\u30fc\u3067xml\u30d5\u30a1\u30a4\u30eb\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3059\u308b",level:2},{value:"\u30a4\u30f3\u30dd\u30fc\u30c8\u3055\u308c\u305f\u30c7\u30fc\u30bf\u306e\u78ba\u8a8d",id:"\u30a4\u30f3\u30dd\u30fc\u30c8\u3055\u308c\u305f\u30c7\u30fc\u30bf\u306e\u78ba\u8a8d",level:2},{value:"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8",id:"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8",level:2}],l={toc:s},i="wrapper";function c(t){let{components:e,...a}=t;return(0,o.kt)(i,(0,r.Z)({},l,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u6982\u8981"},"\u6982\u8981"),(0,o.kt)("p",null,"WordPress\u3067\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3057\u305fXML\u30c7\u30fc\u30bf\u53ca\u3073\u30e1\u30c7\u30a3\u30a2\u30d5\u30a1\u30a4\u30eb\u3092Kuroco\u3078\u30a4\u30f3\u30dd\u30fc\u30c8\u3067\u304d\u307e\u3059\u3002  "),(0,o.kt)("h3",{id:"\u5b66\u3079\u308b\u3053\u3068"},"\u5b66\u3079\u308b\u3053\u3068"),(0,o.kt)("p",null,"\u4ee5\u4e0b\u306e\u624b\u9806\u3067WordPress\u306e\u6295\u7a3f\u30c7\u30fc\u30bf\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u307e\u3059\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#wordpress%E3%81%A7%E6%8A%95%E7%A8%BF%E3%83%87%E3%83%BC%E3%82%BF%E3%82%92%E3%82%A8%E3%82%AF%E3%82%B9%E3%83%9D%E3%83%BC%E3%83%88%E3%81%99%E3%82%8B"},"WordPress\u3067\u6295\u7a3f\u30c7\u30fc\u30bf\u3092\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3059\u308b")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#%E3%82%A4%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%88%E5%85%88%E3%81%AE%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84%E5%AE%9A%E7%BE%A9%E3%82%92%E6%BA%96%E5%82%99%E3%81%99%E3%82%8B"},"\u30a4\u30f3\u30dd\u30fc\u30c8\u5148\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u3092\u6e96\u5099\u3059\u308b")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#wordpress%E3%82%A4%E3%83%B3%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%BC%E3%81%A7xml%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%82%92%E3%82%A4%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%88%E3%81%99%E3%82%8B"},"WordPress\u30a4\u30f3\u30dd\u30fc\u30bf\u30fc\u3067XML\u30d5\u30a1\u30a4\u30eb\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3059\u308b")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#%E3%82%A4%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%88%E3%81%95%E3%82%8C%E3%81%9F%E3%83%87%E3%83%BC%E3%82%BF%E3%81%AE%E7%A2%BA%E8%AA%8D"},"\u30a4\u30f3\u30dd\u30fc\u30c8\u3055\u308c\u305f\u30c7\u30fc\u30bf\u306e\u78ba\u8a8d"))),(0,o.kt)("h3",{id:"\u524d\u63d0\u6761\u4ef6"},"\u524d\u63d0\u6761\u4ef6"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"WordPress\u3067\u4f5c\u6210\u3055\u308c\u305f\u4ee5\u4e0b\u306e4\u6295\u7a3f\u3092Kuroco\u306b\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u307e\u3059\u3002",(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("img",{parentName:"li",src:"https://t.gyazo.com/teams/diverta/0a9e79a18ec4ce825996da649ef268f6.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/0a9e79a18ec4ce825996da649ef268f6.png",alt:"Image from Gyazo"})),(0,o.kt)("li",{parentName:"ul"},"\u5404\u6295\u7a3f\u306b\u306f1\u3064\u305a\u3064\u30ab\u30c6\u30b4\u30ea\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3068\u3068\u3057\u307e\u3059\u3002"),(0,o.kt)("li",{parentName:"ul"},"WordPress\u306b\u767b\u9332\u3055\u308c\u305f\u4ee5\u4e0b\u306e\u30ab\u30c6\u30b4\u30ea\u8a2d\u5b9a\u3092Kuroco\u306b\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u307e\u3059\u3002\n",(0,o.kt)("img",{parentName:"li",src:"https://t.gyazo.com/teams/diverta/96ca1bb8158d525ceb63995e4504122e.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/96ca1bb8158d525ceb63995e4504122e.png",alt:"Image from Gyazo"})),(0,o.kt)("li",{parentName:"ul"},"WordPress\u306b\u767b\u9332\u3055\u308c\u305f\u4ee5\u4e0b\u306e\u30e1\u30c7\u30a3\u30a2\u30d5\u30a1\u30a4\u30eb\u3092Kuroco\u306b\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u307e\u3059\u3002",(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("img",{parentName:"li",src:"https://t.gyazo.com/teams/diverta/51a89db6f5ee6d8c973423462bd0740c.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/51a89db6f5ee6d8c973423462bd0740c.png",alt:"Image from Gyazo"}))),(0,o.kt)("h2",{id:"wordpress\u3067\u6295\u7a3f\u30c7\u30fc\u30bf\u3092\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3059\u308b"},"WordPress\u3067\u6295\u7a3f\u30c7\u30fc\u30bf\u3092\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3059\u308b"),(0,o.kt)("p",null,"\u307e\u305a\u306f",(0,o.kt)("a",{parentName:"p",href:"https://wordpress.com/ja/support/export/"},"WordPress\u306e\u30de\u30cb\u30e5\u30a2\u30eb"),"\u3092\u53c2\u8003\u306b\u3001\u6295\u7a3f\u30c7\u30fc\u30bf\u3092\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3057\u307e\u3059\u3002"),(0,o.kt)("p",null,"WordPress\u7ba1\u7406\u753b\u9762\u306e\u30b5\u30a4\u30c9\u30e1\u30cb\u30e5\u30fc\u304b\u3089","[\u30c4\u30fc\u30eb]","->","[\u30a8\u30af\u30b9\u30dd\u30fc\u30c8]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/eed680d6ad75ac70f974fb0bbb03b75a.jpg?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/eed680d6ad75ac70f974fb0bbb03b75a.jpg",alt:"Image from Gyazo"})),(0,o.kt)("p",null,"\u300c\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u300d\u306e","[\u3059\u3079\u3066\u30a8\u30af\u30b9\u30dd\u30fc\u30c8]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/f0aa76e514fb5ea117b12f56596e46fe.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/f0aa76e514fb5ea117b12f56596e46fe.png",alt:"Image from Gyazo"})),(0,o.kt)("p",null,"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u30ea\u30f3\u30af\u304c\u4f5c\u6210\u3055\u308c\u308b\u306e\u3067","[\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u30c7\u30fc\u30bf\u306eXML\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u307e\u3059\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","ZIP\u5727\u7e2e\u3055\u308c\u3066\u3044\u308b\u306e\u3067\u3001\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u5f8c\u306b\u89e3\u51cd\u3057\u3066\u304a\u304d\u307e\u3059\u3002",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/3ab248834fede44a98ebee3e46806c73.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/3ab248834fede44a98ebee3e46806c73.png",alt:"Image from Gyazo"})),(0,o.kt)("p",null,"\u7d9a\u3044\u3066\u3001\u30e1\u30c7\u30a3\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u306e","[\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001\u30e1\u30c7\u30a3\u30a2\u30e9\u30a4\u30d6\u30e9\u30ea\u306eTAR\u30d5\u30a1\u30a4\u30eb\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u307e\u3059\u3002",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/cd44498870f51377da6877b9df0b3453.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/cd44498870f51377da6877b9df0b3453.png",alt:"Image from Gyazo"})),(0,o.kt)("p",null,"\u4ee5\u4e0a\u3067\u3001WordPress\u5074\u306e\u30c7\u30fc\u30bf\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u306f\u5b8c\u4e86\u3067\u3059\u3002"),(0,o.kt)("h2",{id:"\u30a4\u30f3\u30dd\u30fc\u30c8\u5148\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u3092\u6e96\u5099\u3059\u308b"},"\u30a4\u30f3\u30dd\u30fc\u30c8\u5148\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u3092\u6e96\u5099\u3059\u308b"),(0,o.kt)("p",null,"\u7d9a\u3044\u3066Kuroco\u5074\u306e\u8a2d\u5b9a\u3092\u3057\u3066\u3044\u304d\u307e\u3059\u3002\n\u307e\u305a\u306fWordPress\u306e\u30c7\u30fc\u30bf\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3059\u308b\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002  "),(0,o.kt)("p",null,"\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u4e00\u89a7\u304b\u3089","[\u8ffd\u52a0]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/dbd440dbba2297a001ea0b78b6853c6a.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/dbd440dbba2297a001ea0b78b6853c6a.png",alt:"Image from Gyazo"})),(0,o.kt)("p",null,"\u4ee5\u4e0b\u306e\u8a2d\u5b9a\u3092\u3057\u3066\u3001","[\u8ffd\u52a0\u3059\u308b]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002  "),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"\u9805\u76ee"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u8a2d\u5b9a"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"\u540d\u524d"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u4efb\u610f\u306e\u540d\u524d\u3092\u5165\u529b")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"\u672c\u6587\u306e\u5165\u529b\u65b9\u6cd5"),(0,o.kt)("td",{parentName:"tr",align:"left"},"WYSIWYG\u3092\u9078\u629e")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"\u305d\u306e\u4ed6\u306e\u8a2d\u5b9a"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u30c7\u30d5\u30a9\u30eb\u30c8")))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/0332dfad8678825b283123c2f60e88b1.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/0332dfad8678825b283123c2f60e88b1.png",alt:"Image from Gyazo"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/a5c9bbaa15d121acf77b9ef7d83d42d3.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/a5c9bbaa15d121acf77b9ef7d83d42d3.png",alt:"Image from Gyazo"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/327d6dcee49af998d376ee4357d7cdf4.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/327d6dcee49af998d376ee4357d7cdf4.png",alt:"Image from Gyazo"})),(0,o.kt)("h2",{id:"wordpress\u30a4\u30f3\u30dd\u30fc\u30bf\u30fc\u3067xml\u30d5\u30a1\u30a4\u30eb\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3059\u308b"},"WordPress\u30a4\u30f3\u30dd\u30fc\u30bf\u30fc\u3067XML\u30d5\u30a1\u30a4\u30eb\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3059\u308b"),(0,o.kt)("p",null,"\u5148\u307b\u3069\u4f5c\u6210\u3057\u305f\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u306bWordPress\u306e\u6295\u7a3f\u30c7\u30fc\u30bf\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u3066\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002  "),(0,o.kt)("p",null,"[\u5916\u90e8\u30b7\u30b9\u30c6\u30e0\u9023\u643a]","->","[WordPress]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/6d22fc08ee097d3951d2ec9e1b5bdcad.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/6d22fc08ee097d3951d2ec9e1b5bdcad.png",alt:"Image from Gyazo"})),(0,o.kt)("p",null,"WordPress\u30a4\u30f3\u30dd\u30fc\u30bf\u30fc\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/1c0632b2894c7a9b2d883d1ef6caa9b1.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/1c0632b2894c7a9b2d883d1ef6caa9b1.png",alt:"Image from Gyazo"})),(0,o.kt)("p",null,"\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u8a2d\u5b9a\u3057\u3066","[\u66f4\u65b0\u3059\u308b]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002  "),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"\u9805\u76ee"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u8a2d\u5b9a"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"WordPress XML\u30d5\u30a1\u30a4\u30eb"),(0,o.kt)("td",{parentName:"tr",align:"left"},"WordPress\u304b\u3089\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3057\u305f",(0,o.kt)("inlineCode",{parentName:"td"},".xml"),"\u30d5\u30a1\u30a4\u30eb\u3092\u9078\u629e\u3057\u307e\u3059\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"WordPress\u30e1\u30c7\u30a3\u30a2ZIP\u30d5\u30a1\u30a4\u30eb"),(0,o.kt)("td",{parentName:"tr",align:"left"},"WordPress\u304b\u3089\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3057\u305f",(0,o.kt)("inlineCode",{parentName:"td"},".tar"),"\u30d5\u30a1\u30a4\u30eb\u3092\u9078\u629e\u3057\u307e\u3059\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5bfe\u8c61\u30b3\u30f3\u30c6\u30f3\u30c4"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5148\u307b\u3069\u4f5c\u6210\u3057\u305f\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9(WordPress\u30c7\u30fc\u30bf)\u3092\u9078\u629e\u3057\u307e\u3059\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"\u30b9\u30c6\u30fc\u30bf\u30b9"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u516c\u958b\u306b\u3059\u308b")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5024\u304c\u306a\u3044\u5834\u5408\u306e\u52d5\u4f5c"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u7121\u8996\u3059\u308b")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30c6\u30f3\u30c4\u30ab\u30c6\u30b4\u30ea"),(0,o.kt)("td",{parentName:"tr",align:"left"},"WordPress\u306eXML\u304b\u3089\u30ab\u30c6\u30b4\u30ea\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3059\u308b")))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/696a5d53586fe4b9e8bb2628254778da.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/696a5d53586fe4b9e8bb2628254778da.png",alt:"Image from Gyazo"})),(0,o.kt)("h2",{id:"\u30a4\u30f3\u30dd\u30fc\u30c8\u3055\u308c\u305f\u30c7\u30fc\u30bf\u306e\u78ba\u8a8d"},"\u30a4\u30f3\u30dd\u30fc\u30c8\u3055\u308c\u305f\u30c7\u30fc\u30bf\u306e\u78ba\u8a8d"),(0,o.kt)("p",null,"WordPress\u30c7\u30fc\u30bf\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u4e00\u89a7\u3092\u78ba\u8a8d\u3059\u308b\u3068\u3001\nWordPress\u306e\u6295\u7a3f\u30c7\u30fc\u30bf\u304c\u30a4\u30f3\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u304c\u5206\u304b\u308a\u307e\u3059\u3002 "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/ja/docs/management/content-structure-topics/"},"\u30b3\u30f3\u30c6\u30f3\u30c4\u4e00\u89a7"),"\n",(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/20cfc623f0f5f666fe21631978a044ba.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/20cfc623f0f5f666fe21631978a044ba.png",alt:"Image from Gyazo"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/ja/docs/management/content-structure-topics-category/"},"\u30b3\u30f3\u30c6\u30f3\u30c4\u30ab\u30c6\u30b4\u30ea\u4e00\u89a7"),"\n",(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/ba7c1148d013e4c94d582517b79c1920.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/ba7c1148d013e4c94d582517b79c1920.png",alt:"Image from Gyazo"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/ja/docs/management/file-manager/"},"\u30d5\u30a1\u30a4\u30eb\u30de\u30cd\u30fc\u30b8\u30e3\u30fc"),"\n",(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/8024d8f2e2df5f3b904194afb9372eae.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/8024d8f2e2df5f3b904194afb9372eae.png",alt:"Image from Gyazo"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/119eda8e7bdf33c813bbc5d1b45a1bc6.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/119eda8e7bdf33c813bbc5d1b45a1bc6.png",alt:"Image from Gyazo"})))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"\u73fe\u5728\u3001XML\u306e\u30a4\u30f3\u30dd\u30fc\u30c8\u52d5\u4f5c\u3067\u3001\u30ab\u30c6\u30b4\u30ea\u306e\u30a4\u30f3\u30dd\u30fc\u30c8\u3068\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u30a4\u30f3\u30dd\u30fc\u30c8\u304c\u540c\u6642\u306b\u52d5\u4f5c\u3057\u307e\u305b\u3093\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u30ab\u30c6\u30b4\u30ea\u306e\u307f\u3057\u304b\u30a4\u30f3\u30dd\u30fc\u30c8\u3055\u308c\u306a\u304b\u3063\u305f\u5834\u5408\u306f\u540c\u3058XML\u30d5\u30a1\u30a4\u30eb\u3067\u518d\u5ea6\u30a4\u30f3\u30dd\u30fc\u30c8\u306e\u4f5c\u696d\u3092\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,o.kt)("h2",{id:"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"},"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/ja/docs/management/wordpress"},"WordPress"))))}c.isMDXComponent=!0}}]);