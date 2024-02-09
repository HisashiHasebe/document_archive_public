"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[58031],{3905:(t,a,e)=>{e.d(a,{Zo:()=>i,kt:()=>f});var r=e(67294);function n(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function o(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?o(Object(e),!0).forEach((function(a){n(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function p(t,a){if(null==t)return{};var e,r,n=function(t,a){if(null==t)return{};var e,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)e=o[r],a.indexOf(e)>=0||(n[e]=t[e]);return n}(t,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)e=o[r],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(n[e]=t[e])}return n}var c=r.createContext({}),d=function(t){var a=r.useContext(c),e=a;return t&&(e="function"==typeof t?t(a):m(m({},a),t)),e},i=function(t){var a=d(t.components);return r.createElement(c.Provider,{value:a},t.children)},s="mdxType",l={inlineCode:"code",wrapper:function(t){var a=t.children;return r.createElement(r.Fragment,{},a)}},g=r.forwardRef((function(t,a){var e=t.components,n=t.mdxType,o=t.originalType,c=t.parentName,i=p(t,["components","mdxType","originalType","parentName"]),s=d(e),g=n,f=s["".concat(c,".").concat(g)]||s[g]||l[g]||o;return e?r.createElement(f,m(m({ref:a},i),{},{components:e})):r.createElement(f,m({ref:a},i))}));function f(t,a){var e=arguments,n=a&&a.mdxType;if("string"==typeof t||n){var o=e.length,m=new Array(o);m[0]=g;var p={};for(var c in a)hasOwnProperty.call(a,c)&&(p[c]=a[c]);p.originalType=t,p[s]="string"==typeof t?t:n,m[1]=p;for(var d=2;d<o;d++)m[d]=e[d];return r.createElement.apply(null,m)}return r.createElement.apply(null,e)}g.displayName="MDXCreateElement"},22532:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>c,contentTitle:()=>m,default:()=>l,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var r=e(87462),n=(e(67294),e(3905));const o={title:"Amazon S3\u3068\u9023\u643a\u3057\u3066\u3001Storage\u306b\u30d5\u30a1\u30a4\u30eb\u3092\u4fdd\u5b58\u3059\u308b",category:"\u5916\u90e8\u30b7\u30b9\u30c6\u30e0\u9023\u643a",weight:1},m=void 0,p={unversionedId:"tutorials/amazon-s3",id:"tutorials/amazon-s3",title:"Amazon S3\u3068\u9023\u643a\u3057\u3066\u3001Storage\u306b\u30d5\u30a1\u30a4\u30eb\u3092\u4fdd\u5b58\u3059\u308b",description:"Amazon S3\u3068\u306e\u9023\u643a\u65b9\u6cd5\u3092\u89e3\u8aac\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/tutorials/amazon-s3.md",sourceDirName:"tutorials",slug:"/tutorials/amazon-s3",permalink:"/ja/docs/tutorials/amazon-s3",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/tutorials/amazon-s3.md",tags:[],version:"current",frontMatter:{title:"Amazon S3\u3068\u9023\u643a\u3057\u3066\u3001Storage\u306b\u30d5\u30a1\u30a4\u30eb\u3092\u4fdd\u5b58\u3059\u308b",category:"\u5916\u90e8\u30b7\u30b9\u30c6\u30e0\u9023\u643a",weight:1},sidebar:"documentationSidebar",previous:{title:"Firebase\u3068\u9023\u643a\u3057\u3066\u3001Storage\u306b\u30d5\u30a1\u30a4\u30eb\u3092\u4fdd\u5b58\u3059\u308b",permalink:"/ja/docs/tutorials/firebase"},next:{title:"Vimeo\u3068\u9023\u643a\u3057\u3066\u52d5\u753b\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b",permalink:"/ja/docs/tutorials/how-to-connect-to-vimeo"}},c={},d=[{value:"Amazon S3\u306e\u8a2d\u5b9a",id:"amazon-s3\u306e\u8a2d\u5b9a",level:2},{value:"\u30d0\u30b1\u30c3\u30c8\u3092\u4f5c\u6210\u3059\u308b",id:"\u30d0\u30b1\u30c3\u30c8\u3092\u4f5c\u6210\u3059\u308b",level:3},{value:"Cross-Origin Resource Sharing (CORS)\u306e\u8a2d\u5b9a\u3092\u3059\u308b",id:"cross-origin-resource-sharing-cors\u306e\u8a2d\u5b9a\u3092\u3059\u308b",level:3},{value:"\u30dd\u30ea\u30b7\u30fc\u3092\u4f5c\u6210\u3059\u308b",id:"\u30dd\u30ea\u30b7\u30fc\u3092\u4f5c\u6210\u3059\u308b",level:3},{value:"\u30a2\u30af\u30bb\u30b9\u30ad\u30fc\u3092\u4f5c\u6210\u3059\u308b",id:"\u30a2\u30af\u30bb\u30b9\u30ad\u30fc\u3092\u4f5c\u6210\u3059\u308b",level:3},{value:"Kuroco\u306e\u8a2d\u5b9a",id:"kuroco\u306e\u8a2d\u5b9a",level:2},{value:"\u5229\u7528\u65b9\u6cd5",id:"\u5229\u7528\u65b9\u6cd5",level:2},{value:"\u30d5\u30a1\u30a4\u30eb",id:"\u30d5\u30a1\u30a4\u30eb",level:3},{value:"\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9",id:"\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9",level:3}],i={toc:d},s="wrapper";function l(t){let{components:a,...e}=t;return(0,n.kt)(s,(0,r.Z)({},i,e,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Amazon S3\u3068\u306e\u9023\u643a\u65b9\u6cd5\u3092\u89e3\u8aac\u3057\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","Amazon S3\u3068\u9023\u643a\u3059\u308b\u3053\u3068\u3067\u3001Kuroco\u304b\u3089\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u305f\u753b\u50cf\u3084\u52d5\u753b\u30d5\u30a1\u30a4\u30eb\u3092\u3001Amazon S3\u306eStorage\u306b\u683c\u7d0d\u3057\u5229\u7528\u3067\u304d\u307e\u3059\u3002  "),(0,n.kt)("h2",{id:"amazon-s3\u306e\u8a2d\u5b9a"},"Amazon S3\u306e\u8a2d\u5b9a"),(0,n.kt)("h3",{id:"\u30d0\u30b1\u30c3\u30c8\u3092\u4f5c\u6210\u3059\u308b"},"\u30d0\u30b1\u30c3\u30c8\u3092\u4f5c\u6210\u3059\u308b"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://aws.amazon.com/jp/s3/"},"Amazon S3\u306e\u30b5\u30a4\u30c8"),"\u3078\u30a2\u30af\u30bb\u30b9\u3057\u3001","[Simple Storage Service (Amazon S3) \u306e\u4f7f\u7528\u3092\u958b\u59cb\u3059\u308b]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/49626f199a6c7cc6312ebba11ef0fe89.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/49626f199a6c7cc6312ebba11ef0fe89.png",alt:"Image from Gyazo"}),"\n\u30eb\u30fc\u30c8\u30e6\u30fc\u30b6\u30fc\u3067\u30b5\u30a4\u30f3\u30a4\u30f3\u3057\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","AWS\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u6301\u3063\u3066\u3044\u306a\u3044\u5834\u5408\u306f",(0,n.kt)("a",{parentName:"p",href:"https://portal.aws.amazon.com/billing/signup"},"\u3053\u3061\u3089"),"\u304b\u3089\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u3057\u3066\u304f\u3060\u3055\u3044\u3002",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/00eb9f9bcfc73024acb0803aa888f3a2.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/00eb9f9bcfc73024acb0803aa888f3a2.png",alt:"Image from Gyazo"}),"\n","[\u30d0\u30b1\u30c3\u30c8\u3092\u4f5c\u6210]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/0038b186b7e2fccebf45d11f03c2126b.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/0038b186b7e2fccebf45d11f03c2126b.png",alt:"Image from Gyazo"}),"\n\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u8a2d\u5b9a\u3057\u3001","[\u30d0\u30b1\u30c3\u30c8\u3092\u4f5c\u6210]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002  "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u9805\u76ee"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u5024"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30d0\u30b1\u30c3\u30c8\u540d"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u4efb\u610f\u306e\u540d\u79f0\u3092\u5165\u529b\u3059\u308b\u3002(\u672c\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f",(0,n.kt)("inlineCode",{parentName:"td"},"kuroco-sample"),")")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"AWS\u30ea\u30fc\u30b8\u30e7\u30f3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30a2\u30b8\u30a2\u30d1\u30b7\u30d5\u30a3\u30c3\u30af (\u6771\u4eac) ap-northeast-1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u6240\u6709\u8005"),(0,n.kt)("td",{parentName:"tr",align:"left"},"[ACL\u6709\u52b9]","\u306b\u30c1\u30a7\u30c3\u30af\u3092\u5165\u308c\u308b\u3002",(0,n.kt)("br",null),"[\u5e0c\u671b\u3059\u308b\u30d0\u30b1\u30c3\u30c8\u6240\u6709\u8005]","\u3092\u9078\u629e\u3059\u308b\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u3053\u306e\u30d0\u30b1\u30c3\u30c8\u306e\u30d6\u30ed\u30c3\u30af\u30d1\u30d6\u30ea\u30c3\u30af\u30a2\u30af\u30bb\u30b9\u8a2d\u5b9a"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30fb\u30d1\u30d6\u30ea\u30c3\u30af\u30a2\u30af\u30bb\u30b9\u3092\u3059\u3079\u3066 \u30d6\u30ed\u30c3\u30af\uff1a\u30c1\u30a7\u30c3\u30af\u3092\u5916\u3059",(0,n.kt)("br",null),"\u30fb\u65b0\u3057\u3044\u30a2\u30af\u30bb\u30b9\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u30ea\u30b9\u30c8 (ACL) \u3092\u4ecb\u3057\u3066\u4ed8\u4e0e\u3055\u308c\u305f\u30d0\u30b1\u30c3\u30c8\u3068\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3078\u306e\u30d1\u30d6\u30ea\u30c3\u30af\u30a2\u30af\u30bb\u30b9\u3092\u30d6\u30ed\u30c3\u30af\u3059\u308b\uff1a\u30c1\u30a7\u30c3\u30af\u3092\u5916\u3059",(0,n.kt)("br",null),"\u30fb\u4efb\u610f\u306e\u30a2\u30af\u30bb\u30b9\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u30ea\u30b9\u30c8 (ACL) \u3092\u4ecb\u3057\u3066\u4ed8\u4e0e\u3055\u308c\u305f\u30d0\u30b1\u30c3\u30c8\u3068\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3078\u306e\u30d1\u30d6\u30ea\u30c3\u30af\u30a2\u30af\u30bb\u30b9\u3092\u30d6\u30ed\u30c3\u30af\u3059\u308b\uff1a\u30c1\u30a7\u30c3\u30af\u3092\u5916\u3059",(0,n.kt)("br",null),"\u30fb\u65b0\u3057\u3044\u30d1\u30d6\u30ea\u30c3\u30af\u30d0\u30b1\u30c3\u30c8\u30dd\u30ea\u30b7\u30fc\u307e\u305f\u306f\u30a2\u30af\u30bb\u30b9\u30dd\u30a4\u30f3\u30c8\u30dd\u30ea\u30b7\u30fc\u3092\u4ecb\u3057\u3066\u4ed8\u4e0e\u3055\u308c\u305f\u30d0\u30b1\u30c3\u30c8\u3068\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3078\u306e\u30d1\u30d6\u30ea\u30c3\u30af\u30a2\u30af\u30bb\u30b9\u3092\u30d6\u30ed\u30c3\u30af\u3059\u308b\uff1a\u30c1\u30a7\u30c3\u30af\u3092\u5165\u308c\u308b",(0,n.kt)("br",null),"\u30fb\u4efb\u610f\u306e\u30d1\u30d6\u30ea\u30c3\u30af\u30d0\u30b1\u30c3\u30c8\u30dd\u30ea\u30b7\u30fc\u307e\u305f\u306f\u30a2\u30af\u30bb\u30b9\u30dd\u30a4\u30f3\u30c8\u30dd\u30ea\u30b7\u30fc\u3092\u4ecb\u3057\u305f\u30d0\u30b1\u30c3\u30c8\u3068\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3078\u306e\u30d1\u30d6\u30ea\u30c3\u30af\u30a2\u30af\u30bb\u30b9\u3068\u30af\u30ed\u30b9\u30a2\u30ab\u30a6\u30f3\u30c8\u30a2\u30af\u30bb\u30b9\u3092\u30d6\u30ed\u30c3\u30af\u3059\u308b\uff1a\u30c1\u30a7\u30c3\u30af\u3092\u5165\u308c\u308b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30d1\u30d6\u30ea\u30c3\u30af\u30a2\u30af\u30bb\u30b9\u306e\u30d6\u30ed\u30c3\u30af\u3092\u3059\u3079\u3066\u30aa\u30d5\u306b\u3059\u308b\u3068\u3001\u3053\u306e\u30d0\u30b1\u30c3\u30c8\u3068\u30d0\u30b1\u30c3\u30c8\u5185\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304c\u516c\u958b\u3055\u308c\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"),(0,n.kt)("td",{parentName:"tr",align:"left"},"[\u73fe\u5728\u306e\u8a2d\u5b9a\u306b\u3088\u308a\u3001\u3053\u306e\u30d0\u30b1\u30c3\u30c8\u3068\u30d0\u30b1\u30c3\u30c8\u5185\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304c\u516c\u958b\u3055\u308c\u308b\u53ef\u80fd\u6027\u304c\u3042\u308b\u3053\u3068\u3092\u627f\u8a8d\u3057\u307e\u3059\u3002]","\u306b\u30c1\u30a7\u30c3\u30af\u3092\u5165\u308c\u308b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30d0\u30b1\u30c3\u30c8\u306e\u30d0\u30fc\u30b8\u30e7\u30cb\u30f3\u30b0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"[\u7121\u52b9\u306b\u3059\u308b]","\u306b\u30c1\u30a7\u30c3\u30af\u3092\u5165\u308c\u308b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u6697\u53f7\u5316"),(0,n.kt)("td",{parentName:"tr",align:"left"},"[\u7121\u52b9\u306b\u3059\u308b]","\u306b\u30c1\u30a7\u30c3\u30af\u3092\u5165\u308c\u308b")))),(0,n.kt)("a",{href:"https://diverta.gyazo.com/8d33c1a276df94b9b7912c4cb97478f3",className:"no-zoom",target:"_blank",rel:"noopener noreferrer"},(0,n.kt)("img",{src:"https://t.gyazo.com/teams/diverta/8d33c1a276df94b9b7912c4cb97478f3.png",alt:"Image from Gyazo"})),(0,n.kt)("h3",{id:"cross-origin-resource-sharing-cors\u306e\u8a2d\u5b9a\u3092\u3059\u308b"},"Cross-Origin Resource Sharing (CORS)\u306e\u8a2d\u5b9a\u3092\u3059\u308b"),(0,n.kt)("p",null,"\u7d9a\u3044\u3066\u3001Amazon S3\u306eCORS\u306e\u8a2d\u5b9a\u3092\u3057\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","Amazon S3\u306e\u30d0\u30b1\u30c3\u30c8\u30da\u30fc\u30b8\u304b\u3089\u5148\u307b\u3069\u4f5c\u6210\u3057\u305f\u30d0\u30b1\u30c3\u30c8\u540d\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002  "),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/e2e9ceadd2137c21deffa6ef914a187e.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/e2e9ceadd2137c21deffa6ef914a187e.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"[\u30a2\u30af\u30bb\u30b9\u8a31\u53ef]","\u306e\u30bf\u30d6\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002  "),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/7fa437f4f0775afb9cab52c4960ae3c5.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/7fa437f4f0775afb9cab52c4960ae3c5.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"[Cross-Origin Resource Sharing (CORS)]","\u306e","[\u7de8\u96c6]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002  "),(0,n.kt)("a",{href:"https://diverta.gyazo.com/dca9acdb2f77169a6221e4b3a50f85db",className:"no-zoom",target:"_blank",rel:"noopener noreferrer"},(0,n.kt)("img",{src:"https://t.gyazo.com/teams/diverta/dca9acdb2f77169a6221e4b3a50f85db.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"Cross-Origin Resource Sharing (CORS)\u306e\u7de8\u96c6\u753b\u9762\u304c\u8868\u793a\u3055\u308c\u308b\u306e\u3067\u3001\u4e0b\u8a18\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002  "),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("inlineCode",{parentName:"p"},"https://****.g.kuroco-mng.app"),"\u306e\u90e8\u5206\u306f\u3054\u81ea\u8eab\u306eKuroco\u7ba1\u7406\u753b\u9762\u306eURL\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002  ")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "AllowedHeaders": [\n            "Content-Type",\n            "x-amz-acl",\n            "x-amz-meta-*",\n            "Origin"\n        ],\n        "AllowedMethods": [\n            "GET",\n            "POST",\n            "HEAD"\n        ],\n        "AllowedOrigins": [\n            "https://****.g.kuroco-mng.app"\n        ],\n        "ExposeHeaders": [],\n        "MaxAgeSeconds": 3000\n    }\n]\n')),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/71ab976bc07851ed801e32103d5733a9.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/71ab976bc07851ed801e32103d5733a9.png",alt:"Image from Gyazo"}),"\n\u5165\u529b\u304c\u5b8c\u4e86\u3057\u305f\u3089","[\u5909\u66f4\u306e\u4fdd\u5b58]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,n.kt)("h3",{id:"\u30dd\u30ea\u30b7\u30fc\u3092\u4f5c\u6210\u3059\u308b"},"\u30dd\u30ea\u30b7\u30fc\u3092\u4f5c\u6210\u3059\u308b"),(0,n.kt)("p",null,"\u6b21\u306b\u3001\u30dd\u30ea\u30b7\u30fc\u3092\u4f5c\u6210\u3057\u3001Kuroco\u306b\u4e0e\u3048\u308b\u30a2\u30af\u30bb\u30b9\u8a31\u53ef\u306e\u5185\u5bb9\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u753b\u9762\u53f3\u4e0a\u306e\u30e6\u30fc\u30b6\u540d\u304b\u3089","[\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u8a8d\u8a3c\u60c5\u5831]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/86d4cd611b390fd220f060657afca782.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/86d4cd611b390fd220f060657afca782.png",alt:"Image from Gyazo"}),(0,n.kt)("br",{parentName:"p"}),"\n","[\u30dd\u30ea\u30b7\u30fc]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/a0d648f6500f383f939a5cbb5109fccb.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/a0d648f6500f383f939a5cbb5109fccb.png",alt:"Image from Gyazo"}),"\n","[\u30dd\u30ea\u30b7\u30fc\u306e\u4f5c\u6210]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/ffa28860a7d4754a756fb3d65db289c8.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/ffa28860a7d4754a756fb3d65db289c8.png",alt:"Image from Gyazo"}),"\n\u30dd\u30ea\u30b7\u30fc\u306e\u4f5c\u6210\u753b\u9762\u304c\u8868\u793a\u3055\u308c\u308b\u306e\u3067\u3001JSON\u306e\u30bf\u30d6\u3092\u958b\u304d\u3001\u4e0b\u8a18\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("inlineCode",{parentName:"p"},"%%yourbucket%%"),"\u306e\u90e8\u5206\u306f\u8a72\u5f53\u30d0\u30b1\u30c3\u30c8\u540d\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002(\u672c\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f",(0,n.kt)("inlineCode",{parentName:"p"},"kuroco-sample"),")    "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Effect": "Allow",\n            "Action": [\n                "s3:ListBucket",\n                "s3:GetBucketLocation"\n            ],\n            "Resource": "arn:aws:s3:::%%yourbucket%%"\n        },\n        {\n            "Action": [\n                "s3:*"\n            ],\n            "Effect": "Allow",\n            "Resource": [\n                "arn:aws:s3:::%%yourbucket%%/*"\n            ]\n        }\n    ]\n}\n')),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("inlineCode",{parentName:"p"},"%%%yourbucket%%"),"\u306e\u90e8\u5206\u306f\u3054\u81ea\u8eab\u306e\u30d0\u30b1\u30c3\u30c8\u540d\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,n.kt)("p",null,"\u5165\u529b\u304c\u5b8c\u4e86\u3057\u305f\u3089","[\u6b21\u306e\u30b9\u30c6\u30c3\u30d7\uff1a\u30bf\u30b0]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/c821833fa5e747935316ca1ee6bd8b4b.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/c821833fa5e747935316ca1ee6bd8b4b.png",alt:"Image from Gyazo"}),(0,n.kt)("br",{parentName:"p"}),"\n","\u30bf\u30b0\u306b\u3064\u3044\u3066\u306f\u8a2d\u5b9a\u4e0d\u8981\u306a\u306e\u3067\u3001\u305d\u306e\u307e\u307e","[\u6b21\u306e\u30b9\u30c6\u30c3\u30d7\uff1a\u78ba\u8a8d]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u9032\u307f\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/f9c9137711755fb801e0f7b18cd89f12.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/f9c9137711755fb801e0f7b18cd89f12.png",alt:"Image from Gyazo"}),"\n\u30dd\u30ea\u30b7\u30fc\u306e\u78ba\u8a8d\u30da\u30fc\u30b8\u304c\u8868\u793a\u3055\u308c\u308b\u306e\u3067\u3001\u540d\u524d\u306e\u9805\u76ee\u3092\u5165\u529b\u3057\u3066","[\u30dd\u30ea\u30b7\u30fc\u306e\u4f5c\u6210]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u4eca\u56de\u306f",(0,n.kt)("inlineCode",{parentName:"p"},"kuroco-s3"),"\u3068\u3044\u3046\u540d\u524d\u3092\u4ed8\u3051\u307e\u3057\u305f\u3002",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/0f0bf093a1abe932ad03460574597219.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/0f0bf093a1abe932ad03460574597219.png",alt:"Image from Gyazo"})),(0,n.kt)("h3",{id:"\u30a2\u30af\u30bb\u30b9\u30ad\u30fc\u3092\u4f5c\u6210\u3059\u308b"},"\u30a2\u30af\u30bb\u30b9\u30ad\u30fc\u3092\u4f5c\u6210\u3059\u308b"),(0,n.kt)("p",null,"\u6b21\u306b\u3001Kuroco\u3068\u63a5\u7d9a\u3059\u308b\u305f\u3081\u306e\u30a2\u30af\u30bb\u30b9\u30ad\u30fc\u3092\u4f5c\u6210\u3057\u307e\u3059\u304c\u3001\u30eb\u30fc\u30c8\u30e6\u30fc\u30b6\u30fc\u3067\u306e\u30a2\u30af\u30bb\u30b9\u30ad\u30fc\u4f5c\u6210\u306f\u3001AWS\u30a2\u30ab\u30a6\u30f3\u30c8\u5168\u4f53\u3078\u306e\u7121\u5236\u9650\u30a2\u30af\u30bb\u30b9\u304c\u53ef\u80fd\u306b\u306a\u308b\u305f\u3081\u3001\u63a8\u5968\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u305d\u3053\u3067\u3001\u5236\u9650\u3055\u308c\u305f\u30a2\u30af\u30bb\u30b9\u8a31\u53ef\u3092\u6301\u3064\u65b0\u3057\u3044 IAM \u30e6\u30fc\u30b6\u30fc\u3092\u4f5c\u6210\u3057\u3001\u305d\u306e\u30e6\u30fc\u30b6\u30fc\u306e\u30a2\u30af\u30bb\u30b9\u30ad\u30fc\u3092\u751f\u6210\u3059\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002  "),(0,n.kt)("p",null,"[\u30e6\u30fc\u30b6\u30fc]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/86ed66650898db6a9f2bcf096315d4e7.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/86ed66650898db6a9f2bcf096315d4e7.png",alt:"Image from Gyazo"}),"\n","[\u30e6\u30fc\u30b6\u30fc\u3092\u8ffd\u52a0]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/9be83b03059fdd787db5f26c8b7e0f9c.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/9be83b03059fdd787db5f26c8b7e0f9c.png",alt:"Image from Gyazo"}),"\n\u30e6\u30fc\u30b6\u30fc\u540d\u3092\u5165\u529b\u3057\u3001AWS \u8a8d\u8a3c\u60c5\u5831\u30bf\u30a4\u30d7\u306f","[\u30a2\u30af\u30bb\u30b9\u30ad\u30fc - \u30d7\u30ed\u30b0\u30e9\u30e0\u306b\u3088\u308b\u30a2\u30af\u30bb\u30b9]","\u3092\u9078\u629e\u3057\u3001","[\u6b21\u306e\u30b9\u30c6\u30c3\u30d7\uff1a\u30a2\u30af\u30bb\u30b9\u6a29\u9650]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002  "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u9805\u76ee"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u5024"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30e6\u30fc\u30b6\u30fc\u540d"),(0,n.kt)("td",{parentName:"tr",align:"left"},"kuroco-sample-admin")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"AWS \u8a8d\u8a3c\u60c5\u5831\u30bf\u30a4\u30d7\u3092\u9078\u629e"),(0,n.kt)("td",{parentName:"tr",align:"left"},"[\u30a2\u30af\u30bb\u30b9\u30ad\u30fc - \u30d7\u30ed\u30b0\u30e9\u30e0\u306b\u3088\u308b\u30a2\u30af\u30bb\u30b9]","\u306b\u30c1\u30a7\u30c3\u30af\u3092\u5165\u308c\u308b")))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/519fe55b4bc6b223501957ced4c0e6f9.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/519fe55b4bc6b223501957ced4c0e6f9.png",alt:"Image from Gyazo"}),"\n","[\u65e2\u5b58\u306e\u30dd\u30ea\u30b7\u30fc\u3092\u76f4\u63a5\u30a2\u30bf\u30c3\u30c1]","\u3092\u9078\u629e\u3057\u3001\u5148\u307b\u3069\u4f5c\u6210\u3057\u305f\u30dd\u30ea\u30b7\u30fc\u3092\u691c\u7d22\u3057\u3066\u9078\u629e\u3057\u3001","[\u6b21\u306e\u30b9\u30c6\u30c3\u30d7\uff1a\u30bf\u30b0]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002    "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u9805\u76ee"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u5024"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30a2\u30af\u30bb\u30b9\u8a31\u53ef\u306e\u8a2d\u5b9a"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u65e2\u5b58\u306e\u30dd\u30ea\u30b7\u30fc\u3092\u76f4\u63a5\u30a2\u30bf\u30c3\u30c1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30dd\u30ea\u30b7\u30fc\u540d"),(0,n.kt)("td",{parentName:"tr",align:"left"},"kuroco-s3 \u3092\u9078\u629e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30a2\u30af\u30bb\u30b9\u6a29\u9650\u306e\u5883\u754c\u306e\u8a2d\u5b9a"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30a2\u30af\u30bb\u30b9\u6a29\u9650\u306e\u5883\u754c\u3092\u8a2d\u5b9a\u305b\u305a\u306buser\u3092\u4f5c\u6210\u3059\u308b\u3092\u9078\u629e")))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/7f87207872c7674b4fb6cb22d956390a.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/7f87207872c7674b4fb6cb22d956390a.png",alt:"Image from Gyazo"}),"\n\u30bf\u30b0\u306b\u3064\u3044\u3066\u306f\u8a2d\u5b9a\u4e0d\u8981\u306a\u306e\u3067\u3001\u305d\u306e\u307e\u307e","[\u6b21\u306e\u30b9\u30c6\u30c3\u30d7\uff1a\u78ba\u8a8d]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u9032\u307f\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/c0ff8d657b0143b2c54dd9076217fb8d.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/c0ff8d657b0143b2c54dd9076217fb8d.png",alt:"Image from Gyazo"}),"\n\u5185\u5bb9\u3092\u78ba\u8a8d\u3057\u3001","[\u30e6\u30fc\u30b6\u30fc\u306e\u4f5c\u6210]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/ca26fc2b8a316f22111205c56e7c4607.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/ca26fc2b8a316f22111205c56e7c4607.png",alt:"Image from Gyazo"}),"\n\u30e6\u30fc\u30b6\u30fc\u304c\u4f5c\u6210\u3055\u308c\u305f\u3089\u300c\u30a2\u30af\u30bb\u30b9\u30ad\u30fc ID\u300d\u3068\u300c\u30b7\u30fc\u30af\u30ec\u30c3\u30c8\u30a2\u30af\u30bb\u30b9\u30ad\u30fc\u300d\u304c\u8868\u793a\u3055\u308c\u308b\u306e\u3067\u3001\u30e1\u30e2\u3092\u3057\u3066","[\u9589\u3058\u308b]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002  "),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"\u30b7\u30fc\u30af\u30ec\u30c3\u30c8\u30a2\u30af\u30bb\u30b9\u30ad\u30fc\u306f\u753b\u9762\u3092\u9589\u3058\u308b\u3068\u518d\u8868\u793a\u3067\u304d\u307e\u305b\u3093\u306e\u3067\u3001\u3054\u6ce8\u610f\u304f\u3060\u3055\u3044\u3002  ")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/4e1e998fa255b9d100d1fd61fd99d52e.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/4e1e998fa255b9d100d1fd61fd99d52e.png",alt:"Image from Gyazo"})),(0,n.kt)("h2",{id:"kuroco\u306e\u8a2d\u5b9a"},"Kuroco\u306e\u8a2d\u5b9a"),(0,n.kt)("p",null,"\u3053\u3053\u304b\u3089\u306fKuroco\u306e\u7ba1\u7406\u753b\u9762\u306b\u3066\u4f5c\u696d\u3092\u3057\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","[\u5916\u90e8\u30b7\u30b9\u30c6\u30e0\u9023\u643a]","->","[Amazon S3]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/505e5e28b7f47b69ebda09bfba90eb79.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/505e5e28b7f47b69ebda09bfba90eb79.png",alt:"Image from Gyazo"}),"\nAmazon S3\u3068\u306e\u9023\u643a\u753b\u9762\u304c\u8868\u793a\u3055\u305b\u308b\u306e\u3067\u3001\u300c\u30d0\u30b1\u30c3\u30c8\u540d\u300d\u300c\u30a2\u30af\u30bb\u30b9\u30ad\u30fcID\u300d\u300c\u30b7\u30fc\u30af\u30ec\u30c3\u30c8\u30a2\u30af\u30bb\u30b9\u30ad\u30fc\u300d\u3092\u5165\u529b\u3057\u3066","[\u66f4\u65b0\u3059\u308b]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/009c8ad6ef31bb4caf302294d5168810.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/009c8ad6ef31bb4caf302294d5168810.png",alt:"Image from Gyazo"})),(0,n.kt)("h2",{id:"\u5229\u7528\u65b9\u6cd5"},"\u5229\u7528\u65b9\u6cd5"),(0,n.kt)("h3",{id:"\u30d5\u30a1\u30a4\u30eb"},"\u30d5\u30a1\u30a4\u30eb"),(0,n.kt)("p",null,"\u63a5\u7d9a\u5b8c\u4e86\u5f8c\u3001","[\u30d5\u30a1\u30a4\u30eb\u30de\u30cd\u30fc\u30b8\u30e3\u30fc]","\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001S3\u306e\u8868\u793a\u304c\u78ba\u8a8d\u3067\u304d\u3001\u30d5\u30a1\u30a4\u30eb\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3067\u304d\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/7435382499f703c4582a532b8210fd64.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/7435382499f703c4582a532b8210fd64.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/7987e145471d180ad17c428881f90813.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/7987e145471d180ad17c428881f90813.png",alt:"Image from Gyazo"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/ab16cd4471744868cd66b2ed0b267ec4.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/ab16cd4471744868cd66b2ed0b267ec4.png",alt:"Image from Gyazo"})),(0,n.kt)("h3",{id:"\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9"},"\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9"),(0,n.kt)("p",null,"Kuroco\u7ba1\u7406\u753b\u9762\u306e",(0,n.kt)("a",{parentName:"p",href:"/ja/docs/management/content-structure-topics-group/"},"\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9"),"\u3088\u308a\u3001\u8a2d\u5b9a\u9805\u76ee\u3067","[\u30d5\u30a1\u30a4\u30eb(S3)]","\u3092\u9078\u629e\u3057\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/2835adad88de103f6f8bbebe7765c37b.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/2835adad88de103f6f8bbebe7765c37b.png",alt:"Image from Gyazo"}),"\n\u30b3\u30f3\u30c6\u30f3\u30c4\u7de8\u96c6\u753b\u9762\u306b\u30d5\u30a1\u30a4\u30eb\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u30d5\u30a3\u30fc\u30eb\u30c9\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/87532fc78e17872adea45653e1db70f4.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/87532fc78e17872adea45653e1db70f4.png",alt:"Image from Gyazo"}),"\n\u3053\u3061\u3089\u304b\u3089\u30d5\u30a1\u30a4\u30eb\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\u3068\u3001Amazon S3\u306eStorage\u306b\u30d5\u30a1\u30a4\u30eb\u304c\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3055\u308c\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"))}l.isMDXComponent=!0}}]);