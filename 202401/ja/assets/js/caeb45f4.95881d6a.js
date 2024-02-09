"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[93066],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>k});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),l=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=l(t.components);return a.createElement(c.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,c=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),d=l(n),m=r,k=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(k,i(i({ref:e},p),{},{components:n})):a.createElement(k,i({ref:e},p))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s[d]="string"==typeof t?t:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52586:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={title:"GitHubActions\u306e\u30d3\u30eb\u30c9\u7d50\u679c\u3092slack-send\u3067\u901a\u77e5\u3059\u308b",description:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001GitHub Actions\u3068slack-send\u3092\u7d44\u307f\u5408\u308f\u305b\u3066\u3001\u30d3\u30eb\u30c9\u7d50\u679c\u3092Slack\u306b\u901a\u77e5\u3059\u308b\u65b9\u6cd5\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002"},i=void 0,s={unversionedId:"tutorials/handling-a-slack-send-in-github-actions",id:"tutorials/handling-a-slack-send-in-github-actions",title:"GitHubActions\u306e\u30d3\u30eb\u30c9\u7d50\u679c\u3092slack-send\u3067\u901a\u77e5\u3059\u308b",description:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001GitHub Actions\u3068slack-send\u3092\u7d44\u307f\u5408\u308f\u305b\u3066\u3001\u30d3\u30eb\u30c9\u7d50\u679c\u3092Slack\u306b\u901a\u77e5\u3059\u308b\u65b9\u6cd5\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/tutorials/handling-a-slack-send-in-github-actions.md",sourceDirName:"tutorials",slug:"/tutorials/handling-a-slack-send-in-github-actions",permalink:"/ja/docs/tutorials/handling-a-slack-send-in-github-actions",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/tutorials/handling-a-slack-send-in-github-actions.md",tags:[],version:"current",frontMatter:{title:"GitHubActions\u306e\u30d3\u30eb\u30c9\u7d50\u679c\u3092slack-send\u3067\u901a\u77e5\u3059\u308b",description:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001GitHub Actions\u3068slack-send\u3092\u7d44\u307f\u5408\u308f\u305b\u3066\u3001\u30d3\u30eb\u30c9\u7d50\u679c\u3092Slack\u306b\u901a\u77e5\u3059\u308b\u65b9\u6cd5\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002"},sidebar:"documentationSidebar",previous:{title:"GitHubActions\u3067generate\u306b\u5931\u6557\u3057\u305f\u5834\u5408\u306b\u3001\u30d3\u30eb\u30c9\u3092\u4e2d\u6b62\u3057Slack\u306b\u7d50\u679c\u3092\u901a\u77e5\u3059\u308b\u65b9\u6cd5",permalink:"/ja/docs/tutorials/handling-a-generate-error-in-github-actions"},next:{title:"\u30a2\u30af\u30c6\u30a3\u30d3\u30c6\u30a3\u6a5f\u80fd\u3067\u3001\u7279\u5b9a\u30e6\u30fc\u30b6\u30fc\u306b\u3057\u304b\u898b\u308c\u306a\u3044\u30b3\u30e1\u30f3\u30c8\u3092\u6b8b\u3059",permalink:"/ja/docs/tutorials/how-to-only-display-comments-that-are-addressed-to-a-specific-user"}},c={},l=[{value:"\u6982\u8981",id:"\u6982\u8981",level:2},{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:3},{value:"Slack\u30a2\u30d7\u30ea\u8a2d\u5b9a\u304b\u3089\u901a\u77e5\u7528\u30a2\u30d7\u30ea\u3092\u4f5c\u6210\u3059\u308b",id:"slack\u30a2\u30d7\u30ea\u8a2d\u5b9a\u304b\u3089\u901a\u77e5\u7528\u30a2\u30d7\u30ea\u3092\u4f5c\u6210\u3059\u308b",level:2},{value:"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306b\u30a2\u30d7\u30ea\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",id:"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306b\u30a2\u30d7\u30ea\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",level:2},{value:"GitHub\u306bSecrets\u306bWebhook URL\u3092\u8ffd\u52a0\u3059\u308b",id:"github\u306bsecrets\u306bwebhook-url\u3092\u8ffd\u52a0\u3059\u308b",level:2},{value:"Slack\u901a\u77e5\u7528\u306e\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3059\u308b",id:"slack\u901a\u77e5\u7528\u306e\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3059\u308b",level:2}],p={toc:l},d="wrapper";function u(t){let{components:e,...n}=t;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u6982\u8981"},"\u6982\u8981"),(0,r.kt)("p",null,"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001GitHub Actions\u3068slack-send\u3092\u7d44\u307f\u5408\u308f\u305b\u3066\u3001\u30d3\u30eb\u30c9\u7d50\u679c\u3092Slack\u306b\u901a\u77e5\u3059\u308b\u65b9\u6cd5\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"\u524d\u63d0\u6761\u4ef6"},"\u524d\u63d0\u6761\u4ef6"),(0,r.kt)("p",null,"\u672c\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u306f\u3001\u4e0b\u8a18\u6761\u4ef6\u306b\u3066\u30b5\u30a4\u30c8\u904b\u7528\u3092\u3057\u3066\u3044\u308b\u3053\u3068\u3092\u524d\u63d0\u3068\u3057\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Next.js/Nuxt.js\u3092\u5229\u7528\u3057\u3066\u3044\u308b\u3002"),(0,r.kt)("li",{parentName:"ul"},"KurocoFront\u3092\u5229\u7528\u3057\u3066\u3044\u308b\u3002"),(0,r.kt)("li",{parentName:"ul"},"GitHub Actions\u3092\u5229\u7528\u3057\u3066\u3044\u308b\u3002")),(0,r.kt)("p",null,"\u307e\u305f\u3001\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306fslack-send\u3092\u5229\u7528\u3057\u3066slack\u306b\u901a\u77e5\u3092\u884c\u3044\u307e\u3059\u3002\n\u8a73\u7d30\u306f",(0,r.kt)("a",{parentName:"p",href:"https://github.com/marketplace/actions/slack-send"},"slack-send\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h2",{id:"slack\u30a2\u30d7\u30ea\u8a2d\u5b9a\u304b\u3089\u901a\u77e5\u7528\u30a2\u30d7\u30ea\u3092\u4f5c\u6210\u3059\u308b"},"Slack\u30a2\u30d7\u30ea\u8a2d\u5b9a\u304b\u3089\u901a\u77e5\u7528\u30a2\u30d7\u30ea\u3092\u4f5c\u6210\u3059\u308b"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u306e\u753b\u9762\u304b\u3089\u30a2\u30d7\u30ea\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://api.slack.com/apps?new_app=1"},"https://api.slack.com/apps?new_app=1")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"From an app manifest"),"\u3092\u9078\u629e\u3057\u307e\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/7f71f308af9438575efab8f5a34452b6.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/7f71f308af9438575efab8f5a34452b6.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"\u30a2\u30d7\u30ea\u3092\u8ffd\u52a0\u3059\u308b\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u3092\u9078\u629e\u3057\u307e\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/b82feba53d594319fb081662d1192e90.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/b82feba53d594319fb081662d1192e90.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"App Manifest"),"\u306b\u4ee5\u4e0b\u306eYAML\u3092\u8a2d\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","incoming-webhook\u3067Slack\u306b\u901a\u77e5\u3092\u884c\u3044\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"_metadata:\n  major_version: 1\n  minor_version: 1\ndisplay_information:\n  name: github-action-slack-send\nfeatures:\n  bot_user:\n    display_name: github-action-slack-send\noauth_config:\n  scopes:\n    bot:\n      - incoming-webhook\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/368a7240d14111e8f79764fe2d159d96.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/368a7240d14111e8f79764fe2d159d96.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"[Create]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u30a2\u30d7\u30ea\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/53ee0dcbfb91c61cb538bc2383c984de.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/53ee0dcbfb91c61cb538bc2383c984de.png",alt:"Image from Gyazo"})),(0,r.kt)("h2",{id:"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306b\u30a2\u30d7\u30ea\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b"},"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306b\u30a2\u30d7\u30ea\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Basic Infomation"),"\u306e",(0,r.kt)("inlineCode",{parentName:"p"},"Install to Workspace"),"\u304b\u3089\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306b\u4f5c\u6210\u3057\u305f\u30a2\u30d7\u30ea\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002\n",(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/b87265fe036478803a870fde77d73fd2.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/b87265fe036478803a870fde77d73fd2.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"\u901a\u77e5\u3059\u308b\u30c1\u30e3\u30f3\u30cd\u30eb\u3092\u9078\u629e\u3057\u307e\u3059\u3002\n",(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/284e65bf367d54d4cc06841c47492064.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/284e65bf367d54d4cc06841c47492064.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"\u30a2\u30d7\u30ea\u304c\u8ffd\u52a0\u3067\u304d\u305f\u3089",(0,r.kt)("inlineCode",{parentName:"p"},"Install app"),"\u306b",(0,r.kt)("inlineCode",{parentName:"p"},"Bot User OAuth Token"),"\u3068",(0,r.kt)("inlineCode",{parentName:"p"},"Webhook URL"),"\u304c\u8ffd\u52a0\u3055\u308c\u3066\u3044\u308b\u306e\u304c\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Webhook URL"),"\u306fGitHub\u306b\u767b\u9332\u3059\u308b\u306e\u3067\u30b3\u30d4\u30fc\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n",(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/9ad1726519c4f79f22dfe63a8c808a2a.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/9ad1726519c4f79f22dfe63a8c808a2a.png",alt:"Image from Gyazo"})),(0,r.kt)("h2",{id:"github\u306bsecrets\u306bwebhook-url\u3092\u8ffd\u52a0\u3059\u308b"},"GitHub\u306bSecrets\u306bWebhook URL\u3092\u8ffd\u52a0\u3059\u308b"),(0,r.kt)("p",null,"GitHub\u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u30da\u30fc\u30b8\u3092\u958b\u304d\u307e\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Settings")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"Secrets and variables")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"Actions")," \u306e",(0,r.kt)("inlineCode",{parentName:"p"},"New repository secret"),"\u3092\u30af\u30ea\u30c3\u30af\n",(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/a7fd74fd355d28ff13d31fd221c434d5.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/a7fd74fd355d28ff13d31fd221c434d5.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"Name\u306b",(0,r.kt)("inlineCode",{parentName:"p"},"SLACK_INCOMING_WEBHOOK_URL"),"\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","Secret\u306b\u30b3\u30d4\u30fc\u3057\u305f",(0,r.kt)("inlineCode",{parentName:"p"},"Webhook URL"),"\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002\n",(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/d7f0c1dd230b542c6970dcafe533a97f.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/d7f0c1dd230b542c6970dcafe533a97f.png",alt:"Image from Gyazo"})),(0,r.kt)("p",null,"\u5165\u529b\u3067\u304d\u305f\u3089","[Add secret]","\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066GitHub\u30b7\u30fc\u30af\u30ec\u30c3\u30c8\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"slack\u901a\u77e5\u7528\u306e\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3059\u308b"},"Slack\u901a\u77e5\u7528\u306e\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3059\u308b"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},".github/workflows/"),"\u306b",(0,r.kt)("inlineCode",{parentName:"p"},"slack-build-notifier.yml"),"\u3092\u4f5c\u6210\u3057\u3001\u4ee5\u4e0b\u306e\u5185\u5bb9\u3092\u8a2d\u5b9a\u3002\n",(0,r.kt)("inlineCode",{parentName:"p"},"workflows"),"\u306b\u306f\u30d3\u30eb\u30c9\u7528\u306e\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u30d5\u30a1\u30a4\u30eb\u306e name \u3092\u8a2d\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'name: Slack Build Notifier\non:\n  workflow_run:\n    workflows:\n      - Build and deploy to Kuroco front\n    types: [completed]\njobs:\n  on-success:\n    runs-on: ubuntu-latest\n    if: ${{ github.event.workflow_run.conclusion == \'success\' }}\n    steps:\n      - uses: actions/checkout@v2\n      - name: Send GitHub Action trigger data to Slack workflow\n        id: slack\n        uses: slackapi/slack-github-action@v1.23.0\n        with:\n          payload: |\n            {\n              "blocks": [\n                {\n                  "type": "section",\n                  "text": {\n                    "type": "mrkdwn",\n                    "text": "\u30d3\u30eb\u30c9\u6210\u529f"\n                  }\n                },\n                {\n                  "type": "section",\n                  "text": {\n                    "type": "mrkdwn",\n                    "text": "GitHub Actions: ${{ github.server_url }}/${{ github.repository }}/actions/runs/${{ github.event.workflow_run.id }}"\n                  }\n                },\n                {\n                  "type": "context",\n                  "elements": [\n                    {\n                      "type": "mrkdwn",\n                      "text": "Author: <https://github.com/${{ github.event.sender.login }}|@${{ github.event.sender.login }}>"\n                    }\n                  ]\n                }\n              ]\n            }\n        env:\n          SLACK_WEBHOOK_TYPE: INCOMING_WEBHOOK\n          SLACK_WEBHOOK_URL: ${{ secrets.SLACK_INCOMING_WEBHOOK_URL }}\n  on-failure:\n    runs-on: ubuntu-latest\n    if: ${{ github.event.workflow_run.conclusion == \'failure\' }}\n    steps:\n      - uses: actions/checkout@v2\n      - name: Send GitHub Action trigger data to Slack workflow\n        id: slack\n        uses: slackapi/slack-github-action@v1.23.0\n        with:\n          payload: |\n            {\n              "blocks": [\n                {\n                  "type": "section",\n                  "text": {\n                    "type": "mrkdwn",\n                    "text": "\u30d3\u30eb\u30c9\u5931\u6557"\n                  }\n                },\n                {\n                  "type": "section",\n                  "text": {\n                    "type": "mrkdwn",\n                    "text": "GitHub Actions: ${{ github.server_url }}/${{ github.repository }}/actions/runs/${{ github.event.workflow_run.id }}"\n                  }\n                },\n                {\n                  "type": "context",\n                  "elements": [\n                    {\n                      "type": "mrkdwn",\n                      "text": "Author: <https://github.com/${{ github.event.sender.login }}|@${{ github.event.sender.login }}>"\n                    }\n                  ]\n                }\n              ]\n            }\n        env:\n          SLACK_WEBHOOK_TYPE: INCOMING_WEBHOOK\n          SLACK_WEBHOOK_URL: ${{ secrets.SLACK_INCOMING_WEBHOOK_URL }}\n')),(0,r.kt)("p",null,"\u901a\u77e5\u304c\u6210\u529f\u3059\u308b\u3068Slack\u306b\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u901a\u77e5\u3055\u308c\u307e\u3059\u3002\n",(0,r.kt)("img",{parentName:"p",src:"https://t.gyazo.com/teams/diverta/d9adc3954dad22ef61b39b7521f7f379.png?width=600","data-zoom-src":"https://t.gyazo.com/teams/diverta/d9adc3954dad22ef61b39b7521f7f379.png",alt:"Image from Gyazo"})))}u.isMDXComponent=!0}}]);