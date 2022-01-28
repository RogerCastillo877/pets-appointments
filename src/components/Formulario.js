import { Fragment, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const Formulario = ({crearCita}) => {

    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })

    const [error, actualizarError] = useState(false);

    const actualizarState = (e) => {
        // console.log('escribiendo');
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    const  { mascota, propietario, fecha, hora, sintomas } = cita;

    const submitCita = (e) => {
        // alert('enviando');
        e.preventDefault();

        // console.log('enviando form');
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
            // console.log('Hay un error')
            actualizarError(true);
            return;
        }

        actualizarError(false);

        cita.id = uuidv4();
        // console.log(cita);

        crearCita(cita);

        actualizarCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })
    }

    return ( 
        <Fragment>
            <h2>Crear Cita</h2>

            { error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}

            <form
                onSubmit={submitCita}
            >
                <label>Nombre Mascotas</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                    value={ mascota }
                />

                <label>Nombre Dueños</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño"
                    onChange={actualizarState}
                    value={ propietario }
                />

                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={ fecha }
                />

                <label>Hora</label>
                <input
                    type="rime"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={ hora }
                />

                <label>Síntomas</label>
                <textarea
                className="u-full-width"
                name="sintomas"
                onChange={actualizarState}
                value={ sintomas }>
                </textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Cita</button>
            </form>
        </Fragment>
     );
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}

export default Formulario;