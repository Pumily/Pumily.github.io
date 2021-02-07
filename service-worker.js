/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["E:/Myblog/blogs/public/about/index.html","891eacad9e1bbedf41ebd29d50f3759d"],["E:/Myblog/blogs/public/archives/2018/07/index.html","f7ea24abe7e8ee6daae1fc6549cf7b8e"],["E:/Myblog/blogs/public/archives/2018/08/index.html","bcedb9927ddcc0ee594e805830bad1a9"],["E:/Myblog/blogs/public/archives/2018/08/page/2/index.html","867895f725f5486e3acc12aad379de1a"],["E:/Myblog/blogs/public/archives/2018/08/page/3/index.html","7cdfc5919bb93e33738bffef2597d5e9"],["E:/Myblog/blogs/public/archives/2018/08/page/4/index.html","b4bf0a8a1f0455d3c5cb6fd27a8253e0"],["E:/Myblog/blogs/public/archives/2018/09/index.html","22eca059eaec9c72aa3b976b6d34cd38"],["E:/Myblog/blogs/public/archives/2018/10/index.html","ff76cfca927109d2f6f54b2138089902"],["E:/Myblog/blogs/public/archives/2018/index.html","eedce8e5cebf47a8024af03819a05900"],["E:/Myblog/blogs/public/archives/2018/page/2/index.html","1b953209cf281c864c609fd596c2dba0"],["E:/Myblog/blogs/public/archives/2018/page/3/index.html","c55aa1ae460588800b7393cfc7b19c6a"],["E:/Myblog/blogs/public/archives/2018/page/4/index.html","5e34f26ad762030d2c2ec73ddaa751a5"],["E:/Myblog/blogs/public/archives/2018/page/5/index.html","9ab0692e71d42d4ccec27a87e8c456e6"],["E:/Myblog/blogs/public/archives/2019/10/index.html","ef4874b49b835c994537399ccccbedbe"],["E:/Myblog/blogs/public/archives/2019/12/index.html","2557217b8b97a7f73df12c95f1ca1b6b"],["E:/Myblog/blogs/public/archives/2019/index.html","d438852e7b7bc0487d1183dcf45ba806"],["E:/Myblog/blogs/public/archives/2020/01/index.html","feedfbdd0e119e55d100635ee2249602"],["E:/Myblog/blogs/public/archives/2020/02/index.html","d05849f1b751d8f1556c5d8503ba9d87"],["E:/Myblog/blogs/public/archives/2020/03/index.html","429a23921cce64046da494d0e02fc838"],["E:/Myblog/blogs/public/archives/2020/04/index.html","b80f9fcdedc14933de92ef35e9a7a79d"],["E:/Myblog/blogs/public/archives/2020/index.html","2367ca15478915387b48145858d54e4d"],["E:/Myblog/blogs/public/archives/index.html","9dd05c4bb60ace406b90731ee480f565"],["E:/Myblog/blogs/public/archives/page/2/index.html","03ccc4fcb0321ab6f7a898eaa2409944"],["E:/Myblog/blogs/public/archives/page/3/index.html","42be376cc7f158f1b45ee96c057f4f0a"],["E:/Myblog/blogs/public/archives/page/4/index.html","8cd04b1477d96c42238be1042236d775"],["E:/Myblog/blogs/public/archives/page/5/index.html","a3d11a22e6f5a7afec63ca5befdf0ada"],["E:/Myblog/blogs/public/archives/page/6/index.html","dc144ca60eef80efc2e6d25c290ba3a9"],["E:/Myblog/blogs/public/bangumi/index.html","e9d2da1080345d6e959e6bcdc9d17e5b"],["E:/Myblog/blogs/public/categories/index.html","cf8c49a3097c17a25bd2c63f7506bfa2"],["E:/Myblog/blogs/public/categories/学习随记/index.html","84fa9fe5879b19e8408a8901fc320b1b"],["E:/Myblog/blogs/public/categories/碎碎念/index.html","08580102068924401246ccacc2c5cbab"],["E:/Myblog/blogs/public/categories/系统的前端基础学习/index.html","25b94e20badcc3ad1f8c2952ceccf1ce"],["E:/Myblog/blogs/public/categories/项目随记/index.html","17d33a08d9dbadde13f83fe676a403d4"],["E:/Myblog/blogs/public/categories/项目随记/page/2/index.html","e8e4caad161ff85b82bd8a0d8c5e6a12"],["E:/Myblog/blogs/public/categories/项目随记/page/3/index.html","03d4c4f9381b3b83df41c26de90e6705"],["E:/Myblog/blogs/public/categories/项目随记/page/4/index.html","06baf4097c5bdf94d468fc77386a9162"],["E:/Myblog/blogs/public/client/index.html","a8d740906656cc7363f1948668d43b02"],["E:/Myblog/blogs/public/comment/index.html","8d466b97b54d998bda0b0a18a54dc320"],["E:/Myblog/blogs/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["E:/Myblog/blogs/public/css/main.css","ae29f1cd6bae72a226ac1971d552a62d"],["E:/Myblog/blogs/public/donate/index.html","b26fd83b27d130ec1b5d3de06fadf485"],["E:/Myblog/blogs/public/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["E:/Myblog/blogs/public/images/cc-by-nc-nd.png","ba321235a74d1d9431a6d7de0b48bfc0"],["E:/Myblog/blogs/public/images/cc-by-nc-sa.png","23459d93549609de78e60dffd26f9671"],["E:/Myblog/blogs/public/images/cc-by-nc.png","2d97d976a58295898d051fdf5743723b"],["E:/Myblog/blogs/public/images/cc-by-nd.png","a9d369ec5f5a8799e4d5c0ed908ef3d4"],["E:/Myblog/blogs/public/images/cc-by-sa.png","dfb81614aaceec2ee215bf9e4c9ad20b"],["E:/Myblog/blogs/public/images/cc-by.png","d6bc4b5dacd9f1d99e2a3bad78da9d77"],["E:/Myblog/blogs/public/images/cc-zero.png","acfce60ef88b5b2f46f41e03e29d12bb"],["E:/Myblog/blogs/public/images/footer.png","0224244afde590f074aebc82a1056ef5"],["E:/Myblog/blogs/public/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["E:/Myblog/blogs/public/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["E:/Myblog/blogs/public/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["E:/Myblog/blogs/public/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["E:/Myblog/blogs/public/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["E:/Myblog/blogs/public/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["E:/Myblog/blogs/public/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["E:/Myblog/blogs/public/index.html","12ac503952e906a82395602ac5bec937"],["E:/Myblog/blogs/public/js/sagiri.min.js","8ec29c3e3d18c4f32557c0ef1debb3d2"],["E:/Myblog/blogs/public/lab/index.html","21ec5820040190858d16a22a02d07f2e"],["E:/Myblog/blogs/public/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["E:/Myblog/blogs/public/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["E:/Myblog/blogs/public/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["E:/Myblog/blogs/public/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["E:/Myblog/blogs/public/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["E:/Myblog/blogs/public/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["E:/Myblog/blogs/public/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["E:/Myblog/blogs/public/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["E:/Myblog/blogs/public/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["E:/Myblog/blogs/public/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["E:/Myblog/blogs/public/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["E:/Myblog/blogs/public/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["E:/Myblog/blogs/public/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["E:/Myblog/blogs/public/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["E:/Myblog/blogs/public/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["E:/Myblog/blogs/public/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["E:/Myblog/blogs/public/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["E:/Myblog/blogs/public/lib/social-share.js/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["E:/Myblog/blogs/public/lib/social-share.js/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["E:/Myblog/blogs/public/lib/social-share.js/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["E:/Myblog/blogs/public/lib/social-share.js/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["E:/Myblog/blogs/public/lib/social-share.js/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["E:/Myblog/blogs/public/lib/social-share.js/js/jquery.share.min.js","fd4fb997ddb6c57c5ec940a2fb71e7ca"],["E:/Myblog/blogs/public/lib/social-share.js/js/social-share.min.js","54dcc9d7bf7f775c7b844c02babe93d5"],["E:/Myblog/blogs/public/lib/ua-parser-js/dist/ua-parser.min.js","b063adeb91e912a8e98b1830808d5265"],["E:/Myblog/blogs/public/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["E:/Myblog/blogs/public/lib/velocity-animate/LICENSE.html","951e7c49b85967557e564a7a68d6e0c1"],["E:/Myblog/blogs/public/lib/velocity-animate/README.html","231e60fa4d314d51b8a4c4234ef2f05c"],["E:/Myblog/blogs/public/lib/velocity-animate/velocity.js","dbfac851da8b10eedf02f168d11c7535"],["E:/Myblog/blogs/public/lib/velocity-animate/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["E:/Myblog/blogs/public/lib/velocity-animate/velocity.ui.js","523cd5fe197e9d18b0ff1234df063e94"],["E:/Myblog/blogs/public/lib/velocity-animate/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["E:/Myblog/blogs/public/links/index.html","4cfa3c2ffc7b1ba1d2653dc28c43f74f"],["E:/Myblog/blogs/public/music/index.html","8e416a167c3bd9abd9dc8ed38a633002"],["E:/Myblog/blogs/public/page/2/index.html","83d16fcfdff428405c4444393375e1d6"],["E:/Myblog/blogs/public/page/3/index.html","7790c4a045297cebb0200b9748fe219a"],["E:/Myblog/blogs/public/page/4/index.html","ef1a920ef675e3bb34dbf38a73123a33"],["E:/Myblog/blogs/public/page/5/index.html","4cd468efcdc50766e474c6683acf6447"],["E:/Myblog/blogs/public/page/6/index.html","cdbf260d644b24b3c1475e7f53356f96"],["E:/Myblog/blogs/public/posts/1004.html","852ee8c0dd06b55794d0e30a40f746a0"],["E:/Myblog/blogs/public/posts/11578.html","231e986b97400722cd9473845e10b2f4"],["E:/Myblog/blogs/public/posts/16107.html","b04968f173ea8899f50e50c94ac24a4c"],["E:/Myblog/blogs/public/posts/16205.html","c8dec9f408533632ffdd4c94809b2215"],["E:/Myblog/blogs/public/posts/17334.html","ffc753b1063010746c7d0fd4a68521f9"],["E:/Myblog/blogs/public/posts/19581.html","c7e5bcfca7953bb4debd68a36adb99fb"],["E:/Myblog/blogs/public/posts/21572.html","45a6d273586c73153e6dc62f7d60cee9"],["E:/Myblog/blogs/public/posts/2655.html","fe062442eae043d5798fd26a18545cb1"],["E:/Myblog/blogs/public/posts/29426.html","aed73139af781c971bfeae72e870aaec"],["E:/Myblog/blogs/public/posts/3043.html","f9c1d90cb7e9d07b0ead14d6b1709b84"],["E:/Myblog/blogs/public/posts/30717.html","9fdc733c6130a406016bee661bbccb0a"],["E:/Myblog/blogs/public/posts/31966.html","ab64d1ace6568e424a39c85bafd3fee7"],["E:/Myblog/blogs/public/posts/33849.html","26047dbd051ed3d8f9eb7c9f5e5b1c83"],["E:/Myblog/blogs/public/posts/35163.html","16b151fbe6dad6fd9a68aeafb1350f23"],["E:/Myblog/blogs/public/posts/36272.html","0444ca0d7cfd20b4552722673456f2ac"],["E:/Myblog/blogs/public/posts/38155.html","e94d3370588b8ae13b7c7311cc1a7504"],["E:/Myblog/blogs/public/posts/39180.html","bb934dbc129475113e7c87c327bca29d"],["E:/Myblog/blogs/public/posts/42253.html","83f5a6628e6555dd7b25860441a24102"],["E:/Myblog/blogs/public/posts/42339.html","712ea6deafe6756ef0cf77e03633910d"],["E:/Myblog/blogs/public/posts/45050.html","878c717902953919b1ab004cb45b0de1"],["E:/Myblog/blogs/public/posts/48909.html","e98d06035718670eb442f16197bef568"],["E:/Myblog/blogs/public/posts/49633.html","3c4ac728fcb2625b61f470819d786936"],["E:/Myblog/blogs/public/posts/50594.html","e6e37832556bdf5fcc02cd83bf31338f"],["E:/Myblog/blogs/public/posts/51389.html","cb10d6eb12e5f54c9a424e01bca1971b"],["E:/Myblog/blogs/public/posts/57124.html","f6ccaf6e8a90476be322f8058e345bef"],["E:/Myblog/blogs/public/posts/8302.html","1566a5841546d26cce40cd15194a972a"],["E:/Myblog/blogs/public/posts/c1895563.html","383e32ebd67e099f4052b43664d8e1e2"],["E:/Myblog/blogs/public/posts/ece385aa.html","e9b446a45c41655f4dc6e9ff3fcbba12"],["E:/Myblog/blogs/public/rss/index.html","f78ca452a6b86d770ef6ce2a6853c3d6"],["E:/Myblog/blogs/public/tags/Angular/index.html","95ac915ab9eca783c763ea5141f2ecce"],["E:/Myblog/blogs/public/tags/Css/index.html","316824a20b9a63a6de3221fb6e0e5d0b"],["E:/Myblog/blogs/public/tags/Css/page/2/index.html","0d8aca7a9f4ab54a06b2294207a0281e"],["E:/Myblog/blogs/public/tags/Hibernate/index.html","b59d29fdd47f9d873f5990f9d1c7abdb"],["E:/Myblog/blogs/public/tags/JQuery/index.html","7a4312ca5fe983ced1feb5b47ebadf37"],["E:/Myblog/blogs/public/tags/Java/index.html","aa8a74f99ea7406a5c9f0e33f5e57c43"],["E:/Myblog/blogs/public/tags/JavaScript/index.html","9492d9662d1c0e6552461d88c3480130"],["E:/Myblog/blogs/public/tags/JavaScript/page/2/index.html","5c328febc671e245c66fedb70a6b0dff"],["E:/Myblog/blogs/public/tags/Markdown/index.html","28fc92de92cf1378409e1cd5cc58a6c2"],["E:/Myblog/blogs/public/tags/Mysql/index.html","bd57344126ad4e502ccca15b05bac2e8"],["E:/Myblog/blogs/public/tags/index.html","677997c4894462e4ae32f785610936cd"],["E:/Myblog/blogs/public/tags/前端基础/index.html","ffce12de6329ae205f5912511cc45b0a"],["E:/Myblog/blogs/public/tags/加密文章A/index.html","8561120028dbe11285126bf0e8f21c3b"],["E:/Myblog/blogs/public/tags/图床/index.html","457db4c58313ddad0f382518c4d4a400"],["E:/Myblog/blogs/public/tags/微信小程序/index.html","5cfb2c982a4d098e3d2dc743d67a8219"],["E:/Myblog/blogs/public/tags/插件/index.html","d069a9c3c3cfd007e2249437551cb1ca"],["E:/Myblog/blogs/public/tags/数据库/index.html","6ff8e610c691893e88dc04869fa73e5f"],["E:/Myblog/blogs/public/tags/编程规范/index.html","8b277de8c16b3f310f7db0bdeb5929eb"],["E:/Myblog/blogs/public/tags/随感/index.html","1295b6e977c9590cf850027574c029ca"],["E:/Myblog/blogs/public/theme-sakura/index.html","b355c129e80f158dd88f272533bd23c7"],["E:/Myblog/blogs/public/video/index.html","172192d59803d4232961f5cf30d40e05"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







