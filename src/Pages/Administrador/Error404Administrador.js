import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/error404.css';
import BarraDashboard from './BarraDashboard';

const Error404Admin = () => {

    return (
        <>
            <BarraDashboard />
            <div className="cont">
                <h2>Oops!  No se encuentra la p&aacute;gina</h2>
                <h1>404</h1>
                <p>No podemos encontrar la página que buscas, posiblemente esté en construcción</p>
                <Link to={'/Administrador'}>Ir al inicio</Link>
            </div>
        </>
    );
}

export default Error404Admin;