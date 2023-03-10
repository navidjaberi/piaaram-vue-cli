import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
var firebaseConfig = {
  apiKey: "AIzaSyBN31KDfO-Ow9B_ZpVGDKVTIItWL7BxrlQ",
  authDomain: "piaraam.firebaseapp.com",
  databaseURL: "https://piaraam.firebaseio.com",
  projectId: "piaraam",
  storageBucket: "piaraam.appspot.com",
  messagingSenderId: "968180393243",
  appId: "1:968180393243:web:c71282d8b9d9de869a9fbe",
  measurementId: "G-P3MDMKHTSQ"
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);

/* firebaseApp.firestore().settings({ timestampsInSnapshots: true }); */
const db = getFirestore(app);
const auth = getAuth(app);

//export firestore database

export {  db,auth };
