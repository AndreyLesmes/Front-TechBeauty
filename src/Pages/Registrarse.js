import React, { useRef, useState, useEffect } from 'react';
import './CSS/registrarse.css';
import imgSignIn from './img/img1.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faInfoCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';



const REGX_name = /^[a-zA-Záéíóú]{3,14}$/;
const REGX_lastname = /^[a-zA-Záéíóú]{3,14}$/;
const REGX_telephone = /^(3\d{9}|300\d{7})$/;
//const REGX_address = /^(Avenida\sCalle|Calle|Carrera|Diagonal|Avenida)\s\d{1,3}\s[a-zA-Z]?\s#\d{1,3}-\d{1,3}[a-zA-Z]*$/;
const REGX_email = /^[a-zA-Zñ\_0-9]+\@(gmail|hotmail|outlook)+\.(com|co|es)$/;
const REGX_passWord = /^[a-zA-Z0-9\-\_]{3,15}$/;


const Registrarse = () => {

    //Manejar el enfoque del ingreso del usuario cuando se carga el componente
    const userRef = useRef();
    //Manejar el enfoque de los errores
    const errorRef = useRef();

    const [name, setName] = useState('');
    const [valiName, setValiName] = useState(false);
    const [nameFocus, setNameFocus] = useState(false);

    const [lastName, setLastName] = useState('');
    const [valiLastName, setValiLastName] = useState(false);
    const [lastNameFocus, setLastNameFocus] = useState(false);

    const [telephone, setTelephone] = useState('');
    const [valiTelephone, setValiTelephone] = useState(false);
    const [telephoneFocus, setTelephoneFocus] = useState(false);

    const [address, setAddress] = useState('');
    const [valiAddress, setValiAddress] = useState(false);
    const [addressFocus, setAddressFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [valiemail, setValiEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [passWord, setPassWord] = useState('');
    const [valiPassWord, setValiPassWord] = useState(false);
    const [PassWordFocus, setPassWordFocus] = useState(false);

    //Mensaje de error
    const [errorMsg, setErrorMsg] = useState('')
    const [success, setSuccess] = useState(false)

    const [users, setUsers] = useState({
        name: '',
        lastName: '',
        telephone: '',
        address: '',
        email: '',
        passwordU: '',
        numRole: {
            pkNumRoles: '',
            name: ''
        }
    })
    


    useEffect(() => {
        const result = REGX_name.test(name);
        setValiName(result)
    }, [name])

    useEffect(() => {
        const result = REGX_lastname.test(lastName);
        setValiLastName(result)
    }, [lastName])

    useEffect(() => {
        const result = REGX_telephone.test(telephone);
        setValiTelephone(result)
    }, [telephone])

    // useEffect(() => {
    //     const result = REGX_address.test(address);
    //     setValiAddress(result)
    // }, [address])

    useEffect(() => {
        const result = REGX_email.test(email);
        setValiEmail(result)
    }, [email])

    useEffect(() => {
        const result = REGX_passWord.test(passWord);
        setValiPassWord(result)
    }, [passWord])

    useEffect(() => {
        setErrorMsg('')
    }, [name, lastName, email, passWord])


    //Tomar el valor de la dirección sin usar el REGX
    const handleAddressChange = (e) => {
        const { value } = e.target;
        setAddress(value);
        console.log('Valor de dirección:', value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const v1 = REGX_name.test(name);
        const v2 = REGX_lastname.test(lastName);
        const v3 = REGX_telephone.test(telephone);
        const v5 = REGX_email.test(email);
        const v6 = REGX_passWord.test(passWord);
        if (!v1 || !v2 || !v3 || !v5 || !v6) {
            setErrorMsg('Fallo en los datos');
            return;
        }
        try {
            const userData = {
                name: name,
                lastName: lastName,
                telephone: telephone,
                address: address,
                email: email,
                passwordU: passWord,
                numRole: {
                    pkNumRoles: 1
                }
            };
            await axios.post('http://localhost:8087/api/user/create', userData);
            setSuccess(true);
            
        } catch (error) {
            if (!error.response) {
                setErrorMsg('No responde el servidor');
            } else {
                setErrorMsg('Falla al registrar usuario');
            }
        }
    }
    
    return (
        <>
            {success ? (
                <section>
                    {window.location.href = '/Login'}
                </section>
            ) : (
                <section className='registrarse'>
                    <p ref={errorRef} className={errorMsg ? "errormsg" : "offscreen"}>{errorMsg}</p>
                    <form className="registrarse" onSubmit={handleSubmit}>
                        <div className="form-signin">
                            <div className="box">
                                <div className="form-img">
                                    <h2>Registrarse</h2>
                                    <img src={imgSignIn} alt="imgForm" />
                                </div>
                            </div>
                            <div className="box">
                                <br /><br />
                                <label htmlFor="nombre">Nombre: </label>
                                <input
                                    className="control-signin"
                                    type="text"
                                    id="nombre"
                                    ref={userRef}
                                    autoComplete='off'
                                    onChange={(e) => setName(e.target.value)}
                                    aria-invalid={valiName ? "false" : "true"}
                                    aria-describedby='nameidnote'
                                    onFocus={() => setNameFocus(true)}
                                    onBlur={() => {
                                        setNameFocus(false);
                                        setValiName(REGX_name.test(name));
                                    }}
                                    placeholder="Ingrese su nombre"
                                    required
                                />
                                {valiName && <FontAwesomeIcon icon={faCheck} />}
                                {!valiName && nameFocus && (
                                    <>
                                        <FontAwesomeIcon icon={faTimes} />
                                        <p id='nameidnote' className="Instrucciones">
                                            <FontAwesomeIcon icon={faInfoCircle} />
                                            ¡No pueden haber espacios en este campo!<br />
                                            ¡El nombre solo puede tener <b>letras</b>!<br />
                                            ¡Debe tener un mínimo de <b>3</b> a <b>14</b> caracteres!
                                        </p>
                                    </>
                                )}

                                <br />
                                <label htmlFor="apellido">Apellido: </label>
                                <input className="control-signin" type="text" id="apellido" ref={userRef} autoComplete='off' onChange={(e) => setLastName(e.target.value)}
                                    aria-invalid={valiLastName ? "false" : "true"}
                                    aria-describedby='lastnameidnote'
                                    onFocus={() => setLastNameFocus(true)}
                                    onBlur={() => {
                                        setLastNameFocus(false);
                                        setValiLastName(REGX_lastname.test(lastName));
                                    }}
                                    placeholder="Ingrese su apellido"
                                    required />
                                {valiLastName && <FontAwesomeIcon icon={faCheck} />}
                                {!valiLastName && lastNameFocus && (
                                    <>
                                        <FontAwesomeIcon icon={faTimes} />
                                        <p id='lastnameidnote' className="Instrucciones">
                                            <FontAwesomeIcon icon={faInfoCircle} />
                                            ¡No pueden haber espacios en este campo!<br />
                                            ¡El apellido solo puede tener <b>letras</b>!<br />
                                            ¡Debe tener un mínimo de <b>3</b> a <b>14</b> caracteres!
                                        </p>
                                    </>
                                )}

                                <br />
                                <label htmlFor="celular">Celular: </label>
                                <input
                                    className="control-signin"
                                    type="text"
                                    id="celular"
                                    ref={userRef}
                                    autoComplete='off'
                                    onChange={(e) => setTelephone(e.target.value)}
                                    aria-invalid={valiTelephone ? "false" : "true"}
                                    aria-describedby='telephoneidnote'
                                    onFocus={() => setTelephoneFocus(true)}
                                    onBlur={() => {
                                        setTelephoneFocus(false);
                                        setValiTelephone(REGX_telephone.test(telephone));
                                    }}
                                    placeholder="Ingrese su numero de celular"
                                    required
                                />
                                {valiTelephone && <FontAwesomeIcon icon={faCheck} />}
                                {!valiTelephone && telephoneFocus && (
                                    <>
                                        <FontAwesomeIcon icon={faTimes} />
                                        <p id='telephoneidnote' className="Instrucciones">
                                            <FontAwesomeIcon icon={faInfoCircle} />
                                            ¡No pueden haber espacios en este campo!<br />
                                            El número debe comenzar con el prefijo 3 <br />
                                            Seguido de 9 dígitos adicionales. <br />
                                        </p>
                                    </>
                                )}
                                <br />
                                <label htmlFor="direccion">Direccion: </label>
                                <input
                                    className="control-signin"
                                    type="text"
                                    id="direccion"
                                    ref={userRef}
                                    autoComplete='off'
                                    onChange={handleAddressChange}
                                    //aria-invalid={valiAddress ? "false" : "true"}
                                    //aria-describedby='addressidnote'
                                    //onFocus={() => setAddressFocus(true)}
                                    //onBlur={() => {
                                    //    setAddressFocus(false);
                                    //    setValiAddress(REGX_address.test(address));
                                    //}}
                                    placeholder="Ingrese su cireccion"
                                    value={address}
                                    required

                                />
                                {/* {valiAddress && <FontAwesomeIcon icon={faCheck} />}
                        {!valiAddress && addressFocus && (
                            <>
                                <FontAwesomeIcon icon={faTimes} />
                                <p id='addressidnote' className="Instrucciones">
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    ¡No pueden haber espacios en este campo!<br />
                                    ¡La dirección debe tener formato colombiano!<br />
                                    Debe empezar con alguna de estas opciones: <br/>
                                    Calle/Carrera/Avenida/Avenida Calle/Diagonal<br/>
                                    Ejemplos: <br/>
                                    <b>
                                        Calle 00 #00-00 / 
                                        Carrera 000a #000a-00a / 
                                        Avenida 0a #00-000a
                                    </b>
                                </p>
                            </>
                        )} */}
                                <br />
                                <label htmlFor="correo">Correo: </label>
                                <input className="control-signin" type="email" id="correo" ref={userRef} autoComplete='off' onChange={(e) => setEmail(e.target.value)}
                                    aria-invalid={valiemail ? "false" : "true"}
                                    aria-describedby='emailidnote'
                                    onFocus={() => setEmailFocus(true)}
                                    onBlur={() => {
                                        setEmailFocus(false);
                                        setValiEmail(REGX_email.test(email));
                                    }}
                                    placeholder="Ingrese su correo"
                                    required />
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
                                <br />
                                <label htmlFor="contraseña">Contraseña: </label>
                                <input className="control-signin" type="password" id="contraseña" ref={userRef} autoComplete='off' onChange={(e) => setPassWord(e.target.value)}
                                    aria-invalid={valiPassWord ? "false" : "true"}
                                    aria-describedby='passwordidnote'
                                    onFocus={() => setPassWordFocus(true)}
                                    onBlur={() => {
                                        setPassWordFocus(false);
                                        setValiPassWord(REGX_passWord.test(passWord));
                                    }}
                                    placeholder="Ingrese su contrase&ntilde;a"
                                    required />
                                {valiPassWord && <FontAwesomeIcon icon={faCheck} />}
                                {!valiPassWord && PassWordFocus && (
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
                                <br /><br />
                                <button type="submit" disabled={!valiName || !valiLastName || !valiTelephone || !valiemail || !valiPassWord ? true : false}>Registrarse</button>
                            </div>
                        </div>
                    </form>
                </section>
            )}
            <script src="./JS/index.js"></script>
        </>
    );
}

export default Registrarse;
