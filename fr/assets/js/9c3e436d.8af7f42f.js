"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5277],{3482:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var a=t(5170);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=l(t),d=r,v=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return t?a.createElement(v,p(p({ref:n},c),{},{components:t})):a.createElement(v,p({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,p=new Array(i);p[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var l=2;l<i;l++)p[l]=t[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3822:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var a=t(2182),r=t(9028),i=(t(5170),t(3482)),p=["components"],o={id:"continuous-integration",title:"Int\xe9gration Continue"},s=void 0,l={unversionedId:"continuous-integration",id:"version-7.x/continuous-integration",title:"Int\xe9gration Continue",description:"pnpm peut facilement \xeatre utilis\xe9 dans divers syst\xe8mes d'int\xe9gration continue.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-7.x/continuous-integration.md",sourceDirName:".",slug:"/continuous-integration",permalink:"/fr/continuous-integration",editUrl:"https://crowdin.com/project/pnpm/fr",tags:[],version:"7.x",frontMatter:{id:"continuous-integration",title:"Int\xe9gration Continue"},sidebar:"version-7.x/docs",previous:{title:"Using Changesets with pnpm",permalink:"/fr/using-changesets"},next:{title:"Travailler avec Git",permalink:"/fr/git"}},c={},m=[{value:"Travis",id:"travis",level:2},{value:"Semaphore",id:"semaphore",level:2},{value:"AppVeyor",id:"appveyor",level:2},{value:"GitHub Actions",id:"github-actions",level:2},{value:"Gitlab CI",id:"gitlab-ci",level:2},{value:"Bitbucket Pipelines",id:"bitbucket-pipelines",level:2}],u={toc:m};function d(e){var n=e.components,t=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"pnpm peut facilement \xeatre utilis\xe9 dans divers syst\xe8mes d'int\xe9gration continue."),(0,i.kt)("h2",{id:"travis"},"Travis"),(0,i.kt)("p",null,"Sur ",(0,i.kt)("a",{parentName:"p",href:"https://travis-ci.org"},"Travis CI"),", vous pouvez utiliser pnpm pour installer vos d\xe9pendances en ajoutant ce qui suit \xe0 votre fichier ",(0,i.kt)("inlineCode",{parentName:"p"},".travis.yml"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".travis.yml"',title:'".travis.yml"'},'cache:\n  npm: false\n  directories:\n    - "~/.pnpm-store"\nbefore_install:\n  - curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@7.0.0-rc.2\n  - pnpm config set store-dir ~/.pnpm-store\ninstall:\n  - pnpm install\n')),(0,i.kt)("h2",{id:"semaphore"},"Semaphore"),(0,i.kt)("p",null,"Sur ",(0,i.kt)("a",{parentName:"p",href:"https://semaphoreci.com"},"Semaphore"),", vous pouvez utiliser pnpm pour installer et mettre en cache vos d\xe9pendances en ajoutant ceci \xe0 votre ",(0,i.kt)("inlineCode",{parentName:"p"},".semaphore/semaphore.yml"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".semaphore/semaphore.yml"',title:'".semaphore/semaphore.yml"'},"version: v1.0\nname: Semaphore CI pnpm example\nagent:\n  machine:\n    type: e1-standard-2\n    os_image: ubuntu1804\nblocks:\n  - name: Install dependencies\n    task:\n      jobs:\n        - name: pnpm install\n          commands:\n            - curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@7.0.0-rc.2\n            - checkout\n            - cache restore node-$(checksum pnpm-lock.yaml)\n            - pnpm install\n            - cache store node-$(checksum pnpm-lock.yaml) $(pnpm store path)\n")),(0,i.kt)("h2",{id:"appveyor"},"AppVeyor"),(0,i.kt)("p",null,"Sur ",(0,i.kt)("a",{parentName:"p",href:"https://www.appveyor.com"},"AppVeyor"),", vous pouvez utiliser pnpm pour installer vos d\xe9pendances en ajoutant ce \xe0 votre ",(0,i.kt)("inlineCode",{parentName:"p"},"appveyor.yml"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="appveyor.yml"',title:'"appveyor.yml"'},"install:\n  - ps: Install-Product node $env:nodejs_version\n  - curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@7.0.0-rc.2\n  - pnpm install\n")),(0,i.kt)("h2",{id:"github-actions"},"GitHub Actions"),(0,i.kt)("p",null,"Sur les actions GitHub, vous pouvez utiliser pnpm pour installer et mettre en cache vos d\xe9pendances comme ceci (fait partie de ",(0,i.kt)("inlineCode",{parentName:"p"},".github/workflows/NAME.yml"),") :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".github/workflows/NAME.yml"',title:'".github/workflows/NAME.yml"'},"name: pnpm Example Workflow\non:\n  push:\njobs:\n  build:\n    runs-on: ubuntu-20.04\n    strategy:\n      matrix:\n        node-version: [15]\n    steps:\n    - uses: actions/checkout@v2\n    - uses: pnpm/action-setup@v2.0.1\n      with:\n        version: 7.0.0-rc.2\n    - name: Use Node.js ${{ matrix.node-version }}\n      uses: actions/setup-node@v2\n      with:\n        node-version: ${{ matrix.node-version }}\n        cache: 'pnpm'\n    - name: Install dependencies\n      run: pnpm install\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"La mise en cache des d\xe9pendances des paquets avec ",(0,i.kt)("inlineCode",{parentName:"p"},"actions/setup-node@v2")," n\xe9cessite l'installation de pnpm avec la version ",(0,i.kt)("strong",{parentName:"p"},"6.10+"),"."))),(0,i.kt)("h2",{id:"gitlab-ci"},"Gitlab CI"),(0,i.kt)("p",null,"Sur Gitlab, vous pouvez utiliser pnpm pour installer et mettre en cache vos d\xe9pendances comme ceci (\xe0 modifier dans ",(0,i.kt)("inlineCode",{parentName:"p"},".gitlab-ci.yml"),") :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".gitlab-ci.yml"',title:'".gitlab-ci.yml"'},'stages:\n  - build\n\nbuild:\n  stage: build\n  image: node:14.16.0-buster\n  before_script:\n    - curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@7.0.0-rc.2\n    - pnpm config set store-dir .pnpm-store\n  script:\n    - pnpm install # install dependencies\n  cache:\n    key: "$CI_COMMIT_REF_SLUG"\n    paths:\n      - .pnpm-store\n')),(0,i.kt)("h2",{id:"bitbucket-pipelines"},"Bitbucket Pipelines"),(0,i.kt)("p",null,"Vous pouvez utiliser pnpm pour installer et mettre en cache vos d\xe9pendances :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".bitbucket-pipelines.yml"',title:'".bitbucket-pipelines.yml"'},'definitions:\n  caches:\n    pnpm: $BITBUCKET_CLONE_DIR/.pnpm-store\n\npipelines:\n  pull-requests:\n    "**":\n      - step:\n          name: Build and test\n          image: node:14.16.0\n          script:\n            - curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@7.0.0-rc.2\n            - pnpm install\n            - pnpm run build # Replace with your build/test\u2026etc. commands\n          caches:\n            - pnpm\n')))}d.isMDXComponent=!0}}]);