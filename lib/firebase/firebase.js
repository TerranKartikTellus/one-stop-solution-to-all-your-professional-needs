import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD1r60IM3R5KPiE57u-gNqQ2zXu1vfk04w",
  authDomain: "resume-e4a4b.firebaseapp.com",
  projectId: "resume-e4a4b",
  storageBucket: "resume-e4a4b.appspot.com",
  messagingSenderId: "84470370346",
  appId: "1:84470370346:web:74cb9c6da0d0532e96f353",
  measurementId: "G-24CVFXHN1N"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storage = firebase.storage();
