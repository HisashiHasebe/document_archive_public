"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[74168],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>y});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),u=n,y=d["".concat(s,".").concat(u)]||d[u]||m[u]||r;return a?o.createElement(y,i(i({ref:t},p),{},{components:a})):o.createElement(y,i({ref:t},p))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},18370:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=a(87462),n=(a(67294),a(3905));const r={title:"Applying Custom CSS to the Kuroco Admin Panel WYSIWYG Editor",description:"Learn how to apply custom CSS to the WYSIWYG editor in the Kuroco admin panel."},i=void 0,l={unversionedId:"tutorials/apply-css-to-a-kuroco-management-screen-wysiwyg-editor",id:"tutorials/apply-css-to-a-kuroco-management-screen-wysiwyg-editor",title:"Applying Custom CSS to the Kuroco Admin Panel WYSIWYG Editor",description:"Learn how to apply custom CSS to the WYSIWYG editor in the Kuroco admin panel.",source:"@site/docs/tutorials/apply-css-to-a-kuroco-management-screen-wysiwyg-editor.md",sourceDirName:"tutorials",slug:"/tutorials/apply-css-to-a-kuroco-management-screen-wysiwyg-editor",permalink:"/docs/tutorials/apply-css-to-a-kuroco-management-screen-wysiwyg-editor",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/tutorials/apply-css-to-a-kuroco-management-screen-wysiwyg-editor.md",tags:[],version:"current",frontMatter:{title:"Applying Custom CSS to the Kuroco Admin Panel WYSIWYG Editor",description:"Learn how to apply custom CSS to the WYSIWYG editor in the Kuroco admin panel."},sidebar:"documentationSidebar",previous:{title:"How to use CKEditor Placeholder feature with API and Custom Function",permalink:"/docs/tutorials/how-to-use-ckeditor-placeholder-feature"},next:{title:"How to Call Saved HTML in Wysiwyg Editor",permalink:"/docs/tutorials/reuse-the-previously-saved-html-using-a-wysiwyg-editor"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"What You&#39;ll Learn",id:"what-youll-learn",level:3},{value:"Writing HTML in the WYSIWYG Editor",id:"writing-html-in-the-wysiwyg-editor",level:2},{value:"Creating a CSS File",id:"creating-a-css-file",level:2},{value:"Applying CSS to the Editor",id:"applying-css-to-the-editor",level:2},{value:"For the main WYSIWYG content",id:"for-the-main-wysiwyg-content",level:3},{value:"For additional WYSIWYG fields",id:"for-additional-wysiwyg-fields",level:3},{value:"Verifying the applied CSS styles",id:"verifying-the-applied-css-styles",level:2}],p={toc:c},d="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"By loading a CSS file into the WYSIWYG editor of the Kuroco admin panel, you can apply custom CSS to the content."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/019312455091c08b9bab9f811ee20a7f.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/019312455091c08b9bab9f811ee20a7f.png",alt:"Image from Gyazo"})),(0,n.kt)("h3",{id:"what-youll-learn"},"What You'll Learn"),(0,n.kt)("p",null,"You will learn how to apply custom CSS to the WYSIWYG editor by following these steps:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#writing-html-in-the-wysiwyg-editor"},"Writing HTML in the WYSIWYG Editor")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#creating-a-css-file"},"Creating a CSS File")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#applying-css-to-the-editor"},"Applying CSS to the Editor")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#verifying-the-applied-css-styles"},"Verifying the applied CSS styles"))),(0,n.kt)("h2",{id:"writing-html-in-the-wysiwyg-editor"},"Writing HTML in the WYSIWYG Editor"),(0,n.kt)("p",null,"Write HTML in the source mode of the WYSIWYG editor. At this stage, the HTML will be displayed as normal hyperlink text."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/0e8ac9d444253aeb1cfeef2adb11dd7a.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/0e8ac9d444253aeb1cfeef2adb11dd7a.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/d8bfb5b72b3496a048a761cf2850eeff.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/d8bfb5b72b3496a048a761cf2850eeff.png",alt:"Image from Gyazo"})),(0,n.kt)("h2",{id:"creating-a-css-file"},"Creating a CSS File"),(0,n.kt)("p",null,"Create a CSS file named ",(0,n.kt)("inlineCode",{parentName:"p"},"content-styles.css"),". You can choose any name for the file, but make sure to prefix the CSS selectors with ",(0,n.kt)("inlineCode",{parentName:"p"},".ck-content"),"."),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("p",{parentName:"admonition"},'If the CSS selector does not start with ".ck-content", it may potentially affect the display of the Kuroco admin panel.',(0,n.kt)("br",{parentName:"p"}),"\n",'Make sure to include ".ck-content" in the CSS applied to the WYSIWYG editor.',(0,n.kt)("br",{parentName:"p"}),"\n","Reference: ",(0,n.kt)("a",{parentName:"p",href:"https://ckeditor.com/docs/ckeditor5/latest/installation/advanced/content-styles.html"},"CKEditor - Content styles"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css"},".ck-content .style-button {\n    padding: 8px 16px;\n    border-radius: 8px;\n    background-color: #2C7BE5;\n    color: #fff;\n    text-decoration: none;\n  }\n}\n")),(0,n.kt)("p",null,"Create a folder named ",(0,n.kt)("inlineCode",{parentName:"p"},"/styles/wysiwyg/")," and upload the CSS file into it."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/050b88729300ec8124ec88e158c3a022.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/050b88729300ec8124ec88e158c3a022.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/a977e498cff6eaa56acaa6dc1dea4dc8.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/a977e498cff6eaa56acaa6dc1dea4dc8.png",alt:"Image from Gyazo"})),(0,n.kt)("h2",{id:"applying-css-to-the-editor"},"Applying CSS to the Editor"),(0,n.kt)("h3",{id:"for-the-main-wysiwyg-content"},"For the main WYSIWYG content"),(0,n.kt)("p",null,"Go to the content structure editor page that contains the WYSIWYG editor where you want to load the CSS.",(0,n.kt)("br",{parentName:"p"}),"\n","If you want to load it for the main content WYSIWYG, enter ",(0,n.kt)("inlineCode",{parentName:"p"},"custom_css::/files/user/styles/wysiwyg/content-styles.css"),' in the "wysiwyg_options" field under "Content input method".'),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/a1a59179d1698119c6829fea5b991d1f.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/a1a59179d1698119c6829fea5b991d1f.png",alt:"Image from Gyazo"})),(0,n.kt)("h3",{id:"for-additional-wysiwyg-fields"},"For additional WYSIWYG fields"),(0,n.kt)("p",null,"If you want to load the CSS for an additional WYSIWYG editor, enter ",(0,n.kt)("inlineCode",{parentName:"p"},"/files/user/styles/wysiwyg/content-styles.css"),' in the "Custom CSS" field under "Settings".'),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/29855b437ea22a0f213126371801b20b.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/29855b437ea22a0f213126371801b20b.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/3e3070bb58948ee209f1daab1fb5a443.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/3e3070bb58948ee209f1daab1fb5a443.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,'Click on "Save" and the settings field will display ',(0,n.kt)("inlineCode",{parentName:"p"},"custom_css::/files/user/styles/wysiwyg/content-styles.css"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/c16cec1ccd9fee77bd341f086e0b198d.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/c16cec1ccd9fee77bd341f086e0b198d.png",alt:"Image from Gyazo"})),(0,n.kt)("h2",{id:"verifying-the-applied-css-styles"},"Verifying the applied CSS styles"),(0,n.kt)("p",null,"Go back to the WYSIWYG editor and enter the same HTML code as before in the source mode. Switch from source mode to normal mode, and you will see that the styles applied to the button is working."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/0e8ac9d444253aeb1cfeef2adb11dd7a.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/0e8ac9d444253aeb1cfeef2adb11dd7a.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/019312455091c08b9bab9f811ee20a7f.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/019312455091c08b9bab9f811ee20a7f.png",alt:"Image from Gyazo"})))}m.isMDXComponent=!0}}]);