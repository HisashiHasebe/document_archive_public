"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[77834],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(r),l=o,m=p["".concat(c,".").concat(l)]||p[l]||f[l]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=l;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},13433:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294);function o(e){let{faqs:t=[]}=e;if(0===(Array.isArray(t)?t.filter((e=>e.question&&e.answer)):[]).length)return null;const r={"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))},o=JSON.stringify(r,null,2);return n.createElement("script",{type:"application/ld+json"},o)}},1662:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=r(87462),o=(r(67294),r(3905)),a=r(13433);const i={title:"\u30e1\u30fc\u30eb\u9001\u4fe1\u306e\u6599\u91d1\u306fSendGrid\u3068\u5951\u7d04\u3057\u3066\u3044\u3066\u3082\u767a\u751f\u3057\u307e\u3059\u304b\uff1f",description:"Sendgrid\u306f\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3\u3067\u30e1\u30fc\u30eb\u3092\u9001\u4fe1\u3059\u308b\u305f\u3081\u5229\u7528\u3059\u308b\u3082\u306e\u306b\u306a\u308a\u307e\u3059\u306e\u3067\u3001SendGrid\u3068\u5951\u7d04\u30fb\u63a5\u7d9a\u3057\u3066\u3044\u3066\u3082Kuroco\u306e\u30e1\u30fc\u30eb\u9001\u4fe1\u306e\u6599\u91d1\u306f\u5f15\u304d\u7d9a\u304d\u767a\u751f\u3057\u307e\u3059\u3002",category:"contracts"},s=void 0,c={unversionedId:"faq/do-i-have-to-pay-for-sending-emails-even-if-i-use-sendgrid",id:"faq/do-i-have-to-pay-for-sending-emails-even-if-i-use-sendgrid",title:"\u30e1\u30fc\u30eb\u9001\u4fe1\u306e\u6599\u91d1\u306fSendGrid\u3068\u5951\u7d04\u3057\u3066\u3044\u3066\u3082\u767a\u751f\u3057\u307e\u3059\u304b\uff1f",description:"Sendgrid\u306f\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3\u3067\u30e1\u30fc\u30eb\u3092\u9001\u4fe1\u3059\u308b\u305f\u3081\u5229\u7528\u3059\u308b\u3082\u306e\u306b\u306a\u308a\u307e\u3059\u306e\u3067\u3001SendGrid\u3068\u5951\u7d04\u30fb\u63a5\u7d9a\u3057\u3066\u3044\u3066\u3082Kuroco\u306e\u30e1\u30fc\u30eb\u9001\u4fe1\u306e\u6599\u91d1\u306f\u5f15\u304d\u7d9a\u304d\u767a\u751f\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/faq/do-i-have-to-pay-for-sending-emails-even-if-i-use-sendgrid.mdx",sourceDirName:"faq",slug:"/faq/do-i-have-to-pay-for-sending-emails-even-if-i-use-sendgrid",permalink:"/ja/docs/faq/do-i-have-to-pay-for-sending-emails-even-if-i-use-sendgrid",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/do-i-have-to-pay-for-sending-emails-even-if-i-use-sendgrid.mdx",tags:[],version:"current",frontMatter:{title:"\u30e1\u30fc\u30eb\u9001\u4fe1\u306e\u6599\u91d1\u306fSendGrid\u3068\u5951\u7d04\u3057\u3066\u3044\u3066\u3082\u767a\u751f\u3057\u307e\u3059\u304b\uff1f",description:"Sendgrid\u306f\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3\u3067\u30e1\u30fc\u30eb\u3092\u9001\u4fe1\u3059\u308b\u305f\u3081\u5229\u7528\u3059\u308b\u3082\u306e\u306b\u306a\u308a\u307e\u3059\u306e\u3067\u3001SendGrid\u3068\u5951\u7d04\u30fb\u63a5\u7d9a\u3057\u3066\u3044\u3066\u3082Kuroco\u306e\u30e1\u30fc\u30eb\u9001\u4fe1\u306e\u6599\u91d1\u306f\u5f15\u304d\u7d9a\u304d\u767a\u751f\u3057\u307e\u3059\u3002",category:"contracts"},sidebar:"faqSidebar",previous:{title:"\u8106\u5f31\u6027\u691c\u67fb\u306e\u30a8\u30d3\u30c7\u30f3\u30b9\u3092\u63d0\u4f9b\u3057\u3066\u3082\u3089\u3046\u3053\u3068\u306f\u3067\u304d\u307e\u3059\u304b\uff1f",permalink:"/ja/docs/faq/can-you-send-me-your-vulnerability-assessment-findings"},next:{title:"\u9759\u7684\u30d5\u30a1\u30a4\u30eb\u3092\u30b8\u30a7\u30cd\u30ec\u30fc\u30c8\u3057\u305f\u3044\u5834\u5408\u3001Kuroco\u306e\u30a4\u30f3\u30d5\u30e9\u3068\u306f\u5225\u306e\u30b5\u30fc\u30d0\u30fc\u306f\u5fc5\u8981\u306b\u306a\u308a\u307e\u3059\u304b\uff1f",permalink:"/ja/docs/faq/do-i-need-a-production-server-separate-from-kurocos-infrastructure-to-generate-static-files"}},d={},u=[],p={toc:u},f="wrapper";function l(e){let{components:t,...r}=e;return(0,o.kt)(f,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,{faqs:[{question:"\u30e1\u30fc\u30eb\u9001\u4fe1\u306e\u6599\u91d1\u306fSendGrid\u3068\u5951\u7d04\u3057\u3066\u3044\u3066\u3082\u767a\u751f\u3057\u307e\u3059\u304b\uff1f",answer:"Sendgrid\u306f\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3\u3067\u30e1\u30fc\u30eb\u3092\u9001\u4fe1\u3059\u308b\u305f\u3081\u5229\u7528\u3059\u308b\u3082\u306e\u306b\u306a\u308a\u307e\u3059\u306e\u3067\u3001SendGrid\u3068\u5951\u7d04\u30fb\u63a5\u7d9a\u3057\u3066\u3044\u3066\u3082Kuroco\u306e\u30e1\u30fc\u30eb\u9001\u4fe1\u306e\u6599\u91d1\u306f\u5f15\u304d\u7d9a\u304d\u767a\u751f\u3057\u307e\u3059\u3002"}],mdxType:"StructuredDataFaqs"}),(0,o.kt)("p",null,"Sendgrid\u306f\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3\u3067\u30e1\u30fc\u30eb\u3092\u9001\u4fe1\u3059\u308b\u305f\u3081\u5229\u7528\u3059\u308b\u3082\u306e\u306b\u306a\u308a\u307e\u3059\u306e\u3067\u3001\nSendGrid\u3068\u5951\u7d04\u30fb\u63a5\u7d9a\u3057\u3066\u3044\u3066\u3082Kuroco\u306e\u30e1\u30fc\u30eb\u9001\u4fe1\u306e\u6599\u91d1\u306f\u5f15\u304d\u7d9a\u304d\u767a\u751f\u3057\u307e\u3059\u3002  "),(0,o.kt)("p",null,"\u6599\u91d1\u4f53\u7cfb\u306f\u4e0b\u8a18\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002  "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/6fa4e8983fdf655038c4fb88e0bb9a16.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/6fa4e8983fdf655038c4fb88e0bb9a16.png",alt:"Image (fetched from Gyazo)"}),"\n\u53c2\u8003: ",(0,o.kt)("a",{parentName:"p",href:"https://hisashihasebe.github.io/document_archive_public/202401/files/sheets/ja/kuroco_salessheet.pdf"},"Kuroco\u8aac\u660e\u8cc7\u6599 P.18")))}l.isMDXComponent=!0}}]);