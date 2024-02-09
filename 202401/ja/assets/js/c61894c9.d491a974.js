"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[30587],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>k});var o=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,o,r=function(t,e){if(null==t)return{};var a,o,r={},n=Object.keys(t);for(o=0;o<n.length;o++)a=n[o],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(o=0;o<n.length;o++)a=n[o],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=o.createContext({}),l=function(t){var e=o.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},c=function(t){var e=l(t.components);return o.createElement(m.Provider,{value:e},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},u=o.forwardRef((function(t,e){var a=t.components,r=t.mdxType,n=t.originalType,m=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),s=l(a),u=r,k=s["".concat(m,".").concat(u)]||s[u]||d[u]||n;return a?o.createElement(k,p(p({ref:e},c),{},{components:a})):o.createElement(k,p({ref:e},c))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var n=a.length,p=new Array(n);p[0]=u;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=t,i[s]="string"==typeof t?t:r,p[1]=i;for(var l=2;l<n;l++)p[l]=a[l];return o.createElement.apply(null,p)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},29916:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>p,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var o=a(87462),r=(a(67294),a(3905));const n={title:"\u5225\u30b5\u30a4\u30c8\u3067\u4f7f\u7528\u3057\u3066\u3044\u308b\u30c9\u30e1\u30a4\u30f3\u3092Kuroco\u306b\u5207\u308a\u66ff\u3048\u308b\u969b\u306e\u624b\u9806"},p=void 0,i={unversionedId:"tutorials/transferring-your-domain-from-another-site-to-kuroco",id:"tutorials/transferring-your-domain-from-another-site-to-kuroco",title:"\u5225\u30b5\u30a4\u30c8\u3067\u4f7f\u7528\u3057\u3066\u3044\u308b\u30c9\u30e1\u30a4\u30f3\u3092Kuroco\u306b\u5207\u308a\u66ff\u3048\u308b\u969b\u306e\u624b\u9806",description:"\u73fe\u5728\u5225\u306e\u30b5\u30a4\u30c8\u3067\u4f7f\u7528\u3057\u3066\u3044\u308b\u4f7f\u7528\u3057\u3066\u3044\u308b\u30c9\u30e1\u30a4\u30f3\u3092\u3001Kuroco\u3067\u4f5c\u6210\u3057\u305f\u30b5\u30a4\u30c8\u306b\u5207\u308a\u66ff\u3048\u308b\u624b\u9806\u3092\u8aac\u660e\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/tutorials/transferring-your-domain-from-another-site-to-kuroco.md",sourceDirName:"tutorials",slug:"/tutorials/transferring-your-domain-from-another-site-to-kuroco",permalink:"/ja/docs/tutorials/transferring-your-domain-from-another-site-to-kuroco",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/tutorials/transferring-your-domain-from-another-site-to-kuroco.md",tags:[],version:"current",frontMatter:{title:"\u5225\u30b5\u30a4\u30c8\u3067\u4f7f\u7528\u3057\u3066\u3044\u308b\u30c9\u30e1\u30a4\u30f3\u3092Kuroco\u306b\u5207\u308a\u66ff\u3048\u308b\u969b\u306e\u624b\u9806"},sidebar:"documentationSidebar",previous:{title:"KurocoFront\u3067\u72ec\u81eaAPI\u30c9\u30e1\u30a4\u30f3\u3092\u5229\u7528\u3059\u308b\u624b\u9806",permalink:"/ja/docs/tutorials/using-your-own-api-domain-with-kurocofront"},next:{title:"\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3\u767b\u9332\u5f8c\u3001kuroco-front.app\u306e\u30c9\u30e1\u30a4\u30f3\u3092\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u306e\u30b9\u30c6\u30fc\u30b8\u30b5\u30a4\u30c8\u3068\u3057\u3066\u5229\u7528\u3059\u308b",permalink:"/ja/docs/tutorials/kurocofront-app-domain-for-front-end-staging-site"}},m={},l=[{value:"\u30c9\u30e1\u30a4\u30f3\u5207\u308a\u66ff\u3048\u624b\u9806",id:"\u30c9\u30e1\u30a4\u30f3\u5207\u308a\u66ff\u3048\u624b\u9806",level:2},{value:"1. Kurocofront\u3067\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3\u3092\u767b\u9332\u3059\u308b",id:"1-kurocofront\u3067\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3\u3092\u767b\u9332\u3059\u308b",level:3},{value:"2. CNAME\u30ec\u30b3\u30fc\u30c9\u3092\u8a2d\u5b9a\u3059\u308b\u3002",id:"2-cname\u30ec\u30b3\u30fc\u30c9\u3092\u8a2d\u5b9a\u3059\u308b",level:3},{value:"3. \u30a2\u30ab\u30a6\u30f3\u30c8\u8a2d\u5b9a\u3067\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30c9\u30e1\u30a4\u30f3\u3092\u5909\u66f4\u3059\u308b",id:"3-\u30a2\u30ab\u30a6\u30f3\u30c8\u8a2d\u5b9a\u3067\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30c9\u30e1\u30a4\u30f3\u3092\u5909\u66f4\u3059\u308b",level:3},{value:"4. \u72ec\u81eaAPI\u30c9\u30e1\u30a4\u30f3\u3092\u767b\u9332\u3059\u308b(\u5fc5\u8981\u306a\u65b9\u306e\u307f)",id:"4-\u72ec\u81eaapi\u30c9\u30e1\u30a4\u30f3\u3092\u767b\u9332\u3059\u308b\u5fc5\u8981\u306a\u65b9\u306e\u307f",level:3},{value:"5. CORS\u306b\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3\u3092\u8ffd\u52a0\u3059\u308b",id:"5-cors\u306b\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3\u3092\u8ffd\u52a0\u3059\u308b",level:3},{value:"6. \u30c9\u30e1\u30a4\u30f3\u3092\u76f4\u63a5\u8a18\u8ff0\u3057\u3066\u3044\u308b\u30d5\u30a1\u30a4\u30eb\u3092\u4fee\u6b63\u3059\u308b",id:"6-\u30c9\u30e1\u30a4\u30f3\u3092\u76f4\u63a5\u8a18\u8ff0\u3057\u3066\u3044\u308b\u30d5\u30a1\u30a4\u30eb\u3092\u4fee\u6b63\u3059\u308b",level:3},{value:"7. hosts\u30d5\u30a1\u30a4\u30eb\u3092\u4fee\u6b63\u3057\u3001DNS\u5909\u66f4\u524d\u306b\u30b5\u30a4\u30c8\u306e\u8868\u793a\u3092\u78ba\u8a8d\u3059\u308b",id:"7-hosts\u30d5\u30a1\u30a4\u30eb\u3092\u4fee\u6b63\u3057dns\u5909\u66f4\u524d\u306b\u30b5\u30a4\u30c8\u306e\u8868\u793a\u3092\u78ba\u8a8d\u3059\u308b",level:3},{value:"8. \u30c9\u30e1\u30a4\u30f3\u3092\u5229\u7528\u3059\u308b\u70ba\u306eDNS\u30ec\u30b3\u30fc\u30c9\u3092\u8a2d\u5b9a\u3059\u308b",id:"8-\u30c9\u30e1\u30a4\u30f3\u3092\u5229\u7528\u3059\u308b\u70ba\u306edns\u30ec\u30b3\u30fc\u30c9\u3092\u8a2d\u5b9a\u3059\u308b",level:3},{value:"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8",id:"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8",level:2}],c={toc:l},s="wrapper";function d(t){let{components:e,...a}=t;return(0,r.kt)(s,(0,o.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u73fe\u5728\u5225\u306e\u30b5\u30a4\u30c8\u3067\u4f7f\u7528\u3057\u3066\u3044\u308b\u4f7f\u7528\u3057\u3066\u3044\u308b\u30c9\u30e1\u30a4\u30f3\u3092\u3001Kuroco\u3067\u4f5c\u6210\u3057\u305f\u30b5\u30a4\u30c8\u306b\u5207\u308a\u66ff\u3048\u308b\u624b\u9806\u3092\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"\u30c9\u30e1\u30a4\u30f3\u5207\u308a\u66ff\u3048\u624b\u9806"},"\u30c9\u30e1\u30a4\u30f3\u5207\u308a\u66ff\u3048\u624b\u9806"),(0,r.kt)("h3",{id:"1-kurocofront\u3067\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3\u3092\u767b\u9332\u3059\u308b"},"1. Kurocofront\u3067\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3\u3092\u767b\u9332\u3059\u308b"),(0,r.kt)("p",null,"[\u74b0\u5883\u8a2d\u5b9a]"," -> ","[\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3/TLS\u8a3c\u660e\u66f8]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001\u300c\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3\u300d\u306e\u30c6\u30ad\u30b9\u30c8\u30d5\u30a3\u30fc\u30eb\u30c9\u306b\u5229\u7528\u3059\u308b\u30c9\u30e1\u30a4\u30f3\u3092\u5165\u529b\u3057\u307e\u3059\u3002"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u6700\u5f8c\u5c3e\u306b\u30b9\u30e9\u30c3\u30b7\u30e5\u3084\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306a\u3069\u306f\u5fc5\u8981\u3042\u308a\u307e\u305b\u3093\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/44b6ce3e459e41ca43678a833a55a826.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/44b6ce3e459e41ca43678a833a55a826.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"\u5165\u529b\u5f8c\u3001\u300c\u8ffd\u52a0\u3059\u308b\u300d\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/528ce38cba2754e3b78d186c588b4837.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/528ce38cba2754e3b78d186c588b4837.png",alt:"Image from Gyazo"})),(0,r.kt)("h3",{id:"2-cname\u30ec\u30b3\u30fc\u30c9\u3092\u8a2d\u5b9a\u3059\u308b"},"2. CNAME\u30ec\u30b3\u30fc\u30c9\u3092\u8a2d\u5b9a\u3059\u308b\u3002"),(0,r.kt)("p",null,"\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3\u3092\u8ffd\u52a0\u3059\u308b\u3068\u3001DNS\u30ec\u30b3\u30fc\u30c9\u306e\u78ba\u8a8d\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","KurocoFront\u306e\u753b\u9762\u3088\u308a\u3001\u300c\u30c9\u30e1\u30a4\u30f3\u6240\u6709\u6a29\u306e\u78ba\u8a8d\u300d\u306eDNS\u30ec\u30b3\u30fc\u30c9\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/b7c8f016d3eda8f2b60511a25d6b4d5f.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/b7c8f016d3eda8f2b60511a25d6b4d5f.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"\u8868\u793a\u3055\u308c\u3066\u3044\u308b\u5185\u5bb9\u306b\u5f93\u3044\u3001CNAME\u306e\u8a2d\u5b9a\u3092\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,"\u53c2\u8003) DNS\u30ec\u30b3\u30fc\u30c9\u306e\u8a2d\u5b9a\u306f\u53d6\u5f97\u3057\u305f\u30c9\u30e1\u30a4\u30f3\u4f1a\u793e\u306b\u3088\u308a\u7570\u306a\u308a\u307e\u3059\u3002\u8a73\u7d30\u306a\u8a2d\u5b9a\u65b9\u6cd5\u306f\u53d6\u5f97\u3057\u305f\u30c9\u30e1\u30a4\u30f3\u4f1a\u793e\u306b\u3066\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.onamae.com/guide/p/70"},"\u304a\u540d\u524d.com Navi \u30cd\u30fc\u30e0\u30b5\u30fc\u30d0\u30fc/DNS\u306b\u3064\u3044\u3066")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://support.google.com/domains/answer/3290309?hl=ja"},"Google Domains\u30d8\u30eb\u30d7 \u30c9\u30e1\u30a4\u30f3 \u30cd\u30fc\u30e0\u30b5\u30fc\u30d0\u30fc\u306e\u7ba1\u7406"))),(0,r.kt)("h3",{id:"3-\u30a2\u30ab\u30a6\u30f3\u30c8\u8a2d\u5b9a\u3067\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30c9\u30e1\u30a4\u30f3\u3092\u5909\u66f4\u3059\u308b"},"3. \u30a2\u30ab\u30a6\u30f3\u30c8\u8a2d\u5b9a\u3067\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30c9\u30e1\u30a4\u30f3\u3092\u5909\u66f4\u3059\u308b"),(0,r.kt)("p",null,"\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30c9\u30e1\u30a4\u30f3\u3092\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3\u306b\u5909\u66f4\u3057\u307e\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","[\u74b0\u5883\u8a2d\u5b9a]"," -> ","[\u30a2\u30ab\u30a6\u30f3\u30c8\u8a2d\u5b9a]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001\u30a2\u30ab\u30a6\u30f3\u30c8\u8a2d\u5b9a\u753b\u9762\u3092\u8868\u793a\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/305d23c42fea6e17ba789407fa9fdd74.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/305d23c42fea6e17ba789407fa9fdd74.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"\u300c\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30c9\u30e1\u30a4\u30f3\u300d\u306b\u8a2d\u5b9a\u3057\u305f\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3\u304c\u8868\u793a\u3055\u308c\u308b\u306e\u3067\u3001\u30c1\u30a7\u30c3\u30af\u3092\u5165\u308c\u300c\u66f4\u65b0\u3059\u308b\u300d\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/9b8af1de9171b110601abf68645b8de9.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/9b8af1de9171b110601abf68645b8de9.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/3cab5b76eda4ff4cdc2118aca85f004f.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/3cab5b76eda4ff4cdc2118aca85f004f.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"\u306a\u304a\u3001\u73fe\u6642\u70b9\u3067\u306f\u300c\u30c9\u30e1\u30a4\u30f3\u3092\u5229\u7528\u3059\u308b\u70ba\u306eDNS\u30ec\u30b3\u30fc\u30c9\u300d\u3092\u5909\u66f4\u3057\u3066\u3044\u306a\u3044\u305f\u3081\u3001\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3\u306f\u307e\u3060Kuroco\u3067\u4f5c\u6210\u3057\u305f\u30b5\u30a4\u30c8\u306e\u8868\u793a\u306b\u306f\u306a\u308a\u307e\u305b\u3093\u3002\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3066\u3082\u3001\u5143\u306e\u30b5\u30a4\u30c8\u306b\u30a2\u30af\u30bb\u30b9\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"4-\u72ec\u81eaapi\u30c9\u30e1\u30a4\u30f3\u3092\u767b\u9332\u3059\u308b\u5fc5\u8981\u306a\u65b9\u306e\u307f"},"4. \u72ec\u81eaAPI\u30c9\u30e1\u30a4\u30f3\u3092\u767b\u9332\u3059\u308b(\u5fc5\u8981\u306a\u65b9\u306e\u307f)"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u3053\u3061\u3089\u306f\u4e0b\u8a18\u306b\u8a72\u5f53\u3059\u308b\u65b9\u306e\u307f\u5bfe\u5fdc\u304c\u5fc5\u8981\u3068\u306a\u308a\u307e\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","[API]"," -> ","[\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3]","\u3067Cookie\u3092\u5229\u7528\u3057\u3066\u3044\u308b",(0,r.kt)("br",{parentName:"p"}),"\n","\u4e0a\u8a18\u306b\u8a72\u5f53\u3057\u306a\u3044\u5834\u5408\u306f\u3001",(0,r.kt)("a",{parentName:"p",href:"#5-cors%E3%81%AB%E7%8B%AC%E8%87%AA%E3%83%89%E3%83%A1%E3%82%A4%E3%83%B3%E3%82%92%E8%BF%BD%E5%8A%A0%E3%81%99%E3%82%8B"},"5. CORS\u306b\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3\u3092\u8ffd\u52a0\u3059\u308b"),"\u307e\u3067\u9032\u3093\u3067\u304f\u3060\u3055\u3044\u3002")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\u6b21\u306b\u72ec\u81eaAPI\u30c9\u30e1\u30a4\u30f3\u3092\u767b\u9332\u3057\u307e\u3059\u3002  "),(0,r.kt)("p",null,"[\u74b0\u5883\u8a2d\u5b9a]"," -> ","[\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3/TLS\u8a3c\u660e\u66f8]","\u3088\u308a\u300c\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3\u300d\u306e\u30c6\u30ad\u30b9\u30c8\u30d5\u30a3\u30fc\u30eb\u30c9\u306b\u5229\u7528\u3059\u308b\u30c9\u30e1\u30a4\u30f3\u3092\u5165\u529b\u3057\u307e\u3059\u3002"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u6700\u5f8c\u5c3e\u306b\u30b9\u30e9\u30c3\u30b7\u30e5\u3084\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306a\u3069\u306f\u5fc5\u8981\u3042\u308a\u307e\u305b\u3093\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/328db4c19a7b8cbe76a549a01597ad8d.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/328db4c19a7b8cbe76a549a01597ad8d.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"\u307e\u305f\u3001\u72ec\u81eaAPI\u30c9\u30e1\u30a4\u30f3\u306f\u3001\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3\u3068\u30b5\u30d6\u30c9\u30e1\u30a4\u30f3\u9055\u3044\u3067\u8a2d\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u306e\u3067\u3054\u6ce8\u610f\u304f\u3060\u3055\u3044\u3002  "),(0,r.kt)("p",null,"\u4f8b)  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"https://www.example.com")),(0,r.kt)("li",{parentName:"ul"},"API\u30c9\u30e1\u30a4\u30f3\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"https://api.example.com"))),(0,r.kt)("p",null,"\u72ec\u81eaAPI\u30c9\u30e1\u30a4\u30f3\u3092\u767b\u9332\u3059\u308b\u3068\u3001DNS\u30ec\u30b3\u30fc\u30c9\u304c\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/d064d982b8f91683efd0a5ce7de50d34.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/d064d982b8f91683efd0a5ce7de50d34.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"\u8868\u793a\u3055\u308c\u3066\u3044\u308b\u5185\u5bb9\u306b\u5f93\u3044\u3001CNAME\u307e\u305f\u306fA\u30ec\u30b3\u30fc\u30c9\u306e\u8a2d\u5b9a\u3092\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,"\u8a2d\u5b9a\u5909\u66f4\u5f8c\u3001API\u30c9\u30e1\u30a4\u30f3\u3092\u5909\u66f4\u3057\u307e\u3059\u3002\n","[\u74b0\u5883\u8a2d\u5b9a]"," -> ","[\u30a2\u30ab\u30a6\u30f3\u30c8\u8a2d\u5b9a]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001\u30a2\u30ab\u30a6\u30f3\u30c8\u8a2d\u5b9a\u753b\u9762\u3092\u8868\u793a\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/3a31068a1ee6b74b9f4c17911363b517.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/3a31068a1ee6b74b9f4c17911363b517.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"\u300cAPI\u30c9\u30e1\u30a4\u30f3\u300d\u3088\u308a\u3001\u8a2d\u5b9a\u3057\u305fAPI\u30c9\u30e1\u30a4\u30f3\u306b\u30c1\u30a7\u30c3\u30af\u3092\u5165\u308c\u3001\u300c\u66f4\u65b0\u3059\u308b\u300d\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/98511da63d88255b7ac1e800dfb103ee.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/98511da63d88255b7ac1e800dfb103ee.png",alt:"Image from Gyazo"})),(0,r.kt)("h3",{id:"5-cors\u306b\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3\u3092\u8ffd\u52a0\u3059\u308b"},"5. CORS\u306b\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3\u3092\u8ffd\u52a0\u3059\u308b"),(0,r.kt)("p",null,"API\u306eCORS\u8a2d\u5b9a\u306b\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002\n","[API]","\u3088\u308a\u3054\u5229\u7528\u306eAPI\u3092\u9078\u629e\u3057\u3001\u300cCORS\u3092\u8a2d\u5b9a\u3059\u308b\u300d\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/ae5ac217eb9ee29f1dfd5656c2322fe7.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/ae5ac217eb9ee29f1dfd5656c2322fe7.png",alt:"Image (fetched from Gyazo)"}),"\n","[CORS_ALLOW_ORIGINS]","\u3088\u308a\u3001\u300cAdd Origin\u300d\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/b8eaf84945f48b74ae372ddd47060c28.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/b8eaf84945f48b74ae372ddd47060c28.png",alt:"Image (fetched from Gyazo)"}),"\n\u3059\u308b\u3068\u30c6\u30ad\u30b9\u30c8\u30d5\u30a3\u30fc\u30eb\u30c9\u304c\u8ffd\u52a0\u3055\u308c\u307e\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u30c6\u30ad\u30b9\u30c8\u30d5\u30a3\u30fc\u30eb\u30c9\u306b\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3\u3092\u5165\u529b\u3057\u3001\u300cSave\u300d\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/f6ce21e057f8e97490ec7fe9b39867c3.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/f6ce21e057f8e97490ec7fe9b39867c3.png",alt:"Image (fetched from Gyazo)"}),"\n\u4ee5\u4e0a\u3067CORS\u306e\u8a2d\u5b9a\u5b8c\u4e86\u3067\u3059\u3002"),(0,r.kt)("h3",{id:"6-\u30c9\u30e1\u30a4\u30f3\u3092\u76f4\u63a5\u8a18\u8ff0\u3057\u3066\u3044\u308b\u30d5\u30a1\u30a4\u30eb\u3092\u4fee\u6b63\u3059\u308b"},"6. \u30c9\u30e1\u30a4\u30f3\u3092\u76f4\u63a5\u8a18\u8ff0\u3057\u3066\u3044\u308b\u30d5\u30a1\u30a4\u30eb\u3092\u4fee\u6b63\u3059\u308b"),(0,r.kt)("p",null,"\u9023\u643a\u3057\u3066\u3044\u308bGitHub\u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u30d5\u30a1\u30a4\u30eb\u306b\u30c9\u30e1\u30a4\u30f3\u3092\u76f4\u63a5\u8a18\u8ff0\u3057\u3066\u3044\u308b\u5834\u5408\u3001\u30d5\u30a1\u30a4\u30eb\u3092\u4fee\u6b63\u3057\u307e\u3059\u3002  "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"GitHub Actions\u7528YAML\u30d5\u30a1\u30a4\u30eb"),(0,r.kt)("br",{parentName:"p"}),"\n","GitHub Actions\u9023\u643a\u306eYAML\u30d5\u30a1\u30a4\u30eb\u5185\u306b\u306f\u30c9\u30e1\u30a4\u30f3\u304c\u8a18\u8f09\u3055\u308c\u307e\u3059\u306e\u3067\u3001\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3\u8a2d\u5b9a\u5f8c\u306f\u30d5\u30a1\u30a4\u30eb\u3092\u4fee\u6b63\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,"[KurocoFront]","\xa0->\xa0","[GitHub]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001\u300c\u30ea\u30dd\u30b8\u30c8\u30ea\u300d\u3088\u308aYAML\u30d5\u30a1\u30a4\u30eb\u3092\u30b3\u30d4\u30fc\u3057\u3066\u3054\u5229\u7528\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/78420b89898335775930b8793dd28789.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/78420b89898335775930b8793dd28789.png",alt:"Image from Gyazo"})),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"/ja/docs/tutorials/connect-to-github-with-kuroco-front/#4-githubworkflows-%E3%81%AByaml%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%82%92%E9%85%8D%E7%BD%AE%E3%81%99%E3%82%8B"},"GitHub\u304b\u3089KurocoFront\u3078\u30bd\u30fc\u30b9\u3092\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u65b9\u6cd5 4. .github/workflows \u306bYAML\u30d5\u30a1\u30a4\u30eb\u3092\u914d\u7f6e\u3059\u308b"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".env\u30d5\u30a1\u30a4\u30eb"),(0,r.kt)("br",{parentName:"p"}),"\n",".env\u30d5\u30a1\u30a4\u30eb\u306b\u30eb\u30fc\u30c8\u30c9\u30e1\u30a4\u30f3\u3084API\u30c9\u30e1\u30a4\u30f3\u3092\u76f4\u63a5\u8a18\u8ff0\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u4fee\u6b63\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h3",{id:"7-hosts\u30d5\u30a1\u30a4\u30eb\u3092\u4fee\u6b63\u3057dns\u5909\u66f4\u524d\u306b\u30b5\u30a4\u30c8\u306e\u8868\u793a\u3092\u78ba\u8a8d\u3059\u308b"},"7. hosts\u30d5\u30a1\u30a4\u30eb\u3092\u4fee\u6b63\u3057\u3001DNS\u5909\u66f4\u524d\u306b\u30b5\u30a4\u30c8\u306e\u8868\u793a\u3092\u78ba\u8a8d\u3059\u308b"),(0,r.kt)("p",null,"DNS\u3092\u5207\u308a\u66ff\u3048\u308b\u524d\u306b\u30b5\u30a4\u30c8\u306e\u8868\u793a\u3092\u78ba\u8a8d\u3057\u305f\u3044\u5834\u5408\u3001hosts\u30d5\u30a1\u30a4\u30eb\u3092\u5909\u66f4\u3059\u308b\u3053\u3068\u306b\u3088\u3063\u3066\u78ba\u8a8d\u304c\u53ef\u80fd\u3067\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u5fc5\u9808\u306e\u4f5c\u696d\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u304c\u3001DNS\u5909\u66f4\u306e\u524d\u306b\u8868\u793a\u306e\u78ba\u8a8d\u304c\u5fc5\u8981\u306a\u5834\u5408\u306f\u4e0b\u8a18\u3092\u53c2\u8003\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,"hosts\u30d5\u30a1\u30a4\u30eb\u306b\u8a18\u8f09\u3059\u308bA\u30ec\u30b3\u30fc\u30c9\u306f\u3001","[\u74b0\u5883\u8a2d\u5b9a]"," -> ","[\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3/TLS\u8a3c\u660e\u66f8]","\u306e\u300c\u30c9\u30e1\u30a4\u30f3\u3092\u5229\u7528\u3059\u308b\u70ba\u306eDNS\u30ec\u30b3\u30fc\u30c9(CNAME\u304c\u5229\u7528\u3067\u304d\u306a\u3044\u5834\u5408)\u300d\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/154b66d9ddbc87462a213851977715c9.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/154b66d9ddbc87462a213851977715c9.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"\u306a\u304a\u3001\u4e0a\u8a18\u753b\u9762\u3067\u306fA\u30ec\u30b3\u30fc\u30c9\u304c4\u4ef6\u8868\u793a\u3055\u308c\u307e\u3059\u304c\u3001hosts\u306b\u306f1\u4ef6\u306e\u307f\u8a18\u8f09\u3059\u308c\u3070\u78ba\u8a8d\u53ef\u80fd\u3068\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hosts",metastring:'title="hosts"',title:'"hosts"'},"151.101.XX.XXX www.example.com\n")),(0,r.kt)("p",null,"\u8868\u793a\u306e\u78ba\u8a8d\u5f8c\u3001hosts\u306e\u8a2d\u5b9a\u306f\u5fc5\u305a\u5143\u306b\u623b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u30b5\u30a4\u30c8\u304c\u3046\u307e\u304f\u8868\u793a\u3055\u308c\u306a\u3044\u5834\u5408\u306f\u4e0b\u8a18\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002  "),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ja/docs/faq/setting-up-a-custom-domain/"},"\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3\u3092\u8a2d\u5b9a\u3057\u307e\u3057\u305f\u304c\u30b5\u30a4\u30c8\u304c\u8868\u793a\u3067\u304d\u307e\u305b\u3093\u3002\u4f55\u3092\u78ba\u8a8d\u3059\u308c\u3070\u826f\u3044\u3067\u3057\u3087\u3046\u304b\uff1f")))),(0,r.kt)("h3",{id:"8-\u30c9\u30e1\u30a4\u30f3\u3092\u5229\u7528\u3059\u308b\u70ba\u306edns\u30ec\u30b3\u30fc\u30c9\u3092\u8a2d\u5b9a\u3059\u308b"},"8. \u30c9\u30e1\u30a4\u30f3\u3092\u5229\u7528\u3059\u308b\u70ba\u306eDNS\u30ec\u30b3\u30fc\u30c9\u3092\u8a2d\u5b9a\u3059\u308b"),(0,r.kt)("p",null,"\u6700\u5f8c\u306bDNS\u30ec\u30b3\u30fc\u30c9\u3092\u5909\u66f4\u3057\u307e\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","[\u74b0\u5883\u8a2d\u5b9a]"," -> ","[\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3/TLS\u8a3c\u660e\u66f8]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001\u300c\u30c9\u30e1\u30a4\u30f3\u3092\u5229\u7528\u3059\u308b\u70ba\u306eDNS\u30ec\u30b3\u30fc\u30c9(\u63a8\u5968)\u300d\u307e\u305f\u306f\u300c\u30c9\u30e1\u30a4\u30f3\u3092\u5229\u7528\u3059\u308b\u70ba\u306eDNS\u30ec\u30b3\u30fc\u30c9(CNAME\u304c\u5229\u7528\u3067\u304d\u306a\u3044\u5834\u5408)\u300d\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/3c8267ffd6320515407bae03986ac9d4.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/3c8267ffd6320515407bae03986ac9d4.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"\u8868\u793a\u3055\u308c\u3066\u3044\u308b\u5185\u5bb9\u306b\u5f93\u3044\u3001CNAME\u307e\u305f\u306fA\u30ec\u30b3\u30fc\u30c9\u306e\u8a2d\u5b9a\u3092\u3057\u3066\u304f\u3060\u3055\u3044\u3002 "),(0,r.kt)("p",null,"\u53c2\u8003) DNS\u30ec\u30b3\u30fc\u30c9\u306e\u8a2d\u5b9a\u306f\u53d6\u5f97\u3057\u305f\u30c9\u30e1\u30a4\u30f3\u4f1a\u793e\u306b\u3088\u308a\u7570\u306a\u308a\u307e\u3059\u3002\u8a73\u7d30\u306a\u8a2d\u5b9a\u65b9\u6cd5\u306f\u53d6\u5f97\u3057\u305f\u30c9\u30e1\u30a4\u30f3\u4f1a\u793e\u306b\u3066\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.onamae.com/guide/p/70"},"\u304a\u540d\u524d.com Navi \u30cd\u30fc\u30e0\u30b5\u30fc\u30d0\u30fc/DNS\u306b\u3064\u3044\u3066")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://support.google.com/domains/answer/3290309?hl=ja"},"Google Domains\u30d8\u30eb\u30d7 \u30c9\u30e1\u30a4\u30f3 \u30cd\u30fc\u30e0\u30b5\u30fc\u30d0\u30fc\u306e\u7ba1\u7406"))),(0,r.kt)("p",null,"DNS\u304c\u53cd\u6620\u3055\u308c\u308b\u3068\u3001\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3\u306b\u30a2\u30af\u30bb\u30b9\u3067Kuroco\u306e\u30b5\u30a4\u30c8\u304c\u8868\u793a\u3055\u308c\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002\u5de6\u30b5\u30a4\u30c9\u30d0\u30fc\u306e\u300c\u30b5\u30a4\u30c8\u3092\u8868\u793a\u300d\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3\u304c\u9069\u5fdc\u3055\u308c\u305f\u30b5\u30a4\u30c8\u3092\u8868\u793a\u3057\u307e\u3059\u3002\n",(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/a9912852dc2324076b459e8757ebc84a.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/a9912852dc2324076b459e8757ebc84a.png",alt:"Image from Gyazo"})),(0,r.kt)("h2",{id:"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"},"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),(0,r.kt)("p",null,"\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3\u3001KurocoFront\u306b\u95a2\u3059\u308b\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3067\u3059\u3002\u4f75\u305b\u3066\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ja/docs/tutorials/using-a-custom-domain-name-on-kurocofront/"},"KurocoFront\u3067\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3\u3092\u5229\u7528\u3059\u308b\u624b\u9806")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ja/docs/tutorials/connect-to-github-with-kuroco-front/"},"GitHub\u304b\u3089KurocoFront\u3078\u30bd\u30fc\u30b9\u3092\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u65b9\u6cd5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ja/docs/faq/setting-up-a-custom-domain/"},"\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3\u3092\u8a2d\u5b9a\u3057\u307e\u3057\u305f\u304c\u30b5\u30a4\u30c8\u304c\u8868\u793a\u3067\u304d\u307e\u305b\u3093\u3002\u4f55\u3092\u78ba\u8a8d\u3059\u308c\u3070\u826f\u3044\u3067\u3057\u3087\u3046\u304b\uff1f"))))}d.isMDXComponent=!0}}]);