(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[362],{7362:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>y});var n=r(5043),s=r(2582),a=r(6551),i=r(579);const u=t=>{let{label:e,link:r,value:n,format:s}=t;return(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{width:"70%",children:e}),(0,i.jsx)("td",{children:r?(0,i.jsx)("a",{href:r,children:s(n)}):s(n)})]})};u.defaultProps={format:t=>t,link:null,value:null};const c=u,o=t=>{let{data:e}=t;return(0,i.jsx)("table",{children:(0,i.jsx)("tbody",{children:e.map((t=>(0,i.jsx)(c,{format:t.format,label:t.label,link:t.link,value:t.value},t.label)))})})},l=()=>{const[t,e]=(0,n.useState)();return(0,n.useEffect)((()=>{const t=setInterval((()=>(()=>{const t=new Date("1998-08-26T06:08:00");e(((Date.now()-t)/31556925190.079998).toFixed(11))})()),25);return()=>{clearInterval(t)}}),[]),(0,i.jsx)(i.Fragment,{children:t})},h=[{key:"age",label:"Current age",value:(0,i.jsx)(l,{})},{key:"location",label:"Current city",value:"Houston, TX"},{key:"natparks",label:"Number of US National Parks visited",value:"13"},{key:"countries",label:"Countries visited",value:5}],d=()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h3",{children:"Some stats about me"}),(0,i.jsx)(o,{data:h})]});var f=r(446),$=r.n(f);const m=[{label:"Last updated at",key:"pushed_at",link:"https://github.com/jkeller52/personal-site/commits",format:t=>$()(t).format("MMMM DD, YYYY")},{label:"Lines of Javascript powering this website",value:"2115"},{label:"Site created",key:"pushed",value:"November 22, 2021"}],v=()=>{const[t,e]=(0,n.useState)(m),r=(0,n.useCallback)((async()=>{const t=await fetch("https://api.github.com/repos/jkeller52/personal-site"),r=await t.json();e(m.map((t=>({...t,value:Object.keys(r).includes(t.key)?r[t.key]:t.value}))))}),[]);return(0,n.useEffect)((()=>{r()}),[r]),(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{children:"Some stats about this site"}),(0,i.jsx)(o,{data:t})]})},y=()=>(0,i.jsx)(a.A,{title:"Stats",description:"Some statistics about Jacob and the site",children:(0,i.jsxs)("article",{className:"post",id:"stats",children:[(0,i.jsx)("header",{children:(0,i.jsx)("div",{className:"title",children:(0,i.jsx)("h2",{"data-testid":"heading",children:(0,i.jsx)(s.N_,{to:"/stats",children:"Stats"})})})}),(0,i.jsx)(d,{}),(0,i.jsx)(v,{})]})})},446:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,r=36e5,n="millisecond",s="second",a="minute",i="hour",u="day",c="week",o="month",l="quarter",h="year",d="date",f="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],r=t%100;return"["+t+(e[(r-20)%10]||e[r]||e[0])+"]"}},y=function(t,e,r){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(r)+t},p={s:y,z:function(t){var e=-t.utcOffset(),r=Math.abs(e),n=Math.floor(r/60),s=r%60;return(e<=0?"+":"-")+y(n,2,"0")+":"+y(s,2,"0")},m:function t(e,r){if(e.date()<r.date())return-t(r,e);var n=12*(r.year()-e.year())+(r.month()-e.month()),s=e.clone().add(n,o),a=r-s<0,i=e.clone().add(n+(a?-1:1),o);return+(-(n+(r-s)/(a?s-i:i-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:o,y:h,w:c,d:u,D:d,h:i,m:a,s:s,ms:n,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},M="en",b={};b[M]=v;var g="$isDayjsObject",D=function(t){return t instanceof x||!(!t||!t[g])},S=function t(e,r,n){var s;if(!e)return M;if("string"==typeof e){var a=e.toLowerCase();b[a]&&(s=a),r&&(b[a]=r,s=a);var i=e.split("-");if(!s&&i.length>1)return t(i[0])}else{var u=e.name;b[u]=e,s=u}return!n&&s&&(M=s),s||!n&&M},k=function(t,e){if(D(t))return t.clone();var r="object"==typeof e?e:{};return r.date=t,r.args=arguments,new x(r)},w=p;w.l=S,w.i=D,w.w=function(t,e){return k(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var x=function(){function v(t){this.$L=S(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[g]=!0}var y=v.prototype;return y.parse=function(t){this.$d=function(t){var e=t.date,r=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match($);if(n){var s=n[2]-1||0,a=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)):new Date(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)}}return new Date(e)}(t),this.init()},y.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},y.$utils=function(){return w},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(t,e){var r=k(t);return this.startOf(e)<=r&&r<=this.endOf(e)},y.isAfter=function(t,e){return k(t)<this.startOf(e)},y.isBefore=function(t,e){return this.endOf(e)<k(t)},y.$g=function(t,e,r){return w.u(t)?this[e]:this.set(r,t)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(t,e){var r=this,n=!!w.u(e)||e,l=w.p(t),f=function(t,e){var s=w.w(r.$u?Date.UTC(r.$y,e,t):new Date(r.$y,e,t),r);return n?s:s.endOf(u)},$=function(t,e){return w.w(r.toDate()[t].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(e)),r)},m=this.$W,v=this.$M,y=this.$D,p="set"+(this.$u?"UTC":"");switch(l){case h:return n?f(1,0):f(31,11);case o:return n?f(1,v):f(0,v+1);case c:var M=this.$locale().weekStart||0,b=(m<M?m+7:m)-M;return f(n?y-b:y+(6-b),v);case u:case d:return $(p+"Hours",0);case i:return $(p+"Minutes",1);case a:return $(p+"Seconds",2);case s:return $(p+"Milliseconds",3);default:return this.clone()}},y.endOf=function(t){return this.startOf(t,!1)},y.$set=function(t,e){var r,c=w.p(t),l="set"+(this.$u?"UTC":""),f=(r={},r[u]=l+"Date",r[d]=l+"Date",r[o]=l+"Month",r[h]=l+"FullYear",r[i]=l+"Hours",r[a]=l+"Minutes",r[s]=l+"Seconds",r[n]=l+"Milliseconds",r)[c],$=c===u?this.$D+(e-this.$W):e;if(c===o||c===h){var m=this.clone().set(d,1);m.$d[f]($),m.init(),this.$d=m.set(d,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f]($);return this.init(),this},y.set=function(t,e){return this.clone().$set(t,e)},y.get=function(t){return this[w.p(t)]()},y.add=function(n,l){var d,f=this;n=Number(n);var $=w.p(l),m=function(t){var e=k(f);return w.w(e.date(e.date()+Math.round(t*n)),f)};if($===o)return this.set(o,this.$M+n);if($===h)return this.set(h,this.$y+n);if($===u)return m(1);if($===c)return m(7);var v=(d={},d[a]=e,d[i]=r,d[s]=t,d)[$]||1,y=this.$d.getTime()+n*v;return w.w(y,this)},y.subtract=function(t,e){return this.add(-1*t,e)},y.format=function(t){var e=this,r=this.$locale();if(!this.isValid())return r.invalidDate||f;var n=t||"YYYY-MM-DDTHH:mm:ssZ",s=w.z(this),a=this.$H,i=this.$m,u=this.$M,c=r.weekdays,o=r.months,l=r.meridiem,h=function(t,r,s,a){return t&&(t[r]||t(e,n))||s[r].slice(0,a)},d=function(t){return w.s(a%12||12,t,"0")},$=l||function(t,e,r){var n=t<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(m,(function(t,n){return n||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return w.s(e.$y,4,"0");case"M":return u+1;case"MM":return w.s(u+1,2,"0");case"MMM":return h(r.monthsShort,u,o,3);case"MMMM":return h(o,u);case"D":return e.$D;case"DD":return w.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return h(r.weekdaysMin,e.$W,c,2);case"ddd":return h(r.weekdaysShort,e.$W,c,3);case"dddd":return c[e.$W];case"H":return String(a);case"HH":return w.s(a,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return $(a,i,!0);case"A":return $(a,i,!1);case"m":return String(i);case"mm":return w.s(i,2,"0");case"s":return String(e.$s);case"ss":return w.s(e.$s,2,"0");case"SSS":return w.s(e.$ms,3,"0");case"Z":return s}return null}(t)||s.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,d,f){var $,m=this,v=w.p(d),y=k(n),p=(y.utcOffset()-this.utcOffset())*e,M=this-y,b=function(){return w.m(m,y)};switch(v){case h:$=b()/12;break;case o:$=b();break;case l:$=b()/3;break;case c:$=(M-p)/6048e5;break;case u:$=(M-p)/864e5;break;case i:$=M/r;break;case a:$=M/e;break;case s:$=M/t;break;default:$=M}return f?$:w.a($)},y.daysInMonth=function(){return this.endOf(o).$D},y.$locale=function(){return b[this.$L]},y.locale=function(t,e){if(!t)return this.$L;var r=this.clone(),n=S(t,e,!0);return n&&(r.$L=n),r},y.clone=function(){return w.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},v}(),j=x.prototype;return k.prototype=j,[["$ms",n],["$s",s],["$m",a],["$H",i],["$W",u],["$M",o],["$y",h],["$D",d]].forEach((function(t){j[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),k.extend=function(t,e){return t.$i||(t(e,x,k),t.$i=!0),k},k.locale=S,k.isDayjs=D,k.unix=function(t){return k(1e3*t)},k.en=b[M],k.Ls=b,k.p={},k}()}}]);
//# sourceMappingURL=362.44910116.chunk.js.map