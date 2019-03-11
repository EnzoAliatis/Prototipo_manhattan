import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getTotal, getCarProducts } from '../../reducers'
import { removeToCar } from '../../actions'
import FacturaDetalleTable from '../../components/Factura/FacturaDetalleTable'

const FacturaDetalleTableContainer = ({products, total, removeToCar}) => {
  return (
    <FacturaDetalleTable
    products={products}
    total={total}
    onRemoveToCarClicked={removeToCar}
  />
  
  )
}

FacturaDetalleTableContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  })).isRequired,
  total: PropTypes.string,
}

const mapStateToProps = state => ({
  products: getCarProducts(state),
  total: getTotal(state)
})

const mapDispatchToProps = dispatch => ({
  removeToCar: id => dispatch(removeToCar(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(FacturaDetalleTableContainer)