(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[7],{175:function(t,e,n){"use strict";n.r(e);n(1);var i=n(5),s=n(20),r=n(72),a=n.n(r),o=n(0),c=function(t){var e=t.data;return Object(o.jsx)("div",{className:"cell-container",children:Object(o.jsxs)("article",{className:"mini-post",children:[Object(o.jsxs)("header",{children:[Object(o.jsx)("h3",{children:Object(o.jsx)("a",{href:e.link,children:e.title})}),Object(o.jsx)("time",{className:"published",children:a()(e.date).format("MMMM, YYYY")})]}),Object(o.jsx)("a",{href:e.link,className:"image",children:Object(o.jsx)("img",{src:"".concat("").concat(e.image),alt:e.title})}),Object(o.jsx)("div",{className:"description",children:Object(o.jsx)("p",{children:e.desc})})]})})},u=[{title:"A Critical Examination of Autonomous Flight Safety Systems from a Cognitive Systems Engineering Perspective: Challenges, Themes, and Outlying Risks",link:"https://journals.sagepub.com/doi/abs/10.1177/1071181321651248",subtitle:"Presented October 6 at the Human Factors and Ergonomics Society Annual Meeting",image:"/images/projects/faa-logo.png",date:"2021-10-06",desc:"Keller, J., IJtsma, M., & Newton, E. K. (2021) A Critical Examination of Autonomous Flight Safety Systems from a Cognitive Systems Engineering Perspective: Challenges, Themes, and Outlying Risks Jacob Keller. International Astronautical Congress, October, 25\u201329. A student project funded by the Federal Aviation Administration (FAA) aimed identifycomplexities, regulatory challenges, and emerging issues surrounding autononomous flight safety systems (AFSS) for commercial space launches.Interviews were conducted with over eighty commerical stakeholders in government and industry, culminatingin a whitepaper including both technical and policy recommendations.  Throughout the scope of this project, I noticed interesting connections between topics in cognitive systemsengineering and challenges/themes about AFSS. This sparked interest in writing a research paper based oninformation collected in interviews. The paper applies a transdisciplinary approach, providing background andcontext on autonomous flight safety systems before identifying key assumptions and engineering tradeoffs in its design"},{title:"Computational Approaches to Analyzing Resilience in Human-Machine Teams",link:"https://journals.sagepub.com/doi/abs/10.1177/1071181321651248",subtitle:"Presented October 6 at the Human Factors and Ergonomics Society Annual Meeting",image:"/images/projects/hfes2021.png",date:"2021-10-06",desc:"Keller, J., & IJtsma, M. (2021). Requirements For Computational Approaches To Analyzing Resilience In Human-Machine Teams. Human Factors and Ergonomics Society. Presented 10/6/2021 in Baltimore, Maryland, at the Human Factors and Ergonomics Society 65th Annual Meeting. https://doi.org/10.1177/1071181321651248Human-machine teams (HMTs) in complex work domains need to be able to adapt to variable and uncertain work demands.Computational modeling and simulation can provide novel approaches to the evaluation of HMTsperforming complex joint activities, affording large-scale, quantitative analysis of team characteristics(such as system architecture and governance protocols) and their effects on resilience. Drawing from literaturein resilience engineering, human-automation interaction, and cognitive systems engineering, this paper providesa theoretical exploration of the use of computational modeling and simulation to analyze resilience in HMTs.Findings from literature are summarized in a set of requirements that highlight key aspects of resilience inHMTs that need to be accounted for in future modeling and evaluation efforts."},{title:"Astrophotography in the Dominican Republic",subtitle:"April 2021 - Sony a6000",date:"2021-04-27",desc:"Built for a social impact hackathon. Camera: Sony a6000Lens: NEEWER 1.7f/35MM"}];e.default=function(){return Object(o.jsx)(s.a,{title:"Projects",description:"Learn about Jacob's projects.",children:Object(o.jsxs)("article",{className:"post",id:"projects",children:[Object(o.jsx)("header",{children:Object(o.jsxs)("div",{className:"title",children:[Object(o.jsx)("h2",{"data-testid":"heading",children:Object(o.jsx)(i.b,{to:"/projects",children:"Projects"})}),Object(o.jsx)("p",{children:"A selection of projects that I'm not too ashamed of"})]})}),u.map((function(t){return Object(o.jsx)(c,{data:t},t.title)}))]})})}},72:function(t,e,n){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,i="millisecond",s="second",r="minute",a="hour",o="day",c="week",u="month",h="quarter",l="year",d="date",f="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},y={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+$(i,2,"0")+":"+$(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(i,u),r=n-s<0,a=e.clone().add(i+(r?-1:1),u);return+(-(i+(n-s)/(r?s-a:a-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:u,y:l,w:c,d:o,D:d,h:a,m:r,s:s,ms:i,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v="en",M={};M[v]=p;var b=function(t){return t instanceof D},j=function(t,e,n){var i;if(!t)return v;if("string"==typeof t)M[t]&&(i=t),e&&(M[t]=e,i=t);else{var s=t.name;M[s]=t,i=s}return!n&&i&&(v=i),i||!n&&v},S=function(t,e){if(b(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new D(n)},O=y;O.l=j,O.i=b,O.w=function(t,e){return S(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var D=function(){function p(t){this.$L=j(t.locale,null,!0),this.parse(t)}var $=p.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(m);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return O},$.isValid=function(){return!(this.$d.toString()===f)},$.isSame=function(t,e){var n=S(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return S(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<S(t)},$.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,e){var n=this,i=!!O.u(e)||e,h=O.p(t),f=function(t,e){var s=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return i?s:s.endOf(o)},m=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},g=this.$W,p=this.$M,$=this.$D,y="set"+(this.$u?"UTC":"");switch(h){case l:return i?f(1,0):f(31,11);case u:return i?f(1,p):f(0,p+1);case c:var v=this.$locale().weekStart||0,M=(g<v?g+7:g)-v;return f(i?$-M:$+(6-M),p);case o:case d:return m(y+"Hours",0);case a:return m(y+"Minutes",1);case r:return m(y+"Seconds",2);case s:return m(y+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(t,e){var n,c=O.p(t),h="set"+(this.$u?"UTC":""),f=(n={},n[o]=h+"Date",n[d]=h+"Date",n[u]=h+"Month",n[l]=h+"FullYear",n[a]=h+"Hours",n[r]=h+"Minutes",n[s]=h+"Seconds",n[i]=h+"Milliseconds",n)[c],m=c===o?this.$D+(e-this.$W):e;if(c===u||c===l){var g=this.clone().set(d,1);g.$d[f](m),g.init(),this.$d=g.set(d,Math.min(this.$D,g.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[O.p(t)]()},$.add=function(i,h){var d,f=this;i=Number(i);var m=O.p(h),g=function(t){var e=S(f);return O.w(e.date(e.date()+Math.round(t*i)),f)};if(m===u)return this.set(u,this.$M+i);if(m===l)return this.set(l,this.$y+i);if(m===o)return g(1);if(m===c)return g(7);var p=(d={},d[r]=e,d[a]=n,d[s]=t,d)[m]||1,$=this.$d.getTime()+i*p;return O.w($,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var i=t||"YYYY-MM-DDTHH:mm:ssZ",s=O.z(this),r=this.$H,a=this.$m,o=this.$M,c=n.weekdays,u=n.months,h=function(t,n,s,r){return t&&(t[n]||t(e,i))||s[n].substr(0,r)},l=function(t){return O.s(r%12||12,t,"0")},d=n.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:O.s(o+1,2,"0"),MMM:h(n.monthsShort,o,u,3),MMMM:h(u,o),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,c,2),ddd:h(n.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(r),HH:O.s(r,2,"0"),h:l(1),hh:l(2),a:d(r,a,!0),A:d(r,a,!1),m:String(a),mm:O.s(a,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:s};return i.replace(g,(function(t,e){return e||m[t]||s.replace(":","")}))},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(i,d,f){var m,g=O.p(d),p=S(i),$=(p.utcOffset()-this.utcOffset())*e,y=this-p,v=O.m(this,p);return v=(m={},m[l]=v/12,m[u]=v,m[h]=v/3,m[c]=(y-$)/6048e5,m[o]=(y-$)/864e5,m[a]=y/n,m[r]=y/e,m[s]=y/t,m)[g]||y,f?v:O.a(v)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return M[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=j(t,e,!0);return i&&(n.$L=i),n},$.clone=function(){return O.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},p}(),w=D.prototype;return S.prototype=w,[["$ms",i],["$s",s],["$m",r],["$H",a],["$W",o],["$M",u],["$y",l],["$D",d]].forEach((function(t){w[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),S.extend=function(t,e){return t.$i||(t(e,D,S),t.$i=!0),S},S.locale=j,S.isDayjs=b,S.unix=function(t){return S(1e3*t)},S.en=M[v],S.Ls=M,S.p={},S}()}}]);
//# sourceMappingURL=7.edc47d65.chunk.js.map