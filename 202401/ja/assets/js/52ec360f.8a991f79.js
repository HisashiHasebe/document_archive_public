"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[8151],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},s),{},{components:n})):a.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13433:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294);function r(e){let{faqs:t=[]}=e;if(0===(Array.isArray(t)?t.filter((e=>e.question&&e.answer)):[]).length)return null;const n={"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))},r=JSON.stringify(n,null,2);return a.createElement("script",{type:"application/ld+json"},r)}},11737:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var a=n(87462),r=(n(67294),n(3905)),o=n(13433);const i={title:"\u554f\u3044\u5408\u308f\u305b\u306e\u304a\u793c\u30e1\u30fc\u30eb\u306b\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u60c5\u5831\u3092\u7d10\u3065\u3051\u3067\u304d\u307e\u3059\u304b\uff1f",description:"\u53ef\u80fd\u3067\u3059\u3002\u30d5\u30a9\u30fc\u30e0\u57fa\u672c\u8a2d\u5b9a\u306e\u300c\u304a\u793c\u30e1\u30fc\u30eb\u9001\u4fe1\u300d\u306bSmarty\u3067\u8a18\u8ff0\u3057\u3066\u304f\u3060\u3055\u3044\u3002",category:"howto"},l=void 0,c={unversionedId:"faq/how-do-i-include-content-details-in-the-thankyou-email",id:"faq/how-do-i-include-content-details-in-the-thankyou-email",title:"\u554f\u3044\u5408\u308f\u305b\u306e\u304a\u793c\u30e1\u30fc\u30eb\u306b\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u60c5\u5831\u3092\u7d10\u3065\u3051\u3067\u304d\u307e\u3059\u304b\uff1f",description:"\u53ef\u80fd\u3067\u3059\u3002\u30d5\u30a9\u30fc\u30e0\u57fa\u672c\u8a2d\u5b9a\u306e\u300c\u304a\u793c\u30e1\u30fc\u30eb\u9001\u4fe1\u300d\u306bSmarty\u3067\u8a18\u8ff0\u3057\u3066\u304f\u3060\u3055\u3044\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/faq/how-do-i-include-content-details-in-the-thankyou-email.mdx",sourceDirName:"faq",slug:"/faq/how-do-i-include-content-details-in-the-thankyou-email",permalink:"/ja/docs/faq/how-do-i-include-content-details-in-the-thankyou-email",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/how-do-i-include-content-details-in-the-thankyou-email.mdx",tags:[],version:"current",frontMatter:{title:"\u554f\u3044\u5408\u308f\u305b\u306e\u304a\u793c\u30e1\u30fc\u30eb\u306b\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u60c5\u5831\u3092\u7d10\u3065\u3051\u3067\u304d\u307e\u3059\u304b\uff1f",description:"\u53ef\u80fd\u3067\u3059\u3002\u30d5\u30a9\u30fc\u30e0\u57fa\u672c\u8a2d\u5b9a\u306e\u300c\u304a\u793c\u30e1\u30fc\u30eb\u9001\u4fe1\u300d\u306bSmarty\u3067\u8a18\u8ff0\u3057\u3066\u304f\u3060\u3055\u3044\u3002",category:"howto"},sidebar:"faqSidebar",previous:{title:"Smarty \u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f\u3002\u539f\u56e0\u3092\u6559\u3048\u3066\u304f\u3060\u3055\u3044\u3002",permalink:"/ja/docs/faq/how-do-i-handle-errors-in-smarty"},next:{title:"\u554f\u3044\u5408\u308f\u305b\u306e\u304a\u793c\u30e1\u30fc\u30eb\u306b\u3001\u304a\u5ba2\u69d8\u304c\u5165\u529b\u3057\u305f\u5185\u5bb9\u3092\u8ee2\u8f09\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u3059\u304b\uff1f",permalink:"/ja/docs/faq/how-do-i-include-inquiry-details-in-the-thankyou-email"}},u={},s=[{value:"\u8a18\u8ff0\u4f8b",id:"\u8a18\u8ff0\u4f8b",level:3},{value:"\u95a2\u9023FAQ",id:"\u95a2\u9023faq",level:2}],p={toc:s},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{faqs:[{question:"\u554f\u3044\u5408\u308f\u305b\u306e\u304a\u793c\u30e1\u30fc\u30eb\u306b\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u60c5\u5831\u3092\u7d10\u3065\u3051\u3067\u304d\u307e\u3059\u304b\uff1f",answer:"\u53ef\u80fd\u3067\u3059\u3002\u30d5\u30a9\u30fc\u30e0\u57fa\u672c\u8a2d\u5b9a\u306e\u300c\u304a\u793c\u30e1\u30fc\u30eb\u9001\u4fe1\u300d\u306bSmarty\u3067\u8a18\u8ff0\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}],mdxType:"StructuredDataFaqs"}),(0,r.kt)("p",null,"\u53ef\u80fd\u3067\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u304a\u793c\u30e1\u30fc\u30eb\u304b\u3089\u3082Kuroco\u306eAPI\u3092\u547c\u3073\u51fa\u305b\u308b\u306e\u3067\u3001",(0,r.kt)("a",{parentName:"p",href:"/ja/docs/faq/how-to-request-kuroco-api-from-smarty-function/"},"\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u304b\u3089Kuroco\u306eAPI\u3092\u547c\u3073\u51fa\u305b\u307e\u3059\u304b\uff1f"),"\u3092\u53c2\u8003\u306b\n\u30b3\u30f3\u30c6\u30f3\u30c4\u60c5\u5831\u3092\u53d6\u5f97\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h3",{id:"\u8a18\u8ff0\u4f8b"},"\u8a18\u8ff0\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u304a\u554f\u3044\u5408\u308f\u305b\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3059\u3002\nKuroco\u306e\u30b5\u30fc\u30d3\u30b9\u8cc7\u6599\u306f\u4ee5\u4e0b\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002\n{assign_array var='method_params'            values=''}\n{assign       var='method_params.topics_id'  value='98'}\n{api_method\n    var='topics'\n    model='Topics'\n    method='details'\n    version='1'\n    method_params=$method_params\n}\nKuroco\u30b5\u30fc\u30d3\u30b9\u8cc7\u6599\uff1a{$topics.details.ext_14.url}\n")),(0,r.kt)("h2",{id:"\u95a2\u9023faq"},"\u95a2\u9023FAQ"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ja/docs/faq/can-i-customize-my-thank-you-e-mail/"},"\u304a\u793c\u30e1\u30fc\u30eb\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3067\u304d\u307e\u3059\u304b\uff1f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ja/docs/reference/mail-variables/#inquiryinquiry_contact_simple/"},"\u30e1\u30c3\u30bb\u30fc\u30b8\u3072\u306a\u5f62\u306b\u5229\u7528\u3067\u304d\u308b\u5909\u6570\u4e00\u89a7")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ja/docs/faq/how-can-i-change-the-content-of-the-notification-e-mail-for-each-form/"},"\u30d5\u30a9\u30fc\u30e0\u6bce\u306b\u7ba1\u7406\u8005\u5b9b\u901a\u77e5\u30e1\u30fc\u30eb\u306e\u5185\u5bb9\u3092\u5909\u3048\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u3059\u304b\uff1f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ja/docs/faq/how-do-i-include-inquiry-details-in-the-thankyou-email/"},"\u554f\u3044\u5408\u308f\u305b\u306e\u304a\u793c\u30e1\u30fc\u30eb\u306b\u3001\u304a\u5ba2\u69d8\u304c\u5165\u529b\u3057\u305f\u5185\u5bb9\u3092\u8ee2\u8f09\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u3059\u304b\uff1f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ja/docs/faq/how-do-i-include-user-details-in-the-thankyou-email/"},"\u554f\u3044\u5408\u308f\u305b\u306e\u304a\u793c\u30e1\u30fc\u30eb\u306b\u3001\u30ed\u30b0\u30a4\u30f3\u30e6\u30fc\u30b6\u30fc\u306e\u60c5\u5831\u3092\u8ee2\u8f09\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u3059\u304b\uff1f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ja/docs/faq/how-do-i-display-inquiry-numbers-in-thankyou-emails-and-notifications/"},"\u304a\u793c\u30e1\u30fc\u30eb\u3084\u901a\u77e5\u30e1\u30fc\u30eb\u306b\u554f\u3044\u5408\u308f\u305bNo\u3092\u8868\u793a\u3055\u305b\u305f\u3044\u306e\u3067\u3059\u304c\u3067\u304d\u307e\u3059\u304b\uff1f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ja/docs/faq/how-can-i-change-the-destination-of-the-email-recipients-depending-on-the-item-choices/"},"\u9805\u76ee\u306e\u9078\u629e\u80a2\u306b\u3088\u3063\u3066\u914d\u4fe1\u5148\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u5909\u3048\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u3059\u304b\uff1f"))))}m.isMDXComponent=!0}}]);