"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[28711],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(a),c=r,g=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return a?n.createElement(g,o(o({ref:t},p),{},{components:a})):n.createElement(g,o({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},88246:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const i={title:"Starting a sample project on Kuroco"},o=void 0,l={unversionedId:"tutorials/starting-a-project-on-kuroco",id:"tutorials/starting-a-project-on-kuroco",title:"Starting a sample project on Kuroco",description:"This tutorial explains how to start a project on Kuroco, using the case of a membership-based in-house portal site as an example. It summarizes the steps to take, what tools are required, and the roles and functions of each tool. Use this as a reference for designing your project flow.",source:"@site/docs/tutorials/starting-a-project-on-kuroco.md",sourceDirName:"tutorials",slug:"/tutorials/starting-a-project-on-kuroco",permalink:"/docs/tutorials/starting-a-project-on-kuroco",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/tutorials/starting-a-project-on-kuroco.md",tags:[],version:"current",frontMatter:{title:"Starting a sample project on Kuroco"},sidebar:"documentationSidebar",previous:{title:"How to create HAR file",permalink:"/docs/tutorials/create-a-har-file"},next:{title:"Point to Note Before and During Vue/Nuxt Implementation",permalink:"/docs/tutorials/vue-nuxt-implementation-precautions"}},s={},d=[{value:"Project summary",id:"project-summary",level:2},{value:"Website specifications",id:"website-specifications",level:3},{value:"Frameworks",id:"frameworks",level:3},{value:"Scope and personnel",id:"scope-and-personnel",level:3},{value:"Management tool",id:"management-tool",level:3},{value:"Communication plan",id:"communication-plan",level:3},{value:"*<strong>Regular meeting agenda</strong>",id:"regular-meeting-agenda",level:4},{value:"1. Requirement definitions, system, and UX design",id:"1-requirement-definitions-system-and-ux-design",level:2},{value:"A. Create a site map",id:"a-create-a-site-map",level:3},{value:"B. Define the components on each page",id:"b-define-the-components-on-each-page",level:3},{value:"C. Verify the operating environment",id:"c-verify-the-operating-environment",level:3},{value:"2. Page and UI design",id:"2-page-and-ui-design",level:2},{value:"Create wireframe",id:"create-wireframe",level:3},{value:"3. Data structure and API design (Kuroco)",id:"3-data-structure-and-api-design-kuroco",level:2},{value:"A. Data structure",id:"a-data-structure",level:3},{value:"B. API design",id:"b-api-design",level:3},{value:"4. UI design",id:"4-ui-design",level:2},{value:"5. Coding",id:"5-coding",level:2},{value:"6. Microservice development",id:"6-microservice-development",level:2},{value:"A. Sign up for Kuroco",id:"a-sign-up-for-kuroco",level:3},{value:"B. Create a development repository on GitHub",id:"b-create-a-development-repository-on-github",level:3},{value:"C. Configure KurocoFront hosting and Git integration",id:"c-configure-kurocofront-hosting-and-git-integration",level:3},{value:"D. Kuroco admin panel settings",id:"d-kuroco-admin-panel-settings",level:3},{value:"<strong>Content structure (extended columns)</strong>",id:"content-structure-extended-columns",level:4},{value:"<strong>Member extra information</strong>",id:"member-extra-information",level:4},{value:"7. API settings",id:"7-api-settings",level:2},{value:"8. External API integration",id:"8-external-api-integration",level:2},{value:"A. SendGrid settings (<code>from</code> e-mail address)",id:"a-sendgrid-settings-from-e-mail-address",level:3},{value:"B. Google Analytics settings",id:"b-google-analytics-settings",level:3},{value:"9. Front-end build (including API calls)",id:"9-front-end-build-including-api-calls",level:2},{value:"A. Call the API",id:"a-call-the-api",level:3},{value:"B. Run the API",id:"b-run-the-api",level:3},{value:"10. Environment build",id:"10-environment-build",level:2},{value:"A. Get the original domains",id:"a-get-the-original-domains",level:3},{value:"B. Configure the domain settings",id:"b-configure-the-domain-settings",level:3},{value:"11. Data transfer",id:"11-data-transfer",level:2},{value:"12. Comprehensive test",id:"12-comprehensive-test",level:2},{value:"A. Create the test cases",id:"a-create-the-test-cases",level:3},{value:"B. Perform an internal test",id:"b-perform-an-internal-test",level:3},{value:"13. Operation check (acceptance)",id:"13-operation-check-acceptance",level:2},{value:"Client-side verification",id:"client-side-verification",level:3},{value:"14. Release",id:"14-release",level:2},{value:"Deauthorization",id:"deauthorization",level:3},{value:"15. Site operation",id:"15-site-operation",level:2}],p={toc:d},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This tutorial explains how to start a project on Kuroco, using the case of a membership-based in-house portal site as an example. It summarizes the steps to take, what tools are required, and the roles and functions of each tool. Use this as a reference for designing your project flow.  "),(0,r.kt)("p",null,"Note: Different specifications, members, and tools are required depending on the project. This tutorial is only meant to be a reference guide."),(0,r.kt)("h2",{id:"project-summary"},"Project summary"),(0,r.kt)("p",null,"This tutorial assumes the following details for your project.  "),(0,r.kt)("h3",{id:"website-specifications"},"Website specifications"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Construction of membership-based in-house portal site"),(0,r.kt)("li",{parentName:"ul"},"New domain acquisition")),(0,r.kt)("h3",{id:"frameworks"},"Frameworks"),(0,r.kt)("p",null,"You will be using the following frameworks:  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Framework"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Kuroco"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Back-end system")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://vuetifyjs.com/"},"Vuetify")),(0,r.kt)("td",{parentName:"tr",align:"left"},"UI framework")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://www.figma.com/"},"Figma")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Interface design tool")))),(0,r.kt)("h3",{id:"scope-and-personnel"},"Scope and personnel"),(0,r.kt)("p",null,"The table below outlines the project scope and the personnel in charge (PIC) of each piece:  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Step"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Phase"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Scope"),(0,r.kt)("th",{parentName:"tr",align:"left"},"PIC"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Project design"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#1-requirement-definitions-system-and-ux-design"},"Requirement definitions, system, and UX design")),(0,r.kt)("td",{parentName:"tr",align:"left"},"PM, designer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#2-page-and-ui-design"},"Page and UI design")),(0,r.kt)("td",{parentName:"tr",align:"left"},"PM, designer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"3"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#3-data-structure-and-api-design-kuroco"},"Data structure and API design (Kuroco)")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Back-end engineer, front-end engineer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"4"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Design"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#4-ui-design"},"UI design")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Designer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"5"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#5-coding"},"Coding")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Coder")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"6"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Development"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#6-microservice-development"},"Microservice development")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Back-end engineer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"7"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#7-api-settings"},"API settings")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Back-end engineer, front-end engineer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"8"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#8-external-api-integration"},"External API integration")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Back-end engineer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"9"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#9-front-end-build-including-api-calls"},"Front-end build (including API calls)")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Front-end engineer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"10"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#10-environment-build"},"Environment build")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Back-end engineer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"11"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#11-data-transfer"},"Data transfer")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Back-end engineer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"12"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Testing"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#12-comprehensive-test"},"Comprehensive test")),(0,r.kt)("td",{parentName:"tr",align:"left"},"QA tester")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"13"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#13-operation-check-acceptance"},"Operation check (acceptance)")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Client")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"14"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Release"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#14-release"},"Release")),(0,r.kt)("td",{parentName:"tr",align:"left"},"PM")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"15"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Management"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#15-site-operation"},"Site operation")),(0,r.kt)("td",{parentName:"tr",align:"left"},"PM, back-end engineer, front-end engineer")))),(0,r.kt)("h3",{id:"management-tool"},"Management tool"),(0,r.kt)("p",null,"To simplify project management and communication, limit yourself to the tools below. Doing so reduces the risk of oversight.  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Tool"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Function"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://www.google.com/intl/us_en/sheets/about/"},"Google Sheets")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Design"),(0,r.kt)("td",{parentName:"tr",align:"left"},"For page lists, deadlines for each page, status management, issue management, and other tasks.",(0,r.kt)("br",null),"(See: ",(0,r.kt)("a",{parentName:"td",href:"https://docs.google.com/spreadsheets/d/1uWbBbQ96JFTFrEI5LyeDi54A9YjBY4nRZ_0Mie_GUsk/edit?usp=sharing"},"WBS & sample task list"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://backlog.com/"},"Backlog")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Issue management, minutes sharing"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Can be used to manage/share issues and meeting minutes, both internally and externally.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://slack.com"},"Slack")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Communication"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Communication tool")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://workspace.google.com/intl/en_my/products/meet/"},"Google Meet")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Communication"),(0,r.kt)("td",{parentName:"tr",align:"left"},"For video calls and conferences.")))),(0,r.kt)("h3",{id:"communication-plan"},"Communication plan"),(0,r.kt)("p",null,"Set up internal and client meetings as follow:  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Meeting"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Participants"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Frequency"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Kickoff"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Held at the start of the project."),(0,r.kt)("td",{parentName:"tr",align:"left"},"All members"),(0,r.kt)("td",{parentName:"tr",align:"left"},"One-off meeting")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Regular meeting (client)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Progress meeting with client.(","*",")"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Members involved in the respective phases"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Once a week")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Regular meeting (internal)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Progress meeting with internal staff."),(0,r.kt)("td",{parentName:"tr",align:"left"},"Internal members"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Once a week")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Site management lecture"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Client-oriented lecture on how to manage their site."),(0,r.kt)("td",{parentName:"tr",align:"left"},"All members"),(0,r.kt)("td",{parentName:"tr",align:"left"},"One-off meeting (management phase)")))),(0,r.kt)("h4",{id:"regular-meeting-agenda"},"*",(0,r.kt)("strong",{parentName:"h4"},"Regular meeting agenda")),(0,r.kt)("p",null,"The agenda for regular meetings is as follows:  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Specification check",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Verification of points regarding the specifications that are unclear."),(0,r.kt)("li",{parentName:"ul"},"Suggestions on how to implement the site in Kuroco."))),(0,r.kt)("li",{parentName:"ul"},"Progress check",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Confirmation of schedule, project progress, and remaining issues."),(0,r.kt)("li",{parentName:"ul"},"Addressing issues and questions in cases of delay.")))),(0,r.kt)("h2",{id:"1-requirement-definitions-system-and-ux-design"},"1. Requirement definitions, system, and UX design"),(0,r.kt)("h3",{id:"a-create-a-site-map"},"A. Create a site map"),(0,r.kt)("p",null,"Create a site map in Google Sheets for verifying the desired pages and features with the client.  "),(0,r.kt)("h3",{id:"b-define-the-components-on-each-page"},"B. Define the components on each page"),(0,r.kt)("p",null,"Define and verify the components for each page based on the site map. Components common to multiple pages can be grouped together.  "),(0,r.kt)("h3",{id:"c-verify-the-operating-environment"},"C. Verify the operating environment"),(0,r.kt)("p",null,"Verify the operating environment of the project with the client.  "),(0,r.kt)("h2",{id:"2-page-and-ui-design"},"2. Page and UI design"),(0,r.kt)("h3",{id:"create-wireframe"},"Create wireframe"),(0,r.kt)("p",null,"Create a Figma wireframe based on the site map and page components.  "),(0,r.kt)("h2",{id:"3-data-structure-and-api-design-kuroco"},"3. Data structure and API design (Kuroco)"),(0,r.kt)("h3",{id:"a-data-structure"},"A. Data structure"),(0,r.kt)("p",null,"Design the data structure to be configured using Kuroco. This includes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Content structure"),(0,r.kt)("li",{parentName:"ul"},"Group settings"),(0,r.kt)("li",{parentName:"ul"},"Member item definition")),(0,r.kt)("p",null,"For more information, see:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/management/content-structure-topics-group/"},"User guide: Content structure")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/management/group/"},"User guide: Group")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/management/member/"},"User guide: Member"))),(0,r.kt)("h3",{id:"b-api-design"},"B. API design"),(0,r.kt)("p",null,"To design APIs using Kuroco, first identify the required APIs based on the components of each page.  "),(0,r.kt)("p",null,"Make an API list in a Google Sheet. Also, list the API endpoints used on that page in the PageList of the Google Sheet.  "),(0,r.kt)("p",null,"At this stage, the front-end developer describes which API to use on the wireframe, and the back-end developer manages the API specifications."),(0,r.kt)("h2",{id:"4-ui-design"},"4. UI design"),(0,r.kt)("p",null,"Use your Figma wireframe directly for the UI design."),(0,r.kt)("p",null,"After the UI has been created, a meeting is held with the design staff and the client. To go over the elements and specification details for each webpage. Make changes if necessary, and obtain reviews and approvals from everyone on the spot."),(0,r.kt)("h2",{id:"5-coding"},"5. Coding"),(0,r.kt)("p",null,"This project uses Vuetify for static coding."),(0,r.kt)("p",null,"In some cases, it is better to use APIs instead of behavioral components. We suggest information sharing between the coding staff and API designers when designing the APIs.  "),(0,r.kt)("h2",{id:"6-microservice-development"},"6. Microservice development"),(0,r.kt)("p",null,"Once the design is approved, you can proceed to the development phase.  "),(0,r.kt)("h3",{id:"a-sign-up-for-kuroco"},"A. Sign up for Kuroco"),(0,r.kt)("p",null,"Sign up on Kuroco's ",(0,r.kt)("a",{parentName:"p",href:"https://kuroco.app/free_trial/"},"Free trial page"),".  "),(0,r.kt)("h3",{id:"b-create-a-development-repository-on-github"},"B. Create a development repository on GitHub"),(0,r.kt)("p",null,"Create a development repository on GitHub and use the front-end to manage Git.  "),(0,r.kt)("p",null,"(See: ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/github/getting-started-with-github/quickstart/create-a-repo"},"GitHub Docs - Create a repo")," for a detailed tutorial.)"),(0,r.kt)("h3",{id:"c-configure-kurocofront-hosting-and-git-integration"},"C. Configure KurocoFront hosting and Git integration"),(0,r.kt)("p",null,"Link the GitHub repository to Kuroco using KurocoFront.  "),(0,r.kt)("p",null,"(See: ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorials/connect-to-github-with-kuroco-front/"},"How to deploy the source from GitHub to KurocoFront")," for a detailed tutorial.)"),(0,r.kt)("h3",{id:"d-kuroco-admin-panel-settings"},"D. Kuroco admin panel settings"),(0,r.kt)("p",null,"Configure the relevant settings on the Kuroco admin panel.  "),(0,r.kt)("h4",{id:"content-structure-extended-columns"},(0,r.kt)("strong",{parentName:"h4"},"Content structure (extended columns)")),(0,r.kt)("p",null,"Configure the content structure according to ",(0,r.kt)("a",{parentName:"p",href:"#3-data-structure-and-api-design-kuroco"},"3. Data structure and API design (Kuroco)"),".  "),(0,r.kt)("p",null,"See: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/tutorials/adding-a-topics/"},"Tutorial: Creating topic group(s)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/management/content-structure-topics-group/"},"User guide: Content structure"))),(0,r.kt)("h4",{id:"member-extra-information"},(0,r.kt)("strong",{parentName:"h4"},"Member extra information")),(0,r.kt)("p",null,"Modify the group and member settings."),(0,r.kt)("p",null,"See:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/tutorials/how-to-make-new-group/"},"Tutorial: Creating groups"))),(0,r.kt)("h2",{id:"7-api-settings"},"7. API settings"),(0,r.kt)("p",null,"Configure the API according to ",(0,r.kt)("a",{parentName:"p",href:"#b-api-design"},"3b. API design"),".  "),(0,r.kt)("p",null,"See:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/tutorials/configure-endpoint/"},"Tutorial: Configuring endpoints")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/management/api-list/"},"User guide: API List"))),(0,r.kt)("h2",{id:"8-external-api-integration"},"8. External API integration"),(0,r.kt)("p",null,"Integrating Kuroco with external services allows you to extend the range of available functions.  "),(0,r.kt)("h3",{id:"a-sendgrid-settings-from-e-mail-address"},"A. SendGrid settings (",(0,r.kt)("inlineCode",{parentName:"h3"},"from")," e-mail address)"),(0,r.kt)("p",null,"To use your custom domain as the ",(0,r.kt)("inlineCode",{parentName:"p"},"from")," e-mail address for inquiry responses and site notifications, you need to set up a free SendGrid account and configure the relevant settings."),(0,r.kt)("p",null,"Note: You do not need a SendGrid account if you intend to use ",(0,r.kt)("inlineCode",{parentName:"p"},"@kuroco-mail.app")," as your e-mail domain."),(0,r.kt)("p",null,"(See: ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorials/how-to-link-sendgrid/"},"How to link with SendGrid")," for a detailed tutorial.)"),(0,r.kt)("h3",{id:"b-google-analytics-settings"},"B. Google Analytics settings"),(0,r.kt)("p",null,"You can track conversions on your site by integrating it with Google Analytics."),(0,r.kt)("p",null,"(See: ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorials/how-to-link-google-analytics/"},"How to link Google Analytics")," for a detailed tutorial.)"),(0,r.kt)("h2",{id:"9-front-end-build-including-api-calls"},"9. Front-end build (including API calls)"),(0,r.kt)("h3",{id:"a-call-the-api"},"A. Call the API"),(0,r.kt)("p",null,"Call the API you created from the front-end."),(0,r.kt)("h3",{id:"b-run-the-api"},"B. Run the API"),(0,r.kt)("p",null,"While you are developing the front-end, test if you can retrieve the content via the API. You can use Swagger to verify the API function."),(0,r.kt)("p",null,"(See: ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorials/using-swagger-to-check-the-structure-of-data/"},"How to check the data structure using Swagger UI")," for a detailed tutorial.)"),(0,r.kt)("h2",{id:"10-environment-build"},"10. Environment build"),(0,r.kt)("p",null,"Now, build the environment for the release. To do so, acquire a custom domain and apply it to your project website.  "),(0,r.kt)("p",null,"In this tutorial, we are building a website with authentication, which requires a front-end domain and an API domain. Therefore, proceed on the premise of configuring two domains."),(0,r.kt)("p",null,"(This is because some web browsers do not allow third-party cookies, causing login errors in such cases. See: ",(0,r.kt)("a",{parentName:"p",href:"https://www.theverge.com/2021/6/24/22547339/google-chrome-cookiepocalypse-delayed-2023"},"Google delays blocking third-party cookies in Chrome until 2023")," for more information on this issue.)"),(0,r.kt)("h3",{id:"a-get-the-original-domains"},"A. Get the original domains"),(0,r.kt)("p",null,"Acquire the two domains below:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Domain"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"www.CLIENT.app")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Front-end domain")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"kuroco.CLIENT.app")),(0,r.kt)("td",{parentName:"tr",align:"left"},"API domain")))),(0,r.kt)("h3",{id:"b-configure-the-domain-settings"},"B. Configure the domain settings"),(0,r.kt)("p",null,"Apply your custom domains to KurocoFront and set up the following:  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DNS for the front-end domain"),(0,r.kt)("li",{parentName:"ul"},"DNS for the API domain"),(0,r.kt)("li",{parentName:"ul"},"Domain on Kuroco's admin panel")),(0,r.kt)("p",null,"(See: ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorials/using-a-custom-domain-name-on-kurocofront/"},"Using your own custom domain name on KurocoFront")," for a detailed tutorial)."),(0,r.kt)("h2",{id:"11-data-transfer"},"11. Data transfer"),(0,r.kt)("p",null,"Register the required contents and user data on the Kuroco admin panel. You can fill in the respective forms manually or batch upload the data in a CSV file.  "),(0,r.kt)("p",null,"(See: ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorials/bulk-upload-in-csv/"},"Bulk upload via CSV")," for a detailed tutorial)."),(0,r.kt)("h2",{id:"12-comprehensive-test"},"12. Comprehensive test"),(0,r.kt)("h3",{id:"a-create-the-test-cases"},"A. Create the test cases"),(0,r.kt)("p",null,"Create test cases as you proceed with the development. "),(0,r.kt)("h3",{id:"b-perform-an-internal-test"},"B. Perform an internal test"),(0,r.kt)("p",null,"Conduct internal verifications based on your test cases. Any issues found will be logged and corrected by task management and re-verified."),(0,r.kt)("h2",{id:"13-operation-check-acceptance"},"13. Operation check (acceptance)"),(0,r.kt)("h3",{id:"client-side-verification"},"Client-side verification"),(0,r.kt)("p",null,"After the internal comprehensive test, ask your client to verify the project. Deploy the project in the development environment for the client to test it. During this step, restrict access to the project through IP address or basic authentication. Make modifications based on the client feedback.  "),(0,r.kt)("p",null,"Refer to the FAQ ",(0,r.kt)("a",{parentName:"p",href:"/docs/faq/what-is-kuroco_front_json/#basic:basic-authentication"},"What is ",(0,r.kt)("inlineCode",{parentName:"a"},"kuroco_front.json"),"? -> ",(0,r.kt)("inlineCode",{parentName:"a"},"basic"),": Basic authentication")," for more information."),(0,r.kt)("h2",{id:"14-release"},"14. Release"),(0,r.kt)("p",null,"After the operation check is complete, the project is ready for release.  "),(0,r.kt)("h3",{id:"deauthorization"},"Deauthorization"),(0,r.kt)("p",null,"Don't forget to remove the IP address and basic authentication restrictions placed in step 13."),(0,r.kt)("h2",{id:"15-site-operation"},"15. Site operation"),(0,r.kt)("p",null,"The operation phase starts upon the site launch. Prepare the user guide documentation and support your client to operate their website independently."))}m.isMDXComponent=!0}}]);