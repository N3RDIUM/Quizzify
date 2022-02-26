console.log("hello");
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
// get firestore and auth
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDxCJ3afAgR1gtMa4mYH5MUbwGAq_5v3Fc",
  authDomain: "quizzify-17f00.firebaseapp.com",
  projectId: "quizzify-17f00",
  storageBucket: "quizzify-17f00.appspot.com",
  messagingSenderId: "962996481970",
  appId: "1:962996481970:web:8e1bf63c3b07657c6d7eab",
  measurementId: "G-B59GNRTZTK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);;
const auth = getAuth(app);

function signUp() {
  e = 'lolo@gmail.com'
  p = 'sectrrrgoj'

  console.log(n, e, p);

  auth.createUserWithEmailAndPassword(e, p);
}

signUp()
