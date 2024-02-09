"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[95005],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(r),f=a,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(m,s(s({ref:t},l),{},{components:r})):n.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},13433:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294);function a(e){let{faqs:t=[]}=e;if(0===(Array.isArray(t)?t.filter((e=>e.question&&e.answer)):[]).length)return null;const r={"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))},a=JSON.stringify(r,null,2);return n.createElement("script",{type:"application/ld+json"},a)}},10569:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var n=r(87462),a=(r(67294),r(3905)),o=r(13433);const s={title:"Kuroco\u3067RSS\u3092\u53d6\u5f97\u3059\u308b\u306b\u306f\u3069\u3046\u3057\u305f\u3089\u826f\u3044\u3067\u3059\u304b\uff1f",description:"\u30d0\u30c3\u30c1\u51e6\u7406\u3067\u5b9a\u671f\u7684\u306bRSS\u3092\u53d6\u5f97\u3057\u3001Kuroco\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u306b\u8ffd\u52a0or\u66f4\u65b0\u3059\u308b\u3053\u3068\u3067\u5bfe\u5fdc\u304c\u53ef\u80fd\u3067\u3059\u3002",category:"howto"},i=void 0,c={unversionedId:"faq/how-can-i-get-rss",id:"faq/how-can-i-get-rss",title:"Kuroco\u3067RSS\u3092\u53d6\u5f97\u3059\u308b\u306b\u306f\u3069\u3046\u3057\u305f\u3089\u826f\u3044\u3067\u3059\u304b\uff1f",description:"\u30d0\u30c3\u30c1\u51e6\u7406\u3067\u5b9a\u671f\u7684\u306bRSS\u3092\u53d6\u5f97\u3057\u3001Kuroco\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u306b\u8ffd\u52a0or\u66f4\u65b0\u3059\u308b\u3053\u3068\u3067\u5bfe\u5fdc\u304c\u53ef\u80fd\u3067\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/faq/how-can-i-get-rss.mdx",sourceDirName:"faq",slug:"/faq/how-can-i-get-rss",permalink:"/ja/docs/faq/how-can-i-get-rss",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/how-can-i-get-rss.mdx",tags:[],version:"current",frontMatter:{title:"Kuroco\u3067RSS\u3092\u53d6\u5f97\u3059\u308b\u306b\u306f\u3069\u3046\u3057\u305f\u3089\u826f\u3044\u3067\u3059\u304b\uff1f",description:"\u30d0\u30c3\u30c1\u51e6\u7406\u3067\u5b9a\u671f\u7684\u306bRSS\u3092\u53d6\u5f97\u3057\u3001Kuroco\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u306b\u8ffd\u52a0or\u66f4\u65b0\u3059\u308b\u3053\u3068\u3067\u5bfe\u5fdc\u304c\u53ef\u80fd\u3067\u3059\u3002",category:"howto"},sidebar:"faqSidebar",previous:{title:"EC\u306eAPI\u3067\u30ab\u30fc\u30c9\u6c7a\u6e08\u3092\u884c\u3046\u306b\u306f\uff1f",permalink:"/ja/docs/faq/how-can-i-get-card-token"},next:{title:"\u30ab\u30fc\u30c8\u3092\u5229\u7528\u305b\u305a\u306b\u76f4\u63a5\u5546\u54c1\u3092\u6307\u5b9a\u3057\u3066\u8cfc\u5165\u3059\u308b\u306b\u306f\uff1f",permalink:"/ja/docs/faq/how-can-i-purchase-without-cart"}},u={},l=[{value:"RSS\u30d5\u30a3\u30fc\u30c9\u306e\u53d6\u5f97",id:"rss\u30d5\u30a3\u30fc\u30c9\u306e\u53d6\u5f97",level:3},{value:"Kuroco\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u66f4\u65b0",id:"kuroco\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u66f4\u65b0",level:3},{value:"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8",id:"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8",level:2}],p={toc:l},d="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{faqs:[{question:"Kuroco\u3067RSS\u3092\u53d6\u5f97\u3059\u308b\u306b\u306f\u3069\u3046\u3057\u305f\u3089\u826f\u3044\u3067\u3059\u304b\uff1f",answer:"\u30d0\u30c3\u30c1\u51e6\u7406\u3067\u5b9a\u671f\u7684\u306bRSS\u3092\u53d6\u5f97\u3057\u3001Kuroco\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u306b\u8ffd\u52a0or\u66f4\u65b0\u3059\u308b\u3053\u3068\u3067\u5bfe\u5fdc\u304c\u53ef\u80fd\u3067\u3059\u3002"}],mdxType:"StructuredDataFaqs"}),(0,a.kt)("p",null,"\u30d0\u30c3\u30c1\u51e6\u7406\u3067\u5b9a\u671f\u7684\u306bRSS\u3092\u53d6\u5f97\u3057\u3001Kuroco\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u306b\u8ffd\u52a0or\u66f4\u65b0\u3059\u308b\u3053\u3068\u3067\u5bfe\u5fdc\u304c\u53ef\u80fd\u3067\u3059\u3002"),(0,a.kt)("h3",{id:"rss\u30d5\u30a3\u30fc\u30c9\u306e\u53d6\u5f97"},"RSS\u30d5\u30a3\u30fc\u30c9\u306e\u53d6\u5f97"),(0,a.kt)("p",null,"\u30d0\u30c3\u30c1\u51e6\u7406\u306b\u6b21\u306e\u3088\u3046\u306aSmarty\u30b3\u30fc\u30c9\u3092\u8a18\u8ff0\u3059\u308b\u3068\u3001RSS\u30d5\u30a3\u30fc\u30c9\u306e\u5185\u5bb9\u3092\u9023\u60f3\u914d\u5217\u3067\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-smarty"},"{get_file var='rss_xml' url='https://www.diverta.co.jp/RSS.rdf' save=false}{* RSS\u306e\u5185\u5bb9\u3092\u53d6\u5f97 *}\n{xmltojson var='rss_json' xml=$rss_xml}{* XML\u3092JSON\u306b\u5909\u63db *}\n{assign var='rss_feed' value=$rss_json|@json_decode}{* JSON\u3092\u9023\u60f3\u914d\u5217\u306b\u5909\u63db *}\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u53d6\u5f97\u30fb\u5909\u63db\u3057\u305fRSS\u306e\u5185\u5bb9\u306f\u4ee5\u4e0b\u306e\u8a18\u8ff0\u3092\u8ffd\u52a0\u3057\u3066\u30c6\u30b9\u30c8\u3059\u308b\u3053\u3068\u3067\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"test:{$rss_feed|@debug_print_var}"))),(0,a.kt)("h3",{id:"kuroco\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u66f4\u65b0"},"Kuroco\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u66f4\u65b0"),(0,a.kt)("p",null,"\u8907\u6570\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u4e00\u62ec\u3067\u66f4\u65b0\u3059\u308b\u5834\u5408\u3001\nbulk_upsert API\u3092\u4f7f\u3046\u3068\u30ea\u30af\u30a8\u30b9\u30c8\u6570\u30fb\u51e6\u7406\u6642\u9593\u306e\u524a\u6e1b\u304c\u51fa\u6765\u307e\u3059\u306e\u3067\u3001\u5fc5\u8981\u306b\u5fdc\u3058\u3066\u3054\u5229\u7528\u304f\u3060\u3055\u3044\u3002\n\u53d6\u5f97\u3057\u305fRSS\u30c7\u30fc\u30bf\u3092\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u5909\u63db\u3057\u3066API\u306bPOST\u3059\u308b\u3053\u3068\u3067\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u66f4\u65b0\u304c\u53ef\u80fd\u3067\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-smarty"},"{* RSS\u30c7\u30fc\u30bf\u3092Kuroco\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306b\u5909\u63db *}\n{assign_array var='body'      values=''}\n{assign_array var='body.list' values=''}\n{foreach from=$rss_feed.entry item='entry'}\n    {assign_array var='topics' values=''}\n    {assign       var='topics.subject'  value=$entry.title}\n    {assign       var='topics.ext_1'    value=$entry.id}\n    {assign       var='topics.ext_2'    value=$entry.updated}\n\n    {assign var='body.list.' value=$topics}\n{/foreach}\n\n{* \u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u4e00\u62ec\u66f4\u65b0 *}\n{api_internal\n    var='response'\n    status_var='status'\n    endpoint='/rcms-api/1/topics/bulk_upsert'\n    method='POST'\n    queries=$body\n    member_id=1}\n")),(0,a.kt)("h2",{id:"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"},"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ja/docs/tutorials/bulk-upload-using-api/"},"bulk_upsert API\u3092\u5229\u7528\u3057\u3066\u3001\u4efb\u610f\u306eCSV\u30d5\u30a1\u30a4\u30eb\u3092\u30b3\u30f3\u30c6\u30f3\u30c4\u306b\u30a4\u30f3\u30dd\u30fc\u30c8\u3059\u308b")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ja/docs/faq/how-to-request-kuroco-api-from-smarty-function/#%E4%BE%8B2-post%E3%83%A1%E3%82%BD%E3%83%83%E3%83%89-%E8%AA%8D%E8%A8%BC%E3%81%82%E3%82%8A"},"\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u304b\u3089Kuroco\u306eAPI\u3092\u547c\u3073\u51fa\u305b\u307e\u3059\u304b\uff1f > \u4f8b2. POST\u30e1\u30bd\u30c3\u30c9 (\u8a8d\u8a3c\u3042\u308a)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ja/docs/faq/can-the-original-process-output-logs-for-debugging-purposes/"},"\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u3067\u30c7\u30d0\u30c3\u30b0\u3092\u76ee\u7684\u3068\u3057\u305f\u30ed\u30b0\u3092\u51fa\u529b\u3067\u304d\u307e\u3059\u304b\uff1f"))))}f.isMDXComponent=!0}}]);