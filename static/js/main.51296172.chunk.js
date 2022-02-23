(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[1],{20:function(e,t,n){"use strict";var c=n(1),l=n(16),i=n(3),s=n(12),a=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),r=a.NODE_ENV,o=a.REACT_APP_GA_TRACKING_ID;"production"===r&&s.a.initialize(o);var j=function(){var e=Object(i.f)().pathname;return Object(c.useEffect)((function(){"production"===r&&(s.a.set({page:e}),s.a.pageview(e))}),[e]),null},b=n(5),u=n(21),d=[{index:!0,label:"Home",path:"/"},{label:"About",path:"/about"},{label:"Resume",path:"/resume"},{label:"Projects",path:"/projects"},{label:"Stats",path:"/stats"},{label:"Contact",path:"/contact"}],h=n(0),O=Object(c.lazy)((function(){return n.e(5).then(n.t.bind(null,172,7))})),x=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],l=t[1];return Object(h.jsxs)("div",{className:"hamburger-container",children:[Object(h.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(h.jsx)("ul",{children:n?Object(h.jsx)("li",{className:"menu close-menu",children:Object(h.jsx)("div",{onClick:function(){return l(!n)},className:"menu-hover",children:"\u2715"})}):Object(h.jsx)("li",{className:"menu open-menu",children:Object(h.jsx)("div",{onClick:function(){return l(!n)},className:"menu-hover",children:"\u2630"})})})}),Object(h.jsx)(c.Suspense,{fallback:Object(h.jsx)(h.Fragment,{}),children:Object(h.jsx)(O,{right:!0,isOpen:n,children:Object(h.jsx)("ul",{className:"hamburger-ul",children:d.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(b.b,{to:e.path,onClick:function(){return l(!n)},children:Object(h.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},m=function(){return Object(h.jsxs)("header",{id:"header",children:[Object(h.jsx)("h1",{className:"index-link",children:d.filter((function(e){return e.index})).map((function(e){return Object(h.jsx)(b.b,{to:e.path,children:e.label},e.label)}))}),Object(h.jsx)("nav",{className:"links",children:Object(h.jsx)("ul",{children:d.filter((function(e){return!e.index})).map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(b.b,{to:e.path,children:e.label})},e.label)}))})}),Object(h.jsx)(x,{})]})},p=n(24),f=function(){return Object(h.jsxs)("section",{id:"sidebar",children:[Object(h.jsxs)("section",{id:"intro",children:[Object(h.jsx)(b.b,{to:"/",className:"logo",children:Object(h.jsx)("img",{src:"".concat("","/images/seattle.png"),alt:""})}),Object(h.jsxs)("header",{children:[Object(h.jsx)("h2",{children:"Jacob Keller"}),Object(h.jsx)("p",{children:Object(h.jsx)("a",{href:"mailto:keller.974@osu.edu",children:"keller.974@osu.edu"})})]})]}),Object(h.jsxs)("section",{className:"blurb",children:[Object(h.jsx)("h2",{children:"About"}),Object(h.jsx)("p",{children:"Hi, I'm Jacob. I'm a graduate engineering student interested in the intersection of people, work, and technology. I'm interested in systems engineering, web design & development, decision-support software. In the near future, I hope to research human-robot team design for manned space operations in hopes of engineering more resilient and adaptive systems."}),Object(h.jsx)("ul",{className:"actions",children:Object(h.jsx)("li",{children:window.location.pathname.includes("/resume")?Object(h.jsx)(b.b,{to:"/about",className:"button",children:"About Me"}):Object(h.jsx)(b.b,{to:"/resume",className:"button",children:"Learn More"})})})]}),Object(h.jsxs)("section",{id:"footer",children:[Object(h.jsx)(p.a,{}),Object(h.jsxs)("p",{className:"copyright",children:["\xa9 Jacob Keller ",Object(h.jsx)(b.b,{to:"/",children:"jacobkeller.io"}),"."]})]})]})},g=function(){var e=Object(i.f)().pathname;return Object(c.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},v=function(e){return Object(h.jsxs)(l.b,{children:[Object(h.jsx)(j,{}),Object(h.jsx)(g,{}),Object(h.jsxs)(l.a,{titleTemplate:"%s | Jacob Keller",defaultTitle:"Jacob Keller",defer:!1,children:[e.title&&Object(h.jsx)("title",{children:e.title}),Object(h.jsx)("meta",{name:"description",content:e.description})]}),Object(h.jsxs)("div",{id:"wrapper",children:[Object(h.jsx)(m,{}),Object(h.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(h.jsx)(f,{})]})]})};v.defaultProps={children:null,fullPage:!1,title:null,description:"Jacob Keller's personal website."};t.a=v},24:function(e,t,n){"use strict";n(1);var c=n(29),l=n(30),i=n(31),s=n(32),a=[{link:"https://github.com/jkeller52",label:"Github",icon:l.faGithub},{link:"https://www.linkedin.com/in/jacob-r-keller/",label:"LinkedIn",icon:i.faLinkedinIn},{link:"mailto:keller.974@osu.edu",label:"Email",icon:s.faEnvelope}],r=n(0);t.a=function(){return Object(r.jsx)("ul",{className:"icons",children:a.map((function(e){return Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:e.link,children:Object(r.jsx)(c.a,{icon:e.icon})})},e.label)}))})}},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var c=n(1),l=n.n(c),i=n(15),s=n(5),a=n(3),r=n(20),o=(n(48),n(0)),j=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,169))})),b=Object(c.lazy)((function(){return n.e(9).then(n.bind(null,176))})),u=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,170))})),d=Object(c.lazy)((function(){return n.e(11).then(n.bind(null,171))})),h=Object(c.lazy)((function(){return n.e(7).then(n.bind(null,175))})),O=Object(c.lazy)((function(){return n.e(6).then(n.bind(null,173))})),x=Object(c.lazy)((function(){return Promise.all([n.e(4),n.e(12)]).then(n.bind(null,174))})),m=function(){return Object(o.jsx)(s.a,{basename:"",children:Object(o.jsx)(c.Suspense,{fallback:Object(o.jsx)(r.a,{}),children:Object(o.jsxs)(a.c,{children:[Object(o.jsx)(a.a,{exact:!0,path:"/",component:u}),Object(o.jsx)(a.a,{path:"/about",component:j}),Object(o.jsx)(a.a,{path:"/projects",component:h}),Object(o.jsx)(a.a,{path:"/stats",component:x}),Object(o.jsx)(a.a,{path:"/contact",component:b}),Object(o.jsx)(a.a,{path:"/resume",component:O}),Object(o.jsx)(a.a,{component:d,status:404})]})})})},p=function(){return Object(o.jsx)(l.a.StrictMode,{children:Object(o.jsx)(m,{})})},f=document.getElementById("root");f.hasChildNodes()?Object(i.hydrate)(Object(o.jsx)(p,{}),f):Object(i.render)(Object(o.jsx)(p,{}),f)}},[[49,2,3]]]);
//# sourceMappingURL=main.51296172.chunk.js.map