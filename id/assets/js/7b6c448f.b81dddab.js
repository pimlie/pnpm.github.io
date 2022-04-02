"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9807],{3482:(e,a,t)=>{t.d(a,{Zo:()=>s,kt:()=>u});var n=t(5170);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=n.createContext({}),o=function(e){var a=n.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},s=function(e){var a=o(e.components);return n.createElement(d.Provider,{value:a},e.children)},k={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=o(t),u=r,c=m["".concat(d,".").concat(u)]||m[u]||k[u]||i;return t?n.createElement(c,l(l({ref:a},s),{},{components:t})):n.createElement(c,l({ref:a},s))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=m;var p={};for(var d in a)hasOwnProperty.call(a,d)&&(p[d]=a[d]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var o=2;o<i;o++)l[o]=t[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1142:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>d,default:()=>u,frontMatter:()=>p,metadata:()=>o,toc:()=>k});var n=t(2182),r=t(9028),i=(t(5170),t(3482)),l=["components"],p={id:"add",title:"pnpm add <pkg>"},d=void 0,o={unversionedId:"cli/add",id:"version-7.x/cli/add",title:"pnpm add <pkg>",description:"Memasang sebuah paket dan paket apa pun yang bergantung padanya. Secara asali, paket baru apa pun diinstal sebagai dependensi produksi.",source:"@site/i18n/id/docusaurus-plugin-content-docs/version-7.x/cli/add.md",sourceDirName:"cli",slug:"/cli/add",permalink:"/id/cli/add",editUrl:"https://crowdin.com/project/pnpm/id",tags:[],version:"7.x",frontMatter:{id:"add",title:"pnpm add <pkg>"},sidebar:"version-7.x/docs",previous:{title:"Scripts",permalink:"/id/scripts"},next:{title:"pnpm install",permalink:"/id/cli/install"}},s={},k=[{value:"RINGKASAN",id:"ringkasan",level:2},{value:"Lokasi paket yang didukung",id:"lokasi-paket-yang-didukung",level:2},{value:"Pasang dari registri npm",id:"pasang-dari-registri-npm",level:3},{value:"Menginstal dari ruang kerja",id:"menginstal-dari-ruang-kerja",level:3},{value:"Instal dari file lokal sistem",id:"instal-dari-file-lokal-sistem",level:3},{value:"Instal dari remote tarball",id:"instal-dari-remote-tarball",level:3},{value:"Instal dari repositori Git",id:"instal-dari-repositori-git",level:3},{value:"Options",id:"options",level:2},{value:"--save-prod, -P",id:"--save-prod--p",level:3},{value:"--save-dev, -D",id:"--save-dev--d",level:3},{value:"--save-optional, -O",id:"--save-optional--o",level:3},{value:"--save-exact, -E",id:"--save-exact--e",level:3},{value:"--save-peer",id:"--save-peer",level:3},{value:"--ignore-workspace-root-check",id:"--ignore-workspace-root-check",level:3},{value:"--global, -g",id:"--global--g",level:3},{value:"--workspace",id:"--workspace",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],m={toc:k};function u(e){var a=e.components,t=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Memasang sebuah paket dan paket apa pun yang bergantung padanya. Secara asali, paket baru apa pun diinstal sebagai dependensi produksi."),(0,i.kt)("h2",{id:"ringkasan"},"RINGKASAN"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Perintah"),(0,i.kt)("th",{parentName:"tr",align:null},"Arti"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pnpm add sax")),(0,i.kt)("td",{parentName:"tr",align:null},"Simpan ke ",(0,i.kt)("inlineCode",{parentName:"td"},"dependencies"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pnpm add -D sax")),(0,i.kt)("td",{parentName:"tr",align:null},"Simpan ke ",(0,i.kt)("inlineCode",{parentName:"td"},"devDependencies"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pnpm add -O sax")),(0,i.kt)("td",{parentName:"tr",align:null},"Simpan ke ",(0,i.kt)("inlineCode",{parentName:"td"},"optionalDependencies"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pnpm add -g sax")),(0,i.kt)("td",{parentName:"tr",align:null},"Instal paket secara global")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pnpm add sax@next")),(0,i.kt)("td",{parentName:"tr",align:null},"Menginstal dari tanda versi ",(0,i.kt)("inlineCode",{parentName:"td"},"next"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pnpm add sax@3.0.0")),(0,i.kt)("td",{parentName:"tr",align:null},"Tentukan versi ",(0,i.kt)("inlineCode",{parentName:"td"},"3.0.0"))))),(0,i.kt)("h2",{id:"lokasi-paket-yang-didukung"},"Lokasi paket yang didukung"),(0,i.kt)("h3",{id:"pasang-dari-registri-npm"},"Pasang dari registri npm"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pnpm menambahkan nama-paket")," akan menginstal versi terbaru ",(0,i.kt)("inlineCode",{parentName:"p"},"nama-paket")," dari ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm")," secara default."),(0,i.kt)("p",null,"Jika dijalankan di workspace (ruang kerja), perintah pertama-tama akan mencoba memeriksa apakah proyek lain di workspace menggunakan paket yang ditentukan. Jika demikian, rentang versi yang sudah digunakan akan dipasang."),(0,i.kt)("p",null,"Anda juga dapat memasang paket dengan:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"tanda: ",(0,i.kt)("inlineCode",{parentName:"li"},"pnpm add express@nightly")),(0,i.kt)("li",{parentName:"ul"},"versi: ",(0,i.kt)("inlineCode",{parentName:"li"},"pnpm add express@1.0.0")),(0,i.kt)("li",{parentName:"ul"},"rentang versi: ",(0,i.kt)("inlineCode",{parentName:"li"},'pnpm add express@2 react@">= 0.1.0 <0.2.0"'))),(0,i.kt)("h3",{id:"menginstal-dari-ruang-kerja"},"Menginstal dari ruang kerja"),(0,i.kt)("p",null,"Note that when adding dependencies and working within a ",(0,i.kt)("a",{parentName:"p",href:"/id/workspaces"},"workspace"),", packages will be installed from the configured sources, depending on whether or not ",(0,i.kt)("a",{parentName:"p",href:"/id/workspaces#link-workspace-packages"},(0,i.kt)("inlineCode",{parentName:"a"},"link-workspace-packages"))," is set, and use of the ",(0,i.kt)("a",{parentName:"p",href:"/id/workspaces#workspace-ranges-workspace"},(0,i.kt)("inlineCode",{parentName:"a"},"workspace: range protocol")),"."),(0,i.kt)("h3",{id:"instal-dari-file-lokal-sistem"},"Instal dari file lokal sistem"),(0,i.kt)("p",null,"There are two ways to install from the local file system:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"dari berkas tarball (",(0,i.kt)("inlineCode",{parentName:"li"},".tar"),", ",(0,i.kt)("inlineCode",{parentName:"li"},".tar.gz"),", atau ",(0,i.kt)("inlineCode",{parentName:"li"},".tgz"),")"),(0,i.kt)("li",{parentName:"ol"},"dari direktori")),(0,i.kt)("p",null,"Examples:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add ./package.tar.gz\npnpm add ./some-directory\n")),(0,i.kt)("p",null,"When you install from a directory, a symlink will be created in the current project's ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules"),", so it is the same as running ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm link"),"."),(0,i.kt)("h3",{id:"instal-dari-remote-tarball"},"Instal dari remote tarball"),(0,i.kt)("p",null,'The argument must be a fetchable URL starting with "http://" or "https://".'),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add https://github.com/indexzero/forever/tarball/v0.5.6\n")),(0,i.kt)("h3",{id:"instal-dari-repositori-git"},"Instal dari repositori Git"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add <git remote url>\n")),(0,i.kt)("p",null,"Installs the package from the hosted Git provider, cloning it with Git. You can use a protocol for certain Git providers. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm add github:user/repo")),(0,i.kt)("p",null,"You may install from Git by:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"komit terbaru dari master: ",(0,i.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive")),(0,i.kt)("li",{parentName:"ul"},"komit: ",(0,i.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#97edff6f525f192a3f83cea1944765f769ae2678")),(0,i.kt)("li",{parentName:"ul"},"branch: ",(0,i.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positif#master")),(0,i.kt)("li",{parentName:"ul"},"rentang versi: ",(0,i.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#semver:^2.0.0"))),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"--save-prod--p"},"--save-prod, -P"),(0,i.kt)("p",null,"Install the specified packages as regular ",(0,i.kt)("inlineCode",{parentName:"p"},"dependencies"),"."),(0,i.kt)("h3",{id:"--save-dev--d"},"--save-dev, -D"),(0,i.kt)("p",null,"Install the specified packages as ",(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,i.kt)("h3",{id:"--save-optional--o"},"--save-optional, -O"),(0,i.kt)("p",null,"Install the specified packages as ",(0,i.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,i.kt)("h3",{id:"--save-exact--e"},"--save-exact, -E"),(0,i.kt)("p",null,"Saved dependencies will be configured with an exact version rather than using pnpm's default semver range operator."),(0,i.kt)("h3",{id:"--save-peer"},"--save-peer"),(0,i.kt)("p",null,"Using ",(0,i.kt)("inlineCode",{parentName:"p"},"--save-peer")," will add one or more packages to ",(0,i.kt)("inlineCode",{parentName:"p"},"peerDependencies")," and install them as dev dependencies."),(0,i.kt)("h3",{id:"--ignore-workspace-root-check"},"--ignore-workspace-root-check"),(0,i.kt)("p",null,"Adding a new dependency to the root workspace package fails, unless the ",(0,i.kt)("inlineCode",{parentName:"p"},"--ignore-workspace-root-check")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"-w")," flag is used."),(0,i.kt)("p",null,"For instance, ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm add debug -w"),"."),(0,i.kt)("h3",{id:"--global--g"},"--global, -g"),(0,i.kt)("p",null,"Install a package globally."),(0,i.kt)("h3",{id:"--workspace"},"--workspace"),(0,i.kt)("p",null,"Only adds the new dependency if it is found in the workspace."),(0,i.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/id/filtering"},"Read more about filtering.")))}u.isMDXComponent=!0}}]);