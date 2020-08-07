import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDFxWRi9lEPf9teRbYcU49OyxuMQl-Fqhk",
    authDomain: "clone-cf51f.firebaseapp.com",
    databaseURL: "https://clone-cf51f.firebaseio.com",
    projectId: "clone-cf51f",
    storageBucket: "clone-cf51f.appspot.com",
    messagingSenderId: "176591285659",
    appId: "1:176591285659:web:36f98d08323971186f453e",
    measurementId: "G-F02NZCKY59"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export  {db, auth};