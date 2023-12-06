import { useContext } from "react";
import BebidasContex from "../context/BebidasProvider";

const useBebidas = () => {
  return useContext(BebidasContex)
}

export default useBebidas;