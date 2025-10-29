// File Path: src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCuawUDBERG37djResf2Sq8oNl2fvD49jM",
  authDomain: "login-dbms.firebaseapp.com",
  projectId: "login-dbms",
  storageBucket: "login-dbms.appspot.com",
  messagingSenderId: "758402707171",
  appId: "1:758402707171:web:51f4ea8259f0042fcc9fd6"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);