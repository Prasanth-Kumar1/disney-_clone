import firebase from "firebase";

// Firebase config file access to acutal database
const firebaseConfig = {
  apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
  authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
  projectId: "disneyplus-clone-a33d5",
  storageBucket: "disneyplus-clone-a33d5.appspot.com",
  messagingSenderId: "37918794208",
  appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
  measurementId: "G-DRVLJKWRWG",
};

// initialized firebaseapp
const firebaseApp = firebase.initializeApp(firebaseConfig);
// here telling that use firebase store
const db = firebaseApp.firestore();
// this is firebase authentication using for login and logout
const auth = firebase.auth();
// this is to use google authentication
const provider = new firebase.auth.GoogleAuthProvider();
// finally this is for using firebase storage 
const storage = firebase.storage();

export { auth, provider, storage };
export default db;