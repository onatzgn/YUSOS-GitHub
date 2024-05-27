import React, { createContext, useState } from 'react';

export const UserContext = createContext();
export const MedicalInfoContext = createContext();

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    schoolNumber: '',
    email: '',
    phoneNumber: '',
    activityHistory: []
  });

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
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
