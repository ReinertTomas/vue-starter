import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCDCx06yrKUSOrfSGebIQK-CuLwRYjtPNY",
  authDomain: "vue-firebase-4305a.firebaseapp.com",
  projectId: "vue-firebase-4305a",
  storageBucket: "vue-firebase-4305a.appspot.com",
  messagingSenderId: "80734414960",
  appId: "1:80734414960:web:30fe5807333c05e6f66cb5",
};

// init firebase
firebase.initializeApp(config);

// init firestore

const firestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { firestore, timestamp };
