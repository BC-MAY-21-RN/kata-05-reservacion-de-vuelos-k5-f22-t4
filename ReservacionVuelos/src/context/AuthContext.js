import React, {useState, createContext} from 'react';
import authFirebase from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const AuthContext = createContext({
  auth: undefined,
  login: () => {},
  logout: () => {},
});

function getUserData(userData, setAuth) {
  (async () => {
    try {
      firestore()
        .collection('Users')
        .where('email', '==', userData)
        .get()
        .then(collectionSnapshot => {
          collectionSnapshot.forEach(documentSnapshot => {
            setAuth(documentSnapshot.data());
          });
        });
    } catch (error) {
      throw error;
    }
  })();
}
export function AuthProvider(props) {
  const {children} = props;
  const [auth, setAuth] = useState(undefined);

  function login(userData) {
    getUserData(userData, setAuth);
  }
  const logout = () => {
    setAuth(undefined);
    authFirebase().signOut();
  };
  const valueContext = {
    auth,
    login,
    logout,
  };
  return (
    <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
  );
}
