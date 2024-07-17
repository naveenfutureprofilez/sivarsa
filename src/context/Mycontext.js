import React, { createContext, useState } from 'react';
const MyContext = createContext();
const MyProvider = ({ children }) => {
  const [direction, setDirection] = useState('vertical');
  return (
    <MyContext.Provider value={{ direction, setDirection }}>
      {children}
    </MyContext.Provider>
  );
};
export { MyContext, MyProvider };
