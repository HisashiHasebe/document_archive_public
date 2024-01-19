"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[57625],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>g});var n=a(67294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var d=n.createContext({}),l=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=l(t.components);return n.createElement(d.Provider,{value:e},t.children)},p="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,r=t.originalType,d=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),p=l(a),u=o,g=p["".concat(d,".").concat(u)]||p[u]||m[u]||r;return a?n.createElement(g,i(i({ref:e},c),{},{components:a})):n.createElement(g,i({ref:e},c))}));function g(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var d in e)hasOwnProperty.call(e,d)&&(s[d]=e[d]);s.originalType=t,s[p]="string"==typeof t?t:o,i[1]=s;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},11766:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=a(87462),o=(a(67294),a(3905));const r={title:"Sharing a single front-end among multiple back-ends",description:"This tutorial explains how to build a B2B application where you can switch between back-ends using the company codes (site keys)."},i=void 0,s={unversionedId:"tutorials/one-server-for-front-end-and-switch-back-end-using-site-key",id:"tutorials/one-server-for-front-end-and-switch-back-end-using-site-key",title:"Sharing a single front-end among multiple back-ends",description:"This tutorial explains how to build a B2B application where you can switch between back-ends using the company codes (site keys).",source:"@site/docs/tutorials/one-server-for-front-end-and-switch-back-end-using-site-key.md",sourceDirName:"tutorials",slug:"/tutorials/one-server-for-front-end-and-switch-back-end-using-site-key",permalink:"/docs/tutorials/one-server-for-front-end-and-switch-back-end-using-site-key",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/tutorials/one-server-for-front-end-and-switch-back-end-using-site-key.md",tags:[],version:"current",frontMatter:{title:"Sharing a single front-end among multiple back-ends",description:"This tutorial explains how to build a B2B application where you can switch between back-ends using the company codes (site keys)."},sidebar:"documentationSidebar",previous:{title:"Adding Vue components to the admin panel using plugins",permalink:"/docs/tutorials/apply-vue-to-a-kuroco-management-screen-with-the-plugin"},next:{title:"Use Dashboard Widgets to Edit admin panel Display",permalink:"/docs/tutorials/edit-the-dashboard-view"}},d={},l=[{value:"Overview",id:"overview",level:2},{value:"Before you start",id:"before-you-start",level:2},{value:"Main site setup",id:"main-site-setup",level:2},{value:"Adding contents",id:"adding-contents",level:3},{value:"Endpoint setup",id:"endpoint-setup",level:3},{value:"Front-end setup",id:"front-end-setup",level:2},{value:"Adding the &quot;Subscribers-only&quot; page",id:"adding-the-subscribers-only-page",level:3},{value:"Change the URL hitting the endpoint at login",id:"change-the-url-hitting-the-endpoint-at-login",level:3},{value:"Create a back-end for users",id:"create-a-back-end-for-users",level:2},{value:"Adding a sub-site",id:"adding-a-sub-site",level:3},{value:"Sub-site content modification",id:"sub-site-content-modification",level:3},{value:"CORS verification",id:"cors-verification",level:3},{value:"Verify the front-end display",id:"verify-the-front-end-display",level:2}],c={toc:l},p="wrapper";function m(t){let{components:e,...a}=t;return(0,o.kt)(p,(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"When building a B2B service using Kuroco, you may want to use a common design with different content from customer to customer. In such cases, you can use a shared front-end and switch between back-ends for each customer.  "),(0,o.kt)("p",null,"As part of the package, Kuroco's demo site is a simple membership site with a common front-end.  "),(0,o.kt)("p",null,"Site URL: ",(0,o.kt)("a",{parentName:"p",href:"https://dev-nuxt-auth.g.kuroco-front.app/"},"https://dev-nuxt-auth.g.kuroco-front.app/"),(0,o.kt)("br",{parentName:"p"}),"\n","GitHub repository: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/diverta/front_nuxt_auth"},"https://github.com/diverta/front_nuxt_auth")),(0,o.kt)("p",null,"This tutorial explains how to build a B2B application (your main site) and copy it to create new client-specific back-ends (sub-sites)."),(0,o.kt)("h2",{id:"before-you-start"},"Before you start"),(0,o.kt)("p",null,"To begin this tutorial, you should have an existing project built with Kuroco and Nuxt.js. If you have not done so, refer to the tutorials below for step-by-step guides."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/tutorials/beginners-guide/"},"Beginner's guide to Kuroco"),"  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/tutorials/integrate-kuroco-with-nuxt/"},"Creating content list page with Kuroco and Nuxt.js"),"  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/tutorials/integrate-login/"},"Building a login page using Kuroco and Nuxt.js"))),(0,o.kt)("h2",{id:"main-site-setup"},"Main site setup"),(0,o.kt)("p",null,"For this tutorial, we are using the following site keys:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Main site (master): ",(0,o.kt)("inlineCode",{parentName:"li"},"sample-b2b-service-en")),(0,o.kt)("li",{parentName:"ul"},"Sub-site: ",(0,o.kt)("inlineCode",{parentName:"li"},"sample-b2b-service-001"))),(0,o.kt)("h3",{id:"adding-contents"},"Adding contents"),(0,o.kt)("p",null,"First, create a new content structure."),(0,o.kt)("p",null,"In the left sidebar menu, select ","[Content structure]","."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/554819255266081df0156a423aca1918.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/554819255266081df0156a423aca1918.png",alt:"Image from Gyazo"})),(0,o.kt)("p",null,"In the upper right corner, click ","[Add]","."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/7d22af715034a04bc34987a454507e3b.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/7d22af715034a04bc34987a454507e3b.png",alt:"Image from Gyazo"})),(0,o.kt)("p",null,'Create a new content structure called "Subscribers-only" with two additional fields.'),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/d1df107ce9110b81670259ac194dc0c9.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/d1df107ce9110b81670259ac194dc0c9.png",alt:"Image from Gyazo"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/1b0b97f8cac2f782fc3ab85ca350adf9.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/1b0b97f8cac2f782fc3ab85ca350adf9.png",alt:"Image from Gyazo"})),(0,o.kt)("p",null,"Then, go to the Content editor by selecting ","[Contents]"," -> ","[Subscribers-only]"," in the sidebar menu."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/38946215386198cf9f7f30ba085de60c.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/38946215386198cf9f7f30ba085de60c.png",alt:"Image from Gyazo"})),(0,o.kt)("p",null,"On the content list screen, click ","[Add]"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/11a55eff6d3c5cd97dbd17069e86a529.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/11a55eff6d3c5cd97dbd17069e86a529.png",alt:"Image from Gyazo"})),(0,o.kt)("p",null,"Create your post and click ","[Add]"," at the bottom of the screen to save it."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/5c2a66a66a58fef3074bda7676cd1bb3.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/5c2a66a66a58fef3074bda7676cd1bb3.png",alt:"Image from Gyazo"})),(0,o.kt)("p",null,"Note down the content definition ID (topic group ID) and content ID (topic ID) for later use."),(0,o.kt)("p",null,"Content structure:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/96dcd1dcd93be9fbbeadd8fd931bf755.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/96dcd1dcd93be9fbbeadd8fd931bf755.png",alt:"Image from Gyazo"})),(0,o.kt)("p",null,"Content:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/5e4c323b1d03ec540fb1e8e03a71bc7c.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/5e4c323b1d03ec540fb1e8e03a71bc7c.png",alt:"Image from Gyazo"})),(0,o.kt)("h3",{id:"endpoint-setup"},"Endpoint setup"),(0,o.kt)("p",null,"Next, in the sidebar menu, select ","[API]"," -> ","[Default]",".  "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/684369e81e89c0fef676790a6fa973cf.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/684369e81e89c0fef676790a6fa973cf.png",alt:"Image from Gyazo"})),(0,o.kt)("p",null,"In the upper right corner of the endpoint list screen, click ","[Add]","."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/3928cb9d725bb5de57677f23dd475cf6.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/3928cb9d725bb5de57677f23dd475cf6.png",alt:"Image from Gyazo"})),(0,o.kt)("p",null,"Enter the title, version, and description in the dialog and click ","[Add]","."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/2b2ef2111634d81beac76db3a1335087.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/2b2ef2111634d81beac76db3a1335087.png",alt:"Image from Gyazo"})),(0,o.kt)("p",null,"You will be redirected to the newly created endpoint list screen."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/3c380eabd4d10b2665c72c3d8ef6db05.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/3c380eabd4d10b2665c72c3d8ef6db05.png",alt:"Image from Gyazo"})),(0,o.kt)("p",null,"Click ","[Security]","."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/0d7ecee42ba024288cc63c47fc0e33ce.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/0d7ecee42ba024288cc63c47fc0e33ce.png",alt:"Image from Gyazo"})),(0,o.kt)("p",null,"In the security dialog, select ","[Cookie]"," and click ","[save]","."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/15897747a30a295067bc94f639bcfbbd.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/15897747a30a295067bc94f639bcfbbd.png",alt:"Image from Gyazo"})),(0,o.kt)("p",null,"Next, click ","[Operation CORS]"," on the endpoint list screen."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/7b4b281438b6c31d0e8db59c877ab820.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/7b4b281438b6c31d0e8db59c877ab820.png",alt:"Image from Gyazo"})),(0,o.kt)("p",null,'Under "CORS_ALLOW_ORIGINS", click ',"[Add Origin]"," twice and enter the following values:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:3000")),(0,o.kt)("li",{parentName:"ul"},"Your front-end domain (in this example, ",(0,o.kt)("inlineCode",{parentName:"li"},"https://sample-b2b-service-en.g.kuroco-front.app"),")")),(0,o.kt)("p",null,'Under "CORS_ALLOW_ORIGINS", click ',"[Add Method]"," and enter the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GET")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"POST")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"OPTIONS"))),(0,o.kt)("p",null,"When you are done, click ","[Save]","."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/f07bf5760ff0c9f5321ec7912f6c43c6.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/f07bf5760ff0c9f5321ec7912f6c43c6.png",alt:"Image from Gyazo"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/8cbc74914a0c8507662faae6918b2b1e.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/8cbc74914a0c8507662faae6918b2b1e.png",alt:"Image from Gyazo"})),(0,o.kt)("p",null,'Now, you are ready to create an endpoint for retrieving content from "Subscribers-only".'),(0,o.kt)("p",null,"On the endpoint list screen, click ","[Add new endpoint]","."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/32722e59db006b2dc9ca1f07bd5b274d.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/32722e59db006b2dc9ca1f07bd5b274d.png",alt:"Image from Gyazo"})),(0,o.kt)("p",null,"Input the following and click ","[Add]"," to save the settings:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Sub-field"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Path"),(0,o.kt)("td",{parentName:"tr",align:"left"},"-"),(0,o.kt)("td",{parentName:"tr",align:"left"},"/rcms-api/3/",(0,o.kt)("inlineCode",{parentName:"td"},"service_top"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"},"Enabled/Disabled"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Enabled")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Model"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Category"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Content")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"},"Model"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Topics")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"},"Operation"),(0,o.kt)("td",{parentName:"tr",align:"left"},"details")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Basic settings"),(0,o.kt)("td",{parentName:"tr",align:"left"},"topics_group_id"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Enter your content structure ID (",(0,o.kt)("inlineCode",{parentName:"td"},"7")," in this example).")))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/55ed922315ee55042fcb25051bb789bf.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/55ed922315ee55042fcb25051bb789bf.png",alt:"Image from Gyazo"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/33b53e8cbb82bdf0c6731a7734147859.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/33b53e8cbb82bdf0c6731a7734147859.png",alt:"Image from Gyazo"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/d68ed12e5100f7cff1e3d23dd53166bd.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/d68ed12e5100f7cff1e3d23dd53166bd.png",alt:"Image from Gyazo"})),(0,o.kt)("h2",{id:"front-end-setup"},"Front-end setup"),(0,o.kt)("h3",{id:"adding-the-subscribers-only-page"},'Adding the "Subscribers-only" page'),(0,o.kt)("p",null,"After the back-end configuration, we will set up the front-end display for the content we created above."),(0,o.kt)("p",null,"In your ",(0,o.kt)("inlineCode",{parentName:"p"},"/pages")," directory, make a new folder named ",(0,o.kt)("inlineCode",{parentName:"p"},"/owners-page")," and add the following ",(0,o.kt)("inlineCode",{parentName:"p"},"index.vue"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markup",metastring:"[/pages/owners-page/index.vue]","[/pages/owners-page/index.vue]":!0},"<template>\n  <div>\n    <h1>{{ response.details.ext_1}}</h1>\n    <p>{{ response.details.ext_2}}</p>\n\n  <button type=\"button\" @click=\"logout\">\n  Logout\n  </button>\n  </div>\n</template>\n\n<script>\nimport { mapActions } from 'vuex'\n\nexport default {\n  middleware: 'auth',\n  async asyncData({$axios}) {\n    try {\n      const response = await $axios.$get('/rcms-api/3/service_top/3')\n      return { response }\n    } catch (e) {\n      console.log(e.message)\n    }\n  },\n  methods: {\n    ...mapActions(['logout'])\n  }\n}\n<\/script>\n")),(0,o.kt)("h3",{id:"change-the-url-hitting-the-endpoint-at-login"},"Change the URL hitting the endpoint at login"),(0,o.kt)("p",null,"The next step is to make the URL hitting the endpoint modifiable from the front-end.",(0,o.kt)("br",{parentName:"p"}),"\n","To do this, modify ",(0,o.kt)("inlineCode",{parentName:"p"},"/pages/login/index.vue")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"/store/index.js")," as shown below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markup",metastring:"[/pages/login/index.vue]","[/pages/login/index.vue]":!0},'<template>\n    <form @submit.prevent="login">\n      <p v-if="loginStatus !== null" :style="{ color: resultMessageColor }">\n        {{ resultMessage }}\n      </p>\n\n        <input v-model="sitekey" name="sitekey" type="sitekey" placeholder="sitekey">\n        <input v-model="email" name="email" type="email" placeholder="email">\n        <input\n            v-model="password"\n            name="password"\n            type="password"\n            placeholder="password"\n        >\n        <button type="submit">\n            Login\n        </button>\n\n        <div>\n            <nuxt-link to="/news/">\n                To News list\n            </nuxt-link>\n        </div>\n        <div>\n            <nuxt-link to="/owners-page/">\n                To Subscribers page\n            </nuxt-link>\n        </div>\n    </form>\n</template>\n\n<script>\nexport default {\n    data () {\n        return {\n            sitekey: \'\',\n            email: \'\',\n            password: \'\',\n            loginStatus: null,\n            resultMessage: null\n        }\n    },\n    computed: {\n        resultMessageColor () {\n            switch (this.loginStatus) {\n            case \'success\':\n                return \'green\'\n            case \'failure\':\n                return \'red\'\n            default:\n                return \'\'\n            }\n        }\n    },\n    methods: {\n        async login () {\n            try {\n                const payload = {\n                    sitekey: this.sitekey,\n                    loginInfo: {\n                        email: this.email,\n                        password: this.password\n                    }\n                }\n                await this.$store.dispatch(\'login\', payload)\n                this.loginStatus = \'success\'\n                this.resultMessage = \'Login successful\'\n            } catch (e) {\n                this.loginStatus = \'failure\'\n                this.resultMessage = \'Login failed\'\n            }\n        }\n    }\n}\n<\/script>\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"[/store/index.js]","[/store/index.js]":!0},"export const state = () => ({\n    profile: null\n})\n\nexport const getters = {\n    authenticated (state) {\n        return state.profile !== null\n    },\n    hostname () {\n        try {\n            const sitekey = localStorage.getItem('sitekey');\n            if (sitekey === '' || sitekey === 'undefined' || sitekey === 'null') {\n                throw new Error('unknown sitekey');\n            }\n            return `https://${sitekey}.g.kuroco.app`;\n        } catch (e) {\n            return false;\n        }\n    }\n}\n\nexport const mutations = {\n    setProfile (state, { profile }) {\n        state.profile = profile\n    },\n}\n\nexport const actions = {\n    async login ({ commit, getters }, payload) {\n        localStorage.setItem('sitekey', payload.sitekey);\n        this.$axios.defaults.baseURL = getters.hostname;\n\n        await this.$axios.$post('/rcms-api/1/login', payload.loginInfo)\n        const profileRes = await this.$axios.$get('/rcms-api/1/profile', { withCredentials: true })\n        commit('setProfile', { profile: profileRes.data })        \n    },\n\n    async logout ({ commit }) {\n        try {\n            await this.$axios.$post('/rcms-api/1/logout')\n        } catch {\n             /** No Process */\n             /** In cases of error, ignore this as user is assumed to be logged out. */\n            }\n            commit('setProfile', { profile: null })\n\n            this.$router.push('/login')\n        },\n\n    async restoreLoginState ({ commit, dispatch, getters }) {\n        if (!getters.hostname) {\n            await dispatch('logout')\n            throw new Error('need to login')\n        }\n        try {\n            this.$axios.defaults.baseURL = getters.hostname;\n            const profileRes = await this.$axios.$get('/rcms-api/1/profile', { withCredentials: true })\n            commit('setProfile', { profile: profileRes.data });\n        } catch {\n            await dispatch('logout')\n            throw new Error('need to login')\n        }\n    }\n}\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Make sure to substitute ",(0,o.kt)("inlineCode",{parentName:"p"},"/rcms-api/1/login"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"/rcms-api/1/profile"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"/rcms-api/1/logout")," in the above code with the corresponding endpoints on your own admin panel.")),(0,o.kt)("h2",{id:"create-a-back-end-for-users"},"Create a back-end for users"),(0,o.kt)("h3",{id:"adding-a-sub-site"},"Adding a sub-site"),(0,o.kt)("p",null,"Next, create a sub-site for subscribers from the admin panel. "),(0,o.kt)("p",null,"In the left sidebar menu, select ","[Environment]"," -> ","[Site list]","."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/f0d18df7c5b5b0d0420395046fa8fcbd.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/f0d18df7c5b5b0d0420395046fa8fcbd.png",alt:"Image from Gyazo"})),(0,o.kt)("p",null,"On the site list screen, click ","[Add]","."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/e1a37d7f7b957913b8a093dc4a1541cc.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/e1a37d7f7b957913b8a093dc4a1541cc.png",alt:"Image from Gyazo"})),(0,o.kt)("p",null,"Input the following information:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Source site name"),(0,o.kt)("td",{parentName:"tr",align:"left"},"sample-b2b-service-en(sample-b2b-service-en)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Site name"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Diverta Inc. website"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Site key"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"sample-b2b-service-001-en"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"URL"),(0,o.kt)("td",{parentName:"tr",align:"left"},'Enable "Front-end sharing" and select ',"[https://sample-b2b-service-en.g.kuroco-front.app]",".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"E-mail"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Enter the e-mail address for receiving the sign-up notification.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Initial password"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Enter your desired password.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Company name"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Diverta Inc.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Diverta Taro")))),(0,o.kt)("p",null,"When you are done, click ","[Add]"," at the bottom of the screen to save the changes."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/61a50aec01c252ede5d4ba77ac00d636.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/61a50aec01c252ede5d4ba77ac00d636.png",alt:"Image from Gyazo"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/ac02c5c1391cfcd3130059acd003c087.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/ac02c5c1391cfcd3130059acd003c087.png",alt:"Image from Gyazo"})),(0,o.kt)("h3",{id:"sub-site-content-modification"},"Sub-site content modification"),(0,o.kt)("p",null,"When the sub-site has been successfully created, you will receive en e-mail notification. The sub-site will also appear on the site list screen. Click ","[Admin panel]"," to access it."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/d8a095d2d32ea974de0e5efc1ecd5b2a.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/d8a095d2d32ea974de0e5efc1ecd5b2a.png",alt:"Image from Gyazo"})),(0,o.kt)("p",null,"You will be redirected to the login page."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/830a02dd36a1eabf44472b2d13193c80.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/830a02dd36a1eabf44472b2d13193c80.png",alt:"Image from Gyazo"})),(0,o.kt)("p",null,"After logging in, go to ","[Content]"," -> ","[Subscribers-only]"," in the sidebar menu."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/a86737e552c004f5a23e2bbb148119d6.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/a86737e552c004f5a23e2bbb148119d6.png",alt:"Image from Gyazo"})),(0,o.kt)("p",null,"On the content list screen, click ","[Subscribers main page]"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/d83f1c3181a6f67590aa029aa71355a8.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/d83f1c3181a6f67590aa029aa71355a8.png",alt:"Image from Gyazo"})),(0,o.kt)("p",null,"Make the desired changes to the post and click ","[Update]"," to save them."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/489189630542d0de79f87eea9a7e8695.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/489189630542d0de79f87eea9a7e8695.png",alt:"Image from Gyazo"})),(0,o.kt)("h3",{id:"cors-verification"},"CORS verification"),(0,o.kt)("p",null,"By enabling front-end sharing when creating the sub-site, your front-end URL has been automatically be added to your account settings and the API CORS settings."),(0,o.kt)("p",null,"To verify this in the CORS settings, select ","[API]"," -> ","[B2B service]"," in the sidebar menu."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/9dac040c2e17175a45281ad62e23ecd6.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/9dac040c2e17175a45281ad62e23ecd6.png",alt:"Image from Gyazo"})),(0,o.kt)("p",null,"On the endpoint list screen, click ","[Operation CORS]","."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/78dc63d79873a9e7fd6d23736444a3f1.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/78dc63d79873a9e7fd6d23736444a3f1.png",alt:"Image from Gyazo"})),(0,o.kt)("p",null,"We have confirmed that the front-end URL selected in front-end sharing has been added to CORS_ALLOW_ORIGINS. "),(0,o.kt)("p",null,'Make sure the shared front-end has been added under "CORS_ALLOW_ORIGINS".    '),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/6430c06c77e8ef7a40249c26c6b62dd4.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/6430c06c77e8ef7a40249c26c6b62dd4.png",alt:"Image from Gyazo"})),(0,o.kt)("h2",{id:"verify-the-front-end-display"},"Verify the front-end display"),(0,o.kt)("p",null,"Serve the project in your terminal and go to ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/owners-page")," in your browser. You will be redirected to the login page. Log in with the main site key and click the ","[To Subscribers page]"," link."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/44e71c8ef3ca2cee266e98d28fcb7c0d.gif?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/44e71c8ef3ca2cee266e98d28fcb7c0d.gif",alt:"Image from Gyazo"})),(0,o.kt)("p",null,"Click ","[Logout]"," and refresh the screen. Then, log in with the sub-site key and access the Subscribers page. "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/bb1a771a9cf1e1a64e6553c2af4dd0ad.gif?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/bb1a771a9cf1e1a64e6553c2af4dd0ad.gif",alt:"Image from Gyazo"})),(0,o.kt)("p",null,"This concludes the function to switch back-ends for each customer while sharing the same front-end.",(0,o.kt)("br",{parentName:"p"}),"\n","By implementing functions such as e-mailing, content posting, and commenting on the customer-specific pages created with this function, you can build B2B services for your customers using Kuroco.  "),(0,o.kt)("p",null,"In this tutorial, the content was modified in the admin panel. Alternatively, you can also enable users to add and update content themselves using the API. You can even add the site itself via API. "),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Usage fees for sub-sites are billed together with the main site.  ")))}m.isMDXComponent=!0}}]);