// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJSb98BdKpso0pE542unUkalZTIBzKRDA",
  authDomain: "bandar-2358f.firebaseapp.com",
  projectId: "bandar-2358f",
  storageBucket: "bandar-2358f.appspot.com",
  messagingSenderId: "903540974306",
  appId: "1:903540974306:web:68e2853e7ec301fc0f74bb",
  measurementId: "G-MPSTKNXBYL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
