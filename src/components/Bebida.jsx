import { Col, Card, Button } from "react-bootstrap";
import useBebidas from "../hooks/useBebidas";

const Bebida = ({ bebida }) => {

  const { strDrink, strDrinkThumb } = bebida

  const { handleModalClick } = useBebidas();

  console.log(bebida)

  return (
    <Col md={6} lg={3}>

      <Card className="mb-3">
        <Card.Img
          variant="top"
          src={strDrinkThumb}
          alt={`Imagen de ${strDrinkThumb}`}
        />

        <Card.Body>

          <Card.Title>{strDrink}</Card.Title>

          <Card.Text>Desripcion...</Card.Text>

          <Button
            variant={'warning'}
            className="w-100 p-1 text-uppercase"
            onClick={() => handleModalClick()}
          >
            Ver Receta
          </Button>
        </Card.Body>


      </Card>

    </Col>
  )
}

export default Bebida