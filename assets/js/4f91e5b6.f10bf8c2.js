"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1518],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(r),c=a,f=m["".concat(s,".").concat(c)]||m[c]||d[c]||l;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},7573:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=r(3117),a=(r(7294),r(3905));const l={title:"Mutable Instruments Ugens",id:"mi-ugens"},i=void 0,o={unversionedId:"reference/mi-ugens",id:"reference/mi-ugens",title:"Mutable Instruments Ugens",description:"Description",source:"@site/docs/reference/mi-ugens.md",sourceDirName:"reference",slug:"/reference/mi-ugens",permalink:"/docs/reference/mi-ugens",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/reference/mi-ugens.md",tags:[],version:"current",lastUpdatedBy:"Joan Queralt",lastUpdatedAt:1672071690,formattedLastUpdatedAt:"Dec 26, 2022",frontMatter:{title:"Mutable Instruments Ugens",id:"mi-ugens"},sidebar:"reference",previous:{title:"Composition",permalink:"/docs/reference/composition"},next:{title:"Control Busses",permalink:"/docs/reference/control_busses"}},s={},p=[{value:"Description",id:"description",level:2},{value:"Reference",id:"reference",level:2},{value:"Installation",id:"installation",level:2},{value:"Automatic",id:"automatic",level:3},{value:"Manual",id:"manual",level:3},{value:"Synth Reference",id:"synth-reference",level:2},{value:"omi",id:"omi",level:3},{value:"plaits",id:"plaits",level:3},{value:"braids",id:"braids",level:3},{value:"Effects (Global)",id:"effects-global",level:2},{value:"verb",id:"verb",level:3},{value:"clouds",id:"clouds",level:3},{value:"etc",id:"etc",level:3}],u={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mutable-instruments.net/"},"Mutable Instruments")," is popular Eurorack module company from Normandy. The designer, engineer, and founder of Mutable Instruments, \xc9milie Gillet, has made all of her work ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pichenettes/eurorack"},"open source"),". ",(0,a.kt)("a",{parentName:"p",href:"https://vboehm.net/"},"Volker B\xf6hm")," has taken the time to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/v7b1/mi-UGens"},"port")," some of these modules to ",(0,a.kt)("a",{parentName:"p",href:"https://supercollider.github.io/"},"SuperCollider"),"."),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://todo"},"Synthdefs")," for Braids, Omi, and Plaits"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://todo"},"Effects")," for Verb, Clouds, Rings, etc"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://todo"},"Other")," ???")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("h3",{id:"automatic"},"Automatic"),(0,a.kt)("p",null,"For debian/ubuntu/mint systems, these ugens can be installed as part of the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cleary/ansible-tidalcycles#ugens-mutable-instruments"},"ansible Tidal installer")),(0,a.kt)("h3",{id:"manual"},"Manual"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Unpack the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/v7b1/mi-UGens/releases/latest/"},"latest release")," from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/v7b1/mi-UGens"},"mi-Ugens")," appropriate to your Operating System")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Move the top level directory of the archive (",(0,a.kt)("inlineCode",{parentName:"p"},"mi-UGens/"),") into the SuperCollider Extensions folder (create it if it doesn't exist):"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Linux:   ",(0,a.kt)("inlineCode",{parentName:"li"},"/home/<youruser>/.local/share/SuperCollider/Extensions/mi-UGens")),(0,a.kt)("li",{parentName:"ul"},"Windows: ",(0,a.kt)("inlineCode",{parentName:"li"},"C:\\Users\\<youruser>\\AppData\\Local\\SuperCollider\\Extensions\\mi-UGens")),(0,a.kt)("li",{parentName:"ul"},"OSX:     ",(0,a.kt)("inlineCode",{parentName:"li"},"/Users/<youruser>/Library/Application Support/SuperCollider/Extensions/mi-UGens"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," The SuperCollider Extensions folder can be found by running ",(0,a.kt)("inlineCode",{parentName:"p"},"Platform.userExtensionDir")," in SuperCollider. The path will be printed to the post window."),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Create a new synthdef file ",(0,a.kt)("inlineCode",{parentName:"li"},"mi-ugens.scd"),", with ",(0,a.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/cleary/ansible-tidalcycles-synth-mi-ugens/master/files/mutable-instruments-synthdefs.scd"},"these synthdefs"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Linux:   ",(0,a.kt)("inlineCode",{parentName:"li"},"/home/<youruser>/.local/share/SuperCollider/synthdefs/mi-ugens.scd")),(0,a.kt)("li",{parentName:"ul"},"Windows: ",(0,a.kt)("inlineCode",{parentName:"li"},"C:\\Users\\<youruser>\\AppData\\Local\\SuperCollider\\synthdefs\\mi-ugens.scd")),(0,a.kt)("li",{parentName:"ul"},"OSX:     ",(0,a.kt)("inlineCode",{parentName:"li"},"/home/<youruser>/Library/Application Support/SuperCollider/synthdefs/mi-ugens.scd"))),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Create a new parameter definitions file, ",(0,a.kt)("inlineCode",{parentName:"li"},"mi-ugens-params.hs"),", with ",(0,a.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/cleary/ansible-tidalcycles-synth-mi-ugens/master/files/mutable-instruments-ugens_parameters.hs"},"these parameters"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Linux:   ",(0,a.kt)("inlineCode",{parentName:"li"},"/home/<youruser>/.local/share/SuperCollider/synthdefs/mi-ugens-params.hs")),(0,a.kt)("li",{parentName:"ul"},"Windows: ",(0,a.kt)("inlineCode",{parentName:"li"},"C:\\Users\\<youruser>\\AppData\\Local\\SuperCollider\\synthdefs\\mi-ugens-params.hs")),(0,a.kt)("li",{parentName:"ul"},"OSX:     ",(0,a.kt)("inlineCode",{parentName:"li"},"/Users/<youruser>/Library/Application Support/SuperCollider/synthdefs/mi-ugens-params.hs"))),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Configure SuperCollider - edit your ",(0,a.kt)("inlineCode",{parentName:"li"},"startup.scd"),":")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Linux:   ",(0,a.kt)("inlineCode",{parentName:"li"},"/home/<youruser>/.conf/SuperCollider/startup.scd")),(0,a.kt)("li",{parentName:"ul"},"Windows: ",(0,a.kt)("inlineCode",{parentName:"li"},"C:\\Users\\<youruser>\\AppData\\Local\\SuperCollider\\startup.scd")),(0,a.kt)("li",{parentName:"ul"},"OSX:     ",(0,a.kt)("inlineCode",{parentName:"li"},"/Users/<youruser>/Library/Application Support/SuperCollider/startup.scd"))),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"Load the ",(0,a.kt)("inlineCode",{parentName:"li"},"mi-ugens.scd")," synthdef in ",(0,a.kt)("inlineCode",{parentName:"li"},"startup.scd"),". Use the full path from ",(0,a.kt)("strong",{parentName:"li"},"3."))),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"NOTE FOR WINDOWS USERS: you must use double backslashes for the ",(0,a.kt)("inlineCode",{parentName:"em"},"load()")," path in startup.scd, eg ",(0,a.kt)("inlineCode",{parentName:"em"},'load("C:\\\\Users\\\\<youruser>\\...");'))),(0,a.kt)("p",null,"After:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"...\n  ~dirt = SuperDirt(2, s);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'  // load mi-ugens.scd synthdefs\n  load("FULL_PATH_TO_mi-ugens.scd");\n  // end load mi-ugens.scd synthdefs\n')),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},"Configure ",(0,a.kt)("inlineCode",{parentName:"li"},"verb")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"clouds")," as ",(0,a.kt)("strong",{parentName:"li"},"Global Effects"),". Add the following stanza as indicated to your ",(0,a.kt)("inlineCode",{parentName:"li"},"startup.scd"),":")),(0,a.kt)("p",null,"After:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"...\n            ~d10 = ~dirt.orbits[9]; ~d11 = ~dirt.orbits[10]; ~d12 = ~dirt.orbits[11];\n        );\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"        // define global effects for mutable instruments effects\n        ~dirt.orbits.do { |x|\n            var clouds = GlobalDirtEffect(\\global_mi_clouds, [\\cloudspitch, \\cloudspos, \\cloudssize, \\cloudsdens, \\cloudstex, \\cloudswet, \\cloudsgain, \\cloudsspread, \\cloudsrvb, \\cloudsfb, \\cloudsfreeze, \\cloudsmode, \\cloudslofi]);\n            var verb = GlobalDirtEffect(\\global_mi_verb, [\\verbwet, \\verbtime, \\verbdamp, \\verbhp, \\verbfreeze, \\verbdiff, \\verbgain]);\n            x.globalEffects = x.globalEffects\n              .addFirst(clouds)\n              .addFirst(verb); \n            x.initNodeTree;    \n        };                     \n        // end define global effects for mutable instruments effects\n")),(0,a.kt)("ol",{start:8},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Save your ",(0,a.kt)("inlineCode",{parentName:"p"},"startup.scd")," and exit")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You can choose to import the ",(0,a.kt)("inlineCode",{parentName:"p"},"mi-ugens-params.hs")," parameter definitions manually in your tidal session, or add the following line to the ",(0,a.kt)("inlineCode",{parentName:"p"},"BootTidal.hs")," file associated with your editor of choice (locating the correct ",(0,a.kt)("inlineCode",{parentName:"p"},"BootTidal.hs")," is beyond the scope of this reference)"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'        ...\n        :script "FULL_PATH_TO_mi-ugens-params.hs"\n        :set prompt (.*$)\n        ...\n')),(0,a.kt)("ol",{start:10},(0,a.kt)("li",{parentName:"ol"},"Start/restart SuperCollider")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"OSX Users Note: you may see a security dialog disallowing the ugens to run. Please see ",(0,a.kt)("a",{parentName:"strong",href:"https://club.tidalcycles.org/t/mutable-instruments-ugens/2730/106"},"this post by @oscd")," for workarounds/fixes")),(0,a.kt)("h2",{id:"synth-reference"},"Synth Reference"),(0,a.kt)("h3",{id:"omi"},"omi"),(0,a.kt)("p",null,"Description: todo"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"param"),(0,a.kt)("li",{parentName:"ul"},"param"),(0,a.kt)("li",{parentName:"ul"},"param")),(0,a.kt)("h3",{id:"plaits"},"plaits"),(0,a.kt)("p",null,"Description: todo"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"param"),(0,a.kt)("li",{parentName:"ul"},"param"),(0,a.kt)("li",{parentName:"ul"},"param")),(0,a.kt)("h3",{id:"braids"},"braids"),(0,a.kt)("p",null,"Description: todo"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"param"),(0,a.kt)("li",{parentName:"ul"},"param"),(0,a.kt)("li",{parentName:"ul"},"param")),(0,a.kt)("h2",{id:"effects-global"},"Effects (Global)"),(0,a.kt)("h3",{id:"verb"},"verb"),(0,a.kt)("p",null,"Description: todo"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"param"),(0,a.kt)("li",{parentName:"ul"},"param"),(0,a.kt)("li",{parentName:"ul"},"param")),(0,a.kt)("h3",{id:"clouds"},"clouds"),(0,a.kt)("p",null,"Description: todo"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"param"),(0,a.kt)("li",{parentName:"ul"},"param"),(0,a.kt)("li",{parentName:"ul"},"param")),(0,a.kt)("h3",{id:"etc"},"etc"))}m.isMDXComponent=!0}}]);