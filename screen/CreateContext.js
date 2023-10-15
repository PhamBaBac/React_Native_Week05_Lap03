import React, { createContext, useState } from "react";

export const CreateContext = createContext();

export const Provider = ({ children }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState("1.490.000 đ");
  const [selectedColorName, setSelectedColoName] = useState(null);

  return (
    <CreateContext.Provider
      value={{
        selectedColor,
        setSelectedColor,
        selectedPrice,
        setSelectedPrice,
        selectedColorName,
        setSelectedColoName,
      }}
    >
      {children}
    </CreateContext.Provider>
  );
};
