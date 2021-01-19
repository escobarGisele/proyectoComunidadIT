import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBTTAM3Vg3toaCNVPam15GKQig-PeEAkXA",
    authDomain: "basededatos-829c8.firebaseapp.com",
    projectId: "basededatos-829c8",
    storageBucket: "basededatos-829c8.appspot.com",
    messagingSenderId: "568631965612",
    appId: "1:568631965612:web:0441efb909d92282a36c09",
    measurementId: "G-YJNKVTSVZ0"
};

firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();
const storage = firebase.storage();
export {db, storage}
export default { firebaseConfig};
