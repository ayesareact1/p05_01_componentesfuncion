import React, {useState} from 'react';
import Tabla from './components/Tabla';

function App() {

  const proveedoresData = [
    { id: 1, nombre: 'Gas Natural', cif: 'A12345678' },
    { id: 2, nombre: 'Iberdrola', cif: 'A87654321' },
    { id: 3, nombre: 'Jazztel', cif: 'B12345678' },
    { id: 4, nombre: 'BBVA', cif: 'C12345678' },
]


  const [proveedores, setProveedores] = useState(proveedoresData); // useState devuelve un array con la propiedad como
                                                      // primer elemento y su método set como segundo
                                                      // a partir del argumento con el valor de inicialización
                                                      // que se le pasa.

  const handleDeleteProveedor = (id) => {
    const proveedoresActualizados = proveedores.filter(elem => elem.id !== id); 
    setProveedores(proveedoresActualizados);
  }

  return (
    <div className='container'>
      <Tabla proveedores={proveedores} handleDeleteProveedor={handleDeleteProveedor}/>
    </div>
  );
}

export default App;
