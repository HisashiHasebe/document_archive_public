"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[93389],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,d=u["".concat(c,".").concat(m)]||u[m]||g[m]||o;return r?a.createElement(d,p(p({ref:t},l),{},{components:r})):a.createElement(d,p({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:n,p[1]=i;for(var s=2;s<o;s++)p[s]=r[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},13433:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(67294);function n(e){let{faqs:t=[]}=e;if(0===(Array.isArray(t)?t.filter((e=>e.question&&e.answer)):[]).length)return null;const r={"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))},n=JSON.stringify(r,null,2);return a.createElement("script",{type:"application/ld+json"},n)}},78698:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>p,metadata:()=>c,toc:()=>l});var a=r(87462),n=(r(67294),r(3905)),o=r(13433);const p={title:"\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u3067\u30c7\u30d0\u30c3\u30b0\u3092\u76ee\u7684\u3068\u3057\u305f\u30ed\u30b0\u3092\u51fa\u529b\u3067\u304d\u307e\u3059\u304b\uff1f",description:"\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u306e\u6c17\u306b\u306a\u308b\u7b87\u6240\u3067\u4e0b\u8a18\u306e\u3088\u3046\u306a\u8a18\u8ff0\u3092\u8ffd\u52a0\u3059\u308b\u3068\u3001\u5909\u6570\u306e\u4e2d\u8eab\u3092\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002",category:"trouble"},i=void 0,c={unversionedId:"faq/can-the-original-process-output-logs-for-debugging-purposes",id:"faq/can-the-original-process-output-logs-for-debugging-purposes",title:"\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u3067\u30c7\u30d0\u30c3\u30b0\u3092\u76ee\u7684\u3068\u3057\u305f\u30ed\u30b0\u3092\u51fa\u529b\u3067\u304d\u307e\u3059\u304b\uff1f",description:"\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u306e\u6c17\u306b\u306a\u308b\u7b87\u6240\u3067\u4e0b\u8a18\u306e\u3088\u3046\u306a\u8a18\u8ff0\u3092\u8ffd\u52a0\u3059\u308b\u3068\u3001\u5909\u6570\u306e\u4e2d\u8eab\u3092\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/faq/can-the-original-process-output-logs-for-debugging-purposes.mdx",sourceDirName:"faq",slug:"/faq/can-the-original-process-output-logs-for-debugging-purposes",permalink:"/ja/docs/faq/can-the-original-process-output-logs-for-debugging-purposes",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/can-the-original-process-output-logs-for-debugging-purposes.mdx",tags:[],version:"current",frontMatter:{title:"\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u3067\u30c7\u30d0\u30c3\u30b0\u3092\u76ee\u7684\u3068\u3057\u305f\u30ed\u30b0\u3092\u51fa\u529b\u3067\u304d\u307e\u3059\u304b\uff1f",description:"\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u306e\u6c17\u306b\u306a\u308b\u7b87\u6240\u3067\u4e0b\u8a18\u306e\u3088\u3046\u306a\u8a18\u8ff0\u3092\u8ffd\u52a0\u3059\u308b\u3068\u3001\u5909\u6570\u306e\u4e2d\u8eab\u3092\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002",category:"trouble"},sidebar:"faqSidebar",previous:{title:"front_nuxt_auth\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u5229\u7528\u3057\u305f\u3044\u306e\u3067\u3059\u304c\u3001\u53c2\u8003\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306f\u3042\u308a\u307e\u3059\u304b\uff1f",permalink:"/ja/docs/faq/can-i-verify-the-front-nuxt-auth-template"},next:{title:"\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30c1\u30a7\u30c3\u30af\u30b7\u30fc\u30c8\u3078\u306e\u8a18\u5165\u3092\u304a\u9858\u3044\u3067\u304d\u307e\u3059\u304b\uff1f",permalink:"/ja/docs/faq/can-you-audit-my-security-checklist"}},s={},l=[{value:"logger\u306e\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u5229\u7528\u3059\u308b",id:"logger\u306e\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u5229\u7528\u3059\u308b",level:2},{value:"\u8a18\u8ff0\u4f8b",id:"\u8a18\u8ff0\u4f8b",level:3},{value:"\u30ed\u30b0\u306e\u78ba\u8a8d\u65b9\u6cd5",id:"\u30ed\u30b0\u306e\u78ba\u8a8d\u65b9\u6cd5",level:3},{value:"<code>@debug_print_var</code> \u3092\u5229\u7528\u3059\u308b",id:"debug_print_var-\u3092\u5229\u7528\u3059\u308b",level:2},{value:"\u8a18\u8ff0\u4f8b",id:"\u8a18\u8ff0\u4f8b-1",level:3},{value:"\u30ed\u30b0\u306e\u78ba\u8a8d\u65b9\u6cd5",id:"\u30ed\u30b0\u306e\u78ba\u8a8d\u65b9\u6cd5-1",level:3}],u={toc:l},g="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(g,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{faqs:[{question:"\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u3067\u30c7\u30d0\u30c3\u30b0\u3092\u76ee\u7684\u3068\u3057\u305f\u30ed\u30b0\u3092\u51fa\u529b\u3067\u304d\u307e\u3059\u304b\uff1f",answer:"\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u306e\u6c17\u306b\u306a\u308b\u7b87\u6240\u3067\u4e0b\u8a18\u306e\u3088\u3046\u306a\u8a18\u8ff0\u3092\u8ffd\u52a0\u3059\u308b\u3068\u3001\u5909\u6570\u306e\u4e2d\u8eab\u3092\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"}],mdxType:"StructuredDataFaqs"}),(0,n.kt)("p",null,"\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u306e\u6c17\u306b\u306a\u308b\u7b87\u6240\u3067\u4e0b\u8a18\u306e\u3088\u3046\u306a\u8a18\u8ff0\u3092\u8ffd\u52a0\u3059\u308b\u3068\u3001\u5909\u6570\u306e\u4e2d\u8eab\u3092\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002  "),(0,n.kt)("h2",{id:"logger\u306e\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u5229\u7528\u3059\u308b"},"logger\u306e\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u5229\u7528\u3059\u308b"),(0,n.kt)("p",null,"\u3053\u3061\u3089\u306e\u30ed\u30b0\u306f",(0,n.kt)("a",{parentName:"p",href:"/ja/docs/management/custom-log-list/"},"\u30ab\u30b9\u30bf\u30e0\u30ed\u30b0"),"\u3067\u78ba\u8a8d\u304c\u3067\u304d\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u5b9f\u884c\u3057\u305f\u7d50\u679c\u3092\u30ed\u30b0\u306b\u6b8b\u3057\u305f\u3044\u5834\u5408\u306f\u3053\u3061\u3089\u3092\u3054\u5229\u7528\u304f\u3060\u3055\u3044\u3002  "),(0,n.kt)("h3",{id:"\u8a18\u8ff0\u4f8b"},"\u8a18\u8ff0\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-smarty"},"{logger msg1=$json msg2=$output msg3=$smarty.requrst msg4=$example}\n")),(0,n.kt)("h3",{id:"\u30ed\u30b0\u306e\u78ba\u8a8d\u65b9\u6cd5"},"\u30ed\u30b0\u306e\u78ba\u8a8d\u65b9\u6cd5"),(0,n.kt)("p",null,"[\u30ed\u30b0\u7ba1\u7406]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/6ebf4c8775159cbff04a6d18469039f2.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/6ebf4c8775159cbff04a6d18469039f2.png",alt:"Image from Gyazo"}),"\n","[\u30ed\u30b0\u7ba1\u7406]","\u306e\u30d7\u30eb\u30c0\u30a6\u30f3\u30e1\u30cb\u30e5\u30fc\u304b\u3089","[\u30ab\u30b9\u30bf\u30e0\u30ed\u30b0]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/80b9cab6214d79eea9009f07a24c47b5.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/80b9cab6214d79eea9009f07a24c47b5.png",alt:"Image from Gyazo"}),"\n\u30ed\u30b0\u306e\u5185\u5bb9\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/4ca6ec4b619fe133273157dcd0d2fe36.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/4ca6ec4b619fe133273157dcd0d2fe36.png",alt:"Image from Gyazo"})),(0,n.kt)("h2",{id:"debug_print_var-\u3092\u5229\u7528\u3059\u308b"},(0,n.kt)("inlineCode",{parentName:"h2"},"@debug_print_var")," \u3092\u5229\u7528\u3059\u308b"),(0,n.kt)("p",null,"logger\u306e\u30d7\u30e9\u30b0\u30a4\u30f3\u306f\u30c7\u30fc\u30bf\u304c\u5927\u304d\u3044\u3068\u3001\u30ed\u30b0\u306b\u6b8b\u305b\u306a\u3044\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u5927\u304d\u3044\u30c7\u30fc\u30bf\u3092\u6271\u3046\u5834\u5408\u3084\u3001\u6a5f\u80fd\u306e\u5b9f\u88c5\u4e2d\u306b\u305d\u306e\u5834\u3067\u30c7\u30fc\u30bf\u306e\u5185\u5bb9\u3092\u78ba\u8a8d\u3059\u308b\u5834\u5408\u306f\u3053\u3061\u3089\u3092\u3054\u5229\u7528\u304f\u3060\u3055\u3044\u3002",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("inlineCode",{parentName:"p"},"@debug_print_var")," \u306e\u51fa\u529b\u7d50\u679c\u306f\u30ed\u30b0\u306b\u6b8b\u308a\u307e\u305b\u3093\u3002"),(0,n.kt)("h3",{id:"\u8a18\u8ff0\u4f8b-1"},"\u8a18\u8ff0\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-smarty"},"test:{$json|@debug_print_var}\n")),(0,n.kt)("h3",{id:"\u30ed\u30b0\u306e\u78ba\u8a8d\u65b9\u6cd5-1"},"\u30ed\u30b0\u306e\u78ba\u8a8d\u65b9\u6cd5"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/ja/docs/management/function/#%E3%82%AB%E3%82%B9%E3%82%BF%E3%83%A0%E5%87%A6%E7%90%86%E7%B7%A8%E9%9B%86"},"\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u7de8\u96c6"),"\u306e\u753b\u9762\u3067","[\u30c6\u30b9\u30c8\u3059\u308b]","\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068","[\u51fa\u529b]","\u306e\u9805\u76ee\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/b28aab012f22f2f018e040f088fadd95.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/b28aab012f22f2f018e040f088fadd95.png",alt:"Image from Gyazo"})))}m.isMDXComponent=!0}}]);