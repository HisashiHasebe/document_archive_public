"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[6245],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),m=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},d=function(t){var e=m(t.components);return n.createElement(i.Provider,{value:e},t.children)},s="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),s=m(a),g=r,k=s["".concat(i,".").concat(g)]||s[g]||c[g]||l;return a?n.createElement(k,p(p({ref:e},d),{},{components:a})):n.createElement(k,p({ref:e},d))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=g;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o[s]="string"==typeof t?t:r,p[1]=o;for(var m=2;m<l;m++)p[m]=a[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},85426:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const l={title:"Kuroco\u304b\u3089\u306e\u30e1\u30fc\u30eb\u9001\u4fe1\u306b\u4efb\u610f\u306e\u30e1\u30fc\u30eb\u914d\u4fe1\u30b5\u30fc\u30d3\u30b9\u3092\u4f7f\u7528\u3059\u308b(blastengine)",description:"\u30c8\u30ea\u30ac\u300c\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30e1\u30fc\u30eb\u9001\u4fe1\u65b9\u6cd5\uff08SendGrid\uff09\u3092\u4ee3\u66ff\u300d\u3092\u5229\u7528\u3059\u308b\u3068\u3001SendGrid\u306e\u4ee3\u308f\u308a\u306b\u3001blastengine\u3001Mailchimp\u3001Amazon SES\u306a\u3069\u306e\u4efb\u610f\u306e\u30e1\u30fc\u30eb\u914d\u4fe1\u30b5\u30fc\u30d3\u30b9\u3092\u5229\u7528\u3057\u3066\u3001\u901a\u77e5\u3084\u62db\u5f85\u306e\u30e1\u30fc\u30eb\u3092\u9001\u4fe1\u3067\u304d\u307e\u3059\u3002\u672c\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u305d\u306e\u4f8b\u3068\u3057\u3066\u3001SendGrid\u306b\u3088\u308b\u30e1\u30fc\u30eb\u9001\u4fe1\u3092blastengine\u306b\u4ee3\u66ff\u3059\u308b\u624b\u9806\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002"},p=void 0,o={unversionedId:"tutorials/use-any-email-delivery-service-to-send-emails-from-kuroco-blastengine",id:"tutorials/use-any-email-delivery-service-to-send-emails-from-kuroco-blastengine",title:"Kuroco\u304b\u3089\u306e\u30e1\u30fc\u30eb\u9001\u4fe1\u306b\u4efb\u610f\u306e\u30e1\u30fc\u30eb\u914d\u4fe1\u30b5\u30fc\u30d3\u30b9\u3092\u4f7f\u7528\u3059\u308b(blastengine)",description:"\u30c8\u30ea\u30ac\u300c\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30e1\u30fc\u30eb\u9001\u4fe1\u65b9\u6cd5\uff08SendGrid\uff09\u3092\u4ee3\u66ff\u300d\u3092\u5229\u7528\u3059\u308b\u3068\u3001SendGrid\u306e\u4ee3\u308f\u308a\u306b\u3001blastengine\u3001Mailchimp\u3001Amazon SES\u306a\u3069\u306e\u4efb\u610f\u306e\u30e1\u30fc\u30eb\u914d\u4fe1\u30b5\u30fc\u30d3\u30b9\u3092\u5229\u7528\u3057\u3066\u3001\u901a\u77e5\u3084\u62db\u5f85\u306e\u30e1\u30fc\u30eb\u3092\u9001\u4fe1\u3067\u304d\u307e\u3059\u3002\u672c\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u305d\u306e\u4f8b\u3068\u3057\u3066\u3001SendGrid\u306b\u3088\u308b\u30e1\u30fc\u30eb\u9001\u4fe1\u3092blastengine\u306b\u4ee3\u66ff\u3059\u308b\u624b\u9806\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/tutorials/use-any-email-delivery-service-to-send-emails-from-kuroco-blastengine.md",sourceDirName:"tutorials",slug:"/tutorials/use-any-email-delivery-service-to-send-emails-from-kuroco-blastengine",permalink:"/ja/docs/tutorials/use-any-email-delivery-service-to-send-emails-from-kuroco-blastengine",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/tutorials/use-any-email-delivery-service-to-send-emails-from-kuroco-blastengine.md",tags:[],version:"current",frontMatter:{title:"Kuroco\u304b\u3089\u306e\u30e1\u30fc\u30eb\u9001\u4fe1\u306b\u4efb\u610f\u306e\u30e1\u30fc\u30eb\u914d\u4fe1\u30b5\u30fc\u30d3\u30b9\u3092\u4f7f\u7528\u3059\u308b(blastengine)",description:"\u30c8\u30ea\u30ac\u300c\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30e1\u30fc\u30eb\u9001\u4fe1\u65b9\u6cd5\uff08SendGrid\uff09\u3092\u4ee3\u66ff\u300d\u3092\u5229\u7528\u3059\u308b\u3068\u3001SendGrid\u306e\u4ee3\u308f\u308a\u306b\u3001blastengine\u3001Mailchimp\u3001Amazon SES\u306a\u3069\u306e\u4efb\u610f\u306e\u30e1\u30fc\u30eb\u914d\u4fe1\u30b5\u30fc\u30d3\u30b9\u3092\u5229\u7528\u3057\u3066\u3001\u901a\u77e5\u3084\u62db\u5f85\u306e\u30e1\u30fc\u30eb\u3092\u9001\u4fe1\u3067\u304d\u307e\u3059\u3002\u672c\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u305d\u306e\u4f8b\u3068\u3057\u3066\u3001SendGrid\u306b\u3088\u308b\u30e1\u30fc\u30eb\u9001\u4fe1\u3092blastengine\u306b\u4ee3\u66ff\u3059\u308b\u624b\u9806\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002"},sidebar:"documentationSidebar",previous:{title:"Kuroco\u304b\u3089\u306e\u30e1\u30fc\u30eb\u9001\u4fe1\u306b\u4efb\u610f\u306e\u30e1\u30fc\u30eb\u914d\u4fe1\u30b5\u30fc\u30d3\u30b9\u3092\u4f7f\u7528\u3059\u308b(Mailchimp)",permalink:"/ja/docs/tutorials/use-any-email-delivery-service-to-send-emails-from-kuroco-mailchimp"},next:{title:"\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u7279\u5b9a\u9805\u76ee\u304c\u66f4\u65b0\u3055\u308c\u305f\u3089\u30e1\u30fc\u30eb\u3067\u901a\u77e5\u3059\u308b",permalink:"/ja/docs/tutorials/notify-by-email-when-specific-items-in-the-content-are-updated"}},i={},m=[{value:"\u6982\u8981",id:"\u6982\u8981",level:2},{value:"\u5b66\u3079\u308b\u3053\u3068",id:"\u5b66\u3079\u308b\u3053\u3068",level:3},{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:3},{value:"blastengine\u306e\u8a2d\u5b9a",id:"blastengine\u306e\u8a2d\u5b9a",level:2},{value:"Kuroco\u306e\u8a2d\u5b9a",id:"kuroco\u306e\u8a2d\u5b9a",level:2},{value:"\u30b7\u30fc\u30af\u30ec\u30c3\u30c8\u3092\u767b\u9332\u3059\u308b",id:"\u30b7\u30fc\u30af\u30ec\u30c3\u30c8\u3092\u767b\u9332\u3059\u308b",level:3},{value:"\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u3092\u767b\u9332\u3059\u308b",id:"\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u3092\u767b\u9332\u3059\u308b",level:3},{value:"\u52d5\u4f5c\u306e\u78ba\u8a8d",id:"\u52d5\u4f5c\u306e\u78ba\u8a8d",level:2},{value:"\u30e1\u30fc\u30eb\u306e\u5230\u9054\u7387\u3092\u4e0a\u3052\u308b",id:"\u30e1\u30fc\u30eb\u306e\u5230\u9054\u7387\u3092\u4e0a\u3052\u308b",level:2},{value:"SPF\u30ec\u30b3\u30fc\u30c9\u3092\u8a2d\u5b9a\u3059\u308b",id:"spf\u30ec\u30b3\u30fc\u30c9\u3092\u8a2d\u5b9a\u3059\u308b",level:3},{value:"DKIM\u3092\u8a2d\u5b9a\u3059\u308b",id:"dkim\u3092\u8a2d\u5b9a\u3059\u308b",level:3},{value:"\u79d8\u5bc6\u9375\u30fb\u516c\u958b\u9375\u306e\u751f\u6210",id:"\u79d8\u5bc6\u9375\u516c\u958b\u9375\u306e\u751f\u6210",level:4},{value:"blastengine\u306b\u767b\u9332",id:"blastengine\u306b\u767b\u9332",level:4},{value:"DNS\u3092\u8a2d\u5b9a",id:"dns\u3092\u8a2d\u5b9a",level:4},{value:"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8",id:"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8",level:2}],d={toc:m},s="wrapper";function c(t){let{components:e,...a}=t;return(0,r.kt)(s,(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u6982\u8981"},"\u6982\u8981"),(0,r.kt)("p",null,"\u30c8\u30ea\u30ac\u300c\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30e1\u30fc\u30eb\u9001\u4fe1\u65b9\u6cd5\uff08SendGrid\uff09\u3092\u4ee3\u66ff\u300d\u3092\u5229\u7528\u3059\u308b\u3068\u3001SendGrid\u306e\u4ee3\u308f\u308a\u306b\u3001blastengine\u3001Mailchimp\u3001Amazon SES\u306a\u3069\u306e\u4efb\u610f\u306e\u30e1\u30fc\u30eb\u914d\u4fe1\u30b5\u30fc\u30d3\u30b9\u3092\u5229\u7528\u3057\u3066\u3001\u901a\u77e5\u3084\u62db\u5f85\u306e\u30e1\u30fc\u30eb\u3092\u9001\u4fe1\u3067\u304d\u307e\u3059\u3002  "),(0,r.kt)("p",null,"\u672c\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u305d\u306e\u4f8b\u3068\u3057\u3066\u3001SendGrid\u306b\u3088\u308b\u30e1\u30fc\u30eb\u9001\u4fe1\u3092blastengine\u306b\u4ee3\u66ff\u3059\u308b\u624b\u9806\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"\u5b66\u3079\u308b\u3053\u3068"},"\u5b66\u3079\u308b\u3053\u3068"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u306e\u624b\u9806\u3067\u4efb\u610f\u306e\u30e1\u30fc\u30eb\u914d\u4fe1\u30b5\u30fc\u30d3\u30b9\u3092\u4f7f\u7528\u3057\u305f\u30e1\u30fc\u30eb\u9001\u4fe1\u3092\u5b9f\u88c5\u3057\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#blastengine%E3%81%AE%E8%A8%AD%E5%AE%9A"},"blastengine\u306e\u8a2d\u5b9a")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#kuroco%E3%81%AE%E8%A8%AD%E5%AE%9A"},"Kuroco\u306e\u8a2d\u5b9a")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E5%8B%95%E4%BD%9C%E3%81%AE%E7%A2%BA%E8%AA%8D"},"\u52d5\u4f5c\u306e\u78ba\u8a8d")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E3%83%A1%E3%83%BC%E3%83%AB%E3%81%AE%E5%88%B0%E9%81%94%E7%8E%87%E3%82%92%E4%B8%8A%E3%81%92%E3%82%8B"},"\u30e1\u30fc\u30eb\u306e\u5230\u9054\u7387\u3092\u4e0a\u3052\u308b"))),(0,r.kt)("h3",{id:"\u524d\u63d0\u6761\u4ef6"},"\u524d\u63d0\u6761\u4ef6"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u672c\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u30e1\u30fc\u30eb\u306e\u9001\u4fe1\u306bblastengine\uff08\u30d6\u30e9\u30b9\u30c8\u30a8\u30f3\u30b8\u30f3\uff09\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u30b5\u30fc\u30d3\u30b9\u306e\u8a73\u7d30\u306f",(0,r.kt)("a",{parentName:"p",href:"https://blastengine.jp/"},"blastengine"),"\u3068\u305d\u306e",(0,r.kt)("a",{parentName:"p",href:"https://blastengine.jp/documents/"},"API\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),"\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002  "),(0,r.kt)("p",{parentName:"admonition"},"\u307e\u305f\u3001SPF/DKIM\u306e\u8a2d\u5b9a\u3092\u3059\u308b\u306e\u3067from\u306e\u30e1\u30fc\u30eb\u306b\u4f7f\u7528\u3059\u308b\u30c9\u30e1\u30a4\u30f3\u306f\u81ea\u8eab\u304c\u6240\u6709\u3057\u3066\u3044\u308b\u3082\u306e\u3092\u5229\u7528\u3059\u308b\u3053\u3068\u3068\u3057\u307e\u3059\u3002")),(0,r.kt)("h2",{id:"blastengine\u306e\u8a2d\u5b9a"},"blastengine\u306e\u8a2d\u5b9a"),(0,r.kt)("p",null,"\u307e\u305a\u306f",(0,r.kt)("a",{parentName:"p",href:"https://blastengine.jp/"},"blastengine"),"\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3066\u3001\u7121\u6599\u30c8\u30e9\u30a4\u30a2\u30eb\u306b\u767b\u9332\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/e342dee64d1605373031dbcc3e0602f0.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/e342dee64d1605373031dbcc3e0602f0.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"\u30c8\u30e9\u30a4\u30a2\u30eb\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u30ed\u30b0\u30a4\u30f3\u3057\u305f\u3089","[API\u9023\u643a\u3067\u8a66\u3059]","\u30bf\u30d6\u306e","[\u30a2\u30c9\u30ec\u30b9\u767b\u9332]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001blastengine\u304b\u3089\u306e\u914d\u4fe1\u3092\u8a31\u53ef\u3059\u308b\u30a2\u30c9\u30ec\u30b9\u3092\u5165\u529b\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/24730e7df6d12a0f28cc719581c3a0c1.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/24730e7df6d12a0f28cc719581c3a0c1.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"\u7d9a\u3044\u3066\u3001API\u30ad\u30fc\u306e\u53d6\u5f97\u3092\u3057\u307e\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","[\u8a2d\u5b9a\u30da\u30fc\u30b8]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066blastengine\u306e\u8a2d\u5b9a\u30da\u30fc\u30b8\u306b\u9077\u79fb\u3057\u307e\u3059\u3002  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/3152f3a91b517ab3853739f4815f27a1.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/3152f3a91b517ab3853739f4815f27a1.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"API\u30ad\u30fc\u306e","[\u78ba\u8a8d\u30fb\u518d\u767a\u884c]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/924c4a21ee53270cdab9b9374f4aae6b.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/924c4a21ee53270cdab9b9374f4aae6b.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"API\u30ad\u30fc\u304c\u8868\u793a\u3055\u308c\u308b\u306e\u3067\u30e1\u30e2\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/3150681ecd00867e78e1db73956812e9.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/3150681ecd00867e78e1db73956812e9.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"\u307e\u305f\u3001",(0,r.kt)("a",{parentName:"p",href:"https://app.engn.jp/be/admin/account"},"\u30a2\u30ab\u30a6\u30f3\u30c8\u7ba1\u7406"),"\u306e\u30da\u30fc\u30b8\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3001ID\u3092\u30e1\u30e2\u3057\u307e\u3059\u3002  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/6e7ec78852bf9b7eb06c055ecf07586a.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/6e7ec78852bf9b7eb06c055ecf07586a.png",alt:"Image from Gyazo"})),(0,r.kt)("h2",{id:"kuroco\u306e\u8a2d\u5b9a"},"Kuroco\u306e\u8a2d\u5b9a"),(0,r.kt)("h3",{id:"\u30b7\u30fc\u30af\u30ec\u30c3\u30c8\u3092\u767b\u9332\u3059\u308b"},"\u30b7\u30fc\u30af\u30ec\u30c3\u30c8\u3092\u767b\u9332\u3059\u308b"),(0,r.kt)("p",null,"Kuroco\u306e\u7ba1\u7406\u753b\u9762\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3001","[\u74b0\u5883\u8a2d\u5b9a]"," -> ","[\u30b7\u30fc\u30af\u30ec\u30c3\u30c8]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/25b831fd4835ad993f02298629b9e8cf.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/25b831fd4835ad993f02298629b9e8cf.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"[\u8ffd\u52a0]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/c51de1ecc8ead6fa837c6492757a7276.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/c51de1ecc8ead6fa837c6492757a7276.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"\u4ee5\u4e0b\u306eblastengine\u306e\u7ba1\u7406\u753b\u9762\u3067\u78ba\u8a8d\u3057\u305fAPI\u30ad\u30fc\u3068\u3001ID\u3092\u767b\u9332\u3057\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u9805\u76ee"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u5024"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u540d\u524d"),(0,r.kt)("td",{parentName:"tr",align:"left"},"BLASTENGINE_API_KEY")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5024"),(0,r.kt)("td",{parentName:"tr",align:"left"},"blastengine\u306eAPI\u30ad\u30fc")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u9805\u76ee"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u5024"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u540d\u524d"),(0,r.kt)("td",{parentName:"tr",align:"left"},"BLASTENGINE_ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5024"),(0,r.kt)("td",{parentName:"tr",align:"left"},"blastengine\u306eID")))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/e74f1f77c4739eb2ce2ebab7d404ac63.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/e74f1f77c4739eb2ce2ebab7d404ac63.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"\u4ee5\u4e0a\u3067blastengine\u3092\u5229\u7528\u3059\u308b\u6e96\u5099\u304c\u6574\u3044\u307e\u3057\u305f\u3002"),(0,r.kt)("h3",{id:"\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u3092\u767b\u9332\u3059\u308b"},"\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u3092\u767b\u9332\u3059\u308b"),(0,r.kt)("p",null,"blastengine\u3092\u5229\u7528\u3059\u308b\u6e96\u5099\u304c\u3067\u304d\u305f\u3089\u3001SendGrid\u306b\u3088\u308b\u30e1\u30fc\u30eb\u9001\u4fe1\u3092blastengine\u306b\u4ee3\u66ff\u3059\u308b\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u3092\u66f8\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"[\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3]"," -> ","[\u30ab\u30b9\u30bf\u30e0\u51e6\u7406]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/45a3b82e8fec3d1ad46a72c0bf8d394b.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/45a3b82e8fec3d1ad46a72c0bf8d394b.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"[\u8ffd\u52a0]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/471bc146570ff60efb362ece59b7fbe1.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/471bc146570ff60efb362ece59b7fbe1.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u9805\u76ee"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u5024"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30bf\u30a4\u30c8\u30eb"),(0,r.kt)("td",{parentName:"tr",align:"left"},"sending_email_with_blastengine")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8b58\u5225\u5b50"),(0,r.kt)("td",{parentName:"tr",align:"left"},"sending_email_with_blastengine")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30c8\u30ea\u30ac"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30e1\u30fc\u30eb\u9001\u4fe1\u65b9\u6cd5\uff08SendGrid\uff09\u3092\u4ee3\u66ff")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u51e6\u7406"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4ee5\u4e0b\u306e\u5185\u5bb9")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-smarty",metastring:'title="sending_email_with_blastengine"',title:'"sending_email_with_blastengine"'},"{* Create BearerToken *}\n{secret var='apiKey' key='BLASTENGINE_API_KEY'}\n{secret var='id' key='BLASTENGINE_ID'}\n{rcms_hash var='token' data=\"`$id``$apiKey`\" algo=\"sha256\"}\n{assign var='BearerToken' value=$token|strtolower|base64_encode}\n\n{* Set Request Headers *}\n{append var=headers value=\"Authorization: Bearer `$BearerToken`\"}\n{append var=headers value=\"Content-Type: application/json\"}\n{append var=headers value=\"Accept-Language: ja-JP\"}\n\n{* Set Body *}\n{assign var='body' value=$payload|@json_decode}\n{assign var='body.from.email' value=\"noreply@kuroco-mail.app\"}\n\n{* Send Request *}\n{api\n    endpoint=\"https://app.engn.jp/api/v1/deliveries/transaction\"\n    method='POST'\n    headers=$headers\n    body=$body\n    var=response\n    status_var=status\n}\n\n{logger msg1=\"blastengine_mail_log\" msg2=$body msg3=$response}\n{assign var='is_mail_sent' value=true}\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"noreply@kuroco-mail.app"),"\u306e\u90e8\u5206\u306f\u81ea\u8eab\u306e\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u306b\u5909\u66f4\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/28478906d91560352ad8a09951298cef.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/28478906d91560352ad8a09951298cef.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"\u5165\u529b\u304c\u3067\u304d\u305f\u3089","[\u8ffd\u52a0\u3059\u308b]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"\u52d5\u4f5c\u306e\u78ba\u8a8d"},"\u52d5\u4f5c\u306e\u78ba\u8a8d"),(0,r.kt)("p",null,"\u5b9f\u969b\u306bKuroco\u304b\u3089\u306e\u30e1\u30fc\u30eb\u3092\u9001\u4fe1\u3057\u3066\u307f\u307e\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u52d5\u4f5c\u306e\u78ba\u8a8d\u306e\u305f\u3081\u3001\u30d1\u30b9\u30ef\u30fc\u30c9\u30ea\u30de\u30a4\u30f3\u30c0\u30fc\u3092\u4f7f\u7528\u3057\u3066\u307f\u307e\u3059\u3002"),(0,r.kt)("p",null,"Kuroco\u306e\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3001","[\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u5fd8\u308c\u305f\u5834\u5408\u306f\u3053\u3061\u3089]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/2f585084835c88fda19163c26eabdf5f.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/2f585084835c88fda19163c26eabdf5f.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"blastengine\u304b\u3089\u306e\u914d\u4fe1\u3092\u8a31\u53ef\u3057\u305f\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u5165\u529b\u3057\u3066\u3001","[\u9001\u4fe1\u3059\u308b]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/71089ec62b43826f3812de3f23ef7194.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/71089ec62b43826f3812de3f23ef7194.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"\u5c4a\u3044\u305f\u30e1\u30fc\u30eb\u3092\u78ba\u8a8d\u3059\u308b\u3068\u3001from\u304c\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u5185\u306e\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u306b\u306a\u3063\u3066\u304a\u308a\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"besender-s.jp \u7d4c\u7531"),"\u306e\u8868\u793a\u304c\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/e3da9e6d15f41149ec177a463419b6f0.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/e3da9e6d15f41149ec177a463419b6f0.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"\u307e\u305f\u3001blastengine\u306e",(0,r.kt)("a",{parentName:"p",href:"https://app.engn.jp/be/admin/logs"},"\u914d\u4fe1\u30ed\u30b0"),"\u3092\u78ba\u8a8d\u3059\u308b\u3068\u3001\u8a72\u5f53\u306e\u30e1\u30fc\u30eb\u304cblastengine\u304b\u3089\u9001\u3089\u308c\u305f\u3053\u3068\u304c\u5206\u304b\u308a\u307e\u3059\u3002  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/6c89ebbece9c5035d88769182c3e5349.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/6c89ebbece9c5035d88769182c3e5349.png",alt:"Image from Gyazo"})),(0,r.kt)("h2",{id:"\u30e1\u30fc\u30eb\u306e\u5230\u9054\u7387\u3092\u4e0a\u3052\u308b"},"\u30e1\u30fc\u30eb\u306e\u5230\u9054\u7387\u3092\u4e0a\u3052\u308b"),(0,r.kt)("p",null,"\u3053\u3053\u307e\u3067\u3067\u3001blastengine\u3092\u5229\u7528\u3057\u305f\u30e1\u30fc\u30eb\u306e\u9001\u4fe1\u306f\u3067\u304d\u3066\u3044\u307e\u3059\u304c\u3001\n\u9001\u4fe1\u3057\u305f\u30e1\u30fc\u30eb\u304c\u8ff7\u60d1\u30e1\u30fc\u30eb\u3068\u5224\u65ad\u3055\u308c\u308b\u306e\u3092\u9632\u3050\u305f\u3081\u306b\u3001SPF\u30ec\u30b3\u30fc\u30c9\u3068DKIM\u306e\u8a2d\u5b9a\u3092\u3057\u3066\u30e1\u30fc\u30eb\u8a8d\u8a3c\u3092\u5b9f\u65bd\u3057\u307e\u3059\u3002  "),(0,r.kt)("p",null,"\u30e1\u30fc\u30eb\u8a8d\u8a3c\u3092\u5b9f\u65bd\u3059\u308b\u3053\u3068\u3067\u3001\u30e1\u30fc\u30eb\u306e\u306a\u308a\u3059\u307e\u3057\u3092\u9632\u304e\u3001\u5b9f\u969b\u306b\u30e1\u30fc\u30eb\u3092\u9001\u4fe1\u3057\u305f\u306e\u304c\u30c9\u30e1\u30a4\u30f3\u6240\u6709\u8005\u3067\u3042\u308b\u3068\u5224\u65ad\u3067\u304d\u307e\u3059\u3002  "),(0,r.kt)("p",null,"SPF/DKIM\u306e\u8a2d\u5b9a\u304c\u3055\u308c\u3066\u3044\u306a\u3044\u30e1\u30fc\u30eb\u306b\u5bfe\u3059\u308b\u51e6\u7406\u304c\u5e74\u3005\u53b3\u3057\u304f\u306a\u3063\u3066\u3044\u307e\u3059\u306e\u3067\u5fc5\u305a\u5b9f\u65bd\u3059\u308b\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://support.google.com/mail/answer/81126"},"\u30e1\u30fc\u30eb\u9001\u4fe1\u8005\u306e\u30ac\u30a4\u30c9\u30e9\u30a4\u30f3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blastengine.jp/blog_content/spf_basic/"},"SPF\u8a8d\u8a3c\u304c\u5fc5\u8981\u306a\u7406\u7531\u3068\u8a2d\u5b9a\u65b9\u6cd5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blastengine.jp/blog_content/dkim_basic/"},"\u3010\u56f3\u89e3\u3011\u521d\u3081\u3066\u3067\u3082\u8179\u843d\u3061\uff01DKIM\u306e\u4ed5\u7d44\u307f\u3068\u8a2d\u5b9a\u65b9\u6cd5")))),(0,r.kt)("h3",{id:"spf\u30ec\u30b3\u30fc\u30c9\u3092\u8a2d\u5b9a\u3059\u308b"},"SPF\u30ec\u30b3\u30fc\u30c9\u3092\u8a2d\u5b9a\u3059\u308b"),(0,r.kt)("p",null,"\u30c9\u30e1\u30a4\u30f3\u7ba1\u7406\u30b5\u30fc\u30d3\u30b9\u3067\u4ee5\u4e0b\u306eTXT\u30ec\u30b3\u30fc\u30c9\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u30db\u30b9\u30c8\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"left"},"VALUE"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7a7a\u6b04"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TXT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"v=spf1 include:spf.besender.jp ~all")))),(0,r.kt)("p",null,"\u8a2d\u5b9a\u304c\u3067\u304d\u305f\u3089",(0,r.kt)("a",{parentName:"p",href:"https://mxtoolbox.com/spf.aspx"},"MxToolbox\u306eSPF Record Check"),"\u3067\u3001\u6b63\u3057\u304f\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u304b\u78ba\u8a8d\u3057\u307e\u3059\u3002  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/84c9f0f754fcddd12ff14b38369d25d4.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/84c9f0f754fcddd12ff14b38369d25d4.png",alt:"Image from Gyazo"})),(0,r.kt)("h3",{id:"dkim\u3092\u8a2d\u5b9a\u3059\u308b"},"DKIM\u3092\u8a2d\u5b9a\u3059\u308b"),(0,r.kt)("p",null,"\u6b21\u306bDKIM\u306e\u8a2d\u5b9a\u3092\u3057\u307e\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u307e\u305a\u3001\u516c\u958b\u9375\u30fb\u79d8\u5bc6\u9375\u306e\u30da\u30a2\u3092\u6e96\u5099\u3057\u3001blastengine\u306b\u79d8\u5bc6\u9375\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002  "),(0,r.kt)("h4",{id:"\u79d8\u5bc6\u9375\u516c\u958b\u9375\u306e\u751f\u6210"},"\u79d8\u5bc6\u9375\u30fb\u516c\u958b\u9375\u306e\u751f\u6210"),(0,r.kt)("p",null,"\u79d8\u5bc6\u9375\u306f\u30ed\u30fc\u30ab\u30eb\u74b0\u5883\u3067OpenSSL\u306e\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u30c4\u30fc\u30eb\u3092\u4f7f\u7528\u3057\u3066\u3001\u751f\u6210\u3057\u307e\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u307e\u305a\u3001\u30bf\u30fc\u30df\u30ca\u30eb\u958b\u3044\u3066\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3067OpenSSL\u304c\u5229\u7528\u53ef\u80fd\u304b\u78ba\u8a8d\u3057\u307e\u3059\u3002  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"openssl version\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Windows\u306e\u5834\u5408\u306a\u3069\u3067OpenSSL\u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u306f\u5225\u9014\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,r.kt)("p",null,"\u6b21\u306b\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3067\u79d8\u5bc6\u9375\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"openssl genpkey -algorithm RSA -out private_key.pem\n")),(0,r.kt)("p",null,"\u516c\u958b\u9375\u306f\u3001OpenSSL\u3092\u4f7f\u7528\u3057\u3066\u3001\u79d8\u5bc6\u9375\u304b\u3089\u62bd\u51fa\u3057\u307e\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u4ee5\u4e0b\u304c\u305d\u306e\u30b3\u30de\u30f3\u30c9\u3067\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"openssl rsa -pubout -in private_key.pem -out public_key.pem\n")),(0,r.kt)("h4",{id:"blastengine\u306b\u767b\u9332"},"blastengine\u306b\u767b\u9332"),(0,r.kt)("p",null,"\u4f5c\u6210\u3057\u305f\u79d8\u5bc6\u9375\u3092blastengine\u306b\u767b\u9332\u3057\u307e\u3059\u3002    "),(0,r.kt)("p",null,"blastengine\u306e",(0,r.kt)("a",{parentName:"p",href:"https://app.engn.jp/be/admin/settings"},"\u8a2d\u5b9a\u30da\u30fc\u30b8"),"\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3066DKIM\u4f5c\u6210\u8005\u7f72\u540d\u306e\u8a2d\u5b9a\u306e","[\u78ba\u8a8d\u30fb\u5909\u66f4]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/792b66373c8baaa13115e040809cd4f4.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/792b66373c8baaa13115e040809cd4f4.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"DKIM\u4f5c\u6210\u8005\u7f72\u540d\u306e\u8a2d\u5b9a\u304c\u8868\u793a\u3055\u308c\u308b\u306e\u3067\u3001\u65b0\u898f\u767b\u9332\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001\u4ee5\u4e0b\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u9805\u76ee"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u5024"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30bb\u30ec\u30af\u30bf"),(0,r.kt)("td",{parentName:"tr",align:"left"},"kuroco")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30c9\u30e1\u30a4\u30f3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"from\u30e1\u30fc\u30eb\u3067\u5229\u7528\u3059\u308b\u30c9\u30e1\u30a4\u30f3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u79d8\u5bc6\u9375"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5148\u307b\u3069\u4f5c\u6210\u3057\u305f",(0,r.kt)("inlineCode",{parentName:"td"},"-----BEGIN PRIVATE KEY-----"),"\u304b\u3089\u59cb\u307e\u308b\u79d8\u5bc6\u9375")))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/ae34738520eca91c1f75de8e78e785d2.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/ae34738520eca91c1f75de8e78e785d2.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"\u5165\u529b\u304c\u5b8c\u4e86\u3057\u305f\u3089","[\u78ba\u8a8d]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u767b\u9332\u3057\u307e\u3059\u3002  "),(0,r.kt)("h4",{id:"dns\u3092\u8a2d\u5b9a"},"DNS\u3092\u8a2d\u5b9a"),(0,r.kt)("p",null,"\u30c9\u30e1\u30a4\u30f3\u7ba1\u7406\u30b5\u30fc\u30d3\u30b9\u3067\u4ee5\u4e0b\u306eTXT\u30ec\u30b3\u30fc\u30c9\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u30db\u30b9\u30c8\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"left"},"VALUE"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"kuroco._domainkey"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TXT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"v=DKIM1; k=rsa; p=",(0,r.kt)("inlineCode",{parentName:"td"},"\u516c\u958b\u9375\u306e-----BEGIN PUBLIC KEY-----\u3068-----END PUBLIC KEY-----\u3092\u629c\u3044\u305f\u90e8\u5206"))))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"VALUE\u306e\u9577\u3055\u304c\u8a2d\u5b9a\u3067\u304d\u308b\u6587\u5b57\u6570\u3092\u8d85\u3048\u308b\u5834\u5408\u306fTXT\u30ec\u30b3\u30fc\u30c9\u3092\u5206\u5272\u3057\u3066\u767b\u9332\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u5bfe\u5fdc\u304c\u5fc5\u8981\u306a\u5834\u5408\u306f\u30c9\u30e1\u30a4\u30f3\u7ba1\u7406\u30b5\u30fc\u30d3\u30b9\u306b\u554f\u3044\u5408\u308f\u305b\u3066\u8a2d\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,r.kt)("p",null,"\u8a2d\u5b9a\u304c\u3067\u304d\u305f\u3089",(0,r.kt)("a",{parentName:"p",href:"https://mxtoolbox.com/dkim.aspx"},"MxToolbox\u306eDKIM Record Lookup"),"\u3067\u3001\u6b63\u3057\u304f\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u304b\u78ba\u8a8d\u3057\u307e\u3059\u3002  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/38fcf2313f9de8c460af71b5773b6f97.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/38fcf2313f9de8c460af71b5773b6f97.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"\u518d\u5ea6Kuroco\u304b\u3089\u306e\u30e1\u30fc\u30eb\u3092\u9001\u4fe1\u3057\u3066\u78ba\u8a8d\u3059\u308b\u3068\u3001from\u304c\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u5185\u306e\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u306b\u306a\u3063\u3066\u304a\u308a\u3001\u4eca\u5ea6\u306f",(0,r.kt)("inlineCode",{parentName:"p"},"besender-s.jp \u7d4c\u7531"),"\u306e\u8868\u793a\u304c\u7121\u3044\u3053\u3068\u3092\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/caed71f08b416c58117d17a481fbef70.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/caed71f08b416c58117d17a481fbef70.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"\u4ee5\u4e0a\u3067\u3001\u4efb\u610f\u306e\u30e1\u30fc\u30eb\u914d\u4fe1\u30b5\u30fc\u30d3\u30b9\u3092\u5229\u7528\u3059\u308b\u8a2d\u5b9a\u306f\u5b8c\u4e86\u3067\u3059\u3002"),(0,r.kt)("h2",{id:"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"},"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ja/docs/reference/trigger-variables/"},"\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u306b\u5229\u7528\u3067\u304d\u308b\u30c8\u30ea\u30ac\u3068\u5909\u6570\u306e\u4e00\u89a7")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ja/docs/reference/smarty-plugin/"},"Smarty\u30d7\u30e9\u30b0\u30a4\u30f3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ja/docs/reference/smarty-php-function/"},"Kuroco\u306eSmarty\u3067\u5229\u7528\u53ef\u80fd\u306aPHP\u95a2\u6570"))))}c.isMDXComponent=!0}}]);