"use strict";(self.webpackChunkgwoc_open_source=self.webpackChunkgwoc_open_source||[]).push([[9956],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6265:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={sidebar_position:63},u="HTTPie",s={unversionedId:"Popular_Projects/6.62_httpie",id:"Popular_Projects/6.62_httpie",isDocsHomePage:!1,title:"HTTPie",description:"HTTPie is a command-line HTTP client, which is used to make CLI interaction with web services with easy command line interaction.",source:"@site/docs/Popular_Projects/6.62_httpie.md",sourceDirName:"Popular_Projects",slug:"/Popular_Projects/6.62_httpie",permalink:"/docs/Popular_Projects/6.62_httpie",tags:[],version:"current",sidebarPosition:63,frontMatter:{sidebar_position:63},sidebar:"tutorialSidebar",previous:{title:"Youtube-dl",permalink:"/docs/Popular_Projects/6.61_youtube-dl"},next:{title:"Tornado",permalink:"/docs/Popular_Projects/6.63_tornado"}},p=[],c={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"httpie"},"HTTPie"),(0,a.kt)("p",null,"HTTPie is a command-line HTTP client, which is used to make CLI interaction with web services with easy command line interaction.\nIt is written in Python\nand is basically designed for testing, debugging, interacting with APIs & HTTP servers.\n",(0,a.kt)("inlineCode",{parentName:"p"},"http")," & ",(0,a.kt)("inlineCode",{parentName:"p"},"https")," are used to create and send arbitrary HTTP requests.\nGenerally, its syntax is user friendly."),(0,a.kt)("p",null,"Its main feature are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Expressive and intuitive syntax"),(0,a.kt)("li",{parentName:"ul"},"Formatted and colorized terminal output"),(0,a.kt)("li",{parentName:"ul"},"Built-in JSON support"),(0,a.kt)("li",{parentName:"ul"},"Forms and file uploads"),(0,a.kt)("li",{parentName:"ul"},"HTTPS, proxies, and authentication"),(0,a.kt)("li",{parentName:"ul"},"Arbitrary request data"),(0,a.kt)("li",{parentName:"ul"},"Custom headers"),(0,a.kt)("li",{parentName:"ul"},"Persistent sessions"),(0,a.kt)("li",{parentName:"ul"},"Wget-like downloads"),(0,a.kt)("li",{parentName:"ul"},"Linux, macOS, Windows, and FreeBSD support"),(0,a.kt)("li",{parentName:"ul"},"Plugins"),(0,a.kt)("li",{parentName:"ul"},"Documentation"),(0,a.kt)("li",{parentName:"ul"},"Test coverage")),(0,a.kt)("p",null,"Linux distributions provide a HTTPie package and can be easily installed using the following cmd:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# apt-get install httpie  (Debian/Ubuntu)\n# dnf install httpie      (Fedora)\n# yum install httpie      (RHEL)\n")),(0,a.kt)("p",null,"syntax for using httpie:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$ http [options] [METHOD] URL [ITEM [ITEM]]")),(0,a.kt)("p",null,"That was all about HTTPie"))}d.isMDXComponent=!0}}]);