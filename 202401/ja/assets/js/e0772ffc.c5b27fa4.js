"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[7922],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>y});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=o.createContext({}),i=function(e){var r=o.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=i(e.components);return o.createElement(s.Provider,{value:r},e.children)},f="mdxType",l={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},m=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),f=i(t),m=n,y=f["".concat(s,".").concat(m)]||f[m]||l[m]||a;return t?o.createElement(y,c(c({ref:r},u),{},{components:t})):o.createElement(y,c({ref:r},u))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=m;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p[f]="string"==typeof e?e:n,c[1]=p;for(var i=2;i<a;i++)c[i]=t[i];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},13433:(e,r,t)=>{t.d(r,{Z:()=>n});var o=t(67294);function n(e){let{faqs:r=[]}=e;if(0===(Array.isArray(r)?r.filter((e=>e.question&&e.answer)):[]).length)return null;const t={"@context":"https://schema.org","@type":"FAQPage",mainEntity:r.map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))},n=JSON.stringify(t,null,2);return o.createElement("script",{type:"application/ld+json"},n)}},8088:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>c,metadata:()=>s,toc:()=>u});var o=t(87462),n=(t(67294),t(3905)),a=t(13433);const c={title:"KurocoFront\u3092Proxy Server\u3092\u901a\u3057\u3066\u5225\u306e\u30b5\u30fc\u30d0\u30fc\u304b\u3089\u4f7f\u3046\u306b\u306f\u3069\u306e\u3088\u3046\u306b\u3059\u308c\u3070\u3088\u3044\u3067\u3059\u304b\uff1f",description:"https://bar.example.com/foo/ \u3067 https://bar.g.kuroco-front.app/foo/ \u306e\u8868\u793a\u3092\u30d7\u30ed\u30ad\u30b7\u30fc\u3092\u901a\u3057\u3066\u8868\u793a\u3055\u305b\u308b\u5834\u5408\u306e\u8a2d\u5b9a\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002",category:"howto"},p=void 0,s={unversionedId:"faq/can-i-access-kurocofront-through-a-proxy-server",id:"faq/can-i-access-kurocofront-through-a-proxy-server",title:"KurocoFront\u3092Proxy Server\u3092\u901a\u3057\u3066\u5225\u306e\u30b5\u30fc\u30d0\u30fc\u304b\u3089\u4f7f\u3046\u306b\u306f\u3069\u306e\u3088\u3046\u306b\u3059\u308c\u3070\u3088\u3044\u3067\u3059\u304b\uff1f",description:"https://bar.example.com/foo/ \u3067 https://bar.g.kuroco-front.app/foo/ \u306e\u8868\u793a\u3092\u30d7\u30ed\u30ad\u30b7\u30fc\u3092\u901a\u3057\u3066\u8868\u793a\u3055\u305b\u308b\u5834\u5408\u306e\u8a2d\u5b9a\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/faq/can-i-access-kurocofront-through-a-proxy-server.mdx",sourceDirName:"faq",slug:"/faq/can-i-access-kurocofront-through-a-proxy-server",permalink:"/ja/docs/faq/can-i-access-kurocofront-through-a-proxy-server",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/can-i-access-kurocofront-through-a-proxy-server.mdx",tags:[],version:"current",frontMatter:{title:"KurocoFront\u3092Proxy Server\u3092\u901a\u3057\u3066\u5225\u306e\u30b5\u30fc\u30d0\u30fc\u304b\u3089\u4f7f\u3046\u306b\u306f\u3069\u306e\u3088\u3046\u306b\u3059\u308c\u3070\u3088\u3044\u3067\u3059\u304b\uff1f",description:"https://bar.example.com/foo/ \u3067 https://bar.g.kuroco-front.app/foo/ \u306e\u8868\u793a\u3092\u30d7\u30ed\u30ad\u30b7\u30fc\u3092\u901a\u3057\u3066\u8868\u793a\u3055\u305b\u308b\u5834\u5408\u306e\u8a2d\u5b9a\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002",category:"howto"},sidebar:"faqSidebar",previous:{title:"SAML\u8a8d\u8a3c\u3092\u4f7f\u7528\u3057\u305f\u30b7\u30f3\u30b0\u30eb\u30b5\u30a4\u30f3\u30aa\u30f3\u3092\u5229\u7528\u3067\u304d\u307e\u3059\u304b",permalink:"/ja/docs/faq/can-I-use-single-sign-on-using-saml"},next:{title:"\u7ba1\u7406\u753b\u9762\u306e\u64cd\u4f5c\u30ed\u30b0\u306f\u78ba\u8a8d\u3067\u304d\u307e\u3059\u304b\uff1f",permalink:"/ja/docs/faq/can-i-access-the-operational-logs-of-the-admin-panel"}},i={},u=[{value:"nginx\u306e\u5834\u5408",id:"nginx\u306e\u5834\u5408",level:3},{value:"Apache2.4\u306emod_proxy\u3092\u5229\u7528\u3059\u308b\u5834\u5408",id:"apache24\u306emod_proxy\u3092\u5229\u7528\u3059\u308b\u5834\u5408",level:3}],f={toc:u},l="wrapper";function m(e){let{components:r,...t}=e;return(0,n.kt)(l,(0,o.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)(a.Z,{faqs:[{question:"KurocoFront\u3092Proxy Server\u3092\u901a\u3057\u3066\u5225\u306e\u30b5\u30fc\u30d0\u30fc\u304b\u3089\u4f7f\u3046\u306b\u306f\u3069\u306e\u3088\u3046\u306b\u3059\u308c\u3070\u3088\u3044\u3067\u3059\u304b\uff1f",answer:"https://bar.example.com/foo/ \u3067 https://bar.g.kuroco-front.app/foo/ \u306e\u8868\u793a\u3092\u30d7\u30ed\u30ad\u30b7\u30fc\u3092\u901a\u3057\u3066\u8868\u793a\u3055\u305b\u308b\u5834\u5408\u306e\u8a2d\u5b9a\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"}],mdxType:"StructuredDataFaqs"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"https://bar.example.com/foo/"),"\u3067",(0,n.kt)("inlineCode",{parentName:"p"},"https://bar.g.kuroco-front.app/foo/"),"\u306e\u8868\u793a\u3092\u30d7\u30ed\u30ad\u30b7\u30fc\u3092\u901a\u3057\u3066\u8868\u793a\u3055\u305b\u308b\u5834\u5408\u306e\u8a2d\u5b9a\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,n.kt)("h3",{id:"nginx\u306e\u5834\u5408"},"nginx\u306e\u5834\u5408"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"location /foo {\n    proxy_pass https://bar.g.kuroco-front.app;\n    proxy_redirect     https://bar.g.kuroco-front.app/foo https://bar.example.com/foo;\n    proxy_set_header   Host bar.g.kuroco-front.app;\n}\n")),(0,n.kt)("h3",{id:"apache24\u306emod_proxy\u3092\u5229\u7528\u3059\u308b\u5834\u5408"},"Apache2.4\u306emod_proxy\u3092\u5229\u7528\u3059\u308b\u5834\u5408"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"ProxyRequests Off\n\nProxyPass /foo https://bar.g.kuroco-front.app/foo\nProxyPassReverse /foo https://bar.g.kuroco-front.app/foo\nProxyPreserveHost Off\n")))}m.isMDXComponent=!0}}]);