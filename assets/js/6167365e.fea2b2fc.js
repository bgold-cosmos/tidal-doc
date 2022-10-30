(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{121:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),o=(n(0),n(219)),l={title:"Control Voltage/CV",id:"control-voltage",permalink:"wiki/CV/",layout:"wiki"},c={unversionedId:"configuration/MIDIOSC/control-voltage",id:"configuration/MIDIOSC/control-voltage",isDocsHomePage:!1,title:"Control Voltage/CV",description:"Tidal can send control voltage to modular synthesizers when using audio cards with DC output. A collection of CV helpers for Tidal is published in the SuperDirt Voltage library.",source:"@site/docs/configuration/MIDIOSC/Control_Voltage.md",slug:"/configuration/MIDIOSC/control-voltage",permalink:"/docs/configuration/MIDIOSC/control-voltage",editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/configuration/MIDIOSC/Control_Voltage.md",version:"current",lastUpdatedBy:"Omar Mashaal",lastUpdatedAt:1625274122,sidebar:"docs",previous:{title:"DAW",permalink:"/docs/configuration/MIDIOSC/connecting_to_a_daw"},next:{title:"Custom Samples",permalink:"/docs/configuration/Audio Samples/audiosamples"}},i=[{value:"SuperDirt Voltage",id:"superdirt-voltage",children:[{value:"Pitch, with scale quantisation",id:"pitch-with-scale-quantisation",children:[]},{value:"Gate",id:"gate",children:[]},{value:"Voltage automation",id:"voltage-automation",children:[]},{value:"AR (Attack + Release)",id:"ar-attack--release",children:[]},{value:"Clock",id:"clock",children:[]}]}],p={toc:i};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Tidal can send control voltage to modular synthesizers when using audio cards with DC output. A collection of CV helpers for Tidal is published in the SuperDirt Voltage library."),Object(o.b)("h2",{id:"superdirt-voltage"},Object(o.b)("a",{parentName:"h2",href:"https://github.com/mashaal/superdirt-voltage"},"SuperDirt Voltage")),Object(o.b)("h3",{id:"pitch-with-scale-quantisation"},"Pitch, with scale quantisation"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-haskell"},'-- change notes per octave on each cycle\nd1 $ pitch "0 10 8 1" # scale "<12 31 8>" # x 0\n')),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"pitch")," allows a pattern of note values. ",Object(o.b)("inlineCode",{parentName:"p"},"scale")," sets the amount of notes per octave. The pitch and scale values will be converted to ",Object(o.b)("inlineCode",{parentName:"p"},"1v/octave"),". Both ",Object(o.b)("inlineCode",{parentName:"p"},"pitch")," and ",Object(o.b)("inlineCode",{parentName:"p"},"scale")," can be sequenced for some microtonal madness..."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"glide")," accepts a strengh (in semitones, relative to scale), a rate (in step length)."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-haskell"},'-- glide to pitch\nd1 $ pitch "0 10 8 1" # scale "<12 31 8>" # x 0 # glide 12 0.5\n')),Object(o.b)("h3",{id:"gate"},"Gate"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-haskell"},'-- sequence gate inputs\nd2 $ gate "0 1 0 0 1 1 1" # x 1\n')),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"gate")," will take a 0/1 pattern and return +5v signals for the ",Object(o.b)("inlineCode",{parentName:"p"},"1")," values. Use ",Object(o.b)("inlineCode",{parentName:"p"},"-1")," if you need a -5v."),Object(o.b)("h3",{id:"voltage-automation"},"Voltage automation"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-haskell"},'-- create stepped automation\nd3 $ volt "1 0.2 0.5 -0.2" # x 2\n')),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"volt")," will allow you to sequence voltages however you like."),Object(o.b)("h3",{id:"ar-attack--release"},"AR (Attack + Release)"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-haskell"},'-- create ar\nd4 $ trig "1 ~ 1 1" # ar 0 0.5 # x 3\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-haskell"},'-- patternise adsr\nd5 $ trig "1 ~ 1 1" # ar (range 0.1 1 sine) "<0 0.4>" # x 4\n')),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"trig")," will create a trigger sequence, ",Object(o.b)("inlineCode",{parentName:"p"},"ar")," will generate a new envelope for each trigger. Both of these can be sequenced."),Object(o.b)("p",null,"In the second example, the attack time would grow for each triggered envelope over course of the cycle."),Object(o.b)("h3",{id:"clock"},"Clock"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-haskell"},"-- clock cv output\nd6 $ clock # x 5\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"clock")," will output a clock cv, which matches the bpm of your tidal project. You can ",Object(o.b)("inlineCode",{parentName:"p"},"slow")," / ",Object(o.b)("inlineCode",{parentName:"p"},"fast")," this as well."))}s.isMDXComponent=!0},219:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return g}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),b=a,g=u["".concat(l,".").concat(b)]||u[b]||d[b]||o;return n?r.a.createElement(g,c(c({ref:t},p),{},{components:n})):r.a.createElement(g,c({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var p=2;p<o;p++)l[p]=n[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);