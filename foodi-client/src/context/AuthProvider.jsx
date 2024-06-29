import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useState } from "react";
import app from "./../firebase/firebase.config";

// export authContext
export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // create an account
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signup with google
  const signupWithGmail = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // login with email & password
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout
  const logOut = () => {
    signOut(auth);
  };

  // update profile
  const updateUserProfile = ({ name, photoURL }) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  const authInfo = {
    user,
    login,
    logOut,
    createUser,
    signupWithGmail,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
