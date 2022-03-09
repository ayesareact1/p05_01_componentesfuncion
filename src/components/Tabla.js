import React from 'react'

const Tabla = (props) => { // All credits to Antonio :)
  return (
      <table>
          <thead>
              <tr>
                  <th>Nombre</th>
                  <th>CIF</th>
                  <th></th>
              </tr>
          </thead>
          <tbody>
              {props.proveedores.map(proveedor => {
                  return <tr key="proveedor.cif">
                      <td>{proveedor.nombre}</td>
                      <td>{proveedor.cif}</td>
                      <td></td>
                  </tr>
              })}
          </tbody>
      </table>
  )
}

export default Tabla;