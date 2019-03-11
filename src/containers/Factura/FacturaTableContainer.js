import React from 'react'
import { connect } from 'react-redux'

import { cleanCar, cleanClientData } from '../../actions'
import Factura from '../../components/Factura/Factura'
import { loadDB } from '../../Firebase'
import { getCarProducts, getTotal } from '../../reducers';



const FacturaTableContainer = ({ resetAll, products, total, clientData }) => (
  <Factura 
    handlePrint={() => printDiv(resetAll, products, total, clientData)}
    handleReset={() =>resetAll()}
  />
)

async function printDiv(resetAll, products, total, clientData) {
  const confirm = window.confirm('Esta seguro que desea cerrar la cuenta')
  if (confirm) {
    const db = await loadDB()
    if (!clientData.ruc) {
      clientData = {
        ruc: '9999999999',
        cliente: 'Consumidor Final',
        direccion: 'Manta',
        telf: '0980808088'
      }
    }
    const valores = {
      subtotal: (total - (total * 0.12)).toFixed(2),
      iva: (total * 0.12).toFixed(2),
      total: total
    }
    const factura = {
      fecha: new Date(),
      cabecera: clientData,
      detalle: [...products],
      valores: {...valores}
    }

    db.firestore().collection('accounting').add(factura)
      .then(docRef => console.log("Factura Almacenada Correctamente", docRef.id))
      .catch(error => console.error("Error adding document: ", error))

    const divToPrint = document.getElementById("printTable");
    const newWin = window.open("");
    document.getElementById('rucCliente').textContent === '' && setDataForm('consumidorFinal')
    newWin.document.write(divToPrint.outerHTML);
    newWin.print();
    resetAll()
    newWin.close();
    
  }
}


function setDataForm(option) {
  switch (option) {
    case 'limpiar':
      document.getElementById('rucCliente').textContent = ''
      document.getElementById('nombreCliente').textContent = ''
      document.getElementById('direccionCliente').textContent = ''
      document.getElementById('telfCliente').textContent = ''
      document.title='Consumidor Final'
      break
    case 'consumidorFinal':
      document.getElementById('rucCliente').textContent = '9999999999'
      document.getElementById('nombreCliente').textContent = 'Consumidor Final'
      document.getElementById('direccionCliente').textContent = 'Manta'
      document.getElementById('telfCliente').textContent = '0988888888'
      break
    default:
      console.log('Option not find')
      break
  }
}

const mapStateToProps = state => ({
  clientData: state.clientForm,
  products: getCarProducts(state),
  total: getTotal(state)
})


const mapDispatchToProps = dispatch => ({
  resetAll: () => {
    dispatch(cleanCar())
    dispatch(cleanClientData())
    setDataForm('limpiar')
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(FacturaTableContainer)