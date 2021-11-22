// firebase_subscribe.js
firebase.initializeApp({
  apiKey: "AIzaSyBgtimVAYl4ncd-OZMqab2cZEOw9RXwXUk",
  authDomain: "anfy-top.firebaseapp.com",
  projectId: "anfy-top",
  storageBucket: "anfy-top.appspot.com",
  messagingSenderId: "897485062660",
  appId: "1:897485062660:web:98ed9ef2578df96ba7eb51",
  measurementId: "G-RL7GMQXV7M",
});

var messaging = firebase.messaging();
subscribe();

console.log({ messaging });

// setTimeout(() => {
//   navigator.serviceWorker.ready.then(function (registration) {
//     registration.showNotification("Notification with ServiceWorker");
//   });
// }, 2000);

// браузер поддерживает уведомления
// вообще, эту проверку должна делать библиотека Firebase, но она этого не делает
if ("Notification" in window) {
  // пользователь уже разрешил получение уведомлений
  // подписываем на уведомления если ещё не подписали
  if (Notification.permission === "granted") {
  }

  // по клику, запрашиваем у пользователя разрешение на уведомления
  // и подписываем его
  // $("#subscribe").on("click", function () {
  //   subscribe();
  // });
}

function subscribe() {
  if (window.localStorage.getItem("sentFirebaseMessagingToken") !== null) {
    return;
  }

  messaging
    .requestPermission()
    .then(function () {
      // получаем ID устройства
      messaging
        .getToken()
        .then(function (currentToken) {
          console.log(currentToken);
          setTokenSentToServer(currentToken);
          if (currentToken) {
            // sendTokenToServer(currentToken);
          } else {
            console.warn("Не удалось получить токен.");
            setTokenSentToServer(false);
          }
        })
        .catch(function (err) {
          console.warn("При получении токена произошла ошибка.", err);
          setTokenSentToServer(false);
        });
    })
    .catch(function (err) {
      console.warn("Не удалось получить разрешение на показ уведомлений.", err);
    });
}

// отправка ID на сервер
// function sendTokenToServer(currentToken) {
//   if (!isTokenSentToServer(currentToken)) {
//     console.log("Отправка токена на сервер...");

//     var url = ""; // адрес скрипта на сервере который сохраняет ID устройства
//     $.post(url, {
//       token: currentToken,
//     });

//     setTokenSentToServer(currentToken);
//   } else {
//     console.log("Токен уже отправлен на сервер.");
//   }
// }

// используем localStorage для отметки того,
// что пользователь уже подписался на уведомления
function isTokenSentToServer(currentToken) {
  return (
    window.localStorage.getItem("sentFirebaseMessagingToken") == currentToken
  );
}

function setTokenSentToServer(currentToken) {
  window.localStorage.setItem(
    "sentFirebaseMessagingToken",
    currentToken ? currentToken : ""
  );
}
