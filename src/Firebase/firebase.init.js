// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7FllpDUQG9oXyD0G7mopWT46JvhutmrM",
  authDomain: "venture-toy-verse.firebaseapp.com",
  projectId: "venture-toy-verse",
  storageBucket: "venture-toy-verse.appspot.com",
  messagingSenderId: "725890471732",
  appId: "1:725890471732:web:5c3f485244fa4ce3f13761",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
