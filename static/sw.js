importScripts('/_nuxt/workbox.5c678697.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/77e5e52fe00cca8d2476.js",
    "revision": "4965a13853855f324e40c5e8dd5e1034"
  },
  {
    "url": "/_nuxt/7a769dfecbd2b4466178.js",
    "revision": "67f170d698ba29fb74f448976b639884"
  },
  {
    "url": "/_nuxt/ac3feb9d769556259b9e.js",
    "revision": "04edd9d712cccf4446d7545a067d44fb"
  },
  {
    "url": "/_nuxt/ae71b9bbc26b680630b8.js",
    "revision": "1fc0e56c2587d6e82c2b6d3ebf019eeb"
  },
  {
    "url": "/_nuxt/ed621a66dd5eed948245.js",
    "revision": "d0c1c7f9d20b0c48438436e6efa30c28"
  },
  {
    "url": "/_nuxt/f04f876af870ddff0703.js",
    "revision": "9d60140b1fd050041e7f39ba35c1d5cc"
  }
], {
  "cacheId": "Asa",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





