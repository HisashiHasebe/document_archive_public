"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[18450],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=d(n),f=o,m=l["".concat(s,".").concat(f)]||l[f]||u[f]||a;return n?r.createElement(m,c(c({ref:t},p),{},{components:n})):r.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[l]="string"==typeof e?e:o,c[1]=i;for(var d=2;d<a;d++)c[d]=n[d];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},13433:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294);function o(e){let{faqs:t=[]}=e;if(0===(Array.isArray(t)?t.filter((e=>e.question&&e.answer)):[]).length)return null;const n={"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))},o=JSON.stringify(n,null,2);return r.createElement("script",{type:"application/ld+json"},o)}},34425:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>f,frontMatter:()=>c,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905)),a=n(13433);const c={title:"I am using an SSG. How do I reflect contents on the front-end immediately after updating them?",description:"In the [GitHub section of the content editor], select [Link]. Then, click [Update] to save the changes.",category:"howto"},i=void 0,s={unversionedId:"faq/how-do-i-reflect-updated-ssg-contents-on-the-frontend",id:"faq/how-do-i-reflect-updated-ssg-contents-on-the-frontend",title:"I am using an SSG. How do I reflect contents on the front-end immediately after updating them?",description:"In the [GitHub section of the content editor], select [Link]. Then, click [Update] to save the changes.",source:"@site/docs/faq/how-do-i-reflect-updated-ssg-contents-on-the-frontend.mdx",sourceDirName:"faq",slug:"/faq/how-do-i-reflect-updated-ssg-contents-on-the-frontend",permalink:"/docs/faq/how-do-i-reflect-updated-ssg-contents-on-the-frontend",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/how-do-i-reflect-updated-ssg-contents-on-the-frontend.mdx",tags:[],version:"current",frontMatter:{title:"I am using an SSG. How do I reflect contents on the front-end immediately after updating them?",description:"In the [GitHub section of the content editor], select [Link]. Then, click [Update] to save the changes.",category:"howto"},sidebar:"faqSidebar",previous:{title:"How do I reduce spam inquiries?",permalink:"/docs/faq/how-do-i-reduce-spam-inquiries"},next:{title:"How do I restrict the viewing, downloading, and other permissions of PDF files?",permalink:"/docs/faq/how-do-i-restrict-pdf-access-and-download"}},d={},p=[],l={toc:p},u="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,{faqs:[{question:"I am using an SSG. How do I reflect contents on the front-end immediately after updating them?",answer:"In the [GitHub section of the content editor], select [Link]. Then, click [Update] to save the changes."}],mdxType:"StructuredDataFaqs"}),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"/docs/management/content-structure-topics/#github"},"GitHub section of the content editor"),", select ","[Link]",". Then, click ","[Update]"," to save the changes."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/48c879c78c155b09b696521913761499.jpg?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/48c879c78c155b09b696521913761499.jpg",alt:"Image from Gyazo"}),"\nGitHub Actions will be executed on the linked GitHub and reflected on the front-end. The branch of execution is the one you have selected for integration on the ",(0,o.kt)("a",{parentName:"p",href:"/docs/management/github/"},"KurocoFront - GitHub")," screen."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/2c32792c5087a4a08def5fc02e98eac4.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/2c32792c5087a4a08def5fc02e98eac4.png",alt:"Image from Gyazo"})))}f.isMDXComponent=!0}}]);