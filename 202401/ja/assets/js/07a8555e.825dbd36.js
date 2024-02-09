"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[16385],{3905:(t,e,a)=>{a.d(e,{Zo:()=>k,kt:()=>o});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var d=r.createContext({}),i=function(t){var e=r.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},k=function(t){var e=i(t.components);return r.createElement(d.Provider,{value:e},t.children)},E="mdxType",N={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,d=t.parentName,k=m(t,["components","mdxType","originalType","parentName"]),E=i(a),f=n,o=E["".concat(d,".").concat(f)]||E[f]||N[f]||l;return a?r.createElement(o,p(p({ref:e},k),{},{components:a})):r.createElement(o,p({ref:e},k))}));function o(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,p=new Array(l);p[0]=f;var m={};for(var d in e)hasOwnProperty.call(e,d)&&(m[d]=e[d]);m.originalType=t,m[E]="string"==typeof t?t:n,p[1]=m;for(var i=2;i<l;i++)p[i]=a[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},96179:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>p,default:()=>N,frontMatter:()=>l,metadata:()=>m,toc:()=>i});var r=a(87462),n=(a(67294),a(3905));const l={title:"API\u30ed\u30b0",category:"\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3",weight:74},p=void 0,m={unversionedId:"management/api-log-list",id:"management/api-log-list",title:"API\u30ed\u30b0",description:"API\u30ed\u30b0\u3067\u306fAPI\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u5c65\u6b74\u304c\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/management/api-log-list.md",sourceDirName:"management",slug:"/management/api-log-list",permalink:"/ja/docs/management/api-log-list",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/management/api-log-list.md",tags:[],version:"current",frontMatter:{title:"API\u30ed\u30b0",category:"\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3",weight:74},sidebar:"documentationSidebar",previous:{title:"\u30ed\u30b0\u30a4\u30f3\u30ed\u30b0",permalink:"/ja/docs/management/login-log-list"},next:{title:"\u7ba1\u7406\u753b\u9762\u30ed\u30b0",permalink:"/ja/docs/management/admin-log-list"}},d={},i=[{value:"API\u30ed\u30b0\u306e\u78ba\u8a8d\u65b9\u6cd5",id:"api\u30ed\u30b0\u306e\u78ba\u8a8d\u65b9\u6cd5",level:2},{value:"API\u30ed\u30b0\u306e\u9805\u76ee\u8aac\u660e",id:"api\u30ed\u30b0\u306e\u9805\u76ee\u8aac\u660e",level:2},{value:"\u7d5e\u308a\u8fbc\u307f\u6761\u4ef6",id:"\u7d5e\u308a\u8fbc\u307f\u6761\u4ef6",level:3},{value:"\u30ad\u30fc\u30ef\u30fc\u30c9\u306b\u3088\u308b\u7d5e\u308a\u8fbc\u307f",id:"\u30ad\u30fc\u30ef\u30fc\u30c9\u306b\u3088\u308b\u7d5e\u308a\u8fbc\u307f",level:4},{value:"\u30ed\u30b0\u65e5\u6642\u306b\u3088\u308b\u7d5e\u308a\u8fbc\u307f",id:"\u30ed\u30b0\u65e5\u6642\u306b\u3088\u308b\u7d5e\u308a\u8fbc\u307f",level:4},{value:"\u8a73\u7d30\u691c\u7d22",id:"\u8a73\u7d30\u691c\u7d22",level:4},{value:"\u691c\u7d22\u306b\u5229\u7528\u3067\u304d\u308b\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3\u306b\u3064\u3044\u3066",id:"\u691c\u7d22\u306b\u5229\u7528\u3067\u304d\u308b\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3\u306b\u3064\u3044\u3066",level:4},{value:"\u4e26\u3073\u9806\u306b\u3064\u3044\u3066",id:"\u4e26\u3073\u9806\u306b\u3064\u3044\u3066",level:5},{value:"\u30ed\u30b0\u4e00\u89a7\u9805\u76ee",id:"\u30ed\u30b0\u4e00\u89a7\u9805\u76ee",level:3},{value:"\u30ad\u30e3\u30c3\u30b7\u30e5\u30b9\u30c6\u30fc\u30bf\u30b9\u306b\u3064\u3044\u3066",id:"\u30ad\u30e3\u30c3\u30b7\u30e5\u30b9\u30c6\u30fc\u30bf\u30b9\u306b\u3064\u3044\u3066",level:4},{value:"\u30e1\u30bd\u30c3\u30c9\u306b\u3064\u3044\u3066",id:"\u30e1\u30bd\u30c3\u30c9\u306b\u3064\u3044\u3066",level:4},{value:"\u30b9\u30c6\u30fc\u30bf\u30b9\u306b\u3064\u3044\u3066",id:"\u30b9\u30c6\u30fc\u30bf\u30b9\u306b\u3064\u3044\u3066",level:4},{value:"\u30dc\u30bf\u30f3\u306e\u8aac\u660e",id:"\u30dc\u30bf\u30f3\u306e\u8aac\u660e",level:3},{value:"\u30ed\u30b0\u4e00\u89a7\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9",id:"\u30ed\u30b0\u4e00\u89a7\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9",level:3}],k={toc:i},E="wrapper";function N(t){let{components:e,...a}=t;return(0,n.kt)(E,(0,r.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"API\u30ed\u30b0\u3067\u306fAPI\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u5c65\u6b74\u304c\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("h2",{id:"api\u30ed\u30b0\u306e\u78ba\u8a8d\u65b9\u6cd5"},"API\u30ed\u30b0\u306e\u78ba\u8a8d\u65b9\u6cd5"),(0,n.kt)("p",null,"[\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3]"," -> ","[\u30ed\u30b0\u7ba1\u7406]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002 "),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/bec37ecc842bbf4422d0bb77e4f6b3d2.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/bec37ecc842bbf4422d0bb77e4f6b3d2.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"\u30da\u30fc\u30b8\u30bf\u30a4\u30c8\u30eb\u306e\u4e0a\u306e","[\u30ed\u30b0\u7ba1\u7406]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001\u8868\u793a\u3055\u308c\u305f\u30d7\u30eb\u30c0\u30a6\u30f3\u306e\u4e2d\u306b\u3042\u308b","[API\u30ed\u30b0]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002  "),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/0784684a788db7f7bb37d69d7ab1808c.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/0784684a788db7f7bb37d69d7ab1808c.png",alt:"Image from Gyazo"})),(0,n.kt)("h2",{id:"api\u30ed\u30b0\u306e\u9805\u76ee\u8aac\u660e"},"API\u30ed\u30b0\u306e\u9805\u76ee\u8aac\u660e"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/cfedbe46a1e9f96219c89f84f0f63964.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/cfedbe46a1e9f96219c89f84f0f63964.png",alt:"Image from Gyazo"})),(0,n.kt)("h3",{id:"\u7d5e\u308a\u8fbc\u307f\u6761\u4ef6"},"\u7d5e\u308a\u8fbc\u307f\u6761\u4ef6"),(0,n.kt)("p",null,"API\u30ed\u30b0\u3067\u306f\u30ad\u30fc\u30ef\u30fc\u30c9\u3084\u30ed\u30b0\u65e5\u6642\u306b\u3088\u308b\u7d5e\u308a\u8fbc\u307f\u3068\u3001\u8a73\u7d30\u691c\u7d22\u3092\u7528\u610f\u3057\u3066\u3044\u307e\u3059\u3002"),(0,n.kt)("h4",{id:"\u30ad\u30fc\u30ef\u30fc\u30c9\u306b\u3088\u308b\u7d5e\u308a\u8fbc\u307f"},"\u30ad\u30fc\u30ef\u30fc\u30c9\u306b\u3088\u308b\u7d5e\u308a\u8fbc\u307f"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/d1da6e518dddf4d87824684e0fc0b8cc.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/d1da6e518dddf4d87824684e0fc0b8cc.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"[\u30ad\u30fc\u30ef\u30fc\u30c9]"," \u30c6\u30ad\u30b9\u30c8\u30dc\u30c3\u30af\u30b9\u306b\u691c\u7d22\u3059\u308b\u30ad\u30fc\u30ef\u30fc\u30c9\u3092\u5165\u529b\u3057\u307e\u3059\u3002\u30ad\u30fc\u30ef\u30fc\u30c9\u3092\u542b\u3080\u30ed\u30b0\u3092\u7d5e\u308a\u8fbc\u307f\u307e\u3059\u3002"),(0,n.kt)("h4",{id:"\u30ed\u30b0\u65e5\u6642\u306b\u3088\u308b\u7d5e\u308a\u8fbc\u307f"},"\u30ed\u30b0\u65e5\u6642\u306b\u3088\u308b\u7d5e\u308a\u8fbc\u307f"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/7f6c79d50c90c0b4756ea54277379826.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/7f6c79d50c90c0b4756ea54277379826.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"\u30ed\u30b0\u65e5\u6642\u306e\u958b\u59cb\u3068\u7d42\u4e86\u3067\u671f\u9593\u9078\u629e\u3057\u307e\u3059\u3002\u9078\u629e\u3057\u305f\u671f\u9593\u306e\u30ed\u30b0\u3092\u7d5e\u308a\u8fbc\u307f\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u6307\u5b9a\u3067\u304d\u308b\u30ed\u30b0\u306e\u671f\u9593\u306f35\u65e5\u9593\u3068\u306a\u308a\u307e\u3059\u3002\u904e\u53bb\u306e\u30ed\u30b0\u65e5\u6642\u3092\u6307\u5b9a\u3059\u308b\u5834\u5408\u308235\u65e5\u9593\u306e\u7bc4\u56f2\u3068\u306a\u308b\u3088\u3046\u306b\u6307\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("h4",{id:"\u8a73\u7d30\u691c\u7d22"},"\u8a73\u7d30\u691c\u7d22"),(0,n.kt)("p",null,"[\u8a73\u7d30\u691c\u7d22]"," \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u7d5e\u308a\u8fbc\u307f\u6761\u4ef6\u3092\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/9c7513076df74d627cdbc41d50843478.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/9c7513076df74d627cdbc41d50843478.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"\u7d5e\u308a\u8fbc\u307f\u5bfe\u8c61\u3068\u3057\u3066\u6307\u5b9a\u3067\u304d\u308b\u9805\u76ee\u306f\u6b21\u306e\u901a\u308a\u3067\u3059\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u9805\u76ee"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8aac\u660e"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u6307\u5b9a\u3067\u304d\u308b\u6761\u4ef6"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30ad\u30e3\u30c3\u30b7\u30e5\u30b9\u30c6\u30fc\u30bf\u30b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u63d0\u4f9b\u72b6\u6cc1"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#%E3%82%AD%E3%83%A3%E3%83%83%E3%82%B7%E3%83%A5%E3%82%B9%E3%83%86%E3%83%BC%E3%82%BF%E3%82%B9%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6"},"\u30ad\u30e3\u30c3\u30b7\u30e5\u30b9\u30c6\u30fc\u30bf\u30b9"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"HTTP\u30e1\u30bd\u30c3\u30c9\xa0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"HTTP\u30e1\u30bd\u30c3\u30c9"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#%E3%83%A1%E3%82%BD%E3%83%83%E3%83%89%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6"},"\u30e1\u30bd\u30c3\u30c9\u306b\u3064\u3044\u3066"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30b9\u30c6\u30fc\u30bf\u30b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"HTTP\u30ec\u30b9\u30dd\u30f3\u30b9\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#%E3%82%B9%E3%83%86%E3%83%BC%E3%82%BF%E3%82%B9%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6"},"\u30b9\u30c6\u30fc\u30bf\u30b9"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30ec\u30b9\u30dd\u30f3\u30b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"API\u5fdc\u7b54\u30e1\u30c3\u30bb\u30fc\u30b8"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#%E6%A4%9C%E7%B4%A2%E3%81%AB%E5%88%A9%E7%94%A8%E3%81%A7%E3%81%8D%E3%82%8B%E3%82%AA%E3%83%9A%E3%83%AC%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6"},"\u691c\u7d22\u6761\u4ef6"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"URI"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30ea\u30af\u30a8\u30b9\u30c8\u304c\u884c\u308f\u308c\u305f\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306eURI \xa0"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#%E6%A4%9C%E7%B4%A2%E3%81%AB%E5%88%A9%E7%94%A8%E3%81%A7%E3%81%8D%E3%82%8B%E3%82%AA%E3%83%9A%E3%83%AC%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6"},"\u691c\u7d22\u6761\u4ef6"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u9001\u4fe1\u5143IP\u30a2\u30c9\u30ec\u30b9\xa0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u884c\u3063\u305f\u30e6\u30fc\u30b6\u30fc\u306eIP\u30a2\u30c9\u30ec\u30b9  \xa0"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#%E6%A4%9C%E7%B4%A2%E3%81%AB%E5%88%A9%E7%94%A8%E3%81%A7%E3%81%8D%E3%82%8B%E3%82%AA%E3%83%9A%E3%83%AC%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6"},"\u691c\u7d22\u6761\u4ef6"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"API\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30ea\u30af\u30a8\u30b9\u30c8\u3068\u4e00\u7dd2\u306b\u6e21\u3055\u308c\u305f\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3 \xa0"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#%E6%A4%9C%E7%B4%A2%E3%81%AB%E5%88%A9%E7%94%A8%E3%81%A7%E3%81%8D%E3%82%8B%E3%82%AA%E3%83%9A%E3%83%AC%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6"},"\u691c\u7d22\u6761\u4ef6"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u51e6\u7406\u5b9f\u884c\u6642\u9593"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30b5\u30fc\u30d0\u30fc\u304c\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u51e6\u7406\u3059\u308b\u306e\u306b\u4f7f\u7528\u3057\u305f\u6642\u9593\u3002\u6307\u5b9a\u3059\u308b\u6570\u5b57\u306fms"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#%E6%A4%9C%E7%B4%A2%E3%81%AB%E5%88%A9%E7%94%A8%E3%81%A7%E3%81%8D%E3%82%8B%E3%82%AA%E3%83%9A%E3%83%AC%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6"},"\u691c\u7d22\u6761\u4ef6"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30ec\u30b9\u30dd\u30f3\u30b9\u30b5\u30a4\u30ba\xa0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"HTTP\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u30dc\u30c7\u30a3\u30b5\u30a4\u30ba\u3002\u6307\u5b9a\u3059\u308b\u6570\u5b57\u306f\u30d0\u30a4\u30c8\u6570"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#%E6%A4%9C%E7%B4%A2%E3%81%AB%E5%88%A9%E7%94%A8%E3%81%A7%E3%81%8D%E3%82%8B%E3%82%AA%E3%83%9A%E3%83%AC%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6"},"\u691c\u7d22\u6761\u4ef6"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30ea\u30d5\u30a1\u30e9\u30fc\xa0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u73fe\u5728\u30ea\u30af\u30a8\u30b9\u30c8\u3055\u308c\u3066\u3044\u308b\u30da\u30fc\u30b8\u3078\u306e\u76f4\u524d\u306eWeb\u30da\u30fc\u30b8\u306e\u30a2\u30c9\u30ec\u30b9 \xa0"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#%E6%A4%9C%E7%B4%A2%E3%81%AB%E5%88%A9%E7%94%A8%E3%81%A7%E3%81%8D%E3%82%8B%E3%82%AA%E3%83%9A%E3%83%AC%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6"},"\u691c\u7d22\u6761\u4ef6"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30e6\u30fc\u30b6\u30fc\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30a2\u30af\u30bb\u30b9\u3057\u305fWeb\u30d6\u30e9\u30a6\u30b6\u306e\u30e6\u30fc\u30b6\u30fc\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#%E6%A4%9C%E7%B4%A2%E3%81%AB%E5%88%A9%E7%94%A8%E3%81%A7%E3%81%8D%E3%82%8B%E3%82%AA%E3%83%9A%E3%83%AC%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6"},"\u691c\u7d22\u6761\u4ef6"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u90fd\u5e02\u30b3\u30fc\u30c9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u884c\u3063\u305f\u30e6\u30fc\u30b6\u30fc\u306e\u90fd\u5e02\u60c5\u5831 \xa0"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#%E6%A4%9C%E7%B4%A2%E3%81%AB%E5%88%A9%E7%94%A8%E3%81%A7%E3%81%8D%E3%82%8B%E3%82%AA%E3%83%9A%E3%83%AC%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6"},"\u691c\u7d22\u6761\u4ef6"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u56fd\u30b3\u30fc\u30c9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u884c\u3063\u305f\u30e6\u30fc\u30b6\u30fc\u306e\u56fd\u30b3\u30fc\u30c9 \xa0"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#%E6%A4%9C%E7%B4%A2%E3%81%AB%E5%88%A9%E7%94%A8%E3%81%A7%E3%81%8D%E3%82%8B%E3%82%AA%E3%83%9A%E3%83%AC%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6"},"\u691c\u7d22\u6761\u4ef6"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u753b\u50cf\u5909\u63db"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fastly\u306e\u753b\u50cf\u30aa\u30d7\u30c6\u30a3\u30de\u30a4\u30b6\u30fc\u30c7\u30fc\u30bf"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#%E6%A4%9C%E7%B4%A2%E3%81%AB%E5%88%A9%E7%94%A8%E3%81%A7%E3%81%8D%E3%82%8B%E3%82%AA%E3%83%9A%E3%83%AC%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6"},"\u691c\u7d22\u6761\u4ef6"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30fb\u30ea\u30af\u30a8\u30b9\u30c8ID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Kuroco\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u8b58\u5225\u5b50 \xa0"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#%E6%A4%9C%E7%B4%A2%E3%81%AB%E5%88%A9%E7%94%A8%E3%81%A7%E3%81%8D%E3%82%8B%E3%82%AA%E3%83%9A%E3%83%AC%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6"},"\u691c\u7d22\u6761\u4ef6"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30ea\u30af\u30a8\u30b9\u30c8ID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fastly\u304c\u4f7f\u7528\u3059\u308b\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u8b58\u5225\u5b50 \xa0"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#%E6%A4%9C%E7%B4%A2%E3%81%AB%E5%88%A9%E7%94%A8%E3%81%A7%E3%81%8D%E3%82%8B%E3%82%AA%E3%83%9A%E3%83%AC%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6"},"\u691c\u7d22\u6761\u4ef6"))))),(0,n.kt)("p",null,"\u8a73\u7d30\u691c\u7d22\u306f\u8907\u6570\u306e\u6761\u4ef6\u3092AND\u3001\u307e\u305f\u306fOR\u3067\u9023\u7d50\u3067\u304d\u307e\u3059\u3002AND\u306e\u5834\u5408\u306f\u6307\u5b9a\u3057\u305f\u6761\u4ef6\u3059\u3079\u3066\u306b\u30de\u30c3\u30c1\u3059\u308b\u30c7\u30fc\u30bf\u306e\u307f\u3092\u5bfe\u8c61\u3068\u3057\u307e\u3059\u3002OR\u6761\u4ef6\u306f\u6307\u5b9a\u3057\u305f\u6761\u4ef6\u306e\u3044\u305a\u308c\u304b\u306b\u30de\u30c3\u30c1\u3059\u308b\u30c7\u30fc\u30bf\u3092\u5bfe\u8c61\u3068\u3057\u307e\u3059\u3002"),(0,n.kt)("h4",{id:"\u691c\u7d22\u306b\u5229\u7528\u3067\u304d\u308b\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3\u306b\u3064\u3044\u3066"},"\u691c\u7d22\u306b\u5229\u7528\u3067\u304d\u308b\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3\u306b\u3064\u3044\u3066"),(0,n.kt)("p",null,"\u691c\u7d22\u3067\u306f\u6b21\u306e\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3\u304c\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u578b"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u5bfe\u8c61\u3068\u306a\u308b\u30c7\u30fc\u30bf"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u542b\u3080"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6587\u5b57\u5217"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6761\u4ef6\u304c\u4e00\u90e8\u306b\u4e00\u81f4\u3059\u308b\u30c7\u30fc\u30bf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u542b\u307e\u306a\u3044"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6587\u5b57\u5217"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6761\u4ef6\u304c\u3044\u305a\u308c\u306b\u3082\u4e00\u81f4\u3057\u306a\u3044\u30c7\u30fc\u30bf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"="),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6587\u5b57\u5217\u30fb\u6570\u5024"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6761\u4ef6\u306b\u4e00\u81f4\u3059\u308b\u30c7\u30fc\u30bf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"!="),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6587\u5b57\u5217\u30fb\u6570\u5024"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6761\u4ef6\u306b\u4e00\u81f4\u3057\u306a\u3044\u30c7\u30fc\u30bf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"<"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6587\u5b57\u5217\u30fb\u6570\u5024"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6761\u4ef6\u672a\u6e80\u306e\u30c7\u30fc\u30bf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},">"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6587\u5b57\u5217\u30fb\u6570\u5024"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6761\u4ef6\u3088\u308a\u5927\u304d\u3044\u30c7\u30fc\u30bf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"<="),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6587\u5b57\u5217\u30fb\u6570\u5024"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6761\u4ef6\u4ee5\u4e0b\u306e\u30c7\u30fc\u30bf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},">="),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6587\u5b57\u5217\u30fb\u6570\u5024"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6761\u4ef6\u4ee5\u4e0a\u306e\u30c7\u30fc\u30bf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u3067\u59cb\u307e\u308b"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6587\u5b57\u5217"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6761\u4ef6\u3067\u306f\u3058\u307e\u308b\u30c7\u30fc\u30bf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u3067\u59cb\u307e\u3089\u306a\u3044"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6587\u5b57\u5217"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6761\u4ef6\u3067\u306f\u3058\u307e\u3089\u306a\u3044\u30c7\u30fc\u30bf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u3067\u7d42\u308f\u308b"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6587\u5b57\u5217"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6761\u4ef6\u3067\u7d42\u308f\u308b\u30c7\u30fc\u30bf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u3067\u7d42\u308f\u3089\u306a\u3044"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6587\u5b57\u5217"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6761\u4ef6\u3067\u7d42\u308f\u3089\u306a\u3044\u30c7\u30fc\u30bf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u3069\u308c\u304b\u3092\u542b\u3080"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6587\u5b57\u5217\u30fb\u6570\u5024"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6761\u4ef6\u3092\u8907\u6570\u6307\u5b9a\u3057\u3001\u3044\u305a\u308c\u304b\u306e\u6761\u4ef6\u306b\u4e00\u81f4\u3059\u308b\u30c7\u30fc\u30bf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u3069\u308c\u3082\u542b\u307e\u306a\u3044"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6587\u5b57\u5217\u30fb\u6570\u5024"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6761\u4ef6\u3092\u8907\u6570\u6307\u5b9a\u3057\u3001\u3044\u305a\u308c\u306e\u6761\u4ef6\u306b\u3082\u4e00\u81f4\u3057\u306a\u3044\u30c7\u30fc\u30bf")))),(0,n.kt)("p",null,"\u203b \u51e6\u7406\u5b9f\u884c\u6642\u9593\u3001 \u30ec\u30b9\u30dd\u30f3\u30b9\u30b5\u30a4\u30ba\u306f\u6570\u5024\u7528\u306e\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3\u306e\u307f\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("h5",{id:"\u4e26\u3073\u9806\u306b\u3064\u3044\u3066"},"\u4e26\u3073\u9806\u306b\u3064\u3044\u3066"),(0,n.kt)("p",null,"\u30bd\u30fc\u30c8\u30ad\u30fc\u3068\u8868\u793a\u9806\u3092\u9078\u629e\u3059\u308b\u3053\u3068\u3067\u691c\u7d22\u7d50\u679c\u306e\u4e26\u3073\u9806\u3092\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002\u4e26\u3073\u9806\u306fASC\uff08\u6607\u9806\u3002\u5c0f\u3055\u3044\u65b9\u304b\u3089\u5927\u304d\u304f\u306a\u3063\u3066\u3044\u304f\uff09\u307e\u305f\u306fDESC\uff08\u964d\u9806\u3002\u5927\u304d\u3044\u65b9\u304b\u3089\u5c0f\u3055\u304f\u306a\u3063\u3066\u3044\u304f\uff09\u3092\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("h3",{id:"\u30ed\u30b0\u4e00\u89a7\u9805\u76ee"},"\u30ed\u30b0\u4e00\u89a7\u9805\u76ee"),(0,n.kt)("p",null,"\u30ed\u30b0\u3068\u3057\u3066\u4e00\u89a7\u3055\u308c\u308b\u30c7\u30fc\u30bf\u306e\u9805\u76ee\u306f\u6b21\u306e\u901a\u308a\u3067\u3059\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u9805\u76ee"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8aac\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30ed\u30b0\u65e5\u6642\xa0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30ed\u30b0\u306e\u8a18\u9332\u3055\u308c\u305f\u65e5\u6642\u3092\u8868\u793a\u3057\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30ad\u30e3\u30c3\u30b7\u30e5\u30b9\u30c6\u30fc\u30bf\u30b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30ea\u30af\u30a8\u30b9\u30c8\u304c\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u3088\u3063\u3066\u63d0\u4f9b\u3055\u308c\u305f\u304b\u3069\u3046\u304b\u3092\u8868\u793a\u3057\u307e\u3059\u3002\u8a73\u7d30\u306f",(0,n.kt)("a",{parentName:"td",href:"#%E3%82%AD%E3%83%A3%E3%83%83%E3%82%B7%E3%83%A5%E3%82%B9%E3%83%86%E3%83%BC%E3%82%BF%E3%82%B9%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6"},"\u30ad\u30e3\u30c3\u30b7\u30e5\u30b9\u30c6\u30fc\u30bf\u30b9\u306b\u3064\u3044\u3066"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"HTTP\u30e1\u30bd\u30c3\u30c9\xa0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"HTTP\u30e1\u30bd\u30c3\u30c9\u3092\u8868\u793a\u3057\u307e\u3059\u3002\u8a73\u7d30\u306f",(0,n.kt)("a",{parentName:"td",href:"#%E3%83%A1%E3%82%BD%E3%83%83%E3%83%89%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6"},"\u30e1\u30bd\u30c3\u30c9\u306b\u3064\u3044\u3066"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30b9\u30c6\u30fc\u30bf\u30b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"HTTP\u30ec\u30b9\u30dd\u30f3\u30b9\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9\u3092\u8868\u793a\u3057\u307e\u3059\u3002\u8a73\u7d30\u306f",(0,n.kt)("a",{parentName:"td",href:"#%E3%82%B9%E3%83%86%E3%83%BC%E3%82%BF%E3%82%B9%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6"},"\u30b9\u30c6\u30fc\u30bf\u30b9\u306b\u3064\u3044\u3066"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30ec\u30b9\u30dd\u30f3\u30b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"API\u5fdc\u7b54\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u8868\u793a\u3057\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"URI\xa0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30ea\u30af\u30a8\u30b9\u30c8\u304c\u9001\u3089\u308c\u305f\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306eURI\u3092\u8868\u793a\u3057\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u9001\u4fe1\u5143IP\u30a2\u30c9\u30ec\u30b9\xa0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u884c\u3063\u305f\u30e6\u30fc\u30b6\u30fc\u306eIP\u30a2\u30c9\u30ec\u30b9\u3092\u8868\u793a\u3057\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"API\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30ea\u30af\u30a8\u30b9\u30c8\u3068\u4e00\u7dd2\u306b\u9001\u3089\u308c\u305f\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u3092\u8868\u793a\u3057\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u51e6\u7406\u5b9f\u884c\u6642\u9593"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30b5\u30fc\u30d0\u30fc\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u51e6\u7406\u6642\u9593\u3092\u8868\u793a\u3057\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30ec\u30b9\u30dd\u30f3\u30b9\u30b5\u30a4\u30ba\xa0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"HTTP\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u30dc\u30c7\u30a3\u30b5\u30a4\u30ba\u3092\u8868\u793a\u3057\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30ea\u30d5\u30a1\u30e9\u30fc\xa0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u73fe\u5728\u30ea\u30af\u30a8\u30b9\u30c8\u3055\u308c\u3066\u3044\u308b\u30da\u30fc\u30b8\u3078\u306e\u76f4\u524d\u306e\u30a6\u30a7\u30d6\u30da\u30fc\u30b8\u306e\u30a2\u30c9\u30ec\u30b9\u3092\u8868\u793a\u3057\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30e6\u30fc\u30b6\u30fc\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30a2\u30af\u30bb\u30b9\u3057\u305fWeb\u30d6\u30e9\u30a6\u30b6\u306e\u30e6\u30fc\u30b6\u30fc\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u3092\u8868\u793a\u3057\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u90fd\u5e02\u30b3\u30fc\u30c9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u884c\u3063\u305f\u30e6\u30fc\u30b6\u30fc\u306e\u90fd\u5e02\u60c5\u5831\u3092\u8868\u793a\u3057\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u56fd\u30b3\u30fc\u30c9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u884c\u3063\u305f\u30e6\u30fc\u30b6\u30fc\u306e\u56fd\u30b3\u30fc\u30c9\u3092\u8868\u793a\u3057\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u753b\u50cf\u5909\u63db"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fastly\u306e\u753b\u50cf\u30aa\u30d7\u30c6\u30a3\u30de\u30a4\u30b6\u30fc\u30c7\u30fc\u30bf\u3092\u8868\u793a\u3057\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30ea\u30af\u30a8\u30b9\u30c8ID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fastly\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u8b58\u5225\u5b50\u3092\u8868\u793a\u3057\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30fb\u30ea\u30af\u30a8\u30b9\u30c8ID\xa0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Kuroco\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u8b58\u5225\u5b50\u3092\u8868\u793a\u3057\u307e\u3059\u3002")))),(0,n.kt)("h4",{id:"\u30ad\u30e3\u30c3\u30b7\u30e5\u30b9\u30c6\u30fc\u30bf\u30b9\u306b\u3064\u3044\u3066"},"\u30ad\u30e3\u30c3\u30b7\u30e5\u30b9\u30c6\u30fc\u30bf\u30b9\u306b\u3064\u3044\u3066"),(0,n.kt)("p",null,"\u30ad\u30e3\u30c3\u30b7\u30e5\u30b9\u30c6\u30fc\u30bf\u30b9\u306f4\u3064\u306e\u5024\u3092\u53d6\u308a\u307e\u3059\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u9805\u76ee"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8aac\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"HIT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u304c\u3042\u308a\u307e\u3057\u305f\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"MISS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30ad\u30e3\u30c3\u30b7\u30e5\u304c\u898b\u3064\u304b\u3089\u305a\u3001\u30b5\u30fc\u30d0\u30fc\u306b\u5230\u9054\u3057\u307e\u3057\u305f\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"PASS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30ad\u30e3\u30c3\u30b7\u30e5\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ERROR"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30ad\u30e3\u30c3\u30b7\u30e5\u4e2d\u306b\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f\u3002")))),(0,n.kt)("h4",{id:"\u30e1\u30bd\u30c3\u30c9\u306b\u3064\u3044\u3066"},"\u30e1\u30bd\u30c3\u30c9\u306b\u3064\u3044\u3066"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"GET"),(0,n.kt)("li",{parentName:"ul"},"POST"),(0,n.kt)("li",{parentName:"ul"},"HEAD")),(0,n.kt)("h4",{id:"\u30b9\u30c6\u30fc\u30bf\u30b9\u306b\u3064\u3044\u3066"},"\u30b9\u30c6\u30fc\u30bf\u30b9\u306b\u3064\u3044\u3066"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"OK"),(0,n.kt)("li",{parentName:"ul"},"Accepted"),(0,n.kt)("li",{parentName:"ul"},"Partial Content "),(0,n.kt)("li",{parentName:"ul"},"Moved Permanently "),(0,n.kt)("li",{parentName:"ul"},"Moved Temporarily"),(0,n.kt)("li",{parentName:"ul"},"Bad Request"),(0,n.kt)("li",{parentName:"ul"},"Unauthorized"),(0,n.kt)("li",{parentName:"ul"},"Forbidden"),(0,n.kt)("li",{parentName:"ul"},"Not Found\xa0  "),(0,n.kt)("li",{parentName:"ul"},"Method Not Allowed\xa0  "),(0,n.kt)("li",{parentName:"ul"},"Unprocessable Entity\xa0  "),(0,n.kt)("li",{parentName:"ul"},"Internal Server Error  "),(0,n.kt)("li",{parentName:"ul"},"Bad Gateway"),(0,n.kt)("li",{parentName:"ul"},"Service Unavailable"),(0,n.kt)("li",{parentName:"ul"},"Gateway Time-out")),(0,n.kt)("h3",{id:"\u30dc\u30bf\u30f3\u306e\u8aac\u660e"},"\u30dc\u30bf\u30f3\u306e\u8aac\u660e"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/9714eb9d8e8cc703800f31f45d2d69ee.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/9714eb9d8e8cc703800f31f45d2d69ee.png",alt:"Image from Gyazo"})),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u30dc\u30bf\u30f3"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8aac\u660e\xa0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u691c\u7d22\u3059\u308b"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u3057\u305f\u7d5e\u308a\u8fbc\u307f\u6761\u4ef6\u3067\u691c\u7d22\u3057\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3059\u308b"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30ed\u30b0\u4e00\u89a7\u3067\u8868\u793a\u3057\u3066\u3044\u308b\u30ed\u30b0\u60c5\u5831\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u524a\u9664\u3059\u308b"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30ed\u30b0\u4e00\u89a7\u3067\u8868\u793a\u3057\u3066\u3044\u308b\u30ed\u30b0\u60c5\u5831\u3092\u524a\u9664\u3057\u307e\u3059\u3002")))),(0,n.kt)("h3",{id:"\u30ed\u30b0\u4e00\u89a7\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"},"\u30ed\u30b0\u4e00\u89a7\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"),(0,n.kt)("p",null,"[\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3059\u308b]","\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u8a2d\u5b9a\u304c\u958b\u304d\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/904ae8d8fef53ff1860b35dab03433f5.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/904ae8d8fef53ff1860b35dab03433f5.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/9c0de24b0571392b4b347c49feaf6cd8.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/9c0de24b0571392b4b347c49feaf6cd8.png",alt:"Image from Gyazo"})),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u9805\u76ee"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8aac\u660e\xa0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6587\u5b57\u30b3\u30fc\u30c9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"CSV\u30d5\u30a1\u30a4\u30eb\u306e\u6587\u5b57\u30b3\u30fc\u30c9\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30ad\u30e3\u30f3\u30bb\u30eb"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3092\u30ad\u30e3\u30f3\u30bb\u30eb\u3057\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3059\u308b"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u307e\u3059\u3002")))))}N.isMDXComponent=!0}}]);