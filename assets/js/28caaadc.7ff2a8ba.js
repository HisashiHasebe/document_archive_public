"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[72813],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),l=c(t),f=o,m=l["".concat(s,".").concat(f)]||l[f]||d[f]||a;return t?n.createElement(m,i(i({ref:r},p),{},{components:t})):n.createElement(m,i({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var u={};for(var s in r)hasOwnProperty.call(r,s)&&(u[s]=r[s]);u.originalType=e,u[l]="string"==typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},13433:(e,r,t)=>{t.d(r,{Z:()=>o});var n=t(67294);function o(e){let{faqs:r=[]}=e;if(0===(Array.isArray(r)?r.filter((e=>e.question&&e.answer)):[]).length)return null;const t={"@context":"https://schema.org","@type":"FAQPage",mainEntity:r.map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))},o=JSON.stringify(t,null,2);return n.createElement("script",{type:"application/ld+json"},o)}},42906:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>u,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=t(87462),o=(t(67294),t(3905)),a=t(13433);const i={title:"How do I reduce spam inquiries?",description:"If you are receiving a large amount of form spam, you can reduce this problem using reCAPTCHA.",category:"trouble"},u=void 0,s={unversionedId:"faq/how-do-i-reduce-spam-inquiries",id:"faq/how-do-i-reduce-spam-inquiries",title:"How do I reduce spam inquiries?",description:"If you are receiving a large amount of form spam, you can reduce this problem using reCAPTCHA.",source:"@site/docs/faq/how-do-i-reduce-spam-inquiries.mdx",sourceDirName:"faq",slug:"/faq/how-do-i-reduce-spam-inquiries",permalink:"/docs/faq/how-do-i-reduce-spam-inquiries",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/how-do-i-reduce-spam-inquiries.mdx",tags:[],version:"current",frontMatter:{title:"How do I reduce spam inquiries?",description:"If you are receiving a large amount of form spam, you can reduce this problem using reCAPTCHA.",category:"trouble"},sidebar:"faqSidebar",previous:{title:"How do I prevent login ID and password auto-fill on the add/edit member screen?",permalink:"/docs/faq/how-do-i-prevent-login-id-and-password-autofill-on-the-member-editor-screen"},next:{title:"I am using an SSG. How do I reflect contents on the front-end immediately after updating them?",permalink:"/docs/faq/how-do-i-reflect-updated-ssg-contents-on-the-frontend"}},c={},p=[{value:"About reCAPTCHA",id:"about-recaptcha",level:2}],l={toc:p},d="wrapper";function f(e){let{components:r,...t}=e;return(0,o.kt)(d,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,{faqs:[{question:"How do I reduce spam inquiries?",answer:"If you are receiving a large amount of form spam, you can reduce this problem using reCAPTCHA."}],mdxType:"StructuredDataFaqs"}),(0,o.kt)("p",null,"If you are receiving a large amount of form spam, you can reduce this problem using reCAPTCHA."),(0,o.kt)("h2",{id:"about-recaptcha"},"About reCAPTCHA"),(0,o.kt)("p",null,"reCAPTCHA is a free service provided by Google. It protects your website from malicious form submissions by differentiating between data entered by humans and bots."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorials/using-recaptcha/"},"Tutorial: Using reCAPTCHA")," for a detailed guide to setting up this feature."))}f.isMDXComponent=!0}}]);