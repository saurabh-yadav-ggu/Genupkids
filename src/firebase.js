import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDb11pBBSwG3HrghqeWp1ErZlJ8fnU9J4A",
  authDomain: "genupkid.firebaseapp.com",
  projectId: "genupkid",
  storageBucket: "genupkid.firebasestorage.app",
  messagingSenderId: "17226135894",
  appId: "1:17226135894:web:88443e90e4ea9aa627bef7",
  measurementId: "G-Y4P7PSHPY7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
