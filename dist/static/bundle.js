!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n=window.webpackJsonp;window.webpackJsonp=function(t,r,i){for(var a,s,c=0,l=[];c<t.length;c++)s=t[c],o[s]&&l.push(o[s][0]),o[s]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);for(n&&n(t,r,i);l.length;)l.shift()()};var r={},o={2:0};t.e=function(e){function n(){s.onerror=s.onload=null,clearTimeout(c);var t=o[e];0!==t&&(t&&t[1](new Error("Loading chunk "+e+" failed.")),o[e]=void 0)}var r=o[e];if(0===r)return new Promise(function(e){e()});if(r)return r[2];var i=new Promise(function(t,n){r=o[e]=[t,n]});r[2]=i;var a=document.getElementsByTagName("head")[0],s=document.createElement("script");s.type="text/javascript",s.charset="utf-8",s.async=!0,s.timeout=12e4,t.nc&&s.setAttribute("nonce",t.nc),s.src=t.p+""+e+".static/bundle.js";var c=setTimeout(n,12e4);return s.onerror=s.onload=n,a.appendChild(s),i},t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t.oe=function(e){throw console.error(e),e},t(t.s=12)}([function(e,t){e.exports=React},function(e,t,n){"use strict"},function(e,t,n){"use strict";function r(e,t,n,r,i,a,s,c){if(o(t),!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,i,a,s,c],p=0;l=new Error(t.replace(/%s/g,function(){return u[p++]})),l.name="Invariant Violation"}throw l.framesToPop=1,l}}var o=function(e){};e.exports=r},function(e,t,n){e.exports=n.p+"400defe787762418c5d7d4dba117c39a.png"},function(e,t,n){"use strict";function r(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,s,c=r(e),l=1;l<arguments.length;l++){n=Object(arguments[l]);for(var u in n)i.call(n,u)&&(c[u]=n[u]);if(o){s=o(n);for(var p=0;p<s.length;p++)a.call(n,s[p])&&(c[s[p]]=n[s[p]])}}return c}},function(e,t){function n(e){console.warn("[react-ga]",e)}e.exports=n},function(e,t){function n(e){return e.replace(/^\s+|\s+$/g,"")}e.exports=n},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(0),s=n.n(a),c=n(11),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(30);var u=n(3);n(20),n(19);var p=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={show_moreinfo:!1},n}return i(t,e),l(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.state.show_moreinfo?{display:"block"}:{display:"none"},n=this.state.show_moreinfo?"Less":"More info";return s.a.createElement("div",{id:"app"},s.a.createElement("div",{id:"info"},s.a.createElement("img",{src:u,style:{float:"left",marginTop:-5,width:20,height:27}}),s.a.createElement("div",{className:"title"},s.a.createElement("strong",null,"Death in New York City"),s.a.createElement("a",{className:"moreinfo",href:"#",onClick:function(){return e.setState({show_moreinfo:!e.state.show_moreinfo})}},n)),s.a.createElement("p",{style:t},"This is a map of deaths that occurred in New York City in 2015 and 2016. It's incomplete and imperfect."),s.a.createElement("p",{style:t},'For some categories/data-sources there\'s data going as far back as 2006. Check the "Show All Years" button to see that.'),s.a.createElement("p",{style:t},"For more information, see limitations or the github repo.")),s.a.createElement(c.a,null))}}]),t}(s.a.Component);t.a=p},function(e,t,n){var r=n(26),o=n(28),i=n(6),a=n(5),s=n(25),c=!1,l=!0,u=function(e){return r(e,l)},p={initialize:function(e,t){if(!e)return void a("gaTrackingID is required in initialize()");t&&(t.debug&&!0===t.debug&&(c=!0),!1===t.titleCase&&(l=!1)),function(e,t,n,r,o,i,a){e.GoogleAnalyticsObject=o,e[o]=e[o]||function(){(e[o].q=e[o].q||[]).push(arguments)},e[o].l=1*new Date,i=t.createElement(n),a=t.getElementsByTagName(n)[0],i.async=1,i.src="https://www.google-analytics.com/analytics.js",a.parentNode.insertBefore(i,a)}(window,document,"script",0,"ga"),t&&t.gaOptions?ga("create",e,t.gaOptions):ga("create",e,"auto")},ga:function(){return arguments.length>0?(ga.apply(this,arguments),void(c&&(s("called ga('arguments');"),s("with arguments: "+JSON.stringify([].slice.apply(arguments)))))):ga},set:function(e){if("function"==typeof ga){if(!e)return void a("`fieldsObject` is required in .set()");if("object"!=typeof e)return void a("Expected `fieldsObject` arg to be an Object");0===Object.keys(e).length&&a("empty `fieldsObject` given to .set()"),ga("set",e),c&&(s("called ga('set', fieldsObject);"),s("with fieldsObject: "+JSON.stringify(e)))}},send:function(e){"function"==typeof ga&&(ga("send",e),c&&(s("called ga('send', fieldObject);"),s("with fieldObject: "+JSON.stringify(e))))},pageview:function(e){return e?""===(e=i(e))?void a("path cannot be an empty string in .pageview()"):void("function"==typeof ga&&(ga("send","pageview",e),c&&(s("called ga('send', 'pageview', path);"),s("with path: "+e)))):void a("path is required in .pageview()")},modalview:function(e){if(!e)return void a("modalName is required in .modalview(modalName)");if(e=i(e),""===(e=o(e)))return void a("modalName cannot be an empty string or a single / in .modalview()");if("function"==typeof ga){e=i(e);var t="/modal/"+e;ga("send","pageview",t),c&&(s("called ga('send', 'pageview', path);"),s("with path: "+t))}},timing:function(e){if("function"==typeof ga){if(!(e&&e.category&&e.variable&&e.value&&"number"==typeof e.value))return void a("args.category, args.variable AND args.value are required in timing() AND args.value has to be a number");var t={hitType:"timing",timingCategory:u(e.category),timingVar:u(e.variable),timingValue:e.value};e.label&&(t.timingLabel=u(e.label)),this.send(t)}},event:function(e){if("function"==typeof ga){if(!e||!e.category||!e.action)return void a("args.category AND args.action are required in event()");var t={hitType:"event",eventCategory:u(e.category),eventAction:u(e.action)};e.label&&(t.eventLabel=u(e.label)),e.hasOwnProperty("value")&&("number"!=typeof e.value?a("Expected `args.value` arg to be a Number."):t.eventValue=e.value),e.nonInteraction&&("boolean"!=typeof e.nonInteraction?a("`args.nonInteraction` must be a boolean."):t.nonInteraction=e.nonInteraction),e.transport&&("string"!=typeof e.transport?a("`args.transport` must be a string."):(-1===["beacon","xhr","image"].indexOf(e.transport)&&a("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),t.transport=e.transport)),this.send(t)}},exception:function(e){if("function"==typeof ga){var t={hitType:"exception"};e.description&&(t.exDescription=u(e.description)),void 0!==e.fatal&&("boolean"!=typeof e.fatal?a("`args.fatal` must be a boolean."):t.exFatal=e.fatal),this.send(t)}},plugin:{require:function(e,t){if("function"==typeof ga)return e?(e=i(e),""===e?void a("`name` cannot be an empty string in .require()"):t?"object"!=typeof t?void a("Expected `options` arg to be an Object"):(0===Object.keys(t).length&&a("Empty `options` given to .require()"),ga("require",e,t),void(c&&s("called ga('require', '"+e+"', "+JSON.stringify(t)+");"))):(ga("require",e),void(c&&s("called ga('require', '"+e+"');")))):void a("`name` is required in .require()")},execute:function(){var e,t,n=Array.prototype.slice.call(arguments),r=n[0],o=n[1];if(3===n.length?e=n[2]:(t=n[2],e=n[3]),"function"==typeof ga)if("string"!=typeof r)a("Expected `pluginName` arg to be a String.");else if("string"!=typeof o)a("Expected `action` arg to be a String.");else{var i=r+":"+o;e=e||null,t&&e?(ga(i,t,e),c&&(s("called ga('"+i+"');"),s('actionType: "'+t+'" with payload: '+JSON.stringify(e)))):e?(ga(i,e),c&&(s("called ga('"+i+"');"),s("with payload: "+JSON.stringify(e)))):(ga(i),c&&s("called ga('"+i+"');"))}}},outboundLink:function(e,t){if("function"!=typeof t)return void a("hitCallback function is required");if("function"==typeof ga){if(!e||!e.label)return void a("args.label is required in outboundLink()");var n={hitType:"event",eventCategory:"Outbound",eventAction:"Click",eventLabel:u(e.label)},r=!1,o=function(){r=!0,t()},i=setTimeout(o,250),s=function(){clearTimeout(i),r||t()};n.hitCallback=s,this.send(n)}else setTimeout(t,0)}},f=n(24);f.origTrackLink=f.trackLink,f.trackLink=p.outboundLink.bind(p),p.OutboundLink=f,e.exports=p},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t,n){var r=n.value;i(t,n.scale(r,e),r)}function i(e,t,n){e.style.textAlign="center",e.style.display="block",e.style.borderRadius="50%",e.style.borderWidth="1px",e.style.borderColor="white",e.style.borderStyle="solid",e.style.color="white",e.style.backgroundColor="rgba(100, 150, 150, 0.35)",e.style.width=t+"px",e.style.height=t+"px",e.innerHTML=n.toLocaleString()}var a=(n(1),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}());!function(){function e(t){r(this,e),this.options=t}a(e,[{key:"onAdd",value:function(e){var t=this;return this._map=e,this._container=document.createElement("div"),this._container.className="mapboxgl-ctrl",this._legend_el=document.createElement("span"),this._legend_el.className="legend",this._container.appendChild(this._legend_el),this._map.on("move",function(e){return t._onMove(e)}),this._onMove(),this._container}},{key:"_onMove",value:function(e){o(this._map,this._legend_el,this.options)}},{key:"getDefaultPosition",value:function(){return"bottom-right"}},{key:"onRemove",value:function(){this._container.parentNode.removeChild(this._container),this._map.off("move",this._onMove),this._map=void 0}}])}()},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e){return new Promise(function(t,r){n.e(0).then(function(){var r=n(35),o=c(r);t([o,e])}.bind(null,n)).catch(n.oe)})}function s(e){return new Promise(function(t,r){n.e(1).then(function(){var r=n(34),o=c(r);t([o,e])}.bind(null,n)).catch(n.oe)})}function c(e){var t={features:[],type:"FeatureCollection"},n={},r=!0,o=!1,i=void 0;try{for(var a,s=e.entries()[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var c=v(a.value,2),u=(c[0],c[1]);u.lat=parseFloat(u.lat),u.lng=parseFloat(u.lng);var f=u.lat.toFixed(5)+" "+u.lng.toFixed(5);n[f]?(n[f]+=1,u=l(u,n[f])):n[f]=1,u.date=new Date(u.date),u.year=u.date.getFullYear();var d=p(u.lng,u.lat,u);t.features.push(d)}}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return t}function l(e,t){switch(t%4){case 0:e.lng+=-35e-6*t,e.lat+=35e-6*t;break;case 1:e.lng+=35e-6*t,e.lat+=-35e-6*t;break;case 2:e.lng+=35e-6*t,e.lat+=35e-6*t;break;case 3:e.lng+=-35e-6*t,e.lat+=-35e-6*t}return e}function u(e){return new Promise(function(t,n){var r=new g.a.Map({container:e,zoom:11,minZoom:9,maxZoom:17,attributionControl:!1,hash:!0,center:[-73.9,40.7147],maxBounds:_,style:d()});r.on("load",function(){return t(r)})})}function p(e,t){return{type:"Feature",properties:arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},geometry:{type:"Point",coordinates:[e,t]}}}function f(){return{id:"point",type:"symbol",source:"data",paint:{"icon-opacity":.65},layout:{"icon-image":"skull_d2_image","icon-allow-overlap":!0,"icon-size":{stops:[[8,.1],[9,.2],[10,.3],[11,.4],[12,.5],[14,1]]}}}}function d(){return{version:8,sources:{"simple-tiles":{type:"raster",tiles:["//stamen-tiles-b.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png"],tileSize:256}},layers:[{id:"simple-tiles",type:"raster",source:"simple-tiles",minzoom:0,maxzoom:22,paint:{"raster-opacity":.5}}]}}var h=n(0),m=n.n(h),y=n(33),g=n.n(y),v=(n(10),n(1),function(){function e(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()),b=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),w=n(3);g.a.accessToken="pk.eyJ1IjoiemlzY2h3YXJ0eiIsImEiOiJjaXhxOXp5eGIwOHJqMzNubnI2Zjh2a2RjIn0.CMKNggl2Se8uH0GEKEJcJw",window.mapboxgl=g.a;var _=[[-74.74196394032323,40.3494562505725],[-73.15855939931218,41.093616974660364]],x=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={all_years:!1,all_years_loaded:!1,active_kinds:{vehicle:!0,crime:!0,by_police:!0,work:!0}},n}return i(t,e),b(t,[{key:"get_active_kinds",value:function(){var e=[],t=!0,n=!1,r=void 0;try{for(var o,i=Object.entries(this.state.active_kinds)[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var a=v(o.value,2),s=a[0];a[1]&&e.push(s[0])}}catch(e){n=!0,r=e}finally{try{!t&&i.return&&i.return()}finally{if(n)throw r}}return e}},{key:"flip_active_kind",value:function(e){this.state.active_kinds[e]=!this.state.active_kinds[e],this.setState(this.state)}},{key:"flip_all_years",value:function(){this.setState({all_years:!this.state.all_years})}},{key:"componentDidMount",value:function(){var e=this;if(!g.a.supported())return void alert("Your browser does not support Mapbox GL");var t=this.state.all_years?s:a;u(this.refs.mapboxMap).then(t).then(function(t){var n=v(t,2),r=n[0],o=n[1];window.map=o,e.mb_map=o,o.addSource("data",{type:"geojson",data:r});var i=new Image(40,53);i.src=w,o.addImage("skull_d2_image",i,{width:40,height:53}),o.addLayer(f()),o.on("mouseenter","point",function(e){o.getCanvas().style.cursor="pointer"}),o.on("click","point",function(e){var t=new g.a.Popup;o.getCanvas().style.cursor="pointer";var n=e.features[0].properties,r={v:"Motor Vehicle",c:"Crime",b:"By Police",w:"At Work"},i=new Date(n.date).toDateString()+(n.description?"<br/>"+n.description:"")+"<br/>"+r[n.kind];t.setLngLat(e.features[0].geometry.coordinates).setHTML(i).addTo(o)}),o.on("mouseleave","point",function(){o.getCanvas().style.cursor=""}),o.addControl(new g.a.NavigationControl),o.addControl(new g.a.GeolocateControl({positionOptions:{enableHighAccuracy:!0}}))})}},{key:"shouldComponentUpdate",value:function(e,t){var n=this;return t.all_years&&!this.state.all_years_loaded&&(s().then(function(e){return n.mb_map.getSource("data").setData(e[0])}),this.setState({all_years_loaded:!0})),!0}},{key:"render",value:function(){var e=this,t=this.state.all_years?["all"]:["in","year",2015,2016],n=["all",t,["in","kind"].concat(this.get_active_kinds())];this.mb_map&&this.mb_map.setFilter("point",n);var r=this.state.active_kinds;return m.a.createElement("div",null,m.a.createElement("nav",{id:"all-years-group",className:"filter-group"},m.a.createElement("input",{type:"checkbox",id:"all_years",checked:this.state.all_years,onChange:function(t){return e.flip_all_years()}}),m.a.createElement("label",{htmlFor:"all_years"},"Show All Years")),m.a.createElement("nav",{id:"filter-kind-group",className:"filter-group"},m.a.createElement("input",{type:"checkbox",id:"vehicle",checked:r.vehicle,onChange:function(t){return e.flip_active_kind("vehicle")}}),m.a.createElement("label",{htmlFor:"vehicle"},"Vehicle"),m.a.createElement("input",{type:"checkbox",id:"crime",checked:r.crime,onChange:function(t){return e.flip_active_kind("crime")}}),m.a.createElement("label",{htmlFor:"crime"},"Crime"),m.a.createElement("input",{type:"checkbox",id:"by_police",checked:r.by_police,onChange:function(t){return e.flip_active_kind("by_police")}}),m.a.createElement("label",{htmlFor:"by_police"},"By Police"),m.a.createElement("input",{type:"checkbox",id:"work",checked:r.work,onChange:function(t){return e.flip_active_kind("work")}}),m.a.createElement("label",{htmlFor:"work"},"At Work")),m.a.createElement("div",{ref:"mapboxMap",id:"map"}))}}]),t}(m.a.Component);t.a=x},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n.n(r),i=n(9),a=n.n(i),s=n(8),c=n.n(s),l=n(7);c.a.initialize("UA-69299673-1");!function(){c.a.set({page:window.location.pathname}),c.a.pageview(window.location.pathname),a.a.render(o.a.createElement(l.a,null),document.getElementById("root"))}()},function(e,t,n){"use strict";function r(e){return e}function o(e,t,n){function o(e,t){var n=v.hasOwnProperty(t)?v[t]:null;x.hasOwnProperty(t)&&s("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t),e&&s("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t)}function l(e,n){if(n){s("function"!=typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),s(!t(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var r=e.prototype,i=r.__reactAutoBindPairs;n.hasOwnProperty(c)&&b.mixins(e,n.mixins);for(var a in n)if(n.hasOwnProperty(a)&&a!==c){var l=n[a],u=r.hasOwnProperty(a);if(o(u,a),b.hasOwnProperty(a))b[a](e,l);else{var p=v.hasOwnProperty(a),h="function"==typeof l,m=h&&!p&&!u&&!1!==n.autobind;if(m)i.push(a,l),r[a]=l;else if(u){var y=v[a];s(p&&("DEFINE_MANY_MERGED"===y||"DEFINE_MANY"===y),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",y,a),"DEFINE_MANY_MERGED"===y?r[a]=f(r[a],l):"DEFINE_MANY"===y&&(r[a]=d(r[a],l))}else r[a]=l}}}else;}function u(e,t){if(t)for(var n in t){var r=t[n];if(t.hasOwnProperty(n)){var o=n in b;s(!o,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n);var i=n in e;s(!i,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),e[n]=r}}}function p(e,t){s(e&&t&&"object"==typeof e&&"object"==typeof t,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var n in t)t.hasOwnProperty(n)&&(s(void 0===e[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),e[n]=t[n]);return e}function f(e,t){return function(){var n=e.apply(this,arguments),r=t.apply(this,arguments);if(null==n)return r;if(null==r)return n;var o={};return p(o,n),p(o,r),o}}function d(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function h(e,t){var n=t.bind(e);return n}function m(e){for(var t=e.__reactAutoBindPairs,n=0;n<t.length;n+=2){var r=t[n],o=t[n+1];e[r]=h(e,o)}}function y(e){var t=r(function(e,r,o){this.__reactAutoBindPairs.length&&m(this),this.props=e,this.context=r,this.refs=a,this.updater=o||n,this.state=null;var i=this.getInitialState?this.getInitialState():null;s("object"==typeof i&&!Array.isArray(i),"%s.getInitialState(): must return an object or null",t.displayName||"ReactCompositeComponent"),this.state=i});t.prototype=new E,t.prototype.constructor=t,t.prototype.__reactAutoBindPairs=[],g.forEach(l.bind(null,t)),l(t,w),l(t,e),l(t,_),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),s(t.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var o in v)t.prototype[o]||(t.prototype[o]=null);return t}var g=[],v={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},b={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)l(e,t[n])},childContextTypes:function(e,t){e.childContextTypes=i({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=i({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=f(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=i({},e.propTypes,t)},statics:function(e,t){u(e,t)},autobind:function(){}},w={componentDidMount:function(){this.__isMounted=!0}},_={componentWillUnmount:function(){this.__isMounted=!1}},x={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e,t)},isMounted:function(){return!!this.__isMounted}},E=function(){};return i(E.prototype,e.prototype,x),y}var i=n(4),a=n(18),s=n(2),c="mixins";e.exports=o},function(e,t,n){"use strict";var r=n(0),o=n(13);if(void 0===r)throw Error("create-react-class could not find the React object. If you are using script tags, make sure that React is being loaded before create-react-class.");var i=(new r.Component).updater;e.exports=o(r.Component,r.isValidElement,i)},function(e,t,n){t=e.exports=n(16)(void 0),t.push([e.i,'body{font-family:helvetica,arial,sans-serif;text-size-adjust:none}#map{width:100%;height:100%;-webkit-tap-highlight-color:rgba(0,0,0,0)}#info,#map{position:absolute;top:0;left:0}#info{z-index:100;padding:10px 30px 10px 10px;background-color:hsla(0,0%,100%,.7);font-size:.85em}#info div.title{white-space:nowrap;margin-bottom:-5px}#info strong{font-size:1.2em}p.right{text-align:right}p.small{font-family:monospace}a{text-decoration:none;font-weight:700}a,a:hover,a:visited{color:#2d28c8}#info p,a.moreinfo{margin-left:20px}#info p{max-width:300px}.filter-group{font:12px/20px Helvetica Neue,Arial,Helvetica,sans-serif;font-weight:600;position:absolute;bottom:10px;right:10px;z-index:1;border-radius:3px;max-width:100px;color:#fff}.filter-group input[type=checkbox]:first-child+label{border-radius:3px 3px 0 0}.filter-group label:last-child{border-radius:0 0 3px 3px;border:none}.filter-group input[type=checkbox]{display:none}.filter-group input[type=checkbox]+label{background-color:#282828;display:block;cursor:pointer;padding:6px;border-bottom:1px solid rgba(0,0,0,.25);text-transform:capitalize}.filter-group input[type=checkbox]:checked+label{background-color:#464646}.filter-group input[type=checkbox]+label:hover{background-color:#5a5a5a}.filter-group input[type=checkbox]:checked+label:before{content:"\\2714";margin-right:5px}#filter-kind-group{bottom:50px}#all-years-group{bottom:10px;max-width:120px}',""])},function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var i=r(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,n){"use strict";var r={};e.exports=r},function(e,t,n){e.exports=n.p+"favicon.ico"},function(e,t,n){e.exports=n.p+"image.jpg"},function(e,t,n){"use strict";var r=n(17),o=n(2),i=n(23);e.exports=function(){function e(e,t,n,r,a,s){s!==i&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){e.exports=n(21)()},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){var r=n(0),o=n(14),i=n(22),a=n(4),s=o({displayName:"OutboundLink",propTypes:{eventLabel:i.string.isRequired},statics:{trackLink:function(){console.warn("ga tracking not enabled")}},handleClick:function(e){e.preventDefault();var t=this.props,n={label:t.eventLabel};s.trackLink(n,function(){"_blank"===t.target?window.open(t.to,"_blank"):window.location.href=t.to}),t.onClick&&t.onClick(e)},render:function(){var e=a({},this.props,{href:this.props.to,onClick:this.handleClick});return delete e.eventLabel,r.createElement("a",e)}});e.exports=s},function(e,t){function n(e){console.info("[react-ga]",e)}e.exports=n},function(e,t,n){function r(e,t){return o(e)?(a("This arg looks like an email address, redacting."),s):t?i(e):e}var o=n(27),i=n(29),a=n(5),s="REDACTED (Potential Email Address)";e.exports=r},function(e,t){function n(e){return/[^@]+@[^@]+/.test(e)}e.exports=n},function(e,t){function n(e){return"/"===e.substring(0,1)&&(e=e.substring(1)),e}e.exports=n},function(e,t,n){function r(e){var t=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;return e=o(e),e.replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,function(e,n,r){return n>0&&n+e.length!==r.length&&e.search(t)>-1&&":"!==r.charAt(n-2)&&("-"!==r.charAt(n+e.length)||"-"===r.charAt(n-1))&&r.charAt(n-1).search(/[^\s-]/)<0?e.toLowerCase():e.substr(1).search(/[A-Z]|\../)>-1?e:e.charAt(0).toUpperCase()+e.substr(1)})}var o=n(6);e.exports=r},function(e,t,n){var r=n(15);"string"==typeof r&&(r=[[e.i,r,""]]);var o={};o.transform=void 0;n(31)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=h[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(u(r.parts[i],t))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(u(r.parts[i],t));h[r.id]={id:r.id,refs:1,parts:a}}}}function o(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s=i[1],c=i[2],l=i[3],u={css:s,media:c,sourceMap:l};r[a]?r[a].parts.push(u):n.push(r[a]={id:a,parts:[u]})}return n}function i(e,t){var n=y(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=b[b.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),b.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=b.indexOf(e);t>=0&&b.splice(t,1)}function s(e){var t=document.createElement("style");return e.attrs.type="text/css",l(t,e.attrs),i(e,t),t}function c(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",l(t,e.attrs),i(e,t),t}function l(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function u(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var l=v++;n=g||(g=s(t)),r=p.bind(null,n,l,!1),o=p.bind(null,n,l,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(t),r=d.bind(null,n,t),o=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),r=f.bind(null,n),o=function(){a(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function p(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=_(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function d(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=w(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var h={},m=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),y=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e.call(this,n)),t[n]}}(function(e){return document.querySelector(e)}),g=null,v=0,b=[],w=n(32);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=m()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=o(e,t);return r(n,t),function(e){for(var i=[],a=0;a<n.length;a++){var s=n[a],c=h[s.id];c.refs--,i.push(c)}if(e){r(o(e,t),t)}for(var a=0;a<i.length;a++){var c=i[a];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete h[c.id]}}}};var _=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return e;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},function(e,t){e.exports=mapboxgl}]);
//# sourceMappingURL=bundle.js.map