import {useEffect, useState} from "react";
import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../Firebase/firebase.config";
import axios from "axios";

//! for google sign in

const googleProvider = new GoogleAuthProvider();

// !
// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
  // user state
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create new user
  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //  google sign in

  const googleLogIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // ! update profile receive user name and photo url

  const updateUserProfile = (updateData) => {
    setLoading(true);
    return updateProfile(auth.currentUser, updateData);
  };

  //  sign out

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  // create observer for user {"To keep the user logged in, ensure that the user remains authenticated when the browser is refreshed by using an observer."}
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser?.email) {
        setUser(currentUser);
        //! Request JWT token from server post
        const {data} = await axios.post(
          `${import.meta.env.VITE_API_URL}/jwt`,
          {
            email: currentUser?.email,
          },
          {withCredentials: true} //set credentials
        );
        console.log(data);
      } else {
        setUser(currentUser);
        //! clear JWT token from server get
        const {data} = await axios.get(
          `${import.meta.env.VITE_API_URL}/logout`,
          {withCredentials: true} //set credentials for jwt
        );
        console.log(data);
      }
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // provider for AuthContext value passing
  const authInfo = {
    user,
    setUser,
    createNewUser,
    loginUser,
    googleLogIn,
    updateUserProfile,
    logout,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
