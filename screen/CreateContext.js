import React, { createContext, useState } from "react";

export const CreateContext = createContext();

export const Provider = ({ children }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState("1.490.000 đ");

  return (
    <CreateContext.Provider
      value={{
        selectedColor,
        setSelectedColor,
        selectedPrice,
        setSelectedPrice,
      }}
    >
      {children}
    </CreateContext.Provider>
  );
};
