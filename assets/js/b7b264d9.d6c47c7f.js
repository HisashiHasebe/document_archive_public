"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[49329],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,d=u["".concat(c,".").concat(m)]||u[m]||f[m]||o;return n?a.createElement(d,s(s({ref:t},p),{},{components:n})):a.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13433:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294);function r(e){let{faqs:t=[]}=e;if(0===(Array.isArray(t)?t.filter((e=>e.question&&e.answer)):[]).length)return null;const n={"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))},r=JSON.stringify(n,null,2);return a.createElement("script",{type:"application/ld+json"},r)}},60864:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),o=n(13433);const s={title:'Can I set my content publishing status to "Unpublish" by default?',description:"Set a value of `close` for the constant `DEFAULT_OPEN_TYPE`.",category:"howto"},i=void 0,c={unversionedId:"faq/can-i-set-the-public-settings-option-to-private-by-default",id:"faq/can-i-set-the-public-settings-option-to-private-by-default",title:'Can I set my content publishing status to "Unpublish" by default?',description:"Set a value of `close` for the constant `DEFAULT_OPEN_TYPE`.",source:"@site/docs/faq/can-i-set-the-public-settings-option-to-private-by-default.mdx",sourceDirName:"faq",slug:"/faq/can-i-set-the-public-settings-option-to-private-by-default",permalink:"/docs/faq/can-i-set-the-public-settings-option-to-private-by-default",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/can-i-set-the-public-settings-option-to-private-by-default.mdx",tags:[],version:"current",frontMatter:{title:'Can I set my content publishing status to "Unpublish" by default?',description:"Set a value of `close` for the constant `DEFAULT_OPEN_TYPE`.",category:"howto"},sidebar:"faqSidebar",previous:{title:"Can I set initial values or placeholders for form items?",permalink:"/docs/faq/can-i-set-initial-value-or-placeholder-fof-form-items"},next:{title:"Can I set the same Slug for multiple contents?",permalink:"/docs/faq/can-i-set-the-same-slug-as-other-content"}},l={},p=[{value:"Accessing the screen",id:"accessing-the-screen",level:2},{value:"Constant value",id:"constant-value",level:2}],u={toc:p},f="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{faqs:[{question:"Can I set my content publishing status to Unpublish by default?",answer:"Set a value of `close` for the constant `DEFAULT_OPEN_TYPE`."}],mdxType:"StructuredDataFaqs"}),(0,r.kt)("p",null,"Yes, you can configure the default content publishing status using ",(0,r.kt)("a",{parentName:"p",href:"/docs/management/constants/"},"constants"),".",(0,r.kt)("br",{parentName:"p"}),"\n","Set ",(0,r.kt)("inlineCode",{parentName:"p"},"DEFAULT_OPEN_TYPE")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"close"),"."),(0,r.kt)("h2",{id:"accessing-the-screen"},"Accessing the screen"),(0,r.kt)("p",null,"In the left sidebar menu, select ","[Environment]"," -> ","[Constants]",". Then, click ","[Add]"," in the upper right corner."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/72010caea655f3a0f357401960ad18e3.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/72010caea655f3a0f357401960ad18e3.png",alt:"Image from Gyazo"})),(0,r.kt)("h2",{id:"constant-value"},"Constant value"),(0,r.kt)("p",null,"Enter the following: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Name: ",(0,r.kt)("inlineCode",{parentName:"li"},"DEFAULT_OPEN_TYPE")),(0,r.kt)("li",{parentName:"ul"},"Value: ",(0,r.kt)("inlineCode",{parentName:"li"},"close"))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/89837c50f13fc230997e1de91288bc36.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/89837c50f13fc230997e1de91288bc36.png",alt:"Image from Gyazo"}),"\nClick ","[Add]",' to save the constant. Now the default publishing status for new contents will be "Unpublished".   '),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/299df62b0b22a9a6cfb23ad97c21f35f.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/299df62b0b22a9a6cfb23ad97c21f35f.png",alt:"Image from Gyazo"})))}m.isMDXComponent=!0}}]);