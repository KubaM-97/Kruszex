!function(n){var e={};function t(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return n[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)t.d(o,i,function(e){return n[e]}.bind(null,i));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){t(2),n.exports=t(1)},function(n,e){!function(n){var e={};function t(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return n[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)t.d(o,i,function(e){return n[e]}.bind(null,i));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){"use strict";t.r(e),$((function(){const n=function(){$(window).width()<864?($("header span").hide(),$("nav ul li ul:eq(0) span").html("<img src='img/billetGold.png'>"),$("nav ul li ul:eq(1) span").html("<img src='img/billetSilver.png'>"),$("nav ul li ul:eq(2) span").html("<img src='img/tips.png'>"),$("nav ul li ul:eq(3) span").html("<img src='img/Contact.png'>"),$("nav ul li ul").on("mouseover",(function(){$(this).children("li").css({display:"block",width:"100vw",backgroundColor:"goldenrod"}).offset({left:0})})),$("nav ul li ul").on("mouseout",(function(){$(this).children("li").css("display","none")}))):($("header span").show(),$("nav ul li ul:eq(0) span").html("Złoto"),$("nav ul li ul:eq(1) span").html("Srebro"),$("nav ul li ul:eq(2) span").html("Porady"),$("nav ul li ul:eq(3) span").html("Kontakt"))};$(window).on("resize",n),n(),$("nav a").on("click",(function(n){n.preventDefault();const e=this.href;$(".content").remove();const t=this.id;t?$(".package").load(e+" .content #"+t).hide().fadeIn(1e3):$(".package").load(e+" .content").hide().fadeIn(1e3)})),$(document).ajaxComplete((function(){const n=$("tbody tr");let e="";for(let t=1;t<=10;t++)e=n[t],$("tbody").append(e);$("#countryNumber").on("input",(function(){let t=$("select").val();"Wszystek"==t&&(t=`${n.length}`);const o=parseInt(t);$("tbody").empty();for(let t=0;t<=o-1;t++)e=n[t],$("tbody").append(e)})),$(".mine").on("mouseover",(function(){const n=this.id;for(let e=0;e<10;e++)n==e&&$(this).css({backgroundImage:"url(img/Silver/World/Mines/mine"+[e]+".png)",backgroundSize:"cover",backgroundPosition:"center",fontSize:"0"});$(this).on("mouseout",(function(){$(this).css({backgroundColor:"grey !important",backgroundImage:"linear-gradient(to bottom, #d7d9db, #b8bbbf)",fontSize:"30px"})}))}))}))}))}])},function(n,e,t){"use strict";t.r(e);$((function(){const n=function(){$(window).width()<864?($("header span").hide(),$("nav ul li ul:eq(0) span").html("<img src='img/billetGold.png'>"),$("nav ul li ul:eq(1) span").html("<img src='img/billetSilver.png'>"),$("nav ul li ul:eq(2) span").html("<img src='img/tips.png'>"),$("nav ul li ul:eq(3) span").html("<img src='img/Contact.png'>"),$("nav ul li ul").on("mouseover",(function(){$(this).children("li").css({display:"block",width:"100vw",backgroundColor:"goldenrod"}).offset({left:0})})),$("nav ul li ul").on("mouseout",(function(){$(this).children("li").css("display","none")}))):($("header span").show(),$("nav ul li ul:eq(0) span").html("Złoto"),$("nav ul li ul:eq(1) span").html("Srebro"),$("nav ul li ul:eq(2) span").html("Porady"),$("nav ul li ul:eq(3) span").html("Kontakt"))};$(window).on("resize",n),n(),$("nav a").on("click",(function(n){n.preventDefault();const e=this.href;$(".content").remove();const t=this.id;t?$(".package").load(e+" .content #"+t).hide().fadeIn(1e3):$(".package").load(e+" .content").hide().fadeIn(1e3)})),$(document).ajaxComplete((function(){const n=$("tbody tr");let e="";for(let t=1;t<=10;t++)e=n[t],$("tbody").append(e);$("#countryNumber").on("input",(function(){let t=$("select").val();"Wszystek"==t&&(t=`${n.length}`);const o=parseInt(t);$("tbody").empty();for(let t=0;t<=o-1;t++)e=n[t],$("tbody").append(e)})),$(".mine").on("mouseover",(function(){const n=this.id;for(let e=0;e<10;e++)n==e&&$(this).css({backgroundImage:"url(img/Silver/World/Mines/mine"+[e]+".png)",backgroundSize:"cover",backgroundPosition:"center",fontSize:"0"});$(this).on("mouseout",(function(){$(this).css({backgroundColor:"grey !important",backgroundImage:"linear-gradient(to bottom, #d7d9db, #b8bbbf)",fontSize:"30px"})}))}))}))}))}]);