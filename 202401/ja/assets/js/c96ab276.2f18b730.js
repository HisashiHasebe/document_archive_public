"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[64708],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>u});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var i=r.createContext({}),m=function(t){var e=r.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):c(c({},e),t)),a},d=function(t){var e=m(t.components);return r.createElement(i.Provider,{value:e},t.children)},l="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,i=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),l=m(a),g=n,u=l["".concat(i,".").concat(g)]||l[g]||s[g]||o;return a?r.createElement(u,c(c({ref:e},d),{},{components:a})):r.createElement(u,c({ref:e},d))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,c=new Array(o);c[0]=g;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p[l]="string"==typeof t?t:n,c[1]=p;for(var m=2;m<o;m++)c[m]=a[m];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},24808:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>c,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var r=a(87462),n=(a(67294),a(3905));const o={title:"Twitter\u3068\u9023\u643a\u3057\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u6295\u7a3f\u6642\u306bTwitter\u3078\u81ea\u52d5\u6295\u7a3f\u3059\u308b",description:"Kuroco\u3067\u306fTwitter\u3068\u9023\u643a\u3059\u308b\u3053\u3068\u3067\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u6295\u7a3f\u5f8c\u306bTwitter\u3078\u81ea\u52d5\u6295\u7a3f\u3057\u305f\u308a\u3001API\u3092\u5b9f\u884c\u3057Twitter\u306b\u6295\u7a3f\u3059\u308b\u7b49\u3001Twitter\u81ea\u52d5\u6295\u7a3f\u6a5f\u80fd\u304c\u5b9f\u88c5\u3067\u304d\u307e\u3059\u3002"},c=void 0,p={unversionedId:"tutorials/setting-up-twitter-integration",id:"tutorials/setting-up-twitter-integration",title:"Twitter\u3068\u9023\u643a\u3057\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u6295\u7a3f\u6642\u306bTwitter\u3078\u81ea\u52d5\u6295\u7a3f\u3059\u308b",description:"Kuroco\u3067\u306fTwitter\u3068\u9023\u643a\u3059\u308b\u3053\u3068\u3067\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u6295\u7a3f\u5f8c\u306bTwitter\u3078\u81ea\u52d5\u6295\u7a3f\u3057\u305f\u308a\u3001API\u3092\u5b9f\u884c\u3057Twitter\u306b\u6295\u7a3f\u3059\u308b\u7b49\u3001Twitter\u81ea\u52d5\u6295\u7a3f\u6a5f\u80fd\u304c\u5b9f\u88c5\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/tutorials/setting-up-twitter-integration.md",sourceDirName:"tutorials",slug:"/tutorials/setting-up-twitter-integration",permalink:"/ja/docs/tutorials/setting-up-twitter-integration",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/tutorials/setting-up-twitter-integration.md",tags:[],version:"current",frontMatter:{title:"Twitter\u3068\u9023\u643a\u3057\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u6295\u7a3f\u6642\u306bTwitter\u3078\u81ea\u52d5\u6295\u7a3f\u3059\u308b",description:"Kuroco\u3067\u306fTwitter\u3068\u9023\u643a\u3059\u308b\u3053\u3068\u3067\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u6295\u7a3f\u5f8c\u306bTwitter\u3078\u81ea\u52d5\u6295\u7a3f\u3057\u305f\u308a\u3001API\u3092\u5b9f\u884c\u3057Twitter\u306b\u6295\u7a3f\u3059\u308b\u7b49\u3001Twitter\u81ea\u52d5\u6295\u7a3f\u6a5f\u80fd\u304c\u5b9f\u88c5\u3067\u304d\u307e\u3059\u3002"},sidebar:"documentationSidebar",previous:{title:"Hubspot\u9023\u643a\u65b9\u6cd5",permalink:"/ja/docs/tutorials/integrating-hubspot-into-kuroco"},next:{title:"WordPress\u306eXML\u30d5\u30a1\u30a4\u30eb\u3092Kuroco\u3078\u30a4\u30f3\u30dd\u30fc\u30c8\u3059\u308b",permalink:"/ja/docs/tutorials/import-wordpress-xml-files-into-kuroco"}},i={},m=[{value:"Twitter\u306e\u8a2d\u5b9a",id:"twitter\u306e\u8a2d\u5b9a",level:2},{value:"Twitter\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u6210\u3059\u308b",id:"twitter\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u6210\u3059\u308b",level:3},{value:"Twitter\u30c7\u30d9\u30ed\u30c3\u30d1\u30fc\u30b5\u30a4\u30c8\u3088\u308a\u30a2\u30d7\u30ea\u4f5c\u6210\u3059\u308b",id:"twitter\u30c7\u30d9\u30ed\u30c3\u30d1\u30fc\u30b5\u30a4\u30c8\u3088\u308a\u30a2\u30d7\u30ea\u4f5c\u6210\u3059\u308b",level:3},{value:"\u30a2\u30d7\u30ea\u306e\u6a29\u9650\u8a2d\u5b9a\u3092\u3059\u308b",id:"\u30a2\u30d7\u30ea\u306e\u6a29\u9650\u8a2d\u5b9a\u3092\u3059\u308b",level:3},{value:"API Key and Secret\u3092\u518d\u767a\u884c\u3059\u308b",id:"api-key-and-secret\u3092\u518d\u767a\u884c\u3059\u308b",level:3},{value:"Access Token and Secret\u3092\u767a\u884c\u3059\u308b",id:"access-token-and-secret\u3092\u767a\u884c\u3059\u308b",level:3},{value:"Kuroco\u306e\u8a2d\u5b9a",id:"kuroco\u306e\u8a2d\u5b9a",level:2},{value:"Twitter Key\u306e\u8a2d\u5b9a",id:"twitter-key\u306e\u8a2d\u5b9a",level:3},{value:"\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u306e\u8a2d\u5b9a",id:"\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u306e\u8a2d\u5b9a",level:3},{value:"\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u306e\u4f5c\u6210",id:"\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u306e\u4f5c\u6210",level:3},{value:"\u52d5\u4f5c\u78ba\u8a8d",id:"\u52d5\u4f5c\u78ba\u8a8d",level:2}],d={toc:m},l="wrapper";function s(t){let{components:e,...a}=t;return(0,n.kt)(l,(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Kuroco\u3067\u306fTwitter\u3068\u9023\u643a\u3059\u308b\u3053\u3068\u3067\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u6295\u7a3f\u5f8c\u306bTwitter\u3078\u81ea\u52d5\u6295\u7a3f\u3057\u305f\u308a\u3001API\u3092\u5b9f\u884c\u3057Twitter\u306b\u6295\u7a3f\u3059\u308b\u7b49\u3001Twitter\u81ea\u52d5\u6295\u7a3f\u6a5f\u80fd\u304c\u5b9f\u88c5\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u672c\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001Kuroco\u3068Twitter\u306e\u9023\u643a\u65b9\u6cd5\u3068\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u6295\u7a3f\u6642\u306bTwitter\u3078\u81ea\u52d5\u6295\u7a3f\u3059\u308b\u65b9\u6cd5\u3092\u8a18\u8f09\u3057\u307e\u3059\u3002"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Twitter\u5074\u306e\u4ed5\u69d8\u306e\u5909\u66f4\u306b\u3088\u308a\u3001Twitter API KEY\u306e\u53d6\u5f97\u65b9\u6cd5\u306f\u672c\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3068\u7570\u306a\u308b\u5834\u5408\u304c\u3054\u3056\u3044\u307e\u3059\u3002\u8a73\u7d30\u306f",(0,n.kt)("a",{parentName:"p",href:"https://developer.twitter.com/"},"Twitter Developer Platform"),"\u3067\u6700\u65b0\u60c5\u5831\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002")),(0,n.kt)("h2",{id:"twitter\u306e\u8a2d\u5b9a"},"Twitter\u306e\u8a2d\u5b9a"),(0,n.kt)("h3",{id:"twitter\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u6210\u3059\u308b"},"Twitter\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u6210\u3059\u308b"),(0,n.kt)("p",null,"Kuroco\u3068Twitter\u3092\u9023\u643a\u3059\u308b\u5834\u5408\u3001Twitter\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u53d6\u5f97\u3057\u3066\u3044\u308b\u3053\u3068\u304c\u524d\u63d0\u3068\u306a\u308a\u307e\u3059\u3002\u307e\u3060\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u6301\u3063\u3066\u3044\u306a\u3044\u5834\u5408\u306f",(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/i/flow/signup"},"Twitter sign up"),"\u3088\u308a\u30a2\u30ab\u30a6\u30f3\u30c8\u4f5c\u6210\u3092\u304a\u9858\u3044\u3057\u307e\u3059\u3002"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Twitter\u3078\u306e\u767b\u9332\u65b9\u6cd5\u306f\u3001",(0,n.kt)("a",{parentName:"p",href:"https://help.twitter.com/ja/using-Twitter/create-Twitter-account"},"Twitter\u30d8\u30eb\u30d7\u30bb\u30f3\u30bf\u30fc"),"\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002")),(0,n.kt)("h3",{id:"twitter\u30c7\u30d9\u30ed\u30c3\u30d1\u30fc\u30b5\u30a4\u30c8\u3088\u308a\u30a2\u30d7\u30ea\u4f5c\u6210\u3059\u308b"},"Twitter\u30c7\u30d9\u30ed\u30c3\u30d1\u30fc\u30b5\u30a4\u30c8\u3088\u308a\u30a2\u30d7\u30ea\u4f5c\u6210\u3059\u308b"),(0,n.kt)("p",null,"\u6b21\u306b\u3001Twitter\u30c7\u30d9\u30ed\u30c3\u30d1\u30fc\u30b5\u30a4\u30c8\u3088\u308aTwitter API\u30ad\u30fc\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002",(0,n.kt)("a",{parentName:"p",href:"https://developer.twitter.com/en"},"Twitter\u30c7\u30d9\u30ed\u30c3\u30d1\u30fc\u30b5\u30a4\u30c8"),"\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3001","[Sign up]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/baa9ec46d8a441379d3588f7c5b99761.jpg?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/baa9ec46d8a441379d3588f7c5b99761.jpg",alt:"Image from Gyazo"}),"\n\u540d\u524d\u3084\u56fd\u7b49\u3001\u30a8\u30c3\u30bb\u30f3\u30b7\u30e3\u30eb\u30a2\u30af\u30bb\u30b9\u306e\u305f\u3081\u306e\u3044\u304f\u3064\u304b\u306e\u60c5\u5831\u3092\u8a18\u8f09\u3057\u3001","[Next]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002\n\u4eca\u56de\u306e\u5834\u5408\u300cWhat's your use case?\u300d\u306b\u306f\u300cExploring API\u300d\u3092\u9078\u629e\u3057\u3066\u4e0b\u3055\u3044\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/66db34a37075af4c4710d7946faf53e5.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/66db34a37075af4c4710d7946faf53e5.png",alt:"Image from Gyazo"}),"\n\u5229\u7528\u898f\u7d04\u3092\u78ba\u8a8d\u3057\u3001\u30c1\u30a7\u30c3\u30af\u3092\u5165\u308c","[Submit]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/ca6667112870b681f8dba67f391c3310.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/ca6667112870b681f8dba67f391c3310.png",alt:"Image from Gyazo"}),"\nTwitter\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u767b\u9332\u3057\u3066\u3044\u308b\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u5b9b\u306b\u3001\u30e1\u30fc\u30eb\u304c\u9001\u4fe1\u3055\u308c\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/460a0fabef489e59e8c0dd38ab8e42e1.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/460a0fabef489e59e8c0dd38ab8e42e1.png",alt:"Image from Gyazo"}),"\n\u30e1\u30fc\u30eb\u3092\u78ba\u8a8d\u3057\u3001","[Confirm your email]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/c7ebae312d0be0efe5d6f912f84103b5.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/c7ebae312d0be0efe5d6f912f84103b5.png",alt:"Image from Gyazo"}),"\n\u300cApp name\u300d\u306b\u4efb\u610f\u306e\u540d\u524d\u3092\u8a18\u5165\u3057\u3001","[Get keys]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/19332084bdbb60975a1f2d5066d2718c.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/19332084bdbb60975a1f2d5066d2718c.png",alt:"Image from Gyazo"}),"\nAPI key\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/67e5c6c4879ceb7ed0368d1acb4de50d.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/67e5c6c4879ceb7ed0368d1acb4de50d.png",alt:"Image from Gyazo"}),"\nKey\u306f\u5f8c\u307b\u3069\u30b3\u30d4\u30fc\u3059\u308b\u306e\u3067\u3053\u3053\u3067\u306f\u30b3\u30d4\u30fc\u3057\u306a\u304f\u3066\u5927\u4e08\u592b\u3067\u3059\u3002","[Skip to dashboard]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/73064a3d456c6648bbc34c1af7fff823.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/73064a3d456c6648bbc34c1af7fff823.png",alt:"Image from Gyazo"}),"\n\u30dd\u30c3\u30d7\u30a2\u30c3\u30d7\u3067\u300cDid you save your Keys and Tokens?\u300d\u3068\u8868\u793a\u3055\u308c\u308b\u306e\u3067\u3001\u78ba\u8a8d\u3057","[Yes, I saved them]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/6716395d439902a2485f6a67340e4a87.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/6716395d439902a2485f6a67340e4a87.png",alt:"Image from Gyazo"}),"\n\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u753b\u9762\u3078\u3068\u9077\u79fb\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/ab54ae8bbcc5ec24656adec94c583982.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/ab54ae8bbcc5ec24656adec94c583982.png",alt:"Image from Gyazo"}),"\n\u30b5\u30a4\u30c9\u30d0\u30fc\u3088\u308a","[Projects & Apps]","\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u5148\u307b\u3069\u4f5c\u6210\u3057\u305f\u30a2\u30d7\u30ea\u304c\u8ffd\u52a0\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/7d146cdbbcc81e164249ff6aec23480e.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/7d146cdbbcc81e164249ff6aec23480e.png",alt:"Image from Gyazo"}),"\n\u4ee5\u4e0a\u3067\u30a2\u30d7\u30ea\u4f5c\u6210\u5b8c\u4e86\u3067\u3059\u3002"),(0,n.kt)("h3",{id:"\u30a2\u30d7\u30ea\u306e\u6a29\u9650\u8a2d\u5b9a\u3092\u3059\u308b"},"\u30a2\u30d7\u30ea\u306e\u6a29\u9650\u8a2d\u5b9a\u3092\u3059\u308b"),(0,n.kt)("p",null,"\u521d\u671f\u8a2d\u5b9a\u3067\u306f\u3001\u30a2\u30d7\u30ea\u306e\u6a29\u9650\u304c\u300cRead Only\u300d\u306a\u306e\u3067\u3001\u6a29\u9650\u3092\u300cRead and Write\u300d\u306b\u4fee\u6b63\u3057\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","User authentication settings\u306e","[Set up]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/445dddcfd2d844cd1c5f506802635fe9.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/445dddcfd2d844cd1c5f506802635fe9.png",alt:"Image from Gyazo"}),"\n\u300cOAuth 1.0a\u300d\u3092\u30aa\u30f3\u306b\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/57d24b00ec817bee2489787bf98e01da.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/57d24b00ec817bee2489787bf98e01da.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"\u300cApp permissions\u300d\u3088\u308a\u300cRead and write\u300d\u3092\u9078\u629e\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/d5a0867d3fba3cad0e76c9e0ca770e61.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/d5a0867d3fba3cad0e76c9e0ca770e61.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"\u300cGENERAL AUTHENTICATION SETTINGS\u300d\u306b\u4e0b\u8a18\u3092\u8a18\u8f09\u3057\u3001","[Save]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u9805\u76ee"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8a18\u8f09\u4f8b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Callback URI / Redirect URL"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"https://example.com/twitter-to-kuroco")),(0,n.kt)("td",{parentName:"tr",align:null},"\u9023\u643a\u5f8c\u306e\u30b3\u30fc\u30eb\u30d0\u30c3\u30afURL\u3092\u8a18\u5165\u3057\u3066\u4e0b\u3055\u3044\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Website URL"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"https://example.com")),(0,n.kt)("td",{parentName:"tr",align:null},"\u30b5\u30a4\u30c8URL\u3092\u8a18\u5165\u3057\u3066\u4e0b\u3055\u3044\u3002")))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/a8c600b42d534029c6822c462381da5d.jpg?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/a8c600b42d534029c6822c462381da5d.jpg",alt:"Image from Gyazo"})),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Callback URL\u306b\u3064\u3044\u3066\u306f\u3001Twitter Developer -> ",(0,n.kt)("a",{parentName:"p",href:"https://developer.twitter.com/ja/docs/basics/apps/guides/callback-urls"},"Callback URLs"),"\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002")),(0,n.kt)("h3",{id:"api-key-and-secret\u3092\u518d\u767a\u884c\u3059\u308b"},"API Key and Secret\u3092\u518d\u767a\u884c\u3059\u308b"),(0,n.kt)("p",null,"\u6b21\u306bTwitter API\u30ad\u30fc\u3092\u518d\u767a\u884c\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,"[Keys and tokens]","\u30bf\u30d6\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/a8aa2f39d23c9aeae5e41ba84a838955.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/a8aa2f39d23c9aeae5e41ba84a838955.png",alt:"Image from Gyazo"}),"\n\u300cAPI Key and Secret\u300d\u306e","[Regenerate]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/9cebfc1041ee1f801e2aef563112ffc5.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/9cebfc1041ee1f801e2aef563112ffc5.png",alt:"Image from Gyazo"}),"\n\u30dd\u30c3\u30d7\u30a2\u30c3\u30d7\u3067\u78ba\u8a8d\u753b\u9762\u304c\u8868\u793a\u3055\u308c\u308b\u306e\u3067\u3001","[Yes, regenerate]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/1ca91862f8b5ca2a83595820a92bbe05.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/1ca91862f8b5ca2a83595820a92bbe05.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"API Key \u3068API Key Secret\u304c\u767a\u884c\u3055\u308c\u307e\u3059\u3002\u5185\u5bb9\u3092\u30b3\u30d4\u30fc\u3057\u3001","[Yes, I saved them]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/2e64e85b951798ada1c6c09dbe965db7.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/2e64e85b951798ada1c6c09dbe965db7.png",alt:"Image from Gyazo"})),(0,n.kt)("h3",{id:"access-token-and-secret\u3092\u767a\u884c\u3059\u308b"},"Access Token and Secret\u3092\u767a\u884c\u3059\u308b"),(0,n.kt)("p",null,"\u6b21\u306b\u3001Access Token and Secret\u3092\u767a\u884c\u3057\u307e\u3059\u3002","[Keys and tokens]","\u30bf\u30d6\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/a8aa2f39d23c9aeae5e41ba84a838955.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/a8aa2f39d23c9aeae5e41ba84a838955.png",alt:"Image from Gyazo"}),"\n\u300cAccess Token and Secret\u300d\u306e","[Generate]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/a261a74cb8578b533b6f94280a150495.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/a261a74cb8578b533b6f94280a150495.png",alt:"Image from Gyazo"}),"\nAccess Token \u3068Access Token Secret\u304c\u767a\u884c\u3055\u308c\u307e\u3059\u3002\u5185\u5bb9\u3092\u30b3\u30d4\u30fc\u3057\u3001","[Yes, I saved them]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/ec367e9a059df2f7e61dd21d79b7ac3c.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/ec367e9a059df2f7e61dd21d79b7ac3c.png",alt:"Image from Gyazo"}),"\n\u4ee5\u4e0a\u3067\u3059\u3002"),(0,n.kt)("h2",{id:"kuroco\u306e\u8a2d\u5b9a"},"Kuroco\u306e\u8a2d\u5b9a"),(0,n.kt)("p",null,"\u6b21\u306b\u3001\u5148\u307b\u3069\u53d6\u5f97\u3057\u305fTwitter\u306eKey\u3092Kuroco\u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,n.kt)("h3",{id:"twitter-key\u306e\u8a2d\u5b9a"},"Twitter Key\u306e\u8a2d\u5b9a"),(0,n.kt)("p",null,"Kuroco\u7ba1\u7406\u753b\u9762\u3088\u308a\u3001","[\u5916\u90e8\u30b7\u30b9\u30c6\u30e0\u9023\u643a]"," -> ","[Twitter]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/e6b914205955d2946265bdfeb794c702.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/e6b914205955d2946265bdfeb794c702.png",alt:"Image from Gyazo"}),"\n\u5148\u307b\u3069\u30b3\u30d4\u30fc\u3057\u305f\u60c5\u5831\u3092\u8a18\u5165\u3057\u3001","[\u66f4\u65b0\u3059\u308b]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u9805\u76ee"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8a18\u8f09\u4f8b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u6709\u52b9\u306b\u3059\u308b"),(0,n.kt)("td",{parentName:"tr",align:null},"\u30c1\u30a7\u30c3\u30af\u3092\u5165\u308c\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"API Key"),(0,n.kt)("td",{parentName:"tr",align:null},"\u30b3\u30d4\u30fc\u3057\u305fAPI Key\u3092\u8a18\u5165\u3057\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"API Key Secret"),(0,n.kt)("td",{parentName:"tr",align:null},"\u30b3\u30d4\u30fc\u3057\u305fAPI Key Secret\u3092\u8a18\u5165\u3057\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Access Token"),(0,n.kt)("td",{parentName:"tr",align:null},"\u30b3\u30d4\u30fc\u3057\u305fAccess Token\u3092\u8a18\u5165\u3057\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Access Token Secret"),(0,n.kt)("td",{parentName:"tr",align:null},"\u30b3\u30d4\u30fc\u3057\u305fAccess Token Secret\u3092\u8a18\u5165\u3057\u307e\u3059\u3002")))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/084627d7e697ebeac99f833560426ce3.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/084627d7e697ebeac99f833560426ce3.png",alt:"Image from Gyazo"}),"\nTwitter Key\u304c\u767b\u9332\u3055\u308c\u307e\u3057\u305f\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/276c105369946b832c7e44f61cdf461c.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/276c105369946b832c7e44f61cdf461c.png",alt:"Image from Gyazo"})),(0,n.kt)("h3",{id:"\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u306e\u8a2d\u5b9a"},"\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u306e\u8a2d\u5b9a"),(0,n.kt)("p",null,"\u6b21\u306b\u3001Twitter\u3068\u9023\u643a\u3059\u308b\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002\n\u4eca\u56de\u306f\u65e2\u5b58\u306e\u300c\u304a\u77e5\u3089\u305b\u300d\u3068\u3044\u3046\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u3068Twitter\u3068\u9023\u643a\u3057\u307e\u3059\u3002\u9023\u643a\u306b\u306f\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u306eID\u304c\u5fc5\u8981\u306b\u306a\u308b\u306e\u3067\u3001\u7ba1\u7406\u753b\u9762\u3088\u308aID\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,"Kuroco\u7ba1\u7406\u753b\u9762\u3088\u308a\u3001","[\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/e497ee665329f34fdc13bc7cb80f72e1.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/e497ee665329f34fdc13bc7cb80f72e1.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u4e00\u89a7\u753b\u9762\u3088\u308a\u3001\u300c\u304a\u77e5\u3089\u305b\u300d\u306eID\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/c2149cad3a35822c6384596de1c52fd7.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/c2149cad3a35822c6384596de1c52fd7.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"\u304a\u77e5\u3089\u305b\u306eID\u306f",(0,n.kt)("inlineCode",{parentName:"p"},"1"),"\u3068\u78ba\u8a8d\u3067\u304d\u307e\u3057\u305f\u3002ID\u306f\u5f8c\u307b\u3069\u5229\u7528\u3059\u308b\u306e\u3067\u3001\u30b3\u30d4\u30fc\u3057\u3066\u304a\u3044\u3066\u4e0b\u3055\u3044\u3002"),(0,n.kt)("h3",{id:"\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u306e\u4f5c\u6210"},"\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u306e\u4f5c\u6210"),(0,n.kt)("p",null,"\u6b21\u306b\u3001\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","Kuroco\u7ba1\u7406\u753b\u9762\u3088\u308a\u3001","[\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3]"," -> ","[\u30ab\u30b9\u30bf\u30e0\u51e6\u7406]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/96f7457b084c67218e6f2f9ca9229d14.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/96f7457b084c67218e6f2f9ca9229d14.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u4e00\u89a7\u753b\u9762\u3088\u308a","[\u8ffd\u52a0]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/8f288d261631bd959404496ab3231794.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/8f288d261631bd959404496ab3231794.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u3092\u4e0b\u8a18\u8a2d\u5b9a\u306b\u3066\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u9805\u76ee"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8a18\u8f09\u4f8b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u30bf\u30a4\u30c8\u30eb"),(0,n.kt)("td",{parentName:"tr",align:null},"Twitter\u81ea\u52d5\u6295\u7a3f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u8b58\u5225\u5b50"),(0,n.kt)("td",{parentName:"tr",align:null},"kuroco_to_twitter")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u3053\u308c\u3092\u4f7f\u3063\u305f\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"),(0,n.kt)("td",{parentName:"tr",align:null},"\u30c8\u30ea\u30ac\u30fc\uff1a\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u8ffd\u52a0\u5f8c",(0,n.kt)("br",null),"\u30c6\u30ad\u30b9\u30c8\u30d5\u30a3\u30fc\u30eb\u30c9\uff1a1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u51e6\u7406"),(0,n.kt)("td",{parentName:"tr",align:null},"\u4e0b\u8a18\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u306e\u5185\u5bb9\u3092\u8a18\u8f09\u3057\u3066\u304f\u3060\u3055\u3044\u3002")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php",metastring:"[\u5b9f\u884c\u5185\u5bb9]","[\u5b9f\u884c\u5185\u5bb9]":!0},'{assign var=url value="`$smarty.const.ROOT_URL`/article/`$topicsData.slug`"}\n{twitter_post_message var=res text="\u8a18\u4e8b\u306e\u66f4\u65b0\u3092\u3057\u307e\u3057\u305f\uff01`$url`"}\n')),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/6a869d404cbfdd4166cce38bd26f0a97.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/6a869d404cbfdd4166cce38bd26f0a97.png",alt:"Image from Gyazo"}),"\n\u5165\u529b\u5f8c\u3001","[\u8ffd\u52a0\u3059\u308b]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u3092\u4fdd\u5b58\u3057\u307e\u3059\u3002"),(0,n.kt)("h2",{id:"\u52d5\u4f5c\u78ba\u8a8d"},"\u52d5\u4f5c\u78ba\u8a8d"),(0,n.kt)("p",null,"\u6700\u5f8c\u306b\u52d5\u4f5c\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002\n\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u300c\u304a\u77e5\u3089\u305b\u300d\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u6295\u7a3f\u3059\u308b\u3068\u3001Twitter\u306b\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u3067\u8a2d\u5b9a\u3057\u305f\u5185\u5bb9\u304c\u6295\u7a3f\u3055\u308c\u307e\u3059\u3002"))}s.isMDXComponent=!0}}]);