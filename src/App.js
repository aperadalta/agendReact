import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';
import PropTypes from 'prop-types';

function App(){

    // Citas en Local Storage
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));
    if(!citasIniciales) {
        citasIniciales = [];
    }

    // Arreglo de citas
    const [citas, guardarCitas] = useState(citasIniciales);

    // Funció que agafi les cites actuals i agregui la nova
    const crearCita = cita => {
        guardarCitas([
            ...citas, 
            cita
        ])
    }

    // Use Effect para realizar ciertas operactiones cuando el state cambia
    useEffect( () => {
        if(citasIniciales) {
            localStorage.setItem('citas', JSON.stringify(citas))
        } else {
            localStorage.setItem('citas', JSON.stringify([]));
        }
    }, [citas, citasIniciales] );

    //Funció que elimina cita per ID
    const eliminarCita = id => {
        const nuevasCitas = citas.filter(cita => cita.id !== id);
        guardarCitas(nuevasCitas);
    }

    // Missatge condicional
    const titulo = citas.length === 0 ? 'No hay planes' : 'Tus planes';

    return (
        <Fragment>
            <div className="global">
                <div className="column">
                    <Formulario 
                        crearCita={crearCita}
                    />

                </div>
                <div className="column">
                    <h2>{titulo}</h2>
                    <div className="citasHolder">
                        {citas.map(cita => (
                            <Cita
                                key = {cita.id}
                                cita = {cita}
                                eliminarCita = {eliminarCita}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}

export default App;