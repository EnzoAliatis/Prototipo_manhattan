import React from 'react'

import DetalleItem from './DetalleItem'
import '../../styles/table.css'

const FacturaDetalleTable = ({ products, onRemoveToCarClicked }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <DetalleItem
        key={product.id}
        id={product.id}
        name={product.name}
        price={product.price}
        quantity={product.quantity}
        onRemoveToCarClicked={() => onRemoveToCarClicked(product.id)}
      />
    )
  ) : (
      <tr>
        <td className="cant"> - </td>
        <td className="descripcion"> - </td>
        <td> - </td>
        <td> - </td>
      </tr>
    )


  return (
    <tbody>
    <tr >
        <td className="cant"></td>
        <td className="descripcion"></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <th className="cant">Cant</th>
        <th className="descripcionTitle">Descripcion</th>
        <th>P.Unit</th>
        <th>V.Total</th>
      </tr>
      {nodes}
      <tr >
        <td className="cant"></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </tbody>

  )
}



export default FacturaDetalleTable