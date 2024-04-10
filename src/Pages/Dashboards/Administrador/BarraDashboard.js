import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CSS/barraLateral.css';
import './CSS/contenido.css';

const BarraDashboard = () => {
    const [menuAbierto, setMenuAbierto] = useState(false);

    const toggleMenu = () => {
        setMenuAbierto(!menuAbierto);
    };

    return (
        <nav>
            <div className={`menu-dashboard ${menuAbierto ? 'open' : ''}`}>
                <div className="top-menu">
                    <div className="logo">
                        <img src={require("../img/logo.png")} alt="logo" />
                        <span>TechBeauty</span>
                    </div>
                    <div className="toggle" onClick={toggleMenu}>
                        <i className={`bi ${menuAbierto ? 'bi-x' : 'bi-list'}`}></i>
                    </div>
                </div>
                <div className="menu">
                    <div className="enlace">
                        <Link to="/Admin" className="inicio">
                            <i className="bi bi-house-door-fill"></i>
                            <span>Inicio</span>
                        </Link>
                    </div>
                    <div className="enlace list__item">
                        <div className="list__button list__button--click">
                            <i className="bi bi-box2-fill"></i>
                            <span>Productos</span>
                            <i className="bi bi-arrow-down"></i>
                        </div>
                        <ul className="list__show">
                            <li className="list__inside">
                                <Link to="/Admin/CrearProducto" className="nav__link nav__link--inside">Registrar Producto</Link>
                            </li>
                            <li className="list__inside">
                                <Link to="/Admin/ListarProductos" className="nav__link nav__link--inside">Consultar Producto</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="enlace list__item">
                        <div className="list__button list__button--click">
                            <i className="bi bi-file-earmark-person-fill"></i>
                            <span>Proveedores</span>
                            <i className="bi bi-arrow-down"></i>
                        </div>
                        <ul className="list__show">
                            <li className="list__inside">
                                <Link to="/Admin/AgregarProveedor" className="nav__link nav__link--inside">Agregar Proveedor</Link>
                            </li>
                            <li className="list__inside">
                                <Link to="/Admin/ConsultarProveedores" className="nav__link nav__link--inside">Consultar Proveedores</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="enlace list__item">
                        <div className="list__button list__button--click">
                            <i className="bi bi-bag-fill"></i>
                            <span>Compras</span>
                            <i className="bi bi-arrow-down"></i>
                        </div>
                        <ul className="list__show">
                            <li className="list__inside">
                                <Link to="/Admin/RegistrarCompra" className="nav__link nav__link--inside">Registrar Compra</Link>
                            </li>
                            <li className="list__inside">
                                <Link to="/Admin/BuscarCompra" className="nav__link nav__link--inside">Buscar Compra</Link>
                            </li>
                            <li className="list__inside">
                                <Link to="/Admin/VentasRegistradas" className="nav__link nav__link--inside">Ventas Registradas</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="enlace">
                        <Link to="/Admin/DatosPersonales" className="datos">
                            <i className="bi bi-card-text"></i>
                            <span>Datos Personales</span>
                        </Link>
                    </div>
                    <div className="enlace">
                        <div className="CS">
                            <div className="cerrarSesion">
                                <Link to="/CerrarSesion" className="cerrarS">
                                    <i className="bi bi-power"></i>
                                    <span>Cerrar Sesión</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default BarraDashboard;
