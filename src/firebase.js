import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDBoPsFM6g_pkgN0UoA_yNHJle4c7wUlb4",
  authDomain: "chat-app-c732c.firebaseapp.com",
  projectId: "chat-app-c732c",
  storageBucket: "chat-app-c732c.appspot.com",
  messagingSenderId: "124305568856",
  appId: "1:124305568856:web:28012b43c23046d045062d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
