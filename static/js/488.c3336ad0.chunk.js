"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[488],{488:function(e,t,n){n.r(t),n.d(t,{default:function(){return le}});var o,r,a,i,s=n(861),c=n(439),u=n(757),l=n.n(u),d=n(791),f=n(357),p=n(87),m=n(168),v=n(444),h=v.ZP.form(o||(o=(0,m.Z)(["\n  display: flex;\n  flex-direction: row-reverse;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  border: 1px solid black;\n"]))),g=v.ZP.button(r||(r=(0,m.Z)(["\n  display: inline-block;\n  width: 60px;\n  height: 30px;\n  border: 0;\n  border-radius: 3px;\n  margin: 4px;\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    opacity: 1;\n  }\n"]))),y=v.ZP.span(a||(a=(0,m.Z)(["\n  width: 15px;\n  height: 15px;\n  padding: 2px;\n  color: black;\n  font-size: 14px;\n  font-style: inherit;\n"]))),E=v.ZP.input(i||(i=(0,m.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"])));function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function C(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var x=n(433);function _(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=_(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}var I=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=_(e))&&(o&&(o+=" "),o+=t);return o},w=["theme","type"],L=["delay","staleId"],k=function(e){return"number"==typeof e&&!isNaN(e)},P=function(e){return"string"==typeof e},N=function(e){return"function"==typeof e},R=function(e){return P(e)||N(e)?e:null},j=function(e){return(0,d.isValidElement)(e)||P(e)||N(e)||k(e)};function S(e){var t=e.enter,n=e.exit,o=e.appendPosition,r=void 0!==o&&o,a=e.collapse,i=void 0===a||a,s=e.collapseDuration,c=void 0===s?300:s;return function(e){var o=e.children,a=e.position,s=e.preventExitTransition,u=e.done,l=e.nodeRef,f=e.isIn,p=r?"".concat(t,"--").concat(a):t,m=r?"".concat(n,"--").concat(a):n,v=(0,d.useRef)(0);return(0,d.useLayoutEffect)((function(){var e,t=l.current,n=p.split(" "),o=function e(o){var r;o.target===l.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",e),t.removeEventListener("animationcancel",e),0===v.current&&"animationcancel"!==o.type&&(r=t.classList).remove.apply(r,(0,x.Z)(n)))};(e=t.classList).add.apply(e,(0,x.Z)(n)),t.addEventListener("animationend",o),t.addEventListener("animationcancel",o)}),[]),(0,d.useEffect)((function(){var e=l.current,t=function t(){e.removeEventListener("animationend",t),i?function(e,t,n){void 0===n&&(n=300);var o=e.scrollHeight,r=e.style;requestAnimationFrame((function(){r.minHeight="initial",r.height=o+"px",r.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){r.height="0",r.padding="0",r.margin="0",setTimeout(t,n)}))}))}(e,u,c):u()};f||(s?t():(v.current=1,e.className+=" ".concat(m),e.addEventListener("animationend",t)))}),[f]),d.createElement(d.Fragment,null,o)}}function M(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}var D={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(o){var r=setTimeout((function(){o.apply(void 0,(0,x.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(r)}))}},Z=function(e){var t=e.theme,n=e.type,o=C(e,w);return d.createElement("svg",O({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(n,")")},o))},z={info:function(e){return d.createElement(Z,O({},e),d.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return d.createElement(Z,O({},e),d.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return d.createElement(Z,O({},e),d.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return d.createElement(Z,O({},e),d.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return d.createElement("div",{className:"Toastify__spinner"})}};function B(e){var t=(0,d.useReducer)((function(e){return e+1}),0),n=(0,c.Z)(t,2)[1],o=(0,d.useState)([]),r=(0,c.Z)(o,2),a=r[0],i=r[1],s=(0,d.useRef)(null),u=(0,d.useRef)(new Map).current,l=function(e){return-1!==a.indexOf(e)},f=(0,d.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:l,getToast:function(e){return u.get(e)}}).current;function p(e){var t=e.containerId;!f.props.limit||t&&f.containerId!==t||(f.count-=f.queue.length,f.queue=[])}function m(e){i((function(t){return null==e?[]:t.filter((function(t){return t!==e}))}))}function v(){var e=f.queue.shift();g(e.toastContent,e.toastProps,e.staleId)}function h(e,t){var o=t.delay,r=t.staleId,a=C(t,L);if(j(e)&&!function(e){return!s.current||f.props.enableMultiContainer&&e.containerId!==f.props.containerId||u.has(e.toastId)&&null==e.updateId}(a)){var i=a.toastId,c=a.updateId,l=a.data,p=f.props,h=function(){return m(i)},y=null==c;y&&f.count++;var E,b,T=O(O(O({},p),{},{style:p.toastStyle,key:f.toastKey++},a),{},{toastId:i,updateId:c,data:l,closeToast:h,isIn:!1,className:R(a.className||p.toastClassName),bodyClassName:R(a.bodyClassName||p.bodyClassName),progressClassName:R(a.progressClassName||p.progressClassName),autoClose:!a.isLoading&&(E=a.autoClose,b=p.autoClose,!1===E||k(E)&&E>0?E:b),deleteToast:function(){var e=M(u.get(i),"removed");u.delete(i),D.emit(4,e);var t=f.queue.length;if(f.count=null==i?f.count-f.displayedToast:f.count-1,f.count<0&&(f.count=0),t>0){var o=null==i?f.props.limit:1;if(1===t||1===o)f.displayedToast++,v();else{var r=o>t?t:o;f.displayedToast=r;for(var a=0;a<r;a++)v()}}else n()}});T.iconOut=function(e){var t=e.theme,n=e.type,o=e.isLoading,r=e.icon,a=null,i={theme:t,type:n};return!1===r||(N(r)?a=r(i):(0,d.isValidElement)(r)?a=(0,d.cloneElement)(r,i):P(r)||k(r)?a=r:o?a=z.spinner():function(e){return e in z}(n)&&(a=z[n](i))),a}(T),N(a.onOpen)&&(T.onOpen=a.onOpen),N(a.onClose)&&(T.onClose=a.onClose),T.closeButton=p.closeButton,!1===a.closeButton||j(a.closeButton)?T.closeButton=a.closeButton:!0===a.closeButton&&(T.closeButton=!j(p.closeButton)||p.closeButton);var x=e;(0,d.isValidElement)(e)&&!P(e.type)?x=(0,d.cloneElement)(e,{closeToast:h,toastProps:T,data:l}):N(e)&&(x=e({closeToast:h,toastProps:T,data:l})),p.limit&&p.limit>0&&f.count>p.limit&&y?f.queue.push({toastContent:x,toastProps:T,staleId:r}):k(o)?setTimeout((function(){g(x,T,r)}),o):g(x,T,r)}}function g(e,t,n){var o=t.toastId;n&&u.delete(n);var r={content:e,props:t};u.set(o,r),i((function(e){return[].concat((0,x.Z)(e),[o]).filter((function(e){return e!==n}))})),D.emit(4,M(r,null==r.props.updateId?"added":"updated"))}return(0,d.useEffect)((function(){return f.containerId=e.containerId,D.cancelEmit(3).on(0,h).on(1,(function(e){return s.current&&m(e)})).on(5,p).emit(2,f),function(){u.clear(),D.emit(3,f)}}),[]),(0,d.useEffect)((function(){f.props=e,f.isToastActive=l,f.displayedToast=a.length})),{getToastToRender:function(t){var n=new Map,o=Array.from(u.values());return e.newestOnTop&&o.reverse(),o.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:s,isToastActive:l}}function A(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function q(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function F(e){var t=(0,d.useState)(!1),n=(0,c.Z)(t,2),o=n[0],r=n[1],a=(0,d.useState)(!1),i=(0,c.Z)(a,2),s=i[0],u=i[1],l=(0,d.useRef)(null),f=(0,d.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,d.useRef)(e),m=e.autoClose,v=e.pauseOnHover,h=e.closeToast,g=e.onClick,y=e.closeOnClick;function E(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),f.didMove=!1,document.addEventListener("mousemove",C),document.addEventListener("mouseup",x),document.addEventListener("touchmove",C),document.addEventListener("touchend",x);var n=l.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=n.getBoundingClientRect(),n.style.transition="",f.x=A(t.nativeEvent),f.y=q(t.nativeEvent),"x"===e.draggableDirection?(f.start=f.x,f.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(f.start=f.y,f.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function b(t){if(f.boundingRect){var n=f.boundingRect,o=n.top,r=n.bottom,a=n.left,i=n.right;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&f.x>=a&&f.x<=i&&f.y>=o&&f.y<=r?O():T()}}function T(){r(!0)}function O(){r(!1)}function C(t){var n=l.current;f.canDrag&&n&&(f.didMove=!0,o&&O(),f.x=A(t),f.y=q(t),f.delta="x"===e.draggableDirection?f.x-f.start:f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),n.style.transform="translate".concat(e.draggableDirection,"(").concat(f.delta,"px)"),n.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function x(){document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",x),document.removeEventListener("touchmove",C),document.removeEventListener("touchend",x);var t=l.current;if(f.canDrag&&f.didMove&&t){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return u(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate".concat(e.draggableDirection,"(0)"),t.style.opacity="1"}}(0,d.useEffect)((function(){p.current=e})),(0,d.useEffect)((function(){return l.current&&l.current.addEventListener("d",T,{once:!0}),N(e.onOpen)&&e.onOpen((0,d.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;N(e.onClose)&&e.onClose((0,d.isValidElement)(e.children)&&e.children.props)}}),[]),(0,d.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||O(),window.addEventListener("focus",T),window.addEventListener("blur",O)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",T),window.removeEventListener("blur",O))}}),[e.pauseOnFocusLoss]);var _={onMouseDown:E,onTouchStart:E,onMouseUp:b,onTouchEnd:b};return m&&v&&(_.onMouseEnter=O,_.onMouseLeave=T),y&&(_.onClick=function(e){g&&g(e),f.canCloseOnClick&&h()}),{playToast:T,pauseToast:O,isRunning:o,preventExitTransition:s,toastRef:l,eventHandlers:_}}function H(e){var t=e.closeToast,n=e.theme,o=e.ariaLabel,r=void 0===o?"close":o;return d.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":r},d.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},d.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function Q(e){var t=e.delay,n=e.isRunning,o=e.closeToast,r=e.type,a=void 0===r?"default":r,i=e.hide,s=e.className,c=e.style,u=e.controlledProgress,l=e.progress,f=e.rtl,p=e.isIn,m=e.theme,v=i||u&&0===l,h=O(O({},c),{},{animationDuration:"".concat(t,"ms"),animationPlayState:n?"running":"paused",opacity:v?0:1});u&&(h.transform="scaleX(".concat(l,")"));var g=I("Toastify__progress-bar",u?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(m),"Toastify__progress-bar--".concat(a),{"Toastify__progress-bar--rtl":f}),y=N(s)?s({rtl:f,type:a,defaultClassName:g}):I(g,s);return d.createElement("div",b({role:"progressbar","aria-hidden":v?"true":"false","aria-label":"notification timer",className:y,style:h},u&&l>=1?"onTransitionEnd":"onAnimationEnd",u&&l<1?null:function(){p&&o()}))}var V=function(e){var t=F(e),n=t.isRunning,o=t.preventExitTransition,r=t.toastRef,a=t.eventHandlers,i=e.closeButton,s=e.children,c=e.autoClose,u=e.onClick,l=e.type,f=e.hideProgressBar,p=e.closeToast,m=e.transition,v=e.position,h=e.className,g=e.style,y=e.bodyClassName,E=e.bodyStyle,b=e.progressClassName,T=e.progressStyle,C=e.updateId,x=e.role,_=e.progress,w=e.rtl,L=e.toastId,k=e.deleteToast,P=e.isIn,R=e.isLoading,j=e.iconOut,S=e.closeOnClick,M=e.theme,D=I("Toastify__toast","Toastify__toast-theme--".concat(M),"Toastify__toast--".concat(l),{"Toastify__toast--rtl":w},{"Toastify__toast--close-on-click":S}),Z=N(h)?h({rtl:w,position:v,type:l,defaultClassName:D}):I(D,h),z=!!_||!c,B={closeToast:p,type:l,theme:M},A=null;return!1===i||(A=N(i)?i(B):(0,d.isValidElement)(i)?(0,d.cloneElement)(i,B):H(B)),d.createElement(m,{isIn:P,done:k,position:v,preventExitTransition:o,nodeRef:r},d.createElement("div",O(O({id:L,onClick:u,className:Z},a),{},{style:g,ref:r}),d.createElement("div",O(O({},P&&{role:x}),{},{className:N(y)?y({type:l}):I("Toastify__toast-body",y),style:E}),null!=j&&d.createElement("div",{className:I("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!R})},j),d.createElement("div",null,s)),A,d.createElement(Q,O(O({},C&&!z?{key:"pb-".concat(C)}:{}),{},{rtl:w,theme:M,delay:c,isRunning:n,isIn:P,closeToast:p,hide:f,type:l,style:T,className:b,controlledProgress:z,progress:_||0}))))},U=function(e,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:t}},W=S(U("bounce",!0)),G=(S(U("slide",!0)),S(U("zoom")),S(U("flip")),(0,d.forwardRef)((function(e,t){var n=B(e),o=n.getToastToRender,r=n.containerRef,a=n.isToastActive,i=e.className,s=e.style,c=e.rtl,u=e.containerId;function l(e){var t=I("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":c});return N(i)?i({position:e,rtl:c,defaultClassName:t}):I(t,R(i))}return(0,d.useEffect)((function(){t&&(t.current=r.current)}),[]),d.createElement("div",{ref:r,className:"Toastify",id:u},o((function(e,t){var n=t.length?O({},s):O(O({},s),{},{pointerEvents:"none"});return d.createElement("div",{className:l(e),style:n,key:"container-".concat(e)},t.map((function(e,n){var o=e.content,r=e.props;return d.createElement(V,O(O({},r),{},{isIn:a(r.toastId),style:O(O({},r.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-".concat(r.key)}),o)})))})))})));G.displayName="ToastContainer",G.defaultProps={position:"top-right",transition:W,autoClose:5e3,closeButton:H,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var X,Y=new Map,K=[],J=1;function $(){return""+J++}function ee(e){return e&&(P(e.toastId)||k(e.toastId))?e.toastId:$()}function te(e,t){return Y.size>0?D.emit(0,e,t):K.push({content:e,options:t}),t.toastId}function ne(e,t){return O(O({},t),{},{type:t&&t.type||e,toastId:ee(t)})}function oe(e){return function(t,n){return te(t,ne(e,n))}}function re(e,t){return te(e,ne("default",t))}re.loading=function(e,t){return te(e,ne("default",O({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},re.promise=function(e,t,n){var o,r=t.pending,a=t.error,i=t.success;r&&(o=P(r)?re.loading(r,n):re.loading(r.render,O(O({},n),r)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},c=function(e,t,r){if(null!=t){var a=O(O(O({type:e},s),n),{},{data:r}),i=P(t)?{render:t}:t;return o?re.update(o,O(O({},a),i)):re(i.render,O(O({},a),i)),r}re.dismiss(o)},u=N(e)?e():e;return u.then((function(e){return c("success",i,e)})).catch((function(e){return c("error",a,e)})),u},re.success=oe("success"),re.info=oe("info"),re.error=oe("error"),re.warning=oe("warning"),re.warn=re.warning,re.dark=function(e,t){return te(e,ne("default",O({theme:"dark"},t)))},re.dismiss=function(e){Y.size>0?D.emit(1,e):K=K.filter((function(t){return null!=e&&t.options.toastId!==e}))},re.clearWaitingQueue=function(e){return void 0===e&&(e={}),D.emit(5,e)},re.isActive=function(e){var t=!1;return Y.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},re.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,o=Y.get(n||X);return o&&o.getToast(e)}(e,t);if(n){var o=n.props,r=n.content,a=O(O(O({},o),t),{},{toastId:t.toastId||e,updateId:$()});a.toastId!==e&&(a.staleId=e);var i=a.render||r;delete a.render,te(i,a)}}),0)},re.done=function(e){re.update(e,{progress:1})},re.onChange=function(e){return D.on(4,e),function(){D.off(4,e)}},re.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},re.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},D.on(2,(function(e){X=e.containerId||e,Y.set(X,e),K.forEach((function(e){D.emit(0,e.content,e.options)})),K=[]})).on(3,(function(e){Y.delete(e.containerId||e),0===Y.size&&D.off(0).off(1).off(5)}));var ae=n(184),ie=function(e){var t=e.query,n=e.onSearch,o=(0,p.lr)(),r=(0,c.Z)(o,2),a=r[0],i=r[1],s=(0,d.useState)(t),u=(0,c.Z)(s,2),l=u[0],f=u[1],m=function(e,t){var n=(0,d.useState)(e),o=(0,c.Z)(n,2),r=o[0],a=o[1],i=(0,d.useRef)(null);return(0,d.useEffect)((function(){return i.current=setTimeout((function(){e&&a(e)}),t),function(){clearTimeout(i.current)}}),[e,t]),r}(l,250);(0,d.useEffect)((function(){if(!m)return a.delete("query"),void i(a);i({query:m})}),[m,i,a,t]);return(0,ae.jsxs)(ae.Fragment,{children:[(0,ae.jsxs)(h,{onSubmit:function(e){if(e.preventDefault(),""===t.trim())return re.error("Sorry, there are no movies matching your search query. Please try again.",{theme:"colored"});n(t),f("")},children:[(0,ae.jsx)(g,{type:"submit",children:(0,ae.jsx)(y,{children:"Search"})}),(0,ae.jsx)(E,{type:"text",placeholder:"Search movies",name:"search",value:l,onChange:function(e){f(e.target.value)}})]}),(0,ae.jsx)(G,{})]})},se=n(689),ce=n(834),ue="\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a, \u043f\u0435\u0440\u0435\u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0442\u0435 \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0443...",le=function(){var e,t=(0,se.TH)(),n=(0,d.useState)([]),o=(0,c.Z)(n,2),r=o[0],a=o[1],i=(0,d.useState)(!1),u=(0,c.Z)(i,2),m=u[0],v=u[1],h=(0,d.useState)(null),g=(0,c.Z)(h,2),y=g[0],E=g[1],b=(0,p.lr)(),T=(0,c.Z)(b,2),O=T[0],C=T[1],x=null!==(e=O.get("query"))&&void 0!==e?e:"";return(0,d.useEffect)((function(){function e(){return(e=(0,s.Z)(l().mark((function e(){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,v(!0),e.next=4,(0,f.vw)(x);case 4:t=e.sent,a(t.results),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),E(ue);case 11:return e.prev=11,v(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})))).apply(this,arguments)}x&&function(){e.apply(this,arguments)}()}),[x]),(0,ae.jsxs)(ce.W,{children:[(0,ae.jsx)(ie,{query:x,isLoading:m,onSearch:function(e){C({query:"".concat(e)})}}),y&&(0,ae.jsx)("p",{children:y}),r.length>0&&(0,ae.jsx)("ul",{children:r.map((function(e){return(0,ae.jsx)("li",{children:(0,ae.jsx)(p.rU,{to:"".concat(e.id),state:{from:t},children:e.title})},e.id)}))})]})}}}]);
//# sourceMappingURL=488.c3336ad0.chunk.js.map