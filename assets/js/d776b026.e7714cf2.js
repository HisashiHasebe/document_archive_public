"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[30989],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>y});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},f=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),d=p(r),u=i,y=d["".concat(c,".").concat(u)]||d[u]||l[u]||o;return r?n.createElement(y,a(a({ref:t},f),{},{components:r})):n.createElement(y,a({ref:t},f))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},13433:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294);function i(e){let{faqs:t=[]}=e;if(0===(Array.isArray(t)?t.filter((e=>e.question&&e.answer)):[]).length)return null;const r={"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))},i=JSON.stringify(r,null,2);return n.createElement("script",{type:"application/ld+json"},i)}},63247:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>f});var n=r(87462),i=(r(67294),r(3905)),o=r(13433);const a={title:"Can I import TLS certificates into front-end servers provided by Diverta?",description:"we cannot accept imported TLS certificates.If your front-end server has been set up by Diverta, the TLS certificates must also be installed by us.",category:"tls"},s=void 0,c={unversionedId:"faq/can-i-import-tls-certificates-into-frontend-servers-provided-by-diverta",id:"faq/can-i-import-tls-certificates-into-frontend-servers-provided-by-diverta",title:"Can I import TLS certificates into front-end servers provided by Diverta?",description:"we cannot accept imported TLS certificates.If your front-end server has been set up by Diverta, the TLS certificates must also be installed by us.",source:"@site/docs/faq/can-i-import-tls-certificates-into-frontend-servers-provided-by-diverta.mdx",sourceDirName:"faq",slug:"/faq/can-i-import-tls-certificates-into-frontend-servers-provided-by-diverta",permalink:"/docs/faq/can-i-import-tls-certificates-into-frontend-servers-provided-by-diverta",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/can-i-import-tls-certificates-into-frontend-servers-provided-by-diverta.mdx",tags:[],version:"current",frontMatter:{title:"Can I import TLS certificates into front-end servers provided by Diverta?",description:"we cannot accept imported TLS certificates.If your front-end server has been set up by Diverta, the TLS certificates must also be installed by us.",category:"tls"},sidebar:"faqSidebar",previous:{title:"Can I freely modify the order of the content list?",permalink:"/docs/faq/can-i-freely-modify-the-order-of-the-content-list"},next:{title:"Can I modify the display of the content editor screen?",permalink:"/docs/faq/can-i-modify-the-display-of-the-content-editor-screen"}},p={},f=[],d={toc:f},l="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(l,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.Z,{faqs:[{question:"Can I import TLS certificates into front-end servers provided by Diverta?",answer:"we cannot accept imported TLS certificates.If your front-end server has been set up by Diverta, the TLS certificates must also be installed by us."}],mdxType:"StructuredDataFaqs"}),(0,i.kt)("p",null,"Unfortunately, we cannot accept imported TLS certificates.",(0,i.kt)("br",{parentName:"p"}),"\n","If your front-end server has been set up by Diverta, the TLS certificates must also be installed by us."))}u.isMDXComponent=!0}}]);