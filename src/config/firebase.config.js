// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDxTC-QNsXfCe72lT62k7Yj1HU_jmeCqAg",

  authDomain: "appleaid-765f4.firebaseapp.com",

  projectId: "appleaid-765f4",

  storageBucket: "appleaid-765f4.appspot.com",

  messagingSenderId: "279650756390",

  appId: "1:279650756390:web:52c457f8604b1ebc2683e7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
