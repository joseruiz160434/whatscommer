import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAH4uQWnjcc-zS2-Xvb2wbcjpwO8FqFVT8",
  authDomain: "whatscommers-1db53.firebaseapp.com",
  projectId: "whatscommers-1db53",
  storageBucket: "whatscommers-1db53.appspot.com",
  messagingSenderId: "914390304111",
  appId: "1:914390304111:web:6b57fc718d17944f5f949a",
};

// Initialize Firebase
export const firebaseapp = firebase.initializeApp(firebaseConfig);
