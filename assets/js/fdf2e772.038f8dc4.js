"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[76380],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),l=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(m.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),p=r,f=d["".concat(m,".").concat(p)]||d[p]||g[p]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},12107:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={title:"Advanced member settings",category:"Member",weight:29},o=void 0,s={unversionedId:"management/new-member-settings",id:"management/new-member-settings",title:"Advanced member settings",description:"The advanced member settings screen enables you to edit the settings for new member signups.",source:"@site/docs/management/new-member-settings.md",sourceDirName:"management",slug:"/management/new-member-settings",permalink:"/docs/management/new-member-settings",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/management/new-member-settings.md",tags:[],version:"current",frontMatter:{title:"Advanced member settings",category:"Member",weight:29},sidebar:"documentationSidebar",previous:{title:"Member download",permalink:"/docs/management/member-download"},next:{title:"Registration conditions",permalink:"/docs/management/registration-conditions"}},m={},l=[{value:"Accessing the screen",id:"accessing-the-screen",level:2},{value:"Current settings",id:"current-settings",level:2},{value:"Other settings",id:"other-settings",level:2},{value:"E-mail notification",id:"e-mail-notification",level:2},{value:"Editing notification e-mail contents",id:"editing-notification-e-mail-contents",level:3}],c={toc:l},d="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The advanced member settings screen enables you to edit the settings for new member signups."),(0,r.kt)("h2",{id:"accessing-the-screen"},"Accessing the screen"),(0,r.kt)("p",null,"In the left sidebar menu, click ","[Member]"," -> ","[Member]","."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/793f12b3b1cd779caaffa9c311686c52.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/793f12b3b1cd779caaffa9c311686c52.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"On the member list screen, click the ","[Member]"," link above the page title and select ","[Advanced member settings]"," in the dropdown menu."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/595e2b2d84438cad3419681bfa362919.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/595e2b2d84438cad3419681bfa362919.png",alt:"Image from Gyazo"})),(0,r.kt)("h2",{id:"current-settings"},"Current settings"),(0,r.kt)("p",null,"Clicking ","[Change settings]"," redirects you to the new member registration conditions screen."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/d73c05f173c22a0d08d708cf43d328aa.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/d73c05f173c22a0d08d708cf43d328aa.png",alt:"Image from Gyazo"})),(0,r.kt)("h2",{id:"other-settings"},"Other settings"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/a89404ac0a3abde145d752273cef713b.jpg?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/a89404ac0a3abde145d752273cef713b.jpg",alt:"Image (fetched from Gyazo)"})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Button"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Configure default group settings"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Click to configure user group(s) that new members will belong to and their login permissions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Configure extended item settings for members"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Click to configure additional member information items.")))),(0,r.kt)("h2",{id:"e-mail-notification"},"E-mail notification"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/ee5db39987b9286630e7385d61584122.jpg?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/ee5db39987b9286630e7385d61584122.jpg",alt:"Image (fetched from Gyazo)"})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"E-mail address for notification of new member registration"),(0,r.kt)("td",{parentName:"tr",align:"left"},'Configures alerts for new member registration. Selecting "Notify" sends an e-mail to the e-mail address entered here whenever a new user has registered on the front page.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Notification e-mail to newly registered users"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Enabling this option sends an e-mail notification to each new member when they complete registration on the front page.",(0,r.kt)("br",null),"(Note: Only new members who have registered their e-mail addresses will be notified)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"E-mail address for notification of member update"),(0,r.kt)("td",{parentName:"tr",align:"left"},'Configures alerts for member information updates. Selecting "Notify" sends an e-mail to the e-mail address entered here whenever existing member information has been edited on the front page.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Notification e-mail to user when updating member information"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Enabling this option sends an e-mail notification to each existing member when they update their information on the front page.",(0,r.kt)("br",null),"(Note: Only members who have registered their e-mail addresses will be notified)")))),(0,r.kt)("h3",{id:"editing-notification-e-mail-contents"},"Editing notification e-mail contents"),(0,r.kt)("p",null,"To change the contents of notification e-mails, click ","[Operation]"," -> ","[Message template]"," in the left sidebar menu."),(0,r.kt)("p",null,"After configuring the e-mail notification settings, click ","[Update]"," to apply the changes."))}g.isMDXComponent=!0}}]);