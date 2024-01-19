"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[86322],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=l(r),b=i,u=m["".concat(c,".").concat(b)]||m[b]||d[b]||s;return r?a.createElement(u,n(n({ref:t},p),{},{components:r})):a.createElement(u,n({ref:t},p))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=r.length,n=new Array(s);n[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[m]="string"==typeof e?e:i,n[1]=o;for(var l=2;l<s;l++)n[l]=r[l];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},56017:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=r(87462),i=(r(67294),r(3905));const s={title:"Registering notification subscribers",category:"Campaign",weight:1},n=void 0,o={unversionedId:"tutorials/how-to-register-subscribers-on-magazine",id:"tutorials/how-to-register-subscribers-on-magazine",title:"Registering notification subscribers",description:"This article will explain the steps to register notification subscriber(s).",source:"@site/docs/tutorials/how-to-register-subscribers-on-magazine.md",sourceDirName:"tutorials",slug:"/tutorials/how-to-register-subscribers-on-magazine",permalink:"/docs/tutorials/how-to-register-subscribers-on-magazine",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/tutorials/how-to-register-subscribers-on-magazine.md",tags:[],version:"current",frontMatter:{title:"Registering notification subscribers",category:"Campaign",weight:1},sidebar:"documentationSidebar",previous:{title:"Set form response data to member information of users that automatically registered via form submission",permalink:"/docs/tutorials/how-to-implement-original-function-into-the-member-info-when-form-send-with-member-regist"},next:{title:"Sending e-mail notifications",permalink:"/docs/tutorials/sending-email-notifications"}},c={},l=[{value:"Registering notification subscribers",id:"registering-notification-subscribers",level:2},{value:"Access the subscriber list page",id:"access-the-subscriber-list-page",level:3},{value:"Registering subscriber(s)",id:"registering-subscribers",level:3},{value:"Registering 1 subscriber at a time",id:"registering-1-subscriber-at-a-time",level:4},{value:"Registering subscriber(s) via CSV upload",id:"registering-subscribers-via-csv-upload",level:4}],p={toc:l},m="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(m,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This article will explain the steps to register notification subscriber(s).\nEach notification will have its own subscribers, and e-mails will be sent to each notification's respective subscribers' e-mail addresses."),(0,i.kt)("h2",{id:"registering-notification-subscribers"},"Registering notification subscribers"),(0,i.kt)("h3",{id:"access-the-subscriber-list-page"},"Access the subscriber list page"),(0,i.kt)("p",null,"Select ","[Campaign]"," -> ","[Notification]","."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/beb425fb5347dc50bde5585473166895.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/beb425fb5347dc50bde5585473166895.png",alt:"Image from Gyazo"})),(0,i.kt)("p",null,"Click on the title of the notification to register its subscribers."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/4dea10b0be3e161bca35387add20c4e2.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/4dea10b0be3e161bca35387add20c4e2.png",alt:"Image from Gyazo"})),(0,i.kt)("p",null,'Click the "Subscribers" tab at the notification basic settings screen.'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/f7889d4fef88e554ca837e308d76cda1.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/f7889d4fef88e554ca837e308d76cda1.png",alt:"Image from Gyazo"})),(0,i.kt)("h3",{id:"registering-subscribers"},"Registering subscriber(s)"),(0,i.kt)("p",null,"There are two methods of registering subscriber(s)."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Registering subscribers one by one"),(0,i.kt)("li",{parentName:"ul"},"Registering subscriber(s) via CSV upload\nEach of the methods will be explained below.")),(0,i.kt)("h4",{id:"registering-1-subscriber-at-a-time"},"Registering 1 subscriber at a time"),(0,i.kt)("p",null,'Enter the recipient\'s "E-mail address" or "Member ID" and click ',"[Add]","."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/c54988d825cfcc80154775704875d218.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/c54988d825cfcc80154775704875d218.png",alt:"Image from Gyazo"})),(0,i.kt)("p",null,'The message "Registered" will be displayed to confirm that the e-mail address has been added to the subscriber list.'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/55949bf19adcf533a167c14a6a6e14ac.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/55949bf19adcf533a167c14a6a6e14ac.png",alt:"Image from Gyazo"})),(0,i.kt)("h4",{id:"registering-subscribers-via-csv-upload"},"Registering subscriber(s) via CSV upload"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Preparing the CSV file"),(0,i.kt)("br",{parentName:"p"}),"\n","On the subscriber list page, click the ","[Download]"," button from the 3-dot menu (kebab menu) to download the CSV file."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/dec01c20cb5f841804ed1ee19297bba0.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/dec01c20cb5f841804ed1ee19297bba0.png",alt:"Image from Gyazo"})),(0,i.kt)("p",null,'In the excel file, enter the "e-mail address" or "member ID" of the subsciber(s).'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/9e496158e3378f86eddcc8a1bed3acfa.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/9e496158e3378f86eddcc8a1bed3acfa.png",alt:"Image from Gyazo"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Uploading the CSV file"),(0,i.kt)("br",{parentName:"p"}),"\n","On the subscriber list page, click the ","[Upload]"," button from the 3-dot menu (kebab menu)."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/ac64267fe745365a750f2c903d5587c4.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/ac64267fe745365a750f2c903d5587c4.png",alt:"Image from Gyazo"})),(0,i.kt)("p",null,'Select the "Upload type" and upload the file, then click the ',"[Update]"," button."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/affa2071717bf497ada8a89953a437db.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/affa2071717bf497ada8a89953a437db.png",alt:"Image from Gyazo"})),(0,i.kt)("p",null,'The message "Updated" will be displayed following a successful upload.'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Confirming the registration of the new subscriber(s)."),(0,i.kt)("br",{parentName:"p"}),"\n","Return to the subscriber list page and verify the newly added subscriber(s) are displayed on the list."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/dbd06675eb735fe89aa425fc750271fc.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/dbd06675eb735fe89aa425fc750271fc.png",alt:"Image from Gyazo"})),(0,i.kt)("p",null,"This concludes the tutorial on notification subscriber registration."))}d.isMDXComponent=!0}}]);