import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CSS/contenido.css';
import BarraDashboard from './BarraDashboard';

const Administrador = () => {
    return (
        <div>
            <BarraDashboard />
            <div className="bienvenido">
                <h1 className="titulo">Bienvenido al Sistema, Usuario Administrador</h1>
                <br />
                <p className="contexto">
                    Un administrador, al acceder al sistema, se beneficia de un inicio de sesión seguro mediante la
                    autenticación con su correo electrónico y contraseña, lo que garantiza la protección de su cuenta y
                    la confidencialidad de sus datos personales. Además, el rol de administrador abarca la gestión de
                    productos, permitiéndole agregar nuevos productos al sistema con detalles vitales como nombre,
                    precio, cantidad, descripción, unidad de medida y referencia. Así mismo, tiene la capacidad de
                    buscar y consultar productos existentes, lo que simplifica el seguimiento y la actualización del
                    inventario, contribuyendo a un control eficaz. Además, la gestión de proveedores es una
                    responsabilidad clave del administrador, ya que puede añadir nuevos proveedores con su información
                    de contacto y detalles comerciales, y acceder a registros de proveedores existentes cuando sea
                    necesario.
                </p>
                <h3>Acciones Posibles a Realizar</h3>
                <div className="botonesAcciones">
                    <div className="botones">
                        <Link to="/Admin/CrearProducto">
                            <i className="bi bi-box2-fill"></i>
                            <span>Registrar Producto</span>
                        </Link>
                    </div>
                    <div className="botones">
                        <Link to="/Admin/ListarProductos">
                            <i className="bi bi-search"></i>
                            <span>Consultar Producto</span>
                        </Link>
                    </div>
                    <div className="botones">
                        <Link to="/Admin/RegistrarProveedor">
                            <i className="bi bi-file-earmark-person-fill"></i>
                            <span>Agregar Proveedor</span>
                        </Link>
                    </div>
                    <div className="botones">
                        <Link to="/Admin/ListarProveedores">
                            <i className="bi bi-file-earmark-person-fill"></i>
                            <span>Consultar Proveedores</span>
                        </Link>
                    </div>
                    <div className="botones">
                        <Link to="/Admin/Error404">
                            <i className="bi bi-bag-plus-fill"></i>
                            <span>Registrar Compra</span>
                        </Link>
                    </div>
                    <div className="botones">
                        <Link to="/Admin/Error404">
                            <i className="bi bi-search"></i>
                            <span>Buscar Compra</span>
                        </Link>
                    </div>
                    <div className="botones">
                        <Link to="/Admin/Error404">
                            <i className="bi bi-bag-check-fill"></i>
                            <span>Ventas Realizadas</span>
                        </Link>
                    </div>
                    <div className="botones">
                        <Link to="/Admin/DatosPersonales">
                            <i className="bi bi-card-text"></i>
                            <span>Datos Personales</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Administrador;
