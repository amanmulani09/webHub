// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9L_1PIfxPOkJgk9rR8SVvzfgya06Dpds",
  authDomain: "webhub-a1a16.firebaseapp.com",
  projectId: "webhub-a1a16",
  storageBucket: "webhub-a1a16.appspot.com",
  messagingSenderId: "1054779705208",
  appId: "1:1054779705208:web:62a3d1102bc6ce54ea6a8d",
  measurementId: "G-GMC6Z5ZNFS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)