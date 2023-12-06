import { Button, Form, Row, Col, FormGroup, FormLabel, FormControl, FormSelect } from 'react-bootstrap'

const Formulario = () => {
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
            </FormSelect>
          </FormGroup>
        </Col>
      </Row>
      {/* <Button
        as={'input'}
        type={'button'}
        value={'Buscar Bebida'}
      /> */}
    </Form>
  )
}

export default Formulario