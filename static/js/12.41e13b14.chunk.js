(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[12],{192:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(5),r=a(20),c=a(0),i=function(e){var t=e.label,a=e.link,n=e.value,s=e.format;return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{width:"70%",children:t}),Object(c.jsx)("td",{children:a?Object(c.jsx)("a",{href:a,children:s(n)}):s(n)})]})};i.defaultProps={format:function(e){return e},link:null,value:null};var l=i,u=function(e){var t=e.data;return Object(c.jsx)("table",{children:Object(c.jsx)("tbody",{children:t.map((function(e){return Object(c.jsx)(l,{format:e.format,label:e.label,link:e.link,value:e.value},e.label)}))})})},o=a(21),b=function(){var e=Object(n.useState)(),t=Object(o.a)(e,2),a=t[0],s=t[1];return Object(n.useEffect)((function(){var e=setInterval((function(){return function(){var e=new Date("1998-08-26T06:08:00");s(((Date.now()-e)/31556925190.079998).toFixed(11))}()}),25);return function(){clearInterval(e)}}),[]),Object(c.jsx)(c.Fragment,{children:a})},j=[{key:"age",label:"Current age",value:Object(c.jsx)(b,{})},{key:"location",label:"Current city",value:"Columbus, OH"},{key:"natparks",label:"Number of US National Parks visited",value:"12"},{key:"countries",label:"Countries visited",value:5}],d=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h3",{children:"Some stats about me"}),Object(c.jsx)(u,{data:j})]})},h=a(53),f=a(162),O=a(163),v=a.n(O),p=a(165),x=a.n(p),m=[{label:"Last updated at",key:"pushed_at",link:"https://github.com/jkeller52/personal-site/commits",format:function(e){return x()(e).format("MMMM DD, YYYY")}},{label:"Lines of Javascript powering this website",value:"2115"},{label:"Site online since",key:"pushed",value:"November 22, 2021"}],k=function(){var e=Object(n.useState)(m),t=Object(o.a)(e,2),a=t[0],s=t[1],r=Object(n.useCallback)(Object(f.a)(v.a.mark((function e(){var t,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/repos/jkeller52/personal-site");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,s(m.map((function(e){return Object(h.a)(Object(h.a)({},e),{},{value:Object.keys(a).includes(e.key)?a[e.key]:e.value})})));case 7:case"end":return e.stop()}}),e)}))),[]);return Object(n.useEffect)((function(){r()}),[r]),Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"Some stats about this site"}),Object(c.jsx)(u,{data:a})]})};t.default=function(){return Object(c.jsx)(r.a,{title:"Stats",description:"Some statistics about Jacob and the site",children:Object(c.jsxs)("article",{className:"post",id:"stats",children:[Object(c.jsx)("header",{children:Object(c.jsx)("div",{className:"title",children:Object(c.jsx)("h2",{"data-testid":"heading",children:Object(c.jsx)(s.b,{to:"/stats",children:"Stats"})})})}),Object(c.jsx)(d,{}),Object(c.jsx)(k,{})]})})}}}]);
//# sourceMappingURL=12.41e13b14.chunk.js.map