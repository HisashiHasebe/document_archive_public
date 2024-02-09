"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[66745],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(r),d=a,m=l["".concat(c,".").concat(d)]||l[d]||f[d]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},13433:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294);function a(e){let{faqs:t=[]}=e;if(0===(Array.isArray(t)?t.filter((e=>e.question&&e.answer)):[]).length)return null;const r={"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))},a=JSON.stringify(r,null,2);return n.createElement("script",{type:"application/ld+json"},a)}},43106:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=r(87462),a=(r(67294),r(3905)),o=r(13433);const i={title:"WHOIS\u306b\u3064\u3044\u3066\u6559\u3048\u3066\u304f\u3060\u3055\u3044",description:"WHOIS\u3068\u306f\u3001IP\u30a2\u30c9\u30ec\u30b9\u3084\u30c9\u30e1\u30a4\u30f3\u540d\u306e\u767b\u9332\u8005\u306a\u3069\u306b\u95a2\u3059\u308b\u60c5\u5831\u3092\u3001\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u30e6\u30fc\u30b6\u30fc\u304c\u8ab0\u3067\u3082\u53c2\u7167\u3067\u304d\u308b\u30b5\u30fc\u30d3\u30b9\u3067\u3059\u3002WHOIS\u60c5\u5831\u306f\u4e0b\u8a18\u306e\u30b5\u30a4\u30c8\u3067\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002",category:"other"},s=void 0,c={unversionedId:"faq/what-is-whois",id:"faq/what-is-whois",title:"WHOIS\u306b\u3064\u3044\u3066\u6559\u3048\u3066\u304f\u3060\u3055\u3044",description:"WHOIS\u3068\u306f\u3001IP\u30a2\u30c9\u30ec\u30b9\u3084\u30c9\u30e1\u30a4\u30f3\u540d\u306e\u767b\u9332\u8005\u306a\u3069\u306b\u95a2\u3059\u308b\u60c5\u5831\u3092\u3001\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u30e6\u30fc\u30b6\u30fc\u304c\u8ab0\u3067\u3082\u53c2\u7167\u3067\u304d\u308b\u30b5\u30fc\u30d3\u30b9\u3067\u3059\u3002WHOIS\u60c5\u5831\u306f\u4e0b\u8a18\u306e\u30b5\u30a4\u30c8\u3067\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/faq/what-is-whois.mdx",sourceDirName:"faq",slug:"/faq/what-is-whois",permalink:"/ja/docs/faq/what-is-whois",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/what-is-whois.mdx",tags:[],version:"current",frontMatter:{title:"WHOIS\u306b\u3064\u3044\u3066\u6559\u3048\u3066\u304f\u3060\u3055\u3044",description:"WHOIS\u3068\u306f\u3001IP\u30a2\u30c9\u30ec\u30b9\u3084\u30c9\u30e1\u30a4\u30f3\u540d\u306e\u767b\u9332\u8005\u306a\u3069\u306b\u95a2\u3059\u308b\u60c5\u5831\u3092\u3001\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u30e6\u30fc\u30b6\u30fc\u304c\u8ab0\u3067\u3082\u53c2\u7167\u3067\u304d\u308b\u30b5\u30fc\u30d3\u30b9\u3067\u3059\u3002WHOIS\u60c5\u5831\u306f\u4e0b\u8a18\u306e\u30b5\u30a4\u30c8\u3067\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002",category:"other"},sidebar:"faqSidebar",previous:{title:"\u30aa\u30fc\u30c8\u30ed\u30b0\u30a4\u30f3\u306e\u6709\u52b9\u671f\u9593\u306b\u3064\u3044\u3066\u6559\u3048\u3066\u304f\u3060\u3055\u3044",permalink:"/ja/docs/faq/what-is-the-validity-period-for-auto-logins"},next:{title:"\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u306e\u30b9\u30b1\u30b8\u30e5\u30fc\u30eb\u3092\u6559\u3048\u3066\u304f\u3060\u3055\u3044",permalink:"/ja/docs/faq/what-is-your-update-schedule-like"}},p={},u=[],l={toc:u},f="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(f,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{faqs:[{question:"WHOIS\u306b\u3064\u3044\u3066\u6559\u3048\u3066\u304f\u3060\u3055\u3044",answer:"WHOIS\u3068\u306f\u3001IP\u30a2\u30c9\u30ec\u30b9\u3084\u30c9\u30e1\u30a4\u30f3\u540d\u306e\u767b\u9332\u8005\u306a\u3069\u306b\u95a2\u3059\u308b\u60c5\u5831\u3092\u3001\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u30e6\u30fc\u30b6\u30fc\u304c\u8ab0\u3067\u3082\u53c2\u7167\u3067\u304d\u308b\u30b5\u30fc\u30d3\u30b9\u3067\u3059\u3002WHOIS\u60c5\u5831\u306f\u4e0b\u8a18\u306e\u30b5\u30a4\u30c8\u3067\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"}],mdxType:"StructuredDataFaqs"}),(0,a.kt)("p",null,"WHOIS\u3068\u306f\u3001IP\u30a2\u30c9\u30ec\u30b9\u3084\u30c9\u30e1\u30a4\u30f3\u540d\u306e\u767b\u9332\u8005\u306a\u3069\u306b\u95a2\u3059\u308b\u60c5\u5831\u3092\u3001\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u30e6\u30fc\u30b6\u30fc\u304c\u8ab0\u3067\u3082\u53c2\u7167\u3067\u304d\u308b\u30b5\u30fc\u30d3\u30b9\u3067\u3059\u3002\nWHOIS\u60c5\u5831\u306f\u4e0b\u8a18\u306e\u30b5\u30a4\u30c8\u3067\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://whois.jprs.jp/"},"JPRS WHOIS")),(0,a.kt)("p",null,"\u6ce8\u610f)\nJPRS WHOIS\u306fJP\u30c9\u30e1\u30a4\u30f3\u306e\u5834\u5408\u306b\u5229\u7528\u3067\u304d\u307e\u3059\u3002  "),(0,a.kt)("p",null,"JPRS WHOIS\u3067\u78ba\u8a8d\u3067\u304d\u308b\u3053\u3068\u30fb\u3067\u304d\u306a\u3044\u3053\u3068\u306b\u3064\u3044\u3066\u306f",(0,a.kt)("a",{parentName:"p",href:"https://jprs.jp/about/dom-search/jprs-whois/whois-guide-check.html"},"JPRS WHOIS\u3054\u5229\u7528\u30ac\u30a4\u30c9"),"\u3092\u3054\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"))}d.isMDXComponent=!0}}]);