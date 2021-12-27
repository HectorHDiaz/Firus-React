import * as firebase from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBiJ5mVbjjpmiHYzxykSHbi2XtbwbYBNqM",
  authDomain: "firus-091218.firebaseapp.com",
  projectId: "firus-091218",
  storageBucket: "firus-091218.appspot.com",
  messagingSenderId: "487934367007",
  appId: "1:487934367007:web:f8c776e91f2236a53b4c2a"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = getFirestore(app)
