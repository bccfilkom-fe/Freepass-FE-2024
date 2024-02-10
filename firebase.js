// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpypaJVvtPi_gn7mfNck9yqvcf1c1RTrs",
  authDomain: "mylist-32531.firebaseapp.com",
  projectId: "mylist-32531",
  storageBucket: "mylist-32531.appspot.com",
  messagingSenderId: "565513676978",
  appId: "1:565513676978:web:e3308ae94a7c96a6ef01ab",
  measurementId: "G-HRBGK7ZPJV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);