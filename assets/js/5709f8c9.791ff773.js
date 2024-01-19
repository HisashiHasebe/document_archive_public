"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[76497],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>m});var n=o(67294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(o),f=i,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||r;return o?n.createElement(m,a(a({ref:t},l),{},{components:o})):n.createElement(m,a({ref:t},l))}));function m(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=o.length,a=new Array(r);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var u=2;u<r;u++)a[u]=o[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}f.displayName="MDXCreateElement"},13433:(e,t,o)=>{o.d(t,{Z:()=>i});var n=o(67294);function i(e){let{faqs:t=[]}=e;if(0===(Array.isArray(t)?t.filter((e=>e.question&&e.answer)):[]).length)return null;const o={"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))},i=JSON.stringify(o,null,2);return n.createElement("script",{type:"application/ld+json"},i)}},55449:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=o(87462),i=(o(67294),o(3905)),r=o(13433);const a={title:"Can I request additions or modifications to the specifications or functions?",description:"Kuroco is open to requests for additional functions and improvements. Although we cannot promise covering all requests, don't hesitate to reach out at [Support] about the functions & specifications you want to see added.",category:"other"},s=void 0,c={unversionedId:"faq/can-i-request-additions-or-modifications-to-the-specifications-or-functions",id:"faq/can-i-request-additions-or-modifications-to-the-specifications-or-functions",title:"Can I request additions or modifications to the specifications or functions?",description:"Kuroco is open to requests for additional functions and improvements. Although we cannot promise covering all requests, don't hesitate to reach out at [Support] about the functions & specifications you want to see added.",source:"@site/docs/faq/can-i-request-additions-or-modifications-to-the-specifications-or-functions.mdx",sourceDirName:"faq",slug:"/faq/can-i-request-additions-or-modifications-to-the-specifications-or-functions",permalink:"/docs/faq/can-i-request-additions-or-modifications-to-the-specifications-or-functions",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/can-i-request-additions-or-modifications-to-the-specifications-or-functions.mdx",tags:[],version:"current",frontMatter:{title:"Can I request additions or modifications to the specifications or functions?",description:"Kuroco is open to requests for additional functions and improvements. Although we cannot promise covering all requests, don't hesitate to reach out at [Support] about the functions & specifications you want to see added.",category:"other"},sidebar:"faqSidebar",previous:{title:"Can I prevent sources entered into the WYSIWYG editor from being automatically converted?",permalink:"/docs/faq/can-i-prevent-sources-entered-into-the-wysiwyg-editor-from-being-automatically-converted"},next:{title:"Can I send HTML or plain text e-mails depending on the recipient's environment?",permalink:"/docs/faq/can-i-send-html-or-plain-text-emails-depending-on-the-recipients-environment"}},u={},l=[{value:"1. Make a priority implementation request (paid)",id:"1-make-a-priority-implementation-request-paid",level:2},{value:"2. Development as a microservice (paid)",id:"2-development-as-a-microservice-paid",level:2},{value:"3. Wait for development (free of charge)",id:"3-wait-for-development-free-of-charge",level:2}],p={toc:l},d="wrapper";function f(e){let{components:t,...o}=e;return(0,i.kt)(d,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(r.Z,{faqs:[{question:"Can I request additions or modifications to the specifications or functions?",answer:"Kuroco is open to requests for additional functions and improvements. Although we cannot promise covering all requests, don't hesitate to reach out at [Support] about the functions & specifications you want to see added."}],mdxType:"StructuredDataFaqs"}),(0,i.kt)("p",null,"Kuroco is open to requests for additional functions and improvements. We offer the following three options for implementation.",(0,i.kt)("br",{parentName:"p"}),"\n","Although we cannot promise covering all requests, don't hesitate to reach out at ",(0,i.kt)("a",{parentName:"p",href:"https://kuroco.zendesk.com/hc/en-us"},"Support")," about the functions & specifications you want to see added."),(0,i.kt)("h2",{id:"1-make-a-priority-implementation-request-paid"},"1. Make a priority implementation request (paid)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We accept implementation requests such as functions development."),(0,i.kt)("li",{parentName:"ul"},"All copyrights and similar will be reserved solely for us."),(0,i.kt)("li",{parentName:"ul"},"The implemented functions will be provided to other Kuroco users as well."),(0,i.kt)("li",{parentName:"ul"},"Please note that the specifications may differ from your request, as we may adjust them for greater versatility.")),(0,i.kt)("h2",{id:"2-development-as-a-microservice-paid"},"2. Development as a microservice (paid)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We will provide an estimate for the implementation of functions as premium support."),(0,i.kt)("li",{parentName:"ul"},"You can implement your company's original functions using Kuroco's API functions."),(0,i.kt)("li",{parentName:"ul"},"Kuroco itself will not be modified but its powerful customization functions allow personalization."),(0,i.kt)("li",{parentName:"ul"},"The copyright and source code for the customized part will also be delivered.")),(0,i.kt)("h2",{id:"3-wait-for-development-free-of-charge"},"3. Wait for development (free of charge)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"By transferring your requests to our system department, you can expect to see this additional feature in the future."),(0,i.kt)("li",{parentName:"ul"},"We cannot promise a deadline for implementation, nor can we promise that it will be implemented. "),(0,i.kt)("li",{parentName:"ul"},"Implemented specifications and priorities will be adjusted at our convenience.")))}f.isMDXComponent=!0}}]);