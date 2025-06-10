import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAv_J729UVnY0ZuQhRJIptwWMNcOf30v68",
  authDomain: "examen-2a153.firebaseapp.com",
  projectId: "examen-2a153",
  storageBucket: "examen-2a153.firebasestorage.app",
  messagingSenderId: "918302567427",
  appId: "1:918302567427:web:3beefafb0667701014f236"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();