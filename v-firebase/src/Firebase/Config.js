import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCDCx06yrKUSOrfSGebIQK-CuLwRYjtPNY",
  authDomain: "vue-firebase-4305a.firebaseapp.com",
  projectId: "vue-firebase-4305a",
  storageBucket: "vue-firebase-4305a.appspot.com",
  messagingSenderId: "80734414960",
  appId: "1:80734414960:web:915d2f1d6bb72375f66cb5",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore service
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp };
