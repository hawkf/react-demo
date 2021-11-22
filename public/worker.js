var CACHE_NAME = "pwa-task-manager";
var urlsToCache = ["/", "/completed"];

// Install a service worker
// eslint-disable-next-line no-restricted-globals
self.addEventListener("install", (event) => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

// Cache and return requests
// eslint-disable-next-line no-restricted-globals
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      // Cache hit - return response
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});

// Update a service worker
// eslint-disable-next-line no-restricted-globals
// self.addEventListener("activate", (event) => {
//   var cacheWhitelist = ["pwa-task-manager"];
//   event.waitUntil(
//     caches.keys().then((cacheNames) => {
//       return Promise.all(
//         cacheNames.map((cacheName) => {
//           if (cacheWhitelist.indexOf(cacheName) === -1) {
//             return caches.delete(cacheName);
//           }
//         })
//       );
//     })
//   );
// });

self.addEventListener("activate", async () => {
  // This will be called only once when the service worker is activated.
  try {
    const options = {};
    const subscription = await self.registration.pushManager.subscribe(options);
    console.log(JSON.stringify(subscription));
  } catch (err) {
    console.log("Error", err);
  }
});

self.addEventListener("push", function (event) {
  console.log("push in service worker");
  var message = JSON.parse(event.data.text()); //
  event.waitUntil(
    self.registration.showNotification(message.title, {
      body: message.body,
    })
  );
});
