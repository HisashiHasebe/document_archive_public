"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[77832],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>g});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},i=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,i=m(e,["components","mdxType","originalType","parentName"]),d=s(a),f=o,g=d["".concat(c,".").concat(f)]||d[f]||l[f]||n;return a?r.createElement(g,p(p({ref:t},i),{},{components:a})):r.createElement(g,p({ref:t},i))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,p=new Array(n);p[0]=f;var m={};for(var c in t)hasOwnProperty.call(t,c)&&(m[c]=t[c]);m.originalType=e,m[d]="string"==typeof e?e:o,p[1]=m;for(var s=2;s<n;s++)p[s]=a[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},93055:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>l,frontMatter:()=>n,metadata:()=>m,toc:()=>s});var r=a(87462),o=(a(67294),a(3905));const n={title:"Vimeo\u3068\u9023\u643a\u3057\u3066\u52d5\u753b\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b",category:"\u5916\u90e8\u30b7\u30b9\u30c6\u30e0\u9023\u643a",weight:1},p=void 0,m={unversionedId:"tutorials/how-to-connect-to-vimeo",id:"tutorials/how-to-connect-to-vimeo",title:"Vimeo\u3068\u9023\u643a\u3057\u3066\u52d5\u753b\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b",description:"\u3053\u306e\u30da\u30fc\u30b8\u3067\u306f\u3001Kuroco\u3068Vimeo\u3092\u9023\u643a\u3057\u3001Kuroco\u304b\u3089\u52d5\u753b\u306e\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u30fb\u8868\u793a\u3092\u3059\u308b\u65b9\u6cd5\u3092\u8aac\u660e\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/tutorials/how-to-connect-to-vimeo.md",sourceDirName:"tutorials",slug:"/tutorials/how-to-connect-to-vimeo",permalink:"/ja/docs/tutorials/how-to-connect-to-vimeo",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/tutorials/how-to-connect-to-vimeo.md",tags:[],version:"current",frontMatter:{title:"Vimeo\u3068\u9023\u643a\u3057\u3066\u52d5\u753b\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b",category:"\u5916\u90e8\u30b7\u30b9\u30c6\u30e0\u9023\u643a",weight:1},sidebar:"documentationSidebar",previous:{title:"Amazon S3\u3068\u9023\u643a\u3057\u3066\u3001Storage\u306b\u30d5\u30a1\u30a4\u30eb\u3092\u4fdd\u5b58\u3059\u308b",permalink:"/ja/docs/tutorials/amazon-s3"},next:{title:"OpenAI\u3068\u9023\u643a\u3057\u3066Kuroco\u306eAPI\u3092\u901a\u3057\u3066AI\u306b\u3088\u308b\u56de\u7b54\u3092\u751f\u6210\u3059\u308b",permalink:"/ja/docs/tutorials/obtaining-chatgpt-responses-through-kuroco-openai-endpoint"}},c={},s=[{value:"Firebase\u3068\u9023\u643a\u3059\u308b",id:"firebase\u3068\u9023\u643a\u3059\u308b",level:2},{value:"Vimeo\u3068\u9023\u643a\u3059\u308b",id:"vimeo\u3068\u9023\u643a\u3059\u308b",level:2},{value:"\u9023\u643a\u3057\u305fVimeo\u306e\u5229\u7528\u65b9\u6cd5",id:"\u9023\u643a\u3057\u305fvimeo\u306e\u5229\u7528\u65b9\u6cd5",level:2}],i={toc:s},d="wrapper";function l(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,r.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u3053\u306e\u30da\u30fc\u30b8\u3067\u306f\u3001Kuroco\u3068Vimeo\u3092\u9023\u643a\u3057\u3001Kuroco\u304b\u3089\u52d5\u753b\u306e\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u30fb\u8868\u793a\u3092\u3059\u308b\u65b9\u6cd5\u3092\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,o.kt)("h2",{id:"firebase\u3068\u9023\u643a\u3059\u308b"},"Firebase\u3068\u9023\u643a\u3059\u308b"),(0,o.kt)("p",null,"Vimeo\u3068\u9023\u643a\u3057\u3066\u52d5\u753b\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\u305f\u3081\u306b\u3001Firebase\u3068\u9023\u643a\u304c\u3055\u308c\u3066\u3044\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u307e\u305a\u306f",(0,o.kt)("a",{parentName:"p",href:"/ja/docs/tutorials/firebase/"},"Firebase\u3068\u9023\u643a\u3057\u3066\u3001Storage\u306b\u30d5\u30a1\u30a4\u30eb\u3092\u4fdd\u5b58\u3059\u308b"),"\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3092\u53c2\u8003\u306bFirebase\u3068\u9023\u643a\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)("h2",{id:"vimeo\u3068\u9023\u643a\u3059\u308b"},"Vimeo\u3068\u9023\u643a\u3059\u308b"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1. Vimeo\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u767b\u9332\u3059\u308b"),(0,o.kt)("br",{parentName:"p"}),"\n","Vimeo\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u767b\u9332\u3057\u3066\u304f\u3060\u3055\u3044\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u53c2\u8003) Vimeo\u306e\u30d7\u30e9\u30f3\u306b\u3064\u3044\u3066",(0,o.kt)("br",{parentName:"p"}),"\n","\u6a5f\u80fd\u7684\u306b\u306fPlus\u3067\u3082\u5bfe\u5fdc\u53ef\u80fd\u3067\u3059\u304c\u3001\u983b\u7e41\u306b\u5229\u7528\u3059\u308b\u5834\u5408\u306fBussiness\u304c\u304a\u3059\u3059\u3081\u3067\u3059\u3002",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://vimeo.com/"},"https://vimeo.com/"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/9adcf326009b7831b351e68745525926.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/9adcf326009b7831b351e68745525926.png",alt:"Image from Gyazo"}),"\n",(0,o.kt)("strong",{parentName:"p"},"2. \u65b0\u898f\u30a2\u30d7\u30ea\u767b\u9332\u306e\u753b\u9762\u3078\u9032\u3080"),(0,o.kt)("br",{parentName:"p"}),"\n","\u30ed\u30b0\u30a4\u30f3\u3057\u305f\u72b6\u614b\u306e\u307e\u307e\u3001",(0,o.kt)("a",{parentName:"p",href:"https://developer.vimeo.com/"},"Vimeo developer")," \u304b\u3089","[\u65b0\u898f\u30a2\u30d7\u30ea]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/5fd6266289e7e6f2e79247a3fad9e992.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/5fd6266289e7e6f2e79247a3fad9e992.png",alt:"Image (fetched from Gyazo)"}),"\n",(0,o.kt)("strong",{parentName:"p"},"3. app\u3092\u8ffd\u52a0\u3059\u308b"),(0,o.kt)("br",{parentName:"p"}),"\n","\u4e0b\u8a18\u5185\u5bb9\u3092\u5165\u529b\u3057\u3001","[Create app]"," \u3092\u30af\u30ea\u30c3\u30af\u3057\u3066app\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"App name: \u304a\u597d\u304d\u306a\u540d\u524d"),(0,o.kt)("li",{parentName:"ul"},"App description:\u7c21\u5358\u3067\u3088\u3044\u306e\u3067\u52d5\u753b\u5229\u7528\u3059\u308b\u5185\u5bb9\u306e\u82f1\u8a9e\u306e\u8aac\u660e"),(0,o.kt)("li",{parentName:"ul"},"Will people besides you be able to access your app?:No")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/00f63d9590c1a7a71dfaaaa23a014328.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/00f63d9590c1a7a71dfaaaa23a014328.png",alt:"Image (fetched from Gyazo)"}),"\n",(0,o.kt)("strong",{parentName:"p"},"4. app\u306e\u8a2d\u5b9a\u753b\u9762\u304b\u3089Upload Access\u306e\u7533\u8acb\u753b\u9762\u306b\u9032\u3080"),(0,o.kt)("br",{parentName:"p"}),"\n","[Request Upload Access]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/1cc6fa6a5755d0b4f097d28d0d02a2b0.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/1cc6fa6a5755d0b4f097d28d0d02a2b0.png",alt:"Image (fetched from Gyazo)"}),"\n",(0,o.kt)("strong",{parentName:"p"},"5. Request Upload Access\u306e\u7533\u8acb\u3059\u308b"),(0,o.kt)("br",{parentName:"p"}),"\n","\u4e0b\u8a18\u5185\u5bb9\u3092\u5165\u529b\u3057\u307e\u3059\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Will you be charging for sample?: \u52d5\u753b\u3092\u898b\u308b\u306e\u306b\u8ab2\u91d1\u3092\u3057\u306a\u3051\u308c\u3070No\u3092\u9078\u629e"),(0,o.kt)("li",{parentName:"ul"},"Where will these videos be uploaded?: My account"),(0,o.kt)("li",{parentName:"ul"},"Who created these videos?: Other people created these videos"),(0,o.kt)("li",{parentName:"ul"},"What kind of videos will be uploaded?: \u7c21\u5358\u3067\u3088\u3044\u306e\u3067\u3069\u306e\u3088\u3046\u306a\u52d5\u753b\u304c\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3055\u308c\u308b\u304b\u306e\u8aac\u660e\u3092\u82f1\u8a9e\u3067\u5165\u529b\u3057\u307e\u3059\u3002")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/d55161531b041665efab32f3bc27a9d1.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/d55161531b041665efab32f3bc27a9d1.png",alt:"Image (fetched from Gyazo)"}),"\n\u5168\u3066\u8a18\u8f09\u3057\u305f\u3089 ","[Request upload access]"," \u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u7533\u8acb\u5b8c\u4e86\u3067\u3059\u3002"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u30a2\u30d7\u30ea\u306e\u8a8d\u8a3c\u306b\u306f2\u30013\u65e5\u307b\u3069\u304b\u304b\u308a\u307e\u3059\u3002\u627f\u8a8d\u3055\u308c\u306a\u3044\u5834\u5408\u306f",(0,o.kt)("a",{parentName:"p",href:"https://vimeo.com/help/contact"},"Vimeo\u306e\u30b5\u30dd\u30fc\u30c8"),"\u306b\u304a\u554f\u3044\u5408\u308f\u305b\u304f\u3060\u3055\u3044\u3002")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"6. Access Tokens\u3092\u4f5c\u6210\u3059\u308b"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://developer.vimeo.com/apps"},"Vimeo developper\u306eMy Apps"),"\u3092\u78ba\u8a8d\u3059\u308b\u3068\u3001\u5148\u307b\u3069\u4f5c\u6210\u3057\u305f\u30a2\u30d7\u30ea\u304c\u8868\u793a\u3055\u308c\u308b\u306e\u3067\u3001\u30af\u30ea\u30c3\u30af\u3057\u3066\u4f5c\u6210\u3057\u305f\u30a2\u30d7\u30ea\u306e\u8a2d\u5b9a\u753b\u9762\u3078\u9077\u79fb\u3057\u307e\u3059\u3002",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/f44c1a583d2a802d95b657d824208559.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/f44c1a583d2a802d95b657d824208559.png",alt:"Image (fetched from Gyazo)"}),"\n\u4e0b\u8a18\u306e\u3088\u3046\u306b\u3001Authenticated\u3092\u9078\u629e\u5f8c\u3001Scopes\u3092\u9078\u629e\u3057\u3066\u3001","[Generate]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/9d4d4a4fc49c800e2afc5cc6dfc05a4d.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/9d4d4a4fc49c800e2afc5cc6dfc05a4d.png",alt:"Image (fetched from Gyazo)"}),"\nAccess Token\u304c\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u4e0b\u8a18\u60c5\u5831\u3092\u30e1\u30e2\u3057\u3066\u304a\u3044\u3066\u4e0b\u3055\u3044\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Access token"),(0,o.kt)("li",{parentName:"ul"},"Client identifier"),(0,o.kt)("li",{parentName:"ul"},"Client secrets")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Access Token\u306f\u753b\u9762\u3092\u9589\u3058\u308b\u3068\u518d\u8868\u793a\u3067\u304d\u307e\u305b\u3093\u306e\u3067\u3001\u30e1\u30e2\u3092\u3057\u3066\u304a\u3044\u3066\u304f\u3060\u3055\u3044\u3002  ")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/bde62e7ce65b5ea44cdd4c98dbe49700.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/bde62e7ce65b5ea44cdd4c98dbe49700.png",alt:"Image (fetched from Gyazo)"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/b44dd865b2769a7dd506aea4603a4603.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/b44dd865b2769a7dd506aea4603a4603.png",alt:"Image (fetched from Gyazo)"}),"\n",(0,o.kt)("strong",{parentName:"p"},"7. Kuroco\u306e\u7ba1\u7406\u753b\u9762\u306b\u8a2d\u5b9a\u3059\u308b"),(0,o.kt)("br",{parentName:"p"}),"\n","\u6b21\u306bKuroco\u7ba1\u7406\u753b\u9762\u3078\u79fb\u52d5\u3057\u3001","[\u5916\u90e8\u30b7\u30b9\u30c6\u30e0\u9023\u643a]"," -> ","[vimeo]","\u306b\u9077\u79fb\u3057\u307e\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/cbd734b6453e3bebb0702d9f468ec92d.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/cbd734b6453e3bebb0702d9f468ec92d.png",alt:"Image from Gyazo"})),(0,o.kt)("p",null,"\u300c6. Access Tokens\u3092\u4f5c\u6210\u3059\u308b\u300d\u3067\u53d6\u5f97\u3057\u305f\u3001\u300cClient identifier\u300d\u300cClient secrets\u300d\u300cAccess token\u300d\u3092\u30bb\u30c3\u30c8\u3057\u307e\u3059\u3002",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/402b9060c6cd45cd755e9b41b5d3425f.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/402b9060c6cd45cd755e9b41b5d3425f.png",alt:"Image from Gyazo"})),(0,o.kt)("p",null,"\u5024\u3092\u8a18\u5165\u3057\u305f\u3089\u3001","[\u66f4\u65b0\u3059\u308b]"," \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u4ee5\u4e0a\u3067Kuroco\u3068Vimeo\u304c\u9023\u643a\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f\u3002  "),(0,o.kt)("p",null,"Plus\u4ee5\u4e0a\u306e\u30d7\u30e9\u30f3\u3092\u5951\u7d04\u3057\u3066\u3044\u308b\u5834\u5408\u3001\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u3092\u8a2d\u5b9a\u3067\u304d\u308b\u306e\u3067\u4e0b\u8a18\u8a2d\u5b9a\u306b\u9032\u3093\u3067\u304f\u3060\u3055\u3044\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u7279\u306b\u8a2d\u5b9a\u304c\u5fc5\u8981\u306a\u3044\u5834\u5408\u306f",(0,o.kt)("a",{parentName:"p",href:"#%E9%80%A3%E6%90%BA%E3%81%97%E3%81%9Fvimeo%E3%81%AE%E5%88%A9%E7%94%A8%E6%96%B9%E6%B3%95"},"\u9023\u643a\u3057\u305fVimeo\u306e\u5229\u7528\u65b9\u6cd5"),"\u306b\u9032\u3093\u3067\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"8. Vimeo\u306e\u8a2d\u5b9a\u3092\u3059\u308b"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://vimeo.com/settings/videos/embed_presets"},"Vimeo\u306e\u8a2d\u5b9a\u753b\u9762"),"\u306b\u79fb\u52d5\u3057\u3001","[\u65b0\u898f\u30d7\u30ea\u30bb\u30c3\u30c8\u3092\u8ffd\u52a0]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001\u30d7\u30ea\u30bb\u30c3\u30c8\u306e\u8a2d\u5b9a\u753b\u9762\u306b\u9077\u79fb\u3057\u307e\u3059\u3002  "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/bd4a5c677d313f4a250b90dd26121f38.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/bd4a5c677d313f4a250b90dd26121f38.png",alt:"Image (fetched from Gyazo)"}),"\n",(0,o.kt)("strong",{parentName:"p"},"9. \u30d7\u30ea\u30bb\u30c3\u30c8\u3092\u4f5c\u6210\u3059\u308b"),(0,o.kt)("br",{parentName:"p"}),"\n","\u4e0b\u8a18\u306e\u90e8\u5206\u3067\u30d7\u30ea\u30bb\u30c3\u30c8\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/89962274c7b72c46919f3be3ad308bd6.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/89962274c7b72c46919f3be3ad308bd6.png",alt:"Image (fetched from Gyazo)"}),"\n\u8a2d\u5b9a\u5b8c\u4e86\u3057\u305f\u3089","[\u4fdd\u5b58]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"10. \u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u3092\u8a2d\u5b9a\u3059\u308b"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://vimeo.com/settings/videos/upload_defaults"},"\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u753b\u9762"),"\u304b\u3089\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002\u30d7\u30ea\u30bb\u30c3\u30c8\u306f\u5148\u307b\u3069\u4f5c\u6210\u3057\u305f\u3082\u306e\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044\u3002",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/e28f4e4b464facc3f830e7b36bf5b409.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/e28f4e4b464facc3f830e7b36bf5b409.png",alt:"Image (fetched from Gyazo)"}),"\n\u8a2d\u5b9a\u5b8c\u4e86\u3057\u305f\u3089","[\u4fdd\u5b58]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002  "),(0,o.kt)("h2",{id:"\u9023\u643a\u3057\u305fvimeo\u306e\u5229\u7528\u65b9\u6cd5"},"\u9023\u643a\u3057\u305fVimeo\u306e\u5229\u7528\u65b9\u6cd5"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1. \u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u3092\u7de8\u96c6\u3059\u308b"),(0,o.kt)("br",{parentName:"p"}),"\n","Firebase, Vimeo\u305d\u308c\u305e\u308c\u3068\u306e\u9023\u643a\u304c\u5b8c\u4e86\u3059\u308b\u3068\u3001",(0,o.kt)("a",{parentName:"p",href:"/ja/docs/management/content-structure-topics-group/#%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84%E5%AE%9A%E7%BE%A9%E7%B7%A8%E9%9B%86"},"\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u7de8\u96c6"),"\u306e\u30da\u30fc\u30b8\u3067\u62e1\u5f35\u9805\u76ee\u306b\u300c\u52d5\u753b\u30d5\u30a1\u30a4\u30eb(Vimeo/)\u300d\u304c\u9078\u629e\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u5bfe\u8c61\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u3088\u308a\u3001\u300c\u52d5\u753b\u30d5\u30a1\u30a4\u30eb(Vimeo)\u300d\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/f863f031ff9f3914bc597c836487d944.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/f863f031ff9f3914bc597c836487d944.png",alt:"Image from Gyazo"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2. \u30b3\u30f3\u30c6\u30f3\u30c4\u306b\u52d5\u753b\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b"),(0,o.kt)("br",{parentName:"p"}),"\n","\u5bfe\u8c61\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u8ffd\u52a0\u30fb\u7de8\u96c6\u30da\u30fc\u30b8\u3067\u52d5\u753b\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u307e\u3059\u3002",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/7a070a95a23d788ac6b9fe131be7ac3b.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/7a070a95a23d788ac6b9fe131be7ac3b.png",alt:"Image from Gyazo"})),(0,o.kt)("p",null,"\u52d5\u753b\u306fVimeo\u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3055\u308c\u307e\u3059\u3002",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/a0e779da8dee3dfc991867703e1ae2e3.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/a0e779da8dee3dfc991867703e1ae2e3.png",alt:"Image from Gyazo"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3. \u30d5\u30ed\u30f3\u30c8\u3067\u8868\u793a\u3059\u308b"),(0,o.kt)("br",{parentName:"p"}),"\n","\u30d5\u30ed\u30f3\u30c8\u3067\u306f\u4e0b\u8a18\u306e\u3088\u3046\u306bVimeo\u306e\u30ea\u30f3\u30af\u3092\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/b0f95ff4dc49d9571929fe8f474dc292.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/b0f95ff4dc49d9571929fe8f474dc292.png",alt:"Image from Gyazo"})),(0,o.kt)("p",null,"\u53c2\u8003) Vimeo\u306e\u30ea\u30f3\u30af\u306fChrome\u306e\u958b\u767a\u8005\u30b3\u30f3\u30bd\u30fc\u30eb\u304b\u3089\u3001","[Network]","\u30bf\u30d6\u3067\u5b9f\u969b\u306bKuroco\u3068\u901a\u4fe1\u3057\u3066\u3044\u308b\u5185\u5bb9\u3092\u78ba\u8a8d\u3059\u308b\u304b\u3001",(0,o.kt)("a",{parentName:"p",href:"/ja/docs/tutorials/using-swagger-to-check-the-structure-of-data/"},"Swagger UI"),"\u3092\u5229\u7528\u3057\u3066\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)("p",null,"\u4e0b\u8a18\u306e\u3088\u3046\u306b\u30d5\u30ed\u30f3\u30c8\u3067Vimeo\u306e\u52d5\u753b\u306e\u8868\u793a\u304c\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/70961f15062f8e2bee5092d380a6a7fa.jpg?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/70961f15062f8e2bee5092d380a6a7fa.jpg",alt:"Image from Gyazo"})),(0,o.kt)("p",null,"\u4ee5\u4e0a\u3067Kuroco\u3068Vimeo\u3092\u9023\u643a\u3057\u52d5\u753b\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f\u3002"))}l.isMDXComponent=!0}}]);