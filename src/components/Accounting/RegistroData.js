import React from 'react'

const RegistroData = ({index, cliente, narticulos, total, handleClick}) => (
  <tr onClick={handleClick}>
    <td>{index}</td>
    <td>{cliente}</td>
    <td>{narticulos}</td>
    <td>&#36;{total}</td>
  </tr>
)

export default RegistroData