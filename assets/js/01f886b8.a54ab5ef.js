"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[14183],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(r),h=o,u=p["".concat(l,".").concat(h)]||p[h]||m[h]||n;return r?a.createElement(u,s(s({ref:t},d),{},{components:r})):a.createElement(u,s({ref:t},d))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<n;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},13433:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(67294);function o(e){let{faqs:t=[]}=e;if(0===(Array.isArray(t)?t.filter((e=>e.question&&e.answer)):[]).length)return null;const r={"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))},o=JSON.stringify(r,null,2);return a.createElement("script",{type:"application/ld+json"},o)}},49771:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var a=r(87462),o=(r(67294),r(3905)),n=r(13433);const s={title:"What options are available for verifying member passwords?",description:"Since Kuroco passwords are encrypted for security purposes, it is not possible to verify them on the member editor screen or through the batch downloaded data.",category:"security"},i=void 0,l={unversionedId:"faq/what-options-are-available-for-verifying-member-passwords",id:"faq/what-options-are-available-for-verifying-member-passwords",title:"What options are available for verifying member passwords?",description:"Since Kuroco passwords are encrypted for security purposes, it is not possible to verify them on the member editor screen or through the batch downloaded data.",source:"@site/docs/faq/what-options-are-available-for-verifying-member-passwords.mdx",sourceDirName:"faq",slug:"/faq/what-options-are-available-for-verifying-member-passwords",permalink:"/docs/faq/what-options-are-available-for-verifying-member-passwords",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/what-options-are-available-for-verifying-member-passwords.mdx",tags:[],version:"current",frontMatter:{title:"What options are available for verifying member passwords?",description:"Since Kuroco passwords are encrypted for security purposes, it is not possible to verify them on the member editor screen or through the batch downloaded data.",category:"security"},sidebar:"faqSidebar",previous:{title:"What is your update schedule like?",permalink:"/docs/faq/what-is-your-update-schedule-like"},next:{title:"My file updates are not reflected in KurocoFront, what should I do?",permalink:"/docs/faq/what-should-I-do-if-file-updates-are-not-reflected-in-kurocofront"}},c={},d=[{value:"Displaying the password in the confirmation e-mail",id:"displaying-the-password-in-the-confirmation-e-mail",level:2},{value:"Before you start",id:"before-you-start",level:3},{value:"Steps",id:"steps",level:3},{value:"<strong>1. Access the member list screen</strong>",id:"1-access-the-member-list-screen",level:4},{value:"<strong>2. Navigate to the upload screen</strong>",id:"2-navigate-to-the-upload-screen",level:4},{value:"<strong>3. Upload your CSV file</strong>",id:"3-upload-your-csv-file",level:4},{value:"Other password recovery methods",id:"other-password-recovery-methods",level:2},{value:"Contact the administrator",id:"contact-the-administrator",level:3},{value:"Change passwords upon initial login",id:"change-passwords-upon-initial-login",level:3},{value:"Use the password reminder function",id:"use-the-password-reminder-function",level:3}],p={toc:d},m="wrapper";function h(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(n.Z,{faqs:[{question:"What options are available for verifying member passwords?",answer:"Since Kuroco passwords are encrypted for security purposes, it is not possible to verify them on the member editor screen or through the batch downloaded data."}],mdxType:"StructuredDataFaqs"}),(0,o.kt)("p",null,"Since Kuroco passwords are encrypted for security purposes, it is not possible to verify them on the member editor screen or through the batch downloaded data."),(0,o.kt)("p",null,"However, members can verify them using the confirmation e-mail received upon registration. Follow the steps below to display the password in the confirmation e-mail."),(0,o.kt)("h2",{id:"displaying-the-password-in-the-confirmation-e-mail"},"Displaying the password in the confirmation e-mail"),(0,o.kt)("h3",{id:"before-you-start"},"Before you start"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Register the member via CSV batch processing"),(0,o.kt)("li",{parentName:"ul"},"Verify that the member has a valid e-mail address on file")),(0,o.kt)("h3",{id:"steps"},"Steps"),(0,o.kt)("h4",{id:"1-access-the-member-list-screen"},(0,o.kt)("strong",{parentName:"h4"},"1. Access the member list screen")),(0,o.kt)("p",null,"In the left sidebar menu, click ","[Member]"," -> ","[Member]","."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/d3245a60764b436d5ab5eba9cb14f3e2.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/d3245a60764b436d5ab5eba9cb14f3e2.png",alt:"Image from Gyazo"})),(0,o.kt)("h4",{id:"2-navigate-to-the-upload-screen"},(0,o.kt)("strong",{parentName:"h4"},"2. Navigate to the upload screen")),(0,o.kt)("p",null,"Click the ","[Members]"," link above the page title and select ","[Upload]"," in the dropdown menu."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/8277a09218ff3ec6b50abd3b57bcfcd7.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/8277a09218ff3ec6b50abd3b57bcfcd7.png",alt:"Image from Gyazo"})),(0,o.kt)("h4",{id:"3-upload-your-csv-file"},(0,o.kt)("strong",{parentName:"h4"},"3. Upload your CSV file")),(0,o.kt)("p",null,'In "File settings" on the upload screen, select your member list CSV file with the password field left blank. Select the following settings for "No value behavior":'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ignore / Update with no value: Select ","[Update with no value]"),(0,o.kt)("li",{parentName:"ul"},"Password settings: Check the ","[Randomly generated]"," box")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/8dc87c0362745159a3bfa58dbeca0676.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/8dc87c0362745159a3bfa58dbeca0676.png",alt:"Image (fetched from Gyazo)"}),"\nWhen you are done, click ","[Send]","."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/49a13cbca66a42e5e7c9186b3400463c.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/49a13cbca66a42e5e7c9186b3400463c.png",alt:"Image (fetched from Gyazo)"}),"\nThe above steps batch registers all the members in the CSV file, and an e-mail containing the password will be sent to each member."),(0,o.kt)("p",null,"For more information on member batch registration, see the following user guide.:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/management/member-batch-process/#upload"},"Member batch process: Upload"))),(0,o.kt)("h2",{id:"other-password-recovery-methods"},"Other password recovery methods"),(0,o.kt)("p",null,"If you cannot upload CSV files, please try one of the following methods instead."),(0,o.kt)("h3",{id:"contact-the-administrator"},"Contact the administrator"),(0,o.kt)("p",null,"Members that do not have an e-mail address on file will need to contact the site admin and make a password change request. Please note that the admin can only reset passwords; they cannot verify them."),(0,o.kt)("p",null,"For more information on password updates, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/management/member/#member-editor"},"User guide: Member editor"),"."),(0,o.kt)("h3",{id:"change-passwords-upon-initial-login"},"Change passwords upon initial login"),(0,o.kt)("p",null,"After a user has registered, they can change their password when logging in for the first time. To enable this function, go to ","[Environment]"," -> ","[Site settings]"," in the sidebar."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/d7e28a2449abbbea4595e8ee96c29307.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/d7e28a2449abbbea4595e8ee96c29307.png",alt:"Image (fetched from Gyazo)"}),'\nUnder the "Member" section, check the box next to ',"[Change password when logging in for the first time]","."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/c47f9120352005b7b200671ec3a8221c.jpg?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/c47f9120352005b7b200671ec3a8221c.jpg",alt:"Image (fetched from Gyazo)"}),"\nClick ","[Update]"," at the bottom of the screen to save this change."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/939c83dd1af8421298b24338ac1dcdbd.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/939c83dd1af8421298b24338ac1dcdbd.png",alt:"Image (fetched from Gyazo)"}),"\nNote: When this option is selected, members are required to change their passwords upon initial login after registration."),(0,o.kt)("h3",{id:"use-the-password-reminder-function"},"Use the password reminder function"),(0,o.kt)("p",null,"If the member has an e-mail address on file, you can set up password reminders for them to recover or reset their password."),(0,o.kt)("p",null,"See: ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorials/how-to-use-password-reminder/"},"How to configure password reminder & reset")," for a detailed tutorial."))}h.isMDXComponent=!0}}]);