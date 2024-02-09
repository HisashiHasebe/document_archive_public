"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[98535],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,f=u["".concat(l,".").concat(d)]||u[d]||s[d]||o;return a?n.createElement(f,p(p({ref:t},m),{},{components:a})):n.createElement(f,p({ref:t},m))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,p=new Array(o);p[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,p[1]=i;for(var c=2;c<o;c++)p[c]=a[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},76999:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={title:"OpenAI",category:"\u5916\u90e8\u30b7\u30b9\u30c6\u30e0\u9023\u643a",weight:1},p=void 0,i={unversionedId:"management/openai",id:"management/openai",title:"OpenAI",description:"OpenAI\u3067\u306fChatGPT\u306e\u3088\u3046\u306a\u6a5f\u80fd\u3092\u63d0\u4f9b\u3059\u308bAPI\u3068\u306e\u63a5\u7d9a\u3092\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/management/openai.md",sourceDirName:"management",slug:"/management/openai",permalink:"/ja/docs/management/openai",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/management/openai.md",tags:[],version:"current",frontMatter:{title:"OpenAI",category:"\u5916\u90e8\u30b7\u30b9\u30c6\u30e0\u9023\u643a",weight:1},sidebar:"documentationSidebar",previous:{title:"Vimeo",permalink:"/ja/docs/management/vimeo"},next:{title:"Slack",permalink:"/ja/docs/management/slack"}},l={},c=[{value:"OpenAI\u306e\u78ba\u8a8d\u65b9\u6cd5",id:"openai\u306e\u78ba\u8a8d\u65b9\u6cd5",level:2},{value:"OpenAI\u306e\u9805\u76ee\u8aac\u660e",id:"openai\u306e\u9805\u76ee\u8aac\u660e",level:2},{value:"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8",id:"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8",level:2}],m={toc:c},u="wrapper";function s(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"OpenAI\u3067\u306fChatGPT\u306e\u3088\u3046\u306a\u6a5f\u80fd\u3092\u63d0\u4f9b\u3059\u308bAPI\u3068\u306e\u63a5\u7d9a\u3092\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002  "),(0,r.kt)("h2",{id:"openai\u306e\u78ba\u8a8d\u65b9\u6cd5"},"OpenAI\u306e\u78ba\u8a8d\u65b9\u6cd5"),(0,r.kt)("p",null,"[\u5916\u90e8\u30b7\u30b9\u30c6\u30e0\u9023\u643a]"," -> ","[OpneAI]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/d7ba00629ba877cabecf678a922f32a9.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/d7ba00629ba877cabecf678a922f32a9.png",alt:"Image from Gyazo"})),(0,r.kt)("h2",{id:"openai\u306e\u9805\u76ee\u8aac\u660e"},"OpenAI\u306e\u9805\u76ee\u8aac\u660e"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/3ffacb490200702a30678496a41d89cc.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/3ffacb490200702a30678496a41d89cc.png",alt:"Image from Gyazo"})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u9805\u76ee"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8aac\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"OpenAI"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6709\u52b9\u306b\u3059\u308b\u306b\u30c1\u30a7\u30c3\u30af\u3092\u5165\u308c\u308b\u3068AI\u306b\u3088\u308b\u56de\u7b54\u3092\u751f\u6210\u3059\u308bAPI\u304c\u5229\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"API key"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u3054\u81ea\u8eab\u306eOpenAI\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u5229\u7528\u3059\u308b\u5834\u5408\u306fAPI key\u3092\u5165\u529b\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u66f4\u65b0\u3059\u308b"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[\u66f4\u65b0\u3059\u308b]","\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u8a2d\u5b9a\u3092\u53cd\u6620\u3057\u307e\u3059\u3002")))),(0,r.kt)("h2",{id:"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"},"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ja/docs/tutorials/obtaining-chatgpt-responses-through-kuroco-openai-endpoint"},"OpenAI\u3068\u9023\u643a\u3057\u3066Kuroco\u306eAPI\u3092\u901a\u3057\u3066AI\u306b\u3088\u308b\u56de\u7b54\u3092\u751f\u6210\u3059\u308b"))))}s.isMDXComponent=!0}}]);