"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[755],{3482:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(5170);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6498:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>p,metadata:()=>s,toc:()=>d});var r=n(2182),o=n(9028),a=(n(5170),n(3482)),i=["components"],p={id:"store",title:"pnpm store"},l=void 0,s={unversionedId:"cli/store",id:"version-7.x/cli/store",title:"pnpm store",description:"Managing the package store.",source:"@site/i18n/id/docusaurus-plugin-content-docs/version-7.x/cli/store.md",sourceDirName:"cli",slug:"/cli/store",permalink:"/id/cli/store",editUrl:"https://crowdin.com/project/pnpm/id",tags:[],version:"7.x",frontMatter:{id:"store",title:"pnpm store"},sidebar:"version-7.x/docs",previous:{title:"pnpm server",permalink:"/id/cli/server"},next:{title:"pnpm root",permalink:"/id/cli/root"}},c={},d=[{value:"Perintah",id:"perintah",level:2},{value:"status",id:"status",level:3},{value:"add",id:"add",level:3},{value:"prune",id:"prune",level:3},{value:"path",id:"path",level:3}],u={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Managing the package store."),(0,a.kt)("h2",{id:"perintah"},"Perintah"),(0,a.kt)("h3",{id:"status"},"status"),(0,a.kt)("p",null,"Checks for modified packages in the store."),(0,a.kt)("p",null,"Returns exit code 0 if the content of the package is the same as it was at the time of unpacking."),(0,a.kt)("h3",{id:"add"},"add"),(0,a.kt)("p",null,"Functionally equivalent to ",(0,a.kt)("a",{parentName:"p",href:"/id/cli/add"},(0,a.kt)("inlineCode",{parentName:"a"},"pnpm add")),", except this adds new packages to the store directly without modifying any projects or files outside of the store."),(0,a.kt)("h3",{id:"prune"},"prune"),(0,a.kt)("p",null,"Removes ",(0,a.kt)("em",{parentName:"p"},"unreferenced packages")," from the store."),(0,a.kt)("p",null,"Unreferenced packages are packages that are not used by any projects on the system. Packages can become unreferenced after most installation operations, for instance when dependencies are made redundant."),(0,a.kt)("p",null,"For example, during ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install"),", package ",(0,a.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," is updated to ",(0,a.kt)("inlineCode",{parentName:"p"},"foo@1.0.1"),". pnpm will keep ",(0,a.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," in the store, as it does not automatically remove packages. If package ",(0,a.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," is not used by any other project on the system, it becomes unreferenced. Running ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm store prune")," would remove ",(0,a.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," from the store."),(0,a.kt)("p",null,"Running ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm store prune")," is not harmful and has no side effects on your projects. If future installations require removed packages, pnpm will download them again."),(0,a.kt)("p",null,"It is best practice to run ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm store prune")," occasionally to clean up the store, but not too frequently. Sometimes, unreferenced packages become required again. This could occur when switching branches and installing older dependencies, in which case pnpm would need to re-download all removed packages, briefly slowing down the installation process."),(0,a.kt)("p",null,"Please note that this command is prohibited when a ",(0,a.kt)("a",{parentName:"p",href:"/id/cli/server"},"store server")," is running."),(0,a.kt)("h3",{id:"path"},"path"),(0,a.kt)("p",null,"Returns the path to the active store directory."))}m.isMDXComponent=!0}}]);