(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[559],{5811:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/site/[pageName]/[id]",function(){return n(9136)}])},9136:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return v},default:function(){return w}});var r=n(5893),o=n(7294),a={header1:function(){return(0,r.jsx)("div",{className:"text-center h-16 shadow-2xl",children:(0,r.jsx)("h1",{children:"Header 1"})})},header2:function(){return(0,r.jsx)("div",{children:(0,r.jsx)("h1",{children:"Header 2"})})},footer1:function(){return(0,r.jsx)("div",{className:"text-center h-16 border-4 border-light-blue-500 border-opacity-75",children:(0,r.jsx)("h1",{children:"Footer 1"})})},footer2:function(){return(0,r.jsx)("div",{children:(0,r.jsx)("h1",{children:"Footer 2"})})}},i=n(9669),c=n.n(i);function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return!t||"object"!==p(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var p=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=f(e);if(t){var o=f(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}var y={wireframe1:function(e){if("undefined"===typeof a[e.name])return o.createElement((function(){return(0,r.jsxs)("div",{children:["The component ",e.name," does not exist."]})}));switch(e.type){case"header":return(0,r.jsx)("div",{className:"",children:o.createElement(a[e.name])},e._uid);case"footer":return(0,r.jsx)("div",{className:"absolute inset-x-0 bottom-0 ",children:o.createElement(a[e.name])},e._uid);default:console.waning("Component does not exist")}},wireframe2:function(e){if("undefined"===typeof a[e.name])return o.createElement((function(){return(0,r.jsxs)("div",{children:["The component ",e.name," does not exist."]})}));switch(e.type){case"header":return(0,r.jsx)("div",{className:"absolute inset-y-0 left-0 w-16 shadow-xl",children:o.createElement(a[e.name])},e._uid);case"footer":return(0,r.jsx)("div",{className:"absolute inset-x-0 bottom-0 h-16",children:o.createElement(a[e.name])},e._uid);default:console.waning("Component does not exist")}}},b=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(a,e);var t,n,r,o=m(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=o.call(this,e)).state={data:[],wireframe:null},t}return t=a,(n=[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=this;c().get("http://127.0.0.1:1337/pages/".concat(this.props.page.id,"/")).then((function(t){var n=function(t){if(null!==r[t].section_template){var n=e;c().get("http://127.0.0.1:1337/section-templates/".concat(r[t].section_template,"/")).then((function(e){var o=e.data;n.setState(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){s(e,t,n[t])}))}return e}({},n.state.data,{data:h(n.state.data).concat([{name:o.name,type:r[t].name,_uid:o.name}])}))}))}},r=t.data.sections;e.setState({wireframe:t.data.wireframe});for(var o=0;o<r.length;o++)n(o)})).catch((function(e){return console.error(e)}))}},{key:"render",value:function(){var e=this;return this.state.data.map((function(t){var n;return y[null===(n=e.state.wireframe)||void 0===n?void 0:n.name](t)}))}}])&&u(t.prototype,n),r&&u(t,r),a}(o.Component),v=!0,w=function(e){var t=e.page;return(0,r.jsx)("div",{children:(0,r.jsx)(b,{page:{id:t.id}})})}}},function(e){e.O(0,[669,774,888,179],(function(){return t=5811,e(e.s=t);var t}));var t=e.O();_N_E=t}]);