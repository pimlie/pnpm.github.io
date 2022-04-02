"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1233],{3482:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>u});var r=t(5170);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},m=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=l(t),u=o,f=c["".concat(s,".").concat(u)]||c[u]||d[u]||a;return t?r.createElement(f,p(p({ref:n},m),{},{components:t})):r.createElement(f,p({ref:n},m))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=c;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var l=2;l<a;l++)p[l]=t[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3468:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=t(2182),o=t(9028),a=(t(5170),t(3482)),p=["components"],i={id:"pnpm-vs-npm",title:"pnpm vs npm"},s=void 0,l={unversionedId:"pnpm-vs-npm",id:"version-6.x/pnpm-vs-npm",title:"pnpm vs npm",description:"npm's flat tree",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-6.x/pnpm-vs-npm.md",sourceDirName:".",slug:"/pnpm-vs-npm",permalink:"/ru/6.x/pnpm-vs-npm",editUrl:"https://crowdin.com/project/pnpm/ru",tags:[],version:"6.x",frontMatter:{id:"pnpm-vs-npm",title:"pnpm vs npm"},sidebar:"version-6.x/docs",previous:{title:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 pnpm",permalink:"/ru/6.x/uninstall"}},m={},d=[{value:"npm&#39;s flat tree",id:"npms-flat-tree",level:2},{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",level:2},{value:"Directory dependencies",id:"directory-dependencies",level:2}],c={toc:d};function u(e){var n=e.components,t=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"npms-flat-tree"},"npm's flat tree"),(0,a.kt)("p",null,"npm maintains a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/npm/npm/issues/6912"},"flattened dependency tree")," as of version 3. This leads to less disk space bloat, with a messy ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," directory as a side effect."),(0,a.kt)("p",null,"On the other hand, pnpm manages ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," by using hard linking and symbolic linking to a global on-disk content-addressable store. This nets you the benefits of far less disk space usage, while also keeping your ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," clean. There is documentation on the ",(0,a.kt)("a",{parentName:"p",href:"symlinked-node-modules-structure"},"store layout")," if you wish to learn more."),(0,a.kt)("p",null,"The good thing about pnpm's proper ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules"),' structure is that it "',(0,a.kt)("a",{parentName:"p",href:"https://www.kochan.io/nodejs/pnpms-strictness-helps-to-avoid-silly-bugs.html"},"helps to avoid silly bugs"),"\" by making it impossible to use modules that are not specified in the project's ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,a.kt)("h2",{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430"),(0,a.kt)("p",null,"pmpm \u043d\u0435 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 \u043f\u0430\u043a\u0435\u0442\u044b \u0431\u0435\u0437 \u0437\u0430\u043f\u0438\u0441\u0438 \u0432 ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),". \u0415\u0441\u043b\u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm add")," \u0431\u044b\u043b \u0432\u044b\u0437\u0432\u0430\u043d \u0431\u0435\u0437 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432, \u0432\u0441\u0435 \u043f\u0430\u043a\u0435\u0442\u044b \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0442\u0441\u044f \u043a\u0430\u043a \u043e\u0431\u044b\u0447\u043d\u044b\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438. \u041a\u0430\u043a \u0438 \u0441 npm, ",(0,a.kt)("inlineCode",{parentName:"p"},"--save-dev")," \u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"--save-optional")," \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u044b \u0447\u0442\u043e\u0431\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0430\u043a\u0435\u0442 \u043a\u0430\u043a dev, \u0438\u043b\u0438 optional \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e."),(0,a.kt)("p",null,"\u0412\u0441\u043b\u0435\u0434\u0441\u0442\u0432\u0438\u0435 \u044d\u0442\u043e\u0433\u043e \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f \u0443 \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432 \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u043d\u0438\u043a\u0430\u043a\u0438\u0445 \u043f\u043e\u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u0445 \u043f\u0430\u043a\u0435\u0442\u043e\u0432 \u043f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 pnpm, \u0435\u0441\u043b\u0438 \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u043d\u0438 \u043d\u0435 \u0443\u0434\u0430\u043b\u044f\u0442 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c \u0438 \u043d\u0435 \u043e\u0441\u0442\u0430\u0432\u044f\u0442 \u0435\u0435 \u0441\u0438\u0440\u043e\u0442\u0441\u043a\u043e\u0439. That's why pnpm's implementation of the ",(0,a.kt)("a",{parentName:"p",href:"cli/prune"},"prune command")," does not allow you to specify packages to prune - it ALWAYS removes all extraneous and orphaned packages."),(0,a.kt)("h2",{id:"directory-dependencies"},"Directory dependencies"),(0,a.kt)("p",null,"Directory dependencies start with the ",(0,a.kt)("inlineCode",{parentName:"p"},"file:")," prefix and point to a directory in the filesystem. Like npm, pnpm symlinks those dependencies. Unlike npm, pnpm does not perform installation for the file dependencies."),(0,a.kt)("p",null,"This means that if you have a package called ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," (",(0,a.kt)("inlineCode",{parentName:"p"},"<root>/foo"),") that has ",(0,a.kt)("inlineCode",{parentName:"p"},"bar@file:../bar")," as a dependency, pnpm won't perform installation for ",(0,a.kt)("inlineCode",{parentName:"p"},"<root>/bar")," when you run ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install")," on ",(0,a.kt)("inlineCode",{parentName:"p"},"foo"),"."),(0,a.kt)("p",null,"If you need to run installations in several packages at the same time, for instance in the case of a monorepo, you should look at the documentation for ",(0,a.kt)("a",{parentName:"p",href:"cli/recursive"},(0,a.kt)("inlineCode",{parentName:"a"},"pnpm -r")),"."))}u.isMDXComponent=!0}}]);