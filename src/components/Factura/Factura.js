import React from 'react'
import FacturaCabeceraTableContainer from '../../containers/Factura/FacturaCabeceraTableContainer'
import FacturaDetalleTableContainer from '../../containers/Factura/FacturaDetalleTableContainer'
import FacturaFooterTableContainer from '../../containers/Factura/FacturaFooterTableContainer'
import '../../styles/table.css'

import { Button, Table } from 'react-bootstrap';

const Factura = ({handlePrint, handleReset}) => (
  <div>
    <Table id="printTable" hover striped className="scroll">
      <FacturaCabeceraTableContainer />
      <FacturaDetalleTableContainer />
      <FacturaFooterTableContainer />
    </Table>
    <Button onClick={handlePrint}>Print me</Button>
    <Button onClick={handleReset}>Limpiar</Button>
  </div>
)

export default Factura
