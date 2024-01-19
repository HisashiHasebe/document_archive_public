"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[2653],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},76052:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"LINE",description:"Setting up for LINE integration."},i=void 0,l={unversionedId:"management/line",id:"management/line",title:"LINE",description:"Setting up for LINE integration.",source:"@site/docs/management/line.md",sourceDirName:"management",slug:"/management/line",permalink:"/docs/management/line",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/management/line.md",tags:[],version:"current",frontMatter:{title:"LINE",description:"Setting up for LINE integration."},sidebar:"documentationSidebar",previous:{title:"WordPress",permalink:"/docs/management/wordpress"}},c={},s=[{value:"Accessing the screen",id:"accessing-the-screen",level:2},{value:"Field descriptions",id:"field-descriptions",level:2},{value:"Related documents",id:"related-documents",level:2}],p={toc:s},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Setting up for LINE integration."),(0,a.kt)("h2",{id:"accessing-the-screen"},"Accessing the screen"),(0,a.kt)("p",null,'Under "SETTINGS", select ',"[External system integration]"," -> ","[LINE]","."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/0bc8cb3788075732e55f496a5e77d4a0.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/0bc8cb3788075732e55f496a5e77d4a0.png",alt:"Image from Gyazo"})),(0,a.kt)("h2",{id:"field-descriptions"},"Field descriptions"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/6ff9b77d38a3b6627fcba4d7761a6d03.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/6ff9b77d38a3b6627fcba4d7761a6d03.png",alt:"Image from Gyazo"})),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Item"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Enable"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Check this box to enable LINE integration.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Channel ID"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Enter the Channel ID obtained from the LINE management screen.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Secret Key"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Enter the secret key generated in the browser.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Assertion Signing Key"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Enter the Assertion Signing Key (kid) obtained from the LINE management screen.")))),(0,a.kt)("h2",{id:"related-documents"},"Related documents"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/tutorials/how-to-connect-to-line/"},"Sending messages to LINE users"))))}d.isMDXComponent=!0}}]);