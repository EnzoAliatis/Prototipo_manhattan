import { connect } from 'react-redux'
import { getTotal } from '../../reducers'
import FacturaFooterTable from '../../components/Factura/FacturaFooterTable'


const mapStateToProps = state => ({
  total: getTotal(state)
})

export default connect(mapStateToProps)(FacturaFooterTable)