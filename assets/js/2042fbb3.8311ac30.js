"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[80402],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>h});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(t),f=a,h=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return t?n.createElement(h,c(c({ref:r},u),{},{components:t})):n.createElement(h,c({ref:r},u))}));function h(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=f;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[d]="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=t[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},13433:(e,r,t)=>{t.d(r,{Z:()=>a});var n=t(67294);function a(e){let{faqs:r=[]}=e;if(0===(Array.isArray(r)?r.filter((e=>e.question&&e.answer)):[]).length)return null;const t={"@context":"https://schema.org","@type":"FAQPage",mainEntity:r.map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))},a=JSON.stringify(t,null,2);return n.createElement("script",{type:"application/ld+json"},a)}},81978:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var n=t(87462),a=(t(67294),t(3905)),o=t(13433);const c={title:"When are cached KurocoFiles cleared?",description:"Whenever you upload or delete a file in the KurocoFiles, the corresponding file in the CDN cache folder is cleared.",category:"system"},i=void 0,l={unversionedId:"faq/when-are-cached-kurocofiles-cleared",id:"faq/when-are-cached-kurocofiles-cleared",title:"When are cached KurocoFiles cleared?",description:"Whenever you upload or delete a file in the KurocoFiles, the corresponding file in the CDN cache folder is cleared.",source:"@site/docs/faq/when-are-cached-kurocofiles-cleared.mdx",sourceDirName:"faq",slug:"/faq/when-are-cached-kurocofiles-cleared",permalink:"/docs/faq/when-are-cached-kurocofiles-cleared",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/when-are-cached-kurocofiles-cleared.mdx",tags:[],version:"current",frontMatter:{title:"When are cached KurocoFiles cleared?",description:"Whenever you upload or delete a file in the KurocoFiles, the corresponding file in the CDN cache folder is cleared.",category:"system"},sidebar:"faqSidebar",previous:{title:"What vulnerability diagnostic and assessment services do you provide?",permalink:"/docs/faq/what-vulnerability-diagnostic-and-assessment-services-do-you-provide"},next:{title:"Where can I find a list of API error messages?",permalink:"/docs/faq/where-can-i-find-a-list-of-api-error-messages"}},s={},u=[{value:"Note",id:"note",level:2}],d={toc:u},p="wrapper";function f(e){let{components:r,...t}=e;return(0,a.kt)(p,(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{faqs:[{question:"When are cached KurocoFiles cleared?",answer:"Whenever you upload or delete a file in the KurocoFiles, the corresponding file in the CDN cache folder is cleared."}],mdxType:"StructuredDataFaqs"}),(0,a.kt)("p",null,"Whenever you upload or delete a file in the KurocoFiles, the corresponding file in the CDN cache folder is cleared. The cache clearing usually takes less than 1 second, although it may take up to 10 seconds in some cases."),(0,a.kt)("h2",{id:"note"},"Note"),(0,a.kt)("p",null,"Folders may not be properly cleared from the cache if the folder name contains URL-encoded characters that are not half-width alphanumeric. Therefore, please avoid using any such characters (e.g., Japanese, Korean, Chinese scripts) in your folder names."))}f.isMDXComponent=!0}}]);