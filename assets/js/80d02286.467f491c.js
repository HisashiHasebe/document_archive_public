"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[65326],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>h});var n=a(67294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var l=n.createContext({}),c=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=c(t.components);return n.createElement(l.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,r=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),d=c(a),m=o,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return a?n.createElement(h,i(i({ref:e},p),{},{components:a})):n.createElement(h,i({ref:e},p))}));function h(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=a.length,i=new Array(r);i[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[d]="string"==typeof t?t:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},89616:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const r={title:"Customize CSV data structure output using Custom Function",category:"Operation",weight:1},i=void 0,s={unversionedId:"tutorials/how-to-implement-original-function-into-the-postprocess",id:"tutorials/how-to-implement-original-function-into-the-postprocess",title:"Customize CSV data structure output using Custom Function",description:"Overview",source:"@site/docs/tutorials/how-to-implement-original-function-into-the-postprocess.md",sourceDirName:"tutorials",slug:"/tutorials/how-to-implement-original-function-into-the-postprocess",permalink:"/docs/tutorials/how-to-implement-original-function-into-the-postprocess",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/tutorials/how-to-implement-original-function-into-the-postprocess.md",tags:[],version:"current",frontMatter:{title:"Customize CSV data structure output using Custom Function",category:"Operation",weight:1},sidebar:"documentationSidebar",previous:{title:"Send automated notifications for new content using a custom function",permalink:"/docs/tutorials/how-to-implement-original-function-into-the-middle-of-processing-by-using-function"},next:{title:"Specify the membership group based on the domain at the time of member registration",permalink:"/docs/tutorials/change-the-default-group-for-member-registration-depending-on-the-domain"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"What you&#39;ll learn",id:"what-youll-learn",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Create Custom Function",id:"create-custom-function",level:2},{value:"1. Display the Custom Function list page",id:"1-display-the-custom-function-list-page",level:3},{value:"2. Display the Custom Function editor page",id:"2-display-the-custom-function-editor-page",level:3},{value:"3. Enter the title and identifier",id:"3-enter-the-title-and-identifier",level:3},{value:"4. Write data processing code",id:"4-write-data-processing-code",level:3},{value:"6. Save the custom function",id:"6-save-the-custom-function",level:3},{value:"Register the custom function with an endpoint",id:"register-the-custom-function-with-an-endpoint",level:2},{value:"Testing",id:"testing",level:2},{value:"1. Download the CSV file.",id:"1-download-the-csv-file",level:3},{value:"2. Confirm the contents of the file.",id:"2-confirm-the-contents-of-the-file",level:3},{value:"Note",id:"note",level:2},{value:"Related documents",id:"related-documents",level:2}],p={toc:c},d="wrapper";function u(t){let{components:e,...a}=t;return(0,o.kt)(d,(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Custom function can be used to customize the file data output of an API. In this tutorial, we will add the content's editor page URL to in CSV format output."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/82cb526150b6ba7b89a9c8bc7ba7c39a.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/82cb526150b6ba7b89a9c8bc7ba7c39a.png",alt:"Image from Gyazo"})),(0,o.kt)("h3",{id:"what-youll-learn"},"What you'll learn"),(0,o.kt)("p",null,"In this tutorial, you will manipulate CSV output using the API with the following steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#create-custom-function"},"Create custom function")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#register-the-custom-function-with-an-endpoint"},"Register custom function to the endpoint"))),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"In this tutorial, we will add a custom function to content list endpoints during post-processing, and the custom function is performed when the target endpoint returns a response in CSV format.  "),(0,o.kt)("p",null,"Refer to the following document on how to get a response in CSV format from the endpoint.  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/faq/how-can-i-response-csv-format"},"Can the API respond in formats other than JSON?"))),(0,o.kt)("h2",{id:"create-custom-function"},"Create Custom Function"),(0,o.kt)("p",null,"Let's create a custom function."),(0,o.kt)("h3",{id:"1-display-the-custom-function-list-page"},"1. Display the Custom Function list page"),(0,o.kt)("p",null,"Click ","[Operation]"," -> ","[Custom function]"," in the menu. "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/483b4cb835e5d976778428d171d23540.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/483b4cb835e5d976778428d171d23540.png",alt:"Image from Gyazo"}),"  "),(0,o.kt)("h3",{id:"2-display-the-custom-function-editor-page"},"2. Display the Custom Function editor page"),(0,o.kt)("p",null,"Click ","[Add]"," in the upper right corner of the custom function list screen.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/1b9252ef72187959ec61343c45060764.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/1b9252ef72187959ec61343c45060764.png",alt:"Image from Gyazo"})),(0,o.kt)("p",null,"Then, the custom function editor page will be displayed.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/476c58d9cdd8f356a8e5658e8bc5b1de.jpg?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/476c58d9cdd8f356a8e5658e8bc5b1de.jpg",alt:"Image from Gyazo"})),(0,o.kt)("h3",{id:"3-enter-the-title-and-identifier"},"3. Enter the title and identifier"),(0,o.kt)("p",null,"First, enter the title and identifier as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Title: Contents CSV Edit"),(0,o.kt)("li",{parentName:"ul"},"Identifier: sample1_postprocess"),(0,o.kt)("li",{parentName:"ul"},"Trigger: Not specified")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The title and identifier cannot be the same as other custom functions. Please enter unique value, avoid using values such as the endpoint name that will be used in the custom function.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/8a5029f45cd45225cb60673156d4b239.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/8a5029f45cd45225cb60673156d4b239.png",alt:"Image from Gyazo"})),(0,o.kt)("h3",{id:"4-write-data-processing-code"},"4. Write data processing code"),(0,o.kt)("p",null,"Next, we will write the actual processing code."),(0,o.kt)("p",null,"We will write the code to add data to the editor."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Write the process to get the Content ID"),(0,o.kt)("br",{parentName:"p"}),"\n","First, we will read the header row to get the Content ID."),(0,o.kt)("p",null,"The available variables are as follows."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Variable Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"$json.csv_data"),(0,o.kt)("td",{parentName:"tr",align:"left"},"object"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Content data")))),(0,o.kt)("p",null,"Enter the following in the editor."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-smarty"},"{assign_array var=processed_list values=\"\"}\n{* In the case of CSV *}\n{if $json.csv_data}\n    {foreach from=$json.csv_data item=row name=csv_data}\n        {if $smarty.foreach.csv_data.index eq 0}{* header line *}\n            {foreach from=$row item=header_title name=header_data}\n                {if $header_title eq 'Topic ID'}\n                    {* Get topic ID row *}\n                    {assign var=contents_id_col_index value=$smarty.foreach.header_data.index}\n                {/if}\n            {/foreach}\n            {append var=row value=\"Edit page URL\"}\n        {else}{* Data *}\n            {assign var=url value=$smarty.const.ROOT_MNG_URL|cat:'/management/topics/topics_edit/?topics_id='|cat:$row.$contents_id_col_index}\n            {append var=row value=$url}\n        {/if}\n        {append var=processed_list value=$row}\n    {/foreach}\n    {assign var=json.csv_data value=$processed_list}\n{/if}\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/b6453b0605ad87965ecd46247f513f62.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/b6453b0605ad87965ecd46247f513f62.png",alt:"Image from Gyazo"})),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Variable Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"$processed_json"),(0,o.kt)("td",{parentName:"tr",align:"left"},"object"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Content data")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-smarty"},"{assign var=processed_json value=$json}\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/e1c795b0b0b627bed80a05ebc81f5149.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/e1c795b0b0b627bed80a05ebc81f5149.png",alt:"Image from Gyazo"})),(0,o.kt)("h3",{id:"6-save-the-custom-function"},"6. Save the custom function"),(0,o.kt)("p",null,"After writing the process, click the ","[Add]"," button to save it.  "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/803ae4cf5c65fd89180f2badada16e2e.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/803ae4cf5c65fd89180f2badada16e2e.png",alt:"Image from Gyazo"})),(0,o.kt)("p",null,"This completes the custom function configuration."),(0,o.kt)("h2",{id:"register-the-custom-function-with-an-endpoint"},"Register the custom function with an endpoint"),(0,o.kt)("p",null,"Add the custom function you created to the post-processing of the endpoint."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/190e8601eec0f32321d3c61d6c75fd4f.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/190e8601eec0f32321d3c61d6c75fd4f.png",alt:"Image from Gyazo"})),(0,o.kt)("p",null,"For more details, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/management/api-postprocessing/"},"API post-processing"),"."),(0,o.kt)("h2",{id:"testing"},"Testing"),(0,o.kt)("p",null,"We will need to confirm that it works by following the steps below."),(0,o.kt)("h3",{id:"1-download-the-csv-file"},"1. Download the CSV file."),(0,o.kt)("p",null,"Access the API endpoint where you registered the custom process using the query parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"_output_format=csv``, which enables the operation of the custom process when outputting in CSV format. Download the CSV file.  \nThe custom function that was set up will be executed during the CSV output process, so to test it, we will need to access the endpoint with the query parameter "),"_output_format=csv",(0,o.kt)("inlineCode",{parentName:"p"},". Access the API endpoint where you registered the custom function above and download the CSV file.\n"),"https://","[site_key]",".g.kuroco.app/rcms-api//topics/download?topics_group_id=&_output_format=csv`"),(0,o.kt)("p",null,"Enter the following three items specific to your own site."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"https://[site_key].g.kuroco.app"),"\nEnter your site's API domain.",(0,o.kt)("br",{parentName:"p"}),"\n","You can check this on the ","[Environment settings]"," > ","[Account settings]"," screen.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/0969f4026765df43e592ee633efb70be.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/0969f4026765df43e592ee633efb70be.png",alt:"Image from Gyazo"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"/rcms-api/**/topics/download"),(0,o.kt)("br",{parentName:"p"}),"\n","Enter the API endpoint where you registered the custom function in the step to register custom function on the endpoint.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"topics_group_id=**"),(0,o.kt)("br",{parentName:"p"}),"\n","Enter the ID of the content structure you want to list in ",(0,o.kt)("inlineCode",{parentName:"p"},"**"),". You can confirm the ID from the content structure list screen.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/b781bccd50b4114124e5332c0fbe992d.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/b781bccd50b4114124e5332c0fbe992d.png",alt:"Image from Gyazo"})))),(0,o.kt)("h3",{id:"2-confirm-the-contents-of-the-file"},"2. Confirm the contents of the file."),(0,o.kt)("p",null,'As CSV is saved in UTF-8, open it in Notepad or import it into Excel to confirm that the "Edit page URL" column has been added.'),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/8d1945cdd100ab0d95d4d03074593713.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/8d1945cdd100ab0d95d4d03074593713.png",alt:"Image from Gyazo"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/82cb526150b6ba7b89a9c8bc7ba7c39a.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/82cb526150b6ba7b89a9c8bc7ba7c39a.png",alt:"Image from Gyazo"})),(0,o.kt)("p",null,"That concludes this tutorial."),(0,o.kt)("h2",{id:"note"},"Note"),(0,o.kt)("p",null,"If the output data becomes too large, there is a possibility of a memory overflow error or a timeout occurring. In this case, consider using batch processing."),(0,o.kt)("h2",{id:"related-documents"},"Related documents"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/management/api-postprocessing/"},"API Post-processing")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/tutorials/how-to-implement-batch-function-exports-csv/"},"Saving Daily Data in CSV Using Batch Process")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/faq/how-can-i-response-csv-format"},"Can the API respond in formats other than JSON?"))))}u.isMDXComponent=!0}}]);