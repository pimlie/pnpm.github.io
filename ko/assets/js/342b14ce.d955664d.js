"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6750],{3482:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var n=r(5170);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(r),k=l,d=m["".concat(o,".").concat(k)]||m[k]||s[k]||a;return r?n.createElement(d,p(p({ref:t},u),{},{components:r})):n.createElement(d,p({ref:t},u))}));function k(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,p=new Array(a);p[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,p[1]=i;for(var c=2;c<a;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1102:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=r(2182),l=r(9028),a=(r(5170),r(3482)),p=["components"],i={id:"publish",title:"pnpm publish"},o=void 0,c={unversionedId:"cli/publish",id:"version-6.x/cli/publish",title:"pnpm publish",description:"\ub808\uc9c0\uc2a4\ud2b8\ub9ac\uc5d0 \ud328\ud0a4\uc9c0\ub97c \uac8c\uc2dc\ud569\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-6.x/cli/publish.md",sourceDirName:"cli",slug:"/cli/publish",permalink:"/ko/6.x/cli/publish",editUrl:"https://crowdin.com/project/pnpm/ko",tags:[],version:"6.x",frontMatter:{id:"publish",title:"pnpm publish"},sidebar:"version-6.x/docs",previous:{title:"pnpm env <cmd>",permalink:"/ko/6.x/cli/env"},next:{title:"pnpm pack",permalink:"/ko/6.x/cli/pack"}},u={},s=[{value:"\uc635\uc158",id:"\uc635\uc158",level:2},{value:"--tag &lt;tag&gt;",id:"--tag-tag",level:3},{value:"--access &lt;public|restricted&gt;",id:"--access-publicrestricted",level:3},{value:"git-checks",id:"git-checks",level:3},{value:"publish-branch",id:"publish-branch",level:3},{value:"--force",id:"--force",level:3},{value:"--report-summary",id:"--report-summary",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],m={toc:s};function k(e){var t=e.components,r=(0,l.Z)(e,p);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\ub808\uc9c0\uc2a4\ud2b8\ub9ac\uc5d0 \ud328\ud0a4\uc9c0\ub97c \uac8c\uc2dc\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm [-r] publish [<tarball|folder>] [--tag <tag>]\n     [--access <public|restricted>]\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/ko/6.x/workspaces"},"\uc6cc\ud06c\uc2a4\ud398\uc774\uc2a4")," \ub0b4\ubd80\uc5d0 \ud328\ud0a4\uc9c0\ub97c \uac8c\uc2dc\ud560 \ub54c, \uc6cc\ud06c\uc2a4\ud398\uc774\uc2a4 \ub8e8\ud2b8\uc758 LICENSE \ud30c\uc77c\uc740 \ud328\ud0a4\uc9c0\uc640 \ud568\uaed8 \ud3ec\uc7a5\ub429\ub2c8\ub2e4(\ud328\ud0a4\uc9c0 \uc5d0 \uc790\uccb4 \ub77c\uc774\uc120\uc2a4\uac00 \uc788\ub294 \uacbd\uc6b0 \uc81c\uc678)."),(0,a.kt)("p",null,"You may override some fields before publish, using the ",(0,a.kt)("a",{parentName:"p",href:"/ko/6.x/package_json#publishconfig"},"publishConfig")," field in ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),". \ub610\ud55c ",(0,a.kt)("a",{parentName:"p",href:"/ko/6.x/package_json#publishconfigdirectory"},(0,a.kt)("inlineCode",{parentName:"a"},"publishConfig.directory"))," \uc744 \uc0ac\uc6a9\ud558\uc5ec \uac8c\uc2dc\ub41c \ud558\uc704 \ub514\ub809\ud130\ub9ac\ub97c \ucee4\uc2a4\ud130\ub9c8\uc774\uc988 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4(\uc77c\ubc18\uc801\uc73c\ub85c \ud0c0\uc0ac \ube4c\ub4dc \ub3c4\uad6c \uc0ac\uc6a9)."),(0,a.kt)("p",null,"\uc774 \uba85\ub839\uc744 \uc7ac\uadc0\uc801\uc73c\ub85c \uc2e4\ud589\ud560 \ub54c (",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm -r publish"),"), pnpm\uc740 \ubc84\uc804\uc774 \uc544\uc9c1 \ub808\uc9c0\uc2a4\ud2b8\ub9ac\uc5d0 \uac8c\uc2dc\ub418\uc9c0 \uc54a\uc740 \ud328\ud0a4\uc9c0 \ub97c \ubaa8\ub450 \uac8c\uc2dc\ud569\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\uc635\uc158"},"\uc635\uc158"),(0,a.kt)("h3",{id:"--tag-tag"},"--tag ","<","tag",">"),(0,a.kt)("p",null,"\uc9c0\uc815\ub41c \ud0dc\uadf8\uac00 \uc788\ub294 \ud328\ud0a4\uc9c0\ub97c \uac8c\uc2dc\ud569\ub2c8\ub2e4. \uae30\ubcf8\uc801\uc73c\ub85c ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm publish")," \ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"latest")," \ud0dc\uadf8\ub97c \uac31\uc2e0\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc608:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# foo \ud328\ud0a4\uc9c0 \ub514\ub809\ud1a0\ub9ac \ub0b4\ubd80\npnpm publish --tag next\n# foo\uc758 \ub2e4\uc74c \ubc84\uc804\uc744 \uc0ac\uc6a9\ud558\ub824\ub294 \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c\npnpm add foo@next\n")),(0,a.kt)("h3",{id:"--access-publicrestricted"},"--access ","<","public|restricted",">"),(0,a.kt)("p",null,"\uac8c\uc2dc\ub41c \ud328\ud0a4\uc9c0\uac00 \uacf5\uac1c \ub610\ub294 \uc81c\ud55c\ub418\uc5b4\uc57c \ud558\ub294\uc9c0 \uc5ec\ubd80\ub97c \ub808\uc9c0\uc2a4\ud2b8\ub9ac\uc5d0 \uc54c\ub824\uc90d\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"git-checks"},"git-checks"),(0,a.kt)("p",null,"\ubc84\uc804 4.11.0\uc5d0\uc11c \ucd94\uac00\ub428"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uae30\ubcf8\uac12: ",(0,a.kt)("strong",{parentName:"li"},"true")," (v5 \uc774\ud6c4)"),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("strong",{parentName:"li"},"Boolean"))),(0,a.kt)("p",null,"true\uc778 \uacbd\uc6b0 ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm publish")," \uc740 \ud604\uc7ac \ubd84\uae30\uac00 \uac8c\uc2dc \ubd84\uae30 (\uae30\ubcf8\uc801\uc73c\ub85c master)\uc774\uace0 \uae68\ub057\ud558\uace0 \ucd5c\uc2e0 \uc0c1\ud0dc\uc778\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"publish-branch"},"publish-branch"),(0,a.kt)("p",null,"\ubc84\uc804 4.11.0\uc5d0\uc11c \ucd94\uac00\ub428"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uae30\ubcf8\uac12: ",(0,a.kt)("strong",{parentName:"li"},"master")),(0,a.kt)("li",{parentName:"ul"},"\uc720\ud615: ",(0,a.kt)("strong",{parentName:"li"},"String"))),(0,a.kt)("p",null,"\ucd5c\uc2e0 \ubcc0\uacbd \uc0ac\ud56d\uc744 \uac8c\uc2dc\ud558\ub294 \ub370 \uc0ac\uc6a9\ub418\ub294 \uc800\uc7a5\uc18c\uc758 \uae30\ubcf8 \ube0c\ub79c\uce58\uc785\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"--force"},"--force"),(0,a.kt)("p",null,"\ubc84\uc804 5.18.0\uc5d0\uc11c \ucd94\uac00\ub428"),(0,a.kt)("p",null,"\ud604\uc7ac \ubc84\uc804\uc774 \uc774\ubbf8 \ub808\uc9c0\uc2a4\ud2b8\ub9ac\uc5d0 \uc788\ub294 \uacbd\uc6b0\uc5d0\ub3c4 \ud328\ud0a4\uc9c0\ub97c \uac8c\uc2dc\ud558\ub824\uace0 \ud569\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"--report-summary"},"--report-summary"),(0,a.kt)("p",null,"\ubc84\uc804 6.5.0\uc5d0\uc11c \ucd94\uac00\ub428"),(0,a.kt)("p",null,"\uac8c\uc2dc\ub41c \ud328\ud0a4\uc9c0 \ubaa9\ub85d\uc744 ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm-publish-summary.json"),"\uc5d0 \uc800\uc7a5\ud569\ub2c8\ub2e4. \uac8c\uc2dc\ub41c \ud328\ud0a4\uc9c0 \ubaa9\ub85d\uc744 \ubcf4\uace0\ud558\uae30 \uc704\ud574 \ub2e4\ub978 \ub3c4\uad6c\ub97c \uc0ac\uc6a9\ud560 \ub54c \uc720\uc6a9\ud569\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,a.kt)("p",null,"Added in: 4.6.0"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/ko/6.x/filtering"},"\ud544\ud130\ub9c1\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcf4\uc138\uc694.")))}k.isMDXComponent=!0}}]);