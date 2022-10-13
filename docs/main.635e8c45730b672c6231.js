(()=>{"use strict";function e(e,n){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return u=e.done,e},e:function(e){c=!0,i=e},f:function(){try{u||null==r.return||r.return()}finally{if(c)throw i}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var n=[],r=["C","D","H","S"],o=["A","J","Q","K"],a=0,i=0,u=document.querySelector("#btnPedir"),c=document.querySelector("#btnDetener"),s=document.querySelector("#btnNuevo"),l=document.querySelectorAll("small"),d=document.querySelector("#jugador-cartas"),f=document.querySelector("#computadora-cartas"),m=document.querySelector("nombre"),y=sessionStorage.getItem("nombre");m.innerText=y;var h=function(){if(0===n.length)throw"There is no more cards on the deck";return n.pop(n)},v=function(e){var t=e.substring(0,e.length-1);return isNaN(t)?"A"===t?i<10?11:1:10:1*t},b=function(e){do{var t=h();i+=v(t),l[1].innerText=i;var n=document.createElement("img");if(n.src="assets/cartas/".concat(t,".png"),n.classList.add("carta"),f.append(n),a>21)break}while(i<e&&e<=21)};u.addEventListener("click",(function(){var e=h();a+=function(e){var t=e.substring(0,e.length-1);return isNaN(t)?"A"===t?confirm("You got an Ace. Do you want to count it as 11? (If you cancel, its value is 1)")?11:1:10:1*t}(e),function(e,t){t[0].innerText=e,t[1].innerText=i}(a,l);var t=document.createElement("img");t.src="assets/cartas/".concat(e,".png"),t.classList.add("carta"),d.append(t),a>21?(u.disabled=!0,c.disabled=!0,b(a),setTimeout((function(){alert("Greed makes man blind and foolish, and makes him an easy prey for robots. You lose!")}),20)):21===a&&(u.disabled=!0,setTimeout((function(){alert("You got a 21! It is your lucky day. End your turn")}),20))})),c.addEventListener("click",(function(){u.disabled=!0,c.disabled=!0,b(a),setTimeout((function(){i>21?alert("Congratulations! You defeated the CPU, someday the androids will revenge its death"):i>a?alert("Did you believe that you can defeat an artificial intelligence? Beep bop.. how innocent."):i===a&&21!=a?alert("Good try, but it is a draw, whoever has the most screws win, and you already lose it all"):21===i&&21===a&&alert("Not so fast, robots has nice days too. Draw.")}),30)})),s.addEventListener("click",(function(){location.reload()})),function(){for(var t=2;t<=10;t++){var a,i=e(r);try{for(i.s();!(a=i.n()).done;){var u=a.value;n.push(t+u)}}catch(e){i.e(e)}finally{i.f()}}var c,s=e(r);try{for(s.s();!(c=s.n()).done;){var l,d=c.value,f=e(o);try{for(f.s();!(l=f.n()).done;){var m=l.value;n.push(m+d)}}catch(e){f.e(e)}finally{f.f()}}}catch(e){s.e(e)}finally{s.f()}n=_.shuffle(n)}(),m.innerText==sessionStorage.getItem("nombre")&&""!==m.innerText&&"null"!==m.innerText||(y=prompt("Enter your name, human"),sessionStorage.setItem("nombre",y),m.innerText=y)})();