// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXfY1uACw3R4zOK3XyrNK3Fms-AmaSRTQ",
  authDomain: "emtirr-63451.firebaseapp.com",
  projectId: "emtirr-63451",
  storageBucket: "emtirr-63451.appspot.com",
  messagingSenderId: "549024025992",
  appId: "1:549024025992:web:8a1cf6591ab12aa4e7be3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;