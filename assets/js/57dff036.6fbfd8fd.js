"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[91050],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(a),d=r,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return a?n.createElement(f,s(s({ref:t},u),{},{components:a})):n.createElement(f,s({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},72757:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const o={title:"What is Jamstack?",category:"TOP",weight:2},s=void 0,i={unversionedId:"about/jamstack",id:"about/jamstack",title:"What is Jamstack?",description:"Jamstack is a web app/architecture that dynamically fetches content as needed and rewrites websites using static HTML as a base. It allows you to design websites that are faster, safer, and easier to extend.",source:"@site/docs/about/jamstack.md",sourceDirName:"about",slug:"/about/jamstack",permalink:"/docs/about/jamstack",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/about/jamstack.md",tags:[],version:"current",frontMatter:{title:"What is Jamstack?",category:"TOP",weight:2}},c={},l=[{value:"The name &quot;Jamstack&quot;",id:"the-name-jamstack",level:2},{value:"Key features",id:"key-features",level:2},{value:"Pre-rendering",id:"pre-rendering",level:3},{value:"Decoupling",id:"decoupling",level:3},{value:"More information",id:"more-information",level:2}],u={toc:l},p="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Jamstack is a web app/architecture that dynamically fetches content as needed and rewrites websites using static HTML as a base. It allows you to design websites that are faster, safer, and easier to extend."),(0,r.kt)("h2",{id:"the-name-jamstack"},'The name "Jamstack"'),(0,r.kt)("p",null,'The name "Jamstack" refers to a technology ',(0,r.kt)("strong",{parentName:"p"},"stack")," that combines ",(0,r.kt)("strong",{parentName:"p"},"J"),"avaScript, ",(0,r.kt)("strong",{parentName:"p"},"A"),"PI, and pre-rendered ",(0,r.kt)("strong",{parentName:"p"},"M"),"arkup. According to Netlify founder Matt Biilmann, one of Jamstack's key features is that it is independent of any particular web server."),(0,r.kt)("h2",{id:"key-features"},"Key features"),(0,r.kt)("p",null,"The two main features of Jamstack are ",(0,r.kt)("strong",{parentName:"p"},"pre-rendering")," and ",(0,r.kt)("strong",{parentName:"p"},"decoupling"),"."),(0,r.kt)("h3",{id:"pre-rendering"},"Pre-rendering"),(0,r.kt)("p",null,"Many Jamstack frameworks use special notations and templates, which are then converted into static HTML when deployed as websites. Unlike conventional web development mechanisms that generate HTML in response to user requests, the ",(0,r.kt)("strong",{parentName:"p"},"pre-rendered")," approach generates assets such as HTML, CSS, JavaScript, and images in advance."),(0,r.kt)("p",null,"Using a CDN enables such static content to be delivered at high speed."),(0,r.kt)("h3",{id:"decoupling"},"Decoupling"),(0,r.kt)("p",null,"Websites built on Jamstack differ from HTML-only sites in that they use JavaScript to communicate with the back-end server and provide dynamic content. Authentication and comment functions, payment, user personalizations, and other areas that generally require dynamic mechanisms are also implemented with JavaScript."),(0,r.kt)("p",null,"The API economy enables developers to implement functionality without complex server-side development. Jamstack leverages APIs to ",(0,r.kt)("strong",{parentName:"p"},"decouple")," technical complexity from the risks involved, thereby increasing the flexibility and portability of your websites."),(0,r.kt)("h2",{id:"more-information"},"More information"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/about/jamstack-website/"},"Differences between Jamstack and conventional websites")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/about/why-jamstack/"},"Pros and cons of using Jamstack")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/about/jamstack-resources/"},"Other resources for learning about Jamstack"))))}m.isMDXComponent=!0}}]);