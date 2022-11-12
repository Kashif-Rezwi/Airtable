import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD1I1OZKy7m5ZyNA3LmxADjDPZrb080urk",
    authDomain: "codeair-authentication.firebaseapp.com",
    projectId: "codeair-authentication",
    storageBucket: "codeair-authentication.appspot.com",
    messagingSenderId: "85467604435",
    appId: "1:85467604435:web:cbe6d179d2f5da0053fb26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app;