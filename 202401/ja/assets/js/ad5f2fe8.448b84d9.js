"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[67943],{3905:(t,a,e)=>{e.d(a,{Zo:()=>u,kt:()=>g});var r=e(67294);function n(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,r)}return e}function p(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){n(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function d(t,a){if(null==t)return{};var e,r,n=function(t,a){if(null==t)return{};var e,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)e=l[r],a.indexOf(e)>=0||(n[e]=t[e]);return n}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)e=l[r],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(n[e]=t[e])}return n}var m=r.createContext({}),i=function(t){var a=r.useContext(m),e=a;return t&&(e="function"==typeof t?t(a):p(p({},a),t)),e},u=function(t){var a=i(t.components);return r.createElement(m.Provider,{value:a},t.children)},o="mdxType",k={inlineCode:"code",wrapper:function(t){var a=t.children;return r.createElement(r.Fragment,{},a)}},N=r.forwardRef((function(t,a){var e=t.components,n=t.mdxType,l=t.originalType,m=t.parentName,u=d(t,["components","mdxType","originalType","parentName"]),o=i(e),N=n,g=o["".concat(m,".").concat(N)]||o[N]||k[N]||l;return e?r.createElement(g,p(p({ref:a},u),{},{components:e})):r.createElement(g,p({ref:a},u))}));function g(t,a){var e=arguments,n=a&&a.mdxType;if("string"==typeof t||n){var l=e.length,p=new Array(l);p[0]=N;var d={};for(var m in a)hasOwnProperty.call(a,m)&&(d[m]=a[m]);d.originalType=t,d[o]="string"==typeof t?t:n,p[1]=d;for(var i=2;i<l;i++)p[i]=e[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,e)}N.displayName="MDXCreateElement"},29551:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>m,contentTitle:()=>p,default:()=>k,frontMatter:()=>l,metadata:()=>d,toc:()=>i});var r=e(87462),n=(e(67294),e(3905));const l={title:"Kuroco\u306eSmarty\u3067\u5229\u7528\u53ef\u80fd\u306aPHP\u95a2\u6570",description:"\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u3084\u30d0\u30c3\u30c1\u51e6\u7406\u306b\u3066Smarty\u30d7\u30e9\u30b0\u30a4\u30f3\u5229\u7528\u3067\u304d\u307e\u3059\u3002\u5909\u6570\u306e\u4fee\u98fe\u5b50\u3068\u3057\u3066\u5229\u7528\u53ef\u80fd\u306aPHP\u95a2\u6570\u3092\u307e\u3068\u3081\u307e\u3059\u3002"},p=void 0,d={unversionedId:"reference/smarty-php-function",id:"reference/smarty-php-function",title:"Kuroco\u306eSmarty\u3067\u5229\u7528\u53ef\u80fd\u306aPHP\u95a2\u6570",description:"\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u3084\u30d0\u30c3\u30c1\u51e6\u7406\u306b\u3066Smarty\u30d7\u30e9\u30b0\u30a4\u30f3\u5229\u7528\u3067\u304d\u307e\u3059\u3002\u5909\u6570\u306e\u4fee\u98fe\u5b50\u3068\u3057\u3066\u5229\u7528\u53ef\u80fd\u306aPHP\u95a2\u6570\u3092\u307e\u3068\u3081\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/reference/smarty-php-function.md",sourceDirName:"reference",slug:"/reference/smarty-php-function",permalink:"/ja/docs/reference/smarty-php-function",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/reference/smarty-php-function.md",tags:[],version:"current",frontMatter:{title:"Kuroco\u306eSmarty\u3067\u5229\u7528\u53ef\u80fd\u306aPHP\u95a2\u6570",description:"\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u3084\u30d0\u30c3\u30c1\u51e6\u7406\u306b\u3066Smarty\u30d7\u30e9\u30b0\u30a4\u30f3\u5229\u7528\u3067\u304d\u307e\u3059\u3002\u5909\u6570\u306e\u4fee\u98fe\u5b50\u3068\u3057\u3066\u5229\u7528\u53ef\u80fd\u306aPHP\u95a2\u6570\u3092\u307e\u3068\u3081\u307e\u3059\u3002"},sidebar:"documentationSidebar",previous:{title:"Kuroco\u3067\u5229\u7528\u3055\u308c\u308b\u5171\u901aObject\u578b\u5b9a\u7fa9",permalink:"/ja/docs/reference/general-object-type"},next:{title:"\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9",permalink:"/ja/docs/management/dashboard"}},m={},i=[{value:"\u5229\u7528\u53ef\u80fd\u306aPHP\u95a2\u6570",id:"\u5229\u7528\u53ef\u80fd\u306aphp\u95a2\u6570",level:2},{value:"if \u30b9\u30c6\u30fc\u30c8\u30e1\u30f3\u30c8",id:"if-\u30b9\u30c6\u30fc\u30c8\u30e1\u30f3\u30c8",level:3},{value:"\u4fee\u98fe\u5b50",id:"\u4fee\u98fe\u5b50",level:3}],u={toc:i},o="wrapper";function k(t){let{components:a,...e}=t;return(0,n.kt)(o,(0,r.Z)({},u,e,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u30ab\u30b9\u30bf\u30e0\u51e6\u7406\u3084\u30d0\u30c3\u30c1\u51e6\u7406\u306b\u3066Smarty\u30d7\u30e9\u30b0\u30a4\u30f3\u5229\u7528\u3067\u304d\u307e\u3059\u3002\n\u5909\u6570\u306e\u4fee\u98fe\u5b50\u3068\u3057\u3066\u5229\u7528\u53ef\u80fd\u306aPHP\u95a2\u6570\u3092\u307e\u3068\u3081\u307e\u3059\u3002"),(0,n.kt)("h2",{id:"\u5229\u7528\u53ef\u80fd\u306aphp\u95a2\u6570"},"\u5229\u7528\u53ef\u80fd\u306aPHP\u95a2\u6570"),(0,n.kt)("h3",{id:"if-\u30b9\u30c6\u30fc\u30c8\u30e1\u30f3\u30c8"},"if \u30b9\u30c6\u30fc\u30c8\u30e1\u30f3\u30c8"),(0,n.kt)("p",null,"Kuroco \u306eSmarty\u5229\u7528\u7b87\u6240\u306b\u304a\u3044\u3066\u3001{if} \u30b9\u30c6\u30fc\u30c8\u30e1\u30f3\u30c8\u3067\u4f7f\u7528\u3067\u304d\u308b PHP \u95a2\u6570\u306f\u4ee5\u4e0b\u306e\u901a\u308a\u3067\u3059\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"PHP\u95a2\u6570\u540d"),(0,n.kt)("th",{parentName:"tr",align:null},"\u6982\u8981"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"is_null"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5909\u6570\u304c null \u304b\u3069\u3046\u304b\u8abf\u3079\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"count"),(0,n.kt)("td",{parentName:"tr",align:null},"\u914d\u5217\u307e\u305f\u306f Countable \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u542b\u307e\u308c\u308b\u3059\u3079\u3066\u306e\u8981\u7d20\u306e\u6570\u3092\u6570\u3048\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"is_array"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5909\u6570\u304c\u914d\u5217\u304b\u3069\u3046\u304b\u3092\u691c\u67fb\u3057\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"in_array"),(0,n.kt)("td",{parentName:"tr",align:null},"\u914d\u5217\u306b\u5024\u304c\u3042\u308b\u304b\u30c1\u30a7\u30c3\u30af\u3057\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"isset"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5909\u6570\u304c\u5ba3\u8a00\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3001\u305d\u3057\u3066 null \u3068\u306f\u7570\u306a\u308b\u3053\u3068\u3092\u691c\u67fb\u3057\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"is_object"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5909\u6570\u304c\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304b\u3069\u3046\u304b\u3092\u691c\u67fb\u3057\u307e\u3059")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u8a18\u8f09\u4f8b"),"  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-smarty"},"{if is_null($hoge)}\n    $hoge\u306fnull\u3067\u3059\u3002\n{/if}\n")),(0,n.kt)("h3",{id:"\u4fee\u98fe\u5b50"},"\u4fee\u98fe\u5b50"),(0,n.kt)("p",null,"Kuroco \u306eSmarty\u5229\u7528\u7b87\u6240\u306b\u304a\u3044\u3066\u3001\u5909\u6570\u306e\u4fee\u98fe\u5b50\u3068\u3057\u3066\u4f7f\u7528\u3067\u304d\u308b PHP \u95a2\u6570\u306f\u4ee5\u4e0b\u306e\u901a\u308a\u3067\u3059\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"PHP\u95a2\u6570\u540d"),(0,n.kt)("th",{parentName:"tr",align:null},"\u6982\u8981"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"array_column"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5165\u529b\u914d\u5217\u304b\u3089\u5358\u4e00\u306e\u30ab\u30e9\u30e0\u306e\u5024\u3092\u8fd4\u3057\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"array_key_exists"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u3057\u305f\u30ad\u30fc\u307e\u305f\u306f\u6dfb\u5b57\u304c\u914d\u5217\u306b\u3042\u308b\u304b\u3069\u3046\u304b\u3092\u8abf\u3079\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"array_keys"),(0,n.kt)("td",{parentName:"tr",align:null},"\u914d\u5217\u306e\u30ad\u30fc\u3059\u3079\u3066\u3001\u3042\u308b\u3044\u306f\u305d\u306e\u4e00\u90e8\u3092\u8fd4\u3057\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"array_merge"),(0,n.kt)("td",{parentName:"tr",align:null},"\u3072\u3068\u3064\u307e\u305f\u306f\u8907\u6570\u306e\u914d\u5217\u3092\u30de\u30fc\u30b8\u3057\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"array_pop"),(0,n.kt)("td",{parentName:"tr",align:null},"\u914d\u5217\u306e\u672b\u5c3e\u304b\u3089\u8981\u7d20\u3092\u53d6\u308a\u9664\u304d\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"array_push"),(0,n.kt)("td",{parentName:"tr",align:null},"\u4e00\u3064\u4ee5\u4e0a\u306e\u8981\u7d20\u3092\u914d\u5217\u306e\u6700\u5f8c\u306b\u8ffd\u52a0\u3057\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"array_reverse"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8981\u7d20\u3092\u9006\u9806\u306b\u3057\u305f\u914d\u5217\u3092\u8fd4\u3057\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"array_shift"),(0,n.kt)("td",{parentName:"tr",align:null},"\u914d\u5217\u306e\u5148\u982d\u304b\u3089\u8981\u7d20\u3092\u4e00\u3064\u53d6\u308a\u51fa\u3057\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"array_slice"),(0,n.kt)("td",{parentName:"tr",align:null},"\u914d\u5217\u306e\u4e00\u90e8\u3092\u5c55\u958b\u3057\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"array_unique"),(0,n.kt)("td",{parentName:"tr",align:null},"\u914d\u5217\u304b\u3089\u91cd\u8907\u3057\u305f\u5024\u3092\u524a\u9664\u3057\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"array_values"),(0,n.kt)("td",{parentName:"tr",align:null},"\u914d\u5217\u306e\u5168\u3066\u306e\u5024\u3092\u8fd4\u3057\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"arsort"),(0,n.kt)("td",{parentName:"tr",align:null},"\u9023\u60f3\u30ad\u30fc\u3068\u8981\u7d20\u3068\u306e\u95a2\u4fc2\u3092\u7dad\u6301\u3057\u3064\u3064\u914d\u5217\u3092\u964d\u9806\u306b\u30bd\u30fc\u30c8\u3057\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"asort"),(0,n.kt)("td",{parentName:"tr",align:null},"\u9023\u60f3\u30ad\u30fc\u3068\u8981\u7d20\u3068\u306e\u95a2\u4fc2\u3092\u7dad\u6301\u3057\u3064\u3064\u914d\u5217\u3092\u6607\u9806\u306b\u30bd\u30fc\u30c8\u3057\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"base64_decode"),(0,n.kt)("td",{parentName:"tr",align:null},"MIME base64 \u65b9\u5f0f\u306b\u3088\u308a\u30a8\u30f3\u30b3\u30fc\u30c9\u3055\u308c\u305f\u30c7\u30fc\u30bf\u3092\u30c7\u30b3\u30fc\u30c9\u3057\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"base64_encode"),(0,n.kt)("td",{parentName:"tr",align:null},"MIME base64 \u65b9\u5f0f\u3067\u30c7\u30fc\u30bf\u3092\u30a8\u30f3\u30b3\u30fc\u30c9\u3057\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"explode"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6587\u5b57\u5217\u3092\u6587\u5b57\u5217\u306b\u3088\u308a\u5206\u5272\u3057\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"filter_var"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u3057\u305f\u30d5\u30a3\u30eb\u30bf\u3067\u30c7\u30fc\u30bf\u3092\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u3057\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"floor"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7aef\u6570\u306e\u5207\u308a\u6368\u3066")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"html_entity_decode"),(0,n.kt)("td",{parentName:"tr",align:null},"HTML \u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u5bfe\u5fdc\u3059\u308b\u6587\u5b57\u306b\u5909\u63db\u3057\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"htmlspecialchars_decode"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7279\u6b8a\u306a HTML \u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u6587\u5b57\u306b\u623b\u3057\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"http_build_query"),(0,n.kt)("td",{parentName:"tr",align:null},"URL \u30a8\u30f3\u30b3\u30fc\u30c9\u3055\u308c\u305f\u30af\u30a8\u30ea\u6587\u5b57\u5217\u3092\u751f\u6210\u3057\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"implode"),(0,n.kt)("td",{parentName:"tr",align:null},"\u914d\u5217\u8981\u7d20\u3092\u6587\u5b57\u5217\u306b\u3088\u308a\u9023\u7d50\u3057\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"intval"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5909\u6570\u306e\u6574\u6570\u3068\u3057\u3066\u306e\u5024\u3092\u53d6\u5f97\u3057\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"is_array"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5909\u6570\u304c\u914d\u5217\u304b\u3069\u3046\u304b\u3092\u691c\u67fb\u3057\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"is_numeric"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5909\u6570\u304c\u6570\u5b57\u307e\u305f\u306f\u6570\u5024\u5f62\u5f0f\u306e\u6587\u5b57\u5217\u3067\u3042\u308b\u304b\u3092\u8abf\u3079\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"json_decode"),(0,n.kt)("td",{parentName:"tr",align:null},"JSON \u6587\u5b57\u5217\u3092\u30c7\u30b3\u30fc\u30c9\u3057\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"json_encode"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5024\u3092 JSON \u5f62\u5f0f\u306b\u3057\u3066\u8fd4\u3057\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"key"),(0,n.kt)("td",{parentName:"tr",align:null},"\u914d\u5217\u304b\u3089\u30ad\u30fc\u3092\u53d6\u308a\u51fa\u3057\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"krsort"),(0,n.kt)("td",{parentName:"tr",align:null},"\u914d\u5217\u3092\u30ad\u30fc\u3067\u964d\u9806\u306b\u30bd\u30fc\u30c8\u3057\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ksort"),(0,n.kt)("td",{parentName:"tr",align:null},"\u914d\u5217\u3092\u30ad\u30fc\u3067\u6607\u9806\u306b\u30bd\u30fc\u30c8\u3057\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"max"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6700\u5927\u5024\u3092\u8fd4\u3057\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mb_convert_encoding"),(0,n.kt)("td",{parentName:"tr",align:null},"\u3042\u308b\u6587\u5b57\u30a8\u30f3\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u306e\u6587\u5b57\u5217\u3092\u3001\u5225\u306e\u6587\u5b57\u30a8\u30f3\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u306b\u5909\u63db\u3057\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mb_convert_kana"),(0,n.kt)("td",{parentName:"tr",align:null},'\u30ab\u30ca\u3092("\u5168\u89d2\u304b\u306a"\u3001"\u534a\u89d2\u304b\u306a"\u7b49\u306b)\u5909\u63db\u3057\u307e\u3059')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mb_strimwidth"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u3057\u305f\u5e45\u3067\u6587\u5b57\u5217\u3092\u4e38\u3081\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mb_stripos"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5927\u6587\u5b57\u5c0f\u6587\u5b57\u3092\u533a\u5225\u305b\u305a\u3001 \u6587\u5b57\u5217\u306e\u4e2d\u3067\u6307\u5b9a\u3057\u305f\u6587\u5b57\u5217\u304c\u6700\u521d\u306b\u73fe\u308c\u308b\u4f4d\u7f6e\u3092\u63a2\u3057\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mb_strlen"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6587\u5b57\u5217\u306e\u9577\u3055\u3092\u5f97\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mb_strpos"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6587\u5b57\u5217\u306e\u4e2d\u306b\u6307\u5b9a\u3057\u305f\u6587\u5b57\u5217\u304c\u6700\u521d\u306b\u73fe\u308c\u308b\u4f4d\u7f6e\u3092\u898b\u3064\u3051\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mb_strwidth"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6587\u5b57\u5217\u306e\u5e45\u3092\u8fd4\u3057\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mb_substr"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6587\u5b57\u5217\u306e\u4e00\u90e8\u3092\u5f97\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"md5"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6587\u5b57\u5217\u306emd5\u30cf\u30c3\u30b7\u30e5\u5024\u3092\u8a08\u7b97\u3057\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"min"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6700\u5c0f\u5024\u3092\u8fd4\u3057\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mt_rand"),(0,n.kt)("td",{parentName:"tr",align:null},"\u30e1\u30eb\u30bb\u30f3\u30cc\u30fb\u30c4\u30a4\u30b9\u30bf\u30fc\u4e71\u6570\u751f\u6210\u5668\u3092\u4ecb\u3057\u3066\u4e71\u6570\u5024\u3092\u751f\u6210\u3057\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"nl2br"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6539\u884c\u6587\u5b57\u306e\u524d\u306b HTML \u306e\u6539\u884c\u30bf\u30b0\u3092\u633f\u5165\u3057\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"number_format"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6570\u5b57\u3092\u5343\u306e\u4f4d\u6bce\u306b\u30b0\u30eb\u30fc\u30d7\u5316\u3057\u3066\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3057\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"parse_url"),(0,n.kt)("td",{parentName:"tr",align:null},"URL \u3092\u89e3\u91c8\u3057\u3001\u305d\u306e\u69cb\u6210\u8981\u7d20\u3092\u8fd4\u3057\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pathinfo"),(0,n.kt)("td",{parentName:"tr",align:null},"\u30d5\u30a1\u30a4\u30eb\u30d1\u30b9\u306b\u95a2\u3059\u308b\u60c5\u5831\u3092\u8fd4\u3057\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"property_exists"),(0,n.kt)("td",{parentName:"tr",align:null},"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3082\u3057\u304f\u306f\u30af\u30e9\u30b9\u306b\u30d7\u30ed\u30d1\u30c6\u30a3\u304c\u5b58\u5728\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u8abf\u3079\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"range"),(0,n.kt)("td",{parentName:"tr",align:null},"\u3042\u308b\u7bc4\u56f2\u306e\u6574\u6570\u3092\u6709\u3059\u308b\u914d\u5217\u3092\u4f5c\u6210\u3057\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rawurldecode"),(0,n.kt)("td",{parentName:"tr",align:null},"URL \u30a8\u30f3\u30b3\u30fc\u30c9\u3055\u308c\u305f\u6587\u5b57\u5217\u3092\u30c7\u30b3\u30fc\u30c9\u3057\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"round"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6d6e\u52d5\u5c0f\u6570\u70b9\u6570\u3092\u4e38\u3081\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rsort"),(0,n.kt)("td",{parentName:"tr",align:null},"\u914d\u5217\u3092\u964d\u9806\u306b\u30bd\u30fc\u30c8\u3057\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"shuffle"),(0,n.kt)("td",{parentName:"tr",align:null},"\u914d\u5217\u3092\u30b7\u30e3\u30c3\u30d5\u30eb\u3057\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"sort"),(0,n.kt)("td",{parentName:"tr",align:null},"\u914d\u5217\u3092\u6607\u9806\u306b\u30bd\u30fc\u30c8\u3057\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"str_pad"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6587\u5b57\u5217\u3092\u56fa\u5b9a\u9577\u306e\u4ed6\u306e\u6587\u5b57\u5217\u3067\u57cb\u3081\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"strip_tags"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6587\u5b57\u5217\u304b\u3089 HTML \u304a\u3088\u3073 PHP \u30bf\u30b0\u3092\u53d6\u308a\u9664\u304d\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"stripos"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5927\u6587\u5b57\u5c0f\u6587\u5b57\u3092\u533a\u5225\u305b\u305a\u306b\u6587\u5b57\u5217\u304c\u6700\u521d\u306b\u73fe\u308c\u308b\u4f4d\u7f6e\u3092\u63a2\u3057\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"strlen"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6587\u5b57\u5217\u306e\u9577\u3055\u3092\u5f97\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"strpos"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6587\u5b57\u5217\u5185\u306e\u90e8\u5206\u6587\u5b57\u5217\u304c\u6700\u521d\u306b\u73fe\u308c\u308b\u5834\u6240\u3092\u898b\u3064\u3051\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"strstr"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6587\u5b57\u5217\u304c\u6700\u521d\u306b\u73fe\u308c\u308b\u4f4d\u7f6e\u3092\u898b\u3064\u3051\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"strtolower"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6587\u5b57\u5217\u3092\u5c0f\u6587\u5b57\u306b\u3057\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"strtotime"),(0,n.kt)("td",{parentName:"tr",align:null},"\u82f1\u6587\u5f62\u5f0f\u306e\u65e5\u4ed8\u3092 Unix \u30bf\u30a4\u30e0\u30b9\u30bf\u30f3\u30d7\u306b\u5909\u63db\u3057\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"strtoupper"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6587\u5b57\u5217\u3092\u5927\u6587\u5b57\u306b\u3057\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"strval"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5909\u6570\u306e\u6587\u5b57\u5217\u3068\u3057\u3066\u306e\u5024\u3092\u53d6\u5f97\u3057\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"substr"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6587\u5b57\u5217\u306e\u4e00\u90e8\u5206\u3092\u8fd4\u3057\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"trim"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6587\u5b57\u5217\u306e\u5148\u982d\u304a\u3088\u3073\u672b\u5c3e\u306b\u3042\u308b\u30db\u30ef\u30a4\u30c8\u30b9\u30da\u30fc\u30b9\u3092\u53d6\u308a\u9664\u304d\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"unset"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u3057\u305f\u5909\u6570\u306e\u5272\u5f53\u3092\u89e3\u9664\u3057\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"urlencode"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6587\u5b57\u5217\u3092 URL \u30a8\u30f3\u30b3\u30fc\u30c9\u3057\u307e\u3059")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u95a2\u6570\u306e\u7b2c\u4e00\u5f15\u6570\u3092\u5909\u6570\u3068\u3057\u3001\u4fee\u98fe\u5b50\u3068\u3057\u3066\u95a2\u6570\u540d\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002\u7b2c\u4e8c\u5f15\u6570\u4ee5\u4e0a\u306e\u5f15\u6570\u306f\u4fee\u98fe\u5b50\u306e\u5f8c\u308d\u306b\u30b3\u30ed\u30f3(",(0,n.kt)("inlineCode",{parentName:"li"},":"),")\u533a\u5207\u308a\u3067\u8a18\u8f09\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5909\u6570\u304c\u914d\u5217\u306e\u5834\u5408\u306f\u3001\u95a2\u6570\u540d\u306e\u5148\u982d\u306b\u30a2\u30c3\u30c8\u30de\u30fc\u30af(",(0,n.kt)("inlineCode",{parentName:"li"},"@"),")\u3092\u8a18\u8f09\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u8a18\u8f09\u4f8b (array_column \u306e\u5834\u5408)"),"  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-smarty"},'{* \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u304b\u3089\u8fd4\u3063\u3066\u304d\u305f\u30ec\u30b3\u30fc\u30c9\u30bb\u30c3\u30c8\u306e\u4f8b *}\n{assign_array var="records" values=""}\n\n{assign_array var="record" values=""}\n{append var="record" index="id" value=2135}\n{append var="record" index="first_name" value="John"}\n{append var="record" index="last_name" value="Doe"}\n{append var="records" value=$record}\n\n{assign_array var="record" values=""}\n{append var="record" index="id" value=3245}\n{append var="record" index="first_name" value="Sally"}\n{append var="record" index="last_name" value="Smith"}\n{append var="records" value=$record}\n\n{assign_array var="record" values=""}\n{append var="record" index="id" value=5342}\n{append var="record" index="first_name" value="Jane"}\n{append var="record" index="last_name" value="Jones"}\n{append var="records" value=$record}\n\n{assign_array var="record" values=""}\n{append var="record" index="id" value=5623}\n{append var="record" index="first_name" value="Peter"}\n{append var="record" index="last_name" value="Doe"}\n{append var="records" value=$record}\n\n{* \u95a2\u6570\u306e\u7b2c\u4e00\u5f15\u6570\u3092\u5909\u6570\u3068\u3057\u3001\u4fee\u98fe\u5b50\u3068\u3057\u3066\u95a2\u6570\u540d\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002\u7b2c\u4e8c\u5f15\u6570\u4ee5\u4e0a\u306e\u5f15\u6570\u306f\u4fee\u98fe\u5b50\u306e\u5f8c\u308d\u306b\u30b3\u30ed\u30f3(`:`)\u533a\u5207\u308a\u3067\u8a18\u8f09\u3057\u307e\u3059 *}\n{* \u5909\u6570\u304c\u914d\u5217\u306e\u5834\u5408\u306f\u3001\u95a2\u6570\u540d\u306e\u5148\u982d\u306b\u30a2\u30c3\u30c8\u30de\u30fc\u30af(`@`)\u3092\u8a18\u8f09\u3057\u307e\u3059 *}\n{assign var="first_names" value=$records|@array_column:\'first_name\'}\n\n{$first_names|@debug_print_var}\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u5b9f\u884c\u7d50\u679c"),"  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'Array (4)\n0 => "John"\n1 => "Sally"\n2 => "Jane"\n3 => "Peter"\n')))}k.isMDXComponent=!0}}]);