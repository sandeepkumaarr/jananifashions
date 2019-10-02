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
export const createUserProfileDocument = async(userAuth, additionalData) => {
      if(!userAuth) return;
      const userRef = firestore.doc(`users/${userAuth.uid}`);
      const snapShot = await userRef.get();

      if(!snapShot.exists){
            const {displayName,email} = userAuth;
            const createdAt = new Date();

            try{
                  await userRef.set({
                        displayName,
                        email,
                        createdAt,
                        ...additionalData
                  })
            } catch(error){
                  console.log('error creating user', error.message);
            }
      }
      return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle =  () => auth.signInWithPopup(provider);

export default firebase;

