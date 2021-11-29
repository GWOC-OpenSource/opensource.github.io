"use strict";(self.webpackChunkgwoc_open_source=self.webpackChunkgwoc_open_source||[]).push([[1445],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(f,r(r({ref:t},p),{},{components:n})):a.createElement(f,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1950:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],l={sidebar_position:99},s="Swift",c={unversionedId:"Popular_Projects/6.98_Swift",id:"Popular_Projects/6.98_Swift",isDocsHomePage:!1,title:"Swift",description:"Introduction",source:"@site/docs/Popular_Projects/6.98_Swift.md",sourceDirName:"Popular_Projects",slug:"/Popular_Projects/6.98_Swift",permalink:"/docs/Popular_Projects/6.98_Swift",tags:[],version:"current",sidebarPosition:99,frontMatter:{sidebar_position:99},sidebar:"tutorialSidebar",previous:{title:"Nextcloud",permalink:"/docs/Popular_Projects/6.97_Nextcloud"},next:{title:"TypeScript",permalink:"/docs/Popular_Projects/6.99_Typescript"}},p=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Features",id:"features",children:[],level:2},{value:"Standard Library",id:"standard-library",children:[],level:2},{value:"Swift Toolchains",id:"swift-toolchains",children:[{value:"Building",id:"building",children:[],level:3},{value:"Installing into Xcode",id:"installing-into-xcode",children:[],level:3}],level:2},{value:"Packages",id:"packages",children:[{value:"<strong>Swift-DocC</strong>",id:"swift-docc",children:[],level:3}],level:2},{value:"Tools",id:"tools",children:[{value:"<strong>Swift Package Manager</strong>",id:"swift-package-manager",children:[],level:3}],level:2},{value:"Migration Guidelines",id:"migration-guidelines",children:[{value:"<em>See Also</em> :",id:"see-also-",children:[],level:3}],level:2}],d={toc:p};function u(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"swift"},"Swift"),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"https://photos5.appleinsider.com/archive/gallery/13166-7654-9e83df6d3263322a35592263a22bc0d8b54d1483_large_2x-l.jpg",height:"250",width:"500"})),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Swift is a general-purpose, multi-paradigm, compiled programming language developed by ",(0,o.kt)("inlineCode",{parentName:"p"},"Apple Inc.")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"open-source community"),". Swift was developed as a replacement for Apple's earlier programming language Objective-C, as Objective-C had been largely unchanged since the early 1980s and lacked modern language features. "),(0,o.kt)("p",null,"A key aspect of Swift's design was the ability to interoperate with the huge body of existing Objective-C code developed for Apple products over the previous decades. It is built with the open source LLVM compiler framework and has been included in Xcode since version 6, released in 2014. On Apple platforms, it uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"Objective-C runtime library"),", which allows ",(0,o.kt)("inlineCode",{parentName:"p"},"C"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Objective-C"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"C++")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Swift")," code to run within one program."),(0,o.kt)("p",null,"Although inspired by Objective-C and many other languages, Swift is not itself a C-derived language. As a complete and independent language, Swift packages core features like flow control, data structures, and functions, with high-level constructs like objects, protocols, closures, and generics. Swift embraces modules, eliminating the need for headers and the code duplication they entail."),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Closure support"),(0,o.kt)("li",{parentName:"ul"},"String support"),(0,o.kt)("li",{parentName:"ul"},"Access control"),(0,o.kt)("li",{parentName:"ul"},"Optionals and chaining"),(0,o.kt)("li",{parentName:"ul"},"Value types"),(0,o.kt)("li",{parentName:"ul"},"Protocol-oriented programming"),(0,o.kt)("li",{parentName:"ul"},"Libraries, runtime and development"),(0,o.kt)("li",{parentName:"ul"},"Memory management"),(0,o.kt)("li",{parentName:"ul"},"Debugging and other elements"),(0,o.kt)("li",{parentName:"ul"},"Performance")),(0,o.kt)("h2",{id:"standard-library"},"Standard Library"),(0,o.kt)("p",null,"Documentation for the standard library is presently hosted on the Apple Developer website. The Swift standard library defines a base layer of functionality for writing Swift programs, including:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fundamental data types such as ",(0,o.kt)("em",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"em"},"Int")),", ",(0,o.kt)("em",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"em"},"Double")),", and ",(0,o.kt)("em",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"em"},"String")),"."),(0,o.kt)("li",{parentName:"ul"},"Common data structures such as ",(0,o.kt)("em",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"em"},"Array")),", ",(0,o.kt)("em",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"em"},"Dictionary")),", and ",(0,o.kt)("em",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"em"},"Set")),"."),(0,o.kt)("li",{parentName:"ul"},"Global functions such as ",(0,o.kt)("em",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"em"},"print(:separator:terminator:)"))," and ",(0,o.kt)("em",{parentName:"li"},"`abs("),":)`_."),(0,o.kt)("li",{parentName:"ul"},"Protocols, such as ",(0,o.kt)("em",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"em"},"Collection"))," and ",(0,o.kt)("em",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"em"},"Equatable")),", that describe common abstractions."),(0,o.kt)("li",{parentName:"ul"},"Protocols, such as ",(0,o.kt)("em",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"em"},"CustomDebugStringConvertible"))," and ",(0,o.kt)("em",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"em"},"CustomReflectable")),", that you use to customize operations that are available to all types."),(0,o.kt)("li",{parentName:"ul"},"Protocols, such as ",(0,o.kt)("em",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"em"},"OptionSet")),", that you use to provide implementations that would otherwise require boilerplate code.")),(0,o.kt)("h2",{id:"swift-toolchains"},"Swift Toolchains"),(0,o.kt)("h3",{id:"building"},"Building"),(0,o.kt)("p",null,"Swift toolchains are created using the script\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apple/swift/blob/main/utils/build-toolchain"},"build-toolchain"),". This\nscript is used by swift.org's CI to produce snapshots and can allow for one to\nlocally reproduce such builds for development or distribution purposes. A typical\ninvocation looks like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  $ ./swift/utils/build-toolchain $BUNDLE_PREFIX\n")),(0,o.kt)("p",null,"where ",(0,o.kt)("inlineCode",{parentName:"p"},"$BUNDLE_PREFIX")," is a string that will be prepended to the build\ndate to give the bundle identifier of the toolchain's ",(0,o.kt)("inlineCode",{parentName:"p"},"Info.plist"),". For\ninstance, if ",(0,o.kt)("inlineCode",{parentName:"p"},"$BUNDLE_PREFIX")," was ",(0,o.kt)("inlineCode",{parentName:"p"},"com.example"),", the toolchain\nproduced will have the bundle identifier ",(0,o.kt)("inlineCode",{parentName:"p"},"com.example.YYYYMMDD"),". It\nwill be created in the directory you run the script with a filename\nof the form: ",(0,o.kt)("inlineCode",{parentName:"p"},"swift-LOCAL-YYYY-MM-DD-a-osx.tar.gz"),"."),(0,o.kt)("p",null,"Beyond building the toolchain, ",(0,o.kt)("inlineCode",{parentName:"p"},"build-toolchain")," also supports the\nfollowing (non-exhaustive) set of useful options::"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--dry-run"),": Perform a dry run build. This is off by default."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--test"),": Test the toolchain after it has been compiled. This is off by default."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--distcc"),": Use distcc to speed up the build by distributing the c++ part of\nthe swift build. This is off by default."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--sccache"),": Use sccache to speed up subsequent builds of the compiler by\ncaching more c++ build artifacts. This is off by default.")),(0,o.kt)("p",null,"More options may be added over time. Please pass ",(0,o.kt)("inlineCode",{parentName:"p"},"--help")," to\n",(0,o.kt)("inlineCode",{parentName:"p"},"build-toolchain")," to see the full set of options."),(0,o.kt)("h3",{id:"installing-into-xcode"},"Installing into Xcode"),(0,o.kt)("p",null,"On macOS if one wants to install such a toolchain into Xcode:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Untar and copy the toolchain to one of ",(0,o.kt)("inlineCode",{parentName:"p"},"/Library/Developer/Toolchains/")," or\n",(0,o.kt)("inlineCode",{parentName:"p"},"~/Library/Developer/Toolchains/"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Example :")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  $ sudo tar -xzf swift-LOCAL-YYYY-MM-DD-a-osx.tar.gz -C /\n  $ tar -xzf swift-LOCAL-YYYY-MM-DD-a-osx.tar.gz -C ~/\n")),(0,o.kt)("p",null,"The script also generates an archive containing debug symbols which\ncan be installed over the main archive allowing symbolication of any\ncompiler crashes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  $ sudo tar -xzf swift-LOCAL-YYYY-MM-DD-a-osx-symbols.tar.gz -C /\n  $ tar -xzf swift-LOCAL-YYYY-MM-DD-a-osx-symbols.tar.gz -C ~/\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Specify the local toolchain for Xcode's use via ",(0,o.kt)("inlineCode",{parentName:"li"},"Xcode->Toolchains"),".")),(0,o.kt)("h2",{id:"packages"},"Packages"),(0,o.kt)("p",null,"There are a number of packages that are part of the core Swift project. One of them is:"),(0,o.kt)("h3",{id:"swift-docc"},(0,o.kt)("strong",{parentName:"h3"},"Swift-DocC")),(0,o.kt)("p",null,"DocC is a documentation compiler that makes it easy for you to produce documentation for your Swift frameworks and packages. The compiler builds your documentation by combining the comments you write in source with extension files, articles, and tutorials that live alongside your package\u2019s source code. This documentation is for using the DocC tool to generate documentation for your project.\nDocC syntax \u2014 called documentation markup \u2014 is a custom variant of Markdown that adds functionality for developer-specific documentation features, like cross-symbol linking, term-definition lists, code listings, and asides. You add documentation markup to your source code, compile it with DocC, and produce reference documentation for your APIs. You can also use documentation markup, along with a set of directives that instruct how DocC generates your content, to offer step-by-step tutorials that teach developers to use your APIs through interactive coding exercises."),(0,o.kt)("h2",{id:"tools"},"Tools"),(0,o.kt)("h3",{id:"swift-package-manager"},(0,o.kt)("strong",{parentName:"h3"},"Swift Package Manager")),(0,o.kt)("p",null,"The Swift Package Manager is a tool for managing the distribution and use of \u201cpackages\u201d of Swift code. It\u2019s integrated with the Swift build system to automate the process of downloading, compiling, and linking dependencies into target products."),(0,o.kt)("p",null,"The basic concepts that motivate the functionality of the Swift Package Manager:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Modules"),"\nSwift organizes code into modules. Each module specifies a namespace and enforces access controls on which parts of that code can be used outside of the module\nA program may have all of its code in a single module, or it may import other modules as ",(0,o.kt)("em",{parentName:"li"},"dependencies"),". Aside from the handful of system-provided modules, such as Darwin on macOS or Glibc on Linux, most dependencies require code to be downloaded and built in order to be used."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Packages"),"\nA package consists of Swift source files and a manifest file. The manifest file, called ",(0,o.kt)("inlineCode",{parentName:"li"},"Package.swift"),", defines the package\u2019s name and its contents using the ",(0,o.kt)("inlineCode",{parentName:"li"},"PackageDescription")," module\nA package has one or more targets. Each target specifies a product and may declare one or more dependencies."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Products"),"\nA target may build either a library or an executable as its product. A library contains a module that can be imported by other Swift code. An executable is a program that can be run by the operating system."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Dependencies"),"\nA target\u2019s dependencies are modules that are required by code in the package. A dependency consists of a relative or absolute URL to the source of the package and a set of requirements for the version of the package that can be used\nThe role of the package manager is to reduce coordination costs by automating the process of downloading and building all of the dependencies for a project.")),(0,o.kt)("h2",{id:"migration-guidelines"},"Migration Guidelines"),(0,o.kt)("p",null,"For users of Xcode, there is an included Swift migrator tool that helps you move your project to the latest version of Swift, or update it to work with the latest SDKs."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://swift.org/migration-guide-swift5/"},"Migrating to Swift 5")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://swift.org/migration-guide-swift4.2/"},"Migrating to Swift 4.2"))),(0,o.kt)("h3",{id:"see-also-"},(0,o.kt)("em",{parentName:"h3"},"See Also")," :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For installation on Windows , Linux and Apple Platforms refer this ",(0,o.kt)("a",{parentName:"li",href:"https://swift.org/getting-started/#installing-swift"},"link"),"."),(0,o.kt)("li",{parentName:"ul"},"For downloading the latest version of Swift, click on this ",(0,o.kt)("a",{parentName:"li",href:"https://swift.org/download/"},"link"),"."),(0,o.kt)("li",{parentName:"ul"},"For documentation , visit ",(0,o.kt)("a",{parentName:"li",href:"https://swift.org/documentation/"},"https://swift.org/documentation/"),"."),(0,o.kt)("li",{parentName:"ul"},"For more information , visit the official ",(0,o.kt)("a",{parentName:"li",href:"https://swift.org/"},"website"),".")))}u.isMDXComponent=!0}}]);