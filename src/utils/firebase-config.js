import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5XqS8xOA5O6yNgNAj8JB4RuFfBJLTNpo",
  authDomain: "clnetflix-dc553.firebaseapp.com",
  projectId: "clnetflix-dc553",
  storageBucket: "clnetflix-dc553.appspot.com",
  messagingSenderId: "1018556085147",
  appId: "1:1018556085147:web:07ca6fecaafb447d71a73e",
  measurementId: "G-HR355LD4DK"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);