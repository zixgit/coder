"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5409],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>v});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},o="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),o=c(n),m=a,v=o["".concat(u,".").concat(m)]||o[m]||p[m]||l;return n?r.createElement(v,i(i({ref:t},d),{},{components:n})):r.createElement(v,i({ref:t},d))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[o]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9180:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const l={},i=void 0,s={unversionedId:"leetcode/data structures-js/linked list",id:"leetcode/data structures-js/linked list",title:"linked list",description:"\u5b9a\u4e49",source:"@site/docs/leetcode/data structures-js/linked list.md",sourceDirName:"leetcode/data structures-js",slug:"/leetcode/data structures-js/linked list",permalink:"/coder/docs/leetcode/data structures-js/linked list",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/leetcode/data structures-js/linked list.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"heap",permalink:"/coder/docs/leetcode/data structures-js/heap"},next:{title:"queue",permalink:"/coder/docs/leetcode/data structures-js/queue"}},u={},c=[{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:2},{value:"\u533a\u5206",id:"\u533a\u5206",level:2},{value:"\u57fa\u672c\u65b9\u6cd5\u7684\u65f6\u95f4\u590d\u6742\u5ea6",id:"\u57fa\u672c\u65b9\u6cd5\u7684\u65f6\u95f4\u590d\u6742\u5ea6",level:2},{value:"\u7279\u70b9",id:"\u7279\u70b9",level:2},{value:"\u5e38\u7528\u64cd\u4f5c",id:"\u5e38\u7528\u64cd\u4f5c",level:2},{value:"1.\u521b\u5efa\u94fe\u8868",id:"1\u521b\u5efa\u94fe\u8868",level:3},{value:"2.\u6dfb\u52a0\u5143\u7d20",id:"2\u6dfb\u52a0\u5143\u7d20",level:3},{value:"3.\u8bbf\u95ee\u5143\u7d20",id:"3\u8bbf\u95ee\u5143\u7d20",level:3},{value:"4.\u67e5\u627e\u5143\u7d20",id:"4\u67e5\u627e\u5143\u7d20",level:3},{value:"5.\u5220\u9664\u5143\u7d20",id:"5\u5220\u9664\u5143\u7d20",level:3},{value:"6.\u94fe\u8868\u7684\u957f\u5ea6",id:"6\u94fe\u8868\u7684\u957f\u5ea6",level:3},{value:"7.\u4fee\u6539\u5143\u7d20",id:"7\u4fee\u6539\u5143\u7d20",level:3},{value:"\u7ec3\u4e60\u9898",id:"\u7ec3\u4e60\u9898",level:2}],d={toc:c},o="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(o,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,a.kt)("p",null,"javascript\u6ca1\u6709\u5185\u7f6e\u94fe\u8868\u7ed3\u6784\n\u94fe\u8868\uff1a\u4e0d\u8fde\u7eed\u7684\u5185\u5b58\u7a7a\u95f4\u4e2d\uff0c\u5b58\u50a8\u4e00\u7ec4\u76f8\u540c\u7c7b\u578b\u7684\u5143\u7d20\n\u5355\u7aef\u94fe\u8868\uff1a\u5143\u7d20+next\u6307\u9488\uff08\u6307\u5411\u4e0b\u4e00\u4e2a\u5143\u7d20\uff09\n\u53cc\u7aef\u94fe\u8868\uff1aprev\u6307\u9488+\u5143\u7d20+next\u6307\u9488\uff08\u6307\u5411\u4e0b\u4e00\u4e2a\u5143\u7d20\uff09"),(0,a.kt)("h2",{id:"\u533a\u5206"},"\u533a\u5206"),(0,a.kt)("p",null,"\u8bbf\u95ee\uff1a\u901a\u8fc7\u7d22\u5f15\u627e\u5230\u67d0\u5143\u7d20\u7684\u503c\uff0c\n\u641c\u7d22\uff1a\u76f4\u63a5\u627e\u67d0\u5143\u7d20\uff0c\u9700\u8981\u904d\u5386\uff0c\u548c\u7d22\u5f15\u65e0\u5173\uff0c\u901a\u8fc7\u503c\u627e\u7d22\u5f15\n\u63d2\u5165\u5220\u9664\uff1a\u6539\u53d8\u6307\u9488"),(0,a.kt)("h2",{id:"\u57fa\u672c\u65b9\u6cd5\u7684\u65f6\u95f4\u590d\u6742\u5ea6"},"\u57fa\u672c\u65b9\u6cd5\u7684\u65f6\u95f4\u590d\u6742\u5ea6"),(0,a.kt)("p",null,"1.\u8bbf\u95eeO(N)"),(0,a.kt)("p",null,"2.\u641c\u7d22O(N)"),(0,a.kt)("p",null,"3.\u63d2\u5165O(1)"),(0,a.kt)("p",null,"4.\u5220\u9664O(1)"),(0,a.kt)("h2",{id:"\u7279\u70b9"},"\u7279\u70b9"),(0,a.kt)("p",null,"\u5199\u591a\u8bfb\u5c11"),(0,a.kt)("h2",{id:"\u5e38\u7528\u64cd\u4f5c"},"\u5e38\u7528\u64cd\u4f5c"),(0,a.kt)("h3",{id:"1\u521b\u5efa\u94fe\u8868"},"1.\u521b\u5efa\u94fe\u8868"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"}," \nvar list = new LinkedList()\n\n")),(0,a.kt)("h3",{id:"2\u6dfb\u52a0\u5143\u7d20"},"2.\u6dfb\u52a0\u5143\u7d20"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u6dfb\u52a0\u8282\u70b9\n  // \u6d4b\u8bd5append\u65b9\u6cd5\nlist.append('abc')\nlist.append('tng')\n\n \n// \u6d4b\u8bd5insert\u65b9\u6cd5\nlist.insert(1, '12')\nlist.insert(2, '333')\n\n")),(0,a.kt)("h3",{id:"3\u8bbf\u95ee\u5143\u7d20"},"3.\u8bbf\u95ee\u5143\u7d20"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"}," // get\u65b9\u6cd5\nlist.get(0)\n")),(0,a.kt)("h3",{id:"4\u67e5\u627e\u5143\u7d20"},"4.\u67e5\u627e\u5143\u7d20"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u67e5\u627e\u8282\u70b9\uff0c\u6d4b\u8bd5indexOf\u65b9\u6cd5\nlist.indexOf('333');\n \n")),(0,a.kt)("h3",{id:"5\u5220\u9664\u5143\u7d20"},"5.\u5220\u9664\u5143\u7d20"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"\n// \u6d4b\u8bd5remove\u65b9\u6cd5\uff0c\u9700\u8981\u5148\u904d\u5386\uff0c\u65b9\u6cd5\u590d\u6742\u5ea6O\uff08N\uff09\nlist.remove(0)\n\n")),(0,a.kt)("h3",{id:"6\u94fe\u8868\u7684\u957f\u5ea6"},"6.\u94fe\u8868\u7684\u957f\u5ea6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"//\u6d4b\u8bd5size\u65b9\u6cd5\nlist.size()\n \n")),(0,a.kt)("h3",{id:"7\u4fee\u6539\u5143\u7d20"},"7.\u4fee\u6539\u5143\u7d20"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"}," // \u6d4b\u8bd5update\u65b9\u6cd5\nlist.update(0, '999')\nlist.update(1, '888')\n\n")),(0,a.kt)("h2",{id:"\u7ec3\u4e60\u9898"},"\u7ec3\u4e60\u9898"),(0,a.kt)("p",null,"203\u79fb\u9664\u94fe\u8868\u5143\u7d20"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var removeElements = function(head, val) {\n    const dummyHead = new ListNode(0);\n    dummyHead.next = head;\n    let temp = dummyHead;\n    while (temp.next !== null) {\n        if (temp.next.val == val) {\n            temp.next = temp.next.next;\n        } else {\n            temp = temp.next;\n        }\n    }\n    return dummyHead.next;\n};\n\u65f6\u95f4\u590d\u6742\u5ea6\uff1aO(n)\uff0c\u5176\u4e2d n \u662f\u94fe\u8868\u7684\u957f\u5ea6\u3002\u9700\u8981\u904d\u5386\u94fe\u8868\u4e00\u6b21\u3002\n\n\u7a7a\u95f4\u590d\u6742\u5ea6\uff1aO(1)\u3002\n\n \n")),(0,a.kt)("p",null,"206\u53cd\u8f6c\u94fe\u8868"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var reverseList = function(head) {\n    let dummy =new ListNode(0);\n    dummy.next = head;\n    while (head !==null && head.next !==null) {\n        const dnext = dummy.next;\n        const hnext = head.next;\n        dummy.next = hnext;\n        head.next = hnext.next;\n        hnext.next = dnext;\n        \n    }\n    return dummy.next;\n};\n\u65f6\u95f4\u590d\u6742\u5ea6\nO(n)\n")))}p.isMDXComponent=!0}}]);