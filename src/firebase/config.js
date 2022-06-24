import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyABxGlIrU9jzA1ebBZ2XjiG8N-6UptIOXM",
  authDomain: "template-login-react-firebase.firebaseapp.com",
  projectId: "template-login-react-firebase",
  storageBucket: "template-login-react-firebase.appspot.com",
  messagingSenderId: "34835137579",
  appId: "1:34835137579:web:e144e22904076880e1d66e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db }