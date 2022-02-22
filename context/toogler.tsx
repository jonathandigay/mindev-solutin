import React, { useContext, createContext, useState, ContextType } from "react";

// initialize
export const ToogleContext = createContext(false);

export const useToogleContext = () => {
  return useContext(ToogleContext);
};
