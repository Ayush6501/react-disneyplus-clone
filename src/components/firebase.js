import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC6L1zOGYzWocWITjwhlCnTwcxBQmYgKBY",
    authDomain: "react-disneyplus-clone-a6501.firebaseapp.com",
    projectId: "react-disneyplus-clone-a6501",
    storageBucket: "react-disneyplus-clone-a6501.appspot.com",
    messagingSenderId: "1021665585492",
    appId: "1:1021665585492:web:1a7dc0fa052b3388ac00c1",
    measurementId: "G-KN2PZ6BBDE"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth, provider, storage};
export default db;

firebase.analytics();
