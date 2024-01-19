"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[7571],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),f=o,h=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},13433:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294);function o(e){let{faqs:t=[]}=e;if(0===(Array.isArray(t)?t.filter((e=>e.question&&e.answer)):[]).length)return null;const r={"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))},o=JSON.stringify(r,null,2);return n.createElement("script",{type:"application/ld+json"},o)}},22490:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905)),a=r(13433);const i={title:"What should I do if the API is not working?",description:"First, please check what kind of response you are getting for your request to the API. Few examples of responses are shown below.",category:"trouble"},s=void 0,l={unversionedId:"faq/what-should-i-do-if-the-api-is-not-working",id:"faq/what-should-i-do-if-the-api-is-not-working",title:"What should I do if the API is not working?",description:"First, please check what kind of response you are getting for your request to the API. Few examples of responses are shown below.",source:"@site/docs/faq/what-should-i-do-if-the-api-is-not-working.mdx",sourceDirName:"faq",slug:"/faq/what-should-i-do-if-the-api-is-not-working",permalink:"/docs/faq/what-should-i-do-if-the-api-is-not-working",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/what-should-i-do-if-the-api-is-not-working.mdx",tags:[],version:"current",frontMatter:{title:"What should I do if the API is not working?",description:"First, please check what kind of response you are getting for your request to the API. Few examples of responses are shown below.",category:"trouble"},sidebar:"faqSidebar",previous:{title:"My images are not displaying in certain browsers. What should I do?",permalink:"/docs/faq/what-should-i-do-if-images-are-not-displayed-in-certain-browsers"},next:{title:"What should I do in case of errors?",permalink:"/docs/faq/what-should-i-do-in-case-of-errors"}},p={},c=[],d={toc:c},u="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,{faqs:[{question:"What should I do if the API is not working?",answer:"First, please check what kind of response you are getting for your request to the API. Few examples of responses are shown below."}],mdxType:"StructuredDataFaqs"}),(0,o.kt)("p",null,"First, please check what kind of response you are getting for your request to the API.",(0,o.kt)("br",{parentName:"p"}),"\n","Few examples of responses are shown below."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"JSON Response"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},'{"errors":["[GW] Malformed API URL"]}')),(0,o.kt)("td",{parentName:"tr",align:"left"},"The URI of the API endpoint is wrong. Please check that the URI is correct.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},'{"errors":["[GW] API using this method and path does not exist"]}')),(0,o.kt)("td",{parentName:"tr",align:"left"},"Method (POST/GET, etc.) is wrong. Please check if Method is correct.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},'{"errors":[{"code":"not_found","message":""}],"x-rcms-request-id":"****"}')),(0,o.kt)("td",{parentName:"tr",align:"left"},"The ID is different or there is no data.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},'{"errors":["[GW] Access Token is required"]}')),(0,o.kt)("td",{parentName:"tr",align:"left"},"It seems that the token is not included in the request for APIs that require a token.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},'{"errors":[{"code":"unprocessable_entity","message":"*****"}],"x-rcms-request-id":"*****"}')),(0,o.kt)("td",{parentName:"tr",align:"left"},"It seems that an error has occurred during some process. Please check the error message.\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Redirected"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The URI of the API endpoint is wrong. Please check if the URI is correct.")))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Please refer to the following page for API error responses.  "),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/reference/error/"},"API error response ")))),(0,o.kt)("p",null,"If you don't know what the error is, please get the HAR file and contact support. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/tutorials/create-a-har-file/"},"How to create HAR file")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kuroco.zendesk.com/hc/en-us"},"Contact Form"))))}f.isMDXComponent=!0}}]);