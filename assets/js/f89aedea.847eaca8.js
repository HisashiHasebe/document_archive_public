"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[82097],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>f});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var l=r.createContext({}),m=function(t){var e=r.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):d(d({},e),t)),a},c=function(t){var e=m(t.components);return r.createElement(l.Provider,{value:e},t.children)},p="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,l=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),p=m(a),g=n,f=p["".concat(l,".").concat(g)]||p[g]||s[g]||o;return a?r.createElement(f,d(d({ref:e},c),{},{components:a})):r.createElement(f,d({ref:e},c))}));function f(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,d=new Array(o);d[0]=g;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i[p]="string"==typeof t?t:n,d[1]=i;for(var m=2;m<o;m++)d[m]=a[m];return r.createElement.apply(null,d)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},19287:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>d,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var r=a(87462),n=(a(67294),a(3905));const o={title:"The WYSIWYG editor"},d=void 0,i={unversionedId:"reference/wysiwyg",id:"reference/wysiwyg",title:"The WYSIWYG editor",description:"\u200bThe WYSIWYG editor in Kuroco contains a handy toolbar that enables users of all skill levels to create and edit content easily. Switch between WYSIWYG editing and HTML editing for greater customization of your content.",source:"@site/docs/reference/wysiwyg.md",sourceDirName:"reference",slug:"/reference/wysiwyg",permalink:"/docs/reference/wysiwyg",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/reference/wysiwyg.md",tags:[],version:"current",frontMatter:{title:"The WYSIWYG editor"},sidebar:"documentationSidebar",previous:{title:"List of extension items available in the content structure",permalink:"/docs/reference/list-of-extra-column-available-on-content"},next:{title:"WYSIWYG custom color settings",permalink:"/docs/reference/wysiwyg-custom-color-settings"}},l={},m=[{value:"Tool icons",id:"tool-icons",level:2},{value:"Customizing the toolbar",id:"customizing-the-toolbar",level:2},{value:"Sample configuration",id:"sample-configuration",level:3},{value:"Specifiable strings for plugin removal",id:"specifiable-strings-for-plugin-removal",level:3},{value:"More Information",id:"more-information",level:2}],c={toc:m},p="wrapper";function s(t){let{components:e,...a}=t;return(0,n.kt)(p,(0,r.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u200bThe WYSIWYG editor in Kuroco contains a handy toolbar that enables users of all skill levels to create and edit content easily. Switch between WYSIWYG editing and HTML editing for greater customization of your content."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/33440fe1bb63e2d14ccb67a8e041892b.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/33440fe1bb63e2d14ccb67a8e041892b.png",alt:"fetched from Gyazo"})),(0,n.kt)("h2",{id:"tool-icons"},"Tool icons"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Icon"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("img",{parentName:"td",src:"https://t.gyazo.com/teams/diverta/547b0026415be1ad63dd3719ba4d9eb4.jpg?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/547b0026415be1ad63dd3719ba4d9eb4.jpg",alt:"fetched from Gyazo"}),(0,n.kt)("br",null),"Source"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Switch between WYSIWYG editing and html editing (i.e., source mode). After editing in source mode, click the icon again to view the layout of your text.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("img",{parentName:"td",src:"https://t.gyazo.com/teams/diverta/b06cfd6ad14623f42983d0a85e4353c3.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/b06cfd6ad14623f42983d0a85e4353c3.png",alt:"Image (fetched from Gyazo)"}),(0,n.kt)("br",null),"Full screen"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Switch between in-line and full-screen modes.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("img",{parentName:"td",src:"https://t.gyazo.com/teams/diverta/9e5b0e806ceb904c1738b585fbb955ec.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/9e5b0e806ceb904c1738b585fbb955ec.png",alt:"Image (fetched from Gyazo)"}),(0,n.kt)("br",null),"Heading"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Select the heading level.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("img",{parentName:"td",src:"https://t.gyazo.com/teams/diverta/6bd418b102ddab3508e927d0c8571198.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/6bd418b102ddab3508e927d0c8571198.png",alt:"Image (fetched from Gyazo)"}),(0,n.kt)("br",null),"Text alignment"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Select the text aligment.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("img",{parentName:"td",src:"https://t.gyazo.com/teams/diverta/471fb7cc8057b2721462fa10b3253fc2.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/471fb7cc8057b2721462fa10b3253fc2.png",alt:"Image (fetched from Gyazo)"}),(0,n.kt)("br",null),"Bold"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Switch between bold (B.png) and regular typeface.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("img",{parentName:"td",src:"https://t.gyazo.com/teams/diverta/4a358b5b7e2e96715cefbde8aa32bb9e.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/4a358b5b7e2e96715cefbde8aa32bb9e.png",alt:"Image (fetched from Gyazo)"}),(0,n.kt)("br",null),"Italic"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Switch between italic (I.png) and regular typeface.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("img",{parentName:"td",src:"https://t.gyazo.com/teams/diverta/78b9908b7dde184f768e593955c8d6a1.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/78b9908b7dde184f768e593955c8d6a1.png",alt:"Image (fetched from Gyazo)"}),(0,n.kt)("br",null),"Underline"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Switch between underlined (U.png) and regular typeface.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("img",{parentName:"td",src:"https://t.gyazo.com/teams/diverta/d7136bac6f4a83d7fedc0adb4426a897.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/d7136bac6f4a83d7fedc0adb4426a897.png",alt:"Image (fetched from Gyazo)"}),(0,n.kt)("br",null),"Insert image or file"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Insert an image or file from Google Cloud Storage. Firebase integration is required to use this feature. (See ",(0,n.kt)("a",{parentName:"td",href:"/docs/tutorials/firebase/"},"Tutorial: Cloud storage integration with Firebase")," for details.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},")"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("img",{parentName:"td",src:"https://t.gyazo.com/teams/diverta/e9971be0355e932d5dee30d908d4d26a.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/e9971be0355e932d5dee30d908d4d26a.png",alt:"fetched from Gyazo"}),(0,n.kt)("br",null),"Insert image"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Insert an image directly from your local drive or through a URL link. Uploaded images will be automatically saved under the 'fiese/user/topoics_img/' directory in KurocoFiles or in the directory specified in 'Resources'.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("img",{parentName:"td",src:"https://t.gyazo.com/teams/diverta/da93f7147cbf9b9956b3f26be00f8005.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/da93f7147cbf9b9956b3f26be00f8005.png",alt:"fetched from Gyazo"}),(0,n.kt)("br",null),"Insert media"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Insert embedded media via URL link.",(0,n.kt)("br",null),(0,n.kt)("img",{parentName:"td",src:"https://t.gyazo.com/teams/diverta/e18bef55a1bcfbaa6eab54fae6283495.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/e18bef55a1bcfbaa6eab54fae6283495.png",alt:"Image (fetched from Gyazo)"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("img",{parentName:"td",src:"https://t.gyazo.com/teams/diverta/d952980c2163a5095d361c79c88908c5.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/d952980c2163a5095d361c79c88908c5.png",alt:"Image (fetched from Gyazo)"}),(0,n.kt)("br",null),"Link"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Insert or edit existing links. Select the anchor text and click the icon to enter the link URL.",(0,n.kt)("img",{parentName:"td",src:"https://t.gyazo.com/teams/diverta/69e08370bffa43f1b1c1184fca547240.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/69e08370bffa43f1b1c1184fca547240.png",alt:"Image from Gyazo"}),(0,n.kt)("br",null),'Enabling "Open in a new tab" sets the ',(0,n.kt)("inlineCode",{parentName:"td"},"target")," attribute to ",(0,n.kt)("inlineCode",{parentName:"td"},'"_blank"'),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("img",{parentName:"td",src:"https://t.gyazo.com/teams/diverta/3ab58abf3a3ed03173ef05b2b0538bc7.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/3ab58abf3a3ed03173ef05b2b0538bc7.png",alt:"Image (fetched from Gyazo)"}),(0,n.kt)("br",null),"Insert table"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Insert a table. Click the icon to select the number of rows and columns. For example:",(0,n.kt)("br",null),(0,n.kt)("img",{parentName:"td",src:"https://t.gyazo.com/teams/diverta/fe4f28ad40de52e152ec21bb2c7975bd.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/fe4f28ad40de52e152ec21bb2c7975bd.png",alt:"Image (fetched from Gyazo)"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("img",{parentName:"td",src:"https://t.gyazo.com/teams/diverta/fc34fc74b0d01e857aac5350ab428d8e.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/fc34fc74b0d01e857aac5350ab428d8e.png",alt:"Image (fetched from Gyazo)"}),(0,n.kt)("br",null),"Font size"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Select the font size.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("img",{parentName:"td",src:"https://t.gyazo.com/teams/diverta/514f8ae01bbacd7482fdd06b4cb78158.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/514f8ae01bbacd7482fdd06b4cb78158.png",alt:"Image (fetched from Gyazo)"}),(0,n.kt)("br",null),"Font color"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Select the text color.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("img",{parentName:"td",src:"https://t.gyazo.com/teams/diverta/8c195675e43d6bad0b64d77aff2cece8.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/8c195675e43d6bad0b64d77aff2cece8.png",alt:"Image (fetched from Gyazo)"}),(0,n.kt)("br",null),"Font background color"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Select the highlighter color of the text.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("img",{parentName:"td",src:"https://t.gyazo.com/teams/diverta/ca13556f1e27711097fbd44dccb132ba.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/ca13556f1e27711097fbd44dccb132ba.png",alt:"Image (fetched from Gyazo)"}),(0,n.kt)("br",null),"Font family"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Select the font.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("img",{parentName:"td",src:"https://t.gyazo.com/teams/diverta/4177acb84ad445d4afe6732c3effa904.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/4177acb84ad445d4afe6732c3effa904.png",alt:"Image (fetched from Gyazo)"}),(0,n.kt)("br",null),"Bulleted list"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Format the selected text into a bulleted list.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("img",{parentName:"td",src:"https://t.gyazo.com/teams/diverta/d998943aea249210da54487e7640828a.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/d998943aea249210da54487e7640828a.png",alt:"Image (fetched from Gyazo)"}),(0,n.kt)("br",null),"Numbered list"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Format the selected text into a numbered list.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("img",{parentName:"td",src:"https://t.gyazo.com/teams/diverta/5ed3834d0237ae930aee6cebdb1d8e38.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/5ed3834d0237ae930aee6cebdb1d8e38.png",alt:"Image (fetched from Gyazo)"}),(0,n.kt)("br",null),"Block quote"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Format the selected text (one or more paragraph(s).png) into a blockquote.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("img",{parentName:"td",src:"https://t.gyazo.com/teams/diverta/78764f70fefa644fa11e3466592646ff.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/78764f70fefa644fa11e3466592646ff.png",alt:"fetched from Gyazo"}),(0,n.kt)("br",null),"Insert code block"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Format the selected text into a code block. Click the dropdown arrow to the right of the icon to select the programming language.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("img",{parentName:"td",src:"https://t.gyazo.com/teams/diverta/92e8b22d947b761bff1fe3994c397a26.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/92e8b22d947b761bff1fe3994c397a26.png",alt:"Image (fetched from Gyazo)"}),(0,n.kt)("br",null),"Undo"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Undo the previous action.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("img",{parentName:"td",src:"https://t.gyazo.com/teams/diverta/19502810ce053dd607f14a89be7a63ef.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/19502810ce053dd607f14a89be7a63ef.png",alt:"Image (fetched from Gyazo)"}),(0,n.kt)("br",null),"Redo"),(0,n.kt)("td",{parentName:"tr",align:"left"},'Reverse the previous "undo" action.')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("img",{parentName:"td",src:"https://t.gyazo.com/teams/diverta/11341ab0b6f37af64867ee3693d8d6ba.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/11341ab0b6f37af64867ee3693d8d6ba.png",alt:"fetched from Gyazo"}),(0,n.kt)("br",null),"Find and replace"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Find all instances of a target string (e.g., text, number, or symbol) and replace it with another string. Click the settings icon to configure case and whole-word matches (see below).",(0,n.kt)("br",null),(0,n.kt)("img",{parentName:"td",src:"https://t.gyazo.com/teams/diverta/ee16e9651b61c592abdfc033e81fd301.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/ee16e9651b61c592abdfc033e81fd301.png",alt:"fetched from Gyazo"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("img",{parentName:"td",src:"https://t.gyazo.com/teams/diverta/60927c2982f24d146604a25b3be3cada.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/60927c2982f24d146604a25b3be3cada.png",alt:"Image from Gyazo"}),(0,n.kt)("br",null),"Templates"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Call up a pre-saved WYSIWYG template.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("img",{parentName:"td",src:"https://t.gyazo.com/teams/diverta/c5776fe89346736e4d450ae9a839bb16.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/c5776fe89346736e4d450ae9a839bb16.png",alt:"Image (fetched from Gyazo)"}),(0,n.kt)("br",null),"Show more items"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Display hidden icons.")))),(0,n.kt)("h2",{id:"customizing-the-toolbar"},"Customizing the toolbar"),(0,n.kt)("p",null,"You can customize the icons displayed when configuring the WYSIWYG editor as an additional field. For more details, see ",(0,n.kt)("a",{parentName:"p",href:"/docs/management/content-structure-topics-group/#additional-fields"},"User guide: Content structure editor - Additional fields"),"."),(0,n.kt)("p",null,"Available configuration options include"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Width"),(0,n.kt)("li",{parentName:"ul"},"Height"),(0,n.kt)("li",{parentName:"ul"},"Custom Color"),(0,n.kt)("li",{parentName:"ul"},"Color Palette Size"),(0,n.kt)("li",{parentName:"ul"},"Remove Icons  ")),(0,n.kt)("h3",{id:"sample-configuration"},"Sample configuration"),(0,n.kt)("p",null,'In the content structure editor, under "Field settings" for WYSIWYG, enter the following:'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"width::800\nremovePlugins::heading, bold, italic, underline\n")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/2ddcb0d879f3c1fc0a2258a7bb8fddb5.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/2ddcb0d879f3c1fc0a2258a7bb8fddb5.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"You should see the field below in the corresponding content editor:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/e3e84d528d5ec59ec60bfc42e2c3b980.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/e3e84d528d5ec59ec60bfc42e2c3b980.png",alt:"Image (fetched from Gyazo)"})),(0,n.kt)("h3",{id:"specifiable-strings-for-plugin-removal"},"Specifiable strings for plugin removal"),(0,n.kt)("p",null,"In the content structure editor, click ","[Settings]",' in the respective "Field settings" entry to open the settings dialog. Here, you can remove unwanted icons from the toolbar by entering them as a comma-separated string in the "Delete plugin" field.'),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/8b991eb78d48bc1e0823832a85125179.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/8b991eb78d48bc1e0823832a85125179.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"The specifiable icons and their corresponding strings are as follows:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Icon"),(0,n.kt)("th",{parentName:"tr",align:"left"},"String"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Source"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"\tSourceEditing\t"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"FullScreen"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"\tfullScreen\t"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Heading"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"\theading\t"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Text alignment"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"\talignment\t"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Bold"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"\tbold\t"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Italic"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"\titalic\t"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Underline"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"\tunderline\t"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Insert image or folder"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"\tckfinder\t"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Insert image"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"\tinsertImage\t"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Insert media"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"\tmediaEmbed\t"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Link"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"\tlink\t"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Insert table"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"\tinsertTable\t"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Font Size"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"\tfontSize\t"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Font Color"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"\tfontColor\t"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Font Background Color"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"\tfontBackgroundColor\t"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Font Family"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"\tfontFamily\t"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Bulleted List"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"\tbulletedList\t"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Numbered List"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"\tnumberedList\t"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Block quote"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"\tblockQuote\t"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Insert code block"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"\tcodeBlock\t"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Undo"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"\tundo\t"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Redo"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"\tredo\t"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Find and replace"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"\tfindAndReplace\t"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Templates"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"templates"))))),(0,n.kt)("h2",{id:"more-information"},"More Information"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/reference/wysiwyg-custom-color-settings/"},"WYSIWYG custom color settings")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/faq/how-to-auto-convert-iframes/"},"How do I auto-convert iframes with Kuroco?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/faq/can-i-prevent-sources-entered-into-the-wysiwyg-editor-from-being-automatically-converted/"},"Can I prevent sources entered into the WYSIWYG editor from being automatically converted?"))))}s.isMDXComponent=!0}}]);