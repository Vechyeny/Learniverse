// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage} from "firebase/storage";
import { getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyATooBooQRhhxxZS7xeJFpalJuD2tprzS0",
  authDomain: "learniversebest.firebaseapp.com",
  projectId: "learniversebest",
  storageBucket: "learniversebest.appspot.com",
  messagingSenderId: "694488149322",
  appId: "1:694488149322:web:13dee44666c19f93b365b3",
  measurementId: "G-J0YHNPWHZ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const imgDB = getStorage(app);

// const provider = new GoogleAuthProvider;

export {app, db, imgDB}