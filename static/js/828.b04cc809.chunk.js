"use strict";(self.webpackChunkteripure=self.webpackChunkteripure||[]).push([[828],{816:function(t,e,n){var o=n(1413),r=n(4925),i=(n(2791),n(6157)),s=n(184),a=["children","loadingText","isLoading"];e.Z=function(t){var e=t.children,n=t.loadingText,c=void 0===n?"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...":n,u=t.isLoading,p=void 0!==u&&u,l=(0,r.Z)(t,a);return(0,s.jsx)(i.Z,(0,o.Z)((0,o.Z)({disabled:p},l),{},{children:p?c:e}))}},9652:function(t,e,n){n.r(e),n.d(e,{default:function(){return wt}});var o=n(2791),r=n(2172),i=n(3825),s=n(4768),a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof n.g?n.g:"undefined"!=typeof self?self:{};function c(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function u(t,e){return t(e={exports:{}},e.exports),e.exports}var p="function"==typeof Symbol&&Symbol.for,l=p?Symbol.for("react.element"):60103,f=p?Symbol.for("react.portal"):60106,d=p?Symbol.for("react.fragment"):60107,m=p?Symbol.for("react.strict_mode"):60108,h=p?Symbol.for("react.profiler"):60114,y=p?Symbol.for("react.provider"):60109,v=p?Symbol.for("react.context"):60110,b=p?Symbol.for("react.async_mode"):60111,j=p?Symbol.for("react.concurrent_mode"):60111,_=p?Symbol.for("react.forward_ref"):60112,g=p?Symbol.for("react.suspense"):60113,O=p?Symbol.for("react.suspense_list"):60120,x=p?Symbol.for("react.memo"):60115,w=p?Symbol.for("react.lazy"):60116,E=p?Symbol.for("react.block"):60121,C=p?Symbol.for("react.fundamental"):60117,R=p?Symbol.for("react.responder"):60118,P=p?Symbol.for("react.scope"):60119;function S(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case l:switch(t=t.type){case b:case j:case d:case h:case m:case g:return t;default:switch(t=t&&t.$$typeof){case v:case _:case w:case x:case y:return t;default:return e}}case f:return e}}}function k(t){return S(t)===j}var z={AsyncMode:b,ConcurrentMode:j,ContextConsumer:v,ContextProvider:y,Element:l,ForwardRef:_,Fragment:d,Lazy:w,Memo:x,Portal:f,Profiler:h,StrictMode:m,Suspense:g,isAsyncMode:function(t){return k(t)||S(t)===b},isConcurrentMode:k,isContextConsumer:function(t){return S(t)===v},isContextProvider:function(t){return S(t)===y},isElement:function(t){return"object"==typeof t&&null!==t&&t.$$typeof===l},isForwardRef:function(t){return S(t)===_},isFragment:function(t){return S(t)===d},isLazy:function(t){return S(t)===w},isMemo:function(t){return S(t)===x},isPortal:function(t){return S(t)===f},isProfiler:function(t){return S(t)===h},isStrictMode:function(t){return S(t)===m},isSuspense:function(t){return S(t)===g},isValidElementType:function(t){return"string"==typeof t||"function"==typeof t||t===d||t===j||t===h||t===m||t===g||t===O||"object"==typeof t&&null!==t&&(t.$$typeof===w||t.$$typeof===x||t.$$typeof===y||t.$$typeof===v||t.$$typeof===_||t.$$typeof===C||t.$$typeof===R||t.$$typeof===P||t.$$typeof===E)},typeOf:S};u((function(t,e){})),u((function(t){t.exports=z})),function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var o={};"abcdefghijklmnopqrst".split("").forEach((function(t){o[t]=t})),Object.keys(Object.assign({},o)).join("")}catch(t){return!1}}();function M(){}function T(){}Function.call.bind(Object.prototype.hasOwnProperty),T.resetWarningCache=M;var Z=u((function(t){t.exports=function(){function t(t,e,n,o,r,i){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==i){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:T,resetWarningCache:M};return n.PropTypes=n,n}()})),$=c(u((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return t.displayName||t.name||("string"==typeof t&&t.length>0?t:"Unknown")}}))),A=function(t,e){var n={};for(var o in t)-1===e.indexOf(o)&&(n[o]=t[o]);return n},U="__global_unique_id__",N=function(){return a[U]=(a[U]||0)+1},W=function(){},q=u((function(t,e){e.__esModule=!0;var n=i(Z),r=i(N);function i(t){return t&&t.__esModule?t:{default:t}}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}i(W),e.default=function(t,e){var i,u,p="__create-react-context-"+(0,r.default)()+"__",l=function(t){function n(){var e,o,r,i;s(this,n);for(var c=arguments.length,u=Array(c),p=0;p<c;p++)u[p]=arguments[p];return e=o=a(this,t.call.apply(t,[this].concat(u))),o.emitter=(r=o.props.value,i=[],{on:function(t){i.push(t)},off:function(t){i=i.filter((function(e){return e!==t}))},get:function(){return r},set:function(t,e){r=t,i.forEach((function(t){return t(r,e)}))}}),a(o,e)}return c(n,t),n.prototype.getChildContext=function(){var t;return(t={})[p]=this.emitter,t},n.prototype.componentWillReceiveProps=function(t){if(this.props.value!==t.value){var n=this.props.value,o=t.value,r=void 0;((i=n)===(s=o)?0!==i||1/i==1/s:i!=i&&s!=s)?r=0:(r="function"==typeof e?e(n,o):1073741823,0!=(r|=0)&&this.emitter.set(t.value,r))}var i,s},n.prototype.render=function(){return this.props.children},n}(o.Component);l.childContextTypes=((i={})[p]=n.default.object.isRequired,i);var f=function(e){function n(){var t,o;s(this,n);for(var r=arguments.length,i=Array(r),c=0;c<r;c++)i[c]=arguments[c];return t=o=a(this,e.call.apply(e,[this].concat(i))),o.state={value:o.getValue()},o.onUpdate=function(t,e){0!=((0|o.observedBits)&e)&&o.setState({value:o.getValue()})},a(o,t)}return c(n,e),n.prototype.componentWillReceiveProps=function(t){var e=t.observedBits;this.observedBits=null==e?1073741823:e},n.prototype.componentDidMount=function(){this.context[p]&&this.context[p].on(this.onUpdate);var t=this.props.observedBits;this.observedBits=null==t?1073741823:t},n.prototype.componentWillUnmount=function(){this.context[p]&&this.context[p].off(this.onUpdate)},n.prototype.getValue=function(){return this.context[p]?this.context[p].get():t},n.prototype.render=function(){return(t=this.props.children,Array.isArray(t)?t[0]:t)(this.state.value);var t},n}(o.Component);return f.contextTypes=((u={})[p]=n.default.object,u),{Provider:l,Consumer:f}},t.exports=e.default}));c(q);var D=c(u((function(t,e){e.__esModule=!0;var n=i(o),r=i(q);function i(t){return t&&t.__esModule?t:{default:t}}e.default=n.default.createContext||r.default,t.exports=e.default}))),B=D(null),L=D(null),F=function(t){return function(e){return o.createElement(L.Consumer,null,(function(n){return o.createElement(t,Object.assign({},{parent:n},e))}))}};function I(t,e,n){void 0===e&&(e=!1),void 0===n&&(n=[]);var r=function(r){function i(){r.call(this),this.state={loading:!0},this._isMounted=!1}return r&&(i.__proto__=r),(i.prototype=Object.create(r&&r.prototype)).constructor=i,i.prototype.componentDidMount=function(){var t=this;this._isMounted=!0,this.props.ymaps.load().then((function(e){return Promise.all(n.concat(t.props.modules).map(e.loadModule)).then((function(){!0===t._isMounted&&t.setState({loading:!1},(function(){t.props.onLoad(e)}))}))})).catch((function(e){!0===t._isMounted&&t.props.onError(e)}))},i.prototype.componentWillUnmount=function(){this._isMounted=!1},i.prototype.render=function(){var n=this.props.ymaps,r=!1===e||!1===this.state.loading,i=A(this.props,["onLoad","onError","modules","ymaps"]);return r&&o.createElement(t,Object.assign({},{ymaps:n.getApi()},i))},i}(o.Component);return r.defaultProps={onLoad:Function.prototype,onError:Function.prototype,modules:[]},function(t){var e=$(t);return function(n){return o.createElement(B.Consumer,null,(function(r){if(null===r)throw new Error("Couldn't find Yandex.Maps API in the context. Make sure that <"+e+" /> is inside <YMaps /> provider");return o.createElement(t,Object.assign({},{ymaps:r},n))}))}}(r)}var V={lang:"ru_RU",load:"",ns:"",mode:"release"},X={},Y=function(t){var e=Date.now().toString(32);this.options=t,this.namespace=t.query.ns||V.ns,this.onload="__yandex-maps-api-onload__$$"+e,this.onerror="__yandex-maps-api-onerror__$$"+e};Y.prototype.getApi=function(){return"undefined"!=typeof window&&this.namespace?window[this.namespace]:this.api},Y.prototype.setApi=function(t){return this.api=t},Y.prototype.getPromise=function(){return this.namespace?X[this.namespace]:this.promise},Y.prototype.setPromise=function(t){return this.namespace?X[this.namespace]=this.promise=t:this.promise=t},Y.prototype.load=function(){var t=this;if(this.getApi())return Promise.resolve(this.setApi(this.getApi()));if(this.getPromise())return this.setPromise(this.getPromise());var e=Object.assign({onload:this.onload,onerror:this.onerror},V,this.options.query),n=Object.keys(e).map((function(t){return t+"="+e[t]})).join("&"),o=["https://"+(this.options.enterprise?"enterprise.":"")+"api-maps.yandex.ru",this.options.version,"?"+n].join("/"),r=new Promise((function(e,n){window[t.onload]=function(n){delete window[t.onload],n.loadModule=t.loadModule.bind(t),n.ready((function(){return e(t.setApi(n))}))},window[t.onerror]=function(e){delete window[t.onerror],n(e)},t.fetchScript(o).catch(window[t.onerror])}));return this.setPromise(r)},Y.prototype.fetchScript=function(t){var e=this;return new Promise((function(n,o){e.script=document.createElement("script"),e.script.type="text/javascript",e.script.onload=n,e.script.onerror=o,e.script.src=t,e.script.async="async",document.head.appendChild(e.script)}))},Y.prototype.loadModule=function(t){var e=this;return new Promise((function(n,o){e.getApi().modules.require(t,(function(o){!function(t,e,n,o){void 0===o&&(o=!1),e="string"==typeof e?e.split("."):e.slice();for(var r,i=t;e.length>1;)i[r=e.shift()]||(i[r]={}),i=i[r];i[e[0]]=!0===o&&i[e[0]]||n}(e.api,t,o,!0),n(o)}),o,e.getApi())}))},Y._name="__react-yandex-maps__";var G=function(t){function e(e){t.call(this,e),this.ymaps=new Y(e)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.componentDidMount=function(){!0===this.props.preload&&this.ymaps.load()},e.prototype.render=function(){return o.createElement(B.Provider,{value:this.ymaps},this.props.children)},e}(o.Component);G.defaultProps={version:"2.1",enterprise:!1,query:{lang:"ru_RU",load:"",ns:""},preload:!1};var H=/^on(?=[A-Z])/;function K(t){return Object.keys(t).reduce((function(e,n){if(H.test(n)){var o=n.replace(H,"").toLowerCase();e._events[o]=t[n]}else e[n]=t[n];return e}),{_events:{}})}function J(t,e,n){"function"==typeof n&&t.events.add(e,n)}function Q(t,e,n){"function"==typeof n&&t.events.remove(e,n)}function tt(t,e,n){Object.keys(Object.assign({},e,n)).forEach((function(o){e[o]!==n[o]&&(Q(t,o,e[o]),J(t,o,n[o]))}))}var et=function(t){return"default"+t.charAt(0).toUpperCase()+t.slice(1)};function nt(t,e){return void 0!==t[e]||void 0===t[et(e)]}function ot(t,e,n){return(nt(t,e)?t[e]:t[et(e)])||n}function rt(t,e,n){if(void 0===n&&(n=null),t!==e){if(t&&(t.hasOwnProperty("current")?t.current=null:"function"==typeof t&&t(null)),!e)return;e.hasOwnProperty("current")?e.current=n:"function"==typeof e&&e(n)}}function it(t){var e=t.width,n=t.height,o=t.style,r=t.className;return void 0!==o||void 0!==r?Object.assign({},o&&{style:o},r&&{className:r}):{style:{width:e,height:n}}}var st=function(t){function e(){var e=this;t.call(this),this.state={instance:null},this._parentElement=null,this._getRef=function(t){e._parentElement=t}}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.componentDidMount=function(){var t=e.mountObject(this._parentElement,this.props.ymaps.Map,this.props);this.setState({instance:t})},e.prototype.componentDidUpdate=function(t){null!==this.state.instance&&e.updateObject(this.state.instance,t,this.props)},e.prototype.componentWillUnmount=function(){e.unmountObject(this.state.instance,this.props)},e.prototype.render=function(){var t=it(this.props),e=K(this.props),n=A(e,["_events","state","defaultState","options","defaultOptions","instanceRef","ymaps","children","width","height","style","className"]);return o.createElement(L.Provider,{value:this.state.instance},o.createElement("div",Object.assign({},{ref:this._getRef},t,n),this.props.children))},e.mountObject=function(t,e,n){var o=K(n),r=o.instanceRef,i=o._events,s=new e(t,ot(n,"state"),ot(n,"options"));return Object.keys(i).forEach((function(t){return J(s,t,i[t])})),rt(null,r,s),s},e.updateObject=function(t,e,n){var o=K(n),r=o._events,i=o.instanceRef,s=K(e),a=s._events,c=s.instanceRef;if(nt(n,"state")){var u=ot(e,"state",{}),p=ot(n,"state",{});u.type!==p.type&&t.setType(p.type),u.behaviors!==p.behaviors&&(u.behaviors&&t.behaviors.disable(u.behaviors),p.behaviors&&t.behaviors.enable(p.behaviors)),p.zoom&&u.zoom!==p.zoom&&t.setZoom(p.zoom),p.center&&u.center!==p.center&&t.setCenter(p.center),p.bounds&&u.bounds!==p.bounds&&t.setBounds(p.bounds)}if(nt(n,"options")){var l=ot(e,"options"),f=ot(n,"options",{});l!==f&&t.options.set(f)}ot(e,"width")===ot(n,"width")&&ot(e,"height")===ot(n,"height")||t.container.fitToViewport(),tt(t,a,r),rt(c,i,t)},e.unmountObject=function(t,e){var n=K(e),o=n.instanceRef,r=n._events;null!==t&&(Object.keys(r).forEach((function(e){return Q(t,e,r[e])})),t.destroy(),rt(o))},e}(o.Component);st.defaultProps={width:320,height:240};var at=I(st,!0,["Map"]),ct=function(t){function e(){var e=this;t.call(this),this.state={instance:null},this._parentElement=null,this._getRef=function(t){e._parentElement=t}}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.componentDidMount=function(){var t=this;this._mounted=!0,this.props.ymaps.panorama.isSupported()&&e.mountObject(this._parentElement,this.props.ymaps.panorama,this.props).then((function(e){return t._mounted&&t.setState({instance:e})}))},e.prototype.componentDidUpdate=function(t){null!==this.state.instance&&e.updateObject(this.state.instance,t,this.props)},e.prototype.componentWillUnmount=function(){this._mounted=!1,e.unmountObject(this.state.instance,this.props)},e.prototype.render=function(){var t=it(this.props);return o.createElement("div",Object.assign({},{ref:this._getRef},t))},e.mountObject=function(t,e,n){var o=K(n),r=o.instanceRef,i=o._events,s=ot(n,"point"),a=ot(n,"locateOptions"),c=ot(n,"options");return new Promise((function(n,o){e.locate(s,a).done((function(o){if(o.length>0){var s=new e.Player(t,o[0],c);rt(null,r,s),Object.keys(i).forEach((function(t){return J(s,t,i[t])})),n(s)}}),o)}))},e.updateObject=function(t,e,n){var o=K(n),r=o._events,i=o.instanceRef,s=K(e),a=s._events,c=s.instanceRef;if(nt(n,"options")){var u=ot(e,"options"),p=ot(n,"options");u!==p&&t.options.set(p)}if(nt(n,"point")){var l=ot(n,"point"),f=ot(e,"point"),d=ot(n,"locateOptions");l!==f&&t.moveTo(l,d)}tt(t,a,r),rt(c,i,t)},e.unmountObject=function(t,e){var n=K(e),o=n.instanceRef,r=n._events;null!==t&&(Object.keys(r).forEach((function(e){return Q(t,e,r[e])})),rt(o))},e}(o.Component);ct.defaultProps={width:320,height:240};I(ct,!0,["panorama.isSupported","panorama.locate","panorama.createPlayer","panorama.Player"]);var ut=function(t){function e(){t.call(this),this.state={instance:null}}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.componentDidMount=function(){var t=e.mountControl(this.props.ymaps.control[this.props.name],this.props);this.setState({instance:t})},e.prototype.componentDidUpdate=function(t){null!==this.state.instance&&e.updateControl(this.state.instance,t,this.props)},e.prototype.componentWillUnmount=function(){e.unmountControl(this.state.instance,this.props)},e.prototype.render=function(){return o.createElement(L.Provider,{value:this.state.instance},this.props.children)},e.mountControl=function(t,e){var n=K(e),o=n.instanceRef,r=n.parent,i=n.lazy,s=n._events,a=new t({data:ot(e,"data"),options:ot(e,"options"),state:ot(e,"state"),mapTypes:ot(e,"mapTypes"),lazy:i});if(Object.keys(s).forEach((function(t){return J(a,t,s[t])})),r&&r.controls&&"function"==typeof r.controls.add)r.controls.add(a);else{if(!r||!r.add||"function"!=typeof r.add)throw new Error("No parent found to mount "+e.name);r.add(a)}return rt(null,o,a),a},e.updateControl=function(t,e,n){var o=K(n),r=o._events,i=o.instanceRef,s=K(e),a=s._events,c=s.instanceRef;if(nt(n,"options")){var u=ot(e,"options"),p=ot(n,"options");u!==p&&t.options.set(p)}if(nt(n,"data")){var l=ot(e,"data"),f=ot(n,"data");l!==f&&t.data.set(f)}if(nt(n,"state")){var d=ot(e,"state"),m=ot(n,"state");d!==m&&t.state.set(m)}if(nt(n,"mapTypes")){var h=ot(e,"mapTypes"),y=ot(n,"mapTypes");h!==y&&(t.removeAllMapTypes(),y.forEach((function(e){return t.addMapType(e)})))}tt(t,a,r),rt(c,i,t)},e.unmountControl=function(t,e){var n=K(e),o=n.instanceRef,r=n.parent,i=n._events;null!==t&&(Object.keys(i).forEach((function(e){return Q(t,e,i[e])})),r.controls&&"function"==typeof r.controls.remove?r.controls.remove(t):r.remove&&"function"==typeof r.remove&&r.remove(t),rt(o))},e}(o.Component),pt=(F(I((function(t){return o.createElement(ut,Object.assign({},t,{name:"Button"}))}),!0,["control.Button"])),F(I((function(t){return o.createElement(ut,Object.assign({},t,{name:"FullscreenControl"}))}),!0,["control.FullscreenControl"])),F(I((function(t){return o.createElement(ut,Object.assign({},t,{name:"GeolocationControl"}))}),!0,["control.GeolocationControl"])),F(I((function(t){return o.createElement(ut,Object.assign({},t,{name:"ListBox"}))}),!0,["control.ListBox"])),F(I((function(t){return o.createElement(ut,Object.assign({},t,{name:"ListBoxItem"}))}),!0,["control.ListBoxItem"])),F(I((function(t){return o.createElement(ut,Object.assign({},t,{name:"RouteButton"}))}),!0,["control.RouteButton"])),F(I((function(t){return o.createElement(ut,Object.assign({},t,{name:"RouteEditor"}))}),!0,["control.RouteEditor"])),F(I((function(t){return o.createElement(ut,Object.assign({},t,{name:"RoutePanel"}))}),!0,["control.RoutePanel"])),F(I((function(t){return o.createElement(ut,Object.assign({},t,{name:"RulerControl"}))}),!0,["control.RulerControl"])),F(I((function(t){return o.createElement(ut,Object.assign({},t,{name:"SearchControl"}))}),!0,["control.SearchControl"])),F(I((function(t){return o.createElement(ut,Object.assign({},t,{name:"TrafficControl"}))}),!0,["control.TrafficControl"])),F(I((function(t){return o.createElement(ut,Object.assign({},t,{name:"TypeSelector"}))}),!0,["control.TypeSelector"])),F(I((function(t){return o.createElement(ut,Object.assign({},t,{name:"ZoomControl"}))}),!0,["control.ZoomControl"])),F(I(function(t){function e(){t.call(this),this.state={instance:null}}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.componentDidMount=function(){var t=e.mountObject(this.props.ymaps.Clusterer,this.props);this.setState({instance:t})},e.prototype.componentDidUpdate=function(t){null!==this.state.instance&&e.updateObject(this.state.instance,t,this.props)},e.prototype.componentWillUnmount=function(){e.unmountObject(this.state.instance,this.props)},e.prototype.render=function(){return o.createElement(L.Provider,{value:this.state.instance},this.props.children)},e.mountObject=function(t,e){var n=K(e),o=n.instanceRef,r=n.parent,i=n._events,s=new t(ot(e,"options"));if(Object.keys(i).forEach((function(t){return J(s,t,i[t])})),r.geoObjects&&"function"==typeof r.geoObjects.add)r.geoObjects.add(s);else{if(!r.add||"function"!=typeof r.add)throw new Error("No parent found to mount Clusterer");r.add(s)}return rt(null,o,s),s},e.updateObject=function(t,e,n){var o=K(n),r=o._events,i=o.instanceRef,s=K(e),a=s._events,c=s.instanceRef;if(nt(n,"options")){var u=ot(e,"options"),p=ot(n,"options");u!==p&&t.options.set(p)}tt(t,a,r),rt(c,i,t)},e.unmountObject=function(t,e){var n=K(e),o=n.instanceRef,r=n.parent,i=n._events;null!==t&&(Object.keys(i).forEach((function(e){return Q(t,e,i[e])})),r.geoObjects&&"function"==typeof r.geoObjects.remove?r.geoObjects.remove(t):r.remove&&"function"==typeof r.remove&&r.remove(t),rt(o))},e}(o.Component),!0,["Clusterer"])),F(I(function(t){function e(){t.call(this),this.state={instance:null}}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.componentDidMount=function(){var t=e.mountObject(this.props.ymaps.ObjectManager,this.props);this.setState({instance:t})},e.prototype.componentDidUpdate=function(t){null!==this.state.instance&&e.updateObject(this.state.instance,t,this.props)},e.prototype.componentWillUnmount=function(){e.unmountObject(this.state.instance,this.props)},e.prototype.render=function(){return null},e.mountObject=function(t,e){var n=K(e),o=n.instanceRef,r=n.parent,i=n._events,s=ot(e,"options",{}),a=ot(e,"features",{}),c=ot(e,"filter",null),u=ot(e,"objects",{}),p=ot(e,"clusters",{}),l=new t(s);if(l.add(a||[]),l.setFilter(c),l.objects.options.set(u),l.clusters.options.set(p),Object.keys(i).forEach((function(t){return J(l,t,i[t])})),r.geoObjects&&"function"==typeof r.geoObjects.add)r.geoObjects.add(l);else{if(!r.add||"function"!=typeof r.add)throw new Error("No parent found to mount ObjectManager");r.add(l)}return rt(null,o,l),l},e.updateObject=function(t,e,n){var o=K(n),r=o._events,i=o.instanceRef,s=K(e),a=s._events,c=s.instanceRef;if(nt(n,"options")){var u=ot(e,"options"),p=ot(n,"options");u!==p&&t.options.set(p)}if(nt(n,"objects")){var l=ot(e,"objects"),f=ot(n,"objects");l!==f&&t.objects.options.set(f)}if(nt(n,"clusters")){var d=ot(e,"clusters"),m=ot(n,"clusters");d!==m&&t.clusters.options.set(m)}if(nt(n,"filter")){var h=ot(e,"filter"),y=ot(n,"filter");h!==y&&t.setFilter(y)}if(nt(n,"features")){var v=ot(e,"features"),b=ot(n,"features");v!==b&&(t.remove(v),t.add(b))}tt(t,a,r),rt(c,i,t)},e.unmountObject=function(t,e){var n=K(e),o=n.instanceRef,r=n.parent,i=n._events;null!==t&&(Object.keys(i).forEach((function(e){return Q(t,e,i[e])})),r.geoObjects&&"function"==typeof r.geoObjects.remove?r.geoObjects.remove(t):r.remove&&"function"==typeof r.remove&&r.remove(t),rt(o))},e}(o.Component),!0,["ObjectManager"])),function(t){function e(){t.call(this),this.state={instance:null}}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.componentDidMount=function(){var t=this.props,n=t.name,o=t.ymaps,r=t.dangerZone,i=e.mountObject(r&&"function"==typeof r.modifyConstructor?r.modifyConstructor(o[n]):o[n],this.props);this.setState({instance:i})},e.prototype.componentDidUpdate=function(t){null!==this.state.instance&&e.updateObject(this.state.instance,t,this.props)},e.prototype.componentWillUnmount=function(){e.unmountObject(this.state.instance,this.props)},e.prototype.render=function(){return null},e.mountObject=function(t,e){var n=K(e),o=n.instanceRef,r=n.parent,i=n._events,s=new t(ot(e,"geometry"),ot(e,"properties"),ot(e,"options"));if(Object.keys(i).forEach((function(t){return J(s,t,i[t])})),r&&r.geoObjects&&"function"==typeof r.geoObjects.add)r.geoObjects.add(s);else{if(!r||!r.add||"function"!=typeof r.add)throw new Error("No parent found to mount "+e.name);r.add(s)}return rt(null,o,s),s},e.updateObject=function(t,e,n){var o=K(n),r=o._events,i=o.instanceRef,s=K(e),a=s._events,c=s.instanceRef;if(nt(n,"geometry")){var u=ot(e,"geometry",{}),p=ot(n,"geometry",{});Array.isArray(p)&&p!==u?Array.isArray(p[0])&&"number"==typeof p[1]?(t.geometry.setCoordinates(p[0]),t.geometry.setRadius(p[1])):t.geometry.setCoordinates(p):"object"==typeof p&&(p.coordinates!==u.coordinates&&t.geometry.setCoordinates(p.coordinates),p.radius!==u.radius&&t.geometry.setRadius(p.radius))}if(nt(n,"properties")){var l=ot(e,"properties"),f=ot(n,"properties");l!==f&&t.properties.set(f)}if(nt(n,"options")){var d=ot(e,"options"),m=ot(n,"options");d!==m&&t.options.set(m)}tt(t,a,r),rt(c,i,t)},e.unmountObject=function(t,e){var n=K(e),o=n.instanceRef,r=n.parent,i=n._events;null!==t&&(Object.keys(i).forEach((function(e){return Q(t,e,i[e])})),r.geoObjects&&"function"==typeof r.geoObjects.remove?r.geoObjects.remove(t):r.remove&&"function"==typeof r.remove&&r.remove(t),rt(o))},e}(o.Component)),lt={modifyConstructor:function(t){function e(e,n,o){t.call(this,{geometry:e,properties:n},o)}return e.prototype=t.prototype,e}},ft=(F(I((function(t){return o.createElement(pt,Object.assign({},t,{name:"GeoObject",dangerZone:lt}))}),!0,["GeoObject"])),F(I((function(t){return o.createElement(pt,Object.assign({},t,{name:"Circle"}))}),!0,["Circle"])),F(I((function(t){return o.createElement(pt,Object.assign({},t,{name:"Placemark"}))}),!0,["Placemark"]))),dt=(F(I((function(t){return o.createElement(pt,Object.assign({},t,{name:"Polygon"}))}),!0,["Polygon"])),F(I((function(t){return o.createElement(pt,Object.assign({},t,{name:"Polyline"}))}),!0,["Polyline"])),F(I((function(t){return o.createElement(pt,Object.assign({},t,{name:"Rectangle"}))}),!0,["Rectangle"])),{hero:"contact_hero__5OQXF",infoWrapper:"contact_infoWrapper__tqorj",info:"contact_info__SsPg-",headline:"contact_headline__r4Ite",mapWrapper:"contact_mapWrapper__kZy4X",formWrapper:"contact_formWrapper__zVaVH"}),mt=n(8214),ht=n(5861),yt=n(885),vt=n(4569),bt=n.n(vt),jt=n(8666),_t=n(816),gt=n(5882),Ot=n(184),xt=function(){var t=(0,jt.Kw)((function(t){return t.displayLanguage})),e=(0,o.useRef)(null),n=(0,o.useRef)(null),r=(0,o.useRef)(null),i=(0,o.useRef)(null),s=(0,o.useState)(!1),a=(0,yt.Z)(s,2),c=a[0],u=a[1],p=function(){var t=(0,ht.Z)((0,mt.Z)().mark((function t(e){var o;return(0,mt.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.preventDefault(),u(!0),o={name:n.current.value,email:r.current.value,text:i.current.value};try{bt().post("https://teripure-server.onrender.com/messages",o)}catch(e){}finally{u(!1)}case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return(0,Ot.jsx)("div",{className:dt.formWrapper,children:(0,Ot.jsxs)("form",{ref:e,onSubmit:p,children:[(0,Ot.jsx)("h2",{children:(0,Ot.jsx)(gt.Z,{ru:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",uz:"Xabar yuborish"})}),(0,Ot.jsxs)("div",{children:[(0,Ot.jsx)("input",{type:"text",name:"name",id:"name",placeholder:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439"===t?"\u041f\u043e\u043b\u043d\u043e\u0435 \u0438\u043c\u044f":"Ism va familiya",ref:n,required:!0}),(0,Ot.jsx)("input",{type:"email",name:"email",id:"email",placeholder:"Email",ref:r,required:!0})]}),(0,Ot.jsx)("textarea",{name:"text",id:"text",rows:"10",placeholder:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439"===t?"\u0422\u0435\u043a\u0441\u0442 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f":"Xabar matni",ref:i,required:!0}),(0,Ot.jsxs)("div",{children:[(0,Ot.jsx)("input",{type:"checkbox",name:"agree",id:"agree",defaultChecked:!0,required:!0}),(0,Ot.jsx)("label",{htmlFor:"agree",children:(0,Ot.jsx)(gt.Z,{ru:"\u0421\u043e\u0433\u043b\u0430\u0441\u0438\u0435 \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445",uz:"Shaxsiy ma'lumotlarni qayta ishlashga rozilik"})})]}),(0,Ot.jsx)(_t.Z,{isLoading:c,children:(0,Ot.jsx)(gt.Z,{lang:t,ru:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c",uz:"Yuborish"})})]})})},wt=function(){return(0,Ot.jsx)(Ot.Fragment,{children:(0,Ot.jsxs)(i.Z,{children:[(0,Ot.jsxs)("div",{className:dt.hero,children:[(0,Ot.jsx)("h1",{children:(0,Ot.jsx)(gt.Z,{ru:"\u041e\u0441\u0442\u0430\u0432\u0430\u0439\u0442\u0435\u0441\u044c \u0441 \u043d\u0430\u043c\u0438 \u043d\u0430 \u0441\u0432\u044f\u0437\u0438",uz:"Biz bilan aloqada bo'ling"})}),(0,Ot.jsxs)("h2",{children:[(0,Ot.jsx)(gt.Z,{ru:"\u041c\u044b \u0437\u0434\u0435\u0441\u044c, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043c\u043e\u0447\u044c \u0438 \u043e\u0442\u0432\u0435\u0442\u0438\u0442\u044c \u043d\u0430 \u043b\u044e\u0431\u043e\u0439 \u0432\u0430\u0448 \u0432\u043e\u043f\u0440\u043e\u0441.",uz:"Biz yordam berish va har qanday savolingizga javob berish uchun shu yerdamiz."}),(0,Ot.jsx)("br",{}),(0,Ot.jsx)(gt.Z,{ru:"\u041c\u044b \u0441 \u043d\u0435\u0442\u0435\u0440\u043f\u0435\u043d\u0438\u0435\u043c \u0436\u0434\u0435\u043c \u0443\u0441\u043b\u044b\u0448\u0430\u0442\u044c \u043e\u0442 \u0432\u0430\u0441",uz:"Sizdan xabar kutib qolamiz"})]})]}),(0,Ot.jsxs)("div",{className:dt.infoWrapper,children:[(0,Ot.jsxs)("div",{className:dt.info,children:[(0,Ot.jsx)(s.kXE,{}),(0,Ot.jsxs)("div",{children:[(0,Ot.jsx)("p",{className:dt.headline,children:(0,Ot.jsx)(gt.Z,{ru:"\u0410\u0434\u0440\u0435\u0441",uz:"Manzil"})}),(0,Ot.jsxs)("address",{children:[(0,Ot.jsx)(gt.Z,{ru:'\u0411\u0438\u0437\u043d\u0435\u0441-\u0446\u0435\u043d\u0442\u0440 "\u0418\u043d\u043a\u043e\u043d\u0435\u043b\u044c"',uz:'"Inkonel" biznes markazi"'}),(0,Ot.jsx)("br",{}),(0,Ot.jsx)(gt.Z,{ru:"75, \u043f\u0440\u043e\u0441\u043f\u0435\u043a\u0442 \u041c\u0443\u0441\u0442\u0430\u043a\u0438\u043b\u043b\u0438\u043a",uz:"75, Mustaqillik shox ko'chasi"}),(0,Ot.jsx)("br",{}),(0,Ot.jsx)(gt.Z,{ru:"\u0422\u0430\u0448\u043a\u0435\u043d\u0442, \u0423\u0437\u0431\u0435\u043a\u0438\u0441\u0442\u0430\u043d",uz:"Toshkent, O'zbekiston"}),(0,Ot.jsx)("br",{}),"100000"]})]})]}),(0,Ot.jsxs)("div",{className:dt.info,children:[(0,Ot.jsx)(s.Ty1,{}),(0,Ot.jsxs)("div",{children:[(0,Ot.jsx)("p",{className:dt.headline,children:(0,Ot.jsx)(gt.Z,{ru:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b",uz:"Kontaktlar "})}),(0,Ot.jsxs)("p",{children:[(0,Ot.jsx)("span",{children:(0,Ot.jsx)(gt.Z,{ru:"\u0413\u043e\u0440\u044f\u0447\u0430\u044f \u043b\u0438\u043d\u0438\u044f:",uz:"Ishonch raqami:"})})," ",(0,Ot.jsx)("a",{href:"tel:+998994766477",children:"+998 (99) 476 64 77"})]}),(0,Ot.jsx)("p",{children:(0,Ot.jsxs)("span",{children:[(0,Ot.jsx)(gt.Z,{ru:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u044b\u0439 \u0430\u0434\u0440\u0435\u0441:",uz:"Elektron manzil:"}),(0,Ot.jsxs)("a",{href:"mailto:info@teripure.uz",children:[" ","info@teripure.uz"]})]})}),(0,Ot.jsx)("p",{children:(0,Ot.jsxs)("span",{children:[(0,Ot.jsx)("img",{src:r,alt:"instagram",width:20,style:{marginRight:"4px",marginBottom:"1px"}}),(0,Ot.jsx)("a",{href:"https://instagram.com/teripure_uz",target:"_blank",rel:"noopener noreferrer",children:"teripure_uz"})]})})]})]}),(0,Ot.jsxs)("div",{className:dt.info,children:[(0,Ot.jsx)(s.dzk,{}),(0,Ot.jsxs)("div",{children:[(0,Ot.jsx)("p",{className:dt.headline,children:(0,Ot.jsx)(gt.Z,{ru:"\u0412\u0440\u0435\u043c\u044f \u0440\u0430\u0431\u043e\u0442\u044b:",uz:"Ish vaqti:"})}),(0,Ot.jsxs)("p",{children:[(0,Ot.jsx)("span",{children:(0,Ot.jsx)(gt.Z,{ru:"\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a-\u041f\u044f\u0442\u043d\u0438\u0446\u0430:",uz:"Dushanba-Juma:"})})," ","09:00 - 20:00"]}),(0,Ot.jsxs)("p",{children:[(0,Ot.jsx)("span",{children:(0,Ot.jsx)(gt.Z,{ru:"\u0421\u0443\u0431\u0431\u043e\u0442\u0430-\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435:",uz:"Shanba-Yakshanba:"})})," ","10:00 - 18:00"]})]})]})]}),(0,Ot.jsx)("div",{className:dt.mapWrapper,children:(0,Ot.jsx)(G,{children:(0,Ot.jsx)(at,{defaultState:{center:[41.32557,69.294599],zoom:13},width:"auto",className:dt.map,children:(0,Ot.jsx)(ft,{geometry:[41.3207479456,69.3002333068]})})})}),(0,Ot.jsx)(xt,{})]})})}}}]);
//# sourceMappingURL=828.b04cc809.chunk.js.map