'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "a833564910944fb40d2b2bad26939661",
"index.html": "67b1f400f985e086fd56bafc30c8a7a9",
"/": "67b1f400f985e086fd56bafc30c8a7a9",
"main.dart.js": "14134c83c0b3474255ff25638b51340f",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d5f4d5575b7fb7ed3539d06191906e6c",
"assets/AssetManifest.json": "175823be1669a6ddf2ae9faadaefc416",
"assets/NOTICES": "4f18fb96b56a26d6406a127e2e9d8819",
"assets/google-fonts/Lobster/Lobster-Regular.ttf": "c3191f3b933ae0bd46335e178744326e",
"assets/FontManifest.json": "20066d7d18e0478973e6da531d332eba",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/playing_cards/assets/card_imagery/back_001.png": "28c80e04ab991b80cc2aa5d18aa879aa",
"assets/packages/playing_cards/assets/card_imagery/color_joker.png": "11eb99352b7b787e53cf10c122565826",
"assets/packages/playing_cards/assets/card_imagery/qh.png": "2d142e0a95f0adbd44b5c7c0172ef577",
"assets/packages/playing_cards/assets/card_imagery/spade.png": "981c0b10f109bd3e9cb408b61f7a33a7",
"assets/packages/playing_cards/assets/card_imagery/jc.png": "104dca27ba3f0734a5fde520f94d0eb3",
"assets/packages/playing_cards/assets/card_imagery/ks.png": "660271be7e65fe06f3b2034a83af6f24",
"assets/packages/playing_cards/assets/card_imagery/kd.png": "806f30f77fcf9f11249ac3bb0174965b",
"assets/packages/playing_cards/assets/card_imagery/js.png": "137bbce282a776498eb8b33618a77db9",
"assets/packages/playing_cards/assets/card_imagery/jd.png": "ae263f367ef9e4c4b8ad40563623cea7",
"assets/packages/playing_cards/assets/card_imagery/kc.png": "cf60d0e257ec768bfee576f261e1a644",
"assets/packages/playing_cards/assets/card_imagery/heart.png": "6f7fcfdfc88ec70f6bc4dcd339568b03",
"assets/packages/playing_cards/assets/card_imagery/jh.png": "f7730fbbcf96889e45d2f9958ff825aa",
"assets/packages/playing_cards/assets/card_imagery/qc.png": "85d80978a888f5a7a61eb016dddee679",
"assets/packages/playing_cards/assets/card_imagery/kh.png": "ce45da39c0f70540e158b16a0a8ead86",
"assets/packages/playing_cards/assets/card_imagery/qs.png": "c01ffe97d768bb26c1293749647dfcfd",
"assets/packages/playing_cards/assets/card_imagery/qd.png": "01751a267acc9e7a5fd4b1373e9d3179",
"assets/packages/playing_cards/assets/card_imagery/diamond.png": "f2eb19afc052c30eb571e4c6c6046d68",
"assets/packages/playing_cards/assets/card_imagery/bw_joker.png": "1d1c6ad3fa8a3bde172cada9104d124d",
"assets/packages/playing_cards/assets/card_imagery/club.png": "d1fd0ca4bd3ccc4c5e852f3ce15dccd8",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/PNG-cards-1.3/7_of_diamonds.png": "df3e8e93d277f2b73d2c5ddf348c065c",
"assets/assets/PNG-cards-1.3/queen_of_spades.png": "6d100fc31db0f6e10df79f2891aaf8f2",
"assets/assets/PNG-cards-1.3/jack_of_spades.png": "92aff04497b99fe80d5d036a41da6529",
"assets/assets/PNG-cards-1.3/8_of_diamonds.png": "8afee604213ca296067245ce18458af2",
"assets/assets/PNG-cards-1.3/6_of_clubs.png": "9c2fdf6a8916a2b3daea26a7974eed28",
"assets/assets/PNG-cards-1.3/9_of_hearts.png": "cdb8fda5b30f3973b1ec7f200c24a18f",
"assets/assets/PNG-cards-1.3/ace_of_hearts.png": "41453bfa387b05e68828f2b0159c19d9",
"assets/assets/PNG-cards-1.3/8_of_spades.png": "747667555c7c5d6799ca3545463372b0",
"assets/assets/PNG-cards-1.3/queen_of_diamonds2.png": "f91b8d276604290828523a097fd4af26",
"assets/assets/PNG-cards-1.3/jack_of_hearts2.png": "9be659a7f009932fe8f49a213c22e439",
"assets/assets/PNG-cards-1.3/king_of_clubs.png": "2ad9bff3c6f99adf135499b905017921",
"assets/assets/PNG-cards-1.3/7_of_clubs.png": "112be1dfa65edf2cabf9122b2c49eb22",
"assets/assets/PNG-cards-1.3/jack_of_spades2.png": "d77ce402c3977e303abeed8ec5bb35a5",
"assets/assets/PNG-cards-1.3/jack_of_clubs2.png": "d96ecf4f3c246b8c781f82d1bb2bd1dc",
"assets/assets/PNG-cards-1.3/queen_of_clubs2.png": "fd943099b2abeb6cf01bebb4dc66cbbe",
"assets/assets/PNG-cards-1.3/10_of_diamonds.png": "4324d71291ce16ef4161df8cf852298e",
"assets/assets/PNG-cards-1.3/10_of_spades.png": "2401fe3648865f6bc3c01a538c512d7c",
"assets/assets/PNG-cards-1.3/black_joker.png": "21cc92db51d5fb7888b97517c51c2d2a",
"assets/assets/PNG-cards-1.3/king_of_hearts2.png": "e8d050e1412d4866d34f9a41b0c48238",
"assets/assets/PNG-cards-1.3/ace_of_spades2.png": "3c00788af85d7ac4fcfeb155464ba71c",
"assets/assets/PNG-cards-1.3/new-card-back.png": "1fdbd88b229a2d0792417e30773c1ec4",
"assets/assets/PNG-cards-1.3/jack_of_clubs.png": "1861c1e4a50028cb1dfce55e531ff292",
"assets/assets/PNG-cards-1.3/6_of_spades.png": "5d221b2a958bb6b66b4e57de437c0906",
"assets/assets/PNG-cards-1.3/king_of_spades2.png": "aebc913c5eb0ecd7859218636929c8ae",
"assets/assets/PNG-cards-1.3/4_of_hearts.png": "5ad913da63724447b7c94d1fb2d293a6",
"assets/assets/PNG-cards-1.3/2_of_spades.png": "2354275da56e304199f694388a8aaae6",
"assets/assets/PNG-cards-1.3/queen_of_clubs.png": "9e84dd75995fe4a3b8871bab4cbb3898",
"assets/assets/PNG-cards-1.3/3_of_hearts.png": "1c16fe1052c3a4d1715ee1288209ebe9",
"assets/assets/PNG-cards-1.3/5_of_spades.png": "aa8a072015826f2e582a59e9606e0cd3",
"assets/assets/PNG-cards-1.3/6_of_diamonds.png": "ee5053d458469b151ef1f4503b5ab12f",
"assets/assets/PNG-cards-1.3/queen_of_diamonds.png": "d5647c19f6390075fc76d403aa266e0d",
"assets/assets/PNG-cards-1.3/7_of_hearts.png": "a9afa10fcea89a4227bb4b81f49a35e8",
"assets/assets/PNG-cards-1.3/king_of_hearts.png": "37b5b9d756e453abf7c673709c24894c",
"assets/assets/PNG-cards-1.3/ace_of_clubs.png": "07d1c180bead76a0b8cf8e488dfc2755",
"assets/assets/PNG-cards-1.3/9_of_diamonds.png": "86608eb9bf92b21b9e33a1ffa4c46ccc",
"assets/assets/PNG-cards-1.3/6_of_hearts.png": "9cd2258c8c8c175ead46f94800741891",
"assets/assets/PNG-cards-1.3/9_of_clubs.png": "784ea7703fcff1e10745e014d98a24aa",
"assets/assets/PNG-cards-1.3/king_of_diamonds.png": "1a5882a6ed0fb4a79a1f5c4877e432f6",
"assets/assets/PNG-cards-1.3/4_of_spades.png": "df185c634b2fee0418bd613524938832",
"assets/assets/PNG-cards-1.3/2_of_hearts.png": "f97ad85b1e89af6a88c70205cdea06f6",
"assets/assets/PNG-cards-1.3/3_of_diamonds.png": "b529e1c14fef2ffc07c3c4eac94c31f4",
"assets/assets/PNG-cards-1.3/10_of_hearts.png": "2e6327a66fbf8d05d379d87d56251a1e",
"assets/assets/PNG-cards-1.3/king_of_clubs2.png": "f0dc748d3d36f265ab670c8ce0332e3d",
"assets/assets/PNG-cards-1.3/king_of_spades.png": "9b18a729ba5bda5ca4ef62fc6fdb4f62",
"assets/assets/PNG-cards-1.3/jack_of_diamonds2.png": "c936f66eb6ca786d62a2c49876367017",
"assets/assets/PNG-cards-1.3/8_of_clubs.png": "6ed0b85e676230d360186c3469b08cdf",
"assets/assets/PNG-cards-1.3/4_of_diamonds.png": "58bd0a6383829cbce3747c245c0b204c",
"assets/assets/PNG-cards-1.3/jack_of_diamonds.png": "ac2092c166d2e7cc53f04db33296c851",
"assets/assets/PNG-cards-1.3/3_of_spades.png": "ad02dc95b434842c3465a7a4dbaca615",
"assets/assets/PNG-cards-1.3/5_of_hearts.png": "8f6a2068fd6f32c372ea8dab0cde6f40",
"assets/assets/PNG-cards-1.3/7_of_spades.png": "c0f5e5f9013f1d24eccd395ab9312766",
"assets/assets/PNG-cards-1.3/ace_of_spades.png": "ce4f163fc9fddc4e9f173d74b2970cc2",
"assets/assets/PNG-cards-1.3/5_of_diamonds.png": "e27b4b0aadc6a28953f53cfd573e9e2d",
"assets/assets/PNG-cards-1.3/9_of_spades.png": "e5b29fdec7e761281073496181d31ab9",
"assets/assets/PNG-cards-1.3/queen_of_hearts.png": "cf8946464fc57b3d20bf806522d0e799",
"assets/assets/PNG-cards-1.3/ace_of_diamonds.png": "60b16fdaed475d30edab3bc92f4bd3c9",
"assets/assets/PNG-cards-1.3/king_of_diamonds2.png": "9588f72f2c9d6898c9af3b20bcde7c2f",
"assets/assets/PNG-cards-1.3/5_of_clubs.png": "3781bf44a82cad8ef837e6ba281427c9",
"assets/assets/PNG-cards-1.3/2_of_clubs.png": "c83a7af4125e22d9733f6514295f3d4c",
"assets/assets/PNG-cards-1.3/jack_of_hearts.png": "260cdba6401178e69eee797ee4e31247",
"assets/assets/PNG-cards-1.3/10_of_clubs.png": "c29b28f3eceb7284d141163e3bd37736",
"assets/assets/PNG-cards-1.3/cardback.png": "ae539f5d68192a48da95faf3e6cf4a42",
"assets/assets/PNG-cards-1.3/queen_of_spades2.png": "445df3cf193554d44a50f43d4597c324",
"assets/assets/PNG-cards-1.3/queen_of_hearts2.png": "8065dc2a89d1be1e9908343fb99d82cc",
"assets/assets/PNG-cards-1.3/2_of_diamonds.png": "0b5b5249b22ada06106be8b73938be9e",
"assets/assets/PNG-cards-1.3/8_of_hearts.png": "e6c01b136dca0b2c3c03a115d4ab21e1",
"assets/assets/PNG-cards-1.3/red_joker.png": "032874afea49aa79307937f4270c5811",
"assets/assets/PNG-cards-1.3/3_of_clubs.png": "23a7a6ac76db02bbde27988e49ac5fca",
"assets/assets/PNG-cards-1.3/4_of_clubs.png": "02deab4916f717f0b9478fad476ec40f",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
