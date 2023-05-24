"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7017],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),f=o,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5121:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={},i=void 0,l={unversionedId:"leetcode/algorithms-js/9union find",id:"leetcode/algorithms-js/9union find",title:"9union find",description:"\u4ecb\u7ecd",source:"@site/docs/leetcode/algorithms-js/9union find.md",sourceDirName:"leetcode/algorithms-js",slug:"/leetcode/algorithms-js/9union find",permalink:"/coder/docs/leetcode/algorithms-js/9union find",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/leetcode/algorithms-js/9union find.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"8BFS",permalink:"/coder/docs/leetcode/algorithms-js/8BFS"},next:{title:"array",permalink:"/coder/docs/leetcode/data structures-js/array"}},c={},u=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u5e38\u7528\u6a21\u677f",id:"\u5e38\u7528\u6a21\u677f",level:2},{value:"\u57fa\u672c\u65b9\u6cd5\u7684\u65f6\u95f4\u590d\u6742\u5ea6\uff08\u5206\u6790\u7b97\u6cd5\u4f18\u52a3\uff09",id:"\u57fa\u672c\u65b9\u6cd5\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u5206\u6790\u7b97\u6cd5\u4f18\u52a3",level:2},{value:"\u7ec3\u4e60\u9898",id:"\u7ec3\u4e60\u9898",level:2}],s={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,o.kt)("p",null,"\u5e76\u67e5\u96c6\uff1aroot\u6839\u8282\u70b9\uff0c\u7ed3\u5408\u6570\u7ec4\uff0c\nunion\u65b9\u6cd5\uff1a\u5408\u5e76\u4e24\u4e2a\u5143\u7d20\u4e3a\u540c\u4e00\u4e2a\u6839\u8282\u70b9\uff1bunion(x,y)\nfind\u65b9\u6cd5\uff1a\u627e\u5230\u67d0\u5143\u7d20\u7684\u6839\u8282\u70b9,find(x)\n\u5e76\u67e5\u96c6\u4f18\u5316:1.\u6743\u91cd\u6cd5\uff1a\u6bd4\u8f83\u9ad8\u5ea6\uff0c\u9632\u6b62\u6811\u592a\u9ad8\uff0c\u628a\u77ee\u6811\u8fde\u63a5\u5230\u9ad8\u6811o(1)"),(0,o.kt)("h2",{id:"\u5e38\u7528\u6a21\u677f"},"\u5e38\u7528\u6a21\u677f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"}," //\u51b3\u5b9a\u6570\u7ec4\u7684\u957f\u5ea6\n// \u904d\u5386\u653e\u5165\u6570\u7ec4 \n// find\u51fd\u6570\n// union\u51fd\u6570\n")),(0,o.kt)("h2",{id:"\u57fa\u672c\u65b9\u6cd5\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u5206\u6790\u7b97\u6cd5\u4f18\u52a3"},"\u57fa\u672c\u65b9\u6cd5\u7684\u65f6\u95f4\u590d\u6742\u5ea6\uff08\u5206\u6790\u7b97\u6cd5\u4f18\u52a3\uff09"),(0,o.kt)("p",null,"1.\u8bbf\u95eeO(1)"),(0,o.kt)("p",null,"2.\u641c\u7d22O(N)"),(0,o.kt)("p",null,"3.\u63d2\u5165O(N)"),(0,o.kt)("p",null,"4.\u5220\u9664O(N)"),(0,o.kt)("h2",{id:"\u7ec3\u4e60\u9898"},"\u7ec3\u4e60\u9898"),(0,o.kt)("p",null,"200\n547\u670b\u53cb\u5708"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"}," \n")))}d.isMDXComponent=!0}}]);