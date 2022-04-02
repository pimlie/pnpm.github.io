"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6160],{3482:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(5170);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2326:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>p,metadata:()=>l,toc:()=>m});var r=n(2182),o=n(9028),a=(n(5170),n(3482)),i=["components"],p={id:"store",title:"pnpm store"},s=void 0,l={unversionedId:"cli/store",id:"version-6.x/cli/store",title:"pnpm store",description:"Managing the package store.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-6.x/cli/store.md",sourceDirName:"cli",slug:"/cli/store",permalink:"/pt/6.x/cli/store",editUrl:"https://crowdin.com/project/pnpm/pt-BR",tags:[],version:"6.x",frontMatter:{id:"store",title:"pnpm store"},sidebar:"version-6.x/docs",previous:{title:"pnpm server",permalink:"/pt/6.x/cli/server"},next:{title:"pnpm root",permalink:"/pt/6.x/cli/root"}},c={},m=[{value:"Commands",id:"commands",level:2},{value:"status",id:"status",level:3},{value:"add",id:"add",level:3},{value:"prune",id:"prune",level:3},{value:"path",id:"path",level:3}],u={toc:m};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Managing the package store."),(0,a.kt)("h2",{id:"commands"},"Commands"),(0,a.kt)("h3",{id:"status"},"status"),(0,a.kt)("p",null,"Checks for modified packages in the store."),(0,a.kt)("p",null,"Returns exit code 0 if the content of the package is the same as it was at the time of unpacking."),(0,a.kt)("h3",{id:"add"},"add"),(0,a.kt)("p",null,"Added in: v2.12.0"),(0,a.kt)("p",null,"Functionally equivalent to ",(0,a.kt)("a",{parentName:"p",href:"/pt/6.x/cli/add"},(0,a.kt)("inlineCode",{parentName:"a"},"pnpm add")),", except this adds new packages to the store directly without modifying any projects or files outside of the store."),(0,a.kt)("h3",{id:"prune"},"prune"),(0,a.kt)("p",null,"Removes ",(0,a.kt)("em",{parentName:"p"},"unreferenced packages")," from the store."),(0,a.kt)("p",null,"Pacotes n\xe3o referenciados s\xe3o pacotes que n\xe3o s\xe3o usados por nenhum projeto no sistema. Pacotes podem se tornar n\xe3o referenciados ap\xf3s a maioria das opera\xe7\xf5es de instala\xe7\xe3o, quando, por exemplo, depend\xeancias se tornam redundantes."),(0,a.kt)("p",null,"Por exemplo, durante ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install"),", o pacote ",(0,a.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," \xe9 atualizado para ",(0,a.kt)("inlineCode",{parentName:"p"},"foo@1.0.1"),". pnpm vai manter ",(0,a.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," no armazenamento global, j\xe1 que os pacotes n\xe3o ser\xe3o removidos automaticamente. Caso o pacote ",(0,a.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," n\xe3o seja usado por mais nenhum projeto no sistema, ele se torna um pacote n\xe3o referenciado. Executar ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm store prune")," removeria ",(0,a.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," do armazenamento global."),(0,a.kt)("p",null,"Executar ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm store prune")," n\xe3o \xe9 prejudicial nem tem efeitos colaterais em seus projetos. Caso instala\xe7\xf5es futuras precisem dos pacotes removidos, pnpm ir\xe1 baix\xe1-los novamente."),(0,a.kt)("p",null,"\xc9 recomendado que se execute ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm store prune")," ocasionalmente para limpar o armazenamento global, mas n\xe3o com muita frequ\xeancia. Algumas vezes, pacotes n\xe3o referenciados podem ser exigidos novamente. Isso poderia acontecer ao trocar de branch e ter que instalar depend\xeancias mais antigas, que teriam que ser baixadas novamente, tornando o processo de instala\xe7\xe3o mais lento."),(0,a.kt)("p",null,"Please note that this command is prohibited when a ",(0,a.kt)("a",{parentName:"p",href:"/pt/6.x/cli/server"},"store server")," is running."),(0,a.kt)("h3",{id:"path"},"path"),(0,a.kt)("p",null,"Added in: v6.10.0"),(0,a.kt)("p",null,"Returns the path to the active store directory."))}d.isMDXComponent=!0}}]);