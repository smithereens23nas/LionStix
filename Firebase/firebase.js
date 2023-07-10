// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWs4jhHTrHX1Yf4Vud6v-pB92uwovXnB8",
  authDomain: "lion-stix.firebaseapp.com",
  databaseURL: "https://lion-stix-default-rtdb.firebaseio.com",
  projectId: "lion-stix",
  storageBucket: "lion-stix.appspot.com",
  messagingSenderId: "537842932203",
  appId: "1:537842932203:web:54db43aa2f32caae0ba1ae",
  measurementId: "G-W34005ZSB8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
