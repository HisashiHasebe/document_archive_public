"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[31100],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>g});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var d=r.createContext({}),s=function(t){var e=r.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=s(t.components);return r.createElement(d.Provider,{value:e},t.children)},p="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,d=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),p=s(a),f=n,g=p["".concat(d,".").concat(f)]||p[f]||c[f]||i;return a?r.createElement(g,o(o({ref:e},m),{},{components:a})):r.createElement(g,o({ref:e},m))}));function g(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,o=new Array(i);o[0]=f;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l[p]="string"==typeof t?t:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},52607:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const i={title:"Form field settings",category:"Campaign",weight:93},o=void 0,l={unversionedId:"management/form-field-settings",id:"management/form-field-settings",title:"Form field settings",description:"On the form field settings screen, you can configure the fields of the inquiry form.",source:"@site/docs/management/form-field-settings.md",sourceDirName:"management",slug:"/management/form-field-settings",permalink:"/docs/management/form-field-settings",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/management/form-field-settings.md",tags:[],version:"current",frontMatter:{title:"Form field settings",category:"Campaign",weight:93},sidebar:"documentationSidebar",previous:{title:"Form copy",permalink:"/docs/management/form-copy"},next:{title:"Answers",permalink:"/docs/management/inquiry-answer"}},d={},s=[{value:"Accessing the screen",id:"accessing-the-screen",level:2},{value:"Item descriptions",id:"item-descriptions",level:2},{value:"Form fields",id:"form-fields",level:3},{value:"Answer format",id:"answer-format",level:3},{value:"Category editor",id:"category-editor",level:3},{value:"Actions",id:"actions",level:2},{value:"Upload",id:"upload",level:3},{value:"Changelog",id:"changelog",level:3},{value:"Field settings changelog",id:"field-settings-changelog",level:3},{value:"Related documents",id:"related-documents",level:2}],m={toc:s},p="wrapper";function c(t){let{components:e,...a}=t;return(0,n.kt)(p,(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"On the form field settings screen, you can configure the fields of the inquiry form."),(0,n.kt)("h2",{id:"accessing-the-screen"},"Accessing the screen"),(0,n.kt)("p",null,"In the left sidebar menu, select ","[Campaign]"," -> ","[Form]","."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/74bbf87d40d236e926114e48fdef69d2.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/74bbf87d40d236e926114e48fdef69d2.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"On the form list screen, click the title of the inquiry form you want to edit."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/e2a6260abf07ab9a861cd2b37f15269b.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/e2a6260abf07ab9a861cd2b37f15269b.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"On the form editor screen, click the ","[Field settings]"," tab.  "),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/21b7e30c5a62c5bd4f74b8238f99f376.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/21b7e30c5a62c5bd4f74b8238f99f376.png",alt:"Image from Gyazo"})),(0,n.kt)("h2",{id:"item-descriptions"},"Item descriptions"),(0,n.kt)("h3",{id:"form-fields"},"Form fields"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/92d1a1c5ccf513a6193b6d3a58f7b84b.jpg?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/92d1a1c5ccf513a6193b6d3a58f7b84b.jpg",alt:"Image from Gyazo"})),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Field")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Description")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Title"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Title displayed on the inquiry form.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Required attribute"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("ul",null,(0,n.kt)("li",null,"Optional: Filling of the current field is optional."),(0,n.kt)("li",null,"Required: An error message will be displayed if the current field is left unfilled."),(0,n.kt)("li",null,"Don't use: Do not display the current field in the inquiry form.")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Answer format / Input restriction"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Click ","[Settings]"," to configure input options, extensions, items, etc.",(0,n.kt)("br",null),"(See: ",(0,n.kt)("a",{parentName:"td",href:"#answer-format"},"Answer format")," section for details.)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Sort order (descending)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Sort numbers of the fields.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Identifier"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Unique ID of the field (automatically assigned).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Clear"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Clear all settings for the current field.")))),(0,n.kt)("h3",{id:"answer-format"},"Answer format"),(0,n.kt)("p",null,"Click the ","[Settings]"," link to open the settings dialog for the corresponding field."),(0,n.kt)("p",null,"Example: Text box with an input limit of 100 - 400 characters."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/234cce96a473fd9a946f41749fe872c4.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/234cce96a473fd9a946f41749fe872c4.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"Example: Dropdown list with three options."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/501cf4ca71c981ba1b9414a628fee930.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/501cf4ca71c981ba1b9414a628fee930.png",alt:"Image from Gyazo"})),(0,n.kt)("h3",{id:"category-editor"},"Category editor"),(0,n.kt)("p",null,"The category editor allows you to add and configure the categories displayed in the inquiry form. For each category, you can specify a different set of recipients for the notification e-mail."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/27d3b22a2ca34205f9db9740b37b7833.jpg?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/27d3b22a2ca34205f9db9740b37b7833.jpg",alt:"Image from Gyazo"})),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Field")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Description")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Unique ID of the category (automatically assigned).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Category"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Name of the category.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"E-mail recipients"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Notification e-mail address for the corresponding category. For multiple addresses, enter each address on a separate line using the enter key.",(0,n.kt)("br",null),"Note: To receive automated replies, you must specify an admin e-mail address on the Account screen.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Sort"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Sort number of the category. Entries will be sorted in descending numerical order.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Delete"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check the box and click ","[Update]"," to delete the corresponding category.")))),(0,n.kt)("h2",{id:"actions"},"Actions"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/19005851829ac773a74f510b691ef46f.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/19005851829ac773a74f510b691ef46f.png",alt:"Image (fetched from Gyazo)"})),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Button")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Description")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Update"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Apply any changes made on this screen.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Download"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Downloads the field values in a CSV file.")))),(0,n.kt)("h3",{id:"upload"},"Upload"),(0,n.kt)("p",null,"You can batch update the field values by uploading them in a CSV file. To verify the contents of the CSV file, download a copy using the ","[Download]"," button next to ","[Update]","."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/b50bc55cc984e3ff19100e93f1e02a99.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/b50bc55cc984e3ff19100e93f1e02a99.png",alt:"Image (fetched from Gyazo)"})),(0,n.kt)("h3",{id:"changelog"},"Changelog"),(0,n.kt)("p",null,"Click the ","[More]"," in the upper right corner of the Form editor screen, then click ","[Basic settings changelog]"," to see a list of the history of editing the basic settings."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/d26669cb629d0e4a40aef78e766d9cfd.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/d26669cb629d0e4a40aef78e766d9cfd.png",alt:"Image from Gyazo"})),(0,n.kt)("h3",{id:"field-settings-changelog"},"Field settings changelog"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/cb2cb09a2407e7ea6c8207ec47e33427.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/cb2cb09a2407e7ea6c8207ec47e33427.png",alt:"Image from Gyazo"})),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Item \xa0"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description \xa0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Displays the version.",(0,n.kt)("br",null),"You can see the target version after clicking the version link.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Updated on"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Displays the date and time the content was updated.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Updated by"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Displays the name of the member who updated the content.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Action"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Displays the type of processing performed.",(0,n.kt)("br",null),"There are six types of statuses as follows",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",null,"Create new"),(0,n.kt)("li",null,"Update"),(0,n.kt)("li",null,"Deleted"),(0,n.kt)("li",null,"Request"),(0,n.kt)("li",null,"Approved"),(0,n.kt)("li",null,"Reject Approval")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Comment"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Displays the comments at the time of update.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Content"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Displays the updated contents.")))),(0,n.kt)("h2",{id:"related-documents"},"Related documents"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/reference/form-field-list/"},"List of available fields in the inquiry form")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/tutorials/setting-up-inquiry-forms/"},"Setting up inquiry forms with Kuroco and Nuxt.js")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/faq/how-can-i-change-the-destination-of-the-email-recipients-depending-on-the-item-choices/"},"Can I change the recipient email address based on the selected option?"))))}c.isMDXComponent=!0}}]);