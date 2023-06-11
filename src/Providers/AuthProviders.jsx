import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from '../Firebase/Firebase.config';

const auth = getAuth(app)

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState();
    // console.log(user);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    const googleSignin = (provider) => {
        return signInWithPopup(auth, provider)
    }

    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, currentUser=> {
            setUser(currentUser);
            console.log(currentUser);
            setLoading(false)
        })
        return () => {
            return unsubscribe
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logout,
        googleSignin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;