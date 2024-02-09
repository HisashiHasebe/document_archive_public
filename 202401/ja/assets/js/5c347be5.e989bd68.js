"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[61387],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=c(r),m=o,f=l["".concat(s,".").concat(m)]||l[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[l]="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},13433:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294);function o(e){let{faqs:t=[]}=e;if(0===(Array.isArray(t)?t.filter((e=>e.question&&e.answer)):[]).length)return null;const r={"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))},o=JSON.stringify(r,null,2);return n.createElement("script",{type:"application/ld+json"},o)}},28636:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(87462),o=(r(67294),r(3905)),a=r(13433);const i={title:"Kuroco\u304b\u3089\u9001\u4fe1\u3055\u308c\u308b\u30e1\u30fc\u30eb\u304c\u8ff7\u60d1\u30e1\u30fc\u30eb\u306b\u306a\u3063\u3066\u3057\u307e\u3044\u307e\u3059\u3002\u89e3\u6c7a\u65b9\u6cd5\u3092\u6559\u3048\u3066\u304f\u3060\u3055\u3044\u3002",description:"Kuroco\u304b\u3089\u9001\u4fe1\u3055\u308c\u308b\u30e1\u30fc\u30eb\u304c\u8ff7\u60d1\u30e1\u30fc\u30eb\u306b\u306a\u308b\u7406\u7531\u306f\u8907\u6570\u8003\u3048\u3089\u308c\u307e\u3059\u3002\u539f\u56e01. SPF/DKIM\u30ec\u30b3\u30fc\u30c9\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u306a\u3044\u3002\u539f\u56e02. \u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u7684\u554f\u984c\u4ee5\u5916\u3067\u30b9\u30d1\u30e0\u5224\u5b9a\u3055\u308c\u3066\u3044\u308b\u3002",category:"trouble"},p=void 0,s={unversionedId:"faq/emails-sent-from-kuroco-are-going-to-spam-what-should-i-do",id:"faq/emails-sent-from-kuroco-are-going-to-spam-what-should-i-do",title:"Kuroco\u304b\u3089\u9001\u4fe1\u3055\u308c\u308b\u30e1\u30fc\u30eb\u304c\u8ff7\u60d1\u30e1\u30fc\u30eb\u306b\u306a\u3063\u3066\u3057\u307e\u3044\u307e\u3059\u3002\u89e3\u6c7a\u65b9\u6cd5\u3092\u6559\u3048\u3066\u304f\u3060\u3055\u3044\u3002",description:"Kuroco\u304b\u3089\u9001\u4fe1\u3055\u308c\u308b\u30e1\u30fc\u30eb\u304c\u8ff7\u60d1\u30e1\u30fc\u30eb\u306b\u306a\u308b\u7406\u7531\u306f\u8907\u6570\u8003\u3048\u3089\u308c\u307e\u3059\u3002\u539f\u56e01. SPF/DKIM\u30ec\u30b3\u30fc\u30c9\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u306a\u3044\u3002\u539f\u56e02. \u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u7684\u554f\u984c\u4ee5\u5916\u3067\u30b9\u30d1\u30e0\u5224\u5b9a\u3055\u308c\u3066\u3044\u308b\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/faq/emails-sent-from-kuroco-are-going-to-spam-what-should-i-do.mdx",sourceDirName:"faq",slug:"/faq/emails-sent-from-kuroco-are-going-to-spam-what-should-i-do",permalink:"/ja/docs/faq/emails-sent-from-kuroco-are-going-to-spam-what-should-i-do",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/emails-sent-from-kuroco-are-going-to-spam-what-should-i-do.mdx",tags:[],version:"current",frontMatter:{title:"Kuroco\u304b\u3089\u9001\u4fe1\u3055\u308c\u308b\u30e1\u30fc\u30eb\u304c\u8ff7\u60d1\u30e1\u30fc\u30eb\u306b\u306a\u3063\u3066\u3057\u307e\u3044\u307e\u3059\u3002\u89e3\u6c7a\u65b9\u6cd5\u3092\u6559\u3048\u3066\u304f\u3060\u3055\u3044\u3002",description:"Kuroco\u304b\u3089\u9001\u4fe1\u3055\u308c\u308b\u30e1\u30fc\u30eb\u304c\u8ff7\u60d1\u30e1\u30fc\u30eb\u306b\u306a\u308b\u7406\u7531\u306f\u8907\u6570\u8003\u3048\u3089\u308c\u307e\u3059\u3002\u539f\u56e01. SPF/DKIM\u30ec\u30b3\u30fc\u30c9\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u306a\u3044\u3002\u539f\u56e02. \u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u7684\u554f\u984c\u4ee5\u5916\u3067\u30b9\u30d1\u30e0\u5224\u5b9a\u3055\u308c\u3066\u3044\u308b\u3002",category:"trouble"},sidebar:"faqSidebar",previous:{title:"\u65e5\u4ed8\u306f\u3001\u548c\u66a6\u3068\u897f\u66a6\u306e\u3069\u3061\u3089\u3067\u7ba1\u7406\u3057\u3066\u3044\u307e\u3059\u304b\uff1f",permalink:"/ja/docs/faq/does-kuroco-use-the-japanese-or-western-calendar-system"},next:{title:"API\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u3092\u30b3\u30f3\u30c6\u30f3\u30c4\u30ab\u30c6\u30b4\u30ea\u3067\u7d5e\u308a\u8fbc\u307f\u305f\u3044",permalink:"/ja/docs/faq/filtering-api-responses-by-content-category"}},c={},u=[{value:"\u539f\u56e01. SPF/DKIM\u30ec\u30b3\u30fc\u30c9\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u306a\u3044",id:"\u539f\u56e01-spfdkim\u30ec\u30b3\u30fc\u30c9\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u306a\u3044",level:2},{value:"\u539f\u56e02. \u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u7684\u554f\u984c\u4ee5\u5916\u3067\u30b9\u30d1\u30e0\u5224\u5b9a\u3055\u308c\u3066\u3044\u308b",id:"\u539f\u56e02-\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u7684\u554f\u984c\u4ee5\u5916\u3067\u30b9\u30d1\u30e0\u5224\u5b9a\u3055\u308c\u3066\u3044\u308b",level:2},{value:"\u4e0a\u8a18\u3067\u89e3\u6c7a\u3057\u306a\u3044\u3068\u304d\u306f",id:"\u4e0a\u8a18\u3067\u89e3\u6c7a\u3057\u306a\u3044\u3068\u304d\u306f",level:2},{value:"\u8ff7\u60d1\u30e1\u30fc\u30eb\u306b\u306a\u308b\u53ef\u80fd\u6027\u306e\u3042\u308b\u8a2d\u5b9a\u4f8b\uff08\u53d7\u4fe1\u8005\u5074\u306e\u8a2d\u5b9a\uff09",id:"\u8ff7\u60d1\u30e1\u30fc\u30eb\u306b\u306a\u308b\u53ef\u80fd\u6027\u306e\u3042\u308b\u8a2d\u5b9a\u4f8b\u53d7\u4fe1\u8005\u5074\u306e\u8a2d\u5b9a",level:3}],l={toc:u},d="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,{faqs:[{question:"Kuroco\u304b\u3089\u9001\u4fe1\u3055\u308c\u308b\u30e1\u30fc\u30eb\u304c\u8ff7\u60d1\u30e1\u30fc\u30eb\u306b\u306a\u3063\u3066\u3057\u307e\u3044\u307e\u3059\u3002\u89e3\u6c7a\u65b9\u6cd5\u3092\u6559\u3048\u3066\u304f\u3060\u3055\u3044\u3002",answer:"Kuroco\u304b\u3089\u9001\u4fe1\u3055\u308c\u308b\u30e1\u30fc\u30eb\u304c\u8ff7\u60d1\u30e1\u30fc\u30eb\u306b\u306a\u308b\u7406\u7531\u306f\u8907\u6570\u8003\u3048\u3089\u308c\u307e\u3059\u3002\u539f\u56e01. SPF/DKIM\u30ec\u30b3\u30fc\u30c9\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u306a\u3044\u3002\u539f\u56e02. \u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u7684\u554f\u984c\u4ee5\u5916\u3067\u30b9\u30d1\u30e0\u5224\u5b9a\u3055\u308c\u3066\u3044\u308b\u3002"}],mdxType:"StructuredDataFaqs"}),(0,o.kt)("p",null,"Kuroco\u304b\u3089\u9001\u4fe1\u3055\u308c\u308b\u30e1\u30fc\u30eb\u304c\u8ff7\u60d1\u30e1\u30fc\u30eb\u306b\u306a\u308b\u7406\u7531\u306f\u8907\u6570\u8003\u3048\u3089\u308c\u307e\u3059\u3002"),(0,o.kt)("h2",{id:"\u539f\u56e01-spfdkim\u30ec\u30b3\u30fc\u30c9\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u306a\u3044"},"\u539f\u56e01. SPF/DKIM\u30ec\u30b3\u30fc\u30c9\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u306a\u3044"),(0,o.kt)("p",null,"Kuroco\u304b\u3089\u9001\u4fe1\u3055\u308c\u305f\u30e1\u30fc\u30eb\u304c\u8ff7\u60d1\u30e1\u30fc\u30eb\u306b\u306a\u308b\u4e3b\u306a\u7406\u7531\u306f\u3001SPF/DKIM\u30ec\u30b3\u30fc\u30c9\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u306a\u3044\u3053\u3068\u306b\u3088\u308b\u3082\u306e\u3067\u3059\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","Kuroco\u306fSendGrid\u3068\u3044\u3046\u30e1\u30fc\u30eb\u9001\u4fe1\u30b5\u30fc\u30d3\u30b9\u3092\u5229\u7528\u3057\u3066\u304a\u308a\u307e\u3059\u306e\u3067\u3001\u3053\u3061\u3089\u306e\u8a2d\u5b9a\u3092\u3057\u3066\u3044\u305f\u3060\u304f\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\n\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001Kuroco\u5074\u3067\u7528\u610f\u3057\u3066\u3044\u308bSendGrid\u3092\u5229\u7528\u3067\u304d\u307e\u3059\u304c\u3001\u9001\u4fe1\u5143\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u304c\u56fa\u5b9a\u306b\u306a\u308a\u307e\u3059\u3002"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"-",(0,o.kt)("a",{parentName:"p",href:"/ja/docs/management/sendgrid/"},"SendGrid\u306e\u8a2d\u5b9a\u7b87\u6240"),(0,o.kt)("br",{parentName:"p"}),"\n","-",(0,o.kt)("a",{parentName:"p",href:"https://docs.sendgrid.com/ui/account-and-settings/how-to-set-up-domain-authentication"},"How to set up domain authentication"),(0,o.kt)("br",{parentName:"p"}),"\n","-",(0,o.kt)("a",{parentName:"p",href:"https://sendgrid.kke.co.jp/blog/?p=10883"},"SendGrid\u304b\u3089\u30e1\u30fc\u30eb\u9001\u4fe1\u3059\u308b\u5834\u5408\u306eSPF\u3068DKIM\u306e\u8a8d\u8a3c\u306e\u4ed5\u7d44\u307f \u2013 \u524d\u7de8"),(0,o.kt)("br",{parentName:"p"}),"\n","-",(0,o.kt)("a",{parentName:"p",href:"https://www.ipa.go.jp/security/topics/20120523_spf.html"},"\u306a\u308a\u3059\u307e\u3057\u30e1\u30fc\u30eb\u64b2\u6ec5\u306b\u5411\u3051\u305fSPF\uff08Sender Policy Framework\uff09\u5c0e\u5165\u306e\u624b\u5f15\u304d")," ")),(0,o.kt)("h2",{id:"\u539f\u56e02-\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u7684\u554f\u984c\u4ee5\u5916\u3067\u30b9\u30d1\u30e0\u5224\u5b9a\u3055\u308c\u3066\u3044\u308b"},"\u539f\u56e02. \u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u7684\u554f\u984c\u4ee5\u5916\u3067\u30b9\u30d1\u30e0\u5224\u5b9a\u3055\u308c\u3066\u3044\u308b"),(0,o.kt)("p",null,"SPF/DKIM\u30ec\u30b3\u30fc\u30c9\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u306b\u3082\u95a2\u308f\u3089\u305a\u3001\u8ff7\u60d1\u30e1\u30fc\u30eb\u306b\u306a\u3063\u3066\u3057\u307e\u3046\u5834\u5408\u306b\u306f\u3001\u4ed6\u306e\u8981\u56e0\u3067\u30b9\u30d1\u30e0\u5224\u5b9a\u3055\u308c\u3066\u3044\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002\n\u305d\u306e\u5834\u5408\u306f\u3001\u4ee5\u4e0b\u306e\u4f5c\u696d\u304c\u5fc5\u8981\u306b\u306a\u308a\u307e\u3059\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u30e1\u30fc\u30eb\u306e\u5b9b\u5148\u3092\u7cbe\u67fb\u3059\u308b"),(0,o.kt)("li",{parentName:"ul"},"\u30e1\u30fc\u30eb\u306e\u6587\u9762\u3092\u898b\u76f4\u3059\n\u30e1\u30fc\u30eb\u306e\u5b9b\u5148\u304c\u6b63\u3057\u3044\u304b\uff1f\u307e\u305f\u6b63\u5f0f\u306a\u624b\u7d9a\u304d\u3067\u53d6\u5f97\u3055\u308c\u3066\u3044\u308b\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u304b\uff1f\u30e1\u30fc\u30eb\u306e\u6587\u9762\u306b\u30b9\u30d1\u30e0\u7684\u306a\u6587\u8a00\u304c\u542b\u307e\u308c\u3066\u3044\u306a\u3044\u304b\uff1f\u306a\u3069\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002\n\u30e1\u30fc\u30eb\u306e\u5b9b\u5148\u3092\u7cbe\u67fb\u3059\u308b\u306e\u306b\u3001SendGrid\u304c\u63d0\u4f9b\u3057\u3066\u3044\u308bBounces\u3092\u3054\u5229\u7528\u3044\u305f\u3060\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"-",(0,o.kt)("a",{parentName:"p",href:"https://sendgrid.kke.co.jp/blog/?p=310"},"\u8ff7\u60d1\u30e1\u30fc\u30eb\u5224\u5b9a\u3092\u56de\u907f\u3059\u308b\u306b\u306f\uff1f"),(0,o.kt)("br",{parentName:"p"}),"\n","-",(0,o.kt)("a",{parentName:"p",href:"https://sendgrid.kke.co.jp/docs/Tutorials/A_Transaction_Mail/manage_bounces.html"},"\u30d0\u30a6\u30f3\u30b9\uff08\u30e1\u30fc\u30eb\u306e\u4e0d\u9054\uff09\u3092\u7ba1\u7406\u3059\u308b"),(0,o.kt)("br",{parentName:"p"}),"\n","-",(0,o.kt)("a",{parentName:"p",href:"https://docs.sendgrid.com/ui/sending-email/bounces"},"Bounces"),"  ")),(0,o.kt)("h2",{id:"\u4e0a\u8a18\u3067\u89e3\u6c7a\u3057\u306a\u3044\u3068\u304d\u306f"},"\u4e0a\u8a18\u3067\u89e3\u6c7a\u3057\u306a\u3044\u3068\u304d\u306f"),(0,o.kt)("p",null,"SPF/DKIM\u30ec\u30b3\u30fc\u30c9\u304c\u8a2d\u5b9a\u6e08\u307f\u3067\u3001\u30b9\u30d1\u30e0\u5224\u5b9a\u3055\u308c\u308b\u8981\u56e0\u304c\u30e1\u30fc\u30eb\u5b9b\u5148\u3084\u6587\u9762\u306b\u898b\u3064\u304b\u3089\u306a\u3044\u5834\u5408\u306b\u306f\u3001\u53d7\u4fe1\u8005\u5074\u30fb\u9001\u4fe1\u8005\u5074\u306e\u8a2d\u5b9a\u306b\u8d77\u56e0\u3057\u3066\u3044\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u3053\u308c\u3089\u306f\u5f0a\u793e\u3067\u306e\u8abf\u6574\u306f\u3067\u304d\u307e\u305b\u3093\u306e\u3067\u3001\u304a\u5ba2\u69d8\u5074\u3067\u3054\u78ba\u8a8d\u30fb\u3054\u5bfe\u5fdc\u304f\u3060\u3055\u3044\u307e\u3059\u3088\u3046\u304a\u9858\u3044\u3044\u305f\u3057\u307e\u3059\u3002"),(0,o.kt)("h3",{id:"\u8ff7\u60d1\u30e1\u30fc\u30eb\u306b\u306a\u308b\u53ef\u80fd\u6027\u306e\u3042\u308b\u8a2d\u5b9a\u4f8b\u53d7\u4fe1\u8005\u5074\u306e\u8a2d\u5b9a"},"\u8ff7\u60d1\u30e1\u30fc\u30eb\u306b\u306a\u308b\u53ef\u80fd\u6027\u306e\u3042\u308b\u8a2d\u5b9a\u4f8b\uff08\u53d7\u4fe1\u8005\u5074\u306e\u8a2d\u5b9a\uff09"),(0,o.kt)("p",null,"\u4ee5\u4e0b\u306e\u8a2d\u5b9a\u3092\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306f\u3001\u53d7\u4fe1\u53ef\u80fd\u306a\u3088\u3046\u306b\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u3066\u304a\u8a66\u3057\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"PC\u304b\u3089\u306e\u30e1\u30fc\u30eb\u3092\u53d7\u4fe1\u3057\u306a\u3044"),(0,o.kt)("li",{parentName:"ul"},"HTML\u30e1\u30fc\u30eb\u3092\u53d7\u4fe1\u3057\u306a\u3044"),(0,o.kt)("li",{parentName:"ul"},"\u30ea\u30f3\u30af\u4ed8\u304d\u30e1\u30fc\u30eb\u3092\u53d7\u4fe1\u3057\u306a\u3044")))}m.isMDXComponent=!0}}]);