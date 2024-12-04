// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCn1fo1QdW-YK9QD_XaQj4pQGTkx11nQ9c",
  authDomain: "lifesync-de47f.firebaseapp.com",
  projectId: "lifesync-de47f",
  storageBucket: "lifesync-de47f.firebasestorage.app",
  messagingSenderId: "645829701980",
  appId: "1:645829701980:web:d6f4aa028f78f31f0c9199",
  measurementId: "G-919YBYB4ZQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);