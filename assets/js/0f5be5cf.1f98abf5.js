"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[7613],{3905:(e,t,o)=>{o.d(t,{Zo:()=>m,kt:()=>f});var a=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function d(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},m=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),l=c(o),p=r,f=l["".concat(s,".").concat(p)]||l[p]||u[p]||n;return o?a.createElement(f,i(i({ref:t},m),{},{components:o})):a.createElement(f,i({ref:t},m))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,i=new Array(n);i[0]=p;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[l]="string"==typeof e?e:r,i[1]=d;for(var c=2;c<n;c++)i[c]=o[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},459:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>d,toc:()=>c});var a=o(87462),r=(o(67294),o(3905));const n={title:"Transferring your domain from another site to Kuroco",category:"KurocoFront",weight:1},i=void 0,d={unversionedId:"tutorials/transferring-your-domain-from-another-site-to-kuroco",id:"tutorials/transferring-your-domain-from-another-site-to-kuroco",title:"Transferring your domain from another site to Kuroco",description:"This tutorial explains how to transfer your domain from another site to Kuroco.",source:"@site/docs/tutorials/transferring-your-domain-from-another-site-to-kuroco.md",sourceDirName:"tutorials",slug:"/tutorials/transferring-your-domain-from-another-site-to-kuroco",permalink:"/docs/tutorials/transferring-your-domain-from-another-site-to-kuroco",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/tutorials/transferring-your-domain-from-another-site-to-kuroco.md",tags:[],version:"current",frontMatter:{title:"Transferring your domain from another site to Kuroco",category:"KurocoFront",weight:1},sidebar:"documentationSidebar",previous:{title:"Using your own API domain with KurocoFront",permalink:"/docs/tutorials/using-your-own-api-domain-with-kurocofront"},next:{title:"Using the KurocoFront app domain for your front-end staging site",permalink:"/docs/tutorials/kurocofront-app-domain-for-front-end-staging-site"}},s={},c=[{value:"Transferring your domain",id:"transferring-your-domain",level:2},{value:"1. Register a custom domain on KurocoFront",id:"1-register-a-custom-domain-on-kurocofront",level:3},{value:"2. Create a CNAME record",id:"2-create-a-cname-record",level:3},{value:"3. Update the front-end domain in your account settings",id:"3-update-the-front-end-domain-in-your-account-settings",level:3},{value:"4. Register a custom API domain (if applicable)",id:"4-register-a-custom-api-domain-if-applicable",level:3},{value:"5. Allow CORS for your custom domain",id:"5-allow-cors-for-your-custom-domain",level:3},{value:"6. Modify files that directly describe the domain",id:"6-modify-files-that-directly-describe-the-domain",level:3},{value:"7. Modify the hosts file (optional)",id:"7-modify-the-hosts-file-optional",level:3},{value:"8. Create DNS records to use your domain",id:"8-create-dns-records-to-use-your-domain",level:3},{value:"More information",id:"more-information",level:2}],m={toc:c},l="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(l,(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This tutorial explains how to transfer your domain from another site to Kuroco."),(0,r.kt)("h2",{id:"transferring-your-domain"},"Transferring your domain"),(0,r.kt)("h3",{id:"1-register-a-custom-domain-on-kurocofront"},"1. Register a custom domain on KurocoFront"),(0,r.kt)("p",null,"In the left sidebar menu, click ","[Environment]"," -> ","[Custom domain/TLS certificate]",' and enter the domain you want to use in "Custom domain". Do not include any trailing slashes or directories at the end.'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/682a88065c031fe5c200ee3dd7f8da3d.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/682a88065c031fe5c200ee3dd7f8da3d.png",alt:"Image from Gyazo"}),"\nAfter entering your domain, click ","[Add]","."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/7e18212f5f6c750111eb6dbc15d0b1af.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/7e18212f5f6c750111eb6dbc15d0b1af.png",alt:"Image from Gyazo"})),(0,r.kt)("h3",{id:"2-create-a-cname-record"},"2. Create a CNAME record"),(0,r.kt)("p",null,'After the custom domain has been authenticated, the "Domain ownership verification" field will appear on the screen. Verify the DNS record in this field.'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/d9f1d1f22fa56a086b0287843148788a.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/d9f1d1f22fa56a086b0287843148788a.png",alt:"Image from Gyazo"}),"\nConfigure the CNAME (canonical name) record according to the above information."),(0,r.kt)("p",null,"Note: The configuration of the DNS record varies depending on your domain registrar. Refer to the links below and contact your domain registrar's customer support for more information."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.domain.com/help/article/dns-management-how-to-update-dns-records"},"How to Update DNS Records - DNS Management")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://support.google.com/domains/answer/3290309?hl=en"},"Google Domains Help - Manage domain name servers"))),(0,r.kt)("h3",{id:"3-update-the-front-end-domain-in-your-account-settings"},"3. Update the front-end domain in your account settings"),(0,r.kt)("p",null,"Next, plug your custom domain into the front-end. Click ","[Environment]"," -> ","[Account]"," in the sidebar menu to go to the account settings screen."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/4edeae261cacdf0b7ea411366b1534ef.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/4edeae261cacdf0b7ea411366b1534ef.png",alt:"Image from Gyazo"}),'\n"Front-end domain" should now display an option to change to the custom domain you set up earlier. Verify and select this option, then click ',"[Update]","."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/6ae7fc3768f596e0652fabe83936d1c8.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/6ae7fc3768f596e0652fabe83936d1c8.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/438e2a8322757adb76b662d41dee3ba1.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/438e2a8322757adb76b662d41dee3ba1.png",alt:"Image from Gyazo"}),'\nNote: At this stage, you have not changed "DNS records for the domain", so your Kuroco-created site will not yet be displayed on your custom domain. Accessing the custom domain will direct you to your old site.'),(0,r.kt)("h3",{id:"4-register-a-custom-api-domain-if-applicable"},"4. Register a custom API domain (if applicable)"),(0,r.kt)("p",null,"This step applies if you are using cookies in ","[API]"," -> ","[Security]",". Otherwise, skip to ",(0,r.kt)("a",{parentName:"p",href:"#5-allow-cors-for-your-custom-domain"},"5. Allow CORS for your custom domain"),"."),(0,r.kt)("p",null,"In the sidebar menu, click ","[Environment]"," -> ","[Custom domain/TLS certificate]",' and enter the domain you want to use in "Custom API domain". Do not include any trailing slashes or directories at the end.'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/27f2acfb0ec1d1dfdd7561ed1a1a956a.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/27f2acfb0ec1d1dfdd7561ed1a1a956a.png",alt:"Image from Gyazo"}),"\nNote: The API domain must have a different sub-domain from the custom domain.  "),(0,r.kt)("p",null,"For example:  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Custom domain: ",(0,r.kt)("inlineCode",{parentName:"li"},"https://www.example.com")),(0,r.kt)("li",{parentName:"ul"},"API domain: ",(0,r.kt)("inlineCode",{parentName:"li"},"https://api.example.com"))),(0,r.kt)("p",null,"After entering your custom API domain, verify the corresponding DNS records."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/624ce499b995fec1a7a0630021d3d723.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/624ce499b995fec1a7a0630021d3d723.png",alt:"Image from Gyazo"}),"\nConfigure the CNAME or address record accordingly."),(0,r.kt)("p",null,"Next, update the API domain. Click ","[Environment]"," -> ","[Account]"," to go to the account settings."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://t.gyazo.com/teams/diverta/5d1e08528dbea29a8a17bdf91906c3fc.png"},"Image from Gyazo"),"\nIn the ",(0,r.kt)("inlineCode",{parentName:"p"},"API domain")," field, select the API domain you added above and click ","[Update]","."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/8fcc870d09d9e6ea10b32b01398700da.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/8fcc870d09d9e6ea10b32b01398700da.png",alt:"Image from Gyazo"})),(0,r.kt)("h3",{id:"5-allow-cors-for-your-custom-domain"},"5. Allow CORS for your custom domain"),(0,r.kt)("p",null,"To add your custom domain to the API CORS settings, select the target API under the ","[API]"," dropdown list in the sidebar menu. Then, click ","[Operation CORS]"," on the API screen."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/826041b5cff09902b5d1fec0e2d102b3.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/826041b5cff09902b5d1fec0e2d102b3.png",alt:"fetched from Gyazo"}),"\nIn the CORS settings dialog, click ","[Add Origin]",' under the "CORS_ALLOW_ORIGINS" section.'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/b8eaf84945f48b74ae372ddd47060c28.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/b8eaf84945f48b74ae372ddd47060c28.png",alt:"fetched from Gyazo"}),"\nEnter your custom domain in the new textbox that appears and click ","[Save]",".  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/f6ce21e057f8e97490ec7fe9b39867c3.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/f6ce21e057f8e97490ec7fe9b39867c3.png",alt:"fetched from Gyazo"})),(0,r.kt)("h3",{id:"6-modify-files-that-directly-describe-the-domain"},"6. Modify files that directly describe the domain"),(0,r.kt)("p",null,"If you have files directly describing the domain in the integrated GitHub repository, they need to be modified.  "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"GitHub Actions YAML file")),(0,r.kt)("p",null,"The YAML file used to integrate with GitHub Actions includes the domain and should be modified. To do so, click ","[KurocoFront]"," -> ","[GitHub]",' in the sidebar menu and copy the contents in "Repository".'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/5c399e65ab625c0e1a3e7774a313dbe4.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/5c399e65ab625c0e1a3e7774a313dbe4.png",alt:"Image from Gyazo"})),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See: ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorials/connect-to-github-with-kuroco-front/#4-place-yaml-file-under-github-workflows"},"How to deploy the source from GitHub to KurocoFront - 4. Place YAML file under .github/workflows")," for more information.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},".env")," file"),(0,r.kt)("br",{parentName:"p"}),"\n","If the root domain and/or API domain are written directly in the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file, please modify it."),(0,r.kt)("h3",{id:"7-modify-the-hosts-file-optional"},"7. Modify the hosts file (optional)"),(0,r.kt)("p",null,"As an optional step, you can modify the hosts file to verify your website display before updating the DNS records. Take note of the following points."),(0,r.kt)("p",null,"The address record for the hosts file can be found in the ",(0,r.kt)("inlineCode",{parentName:"p"},"DNS records for the domain (If CNAME is not available)")," field in ","[Environment]"," -> ","[Custom domain/TLS certificate]","."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/30c8509fd273f33d683e294467cb8879.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/30c8509fd273f33d683e294467cb8879.png",alt:"Image from Gyazo"}),"\nThe above screenshot shows 4 address records, but you only have to enter 1 record in the hosts file.  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hosts",metastring:'title="hosts"',title:'"hosts"'},"151.101.XX.XXX www.example.com\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"After verifying the site display, make sure to restore the original hosts settings.  "),(0,r.kt)("p",{parentName:"admonition"},"If your website is not displaying correctly, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/faq/setting-up-a-custom-domain/"},"FAQ: The custom domain I set up is not displaying my site. What checks should I perform?")," for troubleshooting help.")),(0,r.kt)("h3",{id:"8-create-dns-records-to-use-your-domain"},"8. Create DNS records to use your domain"),(0,r.kt)("p",null,"In the left sidebar menu, click ","[Environment]"," -> ","[Custom domain/TLS certificate]",'. Verify the "DNS records for the domain (Recommended)" or "DNS records for the domain (If CNAME is not available)" field.'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/fccdbc0841d7bd59f69cb1761ade5e6e.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/fccdbc0841d7bd59f69cb1761ade5e6e.png",alt:"Image from Gyazo"}),"\nConfigure the CNAME or address record according to the above information.  "),(0,r.kt)("p",null,"Note: The configuration of the DNS record varies depending on your domain registrar. Refer to the links below and contact your domain registrar's customer support for more information."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.domain.com/help/article/dns-management-how-to-update-dns-records"},"How to Update DNS Records - DNS Management")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://support.google.com/domains/answer/3290309?hl=en"},"Google Domains Help - Manage domain name servers"))),(0,r.kt)("p",null,"Once the DNS is reflected, you will be able to access the Kuroco website through your original domain by clicking ","[Top page]"," in the sidebar menu."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/6c92c90b1f89d62a5aa6858973ad1abc.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/6c92c90b1f89d62a5aa6858973ad1abc.png",alt:"Image from Gyazo"})),(0,r.kt)("h2",{id:"more-information"},"More information"),(0,r.kt)("p",null,"To learn more about using original domains and KurocoFront, refer to the documents below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/tutorials/using-a-custom-domain-name-on-kurocofront/"},"Tutorial: Using your own custom domain name on KurocoFront")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/tutorials/connect-to-github-with-kuroco-front/"},"Tutorial: How to deploy the source from GitHub to KurocoFront")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/faq/setting-up-a-custom-domain/"},"FAQ: The custom domain I set up is not displaying my site. What checks should I perform?"))))}u.isMDXComponent=!0}}]);