"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[25567],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,f=u["".concat(p,".").concat(m)]||u[m]||l[m]||o;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},13433:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294);function a(e){let{faqs:t=[]}=e;if(0===(Array.isArray(t)?t.filter((e=>e.question&&e.answer)):[]).length)return null;const r={"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))},a=JSON.stringify(r,null,2);return n.createElement("script",{type:"application/ld+json"},a)}},86674:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var n=r(87462),a=(r(67294),r(3905)),o=r(13433);const i={title:"\u30d5\u30a9\u30fc\u30e0\u306e\u304a\u793c\u30e1\u30fc\u30eb\u304c\u5c4a\u304b\u306a\u3044\u3068\u304d\u306e\u78ba\u8a8d\u7b87\u6240\u3092\u6559\u3048\u3066\u304f\u3060\u3055\u3044",description:"\u30d5\u30a9\u30fc\u30e0\u306e\u57fa\u672c\u8a2d\u5b9a\u306e\u300c\u304a\u793c\u30e1\u30fc\u30eb\u9001\u4fe1\u300d\u3067\u300c\u9001\u4fe1\u3059\u308b\u300d\u3092\u9078\u629e\u3057\u3066\u3044\u308b\u306b\u3082\u95a2\u308f\u3089\u305a\u3001\u304a\u793c\u30e1\u30fc\u30eb\u304c\u5c4a\u304b\u306a\u3044\u5834\u5408\u78ba\u8a8d\u65b9\u6cd5\u3092\u8a18\u8f09\u3057\u307e\u3059\u3002",category:"trouble"},c=void 0,p={unversionedId:"faq/i-did-not-receive-a-thankyou-email-what-do-i-do",id:"faq/i-did-not-receive-a-thankyou-email-what-do-i-do",title:"\u30d5\u30a9\u30fc\u30e0\u306e\u304a\u793c\u30e1\u30fc\u30eb\u304c\u5c4a\u304b\u306a\u3044\u3068\u304d\u306e\u78ba\u8a8d\u7b87\u6240\u3092\u6559\u3048\u3066\u304f\u3060\u3055\u3044",description:"\u30d5\u30a9\u30fc\u30e0\u306e\u57fa\u672c\u8a2d\u5b9a\u306e\u300c\u304a\u793c\u30e1\u30fc\u30eb\u9001\u4fe1\u300d\u3067\u300c\u9001\u4fe1\u3059\u308b\u300d\u3092\u9078\u629e\u3057\u3066\u3044\u308b\u306b\u3082\u95a2\u308f\u3089\u305a\u3001\u304a\u793c\u30e1\u30fc\u30eb\u304c\u5c4a\u304b\u306a\u3044\u5834\u5408\u78ba\u8a8d\u65b9\u6cd5\u3092\u8a18\u8f09\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/faq/i-did-not-receive-a-thankyou-email-what-do-i-do.mdx",sourceDirName:"faq",slug:"/faq/i-did-not-receive-a-thankyou-email-what-do-i-do",permalink:"/ja/docs/faq/i-did-not-receive-a-thankyou-email-what-do-i-do",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/i-did-not-receive-a-thankyou-email-what-do-i-do.mdx",tags:[],version:"current",frontMatter:{title:"\u30d5\u30a9\u30fc\u30e0\u306e\u304a\u793c\u30e1\u30fc\u30eb\u304c\u5c4a\u304b\u306a\u3044\u3068\u304d\u306e\u78ba\u8a8d\u7b87\u6240\u3092\u6559\u3048\u3066\u304f\u3060\u3055\u3044",description:"\u30d5\u30a9\u30fc\u30e0\u306e\u57fa\u672c\u8a2d\u5b9a\u306e\u300c\u304a\u793c\u30e1\u30fc\u30eb\u9001\u4fe1\u300d\u3067\u300c\u9001\u4fe1\u3059\u308b\u300d\u3092\u9078\u629e\u3057\u3066\u3044\u308b\u306b\u3082\u95a2\u308f\u3089\u305a\u3001\u304a\u793c\u30e1\u30fc\u30eb\u304c\u5c4a\u304b\u306a\u3044\u5834\u5408\u78ba\u8a8d\u65b9\u6cd5\u3092\u8a18\u8f09\u3057\u307e\u3059\u3002",category:"trouble"},sidebar:"faqSidebar",previous:{title:"CORS\u8a2d\u5b9a\u306e\u5909\u66f4\u304c\u53cd\u6620\u3055\u308c\u307e\u305b\u3093\u3002",permalink:"/ja/docs/faq/i-changed-cors-but-it-is-not-reflected"},next:{title:"GitHub\u30ea\u30dd\u30b8\u30c8\u30ea\u306bpush\u3057\u305f\u969b\u306b\u30a8\u30e9\u30fc\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002\u30a8\u30e9\u30fc\u89e3\u6c7a\u65b9\u6cd5\u3092\u6559\u3048\u3066\u304f\u3060\u3055\u3044\u3002",permalink:"/ja/docs/faq/i-get-an-error-message-when-i-push-to-the-github-repository"}},s={},d=[{value:"\u89e3\u6c7a\u3067\u304d\u306a\u304b\u3063\u305f\u3068\u304d\u306f",id:"\u89e3\u6c7a\u3067\u304d\u306a\u304b\u3063\u305f\u3068\u304d\u306f",level:2}],u={toc:d},l="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(l,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{faqs:[{question:"\u30d5\u30a9\u30fc\u30e0\u306e\u304a\u793c\u30e1\u30fc\u30eb\u304c\u5c4a\u304b\u306a\u3044\u3068\u304d\u306e\u78ba\u8a8d\u7b87\u6240\u3092\u6559\u3048\u3066\u304f\u3060\u3055\u3044",answer:"\u30d5\u30a9\u30fc\u30e0\u306e\u57fa\u672c\u8a2d\u5b9a\u306e\u300c\u304a\u793c\u30e1\u30fc\u30eb\u9001\u4fe1\u300d\u3067\u300c\u9001\u4fe1\u3059\u308b\u300d\u3092\u9078\u629e\u3057\u3066\u3044\u308b\u306b\u3082\u95a2\u308f\u3089\u305a\u3001\u304a\u793c\u30e1\u30fc\u30eb\u304c\u5c4a\u304b\u306a\u3044\u5834\u5408\u78ba\u8a8d\u65b9\u6cd5\u3092\u8a18\u8f09\u3057\u307e\u3059\u3002"}],mdxType:"StructuredDataFaqs"}),(0,a.kt)("p",null,"\u30d5\u30a9\u30fc\u30e0\u306e\u57fa\u672c\u8a2d\u5b9a\u306e\u300c\u304a\u793c\u30e1\u30fc\u30eb\u9001\u4fe1\u300d\u3067\u300c\u9001\u4fe1\u3059\u308b\u300d\u3092\u9078\u629e\u3057\u3066\u3044\u308b\u306b\u3082\u95a2\u308f\u3089\u305a\u3001\u304a\u793c\u30e1\u30fc\u30eb\u304c\u5c4a\u304b\u306a\u3044\u5834\u5408\u306f\u4e0b\u8a18\uff13\u70b9\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8ff7\u60d1\u30e1\u30fc\u30eb\u30d5\u30a9\u30eb\u30c0\u306b\u632f\u308a\u5206\u3051\u3089\u308c\u3066\u3044\u307e\u305b\u3093\u304b\uff1f"),(0,a.kt)("br",{parentName:"p"}),"\n","\u304a\u793c\u30e1\u30fc\u30eb\u304c\u8ff7\u60d1\u30e1\u30fc\u30eb\u30d5\u30a9\u30eb\u30c0\u3084\u30b4\u30df\u7bb1\u306b\u81ea\u52d5\u7684\u306b\u632f\u308a\u5206\u3051\u3089\u308c\u3066\u3044\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u306e\u3067\u3001\u4e00\u5ea6\u3054\u78ba\u8a8d\u9802\u304d\u307e\u3059\u3088\u3046\u304a\u9858\u3044\u81f4\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/ja/docs/management/inquiry-basic-settings"},"[\u30d5\u30a9\u30fc\u30e0\u306e\u57fa\u672c\u8a2d\u5b9a]->[\u304a\u793c\u9001\u4fe1\u30e1\u30fc\u30eb]"),"\u306e\u300c\u9001\u4fe1\u3059\u308b\u300d\u306b\u30c1\u30a7\u30c3\u30af\u306f\u5165\u3063\u3066\u3044\u307e\u3059\u304b\uff1f"),(0,a.kt)("br",{parentName:"p"}),"\n","\u300c\u9001\u4fe1\u3059\u308b\u300d\u306b\u30c1\u30a7\u30c3\u30af\u304c\u5165\u3063\u3066\u3044\u308b\u5834\u5408\u306e\u307f\u30e1\u30fc\u30eb\u304c\u9001\u4fe1\u3055\u308c\u307e\u3059\u3002",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/242b17f9361611180d41787093bd7f39.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/242b17f9361611180d41787093bd7f39.png",alt:"Image (fetched from Gyazo)"}),"\n",(0,a.kt)("strong",{parentName:"p"},"\u30d5\u30a9\u30fc\u30e0\u306e\u9805\u76ee\u8a2d\u5b9a\u3067\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u9805\u76ee\u306b\u3042\u308b\u300cemail\u300d\u3092\u5229\u7528\u3057\u3066\u3044\u307e\u3059\u304b\uff1f"),(0,a.kt)("br",{parentName:"p"}),"\n","\u304a\u793c\u30e1\u30fc\u30eb\u306f\u300cemail\u300d\u306e\u9805\u76ee\u3067\u5165\u529b\u3055\u308c\u305f\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u5b9b\u306b\u914d\u4fe1\u3055\u308c\u307e\u3059\u3002\n",(0,a.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/90d3c7c2d0bbb87e40377584e1d0dd23.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/90d3c7c2d0bbb87e40377584e1d0dd23.png",alt:"Image (fetched from Gyazo)"})),(0,a.kt)("h2",{id:"\u89e3\u6c7a\u3067\u304d\u306a\u304b\u3063\u305f\u3068\u304d\u306f"},"\u89e3\u6c7a\u3067\u304d\u306a\u304b\u3063\u305f\u3068\u304d\u306f"),(0,a.kt)("p",null,"\u4e0a\u8a183\u70b9\u306e\u78ba\u8a8d\u3067\u306f\u89e3\u6c7a\u3067\u304d\u305a\u3001\u30e1\u30fc\u30eb\u9001\u4fe1\u306b\u3064\u3044\u3066\u306e\u8abf\u67fb\u3092\u3054\u5e0c\u671b\u306e\u969b\u306b\u306f\u3001\u4ee5\u4e0b\u306eFAQ\u3092\u53c2\u8003\u306e\u3046\u3048",(0,a.kt)("a",{parentName:"p",href:"https://kuroco.zendesk.com/hc/ja"},"\u30b5\u30dd\u30fc\u30c8\u4e8b\u52d9\u5c40"),"\u307e\u3067\u304a\u554f\u3044\u5408\u308f\u305b\u304f\u3060\u3055\u3044\u3002    "),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"/ja/docs/faq/how-do-i-fix-email-delivery-failure/"},"\u30e1\u30fc\u30eb\u306e\u9001\u4fe1\u306b\u95a2\u3057\u3066\u306e\u8abf\u67fb"))))}m.isMDXComponent=!0}}]);