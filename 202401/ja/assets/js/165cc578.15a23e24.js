"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[98466],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),m=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=m(a),u=r,d=s["".concat(l,".").concat(u)]||s[u]||f[u]||i;return a?n.createElement(d,o(o({ref:t},p),{},{components:a})):n.createElement(d,o({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:r,o[1]=c;for(var m=2;m<i;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},13433:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294);function r(e){let{faqs:t=[]}=e;if(0===(Array.isArray(t)?t.filter((e=>e.question&&e.answer)):[]).length)return null;const a={"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))},r=JSON.stringify(a,null,2);return n.createElement("script",{type:"application/ld+json"},r)}},36043:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),i=a(13433);const o={title:"\u30d5\u30a9\u30fc\u30e0\u6bce\u306b\u7ba1\u7406\u8005\u5b9b\u901a\u77e5\u30e1\u30fc\u30eb\u306e\u5185\u5bb9\u3092\u5909\u3048\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u3059\u304b\uff1f",description:"\u30e1\u30c3\u30bb\u30fc\u30b8\u3072\u306a\u5f62\u3067\u300c\u554f\u3044\u5408\u308f\u305b\u7740\u4fe1\u901a\u77e5\u30e1\u30fc\u30eb(\u7ba1\u7406\u8005\u5b9b)\u300d\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306bSmarty\u3067\u5206\u5c90\u3092\u304b\u3051\u308b\u3053\u3068\u3067\u5bfe\u5fdc\u3067\u304d\u307e\u3059\u3002",category:"howto"},c=void 0,l={unversionedId:"faq/how-can-i-change-the-content-of-the-notification-e-mail-for-each-form",id:"faq/how-can-i-change-the-content-of-the-notification-e-mail-for-each-form",title:"\u30d5\u30a9\u30fc\u30e0\u6bce\u306b\u7ba1\u7406\u8005\u5b9b\u901a\u77e5\u30e1\u30fc\u30eb\u306e\u5185\u5bb9\u3092\u5909\u3048\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u3059\u304b\uff1f",description:"\u30e1\u30c3\u30bb\u30fc\u30b8\u3072\u306a\u5f62\u3067\u300c\u554f\u3044\u5408\u308f\u305b\u7740\u4fe1\u901a\u77e5\u30e1\u30fc\u30eb(\u7ba1\u7406\u8005\u5b9b)\u300d\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306bSmarty\u3067\u5206\u5c90\u3092\u304b\u3051\u308b\u3053\u3068\u3067\u5bfe\u5fdc\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/faq/how-can-i-change-the-content-of-the-notification-e-mail-for-each-form.mdx",sourceDirName:"faq",slug:"/faq/how-can-i-change-the-content-of-the-notification-e-mail-for-each-form",permalink:"/ja/docs/faq/how-can-i-change-the-content-of-the-notification-e-mail-for-each-form",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/how-can-i-change-the-content-of-the-notification-e-mail-for-each-form.mdx",tags:[],version:"current",frontMatter:{title:"\u30d5\u30a9\u30fc\u30e0\u6bce\u306b\u7ba1\u7406\u8005\u5b9b\u901a\u77e5\u30e1\u30fc\u30eb\u306e\u5185\u5bb9\u3092\u5909\u3048\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u3059\u304b\uff1f",description:"\u30e1\u30c3\u30bb\u30fc\u30b8\u3072\u306a\u5f62\u3067\u300c\u554f\u3044\u5408\u308f\u305b\u7740\u4fe1\u901a\u77e5\u30e1\u30fc\u30eb(\u7ba1\u7406\u8005\u5b9b)\u300d\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306bSmarty\u3067\u5206\u5c90\u3092\u304b\u3051\u308b\u3053\u3068\u3067\u5bfe\u5fdc\u3067\u304d\u307e\u3059\u3002",category:"howto"},sidebar:"faqSidebar",previous:{title:"API\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u3092\u30bf\u30b0\u30ab\u30c6\u30b4\u30ea\u3067\u7d5e\u308a\u8fbc\u307f\u305f\u3044",permalink:"/ja/docs/faq/filtering-api-responses-by-tag-category"},next:{title:"\u9805\u76ee\u306e\u9078\u629e\u80a2\u306b\u3088\u3063\u3066\u914d\u4fe1\u5148\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u5909\u3048\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u3059\u304b\uff1f",permalink:"/ja/docs/faq/how-can-i-change-the-destination-of-the-email-recipients-depending-on-the-item-choices"}},m={},p=[{value:"\u8a2d\u5b9a\u7b87\u6240",id:"\u8a2d\u5b9a\u7b87\u6240",level:2},{value:"\u9077\u79fb\u65b9\u6cd5",id:"\u9077\u79fb\u65b9\u6cd5",level:2},{value:"\u8a2d\u5b9a\u4f8b",id:"\u8a2d\u5b9a\u4f8b",level:2},{value:"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8",id:"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8",level:2}],s={toc:p},f="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(f,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{faqs:[{question:"\u30d5\u30a9\u30fc\u30e0\u6bce\u306b\u7ba1\u7406\u8005\u5b9b\u901a\u77e5\u30e1\u30fc\u30eb\u306e\u5185\u5bb9\u3092\u5909\u3048\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u3059\u304b\uff1f",answer:"\u30e1\u30c3\u30bb\u30fc\u30b8\u3072\u306a\u5f62\u3067\u300c\u554f\u3044\u5408\u308f\u305b\u7740\u4fe1\u901a\u77e5\u30e1\u30fc\u30eb(\u7ba1\u7406\u8005\u5b9b)\u300d\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306bSmarty\u3067\u5206\u5c90\u3092\u304b\u3051\u308b\u3053\u3068\u3067\u5bfe\u5fdc\u3067\u304d\u307e\u3059\u3002"}],mdxType:"StructuredDataFaqs"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/ja/docs/management/email-template/"},"\u30e1\u30c3\u30bb\u30fc\u30b8\u3072\u306a\u5f62"),"\u3067\u300c\u554f\u3044\u5408\u308f\u305b\u7740\u4fe1\u901a\u77e5\u30e1\u30fc\u30eb(\u7ba1\u7406\u8005\u5b9b)\u300d\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306bSmarty\u3067\u5206\u5c90\u3092\u304b\u3051\u308b\u3053\u3068\u3067\u5bfe\u5fdc\u3067\u304d\u307e\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u307e\u305f\u3001",(0,r.kt)("a",{parentName:"p",href:"/ja/docs/faq/can-i-customize-my-thank-you-e-mail/"},"\u304a\u793c\u30e1\u30fc\u30eb\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3067\u304d\u307e\u3059\u304b\uff1f"),"\u3067\u7d39\u4ecb\u3057\u3066\u3044\u308b",(0,r.kt)("inlineCode",{parentName:"p"},"RCMS-X-FROM"),"\u7b49\u306e\u8a18\u8ff0\u306f\u3001\u300c\u554f\u3044\u5408\u308f\u305b\u7740\u4fe1\u901a\u77e5\u30e1\u30fc\u30eb(\u7ba1\u7406\u8005\u5b9b)\u300d\u3067\u3082\u5229\u7528\u3067\u304d\u307e\u3059\u306e\u3067\u3001\u5408\u308f\u305b\u3066\u3054\u5229\u7528\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h2",{id:"\u8a2d\u5b9a\u7b87\u6240"},"\u8a2d\u5b9a\u7b87\u6240"),(0,r.kt)("p",null,"\u4e0b\u8a18\u306e",(0,r.kt)("a",{parentName:"p",href:"/ja/docs/management/email-template/"},"\u30e1\u30c3\u30bb\u30fc\u30b8\u3072\u306a\u5f62"),"\u306e\u300c\u672c\u6587\u300d\u30d5\u30a3\u30fc\u30eb\u30c9\u3067\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u30e2\u30b8\u30e5\u30fc\u30eb"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Slug"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"inquiry"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u554f\u3044\u5408\u308f\u305b\u7740\u4fe1\u901a\u77e5\u30e1\u30fc\u30eb(\u7ba1\u7406\u8005\u5b9b)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"inquiry/inquiry_contact")))),(0,r.kt)("h2",{id:"\u9077\u79fb\u65b9\u6cd5"},"\u9077\u79fb\u65b9\u6cd5"),(0,r.kt)("p",null,"[\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3]","->","[\u30e1\u30c3\u30bb\u30fc\u30b8\u3072\u306a\u5f62]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/be3fdd5c65007a98fd554828930f3384.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/be3fdd5c65007a98fd554828930f3384.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"\u30e1\u30c3\u30bb\u30fc\u30b8\u3072\u306a\u5f62\u4e00\u89a7\u304b\u3089\u300c\u554f\u3044\u5408\u308f\u305b\u7740\u4fe1\u901a\u77e5\u30e1\u30fc\u30eb(\u7ba1\u7406\u8005\u5b9b)\u300d\u3092\u63a2\u3057\u3066\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/a708dc1270701af779dae9524e8f7d59.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/a708dc1270701af779dae9524e8f7d59.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"\u30e1\u30c3\u30bb\u30fc\u30b8\u3072\u306a\u5f62\u7de8\u96c6\u306e\u30da\u30fc\u30b8\u306b\u9077\u79fb\u3057\u3001\u30dc\u30c7\u30a3\u30d5\u30a3\u30fc\u30eb\u30c9\u304c\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/9ce9721daeeda3538667e5e58a9626f5.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/9ce9721daeeda3538667e5e58a9626f5.png",alt:"Image from Gyazo"})),(0,r.kt)("h2",{id:"\u8a2d\u5b9a\u4f8b"},"\u8a2d\u5b9a\u4f8b"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u306e\u4f8b\u3067\u306f\u554f\u3044\u5408\u308f\u305b\u8005\u306e\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u304c\u7279\u5b9a\u306e\u5834\u5408\u306b\u7ba1\u7406\u8005\u5b9b\u901a\u77e5\u30e1\u30fc\u30eb\u306e\u9001\u4fe1\u3092\u305b\u305a\u3001",(0,r.kt)("br",{parentName:"p"}),"\n","\u554f\u3044\u5408\u308f\u305b\u306e\u30d5\u30a9\u30fc\u30e0\u306b\u3088\u3063\u3066\u7ba1\u7406\u8005\u5b9b\u901a\u77e5\u30e1\u30fc\u30eb\u306eCC\u306e\u5b9b\u5148\u3092\u5909\u66f4\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"{if $items.email.value eq 'test@example.com'}\nRCMS-X-AVOID:1\n{/if}\n\n{if $inquiry_id eq 6}\nRCMS-X-CC:list1@example.com\n{else if $inquiry_id eq 7}\nRCMS-X-CC:list2@example.com\n{/if}\n\n\u554f\u3044\u5408\u308f\u305b\u304c\u5c4a\u304d\u307e\u3057\u305f\u3002\n\u4ee5\u4e0b\u304b\u3089\u5185\u5bb9\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n{$smarty.const.ROOT_MNG_URL}/management/\n")),(0,r.kt)("h2",{id:"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"},"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ja/docs/faq/how-do-i-include-inquiry-details-in-the-thankyou-email/"},"\u554f\u3044\u5408\u308f\u305b\u306e\u304a\u793c\u30e1\u30fc\u30eb\u306b\u3001\u304a\u5ba2\u69d8\u304c\u5165\u529b\u3057\u305f\u5185\u5bb9\u3092\u8ee2\u8f09\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u3059\u304b\uff1f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ja/docs/faq/how-do-i-include-user-details-in-the-thankyou-email/"},"\u554f\u3044\u5408\u308f\u305b\u306e\u304a\u793c\u30e1\u30fc\u30eb\u306b\u3001\u30ed\u30b0\u30a4\u30f3\u30e6\u30fc\u30b6\u30fc\u306e\u60c5\u5831\u3092\u8ee2\u8f09\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u3059\u304b\uff1f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ja/docs/faq/how-do-i-include-content-details-in-the-thankyou-email/"},"\u554f\u3044\u5408\u308f\u305b\u306e\u304a\u793c\u30e1\u30fc\u30eb\u306b\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u60c5\u5831\u3092\u7d10\u3065\u3051\u3067\u304d\u307e\u3059\u304b\uff1f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ja/docs/reference/mail-variables/#inquiryinquiry_contact_simple/"},"\u30e1\u30c3\u30bb\u30fc\u30b8\u3072\u306a\u5f62\u306b\u5229\u7528\u3067\u304d\u308b\u5909\u6570\u4e00\u89a7")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ja/docs/faq/can-i-customize-my-thank-you-e-mail/"},"\u304a\u793c\u30e1\u30fc\u30eb\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3067\u304d\u307e\u3059\u304b\uff1f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ja/docs/faq/how-do-i-display-inquiry-numbers-in-thankyou-emails-and-notifications/"},"\u304a\u793c\u30e1\u30fc\u30eb\u3084\u901a\u77e5\u30e1\u30fc\u30eb\u306b\u554f\u3044\u5408\u308f\u305bNo\u3092\u8868\u793a\u3055\u305b\u305f\u3044\u306e\u3067\u3059\u304c\u3067\u304d\u307e\u3059\u304b\uff1f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ja/docs/faq/how-can-i-change-the-destination-of-the-email-recipients-depending-on-the-item-choices/"},"\u9805\u76ee\u306e\u9078\u629e\u80a2\u306b\u3088\u3063\u3066\u914d\u4fe1\u5148\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u5909\u3048\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u3059\u304b\uff1f"))))}u.isMDXComponent=!0}}]);