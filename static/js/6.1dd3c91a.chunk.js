(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[6],{169:function(e,t,n){"use strict";n.r(t);var i=n(1),r=n(5),o=n(20),c=n(0),s=function(e){var t=e.data;return Object(c.jsx)("article",{className:"degree-container",children:Object(c.jsxs)("header",{children:[Object(c.jsx)("h4",{className:"degree",children:t.degree}),Object(c.jsxs)("p",{className:"school",children:[Object(c.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},a=function(e){var t=e.data;return Object(c.jsxs)("div",{className:"education",children:[Object(c.jsx)("div",{className:"link-to",id:"education"}),Object(c.jsx)("div",{className:"title",children:Object(c.jsx)("h3",{children:"Education"})}),t.map((function(e){return Object(c.jsx)(s,{data:e},e.school)}))]})};a.defaultProps={data:[]};var l=a,u=function(e){var t=e.data;return Object(c.jsxs)("article",{className:"jobs-container",children:[Object(c.jsxs)("header",{children:[Object(c.jsxs)("h4",{children:[Object(c.jsx)("a",{href:t.link,children:t.company})," - ",t.position]}),Object(c.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),Object(c.jsx)("ul",{className:"points",children:t.points.map((function(e){return Object(c.jsx)("li",{children:e},e)}))})]})},d=function(e){var t=e.data;return Object(c.jsxs)("div",{className:"experience",children:[Object(c.jsx)("div",{className:"link-to",id:"experience"}),Object(c.jsx)("div",{className:"title",children:Object(c.jsx)("h3",{children:"Experience"})}),t.map((function(e){return Object(c.jsx)(u,{data:e},e.company)}))]})};d.defaultProps={data:[]};var b=d;function p(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var m=n(23);function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function y(e,t){if(t&&("object"===f(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=g(e);if(t){var r=g(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return y(this,n)}}var j=n(55),O=n(51),v=function(e){var t=e.handleClick,n=e.active,i=e.label;return Object(c.jsx)("button",{className:"skillbutton ".concat(n[i]?"skillbutton-active":""),type:"button",onClick:function(){return t(i)},children:i})},x=function(e){var t=e.data,n=e.categories,i=t.category,r=t.competency,o=t.title,s={background:n.filter((function(e){return i.includes(e.name)})).map((function(e){return e.color}))[0]},a=Object(O.a)(Object(O.a)({},s),{},{width:"".concat(String(Math.min(100,Math.max(r/5*100,0))),"%")});return Object(c.jsxs)("div",{className:"skillbar clearfix",children:[Object(c.jsx)("div",{className:"skillbar-title",style:s,children:Object(c.jsx)("span",{children:o})}),Object(c.jsx)("div",{className:"skillbar-bar",style:a}),Object(c.jsxs)("div",{className:"skill-bar-percent",children:[r," / 5"]})]})};x.defaultProps={categories:[]};var k=x,S=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Object(m.a)(e,t)}(o,e);var t,n,i,r=h(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=r.call(this,e)).handleChildClick=function(e){t.setState((function(t){var n=Object.keys(t.buttons).reduce((function(n,i){return Object(O.a)(Object(O.a)({},n),{},Object(j.a)({},i,e===i&&!t.buttons[i]))}),{});return n.All=!Object.keys(t.buttons).some((function(e){return n[e]})),{buttons:n}}))},t.state=function(e){var t=e.categories,n=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return Object(O.a)(Object(O.a)({},e),{},Object(j.a)({},t,!1))}),{All:!0}),skills:n}}({categories:e.categories,skills:e.skills}),t}return t=o,(n=[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"All");return this.state.skills.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return Object(c.jsx)(k,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return Object(c.jsx)(v,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return Object(c.jsxs)("div",{className:"skills",children:[Object(c.jsx)("div",{className:"link-to",id:"skills"}),Object(c.jsxs)("div",{className:"title",children:[Object(c.jsx)("h3",{children:"Skills"}),Object(c.jsx)("p",{children:"Note: I think these sections are silly, but everyone seems to have one. Here is a *mostly* honest overview of my skills."})]}),Object(c.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),Object(c.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}])&&p(t.prototype,n),i&&p(t,i),Object.defineProperty(t,"prototype",{writable:!1}),o}(i.Component);S.defaultProps={skills:[],categories:[]};var w=S,C=function(e){var t=e.data,n=e.last;return Object(c.jsxs)("li",{className:"course-container",children:[Object(c.jsxs)("a",{href:t.link,children:[Object(c.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),Object(c.jsx)("p",{className:"course-name",children:t.title})]}),!n&&Object(c.jsx)("div",{className:"course-dot",children:Object(c.jsx)("p",{className:"course-name",children:" \u2022"})})]})};C.defaultProps={last:!1};var P=C,N=function(e){var t,n=e.data;return Object(c.jsxs)("div",{className:"courses",children:[Object(c.jsx)("div",{className:"link-to",id:"courses"}),Object(c.jsx)("div",{className:"title",children:Object(c.jsx)("h3",{children:"Selected Courses"})}),Object(c.jsx)("ul",{className:"course-list",children:(t=n,t.sort((function(e,t){var n=0;return e.university>t.university?n=-1:e.university<t.university||e.number>t.number?n=1:e.number<t.number&&(n=-1),n})).map((function(e,n){return Object(c.jsx)(P,{data:e,last:n===t.length-1},e.title)})))})]})};N.defaultProps={data:[]};var E=N,A=function(){return Object(c.jsxs)("div",{className:"references",children:[Object(c.jsx)("div",{className:"link-to",id:"references"}),Object(c.jsx)("div",{className:"title",children:Object(c.jsx)(r.b,{to:"/contact",children:Object(c.jsx)("h3",{children:"References are available upon request"})})})]})},R=[{title:"Cognitive Systems Engineering",number:"ISE 3700",link:"http://stanford.edu/class/ee364a/"},{title:"Aviation Human Factors and Safety",number:"AVIATN 3300",link:"http://cs229.stanford.edu/"},{title:"Visual Analytics and Sensemaking",number:"ISE 5760",link:"http://cs231n.stanford.edu/"},{title:"Data Analysis in Psychology",number:"PSYCH 2220",link:"http://scpd.stanford.edu/search/publicCourseSearchDetails.do;jsessionid=561188A06434D7D97953C4706DE12831?method=load&courseId=11685"},{title:"High Level Vision",number:"PSYCH 5606",link:"http://web.stanford.edu/class/cme304/"},{title:"Human Centered Automation",number:"ISE 5740",link:"http://stanford.edu/~rezab/discrete/"},{title:"Rapid Innovation for Public Impact",number:"PUBAFR 5620",link:"http://web.stanford.edu/class/math220/index.html"},{title:"Behavioral Neuroscience",number:"PSYCH 3313",link:"http://ee263.stanford.edu/"},{title:"Memory and Cognition",number:"PSYCH 3312",link:"http://web.stanford.edu/class/ee278/"},{title:"US Space Policy",number:"PUBAFR 3620",link:""},{title:"Research Methods in Psychology",number:"PSYCH 2300",link:""},{title:"Exploring Design Thinking",number:"Design 3105",link:"https://web.stanford.edu/group/designx_lab/cgi-bin/mainwiki/index.php/ME397_Design_Theory_%26_Methodology_Seminar"},{title:"Artificial Intelligence for Nonmajors",number:"CSE 6194",link:""},{title:"Cognitive Systems Engineering Design",number:"ISE 5770",link:""},{title:"Models and Methods in Cognitive Systems Engineering",number:"ISE 4193",link:"http://www.cse.buffalo.edu/~hungngo/classes/2013/Fall/250/"},{title:"Chocolate Science",number:"FDSCTE 1110",link:""},{title:"Technology and Society",number:"SOCIOL 3302",link:""}],I=[{school:"Ohio State University",degree:"M.S. Industrial and Systems Engineering",link:"https://ise.osu.edu/",year:2023},{school:"Ohio State University",degree:"B.S. Human Systems Integration",link:"https://osu.edu",year:2020}],D=[{company:"Cognitive Systems Engineering Laboratory",position:"Graduate Research Associate",link:"https://csel.engineering.osu.edu/people/keller.974",daterange:"August 2021 - Present",points:["Graduate Research Associate in Department of Industrial and Systems Engineering,  specializing in Cognitive Systems Engineering.","My research interests include resilience engineering, computational modeling, and human-robot interaction in manned space operations."]},{company:"Battelle Center for Science, Engineering, and Public Policy",position:"Student Research Asssociate",link:"battellecenter.osu.edu",daterange:"April 2021 - August 2021",points:["Systems engineer contractor supporting project management and engineering efforts for large-scale energy systems project. ","Contributed to concept of operations creation for energy technology and was involved in strategic consulting with management and engineers to help facilitate rapid innovation."]},{company:"Resilient Cognitive Solutions",position:"Cognitive Systems Engineering Intern",link:"https://resilientcognitivesolutions.com",daterange:"Summer 2019 & Summer 2020",points:["Contributed to the design of decision support systems for intelligence analysts.","Leveraged cognitive systems engineering methods including cognitive work analysis to develop software for expert practitioners facing data overload in complex work environments","Became proficient creating advanced decision-support interfaces in Adobe Illustrator and InDesign."]},{company:"Cognitive Systems Engineering Laboratory",position:"Undergraduate Research Assistant",link:"https://csel.engineering.osu.edu/people/keller.974",daterange:"August 2018 - May 2021",points:["Performed literature searches on human-robot interaction (HRI), software resilience engineering, and joint human-machine intel analysis.","Contributed to development of experimental HRI testbed enabling low-overhead simulations of human-robot space operations.","Contributed experimental design of human-in-the-loop intelligence analysis study testing join human-machine team performance."]}],M=n(17);var T=n(24);var L,B=[{title:"Javascript",competency:3,category:["Software Languages","Design"]},{title:"Cognitive Work Analysis",competency:4,category:["Knowledge Elicitation"]},{title:"Hierarchical Task Analysis",competency:3,category:["Knowledge Elicitation"]},{title:"Bash",competency:3,category:["Tools","Software Languages"]},{title:"Git",competency:3,category:["Tools"]},{title:"LaTeX",competency:3,category:["Software Languages","Tools"]},{title:"Markdown",competency:4,category:["Software Languages"]},{title:"Python",competency:4,category:["Software Languages"]},{title:"C++",competency:2,category:["Software Languages"]},{title:"Work Models that Compute (WMC)",competency:2,category:["Knowledge Elicitation","Tools","Computational Modeling/Simulation"]},{title:"R",competency:3,category:["Software Languages"]},{title:"Tableau",competency:3,category:["Tools"]},{title:"p5.js",competency:2,category:["Software Languages","Design"]},{title:"Soldering",competency:3,category:["Miscellaneous"]},{title:"Saxophone",competency:4,category:["Miscellaneous"]},{title:"3D Printing",competency:3,category:["Miscellaneous","Design"]},{title:"SCUBA Diving",competency:1,category:["Miscellaneous"]},{title:"Indoor Rock Climbing",competency:3.5,category:["Miscellaneous"]},{title:"Interdependence Analysis",competency:3,category:["Knowledge Elicitation"]},{title:"Adobe Premiere",competency:3,category:["Miscellaneous"]},{title:"Adobe Illustrator",competency:3.25,category:["Design"]},{title:"Adobe Photoshop",competency:3.5,category:["Design"]}].map((function(e){return Object(O.a)(Object(O.a)({},e),{},{category:e.category.sort()})})),H=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],_=(L=new Set(B.reduce((function(e,t){var n=t.category;return e.concat(n)}),[])),function(e){if(Array.isArray(e))return Object(M.a)(e)}(L)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(L)||Object(T.a)(L)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort().map((function(e,t){return{name:e,color:H[t]}})),U=["Education","Experience","Skills","Courses","References"];t.default=function(){return Object(c.jsx)(o.a,{title:"Resume",description:"Jacob Keller's Resume. Ohio State University, Battelle Center for Science, Engineeering & Public Policy, Resilient Cognitive Solutions.",children:Object(c.jsxs)("article",{className:"post",id:"resume",children:[Object(c.jsx)("header",{children:Object(c.jsxs)("div",{className:"title",children:[Object(c.jsx)("h2",{"data-testid":"heading",children:Object(c.jsx)(r.b,{to:"resume",children:"Resume"})}),Object(c.jsx)("div",{className:"link-container",children:U.map((function(e){return Object(c.jsx)("h4",{children:Object(c.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),Object(c.jsx)(l,{data:I}),Object(c.jsx)(b,{data:D}),Object(c.jsx)(w,{skills:B,categories:_}),Object(c.jsx)(E,{data:R}),Object(c.jsx)(A,{})]})})}},51:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n(55);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},55:function(e,t,n){"use strict";function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return i}))}}]);
//# sourceMappingURL=6.1dd3c91a.chunk.js.map