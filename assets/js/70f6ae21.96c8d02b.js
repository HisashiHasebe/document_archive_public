"use strict";(self.webpackChunkkurokuro=self.webpackChunkkurokuro||[]).push([[68049],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>m});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(i),f=n,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return i?r.createElement(m,s(s({ref:t},u),{},{components:i})):r.createElement(m,s({ref:t},u))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,s=new Array(o);s[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[d]="string"==typeof e?e:n,s[1]=a;for(var c=2;c<o;c++)s[c]=i[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,i)}f.displayName="MDXCreateElement"},13433:(e,t,i)=>{i.d(t,{Z:()=>n});var r=i(67294);function n(e){let{faqs:t=[]}=e;if(0===(Array.isArray(t)?t.filter((e=>e.question&&e.answer)):[]).length)return null;const i={"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))},n=JSON.stringify(i,null,2);return r.createElement("script",{type:"application/ld+json"},n)}},82188:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=i(87462),n=(i(67294),i(3905)),o=i(13433);const s={title:"It takes too long to build and deploy my GitHub Actions. How can I speed it up?",description:"Having large artifact file sizes can result in long building and deployment times with GitHub Actions. We recommend the methods below to reduce the file sizes.",category:"trouble"},a=void 0,l={unversionedId:"faq/how-to-reduce-artifact-file-sizes",id:"faq/how-to-reduce-artifact-file-sizes",title:"It takes too long to build and deploy my GitHub Actions. How can I speed it up?",description:"Having large artifact file sizes can result in long building and deployment times with GitHub Actions. We recommend the methods below to reduce the file sizes.",source:"@site/docs/faq/how-to-reduce-artifact-file-sizes.mdx",sourceDirName:"faq",slug:"/faq/how-to-reduce-artifact-file-sizes",permalink:"/docs/faq/how-to-reduce-artifact-file-sizes",draft:!1,editUrl:"https://github.com/diverta/kuroco-documents/tree/main/packages/create-docusaurus/templates/shared/docs/faq/how-to-reduce-artifact-file-sizes.mdx",tags:[],version:"current",frontMatter:{title:"It takes too long to build and deploy my GitHub Actions. How can I speed it up?",description:"Having large artifact file sizes can result in long building and deployment times with GitHub Actions. We recommend the methods below to reduce the file sizes.",category:"trouble"},sidebar:"faqSidebar",previous:{title:"Where is the best place to store static files (images, JS, CSS, etc.) used on the site?",permalink:"/docs/faq/how-to-place-static-files"},next:{title:"Can I call Kuroco's API using custom function?",permalink:"/docs/faq/how-to-request-kuroco-api-from-smarty-function"}},c={},u=[{value:"Migrate static resource files to KurocoFiles",id:"migrate-static-resource-files-to-kurocofiles",level:2},{value:"Reduce the HTML file size",id:"reduce-the-html-file-size",level:2},{value:"Import SVG sprites as files",id:"import-svg-sprites-as-files",level:3},{value:"Display page contents asynchronously",id:"display-page-contents-asynchronously",level:2}],d={toc:u},p="wrapper";function f(e){let{components:t,...i}=e;return(0,n.kt)(p,(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{faqs:[{question:"It takes too long to build and deploy my GitHub Actions. How can I speed it up?",answer:"Having large artifact file sizes can result in long building and deployment times with GitHub Actions. We recommend the methods below to reduce the file sizes."}],mdxType:"StructuredDataFaqs"}),(0,n.kt)("p",null,"Having large artifact file sizes can result in long building and deployment times with GitHub Actions. We recommend the methods below to reduce the file sizes:"),(0,n.kt)("h2",{id:"migrate-static-resource-files-to-kurocofiles"},"Migrate static resource files to KurocoFiles"),(0,n.kt)("p",null,"KurocoFiles is a function that enables you to upload and update files from the admin panel. Migrating static resource files (such as images) to KurocoFiles can help reduce the total size of your source files. Also, KurocoFiles uploads are cached in our CDN and can be served at higher speeds."),(0,n.kt)("p",null,"More information: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/management/file-manager/"},"User guide: Files")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/reference/api-convert-image/"},"Reference: Dynamic conversion of images"))),(0,n.kt)("h2",{id:"reduce-the-html-file-size"},"Reduce the HTML file size"),(0,n.kt)("p",null,"For statically generated sites, you can reduce the artifact file sizes by reducing the HTML file size. "),(0,n.kt)("h3",{id:"import-svg-sprites-as-files"},"Import SVG sprites as files"),(0,n.kt)("p",null,"If icons are displayed using SVG sprites, with the SVG code contained in the HTML source, this code will be included in all the pages generated during the build process, causing the page sizes to become bloated. You can reduce the HTML file size by loading the SVG code as ",(0,n.kt)("inlineCode",{parentName:"p"},"svg-sprite.svg"),". For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'<svg>\n    <use xlink:href="/assets/svg/sprite.svg#icon-foo"></use>\n</svg>\n')),(0,n.kt)("h2",{id:"display-page-contents-asynchronously"},"Display page contents asynchronously"),(0,n.kt)("p",null,"For static websites, as the total number of pages on the site increases, so does the number of files generated during the build. If the subsequent pages after a list page are static, you can reduce the number of pages generated by displaying them asynchronously using Axios."))}f.isMDXComponent=!0}}]);