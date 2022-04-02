"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3576],{3482:(e,n,o)=>{o.d(n,{Zo:()=>s,kt:()=>u});var t=o(5170);function a(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function r(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function l(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(n){a(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function p(e,n){if(null==e)return{};var o,t,a=function(e,n){if(null==e)return{};var o,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||(a[o]=e[o]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var i=t.createContext({}),m=function(e){var n=t.useContext(i),o=n;return e&&(o="function"==typeof e?e(n):l(l({},n),e)),o},s=function(e){var n=m(e.components);return t.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var o=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=m(o),u=a,v=c["".concat(i,".").concat(u)]||c[u]||d[u]||r;return o?t.createElement(v,l(l({ref:n},s),{},{components:o})):t.createElement(v,l({ref:n},s))}));function u(e,n){var o=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=o.length,l=new Array(r);l[0]=c;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var m=2;m<r;m++)l[m]=o[m];return t.createElement.apply(null,l)}return t.createElement.apply(null,o)}c.displayName="MDXCreateElement"},4373:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>p,metadata:()=>m,toc:()=>d});var t=o(2182),a=o(9028),r=(o(5170),o(3482)),l=["components"],p={id:"uninstall",title:"Desinstalando o pnpm"},i=void 0,m={unversionedId:"uninstall",id:"version-6.x/uninstall",title:"Desinstalando o pnpm",description:"Removendo os pacotes instalados globalmente",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-6.x/uninstall.md",sourceDirName:".",slug:"/uninstall",permalink:"/pt/6.x/uninstall",editUrl:"https://crowdin.com/project/pnpm/pt-BR",tags:[],version:"6.x",frontMatter:{id:"uninstall",title:"Desinstalando o pnpm"},sidebar:"version-6.x/docs",previous:{title:"How peers are resolved",permalink:"/pt/6.x/how-peers-are-resolved"},next:{title:"pnpm vs npm",permalink:"/pt/6.x/pnpm-vs-npm"}},s={},d=[{value:"Removendo os pacotes instalados globalmente",id:"removendo-os-pacotes-instalados-globalmente",level:2},{value:"Removendo a ferramenta de linha de comando pnpm",id:"removendo-a-ferramenta-de-linha-de-comando-pnpm",level:2},{value:"Removendo o armazenamento de conte\xfado endere\xe7\xe1vel global",id:"removendo-o-armazenamento-de-conte\xfado-endere\xe7\xe1vel-global",level:2},{value:"Removendo o arquivo de estado",id:"removendo-o-arquivo-de-estado",level:2}],c={toc:d};function u(e){var n=e.components,o=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,t.Z)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"removendo-os-pacotes-instalados-globalmente"},"Removendo os pacotes instalados globalmente"),(0,r.kt)("p",null,"Antes de remover a ferramenta de linha de comando do pnpm, pode fazer sentido tamb\xe9m remover todos os pacotes globais instalados pelo pnpm."),(0,r.kt)("p",null,"Para listar todos os pacotes globais, execute ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm ls -g"),". Existem duas maneiras de se remover os pacotes globais:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Execute ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm rm -r <pkg>...")," com cada pacote global listado."),(0,r.kt)("li",{parentName:"ol"},"Execute ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm root -g")," para encontrar o local do diret\xf3rio global e remov\xea-lo manualmente.")),(0,r.kt)("h2",{id:"removendo-a-ferramenta-de-linha-de-comando-pnpm"},"Removendo a ferramenta de linha de comando pnpm"),(0,r.kt)("p",null,"Se usou o script aut\xf4nomo para instalar pnpm (ou o npx), ent\xe3o poder\xe1 desinstalar a ferramenta de linha de comando pnpm usando:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pnpm rm -g pnpm\n")),(0,r.kt)("p",null,"Se voc\xea usou o npm para instalar o pnpm, ent\xe3o deve utilizar o npm para remov\xea-lo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm rm -g pnpm\n")),(0,r.kt)("h2",{id:"removendo-o-armazenamento-de-conte\xfado-endere\xe7\xe1vel-global"},"Removendo o armazenamento de conte\xfado endere\xe7\xe1vel global"),(0,r.kt)("p",null,"Se voc\xea utilizou o pnpm apenas no disco prim\xe1rio, ent\xe3o voc\xea ter\xe1 um armazenamento global no diret\xf3rio inicial. Ent\xe3o, basta remov\xea-lo via:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"rm -rf ~/.pnpm-store\n")),(0,r.kt)("p",null,"Se voc\xea utilizou o pnpm em discos n\xe3o-prim\xe1rios, ent\xe3o o armazenamento est\xe1 na raiz daquele disco. Por exemplo, se voc\xea utilizou o pnpm no disco ",(0,r.kt)("inlineCode",{parentName:"p"},"D:")," no Windows, remova o armazenamento em ",(0,r.kt)("inlineCode",{parentName:"p"},"D:\\.pnpm-store"),"."),(0,r.kt)("h2",{id:"removendo-o-arquivo-de-estado"},"Removendo o arquivo de estado"),(0,r.kt)("p",null,"O pnpm tamb\xe9m salva estados em ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.pnpm-state.json"),". Voc\xea pode remover este arquivo."))}u.isMDXComponent=!0}}]);