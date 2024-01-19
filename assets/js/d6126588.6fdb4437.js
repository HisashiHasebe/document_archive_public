"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[64893],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=s(r),u=o,m=h["".concat(c,".").concat(u)]||h[u]||d[u]||n;return r?a.createElement(m,i(i({ref:t},p),{},{components:r})):a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[h]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<n;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},13433:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(67294);function o(e){let{faqs:t=[]}=e;if(0===(Array.isArray(t)?t.filter((e=>e.question&&e.answer)):[]).length)return null;const r={"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))},o=JSON.stringify(r,null,2);return a.createElement("script",{type:"application/ld+json"},o)}},57166:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=r(87462),o=(r(67294),r(3905)),n=r(13433);const i={title:"How do I create a HAR file?",description:"If you are experiencing browser-related problems such as slow display, generate a HAR file to find details about the network requests sent by the browser when the problem occurred.",category:"trouble"},l=void 0,c={unversionedId:"faq/how-do-i-create-a-har-file",id:"faq/how-do-i-create-a-har-file",title:"How do I create a HAR file?",description:"If you are experiencing browser-related problems such as slow display, generate a HAR file to find details about the network requests sent by the browser when the problem occurred.",source:"@site/docs/faq/how-do-i-create-a-har-file.mdx",sourceDirName:"faq",slug:"/faq/how-do-i-create-a-har-file",permalink:"/docs/faq/how-do-i-create-a-har-file",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/how-do-i-create-a-har-file.mdx",tags:[],version:"current",frontMatter:{title:"How do I create a HAR file?",description:"If you are experiencing browser-related problems such as slow display, generate a HAR file to find details about the network requests sent by the browser when the problem occurred.",category:"trouble"},sidebar:"faqSidebar",previous:{title:"I added a parameter to the image URL, but the image is still not cleared from the cache. What should I do?",permalink:"/docs/faq/how-do-i-clear-cached-images"},next:{title:"How do I display inquiry numbers (submission no.) in e-mail notifications?",permalink:"/docs/faq/how-do-i-display-inquiry-numbers-in-thankyou-emails-and-notifications"}},s={},p=[{value:"About HAR files",id:"about-har-files",level:2},{value:"Creating a HAR file",id:"creating-a-har-file",level:2},{value:"Chrome",id:"chrome",level:3},{value:"Firefox",id:"firefox",level:3},{value:"Microsoft Edge",id:"microsoft-edge",level:3},{value:"Note",id:"note",level:2}],h={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(n.Z,{faqs:[{question:"How do I create a HAR file?",answer:"If you are experiencing browser-related problems such as slow display, generate a HAR file to find details about the network requests sent by the browser when the problem occurred."}],mdxType:"StructuredDataFaqs"}),(0,o.kt)("h2",{id:"about-har-files"},"About HAR files"),(0,o.kt)("p",null,"If you are experiencing browser-related problems such as slow display, generate a HAR file to find details about the network requests sent by the browser when the problem occurred."),(0,o.kt)("h2",{id:"creating-a-har-file"},"Creating a HAR file"),(0,o.kt)("h3",{id:"chrome"},"Chrome"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Display the problematic page in Google Chrome."),(0,o.kt)("li",{parentName:"ol"},"Right-click anywhere on the page and select ","[Inspect]"," from the dropdown menu."),(0,o.kt)("li",{parentName:"ol"},"In the panel that appears at the bottom of the screen, click the ","[Network]"," tab."),(0,o.kt)("li",{parentName:"ol"},'Find the round "Record" button in the upper left corner and verify that it is red. If the button is gray, click it once and it will turn red.'),(0,o.kt)("li",{parentName:"ol"},'Check the box next to "Preserve log".  '),(0,o.kt)("li",{parentName:"ol"},'Click the "Clear" button (',(0,o.kt)("img",{parentName:"li",src:"https://img.icons8.com/material-outlined/16/000000/cancel-2.png?width=600","data-zoom-src":"https://img.icons8.com/material-outlined/16/000000/cancel-2.png",alt:"img src"}),") to erase all existing logs."),(0,o.kt)("li",{parentName:"ol"},"Reproduce the problem in question."),(0,o.kt)("li",{parentName:"ol"},"Then, right-click on the list at the bottom of the screen and select ","[Save as HAR with Content]"," to save the file.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/60e2ef41b47602ceb0a47eec92013e14.gif?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/60e2ef41b47602ceb0a47eec92013e14.gif",alt:"fetched from Gyazo"})),(0,o.kt)("h3",{id:"firefox"},"Firefox"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Display the problematic page in Firefox.   "),(0,o.kt)("li",{parentName:"ol"},"Click the hamburger menu icon (\u2630) in the upper right corner of the window and select More tools -> Web developer tools."),(0,o.kt)("li",{parentName:"ol"},"In the panel that appears at the bottom of the screen, click the ","[Network]"," tab, and reproduce the problem.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Note: The recording will start automatically, so execute this action in your browser."))),(0,o.kt)("li",{parentName:"ol"},'Verify that all actions have been generated in the Developer Network panel. Then, right-click anywhere under the "File" column and click ',"[Save all as HAR File]",".")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/aa23641c05617bfcf6e08fcd824be136.gif?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/aa23641c05617bfcf6e08fcd824be136.gif",alt:"fetched from Gyazo"})),(0,o.kt)("h3",{id:"microsoft-edge"},"Microsoft Edge"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Display the problematic page in Microsoft edge. "),(0,o.kt)("li",{parentName:"ol"},"Right-click anywhere on the page and select ","[Inspect]"," from the dropdown menu."),(0,o.kt)("li",{parentName:"ol"},"In the panel that appears at the bottom of the screen, click the ","[Network]"," tab."),(0,o.kt)("li",{parentName:"ol"},'Find the round "Record" button in the upper left corner and verify that it is red. If the button is gray, click it once and it will turn red.'),(0,o.kt)("li",{parentName:"ol"},'Check the box next to "Preserve log".  '),(0,o.kt)("li",{parentName:"ol"},'Click the "Clear" button (',(0,o.kt)("img",{parentName:"li",src:"https://img.icons8.com/material-outlined/16/000000/cancel-2.png?width=600","data-zoom-src":"https://img.icons8.com/material-outlined/16/000000/cancel-2.png",alt:"img src"}),") to erase all existing logs."),(0,o.kt)("li",{parentName:"ol"},"Reproduce the problem in question."),(0,o.kt)("li",{parentName:"ol"},"Then, right-click on the list at the bottom of the screen and select ","[Save all as HAR with Content]"," to save the file.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/22ae15b9cbdb7b6551bb8935eea0c899.gif?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/22ae15b9cbdb7b6551bb8935eea0c899.gif",alt:"fetched from Gyazo"})),(0,o.kt)("h2",{id:"note"},"Note"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Due to due to browser specification changes and updates, browser item names and button positions may differ from the contents shown in this guide.\u3000\u3000"),(0,o.kt)("li",{parentName:"ul"},'For information on how to generate HAR files in other browsers, perform an internet search with the search phrase "generate HAR file in ',"[browser name]",'".'),(0,o.kt)("li",{parentName:"ul"},"Note that HAR files contain personal data."),(0,o.kt)("li",{parentName:"ul"},"When contacting ",(0,o.kt)("a",{parentName:"li",href:"https://kuroco.zendesk.com/"},"Kuroco support"),", include the HAR file as an attachment in your support request.")))}u.isMDXComponent=!0}}]);