(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[1],{19:function(e,t,n){"use strict";var c=n(1),l=n(16),i=n(3),a=n(12),s=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),r=s.NODE_ENV,o=s.REACT_APP_GA_TRACKING_ID;"production"===r&&a.a.initialize(o);var j=function(){var e=Object(i.f)().pathname;return Object(c.useEffect)((function(){"production"===r&&(a.a.set({page:e}),a.a.pageview(e))}),[e]),null},b=n(5),u=n(20),d=[{index:!0,label:"Home",path:"/"},{label:"About",path:"/about"},{label:"Projects",path:"/projects"},{label:"Stats",path:"/stats"},{label:"Contact",path:"/contact"}],h=n(0),O=Object(c.lazy)((function(){return n.e(4).then(n.t.bind(null,170,7))})),x=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],l=t[1];return Object(h.jsxs)("div",{className:"hamburger-container",children:[Object(h.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(h.jsx)("ul",{children:n?Object(h.jsx)("li",{className:"menu close-menu",children:Object(h.jsx)("div",{onClick:function(){return l(!n)},className:"menu-hover",children:"\u2715"})}):Object(h.jsx)("li",{className:"menu open-menu",children:Object(h.jsx)("div",{onClick:function(){return l(!n)},className:"menu-hover",children:"\u2630"})})})}),Object(h.jsx)(c.Suspense,{fallback:Object(h.jsx)(h.Fragment,{}),children:Object(h.jsx)(O,{right:!0,isOpen:n,children:Object(h.jsx)("ul",{className:"hamburger-ul",children:d.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(b.b,{to:e.path,onClick:function(){return l(!n)},children:Object(h.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},p=function(){return Object(h.jsxs)("header",{id:"header",children:[Object(h.jsx)("h1",{className:"index-link",children:d.filter((function(e){return e.index})).map((function(e){return Object(h.jsx)(b.b,{to:e.path,children:e.label},e.label)}))}),Object(h.jsx)("nav",{className:"links",children:Object(h.jsx)("ul",{children:d.filter((function(e){return!e.index})).map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(b.b,{to:e.path,children:e.label})},e.label)}))})}),Object(h.jsx)(x,{})]})},m=n(21),f=function(){return Object(h.jsxs)("section",{id:"sidebar",children:[Object(h.jsxs)("section",{id:"intro",children:[Object(h.jsx)(b.b,{to:"/",className:"logo",children:Object(h.jsx)("img",{src:"".concat("","/images/Headshot205x236.jpg"),alt:""})}),Object(h.jsxs)("header",{children:[Object(h.jsx)("h2",{children:"Jacob Keller"}),Object(h.jsx)("p",{children:Object(h.jsx)("a",{href:"mailto:keller.974@osu.edu",children:"keller.974@osu.edu"})})]})]}),Object(h.jsxs)("section",{className:"blurb",children:[Object(h.jsx)("h2",{children:"About"}),Object(h.jsx)("p",{children:"Hi, I'm Jacob. I'm a systems engineering graduate student interested in developing novel decision-support tools for complex sociotechnical systems such as space operation extravehicular activities. My hobbies include 3D printing, playing saxophone, IoT projects, and astrophotography."}),Object(h.jsx)("ul",{className:"actions",children:Object(h.jsx)("li",{children:(window.location.pathname.includes("/about"),Object(h.jsx)(b.b,{to:"/about",className:"button",children:"Learn More"}))})})]}),Object(h.jsxs)("section",{id:"footer",children:[Object(h.jsx)(m.a,{}),Object(h.jsxs)("p",{className:"copyright",children:["\xa9 Jacob Keller ",Object(h.jsx)(b.b,{to:"/",children:"jacobkeller.io"}),"."]})]})]})},v=function(){var e=Object(i.f)().pathname;return Object(c.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},g=function(e){return Object(h.jsxs)(l.b,{children:[Object(h.jsx)(j,{}),Object(h.jsx)(v,{}),Object(h.jsxs)(l.a,{titleTemplate:"%s | Jacob Keller",defaultTitle:"Jacob Keller",defer:!1,children:[e.title&&Object(h.jsx)("title",{children:e.title}),Object(h.jsx)("meta",{name:"description",content:e.description})]}),Object(h.jsxs)("div",{id:"wrapper",children:[Object(h.jsx)(p,{}),Object(h.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(h.jsx)(f,{})]})]})};g.defaultProps={children:null,fullPage:!1,title:null,description:"Jacob Keller's personal website."};t.a=g},21:function(e,t,n){"use strict";n(1);var c=n(26),l=n(27),i=n(28),a=n(29),s=n(30),r=[{link:"https://github.com/jkeller52",label:"Github",icon:l.faGithub},{link:"https://www.linkedin.com/in/jacob-r-keller/",label:"LinkedIn",icon:i.faLinkedinIn},{link:"mailto:jacob@jacobkeller.io",label:"Email",icon:a.faEnvelope},{link:"https://www.researchgate.net/profile/Jacob-Keller-8",label:"ResearchGate",icon:s.faResearchgate}],o=n(0);t.a=function(){return Object(o.jsx)("ul",{className:"icons",children:r.map((function(e){return Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:e.link,children:Object(o.jsx)(c.a,{icon:e.icon,spin:!0})})},e.label)}))})}},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c=n(1),l=n.n(c),i=n(15),a=n(5),s=n(3),r=n(19),o=(n(46),n(0)),j=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,166))})),b=Object(c.lazy)((function(){return n.e(7).then(n.bind(null,172))})),u=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,167))})),d=Object(c.lazy)((function(){return n.e(9).then(n.bind(null,168))})),h=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,169))})),O=Object(c.lazy)((function(){return Promise.all([n.e(5),n.e(11)]).then(n.bind(null,171))})),x=function(){return Object(o.jsx)(a.a,{basename:"",children:Object(o.jsx)(c.Suspense,{fallback:Object(o.jsx)(r.a,{}),children:Object(o.jsxs)(s.c,{children:[Object(o.jsx)(s.a,{exact:!0,path:"/",component:u}),Object(o.jsx)(s.a,{path:"/about",component:j}),Object(o.jsx)(s.a,{path:"/projects",component:h}),Object(o.jsx)(s.a,{path:"/stats",component:O}),Object(o.jsx)(s.a,{path:"/contact",component:b}),Object(o.jsx)(s.a,{component:d,status:404})]})})})},p=function(){return Object(o.jsx)(l.a.StrictMode,{children:Object(o.jsx)(x,{})})},m=document.getElementById("root");m.hasChildNodes()?Object(i.hydrate)(Object(o.jsx)(p,{}),m):Object(i.render)(Object(o.jsx)(p,{}),m)}},[[47,2,3]]]);
//# sourceMappingURL=main.009d0a2e.chunk.js.map