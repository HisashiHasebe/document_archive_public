"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[17181],{3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>u});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var c=r.createContext({}),m=function(t){var e=r.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},o=function(t){var e=m(t.components);return r.createElement(c.Provider,{value:e},t.children)},k="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,c=t.parentName,o=i(t,["components","mdxType","originalType","parentName"]),k=m(a),s=n,u=k["".concat(c,".").concat(s)]||k[s]||d[s]||l;return a?r.createElement(u,p(p({ref:e},o),{},{components:a})):r.createElement(u,p({ref:e},o))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,p=new Array(l);p[0]=s;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i[k]="string"==typeof t?t:n,p[1]=i;for(var m=2;m<l;m++)p[m]=a[m];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},41147:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var r=a(87462),n=(a(67294),a(3905));const l={date:new Date("2022-04-13T00:00:00.000Z"),title:"Jamstack\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3",description:"Jamstack\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u306f\u3001HTML\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u65b9\u6cd5\u306b\u57fa\u3065\u3044\u30664\u3064\u306e\u30bf\u30a4\u30d7\u306b\u5206\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",slug:"jamstack-architecture",authors:"diverta",hide_table_of_contents:!1},p=void 0,i={permalink:"/ja/blog/jamstack-architecture",source:"@site/i18n/ja/docusaurus-plugin-content-blog/jamstack-architecture.md",title:"Jamstack\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3",description:"Jamstack\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u306f\u3001HTML\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u65b9\u6cd5\u306b\u57fa\u3065\u3044\u30664\u3064\u306e\u30bf\u30a4\u30d7\u306b\u5206\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",date:"2022-04-13T00:00:00.000Z",formattedDate:"2022\u5e744\u670813\u65e5",tags:[],readingTime:4.425,hasTruncateMarker:!0,authors:[{name:"Diverta",title:"Creator of Kuroco service",url:"https://www.diverta.co.jp",imageURL:"https://github.com/diverta.png",key:"diverta"}],frontMatter:{date:"2022-04-13T00:00:00.000Z",title:"Jamstack\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3",description:"Jamstack\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u306f\u3001HTML\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u65b9\u6cd5\u306b\u57fa\u3065\u3044\u30664\u3064\u306e\u30bf\u30a4\u30d7\u306b\u5206\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",slug:"jamstack-architecture",authors:"diverta",hide_table_of_contents:!1},prevItem:{title:"Jamstack\u3068\u5f93\u6765\u306e\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u306e\u9055\u3044",permalink:"/ja/blog/differences-between-jamstack-and-conventional-websites"},nextItem:{title:"Jamstack\u306e\u5229\u70b9\u3068\u6b20\u70b9",permalink:"/ja/blog/pros-and-cons-of-jamstack"}},c={authorsImageUrls:[void 0]},m=[{value:"\u4e00\u89a7\u6bd4\u8f03",id:"\u4e00\u89a7\u6bd4\u8f03",level:2},{value:"SPA (\u30b7\u30f3\u30b0\u30eb\u30da\u30fc\u30b8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3)",id:"spa-\u30b7\u30f3\u30b0\u30eb\u30da\u30fc\u30b8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3",level:2},{value:"SSG (\u30b5\u30fc\u30d0\u30fc\u30b5\u30a4\u30c9\u30b8\u30a7\u30cd\u30ec\u30fc\u30b7\u30e7\u30f3)",id:"ssg-\u30b5\u30fc\u30d0\u30fc\u30b5\u30a4\u30c9\u30b8\u30a7\u30cd\u30ec\u30fc\u30b7\u30e7\u30f3",level:2},{value:"SSR (\u30b5\u30fc\u30d0\u30fc\u30b5\u30a4\u30c9\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0)",id:"ssr-\u30b5\u30fc\u30d0\u30fc\u30b5\u30a4\u30c9\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0",level:2},{value:"ISR (\u30a4\u30f3\u30af\u30ea\u30e1\u30f3\u30bf\u30eb\u30b9\u30bf\u30c6\u30a3\u30c3\u30af\u30ea\u30b8\u30a7\u30cd\u30ec\u30fc\u30b7\u30e7\u30f3)",id:"isr-\u30a4\u30f3\u30af\u30ea\u30e1\u30f3\u30bf\u30eb\u30b9\u30bf\u30c6\u30a3\u30c3\u30af\u30ea\u30b8\u30a7\u30cd\u30ec\u30fc\u30b7\u30e7\u30f3",level:2}],o={toc:m},k="wrapper";function d(t){let{components:e,...a}=t;return(0,n.kt)(k,(0,r.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Jamstack\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u306f\u3001HTML\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u65b9\u6cd5\u306b\u57fa\u3065\u3044\u3066\u4ee5\u4e0b\u306e4\u3064\u306e\u30bf\u30a4\u30d7\u306b\u5206\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059:"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"\u3053\u306e\u6587\u7ae0\u306f\u6a5f\u68b0\u7ffb\u8a33\u306b\u3088\u3063\u3066\u63d0\u4f9b\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u539f\u6587\u306f\u82f1\u8a9e\u3067\u3042\u308a\u3001OpenAI\u306b\u3088\u3063\u3066\u7ffb\u8a33\u3055\u308c\u307e\u3057\u305f\u3002")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"SPA (\u30b7\u30f3\u30b0\u30eb\u30da\u30fc\u30b8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3)"),(0,n.kt)("li",{parentName:"ul"},"SSG (\u30b5\u30fc\u30d0\u30fc\u30b5\u30a4\u30c9\u30b8\u30a7\u30cd\u30ec\u30fc\u30b7\u30e7\u30f3)"),(0,n.kt)("li",{parentName:"ul"},"SSR (\u30b5\u30fc\u30d0\u30fc\u30b5\u30a4\u30c9\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0)"),(0,n.kt)("li",{parentName:"ul"},"ISR (\u30a4\u30f3\u30af\u30ea\u30e1\u30f3\u30bf\u30eb\u30b9\u30bf\u30c6\u30a3\u30c3\u30af\u30ea\u30b8\u30a7\u30cd\u30ec\u30fc\u30b7\u30e7\u30f3)"),(0,n.kt)("li",{parentName:"ul"},"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001\u305d\u308c\u3089\u306e\u9055\u3044\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002")),(0,n.kt)("h2",{id:"\u4e00\u89a7\u6bd4\u8f03"},"\u4e00\u89a7\u6bd4\u8f03"),(0,n.kt)("p",null,"\u4ee5\u4e0b\u306e\u8868\u306f\u30014\u3064\u306e\u30bf\u30a4\u30d7\u306e\u985e\u4f3c\u70b9\u3068\u9055\u3044\u3092\u307e\u3068\u3081\u305f\u3082\u306e\u3067\u3059:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:"center"},"SPA"),(0,n.kt)("th",{parentName:"tr",align:"center"},"SSG"),(0,n.kt)("th",{parentName:"tr",align:"center"},"SSR"),(0,n.kt)("th",{parentName:"tr",align:"center"},"ISR"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u5834\u6240")),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u30b5\u30fc\u30d0\u30fc"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u30b5\u30fc\u30d0\u30fc"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u30b5\u30fc\u30d0\u30fc")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"\u30da\u30fc\u30b8\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u958b\u59cb\u6642\u9593")),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u30ec\u30b9\u30dd\u30f3\u30b9\u53d7\u4fe1\u6642"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u30ea\u30af\u30a8\u30b9\u30c8\u53d7\u4fe1\u6642"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u30ea\u30af\u30a8\u30b9\u30c8\u524d\u306b\u30da\u30fc\u30b8\u304c\u751f\u6210\u3055\u308c\u308b"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u521d\u56de\u30ea\u30af\u30a8\u30b9\u30c8\u6642 (\u6709\u52b9\u671f\u9650\u5185)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"\u30da\u30fc\u30b8\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u65b0\u9bae\u3055")),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2605\u2605\u2605"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2605\u2605\u2605"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2605"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2605\u2605")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"SEO")),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2605"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2605\u2605\u2605"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2605\u2605\u2605"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2605\u2605\u2605")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"\u8868\u793a\u901f\u5ea6")),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2605\u2605"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2605\u2605\u2605"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2605"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2605\u2605\u2605 (\u521d\u56de\u30ea\u30af\u30a8\u30b9\u30c8\u6642\u306b\u751f\u6210)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"\u5404\u30da\u30fc\u30b8\u306eOGP")),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2715"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2605\u2605\u2605"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2605\u2605\u2605"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2605\u2605\u2605")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3")),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2605"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2605\u2605\u2605"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2605"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2605\u2605")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"\u30b5\u30fc\u30d0\u30fc\u8ca0\u8377")),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2605\u2605"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2605\u2605\u2605"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2605"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2605\u2605")))),(0,n.kt)("h2",{id:"spa-\u30b7\u30f3\u30b0\u30eb\u30da\u30fc\u30b8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3"},"SPA (\u30b7\u30f3\u30b0\u30eb\u30da\u30fc\u30b8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3)"),(0,n.kt)("p",null,"SPA\u3001\u307e\u305f\u306fCSR (\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30b5\u30a4\u30c9\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0) \u306f\u3001HTML\u3092\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u5074\u3067\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3057\u307e\u3059\u3002\u3053\u306e\u30bf\u30a4\u30d7\u306e\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u3067\u306f\u3001\u521d\u56de\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u3067HTML\u304c\u8fd4\u3055\u308c\u307e\u3059 - \u3053\u308c\u306f\u4e3b\u306b\u9759\u7684\u306b\u884c\u308f\u308c\u307e\u3059\u304c\u3001\u52d5\u7684\u306b\u884c\u308f\u308c\u308b\u3053\u3068\u3082\u3042\u308a\u307e\u3059\u3002HTML\u5185\u306eJavaScript/CSS\u30b3\u30fc\u30c9\u306f\u3001\u305d\u306e\u5f8c\u306b\u30ea\u30af\u30a8\u30b9\u30c8\u3055\u308c\u3066\u8fd4\u3055\u308c\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u591a\u304f\u306e\u5834\u5408\u3001\u3055\u3089\u306a\u308b\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u8868\u793a\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u306a\u30c7\u30fc\u30bf\u3082API\u7d4c\u7531\u3067\u53d6\u5f97\u3055\u308c\u307e\u3059\u3002\u521d\u671f\u8868\u793a\u306f\u3001\u521d\u3081\u306b\u53d6\u5f97\u3057\u305fHTML\u304c\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3055\u308c\u305f\u5f8c\u306bAPI\u304c\u51e6\u7406\u3055\u308c\u308b\u305f\u3081\u3001\u3084\u3084\u9045\u304f\u306a\u308b\u50be\u5411\u304c\u3042\u308a\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/eab168ac19d35601a3727b0556576d07.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u305f\u308a\u30da\u30fc\u30b8\u9077\u79fb\u3092\u958b\u59cb\u3059\u308b\u3068\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306f\u5fc5\u8981\u306b\u5fdc\u3058\u3066\u30b5\u30fc\u30d0\u30fc\u306b\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u884c\u3044\u307e\u3059\u3002\u30ea\u30af\u30a8\u30b9\u30c8\u304c\u4e0d\u8981\u306a\u5834\u5408\u306fJavaScript\u3060\u3051\u3067\u753b\u9762\u9077\u79fb\u3092\u51e6\u7406\u3059\u308b\u3053\u3068\u3082\u3042\u308a\u307e\u3059\u3002\u30b5\u30fc\u30d0\u30fc\u306f\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30b5\u30a4\u30c9\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u306b\u5fc5\u8981\u306a\u6700\u5c0f\u9650\u306e\u30c7\u30fc\u30bf\u3092\u8fd4\u3057\u307e\u3059\u3002\u521d\u56de\u30ea\u30af\u30a8\u30b9\u30c8\u5f8c\u306e\u8fd4\u3055\u308c\u308b\u30c7\u30fc\u30bf\u306b\u306f\u308f\u305a\u304b\u306a\u5dee\u7570\u3057\u304b\u306a\u3044\u305f\u3081\u3001\u8868\u793a\u30d7\u30ed\u30bb\u30b9\u306f\u975e\u5e38\u306b\u9ad8\u901f\u306b\u306a\u308a\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/352ecf7a12ec7d54ec29478cc50603d7.png",alt:"Image from Gyazo"})),(0,n.kt)("h2",{id:"ssg-\u30b5\u30fc\u30d0\u30fc\u30b5\u30a4\u30c9\u30b8\u30a7\u30cd\u30ec\u30fc\u30b7\u30e7\u30f3"},"SSG (\u30b5\u30fc\u30d0\u30fc\u30b5\u30a4\u30c9\u30b8\u30a7\u30cd\u30ec\u30fc\u30b7\u30e7\u30f3)"),(0,n.kt)("p",null,"SSG\u306f\u3001\u30b5\u30fc\u30d0\u30fc\u30b5\u30a4\u30c9\u3067\u4e8b\u524d\u306b\u9759\u7684\u306aHTML\u3001JavaScript\u3001CSS\u3092\u751f\u6210\u3057\u3001CDN\u306b\u767b\u9332\u3059\u308b\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u306e2\u756a\u76ee\u306e\u30bf\u30a4\u30d7\u3067\u3059\u3002\u305d\u306e\u7d50\u679c\u3001\u521d\u56de\u30ea\u30af\u30a8\u30b9\u30c8\u3060\u3051\u3067\u306a\u304f\u3001\u8868\u793a\u30d7\u30ed\u30bb\u30b9\u5168\u4f53\u304c\u9ad8\u901f\u5316\u3055\u308c\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/1c47beae6ef76bd1be4325520b1d7c11.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"SSG\u306e\u554f\u984c\u70b9\u306f\u3001\u751f\u6210\u983b\u5ea6\u306b\u3088\u3063\u3066\u30b3\u30f3\u30c6\u30f3\u30c4\u304c\u53e4\u304f\u306a\u308b\u53ef\u80fd\u6027\u304c\u3042\u308b\u3053\u3068\u3067\u3059\u3002\u3057\u305f\u304c\u3063\u3066\u3001\u52b9\u679c\u7684\u306aCDN\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u78ba\u4fdd\u3059\u308b\u305f\u3081\u306b\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u6709\u52b9\u671f\u9593\u3092\u9577\u304f\u8a2d\u5b9a\u3057\u3001\u983b\u7e41\u306b\u66f4\u65b0\u3055\u308c\u308b\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u542b\u3081\u306a\u3044\u3088\u3046\u306b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,n.kt)("h2",{id:"ssr-\u30b5\u30fc\u30d0\u30fc\u30b5\u30a4\u30c9\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0"},"SSR (\u30b5\u30fc\u30d0\u30fc\u30b5\u30a4\u30c9\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0)"),(0,n.kt)("p",null,"CSR\u3068\u306f\u7570\u306a\u308a\u3001SSR\u306f\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u30b5\u30fc\u30d0\u30fc\u30b5\u30a4\u30c9\u3067\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3057\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u8868\u793a\u3055\u308c\u308bHTML\u304c\u30b5\u30fc\u30d0\u30fc\u306b\u3088\u3063\u3066\u751f\u6210\u3055\u308c\u308b\u305f\u3081\u3001\u5e38\u306b\u6700\u65b0\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002\u305f\u3060\u3057\u3001SSR\u3067\u306f\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u304c\u3088\u308a\u96e3\u3057\u304f\u3001\u9045\u304f\u306a\u308a\u3001CDN\u30ad\u30e3\u30c3\u30b7\u30e5\u3068\u6bd4\u8f03\u3057\u3066\u30b5\u30fc\u30d0\u30fc\u8ca0\u8377\u304c\u5927\u304d\u304f\u306a\u308a\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/7e615b53b9db1a06e0c1d87c11f4bf9a.png",alt:"Image from Gyazo"})),(0,n.kt)("h2",{id:"isr-\u30a4\u30f3\u30af\u30ea\u30e1\u30f3\u30bf\u30eb\u30b9\u30bf\u30c6\u30a3\u30c3\u30af\u30ea\u30b8\u30a7\u30cd\u30ec\u30fc\u30b7\u30e7\u30f3"},"ISR (\u30a4\u30f3\u30af\u30ea\u30e1\u30f3\u30bf\u30eb\u30b9\u30bf\u30c6\u30a3\u30c3\u30af\u30ea\u30b8\u30a7\u30cd\u30ec\u30fc\u30b7\u30e7\u30f3)"),(0,n.kt)("p",null,"ISR\u306f\u3001SSR\u3068\u540c\u69d8\u306b\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u6642\u306b\u30da\u30fc\u30b8\u3092\u751f\u6210\u3057\u3001\u6b21\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u3067\u4f7f\u7528\u3059\u308b\u305f\u3081\u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u3057\u307e\u3059\u3002SSG\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u3067\u306f\u3001\u3059\u3079\u3066\u306e\u30da\u30fc\u30b8\u304c\u4e8b\u524d\u306b\u751f\u6210\u3055\u308c\u308b\u305f\u3081\u3001\u30da\u30fc\u30b8\u6570\u304c\u591a\u3044\u5834\u5408\u306b\u6642\u9593\u304c\u304b\u304b\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\u3057\u304b\u3057\u3001ISR\u3067\u306f\u30ea\u30af\u30a8\u30b9\u30c8\u6642\u306b\u30da\u30fc\u30b8\u304c\u751f\u6210\u3055\u308c\u308b\u305f\u3081\u3001\u30b5\u30fc\u30d0\u30fc\u306e\u8d77\u52d5\u304c\u306f\u308b\u304b\u306b\u9ad8\u901f\u5316\u3055\u308c\u307e\u3059\u3002"),(0,n.kt)("p",null,"ISR\u3067\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3059\u308b\u969b\u306b\u6709\u52b9\u671f\u9650\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u306e\u671f\u9593\u304c\u7d4c\u904e\u3059\u308b\u3068\u3001\u30b5\u30fc\u30d0\u30fc\u306f\u30da\u30fc\u30b8\u3092\u518d\u751f\u6210\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/0e57d009f9ff7fbb1c9812aac29b121a.png",alt:"Image from Gyazo"})))}d.isMDXComponent=!0}}]);