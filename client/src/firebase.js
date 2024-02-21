// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBs1ZatKN4_AL4tjZwZjECCbypRiKVUV58",
  authDomain: "inauction-1e7d2.firebaseapp.com",
  databaseURL: "https://inauction-1e7d2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "inauction-1e7d2",
  storageBucket: "inauction-1e7d2.appspot.com",
  messagingSenderId: "982427321242",
  appId: "1:982427321242:web:f18fad9404a9c0bc54f023",
  measurementId: "G-3GY13CVML2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Auth provider
const provider = new GoogleAuthProvider();

// whenever a user interacts with the provider, we force them to select an account
provider.setCustomParameters({
  prompt: "select_account "
});

const analytics = getAnalytics(app);

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore(app);