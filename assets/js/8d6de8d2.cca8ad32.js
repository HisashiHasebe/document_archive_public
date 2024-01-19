"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[26115],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13433:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294);function a(e){let{faqs:t=[]}=e;if(0===(Array.isArray(t)?t.filter((e=>e.question&&e.answer)):[]).length)return null;const n={"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))},a=JSON.stringify(n,null,2);return r.createElement("script",{type:"application/ld+json"},a)}},88520:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var r=n(87462),a=(n(67294),n(3905)),o=n(13433);const s={title:"What URLs cannot be used?",description:"All domains can be used with Kuroco, but we do not recommend Japanese domains because they are browser-dependent.",category:"system"},i=void 0,c={unversionedId:"faq/what-urls-cannot-be-used",id:"faq/what-urls-cannot-be-used",title:"What URLs cannot be used?",description:"All domains can be used with Kuroco, but we do not recommend Japanese domains because they are browser-dependent.",source:"@site/docs/faq/what-urls-cannot-be-used.mdx",sourceDirName:"faq",slug:"/faq/what-urls-cannot-be-used",permalink:"/docs/faq/what-urls-cannot-be-used",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/what-urls-cannot-be-used.mdx",tags:[],version:"current",frontMatter:{title:"What URLs cannot be used?",description:"All domains can be used with Kuroco, but we do not recommend Japanese domains because they are browser-dependent.",category:"system"},sidebar:"faqSidebar",previous:{title:"What types of domains does Kuroco use?",permalink:"/docs/faq/what-types-of-domains-does-kuroco-use"},next:{title:"What vulnerability diagnostic and assessment services do you provide?",permalink:"/docs/faq/what-vulnerability-diagnostic-and-assessment-services-do-you-provide"}},l={},u=[{value:"Note",id:"note",level:2},{value:"Examples",id:"examples",level:3}],d={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{faqs:[{question:"What URLs cannot be used?",answer:"All domains can be used with Kuroco, but we do not recommend Japanese domains because they are browser-dependent."}],mdxType:"StructuredDataFaqs"}),(0,a.kt)("p",null,"All domains can be used with Kuroco, but we do not recommend Japanese domains because they are browser-dependent."),(0,a.kt)("h2",{id:"note"},"Note"),(0,a.kt)("p",null,"Content slugs are not available in Japanese."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/fb39c8119f69b5fbc175f4dfd40a8804.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/fb39c8119f69b5fbc175f4dfd40a8804.png",alt:"Image from Gyazo"})),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("p",null,"While Japanese domains are allowed, they are deprecated and not slug-supported. Below are some examples:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"OK: ",(0,a.kt)("inlineCode",{parentName:"li"},"https://example.com/test")," "),(0,a.kt)("li",{parentName:"ul"},"BAD: ",(0,a.kt)("inlineCode",{parentName:"li"},"https://example.com/\u30c6\u30b9\u30c8")),(0,a.kt)("li",{parentName:"ul"},"OK (not recommended): ",(0,a.kt)("inlineCode",{parentName:"li"},"https://\u3066\u3059\u3068.com/test"),"  "),(0,a.kt)("li",{parentName:"ul"},"BAD: ",(0,a.kt)("inlineCode",{parentName:"li"},"https://\u3066\u3059\u3068.com/\u30c6\u30b9\u30c8"))))}m.isMDXComponent=!0}}]);