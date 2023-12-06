import { useState } from "react";
import { Button, Form, Row, Col, FormGroup, FormLabel, FormControl, FormSelect, Alert } from 'react-bootstrap'
import useCategorias from '../hooks/useCategorias'
import useBebidas from "../hooks/useBebidas";

const Formulario = () => {

  const [busqueda, setbusqueda] = useState(
    {
      nombre: '',
      categoria: ''
    }
  )

  const [alerta, setAlerta] = useState('');

  const { categorias } = useCategorias();

  const { obtenerBebidas } = useBebidas();


  const handleBusqueda = e => {
    setbusqueda({
      ...busqueda,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();

    if (Object.values(busqueda).includes('')) {
      setAlerta('Todos los campos son obligartorios')

      return;
    }
    setAlerta('')

    obtenerBebidas(busqueda)
    
  }

  return (
    <>

      <Form
        onSubmit={handleSubmit}
      >
        {alerta && <Alert variant="danger" className="text-center">{alerta}</Alert>}
        <Row>
          <Col md={6}>
            <FormGroup className='mb-3'>
              <FormLabel htmlFor='nombre'>Nombre Bebida</FormLabel>

              <FormControl
                id={'nombre'}
                type='text'
                placeholder='Ej: Tequila, Vodka, etc..'
                name='nombre'
                value={busqueda.nombre}
                onChange={handleBusqueda}

              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup className='mb-3'>
              <FormLabel htmlFor='categoria'>Categoria Bebida</FormLabel>

              <FormSelect
                id='categoria'
                name='categoria'
                value={busqueda.categoria}
                onChange={handleBusqueda}
              >
                <option value="">- Selecciona la Categoría -</option>
                {
                  categorias.map(categoria => (
                    <option
                      key={categoria.strCategory}
                      value={categoria.strCategory}
                    >{categoria.strCategory}</option>
                  ))

                }
              </FormSelect>
            </FormGroup>
          </Col>
        </Row>

        <Row className='justify-content-end'>
          <Col md={3}>
            <Button
              variant='danger'
              className='text-uppercase w-100'
              type="submit"
            >
              Buscar Bebidas
            </Button>
          </Col>
        </Row>

      </Form>
    </>
  )
}

export default Formulario