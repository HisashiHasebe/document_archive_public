"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[15141],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(n),d=o,m=l["".concat(s,".").concat(d)]||l[d]||f[d]||r;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[l]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},13433:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294);function o(e){let{faqs:t=[]}=e;if(0===(Array.isArray(t)?t.filter((e=>e.question&&e.answer)):[]).length)return null;const n={"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))},o=JSON.stringify(n,null,2);return a.createElement("script",{type:"application/ld+json"},o)}},58640:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),o=(n(67294),n(3905)),r=n(13433);const i={title:"Can I use basic authentication?",description:"Yes, you can configure basic authentication by inserting the code below into kuroco_front.json",category:"howto"},c=void 0,s={unversionedId:"faq/can-i-use-basic-authentication",id:"faq/can-i-use-basic-authentication",title:"Can I use basic authentication?",description:"Yes, you can configure basic authentication by inserting the code below into kuroco_front.json",source:"@site/docs/faq/can-i-use-basic-authentication.mdx",sourceDirName:"faq",slug:"/faq/can-i-use-basic-authentication",permalink:"/docs/faq/can-i-use-basic-authentication",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/can-i-use-basic-authentication.mdx",tags:[],version:"current",frontMatter:{title:"Can I use basic authentication?",description:"Yes, you can configure basic authentication by inserting the code below into kuroco_front.json",category:"howto"},sidebar:"faqSidebar",previous:{title:"Can I use basic authentication only on the staging site?",permalink:"/docs/faq/can-i-use-basic-authentication-only-on-the-staging-site"},next:{title:"Can I use conversion tracking tags?",permalink:"/docs/faq/can-i-use-conversion-tracking-tags"}},u={},p=[],l={toc:p},f="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(r.Z,{faqs:[{question:"Can I use basic authentication?",answer:"Yes, you can configure basic authentication by inserting the code below into kuroco_front.json"}],mdxType:"StructuredDataFaqs"}),(0,o.kt)("p",null,"Yes, you can configure basic authentication by inserting the code below into ",(0,o.kt)("inlineCode",{parentName:"p"},"kuroco_front.json"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"[kuroco_front.json]","[kuroco_front.json]":!0},'{\n    "basic":["kuroco: kuroco"],\n}\n')),(0,o.kt)("p",null,"Basic authentication will be applied to the front page of the site."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/31c04d0cb8b32a3ea74533cca10fedf2.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/31c04d0cb8b32a3ea74533cca10fedf2.png",alt:"fetched from Gyazo"})),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"To learn more about ",(0,o.kt)("inlineCode",{parentName:"p"},"kuroco_front.json"),", see ","[FAQ: What is kuroco_front.json?]"," (/docs/faq/what-is-kuroco_front_json/).")),(0,o.kt)("p",null,'Note that basic authentication cannot be set for the admin panel. However, you can restrict access to the admin panel by enabling the "Admin panel access restriction (IP Address)" function. In the sidebar menu, click ',"[Environment]"," -> ","[Admin panel]"," and enter the allowed IP address(es) in the corresponding field."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/6770fb679775838836bbde98bbffbe7d.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/6770fb679775838836bbde98bbffbe7d.png",alt:"fetched from Gyazo"})),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"See: ",(0,o.kt)("a",{parentName:"p",href:"/docs/management/management-screen/"},"User guide - Admin panel")," for more information.")))}d.isMDXComponent=!0}}]);