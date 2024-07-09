"use client";
import { auth, db } from "../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  useState,
  useEffect,
  createContext,
  useContext,
  Children,
} from "react";
import { setDoc, doc } from "firebase/firestore";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [verified, setVerified] = useState(false);
  const isLogged = () => {
    setVerified(true);
  };
  const notLogged = () => {
    setVerified(false);
  };
  const signup =  (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);

    // const data=  setDoc(doc(db, 'users', email), {
    //     savedShows: []
    // })
    // console.log(data)

    const data = {
      savedShows: [],
    };
    const collectionRef = "users"; // Replace with your collection name
    const docRef = doc(db, collectionRef, email);
    try {
       setDoc(docRef, data);
      console.log("Data successfully written!");
    } catch (error) {
      console.error("Error writing data:", error);
    }
  };
  const signin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  });
  return (
    <AuthContext.Provider
      value={{ user, verified, signup, notLogged, signin, logout, isLogged }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
