// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, reauthenticateWithRedirect, reauthenticateWithCredential } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoM7hNgsqC85ewBD-SGJMGI8_2D_7J0Bc",
  authDomain: "haus-market.firebaseapp.com",
  projectId: "haus-market",
  storageBucket: "haus-market.appspot.com",
  messagingSenderId: "1047204370748",
  appId: "1:1047204370748:web:7b9f87db237564dbc3a639",
  measurementId: "G-RP4LE8HNR5"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const analytics = getAnalytics(firebaseApp);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if(!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {displayName, email, createdAt, ...additionalInformation});
        } catch(error){
            console.log("error creating user", error.message);
        }
    }
    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}