import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "@/config/firebase.config";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const createUser = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updateUser = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  const logout = () => {
    setIsLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });

    return () => {
      return unSubscribe();
    };
  }, []);
  console.log(user);
  return {
    createUser,
    login,
    updateUser,
    user,
    isLoading,
    logout,
  };
};

export default useAuth;
