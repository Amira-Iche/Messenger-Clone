import firebase from "firebase"


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBD0QYLnleS56KX-S7FNV1t0EPCz1_t6o4",
    authDomain: "messenger-clone-60b6d.firebaseapp.com",
    databaseURL: "https://messenger-clone-60b6d.firebaseio.com",
    projectId: "messenger-clone-60b6d",
    storageBucket: "messenger-clone-60b6d.appspot.com",
    messagingSenderId: "999340127037",
    appId: "1:999340127037:web:7147e316ce0ed37b718b54",
    measurementId: "G-T57DRW4BT3"

});

const db =firebaseApp.firestore();

export default db ;