"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[61593],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>g});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function c(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var d=r.createContext({}),l=function(t){var e=r.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=l(t.components);return r.createElement(d.Provider,{value:e},t.children)},m="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,d=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),m=l(a),f=n,g=m["".concat(d,".").concat(f)]||m[f]||s[f]||o;return a?r.createElement(g,i(i({ref:e},p),{},{components:a})):r.createElement(g,i({ref:e},p))}));function g(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,i=new Array(o);i[0]=f;var c={};for(var d in e)hasOwnProperty.call(e,d)&&(c[d]=e[d]);c.originalType=t,c[m]="string"==typeof t?t:n,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},7491:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=a(87462),n=(a(67294),a(3905));const o={title:"File credit and description information",description:"Adding credit and description metadata to a file can be accomplished using the KurocoFiles(Database) resource/directory of the File Manager."},i=void 0,c={unversionedId:"tutorials/file-credit-and-description-information",id:"tutorials/file-credit-and-description-information",title:"File credit and description information",description:"Adding credit and description metadata to a file can be accomplished using the KurocoFiles(Database) resource/directory of the File Manager.",source:"@site/docs/tutorials/file-credit-and-description-information.md",sourceDirName:"tutorials",slug:"/tutorials/file-credit-and-description-information",permalink:"/docs/tutorials/file-credit-and-description-information",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/tutorials/file-credit-and-description-information.md",tags:[],version:"current",frontMatter:{title:"File credit and description information",description:"Adding credit and description metadata to a file can be accomplished using the KurocoFiles(Database) resource/directory of the File Manager."}},d={},l=[{value:"Overview",id:"overview",level:2},{value:"How to setup",id:"how-to-setup",level:2},{value:"Check credit and description",id:"check-credit-and-description",level:2},{value:"Create content structure",id:"create-content-structure",level:3},{value:"Add content",id:"add-content",level:3},{value:"Create endpoint",id:"create-endpoint",level:3},{value:"Check the response in the Swagger UI",id:"check-the-response-in-the-swagger-ui",level:3}],p={toc:l},m="wrapper";function s(t){let{components:e,...a}=t;return(0,n.kt)(m,(0,r.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Credit information helps to accurately attribute the creator or owner of a file for their work, while description makes it easier for others to understand the purpose and content of the file. In certain cases, including credit and description information may be legally required, particularly for copyrighted materials.\nAdding credit and description metadata to a file can be accomplished using the KurocoFiles(Database) resource/directory of the File Manager. "),(0,n.kt)("h2",{id:"how-to-setup"},"How to setup"),(0,n.kt)("p",null,"Click KurocoFiles(Database) from ",(0,n.kt)("a",{parentName:"p",href:"/docs/management/file-manager/"},"File manager"),(0,n.kt)("br",{parentName:"p"}),"\n","Note that, credit and description information can only be put to files in this directory."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/9c60059e086e7145489106ef9d5c33d9.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/9c60059e086e7145489106ef9d5c33d9.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,'Right-click on the desired file that you wish to add the information to, and select "File Metadata" option.'),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/30910c4a94cb2739586d745bb8252ff1.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/30910c4a94cb2739586d745bb8252ff1.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,'In the "File Metadata" window, you can then can enter credit and description for the file.'),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/2682f0972ff86c3963b210062e37abc9.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/2682f0972ff86c3963b210062e37abc9.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"That's it. This information will be stored with the file and can be used to identify the source and purpose of the file."),(0,n.kt)("h2",{id:"check-credit-and-description"},"Check credit and description"),(0,n.kt)("p",null,"You can find the credit and description of your file in the Content API response.  "),(0,n.kt)("h3",{id:"create-content-structure"},"Create content structure"),(0,n.kt)("p",null,"First, let's have a content structure with an extension column with ",(0,n.kt)("inlineCode",{parentName:"p"},"File (from File manager)")," type."),(0,n.kt)("p",null,"From the ",(0,n.kt)("a",{parentName:"p",href:"/docs/management/content-structure-topics-group/"},"Content structure list"),", Click ","[Add]",".  "),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/8e5feb7f39a5a9058efb5e7e21207a15.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/8e5feb7f39a5a9058efb5e7e21207a15.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"Configure the following settings.  "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Item"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Settings"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"My Content")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ID=1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Field settings: File (from File manager)",(0,n.kt)("br",null),"Field name: My Image",(0,n.kt)("br",null),"Identifier: my_image")))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/744076ce1bf9037edb0f4ee67cbb1979.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/744076ce1bf9037edb0f4ee67cbb1979.png",alt:"Image from Gyazo"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/48549f8817ae09eefcd6a00687ddb262.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/48549f8817ae09eefcd6a00687ddb262.png",alt:"Image from Gyazo"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/42d867cbbe6d2158cb0da91aad6eb64f.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/42d867cbbe6d2158cb0da91aad6eb64f.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,'Once configured, click "Add" to add content structure.'),(0,n.kt)("h3",{id:"add-content"},"Add content"),(0,n.kt)("p",null,"Create a new content and attach the file to the extension column you created in the previous step."),(0,n.kt)("p",null,"From the ",(0,n.kt)("a",{parentName:"p",href:"/docs/management/content-structure-topics/"},"Contents List")," screen, click ","[Add]","."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/05b292792f2302c6f2d5924b1f2b1b81.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/05b292792f2302c6f2d5924b1f2b1b81.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"Enter the following and click ","[Add]","."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Item"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Title"),(0,n.kt)("td",{parentName:"tr",align:"left"},"My Image")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"My Image"),(0,n.kt)("td",{parentName:"tr",align:"left"},"File with credits and description added")))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/9ae35f48f4ea3ff967e1d8d2f5bf5045.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/9ae35f48f4ea3ff967e1d8d2f5bf5045.png",alt:"Image from Gyazo"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/374f4d645b7063ba7a29302622a4119a.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/374f4d645b7063ba7a29302622a4119a.png",alt:"Image from Gyazo"})),(0,n.kt)("h3",{id:"create-endpoint"},"Create endpoint"),(0,n.kt)("p",null,"Create an endpoint that fetches the content. This will allow you to retrieve the file and its associated metadata from the Content API."),(0,n.kt)("p",null,"From the ",(0,n.kt)("a",{parentName:"p",href:"/docs/management/api-list/"},"API")," screen, click ","[Add new endpoint]","."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/f3f8ca8445fb5c8eed8167f4e3c1e266.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/f3f8ca8445fb5c8eed8167f4e3c1e266.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"Create the following endpoint.  "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Item"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Path"),(0,n.kt)("td",{parentName:"tr",align:"left"},"list")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Category"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Content")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Model"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Topics")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Operation"),(0,n.kt)("td",{parentName:"tr",align:"left"},"list")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"topics_group_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ID of content structure")))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/0371d0094ac7aafbc8fea10aaea90c92.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/0371d0094ac7aafbc8fea10aaea90c92.png",alt:"Image from Gyazo"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/acf3126e90507b0e0d409c5c3b8ebc0e.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/acf3126e90507b0e0d409c5c3b8ebc0e.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"Once configured, click ","[Add]"," to add the endpoint."),(0,n.kt)("h3",{id:"check-the-response-in-the-swagger-ui"},"Check the response in the Swagger UI"),(0,n.kt)("p",null,"Click ","[Swagger UI]"," from the target API.",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/0ca2ec35c408d45e02eaf78d99b7fe47.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/0ca2ec35c408d45e02eaf78d99b7fe47.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"Click ","[Try it Out]"," on the Topics::list endpoint",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/0778409cc19b8b867d73478909e50a7d.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/0778409cc19b8b867d73478909e50a7d.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"Click ","[Execute]","."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/3c8a6b9e73587aaca570da4532474de8.jpg?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/3c8a6b9e73587aaca570da4532474de8.jpg",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"You should receive an API response that includes the credit and description metadata for the file. "),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/37d2e0973b0a98debdcec3364d95118b.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/37d2e0973b0a98debdcec3364d95118b.png",alt:"Image from Gyazo"})))}s.isMDXComponent=!0}}]);