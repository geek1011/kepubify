!function(e,l){"object"==typeof exports&&"undefined"!=typeof module?l(exports):"function"==typeof define&&define.amd?define(["exports"],l):l((e="undefined"!=typeof globalThis?globalThis:e||self).kepubify={})}(this,(function(e){"use strict";function __awaiter(e,l,t,s){return new(t||(t=Promise))((function(i,a){function fulfilled(e){try{step(s.next(e))}catch(e){a(e)}}function rejected(e){try{step(s.throw(e))}catch(e){a(e)}}function step(e){e.done?i(e.value):function adopt(e){return e instanceof t?e:new t((function(l){l(e)}))}(e.value).then(fulfilled,rejected)}step((s=s.apply(e,l||[])).next())}))}function __classPrivateFieldGet(e,l,t,s){if("a"===t&&!s)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof l?e!==l||!s:!l.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===t?s:"a"===t?s.call(e):s?s.value:l.get(e)}function __classPrivateFieldSet(e,l,t,s,i){if("m"===s)throw new TypeError("Private method is not writable");if("a"===s&&!i)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof l?e!==l||!i:!l.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===s?i.call(e,t):i?i.value=t:l.set(e,t),t}const l=new URL("undefined"==typeof document?new(require("url").URL)("file:"+__dirname+"/kepubify-87498e5a.wasm").href:new URL("kepubify-87498e5a.wasm",document.currentScript&&document.currentScript.src||document.baseURI).href,"undefined"==typeof document?new(require("url").URL)("file:"+__filename).href:document.currentScript&&document.currentScript.src||new URL("kepubify.js",document.baseURI).href).toString();var t=null;try{var s="undefined"!=typeof module&&"function"==typeof module.require&&module.require("worker_threads")||"function"==typeof __non_webpack_require__&&__non_webpack_require__("worker_threads")||"function"==typeof require&&require("worker_threads");t=s.Worker}catch(e){}function createBase64WorkerFactory$2(e,l,s){var i=void 0===l?null:l,a=function decodeBase64$1(e,l){return Buffer.from(e,"base64").toString(l?"utf16":"utf8")}(e,void 0!==s&&s),d=a.indexOf("\n",10)+1,c=a.substring(d)+(i?"//# sourceMappingURL="+i:"");return function WorkerFactory(e){return new t(c,Object.assign({},e,{eval:!0}))}}function createURL(e,l,t){var s=void 0===l?null:l,i=function decodeBase64(e,l){var t=atob(e);if(l){for(var s=new Uint8Array(t.length),i=0,a=t.length;i<a;++i)s[i]=t.charCodeAt(i);return String.fromCharCode.apply(null,new Uint16Array(s.buffer))}return t}(e,void 0!==t&&t),a=i.indexOf("\n",10)+1,d=i.substring(a)+(s?"//# sourceMappingURL="+s:""),c=new Blob([d],{type:"application/javascript"});return URL.createObjectURL(c)}var i="[object process]"===Object.prototype.toString.call("undefined"!=typeof process?process:0);var a,d,c,r,n,o,b,u,Z,h,G,p,m,W,V,X,y,v,K,f,S,F,z,L,P,_=function createBase64WorkerFactory(e,l,t){return function isNodeJS(){return i}()?createBase64WorkerFactory$2(e,l,t):function createBase64WorkerFactory$1(e,l,t){var s;return function WorkerFactory(i){return s=s||createURL(e,l,t),new Worker(s,i)}}(e,l,t)}("Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwohZnVuY3Rpb24oKXsidXNlIHN0cmljdCI7ZnVuY3Rpb24gX19hd2FpdGVyKGUsdCxzLGkpe3JldHVybiBuZXcoc3x8KHM9UHJvbWlzZSkpKChmdW5jdGlvbihuLG8pe2Z1bmN0aW9uIGZ1bGZpbGxlZChlKXt0cnl7c3RlcChpLm5leHQoZSkpfWNhdGNoKGUpe28oZSl9fWZ1bmN0aW9uIHJlamVjdGVkKGUpe3RyeXtzdGVwKGkudGhyb3coZSkpfWNhdGNoKGUpe28oZSl9fWZ1bmN0aW9uIHN0ZXAoZSl7ZS5kb25lP24oZS52YWx1ZSk6ZnVuY3Rpb24gYWRvcHQoZSl7cmV0dXJuIGUgaW5zdGFuY2VvZiBzP2U6bmV3IHMoKGZ1bmN0aW9uKHQpe3QoZSl9KSl9KGUudmFsdWUpLnRoZW4oZnVsZmlsbGVkLHJlamVjdGVkKX1zdGVwKChpPWkuYXBwbHkoZSx0fHxbXSkpLm5leHQoKSl9KSl9KCgpPT57aWYoInVuZGVmaW5lZCIhPXR5cGVvZiBnbG9iYWwpO2Vsc2UgaWYoInVuZGVmaW5lZCIhPXR5cGVvZiB3aW5kb3cpd2luZG93Lmdsb2JhbD13aW5kb3c7ZWxzZXtpZigidW5kZWZpbmVkIj09dHlwZW9mIHNlbGYpdGhyb3cgbmV3IEVycm9yKCJjYW5ub3QgZXhwb3J0IEdvIChuZWl0aGVyIGdsb2JhbCwgd2luZG93IG5vciBzZWxmIGlzIGRlZmluZWQpIik7c2VsZi5nbG9iYWw9c2VsZn1pZihnbG9iYWwucmVxdWlyZXx8InVuZGVmaW5lZCI9PXR5cGVvZiByZXF1aXJlfHwoZ2xvYmFsLnJlcXVpcmU9cmVxdWlyZSksIWdsb2JhbC5mcyYmZ2xvYmFsLnJlcXVpcmUpe2NvbnN0IGU9cmVxdWlyZSgiZnMiKTsib2JqZWN0Ij09dHlwZW9mIGUmJm51bGwhPT1lJiYwIT09T2JqZWN0LmtleXMoZSkubGVuZ3RoJiYoZ2xvYmFsLmZzPWUpfWNvbnN0IGVub3N5cz0oKT0+e2NvbnN0IGU9bmV3IEVycm9yKCJub3QgaW1wbGVtZW50ZWQiKTtyZXR1cm4gZS5jb2RlPSJFTk9TWVMiLGV9O2lmKCFnbG9iYWwuZnMpe2xldCBlPSIiO2dsb2JhbC5mcz17Y29uc3RhbnRzOntPX1dST05MWTotMSxPX1JEV1I6LTEsT19DUkVBVDotMSxPX1RSVU5DOi0xLE9fQVBQRU5EOi0xLE9fRVhDTDotMX0sd3JpdGVTeW5jKHMsaSl7ZSs9dC5kZWNvZGUoaSk7Y29uc3Qgbj1lLmxhc3RJbmRleE9mKCJcbiIpO3JldHVybi0xIT1uJiYoY29uc29sZS5sb2coZS5zdWJzdHIoMCxuKSksZT1lLnN1YnN0cihuKzEpKSxpLmxlbmd0aH0sd3JpdGUoZSx0LHMsaSxuLG8pe2lmKDAhPT1zfHxpIT09dC5sZW5ndGh8fG51bGwhPT1uKXJldHVybiB2b2lkIG8oZW5vc3lzKCkpO28obnVsbCx0aGlzLndyaXRlU3luYyhlLHQpKX0sY2htb2QoZSx0LHMpe3MoZW5vc3lzKCkpfSxjaG93bihlLHQscyxpKXtpKGVub3N5cygpKX0sY2xvc2UoZSx0KXt0KGVub3N5cygpKX0sZmNobW9kKGUsdCxzKXtzKGVub3N5cygpKX0sZmNob3duKGUsdCxzLGkpe2koZW5vc3lzKCkpfSxmc3RhdChlLHQpe3QoZW5vc3lzKCkpfSxmc3luYyhlLHQpe3QobnVsbCl9LGZ0cnVuY2F0ZShlLHQscyl7cyhlbm9zeXMoKSl9LGxjaG93bihlLHQscyxpKXtpKGVub3N5cygpKX0sbGluayhlLHQscyl7cyhlbm9zeXMoKSl9LGxzdGF0KGUsdCl7dChlbm9zeXMoKSl9LG1rZGlyKGUsdCxzKXtzKGVub3N5cygpKX0sb3BlbihlLHQscyxpKXtpKGVub3N5cygpKX0scmVhZChlLHQscyxpLG4sbyl7byhlbm9zeXMoKSl9LHJlYWRkaXIoZSx0KXt0KGVub3N5cygpKX0scmVhZGxpbmsoZSx0KXt0KGVub3N5cygpKX0scmVuYW1lKGUsdCxzKXtzKGVub3N5cygpKX0scm1kaXIoZSx0KXt0KGVub3N5cygpKX0sc3RhdChlLHQpe3QoZW5vc3lzKCkpfSxzeW1saW5rKGUsdCxzKXtzKGVub3N5cygpKX0sdHJ1bmNhdGUoZSx0LHMpe3MoZW5vc3lzKCkpfSx1bmxpbmsoZSx0KXt0KGVub3N5cygpKX0sdXRpbWVzKGUsdCxzLGkpe2koZW5vc3lzKCkpfX19aWYoZ2xvYmFsLnByb2Nlc3N8fChnbG9iYWwucHJvY2Vzcz17Z2V0dWlkOigpPT4tMSxnZXRnaWQ6KCk9Pi0xLGdldGV1aWQ6KCk9Pi0xLGdldGVnaWQ6KCk9Pi0xLGdldGdyb3Vwcygpe3Rocm93IGVub3N5cygpfSxwaWQ6LTEscHBpZDotMSx1bWFzaygpe3Rocm93IGVub3N5cygpfSxjd2QoKXt0aHJvdyBlbm9zeXMoKX0sY2hkaXIoKXt0aHJvdyBlbm9zeXMoKX19KSwhZ2xvYmFsLmNyeXB0byYmZ2xvYmFsLnJlcXVpcmUpe2NvbnN0IGU9cmVxdWlyZSgiY3J5cHRvIik7Z2xvYmFsLmNyeXB0bz17Z2V0UmFuZG9tVmFsdWVzKHQpe2UucmFuZG9tRmlsbFN5bmModCl9fX1pZighZ2xvYmFsLmNyeXB0byl0aHJvdyBuZXcgRXJyb3IoImdsb2JhbC5jcnlwdG8gaXMgbm90IGF2YWlsYWJsZSwgcG9seWZpbGwgcmVxdWlyZWQgKGdldFJhbmRvbVZhbHVlcyBvbmx5KSIpO2lmKGdsb2JhbC5wZXJmb3JtYW5jZXx8KGdsb2JhbC5wZXJmb3JtYW5jZT17bm93KCl7Y29uc3RbZSx0XT1wcm9jZXNzLmhydGltZSgpO3JldHVybiAxZTMqZSt0LzFlNn19KSwhZ2xvYmFsLlRleHRFbmNvZGVyJiZnbG9iYWwucmVxdWlyZSYmKGdsb2JhbC5UZXh0RW5jb2Rlcj1yZXF1aXJlKCJ1dGlsIikuVGV4dEVuY29kZXIpLCFnbG9iYWwuVGV4dEVuY29kZXIpdGhyb3cgbmV3IEVycm9yKCJnbG9iYWwuVGV4dEVuY29kZXIgaXMgbm90IGF2YWlsYWJsZSwgcG9seWZpbGwgcmVxdWlyZWQiKTtpZighZ2xvYmFsLlRleHREZWNvZGVyJiZnbG9iYWwucmVxdWlyZSYmKGdsb2JhbC5UZXh0RGVjb2Rlcj1yZXF1aXJlKCJ1dGlsIikuVGV4dERlY29kZXIpLCFnbG9iYWwuVGV4dERlY29kZXIpdGhyb3cgbmV3IEVycm9yKCJnbG9iYWwuVGV4dERlY29kZXIgaXMgbm90IGF2YWlsYWJsZSwgcG9seWZpbGwgcmVxdWlyZWQiKTtjb25zdCBlPW5ldyBUZXh0RW5jb2RlcigidXRmLTgiKSx0PW5ldyBUZXh0RGVjb2RlcigidXRmLTgiKTtpZihnbG9iYWwuR289Y2xhc3N7Y29uc3RydWN0b3IoKXt0aGlzLmFyZ3Y9WyJqcyJdLHRoaXMuZW52PXt9LHRoaXMuZXhpdD1lPT57MCE9PWUmJmNvbnNvbGUud2FybigiZXhpdCBjb2RlOiIsZSl9LHRoaXMuX2V4aXRQcm9taXNlPW5ldyBQcm9taXNlKChlPT57dGhpcy5fcmVzb2x2ZUV4aXRQcm9taXNlPWV9KSksdGhpcy5fcGVuZGluZ0V2ZW50PW51bGwsdGhpcy5fc2NoZWR1bGVkVGltZW91dHM9bmV3IE1hcCx0aGlzLl9uZXh0Q2FsbGJhY2tUaW1lb3V0SUQ9MTtjb25zdCBzZXRJbnQ2ND0oZSx0KT0+e3RoaXMubWVtLnNldFVpbnQzMihlKzAsdCwhMCksdGhpcy5tZW0uc2V0VWludDMyKGUrNCxNYXRoLmZsb29yKHQvNDI5NDk2NzI5NiksITApfSxnZXRJbnQ2ND1lPT50aGlzLm1lbS5nZXRVaW50MzIoZSswLCEwKSs0Mjk0OTY3Mjk2KnRoaXMubWVtLmdldEludDMyKGUrNCwhMCksbG9hZFZhbHVlPWU9Pntjb25zdCB0PXRoaXMubWVtLmdldEZsb2F0NjQoZSwhMCk7aWYoMD09PXQpcmV0dXJuO2lmKCFpc05hTih0KSlyZXR1cm4gdDtjb25zdCBzPXRoaXMubWVtLmdldFVpbnQzMihlLCEwKTtyZXR1cm4gdGhpcy5fdmFsdWVzW3NdfSxzdG9yZVZhbHVlPShlLHQpPT57Y29uc3Qgcz0yMTQ2OTU5MzYwO2lmKCJudW1iZXIiPT10eXBlb2YgdCYmMCE9PXQpcmV0dXJuIGlzTmFOKHQpPyh0aGlzLm1lbS5zZXRVaW50MzIoZSs0LHMsITApLHZvaWQgdGhpcy5tZW0uc2V0VWludDMyKGUsMCwhMCkpOnZvaWQgdGhpcy5tZW0uc2V0RmxvYXQ2NChlLHQsITApO2lmKHZvaWQgMD09PXQpcmV0dXJuIHZvaWQgdGhpcy5tZW0uc2V0RmxvYXQ2NChlLDAsITApO2xldCBpPXRoaXMuX2lkcy5nZXQodCk7dm9pZCAwPT09aSYmKGk9dGhpcy5faWRQb29sLnBvcCgpLHZvaWQgMD09PWkmJihpPXRoaXMuX3ZhbHVlcy5sZW5ndGgpLHRoaXMuX3ZhbHVlc1tpXT10LHRoaXMuX2dvUmVmQ291bnRzW2ldPTAsdGhpcy5faWRzLnNldCh0LGkpKSx0aGlzLl9nb1JlZkNvdW50c1tpXSsrO2xldCBuPTA7c3dpdGNoKHR5cGVvZiB0KXtjYXNlIm9iamVjdCI6bnVsbCE9PXQmJihuPTEpO2JyZWFrO2Nhc2Uic3RyaW5nIjpuPTI7YnJlYWs7Y2FzZSJzeW1ib2wiOm49MzticmVhaztjYXNlImZ1bmN0aW9uIjpuPTR9dGhpcy5tZW0uc2V0VWludDMyKGUrNCxzfG4sITApLHRoaXMubWVtLnNldFVpbnQzMihlLGksITApfSxsb2FkU2xpY2U9ZT0+e2NvbnN0IHQ9Z2V0SW50NjQoZSswKSxzPWdldEludDY0KGUrOCk7cmV0dXJuIG5ldyBVaW50OEFycmF5KHRoaXMuX2luc3QuZXhwb3J0cy5tZW0uYnVmZmVyLHQscyl9LGxvYWRTbGljZU9mVmFsdWVzPWU9Pntjb25zdCB0PWdldEludDY0KGUrMCkscz1nZXRJbnQ2NChlKzgpLGk9bmV3IEFycmF5KHMpO2ZvcihsZXQgZT0wO2U8cztlKyspaVtlXT1sb2FkVmFsdWUodCs4KmUpO3JldHVybiBpfSxsb2FkU3RyaW5nPWU9Pntjb25zdCBzPWdldEludDY0KGUrMCksaT1nZXRJbnQ2NChlKzgpO3JldHVybiB0LmRlY29kZShuZXcgRGF0YVZpZXcodGhpcy5faW5zdC5leHBvcnRzLm1lbS5idWZmZXIscyxpKSl9LHM9RGF0ZS5ub3coKS1wZXJmb3JtYW5jZS5ub3coKTt0aGlzLmltcG9ydE9iamVjdD17Z286eyJydW50aW1lLndhc21FeGl0IjplPT57ZT4+Pj0wO2NvbnN0IHQ9dGhpcy5tZW0uZ2V0SW50MzIoZSs4LCEwKTt0aGlzLmV4aXRlZD0hMCxkZWxldGUgdGhpcy5faW5zdCxkZWxldGUgdGhpcy5fdmFsdWVzLGRlbGV0ZSB0aGlzLl9nb1JlZkNvdW50cyxkZWxldGUgdGhpcy5faWRzLGRlbGV0ZSB0aGlzLl9pZFBvb2wsdGhpcy5leGl0KHQpfSwicnVudGltZS53YXNtV3JpdGUiOmU9Pntjb25zdCB0PWdldEludDY0KChlPj4+PTApKzgpLHM9Z2V0SW50NjQoZSsxNiksaT10aGlzLm1lbS5nZXRJbnQzMihlKzI0LCEwKTtmcy53cml0ZVN5bmModCxuZXcgVWludDhBcnJheSh0aGlzLl9pbnN0LmV4cG9ydHMubWVtLmJ1ZmZlcixzLGkpKX0sInJ1bnRpbWUucmVzZXRNZW1vcnlEYXRhVmlldyI6ZT0+e3RoaXMubWVtPW5ldyBEYXRhVmlldyh0aGlzLl9pbnN0LmV4cG9ydHMubWVtLmJ1ZmZlcil9LCJydW50aW1lLm5hbm90aW1lMSI6ZT0+e3NldEludDY0KChlPj4+PTApKzgsMWU2KihzK3BlcmZvcm1hbmNlLm5vdygpKSl9LCJydW50aW1lLndhbGx0aW1lMSI6ZT0+e2U+Pj49MDtjb25zdCB0PShuZXcgRGF0ZSkuZ2V0VGltZSgpO3NldEludDY0KGUrOCx0LzFlMyksdGhpcy5tZW0uc2V0SW50MzIoZSsxNix0JTFlMyoxZTYsITApfSwicnVudGltZS5zY2hlZHVsZVRpbWVvdXRFdmVudCI6ZT0+e2U+Pj49MDtjb25zdCB0PXRoaXMuX25leHRDYWxsYmFja1RpbWVvdXRJRDt0aGlzLl9uZXh0Q2FsbGJhY2tUaW1lb3V0SUQrKyx0aGlzLl9zY2hlZHVsZWRUaW1lb3V0cy5zZXQodCxzZXRUaW1lb3V0KCgoKT0+e2Zvcih0aGlzLl9yZXN1bWUoKTt0aGlzLl9zY2hlZHVsZWRUaW1lb3V0cy5oYXModCk7KWNvbnNvbGUud2Fybigic2NoZWR1bGVUaW1lb3V0RXZlbnQ6IG1pc3NlZCB0aW1lb3V0IGV2ZW50IiksdGhpcy5fcmVzdW1lKCl9KSxnZXRJbnQ2NChlKzgpKzEpKSx0aGlzLm1lbS5zZXRJbnQzMihlKzE2LHQsITApfSwicnVudGltZS5jbGVhclRpbWVvdXRFdmVudCI6ZT0+e2U+Pj49MDtjb25zdCB0PXRoaXMubWVtLmdldEludDMyKGUrOCwhMCk7Y2xlYXJUaW1lb3V0KHRoaXMuX3NjaGVkdWxlZFRpbWVvdXRzLmdldCh0KSksdGhpcy5fc2NoZWR1bGVkVGltZW91dHMuZGVsZXRlKHQpfSwicnVudGltZS5nZXRSYW5kb21EYXRhIjplPT57ZT4+Pj0wLGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobG9hZFNsaWNlKGUrOCkpfSwic3lzY2FsbC9qcy5maW5hbGl6ZVJlZiI6ZT0+e2U+Pj49MDtjb25zdCB0PXRoaXMubWVtLmdldFVpbnQzMihlKzgsITApO2lmKHRoaXMuX2dvUmVmQ291bnRzW3RdLS0sMD09PXRoaXMuX2dvUmVmQ291bnRzW3RdKXtjb25zdCBlPXRoaXMuX3ZhbHVlc1t0XTt0aGlzLl92YWx1ZXNbdF09bnVsbCx0aGlzLl9pZHMuZGVsZXRlKGUpLHRoaXMuX2lkUG9vbC5wdXNoKHQpfX0sInN5c2NhbGwvanMuc3RyaW5nVmFsIjplPT57c3RvcmVWYWx1ZSgoZT4+Pj0wKSsyNCxsb2FkU3RyaW5nKGUrOCkpfSwic3lzY2FsbC9qcy52YWx1ZUdldCI6ZT0+e2U+Pj49MDtjb25zdCB0PVJlZmxlY3QuZ2V0KGxvYWRWYWx1ZShlKzgpLGxvYWRTdHJpbmcoZSsxNikpO2U9dGhpcy5faW5zdC5leHBvcnRzLmdldHNwKCk+Pj4wLHN0b3JlVmFsdWUoZSszMix0KX0sInN5c2NhbGwvanMudmFsdWVTZXQiOmU9PntlPj4+PTAsUmVmbGVjdC5zZXQobG9hZFZhbHVlKGUrOCksbG9hZFN0cmluZyhlKzE2KSxsb2FkVmFsdWUoZSszMikpfSwic3lzY2FsbC9qcy52YWx1ZURlbGV0ZSI6ZT0+e2U+Pj49MCxSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KGxvYWRWYWx1ZShlKzgpLGxvYWRTdHJpbmcoZSsxNikpfSwic3lzY2FsbC9qcy52YWx1ZUluZGV4IjplPT57c3RvcmVWYWx1ZSgoZT4+Pj0wKSsyNCxSZWZsZWN0LmdldChsb2FkVmFsdWUoZSs4KSxnZXRJbnQ2NChlKzE2KSkpfSwic3lzY2FsbC9qcy52YWx1ZVNldEluZGV4IjplPT57ZT4+Pj0wLFJlZmxlY3Quc2V0KGxvYWRWYWx1ZShlKzgpLGdldEludDY0KGUrMTYpLGxvYWRWYWx1ZShlKzI0KSl9LCJzeXNjYWxsL2pzLnZhbHVlQ2FsbCI6ZT0+e2U+Pj49MDt0cnl7Y29uc3QgdD1sb2FkVmFsdWUoZSs4KSxzPVJlZmxlY3QuZ2V0KHQsbG9hZFN0cmluZyhlKzE2KSksaT1sb2FkU2xpY2VPZlZhbHVlcyhlKzMyKSxuPVJlZmxlY3QuYXBwbHkocyx0LGkpO2U9dGhpcy5faW5zdC5leHBvcnRzLmdldHNwKCk+Pj4wLHN0b3JlVmFsdWUoZSs1NixuKSx0aGlzLm1lbS5zZXRVaW50OChlKzY0LDEpfWNhdGNoKHQpe3N0b3JlVmFsdWUoZSs1Nix0KSx0aGlzLm1lbS5zZXRVaW50OChlKzY0LDApfX0sInN5c2NhbGwvanMudmFsdWVJbnZva2UiOmU9PntlPj4+PTA7dHJ5e2NvbnN0IHQ9bG9hZFZhbHVlKGUrOCkscz1sb2FkU2xpY2VPZlZhbHVlcyhlKzE2KSxpPVJlZmxlY3QuYXBwbHkodCx2b2lkIDAscyk7ZT10aGlzLl9pbnN0LmV4cG9ydHMuZ2V0c3AoKT4+PjAsc3RvcmVWYWx1ZShlKzQwLGkpLHRoaXMubWVtLnNldFVpbnQ4KGUrNDgsMSl9Y2F0Y2godCl7c3RvcmVWYWx1ZShlKzQwLHQpLHRoaXMubWVtLnNldFVpbnQ4KGUrNDgsMCl9fSwic3lzY2FsbC9qcy52YWx1ZU5ldyI6ZT0+e2U+Pj49MDt0cnl7Y29uc3QgdD1sb2FkVmFsdWUoZSs4KSxzPWxvYWRTbGljZU9mVmFsdWVzKGUrMTYpLGk9UmVmbGVjdC5jb25zdHJ1Y3QodCxzKTtlPXRoaXMuX2luc3QuZXhwb3J0cy5nZXRzcCgpPj4+MCxzdG9yZVZhbHVlKGUrNDAsaSksdGhpcy5tZW0uc2V0VWludDgoZSs0OCwxKX1jYXRjaCh0KXtzdG9yZVZhbHVlKGUrNDAsdCksdGhpcy5tZW0uc2V0VWludDgoZSs0OCwwKX19LCJzeXNjYWxsL2pzLnZhbHVlTGVuZ3RoIjplPT57c2V0SW50NjQoKGU+Pj49MCkrMTYscGFyc2VJbnQobG9hZFZhbHVlKGUrOCkubGVuZ3RoKSl9LCJzeXNjYWxsL2pzLnZhbHVlUHJlcGFyZVN0cmluZyI6dD0+e3Q+Pj49MDtjb25zdCBzPWUuZW5jb2RlKFN0cmluZyhsb2FkVmFsdWUodCs4KSkpO3N0b3JlVmFsdWUodCsxNixzKSxzZXRJbnQ2NCh0KzI0LHMubGVuZ3RoKX0sInN5c2NhbGwvanMudmFsdWVMb2FkU3RyaW5nIjplPT57Y29uc3QgdD1sb2FkVmFsdWUoKGU+Pj49MCkrOCk7bG9hZFNsaWNlKGUrMTYpLnNldCh0KX0sInN5c2NhbGwvanMudmFsdWVJbnN0YW5jZU9mIjplPT57ZT4+Pj0wLHRoaXMubWVtLnNldFVpbnQ4KGUrMjQsbG9hZFZhbHVlKGUrOClpbnN0YW5jZW9mIGxvYWRWYWx1ZShlKzE2KT8xOjApfSwic3lzY2FsbC9qcy5jb3B5Qnl0ZXNUb0dvIjplPT57Y29uc3QgdD1sb2FkU2xpY2UoKGU+Pj49MCkrOCkscz1sb2FkVmFsdWUoZSszMik7aWYoIShzIGluc3RhbmNlb2YgVWludDhBcnJheXx8cyBpbnN0YW5jZW9mIFVpbnQ4Q2xhbXBlZEFycmF5KSlyZXR1cm4gdm9pZCB0aGlzLm1lbS5zZXRVaW50OChlKzQ4LDApO2NvbnN0IGk9cy5zdWJhcnJheSgwLHQubGVuZ3RoKTt0LnNldChpKSxzZXRJbnQ2NChlKzQwLGkubGVuZ3RoKSx0aGlzLm1lbS5zZXRVaW50OChlKzQ4LDEpfSwic3lzY2FsbC9qcy5jb3B5Qnl0ZXNUb0pTIjplPT57Y29uc3QgdD1sb2FkVmFsdWUoKGU+Pj49MCkrOCkscz1sb2FkU2xpY2UoZSsxNik7aWYoISh0IGluc3RhbmNlb2YgVWludDhBcnJheXx8dCBpbnN0YW5jZW9mIFVpbnQ4Q2xhbXBlZEFycmF5KSlyZXR1cm4gdm9pZCB0aGlzLm1lbS5zZXRVaW50OChlKzQ4LDApO2NvbnN0IGk9cy5zdWJhcnJheSgwLHQubGVuZ3RoKTt0LnNldChpKSxzZXRJbnQ2NChlKzQwLGkubGVuZ3RoKSx0aGlzLm1lbS5zZXRVaW50OChlKzQ4LDEpfSxkZWJ1ZzplPT57Y29uc29sZS5sb2coZSl9fX19YXN5bmMgcnVuKHQpe2lmKCEodCBpbnN0YW5jZW9mIFdlYkFzc2VtYmx5Lkluc3RhbmNlKSl0aHJvdyBuZXcgRXJyb3IoIkdvLnJ1bjogV2ViQXNzZW1ibHkuSW5zdGFuY2UgZXhwZWN0ZWQiKTt0aGlzLl9pbnN0PXQsdGhpcy5tZW09bmV3IERhdGFWaWV3KHRoaXMuX2luc3QuZXhwb3J0cy5tZW0uYnVmZmVyKSx0aGlzLl92YWx1ZXM9W05hTiwwLG51bGwsITAsITEsZ2xvYmFsLHRoaXNdLHRoaXMuX2dvUmVmQ291bnRzPW5ldyBBcnJheSh0aGlzLl92YWx1ZXMubGVuZ3RoKS5maWxsKDEvMCksdGhpcy5faWRzPW5ldyBNYXAoW1swLDFdLFtudWxsLDJdLFshMCwzXSxbITEsNF0sW2dsb2JhbCw1XSxbdGhpcyw2XV0pLHRoaXMuX2lkUG9vbD1bXSx0aGlzLmV4aXRlZD0hMTtsZXQgcz00MDk2O2NvbnN0IHN0clB0cj10PT57Y29uc3QgaT1zLG49ZS5lbmNvZGUodCsiXDAiKTtyZXR1cm4gbmV3IFVpbnQ4QXJyYXkodGhpcy5tZW0uYnVmZmVyLHMsbi5sZW5ndGgpLnNldChuKSxzKz1uLmxlbmd0aCxzJTghPTAmJihzKz04LXMlOCksaX0saT10aGlzLmFyZ3YubGVuZ3RoLG49W107dGhpcy5hcmd2LmZvckVhY2goKGU9PntuLnB1c2goc3RyUHRyKGUpKX0pKSxuLnB1c2goMCk7T2JqZWN0LmtleXModGhpcy5lbnYpLnNvcnQoKS5mb3JFYWNoKChlPT57bi5wdXNoKHN0clB0cihgJHtlfT0ke3RoaXMuZW52W2VdfWApKX0pKSxuLnB1c2goMCk7Y29uc3Qgbz1zO24uZm9yRWFjaCgoZT0+e3RoaXMubWVtLnNldFVpbnQzMihzLGUsITApLHRoaXMubWVtLnNldFVpbnQzMihzKzQsMCwhMCkscys9OH0pKSx0aGlzLl9pbnN0LmV4cG9ydHMucnVuKGksbyksdGhpcy5leGl0ZWQmJnRoaXMuX3Jlc29sdmVFeGl0UHJvbWlzZSgpLGF3YWl0IHRoaXMuX2V4aXRQcm9taXNlfV9yZXN1bWUoKXtpZih0aGlzLmV4aXRlZCl0aHJvdyBuZXcgRXJyb3IoIkdvIHByb2dyYW0gaGFzIGFscmVhZHkgZXhpdGVkIik7dGhpcy5faW5zdC5leHBvcnRzLnJlc3VtZSgpLHRoaXMuZXhpdGVkJiZ0aGlzLl9yZXNvbHZlRXhpdFByb21pc2UoKX1fbWFrZUZ1bmNXcmFwcGVyKGUpe2NvbnN0IHQ9dGhpcztyZXR1cm4gZnVuY3Rpb24oKXtjb25zdCBzPXtpZDplLHRoaXM6dGhpcyxhcmdzOmFyZ3VtZW50c307cmV0dXJuIHQuX3BlbmRpbmdFdmVudD1zLHQuX3Jlc3VtZSgpLHMucmVzdWx0fX19LCJ1bmRlZmluZWQiIT10eXBlb2YgbW9kdWxlJiZnbG9iYWwucmVxdWlyZSYmZ2xvYmFsLnJlcXVpcmUubWFpbj09PW1vZHVsZSYmZ2xvYmFsLnByb2Nlc3MmJmdsb2JhbC5wcm9jZXNzLnZlcnNpb25zJiYhZ2xvYmFsLnByb2Nlc3MudmVyc2lvbnMuZWxlY3Ryb24pe3Byb2Nlc3MuYXJndi5sZW5ndGg8MyYmKGNvbnNvbGUuZXJyb3IoInVzYWdlOiBnb19qc193YXNtX2V4ZWMgW3dhc20gYmluYXJ5XSBbYXJndW1lbnRzXSIpLHByb2Nlc3MuZXhpdCgxKSk7Y29uc3QgZT1uZXcgR287ZS5hcmd2PXByb2Nlc3MuYXJndi5zbGljZSgyKSxlLmVudj1PYmplY3QuYXNzaWduKHtUTVBESVI6cmVxdWlyZSgib3MiKS50bXBkaXIoKX0scHJvY2Vzcy5lbnYpLGUuZXhpdD1wcm9jZXNzLmV4aXQsV2ViQXNzZW1ibHkuaW5zdGFudGlhdGUoZnMucmVhZEZpbGVTeW5jKHByb2Nlc3MuYXJndlsyXSksZS5pbXBvcnRPYmplY3QpLnRoZW4oKHQ9Pihwcm9jZXNzLm9uKCJleGl0IiwodD0+ezAhPT10fHxlLmV4aXRlZHx8KGUuX3BlbmRpbmdFdmVudD17aWQ6MH0sZS5fcmVzdW1lKCkpfSkpLGUucnVuKHQuaW5zdGFuY2UpKSkpLmNhdGNoKChlPT57Y29uc29sZS5lcnJvcihlKSxwcm9jZXNzLmV4aXQoMSl9KSl9fSkoKSxvbm1lc3NhZ2U9ZT0+X19hd2FpdGVyKHZvaWQgMCx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbiooKXt2YXIgdDtjb25zdCBzPW5ldyBHbyxpPWUuZGF0YS53YXNtLG49eWllbGQgV2ViQXNzZW1ibHkuaW5zdGFudGlhdGUoaSxzLmltcG9ydE9iamVjdCk7cy5hcmd2PVsoMWUzKihuZXcgRGF0ZSkuZ2V0VGltZSgpK01hdGgucm91bmQoMWUzKk1hdGgucmFuZG9tKCkpKS50b1N0cmluZygzNildLCgobnVsbCE9PSh0PW51bGwhPT1nbG9iYWxUaGlzJiZ2b2lkIDAhPT1nbG9iYWxUaGlzP2dsb2JhbFRoaXM6d2luZG93KSYmdm9pZCAwIT09dD90OnNlbGYpLmluaXQ9ZS5kYXRhLmluaXQpJiZzLmFyZ3YucHVzaCgiaW5pdCIpLHlpZWxkIHMucnVuKG4pfSkpfSgpOwoK",null,!1);d=new WeakMap,c=new WeakMap,r=new WeakMap,n=new WeakMap,o=new WeakMap,b=new WeakMap,u=new WeakMap,Z=new WeakMap,h=new WeakMap,a=new WeakSet,G=function _Kepubify_queueTryWork(){for(;__classPrivateFieldGet(this,r,"f").length&&!(__classPrivateFieldGet(this,h,"f")&&__classPrivateFieldGet(this,o,"f")>=__classPrivateFieldGet(this,h,"f"));){let e=0;for(let l=0;l<__classPrivateFieldGet(this,r,"f").length;l++)if(__classPrivateFieldGet(this,Z,"f")&&__classPrivateFieldGet(this,r,"f")[l].epub.size>__classPrivateFieldGet(this,Z,"f"))__classPrivateFieldGet(this,r,"f")[l].reject(new Error(`File too large for web version (maximum: ${formatBytes(__classPrivateFieldGet(this,Z,"f"))})`)),__classPrivateFieldGet(this,r,"f").splice(l--,1);else{if(!(__classPrivateFieldGet(this,u,"f")&&__classPrivateFieldGet(this,n,"f")&&__classPrivateFieldGet(this,n,"f")+__classPrivateFieldGet(this,r,"f")[l].epub.size>__classPrivateFieldGet(this,u,"f"))){e=l;break}if(__classPrivateFieldGet(this,b,"f")){e=-2;break}}if(-2==e)break;__classPrivateFieldGet(this,a,"m",p).call(this,e)}},p=function _Kepubify_queueDoWork(e){const{epub:l,config:t,progress:s,resolve:i,reject:b}=__classPrivateFieldGet(this,r,"f")[e];return __classPrivateFieldGet(this,r,"f").splice(e,1),__classPrivateFieldSet(this,o,+__classPrivateFieldGet(this,o,"f")+1,"f"),__classPrivateFieldSet(this,n,__classPrivateFieldGet(this,n,"f")+l.size,"f"),(()=>__awaiter(this,void 0,void 0,(function*(){let e;try{const a=yield function readAsArrayBuffer(e,l){return __awaiter(this,void 0,void 0,(function*(){return new Promise(((t,s)=>{const i=new FileReader;i.addEventListener("abort",(e=>{null==l||l(e.lengthComputable,e.loaded,e.total),s(new Error("aborted"))})),i.addEventListener("error",(e=>{null==l||l(e.lengthComputable,e.loaded,e.total),s(i.error)})),i.addEventListener("loadstart",(e=>{null==l||l(e.lengthComputable,e.loaded,e.total)})),i.addEventListener("progress",(e=>{null==l||l(e.lengthComputable,e.loaded,e.total)})),i.addEventListener("load",(()=>{t(i.result)})),i.readAsArrayBuffer(e)}))}))}(l);__classPrivateFieldGet(this,c,"f").add(e=new KepubifyWorker(__classPrivateFieldGet(this,d,"f"),{epub:a,config:t,progress:!!s},s));const r=yield e.kepub;i(new Blob([r],{type:"application/epub+zip"}))}catch(e){b(e)}finally{e&&__classPrivateFieldGet(this,c,"f").delete(e)}__classPrivateFieldSet(this,n,__classPrivateFieldGet(this,n,"f")-l.size,"f"),__classPrivateFieldSet(this,o,+__classPrivateFieldGet(this,o,"f")-1,"f"),__classPrivateFieldGet(this,a,"m",G).call(this)})))()};class KepubifyWorker{constructor(e,l,t){m.add(this),W.set(this,void 0),V.set(this,void 0),X.set(this,void 0),y.set(this,void 0),v.set(this,void 0),K.set(this,void 0),f.set(this,void 0),S.set(this,void 0),F.set(this,void 0),__classPrivateFieldSet(this,V,new Promise(((e,l)=>{__classPrivateFieldSet(this,X,(l=>{e(l),__classPrivateFieldSet(this,X,void 0,"f")}),"f"),__classPrivateFieldSet(this,y,(e=>{l(e),__classPrivateFieldSet(this,y,void 0,"f")}),"f")})),"f"),__classPrivateFieldGet(this,V,"f").then((()=>{__classPrivateFieldGet(this,W,"f")&&(__classPrivateFieldGet(this,W,"f").onerror=null,__classPrivateFieldGet(this,W,"f").onmessage=null),window.setTimeout((()=>this.terminate()),100)}),(()=>{__classPrivateFieldGet(this,W,"f")&&(__classPrivateFieldGet(this,W,"f").onerror=null,__classPrivateFieldGet(this,W,"f").onmessage=null),window.setTimeout((()=>this.terminate()),100)})),__classPrivateFieldSet(this,v,new Promise(((e,l)=>{__classPrivateFieldSet(this,K,(l=>{e(l),__classPrivateFieldSet(this,K,void 0,"f")}),"f"),__classPrivateFieldSet(this,f,(e=>{l(e),__classPrivateFieldSet(this,f,void 0,"f")}),"f")})),"f"),__classPrivateFieldSet(this,F,setTimeout((()=>{var e,l;const t=new Error("worker did not start in time");null===(e=__classPrivateFieldGet(this,f,"f"))||void 0===e||e.call(this,t),null===(l=__classPrivateFieldGet(this,y,"f"))||void 0===l||l.call(this,t)}),2e3),"f"),__classPrivateFieldSet(this,S,t,"f"),__classPrivateFieldSet(this,W,new _,"f"),__classPrivateFieldGet(this,W,"f").onmessage=__classPrivateFieldGet(this,m,"m",L).bind(this),__classPrivateFieldGet(this,W,"f").onerror=__classPrivateFieldGet(this,m,"m",z).bind(this),__classPrivateFieldGet(this,W,"f").postMessage({wasm:e,init:l})}terminate(){var e,l,t;const s=new Error("worker terminated");null===(e=__classPrivateFieldGet(this,f,"f"))||void 0===e||e.call(this,s),null===(l=__classPrivateFieldGet(this,y,"f"))||void 0===l||l.call(this,s),null===(t=__classPrivateFieldGet(this,W,"f"))||void 0===t||t.terminate(),__classPrivateFieldSet(this,W,void 0,"f")}get version(){return __classPrivateFieldGet(this,v,"f")}get kepub(){return __classPrivateFieldGet(this,V,"f")}}W=new WeakMap,V=new WeakMap,X=new WeakMap,y=new WeakMap,v=new WeakMap,K=new WeakMap,f=new WeakMap,S=new WeakMap,F=new WeakMap,m=new WeakSet,z=function _KepubifyWorker_error(e){var l,t;const s=e.error instanceof Error?e.error:new Error(`${e.message} (at ${e.filename}:${e.lineno}:${e.colno})`);null===(l=__classPrivateFieldGet(this,f,"f"))||void 0===l||l.call(this,s),null===(t=__classPrivateFieldGet(this,y,"f"))||void 0===t||t.call(this,s)},L=function _KepubifyWorker_message(e){var l,t,s,i,a,d,c,r;let n;const o=e.data;switch(o.type){case"version":clearTimeout(__classPrivateFieldGet(this,F,"f")),null===(l=__classPrivateFieldGet(this,K,"f"))||void 0===l||l.call(this,o.version);break;case"progress":null===(t=__classPrivateFieldGet(this,S,"f"))||void 0===t||t.call(this,o.n,o.total);break;case"success":null===(s=__classPrivateFieldGet(this,X,"f"))||void 0===s||s.call(this,o.kepub);break;case"error":n=new KepubifyError(o.message),null===(i=__classPrivateFieldGet(this,y,"f"))||void 0===i||i.call(this,n);break;case"panic":n=new Error(`worker panicked: ${o.message}`),n.stack=o.message+"\n\n"+o.stack,null===(a=__classPrivateFieldGet(this,f,"f"))||void 0===a||a.call(this,n),null===(d=__classPrivateFieldGet(this,y,"f"))||void 0===d||d.call(this,n);break;case"exit":n=new Error("worker exited prematurely"),null===(c=__classPrivateFieldGet(this,f,"f"))||void 0===c||c.call(this,n),null===(r=__classPrivateFieldGet(this,y,"f"))||void 0===r||r.call(this,n)}};P=new WeakMap;class KepubifyError extends Error{constructor(e){super(e),this.name=KepubifyError.name}}function formatBytes(e){return e>1e6?`${Math.round(e/1e6)} MB`:e>1e3?`${Math.round(e/1e3)} KB`:`${Math.round(e)} bytes`}e.Kepubify=class Kepubify{constructor(){a.add(this),d.set(this,void 0),c.set(this,new Set),r.set(this,[]),n.set(this,0),o.set(this,0),b.set(this,!1),u.set(this,void 0),Z.set(this,void 0),h.set(this,void 0),window.chrome?(__classPrivateFieldSet(this,h,Math.max(Math.min(navigator.hardwareConcurrency||2,1),/Mobi/i.test(window.navigator.userAgent)?2:8),"f"),__classPrivateFieldSet(this,u,Math.max(Math.min(1e9*(navigator.deviceMemory||2)/2,4e9)/__classPrivateFieldGet(this,h,"f"),5e7)/2,"f"),__classPrivateFieldSet(this,Z,3e8,"f")):(__classPrivateFieldSet(this,h,2,"f"),__classPrivateFieldSet(this,u,5e7,"f"),__classPrivateFieldSet(this,Z,25e7,"f")),console.log(`[kepubify] automatically configured worker limits: workers=${__classPrivateFieldGet(this,h,"f")} fileSize=${formatBytes(__classPrivateFieldGet(this,u,"f"))} fileSizeHard=${formatBytes(__classPrivateFieldGet(this,Z,"f"))}`)}init(e){return __awaiter(this,void 0,void 0,(function*(){if(__classPrivateFieldGet(this,d,"f"))throw new Error("kepubify already loaded");const t=yield function get(e,l){return new Promise(((t,s)=>{const i=new XMLHttpRequest;i.addEventListener("abort",(e=>{null==l||l(e.lengthComputable,e.loaded,e.total),s(new Error("request aborted"))})),i.addEventListener("error",(e=>{null==l||l(e.lengthComputable,e.loaded,e.total),s(new Error("network error"))})),i.addEventListener("timeout",(e=>{null==l||l(e.lengthComputable,e.loaded,e.total),s(new Error("request timed out"))})),i.addEventListener("load",(e=>{null==l||l(e.lengthComputable,e.loaded,e.total),200!=i.status?s(new Error(`status ${i.status} ${i.statusText}`)):t(i.response)})),i.addEventListener("loadstart",(e=>{null==l||l(e.lengthComputable,e.loaded,e.total)})),i.addEventListener("progress",(e=>{null==l||l(e.lengthComputable,e.loaded,e.total)})),i.responseType="arraybuffer",i.open("GET",e),i.send()}))}(l,e),s=yield WebAssembly.compile(t),i=yield new KepubifyWorker(s).version;return __classPrivateFieldSet(this,d,s,"f"),i}))}kepubify(e,l,t){return __awaiter(this,void 0,void 0,(function*(){if(!__classPrivateFieldGet(this,d,"f"))throw new Error("kepubify not loaded");return new Promise(((s,i)=>{var d;__classPrivateFieldGet(this,r,"f").push({epub:e,config:null!==(d=null==l?void 0:l.options)&&void 0!==d?d:[],progress:t,resolve:s,reject:i}),__classPrivateFieldGet(this,a,"m",G).call(this)}))}))}get queueLimitFileSize(){return __classPrivateFieldGet(this,u,"f")}set queueLimitFileSize(e){__classPrivateFieldSet(this,u,e,"f"),__classPrivateFieldGet(this,a,"m",G).call(this)}get queueLimitFileSizeHard(){return __classPrivateFieldGet(this,Z,"f")}set queueMaximumFileSizeHard(e){__classPrivateFieldSet(this,Z,e,"f"),__classPrivateFieldGet(this,a,"m",G).call(this)}get queueLimitWorkers(){return __classPrivateFieldGet(this,h,"f")}set queueLimitWorkers(e){__classPrivateFieldSet(this,h,e,"f"),__classPrivateFieldGet(this,a,"m",G).call(this)}get queueStrictOrder(){return __classPrivateFieldGet(this,b,"f")}set queueStrictOrder(e){__classPrivateFieldSet(this,b,e,"f"),__classPrivateFieldGet(this,a,"m",G).call(this)}},e.KepubifyConfig=class KepubifyConfig{constructor(){P.set(this,[])}get options(){return __classPrivateFieldGet(this,P,"f")}smartypants(){return __classPrivateFieldGet(this,P,"f").push({type:"Smartypants"}),this}findReplace(e,l){return __classPrivateFieldGet(this,P,"f").push({type:"FindReplace",find:e,replace:l}),this}dummyTitlepage(e){return __classPrivateFieldGet(this,P,"f").push({type:"DummyTitlepage",add:e}),this}addCSS(e){return __classPrivateFieldGet(this,P,"f").push({type:"AddCSS",css:e}),this}hyphenate(e){return __classPrivateFieldGet(this,P,"f").push({type:"Hyphenate",hyphenate:e}),this}fullScreenFixes(){return __classPrivateFieldGet(this,P,"f").push({type:"FullScreenFixes"}),this}},e.KepubifyError=KepubifyError,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=kepubify.js.map
