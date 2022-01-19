importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");
const firebaseConfig = {
  apiKey: "AIzaSyD2yN3rspNITGjX6CCmH1ZZkdwo72qzfwg",
  authDomain: "fcm-webpush-demo-eba2a.firebaseapp.com",
  projectId: "fcm-webpush-demo-eba2a",
  storageBucket: "fcm-webpush-demo-eba2a.appspot.com",
  messagingSenderId: "85190367782",
  appId: "1:85190367782:web:085054b5340e64c32024e7",
  measurementId: "G-HB880B6PPB",
};
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/logo192.png",
  };
  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
