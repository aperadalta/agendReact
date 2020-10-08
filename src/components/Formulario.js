import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({crearCita}) => {

    // Crear arreglo de citas
    const [cita, actualizarCita] = useState({
        nombre: '',
        apellido: '',
        fecha: '',
        hora: '',
        description: ''
    })

    const [error, actualizarError] = useState(false)

    // Funció que s'executa cada cop que l'usuari escriu en un input
    const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name] : e.target.value
        })
    }

    // Extreure els valors
    const {nombre, apellido, fecha, hora, description} = cita;

    // Quan l'usuari li doni al submit
    const submitCita = e => {
        e.preventDefault();

        // Validar
        if(nombre.trim() === '' || apellido.trim() === '' || fecha.trim() === '' || hora.trim() === '' || description.trim() === ''){
            actualizarError(true);
            return;
        }

        // Eliminar mensaje previo
        actualizarError(false);

        // Asignar un ID
        cita.id = uuidv4();

        // Crear la cita
        crearCita(cita);


        // Reiniciar el form
        actualizarCita({
            nombre: '',
            apellido: '',
            fecha: '',
            hora: '',
            description: ''
        })
    } 


    return (
        <Fragment>
            <h2>Crear</h2>
            {error ? <p className="error">Todos los campos son obligatorios</p> : null}

            <form
                onSubmit = {submitCita}
            >
                <br/>
                <input
                    type="text"
                    name="nombre"
                    className="input"
                    placeholder="nombre"
                    onChange={actualizarState}
                    value={nombre}
                /><br/>

                <br/>
                <input
                    type="text"
                    name="apellido"
                    className="input"
                    placeholder="apellido"
                    onChange={actualizarState}
                    value={apellido}
                /><br/>

                <br/>
                <input
                    type="date"
                    name="fecha"
                    className="input"
                    onChange={actualizarState}
                    value={fecha}
                /><br/>

                <br/>
                <input
                    type="time"
                    name="hora"
                    className="input"
                    onChange={actualizarState}
                    value={hora}
                /><br/>

                <br/>
                <textarea
                    name="description"
                    className="input"
                    onChange={actualizarState}
                    value={description}
                ></textarea><br/>
                <button
                    type="submit"
                    className="button"
                > 
                Agregar</button>
            </form>
        </Fragment>
    )
}

export default Formulario;