export { db, storage };
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCdsKYgERIQ4ZM4YXRQG8kUpLQFVR2Hc1w",
  authDomain: "loopedin-srm-2025.firebaseapp.com",
  projectId: "loopedin-srm-2025",
  storageBucket: "loopedin-srm-2025.appspot.com",
  messagingSenderId: "370118153567",
  appId: "1:370118153567:web:4f4988a24f14193704d2ea"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

