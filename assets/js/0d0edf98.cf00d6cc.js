"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[62852],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>m});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var l=n.createContext({}),c=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=c(t.components);return n.createElement(l.Provider,{value:e},t.children)},s="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),s=c(a),u=r,m=s["".concat(l,".").concat(u)]||s[u]||f[u]||o;return a?n.createElement(m,i(i({ref:e},d),{},{components:a})):n.createElement(m,i({ref:e},d))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,i=new Array(o);i[0]=u;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p[s]="string"==typeof t?t:r,i[1]=p;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},13433:(t,e,a)=>{a.d(e,{Z:()=>r});var n=a(67294);function r(t){let{faqs:e=[]}=t;if(0===(Array.isArray(e)?e.filter((t=>t.question&&t.answer)):[]).length)return null;const a={"@context":"https://schema.org","@type":"FAQPage",mainEntity:e.map((t=>({"@type":"Question",name:t.question,acceptedAnswer:{"@type":"Answer",text:t.answer}})))},r=JSON.stringify(a,null,2);return n.createElement("script",{type:"application/ld+json"},r)}},57928:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),o=a(13433);const i={title:"Can I add or update approval workflow of content(s) via API?",description:"POST the ID of the approval workflow in `approvalflow_id` along with the content.",category:"howto"},p=void 0,l={unversionedId:"faq/can-i-add-or-update-workflow-content-via-api",id:"faq/can-i-add-or-update-workflow-content-via-api",title:"Can I add or update approval workflow of content(s) via API?",description:"POST the ID of the approval workflow in `approvalflow_id` along with the content.",source:"@site/docs/faq/can-i-add-or-update-workflow-content-via-api.mdx",sourceDirName:"faq",slug:"/faq/can-i-add-or-update-workflow-content-via-api",permalink:"/docs/faq/can-i-add-or-update-workflow-content-via-api",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/can-i-add-or-update-workflow-content-via-api.mdx",tags:[],version:"current",frontMatter:{title:"Can I add or update approval workflow of content(s) via API?",description:"POST the ID of the approval workflow in `approvalflow_id` along with the content.",category:"howto"},sidebar:"faqSidebar",previous:{title:"Can I add the _lang parameter in the preview function for secondary languages?",permalink:"/docs/faq/can-i-add-a-_lang-parameter-for-sub-language-in-the-preview-function"},next:{title:"Can I adjust the appearance of the admin panel?",permalink:"/docs/faq/can-i-adjust-the-appearance-of-the-admin-panel"}},c={},d=[{value:"Procedure",id:"procedure",level:2},{value:"More information",id:"more-information",level:2}],s={toc:d},f="wrapper";function u(t){let{components:e,...a}=t;return(0,r.kt)(f,(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{faqs:[{question:"Can I add or update approval workflow of content(s) via API?",answer:"POST the ID of the approval workflow in `approvalflow_id` along with the content."}],mdxType:"StructuredDataFaqs"}),(0,r.kt)("p",null,"Yes, you can add or update the approval workflow of a content using an API endpoint."),(0,r.kt)("h2",{id:"procedure"},"Procedure"),(0,r.kt)("p",null,"First, create an empty workflow with no changes to the content. For a detailed guide on how to do this, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorials/scheduling-updates-for-published-contents/"},"Tutorial: Scheduling updates for published contents"),"."),(0,r.kt)("p",null,"Next, create an endpoint for updating the content with the following settings:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Setting"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Category"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Content")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Model"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Topics, v1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Operation"),(0,r.kt)("td",{parentName:"tr",align:"left"},"update(","*",")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"topics_group_id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(Enter the target topic group ID / content structure ID)")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To create a new content post via API, enter ","[insert]"," instead of ","[update]",' as the "Operation" setting.')),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/214db85748d5b4d2d196189fcb75a27f.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/214db85748d5b4d2d196189fcb75a27f.png",alt:"Image from Gyazo"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/ff2ebd18388b4647ea2eb0d0cc3f1047.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/ff2ebd18388b4647ea2eb0d0cc3f1047.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"In the Swagger UI, try out your endpoint with the content to be updated in the request body."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"[Example Data]","[Example":!0,"Data]":!0},'{\n  "subject": "Kuroco updates - November 2022",\n  "contents": "The official version has been released! For more details, visit our official website.",\n  "open_flg": 1,\n  "ymd": "2022-11-08",\n  "approvalflow_id": 2\n}\n')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Make sure to substitute your own approval workflow ID in the ",(0,r.kt)("inlineCode",{parentName:"p"},'"approvalflow_id": 2'),".")),(0,r.kt)("p",null,"You can verify the content pending for approval in the content list.",(0,r.kt)("br",{parentName:"p"}),"\n","(If you modified the title/subject of the content, the old title will appear in parentheses.)"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/45d24f84007c1437c965818bf8675128.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/45d24f84007c1437c965818bf8675128.png",alt:"Image from Gyazo"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/c2e70cb58b976b973f4c5cd52390e009.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/c2e70cb58b976b973f4c5cd52390e009.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"To publish the content, simply approve the workflow as usual."),(0,r.kt)("h2",{id:"more-information"},"More information"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/management/workflow/"},"User guide: Workflow"))))}u.isMDXComponent=!0}}]);