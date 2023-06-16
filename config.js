import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyDkCaM5eVjkRoh8KGQaEqwnnagEg5-ccKs",
  authDomain: "project-71-e85a6.firebaseapp.com",
  projectId: "project-71-e85a6",
  storageBucket: "project-71-e85a6.appspot.com",
  messagingSenderId: "295546772683",
  appId: "1:295546772683:web:462be72febb41d220e0f4e"
};
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
