"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1015],{3482:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(5170);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,p=e.originalType,o=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),s=c(n),m=l,k=s["".concat(o,".").concat(m)]||s[m]||d[m]||p;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var p=n.length,i=new Array(p);i[0]=s;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a.mdxType="string"==typeof e?e:l,i[1]=a;for(var c=2;c<p;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1574:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var r=n(2182),l=n(9028),p=(n(5170),n(3482)),i=["components"],a={id:"exec",title:"pnpm exec"},o=void 0,c={unversionedId:"cli/exec",id:"version-7.x/cli/exec",title:"pnpm exec",description:"\ud504\ub85c\uc81d\ud2b8 \ubc94\uc704\uc5d0\uc11c \uc178 \uba85\ub839\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-7.x/cli/exec.md",sourceDirName:"cli",slug:"/cli/exec",permalink:"/ko/cli/exec",editUrl:"https://crowdin.com/project/pnpm/ko",tags:[],version:"7.x",frontMatter:{id:"exec",title:"pnpm exec"},sidebar:"version-7.x/docs",previous:{title:"pnpm test",permalink:"/ko/cli/test"},next:{title:"pnpm dlx",permalink:"/ko/cli/dlx"}},u={},d=[{value:"\uc608\uc2dc",id:"\uc608\uc2dc",level:2},{value:"\uc635\uc158",id:"\uc635\uc158",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"\uc608\uc2dc",id:"\uc608\uc2dc-1",level:4},{value:"--parallel",id:"--parallel",level:3},{value:"--shell-mode, -c",id:"--shell-mode--c",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],s={toc:d};function m(e){var t=e.components,n=(0,l.Z)(e,i);return(0,p.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\ud504\ub85c\uc81d\ud2b8 \ubc94\uc704\uc5d0\uc11c \uc178 \uba85\ub839\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"node_modules/.bin"),"\ub294 ",(0,p.kt)("inlineCode",{parentName:"p"},"PATH"),"\uc5d0 \ucd94\uac00\ub418\ubbc0\ub85c, ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm exec")," \uc5d0\uc11c\ub294 \uc758\uc874\uc131 \uba85\ub839\uc744 \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("h2",{id:"\uc608\uc2dc"},"\uc608\uc2dc"),(0,p.kt)("p",null,"\ud504\ub85c\uc81d\ud2b8\uc758 \uc758\uc874\uc131\uc73c\ub85c Jest\uac00 \uc788\ub294 \uacbd\uc6b0 Jest\ub97c \uc804\uc5ed\uc801\uc73c\ub85c \uc124\uce58\ud560 \ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. \ub2e8\uc9c0 ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm exec"),"\uc744 \uc2e4\ud589\ud558\uba74 \ub429\ub2c8\ub2e4"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm exec jest\n")),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"exec")," \ubd80\ubd84\uc740 \uc2e4\uc81c\ub85c \uc120\ud0dd \uc0ac\ud56d\uc774\ubbc0\ub85c \ub2e4\uc74c\uc744 \uc2e4\ud589\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm jest\n")),(0,p.kt)("h2",{id:"\uc635\uc158"},"\uc635\uc158"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"exec")," \uba85\ub839\uc5d0 \ub300\ud55c \ubaa8\ub4e0 \uc635\uc158\uc740 ",(0,p.kt)("inlineCode",{parentName:"p"},"exec")," \ud0a4\uc6cc\ub4dc \uc55e\uc5d0 \ub098\uc5f4\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4. ",(0,p.kt)("inlineCode",{parentName:"p"},"exec")," \ud0a4\uc6cc\ub4dc \ub4a4\uc5d0 \ub098\uc5f4\ub41c \uc635\uc158\uc740 \uc2e4\ud589\ub41c \uba85\ub839\uc73c\ub85c \uc804\ub2ec\ub429\ub2c8\ub2e4."),(0,p.kt)("p",null,"Good. pnpm\uc740 \uc7ac\uadc0\uc801\uc73c\ub85c \uc2e4\ud589\ub429\ub2c8\ub2e4."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm -r exec jest\n")),(0,p.kt)("p",null,"Bad, pnpm\uc740 \uc7ac\uadc0\uc801\uc73c\ub85c \uc2e4\ud589\ub418\uc9c0 \uc54a\uc9c0\ub9cc ",(0,p.kt)("inlineCode",{parentName:"p"},"jest")," \uc740 ",(0,p.kt)("inlineCode",{parentName:"p"},"-r")," \uc635\uc158\uacfc \ud568\uaed8 \uc2e4\ud589\ub429\ub2c8\ub2e4."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm exec jest -r\n")),(0,p.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,p.kt)("p",null,"\uc6cc\ud06c\uc2a4\ud398\uc774\uc2a4 \ub0b4\uc758 \ubaa8\ub4e0 \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \uc178 \uba85\ub839\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,p.kt)("p",null,"\ud604\uc7ac \ud328\ud0a4\uc9c0\uc758 \uc774\ub984\uc740 \ud658\uacbd \ubcc0\uc218 ",(0,p.kt)("inlineCode",{parentName:"p"},"PNPM_PACKAGE_NAME"),"\ub97c \ud1b5\ud574 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("h4",{id:"\uc608\uc2dc-1"},"\uc608\uc2dc"),(0,p.kt)("p",null,"\ubaa8\ub4e0 \ud328\ud0a4\uc9c0\uc5d0 \ub300\ud55c ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules")," \uc124\uce58\ub97c \uc815\ub9ac\ud569\ub2c8\ub2e4."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm -r exec rm -rf node_modules\n")),(0,p.kt)("p",null,"\ubaa8\ub4e0 \ud328\ud0a4\uc9c0\uc5d0 \ub300\ud55c \ud328\ud0a4\uc9c0 \uc815\ubcf4\ub97c \ubd05\ub2c8\ub2e4. \ud658\uacbd \ubcc0\uc218\uac00 \uc791\ub3d9\ud558\ub824\uba74 ",(0,p.kt)("inlineCode",{parentName:"p"},"--shell-mode")," (\ub610\ub294 ",(0,p.kt)("inlineCode",{parentName:"p"},"-c"),") \uc635\uc158\uacfc \ud568\uaed8 \uc0ac\uc6a9\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm -rc exec pnpm view $PNPM_PACKAGE_NAME\n")),(0,p.kt)("h3",{id:"--parallel"},"--parallel"),(0,p.kt)("p",null,"Completely disregard concurrency and topological sorting, running a given script immediately in all matching packages with prefixed streaming output. This is the preferred flag for long-running processes over many packages, for instance, a lengthy build process."),(0,p.kt)("h3",{id:"--shell-mode--c"},"--shell-mode, -c"),(0,p.kt)("p",null,"\uc258 \ub0b4\ubd80\uc5d0\uc11c \uba85\ub839\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4. UNIX\uc5d0\uc11c\ub294 ",(0,p.kt)("inlineCode",{parentName:"p"},"/bin/sh")," \uc744 \uc0ac\uc6a9\ud558\uace0 Windows\uc5d0\uc11c\ub294 ",(0,p.kt)("inlineCode",{parentName:"p"},"\\cmd.exe")," \uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,p.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/ko/filtering"},"\ud544\ud130\ub9c1\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcf4\uc138\uc694.")))}m.isMDXComponent=!0}}]);