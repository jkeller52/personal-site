(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[7],{175:function(t,e,n){"use strict";n.r(e);n(1);var i=n(5),r=n(20),s=n(72),a=n.n(s),o=n(0),c=function(t){var e=t.data;return Object(o.jsx)("div",{className:"cell-container",children:Object(o.jsxs)("article",{className:"mini-post",children:[Object(o.jsxs)("header",{children:[Object(o.jsx)("h3",{children:Object(o.jsx)("a",{href:e.link,children:e.title})}),Object(o.jsx)("time",{className:"published",children:a()(e.date).format("MMMM, YYYY")})]}),Object(o.jsx)("a",{href:e.link,className:"image",children:Object(o.jsx)("img",{src:"".concat("").concat(e.image),alt:e.title})}),Object(o.jsx)("div",{className:"description",children:Object(o.jsx)("p",{children:e.desc})})]})})},u=[{title:"A Critical Examination of Autonomous Flight Safety Systems from a Cognitive Systems Engineering Perspective: Challenges, Themes, and Outlying Risks",link:"https://journals.sagepub.com/doi/abs/10.1177/1071181321651248",subtitle:"Presented October 6 at the Human Factors and Ergonomics Society Annual Meeting",image:"/images/projects/nearestdollar.jpg",date:"2021-10-06",desc:"Keller, J., IJtsma, M., & Newton, E. K. (2021) A Critical Examination of Autonomous Flight Safety Systems from a Cognitive Systems Engineering Perspective: Challenges, Themes, and Outlying Risks Jacob Keller. International Astronautical Congress, October, 25\u201329. A student project funded by the Federal Aviation Administration (FAA) aimed identifycomplexities, regulatory challenges, and emerging issues surrounding autononomous flight safety systems (AFSS) for commercial space launches.Interviews were conducted with over eighty commerical stakeholders in government and industry, culminatingin a whitepaper including both technical and policy recommendations.  Throughout the scope of this project, I noticed interesting connections between topics in cognitive systemsengineering and challenges/themes about AFSS. This sparked interest in writing a research paper based oninformation collected in interviews. The paper applies a transdisciplinary approach, providing background andcontext on autonomous flight safety systems before identifying key assumptions and engineering tradeoffs in its design"},{title:"Computational Approaches to Analyzing Resilience in Human-Machine Teams",link:"https://journals.sagepub.com/doi/abs/10.1177/1071181321651248",subtitle:"Presented October 6 at the Human Factors and Ergonomics Society Annual Meeting",image:"/images/projects/nearestdollar.jpg",date:"2021-10-06",desc:"Keller, J., & IJtsma, M. (2021). Requirements For Computational Approaches To Analyzing Resilience In Human-Machine Teams. Human Factors and Ergonomics Society. Presented 10/6/2021 in Baltimore, Maryland, at the Human Factors and Ergonomics Society 65th Annual Meeting. https://doi.org/10.1177/1071181321651248Human-machine teams (HMTs) in complex work domains need to be able to adapt to variable and uncertain work demands.Computational modeling and simulation can provide novel approaches to the evaluation of HMTsperforming complex joint activities, affording large-scale, quantitative analysis of team characteristics(such as system architecture and governance protocols) and their effects on resilience. Drawing from literaturein resilience engineering, human-automation interaction, and cognitive systems engineering, this paper providesa theoretical exploration of the use of computational modeling and simulation to analyze resilience in HMTs.Findings from literature are summarized in a set of requirements that highlight key aspects of resilience inHMTs that need to be accounted for in future modeling and evaluation efforts."},{title:"Astrophotography in the Dominican Republic",subtitle:"April 2021 - Sony a6000",date:"2021-04-27",desc:"Built for a social impact hackathon. Camera: Sony a6000Lens: NEEWER 1.7f/35MM"},{title:"Autonomous Flight Safety Systems Student Project",subtitle:"Won 3rd. place in 2015 Techcrunch Disrupt SF Hackathon",link:"https://devpost.com/software/harvest",date:"2020-05-01",desc:"Won ~ $7000 in prizes for an advanced, low cost monitoring solution for crops. Harvest was designed to catch irrigation leaks, overwatering, and nutrient deficiencies at an affordable price for the developing world."},{title:"piGUI",subtitle:"A beginner friendly IoT Touchscreen device using Python and shell scripts.",date:"2021-01-20",desc:"Built for a social impact hackathon. NearestDollar connected to your bank accounts, credit cards, or debit cards and rounded up your purchases to donate the balance to the charity of your choice."},{title:"Software Resilience Engineering Literature Search",subtitle:"A kickstarter funded potato powered weather balloon.",date:"2015-06-28",desc:"Launched a potato battery powered weather balloon with two cameras and gps transponder. Resulting photos were published in a coffee table book. You can email me for a copy."}];e.default=function(){return Object(o.jsx)(r.a,{title:"Projects",description:"Learn about Jacob's projects.",children:Object(o.jsxs)("article",{className:"post",id:"projects",children:[Object(o.jsx)("header",{children:Object(o.jsxs)("div",{className:"title",children:[Object(o.jsx)("h2",{"data-testid":"heading",children:Object(o.jsx)(i.b,{to:"/projects",children:"Projects"})}),Object(o.jsx)("p",{children:"A selection of projects that I'm not too ashamed of"})]})}),u.map((function(t){return Object(o.jsx)(c,{data:t},t.title)}))]})})}},72:function(t,e,n){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,i="millisecond",r="second",s="minute",a="hour",o="day",c="week",u="month",l="quarter",d="year",h="date",f="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},y=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},$={s:y,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),r=n%60;return(e<=0?"+":"-")+y(i,2,"0")+":"+y(r,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),r=e.clone().add(i,u),s=n-r<0,a=e.clone().add(i+(s?-1:1),u);return+(-(i+(n-r)/(s?r-a:a-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:u,y:d,w:c,d:o,D:h,h:a,m:s,s:r,ms:i,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},b="en",v={};v[b]=g;var M=function(t){return t instanceof O},j=function(t,e,n){var i;if(!t)return b;if("string"==typeof t)v[t]&&(i=t),e&&(v[t]=e,i=t);else{var r=t.name;v[r]=t,i=r}return!n&&i&&(b=i),i||!n&&b},S=function(t,e){if(M(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new O(n)},w=$;w.l=j,w.i=M,w.w=function(t,e){return S(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var O=function(){function g(t){this.$L=j(t.locale,null,!0),this.parse(t)}var y=g.prototype;return y.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(m);if(i){var r=i[2]-1||0,s=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},y.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},y.$utils=function(){return w},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(t,e){var n=S(t);return this.startOf(e)<=n&&n<=this.endOf(e)},y.isAfter=function(t,e){return S(t)<this.startOf(e)},y.isBefore=function(t,e){return this.endOf(e)<S(t)},y.$g=function(t,e,n){return w.u(t)?this[e]:this.set(n,t)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(t,e){var n=this,i=!!w.u(e)||e,l=w.p(t),f=function(t,e){var r=w.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return i?r:r.endOf(o)},m=function(t,e){return w.w(n.toDate()[t].apply(n.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},p=this.$W,g=this.$M,y=this.$D,$="set"+(this.$u?"UTC":"");switch(l){case d:return i?f(1,0):f(31,11);case u:return i?f(1,g):f(0,g+1);case c:var b=this.$locale().weekStart||0,v=(p<b?p+7:p)-b;return f(i?y-v:y+(6-v),g);case o:case h:return m($+"Hours",0);case a:return m($+"Minutes",1);case s:return m($+"Seconds",2);case r:return m($+"Milliseconds",3);default:return this.clone()}},y.endOf=function(t){return this.startOf(t,!1)},y.$set=function(t,e){var n,c=w.p(t),l="set"+(this.$u?"UTC":""),f=(n={},n[o]=l+"Date",n[h]=l+"Date",n[u]=l+"Month",n[d]=l+"FullYear",n[a]=l+"Hours",n[s]=l+"Minutes",n[r]=l+"Seconds",n[i]=l+"Milliseconds",n)[c],m=c===o?this.$D+(e-this.$W):e;if(c===u||c===d){var p=this.clone().set(h,1);p.$d[f](m),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},y.set=function(t,e){return this.clone().$set(t,e)},y.get=function(t){return this[w.p(t)]()},y.add=function(i,l){var h,f=this;i=Number(i);var m=w.p(l),p=function(t){var e=S(f);return w.w(e.date(e.date()+Math.round(t*i)),f)};if(m===u)return this.set(u,this.$M+i);if(m===d)return this.set(d,this.$y+i);if(m===o)return p(1);if(m===c)return p(7);var g=(h={},h[s]=e,h[a]=n,h[r]=t,h)[m]||1,y=this.$d.getTime()+i*g;return w.w(y,this)},y.subtract=function(t,e){return this.add(-1*t,e)},y.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var i=t||"YYYY-MM-DDTHH:mm:ssZ",r=w.z(this),s=this.$H,a=this.$m,o=this.$M,c=n.weekdays,u=n.months,l=function(t,n,r,s){return t&&(t[n]||t(e,i))||r[n].substr(0,s)},d=function(t){return w.s(s%12||12,t,"0")},h=n.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:w.s(o+1,2,"0"),MMM:l(n.monthsShort,o,u,3),MMMM:l(u,o),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,c,2),ddd:l(n.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(s),HH:w.s(s,2,"0"),h:d(1),hh:d(2),a:h(s,a,!0),A:h(s,a,!1),m:String(a),mm:w.s(a,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:r};return i.replace(p,(function(t,e){return e||m[t]||r.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(i,h,f){var m,p=w.p(h),g=S(i),y=(g.utcOffset()-this.utcOffset())*e,$=this-g,b=w.m(this,g);return b=(m={},m[d]=b/12,m[u]=b,m[l]=b/3,m[c]=($-y)/6048e5,m[o]=($-y)/864e5,m[a]=$/n,m[s]=$/e,m[r]=$/t,m)[p]||$,f?b:w.a(b)},y.daysInMonth=function(){return this.endOf(u).$D},y.$locale=function(){return v[this.$L]},y.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=j(t,e,!0);return i&&(n.$L=i),n},y.clone=function(){return w.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},g}(),D=O.prototype;return S.prototype=D,[["$ms",i],["$s",r],["$m",s],["$H",a],["$W",o],["$M",u],["$y",d],["$D",h]].forEach((function(t){D[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),S.extend=function(t,e){return t.$i||(t(e,O,S),t.$i=!0),S},S.locale=j,S.isDayjs=M,S.unix=function(t){return S(1e3*t)},S.en=v[b],S.Ls=v,S.p={},S}()}}]);
//# sourceMappingURL=7.15e21100.chunk.js.map