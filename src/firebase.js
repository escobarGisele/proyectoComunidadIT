import firebase from 'firebase/app';
import "firebase/auth";
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyD8NEPtNlPdi5RxyamwfmJPl1b1pMldWc0",
    authDomain: "app-react-material.firebaseapp.com",
    databaseURL: "https://app-react-material.firebaseio.com",
    projectId: "app-react-material",
    storageBucket: "app-react-material.appspot.com",
    messagingSenderId: "945493239173",
    appId: "1:945493239173:web:e5d63db0d649e638f450ec"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const authentication = firebase.auth();

export {authentication};