import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import imgLogin from './img/img2.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faInfoCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import './CSS/login.css';

const REGX_email = /^[a-zA-Zñ\_0-9]+\@(gmail|hotmail|outlook)+\.(com|co|es)$/;
const REGX_passWord = /^[a-zA-Z0-9\-\_]{3,15}$/;

const Login = () => {

    //Manejar el enfoque del ingreso del usuario cuando se carga el componente
    const userRef = useRef();
    //Manejar el enfoque de los errores
    const errorRef = useRef();

    const [error, setError] = useState('');

    const [email, setEmail] = useState('');
    const [valiemail, setValiEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [password, setPassword] = useState('');
    const [valiPassword, setValiPassword] = useState(false);
    const [PasswordFocus, setPasswordFocus] = useState(false);

    useEffect(() => {
        const result = REGX_email.test(email);
        setValiEmail(result)
    }, [email])

    useEffect(() => {
        const result = REGX_passWord.test(password);
        setValiPassword(result)
    }, [password])



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8087/api/user/all', { email, password });
            const users = response.data.data;

            // Buscar el rol del usuario actual en la respuesta
            const currentUser = users.find(user => user.email === email);
            if (currentUser) {
                switch (currentUser.numRole.pkNumRoles) {
                    case 1:
                        window.location.href = '/';
                        break;
                    case 2:
                        window.location.href = '/Tienda';
                        break;
                    case 3:
                        window.location.href = '/Administrador';
                        break;
                    case 4:
                        window.location.href = '/Nosotros';
                        break;
                    default:
                        setError('Rol de usuario desconocido');
                }
            } else {
                setError('Ningún usuario encontrado');
            }
        } catch (error) {
            setError('Credenciales inválidas. Inténtalo de nuevo.');
            console.error('Error en el inicio de sesión:', error);
        }
    };




    return (
        <>
            <form className="login" onSubmit={handleSubmit}>
                <div className="form-login">
                    <div className="box">
                        <div className="form-img">
                            <h2>Iniciar Sesión</h2>
                            <img src={imgLogin} alt="imgForm" />
                        </div>
                    </div>
                    <div className="box">
                        <div className="input-form">
                            <label htmlFor="usuario">Correo</label>
                            <input className="control-login" type="email" id="usuario" ref={userRef} placeholder="Ingrese su Correo" required onChange={(e) => setEmail(e.target.value)} aria-invalid={valiemail ? "false" : "true"} aria-describedby='emailidnote' onFocus={() => setEmailFocus(true)} onBlur={() => { setEmailFocus(false); setValiEmail(REGX_email.test(email)) }} />
                            {valiemail && <FontAwesomeIcon icon={faCheck} />}
                            {!valiemail && emailFocus && (
                                <>
                                    <FontAwesomeIcon icon={faTimes} />
                                    <p id='emailidnote' className="Instrucciones">
                                        <FontAwesomeIcon icon={faInfoCircle} />
                                        ¡No pueden haber espacios en este campo!<br />
                                        Se permiten letras, números, puntos, guiones bajos<br />
                                        Los proveedores de correo permitidos son gmail, hotmail y outlook.<br />
                                        Ejemplos: 'correo@proveedor.com', 'correo@proveedor.co' o 'correo@proveedor.es'<br />
                                    </p>
                                </>
                            )}
                            <br /><br />
                            <label htmlFor="contraseña">Contraseña</label>
                            <input className="control-login" type="password" id="contraseña" ref={userRef} placeholder="Ingrese su Contraseña" required onChange={(e) => setPassword(e.target.value)} aria-invalid={valiPassword ? "false" : "true"} aria-describedby='passwordidnote' onFocus={() => setPasswordFocus(true)} onBlur={() => { setPasswordFocus(false); setValiPassword(REGX_passWord.test(password)) }} />
                            {valiPassword && <FontAwesomeIcon icon={faCheck} />}
                            {!valiPassword && PasswordFocus && (
                                <>
                                    <FontAwesomeIcon icon={faTimes} />
                                    <p id='passwordidnote' className="Instrucciones">
                                        <FontAwesomeIcon icon={faInfoCircle} />
                                        ¡No pueden haber espacios en este campo!<br />
                                        La contraseña debe tener entre 3 y 15 caracteres <br />
                                        Se permiten letras, números, guiones y guiones bajos.<br />
                                    </p>
                                </>
                            )}
                        </div>
                        <div className="password_lost">
                            <Link to={"/Recuperar"}>¿Has olvidado la contraseña?</Link>
                            <br /><br />
                        </div>
                        {error && <p>{error}</p>}
                        <button type="submit">Iniciar sesión</button>
                        <div className="no_account">
                            <Link to={"/Registrarse"}>¿No tienes cuenta? Regístrate</Link>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Login;
