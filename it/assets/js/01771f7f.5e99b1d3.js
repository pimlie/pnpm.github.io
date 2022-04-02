"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6841],{3482:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var l=n(5170);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=l.createContext({}),s=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return l.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(n),c=i,k=m["".concat(p,".").concat(c)]||m[c]||u[c]||a;return n?l.createElement(k,r(r({ref:t},d),{},{components:n})):l.createElement(k,r({ref:t},d))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var s=2;s<a;s++)r[s]=n[s];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8714:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var l=n(2182),i=n(9028),a=(n(5170),n(3482)),r=["components"],o={id:"install",title:"pnpm install"},p=void 0,s={unversionedId:"cli/install",id:"version-6.x/cli/install",title:"pnpm install",description:"Alias: i",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-6.x/cli/install.md",sourceDirName:"cli",slug:"/cli/install",permalink:"/it/6.x/cli/install",editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"6.x",frontMatter:{id:"install",title:"pnpm install"},sidebar:"version-6.x/docs",previous:{title:"pnpm add <pkg>",permalink:"/it/6.x/cli/add"},next:{title:"pnpm update",permalink:"/it/6.x/cli/update"}},d={},u=[{value:"TL;DR",id:"tldr",level:2},{value:"Opzioni",id:"opzioni",level:2},{value:"--offline",id:"--offline",level:3},{value:"--prefer-offline",id:"--prefer-offline",level:3},{value:"--ignore-scripts",id:"--ignore-scripts",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--no-optional",id:"--no-optional",level:3},{value:"--lockfile-only",id:"--lockfile-only",level:3},{value:"--fix-lockfile",id:"--fix-lockfile",level:3},{value:"--frozen-lockfile",id:"--frozen-lockfile",level:3},{value:"--reporter=&lt;nome&gt;",id:"--reporternome",level:3},{value:"--use-store-server",id:"--use-store-server",level:3},{value:"--shamefully-hoist",id:"--shamefully-hoist",level:3},{value:"--filter &lt;selettore_pacchetto&gt;",id:"--filter-selettore_pacchetto",level:3}],m={toc:u};function c(e){var t=e.components,o=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,l.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Alias: ",(0,a.kt)("inlineCode",{parentName:"p"},"i")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install")," viene utilizzato per installare tutte le dipendenze di un progetto."),(0,a.kt)("p",null,"In un ambiente CI, l'installazione fallisce se un lockfile \xe8 presente ma necessita di un aggiornamento."),(0,a.kt)("p",null,"All'interno di uno ",(0,a.kt)("a",{parentName:"p",href:"/it/6.x/workspaces"},"spazio di lavoro"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install")," installa tutte le dipendenze in tutti i progetti. Se vuoi disabilitare questo comportamento, imposta l'opzione ",(0,a.kt)("inlineCode",{parentName:"p"},"recursive-install")," a ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5969).Z,width:"940",height:"472"})),(0,a.kt)("h2",{id:"tldr"},"TL;DR"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Comando"),(0,a.kt)("th",{parentName:"tr",align:null},"Significato"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"pnpm i --offline")),(0,a.kt)("td",{parentName:"tr",align:null},"Installa offline solo dall'archivio")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"pnpm i --frozen-lockfile")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"pnpm-lock.yaml")," non viene aggiornato")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"pnpm i --lockfile-only")),(0,a.kt)("td",{parentName:"tr",align:null},"Solo ",(0,a.kt)("inlineCode",{parentName:"td"},"pnpm-lock.yaml")," viene aggiornato")))),(0,a.kt)("h2",{id:"opzioni"},"Opzioni"),(0,a.kt)("h3",{id:"--offline"},"--offline"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Predefinito: ",(0,a.kt)("strong",{parentName:"li"},"false")),(0,a.kt)("li",{parentName:"ul"},"Tipo: ",(0,a.kt)("strong",{parentName:"li"},"Booleano"))),(0,a.kt)("p",null,"Se ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", pnpm utilizzer\xe0 solo i pacchetti gi\xe0 disponibili nell'archivio. Se un pacchetto non verr\xe0 trovato localmente, l'installazione fallir\xe0."),(0,a.kt)("h3",{id:"--prefer-offline"},"--prefer-offline"),(0,a.kt)("p",null,"Aggiunto nella versione: v1.28.0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Predefinito: ",(0,a.kt)("strong",{parentName:"li"},"false")),(0,a.kt)("li",{parentName:"ul"},"Tipo: ",(0,a.kt)("strong",{parentName:"li"},"Booleano"))),(0,a.kt)("p",null,"Se ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", i controlli di obsolescenza per i dati memorizzati nella cache verranno ignorati, ma i dati mancanti verranno richiesti dal server. Per forzare la modalit\xe0 offline completa, utilizzare ",(0,a.kt)("inlineCode",{parentName:"p"},"--offline"),"."),(0,a.kt)("h3",{id:"--ignore-scripts"},"--ignore-scripts"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Predefinito: ",(0,a.kt)("strong",{parentName:"li"},"false")),(0,a.kt)("li",{parentName:"ul"},"Tipo: ",(0,a.kt)("strong",{parentName:"li"},"Booleano"))),(0,a.kt)("p",null,"Non eseguire alcun script definito nel file ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," del progetto e nelle sue dipendenze."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Questo flag non impedisce l'esecuzione di ",(0,a.kt)("a",{parentName:"p",href:"/it/6.x/pnpmfile"},".pnpmfile.cjs")))),(0,a.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,a.kt)("p",null,"pnpm non installer\xe0 alcun pacchetto elencato nelle dipendenze di sviluppo (",(0,a.kt)("inlineCode",{parentName:"p"},"devDependencies"),") se la variabile di ambiente ",(0,a.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," \xe8 impostata su produzione. Utilizzare questo flag per indicare a pnpm di ignorare ",(0,a.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," e prendere invece lo stato di produzione da questo flag."),(0,a.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,a.kt)("p",null,"Solo le dipendenze di sviluppo (",(0,a.kt)("inlineCode",{parentName:"p"},"devDependencies"),") vengono installate indipendentemente da ",(0,a.kt)("inlineCode",{parentName:"p"},"NODE_ENV"),"."),(0,a.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,a.kt)("p",null,"Le dipendenze opzionali (",(0,a.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),") non vengono installate."),(0,a.kt)("h3",{id:"--lockfile-only"},"--lockfile-only"),(0,a.kt)("p",null,"Aggiunto nella versione: v1.26.0 (inizialmente chiamato ",(0,a.kt)("inlineCode",{parentName:"p"},"shrinkwrap-only"),")"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Predefinito: ",(0,a.kt)("strong",{parentName:"li"},"false")),(0,a.kt)("li",{parentName:"ul"},"Tipo: ",(0,a.kt)("strong",{parentName:"li"},"Booleano"))),(0,a.kt)("p",null,"Se utilizzato, aggiorna solo ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," e ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),". Non viene scritto nulla nella cartella ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules"),"."),(0,a.kt)("h3",{id:"--fix-lockfile"},"--fix-lockfile"),(0,a.kt)("p",null,"Aggiunto nella versione: v6.15.0"),(0,a.kt)("p",null,"Correggi automaticamente le voci del file di blocco non funzionanti."),(0,a.kt)("h3",{id:"--frozen-lockfile"},"--frozen-lockfile"),(0,a.kt)("p",null,"Aggiunto nella versione: v1.37.1 (inizialmente chiamato ",(0,a.kt)("inlineCode",{parentName:"p"},"frozen-shrinkwrap"),")"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Predefinito:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Per non CI: ",(0,a.kt)("strong",{parentName:"li"},"false")),(0,a.kt)("li",{parentName:"ul"},"Per CI: ",(0,a.kt)("strong",{parentName:"li"},"true"),", se \xe8 presente un lockfile"))),(0,a.kt)("li",{parentName:"ul"},"Tipo: ",(0,a.kt)("strong",{parentName:"li"},"Booleano"))),(0,a.kt)("p",null,"Se ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", pnpm non genera un lockfile e l'installazione fallisce se il lockfile \xe8 fuori sincronizzazione con il manifesto / un aggiornamento \xe8 necessario o nessun lockfile \xe8 presente."),(0,a.kt)("h3",{id:"--reporternome"},"--reporter=","<","nome",">"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Predefinito:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Per TTY stdout: ",(0,a.kt)("strong",{parentName:"li"},"default")),(0,a.kt)("li",{parentName:"ul"},"Per stdout non TTY: ",(0,a.kt)("strong",{parentName:"li"},"append-only")))),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("strong",{parentName:"li"},"default"),", ",(0,a.kt)("strong",{parentName:"li"},"append-only"),", ",(0,a.kt)("strong",{parentName:"li"},"ndjson"),", ",(0,a.kt)("strong",{parentName:"li"},"silent"))),(0,a.kt)("p",null,"Consente di scegliere il segnalatore che registrer\xe0 le informazioni di debug al terminale circa l'avanzamento dell'installazione."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"silent")," - nessun output viene registrato nella console, ad eccezione degli errori fatali"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"default")," - il segnalatore predefinito quando lo stdout \xe8 TTY"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"append-only")," (Aggiunto nella versione v1.29.1) - l'output viene sempre aggiunto alla fine. Non vengono eseguite manipolazioni del cursore"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ndjson")," - il segnalatore pi\xf9 verboso. Stampa tutti i log nel formato ",(0,a.kt)("a",{parentName:"li",href:"http://ndjson.org/"},"ndjson"))),(0,a.kt)("h3",{id:"--use-store-server"},"--use-store-server"),(0,a.kt)("p",null,"Aggiunto nella versione: v1.30.0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Predefinito: ",(0,a.kt)("strong",{parentName:"li"},"false")),(0,a.kt)("li",{parentName:"ul"},"Tipo: ",(0,a.kt)("strong",{parentName:"li"},"Booleano"))),(0,a.kt)("p",null,"Avvia un server di archiviazione in background. Il server di archiviazione continuer\xe0 a funzionare al termine dell'installazione. Per arrestare il server di archiviazione, eseguire ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm server stop")),(0,a.kt)("h3",{id:"--shamefully-hoist"},"--shamefully-hoist"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Predefinito: ",(0,a.kt)("strong",{parentName:"li"},"false")),(0,a.kt)("li",{parentName:"ul"},"Tipo: ",(0,a.kt)("strong",{parentName:"li"},"Booleano"))),(0,a.kt)("p",null,"Crea una struttura flat di ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules"),", simile a quella di ",(0,a.kt)("inlineCode",{parentName:"p"},"npm")," o ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn"),". ",(0,a.kt)("strong",{parentName:"p"},"ATTENZIONE"),": Questo \xe8 altamente sconsigliato."),(0,a.kt)("h3",{id:"--filter-selettore_pacchetto"},"--filter ","<","selettore_pacchetto>"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/it/6.x/filtering"},"Ulteriori informazioni sui filtri.")))}c.isMDXComponent=!0},5969:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/pnpm-install-922fbb8bb4d96b8f602a40e6cd07ee13.svg"}}]);