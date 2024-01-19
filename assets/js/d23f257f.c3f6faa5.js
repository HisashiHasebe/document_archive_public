"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[67340],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},13433:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294);function o(e){let{faqs:t=[]}=e;if(0===(Array.isArray(t)?t.filter((e=>e.question&&e.answer)):[]).length)return null;const n={"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))},o=JSON.stringify(n,null,2);return r.createElement("script",{type:"application/ld+json"},o)}},21743:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905)),a=n(13433);const i={title:"How do I prevent my webpage from appearing in Google and other search engines?",discription:"Prevent your webpages from appearing in Google searches.",category:"howto"},p=void 0,s={unversionedId:"faq/prevent-my-webpage-from-appearing-in-search-engines",id:"faq/prevent-my-webpage-from-appearing-in-search-engines",title:"How do I prevent my webpage from appearing in Google and other search engines?",description:"<StructuredDataFaqs faqs={[",source:"@site/docs/faq/prevent-my-webpage-from-appearing-in-search-engines.mdx",sourceDirName:"faq",slug:"/faq/prevent-my-webpage-from-appearing-in-search-engines",permalink:"/docs/faq/prevent-my-webpage-from-appearing-in-search-engines",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/prevent-my-webpage-from-appearing-in-search-engines.mdx",tags:[],version:"current",frontMatter:{title:"How do I prevent my webpage from appearing in Google and other search engines?",discription:"Prevent your webpages from appearing in Google searches.",category:"howto"},sidebar:"faqSidebar",previous:{title:"Permission Required for Accessing the Internal Network Domain. Which Domains are Utilized?",permalink:"/docs/faq/permission-required-for-accessing-internal-network-which-domain-is-in-use"},next:{title:"404 Not Found error when reloading the page or accessing the URL directly",permalink:"/docs/faq/reloading-the-page-or-accessing-it-directly-will-result-in-404-not-found"}},l={},c=[{value:"<code>robots.txt</code> placement",id:"robotstxt-placement",level:2},{value:"<code>noindex</code> meta tag",id:"noindex-meta-tag",level:2},{value:"More information",id:"more-information",level:2}],u={toc:c},m="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,{faqs:[{question:"How do I prevent my webpage from appearing in Google and other search engines?",answer:"Prevent your webpages from appearing in Google searches."}],mdxType:"StructuredDataFaqs"}),(0,o.kt)("p",null,"You can prevent your webpage from appearing in Google or other search engines in one of two ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Put ",(0,o.kt)("inlineCode",{parentName:"li"},"robots.txt")," in your front-end directory"),(0,o.kt)("li",{parentName:"ul"},"Include a ",(0,o.kt)("inlineCode",{parentName:"li"},"noindex")," meta tag")),(0,o.kt)("h2",{id:"robotstxt-placement"},(0,o.kt)("inlineCode",{parentName:"h2"},"robots.txt")," placement"),(0,o.kt)("p",null,"Move ",(0,o.kt)("inlineCode",{parentName:"p"},"robots.txt")," to your front-end root directory.",(0,o.kt)("br",{parentName:"p"}),"\n","If you are using Nuxt.js, it should be in ",(0,o.kt)("inlineCode",{parentName:"p"},"/static"),"."),(0,o.kt)("h2",{id:"noindex-meta-tag"},(0,o.kt)("inlineCode",{parentName:"h2"},"noindex")," meta tag"),(0,o.kt)("p",null,"Alternatively, insert the meta tag ",(0,o.kt)("inlineCode",{parentName:"p"},'<meta name="robots" content="noindex">')," in the code for your page.\nIf you are using Nuxt.js, paste in the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  head () {\n    return {\n      meta: [\n        { hid: 'robots', name: 'robots', content: 'noindex' }\n      ]\n    }\n  }\n}\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Note: When using the ",(0,o.kt)("inlineCode",{parentName:"p"},"noindex")," tag, make sure your ",(0,o.kt)("inlineCode",{parentName:"p"},"robots.txt")," file is not blocking your page or resource from engine bots/crawlers.")),(0,o.kt)("h2",{id:"more-information"},"More information"),(0,o.kt)("p",null,"For further details, see:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/search/docs/advanced/robots/intro"},"Google Search Central: Introduction to robots.txt")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/search/docs/crawling-indexing/block-indexing"},"Google Search Central: Block Search indexing with noindex")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nuxtjs.org/docs/features/meta-tags-seo/"},"NuxtJS Docs: Meta Tags and SEO"))))}d.isMDXComponent=!0}}]);