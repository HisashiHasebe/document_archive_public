"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[8688],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),u=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(a),d=r,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||i;return a?n.createElement(f,o(o({ref:t},s),{},{components:a})):n.createElement(f,o({ref:t},s))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},13433:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294);function r(e){let{faqs:t=[]}=e;if(0===(Array.isArray(t)?t.filter((e=>e.question&&e.answer)):[]).length)return null;const a={"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))},r=JSON.stringify(a,null,2);return n.createElement("script",{type:"application/ld+json"},r)}},48863:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=a(87462),r=(a(67294),a(3905)),i=a(13433);const o={title:"\u554f\u3044\u5408\u308f\u305b\u306e\u304a\u793c\u30e1\u30fc\u30eb\u306b\u3001\u304a\u5ba2\u69d8\u304c\u5165\u529b\u3057\u305f\u5185\u5bb9\u3092\u8ee2\u8f09\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u3059\u304b\uff1f",description:"\u306f\u3044\u3001\u53ef\u80fd\u3067\u3059\u3002\u554f\u3044\u5408\u308f\u305b\u306e\u304a\u793c\u30e1\u30fc\u30eb\u306b\u3001\u304a\u5ba2\u69d8\u304c\u5165\u529b\u3057\u305f\u5185\u5bb9\u3092\u8ee2\u8f09\u3059\u308b2\u901a\u308a\u306e\u65b9\u6cd5\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002",category:"howto"},l=void 0,c={unversionedId:"faq/how-do-i-include-inquiry-details-in-the-thankyou-email",id:"faq/how-do-i-include-inquiry-details-in-the-thankyou-email",title:"\u554f\u3044\u5408\u308f\u305b\u306e\u304a\u793c\u30e1\u30fc\u30eb\u306b\u3001\u304a\u5ba2\u69d8\u304c\u5165\u529b\u3057\u305f\u5185\u5bb9\u3092\u8ee2\u8f09\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u3059\u304b\uff1f",description:"\u306f\u3044\u3001\u53ef\u80fd\u3067\u3059\u3002\u554f\u3044\u5408\u308f\u305b\u306e\u304a\u793c\u30e1\u30fc\u30eb\u306b\u3001\u304a\u5ba2\u69d8\u304c\u5165\u529b\u3057\u305f\u5185\u5bb9\u3092\u8ee2\u8f09\u3059\u308b2\u901a\u308a\u306e\u65b9\u6cd5\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/faq/how-do-i-include-inquiry-details-in-the-thankyou-email.mdx",sourceDirName:"faq",slug:"/faq/how-do-i-include-inquiry-details-in-the-thankyou-email",permalink:"/ja/docs/faq/how-do-i-include-inquiry-details-in-the-thankyou-email",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/how-do-i-include-inquiry-details-in-the-thankyou-email.mdx",tags:[],version:"current",frontMatter:{title:"\u554f\u3044\u5408\u308f\u305b\u306e\u304a\u793c\u30e1\u30fc\u30eb\u306b\u3001\u304a\u5ba2\u69d8\u304c\u5165\u529b\u3057\u305f\u5185\u5bb9\u3092\u8ee2\u8f09\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u3059\u304b\uff1f",description:"\u306f\u3044\u3001\u53ef\u80fd\u3067\u3059\u3002\u554f\u3044\u5408\u308f\u305b\u306e\u304a\u793c\u30e1\u30fc\u30eb\u306b\u3001\u304a\u5ba2\u69d8\u304c\u5165\u529b\u3057\u305f\u5185\u5bb9\u3092\u8ee2\u8f09\u3059\u308b2\u901a\u308a\u306e\u65b9\u6cd5\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002",category:"howto"},sidebar:"faqSidebar",previous:{title:"\u554f\u3044\u5408\u308f\u305b\u306e\u304a\u793c\u30e1\u30fc\u30eb\u306b\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u60c5\u5831\u3092\u7d10\u3065\u3051\u3067\u304d\u307e\u3059\u304b\uff1f",permalink:"/ja/docs/faq/how-do-i-include-content-details-in-the-thankyou-email"},next:{title:"\u554f\u3044\u5408\u308f\u305b\u306e\u304a\u793c\u30e1\u30fc\u30eb\u306b\u3001\u30ed\u30b0\u30a4\u30f3\u30e6\u30fc\u30b6\u30fc\u306e\u60c5\u5831\u3092\u8ee2\u8f09\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u3059\u304b\uff1f",permalink:"/ja/docs/faq/how-do-i-include-user-details-in-the-thankyou-email"}},u={},s=[{value:"foreach\u3092\u5229\u7528\u3057\u306a\u3044\u65b9\u6cd5",id:"foreach\u3092\u5229\u7528\u3057\u306a\u3044\u65b9\u6cd5",level:2},{value:"\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9\uff1a",id:"\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9",level:3},{value:"foreach\u3092\u5229\u7528\u3059\u308b\u65b9\u6cd5",id:"foreach\u3092\u5229\u7528\u3059\u308b\u65b9\u6cd5",level:2},{value:"\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9\uff1a",id:"\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9-1",level:3},{value:"\u95a2\u9023FAQ",id:"\u95a2\u9023faq",level:2}],p={toc:s},m="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{faqs:[{question:"\u554f\u3044\u5408\u308f\u305b\u306e\u304a\u793c\u30e1\u30fc\u30eb\u306b\u3001\u304a\u5ba2\u69d8\u304c\u5165\u529b\u3057\u305f\u5185\u5bb9\u3092\u8ee2\u8f09\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u3059\u304b\uff1f",answer:"\u306f\u3044\u3001\u53ef\u80fd\u3067\u3059\u3002\u554f\u3044\u5408\u308f\u305b\u306e\u304a\u793c\u30e1\u30fc\u30eb\u306b\u3001\u304a\u5ba2\u69d8\u304c\u5165\u529b\u3057\u305f\u5185\u5bb9\u3092\u8ee2\u8f09\u3059\u308b2\u901a\u308a\u306e\u65b9\u6cd5\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002"}],mdxType:"StructuredDataFaqs"}),(0,r.kt)("p",null,"\u304a\u793c\u30e1\u30fc\u30eb\u306b\u5185\u5bb9\u3092\u8ee2\u8f09\u3059\u308b\u306b\u306f\u30012\u901a\u308a\u306e\u65b9\u6cd5\u304c\u3042\u308a\u307e\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u4e0b\u8a18\u306e\u8a18\u8ff0\u3092",(0,r.kt)("a",{parentName:"p",href:"/ja/docs/management/inquiry-basic-settings/"},"\u30d5\u30a9\u30fc\u30e0\u57fa\u672c\u8a2d\u5b9a"),"\u306e\u300c\u304a\u793c\u30e1\u30fc\u30eb\u9001\u4fe1\u300d\u306e\u300c\u5185\u5bb9\u300d\u30d5\u30a3\u30fc\u30eb\u30c9\u306b\u5165\u529b\u304f\u3060\u3055\u3044\u3002",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/d3aebb44823f4f06897496a8226ecef7.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/d3aebb44823f4f06897496a8226ecef7.png",alt:"Image (fetched from Gyazo)"})),(0,r.kt)("h2",{id:"foreach\u3092\u5229\u7528\u3057\u306a\u3044\u65b9\u6cd5"},"foreach\u3092\u5229\u7528\u3057\u306a\u3044\u65b9\u6cd5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u9805\u76ee\u306e\u30bf\u30a4\u30c8\u30eb:{$items.\u3053\u3053\u306b\u306fID\u3092\u5165\u529b.value}  \n")),(0,r.kt)("h3",{id:"\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9"},"\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"\u304a\u540d\u524d:{$items.name.value}\n\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9:{$items.email.value}\n\u65e5\u4ed8:{$items.ext_01.value} \u203bID\u304c[ext_01]\u306e\u5834\u5408\n100\u6587\u5b57\u30e1\u30c3\u30bb\u30fc\u30b8:{$items.ext_04.value} \u203bID\u304c[ext_04]\u306e\u5834\u5408\n")),(0,r.kt)("h2",{id:"foreach\u3092\u5229\u7528\u3059\u308b\u65b9\u6cd5"},"foreach\u3092\u5229\u7528\u3059\u308b\u65b9\u6cd5"),(0,r.kt)("h3",{id:"\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9-1"},"\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"{foreach from=$items key=key item=item}\n{if $key == 'name'} \n\u3010{$item.title}\u3011{$item.value} \n{/if}\n{/foreach} \n")),(0,r.kt)("h2",{id:"\u95a2\u9023faq"},"\u95a2\u9023FAQ"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ja/docs/faq/can-i-customize-my-thank-you-e-mail/"},"\u304a\u793c\u30e1\u30fc\u30eb\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3067\u304d\u307e\u3059\u304b\uff1f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ja/docs/reference/mail-variables/#inquiryinquiry_contact_simple/"},"\u30e1\u30c3\u30bb\u30fc\u30b8\u3072\u306a\u5f62\u306b\u5229\u7528\u3067\u304d\u308b\u5909\u6570\u4e00\u89a7")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ja/docs/faq/how-can-i-change-the-content-of-the-notification-e-mail-for-each-form/"},"\u30d5\u30a9\u30fc\u30e0\u6bce\u306b\u7ba1\u7406\u8005\u5b9b\u901a\u77e5\u30e1\u30fc\u30eb\u306e\u5185\u5bb9\u3092\u5909\u3048\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u3059\u304b\uff1f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ja/docs/faq/how-do-i-include-user-details-in-the-thankyou-email/"},"\u554f\u3044\u5408\u308f\u305b\u306e\u304a\u793c\u30e1\u30fc\u30eb\u306b\u3001\u30ed\u30b0\u30a4\u30f3\u30e6\u30fc\u30b6\u30fc\u306e\u60c5\u5831\u3092\u8ee2\u8f09\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u3059\u304b\uff1f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ja/docs/faq/how-do-i-include-content-details-in-the-thankyou-email/"},"\u554f\u3044\u5408\u308f\u305b\u306e\u304a\u793c\u30e1\u30fc\u30eb\u306b\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u60c5\u5831\u3092\u7d10\u3065\u3051\u3067\u304d\u307e\u3059\u304b\uff1f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ja/docs/faq/how-do-i-display-inquiry-numbers-in-thankyou-emails-and-notifications/"},"\u304a\u793c\u30e1\u30fc\u30eb\u3084\u901a\u77e5\u30e1\u30fc\u30eb\u306b\u554f\u3044\u5408\u308f\u305bNo\u3092\u8868\u793a\u3055\u305b\u305f\u3044\u306e\u3067\u3059\u304c\u3067\u304d\u307e\u3059\u304b\uff1f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ja/docs/faq/how-can-i-change-the-destination-of-the-email-recipients-depending-on-the-item-choices/"},"\u9805\u76ee\u306e\u9078\u629e\u80a2\u306b\u3088\u3063\u3066\u914d\u4fe1\u5148\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u5909\u3048\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u3059\u304b\uff1f"))))}d.isMDXComponent=!0}}]);