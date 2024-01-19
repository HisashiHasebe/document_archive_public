"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[65143],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7438:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={date:new Date("2022-04-08T00:00:00.000Z"),title:"API Management",description:"A brief introduction to API Management",slug:"api-management",authors:"diverta",hide_table_of_contents:!1},i=void 0,s={permalink:"/blog/api-management",source:"@site/blog/api-management.md",title:"API Management",description:"A brief introduction to API Management",date:"2022-04-08T00:00:00.000Z",formattedDate:"April 8, 2022",tags:[],readingTime:3.205,hasTruncateMarker:!0,authors:[{name:"Diverta",title:"Creator of Kuroco service",url:"https://www.diverta.co.jp",imageURL:"https://github.com/diverta.png",key:"diverta"}],frontMatter:{date:"2022-04-08T00:00:00.000Z",title:"API Management",description:"A brief introduction to API Management",slug:"api-management",authors:"diverta",hide_table_of_contents:!1},prevItem:{title:"Pros and Cons of Jamstack",permalink:"/blog/pros-and-cons-of-jamstack"},nextItem:{title:"Common Patterns for Microservices",permalink:"/blog/common-patterns-for-microservices"}},l={authorsImageUrls:[void 0]},c=[{value:"Overview",id:"overview",level:2},{value:"API Gateways",id:"api-gateways",level:2},{value:"API Management Best Practices",id:"api-management-best-practices",level:2},{value:"Follow Documentation",id:"follow-documentation",level:3},{value:"Offer REST for Public APIs",id:"offer-rest-for-public-apis",level:3},{value:"Follow REST API Naming Conventions",id:"follow-rest-api-naming-conventions",level:3},{value:"Lifecycle Management",id:"lifecycle-management",level:3},{value:"Reporting and Analytics",id:"reporting-and-analytics",level:3},{value:"API Management with a Headless CMS",id:"api-management-with-a-headless-cms",level:2},{value:"Kuroco, the Enterprise Headless CMS",id:"kuroco-the-enterprise-headless-cms",level:2},{value:"Related Articles",id:"related-articles",level:2}],p={toc:c},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A brief introduction to API Management"),(0,r.kt)("img",{src:"/files/user/img/blog/Kuroco_API_Centric_Design.svg",alt:"API Management Design"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"API Management is the process of planning, building, testing, and analyzing the single or multiple application programming interfaces (APIs) that connect the outside world with your backend databases, in a secure and manageable environment. In general, API Management is the method that companies employ to transform their existing data into microservices to be consumed by their own applications, or sold as a data service to third-parties."),(0,r.kt)("h2",{id:"api-gateways"},"API Gateways"),(0,r.kt)("p",null,"API gateways are the most important part of modern API management, functioning as an orchestration layer between the client and the many microservices it is connected with. The main purpose of an API gateway is to handle all the routing, composition, and protocol transformations of data requests made by the client. It also handles security (in particular the authentication and authorization of requests made to the backend)."),(0,r.kt)("p",null,"Many (but not all) API gateways also handle data aggregation - or the joining of data fetched from multiple microservices into a single output to be consumed by the client."),(0,r.kt)("p",null,"API gateways are important for modern software development, which is now highly dependent on the consumption of microservices. In a smaller application, where only a few microservices are consumed, an API gateway may not be necessary. But as an app scales, and the number of microservices increases, it is imperative to have an orchestration layer to handle this complexity."),(0,r.kt)("h2",{id:"api-management-best-practices"},"API Management Best Practices"),(0,r.kt)("p",null,"Once an API is open to the public, other developers may incorporate it into their own systems as a dependency. For this reason it is important, as a matter of public trust, to always ensure your public APIs are well managed and maintained with proper version control."),(0,r.kt)("h3",{id:"follow-documentation"},"Follow Documentation"),(0,r.kt)("p",null,"Any platform offering API Management features should provide developers with comprehensive API documentation."),(0,r.kt)("h3",{id:"offer-rest-for-public-apis"},"Offer REST for Public APIs"),(0,r.kt)("p",null,"APIs can come in different protocols (ex. REST, GraphQL, SOAP), but the best choice for public APIs is usually REST - as this is the universal standard."),(0,r.kt)("h3",{id:"follow-rest-api-naming-conventions"},"Follow REST API Naming Conventions"),(0,r.kt)("p",null,"APIs can come in different protocols (ex. REST, GraphQL, SOAP), but the best choice for public APIs is usually REST - as this is the universal standard."),(0,r.kt)("h3",{id:"lifecycle-management"},"Lifecycle Management"),(0,r.kt)("p",null,"Lifecycle management is the process of building, testing, onboarding, managing and eventually retiring your APIs. Managing this lifecycle internally can be challenging without a dedicated backend team, unless a professional API Management platform is used."),(0,r.kt)("p",null,"It is crucial that API development is properly managed every step of the way, while practicing proper version control."),(0,r.kt)("h3",{id:"reporting-and-analytics"},"Reporting and Analytics"),(0,r.kt)("p",null,"In order to measure the effectiveness of your APIs, it is necessary to know and track the availability, response time, and overall health of each API."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The recording of analytics data relating your APIs can be automated over time"),(0,r.kt)("li",{parentName:"ul"},"Integration issues can be diagnosed and troubleshooted"),(0,r.kt)("li",{parentName:"ul"},"Your enterprise can use this data to make better informed decisions regarding its applications and services")),(0,r.kt)("h2",{id:"api-management-with-a-headless-cms"},"API Management with a Headless CMS"),(0,r.kt)("p",null,"The main purpose of a headless CMS is to serve content to different frontends via API. It is therefore no surprise that API management is integral to how a headless CMS functions."),(0,r.kt)("p",null,"Nevertheless, not all headless CMSs provide a granular way to manage your content data. Furthermore, other common microservices that are commonly needed by enterprises are not always included in headless CMSs out of the box, and may require custom work by backend developers."),(0,r.kt)("h2",{id:"kuroco-the-enterprise-headless-cms"},"Kuroco, the Enterprise Headless CMS"),(0,r.kt)("p",null,"Unlike other headless CMSs available on the market today, Kuroco has robust API Management functionality available to developers out of the box."),(0,r.kt)("h2",{id:"related-articles"},"Related Articles"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/blog/api-gateway-vs-backend-for-frontend"},"API Gateway vs Backend For Frontend")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/blog/common-patterns-for-microservices"},"Common Patterns for Microservices")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/blog/what-is-a-progressive-web-app"},"What is a Progressive Web App?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/blog/what-is-the-backend-to-frontend-design-pattern"},"What is the Backend to Frontend Pattern?"))))}u.isMDXComponent=!0}}]);