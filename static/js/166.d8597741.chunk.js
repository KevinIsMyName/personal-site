/*! For license information please see 166.d8597741.chunk.js.LICENSE.txt */
(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[166],{4166:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return S}});var n=r(2791),i=r(1523),o=r(480),a=r(184),s=function(t){var e=t.label,r=t.link,n=t.value,i=t.format;return(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{width:"70%",children:e}),(0,a.jsx)("td",{children:r?(0,a.jsx)("a",{href:r,children:i(n)}):i(n)})]})};s.defaultProps={format:function(t){return t},link:null,value:null};var u=s,c=function(t){var e=t.data;return(0,a.jsx)("table",{children:(0,a.jsx)("tbody",{children:e.map((function(t){return(0,a.jsx)(u,{format:t.format,label:t.label,link:t.link,value:t.value},t.label)}))})})},f=r(8152),h=function(){var t=(0,n.useState)(),e=(0,f.Z)(t,2),r=e[0],i=e[1];return(0,n.useEffect)((function(){var t=setInterval((function(){return function(){var t=new Date("1999-11-12T09:00:00");i(((Date.now()-t)/31556925190.079998).toFixed(11))}()}),25);return function(){clearInterval(t)}}),[]),(0,a.jsx)(a.Fragment,{children:r})},l=[{key:"age",label:"Current age",value:(0,a.jsx)(h,{})},{key:"countries",label:"Continents visited",value:"NA, EU, AS"},{key:"location",label:"Current city",value:"Philadelphia, PA"}],d=function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h3",{children:"Some stats about me"}),(0,a.jsx)(c,{data:l})]})};function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function v(){v=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},i=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(L){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var i=e&&e.prototype instanceof h?e:h,o=Object.create(i.prototype),a=new j(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(i,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===i)throw o;return D()}for(r.method=i,r.arg=o;;){var a=r.delegate;if(a){var s=x(a,r);if(s){if(s===f)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=c(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,a),o}function c(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(L){return{type:"throw",arg:L}}}t.wrap=u;var f={};function h(){}function l(){}function d(){}var y={};s(y,i,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(M([])));g&&g!==e&&r.call(g,i)&&(y=g);var w=d.prototype=h.prototype=Object.create(y);function $(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function n(i,o,a,s){var u=c(t[i],t,o);if("throw"!==u.type){var f=u.arg,h=f.value;return h&&"object"==p(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,a,s)}),(function(t){n("throw",t,a,s)})):e.resolve(h).then((function(t){f.value=t,a(f)}),(function(t){return n("throw",t,a,s)}))}s(u.arg)}var i;this._invoke=function(t,r){function o(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(o,o):o()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=c(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var i=n.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function M(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:D}}function D(){return{value:void 0,done:!0}}return l.prototype=d,s(w,"constructor",d),s(d,"constructor",l),l.displayName=s(d,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===l||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,s(t,a,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},$(b.prototype),s(b.prototype,o,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,i,o){void 0===o&&(o=Promise);var a=new b(u(e,r,n,i),o);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},$(w),s(w,a,"Generator"),s(w,i,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=M,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(s&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;O(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:M(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}var y=r(8683);function m(t,e,r,n,i,o,a){try{var s=t[o](a),u=s.value}catch(c){return void r(c)}s.done?e(u):Promise.resolve(u).then(n,i)}function g(t){return function(){var e=this,r=arguments;return new Promise((function(n,i){var o=t.apply(e,r);function a(t){m(o,n,i,a,s,"next",t)}function s(t){m(o,n,i,a,s,"throw",t)}a(void 0)}))}}var w=r(7892),$=r.n(w),b=[{label:"Last updated at",key:"pushed_at",link:"https://github.com/kevinismyname/personal-site/commits",format:function(t){return $()(t).format("MMMM DD, YYYY")}},{label:"Lines of Javascript powering this website",value:"2031",link:"https://github.com/mldangelo/personal-site/graphs/contributors"}],x=function(){var t=(0,n.useState)(b),e=(0,f.Z)(t,2),r=e[0],i=e[1],o=(0,n.useCallback)(g(v().mark((function t(){var e,r;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.github.com/repos/kevinismyname/personal-site");case 2:return e=t.sent,t.next=5,e.json();case 5:r=t.sent,i(b.map((function(t){return(0,y.Z)((0,y.Z)({},t),{},{value:Object.keys(r).includes(t.key)?r[t.key]:t.value})})));case 7:case"end":return t.stop()}}),t)}))),[]);return(0,n.useEffect)((function(){o()}),[o]),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{children:"Some stats about this site"}),(0,a.jsx)(c,{data:r})]})},S=function(){return(0,a.jsx)(o.Z,{title:"Stats",description:"Some statistics about Kevin Wu and kevinismyna.me",children:(0,a.jsxs)("article",{className:"post",id:"stats",children:[(0,a.jsx)("header",{children:(0,a.jsx)("div",{className:"title",children:(0,a.jsx)("h2",{"data-testid":"heading",children:(0,a.jsx)(i.rU,{to:"/stats",children:"Stats"})})})}),(0,a.jsx)(d,{}),(0,a.jsx)(x,{})]})})}},7892:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,r=36e5,n="millisecond",i="second",o="minute",a="hour",s="day",u="week",c="month",f="quarter",h="year",l="date",d="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,r){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(r)+t},g={s:m,z:function(t){var e=-t.utcOffset(),r=Math.abs(e),n=Math.floor(r/60),i=r%60;return(e<=0?"+":"-")+m(n,2,"0")+":"+m(i,2,"0")},m:function t(e,r){if(e.date()<r.date())return-t(r,e);var n=12*(r.year()-e.year())+(r.month()-e.month()),i=e.clone().add(n,c),o=r-i<0,a=e.clone().add(n+(o?-1:1),c);return+(-(n+(r-i)/(o?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:h,w:u,d:s,D:l,h:a,m:o,s:i,ms:n,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},w="en",$={};$[w]=y;var b=function(t){return t instanceof j},x=function t(e,r,n){var i;if(!e)return w;if("string"==typeof e){var o=e.toLowerCase();$[o]&&(i=o),r&&($[o]=r,i=o);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var s=e.name;$[s]=e,i=s}return!n&&i&&(w=i),i||!n&&w},S=function(t,e){if(b(t))return t.clone();var r="object"==typeof e?e:{};return r.date=t,r.args=arguments,new j(r)},O=g;O.l=x,O.i=b,O.w=function(t,e){return S(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var j=function(){function y(t){this.$L=x(t.locale,null,!0),this.parse(t)}var m=y.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,r=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(p);if(n){var i=n[2]-1||0,o=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===d)},m.isSame=function(t,e){var r=S(t);return this.startOf(e)<=r&&r<=this.endOf(e)},m.isAfter=function(t,e){return S(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<S(t)},m.$g=function(t,e,r){return O.u(t)?this[e]:this.set(r,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var r=this,n=!!O.u(e)||e,f=O.p(t),d=function(t,e){var i=O.w(r.$u?Date.UTC(r.$y,e,t):new Date(r.$y,e,t),r);return n?i:i.endOf(s)},p=function(t,e){return O.w(r.toDate()[t].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(e)),r)},v=this.$W,y=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(f){case h:return n?d(1,0):d(31,11);case c:return n?d(1,y):d(0,y+1);case u:var w=this.$locale().weekStart||0,$=(v<w?v+7:v)-w;return d(n?m-$:m+(6-$),y);case s:case l:return p(g+"Hours",0);case a:return p(g+"Minutes",1);case o:return p(g+"Seconds",2);case i:return p(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var r,u=O.p(t),f="set"+(this.$u?"UTC":""),d=(r={},r[s]=f+"Date",r[l]=f+"Date",r[c]=f+"Month",r[h]=f+"FullYear",r[a]=f+"Hours",r[o]=f+"Minutes",r[i]=f+"Seconds",r[n]=f+"Milliseconds",r)[u],p=u===s?this.$D+(e-this.$W):e;if(u===c||u===h){var v=this.clone().set(l,1);v.$d[d](p),v.init(),this.$d=v.set(l,Math.min(this.$D,v.daysInMonth())).$d}else d&&this.$d[d](p);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(n,f){var l,d=this;n=Number(n);var p=O.p(f),v=function(t){var e=S(d);return O.w(e.date(e.date()+Math.round(t*n)),d)};if(p===c)return this.set(c,this.$M+n);if(p===h)return this.set(h,this.$y+n);if(p===s)return v(1);if(p===u)return v(7);var y=(l={},l[o]=e,l[a]=r,l[i]=t,l)[p]||1,m=this.$d.getTime()+n*y;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,r=this.$locale();if(!this.isValid())return r.invalidDate||d;var n=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),o=this.$H,a=this.$m,s=this.$M,u=r.weekdays,c=r.months,f=function(t,r,i,o){return t&&(t[r]||t(e,n))||i[r].slice(0,o)},h=function(t){return O.s(o%12||12,t,"0")},l=r.meridiem||function(t,e,r){var n=t<12?"AM":"PM";return r?n.toLowerCase():n},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:O.s(s+1,2,"0"),MMM:f(r.monthsShort,s,c,3),MMMM:f(c,s),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:f(r.weekdaysMin,this.$W,u,2),ddd:f(r.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(o),HH:O.s(o,2,"0"),h:h(1),hh:h(2),a:l(o,a,!0),A:l(o,a,!1),m:String(a),mm:O.s(a,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return n.replace(v,(function(t,e){return e||p[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(n,l,d){var p,v=O.p(l),y=S(n),m=(y.utcOffset()-this.utcOffset())*e,g=this-y,w=O.m(this,y);return w=(p={},p[h]=w/12,p[c]=w,p[f]=w/3,p[u]=(g-m)/6048e5,p[s]=(g-m)/864e5,p[a]=g/r,p[o]=g/e,p[i]=g/t,p)[v]||g,d?w:O.a(w)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return $[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var r=this.clone(),n=x(t,e,!0);return n&&(r.$L=n),r},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},y}(),M=j.prototype;return S.prototype=M,[["$ms",n],["$s",i],["$m",o],["$H",a],["$W",s],["$M",c],["$y",h],["$D",l]].forEach((function(t){M[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),S.extend=function(t,e){return t.$i||(t(e,j,S),t.$i=!0),S},S.locale=x,S.isDayjs=b,S.unix=function(t){return S(1e3*t)},S.en=$[w],S.Ls=$,S.p={},S}()},8683:function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}r.d(e,{Z:function(){return o}})}}]);
//# sourceMappingURL=166.d8597741.chunk.js.map