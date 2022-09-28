// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAgDqFdQ6I7RoqGt2iyPuPnCMkZTmqCEg",
  authDomain: "pixeles-games.firebaseapp.com",
  projectId: "pixeles-games",
  storageBucket: "pixeles-games.appspot.com",
  messagingSenderId: "245059447265",
  appId: "1:245059447265:web:bc665f50e58211c5764aa0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)