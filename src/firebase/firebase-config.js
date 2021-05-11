import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDK2xFqAtUhrsl3ITuKGL7PlHJw5kWow48",
    authDomain: "journalapp-cc169.firebaseapp.com",
    projectId: "journalapp-cc169",
    storageBucket: "journalapp-cc169.appspot.com",
    messagingSenderId: "805497642549",
    appId: "1:805497642549:web:521d479ee75452dcb69b7c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}