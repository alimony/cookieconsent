/*
 CookieConsent v1.0
 https://www.github.com/orestbida/cookieconsent
 Author Orest Bida
 Released under the MIT License
*/
(function(q){function J(){function r(a){return(a=document.cookie.match("(^|;)\\s*"+a+"\\s*=\\s*([^;]+)"))?a.pop():""}function A(){t(document.getElementById("cc__modal__accept__btn"),"click",function(){k.hide();var a=new Date;a.setTime(a.getTime()+2592E6);document.cookie="cc_cookie=accepted; expires="+a.toUTCString()+"; path=/";document.cookie="tagname = test;secure"})}function K(a,c){var b=document.createElement("link");b.rel="stylesheet";b.type="text/css";b.href=a;document.getElementsByTagName("head")[0].appendChild(b);
b.onload?b.onload=c():c()}function B(){document.querySelectorAll("#cc__policy__content > .ccp_section input.sc_toggle").forEach(function(a){a.checked&&console.log(a.value)})}function L(){var a=l[m].c.l,c=a.length,b=document.getElementById("cc__policy__content");document.getElementById("cc__policy__title").innerText=l[m].c.o;for(var d=0;d<c;++d){var f=document.createElement("div"),e=document.createElement("h2"),g=document.createElement("p");h(f,"ccp_section");h(e,"section_title");h(g,"section_desc");
e.innerText=a[d].title;g.innerText=a[d].description;f.appendChild(e);f.appendChild(g);"undefined"!==typeof a[d].a&&(e=document.createElement("input"),e.setAttribute("type","checkbox"),e.setAttribute("value",a[d].a.value),h(e,"sc_toggle"),a[d].a.enabled&&(e.checked=!0),a[d].a.f&&(e.disabled="disabled",e.readOnly=!0),f.appendChild(e));b.appendChild(f)}a=document.createElement("button");a.setAttribute("type","button");a.id="cc__policy__save__btn";a.innerText=l[m].c.m;t(a,"click",function(){B();C();k.hide();
B()});b.appendChild(a)}function M(){var a=document.createElement("div"),c=document.createElement("div"),b=document.createElement("div"),d=document.createElement("h1"),f=document.createElement("div"),e=document.createElement("button"),g=document.createElement("div");e.setAttribute("type","button");a.id="cc__policy__container";c.id="cc__valign";b.id="cc__policy";d.id="cc__policy__title";f.id="cc__policy__header";g.id="cc__policy__content";e.id="cc__plicy__close__btn";e.innerHTML="x";f.appendChild(d);
f.appendChild(e);b.appendChild(f);b.appendChild(g);c.appendChild(b);a.appendChild(c);t(document.getElementById("cc__modal__more__btn"),"click",function(){h(a,"cc__show")});t(e,"click",function(){C()});a.style.visibility="hidden";document.getElementById("cc__modal__container").appendChild(a);D=a}function C(){E(document.getElementById("cc__policy__container"),"cc__show")}function F(){var a=navigator.language||navigator.browserLanguage;2<a.length&&(a=a[0]+a[1]);return a.toLowerCase()}function v(a){return l.hasOwnProperty(a)?
a:"en"}function E(a,c){a.classList?a.classList.remove(c):a.className=a.className.replace(new RegExp("(\\s|^)"+c+"(\\s|$)")," ")}function h(a,c){a.classList?a.classList.add(c):a.className+=" "+c}function t(a,c,b,d){d=d||!1;if(a.addEventListener)d?a.addEventListener(c,b,{capture:!0,passive:!0}):a.addEventListener(c,b,!1);else{if("click"==c||"focus"==c)c="onclick";a.attachEvent(c,b)}}function N(a){try{void 0!=a&&null!=a?(void 0!=a.cc_auto_language&&"boolean"==typeof a.cc_auto_language&&(w=a.cc_auto_language),
void 0!=a.cc_theme_css&&"string"==typeof a.cc_theme_css&&(G=a.cc_theme_css),void 0!=a.cc_delay&&"number"==typeof a.cc_delay&&(0<=a.cc_delay?H=a.cc_delay:!1),void 0!=a.cc_autorun&&"boolean"==typeof a.cc_autorun&&(I=a.cc_autorun),void 0!=a.cc_policy_url&&"string"==typeof a.cc_policy_url&&(n=a.cc_policy_url),w?m=v(F()):void 0!=a.cc_current_lang&&"string"==typeof a.cc_current_lang&&(m=a.cc_current_lang)):w&&(m=v(F()))}catch(c){}}var k={},x=!1,u=!0,y=null,D=null,m="en",I=!1,H=20,n=null,w=!1,G="/public/assets/css/cookieconsent.css",
l={en:{b:{j:"I use cookies",i:"Learn more",g:"I understand",h:"My website uses essential cookies necessary for its functioning. By continuing browsing, you consent to my use of cookies and other technologies."},c:{o:"Cookie Policy",l:[{title:"What are cookies",description:"Cookies are very small text files that are stored on your computer when you visit a website. I use cookies to assure the basic functionalities of the website and to enhance your online experience."},{title:"Strictly necessary cookies",
description:"These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly.",a:{value:"necessary_cookies",enabled:!0,f:!0}},{title:"Functionality cookies",description:"These cookies are used to provide you with a more personalized experience on my website and to remember choices you make when you browse the website. For example, whether or not you enabled dark-mode on this website.",a:{value:"functionality_cookies",enabled:!0,f:!1}},
{title:"More information",description:"For any queries in relation to my policy on cookies and your choices, please contact me."}],m:"Save preferences"}}};k.run=function(a){if(!document.getElementById("cc__modal")){var c=r("cc_cookie");if(void 0==c||null==c||""==c)N(a),K(G,function(){var b=document.createElement("div"),d=document.createElement("div"),f=document.createElement("h1"),e=document.createElement("p"),g=document.createElement("div"),z=document.createElement("button");if(null!=n&&"string"==
typeof n){var p=document.createElement("a");p.href=n}else p=document.createElement("button"),p.setAttribute("type","button");b.id="cc__modal__container";d.id="cc__modal";f.id="cc__modal__title";e.id="cc__modal__text";g.id="cc__modal__btns";z.id="cc__modal__accept__btn";p.id="cc__modal__more__btn";z.setAttribute("type","button");h(p,"cc__link");d.style.visibility="hidden";d.insertAdjacentElement("beforeend",f);d.insertAdjacentElement("beforeend",e);g.insertAdjacentElement("beforeend",z);g.insertAdjacentElement("beforeend",
p);d.insertAdjacentElement("beforeend",g);b.appendChild(d);document.body.appendChild(b);y=document.getElementById("cc__modal");b=v(m);document.getElementById("cc__modal__title").innerText=l[b].b.j;document.getElementById("cc__modal__text").innerHTML=l[b].b.h;document.getElementById("cc__modal__accept__btn").innerText=l[b].b.g;document.getElementById("cc__modal__more__btn").innerText=l[b].b.i;x=!0;"string"!=typeof n&&(M(),L());A();I&&k.show(H)})}};k.show=function(a){x&&setTimeout(function(){u&&(h(y,
"cc__anim"),"string"!=typeof n&&h(D,"cc__anim"),h(y,"cc__show"),u=!1)},"number"==typeof a&&20<a?a:20)};k.hide=function(){x&&!u&&(E(document.getElementById("cc__modal"),"cc__show"),u=!0)};k.clearCookies=function(){var a=r("cc_cookie");void 0!=a&&null!=a&&""!=a&&(document.cookie="cc_cookie=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;")};return k}typeof("undefined"===q.initCookieConsent)&&(q.initCookieConsent=function(){var r=J();try{delete q.initCookieConsent}catch(A){q.initCookieConsent=void 0}return r})})(window);
