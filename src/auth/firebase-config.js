import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyA1XYkHOolpxZHYxieDCwzRL1hDpqdiG_Y",
  authDomain: "movie-app-contex.firebaseapp.com",
  projectId: "movie-app-contex",
  storageBucket: "movie-app-contex.appspot.com",
  messagingSenderId: "452352607815",
  appId: "1:452352607815:web:6df7c27a945e5bc3cb5362"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);