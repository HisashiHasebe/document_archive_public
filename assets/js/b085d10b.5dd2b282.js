"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[40645],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=a,f=d["".concat(u,".").concat(p)]||d[p]||m[p]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},13433:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294);function a(e){let{faqs:t=[]}=e;if(0===(Array.isArray(t)?t.filter((e=>e.question&&e.answer)):[]).length)return null;const n={"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))},a=JSON.stringify(n,null,2);return r.createElement("script",{type:"application/ld+json"},a)}},14208:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>l});var r=n(87462),a=(n(67294),n(3905)),o=n(13433);const i={title:"Can I use multiple custom domain emails?",description:"If you have a SendGrid account, you can set up SendGrid as the sender for multiple domains.",category:"howto"},s=void 0,u={unversionedId:"faq/can-i-use-more-than-one-unique-e-mail-domain",id:"faq/can-i-use-more-than-one-unique-e-mail-domain",title:"Can I use multiple custom domain emails?",description:"If you have a SendGrid account, you can set up SendGrid as the sender for multiple domains.",source:"@site/docs/faq/can-i-use-more-than-one-unique-e-mail-domain.mdx",sourceDirName:"faq",slug:"/faq/can-i-use-more-than-one-unique-e-mail-domain",permalink:"/docs/faq/can-i-use-more-than-one-unique-e-mail-domain",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/can-i-use-more-than-one-unique-e-mail-domain.mdx",tags:[],version:"current",frontMatter:{title:"Can I use multiple custom domain emails?",description:"If you have a SendGrid account, you can set up SendGrid as the sender for multiple domains.",category:"howto"},sidebar:"faqSidebar",previous:{title:"Can I use KurocoFile images in additional fields?",permalink:"/docs/faq/can-i-use-kurocofiles-images-in-additional-fields"},next:{title:"Can I use my custom domain for the sender address?",permalink:"/docs/faq/can-i-use-my-custom-domain-for-the-sender-address"}},c={},l=[],d={toc:l},m="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{faqs:[{question:"Can I use multiple custom domain emails?",answer:"If you have a SendGrid account, you can set up SendGrid as the sender for multiple domains."}],mdxType:"StructuredDataFaqs"}),(0,a.kt)("p",null,"If you have a SendGrid account, you can set up SendGrid as the sender for multiple domains.  "),(0,a.kt)("p",null,"After setting it up with SendGrid, please set additional domains in Sending Permitted Domains and Email Addresses on the SendGrid setting screen on the Kuroco side.",(0,a.kt)("br",{parentName:"p"}),"\n","You will be able to use them as the sender of replies to inquiries, etc.  "),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/6bbeea6a8180682f826f5ebb6473c34d.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/6bbeea6a8180682f826f5ebb6473c34d.png",alt:"Image from Gyazo"})),(0,a.kt)("p",null,"Please see below for SendGrid.  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/faq/can-i-change-the-senders-email-address/"},"Can I change the sender's e-mail address from 'noreply@kuroco-mail.app' to my own address?")," \xa0"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/tutorials/how-to-link-sendgrid/"},"How to link with SendGrid"))))}p.isMDXComponent=!0}}]);