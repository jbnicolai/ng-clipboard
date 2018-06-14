!function(){"use strict";var o,n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o};"object"===("undefined"==typeof module?"undefined":n(module))&&module.exports?(o=require("angular"),module.exports="ng-clipboard"):o=window.angular,o.module("ng-clipboard",[]),o.module("ng-clipboard").directive("ngCopy",["createFake",function(o){return{restrict:"A",scope:{ngCopy:"=",onSuccess:"&",onError:"&"},link:function(n,e){var t=function(){n.onSuccess()},r=function(){n.onError()};e.on("click",function(e){e.stopPropagation(),o(n.ngCopy,"copy",t,r)})}}}]),o.module("ng-clipboard").directive("ngCut",["createFake",function(o){return{restrict:"A",scope:{ngCut:"=",onSuccess:"&",onError:"&"},link:function(n,e){var t=function(){n.ngCut="",n.onSuccess()},r=function(){n.onError()};e.on("click",function(){o(n.ngCut,"copy",t,r)})}}}]),o.module("ng-clipboard").factory("createFake",function(){return function(o,n,e,t){var r=document.createElement("textarea");r.setAttribute("style","position: absolute;overflow: hidden;width: 0;height: 0;top: 0;left: 0;"),r.value=o,document.body.appendChild(r),r.select();try{document.execCommand(n),r.remove()}catch(c){t(c)}e()}})}();