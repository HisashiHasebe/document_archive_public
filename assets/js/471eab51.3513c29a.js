"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[52855],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},13433:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294);function o(e){let{faqs:t=[]}=e;if(0===(Array.isArray(t)?t.filter((e=>e.question&&e.answer)):[]).length)return null;const n={"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))},o=JSON.stringify(n,null,2);return r.createElement("script",{type:"application/ld+json"},o)}},61521:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(87462),o=(n(67294),n(3905)),a=n(13433);const i={title:"How to Retrieve RSS Feeds with Kuroco?",description:"It is possible to retrieve RSS feeds periodically using batch processing and add or update them in Kuroco's content.",category:"howto"},s=void 0,c={unversionedId:"faq/how-can-i-get-rss",id:"faq/how-can-i-get-rss",title:"How to Retrieve RSS Feeds with Kuroco?",description:"It is possible to retrieve RSS feeds periodically using batch processing and add or update them in Kuroco's content.",source:"@site/docs/faq/how-can-i-get-rss.mdx",sourceDirName:"faq",slug:"/faq/how-can-i-get-rss",permalink:"/docs/faq/how-can-i-get-rss",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/how-can-i-get-rss.mdx",tags:[],version:"current",frontMatter:{title:"How to Retrieve RSS Feeds with Kuroco?",description:"It is possible to retrieve RSS feeds periodically using batch processing and add or update them in Kuroco's content.",category:"howto"},sidebar:"faqSidebar",previous:{title:"how-can-i-get-card-token",permalink:"/docs/faq/how-can-i-get-card-token"},next:{title:"how-can-i-purchase-without-cart",permalink:"/docs/faq/how-can-i-purchase-without-cart"}},u={},l=[{value:"Retrieving RSS Feeds",id:"retrieving-rss-feeds",level:3},{value:"Updating Kuroco Content",id:"updating-kuroco-content",level:3},{value:"Related Documents",id:"related-documents",level:2}],p={toc:l},d="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,{faqs:[{question:"How to Retrieve RSS Feeds with Kuroco?",answer:"It is possible to retrieve RSS feeds periodically using batch processing and add or update them in Kuroco's content."}],mdxType:"StructuredDataFaqs"}),(0,o.kt)("p",null,"It is possible to retrieve RSS feeds periodically using batch processing and add or update them in Kuroco's content."),(0,o.kt)("h3",{id:"retrieving-rss-feeds"},"Retrieving RSS Feeds"),(0,o.kt)("p",null,"By writing the following Smarty code in batch processing, you can retrieve the contents of an RSS feed as an associative array."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-smarty"},"{get_file var='rss_xml' url='https://www.diverta.co.jp/RSS.rdf' save=false}{* Retrieve the contents of the RSS feed *}\n{xmltojson var='rss_json' xml=$rss_xml}{* Convert XML to JSON *}\n{assign var='rss_feed' value=$rss_json|@json_decode}{* Convert JSON to an associative array *}\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can confirm the retrieved and converted RSS content by adding the following code for testing:",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"test:{$rss_feed|@debug_print_var}"))),(0,o.kt)("h3",{id:"updating-kuroco-content"},"Updating Kuroco Content"),(0,o.kt)("p",null,"If you want to update multiple contents at once, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"bulk_upsert")," API to reduce the number of requests and processing time. By converting the retrieved RSS data as shown below and posting it to the API, you can update the content."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-smarty"},"{* Convert RSS data to the format of Kuroco content *}\n{assign_array var='body'      values=''}\n{assign_array var='body.list' values=''}\n{foreach from=$rss_feed.entry item='entry'}\n    {assign_array var='topics' values=''}\n    {assign       var='topics.subject'  value=$entry.title}\n    {assign       var='topics.ext_1'    value=$entry.id}\n    {assign       var='topics.ext_2'    value=$entry.updated}\n\n    {assign var='body.list.' value=$topics}\n{/foreach}\n\n{* Bulk update of content *}\n{api_internal\n    var='response'\n    status_var='status'\n    endpoint='/rcms-api/1/topics/bulk_upsert'\n    method='POST'\n    queries=$body\n    member_id=1}\n")),(0,o.kt)("h2",{id:"related-documents"},"Related Documents"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/tutorials/bulk-upload-using-api/"},"Bulk uploading using the ",(0,o.kt)("inlineCode",{parentName:"a"},"bulk_upsert")," API")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/faq/how-to-request-kuroco-api-from-smarty-function/#example-2-post-method-with-authentication"},"Can I call Kuroco's API from custom function?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/faq/can-the-original-process-output-logs-for-debugging-purposes/"},"Can custom function output logs for debugging purposes?"))))}f.isMDXComponent=!0}}]);