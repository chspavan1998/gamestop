import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';
import { GoogleAuthProvider, FacebookAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser, setError, logout } from '../store/authSlice';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      dispatch(setUser(user));
      setLoading(false);
    });

    return unsubscribe;
  }, [dispatch]);

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      dispatch(setUser(result.user));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };

  const signInWithFacebook = async () => {
    try {
      const provider = new FacebookAuthProvider();
      const result = await signInWithPopup(auth, provider);
      dispatch(setUser(result.user));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      dispatch(logout());
    } catch (error) {
      dispatch(setError(error.message));
    }
  };

  const value = {
    signInWithGoogle,
    signInWithFacebook,
    handleSignOut,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}; 