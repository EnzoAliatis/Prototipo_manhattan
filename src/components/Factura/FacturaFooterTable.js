import React from 'react'

const FacturaFooterTable = ({ total }) => (
  <tfoot>
    <tr>
      <td className="cant"></td>
      <td></td>
      <td><label>SubTotal:</label></td>
      <td>&#36;{(total - (total * 0.12)).toFixed(2)}</td>
    </tr>
    <tr>
      <td className="cant"></td>
      <td className="descripcion"></td>
      <td><label>IVA 12%:</label></td>
      <td>&#36;{(total * 0.12).toFixed(2)}</td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td><label>Total:</label></td>
      <td>&#36;{total}</td>
    </tr>
  </tfoot>
)

export default FacturaFooterTable