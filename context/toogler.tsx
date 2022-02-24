import React, { useContext, createContext, useState, ContextType } from "react";
import { contexttype } from "../interface";

// initialize
const ToogleContext = createContext({} as any);

export const useToogleContext = () => {
  return useContext(ToogleContext);
};

export const ToogleProvider = ({ children }: any) => {
  const [isContact, setIsContact] = useState<boolean>(false);

  const values = {
    isContact,
    setIsContact,
  };

  return (
    <ToogleContext.Provider value={values}>{children}</ToogleContext.Provider>
  );
};
