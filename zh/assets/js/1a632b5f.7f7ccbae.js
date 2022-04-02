"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6014],{3482:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>u});var r=t(5170);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,p=function(e,n){if(null==e)return{};var t,r,p={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(p[t]=e[t]);return p}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,p=e.mdxType,a=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=c(t),u=p,f=d["".concat(l,".").concat(u)]||d[u]||s[u]||a;return t?r.createElement(f,i(i({ref:n},m),{},{components:t})):r.createElement(f,i({ref:n},m))}));function u(e,n){var t=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var a=t.length,i=new Array(a);i[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:p,i[1]=o;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2678:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=t(2182),p=t(9028),a=(t(5170),t(3482)),i=["components"],o={id:"pnpx-cli",title:"pnpx CLI"},l=void 0,c={unversionedId:"pnpx-cli",id:"version-6.x/pnpx-cli",title:"pnpx CLI",description:"\u6b64\u547d\u4ee4\u5df2\u5f03\u7528\uff01 \u8bf7\u6539\u7528 pnpm exec \u548c pnpm dlx \u547d\u4ee4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-6.x/pnpx-cli.md",sourceDirName:".",slug:"/pnpx-cli",permalink:"/zh/6.x/pnpx-cli",editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"6.x",frontMatter:{id:"pnpx-cli",title:"pnpx CLI"},sidebar:"version-6.x/docs",previous:{title:"pnpm CLI",permalink:"/zh/6.x/pnpm-cli"},next:{title:"\u914d\u7f6e",permalink:"/zh/6.x/configuring"}},m={},s=[{value:"\u65b0\u7528\u6237",id:"\u65b0\u7528\u6237",level:2},{value:"npm \u7528\u6237",id:"npm-\u7528\u6237",level:2}],d={toc:s};function u(e){var n=e.components,t=(0,p.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u6b64\u547d\u4ee4\u5df2\u5f03\u7528\uff01 \u8bf7\u6539\u7528 ",(0,a.kt)("a",{parentName:"p",href:"/zh/6.x/cli/exec"},(0,a.kt)("inlineCode",{parentName:"a"},"pnpm exec"))," \u548c ",(0,a.kt)("a",{parentName:"p",href:"/zh/6.x/cli/dlx"},(0,a.kt)("inlineCode",{parentName:"a"},"pnpm dlx"))," \u547d\u4ee4\u3002"))),(0,a.kt)("h2",{id:"\u65b0\u7528\u6237"},"\u65b0\u7528\u6237"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"pnpx")," (PNPm eXecute) \u662f\u4e00\u4e2a\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u4ed6\u4ece\u6e90\u83b7\u53d6\u5305\uff0c\u4f46\u4e0d\u5c06\u5b83\u5b89\u88c5\u4e3a\u4f9d\u8d56\u9879\uff0c\u70ed\u52a0\u8f7d\u5b83\uff0c\u5e76\u8fd0\u884c\u4efb\u4f55\u5b83\u66b4\u9732\u7684\u9ed8\u8ba4\u4e8c\u8fdb\u5236\u547d\u4ee4\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\uff0c\u82e5\u8981\u5728\u4efb\u4f55\u5730\u65b9\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"Create-react-app")," \u6765\u521d\u59cb\u5316\u4e00\u4e2a react \u5e94\u7528\uff0c\u800c\u4e0d\u9700\u8981 \u6765\u5728\u53e6\u4e00\u4e2a\u9879\u76ee\u4e0b\u5b89\u88c5\u5b83\uff0c\u60a8\u53ef\u4ee5\u8fd0\u884c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pnpx create-react-app my-project\n")),(0,a.kt)("p",null,"\u8fd9\u5c06\u4ece\u6e90\u83b7\u53d6 ",(0,a.kt)("inlineCode",{parentName:"p"},"Create-react-app")," \u5e76\u4f7f\u7528\u7ed9\u5b9a\u7684\u53c2\u6570\u8fd0\u884c\u5b83\u3002 \u8981\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\uff0c\u60a8\u53ef\u4ee5\u5728 npm \u67e5\u770b ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/npx"},"npx")," \uff0c\u56e0\u4e3a\u5b83\u63d0\u4f9b\u4e86\u76f8\u540c\u7684\u63a5\u53e3\uff0c\u9664\u4e86\u5b83\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"npm")," \u800c\u4e0d\u662f\u8fd9\u91cc\u63d0\u4f9b\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm"),"\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u53ea\u60f3\u8fd0\u884c\u4e00\u4e2a\u9879\u76ee\u4f9d\u8d56\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"/zh/6.x/cli/exec"},(0,a.kt)("inlineCode",{parentName:"a"},"pnpm exec")),"\u3002"),(0,a.kt)("h2",{id:"npm-\u7528\u6237"},"npm \u7528\u6237"),(0,a.kt)("p",null,"npm \u6709\u4e00\u4e2a\u5f88\u68d2\u7684\u5305\u8fd0\u884c\u5668\u53eb\u505a ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/npx"},"npx"),"\u3002 pnpm \u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpx")," \u547d\u4ee4\u63d0\u4f9b\u76f8\u540c\u7684\u5de5\u5177\u3002 \u552f\u4e00\u7684\u4e0d\u540c\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpx")," \u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm")," \u5b89\u88c5\u8f6f\u4ef6\u5305\u3002"))}u.isMDXComponent=!0}}]);