import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyCwGlNqxw1o08L4TO5XcxzglAXxUAzIiG8",
    authDomain: "myblogsite-9a4a9.firebaseapp.com",
    projectId: "myblogsite-9a4a9",
    storageBucket: "myblogsite-9a4a9.appspot.com",
    messagingSenderId: "535332813226",
    appId: "1:535332813226:web:cd04b2d92dc37135cc13d3",
    measurementId: "G-59MC3C7ZKW"
});

const fb = firebase;

export default fb;