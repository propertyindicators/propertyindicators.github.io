/*! PILab 24-08-2017 (c) 2017 propertyindicators@gmail.com */

var Greeter=function(){function a(a){this.element=a,this.element.innerHTML+="The time is: ",this.span=document.createElement("span"),this.element.appendChild(this.span),this.span.innerText=(new Date).toUTCString()}return a.prototype.start=function(){var a=this;this.timerToken=setInterval(function(){return a.span.innerHTML=(new Date).toUTCString()},500)},a.prototype.stop=function(){clearTimeout(this.timerToken)},a}();window.onload=function(){var a=document.getElementById("content");new Greeter(a).start()};