import { useState, useEffect, createContext } from "react";
import axios from "axios";

const BebidasContex = createContext();

const BebidasProvider = ({ children }) => {

  const [bebidas, setBebidas] = useState([])
  const [modal, setModal] = useState(false)
  const [bebidaId, setBebidaId] = useState(null)
  const [receta, setReceta] = useState([])
  const [totalBebidas, setTotalBebidas] = useState(0)

  useEffect(() => {
    const obtenerRecetaById = async () => {
      if (!bebidaId) return
      try {
        const URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${bebidaId}`
        const { data } = await axios(URL)
        const { drinks } = data

        setReceta(drinks[0])

      } catch (error) {
        console.log(error)
      }
    }
    obtenerRecetaById()

  }, [bebidaId])

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

  const handleModalClick = () => {
    setModal(!modal)
  }

  const handleBebidaId = id => {
    setBebidaId(id)
  }

  return (
    <BebidasContex.Provider
      value={{
        obtenerBebidas,
        bebidas,
        totalBebidas,
        modal,
        handleModalClick,
        handleBebidaId,
        receta
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