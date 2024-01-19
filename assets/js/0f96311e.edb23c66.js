"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[61522],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(a),g=i,u=d["".concat(s,".").concat(g)]||d[g]||c[g]||r;return a?n.createElement(u,o(o({ref:t},m),{},{components:a})):n.createElement(u,o({ref:t},m))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},40106:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));const r={title:"Using Any Email Delivery Service for Email Sending from Kuroco(blastengine)",description:'By using the trigger "Instead of the default email sending method (SendGrid)" you can send notification and invitation emails using any email delivery service such as blastengine, Mailchimp, Amazon SES, etc. In this tutorial, we will show you how to replace email sending from SendGrid to blastengine.'},o=void 0,l={unversionedId:"tutorials/use-any-email-delivery-service-to-send-emails-from-kuroco-blastengine",id:"tutorials/use-any-email-delivery-service-to-send-emails-from-kuroco-blastengine",title:"Using Any Email Delivery Service for Email Sending from Kuroco(blastengine)",description:'By using the trigger "Instead of the default email sending method (SendGrid)" you can send notification and invitation emails using any email delivery service such as blastengine, Mailchimp, Amazon SES, etc. In this tutorial, we will show you how to replace email sending from SendGrid to blastengine.',source:"@site/docs/tutorials/use-any-email-delivery-service-to-send-emails-from-kuroco-blastengine.md",sourceDirName:"tutorials",slug:"/tutorials/use-any-email-delivery-service-to-send-emails-from-kuroco-blastengine",permalink:"/docs/tutorials/use-any-email-delivery-service-to-send-emails-from-kuroco-blastengine",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/tutorials/use-any-email-delivery-service-to-send-emails-from-kuroco-blastengine.md",tags:[],version:"current",frontMatter:{title:"Using Any Email Delivery Service for Email Sending from Kuroco(blastengine)",description:'By using the trigger "Instead of the default email sending method (SendGrid)" you can send notification and invitation emails using any email delivery service such as blastengine, Mailchimp, Amazon SES, etc. In this tutorial, we will show you how to replace email sending from SendGrid to blastengine.'},sidebar:"documentationSidebar",previous:{title:"Using Any Email Delivery Service for Email Sending from Kuroco(Mailchimp)",permalink:"/docs/tutorials/use-any-email-delivery-service-to-send-emails-from-kuroco-mailchimp"},next:{title:"Notify by Email When a Specific Item in the Content is Updated",permalink:"/docs/tutorials/notify-by-email-when-specific-items-in-the-content-are-updated"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"What you&#39;ll learn",id:"what-youll-learn",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Setting up blastengine",id:"setting-up-blastengine",level:2},{value:"Setting up Kuroco",id:"setting-up-kuroco",level:2},{value:"Registering the secret",id:"registering-the-secret",level:3},{value:"Registering custom processing",id:"registering-custom-processing",level:3},{value:"Confirmation of operation",id:"confirmation-of-operation",level:2},{value:"Increasing email deliverability",id:"increasing-email-deliverability",level:2},{value:"Setting up SPF records",id:"setting-up-spf-records",level:3},{value:"Setting up DKIM",id:"setting-up-dkim",level:3},{value:"Generating private and public keys",id:"generating-private-and-public-keys",level:4},{value:"Register with blastengine",id:"register-with-blastengine",level:4},{value:"Configure DNS",id:"configure-dns",level:4},{value:"Related Documents",id:"related-documents",level:2}],m={toc:p},d="wrapper";function c(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,'By using the trigger "Instead of the default email sending method (SendGrid)", you can send notification and invitation emails using any email delivery service such as blastengine, Mailchimp, Amazon SES, etc.'),(0,i.kt)("p",null,"In this tutorial, we will show you how to replace email sending from SendGrid to blastengine."),(0,i.kt)("h3",{id:"what-youll-learn"},"What you'll learn"),(0,i.kt)("p",null,"You will learn how to implement email sending using any email delivery service with the following steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#setting-up-blastengine"},"Setting up blastengine")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#setting-up-kuroco"},"Setting up Kuroco")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#confirmation-of-operation"},"Confirmation of operation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#increasing-email-deliverability"},"Increasing email deliverability"))),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"In this tutorial, we will be using blastengine for email sending.  .",(0,i.kt)("br",{parentName:"p"}),"\n","Please refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://blastengine.jp/"},"blastengine")," website for detailed information about the service, as well as its ",(0,i.kt)("a",{parentName:"p",href:"https://blastengine.jp/documents/"},"API documentation"),"."),(0,i.kt)("p",{parentName:"admonition"},'Also, since we will be configuring SPF/DKIM, please make sure to use a domain that you own for the "from" email.')),(0,i.kt)("h2",{id:"setting-up-blastengine"},"Setting up blastengine"),(0,i.kt)("p",null,"First, access ",(0,i.kt)("a",{parentName:"p",href:"https://blastengine.jp/"},"blastengine")," and sign up for a free trial."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/e342dee64d1605373031dbcc3e0602f0.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/e342dee64d1605373031dbcc3e0602f0.png",alt:"Image from Gyazo"})),(0,i.kt)("p",null,'Once you have logged in to your trial account, click on "Address Registration" under the "API Integration Trial" tab to enter the address that will allow delivery from blastengine.'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/24730e7df6d12a0f28cc719581c3a0c1.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/24730e7df6d12a0f28cc719581c3a0c1.png",alt:"Image from Gyazo"})),(0,i.kt)("p",null,"Next, obtain the API key.",(0,i.kt)("br",{parentName:"p"}),"\n",'Click on the "Settings" page to go to the blastengine settings page.'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/3152f3a91b517ab3853739f4815f27a1.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/3152f3a91b517ab3853739f4815f27a1.png",alt:"Image from Gyazo"})),(0,i.kt)("p",null,'Click on "Check/Reissue" for the API key.'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/924c4a21ee53270cdab9b9374f4aae6b.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/924c4a21ee53270cdab9b9374f4aae6b.png",alt:"Image from Gyazo"})),(0,i.kt)("p",null,"Take note of the API key that is displayed."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/3150681ecd00867e78e1db73956812e9.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/3150681ecd00867e78e1db73956812e9.png",alt:"Image from Gyazo"})),(0,i.kt)("p",null,"Also, access the ",(0,i.kt)("a",{parentName:"p",href:"https://app.engn.jp/be/admin/account"},"Account Management")," page and take note of the ID."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/6e7ec78852bf9b7eb06c055ecf07586a.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/6e7ec78852bf9b7eb06c055ecf07586a.png",alt:"Image from Gyazo"})),(0,i.kt)("h2",{id:"setting-up-kuroco"},"Setting up Kuroco"),(0,i.kt)("h3",{id:"registering-the-secret"},"Registering the secret"),(0,i.kt)("p",null,'Access the Kuroco management screen and In the left sidebar menu, under "SETTINGS", click ',"[Environment]"," -> ","[Secrets]","."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/57c492bf4736d7276b41f960360b83cc.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/57c492bf4736d7276b41f960360b83cc.png",alt:"Image from Gyazo"})),(0,i.kt)("p",null,"Click on ","[Add]","."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/53708c3495a35fd72fdeea9266ebc64a.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/53708c3495a35fd72fdeea9266ebc64a.png",alt:"Image from Gyazo"})),(0,i.kt)("p",null,"Register the API key obtained from the blastengine settings page and the ID as shown below."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("td",{parentName:"tr",align:"left"},"BLASTENGINE_API_KEY")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Value"),(0,i.kt)("td",{parentName:"tr",align:"left"},"API key of blastengine")))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("td",{parentName:"tr",align:"left"},"BLASTENGINE_ID")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Value"),(0,i.kt)("td",{parentName:"tr",align:"left"},"ID of blastengine")))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/c2c7f982347b35bd762bb0c36c43bde5.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/c2c7f982347b35bd762bb0c36c43bde5.png",alt:"Image from Gyazo"})),(0,i.kt)("p",null,"You have now completed the preparation to use blastengine."),(0,i.kt)("h3",{id:"registering-custom-processing"},"Registering custom processing"),(0,i.kt)("p",null,"Once you have prepared to use blastengine, write the custom processing to replace email sending from SendGrid to blastengine."),(0,i.kt)("p",null,"In the left sidebar menu, click ","[Operation]"," -> ","[Custom function]"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/cb5f6e5e7baecef758932ce7e380ce79.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/cb5f6e5e7baecef758932ce7e380ce79.png",alt:"Image from Gyazo"})),(0,i.kt)("p",null,'Click on "Add".'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/25c556be5f60d1724c15b2942029a68f.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/25c556be5f60d1724c15b2942029a68f.png",alt:"Image from Gyazo"})),(0,i.kt)("p",null,"Configure as follows:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Item"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Title"),(0,i.kt)("td",{parentName:"tr",align:"left"},"sending_email_with_blastengine")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Identifier"),(0,i.kt)("td",{parentName:"tr",align:"left"},"sending_email_with_blastengine")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Trigger"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Instead of the default email sending method (SendGrid)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Processing"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The following content")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-smarty",metastring:'title="sending_email_with_blastengine"',title:'"sending_email_with_blastengine"'},"{* Create BearerToken *}\n{secret var='apiKey' key='BLASTENGINE_API_KEY'}\n{secret var='id' key='BLASTENGINE_ID'}\n{rcms_hash var='token' data=\"`$id``$apiKey`\" algo=\"sha256\"}\n{assign var='BearerToken' value=$token|strtolower|base64_encode}\n\n{* Set Request Headers *}\n{append var=headers value=\"Authorization: Bearer `$BearerToken`\"}\n{append var=headers value=\"Content-Type: application/json\"}\n{append var=headers value=\"Accept-Language: ja-JP\"}\n\n{* Set Body *}\n{assign var='body' value=$payload|@json_decode}\n{assign var='body.from.email' value=\"noreply@kuroco-mail.app\"}\n\n{* Send Request *}\n{api\n    endpoint=\"https://app.engn.jp/api/v1/deliveries/transaction\"\n    method='POST'\n    headers=$headers\n    body=$body\n    var=response\n    status_var=status\n}\n\n{logger msg1=\"blastengine_mail_log\" msg2=$body msg3=$response}\n{assign var='is_mail_sent' value=true}\n")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Please change ",(0,i.kt)("inlineCode",{parentName:"p"},"noreply@kuroco-mail.app")," to your own email address.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/09cc236e6c7774a87230bb1934dc9c55.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/09cc236e6c7774a87230bb1934dc9c55.png",alt:"Image from Gyazo"})),(0,i.kt)("p",null,"Once you have entered the information, click ","[Add]"," to add the custom process."),(0,i.kt)("h2",{id:"confirmation-of-operation"},"Confirmation of operation"),(0,i.kt)("p",null,"Let's actually send an email from Kuroco.\nTo confirm the operation, we will use the password reminder."),(0,i.kt)("p",null,"Access the Kuroco login screen and click ","[Forgot your password?]","."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/24045bad64606073659c477468dae183.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/24045bad64606073659c477468dae183.png",alt:"Image from Gyazo"})),(0,i.kt)("p",null,"Enter the email address that has been allowed to receive emails from blastengine and click ","[Send]","."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/add00d4234028c8f53570f95bcc10c32.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/add00d4234028c8f53570f95bcc10c32.png",alt:"Image from Gyazo"})),(0,i.kt)("p",null,'When you check the received email, you can see that the "from" address is the email address in the custom process and the display of "via besender-s.jp".'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/de6540ba0af319d8879ae2042495e406.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/de6540ba0af319d8879ae2042495e406.png",alt:"Image from Gyazo"})),(0,i.kt)("p",null,"Also, when you check the ",(0,i.kt)("a",{parentName:"p",href:"https://app.engn.jp/be/admin/logs"},"delivery log")," of blastengine, you can see that the email was sent from blastengine."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/6c89ebbece9c5035d88769182c3e5349.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/6c89ebbece9c5035d88769182c3e5349.png",alt:"Image from Gyazo"})),(0,i.kt)("h2",{id:"increasing-email-deliverability"},"Increasing email deliverability"),(0,i.kt)("p",null,"So far, you have been able to send emails using blastengine.\nTo prevent sent emails from being classified as spam, we will set up SPF records and DKIM authentication."),(0,i.kt)("p",null,"By implementing email authentication, you can prevent email spoofing and verify that the email was actually sent by the domain owner."),(0,i.kt)("p",null,"As the processing for emails without SPF/DKIM settings becomes stricter year by year, be sure to implement these settings."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://support.google.com/mail/answer/81126"},"Email sender guidelines")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blastengine.jp/blog_content/spf_basic/"},"Why SPF authentication is necessary and how to set it up")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blastengine.jp/blog_content/dkim_basic/"},"\u3010Illustration\u3011Even beginners can understand! Mechanism and setup method of DKIM")))),(0,i.kt)("h3",{id:"setting-up-spf-records"},"Setting up SPF records"),(0,i.kt)("p",null,"Set the following TXT record in the domain management service."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Hostname"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Blank"),(0,i.kt)("td",{parentName:"tr",align:"left"},"TXT"),(0,i.kt)("td",{parentName:"tr",align:"left"},"v=spf1 include:spf.besender.jp ~all")))),(0,i.kt)("p",null,"After setting it up, use ",(0,i.kt)("a",{parentName:"p",href:"https://mxtoolbox.com/spf.aspx"},"MxToolbox's SPF Record Check")," to verify that it is set up correctly."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/84c9f0f754fcddd12ff14b38369d25d4.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/84c9f0f754fcddd12ff14b38369d25d4.png",alt:"Image from Gyazo"})),(0,i.kt)("h3",{id:"setting-up-dkim"},"Setting up DKIM"),(0,i.kt)("p",null,"Next, set up DKIM.\nFirst, prepare a pair of public and private keys, and set the private key in blastengine."),(0,i.kt)("h4",{id:"generating-private-and-public-keys"},"Generating private and public keys"),(0,i.kt)("p",null,"Generate the private key using the OpenSSL command-line tool in your local environment.\nFirst, open the terminal and check if OpenSSL is available using the following command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"openssl version\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If OpenSSL is not installed, please install it separately, especially for Windows.")),(0,i.kt)("p",null,"Next, create a private key with the following command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"openssl genpkey -algorithm RSA -out private_key.pem\n")),(0,i.kt)("p",null,"The public key can be extracted from the private key using OpenSSL.",(0,i.kt)("br",{parentName:"p"}),"\n","Here is the command to do so."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"openssl rsa -pubout -in private_key.pem -out public_key.pem\n")),(0,i.kt)("h4",{id:"register-with-blastengine"},"Register with blastengine"),(0,i.kt)("p",null,"Register the created private key with blastengine."),(0,i.kt)("p",null,"Access the blastengine ",(0,i.kt)("a",{parentName:"p",href:"https://app.engn.jp/be/admin/settings"},"settings page")," and click on ","[Confirm/Change]"," for DKIM Signer Settings."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/792b66373c8baaa13115e040809cd4f4.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/792b66373c8baaa13115e040809cd4f4.png",alt:"Image from Gyazo"})),(0,i.kt)("p",null,'The DKIM Signer Settings will be displayed. Click on "New Registration" and set the following:'),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Selector"),(0,i.kt)("td",{parentName:"tr",align:"left"},"kuroco")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Domain"),(0,i.kt)("td",{parentName:"tr",align:"left"},'The domain used in the "From" email')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Private Key"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The private key starting with ",(0,i.kt)("inlineCode",{parentName:"td"},"-----BEGIN PRIVATE KEY-----")," that was created earlier")))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/ae34738520eca91c1f75de8e78e785d2.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/ae34738520eca91c1f75de8e78e785d2.png",alt:"Image from Gyazo"})),(0,i.kt)("p",null,"Once the input is complete, click ","[Confirm]"," to register."),(0,i.kt)("h4",{id:"configure-dns"},"Configure DNS"),(0,i.kt)("p",null,"Set the following TXT record in the domain management service:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Hostname"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"kuroco._domainkey"),(0,i.kt)("td",{parentName:"tr",align:"left"},"TXT"),(0,i.kt)("td",{parentName:"tr",align:"left"},"v=DKIM1; k=rsa; p=The part of the public key without the ",(0,i.kt)("inlineCode",{parentName:"td"},"-----BEGIN PUBLIC KEY-----")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"-----END PUBLIC KEY-----"))))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"If the length of the VALUE exceeds the maximum number of characters that can be set, you need to split the TXT record and register it separately.",(0,i.kt)("br",{parentName:"p"}),"\n","If necessary, please contact your domain management service for assistance.")),(0,i.kt)("p",null,"Once the configuration is complete, use ",(0,i.kt)("a",{parentName:"p",href:"https://mxtoolbox.com/dkim.aspx"},"MxToolbox's DKIM Record Lookup")," to verify that it is set correctly."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/38fcf2313f9de8c460af71b5773b6f97.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/38fcf2313f9de8c460af71b5773b6f97.png",alt:"Image from Gyazo"})),(0,i.kt)("p",null,'Send another email from Kuroco to confirm that the "From" address is now the custom processing email address, and there is no longer a "via besender-s.jp" indication.'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/66842472eb25d2867c95335657e68275.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/66842472eb25d2867c95335657e68275.png",alt:"Image from Gyazo"})),(0,i.kt)("p",null,"With this, the configuration for using any email delivery service is complete."),(0,i.kt)("h2",{id:"related-documents"},"Related Documents"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/trigger-variables/"},"List of Triggers and Variables available for Custom Processing")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/smarty-plugin/"},"Smarty Plugin")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/smarty-php-function/"},"PHP Functions available in Kuroco's Smarty"))))}c.isMDXComponent=!0}}]);