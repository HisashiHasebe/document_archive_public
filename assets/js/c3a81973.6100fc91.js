"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[97606],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var o=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(a),g=r,u=d["".concat(s,".").concat(g)]||d[g]||m[g]||n;return a?o.createElement(u,i(i({ref:t},p),{},{components:a})):o.createElement(u,i({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:r,i[1]=c;for(var l=2;l<n;l++)i[l]=a[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}g.displayName="MDXCreateElement"},51357:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>c,toc:()=>l});var o=a(87462),r=(a(67294),a(3905));const n={title:"Cloud storage integration with Firebase",category:"External system cooperation",weight:1},i=void 0,c={unversionedId:"tutorials/firebase",id:"tutorials/firebase",title:"Cloud storage integration with Firebase",description:"This tutorial explains how to integrate Firebase with Kuroco.",source:"@site/docs/tutorials/firebase.md",sourceDirName:"tutorials",slug:"/tutorials/firebase",permalink:"/docs/tutorials/firebase",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/tutorials/firebase.md",tags:[],version:"current",frontMatter:{title:"Cloud storage integration with Firebase",category:"External system cooperation",weight:1},sidebar:"documentationSidebar",previous:{title:"Connecting to Twilio and send SMS",permalink:"/docs/tutorials/how-to-connect-to-twillio"},next:{title:"Integrating and storing files with Amazon S3",permalink:"/docs/tutorials/amazon-s3"}},s={},l=[{value:"Create a Firebase project",id:"create-a-firebase-project",level:2},{value:"1. Apply for Firebase(Google Cloud Platform)",id:"1-apply-for-firebasegoogle-cloud-platform",level:3},{value:"2. Create a project",id:"2-create-a-project",level:3},{value:"3. Enter the project name and click Continue",id:"3-enter-the-project-name-and-click-continue",level:3},{value:"4. Set up Google Analytics",id:"4-set-up-google-analytics",level:3},{value:"5. Click Continue after the project has been created",id:"5-click-continue-after-the-project-has-been-created",level:3},{value:"Firebase settings / acquiring credentials",id:"firebase-settings--acquiring-credentials",level:2},{value:"6. Access the Project Settings",id:"6-access-the-project-settings",level:3},{value:"7. Download the private key",id:"7-download-the-private-key",level:3},{value:"8. Set up to start using Firebase storage",id:"8-set-up-to-start-using-firebase-storage",level:3},{value:"9. Additional settings for Firebase app",id:"9-additional-settings-for-firebase-app",level:3},{value:"10. Get the FirebaseConfig",id:"10-get-the-firebaseconfig",level:3},{value:"Kuroco settings",id:"kuroco-settings",level:2},{value:"11. Set up the credentials, obtained in steps 7 and 10 above, on the Firebase&#39;s setting screen",id:"11-set-up-the-credentials-obtained-in-steps-7-and-10-above-on-the-firebases-setting-screen",level:3},{value:"12. Enable Storage",id:"12-enable-storage",level:3},{value:"How to use in content definition",id:"how-to-use-in-content-definition",level:2}],p={toc:l},d="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This tutorial explains how to integrate Firebase with Kuroco.",(0,r.kt)("br",{parentName:"p"}),"\n","Through the integration with Firebase, Kuroco can upload, store, and use image or video files stored in Firebase."),(0,r.kt)("h2",{id:"create-a-firebase-project"},"Create a Firebase project"),(0,r.kt)("p",null,"Create a Firebase project from the ",(0,r.kt)("a",{parentName:"p",href:"https://firebase.google.com/"},"Firebase official website"),".",(0,r.kt)("br",{parentName:"p"}),"\n",'For this tutorial, we\'ll use the Free "Spark Plan" for the test implementation. Feel free to upgrade to the paid plan if necessary.'),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://firebase.google.com/pricing"},"Firebase pricing"))),(0,r.kt)("h3",{id:"1-apply-for-firebasegoogle-cloud-platform"},"1. Apply for Firebase(Google Cloud Platform)"),(0,r.kt)("p",null,"Go to the ",(0,r.kt)("a",{parentName:"p",href:"https://firebase.google.com/"},"Firebase official website")," and click ","[Get Started]",".  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/0b1ad7010a99065baf52387cd7f1bb68.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/0b1ad7010a99065baf52387cd7f1bb68.png",alt:"Image from Gyazo"})),(0,r.kt)("h3",{id:"2-create-a-project"},"2. Create a project"),(0,r.kt)("p",null,"Click ","[Create a project]",' on the "Welcome to Firebase" screen.  '),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/f2d72899e2949bd7234f3562dab7a085.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/f2d72899e2949bd7234f3562dab7a085.png",alt:"Image from Gyazo"})),(0,r.kt)("h3",{id:"3-enter-the-project-name-and-click-continue"},"3. Enter the project name and click Continue"),(0,r.kt)("p",null,"Enter the project name, and click ","[Continue]",".",(0,r.kt)("br",{parentName:"p"}),"\n","Please note that the project name cannot be changed later.  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/7b3a3266a7c5cf8a8ab83b56fb480970.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/7b3a3266a7c5cf8a8ab83b56fb480970.png",alt:"Image from Gyazo"})),(0,r.kt)("h3",{id:"4-set-up-google-analytics"},"4. Set up Google Analytics"),(0,r.kt)("p",null,"Enable or disable Google Analytics.",(0,r.kt)("br",{parentName:"p"}),"\n","If Google Analytics is enabled, the next screen will take you to the account settings page for Google Analytics. For this tutorial, select ","[Disable]",". "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/1a245ce5912ff26e7b11d8ad6b46c7da.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/1a245ce5912ff26e7b11d8ad6b46c7da.png",alt:"Image from Gyazo"})),(0,r.kt)("h3",{id:"5-click-continue-after-the-project-has-been-created"},"5. Click Continue after the project has been created"),(0,r.kt)("p",null,"Click ","[Continue]"," on the project creation completion screen.  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/ef42b8a54355eaee5a0d96d57b5e6d27.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/ef42b8a54355eaee5a0d96d57b5e6d27.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"This completes the Firebase project setup."),(0,r.kt)("h2",{id:"firebase-settings--acquiring-credentials"},"Firebase settings / acquiring credentials"),(0,r.kt)("p",null,"We will be focusing on the Firebase management screen for the following steps.  "),(0,r.kt)("h3",{id:"6-access-the-project-settings"},"6. Access the ","[Project Settings]"),(0,r.kt)("p",null,"Click ","[Project Settings]"," from the gear icon on the Firebase dashboard.  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/30bcb51170c0cd2895bf5741db0a7a5d.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/30bcb51170c0cd2895bf5741db0a7a5d.png",alt:"Image from Gyazo"})),(0,r.kt)("h3",{id:"7-download-the-private-key"},"7. Download the private key"),(0,r.kt)("p",null,"Under the ","[Service accounts]"," tab, click ","[Generate new private key]",".  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/fa82109ace592a81242da5d47e9042e2.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/fa82109ace592a81242da5d47e9042e2.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"Click ","[Generate key]"," in the pop-up and the file will be downloaded.  "),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Save the downloaded file as it will be used later.  ")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/b55d2ceafee2a7f660e47b7c10e79628.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/b55d2ceafee2a7f660e47b7c10e79628.png",alt:"Image from Gyazo"})),(0,r.kt)("h3",{id:"8-set-up-to-start-using-firebase-storage"},"8. Set up to start using Firebase storage"),(0,r.kt)("p",null,"Click ","[Build]"," -> ","[Storage]"," on the side menu, then click ","[Get started]"," on the Storage screen.  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/e499c359ff53fba584f020581cdcfe42.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/e499c359ff53fba584f020581cdcfe42.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"Click ","[Next]","."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/769baa30caccab8653a012410df3bf99.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/769baa30caccab8653a012410df3bf99.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"Select a location that is most suitable for your organization.",(0,r.kt)("br",{parentName:"p"}),"\n",'In this example, "asia-northeast1" was selected for the Cloud Storage location.',(0,r.kt)("br",{parentName:"p"}),"\n","After selecting the desired location, click ","[Done]",".  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/c26e884b24dd6d4a80c51271f7d4e8ef.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/c26e884b24dd6d4a80c51271f7d4e8ef.png",alt:"Image from Gyazo"})),(0,r.kt)("h3",{id:"9-additional-settings-for-firebase-app"},"9. Additional settings for Firebase app"),(0,r.kt)("p",null,"Select ","[Project Overview]"," on the side menu to return to the project main page, and click the WEB type app ","[",(0,r.kt)("inlineCode",{parentName:"p"},"</>"),"]"," icon.  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/8b2886a04ce036cc6cad72f941e45890.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/8b2886a04ce036cc6cad72f941e45890.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"Enter the app nickname and click ","[Register App]",".  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/d9734d6ca2dd8d5c202968c7b6e1e265.jpg?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/d9734d6ca2dd8d5c202968c7b6e1e265.jpg",alt:"Image from Gyazo"})),(0,r.kt)("p",null,'The "Add Firebase SDK" screen will be displayed. Click ',"[Continue to the console]",".  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/5889c24294d0ef858c428c352f6799d7.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/5889c24294d0ef858c428c352f6799d7.png",alt:"Image from Gyazo"})),(0,r.kt)("h3",{id:"10-get-the-firebaseconfig"},"10. Get the FirebaseConfig"),(0,r.kt)("p",null,'Click the gear icon next to "Project Overview" to access the ',"[Project settings]"," screen.  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/30bcb51170c0cd2895bf5741db0a7a5d.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/30bcb51170c0cd2895bf5741db0a7a5d.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,'Scroll down the page, under "Your apps" -> "SDK setup and configuration", select "Config".',(0,r.kt)("br",{parentName:"p"}),"\n","The firebaseConfig will be displayed. Copy it, it will be used later.  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/712c9755350674298852df04f4e7b179.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/712c9755350674298852df04f4e7b179.png",alt:"Image from Gyazo"})),(0,r.kt)("h2",{id:"kuroco-settings"},"Kuroco settings"),(0,r.kt)("p",null,"We will be focusing on the Kuroco's management screen in the following steps.  "),(0,r.kt)("h3",{id:"11-set-up-the-credentials-obtained-in-steps-7-and-10-above-on-the-firebases-setting-screen"},"11. Set up the credentials, obtained in steps 7 and 10 above, on the Firebase's setting screen"),(0,r.kt)("p",null,"Click ","[External system integration]"," -> ","[Firebase]"," on the side menu of Kuroco's management screen.  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/1f98a10454e64452262fc03d0a35bb1c.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/1f98a10454e64452262fc03d0a35bb1c.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"Upload the file obtained in \"7. Download the private key\" to 'Credentials'.  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/bf6e14a68e34878b0777513c216de9f9.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/bf6e14a68e34878b0777513c216de9f9.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"Next, paste the FirebaseConfig obtained in \"10. Get FirebaseConfig\" in the 'App Config' field.  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/23e7e91cd7d789c2a7193742a23d66be.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/23e7e91cd7d789c2a7193742a23d66be.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"Click ","[Connect]",".  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/e7751bc215e10788745984a9ac4146a1.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/e7751bc215e10788745984a9ac4146a1.png",alt:"Image from Gyazo"})),(0,r.kt)("h3",{id:"12-enable-storage"},"12. Enable Storage"),(0,r.kt)("p",null,"Check ","[Enable]",' for "Storage" and click ',"[Update]",".  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/1e52bb18408a4c5fa2bee34c4d4c6387.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/1e52bb18408a4c5fa2bee34c4d4c6387.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"This completes the integration with Firebase.  "),(0,r.kt)("h2",{id:"how-to-use-in-content-definition"},"How to use in content definition"),(0,r.kt)("p",null,"On Kuroco's ",(0,r.kt)("a",{parentName:"p",href:"/docs/management/content-structure-topics-group/"},"Content structure")," screen, select ","[File(upload to GCS)]"," in the field settings."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/4d2c3b980bb2269a14f2d81d6c865151.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/4d2c3b980bb2269a14f2d81d6c865151.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"The file upload field will be displayed on the content edit screen.  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/d209a749dd03f265c6346c2c4ef3bd1c.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/d209a749dd03f265c6346c2c4ef3bd1c.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"If a file is uploaded from here, it will be uploaded to Firebase Storage."))}m.isMDXComponent=!0}}]);