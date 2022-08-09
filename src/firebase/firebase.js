import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAUeG9HJ_V7r019kzQtJHcRNIcRJGN-Nx0",
    authDomain: "tienda-david-dc.firebaseapp.com",
    projectId: "tienda-david-dc",
    storageBucket: "tienda-david-dc.appspot.com",
    messagingSenderId: "151627410006",
    appId: "1:151627410006:web:e5eeb532531680440169f7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);