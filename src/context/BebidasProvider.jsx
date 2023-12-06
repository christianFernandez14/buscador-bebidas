import { useState, useEffect, createContext } from "react";
import axios from "axios";

const BebidasContex = createContext();

const BebidasProvider = ({ children }) => {

  

  return (
    <BebidasContex.Provider
      value={{
        
      }}
    >
      {children}
    </BebidasContex.Provider>
  )
}

export {
  BebidasProvider
}

export default BebidasContex