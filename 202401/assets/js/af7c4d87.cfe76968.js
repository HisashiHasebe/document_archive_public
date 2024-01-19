"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[26515],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),l=p(a),g=n,f=l["".concat(s,".").concat(g)]||l[g]||d[g]||i;return a?r.createElement(f,o(o({ref:t},c),{},{components:a})):r.createElement(f,o({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=g;var m={};for(var s in t)hasOwnProperty.call(t,s)&&(m[s]=t[s]);m.originalType=e,m[l]="string"==typeof e?e:n,o[1]=m;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},765:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>m,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const i={title:"Inviting new members",category:"Member",weight:1},o=void 0,m={unversionedId:"tutorials/how-to-invite-new-member",id:"tutorials/how-to-invite-new-member",title:"Inviting new members",description:"Send an invitation email to register a new member on the site.",source:"@site/docs/tutorials/how-to-invite-new-member.md",sourceDirName:"tutorials",slug:"/tutorials/how-to-invite-new-member",permalink:"/docs/tutorials/how-to-invite-new-member",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/tutorials/how-to-invite-new-member.md",tags:[],version:"current",frontMatter:{title:"Inviting new members",category:"Member",weight:1},sidebar:"documentationSidebar",previous:{title:"Adding members",permalink:"/docs/tutorials/how-to-add-new-member"},next:{title:"Creating groups",permalink:"/docs/tutorials/how-to-make-new-group"}},s={},p=[{value:"How to invite members",id:"how-to-invite-members",level:2},{value:"How to edit the invitation email",id:"how-to-edit-the-invitation-email",level:2}],c={toc:p},l="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(l,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'Send an invitation email to register a new member on the site.\nThe inviting party will be responsible to set the "Group" of the invitee and the member registration details are to be filled in by the invitee.'),(0,n.kt)("h2",{id:"how-to-invite-members"},"How to invite members"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"1. Access the member list page"),(0,n.kt)("br",{parentName:"p"}),"\n","Click ","[Member]"," -> ","[Member]",".",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/d3245a60764b436d5ab5eba9cb14f3e2.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/d3245a60764b436d5ab5eba9cb14f3e2.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"2. Access the invitation email composition screen"),(0,n.kt)("br",{parentName:"p"}),"\n","Click ","[Invite]",".",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/ad86d5d65c1e79e48acd192c71df8967.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/ad86d5d65c1e79e48acd192c71df8967.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,'Note) The user might not have the authorization to invite member(s) if the user is denied the access to the "member invitation" page. Please refer to ',(0,n.kt)("a",{parentName:"p",href:"/docs/management/registration-conditions/"},"New member registration conditions")," page for member invitation settings detail."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"3. Sending an invitation"),(0,n.kt)("br",{parentName:"p"}),"\n",'Enter the e-mail address of the invitee in "Input the email addresses that you want to invite." field and click ',"[Next]","."),(0,n.kt)("p",null,"Reference) ",(0,n.kt)("a",{parentName:"p",href:"/docs/management/member-invite/"},"Inviting members")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/04872ae0b2c87627d8956926e1b7f690.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/04872ae0b2c87627d8956926e1b7f690.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"Clicking ","[Send]"," will send an invitation email to the specified email address.",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/1d98b6415f0430f7b7e10ba80270b426.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/1d98b6415f0430f7b7e10ba80270b426.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"4. Registering as a member from an invitation"),(0,n.kt)("br",{parentName:"p"}),"\n","After receiving the invitation email, click the URL in the body of the email.",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/0592e21d1d3650c59e859e98713e6204.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/0592e21d1d3650c59e859e98713e6204.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"In the member registration page, fill in the required fields and click the ","[Register]"," button to complete the member registration.",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/9fe305e54205a6a7d392fe99f65a9879.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/9fe305e54205a6a7d392fe99f65a9879.png",alt:"Image (fetched from Gyazo)"})),(0,n.kt)("h2",{id:"how-to-edit-the-invitation-email"},"How to edit the invitation email"),(0,n.kt)("p",null,"The content of the invitation email can be edited using the message template.",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"1. Access the message template list"),(0,n.kt)("br",{parentName:"p"}),"\n","Click ","[Operation]"," -> ","[Message templates]",".",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/7e6b19c42af27e171f67b23b1e921dbc.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/7e6b19c42af27e171f67b23b1e921dbc.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"2. Displaying message templates except for default"),(0,n.kt)("br",{parentName:"p"}),"\n","To display only customized message templates, check the ","[Except for Default]"," checkbox and click ","[Search]",".",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/5a14791a26ff150ec933733be85d66f9.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/5a14791a26ff150ec933733be85d66f9.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"3. Editing the message template of the invitation email"),(0,n.kt)("br",{parentName:"p"}),"\n",'From message templates list, click the message template which the "Identifier" column is "memberregist/invite".',(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/987a532abd1fd3dd924406cab263050f.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/987a532abd1fd3dd924406cab263050f.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"Please refer to ",(0,n.kt)("a",{parentName:"p",href:"/docs/management/email-template/"},"Message Template Edit")," for details on editing message templates. Click ","[Update]"," to save the changes on the message template.",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/fa376324f68e3f3158cf10d76f9ca257.jpg?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/fa376324f68e3f3158cf10d76f9ca257.jpg",alt:"Image from Gyazo"})))}d.isMDXComponent=!0}}]);