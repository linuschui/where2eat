import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBW28QSkeISDqSYBoxTf1R0fWlA7tarEGI",
  authDomain: "whr2eat-login.firebaseapp.com",
  projectId: "whr2eat-login",
  storageBucket: "whr2eat-login.appspot.com",
  messagingSenderId: "382807456369",
  appId: "1:382807456369:web:fe7b359d58cd03462339d0",
  measurementId: "G-NXG5NN613E"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;