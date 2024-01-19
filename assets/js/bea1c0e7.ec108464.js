"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[53736],{3905:(e,o,r)=>{r.d(o,{Zo:()=>f,kt:()=>m});var t=r(67294);function n(e,o,r){return o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}function c(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?c(Object(r),!0).forEach((function(o){n(e,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))}))}return e}function i(e,o){if(null==e)return{};var r,t,n=function(e,o){if(null==e)return{};var r,t,n={},c=Object.keys(e);for(t=0;t<c.length;t++)r=c[t],o.indexOf(r)>=0||(n[r]=e[r]);return n}(e,o);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)r=c[t],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var a=t.createContext({}),l=function(e){var o=t.useContext(a),r=o;return e&&(r="function"==typeof e?e(o):s(s({},o),e)),r},f=function(e){var o=l(e.components);return t.createElement(a.Provider,{value:o},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},h=t.forwardRef((function(e,o){var r=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),u=l(r),h=n,m=u["".concat(a,".").concat(h)]||u[h]||p[h]||c;return r?t.createElement(m,s(s({ref:o},f),{},{components:r})):t.createElement(m,s({ref:o},f))}));function m(e,o){var r=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var c=r.length,s=new Array(c);s[0]=h;var i={};for(var a in o)hasOwnProperty.call(o,a)&&(i[a]=o[a]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var l=2;l<c;l++)s[l]=r[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}h.displayName="MDXCreateElement"},13433:(e,o,r)=>{r.d(o,{Z:()=>n});var t=r(67294);function n(e){let{faqs:o=[]}=e;if(0===(Array.isArray(o)?o.filter((e=>e.question&&e.answer)):[]).length)return null;const r={"@context":"https://schema.org","@type":"FAQPage",mainEntity:o.map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))},n=JSON.stringify(r,null,2);return t.createElement("script",{type:"application/ld+json"},n)}},62575:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>f});var t=r(87462),n=(r(67294),r(3905)),c=r(13433);const s={title:"How do I check for JS errors in my PC browser?",description:"You can check for JS errors from the console screen of your browser. The official documentation site of each browser has instructions on how to access the console.",category:"trouble"},i=void 0,a={unversionedId:"faq/how-to-check-for-js-errors-in-a-pc-browser",id:"faq/how-to-check-for-js-errors-in-a-pc-browser",title:"How do I check for JS errors in my PC browser?",description:"You can check for JS errors from the console screen of your browser. The official documentation site of each browser has instructions on how to access the console.",source:"@site/docs/faq/how-to-check-for-js-errors-in-a-pc-browser.mdx",sourceDirName:"faq",slug:"/faq/how-to-check-for-js-errors-in-a-pc-browser",permalink:"/docs/faq/how-to-check-for-js-errors-in-a-pc-browser",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/how-to-check-for-js-errors-in-a-pc-browser.mdx",tags:[],version:"current",frontMatter:{title:"How do I check for JS errors in my PC browser?",description:"You can check for JS errors from the console screen of your browser. The official documentation site of each browser has instructions on how to access the console.",category:"trouble"},sidebar:"faqSidebar",previous:{title:"How do I auto-convert iframes with Kuroco?",permalink:"/docs/faq/how-to-auto-convert-iframes"},next:{title:"How do I generate reports using custom dimensions in Google Analytics?",permalink:"/docs/faq/how-to-generate-reports-using-custom-dimensions"}},l={},f=[{value:"Accessing the browser console screen",id:"accessing-the-browser-console-screen",level:2},{value:"Google Chrome",id:"google-chrome",level:3},{value:"Mozilla Firefox",id:"mozilla-firefox",level:3},{value:"Microsoft Edge",id:"microsoft-edge",level:3}],u={toc:f},p="wrapper";function h(e){let{components:o,...r}=e;return(0,n.kt)(p,(0,t.Z)({},u,r,{components:o,mdxType:"MDXLayout"}),(0,n.kt)(c.Z,{faqs:[{question:"How do I check for JS errors in my PC browser?",answer:"You can check for JS errors from the console screen of your browser. The official documentation site of each browser has instructions on how to access the console."}],mdxType:"StructuredDataFaqs"}),(0,n.kt)("p",null,"You can check for JS errors from the console screen of your browser. The official documentation site of each browser has instructions on how to access the console."),(0,n.kt)("h2",{id:"accessing-the-browser-console-screen"},"Accessing the browser console screen"),(0,n.kt)("h3",{id:"google-chrome"},"Google Chrome"),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"https://developer.chrome.com/docs/devtools/open/"},"Chrome Developers Documentation: Open Chrome DevTools"),".  "),(0,n.kt)("h3",{id:"mozilla-firefox"},"Mozilla Firefox"),(0,n.kt)("p",null,'See "Opening the Web Console" in ',(0,n.kt)("a",{parentName:"p",href:"https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html"},"Firefox Source Docs: Web Console"),". "),(0,n.kt)("h3",{id:"microsoft-edge"},"Microsoft Edge"),(0,n.kt)("p",null,'See "Open the Console" in ',(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/reference#open-the-console"},"Microsoft Documentation: Console features reference"),"."))}h.isMDXComponent=!0}}]);