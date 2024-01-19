"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[72997],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(r),c=a,m=p["".concat(l,".").concat(c)]||p[c]||f[c]||s;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<s;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},13433:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294);function a(e){let{faqs:t=[]}=e;if(0===(Array.isArray(t)?t.filter((e=>e.question&&e.answer)):[]).length)return null;const r={"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))},a=JSON.stringify(r,null,2);return n.createElement("script",{type:"application/ld+json"},a)}},41226:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=r(87462),a=(r(67294),r(3905)),s=r(13433);const i={title:"Can default values be set for the insert API?",description:"There are several ways to set default values for the content added by the insert API. Please implement the desired method by referring to the methods for the frontend, preprocessing, and triggers.",category:"howto"},o=void 0,l={unversionedId:"faq/set-defaults-for-the-insert-api",id:"faq/set-defaults-for-the-insert-api",title:"Can default values be set for the insert API?",description:"There are several ways to set default values for the content added by the insert API. Please implement the desired method by referring to the methods for the frontend, preprocessing, and triggers.",source:"@site/docs/faq/set-defaults-for-the-insert-api.mdx",sourceDirName:"faq",slug:"/faq/set-defaults-for-the-insert-api",permalink:"/docs/faq/set-defaults-for-the-insert-api",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/set-defaults-for-the-insert-api.mdx",tags:[],version:"current",frontMatter:{title:"Can default values be set for the insert API?",description:"There are several ways to set default values for the content added by the insert API. Please implement the desired method by referring to the methods for the frontend, preprocessing, and triggers.",category:"howto"},sidebar:"faqSidebar",previous:{title:"Information on Storage Location, Retention Period, and Content of SendGrid Logs",permalink:"/docs/faq/sendgrid-log-storage-retention-content-details"},next:{title:"The custom domain I set up is not displaying my site. What checks should I perform?",permalink:"/docs/faq/setting-up-a-custom-domain"}},u={},d=[{value:"Setting default values for Member::insert",id:"setting-default-values-for-memberinsert",level:2},{value:"Implementing on the frontend",id:"implementing-on-the-frontend",level:3},{value:"Adding preprocessing",id:"adding-preprocessing",level:3},{value:"Setting a Trigger",id:"setting-a-trigger",level:3},{value:"Related Documents",id:"related-documents",level:2}],p={toc:d},f="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(f,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(s.Z,{faqs:[{question:"Can default values be set for the insert API?",answer:"There are several ways to set default values for the content added by the insert API. Please implement the desired method by referring to the methods for the frontend, preprocessing, and triggers."}],mdxType:"StructuredDataFaqs"}),(0,a.kt)("p",null,"There are several ways to set default values for the content added by the insert API.",(0,a.kt)("br",{parentName:"p"}),"\n","Please implement the desired method by referring to the methods for the frontend, preprocessing, and triggers.  "),(0,a.kt)("p",null,"In this FAQ, we assume the code for the Member::insert endpoint.  "),(0,a.kt)("h2",{id:"setting-default-values-for-memberinsert"},"Setting default values for Member::insert"),(0,a.kt)("h3",{id:"implementing-on-the-frontend"},"Implementing on the frontend"),(0,a.kt)("p",null,"For example, let's say the \"Don't subscribe to notifications\" for a member is registered with the default value (unchecked state) by default.",(0,a.kt)("br",{parentName:"p"}),"\n","When sending a request from the frontend, if you implement it to include ",(0,a.kt)("inlineCode",{parentName:"p"},'"email_send_ng_flg": false'),' in the request, you can register a member with the "Don\'t subscribe to notifications" unchecked.  '),(0,a.kt)("p",null,"Add ",(0,a.kt)("inlineCode",{parentName:"p"},'"email_send_ng_flg": false')," to the request without showing it to the user, as shown below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markup",metastring:'reference title="/pages/signup_with_default_value.vue"',reference:!0,title:'"/pages/signup_with_default_value.vue"'},"https://github.com/diverta/kuroco-documents/blob/main/sample_code/front-end/nuxtjs/signup_with_default_value.vue\n")),(0,a.kt)("h3",{id:"adding-preprocessing"},"Adding preprocessing"),(0,a.kt)("p",null,"For example, if a numeric value is set for an extended item of a member, it will be registered as blank if no value is specified in the request via the API.",(0,a.kt)("br",{parentName:"p"}),"\n","If there are multiple extended items of numeric value type and you want to set 0 as the default value for all of them, you can write a custom preprocessing and set it as a preprocessing step."),(0,a.kt)("p",null,"By setting it in ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/pre-processing/"},"Pre-processing"),", you can set default values for each endpoint."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-smarty",metastring:'reference title="set_the_default_value_for_member_register"',reference:!0,title:'"set_the_default_value_for_member_register"'},"https://github.com/diverta/kuroco-documents/blob/main/sample_code/custom_function/pre-processing/set_the_default_value_for_member_register_using_pre_processing.txt\n")),(0,a.kt)("h3",{id:"setting-a-trigger"},"Setting a Trigger"),(0,a.kt)("p",null,"You can also set default values for multiple numeric value type extended items using a trigger.",(0,a.kt)("br",{parentName:"p"}),"\n",'The trigger uses "',(0,a.kt)("a",{parentName:"p",href:"/docs/reference/trigger-variables/#before-member-registration"},"Before Member Registration"),'".',(0,a.kt)("br",{parentName:"p"}),"\n","The variable name used in custom processing is slightly different from the pre-processing pattern."),(0,a.kt)("p",null,"By setting it with a trigger, you can set default values for all members registered through the API."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-smarty",metastring:'reference title="set_the_default_value_for_member_register"',reference:!0,title:'"set_the_default_value_for_member_register"'},"https://github.com/diverta/kuroco-documents/blob/main/sample_code/custom_function/trigger/set_the_default_value_for_member_register_using_trigger.txt\n")),(0,a.kt)("h2",{id:"related-documents"},"Related Documents"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/reference/pre-processing/"},"Pre-processing")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/reference/trigger-variables/"},"List of triggers and variables available for custom functions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/reference/smarty-plugin/"},"Smarty Plugin"))))}c.isMDXComponent=!0}}]);