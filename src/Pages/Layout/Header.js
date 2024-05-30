import React, { useState } from 'react';
import './Css/HeaderyFooter.css';
import headerLog from '../img/logo.png';
import { Link } from 'react-router-dom';

const Header = ({ allProducts, setAllProducts, total, setTotal, countProducts, setCountProducts, categoria, setCategoria }) => {
    const [active, setActive] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const onDeleteProduct = (product) => {
        const results = allProducts.filter(item => item.id !== product.id);
        setTotal(total - product.precio * product.cantidad);
        setCountProducts(countProducts - product.cantidad);
        setAllProducts(results);
    };

    const onClearCart = () => {
        setAllProducts([]);
        setTotal(0);
        setCountProducts(0);
    };

    const onAddProduct = (product) => {
        const updatedProducts = allProducts.map(item => {
            if (item.id === product.id) {
                return { ...item, cantidad: item.cantidad + 1 };
            }
            return item;
        });
        setTotal(total + product.precio);
        setCountProducts(countProducts + 1);
        setAllProducts(updatedProducts);
    };

    const onRemoveProduct = (product) => {
        if (product.cantidad === 1) {
            onDeleteProduct(product);
        } else {
            const updatedProducts = allProducts.map(item => {
                if (item.id === product.id) {
                    return { ...item, cantidad: item.cantidad - 1 };
                }
                return item;
            });
            setTotal(total - product.precio);
            setCountProducts(countProducts - 1);
            setAllProducts(updatedProducts);
        }
    };

    const handleCategoryClick = (categoria) => {
        setCategoria(categoria);
    };

    const filteredProducts = allProducts.filter(product =>
        product.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <>
            <header>
                <div className="container-hero">
                    <div className="containerHeader hero">
                        <div className="container-logo-img">
                            <Link to={"/"} className="logo-link"><img src={headerLog} alt="logo" width="25%" style={{ marginTop: '1rem' }} /></Link>
                        </div>
                        <div className="container-nombre">
                            <h1 className="nombre"><Link to={"/"} className="nombre-link">Techbeauty</Link></h1>
                        </div>
                        <div className="container-user">
                            <Link to={"/Login"} className="user-link">Iniciar Sesión</Link>
                            <Link to={"/Registrarse"} className="user-link">Registrarse</Link>

                            <div className='container-icon'>
                                <i className="fa-solid fa-cart-shopping" onClick={() => setActive(!active)}>
                                    <div className="content-shopping-cart">
                                        <div className="count-products">
                                            <span id="contador-productos">{countProducts}</span>
                                        </div>
                                    </div>
                                </i>

                                <div className={`container-cart-products ${active ? '' : 'hidden-cart'}`}>
                                    {allProducts.length ? (
                                        <>
                                            <table className="cart-table">
                                                <thead>
                                                    <tr>
                                                        <th>Imagen</th>
                                                        <th>Nombre</th>
                                                        <th>Cantidad</th>
                                                        <th>Precio</th>
                                                        <th>Subtotal</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {filteredProducts.map(product => (
                                                        <tr key={product.id}>
                                                            <td><img className="carrito-producto-imagen" src={product.imagen} alt={product.id} /></td>
                                                            <td>{product.nombre}</td>
                                                            <td>
                                                                <button className="cantidad-btn" onClick={() => onRemoveProduct(product)}>-</button>
                                                                {product.cantidad}
                                                                <button className="cantidad-btn" onClick={() => onAddProduct(product)}>+</button>
                                                            </td>
                                                            <td>${product.precio}</td>
                                                            <td>${product.precio * product.cantidad}</td>
                                                            <td>
                                                                <button className="carrito-producto-eliminar" onClick={() => onDeleteProduct(product)}>
                                                                    <i className="fa-thin fa-x"></i>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>

                                            <div className="cart-total">
                                                <h3>Total:</h3>
                                                <span className="total-pagar">${total.toFixed(2)}</span>
                                            </div>
                                            <button className='vaciar-carrito' onClick={onClearCart}>Vaciar Carrito</button>
                                            <button className='pagar-carrito'>Pagar</button>
                                        </>
                                    ) : (
                                        <p id="carrito-vacio" className="carrito-vacio">Tu carrito está vacío <i className="fa-regular fa-face-frown"></i></p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-navbar">
                    <nav className="navbar containerNav">
                        <button className="menu-toggle" aria-label="Abrir menú">
                            <i className="fa-solid fa-bars"></i>
                        </button>
                        <ul className="menu">
                            <button className="close-menu" aria-label="Cerrar menú">
                                <i className="fa-solid fa-times"></i>
                            </button>
                            <li><Link to={"/Nosotros"}>Nosotros</Link></li>
                            <li><Link to={"/Tienda"}>Tienda</Link></li>
                            <li onClick={() => handleCategoryClick('Maquillaje')}><Link to={"/Tienda/Maquillaje"}>Maquillaje</Link></li>
                            <li onClick={() => handleCategoryClick('Cuidado-Facial')}><Link to={"/Tienda/Cuidadofacial"}>Cuidado Facial</Link></li>
                            <li onClick={() => handleCategoryClick('Cuidado-Corporal')}><Link to={"/Tienda/Cuidadocorporal"}>Cuidado Corporal</Link></li>
                            <li onClick={() => handleCategoryClick('Esmaltes')}><Link to={"/Tienda/Esmaltes"}>Esmaltes</Link></li>
                            <li onClick={() => handleCategoryClick('Cabello')}><Link to={"/Tienda/Cabello"}>Cabello</Link></li>
                            <li><Link to={"/Error404"}>Ofertas</Link></li>
                        </ul>
                        <form className="search-form">
                            <input type="search" placeholder="Buscar" value={searchTerm} onChange={handleSearch} />
                            <button className="btn-search"><i className="fa-solid fa-magnifying-glass"></i></button>
                        </form>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Header;
