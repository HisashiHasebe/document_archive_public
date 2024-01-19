"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[59407],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>m});var r=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,r,a=function(e,t){if(null==e)return{};var i,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var i=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),f=l(i),u=a,m=f["".concat(s,".").concat(u)]||f[u]||p[u]||n;return i?r.createElement(m,o(o({ref:t},d),{},{components:i})):r.createElement(m,o({ref:t},d))}));function m(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=i.length,o=new Array(n);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[f]="string"==typeof e?e:a,o[1]=c;for(var l=2;l<n;l++)o[l]=i[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}u.displayName="MDXCreateElement"},13433:(e,t,i)=>{i.d(t,{Z:()=>a});var r=i(67294);function a(e){let{faqs:t=[]}=e;if(0===(Array.isArray(t)?t.filter((e=>e.question&&e.answer)):[]).length)return null;const i={"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))},a=JSON.stringify(i,null,2);return r.createElement("script",{type:"application/ld+json"},a)}},77118:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=i(87462),a=(i(67294),i(3905)),n=i(13433);const o={title:"How do I verify my SSL certificate installation?",description:"You can check your settings using DigiCert's [SSL installation diagnostics tool].",category:"tls"},c=void 0,s={unversionedId:"faq/how-do-i-verify-my-ssl-certificate-installation",id:"faq/how-do-i-verify-my-ssl-certificate-installation",title:"How do I verify my SSL certificate installation?",description:"You can check your settings using DigiCert's [SSL installation diagnostics tool].",source:"@site/docs/faq/how-do-i-verify-my-ssl-certificate-installation.mdx",sourceDirName:"faq",slug:"/faq/how-do-i-verify-my-ssl-certificate-installation",permalink:"/docs/faq/how-do-i-verify-my-ssl-certificate-installation",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/how-do-i-verify-my-ssl-certificate-installation.mdx",tags:[],version:"current",frontMatter:{title:"How do I verify my SSL certificate installation?",description:"You can check your settings using DigiCert's [SSL installation diagnostics tool].",category:"tls"},sidebar:"faqSidebar",previous:{title:"How do I upload files from the front end and associate them with content?",permalink:"/docs/faq/how-do-i-upload-image-and-manage-it"},next:{title:"How do I verify requests that cannot be verified with Swagger UI?",permalink:"/docs/faq/how-do-i-verify-requests-that-cannot-be-verified-with-swagger-ui"}},l={},d=[{value:"Using the SSL certificate checker",id:"using-the-ssl-certificate-checker",level:2},{value:"1. Access the SSL tool page",id:"1-access-the-ssl-tool-page",level:3},{value:"2. Enter your domain in the textbox",id:"2-enter-your-domain-in-the-textbox",level:3},{value:"3. Verify the results",id:"3-verify-the-results",level:3},{value:"4. Verify the certificate expiration date",id:"4-verify-the-certificate-expiration-date",level:3}],f={toc:d},p="wrapper";function u(e){let{components:t,...i}=e;return(0,a.kt)(p,(0,r.Z)({},f,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(n.Z,{faqs:[{question:"How do I verify my SSL certificate installation?",answer:"You can check your settings using DigiCert's [SSL installation diagnostics tool]."}],mdxType:"StructuredDataFaqs"}),(0,a.kt)("p",null,"You can check your settings using DigiCert's ",(0,a.kt)("a",{parentName:"p",href:"https://www.digicert.com/help/"},"SSL installation diagnostics tool"),"."),(0,a.kt)("h2",{id:"using-the-ssl-certificate-checker"},"Using the SSL certificate checker"),(0,a.kt)("h3",{id:"1-access-the-ssl-tool-page"},"1. Access the SSL tool page"),(0,a.kt)("p",null,"Navigate to the ",(0,a.kt)("a",{parentName:"p",href:"https://www.digicert.com/help/"},"SSL installation diagnostics tool")," on DigiCert."),(0,a.kt)("h3",{id:"2-enter-your-domain-in-the-textbox"},"2. Enter your domain in the textbox"),(0,a.kt)("p",null,'Enter the domain you want to check in the "Server Address" field and click ',"[CHECK SERVER]","."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/d91a00bd82623d6d43d138be0092af49.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/d91a00bd82623d6d43d138be0092af49.png",alt:"Image (fetched from Gyazo)"})),(0,a.kt)("h3",{id:"3-verify-the-results"},"3. Verify the results"),(0,a.kt)("p",null,"A green checkmark (see below) indicates that your domain has been validated. "),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/3751ed4dcfbbe046b7a4095c03be15e3.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/3751ed4dcfbbe046b7a4095c03be15e3.png",alt:"Image (fetched from Gyazo)"})),(0,a.kt)("h3",{id:"4-verify-the-certificate-expiration-date"},"4. Verify the certificate expiration date"),(0,a.kt)("p",null,'The SSL certificate expiration date is shown under "TLS Certificate expiration".'),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/3362991892e84667ff7513bcc3409c05.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/3362991892e84667ff7513bcc3409c05.png",alt:"Image (fetched from Gyazo)"})))}u.isMDXComponent=!0}}]);