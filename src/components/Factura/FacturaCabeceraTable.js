import React from 'react'

const FacturaCabeceraTable = ({ currentDay, handleOnInput, handleBlur }) => (
  <thead>
    <tr>
      <td><label>Fecha:</label></td>
      <td 
        id="fechaCliente"
        colSpan="3">{currentDay}</td>
    </tr>
    <tr>
      <td><label>Ruc:</label></td>
      <td
        id="rucCliente"
        colSpan="3"
        contentEditable
        onBlur={handleBlur}
      ></td>
    </tr>
    <tr>
      <td><label>Cliente:</label></td>
      <td
        id="nombreCliente"
        colSpan="3"
        contentEditable
        onInput={handleOnInput}
        onBlur={handleBlur}
      >
      </td>
    </tr>
    <tr>
      <td><label>Direccion:</label></td>
      <td
        id="direccionCliente"
        colSpan="3"
        contentEditable
        onBlur={handleBlur}
      ></td>
    </tr>
    <tr>
      <td><label>Telf:</label></td>
      <td
        id="telfCliente"
        colSpan="3"
        contentEditable
        onBlur={handleBlur}
      ></td>
    </tr>
  </thead>
)

export default FacturaCabeceraTable