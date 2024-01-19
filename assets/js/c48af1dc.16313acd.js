"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[61144],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),p=a,m=u["".concat(c,".").concat(p)]||u[p]||f[p]||r;return n?o.createElement(m,i(i({ref:t},d),{},{components:n})):o.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},13433:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(67294);function a(e){let{faqs:t=[]}=e;if(0===(Array.isArray(t)?t.filter((e=>e.question&&e.answer)):[]).length)return null;const n={"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))},a=JSON.stringify(n,null,2);return o.createElement("script",{type:"application/ld+json"},a)}},12485:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var o=n(87462),a=(n(67294),n(3905)),r=n(13433);const i={title:"The multi-language content in the downloaded CSV file is garbled",description:"This could be due to a problem with the read format when opening the CSV file in Microsoft Excel. Please download the CSV file from Kuroco in UTF-8 encoding and open it as a text file to verify its contents.",category:"trouble"},l=void 0,c={unversionedId:"faq/multilanguage-content-in-downloaded-csv-file-is-garbled",id:"faq/multilanguage-content-in-downloaded-csv-file-is-garbled",title:"The multi-language content in the downloaded CSV file is garbled",description:"This could be due to a problem with the read format when opening the CSV file in Microsoft Excel. Please download the CSV file from Kuroco in UTF-8 encoding and open it as a text file to verify its contents.",source:"@site/docs/faq/multilanguage-content-in-downloaded-csv-file-is-garbled.mdx",sourceDirName:"faq",slug:"/faq/multilanguage-content-in-downloaded-csv-file-is-garbled",permalink:"/docs/faq/multilanguage-content-in-downloaded-csv-file-is-garbled",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/multilanguage-content-in-downloaded-csv-file-is-garbled.mdx",tags:[],version:"current",frontMatter:{title:"The multi-language content in the downloaded CSV file is garbled",description:"This could be due to a problem with the read format when opening the CSV file in Microsoft Excel. Please download the CSV file from Kuroco in UTF-8 encoding and open it as a text file to verify its contents.",category:"trouble"},sidebar:"faqSidebar",previous:{title:"Do you have any security measures documentation?",permalink:"/docs/faq/materials-on-security-measures"},next:{title:"My site was diagnosed with a security vulnerability. What should I do?",permalink:"/docs/faq/my-site-was-diagnosed-with-a-security-vulnerability"}},s={},d=[],u={toc:d},f="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(r.Z,{faqs:[{question:"The multi-language content in the downloaded CSV file is garbled",answer:"This could be due to a problem with the read format when opening the CSV file in Microsoft Excel. Please download the CSV file from Kuroco in UTF-8 encoding and open it as a text file to verify its contents."}],mdxType:"StructuredDataFaqs"}),(0,a.kt)("p",null,"This could be due to a problem with the read format when opening the CSV file in Microsoft Excel.",(0,a.kt)("br",{parentName:"p"}),"\n","Please download the CSV file from Kuroco in UTF-8 encoding and open it as a text file to verify its contents.  "),(0,a.kt)("p",null,"You can also verify the data by importing it un UTF-8 encoding with Excel's Get Data function.",(0,a.kt)("br",{parentName:"p"}),"\n","To do so, click ","[Data]"," -> ","[Get Data]"," -> ","[From File]"," -> ","[From Text/CSV]"," and select ",(0,a.kt)("inlineCode",{parentName:"p"},"65001: Unicode (UTF-8)"),' under "File Origin".'),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/8a70c88248c98c1d58342a16b27a37a3.jpg?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/8a70c88248c98c1d58342a16b27a37a3.jpg",alt:"Image (fetched from Gyazo)"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/f10db76cbe18f8fa1373bb2d3d9b8d5e.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/f10db76cbe18f8fa1373bb2d3d9b8d5e.png",alt:"Image (fetched from Gyazo)"}),"\nIf the above method does not resolve the issue, please contact our ",(0,a.kt)("a",{parentName:"p",href:"/docs/about/support/"},"Support Team")," for further assistance."))}p.isMDXComponent=!0}}]);