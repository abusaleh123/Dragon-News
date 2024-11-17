// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwIXFht35oCX6ChN-uOt_yyE4-GjvJfSE",
  authDomain: "dragon-news-7832b.firebaseapp.com",
  projectId: "dragon-news-7832b",
  storageBucket: "dragon-news-7832b.firebasestorage.app",
  messagingSenderId: "502935550720",
  appId: "1:502935550720:web:7a794bda02813b63d651e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth