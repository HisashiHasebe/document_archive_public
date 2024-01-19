"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[34253],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},f="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),f=p(r),h=o,u=f["".concat(c,".").concat(h)]||f[h]||l[h]||s;return r?n.createElement(u,a(a({ref:t},d),{},{components:r})):n.createElement(u,a({ref:t},d))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[f]="string"==typeof e?e:o,a[1]=i;for(var p=2;p<s;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},13433:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294);function o(e){let{faqs:t=[]}=e;if(0===(Array.isArray(t)?t.filter((e=>e.question&&e.answer)):[]).length)return null;const r={"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))},o=JSON.stringify(r,null,2);return n.createElement("script",{type:"application/ld+json"},o)}},85218:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var n=r(87462),o=(r(67294),r(3905)),s=r(13433);const a={title:"How do I verify responses in the CDN cache?",description:"Verify HTTP responses using the HAR file or Developer tools. The number displayed in the 'age' field of the response headers is the number of seconds since it was cached.",category:"trouble"},i=void 0,c={unversionedId:"faq/how-do-i-verify-responses-in-the-cdn-cache",id:"faq/how-do-i-verify-responses-in-the-cdn-cache",title:"How do I verify responses in the CDN cache?",description:"Verify HTTP responses using the HAR file or Developer tools. The number displayed in the 'age' field of the response headers is the number of seconds since it was cached.",source:"@site/docs/faq/how-do-i-verify-responses-in-the-cdn-cache.mdx",sourceDirName:"faq",slug:"/faq/how-do-i-verify-responses-in-the-cdn-cache",permalink:"/docs/faq/how-do-i-verify-responses-in-the-cdn-cache",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/how-do-i-verify-responses-in-the-cdn-cache.mdx",tags:[],version:"current",frontMatter:{title:"How do I verify responses in the CDN cache?",description:"Verify HTTP responses using the HAR file or Developer tools. The number displayed in the 'age' field of the response headers is the number of seconds since it was cached.",category:"trouble"},sidebar:"faqSidebar",previous:{title:"How do I verify requests that cannot be verified with Swagger UI?",permalink:"/docs/faq/how-do-i-verify-requests-that-cannot-be-verified-with-swagger-ui"},next:{title:"How do I verify the hash responses used by KurocoFront?",permalink:"/docs/faq/how-do-i-verify-the-hash-responses-used-by-kurocofront"}},p={},d=[{value:"Example",id:"example",level:3}],f={toc:d},l="wrapper";function h(e){let{components:t,...r}=e;return(0,o.kt)(l,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(s.Z,{faqs:[{question:"How do I verify responses in the CDN cache?",answer:"Verify HTTP responses using the HAR file or Developer tools. The number displayed in the 'age' field of the response headers is the number of seconds since it was cached."}],mdxType:"StructuredDataFaqs"}),(0,o.kt)("p",null,"Verify HTTP responses using the HAR file or Developer tools. The number displayed in the 'age' field of the response headers is the number of seconds since it was cached."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/fd6cd7c98dfbf404bba79736745639cb.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/fd6cd7c98dfbf404bba79736745639cb.png",alt:"Image (fetched from Gyazo)"})),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("p",null,"As shown in the above screenshot, an age value of ",(0,o.kt)("inlineCode",{parentName:"p"},"63696")," indicates that the response was cached 17 hours, 31 minutes, and 36 seconds ago."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"See: ",(0,o.kt)("a",{parentName:"p",href:"/docs/faq/how-do-i-create-a-har-file/"},"How do I create a HAR file?")," for details on how to generate a HAR file.")))}h.isMDXComponent=!0}}]);