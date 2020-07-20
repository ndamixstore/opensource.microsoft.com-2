var AROSSMN=AROSSMN||{};!function(n,t){n(function(){t.Global.init(),t.Viewport.init(),t.Header.init(),t.Tabs.init(),t.Accordion.init(),t.Draw.init()}),t.Global={init:function(){n(function(){document.body.classList.add("page-ready")}),"ontouchstart"in window||document.documentElement.classList.add("no-touch"),"ontouchstart"in window&&document.documentElement.classList.add("is-touch"),(document.documentMode||/Edge/.test(navigator.userAgent))&&(-1===navigator.appVersion.indexOf("Trident")?document.documentElement.classList.add("isEDGE"):n("html").addClass("isIE isIE11")),!/constructor/i.test(window.HTMLElement)&&"[object SafariRemoteNotification]"!==(!window.safari||"undefined"!=typeof safari&&safari.pushNotification).toString()||document.body.classList.add("browser-safari"),"localhost"==window.location.hostname|"127.0.0.1"==window.location.hostname&&document.body.classList.add("localhost"),n(".js-subscribe").click(function(t){t.preventDefault(),document.body.classList.add("modal-is-active"),document.getElementById("subscribe-modal").classList.add("is-active"),n("#mc_embed_signup").appendTo("#subscribe-modal .modal")}),n(".js-subscribe-close").click(function(t){t.preventDefault(),document.body.classList.remove("modal-is-active"),document.getElementById("subscribe-modal").classList.remove("is-active"),n("#mc_embed_signup").appendTo("#subscribe-wrap")});var t=n("body");n(".search-trigger").click(function(){t.hasClass("search-is-open")?t.removeClass("search-is-open"):t.addClass("search-is-open")})}},t.Header={init:function(){var e=document.getElementById("site-header"),i=n(window),a=0;document.addEventListener("scroll",function(){120<=i.scrollTop()?e.classList.add("is-sticky"):e.classList.remove("is-sticky");var t=window.pageYOffset||document.documentElement.scrollTop;a<t?e.classList.contains("scrolling-up")&&e.classList.remove("scrolling-up"):e.classList.contains("scrolling-up")||e.classList.add("scrolling-up"),a=t<=0?0:t},!1),n(".js-menu-trigger").click(function(t){t.preventDefault(),n("body").hasClass("menu-is-open")?n("body").removeClass("menu-is-open"):n("body").addClass("menu-is-open")})}},t.Viewport={init:function(){var n=document.querySelectorAll("*[data-animate-in], *[data-detect-viewport]"),o=window.pageYOffset;function t(){for(var t=0;t<n.length;t++)e=n[t],0,i=e.getBoundingClientRect(),a=i.top,s=i.top+e.offsetHeight,a<o+window.innerHeight&&0<s&&(n[t].classList.contains("in-view")||n[t].classList.add("in-view"));var e,i,a,s}window.addEventListener("scroll",t),window.addEventListener("resize",t);for(var e=0;e<n.length;e++){var i=0,a=n[e];i=n[e].getAttribute("data-animate-in-delay")?n[e].getAttribute("data-animate-in-delay")/1e3+"s":0,a.style.transitionDelay=i}setTimeout(function(){t()},500)}},t.ScrollTo={init:function(){n("*[data-scroll-to]").length&&this.bind()},bind:function(){n("*[data-scroll-to]").on("click touchstart:not(touchmove)",function(t){t.preventDefault();var e=n(this).attr("data-scroll-to"),i=n("#"+e),a=1400,s=0;n(this).attr("data-scroll-speed")&&(a=n(this).attr("data-scroll-speed")),n(this).attr("data-scroll-offset")&&(s=n(this).attr("data-scroll-offset")),n("html, body").animate({scrollTop:i.offset().top-s},a),document.body.classList.remove("menu-is-open")})}},t.Accordion={init:function(){n(".accordion").length&&this.bind()},bind:function(){var e=document.getElementsByClassName("accordion__hd");for(i=0;i<e.length;i++)e[i].addEventListener("click",function(){this.parentNode.classList.toggle("is-open");var t=this.nextElementSibling;t.style.maxHeight?t.style.maxHeight=null:t.style.maxHeight=t.scrollHeight+"px"});var a=n(".accordions__expand-all");a.click(function(){if(a.hasClass("is-open"))for(a.removeClass("is-open"),i=0;i<e.length;i++){e[i].parentNode.classList.remove("is-open"),(t=e[i].nextElementSibling).style.maxHeight=null}else for(a.addClass("is-open"),i=0;i<e.length;i++){var t;e[i].parentNode.classList.add("is-open"),(t=e[i].nextElementSibling).style.maxHeight=t.scrollHeight+"px"}})}},t.Draw={init:function(){n("#draw-svg").length&&this.bind()},bind:function(){n("#draw-svg"),n("#draw-svg path");var t=n(" #draw-svg rect"),e=n("#draw-svg circle"),i=n(".rotate"),a=n(".sqaure rect");function s(t,e){return Math.floor(Math.random()*(e-t+1)+t)}gsap.fromTo(e,0,{drawSVG:0},{duration:0,drawSVG:!1}),gsap.fromTo(t,0,{drawSVG:0},{duration:0,drawSVG:!1}),gsap.to(i,10,{rotation:"360",ease:Linear.easeNone,repeat:-1,transformOrigin:"50% 50%"}),a.each(function(){var t=n(this),e=s(.5,4),i=s(0,.5);gsap.to(t,e,{scaleX:i,ease:Linear.easeNone,repeat:-1,transformOrigin:"50% 50%",yoyo:!0})}),n(document).ready(function(){setTimeout(function(){gsap.fromTo(e,{drawSVG:"20% 20%"},{duration:5,drawSVG:"0% 100%"}),gsap.fromTo(t,{drawSVG:"20% 20%"},{duration:3,drawSVG:"0% 100%"})},1500)})}},t.Tabs={init:function(){n(".tabs").length&&this.bind()},bind:function(){var t=n(".tabs__tab");n(".tabs__content").hide(),n(".tabs__content.is-active").show(),t.click(function(){var t=n(this).parents(".tabs"),e=t.find(".tabs__tab"),i=t.find(".tabs__content");e.removeClass("is-active"),n(this).addClass("is-active"),n(".tabs__content").hide().removeClass("is-active");var a=n(this).attr("data-tab");n("#"+a);i.each(function(){n(this).attr("data-tab")==a&&(n(this).addClass("is-active"),n(this).fadeIn(300).addClass("is-active"))}),history.replaceState(null,"","#"+a),n(window).trigger("resize")}),n(document).ready(function(){var i=window.location.hash.replace("#","");n(".tabs__tab").each(function(){var t=n(this),e=t.attr("data-tab");e===i&&""!=e&&t.click()})})}}}(jQuery,AROSSMN);