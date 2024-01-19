"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[6326],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=o.createContext({}),l=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),f=a,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||n;return r?o.createElement(m,i(i({ref:t},u),{},{components:r})):o.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<n;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},13433:(e,t,r)=>{r.d(t,{Z:()=>a});var o=r(67294);function a(e){let{faqs:t=[]}=e;if(0===(Array.isArray(t)?t.filter((e=>e.question&&e.answer)):[]).length)return null;const r={"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))},a=JSON.stringify(r,null,2);return o.createElement("script",{type:"application/ld+json"},a)}},39456:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var o=r(87462),a=(r(67294),r(3905)),n=r(13433);const i={title:"How to Pay Kuroco Usage Fees",description:"Kuroco usage fees are payable by credit card.",category:"contracts"},c=void 0,s={unversionedId:"faq/how-do-i-pay-the-kuroco-fee",id:"faq/how-do-i-pay-the-kuroco-fee",title:"How to Pay Kuroco Usage Fees",description:"Kuroco usage fees are payable by credit card.",source:"@site/docs/faq/how-do-i-pay-the-kuroco-fee.mdx",sourceDirName:"faq",slug:"/faq/how-do-i-pay-the-kuroco-fee",permalink:"/docs/faq/how-do-i-pay-the-kuroco-fee",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/how-do-i-pay-the-kuroco-fee.mdx",tags:[],version:"current",frontMatter:{title:"How to Pay Kuroco Usage Fees",description:"Kuroco usage fees are payable by credit card.",category:"contracts"},sidebar:"faqSidebar",previous:{title:"How do I obtain TLS certificates for front-end servers provided by Diverta?",permalink:"/docs/faq/how-do-i-obtain-tls-certificates-for-frontend-servers-provided-by-diverta"},next:{title:"How do I prevent duplicate API requests?",permalink:"/docs/faq/how-do-i-prevent-duplicate-api-requests"}},l={},u=[{value:"Payment Methods",id:"payment-methods",level:2},{value:"Other Notices",id:"other-notices",level:2},{value:"Related Documents",id:"related-documents",level:2}],p={toc:u},d="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(n.Z,{faqs:[{question:"How to Pay Kuroco Usage Fees",answer:"Kuroco usage fees are payable by credit card."}],mdxType:"StructuredDataFaqs"}),(0,a.kt)("h2",{id:"payment-methods"},"Payment Methods"),(0,a.kt)("p",null,"Kuroco usage fees are payable by credit card.\nPlease register your credit card from ","[Environment]","->[",(0,a.kt)("a",{parentName:"p",href:"/docs/management/site-payment/"},"Billing"),"]."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/f53cad32ff8d96a0429ef39f80c854c4.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/f53cad32ff8d96a0429ef39f80c854c4.png",alt:"Image from Gyazo"})),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Invoice payment is available only for Japanese companies.\nIf you prefer this option, please contact us through the ",(0,a.kt)("a",{parentName:"p",href:"/docs/about/support/#3-inquiry-form"},"Inquiry Form"),".")),(0,a.kt)("h2",{id:"other-notices"},"Other Notices"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For invoices of less than 50 yen for the billing month, the amount will be carried over to the next month."),(0,a.kt)("li",{parentName:"ul"},"You can obtain receipts from the Kuroco management screen.")),(0,a.kt)("h2",{id:"related-documents"},"Related Documents"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/faq/how-do-i-calculate-my-free-limit/"},"How to calculate the free usage limit for Kuroco fees")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/about/how-do-i-terminate-my-contract/"},"How do I terminate my contract?"))))}f.isMDXComponent=!0}}]);