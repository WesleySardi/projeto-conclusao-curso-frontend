import React, { createContext, useContext } from 'react';

const ScreenPositionContext = createContext();

export const useScreenPositionContext = () => {
  return useContext(ScreenPositionContext);
};
