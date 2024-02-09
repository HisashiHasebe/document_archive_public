"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[51767],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>m});var o=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,o,n=function(t,e){if(null==t)return{};var r,o,n={},a=Object.keys(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var u=o.createContext({}),s=function(t){var e=o.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):c(c({},e),t)),r},p=function(t){var e=s(t.components);return o.createElement(u.Provider,{value:e},t.children)},l="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},f=o.forwardRef((function(t,e){var r=t.components,n=t.mdxType,a=t.originalType,u=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),l=s(r),f=n,m=l["".concat(u,".").concat(f)]||l[f]||d[f]||a;return r?o.createElement(m,c(c({ref:e},p),{},{components:r})):o.createElement(m,c({ref:e},p))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i[l]="string"==typeof t?t:n,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},13433:(t,e,r)=>{r.d(e,{Z:()=>n});var o=r(67294);function n(t){let{faqs:e=[]}=t;if(0===(Array.isArray(e)?e.filter((t=>t.question&&t.answer)):[]).length)return null;const r={"@context":"https://schema.org","@type":"FAQPage",mainEntity:e.map((t=>({"@type":"Question",name:t.question,acceptedAnswer:{"@type":"Answer",text:t.answer}})))},n=JSON.stringify(r,null,2);return o.createElement("script",{type:"application/ld+json"},n)}},73473:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>p});var o=r(87462),n=(r(67294),r(3905)),a=r(13433);const c={title:"\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3\u3092\u8a2d\u5b9a\u3057\u307e\u3057\u305f\u304c\u30b5\u30a4\u30c8\u304c\u8868\u793a\u3067\u304d\u307e\u305b\u3093\u3002\u4f55\u3092\u78ba\u8a8d\u3059\u308c\u3070\u826f\u3044\u3067\u3057\u3087\u3046\u304b\uff1f",description:"\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3\u3092\u8a2d\u5b9a\u3057\u305f\u306b\u3082\u304b\u304b\u308f\u3089\u305a\u3001\u30b5\u30a4\u30c8\u304c\u8868\u793a\u3067\u304d\u306a\u3044/\u30a8\u30e9\u30fc\u3068\u306a\u308b\u5834\u5408\u306f\u4e0b\u8a18\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002",category:"trouble"},i=void 0,u={unversionedId:"faq/setting-up-a-custom-domain",id:"faq/setting-up-a-custom-domain",title:"\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3\u3092\u8a2d\u5b9a\u3057\u307e\u3057\u305f\u304c\u30b5\u30a4\u30c8\u304c\u8868\u793a\u3067\u304d\u307e\u305b\u3093\u3002\u4f55\u3092\u78ba\u8a8d\u3059\u308c\u3070\u826f\u3044\u3067\u3057\u3087\u3046\u304b\uff1f",description:"\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3\u3092\u8a2d\u5b9a\u3057\u305f\u306b\u3082\u304b\u304b\u308f\u3089\u305a\u3001\u30b5\u30a4\u30c8\u304c\u8868\u793a\u3067\u304d\u306a\u3044/\u30a8\u30e9\u30fc\u3068\u306a\u308b\u5834\u5408\u306f\u4e0b\u8a18\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/faq/setting-up-a-custom-domain.mdx",sourceDirName:"faq",slug:"/faq/setting-up-a-custom-domain",permalink:"/ja/docs/faq/setting-up-a-custom-domain",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/setting-up-a-custom-domain.mdx",tags:[],version:"current",frontMatter:{title:"\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3\u3092\u8a2d\u5b9a\u3057\u307e\u3057\u305f\u304c\u30b5\u30a4\u30c8\u304c\u8868\u793a\u3067\u304d\u307e\u305b\u3093\u3002\u4f55\u3092\u78ba\u8a8d\u3059\u308c\u3070\u826f\u3044\u3067\u3057\u3087\u3046\u304b\uff1f",description:"\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3\u3092\u8a2d\u5b9a\u3057\u305f\u306b\u3082\u304b\u304b\u308f\u3089\u305a\u3001\u30b5\u30a4\u30c8\u304c\u8868\u793a\u3067\u304d\u306a\u3044/\u30a8\u30e9\u30fc\u3068\u306a\u308b\u5834\u5408\u306f\u4e0b\u8a18\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002",category:"trouble"},sidebar:"faqSidebar",previous:{title:"\u30a4\u30f3\u30b5\u30fc\u30c8\u306eAPI\u306b\u30c7\u30d5\u30a9\u30eb\u30c8\u5024\u3092\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u304b\uff1f",permalink:"/ja/docs/faq/set-defaults-for-the-insert-api"},next:{title:"\u5236\u9650\u3092\u304b\u3051\u3066\u3044\u306a\u3044\u306e\u306bAPI\u304b\u3089403 forbidden \u304c\u8fd4\u3063\u3066\u304d\u307e\u3059",permalink:"/ja/docs/faq/the-api-returns-403-forbidden-even-though-no-restrictions-are-applied"}},s={},p=[{value:"\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3/TLS\u8a3c\u660e\u66f8\u306e\u78ba\u8a8d",id:"\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3tls\u8a3c\u660e\u66f8\u306e\u78ba\u8a8d",level:2},{value:"GitHub\u9023\u643a\u306e\u78ba\u8a8d",id:"github\u9023\u643a\u306e\u78ba\u8a8d",level:2},{value:"kuroco_front.json\u304c\u4f5c\u6210\u3055\u308c\u3066\u3044\u308b\u304b\u306e\u78ba\u8a8d",id:"kuroco_frontjson\u304c\u4f5c\u6210\u3055\u308c\u3066\u3044\u308b\u304b\u306e\u78ba\u8a8d",level:2},{value:".github/workflows \u914d\u4e0b\u306eYAML\u30d5\u30a1\u30a4\u30eb\u5185\u5bb9\u78ba\u8a8d",id:"githubworkflows-\u914d\u4e0b\u306eyaml\u30d5\u30a1\u30a4\u30eb\u5185\u5bb9\u78ba\u8a8d",level:2},{value:"\u4e0a\u8a18\u3067\u89e3\u6c7a\u3057\u306a\u3044\u5834\u5408",id:"\u4e0a\u8a18\u3067\u89e3\u6c7a\u3057\u306a\u3044\u5834\u5408",level:2}],l={toc:p},d="wrapper";function f(t){let{components:e,...r}=t;return(0,n.kt)(d,(0,o.Z)({},l,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)(a.Z,{faqs:[{question:"\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3\u3092\u8a2d\u5b9a\u3057\u307e\u3057\u305f\u304c\u30b5\u30a4\u30c8\u304c\u8868\u793a\u3067\u304d\u307e\u305b\u3093\u3002\u4f55\u3092\u78ba\u8a8d\u3059\u308c\u3070\u826f\u3044\u3067\u3057\u3087\u3046\u304b\uff1f",answer:"\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3\u3092\u8a2d\u5b9a\u3057\u305f\u306b\u3082\u304b\u304b\u308f\u3089\u305a\u3001\u30b5\u30a4\u30c8\u304c\u8868\u793a\u3067\u304d\u306a\u3044/\u30a8\u30e9\u30fc\u3068\u306a\u308b\u5834\u5408\u306f\u4e0b\u8a18\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002"}],mdxType:"StructuredDataFaqs"}),(0,n.kt)("p",null,"\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3\u3092\u8a2d\u5b9a\u3057\u305f\u306b\u3082\u304b\u304b\u308f\u3089\u305a\u3001\u30b5\u30a4\u30c8\u304c\u8868\u793a\u3067\u304d\u306a\u3044/\u30a8\u30e9\u30fc\u3068\u306a\u308b\u5834\u5408\u306f\u4e0b\u8a18\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("h2",{id:"\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3tls\u8a3c\u660e\u66f8\u306e\u78ba\u8a8d"},"\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3/TLS\u8a3c\u660e\u66f8\u306e\u78ba\u8a8d"),(0,n.kt)("p",null,"\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3\u304c\u9069\u5207\u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u304b\u306e\u78ba\u8a8d\u3092\u304a\u9858\u3044\u3057\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","[KurocoFront]"," -> ","[\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3/TLS\u8a3c\u660e\u66f8]","\u3088\u308a\u3001\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3\u304c\u300cOK\u300d\u306b\u306a\u3063\u3066\u3044\u308b\u304b\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/fe59452282070580f70635b1e126de7b.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/fe59452282070580f70635b1e126de7b.png",alt:"Image (fetched from Gyazo)"}),"\n\u3053\u3061\u3089\u304c\u300c\u8a8d\u8a3c\u4e2d\u300d\u306b\u306a\u3063\u3066\u3044\u308b\u5834\u5408\u306f\u3001\u3046\u307e\u304f\u8a2d\u5b9a\u304c\u3067\u304d\u3066\u3044\u306a\u3044\u53ef\u80fd\u6027\u304c\u3054\u3056\u3044\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/f4e81deaae4dd964e6c95d364596929b.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/f4e81deaae4dd964e6c95d364596929b.png",alt:"Image (fetched from Gyazo)"}),"\n\u305d\u306e\u5834\u5408\u3001",(0,n.kt)("a",{parentName:"p",href:"/ja/docs/tutorials/using-a-custom-domain-name-on-kurocofront/"},"KurocoFront\u3067\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3\u3092\u5229\u7528\u3059\u308b\u624b\u9806"),"\u3092\u53c2\u8003\u306b\u8a2d\u5b9a\u3092\u304a\u9858\u3044\u3057\u307e\u3059\u3002"),(0,n.kt)("h2",{id:"github\u9023\u643a\u306e\u78ba\u8a8d"},"GitHub\u9023\u643a\u306e\u78ba\u8a8d"),(0,n.kt)("p",null,"GitHub\u3068\u306e\u9023\u643a\u304c\u3046\u307e\u304f\u3067\u304d\u3066\u3044\u308b\u304b\u306e\u78ba\u8a8d\u3092\u304a\u9858\u3044\u3057\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","[KurocoFront]"," -> ","[GitHub]","\u3088\u308a\u4e0b\u8a182\u70b9\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u30ea\u30dd\u30b8\u30c8\u30ea\uff1a\u5bfe\u8c61\u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u304c\u9078\u629e\u3055\u308c\u3066\u3044\u308b\u304b"),(0,n.kt)("li",{parentName:"ul"},"GitHub\u306e\u9023\u643a\u5bfe\u8c61\uff1a\u5bfe\u8c61\u30d6\u30e9\u30f3\u30c1\u304c\u9078\u629e\u3055\u308c\u3066\u3044\u308b\u304b")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/7eaa310c8459d6bfc0daeae2ce70d3cb.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/7eaa310c8459d6bfc0daeae2ce70d3cb.png",alt:"fetched from Gyazo"}),"\nGitHub\u3068\u306e\u9023\u643a\u304c\u3067\u304d\u3066\u3044\u306a\u3044\u5834\u5408\u306f ",(0,n.kt)("a",{parentName:"p",href:"/ja/docs/tutorials/connect-to-github-with-kuroco-front/"},"GitHub\u304b\u3089KurocoFront\u3078\u30bd\u30fc\u30b9\u3092\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u65b9\u6cd5"),"\u3092\u53c2\u8003\u306b\u9023\u643a\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("h2",{id:"kuroco_frontjson\u304c\u4f5c\u6210\u3055\u308c\u3066\u3044\u308b\u304b\u306e\u78ba\u8a8d"},"kuroco_front.json\u304c\u4f5c\u6210\u3055\u308c\u3066\u3044\u308b\u304b\u306e\u78ba\u8a8d"),(0,n.kt)("p",null,"KurocoFront\u3092\u5229\u7528\u3059\u308b\u305f\u3081\u306b\u306f\u3001Kuroco_front.json\u30d5\u30a1\u30a4\u30eb\u3092\u9069\u5207\u306a\u5834\u6240\u306b\u914d\u7f6e\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002Kuroco_front.json\u304c\u4f5c\u6210\u3055\u308c\u3066\u3044\u308b\u304b\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("p",null,"Kuroco_front.json\u306b\u3064\u3044\u3066\u306f\u3001",(0,n.kt)("a",{parentName:"p",href:"/ja/docs/faq/what-is-kuroco_front_json/"},"kuroco_front.json\u3068\u306f\u4f55\u3067\u3059\u304b\uff1f"),"\u3092\u53c2\u8003\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("h2",{id:"githubworkflows-\u914d\u4e0b\u306eyaml\u30d5\u30a1\u30a4\u30eb\u5185\u5bb9\u78ba\u8a8d"},".github/workflows \u914d\u4e0b\u306eYAML\u30d5\u30a1\u30a4\u30eb\u5185\u5bb9\u78ba\u8a8d"),(0,n.kt)("p",null,"KurocoFront\u306b\u3066\u30d3\u30eb\u30c9\u3059\u308b\u305f\u3081\u306b\u3001.github/workslows \u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u914d\u4e0b\u306bYAML\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","YAML\u30d5\u30a1\u30a4\u30eb\u306e\u5185\u5bb9\u306f\u3001","[KurocoFront]"," -> ","[GitHub]","\u30da\u30fc\u30b8\u306e","[\u30ea\u30dd\u30b8\u30c8\u30ea]"," -> ","[GitHub Actions workflow file \u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9 \u30c9\u30e1\u30a4\u30f3]","\u306b\u8868\u793a\u3055\u308c\u3066\u3044\u308b\u5185\u5bb9\u3092\u8a18\u8f09\u3057\u3066\u304f\u3060\u3055\u3044\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","YAML\u30d5\u30a1\u30a4\u30eb\u5185\u306b\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3\u306a\u3069\u3082\u8a18\u8f09\u3055\u308c\u3066\u3044\u307e\u3059\u306e\u3067\u3001\u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u30b3\u30d4\u30fc\u3084\u30c9\u30e1\u30a4\u30f3\u306e\u5909\u66f4\u3092\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306a\u3069\u306f\u305d\u3061\u3089\u3082\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/4342bb0927ec2710b5d6ccab27e961ff.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/4342bb0927ec2710b5d6ccab27e961ff.png",alt:"fetched from Gyazo"}),"\n.github/workflows \u914d\u4e0b\u306eYAML\u30d5\u30a1\u30a4\u30eb\u306b\u3064\u3044\u3066\u306f\u3001",(0,n.kt)("a",{parentName:"p",href:"/ja/docs/tutorials/connect-to-github-with-kuroco-front/#%E3%83%87%E3%83%97%E3%83%AD%E3%82%A4%E6%89%8B%E9%A0%86"},"GitHub\u304b\u3089KurocoFront\u3078\u30bd\u30fc\u30b9\u3092\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u65b9\u6cd5 \u30c7\u30d7\u30ed\u30a4\u624b\u9806"),"\u306e\u300c4. .github/workflows \u306bYAML\u30d5\u30a1\u30a4\u30eb\u3092\u914d\u7f6e\u3059\u308b\u300d\u3092\u3054\u53c2\u8003\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("h2",{id:"\u4e0a\u8a18\u3067\u89e3\u6c7a\u3057\u306a\u3044\u5834\u5408"},"\u4e0a\u8a18\u3067\u89e3\u6c7a\u3057\u306a\u3044\u5834\u5408"),(0,n.kt)("p",null,"\u4e0a\u8a18\u306e\u5bfe\u5fdc\u65b9\u6cd5\u3067\u89e3\u6c7a\u3057\u306a\u3044\u5834\u5408\u306f ",(0,n.kt)("a",{parentName:"p",href:"https://kuroco.zendesk.com/hc/ja"},"\u304a\u554f\u3044\u5408\u308f\u305b\u30d5\u30a9\u30fc\u30e0"),"\u3088\u308a\u304a\u554f\u3044\u5408\u308f\u305b\u304f\u3060\u3055\u3044\u3002"))}f.isMDXComponent=!0}}]);