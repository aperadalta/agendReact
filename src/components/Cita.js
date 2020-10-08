import React from 'react';
import PropTypes from 'prop-types';

const Cita = ({cita, eliminarCita}) => (
    <div className = "cita">
        <p><b>Nom: </b><span>{cita.nombre}</span></p>
        <p><b>Apellido: </b><span>{cita.apellido}</span></p>
        <p><b>Dia: </b><span>{cita.fecha}</span></p>
        <p><b>Hora: </b><span>{cita.hora}</span></p>
        <p><b>Descripción: </b><span>{cita.description}</span></p>

        <button
            className="button"
            onClick={() => eliminarCita(cita.id)}
        >Eliminar &times;</button>
    </div>
);

Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}

export default Cita;