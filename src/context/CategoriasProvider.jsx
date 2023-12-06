import { useState, createContext } from "react";
import axios from "axios";

const CategoriasContex = createContext();

const CategoriasProvider = ({ children }) => {
  return (
    <CategoriasContex.Provider
      value={{

      }}
    >
      {children}
    </CategoriasContex.Provider>
  )
}

export {
  CategoriasProvider
}

export default CategoriasContex