"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1857],{3482:(e,t,i)=>{i.d(t,{Zo:()=>m,kt:()=>d});var n=i(5170);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(i),d=r,f=u["".concat(p,".").concat(d)]||u[d]||c[d]||o;return i?n.createElement(f,a(a({ref:t},m),{},{components:i})):n.createElement(f,a({ref:t},m))}));function d(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=i[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},1105:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=i(2182),r=i(9028),o=(i(5170),i(3482)),a=["components"],l={id:"limitations",title:"Limitazioni"},p=void 0,s={unversionedId:"limitations",id:"version-6.x/limitations",title:"Limitazioni",description:"1. npm-shrinkwrap.json e package-lock.json vengono ignorati. A differenza di pnpm, npm pu\xf2 installare lo stesso nome@versione pi\xf9 volte e con diversi set di dipendenze. il lockfile di npm \xe8 progettato per riflettere la struttura flat di node_modules, tuttavia, poich\xe9 pnpm crea un layout isolato per impostazione predefinita, non pu\xf2 rispettare il formato del lockfile di npm. Vedi pnpm import se desideri convertire un lockfile nel formato di pnpm.",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-6.x/limitations.md",sourceDirName:".",slug:"/limitations",permalink:"/it/6.x/limitations",editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"6.x",frontMatter:{id:"limitations",title:"Limitazioni"},sidebar:"version-6.x/docs",previous:{title:"Loghi",permalink:"/it/6.x/logos"},next:{title:"Struttura `node_modules` con collegamenti simbolici",permalink:"/it/6.x/symlinked-node-modules-structure"}},m={},c=[],u={toc:c};function d(e){var t=e.components,i=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"npm-shrinkwrap.json")," e ",(0,o.kt)("inlineCode",{parentName:"li"},"package-lock.json")," vengono ignorati. A differenza di pnpm, npm pu\xf2 installare lo stesso ",(0,o.kt)("inlineCode",{parentName:"li"},"nome@versione")," pi\xf9 volte e con diversi set di dipendenze. il lockfile di npm \xe8 progettato per riflettere la struttura flat di ",(0,o.kt)("inlineCode",{parentName:"li"},"node_modules"),", tuttavia, poich\xe9 pnpm crea un layout isolato per impostazione predefinita, non pu\xf2 rispettare il formato del lockfile di npm. Vedi ",(0,o.kt)("a",{parentName:"li",href:"/it/6.x/cli/import"},"pnpm import")," se desideri convertire un lockfile nel formato di pnpm."),(0,o.kt)("li",{parentName:"ol"},"I file binari (file in ",(0,o.kt)("inlineCode",{parentName:"li"},"node_modules/.bin"),") sono sempre file di shell, non collegamenti simbolici a file JS. I file shell sono creati per aiutare le app CLI collegabili a trovare i loro plug-in nell'insolita struttura di ",(0,o.kt)("inlineCode",{parentName:"li"},"node_modules"),". Questo \xe8 molto raramente un problema e se prevedi che il file sia un file JS, fai invece riferimento direttamente al file originale, come spiegato in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/pnpm/pnpm/issues/736"},"#736"),".")),(0,o.kt)("p",null,"Hai un'idea per risolvere questi problemi? ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/issues/new"},"Condividila.")))}d.isMDXComponent=!0}}]);