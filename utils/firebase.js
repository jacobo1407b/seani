import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
/*
const {
    FIREBASE_AUTHDOMAIN,
    FIREBASE_DATABASE,
    FIREBASE_PROJECT_ID,
  } = process.env;
  const {
    FIREBASE_STORAGE_BUCKET,
    FIREBASE_SENDER_ID,
    FIREBASE_APP_ID,
    FIREBASE_MENSURABLE,
  } = process.env;*/

const firebaseConfig = {
  apiKey: "AIzaSyDxblUMTsA7EQAGV3cgCcGMoYuaBN2_Ihk",
  authDomain: "utt-examen.firebaseapp.com",
  databaseURL: "https://utt-examen.firebaseio.com",
  projectId: "utt-examen",
  storageBucket: "utt-examen.appspot.com",
  messagingSenderId: "18898550084",
  appId: "1:18898550084:web:f333bed7d19c444b356b11",
  measurementId: "G-EZJBGMMT5R",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const app = firebase.app();
const auth = firebase.auth();
const au = firebase.auth();
const db = firebase.firestore();
const now = firebase.firestore.Timestamp.now();
const storage = firebase.storage();

export { auth, db, now, storage,au };

/**
 *  apiKey: process.env.FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTHDOMAIN,
    databaseURL: FIREBASE_DATABASE,
    projectId: FIREBASE_PROJECT_ID,
    storageBucket: FIREBASE_STORAGE_BUCKET,
    messagingSenderId: FIREBASE_SENDER_ID,
    appId: FIREBASE_APP_ID,
    measurementId: FIREBASE_MENSURABLE,
 */