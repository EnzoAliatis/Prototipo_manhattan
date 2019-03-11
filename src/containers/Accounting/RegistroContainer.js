import React, { Component } from 'react'

import { connect } from 'react-redux'
import { loadDB } from '../../Firebase'

import RegistroXDia from '../../components/Accounting/RegistroXDia';
import moment from 'moment';
import localization from 'moment/locale/es'
import RegistroData from '../../components/Accounting/RegistroData';
import uuid from 'uuid/v4'
import RegistroDataTotal from '../../components/Accounting/RegistroDataTotal';
import "../../styles/loader.css"
import { showAccontData, cleanAccountData } from '../../actions'

class RegistroContainer extends Component {
  state = {
    facturas: [],
    isFetching: false,
    isFeched: false,
    byDate: {}
  }

  async fetchAccointing() {
    this.setState({ isFetching: true })
    const db = await loadDB()
    const accountingRef = db.firestore().collection('accounting')
    accountingRef.get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        this.setState({
          facturas: [...this.state.facturas, doc.data()]
        })
      })
      this.setState({ isFetching: false })
      this.setState({ isFeched: true })
      this.setState({ byDate: this.sortByDate(this.state.facturas) })
    });
  }

  sortByDate(factura) {
    return {
      ...factura.reduce((obj, item) => {
        obj[moment(item.fecha).locale("es", localization).format('LL')] = obj[moment(item.fecha).locale("es", localization).format('LL')] || [];
        obj[moment(item.fecha).locale("es", localization).format('LL')].push(item);
        return obj
      }, [])
    }
  }

  getTotal(date) {
    let acomulado = 0.0
    this.state.byDate[date].map(i => (
      acomulado += parseFloat(i.valores.total)
    ))
    return acomulado.toFixed(2)
  }

  getTotalProductsByDate(date) {
    let acomulado = 0
    this.state.byDate[date].map(i => (
      i.detalle.map(i => (
        acomulado += i.quantity
      ))
    ))
    return acomulado
  }

  getTotalProductsByDetalle(detalle) {
    let acomulado = 0
    detalle.map(i =>
      acomulado += i.quantity
    )
    return acomulado
  }

  findByDate(fecha) {
    const encontrado = this.state.facturas.filter(item => item.fecha === fecha)
    document.getElementById('fechaCliente').textContent = moment(encontrado[0].fecha).format('LLL')   
    document.getElementById('rucCliente').textContent = encontrado[0].cabecera.ruc
    document.getElementById('nombreCliente').textContent = encontrado[0].cabecera.cliente
    document.getElementById('direccionCliente').textContent = encontrado[0].cabecera.direccion
    document.getElementById('telfCliente').textContent = encontrado[0].cabecera.telf
    return encontrado
  }

  componentDidMount() {
    this.fetchAccointing()
  }

  componentWillUnmount() {
    this.props.cleanAccountData()
  }

  render() {
    const accointingItem = this.state.isFetching ? (
      <div className="stack">
        <div className="book"></div>
        <div className="book"></div>
        <div className="book"></div>
        <div className="book"></div>
        <div className="book"></div>
      </div>
    ) : (
        !this.state.facturas ? (<h1>No hay Datos</h1>) : (
          Object.keys(this.state.byDate)
            .sort()
            .reverse()
            .map(item => (
              <RegistroXDia
                key={item}
                fecha={item}
              >
                {
                  this.state.byDate[item]
                    .sort((a, b) => a.valores.total - b.valores.total)
                    .map((i, x) =>
                      <RegistroData
                        key={uuid()}
                        index={x + 1}
                        cliente={i.cabecera.cliente}
                        narticulos={this.getTotalProductsByDetalle(i.detalle)}
                        total={i.valores.total}
                        handleClick={() => this.props.showAccontData(this.findByDate(i.fecha))}
                      />

                    )
                }
                <RegistroDataTotal
                  totalProducts={this.getTotalProductsByDate(item)}
                  totalVentas={this.getTotal(item)}
                />
              </RegistroXDia>
            ))
        )
      )
    return (
      <div>
        {accointingItem}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  accountSelected: state.accountSelected
})

const mapDispatchToProps = dispatch => ({
  showAccontData: data => dispatch(showAccontData(data)),
  cleanAccountData: () => dispatch(cleanAccountData())
})


export default connect(mapStateToProps,mapDispatchToProps)(RegistroContainer)



