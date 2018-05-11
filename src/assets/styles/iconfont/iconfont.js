(function(window){var svgSprite='<svg><symbol id="icon-jiantou" viewBox="0 0 1024 1024"><path d="M151.476947 199.553918l718.53082 0c39.763632 0 71.922053 31.909757 71.922053 71.675436 0 18.485003-7.095605 35.205826-18.486026 47.872311L568.114019 793.227056c-23.810289 31.400151-68.641333 37.993313-100.29731 14.183024-5.570879-4.052293-10.384511-8.873088-14.183024-14.190187L94.235245 314.041416c-23.547299-31.407314-17.217127-76.479859 14.436804-100.041484 12.922311-9.881045 27.864628-14.43885 42.804898-14.43885l0 0L151.476947 199.553918zM151.476947 199.553918"  ></path></symbol><symbol id="icon-jiantouarrow486" viewBox="0 0 1024 1024"><path d="M171.15136 341.00224l684.02176 0-342.016 341.99552L171.15136 341.00224z"  ></path></symbol><symbol id="icon-tupian1" viewBox="0 0 1024 1024"><path d="M910.2 113.8H113.8C51.2 113.8 0 165 0 227.6v568.9C0 859 51.2 910.2 113.8 910.2h796.4c62.6 0 113.8-51.2 113.8-113.8V227.6c0-62.6-51.2-113.8-113.8-113.8z m-796.4 56.9h796.4c31.4 0 56.9 25.5 56.9 56.9v471.8L768 500.2 583.1 685.1 257 359 56.9 559.2V227.6c0-31.4 25.5-56.9 56.9-56.9zM56.9 796.4V639.6L257 439.4l413.9 413.9H113.8c-31.4 0-56.9-25.5-56.9-56.9z m853.3 56.9H751.3l-128-128L768 580.7l199.1 199.1v16.7c0 31.3-25.5 56.8-56.9 56.8z"  ></path><path d="M682.7 455.1c62.8 0 113.8-50.9 113.8-113.8s-50.9-113.8-113.8-113.8-113.8 50.9-113.8 113.8 50.9 113.8 113.8 113.8z m0-170.7c31.4 0 56.9 25.5 56.9 56.9s-25.5 56.9-56.9 56.9-56.9-25.5-56.9-56.9 25.5-56.9 56.9-56.9z"  ></path></symbol><symbol id="icon-fanhui" viewBox="0 0 1024 1024"><path d="M710.153924 8.980397L266.007127 460.692524a81.118646 81.118646 0 0 0 0.861532 114.476097l446.192936 441.050666a26.922883 26.922883 0 0 0 37.853573-38.284339L304.722232 536.884282a27.27288 27.27288 0 0 1-0.323074-38.445877L748.545955 46.726278A26.922883 26.922883 0 1 0 710.180847 9.00732z"  ></path></symbol><symbol id="icon-sousuo" viewBox="0 0 1024 1024"><path d="M474.453333 884.053333c-225.28 0-409.6-184.32-409.6-409.6s184.32-409.6 409.6-409.6 409.6 184.32 409.6 409.6-184.32 409.6-409.6 409.6z m0-68.266666c187.733333 0 341.333333-153.6 341.333334-341.333334s-153.6-341.333333-341.333334-341.333333-341.333333 153.6-341.333333 341.333333 153.6 341.333333 341.333333 341.333334z m252.586667 54.613333c-13.653333-13.653333-10.24-37.546667 3.413333-47.786667s37.546667-10.24 47.786667 3.413334l64.853333 78.506666c13.653333 13.653333 10.24 37.546667-3.413333 47.786667s-37.546667 10.24-47.786667-3.413333l-64.853333-78.506667z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)