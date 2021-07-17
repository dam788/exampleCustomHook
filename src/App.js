import { useState } from 'react';
import { Formulario } from './componente/formulario';
import Header from './componente/header';

function App() {
  // aca es donde tenes que hacer tu estado y despues pasarlo por props
  const [data, setData] = useState([]);
  console.log(data);
  
  return (
    <>
      <Header titulo='Clima React App' />
      <div className='contenedor-form'>
        <div className='container'>
          <div className='row'>
            <div className='col m6 s12'>
              <Formulario setData={setData} />
            </div>
            <div className='col m6 s12'>
              {/* esta linea de te tire de ejemplo la podes borrar y armar tu componente */}
              {data.length !== 0 && <h1>{data.name}</h1>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
