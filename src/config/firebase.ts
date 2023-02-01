// Import the functions you need from the SDKs you need
import { FirebaseOptions, initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyDJttztcLUWG-DW-zQdtHgPya-lSie0tG0",
  authDomain: "project-rn-f4fd3.firebaseapp.com",
  databaseURL: "https://project-rn-f4fd3-default-rtdb.firebaseio.com",
  projectId: "project-rn-f4fd3",
  storageBucket: "project-rn-f4fd3.appspot.com",
  messagingSenderId: "291602290032",
  appId: "1:291602290032:web:d3bad68670a191f398ebb5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
