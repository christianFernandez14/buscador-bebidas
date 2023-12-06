

const Bebida = ({ bebida }) => {

  const {strDrink, strDrinkThumb } = bebida

  console.log(bebida)

  return (
    <div>{strDrink}</div>
  )
}

export default Bebida