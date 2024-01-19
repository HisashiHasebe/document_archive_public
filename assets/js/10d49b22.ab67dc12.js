"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[35857],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>g});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=r.createContext({}),d=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},c=function(t){var e=d(t.components);return r.createElement(s.Provider,{value:e},t.children)},m="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},h=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,s=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),m=d(a),h=n,g=m["".concat(s,".").concat(h)]||m[h]||p[h]||i;return a?r.createElement(g,l(l({ref:e},c),{},{components:a})):r.createElement(g,l({ref:e},c))}));function g(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,l=new Array(i);l[0]=h;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[m]="string"==typeof t?t:n,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},15835:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const i={title:"About the search function on the Kuroco Administration page",description:"The Kuroco administration screen has a search function that allows you to search in the content list, log list, and other screens. The search function has several patterns depending on the target page."},l=void 0,o={unversionedId:"reference/search-function-on-kuroco-admin-panel",id:"reference/search-function-on-kuroco-admin-panel",title:"About the search function on the Kuroco Administration page",description:"The Kuroco administration screen has a search function that allows you to search in the content list, log list, and other screens. The search function has several patterns depending on the target page.",source:"@site/docs/reference/search-function-on-kuroco-admin-panel.md",sourceDirName:"reference",slug:"/reference/search-function-on-kuroco-admin-panel",permalink:"/docs/reference/search-function-on-kuroco-admin-panel",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/reference/search-function-on-kuroco-admin-panel.md",tags:[],version:"current",frontMatter:{title:"About the search function on the Kuroco Administration page",description:"The Kuroco administration screen has a search function that allows you to search in the content list, log list, and other screens. The search function has several patterns depending on the target page."},sidebar:"documentationSidebar",previous:{title:"WYSIWYG custom color settings",permalink:"/docs/reference/wysiwyg-custom-color-settings"},next:{title:"List of available fields in the inquiry form",permalink:"/docs/reference/form-field-list"}},s={},d=[{value:"Regular search",id:"regular-search",level:2},{value:"Keyword search",id:"keyword-search",level:3},{value:"Search data",id:"search-data",level:5},{value:"Item search",id:"item-search",level:3},{value:"Advanced search",id:"advanced-search",level:2},{value:"Operations available for Advanced search",id:"operations-available-for-advanced-search",level:3},{value:"Sort order",id:"sort-order",level:3},{value:"Search in the admin panel",id:"search-in-the-admin-panel",level:2}],c={toc:d},m="wrapper";function p(t){let{components:e,...a}=t;return(0,n.kt)(m,(0,r.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The Kuroco administration screen has a search function that allows you to search in the content list, log list, and other screens.\nThe search function has several patterns depending on the target page, which are described here.   "),(0,n.kt)("h2",{id:"regular-search"},"Regular search"),(0,n.kt)("p",null,"On every content listing page, there is a search field to look up content. There are two ways to search: keyword search, which lets you search through each item in the data, and item search, which enables you to search through specific items. The following list displays which pages are eligible for each type of search.  "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Page"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Search item"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Content structure list"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Keyword")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Content list"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Keyword")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Form list"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Keyword")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Submissions"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Keyword")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Member list"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Keyword")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Group list"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Keyword")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Custom member filter list"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Keyword")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Custom function list"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Keyword")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Message template list"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Keyword")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Pending member list"),(0,n.kt)("td",{parentName:"tr",align:"left"},"E-mail address")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Log management"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Keyword")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Login logs"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Member ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"API logs"),(0,n.kt)("td",{parentName:"tr",align:"left"},"URI")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Admin panel log"),(0,n.kt)("td",{parentName:"tr",align:"left"},"URI")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Mail logs"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Recipient")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Batch process logs"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Message","[1]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"API request log"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Endpoint")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"App logs"),(0,n.kt)("td",{parentName:"tr",align:"left"},"URI")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"KurocoFiles logs"),(0,n.kt)("td",{parentName:"tr",align:"left"},"URI")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"KurocoFront logs"),(0,n.kt)("td",{parentName:"tr",align:"left"},"URI")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"JavaScript logs"),(0,n.kt)("td",{parentName:"tr",align:"left"},"URI")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Custom logs"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Message","[1]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"SendGrid logs"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Recipient")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"API analytics"),(0,n.kt)("td",{parentName:"tr",align:"left"},"URI")))),(0,n.kt)("p",null,'If there is "Advanced search" button, click it to pull down the items or "Filter conditions" to ',(0,n.kt)("a",{parentName:"p",href:"#Advanced-search"},"Advanced search"),"."),(0,n.kt)("h3",{id:"keyword-search"},"Keyword search"),(0,n.kt)("p",null,"The search input area for keyword searches is shown for content, forms, and members.\nThe specifications of the keyword search and the search results if the following data are available are shown below."),(0,n.kt)("h5",{id:"search-data"},"Search data"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/428911cf24cecf78199de0eca756727c.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/428911cf24cecf78199de0eca756727c.png",alt:"Image from Gyazo"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Alphabetical case is not sensitive.\n",(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/18776a43b0ff8358945848682ad39390.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/18776a43b0ff8358945848682ad39390.png",alt:"Image from Gyazo"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The text of the selected item is also subject to search.\n",(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/d97e1f2696b4bd09f16ae516b44997cc.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/d97e1f2696b4bd09f16ae516b44997cc.png",alt:"Image from Gyazo"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"In the case of a single keyword, an OR search is performed between different items of the same data. \xa0\n\xa0 (If any of the keywords are in the data, they are eligible.)\n",(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/1b7ad4d850594a1618ee019aa6c31a5a.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/1b7ad4d850594a1618ee019aa6c31a5a.png",alt:"Image from Gyazo"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"In the case of space delimitation, AND search is performed between keywords.",(0,n.kt)("br",{parentName:"p"}),"\n","(All keywords are included in the data.)\n",(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/e20d4e6294d1aef09f6c5645f254cd91.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/e20d4e6294d1aef09f6c5645f254cd91.png",alt:"Image from Gyazo"})))),(0,n.kt)("h3",{id:"item-search"},"Item search"),(0,n.kt)("p",null,"On the various log listing pages, the search box for URI and member ID is displayed by default. In addition, searching by date along with items is also possible."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/4e91e5f13b6e9a8efb217d8a6710d3da.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/4e91e5f13b6e9a8efb217d8a6710d3da.png",alt:"Image from Gyazo"})),(0,n.kt)("h2",{id:"advanced-search"},"Advanced search"),(0,n.kt)("p",null,'Clicking on the "Advanced search" button will display additional items for advanced search.\nWhen the fields for narrowing condition search are displayed, flexible search is possible by specifying operations and combining AND and OR.'),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/07924872879276c5728502b80d5c5432.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/07924872879276c5728502b80d5c5432.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"The refinements that can be set depend on the page."),(0,n.kt)("p",null,"Advanced search can concatenate multiple conditions as AND or OR, where AND targets only the data that matches all of the specified conditions and OR targets the data that matches any of the specified conditions."),(0,n.kt)("h3",{id:"operations-available-for-advanced-search"},"Operations available for Advanced search"),(0,n.kt)("p",null,"The following operations can be specified in the search."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Operation"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Input type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Returned data"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"contains"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Text string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Entries matching part of the search term.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"not contains"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Text string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Entries not matching any part of the search term.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"="),(0,n.kt)("td",{parentName:"tr",align:"left"},"Alphanumeric string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Entries exactly matching the search term.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"!="),(0,n.kt)("td",{parentName:"tr",align:"left"},"Alphanumeric string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Entries not exactly matching the search term.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"<"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Alphanumeric string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Entries less than the search term.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},">"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Alphanumeric string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Entries greater than the search term.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"<="),(0,n.kt)("td",{parentName:"tr",align:"left"},"Alphanumeric string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Entries less than or equal to the search term.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},">="),(0,n.kt)("td",{parentName:"tr",align:"left"},"Alphanumeric string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Entries greater than or equal to the search term.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"starts with"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Text string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Entries beginning with the search term.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"not starts with"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Text string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Entries not beginning with the search term. \xa0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ends with"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Text string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Entries ending with the search term.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"not ends with"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Text string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Entries not ending with the search term.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"in"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Alphanumeric string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Entries matching any of the search terms (for multiple search terms only).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"not in"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Alphanumeric string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Entries not matching any of the search terms (for multiple search terms only).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Is Empty"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Alphanumeric string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Data with no selections made.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Is not Empty"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Alphanumeric string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Data with at least one selection made.")))),(0,n.kt)("h3",{id:"sort-order"},"Sort order"),(0,n.kt)("p",null,'Under "Sort", you can specify the sort key and display order of the search results.'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ASC: Ascending, from oldest to newest."),(0,n.kt)("li",{parentName:"ul"},"DESC: Descending, from newest to oldest.")),(0,n.kt)("h2",{id:"search-in-the-admin-panel"},"Search in the admin panel"),(0,n.kt)("p",null,"You can search for keywords in Kuroco's content from the Dashboard or from the sidebar under Search."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/77b0ad9aa2131a0db36bf583d2359624.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/77b0ad9aa2131a0db36bf583d2359624.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/b100454bdce065791eb83e2a15db9e96.jpg?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/b100454bdce065791eb83e2a15db9e96.jpg",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"The searches are listed below, and the number of results for each keyword search is displayed."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Custom function list"),(0,n.kt)("li",{parentName:"ul"},"Message template list"),(0,n.kt)("li",{parentName:"ul"},"Content defined in Content Definition")))}p.isMDXComponent=!0}}]);