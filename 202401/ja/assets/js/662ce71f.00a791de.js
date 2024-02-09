"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[63228],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>f});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var c=r.createContext({}),m=function(t){var e=r.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=m(t.components);return r.createElement(c.Provider,{value:e},t.children)},s="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),s=m(a),d=n,f=s["".concat(c,".").concat(d)]||s[d]||u[d]||i;return a?r.createElement(f,o(o({ref:e},p),{},{components:a})):r.createElement(f,o({ref:e},p))}));function f(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[s]="string"==typeof t?t:n,o[1]=l;for(var m=2;m<i;m++)o[m]=a[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},13433:(t,e,a)=>{a.d(e,{Z:()=>n});var r=a(67294);function n(t){let{faqs:e=[]}=t;if(0===(Array.isArray(e)?e.filter((t=>t.question&&t.answer)):[]).length)return null;const a={"@context":"https://schema.org","@type":"FAQPage",mainEntity:e.map((t=>({"@type":"Question",name:t.question,acceptedAnswer:{"@type":"Answer",text:t.answer}})))},n=JSON.stringify(a,null,2);return r.createElement("script",{type:"application/ld+json"},n)}},61358:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=a(87462),n=(a(67294),a(3905)),i=a(13433);const o={title:"\u304a\u793c\u30e1\u30fc\u30eb\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3067\u304d\u307e\u3059\u304b\uff1f",description:"\u30d5\u30a9\u30fc\u30e0\u57fa\u672c\u8a2d\u5b9a\u306e\u300c\u304a\u793c\u30e1\u30fc\u30eb\u9001\u4fe1\u300d\u306e\u7b87\u6240\u306b\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u8a18\u8f09\u3092\u3059\u308b\u3053\u3068\u3067\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u51fa\u6765\u307e\u3059\u3002\u307e\u305f\u3001Smarty\u3067\u306e\u8a18\u8ff0\u304c\u51fa\u6765\u308b\u5834\u5408\u306f\u305d\u3061\u3089\u3082\u5229\u7528\u304c\u53ef\u80fd\u3067\u3059\u3002",category:"howto"},l=void 0,c={unversionedId:"faq/can-i-customize-my-thank-you-e-mail",id:"faq/can-i-customize-my-thank-you-e-mail",title:"\u304a\u793c\u30e1\u30fc\u30eb\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3067\u304d\u307e\u3059\u304b\uff1f",description:"\u30d5\u30a9\u30fc\u30e0\u57fa\u672c\u8a2d\u5b9a\u306e\u300c\u304a\u793c\u30e1\u30fc\u30eb\u9001\u4fe1\u300d\u306e\u7b87\u6240\u306b\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u8a18\u8f09\u3092\u3059\u308b\u3053\u3068\u3067\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u51fa\u6765\u307e\u3059\u3002\u307e\u305f\u3001Smarty\u3067\u306e\u8a18\u8ff0\u304c\u51fa\u6765\u308b\u5834\u5408\u306f\u305d\u3061\u3089\u3082\u5229\u7528\u304c\u53ef\u80fd\u3067\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/faq/can-i-customize-my-thank-you-e-mail.mdx",sourceDirName:"faq",slug:"/faq/can-i-customize-my-thank-you-e-mail",permalink:"/ja/docs/faq/can-i-customize-my-thank-you-e-mail",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/can-i-customize-my-thank-you-e-mail.mdx",tags:[],version:"current",frontMatter:{title:"\u304a\u793c\u30e1\u30fc\u30eb\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3067\u304d\u307e\u3059\u304b\uff1f",description:"\u30d5\u30a9\u30fc\u30e0\u57fa\u672c\u8a2d\u5b9a\u306e\u300c\u304a\u793c\u30e1\u30fc\u30eb\u9001\u4fe1\u300d\u306e\u7b87\u6240\u306b\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u8a18\u8f09\u3092\u3059\u308b\u3053\u3068\u3067\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u51fa\u6765\u307e\u3059\u3002\u307e\u305f\u3001Smarty\u3067\u306e\u8a18\u8ff0\u304c\u51fa\u6765\u308b\u5834\u5408\u306f\u305d\u3061\u3089\u3082\u5229\u7528\u304c\u53ef\u80fd\u3067\u3059\u3002",category:"howto"},sidebar:"faqSidebar",previous:{title:"kuroco\u3067XMLsitemap\u306f\u4f5c\u6210\u3067\u304d\u307e\u3059\u304b",permalink:"/ja/docs/faq/can-i-create-xmlsitemap-with-kuroco"},next:{title:"\u30b3\u30f3\u30c6\u30f3\u30c4\u7de8\u96c6\u753b\u9762\u306e\u30c6\u30fc\u30d6\u30eb\u306e\u8868\u793a\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3067\u304d\u307e\u3059\u304b\uff1f",permalink:"/ja/docs/faq/can-i-customize-the-display-of-tables-on-the-conten-editing-screen"}},m={},p=[{value:"\u8a2d\u5b9a\u7b87\u6240",id:"\u8a2d\u5b9a\u7b87\u6240",level:2},{value:"\u8a2d\u5b9a\u53ef\u80fd\u306a\u9805\u76ee",id:"\u8a2d\u5b9a\u53ef\u80fd\u306a\u9805\u76ee",level:2},{value:"\u95a2\u9023FAQ",id:"\u95a2\u9023faq",level:2}],s={toc:p},u="wrapper";function d(t){let{components:e,...a}=t;return(0,n.kt)(u,(0,r.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)(i.Z,{faqs:[{question:"\u304a\u793c\u30e1\u30fc\u30eb\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3067\u304d\u307e\u3059\u304b\uff1f",answer:"\u30d5\u30a9\u30fc\u30e0\u57fa\u672c\u8a2d\u5b9a\u306e\u300c\u304a\u793c\u30e1\u30fc\u30eb\u9001\u4fe1\u300d\u306e\u7b87\u6240\u306b\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u8a18\u8f09\u3092\u3059\u308b\u3053\u3068\u3067\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u51fa\u6765\u307e\u3059\u3002\u307e\u305f\u3001Smarty\u3067\u306e\u8a18\u8ff0\u304c\u51fa\u6765\u308b\u5834\u5408\u306f\u305d\u3061\u3089\u3082\u5229\u7528\u304c\u53ef\u80fd\u3067\u3059\u3002"}],mdxType:"StructuredDataFaqs"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/ja/docs/management/inquiry-basic-settings/#%E5%9F%BA%E6%9C%AC%E8%A8%AD%E5%AE%9A%E9%A0%85%E7%9B%AE%E4%B8%80%E8%A6%A7"},"\u30d5\u30a9\u30fc\u30e0\u57fa\u672c\u8a2d\u5b9a"),"\u306e\u300c\u304a\u793c\u30e1\u30fc\u30eb\u9001\u4fe1\u300d\u306e\u7b87\u6240\u306b\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u8a18\u8f09\u3092\u3059\u308b\u3053\u3068\u3067\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u51fa\u6765\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u307e\u305f\u3001Smarty\u3067\u306e\u8a18\u8ff0\u304c\u51fa\u6765\u308b\u5834\u5408\u306f\u305d\u3061\u3089\u3082\u5229\u7528\u304c\u53ef\u80fd\u3067\u3059\u3002"),(0,n.kt)("h2",{id:"\u8a2d\u5b9a\u7b87\u6240"},"\u8a2d\u5b9a\u7b87\u6240"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/ja/docs/management/inquiry-basic-settings/"},"\u30d5\u30a9\u30fc\u30e0\u57fa\u672c\u8a2d\u5b9a"),"\u306e\u300c\u304a\u793c\u30e1\u30fc\u30eb\u9001\u4fe1\u300d\u306e\u300c\u5185\u5bb9\u300d\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u7de8\u96c6\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/0549d8e4521173dd2caa093b999e6251.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/0549d8e4521173dd2caa093b999e6251.png",alt:"fetched from Gyazo"})),(0,n.kt)("h2",{id:"\u8a2d\u5b9a\u53ef\u80fd\u306a\u9805\u76ee"},"\u8a2d\u5b9a\u53ef\u80fd\u306a\u9805\u76ee"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u9805\u76ee"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8aac\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"RCMS-X-FROM:"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u9001\u4fe1\u5143\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"RCMS-X-TO:"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u9001\u4fe1\u5148")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"RCMS-X-CC:"),(0,n.kt)("td",{parentName:"tr",align:"left"},"CC\u5148")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"RCMS-X-BCC:"),(0,n.kt)("td",{parentName:"tr",align:"left"},"BCC\u5148")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"RCMS-X-REPLY-TO:"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8fd4\u4fe1\u5148")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"RCMS-X-SUBJECT:"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30bf\u30a4\u30c8\u30eb")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"RCMS-X-MAIL_FROM_NM:"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u9001\u4fe1\u8005\u540d")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"RCMS-X-MAIL_TYPE:"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30e1\u30fc\u30eb\u30bf\u30a4\u30d7(HTML\u30e1\u30fc\u30eb\u306e\u5834\u5408\u306fhtml\u3092\u8a2d\u5b9a)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"RCMS-X-AVOID:"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30e1\u30fc\u30eb\u306e\u9001\u4fe1\u505c\u6b62(\u30e1\u30fc\u30eb\u306e\u9001\u4fe1\u3092\u505c\u6b62\u3059\u308b\u5834\u5408\u306b1\u3092\u8a2d\u5b9a)")))),(0,n.kt)("h2",{id:"\u95a2\u9023faq"},"\u95a2\u9023FAQ"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/ja/docs/faq/how-do-i-include-inquiry-details-in-the-thankyou-email/"},"\u554f\u3044\u5408\u308f\u305b\u306e\u304a\u793c\u30e1\u30fc\u30eb\u306b\u3001\u304a\u5ba2\u69d8\u304c\u5165\u529b\u3057\u305f\u5185\u5bb9\u3092\u8ee2\u8f09\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u3059\u304b\uff1f")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/ja/docs/faq/how-do-i-include-user-details-in-the-thankyou-email/"},"\u554f\u3044\u5408\u308f\u305b\u306e\u304a\u793c\u30e1\u30fc\u30eb\u306b\u3001\u30ed\u30b0\u30a4\u30f3\u30e6\u30fc\u30b6\u30fc\u306e\u60c5\u5831\u3092\u8ee2\u8f09\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u3059\u304b\uff1f")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/ja/docs/faq/how-do-i-include-content-details-in-the-thankyou-email/"},"\u554f\u3044\u5408\u308f\u305b\u306e\u304a\u793c\u30e1\u30fc\u30eb\u306b\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u60c5\u5831\u3092\u7d10\u3065\u3051\u3067\u304d\u307e\u3059\u304b\uff1f")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/ja/docs/reference/mail-variables/#inquiryinquiry_contact_simple/"},"\u30e1\u30c3\u30bb\u30fc\u30b8\u3072\u306a\u5f62\u306b\u5229\u7528\u3067\u304d\u308b\u5909\u6570\u4e00\u89a7")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/ja/docs/faq/how-can-i-change-the-content-of-the-notification-e-mail-for-each-form/"},"\u30d5\u30a9\u30fc\u30e0\u6bce\u306b\u7ba1\u7406\u8005\u5b9b\u901a\u77e5\u30e1\u30fc\u30eb\u306e\u5185\u5bb9\u3092\u5909\u3048\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u3059\u304b\uff1f")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/ja/docs/faq/how-do-i-display-inquiry-numbers-in-thankyou-emails-and-notifications/"},"\u304a\u793c\u30e1\u30fc\u30eb\u3084\u901a\u77e5\u30e1\u30fc\u30eb\u306b\u554f\u3044\u5408\u308f\u305bNo\u3092\u8868\u793a\u3055\u305b\u305f\u3044\u306e\u3067\u3059\u304c\u3067\u304d\u307e\u3059\u304b\uff1f")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/ja/docs/faq/how-can-i-change-the-destination-of-the-email-recipients-depending-on-the-item-choices/"},"\u9805\u76ee\u306e\u9078\u629e\u80a2\u306b\u3088\u3063\u3066\u914d\u4fe1\u5148\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u5909\u3048\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u3059\u304b\uff1f"))))}d.isMDXComponent=!0}}]);