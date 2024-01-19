"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[17142],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var i=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,o=function(e,t){if(null==e)return{};var a,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),h=o,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||n;return a?i.createElement(m,r(r({ref:t},d),{},{components:a})):i.createElement(m,r({ref:t},d))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,r=new Array(n);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<n;c++)r[c]=a[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},70825:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var i=a(87462),o=(a(67294),a(3905));const n={date:new Date("2022-05-31T00:00:00.000Z"),title:"Git-based Vs API-centric Headless CMS",description:"A description of the differences between Git-based and API-centric CMSs",slug:"git-based-vs-api-centric-headless-cms",authors:"diverta",hide_table_of_contents:!1},r=void 0,s={permalink:"/blog/git-based-vs-api-centric-headless-cms",source:"@site/blog/git-based-vs-api-centric-headless-cms.md",title:"Git-based Vs API-centric Headless CMS",description:"A description of the differences between Git-based and API-centric CMSs",date:"2022-05-31T00:00:00.000Z",formattedDate:"May 31, 2022",tags:[],readingTime:6.975,hasTruncateMarker:!0,authors:[{name:"Diverta",title:"Creator of Kuroco service",url:"https://www.diverta.co.jp",imageURL:"https://github.com/diverta.png",key:"diverta"}],frontMatter:{date:"2022-05-31T00:00:00.000Z",title:"Git-based Vs API-centric Headless CMS",description:"A description of the differences between Git-based and API-centric CMSs",slug:"git-based-vs-api-centric-headless-cms",authors:"diverta",hide_table_of_contents:!1},prevItem:{title:"A Guide to Choosing an Enterprise Headless CMS",permalink:"/blog/guide-to-choosing-an-enterprise-headless-cms"},nextItem:{title:"API Gateway vs Backend For Frontend",permalink:"/blog/api-gateway-vs-backend-for-frontend"}},l={authorsImageUrls:[void 0]},c=[{value:"Overview of Git-based vs API-centric CMSs",id:"overview-of-git-based-vs-api-centric-cmss",level:2},{value:"Git-Based",id:"git-based",level:3},{value:"API-centric",id:"api-centric",level:3},{value:"Git-Based CMS Trade-offs",id:"git-based-cms-trade-offs",level:2},{value:"Benefits",id:"benefits",level:3},{value:"Drawbacks",id:"drawbacks",level:3},{value:"API-Centric CMS Trade-offs",id:"api-centric-cms-trade-offs",level:2},{value:"Benefits",id:"benefits-1",level:3},{value:"Drawbacks",id:"drawbacks-1",level:3},{value:"Comparing the Pros and Cons of Each Approach",id:"comparing-the-pros-and-cons-of-each-approach",level:2},{value:"Convenience of Working with a Git-based CMS",id:"convenience-of-working-with-a-git-based-cms",level:3},{value:"Lack of Overall Scalability",id:"lack-of-overall-scalability",level:4},{value:"Customizability of Working with an API-centric CMS",id:"customizability-of-working-with-an-api-centric-cms",level:3},{value:"Higher Developer Overhead",id:"higher-developer-overhead",level:4},{value:"Common Use Cases",id:"common-use-cases",level:2},{value:"SSG (Static Site Generator) Websites",id:"ssg-static-site-generator-websites",level:3},{value:"E-Commerce",id:"e-commerce",level:3},{value:"Multiple Frontends",id:"multiple-frontends",level:3},{value:"Microservice Heavy Architecture",id:"microservice-heavy-architecture",level:3},{value:"So, Which Approach Should I Choose?",id:"so-which-approach-should-i-choose",level:2},{value:"Have any Questions?",id:"have-any-questions",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A description of the differences between Git-based and API-centric CMSs"),(0,o.kt)("p",null,"Since monolithic CMS (content management system) platforms like WordPress and Drupal were popularized in the mid 2000s, the web development ecosystem has changed considerably.  Most recently, with the advent of mobile devices, the shift has been towards content delivery that is decoupled from the various frontends it is served to."),(0,o.kt)("p",null,"Traditional CMS platforms still make up a large portion of the total market share, but due to many drawbacks, including poor performance, security concerns, cost, and lack of developer freedom, the headless CMS ecosystem is growing rapidly - both among smaller businesses and large enterprises."),(0,o.kt)("p",null,"Within the headless CMS space, there are 2 main approaches:  API-centric and Git-based.  This article will discuss some of the trade-offs of choosing either type of headless CMS, depending on the types of projects your company is working on."),(0,o.kt)("h2",{id:"overview-of-git-based-vs-api-centric-cmss"},"Overview of Git-based vs API-centric CMSs"),(0,o.kt)("p",null,"The headless CMS ecosystem is still relatively new - and to date, the 2 main approaches have been either Git-based or API-centric solutions."),(0,o.kt)("h3",{id:"git-based"},"Git-Based"),(0,o.kt)("p",null,"The Git version control system (VCS) is a technology that stores developer files in a repository and tracks changes made over time.  Repositories can be branched and merged, allowing teams to make changes without the risk of making permanent breaking changes to code while it is being tested."),(0,o.kt)("p",null,"A Git-based CMS is able to manage the content in a user-friendly interface, and integrate with the Git repository to update changes made, which then triggers a rebuild of the frontend.  Typically, this is done online using platforms like GitHub, which can be accessed easily by remote teams."),(0,o.kt)("h3",{id:"api-centric"},"API-centric"),(0,o.kt)("p",null,"An API (application programming interface) is how applications communicate with each other and send/consume data.  An API-centric CMS allows content creators to manage their content in a user-friendly interface, which will update their content data in a database.  "),(0,o.kt)("p",null,"This data, typically in REST or GraphQL format, can then be consumed by their applications (either server-side, or directly by the frontend, depending on the type of project)."),(0,o.kt)("h2",{id:"git-based-cms-trade-offs"},"Git-Based CMS Trade-offs"),(0,o.kt)("p",null,"As Git-based CMSs are dependent on the Git version control system, there are some trade offs related to this approach:"),(0,o.kt)("h3",{id:"benefits"},"Benefits"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Git comes with backup functionality built in, reducing risk of breaking changes."),(0,o.kt)("li",{parentName:"ul"},"Most developers already use Git for their frontend code, so keeping content in the same space can be convenient and easy to keep track of."),(0,o.kt)("li",{parentName:"ul"},"No vendor lock-in - Git is an open source technology used by most developers in the industry."),(0,o.kt)("li",{parentName:"ul"},"Low cost and ease of use - Git and most Git-based CMSs are free (or low-cost) to use and easy to set up.")),(0,o.kt)("h3",{id:"drawbacks"},"Drawbacks"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Not as scalable for multiple front ends."),(0,o.kt)("li",{parentName:"ul"},"Not as robust for updating live or heavy static content, due to limitations of Git architecture."),(0,o.kt)("li",{parentName:"ul"},"Data querying limitations, compared to a dedicated API customized for frontend consumption.")),(0,o.kt)("h2",{id:"api-centric-cms-trade-offs"},"API-Centric CMS Trade-offs"),(0,o.kt)("p",null,"API-centric CMS are more difficult to generalize, since the differences among platforms in this category may vary widely in terms of features and functionality."),(0,o.kt)("h3",{id:"benefits-1"},"Benefits"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Better suited for applications serving multiple frontends, especially when those frontends are consuming customized API endpoints."),(0,o.kt)("li",{parentName:"ul"},"Able to handle large, complicated data sets more effectively than Git-based CMSs."),(0,o.kt)("li",{parentName:"ul"},"More robust at handling content that changes frequently."),(0,o.kt)("li",{parentName:"ul"},"More customizable - there are very few limitations in terms of how API-centric CMS are built, as they do not need to conform to Git.")),(0,o.kt)("h3",{id:"drawbacks-1"},"Drawbacks"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Backup is not automatically built-in, as with Git."),(0,o.kt)("li",{parentName:"ul"},"Many API-centric CMSs are SaaS offerings, which can become expensive if storage or performance requirements are increased."),(0,o.kt)("li",{parentName:"ul"},"Self-hosted API-centric CMSs can require a lot of developer overhead to set up and maintain."),(0,o.kt)("li",{parentName:"ul"},"More complexity overall - integrating your API-centric CMS with your application can involve more developer involvement to ensure APIs are being managed and/or consumed properly.")),(0,o.kt)("h2",{id:"comparing-the-pros-and-cons-of-each-approach"},"Comparing the Pros and Cons of Each Approach"),(0,o.kt)("p",null,"Both Git-based and API-centric headless CMSs are effective solutions compared to legacy monolithic CMSs, but developers will need to choose which approach works best for them, depending on their requirements."),(0,o.kt)("h3",{id:"convenience-of-working-with-a-git-based-cms"},"Convenience of Working with a Git-based CMS"),(0,o.kt)("p",null,"The most obvious benefit of choosing a Git-based CMS is that most developers are already familiar with this system, and using it for their frontend code.  Adding a Git-based CMS is typically free (or very low cost) and relatively easy to set up - giving content creators a way to update their content without having to make a request to a developer each time."),(0,o.kt)("h4",{id:"lack-of-overall-scalability"},"Lack of Overall Scalability"),(0,o.kt)("p",null,"Git-based CMSs work well when you understand the scale of your project and plan your content and data formats ahead of time, optimized for the frontends you need.  For scaling to much larger projects with multiple frontends, however, the Git-based approach is likely to run into limitations."),(0,o.kt)("h3",{id:"customizability-of-working-with-an-api-centric-cms"},"Customizability of Working with an API-centric CMS"),(0,o.kt)("p",null,"APIs are the universal format for data consumption, meaning they can integrate with basically any type of frontend and be optimized accordingly.  Whether your CMS has a single API gateway to handle all frontends, or even a BFF (\u2018backend for frontends\u2019) architecture to customize endpoints for each frontend, the result is that you can scale your application almost without limit."),(0,o.kt)("p",null,"In terms of \u2018future proofing\u2019 your project, the API-centric approach is nearly always going to be the better option, assuming this is within the scope of your project."),(0,o.kt)("h4",{id:"higher-developer-overhead"},"Higher Developer Overhead"),(0,o.kt)("p",null,"When dealing with API management, developers will need to be involved to ensure the APIs are working properly, securely, and efficiently.  This may be overkill for some smaller projects, and will depend on the specific use-cases of your application."),(0,o.kt)("h2",{id:"common-use-cases"},"Common Use Cases"),(0,o.kt)("p",null,"The following are some of the more common use cases for both Git-based and API-centric CMSs:"),(0,o.kt)("h3",{id:"ssg-static-site-generator-websites"},"SSG (Static Site Generator) Websites"),(0,o.kt)("p",null,"SSG websites are increasing in popularity, spurred on by the expansion of the Jamstack ecosystem.  Popular frameworks like Jekyll, Hugo, Gatsby, Gridsome, Next and Nuxt are ideal for building static websites that can be served on CDNs at blazing speeds."),(0,o.kt)("p",null,"While both Git-based and API-centric CMS are excellent choices for managing content on SSG sites, Git-based are particularly simple and easy to set up for smaller projects like blogs, portfolio sites, or simple landing pages.",(0,o.kt)("br",{parentName:"p"}),"\n","For more complicated sites used by large enterprises, API-centric architecture will nearly always be preferred."),(0,o.kt)("h3",{id:"e-commerce"},"E-Commerce"),(0,o.kt)("p",null,"E-commerce sites built with next-generation frameworks like React, Vue, or Angular will benefit from headless CMSs.  Similar to SSG websites, the size and complexity of the project will determine the best approach to take - for simpler and smaller projects, the Git-based approach is more likely to be feasible, while projects aiming for scalability and \u2018future-proofing\u2019 their growth should strongly consider an API-centric approach."),(0,o.kt)("h3",{id:"multiple-frontends"},"Multiple Frontends"),(0,o.kt)("p",null,"If your goal is to create a multi-platform application using many different frontends (like different native apps for mobile devices), then you will almost certainly need to take an API-centric approach when choosing a CMS."),(0,o.kt)("p",null,"Git-based integrations can also work, depending on the project, but will be limited compared to having a robust API powering your different frontends."),(0,o.kt)("h3",{id:"microservice-heavy-architecture"},"Microservice Heavy Architecture"),(0,o.kt)("p",null,"If your project is complex, and consuming data from many different sources, then you will also want to strongly consider an API-centric approach to choosing your CMS.  Most good API-centric headless CMSs will have API gateway functionality built in, allowing you to bundle different microservices for your front ends to consume.  This can be much more difficult using Git-based integrations as the application grows in scale and complexity."),(0,o.kt)("h2",{id:"so-which-approach-should-i-choose"},"So, Which Approach Should I Choose?"),(0,o.kt)("p",null,"As discussed, both approaches are excellent, depending on your requirements.  If you are building a simpler or leaner project in which you prefer to keep developer overhead and costs to a minimum, then you should consider the advantages of a Git-based approach.  This will also ensure that your content is backed up."),(0,o.kt)("p",null,"For larger projects requiring more customization and scalability, and when you want to \u2018future proof\u2019 your work as it grows over time, then you should strongly consider taking an API-centric approach."),(0,o.kt)("h2",{id:"have-any-questions"},"Have any Questions?"),(0,o.kt)("p",null,"If you'd like to know more about headless CMS solutions for your enterprise, please don't hesitate to\n",(0,o.kt)("a",{parentName:"p",href:"https://kuroco.app/docs/about/support/"},"reach out to our team")," to answer any of your questions."))}u.isMDXComponent=!0}}]);