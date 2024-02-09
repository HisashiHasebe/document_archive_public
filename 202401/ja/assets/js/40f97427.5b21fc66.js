"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[57049],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),m=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=m(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=m(r),s=n,f=u["".concat(i,".").concat(s)]||u[s]||d[s]||o;return r?a.createElement(f,l(l({ref:t},c),{},{components:r})):a.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=s;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:n,l[1]=p;for(var m=2;m<o;m++)l[m]=r[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},8829:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var a=r(87462),n=(r(67294),r(3905));const o={title:"\u30b0\u30eb\u30fc\u30d7\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9",category:"\u30e1\u30f3\u30d0\u30fc\u7ba1\u7406",weight:15},l=void 0,p={unversionedId:"management/group-upload",id:"management/group-upload",title:"\u30b0\u30eb\u30fc\u30d7\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9",description:"\u30b0\u30eb\u30fc\u30d7\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3067\u306fCSV\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3067\u30b0\u30eb\u30fc\u30d7\u306e\u8a2d\u5b9a\u304c\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/management/group-upload.md",sourceDirName:"management",slug:"/management/group-upload",permalink:"/ja/docs/management/group-upload",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/management/group-upload.md",tags:[],version:"current",frontMatter:{title:"\u30b0\u30eb\u30fc\u30d7\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9",category:"\u30e1\u30f3\u30d0\u30fc\u7ba1\u7406",weight:15},sidebar:"documentationSidebar",previous:{title:"\u30b0\u30eb\u30fc\u30d7",permalink:"/ja/docs/management/group"},next:{title:"\u30b0\u30eb\u30fc\u30d7\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9",permalink:"/ja/docs/management/group-download"}},i={},m=[{value:"\u30b0\u30eb\u30fc\u30d7\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u306e\u78ba\u8a8d\u65b9\u6cd5",id:"\u30b0\u30eb\u30fc\u30d7\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u306e\u78ba\u8a8d\u65b9\u6cd5",level:2},{value:"\u30b0\u30eb\u30fc\u30d7\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u306e\u9805\u76ee\u8aac\u660e",id:"\u30b0\u30eb\u30fc\u30d7\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u306e\u9805\u76ee\u8aac\u660e",level:2},{value:"\u30b0\u30eb\u30fc\u30d7\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u66f4\u65b0\u6642\u306e\u6319\u52d5",id:"\u30b0\u30eb\u30fc\u30d7\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u66f4\u65b0\u6642\u306e\u6319\u52d5",level:2},{value:"\u30e1\u30f3\u30d0\u30fc\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u66f4\u65b0\u6642\u306e\u6319\u52d5",id:"\u30e1\u30f3\u30d0\u30fc\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u66f4\u65b0\u6642\u306e\u6319\u52d5",level:2}],c={toc:m},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u30b0\u30eb\u30fc\u30d7\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3067\u306fCSV\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3067\u30b0\u30eb\u30fc\u30d7\u306e\u8a2d\u5b9a\u304c\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("h2",{id:"\u30b0\u30eb\u30fc\u30d7\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u306e\u78ba\u8a8d\u65b9\u6cd5"},"\u30b0\u30eb\u30fc\u30d7\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u306e\u78ba\u8a8d\u65b9\u6cd5"),(0,n.kt)("p",null,"[\u30e1\u30f3\u30d0\u30fc\u7ba1\u7406]"," -> ","[\u30b0\u30eb\u30fc\u30d7]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/8e9822efe79c74da6b654f354bd93b52.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/8e9822efe79c74da6b654f354bd93b52.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"\u753b\u9762\u30bf\u30a4\u30c8\u30eb\u306e\u4e0a\u306e\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u30e1\u30cb\u30e5\u30fc\u304b\u3089","[\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/11a3b29d3fd3f46d0d57568e9b0b706e.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/11a3b29d3fd3f46d0d57568e9b0b706e.png",alt:"Image from Gyazo"})),(0,n.kt)("h2",{id:"\u30b0\u30eb\u30fc\u30d7\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u306e\u9805\u76ee\u8aac\u660e"},"\u30b0\u30eb\u30fc\u30d7\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u306e\u9805\u76ee\u8aac\u660e"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/f6538f82c972207b71cdf43aee566a64.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/f6538f82c972207b71cdf43aee566a64.png",alt:"Image from Gyazo"})),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u9805\u76ee"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8aac\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30d5\u30a1\u30a4\u30eb\u8a2d\u5b9a(\u30b0\u30eb\u30fc\u30d7)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"[\u30d5\u30a1\u30a4\u30eb\u3092\u9078\u629e]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308bCSV\u30d5\u30a1\u30a4\u30eb\u3092\u9078\u629e\u3057\u307e\u3059\u3002",(0,n.kt)("br",null),"[\u30b5\u30f3\u30d7\u30eb\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9]","\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u5f62\u5f0f\u3092\u78ba\u8a8d\u3059\u308b\u305f\u3081\u306e\u30b5\u30f3\u30d7\u30eb\u30d5\u30a1\u30a4\u30eb\u304c\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3067\u304d\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30d5\u30a1\u30a4\u30eb\u8a2d\u5b9a(\u30e1\u30f3\u30d0\u30fc)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"[\u30d5\u30a1\u30a4\u30eb\u3092\u9078\u629e]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308bCSV\u30d5\u30a1\u30a4\u30eb\u3092\u9078\u629e\u3057\u307e\u3059\u3002",(0,n.kt)("br",null),"[\u30b5\u30f3\u30d7\u30eb\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9]","\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u5f62\u5f0f\u3092\u78ba\u8a8d\u3059\u308b\u305f\u3081\u306e\u30b5\u30f3\u30d7\u30eb\u30d5\u30a1\u30a4\u30eb\u304c\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3067\u304d\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6587\u5b57\u30b3\u30fc\u30c9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\u30d5\u30a1\u30a4\u30eb\u306e\u6587\u5b57\u30b3\u30fc\u30c9\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002")))),(0,n.kt)("h2",{id:"\u30b0\u30eb\u30fc\u30d7\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u66f4\u65b0\u6642\u306e\u6319\u52d5"},"\u30b0\u30eb\u30fc\u30d7\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u66f4\u65b0\u6642\u306e\u6319\u52d5"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u65b0\u898f\u8ffd\u52a0\uff1a\u30b0\u30eb\u30fc\u30d7ID\u304c\u7a7a\u306e\u5834\u5408\u306f\u3001\u65b0\u898f\u8ffd\u52a0\u306b\u306a\u308a\u307e\u3059\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u66f4\u65b0\uff1a\u30b0\u30eb\u30fc\u30d7ID\u304c\u5b58\u5728\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u3001\u66f4\u65b0\u306b\u306a\u308a\u307e\u3059\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u524a\u9664\uff1a\u30b0\u30eb\u30fc\u30d7ID\u3092\u6307\u5b9a\u3057\u3066\u3001\u524a\u9664\u30d5\u30e9\u30b0\u306b1\u3092\u5165\u308c\u308b\u3068\u3001\u524a\u9664\u306b\u306a\u308a\u307e\u3059\u3002")),(0,n.kt)("h2",{id:"\u30e1\u30f3\u30d0\u30fc\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u66f4\u65b0\u6642\u306e\u6319\u52d5"},"\u30e1\u30f3\u30d0\u30fc\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u66f4\u65b0\u6642\u306e\u6319\u52d5"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u8ffd\u52a0\uff1a\u30b0\u30eb\u30fc\u30d7ID\u3068\u30e1\u30f3\u30d0\u30fcID\u3092\u6307\u5b9a\u3057\u3066\u3001\u524a\u9664\u30d5\u30e9\u30b0\u306b0\u3092\u5165\u308c\u308b\u3068\u3001\u30b0\u30eb\u30fc\u30d7\u306b\u6240\u5c5e\u3059\u308b\u30e1\u30f3\u30d0\u30fc\u306e\u8ffd\u52a0\u306b\u306a\u308a\u307e\u3059\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u524a\u9664\uff1a\u30b0\u30eb\u30fc\u30d7ID\u3068\u30e1\u30f3\u30d0\u30fcID\u3092\u6307\u5b9a\u3057\u3066\u3001\u524a\u9664\u30d5\u30e9\u30b0\u306b1\u3092\u5165\u308c\u308b\u3068\u3001\u30b0\u30eb\u30fc\u30d7\u306b\u6240\u5c5e\u3059\u308b\u30e1\u30f3\u30d0\u30fc\u306e\u524a\u9664\u306b\u306a\u308a\u307e\u3059\u3002")))}d.isMDXComponent=!0}}]);