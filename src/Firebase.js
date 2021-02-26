import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA_T3wEcFmD2ANeWcQ0YSwCa5uLSMjt3ZA",
    authDomain: "offibase-3c6f9.firebaseapp.com",
    projectId: "offibase-3c6f9",
    storageBucket: "offibase-3c6f9.appspot.com",
    messagingSenderId: "150760124020",
    appId: "1:150760124020:web:5735c94782415606fa2b21"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const dataBase = fb.firestore();