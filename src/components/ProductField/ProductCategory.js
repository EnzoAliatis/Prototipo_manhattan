import React from 'react'
import '../../styles/products.css'
import { ButtonGroup } from 'react-bootstrap';

const ProductCategory = ({ categoryName, children }) => (
  <div>
    <h3>{categoryName}</h3>
    <ButtonGroup>
      {children}
    </ButtonGroup>
  </div>
)

export default ProductCategory