// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBAOSxnPYBhU5F3eBAXFqfN--BkY7bArQ",
  authDomain: "productos-nextjs.firebaseapp.com",
  projectId: "productos-nextjs",
  storageBucket: "productos-nextjs.appspot.com",
  messagingSenderId: "496955061090",
  appId: "1:496955061090:web:912738d500f253eb08723b"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;