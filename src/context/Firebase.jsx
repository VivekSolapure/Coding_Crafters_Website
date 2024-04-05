import { createContext, useContext, useState } from 'react'
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getDatabase, set, ref, get, } from 'firebase/database'
import { getStorage } from 'firebase/storage'
import firebase from "firebase/compat/app"
import 'firebase/compat/database'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB_OjEX0bQ1G98oUjPsf4VSW2rDk3rbd9E",
    authDomain: "codingcrafters-fac21.firebaseapp.com",
    databaseURL: "https://codingcrafters-fac21-default-rtdb.firebaseio.com",
    projectId: "codingcrafters-fac21",
    storageBucket: "codingcrafters-fac21.appspot.com",
    messagingSenderId: "193742457678",
    appId: "1:193742457678:web:171d39cbb568d511f42c1f",
    measurementId: "G-NCR7PYBVNT"
  };



const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
export const database = getDatabase(firebaseApp);
const googleProvider = new GoogleAuthProvider();


const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext)
export const storage = getStorage();


export const errorMessage=()=>{


}

export const FirebaseProvider = (props) => {

    const [error, seterror] = useState('')

    const signupUserWithEamilandPassword = async (email, password) => {
        try {
            await createUserWithEmailAndPassword(firebaseAuth, email, password).then(() => {
                return (alert("Success!!"));
            })

        } catch (error) {
            seterror(parseFirebaseErrorMessage(JSON.stringify(error)));
        }
    }
    const parseFirebaseErrorMessage = (errorMessage) => {
        try{
            const regex = /auth\/(.*)/; // Regular expression to extract the error code
            const match = errorMessage.match(regex);
            if (match && match.length > 1) {
              return match[1].replace(')', ''); // Remove the closing parenthesis
            } else {
              return 'Unknown Error';
            }
        }catch(error){
            console.error(error);
        }
        
      };
    const signUpWithGoogle = async () => {
        try{
            await signInWithPopup(firebaseAuth, googleProvider)
        }catch(error){
            seterror( parseFirebaseErrorMessage(JSON.stringify(error)));
        }
    }

    const LogInWithEmailAndPassword = async (eemail, ppassword) => {
        try {
            await signInWithEmailAndPassword(firebaseAuth, eemail, ppassword)
        } catch (eerror) {
            seterror(parseFirebaseErrorMessage(JSON.stringify(error)));
        }
    }


    const putData = (key, data) => set(ref(database, key), (data))




    return (
        <FirebaseContext.Provider value={{ signupUserWithEamilandPassword, putData, signUpWithGoogle, LogInWithEmailAndPassword, database, storage,error }}>{props.children}</FirebaseContext.Provider>
    )



}


