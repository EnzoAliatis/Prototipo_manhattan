import React from 'react'
import { connect } from "react-redux";

import { Grid, Row, Col, Table } from 'react-bootstrap';
import RegistroContainer from '../../containers/Accounting/RegistroContainer';

import FacturaCabeceraTable from '../../components/Factura/FacturaCabeceraTable'
import FacturaDetalleTable from '../../components/Factura/FacturaDetalleTable'
import FacturaFooterTable from '../../components/Factura/FacturaFooterTable'

import '../../styles/accounting.css'


const RegistroPageContainer = ({selected}) => (
  <Grid>
    <Row>
      <Col xs={12} md={7} className="registro">
        <RegistroContainer />
      </Col>
      <Col xs={12} md={5}>
        <Table striped>
          <FacturaCabeceraTable />
          <FacturaDetalleTable 
            products={selected[0].detalle}
            onRemoveToCarClicked={() => ''}
          />
          <FacturaFooterTable 
            total={selected[0].valores.total}
          />
        </Table>
      </Col>
    </Row>
  </Grid>
)

const mapSateToProps = state => ({
  selected: state.accountSelected
})


export default connect(mapSateToProps)(RegistroPageContainer)
