"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[93270],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=c(a),u=n,f=m["".concat(l,".").concat(u)]||m[u]||s[u]||i;return a?r.createElement(f,o(o({ref:t},d),{},{components:a})):r.createElement(f,o({ref:t},d))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:n,o[1]=p;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},13765:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const i={title:"API\u3092\u4f7f\u3063\u305f\u30d5\u30a1\u30a4\u30eb\u306e\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u306b\u3064\u3044\u3066",category:"API",description:"\u30b3\u30f3\u30c6\u30f3\u30c4\u3001\u30d5\u30a9\u30fc\u30e0\u3001\u30e1\u30f3\u30d0\u30fc\u306a\u3069\u306bAPI\u3092\u5229\u7528\u3057\u3066\u30d5\u30a1\u30a4\u30eb\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\u5834\u5408\u3001Files::upload\u306e\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u5229\u7528\u3057\u3066\u3001\u30d5\u30a1\u30a4\u30eb\u3092Kuroco\u306e\u4eee\u9818\u57df\u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u3001\u5fdc\u7b54\u3068\u3057\u3066\u8fd4\u3055\u308c\u308bfile_id\u3092\u5404\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306bPOST\u3057\u3066\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u66f4\u65b0\u3057\u307e\u3059\u3002"},o=void 0,p={unversionedId:"reference/uploading-files-using-the-api",id:"reference/uploading-files-using-the-api",title:"API\u3092\u4f7f\u3063\u305f\u30d5\u30a1\u30a4\u30eb\u306e\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u306b\u3064\u3044\u3066",description:"\u30b3\u30f3\u30c6\u30f3\u30c4\u3001\u30d5\u30a9\u30fc\u30e0\u3001\u30e1\u30f3\u30d0\u30fc\u306a\u3069\u306bAPI\u3092\u5229\u7528\u3057\u3066\u30d5\u30a1\u30a4\u30eb\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\u5834\u5408\u3001Files::upload\u306e\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u5229\u7528\u3057\u3066\u3001\u30d5\u30a1\u30a4\u30eb\u3092Kuroco\u306e\u4eee\u9818\u57df\u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u3001\u5fdc\u7b54\u3068\u3057\u3066\u8fd4\u3055\u308c\u308bfile_id\u3092\u5404\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306bPOST\u3057\u3066\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u66f4\u65b0\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/reference/uploading-files-using-the-api.md",sourceDirName:"reference",slug:"/reference/uploading-files-using-the-api",permalink:"/ja/docs/reference/uploading-files-using-the-api",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/reference/uploading-files-using-the-api.md",tags:[],version:"current",frontMatter:{title:"API\u3092\u4f7f\u3063\u305f\u30d5\u30a1\u30a4\u30eb\u306e\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u306b\u3064\u3044\u3066",category:"API",description:"\u30b3\u30f3\u30c6\u30f3\u30c4\u3001\u30d5\u30a9\u30fc\u30e0\u3001\u30e1\u30f3\u30d0\u30fc\u306a\u3069\u306bAPI\u3092\u5229\u7528\u3057\u3066\u30d5\u30a1\u30a4\u30eb\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\u5834\u5408\u3001Files::upload\u306e\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u5229\u7528\u3057\u3066\u3001\u30d5\u30a1\u30a4\u30eb\u3092Kuroco\u306e\u4eee\u9818\u57df\u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u3001\u5fdc\u7b54\u3068\u3057\u3066\u8fd4\u3055\u308c\u308bfile_id\u3092\u5404\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306bPOST\u3057\u3066\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u66f4\u65b0\u3057\u307e\u3059\u3002"},sidebar:"documentationSidebar",previous:{title:"\u753b\u50cf\u306e\u52d5\u7684\u5909\u63db\u306b\u3064\u3044\u3066",permalink:"/ja/docs/reference/api-convert-image"},next:{title:"\u30e1\u30f3\u30d0\u30fc\u8a73\u7d30\u8a2d\u5b9a\u3067\u5229\u7528\u3067\u304d\u308b\u62e1\u5f35\u9805\u76ee\u4e00\u89a7",permalink:"/ja/docs/reference/list-of-extra-column-available-on-member-field-settings"}},l={},c=[{value:"\u6982\u8981",id:"\u6982\u8981",level:2},{value:"\u624b\u9806",id:"\u624b\u9806",level:2},{value:"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8",id:"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8",level:2}],d={toc:c},m="wrapper";function s(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u6982\u8981"},"\u6982\u8981"),(0,n.kt)("p",null,"\u30b3\u30f3\u30c6\u30f3\u30c4\u3001\u30d5\u30a9\u30fc\u30e0\u3001\u30e1\u30f3\u30d0\u30fc\u306a\u3069\u306bAPI\u3092\u5229\u7528\u3057\u3066\u30d5\u30a1\u30a4\u30eb\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\u5834\u5408\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"Files::upload"),"\u306e\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u5229\u7528\u3057\u3066\u3001\u30d5\u30a1\u30a4\u30eb\u3092Kuroco\u306e\u4e00\u6642\u9818\u57df\u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u3001\u5fdc\u7b54\u3068\u3057\u3066\u8fd4\u3055\u308c\u308b",(0,n.kt)("inlineCode",{parentName:"p"},"file_id"),"\u3092\u5404\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306bPOST\u3057\u3066\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u66f4\u65b0\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,"SwaggerUI\u3067\u52d5\u4f5c\u306e\u78ba\u8a8d\u3092\u3059\u308b\u3068\u3001\u4ee5\u4e0b\u306e\u624b\u9806\u306b\u306a\u308a\u307e\u3059\u3002"),(0,n.kt)("h2",{id:"\u624b\u9806"},"\u624b\u9806"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Files::upload\u306e\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306b\u30d5\u30a1\u30a4\u30eb\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\u3002",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("inlineCode",{parentName:"p"},"Files::upload"),"\u306e\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u958b\u304f\u3068\u3001","[\u30d5\u30a1\u30a4\u30eb\u3092\u9078\u629e]","\u306e\u30dc\u30bf\u30f3\u304c\u8868\u793a\u3055\u308c\u308b\u306e\u3067\u3001\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\u30d5\u30a1\u30a4\u30eb\u3092\u9078\u629e\u3057\u307e\u3059\u3002  "),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/4bc477a16c196a73f921f38a1f66eeb6.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/4bc477a16c196a73f921f38a1f66eeb6.png",alt:"Image from Gyazo"})),(0,n.kt)("admonition",{parentName:"li",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"\u30d5\u30a1\u30a4\u30eb\u9001\u4fe1\u6642\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u30d8\u30c3\u30c0\u306b\u306f'Content-Type': 'multipart/form-data'\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u30ec\u30b9\u30dd\u30f3\u30b9\u304b\u3089",(0,n.kt)("inlineCode",{parentName:"p"},"file_id"),"\u3092\u78ba\u8a8d\u3059\u308b",(0,n.kt)("br",{parentName:"p"}),"\n","\u30d5\u30a1\u30a4\u30eb\u306e\u4e00\u6642\u9818\u57df\u3078\u306e\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u304c\u6210\u529f\u3059\u308b\u3068\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"file_id"),"\u3092\u542b\u3080\u30ec\u30b9\u30dd\u30f3\u30b9\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002  "),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/5abfaf930bc6a331be7c0d7ef99083ca.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/5abfaf930bc6a331be7c0d7ef99083ca.png",alt:"Image from Gyazo"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"file_id"),"\u3092\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u66f4\u65b0\u3059\u308b\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306bPOST\u3059\u308b",(0,n.kt)("br",{parentName:"p"}),"\n","\u66f4\u65b0\u30fb\u8ffd\u52a0\u3057\u305f\u3044\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u64cd\u4f5c\u3059\u308b\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306b\u5bfe\u3057\u3066\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"file_id"),"\u3092\u6307\u5b9a\u3057\u3066\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u308a\u307e\u3059\u3002   "),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/dfea1d5badaf69fdb605de19702bcdd9.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/dfea1d5badaf69fdb605de19702bcdd9.png",alt:"Image from Gyazo"})),(0,n.kt)("admonition",{parentName:"li",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"\u30ad\u30e3\u30d7\u30c1\u30e3\u306e\u4f8b\u3067\u306f",(0,n.kt)("inlineCode",{parentName:"p"},"Member::update"),"\u306b\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u3063\u3066\u3044\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u30b3\u30f3\u30c6\u30f3\u30c4\u306eHTML\u9805\u76ee\u30fbWysiwyg\u9805\u76ee\u306eHTML\u5185\u306b\n","<",'img src="https://',"[KurocoFiles\u30db\u30b9\u30c8]","/files/temp/",(0,n.kt)("strong",{parentName:"p"},"**"),'.jpg"',">","\n\u306e\u3088\u3046\u306bimg\u30bf\u30b0\u3084a\u30bf\u30b0\u304c\u3042\u308b\u3068\u305d\u306e\u30d1\u30b9\u3082\u66f4\u65b0\u3055\u308c\u307e\u3059\u3002"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u30ea\u30af\u30a8\u30b9\u30c8\u304c\u6210\u529f\u3057\u305f\u3053\u3068\u3092\u78ba\u8a8d\u3059\u308b",(0,n.kt)("br",{parentName:"p"}),"\n","\u30ec\u30b9\u30dd\u30f3\u30b9\u3068\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/392768bb3b877d18b0fd9460152a40ad.jpg?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/392768bb3b877d18b0fd9460152a40ad.jpg",alt:"Image from Gyazo"})))),(0,n.kt)("p",null,"\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u3067\u306e\u5177\u4f53\u7684\u306a\u30b3\u30fc\u30c9\u306e\u4f8b\u306f\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("h2",{id:"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"},"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/ja/docs/tutorials/setting-up-inquiry-forms/#%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%81%AE%E5%85%A5%E5%8A%9B%E9%A0%85%E7%9B%AE%E3%82%92%E8%BF%BD%E5%8A%A0%E3%81%99%E3%82%8B"},"Kuroco\u3068Nuxt.js\u3067\u3001\u30d5\u30a9\u30fc\u30e0\u753b\u9762\u3092\u69cb\u7bc9\u3059\u308b")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/ja/docs/faq/how-do-i-upload-image-and-manage-it/"},"\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u304b\u3089\u30d5\u30a1\u30a4\u30eb\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u3066\u30b3\u30f3\u30c6\u30f3\u30c4\u306b\u95a2\u9023\u3065\u3051\u308b\u306b\u306f\u3069\u3046\u3057\u305f\u3089\u3088\u3044\u3067\u3059\u304b\uff1f"))))}s.isMDXComponent=!0}}]);