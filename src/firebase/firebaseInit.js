import firebase from "firebase/app";
import "firebase/messaging";

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
const { REACT_APP_VAPID_KEY } = process.env;
const publicKey = REACT_APP_VAPID_KEY;

export const getToken = async (setTokenFound) => {
  let currentToken = "";
  try {
    currentToken = await messaging.getToken({ vapidKey: publicKey });
    if (currentToken) {
      setTokenFound(true);
    } else {
      setTokenFound(false);
    }
  } catch (error) {
    console.log("An error occurred while retrieving token.", error);
  }
  return currentToken;
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
  });
