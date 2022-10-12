// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBohnNPKgNvAmFS2WEBloHqkgoeBJytaYk",
  authDomain: "teste-91b2c.firebaseapp.com",
  databaseURL: "https://teste-91b2c-default-rtdb.firebaseio.com",
  projectId: "teste-91b2c",
  storageBucket: "teste-91b2c.appspot.com",
  messagingSenderId: "1055962455032",
  appId: "1:1055962455032:web:554183cadc688f6cf7d40d",
  measurementId: "G-PZTTDZ9CDX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth,db};