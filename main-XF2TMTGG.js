var zb=Object.defineProperty,Gb=Object.defineProperties;var jb=Object.getOwnPropertyDescriptors;var zy=Object.getOwnPropertySymbols;var Wb=Object.prototype.hasOwnProperty,$b=Object.prototype.propertyIsEnumerable;var Gy=(n,e,t)=>e in n?zb(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,ue=(n,e)=>{for(var t in e||={})Wb.call(e,t)&&Gy(n,t,e[t]);if(zy)for(var t of zy(e))$b.call(e,t)&&Gy(n,t,e[t]);return n},dt=(n,e)=>Gb(n,jb(e));var qn=(n,e,t)=>new Promise((i,r)=>{var s=c=>{try{a(t.next(c))}catch(l){r(l)}},o=c=>{try{a(t.throw(c))}catch(l){r(l)}},a=c=>c.done?i(c.value):Promise.resolve(c.value).then(s,o);a((t=t.apply(n,e)).next())});var jh;function Cl(){return jh}function bi(n){let e=jh;return jh=n,e}var jy=Symbol("NotFound");function Qs(n){return n===jy||n?.name==="\u0275NotFound"}var an=null,Dl=!1,Wh=1,qb=null,Mn=Symbol("SIGNAL");function qe(n){let e=an;return an=n,e}function Al(){return an}var Ra={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Na(n){if(Dl)throw new Error("");if(an===null)return;an.consumerOnSignalRead(n);let e=an.producersTail;if(e!==void 0&&e.producer===n)return;let t,i=an.recomputing;if(i&&(t=e!==void 0?e.nextProducer:an.producers,t!==void 0&&t.producer===n)){an.producersTail=t,t.lastReadVersion=n.version;return}let r=n.consumersTail;if(r!==void 0&&r.consumer===an&&(!i||Yb(r,an)))return;let s=eo(an),o={producer:n,consumer:an,nextProducer:t,prevConsumer:r,lastReadVersion:n.version,nextConsumer:void 0};an.producersTail=o,e!==void 0?e.nextProducer=o:an.producers=o,s&&Xy(n,o)}function Wy(){Wh++}function $h(n){if(!(eo(n)&&!n.dirty)&&!(!n.dirty&&n.lastCleanEpoch===Wh)){if(!n.producerMustRecompute(n)&&!Oa(n)){Il(n);return}n.producerRecomputeValue(n),Il(n)}}function qh(n){if(n.consumers===void 0)return;let e=Dl;Dl=!0;try{for(let t=n.consumers;t!==void 0;t=t.nextConsumer){let i=t.consumer;i.dirty||Xb(i)}}finally{Dl=e}}function Xh(){return an?.consumerAllowSignalWrites!==!1}function Xb(n){n.dirty=!0,qh(n),n.consumerMarkedDirty?.(n)}function Il(n){n.dirty=!1,n.lastCleanEpoch=Wh}function Pa(n){return n&&$y(n),qe(n)}function $y(n){n.producersTail=void 0,n.recomputing=!0}function Rl(n,e){qe(e),n&&qy(n)}function qy(n){n.recomputing=!1;let e=n.producersTail,t=e!==void 0?e.nextProducer:n.producers;if(t!==void 0){if(eo(n))do t=Yh(t);while(t!==void 0);e!==void 0?e.nextProducer=void 0:n.producers=void 0}}function Oa(n){for(let e=n.producers;e!==void 0;e=e.nextProducer){let t=e.producer,i=e.lastReadVersion;if(i!==t.version||($h(t),i!==t.version))return!0}return!1}function La(n){if(eo(n)){let e=n.producers;for(;e!==void 0;)e=Yh(e)}n.producers=void 0,n.producersTail=void 0,n.consumers=void 0,n.consumersTail=void 0}function Xy(n,e){let t=n.consumersTail,i=eo(n);if(t!==void 0?(e.nextConsumer=t.nextConsumer,t.nextConsumer=e):(e.nextConsumer=void 0,n.consumers=e),e.prevConsumer=t,n.consumersTail=e,!i)for(let r=n.producers;r!==void 0;r=r.nextProducer)Xy(r.producer,r)}function Yh(n){let e=n.producer,t=n.nextProducer,i=n.nextConsumer,r=n.prevConsumer;if(n.nextConsumer=void 0,n.prevConsumer=void 0,i!==void 0?i.prevConsumer=r:e.consumersTail=r,r!==void 0)r.nextConsumer=i;else if(e.consumers=i,!eo(e)){let s=e.producers;for(;s!==void 0;)s=Yh(s)}return t}function eo(n){return n.consumerIsAlwaysLive||n.consumers!==void 0}function Zh(n){qb?.(n)}function Yb(n,e){let t=e.producersTail;if(t!==void 0){let i=e.producers;do{if(i===n)return!0;if(i===t)break;i=i.nextProducer}while(i!==void 0)}return!1}function Kh(n,e){return Object.is(n,e)}function Zb(){throw new Error}var Yy=Zb;function Zy(n){Yy(n)}function Jh(n){Yy=n}var Kb=null;function Qh(n,e){let t=Object.create(Nl);t.value=n,e!==void 0&&(t.equal=e);let i=()=>Ky(t);return i[Mn]=t,Zh(t),[i,o=>to(t,o),o=>ep(t,o)]}function Ky(n){return Na(n),n.value}function to(n,e){Xh()||Zy(n),n.equal(n.value,e)||(n.value=e,Jb(n))}function ep(n,e){Xh()||Zy(n),to(n,e(n.value))}var Nl=dt(ue({},Ra),{equal:Kh,value:void 0,kind:"signal"});function Jb(n){n.version++,Wy(),qh(n),Kb?.(n)}function Ve(n){return typeof n=="function"}function no(n){let t=n(i=>{Error.call(i),i.stack=new Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var Pl=no(n=>function(t){n(this),this.message=t?`${t.length} errors occurred during unsubscription:
${t.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=t});function Fa(n,e){if(n){let t=n.indexOf(e);0<=t&&n.splice(t,1)}}var Lt=class n{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(let s of t)s.remove(this);else t.remove(this);let{initialTeardown:i}=this;if(Ve(i))try{i()}catch(s){e=s instanceof Pl?s.errors:[s]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let s of r)try{Jy(s)}catch(o){e=e??[],o instanceof Pl?e=[...e,...o.errors]:e.push(o)}}if(e)throw new Pl(e)}}add(e){var t;if(e&&e!==this)if(this.closed)Jy(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}}_hasParent(e){let{_parentage:t}=this;return t===e||Array.isArray(t)&&t.includes(e)}_addParent(e){let{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e}_removeParent(e){let{_parentage:t}=this;t===e?this._parentage=null:Array.isArray(t)&&Fa(t,e)}remove(e){let{_finalizers:t}=this;t&&Fa(t,e),e instanceof n&&e._removeParent(this)}};Lt.EMPTY=(()=>{let n=new Lt;return n.closed=!0,n})();var tp=Lt.EMPTY;function Ol(n){return n instanceof Lt||n&&"closed"in n&&Ve(n.remove)&&Ve(n.add)&&Ve(n.unsubscribe)}function Jy(n){Ve(n)?n():n.unsubscribe()}var si={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var io={setTimeout(n,e,...t){let{delegate:i}=io;return i?.setTimeout?i.setTimeout(n,e,...t):setTimeout(n,e,...t)},clearTimeout(n){let{delegate:e}=io;return(e?.clearTimeout||clearTimeout)(n)},delegate:void 0};function Ll(n){io.setTimeout(()=>{let{onUnhandledError:e}=si;if(e)e(n);else throw n})}function ka(){}var Qy=np("C",void 0,void 0);function e_(n){return np("E",void 0,n)}function t_(n){return np("N",n,void 0)}function np(n,e,t){return{kind:n,value:e,error:t}}var is=null;function ro(n){if(si.useDeprecatedSynchronousErrorHandling){let e=!is;if(e&&(is={errorThrown:!1,error:null}),n(),e){let{errorThrown:t,error:i}=is;if(is=null,t)throw i}}else n()}function n_(n){si.useDeprecatedSynchronousErrorHandling&&is&&(is.errorThrown=!0,is.error=n)}var rs=class extends Lt{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,Ol(e)&&e.add(this)):this.destination=tw}static create(e,t,i){return new so(e,t,i)}next(e){this.isStopped?rp(t_(e),this):this._next(e)}error(e){this.isStopped?rp(e_(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?rp(Qy,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},Qb=Function.prototype.bind;function ip(n,e){return Qb.call(n,e)}var sp=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(i){Fl(i)}}error(e){let{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(i){Fl(i)}else Fl(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(t){Fl(t)}}},so=class extends rs{constructor(e,t,i){super();let r;if(Ve(e)||!e)r={next:e??void 0,error:t??void 0,complete:i??void 0};else{let s;this&&si.useDeprecatedNextContext?(s=Object.create(e),s.unsubscribe=()=>this.unsubscribe(),r={next:e.next&&ip(e.next,s),error:e.error&&ip(e.error,s),complete:e.complete&&ip(e.complete,s)}):r=e}this.destination=new sp(r)}};function Fl(n){si.useDeprecatedSynchronousErrorHandling?n_(n):Ll(n)}function ew(n){throw n}function rp(n,e){let{onStoppedNotification:t}=si;t&&io.setTimeout(()=>t(n,e))}var tw={closed:!0,next:ka,error:ew,complete:ka};var oo=typeof Symbol=="function"&&Symbol.observable||"@@observable";function Ln(n){return n}function op(...n){return ap(n)}function ap(n){return n.length===0?Ln:n.length===1?n[0]:function(t){return n.reduce((i,r)=>r(i),t)}}var it=(()=>{class n{constructor(t){t&&(this._subscribe=t)}lift(t){let i=new n;return i.source=this,i.operator=t,i}subscribe(t,i,r){let s=iw(t)?t:new so(t,i,r);return ro(()=>{let{operator:o,source:a}=this;s.add(o?o.call(s,a):a?this._subscribe(s):this._trySubscribe(s))}),s}_trySubscribe(t){try{return this._subscribe(t)}catch(i){t.error(i)}}forEach(t,i){return i=i_(i),new i((r,s)=>{let o=new so({next:a=>{try{t(a)}catch(c){s(c),o.unsubscribe()}},error:s,complete:r});this.subscribe(o)})}_subscribe(t){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(t)}[oo](){return this}pipe(...t){return ap(t)(this)}toPromise(t){return t=i_(t),new t((i,r)=>{let s;this.subscribe(o=>s=o,o=>r(o),()=>i(s))})}}return n.create=e=>new n(e),n})();function i_(n){var e;return(e=n??si.Promise)!==null&&e!==void 0?e:Promise}function nw(n){return n&&Ve(n.next)&&Ve(n.error)&&Ve(n.complete)}function iw(n){return n&&n instanceof rs||nw(n)&&Ol(n)}function cp(n){return Ve(n?.lift)}function et(n){return e=>{if(cp(e))return e.lift(function(t){try{return n(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function tt(n,e,t,i,r){return new lp(n,e,t,i,r)}var lp=class extends rs{constructor(e,t,i,r,s,o){super(e),this.onFinalize=s,this.shouldUnsubscribe=o,this._next=t?function(a){try{t(a)}catch(c){e.error(c)}}:super._next,this._error=r?function(a){try{r(a)}catch(c){e.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:t}=this;super.unsubscribe(),!t&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};function ao(){return et((n,e)=>{let t=null;n._refCount++;let i=tt(e,void 0,void 0,void 0,()=>{if(!n||n._refCount<=0||0<--n._refCount){t=null;return}let r=n._connection,s=t;t=null,r&&(!s||r===s)&&r.unsubscribe(),e.unsubscribe()});n.subscribe(i),i.closed||(t=n.connect())})}var co=class extends it{constructor(e,t){super(),this.source=e,this.subjectFactory=t,this._subject=null,this._refCount=0,this._connection=null,cp(e)&&(this.lift=e.lift)}_subscribe(e){return this.getSubject().subscribe(e)}getSubject(){let e=this._subject;return(!e||e.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;let{_connection:e}=this;this._subject=this._connection=null,e?.unsubscribe()}connect(){let e=this._connection;if(!e){e=this._connection=new Lt;let t=this.getSubject();e.add(this.source.subscribe(tt(t,void 0,()=>{this._teardown(),t.complete()},i=>{this._teardown(),t.error(i)},()=>this._teardown()))),e.closed&&(this._connection=null,e=Lt.EMPTY)}return e}refCount(){return ao()(this)}};var r_=no(n=>function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var Bt=(()=>{class n extends it{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){let i=new kl(this,this);return i.operator=t,i}_throwIfClosed(){if(this.closed)throw new r_}next(t){ro(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(t)}})}error(t){ro(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;let{observers:i}=this;for(;i.length;)i.shift().error(t)}})}complete(){ro(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){let{hasError:i,isStopped:r,observers:s}=this;return i||r?tp:(this.currentObservers=null,s.push(t),new Lt(()=>{this.currentObservers=null,Fa(s,t)}))}_checkFinalizedStatuses(t){let{hasError:i,thrownError:r,isStopped:s}=this;i?t.error(r):s&&t.complete()}asObservable(){let t=new it;return t.source=this,t}}return n.create=(e,t)=>new kl(e,t),n})(),kl=class extends Bt{constructor(e,t){super(),this.destination=e,this.source=t}next(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.next)===null||i===void 0||i.call(t,e)}error(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.error)===null||i===void 0||i.call(t,e)}complete(){var e,t;(t=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||t===void 0||t.call(e)}_subscribe(e){var t,i;return(i=(t=this.source)===null||t===void 0?void 0:t.subscribe(e))!==null&&i!==void 0?i:tp}};var tn=class extends Bt{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let t=super._subscribe(e);return!t.closed&&e.next(this._value),t}getValue(){let{hasError:e,thrownError:t,_value:i}=this;if(e)throw t;return this._throwIfClosed(),i}next(e){super.next(this._value=e)}};var bn=new it(n=>n.complete());function s_(n){return n&&Ve(n.schedule)}function o_(n){return n[n.length-1]}function a_(n){return Ve(o_(n))?n.pop():void 0}function gr(n){return s_(o_(n))?n.pop():void 0}function l_(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{l(i.next(u))}catch(d){o(d)}}function c(u){try{l(i.throw(u))}catch(d){o(d)}}function l(u){u.done?s(u.value):r(u.value).then(a,c)}l((i=i.apply(n,e||[])).next())})}function c_(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function ss(n){return this instanceof ss?(this.v=n,this):new ss(n)}function u_(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),r,s=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",o),r[Symbol.asyncIterator]=function(){return this},r;function o(p){return function(g){return Promise.resolve(g).then(p,d)}}function a(p,g){i[p]&&(r[p]=function(y){return new Promise(function(m,h){s.push([p,y,m,h])>1||c(p,y)})},g&&(r[p]=g(r[p])))}function c(p,g){try{l(i[p](g))}catch(y){f(s[0][3],y)}}function l(p){p.value instanceof ss?Promise.resolve(p.value.v).then(u,d):f(s[0][2],p)}function u(p){c("next",p)}function d(p){c("throw",p)}function f(p,g){p(g),s.shift(),s.length&&c(s[0][0],s[0][1])}}function d_(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof c_=="function"?c_(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(s){t[s]=n[s]&&function(o){return new Promise(function(a,c){o=n[s](o),r(a,c,o.done,o.value)})}}function r(s,o,a,c){Promise.resolve(c).then(function(l){s({value:l,done:a})},o)}}var Ul=n=>n&&typeof n.length=="number"&&typeof n!="function";function Bl(n){return Ve(n?.then)}function Vl(n){return Ve(n[oo])}function Hl(n){return Symbol.asyncIterator&&Ve(n?.[Symbol.asyncIterator])}function zl(n){return new TypeError(`You provided ${n!==null&&typeof n=="object"?"an invalid object":`'${n}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function rw(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Gl=rw();function jl(n){return Ve(n?.[Gl])}function Wl(n){return u_(this,arguments,function*(){let t=n.getReader();try{for(;;){let{value:i,done:r}=yield ss(t.read());if(r)return yield ss(void 0);yield yield ss(i)}}finally{t.releaseLock()}})}function $l(n){return Ve(n?.getReader)}function Xt(n){if(n instanceof it)return n;if(n!=null){if(Vl(n))return sw(n);if(Ul(n))return ow(n);if(Bl(n))return aw(n);if(Hl(n))return f_(n);if(jl(n))return cw(n);if($l(n))return lw(n)}throw zl(n)}function sw(n){return new it(e=>{let t=n[oo]();if(Ve(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function ow(n){return new it(e=>{for(let t=0;t<n.length&&!e.closed;t++)e.next(n[t]);e.complete()})}function aw(n){return new it(e=>{n.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,Ll)})}function cw(n){return new it(e=>{for(let t of n)if(e.next(t),e.closed)return;e.complete()})}function f_(n){return new it(e=>{uw(n,e).catch(t=>e.error(t))})}function lw(n){return f_(Wl(n))}function uw(n,e){var t,i,r,s;return l_(this,void 0,void 0,function*(){try{for(t=d_(n);i=yield t.next(),!i.done;){let o=i.value;if(e.next(o),e.closed)return}}catch(o){r={error:o}}finally{try{i&&!i.done&&(s=t.return)&&(yield s.call(t))}finally{if(r)throw r.error}}e.complete()})}function wn(n,e,t,i=0,r=!1){let s=e.schedule(function(){t(),r?n.add(this.schedule(null,i)):this.unsubscribe()},i);if(n.add(s),!r)return s}function ql(n,e=0){return et((t,i)=>{t.subscribe(tt(i,r=>wn(i,n,()=>i.next(r),e),()=>wn(i,n,()=>i.complete(),e),r=>wn(i,n,()=>i.error(r),e)))})}function Xl(n,e=0){return et((t,i)=>{i.add(n.schedule(()=>t.subscribe(i),e))})}function h_(n,e){return Xt(n).pipe(Xl(e),ql(e))}function p_(n,e){return Xt(n).pipe(Xl(e),ql(e))}function m_(n,e){return new it(t=>{let i=0;return e.schedule(function(){i===n.length?t.complete():(t.next(n[i++]),t.closed||this.schedule())})})}function g_(n,e){return new it(t=>{let i;return wn(t,e,()=>{i=n[Gl](),wn(t,e,()=>{let r,s;try{({value:r,done:s}=i.next())}catch(o){t.error(o);return}s?t.complete():t.next(r)},0,!0)}),()=>Ve(i?.return)&&i.return()})}function Yl(n,e){if(!n)throw new Error("Iterable cannot be null");return new it(t=>{wn(t,e,()=>{let i=n[Symbol.asyncIterator]();wn(t,e,()=>{i.next().then(r=>{r.done?t.complete():t.next(r.value)})},0,!0)})})}function v_(n,e){return Yl(Wl(n),e)}function y_(n,e){if(n!=null){if(Vl(n))return h_(n,e);if(Ul(n))return m_(n,e);if(Bl(n))return p_(n,e);if(Hl(n))return Yl(n,e);if(jl(n))return g_(n,e);if($l(n))return v_(n,e)}throw zl(n)}function Rt(n,e){return e?y_(n,e):Xt(n)}function Pe(...n){let e=gr(n);return Rt(n,e)}function lo(n,e){let t=Ve(n)?n:()=>n,i=r=>r.error(t());return new it(e?r=>e.schedule(i,0,r):i)}function up(n){return!!n&&(n instanceof it||Ve(n.lift)&&Ve(n.subscribe))}var ji=no(n=>function(){n(this),this.name="EmptyError",this.message="no elements in sequence"});function nt(n,e){return et((t,i)=>{let r=0;t.subscribe(tt(i,s=>{i.next(n.call(e,s,r++))}))})}var{isArray:dw}=Array;function fw(n,e){return dw(e)?n(...e):n(e)}function __(n){return nt(e=>fw(n,e))}var{isArray:hw}=Array,{getPrototypeOf:pw,prototype:mw,keys:gw}=Object;function x_(n){if(n.length===1){let e=n[0];if(hw(e))return{args:e,keys:null};if(vw(e)){let t=gw(e);return{args:t.map(i=>e[i]),keys:t}}}return{args:n,keys:null}}function vw(n){return n&&typeof n=="object"&&pw(n)===mw}function E_(n,e){return n.reduce((t,i,r)=>(t[i]=e[r],t),{})}function Zl(...n){let e=gr(n),t=a_(n),{args:i,keys:r}=x_(n);if(i.length===0)return Rt([],e);let s=new it(yw(i,e,r?o=>E_(r,o):Ln));return t?s.pipe(__(t)):s}function yw(n,e,t=Ln){return i=>{S_(e,()=>{let{length:r}=n,s=new Array(r),o=r,a=r;for(let c=0;c<r;c++)S_(e,()=>{let l=Rt(n[c],e),u=!1;l.subscribe(tt(i,d=>{s[c]=d,u||(u=!0,a--),a||i.next(t(s.slice()))},()=>{--o||i.complete()}))},i)},i)}}function S_(n,e,t){n?wn(t,n,e):e()}function M_(n,e,t,i,r,s,o,a){let c=[],l=0,u=0,d=!1,f=()=>{d&&!c.length&&!l&&e.complete()},p=y=>l<i?g(y):c.push(y),g=y=>{s&&e.next(y),l++;let m=!1;Xt(t(y,u++)).subscribe(tt(e,h=>{r?.(h),s?p(h):e.next(h)},()=>{m=!0},void 0,()=>{if(m)try{for(l--;c.length&&l<i;){let h=c.shift();o?wn(e,o,()=>g(h)):g(h)}f()}catch(h){e.error(h)}}))};return n.subscribe(tt(e,p,()=>{d=!0,f()})),()=>{a?.()}}function Ft(n,e,t=1/0){return Ve(e)?Ft((i,r)=>nt((s,o)=>e(i,s,r,o))(Xt(n(i,r))),t):(typeof e=="number"&&(t=e),et((i,r)=>M_(i,r,n,t)))}function uo(n=1/0){return Ft(Ln,n)}function b_(){return uo(1)}function fo(...n){return b_()(Rt(n,gr(n)))}function Ua(n){return new it(e=>{Xt(n()).subscribe(e)})}function Fn(n,e){return et((t,i)=>{let r=0;t.subscribe(tt(i,s=>n.call(e,s,r++)&&i.next(s)))})}function Wi(n){return et((e,t)=>{let i=null,r=!1,s;i=e.subscribe(tt(t,void 0,void 0,o=>{s=Xt(n(o,Wi(n)(e))),i?(i.unsubscribe(),i=null,s.subscribe(t)):r=!0})),r&&(i.unsubscribe(),i=null,s.subscribe(t))})}function w_(n,e,t,i,r){return(s,o)=>{let a=t,c=e,l=0;s.subscribe(tt(o,u=>{let d=l++;c=a?n(c,u,d):(a=!0,u),i&&o.next(c)},r&&(()=>{a&&o.next(c),o.complete()})))}}function os(n,e){return Ve(e)?Ft(n,e,1):Ft(n,1)}function vr(n){return et((e,t)=>{let i=!1;e.subscribe(tt(t,r=>{i=!0,t.next(r)},()=>{i||t.next(n),t.complete()}))})}function $i(n){return n<=0?()=>bn:et((e,t)=>{let i=0;e.subscribe(tt(t,r=>{++i<=n&&(t.next(r),n<=i&&t.complete())}))})}function Kl(n=_w){return et((e,t)=>{let i=!1;e.subscribe(tt(t,r=>{i=!0,t.next(r)},()=>i?t.complete():t.error(n())))})}function _w(){return new ji}function Ba(n){return et((e,t)=>{try{e.subscribe(t)}finally{t.add(n)}})}function qi(n,e){let t=arguments.length>=2;return i=>i.pipe(n?Fn((r,s)=>n(r,s,i)):Ln,$i(1),t?vr(e):Kl(()=>new ji))}function ho(n){return n<=0?()=>bn:et((e,t)=>{let i=[];e.subscribe(tt(t,r=>{i.push(r),n<i.length&&i.shift()},()=>{for(let r of i)t.next(r);t.complete()},void 0,()=>{i=null}))})}function dp(n,e){let t=arguments.length>=2;return i=>i.pipe(n?Fn((r,s)=>n(r,s,i)):Ln,ho(1),t?vr(e):Kl(()=>new ji))}function fp(n,e){return et(w_(n,e,arguments.length>=2,!0))}function hp(...n){let e=gr(n);return et((t,i)=>{(e?fo(n,t,e):fo(n,t)).subscribe(i)})}function Tn(n,e){return et((t,i)=>{let r=null,s=0,o=!1,a=()=>o&&!r&&i.complete();t.subscribe(tt(i,c=>{r?.unsubscribe();let l=0,u=s++;Xt(n(c,u)).subscribe(r=tt(i,d=>i.next(e?e(c,d,u,l++):d),()=>{r=null,a()}))},()=>{o=!0,a()}))})}function Jl(n){return et((e,t)=>{Xt(n).subscribe(tt(t,()=>t.complete(),ka)),!t.closed&&e.subscribe(t)})}function Yt(n,e,t){let i=Ve(n)||e||t?{next:n,error:e,complete:t}:n;return i?et((r,s)=>{var o;(o=i.subscribe)===null||o===void 0||o.call(i);let a=!0;r.subscribe(tt(s,c=>{var l;(l=i.next)===null||l===void 0||l.call(i,c),s.next(c)},()=>{var c;a=!1,(c=i.complete)===null||c===void 0||c.call(i),s.complete()},c=>{var l;a=!1,(l=i.error)===null||l===void 0||l.call(i,c),s.error(c)},()=>{var c,l;a&&((c=i.unsubscribe)===null||c===void 0||c.call(i)),(l=i.finalize)===null||l===void 0||l.call(i)}))}):Ln}function T_(n){let e=qe(null);try{return n()}finally{qe(e)}}var iu="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",Me=class extends Error{code;constructor(e,t){super(hs(e,t)),this.code=e}};function xw(n){return`NG0${Math.abs(n)}`}function hs(n,e){return`${xw(n)}${e?": "+e:""}`}var Ga=globalThis;function ut(n){for(let e in n)if(n[e]===ut)return e;throw Error("")}function yr(n){if(typeof n=="string")return n;if(Array.isArray(n))return`[${n.map(yr).join(", ")}]`;if(n==null)return""+n;let e=n.overriddenName||n.name;if(e)return`${e}`;let t=n.toString();if(t==null)return""+t;let i=t.indexOf(`
`);return i>=0?t.slice(0,i):t}function wp(n,e){return n?e?`${n} ${e}`:n:e||""}var Ew=ut({__forward_ref__:ut});function ru(n){return n.__forward_ref__=ru,n.toString=function(){return yr(this())},n}function Cn(n){return Tp(n)?n():n}function Tp(n){return typeof n=="function"&&n.hasOwnProperty(Ew)&&n.__forward_ref__===ru}function Te(n){return{token:n.token,providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function ja(n){return Sw(n,su)}function Cp(n){return ja(n)!==null}function Sw(n,e){return n.hasOwnProperty(e)&&n[e]||null}function Mw(n){let e=n?.[su]??null;return e||null}function mp(n){return n&&n.hasOwnProperty(eu)?n[eu]:null}var su=ut({\u0275prov:ut}),eu=ut({\u0275inj:ut}),Oe=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(e,t){this._desc=e,this.\u0275prov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.\u0275prov=Te({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function Dp(n){return n&&!!n.\u0275providers}var Ip=ut({\u0275cmp:ut}),Ap=ut({\u0275dir:ut}),Rp=ut({\u0275pipe:ut}),Np=ut({\u0275mod:ut}),Ha=ut({\u0275fac:ut}),ps=ut({__NG_ELEMENT_ID__:ut}),D_=ut({__NG_ENV_ID__:ut});function Wa(n){return typeof n=="string"?n:n==null?"":String(n)}function A_(n){return typeof n=="function"?n.name||n.toString():typeof n=="object"&&n!=null&&typeof n.type=="function"?n.type.name||n.type.toString():Wa(n)}var R_=ut({ngErrorCode:ut}),bw=ut({ngErrorMessage:ut}),ww=ut({ngTokenPath:ut});function Pp(n,e){return N_("",-200,e)}function ou(n,e){throw new Me(-201,!1)}function N_(n,e,t){let i=new Me(e,n);return i[R_]=e,i[bw]=n,t&&(i[ww]=t),i}function Tw(n){return n[R_]}var gp;function P_(){return gp}function kn(n){let e=gp;return gp=n,e}function Op(n,e,t){let i=ja(n);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(t&8)return null;if(e!==void 0)return e;ou(n,"Injector")}var Cw={},as=Cw,Dw="__NG_DI_FLAG__",vp=class{injector;constructor(e){this.injector=e}retrieve(e,t){let i=cs(t)||0;try{return this.injector.get(e,i&8?null:as,i)}catch(r){if(Qs(r))return r;throw r}}};function Iw(n,e=0){let t=Cl();if(t===void 0)throw new Me(-203,!1);if(t===null)return Op(n,void 0,e);{let i=Aw(e),r=t.retrieve(n,i);if(Qs(r)){if(i.optional)return null;throw r}return r}}function Ge(n,e=0){return(P_()||Iw)(Cn(n),e)}function ee(n,e){return Ge(n,cs(e))}function cs(n){return typeof n>"u"||typeof n=="number"?n:0|(n.optional&&8)|(n.host&&1)|(n.self&&2)|(n.skipSelf&&4)}function Aw(n){return{optional:!!(n&8),host:!!(n&1),self:!!(n&2),skipSelf:!!(n&4)}}function yp(n){let e=[];for(let t=0;t<n.length;t++){let i=Cn(n[t]);if(Array.isArray(i)){if(i.length===0)throw new Me(900,!1);let r,s=0;for(let o=0;o<i.length;o++){let a=i[o],c=Rw(a);typeof c=="number"?c===-1?r=a.token:s|=c:r=a}e.push(Ge(r,s))}else e.push(Ge(i))}return e}function Rw(n){return n[Dw]}function ls(n,e){let t=n.hasOwnProperty(Ha);return t?n[Ha]:null}function O_(n,e,t){if(n.length!==e.length)return!1;for(let i=0;i<n.length;i++){let r=n[i],s=e[i];if(t&&(r=t(r),s=t(s)),s!==r)return!1}return!0}function L_(n){return n.flat(Number.POSITIVE_INFINITY)}function au(n,e){n.forEach(t=>Array.isArray(t)?au(t,e):e(t))}function Lp(n,e,t){e>=n.length?n.push(t):n.splice(e,0,t)}function $a(n,e){return e>=n.length-1?n.pop():n.splice(e,1)[0]}function F_(n,e){let t=[];for(let i=0;i<n;i++)t.push(e);return t}var ms={},us=[],xr=new Oe(""),Fp=new Oe("",-1),kp=new Oe(""),za=class{get(e,t=as){if(t===as){let r=N_("",-201);throw r.name="\u0275NotFound",r}return t}};function Up(n){return n[Np]||null}function Er(n){return n[Ip]||null}function Bp(n){return n[Ap]||null}function k_(n){return n[Rp]||null}function cu(n){return{\u0275providers:n}}function U_(...n){return{\u0275providers:Vp(!0,n),\u0275fromNgModule:!0}}function Vp(n,...e){let t=[],i=new Set,r,s=o=>{t.push(o)};return au(e,o=>{let a=o;tu(a,s,[],i)&&(r||=[],r.push(a))}),r!==void 0&&B_(r,s),t}function B_(n,e){for(let t=0;t<n.length;t++){let{ngModule:i,providers:r}=n[t];Hp(r,s=>{e(s,i)})}}function tu(n,e,t,i){if(n=Cn(n),!n)return!1;let r=null,s=mp(n),o=!s&&Er(n);if(!s&&!o){let c=n.ngModule;if(s=mp(c),s)r=c;else return!1}else{if(o&&!o.standalone)return!1;r=n}let a=i.has(r);if(o){if(a)return!1;if(i.add(r),o.dependencies){let c=typeof o.dependencies=="function"?o.dependencies():o.dependencies;for(let l of c)tu(l,e,t,i)}}else if(s){if(s.imports!=null&&!a){i.add(r);let l;try{au(s.imports,u=>{tu(u,e,t,i)&&(l||=[],l.push(u))})}finally{}l!==void 0&&B_(l,e)}if(!a){let l=ls(r)||(()=>new r);e({provide:r,useFactory:l,deps:us},r),e({provide:kp,useValue:r,multi:!0},r),e({provide:xr,useValue:()=>Ge(r),multi:!0},r)}let c=s.providers;if(c!=null&&!a){let l=n;Hp(c,u=>{e(u,l)})}}else return!1;return r!==n&&n.providers!==void 0}function Hp(n,e){for(let t of n)Dp(t)&&(t=t.\u0275providers),Array.isArray(t)?Hp(t,e):e(t)}var Nw=ut({provide:String,useValue:ut});function V_(n){return n!==null&&typeof n=="object"&&Nw in n}function Pw(n){return!!(n&&n.useExisting)}function Ow(n){return!!(n&&n.useFactory)}function nu(n){return typeof n=="function"}var qa=new Oe(""),Ql={},I_={},pp;function Xa(){return pp===void 0&&(pp=new za),pp}var Zt=class{},ds=class extends Zt{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(e,t,i,r){super(),this.parent=t,this.source=i,this.scopes=r,xp(e,o=>this.processProvider(o)),this.records.set(Fp,po(void 0,this)),r.has("environment")&&this.records.set(Zt,po(void 0,this));let s=this.records.get(qa);s!=null&&typeof s.value=="string"&&this.scopes.add(s.value),this.injectorDefTypes=new Set(this.get(kp,us,{self:!0}))}retrieve(e,t){let i=cs(t)||0;try{return this.get(e,as,i)}catch(r){if(Qs(r))return r;throw r}}destroy(){Va(this),this._destroyed=!0;let e=qe(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let t=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of t)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),qe(e)}}onDestroy(e){return Va(this),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){Va(this);let t=bi(this),i=kn(void 0),r;try{return e()}finally{bi(t),kn(i)}}get(e,t=as,i){if(Va(this),e.hasOwnProperty(D_))return e[D_](this);let r=cs(i),s,o=bi(this),a=kn(void 0);try{if(!(r&4)){let l=this.records.get(e);if(l===void 0){let u=Bw(e)&&ja(e);u&&this.injectableDefInScope(u)?l=po(_p(e),Ql):l=null,this.records.set(e,l)}if(l!=null)return this.hydrate(e,l,r)}let c=r&2?Xa():this.parent;return t=r&8&&t===as?null:t,c.get(e,t)}catch(c){let l=Tw(c);throw l===-200||l===-201?new Me(l,null):c}finally{kn(a),bi(o)}}resolveInjectorInitializers(){let e=qe(null),t=bi(this),i=kn(void 0),r;try{let s=this.get(xr,us,{self:!0});for(let o of s)o()}finally{bi(t),kn(i),qe(e)}}toString(){let e=[],t=this.records;for(let i of t.keys())e.push(yr(i));return`R3Injector[${e.join(", ")}]`}processProvider(e){e=Cn(e);let t=nu(e)?e:Cn(e&&e.provide),i=Fw(e);if(!nu(e)&&e.multi===!0){let r=this.records.get(t);r||(r=po(void 0,Ql,!0),r.factory=()=>yp(r.multi),this.records.set(t,r)),t=e,r.multi.push(e)}this.records.set(t,i)}hydrate(e,t,i){let r=qe(null);try{if(t.value===I_)throw Pp(yr(e));return t.value===Ql&&(t.value=I_,t.value=t.factory(void 0,i)),typeof t.value=="object"&&t.value&&Uw(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}finally{qe(r)}}injectableDefInScope(e){if(!e.providedIn)return!1;let t=Cn(e.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(e){let t=this._onDestroyHooks.indexOf(e);t!==-1&&this._onDestroyHooks.splice(t,1)}};function _p(n){let e=ja(n),t=e!==null?e.factory:ls(n);if(t!==null)return t;if(n instanceof Oe)throw new Me(204,!1);if(n instanceof Function)return Lw(n);throw new Me(204,!1)}function Lw(n){if(n.length>0)throw new Me(204,!1);let t=Mw(n);return t!==null?()=>t.factory(n):()=>new n}function Fw(n){if(V_(n))return po(void 0,n.useValue);{let e=H_(n);return po(e,Ql)}}function H_(n,e,t){let i;if(nu(n)){let r=Cn(n);return ls(r)||_p(r)}else if(V_(n))i=()=>Cn(n.useValue);else if(Ow(n))i=()=>n.useFactory(...yp(n.deps||[]));else if(Pw(n))i=(r,s)=>Ge(Cn(n.useExisting),s!==void 0&&s&8?8:void 0);else{let r=Cn(n&&(n.useClass||n.provide));if(kw(n))i=()=>new r(...yp(n.deps));else return ls(r)||_p(r)}return i}function Va(n){if(n.destroyed)throw new Me(205,!1)}function po(n,e,t=!1){return{factory:n,value:e,multi:t?[]:void 0}}function kw(n){return!!n.deps}function Uw(n){return n!==null&&typeof n=="object"&&typeof n.ngOnDestroy=="function"}function Bw(n){return typeof n=="function"||typeof n=="object"&&n.ngMetadataName==="InjectionToken"}function xp(n,e){for(let t of n)Array.isArray(t)?xp(t,e):t&&Dp(t)?xp(t.\u0275providers,e):e(t)}function pn(n,e){let t;n instanceof ds?(Va(n),t=n):t=new vp(n);let i,r=bi(t),s=kn(void 0);try{return e()}finally{bi(r),kn(s)}}function z_(){return P_()!==void 0||Cl()!=null}var ai=0,Fe=1,ke=2,Kt=3,Xn=4,mn=5,mo=6,go=7,Dn=8,Sr=9,Ti=10,kt=11,vo=12,zp=13,yo=14,In=15,Mr=16,gs=17,Ci=18,Ya=19,Gp=20,Xi=21,lu=22,Za=23,Un=24,uu=25,Ka=26,nn=27,G_=1;var br=7,Ja=8,vs=9,gn=10;function Di(n){return Array.isArray(n)&&typeof n[G_]=="object"}function ci(n){return Array.isArray(n)&&n[G_]===!0}function jp(n){return(n.flags&4)!==0}function wr(n){return n.componentOffset>-1}function Qa(n){return(n.flags&1)===1}function ys(n){return!!n.template}function _o(n){return(n[ke]&512)!==0}function _s(n){return(n[ke]&256)===256}var j_="svg",W_="math";function Yn(n){for(;Array.isArray(n);)n=n[ai];return n}function $_(n,e){return Yn(e[n])}function li(n,e){return Yn(e[n.index])}function du(n,e){return n.data[e]}function Zn(n,e){let t=e[n];return Di(t)?t:t[ai]}function q_(n){return(n[ke]&4)===4}function fu(n){return(n[ke]&128)===128}function X_(n){return ci(n[Kt])}function Tr(n,e){return e==null?null:n[e]}function Wp(n){n[gs]=0}function $p(n){n[ke]&1024||(n[ke]|=1024,fu(n)&&tc(n))}function ec(n){return!!(n[ke]&9216||n[Un]?.dirty)}function hu(n){n[Ti].changeDetectionScheduler?.notify(8),n[ke]&64&&(n[ke]|=1024),ec(n)&&tc(n)}function tc(n){n[Ti].changeDetectionScheduler?.notify(0);let e=_r(n);for(;e!==null&&!(e[ke]&8192||(e[ke]|=8192,!fu(e)));)e=_r(e)}function qp(n,e){if(_s(n))throw new Me(911,!1);n[Xi]===null&&(n[Xi]=[]),n[Xi].push(e)}function Y_(n,e){if(n[Xi]===null)return;let t=n[Xi].indexOf(e);t!==-1&&n[Xi].splice(t,1)}function _r(n){let e=n[Kt];return ci(e)?e[Kt]:e}function Xp(n){return n[go]??=[]}function Yp(n){return n.cleanup??=[]}function Z_(n,e,t,i){let r=Xp(e);r.push(t),n.firstCreatePass&&Yp(n).push(i,r.length-1)}var ot={lFrame:s0(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var Ep=!1;function K_(){return ot.lFrame.elementDepthCount}function J_(){ot.lFrame.elementDepthCount++}function Zp(){ot.lFrame.elementDepthCount--}function Kp(){return ot.bindingsEnabled}function Jp(){return ot.skipHydrationRootTNode!==null}function Qp(n){return ot.skipHydrationRootTNode===n}function em(){ot.skipHydrationRootTNode=null}function pt(){return ot.lFrame.lView}function Kn(){return ot.lFrame.tView}function vn(){let n=tm();for(;n!==null&&n.type===64;)n=n.parent;return n}function tm(){return ot.lFrame.currentTNode}function Q_(){let n=ot.lFrame,e=n.currentTNode;return n.isParent?e:e.parent}function xo(n,e){let t=ot.lFrame;t.currentTNode=n,t.isParent=e}function nm(){return ot.lFrame.isParent}function im(){ot.lFrame.isParent=!1}function rm(){return Ep}function sm(n){let e=Ep;return Ep=n,e}function e0(n){return ot.lFrame.bindingIndex=n}function pu(){return ot.lFrame.bindingIndex++}function t0(){return ot.lFrame.inI18n}function n0(n,e){let t=ot.lFrame;t.bindingIndex=t.bindingRootIndex=n,mu(e)}function i0(){return ot.lFrame.currentDirectiveIndex}function mu(n){ot.lFrame.currentDirectiveIndex=n}function om(){return ot.lFrame.currentQueryIndex}function gu(n){ot.lFrame.currentQueryIndex=n}function Vw(n){let e=n[Fe];return e.type===2?e.declTNode:e.type===1?n[mn]:null}function am(n,e,t){if(t&4){let r=e,s=n;for(;r=r.parent,r===null&&!(t&1);)if(r=Vw(s),r===null||(s=s[yo],r.type&10))break;if(r===null)return!1;e=r,n=s}let i=ot.lFrame=r0();return i.currentTNode=e,i.lView=n,!0}function vu(n){let e=r0(),t=n[Fe];ot.lFrame=e,e.currentTNode=t.firstChild,e.lView=n,e.tView=t,e.contextLView=n,e.bindingIndex=t.bindingStartIndex,e.inI18n=!1}function r0(){let n=ot.lFrame,e=n===null?null:n.child;return e===null?s0(n):e}function s0(n){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:n,child:null,inI18n:!1};return n!==null&&(n.child=e),e}function o0(){let n=ot.lFrame;return ot.lFrame=n.parent,n.currentTNode=null,n.lView=null,n}var cm=o0;function yu(){let n=o0();n.isParent=!0,n.tView=null,n.selectedIndex=-1,n.contextLView=null,n.elementDepthCount=0,n.currentDirectiveIndex=-1,n.currentNamespace=null,n.bindingRootIndex=-1,n.bindingIndex=-1,n.currentQueryIndex=0}function _u(){return ot.lFrame.selectedIndex}function Cr(n){ot.lFrame.selectedIndex=n}function lm(){let n=ot.lFrame;return du(n.tView,n.selectedIndex)}function a0(){return ot.lFrame.currentNamespace}var c0=!0;function xu(){return c0}function Eu(n){c0=n}function Sp(n,e=null,t=null,i){let r=um(n,e,t,i);return r.resolveInjectorInitializers(),r}function um(n,e=null,t=null,i,r=new Set){let s=[t||us,U_(n)];return i=i||(typeof n=="object"?void 0:yr(n)),new ds(s,e||Xa(),i||null,r)}var oi=class n{static THROW_IF_NOT_FOUND=as;static NULL=new za;static create(e,t){if(Array.isArray(e))return Sp({name:""},t,e,"");{let i=e.name??"";return Sp({name:i},e.parent,e.providers,i)}}static \u0275prov=Te({token:n,providedIn:"any",factory:()=>Ge(Fp)});static __NG_ELEMENT_ID__=-1},Vt=new Oe(""),Eo=(()=>{class n{static __NG_ELEMENT_ID__=Hw;static __NG_ENV_ID__=t=>t}return n})(),Mp=class extends Eo{_lView;constructor(e){super(),this._lView=e}get destroyed(){return _s(this._lView)}onDestroy(e){let t=this._lView;return qp(t,e),()=>Y_(t,e)}};function Hw(){return new Mp(pt())}var wi=class{_console=console;handleError(e){this._console.error("ERROR",e)}},Jn=new Oe("",{providedIn:"root",factory:()=>{let n=ee(Zt),e;return t=>{n.destroyed&&!e?setTimeout(()=>{throw t}):(e??=n.get(wi),e.handleError(t))}}}),l0={provide:xr,useValue:()=>void ee(wi),multi:!0};function So(n,e){let[t,i,r]=Qh(n,e?.equal),s=t,o=s[Mn];return s.set=i,s.update=r,s.asReadonly=u0.bind(s),s}function u0(){let n=this[Mn];if(n.readonlyFn===void 0){let e=()=>this();e[Mn]=n,n.readonlyFn=e}return n.readonlyFn}var fs=class{},Su=new Oe("",{providedIn:"root",factory:()=>!1});var dm=new Oe(""),fm=new Oe(""),Yi=(()=>{class n{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new tn(!1);get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new it(t=>{t.next(!1),t.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let t=this.taskId++;return this.pendingTasks.add(t),t}has(t){return this.pendingTasks.has(t)}remove(t){this.pendingTasks.delete(t),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=Te({token:n,providedIn:"root",factory:()=>new n})}return n})();function nc(...n){}var hm=(()=>{class n{static \u0275prov=Te({token:n,providedIn:"root",factory:()=>new bp})}return n})(),bp=class{dirtyEffectCount=0;queues=new Map;add(e){this.enqueue(e),this.schedule(e)}schedule(e){e.dirty&&this.dirtyEffectCount++}remove(e){let t=e.zone,i=this.queues.get(t);i.has(e)&&(i.delete(e),e.dirty&&this.dirtyEffectCount--)}enqueue(e){let t=e.zone;this.queues.has(t)||this.queues.set(t,new Set);let i=this.queues.get(t);i.has(e)||i.add(e)}flush(){for(;this.dirtyEffectCount>0;){let e=!1;for(let[t,i]of this.queues)t===null?e||=this.flushQueue(i):e||=t.run(()=>this.flushQueue(i));e||(this.dirtyEffectCount=0)}}flushQueue(e){let t=!1;for(let i of e)i.dirty&&(this.dirtyEffectCount--,t=!0,i.run());return t}};function ju(n){return{toString:n}.toString()}function tT(n){return typeof n=="function"}var Du=class{previousValue;currentValue;firstChange;constructor(e,t,i){this.previousValue=e,this.currentValue=t,this.firstChange=i}isFirstChange(){return this.firstChange}};function U0(n,e,t,i){e!==null?e.applyValueToInputSignal(e,i):n[t]=i}var Ki=(()=>{let n=()=>B0;return n.ngInherit=!0,n})();function B0(n){return n.type.prototype.ngOnChanges&&(n.setInput=iT),nT}function nT(){let n=H0(this),e=n?.current;if(e){let t=n.previous;if(t===ms)n.previous=e;else for(let i in e)t[i]=e[i];n.current=null,this.ngOnChanges(e)}}function iT(n,e,t,i,r){let s=this.declaredInputs[i],o=H0(n)||rT(n,{previous:ms,current:null}),a=o.current||(o.current={}),c=o.previous,l=c[s];a[s]=new Du(l&&l.currentValue,t,c===ms),U0(n,e,r,t)}var V0="__ngSimpleChanges__";function H0(n){return n[V0]||null}function rT(n,e){return n[V0]=e}var d0=[];var vt=function(n,e=null,t){for(let i=0;i<d0.length;i++){let r=d0[i];r(n,e,t)}};function sT(n,e,t){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:s}=e.type.prototype;if(i){let o=B0(e);(t.preOrderHooks??=[]).push(n,o),(t.preOrderCheckHooks??=[]).push(n,o)}r&&(t.preOrderHooks??=[]).push(0-n,r),s&&((t.preOrderHooks??=[]).push(n,s),(t.preOrderCheckHooks??=[]).push(n,s))}function z0(n,e){for(let t=e.directiveStart,i=e.directiveEnd;t<i;t++){let s=n.data[t].type.prototype,{ngAfterContentInit:o,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:u}=s;o&&(n.contentHooks??=[]).push(-t,o),a&&((n.contentHooks??=[]).push(t,a),(n.contentCheckHooks??=[]).push(t,a)),c&&(n.viewHooks??=[]).push(-t,c),l&&((n.viewHooks??=[]).push(t,l),(n.viewCheckHooks??=[]).push(t,l)),u!=null&&(n.destroyHooks??=[]).push(t,u)}}function bu(n,e,t){G0(n,e,3,t)}function wu(n,e,t,i){(n[ke]&3)===t&&G0(n,e,t,i)}function pm(n,e){let t=n[ke];(t&3)===e&&(t&=16383,t+=1,n[ke]=t)}function G0(n,e,t,i){let r=i!==void 0?n[gs]&65535:0,s=i??-1,o=e.length-1,a=0;for(let c=r;c<o;c++)if(typeof e[c+1]=="number"){if(a=e[c],i!=null&&a>=i)break}else e[c]<0&&(n[gs]+=65536),(a<s||s==-1)&&(oT(n,t,e,c),n[gs]=(n[gs]&4294901760)+c+2),c++}function f0(n,e){vt(4,n,e);let t=qe(null);try{e.call(n)}finally{qe(t),vt(5,n,e)}}function oT(n,e,t,i){let r=t[i]<0,s=t[i+1],o=r?-t[i]:t[i],a=n[o];r?n[ke]>>14<n[gs]>>16&&(n[ke]&3)===e&&(n[ke]+=16384,f0(a,s)):f0(a,s)}var bo=-1,sc=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(e,t,i,r){this.factory=e,this.name=r,this.canSeeViewProviders=t,this.injectImpl=i}};function aT(n){return(n.flags&8)!==0}function cT(n){return(n.flags&16)!==0}function lT(n,e,t){let i=0;for(;i<t.length;){let r=t[i];if(typeof r=="number"){if(r!==0)break;i++;let s=t[i++],o=t[i++],a=t[i++];n.setAttribute(e,o,a,s)}else{let s=r,o=t[++i];uT(s)?n.setProperty(e,s,o):n.setAttribute(e,s,o),i++}}return i}function j0(n){return n===3||n===4||n===6}function uT(n){return n.charCodeAt(0)===64}function Wu(n,e){if(!(e===null||e.length===0))if(n===null||n.length===0)n=e.slice();else{let t=-1;for(let i=0;i<e.length;i++){let r=e[i];typeof r=="number"?t=r:t===0||(t===-1||t===2?h0(n,t,r,null,e[++i]):h0(n,t,r,null,null))}}return n}function h0(n,e,t,i,r){let s=0,o=n.length;if(e===-1)o=-1;else for(;s<n.length;){let a=n[s++];if(typeof a=="number"){if(a===e){o=-1;break}else if(a>e){o=s-1;break}}}for(;s<n.length;){let a=n[s];if(typeof a=="number")break;if(a===t){r!==null&&(n[s+1]=r);return}s++,r!==null&&s++}o!==-1&&(n.splice(o,0,e),s=o+1),n.splice(s++,0,t),r!==null&&n.splice(s++,0,r)}function W0(n){return n!==bo}function Iu(n){return n&32767}function dT(n){return n>>16}function Au(n,e){let t=dT(n),i=e;for(;t>0;)i=i[yo],t--;return i}var _m=!0;function p0(n){let e=_m;return _m=n,e}var fT=256,$0=fT-1,q0=5,hT=0,Ii={};function pT(n,e,t){let i;typeof t=="string"?i=t.charCodeAt(0)||0:t.hasOwnProperty(ps)&&(i=t[ps]),i==null&&(i=t[ps]=hT++);let r=i&$0,s=1<<r;e.data[n+(r>>q0)]|=s}function X0(n,e){let t=Y0(n,e);if(t!==-1)return t;let i=e[Fe];i.firstCreatePass&&(n.injectorIndex=e.length,mm(i.data,n),mm(e,null),mm(i.blueprint,null));let r=Vm(n,e),s=n.injectorIndex;if(W0(r)){let o=Iu(r),a=Au(r,e),c=a[Fe].data;for(let l=0;l<8;l++)e[s+l]=a[o+l]|c[o+l]}return e[s+8]=r,s}function mm(n,e){n.push(0,0,0,0,0,0,0,0,e)}function Y0(n,e){return n.injectorIndex===-1||n.parent&&n.parent.injectorIndex===n.injectorIndex||e[n.injectorIndex+8]===null?-1:n.injectorIndex}function Vm(n,e){if(n.parent&&n.parent.injectorIndex!==-1)return n.parent.injectorIndex;let t=0,i=null,r=e;for(;r!==null;){if(i=ex(r),i===null)return bo;if(t++,r=r[yo],i.injectorIndex!==-1)return i.injectorIndex|t<<16}return bo}function mT(n,e,t){pT(n,e,t)}function gT(n,e){if(e==="class")return n.classes;if(e==="style")return n.styles;let t=n.attrs;if(t){let i=t.length,r=0;for(;r<i;){let s=t[r];if(j0(s))break;if(s===0)r=r+2;else if(typeof s=="number")for(r++;r<i&&typeof t[r]=="string";)r++;else{if(s===e)return t[r+1];r=r+2}}}return null}function Z0(n,e,t){if(t&8||n!==void 0)return n;ou(e,"NodeInjector")}function K0(n,e,t,i){if(t&8&&i===void 0&&(i=null),(t&3)===0){let r=n[Sr],s=kn(void 0);try{return r?r.get(e,i,t&8):Op(e,i,t&8)}finally{kn(s)}}return Z0(i,e,t)}function J0(n,e,t,i=0,r){if(n!==null){if(e[ke]&2048&&!(i&2)){let o=xT(n,e,t,i,Ii);if(o!==Ii)return o}let s=Q0(n,e,t,i,Ii);if(s!==Ii)return s}return K0(e,t,i,r)}function Q0(n,e,t,i,r){let s=yT(t);if(typeof s=="function"){if(!am(e,n,i))return i&1?Z0(r,t,i):K0(e,t,i,r);try{let o;if(o=s(i),o==null&&!(i&8))ou(t);else return o}finally{cm()}}else if(typeof s=="number"){let o=null,a=Y0(n,e),c=bo,l=i&1?e[In][mn]:null;for((a===-1||i&4)&&(c=a===-1?Vm(n,e):e[a+8],c===bo||!g0(i,!1)?a=-1:(o=e[Fe],a=Iu(c),e=Au(c,e)));a!==-1;){let u=e[Fe];if(m0(s,a,u.data)){let d=vT(a,e,t,o,i,l);if(d!==Ii)return d}c=e[a+8],c!==bo&&g0(i,e[Fe].data[a+8]===l)&&m0(s,a,e)?(o=u,a=Iu(c),e=Au(c,e)):a=-1}}return r}function vT(n,e,t,i,r,s){let o=e[Fe],a=o.data[n+8],c=i==null?wr(a)&&_m:i!=o&&(a.type&3)!==0,l=r&1&&s===a,u=Tu(a,o,t,c,l);return u!==null?Ru(e,o,u,a,r):Ii}function Tu(n,e,t,i,r){let s=n.providerIndexes,o=e.data,a=s&1048575,c=n.directiveStart,l=n.directiveEnd,u=s>>20,d=i?a:a+u,f=r?a+u:l;for(let p=d;p<f;p++){let g=o[p];if(p<c&&t===g||p>=c&&g.type===t)return p}if(r){let p=o[c];if(p&&ys(p)&&p.type===t)return c}return null}function Ru(n,e,t,i,r){let s=n[t],o=e.data;if(s instanceof sc){let a=s;if(a.resolving){let p=A_(o[t]);throw Pp(p)}let c=p0(a.canSeeViewProviders);a.resolving=!0;let l=o[t].type||o[t],u,d=a.injectImpl?kn(a.injectImpl):null,f=am(n,i,0);try{s=n[t]=a.factory(void 0,r,o,n,i),e.firstCreatePass&&t>=i.directiveStart&&sT(t,o[t],e)}finally{d!==null&&kn(d),p0(c),a.resolving=!1,cm()}}return s}function yT(n){if(typeof n=="string")return n.charCodeAt(0)||0;let e=n.hasOwnProperty(ps)?n[ps]:void 0;return typeof e=="number"?e>=0?e&$0:_T:e}function m0(n,e,t){let i=1<<n;return!!(t[e+(n>>q0)]&i)}function g0(n,e){return!(n&2)&&!(n&1&&e)}var xs=class{_tNode;_lView;constructor(e,t){this._tNode=e,this._lView=t}get(e,t,i){return J0(this._tNode,this._lView,e,cs(i),t)}};function _T(){return new xs(vn(),pt())}function $u(n){return ju(()=>{let e=n.prototype.constructor,t=e[Ha]||xm(e),i=Object.prototype,r=Object.getPrototypeOf(n.prototype).constructor;for(;r&&r!==i;){let s=r[Ha]||xm(r);if(s&&s!==t)return s;r=Object.getPrototypeOf(r)}return s=>new s})}function xm(n){return Tp(n)?()=>{let e=xm(Cn(n));return e&&e()}:ls(n)}function xT(n,e,t,i,r){let s=n,o=e;for(;s!==null&&o!==null&&o[ke]&2048&&!_o(o);){let a=Q0(s,o,t,i|2,Ii);if(a!==Ii)return a;let c=s.parent;if(!c){let l=o[Gp];if(l){let u=l.get(t,Ii,i);if(u!==Ii)return u}c=ex(o),o=o[yo]}s=c}return r}function ex(n){let e=n[Fe],t=e.type;return t===2?e.declTNode:t===1?n[mn]:null}function lc(n){return gT(vn(),n)}function ET(){return Io(vn(),pt())}function Io(n,e){return new Ai(li(n,e))}var Ai=(()=>{class n{nativeElement;constructor(t){this.nativeElement=t}static __NG_ELEMENT_ID__=ET}return n})();function ST(n){return n instanceof Ai?n.nativeElement:n}function MT(){return this._results[Symbol.iterator]()}var Nu=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new Bt}constructor(e=!1){this._emitDistinctChangesOnly=e}get(e){return this._results[e]}map(e){return this._results.map(e)}filter(e){return this._results.filter(e)}find(e){return this._results.find(e)}reduce(e,t){return this._results.reduce(e,t)}forEach(e){this._results.forEach(e)}some(e){return this._results.some(e)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(e,t){this.dirty=!1;let i=L_(e);(this._changesDetected=!O_(this._results,i,t))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(e){this._onDirty=e}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=MT};function tx(n){return(n.flags&128)===128}var Hm=(function(n){return n[n.OnPush=0]="OnPush",n[n.Default=1]="Default",n})(Hm||{}),nx=new Map,bT=0;function wT(){return bT++}function TT(n){nx.set(n[Ya],n)}function Em(n){nx.delete(n[Ya])}var v0="__ngContext__";function wo(n,e){Di(e)?(n[v0]=e[Ya],TT(e)):n[v0]=e}function ix(n){return sx(n[vo])}function rx(n){return sx(n[Xn])}function sx(n){for(;n!==null&&!ci(n);)n=n[Xn];return n}var Sm;function zm(n){Sm=n}function ox(){if(Sm!==void 0)return Sm;if(typeof document<"u")return document;throw new Me(210,!1)}var qu=new Oe("",{providedIn:"root",factory:()=>CT}),CT="ng",Xu=new Oe(""),Ao=new Oe("",{providedIn:"platform",factory:()=>"unknown"});var Yu=new Oe("",{providedIn:"root",factory:()=>ox().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var DT="h",IT="b";var ax=!1,cx=new Oe("",{providedIn:"root",factory:()=>ax});var AT=(n,e,t,i)=>{};function RT(n,e,t,i){AT(n,e,t,i)}function Zu(n){return(n.flags&32)===32}var NT=()=>null;function lx(n,e,t=!1){return NT(n,e,t)}function ux(n,e){let t=n.contentQueries;if(t!==null){let i=qe(null);try{for(let r=0;r<t.length;r+=2){let s=t[r],o=t[r+1];if(o!==-1){let a=n.data[o];gu(s),a.contentQueries(2,e[o],o)}}}finally{qe(i)}}}function Mm(n,e,t){gu(0);let i=qe(null);try{e(n,t)}finally{qe(i)}}function dx(n,e,t){if(jp(e)){let i=qe(null);try{let r=e.directiveStart,s=e.directiveEnd;for(let o=r;o<s;o++){let a=n.data[o];if(a.contentQueries){let c=t[o];a.contentQueries(1,c,o)}}}finally{qe(i)}}}var Zi=(function(n){return n[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom",n})(Zi||{});var Mu;function PT(){if(Mu===void 0&&(Mu=null,Ga.trustedTypes))try{Mu=Ga.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:n=>n,createScript:n=>n,createScriptURL:n=>n})}catch{}return Mu}function y0(n){return PT()?.createScriptURL(n)||n}var Pu=class{changingThisBreaksApplicationSecurity;constructor(e){this.changingThisBreaksApplicationSecurity=e}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${iu})`}};function Ku(n){return n instanceof Pu?n.changingThisBreaksApplicationSecurity:n}function Gm(n,e){let t=fx(n);if(t!=null&&t!==e){if(t==="ResourceURL"&&e==="URL")return!0;throw new Error(`Required a safe ${e}, got a ${t} (see ${iu})`)}return t===e}function fx(n){return n instanceof Pu&&n.getTypeName()||null}var OT=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function hx(n){return n=String(n),n.match(OT)?n:"unsafe:"+n}var Ju=(function(n){return n[n.NONE=0]="NONE",n[n.HTML=1]="HTML",n[n.STYLE=2]="STYLE",n[n.SCRIPT=3]="SCRIPT",n[n.URL=4]="URL",n[n.RESOURCE_URL=5]="RESOURCE_URL",n})(Ju||{});function uc(n){let e=mx();return e?e.sanitize(Ju.URL,n)||"":Gm(n,"URL")?Ku(n):hx(Wa(n))}function px(n){let e=mx();if(e)return y0(e.sanitize(Ju.RESOURCE_URL,n)||"");if(Gm(n,"ResourceURL"))return y0(Ku(n));throw new Me(904,!1)}function LT(n,e){return e==="src"&&(n==="embed"||n==="frame"||n==="iframe"||n==="media"||n==="script")||e==="href"&&(n==="base"||n==="link")?px:uc}function jm(n,e,t){return LT(e,t)(n)}function mx(){let n=pt();return n&&n[Ti].sanitizer}function gx(n){return n instanceof Function?n():n}function FT(n,e,t){let i=n.length;for(;;){let r=n.indexOf(e,t);if(r===-1)return r;if(r===0||n.charCodeAt(r-1)<=32){let s=e.length;if(r+s===i||n.charCodeAt(r+s)<=32)return r}t=r+1}}var vx="ng-template";function kT(n,e,t,i){let r=0;if(i){for(;r<e.length&&typeof e[r]=="string";r+=2)if(e[r]==="class"&&FT(e[r+1].toLowerCase(),t,0)!==-1)return!0}else if(Wm(n))return!1;if(r=e.indexOf(1,r),r>-1){let s;for(;++r<e.length&&typeof(s=e[r])=="string";)if(s.toLowerCase()===t)return!0}return!1}function Wm(n){return n.type===4&&n.value!==vx}function UT(n,e,t){let i=n.type===4&&!t?vx:n.value;return e===i}function BT(n,e,t){let i=4,r=n.attrs,s=r!==null?zT(r):0,o=!1;for(let a=0;a<e.length;a++){let c=e[a];if(typeof c=="number"){if(!o&&!ui(i)&&!ui(c))return!1;if(o&&ui(c))continue;o=!1,i=c|i&1;continue}if(!o)if(i&4){if(i=2|i&1,c!==""&&!UT(n,c,t)||c===""&&e.length===1){if(ui(i))return!1;o=!0}}else if(i&8){if(r===null||!kT(n,r,c,t)){if(ui(i))return!1;o=!0}}else{let l=e[++a],u=VT(c,r,Wm(n),t);if(u===-1){if(ui(i))return!1;o=!0;continue}if(l!==""){let d;if(u>s?d="":d=r[u+1].toLowerCase(),i&2&&l!==d){if(ui(i))return!1;o=!0}}}}return ui(i)||o}function ui(n){return(n&1)===0}function VT(n,e,t,i){if(e===null)return-1;let r=0;if(i||!t){let s=!1;for(;r<e.length;){let o=e[r];if(o===n)return r;if(o===3||o===6)s=!0;else if(o===1||o===2){let a=e[++r];for(;typeof a=="string";)a=e[++r];continue}else{if(o===4)break;if(o===0){r+=4;continue}}r+=s?1:2}return-1}else return GT(e,n)}function yx(n,e,t=!1){for(let i=0;i<e.length;i++)if(BT(n,e[i],t))return!0;return!1}function HT(n){let e=n.attrs;if(e!=null){let t=e.indexOf(5);if((t&1)===0)return e[t+1]}return null}function zT(n){for(let e=0;e<n.length;e++){let t=n[e];if(j0(t))return e}return n.length}function GT(n,e){let t=n.indexOf(4);if(t>-1)for(t++;t<n.length;){let i=n[t];if(typeof i=="number")return-1;if(i===e)return t;t++}return-1}function jT(n,e){e:for(let t=0;t<e.length;t++){let i=e[t];if(n.length===i.length){for(let r=0;r<n.length;r++)if(n[r]!==i[r])continue e;return!0}}return!1}function _0(n,e){return n?":not("+e.trim()+")":e}function WT(n){let e=n[0],t=1,i=2,r="",s=!1;for(;t<n.length;){let o=n[t];if(typeof o=="string")if(i&2){let a=n[++t];r+="["+o+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+o:i&4&&(r+=" "+o);else r!==""&&!ui(o)&&(e+=_0(s,r),r=""),i=o,s=s||!ui(i);t++}return r!==""&&(e+=_0(s,r)),e}function $T(n){return n.map(WT).join(",")}function qT(n){let e=[],t=[],i=1,r=2;for(;i<n.length;){let s=n[i];if(typeof s=="string")r===2?s!==""&&e.push(s,n[++i]):r===8&&t.push(s);else{if(!ui(r))break;r=s}i++}return t.length&&e.push(1,...t),e}var Ro={};function XT(n,e){return n.createText(e)}function YT(n,e,t){n.setValue(e,t)}function _x(n,e,t){return n.createElement(e,t)}function Ou(n,e,t,i,r){n.insertBefore(e,t,i,r)}function xx(n,e,t){n.appendChild(e,t)}function x0(n,e,t,i,r){i!==null?Ou(n,e,t,i,r):xx(n,e,t)}function ZT(n,e,t,i){n.removeChild(null,e,t,i)}function KT(n,e,t){n.setAttribute(e,"style",t)}function JT(n,e,t){t===""?n.removeAttribute(e,"class"):n.setAttribute(e,"class",t)}function Ex(n,e,t){let{mergedAttrs:i,classes:r,styles:s}=t;i!==null&&lT(n,e,i),r!==null&&JT(n,e,r),s!==null&&KT(n,e,s)}function $m(n,e,t,i,r,s,o,a,c,l,u){let d=nn+i,f=d+r,p=QT(d,f),g=typeof l=="function"?l():l;return p[Fe]={type:n,blueprint:p,template:t,queries:null,viewQuery:a,declTNode:e,data:p.slice().fill(null,d),bindingStartIndex:d,expandoStartIndex:f,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof s=="function"?s():s,pipeRegistry:typeof o=="function"?o():o,firstChild:null,schemas:c,consts:g,incompleteFirstPass:!1,ssrId:u}}function QT(n,e){let t=[];for(let i=0;i<e;i++)t.push(i<n?null:Ro);return t}function eC(n){let e=n.tView;return e===null||e.incompleteFirstPass?n.tView=$m(1,null,n.template,n.decls,n.vars,n.directiveDefs,n.pipeDefs,n.viewQuery,n.schemas,n.consts,n.id):e}function qm(n,e,t,i,r,s,o,a,c,l,u){let d=e.blueprint.slice();return d[ai]=r,d[ke]=i|4|128|8|64|1024,(l!==null||n&&n[ke]&2048)&&(d[ke]|=2048),Wp(d),d[Kt]=d[yo]=n,d[Dn]=t,d[Ti]=o||n&&n[Ti],d[kt]=a||n&&n[kt],d[Sr]=c||n&&n[Sr]||null,d[mn]=s,d[Ya]=wT(),d[mo]=u,d[Gp]=l,d[In]=e.type==2?n[In]:d,d}function tC(n,e,t){let i=li(e,n),r=eC(t),s=n[Ti].rendererFactory,o=Xm(n,qm(n,r,null,Sx(t),i,e,null,s.createRenderer(i,t),null,null,null));return n[e.index]=o}function Sx(n){let e=16;return n.signals?e=4096:n.onPush&&(e=64),e}function Mx(n,e,t,i){if(t===0)return-1;let r=e.length;for(let s=0;s<t;s++)e.push(i),n.blueprint.push(i),n.data.push(null);return r}function Xm(n,e){return n[vo]?n[zp][Xn]=e:n[vo]=e,n[zp]=e,e}function yn(n=1){bx(Kn(),pt(),_u()+n,!1)}function bx(n,e,t,i){if(!i)if((e[ke]&3)===3){let s=n.preOrderCheckHooks;s!==null&&bu(e,s,t)}else{let s=n.preOrderHooks;s!==null&&wu(e,s,0,t)}Cr(t)}var Qu=(function(n){return n[n.None=0]="None",n[n.SignalBased=1]="SignalBased",n[n.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",n})(Qu||{});function bm(n,e,t,i){let r=qe(null);try{let[s,o,a]=n.inputs[t],c=null;(o&Qu.SignalBased)!==0&&(c=e[s][Mn]),c!==null&&c.transformFn!==void 0?i=c.transformFn(i):a!==null&&(i=a.call(e,i)),n.setInput!==null?n.setInput(e,c,i,t,s):U0(e,c,s,i)}finally{qe(r)}}var Ms=(function(n){return n[n.Important=1]="Important",n[n.DashCase=2]="DashCase",n})(Ms||{}),nC;function Ym(n,e){return nC(n,e)}var To=new Set,Zm=(function(n){return n[n.CHANGE_DETECTION=0]="CHANGE_DETECTION",n[n.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",n})(Zm||{}),dc=new Oe(""),E0=new Set;function ed(n){E0.has(n)||(E0.add(n),performance?.mark?.("mark_feature_usage",{detail:{feature:n}}))}var wx=!1,wm=class extends Bt{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(e=!1){super(),this.__isAsync=e,z_()&&(this.destroyRef=ee(Eo,{optional:!0})??void 0,this.pendingTasks=ee(Yi,{optional:!0})??void 0)}emit(e){let t=qe(null);try{super.next(e)}finally{qe(t)}}subscribe(e,t,i){let r=e,s=t||(()=>null),o=i;if(e&&typeof e=="object"){let c=e;r=c.next?.bind(c),s=c.error?.bind(c),o=c.complete?.bind(c)}this.__isAsync&&(s=this.wrapInTimeout(s),r&&(r=this.wrapInTimeout(r)),o&&(o=this.wrapInTimeout(o)));let a=super.subscribe({next:r,error:s,complete:o});return e instanceof Lt&&e.add(a),a}wrapInTimeout(e){return t=>{let i=this.pendingTasks?.add();setTimeout(()=>{try{e(t)}finally{i!==void 0&&this.pendingTasks?.remove(i)}})}}},Jt=wm;function Tx(n){let e,t;function i(){n=nc;try{t!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(t),e!==void 0&&clearTimeout(e)}catch{}}return e=setTimeout(()=>{n(),i()}),typeof requestAnimationFrame=="function"&&(t=requestAnimationFrame(()=>{n(),i()})),()=>i()}function S0(n){return queueMicrotask(()=>n()),()=>{n=nc}}var Km="isAngularZone",Lu=Km+"_ID",iC=0,Ht=class n{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new Jt(!1);onMicrotaskEmpty=new Jt(!1);onStable=new Jt(!1);onError=new Jt(!1);constructor(e){let{enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:s=wx}=e;if(typeof Zone>"u")throw new Me(908,!1);Zone.assertZonePatched();let o=this;o._nesting=0,o._outer=o._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(o._inner=o._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(o._inner=o._inner.fork(Zone.longStackTraceZoneSpec)),o.shouldCoalesceEventChangeDetection=!r&&i,o.shouldCoalesceRunChangeDetection=r,o.callbackScheduled=!1,o.scheduleInRootZone=s,oC(o)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(Km)===!0}static assertInAngularZone(){if(!n.isInAngularZone())throw new Me(909,!1)}static assertNotInAngularZone(){if(n.isInAngularZone())throw new Me(909,!1)}run(e,t,i){return this._inner.run(e,t,i)}runTask(e,t,i,r){let s=this._inner,o=s.scheduleEventTask("NgZoneEvent: "+r,e,rC,nc,nc);try{return s.runTask(o,t,i)}finally{s.cancelTask(o)}}runGuarded(e,t,i){return this._inner.runGuarded(e,t,i)}runOutsideAngular(e){return this._outer.run(e)}},rC={};function Jm(n){if(n._nesting==0&&!n.hasPendingMicrotasks&&!n.isStable)try{n._nesting++,n.onMicrotaskEmpty.emit(null)}finally{if(n._nesting--,!n.hasPendingMicrotasks)try{n.runOutsideAngular(()=>n.onStable.emit(null))}finally{n.isStable=!0}}}function sC(n){if(n.isCheckStableRunning||n.callbackScheduled)return;n.callbackScheduled=!0;function e(){Tx(()=>{n.callbackScheduled=!1,Tm(n),n.isCheckStableRunning=!0,Jm(n),n.isCheckStableRunning=!1})}n.scheduleInRootZone?Zone.root.run(()=>{e()}):n._outer.run(()=>{e()}),Tm(n)}function oC(n){let e=()=>{sC(n)},t=iC++;n._inner=n._inner.fork({name:"angular",properties:{[Km]:!0,[Lu]:t,[Lu+t]:!0},onInvokeTask:(i,r,s,o,a,c)=>{if(aC(c))return i.invokeTask(s,o,a,c);try{return M0(n),i.invokeTask(s,o,a,c)}finally{(n.shouldCoalesceEventChangeDetection&&o.type==="eventTask"||n.shouldCoalesceRunChangeDetection)&&e(),b0(n)}},onInvoke:(i,r,s,o,a,c,l)=>{try{return M0(n),i.invoke(s,o,a,c,l)}finally{n.shouldCoalesceRunChangeDetection&&!n.callbackScheduled&&!cC(c)&&e(),b0(n)}},onHasTask:(i,r,s,o)=>{i.hasTask(s,o),r===s&&(o.change=="microTask"?(n._hasPendingMicrotasks=o.microTask,Tm(n),Jm(n)):o.change=="macroTask"&&(n.hasPendingMacrotasks=o.macroTask))},onHandleError:(i,r,s,o)=>(i.handleError(s,o),n.runOutsideAngular(()=>n.onError.emit(o)),!1)})}function Tm(n){n._hasPendingMicrotasks||(n.shouldCoalesceEventChangeDetection||n.shouldCoalesceRunChangeDetection)&&n.callbackScheduled===!0?n.hasPendingMicrotasks=!0:n.hasPendingMicrotasks=!1}function M0(n){n._nesting++,n.isStable&&(n.isStable=!1,n.onUnstable.emit(null))}function b0(n){n._nesting--,Jm(n)}var Fu=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new Jt;onMicrotaskEmpty=new Jt;onStable=new Jt;onError=new Jt;run(e,t,i){return e.apply(t,i)}runGuarded(e,t,i){return e.apply(t,i)}runOutsideAngular(e){return e()}runTask(e,t,i,r){return e.apply(t,i)}};function aC(n){return Cx(n,"__ignore_ng_zone__")}function cC(n){return Cx(n,"__scheduler_tick__")}function Cx(n,e){return!Array.isArray(n)||n.length!==1?!1:n[0]?.data?.[e]===!0}var Dx=(()=>{class n{impl=null;execute(){this.impl?.execute()}static \u0275prov=Te({token:n,providedIn:"root",factory:()=>new n})}return n})();var lC=new Oe("",{providedIn:"root",factory:()=>({queue:new Set,isScheduled:!1,scheduler:null})});function Ix(n,e){let t=n.get(lC);if(Array.isArray(e))for(let i of e)t.queue.add(i);else t.queue.add(e);t.scheduler&&t.scheduler(n)}function uC(n,e){for(let[t,i]of e)Ix(n,i.animateFns)}function w0(n,e,t,i){let r=n?.[Ka]?.enter;e!==null&&r&&r.has(t.index)&&uC(i,r)}function Mo(n,e,t,i,r,s,o,a){if(r!=null){let c,l=!1;ci(r)?c=r:Di(r)&&(l=!0,r=r[ai]);let u=Yn(r);n===0&&i!==null?(w0(a,i,s,t),o==null?xx(e,i,u):Ou(e,i,u,o||null,!0)):n===1&&i!==null?(w0(a,i,s,t),Ou(e,i,u,o||null,!0)):n===2?T0(a,s,t,d=>{ZT(e,u,l,d)}):n===3&&T0(a,s,t,()=>{e.destroyNode(u)}),c!=null&&EC(e,n,t,c,s,i,o)}}function dC(n,e){Ax(n,e),e[ai]=null,e[mn]=null}function fC(n,e,t,i,r,s){i[ai]=r,i[mn]=e,td(n,i,t,1,r,s)}function Ax(n,e){e[Ti].changeDetectionScheduler?.notify(9),td(n,e,e[kt],2,null,null)}function hC(n){let e=n[vo];if(!e)return gm(n[Fe],n);for(;e;){let t=null;if(Di(e))t=e[vo];else{let i=e[gn];i&&(t=i)}if(!t){for(;e&&!e[Xn]&&e!==n;)Di(e)&&gm(e[Fe],e),e=e[Kt];e===null&&(e=n),Di(e)&&gm(e[Fe],e),t=e&&e[Xn]}e=t}}function Qm(n,e){let t=n[vs],i=t.indexOf(e);t.splice(i,1)}function Rx(n,e){if(_s(e))return;let t=e[kt];t.destroyNode&&td(n,e,t,3,null,null),hC(e)}function gm(n,e){if(_s(e))return;let t=qe(null);try{e[ke]&=-129,e[ke]|=256,e[Un]&&La(e[Un]),gC(n,e),mC(n,e),e[Fe].type===1&&e[kt].destroy();let i=e[Mr];if(i!==null&&ci(e[Kt])){i!==e[Kt]&&Qm(i,e);let r=e[Ci];r!==null&&r.detachView(n)}Em(e)}finally{qe(t)}}function T0(n,e,t,i){let r=n?.[Ka];if(r==null||r.leave==null||!r.leave.has(e.index))return i(!1);if(r.skipLeaveAnimations)return r.skipLeaveAnimations=!1,i(!1);n&&To.add(n),Ix(t,()=>{if(r.leave&&r.leave.has(e.index)){let o=r.leave.get(e.index),a=[];if(o)for(let c=0;c<o.animateFns.length;c++){let l=o.animateFns[c],{promise:u}=l();a.push(u)}r.running=Promise.allSettled(a),pC(n,i)}else n&&To.delete(n),i(!1)})}function pC(n,e){let t=n[Ka]?.running;if(t){t.then(()=>{n[Ka].running=void 0,To.delete(n),e(!0)});return}e(!1)}function mC(n,e){let t=n.cleanup,i=e[go];if(t!==null)for(let o=0;o<t.length-1;o+=2)if(typeof t[o]=="string"){let a=t[o+3];a>=0?i[a]():i[-a].unsubscribe(),o+=2}else{let a=i[t[o+1]];t[o].call(a)}i!==null&&(e[go]=null);let r=e[Xi];if(r!==null){e[Xi]=null;for(let o=0;o<r.length;o++){let a=r[o];a()}}let s=e[Za];if(s!==null){e[Za]=null;for(let o of s)o.destroy()}}function gC(n,e){let t;if(n!=null&&(t=n.destroyHooks)!=null)for(let i=0;i<t.length;i+=2){let r=e[t[i]];if(!(r instanceof sc)){let s=t[i+1];if(Array.isArray(s))for(let o=0;o<s.length;o+=2){let a=r[s[o]],c=s[o+1];vt(4,a,c);try{c.call(a)}finally{vt(5,a,c)}}else{vt(4,r,s);try{s.call(r)}finally{vt(5,r,s)}}}}}function Nx(n,e,t){return vC(n,e.parent,t)}function vC(n,e,t){let i=e;for(;i!==null&&i.type&168;)e=i,i=e.parent;if(i===null)return t[ai];if(wr(i)){let{encapsulation:r}=n.data[i.directiveStart+i.componentOffset];if(r===Zi.None||r===Zi.Emulated)return null}return li(i,t)}function Px(n,e,t){return _C(n,e,t)}function yC(n,e,t){return n.type&40?li(n,t):null}var _C=yC,C0;function eg(n,e,t,i){let r=Nx(n,i,e),s=e[kt],o=i.parent||e[mn],a=Px(o,i,e);if(r!=null)if(Array.isArray(t))for(let c=0;c<t.length;c++)x0(s,r,t[c],a,!1);else x0(s,r,t,a,!1);C0!==void 0&&C0(s,i,e,t,r)}function ic(n,e){if(e!==null){let t=e.type;if(t&3)return li(e,n);if(t&4)return Cm(-1,n[e.index]);if(t&8){let i=e.child;if(i!==null)return ic(n,i);{let r=n[e.index];return ci(r)?Cm(-1,r):Yn(r)}}else{if(t&128)return ic(n,e.next);if(t&32)return Ym(e,n)()||Yn(n[e.index]);{let i=Ox(n,e);if(i!==null){if(Array.isArray(i))return i[0];let r=_r(n[In]);return ic(r,i)}else return ic(n,e.next)}}}return null}function Ox(n,e){if(e!==null){let i=n[In][mn],r=e.projection;return i.projection[r]}return null}function Cm(n,e){let t=gn+n+1;if(t<e.length){let i=e[t],r=i[Fe].firstChild;if(r!==null)return ic(i,r)}return e[br]}function tg(n,e,t,i,r,s,o){for(;t!=null;){let a=i[Sr];if(t.type===128){t=t.next;continue}let c=i[t.index],l=t.type;if(o&&e===0&&(c&&wo(Yn(c),i),t.flags|=2),!Zu(t))if(l&8)tg(n,e,t.child,i,r,s,!1),Mo(e,n,a,r,c,t,s,i);else if(l&32){let u=Ym(t,i),d;for(;d=u();)Mo(e,n,a,r,d,t,s,i);Mo(e,n,a,r,c,t,s,i)}else l&16?Lx(n,e,i,t,r,s):Mo(e,n,a,r,c,t,s,i);t=o?t.projectionNext:t.next}}function td(n,e,t,i,r,s){tg(t,i,n.firstChild,e,r,s,!1)}function xC(n,e,t){let i=e[kt],r=Nx(n,t,e),s=t.parent||e[mn],o=Px(s,t,e);Lx(i,0,e,t,r,o)}function Lx(n,e,t,i,r,s){let o=t[In],c=o[mn].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let u=c[l];Mo(e,n,t[Sr],r,u,i,s,t)}else{let l=c,u=o[Kt];tx(i)&&(l.flags|=128),tg(n,e,l,u,r,s,!0)}}function EC(n,e,t,i,r,s,o){let a=i[br],c=Yn(i);a!==c&&Mo(e,n,t,s,a,r,o);for(let l=gn;l<i.length;l++){let u=i[l];td(u[Fe],u,n,e,s,a)}}function Fx(n,e,t,i,r){let s=_u(),o=i&2;try{Cr(-1),o&&e.length>nn&&bx(n,e,nn,!1),vt(o?2:0,r,t),t(i,r)}finally{Cr(s),vt(o?3:1,r,t)}}function ng(n,e,t){IC(n,e,t),(t.flags&64)===64&&AC(n,e,t)}function nd(n,e,t=li){let i=e.localNames;if(i!==null){let r=e.index+1;for(let s=0;s<i.length;s+=2){let o=i[s+1],a=o===-1?t(e,n):n[o];n[r++]=a}}}function SC(n,e,t,i){let s=i.get(cx,ax)||t===Zi.ShadowDom,o=n.selectRootElement(e,s);return MC(o),o}function MC(n){bC(n)}var bC=()=>null;function wC(n){return n==="class"?"className":n==="for"?"htmlFor":n==="formaction"?"formAction":n==="innerHtml"?"innerHTML":n==="readonly"?"readOnly":n==="tabindex"?"tabIndex":n}function TC(n,e,t,i,r,s){let o=e[Fe];if(ig(n,o,e,t,i)){wr(n)&&DC(e,n.index);return}n.type&3&&(t=wC(t)),CC(n,e,t,i,r,s)}function CC(n,e,t,i,r,s){if(n.type&3){let o=li(n,e);i=s!=null?s(i,n.value||"",t):i,r.setProperty(o,t,i)}else n.type&12}function DC(n,e){let t=Zn(e,n);t[ke]&16||(t[ke]|=64)}function IC(n,e,t){let i=t.directiveStart,r=t.directiveEnd;wr(t)&&tC(e,t,n.data[i+t.componentOffset]),n.firstCreatePass||X0(t,e);let s=t.initialInputs;for(let o=i;o<r;o++){let a=n.data[o],c=Ru(e,n,o,t);if(wo(c,e),s!==null&&OC(e,o-i,c,a,t,s),ys(a)){let l=Zn(t.index,e);l[Dn]=Ru(e,n,o,t)}}}function AC(n,e,t){let i=t.directiveStart,r=t.directiveEnd,s=t.index,o=i0();try{Cr(s);for(let a=i;a<r;a++){let c=n.data[a],l=e[a];mu(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&RC(c,l)}}finally{Cr(-1),mu(o)}}function RC(n,e){n.hostBindings!==null&&n.hostBindings(1,e)}function kx(n,e){let t=n.directiveRegistry,i=null;if(t)for(let r=0;r<t.length;r++){let s=t[r];yx(e,s.selectors,!1)&&(i??=[],ys(s)?i.unshift(s):i.push(s))}return i}function NC(n,e,t,i,r,s){let o=li(n,e);PC(e[kt],o,s,n.value,t,i,r)}function PC(n,e,t,i,r,s,o){if(s==null)n.removeAttribute(e,r,t);else{let a=o==null?Wa(s):o(s,i||"",r);n.setAttribute(e,r,a,t)}}function OC(n,e,t,i,r,s){let o=s[e];if(o!==null)for(let a=0;a<o.length;a+=2){let c=o[a],l=o[a+1];bm(i,t,c,l)}}function Ux(n,e,t,i,r){let s=nn+t,o=e[Fe],a=r(o,e,n,i,t);e[s]=a,xo(n,!0);let c=n.type===2;return c?(Ex(e[kt],a,n),(K_()===0||Qa(n))&&wo(a,e),J_()):wo(a,e),xu()&&(!c||!Zu(n))&&eg(o,e,a,n),n}function Bx(n){let e=n;return nm()?im():(e=e.parent,xo(e,!1)),e}function LC(n,e){let t=n[Sr];if(!t)return;let i;try{i=t.get(Jn,null)}catch{i=null}i?.(e)}function ig(n,e,t,i,r){let s=n.inputs?.[i],o=n.hostDirectiveInputs?.[i],a=!1;if(o)for(let c=0;c<o.length;c+=2){let l=o[c],u=o[c+1],d=e.data[l];bm(d,t[l],u,r),a=!0}if(s)for(let c of s){let l=t[c],u=e.data[c];bm(u,l,i,r),a=!0}return a}function FC(n,e){let t=Zn(e,n),i=t[Fe];kC(i,t);let r=t[ai];r!==null&&t[mo]===null&&(t[mo]=lx(r,t[Sr])),vt(18),rg(i,t,t[Dn]),vt(19,t[Dn])}function kC(n,e){for(let t=e.length;t<n.blueprint.length;t++)e.push(n.blueprint[t])}function rg(n,e,t){vu(e);try{let i=n.viewQuery;i!==null&&Mm(1,i,t);let r=n.template;r!==null&&Fx(n,e,r,1,t),n.firstCreatePass&&(n.firstCreatePass=!1),e[Ci]?.finishViewCreation(n),n.staticContentQueries&&ux(n,e),n.staticViewQueries&&Mm(2,n.viewQuery,t);let s=n.components;s!==null&&UC(e,s)}catch(i){throw n.firstCreatePass&&(n.incompleteFirstPass=!0,n.firstCreatePass=!1),i}finally{e[ke]&=-5,yu()}}function UC(n,e){for(let t=0;t<e.length;t++)FC(n,e[t])}function Vx(n,e,t,i){let r=qe(null);try{let s=e.tView,a=n[ke]&4096?4096:16,c=qm(n,s,t,a,null,e,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),l=n[e.index];c[Mr]=l;let u=n[Ci];return u!==null&&(c[Ci]=u.createEmbeddedView(s)),rg(s,c,t),c}finally{qe(r)}}function Dm(n,e){return!e||e.firstChild===null||tx(n)}function oc(n,e,t,i,r=!1){for(;t!==null;){if(t.type===128){t=r?t.projectionNext:t.next;continue}let s=e[t.index];s!==null&&i.push(Yn(s)),ci(s)&&Hx(s,i);let o=t.type;if(o&8)oc(n,e,t.child,i);else if(o&32){let a=Ym(t,e),c;for(;c=a();)i.push(c)}else if(o&16){let a=Ox(e,t);if(Array.isArray(a))i.push(...a);else{let c=_r(e[In]);oc(c[Fe],c,a,i,!0)}}t=r?t.projectionNext:t.next}return i}function Hx(n,e){for(let t=gn;t<n.length;t++){let i=n[t],r=i[Fe].firstChild;r!==null&&oc(i[Fe],i,r,e)}n[br]!==n[ai]&&e.push(n[br])}function zx(n){if(n[uu]!==null){for(let e of n[uu])e.impl.addSequence(e);n[uu].length=0}}var Gx=[];function BC(n){return n[Un]??VC(n)}function VC(n){let e=Gx.pop()??Object.create(zC);return e.lView=n,e}function HC(n){n.lView[Un]!==n&&(n.lView=null,Gx.push(n))}var zC=dt(ue({},Ra),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{tc(n.lView)},consumerOnSignalRead(){this.lView[Un]=this}});function GC(n){let e=n[Un]??Object.create(jC);return e.lView=n,e}var jC=dt(ue({},Ra),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{let e=_r(n.lView);for(;e&&!jx(e[Fe]);)e=_r(e);e&&$p(e)},consumerOnSignalRead(){this.lView[Un]=this}});function jx(n){return n.type!==2}function Wx(n){if(n[Za]===null)return;let e=!0;for(;e;){let t=!1;for(let i of n[Za])i.dirty&&(t=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));e=t&&!!(n[ke]&8192)}}var WC=100;function $x(n,e=0){let i=n[Ti].rendererFactory,r=!1;r||i.begin?.();try{$C(n,e)}finally{r||i.end?.()}}function $C(n,e){let t=rm();try{sm(!0),Im(n,e);let i=0;for(;ec(n);){if(i===WC)throw new Me(103,!1);i++,Im(n,1)}}finally{sm(t)}}function qC(n,e,t,i){if(_s(e))return;let r=e[ke],s=!1,o=!1;vu(e);let a=!0,c=null,l=null;s||(jx(n)?(l=BC(e),c=Pa(l)):Al()===null?(a=!1,l=GC(e),c=Pa(l)):e[Un]&&(La(e[Un]),e[Un]=null));try{Wp(e),e0(n.bindingStartIndex),t!==null&&Fx(n,e,t,2,i);let u=(r&3)===3;if(!s)if(u){let p=n.preOrderCheckHooks;p!==null&&bu(e,p,null)}else{let p=n.preOrderHooks;p!==null&&wu(e,p,0,null),pm(e,0)}if(o||XC(e),Wx(e),qx(e,0),n.contentQueries!==null&&ux(n,e),!s)if(u){let p=n.contentCheckHooks;p!==null&&bu(e,p)}else{let p=n.contentHooks;p!==null&&wu(e,p,1),pm(e,1)}ZC(n,e);let d=n.components;d!==null&&Yx(e,d,0);let f=n.viewQuery;if(f!==null&&Mm(2,f,i),!s)if(u){let p=n.viewCheckHooks;p!==null&&bu(e,p)}else{let p=n.viewHooks;p!==null&&wu(e,p,2),pm(e,2)}if(n.firstUpdatePass===!0&&(n.firstUpdatePass=!1),e[lu]){for(let p of e[lu])p();e[lu]=null}s||(zx(e),e[ke]&=-73)}catch(u){throw s||tc(e),u}finally{l!==null&&(Rl(l,c),a&&HC(l)),yu()}}function qx(n,e){for(let t=ix(n);t!==null;t=rx(t))for(let i=gn;i<t.length;i++){let r=t[i];Xx(r,e)}}function XC(n){for(let e=ix(n);e!==null;e=rx(e)){if(!(e[ke]&2))continue;let t=e[vs];for(let i=0;i<t.length;i++){let r=t[i];$p(r)}}}function YC(n,e,t){vt(18);let i=Zn(e,n);Xx(i,t),vt(19,i[Dn])}function Xx(n,e){fu(n)&&Im(n,e)}function Im(n,e){let i=n[Fe],r=n[ke],s=n[Un],o=!!(e===0&&r&16);if(o||=!!(r&64&&e===0),o||=!!(r&1024),o||=!!(s?.dirty&&Oa(s)),o||=!1,s&&(s.dirty=!1),n[ke]&=-9217,o)qC(i,n,i.template,n[Dn]);else if(r&8192){let a=qe(null);try{Wx(n),qx(n,1);let c=i.components;c!==null&&Yx(n,c,1),zx(n)}finally{qe(a)}}}function Yx(n,e,t){for(let i=0;i<e.length;i++)YC(n,e[i],t)}function ZC(n,e){let t=n.hostBindingOpCodes;if(t!==null)try{for(let i=0;i<t.length;i++){let r=t[i];if(r<0)Cr(~r);else{let s=r,o=t[++i],a=t[++i];n0(o,s);let c=e[s];vt(24,c),a(2,c),vt(25,c)}}}finally{Cr(-1)}}function sg(n,e){let t=rm()?64:1088;for(n[Ti].changeDetectionScheduler?.notify(e);n;){n[ke]|=t;let i=_r(n);if(_o(n)&&!i)return n;n=i}return null}function Zx(n,e,t,i){return[n,!0,0,e,null,i,null,t,null,null]}function Kx(n,e,t,i=!0){let r=e[Fe];if(KC(r,e,n,t),i){let o=Cm(t,n),a=e[kt],c=a.parentNode(n[br]);c!==null&&fC(r,n[mn],a,e,c,o)}let s=e[mo];s!==null&&s.firstChild!==null&&(s.firstChild=null)}function Am(n,e){if(n.length<=gn)return;let t=gn+e,i=n[t];if(i){let r=i[Mr];r!==null&&r!==n&&Qm(r,i),e>0&&(n[t-1][Xn]=i[Xn]);let s=$a(n,gn+e);dC(i[Fe],i);let o=s[Ci];o!==null&&o.detachView(s[Fe]),i[Kt]=null,i[Xn]=null,i[ke]&=-129}return i}function KC(n,e,t,i){let r=gn+i,s=t.length;i>0&&(t[r-1][Xn]=e),i<s-gn?(e[Xn]=t[r],Lp(t,gn+i,e)):(t.push(e),e[Xn]=null),e[Kt]=t;let o=e[Mr];o!==null&&t!==o&&Jx(o,e);let a=e[Ci];a!==null&&a.insertView(n),hu(e),e[ke]|=128}function Jx(n,e){let t=n[vs],i=e[Kt];if(Di(i))n[ke]|=2;else{let r=i[Kt][In];e[In]!==r&&(n[ke]|=2)}t===null?n[vs]=[e]:t.push(e)}var Dr=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let e=this._lView,t=e[Fe];return oc(t,e,t.firstChild,[])}constructor(e,t){this._lView=e,this._cdRefInjectingView=t}get context(){return this._lView[Dn]}set context(e){this._lView[Dn]=e}get destroyed(){return _s(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[Kt];if(ci(e)){let t=e[Ja],i=t?t.indexOf(this):-1;i>-1&&(Am(e,i),$a(t,i))}this._attachedToViewContainer=!1}Rx(this._lView[Fe],this._lView)}onDestroy(e){qp(this._lView,e)}markForCheck(){sg(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[ke]&=-129}reattach(){hu(this._lView),this._lView[ke]|=128}detectChanges(){this._lView[ke]|=1024,$x(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new Me(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let e=_o(this._lView),t=this._lView[Mr];t!==null&&!e&&Qm(t,this._lView),Ax(this._lView[Fe],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new Me(902,!1);this._appRef=e;let t=_o(this._lView),i=this._lView[Mr];i!==null&&!t&&Jx(i,this._lView),hu(this._lView)}};var Es=(()=>{class n{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=JC;constructor(t,i,r){this._declarationLView=t,this._declarationTContainer=i,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(t,i){return this.createEmbeddedViewImpl(t,i)}createEmbeddedViewImpl(t,i,r){let s=Vx(this._declarationLView,this._declarationTContainer,t,{embeddedViewInjector:i,dehydratedView:r});return new Dr(s)}}return n})();function JC(){return og(vn(),pt())}function og(n,e){return n.type&4?new Es(e,n,Io(n,e)):null}function No(n,e,t,i,r){let s=n.data[e];if(s===null)s=QC(n,e,t,i,r),t0()&&(s.flags|=32);else if(s.type&64){s.type=t,s.value=i,s.attrs=r;let o=Q_();s.injectorIndex=o===null?-1:o.injectorIndex}return xo(s,!0),s}function QC(n,e,t,i,r){let s=tm(),o=nm(),a=o?s:s&&s.parent,c=n.data[e]=tD(n,a,t,e,i,r);return eD(n,c,s,o),c}function eD(n,e,t,i){n.firstChild===null&&(n.firstChild=e),t!==null&&(i?t.child==null&&e.parent!==null&&(t.child=e):t.next===null&&(t.next=e,e.prev=t))}function tD(n,e,t,i,r,s){let o=e?e.injectorIndex:-1,a=0;return Jp()&&(a|=128),{type:t,index:i,insertBeforeIndex:null,injectorIndex:o,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,attrs:s,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}var ez=new RegExp(`^(\\d+)*(${IT}|${DT})*(.*)`);var nD=()=>null;function Rm(n,e){return nD(n,e)}var Qx=class{},id=class{},Nm=class{resolveComponentFactory(e){throw new Me(917,!1)}},fc=class{static NULL=new Nm},Ss=class{},Po=(()=>{class n{destroyNode=null;static __NG_ELEMENT_ID__=()=>iD()}return n})();function iD(){let n=pt(),e=vn(),t=Zn(e.index,n);return(Di(t)?t:n)[kt]}var eE=(()=>{class n{static \u0275prov=Te({token:n,providedIn:"root",factory:()=>null})}return n})();var Cu={},Pm=class{injector;parentInjector;constructor(e,t){this.injector=e,this.parentInjector=t}get(e,t,i){let r=this.injector.get(e,Cu,i);return r!==Cu||t===Cu?r:this.parentInjector.get(e,t,i)}};function ku(n,e,t){let i=t?n.styles:null,r=t?n.classes:null,s=0;if(e!==null)for(let o=0;o<e.length;o++){let a=e[o];if(typeof a=="number")s=a;else if(s==1)r=wp(r,a);else if(s==2){let c=a,l=e[++o];i=wp(i,c+": "+l+";")}}t?n.styles=i:n.stylesWithoutHost=i,t?n.classes=r:n.classesWithoutHost=r}function zt(n,e=0){let t=pt();if(t===null)return Ge(n,e);let i=vn();return J0(i,t,Cn(n),e)}function ag(){let n="invalid";throw new Error(n)}function tE(n,e,t,i,r){let s=i===null?null:{"":-1},o=r(n,t);if(o!==null){let a=o,c=null,l=null;for(let u of o)if(u.resolveHostDirectives!==null){[a,c,l]=u.resolveHostDirectives(o);break}oD(n,e,t,a,s,c,l)}s!==null&&i!==null&&rD(t,i,s)}function rD(n,e,t){let i=n.localNames=[];for(let r=0;r<e.length;r+=2){let s=t[e[r+1]];if(s==null)throw new Me(-301,!1);i.push(e[r],s)}}function sD(n,e,t){e.componentOffset=t,(n.components??=[]).push(e.index)}function oD(n,e,t,i,r,s,o){let a=i.length,c=!1;for(let f=0;f<a;f++){let p=i[f];!c&&ys(p)&&(c=!0,sD(n,t,f)),mT(X0(t,e),n,p.type)}fD(t,n.data.length,a);for(let f=0;f<a;f++){let p=i[f];p.providersResolver&&p.providersResolver(p)}let l=!1,u=!1,d=Mx(n,e,a,null);a>0&&(t.directiveToIndex=new Map);for(let f=0;f<a;f++){let p=i[f];if(t.mergedAttrs=Wu(t.mergedAttrs,p.hostAttrs),cD(n,t,e,d,p),dD(d,p,r),o!==null&&o.has(p)){let[y,m]=o.get(p);t.directiveToIndex.set(p.type,[d,y+t.directiveStart,m+t.directiveStart])}else(s===null||!s.has(p))&&t.directiveToIndex.set(p.type,d);p.contentQueries!==null&&(t.flags|=4),(p.hostBindings!==null||p.hostAttrs!==null||p.hostVars!==0)&&(t.flags|=64);let g=p.type.prototype;!l&&(g.ngOnChanges||g.ngOnInit||g.ngDoCheck)&&((n.preOrderHooks??=[]).push(t.index),l=!0),!u&&(g.ngOnChanges||g.ngDoCheck)&&((n.preOrderCheckHooks??=[]).push(t.index),u=!0),d++}aD(n,t,s)}function aD(n,e,t){for(let i=e.directiveStart;i<e.directiveEnd;i++){let r=n.data[i];if(t===null||!t.has(r))D0(0,e,r,i),D0(1,e,r,i),A0(e,i,!1);else{let s=t.get(r);I0(0,e,s,i),I0(1,e,s,i),A0(e,i,!0)}}}function D0(n,e,t,i){let r=n===0?t.inputs:t.outputs;for(let s in r)if(r.hasOwnProperty(s)){let o;n===0?o=e.inputs??={}:o=e.outputs??={},o[s]??=[],o[s].push(i),nE(e,s)}}function I0(n,e,t,i){let r=n===0?t.inputs:t.outputs;for(let s in r)if(r.hasOwnProperty(s)){let o=r[s],a;n===0?a=e.hostDirectiveInputs??={}:a=e.hostDirectiveOutputs??={},a[o]??=[],a[o].push(i,s),nE(e,o)}}function nE(n,e){e==="class"?n.flags|=8:e==="style"&&(n.flags|=16)}function A0(n,e,t){let{attrs:i,inputs:r,hostDirectiveInputs:s}=n;if(i===null||!t&&r===null||t&&s===null||Wm(n)){n.initialInputs??=[],n.initialInputs.push(null);return}let o=null,a=0;for(;a<i.length;){let c=i[a];if(c===0){a+=4;continue}else if(c===5){a+=2;continue}else if(typeof c=="number")break;if(!t&&r.hasOwnProperty(c)){let l=r[c];for(let u of l)if(u===e){o??=[],o.push(c,i[a+1]);break}}else if(t&&s.hasOwnProperty(c)){let l=s[c];for(let u=0;u<l.length;u+=2)if(l[u]===e){o??=[],o.push(l[u+1],i[a+1]);break}}a+=2}n.initialInputs??=[],n.initialInputs.push(o)}function cD(n,e,t,i,r){n.data[i]=r;let s=r.factory||(r.factory=ls(r.type,!0)),o=new sc(s,ys(r),zt,null);n.blueprint[i]=o,t[i]=o,lD(n,e,i,Mx(n,t,r.hostVars,Ro),r)}function lD(n,e,t,i,r){let s=r.hostBindings;if(s){let o=n.hostBindingOpCodes;o===null&&(o=n.hostBindingOpCodes=[]);let a=~e.index;uD(o)!=a&&o.push(a),o.push(t,i,s)}}function uD(n){let e=n.length;for(;e>0;){let t=n[--e];if(typeof t=="number"&&t<0)return t}return 0}function dD(n,e,t){if(t){if(e.exportAs)for(let i=0;i<e.exportAs.length;i++)t[e.exportAs[i]]=n;ys(e)&&(t[""]=n)}}function fD(n,e,t){n.flags|=1,n.directiveStart=e,n.directiveEnd=e+t,n.providerIndexes=e}function iE(n,e,t,i,r,s,o,a){let c=e[Fe],l=c.consts,u=Tr(l,o),d=No(c,n,t,i,u);return s&&tE(c,e,d,Tr(l,a),r),d.mergedAttrs=Wu(d.mergedAttrs,d.attrs),d.attrs!==null&&ku(d,d.attrs,!1),d.mergedAttrs!==null&&ku(d,d.mergedAttrs,!0),c.queries!==null&&c.queries.elementStart(c,d),d}function rE(n,e){z0(n,e),jp(e)&&n.queries.elementEnd(e)}function hD(n,e,t,i,r,s){let o=e.consts,a=Tr(o,r),c=No(e,n,t,i,a);if(c.mergedAttrs=Wu(c.mergedAttrs,c.attrs),s!=null){let l=Tr(o,s);c.localNames=[];for(let u=0;u<l.length;u+=2)c.localNames.push(l[u],-1)}return c.attrs!==null&&ku(c,c.attrs,!1),c.mergedAttrs!==null&&ku(c,c.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,c),c}function cg(n){return oE(n)?Array.isArray(n)||!(n instanceof Map)&&Symbol.iterator in n:!1}function sE(n,e){if(Array.isArray(n))for(let t=0;t<n.length;t++)e(n[t]);else{let t=n[Symbol.iterator](),i;for(;!(i=t.next()).done;)e(i.value)}}function oE(n){return n!==null&&(typeof n=="function"||typeof n=="object")}function lg(n,e,t){if(t===Ro)return!1;let i=n[e];return Object.is(i,t)?!1:(n[e]=t,!0)}function vm(n,e,t){return function i(r){let s=wr(n)?Zn(n.index,e):e;sg(s,5);let o=e[Dn],a=R0(e,o,t,r),c=i.__ngNextListenerFn__;for(;c;)a=R0(e,o,c,r)&&a,c=c.__ngNextListenerFn__;return a}}function R0(n,e,t,i){let r=qe(null);try{return vt(6,e,t),t(i)!==!1}catch(s){return LC(n,s),!1}finally{vt(7,e,t),qe(r)}}function pD(n,e,t,i,r,s,o,a){let c=Qa(n),l=!1,u=null;if(!i&&c&&(u=gD(e,t,s,n.index)),u!==null){let d=u.__ngLastListenerFn__||u;d.__ngNextListenerFn__=o,u.__ngLastListenerFn__=o,l=!0}else{let d=li(n,t),f=i?i(d):d;RT(t,f,s,a);let p=r.listen(f,s,a);if(!mD(s)){let g=i?y=>i(Yn(y[n.index])):n.index;aE(g,e,t,s,a,p,!1)}}return l}function mD(n){return n.startsWith("animation")||n.startsWith("transition")}function gD(n,e,t,i){let r=n.cleanup;if(r!=null)for(let s=0;s<r.length-1;s+=2){let o=r[s];if(o===t&&r[s+1]===i){let a=e[go],c=r[s+2];return a&&a.length>c?a[c]:null}typeof o=="string"&&(s+=2)}return null}function aE(n,e,t,i,r,s,o){let a=e.firstCreatePass?Yp(e):null,c=Xp(t),l=c.length;c.push(r,s),a&&a.push(i,n,l,(l+1)*(o?-1:1))}function N0(n,e,t,i,r,s){let o=e[t],a=e[Fe],l=a.data[t].outputs[i],d=o[l].subscribe(s);aE(n.index,a,e,r,s,d,!0)}var Om=Symbol("BINDING");var Uu=class extends fc{ngModule;constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){let t=Er(e);return new Co(t,this.ngModule)}};function vD(n){return Object.keys(n).map(e=>{let[t,i,r]=n[e],s={propName:t,templateName:e,isSignal:(i&Qu.SignalBased)!==0};return r&&(s.transform=r),s})}function yD(n){return Object.keys(n).map(e=>({propName:n[e],templateName:e}))}function _D(n,e,t){let i=e instanceof Zt?e:e?.injector;return i&&n.getStandaloneInjector!==null&&(i=n.getStandaloneInjector(i)||i),i?new Pm(t,i):t}function xD(n){let e=n.get(Ss,null);if(e===null)throw new Me(407,!1);let t=n.get(eE,null),i=n.get(fs,null);return{rendererFactory:e,sanitizer:t,changeDetectionScheduler:i,ngReflect:!1}}function ED(n,e){let t=cE(n);return _x(e,t,t==="svg"?j_:t==="math"?W_:null)}function cE(n){return(n.selectors[0][0]||"div").toLowerCase()}var Co=class extends id{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=vD(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=yD(this.componentDef.outputs),this.cachedOutputs}constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=$T(e.selectors),this.ngContentSelectors=e.ngContentSelectors??[],this.isBoundToModule=!!t}create(e,t,i,r,s,o){vt(22);let a=qe(null);try{let c=this.componentDef,l=SD(i,c,o,s),u=_D(c,r||this.ngModule,e),d=xD(u),f=d.rendererFactory.createRenderer(null,c),p=i?SC(f,i,c.encapsulation,u):ED(c,f),g=o?.some(P0)||s?.some(h=>typeof h!="function"&&h.bindings.some(P0)),y=qm(null,l,null,512|Sx(c),null,null,d,f,u,null,lx(p,u,!0));y[nn]=p,vu(y);let m=null;try{let h=iE(nn,y,2,"#host",()=>l.directiveRegistry,!0,0);Ex(f,p,h),wo(p,y),ng(l,y,h),dx(l,h,y),rE(l,h),t!==void 0&&bD(h,this.ngContentSelectors,t),m=Zn(h.index,y),y[Dn]=m[Dn],rg(l,y,null)}catch(h){throw m!==null&&Em(m),Em(y),h}finally{vt(23),yu()}return new Bu(this.componentType,y,!!g)}finally{qe(a)}}};function SD(n,e,t,i){let r=n?["ng-version","20.3.7"]:qT(e.selectors[0]),s=null,o=null,a=0;if(t)for(let u of t)a+=u[Om].requiredVars,u.create&&(u.targetIdx=0,(s??=[]).push(u)),u.update&&(u.targetIdx=0,(o??=[]).push(u));if(i)for(let u=0;u<i.length;u++){let d=i[u];if(typeof d!="function")for(let f of d.bindings){a+=f[Om].requiredVars;let p=u+1;f.create&&(f.targetIdx=p,(s??=[]).push(f)),f.update&&(f.targetIdx=p,(o??=[]).push(f))}}let c=[e];if(i)for(let u of i){let d=typeof u=="function"?u:u.type,f=Bp(d);c.push(f)}return $m(0,null,MD(s,o),1,a,c,null,null,null,[r],null)}function MD(n,e){return!n&&!e?null:t=>{if(t&1&&n)for(let i of n)i.create();if(t&2&&e)for(let i of e)i.update()}}function P0(n){let e=n[Om].kind;return e==="input"||e==="twoWay"}var Bu=class extends Qx{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(e,t,i){super(),this._rootLView=t,this._hasInputBindings=i,this._tNode=du(t[Fe],nn),this.location=Io(this._tNode,t),this.instance=Zn(this._tNode.index,t)[Dn],this.hostView=this.changeDetectorRef=new Dr(t,void 0),this.componentType=e}setInput(e,t){this._hasInputBindings;let i=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),t))return;let r=this._rootLView,s=ig(i,r[Fe],r,e,t);this.previousInputValues.set(e,t);let o=Zn(i.index,r);sg(o,1)}get injector(){return new xs(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function bD(n,e,t){let i=n.projection=[];for(let r=0;r<e.length;r++){let s=t[r];i.push(s!=null&&s.length?Array.from(s):null)}}var Ir=(()=>{class n{static __NG_ELEMENT_ID__=wD}return n})();function wD(){let n=vn();return uE(n,pt())}var TD=Ir,lE=class extends TD{_lContainer;_hostTNode;_hostLView;constructor(e,t,i){super(),this._lContainer=e,this._hostTNode=t,this._hostLView=i}get element(){return Io(this._hostTNode,this._hostLView)}get injector(){return new xs(this._hostTNode,this._hostLView)}get parentInjector(){let e=Vm(this._hostTNode,this._hostLView);if(W0(e)){let t=Au(e,this._hostLView),i=Iu(e),r=t[Fe].data[i+8];return new xs(r,t)}else return new xs(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){let t=O0(this._lContainer);return t!==null&&t[e]||null}get length(){return this._lContainer.length-gn}createEmbeddedView(e,t,i){let r,s;typeof i=="number"?r=i:i!=null&&(r=i.index,s=i.injector);let o=Rm(this._lContainer,e.ssrId),a=e.createEmbeddedViewImpl(t||{},s,o);return this.insertImpl(a,r,Dm(this._hostTNode,o)),a}createComponent(e,t,i,r,s,o,a){let c=e&&!tT(e),l;if(c)l=t;else{let m=t||{};l=m.index,i=m.injector,r=m.projectableNodes,s=m.environmentInjector||m.ngModuleRef,o=m.directives,a=m.bindings}let u=c?e:new Co(Er(e)),d=i||this.parentInjector;if(!s&&u.ngModule==null){let h=(c?d:this.parentInjector).get(Zt,null);h&&(s=h)}let f=Er(u.componentType??{}),p=Rm(this._lContainer,f?.id??null),g=p?.firstChild??null,y=u.create(d,r,g,s,o,a);return this.insertImpl(y.hostView,l,Dm(this._hostTNode,p)),y}insert(e,t){return this.insertImpl(e,t,!0)}insertImpl(e,t,i){let r=e._lView;if(X_(r)){let a=this.indexOf(e);if(a!==-1)this.detach(a);else{let c=r[Kt],l=new lE(c,c[mn],c[Kt]);l.detach(l.indexOf(e))}}let s=this._adjustIndex(t),o=this._lContainer;return Kx(o,r,s,i),e.attachToViewContainerRef(),Lp(ym(o),s,e),e}move(e,t){return this.insert(e,t)}indexOf(e){let t=O0(this._lContainer);return t!==null?t.indexOf(e):-1}remove(e){let t=this._adjustIndex(e,-1),i=Am(this._lContainer,t);i&&($a(ym(this._lContainer),t),Rx(i[Fe],i))}detach(e){let t=this._adjustIndex(e,-1),i=Am(this._lContainer,t);return i&&$a(ym(this._lContainer),t)!=null?new Dr(i):null}_adjustIndex(e,t=0){return e??this.length+t}};function O0(n){return n[Ja]}function ym(n){return n[Ja]||(n[Ja]=[])}function uE(n,e){let t,i=e[n.index];return ci(i)?t=i:(t=Zx(i,e,null,n),e[n.index]=t,Xm(e,t)),DD(t,e,n,i),new lE(t,n,e)}function CD(n,e){let t=n[kt],i=t.createComment(""),r=li(e,n),s=t.parentNode(r);return Ou(t,s,i,t.nextSibling(r),!1),i}var DD=RD,ID=()=>!1;function AD(n,e,t){return ID(n,e,t)}function RD(n,e,t,i){if(n[br])return;let r;t.type&8?r=Yn(i):r=CD(e,t),n[br]=r}var Lm=class n{queryList;matches=null;constructor(e){this.queryList=e}clone(){return new n(this.queryList)}setDirty(){this.queryList.setDirty()}},Fm=class n{queries;constructor(e=[]){this.queries=e}createEmbeddedView(e){let t=e.queries;if(t!==null){let i=e.contentQueries!==null?e.contentQueries[0]:t.length,r=[];for(let s=0;s<i;s++){let o=t.getByIndex(s),a=this.queries[o.indexInDeclarationView];r.push(a.clone())}return new n(r)}return null}insertView(e){this.dirtyQueriesWithMatches(e)}detachView(e){this.dirtyQueriesWithMatches(e)}finishViewCreation(e){this.dirtyQueriesWithMatches(e)}dirtyQueriesWithMatches(e){for(let t=0;t<this.queries.length;t++)ug(e,t).matches!==null&&this.queries[t].setDirty()}},Vu=class{flags;read;predicate;constructor(e,t,i=null){this.flags=t,this.read=i,typeof e=="string"?this.predicate=BD(e):this.predicate=e}},km=class n{queries;constructor(e=[]){this.queries=e}elementStart(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(e,t)}elementEnd(e){for(let t=0;t<this.queries.length;t++)this.queries[t].elementEnd(e)}embeddedTView(e){let t=null;for(let i=0;i<this.length;i++){let r=t!==null?t.length:0,s=this.getByIndex(i).embeddedTView(e,r);s&&(s.indexInDeclarationView=i,t!==null?t.push(s):t=[s])}return t!==null?new n(t):null}template(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].template(e,t)}getByIndex(e){return this.queries[e]}get length(){return this.queries.length}track(e){this.queries.push(e)}},Um=class n{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(e,t=-1){this.metadata=e,this._declarationNodeIndex=t}elementStart(e,t){this.isApplyingToNode(t)&&this.matchTNode(e,t)}elementEnd(e){this._declarationNodeIndex===e.index&&(this._appliesToNextNode=!1)}template(e,t){this.elementStart(e,t)}embeddedTView(e,t){return this.isApplyingToNode(e)?(this.crossesNgTemplate=!0,this.addMatch(-e.index,t),new n(this.metadata)):null}isApplyingToNode(e){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let t=this._declarationNodeIndex,i=e.parent;for(;i!==null&&i.type&8&&i.index!==t;)i=i.parent;return t===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(e,t){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let s=i[r];this.matchTNodeWithReadOption(e,t,ND(t,s)),this.matchTNodeWithReadOption(e,t,Tu(t,e,s,!1,!1))}else i===Es?t.type&4&&this.matchTNodeWithReadOption(e,t,-1):this.matchTNodeWithReadOption(e,t,Tu(t,e,i,!1,!1))}matchTNodeWithReadOption(e,t,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===Ai||r===Ir||r===Es&&t.type&4)this.addMatch(t.index,-2);else{let s=Tu(t,e,r,!1,!1);s!==null&&this.addMatch(t.index,s)}else this.addMatch(t.index,i)}}addMatch(e,t){this.matches===null?this.matches=[e,t]:this.matches.push(e,t)}};function ND(n,e){let t=n.localNames;if(t!==null){for(let i=0;i<t.length;i+=2)if(t[i]===e)return t[i+1]}return null}function PD(n,e){return n.type&11?Io(n,e):n.type&4?og(n,e):null}function OD(n,e,t,i){return t===-1?PD(e,n):t===-2?LD(n,e,i):Ru(n,n[Fe],t,e)}function LD(n,e,t){if(t===Ai)return Io(e,n);if(t===Es)return og(e,n);if(t===Ir)return uE(e,n)}function dE(n,e,t,i){let r=e[Ci].queries[i];if(r.matches===null){let s=n.data,o=t.matches,a=[];for(let c=0;o!==null&&c<o.length;c+=2){let l=o[c];if(l<0)a.push(null);else{let u=s[l];a.push(OD(e,u,o[c+1],t.metadata.read))}}r.matches=a}return r.matches}function Bm(n,e,t,i){let r=n.queries.getByIndex(t),s=r.matches;if(s!==null){let o=dE(n,e,r,t);for(let a=0;a<s.length;a+=2){let c=s[a];if(c>0)i.push(o[a/2]);else{let l=s[a+1],u=e[-c];for(let d=gn;d<u.length;d++){let f=u[d];f[Mr]===f[Kt]&&Bm(f[Fe],f,l,i)}if(u[vs]!==null){let d=u[vs];for(let f=0;f<d.length;f++){let p=d[f];Bm(p[Fe],p,l,i)}}}}}return i}function FD(n,e){return n[Ci].queries[e].queryList}function fE(n,e,t){let i=new Nu((t&4)===4);return Z_(n,e,i,i.destroy),(e[Ci]??=new Fm).queries.push(new Lm(i))-1}function kD(n,e,t){let i=Kn();return i.firstCreatePass&&(hE(i,new Vu(n,e,t),-1),(e&2)===2&&(i.staticViewQueries=!0)),fE(i,pt(),e)}function UD(n,e,t,i){let r=Kn();if(r.firstCreatePass){let s=vn();hE(r,new Vu(e,t,i),s.index),VD(r,n),(t&2)===2&&(r.staticContentQueries=!0)}return fE(r,pt(),t)}function BD(n){return n.split(",").map(e=>e.trim())}function hE(n,e,t){n.queries===null&&(n.queries=new km),n.queries.track(new Um(e,t))}function VD(n,e){let t=n.contentQueries||(n.contentQueries=[]),i=t.length?t[t.length-1]:-1;e!==i&&t.push(n.queries.length-1,e)}function ug(n,e){return n.queries.getByIndex(e)}function HD(n,e){let t=n[Fe],i=ug(t,e);return i.crossesNgTemplate?Bm(t,n,e,[]):dE(t,n,i,e)}var Do=class{},rd=class{};var Hu=class extends Do{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new Uu(this);constructor(e,t,i,r=!0){super(),this.ngModuleType=e,this._parent=t;let s=Up(e);this._bootstrapComponents=gx(s.bootstrap),this._r3Injector=um(e,t,[{provide:Do,useValue:this},{provide:fc,useValue:this.componentFactoryResolver},...i],yr(e),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(t=>t()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}},zu=class extends rd{moduleType;constructor(e){super(),this.moduleType=e}create(e){return new Hu(this.moduleType,e,[])}};var ac=class extends Do{injector;componentFactoryResolver=new Uu(this);instance=null;constructor(e){super();let t=new ds([...e.providers,{provide:Do,useValue:this},{provide:fc,useValue:this.componentFactoryResolver}],e.parent||Xa(),e.debugName,new Set(["environment"]));this.injector=t,e.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function hc(n,e,t=null){return new ac({providers:n,parent:e,debugName:t,runEnvironmentInitializers:!0}).injector}var zD=(()=>{class n{_injector;cachedInjectors=new Map;constructor(t){this._injector=t}getOrCreateStandaloneInjector(t){if(!t.standalone)return null;if(!this.cachedInjectors.has(t)){let i=Vp(!1,t.type),r=i.length>0?hc([i],this._injector,`Standalone[${t.type.name}]`):null;this.cachedInjectors.set(t,r)}return this.cachedInjectors.get(t)}ngOnDestroy(){try{for(let t of this.cachedInjectors.values())t!==null&&t.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=Te({token:n,providedIn:"environment",factory:()=>new n(Ge(Zt))})}return n})();function Nt(n){return ju(()=>{let e=pE(n),t=dt(ue({},e),{decls:n.decls,vars:n.vars,template:n.template,consts:n.consts||null,ngContentSelectors:n.ngContentSelectors,onPush:n.changeDetection===Hm.OnPush,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&n.dependencies||null,getStandaloneInjector:e.standalone?r=>r.get(zD).getOrCreateStandaloneInjector(t):null,getExternalStyles:null,signals:n.signals??!1,data:n.data||{},encapsulation:n.encapsulation||Zi.Emulated,styles:n.styles||us,_:null,schemas:n.schemas||null,tView:null,id:""});e.standalone&&ed("NgStandalone"),mE(t);let i=n.dependencies;return t.directiveDefs=L0(i,GD),t.pipeDefs=L0(i,k_),t.id=$D(t),t})}function GD(n){return Er(n)||Bp(n)}function jD(n,e){if(n==null)return ms;let t={};for(let i in n)if(n.hasOwnProperty(i)){let r=n[i],s,o,a,c;Array.isArray(r)?(a=r[0],s=r[1],o=r[2]??s,c=r[3]||null):(s=r,o=r,a=Qu.None,c=null),t[s]=[i,a,c],e[s]=o}return t}function WD(n){if(n==null)return ms;let e={};for(let t in n)n.hasOwnProperty(t)&&(e[n[t]]=t);return e}function Ar(n){return ju(()=>{let e=pE(n);return mE(e),e})}function pE(n){let e={};return{type:n.type,providersResolver:null,factory:null,hostBindings:n.hostBindings||null,hostVars:n.hostVars||0,hostAttrs:n.hostAttrs||null,contentQueries:n.contentQueries||null,declaredInputs:e,inputConfig:n.inputs||ms,exportAs:n.exportAs||null,standalone:n.standalone??!0,signals:n.signals===!0,selectors:n.selectors||us,viewQuery:n.viewQuery||null,features:n.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,inputs:jD(n.inputs,e),outputs:WD(n.outputs),debugInfo:null}}function mE(n){n.features?.forEach(e=>e(n))}function L0(n,e){return n?()=>{let t=typeof n=="function"?n():n,i=[];for(let r of t){let s=e(r);s!==null&&i.push(s)}return i}:null}function $D(n){let e=0,t=typeof n.consts=="function"?"":n.consts,i=[n.selectors,n.ngContentSelectors,n.hostVars,n.hostAttrs,t,n.vars,n.decls,n.encapsulation,n.standalone,n.signals,n.exportAs,JSON.stringify(n.inputs),JSON.stringify(n.outputs),Object.getOwnPropertyNames(n.type.prototype),!!n.contentQueries,!!n.viewQuery];for(let s of i.join("|"))e=Math.imul(31,e)+s.charCodeAt(0)<<0;return e+=2147483648,"c"+e}function gE(n,e,t,i,r,s,o,a){if(t.firstCreatePass){n.mergedAttrs=Wu(n.mergedAttrs,n.attrs);let u=n.tView=$m(2,n,r,s,o,t.directiveRegistry,t.pipeRegistry,null,t.schemas,t.consts,null);t.queries!==null&&(t.queries.template(t,n),u.queries=t.queries.embeddedTView(n))}a&&(n.flags|=a),xo(n,!1);let c=YD(t,e,n,i);xu()&&eg(t,e,c,n),wo(c,e);let l=Zx(c,e,c,n);e[i+nn]=l,Xm(e,l),AD(l,n,e)}function qD(n,e,t,i,r,s,o,a,c,l,u){let d=t+nn,f;return e.firstCreatePass?(f=No(e,d,4,o||null,a||null),Kp()&&tE(e,n,f,Tr(e.consts,l),kx),z0(e,f)):f=e.data[d],gE(f,n,e,t,i,r,s,c),Qa(f)&&ng(e,n,f),l!=null&&nd(n,f,u),f}function XD(n,e,t,i,r,s,o,a,c,l,u){let d=t+nn,f;if(e.firstCreatePass){if(f=No(e,d,4,o||null,a||null),l!=null){let p=Tr(e.consts,l);f.localNames=[];for(let g=0;g<p.length;g+=2)f.localNames.push(p[g],-1)}}else f=e.data[d];return gE(f,n,e,t,i,r,s,c),l!=null&&nd(n,f,u),f}function bs(n,e,t,i,r,s,o,a){let c=pt(),l=Kn(),u=Tr(l.consts,s);return qD(c,l,n,e,t,i,r,u,void 0,o,a),bs}var YD=ZD;function ZD(n,e,t,i){return Eu(!0),e[kt].createComment("")}var dg=(()=>{class n{log(t){console.log(t)}warn(t){console.warn(t)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"platform"})}return n})();var fg=new Oe("");function pc(n){return!!n&&typeof n.then=="function"}function vE(n){return!!n&&typeof n.subscribe=="function"}var yE=new Oe("");var hg=(()=>{class n{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((t,i)=>{this.resolve=t,this.reject=i});appInits=ee(yE,{optional:!0})??[];injector=ee(oi);constructor(){}runInitializers(){if(this.initialized)return;let t=[];for(let r of this.appInits){let s=pn(this.injector,r);if(pc(s))t.push(s);else if(vE(s)){let o=new Promise((a,c)=>{s.subscribe({complete:a,error:c})});t.push(o)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(t).then(()=>{i()}).catch(r=>{this.reject(r)}),t.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),sd=new Oe("");function _E(){Jh(()=>{let n="";throw new Me(600,n)})}function xE(n){return n.isBoundToModule}var KD=10;var ws=(()=>{class n{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=ee(Jn);afterRenderManager=ee(Dx);zonelessEnabled=ee(Su);rootEffectScheduler=ee(hm);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new Bt;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=ee(Yi);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(nt(t=>!t))}constructor(){ee(dc,{optional:!0})}whenStable(){let t;return new Promise(i=>{t=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{t.unsubscribe()})}_injector=ee(Zt);_rendererFactory=null;get injector(){return this._injector}bootstrap(t,i){return this.bootstrapImpl(t,i)}bootstrapImpl(t,i,r=oi.NULL){return this._injector.get(Ht).run(()=>{vt(10);let o=t instanceof id;if(!this._injector.get(hg).done){let g="";throw new Me(405,g)}let c;o?c=t:c=this._injector.get(fc).resolveComponentFactory(t),this.componentTypes.push(c.componentType);let l=xE(c)?void 0:this._injector.get(Do),u=i||c.selector,d=c.create(r,[],u,l),f=d.location.nativeElement,p=d.injector.get(fg,null);return p?.registerApplication(f),d.onDestroy(()=>{this.detachView(d.hostView),rc(this.components,d),p?.unregisterApplication(f)}),this._loadComponent(d),vt(11,d),d})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){vt(12),this.tracingSnapshot!==null?this.tracingSnapshot.run(Zm.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw new Me(101,!1);let t=qe(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,qe(t),this.afterTick.next(),vt(13)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(Ss,null,{optional:!0}));let t=0;for(;this.dirtyFlags!==0&&t++<KD;)vt(14),this.synchronizeOnce(),vt(15)}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let t=!1;if(this.dirtyFlags&7){let i=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r}of this.allViews){if(!i&&!ec(r))continue;let s=i&&!this.zonelessEnabled?0:1;$x(r,s),t=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}t||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:t})=>ec(t))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(t){let i=t;this._views.push(i),i.attachToAppRef(this)}detachView(t){let i=t;rc(this._views,i),i.detachFromAppRef()}_loadComponent(t){this.attachView(t.hostView);try{this.tick()}catch(r){this.internalErrorHandler(r)}this.components.push(t),this._injector.get(sd,[]).forEach(r=>r(t))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(t=>t()),this._views.slice().forEach(t=>t.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(t){return this._destroyListeners.push(t),()=>rc(this._destroyListeners,t)}destroy(){if(this._destroyed)throw new Me(406,!1);let t=this._injector;t.destroy&&!t.destroyed&&t.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function rc(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function od(n,e,t,i){let r=pt(),s=pu();if(lg(r,s,e)){let o=Kn(),a=lm();NC(a,r,n,e,t,i)}return od}var az=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";function di(n,e,t){let i=pt(),r=pu();if(lg(i,r,e)){let s=Kn(),o=lm();TC(o,i,n,e,i[kt],t)}return di}function F0(n,e,t,i,r){ig(e,n,t,r?"class":"style",i)}function Pt(n,e,t,i){let r=pt(),s=r[Fe],o=n+nn,a=s.firstCreatePass?iE(o,r,2,e,kx,Kp(),t,i):s.data[o];if(Ux(a,r,n,e,EE),Qa(a)){let c=r[Fe];ng(c,r,a),dx(c,a,r)}return i!=null&&nd(r,a),Pt}function Ot(){let n=Kn(),e=vn(),t=Bx(e);return n.firstCreatePass&&rE(n,t),Qp(t)&&em(),Zp(),t.classesWithoutHost!=null&&aT(t)&&F0(n,t,pt(),t.classesWithoutHost,!0),t.stylesWithoutHost!=null&&cT(t)&&F0(n,t,pt(),t.stylesWithoutHost,!1),Ot}function fi(n,e,t,i){return Pt(n,e,t,i),Ot(),fi}function Ri(n,e,t,i){let r=pt(),s=r[Fe],o=n+nn,a=s.firstCreatePass?hD(o,s,2,e,t,i):s.data[o];return Ux(a,r,n,e,EE),i!=null&&nd(r,a),Ri}function Ni(){let n=vn(),e=Bx(n);return Qp(e)&&em(),Zp(),Ni}function ad(n,e,t,i){return Ri(n,e,t,i),Ni(),ad}var EE=(n,e,t,i,r)=>(Eu(!0),_x(e[kt],i,a0()));var mc="en-US";var JD=mc;function SE(n){typeof n=="string"&&(JD=n.toLowerCase().replace(/_/g,"-"))}function Rr(n,e,t){let i=pt(),r=Kn(),s=vn();return QD(r,i,i[kt],s,n,e,t),Rr}function QD(n,e,t,i,r,s,o){let a=!0,c=null;if((i.type&3||o)&&(c??=vm(i,e,s),pD(i,n,e,o,t,r,s,c)&&(a=!1)),a){let l=i.outputs?.[r],u=i.hostDirectiveOutputs?.[r];if(u&&u.length)for(let d=0;d<u.length;d+=2){let f=u[d],p=u[d+1];c??=vm(i,e,s),N0(i,e,f,p,r,c)}if(l&&l.length)for(let d of l)c??=vm(i,e,s),N0(i,e,d,r,r,c)}}function eI(n,e){let t=null,i=HT(n);for(let r=0;r<e.length;r++){let s=e[r];if(s==="*"){t=r;continue}if(i===null?yx(n,s,!0):jT(i,s))return r}return t}function pg(n){let e=pt()[In][mn];if(!e.projection){let t=n?n.length:1,i=e.projection=F_(t,null),r=i.slice(),s=e.child;for(;s!==null;){if(s.type!==128){let o=n?eI(s,n):0;o!==null&&(r[o]?r[o].projectionNext=s:i[o]=s,r[o]=s)}s=s.next}}}function mg(n,e=0,t,i,r,s){let o=pt(),a=Kn(),c=i?n+1:null;c!==null&&XD(o,a,c,i,r,s,null,t);let l=No(a,nn+n,16,null,t||null);l.projection===null&&(l.projection=e),im();let d=!o[mo]||Jp();o[In][mn].projection[l.projection]===null&&c!==null?tI(o,a,c):d&&!Zu(l)&&xC(a,o,l)}function tI(n,e,t){let i=nn+t,r=e.data[i],s=n[i],o=Rm(s,r.tView.ssrId),a=Vx(n,r,void 0,{dehydratedView:o});Kx(s,a,0,Dm(r,o))}function gg(n,e,t,i){UD(n,e,t,i)}function vg(n,e,t){kD(n,e,t)}function gc(n){let e=pt(),t=Kn(),i=om();gu(i+1);let r=ug(t,i);if(n.dirty&&q_(e)===((r.metadata.flags&2)===2)){if(r.matches===null)n.reset([]);else{let s=HD(e,i);n.reset(s,ST),n.notifyOnChanges()}return!0}return!1}function vc(){return FD(pt(),om())}function rn(n,e=""){let t=pt(),i=Kn(),r=n+nn,s=i.firstCreatePass?No(i,r,1,e,null):i.data[r],o=nI(i,t,s,e,n);t[r]=o,xu()&&eg(i,t,o,s),xo(s,!1)}var nI=(n,e,t,i,r)=>(Eu(!0),XT(e[kt],i));function iI(n,e,t,i=""){return lg(n,pu(),t)?e+Wa(t)+i:Ro}function Ji(n){return yg("",n),Ji}function yg(n,e,t){let i=pt(),r=iI(i,n,e,t);return r!==Ro&&rI(i,_u(),r),yg}function rI(n,e,t){let i=$_(e,n);YT(n[kt],i,t)}var Gu=class{ngModuleFactory;componentFactories;constructor(e,t){this.ngModuleFactory=e,this.componentFactories=t}},_g=(()=>{class n{compileModuleSync(t){return new zu(t)}compileModuleAsync(t){return Promise.resolve(this.compileModuleSync(t))}compileModuleAndAllComponentsSync(t){let i=this.compileModuleSync(t),r=Up(t),s=gx(r.declarations).reduce((o,a)=>{let c=Er(a);return c&&o.push(new Co(c)),o},[]);return new Gu(i,s)}compileModuleAndAllComponentsAsync(t){return Promise.resolve(this.compileModuleAndAllComponentsSync(t))}clearCache(){}clearCacheFor(t){}getModuleId(t){}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var sI=(()=>{class n{zone=ee(Ht);changeDetectionScheduler=ee(fs);applicationRef=ee(ws);applicationErrorHandler=ee(Jn);_onMicrotaskEmptySubscription;initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.changeDetectionScheduler.runningTick||this.zone.run(()=>{try{this.applicationRef.dirtyFlags|=1,this.applicationRef._tick()}catch(t){this.applicationErrorHandler(t)}})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function ME({ngZoneFactory:n,ignoreChangesOutsideZone:e,scheduleInRootZone:t}){return n??=()=>new Ht(dt(ue({},bE()),{scheduleInRootZone:t})),[{provide:Ht,useFactory:n},{provide:xr,multi:!0,useFactory:()=>{let i=ee(sI,{optional:!0});return()=>i.initialize()}},{provide:xr,multi:!0,useFactory:()=>{let i=ee(oI);return()=>{i.initialize()}}},e===!0?{provide:dm,useValue:!0}:[],{provide:fm,useValue:t??wx},{provide:Jn,useFactory:()=>{let i=ee(Ht),r=ee(Zt),s;return o=>{i.runOutsideAngular(()=>{r.destroyed&&!s?setTimeout(()=>{throw o}):(s??=r.get(wi),s.handleError(o))})}}}]}function bE(n){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:n?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:n?.runCoalescing??!1}}var oI=(()=>{class n{subscription=new Lt;initialized=!1;zone=ee(Ht);pendingTasks=ee(Yi);initialize(){if(this.initialized)return;this.initialized=!0;let t=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(t=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{Ht.assertNotInAngularZone(),queueMicrotask(()=>{t!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(t),t=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{Ht.assertInAngularZone(),t??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var wE=(()=>{class n{applicationErrorHandler=ee(Jn);appRef=ee(ws);taskService=ee(Yi);ngZone=ee(Ht);zonelessEnabled=ee(Su);tracing=ee(dc,{optional:!0});disableScheduling=ee(dm,{optional:!0})??!1;zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new Lt;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(Lu):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(ee(fm,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{this.runningTick||this.cleanup()})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()})),this.disableScheduling||=!this.zonelessEnabled&&(this.ngZone instanceof Fu||!this.zoneIsDefined)}notify(t){if(!this.zonelessEnabled&&t===5)return;let i=!1;switch(t){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2,i=!0;break}case 12:{this.appRef.dirtyFlags|=16,i=!0;break}case 13:{this.appRef.dirtyFlags|=2,i=!0;break}case 11:{i=!0;break}case 9:case 8:case 7:case 10:default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick(i))return;let r=this.useMicrotaskScheduler?S0:Tx;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>r(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>r(()=>this.tick()))}shouldScheduleTick(t){return!(this.disableScheduling&&!t||this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(Lu+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let t=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){this.taskService.remove(t),this.applicationErrorHandler(i)}finally{this.cleanup()}this.useMicrotaskScheduler=!0,S0(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(t)})}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let t=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(t)}}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function aI(){return typeof $localize<"u"&&$localize.locale||mc}var xg=new Oe("",{providedIn:"root",factory:()=>ee(xg,{optional:!0,skipSelf:!0})||aI()});function Qi(n){return T_(n)}var TE=class{[Mn];constructor(e){this[Mn]=e}destroy(){this[Mn].destroy()}};var RE=Symbol("InputSignalNode#UNSET"),xI=dt(ue({},Nl),{transformFn:void 0,applyValueToInputSignal(n,e){to(n,e)}});function NE(n,e){let t=Object.create(xI);t.value=n,t.transformFn=e?.transform;function i(){if(Na(t),t.value===RE){let r=null;throw new Me(-950,r)}return t.value}return i[Mn]=t,i}var ld=class{attributeName;constructor(e){this.attributeName=e}__NG_ELEMENT_ID__=()=>lc(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}},EI=new Oe("");EI.__NG_ELEMENT_ID__=n=>{let e=vn();if(e===null)throw new Me(204,!1);if(e.type&2)return e.value;if(n&8)return null;throw new Me(204,!1)};function CE(n,e){return NE(n,e)}function SI(n){return NE(RE,n)}var PE=(CE.required=SI,CE);var Eg=new Oe(""),MI=new Oe("");function yc(n){return!n.moduleRef}function bI(n){let e=yc(n)?n.r3Injector:n.moduleRef.injector,t=e.get(Ht);return t.run(()=>{yc(n)?n.r3Injector.resolveInjectorInitializers():n.moduleRef.resolveInjectorInitializers();let i=e.get(Jn),r;if(t.runOutsideAngular(()=>{r=t.onError.subscribe({next:i})}),yc(n)){let s=()=>e.destroy(),o=n.platformInjector.get(Eg);o.add(s),e.onDestroy(()=>{r.unsubscribe(),o.delete(s)})}else{let s=()=>n.moduleRef.destroy(),o=n.platformInjector.get(Eg);o.add(s),n.moduleRef.onDestroy(()=>{rc(n.allPlatformModules,n.moduleRef),r.unsubscribe(),o.delete(s)})}return TI(i,t,()=>{let s=e.get(Yi),o=s.add(),a=e.get(hg);return a.runInitializers(),a.donePromise.then(()=>{let c=e.get(xg,mc);if(SE(c||mc),!e.get(MI,!0))return yc(n)?e.get(ws):(n.allPlatformModules.push(n.moduleRef),n.moduleRef);if(yc(n)){let u=e.get(ws);return n.rootComponent!==void 0&&u.bootstrap(n.rootComponent),u}else return wI?.(n.moduleRef,n.allPlatformModules),n.moduleRef}).finally(()=>void s.remove(o))})})}var wI;function TI(n,e,t){try{let i=t();return pc(i)?i.catch(r=>{throw e.runOutsideAngular(()=>n(r)),r}):i}catch(i){throw e.runOutsideAngular(()=>n(i)),i}}var cd=null;function CI(n=[],e){return oi.create({name:e,providers:[{provide:qa,useValue:"platform"},{provide:Eg,useValue:new Set([()=>cd=null])},...n]})}function DI(n=[]){if(cd)return cd;let e=CI(n);return cd=e,_E(),II(e),e}function II(n){let e=n.get(Xu,null);pn(n,()=>{e?.forEach(t=>t())})}var Oo=(()=>{class n{static __NG_ELEMENT_ID__=AI}return n})();function AI(n){return RI(vn(),pt(),(n&16)===16)}function RI(n,e,t){if(wr(n)&&!t){let i=Zn(n.index,e);return new Dr(i,i)}else if(n.type&175){let i=e[In];return new Dr(i,e)}return null}var Sg=class{constructor(){}supports(e){return cg(e)}create(e){return new Mg(e)}},NI=(n,e)=>e,Mg=class{length=0;collection;_linkedRecords=null;_unlinkedRecords=null;_previousItHead=null;_itHead=null;_itTail=null;_additionsHead=null;_additionsTail=null;_movesHead=null;_movesTail=null;_removalsHead=null;_removalsTail=null;_identityChangesHead=null;_identityChangesTail=null;_trackByFn;constructor(e){this._trackByFn=e||NI}forEachItem(e){let t;for(t=this._itHead;t!==null;t=t._next)e(t)}forEachOperation(e){let t=this._itHead,i=this._removalsHead,r=0,s=null;for(;t||i;){let o=!i||t&&t.currentIndex<DE(i,r,s)?t:i,a=DE(o,r,s),c=o.currentIndex;if(o===i)r--,i=i._nextRemoved;else if(t=t._next,o.previousIndex==null)r++;else{s||(s=[]);let l=a-r,u=c-r;if(l!=u){for(let f=0;f<l;f++){let p=f<s.length?s[f]:s[f]=0,g=p+f;u<=g&&g<l&&(s[f]=p+1)}let d=o.previousIndex;s[d]=u-l}}a!==c&&e(o,a,c)}}forEachPreviousItem(e){let t;for(t=this._previousItHead;t!==null;t=t._nextPrevious)e(t)}forEachAddedItem(e){let t;for(t=this._additionsHead;t!==null;t=t._nextAdded)e(t)}forEachMovedItem(e){let t;for(t=this._movesHead;t!==null;t=t._nextMoved)e(t)}forEachRemovedItem(e){let t;for(t=this._removalsHead;t!==null;t=t._nextRemoved)e(t)}forEachIdentityChange(e){let t;for(t=this._identityChangesHead;t!==null;t=t._nextIdentityChange)e(t)}diff(e){if(e==null&&(e=[]),!cg(e))throw new Me(900,!1);return this.check(e)?this:null}onDestroy(){}check(e){this._reset();let t=this._itHead,i=!1,r,s,o;if(Array.isArray(e)){this.length=e.length;for(let a=0;a<this.length;a++)s=e[a],o=this._trackByFn(a,s),t===null||!Object.is(t.trackById,o)?(t=this._mismatch(t,s,o,a),i=!0):(i&&(t=this._verifyReinsertion(t,s,o,a)),Object.is(t.item,s)||this._addIdentityChange(t,s)),t=t._next}else r=0,sE(e,a=>{o=this._trackByFn(r,a),t===null||!Object.is(t.trackById,o)?(t=this._mismatch(t,a,o,r),i=!0):(i&&(t=this._verifyReinsertion(t,a,o,r)),Object.is(t.item,a)||this._addIdentityChange(t,a)),t=t._next,r++}),this.length=r;return this._truncate(t),this.collection=e,this.isDirty}get isDirty(){return this._additionsHead!==null||this._movesHead!==null||this._removalsHead!==null||this._identityChangesHead!==null}_reset(){if(this.isDirty){let e;for(e=this._previousItHead=this._itHead;e!==null;e=e._next)e._nextPrevious=e._next;for(e=this._additionsHead;e!==null;e=e._nextAdded)e.previousIndex=e.currentIndex;for(this._additionsHead=this._additionsTail=null,e=this._movesHead;e!==null;e=e._nextMoved)e.previousIndex=e.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(e,t,i,r){let s;return e===null?s=this._itTail:(s=e._prev,this._remove(e)),e=this._unlinkedRecords===null?null:this._unlinkedRecords.get(i,null),e!==null?(Object.is(e.item,t)||this._addIdentityChange(e,t),this._reinsertAfter(e,s,r)):(e=this._linkedRecords===null?null:this._linkedRecords.get(i,r),e!==null?(Object.is(e.item,t)||this._addIdentityChange(e,t),this._moveAfter(e,s,r)):e=this._addAfter(new bg(t,i),s,r)),e}_verifyReinsertion(e,t,i,r){let s=this._unlinkedRecords===null?null:this._unlinkedRecords.get(i,null);return s!==null?e=this._reinsertAfter(s,e._prev,r):e.currentIndex!=r&&(e.currentIndex=r,this._addToMoves(e,r)),e}_truncate(e){for(;e!==null;){let t=e._next;this._addToRemovals(this._unlink(e)),e=t}this._unlinkedRecords!==null&&this._unlinkedRecords.clear(),this._additionsTail!==null&&(this._additionsTail._nextAdded=null),this._movesTail!==null&&(this._movesTail._nextMoved=null),this._itTail!==null&&(this._itTail._next=null),this._removalsTail!==null&&(this._removalsTail._nextRemoved=null),this._identityChangesTail!==null&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(e,t,i){this._unlinkedRecords!==null&&this._unlinkedRecords.remove(e);let r=e._prevRemoved,s=e._nextRemoved;return r===null?this._removalsHead=s:r._nextRemoved=s,s===null?this._removalsTail=r:s._prevRemoved=r,this._insertAfter(e,t,i),this._addToMoves(e,i),e}_moveAfter(e,t,i){return this._unlink(e),this._insertAfter(e,t,i),this._addToMoves(e,i),e}_addAfter(e,t,i){return this._insertAfter(e,t,i),this._additionsTail===null?this._additionsTail=this._additionsHead=e:this._additionsTail=this._additionsTail._nextAdded=e,e}_insertAfter(e,t,i){let r=t===null?this._itHead:t._next;return e._next=r,e._prev=t,r===null?this._itTail=e:r._prev=e,t===null?this._itHead=e:t._next=e,this._linkedRecords===null&&(this._linkedRecords=new ud),this._linkedRecords.put(e),e.currentIndex=i,e}_remove(e){return this._addToRemovals(this._unlink(e))}_unlink(e){this._linkedRecords!==null&&this._linkedRecords.remove(e);let t=e._prev,i=e._next;return t===null?this._itHead=i:t._next=i,i===null?this._itTail=t:i._prev=t,e}_addToMoves(e,t){return e.previousIndex===t||(this._movesTail===null?this._movesTail=this._movesHead=e:this._movesTail=this._movesTail._nextMoved=e),e}_addToRemovals(e){return this._unlinkedRecords===null&&(this._unlinkedRecords=new ud),this._unlinkedRecords.put(e),e.currentIndex=null,e._nextRemoved=null,this._removalsTail===null?(this._removalsTail=this._removalsHead=e,e._prevRemoved=null):(e._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=e),e}_addIdentityChange(e,t){return e.item=t,this._identityChangesTail===null?this._identityChangesTail=this._identityChangesHead=e:this._identityChangesTail=this._identityChangesTail._nextIdentityChange=e,e}},bg=class{item;trackById;currentIndex=null;previousIndex=null;_nextPrevious=null;_prev=null;_next=null;_prevDup=null;_nextDup=null;_prevRemoved=null;_nextRemoved=null;_nextAdded=null;_nextMoved=null;_nextIdentityChange=null;constructor(e,t){this.item=e,this.trackById=t}},wg=class{_head=null;_tail=null;add(e){this._head===null?(this._head=this._tail=e,e._nextDup=null,e._prevDup=null):(this._tail._nextDup=e,e._prevDup=this._tail,e._nextDup=null,this._tail=e)}get(e,t){let i;for(i=this._head;i!==null;i=i._nextDup)if((t===null||t<=i.currentIndex)&&Object.is(i.trackById,e))return i;return null}remove(e){let t=e._prevDup,i=e._nextDup;return t===null?this._head=i:t._nextDup=i,i===null?this._tail=t:i._prevDup=t,this._head===null}},ud=class{map=new Map;put(e){let t=e.trackById,i=this.map.get(t);i||(i=new wg,this.map.set(t,i)),i.add(e)}get(e,t){let i=e,r=this.map.get(i);return r?r.get(e,t):null}remove(e){let t=e.trackById;return this.map.get(t).remove(e)&&this.map.delete(t),e}get isEmpty(){return this.map.size===0}clear(){this.map.clear()}};function DE(n,e,t){let i=n.previousIndex;if(i===null)return i;let r=0;return t&&i<t.length&&(r=t[i]),i+e+r}function IE(){return new Tg([new Sg])}var Tg=(()=>{class n{factories;static \u0275prov=Te({token:n,providedIn:"root",factory:IE});constructor(t){this.factories=t}static create(t,i){if(i!=null){let r=i.factories.slice();t=t.concat(r)}return new n(t)}static extend(t){return{provide:n,useFactory:()=>{let i=ee(n,{optional:!0,skipSelf:!0});return n.create(t,i||IE())}}}find(t){let i=this.factories.find(r=>r.supports(t));if(i!=null)return i;throw new Me(901,!1)}}return n})();function OE(n){let{rootComponent:e,appProviders:t,platformProviders:i,platformRef:r}=n;vt(8);try{let s=r?.injector??DI(i),o=[ME({}),{provide:fs,useExisting:wE},l0,...t||[]],a=new ac({providers:o,parent:s,debugName:"",runEnvironmentInitializers:!1});return bI({r3Injector:a.injector,platformInjector:s,rootComponent:e})}catch(s){return Promise.reject(s)}finally{vt(9)}}function _c(n){return typeof n=="boolean"?n:n!=null&&n!=="false"}var kE=null;function tr(){return kE}function Cg(n){kE??=n}var xc=class{},Dg=(()=>{class n{historyGo(t){throw new Error("")}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Te({token:n,factory:()=>ee(UE),providedIn:"platform"})}return n})();var UE=(()=>{class n extends Dg{_location;_history;_doc=ee(Vt);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return tr().getBaseHref(this._doc)}onPopState(t){let i=tr().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",t,!1),()=>i.removeEventListener("popstate",t)}onHashChange(t){let i=tr().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",t,!1),()=>i.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,i,r){this._history.pushState(t,i,r)}replaceState(t,i,r){this._history.replaceState(t,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Te({token:n,factory:()=>new n,providedIn:"platform"})}return n})();function BE(n,e){return n?e?n.endsWith("/")?e.startsWith("/")?n+e.slice(1):n+e:e.startsWith("/")?n+e:`${n}/${e}`:n:e}function LE(n){let e=n.search(/#|\?|$/);return n[e-1]==="/"?n.slice(0,e-1)+n.slice(e):n}function Nr(n){return n&&n[0]!=="?"?`?${n}`:n}var Ts=(()=>{class n{historyGo(t){throw new Error("")}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Te({token:n,factory:()=>ee(Ig),providedIn:"root"})}return n})(),VE=new Oe(""),Ig=(()=>{class n extends Ts{_platformLocation;_baseHref;_removeListenerFns=[];constructor(t,i){super(),this._platformLocation=t,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??ee(Vt).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return BE(this._baseHref,t)}path(t=!1){let i=this._platformLocation.pathname+Nr(this._platformLocation.search),r=this._platformLocation.hash;return r&&t?`${i}${r}`:i}pushState(t,i,r,s){let o=this.prepareExternalUrl(r+Nr(s));this._platformLocation.pushState(t,i,o)}replaceState(t,i,r,s){let o=this.prepareExternalUrl(r+Nr(s));this._platformLocation.replaceState(t,i,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(i){return new(i||n)(Ge(Dg),Ge(VE,8))};static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Cs=(()=>{class n{_subject=new Bt;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(t){this._locationStrategy=t;let i=this._locationStrategy.getBaseHref();this._basePath=LI(LE(FE(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,i=""){return this.path()==this.normalize(t+Nr(i))}normalize(t){return n.stripTrailingSlash(OI(this._basePath,FE(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,i="",r=null){this._locationStrategy.pushState(r,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Nr(i)),r)}replaceState(t,i="",r=null){this._locationStrategy.replaceState(r,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Nr(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",i){this._urlChangeListeners.forEach(r=>r(t,i))}subscribe(t,i,r){return this._subject.subscribe({next:t,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=Nr;static joinWithSlash=BE;static stripTrailingSlash=LE;static \u0275fac=function(i){return new(i||n)(Ge(Ts))};static \u0275prov=Te({token:n,factory:()=>PI(),providedIn:"root"})}return n})();function PI(){return new Cs(Ge(Ts))}function OI(n,e){if(!n||!e.startsWith(n))return e;let t=e.substring(n.length);return t===""||["/",";","?","#"].includes(t[0])?t:e}function FE(n){return n.replace(/\/index.html$/,"")}function LI(n){if(new RegExp("^(https?:)?//").test(n)){let[,t]=n.split(/\/\/[^\/]+/);return t}return n}var fd=class{$implicit;ngForOf;index;count;constructor(e,t,i,r){this.$implicit=e,this.ngForOf=t,this.index=i,this.count=r}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},Lo=(()=>{class n{_viewContainer;_template;_differs;set ngForOf(t){this._ngForOf=t,this._ngForOfDirty=!0}set ngForTrackBy(t){this._trackByFn=t}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(t,i,r){this._viewContainer=t,this._template=i,this._differs=r}set ngForTemplate(t){t&&(this._template=t)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let t=this._ngForOf;!this._differ&&t&&(this._differ=this._differs.find(t).create(this.ngForTrackBy))}if(this._differ){let t=this._differ.diff(this._ngForOf);t&&this._applyChanges(t)}}_applyChanges(t){let i=this._viewContainer;t.forEachOperation((r,s,o)=>{if(r.previousIndex==null)i.createEmbeddedView(this._template,new fd(r.item,this._ngForOf,-1,-1),o===null?void 0:o);else if(o==null)i.remove(s===null?void 0:s);else if(s!==null){let a=i.get(s);i.move(a,o),HE(a,r)}});for(let r=0,s=i.length;r<s;r++){let a=i.get(r).context;a.index=r,a.count=s,a.ngForOf=this._ngForOf}t.forEachIdentityChange(r=>{let s=i.get(r.currentIndex);HE(s,r)})}static ngTemplateContextGuard(t,i){return!0}static \u0275fac=function(i){return new(i||n)(zt(Ir),zt(Es),zt(Tg))};static \u0275dir=Ar({type:n,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}})}return n})();function HE(n,e){n.context.$implicit=e.item}function Ag(n,e){e=encodeURIComponent(e);for(let t of n.split(";")){let i=t.indexOf("="),[r,s]=i==-1?[t,""]:[t.slice(0,i),t.slice(i+1)];if(r.trim()===e)return decodeURIComponent(s)}return null}var Ec=class{};var zE="browser";var GE=(()=>{class n{static \u0275prov=Te({token:n,providedIn:"root",factory:()=>new Rg(ee(Vt),window)})}return n})(),Rg=class{document;window;offset=()=>[0,0];constructor(e,t){this.document=e,this.window=t}setOffset(e){Array.isArray(e)?this.offset=()=>e:this.offset=e}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(e,t){this.window.scrollTo(dt(ue({},t),{left:e[0],top:e[1]}))}scrollToAnchor(e,t){let i=BI(this.document,e);i&&(this.scrollToElement(i,t),i.focus())}setHistoryScrollRestoration(e){try{this.window.history.scrollRestoration=e}catch{console.warn(hs(2400,!1))}}scrollToElement(e,t){let i=e.getBoundingClientRect(),r=i.left+this.window.pageXOffset,s=i.top+this.window.pageYOffset,o=this.offset();this.window.scrollTo(dt(ue({},t),{left:r-o[0],top:s-o[1]}))}};function BI(n,e){let t=n.getElementById(e)||n.getElementsByName(e)[0];if(t)return t;if(typeof n.createTreeWalker=="function"&&n.body&&typeof n.body.attachShadow=="function"){let i=n.createTreeWalker(n.body,NodeFilter.SHOW_ELEMENT),r=i.currentNode;for(;r;){let s=r.shadowRoot;if(s){let o=s.getElementById(e)||s.querySelector(`[name="${e}"]`);if(o)return o}r=i.nextNode()}}return null}var Sc=class{_doc;constructor(e){this._doc=e}manager},hd=(()=>{class n extends Sc{constructor(t){super(t)}supports(t){return!0}addEventListener(t,i,r,s){return t.addEventListener(i,r,s),()=>this.removeEventListener(t,i,r,s)}removeEventListener(t,i,r,s){return t.removeEventListener(i,r,s)}static \u0275fac=function(i){return new(i||n)(Ge(Vt))};static \u0275prov=Te({token:n,factory:n.\u0275fac})}return n})(),md=new Oe(""),Fg=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,i){this._zone=i,t.forEach(o=>{o.manager=this});let r=t.filter(o=>!(o instanceof hd));this._plugins=r.slice().reverse();let s=t.find(o=>o instanceof hd);s&&this._plugins.push(s)}addEventListener(t,i,r,s){return this._findPluginFor(i).addEventListener(t,i,r,s)}getZone(){return this._zone}_findPluginFor(t){let i=this._eventNameToPlugin.get(t);if(i)return i;if(i=this._plugins.find(s=>s.supports(t)),!i)throw new Me(5101,!1);return this._eventNameToPlugin.set(t,i),i}static \u0275fac=function(i){return new(i||n)(Ge(md),Ge(Ht))};static \u0275prov=Te({token:n,factory:n.\u0275fac})}return n})(),Ng="ng-app-id";function jE(n){for(let e of n)e.remove()}function WE(n,e){let t=e.createElement("style");return t.textContent=n,t}function HI(n,e,t,i){let r=n.head?.querySelectorAll(`style[${Ng}="${e}"],link[${Ng}="${e}"]`);if(r)for(let s of r)s.removeAttribute(Ng),s instanceof HTMLLinkElement?i.set(s.href.slice(s.href.lastIndexOf("/")+1),{usage:0,elements:[s]}):s.textContent&&t.set(s.textContent,{usage:0,elements:[s]})}function Og(n,e){let t=e.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",n),t}var kg=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(t,i,r,s={}){this.doc=t,this.appId=i,this.nonce=r,HI(t,i,this.inline,this.external),this.hosts.add(t.head)}addStyles(t,i){for(let r of t)this.addUsage(r,this.inline,WE);i?.forEach(r=>this.addUsage(r,this.external,Og))}removeStyles(t,i){for(let r of t)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(t,i,r){let s=i.get(t);s?s.usage++:i.set(t,{usage:1,elements:[...this.hosts].map(o=>this.addElement(o,r(t,this.doc)))})}removeUsage(t,i){let r=i.get(t);r&&(r.usage--,r.usage<=0&&(jE(r.elements),i.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])jE(t);this.hosts.clear()}addHost(t){this.hosts.add(t);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(t,WE(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(t,Og(i,this.doc)))}removeHost(t){this.hosts.delete(t)}addElement(t,i){return this.nonce&&i.setAttribute("nonce",this.nonce),t.appendChild(i)}static \u0275fac=function(i){return new(i||n)(Ge(Vt),Ge(qu),Ge(Yu,8),Ge(Ao))};static \u0275prov=Te({token:n,factory:n.\u0275fac})}return n})(),Pg={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Ug=/%COMP%/g;var qE="%COMP%",zI=`_nghost-${qE}`,GI=`_ngcontent-${qE}`,jI=!0,WI=new Oe("",{providedIn:"root",factory:()=>jI});function $I(n){return GI.replace(Ug,n)}function qI(n){return zI.replace(Ug,n)}function XE(n,e){return e.map(t=>t.replace(Ug,n))}var Bg=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(t,i,r,s,o,a,c,l=null,u=null){this.eventManager=t,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=s,this.doc=o,this.platformId=a,this.ngZone=c,this.nonce=l,this.tracingService=u,this.platformIsServer=!1,this.defaultRenderer=new Mc(t,o,c,this.platformIsServer,this.tracingService)}createRenderer(t,i){if(!t||!i)return this.defaultRenderer;let r=this.getOrCreateRenderer(t,i);return r instanceof pd?r.applyToHost(t):r instanceof bc&&r.applyStyles(),r}getOrCreateRenderer(t,i){let r=this.rendererByCompId,s=r.get(i.id);if(!s){let o=this.doc,a=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,d=this.platformIsServer,f=this.tracingService;switch(i.encapsulation){case Zi.Emulated:s=new pd(c,l,i,this.appId,u,o,a,d,f);break;case Zi.ShadowDom:return new Lg(c,l,t,i,o,a,this.nonce,d,f);default:s=new bc(c,l,i,u,o,a,d,f);break}r.set(i.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static \u0275fac=function(i){return new(i||n)(Ge(Fg),Ge(kg),Ge(qu),Ge(WI),Ge(Vt),Ge(Ao),Ge(Ht),Ge(Yu),Ge(dc,8))};static \u0275prov=Te({token:n,factory:n.\u0275fac})}return n})(),Mc=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(e,t,i,r,s){this.eventManager=e,this.doc=t,this.ngZone=i,this.platformIsServer=r,this.tracingService=s}destroy(){}destroyNode=null;createElement(e,t){return t?this.doc.createElementNS(Pg[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){($E(e)?e.content:e).appendChild(t)}insertBefore(e,t,i){e&&($E(e)?e.content:e).insertBefore(t,i)}removeChild(e,t){t.remove()}selectRootElement(e,t){let i=typeof e=="string"?this.doc.querySelector(e):e;if(!i)throw new Me(-5104,!1);return t||(i.textContent=""),i}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,i,r){if(r){t=r+":"+t;let s=Pg[r];s?e.setAttributeNS(s,t,i):e.setAttribute(t,i)}else e.setAttribute(t,i)}removeAttribute(e,t,i){if(i){let r=Pg[i];r?e.removeAttributeNS(r,t):e.removeAttribute(`${i}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,i,r){r&(Ms.DashCase|Ms.Important)?e.style.setProperty(t,i,r&Ms.Important?"important":""):e.style[t]=i}removeStyle(e,t,i){i&Ms.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,i){e!=null&&(e[t]=i)}setValue(e,t){e.nodeValue=t}listen(e,t,i,r){if(typeof e=="string"&&(e=tr().getGlobalEventTarget(this.doc,e),!e))throw new Me(5102,!1);let s=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(s=this.tracingService.wrapEventListener(e,t,s)),this.eventManager.addEventListener(e,t,s,r)}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;e(t)===!1&&t.preventDefault()}}};function $E(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var Lg=class extends Mc{sharedStylesHost;hostEl;shadowRoot;constructor(e,t,i,r,s,o,a,c,l){super(e,s,o,c,l),this.sharedStylesHost=t,this.hostEl=i,this.shadowRoot=i.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let u=r.styles;u=XE(r.id,u);for(let f of u){let p=document.createElement("style");a&&p.setAttribute("nonce",a),p.textContent=f,this.shadowRoot.appendChild(p)}let d=r.getExternalStyles?.();if(d)for(let f of d){let p=Og(f,s);a&&p.setAttribute("nonce",a),this.shadowRoot.appendChild(p)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,i){return super.insertBefore(this.nodeOrShadowRoot(e),t,i)}removeChild(e,t){return super.removeChild(null,t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},bc=class extends Mc{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(e,t,i,r,s,o,a,c,l){super(e,s,o,a,c),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r;let u=i.styles;this.styles=l?XE(l,u):u,this.styleUrls=i.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&To.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},pd=class extends bc{contentAttr;hostAttr;constructor(e,t,i,r,s,o,a,c,l){let u=r+"-"+i.id;super(e,t,i,s,o,a,c,l,u),this.contentAttr=$I(u),this.hostAttr=qI(u)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let i=super.createElement(e,t);return super.setAttribute(i,this.contentAttr,""),i}};var gd=class n extends xc{supportsDOMEvents=!0;static makeCurrent(){Cg(new n)}onAndCancel(e,t,i,r){return e.addEventListener(t,i,r),()=>{e.removeEventListener(t,i,r)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.remove()}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=XI();return t==null?null:YI(t)}resetBaseElement(){wc=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return Ag(document.cookie,e)}},wc=null;function XI(){return wc=wc||document.head.querySelector("base"),wc?wc.getAttribute("href"):null}function YI(n){return new URL(n,document.baseURI).pathname}var ZI=(()=>{class n{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Te({token:n,factory:n.\u0275fac})}return n})(),YE=["alt","control","meta","shift"],KI={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},JI={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},ZE=(()=>{class n extends Sc{constructor(t){super(t)}supports(t){return n.parseEventName(t)!=null}addEventListener(t,i,r,s){let o=n.parseEventName(i),a=n.eventCallback(o.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>tr().onAndCancel(t,o.domEventName,a,s))}static parseEventName(t){let i=t.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let s=n._normalizeKey(i.pop()),o="",a=i.indexOf("code");if(a>-1&&(i.splice(a,1),o="code."),YE.forEach(l=>{let u=i.indexOf(l);u>-1&&(i.splice(u,1),o+=l+".")}),o+=s,i.length!=0||s.length===0)return null;let c={};return c.domEventName=r,c.fullKey=o,c}static matchEventFullKeyCode(t,i){let r=KI[t.key]||t.key,s="";return i.indexOf("code.")>-1&&(r=t.code,s="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),YE.forEach(o=>{if(o!==r){let a=JI[o];a(t)&&(s+=o+".")}}),s+=r,s===i)}static eventCallback(t,i,r){return s=>{n.matchEventFullKeyCode(s,t)&&r.runGuarded(()=>i(s))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(i){return new(i||n)(Ge(Vt))};static \u0275prov=Te({token:n,factory:n.\u0275fac})}return n})();function Vg(n,e,t){let i=ue({rootComponent:n,platformRef:t?.platformRef},QI(e));return OE(i)}function QI(n){return{appProviders:[...rA,...n?.providers??[]],platformProviders:iA}}function eA(){gd.makeCurrent()}function tA(){return new wi}function nA(){return zm(document),document}var iA=[{provide:Ao,useValue:zE},{provide:Xu,useValue:eA,multi:!0},{provide:Vt,useFactory:nA}];var rA=[{provide:qa,useValue:"root"},{provide:wi,useFactory:tA},{provide:md,useClass:hd,multi:!0,deps:[Vt]},{provide:md,useClass:ZE,multi:!0,deps:[Vt]},Bg,kg,Fg,{provide:Ss,useExisting:Bg},{provide:Ec,useClass:ZI},[]];var KE=(()=>{class n{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static \u0275fac=function(i){return new(i||n)(Ge(Vt))};static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var He="primary",Uc=Symbol("RouteTitle"),Wg=class{params;constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t[0]:t}return null}getAll(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function As(n){return new Wg(n)}function sS(n,e,t){let i=t.path.split("/");if(i.length>n.length||t.pathMatch==="full"&&(e.hasChildren()||i.length<n.length))return null;let r={};for(let s=0;s<i.length;s++){let o=i[s],a=n[s];if(o[0]===":")r[o.substring(1)]=a;else if(o!==a.path)return null}return{consumed:n.slice(0,i.length),posParams:r}}function oA(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;++t)if(!Pi(n[t],e[t]))return!1;return!0}function Pi(n,e){let t=n?$g(n):void 0,i=e?$g(e):void 0;if(!t||!i||t.length!=i.length)return!1;let r;for(let s=0;s<t.length;s++)if(r=t[s],!oS(n[r],e[r]))return!1;return!0}function $g(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function oS(n,e){if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return!1;let t=[...n].sort(),i=[...e].sort();return t.every((r,s)=>i[s]===r)}else return n===e}function aS(n){return n.length>0?n[n.length-1]:null}function ir(n){return up(n)?n:pc(n)?Rt(Promise.resolve(n)):Pe(n)}var aA={exact:lS,subset:uS},cS={exact:cA,subset:lA,ignored:()=>!0};function JE(n,e,t){return aA[t.paths](n.root,e.root,t.matrixParams)&&cS[t.queryParams](n.queryParams,e.queryParams)&&!(t.fragment==="exact"&&n.fragment!==e.fragment)}function cA(n,e){return Pi(n,e)}function lS(n,e,t){if(!Ds(n.segments,e.segments)||!_d(n.segments,e.segments,t)||n.numberOfChildren!==e.numberOfChildren)return!1;for(let i in e.children)if(!n.children[i]||!lS(n.children[i],e.children[i],t))return!1;return!0}function lA(n,e){return Object.keys(e).length<=Object.keys(n).length&&Object.keys(e).every(t=>oS(n[t],e[t]))}function uS(n,e,t){return dS(n,e,e.segments,t)}function dS(n,e,t,i){if(n.segments.length>t.length){let r=n.segments.slice(0,t.length);return!(!Ds(r,t)||e.hasChildren()||!_d(r,t,i))}else if(n.segments.length===t.length){if(!Ds(n.segments,t)||!_d(n.segments,t,i))return!1;for(let r in e.children)if(!n.children[r]||!uS(n.children[r],e.children[r],i))return!1;return!0}else{let r=t.slice(0,n.segments.length),s=t.slice(n.segments.length);return!Ds(n.segments,r)||!_d(n.segments,r,i)||!n.children[He]?!1:dS(n.children[He],e,s,i)}}function _d(n,e,t){return e.every((i,r)=>cS[t](n[r].parameters,i.parameters))}var Li=class{root;queryParams;fragment;_queryParamMap;constructor(e=new at([],{}),t={},i=null){this.root=e,this.queryParams=t,this.fragment=i}get queryParamMap(){return this._queryParamMap??=As(this.queryParams),this._queryParamMap}toString(){return fA.serialize(this)}},at=class{segments;children;parent=null;constructor(e,t){this.segments=e,this.children=t,Object.values(t).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return xd(this)}},Pr=class{path;parameters;_parameterMap;constructor(e,t){this.path=e,this.parameters=t}get parameterMap(){return this._parameterMap??=As(this.parameters),this._parameterMap}toString(){return hS(this)}};function uA(n,e){return Ds(n,e)&&n.every((t,i)=>Pi(t.parameters,e[i].parameters))}function Ds(n,e){return n.length!==e.length?!1:n.every((t,i)=>t.path===e[i].path)}function dA(n,e){let t=[];return Object.entries(n.children).forEach(([i,r])=>{i===He&&(t=t.concat(e(r,i)))}),Object.entries(n.children).forEach(([i,r])=>{i!==He&&(t=t.concat(e(r,i)))}),t}var qo=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=Te({token:n,factory:()=>new Rs,providedIn:"root"})}return n})(),Rs=class{parse(e){let t=new Xg(e);return new Li(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(e){let t=`/${Tc(e.root,!0)}`,i=mA(e.queryParams),r=typeof e.fragment=="string"?`#${hA(e.fragment)}`:"";return`${t}${i}${r}`}},fA=new Rs;function xd(n){return n.segments.map(e=>hS(e)).join("/")}function Tc(n,e){if(!n.hasChildren())return xd(n);if(e){let t=n.children[He]?Tc(n.children[He],!1):"",i=[];return Object.entries(n.children).forEach(([r,s])=>{r!==He&&i.push(`${r}:${Tc(s,!1)}`)}),i.length>0?`${t}(${i.join("//")})`:t}else{let t=dA(n,(i,r)=>r===He?[Tc(n.children[He],!1)]:[`${r}:${Tc(i,!1)}`]);return Object.keys(n.children).length===1&&n.children[He]!=null?`${xd(n)}/${t[0]}`:`${xd(n)}/(${t.join("//")})`}}function fS(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function vd(n){return fS(n).replace(/%3B/gi,";")}function hA(n){return encodeURI(n)}function qg(n){return fS(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Ed(n){return decodeURIComponent(n)}function QE(n){return Ed(n.replace(/\+/g,"%20"))}function hS(n){return`${qg(n.path)}${pA(n.parameters)}`}function pA(n){return Object.entries(n).map(([e,t])=>`;${qg(e)}=${qg(t)}`).join("")}function mA(n){let e=Object.entries(n).map(([t,i])=>Array.isArray(i)?i.map(r=>`${vd(t)}=${vd(r)}`).join("&"):`${vd(t)}=${vd(i)}`).filter(t=>t);return e.length?`?${e.join("&")}`:""}var gA=/^[^\/()?;#]+/;function Hg(n){let e=n.match(gA);return e?e[0]:""}var vA=/^[^\/()?;=#]+/;function yA(n){let e=n.match(vA);return e?e[0]:""}var _A=/^[^=?&#]+/;function xA(n){let e=n.match(_A);return e?e[0]:""}var EA=/^[^&#]+/;function SA(n){let e=n.match(EA);return e?e[0]:""}var Xg=class{url;remaining;constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new at([],{}):new at([],this.parseChildren())}parseQueryParams(){let e={};if(this.consumeOptional("?"))do this.parseQueryParam(e);while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1)),(e.length>0||Object.keys(t).length>0)&&(i[He]=new at(e,t)),i}parseSegment(){let e=Hg(this.remaining);if(e===""&&this.peekStartsWith(";"))throw new Me(4009,!1);return this.capture(e),new Pr(Ed(e),this.parseMatrixParams())}parseMatrixParams(){let e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){let t=yA(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let r=Hg(this.remaining);r&&(i=r,this.capture(i))}e[Ed(t)]=Ed(i)}parseQueryParam(e){let t=xA(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let o=SA(this.remaining);o&&(i=o,this.capture(i))}let r=QE(t),s=QE(i);if(e.hasOwnProperty(r)){let o=e[r];Array.isArray(o)||(o=[o],e[r]=o),o.push(s)}else e[r]=s}parseParens(e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let i=Hg(this.remaining),r=this.remaining[i.length];if(r!=="/"&&r!==")"&&r!==";")throw new Me(4010,!1);let s;i.indexOf(":")>-1?(s=i.slice(0,i.indexOf(":")),this.capture(s),this.capture(":")):e&&(s=He);let o=this.parseChildren();t[s]=Object.keys(o).length===1&&o[He]?o[He]:new at([],o),this.consumeOptional("//")}return t}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return this.peekStartsWith(e)?(this.remaining=this.remaining.substring(e.length),!0):!1}capture(e){if(!this.consumeOptional(e))throw new Me(4011,!1)}};function pS(n){return n.segments.length>0?new at([],{[He]:n}):n}function mS(n){let e={};for(let[i,r]of Object.entries(n.children)){let s=mS(r);if(i===He&&s.segments.length===0&&s.hasChildren())for(let[o,a]of Object.entries(s.children))e[o]=a;else(s.segments.length>0||s.hasChildren())&&(e[i]=s)}let t=new at(n.segments,e);return MA(t)}function MA(n){if(n.numberOfChildren===1&&n.children[He]){let e=n.children[He];return new at(n.segments.concat(e.segments),e.children)}return n}function Or(n){return n instanceof Li}function gS(n,e,t=null,i=null){let r=vS(n);return yS(r,e,t,i)}function vS(n){let e;function t(s){let o={};for(let c of s.children){let l=t(c);o[c.outlet]=l}let a=new at(s.url,o);return s===n&&(e=a),a}let i=t(n.root),r=pS(i);return e??r}function yS(n,e,t,i){let r=n;for(;r.parent;)r=r.parent;if(e.length===0)return zg(r,r,r,t,i);let s=bA(e);if(s.toRoot())return zg(r,r,new at([],{}),t,i);let o=wA(s,r,n),a=o.processChildren?Dc(o.segmentGroup,o.index,s.commands):xS(o.segmentGroup,o.index,s.commands);return zg(r,o.segmentGroup,a,t,i)}function Sd(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function Ac(n){return typeof n=="object"&&n!=null&&n.outlets}function zg(n,e,t,i,r){let s={};i&&Object.entries(i).forEach(([c,l])=>{s[c]=Array.isArray(l)?l.map(u=>`${u}`):`${l}`});let o;n===e?o=t:o=_S(n,e,t);let a=pS(mS(o));return new Li(a,s,r)}function _S(n,e,t){let i={};return Object.entries(n.children).forEach(([r,s])=>{s===e?i[r]=t:i[r]=_S(s,e,t)}),new at(n.segments,i)}var Md=class{isAbsolute;numberOfDoubleDots;commands;constructor(e,t,i){if(this.isAbsolute=e,this.numberOfDoubleDots=t,this.commands=i,e&&i.length>0&&Sd(i[0]))throw new Me(4003,!1);let r=i.find(Ac);if(r&&r!==aS(i))throw new Me(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function bA(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new Md(!0,0,n);let e=0,t=!1,i=n.reduce((r,s,o)=>{if(typeof s=="object"&&s!=null){if(s.outlets){let a={};return Object.entries(s.outlets).forEach(([c,l])=>{a[c]=typeof l=="string"?l.split("/"):l}),[...r,{outlets:a}]}if(s.segmentPath)return[...r,s.segmentPath]}return typeof s!="string"?[...r,s]:o===0?(s.split("/").forEach((a,c)=>{c==0&&a==="."||(c==0&&a===""?t=!0:a===".."?e++:a!=""&&r.push(a))}),r):[...r,s]},[]);return new Md(t,e,i)}var Uo=class{segmentGroup;processChildren;index;constructor(e,t,i){this.segmentGroup=e,this.processChildren=t,this.index=i}};function wA(n,e,t){if(n.isAbsolute)return new Uo(e,!0,0);if(!t)return new Uo(e,!1,NaN);if(t.parent===null)return new Uo(t,!0,0);let i=Sd(n.commands[0])?0:1,r=t.segments.length-1+i;return TA(t,r,n.numberOfDoubleDots)}function TA(n,e,t){let i=n,r=e,s=t;for(;s>r;){if(s-=r,i=i.parent,!i)throw new Me(4005,!1);r=i.segments.length}return new Uo(i,!1,r-s)}function CA(n){return Ac(n[0])?n[0].outlets:{[He]:n}}function xS(n,e,t){if(n??=new at([],{}),n.segments.length===0&&n.hasChildren())return Dc(n,e,t);let i=DA(n,e,t),r=t.slice(i.commandIndex);if(i.match&&i.pathIndex<n.segments.length){let s=new at(n.segments.slice(0,i.pathIndex),{});return s.children[He]=new at(n.segments.slice(i.pathIndex),n.children),Dc(s,0,r)}else return i.match&&r.length===0?new at(n.segments,{}):i.match&&!n.hasChildren()?Yg(n,e,t):i.match?Dc(n,0,r):Yg(n,e,t)}function Dc(n,e,t){if(t.length===0)return new at(n.segments,{});{let i=CA(t),r={};if(Object.keys(i).some(s=>s!==He)&&n.children[He]&&n.numberOfChildren===1&&n.children[He].segments.length===0){let s=Dc(n.children[He],e,t);return new at(n.segments,s.children)}return Object.entries(i).forEach(([s,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(r[s]=xS(n.children[s],e,o))}),Object.entries(n.children).forEach(([s,o])=>{i[s]===void 0&&(r[s]=o)}),new at(n.segments,r)}}function DA(n,e,t){let i=0,r=e,s={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(i>=t.length)return s;let o=n.segments[r],a=t[i];if(Ac(a))break;let c=`${a}`,l=i<t.length-1?t[i+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!tS(c,l,o))return s;i+=2}else{if(!tS(c,{},o))return s;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function Yg(n,e,t){let i=n.segments.slice(0,e),r=0;for(;r<t.length;){let s=t[r];if(Ac(s)){let c=IA(s.outlets);return new at(i,c)}if(r===0&&Sd(t[0])){let c=n.segments[e];i.push(new Pr(c.path,eS(t[0]))),r++;continue}let o=Ac(s)?s.outlets[He]:`${s}`,a=r<t.length-1?t[r+1]:null;o&&a&&Sd(a)?(i.push(new Pr(o,eS(a))),r+=2):(i.push(new Pr(o,{})),r++)}return new at(i,{})}function IA(n){let e={};return Object.entries(n).forEach(([t,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(e[t]=Yg(new at([],{}),0,i))}),e}function eS(n){let e={};return Object.entries(n).forEach(([t,i])=>e[t]=`${i}`),e}function tS(n,e,t){return n==t.path&&Pi(e,t.parameters)}var Bo="imperative",Gt=(function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n})(Gt||{}),Vn=class{id;url;constructor(e,t){this.id=e,this.url=t}},Lr=class extends Vn{type=Gt.NavigationStart;navigationTrigger;restoredState;constructor(e,t,i="imperative",r=null){super(e,t),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Qn=class extends Vn{urlAfterRedirects;type=Gt.NavigationEnd;constructor(e,t,i){super(e,t),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},_n=(function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n[n.Aborted=4]="Aborted",n})(_n||{}),Ho=(function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n})(Ho||{}),Oi=class extends Vn{reason;code;type=Gt.NavigationCancel;constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},Fi=class extends Vn{reason;code;type=Gt.NavigationSkipped;constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r}},zo=class extends Vn{error;target;type=Gt.NavigationError;constructor(e,t,i,r){super(e,t),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Rc=class extends Vn{urlAfterRedirects;state;type=Gt.RoutesRecognized;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},bd=class extends Vn{urlAfterRedirects;state;type=Gt.GuardsCheckStart;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},wd=class extends Vn{urlAfterRedirects;state;shouldActivate;type=Gt.GuardsCheckEnd;constructor(e,t,i,r,s){super(e,t),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=s}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Td=class extends Vn{urlAfterRedirects;state;type=Gt.ResolveStart;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Cd=class extends Vn{urlAfterRedirects;state;type=Gt.ResolveEnd;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Dd=class{route;type=Gt.RouteConfigLoadStart;constructor(e){this.route=e}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Id=class{route;type=Gt.RouteConfigLoadEnd;constructor(e){this.route=e}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Ad=class{snapshot;type=Gt.ChildActivationStart;constructor(e){this.snapshot=e}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Rd=class{snapshot;type=Gt.ChildActivationEnd;constructor(e){this.snapshot=e}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Nd=class{snapshot;type=Gt.ActivationStart;constructor(e){this.snapshot=e}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Pd=class{snapshot;type=Gt.ActivationEnd;constructor(e){this.snapshot=e}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Go=class{routerEvent;position;anchor;type=Gt.Scroll;constructor(e,t,i){this.routerEvent=e,this.position=t,this.anchor=i}toString(){let e=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${e}')`}},Nc=class{},jo=class{url;navigationBehaviorOptions;constructor(e,t){this.url=e,this.navigationBehaviorOptions=t}};function AA(n){return!(n instanceof Nc)&&!(n instanceof jo)}function RA(n,e){return n.providers&&!n._injector&&(n._injector=hc(n.providers,e,`Route: ${n.path}`)),n._injector??e}function hi(n){return n.outlet||He}function NA(n,e){let t=n.filter(i=>hi(i)===e);return t.push(...n.filter(i=>hi(i)!==e)),t}function Xo(n){if(!n)return null;if(n.routeConfig?._injector)return n.routeConfig._injector;for(let e=n.parent;e;e=e.parent){let t=e.routeConfig;if(t?._loadedInjector)return t._loadedInjector;if(t?._injector)return t._injector}return null}var Od=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return Xo(this.route?.snapshot)??this.rootInjector}constructor(e){this.rootInjector=e,this.children=new Yo(this.rootInjector)}},Yo=(()=>{class n{rootInjector;contexts=new Map;constructor(t){this.rootInjector=t}onChildOutletCreated(t,i){let r=this.getOrCreateContext(t);r.outlet=i,this.contexts.set(t,r)}onChildOutletDestroyed(t){let i=this.getContext(t);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let i=this.getContext(t);return i||(i=new Od(this.rootInjector),this.contexts.set(t,i)),i}getContext(t){return this.contexts.get(t)||null}static \u0275fac=function(i){return new(i||n)(Ge(Zt))};static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ld=class{_root;constructor(e){this._root=e}get root(){return this._root.value}parent(e){let t=this.pathFromRoot(e);return t.length>1?t[t.length-2]:null}children(e){let t=Zg(e,this._root);return t?t.children.map(i=>i.value):[]}firstChild(e){let t=Zg(e,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(e){let t=Kg(e,this._root);return t.length<2?[]:t[t.length-2].children.map(r=>r.value).filter(r=>r!==e)}pathFromRoot(e){return Kg(e,this._root).map(t=>t.value)}};function Zg(n,e){if(n===e.value)return e;for(let t of e.children){let i=Zg(n,t);if(i)return i}return null}function Kg(n,e){if(n===e.value)return[e];for(let t of e.children){let i=Kg(n,t);if(i.length)return i.unshift(e),i}return[]}var Bn=class{value;children;constructor(e,t){this.value=e,this.children=t}toString(){return`TreeNode(${this.value})`}};function ko(n){let e={};return n&&n.children.forEach(t=>e[t.value.outlet]=t),e}var Pc=class extends Ld{snapshot;constructor(e,t){super(e),this.snapshot=t,sv(this,e)}toString(){return this.snapshot.toString()}};function ES(n){let e=PA(n),t=new tn([new Pr("",{})]),i=new tn({}),r=new tn({}),s=new tn({}),o=new tn(""),a=new nr(t,i,s,o,r,He,n,e.root);return a.snapshot=e.root,new Pc(new Bn(a,[]),e)}function PA(n){let e={},t={},i={},s=new Is([],e,i,"",t,He,n,null,{});return new Oc("",new Bn(s,[]))}var nr=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(e,t,i,r,s,o,a,c){this.urlSubject=e,this.paramsSubject=t,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=s,this.outlet=o,this.component=a,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(nt(l=>l[Uc]))??Pe(void 0),this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(nt(e=>As(e))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(nt(e=>As(e))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Fd(n,e,t="emptyOnly"){let i,{routeConfig:r}=n;return e!==null&&(t==="always"||r?.path===""||!e.component&&!e.routeConfig?.loadComponent)?i={params:ue(ue({},e.params),n.params),data:ue(ue({},e.data),n.data),resolve:ue(ue(ue(ue({},n.data),e.data),r?.data),n._resolvedData)}:i={params:ue({},n.params),data:ue({},n.data),resolve:ue(ue({},n.data),n._resolvedData??{})},r&&MS(r)&&(i.resolve[Uc]=r.title),i}var Is=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;get title(){return this.data?.[Uc]}constructor(e,t,i,r,s,o,a,c,l){this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s,this.outlet=o,this.component=a,this.routeConfig=c,this._resolve=l}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=As(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=As(this.queryParams),this._queryParamMap}toString(){let e=this.url.map(i=>i.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${e}', path:'${t}')`}},Oc=class extends Ld{url;constructor(e,t){super(t),this.url=e,sv(this,t)}toString(){return SS(this._root)}};function sv(n,e){e.value._routerState=n,e.children.forEach(t=>sv(n,t))}function SS(n){let e=n.children.length>0?` { ${n.children.map(SS).join(", ")} } `:"";return`${n.value}${e}`}function Gg(n){if(n.snapshot){let e=n.snapshot,t=n._futureSnapshot;n.snapshot=t,Pi(e.queryParams,t.queryParams)||n.queryParamsSubject.next(t.queryParams),e.fragment!==t.fragment&&n.fragmentSubject.next(t.fragment),Pi(e.params,t.params)||n.paramsSubject.next(t.params),oA(e.url,t.url)||n.urlSubject.next(t.url),Pi(e.data,t.data)||n.dataSubject.next(t.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function Jg(n,e){let t=Pi(n.params,e.params)&&uA(n.url,e.url),i=!n.parent!=!e.parent;return t&&!i&&(!n.parent||Jg(n.parent,e.parent))}function MS(n){return typeof n.title=="string"||n.title===null}var bS=new Oe(""),Bc=(()=>{class n{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=He;activateEvents=new Jt;deactivateEvents=new Jt;attachEvents=new Jt;detachEvents=new Jt;routerOutletData=PE(void 0);parentContexts=ee(Yo);location=ee(Ir);changeDetector=ee(Oo);inputBinder=ee(Vd,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(t){if(t.name){let{firstChange:i,previousValue:r}=t.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Me(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Me(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Me(4012,!1);this.location.detach();let t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,i){this.activated=t,this._activatedRoute=i,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){let t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,i){if(this.isActivated)throw new Me(4013,!1);this._activatedRoute=t;let r=this.location,o=t.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,c=new Qg(t,a,r.injector,this.routerOutletData);this.activated=r.createComponent(o,{index:r.length,injector:c,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||n)};static \u0275dir=Ar({type:n,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Ki]})}return n})(),Qg=class{route;childContexts;parent;outletData;constructor(e,t,i,r){this.route=e,this.childContexts=t,this.parent=i,this.outletData=r}get(e,t){return e===nr?this.route:e===Yo?this.childContexts:e===bS?this.outletData:this.parent.get(e,t)}},Vd=new Oe("");var ov=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Nt({type:n,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&fi(0,"router-outlet")},dependencies:[Bc],encapsulation:2})}return n})();function av(n){let e=n.children&&n.children.map(av),t=e?dt(ue({},n),{children:e}):ue({},n);return!t.component&&!t.loadComponent&&(e||t.loadChildren)&&t.outlet&&t.outlet!==He&&(t.component=ov),t}function OA(n,e,t){let i=Lc(n,e._root,t?t._root:void 0);return new Pc(i,e)}function Lc(n,e,t){if(t&&n.shouldReuseRoute(e.value,t.value.snapshot)){let i=t.value;i._futureSnapshot=e.value;let r=LA(n,e,t);return new Bn(i,r)}else{if(n.shouldAttach(e.value)){let s=n.retrieve(e.value);if(s!==null){let o=s.route;return o.value._futureSnapshot=e.value,o.children=e.children.map(a=>Lc(n,a)),o}}let i=FA(e.value),r=e.children.map(s=>Lc(n,s));return new Bn(i,r)}}function LA(n,e,t){return e.children.map(i=>{for(let r of t.children)if(n.shouldReuseRoute(i.value,r.value.snapshot))return Lc(n,i,r);return Lc(n,i)})}function FA(n){return new nr(new tn(n.url),new tn(n.params),new tn(n.queryParams),new tn(n.fragment),new tn(n.data),n.outlet,n.component,n)}var Wo=class{redirectTo;navigationBehaviorOptions;constructor(e,t){this.redirectTo=e,this.navigationBehaviorOptions=t}},wS="ngNavigationCancelingError";function kd(n,e){let{redirectTo:t,navigationBehaviorOptions:i}=Or(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,r=TS(!1,_n.Redirect);return r.url=t,r.navigationBehaviorOptions=i,r}function TS(n,e){let t=new Error(`NavigationCancelingError: ${n||""}`);return t[wS]=!0,t.cancellationCode=e,t}function kA(n){return CS(n)&&Or(n.url)}function CS(n){return!!n&&n[wS]}var UA=(n,e,t,i)=>nt(r=>(new ev(e,r.targetRouterState,r.currentRouterState,t,i).activate(n),r)),ev=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(e,t,i,r,s){this.routeReuseStrategy=e,this.futureState=t,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=s}activate(e){let t=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,i,e),Gg(this.futureState.root),this.activateChildRoutes(t,i,e)}deactivateChildRoutes(e,t,i){let r=ko(t);e.children.forEach(s=>{let o=s.value.outlet;this.deactivateRoutes(s,r[o],i),delete r[o]}),Object.values(r).forEach(s=>{this.deactivateRouteAndItsChildren(s,i)})}deactivateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(r===s)if(r.component){let o=i.getContext(r.outlet);o&&this.deactivateChildRoutes(e,t,o.children)}else this.deactivateChildRoutes(e,t,i);else s&&this.deactivateRouteAndItsChildren(t,i)}deactivateRouteAndItsChildren(e,t){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,t):this.deactivateRouteAndOutlet(e,t)}detachAndStoreRouteSubtree(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=ko(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);if(i&&i.outlet){let o=i.outlet.detach(),a=i.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:o,route:e,contexts:a})}}deactivateRouteAndOutlet(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=ko(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(e,t,i){let r=ko(t);e.children.forEach(s=>{this.activateRoutes(s,r[s.value.outlet],i),this.forwardEvent(new Pd(s.value.snapshot))}),e.children.length&&this.forwardEvent(new Rd(e.value.snapshot))}activateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(Gg(r),r===s)if(r.component){let o=i.getOrCreateContext(r.outlet);this.activateChildRoutes(e,t,o.children)}else this.activateChildRoutes(e,t,i);else if(r.component){let o=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),o.children.onOutletReAttached(a.contexts),o.attachRef=a.componentRef,o.route=a.route.value,o.outlet&&o.outlet.attach(a.componentRef,a.route.value),Gg(a.route.value),this.activateChildRoutes(e,null,o.children)}else o.attachRef=null,o.route=r,o.outlet&&o.outlet.activateWith(r,o.injector),this.activateChildRoutes(e,null,o.children)}else this.activateChildRoutes(e,null,i)}},Ud=class{path;route;constructor(e){this.path=e,this.route=this.path[this.path.length-1]}},Vo=class{component;route;constructor(e,t){this.component=e,this.route=t}};function BA(n,e,t){let i=n._root,r=e?e._root:null;return Cc(i,r,t,[i.value])}function VA(n){let e=n.routeConfig?n.routeConfig.canActivateChild:null;return!e||e.length===0?null:{node:n,guards:e}}function Zo(n,e){let t=Symbol(),i=e.get(n,t);return i===t?typeof n=="function"&&!Cp(n)?n:e.get(n):i}function Cc(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=ko(e);return n.children.forEach(o=>{HA(o,s[o.value.outlet],t,i.concat([o.value]),r),delete s[o.value.outlet]}),Object.entries(s).forEach(([o,a])=>Ic(a,t.getContext(o),r)),r}function HA(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=n.value,o=e?e.value:null,a=t?t.getContext(n.value.outlet):null;if(o&&s.routeConfig===o.routeConfig){let c=zA(o,s,s.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new Ud(i)):(s.data=o.data,s._resolvedData=o._resolvedData),s.component?Cc(n,e,a?a.children:null,i,r):Cc(n,e,t,i,r),c&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new Vo(a.outlet.component,o))}else o&&Ic(e,a,r),r.canActivateChecks.push(new Ud(i)),s.component?Cc(n,null,a?a.children:null,i,r):Cc(n,null,t,i,r);return r}function zA(n,e,t){if(typeof t=="function")return t(n,e);switch(t){case"pathParamsChange":return!Ds(n.url,e.url);case"pathParamsOrQueryParamsChange":return!Ds(n.url,e.url)||!Pi(n.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Jg(n,e)||!Pi(n.queryParams,e.queryParams);case"paramsChange":default:return!Jg(n,e)}}function Ic(n,e,t){let i=ko(n),r=n.value;Object.entries(i).forEach(([s,o])=>{r.component?e?Ic(o,e.children.getContext(s),t):Ic(o,null,t):Ic(o,e,t)}),r.component?e&&e.outlet&&e.outlet.isActivated?t.canDeactivateChecks.push(new Vo(e.outlet.component,r)):t.canDeactivateChecks.push(new Vo(null,r)):t.canDeactivateChecks.push(new Vo(null,r))}function Vc(n){return typeof n=="function"}function GA(n){return typeof n=="boolean"}function jA(n){return n&&Vc(n.canLoad)}function WA(n){return n&&Vc(n.canActivate)}function $A(n){return n&&Vc(n.canActivateChild)}function qA(n){return n&&Vc(n.canDeactivate)}function XA(n){return n&&Vc(n.canMatch)}function DS(n){return n instanceof ji||n?.name==="EmptyError"}var yd=Symbol("INITIAL_VALUE");function $o(){return Tn(n=>Zl(n.map(e=>e.pipe($i(1),hp(yd)))).pipe(nt(e=>{for(let t of e)if(t!==!0){if(t===yd)return yd;if(t===!1||YA(t))return t}return!0}),Fn(e=>e!==yd),$i(1)))}function YA(n){return Or(n)||n instanceof Wo}function ZA(n,e){return Ft(t=>{let{targetSnapshot:i,currentSnapshot:r,guards:{canActivateChecks:s,canDeactivateChecks:o}}=t;return o.length===0&&s.length===0?Pe(dt(ue({},t),{guardsResult:!0})):KA(o,i,r,n).pipe(Ft(a=>a&&GA(a)?JA(i,s,n,e):Pe(a)),nt(a=>dt(ue({},t),{guardsResult:a})))})}function KA(n,e,t,i){return Rt(n).pipe(Ft(r=>iR(r.component,r.route,t,e,i)),qi(r=>r!==!0,!0))}function JA(n,e,t,i){return Rt(e).pipe(os(r=>fo(eR(r.route.parent,i),QA(r.route,i),nR(n,r.path,t),tR(n,r.route,t))),qi(r=>r!==!0,!0))}function QA(n,e){return n!==null&&e&&e(new Nd(n)),Pe(!0)}function eR(n,e){return n!==null&&e&&e(new Ad(n)),Pe(!0)}function tR(n,e,t){let i=e.routeConfig?e.routeConfig.canActivate:null;if(!i||i.length===0)return Pe(!0);let r=i.map(s=>Ua(()=>{let o=Xo(e)??t,a=Zo(s,o),c=WA(a)?a.canActivate(e,n):pn(o,()=>a(e,n));return ir(c).pipe(qi())}));return Pe(r).pipe($o())}function nR(n,e,t){let i=e[e.length-1],s=e.slice(0,e.length-1).reverse().map(o=>VA(o)).filter(o=>o!==null).map(o=>Ua(()=>{let a=o.guards.map(c=>{let l=Xo(o.node)??t,u=Zo(c,l),d=$A(u)?u.canActivateChild(i,n):pn(l,()=>u(i,n));return ir(d).pipe(qi())});return Pe(a).pipe($o())}));return Pe(s).pipe($o())}function iR(n,e,t,i,r){let s=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!s||s.length===0)return Pe(!0);let o=s.map(a=>{let c=Xo(e)??r,l=Zo(a,c),u=qA(l)?l.canDeactivate(n,e,t,i):pn(c,()=>l(n,e,t,i));return ir(u).pipe(qi())});return Pe(o).pipe($o())}function rR(n,e,t,i){let r=e.canLoad;if(r===void 0||r.length===0)return Pe(!0);let s=r.map(o=>{let a=Zo(o,n),c=jA(a)?a.canLoad(e,t):pn(n,()=>a(e,t));return ir(c)});return Pe(s).pipe($o(),IS(i))}function IS(n){return op(Yt(e=>{if(typeof e!="boolean")throw kd(n,e)}),nt(e=>e===!0))}function sR(n,e,t,i){let r=e.canMatch;if(!r||r.length===0)return Pe(!0);let s=r.map(o=>{let a=Zo(o,n),c=XA(a)?a.canMatch(e,t):pn(n,()=>a(e,t));return ir(c)});return Pe(s).pipe($o(),IS(i))}var Fc=class{segmentGroup;constructor(e){this.segmentGroup=e||null}},kc=class extends Error{urlTree;constructor(e){super(),this.urlTree=e}};function Fo(n){return lo(new Fc(n))}function oR(n){return lo(new Me(4e3,!1))}function aR(n){return lo(TS(!1,_n.GuardRejected))}var tv=class{urlSerializer;urlTree;constructor(e,t){this.urlSerializer=e,this.urlTree=t}lineralizeSegments(e,t){let i=[],r=t.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return Pe(i);if(r.numberOfChildren>1||!r.children[He])return oR(`${e.redirectTo}`);r=r.children[He]}}applyRedirectCommands(e,t,i,r,s){return cR(t,r,s).pipe(nt(o=>{if(o instanceof Li)throw new kc(o);let a=this.applyRedirectCreateUrlTree(o,this.urlSerializer.parse(o),e,i);if(o[0]==="/")throw new kc(a);return a}))}applyRedirectCreateUrlTree(e,t,i,r){let s=this.createSegmentGroup(e,t.root,i,r);return new Li(s,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(e,t){let i={};return Object.entries(e).forEach(([r,s])=>{if(typeof s=="string"&&s[0]===":"){let a=s.substring(1);i[r]=t[a]}else i[r]=s}),i}createSegmentGroup(e,t,i,r){let s=this.createSegments(e,t.segments,i,r),o={};return Object.entries(t.children).forEach(([a,c])=>{o[a]=this.createSegmentGroup(e,c,i,r)}),new at(s,o)}createSegments(e,t,i,r){return t.map(s=>s.path[0]===":"?this.findPosParam(e,s,r):this.findOrReturn(s,i))}findPosParam(e,t,i){let r=i[t.path.substring(1)];if(!r)throw new Me(4001,!1);return r}findOrReturn(e,t){let i=0;for(let r of t){if(r.path===e.path)return t.splice(i),r;i++}return e}};function cR(n,e,t){if(typeof n=="string")return Pe(n);let i=n,{queryParams:r,fragment:s,routeConfig:o,url:a,outlet:c,params:l,data:u,title:d}=e;return ir(pn(t,()=>i({params:l,data:u,queryParams:r,fragment:s,routeConfig:o,url:a,outlet:c,title:d})))}var nv={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function lR(n,e,t,i,r){let s=AS(n,e,t);return s.matched?(i=RA(e,i),sR(i,e,t,r).pipe(nt(o=>o===!0?s:ue({},nv)))):Pe(s)}function AS(n,e,t){if(e.path==="**")return uR(t);if(e.path==="")return e.pathMatch==="full"&&(n.hasChildren()||t.length>0)?ue({},nv):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let r=(e.matcher||sS)(t,n,e);if(!r)return ue({},nv);let s={};Object.entries(r.posParams??{}).forEach(([a,c])=>{s[a]=c.path});let o=r.consumed.length>0?ue(ue({},s),r.consumed[r.consumed.length-1].parameters):s;return{matched:!0,consumedSegments:r.consumed,remainingSegments:t.slice(r.consumed.length),parameters:o,positionalParamSegments:r.posParams??{}}}function uR(n){return{matched:!0,parameters:n.length>0?aS(n).parameters:{},consumedSegments:n,remainingSegments:[],positionalParamSegments:{}}}function nS(n,e,t,i){return t.length>0&&hR(n,t,i)?{segmentGroup:new at(e,fR(i,new at(t,n.children))),slicedSegments:[]}:t.length===0&&pR(n,t,i)?{segmentGroup:new at(n.segments,dR(n,t,i,n.children)),slicedSegments:t}:{segmentGroup:new at(n.segments,n.children),slicedSegments:t}}function dR(n,e,t,i){let r={};for(let s of t)if(Hd(n,e,s)&&!i[hi(s)]){let o=new at([],{});r[hi(s)]=o}return ue(ue({},i),r)}function fR(n,e){let t={};t[He]=e;for(let i of n)if(i.path===""&&hi(i)!==He){let r=new at([],{});t[hi(i)]=r}return t}function hR(n,e,t){return t.some(i=>Hd(n,e,i)&&hi(i)!==He)}function pR(n,e,t){return t.some(i=>Hd(n,e,i))}function Hd(n,e,t){return(n.hasChildren()||e.length>0)&&t.pathMatch==="full"?!1:t.path===""}function mR(n,e,t){return e.length===0&&!n.children[t]}var iv=class{};function gR(n,e,t,i,r,s,o="emptyOnly"){return new rv(n,e,t,i,r,o,s).recognize()}var vR=31,rv=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(e,t,i,r,s,o,a){this.injector=e,this.configLoader=t,this.rootComponentType=i,this.config=r,this.urlTree=s,this.paramsInheritanceStrategy=o,this.urlSerializer=a,this.applyRedirects=new tv(this.urlSerializer,this.urlTree)}noMatchError(e){return new Me(4002,`'${e.segmentGroup}'`)}recognize(){let e=nS(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(e).pipe(nt(({children:t,rootSnapshot:i})=>{let r=new Bn(i,t),s=new Oc("",r),o=gS(i,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,s.url=this.urlSerializer.serialize(o),{state:s,tree:o}}))}match(e){let t=new Is([],Object.freeze({}),Object.freeze(ue({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),He,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,e,He,t).pipe(nt(i=>({children:i,rootSnapshot:t})),Wi(i=>{if(i instanceof kc)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof Fc?this.noMatchError(i):i}))}processSegmentGroup(e,t,i,r,s){return i.segments.length===0&&i.hasChildren()?this.processChildren(e,t,i,s):this.processSegment(e,t,i,i.segments,r,!0,s).pipe(nt(o=>o instanceof Bn?[o]:[]))}processChildren(e,t,i,r){let s=[];for(let o of Object.keys(i.children))o==="primary"?s.unshift(o):s.push(o);return Rt(s).pipe(os(o=>{let a=i.children[o],c=NA(t,o);return this.processSegmentGroup(e,c,a,o,r)}),fp((o,a)=>(o.push(...a),o)),vr(null),dp(),Ft(o=>{if(o===null)return Fo(i);let a=RS(o);return yR(a),Pe(a)}))}processSegment(e,t,i,r,s,o,a){return Rt(t).pipe(os(c=>this.processSegmentAgainstRoute(c._injector??e,t,c,i,r,s,o,a).pipe(Wi(l=>{if(l instanceof Fc)return Pe(null);throw l}))),qi(c=>!!c),Wi(c=>{if(DS(c))return mR(i,r,s)?Pe(new iv):Fo(i);throw c}))}processSegmentAgainstRoute(e,t,i,r,s,o,a,c){return hi(i)!==o&&(o===He||!Hd(r,s,i))?Fo(r):i.redirectTo===void 0?this.matchSegmentAgainstRoute(e,r,i,s,o,c):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(e,r,t,i,s,o,c):Fo(r)}expandSegmentAgainstRouteUsingRedirect(e,t,i,r,s,o,a){let{matched:c,parameters:l,consumedSegments:u,positionalParamSegments:d,remainingSegments:f}=AS(t,r,s);if(!c)return Fo(t);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>vR&&(this.allowRedirects=!1));let p=new Is(s,l,Object.freeze(ue({},this.urlTree.queryParams)),this.urlTree.fragment,iS(r),hi(r),r.component??r._loadedComponent??null,r,rS(r)),g=Fd(p,a,this.paramsInheritanceStrategy);return p.params=Object.freeze(g.params),p.data=Object.freeze(g.data),this.applyRedirects.applyRedirectCommands(u,r.redirectTo,d,p,e).pipe(Tn(m=>this.applyRedirects.lineralizeSegments(r,m)),Ft(m=>this.processSegment(e,i,t,m.concat(f),o,!1,a)))}matchSegmentAgainstRoute(e,t,i,r,s,o){let a=lR(t,i,r,e,this.urlSerializer);return i.path==="**"&&(t.children={}),a.pipe(Tn(c=>c.matched?(e=i._injector??e,this.getChildConfig(e,i,r).pipe(Tn(({routes:l})=>{let u=i._loadedInjector??e,{parameters:d,consumedSegments:f,remainingSegments:p}=c,g=new Is(f,d,Object.freeze(ue({},this.urlTree.queryParams)),this.urlTree.fragment,iS(i),hi(i),i.component??i._loadedComponent??null,i,rS(i)),y=Fd(g,o,this.paramsInheritanceStrategy);g.params=Object.freeze(y.params),g.data=Object.freeze(y.data);let{segmentGroup:m,slicedSegments:h}=nS(t,f,p,l);if(h.length===0&&m.hasChildren())return this.processChildren(u,l,m,g).pipe(nt(S=>new Bn(g,S)));if(l.length===0&&h.length===0)return Pe(new Bn(g,[]));let b=hi(i)===s;return this.processSegment(u,l,m,h,b?He:s,!0,g).pipe(nt(S=>new Bn(g,S instanceof Bn?[S]:[])))}))):Fo(t)))}getChildConfig(e,t,i){return t.children?Pe({routes:t.children,injector:e}):t.loadChildren?t._loadedRoutes!==void 0?Pe({routes:t._loadedRoutes,injector:t._loadedInjector}):rR(e,t,i,this.urlSerializer).pipe(Ft(r=>r?this.configLoader.loadChildren(e,t).pipe(Yt(s=>{t._loadedRoutes=s.routes,t._loadedInjector=s.injector})):aR(t))):Pe({routes:[],injector:e})}};function yR(n){n.sort((e,t)=>e.value.outlet===He?-1:t.value.outlet===He?1:e.value.outlet.localeCompare(t.value.outlet))}function _R(n){let e=n.value.routeConfig;return e&&e.path===""}function RS(n){let e=[],t=new Set;for(let i of n){if(!_R(i)){e.push(i);continue}let r=e.find(s=>i.value.routeConfig===s.value.routeConfig);r!==void 0?(r.children.push(...i.children),t.add(r)):e.push(i)}for(let i of t){let r=RS(i.children);e.push(new Bn(i.value,r))}return e.filter(i=>!t.has(i))}function iS(n){return n.data||{}}function rS(n){return n.resolve||{}}function xR(n,e,t,i,r,s){return Ft(o=>gR(n,e,t,i,o.extractedUrl,r,s).pipe(nt(({state:a,tree:c})=>dt(ue({},o),{targetSnapshot:a,urlAfterRedirects:c}))))}function ER(n,e){return Ft(t=>{let{targetSnapshot:i,guards:{canActivateChecks:r}}=t;if(!r.length)return Pe(t);let s=new Set(r.map(c=>c.route)),o=new Set;for(let c of s)if(!o.has(c))for(let l of NS(c))o.add(l);let a=0;return Rt(o).pipe(os(c=>s.has(c)?SR(c,i,n,e):(c.data=Fd(c,c.parent,n).resolve,Pe(void 0))),Yt(()=>a++),ho(1),Ft(c=>a===o.size?Pe(t):bn))})}function NS(n){let e=n.children.map(t=>NS(t)).flat();return[n,...e]}function SR(n,e,t,i){let r=n.routeConfig,s=n._resolve;return r?.title!==void 0&&!MS(r)&&(s[Uc]=r.title),Ua(()=>(n.data=Fd(n,n.parent,t).resolve,MR(s,n,e,i).pipe(nt(o=>(n._resolvedData=o,n.data=ue(ue({},n.data),o),null)))))}function MR(n,e,t,i){let r=$g(n);if(r.length===0)return Pe({});let s={};return Rt(r).pipe(Ft(o=>bR(n[o],e,t,i).pipe(qi(),Yt(a=>{if(a instanceof Wo)throw kd(new Rs,a);s[o]=a}))),ho(1),nt(()=>s),Wi(o=>DS(o)?bn:lo(o)))}function bR(n,e,t,i){let r=Xo(e)??i,s=Zo(n,r),o=s.resolve?s.resolve(e,t):pn(r,()=>s(e,t));return ir(o)}function jg(n){return Tn(e=>{let t=n(e);return t?Rt(t).pipe(nt(()=>e)):Pe(e)})}var cv=(()=>{class n{buildTitle(t){let i,r=t.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(s=>s.outlet===He);return i}getResolvedTitleForRoute(t){return t.data[Uc]}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Te({token:n,factory:()=>ee(PS),providedIn:"root"})}return n})(),PS=(()=>{class n extends cv{title;constructor(t){super(),this.title=t}updateTitle(t){let i=this.buildTitle(t);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||n)(Ge(KE))};static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ko=new Oe("",{providedIn:"root",factory:()=>({})}),Hc=new Oe(""),OS=(()=>{class n{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=ee(_g);loadComponent(t,i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Pe(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=ir(pn(t,()=>i.loadComponent())).pipe(nt(FS),Tn(kS),Yt(o=>{this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=o}),Ba(()=>{this.componentLoaders.delete(i)})),s=new co(r,()=>new Bt).pipe(ao());return this.componentLoaders.set(i,s),s}loadChildren(t,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Pe({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let s=LS(i,this.compiler,t,this.onLoadEndListener).pipe(Ba(()=>{this.childrenLoaders.delete(i)})),o=new co(s,()=>new Bt).pipe(ao());return this.childrenLoaders.set(i,o),o}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function LS(n,e,t,i){return ir(pn(t,()=>n.loadChildren())).pipe(nt(FS),Tn(kS),Ft(r=>r instanceof rd||Array.isArray(r)?Pe(r):Rt(e.compileModuleAsync(r))),nt(r=>{i&&i(n);let s,o,a=!1;return Array.isArray(r)?(o=r,a=!0):(s=r.create(t).injector,o=s.get(Hc,[],{optional:!0,self:!0}).flat()),{routes:o.map(av),injector:s}}))}function wR(n){return n&&typeof n=="object"&&"default"in n}function FS(n){return wR(n)?n.default:n}function kS(n){return Pe(n)}var zd=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=Te({token:n,factory:()=>ee(TR),providedIn:"root"})}return n})(),TR=(()=>{class n{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,i){return t}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),US=new Oe("");var BS=new Oe(""),lv=(()=>{class n{currentNavigation=So(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=null;events=new Bt;transitionAbortWithErrorSubject=new Bt;configLoader=ee(OS);environmentInjector=ee(Zt);destroyRef=ee(Eo);urlSerializer=ee(qo);rootContexts=ee(Yo);location=ee(Cs);inputBindingEnabled=ee(Vd,{optional:!0})!==null;titleStrategy=ee(cv);options=ee(Ko,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=ee(zd);createViewTransition=ee(US,{optional:!0});navigationErrorHandler=ee(BS,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>Pe(void 0);rootComponentType=null;destroyed=!1;constructor(){let t=r=>this.events.next(new Dd(r)),i=r=>this.events.next(new Id(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=t,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(t){let i=++this.navigationId;Qi(()=>{this.transitions?.next(dt(ue({},t),{extractedUrl:this.urlHandlingStrategy.extract(t.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,abortController:new AbortController,id:i}))})}setupNavigations(t){return this.transitions=new tn(null),this.transitions.pipe(Fn(i=>i!==null),Tn(i=>{let r=!1;return Pe(i).pipe(Tn(s=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",_n.SupersededByNewNavigation),bn;this.currentTransition=i,this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:this.lastSuccessfulNavigation?dt(ue({},this.lastSuccessfulNavigation),{previousNavigation:null}):null,abort:()=>s.abortController.abort()});let o=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),a=s.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!o&&a!=="reload")return this.events.next(new Fi(s.id,this.urlSerializer.serialize(s.rawUrl),"",Ho.IgnoredSameUrlNavigation)),s.resolve(!1),bn;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return Pe(s).pipe(Tn(c=>(this.events.next(new Lr(c.id,this.urlSerializer.serialize(c.extractedUrl),c.source,c.restoredState)),c.id!==this.navigationId?bn:Promise.resolve(c))),xR(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy),Yt(c=>{i.targetSnapshot=c.targetSnapshot,i.urlAfterRedirects=c.urlAfterRedirects,this.currentNavigation.update(u=>(u.finalUrl=c.urlAfterRedirects,u));let l=new Rc(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(l)}));if(o&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:c,extractedUrl:l,source:u,restoredState:d,extras:f}=s,p=new Lr(c,this.urlSerializer.serialize(l),u,d);this.events.next(p);let g=ES(this.rootComponentType).snapshot;return this.currentTransition=i=dt(ue({},s),{targetSnapshot:g,urlAfterRedirects:l,extras:dt(ue({},f),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(y=>(y.finalUrl=l,y)),Pe(i)}else return this.events.next(new Fi(s.id,this.urlSerializer.serialize(s.extractedUrl),"",Ho.IgnoredByUrlHandlingStrategy)),s.resolve(!1),bn}),Yt(s=>{let o=new bd(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(o)}),nt(s=>(this.currentTransition=i=dt(ue({},s),{guards:BA(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),i)),ZA(this.environmentInjector,s=>this.events.next(s)),Yt(s=>{if(i.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw kd(this.urlSerializer,s.guardsResult);let o=new wd(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);this.events.next(o)}),Fn(s=>s.guardsResult?!0:(this.cancelNavigationTransition(s,"",_n.GuardRejected),!1)),jg(s=>{if(s.guards.canActivateChecks.length!==0)return Pe(s).pipe(Yt(o=>{let a=new Td(o.id,this.urlSerializer.serialize(o.extractedUrl),this.urlSerializer.serialize(o.urlAfterRedirects),o.targetSnapshot);this.events.next(a)}),Tn(o=>{let a=!1;return Pe(o).pipe(ER(this.paramsInheritanceStrategy,this.environmentInjector),Yt({next:()=>a=!0,complete:()=>{a||this.cancelNavigationTransition(o,"",_n.NoDataFromResolver)}}))}),Yt(o=>{let a=new Cd(o.id,this.urlSerializer.serialize(o.extractedUrl),this.urlSerializer.serialize(o.urlAfterRedirects),o.targetSnapshot);this.events.next(a)}))}),jg(s=>{let o=a=>{let c=[];if(a.routeConfig?.loadComponent){let l=Xo(a)??this.environmentInjector;c.push(this.configLoader.loadComponent(l,a.routeConfig).pipe(Yt(u=>{a.component=u}),nt(()=>{})))}for(let l of a.children)c.push(...o(l));return c};return Zl(o(s.targetSnapshot.root)).pipe(vr(null),$i(1))}),jg(()=>this.afterPreactivation()),Tn(()=>{let{currentSnapshot:s,targetSnapshot:o}=i,a=this.createViewTransition?.(this.environmentInjector,s.root,o.root);return a?Rt(a).pipe(nt(()=>i)):Pe(i)}),nt(s=>{let o=OA(t.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);return this.currentTransition=i=dt(ue({},s),{targetRouterState:o}),this.currentNavigation.update(a=>(a.targetRouterState=o,a)),i}),Yt(()=>{this.events.next(new Nc)}),UA(this.rootContexts,t.routeReuseStrategy,s=>this.events.next(s),this.inputBindingEnabled),$i(1),Jl(new it(s=>{let o=i.abortController.signal,a=()=>s.next();return o.addEventListener("abort",a),()=>o.removeEventListener("abort",a)}).pipe(Fn(()=>!r&&!i.targetRouterState),Yt(()=>{this.cancelNavigationTransition(i,i.abortController.signal.reason+"",_n.Aborted)}))),Yt({next:s=>{r=!0,this.lastSuccessfulNavigation=Qi(this.currentNavigation),this.events.next(new Qn(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0)},complete:()=>{r=!0}}),Jl(this.transitionAbortWithErrorSubject.pipe(Yt(s=>{throw s}))),Ba(()=>{r||this.cancelNavigationTransition(i,"",_n.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Wi(s=>{if(this.destroyed)return i.resolve(!1),bn;if(r=!0,CS(s))this.events.next(new Oi(i.id,this.urlSerializer.serialize(i.extractedUrl),s.message,s.cancellationCode)),kA(s)?this.events.next(new jo(s.url,s.navigationBehaviorOptions)):i.resolve(!1);else{let o=new zo(i.id,this.urlSerializer.serialize(i.extractedUrl),s,i.targetSnapshot??void 0);try{let a=pn(this.environmentInjector,()=>this.navigationErrorHandler?.(o));if(a instanceof Wo){let{message:c,cancellationCode:l}=kd(this.urlSerializer,a);this.events.next(new Oi(i.id,this.urlSerializer.serialize(i.extractedUrl),c,l)),this.events.next(new jo(a.redirectTo,a.navigationBehaviorOptions))}else throw this.events.next(o),s}catch(a){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(a)}}return bn}))}))}cancelNavigationTransition(t,i,r){let s=new Oi(t.id,this.urlSerializer.serialize(t.extractedUrl),i,r);this.events.next(s),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let t=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=Qi(this.currentNavigation),r=i?.targetBrowserUrl??i?.extractedUrl;return t.toString()!==r?.toString()&&!i?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function CR(n){return n!==Bo}var VS=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=Te({token:n,factory:()=>ee(DR),providedIn:"root"})}return n})(),Bd=class{shouldDetach(e){return!1}store(e,t){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,t){return e.routeConfig===t.routeConfig}},DR=(()=>{class n extends Bd{static \u0275fac=(()=>{let t;return function(r){return(t||(t=$u(n)))(r||n)}})();static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),HS=(()=>{class n{urlSerializer=ee(qo);options=ee(Ko,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=ee(Cs);urlHandlingStrategy=ee(zd);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Li;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:t,initialUrl:i,targetBrowserUrl:r}){let s=t!==void 0?this.urlHandlingStrategy.merge(t,i):i,o=r??s;return o instanceof Li?this.urlSerializer.serialize(o):o}commitTransition({targetRouterState:t,finalUrl:i,initialUrl:r}){i&&t?(this.currentUrlTree=i,this.rawUrlTree=this.urlHandlingStrategy.merge(i,r),this.routerState=t):this.rawUrlTree=r}routerState=ES(null);getRouterState(){return this.routerState}stateMemento=this.createStateMemento();updateStateMemento(){this.stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}resetInternalState({finalUrl:t}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t??this.rawUrlTree)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Te({token:n,factory:()=>ee(IR),providedIn:"root"})}return n})(),IR=(()=>{class n extends HS{currentPageId=0;lastSuccessfulId=-1;restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(i=>{i.type==="popstate"&&setTimeout(()=>{t(i.url,i.state,"popstate")})})}handleRouterEvent(t,i){t instanceof Lr?this.updateStateMemento():t instanceof Fi?this.commitTransition(i):t instanceof Rc?this.urlUpdateStrategy==="eager"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(i),i)):t instanceof Nc?(this.commitTransition(i),this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(i),i)):t instanceof Oi&&t.code!==_n.SupersededByNewNavigation&&t.code!==_n.Redirect?this.restoreHistory(i):t instanceof zo?this.restoreHistory(i,!0):t instanceof Qn&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,{extras:i,id:r}){let{replaceUrl:s,state:o}=i;if(this.location.isCurrentPathEqualTo(t)||s){let a=this.browserPageId,c=ue(ue({},o),this.generateNgRouterState(r,a));this.location.replaceState(t,"",c)}else{let a=ue(ue({},o),this.generateNgRouterState(r,this.browserPageId+1));this.location.go(t,"",a)}}restoreHistory(t,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,s=this.currentPageId-r;s!==0?this.location.historyGo(s):this.getCurrentUrlTree()===t.finalUrl&&s===0&&(this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,i){return this.canceledNavigationResolution==="computed"?{navigationId:t,\u0275routerPageId:i}:{navigationId:t}}static \u0275fac=(()=>{let t;return function(r){return(t||(t=$u(n)))(r||n)}})();static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function uv(n,e){n.events.pipe(Fn(t=>t instanceof Qn||t instanceof Oi||t instanceof zo||t instanceof Fi),nt(t=>t instanceof Qn||t instanceof Fi?0:(t instanceof Oi?t.code===_n.Redirect||t.code===_n.SupersededByNewNavigation:!1)?2:1),Fn(t=>t!==2),$i(1)).subscribe(()=>{e()})}var AR={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},RR={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},Jo=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=ee(dg);stateManager=ee(HS);options=ee(Ko,{optional:!0})||{};pendingTasks=ee(Yi);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=ee(lv);urlSerializer=ee(qo);location=ee(Cs);urlHandlingStrategy=ee(zd);injector=ee(Zt);_events=new Bt;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=ee(VS);onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=ee(Hc,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!ee(Vd,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:t=>{this.console.warn(t)}}),this.subscribeToNavigationEvents()}eventsSubscription=new Lt;subscribeToNavigationEvents(){let t=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,s=Qi(this.navigationTransitions.currentNavigation);if(r!==null&&s!==null){if(this.stateManager.handleRouterEvent(i,s),i instanceof Oi&&i.code!==_n.Redirect&&i.code!==_n.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof Qn)this.navigated=!0;else if(i instanceof jo){let o=i.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),c=ue({browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||CR(r.source)},o);this.scheduleNavigation(a,Bo,null,c,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}AA(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Bo,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,i,r)=>{this.navigateToSyncWithBrowser(t,r,i)})}navigateToSyncWithBrowser(t,i,r){let s={replaceUrl:!0},o=r?.navigationId?r:null;if(r){let c=ue({},r);delete c.navigationId,delete c.\u0275routerPageId,Object.keys(c).length!==0&&(s.state=c)}let a=this.parseUrl(t);this.scheduleNavigation(a,i,o,s).catch(c=>{this.disposed||this.injector.get(Jn)(c)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return Qi(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(av),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,i={}){let{relativeTo:r,queryParams:s,fragment:o,queryParamsHandling:a,preserveFragment:c}=i,l=c?this.currentUrlTree.fragment:o,u=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":u=ue(ue({},this.currentUrlTree.queryParams),s);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=s||null}u!==null&&(u=this.removeEmptyProps(u));let d;try{let f=r?r.snapshot:this.routerState.snapshot.root;d=vS(f)}catch{(typeof t[0]!="string"||t[0][0]!=="/")&&(t=[]),d=this.currentUrlTree.root}return yS(d,t,u,l??null)}navigateByUrl(t,i={skipLocationChange:!1}){let r=Or(t)?t:this.parseUrl(t),s=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(s,Bo,null,i)}navigate(t,i={skipLocationChange:!1}){return NR(t),this.navigateByUrl(this.createUrlTree(t,i),i)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch{return this.console.warn(hs(4018,!1)),this.urlSerializer.parse("/")}}isActive(t,i){let r;if(i===!0?r=ue({},AR):i===!1?r=ue({},RR):r=i,Or(t))return JE(this.currentUrlTree,t,r);let s=this.parseUrl(t);return JE(this.currentUrlTree,s,r)}removeEmptyProps(t){return Object.entries(t).reduce((i,[r,s])=>(s!=null&&(i[r]=s),i),{})}scheduleNavigation(t,i,r,s,o){if(this.disposed)return Promise.resolve(!1);let a,c,l;o?(a=o.resolve,c=o.reject,l=o.promise):l=new Promise((d,f)=>{a=d,c=f});let u=this.pendingTasks.add();return uv(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:s,resolve:a,reject:c,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(d=>Promise.reject(d))}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function NR(n){for(let e=0;e<n.length;e++)if(n[e]==null)throw new Me(4008,!1)}var Qo=(()=>{class n{router;route;tabIndexAttribute;renderer;el;locationStrategy;reactiveHref=So(null);get href(){return Qi(this.reactiveHref)}set href(t){this.reactiveHref.set(t)}target;queryParams;fragment;queryParamsHandling;state;info;relativeTo;isAnchorElement;subscription;onChanges=new Bt;applicationErrorHandler=ee(Jn);options=ee(Ko,{optional:!0});constructor(t,i,r,s,o,a){this.router=t,this.route=i,this.tabIndexAttribute=r,this.renderer=s,this.el=o,this.locationStrategy=a,this.reactiveHref.set(ee(new ld("href"),{optional:!0}));let c=o.nativeElement.tagName?.toLowerCase();this.isAnchorElement=c==="a"||c==="area"||!!(typeof customElements=="object"&&customElements.get(c)?.observedAttributes?.includes?.("href")),this.isAnchorElement?this.setTabIndexIfNotOnNativeEl("0"):this.subscribeToNavigationEventsIfNecessary()}subscribeToNavigationEventsIfNecessary(){if(this.subscription!==void 0||!this.isAnchorElement)return;let t=this.preserveFragment,i=r=>r==="merge"||r==="preserve";t||=i(this.queryParamsHandling),t||=!this.queryParamsHandling&&!i(this.options?.defaultQueryParamsHandling),t&&(this.subscription=this.router.events.subscribe(r=>{r instanceof Qn&&this.updateHref()}))}preserveFragment=!1;skipLocationChange=!1;replaceUrl=!1;setTabIndexIfNotOnNativeEl(t){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",t)}ngOnChanges(t){this.isAnchorElement&&(this.updateHref(),this.subscribeToNavigationEventsIfNecessary()),this.onChanges.next(this)}routerLinkInput=null;set routerLink(t){t==null?(this.routerLinkInput=null,this.setTabIndexIfNotOnNativeEl(null)):(Or(t)?this.routerLinkInput=t:this.routerLinkInput=Array.isArray(t)?t:[t],this.setTabIndexIfNotOnNativeEl("0"))}onClick(t,i,r,s,o){let a=this.urlTree;if(a===null||this.isAnchorElement&&(t!==0||i||r||s||o||typeof this.target=="string"&&this.target!="_self"))return!0;let c={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(a,c)?.catch(l=>{this.applicationErrorHandler(l)}),!this.isAnchorElement}ngOnDestroy(){this.subscription?.unsubscribe()}updateHref(){let t=this.urlTree;this.reactiveHref.set(t!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(t))??"":null)}applyAttributeValue(t,i){let r=this.renderer,s=this.el.nativeElement;i!==null?r.setAttribute(s,t,i):r.removeAttribute(s,t)}get urlTree(){return this.routerLinkInput===null?null:Or(this.routerLinkInput)?this.routerLinkInput:this.router.createUrlTree(this.routerLinkInput,{relativeTo:this.relativeTo!==void 0?this.relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,queryParamsHandling:this.queryParamsHandling,preserveFragment:this.preserveFragment})}static \u0275fac=function(i){return new(i||n)(zt(Jo),zt(nr),lc("tabindex"),zt(Po),zt(Ai),zt(Ts))};static \u0275dir=Ar({type:n,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(i,r){i&1&&Rr("click",function(o){return r.onClick(o.button,o.ctrlKey,o.shiftKey,o.altKey,o.metaKey)}),i&2&&od("href",r.reactiveHref(),jm)("target",r.target)},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",_c],skipLocationChange:[2,"skipLocationChange","skipLocationChange",_c],replaceUrl:[2,"replaceUrl","replaceUrl",_c],routerLink:"routerLink"},features:[Ki]})}return n})(),dv=(()=>{class n{router;element;renderer;cdr;link;links;classes=[];routerEventsSubscription;linkInputChangesSubscription;_isActive=!1;get isActive(){return this._isActive}routerLinkActiveOptions={exact:!1};ariaCurrentWhenActive;isActiveChange=new Jt;constructor(t,i,r,s,o){this.router=t,this.element=i,this.renderer=r,this.cdr=s,this.link=o,this.routerEventsSubscription=t.events.subscribe(a=>{a instanceof Qn&&this.update()})}ngAfterContentInit(){Pe(this.links.changes,Pe(null)).pipe(uo()).subscribe(t=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();let t=[...this.links.toArray(),this.link].filter(i=>!!i).map(i=>i.onChanges);this.linkInputChangesSubscription=Rt(t).pipe(uo()).subscribe(i=>{this._isActive!==this.isLinkActive(this.router)(i)&&this.update()})}set routerLinkActive(t){let i=Array.isArray(t)?t:t.split(" ");this.classes=i.filter(r=>!!r)}ngOnChanges(t){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.router.navigated||queueMicrotask(()=>{let t=this.hasActiveLinks();this.classes.forEach(i=>{t?this.renderer.addClass(this.element.nativeElement,i):this.renderer.removeClass(this.element.nativeElement,i)}),t&&this.ariaCurrentWhenActive!==void 0?this.renderer.setAttribute(this.element.nativeElement,"aria-current",this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,"aria-current"),this._isActive!==t&&(this._isActive=t,this.cdr.markForCheck(),this.isActiveChange.emit(t))})}isLinkActive(t){let i=PR(this.routerLinkActiveOptions)?this.routerLinkActiveOptions:this.routerLinkActiveOptions.exact||!1;return r=>{let s=r.urlTree;return s?t.isActive(s,i):!1}}hasActiveLinks(){let t=this.isLinkActive(this.router);return this.link&&t(this.link)||this.links.some(t)}static \u0275fac=function(i){return new(i||n)(zt(Jo),zt(Ai),zt(Po),zt(Oo),zt(Qo,8))};static \u0275dir=Ar({type:n,selectors:[["","routerLinkActive",""]],contentQueries:function(i,r,s){if(i&1&&gg(s,Qo,5),i&2){let o;gc(o=vc())&&(r.links=o)}},inputs:{routerLinkActiveOptions:"routerLinkActiveOptions",ariaCurrentWhenActive:"ariaCurrentWhenActive",routerLinkActive:"routerLinkActive"},outputs:{isActiveChange:"isActiveChange"},exportAs:["routerLinkActive"],features:[Ki]})}return n})();function PR(n){return!!n.paths}var zS=new Oe(""),OR=(()=>{class n{urlSerializer;transitions;viewportScroller;zone;options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource=Bo;restoredId=0;store={};constructor(t,i,r,s,o={}){this.urlSerializer=t,this.transitions=i,this.viewportScroller=r,this.zone=s,this.options=o,o.scrollPositionRestoration||="disabled",o.anchorScrolling||="disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(t=>{t instanceof Lr?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=t.navigationTrigger,this.restoredId=t.restoredState?t.restoredState.navigationId:0):t instanceof Qn?(this.lastId=t.id,this.scheduleScrollEvent(t,this.urlSerializer.parse(t.urlAfterRedirects).fragment)):t instanceof Fi&&t.code===Ho.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(t,this.urlSerializer.parse(t.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(t=>{if(!(t instanceof Go))return;let i={behavior:"instant"};t.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0],i):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(t.position,i):t.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(t.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0])})}scheduleScrollEvent(t,i){this.zone.runOutsideAngular(()=>qn(this,null,function*(){yield new Promise(r=>{setTimeout(r),typeof requestAnimationFrame<"u"&&requestAnimationFrame(r)}),this.zone.run(()=>{this.transitions.events.next(new Go(t,this.lastSource==="popstate"?this.store[this.restoredId]:null,i))})}))}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(i){ag()};static \u0275prov=Te({token:n,factory:n.\u0275fac})}return n})();function fv(n,...e){return cu([{provide:Hc,multi:!0,useValue:n},[],{provide:nr,useFactory:LR,deps:[Jo]},{provide:sd,multi:!0,useFactory:kR},e.map(t=>t.\u0275providers)])}function LR(n){return n.routerState.root}function FR(n,e){return{\u0275kind:n,\u0275providers:e}}function hv(n={}){return FR(4,[{provide:zS,useFactory:()=>{let t=ee(GE),i=ee(Ht),r=ee(lv),s=ee(qo);return new OR(s,r,t,i,n)}}])}function kR(){let n=ee(oi);return e=>{let t=n.get(ws);if(e!==t.components[0])return;let i=n.get(Jo),r=n.get(UR);n.get(BR)===1&&i.initialNavigation(),n.get(VR,null,{optional:!0})?.setUpPreloading(),n.get(zS,null,{optional:!0})?.init(),i.resetRootComponentType(t.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var UR=new Oe("",{factory:()=>new Bt}),BR=new Oe("",{providedIn:"root",factory:()=>1});var VR=new Oe("");var Gd=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Nt({type:n,selectors:[["app-header-bar"]],decls:8,vars:0,consts:[[1,"bar"],[1,"brand"],["routerLink","/viewer","routerLinkActive","active"],["routerLink","/about","routerLinkActive","active"]],template:function(t,i){t&1&&(Pt(0,"header",0)(1,"div",1),rn(2,"Greg's Gaussian Splats Demo"),Ot(),Pt(3,"nav")(4,"a",2),rn(5,"Viewer"),Ot(),Pt(6,"a",3),rn(7,"About"),Ot()()())},dependencies:[Qo,dv],styles:[".bar[_ngcontent-%COMP%]{position:fixed;top:0;left:0;right:0;height:48px;z-index:1000;display:flex;align-items:center;justify-content:space-between;padding:0 1rem;background:#141823;border-bottom:1px solid rgba(255,255,255,.08)}.brand[_ngcontent-%COMP%]{background:#00abae;border-radius:100px;padding:.25rem .75rem;font-weight:600;letter-spacing:.5px;text-transform:uppercase;color:#fff}nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#cbd1ff;margin-left:1rem;padding:.25rem .5rem;border-radius:.5rem}nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:#cbd1ff1f}"]})};var jd=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Nt({type:n,selectors:[["app-root"]],decls:2,vars:0,template:function(t,i){t&1&&fi(0,"app-header-bar")(1,"router-outlet")},dependencies:[Bc,Gd],styles:["[_nghost-%COMP%]{display:block;margin:0;padding:0;background:transparent;width:100%;height:auto;min-height:100%;overflow:visible}"]})};var Zr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Kr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},dM=0,Xv=1,fM=2;var Yv=1,hM=2,Bi=3,dr=0,En=1,Vi=2,hr=0,Us=1,Zv=2,Kv=3,Jv=4,pM=5,jr=100,mM=101,gM=102,vM=103,yM=104,_M=200,xM=201,EM=202,SM=203,hf=204,pf=205,MM=206,bM=207,wM=208,TM=209,CM=210,DM=211,IM=212,AM=213,RM=214,Of=0,Lf=1,Ff=2,Bs=3,kf=4,Uf=5,Bf=6,Vf=7,Qv=0,NM=1,PM=2,pr=0,OM=1,LM=2,FM=3,kM=4,UM=5,BM=6,VM=7;var Fv=300,Ws=301,$s=302,Hf=303,zf=304,yl=306,mf=1e3,Gr=1001,gf=1002,ni=1003,HM=1004;var _l=1005;var yi=1006,Gf=1007;var Jr=1008;var Si=1009,ey=1010,ty=1011,Ea=1012,jf=1013,Qr=1014,Hi=1015,Sa=1016,Wf=1017,$f=1018,Ma=1020,ny=35902,iy=35899,ry=1021,sy=1022,ri=1023,pa=1026,ba=1027,oy=1028,qf=1029,ay=1030,Xf=1031;var Yf=1033,xl=33776,El=33777,Sl=33778,Ml=33779,Zf=35840,Kf=35841,Jf=35842,Qf=35843,eh=36196,th=37492,nh=37496,ih=37808,rh=37809,sh=37810,oh=37811,ah=37812,ch=37813,lh=37814,uh=37815,dh=37816,fh=37817,hh=37818,ph=37819,mh=37820,gh=37821,vh=36492,yh=36494,_h=36495,xh=36283,Eh=36284,Sh=36285,Mh=36286;var Xc=2300,vf=2301,ff=2302,kv=2400,Uv=2401,Bv=2402;var zM=3200,GM=3201;var cy=0,jM=1,mr="",un="srgb",Vs="srgb-linear",Yc="linear",ft="srgb";var Fs=7680;var Vv=519,WM=512,$M=513,qM=514,ly=515,XM=516,YM=517,ZM=518,KM=519,Hv=35044;var uy="300 es",vi=2e3,Zc=2001;var ki=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],GS=1234567,$c=Math.PI/180,ma=180/Math.PI;function wa(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]).toLowerCase()}function Ze(n,e,t){return Math.max(e,Math.min(t,n))}function dy(n,e){return(n%e+e)%e}function HR(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function zR(n,e,t){return n!==e?(t-n)/(e-n):0}function qc(n,e,t){return(1-t)*n+t*e}function GR(n,e,t,i){return qc(n,e,1-Math.exp(-t*i))}function jR(n,e=1){return e-Math.abs(dy(n,e*2)-e)}function WR(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function $R(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function qR(n,e){return n+Math.floor(Math.random()*(e-n+1))}function XR(n,e){return n+Math.random()*(e-n)}function YR(n){return n*(.5-Math.random())}function ZR(n){n!==void 0&&(GS=n);let e=GS+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function KR(n){return n*$c}function JR(n){return n*ma}function QR(n){return(n&n-1)===0&&n!==0}function e1(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function t1(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function n1(n,e,t,i,r){let s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),f=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,c*d,c*f,a*l);break;case"YZY":n.set(c*f,a*u,c*d,a*l);break;case"ZXZ":n.set(c*d,c*f,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*p,a*l);break;case"YXY":n.set(c*p,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*p,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function fa(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function xn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var fy={DEG2RAD:$c,RAD2DEG:ma,generateUUID:wa,clamp:Ze,euclideanModulo:dy,mapLinear:HR,inverseLerp:zR,lerp:qc,damp:GR,pingpong:jR,smoothstep:WR,smootherstep:$R,randInt:qR,randFloat:XR,randFloatSpread:YR,seededRandom:ZR,degToRad:KR,radToDeg:JR,isPowerOfTwo:QR,ceilPowerOfTwo:e1,floorPowerOfTwo:t1,setQuaternionFromProperEuler:n1,normalize:xn,denormalize:fa},Ue=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ii=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3],f=s[o+0],p=s[o+1],g=s[o+2],y=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=y;return}if(d!==y||c!==f||l!==p||u!==g){let m=1-a,h=c*f+l*p+u*g+d*y,b=h>=0?1:-1,S=1-h*h;if(S>Number.EPSILON){let T=Math.sqrt(S),D=Math.atan2(T,h*b);m=Math.sin(m*D)/T,a=Math.sin(a*D)/T}let x=a*b;if(c=c*m+f*x,l=l*m+p*x,u=u*m+g*x,d=d*m+y*x,m===1-a){let T=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=T,l*=T,u*=T,d*=T}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*d+c*p-l*f,e[t+1]=c*g+u*f+l*d-a*p,e[t+2]=l*g+u*p+a*f-c*d,e[t+3]=u*g-a*d-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(s/2),f=c(i/2),p=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=f*u*d+l*p*g,this._y=l*p*d-f*u*g,this._z=l*u*g+f*p*d,this._w=l*u*d-f*p*g;break;case"YXZ":this._x=f*u*d+l*p*g,this._y=l*p*d-f*u*g,this._z=l*u*g-f*p*d,this._w=l*u*d+f*p*g;break;case"ZXY":this._x=f*u*d-l*p*g,this._y=l*p*d+f*u*g,this._z=l*u*g+f*p*d,this._w=l*u*d-f*p*g;break;case"ZYX":this._x=f*u*d-l*p*g,this._y=l*p*d+f*u*g,this._z=l*u*g-f*p*d,this._w=l*u*d+f*p*g;break;case"YZX":this._x=f*u*d+l*p*g,this._y=l*p*d+f*u*g,this._z=l*u*g-f*p*d,this._w=l*u*d-f*p*g;break;case"XZY":this._x=f*u*d-l*p*g,this._y=l*p*d-f*u*g,this._z=l*u*g+f*p*d,this._w=l*u*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(o-r)*p}else if(i>a&&i>d){let p=2*Math.sqrt(1+i-a-d);this._w=(u-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+l)/p}else if(a>d){let p=2*Math.sqrt(1+a-i-d);this._w=(s-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+u)/p}else{let p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jS.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jS.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return pv.copy(this).projectOnVector(e),this.sub(pv)}reflect(e){return this.sub(pv.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},pv=new L,jS=new ii,je=class n{constructor(e,t,i,r,s,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],f=i[2],p=i[5],g=i[8],y=r[0],m=r[3],h=r[6],b=r[1],S=r[4],x=r[7],T=r[2],D=r[5],C=r[8];return s[0]=o*y+a*b+c*T,s[3]=o*m+a*S+c*D,s[6]=o*h+a*x+c*C,s[1]=l*y+u*b+d*T,s[4]=l*m+u*S+d*D,s[7]=l*h+u*x+d*C,s[2]=f*y+p*b+g*T,s[5]=f*m+p*S+g*D,s[8]=f*h+p*x+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,f=a*c-u*s,p=l*s-o*c,g=t*d+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=d*y,e[1]=(r*l-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=f*y,e[4]=(u*t-r*c)*y,e[5]=(r*s-a*t)*y,e[6]=p*y,e[7]=(i*c-l*t)*y,e[8]=(o*t-i*s)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(mv.makeScale(e,t)),this}rotate(e){return this.premultiply(mv.makeRotation(-e)),this}translate(e,t){return this.premultiply(mv.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},mv=new je;function hy(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Kc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function JM(){let n=Kc("canvas");return n.style.display="block",n}var WS={};function ga(n){n in WS||(WS[n]=!0,console.warn(n))}function QM(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var $S=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qS=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function i1(){let n={enabled:!0,workingColorSpace:Vs,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ft&&(r.r=ur(r.r),r.g=ur(r.g),r.b=ur(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ft&&(r.r=ha(r.r),r.g=ha(r.g),r.b=ha(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===mr?Yc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ga("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ga("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Vs]:{primaries:e,whitePoint:i,transfer:Yc,toXYZ:$S,fromXYZ:qS,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:un},outputColorSpaceConfig:{drawingBufferColorSpace:un}},[un]:{primaries:e,whitePoint:i,transfer:ft,toXYZ:$S,fromXYZ:qS,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:un}}}),n}var rt=i1();function ur(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ha(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ea,yf=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ea===void 0&&(ea=Kc("canvas")),ea.width=e.width,ea.height=e.height;let r=ea.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ea}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Kc("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ur(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ur(t[i]/255)*255):t[i]=ur(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},r1=0,va=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:r1++}),this.uuid=wa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(gv(r[o].image)):s.push(gv(r[o]))}else s=gv(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function gv(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?yf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var s1=0,vv=new L,es=(()=>{class n extends ki{constructor(t=n.DEFAULT_IMAGE,i=n.DEFAULT_MAPPING,r=Gr,s=Gr,o=yi,a=Jr,c=ri,l=Si,u=n.DEFAULT_ANISOTROPY,d=mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:s1++}),this.uuid=wa(),this.name="",this.source=new va(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(vv).x}get height(){return this.source.getSize(vv).y}get depth(){return this.source.getSize(vv).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let r=t[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let s=this[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}s&&r&&s.isVector2&&r.isVector2||s&&r&&s.isVector3&&r.isVector3||s&&r&&s.isMatrix3&&r.isMatrix3?s.copy(r):this[i]=r}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Fv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case mf:t.x=t.x-Math.floor(t.x);break;case Gr:t.x=t.x<0?0:1;break;case gf:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case mf:t.y=t.y-Math.floor(t.y);break;case Gr:t.y=t.y<0?0:1;break;case gf:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return n.DEFAULT_IMAGE=null,n.DEFAULT_MAPPING=Fv,n.DEFAULT_ANISOTROPY=1,n})(),Tt=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],p=c[5],g=c[9],y=c[2],m=c[6],h=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(l+1)/2,x=(p+1)/2,T=(h+1)/2,D=(u+f)/4,C=(d+y)/4,O=(g+m)/4;return S>x&&S>T?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=D/i,s=C/i):x>T?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=D/r,s=O/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=C/s,r=O/s),this.set(i,r,s,t),this}let b=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(d-y)/b,this.z=(f-u)/b,this.w=Math.acos((l+p+h-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},_f=class extends ki{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t);let r={width:e,height:t,depth:i.depth},s=new es(r);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:yi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new va(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ui=class extends _f{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Jc=class extends es{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ni,this.minFilter=ni,this.wrapR=Gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var xf=class extends es{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ni,this.minFilter=ni,this.wrapR=Gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Wr=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(pi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(pi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,pi):pi.fromBufferAttribute(s,o),pi.applyMatrix4(e.matrixWorld),this.expandByPoint(pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wd.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wd.copy(i.boundingBox)),Wd.applyMatrix4(e.matrixWorld),this.union(Wd)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pi),pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zc),$d.subVectors(this.max,zc),ta.subVectors(e.a,zc),na.subVectors(e.b,zc),ia.subVectors(e.c,zc),Fr.subVectors(na,ta),kr.subVectors(ia,na),Ns.subVectors(ta,ia);let t=[0,-Fr.z,Fr.y,0,-kr.z,kr.y,0,-Ns.z,Ns.y,Fr.z,0,-Fr.x,kr.z,0,-kr.x,Ns.z,0,-Ns.x,-Fr.y,Fr.x,0,-kr.y,kr.x,0,-Ns.y,Ns.x,0];return!yv(t,ta,na,ia,$d)||(t=[1,0,0,0,1,0,0,0,1],!yv(t,ta,na,ia,$d))?!1:(qd.crossVectors(Fr,kr),t=[qd.x,qd.y,qd.z],yv(t,ta,na,ia,$d))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},rr=[new L,new L,new L,new L,new L,new L,new L,new L],pi=new L,Wd=new Wr,ta=new L,na=new L,ia=new L,Fr=new L,kr=new L,Ns=new L,zc=new L,$d=new L,qd=new L,Ps=new L;function yv(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Ps.fromArray(n,s);let a=r.x*Math.abs(Ps.x)+r.y*Math.abs(Ps.y)+r.z*Math.abs(Ps.z),c=e.dot(Ps),l=t.dot(Ps),u=i.dot(Ps);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var o1=new Wr,Gc=new L,_v=new L,Hs=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):o1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gc.subVectors(e,this.center);let t=Gc.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Gc,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_v.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gc.copy(e.center).add(_v)),this.expandByPoint(Gc.copy(e.center).sub(_v))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},sr=new L,xv=new L,Xd=new L,Ur=new L,Ev=new L,Yd=new L,Sv=new L,zs=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=sr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(sr.copy(this.origin).addScaledVector(this.direction,t),sr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){xv.copy(e).add(t).multiplyScalar(.5),Xd.copy(t).sub(e).normalize(),Ur.copy(this.origin).sub(xv);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Xd),a=Ur.dot(this.direction),c=-Ur.dot(Xd),l=Ur.lengthSq(),u=Math.abs(1-o*o),d,f,p,g;if(u>0)if(d=o*c-a,f=o*a-c,g=s*u,d>=0)if(f>=-g)if(f<=g){let y=1/u;d*=y,f*=y,p=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-c),s),p=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-s,-c),s),p=f*(f+2*c)+l):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-c),s),p=-d*d+f*(f+2*c)+l);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(xv).addScaledVector(Xd,f),p}intersectSphere(e,t){sr.subVectors(e.center,this.origin);let i=sr.dot(this.direction),r=sr.dot(sr)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,sr)!==null}intersectTriangle(e,t,i,r,s){Ev.subVectors(t,e),Yd.subVectors(i,e),Sv.crossVectors(Ev,Yd);let o=this.direction.dot(Sv),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ur.subVectors(this.origin,e);let c=a*this.direction.dot(Yd.crossVectors(Ur,Yd));if(c<0)return null;let l=a*this.direction.dot(Ev.cross(Ur));if(l<0||c+l>o)return null;let u=-a*Ur.dot(Sv);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},It=class n{constructor(e,t,i,r,s,o,a,c,l,u,d,f,p,g,y,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,d,f,p,g,y,m)}set(e,t,i,r,s,o,a,c,l,u,d,f,p,g,y,m){let h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=c,h[2]=l,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=g,h[11]=y,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/ra.setFromMatrixColumn(e,0).length(),s=1/ra.setFromMatrixColumn(e,1).length(),o=1/ra.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let f=o*u,p=o*d,g=a*u,y=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=p+g*l,t[5]=f-y*l,t[9]=-a*c,t[2]=y-f*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*u,p=c*d,g=l*u,y=l*d;t[0]=f+y*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=y+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*u,p=c*d,g=l*u,y=l*d;t[0]=f-y*a,t[4]=-o*d,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=y-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*u,p=o*d,g=a*u,y=a*d;t[0]=c*u,t[4]=g*l-p,t[8]=f*l+y,t[1]=c*d,t[5]=y*l+f,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,p=o*l,g=a*c,y=a*l;t[0]=c*u,t[4]=y-f*d,t[8]=g*d+p,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=p*d+g,t[10]=f-y*d}else if(e.order==="XZY"){let f=o*c,p=o*l,g=a*c,y=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=f*d+y,t[5]=o*u,t[9]=p*d-g,t[2]=g*d-p,t[6]=a*u,t[10]=y*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(a1,e,c1)}lookAt(e,t,i){let r=this.elements;return Hn.subVectors(e,t),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),Br.crossVectors(i,Hn),Br.lengthSq()===0&&(Math.abs(i.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),Br.crossVectors(i,Hn)),Br.normalize(),Zd.crossVectors(Hn,Br),r[0]=Br.x,r[4]=Zd.x,r[8]=Hn.x,r[1]=Br.y,r[5]=Zd.y,r[9]=Hn.y,r[2]=Br.z,r[6]=Zd.z,r[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],f=i[9],p=i[13],g=i[2],y=i[6],m=i[10],h=i[14],b=i[3],S=i[7],x=i[11],T=i[15],D=r[0],C=r[4],O=r[8],M=r[12],E=r[1],A=r[5],U=r[9],z=r[13],X=r[2],j=r[6],$=r[10],Z=r[14],V=r[3],oe=r[7],de=r[11],we=r[15];return s[0]=o*D+a*E+c*X+l*V,s[4]=o*C+a*A+c*j+l*oe,s[8]=o*O+a*U+c*$+l*de,s[12]=o*M+a*z+c*Z+l*we,s[1]=u*D+d*E+f*X+p*V,s[5]=u*C+d*A+f*j+p*oe,s[9]=u*O+d*U+f*$+p*de,s[13]=u*M+d*z+f*Z+p*we,s[2]=g*D+y*E+m*X+h*V,s[6]=g*C+y*A+m*j+h*oe,s[10]=g*O+y*U+m*$+h*de,s[14]=g*M+y*z+m*Z+h*we,s[3]=b*D+S*E+x*X+T*V,s[7]=b*C+S*A+x*j+T*oe,s[11]=b*O+S*U+x*$+T*de,s[15]=b*M+S*z+x*Z+T*we,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],p=e[14],g=e[3],y=e[7],m=e[11],h=e[15];return g*(+s*c*d-r*l*d-s*a*f+i*l*f+r*a*p-i*c*p)+y*(+t*c*p-t*l*f+s*o*f-r*o*p+r*l*u-s*c*u)+m*(+t*l*d-t*a*p-s*o*d+i*o*p+s*a*u-i*l*u)+h*(-r*a*u-t*c*d+t*a*f+r*o*d-i*o*f+i*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],p=e[11],g=e[12],y=e[13],m=e[14],h=e[15],b=d*m*l-y*f*l+y*c*p-a*m*p-d*c*h+a*f*h,S=g*f*l-u*m*l-g*c*p+o*m*p+u*c*h-o*f*h,x=u*y*l-g*d*l+g*a*p-o*y*p-u*a*h+o*d*h,T=g*d*c-u*y*c-g*a*f+o*y*f+u*a*m-o*d*m,D=t*b+i*S+r*x+s*T;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/D;return e[0]=b*C,e[1]=(y*f*s-d*m*s-y*r*p+i*m*p+d*r*h-i*f*h)*C,e[2]=(a*m*s-y*c*s+y*r*l-i*m*l-a*r*h+i*c*h)*C,e[3]=(d*c*s-a*f*s-d*r*l+i*f*l+a*r*p-i*c*p)*C,e[4]=S*C,e[5]=(u*m*s-g*f*s+g*r*p-t*m*p-u*r*h+t*f*h)*C,e[6]=(g*c*s-o*m*s-g*r*l+t*m*l+o*r*h-t*c*h)*C,e[7]=(o*f*s-u*c*s+u*r*l-t*f*l-o*r*p+t*c*p)*C,e[8]=x*C,e[9]=(g*d*s-u*y*s-g*i*p+t*y*p+u*i*h-t*d*h)*C,e[10]=(o*y*s-g*a*s+g*i*l-t*y*l-o*i*h+t*a*h)*C,e[11]=(u*a*s-o*d*s-u*i*l+t*d*l+o*i*p-t*a*p)*C,e[12]=T*C,e[13]=(u*y*r-g*d*r+g*i*f-t*y*f-u*i*m+t*d*m)*C,e[14]=(g*a*r-o*y*r-g*i*c+t*y*c+o*i*m-t*a*m)*C,e[15]=(o*d*r-u*a*r+u*i*c-t*d*c-o*i*f+t*a*f)*C,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,d=a+a,f=s*l,p=s*u,g=s*d,y=o*u,m=o*d,h=a*d,b=c*l,S=c*u,x=c*d,T=i.x,D=i.y,C=i.z;return r[0]=(1-(y+h))*T,r[1]=(p+x)*T,r[2]=(g-S)*T,r[3]=0,r[4]=(p-x)*D,r[5]=(1-(f+h))*D,r[6]=(m+b)*D,r[7]=0,r[8]=(g+S)*C,r[9]=(m-b)*C,r[10]=(1-(f+y))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=ra.set(r[0],r[1],r[2]).length(),o=ra.set(r[4],r[5],r[6]).length(),a=ra.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],mi.copy(this);let l=1/s,u=1/o,d=1/a;return mi.elements[0]*=l,mi.elements[1]*=l,mi.elements[2]*=l,mi.elements[4]*=u,mi.elements[5]*=u,mi.elements[6]*=u,mi.elements[8]*=d,mi.elements[9]*=d,mi.elements[10]*=d,t.setFromRotationMatrix(mi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=vi,c=!1){let l=this.elements,u=2*s/(t-e),d=2*s/(i-r),f=(t+e)/(t-e),p=(i+r)/(i-r),g,y;if(c)g=s/(o-s),y=o*s/(o-s);else if(a===vi)g=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===Zc)g=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=vi,c=!1){let l=this.elements,u=2/(t-e),d=2/(i-r),f=-(t+e)/(t-e),p=-(i+r)/(i-r),g,y;if(c)g=1/(o-s),y=o/(o-s);else if(a===vi)g=-2/(o-s),y=-(o+s)/(o-s);else if(a===Zc)g=-1/(o-s),y=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=d,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},ra=new L,mi=new It,a1=new L(0,0,0),c1=new L(1,1,1),Br=new L,Zd=new L,Hn=new L,XS=new It,YS=new ii,$r=(()=>{class n{constructor(t=0,i=0,r=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,s=this._order){return this._x=t,this._y=i,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],c=s[8],l=s[1],u=s[5],d=s[9],f=s[2],p=s[6],g=s[10];switch(i){case"XYZ":this._y=Math.asin(Ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(p,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Ze(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,u),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return XS.makeRotationFromQuaternion(t),this.setFromRotationMatrix(XS,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return YS.setFromEuler(this),this.setFromQuaternion(YS,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return n.DEFAULT_ORDER="XYZ",n})(),Qc=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},l1=0,ZS=new L,sa=new ii,or=new It,Kd=new L,jc=new L,u1=new L,d1=new ii,KS=new L(1,0,0),JS=new L(0,1,0),QS=new L(0,0,1),eM={type:"added"},f1={type:"removed"},oa={type:"childadded",child:null},Mv={type:"childremoved",child:null},_i=(()=>{class n extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:l1++}),this.uuid=wa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new L,i=new $r,r=new ii,s=new L(1,1,1);function o(){r.setFromEuler(i,!1)}function a(){i.setFromQuaternion(r,void 0,!1)}i._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new It},normalMatrix:{value:new je}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return sa.setFromAxisAngle(t,i),this.quaternion.multiply(sa),this}rotateOnWorldAxis(t,i){return sa.setFromAxisAngle(t,i),this.quaternion.premultiply(sa),this}rotateX(t){return this.rotateOnAxis(KS,t)}rotateY(t){return this.rotateOnAxis(JS,t)}rotateZ(t){return this.rotateOnAxis(QS,t)}translateOnAxis(t,i){return ZS.copy(t).applyQuaternion(this.quaternion),this.position.add(ZS.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(KS,t)}translateY(t){return this.translateOnAxis(JS,t)}translateZ(t){return this.translateOnAxis(QS,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(or.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Kd.copy(t):Kd.set(t,i,r);let s=this.parent;this.updateWorldMatrix(!0,!1),jc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?or.lookAt(jc,Kd,this.up):or.lookAt(Kd,jc,this.up),this.quaternion.setFromRotationMatrix(or),s&&(or.extractRotation(s.matrixWorld),sa.setFromRotationMatrix(or),this.quaternion.premultiply(sa.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(eM),oa.child=t,this.dispatchEvent(oa),oa.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(f1),Mv.child=t,this.dispatchEvent(Mv),Mv.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),or.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),or.multiply(t.parent.matrixWorld)),t.applyMatrix4(or),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(eM),oa.child=t,this.dispatchEvent(oa),oa.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,i);if(a!==void 0)return a}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jc,t,u1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jc,d1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(c=>dt(ue({},c),{boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(c=>ue({},c)),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){let f=l[u];o(t.shapes,f)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,u=this.material.length;l<u;l++)c.push(o(t.materials,this.material[l]));s.material=c}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];s.animations.push(o(t.animations,l))}}if(i){let c=a(t.geometries),l=a(t.materials),u=a(t.textures),d=a(t.images),f=a(t.shapes),p=a(t.skeletons),g=a(t.animations),y=a(t.nodes);c.length>0&&(r.geometries=c),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),d.length>0&&(r.images=d),f.length>0&&(r.shapes=f),p.length>0&&(r.skeletons=p),g.length>0&&(r.animations=g),y.length>0&&(r.nodes=y)}return r.object=s,r;function a(c){let l=[];for(let u in c){let d=c[u];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return n.DEFAULT_UP=new L(0,1,0),n.DEFAULT_MATRIX_AUTO_UPDATE=!0,n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,n})(),gi=new L,ar=new L,bv=new L,cr=new L,aa=new L,ca=new L,tM=new L,wv=new L,Tv=new L,Cv=new L,Dv=new Tt,Iv=new Tt,Av=new Tt,zr=class n{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),gi.subVectors(e,t),r.cross(gi);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){gi.subVectors(r,t),ar.subVectors(i,t),bv.subVectors(e,t);let o=gi.dot(gi),a=gi.dot(ar),c=gi.dot(bv),l=ar.dot(ar),u=ar.dot(bv),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;let f=1/d,p=(l*c-a*u)*f,g=(o*u-a*c)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,cr)===null?!1:cr.x>=0&&cr.y>=0&&cr.x+cr.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,cr)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,cr.x),c.addScaledVector(o,cr.y),c.addScaledVector(a,cr.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return Dv.setScalar(0),Iv.setScalar(0),Av.setScalar(0),Dv.fromBufferAttribute(e,t),Iv.fromBufferAttribute(e,i),Av.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Dv,s.x),o.addScaledVector(Iv,s.y),o.addScaledVector(Av,s.z),o}static isFrontFacing(e,t,i,r){return gi.subVectors(i,t),ar.subVectors(e,t),gi.cross(ar).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gi.subVectors(this.c,this.b),ar.subVectors(this.a,this.b),gi.cross(ar).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;aa.subVectors(r,i),ca.subVectors(s,i),wv.subVectors(e,i);let c=aa.dot(wv),l=ca.dot(wv);if(c<=0&&l<=0)return t.copy(i);Tv.subVectors(e,r);let u=aa.dot(Tv),d=ca.dot(Tv);if(u>=0&&d<=u)return t.copy(r);let f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(aa,o);Cv.subVectors(e,s);let p=aa.dot(Cv),g=ca.dot(Cv);if(g>=0&&p<=g)return t.copy(s);let y=p*l-c*g;if(y<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(ca,a);let m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return tM.subVectors(s,r),a=(d-u)/(d-u+(p-g)),t.copy(r).addScaledVector(tM,a);let h=1/(m+y+f);return o=y*h,a=f*h,t.copy(i).addScaledVector(aa,o).addScaledVector(ca,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},eb={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vr={h:0,s:0,l:0},Jd={h:0,s:0,l:0};function Rv(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ye=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,rt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=rt.workingColorSpace){if(e=dy(e,1),t=Ze(t,0,1),i=Ze(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Rv(o,s,e+1/3),this.g=Rv(o,s,e),this.b=Rv(o,s,e-1/3)}return rt.colorSpaceToWorking(this,r),this}setStyle(e,t=un){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=un){let i=eb[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}copyLinearToSRGB(e){return this.r=ha(e.r),this.g=ha(e.g),this.b=ha(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=un){return rt.workingToColorSpace(ln.copy(this),e),Math.round(Ze(ln.r*255,0,255))*65536+Math.round(Ze(ln.g*255,0,255))*256+Math.round(Ze(ln.b*255,0,255))}getHexString(e=un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.workingToColorSpace(ln.copy(this),t);let i=ln.r,r=ln.g,s=ln.b,o=Math.max(i,r,s),a=Math.min(i,r,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=rt.workingColorSpace){return rt.workingToColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=un){rt.workingToColorSpace(ln.copy(this),e);let t=ln.r,i=ln.g,r=ln.b;return e!==un?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Vr),this.setHSL(Vr.h+e,Vr.s+t,Vr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Vr),e.getHSL(Jd);let i=qc(Vr.h,Jd.h,t),r=qc(Vr.s,Jd.s,t),s=qc(Vr.l,Jd.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ln=new Ye;Ye.NAMES=eb;var h1=0,fr=class extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:h1++}),this.uuid=wa(),this.name="",this.type="Material",this.blending=Us,this.side=dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hf,this.blendDst=pf,this.blendEquation=jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fs,this.stencilZFail=Fs,this.stencilZPass=Fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(i.blending=this.blending),this.side!==dr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==hf&&(i.blendSrc=this.blendSrc),this.blendDst!==pf&&(i.blendDst=this.blendDst),this.blendEquation!==jr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Fs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Fs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},el=class extends fr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $r,this.combine=Qv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ut=new L,Qd=new Ue,p1=0,Gn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:p1++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Hv,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Qd.fromBufferAttribute(this,t),Qd.applyMatrix3(e),this.setXY(t,Qd.x,Qd.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=fa(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=xn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fa(t,this.array)),t}setX(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fa(t,this.array)),t}setY(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fa(t,this.array)),t}setW(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=xn(t,this.array),i=xn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=xn(t,this.array),i=xn(i,this.array),r=xn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=xn(t,this.array),i=xn(i,this.array),r=xn(r,this.array),s=xn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hv&&(e.usage=this.usage),e}};var tl=class extends Gn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var nl=class extends Gn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var en=class extends Gn{constructor(e,t,i){super(new Float32Array(e),t,i)}},m1=0,ei=new It,Nv=new _i,la=new L,zn=new Wr,Wc=new Wr,Qt=new L,xi=class n extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:m1++}),this.uuid=wa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hy(e)?nl:tl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,t,i){return ei.makeTranslation(e,t,i),this.applyMatrix4(ei),this}scale(e,t,i){return ei.makeScale(e,t,i),this.applyMatrix4(ei),this}lookAt(e){return Nv.lookAt(e),Nv.updateMatrix(),this.applyMatrix4(Nv.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(la).negate(),this.translate(la.x,la.y,la.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new en(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];zn.setFromBufferAttribute(s),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let i=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Wc.setFromBufferAttribute(a),this.morphTargetsRelative?(Qt.addVectors(zn.min,Wc.min),zn.expandByPoint(Qt),Qt.addVectors(zn.max,Wc.max),zn.expandByPoint(Qt)):(zn.expandByPoint(Wc.min),zn.expandByPoint(Wc.max))}zn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Qt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Qt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Qt.fromBufferAttribute(a,l),c&&(la.fromBufferAttribute(e,l),Qt.add(la)),r=Math.max(r,i.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let O=0;O<i.count;O++)a[O]=new L,c[O]=new L;let l=new L,u=new L,d=new L,f=new Ue,p=new Ue,g=new Ue,y=new L,m=new L;function h(O,M,E){l.fromBufferAttribute(i,O),u.fromBufferAttribute(i,M),d.fromBufferAttribute(i,E),f.fromBufferAttribute(s,O),p.fromBufferAttribute(s,M),g.fromBufferAttribute(s,E),u.sub(l),d.sub(l),p.sub(f),g.sub(f);let A=1/(p.x*g.y-g.x*p.y);isFinite(A)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(A),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(A),a[O].add(y),a[M].add(y),a[E].add(y),c[O].add(m),c[M].add(m),c[E].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let O=0,M=b.length;O<M;++O){let E=b[O],A=E.start,U=E.count;for(let z=A,X=A+U;z<X;z+=3)h(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let S=new L,x=new L,T=new L,D=new L;function C(O){T.fromBufferAttribute(r,O),D.copy(T);let M=a[O];S.copy(M),S.sub(T.multiplyScalar(T.dot(M))).normalize(),x.crossVectors(D,M);let A=x.dot(c[O])<0?-1:1;o.setXYZW(O,S.x,S.y,S.z,A)}for(let O=0,M=b.length;O<M;++O){let E=b[O],A=E.start,U=E.count;for(let z=A,X=A+U;z<X;z+=3)C(e.getX(z+0)),C(e.getX(z+1)),C(e.getX(z+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Gn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let r=new L,s=new L,o=new L,a=new L,c=new L,l=new L,u=new L,d=new L;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Qt.fromBufferAttribute(e,t),Qt.normalize(),e.setXYZ(t,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(c.length*u),p=0,g=0;for(let y=0,m=c.length;y<m;y++){a.isInterleavedBufferAttribute?p=c[y]*a.data.stride+a.offset:p=c[y]*u;for(let h=0;h<u;h++)f[g++]=l[p++]}return new Gn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){let f=l[u],p=e(f,i);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){let p=l[d];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],d=s[l];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},nM=new It,Os=new zs,ef=new Hs,iM=new L,tf=new L,nf=new L,rf=new L,Pv=new L,sf=new L,rM=new L,of=new L,An=class extends _i{constructor(e=new xi,t=new el){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){sf.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],d=s[c];u!==0&&(Pv.fromBufferAttribute(d,e),o?sf.addScaledVector(Pv,u):sf.addScaledVector(Pv.sub(t),u))}t.add(sf)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ef.copy(i.boundingSphere),ef.applyMatrix4(s),Os.copy(e.ray).recast(e.near),!(ef.containsPoint(Os.origin)===!1&&(Os.intersectSphere(ef,iM)===null||Os.origin.distanceToSquared(iM)>(e.far-e.near)**2))&&(nM.copy(s).invert(),Os.copy(e.ray).applyMatrix4(nM),!(i.boundingBox!==null&&Os.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Os)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let m=f[g],h=o[m.materialIndex],b=Math.max(m.start,p.start),S=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=b,T=S;x<T;x+=3){let D=a.getX(x),C=a.getX(x+1),O=a.getX(x+2);r=af(this,h,e,i,l,u,d,D,C,O),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=g,h=y;m<h;m+=3){let b=a.getX(m),S=a.getX(m+1),x=a.getX(m+2);r=af(this,o,e,i,l,u,d,b,S,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let m=f[g],h=o[m.materialIndex],b=Math.max(m.start,p.start),S=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let x=b,T=S;x<T;x+=3){let D=x,C=x+1,O=x+2;r=af(this,h,e,i,l,u,d,D,C,O),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),y=Math.min(c.count,p.start+p.count);for(let m=g,h=y;m<h;m+=3){let b=m,S=m+1,x=m+2;r=af(this,o,e,i,l,u,d,b,S,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function g1(n,e,t,i,r,s,o,a){let c;if(e.side===En?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===dr,a),c===null)return null;of.copy(a),of.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(of);return l<t.near||l>t.far?null:{distance:l,point:of.clone(),object:n}}function af(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,tf),n.getVertexPosition(c,nf),n.getVertexPosition(l,rf);let u=g1(n,e,t,i,tf,nf,rf,rM);if(u){let d=new L;zr.getBarycoord(rM,tf,nf,rf,d),r&&(u.uv=zr.getInterpolatedAttribute(r,a,c,l,d,new Ue)),s&&(u.uv1=zr.getInterpolatedAttribute(s,a,c,l,d,new Ue)),o&&(u.normal=zr.getInterpolatedAttribute(o,a,c,l,d,new L),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new L,materialIndex:0};zr.getNormal(tf,nf,rf,f.normal),u.face=f,u.barycoord=d}return u}var qr=class n extends xi{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],d=[],f=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new en(l,3)),this.setAttribute("normal",new en(u,3)),this.setAttribute("uv",new en(d,2));function g(y,m,h,b,S,x,T,D,C,O,M){let E=x/C,A=T/O,U=x/2,z=T/2,X=D/2,j=C+1,$=O+1,Z=0,V=0,oe=new L;for(let de=0;de<$;de++){let we=de*A-z;for(let Ke=0;Ke<j;Ke++){let yt=Ke*E-U;oe[y]=yt*b,oe[m]=we*S,oe[h]=X,l.push(oe.x,oe.y,oe.z),oe[y]=0,oe[m]=0,oe[h]=D>0?1:-1,u.push(oe.x,oe.y,oe.z),d.push(Ke/C),d.push(1-de/O),Z+=1}}for(let de=0;de<O;de++)for(let we=0;we<C;we++){let Ke=f+we+j*de,yt=f+we+j*(de+1),Et=f+(we+1)+j*(de+1),ct=f+(we+1)+j*de;c.push(Ke,yt,ct),c.push(yt,Et,ct),V+=6}a.addGroup(p,V,M),p+=V,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function qs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function fn(n){let e={};for(let t=0;t<n.length;t++){let i=qs(n[t]);for(let r in i)e[r]=i[r]}return e}function v1(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function py(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}var tb={clone:qs,merge:fn},y1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ei=class extends fr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=y1,this.fragmentShader=_1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qs(e.uniforms),this.uniformsGroups=v1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},il=class extends _i{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Hr=new L,sM=new Ue,oM=new Ue,dn=class extends il{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ma*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan($c*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ma*2*Math.atan(Math.tan($c*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hr.x,Hr.y).multiplyScalar(-e/Hr.z),Hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Hr.x,Hr.y).multiplyScalar(-e/Hr.z)}getViewSize(e,t){return this.getViewBounds(e,sM,oM),t.subVectors(oM,sM)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan($c*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ua=-90,da=1,Ef=class extends _i{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new dn(ua,da,e,t);r.layers=this.layers,this.add(r);let s=new dn(ua,da,e,t);s.layers=this.layers,this.add(s);let o=new dn(ua,da,e,t);o.layers=this.layers,this.add(o);let a=new dn(ua,da,e,t);a.layers=this.layers,this.add(a);let c=new dn(ua,da,e,t);c.layers=this.layers,this.add(c);let l=new dn(ua,da,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===vi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Zc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},rl=class extends es{constructor(e=[],t=Ws,i,r,s,o,a,c,l,u){super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Sf=class extends Ui{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new rl(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new qr(5,5,5),s=new Ei({name:"CubemapFromEquirect",uniforms:qs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:hr});s.uniforms.tEquirect.value=t;let o=new An(r,s),a=t.minFilter;return t.minFilter===Jr&&(t.minFilter=yi),new Ef(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},ks=class extends _i{constructor(){super(),this.isGroup=!0,this.type="Group"}},x1={type:"move"},ya=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ks,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ks,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ks,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,i),h=this._getHandJoint(l,y);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(x1)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ks;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var sl=class extends _i{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $r,this.environmentIntensity=1,this.environmentRotation=new $r,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Ov=new L,E1=new L,S1=new je,ti=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Ov.subVectors(i,t).cross(E1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Ov),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||S1.getNormalMatrix(e),r=this.coplanarPoint(Ov).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ls=new Hs,M1=new Ue(.5,.5),cf=new L,_a=class{constructor(e=new ti,t=new ti,i=new ti,r=new ti,s=new ti,o=new ti){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=vi,i=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],u=s[4],d=s[5],f=s[6],p=s[7],g=s[8],y=s[9],m=s[10],h=s[11],b=s[12],S=s[13],x=s[14],T=s[15];if(r[0].setComponents(l-o,p-u,h-g,T-b).normalize(),r[1].setComponents(l+o,p+u,h+g,T+b).normalize(),r[2].setComponents(l+a,p+d,h+y,T+S).normalize(),r[3].setComponents(l-a,p-d,h-y,T-S).normalize(),i)r[4].setComponents(c,f,m,x).normalize(),r[5].setComponents(l-c,p-f,h-m,T-x).normalize();else if(r[4].setComponents(l-c,p-f,h-m,T-x).normalize(),t===vi)r[5].setComponents(l+c,p+f,h+m,T+x).normalize();else if(t===Zc)r[5].setComponents(c,f,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ls.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ls)}intersectsSprite(e){Ls.center.set(0,0,0);let t=M1.distanceTo(e.center);return Ls.radius=.7071067811865476+t,Ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ls)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(cf.x=r.normal.x>0?e.max.x:e.min.x,cf.y=r.normal.y>0?e.max.y:e.min.y,cf.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(cf)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Gs=class extends fr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},aM=new It,zv=new zs,lf=new Hs,uf=new L,ol=class extends _i{constructor(e=new xi,t=new Gs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),lf.copy(i.boundingSphere),lf.applyMatrix4(r),lf.radius+=s,e.ray.intersectsSphere(lf)===!1)return;aM.copy(r).invert(),zv.copy(e.ray).applyMatrix4(aM);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,d=i.attributes.position;if(l!==null){let f=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=f,y=p;g<y;g++){let m=l.getX(g);uf.fromBufferAttribute(d,m),cM(uf,m,c,r,e,t,this)}}else{let f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let g=f,y=p;g<y;g++)uf.fromBufferAttribute(d,g),cM(uf,g,c,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function cM(n,e,t,i,r,s,o){let a=zv.distanceSqToPoint(n);if(a<t){let c=new L;zv.closestPointToPoint(n,c),c.applyMatrix4(i);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var al=class extends es{constructor(e,t,i=Qr,r,s,o,a=ni,c=ni,l,u=pa,d=1){if(u!==pa&&u!==ba)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:d};super(f,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new va(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},cl=class extends es{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var ll=class n extends xi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=e/a,f=t/c,p=[],g=[],y=[],m=[];for(let h=0;h<u;h++){let b=h*f-o;for(let S=0;S<l;S++){let x=S*d-s;g.push(x,-b,0),y.push(0,0,1),m.push(S/a),m.push(1-h/c)}}for(let h=0;h<c;h++)for(let b=0;b<a;b++){let S=b+l*h,x=b+l*(h+1),T=b+1+l*(h+1),D=b+1+l*h;p.push(S,x,D),p.push(x,T,D)}this.setIndex(p),this.setAttribute("position",new en(g,3)),this.setAttribute("normal",new en(y,3)),this.setAttribute("uv",new en(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var ul=class extends fr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cy,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $r,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Mf=class extends fr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},bf=class extends fr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function df(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function b1(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var js=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break t}o=t.length;break n}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},wf=class extends js{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:kv,endingEnd:kv}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Uv:s=e,a=2*t-i;break;case Bv:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Uv:o=e,c=2*i-t;break;case Bv:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(i-t)/(r-t),y=g*g,m=y*g,h=-f*m+2*f*y-f*g,b=(1+f)*m+(-1.5-2*f)*y+(-.5+f)*g+1,S=(-1-p)*m+(1.5+p)*y+.5*g,x=p*m-p*y;for(let T=0;T!==a;++T)s[T]=h*o[u+T]+b*o[l+T]+S*o[c+T]+x*o[d+T];return s}},Tf=class extends js{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(r-t),d=1-u;for(let f=0;f!==a;++f)s[f]=o[l+f]*d+o[c+f]*u;return s}},Cf=class extends js{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},jn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=df(t,this.TimeBufferType),this.values=df(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:df(e.times,Array),values:df(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Cf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Tf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new wf(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Xc:t=this.InterpolantFactoryMethodDiscrete;break;case vf:t=this.InterpolantFactoryMethodLinear;break;case ff:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xc;case this.InterpolantFactoryMethodLinear:return vf;case this.InterpolantFactoryMethodSmooth:return ff}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&b1(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===ff,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let d=a*i,f=d-i,p=d+i;for(let g=0;g!==i;++g){let y=t[d+g];if(y!==t[f+g]||y!==t[p+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*i,f=o*i;for(let p=0;p!==i;++p)t[f+p]=t[d+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};jn.prototype.ValueTypeName="";jn.prototype.TimeBufferType=Float32Array;jn.prototype.ValueBufferType=Float32Array;jn.prototype.DefaultInterpolation=vf;var Xr=class extends jn{constructor(e,t,i){super(e,t,i)}};Xr.prototype.ValueTypeName="bool";Xr.prototype.ValueBufferType=Array;Xr.prototype.DefaultInterpolation=Xc;Xr.prototype.InterpolantFactoryMethodLinear=void 0;Xr.prototype.InterpolantFactoryMethodSmooth=void 0;var Df=class extends jn{constructor(e,t,i,r){super(e,t,i,r)}};Df.prototype.ValueTypeName="color";var If=class extends jn{constructor(e,t,i,r){super(e,t,i,r)}};If.prototype.ValueTypeName="number";var Af=class extends js{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t),l=e*a;for(let u=l+a;l!==u;l+=4)ii.slerpFlat(s,0,o,l-a,o,l,c);return s}},dl=class extends jn{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new Af(this.times,this.values,this.getValueSize(),e)}};dl.prototype.ValueTypeName="quaternion";dl.prototype.InterpolantFactoryMethodSmooth=void 0;var Yr=class extends jn{constructor(e,t,i){super(e,t,i)}};Yr.prototype.ValueTypeName="string";Yr.prototype.ValueBufferType=Array;Yr.prototype.DefaultInterpolation=Xc;Yr.prototype.InterpolantFactoryMethodLinear=void 0;Yr.prototype.InterpolantFactoryMethodSmooth=void 0;var Rf=class extends jn{constructor(e,t,i,r){super(e,t,i,r)}};Rf.prototype.ValueTypeName="vector";var Gv={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Nf=class{constructor(e,t,i){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){let d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=l.length;d<f;d+=2){let p=l[d],g=l[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},nb=new Nf,bh=(()=>{class n{constructor(t){this.manager=t!==void 0?t:nb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){let r=this;return new Promise(function(s,o){r.load(t,s,i,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}return n.DEFAULT_MATERIAL_NAME="__DEFAULT",n})(),lr={},jv=class extends Error{constructor(e,t){super(e),this.response=t}},fl=class extends bh{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=Gv.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(lr[e]!==void 0){lr[e].push({onLoad:t,onProgress:i,onError:r});return}lr[e]=[],lr[e].push({onLoad:t,onProgress:i,onError:r});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=lr[e],d=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0,y=0,m=new ReadableStream({start(h){b();function b(){d.read().then(({done:S,value:x})=>{if(S)h.close();else{y+=x.byteLength;let T=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:p});for(let D=0,C=u.length;D<C;D++){let O=u[D];O.onProgress&&O.onProgress(T)}h.enqueue(x),b()}},S=>{h.error(S)})}}});return new Response(m)}else throw new jv(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a==="")return l.text();{let d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(f);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{Gv.add(`file:${e}`,l);let u=lr[e];delete lr[e];for(let d=0,f=u.length;d<f;d++){let p=u[d];p.onLoad&&p.onLoad(l)}}).catch(l=>{let u=lr[e];if(u===void 0)throw this.manager.itemError(e),l;delete lr[e];for(let d=0,f=u.length;d<f;d++){let p=u[d];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var hl=class extends _i{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var Lv=new It,lM=new L,uM=new L,Wv=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.mapType=Si,this.map=null,this.mapPass=null,this.matrix=new It,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _a,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;lM.setFromMatrixPosition(e.matrixWorld),t.position.copy(lM),uM.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(uM),t.updateMatrixWorld(),Lv.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lv,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Lv)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var pl=class extends il{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},$v=class extends Wv{constructor(){super(new pl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ml=class extends hl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_i.DEFAULT_UP),this.updateMatrix(),this.target=new _i,this.shadow=new $v}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},gl=class extends hl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Pf=class extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var my="\\[\\]\\.:\\/",w1=new RegExp("["+my+"]","g"),gy="[^"+my+"]",T1="[^"+my.replace("\\.","")+"]",C1=/((?:WC+[\/:])*)/.source.replace("WC",gy),D1=/(WCOD+)?/.source.replace("WCOD",T1),I1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gy),A1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gy),R1=new RegExp("^"+C1+D1+I1+A1+"$"),N1=["material","materials","bones","map"],qv=class{constructor(e,t,i){let r=i||Dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Dt=(()=>{class n{constructor(t,i,r){this.path=i,this.parsedPath=r||n.parseTrackName(i),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new n.Composite(t,i,r):new n(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(w1,"")}static parseTrackName(t){let i=R1.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);N1.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let c=o[a];if(c.name===i||c.uuid===i)return c;let l=r(c.children);if(l)return l}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[i++]=r[s]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,s=i.propertyName,o=i.propertyIndex;if(t||(t=n.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=i.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===u){u=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[s];if(a===void 0){let u=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?c=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return n.Composite=qv,n})();Dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Dt.prototype.GetterByBindingType=[Dt.prototype._getValue_direct,Dt.prototype._getValue_array,Dt.prototype._getValue_arrayElement,Dt.prototype._getValue_toArray];Dt.prototype.SetterByBindingTypeAndVersioning=[[Dt.prototype._setValue_direct,Dt.prototype._setValue_direct_setNeedsUpdate,Dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_array,Dt.prototype._setValue_array_setNeedsUpdate,Dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_arrayElement,Dt.prototype._setValue_arrayElement_setNeedsUpdate,Dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_fromArray,Dt.prototype._setValue_fromArray_setNeedsUpdate,Dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var u9=new Float32Array(1);var xa=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ze(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ze(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var vl=class extends ki{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function vy(n,e,t,i){let r=P1(i);switch(t){case ry:return n*e;case oy:return n*e/r.components*r.byteLength;case qf:return n*e/r.components*r.byteLength;case ay:return n*e*2/r.components*r.byteLength;case Xf:return n*e*2/r.components*r.byteLength;case sy:return n*e*3/r.components*r.byteLength;case ri:return n*e*4/r.components*r.byteLength;case Yf:return n*e*4/r.components*r.byteLength;case xl:case El:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Sl:case Ml:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Kf:case Qf:return Math.max(n,16)*Math.max(e,8)/4;case Zf:case Jf:return Math.max(n,8)*Math.max(e,8)/2;case eh:case th:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case nh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ih:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case rh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case sh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case oh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ah:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ch:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case lh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case uh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case dh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case fh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case hh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ph:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case mh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case gh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case vh:case yh:case _h:return Math.ceil(n/4)*Math.ceil(e/4)*16;case xh:case Eh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Sh:case Mh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function P1(n){switch(n){case Si:case ey:return{byteLength:1,components:1};case Ea:case ty:case Sa:return{byteLength:2,components:1};case Wf:case $f:return{byteLength:2,components:4};case Qr:case jf:case Hi:return{byteLength:4,components:1};case ny:case iy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Tb(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function L1(n){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,d=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){let u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<d.length;p++){let g=d[f],y=d[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,d[f]=y)}d.length=f+1;for(let p=0,g=d.length;p<g;p++){let y=d[p];n.bufferSubData(l,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var F1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,k1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,U1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,B1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,V1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,H1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,z1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,G1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,j1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,W1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,q1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,X1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Y1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Z1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,K1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,J1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Q1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eN=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tN=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nN=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,iN=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rN=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,sN=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,oN=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,aN=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,cN=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lN=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uN=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dN=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fN="gl_FragColor = linearToOutputTexel( gl_FragColor );",hN=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pN=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,mN=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gN=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,vN=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yN=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_N=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xN=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,EN=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,SN=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,MN=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bN=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wN=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,TN=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,CN=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,DN=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,IN=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,AN=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,RN=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,NN=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,PN=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ON=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,LN=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,FN=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,kN=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,UN=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,BN=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VN=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HN=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zN=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,GN=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jN=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,WN=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$N=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qN=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,XN=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,YN=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ZN=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KN=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,JN=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,QN=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,eP=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,tP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iP=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rP=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,sP=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,oP=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,aP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uP=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,dP=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vP=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,yP=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_P=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,xP=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,EP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,SP=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,MP=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bP=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,wP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,TP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,CP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,DP=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,IP=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,AP=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,RP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,NP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,PP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,OP=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,LP=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,FP=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UP=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zP=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,GP=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,jP=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,WP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$P=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qP=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,XP=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ZP=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KP=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JP=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QP=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,eO=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tO=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,nO=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,iO=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rO=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sO=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,oO=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aO=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cO=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lO=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,uO=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dO=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fO=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,hO=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pO=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:F1,alphahash_pars_fragment:k1,alphamap_fragment:U1,alphamap_pars_fragment:B1,alphatest_fragment:V1,alphatest_pars_fragment:H1,aomap_fragment:z1,aomap_pars_fragment:G1,batching_pars_vertex:j1,batching_vertex:W1,begin_vertex:$1,beginnormal_vertex:q1,bsdfs:X1,iridescence_fragment:Y1,bumpmap_pars_fragment:Z1,clipping_planes_fragment:K1,clipping_planes_pars_fragment:J1,clipping_planes_pars_vertex:Q1,clipping_planes_vertex:eN,color_fragment:tN,color_pars_fragment:nN,color_pars_vertex:iN,color_vertex:rN,common:sN,cube_uv_reflection_fragment:oN,defaultnormal_vertex:aN,displacementmap_pars_vertex:cN,displacementmap_vertex:lN,emissivemap_fragment:uN,emissivemap_pars_fragment:dN,colorspace_fragment:fN,colorspace_pars_fragment:hN,envmap_fragment:pN,envmap_common_pars_fragment:mN,envmap_pars_fragment:gN,envmap_pars_vertex:vN,envmap_physical_pars_fragment:DN,envmap_vertex:yN,fog_vertex:_N,fog_pars_vertex:xN,fog_fragment:EN,fog_pars_fragment:SN,gradientmap_pars_fragment:MN,lightmap_pars_fragment:bN,lights_lambert_fragment:wN,lights_lambert_pars_fragment:TN,lights_pars_begin:CN,lights_toon_fragment:IN,lights_toon_pars_fragment:AN,lights_phong_fragment:RN,lights_phong_pars_fragment:NN,lights_physical_fragment:PN,lights_physical_pars_fragment:ON,lights_fragment_begin:LN,lights_fragment_maps:FN,lights_fragment_end:kN,logdepthbuf_fragment:UN,logdepthbuf_pars_fragment:BN,logdepthbuf_pars_vertex:VN,logdepthbuf_vertex:HN,map_fragment:zN,map_pars_fragment:GN,map_particle_fragment:jN,map_particle_pars_fragment:WN,metalnessmap_fragment:$N,metalnessmap_pars_fragment:qN,morphinstance_vertex:XN,morphcolor_vertex:YN,morphnormal_vertex:ZN,morphtarget_pars_vertex:KN,morphtarget_vertex:JN,normal_fragment_begin:QN,normal_fragment_maps:eP,normal_pars_fragment:tP,normal_pars_vertex:nP,normal_vertex:iP,normalmap_pars_fragment:rP,clearcoat_normal_fragment_begin:sP,clearcoat_normal_fragment_maps:oP,clearcoat_pars_fragment:aP,iridescence_pars_fragment:cP,opaque_fragment:lP,packing:uP,premultiplied_alpha_fragment:dP,project_vertex:fP,dithering_fragment:hP,dithering_pars_fragment:pP,roughnessmap_fragment:mP,roughnessmap_pars_fragment:gP,shadowmap_pars_fragment:vP,shadowmap_pars_vertex:yP,shadowmap_vertex:_P,shadowmask_pars_fragment:xP,skinbase_vertex:EP,skinning_pars_vertex:SP,skinning_vertex:MP,skinnormal_vertex:bP,specularmap_fragment:wP,specularmap_pars_fragment:TP,tonemapping_fragment:CP,tonemapping_pars_fragment:DP,transmission_fragment:IP,transmission_pars_fragment:AP,uv_pars_fragment:RP,uv_pars_vertex:NP,uv_vertex:PP,worldpos_vertex:OP,background_vert:LP,background_frag:FP,backgroundCube_vert:kP,backgroundCube_frag:UP,cube_vert:BP,cube_frag:VP,depth_vert:HP,depth_frag:zP,distanceRGBA_vert:GP,distanceRGBA_frag:jP,equirect_vert:WP,equirect_frag:$P,linedashed_vert:qP,linedashed_frag:XP,meshbasic_vert:YP,meshbasic_frag:ZP,meshlambert_vert:KP,meshlambert_frag:JP,meshmatcap_vert:QP,meshmatcap_frag:eO,meshnormal_vert:tO,meshnormal_frag:nO,meshphong_vert:iO,meshphong_frag:rO,meshphysical_vert:sO,meshphysical_frag:oO,meshtoon_vert:aO,meshtoon_frag:cO,points_vert:lO,points_frag:uO,shadow_vert:dO,shadow_frag:fO,sprite_vert:hO,sprite_frag:pO},se={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},zi={basic:{uniforms:fn([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:fn([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:fn([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:fn([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:fn([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:fn([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:fn([se.points,se.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:fn([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:fn([se.common,se.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:fn([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:fn([se.sprite,se.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:fn([se.common,se.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:fn([se.lights,se.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};zi.physical={uniforms:fn([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};var wh={r:0,b:0,g:0},Xs=new $r,mO=new It;function gO(n,e,t,i,r,s,o){let a=new Ye(0),c=s===!0?0:1,l,u,d=null,f=0,p=null;function g(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?t:e).get(x)),x}function y(S){let x=!1,T=g(S);T===null?h(a,c):T&&T.isColor&&(h(T,1),x=!0);let D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(S,x){let T=g(x);T&&(T.isCubeTexture||T.mapping===yl)?(u===void 0&&(u=new An(new qr(1,1,1),new Ei({name:"BackgroundCubeMaterial",uniforms:qs(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,C,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Xs.copy(x.backgroundRotation),Xs.x*=-1,Xs.y*=-1,Xs.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Xs.y*=-1,Xs.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(mO.makeRotationFromEuler(Xs)),u.material.toneMapped=rt.getTransfer(T.colorSpace)!==ft,(d!==T||f!==T.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=T,f=T.version,p=n.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new An(new ll(2,2),new Ei({name:"BackgroundMaterial",uniforms:qs(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:dr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=rt.getTransfer(T.colorSpace)!==ft,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(d!==T||f!==T.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,d=T,f=T.version,p=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function h(S,x){S.getRGB(wh,py(n)),i.buffers.color.setClear(wh.r,wh.g,wh.b,x,o)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,x=1){a.set(S),c=x,h(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,h(a,c)},render:y,addToRenderList:m,dispose:b}}function vO(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null),s=r,o=!1;function a(E,A,U,z,X){let j=!1,$=d(z,U,A);s!==$&&(s=$,l(s.object)),j=p(E,z,U,X),j&&g(E,z,U,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,x(E,A,U,z),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function c(){return n.createVertexArray()}function l(E){return n.bindVertexArray(E)}function u(E){return n.deleteVertexArray(E)}function d(E,A,U){let z=U.wireframe===!0,X=i[E.id];X===void 0&&(X={},i[E.id]=X);let j=X[A.id];j===void 0&&(j={},X[A.id]=j);let $=j[z];return $===void 0&&($=f(c()),j[z]=$),$}function f(E){let A=[],U=[],z=[];for(let X=0;X<t;X++)A[X]=0,U[X]=0,z[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:U,attributeDivisors:z,object:E,attributes:{},index:null}}function p(E,A,U,z){let X=s.attributes,j=A.attributes,$=0,Z=U.getAttributes();for(let V in Z)if(Z[V].location>=0){let de=X[V],we=j[V];if(we===void 0&&(V==="instanceMatrix"&&E.instanceMatrix&&(we=E.instanceMatrix),V==="instanceColor"&&E.instanceColor&&(we=E.instanceColor)),de===void 0||de.attribute!==we||we&&de.data!==we.data)return!0;$++}return s.attributesNum!==$||s.index!==z}function g(E,A,U,z){let X={},j=A.attributes,$=0,Z=U.getAttributes();for(let V in Z)if(Z[V].location>=0){let de=j[V];de===void 0&&(V==="instanceMatrix"&&E.instanceMatrix&&(de=E.instanceMatrix),V==="instanceColor"&&E.instanceColor&&(de=E.instanceColor));let we={};we.attribute=de,de&&de.data&&(we.data=de.data),X[V]=we,$++}s.attributes=X,s.attributesNum=$,s.index=z}function y(){let E=s.newAttributes;for(let A=0,U=E.length;A<U;A++)E[A]=0}function m(E){h(E,0)}function h(E,A){let U=s.newAttributes,z=s.enabledAttributes,X=s.attributeDivisors;U[E]=1,z[E]===0&&(n.enableVertexAttribArray(E),z[E]=1),X[E]!==A&&(n.vertexAttribDivisor(E,A),X[E]=A)}function b(){let E=s.newAttributes,A=s.enabledAttributes;for(let U=0,z=A.length;U<z;U++)A[U]!==E[U]&&(n.disableVertexAttribArray(U),A[U]=0)}function S(E,A,U,z,X,j,$){$===!0?n.vertexAttribIPointer(E,A,U,X,j):n.vertexAttribPointer(E,A,U,z,X,j)}function x(E,A,U,z){y();let X=z.attributes,j=U.getAttributes(),$=A.defaultAttributeValues;for(let Z in j){let V=j[Z];if(V.location>=0){let oe=X[Z];if(oe===void 0&&(Z==="instanceMatrix"&&E.instanceMatrix&&(oe=E.instanceMatrix),Z==="instanceColor"&&E.instanceColor&&(oe=E.instanceColor)),oe!==void 0){let de=oe.normalized,we=oe.itemSize,Ke=e.get(oe);if(Ke===void 0)continue;let yt=Ke.buffer,Et=Ke.type,ct=Ke.bytesPerElement,W=Et===n.INT||Et===n.UNSIGNED_INT||oe.gpuType===jf;if(oe.isInterleavedBufferAttribute){let K=oe.data,pe=K.stride,Le=oe.offset;if(K.isInstancedInterleavedBuffer){for(let be=0;be<V.locationSize;be++)h(V.location+be,K.meshPerAttribute);E.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let be=0;be<V.locationSize;be++)m(V.location+be);n.bindBuffer(n.ARRAY_BUFFER,yt);for(let be=0;be<V.locationSize;be++)S(V.location+be,we/V.locationSize,Et,de,pe*ct,(Le+we/V.locationSize*be)*ct,W)}else{if(oe.isInstancedBufferAttribute){for(let K=0;K<V.locationSize;K++)h(V.location+K,oe.meshPerAttribute);E.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let K=0;K<V.locationSize;K++)m(V.location+K);n.bindBuffer(n.ARRAY_BUFFER,yt);for(let K=0;K<V.locationSize;K++)S(V.location+K,we/V.locationSize,Et,de,we*ct,we/V.locationSize*K*ct,W)}}else if($!==void 0){let de=$[Z];if(de!==void 0)switch(de.length){case 2:n.vertexAttrib2fv(V.location,de);break;case 3:n.vertexAttrib3fv(V.location,de);break;case 4:n.vertexAttrib4fv(V.location,de);break;default:n.vertexAttrib1fv(V.location,de)}}}}b()}function T(){O();for(let E in i){let A=i[E];for(let U in A){let z=A[U];for(let X in z)u(z[X].object),delete z[X];delete A[U]}delete i[E]}}function D(E){if(i[E.id]===void 0)return;let A=i[E.id];for(let U in A){let z=A[U];for(let X in z)u(z[X].object),delete z[X];delete A[U]}delete i[E.id]}function C(E){for(let A in i){let U=i[A];if(U[E.id]===void 0)continue;let z=U[E.id];for(let X in z)u(z[X].object),delete z[X];delete U[E.id]}}function O(){M(),o=!0,s!==r&&(s=r,l(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:O,resetDefaultState:M,dispose:T,releaseStatesOfGeometry:D,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:m,disableUnusedAttributes:b}}function yO(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),t.update(u,i,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let p=0;for(let g=0;g<d;g++)p+=u[g];t.update(p,i,1)}function c(l,u,d,f){if(d===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,d);let g=0;for(let y=0;y<d;y++)g+=u[y]*f[y];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function _O(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==ri&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let O=C===Sa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Si&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Hi&&!O)}function c(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,D=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:T,maxSamples:D}}function xO(n){let e=this,t=null,i=0,r=!1,s=!1,o=new ti,a=new je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,p){let g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,h=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{let b=s?0:i,S=b*4,x=h.clippingState||null;c.value=x,x=u(g,f,S,p);for(let T=0;T!==S;++T)x[T]=t[T];h.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,p,g){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=c.value,g!==!0||m===null){let h=p+y*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<h)&&(m=new Float32Array(h));for(let S=0,x=p;S!==y;++S,x+=4)o.copy(d[S]).applyMatrix4(b,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function EO(n){let e=new WeakMap;function t(o,a){return a===Hf?o.mapping=Ws:a===zf&&(o.mapping=$s),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Hf||a===zf)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Sf(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var Ca=4,ib=[.125,.215,.35,.446,.526,.582],Ks=20,yy=new pl,rb=new Ye,_y=null,xy=0,Ey=0,Sy=!1,Zs=(1+Math.sqrt(5))/2,Ta=1/Zs,sb=[new L(-Zs,Ta,0),new L(Zs,Ta,0),new L(-Ta,0,Zs),new L(Ta,0,Zs),new L(0,Zs,-Ta),new L(0,Zs,Ta),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],SO=new L,Dh=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){let{size:o=256,position:a=SO}=s;_y=this._renderer.getRenderTarget(),xy=this._renderer.getActiveCubeFace(),Ey=this._renderer.getActiveMipmapLevel(),Sy=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cb(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ab(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_y,xy,Ey),this._renderer.xr.enabled=Sy,e.scissorTest=!1,Th(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ws||e.mapping===$s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_y=this._renderer.getRenderTarget(),xy=this._renderer.getActiveCubeFace(),Ey=this._renderer.getActiveMipmapLevel(),Sy=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:yi,minFilter:yi,generateMipmaps:!1,type:Sa,format:ri,colorSpace:Vs,depthBuffer:!1},r=ob(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ob(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=MO(s)),this._blurMaterial=bO(s,e,t)}return r}_compileMaterial(e){let t=new An(this._lodPlanes[0],e);this._renderer.compile(t,yy)}_sceneToCubeUV(e,t,i,r,s){let c=new dn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(rb),d.toneMapping=pr,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));let y=new el({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1}),m=new An(new qr,y),h=!1,b=e.background;b?b.isColor&&(y.color.copy(b),e.background=null,h=!0):(y.color.copy(rb),h=!0);for(let S=0;S<6;S++){let x=S%3;x===0?(c.up.set(0,l[S],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[S],s.y,s.z)):x===1?(c.up.set(0,0,l[S]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[S],s.z)):(c.up.set(0,l[S],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[S]));let T=this._cubeSize;Th(r,x*T,S>2?T:0,T,T),d.setRenderTarget(r),h&&d.render(m,c),d.render(e,c)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=f,e.background=b}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Ws||e.mapping===$s;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=cb()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ab());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new An(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;Th(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,yy)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=sb[(r-s-1)%sb.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new An(this._lodPlanes[r],l),f=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ks-1),y=s/g,m=isFinite(s)?1+Math.floor(u*y):Ks;m>Ks&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ks}`);let h=[],b=0;for(let C=0;C<Ks;++C){let O=C/y,M=Math.exp(-O*O/2);h.push(M),C===0?b+=M:C<m&&(b+=2*M)}for(let C=0;C<h.length;C++)h[C]=h[C]/b;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-i;let x=this._sizeLods[r],T=3*x*(r>S-Ca?r-S+Ca:0),D=4*(this._cubeSize-x);Th(t,T,D,3*x,2*x),c.setRenderTarget(t),c.render(d,yy)}};function MO(n){let e=[],t=[],i=[],r=n,s=n-Ca+1+ib.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let c=1/a;o>n-Ca?c=ib[o-n+Ca-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,y=3,m=2,h=1,b=new Float32Array(y*g*p),S=new Float32Array(m*g*p),x=new Float32Array(h*g*p);for(let D=0;D<p;D++){let C=D%3*2/3-1,O=D>2?0:-1,M=[C,O,0,C+2/3,O,0,C+2/3,O+1,0,C,O,0,C+2/3,O+1,0,C,O+1,0];b.set(M,y*g*D),S.set(f,m*g*D);let E=[D,D,D,D,D,D];x.set(E,h*g*D)}let T=new xi;T.setAttribute("position",new Gn(b,y)),T.setAttribute("uv",new Gn(S,m)),T.setAttribute("faceIndex",new Gn(x,h)),e.push(T),r>Ca&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ob(n,e,t){let i=new Ui(n,e,t);return i.texture.mapping=yl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Th(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function bO(n,e,t){let i=new Float32Array(Ks),r=new L(0,1,0);return new Ei({name:"SphericalGaussianBlur",defines:{n:Ks,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ny(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function ab(){return new Ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ny(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function cb(){return new Ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ny(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function Ny(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function wO(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===Hf||c===zf,u=c===Ws||c===$s;if(l||u){let d=e.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Dh(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let p=a.image;return l&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new Dh(n)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function TO(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&ga("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function CO(n,e,t,i){let r={},s=new WeakMap;function o(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];let p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(d){let f=d.attributes;for(let p in f)e.update(f[p],n.ARRAY_BUFFER)}function l(d){let f=[],p=d.index,g=d.attributes.position,y=0;if(p!==null){let b=p.array;y=p.version;for(let S=0,x=b.length;S<x;S+=3){let T=b[S+0],D=b[S+1],C=b[S+2];f.push(T,D,D,C,C,T)}}else if(g!==void 0){let b=g.array;y=g.version;for(let S=0,x=b.length/3-1;S<x;S+=3){let T=S+0,D=S+1,C=S+2;f.push(T,D,D,C,C,T)}}else return;let m=new(hy(f)?nl:tl)(f,1);m.version=y;let h=s.get(d);h&&e.remove(h),s.set(d,m)}function u(d){let f=s.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function DO(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,p){n.drawElements(i,p,s,f*o),t.update(p,i,1)}function l(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,f*o,g),t.update(p,i,g))}function u(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];t.update(m,i,1)}function d(f,p,g,y){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)l(f[h]/o,p[h],y[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,y,0,g);let h=0;for(let b=0;b<g;b++)h+=p[b]*y[b];t.update(h,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function IO(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function AO(n,e,t){let i=new WeakMap,r=new Tt;function s(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==d){let E=function(){O.dispose(),i.delete(a),a.removeEventListener("dispose",E)};var p=E;f!==void 0&&f.texture.dispose();let g=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],x=0;g===!0&&(x=1),y===!0&&(x=2),m===!0&&(x=3);let T=a.attributes.position.count*x,D=1;T>e.maxTextureSize&&(D=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);let C=new Float32Array(T*D*4*d),O=new Jc(C,T,D,d);O.type=Hi,O.needsUpdate=!0;let M=x*4;for(let A=0;A<d;A++){let U=h[A],z=b[A],X=S[A],j=T*D*4*A;for(let $=0;$<U.count;$++){let Z=$*M;g===!0&&(r.fromBufferAttribute(U,$),C[j+Z+0]=r.x,C[j+Z+1]=r.y,C[j+Z+2]=r.z,C[j+Z+3]=0),y===!0&&(r.fromBufferAttribute(z,$),C[j+Z+4]=r.x,C[j+Z+5]=r.y,C[j+Z+6]=r.z,C[j+Z+7]=0),m===!0&&(r.fromBufferAttribute(X,$),C[j+Z+8]=r.x,C[j+Z+9]=r.y,C[j+Z+10]=r.z,C[j+Z+11]=X.itemSize===4?r.w:1)}}f={count:d,texture:O,size:new Ue(T,D)},i.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];let y=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",y),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function RO(n,e,t,i){let r=new WeakMap;function s(c){let l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return d}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var Cb=new es,lb=new al(1,1),Db=new Jc,Ib=new xf,Ab=new rl,ub=[],db=[],fb=new Float32Array(16),hb=new Float32Array(9),pb=new Float32Array(4);function Ia(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=ub[r];if(s===void 0&&(s=new Float32Array(r),ub[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function jt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Wt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ah(n,e){let t=db[e];t===void 0&&(t=new Int32Array(e),db[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function NO(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function PO(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2fv(this.addr,e),Wt(t,e)}}function OO(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;n.uniform3fv(this.addr,e),Wt(t,e)}}function LO(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4fv(this.addr,e),Wt(t,e)}}function FO(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(jt(t,i))return;pb.set(i),n.uniformMatrix2fv(this.addr,!1,pb),Wt(t,i)}}function kO(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(jt(t,i))return;hb.set(i),n.uniformMatrix3fv(this.addr,!1,hb),Wt(t,i)}}function UO(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(jt(t,i))return;fb.set(i),n.uniformMatrix4fv(this.addr,!1,fb),Wt(t,i)}}function BO(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function VO(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2iv(this.addr,e),Wt(t,e)}}function HO(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;n.uniform3iv(this.addr,e),Wt(t,e)}}function zO(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4iv(this.addr,e),Wt(t,e)}}function GO(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function jO(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2uiv(this.addr,e),Wt(t,e)}}function WO(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;n.uniform3uiv(this.addr,e),Wt(t,e)}}function $O(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4uiv(this.addr,e),Wt(t,e)}}function qO(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(lb.compareFunction=ly,s=lb):s=Cb,t.setTexture2D(e||s,r)}function XO(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ib,r)}function YO(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Ab,r)}function ZO(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Db,r)}function KO(n){switch(n){case 5126:return NO;case 35664:return PO;case 35665:return OO;case 35666:return LO;case 35674:return FO;case 35675:return kO;case 35676:return UO;case 5124:case 35670:return BO;case 35667:case 35671:return VO;case 35668:case 35672:return HO;case 35669:case 35673:return zO;case 5125:return GO;case 36294:return jO;case 36295:return WO;case 36296:return $O;case 35678:case 36198:case 36298:case 36306:case 35682:return qO;case 35679:case 36299:case 36307:return XO;case 35680:case 36300:case 36308:case 36293:return YO;case 36289:case 36303:case 36311:case 36292:return ZO}}function JO(n,e){n.uniform1fv(this.addr,e)}function QO(n,e){let t=Ia(e,this.size,2);n.uniform2fv(this.addr,t)}function eL(n,e){let t=Ia(e,this.size,3);n.uniform3fv(this.addr,t)}function tL(n,e){let t=Ia(e,this.size,4);n.uniform4fv(this.addr,t)}function nL(n,e){let t=Ia(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function iL(n,e){let t=Ia(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function rL(n,e){let t=Ia(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function sL(n,e){n.uniform1iv(this.addr,e)}function oL(n,e){n.uniform2iv(this.addr,e)}function aL(n,e){n.uniform3iv(this.addr,e)}function cL(n,e){n.uniform4iv(this.addr,e)}function lL(n,e){n.uniform1uiv(this.addr,e)}function uL(n,e){n.uniform2uiv(this.addr,e)}function dL(n,e){n.uniform3uiv(this.addr,e)}function fL(n,e){n.uniform4uiv(this.addr,e)}function hL(n,e,t){let i=this.cache,r=e.length,s=Ah(t,r);jt(i,s)||(n.uniform1iv(this.addr,s),Wt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Cb,s[o])}function pL(n,e,t){let i=this.cache,r=e.length,s=Ah(t,r);jt(i,s)||(n.uniform1iv(this.addr,s),Wt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Ib,s[o])}function mL(n,e,t){let i=this.cache,r=e.length,s=Ah(t,r);jt(i,s)||(n.uniform1iv(this.addr,s),Wt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Ab,s[o])}function gL(n,e,t){let i=this.cache,r=e.length,s=Ah(t,r);jt(i,s)||(n.uniform1iv(this.addr,s),Wt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Db,s[o])}function vL(n){switch(n){case 5126:return JO;case 35664:return QO;case 35665:return eL;case 35666:return tL;case 35674:return nL;case 35675:return iL;case 35676:return rL;case 5124:case 35670:return sL;case 35667:case 35671:return oL;case 35668:case 35672:return aL;case 35669:case 35673:return cL;case 5125:return lL;case 36294:return uL;case 36295:return dL;case 36296:return fL;case 35678:case 36198:case 36298:case 36306:case 35682:return hL;case 35679:case 36299:case 36307:return pL;case 35680:case 36300:case 36308:case 36293:return mL;case 36289:case 36303:case 36311:case 36292:return gL}}var by=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=KO(t.type)}},wy=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=vL(t.type)}},Ty=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},My=/(\w+)(\])?(\[|\.)?/g;function mb(n,e){n.seq.push(e),n.map[e.id]=e}function yL(n,e,t){let i=n.name,r=i.length;for(My.lastIndex=0;;){let s=My.exec(i),o=My.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){mb(t,l===void 0?new by(a,n,e):new wy(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Ty(a),mb(t,d)),t=d}}}var Da=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);yL(s,o,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function gb(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var _L=37297,xL=0;function EL(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var vb=new je;function SL(n){rt._getMatrix(vb,rt.workingColorSpace,n);let e=`mat3( ${vb.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(n)){case Yc:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function yb(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+EL(n.getShaderSource(e),a)}else return s}function ML(n,e){let t=SL(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function bL(n,e){let t;switch(e){case OM:t="Linear";break;case LM:t="Reinhard";break;case FM:t="Cineon";break;case kM:t="ACESFilmic";break;case BM:t="AgX";break;case VM:t="Neutral";break;case UM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ch=new L;function wL(){rt.getLuminanceCoefficients(Ch);let n=Ch.x.toFixed(4),e=Ch.y.toFixed(4),t=Ch.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function TL(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bl).join(`
`)}function CL(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function DL(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function bl(n){return n!==""}function _b(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xb(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var IL=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cy(n){return n.replace(IL,RL)}var AL=new Map;function RL(n,e){let t=Xe[e];if(t===void 0){let i=AL.get(e);if(i!==void 0)t=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Cy(t)}var NL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Eb(n){return n.replace(NL,PL)}function PL(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Sb(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function OL(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Yv?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===hM?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Bi&&(e="SHADOWMAP_TYPE_VSM"),e}function LL(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ws:case $s:e="ENVMAP_TYPE_CUBE";break;case yl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function FL(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case $s:e="ENVMAP_MODE_REFRACTION";break}return e}function kL(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Qv:e="ENVMAP_BLENDING_MULTIPLY";break;case NM:e="ENVMAP_BLENDING_MIX";break;case PM:e="ENVMAP_BLENDING_ADD";break}return e}function UL(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function BL(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=OL(t),l=LL(t),u=FL(t),d=kL(t),f=UL(t),p=TL(t),g=CL(s),y=r.createProgram(),m,h,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(bl).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(bl).join(`
`),h.length>0&&(h+=`
`)):(m=[Sb(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bl).join(`
`),h=[Sb(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pr?"#define TONE_MAPPING":"",t.toneMapping!==pr?Xe.tonemapping_pars_fragment:"",t.toneMapping!==pr?bL("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,ML("linearToOutputTexel",t.outputColorSpace),wL(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(bl).join(`
`)),o=Cy(o),o=_b(o,t),o=xb(o,t),a=Cy(a),a=_b(a,t),a=xb(a,t),o=Eb(o),a=Eb(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===uy?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===uy?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let S=b+m+o,x=b+h+a,T=gb(r,r.VERTEX_SHADER,S),D=gb(r,r.FRAGMENT_SHADER,x);r.attachShader(y,T),r.attachShader(y,D),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function C(A){if(n.debug.checkShaderErrors){let U=r.getProgramInfoLog(y)||"",z=r.getShaderInfoLog(T)||"",X=r.getShaderInfoLog(D)||"",j=U.trim(),$=z.trim(),Z=X.trim(),V=!0,oe=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,y,T,D);else{let de=yb(r,T,"vertex"),we=yb(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+j+`
`+de+`
`+we)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):($===""||Z==="")&&(oe=!1);oe&&(A.diagnostics={runnable:V,programLog:j,vertexShader:{log:$,prefix:m},fragmentShader:{log:Z,prefix:h}})}r.deleteShader(T),r.deleteShader(D),O=new Da(r,y),M=DL(r,y)}let O;this.getUniforms=function(){return O===void 0&&C(this),O};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(y,_L)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=xL++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=T,this.fragmentShader=D,this}var VL=0,Dy=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Iy(e),t.set(e,i)),i}},Iy=class{constructor(e){this.id=VL++,this.code=e,this.usedTimes=0}};function HL(n,e,t,i,r,s,o){let a=new Qc,c=new Dy,l=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures,p=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,E,A,U,z){let X=U.fog,j=z.geometry,$=M.isMeshStandardMaterial?U.environment:null,Z=(M.isMeshStandardMaterial?t:e).get(M.envMap||$),V=Z&&Z.mapping===yl?Z.image.height:null,oe=g[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let de=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,we=de!==void 0?de.length:0,Ke=0;j.morphAttributes.position!==void 0&&(Ke=1),j.morphAttributes.normal!==void 0&&(Ke=2),j.morphAttributes.color!==void 0&&(Ke=3);let yt,Et,ct,W;if(oe){let lt=zi[oe];yt=lt.vertexShader,Et=lt.fragmentShader}else yt=M.vertexShader,Et=M.fragmentShader,c.update(M),ct=c.getVertexShaderID(M),W=c.getFragmentShaderID(M);let K=n.getRenderTarget(),pe=n.state.buffers.depth.getReversed(),Le=z.isInstancedMesh===!0,be=z.isBatchedMesh===!0,Qe=!!M.map,on=!!M.matcap,I=!!Z,St=!!M.aoMap,ze=!!M.lightMap,Re=!!M.bumpMap,ve=!!M.normalMap,Mt=!!M.displacementMap,ye=!!M.emissiveMap,$e=!!M.metalnessMap,qt=!!M.roughnessMap,At=M.anisotropy>0,w=M.clearcoat>0,v=M.dispersion>0,F=M.iridescence>0,G=M.sheen>0,Y=M.transmission>0,H=At&&!!M.anisotropyMap,Se=w&&!!M.clearcoatMap,ie=w&&!!M.clearcoatNormalMap,_e=w&&!!M.clearcoatRoughnessMap,xe=F&&!!M.iridescenceMap,te=F&&!!M.iridescenceThicknessMap,le=G&&!!M.sheenColorMap,Ae=G&&!!M.sheenRoughnessMap,Ee=!!M.specularMap,ae=!!M.specularColorMap,We=!!M.specularIntensityMap,R=Y&&!!M.transmissionMap,ne=Y&&!!M.thicknessMap,re=!!M.gradientMap,he=!!M.alphaMap,J=M.alphaTest>0,q=!!M.alphaHash,ge=!!M.extensions,Be=pr;M.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Be=n.toneMapping);let _t={shaderID:oe,shaderType:M.type,shaderName:M.name,vertexShader:yt,fragmentShader:Et,defines:M.defines,customVertexShaderID:ct,customFragmentShaderID:W,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:be,batchingColor:be&&z._colorsTexture!==null,instancing:Le,instancingColor:Le&&z.instanceColor!==null,instancingMorph:Le&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:K===null?n.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Vs,alphaToCoverage:!!M.alphaToCoverage,map:Qe,matcap:on,envMap:I,envMapMode:I&&Z.mapping,envMapCubeUVHeight:V,aoMap:St,lightMap:ze,bumpMap:Re,normalMap:ve,displacementMap:f&&Mt,emissiveMap:ye,normalMapObjectSpace:ve&&M.normalMapType===jM,normalMapTangentSpace:ve&&M.normalMapType===cy,metalnessMap:$e,roughnessMap:qt,anisotropy:At,anisotropyMap:H,clearcoat:w,clearcoatMap:Se,clearcoatNormalMap:ie,clearcoatRoughnessMap:_e,dispersion:v,iridescence:F,iridescenceMap:xe,iridescenceThicknessMap:te,sheen:G,sheenColorMap:le,sheenRoughnessMap:Ae,specularMap:Ee,specularColorMap:ae,specularIntensityMap:We,transmission:Y,transmissionMap:R,thicknessMap:ne,gradientMap:re,opaque:M.transparent===!1&&M.blending===Us&&M.alphaToCoverage===!1,alphaMap:he,alphaTest:J,alphaHash:q,combine:M.combine,mapUv:Qe&&y(M.map.channel),aoMapUv:St&&y(M.aoMap.channel),lightMapUv:ze&&y(M.lightMap.channel),bumpMapUv:Re&&y(M.bumpMap.channel),normalMapUv:ve&&y(M.normalMap.channel),displacementMapUv:Mt&&y(M.displacementMap.channel),emissiveMapUv:ye&&y(M.emissiveMap.channel),metalnessMapUv:$e&&y(M.metalnessMap.channel),roughnessMapUv:qt&&y(M.roughnessMap.channel),anisotropyMapUv:H&&y(M.anisotropyMap.channel),clearcoatMapUv:Se&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:ie&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&y(M.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:te&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:le&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&y(M.sheenRoughnessMap.channel),specularMapUv:Ee&&y(M.specularMap.channel),specularColorMapUv:ae&&y(M.specularColorMap.channel),specularIntensityMapUv:We&&y(M.specularIntensityMap.channel),transmissionMapUv:R&&y(M.transmissionMap.channel),thicknessMapUv:ne&&y(M.thicknessMap.channel),alphaMapUv:he&&y(M.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(ve||At),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!j.attributes.uv&&(Qe||he),fog:!!X,useFog:M.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:pe,skinning:z.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:Ke,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:Be,decodeVideoTexture:Qe&&M.map.isVideoTexture===!0&&rt.getTransfer(M.map.colorSpace)===ft,decodeVideoTextureEmissive:ye&&M.emissiveMap.isVideoTexture===!0&&rt.getTransfer(M.emissiveMap.colorSpace)===ft,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Vi,flipSided:M.side===En,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ge&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&M.extensions.multiDraw===!0||be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return _t.vertexUv1s=l.has(1),_t.vertexUv2s=l.has(2),_t.vertexUv3s=l.has(3),l.clear(),_t}function h(M){let E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(let A in M.defines)E.push(A),E.push(M.defines[A]);return M.isRawShaderMaterial===!1&&(b(E,M),S(E,M),E.push(n.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function b(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function S(M,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),E.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),M.push(a.mask)}function x(M){let E=g[M.type],A;if(E){let U=zi[E];A=tb.clone(U.uniforms)}else A=M.uniforms;return A}function T(M,E){let A;for(let U=0,z=u.length;U<z;U++){let X=u[U];if(X.cacheKey===E){A=X,++A.usedTimes;break}}return A===void 0&&(A=new BL(n,E,M,s),u.push(A)),A}function D(M){if(--M.usedTimes===0){let E=u.indexOf(M);u[E]=u[u.length-1],u.pop(),M.destroy()}}function C(M){c.remove(M)}function O(){c.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:x,acquireProgram:T,releaseProgram:D,releaseShaderCache:C,programs:u,dispose:O}}function zL(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function GL(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Mb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function bb(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,p,g,y,m){let h=n[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:y,group:m},n[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=y,h.group=m),e++,h}function a(d,f,p,g,y,m){let h=o(d,f,p,g,y,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function c(d,f,p,g,y,m){let h=o(d,f,p,g,y,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function l(d,f){t.length>1&&t.sort(d||GL),i.length>1&&i.sort(f||Mb),r.length>1&&r.sort(f||Mb)}function u(){for(let d=e,f=n.length;d<f;d++){let p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function jL(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new bb,n.set(i,[o])):r>=s.length?(o=new bb,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function WL(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Ye};break;case"SpotLight":t={position:new L,direction:new L,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new L,halfWidth:new L,halfHeight:new L};break}return n[e.id]=t,t}}}function $L(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var qL=0;function XL(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function YL(n){let e=new WL,t=$L(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new L);let r=new L,s=new It,o=new It;function a(l){let u=0,d=0,f=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,g=0,y=0,m=0,h=0,b=0,S=0,x=0,T=0,D=0,C=0;l.sort(XL);for(let M=0,E=l.length;M<E;M++){let A=l[M],U=A.color,z=A.intensity,X=A.distance,j=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=U.r*z,d+=U.g*z,f+=U.b*z;else if(A.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(A.sh.coefficients[$],z);C++}else if(A.isDirectionalLight){let $=e.get(A);if($.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let Z=A.shadow,V=t.get(A);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,i.directionalShadow[p]=V,i.directionalShadowMap[p]=j,i.directionalShadowMatrix[p]=A.shadow.matrix,b++}i.directional[p]=$,p++}else if(A.isSpotLight){let $=e.get(A);$.position.setFromMatrixPosition(A.matrixWorld),$.color.copy(U).multiplyScalar(z),$.distance=X,$.coneCos=Math.cos(A.angle),$.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),$.decay=A.decay,i.spot[y]=$;let Z=A.shadow;if(A.map&&(i.spotLightMap[T]=A.map,T++,Z.updateMatrices(A),A.castShadow&&D++),i.spotLightMatrix[y]=Z.matrix,A.castShadow){let V=t.get(A);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,i.spotShadow[y]=V,i.spotShadowMap[y]=j,x++}y++}else if(A.isRectAreaLight){let $=e.get(A);$.color.copy(U).multiplyScalar(z),$.halfWidth.set(A.width*.5,0,0),$.halfHeight.set(0,A.height*.5,0),i.rectArea[m]=$,m++}else if(A.isPointLight){let $=e.get(A);if($.color.copy(A.color).multiplyScalar(A.intensity),$.distance=A.distance,$.decay=A.decay,A.castShadow){let Z=A.shadow,V=t.get(A);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,V.shadowCameraNear=Z.camera.near,V.shadowCameraFar=Z.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=j,i.pointShadowMatrix[g]=A.shadow.matrix,S++}i.point[g]=$,g++}else if(A.isHemisphereLight){let $=e.get(A);$.skyColor.copy(A.color).multiplyScalar(z),$.groundColor.copy(A.groundColor).multiplyScalar(z),i.hemi[h]=$,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=se.LTC_FLOAT_1,i.rectAreaLTC2=se.LTC_FLOAT_2):(i.rectAreaLTC1=se.LTC_HALF_1,i.rectAreaLTC2=se.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;let O=i.hash;(O.directionalLength!==p||O.pointLength!==g||O.spotLength!==y||O.rectAreaLength!==m||O.hemiLength!==h||O.numDirectionalShadows!==b||O.numPointShadows!==S||O.numSpotShadows!==x||O.numSpotMaps!==T||O.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=x+T-D,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=C,O.directionalLength=p,O.pointLength=g,O.spotLength=y,O.rectAreaLength=m,O.hemiLength=h,O.numDirectionalShadows=b,O.numPointShadows=S,O.numSpotShadows=x,O.numSpotMaps=T,O.numLightProbes=C,i.version=qL++)}function c(l,u){let d=0,f=0,p=0,g=0,y=0,m=u.matrixWorldInverse;for(let h=0,b=l.length;h<b;h++){let S=l[h];if(S.isDirectionalLight){let x=i.directional[d];x.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),d++}else if(S.isSpotLight){let x=i.spot[p];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),p++}else if(S.isRectAreaLight){let x=i.rectArea[g];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){let x=i.point[f];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){let x=i.hemi[y];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(m),y++}}}return{setup:a,setupView:c,state:i}}function wb(n){let e=new YL(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function ZL(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new wb(n),e.set(r,[a])):s>=o.length?(a=new wb(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var KL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,JL=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function QL(n,e,t){let i=new _a,r=new Ue,s=new Ue,o=new Tt,a=new Mf({depthPacking:GM}),c=new bf,l={},u=t.maxTextureSize,d={[dr]:En,[En]:dr,[Vi]:Vi},f=new Ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:KL,fragmentShader:JL}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new xi;g.setAttribute("position",new Gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new An(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yv;let h=this.type;this.render=function(D,C,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||D.length===0)return;let M=n.getRenderTarget(),E=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),U=n.state;U.setBlending(hr),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let z=h!==Bi&&this.type===Bi,X=h===Bi&&this.type!==Bi;for(let j=0,$=D.length;j<$;j++){let Z=D[j],V=Z.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);let oe=V.getFrameExtents();if(r.multiply(oe),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/oe.x),r.x=s.x*oe.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/oe.y),r.y=s.y*oe.y,V.mapSize.y=s.y)),V.map===null||z===!0||X===!0){let we=this.type!==Bi?{minFilter:ni,magFilter:ni}:{};V.map!==null&&V.map.dispose(),V.map=new Ui(r.x,r.y,we),V.map.texture.name=Z.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();let de=V.getViewportCount();for(let we=0;we<de;we++){let Ke=V.getViewport(we);o.set(s.x*Ke.x,s.y*Ke.y,s.x*Ke.z,s.y*Ke.w),U.viewport(o),V.updateMatrices(Z,we),i=V.getFrustum(),x(C,O,V.camera,Z,this.type)}V.isPointLightShadow!==!0&&this.type===Bi&&b(V,O),V.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(M,E,A)};function b(D,C){let O=e.update(y);f.defines.VSM_SAMPLES!==D.blurSamples&&(f.defines.VSM_SAMPLES=D.blurSamples,p.defines.VSM_SAMPLES=D.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Ui(r.x,r.y)),f.uniforms.shadow_pass.value=D.map.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(C,null,O,f,y,null),p.uniforms.shadow_pass.value=D.mapPass.texture,p.uniforms.resolution.value=D.mapSize,p.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(C,null,O,p,y,null)}function S(D,C,O,M){let E=null,A=O.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(A!==void 0)E=A;else if(E=O.isPointLight===!0?c:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let U=E.uuid,z=C.uuid,X=l[U];X===void 0&&(X={},l[U]=X);let j=X[z];j===void 0&&(j=E.clone(),X[z]=j,C.addEventListener("dispose",T)),E=j}if(E.visible=C.visible,E.wireframe=C.wireframe,M===Bi?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:d[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,O.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let U=n.properties.get(E);U.light=O}return E}function x(D,C,O,M,E){if(D.visible===!1)return;if(D.layers.test(C.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&E===Bi)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,D.matrixWorld);let z=e.update(D),X=D.material;if(Array.isArray(X)){let j=z.groups;for(let $=0,Z=j.length;$<Z;$++){let V=j[$],oe=X[V.materialIndex];if(oe&&oe.visible){let de=S(D,oe,M,E);D.onBeforeShadow(n,D,C,O,z,de,V),n.renderBufferDirect(O,null,z,de,D,V),D.onAfterShadow(n,D,C,O,z,de,V)}}}else if(X.visible){let j=S(D,X,M,E);D.onBeforeShadow(n,D,C,O,z,j,null),n.renderBufferDirect(O,null,z,j,D,null),D.onAfterShadow(n,D,C,O,z,j,null)}}let U=D.children;for(let z=0,X=U.length;z<X;z++)x(U[z],C,O,M,E)}function T(D){D.target.removeEventListener("dispose",T);for(let O in l){let M=l[O],E=D.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}var eF={[Of]:Lf,[Ff]:Bf,[kf]:Vf,[Bs]:Uf,[Lf]:Of,[Bf]:Ff,[Vf]:kf,[Uf]:Bs};function tF(n,e){function t(){let R=!1,ne=new Tt,re=null,he=new Tt(0,0,0,0);return{setMask:function(J){re!==J&&!R&&(n.colorMask(J,J,J,J),re=J)},setLocked:function(J){R=J},setClear:function(J,q,ge,Be,_t){_t===!0&&(J*=Be,q*=Be,ge*=Be),ne.set(J,q,ge,Be),he.equals(ne)===!1&&(n.clearColor(J,q,ge,Be),he.copy(ne))},reset:function(){R=!1,re=null,he.set(-1,0,0,0)}}}function i(){let R=!1,ne=!1,re=null,he=null,J=null;return{setReversed:function(q){if(ne!==q){let ge=e.get("EXT_clip_control");q?ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.ZERO_TO_ONE_EXT):ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.NEGATIVE_ONE_TO_ONE_EXT),ne=q;let Be=J;J=null,this.setClear(Be)}},getReversed:function(){return ne},setTest:function(q){q?K(n.DEPTH_TEST):pe(n.DEPTH_TEST)},setMask:function(q){re!==q&&!R&&(n.depthMask(q),re=q)},setFunc:function(q){if(ne&&(q=eF[q]),he!==q){switch(q){case Of:n.depthFunc(n.NEVER);break;case Lf:n.depthFunc(n.ALWAYS);break;case Ff:n.depthFunc(n.LESS);break;case Bs:n.depthFunc(n.LEQUAL);break;case kf:n.depthFunc(n.EQUAL);break;case Uf:n.depthFunc(n.GEQUAL);break;case Bf:n.depthFunc(n.GREATER);break;case Vf:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}he=q}},setLocked:function(q){R=q},setClear:function(q){J!==q&&(ne&&(q=1-q),n.clearDepth(q),J=q)},reset:function(){R=!1,re=null,he=null,J=null,ne=!1}}}function r(){let R=!1,ne=null,re=null,he=null,J=null,q=null,ge=null,Be=null,_t=null;return{setTest:function(lt){R||(lt?K(n.STENCIL_TEST):pe(n.STENCIL_TEST))},setMask:function(lt){ne!==lt&&!R&&(n.stencilMask(lt),ne=lt)},setFunc:function(lt,Gi,Mi){(re!==lt||he!==Gi||J!==Mi)&&(n.stencilFunc(lt,Gi,Mi),re=lt,he=Gi,J=Mi)},setOp:function(lt,Gi,Mi){(q!==lt||ge!==Gi||Be!==Mi)&&(n.stencilOp(lt,Gi,Mi),q=lt,ge=Gi,Be=Mi)},setLocked:function(lt){R=lt},setClear:function(lt){_t!==lt&&(n.clearStencil(lt),_t=lt)},reset:function(){R=!1,ne=null,re=null,he=null,J=null,q=null,ge=null,Be=null,_t=null}}}let s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap,u={},d={},f=new WeakMap,p=[],g=null,y=!1,m=null,h=null,b=null,S=null,x=null,T=null,D=null,C=new Ye(0,0,0),O=0,M=!1,E=null,A=null,U=null,z=null,X=null,j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,Z=0,V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(V)[1]),$=Z>=1):V.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),$=Z>=2);let oe=null,de={},we=n.getParameter(n.SCISSOR_BOX),Ke=n.getParameter(n.VIEWPORT),yt=new Tt().fromArray(we),Et=new Tt().fromArray(Ke);function ct(R,ne,re,he){let J=new Uint8Array(4),q=n.createTexture();n.bindTexture(R,q),n.texParameteri(R,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(R,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ge=0;ge<re;ge++)R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY?n.texImage3D(ne,0,n.RGBA,1,1,he,0,n.RGBA,n.UNSIGNED_BYTE,J):n.texImage2D(ne+ge,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,J);return q}let W={};W[n.TEXTURE_2D]=ct(n.TEXTURE_2D,n.TEXTURE_2D,1),W[n.TEXTURE_CUBE_MAP]=ct(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[n.TEXTURE_2D_ARRAY]=ct(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),W[n.TEXTURE_3D]=ct(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(n.DEPTH_TEST),o.setFunc(Bs),Re(!1),ve(Xv),K(n.CULL_FACE),St(hr);function K(R){u[R]!==!0&&(n.enable(R),u[R]=!0)}function pe(R){u[R]!==!1&&(n.disable(R),u[R]=!1)}function Le(R,ne){return d[R]!==ne?(n.bindFramebuffer(R,ne),d[R]=ne,R===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ne),R===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ne),!0):!1}function be(R,ne){let re=p,he=!1;if(R){re=f.get(ne),re===void 0&&(re=[],f.set(ne,re));let J=R.textures;if(re.length!==J.length||re[0]!==n.COLOR_ATTACHMENT0){for(let q=0,ge=J.length;q<ge;q++)re[q]=n.COLOR_ATTACHMENT0+q;re.length=J.length,he=!0}}else re[0]!==n.BACK&&(re[0]=n.BACK,he=!0);he&&n.drawBuffers(re)}function Qe(R){return g!==R?(n.useProgram(R),g=R,!0):!1}let on={[jr]:n.FUNC_ADD,[mM]:n.FUNC_SUBTRACT,[gM]:n.FUNC_REVERSE_SUBTRACT};on[vM]=n.MIN,on[yM]=n.MAX;let I={[_M]:n.ZERO,[xM]:n.ONE,[EM]:n.SRC_COLOR,[hf]:n.SRC_ALPHA,[CM]:n.SRC_ALPHA_SATURATE,[wM]:n.DST_COLOR,[MM]:n.DST_ALPHA,[SM]:n.ONE_MINUS_SRC_COLOR,[pf]:n.ONE_MINUS_SRC_ALPHA,[TM]:n.ONE_MINUS_DST_COLOR,[bM]:n.ONE_MINUS_DST_ALPHA,[DM]:n.CONSTANT_COLOR,[IM]:n.ONE_MINUS_CONSTANT_COLOR,[AM]:n.CONSTANT_ALPHA,[RM]:n.ONE_MINUS_CONSTANT_ALPHA};function St(R,ne,re,he,J,q,ge,Be,_t,lt){if(R===hr){y===!0&&(pe(n.BLEND),y=!1);return}if(y===!1&&(K(n.BLEND),y=!0),R!==pM){if(R!==m||lt!==M){if((h!==jr||x!==jr)&&(n.blendEquation(n.FUNC_ADD),h=jr,x=jr),lt)switch(R){case Us:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zv:n.blendFunc(n.ONE,n.ONE);break;case Kv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Jv:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case Us:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zv:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Kv:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Jv:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}b=null,S=null,T=null,D=null,C.set(0,0,0),O=0,m=R,M=lt}return}J=J||ne,q=q||re,ge=ge||he,(ne!==h||J!==x)&&(n.blendEquationSeparate(on[ne],on[J]),h=ne,x=J),(re!==b||he!==S||q!==T||ge!==D)&&(n.blendFuncSeparate(I[re],I[he],I[q],I[ge]),b=re,S=he,T=q,D=ge),(Be.equals(C)===!1||_t!==O)&&(n.blendColor(Be.r,Be.g,Be.b,_t),C.copy(Be),O=_t),m=R,M=!1}function ze(R,ne){R.side===Vi?pe(n.CULL_FACE):K(n.CULL_FACE);let re=R.side===En;ne&&(re=!re),Re(re),R.blending===Us&&R.transparent===!1?St(hr):St(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),o.setFunc(R.depthFunc),o.setTest(R.depthTest),o.setMask(R.depthWrite),s.setMask(R.colorWrite);let he=R.stencilWrite;a.setTest(he),he&&(a.setMask(R.stencilWriteMask),a.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),a.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),ye(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?K(n.SAMPLE_ALPHA_TO_COVERAGE):pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Re(R){E!==R&&(R?n.frontFace(n.CW):n.frontFace(n.CCW),E=R)}function ve(R){R!==dM?(K(n.CULL_FACE),R!==A&&(R===Xv?n.cullFace(n.BACK):R===fM?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pe(n.CULL_FACE),A=R}function Mt(R){R!==U&&($&&n.lineWidth(R),U=R)}function ye(R,ne,re){R?(K(n.POLYGON_OFFSET_FILL),(z!==ne||X!==re)&&(n.polygonOffset(ne,re),z=ne,X=re)):pe(n.POLYGON_OFFSET_FILL)}function $e(R){R?K(n.SCISSOR_TEST):pe(n.SCISSOR_TEST)}function qt(R){R===void 0&&(R=n.TEXTURE0+j-1),oe!==R&&(n.activeTexture(R),oe=R)}function At(R,ne,re){re===void 0&&(oe===null?re=n.TEXTURE0+j-1:re=oe);let he=de[re];he===void 0&&(he={type:void 0,texture:void 0},de[re]=he),(he.type!==R||he.texture!==ne)&&(oe!==re&&(n.activeTexture(re),oe=re),n.bindTexture(R,ne||W[R]),he.type=R,he.texture=ne)}function w(){let R=de[oe];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function v(){try{n.compressedTexImage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function G(){try{n.texSubImage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Y(){try{n.texSubImage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function H(){try{n.compressedTexSubImage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Se(){try{n.compressedTexSubImage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ie(){try{n.texStorage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function _e(){try{n.texStorage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function xe(){try{n.texImage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function te(){try{n.texImage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function le(R){yt.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),yt.copy(R))}function Ae(R){Et.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),Et.copy(R))}function Ee(R,ne){let re=l.get(ne);re===void 0&&(re=new WeakMap,l.set(ne,re));let he=re.get(R);he===void 0&&(he=n.getUniformBlockIndex(ne,R.name),re.set(R,he))}function ae(R,ne){let he=l.get(ne).get(R);c.get(ne)!==he&&(n.uniformBlockBinding(ne,he,R.__bindingPointIndex),c.set(ne,he))}function We(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},oe=null,de={},d={},f=new WeakMap,p=[],g=null,y=!1,m=null,h=null,b=null,S=null,x=null,T=null,D=null,C=new Ye(0,0,0),O=0,M=!1,E=null,A=null,U=null,z=null,X=null,yt.set(0,0,n.canvas.width,n.canvas.height),Et.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:K,disable:pe,bindFramebuffer:Le,drawBuffers:be,useProgram:Qe,setBlending:St,setMaterial:ze,setFlipSided:Re,setCullFace:ve,setLineWidth:Mt,setPolygonOffset:ye,setScissorTest:$e,activeTexture:qt,bindTexture:At,unbindTexture:w,compressedTexImage2D:v,compressedTexImage3D:F,texImage2D:xe,texImage3D:te,updateUBOMapping:Ee,uniformBlockBinding:ae,texStorage2D:ie,texStorage3D:_e,texSubImage2D:G,texSubImage3D:Y,compressedTexSubImage2D:H,compressedTexSubImage3D:Se,scissor:le,viewport:Ae,reset:We}}function nF(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ue,u=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,v){return p?new OffscreenCanvas(w,v):Kc("canvas")}function y(w,v,F){let G=1,Y=At(w);if((Y.width>F||Y.height>F)&&(G=F/Math.max(Y.width,Y.height)),G<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let H=Math.floor(G*Y.width),Se=Math.floor(G*Y.height);d===void 0&&(d=g(H,Se));let ie=v?g(H,Se):d;return ie.width=H,ie.height=Se,ie.getContext("2d").drawImage(w,0,0,H,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+H+"x"+Se+")."),ie}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),w;return w}function m(w){return w.generateMipmaps}function h(w){n.generateMipmap(w)}function b(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(w,v,F,G,Y=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let H=v;if(v===n.RED&&(F===n.FLOAT&&(H=n.R32F),F===n.HALF_FLOAT&&(H=n.R16F),F===n.UNSIGNED_BYTE&&(H=n.R8)),v===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(H=n.R8UI),F===n.UNSIGNED_SHORT&&(H=n.R16UI),F===n.UNSIGNED_INT&&(H=n.R32UI),F===n.BYTE&&(H=n.R8I),F===n.SHORT&&(H=n.R16I),F===n.INT&&(H=n.R32I)),v===n.RG&&(F===n.FLOAT&&(H=n.RG32F),F===n.HALF_FLOAT&&(H=n.RG16F),F===n.UNSIGNED_BYTE&&(H=n.RG8)),v===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(H=n.RG8UI),F===n.UNSIGNED_SHORT&&(H=n.RG16UI),F===n.UNSIGNED_INT&&(H=n.RG32UI),F===n.BYTE&&(H=n.RG8I),F===n.SHORT&&(H=n.RG16I),F===n.INT&&(H=n.RG32I)),v===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(H=n.RGB8UI),F===n.UNSIGNED_SHORT&&(H=n.RGB16UI),F===n.UNSIGNED_INT&&(H=n.RGB32UI),F===n.BYTE&&(H=n.RGB8I),F===n.SHORT&&(H=n.RGB16I),F===n.INT&&(H=n.RGB32I)),v===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(H=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(H=n.RGBA16UI),F===n.UNSIGNED_INT&&(H=n.RGBA32UI),F===n.BYTE&&(H=n.RGBA8I),F===n.SHORT&&(H=n.RGBA16I),F===n.INT&&(H=n.RGBA32I)),v===n.RGB&&(F===n.UNSIGNED_INT_5_9_9_9_REV&&(H=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(H=n.R11F_G11F_B10F)),v===n.RGBA){let Se=Y?Yc:rt.getTransfer(G);F===n.FLOAT&&(H=n.RGBA32F),F===n.HALF_FLOAT&&(H=n.RGBA16F),F===n.UNSIGNED_BYTE&&(H=Se===ft?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(H=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(H=n.RGB5_A1)}return(H===n.R16F||H===n.R32F||H===n.RG16F||H===n.RG32F||H===n.RGBA16F||H===n.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function x(w,v){let F;return w?v===null||v===Qr||v===Ma?F=n.DEPTH24_STENCIL8:v===Hi?F=n.DEPTH32F_STENCIL8:v===Ea&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Qr||v===Ma?F=n.DEPTH_COMPONENT24:v===Hi?F=n.DEPTH_COMPONENT32F:v===Ea&&(F=n.DEPTH_COMPONENT16),F}function T(w,v){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==ni&&w.minFilter!==yi?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function D(w){let v=w.target;v.removeEventListener("dispose",D),O(v),v.isVideoTexture&&u.delete(v)}function C(w){let v=w.target;v.removeEventListener("dispose",C),E(v)}function O(w){let v=i.get(w);if(v.__webglInit===void 0)return;let F=w.source,G=f.get(F);if(G){let Y=G[v.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&M(w),Object.keys(G).length===0&&f.delete(F)}i.remove(w)}function M(w){let v=i.get(w);n.deleteTexture(v.__webglTexture);let F=w.source,G=f.get(F);delete G[v.__cacheKey],o.memory.textures--}function E(w){let v=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(v.__webglFramebuffer[G]))for(let Y=0;Y<v.__webglFramebuffer[G].length;Y++)n.deleteFramebuffer(v.__webglFramebuffer[G][Y]);else n.deleteFramebuffer(v.__webglFramebuffer[G]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[G])}else{if(Array.isArray(v.__webglFramebuffer))for(let G=0;G<v.__webglFramebuffer.length;G++)n.deleteFramebuffer(v.__webglFramebuffer[G]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let G=0;G<v.__webglColorRenderbuffer.length;G++)v.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[G]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let F=w.textures;for(let G=0,Y=F.length;G<Y;G++){let H=i.get(F[G]);H.__webglTexture&&(n.deleteTexture(H.__webglTexture),o.memory.textures--),i.remove(F[G])}i.remove(w)}let A=0;function U(){A=0}function z(){let w=A;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),A+=1,w}function X(w){let v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function j(w,v){let F=i.get(w);if(w.isVideoTexture&&$e(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&F.__version!==w.version){let G=w.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(F,w,v);return}}else w.isExternalTexture&&(F.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+v)}function $(w,v){let F=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){W(F,w,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+v)}function Z(w,v){let F=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){W(F,w,v);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+v)}function V(w,v){let F=i.get(w);if(w.version>0&&F.__version!==w.version){K(F,w,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+v)}let oe={[mf]:n.REPEAT,[Gr]:n.CLAMP_TO_EDGE,[gf]:n.MIRRORED_REPEAT},de={[ni]:n.NEAREST,[HM]:n.NEAREST_MIPMAP_NEAREST,[_l]:n.NEAREST_MIPMAP_LINEAR,[yi]:n.LINEAR,[Gf]:n.LINEAR_MIPMAP_NEAREST,[Jr]:n.LINEAR_MIPMAP_LINEAR},we={[WM]:n.NEVER,[KM]:n.ALWAYS,[$M]:n.LESS,[ly]:n.LEQUAL,[qM]:n.EQUAL,[ZM]:n.GEQUAL,[XM]:n.GREATER,[YM]:n.NOTEQUAL};function Ke(w,v){if(v.type===Hi&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===yi||v.magFilter===Gf||v.magFilter===_l||v.magFilter===Jr||v.minFilter===yi||v.minFilter===Gf||v.minFilter===_l||v.minFilter===Jr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,oe[v.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,oe[v.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,oe[v.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,de[v.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,de[v.minFilter]),v.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,we[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===ni||v.minFilter!==_l&&v.minFilter!==Jr||v.type===Hi&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function yt(w,v){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",D));let G=v.source,Y=f.get(G);Y===void 0&&(Y={},f.set(G,Y));let H=X(v);if(H!==w.__cacheKey){Y[H]===void 0&&(Y[H]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),Y[H].usedTimes++;let Se=Y[w.__cacheKey];Se!==void 0&&(Y[w.__cacheKey].usedTimes--,Se.usedTimes===0&&M(v)),w.__cacheKey=H,w.__webglTexture=Y[H].texture}return F}function Et(w,v,F){return Math.floor(Math.floor(w/F)/v)}function ct(w,v,F,G){let H=w.updateRanges;if(H.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,F,G,v.data);else{H.sort((te,le)=>te.start-le.start);let Se=0;for(let te=1;te<H.length;te++){let le=H[Se],Ae=H[te],Ee=le.start+le.count,ae=Et(Ae.start,v.width,4),We=Et(le.start,v.width,4);Ae.start<=Ee+1&&ae===We&&Et(Ae.start+Ae.count-1,v.width,4)===ae?le.count=Math.max(le.count,Ae.start+Ae.count-le.start):(++Se,H[Se]=Ae)}H.length=Se+1;let ie=n.getParameter(n.UNPACK_ROW_LENGTH),_e=n.getParameter(n.UNPACK_SKIP_PIXELS),xe=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let te=0,le=H.length;te<le;te++){let Ae=H[te],Ee=Math.floor(Ae.start/4),ae=Math.ceil(Ae.count/4),We=Ee%v.width,R=Math.floor(Ee/v.width),ne=ae,re=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,We),n.pixelStorei(n.UNPACK_SKIP_ROWS,R),t.texSubImage2D(n.TEXTURE_2D,0,We,R,ne,re,F,G,v.data)}w.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ie),n.pixelStorei(n.UNPACK_SKIP_PIXELS,_e),n.pixelStorei(n.UNPACK_SKIP_ROWS,xe)}}function W(w,v,F){let G=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(G=n.TEXTURE_3D);let Y=yt(w,v),H=v.source;t.bindTexture(G,w.__webglTexture,n.TEXTURE0+F);let Se=i.get(H);if(H.version!==Se.__version||Y===!0){t.activeTexture(n.TEXTURE0+F);let ie=rt.getPrimaries(rt.workingColorSpace),_e=v.colorSpace===mr?null:rt.getPrimaries(v.colorSpace),xe=v.colorSpace===mr||ie===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let te=y(v.image,!1,r.maxTextureSize);te=qt(v,te);let le=s.convert(v.format,v.colorSpace),Ae=s.convert(v.type),Ee=S(v.internalFormat,le,Ae,v.colorSpace,v.isVideoTexture);Ke(G,v);let ae,We=v.mipmaps,R=v.isVideoTexture!==!0,ne=Se.__version===void 0||Y===!0,re=H.dataReady,he=T(v,te);if(v.isDepthTexture)Ee=x(v.format===ba,v.type),ne&&(R?t.texStorage2D(n.TEXTURE_2D,1,Ee,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,Ee,te.width,te.height,0,le,Ae,null));else if(v.isDataTexture)if(We.length>0){R&&ne&&t.texStorage2D(n.TEXTURE_2D,he,Ee,We[0].width,We[0].height);for(let J=0,q=We.length;J<q;J++)ae=We[J],R?re&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,ae.width,ae.height,le,Ae,ae.data):t.texImage2D(n.TEXTURE_2D,J,Ee,ae.width,ae.height,0,le,Ae,ae.data);v.generateMipmaps=!1}else R?(ne&&t.texStorage2D(n.TEXTURE_2D,he,Ee,te.width,te.height),re&&ct(v,te,le,Ae)):t.texImage2D(n.TEXTURE_2D,0,Ee,te.width,te.height,0,le,Ae,te.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){R&&ne&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,Ee,We[0].width,We[0].height,te.depth);for(let J=0,q=We.length;J<q;J++)if(ae=We[J],v.format!==ri)if(le!==null)if(R){if(re)if(v.layerUpdates.size>0){let ge=vy(ae.width,ae.height,v.format,v.type);for(let Be of v.layerUpdates){let _t=ae.data.subarray(Be*ge/ae.data.BYTES_PER_ELEMENT,(Be+1)*ge/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,Be,ae.width,ae.height,1,le,_t)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,ae.width,ae.height,te.depth,le,ae.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,Ee,ae.width,ae.height,te.depth,0,ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else R?re&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,ae.width,ae.height,te.depth,le,Ae,ae.data):t.texImage3D(n.TEXTURE_2D_ARRAY,J,Ee,ae.width,ae.height,te.depth,0,le,Ae,ae.data)}else{R&&ne&&t.texStorage2D(n.TEXTURE_2D,he,Ee,We[0].width,We[0].height);for(let J=0,q=We.length;J<q;J++)ae=We[J],v.format!==ri?le!==null?R?re&&t.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,ae.width,ae.height,le,ae.data):t.compressedTexImage2D(n.TEXTURE_2D,J,Ee,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):R?re&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,ae.width,ae.height,le,Ae,ae.data):t.texImage2D(n.TEXTURE_2D,J,Ee,ae.width,ae.height,0,le,Ae,ae.data)}else if(v.isDataArrayTexture)if(R){if(ne&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,Ee,te.width,te.height,te.depth),re)if(v.layerUpdates.size>0){let J=vy(te.width,te.height,v.format,v.type);for(let q of v.layerUpdates){let ge=te.data.subarray(q*J/te.data.BYTES_PER_ELEMENT,(q+1)*J/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,q,te.width,te.height,1,le,Ae,ge)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,le,Ae,te.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ee,te.width,te.height,te.depth,0,le,Ae,te.data);else if(v.isData3DTexture)R?(ne&&t.texStorage3D(n.TEXTURE_3D,he,Ee,te.width,te.height,te.depth),re&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,le,Ae,te.data)):t.texImage3D(n.TEXTURE_3D,0,Ee,te.width,te.height,te.depth,0,le,Ae,te.data);else if(v.isFramebufferTexture){if(ne)if(R)t.texStorage2D(n.TEXTURE_2D,he,Ee,te.width,te.height);else{let J=te.width,q=te.height;for(let ge=0;ge<he;ge++)t.texImage2D(n.TEXTURE_2D,ge,Ee,J,q,0,le,Ae,null),J>>=1,q>>=1}}else if(We.length>0){if(R&&ne){let J=At(We[0]);t.texStorage2D(n.TEXTURE_2D,he,Ee,J.width,J.height)}for(let J=0,q=We.length;J<q;J++)ae=We[J],R?re&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,le,Ae,ae):t.texImage2D(n.TEXTURE_2D,J,Ee,le,Ae,ae);v.generateMipmaps=!1}else if(R){if(ne){let J=At(te);t.texStorage2D(n.TEXTURE_2D,he,Ee,J.width,J.height)}re&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le,Ae,te)}else t.texImage2D(n.TEXTURE_2D,0,Ee,le,Ae,te);m(v)&&h(G),Se.__version=H.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function K(w,v,F){if(v.image.length!==6)return;let G=yt(w,v),Y=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+F);let H=i.get(Y);if(Y.version!==H.__version||G===!0){t.activeTexture(n.TEXTURE0+F);let Se=rt.getPrimaries(rt.workingColorSpace),ie=v.colorSpace===mr?null:rt.getPrimaries(v.colorSpace),_e=v.colorSpace===mr||Se===ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let xe=v.isCompressedTexture||v.image[0].isCompressedTexture,te=v.image[0]&&v.image[0].isDataTexture,le=[];for(let q=0;q<6;q++)!xe&&!te?le[q]=y(v.image[q],!0,r.maxCubemapSize):le[q]=te?v.image[q].image:v.image[q],le[q]=qt(v,le[q]);let Ae=le[0],Ee=s.convert(v.format,v.colorSpace),ae=s.convert(v.type),We=S(v.internalFormat,Ee,ae,v.colorSpace),R=v.isVideoTexture!==!0,ne=H.__version===void 0||G===!0,re=Y.dataReady,he=T(v,Ae);Ke(n.TEXTURE_CUBE_MAP,v);let J;if(xe){R&&ne&&t.texStorage2D(n.TEXTURE_CUBE_MAP,he,We,Ae.width,Ae.height);for(let q=0;q<6;q++){J=le[q].mipmaps;for(let ge=0;ge<J.length;ge++){let Be=J[ge];v.format!==ri?Ee!==null?R?re&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ge,0,0,Be.width,Be.height,Ee,Be.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ge,We,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ge,0,0,Be.width,Be.height,Ee,ae,Be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ge,We,Be.width,Be.height,0,Ee,ae,Be.data)}}}else{if(J=v.mipmaps,R&&ne){J.length>0&&he++;let q=At(le[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,he,We,q.width,q.height)}for(let q=0;q<6;q++)if(te){R?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,le[q].width,le[q].height,Ee,ae,le[q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,We,le[q].width,le[q].height,0,Ee,ae,le[q].data);for(let ge=0;ge<J.length;ge++){let _t=J[ge].image[q].image;R?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ge+1,0,0,_t.width,_t.height,Ee,ae,_t.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ge+1,We,_t.width,_t.height,0,Ee,ae,_t.data)}}else{R?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Ee,ae,le[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,We,Ee,ae,le[q]);for(let ge=0;ge<J.length;ge++){let Be=J[ge];R?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ge+1,0,0,Ee,ae,Be.image[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ge+1,We,Ee,ae,Be.image[q])}}}m(v)&&h(n.TEXTURE_CUBE_MAP),H.__version=Y.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function pe(w,v,F,G,Y,H){let Se=s.convert(F.format,F.colorSpace),ie=s.convert(F.type),_e=S(F.internalFormat,Se,ie,F.colorSpace),xe=i.get(v),te=i.get(F);if(te.__renderTarget=v,!xe.__hasExternalTextures){let le=Math.max(1,v.width>>H),Ae=Math.max(1,v.height>>H);Y===n.TEXTURE_3D||Y===n.TEXTURE_2D_ARRAY?t.texImage3D(Y,H,_e,le,Ae,v.depth,0,Se,ie,null):t.texImage2D(Y,H,_e,le,Ae,0,Se,ie,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),ye(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,Y,te.__webglTexture,0,Mt(v)):(Y===n.TEXTURE_2D||Y>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,Y,te.__webglTexture,H),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Le(w,v,F){if(n.bindRenderbuffer(n.RENDERBUFFER,w),v.depthBuffer){let G=v.depthTexture,Y=G&&G.isDepthTexture?G.type:null,H=x(v.stencilBuffer,Y),Se=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=Mt(v);ye(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,H,v.width,v.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,H,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,H,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Se,n.RENDERBUFFER,w)}else{let G=v.textures;for(let Y=0;Y<G.length;Y++){let H=G[Y],Se=s.convert(H.format,H.colorSpace),ie=s.convert(H.type),_e=S(H.internalFormat,Se,ie,H.colorSpace),xe=Mt(v);F&&ye(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,xe,_e,v.width,v.height):ye(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xe,_e,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,_e,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function be(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let G=i.get(v.depthTexture);G.__renderTarget=v,(!G.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),j(v.depthTexture,0);let Y=G.__webglTexture,H=Mt(v);if(v.depthTexture.format===pa)ye(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0,H):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0);else if(v.depthTexture.format===ba)ye(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0,H):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Qe(w){let v=i.get(w),F=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){let G=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),G){let Y=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,G.removeEventListener("dispose",Y)};G.addEventListener("dispose",Y),v.__depthDisposeCallback=Y}v.__boundDepthTexture=G}if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");let G=w.texture.mipmaps;G&&G.length>0?be(v.__webglFramebuffer[0],w):be(v.__webglFramebuffer,w)}else if(F){v.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[G]),v.__webglDepthbuffer[G]===void 0)v.__webglDepthbuffer[G]=n.createRenderbuffer(),Le(v.__webglDepthbuffer[G],w,!1);else{let Y=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=v.__webglDepthbuffer[G];n.bindRenderbuffer(n.RENDERBUFFER,H),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,H)}}else{let G=w.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Le(v.__webglDepthbuffer,w,!1);else{let Y=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,H),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,H)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function on(w,v,F){let G=i.get(w);v!==void 0&&pe(G.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Qe(w)}function I(w){let v=w.texture,F=i.get(w),G=i.get(v);w.addEventListener("dispose",C);let Y=w.textures,H=w.isWebGLCubeRenderTarget===!0,Se=Y.length>1;if(Se||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=v.version,o.memory.textures++),H){F.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[ie]=[];for(let _e=0;_e<v.mipmaps.length;_e++)F.__webglFramebuffer[ie][_e]=n.createFramebuffer()}else F.__webglFramebuffer[ie]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let ie=0;ie<v.mipmaps.length;ie++)F.__webglFramebuffer[ie]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(Se)for(let ie=0,_e=Y.length;ie<_e;ie++){let xe=i.get(Y[ie]);xe.__webglTexture===void 0&&(xe.__webglTexture=n.createTexture(),o.memory.textures++)}if(w.samples>0&&ye(w)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ie=0;ie<Y.length;ie++){let _e=Y[ie];F.__webglColorRenderbuffer[ie]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[ie]);let xe=s.convert(_e.format,_e.colorSpace),te=s.convert(_e.type),le=S(_e.internalFormat,xe,te,_e.colorSpace,w.isXRRenderTarget===!0),Ae=Mt(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,le,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.RENDERBUFFER,F.__webglColorRenderbuffer[ie])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Le(F.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(H){t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),Ke(n.TEXTURE_CUBE_MAP,v);for(let ie=0;ie<6;ie++)if(v.mipmaps&&v.mipmaps.length>0)for(let _e=0;_e<v.mipmaps.length;_e++)pe(F.__webglFramebuffer[ie][_e],w,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,_e);else pe(F.__webglFramebuffer[ie],w,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);m(v)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let ie=0,_e=Y.length;ie<_e;ie++){let xe=Y[ie],te=i.get(xe),le=n.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(le=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,te.__webglTexture),Ke(le,xe),pe(F.__webglFramebuffer,w,xe,n.COLOR_ATTACHMENT0+ie,le,0),m(xe)&&h(le)}t.unbindTexture()}else{let ie=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ie=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ie,G.__webglTexture),Ke(ie,v),v.mipmaps&&v.mipmaps.length>0)for(let _e=0;_e<v.mipmaps.length;_e++)pe(F.__webglFramebuffer[_e],w,v,n.COLOR_ATTACHMENT0,ie,_e);else pe(F.__webglFramebuffer,w,v,n.COLOR_ATTACHMENT0,ie,0);m(v)&&h(ie),t.unbindTexture()}w.depthBuffer&&Qe(w)}function St(w){let v=w.textures;for(let F=0,G=v.length;F<G;F++){let Y=v[F];if(m(Y)){let H=b(w),Se=i.get(Y).__webglTexture;t.bindTexture(H,Se),h(H),t.unbindTexture()}}}let ze=[],Re=[];function ve(w){if(w.samples>0){if(ye(w)===!1){let v=w.textures,F=w.width,G=w.height,Y=n.COLOR_BUFFER_BIT,H=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=i.get(w),ie=v.length>1;if(ie)for(let xe=0;xe<v.length;xe++)t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);let _e=w.texture.mipmaps;_e&&_e.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let xe=0;xe<v.length;xe++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Y|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Y|=n.STENCIL_BUFFER_BIT)),ie){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Se.__webglColorRenderbuffer[xe]);let te=i.get(v[xe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,te,0)}n.blitFramebuffer(0,0,F,G,0,0,F,G,Y,n.NEAREST),c===!0&&(ze.length=0,Re.length=0,ze.push(n.COLOR_ATTACHMENT0+xe),w.depthBuffer&&w.resolveDepthBuffer===!1&&(ze.push(H),Re.push(H),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Re)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ze))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ie)for(let xe=0;xe<v.length;xe++){t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,Se.__webglColorRenderbuffer[xe]);let te=i.get(v[xe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,te,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){let v=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function Mt(w){return Math.min(r.maxSamples,w.samples)}function ye(w){let v=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function $e(w){let v=o.render.frame;u.get(w)!==v&&(u.set(w,v),w.update())}function qt(w,v){let F=w.colorSpace,G=w.format,Y=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||F!==Vs&&F!==mr&&(rt.getTransfer(F)===ft?(G!==ri||Y!==Si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),v}function At(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=U,this.setTexture2D=j,this.setTexture2DArray=$,this.setTexture3D=Z,this.setTextureCube=V,this.rebindTextures=on,this.setupRenderTarget=I,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=Qe,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=ye}function iF(n,e){function t(i,r=mr){let s,o=rt.getTransfer(r);if(i===Si)return n.UNSIGNED_BYTE;if(i===Wf)return n.UNSIGNED_SHORT_4_4_4_4;if(i===$f)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ny)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===iy)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===ey)return n.BYTE;if(i===ty)return n.SHORT;if(i===Ea)return n.UNSIGNED_SHORT;if(i===jf)return n.INT;if(i===Qr)return n.UNSIGNED_INT;if(i===Hi)return n.FLOAT;if(i===Sa)return n.HALF_FLOAT;if(i===ry)return n.ALPHA;if(i===sy)return n.RGB;if(i===ri)return n.RGBA;if(i===pa)return n.DEPTH_COMPONENT;if(i===ba)return n.DEPTH_STENCIL;if(i===oy)return n.RED;if(i===qf)return n.RED_INTEGER;if(i===ay)return n.RG;if(i===Xf)return n.RG_INTEGER;if(i===Yf)return n.RGBA_INTEGER;if(i===xl||i===El||i===Sl||i===Ml)if(o===ft)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===xl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===El)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Sl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ml)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===xl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===El)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Sl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ml)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Zf||i===Kf||i===Jf||i===Qf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Zf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Kf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Jf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Qf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===eh||i===th||i===nh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===eh||i===th)return o===ft?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===nh)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ih||i===rh||i===sh||i===oh||i===ah||i===ch||i===lh||i===uh||i===dh||i===fh||i===hh||i===ph||i===mh||i===gh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ih)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===rh)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===sh)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===oh)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ah)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ch)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===lh)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===uh)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===dh)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===fh)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===hh)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ph)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===mh)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===gh)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===vh||i===yh||i===_h)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===vh)return o===ft?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===yh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===_h)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===xh||i===Eh||i===Sh||i===Mh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===xh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Eh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Sh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Mh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ma?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var rF=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sF=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ay=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new cl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Ei({vertexShader:rF,fragmentShader:sF,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new An(new ll(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ry=class extends ki{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,f=null,p=null,g=null,y=typeof XRWebGLBinding<"u",m=new Ay,h={},b=t.getContextAttributes(),S=null,x=null,T=[],D=[],C=new Ue,O=null,M=new dn;M.viewport=new Tt;let E=new dn;E.viewport=new Tt;let A=[M,E],U=new Pf,z=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let K=T[W];return K===void 0&&(K=new ya,T[W]=K),K.getTargetRaySpace()},this.getControllerGrip=function(W){let K=T[W];return K===void 0&&(K=new ya,T[W]=K),K.getGripSpace()},this.getHand=function(W){let K=T[W];return K===void 0&&(K=new ya,T[W]=K),K.getHandSpace()};function j(W){let K=D.indexOf(W.inputSource);if(K===-1)return;let pe=T[K];pe!==void 0&&(pe.update(W.inputSource,W.frame,l||o),pe.dispatchEvent({type:W.type,data:W.inputSource}))}function $(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",Z);for(let W=0;W<T.length;W++){let K=D[W];K!==null&&(D[W]=null,T[W].disconnect(K))}z=null,X=null,m.reset();for(let W in h)delete h[W];e.setRenderTarget(S),p=null,f=null,d=null,r=null,x=null,ct.stop(),i.isPresenting=!1,e.setPixelRatio(O),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=function(W){return qn(this,null,function*(){if(r=W,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",$),r.addEventListener("inputsourceschange",Z),b.xrCompatible!==!0&&(yield t.makeXRCompatible()),O=e.getPixelRatio(),e.getSize(C),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Le=null,be=null;b.depth&&(be=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=b.stencil?ba:pa,Le=b.stencil?Ma:Qr);let Qe={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(Qe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new Ui(f.textureWidth,f.textureHeight,{format:ri,type:Si,depthTexture:new al(f.textureWidth,f.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let pe={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,pe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Ui(p.framebufferWidth,p.framebufferHeight,{format:ri,type:Si,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=yield r.requestReferenceSpace(a),ct.setContext(r),ct.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Z(W){for(let K=0;K<W.removed.length;K++){let pe=W.removed[K],Le=D.indexOf(pe);Le>=0&&(D[Le]=null,T[Le].disconnect(pe))}for(let K=0;K<W.added.length;K++){let pe=W.added[K],Le=D.indexOf(pe);if(Le===-1){for(let Qe=0;Qe<T.length;Qe++)if(Qe>=D.length){D.push(pe),Le=Qe;break}else if(D[Qe]===null){D[Qe]=pe,Le=Qe;break}if(Le===-1)break}let be=T[Le];be&&be.connect(pe)}}let V=new L,oe=new L;function de(W,K,pe){V.setFromMatrixPosition(K.matrixWorld),oe.setFromMatrixPosition(pe.matrixWorld);let Le=V.distanceTo(oe),be=K.projectionMatrix.elements,Qe=pe.projectionMatrix.elements,on=be[14]/(be[10]-1),I=be[14]/(be[10]+1),St=(be[9]+1)/be[5],ze=(be[9]-1)/be[5],Re=(be[8]-1)/be[0],ve=(Qe[8]+1)/Qe[0],Mt=on*Re,ye=on*ve,$e=Le/(-Re+ve),qt=$e*-Re;if(K.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(qt),W.translateZ($e),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),be[10]===-1)W.projectionMatrix.copy(K.projectionMatrix),W.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let At=on+$e,w=I+$e,v=Mt-qt,F=ye+(Le-qt),G=St*I/w*At,Y=ze*I/w*At;W.projectionMatrix.makePerspective(v,F,G,Y,At,w),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function we(W,K){K===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(K.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let K=W.near,pe=W.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(pe=m.depthFar)),U.near=E.near=M.near=K,U.far=E.far=M.far=pe,(z!==U.near||X!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),z=U.near,X=U.far),U.layers.mask=W.layers.mask|6,M.layers.mask=U.layers.mask&3,E.layers.mask=U.layers.mask&5;let Le=W.parent,be=U.cameras;we(U,Le);for(let Qe=0;Qe<be.length;Qe++)we(be[Qe],Le);be.length===2?de(U,M,E):U.projectionMatrix.copy(M.projectionMatrix),Ke(W,U,Le)};function Ke(W,K,pe){pe===null?W.matrix.copy(K.matrixWorld):(W.matrix.copy(pe.matrixWorld),W.matrix.invert(),W.matrix.multiply(K.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(K.projectionMatrix),W.projectionMatrixInverse.copy(K.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=ma*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(W){c=W,f!==null&&(f.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(W){return h[W]};let yt=null;function Et(W,K){if(u=K.getViewerPose(l||o),g=K,u!==null){let pe=u.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let Le=!1;pe.length!==U.cameras.length&&(U.cameras.length=0,Le=!0);for(let I=0;I<pe.length;I++){let St=pe[I],ze=null;if(p!==null)ze=p.getViewport(St);else{let ve=d.getViewSubImage(f,St);ze=ve.viewport,I===0&&(e.setRenderTargetTextures(x,ve.colorTexture,ve.depthStencilTexture),e.setRenderTarget(x))}let Re=A[I];Re===void 0&&(Re=new dn,Re.layers.enable(I),Re.viewport=new Tt,A[I]=Re),Re.matrix.fromArray(St.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(St.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(ze.x,ze.y,ze.width,ze.height),I===0&&(U.matrix.copy(Re.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Le===!0&&U.cameras.push(Re)}let be=r.enabledFeatures;if(be&&be.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){d=i.getBinding();let I=d.getDepthInformation(pe[0]);I&&I.isValid&&I.texture&&m.init(I,r.renderState)}if(be&&be.includes("camera-access")&&y){e.state.unbindTexture(),d=i.getBinding();for(let I=0;I<pe.length;I++){let St=pe[I].camera;if(St){let ze=h[St];ze||(ze=new cl,h[St]=ze);let Re=d.getCameraImage(St);ze.sourceTexture=Re}}}}for(let pe=0;pe<T.length;pe++){let Le=D[pe],be=T[pe];Le!==null&&be!==void 0&&be.update(Le,K,l||o)}yt&&yt(W,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),g=null}let ct=new Tb;ct.setAnimationLoop(Et),this.setAnimationLoop=function(W){yt=W},this.dispose=function(){}}},Ys=new $r,oF=new It;function aF(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,py(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,b,S,x){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,x)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),y(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?c(m,h,b,S):h.isSpriteMaterial?l(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===En&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===En&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);let b=e.get(h),S=b.envMap,x=b.envMapRotation;S&&(m.envMap.value=S,Ys.copy(x),Ys.x*=-1,Ys.y*=-1,Ys.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ys.y*=-1,Ys.z*=-1),m.envMapRotation.value.setFromMatrix4(oF.makeRotationFromEuler(Ys)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function c(m,h,b,S){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*b,m.scale.value=S*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function l(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,b){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===En&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function y(m,h){let b=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function cF(n,e,t,i){let r={},s={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,S){let x=S.program;i.uniformBlockBinding(b,x)}function l(b,S){let x=r[b.id];x===void 0&&(g(b),x=u(b),r[b.id]=x,b.addEventListener("dispose",m));let T=S.program;i.updateUBOMapping(b,T);let D=e.render.frame;s[b.id]!==D&&(f(b),s[b.id]=D)}function u(b){let S=d();b.__bindingPointIndex=S;let x=n.createBuffer(),T=b.__size,D=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,T,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,x),x}function d(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let S=r[b.id],x=b.uniforms,T=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let D=0,C=x.length;D<C;D++){let O=Array.isArray(x[D])?x[D]:[x[D]];for(let M=0,E=O.length;M<E;M++){let A=O[M];if(p(A,D,M,T)===!0){let U=A.__offset,z=Array.isArray(A.value)?A.value:[A.value],X=0;for(let j=0;j<z.length;j++){let $=z[j],Z=y($);typeof $=="number"||typeof $=="boolean"?(A.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,U+X,A.__data)):$.isMatrix3?(A.__data[0]=$.elements[0],A.__data[1]=$.elements[1],A.__data[2]=$.elements[2],A.__data[3]=0,A.__data[4]=$.elements[3],A.__data[5]=$.elements[4],A.__data[6]=$.elements[5],A.__data[7]=0,A.__data[8]=$.elements[6],A.__data[9]=$.elements[7],A.__data[10]=$.elements[8],A.__data[11]=0):($.toArray(A.__data,X),X+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(b,S,x,T){let D=b.value,C=S+"_"+x;if(T[C]===void 0)return typeof D=="number"||typeof D=="boolean"?T[C]=D:T[C]=D.clone(),!0;{let O=T[C];if(typeof D=="number"||typeof D=="boolean"){if(O!==D)return T[C]=D,!0}else if(O.equals(D)===!1)return O.copy(D),!0}return!1}function g(b){let S=b.uniforms,x=0,T=16;for(let C=0,O=S.length;C<O;C++){let M=Array.isArray(S[C])?S[C]:[S[C]];for(let E=0,A=M.length;E<A;E++){let U=M[E],z=Array.isArray(U.value)?U.value:[U.value];for(let X=0,j=z.length;X<j;X++){let $=z[X],Z=y($),V=x%T,oe=V%Z.boundary,de=V+oe;x+=oe,de!==0&&T-de<Z.storage&&(x+=T-de),U.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=x,x+=Z.storage}}}let D=x%T;return D>0&&(x+=T-D),b.__size=x,b.__cache={},this}function y(b){let S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function m(b){let S=b.target;S.removeEventListener("dispose",m);let x=o.indexOf(S.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function h(){for(let b in r)n.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:c,update:l,dispose:h}}var Ih=class{constructor(e={}){let{canvas:t=JM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),y=new Int32Array(4),m=null,h=null,b=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,T=!1;this._outputColorSpace=un;let D=0,C=0,O=null,M=-1,E=null,A=new Tt,U=new Tt,z=null,X=new Ye(0),j=0,$=t.width,Z=t.height,V=1,oe=null,de=null,we=new Tt(0,0,$,Z),Ke=new Tt(0,0,$,Z),yt=!1,Et=new _a,ct=!1,W=!1,K=new It,pe=new L,Le=new Tt,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Qe=!1;function on(){return O===null?V:1}let I=i;function St(_,N){return t.getContext(_,N)}try{let _={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",J,!1),I===null){let N="webgl2";if(I=St(N,_),I===null)throw St(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let ze,Re,ve,Mt,ye,$e,qt,At,w,v,F,G,Y,H,Se,ie,_e,xe,te,le,Ae,Ee,ae,We;function R(){ze=new TO(I),ze.init(),Ee=new iF(I,ze),Re=new _O(I,ze,e,Ee),ve=new tF(I,ze),Re.reversedDepthBuffer&&f&&ve.buffers.depth.setReversed(!0),Mt=new IO(I),ye=new zL,$e=new nF(I,ze,ve,ye,Re,Ee,Mt),qt=new EO(x),At=new wO(x),w=new L1(I),ae=new vO(I,w),v=new CO(I,w,Mt,ae),F=new RO(I,v,w,Mt),te=new AO(I,Re,$e),ie=new xO(ye),G=new HL(x,qt,At,ze,Re,ae,ie),Y=new aF(x,ye),H=new jL,Se=new ZL(ze),xe=new gO(x,qt,At,ve,F,p,c),_e=new QL(x,F,Re),We=new cF(I,Mt,Re,ve),le=new yO(I,ze,Mt),Ae=new DO(I,ze,Mt),Mt.programs=G.programs,x.capabilities=Re,x.extensions=ze,x.properties=ye,x.renderLists=H,x.shadowMap=_e,x.state=ve,x.info=Mt}R();let ne=new Ry(x,I);this.xr=ne,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let _=ze.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=ze.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(_){_!==void 0&&(V=_,this.setSize($,Z,!1))},this.getSize=function(_){return _.set($,Z)},this.setSize=function(_,N,k=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=_,Z=N,t.width=Math.floor(_*V),t.height=Math.floor(N*V),k===!0&&(t.style.width=_+"px",t.style.height=N+"px"),this.setViewport(0,0,_,N)},this.getDrawingBufferSize=function(_){return _.set($*V,Z*V).floor()},this.setDrawingBufferSize=function(_,N,k){$=_,Z=N,V=k,t.width=Math.floor(_*k),t.height=Math.floor(N*k),this.setViewport(0,0,_,N)},this.getCurrentViewport=function(_){return _.copy(A)},this.getViewport=function(_){return _.copy(we)},this.setViewport=function(_,N,k,B){_.isVector4?we.set(_.x,_.y,_.z,_.w):we.set(_,N,k,B),ve.viewport(A.copy(we).multiplyScalar(V).round())},this.getScissor=function(_){return _.copy(Ke)},this.setScissor=function(_,N,k,B){_.isVector4?Ke.set(_.x,_.y,_.z,_.w):Ke.set(_,N,k,B),ve.scissor(U.copy(Ke).multiplyScalar(V).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(_){ve.setScissorTest(yt=_)},this.setOpaqueSort=function(_){oe=_},this.setTransparentSort=function(_){de=_},this.getClearColor=function(_){return _.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor(...arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha(...arguments)},this.clear=function(_=!0,N=!0,k=!0){let B=0;if(_){let P=!1;if(O!==null){let Q=O.texture.format;P=Q===Yf||Q===Xf||Q===qf}if(P){let Q=O.texture.type,ce=Q===Si||Q===Qr||Q===Ea||Q===Ma||Q===Wf||Q===$f,me=xe.getClearColor(),fe=xe.getClearAlpha(),Ie=me.r,Ne=me.g,Ce=me.b;ce?(g[0]=Ie,g[1]=Ne,g[2]=Ce,g[3]=fe,I.clearBufferuiv(I.COLOR,0,g)):(y[0]=Ie,y[1]=Ne,y[2]=Ce,y[3]=fe,I.clearBufferiv(I.COLOR,0,y))}else B|=I.COLOR_BUFFER_BIT}N&&(B|=I.DEPTH_BUFFER_BIT),k&&(B|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",J,!1),xe.dispose(),H.dispose(),Se.dispose(),ye.dispose(),qt.dispose(),At.dispose(),F.dispose(),ae.dispose(),We.dispose(),G.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",Mi),ne.removeEventListener("sessionend",Fy),ts.stop()};function re(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let _=Mt.autoReset,N=_e.enabled,k=_e.autoUpdate,B=_e.needsUpdate,P=_e.type;R(),Mt.autoReset=_,_e.enabled=N,_e.autoUpdate=k,_e.needsUpdate=B,_e.type=P}function J(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function q(_){let N=_.target;N.removeEventListener("dispose",q),ge(N)}function ge(_){Be(_),ye.remove(_)}function Be(_){let N=ye.get(_).programs;N!==void 0&&(N.forEach(function(k){G.releaseProgram(k)}),_.isShaderMaterial&&G.releaseShaderCache(_))}this.renderBufferDirect=function(_,N,k,B,P,Q){N===null&&(N=be);let ce=P.isMesh&&P.matrixWorld.determinant()<0,me=Fb(_,N,k,B,P);ve.setMaterial(B,ce);let fe=k.index,Ie=1;if(B.wireframe===!0){if(fe=v.getWireframeAttribute(k),fe===void 0)return;Ie=2}let Ne=k.drawRange,Ce=k.attributes.position,Je=Ne.start*Ie,ht=(Ne.start+Ne.count)*Ie;Q!==null&&(Je=Math.max(Je,Q.start*Ie),ht=Math.min(ht,(Q.start+Q.count)*Ie)),fe!==null?(Je=Math.max(Je,0),ht=Math.min(ht,fe.count)):Ce!=null&&(Je=Math.max(Je,0),ht=Math.min(ht,Ce.count));let Ct=ht-Je;if(Ct<0||Ct===1/0)return;ae.setup(P,B,me,k,fe);let xt,gt=le;if(fe!==null&&(xt=w.get(fe),gt=Ae,gt.setIndex(xt)),P.isMesh)B.wireframe===!0?(ve.setLineWidth(B.wireframeLinewidth*on()),gt.setMode(I.LINES)):gt.setMode(I.TRIANGLES);else if(P.isLine){let De=B.linewidth;De===void 0&&(De=1),ve.setLineWidth(De*on()),P.isLineSegments?gt.setMode(I.LINES):P.isLineLoop?gt.setMode(I.LINE_LOOP):gt.setMode(I.LINE_STRIP)}else P.isPoints?gt.setMode(I.POINTS):P.isSprite&&gt.setMode(I.TRIANGLES);if(P.isBatchedMesh)if(P._multiDrawInstances!==null)ga("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),gt.renderMultiDrawInstances(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount,P._multiDrawInstances);else if(ze.get("WEBGL_multi_draw"))gt.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else{let De=P._multiDrawStarts,bt=P._multiDrawCounts,st=P._multiDrawCount,Pn=fe?w.get(fe).bytesPerElement:1,Js=ye.get(B).currentProgram.getUniforms();for(let On=0;On<st;On++)Js.setValue(I,"_gl_DrawID",On),gt.render(De[On]/Pn,bt[On])}else if(P.isInstancedMesh)gt.renderInstances(Je,Ct,P.count);else if(k.isInstancedBufferGeometry){let De=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,bt=Math.min(k.instanceCount,De);gt.renderInstances(Je,Ct,bt)}else gt.render(Je,Ct)};function _t(_,N,k){_.transparent===!0&&_.side===Vi&&_.forceSinglePass===!1?(_.side=En,_.needsUpdate=!0,Tl(_,N,k),_.side=dr,_.needsUpdate=!0,Tl(_,N,k),_.side=Vi):Tl(_,N,k)}this.compile=function(_,N,k=null){k===null&&(k=_),h=Se.get(k),h.init(N),S.push(h),k.traverseVisible(function(P){P.isLight&&P.layers.test(N.layers)&&(h.pushLight(P),P.castShadow&&h.pushShadow(P))}),_!==k&&_.traverseVisible(function(P){P.isLight&&P.layers.test(N.layers)&&(h.pushLight(P),P.castShadow&&h.pushShadow(P))}),h.setupLights();let B=new Set;return _.traverse(function(P){if(!(P.isMesh||P.isPoints||P.isLine||P.isSprite))return;let Q=P.material;if(Q)if(Array.isArray(Q))for(let ce=0;ce<Q.length;ce++){let me=Q[ce];_t(me,k,P),B.add(me)}else _t(Q,k,P),B.add(Q)}),h=S.pop(),B},this.compileAsync=function(_,N,k=null){let B=this.compile(_,N,k);return new Promise(P=>{function Q(){if(B.forEach(function(ce){ye.get(ce).currentProgram.isReady()&&B.delete(ce)}),B.size===0){P(_);return}setTimeout(Q,10)}ze.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let lt=null;function Gi(_){lt&&lt(_)}function Mi(){ts.stop()}function Fy(){ts.start()}let ts=new Tb;ts.setAnimationLoop(Gi),typeof self<"u"&&ts.setContext(self),this.setAnimationLoop=function(_){lt=_,ne.setAnimationLoop(_),_===null?ts.stop():ts.start()},ne.addEventListener("sessionstart",Mi),ne.addEventListener("sessionend",Fy),this.render=function(_,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(N),N=ne.getCamera()),_.isScene===!0&&_.onBeforeRender(x,_,N,O),h=Se.get(_,S.length),h.init(N),S.push(h),K.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Et.setFromProjectionMatrix(K,vi,N.reversedDepth),W=this.localClippingEnabled,ct=ie.init(this.clippingPlanes,W),m=H.get(_,b.length),m.init(),b.push(m),ne.enabled===!0&&ne.isPresenting===!0){let Q=x.xr.getDepthSensingMesh();Q!==null&&zh(Q,N,-1/0,x.sortObjects)}zh(_,N,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(oe,de),Qe=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,Qe&&xe.addToRenderList(m,_),this.info.render.frame++,ct===!0&&ie.beginShadows();let k=h.state.shadowsArray;_e.render(k,_,N),ct===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();let B=m.opaque,P=m.transmissive;if(h.setupLights(),N.isArrayCamera){let Q=N.cameras;if(P.length>0)for(let ce=0,me=Q.length;ce<me;ce++){let fe=Q[ce];Uy(B,P,_,fe)}Qe&&xe.render(_);for(let ce=0,me=Q.length;ce<me;ce++){let fe=Q[ce];ky(m,_,fe,fe.viewport)}}else P.length>0&&Uy(B,P,_,N),Qe&&xe.render(_),ky(m,_,N);O!==null&&C===0&&($e.updateMultisampleRenderTarget(O),$e.updateRenderTargetMipmap(O)),_.isScene===!0&&_.onAfterRender(x,_,N),ae.resetDefaultState(),M=-1,E=null,S.pop(),S.length>0?(h=S[S.length-1],ct===!0&&ie.setGlobalState(x.clippingPlanes,h.state.camera)):h=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function zh(_,N,k,B){if(_.visible===!1)return;if(_.layers.test(N.layers)){if(_.isGroup)k=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(N);else if(_.isLight)h.pushLight(_),_.castShadow&&h.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||Et.intersectsSprite(_)){B&&Le.setFromMatrixPosition(_.matrixWorld).applyMatrix4(K);let ce=F.update(_),me=_.material;me.visible&&m.push(_,ce,me,k,Le.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||Et.intersectsObject(_))){let ce=F.update(_),me=_.material;if(B&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),Le.copy(_.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),Le.copy(ce.boundingSphere.center)),Le.applyMatrix4(_.matrixWorld).applyMatrix4(K)),Array.isArray(me)){let fe=ce.groups;for(let Ie=0,Ne=fe.length;Ie<Ne;Ie++){let Ce=fe[Ie],Je=me[Ce.materialIndex];Je&&Je.visible&&m.push(_,ce,Je,k,Le.z,Ce)}}else me.visible&&m.push(_,ce,me,k,Le.z,null)}}let Q=_.children;for(let ce=0,me=Q.length;ce<me;ce++)zh(Q[ce],N,k,B)}function ky(_,N,k,B){let P=_.opaque,Q=_.transmissive,ce=_.transparent;h.setupLightsView(k),ct===!0&&ie.setGlobalState(x.clippingPlanes,k),B&&ve.viewport(A.copy(B)),P.length>0&&wl(P,N,k),Q.length>0&&wl(Q,N,k),ce.length>0&&wl(ce,N,k),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Uy(_,N,k,B){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[B.id]===void 0&&(h.state.transmissionRenderTarget[B.id]=new Ui(1,1,{generateMipmaps:!0,type:ze.has("EXT_color_buffer_half_float")||ze.has("EXT_color_buffer_float")?Sa:Si,minFilter:Jr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));let Q=h.state.transmissionRenderTarget[B.id],ce=B.viewport||A;Q.setSize(ce.z*x.transmissionResolutionScale,ce.w*x.transmissionResolutionScale);let me=x.getRenderTarget(),fe=x.getActiveCubeFace(),Ie=x.getActiveMipmapLevel();x.setRenderTarget(Q),x.getClearColor(X),j=x.getClearAlpha(),j<1&&x.setClearColor(16777215,.5),x.clear(),Qe&&xe.render(k);let Ne=x.toneMapping;x.toneMapping=pr;let Ce=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),h.setupLightsView(B),ct===!0&&ie.setGlobalState(x.clippingPlanes,B),wl(_,k,B),$e.updateMultisampleRenderTarget(Q),$e.updateRenderTargetMipmap(Q),ze.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let ht=0,Ct=N.length;ht<Ct;ht++){let xt=N[ht],gt=xt.object,De=xt.geometry,bt=xt.material,st=xt.group;if(bt.side===Vi&&gt.layers.test(B.layers)){let Pn=bt.side;bt.side=En,bt.needsUpdate=!0,By(gt,k,B,De,bt,st),bt.side=Pn,bt.needsUpdate=!0,Je=!0}}Je===!0&&($e.updateMultisampleRenderTarget(Q),$e.updateRenderTargetMipmap(Q))}x.setRenderTarget(me,fe,Ie),x.setClearColor(X,j),Ce!==void 0&&(B.viewport=Ce),x.toneMapping=Ne}function wl(_,N,k){let B=N.isScene===!0?N.overrideMaterial:null;for(let P=0,Q=_.length;P<Q;P++){let ce=_[P],me=ce.object,fe=ce.geometry,Ie=ce.group,Ne=ce.material;Ne.allowOverride===!0&&B!==null&&(Ne=B),me.layers.test(k.layers)&&By(me,N,k,fe,Ne,Ie)}}function By(_,N,k,B,P,Q){_.onBeforeRender(x,N,k,B,P,Q),_.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),P.onBeforeRender(x,N,k,B,_,Q),P.transparent===!0&&P.side===Vi&&P.forceSinglePass===!1?(P.side=En,P.needsUpdate=!0,x.renderBufferDirect(k,N,B,P,_,Q),P.side=dr,P.needsUpdate=!0,x.renderBufferDirect(k,N,B,P,_,Q),P.side=Vi):x.renderBufferDirect(k,N,B,P,_,Q),_.onAfterRender(x,N,k,B,P,Q)}function Tl(_,N,k){N.isScene!==!0&&(N=be);let B=ye.get(_),P=h.state.lights,Q=h.state.shadowsArray,ce=P.state.version,me=G.getParameters(_,P.state,Q,N,k),fe=G.getProgramCacheKey(me),Ie=B.programs;B.environment=_.isMeshStandardMaterial?N.environment:null,B.fog=N.fog,B.envMap=(_.isMeshStandardMaterial?At:qt).get(_.envMap||B.environment),B.envMapRotation=B.environment!==null&&_.envMap===null?N.environmentRotation:_.envMapRotation,Ie===void 0&&(_.addEventListener("dispose",q),Ie=new Map,B.programs=Ie);let Ne=Ie.get(fe);if(Ne!==void 0){if(B.currentProgram===Ne&&B.lightsStateVersion===ce)return Hy(_,me),Ne}else me.uniforms=G.getUniforms(_),_.onBeforeCompile(me,x),Ne=G.acquireProgram(me,fe),Ie.set(fe,Ne),B.uniforms=me.uniforms;let Ce=B.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Ce.clippingPlanes=ie.uniform),Hy(_,me),B.needsLights=Ub(_),B.lightsStateVersion=ce,B.needsLights&&(Ce.ambientLightColor.value=P.state.ambient,Ce.lightProbe.value=P.state.probe,Ce.directionalLights.value=P.state.directional,Ce.directionalLightShadows.value=P.state.directionalShadow,Ce.spotLights.value=P.state.spot,Ce.spotLightShadows.value=P.state.spotShadow,Ce.rectAreaLights.value=P.state.rectArea,Ce.ltc_1.value=P.state.rectAreaLTC1,Ce.ltc_2.value=P.state.rectAreaLTC2,Ce.pointLights.value=P.state.point,Ce.pointLightShadows.value=P.state.pointShadow,Ce.hemisphereLights.value=P.state.hemi,Ce.directionalShadowMap.value=P.state.directionalShadowMap,Ce.directionalShadowMatrix.value=P.state.directionalShadowMatrix,Ce.spotShadowMap.value=P.state.spotShadowMap,Ce.spotLightMatrix.value=P.state.spotLightMatrix,Ce.spotLightMap.value=P.state.spotLightMap,Ce.pointShadowMap.value=P.state.pointShadowMap,Ce.pointShadowMatrix.value=P.state.pointShadowMatrix),B.currentProgram=Ne,B.uniformsList=null,Ne}function Vy(_){if(_.uniformsList===null){let N=_.currentProgram.getUniforms();_.uniformsList=Da.seqWithValue(N.seq,_.uniforms)}return _.uniformsList}function Hy(_,N){let k=ye.get(_);k.outputColorSpace=N.outputColorSpace,k.batching=N.batching,k.batchingColor=N.batchingColor,k.instancing=N.instancing,k.instancingColor=N.instancingColor,k.instancingMorph=N.instancingMorph,k.skinning=N.skinning,k.morphTargets=N.morphTargets,k.morphNormals=N.morphNormals,k.morphColors=N.morphColors,k.morphTargetsCount=N.morphTargetsCount,k.numClippingPlanes=N.numClippingPlanes,k.numIntersection=N.numClipIntersection,k.vertexAlphas=N.vertexAlphas,k.vertexTangents=N.vertexTangents,k.toneMapping=N.toneMapping}function Fb(_,N,k,B,P){N.isScene!==!0&&(N=be),$e.resetTextureUnits();let Q=N.fog,ce=B.isMeshStandardMaterial?N.environment:null,me=O===null?x.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Vs,fe=(B.isMeshStandardMaterial?At:qt).get(B.envMap||ce),Ie=B.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ne=!!k.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ce=!!k.morphAttributes.position,Je=!!k.morphAttributes.normal,ht=!!k.morphAttributes.color,Ct=pr;B.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Ct=x.toneMapping);let xt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,gt=xt!==void 0?xt.length:0,De=ye.get(B),bt=h.state.lights;if(ct===!0&&(W===!0||_!==E)){let hn=_===E&&B.id===M;ie.setState(B,_,hn)}let st=!1;B.version===De.__version?(De.needsLights&&De.lightsStateVersion!==bt.state.version||De.outputColorSpace!==me||P.isBatchedMesh&&De.batching===!1||!P.isBatchedMesh&&De.batching===!0||P.isBatchedMesh&&De.batchingColor===!0&&P.colorTexture===null||P.isBatchedMesh&&De.batchingColor===!1&&P.colorTexture!==null||P.isInstancedMesh&&De.instancing===!1||!P.isInstancedMesh&&De.instancing===!0||P.isSkinnedMesh&&De.skinning===!1||!P.isSkinnedMesh&&De.skinning===!0||P.isInstancedMesh&&De.instancingColor===!0&&P.instanceColor===null||P.isInstancedMesh&&De.instancingColor===!1&&P.instanceColor!==null||P.isInstancedMesh&&De.instancingMorph===!0&&P.morphTexture===null||P.isInstancedMesh&&De.instancingMorph===!1&&P.morphTexture!==null||De.envMap!==fe||B.fog===!0&&De.fog!==Q||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==ie.numPlanes||De.numIntersection!==ie.numIntersection)||De.vertexAlphas!==Ie||De.vertexTangents!==Ne||De.morphTargets!==Ce||De.morphNormals!==Je||De.morphColors!==ht||De.toneMapping!==Ct||De.morphTargetsCount!==gt)&&(st=!0):(st=!0,De.__version=B.version);let Pn=De.currentProgram;st===!0&&(Pn=Tl(B,N,P));let Js=!1,On=!1,Aa=!1,wt=Pn.getUniforms(),Wn=De.uniforms;if(ve.useProgram(Pn.program)&&(Js=!0,On=!0,Aa=!0),B.id!==M&&(M=B.id,On=!0),Js||E!==_){ve.buffers.depth.getReversed()&&_.reversedDepth!==!0&&(_._reversedDepth=!0,_.updateProjectionMatrix()),wt.setValue(I,"projectionMatrix",_.projectionMatrix),wt.setValue(I,"viewMatrix",_.matrixWorldInverse);let Sn=wt.map.cameraPosition;Sn!==void 0&&Sn.setValue(I,pe.setFromMatrixPosition(_.matrixWorld)),Re.logarithmicDepthBuffer&&wt.setValue(I,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&wt.setValue(I,"isOrthographic",_.isOrthographicCamera===!0),E!==_&&(E=_,On=!0,Aa=!0)}if(P.isSkinnedMesh){wt.setOptional(I,P,"bindMatrix"),wt.setOptional(I,P,"bindMatrixInverse");let hn=P.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),wt.setValue(I,"boneTexture",hn.boneTexture,$e))}P.isBatchedMesh&&(wt.setOptional(I,P,"batchingTexture"),wt.setValue(I,"batchingTexture",P._matricesTexture,$e),wt.setOptional(I,P,"batchingIdTexture"),wt.setValue(I,"batchingIdTexture",P._indirectTexture,$e),wt.setOptional(I,P,"batchingColorTexture"),P._colorsTexture!==null&&wt.setValue(I,"batchingColorTexture",P._colorsTexture,$e));let $n=k.morphAttributes;if(($n.position!==void 0||$n.normal!==void 0||$n.color!==void 0)&&te.update(P,k,Pn),(On||De.receiveShadow!==P.receiveShadow)&&(De.receiveShadow=P.receiveShadow,wt.setValue(I,"receiveShadow",P.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Wn.envMap.value=fe,Wn.flipEnvMap.value=fe.isCubeTexture&&fe.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&N.environment!==null&&(Wn.envMapIntensity.value=N.environmentIntensity),On&&(wt.setValue(I,"toneMappingExposure",x.toneMappingExposure),De.needsLights&&kb(Wn,Aa),Q&&B.fog===!0&&Y.refreshFogUniforms(Wn,Q),Y.refreshMaterialUniforms(Wn,B,V,Z,h.state.transmissionRenderTarget[_.id]),Da.upload(I,Vy(De),Wn,$e)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Da.upload(I,Vy(De),Wn,$e),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&wt.setValue(I,"center",P.center),wt.setValue(I,"modelViewMatrix",P.modelViewMatrix),wt.setValue(I,"normalMatrix",P.normalMatrix),wt.setValue(I,"modelMatrix",P.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let hn=B.uniformsGroups;for(let Sn=0,Gh=hn.length;Sn<Gh;Sn++){let ns=hn[Sn];We.update(ns,Pn),We.bind(ns,Pn)}}return Pn}function kb(_,N){_.ambientLightColor.needsUpdate=N,_.lightProbe.needsUpdate=N,_.directionalLights.needsUpdate=N,_.directionalLightShadows.needsUpdate=N,_.pointLights.needsUpdate=N,_.pointLightShadows.needsUpdate=N,_.spotLights.needsUpdate=N,_.spotLightShadows.needsUpdate=N,_.rectAreaLights.needsUpdate=N,_.hemisphereLights.needsUpdate=N}function Ub(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(_,N,k){let B=ye.get(_);B.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),ye.get(_.texture).__webglTexture=N,ye.get(_.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:k,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,N){let k=ye.get(_);k.__webglFramebuffer=N,k.__useDefaultFramebuffer=N===void 0};let Bb=I.createFramebuffer();this.setRenderTarget=function(_,N=0,k=0){O=_,D=N,C=k;let B=!0,P=null,Q=!1,ce=!1;if(_){let fe=ye.get(_);if(fe.__useDefaultFramebuffer!==void 0)ve.bindFramebuffer(I.FRAMEBUFFER,null),B=!1;else if(fe.__webglFramebuffer===void 0)$e.setupRenderTarget(_);else if(fe.__hasExternalTextures)$e.rebindTextures(_,ye.get(_.texture).__webglTexture,ye.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let Ce=_.depthTexture;if(fe.__boundDepthTexture!==Ce){if(Ce!==null&&ye.has(Ce)&&(_.width!==Ce.image.width||_.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");$e.setupDepthRenderbuffer(_)}}let Ie=_.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(ce=!0);let Ne=ye.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Ne[N])?P=Ne[N][k]:P=Ne[N],Q=!0):_.samples>0&&$e.useMultisampledRTT(_)===!1?P=ye.get(_).__webglMultisampledFramebuffer:Array.isArray(Ne)?P=Ne[k]:P=Ne,A.copy(_.viewport),U.copy(_.scissor),z=_.scissorTest}else A.copy(we).multiplyScalar(V).floor(),U.copy(Ke).multiplyScalar(V).floor(),z=yt;if(k!==0&&(P=Bb),ve.bindFramebuffer(I.FRAMEBUFFER,P)&&B&&ve.drawBuffers(_,P),ve.viewport(A),ve.scissor(U),ve.setScissorTest(z),Q){let fe=ye.get(_.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+N,fe.__webglTexture,k)}else if(ce){let fe=N;for(let Ie=0;Ie<_.textures.length;Ie++){let Ne=ye.get(_.textures[Ie]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Ie,Ne.__webglTexture,k,fe)}}else if(_!==null&&k!==0){let fe=ye.get(_.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,fe.__webglTexture,k)}M=-1},this.readRenderTargetPixels=function(_,N,k,B,P,Q,ce,me=0){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=ye.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&ce!==void 0&&(fe=fe[ce]),fe){ve.bindFramebuffer(I.FRAMEBUFFER,fe);try{let Ie=_.textures[me],Ne=Ie.format,Ce=Ie.type;if(!Re.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Re.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=_.width-B&&k>=0&&k<=_.height-P&&(_.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+me),I.readPixels(N,k,B,P,Ee.convert(Ne),Ee.convert(Ce),Q))}finally{let Ie=O!==null?ye.get(O).__webglFramebuffer:null;ve.bindFramebuffer(I.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=function(_,N,k,B,P,Q,ce,me=0){return qn(this,null,function*(){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=ye.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&ce!==void 0&&(fe=fe[ce]),fe)if(N>=0&&N<=_.width-B&&k>=0&&k<=_.height-P){ve.bindFramebuffer(I.FRAMEBUFFER,fe);let Ie=_.textures[me],Ne=Ie.format,Ce=Ie.type;if(!Re.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Re.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Je=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Je),I.bufferData(I.PIXEL_PACK_BUFFER,Q.byteLength,I.STREAM_READ),_.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+me),I.readPixels(N,k,B,P,Ee.convert(Ne),Ee.convert(Ce),0);let ht=O!==null?ye.get(O).__webglFramebuffer:null;ve.bindFramebuffer(I.FRAMEBUFFER,ht);let Ct=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),yield QM(I,Ct,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Je),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Q),I.deleteBuffer(Je),I.deleteSync(Ct),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")})},this.copyFramebufferToTexture=function(_,N=null,k=0){let B=Math.pow(2,-k),P=Math.floor(_.image.width*B),Q=Math.floor(_.image.height*B),ce=N!==null?N.x:0,me=N!==null?N.y:0;$e.setTexture2D(_,0),I.copyTexSubImage2D(I.TEXTURE_2D,k,0,0,ce,me,P,Q),ve.unbindTexture()};let Vb=I.createFramebuffer(),Hb=I.createFramebuffer();this.copyTextureToTexture=function(_,N,k=null,B=null,P=0,Q=null){Q===null&&(P!==0?(ga("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=P,P=0):Q=0);let ce,me,fe,Ie,Ne,Ce,Je,ht,Ct,xt=_.isCompressedTexture?_.mipmaps[Q]:_.image;if(k!==null)ce=k.max.x-k.min.x,me=k.max.y-k.min.y,fe=k.isBox3?k.max.z-k.min.z:1,Ie=k.min.x,Ne=k.min.y,Ce=k.isBox3?k.min.z:0;else{let $n=Math.pow(2,-P);ce=Math.floor(xt.width*$n),me=Math.floor(xt.height*$n),_.isDataArrayTexture?fe=xt.depth:_.isData3DTexture?fe=Math.floor(xt.depth*$n):fe=1,Ie=0,Ne=0,Ce=0}B!==null?(Je=B.x,ht=B.y,Ct=B.z):(Je=0,ht=0,Ct=0);let gt=Ee.convert(N.format),De=Ee.convert(N.type),bt;N.isData3DTexture?($e.setTexture3D(N,0),bt=I.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?($e.setTexture2DArray(N,0),bt=I.TEXTURE_2D_ARRAY):($e.setTexture2D(N,0),bt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,N.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,N.unpackAlignment);let st=I.getParameter(I.UNPACK_ROW_LENGTH),Pn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Js=I.getParameter(I.UNPACK_SKIP_PIXELS),On=I.getParameter(I.UNPACK_SKIP_ROWS),Aa=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,xt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,xt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ie),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ne),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ce);let wt=_.isDataArrayTexture||_.isData3DTexture,Wn=N.isDataArrayTexture||N.isData3DTexture;if(_.isDepthTexture){let $n=ye.get(_),hn=ye.get(N),Sn=ye.get($n.__renderTarget),Gh=ye.get(hn.__renderTarget);ve.bindFramebuffer(I.READ_FRAMEBUFFER,Sn.__webglFramebuffer),ve.bindFramebuffer(I.DRAW_FRAMEBUFFER,Gh.__webglFramebuffer);for(let ns=0;ns<fe;ns++)wt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ye.get(_).__webglTexture,P,Ce+ns),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ye.get(N).__webglTexture,Q,Ct+ns)),I.blitFramebuffer(Ie,Ne,ce,me,Je,ht,ce,me,I.DEPTH_BUFFER_BIT,I.NEAREST);ve.bindFramebuffer(I.READ_FRAMEBUFFER,null),ve.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(P!==0||_.isRenderTargetTexture||ye.has(_)){let $n=ye.get(_),hn=ye.get(N);ve.bindFramebuffer(I.READ_FRAMEBUFFER,Vb),ve.bindFramebuffer(I.DRAW_FRAMEBUFFER,Hb);for(let Sn=0;Sn<fe;Sn++)wt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,$n.__webglTexture,P,Ce+Sn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,$n.__webglTexture,P),Wn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,hn.__webglTexture,Q,Ct+Sn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,hn.__webglTexture,Q),P!==0?I.blitFramebuffer(Ie,Ne,ce,me,Je,ht,ce,me,I.COLOR_BUFFER_BIT,I.NEAREST):Wn?I.copyTexSubImage3D(bt,Q,Je,ht,Ct+Sn,Ie,Ne,ce,me):I.copyTexSubImage2D(bt,Q,Je,ht,Ie,Ne,ce,me);ve.bindFramebuffer(I.READ_FRAMEBUFFER,null),ve.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Wn?_.isDataTexture||_.isData3DTexture?I.texSubImage3D(bt,Q,Je,ht,Ct,ce,me,fe,gt,De,xt.data):N.isCompressedArrayTexture?I.compressedTexSubImage3D(bt,Q,Je,ht,Ct,ce,me,fe,gt,xt.data):I.texSubImage3D(bt,Q,Je,ht,Ct,ce,me,fe,gt,De,xt):_.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Q,Je,ht,ce,me,gt,De,xt.data):_.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Q,Je,ht,xt.width,xt.height,gt,xt.data):I.texSubImage2D(I.TEXTURE_2D,Q,Je,ht,ce,me,gt,De,xt);I.pixelStorei(I.UNPACK_ROW_LENGTH,st),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Pn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Js),I.pixelStorei(I.UNPACK_SKIP_ROWS,On),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Aa),Q===0&&N.generateMipmaps&&I.generateMipmap(bt),ve.unbindTexture()},this.initRenderTarget=function(_){ye.get(_).__webglFramebuffer===void 0&&$e.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?$e.setTextureCube(_,0):_.isData3DTexture?$e.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?$e.setTexture2DArray(_,0):$e.setTexture2D(_,0),ve.unbindTexture()},this.resetState=function(){D=0,C=0,O=null,ve.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}};var Rb={type:"change"},Oy={type:"start"},Pb={type:"end"},Rh=new zs,Nb=new ti,uF=Math.cos(70*fy.DEG2RAD),$t=new L,Rn=2*Math.PI,mt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Py=1e-6,Nh=class extends vl{constructor(e,t=null){super(e,t),this.state=mt.NONE,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Zr.ROTATE,MIDDLE:Zr.DOLLY,RIGHT:Zr.PAN},this.touches={ONE:Kr.ROTATE,TWO:Kr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new ii,this._lastTargetPosition=new L,this._quat=new ii().setFromUnitVectors(e.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new xa,this._sphericalDelta=new xa,this._scale=1,this._panOffset=new L,this._rotateStart=new Ue,this._rotateEnd=new Ue,this._rotateDelta=new Ue,this._panStart=new Ue,this._panEnd=new Ue,this._panDelta=new Ue,this._dollyStart=new Ue,this._dollyEnd=new Ue,this._dollyDelta=new Ue,this._dollyDirection=new L,this._mouse=new Ue,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=fF.bind(this),this._onPointerDown=dF.bind(this),this._onPointerUp=hF.bind(this),this._onContextMenu=xF.bind(this),this._onMouseWheel=gF.bind(this),this._onKeyDown=vF.bind(this),this._onTouchStart=yF.bind(this),this._onTouchMove=_F.bind(this),this._onMouseDown=pF.bind(this),this._onMouseMove=mF.bind(this),this._interceptControlDown=EF.bind(this),this._interceptControlUp=SF.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Rb),this.update(),this.state=mt.NONE}update(e=null){let t=this.object.position;$t.copy(t).sub(this.target),$t.applyQuaternion(this._quat),this._spherical.setFromVector3($t),this.autoRotate&&this.state===mt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Rn:i>Math.PI&&(i-=Rn),r<-Math.PI?r+=Rn:r>Math.PI&&(r-=Rn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if($t.setFromSpherical(this._spherical),$t.applyQuaternion(this._quatInverse),t.copy(this.target).add($t),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=$t.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){let a=new L(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;let l=new L(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=$t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Rh.origin.copy(this.object.position),Rh.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Rh.direction))<uF?this.object.lookAt(this.target):(Nb.setFromNormalAndCoplanarPoint(this.object.up,this.target),Rh.intersectPlane(Nb,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Py||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Py||this._lastTargetPosition.distanceToSquared(this.target)>Py?(this.dispatchEvent(Rb),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Rn/60*this.autoRotateSpeed*e:Rn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){$t.setFromMatrixColumn(t,0),$t.multiplyScalar(-e),this._panOffset.add($t)}_panUp(e,t){this.screenSpacePanning===!0?$t.setFromMatrixColumn(t,1):($t.setFromMatrixColumn(t,0),$t.crossVectors(this.object.up,$t)),$t.multiplyScalar(e),this._panOffset.add($t)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;$t.copy(r).sub(this.target);let s=$t.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Rn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Rn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Rn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Rn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ue,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function dF(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function fF(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function hF(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Pb),this.state=mt.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function pF(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Zr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=mt.DOLLY;break;case Zr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=mt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=mt.ROTATE}break;case Zr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=mt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=mt.PAN}break;default:this.state=mt.NONE}this.state!==mt.NONE&&this.dispatchEvent(Oy)}function mF(n){switch(this.state){case mt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case mt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case mt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function gF(n){this.enabled===!1||this.enableZoom===!1||this.state!==mt.NONE||(n.preventDefault(),this.dispatchEvent(Oy),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Pb))}function vF(n){this.enabled!==!1&&this._handleKeyDown(n)}function yF(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Kr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=mt.TOUCH_ROTATE;break;case Kr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=mt.TOUCH_PAN;break;default:this.state=mt.NONE}break;case 2:switch(this.touches.TWO){case Kr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=mt.TOUCH_DOLLY_PAN;break;case Kr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=mt.TOUCH_DOLLY_ROTATE;break;default:this.state=mt.NONE}break;default:this.state=mt.NONE}this.state!==mt.NONE&&this.dispatchEvent(Oy)}function _F(n){switch(this._trackPointer(n),this.state){case mt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case mt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case mt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case mt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=mt.NONE}}function xF(n){this.enabled!==!1&&n.preventDefault()}function EF(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function SF(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Nn=new Ye,Ph=class extends bh{constructor(e){super(e),this.propertyNameMapping={},this.customPropertyMapping={}}load(e,t,i,r){let s=this,o=new fl(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(s.parse(a))}catch(c){r?r(c):console.error(c),s.manager.itemError(e)}},i,r)}setPropertyNameMapping(e){this.propertyNameMapping=e}setCustomPropertyNameMapping(e){this.customPropertyMapping=e}parse(e){function t(m,h=0){let b=/^ply([\s\S]*)end_header(\r\n|\r|\n)/,S="",x=b.exec(m);x!==null&&(S=x[1]);let T={comments:[],elements:[],headerLength:h,objInfo:""},D=S.split(/\r\n|\r|\n/),C;function O(M,E){let A={type:M[0]};return A.type==="list"?(A.name=M[3],A.countType=M[1],A.itemType=M[2]):A.name=M[1],A.name in E&&(A.name=E[A.name]),A}for(let M=0;M<D.length;M++){let E=D[M];if(E=E.trim(),E==="")continue;let A=E.split(/\s+/),U=A.shift();switch(E=A.join(" "),U){case"format":T.format=A[0],T.version=A[1];break;case"comment":T.comments.push(E);break;case"element":C!==void 0&&T.elements.push(C),C={},C.name=A[0],C.count=parseInt(A[1]),C.properties=[];break;case"property":C.properties.push(O(A,y.propertyNameMapping));break;case"obj_info":T.objInfo=E;break;default:console.log("unhandled",U,A)}}return C!==void 0&&T.elements.push(C),T}function i(m,h){switch(h){case"char":case"uchar":case"short":case"ushort":case"int":case"uint":case"int8":case"uint8":case"int16":case"uint16":case"int32":case"uint32":return parseInt(m);case"float":case"double":case"float32":case"float64":return parseFloat(m)}}function r(m,h){let b={};for(let S=0;S<m.length;S++){if(h.empty())return null;if(m[S].type==="list"){let x=[],T=i(h.next(),m[S].countType);for(let D=0;D<T;D++){if(h.empty())return null;x.push(i(h.next(),m[S].itemType))}b[m[S].name]=x}else b[m[S].name]=i(h.next(),m[S].type)}return b}function s(){let m={indices:[],vertices:[],normals:[],uvs:[],faceVertexUvs:[],colors:[],faceVertexColors:[]};for(let h of Object.keys(y.customPropertyMapping))m[h]=[];return m}function o(m){let h=m.map(S=>S.name);function b(S){for(let x=0,T=S.length;x<T;x++){let D=S[x];if(h.includes(D))return D}return null}return{attrX:b(["x","px","posx"])||"x",attrY:b(["y","py","posy"])||"y",attrZ:b(["z","pz","posz"])||"z",attrNX:b(["nx","normalx"]),attrNY:b(["ny","normaly"]),attrNZ:b(["nz","normalz"]),attrS:b(["s","u","texture_u","tx"]),attrT:b(["t","v","texture_v","ty"]),attrR:b(["red","diffuse_red","r","diffuse_r"]),attrG:b(["green","diffuse_green","g","diffuse_g"]),attrB:b(["blue","diffuse_blue","b","diffuse_b"])}}function a(m,h){let b=s(),S=/end_header\s+(\S[\s\S]*\S|\S)\s*$/,x,T;(T=S.exec(m))!==null?x=T[1].split(/\s+/):x=[];let D=new Ly(x);e:for(let C=0;C<h.elements.length;C++){let O=h.elements[C],M=o(O.properties);for(let E=0;E<O.count;E++){let A=r(O.properties,D);if(!A)break e;l(b,O.name,A,M)}}return c(b)}function c(m){let h=new xi;m.indices.length>0&&h.setIndex(m.indices),h.setAttribute("position",new en(m.vertices,3)),m.normals.length>0&&h.setAttribute("normal",new en(m.normals,3)),m.uvs.length>0&&h.setAttribute("uv",new en(m.uvs,2)),m.colors.length>0&&h.setAttribute("color",new en(m.colors,3)),(m.faceVertexUvs.length>0||m.faceVertexColors.length>0)&&(h=h.toNonIndexed(),m.faceVertexUvs.length>0&&h.setAttribute("uv",new en(m.faceVertexUvs,2)),m.faceVertexColors.length>0&&h.setAttribute("color",new en(m.faceVertexColors,3)));for(let b of Object.keys(y.customPropertyMapping))m[b].length>0&&h.setAttribute(b,new en(m[b],y.customPropertyMapping[b].length));return h.computeBoundingSphere(),h}function l(m,h,b,S){if(h==="vertex"){m.vertices.push(b[S.attrX],b[S.attrY],b[S.attrZ]),S.attrNX!==null&&S.attrNY!==null&&S.attrNZ!==null&&m.normals.push(b[S.attrNX],b[S.attrNY],b[S.attrNZ]),S.attrS!==null&&S.attrT!==null&&m.uvs.push(b[S.attrS],b[S.attrT]),S.attrR!==null&&S.attrG!==null&&S.attrB!==null&&(Nn.setRGB(b[S.attrR]/255,b[S.attrG]/255,b[S.attrB]/255,un),m.colors.push(Nn.r,Nn.g,Nn.b));for(let x of Object.keys(y.customPropertyMapping))for(let T of y.customPropertyMapping[x])m[x].push(b[T])}else if(h==="face"){let x=b.vertex_indices||b.vertex_index,T=b.texcoord;x.length===3?(m.indices.push(x[0],x[1],x[2]),T&&T.length===6&&(m.faceVertexUvs.push(T[0],T[1]),m.faceVertexUvs.push(T[2],T[3]),m.faceVertexUvs.push(T[4],T[5]))):x.length===4&&(m.indices.push(x[0],x[1],x[3]),m.indices.push(x[1],x[2],x[3])),S.attrR!==null&&S.attrG!==null&&S.attrB!==null&&(Nn.setRGB(b[S.attrR]/255,b[S.attrG]/255,b[S.attrB]/255,un),m.faceVertexColors.push(Nn.r,Nn.g,Nn.b),m.faceVertexColors.push(Nn.r,Nn.g,Nn.b),m.faceVertexColors.push(Nn.r,Nn.g,Nn.b))}}function u(m,h){let b={},S=0;for(let x=0;x<h.length;x++){let T=h[x],D=T.valueReader;if(T.type==="list"){let C=[],O=T.countReader.read(m+S);S+=T.countReader.size;for(let M=0;M<O;M++)C.push(D.read(m+S)),S+=D.size;b[T.name]=C}else b[T.name]=D.read(m+S),S+=D.size}return[b,S]}function d(m,h,b){function S(x,T,D){switch(T){case"int8":case"char":return{read:C=>x.getInt8(C),size:1};case"uint8":case"uchar":return{read:C=>x.getUint8(C),size:1};case"int16":case"short":return{read:C=>x.getInt16(C,D),size:2};case"uint16":case"ushort":return{read:C=>x.getUint16(C,D),size:2};case"int32":case"int":return{read:C=>x.getInt32(C,D),size:4};case"uint32":case"uint":return{read:C=>x.getUint32(C,D),size:4};case"float32":case"float":return{read:C=>x.getFloat32(C,D),size:4};case"float64":case"double":return{read:C=>x.getFloat64(C,D),size:8}}}for(let x=0,T=m.length;x<T;x++){let D=m[x];D.type==="list"?(D.countReader=S(h,D.countType,b),D.valueReader=S(h,D.itemType,b)):D.valueReader=S(h,D.type,b)}}function f(m,h){let b=s(),S=h.format==="binary_little_endian",x=new DataView(m,h.headerLength),T,D=0;for(let C=0;C<h.elements.length;C++){let O=h.elements[C],M=O.properties,E=o(M);d(M,x,S);for(let A=0;A<O.count;A++){T=u(D,M),D+=T[1];let U=T[0];l(b,O.name,U,E)}}return c(b)}function p(m){let h=0,b=!0,S="",x=[],T=new TextDecoder().decode(m.subarray(0,5)),D=/^ply\r\n/.test(T);do{let C=String.fromCharCode(m[h++]);C!==`
`&&C!=="\r"?S+=C:(S==="end_header"&&(b=!1),S!==""&&(x.push(S),S=""))}while(b&&h<m.length);return D===!0&&h++,{headerText:x.join("\r")+"\r",headerLength:h}}let g,y=this;if(e instanceof ArrayBuffer){let m=new Uint8Array(e),{headerText:h,headerLength:b}=p(m),S=t(h,b);if(S.format==="ascii"){let x=new TextDecoder().decode(m);g=a(x,S)}else g=f(e,S)}else g=a(e,t(e));return g}},Ly=class{constructor(e){this.arr=e,this.i=0}empty(){return this.i>=this.arr.length}next(){return this.arr[this.i++]}};var MF=["canvas"],Oh=class n{canvasRef;plyPath=null;showDebugCube=!1;model=null;renderer;scene=new sl;camera=new dn(60,1,.01,1e4);controls;frameId=null;currentPoints=null;ngAfterViewInit(){this.initThree(),this.handleResize(),this.animate(),this.addListeners()}initThree(){let e=this.canvasRef.nativeElement;this.renderer=new Ih({canvas:e,antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.scene.background=new Ye(724242),this.camera.position.set(.7,.7,.7),this.controls=new Nh(this.camera,e),this.controls.enableDamping=!0;let t=new gl(16777215,1.6);this.scene.add(t);let i=new ml(16777215,.8);if(i.position.set(2,4,3),this.scene.add(i),this.showDebugCube){let r=new qr(1,1,1),s=new ul({color:7829367,metalness:.3,roughness:.7}),o=new An(r,s);this.scene.add(o)}}addListeners(){window.addEventListener("resize",this.handleResize.bind(this)),window.addEventListener("keydown",this.handleKey.bind(this))}ngOnDestroy(){window.removeEventListener("keydown",this.handleKey),window.removeEventListener("resize",this.handleResize),this.frameId!==null&&cancelAnimationFrame(this.frameId),this.renderer?.dispose()}ngOnChanges(){return qn(this,null,function*(){if(!this.model)return;let{path:e,transform:t}=this.model;yield this.loadPly(e,t)})}loadPly=(e,t)=>qn(this,null,function*(){new Ph().load(e,r=>{r.computeBoundingBox(),r.center();let s=r.hasAttribute("color"),o;s?o=new Gs({size:1.01,sizeAttenuation:!0,vertexColors:!0}):o=new Gs({size:.01,sizeAttenuation:!0,color:14540253});let a=new ol(r,o);if(t&&(a.position.set(t.position.x,t.position.y,t.position.z),a.rotation.set(t.rotation.x,t.rotation.y,t.rotation.z),a.scale.set(t.scale.x,t.scale.y,t.scale.z)),this.currentPoints&&(this.scene.remove(this.currentPoints),this.currentPoints.material.dispose?.(),this.currentPoints.geometry.dispose()),this.currentPoints=a,this.scene.add(a),r.boundingBox){let c=r.boundingBox,u=new L().subVectors(c.max,c.min).length()*.8;this.camera.position.set(u,u,u),this.controls.update()}})});handleResize=()=>{let e=this.canvasRef.nativeElement.parentElement,{clientWidth:t,clientHeight:i}=e;this.camera.aspect=t/i,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,i,!1)};animate=()=>{this.frameId=requestAnimationFrame(this.animate),this.controls.update(),this.renderer.render(this.scene,this.camera)};handleKey=e=>{if(!this.currentPoints)return;let t=e.shiftKey?100:10,i=this.currentPoints,r=.1*t,s=.05,o=.05;switch(e.key.toLowerCase()){case"w":i.position.z-=r;break;case"s":i.position.z+=r;break;case"a":i.position.x-=r;break;case"d":i.position.x+=r;break;case"q":i.position.y-=r;break;case"e":i.position.y+=r;break;case"r":i.scale.multiplyScalar(1+s);break;case"f":i.scale.multiplyScalar(1-s);break;case"arrowleft":i.rotation.y+=o;break;case"arrowright":i.rotation.y-=o;break;case"arrowup":i.rotation.x+=o;break;case"arrowdown":i.rotation.x-=o;break;case"4":i.rotation.z+=o;break;case"6":i.rotation.z-=o;break;case"p":console.log("[Transform]",{position:i.position.clone(),rotation:i.rotation.clone(),scale:i.scale.clone()});break}};static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Nt({type:n,selectors:[["app-view3d"]],viewQuery:function(t,i){if(t&1&&vg(MF,7),t&2){let r;gc(r=vc())&&(i.canvasRef=r.first)}},inputs:{plyPath:"plyPath",showDebugCube:"showDebugCube",model:"model"},features:[Ki],decls:3,vars:0,consts:[["canvas",""],[1,"view"]],template:function(t,i){t&1&&(Ri(0,"div",1),ad(1,"canvas",null,0),Ni())},styles:[".view[_ngcontent-%COMP%]{position:absolute;inset:0}canvas[_ngcontent-%COMP%]{width:100%;height:100%;display:block}"]})};var Lh=class n{list=[{name:"Queens Roof",path:"assets/pointclouds/sample2.ply",transform:{position:{x:-810,y:640,z:-1460},rotation:{x:Math.PI/2,y:Math.PI,z:0},scale:{x:37,y:37,z:37}}},{name:"Cactus",path:"assets/pointclouds/sample1.ply",transform:{position:{x:-.2,y:.5,z:.3},rotation:{x:Math.PI,y:2.6915926535897947,z:0},scale:{x:1,y:1,z:1}}}];static \u0275fac=function(t){return new(t||n)};static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})};function wF(n,e){if(n&1&&(Pt(0,"option"),rn(1),Ot()),n&2){let t=e.$implicit;yn(),Ji(t.name)}}var Fh=class n{constructor(e){this.pcs=e}modelSelected=new Jt;ngOnInit(){if(this.pcs.list.length>0){let e=this.pcs.list[0];setTimeout(()=>{this.modelSelected.emit(e)})}}onSelect(e){this.modelSelected.emit(e)}onSelectByEvent(e){let t=e.target;if(!t)return;let i=t.selectedIndex,r=this.pcs.list[i];this.onSelect(r)}static \u0275fac=function(t){return new(t||n)(zt(Lh))};static \u0275cmp=Nt({type:n,selectors:[["app-picker"]],outputs:{modelSelected:"modelSelected"},decls:6,vars:1,consts:[[1,"picker"],[3,"change"],[4,"ngFor","ngForOf"]],template:function(t,i){t&1&&(Pt(0,"div",0)(1,"label")(2,"span"),rn(3,"Select Point Cloud:"),Ot(),Pt(4,"select",1),Rr("change",function(s){return i.onSelectByEvent(s)}),bs(5,wF,2,1,"option",2),Ot()()()),t&2&&(yn(5),di("ngForOf",i.pcs.list))},dependencies:[Lo],styles:[".picker[_ngcontent-%COMP%]{background:#141823e6;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);border:1px solid rgba(255,255,255,.08);border-radius:10px;padding:.5rem .75rem}label[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem}select[_ngcontent-%COMP%]{background:#0f1320;color:#e7e7ea;border:1px solid rgba(255,255,255,.14);border-radius:8px;padding:.25rem .5rem}"]})};var kh=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Nt({type:n,selectors:[["app-status-bar"]],decls:2,vars:0,consts:[[1,"bar"]],template:function(t,i){t&1&&(Ri(0,"footer",0),rn(1,"LMB: orbit \u2022 MMB: pan \u2022 Wheel: zoom"),Ni())},styles:[".bar[_ngcontent-%COMP%]{text-align:center;color:gray;width:100%;padding:.4rem .8rem;background:#141823e6;border-top:1px solid rgba(255,255,255,.08)}"]})};var Uh=class n{currentModel=null;onModelSelected(e){this.currentModel=e}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Nt({type:n,selectors:[["app-gaussian-viewer"]],decls:4,vars:2,consts:[[1,"wrap"],[3,"model","showDebugCube"],[3,"modelSelected"],[1,"status"]],template:function(t,i){t&1&&(Pt(0,"section",0),fi(1,"app-view3d",1),Pt(2,"app-picker",2),Rr("modelSelected",function(s){return i.onModelSelected(s)}),Ot(),fi(3,"app-status-bar",3),Ot()),t&2&&(yn(),di("model",i.currentModel)("showDebugCube",!1))},dependencies:[Fh,Oh,kh],styles:[".wrap[_ngcontent-%COMP%]{position:absolute;inset:0;background:transparent;overflow:hidden}.picker[_ngcontent-%COMP%]{position:absolute;top:12px;left:12px;z-index:10}.status[_ngcontent-%COMP%]{position:absolute;left:0;right:0;bottom:0}"]})};var Bh=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Nt({type:n,selectors:[["app-viewer-view"]],decls:1,vars:0,template:function(t,i){t&1&&fi(0,"app-gaussian-viewer")},dependencies:[Uh],styles:["[_nghost-%COMP%]{position:fixed;inset:48px 0 0;display:block;overflow:hidden;background:transparent}"]})};var TF=["*"],Vh=class n{title="";static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Nt({type:n,selectors:[["app-info-box"]],inputs:{title:"title"},ngContentSelectors:TF,decls:5,vars:1,consts:[[1,"box"],[1,"body"]],template:function(t,i){t&1&&(pg(),Ri(0,"section",0)(1,"h2"),rn(2),Ni(),Ri(3,"div",1),mg(4),Ni()()),t&2&&(yn(2),Ji(i.title))},styles:[".box[_ngcontent-%COMP%]{background:#141823;border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:1rem}.box[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 .5rem;font-size:1.1rem}.body[_ngcontent-%COMP%]{color:#cbd1ff}"]})};function CF(n,e){if(n&1&&(Pt(0,"li")(1,"a",5),rn(2),Ot()()),n&2){let t=e.$implicit;yn(),di("href",t.href,uc),yn(),Ji(t.label)}}function DF(n,e){if(n&1&&(Pt(0,"li")(1,"a",5),rn(2),Ot()()),n&2){let t=e.$implicit;yn(),di("href",t.href,uc),yn(),Ji(t.label)}}var Hh=class n{links={dev:[{label:"Website",href:"http://gmiller.net"},{label:"GitHub",href:"https://github.com/orokro"}],project:[{label:"Project GitHub",href:"https://github.com/orokro/angular-gaussian-splats"}]};static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Nt({type:n,selectors:[["app-about-view"]],decls:12,vars:2,consts:[[1,"about"],["title","About"],["title","Developer"],[4,"ngFor","ngForOf"],["title","Get"],["target","_blank","rel","noopener",3,"href"]],template:function(t,i){t&1&&(Pt(0,"main",0)(1,"app-info-box",1)(2,"p"),rn(3," This project is a demo of rendering PLY point clouds with Gaussian splats using Angular and Three.js. "),Ot(),Pt(4,"p"),rn(5," This version only shows the point clouds, but soon will include a proper Gaussian splatting implementation with EWA filtering, "),Ot()(),Pt(6,"app-info-box",2)(7,"ul"),bs(8,CF,3,2,"li",3),Ot()(),Pt(9,"app-info-box",4)(10,"ul"),bs(11,DF,3,2,"li",3),Ot()()()),t&2&&(yn(8),di("ngForOf",i.links.dev),yn(3),di("ngForOf",i.links.project))},dependencies:[Vh,Lo],styles:[".about[_ngcontent-%COMP%]{max-width:960px;margin:72px auto 2rem;padding:0 1rem;display:grid;gap:1rem}[_nghost-%COMP%]{display:block;background:transparent}a[_ngcontent-%COMP%]{color:#00abae;text-decoration:none;font-weight:700}a[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:focus{text-decoration:underline}"]})};var Ob=[{path:"",pathMatch:"full",redirectTo:"viewer"},{path:"viewer",component:Bh,title:"Viewer"},{path:"about",component:Hh,title:"About"},{path:"**",redirectTo:"viewer"}];var Lb={providers:[fv(Ob,hv({scrollPositionRestoration:"enabled"}))]};Vg(jd,Lb).catch(n=>console.error(n));
