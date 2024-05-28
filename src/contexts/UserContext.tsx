import React, { createContext, useState, useEffect } from 'react';
import { FIREBASE_AUTH, FIREBASE_DB } from '../../FirebaseConfig';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

export const UserContext = createContext();
export const MedicalInfoContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userInfo, setUserInfo] = useState({
    name: '',
    schoolNumber: '',
    email: '',
    phoneNumber: '',
    activityHistory: []
  });

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
          // Fetch additional user info from Firestore if needed
          setUserInfo({
              userId: user.uid,
              name: user.displayName,
              // Add other fields as necessary
          });
      } else {
          setUserInfo(null);
      }
  });

  return () => unsubscribe();
}, []);

  return (
    <UserContext.Provider value={{ user, setUser, userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};

export const MedicalInfoProvider = ({ children }) => {
  const [medicalInfo, setMedicalInfo] = useState({
    adress: '',
    alergies: '',
    bloodType: '',
    familyContact: '',
    healthIssues: ''
  });

  return (
    <MedicalInfoContext.Provider value={{ medicalInfo, setMedicalInfo }}>
      {children}
    </MedicalInfoContext.Provider>
  );
};
