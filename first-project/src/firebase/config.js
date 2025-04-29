import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCwp5-alWhbJfHXxcQZD-cro_iT_npYVFA",
  authDomain: "this-is-hard-63a29.firebaseapp.com",
  projectId: "this-is-hard-63a29",
  storageBucket: "this-is-hard-63a29.firebasestorage.app",
  messagingSenderId: "327906115345",
  appId: "1:327906115345:web:0f2257166639f83f0816b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);