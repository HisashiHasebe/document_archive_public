"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[53993],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>g});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var m=r.createContext({}),p=function(t){var e=r.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=p(t.components);return r.createElement(m.Provider,{value:e},t.children)},s="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,m=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),s=p(a),u=n,g=s["".concat(m,".").concat(u)]||s[u]||c[u]||l;return a?r.createElement(g,i(i({ref:e},d),{},{components:a})):r.createElement(g,i({ref:e},d))}));function g(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var m in e)hasOwnProperty.call(e,m)&&(o[m]=e[m]);o.originalType=t,o[s]="string"==typeof t?t:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4858:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const l={title:"\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u3092\u5229\u7528\u3057\u3066\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u306b\u72ec\u81ea\u306e\u30d0\u30ea\u30c7\u30fc\u30b7\u30e7\u30f3\u3092\u5b9f\u88c5\u3059\u308b",description:"\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u3068Trigger\u3092\u4f7f\u7528\u3057\u3066\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u8ffd\u52a0\u307e\u305f\u306f\u7de8\u96c6\u306b\u72ec\u81ea\u306e\u30d0\u30ea\u30c7\u30fc\u30b7\u30e7\u30f3\u51e6\u7406\u3092\u5b9f\u88c5\u3059\u308b\u65b9\u6cd5\u3092\u89e3\u8aac\u3057\u307e\u3059\u3002\u3053\u306e\u6a5f\u80fd\u3092\u5229\u7528\u3059\u308b\u3068\u3001\u6a19\u6e96\u6a5f\u80fd\u306e\u307f\u3067\u306f\u5b9f\u73fe\u3067\u304d\u306a\u3044\u8907\u96d1\u306a\u5165\u529b\u30c1\u30a7\u30c3\u30af\u3092\u8ffd\u52a0\u3067\u304d\u307e\u3059\u3002"},i=void 0,o={unversionedId:"tutorials/how-to-implement-original-validation-in-contents-edit-by-using-function",id:"tutorials/how-to-implement-original-validation-in-contents-edit-by-using-function",title:"\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u3092\u5229\u7528\u3057\u3066\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u306b\u72ec\u81ea\u306e\u30d0\u30ea\u30c7\u30fc\u30b7\u30e7\u30f3\u3092\u5b9f\u88c5\u3059\u308b",description:"\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u3068Trigger\u3092\u4f7f\u7528\u3057\u3066\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u8ffd\u52a0\u307e\u305f\u306f\u7de8\u96c6\u306b\u72ec\u81ea\u306e\u30d0\u30ea\u30c7\u30fc\u30b7\u30e7\u30f3\u51e6\u7406\u3092\u5b9f\u88c5\u3059\u308b\u65b9\u6cd5\u3092\u89e3\u8aac\u3057\u307e\u3059\u3002\u3053\u306e\u6a5f\u80fd\u3092\u5229\u7528\u3059\u308b\u3068\u3001\u6a19\u6e96\u6a5f\u80fd\u306e\u307f\u3067\u306f\u5b9f\u73fe\u3067\u304d\u306a\u3044\u8907\u96d1\u306a\u5165\u529b\u30c1\u30a7\u30c3\u30af\u3092\u8ffd\u52a0\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/tutorials/how-to-implement-original-validation-in-contents-edit-by-using-function.md",sourceDirName:"tutorials",slug:"/tutorials/how-to-implement-original-validation-in-contents-edit-by-using-function",permalink:"/ja/docs/tutorials/how-to-implement-original-validation-in-contents-edit-by-using-function",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/tutorials/how-to-implement-original-validation-in-contents-edit-by-using-function.md",tags:[],version:"current",frontMatter:{title:"\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u3092\u5229\u7528\u3057\u3066\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u306b\u72ec\u81ea\u306e\u30d0\u30ea\u30c7\u30fc\u30b7\u30e7\u30f3\u3092\u5b9f\u88c5\u3059\u308b",description:"\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u3068Trigger\u3092\u4f7f\u7528\u3057\u3066\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u8ffd\u52a0\u307e\u305f\u306f\u7de8\u96c6\u306b\u72ec\u81ea\u306e\u30d0\u30ea\u30c7\u30fc\u30b7\u30e7\u30f3\u51e6\u7406\u3092\u5b9f\u88c5\u3059\u308b\u65b9\u6cd5\u3092\u89e3\u8aac\u3057\u307e\u3059\u3002\u3053\u306e\u6a5f\u80fd\u3092\u5229\u7528\u3059\u308b\u3068\u3001\u6a19\u6e96\u6a5f\u80fd\u306e\u307f\u3067\u306f\u5b9f\u73fe\u3067\u304d\u306a\u3044\u8907\u96d1\u306a\u5165\u529b\u30c1\u30a7\u30c3\u30af\u3092\u8ffd\u52a0\u3067\u304d\u307e\u3059\u3002"},sidebar:"documentationSidebar",previous:{title:"\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u3092\u5229\u7528\u3057\u3066\u3001API\u306b\u72ec\u81ea\u306e\u30d0\u30ea\u30c7\u30fc\u30b7\u30e7\u30f3\u3092\u5b9f\u88c5\u3059\u308b",permalink:"/ja/docs/tutorials/how-to-implement-original-validation-in-api-by-using-function"},next:{title:"\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u3092\u5229\u7528\u3057\u3066\u3001API\u306e\u30e1\u30a4\u30f3\u51e6\u7406\u306b\u6e21\u3059\u30ea\u30af\u30a8\u30b9\u30c8\u5024\u3092\u66f8\u304d\u63db\u3048\u308b",permalink:"/ja/docs/tutorials/how-to-overwrite-request-for-api-main-process-by-using-function"}},m={},p=[{value:"\u6982\u8981",id:"\u6982\u8981",level:2},{value:"\u5b66\u3079\u308b\u3053\u3068",id:"\u5b66\u3079\u308b\u3053\u3068",level:3},{value:"\u4e8b\u524d\u6e96\u5099",id:"\u4e8b\u524d\u6e96\u5099",level:2},{value:"\u30d0\u30ea\u30c7\u30fc\u30b7\u30e7\u30f3\u3092\u9069\u7528\u3059\u308b\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u3092\u4f5c\u6210\u3059\u308b",id:"\u30d0\u30ea\u30c7\u30fc\u30b7\u30e7\u30f3\u3092\u9069\u7528\u3059\u308b\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u3092\u4f5c\u6210\u3059\u308b",level:3},{value:"\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u3092\u4f5c\u6210\u3059\u308b",id:"\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u3092\u4f5c\u6210\u3059\u308b",level:2},{value:"\u30bf\u30a4\u30c8\u30eb\u30fb\u30ab\u30c6\u30b4\u30ea\u7b49\u3092\u5165\u529b\u3059\u308b",id:"\u30bf\u30a4\u30c8\u30eb\u30ab\u30c6\u30b4\u30ea\u7b49\u3092\u5165\u529b\u3059\u308b",level:3},{value:"\u30d0\u30ea\u30c7\u30fc\u30b7\u30e7\u30f3\u51e6\u7406\u3092\u8a18\u8ff0\u3059\u308b",id:"\u30d0\u30ea\u30c7\u30fc\u30b7\u30e7\u30f3\u51e6\u7406\u3092\u8a18\u8ff0\u3059\u308b",level:3},{value:"\u30a8\u30e9\u30fc\u5909\u6570\u3092\u521d\u671f\u5316\u3059\u308b",id:"\u30a8\u30e9\u30fc\u5909\u6570\u3092\u521d\u671f\u5316\u3059\u308b",level:4},{value:"\u30d0\u30ea\u30c7\u30fc\u30b7\u30e7\u30f3\u51e6\u7406\u3092\u5b9f\u88c5\u3059\u308b",id:"\u30d0\u30ea\u30c7\u30fc\u30b7\u30e7\u30f3\u51e6\u7406\u3092\u5b9f\u88c5\u3059\u308b",level:4},{value:"\u4fdd\u5b58\u3059\u308b",id:"\u4fdd\u5b58\u3059\u308b",level:4},{value:"\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u306b\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u3092\u95a2\u9023\u4ed8\u3051\u308b",id:"\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u306b\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u3092\u95a2\u9023\u4ed8\u3051\u308b",level:2},{value:"\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u30ea\u30b9\u30c8\u753b\u9762\u3067\u3001\u95a2\u9023\u4ed8\u3051\u308b\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u306eID\u3092\u78ba\u8a8d\u3059\u308b",id:"\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u30ea\u30b9\u30c8\u753b\u9762\u3067\u95a2\u9023\u4ed8\u3051\u308b\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u306eid\u3092\u78ba\u8a8d\u3059\u308b",level:3},{value:"\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9ID\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u306b\u95a2\u9023\u4ed8\u3051\u308b",id:"\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9id\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u306b\u95a2\u9023\u4ed8\u3051\u308b",level:3},{value:"\u4fdd\u5b58\u3059\u308b",id:"\u4fdd\u5b58\u3059\u308b-1",level:4},{value:"\u30d0\u30ea\u30c7\u30fc\u30b7\u30e7\u30f3\u306e\u52d5\u4f5c\u3092\u78ba\u8a8d\u3059\u308b",id:"\u30d0\u30ea\u30c7\u30fc\u30b7\u30e7\u30f3\u306e\u52d5\u4f5c\u3092\u78ba\u8a8d\u3059\u308b",level:2},{value:"\u30b3\u30f3\u30c6\u30f3\u30c4\u7de8\u96c6\u3092\u8868\u793a\u3059\u308b",id:"\u30b3\u30f3\u30c6\u30f3\u30c4\u7de8\u96c6\u3092\u8868\u793a\u3059\u308b",level:3},{value:"\u30a8\u30e9\u30fc\u304c\u51fa\u529b\u3055\u308c\u308b\u5024\u3092\u5165\u529b\u3059\u308b",id:"\u30a8\u30e9\u30fc\u304c\u51fa\u529b\u3055\u308c\u308b\u5024\u3092\u5165\u529b\u3059\u308b",level:3},{value:"\u30a8\u30e9\u30fc\u5185\u5bb9\u3092\u78ba\u8a8d\u3059\u308b",id:"\u30a8\u30e9\u30fc\u5185\u5bb9\u3092\u78ba\u8a8d\u3059\u308b",level:3},{value:"\u30d0\u30ea\u30c7\u30fc\u30b7\u30e7\u30f3\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u306a\u3044\u5834\u5408\u306e\u78ba\u8a8d\u30dd\u30a4\u30f3\u30c8",id:"\u30d0\u30ea\u30c7\u30fc\u30b7\u30e7\u30f3\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u306a\u3044\u5834\u5408\u306e\u78ba\u8a8d\u30dd\u30a4\u30f3\u30c8",level:2},{value:"\u30b3\u30fc\u30c9\u4f8b\u306e\u7d39\u4ecb",id:"\u30b3\u30fc\u30c9\u4f8b\u306e\u7d39\u4ecb",level:2},{value:"\u7279\u5b9a\u306e\u6587\u5b57\u5217\u3092\u542b\u3080\u304b\u3069\u3046\u304b\u3092\u30c1\u30a7\u30c3\u30af\u3059\u308b",id:"\u7279\u5b9a\u306e\u6587\u5b57\u5217\u3092\u542b\u3080\u304b\u3069\u3046\u304b\u3092\u30c1\u30a7\u30c3\u30af\u3059\u308b",level:3},{value:"\u6570\u5024\u304b\u3069\u3046\u304b\u3092\u30c1\u30a7\u30c3\u30af\u3059\u308b",id:"\u6570\u5024\u304b\u3069\u3046\u304b\u3092\u30c1\u30a7\u30c3\u30af\u3059\u308b",level:3},{value:"\u7279\u5b9a\u306e\u9805\u76ee\u306b\u4f9d\u5b58\u3057\u305f\u5165\u529b\u30c1\u30a7\u30c3\u30af\u3092\u884c\u3046",id:"\u7279\u5b9a\u306e\u9805\u76ee\u306b\u4f9d\u5b58\u3057\u305f\u5165\u529b\u30c1\u30a7\u30c3\u30af\u3092\u884c\u3046",level:3},{value:"\u7279\u5b9a\u306e\u30b0\u30eb\u30fc\u30d7\u306b\u6240\u5c5e\u3059\u308b\u30e1\u30f3\u30d0\u30fc\u306b\u306e\u307f\u5165\u529b\u30c1\u30a7\u30c3\u30af\u3092\u9069\u7528\u3059\u308b",id:"\u7279\u5b9a\u306e\u30b0\u30eb\u30fc\u30d7\u306b\u6240\u5c5e\u3059\u308b\u30e1\u30f3\u30d0\u30fc\u306b\u306e\u307f\u5165\u529b\u30c1\u30a7\u30c3\u30af\u3092\u9069\u7528\u3059\u308b",level:3},{value:"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8",id:"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8",level:2}],d={toc:p},s="wrapper";function c(t){let{components:e,...a}=t;return(0,n.kt)(s,(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u6982\u8981"},"\u6982\u8981"),(0,n.kt)("p",null,"\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u3068Trigger\u3092\u4f7f\u7528\u3057\u3066\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u8ffd\u52a0\u307e\u305f\u306f\u7de8\u96c6\u306b\u72ec\u81ea\u306e\u30d0\u30ea\u30c7\u30fc\u30b7\u30e7\u30f3\u51e6\u7406\u3092\u5b9f\u88c5\u3059\u308b\u65b9\u6cd5\u3092\u89e3\u8aac\u3057\u307e\u3059\u3002\n\u3053\u306e\u6a5f\u80fd\u3092\u5229\u7528\u3059\u308b\u3068\u3001\u6a19\u6e96\u6a5f\u80fd\u306e\u307f\u3067\u306f\u5b9f\u73fe\u3067\u304d\u306a\u3044\u8907\u96d1\u306a\u5165\u529b\u30c1\u30a7\u30c3\u30af\u3092\u8ffd\u52a0\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u4eca\u56de\u306f\u3001POST\u3055\u308c\u305f\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u304c\u7279\u5b9a\u306e\u30c9\u30e1\u30a4\u30f3\u3068\u4e00\u81f4\u3057\u306a\u3051\u308c\u3070\u30a8\u30e9\u30fc\u3092\u8fd4\u3059\u30d0\u30ea\u30c7\u30fc\u30b7\u30e7\u30f3\u51e6\u7406\u3092\u5b9f\u88c5\u3057\u307e\u3059\u3002"),(0,n.kt)("h3",{id:"\u5b66\u3079\u308b\u3053\u3068"},"\u5b66\u3079\u308b\u3053\u3068"),(0,n.kt)("p",null,"\u4ee5\u4e0b\u306e\u624b\u9806\u3067\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u8ffd\u52a0\u30fb\u7de8\u96c6\u306b\u72ec\u81ea\u306e\u30d0\u30ea\u30c7\u30fc\u30b7\u30e7\u30f3\u51e6\u7406\u3092\u5b9f\u88c5\u3057\u307e\u3059\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#%E4%BA%8B%E5%89%8D%E6%BA%96%E5%82%99"},"\u4e8b\u524d\u6e96\u5099")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#%E3%82%AB%E3%82%B9%E3%82%BF%E3%83%A0%E5%87%A6%E7%90%86%E3%82%92%E4%BD%9C%E6%88%90%E3%81%99%E3%82%8B"},"\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u3092\u4f5c\u6210\u3059\u308b")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#%E3%83%90%E3%83%AA%E3%83%87%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E5%87%A6%E7%90%86%E3%82%92%E8%A8%98%E8%BF%B0%E3%81%99%E3%82%8B"},"\u30d0\u30ea\u30c7\u30fc\u30b7\u30e7\u30f3\u51e6\u7406\u3092\u8a18\u8ff0\u3059\u308b")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#%E3%82%AB%E3%82%B9%E3%82%BF%E3%83%A0%E5%87%A6%E7%90%86%E3%81%AB%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84%E5%AE%9A%E7%BE%A9%E3%82%92%E9%96%A2%E9%80%A3%E4%BB%98%E3%81%91%E3%82%8B"},"\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u306b\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u3092\u95a2\u9023\u4ed8\u3051\u308b")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#%E3%83%90%E3%83%AA%E3%83%87%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%AE%E5%8B%95%E4%BD%9C%E3%82%92%E7%A2%BA%E8%AA%8D%E3%81%99%E3%82%8B"},"\u30d0\u30ea\u30c7\u30fc\u30b7\u30e7\u30f3\u306e\u52d5\u4f5c\u3092\u78ba\u8a8d\u3059\u308b"))),(0,n.kt)("h2",{id:"\u4e8b\u524d\u6e96\u5099"},"\u4e8b\u524d\u6e96\u5099"),(0,n.kt)("h3",{id:"\u30d0\u30ea\u30c7\u30fc\u30b7\u30e7\u30f3\u3092\u9069\u7528\u3059\u308b\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u3092\u4f5c\u6210\u3059\u308b"},"\u30d0\u30ea\u30c7\u30fc\u30b7\u30e7\u30f3\u3092\u9069\u7528\u3059\u308b\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u3092\u4f5c\u6210\u3059\u308b"),(0,n.kt)("p",null,"\u307e\u305a\u3001\u30d0\u30ea\u30c7\u30fc\u30b7\u30e7\u30f3\u3092\u9069\u7528\u3059\u308b\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002  "),(0,n.kt)("p",null,"Kuroco\u7ba1\u7406\u753b\u9762\u306e\u30b5\u30a4\u30c9\u30e1\u30cb\u30e5\u30fc\u304b\u3089","[\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002\n",(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/def54581a1de27a45bbd766c4791fc0f.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/def54581a1de27a45bbd766c4791fc0f.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"\u753b\u9762\u53f3\u4e0a\u306e","[\u8ffd\u52a0]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/82e3ac88abb8a96480247b846012e687.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/82e3ac88abb8a96480247b846012e687.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"\u4ee5\u4e0b\u306e\u901a\u308a\u5165\u529b\u3057\u307e\u3059\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u540d\u524d\uff1a\u30ab\u30b9\u30bf\u30e0\u30d0\u30ea\u30c7\u30fc\u30b7\u30e7\u30f3\u5b9f\u88c5\u5bfe\u8c61\u30b3\u30f3\u30c6\u30f3\u30c4"),(0,n.kt)("li",{parentName:"ul"},"\u30d5\u30a3\u30fc\u30eb\u30c9\uff1a\u4ee5\u4e0b\u306e\u901a\u308a")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/6d96223e0223543d7700ae12644b4642.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/6d96223e0223543d7700ae12644b4642.png",alt:"Image from Gyazo"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/399e9f460cbf771e65517649b8429163.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/399e9f460cbf771e65517649b8429163.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"\u8a2d\u5b9a\u5f8c\u3001","[\u8ffd\u52a0]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002\n",(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/b4bc588664f8166b6f0518c7a9c0c0d0.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/b4bc588664f8166b6f0518c7a9c0c0d0.png",alt:"Image from Gyazo"})),(0,n.kt)("h2",{id:"\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u3092\u4f5c\u6210\u3059\u308b"},"\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u3092\u4f5c\u6210\u3059\u308b"),(0,n.kt)("p",null,"\u30d0\u30ea\u30c7\u30fc\u30b7\u30e7\u30f3\u51e6\u7406\u3092\u8a18\u8ff0\u3059\u308b\u305f\u3081\u306e\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u3092\u7528\u610f\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u30e1\u30cb\u30e5\u30fc\u306e","[\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3]"," -> ","[\u30ab\u30b9\u30bf\u30e0\u51e6\u7406]"," \u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/4a127014f270680b379756edd6ad011d.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/4a127014f270680b379756edd6ad011d.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u4e00\u89a7\u753b\u9762\u306e\u53f3\u4e0a\u306e ","[\u8ffd\u52a0]"," \u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/f7ae889db2883dfbc015cea6e8e92cb5.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/f7ae889db2883dfbc015cea6e8e92cb5.png",alt:"Image from Gyazo"})),(0,n.kt)("h3",{id:"\u30bf\u30a4\u30c8\u30eb\u30ab\u30c6\u30b4\u30ea\u7b49\u3092\u5165\u529b\u3059\u308b"},"\u30bf\u30a4\u30c8\u30eb\u30fb\u30ab\u30c6\u30b4\u30ea\u7b49\u3092\u5165\u529b\u3059\u308b"),(0,n.kt)("p",null,"\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u306e\u30bf\u30a4\u30c8\u30eb\u3001\u30ab\u30c6\u30b4\u30ea\u3001\u8b58\u5225\u5b50\u3068\u3053\u308c\u3092\u4f7f\u3063\u305f\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u5165\u529b\u3057\u307e\u3059\u3002 "),(0,n.kt)("p",null,"\u4eca\u56de\u306f\u4e0b\u8a18\u306e\u3088\u3046\u306b\u5165\u529b\u3057\u307e\u3057\u305f\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30c8\u30eb\uff1aemail_domain_validation"),(0,n.kt)("li",{parentName:"ul"},"\u8b58\u5225\u5b50\uff1aemail_domain_validation")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"\u540c\u4e00\u30ab\u30c6\u30b4\u30ea\u5185\u306b\u30bf\u30a4\u30c8\u30eb\u304c\u91cd\u8907\u3059\u308b\u51e6\u7406\u3092\u4f5c\u6210\u3067\u304d\u306a\u3044\u305f\u3081\u3001\u4ed6\u3068\u91cd\u8907\u3057\u306a\u3044\u30bf\u30a4\u30c8\u30eb\u3092\u547d\u540d\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/9be534b06a54cd3c532d0c7110208361.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/9be534b06a54cd3c532d0c7110208361.png",alt:"Image from Gyazo"})),(0,n.kt)("h3",{id:"\u30d0\u30ea\u30c7\u30fc\u30b7\u30e7\u30f3\u51e6\u7406\u3092\u8a18\u8ff0\u3059\u308b"},"\u30d0\u30ea\u30c7\u30fc\u30b7\u30e7\u30f3\u51e6\u7406\u3092\u8a18\u8ff0\u3059\u308b"),(0,n.kt)("p",null,"\u6b21\u306b\u3001\u4ee5\u4e0b\u306e\u624b\u9806\u3067\u30d0\u30ea\u30c7\u30fc\u30b7\u30e7\u30f3\u51e6\u7406\u3092\u8a18\u8ff0\u3057\u307e\u3059\u3002"),(0,n.kt)("h4",{id:"\u30a8\u30e9\u30fc\u5909\u6570\u3092\u521d\u671f\u5316\u3059\u308b"},"\u30a8\u30e9\u30fc\u5909\u6570\u3092\u521d\u671f\u5316\u3059\u308b"),(0,n.kt)("p",null,"\u30d0\u30ea\u30c7\u30fc\u30b7\u30e7\u30f3\u7d50\u679c\u3092\u683c\u7d0d\u3059\u308b\u305f\u3081\u306e$errors\u5909\u6570\u3092\u521d\u671f\u5316\u3057\u307e\u3059\u3002  "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u5909\u6570\u540d"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u578b"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8aac\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$errors"),(0,n.kt)("td",{parentName:"tr",align:"left"},"array"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30c6\u30ad\u30b9\u30c8\u914d\u5217")))),(0,n.kt)("p",null,"\u30a8\u30c7\u30a3\u30bf\u306b\u4e0b\u8a18\u8a18\u5165\u3057\u307e\u3059\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-smarty"},'{* $errors = [] *}\n{assign_array var="errors" values=""}\n')),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/edc8b806f4d747a688c61fe71fbdeb0d.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/edc8b806f4d747a688c61fe71fbdeb0d.png",alt:"Image from Gyazo"})),(0,n.kt)("h4",{id:"\u30d0\u30ea\u30c7\u30fc\u30b7\u30e7\u30f3\u51e6\u7406\u3092\u5b9f\u88c5\u3059\u308b"},"\u30d0\u30ea\u30c7\u30fc\u30b7\u30e7\u30f3\u51e6\u7406\u3092\u5b9f\u88c5\u3059\u308b"),(0,n.kt)("p",null,"\u30e6\u30fc\u30b6\u30fc\u306e\u5165\u529b\u5024\u3092\u30c1\u30a7\u30c3\u30af\u3057\u3001errors\u5909\u6570\u306b\u7d50\u679c\u3092\u4ee3\u5165\u3057\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u5165\u529b\u5024\u3092\u53c2\u7167\u3059\u308b\u305f\u3081\u306b\u306f\u3001\u4e0b\u8a18\u306e\u3044\u305a\u308c\u304b\u306e\u5909\u6570\u3092\u5229\u7528\u3057\u307e\u3059\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u5909\u6570\u540d"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8aac\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$smarty.post"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u753b\u9762\u304b\u3089\u5165\u529b\u3055\u308c\u305f\u30d5\u30a9\u30fc\u30e0\u30c7\u30fc\u30bf")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-smarty"},'{assign_array var="errors" values=""}\n\n{* [\u4f8b] POST\u3055\u308c\u305f\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u304c\u7279\u5b9a\u306e\u30c9\u30e1\u30a4\u30f3\u3068\u4e00\u81f4\u3057\u306a\u3051\u308c\u3070\u30a8\u30e9\u30fc\u3092\u8fd4\u3059 *}\n{if $smarty.post.ext_1|strpos:\'@example.com\' === false}\n  {* $errors = ["\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u304c\u4e0d\u6b63\u3067\u3059\u3002"] *}\n  {assign var="errors." value="\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u304c\u4e0d\u6b63\u3067\u3059\u3002"}\n{/if}\n')),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/bfed7d309f422826dd11ecb3a5744075.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/bfed7d309f422826dd11ecb3a5744075.png",alt:"Image from Gyazo"})),(0,n.kt)("h4",{id:"\u4fdd\u5b58\u3059\u308b"},"\u4fdd\u5b58\u3059\u308b"),(0,n.kt)("p",null,"\u51e6\u7406\u306e\u8a18\u8ff0\u304c\u5b8c\u4e86\u3057\u305f\u3089\u3001","[\u8ffd\u52a0]"," \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u4fdd\u5b58\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n",(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/98ffd9dd3fb6393dbd09df39f739838e.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/98ffd9dd3fb6393dbd09df39f739838e.png",alt:"Image from Gyazo"})),(0,n.kt)("h2",{id:"\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u306b\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u3092\u95a2\u9023\u4ed8\u3051\u308b"},"\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u306b\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u3092\u95a2\u9023\u4ed8\u3051\u308b"),(0,n.kt)("p",null,"\u6b21\u306b\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u3092\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u306b\u95a2\u9023\u4ed8\u3051\u307e\u3059\u3002  "),(0,n.kt)("h3",{id:"\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u30ea\u30b9\u30c8\u753b\u9762\u3067\u95a2\u9023\u4ed8\u3051\u308b\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u306eid\u3092\u78ba\u8a8d\u3059\u308b"},"\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u30ea\u30b9\u30c8\u753b\u9762\u3067\u3001\u95a2\u9023\u4ed8\u3051\u308b\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u306eID\u3092\u78ba\u8a8d\u3059\u308b"),(0,n.kt)("p",null,"[\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9]"," \u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002  "),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/def54581a1de27a45bbd766c4791fc0f.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/def54581a1de27a45bbd766c4791fc0f.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"\u4e8b\u524d\u6e96\u5099\u3067\u4f5c\u6210\u3057\u305f\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u306eID\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002\n",(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/c03e167af024f2f676e2a32d37c2f7e9.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/c03e167af024f2f676e2a32d37c2f7e9.png",alt:"Image from Gyazo"})),(0,n.kt)("h3",{id:"\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9id\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u306b\u95a2\u9023\u4ed8\u3051\u308b"},"\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9ID\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u306b\u95a2\u9023\u4ed8\u3051\u308b"),(0,n.kt)("p",null,"\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9ID\u3092\u4f5c\u6210\u3057\u305f\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u306b\u95a2\u9023\u4ed8\u3051\u307e\u3059\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u3053\u308c\u3092\u4f7f\u3063\u305f\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\uff1a\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u30d0\u30ea\u30c7\u30fc\u30b7\u30e7\u30f3\u524d"),(0,n.kt)("li",{parentName:"ul"},"\u5024\uff1a\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u3092\u9069\u7528\u3059\u308b\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9ID\n",(0,n.kt)("img",{parentName:"li",src:"https://t.gyazo.com/teams/diverta/4fcc294ba59df7971d0d937f99891819.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/4fcc294ba59df7971d0d937f99891819.png",alt:"Image from Gyazo"}))),(0,n.kt)("h4",{id:"\u4fdd\u5b58\u3059\u308b-1"},"\u4fdd\u5b58\u3059\u308b"),(0,n.kt)("p",null,"\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9ID\u306e\u5165\u529b\u304c\u5b8c\u4e86\u3057\u305f\u3089\u3001","[\u66f4\u65b0\u3059\u308b]"," \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u4fdd\u5b58\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/cdd128a4f2f5cafbb30306da8b4ee7de.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/cdd128a4f2f5cafbb30306da8b4ee7de.png",alt:"Image from Gyazo"})),(0,n.kt)("h2",{id:"\u30d0\u30ea\u30c7\u30fc\u30b7\u30e7\u30f3\u306e\u52d5\u4f5c\u3092\u78ba\u8a8d\u3059\u308b"},"\u30d0\u30ea\u30c7\u30fc\u30b7\u30e7\u30f3\u306e\u52d5\u4f5c\u3092\u78ba\u8a8d\u3059\u308b"),(0,n.kt)("p",null,"\u30b3\u30f3\u30c6\u30f3\u30c4\u7de8\u96c6\u753b\u9762\u304b\u3089\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u884c\u3044\u3001\u30d0\u30ea\u30c7\u30fc\u30b7\u30e7\u30f3\u51e6\u7406\u306e\u52d5\u4f5c\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002"),(0,n.kt)("h3",{id:"\u30b3\u30f3\u30c6\u30f3\u30c4\u7de8\u96c6\u3092\u8868\u793a\u3059\u308b"},"\u30b3\u30f3\u30c6\u30f3\u30c4\u7de8\u96c6\u3092\u8868\u793a\u3059\u308b"),(0,n.kt)("p",null,"\u4e8b\u524d\u6e96\u5099\u3067\u4f5c\u6210\u3057\u305f\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u4e00\u89a7\u753b\u9762\u3067","[\u8ffd\u52a0]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002\n",(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/321d8f7b71e36c8af99a58f227db4543.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/321d8f7b71e36c8af99a58f227db4543.png",alt:"Image from Gyazo"})),(0,n.kt)("h3",{id:"\u30a8\u30e9\u30fc\u304c\u51fa\u529b\u3055\u308c\u308b\u5024\u3092\u5165\u529b\u3059\u308b"},"\u30a8\u30e9\u30fc\u304c\u51fa\u529b\u3055\u308c\u308b\u5024\u3092\u5165\u529b\u3059\u308b"),(0,n.kt)("p",null,"\u4e0b\u8a18\u306e\u901a\u308a\u3001\u30a8\u30e9\u30fc\u304c\u51fa\u529b\u3055\u308c\u308b\u5024\u3092","[email]","\u306b\u5165\u529b\u3057\u307e\u3059\u3002\u3000",(0,n.kt)("br",{parentName:"p"}),"\n","\u5165\u529b\u304c\u5b8c\u4e86\u3057\u305f\u3089\u3001","[\u8ffd\u52a0\u3059\u308b]"," \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/7af75855623e127bbdc43b9f94149b71.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/7af75855623e127bbdc43b9f94149b71.png",alt:"Image from Gyazo"})),(0,n.kt)("h3",{id:"\u30a8\u30e9\u30fc\u5185\u5bb9\u3092\u78ba\u8a8d\u3059\u308b"},"\u30a8\u30e9\u30fc\u5185\u5bb9\u3092\u78ba\u8a8d\u3059\u308b"),(0,n.kt)("p",null,"\u60f3\u5b9a\u901a\u308a\u306e\u30a8\u30e9\u30fc\u304c\u51fa\u529b\u3055\u308c\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/5ca56ee43759f6b507b50fbd99061f1c.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/5ca56ee43759f6b507b50fbd99061f1c.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"\u4ee5\u4e0a\u3067\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u3068\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u306e\u95a2\u9023\u4ed8\u3051\u304c\u5b8c\u4e86\u3067\u3059\u3002  "),(0,n.kt)("h2",{id:"\u30d0\u30ea\u30c7\u30fc\u30b7\u30e7\u30f3\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u306a\u3044\u5834\u5408\u306e\u78ba\u8a8d\u30dd\u30a4\u30f3\u30c8"},"\u30d0\u30ea\u30c7\u30fc\u30b7\u30e7\u30f3\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u306a\u3044\u5834\u5408\u306e\u78ba\u8a8d\u30dd\u30a4\u30f3\u30c8"),(0,n.kt)("p",null,"\u5165\u529b\u30c1\u30a7\u30c3\u30af\u304c\u60f3\u5b9a\u901a\u308a\u306b\u884c\u308f\u308c\u306a\u3044\u5834\u5408\u306f\u3001\u4e0b\u8a18\u306e\u30dd\u30a4\u30f3\u30c8\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u95a2\u9023\u4ed8\u3044\u3066\u3044\u308b\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u304c\u6b63\u3057\u3044\u304b"),(0,n.kt)("li",{parentName:"ul"},"\u5909\u6570\u540d(errors)\u304c\u6b63\u3057\u3044\u304b"),(0,n.kt)("li",{parentName:"ul"},"\u30c1\u30a7\u30c3\u30af\u5bfe\u8c61\u306e\u9805\u76ee\u540d\u304c\u6b63\u3057\u3044\u304b"),(0,n.kt)("li",{parentName:"ul"},"\u30d0\u30ea\u30c7\u30fc\u30b7\u30e7\u30f3\u51e6\u7406\u306e\u30ed\u30b8\u30c3\u30af\u304c\u6b63\u3057\u3044\u304b")),(0,n.kt)("h2",{id:"\u30b3\u30fc\u30c9\u4f8b\u306e\u7d39\u4ecb"},"\u30b3\u30fc\u30c9\u4f8b\u306e\u7d39\u4ecb"),(0,n.kt)("p",null,"\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u306b\u5229\u7528\u3067\u304d\u308b\u30b3\u30fc\u30c9\u4f8b\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u5909\u6570\u540d"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8aac\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$smarty.get"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30af\u30a8\u30ea\u30d1\u30e9\u30e1\u30fc\u30bf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$smarty.post"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u753b\u9762\u304b\u3089\u5165\u529b\u3055\u308c\u305f\u30d5\u30a9\u30fc\u30e0\u30c7\u30fc\u30bf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$smarty.request"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30af\u30a8\u30ea\u30d1\u30e9\u30e1\u30fc\u30bf & \u753b\u9762\u304b\u3089\u5165\u529b\u3055\u308c\u305f\u30d5\u30a9\u30fc\u30e0\u30c7\u30fc\u30bf")))),(0,n.kt)("h3",{id:"\u7279\u5b9a\u306e\u6587\u5b57\u5217\u3092\u542b\u3080\u304b\u3069\u3046\u304b\u3092\u30c1\u30a7\u30c3\u30af\u3059\u308b"},"\u7279\u5b9a\u306e\u6587\u5b57\u5217\u3092\u542b\u3080\u304b\u3069\u3046\u304b\u3092\u30c1\u30a7\u30c3\u30af\u3059\u308b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-smarty"},'{if $smarty.post.column_name|strpos:"\u671f\u5f85\u3059\u308b\u6587\u5b57\u5217" === false}\n  {assign var="errors." value="column_name\u304c\u4e0d\u6b63\u3067\u3059\u3002"}\n{/if}\n')),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"\u6570\u5024\u304b\u3069\u3046\u304b\u3092\u30c1\u30a7\u30c3\u30af\u3059\u308b"},"\u6570\u5024\u304b\u3069\u3046\u304b\u3092\u30c1\u30a7\u30c3\u30af\u3059\u308b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-smarty"},'{if !$smarty.post.parameter_name|is_numeric}\n  {assign var="errors." value="parameter_name\u306f\u6570\u5024\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}\n{/if}\n')),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"\u7279\u5b9a\u306e\u9805\u76ee\u306b\u4f9d\u5b58\u3057\u305f\u5165\u529b\u30c1\u30a7\u30c3\u30af\u3092\u884c\u3046"},"\u7279\u5b9a\u306e\u9805\u76ee\u306b\u4f9d\u5b58\u3057\u305f\u5165\u529b\u30c1\u30a7\u30c3\u30af\u3092\u884c\u3046"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-smarty"},"{*\n    [\u4f8b] ext_1\u306b1\u304c\u5165\u529b\u3055\u308c\u305f\u5834\u5408\u306e\u307f\u3001ext_2\u3092\u5fc5\u9808\u9805\u76ee\u3068\u3059\u308b\n    ext_1: \u30bb\u30ec\u30af\u30c8\u9805\u76ee ('', '1', '2')\n    ext_2: \u30c6\u30ad\u30b9\u30c8\u9805\u76ee\n*}\n{if $smarty.post.ext_1 === '1' || (\n  !$smarty.post.ext_1|@empty &&\n  $smarty.post.ext_1.key === '1'\n)}\n  {if !isset($smarty.post.ext_2) || $smarty.post.ext_2 === ''}\n    {assign var=\"errors.\" value=\"\u30c6\u30ad\u30b9\u30c8\u9805\u76ee\u306f\u5fc5\u9808\u9805\u76ee\u3067\u3059\u3002\"}\n  {/if}\n{/if}\n")),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"\u7279\u5b9a\u306e\u30b0\u30eb\u30fc\u30d7\u306b\u6240\u5c5e\u3059\u308b\u30e1\u30f3\u30d0\u30fc\u306b\u306e\u307f\u5165\u529b\u30c1\u30a7\u30c3\u30af\u3092\u9069\u7528\u3059\u308b"},"\u7279\u5b9a\u306e\u30b0\u30eb\u30fc\u30d7\u306b\u6240\u5c5e\u3059\u308b\u30e1\u30f3\u30d0\u30fc\u306b\u306e\u307f\u5165\u529b\u30c1\u30a7\u30c3\u30af\u3092\u9069\u7528\u3059\u308b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-smarty"},'{*\n  member_group_id=1\u306f\u7ba1\u7406\u8005\u6a29\u9650\u30b0\u30eb\u30fc\u30d7\u306b\u306a\u308a\u307e\u3059\u3002\n*}\n{assign var="member_group_id" value="1"}\n{if $member_group_id|rcms_in_array:$smarty.session.arrGroup_id}\n  {if !isset($smarty.post.ext_1)}\n    {assign var="errors." value="ext_1\u306f\u5fc5\u9808\u9805\u76ee\u3067\u3059\u3002"}\n  {/if}\n{/if}\n')),(0,n.kt)("br",null),(0,n.kt)("h2",{id:"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"},"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/ja/docs/reference/trigger-variables/"},"\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u306b\u5229\u7528\u3067\u304d\u308b\u5909\u6570\u4e00\u89a7"))))}c.isMDXComponent=!0}}]);