"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[70836],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>s});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},m=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=d(r),k=a,s=c["".concat(l,".").concat(k)]||c[k]||u[k]||o;return r?n.createElement(s,p(p({ref:t},m),{},{components:r})):n.createElement(s,p({ref:t},m))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=k;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,p[1]=i;for(var d=2;d<o;d++)p[d]=r[d];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},21477:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const o={title:"\u4f4d\u7f6e\u60c5\u5831\u306b\u3088\u308b\u4e26\u3073\u66ff\u3048",description:"\u5730\u56f3\u306e\u9805\u76ee\u3092\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u8a2d\u5b9a\u3057\u3066\u3044\u308b\u5834\u5408\u3001order_query\u306b\u4e26\u3073\u9806\u3068\u7def\u5ea6\u7d4c\u5ea6\u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u3067\u3001\u6307\u5b9a\u306e\u4f4d\u7f6e\u304b\u3089\u306e\u8ddd\u96e2\u3067\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u4e26\u3073\u66ff\u3048\u304c\u53ef\u80fd\u3067\u3059\u3002\u307e\u305f\u3001\u7def\u5ea6\u7d4c\u5ea6\u306b\u3088\u308border_query\u3092\u6307\u5b9a\u3059\u308b\u3068\u3001\u6307\u5b9a\u3057\u305f\u4f4d\u7f6e\u304b\u3089\u306e\u8ddd\u96e2\u304c\u8ffd\u52a0\u3067\u30ec\u30b9\u30dd\u30f3\u30b9\u3055\u308c\u307e\u3059\u3002"},p=void 0,i={unversionedId:"reference/order-by-location",id:"reference/order-by-location",title:"\u4f4d\u7f6e\u60c5\u5831\u306b\u3088\u308b\u4e26\u3073\u66ff\u3048",description:"\u5730\u56f3\u306e\u9805\u76ee\u3092\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u8a2d\u5b9a\u3057\u3066\u3044\u308b\u5834\u5408\u3001order_query\u306b\u4e26\u3073\u9806\u3068\u7def\u5ea6\u7d4c\u5ea6\u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u3067\u3001\u6307\u5b9a\u306e\u4f4d\u7f6e\u304b\u3089\u306e\u8ddd\u96e2\u3067\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u4e26\u3073\u66ff\u3048\u304c\u53ef\u80fd\u3067\u3059\u3002\u307e\u305f\u3001\u7def\u5ea6\u7d4c\u5ea6\u306b\u3088\u308border_query\u3092\u6307\u5b9a\u3059\u308b\u3068\u3001\u6307\u5b9a\u3057\u305f\u4f4d\u7f6e\u304b\u3089\u306e\u8ddd\u96e2\u304c\u8ffd\u52a0\u3067\u30ec\u30b9\u30dd\u30f3\u30b9\u3055\u308c\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/reference/order-by-location.md",sourceDirName:"reference",slug:"/reference/order-by-location",permalink:"/ja/docs/reference/order-by-location",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/reference/order-by-location.md",tags:[],version:"current",frontMatter:{title:"\u4f4d\u7f6e\u60c5\u5831\u306b\u3088\u308b\u4e26\u3073\u66ff\u3048",description:"\u5730\u56f3\u306e\u9805\u76ee\u3092\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u8a2d\u5b9a\u3057\u3066\u3044\u308b\u5834\u5408\u3001order_query\u306b\u4e26\u3073\u9806\u3068\u7def\u5ea6\u7d4c\u5ea6\u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u3067\u3001\u6307\u5b9a\u306e\u4f4d\u7f6e\u304b\u3089\u306e\u8ddd\u96e2\u3067\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u4e26\u3073\u66ff\u3048\u304c\u53ef\u80fd\u3067\u3059\u3002\u307e\u305f\u3001\u7def\u5ea6\u7d4c\u5ea6\u306b\u3088\u308border_query\u3092\u6307\u5b9a\u3059\u308b\u3068\u3001\u6307\u5b9a\u3057\u305f\u4f4d\u7f6e\u304b\u3089\u306e\u8ddd\u96e2\u304c\u8ffd\u52a0\u3067\u30ec\u30b9\u30dd\u30f3\u30b9\u3055\u308c\u307e\u3059\u3002"},sidebar:"documentationSidebar",previous:{title:"\u95a2\u9023\u3057\u3066\u3044\u308b\u30c7\u30fc\u30bf\u3092\u6761\u4ef6\u306b\u3057\u305ffilter\u6a5f\u80fd",permalink:"/ja/docs/reference/r-filter"},next:{title:"API\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u3064\u3044\u3066",permalink:"/ja/docs/reference/api-cache"}},l={},d=[{value:"\u8a2d\u5b9a\u65b9\u6cd5",id:"\u8a2d\u5b9a\u65b9\u6cd5",level:2},{value:"order_query\u306b\u3088\u308b\u4e26\u3073\u66ff\u3048",id:"order_query\u306b\u3088\u308b\u4e26\u3073\u66ff\u3048",level:3},{value:"\u30ea\u30af\u30a8\u30b9\u30c8\u4f8b",id:"\u30ea\u30af\u30a8\u30b9\u30c8\u4f8b",level:4},{value:"\u30ec\u30b9\u30dd\u30f3\u30b9\u4f8b",id:"\u30ec\u30b9\u30dd\u30f3\u30b9\u4f8b",level:4},{value:"Filter\u30af\u30a8\u30ea\u3068\u306e\u4f75\u7528",id:"filter\u30af\u30a8\u30ea\u3068\u306e\u4f75\u7528",level:3},{value:"\u30ea\u30af\u30a8\u30b9\u30c8\u4f8b",id:"\u30ea\u30af\u30a8\u30b9\u30c8\u4f8b-1",level:4},{value:"\u30ec\u30b9\u30dd\u30f3\u30b9\u4f8b",id:"\u30ec\u30b9\u30dd\u30f3\u30b9\u4f8b-1",level:4}],m={toc:d},c="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5730\u56f3\u306e\u9805\u76ee\u3092\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u8a2d\u5b9a\u3057\u3066\u3044\u308b\u5834\u5408\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"order_query"),"\u306b\u4e26\u3073\u9806\u3068\u7def\u5ea6\u7d4c\u5ea6\u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u3067\u3001\u6307\u5b9a\u306e\u4f4d\u7f6e\u304b\u3089\u306e\u8ddd\u96e2\u3067\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u4e26\u3073\u66ff\u3048\u304c\u53ef\u80fd\u3067\u3059\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u307e\u305f\u3001\u6307\u5b9a\u3057\u305f\u4f4d\u7f6e\u304b\u3089\u306e\u8ddd\u96e2\u60c5\u5831(km)\u304c",(0,a.kt)("inlineCode",{parentName:"p"},"ext_X_distance"),"\u306e\u9805\u76ee\u540d\u3067\u30ec\u30b9\u30dd\u30f3\u30b9\u306b\u8ffd\u52a0\u3055\u308c\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"\u8a2d\u5b9a\u65b9\u6cd5"},"\u8a2d\u5b9a\u65b9\u6cd5"),(0,a.kt)("h3",{id:"order_query\u306b\u3088\u308b\u4e26\u3073\u66ff\u3048"},"order_query\u306b\u3088\u308b\u4e26\u3073\u66ff\u3048"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"\u9805\u76ee\u306e\u8b58\u5225\u5b50=\u4e26\u3073\u9806=\u7def\u5ea6:\u7d4c\u5ea6"),"\u306e\u5f62\u5f0f\u3067\u6307\u5b9a\u3057\u3001\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u306b\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u30d1\u30e9\u30e1\u30fc\u30bf\u306fURL\u30a8\u30f3\u30b3\u30fc\u30c9\u3057\u3066\u304f\u3060\u3055\u3044\u3002  "),(0,a.kt)("h4",{id:"\u30ea\u30af\u30a8\u30b9\u30c8\u4f8b"},"\u30ea\u30af\u30a8\u30b9\u30c8\u4f8b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"order_query=ext_1=DESC=3.1065323937409204:101.58251235994912")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Request URL"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"https://sitekey.g.kuroco.app/rcms-api/1/map_test?order_query=ext_1%3DDESC%3D3.1065323937409204%3A101.58251235994912")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u4e26\u3073\u9806\u306e\u6307\u5b9a"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u8aac\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"DESC"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u3057\u305f\u7def\u5ea6\u7d4c\u5ea6\u304b\u3089\u9060\u3044\u9806\u306b\u4e26\u3073\u307e\u3059\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ASC"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u3057\u305f\u7def\u5ea6\u7d4c\u5ea6\u304b\u3089\u8fd1\u3044\u9806\u306b\u4e26\u3073\u307e\u3059\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"\u306a\u3057"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u3057\u305f\u7def\u5ea6\u7d4c\u5ea6\u304b\u3089\u306e\u8ddd\u96e2\u304c\u8ffd\u52a0\u3067\u30ec\u30b9\u30dd\u30f3\u30b9\u3055\u308c\u307e\u3059\u304c\u4e26\u3073\u9806\u306f\u5909\u66f4\u3055\u308c\u307e\u305b\u3093\u3002",(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"td"},"\u9805\u76ee\u306e\u8b58\u5225\u5b50==\u7def\u5ea6:\u7d4c\u5ea6"),"\u3067\u6307\u5b9a\u3057\u307e\u3059\u3002")))),(0,a.kt)("h4",{id:"\u30ec\u30b9\u30dd\u30f3\u30b9\u4f8b"},"\u30ec\u30b9\u30dd\u30f3\u30b9\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "list": [\n    {\n      "subject": "Tokyo",\n      "ext_1_distance": "5337.28",\n      "ext_1": {\n        "gmap_x": "139.7671248",\n        "gmap_y": "35.68123620000001",\n        "gmap_type": "roadmap",\n        "gmap_zoom": "14",\n        "gmap_place_id": "ChIJC3Cf2PuLGGAROO00ukl8JwA"\n      }\n    },\n    {\n      "subject": "Osaka",\n      "ext_1_distance": "4958.37",\n      "ext_1": {\n        "gmap_x": "135.5022535",\n        "gmap_y": "34.6937249",\n        "gmap_type": "roadmap",\n        "gmap_zoom": "10",\n        "gmap_place_id": "ChIJ4eIGNFXmAGAR5y9q5G7BW8U"\n      }\n    },\n    {\n      "subject": "Fukuoka",\n      "ext_1_distance": "4519.57",\n      "ext_1": {\n        "gmap_x": "130.4016888",\n        "gmap_y": "33.5901838",\n        "gmap_type": "roadmap",\n        "gmap_zoom": "9",\n        "gmap_place_id": "ChIJKYSE6aHtQTURg4c5NplyCvY"\n      }\n    }\n  ]\n}\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"order_query"),"\u3092\u7def\u5ea6\u7d4c\u5ea6\u3067\u6307\u5b9a\u3059\u308b\u3068\u3001\u6307\u5b9a\u3057\u305f\u4f4d\u7f6e\u304b\u3089\u306e\u8ddd\u96e2\u60c5\u5831(km)\u304c",(0,a.kt)("inlineCode",{parentName:"p"},"ext_X_distance"),"\u306e\u9805\u76ee\u540d\u3067\u30ec\u30b9\u30dd\u30f3\u30b9\u306b\u8ffd\u52a0\u3055\u308c\u307e\u3059\u3002")),(0,a.kt)("h3",{id:"filter\u30af\u30a8\u30ea\u3068\u306e\u4f75\u7528"},"Filter\u30af\u30a8\u30ea\u3068\u306e\u4f75\u7528"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},":D(\u9805\u76ee\u306e\u8b58\u5225\u5b50:\u7def\u5ea6:\u7d4c\u5ea6) < 500"),"\u306e\u3088\u3046\u306a\u5f62\u5f0f\u3067\u30d5\u30a3\u30eb\u30bf\u30fc\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u3067\u3001\u6307\u5b9a\u306e\u4f4d\u7f6e\u304b\u3089\u306e\u8ddd\u96e2\u3092\u6761\u4ef6\u3068\u3057\u305f\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u691c\u7d22\u304c\u53ef\u80fd\u3067\u3059\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","Filter\u30af\u30a8\u30ea\u306e\u307f\u3067\u5229\u7528\u3059\u308b\u3053\u3068\u3082\u53ef\u80fd\u3067\u3059\u304c\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"ext_X_distance"),"\u306f",(0,a.kt)("inlineCode",{parentName:"p"},"order_query"),"\u306b\u6307\u5b9a\u3057\u305f\u4f4d\u7f6e\u3092\u3082\u3068\u306b\u8a08\u7b97\u3055\u308c\u307e\u3059\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u4e26\u3073\u66ff\u3048\u4e0d\u8981\u3067Filter\u3092\u304b\u3051\u308b\u5834\u5408\u3067\u3082",(0,a.kt)("inlineCode",{parentName:"p"},"\u9805\u76ee\u306e\u8b58\u5225\u5b50==\u7def\u5ea6:\u7d4c\u5ea6"),"\u306e\u5f62\u5f0f\u3067\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6307\u5b9a\u3057\u305f",(0,a.kt)("inlineCode",{parentName:"p"},"order_query"),"\u3068\u4f75\u7528\u3059\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002  "),(0,a.kt)("h4",{id:"\u30ea\u30af\u30a8\u30b9\u30c8\u4f8b-1"},"\u30ea\u30af\u30a8\u30b9\u30c8\u4f8b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"filter=:D(ext_1:35.17189148918877:136.68933682996803) < 500"),(0,a.kt)("li",{parentName:"ul"},"order_query=ext_1=ASC=35.17189148918877:136.68933682996803")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Request URL"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"https://sitekey.g.kuroco.app/rcms-api/1/maptest?filter=%3AD%28ext_1%3A35.17189148918877%3A136.68933682996803%29%20%3C%20200&order_query=ext_1%3DASC%3D35.17189148918877%3A136.68933682996803")),(0,a.kt)("h4",{id:"\u30ec\u30b9\u30dd\u30f3\u30b9\u4f8b-1"},"\u30ec\u30b9\u30dd\u30f3\u30b9\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "list": [\n    {\n      "subject": "Osaka",\n      "ext_1_distance": "120.56",\n      "ext_1": {\n        "gmap_x": "135.5022535",\n        "gmap_y": "34.6937249",\n        "gmap_type": "roadmap",\n        "gmap_zoom": "10",\n        "gmap_place_id": "ChIJ4eIGNFXmAGAR5y9q5G7BW8U"\n      }\n    }\n  ]\n}\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u8907\u6570\u306e\u6761\u4ef6\u3092\u7d50\u5408\u3059\u308b\u3053\u3068\u3082\u53ef\u80fd\u3067\u3059\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u4f8b\uff1a:D(ext_1:35.17189148918877:136.68933682996803) < 200 or :D(ext_1:35.17189148918877:136.68933682996803) > 500")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"filter"),"\u306b\u6307\u5b9a\u3059\u308b\u4f4d\u7f6e\u60c5\u5831\u3068\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"order_query"),"\u306b\u6307\u5b9a\u3059\u308b\u4f4d\u7f6e\u60c5\u5831\u3092\u5225\u306e\u5834\u6240\u306b\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u304c\u3001\n",(0,a.kt)("inlineCode",{parentName:"p"},"ext_X_distance"),"\u306e\u9805\u76ee\u3067\u30ec\u30b9\u30dd\u30f3\u30b9\u3055\u308c\u308b\u8ddd\u96e2\u306f",(0,a.kt)("inlineCode",{parentName:"p"},"order_query"),"\u306b\u6307\u5b9a\u3057\u305f\u4f4d\u7f6e\u3092\u3082\u3068\u306b\u8a08\u7b97\u3055\u308c\u307e\u3059\u3002")))}u.isMDXComponent=!0}}]);