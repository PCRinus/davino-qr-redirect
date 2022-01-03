import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVluBM9voMiDtjOHB19VqBRheuerkV3sU",
  authDomain: "davino-qr-generator.firebaseapp.com",
  projectId: "davino-qr-generator",
  storageBucket: "davino-qr-generator.appspot.com",
  messagingSenderId: "777649895709",
  appId: "1:777649895709:web:70051e82cd418c500dc9f4",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore();