(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(208)),l={title:"Controller Input",permalink:"wiki/Controller_Input/",layout:"wiki",tags:["Reference","Tidal-1+"]},c={unversionedId:"working-with-patterns/Controller_Input",id:"working-with-patterns/Controller_Input",isDocsHomePage:!1,title:"Controller Input",description:"Tidal 1.0.0 now has support for external input, using the OSC protocol.",source:"@site/docs/working-with-patterns/Controller_Input.md",slug:"/working-with-patterns/Controller_Input",permalink:"/docs/working-with-patterns/Controller_Input",editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/working-with-patterns/Controller_Input.md",version:"current",lastUpdatedBy:"Koji Ishimoto",lastUpdatedAt:1615136026},i=[{value:"Alternative: pure-data",id:"alternative-pure-data",children:[]}],u={toc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("languages",null)," ",Object(o.b)("translate",null,Object(o.b)("p",null,"Tidal 1.0.0 now has support for external input, using the OSC protocol.\nHere's a quick guide to getting it going, including using a simple\n'bridge' for getting MIDI input working."),Object(o.b)("h1",{id:"open-sound-control"},"Open Sound Control"),Object(o.b)("p",null,"If you just want to get MIDI input into tidal, you can skip to the ",Object(o.b)("a",{parentName:"p",href:"/wiki/Controller_Input#MIDI",title:"wikilink"},"next\nsection"),"."),Object(o.b)("p",null,"With version 1.0.0 ",Object(o.b)("a",{parentName:"p",href:"/wiki/Installation",title:"wikilink"},"installed")," and\n",Object(o.b)("a",{parentName:"p",href:"/wiki/Configuration",title:"wikilink"},"configured"),", then by default Tidal will\nautomatically listen for external control messages over the OSC (Open\nSound Control) network protocol, on localhost (127.0.0.1), port 6010."),Object(o.b)("p",null,"This is configurable - if you prefer it to listen to for example all\nnetwork interfaces, and port 6060 you can change your configuration to\nthis:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-haskell"},'tidal <- startTidal superdirtTarget (defaultConfig {cCtrlAddr = "0.0.0.0", cCtrlPort = 6060})\n')),Object(o.b)("p",null,"If you prefer to switch off listening to controls all together, use this\ninstead:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-haskell"},"tidal <- startTidal superdirtTarget (defaultConfig {cCtrlListen = False})\n")),Object(o.b)("p",null,"The OSC message that Tidal expects has the path"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"/ctrl\n")),Object(o.b)("p",null,", and two values - the key and the value. The key can either be a string\nor an integer (tidal will convert an integer to a string for you). The\nvalue can be a string, integer or float. For example the OSC message"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"/ctrl sf hello 0.4\n")),Object(o.b)("p",null,", for a message to set the"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"hello\n")),Object(o.b)("p",null,"control to"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"0.4\n")),Object(o.b)("p",null,".In this example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"sf\n")),Object(o.b)("p",null,"is the OSC typetag. It specifies that the first value is a (s)tring and\nthe second value is a(f)loat see ",Object(o.b)("a",{parentName:"p",href:"http://opensoundcontrol.org/spec-1_0"},"OSC\nspecs")),Object(o.b)("p",null,"You could then use this control in a pattern like so:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "bd" # speed (cF 1 "hello")\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-haskell"},"cF\n")),Object(o.b)("p",null,"is what you use for floating point controls. The second parameter"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"1\n")),Object(o.b)("p",null,"is the default value, for when tidal hasn't received that control yet.\nThere is also"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-haskell"},"cS\n")),Object(o.b)("p",null,"for strings and"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-haskell"},"cI\n")),Object(o.b)("p",null,"for integers. For time values (for using e.g. as the first parameter of"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-haskell"},"fast\n")),Object(o.b)("p",null,"/"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-haskell"},"slow\n")),Object(o.b)("p",null,"), use"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-haskell"},"cT\n")),Object(o.b)("p",null,". For ratios add"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-haskell"},"cR\n")),Object(o.b)("h1",{id:"midi"},"MIDI"),Object(o.b)("p",null,"To use MIDI, you don't have to worry about too much of the above, but\nfor now you do have to run something to convert MIDI into OSC. Here's\nhow to do that using SuperCollider. First, with Tidal (e.g. inside atom)\nand SuperDirt already running, run the below code block in\nsupercollider:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'// Evaluate the block below to start the mapping MIDI -> OSC.\n(\nvar on, off, cc;\nvar osc;\n\n\x3c!--T:16--\x3e\nosc = NetAddr.new("127.0.0.1", 6010);\n\n\x3c!--T:17--\x3e\nMIDIClient.init;\nMIDIIn.connectAll;\n\n\x3c!--T:18--\x3e\non = MIDIFunc.noteOn({ |val, num, chan, src|\n    osc.sendMsg("/ctrl", num.asString, val/127);\n});\n\n\x3c!--T:19--\x3e\noff = MIDIFunc.noteOff({ |val, num, chan, src|\n    osc.sendMsg("/ctrl", num.asString, 0);\n});\n\n\x3c!--T:20--\x3e\ncc = MIDIFunc.cc({ |val, num, chan, src|\n    osc.sendMsg("/ctrl", num.asString, val/127);\n});\n\n\x3c!--T:21--\x3e\nif (~stopMidiToOsc != nil, {\n    ~stopMidiToOsc.value;\n});\n\n\x3c!--T:22--\x3e\n~stopMidiToOsc = {\n    on.free;\n    off.free;\n    cc.free;\n};\n)\n\n\x3c!--T:23--\x3e\n// Evaluate the line below to stop it.\n~stopMidiToOsc.value;\n')),Object(o.b)("p",null,"You should then be able to run a pattern such as the following, that\nuses CC value 12:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'d1 $ sound "bd" # speed (cF 1 "12")\n')),Object(o.b)("p",null,"If you want to use MIDI in a pattern forming statement, you may find it\nhelpful to ",Object(o.b)("a",{parentName:"p",href:"segment",title:"wikilink"},"segment")," the input first, as the raw\npattern coming from your MIDI device will be at very high resolution.\nThis example takes only one value per cycle & remaps the value with the"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"range\n")),Object(o.b)("p",null,"function:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'d1 $ sound "amencutup" + n (run (segment 1 $ range 1 16 $ cF 0 "32" ))\n')),Object(o.b)("h2",{id:"alternative-pure-data"},"Alternative: pure-data"),Object(o.b)("p",null,"The above SuperCollider instructions are most convenient if you're using\nSuperDirt, but as an alternative you can use puredata to convert midi to\nOSC. You can get puredata from ",Object(o.b)("a",{parentName:"p",href:"https://puredata.info/"},"https://puredata.info/")," (the 'vanilla'\nversion is recommended)."),Object(o.b)("p",null,"Then download this file:\n",Object(o.b)("a",{parentName:"p",href:"https://raw.githubusercontent.com/tidalcycles/Tidal/main/pd/midi-osc-bridge.pd"},"https://raw.githubusercontent.com/tidalcycles/Tidal/main/pd/midi-osc-bridge.pd")),Object(o.b)("p",null,"Then if you start tidal, open that file in puredata, and configure your\nMIDI device in puredata, things should start working.")))}p.isMDXComponent=!0},208:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,h=s["".concat(l,".").concat(d)]||s[d]||b[d]||o;return n?a.a.createElement(h,c(c({ref:t},u),{},{components:n})):a.a.createElement(h,c({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var u=2;u<o;u++)l[u]=n[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);