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
                  return (
                    <tr key={proveedor.id}>
                      <td>{proveedor.nombre}</td>
                      <td>{proveedor.cif}</td>
                      <td onClick={() => props.handleDeleteProveedor(proveedor.id)}>Eliminar</td>
                   </tr>
                  )
              })}
          </tbody>
      </table>
  )
}

export default Tabla;