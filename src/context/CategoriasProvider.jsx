import { useState, useEffect, createContext } from "react";
import axios from "axios";

const CategoriasContex = createContext();

const CategoriasProvider = ({ children }) => {

  const [categorias, setCategorias] = useState([])

  const URL_CATEGORIAS = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'

  const obtenerCategorias = async () => {
    try {

      const { data } = await axios(URL_CATEGORIAS)
      setCategorias(data.drinks)

    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    obtenerCategorias()

  }, [])


  return (
    <CategoriasContex.Provider
      value={{
        categorias
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