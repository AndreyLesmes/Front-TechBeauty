import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/contenido.css';
import BarraVendedor from './BarraVendedor';

const Vendedor = () => {
    return (
        <>
            <BarraVendedor />
            <div className="bienvenido">
                <h1 className="titulo">Bienvenido al Sistema, Usuario Vendedor</h1>
                <br />
                <p className="contexto">
                Como vendedor, tu principal función es impulsar las ventas y contribuir al crecimiento del negocio. 
                Para lograrlo, realizas diversas actividades orientadas a satisfacer las necesidades de los clientes y a maximizar las oportunidades de venta. 
                Algunas de tus responsabilidades incluyen:
                </p>
                <h3>Acciones Posibles a Realizar</h3>
                <div className="botonesAcciones">
                    <div className="botones">
                        <Link to="/ConsultarProductos">
                            <i className="bi bi-search"></i>
                            <span>Consultar Productos</span>
                        </Link>
                    </div>
                    <div className="botones">
                        <Link to="/RegistrarVenta">
                            <i className="bi bi-cash"></i>
                            <span>Registrar Venta</span>
                        </Link>
                    </div>
                    <div className="botones">
                        <Link to="/ConsultarVentas">
                            <i className="bi bi-cart4"></i>
                            <span>Consultar Ventas</span>
                        </Link>
                    </div>
                    <div className="botones">
                        <Link to="/BuscarVenta">
                            <i className="bi bi-search"></i>
                            <span>Buscar Venta</span>
                        </Link>
                    </div>
                    {/*<div className="botones">
                        <Link to="/BuscarVenta">
                            <i className="bi bi-search"></i>
                            <span>Sugerir Promociones</span>
                        </Link>
                    </div>*/}
                    <div className="botones">
                        <Link to="/DatosPersonales">
                            <i className="bi bi-card-text"></i>
                            <span>Datos Personales</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Vendedor;
