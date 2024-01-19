"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[27918],{47406:(e,t,n)=>{n.r(t),n.d(t,{default:()=>de});var a=n(67294),l=n(1944),r=n(902);const o=a.createContext(null);function s(e){let{children:t,content:n}=e;const l=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return a.createElement(o.Provider,{value:l},t)}function c(){const e=(0,a.useContext)(o);if(null===e)throw new r.i6("DocProvider");return e}function i(){const{metadata:e,frontMatter:t,assets:n}=c();return a.createElement(l.d,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var d=n(86010),m=n(87524);function u(e){return a.createElement(a.Fragment,null)}function b(){const{metadata:e}=c();return a.createElement(u,{previous:e.previous,next:e.next})}var p=n(52263),v=n(39960),E=n(95999),h=n(94104),f=n(35281),g=n(60373),k=n(74477);const C={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(E.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(E.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function L(e){const t=C[e.versionMetadata.banner];return a.createElement(t,e)}function N(e){let{versionLabel:t,to:n,onClick:l}=e;return a.createElement(E.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(v.Z,{to:n,onClick:l},a.createElement(E.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function x(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:l}}=(0,p.default)(),{pluginId:r}=(0,h.gA)({failfast:!0}),{savePreferredVersionName:o}=(0,g.J)(r),{latestDocSuggestion:s,latestVersionSuggestion:c}=(0,h.Jo)(r),i=s??(m=c).docs.find((e=>e.id===m.mainDocId));var m;return a.createElement("div",{className:(0,d.Z)(t,f.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(L,{siteTitle:l,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(N,{versionLabel:c.label,to:i.path,onClick:()=>o(c.name)})))}function Z(e){let{className:t}=e;const n=(0,k.E)();return n.banner?a.createElement(x,{className:t,versionMetadata:n}):null}function _(e){let{className:t}=e;const n=(0,k.E)();return n.badge?a.createElement("span",{className:(0,d.Z)(t,f.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(E.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}function y(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return a.createElement(E.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function T(e){let{lastUpdatedBy:t}=e;return a.createElement(E.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function w(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:l}=e;return a.createElement("span",{className:f.k.common.lastUpdated},a.createElement(E.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(y,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:l?a.createElement(T,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var H=n(84881),U=n(86233);const A={lastUpdated:"lastUpdated_vwxv"};function M(e){return a.createElement("div",{className:(0,d.Z)(f.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(U.Z,e)))}function B(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:l,formattedLastUpdatedAt:r}=e;return a.createElement("div",{className:(0,d.Z)(f.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(H.Z,{editUrl:t})),a.createElement("div",{className:(0,d.Z)("col",A.lastUpdated)},(n||l)&&a.createElement(w,{lastUpdatedAt:n,formattedLastUpdatedAt:r,lastUpdatedBy:l})))}function I(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:l,lastUpdatedBy:r,tags:o}=e,s=o.length>0,i=!!(t||n||r);return s||i?a.createElement("footer",{className:(0,d.Z)(f.k.docs.docFooter,"docusaurus-mt-lg")},s&&a.createElement(M,{tags:o}),i&&a.createElement(B,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:r,formattedLastUpdatedAt:l})):null}function R(e){return a.createElement("div",{className:"mt-10 pt-5"},a.createElement("hr",{className:"border-t border-solid border-gray-300 dark:border-gray-900"}),a.createElement(I,e),a.createElement("div",{className:"card rounded-lg container mt-10 p-8 border-none bg-primary-soft dark:bg-slate-800 mb-10"},a.createElement("h2",{className:"text-2xl"},a.createElement(E.Z,null,"Support")),a.createElement("p",{className:"text-gray-800 dark:text-white"},a.createElement(E.Z,null,"If you have any other questions, please contact us or check out Our Slack Community.")),a.createElement("div",{className:"md:flex mt-0"},a.createElement("div",{className:"md:inline-flex rounded-md shadow"},a.createElement("a",{href:"https://kuroco.zendesk.com/hc/",target:"_blank",rel:"noreferrer",className:"button button--primary px-5 py-3 block"},a.createElement(E.Z,null,"Contact form"))),a.createElement("div",{className:"mt-3 md:mt-0 md:ml-4 md:inline-flex rounded-md shadow"},a.createElement("a",{href:"/docs/about/support/",target:"_blank",rel:"noreferrer",className:"button button--primary px-5 py-3 block"},a.createElement(E.Z,null,"Join Kuroco Slack community"))))))}var V=n(86043),O=n(93743),S=n(87462);const P={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function F(e){let{collapsed:t,...n}=e;return a.createElement("button",(0,S.Z)({type:"button"},n,{className:(0,d.Z)("clean-btn",P.tocCollapsibleButton,!t&&P.tocCollapsibleButtonExpanded,n.className)}),a.createElement(E.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const D={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function z(e){let{toc:t,className:n,minHeadingLevel:l,maxHeadingLevel:r}=e;const{collapsed:o,toggleCollapsed:s}=(0,V.u)({initialState:!0});return a.createElement("div",{className:(0,d.Z)(D.tocCollapsible,!o&&D.tocCollapsibleExpanded,n)},a.createElement(F,{collapsed:o,onClick:s}),a.createElement(V.z,{lazy:!0,className:D.tocCollapsibleContent,collapsed:o},a.createElement(O.Z,{toc:t,minHeadingLevel:l,maxHeadingLevel:r})))}const q={tocMobile:"tocMobile_ITEo"};function j(){const{toc:e,frontMatter:t}=c();return a.createElement(z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,d.Z)(f.k.docs.docTocMobile,q.tocMobile)})}var $=n(39407);function G(){const{toc:e,frontMatter:t}=c();return a.createElement($.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:f.k.docs.docTocDesktop})}var J=n(92503),W=n(45042);const K=e=>{let{version:t}=e;if("BETA"!==t&&"RC"!==t)return console.error('VersionHeaderLabel: Invalid version provided. Must be "BETA" or "RC"'),null;const n="BETA"===t?"\u03b2":"\u03b2 / RC";return a.createElement("div",null,a.createElement("span",{className:(0,d.Z)("inline-block","mb-2","px-2","py-1","text-sm","bg-blue-800","rounded","text-white","dark:bg-blue-300","dark:text-black")},a.createElement(E.Z,null,"Release version"),a.createElement("span",null,`: ${n}`),a.createElement(E.Z,null,"version")))};function Q(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}(),l=function(){const{frontMatter:e}=c();return e?.beta_version}();return a.createElement("div",{className:(0,d.Z)(f.k.docs.docMarkdown,"markdown")},n&&a.createElement("header",null,l&&a.createElement(K,{version:l}),a.createElement(J.Z,{as:"h1"},a.createElement(a.Fragment,null,n))),a.createElement(W.Z,null,t))}var X=n(53438),Y=n(48596),ee=n(44996);function te(e){return a.createElement("svg",(0,S.Z)({viewBox:"0 0 24 24"},e),a.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const ne={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function ae(){const e=(0,ee.Z)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(v.Z,{"aria-label":(0,E.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},a.createElement(te,{className:ne.breadcrumbHomeIcon})))}const le={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function re(e){let{children:t,href:n,isLast:l}=e;const r="breadcrumbs__link";return l?a.createElement("span",{className:r,itemProp:"name"},t):n?a.createElement(v.Z,{className:r,href:n,itemProp:"item"},a.createElement("span",{itemProp:"name"},t)):a.createElement("span",{className:r},t)}function oe(e){let{children:t,active:n,index:l,addMicrodata:r}=e;return a.createElement("li",(0,S.Z)({},r&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,d.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,a.createElement("meta",{itemProp:"position",content:String(l+1)}))}function se(){const e=(0,X.s1)(),t=(0,Y.Ns)();return e?a.createElement("nav",{className:(0,d.Z)(f.k.docs.docBreadcrumbs,le.breadcrumbsContainer),"aria-label":(0,E.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(ae,null),e.map(((t,n)=>{const l=n===e.length-1;return a.createElement(oe,{key:n,active:l,index:n,addMicrodata:!!t.href},a.createElement(re,{href:t.href,isLast:l},t.label))})))):null}const ce={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function ie(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=c(),n=(0,m.i)(),l=e.hide_table_of_contents,r=!l&&t.length>0;return{hidden:l,mobile:r?a.createElement(j,null):void 0,desktop:!r||"desktop"!==n&&"ssr"!==n?void 0:a.createElement(G,null)}}();return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,d.Z)("col",!n.hidden&&ce.docItemCol)},a.createElement(Z,null),a.createElement("div",{className:ce.docItemContainer},a.createElement("article",null,a.createElement(se,null),a.createElement(_,null),n.mobile,a.createElement(Q,null,t),a.createElement(R,null)),a.createElement(b,null))),n.desktop&&a.createElement("div",{className:"col col--3"},n.desktop))}function de(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,n=e.content;return a.createElement(s,{content:e.content},a.createElement(l.FG,{className:t},a.createElement(i,null),a.createElement(ie,null,a.createElement(n,null))))}},84881:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(67294),l=n(95999),r=n(35281),o=n(87462),s=n(86010);const c={iconEdit:"iconEdit_Z9Sw"};function i(e){let{className:t,...n}=e;return a.createElement("svg",(0,o.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(c.iconEdit,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function d(e){let{editUrl:t}=e;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:r.k.common.editThisPage},a.createElement(i,null),a.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},39407:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(87462),l=n(67294),r=n(86010),o=n(93743);const s={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},c="table-of-contents__link toc-highlight",i="table-of-contents__link--active";function d(e){let{className:t,...n}=e;return l.createElement("div",{className:(0,r.Z)(s.tableOfContents,"thin-scrollbar",t)},l.createElement(o.Z,(0,a.Z)({},n,{linkClassName:c,linkActiveClassName:i})))}},93743:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(87462),l=n(67294),r=n(86668);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):a.push(l)})),a}function s(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=s({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function c(e){const t=e.getBoundingClientRect();return t.top===t.bottom?c(e.parentNode):t}function i(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>c(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function d(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.L)();return(0,l.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function m(e){const t=(0,l.useRef)(void 0),n=d();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:o}=e;function s(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),s=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let l=t;l<=n;l+=1)a.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:o}),c=i(s,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===d)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),()=>{document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,n])}function u(e){let{toc:t,className:n,linkClassName:a,isChild:r}=e;return t.length?l.createElement("ul",{className:r?void 0:n},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(u,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const b=l.memo(u);function p(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:c="table-of-contents__link",linkActiveClassName:i,minHeadingLevel:d,maxHeadingLevel:u,...p}=e;const v=(0,r.L)(),E=d??v.tableOfContents.minHeadingLevel,h=u??v.tableOfContents.maxHeadingLevel,f=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,l.useMemo)((()=>s({toc:o(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:E,maxHeadingLevel:h});return m((0,l.useMemo)((()=>{if(c&&i)return{linkClassName:c,linkActiveClassName:i,minHeadingLevel:E,maxHeadingLevel:h}}),[c,i,E,h])),l.createElement(b,(0,a.Z)({toc:f,className:n,linkClassName:c},p))}},86233:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(67294),l=n(86010),r=n(95999),o=n(39960);const s={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function c(e){let{permalink:t,label:n,count:r}=e;return a.createElement(o.Z,{href:t,className:(0,l.Z)(s.tag,r?s.tagWithCount:s.tagRegular)},n,r&&a.createElement("span",null,r))}const i={tags:"tags_jXut",tag:"tag_QGVx"};function d(e){let{tags:t}=e;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,l.Z)(i.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:n}=e;return a.createElement("li",{key:n,className:i.tag},a.createElement(c,{label:t,permalink:n}))}))))}},74477:(e,t,n)=>{n.d(t,{E:()=>s,q:()=>o});var a=n(67294),l=n(902);const r=a.createContext(null);function o(e){let{children:t,version:n}=e;return a.createElement(r.Provider,{value:n},t)}function s(){const e=(0,a.useContext)(r);if(null===e)throw new l.i6("DocsVersionProvider");return e}},22914:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(42752),l=n(95999),r=n(86010),o=n(67294);const s=e=>{let{children:t}=e;return o.createElement("span",{className:(0,r.Z)("whitespace-nowrap","rounded","bg-gray-200","px-2","py-1","text-black","text-xs","font-light","absolute","-top-8","left-1/2","-translate-x-1/2")},t)},c={VersionLabel:e=>{let{version:t}=e;if("BETA"!==t&&"RC"!==t)return console.error('VersionLabel: Invalid version provided. Must be "BETA" or "RC"'),null;const[n,a]=(0,o.useState)(!1),c="BETA"===t?"\u03b2":"\u03b2 / RC",i=`Only available in ${"BETA"===t?"\u03b2":"\u03b2 and RC"} versions`;return o.createElement("span",{className:(0,r.Z)("inline-block","ml-2","px-2","font-normal","text-sm","bg-blue-800","rounded","text-white","dark:bg-blue-300","dark:text-black","align-[2px]"),onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1)},n&&o.createElement(s,null,i),o.createElement("span",{className:(0,r.Z)("flex","justify-center","w-max")},o.createElement(l.Z,null,"Release version"),o.createElement("span",null,`: ${c}`),o.createElement(l.Z,null,"version")))}},i={...a.Z,...c}}}]);