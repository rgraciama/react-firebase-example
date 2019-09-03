import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBlDDi3ZLO02j-k9ooHufzwJyZZTq1c9XY",
    authDomain: "pruebas-896b2.firebaseapp.com",
    databaseURL: "https://pruebas-896b2.firebaseio.com",
    projectId: "pruebas-896b2",
    storageBucket: "pruebas-896b2.appspot.com",
    messagingSenderId: "655681440670",
    appId: "1:655681440670:web:081fec96e4a5a413"
});

const db = firebaseApp.firestore();

export { db };