"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[66619],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=d(r),f=a,m=c["".concat(p,".").concat(f)]||c[f]||u[f]||i;return r?n.createElement(m,o(o({ref:t},l),{},{components:r})):n.createElement(m,o({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},13433:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294);function a(e){let{faqs:t=[]}=e;if(0===(Array.isArray(t)?t.filter((e=>e.question&&e.answer)):[]).length)return null;const r={"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))},a=JSON.stringify(r,null,2);return n.createElement("script",{type:"application/ld+json"},a)}},63513:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=r(87462),a=(r(67294),r(3905)),i=r(13433);const o={title:"Can I set an expiration date for login passwords?",description:'In the left sidebar menu, select [Environment] -> [Site settings]. Under "Member", enter your desired validity period (days) in "Password expiration days".',category:"security"},s=void 0,p={unversionedId:"faq/can-i-set-an-expiration-date-for-login-passwords",id:"faq/can-i-set-an-expiration-date-for-login-passwords",title:"Can I set an expiration date for login passwords?",description:'In the left sidebar menu, select [Environment] -> [Site settings]. Under "Member", enter your desired validity period (days) in "Password expiration days".',source:"@site/docs/faq/can-i-set-an-expiration-date-for-login-passwords.mdx",sourceDirName:"faq",slug:"/faq/can-i-set-an-expiration-date-for-login-passwords",permalink:"/docs/faq/can-i-set-an-expiration-date-for-login-passwords",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/can-i-set-an-expiration-date-for-login-passwords.mdx",tags:[],version:"current",frontMatter:{title:"Can I set an expiration date for login passwords?",description:'In the left sidebar menu, select [Environment] -> [Site settings]. Under "Member", enter your desired validity period (days) in "Password expiration days".',category:"security"},sidebar:"faqSidebar",previous:{title:"Can I set a login expiration date?",permalink:"/docs/faq/can-i-set-a-login-expiration-date"},next:{title:"Can I set different topic group displays for the user groups?",permalink:"/docs/faq/can-i-set-different-topic-group-displays-for-the-user-groups"}},d={},l=[{value:"Sample input values",id:"sample-input-values",level:2}],c={toc:l},u="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{faqs:[{question:"Can I set an expiration date for login passwords?",answer:"In the left sidebar menu, select [Environment] -> [Site settings]. Under Member, enter your desired validity period (days) in Password expiration days."}],mdxType:"StructuredDataFaqs"}),(0,a.kt)("p",null,"In the left sidebar menu, select ","[Environment]"," -> ","[Site settings]",'. Under "Member", enter your desired validity period (days) in "Password expiration days".'),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/075a8bccbb241ba87bdc183851fc06da.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/075a8bccbb241ba87bdc183851fc06da.png",alt:"Image from Gyazo"})),(0,a.kt)("h2",{id:"sample-input-values"},"Sample input values"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Validity period of 10 days: ",(0,a.kt)("inlineCode",{parentName:"li"},"10")),(0,a.kt)("li",{parentName:"ul"},"Indefinite validity period: ",(0,a.kt)("inlineCode",{parentName:"li"},"0"))),(0,a.kt)("p",null,"By default, the value is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),"."))}f.isMDXComponent=!0}}]);