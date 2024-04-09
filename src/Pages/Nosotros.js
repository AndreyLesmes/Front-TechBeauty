import React from 'react';
import './CSS/nosotros.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Nosotros = () => {
    return (
        <>
            <form className="formulario-contacto">
                <div className="contacto">
                    <div className="box">
                        <h2><b>Contactenos</b></h2>
                        <label htmlFor="nombre">Nombre: </label>
                        <input className="control" type="text" name="nombre" id="nombre" placeholder="Escriba su nombre" />
                        <br /><br />
                        <label htmlFor="apellido">Apellido: </label>
                        <input className="control" type="text" id="apellido" placeholder="Ingrese su apellido" />
                        <br /><br />
                        <label htmlFor="email">Email: </label>
                        <input className="control" type="email" id="email" placeholder="Ingrese su correo" required />
                        <br /><br />
                        <label htmlFor="celular">Celular: </label>
                        <input className="control" type="text" id="celular" placeholder="Ingrese su numero" />
                        <br /><br />
                        <label htmlFor="mensaje">Mensaje: </label>
                        <textarea className="control" id="mensaje" name="mensaje" rows="3" cols="25"></textarea>
                        <br /><br />
                        <div className="termiCondi">
                            <input type="checkbox" id="terminosCondiciones" required />
                            <label htmlFor="terminosCondiciones">He leído y acepto los </label>
                            <a href="#">Términos y Condiciones</a>
                        </div>
                        <button type="submit">Enviar</button>
                    </div>
                    <div className="box">
                        <h3>Información de Contacto</h3>
                        <div className="media">
                            <div className="correo">
                                <a href="#" className="fa fa-envelope"></a><p className="letra">techbeauty_contacto@gmail.com</p>
                            </div>
                            <div className="telefono">
                                <a href="#" className="fa fa-phone"></a><p className="letra">312-765-2210</p>
                            </div>
                            <div className="direccion">
                                <a href="#" className="fa fa-location-dot"></a><p className="letra">Calle 55 Sur #17A-06 (Tunjuelito, barrio San Carlos)</p>
                                <br />
                                <p className="map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15908.641617589952!2d-74.13911863022462!3d4.565171100000009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9f497afb26e3%3A0x799e248e3c0818b7!2sCl.%2055%20Sur%20%2317a-6%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1683183436796!5m2!1ses!2sco" width="400" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></p>
                            </div>
                            <br />
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Nosotros;
