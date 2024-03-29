"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[86947],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),d=i,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||n;return a?r.createElement(m,o(o({ref:t},p),{},{components:a})):r.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<n;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},74485:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var r=a(87462),i=(a(67294),a(3905));const n={date:new Date("2022-04-08T00:00:00.000Z"),title:"WAF",description:"A brief introduction to Web Application Firewall",slug:"waf",authors:"diverta",hide_table_of_contents:!1},o=void 0,s={permalink:"/blog/waf",source:"@site/blog/waf.md",title:"WAF",description:"A brief introduction to Web Application Firewall",date:"2022-04-08T00:00:00.000Z",formattedDate:"April 8, 2022",tags:[],readingTime:2.945,hasTruncateMarker:!0,authors:[{name:"Diverta",title:"Creator of Kuroco service",url:"https://www.diverta.co.jp",imageURL:"https://github.com/diverta.png",key:"diverta"}],frontMatter:{date:"2022-04-08T00:00:00.000Z",title:"WAF",description:"A brief introduction to Web Application Firewall",slug:"waf",authors:"diverta",hide_table_of_contents:!1},prevItem:{title:"Serverless",permalink:"/blog/serverless"},nextItem:{title:"What Are the Benefits of a Headless CMS?",permalink:"/blog/what-are-the-benefits-of-a-headless-cms"}},l={authorsImageUrls:[void 0]},c=[{value:"Overview",id:"overview",level:2},{value:"How Does a WAF Work?",id:"how-does-a-waf-work",level:2},{value:"What are the Main Types of WAF Policies?",id:"what-are-the-main-types-of-waf-policies",level:2},{value:"What are the Main Ways a WAF Can be Implemented?",id:"what-are-the-main-ways-a-waf-can-be-implemented",level:2},{value:"Related Articles",id:"related-articles",level:2}],p={toc:c},u="wrapper";function h(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A brief introduction to Web Application Firewall"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"A web application firewall (or WAF) is a high-level layer in your software that filters the traffic between your web application and the Internet. It mainly serves to protect your app from HTTP attacks like DDoS, XSS (cross-site-scripting), SQL injection, and others. Combined with other security layers in the stack, WAF is an important part of keeping your web app secure."),(0,i.kt)("p",null,"In the same manner that a proxy server protects the client by serving as an intermediary between the client app and the Internet, a WAF is a reverse proxy that protects the server from any client-side attacks. The WAF filters out any malicious client-side code before it can reach the server to cause any problems."),(0,i.kt)("h2",{id:"how-does-a-waf-work"},"How Does a WAF Work?"),(0,i.kt)("p",null,"A WAF controls outside access to a web application. Malicious requests are denied, as is any outgoing activity that is caused by such malicious activity on the servers."),(0,i.kt)("p",null,"When deployed as a reverse proxy, clients must first pass through the WAF (at the 'edge)' before they can communicate with the origin server. Clients are not typically aware they are communicating with a reverse-proxy instead of directly with the origin server, and the user experience is not negatively impacted in any way."),(0,i.kt)("p",null,"Both incoming requests from clients and outgoing responses from the origin server are filtered by the WAF before the communications are allowed to pass through. Any attempts on either side that do not pass the WAF's security policies are denied."),(0,i.kt)("h2",{id:"what-are-the-main-types-of-waf-policies"},"What are the Main Types of WAF Policies?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Blacklist (aka \u2018block-list\u2019) policies: Protect against known threats that currently exist, while allowing all other traffic through."),(0,i.kt)("li",{parentName:"ul"},"Whitelist (aka \u2018allow-list\u2019) policies: Assume all traffic is a threat, unless specifically given permission beforehand.")),(0,i.kt)("p",null,"As both of these approaches have strengths and weaknesses, it is often advisable to combine them to obtain the best desired effect. For example, a site that only has a certain type of desired traffic might set up a whitelist, blocking out all other traffic (while still having a basic blacklist of any malicious requests that may come from any of the whitelisted sources), while some sites may have a wide variety of traffic and depend more on a heavy-handed blacklist approach."),(0,i.kt)("h2",{id:"what-are-the-main-ways-a-waf-can-be-implemented"},"What are the Main Ways a WAF Can be Implemented?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Local/Hardware-based Network: The traditional method used by companies, requiring a local network be set up. This option is the most expensive, requiring large purchases of equipment and expenses to store and maintain the local network."),(0,i.kt)("li",{parentName:"ul"},"Hosted: The WAF layer can be hosted in the web application\u2019s software, on the server side. While this method is cheaper in upfront costs to implement, it consumes server resources and requires backend developer resources to set up and maintain."),(0,i.kt)("li",{parentName:"ul"},"Cloud-based: The most modern, turn-key solution for implementing WAF. A cloud provider will set up and host all the WAF resources remotely, allowing customers to to purchase access, typically requiring only a simple change in DNS settings to re-route the traffic. Similar to other software-as-a-service (SaaS) solutions, the user is typically charged a monthly or pay-as-you-go fee, treating the service as a utility. Aside from being the cheapest and most convenient option in most cases, the main advantage to this option is that cloud-based providers maintain the WAF on their end, ensuring it is up-to-date for maximum security and reliability.")),(0,i.kt)("p",null,"Contact us to learn more about Kuroco\u2019s easy-to-use cloud-based WAF solution."),(0,i.kt)("h2",{id:"related-articles"},"Related Articles"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/blog/what-is-a-reverse-proxy"},"What is a Reverse Proxy?"))))}h.isMDXComponent=!0}}]);