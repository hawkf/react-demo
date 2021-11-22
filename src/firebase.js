// import firebase from "firebase/app";
// import "firebase/messaging";
// //import "firebase/messeging";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBgtimVAYl4ncd-OZMqab2cZEOw9RXwXUk",
//   authDomain: "anfy-top.firebaseapp.com",
//   projectId: "anfy-top",
//   storageBucket: "anfy-top.appspot.com",
//   messagingSenderId: "897485062660",
//   appId: "1:897485062660:web:98ed9ef2578df96ba7eb51",
//   measurementId: "G-RL7GMQXV7M",
// };

// // Initialize Firebase
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// } else {
//   firebase.app(); // if already initialized, use that one
// }

// const messaging = firebase.messaging();
// // const messeging = firebase.messeging();

// export const getToken = (setTokenFound) => {
//   return messaging
//     .getToken({ vapidKey: "GENERATED_MESSAGING_KEY" })
//     .then((currentToken) => {
//       if (currentToken) {
//         console.log("current token for client: ", currentToken);
//         setTokenFound(true);
//         // Track the token -> client mapping, by sending to backend server
//         // show on the UI that permission is secured
//       } else {
//         console.log(
//           "No registration token available. Request permission to generate one."
//         );
//         setTokenFound(false);
//         // shows on the UI that permission is required
//       }
//     })
//     .catch((err) => {
//       console.log("An error occurred while retrieving token. ", err);
//       // catch error while creating client token
//     });
// };
