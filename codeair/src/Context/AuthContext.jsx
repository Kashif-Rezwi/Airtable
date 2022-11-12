import { createContext, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
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

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentState) => {
            setAuthState(currentState);
        })
        return unsubscribe;
    }, [])

    return (
        <AuthContext.Provider value={{signIn, signUp, authState, SignOut}}>{children}</AuthContext.Provider>
    )
}