"use strict";!function(){console||(console={log:function(){},error:function(){}}),Object.create||(Object.create=function(){function e(){}return function(t){if(1!=arguments.length)throw new Error("Object.create implementation only accepts one parameter.");return e.prototype=t,new e}}()),Function.prototype.bind||(Function.prototype.bind=function(e){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var t=Array.prototype.slice.call(arguments,1),i=this,n=function(){},o=function(){return i.apply(this instanceof n&&e?this:e,t.concat(Array.prototype.slice.call(arguments)))};return n.prototype=this.prototype,o.prototype=new n,o});var e=function(){function e(e){var t=this.pixelRatio.length;if(0===t)return g.status="error",console.error("Rimg: missing a pixelRatio definition, check the documentation."),"";if(1===t)return this.src[0];if(2===t)return 1>=e?this.src[0]:this.src[1];for(var i=0,n=this.pixelRatio.length;n>i;){if(e===this.pixelRatio[i]||Math.round(e)===this.pixelRatio[i])return this.src[i];i++}return this.src[t-1]}function t(t){if("string"==typeof t){var i=t.split(",");if(0===i.length)return g.status="error",console.error("Rimg: your breakpoint-definition "+t+" is invalid, check the documentation."),null;for(var n=[],o=0,r=i.length;r>o;){for(var a=i[o],s={src:[],width:-1,pixelRatio:[],getSrc:e},d=a.split(" "),c=0,u=d.length;u>c;){var l=d[c];""===l.replace(" ","")||(null!==l.match(/^[0-9]{0,4}w/gi)?s.width=Number(l.substr(0,l.length-1)):null!==l.match(/[0-9]{1}x$/gi)?s.pixelRatio.push(Number(l.substr(0,l.length-1))):s.src.push(l)),c++}for(var f=0,b=n.length,h=!1;b>f;){var m=n[f];if(m.width===s.width&&-1!==m.width){m.pixelRatio.push(s.pixelRatio[0]),m.src.push(s.src[0]),h=!0;break}f++}h||n.push(s),o++}return n.length>0?n:(g.status="error",console.error("Rimg: your breakpoint-definition misses valid breakpoints, check the documentation."),null)}return g.status="error",console.error("Rimg: your breakpoint-definition is not a String, check the documentation."),null}function i(e,t,i){var n,o="";o="img"===t?"data-src":"data-background-image",n=i.getAttribute(o),null===n?e.ignore=!0:(void 0!==e.path&&e.path!==n||void 0===e.path)&&(e.path=n,e.background="data-background-image"===o?!0:!1,e.extension=d(n)),"gif"===e.extension||"svg"===e.extension?e.ignore=!0:void 0===e.ignore&&(e.ignore=!1)}function n(e){for(var t=0,i=g.images.length,n=!1;i>t;){if(g.images[t].target===e){n=!0;break}t++}return n?g.images[t]:null}function o(e){for(var t,o,a,s=document.querySelectorAll("img"),d=0,c=s.length;c>d;)t=s[d],a=n(t),null===a?(o={target:t,enabled:!g.disableIntrospection},i(o,"img",t),g.images.push(o),a=o):i(a,"img",t),e&&a.target===e&&g.disableIntrospection&&(a.enabled=!0),d++;for(s=document.querySelectorAll("[data-background-image]"),d=0,c=s.length;c>d;)t=s[d],a=n(t),null===a?(o={target:t,enabled:!g.disableIntrospection},i(o,"background",t),g.images.push(o),a=o):i(a,"background",t),e&&a.target===e&&g.disableIntrospection&&(a.enabled=!0),d++;r()}function r(){for(var e,t=0,i=g.images.length,n=window.devicePixelRatio||1;i>t;){var o=g.images[t];if(!o.ignore&&o.enabled){if(e=!0,!g.disableLazyLoading){var r=o.target.getBoundingClientRect();e=!(r.top+r.height<-g.offset.y||r.top>-g.offset.y+g.resizeDimensions.height+g.offset.y||r.left+r.width<-g.offset.x||r.left>-g.offset.x+g.resizeDimensions.width+g.offset.x)}var d;if(d=o.target.getAttribute(o.background?"data-background-image":"data-src"),null!==d&&""!==d&&e){var c,u=d.substr(0,d.lastIndexOf(".")),l=o.extension,f={x:o.target.width};(0===o.target.width||void 0===o.target.width)&&(c=o.background?"width":"maxWidth",f.x=window.getComputedStyle(o.target,null)[c],f.x=f.x.replace("px",""),f.x=Number(f.x));for(var b=0,h=g.breakpoints.length,m=void 0;h>b;){var p=g.breakpoints[b],v=f.x;if(v>p.width)m=p;else{if(v==p.width){m=p;break}if(v<p.width)break}b++}void 0===m&&(m=g.breakpoints[0]);var w=!1,y=u+m.getSrc(n)+"."+l;o.background||o.target.getAttribute("src")===y?o.background&&-1===o.target.style.backgroundImage.indexOf(y)&&(o.target.style.backgroundImage="url("+y+")",w=!0):(o.target.setAttribute("src",y),w=!0),w&&(g.imageEvents.changed++,s("add","load",a,o.target),s("add","error",a,o.target))}}else if(o.ignore&&("svg"===o.extension||"gif"===o.extension))if(o.background){var x=o.target.getAttribute("style");if(x){var k=x.indexOf("background-image");if(-1===x.indexOf(o.path)){if(x&&-1===k)x="background-image: url("+o.path+");"+x;else if(x&&-1!==k){var z=x.substr(k),R=z.indexOf(";");void 0===R&&(R=z.length),x=x.substr(0,k)+"background-image: url("+o.path+");"+x.substr(R+1)}o.target.setAttribute("style",x)}}else x="background-image: url("+o.path+");",o.target.setAttribute("style",x)}else o.target.getAttribute("src")!==o.path&&o.target.setAttribute("src",o.path);t++}}function a(e){g.imageEvents.changed--,"error"===e.type&&g.imageEvents.errors++,0===g.imageEvents.changed&&g.imagesLoaded&&g.imagesLoaded(g.imageEvents.errors>0?!0:!1),e.path&&e.path.length>0&&(s("remove","load",a,e.path[0]),s("remove","error",a,e.path[0]))}function s(e,t,i,n){void 0===n&&(n=document),"resize"===t&&(n=window),g.isIE8?("DOMContentLoaded"===t&&(t="onreadystatechange"),"resize"===t&&(t="onresize"),"add"===e?n.attachEvent(t,i):n.detachEvent(t,i)):"add"===e?n.addEventListener(t,i,!1):n.removeEventListener(t,i,!1)}function d(e){return e?e.substr(e.lastIndexOf(".")+1).toLowerCase():null}function c(){var e,t;g.isIE8?(e=document.body.clientWidth,t=document.body.clientHeight):(e=window.innerWidth,t=window.innerHeight);var i=!1;return(g.resizeDimensions.width!==e||g.resizeDimensions.height!==t)&&(g.resizeDimensions.width=e,g.resizeDimensions.height=t,i=!0),i}function u(){clearTimeout(g.resizeInfo.wait),c()&&r(),g.resizeInfo.time=(new Date).getTime()}function l(e){this.execute(e.target)}var g={status:"init",observer:null,breakpoints:[],images:[],imageEvents:{changed:0,errors:0},imagesLoaded:null,offset:{x:100,y:100},resizeInfo:{wait:null,time:null},resizeDimensions:{width:0,height:0},disableIntrospection:!1,disableLazyLoading:!1,isIE8:!1};if(void 0===window.addEventListener&&(g.isIE8=!0),"undefined"!=typeof window.RimgOptions){var f=t(window.RimgOptions.breakpoint);null!==f&&(g.breakpoints=f),window.RimgOptions.disableIntrospection===!0&&(g.disableIntrospection=!0),window.RimgOptions.disableLazyLoading===!0&&(g.disableLazyLoading=!0),null!=window.RimgOptions.offset&&"number"==typeof window.RimgOptions.offset.x&&"number"==typeof window.RimgOptions.offset.y&&(g.offset.x=window.RimgOptions.offset.x,g.offset.y=window.RimgOptions.offset.y),null!==window.RimgOptions.complete&&"function"==typeof window.RimgOptions.complete&&(g.imagesLoaded=window.RimgOptions.complete),window.RimgOptions=void 0}else console.error("(remark) Rimg: no breakpoints defined (yet), check the documentation or manually adjust it.");return{version:"2.0.2",execute:function(e){return"error"===g.status?void console.error("Rimg.execute(): error-status so no actions can be executed, check your code."):void 0===e?void console.error("Rimg.execute(): undefined value, check your code to add a valid DOM element to this function."):0===g.breakpoints.length?void console.log("(remark) Rimg.execute(): no breakpoints defined (yet), probably because of manual control."):void o(e)},configure:function(e){if(!(e instanceof Object))return void console.error("Rimg: your definition is not an object, check the documentation.");if(e.breakpoint){var i=t(e.breakpoint);null!==i&&(g.breakpoints=i)}e.disableIntrospection===!0&&(g.disableIntrospection=!0),e.disableLazyLoading===!0&&(g.disableLazyLoading=!0),void 0!==e.offset&&"number"==typeof e.offset.x&&"number"==typeof e.offset.y&&(g.offset.x=e.offset.x,g.offset.y=e.offset.y),"ready"!==g.status||g.disableIntrospection||(c(),this.execute(document))},resized:function(){"ready"===g.status&&(null!==g.resizeInfo.wait&&clearTimeout(g.resizeInfo.wait),null===g.resizeInfo.time||(new Date).getTime()-g.resizeInfo.time>1e3?u.bind(this)():g.resizeInfo.wait=setTimeout(u.bind(this),100))},scrolled:function(){g.disableLazyLoading||r()},loaded:function(){"progress"===g.status&&(g.isIE8&&"complete"!=document.readyState||(s("remove","DOMContentLoaded",this.loaded),c(),g.disableIntrospection||(null!==g.observer&&g.observer.observe(document.body,{attributes:!0,childList:!0,characterData:!1,subtree:!0,attributeFilter:["data-src"]}),this.execute(document),s("add","resize",this.resized.bind(this))),g.disableLazyLoading||s("add","scroll",this.scrolled.bind(this)),g.status="ready"))},disableLazyLoading:function(){g.disableLazyLoading=!0},disableIntrospection:function(){g.disableIntrospection=!0,g.observer?g.observer.disconnect():s("remove","DOMNodeInserted",l)},initialize:function(){if("init"!==g.status)return void("error"!==g.status&&console.error("Rimg.initialize(): Already initialized. No forced initialization supported, check your code."));var e=this,t=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;void 0===t||g.isIE8?(s("add","DOMAttrModified",function(){o()}),s("add","DOMNodeInserted",l.bind(e))):(g.observer=new t(function(){o()}),g.observer.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})),g.status="progress","interactive"!==document.readyState&&"complete"!==document.readyState||!document.body?s("add","DOMContentLoaded",this.loaded.bind(this)):this.loaded.bind(this)()}}};window.Rimg=Object.create(e()),window.Rimg.initialize()}();