import React from 'react'
import { Table } from 'react-bootstrap'
const RegistroXDia = ({ fecha, children }) => (
  <div>
    <h3>{fecha}</h3>
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Cliente</th>
          <th>Cnt.Productos</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </Table>
  </div>
)

export default RegistroXDia