import { createContext, useEffect, useState } from "react";
import auth from "../firebase.init";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

const createNewUser = (email, password) => {
    return  createUserWithEmailAndPassword(auth, email, password)
}
const logOut = () => {
  return signOut(auth)
}

const loginUser = (email,password) => {
  return signInWithEmailAndPassword(auth, email, password)
}
useEffect( () => {
  const unsubscribe =   onAuthStateChanged(auth, currentUser => {
        setUser(currentUser)
    })
    return () => {
        unsubscribe();
    }
}, [])

  const authInfo = {
    user,
    setUser,
    createNewUser,
    logOut,
    loginUser
  };
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
