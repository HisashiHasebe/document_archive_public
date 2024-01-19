"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[92315],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>k});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var d=r.createContext({}),s=function(t){var e=r.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=s(t.components);return r.createElement(d.Provider,{value:e},t.children)},m="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,d=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),m=s(a),g=n,k=m["".concat(d,".").concat(g)]||m[g]||c[g]||l;return a?r.createElement(k,i(i({ref:e},p),{},{components:a})):r.createElement(k,i({ref:e},p))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=g;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[m]="string"==typeof t?t:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},89171:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const l={title:"Custom logs",category:"Operation",weight:75},i=void 0,o={unversionedId:"management/custom-log-list",id:"management/custom-log-list",title:"Custom logs",description:"Custom logs allow you to see the contents of the log output from the original process.",source:"@site/docs/management/custom-log-list.md",sourceDirName:"management",slug:"/management/custom-log-list",permalink:"/docs/management/custom-log-list",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/management/custom-log-list.md",tags:[],version:"current",frontMatter:{title:"Custom logs",category:"Operation",weight:75},sidebar:"documentationSidebar",previous:{title:"JavaScript logs",permalink:"/docs/management/js-log-list"},next:{title:"SendGrid logs",permalink:"/docs/management/sendgrid-log-list"}},d={},s=[{value:"Accessing the screen",id:"accessing-the-screen",level:2},{value:"Field descriptions",id:"field-descriptions",level:2},{value:"Filter conditions",id:"filter-conditions",level:3},{value:"Keywords search",id:"keywords-search",level:4},{value:"Date and time search",id:"date-and-time-search",level:4},{value:"Advanced search",id:"advanced-search",level:4},{value:"Available search operations",id:"available-search-operations",level:5},{value:"Sort",id:"sort",level:5},{value:"Log entries",id:"log-entries",level:3},{value:"Log levels",id:"log-levels",level:4},{value:"Buttons",id:"buttons",level:3},{value:"Log list download",id:"log-list-download",level:3}],p={toc:s},m="wrapper";function c(t){let{components:e,...a}=t;return(0,n.kt)(m,(0,r.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Custom logs allow you to see the contents of the log output from the original process.\nLogs should be prepared in the original process as ",(0,n.kt)("inlineCode",{parentName:"p"},"{logger msg1=$json msg2=$output msg3=$smarty.request msg4='test4'}"),"."),(0,n.kt)("h2",{id:"accessing-the-screen"},"Accessing the screen"),(0,n.kt)("p",null,"In the left sidebar menu, click ","[Operation]"," -> ","[Log management]",".",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/d683b95f211f04860bb522eb1135d912.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/d683b95f211f04860bb522eb1135d912.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"Click ","[Log management]"," above the page title, and select ","[API request log]"," in the dropdown menu.",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/1c1107cfe415475271b44eef0c437439.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/1c1107cfe415475271b44eef0c437439.png",alt:"Image from Gyazo"})),(0,n.kt)("h2",{id:"field-descriptions"},"Field descriptions"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/776469c6ca889c43537e9e48e4568c77.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/776469c6ca889c43537e9e48e4568c77.png",alt:"Image from Gyazo"})),(0,n.kt)("h3",{id:"filter-conditions"},"Filter conditions"),(0,n.kt)("p",null,"You can filter the logs easily using the keywords search and log date/time, advanced search functions."),(0,n.kt)("h4",{id:"keywords-search"},"Keywords search"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/b1487a4104c38255b55516e5c5c5c084.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/b1487a4104c38255b55516e5c5c5c084.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"Enter the search keyword in the ","[Keyword]"," text box and click ","[Search]"," to filter logs that contain the specified keyword."),(0,n.kt)("h4",{id:"date-and-time-search"},"Date and time search"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/4d37adb6f18dc9afb264bae3f7b06261.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/4d37adb6f18dc9afb264bae3f7b06261.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"Select the date and time range for the timestamp and click ","[Search]",". \xa0\nThe designated logging period is 35 days. When specifying past log dates, please make sure to specify within the 35-day range."),(0,n.kt)("h4",{id:"advanced-search"},"Advanced search"),(0,n.kt)("p",null,'You can create refinements by clicking the "Advanced Search" button and setting different filter conditions.',(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/4fe9b9b0d70612b8d9eefc21d522b85d.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/4fe9b9b0d70612b8d9eefc21d522b85d.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"The following option is available:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Specifiable conditions"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Host"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Site accessed."),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#available-search-operations"},"Available search operations"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Log level"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Log level indicating the importance of the message."),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#available-search-operations"},"Available search operations"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Message","[1]","-","[4]"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Supplemental information about the log."),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#available-search-operations"},"Available search operations"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"URI"),(0,n.kt)("td",{parentName:"tr",align:"left"},"URI of the request endpoint."),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#available-search-operations"},"Available search operations"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Client IP address"),(0,n.kt)("td",{parentName:"tr",align:"left"},"IP address of the user making the request."),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#available-search-operations"},"Available search operations"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Member ID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Member ID of the user who attempted the access."),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#available-search-operations"},"Available search operations"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Application request ID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Unique request ID used by Kuroco."),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#available-search-operations"},"Available search operations"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"User agent"),(0,n.kt)("td",{parentName:"tr",align:"left"},"User agent of the browser used for the access."),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#available-search-operations"},"Available search operations"))))),(0,n.kt)("p",null,"The advanced search function allows you to concatenate multiple conditions using ",(0,n.kt)("inlineCode",{parentName:"p"},"AND")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"OR"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"AND"),": Returns only data matching all the specified conditions in your search."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"OR"),": Returns data matching any of your specified conditions.")),(0,n.kt)("h5",{id:"available-search-operations"},"Available search operations"),(0,n.kt)("p",null,"You can specify the following operations in the search conditions:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Operation"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Input type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Returned data"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"contains")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Text string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Entries matching part of the search term.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"not contains")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Text string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Entries not matching any part of the search term.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"=")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Alphanumeric string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Entries exactly matching the search term.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"!=")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Alphanumeric string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Entries not exactly matching the search term.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"<")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Alphanumeric string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Entries less than the search term.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},">")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Alphanumeric string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Entries greater than the search term.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"<=")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Alphanumeric string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Entries less than or equal to the search term.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},">=")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Alphanumeric string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Entries greater than or equal to the search term.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"starts with")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Text string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Entries beginning with the search term.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"not starts with")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Text string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Entries not beginning with the search term. \xa0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"ends with")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Text string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Entries ending with the search term.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"not ends with")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Text string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Entries not ending with the search term.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"in")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Alphanumeric string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Entries matching any of the search terms (for multiple search terms only).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"not in")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Alphanumeric string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Entries not matching any of the search terms (for multiple search terms only).")))),(0,n.kt)("h5",{id:"sort"},"Sort"),(0,n.kt)("p",null,'Under "Sort", you can specify the sort key and display order of the search results.'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ASC"),": Ascending, from oldest to newest."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"DESC"),": Descending, from newest to oldest.")),(0,n.kt)("h3",{id:"log-entries"},"Log entries"),(0,n.kt)("p",null,"The columns displayed for the log entries are as follows:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Column"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Timestamp"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Date and time the log was recorded.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Host"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Site accessed.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Log level"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Log level indicating the importance of the message. See: ",(0,n.kt)("a",{parentName:"td",href:"#log-levels"},"Log levels")," below for details.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Message","[1]","-","[4]"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Supplemental information about the log.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"URI"),(0,n.kt)("td",{parentName:"tr",align:"left"},"URI of the request endpoint.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Client IP address"),(0,n.kt)("td",{parentName:"tr",align:"left"},"IP address of the user making the request.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Member ID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Member ID of the user who attempted the access.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Application request ID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Unique request ID used by Kuroco.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"User agent"),(0,n.kt)("td",{parentName:"tr",align:"left"},"User agent of the browser used for the access.")))),(0,n.kt)("h4",{id:"log-levels"},"Log levels"),(0,n.kt)("p",null,"Logs can be categorized into the 9 levels below, listed in order of increasing importance:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Default"),(0,n.kt)("li",{parentName:"ul"},"Debug"),(0,n.kt)("li",{parentName:"ul"},"Info"),(0,n.kt)("li",{parentName:"ul"},"Notice"),(0,n.kt)("li",{parentName:"ul"},"Warning"),(0,n.kt)("li",{parentName:"ul"},"Error"),(0,n.kt)("li",{parentName:"ul"},"Critical"),(0,n.kt)("li",{parentName:"ul"},"Alert"),(0,n.kt)("li",{parentName:"ul"},"Emergency")),(0,n.kt)("h3",{id:"buttons"},"Buttons"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/29e36fe365bab9ff404b5c05b3664b05.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/29e36fe365bab9ff404b5c05b3664b05.png",alt:"Image from Gyazo"})),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Button"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description\xa0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Search"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Search based on the above settings. \xa0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Download"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Download a list of the displayed logs.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Delete"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Delete a list of the displayed logs.")))),(0,n.kt)("h3",{id:"log-list-download"},"Log list download"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/2e5e4a0f3e125570df69dbe90c38ee61.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/2e5e4a0f3e125570df69dbe90c38ee61.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"After click ","[Download]"," button, the download settings will open.\n",(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/8f74afeec7eb80d31411bb92d5ff9700.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/8f74afeec7eb80d31411bb92d5ff9700.png",alt:"Image from Gyazo"})),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Field(s)"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description\xa0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Charset"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Character encoding of the output CSV file.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Cancel"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Cancel downloading.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Download"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Execute downloading.")))))}c.isMDXComponent=!0}}]);