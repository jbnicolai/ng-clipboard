!function(){"use strict";var e,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};"object"===("undefined"==typeof module?"undefined":o(module))&&module.exports?(e=require("angular"),module.exports="ng-clipboard"):e=window.angular,e.module("ng-clipboard",[]),e.module("ng-clipboard").directive("ngCopy",function(){return{restrict:"A",scope:{ngCopy:"="},link:function(e,o){o.on("click",function(){var o=document.createElement("textarea");o.setAttribute("style","position: absolute;overflow: hidden;width: 0;height: 0;top: 0;left: 0;"),o.innerText=e.ngCopy,document.body.appendChild(o),o.select();try{document.execCommand("copy")}catch(t){console.err(t)}o.remove()})}}})}();