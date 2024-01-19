"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[76478],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),u=r,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},80385:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={title:"How to implement original validation in API by using custom function",category:"Operation",weight:1},o=void 0,l={unversionedId:"tutorials/how-to-implement-original-validation-in-api-by-using-function",id:"tutorials/how-to-implement-original-validation-in-api-by-using-function",title:"How to implement original validation in API by using custom function",description:"This tutorial explains how to implement original validation in API using custom functions and API Pre-processing.",source:"@site/docs/tutorials/how-to-implement-original-validation-in-api-by-using-function.md",sourceDirName:"tutorials",slug:"/tutorials/how-to-implement-original-validation-in-api-by-using-function",permalink:"/docs/tutorials/how-to-implement-original-validation-in-api-by-using-function",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/tutorials/how-to-implement-original-validation-in-api-by-using-function.md",tags:[],version:"current",frontMatter:{title:"How to implement original validation in API by using custom function",category:"Operation",weight:1},sidebar:"documentationSidebar",previous:{title:"Setting up stubs on API endpoints using custom functions",permalink:"/docs/tutorials/setting-up-stubs-on-api-endpoints-using-custom-functions"},next:{title:"Implementing custom validation in Content Structure with Custom function",permalink:"/docs/tutorials/how-to-implement-original-validation-in-contents-edit-by-using-function"}},s={},c=[{value:"Preparation",id:"preparation",level:2},{value:"Create API endpoint",id:"create-api-endpoint",level:3},{value:"Create custom function",id:"create-custom-function",level:2},{value:"1. Access the Custom function list page",id:"1-access-the-custom-function-list-page",level:3},{value:"2. Access the Custom function editor page",id:"2-access-the-custom-function-editor-page",level:3},{value:"3. Enter the title and category",id:"3-enter-the-title-and-category",level:3},{value:"4. Save the custom function",id:"4-save-the-custom-function",level:3},{value:"Write the code for the validation process",id:"write-the-code-for-the-validation-process",level:2},{value:"1. Access the Custom functions list page",id:"1-access-the-custom-functions-list-page",level:3},{value:"2. Initialize the errors variable",id:"2-initialize-the-errors-variable",level:3},{value:"3. Implement the validation",id:"3-implement-the-validation",level:3},{value:"4. Save",id:"4-save",level:3},{value:"Associate the function to the API",id:"associate-the-function-to-the-api",level:2},{value:"1. Access the API list page",id:"1-access-the-api-list-page",level:3},{value:"2. Select the endpoint",id:"2-select-the-endpoint",level:3},{value:"3. Associate the function",id:"3-associate-the-function",level:3},{value:"Check the operation of API",id:"check-the-operation-of-api",level:2},{value:"1. Access the Swagger UI page",id:"1-access-the-swagger-ui-page",level:3},{value:"2. Select the endpoint",id:"2-select-the-endpoint-1",level:3},{value:"3. Enter the value for which an error will be output",id:"3-enter-the-value-for-which-an-error-will-be-output",level:3},{value:"4. Check the response",id:"4-check-the-response",level:3},{value:"Ref: Where to check when the validation error doesn&#39;t occur as expected.",id:"ref-where-to-check-when-the-validation-error-doesnt-occur-as-expected",level:2},{value:"Ref: Code example",id:"ref-code-example",level:2},{value:"Check if it includes the specific string",id:"check-if-it-includes-the-specific-string",level:3},{value:"Check if it is a number",id:"check-if-it-is-a-number",level:3},{value:"Check the input value which depends on another input",id:"check-the-input-value-which-depends-on-another-input",level:3},{value:"Apply input validation only to members belonging to a specific group",id:"apply-input-validation-only-to-members-belonging-to-a-specific-group",level:3},{value:"Changing the Response Code in Case of an Error",id:"changing-the-response-code-in-case-of-an-error",level:3},{value:"Available HTTP Codes",id:"available-http-codes",level:4}],p={toc:c},d="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This tutorial explains how to implement original validation in API using custom functions and API Pre-processing.",(0,r.kt)("br",{parentName:"p"}),"\n","This feature allows you to add advanced input validation that cannot be achieved using the standard features alone.  "),(0,r.kt)("p",null,"This time, we will implement a validation process that returns an error if the POST email address does not match a specific domain."),(0,r.kt)("h2",{id:"preparation"},"Preparation"),(0,r.kt)("h3",{id:"create-api-endpoint"},"Create API endpoint"),(0,r.kt)("p",null,"Before starting, let's prepare an API endpoint to implement the validation referring to ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorials/configure-endpoint/"},"Configuring endpoints"),".",(0,r.kt)("br",{parentName:"p"}),"\n",'This time, we created the following endpoint under "Default".  '),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"item"),(0,r.kt)("th",{parentName:"tr",align:"left"},"value"),(0,r.kt)("th",{parentName:"tr",align:"left"}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Path"),(0,r.kt)("td",{parentName:"tr",align:"left"},"original_api/sample1"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"enabled/disabled"),(0,r.kt)("td",{parentName:"tr",align:"left"},"enabled")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Model"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Category"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Notification")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Model"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Magazine")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Operation"),(0,r.kt)("td",{parentName:"tr",align:"left"},"subscribe")))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/a36ee21c889213ae748c9e134b76e79c.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/a36ee21c889213ae748c9e134b76e79c.png",alt:"Image from Gyazo"})),(0,r.kt)("h2",{id:"create-custom-function"},"Create custom function"),(0,r.kt)("p",null,"Let's prepare a custom function to write the validation process."),(0,r.kt)("h3",{id:"1-access-the-custom-function-list-page"},"1. Access the Custom function list page"),(0,r.kt)("p",null,"Click ","[Operation]"," -> ","[Custom function]"," on the side menu.\n",(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/c068b45313cdfe5b9645c8aa928b1219.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/c068b45313cdfe5b9645c8aa928b1219.png",alt:"Image from Gyazo"})),(0,r.kt)("h3",{id:"2-access-the-custom-function-editor-page"},"2. Access the Custom function editor page"),(0,r.kt)("p",null,"Click ","[Add]"," button on the top right of the Custom function list page.\u3000\u3000",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/f57598cae50ea22b3d6822aed1d888a3.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/f57598cae50ea22b3d6822aed1d888a3.png",alt:"Image from Gyazo"})),(0,r.kt)("h3",{id:"3-enter-the-title-and-category"},"3. Enter the title and category"),(0,r.kt)("p",null,"Enter the title, category, and Identifier of the custom function, like below for example:   "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Title\uff1a/rcms-api/1/original_api/sample1"),(0,r.kt)("li",{parentName:"ul"},"Category\uff1aAPI"),(0,r.kt)("li",{parentName:"ul"},"Identifier\uff1asample1_function")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Note: you cannot duplicate custom functions title in the same category. Please enter a title that isn't identical to others, such as the endpoint name in which the costom function will be implemented.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/9258f5a82b20929857d36340ccb6a72e.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/9258f5a82b20929857d36340ccb6a72e.png",alt:"Image from Gyazo"})),(0,r.kt)("h3",{id:"4-save-the-custom-function"},"4. Save the custom function"),(0,r.kt)("p",null,"Click ","[Add]"," button on the bottom of the page and save the custom function.  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/d9c94e48f969442a9dc823d9c034bfbe.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/d9c94e48f969442a9dc823d9c034bfbe.png",alt:"Image from Gyazo"})),(0,r.kt)("h2",{id:"write-the-code-for-the-validation-process"},"Write the code for the validation process"),(0,r.kt)("p",null,"Next, let's write the code of the validation process.  "),(0,r.kt)("h3",{id:"1-access-the-custom-functions-list-page"},"1. Access the Custom functions list page"),(0,r.kt)("p",null,"Click ","[Operation]"," -> ","[Custom function]"," on the side menu.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/c068b45313cdfe5b9645c8aa928b1219.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/c068b45313cdfe5b9645c8aa928b1219.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"Click the title of the custom function which you have just created.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/e8d689a45b01613ab74684fe7ba1392f.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/e8d689a45b01613ab74684fe7ba1392f.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"Input the validation process in the Custom function editor page following the procedure below.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/87b1a9ad7a82a0b1e0282a07588e9872.jpg?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/87b1a9ad7a82a0b1e0282a07588e9872.jpg",alt:"Image from Gyazo"})),(0,r.kt)("h3",{id:"2-initialize-the-errors-variable"},"2. Initialize the errors variable"),(0,r.kt)("p",null,"Initialize the ",(0,r.kt)("inlineCode",{parentName:"p"},"$errors")," variable to save the validation result.  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Variable name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"$errors"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string array")))),(0,r.kt)("p",null,"Enter the following code into the editor."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-smarty"},'{* $errors = [] *}\n{assign_array var="errors" values=""}\n')),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/adaeb9b20290a06955775f61ae525f4f.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/adaeb9b20290a06955775f61ae525f4f.png",alt:"Image from Gyazo"})),(0,r.kt)("h3",{id:"3-implement-the-validation"},"3. Implement the validation"),(0,r.kt)("p",null,"It checks the user's input value and assigns the result to the errors variable.",(0,r.kt)("br",{parentName:"p"}),"\n","To refer to the input value, use one of the following variables."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"variable"),(0,r.kt)("th",{parentName:"tr",align:"left"},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"$smarty.get"),(0,r.kt)("td",{parentName:"tr",align:"left"},"query parameter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"$smarty.post"),(0,r.kt)("td",{parentName:"tr",align:"left"},"JSON body")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"$smarty.request"),(0,r.kt)("td",{parentName:"tr",align:"left"},"query parameter & JSON body")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-smarty"},'{assign_array var="errors" values=""}\n\n{*e.g. returning an error if the POSTed email address does not match a particular domain.*}\n{if $smarty.post.email|strpos:\'@example.com\' === false}\n  {* $errors = ["E-mail address is invalid."] *}\n  {assign var="errors." value="E-mail address is invalid."}\n{/if}\n')),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/df818c356c31a83210d7988e7aa2ca2b.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/df818c356c31a83210d7988e7aa2ca2b.png",alt:"Image from Gyazo"})),(0,r.kt)("h3",{id:"4-save"},"4. Save"),(0,r.kt)("p",null,"After completing the code above, click ","[Update]"," to save the configuration.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/ed3c09f242dd3b04fe91c9cba5c964c7.jpg?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/ed3c09f242dd3b04fe91c9cba5c964c7.jpg",alt:"Image from Gyazo"})),(0,r.kt)("h2",{id:"associate-the-function-to-the-api"},"Associate the function to the API"),(0,r.kt)("p",null,"Next, we'll associate the function created to the API.  "),(0,r.kt)("h3",{id:"1-access-the-api-list-page"},"1. Access the API list page"),(0,r.kt)("p",null,"Click ","[API]"," -> ","[Default]"," on the side menu.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/a49c9fe381b9d4fc46c8592fcf2f694e.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/a49c9fe381b9d4fc46c8592fcf2f694e.png",alt:"Image from Gyazo"})),(0,r.kt)("h3",{id:"2-select-the-endpoint"},"2. Select the endpoint"),(0,r.kt)("p",null,"Select the endpoint ",(0,r.kt)("inlineCode",{parentName:"p"},"original_api/sample1")," you created earlier and click ","[Pre-processing]",".",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/eeb747469832f05a0b8c2e76e55add14.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/eeb747469832f05a0b8c2e76e55add14.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,'The input fields "Category" and "List" are displayed under the table.\n',(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/a005c281d5d2a0dcff943f9dc122a099.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/a005c281d5d2a0dcff943f9dc122a099.png",alt:"Image from Gyazo"})),(0,r.kt)("h3",{id:"3-associate-the-function"},"3. Associate the function"),(0,r.kt)("p",null,"Select the category and title of the function you created.  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Category\uff1aAPI"),(0,r.kt)("li",{parentName:"ul"},"List\uff1a/rcms-api/1/original_api/sample1")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/87d8559eed8d00f08161ed7ac7735f86.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/87d8559eed8d00f08161ed7ac7735f86.png",alt:"Image from Gyazo"})),(0,r.kt)("h2",{id:"check-the-operation-of-api"},"Check the operation of API"),(0,r.kt)("p",null,"Let's send a request from the Swagger UI page and check the operation of the validation process.  "),(0,r.kt)("h3",{id:"1-access-the-swagger-ui-page"},"1. Access the Swagger UI page"),(0,r.kt)("p",null,"Click ","[Swagger UI]"," button on the API list page and access the Swagger UI page.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/c46db9c7817129113c13cd113ca178ea.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/c46db9c7817129113c13cd113ca178ea.png",alt:"Image from Gyazo"})),(0,r.kt)("h3",{id:"2-select-the-endpoint-1"},"2. Select the endpoint"),(0,r.kt)("p",null,"Select the endpoint ",(0,r.kt)("inlineCode",{parentName:"p"},"original_api/sample1")," and click ","[Try it out]"," button.\n",(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/f0f308b78abc8dd07f60dc37132e66f3.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/f0f308b78abc8dd07f60dc37132e66f3.png",alt:"Image from Gyazo"})," "),(0,r.kt)("h3",{id:"3-enter-the-value-for-which-an-error-will-be-output"},"3. Enter the value for which an error will be output"),(0,r.kt)("p",null,"Enter ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"magazine_id"),", and to check the validation process, enter the following value that will trigger an error in ","[Request body]","."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Request body"',title:'"Request','body"':!0},'{\n  "email": "test@test.com"\n}\n')),(0,r.kt)("p",null,"Click ","[Execute]"," button to execute the request.\n",(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/e18479672c517510846b3a2efc07d09d.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/e18479672c517510846b3a2efc07d09d.png",alt:"Image from Gyazo"})),(0,r.kt)("h3",{id:"4-check-the-response"},"4. Check the response"),(0,r.kt)("p",null,"Check the API response and confirm that the expected error is output.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/bf57ab8c79666413b2983b7789b7b98c.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/bf57ab8c79666413b2983b7789b7b98c.png",alt:"Image from Gyazo"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="response"',title:'"response"'},'{\n  "errors": [\n    {\n      "code": "unprocessable_entity",\n      "message": "E-mail address is invalid."\n    }\n  ],\n  "x-rcms-request-id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxx"\n}\n')),(0,r.kt)("br",null),(0,r.kt)("p",null,"The association of the function and API is now complete.  "),(0,r.kt)("h2",{id:"ref-where-to-check-when-the-validation-error-doesnt-occur-as-expected"},"Ref: Where to check when the validation error doesn't occur as expected."),(0,r.kt)("p",null,"If the input validation is not working as expected, check the following points:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Whether the function is properly associated with API pre-processing"),(0,r.kt)("li",{parentName:"ul"},"Whether the associated function is correct"),(0,r.kt)("li",{parentName:"ul"},"Whether the variable name (errors) is correct"),(0,r.kt)("li",{parentName:"ul"},"Whether items to be validated are correct"),(0,r.kt)("li",{parentName:"ul"},"Whether the validation logic is correct")),(0,r.kt)("h2",{id:"ref-code-example"},"Ref: Code example"),(0,r.kt)("p",null,"Here are some examples which you can use for the function"),(0,r.kt)("h3",{id:"check-if-it-includes-the-specific-string"},"Check if it includes the specific string"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-smarty"},'{if $smarty.post.column_name|strpos:"EXPECTED STRING" === false}\n  {assign var="errors." value="column_name is invalid."}\n{/if}\n')),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"check-if-it-is-a-number"},"Check if it is a number"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-smarty"},'{if !$smarty.get.parameter_name|is_numeric}\n  {assign var="errors." value="Input number for the parameter_name."}\n{/if}\n')),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"check-the-input-value-which-depends-on-another-input"},"Check the input value which depends on another input"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-smarty"},"{*\n    [e.g.] ext_col_02 is required only when there is a value \"1\" in ext_col_01.\n    ext_col_01: Option item('', '1', '2')\n    ext_col_02: Text item\n*}\n{if $smarty.post.ext_col_01 === '1' || (\n  !$smarty.post.ext_col_01|@empty &&\n  $smarty.post.ext_col_01.key === '1'\n)}\n  {if !isset($smarty.post.ext_col_02) || $smarty.post.ext_col_02 === ''}\n    {assign var=\"errors.\" value=\"The text item is required.\"}\n  {/if}\n{/if}\n")),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"apply-input-validation-only-to-members-belonging-to-a-specific-group"},"Apply input validation only to members belonging to a specific group"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-smarty"},'{if $smarty.session.arrGroup_id|@is_array &&\n  101|in_array:$smarty.session.arrGroup_id}\n  {if !isset($smarty.post.column_name)}\n    {assign var="errors." value="column_name is required."}\n  {/if}\n{/if}\n')),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"changing-the-response-code-in-case-of-an-error"},"Changing the Response Code in Case of an Error"),(0,r.kt)("p",null,"If you want to change the API's response code to a specific error code and send an error response when error checking occurs, you can configure it as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-smarty"},"{assign var=http_code value=404}\n")),(0,r.kt)("h4",{id:"available-http-codes"},"Available HTTP Codes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"Bad Request"),(0,r.kt)("td",{parentName:"tr",align:null},"The request from the client is invalid.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"401"),(0,r.kt)("td",{parentName:"tr",align:null},"Unauthorized"),(0,r.kt)("td",{parentName:"tr",align:null},"The request failed due to lack of user authentication (not logged in).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"403"),(0,r.kt)("td",{parentName:"tr",align:null},"Forbidden"),(0,r.kt)("td",{parentName:"tr",align:null},"The request failed because the user does not have access rights to the content (different from 401, as user authentication is completed).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Not Found"),(0,r.kt)("td",{parentName:"tr",align:null},"The request failed because the specified endpoint's content does not exist.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"408"),(0,r.kt)("td",{parentName:"tr",align:null},"Request Timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"Error that occurs when the request times out.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"Internal Server Error"),(0,r.kt)("td",{parentName:"tr",align:null},"Error that occurs when the request from the client is correct, but an error occurs on the server side.")))),(0,r.kt)("p",null,"It is also possible to combine with setting error messages in ",(0,r.kt)("inlineCode",{parentName:"p"},"errors"),".",(0,r.kt)("br",{parentName:"p"}),"\n","Example of setting:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-smarty"},"{if `error checking process`}\n  {assign var=http_code value=404}\n  {assign_array var=errors values=''}\n  {assign var=errors. value='The content does not exist.'}\n{/if}\n\n")),(0,r.kt)("p",null,"Example response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"[response]","[response]":!0},'HTTP Respnese code: 404\n\nResponse body\n{\n  "errors": [\n    {\n      "code": "unprocessable_entity",\n      "message": "The content does not exist."\n    }\n  ],\n  "x-rcms-request-id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxx"\n}\n')))}m.isMDXComponent=!0}}]);