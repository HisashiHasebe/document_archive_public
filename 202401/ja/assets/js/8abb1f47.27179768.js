"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[76048],{3905:(t,e,a)=>{a.d(e,{Zo:()=>i,kt:()=>u});var r=a(67294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function c(t,e){if(null==t)return{};var a,r,o=function(t,e){if(null==t)return{};var a,r,o={},n=Object.keys(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var p=r.createContext({}),m=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):d(d({},e),t)),a},i=function(t){var e=m(t.components);return r.createElement(p.Provider,{value:e},t.children)},s="mdxType",l={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},y=r.forwardRef((function(t,e){var a=t.components,o=t.mdxType,n=t.originalType,p=t.parentName,i=c(t,["components","mdxType","originalType","parentName"]),s=m(a),y=o,u=s["".concat(p,".").concat(y)]||s[y]||l[y]||n;return a?r.createElement(u,d(d({ref:e},i),{},{components:a})):r.createElement(u,d({ref:e},i))}));function u(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var n=a.length,d=new Array(n);d[0]=y;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=t,c[s]="string"==typeof t?t:o,d[1]=c;for(var m=2;m<n;m++)d[m]=a[m];return r.createElement.apply(null,d)}return r.createElement.apply(null,a)}y.displayName="MDXCreateElement"},1700:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>d,default:()=>l,frontMatter:()=>n,metadata:()=>c,toc:()=>m});var r=a(87462),o=(a(67294),a(3905));const n={title:"VAddy\u3068\u9023\u643a\u3057\u3066API\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306b\u5bfe\u3059\u308b\u81ea\u52d5\u8a3a\u65ad\u3092\u8a2d\u5b9a\u3059\u308b\u3002",category:"\u5916\u90e8\u30b7\u30b9\u30c6\u30e0\u9023\u643a",weight:1},d=void 0,c={unversionedId:"tutorials/integrating-with-vaddy",id:"tutorials/integrating-with-vaddy",title:"VAddy\u3068\u9023\u643a\u3057\u3066API\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306b\u5bfe\u3059\u308b\u81ea\u52d5\u8a3a\u65ad\u3092\u8a2d\u5b9a\u3059\u308b\u3002",description:"Kuroco\u3067\u306fVAddy\u3068\u9023\u643a\u3059\u308b\u3053\u3068\u3067\u3001\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u3067\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u5168\u3066\u306eAPI\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306b\u5bfe\u3059\u308b\u8106\u5f31\u6027\u8a3a\u65ad\u306e\u81ea\u52d5\u7684\u306a\u5b9a\u671f\u5b9f\u884c\u304c\u53ef\u80fd\u3067\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/tutorials/integrating-with-vaddy.md",sourceDirName:"tutorials",slug:"/tutorials/integrating-with-vaddy",permalink:"/ja/docs/tutorials/integrating-with-vaddy",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/tutorials/integrating-with-vaddy.md",tags:[],version:"current",frontMatter:{title:"VAddy\u3068\u9023\u643a\u3057\u3066API\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306b\u5bfe\u3059\u308b\u81ea\u52d5\u8a3a\u65ad\u3092\u8a2d\u5b9a\u3059\u308b\u3002",category:"\u5916\u90e8\u30b7\u30b9\u30c6\u30e0\u9023\u643a",weight:1},sidebar:"documentationSidebar",previous:{title:"GoogleAnalytics\u306ePV\u6570\u3092\u5143\u306b\u30a2\u30af\u30bb\u30b9\u30e9\u30f3\u30ad\u30f3\u30b0\u3092\u5b9f\u88c5\u3059\u308b\u65b9\u6cd5",permalink:"/ja/docs/tutorials/how-to-implement-ranking-with-google-analytics"},next:{title:"Stripe\u3068\u9023\u643a\u3057\u3066\u6709\u6599\u4f1a\u54e1\u306e\u6a5f\u80fd\u3092\u5b9f\u88c5\u3059\u308b\u3002",permalink:"/ja/docs/tutorials/subscription-billing-with-stripe"}},p={},m=[{value:"1. VAddy\u3092\u7533\u3057\u8fbc\u3080",id:"1-vaddy\u3092\u7533\u3057\u8fbc\u3080",level:2},{value:"2. VAddy\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u8ffd\u52a0\u3059\u308b",id:"2-vaddy\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u8ffd\u52a0\u3059\u308b",level:2},{value:"3. \u30b5\u30fc\u30d0\u30fc\u6240\u6709\u8005\u78ba\u8a8d\u3092\u5b9f\u65bd\u3059\u308b",id:"3-\u30b5\u30fc\u30d0\u30fc\u6240\u6709\u8005\u78ba\u8a8d\u3092\u5b9f\u65bd\u3059\u308b",level:2},{value:"4. API Auth Key (VADDY_TOKEN)\u3092\u53d6\u5f97\u3059\u308b",id:"4-api-auth-key-vaddy_token\u3092\u53d6\u5f97\u3059\u308b",level:2},{value:"5. Kuroco\u306e\u8a2d\u5b9a\u3092\u3059\u308b\u3002",id:"5-kuroco\u306e\u8a2d\u5b9a\u3092\u3059\u308b",level:2}],i={toc:m},s="wrapper";function l(t){let{components:e,...a}=t;return(0,o.kt)(s,(0,r.Z)({},i,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Kuroco\u3067\u306fVAddy\u3068\u9023\u643a\u3059\u308b\u3053\u3068\u3067\u3001\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u3067\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u5168\u3066\u306eAPI\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306b\u5bfe\u3059\u308b\u8106\u5f31\u6027\u8a3a\u65ad\u306e\u81ea\u52d5\u7684\u306a\u5b9a\u671f\u5b9f\u884c\u304c\u53ef\u80fd\u3067\u3059\u3002"),(0,o.kt)("p",null,"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001Kuroco\u7ba1\u7406\u753b\u9762\u3067\u306eVAddy\u3068\u306e\u9023\u643a\u65b9\u6cd5\u3092\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"VAddy\u5074\u306e\u4ed5\u69d8\u306e\u5909\u66f4\u306b\u3088\u308a\u3001VAddy\u5074\u3067\u306e\u64cd\u4f5c\u65b9\u6cd5\u306f\u672c\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3068\u7570\u306a\u308b\u7b87\u6240\u304c\u3042\u308b\u5834\u5408\u3082\u3054\u3056\u3044\u307e\u3059\u3002\u8a73\u7d30\u306f",(0,o.kt)("a",{parentName:"p",href:"https://support.vaddy.net/hc/ja"},"VAddy\u30b5\u30dd\u30fc\u30c8\u30b5\u30a4\u30c8"),"\u3067\u6700\u65b0\u60c5\u5831\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002  ")),(0,o.kt)("h2",{id:"1-vaddy\u3092\u7533\u3057\u8fbc\u3080"},"1. VAddy\u3092\u7533\u3057\u8fbc\u3080"),(0,o.kt)("p",null,"Kuroco\u7ba1\u7406\u753b\u9762\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3001","[\u5916\u90e8\u30b7\u30b9\u30c6\u30e0\u9023\u643a]"," -> ","[VAddy]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/18d2347f905e24b249c63e09c9f8bd43.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/18d2347f905e24b249c63e09c9f8bd43.png",alt:"Image (fetched from Gyazo)"}),"\nKuroco\u7ba1\u7406\u753b\u9762\u306e",(0,o.kt)("a",{parentName:"p",href:"/ja/docs/management/vaddy/"},"VAddy\u30da\u30fc\u30b8"),"\u304b\u3089\u300cVAddy\u306e\u7533\u3057\u8fbc\u307f\u306f\u3053\u3061\u3089\u304b\u3089\u300d\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/8bbcaecbe913121ee07f68ed74d8e4f6.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/8bbcaecbe913121ee07f68ed74d8e4f6.png",alt:"Image from Gyazo"})),(0,o.kt)("p",null,"\u30b5\u30fc\u30d3\u30b9\u30b3\u30fc\u30c9\u304c\u9069\u7528\u3055\u308c\u305f\u72b6\u614b\u3067VAddy\u306e\u304a\u7533\u8fbc\u307f\u30da\u30fc\u30b8\u306b\u9077\u79fb\u3057\u307e\u3059\u306e\u3067\u3001VAddy\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u4f5c\u6210\u3092\u304a\u9858\u3044\u3044\u305f\u3057\u307e\u3059\u3002",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/01cae640647c3ed0ba1e293928c51dae.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/01cae640647c3ed0ba1e293928c51dae.png",alt:"Image (fetched from Gyazo)"})),(0,o.kt)("h2",{id:"2-vaddy\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u8ffd\u52a0\u3059\u308b"},"2. VAddy\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u8ffd\u52a0\u3059\u308b"),(0,o.kt)("p",null,"VAddy\u3067\u306f\u672c\u756a\u74b0\u5883\u306e\u30b5\u30fc\u30d0\u30fc\u3078\u306e\u30b9\u30ad\u30e3\u30f3\u5b9f\u884c\u306f\u7981\u6b62\u3055\u308c\u3066\u3044\u308b\u305f\u3081\u3001\u8a3a\u65ad\u3092\u5b9f\u65bd\u3059\u308b\u305f\u3081\u306eFQDN\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","Kuroco\u7ba1\u7406\u753b\u9762\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3001","[\u5916\u90e8\u30b7\u30b9\u30c6\u30e0\u9023\u643a]"," -> ","[VAddy]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002\n",(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/18d2347f905e24b249c63e09c9f8bd43.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/18d2347f905e24b249c63e09c9f8bd43.png",alt:"Image (fetched from Gyazo)"}),"\nServer FQDN\u306b\u8868\u793a\u3055\u308c\u3066\u3044\u308b ",(0,o.kt)("inlineCode",{parentName:"p"},"kuroco-vaddy.com")," \u306e\u30c9\u30e1\u30a4\u30f3\u306eURL\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u3053\u3061\u3089\u304c\u8a3a\u65ad\u3092\u5b9f\u65bd\u3059\u308b\u305f\u3081\u306eFQDN\u306b\u306a\u308a\u307e\u3059\u3002",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/c69620c42538bfa4f46da1416ea93d3c.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/c69620c42538bfa4f46da1416ea93d3c.png",alt:"Image from Gyazo"})),(0,o.kt)("p",null,"\u6b21\u306b",(0,o.kt)("a",{parentName:"p",href:"https://support.vaddy.net/hc/ja/articles/115006110548--STEP-1-%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%AE%E4%BD%9C%E6%88%90"},"VAddy\u306e\u30b9\u30bf\u30fc\u30c8\u30a2\u30c3\u30d7\u30ac\u30a4\u30c9"),"\u306b\u5f93\u3063\u3066\u3001VAddy\u5074\u3067\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210\u3092\u3057\u307e\u3059\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","Server FQDN\u306f",(0,o.kt)("inlineCode",{parentName:"p"},"https://"),"\u3092\u6307\u5b9a\u3057\u3066\u3001\u5148\u307b\u3069\u78ba\u8a8d\u3092\u3057\u305f",(0,o.kt)("inlineCode",{parentName:"p"},"kuroco-vaddy.com")," \u306e\u30c9\u30e1\u30a4\u30f3\u306eURL\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/c7babf808f993748b59b9a669e28a997.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/c7babf808f993748b59b9a669e28a997.png",alt:"Image (fetched from Gyazo)"}),"\n\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304c\u8ffd\u52a0\u3067\u304d\u305f\u3089\u3001\u8868\u793a\u3055\u308c\u305f","[\u30d7\u30ed\u30b8\u30a7\u30af\u30c8ID]","\u3068","[Project number]","\u3092\u30e1\u30e2\u3057\u3066\u304a\u304d\u307e\u3059\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","Project number\u306fURL\u672b\u5c3e\u306e\u6570\u5b57\u306b\u306a\u308a\u307e\u3059\u3002",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/5ddd89a0c27bc4eecca520349cf52a63.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/5ddd89a0c27bc4eecca520349cf52a63.png",alt:"Image (fetched from Gyazo)"})),(0,o.kt)("h2",{id:"3-\u30b5\u30fc\u30d0\u30fc\u6240\u6709\u8005\u78ba\u8a8d\u3092\u5b9f\u65bd\u3059\u308b"},"3. \u30b5\u30fc\u30d0\u30fc\u6240\u6709\u8005\u78ba\u8a8d\u3092\u5b9f\u65bd\u3059\u308b"),(0,o.kt)("p",null,"\u8a8d\u8a3c\u30d5\u30a1\u30a4\u30eb\u306e\u30d5\u30a1\u30a4\u30eb\u540d\u3092Kuroco\u7ba1\u7406\u753b\u9762\u306b\u5165\u529b\u3059\u308b\u3053\u3068\u3067\u6240\u6709\u8005\u78ba\u8a8d\u306e\u305f\u3081\u306e\u8a8d\u8a3c\u30d5\u30a1\u30a4\u30eb\u8a2d\u7f6e\u304c\u3067\u304d\u307e\u3059\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u307e\u305a\u306fVAddy\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30da\u30fc\u30b8\u3067\u8a8d\u8a3c\u30d5\u30a1\u30a4\u30eb\u306e\u30d5\u30a1\u30a4\u30eb\u540d\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/cb83a4b0f9e84bf3e3da33b05e5bf195.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/cb83a4b0f9e84bf3e3da33b05e5bf195.png",alt:"Image (fetched from Gyazo)"}),"\n\u6b21\u306bKuroco\u306e\u7ba1\u7406\u753b\u9762\u3067",(0,o.kt)("inlineCode",{parentName:"p"},"vaddy-"),"\u304b\u3089",(0,o.kt)("inlineCode",{parentName:"p"},".html"),"\u307e\u3067\u306e\u8a8d\u8a3c\u30d5\u30a1\u30a4\u30eb\u306e\u30d5\u30a1\u30a4\u30eb\u540d\u3092\u5165\u529b\u3057\u3001","[\u66f4\u65b0\u3059\u308b]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/3597246362c9ea0e3a9e016a51582477.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/3597246362c9ea0e3a9e016a51582477.png",alt:"Image from Gyazo"})),(0,o.kt)("p",null,"Kuroco\u7ba1\u7406\u753b\u9762\u3067\u8a8d\u8a3c\u30d5\u30a1\u30a4\u30eb\u306e\u9805\u76ee\u3092\u5165\u529b\u3057\u305f\u3089VAddy\u5074\u306e\u6240\u6709\u8005\u78ba\u8a8d\u306b\u623b\u308a\u3001","[\u8a8d\u8a3c\u30d5\u30a1\u30a4\u30eb\u306e\u8a2d\u7f6e\u3092\u78ba\u8a8d\u3059\u308b]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002  "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/9f0850c70bb92eb486a5b2fa2696f13a.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/9f0850c70bb92eb486a5b2fa2696f13a.png",alt:"Image (fetched from Gyazo)"})),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u30e6\u30fc\u30b6\u30fc\u304b\u3089\u8a8d\u8a3c\u6587\u5b57\u5217\u78ba\u8a8d\u7528\u306eURL\u306b\u30a2\u30af\u30bb\u30b9\u3057\u305f\u5834\u5408\u306f403\u30a8\u30e9\u30fc\u306b\u306a\u308a\u307e\u3059\u304c\u3001VAddy\u5074\u304b\u3089\u306f\u78ba\u8a8d\u304c\u3067\u304d\u3001\u8a8d\u8a3c\u304c\u901a\u308a\u307e\u3059\u3002  ")),(0,o.kt)("h2",{id:"4-api-auth-key-vaddy_token\u3092\u53d6\u5f97\u3059\u308b"},"4. API Auth Key (VADDY_TOKEN)\u3092\u53d6\u5f97\u3059\u308b"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://console.vaddy.net/user/webapi"},"VAddy\u306eWebAPI\u306e\u753b\u9762"),"\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3001","[Create WebAPI Key]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002\n",(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/6b2109733ea3bcfc87bcf78331fe90cc.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/6b2109733ea3bcfc87bcf78331fe90cc.png",alt:"Image (fetched from Gyazo)"}),"\n\u8868\u793a\u3055\u308c\u305f","[User ID (VADDY_USER)]","\u3068","[API Auth Key (VADDY_TOKEN)]","\u3092\u30e1\u30e2\u3057\u3066\u304a\u304d\u307e\u3059\u3002",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/5287c22736c12e6af0eb69c64683cd20.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/5287c22736c12e6af0eb69c64683cd20.png",alt:"Image (fetched from Gyazo)"}),"\n\u4ee5\u4e0a\u3067VAddy\u5074\u3067\u306e\u4f5c\u696d\u306f\u5b8c\u4e86\u3067\u3059\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","Kuroco\u3067\u306e\u81ea\u52d5\u7684\u306a\u8106\u5f31\u6027\u8a3a\u65ad\u306fKuroco\u306e\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u30b7\u30b9\u30c6\u30e0\u5074\u3067\u81ea\u52d5\u7684\u306b\u767b\u9332\u3059\u308b\u306e\u3067\u3001",(0,o.kt)("a",{parentName:"p",href:"https://support.vaddy.net/hc/ja/articles/115005935107--STEP-2-%E3%82%AF%E3%83%AD%E3%83%BC%E3%83%AB%E3%81%AE%E8%A8%AD%E5%AE%9A%E3%81%A8%E5%AE%9F%E8%A1%8C"},"\u300c\u3010STEP 2\u3011\u30af\u30ed\u30fc\u30eb\u306e\u8a2d\u5b9a\u3068\u5b9f\u884c\u300d"),"\u306f\u5b9f\u65bd\u4e0d\u8981\u3067\u3059\u3002  "),(0,o.kt)("h2",{id:"5-kuroco\u306e\u8a2d\u5b9a\u3092\u3059\u308b"},"5. Kuroco\u306e\u8a2d\u5b9a\u3092\u3059\u308b\u3002"),(0,o.kt)("p",null,"\u6b21\u306bKuroco\u5074\u306e\u8a2d\u5b9a\u3092\u3057\u307e\u3059\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","Kuroco\u7ba1\u7406\u753b\u9762\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3001","[\u5916\u90e8\u30b7\u30b9\u30c6\u30e0\u9023\u643a]"," -> ","[VAddy]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002\n",(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/18d2347f905e24b249c63e09c9f8bd43.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/18d2347f905e24b249c63e09c9f8bd43.png",alt:"Image (fetched from Gyazo)"}),"\n\u300c2. VAddy\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u8ffd\u52a0\u3059\u308b\u300d\u300c4. API Auth Key (VADDY_TOKEN)\u3092\u53d6\u5f97\u3059\u308b\u300d\u3067\u30e1\u30e2\u3057\u305f\u4e0b\u8a18\u306e\u60c5\u5831\u3092\u5165\u529b\u3057\u3001","[\u66f4\u65b0\u3059\u308b]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"User ID (VADDY_USER)"),(0,o.kt)("li",{parentName:"ul"},"API Auth Key (VADDY_TOKEN)"),(0,o.kt)("li",{parentName:"ul"},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8ID"),(0,o.kt)("li",{parentName:"ul"},"Project number")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/d1576073c76e57c26c703a191332d6a9.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/d1576073c76e57c26c703a191332d6a9.png",alt:"Image from Gyazo"})),(0,o.kt)("p",null,"\u4ee5\u4e0a\u3067Kuroco\u3068VAddy\u306e\u9023\u643a\u306f\u5b8c\u4e86\u3067\u3059\u3002\n\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u3067\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u5168\u3066\u306eAPI\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306b\u5bfe\u3059\u308b\u8106\u5f31\u6027\u8a3a\u65ad\u306e\u81ea\u52d5\u7684\u306a\u5b9a\u671f\u5b9f\u884c\u304c\u3055\u308c\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u8106\u5f31\u6027\u8a3a\u65ad\u306f\u65e5\u6b21\u3067\u3001\u5348\u524d3\u6642\u9803\u306b\u5b9f\u65bd\u3055\u308c\u307e\u3059\u3002  "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/d3673d45d08fb49559c68e47d512b066.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/d3673d45d08fb49559c68e47d512b066.png",alt:"Image from Gyazo"})))}l.isMDXComponent=!0}}]);