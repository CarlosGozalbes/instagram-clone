import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

//import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyD6gGPhvDN2rmV2NvfdtxgaIslllEcg4FU",
  authDomain: "instagram-clone-9749e.firebaseapp.com",
  projectId: "instagram-clone-9749e",
  storageBucket: "instagram-clone-9749e.appspot.com",
  messagingSenderId: "751778743250",
  appId: "1:751778743250:web:e8cad6314b74b3cd7b7e0b",
};

const firebase = Firebase.initializeApp(config)
const {FieldValue} = Firebase.firestore 
//seedDatabase(firebase);
export {firebase, FieldValue}