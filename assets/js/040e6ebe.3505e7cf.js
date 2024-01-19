"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[93205],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),p=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return a?r.createElement(f,i(i({ref:t},l),{},{components:a})):r.createElement(f,i({ref:t},l))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},54590:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={title:"Scheduled generation of screenshot PDFs of external sites",description:"By using the generate_pdf plugin, you can capture the screen of the specified URL and save it in PDF or image format. This time, as an example, we create a batch process that captures the specified external site once a day, converts it to PDF, and saves it in Kuroco."},i=void 0,s={unversionedId:"tutorials/how-to-use-generate-pdf",id:"tutorials/how-to-use-generate-pdf",title:"Scheduled generation of screenshot PDFs of external sites",description:"By using the generate_pdf plugin, you can capture the screen of the specified URL and save it in PDF or image format. This time, as an example, we create a batch process that captures the specified external site once a day, converts it to PDF, and saves it in Kuroco.",source:"@site/docs/tutorials/how-to-use-generate-pdf.md",sourceDirName:"tutorials",slug:"/tutorials/how-to-use-generate-pdf",permalink:"/docs/tutorials/how-to-use-generate-pdf",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/tutorials/how-to-use-generate-pdf.md",tags:[],version:"current",frontMatter:{title:"Scheduled generation of screenshot PDFs of external sites",description:"By using the generate_pdf plugin, you can capture the screen of the specified URL and save it in PDF or image format. This time, as an example, we create a batch process that captures the specified external site once a day, converts it to PDF, and saves it in Kuroco."},sidebar:"documentationSidebar",previous:{title:"How to use batch process in Kuroco",permalink:"/docs/tutorials/how-to-use-batch"},next:{title:"Generate thumbnail image from the first page of a PDF using Batch Processs",permalink:"/docs/tutorials/how-to-make-thumb-from-pdf"}},c={},p=[{value:"Overview",id:"overview",level:2},{value:"Before you start",id:"before-you-start",level:2},{value:"Batch process creation",id:"batch-process-creation",level:2},{value:"Batch process verification",id:"batch-process-verification",level:2},{value:"Related Documents",id:"related-documents",level:2}],l={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"generate_pdf")," plugin allows you to capture the screen of a specified URL and save the output as a PDF or an image.\nYou can call it anywhere Smarty syntax is allowed, such as in Custom function or Batch processing."),(0,n.kt)("p",null,"In this tutorial, we will create a batch process that takes a daily screenshot of an external site and saves it as a PDF in Kuroco."),(0,n.kt)("h2",{id:"before-you-start"},"Before you start"),(0,n.kt)("p",null,"To use the plugin, you need to first integrate Firebase into your Kuroco admin panel.",(0,n.kt)("br",{parentName:"p"}),"\n","For a detailed guide on how to perform this integration, see ",(0,n.kt)("a",{parentName:"p",href:"/docs/tutorials/firebase/"},"Tutorial: Cloud storage integration with Firebase"),"."),(0,n.kt)("h2",{id:"batch-process-creation"},"Batch process creation"),(0,n.kt)("p",null,"In the sidebar menu, select ","[Operation]"," -> ","[Batch process]","."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/3c7b3e6743651e9cefc31543fafcc7bc.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/3c7b3e6743651e9cefc31543fafcc7bc.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"Click ","[Add]"," in the upper right corner."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/c3b880c1e744af6f0454a5de4866aff5.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/c3b880c1e744af6f0454a5de4866aff5.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"Create a batch process with the following settings:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Title"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Daily screenshot taker"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Identifier"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"daily_capture"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Batch"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Every day, 00:00")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Process"),(0,n.kt)("td",{parentName:"tr",align:"left"},"(Paste the code below into this field.)")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-smarty"},"{assign var=date value=$smarty.now|date_format:'%Y%m%d'}\n{assign var=path value='files/g/private/sample_'|cat:$date|cat:'.pdf'}\n{generate_pdf url='https://www.diverta.co.jp' path=$path}\n")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/2c9e13f1267623bb81c276b7abb0d8eb.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/2c9e13f1267623bb81c276b7abb0d8eb.png",alt:"Image from Gyazo"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/269df66a0e3474af4f35ed70c03caca8.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/269df66a0e3474af4f35ed70c03caca8.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"Click ","[Add]"," to save the process."),(0,n.kt)("h2",{id:"batch-process-verification"},"Batch process verification"),(0,n.kt)("p",null,"In this example, the batch process will run at midnight every day, and the output PDF will be saved in KurocoFiles.   "),(0,n.kt)("p",null,"Alternatively, you can click ","[Run now]"," next to the process title to run it immediately.  "),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/961c60355b001781a1c0f418905a604a.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/961c60355b001781a1c0f418905a604a.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"You should see a success message at the top of the screen."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/007d81abe37602afc48be2b77dbb6be2.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/007d81abe37602afc48be2b77dbb6be2.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"Next, check if the output file has been saved correctly."),(0,n.kt)("p",null,"Click ","[File manager]"," in the side menu.  "),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/6286d2fb8ad092ec447a8fc0d5e51466.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/6286d2fb8ad092ec447a8fc0d5e51466.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"The file should appear in the GCS(Private) folder."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/5f164ed284c9e6985c6b4ffd7c721f68.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/5f164ed284c9e6985c6b4ffd7c721f68.png",alt:"Image from Gyazo"})),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"It may take up to several minutes for the file to be generated.")),(0,n.kt)("h2",{id:"related-documents"},"Related Documents"),(0,n.kt)("p",null,"For more details about ",(0,n.kt)("inlineCode",{parentName:"p"},"generate_pdf"),", please refer to ",(0,n.kt)("a",{parentName:"p",href:"/docs/reference/smarty-plugin/#generate_pdf"},"Smarty Plugin -> generate_pdf"),"."))}u.isMDXComponent=!0}}]);