"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[82490],{68612:(e,t,a)=>{a.d(t,{Z:()=>j});var l=a(67294),n=a(87524),r=a(86010),i=a(86668),c=a(21327),s=a(95999),o=a(6023);const m={collapseSidebarButton:"collapseSidebarButton_PEFL",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_kv0_"};function d(e){let{onClick:t}=e;return l.createElement("button",{type:"button",title:(0,s.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,s.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,r.Z)("button button--secondary button--outline",m.collapseSidebarButton),onClick:t},l.createElement(o.Z,{className:m.collapseSidebarButtonIcon}))}var u=a(35281),b=a(59689),p=a(12466),h=a(87462),E=a(902);const _=Symbol("EmptyContext"),f=l.createContext(_);function v(e){let{children:t}=e;const[a,n]=(0,l.useState)(null),r=(0,l.useMemo)((()=>({expandedItem:a,setExpandedItem:n})),[a]);return l.createElement(f.Provider,{value:r},t)}var k=a(86043),g=a(53438),C=a(48596),N=a(39960),y=a(72389);function S(e){let{categoryLabel:t,onClick:a}=e;return l.createElement("button",{"aria-label":(0,s.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:a})}function I(e){let{item:t,onItemClick:a,activePath:n,level:c,index:s,...o}=e;const{items:m,label:d,collapsible:b,className:p,href:v}=t,{docs:{sidebar:{autoCollapseCategories:I}}}=(0,i.L)(),Z=function(e){const t=(0,y.Z)();return(0,l.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,g.Wl)(e):void 0),[e,t])}(t),L=(0,g._F)(t,n),x=(0,C.Mg)(v,n),{collapsed:A,setCollapsed:w}=(0,k.u)({initialState:()=>!!b&&(!L&&t.collapsed)}),{expandedItem:B,setExpandedItem:M}=function(){const e=(0,l.useContext)(f);if(e===_)throw new E.i6("DocSidebarItemsExpandedStateProvider");return e}(),P=function(e){void 0===e&&(e=!A),M(e?null:s),w(e)};return function(e){let{isActive:t,collapsed:a,updateCollapsed:n}=e;const r=(0,E.D9)(t);(0,l.useEffect)((()=>{t&&!r&&a&&n(!1)}),[t,r,a,n])}({isActive:L,collapsed:A,updateCollapsed:P}),(0,l.useEffect)((()=>{b&&null!=B&&B!==s&&I&&w(!0)}),[b,B,s,w,I]),l.createElement("li",{className:(0,r.Z)(u.k.docs.docSidebarItemCategory,u.k.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":A},p)},l.createElement("div",{className:(0,r.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":x})},l.createElement(N.Z,(0,h.Z)({className:(0,r.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!v&&b,"menu__link--active":L}),onClick:b?e=>{a?.(t),v?P(!1):(e.preventDefault(),P())}:()=>{a?.(t)},"aria-current":x?"page":void 0,"aria-expanded":b?!A:void 0,href:b?Z??"#":Z},o),d),v&&b&&l.createElement(S,{categoryLabel:d,onClick:e=>{e.preventDefault(),P()}})),l.createElement(k.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:A},l.createElement(H,{items:m,tabIndex:A?-1:0,onItemClick:a,activePath:n,level:c+1})))}var Z=a(13919),L=a(39471);const x={menuExternalLink:"menuExternalLink_NmtK"};function A(e){let{item:t,onItemClick:a,activePath:n,level:i,index:c,...s}=e;const{href:o,label:m,className:d,autoAddBaseUrl:b}=t,p=(0,g._F)(t,n),E=(0,Z.Z)(o);return l.createElement("li",{className:(0,r.Z)(u.k.docs.docSidebarItemLink,u.k.docs.docSidebarItemLinkLevel(i),"menu__list-item",d),key:m},l.createElement(N.Z,(0,h.Z)({className:(0,r.Z)("menu__link",!E&&x.menuExternalLink,{"menu__link--active":p}),autoAddBaseUrl:b,"aria-current":p?"page":void 0,to:o},E&&{onClick:a?()=>a(t):void 0},s),m,!E&&l.createElement(L.Z,null)))}const w={menuHtmlItem:"menuHtmlItem_M9Kj"};function B(e){let{item:t,level:a,index:n}=e;const{value:i,defaultStyle:c,className:s}=t;return l.createElement("li",{className:(0,r.Z)(u.k.docs.docSidebarItemLink,u.k.docs.docSidebarItemLinkLevel(a),c&&[w.menuHtmlItem,"menu__list-item"],s),key:n,dangerouslySetInnerHTML:{__html:i}})}function M(e){let{item:t,...a}=e;switch(t.type){case"category":return l.createElement(I,(0,h.Z)({item:t},a));case"html":return l.createElement(B,(0,h.Z)({item:t},a));default:return l.createElement(A,(0,h.Z)({item:t},a))}}function P(e){let{items:t,...a}=e;return l.createElement(v,null,t.map(((e,t)=>l.createElement(M,(0,h.Z)({key:t,item:e,index:t},a)))))}const H=(0,l.memo)(P),T={menu:"menu_SIkG",menuWithAnnouncementBar:"menuWithAnnouncementBar_GW3s"};function q(e){let{path:t,sidebar:a,className:n}=e;const i=function(){const{isActive:e}=(0,b.nT)(),[t,a]=(0,l.useState)(e);return(0,p.RF)((t=>{let{scrollY:l}=t;e&&a(0===l)}),[e]),e&&t}();return l.createElement("nav",{"aria-label":(0,s.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,r.Z)("menu thin-scrollbar",T.menu,i&&T.menuWithAnnouncementBar,n)},l.createElement("ul",{className:(0,r.Z)(u.k.docs.docSidebarMenu,"menu__list")},l.createElement(H,{items:a,activePath:t,level:1})))}const D={sidebar:"sidebar_njMd",sidebarWithHideableNavbar:"sidebarWithHideableNavbar_wUlq",sidebarHidden:"sidebarHidden_VK0M",sidebarLogo:"sidebarLogo_isFc"};function F(e){let{path:t,sidebar:a,onCollapse:n,isHidden:s}=e;const{navbar:{hideOnScroll:o},docs:{sidebar:{hideable:m}}}=(0,i.L)();return l.createElement("div",{className:(0,r.Z)(D.sidebar,o&&D.sidebarWithHideableNavbar,s&&D.sidebarHidden)},o&&l.createElement(c.Z,{tabIndex:-1,className:D.sidebarLogo}),l.createElement(q,{path:t,sidebar:a}),m&&l.createElement(d,{onClick:n}))}const W=l.memo(F);var $=a(13102),z=a(93163);const K=e=>{let{sidebar:t,path:a}=e;const n=(0,z.e)();return l.createElement("ul",{className:(0,r.Z)(u.k.docs.docSidebarMenu,"menu__list")},l.createElement(H,{items:t,activePath:a,onItemClick:e=>{"category"===e.type&&e.href&&n.toggle(),"link"===e.type&&n.toggle()},level:1}))};function U(e){return l.createElement($.Zo,{component:K,props:e})}const V=l.memo(U);function j(e){const t=(0,n.i)(),a="desktop"===t||"ssr"===t,r="mobile"===t;return l.createElement(l.Fragment,null,a&&l.createElement(W,e),r&&l.createElement(V,e))}},6023:(e,t,a)=>{a.d(t,{Z:()=>r});var l=a(87462),n=a(67294);function r(e){return n.createElement("svg",(0,l.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}},9554:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var l=a(67294),n=a(95999),r=a(85942),i=a(68612),c=a(39960),s=a(28084);const o={docPage:"docPage_NEuf",themeDocSidebarContainer:"themeDocSidebarContainer_AbfC",docSidebarContainer:"docSidebarContainer_STYP",sidebarViewport:"sidebarViewport_rNXz",docMainContainer:"docMainContainer_lIe_"};const m=function(){const e=(0,s.ZP)()["docusaurus-plugin-faq-list"].default.faqList,t=[{id:"system",label:"System"},{id:"security",label:"Security"},{id:"tls",label:"TLS certificate"},{id:"howto",label:"Kuroco Usage"},{id:"trouble",label:"Trouble"},{id:"contracts",label:"Contracts"},{id:"other",label:"Others"}],a=t.map((t=>{let{id:a,label:l}=t;return{category:a,label:l,faqs:e.filter((e=>e.frontMatter.category===a))}})),m=t.map((e=>{let{id:t,label:a}=e;return{type:"link",label:l.createElement(n.Z,{id:`category.${t}`},a),href:`/docs/faq/#${t}`,className:"faq-sidebar-item"}}));return l.createElement(r.Z,{title:"FAQ"},l.createElement("div",{className:`${o.docPage}`},l.createElement("aside",{className:`${o.themeDocSidebarContainer} ${o.docSidebarContainer}`},l.createElement("div",{className:`${o.sidebarViewport}`},l.createElement(i.Z,{sidebar:m}))),l.createElement("main",{className:`${o.docMainContainer}`},l.createElement("div",{className:"container padding-top--md padding-bottom--lg"},l.createElement("article",null,l.createElement("nav",{className:"theme-doc-breadcrumbs breadcrumbsContainer_node_modules-@docusaurus-theme-classic-lib-theme-DocBreadcrumbs-styles-module","aria-label":"Breadcrumbs"},l.createElement("ul",{className:"breadcrumbs",itemscope:"",itemtype:"https://schema.org/BreadcrumbList"},l.createElement("li",{itemscope:"",itemprop:"itemListElement",itemtype:"https://schema.org/ListItem",className:"breadcrumbs__item breadcrumbs__item--active"},l.createElement("span",{className:"breadcrumbs__link",itemprop:"name"},"FAQ"),l.createElement("meta",{itemprop:"position",content:"1"})))),l.createElement("header",null,l.createElement("h1",null,"FAQ")),l.createElement("section",{className:"faq-section"},a.map(((e,t)=>{let{category:a,label:r,faqs:i}=e;return l.createElement(l.Fragment,null,l.createElement("h3",{id:a},l.createElement(n.Z,{id:`category.${a}`},r)),l.createElement("section",{className:"faq-list",key:t},i.map(((e,t)=>{let{title:a,permalink:n}=e;return l.createElement("h4",{className:"faq-list-item",key:t},l.createElement(c.Z,{to:n},a,l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",className:"w-6 h-6"},l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"}))))}))))}))))))))}}}]);