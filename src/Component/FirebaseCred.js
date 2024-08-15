// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyBhcOo3fI9hcytZMj6cQ_5K4aFliqongwA",
  authDomain: "movies-f982e.firebaseapp.com",
  projectId: "movies-f982e",
  storageBucket: "movies-f982e.appspot.com",
  messagingSenderId: "490764261981",
  appId: "1:490764261981:web:af2c492208e1d820e78bb4",
  measurementId: "G-9LNP37N4RZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)

export {db}