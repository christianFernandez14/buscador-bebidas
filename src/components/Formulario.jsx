import { Button, Form, Row, Col, FormGroup, FormLabel, FormControl, FormSelect } from 'react-bootstrap'
import useCategorias from '../hooks/useCategorias'

const Formulario = () => {

  const { categorias } = useCategorias()

  console.log(categorias)


  return (
    <Form>
      <Row>
        <Col md={6}>
          <FormGroup className='mb-3'>
            <FormLabel htmlFor='nombre'>Nombre Bebida</FormLabel>

            <FormControl
              id={'nombre'}
              type='text'
              placeholder='Ej: Tequila, Vodka, etc..'
              name='nombre'

            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup className='mb-3'>
            <FormLabel htmlFor='categoria'>Nombre Bebida</FormLabel>

            <FormSelect
              id='categoria'
              name='categoria'
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
          >
            Buscar Bebidas
          </Button>
        </Col>
      </Row>

    </Form>
  )
}

export default Formulario