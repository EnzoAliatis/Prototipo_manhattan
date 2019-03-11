import React from 'react'

const RegistroDataTotal = ({totalProducts, totalVentas}) => (
  <tr>
    <td></td>
    <td><strong>Totales</strong></td>
    <td><strong>{totalProducts}</strong></td>
    <td><strong>&#36;{totalVentas}</strong></td>
  </tr>
  
)

export default RegistroDataTotal