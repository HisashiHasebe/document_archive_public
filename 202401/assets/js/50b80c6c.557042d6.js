"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[72740],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,h=u["".concat(s,".").concat(d)]||u[d]||g[d]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},13433:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294);function a(e){let{faqs:t=[]}=e;if(0===(Array.isArray(t)?t.filter((e=>e.question&&e.answer)):[]).length)return null;const n={"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))},a=JSON.stringify(n,null,2);return r.createElement("script",{type:"application/ld+json"},a)}},22273:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),o=n(13433);const i={title:"How do I change the display language of the admin panel?",description:"You can switch between display languages using the globe icon in the upper right corner of the screen.",category:"system"},c=void 0,s={unversionedId:"faq/how-do-i-change-the-language-of-the-admin-panel",id:"faq/how-do-i-change-the-language-of-the-admin-panel",title:"How do I change the display language of the admin panel?",description:"You can switch between display languages using the globe icon in the upper right corner of the screen.",source:"@site/docs/faq/how-do-i-change-the-language-of-the-admin-panel.mdx",sourceDirName:"faq",slug:"/faq/how-do-i-change-the-language-of-the-admin-panel",permalink:"/docs/faq/how-do-i-change-the-language-of-the-admin-panel",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/how-do-i-change-the-language-of-the-admin-panel.mdx",tags:[],version:"current",frontMatter:{title:"How do I change the display language of the admin panel?",description:"You can switch between display languages using the globe icon in the upper right corner of the screen.",category:"system"},sidebar:"faqSidebar",previous:{title:"How do I change my domain name?",permalink:"/docs/faq/how-do-i-change-my-domain-name"},next:{title:"How do I check my browser version?",permalink:"/docs/faq/how-do-i-check-my-browser-version"}},l={},p=[],u={toc:p},g="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(g,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{faqs:[{question:"How do I change the display language of the admin panel?",answer:"You can switch between display languages using the globe icon in the upper right corner of the screen."}],mdxType:"StructuredDataFaqs"}),(0,a.kt)("p",null,"You can switch between display languages using the globe icon in the upper right corner of the screen."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/011c2a67bfba4e80a6be3c741c62d501.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/011c2a67bfba4e80a6be3c741c62d501.png",alt:"Image from Gyazo"})))}d.isMDXComponent=!0}}]);