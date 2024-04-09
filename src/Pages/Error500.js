import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/error500.css';

const Error500 = () => {
    return (
        <>
            <div className="cont">
                <h2>Error 500! Error Interno del Servidor</h2>
                <section className="error-container">
                    <span><span>5</span></span>
                    <span>0</span>
                    <span><span>0</span></span>
                </section>
                <p>Se ha producido un error interno en el servidor y no se puede completar la solicitud en este momento.<br/> Intente nuevamente más tarde.</p>
                <Link to={'/'}>Ir al inicio</Link>
            </div>
        </>
    );
}

export default Error500;
