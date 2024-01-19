"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[4277],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=s,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:s,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13433:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294);function s(e){let{faqs:t=[]}=e;if(0===(Array.isArray(t)?t.filter((e=>e.question&&e.answer)):[]).length)return null;const n={"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))},s=JSON.stringify(n,null,2);return r.createElement("script",{type:"application/ld+json"},s)}},71732:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(87462),s=(n(67294),n(3905)),a=n(13433);const o={title:"Can I disable password reuse?",description:'In the left sidebar menu, select [Environment] -> [Site settings]. Under "Member", enter the number of consecutive generations for which passwords cannot be reused in "Past passwords cannot be used".',category:"security"},i=void 0,c={unversionedId:"faq/can-i-disable-password-reuse",id:"faq/can-i-disable-password-reuse",title:"Can I disable password reuse?",description:'In the left sidebar menu, select [Environment] -> [Site settings]. Under "Member", enter the number of consecutive generations for which passwords cannot be reused in "Past passwords cannot be used".',source:"@site/docs/faq/can-i-disable-password-reuse.mdx",sourceDirName:"faq",slug:"/faq/can-i-disable-password-reuse",permalink:"/docs/faq/can-i-disable-password-reuse",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/can-i-disable-password-reuse.mdx",tags:[],version:"current",frontMatter:{title:"Can I disable password reuse?",description:'In the left sidebar menu, select [Environment] -> [Site settings]. Under "Member", enter the number of consecutive generations for which passwords cannot be reused in "Past passwords cannot be used".',category:"security"},sidebar:"faqSidebar",previous:{title:"Can I deploy to KurocoFront without using GitHub?",permalink:"/docs/faq/can-i-deploy-kurocofront-without-using-github"},next:{title:'Can a site be displayed without "www" on its own domain?',permalink:"/docs/faq/can-i-display-my-site-on-custom-domain-without-www"}},u={},l=[{value:"Input values",id:"input-values",level:2},{value:"Note",id:"note",level:2}],d={toc:l},p="wrapper";function m(e){let{components:t,...n}=e;return(0,s.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(a.Z,{faqs:[{question:"Can I disable password reuse?",answer:"In the left sidebar menu, select [Environment] -> [Site settings]. Under Member, enter the number of consecutive generations for which passwords cannot be reused in Past passwords cannot be used."}],mdxType:"StructuredDataFaqs"}),(0,s.kt)("p",null,"In the left sidebar menu, select ","[Environment]"," -> ","[Site settings]",'. Under "Member", enter the number of consecutive generations for which passwords cannot be reused in "Past passwords cannot be used".'),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/d2c62b76a0c6ee8d17e17cea8c4fd819.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/d2c62b76a0c6ee8d17e17cea8c4fd819.png",alt:"Image from Gyazo"})),(0,s.kt)("h2",{id:"input-values"},"Input values"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"0"),": Feature is not activated. All previous passwords can be used."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"1"),": Checks if the new password is identical to the current password. If so, it will not be accepted."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"2")," or greater: Checks the specified number of previous passwords. If the new password matches any of them, it will not be accepted.")),(0,s.kt)("h2",{id:"note"},"Note"),(0,s.kt)("p",null,"Super users are not subject to this restriction when updating their passwords."))}m.isMDXComponent=!0}}]);