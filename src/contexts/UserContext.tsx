import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    familyContact: '',
    bloodType: '',
    healthIssues: '',
    alergies: '',
    adress: '',
    activityHistory: [], // Yeni alan eklendi
  });

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
