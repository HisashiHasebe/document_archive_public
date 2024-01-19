"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[12214],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),g=o,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||i;return a?n.createElement(m,r(r({ref:t},p),{},{components:a})):n.createElement(m,r({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},88315:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const i={title:"Building a multi-language website with Kuroco and Nuxt.js",description:"This tutorial explains how to build a multi-language website with your Nuxt.js project using Kuroco."},r=void 0,l={unversionedId:"tutorials/building-a-multi-language-site",id:"tutorials/building-a-multi-language-site",title:"Building a multi-language website with Kuroco and Nuxt.js",description:"This tutorial explains how to build a multi-language website with your Nuxt.js project using Kuroco.",source:"@site/docs/tutorials/building-a-multi-language-site.md",sourceDirName:"tutorials",slug:"/tutorials/building-a-multi-language-site",permalink:"/docs/tutorials/building-a-multi-language-site",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/tutorials/building-a-multi-language-site.md",tags:[],version:"current",frontMatter:{title:"Building a multi-language website with Kuroco and Nuxt.js",description:"This tutorial explains how to build a multi-language website with your Nuxt.js project using Kuroco."},sidebar:"documentationSidebar",previous:{title:"Setting up inquiry forms with Confirmation Page using Kuroco and Nuxt.js",permalink:"/docs/tutorials/setting-up-inquiry-forms-with-confirmation-page"},next:{title:"Creating a Subscription Form for Subscribers using Kuroco and Nuxt.js",permalink:"/docs/tutorials/implement-a-magazine-subscription-unsubscription-form"}},s={},c=[{value:"1. Install nuxt-i18n",id:"1-install-nuxt-i18n",level:2},{value:"2. Create a <code>locales</code> folder",id:"2-create-a-locales-folder",level:2},{value:"3. Modify <code>nuxt.config.js</code>",id:"3-modify-nuxtconfigjs",level:2},{value:"4. Multi-language support for the front-end",id:"4-multi-language-support-for-the-front-end",level:2},{value:"A. Multi-language page titles",id:"a-multi-language-page-titles",level:3},{value:"B. Language buttons",id:"b-language-buttons",level:3},{value:"5. Multi-language support for the back-end (Kuroco)",id:"5-multi-language-support-for-the-back-end-kuroco",level:2},{value:"A. Enable multi-language settings",id:"a-enable-multi-language-settings",level:3},{value:"B. Add secondary language content",id:"b-add-secondary-language-content",level:3},{value:"C. Verify the API response for each language setting",id:"c-verify-the-api-response-for-each-language-setting",level:3},{value:"6. Front-end fixes",id:"6-front-end-fixes",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This tutorial explains how to build a multi-language website with your Nuxt.js project using Kuroco."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Before starting this tutorial, you should have already built a Nuxt.js project with Kuroco. If you haven't done so, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorials/integrate-kuroco-with-nuxt/"},"Tutorial: Creating a content list page with Kuroco and Nuxt.js")," on how to build one.")),(0,o.kt)("h2",{id:"1-install-nuxt-i18n"},"1. Install nuxt-i18n"),(0,o.kt)("p",null,"First, install nuxt-i18n. In your terminal, go to the directory of the target project and execute the following command: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm i nuxt-i18n\n")),(0,o.kt)("h2",{id:"2-create-a-locales-folder"},"2. Create a ",(0,o.kt)("inlineCode",{parentName:"h2"},"locales")," folder"),(0,o.kt)("p",null,"Next, create a ",(0,o.kt)("inlineCode",{parentName:"p"},"locales")," folder in the project directory and save the locale file for each language in JSON format. For this tutorial, we will create the files ",(0,o.kt)("inlineCode",{parentName:"p"},"locales/en.json")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"locales/en.json")," to support English- and Japanese-language displays. "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/4ab99e8a6cb85c1b9d46e6c7155a9d6b.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/4ab99e8a6cb85c1b9d46e6c7155a9d6b.png",alt:"fetched from Gyazo"}),"\nThe basic contents of the locale files are as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"[locales/en.json]","[locales/en.json]":!0},'{\n  "links": {\n    "home": "Home",\n    "news": "News",\n    "en": "English",\n    "ja": "Japanese"\n  },\n  "home": {\n    "title": "front_kuroco_sample_support"\n  }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"[locales/ja.json]","[locales/ja.json]":!0},'{\n  "links": {\n    "home": "\u30db\u30fc\u30e0",\n    "news": "\u304a\u77e5\u3089\u305b",\n    "en": "\u82f1\u8a9e",\n    "ja": "\u65e5\u672c\u8a9e"\n  },\n  "home": {\n    "title": "\u30d5\u30ed\u30f3\u30c8Kuroco\u30b5\u30f3\u30d7\u30eb"\n  }\n}\n')),(0,o.kt)("p",null,"(Note: Other items may be added as needed.)"),(0,o.kt)("h2",{id:"3-modify-nuxtconfigjs"},"3. Modify ",(0,o.kt)("inlineCode",{parentName:"h2"},"nuxt.config.js")),(0,o.kt)("p",null,"Then, add the code below to the ",(0,o.kt)("inlineCode",{parentName:"p"},"modules")," section of ",(0,o.kt)("inlineCode",{parentName:"p"},"nuxt.config.js"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"[nuxt.config.js]","[nuxt.config.js]":!0},"   [\n      'nuxt-i18n',\n      {\n        strategy: 'prefix_and_default',\n        // Define the language options\n        locales: [\n          { code: 'ja', file: 'ja.json' },\n          { code: 'en', file: 'en.json' },\n        ],\n        // Set the default language\n        defaultLocale: 'ja',\n        vueI18nLoader: true,\n        lazy: true,\n        // Specify the directory for the JSON file\n        langDir: 'locales/',\n      },\n    ],\n")),(0,o.kt)("h2",{id:"4-multi-language-support-for-the-front-end"},"4. Multi-language support for the front-end"),(0,o.kt)("p",null,"The next step is to configure the actual display.  "),(0,o.kt)("h3",{id:"a-multi-language-page-titles"},"A. Multi-language page titles"),(0,o.kt)("p",null,"Modify the text to be displayed in multiple languages by placing ",(0,o.kt)("inlineCode",{parentName:"p"},"$t")," before it. Here, we change the main heading of the ",(0,o.kt)("inlineCode",{parentName:"p"},"pages/index.vue")," file which displays the home page as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markup",metastring:"[pages/index.vue]","[pages/index.vue]":!0},"<h1 class=\"title\">{{ $t('home.title') }}</h1>\n")),(0,o.kt)("h3",{id:"b-language-buttons"},"B. Language buttons"),(0,o.kt)("p",null,"Also, we need to configure the language buttons. Under the ",(0,o.kt)("inlineCode",{parentName:"p"},"<template>")," section of ",(0,o.kt)("inlineCode",{parentName:"p"},"layouts/default.vue"),", add the ",(0,o.kt)("inlineCode",{parentName:"p"},"<header>")," tag below: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markup",metastring:"[layouts/default.vue]","[layouts/default.vue]":!0},"<template>\n  <div>\n    <header>\n      <nuxt-link :to=\"switchLocalePath('en')\">{{ $t('links.en') }}</nuxt-link>|<nuxt-link :to=\"switchLocalePath('ja')\">{{ $t('links.ja') }}</nuxt-link>\n    </header>\n    <Nuxt />\n  </div>\n</template>\n")),(0,o.kt)("p",null,"Afterwards, verify that you can now switch languages on the home page."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/951e17eb450dbd49a87f985e0f728a0e.gif?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/951e17eb450dbd49a87f985e0f728a0e.gif",alt:"fetched from Gyazo"})),(0,o.kt)("h2",{id:"5-multi-language-support-for-the-back-end-kuroco"},"5. Multi-language support for the back-end (Kuroco)"),(0,o.kt)("p",null,"Next, we will add multi-language support for the ",(0,o.kt)("inlineCode",{parentName:"p"},"/news/")," page created in ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorials/integrate-kuroco-with-nuxt/"},"Tutorial: Creating a content list page with Kuroco and Nuxt.js"),". "),(0,o.kt)("h3",{id:"a-enable-multi-language-settings"},"A. Enable multi-language settings"),(0,o.kt)("p",null,"In the left sidebar menu of the Kuroco admin panel, click ","[Environment]"," -> ","[Localization]","."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/b4896793c0562fd0f0fa646d2fc7d652.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/b4896793c0562fd0f0fa646d2fc7d652.png",alt:"fetched from Gyazo"}),"\nIn the ",(0,o.kt)("inlineCode",{parentName:"p"},"Multi-language")," field, select your primary and secondary languages, and then click ","[Update]",".  "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/de1fb4bef293ef38f6d7e76e78941473.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/de1fb4bef293ef38f6d7e76e78941473.png",alt:"fetched from Gyazo"})),(0,o.kt)("h3",{id:"b-add-secondary-language-content"},"B. Add secondary language content"),(0,o.kt)("p",null,"The next step is to add content in the secondary language. In the ","[Content]"," module, click the existing category ","[\u304a\u77e5\u3089\u305b]",".  "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/7e3e0160e0f204f56d50ca792d237562.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/7e3e0160e0f204f56d50ca792d237562.png",alt:"fetched from Gyazo"}),"\nOn the content list screen, click the title of the content you want to localize."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/95d6ce38c796c46e5ba0d62f1436b325.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/95d6ce38c796c46e5ba0d62f1436b325.png",alt:"fetched from Gyazo"}),"\nIf you have set up multiple languages in the localization module, the tabs for the secondary languages will be displayed on the content editor screen. Click the ","[English]"," tab."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/4f1377cbd0eec72d7056d62f3a06e1ef.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/4f1377cbd0eec72d7056d62f3a06e1ef.png",alt:"fetched from Gyazo"}),"\nEnter the English version of the content and click ","[Update]"," to apply the changes."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/d78d13546f0a14cb620a77d6c8a84277.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/d78d13546f0a14cb620a77d6c8a84277.png",alt:"fetched from Gyazo"}),"\nRepeat the above steps to add content in other secondary languages.  "),(0,o.kt)("h3",{id:"c-verify-the-api-response-for-each-language-setting"},"C. Verify the API response for each language setting"),(0,o.kt)("p",null,"Verify the secondary language API response using Swagger UI. Under the ","[API]"," module, go to the endpoint list that contains ",(0,o.kt)("inlineCode",{parentName:"p"},"news")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"newsdetail")," endpoints.  "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/144acbb2e63502be8106606393ffdc18.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/144acbb2e63502be8106606393ffdc18.png",alt:"fetched from Gyazo"}),"\nOn the endpoint list screen, click ","[Swagger UI]","."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/44a00b2198119891f0391bdff80ca9f2.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/44a00b2198119891f0391bdff80ca9f2.png",alt:"fetched from Gyazo"}),"\nExpand the Swagger UI for the ",(0,o.kt)("inlineCode",{parentName:"p"},"newsdetail")," endpoint and click ","[Try it out]","."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/53a51594ef9abdd615463a55522dfed7.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/53a51594ef9abdd615463a55522dfed7.png",alt:"fetched from Gyazo"}),"\nEnter the topic ID and click ","[Execute]",".  "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/f2b9d2799c9b761a420a18e644ab2fca.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/f2b9d2799c9b761a420a18e644ab2fca.png",alt:"fetched from Gyazo"}),"\nVerify the response in the primary language."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/20d341cf836f16f09018786b1a43bd14.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/20d341cf836f16f09018786b1a43bd14.png",alt:"fetched from Gyazo"}),"\nNext, enter ",(0,o.kt)("inlineCode",{parentName:"p"},"en")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"_lang")," field and click ","[Execute]","."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/215a41466d245b64522a2b81397258a6.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/215a41466d245b64522a2b81397258a6.png",alt:"fetched from Gyazo"}),"\nThen verify the response in the second language. "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/869e9af0e0068c87a500b946a6c18c5b.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/869e9af0e0068c87a500b946a6c18c5b.png",alt:"fetched from Gyazo"}),"\nAs the request URL shows, you can add ",(0,o.kt)("inlineCode",{parentName:"p"},"?_lang=en")," after the endpoint to retrieve the English-language data."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/1b53a2597185fd27ab873a98c8ac2530.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/1b53a2597185fd27ab873a98c8ac2530.png",alt:"fetched from Gyazo"}),"\nAlso, verify the response in the secondary language (en) for the ",(0,o.kt)("inlineCode",{parentName:"p"},"news")," endpoint.  "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/a537926933c90a2c7ba4ba69857416b4.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/a537926933c90a2c7ba4ba69857416b4.png",alt:"fetched from Gyazo"})),(0,o.kt)("h2",{id:"6-front-end-fixes"},"6. Front-end fixes"),(0,o.kt)("p",null,"Finally, fix the description of the response from Kuroco's API to match the display language. To do this, modify ",(0,o.kt)("inlineCode",{parentName:"p"},"pages/news/index.vue")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"pages/news/_slug.vue")," as follows: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markup",metastring:"[pages/news/index.vue]","[pages/news/index.vue]":!0},"<template>\n  <div>\n    <div v-for=\"n in response.list\" :key=\"n.slug\">\n      <nuxt-link :to=\"localePath('/news/'+ n.slug)\">{{n.ymd}} {{n.subject}}</nuxt-link>\n    </div>\n  </div>\n</template>\n\n<script>\nexport default {\n  async asyncData({ $axios, app }) {\n    if(app.i18n.locale === 'ja'){\n      try {\n       const response = await $axios.$get(\n         process.env.BASE_URL + '/rcms-api/1/news'\n       )\n       console.log(response)\n       return { response }\n      } catch (e) {\n       console.log(e.message)\n       }\n    }\n    else{\n      try {\n       const response = await $axios.$get(\n         process.env.BASE_URL + '/rcms-api/1/news?_lang=en'\n       )\n       console.log(response)\n       return { response }\n      } catch (e) {\n        console.log(e.message)\n       }\n    }\n  },\n}\n<\/script>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markup",metastring:"[pages/news/_slug.vue]","[pages/news/_slug.vue]":!0},"<template>\n    <div>\n      <h1 class=\"title\">{{ response.details.subject }}</h1>\n      <div class=\"post\" v-html=\"response.details.contents\"></div>\n    </div>\n</template>\n\n<script>\nexport default {\n    async asyncData ({ $axios, params, app }) {\n        if(app.i18n.locale === 'ja'){\n            try {\n                const response = await $axios.$get(process.env.BASE_URL + '/rcms-api/1/newsdetail/' + `${params.slug}`)\n                console.log(response);\n                return { response }\n                }catch (e) {\n                    console.log(e.message)\n                    }\n        }\n        else{\n            try {\n                const response = await $axios.$get(process.env.BASE_URL + '/rcms-api/1/newsdetail/' + `${params.slug}` + '?_lang=en')\n                console.log(response);\n                return { response }\n                }catch (e) {\n                    console.log(e.message)\n                    }\n        }\n    },\n}\n<\/script>\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Substitute the request URL in the above code (",(0,o.kt)("inlineCode",{parentName:"p"},"process.env.BASE_URL + '/rcms-api/1/newsdetail/' + '${params.slug}'"),") with your own site. ")),(0,o.kt)("p",null,"Verify the display on ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/news"),". You will be able to change the display language of the content using the buttons at the top of the page.   "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/699bf8fd4a185ac260582e8649fa6ddd.gif?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/699bf8fd4a185ac260582e8649fa6ddd.gif",alt:"fetched from Gyazo"})))}u.isMDXComponent=!0}}]);