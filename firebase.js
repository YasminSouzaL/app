// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
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

/* const firebaseConfig = {
  apiKey: "AIzaSyCtYiyHbk2jb90IjMXuHx928ncfIZ6FgxE",
  authDomain: "apptest-44f64.firebaseapp.com",
  projectId: "apptest-44f64",
  storageBucket: "apptest-44f64.appspot.com",
  messagingSenderId: "217387417668",
  appId: "1:217387417668:web:e2cef3cb082d606e97fc11"
}; */

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth,db};