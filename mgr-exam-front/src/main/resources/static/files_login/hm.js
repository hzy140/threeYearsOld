(function(){var h={},mt={},c={id:"b79c0eb9e5f2f0a322ac48a6164b793b",dm:["kgc.cn"],js:"tongji.baidu.com/hm-web/js/",etrk:[],cetrk:[],icon:'',ctrk:false,align:-1,nv:-1,vdur:1800000,age:31536000000,rec:0,rp:[],trust:1,vcard:8164972,qiao:0,lxb:0,kbtrk:0,pt:0,spa:0,aet:'',hca:'D585066FB5635383',conv:0,med:0,cvcc:'',cvcf:[],apps:''};var r=void 0,t=!0,u=null,w=!1;mt.cookie={};mt.cookie.set=function(b,a,f){var d;f.J&&(d=new Date,d.setTime(d.getTime()+f.J));document.cookie=b+"="+a+(f.domain?"; domain="+f.domain:"")+(f.path?"; path="+f.path:"")+(d?"; expires="+d.toGMTString():"")+(f.$b?"; secure":"")};mt.cookie.get=function(b){return(b=RegExp("(^| )"+b+"=([^;]*)(;|$)").exec(document.cookie))?b[2]:u};
mt.cookie.yb=function(b,a){try{var f="Hm_ck_"+ +new Date;mt.cookie.set(f,"is-cookie-enabled",{domain:b,path:a,J:r});var d="is-cookie-enabled"===mt.cookie.get(f)?"1":"0";mt.cookie.set(f,"",{domain:b,path:a,J:-1});return d}catch(g){return"0"}};mt.lang={};mt.lang.e=function(b,a){return"[object "+a+"]"==={}.toString.call(b)};mt.lang.Da=function(b){return mt.lang.e(b,"Number")&&isFinite(b)};mt.lang.ka=function(){return mt.lang.e(c.aet,"String")};
mt.lang.g=function(b){return b.replace?b.replace(/'/g,"'0").replace(/\*/g,"'1").replace(/!/g,"'2"):b};mt.lang.trim=function(b){return b.replace(/^\s+|\s+$/g,"")};mt.lang.H=function(b,a){var f=w;if(b==u||!mt.lang.e(b,"Array")||a===r)return f;if(Array.prototype.indexOf)f=-1!==b.indexOf(a);else for(var d=0;d<b.length;d++)if(b[d]===a){f=t;break}return f};
(function(){var b=mt.lang;mt.f={};mt.f.ea=function(a){return document.getElementById(a)};mt.f.fb=function(a){if(!a)return u;try{a=String(a);if(0===a.indexOf("!HMCC!"))return document.querySelector(a.substring(6,a.length));for(var b=a.split(">"),d=document.body,g=b.length-1;0<=g;g--)if(-1<b[g].indexOf("#")){var e=b[g].split("#")[1];(d=document.getElementById(e))||(d=document.getElementById(decodeURIComponent(e)));b=b.splice(g+1,b.length-(g+1));break}for(a=0;d&&a<b.length;){var n=String(b[a]).toLowerCase();
if(!("html"===n||"body"===n)){var g=0,l=b[a].match(/\[(\d+)\]/i),e=[];if(l)g=l[1]-1,n=n.split("[")[0];else if(1!==d.childNodes.length){for(var p=0,s=0,m=d.childNodes.length;s<m;s++){var k=d.childNodes[s];1===k.nodeType&&k.nodeName.toLowerCase()===n&&p++;if(1<p)return u}if(1!==p)return u}for(p=0;p<d.childNodes.length;p++)1===d.childNodes[p].nodeType&&d.childNodes[p].nodeName.toLowerCase()===n&&e.push(d.childNodes[p]);if(!e[g])return u;d=e[g]}a++}return d}catch(v){return u}};mt.f.ha=function(a,b){var d=
[],g=[];if(!a)return g;for(;a.parentNode!=u;){for(var e=0,n=0,l=a.parentNode.childNodes.length,p=0;p<l;p++){var s=a.parentNode.childNodes[p];if(s.nodeName===a.nodeName&&(e++,s===a&&(n=e),0<n&&1<e))break}if((l=""!==a.id)&&b){d.unshift("#"+encodeURIComponent(a.id));break}else l&&(l="#"+encodeURIComponent(a.id),l=0<d.length?l+">"+d.join(">"):l,g.push(l)),d.unshift(encodeURIComponent(String(a.nodeName).toLowerCase())+(1<e?"["+n+"]":""));a=a.parentNode}g.push(d.join(">"));return g};mt.f.lb=function(a){return(a=
mt.f.ha(a,t))&&a.length?String(a[0]):""};mt.f.jb=function(a){return mt.f.ha(a,w)};mt.f.Ub=function(a,b){for(b=b.toUpperCase();(a=a.parentNode)&&1==a.nodeType;)if(a.tagName==b)return a;return u};mt.f.eb=function(a){return 9===a.nodeType?a:a.ownerDocument||a.document};mt.f.Vb=function(a){var b={top:0,left:0};if(!a)return b;var d=mt.f.eb(a).documentElement;"undefined"!==typeof a.getBoundingClientRect&&(b=a.getBoundingClientRect());return{top:b.top+(window.pageYOffset||d.scrollTop)-(d.clientTop||0),left:b.left+
(window.pageXOffset||d.scrollLeft)-(d.clientLeft||0)}};mt.f.getAttribute=function(a,b){var d=a.getAttribute&&a.getAttribute(b)||u;if(!d&&a.attributes&&a.attributes.length)for(var g=a.attributes,e=g.length,n=0;n<e;n++)g[n].nodeName===b&&(d=g[n].nodeValue);return d};mt.f.S=function(a){var b="document";a.tagName!==r&&(b=a.tagName);return b.toLowerCase()};mt.f.nb=function(a){var f="";a.textContent?f=b.trim(a.textContent):a.innerText&&(f=b.trim(a.innerText));f&&(f=f.replace(/\s+/g," ").substring(0,255));
return f};mt.f.ya=function(a,f){var d=mt.f.S(a);"input"===d&&f&&("button"===a.type||"submit"===a.type)?d=b.trim(a.value)||"":"input"===d&&!f&&"password"!==a.type?d=b.trim(a.value)||"":"img"===d?(d=mt.f.getAttribute,d=d(a,"alt")||d(a,"title")||d(a,"src")):d="body"===d||"html"===d?["(hm-default-content-for-",d,")"].join(""):mt.f.nb(a);return String(d).substring(0,255)};(function(){(mt.f.Ia=function(){function a(){if(!a.V){a.V=t;for(var d=0,b=g.length;d<b;d++)g[d]()}}function b(){try{document.documentElement.doScroll("left")}catch(d){setTimeout(b,
1);return}a()}var d=w,g=[],e;document.addEventListener?e=function(){document.removeEventListener("DOMContentLoaded",e,w);a()}:document.attachEvent&&(e=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",e),a())});(function(){if(!d)if(d=t,"complete"===document.readyState)a.V=t;else if(document.addEventListener)document.addEventListener("DOMContentLoaded",e,w),window.addEventListener("load",a,w);else if(document.attachEvent){document.attachEvent("onreadystatechange",
e);window.attachEvent("onload",a);var g=w;try{g=window.frameElement==u}catch(l){}document.documentElement.doScroll&&g&&b()}})();return function(d){a.V?d():g.push(d)}}()).V=w})();return mt.f})();mt.event={};mt.event.d=function(b,a,f){b.attachEvent?b.attachEvent("on"+a,function(a){f.call(b,a)}):b.addEventListener&&b.addEventListener(a,f,w)};mt.event.preventDefault=function(b){b.preventDefault?b.preventDefault():b.returnValue=w};
(function(){var b=mt.event;mt.i={};mt.i.Ca=/msie (\d+\.\d+)/i.test(navigator.userAgent);mt.i.wb=/msie (\d+\.\d+)/i.test(navigator.userAgent)?document.documentMode||+RegExp.$1:r;mt.i.cookieEnabled=navigator.cookieEnabled;mt.i.javaEnabled=navigator.javaEnabled();mt.i.language=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage||"";mt.i.Db=(window.screen.width||0)+"x"+(window.screen.height||0);mt.i.colorDepth=window.screen.colorDepth||0;mt.i.T=function(){var a;
a=a||document;return parseInt(window.pageYOffset||a.documentElement.scrollTop||a.body&&a.body.scrollTop||0,10)};mt.i.L=function(){var a=document;return parseInt(window.innerHeight||a.documentElement.clientHeight||a.body&&a.body.clientHeight||0,10)};mt.i.orientation=0;(function(){function a(){var a=0;window.orientation!==r&&(a=window.orientation);screen&&(screen.orientation&&screen.orientation.angle!==r)&&(a=screen.orientation.angle);mt.i.orientation=a}a();b.d(window,"orientationchange",a)})();return mt.i})();
mt.o={};mt.o.parse=function(b){return(new Function("return ("+b+")"))()};
mt.o.stringify=function(){function b(a){/["\\\x00-\x1f]/.test(a)&&(a=a.replace(/["\\\x00-\x1f]/g,function(a){var d=f[a];if(d)return d;d=a.charCodeAt();return"\\u00"+Math.floor(d/16).toString(16)+(d%16).toString(16)}));return'"'+a+'"'}function a(a){return 10>a?"0"+a:a}var f={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(d){switch(typeof d){case "undefined":return"undefined";case "number":return isFinite(d)?String(d):"null";case "string":return b(d);case "boolean":return String(d);
default:if(d===u)return"null";if(d instanceof Array){var g=["["],e=d.length,f,l,p;for(l=0;l<e;l++)switch(p=d[l],typeof p){case "undefined":case "function":case "unknown":break;default:f&&g.push(","),g.push(mt.o.stringify(p)),f=1}g.push("]");return g.join("")}if(d instanceof Date)return'"'+d.getFullYear()+"-"+a(d.getMonth()+1)+"-"+a(d.getDate())+"T"+a(d.getHours())+":"+a(d.getMinutes())+":"+a(d.getSeconds())+'"';f=["{"];l=mt.o.stringify;for(e in d)if(Object.prototype.hasOwnProperty.call(d,e))switch(p=
d[e],typeof p){case "undefined":case "unknown":case "function":break;default:g&&f.push(","),g=1,f.push(l(e)+":"+l(p))}f.push("}");return f.join("")}}}();mt.localStorage={};mt.localStorage.Y=function(){if(!mt.localStorage.l)try{mt.localStorage.l=document.createElement("input"),mt.localStorage.l.type="hidden",mt.localStorage.l.style.display="none",mt.localStorage.l.addBehavior("#default#userData"),document.getElementsByTagName("head")[0].appendChild(mt.localStorage.l)}catch(b){return w}return t};
mt.localStorage.set=function(b,a,f){var d=new Date;d.setTime(d.getTime()+f||31536E6);try{window.localStorage?(a=d.getTime()+"|"+a,window.localStorage.setItem(b,a)):mt.localStorage.Y()&&(mt.localStorage.l.expires=d.toUTCString(),mt.localStorage.l.load(document.location.hostname),mt.localStorage.l.setAttribute(b,a),mt.localStorage.l.save(document.location.hostname))}catch(g){}};
mt.localStorage.get=function(b){if(window.localStorage){if(b=window.localStorage.getItem(b)){var a=b.indexOf("|"),f=b.substring(0,a)-0;if(f&&f>(new Date).getTime())return b.substring(a+1)}}else if(mt.localStorage.Y())try{return mt.localStorage.l.load(document.location.hostname),mt.localStorage.l.getAttribute(b)}catch(d){}return u};
mt.localStorage.remove=function(b){if(window.localStorage)window.localStorage.removeItem(b);else if(mt.localStorage.Y())try{mt.localStorage.l.load(document.location.hostname),mt.localStorage.l.removeAttribute(b),mt.localStorage.l.save(document.location.hostname)}catch(a){}};mt.sessionStorage={};mt.sessionStorage.set=function(b,a){try{window.sessionStorage&&window.sessionStorage.setItem(b,a)}catch(f){}};
mt.sessionStorage.get=function(b){try{return window.sessionStorage?window.sessionStorage.getItem(b):u}catch(a){return u}};mt.sessionStorage.remove=function(b){try{window.sessionStorage&&window.sessionStorage.removeItem(b)}catch(a){}};mt.La={};mt.La.log=function(b,a){var f=new Image,d="mini_tangram_log_"+Math.floor(2147483648*Math.random()).toString(36);window[d]=f;f.onload=function(){f.onload=u;f=window[d]=u;a&&a(b)};f.src=b};mt.pa={};
mt.pa.ob=function(){var b="";if(navigator.plugins&&navigator.mimeTypes.length){var a=navigator.plugins["Shockwave Flash"];a&&a.description&&(b=a.description.replace(/^.*\s+(\S+)\s+\S+$/,"$1"))}else if(window.ActiveXObject)try{if(a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(b=a.GetVariable("$version"))&&(b=b.replace(/^.*\s+(\d+),(\d+).*$/,"$1.$2"))}catch(f){}return b};
mt.pa.Tb=function(b,a,f,d,g){return'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="'+b+'" width="'+f+'" height="'+d+'"><param name="movie" value="'+a+'" /><param name="flashvars" value="'+(g||"")+'" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="'+b+'" width="'+f+'" height="'+d+'" src="'+a+'" flashvars="'+(g||"")+'" allowscriptaccess="always" /></object>'};mt.url={};
mt.url.m=function(b,a){var f=b.match(RegExp("(^|&|\\?|#)("+a+")=([^&#]*)(&|$|#)",""));return f?f[3]:u};mt.url.Wb=function(b){return(b=b.match(/^(https?:)\/\//))?b[1]:u};mt.url.hb=function(b){return(b=b.match(/^(https?:\/\/)?([^\/\?#]*)/))?b[2].replace(/.*@/,""):u};mt.url.K=function(b){return(b=mt.url.hb(b))?b.replace(/:\d+$/,""):b};mt.url.ha=function(b){return(b=b.match(/^(https?:\/\/)?[^\/]*(.*)/))?b[2].replace(/[\?#].*/,"").replace(/^$/,"/"):u};
(function(){function b(){for(var a=w,b=document.getElementsByTagName("script"),d=b.length,d=100<d?100:d,g=0;g<d;g++){var e=b[g].src;if(e&&0===e.indexOf("https://hm.baidu.com/h")){a=t;break}}return a}return h.bb=b})();var A=h.bb;
h.s={Xb:"http://tongji.baidu.com/hm-web/welcome/ico",Ha:"hm.baidu.com/hm.gif",Sa:/^(tongji|hmcdn).baidu.com$/,Na:"tongji.baidu.com",tb:"hmmd",ub:"hmpl",Nb:"utm_medium",rb:"hmkw",Pb:"utm_term",pb:"hmci",Mb:"utm_content",vb:"hmsr",Ob:"utm_source",qb:"hmcu",Lb:"utm_campaign",I:0,F:Math.round(+new Date/1E3),protocol:"https:"===document.location.protocol?"https:":"http:",ma:A()||"https:"===document.location.protocol?"https:":"http:",Yb:0,Rb:6E5,zb:6E5,Zb:5E3,Sb:5,ba:1024,Qb:1,O:2147483647,Ma:"hca kb cc cf ci ck cl cm cp cu cw ds vl ep et fl ja ln lo lt rnd si su v cv lv api sn p ct u tt hh".split(" "),
M:t,va:["a","input","button"],Ua:{id:"data-hm-id",aa:"data-hm-class",sa:"data-hm-xpath",content:"data-hm-content",qa:"data-hm-tag",link:"data-hm-link"},ua:"data-hm-enabled",ta:"data-hm-disabled",Ab:"https://hmcdn.baidu.com/static/tongji/plugins/",Ga:["UrlChangeTracker"]};(function(){var b={B:{},d:function(a,b){this.B[a]=this.B[a]||[];this.B[a].push(b)},G:function(a,b){this.B[a]=this.B[a]||[];for(var d=this.B[a].length,g=0;g<d;g++)this.B[a][g](b)}};return h.A=b})();
(function(){function b(b,d){var g=document.createElement("script");g.charset="utf-8";a.e(d,"Function")&&(g.readyState?g.onreadystatechange=function(){if("loaded"===g.readyState||"complete"===g.readyState)g.onreadystatechange=u,d()}:g.onload=function(){d()});g.src=b;var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(g,e)}var a=mt.lang;return h.load=b})();
(function(){function b(){var d="";if(h.b.c.nv){d=encodeURIComponent(document.referrer);try{window.sessionStorage?f.set("Hm_from_"+c.id,d):a.set("Hm_from_"+c.id,d,864E5)}catch(b){}}else try{d=(window.sessionStorage?f.get("Hm_from_"+c.id):a.get("Hm_from_"+c.id))||""}catch(e){}return d}var a=mt.localStorage,f=mt.sessionStorage;return h.cb=b})();
(function(){var b=mt.lang,a=mt.f,f={Q:function(b,g){return function(e){var n=e.target||e.srcElement;if(n){var l=n.getAttribute(b.X);e=e.clientX+":"+e.clientY;if(l&&l===e)n.removeAttribute(b.X);else if(g&&0<g.length&&(n=a.jb(n))&&n.length)if(l=n.length,e=n[n.length-1],1E4>l*e.split(">").length)for(e=0;e<l;e++)f.Ka(b,n[e]);else f.Ka(b,e)}}},Ka:function(a,g){for(var e={},f=String(g).split(">").length,l=0;l<f;l++)e[g]="",g=g.substring(0,g.lastIndexOf(">"));a&&(b.e(a,"Object")&&a.wa)&&a.wa(e)},Bb:function(a,
b){return function(e){(e.target||e.srcElement).setAttribute(a.X,e.clientX+":"+e.clientY);a&&a.r&&(b?a.r(b):a.r("#"+encodeURIComponent(this.id),e.type))}}};return h.da=f})();
(function(){var b=mt.f,a=mt.o,f=mt.event,d=mt.lang,g=h.da,e={X:"HM_ce",Oa:function(){if(c.cetrk&&c.cetrk.length){f.d(document,"click",g.Q(e,c.cetrk));for(var d=0,l=c.cetrk.length;d<l;d++){var p;try{p=a.parse(decodeURIComponent(String(c.cetrk[d])))}catch(s){p={}}var m=p.p||"";-1===m.indexOf(">")&&(0===m.indexOf("#")&&(m=m.substring(1)),(m=b.ea(m))&&f.d(m,"click",g.Bb(e,p)))}}},wa:function(b){if(c.cetrk&&c.cetrk.length)for(var d=0,g=c.cetrk.length;d<g;d++){var f;try{f=a.parse(decodeURIComponent(String(c.cetrk[d])))}catch(m){f=
{}}b.hasOwnProperty(f.p)&&e.r(f)}},r:function(a){h.b.c.et=7;var g=a&&a.k||"",g=d.g(g),e=[];if(a&&a.a&&d.e(a.a,"Object"))for(var f in a.a)if(a.a.hasOwnProperty(f)){e.push(d.g(f));var m=b.fb(a.a[f]||""),m=m?b.ya(m,w):"";e.push(d.g(m))}a="";e.length&&(a="*"+e.join("*"));h.b.c.ep="ce!_iden*"+g+a;h.b.j()}};h.A.d("pv-b",e.Oa);return e})();
(function(){var b=mt.lang,a=mt.f,f=mt.event,d=mt.i,g=h.s,e=h.A,n=+new Date,l=[],p={Q:function(){return function(d){if(h.b&&h.b.M&&c.aet&&c.aet.length){var e=d.target||d.srcElement;if(e){var k=h.b.va,f=a.getAttribute(e,g.ua)!=u?t:w;if(a.getAttribute(e,g.ta)==u)if(f)p.Z(p.ga(e,d));else{var y=a.S(e);if(b.H(k,"*")||b.H(k,y))p.Z(p.ga(e,d));else for(;e.parentNode!=u;){var f=e.parentNode,y=a.S(f),q="a"===y&&b.H(k,"a")?t:w,y="button"===y&&b.H(k,"button")?t:w,x=a.getAttribute(f,g.ua)!=u?t:w;if(a.getAttribute(f,
g.ta)==u&&(q||y||x)){p.Z(p.ga(f,d));break}e=e.parentNode}}}}}},ga:function(e,f){var k={},v=g.Ua;k.id=a.getAttribute(e,v.id)||a.getAttribute(e,"id")||"";k.aa=a.getAttribute(e,v.aa)||a.getAttribute(e,"class")||"";k.sa=a.getAttribute(e,v.sa)||a.lb(e);k.content=a.getAttribute(e,v.content)||a.ya(e,t);k.qa=a.getAttribute(e,v.qa)||a.S(e);k.link=a.getAttribute(e,v.link)||a.getAttribute(e,"href")||"";k.type=f.type||"click";v=b.Da(e.offsetTop)?e.offsetTop:0;"click"===f.type?v=d.Ca?f.clientY+Math.max(document.documentElement.scrollTop,
document.body.scrollTop):f.pageY:"touchend"===f.type&&(f.na&&b.e(f.na.changedTouches,"Array")&&f.na.changedTouches.length)&&(v=f.na.changedTouches[0].pageY);k.Kb=v;return k},Z:function(a){var d=b.g;a=[+new Date-(h.b.C!==r?h.b.C:n),d(a.id),d(a.aa),d(a.qa),d(a.sa),d(a.link),d(a.content),a.type,a.Kb].join("*");p.$(a);b.e(this.P(),"Function")&&this.P()()},$:function(a){a.length>g.ba||(encodeURIComponent(l.join("!")+a).length>g.ba&&(p.r(l.join("!")),l=[]),l.push(a))},r:function(a){h.b.c.et=5;h.b.c.ep=
a;h.b.j()},P:function(){return function(){l&&l.length&&(p.r(l.join("!")),l=[])}}};b.ka()&&""!==c.aet&&e.d("pv-b",function(){f.d(document,"click",p.Q());"ontouchend"in document&&f.d(window,"touchend",p.Q());f.d(window,"unload",p.P())});return p})();
(function(){var b=mt.event,a=mt.i,f=h.s,d=h.A,g=+new Date,e=[],n=u,l={Za:function(){return function(){h.b&&(h.b.M&&c.aet&&c.aet.length)&&(window.clearTimeout(n),n=window.setTimeout(function(){l.Qa(a.T()+a.L())},150))}},Qa:function(a){l.$([+new Date-(h.b.C!==r?h.b.C:g),a].join("*"))},$:function(a){if(encodeURIComponent(e.join("!")+a).length>f.ba||3<e.length)l.r(e.join("!")),e=[];e.push(a)},r:function(b){h.b.c.et=6;h.b.c.vh=a.L();h.b.c.ep=b;h.b.j()},P:function(){return function(){e&&e.length&&(l.r(e.join("!")),
e=[])}}};mt.lang.ka()&&""!==c.aet&&d.d("pv-b",function(){b.d(window,"scroll",l.Za());b.d(window,"unload",l.P())});return l})();
(function(){var b=mt.f,a=h.s,f=h.load,d=h.cb;h.A.d("pv-b",function(){var g=a.protocol+"//crs.baidu.com/";c.rec&&b.Ia(function(){for(var e=0,n=c.rp.length;e<n;e++){var l=c.rp[e][0],p=c.rp[e][1],s=b.ea("hm_t_"+l);if(p&&!(2==p&&!s||s&&""!==s.innerHTML))s="",s=Math.round(Math.random()*a.O),s=4==p?g+"hl.js?"+["siteId="+c.id,"planId="+l,"rnd="+s].join("&"):g+"t.js?"+["siteId="+c.id,"planId="+l,"from="+d(),"referer="+encodeURIComponent(document.referrer),"title="+encodeURIComponent(document.title),"rnd="+
s].join("&"),f(s)}})})})();
(function(){function b(){return function(){h.b.c.nv=0;h.b.c.st=4;h.b.c.et=3;h.b.c.ep=h.ca.ib()+","+h.ca.gb();h.b.j()}}function a(){clearTimeout(z);var b;q&&(b="visible"==document[q]);x&&(b=!document[x]);l="undefined"==typeof b?t:b;if((!n||!p)&&l&&s)y=t,k=+new Date;else if(n&&p&&(!l||!s))y=w,v+=+new Date-k;n=l;p=s;z=setTimeout(a,100)}function f(a){var k=document,b="";if(a in k)b=a;else for(var d=["webkit","ms","moz","o"],q=0;q<d.length;q++){var x=d[q]+a.charAt(0).toUpperCase()+a.slice(1);if(x in k){b=
x;break}}return b}function d(k){if(!("focus"==k.type||"blur"==k.type)||!(k.target&&k.target!=window))s="focus"==k.type||"focusin"==k.type?t:w,a()}var g=mt.event,e=h.A,n=t,l=t,p=t,s=t,m=+new Date,k=m,v=0,y=t,q=f("visibilityState"),x=f("hidden"),z;a();(function(){var k=q.replace(/[vV]isibilityState/,"visibilitychange");g.d(document,k,a);g.d(window,"pageshow",a);g.d(window,"pagehide",a);"object"==typeof document.onfocusin?(g.d(document,"focusin",d),g.d(document,"focusout",d)):(g.d(window,"focus",d),
g.d(window,"blur",d))})();h.ca={ib:function(){return+new Date-m},gb:function(){return y?+new Date-k+v:v}};e.d("pv-b",function(){g.d(window,"unload",b())});e.d("duration-send",b());e.d("duration-done",function(){k=m=+new Date;v=0});return h.ca})();
(function(){var b=mt.lang,a=h.s,f=h.load,d={xb:function(d){if((window._dxt===r||b.e(window._dxt,"Array"))&&"undefined"!==typeof h.b){var e=h.b.R();f([a.protocol,"//datax.baidu.com/x.js?si=",c.id,"&dm=",encodeURIComponent(e)].join(""),d)}},Jb:function(a){if(b.e(a,"String")||b.e(a,"Number"))window._dxt=window._dxt||[],window._dxt.push(["_setUserId",a])}};return h.Xa=d})();
(function(){function b(a,b,d,q){if(!(a===r||b===r||q===r)){if(""===a)return[b,d,q].join("*");a=String(a).split("!");for(var x,e=w,f=0;f<a.length;f++)if(x=a[f].split("*"),String(b)===x[0]){x[1]=d;x[2]=q;a[f]=x.join("*");e=t;break}e||a.push([b,d,q].join("*"));return a.join("!")}}function a(k){for(var b in k)if({}.hasOwnProperty.call(k,b)){var e=k[b];d.e(e,"Object")||d.e(e,"Array")?a(e):k[b]=String(e)}}var f=mt.url,d=mt.lang,g=mt.o,e=mt.i,n=h.s,l=h.A,p=h.Xa,s=h.load,m={N:[],W:0,Ea:w,z:{ra:"",page:""},
init:function(){m.h=0;l.d("pv-b",function(){m.Ya();m.$a()});l.d("pv-d",function(){m.ab();m.z.page=""});l.d("stag-b",function(){h.b.c.api=m.h||m.W?m.h+"_"+m.W:"";h.b.c.ct=[decodeURIComponent(h.b.getData("Hm_ct_"+c.id)||""),m.z.ra,m.z.page].join("!")});l.d("stag-d",function(){h.b.c.api=0;m.h=0;m.W=0})},Ya:function(){var a=window._hmt||[];if(!a||d.e(a,"Array"))window._hmt={id:c.id,cmd:{},push:function(){for(var a=window._hmt,k=0;k<arguments.length;k++){var b=arguments[k];d.e(b,"Array")&&(a.cmd[a.id].push(b),
"_setAccount"===b[0]&&(1<b.length&&/^[0-9a-f]{32}$/.test(b[1]))&&(b=b[1],a.id=b,a.cmd[b]=a.cmd[b]||[]))}}},window._hmt.cmd[c.id]=[],window._hmt.push.apply(window._hmt,a)},$a:function(){var a=window._hmt;if(a&&a.cmd&&a.cmd[c.id])for(var b=a.cmd[c.id],d=/^_track(Event|MobConv|Order|RTEvent)$/,q=0,e=b.length;q<e;q++){var f=b[q];d.test(f[0])?m.N.push(f):m.oa(f)}a.cmd[c.id]={push:m.oa}},ab:function(){if(0<m.N.length)for(var a=0,b=m.N.length;a<b;a++)m.oa(m.N[a]);m.N=u},oa:function(a){var b=a[0];if(m.hasOwnProperty(b)&&
d.e(m[b],"Function"))m[b](a)},_setAccount:function(a){1<a.length&&/^[0-9a-f]{32}$/.test(a[1])&&(m.h|=1)},_setAutoPageview:function(a){if(1<a.length&&(a=a[1],w===a||t===a))m.h|=2,h.b.Aa=a},_trackPageview:function(a){if(1<a.length&&a[1].charAt&&"/"===a[1].charAt(0)){m.h|=4;h.b.c.sn=h.b.za();h.b.c.et=0;h.b.c.ep="";h.b.c.vl=e.T()+e.L();h.b.c.kb=0;h.b.ia?(h.b.c.nv=0,h.b.c.st=4):h.b.ia=t;var b=h.b.c.u,d=h.b.c.su;h.b.c.u=n.protocol+"//"+document.location.host+a[1];m.Ea||(h.b.c.su=document.location.href);
h.b.j();h.b.c.u=b;h.b.c.su=d;h.b.C=+new Date}},_trackEvent:function(a){2<a.length&&(m.h|=8,h.b.c.nv=0,h.b.c.st=4,h.b.c.et=4,h.b.c.ep=d.g(a[1])+"*"+d.g(a[2])+(a[3]?"*"+d.g(a[3]):"")+(a[4]?"*"+d.g(a[4]):""),h.b.j())},_setCustomVar:function(a){if(!(4>a.length)){var b=a[1],e=a[4]||3;if(0<b&&6>b&&0<e&&4>e){m.W++;for(var q=(h.b.c.cv||"*").split("!"),x=q.length;x<b-1;x++)q.push("*");q[b-1]=e+"*"+d.g(a[2])+"*"+d.g(a[3]);h.b.c.cv=q.join("!");a=h.b.c.cv.replace(/[^1](\*[^!]*){2}/g,"*").replace(/((^|!)\*)+$/g,
"");""!==a?h.b.setData("Hm_cv_"+c.id,encodeURIComponent(a),c.age):h.b.Cb("Hm_cv_"+c.id)}}},_setUserTag:function(a){if(!(3>a.length)){var e=d.g(a[1]);a=d.g(a[2]);if(e!==r&&a!==r){var f=decodeURIComponent(h.b.getData("Hm_ct_"+c.id)||""),f=b(f,e,1,a);h.b.setData("Hm_ct_"+c.id,encodeURIComponent(f),c.age)}}},_setVisitTag:function(a){if(!(3>a.length)){var e=d.g(a[1]);a=d.g(a[2]);if(e!==r&&a!==r){var f=m.z.ra,f=b(f,e,2,a);m.z.ra=f}}},_setPageTag:function(a){if(!(3>a.length)){var e=d.g(a[1]);a=d.g(a[2]);
if(e!==r&&a!==r){var f=m.z.page,f=b(f,e,3,a);m.z.page=f}}},_setReferrerOverride:function(a){1<a.length&&(h.b.c.su=a[1].charAt&&"/"===a[1].charAt(0)?n.protocol+"//"+window.location.host+a[1]:a[1],m.Ea=t)},_trackOrder:function(b){b=b[1];d.e(b,"Object")&&(a(b),m.h|=16,h.b.c.nv=0,h.b.c.st=4,h.b.c.et=94,h.b.c.ep=g.stringify(b),h.b.j())},_trackMobConv:function(a){if(a={webim:1,tel:2,map:3,sms:4,callback:5,share:6}[a[1]])m.h|=32,h.b.c.et=93,h.b.c.ep=a,h.b.j()},_trackRTPageview:function(b){b=b[1];d.e(b,"Object")&&
(a(b),b=g.stringify(b),512>=encodeURIComponent(b).length&&(m.h|=64,h.b.c.rt=b))},_trackRTEvent:function(b){b=b[1];if(d.e(b,"Object")){a(b);b=encodeURIComponent(g.stringify(b));var e=function(a){var b=h.b.c.rt;m.h|=128;h.b.c.et=90;h.b.c.rt=a;h.b.j();h.b.c.rt=b},f=b.length;if(900>=f)e.call(this,b);else for(var f=Math.ceil(f/900),q="block|"+Math.round(Math.random()*n.O).toString(16)+"|"+f+"|",x=[],z=0;z<f;z++)x.push(z),x.push(b.substring(900*z,900*z+900)),e.call(this,q+x.join("|")),x=[]}},_setDataxId:function(a){a=
a[1];p.xb();p.Jb(a)},_setUserId:function(a){a=d.g(a[1]);if(a!==r){var b=h.b.c.p,e=h.b.c.ep;h.b.c.et=8;h.b.c.ep="";h.b.c.p="uid_*"+a;h.b.j();h.b.c.p=b;h.b.c.ep=e}},_setAutoTracking:function(a){if(1<a.length&&(a=a[1],w===a||t===a))h.b.Ba=a},_setAutoEventTracking:function(a){if(1<a.length&&(a=a[1],w===a||t===a))h.b.M=a},_trackPageDuration:function(a){1<a.length?(a=a[1],2===String(a).split(",").length&&(h.b.c.et=3,h.b.c.ep=a,h.b.j())):l.G("duration-send");l.G("duration-done")},_require:function(a){1<
a.length&&(a=a[1],n.Sa.test(f.K(a))&&s(a))},_providePlugin:function(a){if(1<a.length){var b=window._hmt,e=a[1];a=a[2];if(d.H(n.Ga,e)&&d.e(a,"Function")&&(b.plugins=b.plugins||{},b.D=b.D||{},b.plugins[e]=a,b.w=b.w||[],a=b.w.slice(),e&&a.length&&a[0][1]===e))for(var q=0,f=a.length;q<f;q++){var g=a[q][2]||{};if(b.plugins[e]&&!b.D[e])b.D[e]=new b.plugins[e](g),b.w.shift();else break}}},_requirePlugin:function(a){if(1<a.length){var b=window._hmt,e=a[1],q=a[2]||{};if(d.H(n.Ga,e))if(b.plugins=b.plugins||
{},b.D=b.D||{},b.plugins[e]&&!b.D[e])b.D[e]=new b.plugins[e](q);else{b.w=b.w||[];for(var q=0,f=b.w.length;q<f;q++)if(b.w[q][1]===e)return;b.w.push(a);m._require([u,n.Ab+e+".js"])}}},_trackCustomEvent:function(a){if(1<a.length){var b=d.g(a[1]),e="";a=a[2];if(d.e(a,"Object")){var e=[],q;for(q in a)a.hasOwnProperty(q)&&(e.push(d.g(q)),d.e(a[q],"Object")?e.push(d.g(g.stringify(a[q]))):e.push(d.g(String(a[q]))));e="*"+e.join("*")}h.b.c.et=7;h.b.c.ep="ce!_iden*"+b+e;h.b.j()}}};m.init();h.Ta=m;return h.Ta})();
(function(){function b(){"undefined"===typeof window["_bdhm_loaded_"+c.id]&&(window["_bdhm_loaded_"+c.id]=t,this.c={},this.Ba=this.Aa=t,this.M=k.M,this.va=g.ka()&&0<c.aet.length?c.aet.split(","):"",this.ia=w,this.init())}var a=mt.url,f=mt.La,d=mt.pa,g=mt.lang,e=mt.cookie,n=mt.i,l=mt.localStorage,p=mt.sessionStorage,s=mt.o,m=mt.event,k=h.s,v=h.load,y=h.A;b.prototype={la:function(a,b){a="."+a.replace(/:\d+/,"");b="."+b.replace(/:\d+/,"");var d=a.indexOf(b);return-1<d&&d+b.length===a.length},Fa:function(a,
b){a=a.replace(/^https?:\/\//,"");return 0===a.indexOf(b)},U:function(b){for(var d=0;d<c.dm.length;d++)if(-1<c.dm[d].indexOf("/")){if(this.Fa(b,c.dm[d]))return t}else{var e=a.K(b);if(e&&this.la(e,c.dm[d]))return t}return w},R:function(){for(var a=document.location.hostname,b=0,d=c.dm.length;b<d;b++)if(this.la(a,c.dm[b]))return c.dm[b].replace(/(:\d+)?[/?#].*/,"");return a},fa:function(){for(var a=0,b=c.dm.length;a<b;a++){var d=c.dm[a];if(-1<d.indexOf("/")&&this.Fa(document.location.href,d))return d.replace(/^[^/]+(\/.*)/,
"$1")+"/"}return"/"},mb:function(){if(!document.referrer)return k.F-k.I>c.vdur?1:4;var b=w;this.U(document.referrer)&&this.U(document.location.href)?b=t:(b=a.K(document.referrer),b=this.la(b||"",document.location.hostname));return b?k.F-k.I>c.vdur?1:4:3},getData:function(a){try{return e.get(a)||p.get(a)||l.get(a)}catch(b){}},setData:function(a,b,d){try{e.set(a,b,{domain:this.R(),path:this.fa(),J:d}),d?l.set(a,b,d):p.set(a,b)}catch(f){}},Cb:function(a){try{e.set(a,"",{domain:this.R(),path:this.fa(),
J:-1}),p.remove(a),l.remove(a)}catch(b){}},Hb:function(){var a,b,d,f,g;k.I=this.getData("Hm_lpvt_"+c.id)||0;13===k.I.length&&(k.I=Math.round(k.I/1E3));b=this.mb();a=4!==b?1:0;if(d=this.getData("Hm_lvt_"+c.id)){f=d.split(",");for(g=f.length-1;0<=g;g--)13===f[g].length&&(f[g]=""+Math.round(f[g]/1E3));for(;2592E3<k.F-f[0];)f.shift();g=4>f.length?2:3;for(1===a&&f.push(k.F);4<f.length;)f.shift();d=f.join(",");f=f[f.length-1]}else d=k.F,f="",g=1;this.setData("Hm_lvt_"+c.id,d,c.age);this.setData("Hm_lpvt_"+
c.id,k.F);d=e.yb(this.R(),this.fa());if(0===c.nv&&this.U(document.location.href)&&(""===document.referrer||this.U(document.referrer)))a=0,b=4;this.c.nv=a;this.c.st=b;this.c.cc=d;this.c.lt=f;this.c.lv=g},Gb:function(){for(var a=[],b=this.c.et,d=+new Date,e=0,f=k.Ma.length;e<f;e++){var g=k.Ma[e],l=this.c[g];"undefined"!==typeof l&&""!==l&&("tt"!==g||"tt"===g&&0===b)&&(("ct"!==g||"ct"===g&&0===b)&&("kb"!==g||"kb"===g&&3===b))&&a.push(g+"="+encodeURIComponent(l))}switch(b){case 0:this.c.rt&&a.push("rt="+
encodeURIComponent(this.c.rt));break;case 5:a.push("_lpt="+this.C);a.push("_ct="+d);break;case 6:a.push("_lpt="+this.C);a.push("_ct="+d);break;case 90:this.c.rt&&a.push("rt="+this.c.rt)}return a.join("&")},Ib:function(){this.Hb();this.c.si=c.id;this.c.sn=this.za();this.c.su=document.referrer;this.c.hh=window.location.hash;this.c.ds=n.Db;this.c.cl=n.colorDepth+"-bit";this.c.ln=String(n.language).toLowerCase();this.c.ja=n.javaEnabled?1:0;this.c.ck=n.cookieEnabled?1:0;this.c.lo="number"===typeof _bdhm_top?
1:0;this.c.fl=d.ob();this.c.v="1.2.56";this.c.cv=decodeURIComponent(this.getData("Hm_cv_"+c.id)||"");this.c.tt=document.title||"";this.c.vl=n.T()+n.L();var b=document.location.href;this.c.cm=a.m(b,k.tb)||"";this.c.cp=a.m(b,k.ub)||a.m(b,k.Nb)||"";this.c.cw=a.m(b,k.rb)||a.m(b,k.Pb)||"";this.c.ci=a.m(b,k.pb)||a.m(b,k.Mb)||"";this.c.cf=a.m(b,k.vb)||a.m(b,k.Ob)||"";this.c.cu=a.m(b,k.qb)||a.m(b,k.Lb)||""},init:function(){try{this.Ib(),0===this.c.nv?this.Fb():this.xa(),h.b=this,this.Wa(),this.Va(),y.G("pv-b"),
this.Eb()}catch(a){var b=[];b.push("si="+c.id);b.push("n="+encodeURIComponent(a.name));b.push("m="+encodeURIComponent(a.message));b.push("r="+encodeURIComponent(document.referrer));f.log(k.ma+"//"+k.Ha+"?"+b.join("&"))}},Eb:function(){function a(){y.G("pv-d")}this.Aa?(this.ia=t,this.c.et=0,this.c.ep="",this.c.vl=n.T()+n.L(),this.j(a)):a();this.C=+new Date},j:function(a){if(this.Ba){var b=this;b.c.rnd=Math.round(Math.random()*k.O);y.G("stag-b");var d=k.ma+"//"+k.Ha+"?"+b.Gb();y.G("stag-d");b.Ra(d);
f.log(d,function(d){b.Ja(d);g.e(a,"Function")&&a.call(b)})}},Wa:function(){var b=document.location.hash.substring(1),d=RegExp(c.id),e=a.K(document.referrer)===k.Na?1:0,f=a.m(b,"jn"),g=/^heatlink$|^select$|^pageclick$/.test(f);b&&(d.test(b)&&e&&g)&&(this.c.rnd=Math.round(Math.random()*k.O),b=document.createElement("script"),b.setAttribute("type","text/javascript"),b.setAttribute("charset","utf-8"),b.setAttribute("src",k.protocol+"//"+c.js+f+".js?"+this.c.rnd),f=document.getElementsByTagName("script")[0],
f.parentNode.insertBefore(b,f))},Va:function(){if(window.postMessage&&window.self!==window.parent){var b=this;m.d(window,"message",function(d){if(a.K(d.origin)===k.Na){var e=d.data||{};d=e.sd||"";var e=e.jn||"",f=/^customevent$/.test(e);RegExp(c.id).test(d)&&f&&(b.c.rnd=Math.round(Math.random()*k.O),v(k.protocol+"//"+c.js+e+".js?"+b.c.rnd))}});window.parent.postMessage({id:c.id,url:document.location.href,status:"__Messenger__hmLoaded"},"*")}},Ra:function(a){var b;try{b=s.parse(p.get("Hm_unsent_"+
c.id)||"[]")}catch(d){b=[]}var e=this.c.u?"":"&u="+encodeURIComponent(document.location.href);b.push(a.replace(/^https?:\/\//,"")+e);p.set("Hm_unsent_"+c.id,s.stringify(b))},Ja:function(a){var b;try{b=s.parse(p.get("Hm_unsent_"+c.id)||"[]")}catch(d){b=[]}if(b.length){a=a.replace(/^https?:\/\//,"");for(var e=0;e<b.length;e++)if(a.replace(/&u=[^&]*/,"")===b[e].replace(/&u=[^&]*/,"")){b.splice(e,1);break}b.length?p.set("Hm_unsent_"+c.id,s.stringify(b)):this.xa()}},xa:function(){p.remove("Hm_unsent_"+
c.id)},Fb:function(){var a=this,b;try{b=s.parse(p.get("Hm_unsent_"+c.id)||"[]")}catch(d){b=[]}if(b.length)for(var e=function(b){f.log(k.ma+"//"+b,function(b){a.Ja(b)})},g=0;g<b.length;g++)e(b[g])},za:function(){return Math.round(+new Date/1E3)%65535}};return new b})();
(function(){var b=mt.event,a=mt.lang,f=h.s;if(c.kbtrk&&"undefined"!==typeof h.b){h.b.c.kb=a.Da(h.b.c.kb)?h.b.c.kb:0;var d=function(){h.b.c.et=85;h.b.c.ep=h.b.c.kb;h.b.j()};b.d(document,"keyup",function(){h.b.c.kb++});b.d(window,"unload",function(){d()});setInterval(d,f.zb)}})();var B=h.s,C=h.load;c.pt&&C([B.protocol,"//ada.baidu.com/phone-tracker/insert_bdtj?sid=",c.pt].join(""));
(function(){var b=mt.i,a=mt.lang,f=mt.event,d=mt.o;if("undefined"!==typeof h.b&&(c.med||(!b.Ca||7<b.wb)&&c.cvcc)){var g,e,n,l,p=function(a){if(a.item){for(var b=a.length,d=Array(b);b--;)d[b]=a[b];return d}return[].slice.call(a)},s=function(a,b){for(var d in a)if(a.hasOwnProperty(d)&&b.call(a,d,a[d])===w)return w},m=function(b,e){var f={};f.n=g;f.t="clk";f.v=b;if(e){var k=e.getAttribute("href"),l=e.getAttribute("onclick")?""+e.getAttribute("onclick"):u,m=e.getAttribute("id")||"";n.test(k)?(f.sn="mediate",
f.snv=k):a.e(l,"String")&&n.test(l)&&(f.sn="wrap",f.snv=l);f.id=m}h.b.c.et=86;h.b.c.ep=d.stringify(f);h.b.j();for(f=+new Date;400>=+new Date-f;);};if(c.med)e="/zoosnet",g="swt",n=/swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i,l={click:function(){for(var a=[],b=p(document.getElementsByTagName("a")),b=[].concat.apply(b,p(document.getElementsByTagName("area"))),b=[].concat.apply(b,p(document.getElementsByTagName("img"))),d,e,f=0,g=b.length;f<g;f++)d=b[f],e=d.getAttribute("onclick"),
d=d.getAttribute("href"),(n.test(e)||n.test(d))&&a.push(b[f]);return a}};else if(c.cvcc){e="/other-comm";g="other";n=c.cvcc.q||r;var k=c.cvcc.id||r;l={click:function(){for(var a=[],b=p(document.getElementsByTagName("a")),b=[].concat.apply(b,p(document.getElementsByTagName("area"))),b=[].concat.apply(b,p(document.getElementsByTagName("img"))),d,e,f,g=0,l=b.length;g<l;g++)d=b[g],n!==r?(e=d.getAttribute("onclick"),f=d.getAttribute("href"),k?(d=d.getAttribute("id"),(n.test(e)||n.test(f)||k.test(d))&&
a.push(b[g])):(n.test(e)||n.test(f))&&a.push(b[g])):k!==r&&(d=d.getAttribute("id"),k.test(d)&&a.push(b[g]));return a}}}if("undefined"!==typeof l&&"undefined"!==typeof n){var v;e+=/\/$/.test(e)?"":"/";var y=function(b,d){if(v===d)return m(e+b,d),w;if(a.e(d,"Array")||a.e(d,"NodeList"))for(var f=0,g=d.length;f<g;f++)if(v===d[f])return m(e+b+"/"+(f+1),d[f]),w};f.d(document,"mousedown",function(b){b=b||window.event;v=b.target||b.srcElement;var d={};for(s(l,function(b,e){d[b]=a.e(e,"Function")?e():document.getElementById(e)});v&&
v!==document&&s(d,y)!==w;)v=v.parentNode})}}})();(function(){var b=mt.f,a=mt.lang,f=mt.event,d=mt.o;if("undefined"!==typeof h.b&&a.e(c.cvcf,"Array")&&0<c.cvcf.length){var g={Pa:function(){for(var a=c.cvcf.length,d,l=0;l<a;l++)(d=b.ea(decodeURIComponent(c.cvcf[l])))&&f.d(d,"click",g.da())},da:function(){return function(){h.b.c.et=86;var a={n:"form",t:"clk"};a.id=this.id;h.b.c.ep=d.stringify(a);h.b.j()}}};b.Ia(function(){g.Pa()})}})();
(function(){var b=mt.event,a=mt.o;if(c.med&&"undefined"!==typeof h.b){var f={n:"anti",sb:0,kb:0,clk:0},d=function(){h.b.c.et=86;h.b.c.ep=a.stringify(f);h.b.j()};b.d(document,"click",function(){f.clk++});b.d(document,"keyup",function(){f.kb=1});b.d(window,"scroll",function(){f.sb++});b.d(window,"load",function(){setTimeout(d,5E3)})}})();c.spa!==r&&"1"===String(c.spa)&&(window._hmt=window._hmt||[],window._hmt.push(["_requirePlugin","UrlChangeTracker"]));})();
