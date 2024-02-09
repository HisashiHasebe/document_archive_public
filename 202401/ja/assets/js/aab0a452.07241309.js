"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[17298],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>f});var o=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,o,r=function(t,e){if(null==t)return{};var a,o,r={},n=Object.keys(t);for(o=0;o<n.length;o++)a=n[o],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(o=0;o<n.length;o++)a=n[o],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=o.createContext({}),d=function(t){var e=o.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):c(c({},e),t)),a},m=function(t){var e=d(t.components);return o.createElement(p.Provider,{value:e},t.children)},l="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},s=o.forwardRef((function(t,e){var a=t.components,r=t.mdxType,n=t.originalType,p=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),l=d(a),s=r,f=l["".concat(p,".").concat(s)]||l[s]||u[s]||n;return a?o.createElement(f,c(c({ref:e},m),{},{components:a})):o.createElement(f,c({ref:e},m))}));function f(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var n=a.length,c=new Array(n);c[0]=s;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[l]="string"==typeof t?t:r,c[1]=i;for(var d=2;d<n;d++)c[d]=a[d];return o.createElement.apply(null,c)}return o.createElement.apply(null,a)}s.displayName="MDXCreateElement"},66482:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>d});var o=a(87462),r=(a(67294),a(3905));const n={title:"GitHub\u304b\u3089KurocoFront\u3078\u30bd\u30fc\u30b9\u3092\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u65b9\u6cd5",description:"KurocoFront\u3078GitHub\u3092\u5229\u7528\u3057\u305f\u30c7\u30d7\u30ed\u30a4\u65b9\u6cd5\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002"},c=void 0,i={unversionedId:"tutorials/connect-to-github-with-kuroco-front",id:"tutorials/connect-to-github-with-kuroco-front",title:"GitHub\u304b\u3089KurocoFront\u3078\u30bd\u30fc\u30b9\u3092\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u65b9\u6cd5",description:"KurocoFront\u3078GitHub\u3092\u5229\u7528\u3057\u305f\u30c7\u30d7\u30ed\u30a4\u65b9\u6cd5\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/tutorials/connect-to-github-with-kuroco-front.md",sourceDirName:"tutorials",slug:"/tutorials/connect-to-github-with-kuroco-front",permalink:"/ja/docs/tutorials/connect-to-github-with-kuroco-front",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/tutorials/connect-to-github-with-kuroco-front.md",tags:[],version:"current",frontMatter:{title:"GitHub\u304b\u3089KurocoFront\u3078\u30bd\u30fc\u30b9\u3092\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u65b9\u6cd5",description:"KurocoFront\u3078GitHub\u3092\u5229\u7528\u3057\u305f\u30c7\u30d7\u30ed\u30a4\u65b9\u6cd5\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002"},sidebar:"documentationSidebar",previous:{title:"bulk_upsert API\u3092\u5229\u7528\u3057\u3066\u3001\u4efb\u610f\u306eCSV\u30d5\u30a1\u30a4\u30eb\u3092\u30b3\u30f3\u30c6\u30f3\u30c4\u306b\u30a4\u30f3\u30dd\u30fc\u30c8\u3059\u308b",permalink:"/ja/docs/tutorials/bulk-upload-using-api"},next:{title:"KurocoFront\u3067\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3\u3092\u5229\u7528\u3059\u308b\u624b\u9806",permalink:"/ja/docs/tutorials/using-a-custom-domain-name-on-kurocofront"}},p={},d=[{value:"KurocoFront\u3078\u306e\u30c7\u30d7\u30ed\u30a4\u624b\u9806",id:"kurocofront\u3078\u306e\u30c7\u30d7\u30ed\u30a4\u624b\u9806",level:2},{value:"1. \u30ea\u30dd\u30b8\u30c8\u30ea\u6e96\u5099",id:"1-\u30ea\u30dd\u30b8\u30c8\u30ea\u6e96\u5099",level:3},{value:"2. KurocoFront\u3088\u308aGitHub\u30ea\u30dd\u30b8\u30c8\u30ea\u3068\u63a5\u7d9a\u3059\u308b",id:"2-kurocofront\u3088\u308agithub\u30ea\u30dd\u30b8\u30c8\u30ea\u3068\u63a5\u7d9a\u3059\u308b",level:3},{value:"3. kuroco_front.json\u3092\u4f5c\u6210\u3059\u308b",id:"3-kuroco_frontjson\u3092\u4f5c\u6210\u3059\u308b",level:3},{value:"4. <code>.github/workflows</code> \u306bYAML\u30d5\u30a1\u30a4\u30eb\u3092\u914d\u7f6e\u3059\u308b",id:"4-githubworkflows-\u306byaml\u30d5\u30a1\u30a4\u30eb\u3092\u914d\u7f6e\u3059\u308b",level:3},{value:"5. \u5b9f\u969b\u306b\u30c7\u30d7\u30ed\u30a4\u306eGithubActions\u3092\u52d5\u304b\u3059",id:"5-\u5b9f\u969b\u306b\u30c7\u30d7\u30ed\u30a4\u306egithubactions\u3092\u52d5\u304b\u3059",level:3},{value:"GithubActions\u304c\u5b8c\u4e86\u3057\u306a\u304b\u3063\u305f\u5834\u5408",id:"githubactions\u304c\u5b8c\u4e86\u3057\u306a\u304b\u3063\u305f\u5834\u5408",level:4},{value:"6. \u30b5\u30a4\u30c8\u3092\u8868\u793a\u3059\u308b",id:"6-\u30b5\u30a4\u30c8\u3092\u8868\u793a\u3059\u308b",level:3},{value:"KurocoFront\u3078\u30d7\u30ec\u30d3\u30e5\u30fc\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u624b\u9806",id:"kurocofront\u3078\u30d7\u30ec\u30d3\u30e5\u30fc\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u624b\u9806",level:2},{value:"\u30d7\u30ec\u30d3\u30e5\u30fc\u30c7\u30d7\u30ed\u30a4\u624b\u9806",id:"\u30d7\u30ec\u30d3\u30e5\u30fc\u30c7\u30d7\u30ed\u30a4\u624b\u9806",level:3},{value:"\u30c6\u30b9\u30c8\u7528PullRequest\u306e\u4f5c\u6210",id:"\u30c6\u30b9\u30c8\u7528pullrequest\u306e\u4f5c\u6210",level:4},{value:"\u30d7\u30ec\u30d3\u30e5\u30fc\u30c7\u30d7\u30ed\u30a4\u3059\u308b",id:"\u30d7\u30ec\u30d3\u30e5\u30fc\u30c7\u30d7\u30ed\u30a4\u3059\u308b",level:4},{value:"\u30c9\u30e1\u30a4\u30f3\u306b\u3064\u3044\u3066",id:"\u30c9\u30e1\u30a4\u30f3\u306b\u3064\u3044\u3066",level:2},{value:"\u3046\u307e\u304f\u30c7\u30d7\u30ed\u30a4\u3067\u304d\u306a\u3044\u5834\u5408",id:"\u3046\u307e\u304f\u30c7\u30d7\u30ed\u30a4\u3067\u304d\u306a\u3044\u5834\u5408",level:2}],m={toc:d},l="wrapper";function u(t){let{components:e,...a}=t;return(0,r.kt)(l,(0,o.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"KurocoFront\u3078GitHub\u3092\u5229\u7528\u3057\u305f\u30c7\u30d7\u30ed\u30a4\u65b9\u6cd5\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002 "),(0,r.kt)("h2",{id:"kurocofront\u3078\u306e\u30c7\u30d7\u30ed\u30a4\u624b\u9806"},"KurocoFront\u3078\u306e\u30c7\u30d7\u30ed\u30a4\u624b\u9806"),(0,r.kt)("h3",{id:"1-\u30ea\u30dd\u30b8\u30c8\u30ea\u6e96\u5099"},"1. \u30ea\u30dd\u30b8\u30c8\u30ea\u6e96\u5099"),(0,r.kt)("p",null,"GitHub\u306b\u3066KurocoFront\u3078\u30c7\u30d7\u30ed\u30a4\u3057\u305f\u3044\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u6e96\u5099\u3057\u307e\u3059\u3002  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/5ae8411ce2640c6f0c5b97576e29ee97.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/5ae8411ce2640c6f0c5b97576e29ee97.png",alt:"Image (fetched from Gyazo)"})),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u524d\u63d0\u6761\u4ef6\u3068\u3057\u3066\u3001\u9759\u7684\u306a\u30d5\u30a1\u30a4\u30eb\u3057\u304b\u30db\u30b9\u30c6\u30a3\u30f3\u30b0\u3067\u304d\u307e\u305b\u3093\u306e\u3067\u30ea\u30dd\u30b8\u30c8\u30ea\u306b\u306fNuxt.js\u7b49\u306eJavaScript\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u3084\u3001HTML/CSS/JS\u30d5\u30a1\u30a4\u30eb\u3084\u753b\u50cf\u306a\u3069\u306e\u30e1\u30c7\u30a3\u30a2\u30d5\u30a1\u30a4\u30eb\u304c\u767b\u9332\u3055\u308c\u3066\u3044\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\n\u4e0a\u8a18\u753b\u9762\u306fNuxt.js\u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u8868\u793a\u3057\u3066\u304a\u308a\u307e\u3059\u3002")),(0,r.kt)("h3",{id:"2-kurocofront\u3088\u308agithub\u30ea\u30dd\u30b8\u30c8\u30ea\u3068\u63a5\u7d9a\u3059\u308b"},"2. KurocoFront\u3088\u308aGitHub\u30ea\u30dd\u30b8\u30c8\u30ea\u3068\u63a5\u7d9a\u3059\u308b"),(0,r.kt)("p",null,"[KurocoFront]"," -> ","[GitHub]"," \u3092\u30af\u30ea\u30c3\u30af\u3057\u3001KurocoFront\u3092\u8868\u793a\u3057\u307e\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","KurocoFront\u3088\u308a\u300cGitHub\u30ea\u30dd\u30b8\u30c8\u30ea\u3068\u63a5\u7d9a\u3059\u308b\u300d\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/875b9ce003a701696e278a4454c49535.jpg?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/875b9ce003a701696e278a4454c49535.jpg",alt:"fetched from Gyazo"}),"\nGitHub\u3078\u30ed\u30b0\u30a4\u30f3\u304c\u6c42\u3081\u3089\u308c\u307e\u3059\u306e\u3067\u3001\u30ed\u30b0\u30a4\u30f3\u3092\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/214c1957e75be4de2ea7bc01d10499ab.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/214c1957e75be4de2ea7bc01d10499ab.png",alt:"Image (fetched from Gyazo)"}),"\n\u30ed\u30b0\u30a4\u30f3\u3059\u308b\u3068GitHub\u306e\u753b\u9762\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/d42942104b7b668e7d80c44696db4429.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/d42942104b7b668e7d80c44696db4429.png",alt:"Image (fetched from Gyazo)"}),"\n\u300cRepository access\u300d\u3088\u308a\u63a5\u7d9a\u3059\u308b\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u9078\u629e\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/afef17946cbde0c9d11433dcb08564a4.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/afef17946cbde0c9d11433dcb08564a4.png",alt:"Image (fetched from Gyazo)"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u30ea\u30dd\u30b8\u30c8\u30ea\u63a5\u7d9a\u8a2d\u5b9a\u306f\u5f8c\u304b\u3089\u5909\u66f4\u304c\u53ef\u80fd\u3067\u3059\u3002\uff11\u3064\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u3067\u8907\u6570\u306eKuroco\u3092\u5229\u7528\u3059\u308b\u5834\u5408\u306f\u3001Kuroco\u306eGitHub Apps\u306f1\u3064\u3067\u3059\u306e\u3067\u3001\u3053\u3053\u3067\u8907\u6570\u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u9078\u629e\u3059\u308b\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002  ")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u63a5\u7d9a\u3067\u304d\u308b\u30ea\u30dd\u30b8\u30c8\u30ea\u306f\u7ba1\u7406\u8005\u6a29\u9650\u3092\u6301\u3063\u3066\u3044\u308b\u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u307f\u306b\u306a\u308a\u307e\u3059\u306e\u3067\u3001\u3054\u6ce8\u610f\u304f\u3060\u3055\u3044\u3002  ")),(0,r.kt)("p",null,"\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u9078\u629e\u3057\u305f\u3089\u3001\u300cSave\u300d\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/1baf2798ac40f953e489b09040a5d1ce.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/1baf2798ac40f953e489b09040a5d1ce.png",alt:"Image (fetched from Gyazo)"}),"\n\u518d\u5ea6Kuroco\u3078\u306e\u30ed\u30b0\u30a4\u30f3\u3092\u6c42\u3081\u3089\u308c\u307e\u3059\u306e\u3067\u3001\u30ed\u30b0\u30a4\u30f3\u3092\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/296ac6fb71ddea36ace52dbe804fd126.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/296ac6fb71ddea36ace52dbe804fd126.png",alt:"Image (fetched from Gyazo)"}),"\n\u63a5\u7d9a\u304c\u5b8c\u4e86\u3059\u308b\u3068\u3001KurocoFront\u306e\u753b\u9762\u306b\u9077\u79fb\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/d4222c9238bbed8c3ad14461e29344ee.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/d4222c9238bbed8c3ad14461e29344ee.png",alt:"Image (fetched from Gyazo)"}),"\n\u4ee5\u4e0a\u3067KurocoFront\u3068GitHub\u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u63a5\u7d9a\u304c\u5b8c\u4e86\u3068\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"3-kuroco_frontjson\u3092\u4f5c\u6210\u3059\u308b"},"3. kuroco_front.json\u3092\u4f5c\u6210\u3059\u308b"),(0,r.kt)("p",null,"KurocoFront\u3092\u5229\u7528\u3059\u308b\u305f\u3081\u306b\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"kuroco_front.json"),"\u3092\u30eb\u30fc\u30c8\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u914d\u7f6e\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Nuxt\u306e\u5834\u5408\u306f\u4e0b\u8a18kuroco_front.json\u3092 ",(0,r.kt)("inlineCode",{parentName:"p"},"/static")," \u914d\u4e0b\u306b\u4f5c\u6210\u3057\u307e\u3059\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="kuroco_front.json"',title:'"kuroco_front.json"'},'{\n    "rewrites": [\n        {\n          "source": ".*",\n          "destination": "/index.html"\n        }\n      ],\n    "redirects": [],\n    "basic":[],\n    "ip_restrictions":[]\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"kuroco_front.json"),"\u3067\u306fURL\u306e\u30ea\u30e9\u30a4\u30c8\u51e6\u7406\u3084Basic\u8a8d\u8a3c\u3084IP\u30a2\u30c9\u30ec\u30b9\u5236\u9650\u306e\u5229\u7528\u304c\u53ef\u80fd\u3067\u3059\u3002Basic\u8a8d\u8a3c\u306e\u30d1\u30b9\u30ef\u30fc\u30c9\u306f\u30d7\u30ec\u30fc\u30f3\u30c6\u30ad\u30b9\u30c8\u306b\u306a\u3063\u3066\u304a\u308a\u307e\u3059\u3002\u30ea\u30dd\u30b8\u30c8\u30ea\u3092public\u306b\u3059\u308b\u5834\u5408\u306f\u3054\u6ce8\u610f\u304f\u3060\u3055\u3044\u3002  "),(0,r.kt)("p",null,"\u53c2\u8003: ",(0,r.kt)("a",{parentName:"p",href:"/ja/docs/faq/what-is-kuroco_front_json/"},"kuroco_front.json\u3068\u306f\u4f55\u3067\u3059\u304b\uff1f"),"  "),(0,r.kt)("h3",{id:"4-githubworkflows-\u306byaml\u30d5\u30a1\u30a4\u30eb\u3092\u914d\u7f6e\u3059\u308b"},"4. ",(0,r.kt)("inlineCode",{parentName:"h3"},".github/workflows")," \u306bYAML\u30d5\u30a1\u30a4\u30eb\u3092\u914d\u7f6e\u3059\u308b"),(0,r.kt)("p",null,"KurocoFront\u3067\u306fGitHub\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u5229\u7528\u3059\u308b\u305f\u3081\u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},".github/workflows")," \u306bYAML\u30d5\u30a1\u30a4\u30eb\u3092\u914d\u7f6e\u3057\u307e\u3059\u3002  "),(0,r.kt)("p",null,"\u307e\u305a\u306fKurocoFront\u753b\u9762\u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u5185\u5bb9\u3092\u30b3\u30d4\u30fc\u3057\u3001\u30d3\u30eb\u30c9\u30b3\u30de\u30f3\u30c9\u3084\u30d6\u30e9\u30f3\u30c1\u540d\u306a\u3069\u3092\u8abf\u6574\u3057\u3066 ",(0,r.kt)("inlineCode",{parentName:"p"},"build.yml")," \u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/dad5a689e0e8c160b7d7fd1de65bd09e.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/dad5a689e0e8c160b7d7fd1de65bd09e.png",alt:"Image (fetched from Gyazo)"}),"\n\u6b21\u306b\u4f5c\u6210\u3057\u305f",(0,r.kt)("inlineCode",{parentName:"p"},"build.yml"),"\u3092",(0,r.kt)("inlineCode",{parentName:"p"},".github/workflows")," \u914d\u4e0b\u306b\u914d\u7f6e\u3057\u5b8c\u4e86\u3067\u3059\u3002"),(0,r.kt)("p",null,"\u53c2\u8003:",(0,r.kt)("br",{parentName:"p"}),"\n","GitHub \u30a2\u30af\u30b7\u30e7\u30f3\u3092\u5229\u7528\u3059\u308b\u305f\u3081\u3001YAML\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3057\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u306e\u5b9a\u7fa9\u3092\u884c\u306a\u3063\u3066\u304a\u308a\u307e\u3059\u3002\nYAML\u30d5\u30a1\u30a4\u30eb\u306b\u3064\u3044\u3066\u306e\u8aac\u660e\u3084\u3001\u66f8\u304d\u65b9\u306b\u3064\u3044\u3066\u306f\u4e0b\u8a18\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.github.com/ja/actions/learn-github-actions"},"GitHub Docs GitHub Actions \u306b\u3064\u3044\u3066\u5b66\u3076")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.github.com/ja/actions/reference/workflow-syntax-for-github-actions"},"GitHub Docs GitHub Actions\u306e\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u69cb\u6587"))),(0,r.kt)("h3",{id:"5-\u5b9f\u969b\u306b\u30c7\u30d7\u30ed\u30a4\u306egithubactions\u3092\u52d5\u304b\u3059"},"5. \u5b9f\u969b\u306b\u30c7\u30d7\u30ed\u30a4\u306eGithubActions\u3092\u52d5\u304b\u3059"),(0,r.kt)("p",null,"\u4f5c\u6210\u3057\u305f",(0,r.kt)("inlineCode",{parentName:"p"},"build.yml"),"\u306f\u3001Github\u4e0a\u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3055\u308c\u6b21\u7b2c\u52d5\u4f5c\u3057\u307e\u3059\u306e\u3067\u3001\u5b9f\u969b\u306bGithub\u3078\u66f4\u65b0\u3092push\u3057\u3066\u3001GithubActions\u304c\u52d5\u4f5c\u958b\u59cb\u3059\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u3066\u3001Github\u3078\u66f4\u65b0\u3092push\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'git add .\ngit commit -m "ops: provide kuroco deployment"\ngit push\n')),(0,r.kt)("p",null,"Github\u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u753b\u9762\u3078\u30a2\u30af\u30bb\u30b9\u3057\u3001","[Actions]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002\n",(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/39a7350cf279af2413129060d40edab1.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/39a7350cf279af2413129060d40edab1.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"GithubActions\u304c\u52d5\u4f5c\u958b\u59cb\u3057\u3066\u3044\u308b\u3053\u3068\u304c\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002\n",(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/ffab5abcf0f34c6f64fc99119aeb98c4.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/ffab5abcf0f34c6f64fc99119aeb98c4.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"\u3057\u3070\u3089\u304f\u5f85\u6a5f\u3059\u308b\u3068\u3001GithubActions\u306e\u52d5\u4f5c\u304c\u5b8c\u4e86\u3057\u3066\u3044\u308b\u3053\u3068\u304c\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002\n",(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/bebbb2d5f64889833c37e3cbd7e4dfbb.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/bebbb2d5f64889833c37e3cbd7e4dfbb.png",alt:"Image from Gyazo"})),(0,r.kt)("h4",{id:"githubactions\u304c\u5b8c\u4e86\u3057\u306a\u304b\u3063\u305f\u5834\u5408"},"GithubActions\u304c\u5b8c\u4e86\u3057\u306a\u304b\u3063\u305f\u5834\u5408"),(0,r.kt)("p",null,"GithubActions\u304c\u4f55\u3089\u304b\u306e\u7406\u7531\u3067\u30a8\u30e9\u30fc\u3068\u306a\u308a\u3001\u30c7\u30d7\u30ed\u30a4\u304c\u5b8c\u4e86\u3057\u306a\u304b\u3063\u305f\u5834\u5408\u3001\u5931\u6557\u3057\u3066\u3044\u308b\u3053\u3068\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002\n",(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/09c632162aff04a3decbf9740df9e26a.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/09c632162aff04a3decbf9740df9e26a.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"\u307e\u305f\u3001\u30e1\u30fc\u30eb\u3067\u901a\u77e5\u3055\u308c\u307e\u3059\u3002\n",(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/716c8da642050b2974d8be5db1567fe6.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/716c8da642050b2974d8be5db1567fe6.png",alt:"Image from Gyazo"})),(0,r.kt)("h3",{id:"6-\u30b5\u30a4\u30c8\u3092\u8868\u793a\u3059\u308b"},"6. \u30b5\u30a4\u30c8\u3092\u8868\u793a\u3059\u308b"),(0,r.kt)("p",null,"[\u30b5\u30a4\u30c8\u3092\u8868\u793a]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/f0041c26480eec068c794e4bdd4b6ad4.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/f0041c26480eec068c794e4bdd4b6ad4.png",alt:"Image (fetched from Gyazo)"}),"\n\u3059\u308b\u3068\u3001\u30c7\u30d7\u30ed\u30a4\u3055\u308c\u305f\u30b5\u30a4\u30c8\u3078\u9077\u79fb\u3057\u307e\u3059\u3002\u554f\u984c\u306a\u304f\u753b\u9762\u304c\u8868\u793a\u3055\u308c\u308c\u3070\u30c7\u30d7\u30ed\u30a4\u5b8c\u4e86\u3067\u3059\u3002"),(0,r.kt)("h2",{id:"kurocofront\u3078\u30d7\u30ec\u30d3\u30e5\u30fc\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u624b\u9806"},"KurocoFront\u3078\u30d7\u30ec\u30d3\u30e5\u30fc\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u624b\u9806"),(0,r.kt)("p",null,"KurocoFront\u3067\u306f\u3001\u901a\u5e38\u306e\u30c7\u30d7\u30ed\u30a4\u306e\u4ed6\u3001\u30d7\u30ec\u30d3\u30e5\u30fc\u3068\u3057\u3066\u4e00\u6642\u7684\u306a\u30c7\u30d7\u30ed\u30a4\u3092\u3055\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002  "),(0,r.kt)("p",null,"\u3042\u308b\u4fee\u6b63\u3092Github\u306ePullRequest\u3068\u3057\u3066\u9069\u7528\u3057\u3088\u3046\u3068\u3059\u308b\u5834\u5408\u3001\u30ed\u30fc\u30ab\u30eb\u4e0a\u3067\u3057\u304b\u52d5\u4f5c\u78ba\u8a8d\u304c\u3067\u304d\u306a\u3044\u3068\u304d\u3001\u30ec\u30d3\u30e5\u30a2\u30fc\u306f\u305d\u306ePullRequest\u3092\u81ea\u5206\u306e\u30ed\u30fc\u30ab\u30eb\u306b\u3044\u3061\u3044\u3061checkout/\u30d3\u30eb\u30c9\u3057\u3066\u52d5\u4f5c\u78ba\u8a8d\u3057\u306a\u304f\u3066\u306f\u306a\u3089\u305a\u3001\u4e0d\u4fbf\u3067\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u3053\u306e\u305f\u3081\u3001\u305d\u306ePullRequest\u306e\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u304c\u3001\u4e00\u6642\u7684\u306a\u4eeeURL\u4e0a\u306b\u30d3\u30eb\u30c9/\u30c7\u30d7\u30ed\u30a4\u3067\u304d(\u30d7\u30ec\u30d3\u30e5\u30fc\u30c7\u30d7\u30ed\u30a4)\u3001\u8ab0\u3067\u3082PullRequest\u306e\u6210\u679c\u7269\u3092\u30d6\u30e9\u30a6\u30b6\u3067\u78ba\u8a8d\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308b\u3068\u4fbf\u5229\u3067\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"build.yml"),"\u306b\u306f\u3001PullRequest\u306b",(0,r.kt)("strong",{parentName:"p"},"\u7279\u5b9a\u306e\u30b3\u30e1\u30f3\u30c8\u304c\u8a18\u8f09\u3055\u308c\u305f\u3089"),"\u30d7\u30ec\u30d3\u30e5\u30fc\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u3088\u3046\u306b\u3042\u3089\u304b\u3058\u3081\u30b9\u30af\u30ea\u30d7\u30c8\u304c\u7d44\u307f\u8fbc\u307e\u308c\u3066\u3044\u307e\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u4e0a\u8a18\u901a\u5e38\u306e\u30c7\u30d7\u30ed\u30a4\u624b\u9806\u3092\u884c\u306a\u3063\u3066\u3044\u308b\u65b9\u306f\u3001\u30d5\u30a1\u30a4\u30eb\u306e\u5909\u66f4\u7b49\u306f\u5fc5\u8981\u3042\u308a\u307e\u305b\u3093\u3002"),(0,r.kt)("h3",{id:"\u30d7\u30ec\u30d3\u30e5\u30fc\u30c7\u30d7\u30ed\u30a4\u624b\u9806"},"\u30d7\u30ec\u30d3\u30e5\u30fc\u30c7\u30d7\u30ed\u30a4\u624b\u9806"),(0,r.kt)("h4",{id:"\u30c6\u30b9\u30c8\u7528pullrequest\u306e\u4f5c\u6210"},"\u30c6\u30b9\u30c8\u7528PullRequest\u306e\u4f5c\u6210"),(0,r.kt)("p",null,"\u52d5\u4f5c\u78ba\u8a8d\u7528\u306b\u3001\u7a7a\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3057\u3066\u3001PullRequest\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'git checkout -b preview_deploy\ntouch test.txt\ngit add .\ngit commit -m "chore: tmp"\ngit push --set-upstream origin preview_deploy\n')),(0,r.kt)("p",null,"Github\u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u753b\u9762\u3078\u30a2\u30af\u30bb\u30b9\u3057\u3001","[Pull requests]","\u3001","[New pull request]","\u3068\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002\n",(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/30e0f4ce522f56b17e53adeeb2a64c4c.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/30e0f4ce522f56b17e53adeeb2a64c4c.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"[compare: ***]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001","[preview_deploy]","\u3092\u9078\u629e\u3001","[Create pull request]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002\n",(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/9c360322adfe36d1ff5c0f7e37d1d302.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/9c360322adfe36d1ff5c0f7e37d1d302.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"[Create pull request]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002\n",(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/1d43216d2defda21b8b4eb0776562ed6.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/1d43216d2defda21b8b4eb0776562ed6.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"PullRequest\u3092\u4f5c\u6210\u3067\u304d\u307e\u3057\u305f\u3002\n",(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/eb00d665a8bf98b5d5987ec1f61a7869.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/eb00d665a8bf98b5d5987ec1f61a7869.png",alt:"Image from Gyazo"})),(0,r.kt)("h4",{id:"\u30d7\u30ec\u30d3\u30e5\u30fc\u30c7\u30d7\u30ed\u30a4\u3059\u308b"},"\u30d7\u30ec\u30d3\u30e5\u30fc\u30c7\u30d7\u30ed\u30a4\u3059\u308b"),(0,r.kt)("p",null,"PullRequest\u753b\u9762\u4e0b\u90e8\u306e\u30b3\u30e1\u30f3\u30c8\u6b04\u306b\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"/kuroco stage"),"\u3068\u5165\u529b\u3001","[Comment]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002\n",(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/cb2301d837284c03d5662ba4040eac0f.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/cb2301d837284c03d5662ba4040eac0f.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"\u30b3\u30e1\u30f3\u30c8\u304c\u3055\u308c\u305f\u306e\u3092\u78ba\u8a8d\u3057\u305f\u5f8c\u3001","[Actions]","\u30bf\u30d6\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u307f\u308b\u3068\u3001GithubActions\u304c",(0,r.kt)("inlineCode",{parentName:"p"},"/kuroco stage"),"\u306e\u30b3\u30e1\u30f3\u30c8\u306b\u53cd\u5fdc\u3057\u3001\u30d7\u30ec\u30d3\u30e5\u30fc\u30c7\u30d7\u30ed\u30a4\u3092\u958b\u59cb\u3057\u3066\u3044\u308b\u3053\u3068\u304c\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002\n",(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/e418ce8668741af1028ec8e5a1e6f571.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/e418ce8668741af1028ec8e5a1e6f571.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"PullRequest\u306e\u753b\u9762\u306b\u623b\u308a\u3001\u3057\u3070\u3089\u304f\u5f8c\u306b\u753b\u9762\u66f4\u65b0\u3092\u3059\u308b\u3068\u3001\u4eeeURL\u306e\u30ea\u30f3\u30af\u3068\u4e00\u7dd2\u306b\u30d7\u30ec\u30d3\u30e5\u30fc\u30c7\u30d7\u30ed\u30a4\u306e\u30b3\u30e1\u30f3\u30c8\u304c\u8ffd\u52a0\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u304c\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002\n",(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/75a0ac2f3728fd934658696bc8a959a2.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/75a0ac2f3728fd934658696bc8a959a2.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"\u4eeeURL\u306e\u30ea\u30f3\u30af\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3066\u3001PullRequest\u306e\u5185\u5bb9\u304c\u30c7\u30d7\u30ed\u30a4\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002\n",(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/f652d02b27fc9120c4e9d3a6d69fa974.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/f652d02b27fc9120c4e9d3a6d69fa974.png",alt:"Image from Gyazo"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u30d7\u30ec\u30d3\u30e5\u30fc\u30c7\u30d7\u30ed\u30a4\u3067\u767a\u884c\u3055\u308c\u308b\u4eeeURL\u4e0a\u304b\u3089\u64cd\u4f5c\u3057\u305f\u3068\u304d\u3001CORS\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3059\u308b\u5834\u5408\u3001\u30ef\u30a4\u30eb\u30c9\u30ab\u30fc\u30c9\u3067\u4eeeURL\u304b\u3089\u306e\u30a2\u30af\u30bb\u30b9\u3092\u8a31\u53ef\u3059\u308b\u6307\u5b9a\u3092\u3057\u3066\u304f\u3060\u3055\u3044\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u4eeeURL\u306f",(0,r.kt)("inlineCode",{parentName:"p"},"https://\u30cf\u30c3\u30b7\u30e5\u5024-\u30b5\u30a4\u30c8\u30ad\u30fc.g.kuroco-front.app"),"\u306e\u69d8\u306b\u767a\u884c\u3055\u308c\u308b\u305f\u3081\u3001",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"https://*-\u30b5\u30a4\u30c8\u30ad\u30fc.g.kuroco-front.app"),"\u3068\u3044\u3046\u6307\u5b9a\u3092\u3059\u308b\u3053\u3068\u3067\u3001CORS\u30a8\u30e9\u30fc\u3092\u56de\u907f\u3067\u304d\u307e\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/37dd46e77bc289ad77a83018e259866f.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/37dd46e77bc289ad77a83018e259866f.png",alt:"Image from Gyazo"}))),(0,r.kt)("h2",{id:"\u30c9\u30e1\u30a4\u30f3\u306b\u3064\u3044\u3066"},"\u30c9\u30e1\u30a4\u30f3\u306b\u3064\u3044\u3066"),(0,r.kt)("p",null,"KurocoFront\u306e\u30c9\u30e1\u30a4\u30f3\u3067\u3059\u304c\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f ",(0,r.kt)("inlineCode",{parentName:"p"},"https://\u30b5\u30a4\u30c8\u30ad\u30fc.g.kuroco-front.app")," \u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3\u3078\u306e\u5909\u66f4\u306b\u3064\u3044\u3066\u306f ",(0,r.kt)("a",{parentName:"p",href:"/ja/docs/tutorials/using-a-custom-domain-name-on-kurocofront/"},"KurocoFront\u3067\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3\u3092\u5229\u7528\u3059\u308b\u624b\u9806"),"\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h2",{id:"\u3046\u307e\u304f\u30c7\u30d7\u30ed\u30a4\u3067\u304d\u306a\u3044\u5834\u5408"},"\u3046\u307e\u304f\u30c7\u30d7\u30ed\u30a4\u3067\u304d\u306a\u3044\u5834\u5408"),(0,r.kt)("p",null,"KurocoFront\u3078\u3046\u307e\u304f\u30c7\u30d7\u30ed\u30a4\u3067\u304d\u306a\u3044\u5834\u5408\u3084\u3001\u30a8\u30e9\u30fc\u304c\u8868\u793a\u3055\u308c\u3066\u3057\u307e\u3046\u5834\u5408\u306f\u4e0b\u8a18\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7ba1\u7406\u753b\u9762\u306b",(0,r.kt)("a",{parentName:"li",href:"/ja/docs/management/front-log-list/"},"KurocoFront\u30ed\u30b0"),"\u304c\u3042\u308a\u307e\u3059\u306e\u3067\u3001\u305d\u3061\u3089\u3067\u30ed\u30b0\u306e\u3054\u78ba\u8a8d\u3092\u304a\u9858\u3044\u3057\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ja/docs/faq/what-should-I-do-if-file-updates-are-not-reflected-in-kurocofront/"},"KurocoFront\u306b\u30d5\u30a1\u30a4\u30eb\u304c\u53cd\u6620\u3055\u308c\u306a\u3044\u306e\u3067\u3059\u304c\u3001\u4f55\u3092\u30c1\u30a7\u30c3\u30af\u3059\u308c\u3070\u3088\u3044\u3067\u3059\u304b\uff1f")," \u3092\u53c2\u8003\u306b\u3001\u8a2d\u5b9a\u306e\u518d\u78ba\u8a8d\u3092\u304a\u9858\u3044\u3057\u307e\u3059\u3002")),(0,r.kt)("p",null,"\u307e\u305f\u3001GitHub Actions\u306e\u8a2d\u5b9a\u304c\u5206\u304b\u3089\u306a\u3044\u5834\u5408\u306f",(0,r.kt)("a",{parentName:"p",href:"/ja/docs/about/support/"},"\u30b5\u30dd\u30fc\u30c8\u306eSlack"),"\u3078\u3054\u9023\u7d61\u304f\u3060\u3055\u3044\u3002\u30b5\u30dd\u30fc\u30c8\u3044\u305f\u3057\u307e\u3059\u3002"))}u.isMDXComponent=!0}}]);