import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyD2TR5zPaqKvvn7tYUcSOAZBog7R-bzPkc",
        authDomain: "jananifashions-d9965.firebaseapp.com",
        databaseURL: "https://jananifashions-d9965.firebaseio.com",
        projectId: "jananifashions-d9965",
        storageBucket: "",
        messagingSenderId: "436258527897",
        appId: "1:436258527897:web:cd1c2b227f1925e3283608",
        measurementId: "G-FDYJT009VM"
      };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle =  () => auth.signInWithPopup(provider);

export default firebase;

