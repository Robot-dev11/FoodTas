import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5k1qVSWRJkQeKdo4RsKGIda-mBKq0NHg",
  authDomain: "foodtas-5c701.firebaseapp.com",
  projectId: "foodtas-5c701",
  storageBucket: "foodtas-5c701.appspot.com",
  messagingSenderId: "329378303313",
  appId: "1:329378303313:web:9bc3b846eedb0dc64e9770"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);