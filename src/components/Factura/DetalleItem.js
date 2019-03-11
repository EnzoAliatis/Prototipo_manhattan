import React from 'react'
import '../../styles/table.css'

const DetalleItem = ({ name, price, quantity, onRemoveToCarClicked }) => (
  <tr onClick={onRemoveToCarClicked}>
    <th className="cant">{quantity}</th>
    <td className="descripcion">{name}</td>
    <td>&#36;{price.toFixed(2)}</td>
    <td>&#36;{(quantity*price).toFixed(2)}</td>
  </tr>
)

export default DetalleItem