"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[8012],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),l=u(r),d=o,y=l["".concat(c,".").concat(d)]||l[d]||p[d]||a;return r?n.createElement(y,i(i({ref:t},f),{},{components:r})):n.createElement(y,i({ref:t},f))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},13433:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294);function o(e){let{faqs:t=[]}=e;if(0===(Array.isArray(t)?t.filter((e=>e.question&&e.answer)):[]).length)return null;const r={"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))},o=JSON.stringify(r,null,2);return n.createElement("script",{type:"application/ld+json"},o)}},64307:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>f});var n=r(87462),o=(r(67294),r(3905)),a=r(13433);const i={title:"Can you provide TLS certificates for front-end servers that I have set up on my own?",description:"Unfortunately, we are unable to obtain and provide TLS certificates for front-end servers that have been set up independently.",category:"tls"},s=void 0,c={unversionedId:"faq/can-you-provide-tls-certificates-for-my-own-frontend-servers",id:"faq/can-you-provide-tls-certificates-for-my-own-frontend-servers",title:"Can you provide TLS certificates for front-end servers that I have set up on my own?",description:"Unfortunately, we are unable to obtain and provide TLS certificates for front-end servers that have been set up independently.",source:"@site/docs/faq/can-you-provide-tls-certificates-for-my-own-frontend-servers.mdx",sourceDirName:"faq",slug:"/faq/can-you-provide-tls-certificates-for-my-own-frontend-servers",permalink:"/docs/faq/can-you-provide-tls-certificates-for-my-own-frontend-servers",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/can-you-provide-tls-certificates-for-my-own-frontend-servers.mdx",tags:[],version:"current",frontMatter:{title:"Can you provide TLS certificates for front-end servers that I have set up on my own?",description:"Unfortunately, we are unable to obtain and provide TLS certificates for front-end servers that have been set up independently.",category:"tls"},sidebar:"faqSidebar",previous:{title:"Can you audit my security checklist? (for clients based in Japan)",permalink:"/docs/faq/can-you-audit-my-security-checklist"},next:{title:"Can you send me the findings from your vulnerability assessment?",permalink:"/docs/faq/can-you-send-me-your-vulnerability-assessment-findings"}},u={},f=[],l={toc:f},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,{faqs:[{question:"Can you provide TLS certificates for front-end servers that I have set up on my own?",answer:"Unfortunately, we are unable to obtain and provide TLS certificates for front-end servers that have been set up independently."}],mdxType:"StructuredDataFaqs"}),(0,o.kt)("p",null,"Unfortunately, we are unable to obtain and provide TLS certificates for front-end servers that have been set up independently. In such cases, you will need to prepare your own TLS certificates as well. We apologize for any inconvenience this may cause."))}d.isMDXComponent=!0}}]);