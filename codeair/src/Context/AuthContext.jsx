import { createContext, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    sendEmailVerification,
    sendPasswordResetEmail
} from "firebase/auth"
import { auth } from "../firebase";
import { useEffect } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [authState, setAuthState] = useState(null)

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth , email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth , email, password)
    }

    const SignOut = () => {
        return signOut(auth)
    }

    const signInWithGoogle = () => {
        const googlrAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googlrAuthProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentState) => {
            setAuthState(currentState);
        })
        return unsubscribe;
    }, [])

    console.log(authState)
    return (
        <AuthContext.Provider value={{sendEmailVerification, signIn, signUp, authState, SignOut, signInWithGoogle}}>{children}</AuthContext.Provider>
    )
}