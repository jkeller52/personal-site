(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[6],{173:function(e,t,n){"use strict";n.r(t);var i=n(1),r=n(5),o=n(20),s=n(0),c=function(e){var t=e.data;return Object(s.jsx)("article",{className:"degree-container",children:Object(s.jsxs)("header",{children:[Object(s.jsx)("h4",{className:"degree",children:t.degree}),Object(s.jsxs)("p",{className:"school",children:[Object(s.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},a=function(e){var t=e.data;return Object(s.jsxs)("div",{className:"education",children:[Object(s.jsx)("div",{className:"link-to",id:"education"}),Object(s.jsx)("div",{className:"title",children:Object(s.jsx)("h3",{children:"Education"})}),t.map((function(e){return Object(s.jsx)(c,{data:e},e.school)}))]})};a.defaultProps={data:[]};var l=a,u=function(e){var t=e.data;return Object(s.jsxs)("article",{className:"jobs-container",children:[Object(s.jsxs)("header",{children:[Object(s.jsxs)("h4",{children:[Object(s.jsx)("a",{href:t.link,children:t.company})," - ",t.position]}),Object(s.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),Object(s.jsx)("ul",{className:"points",children:t.points.map((function(e){return Object(s.jsx)("li",{children:e},e)}))})]})},d=function(e){var t=e.data;return Object(s.jsxs)("div",{className:"experience",children:[Object(s.jsx)("div",{className:"link-to",id:"experience"}),Object(s.jsx)("div",{className:"title",children:Object(s.jsx)("h3",{children:"Experience"})}),t.map((function(e){return Object(s.jsx)(u,{data:e},e.company)}))]})};d.defaultProps={data:[]};var p=d;function b(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var y=n(22);function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function h(e,t){if(t&&("object"===g(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=m(e);if(t){var r=m(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return h(this,n)}}var j=n(57),O=n(53),v=function(e){var t=e.handleClick,n=e.active,i=e.label;return Object(s.jsx)("button",{className:"skillbutton ".concat(n[i]?"skillbutton-active":""),type:"button",onClick:function(){return t(i)},children:i})},x=function(e){var t=e.data,n=e.categories,i=t.category,r=t.competency,o=t.title,c={background:n.filter((function(e){return i.includes(e.name)})).map((function(e){return e.color}))[0]},a=Object(O.a)(Object(O.a)({},c),{},{width:"".concat(String(Math.min(100,Math.max(r/5*100,0))),"%")});return Object(s.jsxs)("div",{className:"skillbar clearfix",children:[Object(s.jsx)("div",{className:"skillbar-title",style:c,children:Object(s.jsx)("span",{children:o})}),Object(s.jsx)("div",{className:"skillbar-bar",style:a}),Object(s.jsxs)("div",{className:"skill-bar-percent",children:[r," / 5"]})]})};x.defaultProps={categories:[]};var k=x,S=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Object(y.a)(e,t)}(o,e);var t,n,i,r=f(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=r.call(this,e)).handleChildClick=function(e){t.setState((function(t){var n=Object.keys(t.buttons).reduce((function(n,i){return Object(O.a)(Object(O.a)({},n),{},Object(j.a)({},i,e===i&&!t.buttons[i]))}),{});return n.All=!Object.keys(t.buttons).some((function(e){return n[e]})),{buttons:n}}))},t.state=function(e){var t=e.categories,n=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return Object(O.a)(Object(O.a)({},e),{},Object(j.a)({},t,!1))}),{All:!0}),skills:n}}({categories:e.categories,skills:e.skills}),t}return t=o,(n=[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"All");return this.state.skills.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return Object(s.jsx)(k,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return Object(s.jsx)(v,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"skills",children:[Object(s.jsx)("div",{className:"link-to",id:"skills"}),Object(s.jsxs)("div",{className:"title",children:[Object(s.jsx)("h3",{children:"Skills"}),Object(s.jsx)("p",{children:"Note: I know these are subjective, I just really liked the colors"})]}),Object(s.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),Object(s.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}])&&b(t.prototype,n),i&&b(t,i),Object.defineProperty(t,"prototype",{writable:!1}),o}(i.Component);S.defaultProps={skills:[],categories:[]};var w=S,C=function(e){var t=e.data,n=e.last;return Object(s.jsxs)("li",{className:"course-container",children:[Object(s.jsxs)("a",{href:t.link,children:[Object(s.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),Object(s.jsx)("p",{className:"course-name",children:t.title})]}),!n&&Object(s.jsx)("div",{className:"course-dot",children:Object(s.jsx)("p",{className:"course-name",children:" \u2022"})})]})};C.defaultProps={last:!1};var N=C,P=function(e){var t,n=e.data;return Object(s.jsxs)("div",{className:"courses",children:[Object(s.jsx)("div",{className:"link-to",id:"courses"}),Object(s.jsx)("div",{className:"title",children:Object(s.jsx)("h3",{children:"Selected Courses"})}),Object(s.jsx)("ul",{className:"course-list",children:(t=n,t.sort((function(e,t){var n=0;return e.university>t.university?n=-1:e.university<t.university||e.number>t.number?n=1:e.number<t.number&&(n=-1),n})).map((function(e,n){return Object(s.jsx)(N,{data:e,last:n===t.length-1},e.title)})))})]})};P.defaultProps={data:[]};var A=P,E=function(){return Object(s.jsxs)("div",{className:"references",children:[Object(s.jsx)("div",{className:"link-to",id:"references"}),Object(s.jsx)("div",{className:"title",children:Object(s.jsx)(r.b,{to:"/contact",children:Object(s.jsx)("h3",{children:"References are available upon request"})})})]})},I=[{title:"Cognitive Systems Engineering",number:"ISE 3700",link:"https://physics.osu.edu/courses/ise-3700"},{title:"Aviation Human Factors and Safety",number:"AVIATN 3300"},{title:"Visual Analytics and Sensemaking",number:"ISE 5760",link:"https://data-analytics.osu.edu/courses/ise/5760"},{title:"Data Analysis in Psychology",number:"PSYCH 2220",link:"https://psychology.osu.edu/courses/psych-2220h"},{title:"High Level Vision",number:"PSYCH 5606",link:"https://psychology.osu.edu/courses/psych-5606"},{title:"Human-Centered Automation",number:"ISE 5740"},{title:"Rapid Innovation for Public Impact",number:"PUBAFR 5620",link:"https://u.osu.edu/sepi/pubafrs-5600-science-engineering-and-public-policy/"},{title:"Behavioral Neuroscience",number:"PSYCH 3313",link:"https://psychology.osu.edu/courses/psych-3313"},{title:"Memory and Cognition",number:"PSYCH 3312",link:"https://psychology.osu.edu/courses/psych-3312"},{title:"US Space Policy",number:"PUBAFR 3620",link:"https://u.osu.edu/sepi/pubafrs-3620-us-space-policy-and-the-global-space-economy/"},{title:"Research Methods in Psychology",number:"PSYCH 2300",link:"https://psychology.osu.edu/courses/psych-2300"},{title:"Design Thinking",number:"DESIGN 3105"},{title:"Artificial Intelligence for Nonmajors",number:"CSE 6194"},{title:"Cognitive Systems Engineering Design",number:"ISE 5770"},{title:"Models and Methods in Cog. Systems Engineering",number:"ISE 7720"},{title:"ACCAD 5102",number:"Programming for Artists and Designers"},{title:"Technology and Society",number:"SOCIOL 3302",link:"https://sociology.osu.edu/courses/sociol-3302#:~:text=Social%20aspects%20of%20technology%2C%20social,with%20credit%20for%20Sociol%20302."},{title:"Cognitive Models of Language",number:"LING 5702"}],R=[{school:"Ohio State University",degree:"M.S. Industrial and Systems Engineering",link:"https://ise.osu.edu/",year:2023},{school:"Ohio State University",degree:"B.S. Human Systems Integration",link:"https://osu.edu",year:2020}],D=[{company:"Cognitive Systems Engineering Laboratory",position:"Graduate Research Associate",link:"https://csel.engineering.osu.edu/people/keller.974",daterange:"August 2021 - Present",points:["Graduate Research Associate in Department of Industrial and Systems Engineering,  specializing in Cognitive Systems Engineering.","My research interests include resilience engineering, computational modeling, and human-robot interaction in manned space operations."]},{company:"Battelle Center for Science, Engineering, and Public Policy",position:"Student Research Asssociate",link:"https://battellecenter.osu.edu",daterange:"April 2021 - August 2021",points:["Systems engineer contractor supporting project management and engineering efforts for large-scale energy systems project. ","Contributed to concept of operations creation for energy technology and was involved in strategic consulting with management and engineers to help facilitate rapid innovation."]},{company:"Resilient Cognitive Solutions",position:"Cognitive Systems Engineering Intern",link:"https://resilientcognitivesolutions.com",daterange:"Summer 2019 & Summer 2020",points:["Contributed to the design of decision support systems for intelligence analysts.","Leveraged cognitive systems engineering methods including cognitive work analysis to develop software for expert practitioners facing data overload in complex work environments","Became proficient creating advanced decision-support interfaces in Adobe Illustrator and InDesign."]},{company:"Cognitive Systems Engineering Laboratory",position:"Undergraduate Research Assistant",link:"https://csel.engineering.osu.edu/people/keller.974",daterange:"August 2018 - May 2021",points:["Performed literature searches on human-robot interaction (HRI), software resilience engineering, and joint human-machine intel analysis.","Contributed to development of experimental HRI testbed enabling low-overhead simulations of human-robot space operations.","Contributed experimental design of human-in-the-loop intelligence analysis study testing join human-machine team performance."]}],M=n(17);var L=n(23);var T,B=[{title:"Javascript",competency:3,category:["Software Languages","Design"]},{title:"Cognitive Work Analysis",competency:4,category:["Knowledge Elicitation"]},{title:"Hierarchical Task Analysis",competency:3,category:["Knowledge Elicitation"]},{title:"Bash",competency:3,category:["Tools","Software Languages"]},{title:"Git",competency:3,category:["Tools"]},{title:"LaTeX",competency:3,category:["Software Languages","Tools"]},{title:"Markdown",competency:4,category:["Software Languages"]},{title:"Python",competency:4,category:["Software Languages"]},{title:"C++",competency:2,category:["Software Languages"]},{title:"Work Models that Compute (WMC)",competency:2,category:["Knowledge Elicitation","Tools","Computational Modeling/Simulation"]},{title:"R",competency:3,category:["Software Languages"]},{title:"Tableau",competency:3,category:["Tools"]},{title:"p5.js",competency:2,category:["Software Languages","Design"]},{title:"Soldering",competency:3,category:["Miscellaneous"]},{title:"Saxophone",competency:4,category:["Miscellaneous"]},{title:"3D Printing",competency:3,category:["Miscellaneous","Design"]},{title:"SCUBA Diving",competency:1,category:["Miscellaneous"]},{title:"Indoor Rock Climbing",competency:3.5,category:["Miscellaneous"]},{title:"Interdependence Analysis",competency:3,category:["Knowledge Elicitation"]},{title:"Adobe Premiere",competency:3,category:["Miscellaneous"]},{title:"Adobe Illustrator",competency:3.25,category:["Design"]},{title:"Adobe Photoshop",competency:3.5,category:["Design"]}].map((function(e){return Object(O.a)(Object(O.a)({},e),{},{category:e.category.sort()})})),H=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],U=(T=new Set(B.reduce((function(e,t){var n=t.category;return e.concat(n)}),[])),function(e){if(Array.isArray(e))return Object(M.a)(e)}(T)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(T)||Object(L.a)(T)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort().map((function(e,t){return{name:e,color:H[t]}})),G=["Education","Experience","Skills","Courses","References"];t.default=function(){return Object(s.jsx)(o.a,{title:"Resume",description:"Jacob Keller's Resume",children:Object(s.jsxs)("article",{className:"post",id:"resume",children:[Object(s.jsx)("header",{children:Object(s.jsxs)("div",{className:"title",children:[Object(s.jsx)("h2",{"data-testid":"heading",children:Object(s.jsx)(r.b,{to:"resume",children:"Resume"})}),Object(s.jsx)("div",{className:"link-container",children:G.map((function(e){return Object(s.jsx)("h4",{children:Object(s.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),Object(s.jsx)(l,{data:R}),Object(s.jsx)(p,{data:D}),Object(s.jsx)(w,{skills:B,categories:U}),Object(s.jsx)(A,{data:I}),Object(s.jsx)(E,{})]})})}},53:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n(57);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},57:function(e,t,n){"use strict";function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return i}))}}]);
//# sourceMappingURL=6.eda5fe02.chunk.js.map