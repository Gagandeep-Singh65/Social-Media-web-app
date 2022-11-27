import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBTBR9sbiw62w3-vsu8duIher2vG_Uq5Ac",
  authDomain: "social-media-web-app-a3f37.firebaseapp.com",
  /* databaseURL property is missing */
  projectId: "social-media-web-app-a3f37",
  storageBucket: "social-media-web-app-a3f37.appspot.com",
  messagingSenderId: "571303387524",
  appId: "1:571303387524:web:ef4bcc556e34fe023f3dd1",
  measurementId: "G-C64VJ2R8BY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
