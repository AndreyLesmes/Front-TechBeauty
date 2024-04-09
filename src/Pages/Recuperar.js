import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/recuperar.css';

const Recuperar = () => {
    return (
        <>
            <form className="recuperar">
                <div className="box">
                    <h2>Recuperar Contraseña</h2>
                    <i className="fa-solid fa-desktop"></i>
                </div>
                <div className="box">
                    <br />
                    <div className="recu">
                        <label htmlFor="usuario">Correo de recuperación</label>
                        <br /><br />
                        <input className="control" type="email" id="usuario" name="usuario" placeholder="Ingrese su Correo" required />
                        <br /><br />
                    </div>
                    <div className="recu">
                        <button className="submit">Enviar</button>
                        <button className="submit1"><Link to={'/'}>Volver</Link></button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Recuperar;
