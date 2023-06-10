import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAjeLT5POoqPO--X5d0yZeS4EI91HhG8yM",
  authDomain: "react-native-25c2f.firebaseapp.com",
  databaseURL:
    "https://react-native-25c2f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-native-25c2f",
  storageBucket: "react-native-25c2f.appspot.com",
  messagingSenderId: "446674460198",
  appId: "1:446674460198:web:5c8318d902d064ddc510e7",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
