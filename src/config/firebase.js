// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWrMv05gwvSl3S-U6-n7Zg9Dpv27-Gekk",
  authDomain: "clase-11-53a3b.firebaseapp.com",
  projectId: "clase-11-53a3b",
  storageBucket: "clase-11-53a3b.appspot.com",
  messagingSenderId: "143877692952",
  appId: "1:143877692952:web:e2a028fea536f35b2bed6d",
  measurementId: "G-E12QBTVCFK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);