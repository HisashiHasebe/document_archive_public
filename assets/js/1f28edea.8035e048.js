"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[58904],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},s="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),s=p(a),g=r,k=s["".concat(d,".").concat(g)]||s[g]||c[g]||l;return a?n.createElement(k,i(i({ref:e},m),{},{components:a})):n.createElement(k,i({ref:e},m))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=g;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[s]="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},73353:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={title:"Admin panel logs",category:"Operation",weight:75},i=void 0,o={unversionedId:"management/admin-log-list",id:"management/admin-log-list",title:"Admin panel logs",description:"The admin panel log list allows you to verify the operational logs for the admin panel.",source:"@site/docs/management/admin-log-list.md",sourceDirName:"management",slug:"/management/admin-log-list",permalink:"/docs/management/admin-log-list",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/management/admin-log-list.md",tags:[],version:"current",frontMatter:{title:"Admin panel logs",category:"Operation",weight:75},sidebar:"documentationSidebar",previous:{title:"API log",permalink:"/docs/management/api-log-list"},next:{title:"Mail log",permalink:"/docs/management/mail-log-list"}},d={},p=[{value:"Accessing the screen",id:"accessing-the-screen",level:2},{value:"Field descriptions",id:"field-descriptions",level:2},{value:"Filter conditions",id:"filter-conditions",level:3},{value:"Keywords search",id:"keywords-search",level:4},{value:"Timestamp search",id:"timestamp-search",level:4},{value:"Advanced search",id:"advanced-search",level:4},{value:"Available search operations",id:"available-search-operations",level:5},{value:"Sort",id:"sort",level:5},{value:"Log entries",id:"log-entries",level:3},{value:"Log levels",id:"log-levels",level:4},{value:"Action",id:"action",level:4},{value:"Buttons",id:"buttons",level:3},{value:"Log list download",id:"log-list-download",level:3}],m={toc:p},s="wrapper";function c(t){let{components:e,...a}=t;return(0,r.kt)(s,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The admin panel log list allows you to verify the operational logs for the admin panel."),(0,r.kt)("h2",{id:"accessing-the-screen"},"Accessing the screen"),(0,r.kt)("p",null,"In the left sidebar menu, click ","[Operation]"," -> ","[Log management]","."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/d683b95f211f04860bb522eb1135d912.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/d683b95f211f04860bb522eb1135d912.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"Click ","[Log management]"," above the page title, and select ","[Admin panel logs]"," in the dropdown menu."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/81478e9b97c6acbc6b6390996a9b3ce0.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/81478e9b97c6acbc6b6390996a9b3ce0.png",alt:"Image from Gyazo"})),(0,r.kt)("h2",{id:"field-descriptions"},"Field descriptions"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/8a0a3cc343cc83b1d44ffe7e97110a3c.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/8a0a3cc343cc83b1d44ffe7e97110a3c.png",alt:"Image from Gyazo"})),(0,r.kt)("h3",{id:"filter-conditions"},"Filter conditions"),(0,r.kt)("p",null,"You can filter the logs easily using the keywords search and log date/time, advanced search functions."),(0,r.kt)("h4",{id:"keywords-search"},"Keywords search"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/e74f1af053fe46987732ebfbe7f7c727.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/e74f1af053fe46987732ebfbe7f7c727.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"Enter the search keyword in the ","[Keyword]"," text box and click ","[Search]"," to filter logs that contain the specified keyword."),(0,r.kt)("h4",{id:"timestamp-search"},"Timestamp search"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/fa097c30c589a3a071057ae144341fc4.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/fa097c30c589a3a071057ae144341fc4.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"Select the date and time range for the timestamp and click ","[Search]",". \xa0\nThe designated logging period is 35 days. When specifying past log dates, please make sure to specify within the 35-day range. "),(0,r.kt)("h4",{id:"advanced-search"},"Advanced search"),(0,r.kt)("p",null,"Click the ","[Advanced search]"," button to input advanced filter conditions. "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/4d6f3eb6a47211eb4eac403d20ce61be.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/4d6f3eb6a47211eb4eac403d20ce61be.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"The following input options are available:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Specifiable conditions"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Host\xa0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Site accessed."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#available-search-operations"},"Available search operations"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Log level"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Log level indicating the importance of the message."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#available-search-operations"},"Available search operations"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Action"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Type of action."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#action"},"Action"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"HTTP method\xa0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"HTTP method of the request."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#available-search-operations"},"Available search operations"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Message","[1]","-","[3]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Supplemental information about the log."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#available-search-operations"},"Available search operations"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"URI"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Accessed page URI."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#available-search-operations"},"Available search operations"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Client IP address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"IP address of the user."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#available-search-operations"},"Available search operations"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Member ID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Member ID of the user who attempted the access."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#available-search-operations"},"Available search operations"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Application request ID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Unique request ID used by Kuroco."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#available-search-operations"},"Available search operations"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"User agent\xa0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"User agent of the browser used for the access."),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("p",null,"The advanced search function allows you to concatenate multiple conditions using ",(0,r.kt)("inlineCode",{parentName:"p"},"AND")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"OR"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AND"),": Returns only data matching all the specified conditions in your search."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"OR"),": Returns data matching any of your specified conditions.")),(0,r.kt)("h5",{id:"available-search-operations"},"Available search operations"),(0,r.kt)("p",null,"You can specify the following operations in the search conditions:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Operation"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Input type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Returned data"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"contains")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Text string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Entries matching part of the search term.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"not contains")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Text string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Entries not matching any part of the search term.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"=")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Alphanumeric string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Entries exactly matching the search term.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"!=")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Alphanumeric string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Entries not exactly matching the search term.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"<")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Alphanumeric string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Entries less than the search term.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},">")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Alphanumeric string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Entries greater than the search term.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"<=")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Alphanumeric string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Entries less than or equal to the search term.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},">=")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Alphanumeric string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Entries greater than or equal to the search term.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"starts with")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Text string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Entries beginning with the search term.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"not starts with")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Text string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Entries not beginning with the search term.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ends with")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Text string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Entries ending with the search term.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"not ends with")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Text string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Entries not ending with the search term.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"in")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Alphanumeric string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Entries matching any of the search terms (for multiple search terms only).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"not in")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Alphanumeric string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Entries not matching any of the search terms (for multiple search terms only).")))),(0,r.kt)("h5",{id:"sort"},"Sort"),(0,r.kt)("p",null,'Under "Sort", you can specify the sort key and display order of the search results.'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ASC"),": Ascending, from oldest to newest."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DESC"),": Descending, from newest to oldest.")),(0,r.kt)("h3",{id:"log-entries"},"Log entries"),(0,r.kt)("p",null,"The columns displayed for the log entries are as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Column"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Timestamp"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Date and time the log was recorded.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Host\xa0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Site accessed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Log level"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Log level indicating the importance of the message. See: ",(0,r.kt)("a",{parentName:"td",href:"#log-levels"},"Log levels")," below for details.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Action"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Type of action. See: ",(0,r.kt)("a",{parentName:"td",href:"#action"},"Action")," below for details.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"HTTP method"),(0,r.kt)("td",{parentName:"tr",align:"left"},"HTTP method of the request.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Message","[1]","-","[3]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Supplemental information about the log. The higher the message number, the more detailed the message contents.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"URI"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Accessed page URI.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Client IP address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"IP address of the user who attempted the access.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Member ID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Member ID of the user who attempted the access.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Application request ID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Unique request ID used by Kuroco.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"User agent\xa0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"User agent of the browser used for the access.")))),(0,r.kt)("h4",{id:"log-levels"},"Log levels"),(0,r.kt)("p",null,"Logs can be categorized into the 9 levels below, listed in order of increasing importance:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default"),(0,r.kt)("li",{parentName:"ul"},"Debug"),(0,r.kt)("li",{parentName:"ul"},"Info"),(0,r.kt)("li",{parentName:"ul"},"Notice"),(0,r.kt)("li",{parentName:"ul"},"Warning"),(0,r.kt)("li",{parentName:"ul"},"Error"),(0,r.kt)("li",{parentName:"ul"},"Critical"),(0,r.kt)("li",{parentName:"ul"},"Alert"),(0,r.kt)("li",{parentName:"ul"},"Emergency")),(0,r.kt)("h4",{id:"action"},"Action"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Value"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description\xa0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Messages\xa0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The details of the message are displayed in Message","[1]",".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Access\xa0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Access log.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"RCMSForbiddenException\xa0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Exception error.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"UnauthorizedException\xa0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Exception error.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"NotFoundModuleException\xa0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Exception error.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"NotFoundException\xa0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Exception error.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"BadRequestException\xa0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Exception error.")))),(0,r.kt)("h3",{id:"buttons"},"Buttons"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/27f63b812bb20d0fc96e662514068dec.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/27f63b812bb20d0fc96e662514068dec.png",alt:"Image from Gyazo"})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Button"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description\xa0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Search"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Search based on the above settings.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Download"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Download a list of the displayed logs.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Delete"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Delete a list of the displayed logs.")))),(0,r.kt)("h3",{id:"log-list-download"},"Log list download"),(0,r.kt)("p",null,"After click ","[Download]"," button, the download settings will open.\n",(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/00db3f2b75861791e6326059c75ffb71.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/00db3f2b75861791e6326059c75ffb71.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/74037a5da53d347584c2e77f25cb9329.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/74037a5da53d347584c2e77f25cb9329.png",alt:"Image from Gyazo"})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field(s)"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description\xa0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Charset"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Character encoding of the output CSV file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Cancel"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Cancel downloading.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Download"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Execute downloading.")))))}c.isMDXComponent=!0}}]);