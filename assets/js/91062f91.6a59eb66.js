"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7417],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,i=new Array(l);i[0]=m;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[d]="string"==typeof e?e:o,i[1]=a;for(var c=2;c<l;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3468:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const l={},i=void 0,a={unversionedId:"leetcode/algorithms-js/3sliding window",id:"leetcode/algorithms-js/3sliding window",title:"3sliding window",description:"\u4ecb\u7ecd",source:"@site/docs/leetcode/algorithms-js/3sliding window.md",sourceDirName:"leetcode/algorithms-js",slug:"/leetcode/algorithms-js/3sliding window",permalink:"/coder/docs/leetcode/algorithms-js/3sliding window",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/leetcode/algorithms-js/3sliding window.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"2binary search",permalink:"/coder/docs/leetcode/algorithms-js/2binary search"},next:{title:"4recursion",permalink:"/coder/docs/leetcode/algorithms-js/4recursion"}},s={},c=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u7279\u70b9",id:"\u7279\u70b9",level:2},{value:"\u57fa\u672c\u65b9\u6cd5\u7684\u65f6\u95f4\u590d\u6742\u5ea6\uff08\u5206\u6790\u7b97\u6cd5\u4f18\u52a3\uff09",id:"\u57fa\u672c\u65b9\u6cd5\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u5206\u6790\u7b97\u6cd5\u4f18\u52a3",level:2},{value:"\u7ec3\u4e60\u9898",id:"\u7ec3\u4e60\u9898",level:2}],u={toc:c},d="wrapper";function p(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,o.kt)("p",null,"\u6ed1\u52a8\u7a97\u53e3\uff1a\u53ef\u4ee5\u89e3\u51b3\u6570\u7ec4\u4e2d\u7684\u5b9a\u957f\u95ee\u9898\uff0c\u5982\u957f\u5ea6\u4e3a3\u7684\u548c\u3002"),(0,o.kt)("h2",{id:"\u7279\u70b9"},"\u7279\u70b9"),(0,o.kt)("p",null,"\u76ee\u7684\u662f\u51cf\u5c11while\u5faa\u73af"),(0,o.kt)("h2",{id:"\u57fa\u672c\u65b9\u6cd5\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u5206\u6790\u7b97\u6cd5\u4f18\u52a3"},"\u57fa\u672c\u65b9\u6cd5\u7684\u65f6\u95f4\u590d\u6742\u5ea6\uff08\u5206\u6790\u7b97\u6cd5\u4f18\u52a3\uff09"),(0,o.kt)("p",null,"O(N)"),(0,o.kt)("h2",{id:"\u7ec3\u4e60\u9898"},"\u7ec3\u4e60\u9898"),(0,o.kt)("p",null,"209\u957f\u5ea6\u6700\u5c0f\u7684\u5b50\u6570\u7ec4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"}," \nvar minSubArrayLen = function(target, nums) {\n    // \u957f\u5ea6\u8ba1\u7b97\u4e00\u6b21\n    \n   const len = nums.length;\n    if (len == 0 && nums == null) return 0;\n    let l = r = total = 0,\n        res = len + 1; // \u5b50\u6570\u7ec4\u957f\u5ea6\u6700\u5927\u4e0d\u4f1a\u8d85\u8fc7\u81ea\u8eab\n        \n    while(r < len) {\n        total += nums[r];//\u957f\u5ea6\u548c\n        r+=1;\n        // \u7a97\u53e3\u6ed1\u52a8\n        while(total >= target) {\n            // r\u59cb\u7ec8\u4e3a\u5f00\u533a\u95f4 [l, r)\n            res = Math.min(res,r-l);\n            total-=nums[l];\n             l+=1;\n        }\n    }\n    return res > len ? 0 : res;\n};\n\u65f6\u95f4\u590d\u6742\u5ea6\uff1aO(n)\n\u7a7a\u95f4\u590d\u6742\u5ea6\uff1aO(1)\n\u4e00\u4e9b\u5f55\u53cb\u4f1a\u7591\u60d1\u4e3a\u4ec0\u4e48\u65f6\u95f4\u590d\u6742\u5ea6\u662fO(n)\u3002\n\n\u4e0d\u8981\u4ee5\u4e3afor\u91cc\u653e\u4e00\u4e2awhile\u5c31\u4ee5\u4e3a\u662fO(n^2)\u554a\uff0c \u4e3b\u8981\u662f\u770b\u6bcf\u4e00\u4e2a\u5143\u7d20\u88ab\u64cd\u4f5c\u7684\u6b21\u6570\uff0c\u6bcf\u4e2a\u5143\u7d20\u5728\u6ed1\u52a8\u7a97\u540e\u8fdb\u6765\u64cd\u4f5c\u4e00\u6b21\uff0c\u51fa\u53bb\u64cd\u4f5c\u4e00\u6b21\uff0c\u6bcf\u4e2a\u5143\u7d20\u90fd\u662f\u88ab\u64cd\u4f5c\u4e24\u6b21\uff0c\u6240\u4ee5\u65f6\u95f4\u590d\u6742\u5ea6\u662f 2 \xd7 n \u4e5f\u5c31\u662fO(n)\u3002\n\n\u4f5c\u8005\uff1a\u4ee3\u7801\u968f\u60f3\u5f55\n\u94fe\u63a5\uff1ahttps://leetcode.cn/problems/minimum-size-subarray-sum/solutions/1706223/by-carlsun-2-iiee/\n\u6765\u6e90\uff1a\u529b\u6263\uff08LeetCode\uff09\n\u8457\u4f5c\u6743\u5f52\u4f5c\u8005\u6240\u6709\u3002\u5546\u4e1a\u8f6c\u8f7d\u8bf7\u8054\u7cfb\u4f5c\u8005\u83b7\u5f97\u6388\u6743\uff0c\u975e\u5546\u4e1a\u8f6c\u8f7d\u8bf7\u6ce8\u660e\u51fa\u5904\u3002\n\u4f5c\u8005\uff1a\u4ee3\u7801\u968f\u60f3\u5f55\n\u94fe\u63a5\uff1ahttps://leetcode.cn/problems/minimum-size-subarray-res/solutions/1706223/by-carlsun-2-iiee/\n\u6765\u6e90\uff1a\u529b\u6263\uff08LeetCode\uff09\n\u8457\u4f5c\u6743\u5f52\u4f5c\u8005\u6240\u6709\u3002\u5546\u4e1a\u8f6c\u8f7d\u8bf7\u8054\u7cfb\u4f5c\u8005\u83b7\u5f97\u6388\u6743\uff0c\u975e\u5546\u4e1a\u8f6c\u8f7d\u8bf7\u6ce8\u660e\u51fa\u5904\u3002\n")),(0,o.kt)("p",null,"1456\u5b9a\u957f\u5b50\u4e32\u4e2d\u5143\u97f3\u7684\u6700\u5927\u6570\u76ee"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"}," \n")))}p.isMDXComponent=!0}}]);