"use strict";(self.webpackChunkgwoc_open_source=self.webpackChunkgwoc_open_source||[]).push([[7221],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return m}});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=i,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return t?n.createElement(f,o(o({ref:r},c),{},{components:t})):n.createElement(f,o({ref:r},c))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},258:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var n=t(7462),i=t(3366),a=(t(7294),t(3905)),o=["components"],s={sidebar_position:101},l="Marlin",p={unversionedId:"Popular_Projects/6.100_Marlin",id:"Popular_Projects/6.100_Marlin",isDocsHomePage:!1,title:"Marlin",description:"Marlin is open source firmware primarily designed for RepRap project based FDM (fused deposition modelling) 3D-printers using the Arduino platform.",source:"@site/docs/Popular_Projects/6.100_Marlin.md",sourceDirName:"Popular_Projects",slug:"/Popular_Projects/6.100_Marlin",permalink:"/docs/Popular_Projects/6.100_Marlin",tags:[],version:"current",sidebarPosition:101,frontMatter:{sidebar_position:101},sidebar:"tutorialSidebar",previous:{title:"TypeScript",permalink:"/docs/Popular_Projects/6.99_Typescript"},next:{title:"Express",permalink:"/docs/Popular_Projects/6.101_express"}},c=[{value:"Marlin",id:"marlin-1",children:[],level:2},{value:"Is RepRap the same as Marlin?",id:"is-reprap-the-same-as-marlin",children:[],level:2},{value:"What is RepRap firmware?",id:"what-is-reprap-firmware",children:[],level:2}],u={toc:c};function d(e){var r=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"marlin"},"Marlin"),(0,a.kt)("p",null,"Marlin is open source firmware primarily designed for RepRap project based FDM (fused deposition modelling) 3D-printers using the Arduino platform."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLjDp6Lj92hRCSkl51KGfCUCwu7EFkVfQctzz5_9PIvU2fdWFhAOcOXCd3INVjQuau-wo&usqp=CAU",alt:"Image"})),(0,a.kt)("p",null,"The firmware runs G-code formatted coded commands and instruction sets as robot software on the 3D printer's control board which manages all of the machine's\nreal-time activities including sending movement coordinates to stepper motors through the stepper drivers, controlling heater elements, sensors, lights, tracking bed levelling, LC displays and buttons.","[4]"," Marlin supports many different boards and many designs of 3D printer robot platforms,  including Cartesian (including Core XY), Delta and SCARA printers, as well as some other less conventional designs like Hangprinter."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://marlinfw.org/assets/images/basics/what_is_marlin.png",alt:"Image"})),(0,a.kt)("h2",{id:"marlin-1"},"Marlin"),(0,a.kt)("p",null,"was first created in 2011 for the RepRap and Ultimaker printers; it is used today by many, if not most, relatively inexpensive 3D-printers for plastic-based\nFused filament fabrication (also known as fused deposition modelling) and claims to be the most widely used 3D printing firmware in the world.","[2]"," With perhaps the most\nfamous or infamous products/brands using the Marlin firmware (or forks of the Marlin firmware) being;\nUltimaker, LulzBot by Aleph Objects, Original Prusa i3 by Prusa Research, plus the various Ender and CR series by Creality."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Y1I9PD7iyMoOmWFn4NtejA6PR16dizqPszneoaDFd7-ccD32QbOMuCuv1tOTTQeTzT4&usqp=CAU",alt:"Image"})),(0,a.kt)("h2",{id:"is-reprap-the-same-as-marlin"},"Is RepRap the same as Marlin?"),(0,a.kt)("p",null,"Marlin is firmware for RepRap single-processor electronics, supporting RAMPS, RAMBo, Ultimaker, BQ, and several other Arduino-based 3D printers.\nIt supports printing over USB or from SD cards with folders, and uses lookahead trajectory planning. Marlin is licensed under the GNU GPL v3 or later."),(0,a.kt)("h2",{id:"what-is-reprap-firmware"},"What is RepRap firmware?"),(0,a.kt)("p",null,"RepRapFirmware is a comprehensive motion control firmware intended primarily for controlling 3D printers, but with applications in laser engraving/cutting and CNC too.\nUnlike most other 3D printer firmwares, it is targeted only at modern 32-bit processors, not outdated 8-bit processors with limited CPU power."))}d.isMDXComponent=!0}}]);