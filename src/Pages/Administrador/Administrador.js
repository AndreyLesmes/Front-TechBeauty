import React, { useEffect } from 'react';
import './CSS/contenido.css';
import BarraDashboard from './BarraDashboard';

const Administrador = () => {
    return (
        <div>
            <BarraDashboard />
            <div className="bienvenido">
                <h1 className="titulo">Bienvendo al Sistema, Usuari@ Administrador</h1>
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
                        <a href="registrar_Producto.php">
                            <i className="bi bi-box2-fill"></i>
                            <span>Registrar Producto</span>
                        </a>
                    </div>
                    <div className="botones">
                        <a href="listarProductos.php">
                            <i className="bi bi-search"></i>
                            <span>Consultar Producto</span>
                        </a>
                    </div>
                    <div className="botones">
                        <a href="registrar_proveedores.php">
                            <i className="bi bi-file-earmark-person-fill"></i>
                            <span>Agregar Proveedor</span>
                        </a>
                    </div>
                    <div className="botones">
                        <a href="consultar_proveedores.php">
                            <i className="bi bi-file-earmark-person-fill"></i>
                            <span>Consultar Proveedores</span>
                        </a>
                    </div>
                    <div className="botones">
                        <a href="error404.php">
                            <i className="bi bi-bag-plus-fill"></i>
                            <span>Registrar Compra</span>
                        </a>
                    </div>
                    <div className="botones">
                        <a href="error404.php">
                            <i className="bi bi-search"></i>
                            <span>Buscar Compra</span>
                        </a>
                    </div>
                    <div className="botones">
                        <a href="error404.php">
                            <i className="bi bi-bag-check-fill"></i>
                            <span>Ventas Realizadas</span>
                        </a>
                    </div>
                    <div className="botones">
                        <a href="datos_Personales.php">
                            <i className="bi bi-card-text"></i>
                            <span>Datos Personales</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Administrador;
