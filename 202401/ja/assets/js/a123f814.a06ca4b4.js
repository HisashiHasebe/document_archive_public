"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[25326],{3905:(t,e,a)=>{a.d(e,{Zo:()=>i,kt:()=>f});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var d=r.createContext({}),m=function(t){var e=r.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},i=function(t){var e=m(t.components);return r.createElement(d.Provider,{value:e},t.children)},c="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,d=t.parentName,i=p(t,["components","mdxType","originalType","parentName"]),c=m(a),k=n,f=c["".concat(d,".").concat(k)]||c[k]||s[k]||l;return a?r.createElement(f,o(o({ref:e},i),{},{components:a})):r.createElement(f,o({ref:e},i))}));function f(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,o=new Array(l);o[0]=k;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p[c]="string"==typeof t?t:n,o[1]=p;for(var m=2;m<l;m++)o[m]=a[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},1458:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var r=a(87462),n=(a(67294),a(3905));const l={title:"WYSIWYG\u30a8\u30c7\u30a3\u30bf\u30fc\u306e\u30d7\u30ec\u30fc\u30b9\u30db\u30eb\u30c0\u30fc\u6a5f\u80fd\u3092\u5b9f\u88c5\u3059\u308b",description:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001WYSIWYG\u30d7\u30ec\u30fc\u30b9\u30db\u30eb\u30c0\u30fc\u6a5f\u80fd\u3001API\u3001\u304a\u3088\u3073\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u3092\u4f7f\u7528\u3057\u3066\u3001\u8907\u6570\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u306b\u307e\u305f\u304c\u308b\u5171\u901a\u306e\u30c6\u30ad\u30b9\u30c8\u3092\u8a2d\u5b9a\u3059\u308b\u65b9\u6cd5\u3092\u8aac\u660e\u3057\u307e\u3059\u3002"},o=void 0,p={unversionedId:"tutorials/how-to-use-ckeditor-placeholder-feature",id:"tutorials/how-to-use-ckeditor-placeholder-feature",title:"WYSIWYG\u30a8\u30c7\u30a3\u30bf\u30fc\u306e\u30d7\u30ec\u30fc\u30b9\u30db\u30eb\u30c0\u30fc\u6a5f\u80fd\u3092\u5b9f\u88c5\u3059\u308b",description:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001WYSIWYG\u30d7\u30ec\u30fc\u30b9\u30db\u30eb\u30c0\u30fc\u6a5f\u80fd\u3001API\u3001\u304a\u3088\u3073\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u3092\u4f7f\u7528\u3057\u3066\u3001\u8907\u6570\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u306b\u307e\u305f\u304c\u308b\u5171\u901a\u306e\u30c6\u30ad\u30b9\u30c8\u3092\u8a2d\u5b9a\u3059\u308b\u65b9\u6cd5\u3092\u8aac\u660e\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/tutorials/how-to-use-ckeditor-placeholder-feature.md",sourceDirName:"tutorials",slug:"/tutorials/how-to-use-ckeditor-placeholder-feature",permalink:"/ja/docs/tutorials/how-to-use-ckeditor-placeholder-feature",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/tutorials/how-to-use-ckeditor-placeholder-feature.md",tags:[],version:"current",frontMatter:{title:"WYSIWYG\u30a8\u30c7\u30a3\u30bf\u30fc\u306e\u30d7\u30ec\u30fc\u30b9\u30db\u30eb\u30c0\u30fc\u6a5f\u80fd\u3092\u5b9f\u88c5\u3059\u308b",description:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001WYSIWYG\u30d7\u30ec\u30fc\u30b9\u30db\u30eb\u30c0\u30fc\u6a5f\u80fd\u3001API\u3001\u304a\u3088\u3073\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u3092\u4f7f\u7528\u3057\u3066\u3001\u8907\u6570\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u306b\u307e\u305f\u304c\u308b\u5171\u901a\u306e\u30c6\u30ad\u30b9\u30c8\u3092\u8a2d\u5b9a\u3059\u308b\u65b9\u6cd5\u3092\u8aac\u660e\u3057\u307e\u3059\u3002"},sidebar:"documentationSidebar",previous:{title:"\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u66f4\u65b0\u6642\u306bGitHub Actions\u3092\u81ea\u52d5\u5b9f\u884c\u3059\u308b",permalink:"/ja/docs/tutorials/auto-run-github-with-contents-update"},next:{title:"Kuroco\u7ba1\u7406\u753b\u9762\u306eWYSIWYG\u30a8\u30c7\u30a3\u30bf\u306b\u4efb\u610f\u306eCSS\u3092\u9069\u7528\u3059\u308b",permalink:"/ja/docs/tutorials/apply-css-to-a-kuroco-management-screen-wysiwyg-editor"}},d={},m=[{value:"\u6982\u8981",id:"\u6982\u8981",level:2},{value:"\u5b66\u3079\u308b\u3053\u3068",id:"\u5b66\u3079\u308b\u3053\u3068",level:3},{value:"\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u3092\u6e96\u5099\u3059\u308b",id:"\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u3092\u6e96\u5099\u3059\u308b",level:2},{value:"\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u4f5c\u6210\u3059\u308b",id:"\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u4f5c\u6210\u3059\u308b",level:2},{value:"\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u3092\u4f5c\u6210\u3059\u308b",id:"\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u3092\u4f5c\u6210\u3059\u308b",level:2},{value:"API\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u4f5c\u6210\u3059\u308b",id:"api\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u4f5c\u6210\u3059\u308b",level:2},{value:"\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u8ffd\u52a0\u3059\u308b",id:"\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u8ffd\u52a0\u3059\u308b",level:3},{value:"\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306b\u5f8c\u51e6\u7406\u3092\u8ffd\u52a0\u3059\u308b",id:"\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306b\u5f8c\u51e6\u7406\u3092\u8ffd\u52a0\u3059\u308b",level:3},{value:"\u7d50\u679c\u3092\u78ba\u8a8d\u3059\u308b",id:"\u7d50\u679c\u3092\u78ba\u8a8d\u3059\u308b",level:2},{value:"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8",id:"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8",level:2}],i={toc:m},c="wrapper";function s(t){let{components:e,...a}=t;return(0,n.kt)(c,(0,r.Z)({},i,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u6982\u8981"},"\u6982\u8981"),(0,n.kt)("p",null,"WYSIWYG\u30d7\u30ec\u30fc\u30b9\u30db\u30eb\u30c0\u30fc\u306e\u6a5f\u80fd\u306f\u67d4\u8edf\u3067\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u53ef\u80fd\u306a\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u4f5c\u6210\u3059\u308b\u305f\u3081\u306e\u4fbf\u5229\u306a\u30c4\u30fc\u30eb\u3067\u3059\u3002\u3053\u308c\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u3001\u4e88\u3081\u8a2d\u5b9a\u3057\u305f\u6587\u66f8\u3092\u7c21\u5358\u306b\u30b3\u30f3\u30c6\u30f3\u30c4\u3078\u767b\u9332\u3067\u304d\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u307e\u305f\u3001\u8907\u6570\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u306b\u307e\u305f\u304c\u308b\u5171\u901a\u306e\u30c6\u30ad\u30b9\u30c8\u8a2d\u5b9a\u3082\u53ef\u80fd\u3067\u3059\u3002"),(0,n.kt)("p",null,"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001WYSIWYG\u30d7\u30ec\u30fc\u30b9\u30db\u30eb\u30c0\u30fc\u6a5f\u80fd\u3001API\u3001\u304a\u3088\u3073\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u3092\u4f7f\u7528\u3057\u3066\u3001\u8907\u6570\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u306b\u307e\u305f\u304c\u308b\u5171\u901a\u306e\u30c6\u30ad\u30b9\u30c8\u3092\u8a2d\u5b9a\u3059\u308b\u65b9\u6cd5\u3092\u8aac\u660e\u3057\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","2\u3064\u306e\u30d7\u30ec\u30fc\u30b9\u30db\u30eb\u30c0\u30fc\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"my_name"),"\u3068",(0,n.kt)("inlineCode",{parentName:"p"},"my_address"),"\u3092\u4f7f\u7528\u3057\u3001\u3053\u308c\u3089\u306e\u30d7\u30ec\u30fc\u30b9\u30db\u30eb\u30c0\u30fc\u304c\u3001API\u30ea\u30af\u30a8\u30b9\u30c8\u6642\u306b\u4e88\u8a2d\u5b9a\u3057\u305f\u30c6\u30ad\u30b9\u30c8\u3078\u52d5\u7684\u306b\u7f6e\u63db\u3055\u308c\u307e\u3059\u3002  "),(0,n.kt)("h3",{id:"\u5b66\u3079\u308b\u3053\u3068"},"\u5b66\u3079\u308b\u3053\u3068"),(0,n.kt)("p",null,"\u4ee5\u4e0b\u306e\u624b\u9806\u3067WYSIWYG\u30d7\u30ec\u30fc\u30b9\u30db\u30eb\u30c0\u30fc\u306e\u6a5f\u80fd\u3092\u8a2d\u5b9a\u3059\u308b\u65b9\u6cd5\u3092\u5b66\u3073\u307e\u3059\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84%E5%AE%9A%E7%BE%A9%E3%82%92%E6%BA%96%E5%82%99%E3%81%99%E3%82%8B"},"\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u3092\u6e96\u5099\u3059\u308b")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84%E3%82%92%E4%BD%9C%E6%88%90%E3%81%99%E3%82%8B"},"\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u4f5c\u6210\u3059\u308b")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#%E3%82%AB%E3%82%B9%E3%82%BF%E3%83%A0%E5%87%A6%E7%90%86%E3%82%92%E4%BD%9C%E6%88%90%E3%81%99%E3%82%8B"},"\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u3092\u4f5c\u6210\u3059\u308b")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#api%E3%82%A8%E3%83%B3%E3%83%89%E3%83%9D%E3%82%A4%E3%83%B3%E3%83%88%E3%82%92%E4%BD%9C%E6%88%90%E3%81%99%E3%82%8B"},"API\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u4f5c\u6210\u3059\u308b")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#%E7%B5%90%E6%9E%9C%E3%82%92%E7%A2%BA%E8%AA%8D%E3%81%99%E3%82%8B"},"\u7d50\u679c\u3092\u78ba\u8a8d\u3059\u308b"))),(0,n.kt)("h2",{id:"\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u3092\u6e96\u5099\u3059\u308b"},"\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u3092\u6e96\u5099\u3059\u308b"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/ja/docs/management/content-structure-topics-group/"},"\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u4e00\u89a7"),"\u306e\u753b\u9762\u304b\u3089","[\u8ffd\u52a0]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/22303613bafe005dc86e92cf56be990c.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/22303613bafe005dc86e92cf56be990c.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"\u4ee5\u4e0b\u306e\u5185\u5bb9\u3067\u8a2d\u5b9a\u3092\u3057\u307e\u3059\u3002  "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u9805\u76ee"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8a2d\u5b9a"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u540d\u524d"),(0,n.kt)("td",{parentName:"tr",align:"left"},"My Content Structure")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ID=1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u9805\u76ee\u8a2d\u5b9a\uff1aWYSIWYG",(0,n.kt)("br",null),"\u9805\u76ee\u540d\uff1aWYSIWYG",(0,n.kt)("br",null),"\u8b58\u5225\u5b50\uff1acontent",(0,n.kt)("br",null),"\u8a2d\u5b9a\uff1aplaceholders::my_name,my_address")))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"\u30d7\u30ec\u30fc\u30b9\u30db\u30eb\u30c0\u30fc\u306f\u30ab\u30f3\u30de\u533a\u5207\u308a\u3067\u5165\u529b\u3057\u3001\u30ab\u30f3\u30de\u306e\u5f8c\u308d\u306b\u30b9\u30da\u30fc\u30b9\u306f\u5165\u308c\u306a\u3044\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/ee7a4dbbc073ce10f06c244a25827308.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/ee7a4dbbc073ce10f06c244a25827308.png",alt:"Image from Gyazo"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/25d2016b74cff76b8dc0002b1fb2fc5f.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/25d2016b74cff76b8dc0002b1fb2fc5f.png",alt:"Image from Gyazo"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/bfc5a99f6572970275b8de5d2c2e5f2e.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/bfc5a99f6572970275b8de5d2c2e5f2e.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"\u8a2d\u5b9a\u304c\u3067\u304d\u305f\u3089","[\u8ffd\u52a0\u3059\u308b]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002  "),(0,n.kt)("h2",{id:"\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u4f5c\u6210\u3059\u308b"},"\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u4f5c\u6210\u3059\u308b"),(0,n.kt)("p",null,"\u524d\u306e\u30b9\u30c6\u30c3\u30d7\u3067\u4f5c\u6210\u3057\u305f\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u306b2\u3064\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u4f5c\u6210\u3057\u3001\u30d7\u30ec\u30fc\u30b9\u30db\u30eb\u30c0\u30fc\u3092\u30b3\u30f3\u30c6\u30f3\u30c4\u306b\u5165\u308c\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u30b3\u30f3\u30c6\u30f3\u30c4\u4e00\u89a7\u306e\u753b\u9762\u304b\u3089","[\u8ffd\u52a0]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/35a896398e5528410bcafe07772badbd.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/35a896398e5528410bcafe07772badbd.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"\u4ee5\u4e0b\u3092\u5165\u529b\u3057\u3001","[\u8ffd\u52a0\u3059\u308b]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u9805\u76ee"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8a2d\u5b9a"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30bf\u30a4\u30c8\u30eb"),(0,n.kt)("td",{parentName:"tr",align:"left"},"My First Content")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"WYSIWYG"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"My name"),"\u3068",(0,n.kt)("inlineCode",{parentName:"td"},"My Address"),"\u3092\u5229\u7528\u3057\u305f\u4efb\u610f\u306e\u6587\u7ae0\u3002",(0,n.kt)("br",null),"\u30d7\u30ec\u30fc\u30b9\u30db\u30eb\u30c0\u30fc\u3092\u8a2d\u5b9a\u3059\u308b\u3068\u3001WYSIWYG\u30a8\u30c7\u30a3\u30bf\u30fc\u306e\u6a5f\u80fd\u306b",(0,n.kt)("inlineCode",{parentName:"td"},"Placeholder"),"\u304c\u8ffd\u52a0\u3055\u308c\u308b\u306e\u3067\u3053\u3061\u3089\u304b\u3089\u30d7\u30ec\u30fc\u30b9\u30db\u30eb\u30c0\u30fc\u3092\u8a2d\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002")))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/8853a2965403b1137df937d144a1de5a.jpg?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/8853a2965403b1137df937d144a1de5a.jpg",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"\u4ee5\u4e0b\u3092\u5165\u529b\u3057\u3001","[\u8ffd\u52a0\u3059\u308b]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u9805\u76ee"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8a2d\u5b9a"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30bf\u30a4\u30c8\u30eb"),(0,n.kt)("td",{parentName:"tr",align:"left"},"My Second Content")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"WYSIWYG"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"My name"),"\u3068",(0,n.kt)("inlineCode",{parentName:"td"},"My Address"),"\u3092\u5229\u7528\u3057\u305f\u4efb\u610f\u306e\u6587\u7ae0\u3002",(0,n.kt)("br",null),"\u30d7\u30ec\u30fc\u30b9\u30db\u30eb\u30c0\u30fc\u3092\u8a2d\u5b9a\u3059\u308b\u3068\u3001WYSIWYG\u30a8\u30c7\u30a3\u30bf\u30fc\u306e\u6a5f\u80fd\u306b",(0,n.kt)("inlineCode",{parentName:"td"},"Placeholder"),"\u304c\u8ffd\u52a0\u3055\u308c\u308b\u306e\u3067\u3053\u3061\u3089\u304b\u3089\u30d7\u30ec\u30fc\u30b9\u30db\u30eb\u30c0\u30fc\u3092\u8a2d\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002")))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/7693f0eab4100d98c2c4fcdc99503087.jpg?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/7693f0eab4100d98c2c4fcdc99503087.jpg",alt:"Image from Gyazo"})),(0,n.kt)("h2",{id:"\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u3092\u4f5c\u6210\u3059\u308b"},"\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u3092\u4f5c\u6210\u3059\u308b"),(0,n.kt)("p",null,"\u6b21\u306b\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"my_name"),"\u3068",(0,n.kt)("inlineCode",{parentName:"p"},"my_address"),"\u30d7\u30ec\u30fc\u30b9\u30db\u30eb\u30c0\u30fc\u3092\u8a2d\u5b9a\u3057\u305f\u30c6\u30ad\u30b9\u30c8\u306b\u7f6e\u63db\u3059\u308b\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,"[\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3]"," -> ","[\u30ab\u30b9\u30bf\u30e0\u51e6\u7406]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002  "),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/629aadd18b2e71dc1d5dca3784fe6252.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/629aadd18b2e71dc1d5dca3784fe6252.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"[\u8ffd\u52a0]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002  "),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/4fdd5cac979c6367f0a6a357d659319d.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/4fdd5cac979c6367f0a6a357d659319d.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u5165\u529b\u3057\u307e\u3059\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u9805\u76ee"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8a2d\u5b9a"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30bf\u30a4\u30c8\u30eb"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Replase placeholders in content")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8b58\u5225\u5b50"),(0,n.kt)("td",{parentName:"tr",align:"left"},"replase_placeholders_in_content")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u51e6\u7406"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u4ee5\u4e0b\u306e\u30b3\u30fc\u30c9")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-smarty"},'{* For every contents in the list *}\n{foreach from=$json.list item=\'row\' key=\'key\'} \n    {* Replace placeholder my_name with "Diverta" *}\n    {assign var=json.list.$key.content \n            value=$json.list.$key.content|replace:"<span class=\\"placeholder\\">`$smarty.ldelim`my_name`$smarty.rdelim`</span>":\'Diverta\'}\n    {* Replace placeholder my_address with the real address value *}\n    {assign var=json.list.$key.content \n            value=$json.list.$key.content|replace:"<span class=\\"placeholder\\">`$smarty.ldelim`my_address`$smarty.rdelim`</span>":\'Central Plaza 6F 1-1 Kaguragashi Shinjuku-ku, Tokyo, Japan\'}\n{/foreach}\n\n{$json|@json_encode:$smarty.const.JSON_UNESCAPED_UNICODE}\n')),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/ae352a41af810bbd91026ce79f934bec.jpg?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/ae352a41af810bbd91026ce79f934bec.jpg",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"\u5165\u529b\u304c\u3067\u304d\u305f\u3089","[\u8ffd\u52a0\u3059\u308b]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002"),(0,n.kt)("h2",{id:"api\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u4f5c\u6210\u3059\u308b"},"API\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u4f5c\u6210\u3059\u308b"),(0,n.kt)("p",null,"Content\u30ab\u30c6\u30b4\u30ea\u3001\u30e2\u30c7\u30eb\u30c8\u30d4\u30c3\u30af\u3001\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3\u30ea\u30b9\u30c8\u3092\u6301\u30641\u3064\u306eAPI\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\u524d\u306e\u30b9\u30c6\u30c3\u30d7\u3067\u4f5c\u6210\u3057\u305f\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u306eID\u3092\u300ctopics_group_id\u300d\u30d1\u30e9\u30e1\u30fc\u30bf\u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,n.kt)("h3",{id:"\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u8ffd\u52a0\u3059\u308b"},"\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u8ffd\u52a0\u3059\u308b"),(0,n.kt)("p",null,"\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u4e00\u89a7\u306e\u30da\u30fc\u30b8\u304b\u3089\u3001","[\u65b0\u3057\u3044\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306e\u8ffd\u52a0]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/21831b02823d8ec43ef328ba8c998ad7.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/21831b02823d8ec43ef328ba8c998ad7.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"\u4ee5\u4e0b\u306e\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u9805\u76ee"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8a2d\u5b9a\u5185\u5bb9"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30d1\u30b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"my-content")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30ab\u30c6\u30b4\u30ea\u30fc"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30c6\u30f3\u30c4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30e2\u30c7\u30eb"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Topics")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"list")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"topics_group_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u4f5c\u6210\u3057\u305f\u30b3\u30f3\u30c6\u30f3\u30c4\u5b9a\u7fa9\u306eID")))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/e536c391d49a751f2149424fbbee8e6c.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/e536c391d49a751f2149424fbbee8e6c.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"\u8a2d\u5b9a\u304c\u3067\u304d\u305f\u3089","[\u8ffd\u52a0\u3059\u308b]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002  "),(0,n.kt)("h3",{id:"\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306b\u5f8c\u51e6\u7406\u3092\u8ffd\u52a0\u3059\u308b"},"\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306b\u5f8c\u51e6\u7406\u3092\u8ffd\u52a0\u3059\u308b"),(0,n.kt)("p",null,"\u524d\u306e\u30b9\u30c6\u30c3\u30d7\u3067\u4f5c\u6210\u3057\u305f\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u3092\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306e\u5f8c\u51e6\u7406\u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u4e00\u89a7\u306e\u30da\u30fc\u30b8\u304b\u3089","[\u5f8c\u51e6\u7406]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002  "),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/b3a8af6823af91069d7430d6c6bdb4e8.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/b3a8af6823af91069d7430d6c6bdb4e8.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"API\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u3092\u7c21\u7d20\u5316\u3059\u308b\u305f\u3081\u306b\u3001\u300c\u51fa\u529b\u8a31\u53ef\u30ea\u30b9\u30c8\u300d\u30dd\u30b9\u30c8\u30d7\u30ed\u30bb\u30b9\u3082\u8ffd\u52a0\u3057\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002  "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u9805\u76ee"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8a2d\u5b9a\u5185\u5bb9"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u51fa\u529b\u8a31\u53ef\u30ea\u30b9\u30c8"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"list.subject"),(0,n.kt)("br",null),(0,n.kt)("inlineCode",{parentName:"td"},"list.content"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30ab\u30b9\u30bf\u30e0\u51e6\u7406"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Replase placeholders in content")))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/d6ce62cc17f4dd03b9386574ce8296b1.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/d6ce62cc17f4dd03b9386574ce8296b1.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"\u8a2d\u5b9a\u304c\u3067\u304d\u305f\u3089","[\u4fdd\u5b58\u3059\u308b]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u5f8c\u51e6\u7406\u306e\u8a2d\u5b9a\u3092\u4fdd\u5b58\u3057\u307e\u3059\u3002  "),(0,n.kt)("h2",{id:"\u7d50\u679c\u3092\u78ba\u8a8d\u3059\u308b"},"\u7d50\u679c\u3092\u78ba\u8a8d\u3059\u308b"),(0,n.kt)("p",null,"SwaggerUI\u3067API\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u53d6\u5f97\u3057\u3001\u7d50\u679c\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u4e00\u89a7\u306e\u30da\u30fc\u30b8\u304b\u3089","[SwaggerUI]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002  "),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/9c770e6f045b3783f004fe3f4fed8af8.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/9c770e6f045b3783f004fe3f4fed8af8.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"\u4f5c\u6210\u3057\u305f\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306e","[Try it out]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002  "),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/a509f70678e00bee171e8620f9f056c8.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/a509f70678e00bee171e8620f9f056c8.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"[Execute]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002  "),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/a0021b5a2b3dffe5f0863dba380cdaaf.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/a0021b5a2b3dffe5f0863dba380cdaaf.png",alt:"Image from Gyazo"})),(0,n.kt)("p",null,"\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u3001\u30d7\u30ec\u30fc\u30b9\u30db\u30eb\u30c0\u30fc\u3092\u8a2d\u5b9a\u3057\u305f\u90e8\u5206\u304c\u3001\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u3067\u8a2d\u5b9a\u3057\u305f\u30c6\u30ad\u30b9\u30c8\u306b\u7f6e\u304d\u63db\u308f\u3063\u3066\u3044\u308b\u3053\u3068\u304c\u5206\u304b\u308a\u307e\u3059\u3002  "),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/1c435b61daa8b4626a315ac14ddedc49.jpg?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/1c435b61daa8b4626a315ac14ddedc49.jpg",alt:"Image from Gyazo"})),(0,n.kt)("h2",{id:"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"},"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/ja/docs/reference/smarty-plugin/"},"Smarty\u30d7\u30e9\u30b0\u30a4\u30f3")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/ja/docs/reference/post-processing/"},"\u5f8c\u51e6\u7406"))))}s.isMDXComponent=!0}}]);