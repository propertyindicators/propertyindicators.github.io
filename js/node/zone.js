/*! PILab 18-05-2018 (c) 2017 propertyindicators@gmail.com */

!function(a,b){"object"==typeof exports&&"undefined"!=typeof module?b():"function"==typeof define&&define.amd?define(b):b()}(0,function(){"use strict";function a(a,b){return Zone.current.wrap(a,b)}function b(a,b,c,d,e){return Zone.current.scheduleMacroTask(a,b,c,d,e)}function c(b,c){for(var d=b.length-1;d>=0;d--)"function"==typeof b[d]&&(b[d]=a(b[d],c+"_"+d));return b}function d(a,b){for(var d=a.constructor.name,f=0;f<b.length;f++)!function(f){var g=b[f],h=a[g];if(h){if(!e(E(a,g)))return"continue";a[g]=function(a){var b=function(){return a.apply(this,c(arguments,d+"."+g))};return k(b,a),b}(h)}}(f)}function e(a){return!a||!1!==a.writable&&!("function"==typeof a.get&&void 0===a.set)}function f(a,b,c){var d=E(a,b);if(!d&&c){E(c,b)&&(d={enumerable:!0,configurable:!0})}if(d&&d.configurable){delete d.writable,delete d.value;var e=d.get,f=d.set,g=b.substr(2),h=$[g];h||(h=$[g]=Q("ON_PROPERTY"+g)),d.set=function(b){var c=this;if(c||a!==T||(c=T),c){c[h]&&c.removeEventListener(g,_),f&&f.apply(c,V),"function"==typeof b?(c[h]=b,c.addEventListener(g,_,!1)):c[h]=null}},d.get=function(){var c=this;if(c||a!==T||(c=T),!c)return null;var f=c[h];if(f)return f;if(e){var g=e&&e.call(this);if(g)return d.set.call(this,g),"function"==typeof c[U]&&c.removeAttribute(b),g}return null},F(a,b,d)}}function g(a,b,c){if(b)for(var d=0;d<b.length;d++)f(a,"on"+b[d],c);else{var e=[];for(var g in a)"on"==g.substr(0,2)&&e.push(g);for(var h=0;h<e.length;h++)f(a,e[h],c)}}function h(b){var d=T[b];if(d){T[Q(b)]=d,T[b]=function(){var a=c(arguments,b);switch(a.length){case 0:this[aa]=new d;break;case 1:this[aa]=new d(a[0]);break;case 2:this[aa]=new d(a[0],a[1]);break;case 3:this[aa]=new d(a[0],a[1],a[2]);break;case 4:this[aa]=new d(a[0],a[1],a[2],a[3]);break;default:throw new Error("Arg list too long.")}},k(T[b],d);var e,f=new d(function(){});for(e in f)"XMLHttpRequest"===b&&"responseBlob"===e||function(c){"function"==typeof f[c]?T[b].prototype[c]=function(){return this[aa][c].apply(this[aa],arguments)}:F(T[b].prototype,c,{set:function(d){"function"==typeof d?(this[aa][c]=a(d,b+"."+c),k(this[aa][c],d)):this[aa][c]=d},get:function(){return this[aa][c]}})}(e);for(e in d)"prototype"!==e&&d.hasOwnProperty(e)&&(T[b][e]=d[e])}}function i(a,b,c){for(var d=a;d&&!d.hasOwnProperty(b);)d=G(d);!d&&a[b]&&(d=a);var f,g=Q(b);if(d&&!(f=d[g])){f=d[g]=d[b];if(e(d&&E(d,b))){var h=c(f,g,b);d[b]=function(){return h(this,arguments)},k(d[b],f)}}return f}function j(a,c,d){function e(a){var b=a.data;return b.args[b.cbIdx]=function(){a.invoke.apply(this,arguments)},f.apply(b.target,b.args),a}var f=null;f=i(a,c,function(a){return function(c,f){var g=d(c,f);return g.cbIdx>=0&&"function"==typeof f[g.cbIdx]?b(g.name,f[g.cbIdx],g,e,null):a.apply(c,f)}})}function k(a,b){a[Q("OriginalDelegate")]=b}function l(){if(ba)return ca;ba=!0;try{var a=S.navigator.userAgent;return-1===a.indexOf("MSIE ")&&-1===a.indexOf("Trident/")&&-1===a.indexOf("Edge/")||(ca=!0),ca}catch(a){}}function m(a,b,c){for(var d=c&&c.add||J,e=c&&c.rm||K,f=c&&c.listeners||"eventListeners",g=c&&c.rmAll||"removeAllListeners",h=Q(d),i="."+d+":",j="prependListener",l="."+j+":",m=function(a,b,c){if(!a.isRemoved){var d=a.callback;"object"==typeof d&&d.handleEvent&&(a.callback=function(a){return d.handleEvent(a)},a.originalDelegate=d),a.invoke(a,b,[c]);var f=a.options;if(f&&"object"==typeof f&&f.once){var g=a.originalDelegate?a.originalDelegate:a.callback;b[e].call(b,c.type,g,f)}}},o=function(b){if(b=b||a.event){var c=this||b.target||a,d=c[ea[b.type][O]];if(d)if(1===d.length)m(d[0],c,b);else for(var e=d.slice(),f=0;f<e.length&&(!b||!0!==b[ha]);f++)m(e[f],c,b)}},p=function(b){if(b=b||a.event){var c=this||b.target||a,d=c[ea[b.type][N]];if(d)if(1===d.length)m(d[0],c,b);else for(var e=d.slice(),f=0;f<e.length&&(!b||!0!==b[ha]);f++)m(e[f],c,b)}},q=[],r=0;r<b.length;r++)q[r]=function(b,c){if(!b)return!1;var m=!0;c&&void 0!==c.useG&&(m=c.useG);var q=c&&c.vh,r=!0;c&&void 0!==c.chkDup&&(r=c.chkDup);var s=!1;c&&void 0!==c.rt&&(s=c.rt);for(var t=b;t&&!t.hasOwnProperty(d);)t=G(t);if(!t&&b[d]&&(t=b),!t)return!1;if(t[h])return!1;var u,v={},w=t[h]=t[d],x=t[Q(e)]=t[e],y=t[Q(f)]=t[f],z=t[Q(g)]=t[g];c&&c.prepend&&(u=t[Q(c.prepend)]=t[c.prepend]);var A=function(){if(!v.isExisting)return w.call(v.target,v.eventName,v.capture?p:o,v.options)},B=function(a){if(!a.isRemoved){var b=ea[a.eventName],c=void 0;b&&(c=b[a.capture?N:O]);var d=c&&a.target[c];if(d)for(var e=0;e<d.length;e++){var f=d[e];if(f===a){d.splice(e,1),a.isRemoved=!0,0===d.length&&(a.allRemoved=!0,a.target[c]=null);break}}}if(a.allRemoved)return x.call(a.target,a.eventName,a.capture?p:o,a.options)},C=function(a){return w.call(v.target,v.eventName,a.invoke,v.options)},D=function(a){return u.call(v.target,v.eventName,a.invoke,v.options)},E=function(a){return x.call(a.target,a.eventName,a.invoke,a.options)},F=m?A:C,H=m?B:E,I=function(a,b){var c=typeof b;return"function"===c&&a.callback===b||"object"===c&&a.originalDelegate===b},J=c&&c.diff?c.diff:I,K=Zone[Zone.__symbol__("BLACK_LISTED_EVENTS")],L=function(b,c,d,e,f,g){return void 0===f&&(f=!1),void 0===g&&(g=!1),function(){var h=this||a,i=arguments[1];if(!i)return b.apply(this,arguments);var j=!1;if("function"!=typeof i){if(!i.handleEvent)return b.apply(this,arguments);j=!0}if(!q||q(b,i,h,arguments)){var k=arguments[0],l=arguments[2];if(K)for(var n=0;n<K.length;n++)if(k===K[n])return b.apply(this,arguments);var o,p=!1;void 0===l?o=!1:!0===l?o=!0:!1===l?o=!1:(o=!!l&&!!l.capture,p=!!l&&!!l.once);var s,t=Zone.current,u=ea[k];if(u)s=u[o?N:O];else{var w=k+O,x=k+N,y=P+w,z=P+x;ea[k]={},ea[k][O]=y,ea[k][N]=z,s=o?z:y}var A=h[s],B=!1;if(A){if(B=!0,r)for(var n=0;n<A.length;n++)if(J(A[n],i))return}else A=h[s]=[];var C,D=h.constructor.name,E=fa[D];E&&(C=E[k]),C||(C=D+c+k),v.options=l,p&&(v.options.once=!1),v.target=h,v.capture=o,v.eventName=k,v.isExisting=B;var F=m?da:null;F&&(F.taskData=v);var G=t.scheduleEventTask(C,i,F,d,e);return v.target=null,F&&(F.taskData=null),p&&(l.once=!0),G.options=l,G.target=h,G.capture=o,G.eventName=k,j&&(G.originalDelegate=i),g?A.unshift(G):A.push(G),f?h:void 0}}};return t[d]=L(w,i,F,H,s),u&&(t[j]=L(u,l,D,H,s,!0)),t[e]=function(){var b,c=this||a,d=arguments[0],e=arguments[2];b=void 0!==e&&(!0===e||!1!==e&&(!!e&&!!e.capture));var f=arguments[1];if(!f)return x.apply(this,arguments);if(!q||q(x,f,c,arguments)){var g,h=ea[d];h&&(g=h[b?N:O]);var i=g&&c[g];if(i)for(var j=0;j<i.length;j++){var k=i[j];if(J(k,f)){if(i.splice(j,1),k.isRemoved=!0,0===i.length&&(k.allRemoved=!0,c[g]=null),k.zone.cancelTask(k),s)return c;return}}return x.apply(this,arguments)}},t[f]=function(){for(var b=this||a,c=arguments[0],d=[],e=n(b,c),f=0;f<e.length;f++){var g=e[f],h=g.originalDelegate?g.originalDelegate:g.callback;d.push(h)}return d},t[g]=function(){var b=this||a,c=arguments[0];if(c){var d=ea[c];if(d){var f=d[O],h=d[N],i=b[f],j=b[h];if(i)for(var k=i.slice(),l=0;l<k.length;l++){var m=k[l],n=m.originalDelegate?m.originalDelegate:m.callback;this[e].call(this,c,n,m.options)}if(j)for(var k=j.slice(),l=0;l<k.length;l++){var m=k[l],n=m.originalDelegate?m.originalDelegate:m.callback;this[e].call(this,c,n,m.options)}}}else{for(var o=Object.keys(b),l=0;l<o.length;l++){var p=o[l],q=ga.exec(p),r=q&&q[1];r&&"removeListener"!==r&&this[g].call(this,r)}this[g].call(this,"removeListener")}if(s)return this},k(t[d],w),k(t[e],x),z&&k(t[g],z),y&&k(t[f],y),!0}(b[r],c);return q}function n(a,b){var c=[];for(var d in a){var e=ga.exec(d),f=e&&e[1];if(f&&(!b||f===b)){var g=a[d];if(g)for(var h=0;h<g.length;h++)c.push(g[h])}}return c}function o(a,b){var c=a.Event;c&&c.prototype&&b.patchMethod(c.prototype,"stopImmediatePropagation",function(a){return function(b,c){b[ha]=!0,a&&a.apply(b,c)}})}function p(a,c,d,e){function f(b){function c(){try{b.invoke.apply(this,arguments)}finally{b.data&&b.data.isPeriodic||("number"==typeof d.handleId?delete k[d.handleId]:d.handleId&&(d.handleId[ia]=null))}}var d=b.data;return d.args[0]=c,d.handleId=h.apply(a,d.args),b}function g(a){return j(a.data.handleId)}var h=null,j=null;c+=e,d+=e;var k={};h=i(a,c,function(d){return function(h,i){if("function"==typeof i[0]){var j={handleId:null,isPeriodic:"Interval"===e,delay:"Timeout"===e||"Interval"===e?i[1]||0:null,args:i},l=b(c,i[0],j,f,g);if(!l)return l;var m=l.data.handleId;return"number"==typeof m?k[m]=l:m&&(m[ia]=l),m&&m.ref&&m.unref&&"function"==typeof m.ref&&"function"==typeof m.unref&&(l.ref=m.ref.bind(m),l.unref=m.unref.bind(m)),"number"==typeof m||m?m:l}return d.apply(a,i)}}),j=i(a,d,function(b){return function(c,d){var e,f=d[0];"number"==typeof f?e=k[f]:(e=f&&f[ia])||(e=f),e&&"string"==typeof e.type?"notScheduled"!==e.state&&(e.cancelFn&&e.data.isPeriodic||0===e.runCount)&&("number"==typeof f?delete k[f]:f&&(f[ia]=null),e.zone.cancelTask(e)):b.apply(a,d)}})}function q(){Object.defineProperty=function(a,b,c){if(s(a,b))throw new TypeError("Cannot assign to read only property '"+b+"' of "+a);var d=c.configurable;return"prototype"!==b&&(c=t(a,b,c)),u(a,b,c,d)},Object.defineProperties=function(a,b){return Object.keys(b).forEach(function(c){Object.defineProperty(a,c,b[c])}),a},Object.create=function(a,b){return"object"!=typeof b||Object.isFrozen(b)||Object.keys(b).forEach(function(c){b[c]=t(a,c,b[c])}),la(a,b)},Object.getOwnPropertyDescriptor=function(a,b){var c=ka(a,b);return s(a,b)&&(c.configurable=!1),c}}function r(a,b,c){var d=c.configurable;return c=t(a,b,c),u(a,b,c,d)}function s(a,b){return a&&a[ma]&&a[ma][b]}function t(a,b,c){return Object.isFrozen(c)||(c.configurable=!0),c.configurable||(a[ma]||Object.isFrozen(a)||ja(a,ma,{writable:!0,value:{}}),a[ma]&&(a[ma][b]=!0)),c}function u(a,b,c,d){try{return ja(a,b,c)}catch(f){if(!c.configurable)throw f;void 0===d?delete c.configurable:c.configurable=d;try{return ja(a,b,c)}catch(d){var e=null;try{e=JSON.stringify(c)}catch(a){e=c.toString()}console.log("Attempting to configure '"+b+"' with descriptor '"+e+"' on object '"+a+"' and got error, giving up: "+d)}}}function v(a,b){var c=b.WebSocket;b.EventTarget||m(b,[c.prototype]),b.WebSocket=function(a,b){var d,e,f=arguments.length>1?new c(a,b):new c(a),h=E(f,"onmessage");return h&&!1===h.configurable?(d=H(f),e=f,[J,K,"send","close"].forEach(function(a){d[a]=function(){var b=I.call(arguments);if(a===J||a===K){var c=b.length>0?b[0]:void 0;if(c){var e=Zone.__symbol__("ON_PROPERTY"+c);f[e]=d[e]}}return f[a].apply(f,b)}})):d=f,g(d,["close","error","message","open"],e),d};var d=b.WebSocket;for(var e in c)d[e]=c[e]}function w(a,b,c){if(!c)return b;var d=c.filter(function(b){return b.target===a});if(!d||0===d.length)return b;var e=d[0].ignoreProperties;return b.filter(function(a){return-1===e.indexOf(a)})}function x(a,b,c,d){if(a){g(a,w(a,b,c),d)}}function y(a,b){if(!X||Z){var c="undefined"!=typeof WebSocket;if(z()){var d=b.__Zone_ignore_on_properties;if(Y){var e=window;x(e,Da.concat(["messageerror"]),d,G(e)),x(Document.prototype,Da,d),void 0!==e.SVGElement&&x(e.SVGElement.prototype,Da,d),x(Element.prototype,Da,d),x(HTMLElement.prototype,Da,d),x(HTMLMediaElement.prototype,ra,d),x(HTMLFrameSetElement.prototype,pa.concat(xa),d),x(HTMLBodyElement.prototype,pa.concat(xa),d),x(HTMLFrameElement.prototype,wa,d),x(HTMLIFrameElement.prototype,wa,d);var f=e.HTMLMarqueeElement;f&&x(f.prototype,ya,d);var g=e.Worker;g&&x(g.prototype,Ca,d)}x(XMLHttpRequest.prototype,za,d);var i=b.XMLHttpRequestEventTarget;i&&x(i&&i.prototype,za,d),"undefined"!=typeof IDBIndex&&(x(IDBIndex.prototype,Aa,d),x(IDBRequest.prototype,Aa,d),x(IDBOpenDBRequest.prototype,Aa,d),x(IDBDatabase.prototype,Aa,d),x(IDBTransaction.prototype,Aa,d),x(IDBCursor.prototype,Aa,d)),c&&x(WebSocket.prototype,Ba,d)}else A(),h("XMLHttpRequest"),c&&v(a,b)}}function z(){if((Y||Z)&&!E(HTMLElement.prototype,"onclick")&&"undefined"!=typeof Element){var a=E(Element.prototype,"onclick");if(a&&!a.configurable)return!1}var b=XMLHttpRequest.prototype,c=E(b,"onreadystatechange");if(c){F(b,"onreadystatechange",{enumerable:!0,configurable:!0,get:function(){return!0}});var d=new XMLHttpRequest,e=!!d.onreadystatechange;return F(b,"onreadystatechange",c||{}),e}var f=Q("fake");F(b,"onreadystatechange",{enumerable:!0,configurable:!0,get:function(){return this[f]},set:function(a){this[f]=a}});var d=new XMLHttpRequest,g=function(){};d.onreadystatechange=g;var e=d[f]===g;return d.onreadystatechange=null,e}function A(){for(var b=0;b<Da.length;b++)!function(b){var c=Da[b],d="on"+c;self.addEventListener(c,function(b){var c,e,f=b.target;for(e=f?f.constructor.name+"."+d:"unknown."+d;f;)f[d]&&!f[d][Ea]&&(c=a(f[d],e),c[Ea]=f[d],f[d]=c),f=f.parentElement},!0)}(b)}function B(a,b){var c="Anchor,Area,Audio,BR,Base,BaseFont,Body,Button,Canvas,Content,DList,Directory,Div,Embed,FieldSet,Font,Form,Frame,FrameSet,HR,Head,Heading,Html,IFrame,Image,Input,Keygen,LI,Label,Legend,Link,Map,Marquee,Media,Menu,Meta,Meter,Mod,OList,Object,OptGroup,Option,Output,Paragraph,Pre,Progress,Quote,Script,Select,Source,Span,Style,TableCaption,TableCell,TableCol,Table,TableRow,TableSection,TextArea,Title,Track,UList,Unknown,Video",d="ApplicationCache,EventSource,FileReader,InputMethodContext,MediaController,MessagePort,Node,Performance,SVGElementInstance,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebKitNamedFlow,Window,Worker,WorkerGlobalScope,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,IDBRequest,IDBOpenDBRequest,IDBDatabase,IDBTransaction,IDBCursor,DBIndex,WebSocket".split(","),e=[],f=a.wtf,g=c.split(",");f?e=g.map(function(a){return"HTML"+a+"Element"}).concat(d):a.EventTarget?e.push("EventTarget"):e=d;for(var h=a.__Zone_disable_IE_check||!1,i=a.__Zone_enable_cross_context_check||!1,j=l(),k="function __BROWSERTOOLS_CONSOLE_SAFEFUNC() { [native code] }",n=0;n<Da.length;n++){var o=Da[n],p=o+O,q=o+N,r=P+p,s=P+q;ea[o]={},ea[o][O]=r,ea[o][N]=s}for(var n=0;n<c.length;n++)for(var t=g[n],u=fa[t]={},v=0;v<Da.length;v++){var o=Da[v];u[o]=t+".addEventListener:"+o}for(var w=function(a,b,c,d){if(!h&&j)if(i)try{var e=b.toString();if("[object FunctionWrapper]"===e||e==k)return a.apply(c,d),!1}catch(b){return a.apply(c,d),!1}else{var e=b.toString();if("[object FunctionWrapper]"===e||e==k)return a.apply(c,d),!1}else if(i)try{b.toString()}catch(b){return a.apply(c,d),!1}return!0},x=[],n=0;n<e.length;n++){var y=a[e[n]];x.push(y&&y.prototype)}return m(a,x,{vh:w}),b.patchEventTarget=m,!0}function C(a,b){o(a,b)}function D(b){if((Y||Z)&&"registerElement"in b.document){var c=document.registerElement,d=["createdCallback","attachedCallback","detachedCallback","attributeChangedCallback"];document.registerElement=function(b,e){return e&&e.prototype&&d.forEach(function(b){var c="Document.registerElement::"+b,d=e.prototype;if(d.hasOwnProperty(b)){var f=E(d,b);f&&f.value?(f.value=a(f.value,c),r(e.prototype,b,f)):d[b]=a(d[b],c)}else d[b]&&(d[b]=a(d[b],c))}),c.call(document,b,e)},k(document.registerElement,c)}}!function(a){function b(a){h&&h.mark&&h.mark(a)}function c(a,b){h&&h.measure&&h.measure(a,b)}function d(b){0===G&&0===q.length&&(i||a[o]&&(i=a[o].resolve(0)),i?i[p](e):a[n](e,0)),b&&q.push(b)}function e(){if(!r){for(r=!0;q.length;){var a=q;q=[];for(var b=0;b<a.length;b++){var c=a[b];try{c.zone.runTask(c,null,null)}catch(a){D.onUnhandledError(a)}}}D.microtaskDrainDone(),r=!1}}function f(){}function g(a){return"__zone_symbol__"+a}var h=a.performance;if(b("Zone"),a.Zone)throw new Error("Zone already loaded.");var i,j=function(){function d(a,b){this._properties=null,this._parent=a,this._name=b?b.name||"unnamed":"<root>",this._properties=b&&b.properties||{},this._zoneDelegate=new l(this,this._parent&&this._parent._zoneDelegate,b)}return d.assertZonePatched=function(){if(a.Promise!==C.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")},Object.defineProperty(d,"root",{get:function(){for(var a=d.current;a.parent;)a=a.parent;return a},enumerable:!0,configurable:!0}),Object.defineProperty(d,"current",{get:function(){return E.zone},enumerable:!0,configurable:!0}),Object.defineProperty(d,"currentTask",{get:function(){return F},enumerable:!0,configurable:!0}),d.__load_patch=function(e,f){if(C.hasOwnProperty(e))throw Error("Already loaded patch: "+e);if(!a["__Zone_disable_"+e]){var g="Zone:"+e;b(g),C[e]=f(a,d,D),c(g,g)}},Object.defineProperty(d.prototype,"parent",{get:function(){return this._parent},enumerable:!0,configurable:!0}),Object.defineProperty(d.prototype,"name",{get:function(){return this._name},enumerable:!0,configurable:!0}),d.prototype.get=function(a){var b=this.getZoneWith(a);if(b)return b._properties[a]},d.prototype.getZoneWith=function(a){for(var b=this;b;){if(b._properties.hasOwnProperty(a))return b;b=b._parent}return null},d.prototype.fork=function(a){if(!a)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,a)},d.prototype.wrap=function(a,b){if("function"!=typeof a)throw new Error("Expecting function got: "+a);var c=this._zoneDelegate.intercept(this,a,b),d=this;return function(){return d.runGuarded(c,this,arguments,b)}},d.prototype.run=function(a,b,c,d){void 0===b&&(b=void 0),void 0===c&&(c=null),void 0===d&&(d=null),E={parent:E,zone:this};try{return this._zoneDelegate.invoke(this,a,b,c,d)}finally{E=E.parent}},d.prototype.runGuarded=function(a,b,c,d){void 0===b&&(b=null),void 0===c&&(c=null),void 0===d&&(d=null),E={parent:E,zone:this};try{try{return this._zoneDelegate.invoke(this,a,b,c,d)}catch(a){if(this._zoneDelegate.handleError(this,a))throw a}}finally{E=E.parent}},d.prototype.runTask=function(a,b,c){if(a.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(a.zone||s).name+"; Execution: "+this.name+")");if(a.state!==t||a.type!==B){var d=a.state!=w;d&&a._transitionTo(w,v),a.runCount++;var e=F;F=a,E={parent:E,zone:this};try{a.type==A&&a.data&&!a.data.isPeriodic&&(a.cancelFn=null);try{return this._zoneDelegate.invokeTask(this,a,b,c)}catch(a){if(this._zoneDelegate.handleError(this,a))throw a}}finally{a.state!==t&&a.state!==y&&(a.type==B||a.data&&a.data.isPeriodic?d&&a._transitionTo(v,w):(a.runCount=0,this._updateTaskCount(a,-1),d&&a._transitionTo(t,w,t))),E=E.parent,F=e}}},d.prototype.scheduleTask=function(a){if(a.zone&&a.zone!==this)for(var b=this;b;){if(b===a.zone)throw Error("can not reschedule task to "+this.name+" which is descendants of the original zone "+a.zone.name);b=b.parent}a._transitionTo(u,t);var c=[];a._zoneDelegates=c,a._zone=this;try{a=this._zoneDelegate.scheduleTask(this,a)}catch(b){throw a._transitionTo(y,u,t),this._zoneDelegate.handleError(this,b),b}return a._zoneDelegates===c&&this._updateTaskCount(a,1),a.state==u&&a._transitionTo(v,u),a},d.prototype.scheduleMicroTask=function(a,b,c,d){return this.scheduleTask(new m(z,a,b,c,d,null))},d.prototype.scheduleMacroTask=function(a,b,c,d,e){return this.scheduleTask(new m(A,a,b,c,d,e))},d.prototype.scheduleEventTask=function(a,b,c,d,e){return this.scheduleTask(new m(B,a,b,c,d,e))},d.prototype.cancelTask=function(a){if(a.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(a.zone||s).name+"; Execution: "+this.name+")");a._transitionTo(x,v,w);try{this._zoneDelegate.cancelTask(this,a)}catch(b){throw a._transitionTo(y,x),this._zoneDelegate.handleError(this,b),b}return this._updateTaskCount(a,-1),a._transitionTo(t,x),a.runCount=0,a},d.prototype._updateTaskCount=function(a,b){var c=a._zoneDelegates;-1==b&&(a._zoneDelegates=null);for(var d=0;d<c.length;d++)c[d]._updateTaskCount(a.type,b)},d.__symbol__=g,d}(),k={name:"",onHasTask:function(a,b,c,d){return a.hasTask(c,d)},onScheduleTask:function(a,b,c,d){return a.scheduleTask(c,d)},onInvokeTask:function(a,b,c,d,e,f){return a.invokeTask(c,d,e,f)},onCancelTask:function(a,b,c,d){return a.cancelTask(c,d)}},l=function(){function a(a,b,c){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this.zone=a,this._parentDelegate=b,this._forkZS=c&&(c&&c.onFork?c:b._forkZS),this._forkDlgt=c&&(c.onFork?b:b._forkDlgt),this._forkCurrZone=c&&(c.onFork?this.zone:b.zone),this._interceptZS=c&&(c.onIntercept?c:b._interceptZS),this._interceptDlgt=c&&(c.onIntercept?b:b._interceptDlgt),this._interceptCurrZone=c&&(c.onIntercept?this.zone:b.zone),this._invokeZS=c&&(c.onInvoke?c:b._invokeZS),this._invokeDlgt=c&&(c.onInvoke?b:b._invokeDlgt),this._invokeCurrZone=c&&(c.onInvoke?this.zone:b.zone),this._handleErrorZS=c&&(c.onHandleError?c:b._handleErrorZS),this._handleErrorDlgt=c&&(c.onHandleError?b:b._handleErrorDlgt),this._handleErrorCurrZone=c&&(c.onHandleError?this.zone:b.zone),this._scheduleTaskZS=c&&(c.onScheduleTask?c:b._scheduleTaskZS),this._scheduleTaskDlgt=c&&(c.onScheduleTask?b:b._scheduleTaskDlgt),this._scheduleTaskCurrZone=c&&(c.onScheduleTask?this.zone:b.zone),this._invokeTaskZS=c&&(c.onInvokeTask?c:b._invokeTaskZS),this._invokeTaskDlgt=c&&(c.onInvokeTask?b:b._invokeTaskDlgt),this._invokeTaskCurrZone=c&&(c.onInvokeTask?this.zone:b.zone),this._cancelTaskZS=c&&(c.onCancelTask?c:b._cancelTaskZS),this._cancelTaskDlgt=c&&(c.onCancelTask?b:b._cancelTaskDlgt),this._cancelTaskCurrZone=c&&(c.onCancelTask?this.zone:b.zone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;var d=c&&c.onHasTask,e=b&&b._hasTaskZS;(d||e)&&(this._hasTaskZS=d?c:k,this._hasTaskDlgt=b,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=a,c.onScheduleTask||(this._scheduleTaskZS=k,this._scheduleTaskDlgt=b,this._scheduleTaskCurrZone=this.zone),c.onInvokeTask||(this._invokeTaskZS=k,this._invokeTaskDlgt=b,this._invokeTaskCurrZone=this.zone),c.onCancelTask||(this._cancelTaskZS=k,this._cancelTaskDlgt=b,this._cancelTaskCurrZone=this.zone))}return a.prototype.fork=function(a,b){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,a,b):new j(a,b)},a.prototype.intercept=function(a,b,c){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,a,b,c):b},a.prototype.invoke=function(a,b,c,d,e){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,a,b,c,d,e):b.apply(c,d)},a.prototype.handleError=function(a,b){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,a,b)},a.prototype.scheduleTask=function(a,b){var c=b;if(this._scheduleTaskZS)this._hasTaskZS&&c._zoneDelegates.push(this._hasTaskDlgtOwner),(c=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,a,b))||(c=b);else if(b.scheduleFn)b.scheduleFn(b);else{if(b.type!=z)throw new Error("Task is missing scheduleFn.");d(b)}return c},a.prototype.invokeTask=function(a,b,c,d){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,a,b,c,d):b.callback.apply(c,d)},a.prototype.cancelTask=function(a,b){var c;if(this._cancelTaskZS)c=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,a,b);else{if(!b.cancelFn)throw Error("Task is not cancelable");c=b.cancelFn(b)}return c},a.prototype.hasTask=function(a,b){try{return this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,a,b)}catch(b){this.handleError(a,b)}},a.prototype._updateTaskCount=function(a,b){var c=this._taskCounts,d=c[a],e=c[a]=d+b;if(e<0)throw new Error("More tasks executed then were scheduled.");if(0==d||0==e){var f={microTask:c.microTask>0,macroTask:c.macroTask>0,eventTask:c.eventTask>0,change:a};this.hasTask(this.zone,f)}},a}(),m=function(){function b(c,d,e,f,g,h){this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=c,this.source=d,this.data=f,this.scheduleFn=g,this.cancelFn=h,this.callback=e;var i=this;c===B&&f&&f.useG?this.invoke=b.invokeTask:this.invoke=function(){return b.invokeTask.call(a,i,this,arguments)}}return b.invokeTask=function(a,b,c){a||(a=this),G++;try{return a.runCount++,a.zone.runTask(a,b,c)}finally{1==G&&e(),G--}},Object.defineProperty(b.prototype,"zone",{get:function(){return this._zone},enumerable:!0,configurable:!0}),Object.defineProperty(b.prototype,"state",{get:function(){return this._state},enumerable:!0,configurable:!0}),b.prototype.cancelScheduleRequest=function(){this._transitionTo(t,u)},b.prototype._transitionTo=function(a,b,c){if(this._state!==b&&this._state!==c)throw new Error(this.type+" '"+this.source+"': can not transition to '"+a+"', expecting state '"+b+"'"+(c?" or '"+c+"'":"")+", was '"+this._state+"'.");this._state=a,a==t&&(this._zoneDelegates=null)},b.prototype.toString=function(){return this.data&&void 0!==this.data.handleId?this.data.handleId:Object.prototype.toString.call(this)},b.prototype.toJSON=function(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}},b}(),n=g("setTimeout"),o=g("Promise"),p=g("then"),q=[],r=!1,s={name:"NO ZONE"},t="notScheduled",u="scheduling",v="scheduled",w="running",x="canceling",y="unknown",z="microTask",A="macroTask",B="eventTask",C={},D={symbol:g,currentZoneFrame:function(){return E},onUnhandledError:f,microtaskDrainDone:f,scheduleMicroTask:d,showUncaughtError:function(){return!j[g("ignoreConsoleErrorUncaughtError")]},patchEventTarget:function(){return[]},patchOnProperties:f,patchMethod:function(){return f},bindArguments:function(){return null},setNativePromise:function(a){a&&"function"==typeof a.resolve&&(i=a.resolve(0))}},E={parent:null,zone:new j(null,null)},F=null,G=0;c("Zone","Zone"),a.Zone=j}("undefined"!=typeof window&&window||"undefined"!=typeof self&&self||global);Zone.__load_patch("ZoneAwarePromise",function(a,b,c){function d(a){if(a&&a.toString===Object.prototype.toString){var b=a.constructor&&a.constructor.name;return(b||"")+": "+JSON.stringify(a)}return a?a.toString():Object.prototype.toString.call(a)}function e(a){c.onUnhandledError(a);try{var d=b[u];d&&"function"==typeof d&&d.call(this,a)}catch(a){}}function f(a){return a&&a.then}function g(a){return a}function h(a){return J.reject(a)}function i(a,b){return function(c){try{j(a,b,c)}catch(b){j(a,!1,b)}}}function j(a,e,f){var g=F();if(a===f)throw new TypeError(G);if(a[v]===B){var h=null;try{"object"!=typeof f&&"function"!=typeof f||(h=f&&f.then)}catch(b){return g(function(){j(a,!1,b)})(),a}if(e!==D&&f instanceof J&&f.hasOwnProperty(v)&&f.hasOwnProperty(w)&&f[v]!==B)k(f),j(a,f[v],f[w]);else if(e!==D&&"function"==typeof h)try{h.call(f,g(i(a,e)),g(i(a,!1)))}catch(b){g(function(){j(a,!1,b)})()}else{a[v]=e;var m=a[w];if(a[w]=f,a[x]===x&&e===C&&(a[v]=a[z],a[w]=a[y]),e===D&&f instanceof Error){var n=b.currentTask&&b.currentTask.data&&b.currentTask.data[t];n&&o(f,H,{configurable:!0,enumerable:!1,writable:!0,value:n})}for(var p=0;p<m.length;)l(a,m[p++],m[p++],m[p++],m[p++]);if(0==m.length&&e==D){a[v]=E;try{throw new Error("Uncaught (in promise): "+d(f)+(f&&f.stack?"\n"+f.stack:""))}catch(d){var r=d;r.rejection=f,r.promise=a,r.zone=b.current,r.task=b.currentTask,q.push(r),c.scheduleMicroTask()}}}}return a}function k(a){if(a[v]===E){try{var c=b[I];c&&"function"==typeof c&&c.call(this,{rejection:a[w],promise:a})}catch(a){}a[v]=D;for(var d=0;d<q.length;d++)a===q[d].promise&&q.splice(d,1)}}function l(a,b,c,d,e){k(a);var f=a[v],i=f?"function"==typeof d?d:g:"function"==typeof e?e:h;b.scheduleMicroTask(A,function(){try{var d=a[w],e=c&&x===c[x];e&&(c[y]=d,c[z]=f);var k=b.run(i,void 0,e&&i!==h&&i!==g?[]:[d]);j(c,!0,k)}catch(a){j(c,!1,a)}},c)}function m(a){var b=a.prototype,c=n(b,"then");if(!c||!1!==c.writable&&c.configurable){var d=b.then;b[s]=d,a.prototype.then=function(a,b){var c=this;return new J(function(a,b){d.call(c,a,b)}).then(a,b)},a[N]=!0}}var n=Object.getOwnPropertyDescriptor,o=Object.defineProperty,p=c.symbol,q=[],r=p("Promise"),s=p("then"),t="__creationTrace__";c.onUnhandledError=function(a){if(c.showUncaughtError()){var b=a&&a.rejection;b?console.error("Unhandled Promise rejection:",b instanceof Error?b.message:b,"; Zone:",a.zone.name,"; Task:",a.task&&a.task.source,"; Value:",b,b instanceof Error?b.stack:void 0):console.error(a)}},c.microtaskDrainDone=function(){for(;q.length;)for(;q.length;)!function(){var a=q.shift();try{a.zone.runGuarded(function(){throw a})}catch(a){e(a)}}()};var u=p("unhandledPromiseRejectionHandler"),v=p("state"),w=p("value"),x=p("finally"),y=p("parentPromiseValue"),z=p("parentPromiseState"),A="Promise.then",B=null,C=!0,D=!1,E=0,F=function(){var a=!1;return function(b){return function(){a||(a=!0,b.apply(null,arguments))}}},G="Promise resolved with itself",H=p("currentTaskTrace"),I=p("rejectionHandledHandler"),J=function(){function a(b){var c=this;if(!(c instanceof a))throw new Error("Must be an instanceof Promise.");c[v]=B,c[w]=[];try{b&&b(i(c,C),i(c,D))}catch(a){j(c,!1,a)}}return a.toString=function(){return"function ZoneAwarePromise() { [native code] }"},a.resolve=function(a){return j(new this(null),C,a)},a.reject=function(a){return j(new this(null),D,a)},a.race=function(a){function b(a){g&&(g=d(a))}function c(a){g&&(g=e(a))}for(var d,e,g=new this(function(a,b){d=a,e=b}),h=0,i=a;h<i.length;h++){var j=i[h];f(j)||(j=this.resolve(j)),j.then(b,c)}return g},a.all=function(a){for(var b,c,d=new this(function(a,d){b=a,c=d}),e=0,g=[],h=0,i=a;h<i.length;h++){var j=i[h];f(j)||(j=this.resolve(j)),j.then(function(a){return function(c){g[a]=c,--e||b(g)}}(e),c),e++}return e||b(g),d},a.prototype.then=function(a,c){var d=new this.constructor(null),e=b.current;return this[v]==B?this[w].push(e,d,a,c):l(this,e,d,a,c),d},a.prototype.catch=function(a){return this.then(null,a)},a.prototype.finally=function(a){var c=new this.constructor(null);c[x]=x;var d=b.current;return this[v]==B?this[w].push(d,c,a,a):l(this,d,c,a,a),c},a}();J.resolve=J.resolve,J.reject=J.reject,J.race=J.race,J.all=J.all;var K=a[r]=a.Promise,L=b.__symbol__("ZoneAwarePromise"),M=n(a,"Promise");M&&!M.configurable||(M&&delete M.writable,M&&delete M.value,M||(M={configurable:!0,enumerable:!0}),M.get=function(){return a[L]?a[L]:a[r]},M.set=function(b){b===J?a[L]=b:(a[r]=b,b.prototype[s]||m(b),c.setNativePromise(b))},o(a,"Promise",M)),a.Promise=J;var N=p("thenPatched");if(K){m(K);var O=a.fetch;"function"==typeof O&&(a.fetch=function(a){return function(){var b=a.apply(this,arguments);if(b instanceof J)return b;var c=b.constructor;return c[N]||m(c),b}}(O))}return Promise[b.__symbol__("uncaughtPromiseErrors")]=q,J});var E=Object.getOwnPropertyDescriptor,F=Object.defineProperty,G=Object.getPrototypeOf,H=Object.create,I=Array.prototype.slice,J="addEventListener",K="removeEventListener",L=Zone.__symbol__(J),M=Zone.__symbol__(K),N="true",O="false",P="__zone_symbol__",Q=Zone.__symbol__,R="undefined"!=typeof window,S=R?window:void 0,T=R&&S||"object"==typeof self&&self||global,U="removeAttribute",V=[null],W="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope,X=!("nw"in T)&&void 0!==T.process&&"[object process]"==={}.toString.call(T.process),Y=!X&&!W&&!(!R||!S.HTMLElement),Z=void 0!==T.process&&"[object process]"==={}.toString.call(T.process)&&!W&&!(!R||!S.HTMLElement),$={},_=function(a){if(a=a||T.event){var b=$[a.type];b||(b=$[a.type]=Q("ON_PROPERTY"+a.type));var c=this||a.target||T,d=c[b],e=d&&d.apply(this,arguments);return void 0==e||e||a.preventDefault(),e}},aa=Q("originalInstance"),ba=!1,ca=!1;Zone.__load_patch("toString",function(a){var b=Function.prototype.toString,c=Q("OriginalDelegate"),d=Q("Promise"),e=Q("Error"),f=function(){if("function"==typeof this){var f=this[c];if(f)return"function"==typeof f?b.apply(this[c],arguments):Object.prototype.toString.call(f);if(this===Promise){var g=a[d];if(g)return b.apply(g,arguments)}if(this===Error){var h=a[e];if(h)return b.apply(h,arguments)}}return b.apply(this,arguments)};f[c]=b,Function.prototype.toString=f;var g=Object.prototype.toString;Object.prototype.toString=function(){return this instanceof Promise?"[object Promise]":g.apply(this,arguments)}});var da={useG:!0
},ea={},fa={},ga=/^__zone_symbol__(\w+)(true|false)$/,ha="__zone_symbol__propagationStopped",ia=Q("zoneTask"),ja=Object[Q("defineProperty")]=Object.defineProperty,ka=Object[Q("getOwnPropertyDescriptor")]=Object.getOwnPropertyDescriptor,la=Object.create,ma=Q("unconfigurables"),na=["abort","animationcancel","animationend","animationiteration","auxclick","beforeinput","blur","cancel","canplay","canplaythrough","change","compositionstart","compositionupdate","compositionend","cuechange","click","close","contextmenu","curechange","dblclick","drag","dragend","dragenter","dragexit","dragleave","dragover","drop","durationchange","emptied","ended","error","focus","focusin","focusout","gotpointercapture","input","invalid","keydown","keypress","keyup","load","loadstart","loadeddata","loadedmetadata","lostpointercapture","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup","mousewheel","orientationchange","pause","play","playing","pointercancel","pointerdown","pointerenter","pointerleave","pointerlockchange","mozpointerlockchange","webkitpointerlockerchange","pointerlockerror","mozpointerlockerror","webkitpointerlockerror","pointermove","pointout","pointerover","pointerup","progress","ratechange","reset","resize","scroll","seeked","seeking","select","selectionchange","selectstart","show","sort","stalled","submit","suspend","timeupdate","volumechange","touchcancel","touchmove","touchstart","touchend","transitioncancel","transitionend","waiting","wheel"],oa=["afterscriptexecute","beforescriptexecute","DOMContentLoaded","fullscreenchange","mozfullscreenchange","webkitfullscreenchange","msfullscreenchange","fullscreenerror","mozfullscreenerror","webkitfullscreenerror","msfullscreenerror","readystatechange","visibilitychange"],pa=["absolutedeviceorientation","afterinput","afterprint","appinstalled","beforeinstallprompt","beforeprint","beforeunload","devicelight","devicemotion","deviceorientation","deviceorientationabsolute","deviceproximity","hashchange","languagechange","message","mozbeforepaint","offline","online","paint","pageshow","pagehide","popstate","rejectionhandled","storage","unhandledrejection","unload","userproximity","vrdisplyconnected","vrdisplaydisconnected","vrdisplaypresentchange"],qa=["beforecopy","beforecut","beforepaste","copy","cut","paste","dragstart","loadend","animationstart","search","transitionrun","transitionstart","webkitanimationend","webkitanimationiteration","webkitanimationstart","webkittransitionend"],ra=["encrypted","waitingforkey","msneedkey","mozinterruptbegin","mozinterruptend"],sa=["activate","afterupdate","ariarequest","beforeactivate","beforedeactivate","beforeeditfocus","beforeupdate","cellchange","controlselect","dataavailable","datasetchanged","datasetcomplete","errorupdate","filterchange","layoutcomplete","losecapture","move","moveend","movestart","propertychange","resizeend","resizestart","rowenter","rowexit","rowsdelete","rowsinserted","command","compassneedscalibration","deactivate","help","mscontentzoom","msmanipulationstatechanged","msgesturechange","msgesturedoubletap","msgestureend","msgesturehold","msgesturestart","msgesturetap","msgotpointercapture","msinertiastart","mslostpointercapture","mspointercancel","mspointerdown","mspointerenter","mspointerhover","mspointerleave","mspointermove","mspointerout","mspointerover","mspointerup","pointerout","mssitemodejumplistitemremoved","msthumbnailclick","stop","storagecommit"],ta=["webglcontextrestored","webglcontextlost","webglcontextcreationerror"],ua=["autocomplete","autocompleteerror"],va=["toggle"],wa=["load"],xa=["blur","error","focus","load","resize","scroll","messageerror"],ya=["bounce","finish","start"],za=["loadstart","progress","abort","error","load","progress","timeout","loadend","readystatechange"],Aa=["upgradeneeded","complete","abort","success","error","blocked","versionchange","close"],Ba=["close","error","open","message"],Ca=["error","message"],Da=na.concat(ta,ua,va,oa,pa,qa,sa),Ea=Q("unbound");Zone.__load_patch("util",function(a,b,d){d.patchOnProperties=g,d.patchMethod=i,d.bindArguments=c}),Zone.__load_patch("timers",function(a){p(a,"set","clear","Timeout"),p(a,"set","clear","Interval"),p(a,"set","clear","Immediate")}),Zone.__load_patch("requestAnimationFrame",function(a){p(a,"request","cancel","AnimationFrame"),p(a,"mozRequest","mozCancel","AnimationFrame"),p(a,"webkitRequest","webkitCancel","AnimationFrame")}),Zone.__load_patch("blocking",function(a,b){for(var c=["alert","prompt","confirm"],d=0;d<c.length;d++){i(a,c[d],function(c,d,e){return function(d,f){return b.current.run(c,a,f,e)}})}}),Zone.__load_patch("EventTarget",function(a,b,c){var d=b.__symbol__("BLACK_LISTED_EVENTS");a[d]&&(b[d]=a[d]),C(a,c),B(a,c);var e=a.XMLHttpRequestEventTarget;e&&e.prototype&&c.patchEventTarget(a,[e.prototype]),h("MutationObserver"),h("WebKitMutationObserver"),h("IntersectionObserver"),h("FileReader")}),Zone.__load_patch("on_property",function(a,b,c){y(c,a),q(),D(a)}),Zone.__load_patch("canvas",function(a){var b=a.HTMLCanvasElement;void 0!==b&&b.prototype&&b.prototype.toBlob&&j(b.prototype,"toBlob",function(a,b){return{name:"HTMLCanvasElement.toBlob",target:a,cbIdx:0,args:b}})}),Zone.__load_patch("XHR",function(a,c){!function(a){function c(a){return a[d]}function j(a){XMLHttpRequest[g]=!1;var b=a.data,c=b.target,e=c[f];n||(n=c[L],o=c[M]),e&&o.call(c,r,e);var h=c[f]=function(){c.readyState===c.DONE&&!b.aborted&&XMLHttpRequest[g]&&a.state===s&&a.invoke()};return n.call(c,r,h),c[d]||(c[d]=a),u.apply(c,b.args),XMLHttpRequest[g]=!0,a}function k(){}function l(a){var b=a.data;return b.aborted=!0,v.apply(b.target,b.args)}var m=XMLHttpRequest.prototype,n=m[L],o=m[M];if(!n){var p=a.XMLHttpRequestEventTarget;if(p){var q=p.prototype;n=q[L],o=q[M]}}var r="readystatechange",s="scheduled",t=i(m,"open",function(){return function(a,b){return a[e]=0==b[2],a[h]=b[1],t.apply(a,b)}}),u=i(m,"send",function(){return function(a,c){return a[e]?u.apply(a,c):b("XMLHttpRequest.send",k,{target:a,url:a[h],isPeriodic:!1,delay:null,args:c,aborted:!1},j,l)}}),v=i(m,"abort",function(){return function(a){var b=c(a);if(b&&"string"==typeof b.type){if(null==b.cancelFn||b.data&&b.data.aborted)return;b.zone.cancelTask(b)}}})}(a);var d=Q("xhrTask"),e=Q("xhrSync"),f=Q("xhrListener"),g=Q("xhrScheduled"),h=Q("xhrURL")}),Zone.__load_patch("geolocation",function(a){a.navigator&&a.navigator.geolocation&&d(a.navigator.geolocation,["getCurrentPosition","watchPosition"])}),Zone.__load_patch("PromiseRejectionEvent",function(a,b){function c(b){return function(c){n(a,b).forEach(function(d){var e=a.PromiseRejectionEvent;if(e){var f=new e(b,{promise:c.promise,reason:c.rejection});d.invoke(f)}})}}a.PromiseRejectionEvent&&(b[Q("unhandledPromiseRejectionHandler")]=c("unhandledrejection"),b[Q("rejectionHandledHandler")]=c("rejectionhandled"))})});