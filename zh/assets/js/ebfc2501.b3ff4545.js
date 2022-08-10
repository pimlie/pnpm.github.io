"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1883],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(n),f=o,d=m["".concat(i,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(d,l(l({ref:t},s),{},{components:n})):r.createElement(d,l({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7454:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>p,metadata:()=>c,toc:()=>u});var r=n(2081),o=n(4604),a=(n(9496),n(9613)),l=["components"],p={id:"completion",title:"\u547d\u4ee4\u884c tab \u81ea\u52a8\u8865\u5168"},i=void 0,c={unversionedId:"completion",id:"completion",title:"\u547d\u4ee4\u884c tab \u81ea\u52a8\u8865\u5168",description:"\u4e0e\u5176\u4ed6\u901a\u5e38\u9700\u8981\u63d2\u4ef6\u7684\u6d41\u884c\u5305\u7ba1\u7406\u5668\u4e0d\u540c\uff0cpnpm \u652f\u6301 Bash\u3001Zsh\u3001Fish \u548c\u7c7b\u4f3c shell \u7684\u547d\u4ee4\u884c\u5236\u8868\u7b26\u8865\u5168\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/completion.md",sourceDirName:".",slug:"/completion",permalink:"/zh/next/completion",draft:!1,editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"current",frontMatter:{id:"completion",title:"\u547d\u4ee4\u884c tab \u81ea\u52a8\u8865\u5168"},sidebar:"docs",previous:{title:"\u522b\u540d\uff08Aliases\uff09",permalink:"/zh/next/aliases"},next:{title:"\u5728 pnpm \u4e2d\u4f7f\u7528 Changesets",permalink:"/zh/next/using-changesets"}},s={},u=[{value:"Fig (on macOS only)",id:"fig-on-macos-only",level:2}],m={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4e0e\u5176\u4ed6\u901a\u5e38\u9700\u8981\u63d2\u4ef6\u7684\u6d41\u884c\u5305\u7ba1\u7406\u5668\u4e0d\u540c\uff0cpnpm \u652f\u6301 Bash\u3001Zsh\u3001Fish \u548c\u7c7b\u4f3c shell \u7684\u547d\u4ee4\u884c\u5236\u8868\u7b26\u8865\u5168\u3002"),(0,a.kt)("p",null,"\u8981\u8bbe\u7f6e\u81ea\u52a8\u8865\u5168\uff0c\u8bf7\u8fd0\u884c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"pnpm install-completion\n")),(0,a.kt)("p",null,"CLI \u5c06\u8be2\u95ee\u4f7f\u7528\u54ea\u4e2a shell \u751f\u6210\u81ea\u52a8\u5b8c\u6210\u811a\u672c\u3002 \u6216\u8005\uff0c\u53ef\u4ee5\u5728\u547d\u4ee4\u884c\u4e2d\u6307\u5b9a\u76ee\u6807 shell\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"pnpm install-completion zsh\n")),(0,a.kt)("p",null,"\u8981\u67e5\u770b\u8865\u5168\u793a\u4f8b\uff0c\u8bf7\u9605\u8bfb ",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/pnpm/pnpm-v4-9-comes-with-command-completion-a411715260b4"},"\u8fd9\u7bc7\u6587\u7ae0"),"\u3002"),(0,a.kt)("h2",{id:"fig-on-macos-only"},"Fig (on macOS only)"),(0,a.kt)("p",null,"You can get IDE-style autocompletions for pnpm with ",(0,a.kt)("a",{parentName:"p",href:"https://fig.io/"},"Fig"),". It works in Bash, Zsh, and Fish."),(0,a.kt)("p",null,"To install, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"brew install fig\n")))}f.isMDXComponent=!0}}]);