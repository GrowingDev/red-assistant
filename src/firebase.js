import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: "AIzaSyCIrkITst5SH6H5LObvYRsAxR-faCUPoDQ",
  authDomain: "red-assistant-2933f.firebaseapp.com",
  databaseURL: "",
  projectId: "red-assistant-2933f",
  storageBucket: "red-assistant-2933f.appspot.com",
  messagingSenderId: "152888024466",
  appId: "1:152888024466:web:e483dfb446191fc97ab54b",
}
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')


// export utils/refs
export {
  db,
  auth,
  usersCollection,
}