import React, { createContext, useState } from 'react';
const MyContext = createContext();
const MyProvider = ({ children }) => {
  const [direction, setDirection] = useState("vertical-reverse");
  const [shouldRatate, setShouldRatate] = useState(false);


  return (
    <MyContext.Provider value={{ direction, setDirection, shouldRatate, setShouldRatate }}>
      {children}
    </MyContext.Provider>
  );
};
export { MyContext, MyProvider };
