"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[60958],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),s=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(m.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),c=r,f=d["".concat(m,".").concat(c)]||d[c]||p[c]||i;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},13433:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294);function r(e){let{faqs:t=[]}=e;if(0===(Array.isArray(t)?t.filter((e=>e.question&&e.answer)):[]).length)return null;const n={"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))},r=JSON.stringify(n,null,2);return a.createElement("script",{type:"application/ld+json"},r)}},53605:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>m,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),i=n(13433);const l={title:"\u554f\u3044\u5408\u308f\u305b\u306e\u304a\u793c\u30e1\u30fc\u30eb\u306b\u3001\u30ed\u30b0\u30a4\u30f3\u30e6\u30fc\u30b6\u30fc\u306e\u60c5\u5831\u3092\u8ee2\u8f09\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u3059\u304b\uff1f",description:"\u53ef\u80fd\u3067\u3059\u3002\u30d5\u30a9\u30fc\u30e0\u57fa\u672c\u8a2d\u5b9a\u306e\u300c\u304a\u793c\u30e1\u30fc\u30eb\u9001\u4fe1\u300d\u306bSmarty\u3067\u8a18\u8ff0\u3057\u3066\u304f\u3060\u3055\u3044\u3002",category:"howto"},o=void 0,m={unversionedId:"faq/how-do-i-include-user-details-in-the-thankyou-email",id:"faq/how-do-i-include-user-details-in-the-thankyou-email",title:"\u554f\u3044\u5408\u308f\u305b\u306e\u304a\u793c\u30e1\u30fc\u30eb\u306b\u3001\u30ed\u30b0\u30a4\u30f3\u30e6\u30fc\u30b6\u30fc\u306e\u60c5\u5831\u3092\u8ee2\u8f09\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u3059\u304b\uff1f",description:"\u53ef\u80fd\u3067\u3059\u3002\u30d5\u30a9\u30fc\u30e0\u57fa\u672c\u8a2d\u5b9a\u306e\u300c\u304a\u793c\u30e1\u30fc\u30eb\u9001\u4fe1\u300d\u306bSmarty\u3067\u8a18\u8ff0\u3057\u3066\u304f\u3060\u3055\u3044\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/faq/how-do-i-include-user-details-in-the-thankyou-email.mdx",sourceDirName:"faq",slug:"/faq/how-do-i-include-user-details-in-the-thankyou-email",permalink:"/ja/docs/faq/how-do-i-include-user-details-in-the-thankyou-email",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/how-do-i-include-user-details-in-the-thankyou-email.mdx",tags:[],version:"current",frontMatter:{title:"\u554f\u3044\u5408\u308f\u305b\u306e\u304a\u793c\u30e1\u30fc\u30eb\u306b\u3001\u30ed\u30b0\u30a4\u30f3\u30e6\u30fc\u30b6\u30fc\u306e\u60c5\u5831\u3092\u8ee2\u8f09\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u3059\u304b\uff1f",description:"\u53ef\u80fd\u3067\u3059\u3002\u30d5\u30a9\u30fc\u30e0\u57fa\u672c\u8a2d\u5b9a\u306e\u300c\u304a\u793c\u30e1\u30fc\u30eb\u9001\u4fe1\u300d\u306bSmarty\u3067\u8a18\u8ff0\u3057\u3066\u304f\u3060\u3055\u3044\u3002",category:"howto"},sidebar:"faqSidebar",previous:{title:"\u554f\u3044\u5408\u308f\u305b\u306e\u304a\u793c\u30e1\u30fc\u30eb\u306b\u3001\u304a\u5ba2\u69d8\u304c\u5165\u529b\u3057\u305f\u5185\u5bb9\u3092\u8ee2\u8f09\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u3059\u304b\uff1f",permalink:"/ja/docs/faq/how-do-i-include-inquiry-details-in-the-thankyou-email"},next:{title:"Smarty\u3067if\u6587\u3084foreach\u3092\u4f7f\u3063\u3066\u8a18\u8ff0\u3092\u884c\u306a\u3063\u3066\u3044\u308b\u3068\u3001\u6539\u884c\u306e\u51fa\u529b\u304c\u3055\u308c\u306a\u3044\u6642\u304c\u3042\u308a\u307e\u3059\u89e3\u6c7a\u65b9\u6cd5\u3092\u6559\u3048\u3066\u304f\u3060\u3055\u3044\u3002",permalink:"/ja/docs/faq/how-do-i-insert-line-breaks-with-smarty-if-statements"}},s={},u=[{value:"assign_member_detail\u306e\u30d7\u30e9\u30b0\u30a4\u30f3\u3067\u30e1\u30f3\u30d0\u30fc\u60c5\u5831\u3092\u30a2\u30b5\u30a4\u30f3\u3057\u3066\u5229\u7528\u3059\u308b",id:"assign_member_detail\u306e\u30d7\u30e9\u30b0\u30a4\u30f3\u3067\u30e1\u30f3\u30d0\u30fc\u60c5\u5831\u3092\u30a2\u30b5\u30a4\u30f3\u3057\u3066\u5229\u7528\u3059\u308b",level:2},{value:"\u8a2d\u5b9a\u65b9\u6cd5",id:"\u8a2d\u5b9a\u65b9\u6cd5",level:3},{value:"\u8a18\u8ff0\u4f8b",id:"\u8a18\u8ff0\u4f8b",level:3},{value:"InquiryMessage::send \u306e\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306bmember_info_flg true \u306e\u8a2d\u5b9a\u3092\u3059\u308b",id:"inquirymessagesend-\u306e\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306bmember_info_flg-true-\u306e\u8a2d\u5b9a\u3092\u3059\u308b",level:2},{value:"\u8a2d\u5b9a\u65b9\u6cd5",id:"\u8a2d\u5b9a\u65b9\u6cd5-1",level:3},{value:"\u8a18\u8ff0\u4f8b",id:"\u8a18\u8ff0\u4f8b-1",level:3},{value:"\u5229\u7528\u3067\u304d\u308b\u30c7\u30fc\u30bf\u306e\u78ba\u8a8d",id:"\u5229\u7528\u3067\u304d\u308b\u30c7\u30fc\u30bf\u306e\u78ba\u8a8d",level:2},{value:"\u95a2\u9023FAQ",id:"\u95a2\u9023faq",level:2}],d={toc:u},p="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{faqs:[{question:"\u554f\u3044\u5408\u308f\u305b\u306e\u304a\u793c\u30e1\u30fc\u30eb\u306b\u3001\u30ed\u30b0\u30a4\u30f3\u30e6\u30fc\u30b6\u30fc\u306e\u60c5\u5831\u3092\u8ee2\u8f09\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u3059\u304b\uff1f",answer:"\u53ef\u80fd\u3067\u3059\u3002\u30d5\u30a9\u30fc\u30e0\u57fa\u672c\u8a2d\u5b9a\u306e\u300c\u304a\u793c\u30e1\u30fc\u30eb\u9001\u4fe1\u300d\u306bSmarty\u3067\u8a18\u8ff0\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}],mdxType:"StructuredDataFaqs"}),(0,r.kt)("p",null,"\u4ee5\u4e0b2\u3064\u306e\u65b9\u6cd5\u3067\u5bfe\u5fdc\u304c\u53ef\u80fd\u3067\u3059\u3002 "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#assign_member_detail%E3%81%AE%E3%83%97%E3%83%A9%E3%82%B0%E3%82%A4%E3%83%B3%E3%81%A7%E3%83%A1%E3%83%B3%E3%83%90%E3%83%BC%E6%83%85%E5%A0%B1%E3%82%92%E3%82%A2%E3%82%B5%E3%82%A4%E3%83%B3%E3%81%97%E3%81%A6%E5%88%A9%E7%94%A8%E3%81%99%E3%82%8B"},"assign_member_detail\u306e\u30d7\u30e9\u30b0\u30a4\u30f3\u3067\u30e1\u30f3\u30d0\u30fc\u60c5\u5831\u3092\u30a2\u30b5\u30a4\u30f3\u3057\u3066\u5229\u7528\u3059\u308b")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#inquirymessagesend-%E3%81%AE%E3%82%A8%E3%83%B3%E3%83%89%E3%83%9D%E3%82%A4%E3%83%B3%E3%83%88%E3%81%ABmember_info_flg-true-%E3%81%AE%E8%A8%AD%E5%AE%9A%E3%82%92%E3%81%99%E3%82%8B"},"InquiryMessage::send \u306e\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306bmember_info_flg true \u306e\u8a2d\u5b9a\u3092\u3059\u308b"))),(0,r.kt)("p",null,"\u307e\u305f\u3001\u3069\u3061\u3089\u306e\u65b9\u6cd5\u3082\u304a\u793c\u30e1\u30fc\u30eb\u3060\u3051\u3067\u306a\u304f\u3001\u7ba1\u7406\u8005\u5b9b\u901a\u77e5\u30e1\u30fc\u30eb\u306b\u3082\u53ef\u80fd\u3067\u3059\u3002  "),(0,r.kt)("h2",{id:"assign_member_detail\u306e\u30d7\u30e9\u30b0\u30a4\u30f3\u3067\u30e1\u30f3\u30d0\u30fc\u60c5\u5831\u3092\u30a2\u30b5\u30a4\u30f3\u3057\u3066\u5229\u7528\u3059\u308b"},"assign_member_detail\u306e\u30d7\u30e9\u30b0\u30a4\u30f3\u3067\u30e1\u30f3\u30d0\u30fc\u60c5\u5831\u3092\u30a2\u30b5\u30a4\u30f3\u3057\u3066\u5229\u7528\u3059\u308b"),(0,r.kt)("h3",{id:"\u8a2d\u5b9a\u65b9\u6cd5"},"\u8a2d\u5b9a\u65b9\u6cd5"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/ja/docs/management/inquiry-basic-settings/#%E5%9F%BA%E6%9C%AC%E8%A8%AD%E5%AE%9A%E9%A0%85%E7%9B%AE%E4%B8%80%E8%A6%A7"},"\u30d5\u30a9\u30fc\u30e0\u57fa\u672c\u8a2d\u5b9a"),"\u306e\u304a\u793c\u30e1\u30fc\u30eb\u306b\u4ee5\u4e0b\u306esmarty\u306e\u8a18\u8ff0\u3092\u3059\u308b\u3002",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"p"},"{assign_member_detail var=member_detail member_id=$smarty.session.member_id}"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"member_detail.name1 \u306a\u3069\u3067\u547c\u3073\u51fa\u3059\u3002"))),(0,r.kt)("h3",{id:"\u8a18\u8ff0\u4f8b"},"\u8a18\u8ff0\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u304a\u554f\u3044\u5408\u308f\u305b\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3059\u3002\n\n{assign_member_detail var=member_detail member_id=$smarty.session.member_id} \n\n\u304a\u554f\u3044\u5408\u308f\u305b\u9802\u3044\u305f\u65b9\u306e\u8a73\u7d30:\nFamily name: {$member_detail.name1}\nGiven name: {$member_detail.name2}\nMember ID: {$member_detail.member_id}\n")),(0,r.kt)("h2",{id:"inquirymessagesend-\u306e\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306bmember_info_flg-true-\u306e\u8a2d\u5b9a\u3092\u3059\u308b"},"InquiryMessage::send \u306e\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306bmember_info_flg true \u306e\u8a2d\u5b9a\u3092\u3059\u308b"),(0,r.kt)("h3",{id:"\u8a2d\u5b9a\u65b9\u6cd5-1"},"\u8a2d\u5b9a\u65b9\u6cd5"),(0,r.kt)("p",null,"InquiryMessage::send \u306e\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306e\u8a73\u7d30\u8a2d\u5b9a\u3067\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"member_info_flg"),"\u306b\u30c1\u30a7\u30c3\u30af\u3092\u4ed8\u3051\u307e\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/58906651dcb63c09f299f710dfd1af60.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/58906651dcb63c09f299f710dfd1af60.png",alt:"Image from Gyazo"})),(0,r.kt)("h3",{id:"\u8a18\u8ff0\u4f8b-1"},"\u8a18\u8ff0\u4f8b"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"member_info_flg"),"\u306b\u30c1\u30a7\u30c3\u30af\u304c\u3042\u308b\u5834\u5408\u3001\u30d5\u30a9\u30fc\u30e0\u306e\u9001\u4fe1\u8005\u304c\u30ed\u30b0\u30a4\u30f3\u6e08\u307f\u306e\u5834\u5408\u306b\u30e1\u30f3\u30d0\u30fc\u60c5\u5831\u304c ",(0,r.kt)("inlineCode",{parentName:"p"},"member_info"),"\u306e\u5909\u6570\u540d\u3067\u30a2\u30b5\u30a4\u30f3\u3055\u308c\u307e\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u305d\u306e\u305f\u3081\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u8a18\u8f09\u3057\u3066\u30e1\u30f3\u30d0\u30fc\u60c5\u5831\u3092\u30e1\u30fc\u30eb\u306b\u8868\u793a\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u304a\u554f\u3044\u5408\u308f\u305b\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3059\u3002\n\n\u304a\u554f\u3044\u5408\u308f\u305b\u9802\u3044\u305f\u65b9\u306e\u8a73\u7d30:\nFamily name: {$member_info.name1}\nGiven name: {$member_info.name2}\nMember ID: {$member_info.member_id}\n")),(0,r.kt)("h2",{id:"\u5229\u7528\u3067\u304d\u308b\u30c7\u30fc\u30bf\u306e\u78ba\u8a8d"},"\u5229\u7528\u3067\u304d\u308b\u30c7\u30fc\u30bf\u306e\u78ba\u8a8d"),(0,r.kt)("p",null,"\u683c\u7d0d\u3055\u308c\u3066\u3044\u308b\u60c5\u5831\u306e\u4e00\u89a7\u306f",(0,r.kt)("inlineCode",{parentName:"p"},"@debug_print_var"),"\u3092\u5229\u7528\u3057\u3066\u3001\u9001\u4fe1\u3055\u308c\u305f\u30e1\u30fc\u30eb\u672c\u6587\u304b\u3089\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"{assign_member_detail var=member_detail member_id=$smarty.session.member_id}\n{$member_detail|@debug_print_var}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"{$member_info|@debug_print_var}\n")),(0,r.kt)("h2",{id:"\u95a2\u9023faq"},"\u95a2\u9023FAQ"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ja/docs/faq/can-i-customize-my-thank-you-e-mail/"},"\u304a\u793c\u30e1\u30fc\u30eb\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3067\u304d\u307e\u3059\u304b\uff1f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ja/docs/reference/mail-variables/#inquiryinquiry_contact_simple/"},"\u30e1\u30c3\u30bb\u30fc\u30b8\u3072\u306a\u5f62\u306b\u5229\u7528\u3067\u304d\u308b\u5909\u6570\u4e00\u89a7")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ja/docs/faq/how-can-i-change-the-content-of-the-notification-e-mail-for-each-form/"},"\u30d5\u30a9\u30fc\u30e0\u6bce\u306b\u7ba1\u7406\u8005\u5b9b\u901a\u77e5\u30e1\u30fc\u30eb\u306e\u5185\u5bb9\u3092\u5909\u3048\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u3059\u304b\uff1f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ja/docs/faq/how-do-i-include-inquiry-details-in-the-thankyou-email/"},"\u554f\u3044\u5408\u308f\u305b\u306e\u304a\u793c\u30e1\u30fc\u30eb\u306b\u3001\u304a\u5ba2\u69d8\u304c\u5165\u529b\u3057\u305f\u5185\u5bb9\u3092\u8ee2\u8f09\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u3059\u304b\uff1f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ja/docs/faq/how-do-i-display-inquiry-numbers-in-thankyou-emails-and-notifications/"},"\u304a\u793c\u30e1\u30fc\u30eb\u3084\u901a\u77e5\u30e1\u30fc\u30eb\u306b\u554f\u3044\u5408\u308f\u305bNo\u3092\u8868\u793a\u3055\u305b\u305f\u3044\u306e\u3067\u3059\u304c\u3067\u304d\u307e\u3059\u304b\uff1f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ja/docs/faq/how-can-i-change-the-destination-of-the-email-recipients-depending-on-the-item-choices/"},"\u9805\u76ee\u306e\u9078\u629e\u80a2\u306b\u3088\u3063\u3066\u914d\u4fe1\u5148\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u5909\u3048\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u3059\u304b\uff1f"))))}c.isMDXComponent=!0}}]);