"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[46789],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,m=p["".concat(s,".").concat(d)]||p[d]||f[d]||a;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},13433:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294);function o(e){let{faqs:t=[]}=e;if(0===(Array.isArray(t)?t.filter((e=>e.question&&e.answer)):[]).length)return null;const n={"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))},o=JSON.stringify(n,null,2);return r.createElement("script",{type:"application/ld+json"},o)}},51963:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905)),a=n(13433);const i={title:"\u9078\u629e\u80a2\u6bce\u306b\u7d10\u4ed8\u304f\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u4ef6\u6570\u3092\u53d6\u5f97\u3059\u308b\u65b9\u6cd5\u306f\u3042\u308a\u307e\u3059\u304b\uff1f",descrption:"\u53ef\u80fd\u3067\u3059\u3002TopicsGroup::details \u306e\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306bext_config_flg true\u3092\u8a2d\u5b9a\u3057\u3001ext_no_for_count\u306b\u30ab\u30a6\u30f3\u30c8\u3057\u305f\u3044\u9078\u629e\u5f62\u5f0f\u306e\u62e1\u5f35\u756a\u53f7\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",category:"howto"},c=void 0,s={unversionedId:"faq/how-to-get-the-number-of-contents-linked-to-each-option",id:"faq/how-to-get-the-number-of-contents-linked-to-each-option",title:"\u9078\u629e\u80a2\u6bce\u306b\u7d10\u4ed8\u304f\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u4ef6\u6570\u3092\u53d6\u5f97\u3059\u308b\u65b9\u6cd5\u306f\u3042\u308a\u307e\u3059\u304b\uff1f",description:"<StructuredDataFaqs faqs={[",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/faq/how-to-get-the-number-of-contents-linked-to-each-option.mdx",sourceDirName:"faq",slug:"/faq/how-to-get-the-number-of-contents-linked-to-each-option",permalink:"/ja/docs/faq/how-to-get-the-number-of-contents-linked-to-each-option",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/how-to-get-the-number-of-contents-linked-to-each-option.mdx",tags:[],version:"current",frontMatter:{title:"\u9078\u629e\u80a2\u6bce\u306b\u7d10\u4ed8\u304f\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u4ef6\u6570\u3092\u53d6\u5f97\u3059\u308b\u65b9\u6cd5\u306f\u3042\u308a\u307e\u3059\u304b\uff1f",descrption:"\u53ef\u80fd\u3067\u3059\u3002TopicsGroup::details \u306e\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306bext_config_flg true\u3092\u8a2d\u5b9a\u3057\u3001ext_no_for_count\u306b\u30ab\u30a6\u30f3\u30c8\u3057\u305f\u3044\u9078\u629e\u5f62\u5f0f\u306e\u62e1\u5f35\u756a\u53f7\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",category:"howto"},sidebar:"faqSidebar",previous:{title:"\u30ab\u30b9\u30bf\u30e0\u30c7\u30a3\u30e1\u30f3\u30b7\u30e7\u30f3\u3067\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u6570\u5024\u306e\u96c6\u8a08\u7d50\u679c\u3092\u78ba\u8a8d\u3059\u308b\u65b9\u6cd5\u306f\u3042\u308a\u307e\u3059\u304b\uff1f",permalink:"/ja/docs/faq/how-to-generate-reports-using-custom-dimensions"},next:{title:"\u30d5\u30a9\u30fc\u30e0\u306e\u56de\u7b54\u30921\u30e6\u30fc\u30b6\u30fc1\u56de\u307e\u3067\u306b\u3067\u304d\u307e\u3059\u304b\uff1f",permalink:"/ja/docs/faq/how-to-limit-form-responses-to-once-per-user"}},u={},l=[{value:"\u8a2d\u5b9a\u7b87\u6240",id:"\u8a2d\u5b9a\u7b87\u6240",level:2},{value:"JSON\u30ec\u30b9\u30dd\u30f3\u30b9\u306e\u4f8b",id:"json\u30ec\u30b9\u30dd\u30f3\u30b9\u306e\u4f8b",level:2}],p={toc:l},f="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,{faqs:[{question:"\u629e\u80a2\u6bce\u306b\u7d10\u4ed8\u304f\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u4ef6\u6570\u3092\u53d6\u5f97\u3059\u308b\u65b9\u6cd5\u306f\u3042\u308a\u307e\u3059\u304b\uff1f",answer:"\u53ef\u80fd\u3067\u3059\u3002TopicsGroup::details \u306e\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306bext_config_flg true\u3092\u8a2d\u5b9a\u3057\u3001ext_no_for_count\u306b\u30ab\u30a6\u30f3\u30c8\u3057\u305f\u3044\u9078\u629e\u5f62\u5f0f\u306e\u62e1\u5f35\u756a\u53f7\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}],mdxType:"StructuredDataFaqs"}),(0,o.kt)("p",null,"\u306f\u3044\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"TopicsGroup::details")," \u306e\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306b",(0,o.kt)("inlineCode",{parentName:"p"},"ext_config_flg true")," \u3092\u8a2d\u5b9a\u3057\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"ext_no_for_count"),"\u306b\u30ab\u30a6\u30f3\u30c8\u3057\u305f\u3044\u9078\u629e\u5f62\u5f0f\u306e\u62e1\u5f35\u9805\u76ee\u756a\u53f7\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)("h2",{id:"\u8a2d\u5b9a\u7b87\u6240"},"\u8a2d\u5b9a\u7b87\u6240"),(0,o.kt)("p",null,"\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u8a2d\u5b9a\u753b\u9762\u306e\u57fa\u672c\u8a2d\u5b9a\u306e\u7b87\u6240\u3067\u8a2d\u5b9a\u3057\u307e\u3059\u3002\n",(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/a53ea3834e09e94213b69d005b298d52.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/a53ea3834e09e94213b69d005b298d52.png",alt:"Image from Gyazo"})),(0,o.kt)("h2",{id:"json\u30ec\u30b9\u30dd\u30f3\u30b9\u306e\u4f8b"},"JSON\u30ec\u30b9\u30dd\u30f3\u30b9\u306e\u4f8b"),(0,o.kt)("p",null,"\u6307\u5b9a\u3057\u305f\u62e1\u5f35\u756a\u53f7\u306bcount\u306e\u9805\u76ee\u3067\u8ffd\u52a0\u3055\u308c\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errors": [],\n  "messages": [],\n  "details": {\n    {\n      "no": "1",\n      "ext_col_nm": "ext_1",\n      "ext_index": 1,\n     \u30fb\n     \u30fb\n     \u30fb\n      "default_value": "",\n      "count": {\n        "1": 2,\n        "2": 5,\n        "3": 1,\n        "4": 4\n      }\n    }\n  ]\n}\n')))}d.isMDXComponent=!0}}]);