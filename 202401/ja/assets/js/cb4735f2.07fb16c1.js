"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[70632],{3905:(t,e,a)=>{a.d(e,{Zo:()=>i,kt:()=>s});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),o=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):d(d({},e),t)),a},i=function(t){var e=o(t.components);return r.createElement(p.Provider,{value:e},t.children)},c="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,i=m(t,["components","mdxType","originalType","parentName"]),c=o(a),f=n,s=c["".concat(p,".").concat(f)]||c[f]||g[f]||l;return a?r.createElement(s,d(d({ref:e},i),{},{components:a})):r.createElement(s,d({ref:e},i))}));function s(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,d=new Array(l);d[0]=f;var m={};for(var p in e)hasOwnProperty.call(e,p)&&(m[p]=e[p]);m.originalType=t,m[c]="string"==typeof t?t:n,d[1]=m;for(var o=2;o<l;o++)d[o]=a[o];return r.createElement.apply(null,d)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},21159:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>d,default:()=>g,frontMatter:()=>l,metadata:()=>m,toc:()=>o});var r=a(87462),n=(a(67294),a(3905));const l={title:"SAML IdP",category:"\u30ad\u30e3\u30f3\u30da\u30fc\u30f3",weight:1},d=void 0,m={unversionedId:"management/sso-saml-idp",id:"management/sso-saml-idp",title:"SAML IdP",description:"SAML IdP\u3067\u306f\u30b5\u30a4\u30c8\u306b\u767b\u9332\u3055\u308c\u305fIDP\u8a2d\u5b9a\u306e\u4e00\u89a7\u306e\u78ba\u8a8d\u30fb\u8ffd\u52a0\u30fb\u66f4\u65b0\u304c\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/management/sso-saml-idp.md",sourceDirName:"management",slug:"/management/sso-saml-idp",permalink:"/ja/docs/management/sso-saml-idp",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/management/sso-saml-idp.md",tags:[],version:"current",frontMatter:{title:"SAML IdP",category:"\u30ad\u30e3\u30f3\u30da\u30fc\u30f3",weight:1},sidebar:"documentationSidebar",previous:{title:"WYSIWYG\u5c02\u7528\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8",permalink:"/ja/docs/management/wysiwygtemplate"},next:{title:"SAML SP",permalink:"/ja/docs/management/sso-saml-sp"}},p={},o=[{value:"SAML IdP\u4e00\u89a7",id:"saml-idp\u4e00\u89a7",level:2},{value:"\u78ba\u8a8d\u65b9\u6cd5",id:"\u78ba\u8a8d\u65b9\u6cd5",level:3},{value:"\u9805\u76ee\u8aac\u660e",id:"\u9805\u76ee\u8aac\u660e",level:3},{value:"SAML IdP\u306e\u7de8\u96c6",id:"saml-idp\u306e\u7de8\u96c6",level:2},{value:"\u7de8\u96c6\u65b9\u6cd5",id:"\u7de8\u96c6\u65b9\u6cd5",level:3},{value:"\u9805\u76ee\u8aac\u660e",id:"\u9805\u76ee\u8aac\u660e-1",level:3},{value:"SAML IdP\u7de8\u96c6",id:"saml-idp\u7de8\u96c6",level:4},{value:"\u8a73\u7d30\u8a2d\u5b9a",id:"\u8a73\u7d30\u8a2d\u5b9a",level:4},{value:"\u5404\u30dc\u30bf\u30f3",id:"\u5404\u30dc\u30bf\u30f3",level:4},{value:"\u88dc\u8db3",id:"\u88dc\u8db3",level:2},{value:"AWS Cognito",id:"aws-cognito",level:3}],i={toc:o},c="wrapper";function g(t){let{components:e,...a}=t;return(0,n.kt)(c,(0,r.Z)({},i,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"SAML IdP\u3067\u306f\u30b5\u30a4\u30c8\u306b\u767b\u9332\u3055\u308c\u305fIDP\u8a2d\u5b9a\u306e\u4e00\u89a7\u306e\u78ba\u8a8d\u30fb\u8ffd\u52a0\u30fb\u66f4\u65b0\u304c\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("h2",{id:"saml-idp\u4e00\u89a7"},"SAML IdP\u4e00\u89a7"),(0,n.kt)("h3",{id:"\u78ba\u8a8d\u65b9\u6cd5"},"\u78ba\u8a8d\u65b9\u6cd5"),(0,n.kt)("p",null,"[\u5916\u90e8\u30b7\u30b9\u30c6\u30e0\u9023\u643a]"," -> ","[SAML IdP]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/b07be516764ff4e80fc7039756412154.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/b07be516764ff4e80fc7039756412154.png",alt:"Image from Gyazo"})),(0,n.kt)("h3",{id:"\u9805\u76ee\u8aac\u660e"},"\u9805\u76ee\u8aac\u660e"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/25b4a42344fc174a6f9865cee3cddbdc.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/25b4a42344fc174a6f9865cee3cddbdc.png",alt:"Image from Gyazo"})),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u9805\u76ee"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u3000\u8aac\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6709\u52b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"IDP\u306e\u6709\u52b9\u72b6\u614b\u3092\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002",(0,n.kt)("br",null),(0,n.kt)("img",{parentName:"td",src:"https://t.gyazo.com/teams/diverta/4b30584bb33c116421c1795f6bd0ceef.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/4b30584bb33c116421c1795f6bd0ceef.png",alt:"Image (fetched from Gyazo)"}),"\uff1a\u6709\u52b9",(0,n.kt)("br",null),(0,n.kt)("img",{parentName:"td",src:"https://t.gyazo.com/teams/diverta/9527261cd42b8bba3cb67821e783fa04.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/9527261cd42b8bba3cb67821e783fa04.png",alt:"Image (fetched from Gyazo)"}),"\uff1a\u7121\u52b9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30ed\u30b0\u30a4\u30f3SAML IdP Name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"IDP\u306e\u540d\u524d\u3092\u8868\u793a\u3057\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3ID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SAML\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3ID\u3092\u8868\u793a\u3057\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6709\u52b9\u671f\u9593"),(0,n.kt)("td",{parentName:"tr",align:"left"},"IDP\u306e\u6709\u52b9\u671f\u9650\u3092\u8868\u793a\u3057\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u66f4\u65b0\u65e5\u6642"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6700\u7d42\u66f4\u65b0\u65e5\u6642\u3092\u8868\u793a\u3057\u307e\u3059\u3002")))),(0,n.kt)("h2",{id:"saml-idp\u306e\u7de8\u96c6"},"SAML IdP\u306e\u7de8\u96c6"),(0,n.kt)("h3",{id:"\u7de8\u96c6\u65b9\u6cd5"},"\u7de8\u96c6\u65b9\u6cd5"),(0,n.kt)("p",null,"[\u5916\u90e8\u30b7\u30b9\u30c6\u30e0\u9023\u643a]"," -> ","[SAML IdP]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/b07be516764ff4e80fc7039756412154.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/b07be516764ff4e80fc7039756412154.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"SAML IdP\u4e00\u89a7\u30da\u30fc\u30b8\u304b\u3089\u7de8\u96c6\u3092\u3057\u305f\u3044IDP\u8a2d\u5b9a\u306e","[\u30ed\u30b0\u30a4\u30f3SAML IdP Name]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/5b32f003b86bc099f0f4843a238f225c.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/5b32f003b86bc099f0f4843a238f225c.png",alt:"Image from Gyazo"})),(0,n.kt)("h3",{id:"\u9805\u76ee\u8aac\u660e-1"},"\u9805\u76ee\u8aac\u660e"),(0,n.kt)("h4",{id:"saml-idp\u7de8\u96c6"},"SAML IdP\u7de8\u96c6"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/809d1b4d5eed575e7be722df08e7f8f3.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/809d1b4d5eed575e7be722df08e7f8f3.png",alt:"Image from Gyazo"})),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u9805\u76ee"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8aac\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30ed\u30b0\u30a4\u30f3 SAML IdP Name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"IDP\u306e\u540d\u524d\u3092\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30ed\u30b0\u30a4\u30f3 SAML IdP URI"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SP\u304b\u3089\u306e\u8a8d\u8a3c\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u53d7\u3051\u4ed8\u3051\u308bURL\u3002IDP\u306e\u30e1\u30bf\u30c7\u30fc\u30bf\u3068\u3057\u3066\u8868\u793a\u3055\u308c\u3001IDP URL\u3068\u3057\u3066\u3001SP\u5074\u3067\u624b\u52d5\u3067\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3ID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3ID\u3092\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6697\u53f7\u5316\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30c7\u30fc\u30bf\u3092\u6697\u53f7\u5316\u3059\u308b\u305f\u3081\u306e\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u3092\u9078\u629e\u3057\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6709\u52b9\u671f\u9593"),(0,n.kt)("td",{parentName:"tr",align:"left"},"IDP\u306e\u6709\u52b9\u671f\u9593\u3092\u5165\u529b\u3057\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Name ID\u30d5\u30a9\u30fc\u30de\u30c3\u30c8"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Name ID\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u9078\u629e\u3067\u304d\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30ed\u30b0\u30a4\u30f3ID\u3092\u4f7f\u7528"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30c1\u30a7\u30c3\u30af\u3092\u5165\u308c\u308b\u3068\u30ed\u30b0\u30a4\u30f3ID\u3092\u4f7f\u7528\u3057\u3066\u9023\u643a\u304c\u53ef\u80fd\u306b\u306a\u308a\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8a3c\u660e\u66f8"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30c7\u30fc\u30bf\u3092\u6697\u53f7\u5316\u3059\u308b\u305f\u3081\u306e\u8a3c\u660e\u66f8\u30d5\u30a1\u30a4\u30eb\u3068\u8a3c\u660e\u66f8\u30ad\u30fc\u306e\u30bb\u30c3\u30c8\u3002\u81ea\u52d5\u751f\u6210\u3082\u53ef\u80fd\u3067\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"SP\u30e1\u30bf\u30c7\u30fc\u30bf\u30d5\u30a1\u30a4\u30eb"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SP\u306eXML\u30e1\u30bf\u30c7\u30fc\u30bf\u30d5\u30a1\u30a4\u30eb\u3067\u3059\u3002",(0,n.kt)("br",null)," \u30d5\u30a1\u30a4\u30eb\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\u4ee3\u308f\u308a\u306b\u3001","[\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u304c\u3042\u308a\u307e\u305b\u3093\u304b\uff1f\u3053\u3061\u3089\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u304f\u3060\u3055\u3044\u3002]"," \u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3053\u3068\u3067\u30c6\u30ad\u30b9\u30c8\u5f62\u5f0f\u3067\u5fc5\u8981\u306aSP\u30c7\u30fc\u30bf\u3092\u624b\u5165\u529b\u3059\u308b\u3053\u3068\u3082\u53ef\u80fd\u3067\u3059\u3002",(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"\u65b0\u898fIDP\u3092\u4f5c\u6210\u6642\u306b\u7a7a\u767d\u306e\u307e\u307e\u306b\u3082\u3067\u304d\u307e\u3059\u304c\u3001\u305d\u306e\u5834\u5408\u306fIDP\u306f\u6709\u52b9\u306b\u3057\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5c5e\u6027\u30de\u30c3\u30d4\u30f3\u30b0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SAML\u5c5e\u6027\u3068\u3057\u3066\u3001\u30e6\u30fc\u30b6\u30fc\u3092\u533a\u5225\u3059\u308b\u305f\u3081\u306e\u30e6\u30fc\u30b6\u30fc\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u30de\u30c3\u30d4\u30f3\u30b0\u3067\u304d\u307e\u3059\u3002SAML\u8a8d\u8a3c\u3092\u6a5f\u80fd\u3055\u305b\u308b\u306b\u306f\u5c11\u306a\u304f\u3068\u3082\u4e00\u3064\u306e\u8b58\u5225\u5b50\u304c\u5fc5\u8981\u3067\u3059\u3002")))),(0,n.kt)("h4",{id:"\u8a73\u7d30\u8a2d\u5b9a"},"\u8a73\u7d30\u8a2d\u5b9a"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/d8f0d9ab771fcaaa1543fb1acc3ab8c1.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/d8f0d9ab771fcaaa1543fb1acc3ab8c1.png",alt:"Image from Gyazo"})),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u9805\u76ee"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8aac\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30ed\u30b0\u30a4\u30f3URL"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30ed\u30b0\u30a4\u30f3\u30da\u30fc\u30b8\u306eURL\u3092\u5165\u529b\u3057\u307e\u3059\u3002\u7a7a\u6b04\u306e\u5834\u5408\u3001\u30e6\u30fc\u30b6\u30fc\u306f\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30c9\u30e1\u30a4\u30f3\u306e\u30c8\u30c3\u30d7\u306b\u30ea\u30c0\u30a4\u30ec\u30af\u30c8\u3055\u308c\u307e\u3059\u3002\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30c9\u30e1\u30a4\u30f3\u306f",(0,n.kt)("a",{parentName:"td",href:"/ja/docs/management/account/#%E3%82%A2%E3%82%AB%E3%82%A6%E3%83%B3%E3%83%88%E8%A8%AD%E5%AE%9A%E3%81%AE%E9%A0%85%E7%9B%AE%E8%AA%AC%E6%98%8E"},"\u74b0\u5883 > \u30a2\u30ab\u30a6\u30f3\u30c8\u8a2d\u5b9a"),"\u3067\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002\u3053\u306e\u76ee\u7684\u306f\u3001\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u306e\u30ed\u30b8\u30c3\u30af\u304c\u30ed\u30b0\u30a4\u30f3\u6a5f\u80fd\u3092\u51e6\u7406\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u3053\u3068\u3067\u3059\u3002",(0,n.kt)("br",null),"\u203b\u7ba1\u7406\u753b\u9762\u306e\u30ed\u30b0\u30a4\u30f3\u3092\u4f7f\u7528\u3057\u3066\u30ea\u30c0\u30a4\u30ec\u30af\u30c8\u3057\u305f\u3044\u5834\u5408\u306f\u3001URL\u3092\u6b21\u306e\u3088\u3046\u306b\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002",(0,n.kt)("br",null)," ",(0,n.kt)("inlineCode",{parentName:"td"},"https://(site-key).g.kuroco-mng.app/management/login/login/?Return_URL=/direct/login/saml_idp_auth/?idpid=(IdP-ID)"),(0,n.kt)("br",null),"\u3000IdP ID\u306f\u69cb\u6210\u3057\u3066\u3044\u308bIdP ID\u306b\u7f6e\u304d\u63db\u3048\u3066\u304f\u3060\u3055\u3044")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"IDP\u8d77\u70b9\u30d5\u30ed\u30fc\u3092\u8a31\u53ef"),(0,n.kt)("td",{parentName:"tr",align:"left"},"IDP\u8d77\u70b9\u30d5\u30ed\u30fc\u3092\u8a31\u53ef\u3059\u308b\u5834\u5408\u306f\u30c1\u30a7\u30c3\u30af\u3092\u5165\u308c\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Binding Method"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Binding Method\u3092\u9078\u629e\u3057\u307e\u3059\u3002")))),(0,n.kt)("h4",{id:"\u5404\u30dc\u30bf\u30f3"},"\u5404\u30dc\u30bf\u30f3"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/095e200ac2a82dcf561ddcceb5c36ed8.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/095e200ac2a82dcf561ddcceb5c36ed8.png",alt:"Image from Gyazo"})),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u9805\u76ee"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8aac\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u66f4\u65b0\u3059\u308b"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8a2d\u5b9a\u5185\u5bb9\u3092\u4fdd\u5b58\u3057\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30e1\u30bf\u30c7\u30fc\u30bf\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8868\u793a\u3057\u3066\u3044\u308bIDP\u306e\u30e1\u30bf\u30c7\u30fc\u30bf\u3092SAML2\u898f\u6e96\u306b\u5247\u3063\u305fXML\u5f62\u5f0f\u3067\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u524a\u9664\u3059\u308b"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8868\u793a\u3057\u3066\u3044\u308bIDP\u8a2d\u5b9a\u3092\u524a\u9664\u3057\u307e\u3059\u3002")))),(0,n.kt)("h2",{id:"\u88dc\u8db3"},"\u88dc\u8db3"),(0,n.kt)("h3",{id:"aws-cognito"},"AWS Cognito"),(0,n.kt)("p",null,"AWS Cognito\u3067\u306f\u3001\u8a2d\u5b9a\u304c2\u3064\u306e\u90e8\u5206\u306b\u5206\u304b\u308c\u3066\u3044\u307e\u3059\u3002\u8a2d\u5b9a\u30d0\u30a4\u30f3\u30c7\u30a3\u30f3\u30b0\u3068\u5b9f\u969b\u306e\u30d0\u30a4\u30f3\u30c7\u30a3\u30f3\u30b0\u3067\u3059\u3002AWS\u306f\u8a2d\u5b9a\u4e2d\u306b\u30c1\u30a7\u30c3\u30af\u3092\u5b9f\u884c\u3057\u3001\u305d\u308c\u3089\u306e\u30c1\u30a7\u30c3\u30af\u304c\u901a\u904e\u3057\u305f\u5834\u5408\u306e\u307fCognito\u306fSAML SSO\u30e1\u30bf\u30c7\u30fc\u30bf\u306e\u4fdd\u5b58\u3092\u8a31\u53ef\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u8a2d\u5b9a\u306e\u4e00\u90e8\u3067\u306f\u3001AWS\u306fIdP XML\u3092\u89e3\u6790\u3057\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u3001\u69cb\u6210\u6642\u306b\u306f\u30d0\u30a4\u30f3\u30c7\u30a3\u30f3\u30b0\u30e1\u30bd\u30c3\u30c9\u3092\u300cREDIRECT\u300d\u306b\u8a2d\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u30d0\u30a4\u30f3\u30c7\u30a3\u30f3\u30b0\u30e1\u30bd\u30c3\u30c9\u306f\u300c\u8a73\u7d30\u8a2d\u5b9a\u300d\u306b\u3042\u308a\u307e\u3059\u3002\n",(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/2212bcdcf566ba7ad9374afa847bdeca.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/2212bcdcf566ba7ad9374afa847bdeca.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"AWS\u5074\u3067XML\u304c\u66f4\u65b0\u3055\u308c\u305f\u3089\u3001\u305d\u306e\u5f8c\u3067\u30d0\u30a4\u30f3\u30c7\u30a3\u30f3\u30b0\u30e1\u30bd\u30c3\u30c9\u3092\u300cPOST\u300d\u306b\u5909\u66f4\u3059\u308b\u3068SSO\u304c\u6a5f\u80fd\u3057\u307e\u3059\u3002"))}g.isMDXComponent=!0}}]);