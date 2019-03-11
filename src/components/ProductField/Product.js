import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'
import '../../styles/botones.css'

const Product = ({name, price, onAddToCarClicked}) => (
  <Button
    className="boton"
    onClick={onAddToCarClicked}
  >
    {name} - &#36;{price}
  </Button>
)

Product.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  onClick: PropTypes.func
}

export default Product