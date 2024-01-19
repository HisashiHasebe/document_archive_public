"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[45066],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(r),f=n,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return r?a.createElement(m,o(o({ref:t},l),{},{components:r})):a.createElement(m,o({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},13433:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(67294);function n(e){let{faqs:t=[]}=e;if(0===(Array.isArray(t)?t.filter((e=>e.question&&e.answer)):[]).length)return null;const r={"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))},n=JSON.stringify(r,null,2);return a.createElement("script",{type:"application/ld+json"},n)}},46175:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=r(87462),n=(r(67294),r(3905)),i=r(13433);const o={title:"In what order are viewing restrictions applied?",descriptin:"When displaying a page of contents from a particular topic group, the priority of viewing restrictions is as follows.",category:"howto"},s=void 0,c={unversionedId:"faq/in-what-order-are-viewing-restrictions-applied",id:"faq/in-what-order-are-viewing-restrictions-applied",title:"In what order are viewing restrictions applied?",description:"<StructuredDataFaqs faqs={[",source:"@site/docs/faq/in-what-order-are-viewing-restrictions-applied.mdx",sourceDirName:"faq",slug:"/faq/in-what-order-are-viewing-restrictions-applied",permalink:"/docs/faq/in-what-order-are-viewing-restrictions-applied",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/in-what-order-are-viewing-restrictions-applied.mdx",tags:[],version:"current",frontMatter:{title:"In what order are viewing restrictions applied?",descriptin:"When displaying a page of contents from a particular topic group, the priority of viewing restrictions is as follows.",category:"howto"},sidebar:"faqSidebar",previous:{title:'I received an error message that reads "The update process was interrupted due to the possibility of overwriting more recent content. Please try again."',permalink:"/docs/faq/i-received-the-error--update-process-was-interrupted"},next:{title:"Can I verify if a batch process is running?",permalink:"/docs/faq/is-it-possible-to-check-if-a-batch-process-is-running"}},p={},l=[{value:"Priority of browsing restrictions",id:"priority-of-browsing-restrictions",level:2},{value:"Note",id:"note",level:3}],d={toc:l},u="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(i.Z,{faqs:[{question:"In what order are viewing restrictions applied?",answer:"When displaying a page of contents from a particular topic group, the priority of viewing restrictions is as follows."}],mdxType:"StructuredDataFaqs"}),(0,n.kt)("p",null,"When displaying a page of contents from a particular topic group, the priority of viewing restrictions is as follows."),(0,n.kt)("h2",{id:"priority-of-browsing-restrictions"},"Priority of browsing restrictions"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},'"IP address restriction" in [',(0,n.kt)("a",{parentName:"li",href:"/docs/management/api-list/"},"API"),"] -> ","[Security]")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/e60a8e9b7fd53a788edade5a99bcf0cc.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/e60a8e9b7fd53a788edade5a99bcf0cc.png",alt:"Image (fetched from Gyazo)"})),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},'"API request restriction" in ',(0,n.kt)("a",{parentName:"li",href:"/docs/management/content-structure-topics-group/"},"Content structure editor"))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/f377ddba213a38c1848410b4771928a0.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/f377ddba213a38c1848410b4771928a0.png",alt:"Image (fetched from Gyazo)"})),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},'"API request restriction" in ',(0,n.kt)("a",{parentName:"li",href:"/docs/management/content-structure-topics-category/"},"Content category"))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/f8106ac4aec8e9396e4aafadedd5d8fd.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/f8106ac4aec8e9396e4aafadedd5d8fd.png",alt:"Image (fetched from Gyazo)"})),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},'"API request restriction" in ',(0,n.kt)("a",{parentName:"li",href:"/docs/management/content-structure-topics/"},"Content"))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/358e1c12243b8865421f9df256ed3794.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/358e1c12243b8865421f9df256ed3794.png",alt:"Image (fetched from Gyazo)"})),(0,n.kt)("h3",{id:"note"},"Note"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"In the future, we plan to implement IP address restrictions to the admin panel."),(0,n.kt)("li",{parentName:"ul"},'Authentication failure under IP address restriction will result in a "FORBIDDEN" error message.  '),(0,n.kt)("li",{parentName:"ul"},"Since browsing restrictions are based on your Kuroco ID and password, you will be redirected to the login screen when authentication fails.")))}f.isMDXComponent=!0}}]);