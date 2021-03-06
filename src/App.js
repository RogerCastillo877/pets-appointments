import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita'
function App() {

  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales) {
    citasIniciales = [];
  }

  const [citas, guardarCitas] = useState([]);

  useEffect( () => {
    // console.log('Documento listo o algo paso');
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));

    if(citasIniciales){
      localStorage.setItem('citas', JSON.stringify(citas));
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas, citasIniciales]);

  const crearCita = cita => {
    // console.log(cita)
    guardarCitas([
      ...citas,
      cita
    ])
  }

  const eliminarCita = id => {
    // console.log(id);
    const nuevasCitas = citas.filter(cita => cita.id !== id );
    guardarCitas(nuevasCitas);
  }

  //console.log(citas.length);
  const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas';
  return (
    <Fragment>
      <h1>Administrador</h1>

      <div className="container">
        <div className="root">
          <div className="one-half column">
            <Formulario
            crearCita={crearCita}
            />
          </div>

          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map(cita =>(
              <Cita
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
