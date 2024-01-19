"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[37648],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,g=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},90099:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={title:"Text (SMS)",category:"External system integration",weight:1},i=void 0,l={unversionedId:"management/twilio",id:"management/twilio",title:"Text (SMS)",description:"The text (SMS) screen enables you to configure settings for integrating Twilio into your website.",source:"@site/docs/management/twilio.md",sourceDirName:"management",slug:"/management/twilio",permalink:"/docs/management/twilio",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/management/twilio.md",tags:[],version:"current",frontMatter:{title:"Text (SMS)",category:"External system integration",weight:1},sidebar:"documentationSidebar",previous:{title:"SendGrid",permalink:"/docs/management/sendgrid"},next:{title:"Firebase",permalink:"/docs/management/firebase"}},c={},s=[{value:"Accessing the screen",id:"accessing-the-screen",level:2},{value:"Item descriptions",id:"item-descriptions",level:2},{value:"Sample usage",id:"sample-usage",level:2},{value:"Related documents",id:"related-documents",level:2}],p={toc:s},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The text (SMS) screen enables you to configure settings for integrating Twilio into your website."),(0,r.kt)("h2",{id:"accessing-the-screen"},"Accessing the screen"),(0,r.kt)("p",null,'In the left sidebar menu, under "SETTINGS", click ',"[External system integration]"," -> ","[Text (SMS)]","."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/f4c4a849a795bff054958c8b0aabeb9e.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/f4c4a849a795bff054958c8b0aabeb9e.png",alt:"Image from Gyazo"})),(0,r.kt)("h2",{id:"item-descriptions"},"Item descriptions"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/55d7a15b6d9f1430797ad44ddad6b67d.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/55d7a15b6d9f1430797ad44ddad6b67d.png",alt:"Image from Gyazo"})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Item/Button"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Text (SMS)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Option to enable the text message (SMS) function.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Account SID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Your Twilio account SID.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Account token"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Your Twilio account token.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Twilio phone number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Your Twilio phone number.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Update"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Click to apply the changes you made on this screen.")))),(0,r.kt)("h2",{id:"sample-usage"},"Sample usage"),(0,r.kt)("p",null,"After configuring the text (SMS) settings, copy the following code into the batch process or original process to send text messages."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'{sendmail var=result to="(phone number)@twilio.r-cms.jp" subject="Test" contents="This is a test"}\n')),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Twilio(SMS)")," template in ","[Operation]"," -> ","[Message template]","."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/d6e25d358b8c0cd2e0b32b60ced32fe6.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/d6e25d358b8c0cd2e0b32b60ced32fe6.png",alt:"Image from Gyazo"})),(0,r.kt)("h2",{id:"related-documents"},"Related documents"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/tutorials/how-to-connect-to-twillio/"},"Connecting to Twilio and send SMS"))))}d.isMDXComponent=!0}}]);