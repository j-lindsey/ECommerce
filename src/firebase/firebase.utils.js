import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const Config = {
    apiKey: "AIzaSyBVJnRqbwZ-LHZpz_gHCkraGvqnUQF7Qhg",
    authDomain: "ecommerce-2615a.firebaseapp.com",
    projectId: "ecommerce-2615a",
    storageBucket: "ecommerce-2615a.appspot.com",
    messagingSenderId: "211645714803",
    appId: "1:211645714803:web:d848f8a7b5e92f6cecf506",
    measurementId: "G-B7HP76FYPW"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(Config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;