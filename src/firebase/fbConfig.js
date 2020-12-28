import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC1zg36lBkLyStRifoEOWx3cBhGSJ1TkVI",
  authDomain: "resume-builder-20929.firebaseapp.com",
  projectId: "resume-builder-20929",
  storageBucket: "resume-builder-20929.appspot.com",
  messagingSenderId: "485579001094",
  appId: "1:485579001094:web:6c1490c669514f99ea2287"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,db,provider,firebaseApp};
