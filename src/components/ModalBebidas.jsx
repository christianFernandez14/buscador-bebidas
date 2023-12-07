import { Modal, Image, ModalHeader, ModalTitle } from "react-bootstrap";
import useBebidas from "../hooks/useBebidas";


const ModalBebidas = () => {

  const { modal, handleModalClick, receta } = useBebidas();

  const { strDrinkThumb, strInstructions, strDrink} = receta;

  console.log(receta)

  const mostrarIngredientes = ()=> {
    let ingredientes = []

    for (let i = 1; i <= 15; i++) {
      if(receta[`strIngredient${i}`]){
        ingredientes.push(
          <li>{receta[`strIngredient${i}`]}  {receta[`strMeasure${i}`]}</li>
        )
      };
      
    }
    return ingredientes
  }

  return (
    <Modal show={modal} onHide={handleModalClick}>

      <Image
        src={strDrinkThumb}
        alt={`Imagen de la receta ${strDrink}`}

      />
      <Modal.Header>
        <Modal.Title>{strDrink}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="p-3">
          <h2>Instrucciones</h2>
          {strInstructions}
          <h2 className="mt-2">Ingredientes y Cantidades</h2>
          {mostrarIngredientes()}
        </div>
      </Modal.Body>

    </Modal>
  )
}

export default ModalBebidas