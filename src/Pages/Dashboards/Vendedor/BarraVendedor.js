import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CSS/barraLateral.css';

const BarraVendedor = () => {
    const [menuAbierto, setMenuAbierto] = useState(false);

    const toggleMenu = () => {
        setMenuAbierto(!menuAbierto);
    };

    return (
        <nav>
            <div className={`menu-vendedor ${menuAbierto ? 'open' : ''}`}>
                <div className="top-menu">
                    <div className="logo">
                        <img src={require("../../img/logo.png")} alt="logo" />
                        <span>TechBeauty</span>
                    </div>
                    <div className="toggle" onClick={toggleMenu}>
                        <i className={`bi ${menuAbierto ? 'bi-x' : 'bi-list'}`}></i>
                    </div>
                </div>
                <div className="menu">
                    <div className="enlace">
                        <Link to="/Inicio" className="inicio">
                            <i className="bi bi-house-door-fill"></i>
                            <span>Inicio</span>
                        </Link>
                    </div>
                    <div className="enlace">
                        <Link to="/ConsultarProductos" className="productos">
                            <i className="bi bi-search"></i>
                            <span>Consultar Productos</span>
                        </Link>
                    </div>
                    <div className="enlace">
                        <Link to="/RegistrarVenta" className="venta">
                            <i className="bi bi-cash"></i>
                            <span>Registrar Venta</span>
                        </Link>
                    </div>
                    <div className="enlace">
                        <Link to="/ConsultarVentas" className="consultar-ventas">
                            <i className="bi bi-cart4"></i>
                            <span>Consultar Ventas</span>
                        </Link>
                    </div>
                    <div className="enlace">
                        <Link to="/BuscarVenta" className="buscar-venta">
                            <i className="bi bi-search"></i>
                            <span>Buscar Venta</span>
                        </Link>
                    </div>
                    <div className="enlace">
                        <Link to="/SugerirPromociones" className="sugerir-promociones">
                            <i className="bi bi-gift"></i>
                            <span>Sugerir Promociones</span>
                        </Link>
                    </div>
                    <div className="enlace">
                        <Link to="/DatosPersonales" className="datos-personales">
                            <i className="bi bi-card-text"></i>
                            <span>Datos Personales</span>
                        </Link>
                    </div>
                    <div className="enlace">
                        <Link to="/CerrarSesion" className="cerrar-sesion">
                            <i className="bi bi-power"></i>
                            <span>Cerrar Sesión</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default BarraVendedor;
