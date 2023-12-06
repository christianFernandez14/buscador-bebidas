import { Col, Card, Button } from "react-bootstrap";

const Bebida = ({ bebida }) => {

  const { strDrink, strDrinkThumb } = bebida

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
          >
            Ver Receta
          </Button>
        </Card.Body>


      </Card>

    </Col>
  )
}

export default Bebida