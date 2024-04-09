import React from 'react';
import './Css/HeaderyFooter.css';
import footerLog from '../img/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="containerFooter container-footer">
                    <div className="menu-footer">
                        <div className="contact-info">
                            <p className="title-footer">Información de contacto</p>
                            <ul>
                                <li>Dirección: Calle 55 Sur #17A-06</li>
                                <li>Telefono: 312-765-2210</li>
                                <li>Email: techbeauty_contacto@gmail.com</li>
                            </ul>
                            <div className="social-icons">
                                <span className="facebook"><a href="https://www.facebook.com/"><i className="fa-brands fa-facebook"></i></a></span>
                                <span className="instagram"><a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a></span>
                            </div>
                        </div>
                        <div className="information">
                            <p className="title-footer">Sobre Nosotros</p>
                            <div className="description">
                                <p>En Vanidades Carol Daniela nos dedicamos a ofrecer una amplia gama de productos cosméticos de alta calidad 
                                    en la localidad de Tunjuelito, cada día nos esforzamos por brindarte lo último en tendencias de belleza, 
                                    siempre comprometidos con la excelencia y la satisfacción del cliente.  ¡Descubre un mundo de belleza con 
                                    nosotros!
                                </p>
                            </div>
                            <ul>
                                <li><Link to={"/Nosotros"}>Contactanos</Link></li>
                            </ul>
                        </div>
                        <div className="logo-footer">
                            <img src={footerLog} alt="Techbeauty" style={{ width: '75%', justifySelf: 'center', alignSelf: 'center' }} />
                        </div>
                    </div>
                    <div className="copy">
                        <small>&copy; 2023 <b>TechBeauty</b> - Todos los Derechos Reservados</small>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
