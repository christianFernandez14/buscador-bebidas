import { Modal, Image } from "react-bootstrap";
import useBebidas from "../hooks/useBebidas";


const ModalBebidas = () => {

  const { modal, handleModalClick, receta } = useBebidas();

  console.log(receta)

  return (
    <Modal show={modal} onHide={handleModalClick}>

      <Modal.Body>
        Cuerpo del Modal
      </Modal.Body>

    </Modal>
  )
}

export default ModalBebidas