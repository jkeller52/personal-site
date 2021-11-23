(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],{20:function(e,t,n){"use strict";var c=n(1),l=n(16),i=n(3),a=n(12),s=Object({NODE_ENV:"production",PUBLIC_URL:"/jacobkeller.io",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),r=s.NODE_ENV,j=s.REACT_APP_GA_TRACKING_ID;"production"===r&&a.a.initialize(j);var b=function(){var e=Object(i.f)().pathname;return Object(c.useEffect)((function(){"production"===r&&(a.a.set({page:e}),a.a.pageview(e))}),[e]),null},o=n(5),u=n(21),d=[{index:!0,label:"Home",path:"/"},{label:"About",path:"/about"},{label:"Resume",path:"/resume"},{label:"Projects",path:"/projects"},{label:"Stats",path:"/stats"},{label:"Contact",path:"/contact"}],h=n(0),O=Object(c.lazy)((function(){return n.e(5).then(n.t.bind(null,168,7))})),x=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],l=t[1];return Object(h.jsxs)("div",{className:"hamburger-container",children:[Object(h.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(h.jsx)("ul",{children:n?Object(h.jsx)("li",{className:"menu close-menu",children:Object(h.jsx)("div",{onClick:function(){return l(!n)},className:"menu-hover",children:"\u2715"})}):Object(h.jsx)("li",{className:"menu open-menu",children:Object(h.jsx)("div",{onClick:function(){return l(!n)},className:"menu-hover",children:"\u2630"})})})}),Object(h.jsx)(c.Suspense,{fallback:Object(h.jsx)(h.Fragment,{}),children:Object(h.jsx)(O,{right:!0,isOpen:n,children:Object(h.jsx)("ul",{className:"hamburger-ul",children:d.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(o.b,{to:e.path,onClick:function(){return l(!n)},children:Object(h.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},m=function(){return Object(h.jsxs)("header",{id:"header",children:[Object(h.jsx)("h1",{className:"index-link",children:d.filter((function(e){return e.index})).map((function(e){return Object(h.jsx)(o.b,{to:e.path,children:e.label},e.label)}))}),Object(h.jsx)("nav",{className:"links",children:Object(h.jsx)("ul",{children:d.filter((function(e){return!e.index})).map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(o.b,{to:e.path,children:e.label})},e.label)}))})}),Object(h.jsx)(x,{})]})},p=n(24),f=function(){return Object(h.jsxs)("section",{id:"sidebar",children:[Object(h.jsxs)("section",{id:"intro",children:[Object(h.jsx)(o.b,{to:"/",className:"logo",children:Object(h.jsx)("img",{src:"".concat("/jacobkeller.io","/images/seattle.png"),alt:""})}),Object(h.jsxs)("header",{children:[Object(h.jsx)("h2",{children:"Jacob Keller"}),Object(h.jsx)("p",{children:Object(h.jsx)("a",{href:"mailto:keller.974@osu.edu",children:"keller.974@osu.edu"})})]})]}),Object(h.jsxs)("section",{className:"blurb",children:[Object(h.jsx)("h2",{children:"About"}),Object(h.jsxs)("p",{children:["Hi, I'm Jacob. I like building things. I am a ",Object(h.jsx)("a",{href:"https://csel.engineering.osu.deu",children:"OSU CSEL"})," graduate, YC Alumni, and the co-founder and CTO of ",Object(h.jsx)("a",{href:"https://arthena.com",children:"Arthena"}),". Before Arthena I was"]}),Object(h.jsx)("ul",{className:"actions",children:Object(h.jsx)("li",{children:window.location.pathname.includes("/resume")?Object(h.jsx)(o.b,{to:"/about",className:"button",children:"About Me"}):Object(h.jsx)(o.b,{to:"/resume",className:"button",children:"Learn More"})})})]}),Object(h.jsxs)("section",{id:"footer",children:[Object(h.jsx)(p.a,{}),Object(h.jsxs)("p",{className:"copyright",children:["\xa9 Jacob Keller ",Object(h.jsx)(o.b,{to:"/",children:"jkeller52.github.io"}),"."]})]})]})},k=function(){var e=Object(i.f)().pathname;return Object(c.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},N=function(e){return Object(h.jsxs)(l.b,{children:[Object(h.jsx)(b,{}),Object(h.jsx)(k,{}),Object(h.jsxs)(l.a,{titleTemplate:"%s | Jacob Keller",defaultTitle:"Jacob Keller",defer:!1,children:[e.title&&Object(h.jsx)("title",{children:e.title}),Object(h.jsx)("meta",{name:"description",content:e.description})]}),Object(h.jsxs)("div",{id:"wrapper",children:[Object(h.jsx)(m,{}),Object(h.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(h.jsx)(f,{})]})]})};N.defaultProps={children:null,fullPage:!1,title:null,description:"Jacob Keller's personal website."};t.a=N},24:function(e,t,n){"use strict";n(1);var c=n(29),l=n(30),i=n(31),a=n(32),s=[{link:"https://github.com/jkeller52",label:"Github",icon:l.faGithub},{link:"https://www.linkedin.com/in/jacobrkeller",label:"LinkedIn",icon:i.faLinkedinIn},{link:"mailto:keller.974@osu.edu",label:"Email",icon:a.faEnvelope}],r=n(0);t.a=function(){return Object(r.jsx)("ul",{className:"icons",children:s.map((function(e){return Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:e.link,children:Object(r.jsx)(c.a,{icon:e.icon})})},e.label)}))})}},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(1),l=n.n(c),i=n(15),a=n(5),s=n(3),r=n(20),j=(n(45),n(0)),b=Object(c.lazy)((function(){return Promise.all([n.e(2),n.e(8)]).then(n.bind(null,165))})),o=Object(c.lazy)((function(){return n.e(9).then(n.bind(null,172))})),u=Object(c.lazy)((function(){return n.e(10).then(n.bind(null,166))})),d=Object(c.lazy)((function(){return n.e(11).then(n.bind(null,167))})),h=Object(c.lazy)((function(){return n.e(7).then(n.bind(null,171))})),O=Object(c.lazy)((function(){return n.e(6).then(n.bind(null,169))})),x=Object(c.lazy)((function(){return Promise.all([n.e(4),n.e(12)]).then(n.bind(null,170))})),m=function(){return Object(j.jsx)(a.a,{basename:"/jacobkeller.io",children:Object(j.jsx)(c.Suspense,{fallback:Object(j.jsx)(r.a,{}),children:Object(j.jsxs)(s.c,{children:[Object(j.jsx)(s.a,{exact:!0,path:"/",component:u}),Object(j.jsx)(s.a,{path:"/about",component:b}),Object(j.jsx)(s.a,{path:"/projects",component:h}),Object(j.jsx)(s.a,{path:"/stats",component:x}),Object(j.jsx)(s.a,{path:"/contact",component:o}),Object(j.jsx)(s.a,{path:"/resume",component:O}),Object(j.jsx)(s.a,{component:d,status:404})]})})})},p=function(){return Object(j.jsx)(l.a.StrictMode,{children:Object(j.jsx)(m,{})})},f=document.getElementById("root");f.hasChildNodes()?Object(i.hydrate)(Object(j.jsx)(p,{}),f):Object(i.render)(Object(j.jsx)(p,{}),f)}},[[46,1,3]]]);
//# sourceMappingURL=main.f792cdc6.chunk.js.map