"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[61960],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),f=r,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||i;return n?a.createElement(d,o(o({ref:t},p),{},{components:n})):a.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},13433:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294);function r(e){let{faqs:t=[]}=e;if(0===(Array.isArray(t)?t.filter((e=>e.question&&e.answer)):[]).length)return null;const n={"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))},r=JSON.stringify(n,null,2);return a.createElement("script",{type:"application/ld+json"},r)}},85924:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),i=n(13433);const o={title:"\u9805\u76ee\u306e\u9078\u629e\u80a2\u306b\u3088\u3063\u3066\u914d\u4fe1\u5148\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u5909\u3048\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u3059\u304b\uff1f",description:"\u30d5\u30a9\u30fc\u30e0\u306e\u9805\u76ee\u8a2d\u5b9a\u4e0b\u90e8\u306b\u3042\u308b\u30ab\u30c6\u30b4\u30ea\u3092\u5229\u7528\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u5404\u30ab\u30c6\u30b4\u30ea\u306b\u5bfe\u3057\u3066\u3001\u9078\u629e\u3055\u308c\u305f\u5834\u5408\u306b\u9001\u4fe1\u3055\u308c\u308b\u914d\u4fe1\u5148\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u6539\u884c\u533a\u5207\u308a\u3067\u5165\u529b\u3057\u307e\u3059\u3002",category:"howto"},c=void 0,l={unversionedId:"faq/how-can-i-change-the-destination-of-the-email-recipients-depending-on-the-item-choices",id:"faq/how-can-i-change-the-destination-of-the-email-recipients-depending-on-the-item-choices",title:"\u9805\u76ee\u306e\u9078\u629e\u80a2\u306b\u3088\u3063\u3066\u914d\u4fe1\u5148\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u5909\u3048\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u3059\u304b\uff1f",description:"\u30d5\u30a9\u30fc\u30e0\u306e\u9805\u76ee\u8a2d\u5b9a\u4e0b\u90e8\u306b\u3042\u308b\u30ab\u30c6\u30b4\u30ea\u3092\u5229\u7528\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u5404\u30ab\u30c6\u30b4\u30ea\u306b\u5bfe\u3057\u3066\u3001\u9078\u629e\u3055\u308c\u305f\u5834\u5408\u306b\u9001\u4fe1\u3055\u308c\u308b\u914d\u4fe1\u5148\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u6539\u884c\u533a\u5207\u308a\u3067\u5165\u529b\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/faq/how-can-i-change-the-destination-of-the-email-recipients-depending-on-the-item-choices.mdx",sourceDirName:"faq",slug:"/faq/how-can-i-change-the-destination-of-the-email-recipients-depending-on-the-item-choices",permalink:"/ja/docs/faq/how-can-i-change-the-destination-of-the-email-recipients-depending-on-the-item-choices",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/how-can-i-change-the-destination-of-the-email-recipients-depending-on-the-item-choices.mdx",tags:[],version:"current",frontMatter:{title:"\u9805\u76ee\u306e\u9078\u629e\u80a2\u306b\u3088\u3063\u3066\u914d\u4fe1\u5148\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u5909\u3048\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u3059\u304b\uff1f",description:"\u30d5\u30a9\u30fc\u30e0\u306e\u9805\u76ee\u8a2d\u5b9a\u4e0b\u90e8\u306b\u3042\u308b\u30ab\u30c6\u30b4\u30ea\u3092\u5229\u7528\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u5404\u30ab\u30c6\u30b4\u30ea\u306b\u5bfe\u3057\u3066\u3001\u9078\u629e\u3055\u308c\u305f\u5834\u5408\u306b\u9001\u4fe1\u3055\u308c\u308b\u914d\u4fe1\u5148\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u6539\u884c\u533a\u5207\u308a\u3067\u5165\u529b\u3057\u307e\u3059\u3002",category:"howto"},sidebar:"faqSidebar",previous:{title:"\u30d5\u30a9\u30fc\u30e0\u6bce\u306b\u7ba1\u7406\u8005\u5b9b\u901a\u77e5\u30e1\u30fc\u30eb\u306e\u5185\u5bb9\u3092\u5909\u3048\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u3059\u304b\uff1f",permalink:"/ja/docs/faq/how-can-i-change-the-content-of-the-notification-e-mail-for-each-form"},next:{title:"\u30b3\u30f3\u30c6\u30f3\u30c4\u66f4\u65b0\u4ee5\u5916\u306e\u4efb\u610f\u306e\u30bf\u30a4\u30df\u30f3\u30b0\u3067GitHubActions\u3092\u4f7f\u3063\u305fdeploy\u3092\u884c\u3046\u306b\u306f\uff1f",permalink:"/ja/docs/faq/how-can-i-deploy-with-githubactions-at-any-time"}},s={},p=[{value:"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8",id:"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8",level:2}],u={toc:p},m="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{faqs:[{question:"\u9805\u76ee\u306e\u9078\u629e\u80a2\u306b\u3088\u3063\u3066\u914d\u4fe1\u5148\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u5909\u3048\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u3059\u304b\uff1f",answer:"\u30d5\u30a9\u30fc\u30e0\u306e\u9805\u76ee\u8a2d\u5b9a\u4e0b\u90e8\u306b\u3042\u308b\u30ab\u30c6\u30b4\u30ea\u3092\u5229\u7528\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u5404\u30ab\u30c6\u30b4\u30ea\u306b\u5bfe\u3057\u3066\u3001\u9078\u629e\u3055\u308c\u305f\u5834\u5408\u306b\u9001\u4fe1\u3055\u308c\u308b\u914d\u4fe1\u5148\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u6539\u884c\u533a\u5207\u308a\u3067\u5165\u529b\u3057\u307e\u3059\u3002"}],mdxType:"StructuredDataFaqs"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/ja/docs/management/form-field-settings/#%E3%82%AB%E3%83%86%E3%82%B4%E3%83%AA%E7%B7%A8%E9%9B%86"},"\u30d5\u30a9\u30fc\u30e0\u306e\u9805\u76ee\u8a2d\u5b9a"),"\u4e0b\u90e8\u306b\u3042\u308b\u30ab\u30c6\u30b4\u30ea\u3092\u5229\u7528\u3057\u3066\u304f\u3060\u3055\u3044\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u5404\u30ab\u30c6\u30b4\u30ea\u306b\u5bfe\u3057\u3066\u3001\u9078\u629e\u3055\u308c\u305f\u5834\u5408\u306b\u9001\u4fe1\u3055\u308c\u308b\u914d\u4fe1\u5148\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u6539\u884c\u533a\u5207\u308a\u3067\u5165\u529b\u3057\u307e\u3059\u3002"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"/ja/docs/management/inquiry-basic-settings/"},"\u57fa\u672c\u8a2d\u5b9a"),"\u306b\u5165\u529b\u3057\u305f\u914d\u4fe1\u5148\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u5b9b\u306b\u306f\u3001\u30ab\u30c6\u30b4\u30ea\u306e\u9078\u629e\u306b\u95a2\u308f\u3089\u305a\u901a\u77e5\u30e1\u30fc\u30eb\u304c\u5c4a\u304d\u307e\u3059\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/ca97484e817a8f110f7031fba9296c91.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/ca97484e817a8f110f7031fba9296c91.png",alt:"Image from Gyazo"})),(0,r.kt)("h2",{id:"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"},"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ja/docs/faq/how-do-i-include-inquiry-details-in-the-thankyou-email/"},"\u554f\u3044\u5408\u308f\u305b\u306e\u304a\u793c\u30e1\u30fc\u30eb\u306b\u3001\u304a\u5ba2\u69d8\u304c\u5165\u529b\u3057\u305f\u5185\u5bb9\u3092\u8ee2\u8f09\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u3059\u304b\uff1f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ja/docs/faq/how-do-i-include-user-details-in-the-thankyou-email/"},"\u554f\u3044\u5408\u308f\u305b\u306e\u304a\u793c\u30e1\u30fc\u30eb\u306b\u3001\u30ed\u30b0\u30a4\u30f3\u30e6\u30fc\u30b6\u30fc\u306e\u60c5\u5831\u3092\u8ee2\u8f09\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u3059\u304b\uff1f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ja/docs/faq/how-do-i-include-content-details-in-the-thankyou-email/"},"\u554f\u3044\u5408\u308f\u305b\u306e\u304a\u793c\u30e1\u30fc\u30eb\u306b\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u60c5\u5831\u3092\u7d10\u3065\u3051\u3067\u304d\u307e\u3059\u304b\uff1f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ja/docs/reference/mail-variables/#inquiryinquiry_contact_simple/"},"\u30e1\u30c3\u30bb\u30fc\u30b8\u3072\u306a\u5f62\u306b\u5229\u7528\u3067\u304d\u308b\u5909\u6570\u4e00\u89a7")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ja/docs/faq/can-i-customize-my-thank-you-e-mail/"},"\u304a\u793c\u30e1\u30fc\u30eb\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3067\u304d\u307e\u3059\u304b\uff1f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ja/docs/faq/how-do-i-display-inquiry-numbers-in-thankyou-emails-and-notifications/"},"\u304a\u793c\u30e1\u30fc\u30eb\u3084\u901a\u77e5\u30e1\u30fc\u30eb\u306b\u554f\u3044\u5408\u308f\u305bNo\u3092\u8868\u793a\u3055\u305b\u305f\u3044\u306e\u3067\u3059\u304c\u3067\u304d\u307e\u3059\u304b\uff1f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ja/docs/faq/how-can-i-change-the-content-of-the-notification-e-mail-for-each-form/"},"\u30d5\u30a9\u30fc\u30e0\u6bce\u306b\u7ba1\u7406\u8005\u5b9b\u901a\u77e5\u30e1\u30fc\u30eb\u306e\u5185\u5bb9\u3092\u5909\u3048\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u3059\u304b\uff1f"))))}f.isMDXComponent=!0}}]);