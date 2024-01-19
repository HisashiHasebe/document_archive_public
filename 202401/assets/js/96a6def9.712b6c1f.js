"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[53445],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),p=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,m=u["".concat(c,".").concat(d)]||u[d]||f[d]||a;return r?o.createElement(m,i(i({ref:t},l),{},{components:r})):o.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},13433:(e,t,r)=>{r.d(t,{Z:()=>n});var o=r(67294);function n(e){let{faqs:t=[]}=e;if(0===(Array.isArray(t)?t.filter((e=>e.question&&e.answer)):[]).length)return null;const r={"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))},n=JSON.stringify(r,null,2);return o.createElement("script",{type:"application/ld+json"},n)}},37169:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=r(87462),n=(r(67294),r(3905)),a=r(13433);const i={title:"Can I use the admin panel with Internet Explorer 11?",description:"The use of Internet Explorer 11 (IE11) with Kuroco's admin panel is deprecated. Although browser versions do not have a major effect due to the way Kuroco's API works, but note that the front-end framework may no longer be supported.",category:"system"},s=void 0,c={unversionedId:"faq/can-i-use-the-admin-panel-with-internet-explorer-11",id:"faq/can-i-use-the-admin-panel-with-internet-explorer-11",title:"Can I use the admin panel with Internet Explorer 11?",description:"The use of Internet Explorer 11 (IE11) with Kuroco's admin panel is deprecated. Although browser versions do not have a major effect due to the way Kuroco's API works, but note that the front-end framework may no longer be supported.",source:"@site/docs/faq/can-i-use-the-admin-panel-with-internet-explorer-11.mdx",sourceDirName:"faq",slug:"/faq/can-i-use-the-admin-panel-with-internet-explorer-11",permalink:"/docs/faq/can-i-use-the-admin-panel-with-internet-explorer-11",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/can-i-use-the-admin-panel-with-internet-explorer-11.mdx",tags:[],version:"current",frontMatter:{title:"Can I use the admin panel with Internet Explorer 11?",description:"The use of Internet Explorer 11 (IE11) with Kuroco's admin panel is deprecated. Although browser versions do not have a major effect due to the way Kuroco's API works, but note that the front-end framework may no longer be supported.",category:"system"},sidebar:"faqSidebar",previous:{title:"Is there any way to reduce API requests when generating pages in Nuxt.js SSG?",permalink:"/docs/faq/can-i-use-nuxt-js-ssg-to-reduce-api-calls"},next:{title:"Can I use third-party GitHub applications?",permalink:"/docs/faq/can-i-use-third-party-github-applications"}},p={},l=[{value:"Background information",id:"background-information",level:2},{value:"Official information from Microsoft",id:"official-information-from-microsoft",level:2}],u={toc:l},f="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(f,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(a.Z,{faqs:[{question:"Can I use the admin panel with Internet Explorer 11?",answer:"The use of Internet Explorer 11 (IE11) with Kuroco's admin panel is deprecated. Although browser versions do not have a major effect due to the way Kuroco's API works, but note that the front-end framework may no longer be supported."}],mdxType:"StructuredDataFaqs"}),(0,n.kt)("p",null,"The use of Internet Explorer 11 (IE11) with Kuroco's admin panel is deprecated. Although browser versions do not have a major effect due to the way Kuroco's API works, but note that the front-end framework may no longer be supported."),(0,n.kt)("p",null,"Current IE11 users should upgrade to the newer ",(0,n.kt)("a",{parentName:"p",href:"https://www.microsoft.com/en-us/edge"},"Microsoft Edge")," or other browsers. Note that IE10 and earlier browser versions are also deprecated."),(0,n.kt)("h2",{id:"background-information"},"Background information"),(0,n.kt)("p",null,"While the Kuroco site may work with IE11, it is not part of the recommended environment because official Microsoft support for major operating systems has already expired. For this reason, we do not perform in-house testing of the software operation, and we may not be able to provide technical assistance for some functions."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/lifecycle/announcements/internet-explorer-11-end-of-support"},"Microsoft Docs | Internet Explorer 11 desktop application ending support for certain operating systems"),"  ")),(0,n.kt)("p",null,"To ensure correct functioning of the software, disable compatibility mode for Internet Explorer and Microsoft Edge."),(0,n.kt)("h2",{id:"official-information-from-microsoft"},"Official information from Microsoft"),(0,n.kt)("p",null,"Below, you can find some official information from Microsoft on the future of Internet Explorer:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://blogs.windows.com/windowsexperience/2021/05/19/the-future-of-internet-explorer-on-windows-10-is-in-microsoft-edge/"},"The future of Internet Explorer on Windows 10 is in Microsoft Edge")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://techcommunity.microsoft.com/t5/microsoft-365-blog/microsoft-365-apps-say-farewell-to-internet-explorer-11-and/ba-p/1591666"},"Microsoft 365 apps say farewell to Internet Explorer 11 and Windows 10 sunsets Microsoft Edge Legacy"))),(0,n.kt)("p",null,"We apologize for any inconvenience this may cause to IE11 users and thank you for your understanding."))}d.isMDXComponent=!0}}]);