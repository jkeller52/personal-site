(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[6],{169:function(e,t,n){"use strict";n.r(t);var i=n(1),r=n(5),a=n(20),c=n(0),o=function(e){var t=e.data;return Object(c.jsx)("article",{className:"degree-container",children:Object(c.jsxs)("header",{children:[Object(c.jsx)("h4",{className:"degree",children:t.degree}),Object(c.jsxs)("p",{className:"school",children:[Object(c.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},s=function(e){var t=e.data;return Object(c.jsxs)("div",{className:"education",children:[Object(c.jsx)("div",{className:"link-to",id:"education"}),Object(c.jsx)("div",{className:"title",children:Object(c.jsx)("h3",{children:"Education"})}),t.map((function(e){return Object(c.jsx)(o,{data:e},e.school)}))]})};s.defaultProps={data:[]};var l=s,u=function(e){var t=e.data;return Object(c.jsxs)("article",{className:"jobs-container",children:[Object(c.jsxs)("header",{children:[Object(c.jsxs)("h4",{children:[Object(c.jsx)("a",{href:t.link,children:t.company})," - ",t.position]}),Object(c.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),Object(c.jsx)("ul",{className:"points",children:t.points.map((function(e){return Object(c.jsx)("li",{children:e},e)}))})]})},d=function(e){var t=e.data;return Object(c.jsxs)("div",{className:"experience",children:[Object(c.jsx)("div",{className:"link-to",id:"experience"}),Object(c.jsx)("div",{className:"title",children:Object(c.jsx)("h3",{children:"Experience"})}),t.map((function(e){return Object(c.jsx)(u,{data:e},e.company)}))]})};d.defaultProps={data:[]};var p=d;function b(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}function y(e){return y="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function h(e,t){return!t||"object"!==y(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=g(e);if(t){var r=g(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return h(this,n)}}var j=n(54),v=n(53),O=function(e){var t=e.handleClick,n=e.active,i=e.label;return Object(c.jsx)("button",{className:"skillbutton ".concat(n[i]?"skillbutton-active":""),type:"button",onClick:function(){return t(i)},children:i})},S=function(e){var t=e.data,n=e.categories,i=t.category,r=t.competency,a=t.title,o={background:n.filter((function(e){return i.includes(e.name)})).map((function(e){return e.color}))[0]},s=Object(v.a)(Object(v.a)({},o),{},{width:"".concat(String(Math.min(100,Math.max(r/5*100,0))),"%")});return Object(c.jsxs)("div",{className:"skillbar clearfix",children:[Object(c.jsx)("div",{className:"skillbar-title",style:o,children:Object(c.jsx)("span",{children:a})}),Object(c.jsx)("div",{className:"skillbar-bar",style:s}),Object(c.jsxs)("div",{className:"skill-bar-percent",children:[r," / 5"]})]})};S.defaultProps={categories:[]};var k=S,x=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(a,e);var t,n,i,r=f(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=r.call(this,e)).handleChildClick=function(e){t.setState((function(t){var n=Object.keys(t.buttons).reduce((function(n,i){return Object(v.a)(Object(v.a)({},n),{},Object(j.a)({},i,e===i&&!t.buttons[i]))}),{});return n.All=!Object.keys(t.buttons).some((function(e){return n[e]})),{buttons:n}}))},t.state=function(e){var t=e.categories,n=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return Object(v.a)(Object(v.a)({},e),{},Object(j.a)({},t,!1))}),{All:!0}),skills:n}}({categories:e.categories,skills:e.skills}),t}return t=a,(n=[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"All");return this.state.skills.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return Object(c.jsx)(k,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return Object(c.jsx)(O,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return Object(c.jsxs)("div",{className:"skills",children:[Object(c.jsx)("div",{className:"link-to",id:"skills"}),Object(c.jsxs)("div",{className:"title",children:[Object(c.jsx)("h3",{children:"Skills"}),Object(c.jsx)("p",{children:"Note: I think these sections are silly, but everyone seems to have one. Here is a *mostly* honest overview of my skills."})]}),Object(c.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),Object(c.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}])&&b(t.prototype,n),i&&b(t,i),a}(i.Component);x.defaultProps={skills:[],categories:[]};var D=x,P=function(e){var t=e.data,n=e.last;return Object(c.jsxs)("li",{className:"course-container",children:[Object(c.jsxs)("a",{href:t.link,children:[Object(c.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),Object(c.jsx)("p",{className:"course-name",children:t.title})]}),!n&&Object(c.jsx)("div",{className:"course-dot",children:Object(c.jsx)("p",{className:"course-name",children:" \u2022"})})]})};P.defaultProps={last:!1};var C=P,w=function(e){var t,n=e.data;return Object(c.jsxs)("div",{className:"courses",children:[Object(c.jsx)("div",{className:"link-to",id:"courses"}),Object(c.jsx)("div",{className:"title",children:Object(c.jsx)("h3",{children:"Selected Courses"})}),Object(c.jsx)("ul",{className:"course-list",children:(t=n,t.sort((function(e,t){var n=0;return e.university>t.university?n=-1:e.university<t.university||e.number>t.number?n=1:e.number<t.number&&(n=-1),n})).map((function(e,n){return Object(c.jsx)(C,{data:e,last:n===t.length-1},e.title)})))})]})};w.defaultProps={data:[]};var E=w,N=function(){return Object(c.jsxs)("div",{className:"references",children:[Object(c.jsx)("div",{className:"link-to",id:"references"}),Object(c.jsx)("div",{className:"title",children:Object(c.jsx)(r.b,{to:"/contact",children:Object(c.jsx)("h3",{children:"References are available upon request"})})})]})},A=[{title:"Cognitive Systems Engineering",number:"IS 3700",link:"http://stanford.edu/class/ee364a/"},{title:"Aviation Human Factors and Safety",number:"AVIATN 2200",link:"http://cs229.stanford.edu/"},{title:"Visual Analytics and Sensemaking",number:"ISE 5760",link:"http://cs231n.stanford.edu/"},{title:"Data Analysis in Psychology",number:"PSYCH 2220",link:"http://scpd.stanford.edu/search/publicCourseSearchDetails.do;jsessionid=561188A06434D7D97953C4706DE12831?method=load&courseId=11685"},{title:"High Level Vision",number:"PSYCH 5606",link:"http://web.stanford.edu/class/cme304/"},{title:"Human Centered Automation",number:"ISE 5740",link:"http://stanford.edu/~rezab/discrete/"},{title:"Rapid Innovation for Public Impact",number:"CME 303",link:"http://web.stanford.edu/class/math220/index.html"},{title:"Behavioral Neuroscience",number:"PSYCH 3313",link:"http://ee263.stanford.edu/"},{title:"Memory and Cognition",number:"PSYCH 3312",link:"http://web.stanford.edu/class/ee278/"},{title:"Spacecraft Design",number:"AA 236A",link:""},{title:"Research Methods in Psychology",number:"PSYCH 2300",link:""},{title:"Design Theory and Methodology",number:"MAE 397",link:"https://web.stanford.edu/group/designx_lab/cgi-bin/mainwiki/index.php/ME397_Design_Theory_%26_Methodology_Seminar"},{title:"Software Engineering Concepts",number:"CSE 442",link:""},{title:"Hardware/Software Integrated System Design",number:"CSE 453",link:""},{title:"Data Structures",number:"CS 250",link:"http://www.cse.buffalo.edu/~hungngo/classes/2013/Fall/250/"},{title:"Introduction to Digital Signal Processing",number:"EE 516",link:""},{title:"Computer Vision and Image Processing",number:"CSE 573",link:"http://cubs.buffalo.edu/~inwogu/teaching/Coursepage573_fa14/"},{title:"Realtime Embedded Systems",number:"CSE 321",link:""},{title:"Computer Architecture",number:"CSE 590",link:"http://www.cse.buffalo.edu/~stevko/courses/cse490/spring11/"},{title:"Small Data",number:"MS&E 226",link:"http://web.stanford.edu/class/msande226/"},{title:"Stochastic Control",number:"EE 266",link:"http://ee266.stanford.edu/"},{title:"Simulation",number:"MS&E 223",link:"http://web.stanford.edu/class/msande223/handout.htm"},{title:"Deep Learning for Natural Language Processing",number:"CS 224d",link:"http://cs224d.stanford.edu/"}],R=[{school:"Ohio State University",degree:"M.S. Industrial and Systems Engineering",link:"https://osu.edu",year:2023},{school:"Ohio State University",degree:"B.S. Human Systems Integration",link:"https://osu.edu",year:2020}],L=[{company:"Cognitive Systems Engineering Laboratory",position:"Graduate Research Associate",link:"https://csel.engineering.osu.edu/people/keller.974",daterange:"August 2021 - Present",points:["Graduate Research Associate in Department of Industrial and Systems Engineering,  specializing in Cognitive Systems Engineering.","My research interests include resilience engineering, computational modeling, and human-robot interaction in manned space operations."]},{company:"Battelle Center for Science, Engineering, and Public Policy",position:"Student Research Asssociate",link:"battellecenter.osu.edu",daterange:"April 2021 - August 2021",points:["Systems engineer contractor supporting project management and engineering efforts for large-scale energy systems project. ","Contributed to concept of operations creation for energy technology and was involved in strategic consulting with management and engineers to help facilitate rapid innovation."]},{company:"Resilient Cognitive Solutions",position:"Cognitive Systems Engineering Intern",link:"https://resilientcognitivesolutions.com",daterange:"Summer 2019 & Summer 2020",points:["Contributed to the design of decision support systems for intelligence analysts.","Leveraged cognitive systems engineering methods including cognitive work analysis to develop software for expert practitioners facing data overload in complex work environments","Became proficient creating advanced decision-support interfaces in Adobe Illustrator and InDesign."]},{company:"Cognitive Systems Engineering Laboratory",position:"Undergraduate Research Assistant",link:"https://csel.engineering.osu.edu/people/keller.974",daterange:"August 2018 - May 2021",points:["Performed literature searches on human-robot interaction (HRI), software resilience engineering, and joint human-machine intel analysis.","Contributed to development of experimental HRI testbed enabling low-overhead simulations of human-robot space operations.","Contributed experimental design of human-in-the-loop intelligence analysis study testing join human-machine team performance."]}],I=n(17);var M=n(23);var W,H=[{title:"Javascript",competency:4,category:["Web Development","Languages","Javascript"]},{title:"Node.JS",competency:3,category:["Web Development","Javascript"]},{title:"React",competency:3,category:["Web Development","Javascript"]},{title:"Bash",competency:2,category:["Tools","Languages"]},{title:"Amazon Web Services",competency:4,category:["Web Development","Tools"]},{title:"Heroku",competency:2,category:["Web Development","Tools"]},{title:"MongoDB",competency:3,category:["Web Development","Databases"]},{title:"ElasticSearch",competency:2,category:["Web Development","Databases"]},{title:"PostgreSQL/SQLite3/SQL",competency:4,category:["Web Development","Databases","Languages"]},{title:"Redis",competency:3,category:["Web Development","Databases"]},{title:"Data Mining",competency:3,category:["Data Science"]},{title:"Express.JS",competency:2,category:["Web Development","Javascript"]},{title:"D3",competency:2,category:["Web Development","Javascript"]},{title:"Flask",competency:2,category:["Web Development","Python"]},{title:"Git/Mercurial",competency:3,category:["Tools"]},{title:"Kubernetes",competency:2,category:["Tools","Data Engineering"]},{title:"Google Cloud Compute",competency:2,category:["Tools","Web Development"]},{title:"Numpy",competency:3,category:["Data Science","Data Engineering","Python"]},{title:"Numba",competency:2,category:["Data Science","Data Engineering","Python"]},{title:"Tensorflow + Keras",competency:3,category:["Data Science","Python"]},{title:"Jupyter",competency:3,category:["Data Science","Python"]},{title:"Typescript",competency:2,category:["Web Development","Languages","Javascript"]},{title:"HTML + SASS/SCSS/CSS",competency:3,category:["Web Development","Languages"]},{title:"Python",competency:5,category:["Languages","Python"]},{title:"C++",competency:2,category:["Languages"]},{title:"Julia",competency:2,category:["Languages"]},{title:"MATLAB",competency:2,category:["Languages"]},{title:"R",competency:2,category:["Languages"]},{title:"Data Visualization",competency:3,category:["Data Science","Javascript"]},{title:"GraphQL",competency:2,category:["Web Development","Databases"]},{title:"Pandas",competency:5,category:["Data Engineering","Data Science","Python"]},{title:"Matplotlib",competency:3,category:["Data Engineering","Data Science","Python"]},{title:"Scikit-Learn",competency:4,category:["Data Engineering","Data Science","Python"]},{title:"Hadoop",competency:2,category:["Data Engineering","Data Science"]},{title:"Spark",competency:2,category:["Data Engineering","Data Science"]},{title:"Dagster",competency:2,category:["Data Engineering","Python"]},{title:"Mypy",competency:3,category:["Python"]},{title:"Pylint",competency:4,category:["Data Engineering","Python"]}].map((function(e){return Object(v.a)(Object(v.a)({},e),{},{category:e.category.sort()})})),T=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],J=(W=new Set(H.reduce((function(e,t){var n=t.category;return e.concat(n)}),[])),function(e){if(Array.isArray(e))return Object(I.a)(e)}(W)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(W)||Object(M.a)(W)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort().map((function(e,t){return{name:e,color:T[t]}})),_=["Education","Experience","Skills","Courses","References"];t.default=function(){return Object(c.jsx)(a.a,{title:"Resume",description:"Jacob Keller's Resume. Ohio State University, Battelle Center for Science, Engineeering & Public Policy, Resilient Cognitive Solutions.",children:Object(c.jsxs)("article",{className:"post",id:"resume",children:[Object(c.jsx)("header",{children:Object(c.jsxs)("div",{className:"title",children:[Object(c.jsx)("h2",{"data-testid":"heading",children:Object(c.jsx)(r.b,{to:"resume",children:"Resume"})}),Object(c.jsx)("div",{className:"link-container",children:_.map((function(e){return Object(c.jsx)("h4",{children:Object(c.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),Object(c.jsx)(l,{data:R}),Object(c.jsx)(p,{data:L}),Object(c.jsx)(D,{skills:H,categories:J}),Object(c.jsx)(E,{data:A}),Object(c.jsx)(N,{})]})})}},53:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n(54);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},54:function(e,t,n){"use strict";function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return i}))}}]);
//# sourceMappingURL=6.7a554f72.chunk.js.map