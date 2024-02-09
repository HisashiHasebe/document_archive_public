"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[66237],{3905:(t,a,e)=>{e.d(a,{Zo:()=>i,kt:()=>k});var r=e(67294);function o(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function n(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?n(Object(e),!0).forEach((function(a){o(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):n(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function p(t,a){if(null==t)return{};var e,r,o=function(t,a){if(null==t)return{};var e,r,o={},n=Object.keys(t);for(r=0;r<n.length;r++)e=n[r],a.indexOf(e)>=0||(o[e]=t[e]);return o}(t,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(r=0;r<n.length;r++)e=n[r],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}var l=r.createContext({}),m=function(t){var a=r.useContext(l),e=a;return t&&(e="function"==typeof t?t(a):c(c({},a),t)),e},i=function(t){var a=m(t.components);return r.createElement(l.Provider,{value:a},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var a=t.children;return r.createElement(r.Fragment,{},a)}},f=r.forwardRef((function(t,a){var e=t.components,o=t.mdxType,n=t.originalType,l=t.parentName,i=p(t,["components","mdxType","originalType","parentName"]),s=m(e),f=o,k=s["".concat(l,".").concat(f)]||s[f]||d[f]||n;return e?r.createElement(k,c(c({ref:a},i),{},{components:e})):r.createElement(k,c({ref:a},i))}));function k(t,a){var e=arguments,o=a&&a.mdxType;if("string"==typeof t||o){var n=e.length,c=new Array(n);c[0]=f;var p={};for(var l in a)hasOwnProperty.call(a,l)&&(p[l]=a[l]);p.originalType=t,p[s]="string"==typeof t?t:o,c[1]=p;for(var m=2;m<n;m++)c[m]=e[m];return r.createElement.apply(null,c)}return r.createElement.apply(null,e)}f.displayName="MDXCreateElement"},88929:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>n,metadata:()=>p,toc:()=>m});var r=e(87462),o=(e(67294),e(3905));const n={title:"\u304a\u554f\u3044\u5408\u308f\u305b\u306e\u53d7\u4fe1\u901a\u77e5\u3092Slack\u3067\u9001\u4fe1\u3059\u308b",description:"Kuroco\u306fSlack\u3068\u306eAPI\u9023\u643a\u6a5f\u80fd\u3092\u6301\u3063\u3066\u3044\u307e\u3059\u3002API\u9023\u643a\u3092\u3059\u308b\u3068Slack\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u8aad\u8fbc\u53ca\u3073\u3001Slack\u30c1\u30e3\u30f3\u30cd\u30eb\u3078\u306e\u6295\u7a3f\u304c\u5bb9\u6613\u306b\u884c\u3048\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"},c=void 0,p={unversionedId:"tutorials/send-slack-notification-after-a-form-has-been-submitted",id:"tutorials/send-slack-notification-after-a-form-has-been-submitted",title:"\u304a\u554f\u3044\u5408\u308f\u305b\u306e\u53d7\u4fe1\u901a\u77e5\u3092Slack\u3067\u9001\u4fe1\u3059\u308b",description:"Kuroco\u306fSlack\u3068\u306eAPI\u9023\u643a\u6a5f\u80fd\u3092\u6301\u3063\u3066\u3044\u307e\u3059\u3002API\u9023\u643a\u3092\u3059\u308b\u3068Slack\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u8aad\u8fbc\u53ca\u3073\u3001Slack\u30c1\u30e3\u30f3\u30cd\u30eb\u3078\u306e\u6295\u7a3f\u304c\u5bb9\u6613\u306b\u884c\u3048\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/tutorials/send-slack-notification-after-a-form-has-been-submitted.md",sourceDirName:"tutorials",slug:"/tutorials/send-slack-notification-after-a-form-has-been-submitted",permalink:"/ja/docs/tutorials/send-slack-notification-after-a-form-has-been-submitted",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/tutorials/send-slack-notification-after-a-form-has-been-submitted.md",tags:[],version:"current",frontMatter:{title:"\u304a\u554f\u3044\u5408\u308f\u305b\u306e\u53d7\u4fe1\u901a\u77e5\u3092Slack\u3067\u9001\u4fe1\u3059\u308b",description:"Kuroco\u306fSlack\u3068\u306eAPI\u9023\u643a\u6a5f\u80fd\u3092\u6301\u3063\u3066\u3044\u307e\u3059\u3002API\u9023\u643a\u3092\u3059\u308b\u3068Slack\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u8aad\u8fbc\u53ca\u3073\u3001Slack\u30c1\u30e3\u30f3\u30cd\u30eb\u3078\u306e\u6295\u7a3f\u304c\u5bb9\u6613\u306b\u884c\u3048\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"},sidebar:"documentationSidebar",previous:{title:"OpenAI\u3068\u9023\u643a\u3057\u3066Kuroco\u306eAPI\u3092\u901a\u3057\u3066AI\u306b\u3088\u308b\u56de\u7b54\u3092\u751f\u6210\u3059\u308b",permalink:"/ja/docs/tutorials/obtaining-chatgpt-responses-through-kuroco-openai-endpoint"},next:{title:"reCAPTCHA\u3092\u5229\u7528\u3057\u305f\u30d5\u30a9\u30fc\u30e0\u3092\u4f5c\u6210\u3059\u308b",permalink:"/ja/docs/tutorials/using-recaptcha"}},l={},m=[{value:"\u6982\u8981",id:"\u6982\u8981",level:2},{value:"\u5b66\u3079\u308b\u3053\u3068",id:"\u5b66\u3079\u308b\u3053\u3068",level:3},{value:"Slack\u30a2\u30d7\u30ea\u306e\u4f5c\u6210",id:"slack\u30a2\u30d7\u30ea\u306e\u4f5c\u6210",level:2},{value:"App\u3092\u4f5c\u6210\u3059\u308b",id:"app\u3092\u4f5c\u6210\u3059\u308b",level:3},{value:"App\u3092Workspace\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"app\u3092workspace\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",level:3},{value:"App\u306e\u60c5\u5831\u7de8\u96c6",id:"app\u306e\u60c5\u5831\u7de8\u96c6",level:3},{value:"\u30a2\u30d7\u30ea\u306e\u78ba\u8a8d",id:"\u30a2\u30d7\u30ea\u306e\u78ba\u8a8d",level:3},{value:"Slack\u30c1\u30e3\u30f3\u30cd\u30eb\u3078\u30a2\u30d7\u30ea\u306e\u8ffd\u52a0",id:"slack\u30c1\u30e3\u30f3\u30cd\u30eb\u3078\u30a2\u30d7\u30ea\u306e\u8ffd\u52a0",level:3},{value:"Kuroco\u306e\u8a2d\u5b9a",id:"kuroco\u306e\u8a2d\u5b9a",level:2},{value:"Kuroco\u3068Slack\u306e\u9023\u643a",id:"kuroco\u3068slack\u306e\u9023\u643a",level:3},{value:"\u30e1\u30c3\u30bb\u30fc\u30b8\u3072\u306a\u5f62\u306e\u8abf\u6574",id:"\u30e1\u30c3\u30bb\u30fc\u30b8\u3072\u306a\u5f62\u306e\u8abf\u6574",level:3},{value:"TIPS",id:"tips",level:4},{value:"\u30d5\u30a9\u30fc\u30e0\u57fa\u672c\u8a2d\u5b9a",id:"\u30d5\u30a9\u30fc\u30e0\u57fa\u672c\u8a2d\u5b9a",level:3},{value:"\u52d5\u4f5c\u78ba\u8a8d",id:"\u52d5\u4f5c\u78ba\u8a8d",level:2},{value:"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8",id:"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8",level:2}],i={toc:m},s="wrapper";function d(t){let{components:a,...n}=t;return(0,o.kt)(s,(0,r.Z)({},i,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u6982\u8981"},"\u6982\u8981"),(0,o.kt)("p",null,"Kuroco\u306fSlack\u3068\u306eAPI\u9023\u643a\u6a5f\u80fd\u3092\u6301\u3063\u3066\u3044\u307e\u3059\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","API\u9023\u643a\u3092\u3059\u308b\u3068Slack\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u8aad\u8fbc\u53ca\u3073\u3001Slack\u30c1\u30e3\u30f3\u30cd\u30eb\u3078\u306e\u6295\u7a3f\u304c\u5bb9\u6613\u306b\u884c\u3048\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002  "),(0,o.kt)("p",null,"\u3053\u3053\u3067\u306fSlack\u3068\u9023\u643a\u3057\u3066\u3001\u304a\u554f\u3044\u5408\u308f\u305b\u306e\u53d7\u4fe1\u901a\u77e5\u3092Slack\u3078\u6295\u7a3f\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,o.kt)("h3",{id:"\u5b66\u3079\u308b\u3053\u3068"},"\u5b66\u3079\u308b\u3053\u3068"),(0,o.kt)("p",null,"\u4ee5\u4e0b\u306e\u624b\u9806\u3067\u304a\u554f\u3044\u5408\u308f\u305b\u306e\u53d7\u4fe1\u901a\u77e5\u3092Slack\u3078\u6295\u7a3f\u3057\u307e\u3059\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#slack%E3%82%A2%E3%83%97%E3%83%AA%E3%81%AE%E4%BD%9C%E6%88%90"},"Slack\u30a2\u30d7\u30ea\u306e\u4f5c\u6210")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#kuroco%E3%81%AE%E8%A8%AD%E5%AE%9A"},"Kuroco\u306e\u8a2d\u5b9a")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#%E5%8B%95%E4%BD%9C%E7%A2%BA%E8%AA%8D"},"\u52d5\u4f5c\u78ba\u8a8d"))),(0,o.kt)("h2",{id:"slack\u30a2\u30d7\u30ea\u306e\u4f5c\u6210"},"Slack\u30a2\u30d7\u30ea\u306e\u4f5c\u6210"),(0,o.kt)("p",null,"\u305d\u308c\u3067\u306fApp\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5\u3092\u8a18\u8f09\u3057\u307e\u3059\u3002"),(0,o.kt)("h3",{id:"app\u3092\u4f5c\u6210\u3059\u308b"},"App\u3092\u4f5c\u6210\u3059\u308b"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://api.slack.com/apps"},"Slack API"),"\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3001","[Create an App]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/e668c5bc17cc4680068a05bfb3b8434f.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/e668c5bc17cc4680068a05bfb3b8434f.png",alt:"Image (fetched from Gyazo)"}),"\n\u30dd\u30c3\u30d7\u30a2\u30c3\u30d7\u3067App\u4f5c\u6210\u753b\u9762\u304c\u8868\u793a\u3055\u308c\u308b\u306e\u3067\u3001","[From an app manifest]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/b516cfed5eb19c0c429264b42ea0617b.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/b516cfed5eb19c0c429264b42ea0617b.png",alt:"Image (fetched from Gyazo)"}),"\nWorkspace\u9078\u629e\u753b\u9762\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u300cPick a workspace to develop your app in:\u300d\u30d5\u30a3\u30fc\u30eb\u30c9\u3088\u308a\u3001App\u3092\u5229\u7528\u3059\u308bworkspace\u3092\u9078\u629e\u3057","[Next]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/bfd8157d34e6d10919c78a5aa8df0c70.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/bfd8157d34e6d10919c78a5aa8df0c70.png",alt:"Image (fetched from Gyazo)"}),"\nEnter app manifest below\u753b\u9762\u304c\u8868\u793a\u3055\u308c\u308b\u306e\u3067\u3001\u300cYAML\u300d\u306e\u30c6\u30ad\u30b9\u30c8\u30a8\u30ea\u30a2\u306b\u4e0b\u8a18\u3092\u8cbc\u308a\u4ed8\u3051\u307e\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/05af84f691c3ce19be77ed9c46ac2058.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/05af84f691c3ce19be77ed9c46ac2058.png",alt:"Image from Gyazo"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"_metadata:\n  major_version: 1\n  minor_version: 1\ndisplay_information:\n  name: KurocoNotification\nfeatures:\n  bot_user:\n    display_name: KurocoNotification\n    always_online: true\noauth_config:\n  scopes:\n    bot:\n      - chat:write\n      - im:write\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u4e0a\u8a18\u8a2d\u5b9a\u3067\u306f\u30dc\u30c3\u30c8\u304b\u3089Slack\u3078\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u8ffd\u52a0\u3092\u8a31\u53ef\u3057\u307e\u3059\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u30c1\u30e3\u30f3\u30cd\u30eb\u306e\u60c5\u5831\u3084\u6295\u7a3f\u6e08\u307f\u306e\u5185\u5bb9\u306e\u8aad\u307f\u8fbc\u307f\u7b49\u3092\u884c\u3044\u305f\u3044\u5834\u5408\u306fSlack\u306e\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9\u3092\u53c2\u8003\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","-",(0,o.kt)("a",{parentName:"p",href:"https://api.slack.com/reference/manifests"},"Create and configure apps with manifests"),(0,o.kt)("br",{parentName:"p"}),"\n","-",(0,o.kt)("a",{parentName:"p",href:"https://api.slack.com/legacy/oauth-scopes"},"OAuth Permission scopes"))),(0,o.kt)("p",null,"\u8cbc\u308a\u4ed8\u3051\u5f8c\u3001","[NEXT]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/ebb427257f9947a57a16800aa3ac766a.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/ebb427257f9947a57a16800aa3ac766a.png",alt:"Image from Gyazo"})),(0,o.kt)("p",null,"[Create]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001API\u306e\u4f5c\u6210\u304c\u5b8c\u4e86\u3067\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/fa8e63a798475bc9f0c1c9f59774a0d8.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/fa8e63a798475bc9f0c1c9f59774a0d8.png",alt:"Image from Gyazo"})),(0,o.kt)("h3",{id:"app\u3092workspace\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},"App\u3092Workspace\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,o.kt)("p",null,"\u6b21\u306b\u3001\u5148\u307b\u3069\u4f5c\u6210\u3057\u305fAPI\u3092Workspace\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002"),(0,o.kt)("p",null,"[Install to Workspace]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002  "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/5baa88cfef6d57d2a5a5b59db86e9746.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/5baa88cfef6d57d2a5a5b59db86e9746.png",alt:"Image from Gyazo"})),(0,o.kt)("p",null,"\u30a2\u30af\u30bb\u30b9\u6a29\u9650\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u753b\u9762\u304c\u8868\u793a\u3055\u308c\u308b\u306e\u3067\u3001","[\u8a31\u53ef\u3059\u308b]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/0721418961354224dd376b0ab8c80bdc.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/0721418961354224dd376b0ab8c80bdc.png",alt:"Image from Gyazo"})),(0,o.kt)("p",null,"\u6b21\u306b\u3001\u30c8\u30fc\u30af\u30f3\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002\u5de6\u30b5\u30a4\u30c9\u30d0\u30fc\u3088\u308a\u3001","[OAuth & Permissions]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/c00f3825f3fee66a8f1653f1eda3faad.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/c00f3825f3fee66a8f1653f1eda3faad.png",alt:"Image from Gyazo"})),(0,o.kt)("p",null,"\u300cBot User OAuth Token\u300d\u304c\u8868\u793a\u3055\u308c\u308b\u306e\u3067\u3001\u30b3\u30d4\u30fc\u3057\u307e\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/a47ea50f37f54e8859570e74f96b9d0d.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/a47ea50f37f54e8859570e74f96b9d0d.png",alt:"Image from Gyazo"})),(0,o.kt)("h3",{id:"app\u306e\u60c5\u5831\u7de8\u96c6"},"App\u306e\u60c5\u5831\u7de8\u96c6"),(0,o.kt)("p",null,"\u30c7\u30d5\u30a9\u30eb\u30c8\u3060\u3068App\u306e\u30a2\u30a4\u30b3\u30f3\u304c\u8868\u793a\u3055\u308c\u306a\u3044\u306e\u3067\u3001\u753b\u50cf\u8a2d\u5b9a\u3092\u3057\u307e\u3059\u3002\n\u5de6\u30b5\u30a4\u30c9\u30d0\u30fc\u3088\u308a","[Basic Information]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/74a29f2b989ec7ee14402d817409bf52.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/74a29f2b989ec7ee14402d817409bf52.png",alt:"Image from Gyazo"})),(0,o.kt)("p",null,"\u300cDisplay Information\u300d\u3088\u308a\u3001","[Add App Icon]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/072296a329667f736281048e2b5c901b.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/072296a329667f736281048e2b5c901b.png",alt:"Image from Gyazo"})),(0,o.kt)("p",null,"\u4eca\u56de\u306fKuroco\u306e\u30a2\u30a4\u30b3\u30f3\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u307e\u3057\u305f\u3002(\u753b\u50cf\u306f",(0,o.kt)("a",{target:"_blank",href:e(60425).Z},"\u3053\u3061\u3089"),"\u304b\u3089\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3067\u304d\u307e\u3059\u3002)\n\u753b\u50cf\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3055\u308c\u305f\u3089\u5b8c\u4e86\u3067\u3059\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u30a2\u30a4\u30b3\u30f3\u304c\u8a2d\u5b9a\u3055\u308c\u307e\u3057\u305f\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/7bd0bf41aa5528a09d6235c73762ad98.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/7bd0bf41aa5528a09d6235c73762ad98.png",alt:"Image from Gyazo"})),(0,o.kt)("h3",{id:"\u30a2\u30d7\u30ea\u306e\u78ba\u8a8d"},"\u30a2\u30d7\u30ea\u306e\u78ba\u8a8d"),(0,o.kt)("p",null,"Workspace\u3092\u78ba\u8a8d\u3059\u308b\u3068\u3001App\u306b\u300cKurocoNotification\u300d\u304c\u8ffd\u52a0\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u304c\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/b2625af80f869fc2a8d5568e485b7dfd.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/b2625af80f869fc2a8d5568e485b7dfd.png",alt:"Image from Gyazo"})),(0,o.kt)("h3",{id:"slack\u30c1\u30e3\u30f3\u30cd\u30eb\u3078\u30a2\u30d7\u30ea\u306e\u8ffd\u52a0"},"Slack\u30c1\u30e3\u30f3\u30cd\u30eb\u3078\u30a2\u30d7\u30ea\u306e\u8ffd\u52a0"),(0,o.kt)("p",null,"KurocoNotification\u304b\u3089\u306e\u901a\u77e5\u3092\u53d7\u3051\u308bSlack\u30c1\u30e3\u30f3\u30cd\u30eb\u3078App\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002  "),(0,o.kt)("p",null,"\u901a\u77e5\u3092\u53d7\u3051\u308b\u30c1\u30e3\u30f3\u30cd\u30eb\u3067\u3001\u30c1\u30e3\u30f3\u30cd\u30eb\u540d\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/4020f4f472054a42968be13015f3e600.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/4020f4f472054a42968be13015f3e600.png",alt:"Image from Gyazo"})),(0,o.kt)("p",null,"[\u30a4\u30f3\u30c6\u30b0\u30ec\u30fc\u30b7\u30e7\u30f3]","->","[App]","\u306e","[\u30a2\u30d7\u30ea\u3092\u8ffd\u52a0\u3059\u308b]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002  "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/f5b33b0fe4615be2801c5221d611f647.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/f5b33b0fe4615be2801c5221d611f647.png",alt:"Image from Gyazo"})),(0,o.kt)("p",null,"KurocoNotification\u306e\u30a2\u30d7\u30ea\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002  "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/24bca7292c0ec11ab2a3ebc44a19fd71.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/24bca7292c0ec11ab2a3ebc44a19fd71.png",alt:"Image from Gyazo"})),(0,o.kt)("h2",{id:"kuroco\u306e\u8a2d\u5b9a"},"Kuroco\u306e\u8a2d\u5b9a"),(0,o.kt)("h3",{id:"kuroco\u3068slack\u306e\u9023\u643a"},"Kuroco\u3068Slack\u306e\u9023\u643a"),(0,o.kt)("p",null,"Kuroco\u7ba1\u7406\u753b\u9762\u3088\u308a","[\u5916\u90e8\u30b7\u30b9\u30c6\u30e0\u9023\u643a]"," -> ","[Slack]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002  "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/31dc2f829d4290e7f9819136d1de35da.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/31dc2f829d4290e7f9819136d1de35da.png",alt:"Image from Gyazo"})),(0,o.kt)("p",null,"Slack\u9023\u643a\u8a2d\u5b9a\u753b\u9762\u304c\u8868\u793a\u3055\u308c\u308b\u306e\u3067\u3001\u300c\u6709\u52b9\u306b\u3059\u308b\u300d\u306b\u30c1\u30a7\u30c3\u30af\u3092\u5165\u308c\u307e\u3059\u3002\u300cBot User OAuth Token\u300d\u306b\u306f\u5148\u307b\u3069\u30b3\u30d4\u30fc\u3057\u305fBot User OAuth Token\u3092\u5165\u529b\u3057\u3001","[\u66f4\u65b0\u3059\u308b]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/524e32fc0461971f25916cd8cfe4312b.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/524e32fc0461971f25916cd8cfe4312b.png",alt:"Image from Gyazo"})),(0,o.kt)("p",null,"\u4ee5\u4e0a\u3067\u901a\u77e5\u3092Slack\u3067\u9001\u308b\u6e96\u5099\u304c\u6574\u3044\u307e\u3057\u305f\u3002"),(0,o.kt)("h3",{id:"\u30e1\u30c3\u30bb\u30fc\u30b8\u3072\u306a\u5f62\u306e\u8abf\u6574"},"\u30e1\u30c3\u30bb\u30fc\u30b8\u3072\u306a\u5f62\u306e\u8abf\u6574"),(0,o.kt)("p",null,"[\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3]","->","[\u30e1\u30c3\u30bb\u30fc\u30b8\u3072\u306a\u5f62]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002  "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/337cb4628fc2f37ee59dc4658cd307f2.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/337cb4628fc2f37ee59dc4658cd307f2.png",alt:"Image from Gyazo"})),(0,o.kt)("p",null,"[\u554f\u3044\u5408\u308f\u305b\u7740\u4fe1\u901a\u77e5\u30e1\u30fc\u30eb(\u7ba1\u7406\u8005\u5b9b)]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002  "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/74024a7550367129d8790615f1acdd10.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/74024a7550367129d8790615f1acdd10.png",alt:"Image from Gyazo"})),(0,o.kt)("p",null,"\u672c\u6587\u306e\u5192\u982d\u306b\u4ee5\u4e0b\u306e\u8a18\u8ff0\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-smarty"},"{*Slack\u901a\u77e5*}\n{capture name=slack_text_body}\n<!here>\n\u300c{$inquiryHeader.inquiry_name}\u300d\u3078\u306e\u304a\u554f\u3044\u5408\u308f\u305b\u304c\u5c4a\u304d\u307e\u3057\u305f\u3002\n\u5185\u5bb9\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\n{$smarty.const.ROOT_MNG_URL}/management/inquiry/inquiry_reply_edit/?inquiry_bn_id={$inquiry_bn_id}\n{/capture}\n{slack_post_message channel='\u304a\u554f\u3044\u5408\u308f\u305b\u901a\u77e5' text=$smarty.capture.slack_text_body}\n\n{*\u30e1\u30fc\u30eb\u901a\u77e5*}\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/2a928b0f6e1bdbde721d3660f4c2f2a9.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/2a928b0f6e1bdbde721d3660f4c2f2a9.png",alt:"Image from Gyazo"})),(0,o.kt)("p",null,"\u8a2d\u5b9a\u304c\u3067\u304d\u305f\u3089","[\u66f4\u65b0\u3059\u308b]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u5909\u66f4\u3092\u53cd\u6620\u3057\u307e\u3059\u3002  "),(0,o.kt)("h4",{id:"tips"},"TIPS"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u30e1\u30fc\u30eb\u901a\u77e5\u3092\u6b62\u3081\u3066Slack\u901a\u77e5\u306e\u307f\u306b\u3057\u305f\u3044\u5834\u5408\u306f\u3001","[\u72ec\u81ea\u8a2d\u5b9a]","\u304b\u3089","[\u30e1\u30fc\u30eb\u306e\u9001\u4fe1\u505c\u6b62]","\u306b1\u3092\u30bb\u30c3\u30c8\u3057\u307e\u3059\u3002",(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("img",{parentName:"li",src:"https://t.gyazo.com/teams/diverta/b43255e192879ef128775e90a6fc855c.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/b43255e192879ef128775e90a6fc855c.png",alt:"Image from Gyazo"})),(0,o.kt)("li",{parentName:"ul"},"Slack\u3067\u30e1\u30f3\u30b7\u30e7\u30f3\u3092",(0,o.kt)("inlineCode",{parentName:"li"},"@channel"),"\u306b\u3059\u308b\u5834\u5408\u306f",(0,o.kt)("inlineCode",{parentName:"li"},"<!channel>"),"\u3068\u66f8\u304d\u307e\u3059\u3002  "),(0,o.kt)("li",{parentName:"ul"},"Slack\u3067\u30e1\u30f3\u30b7\u30e7\u30f3\u3092\u500b\u4eba\u5b9b\u306b\u3059\u308b\u5834\u5408\u306f",(0,o.kt)("inlineCode",{parentName:"li"},"<@Slack\u306e\u30e1\u30f3\u30d0\u30fcID>"),"\u3068\u66f8\u304d\u307e\u3059\u3002")),(0,o.kt)("h3",{id:"\u30d5\u30a9\u30fc\u30e0\u57fa\u672c\u8a2d\u5b9a"},"\u30d5\u30a9\u30fc\u30e0\u57fa\u672c\u8a2d\u5b9a"),(0,o.kt)("p",null,"[\u30ad\u30e3\u30f3\u30da\u30fc\u30f3]","->","[\u30d5\u30a9\u30fc\u30e0]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002  "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/90c0104f0063041211a36c7bef46c553.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/90c0104f0063041211a36c7bef46c553.png",alt:"Image from Gyazo"})),(0,o.kt)("p",null,"\u30d5\u30a9\u30fc\u30e0\u306e\u30bf\u30a4\u30c8\u30eb\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/00f449ac3c9e94e4b7f46bc9481ad3b1.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/00f449ac3c9e94e4b7f46bc9481ad3b1.png",alt:"Image from Gyazo"})),(0,o.kt)("p",null,"\u57fa\u672c\u8a2d\u5b9a\u30bf\u30d6\u306e\u914d\u4fe1\u5148\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3067\u3001","[\u901a\u77e5\u3059\u308b]","\u306b\u30c1\u30a7\u30c3\u30af\u3092\u5165\u308c\u3066\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3068\u30bf\u30a4\u30c8\u30eb\u3092\u5165\u529b\u3057\u307e\u3059\u3002  "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/49aed60abf6e495cb8a19f4ea9b2c97a.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/49aed60abf6e495cb8a19f4ea9b2c97a.png",alt:"Image from Gyazo"})),(0,o.kt)("h2",{id:"\u52d5\u4f5c\u78ba\u8a8d"},"\u52d5\u4f5c\u78ba\u8a8d"),(0,o.kt)("p",null,"\u6700\u5f8c\u306b\u52d5\u4f5c\u78ba\u8a8d\u3092\u3057\u307e\u3059\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u7ba1\u7406\u8005\u5b9b\u306e\u901a\u77e5\u3092\u6709\u52b9\u306b\u3057\u305f\u30d5\u30a9\u30fc\u30e0\u3078\u56de\u7b54\u306e\u9001\u4fe1\u3092\u3059\u308b\u3068\u3001\u30e1\u30fc\u30eb\u306e\u901a\u77e5\u306b\u52a0\u3048\u3066\u3001Slack\u30c1\u30e3\u30f3\u30cd\u30eb\u3078\u306e\u901a\u77e5\u304c\u884c\u308f\u308c\u307e\u3059\u3002  "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/65afa4dd8c3c67fe40237c8e0081cb4d.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/65afa4dd8c3c67fe40237c8e0081cb4d.png",alt:"Image from Gyazo"})),(0,o.kt)("p",null,"\u4ee5\u4e0a\u3067\u304a\u554f\u3044\u5408\u308f\u305b\u306e\u53d7\u4fe1\u901a\u77e5\u3092Slack\u3067\u9001\u4fe1\u3067\u304d\u307e\u3057\u305f\u3002  "),(0,o.kt)("p",null,"\u540c\u69d8\u306e\u65b9\u6cd5\u3067\u627f\u8a8d\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u7b49\u306e\u4ed6\u306e\u901a\u77e5\u3082Slack\u901a\u77e5\u306b\u3067\u304d\u307e\u3059\u306e\u3067\u304a\u8a66\u3057\u304f\u3060\u3055\u3044\u3002  "),(0,o.kt)("h2",{id:"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"},"\u95a2\u9023\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/ja/docs/tutorials/setting-up-inquiry-forms/"},"Kuroco\u3068Nuxt.js\u3067\u3001\u30d5\u30a9\u30fc\u30e0\u753b\u9762\u3092\u69cb\u7bc9\u3059\u308b")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/ja/docs/faq/can-i-customize-my-thank-you-e-mail/"},"\u304a\u793c\u30e1\u30fc\u30eb\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3067\u304d\u307e\u3059\u304b\uff1f")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/ja/docs/reference/mail-variables/"},"\u30e1\u30c3\u30bb\u30fc\u30b8\u3072\u306a\u5f62\u306b\u5229\u7528\u3067\u304d\u308b\u5909\u6570\u4e00\u89a7"))))}d.isMDXComponent=!0},60425:(t,a,e)=>{e.d(a,{Z:()=>r});const r=e.p+"assets/files/kuroco_logo_512-d17af19e105bb73e3309eb6e20b56371.png"}}]);