importScripts("https://www.gstatic.com/firebasejs/3.6.8/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/3.6.8/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyBgtimVAYl4ncd-OZMqab2cZEOw9RXwXUk",
  authDomain: "anfy-top.firebaseapp.com",
  projectId: "anfy-top",
  storageBucket: "anfy-top.appspot.com",
  messagingSenderId: "897485062660",
  appId: "1:897485062660:web:98ed9ef2578df96ba7eb51",
  measurementId: "G-RL7GMQXV7M",
});

const messaging = firebase.messaging();

//self.registration.showNotification("sdds", "sdsadads");

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };
  navigator.serviceWorker.ready.then(function (registration) {
    registration.showNotification("Notification with ServiceWorker");
  });
});
