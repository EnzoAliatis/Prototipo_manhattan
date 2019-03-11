import React from 'react'

import { Grid, Row, Col } from 'react-bootstrap';
import ProductsContainer from '../../containers/ProductsContainer';
import FacturaTableContainer from '../../containers/Factura/FacturaTableContainer';


const WorkPage = () => (
  <Grid>
    <Row>
      <Col xs={12} md={7}>
        <ProductsContainer />
      </Col>
      <Col xs={12} md={5}>
        <FacturaTableContainer />
      </Col>
    </Row>
  </Grid>
)

export default WorkPage