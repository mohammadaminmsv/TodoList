// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApaFeGUbIlJsxmbsLdOBI4J0uY-jMCFSg",
  authDomain: "typescriptproject20april.firebaseapp.com",
  projectId: "typescriptproject20april",
  storageBucket: "typescriptproject20april.appspot.com",
  messagingSenderId: "66342766663",
  appId: "1:66342766663:web:693ad5dc77c6e41e674962",
  measurementId: "G-LZZW835P65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)