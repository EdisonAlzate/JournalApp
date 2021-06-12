import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig =  {
  apiKey: "AIzaSyCNwD20rEmVbFFwKMg4-QGSXQfeu5wPFHQ",
  authDomain: "journalpractice2.firebaseapp.com",
  projectId: "journalpractice2",
  storageBucket: "journalpractice2.appspot.com",
  messagingSenderId: "513429306810",
  appId: "1:513429306810:web:3e65927c48232dfed3f183"
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