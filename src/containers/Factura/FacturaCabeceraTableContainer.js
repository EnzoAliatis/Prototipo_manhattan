import React, { Component } from 'react'
import { connect } from 'react-redux'
import FacturaCabeceraTable from '../../components/Factura/FacturaCabeceraTable'
import moment from 'moment';
import localization from 'moment/locale/es'
import { saveClientData } from '../../actions'

class FacturaCabeceraTableContainer extends Component {

  componentDidMount() {
    document.getElementById('rucCliente').textContent = this.props.clientInfo.ruc
    document.getElementById('nombreCliente').textContent = this.props.clientInfo.cliente
    document.getElementById('direccionCliente').textContent = this.props.clientInfo.direccion
    document.getElementById('telfCliente').textContent = this.props.clientInfo.telf
    document.title = this.props.clientInfo.cliente || 'Consumidor Final'
  }

  render() {
    return (
      <FacturaCabeceraTable
        handleChange={setTitle}
        currentDay={date}
        handleOnInput={setTitle}
        handleBlur={() => this.props.saveClientData(getClientInfo())}
      />
    )
  }
}

const setTitle = () => {
  document.title = document.getElementById('nombreCliente').textContent
}

const getClientInfo = () => {
  const ruc = document.getElementById('rucCliente').textContent || ''
  const cliente = document.getElementById('nombreCliente').textContent || ''
  const direccion = document.getElementById('direccionCliente').textContent || ''
  const telf = document.getElementById('telfCliente').textContent || ''

  const data = {
    ruc,
    cliente,
    direccion,
    telf
  }
  return data
}

const mapStateToProps = state => ({
  clientInfo: state.clientForm
})

const mapDispatchToProps = dispatch => ({
  saveClientData: data => dispatch(saveClientData(data))
})

const date = moment().locale("es", localization).format('LL')

export default connect(mapStateToProps, mapDispatchToProps)(FacturaCabeceraTableContainer)