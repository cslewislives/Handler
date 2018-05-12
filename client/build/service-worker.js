"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","3951fecf625f3278cc1cc631e76940b2"],["/static/css/main.3d3427e5.css","d63636b29331388d2357966d8883ab59"],["/static/js/main.6f27b6a6.js","26da6a292cbe0b693b398f851a52e712"],["/static/media/Roboto-Bold.39b2c303.woff2","39b2c3031be6b4ea96e2e3e95d307814"],["/static/media/Roboto-Bold.dc81817d.woff","dc81817def276b4f21395f7ea5e88dcd"],["/static/media/Roboto-Bold.e31fcf18.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["/static/media/Roboto-Bold.ecdd509c.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["/static/media/Roboto-Light.3b813c2a.woff","3b813c2ae0d04909a33a18d792912ee7"],["/static/media/Roboto-Light.46e48ce0.ttf","46e48ce0628835f68a7369d0254e4283"],["/static/media/Roboto-Light.69f8a061.woff2","69f8a0617ac472f78e45841323a3df9e"],["/static/media/Roboto-Light.a990f611.eot","a990f611f2305dc12965f186c2ef2690"],["/static/media/Roboto-Medium.4d9f3f9e.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["/static/media/Roboto-Medium.574fd0b5.woff2","574fd0b50367f886d359e8264938fc37"],["/static/media/Roboto-Medium.894a2ede.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["/static/media/Roboto-Medium.fc78759e.woff","fc78759e93a6cac50458610e3d9d63a0"],["/static/media/Roboto-Regular.2751ee43.woff2","2751ee43015f9884c3642f103b7f70c9"],["/static/media/Roboto-Regular.30799efa.eot","30799efa5bf74129468ad4e257551dc3"],["/static/media/Roboto-Regular.ba3dcd89.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["/static/media/Roboto-Regular.df7b648c.ttf","df7b648ce5356ea1ebce435b3459fd60"],["/static/media/Roboto-Thin.7500519d.woff","7500519de3d82e33d1587f8042e2afcb"],["/static/media/Roboto-Thin.94998475.ttf","94998475f6aea65f558494802416c1cf"],["/static/media/Roboto-Thin.954bbdeb.woff2","954bbdeb86483e4ffea00c4591530ece"],["/static/media/Roboto-Thin.dfe56a87.eot","dfe56a876d0282555d1e2458e278060f"],["/static/media/arrow_left.270f72df.svg","270f72df47e036d9cfa11f91f0a94a60"],["/static/media/arrow_right.d9ccc77c.svg","d9ccc77c8240ad0dc2724cf333c0479e"],["/static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/static/media/fontawesome-webfont.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});