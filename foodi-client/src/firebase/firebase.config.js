import { initializeApp } from "firebase/app";


// Firebase Config File

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APIKEY,
//   authDomain: import.meta.env.VITE_AUTHDOMAIN,
//   projectId: import.meta.env.VITE_PROJECTID,
//   storageBucket: import.meta.env.VITE_STORAGEBUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
//   appId: import.meta.env.VITE_APPID,
// };

// ================================
const firebaseConfig = {
  apiKey: "AIzaSyBwoLFDWrWeeRu1B-cdnrsA8bGYWgO4raM",
  authDomain: "foodi-2b6d3.firebaseapp.com",
  projectId: "foodi-2b6d3",
  storageBucket: "foodi-2b6d3.appspot.com",
  messagingSenderId: "810909652107",
  appId: "1:810909652107:web:a74bf7930f59e6a9bff08e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app