import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDavvmvTorL8biDM2A2q7ziS8zPVq2LSyk",
  authDomain: "rsj20232.firebaseapp.com",
  projectId: "rsj20232",
  storageBucket: "rsj20232.appspot.com",
  messagingSenderId: "58293415727",
  appId: "1:58293415727:web:6a0d465b676afa5e223bda",
};
firebase.initializeApp(firebaseConfig);
export default firebase;
