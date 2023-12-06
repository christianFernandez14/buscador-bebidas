import { useState, useEffect, createContext } from "react";
import axios from "axios";

const BebidasContex = createContext();

const BebidasProvider = ({ children }) => {

  const [bebidas, setBebidas] = useState([])
  const [totalBebidas, setTotalBebidas] = useState(0)
  const [modal, setModal] = useState(false)

  const obtenerBebidas = async datos => {

    try {

      const URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria}`

      const { data } = await axios(URL)
      const { drinks } = data
      setBebidas(drinks)
      setTotalBebidas(drinks.length)

    } catch (error) {
      console.log(error)
    }
  }

  const handleModalClick =()=> {
    setModal(!modal)
  }

  return (
    <BebidasContex.Provider
      value={{
        obtenerBebidas,
        bebidas,
        totalBebidas,
        handleModalClick,
        modal
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