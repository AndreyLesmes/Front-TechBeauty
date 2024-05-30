import React, { useEffect, useState } from 'react';
import './CSS/tienda.css';
import { data } from './Data';

export const Tienda = ({ allProducts, setAllProducts, countProducts, setCountProducts, total, setTotal}) => {
    const [showMessage, setShowMessage] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState(data);

    useEffect(() => {
        const results = data.filter(product =>
            product.nombre.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredData(results);
    }, [searchTerm]);

    const onAddProduct = product => {
        if (allProducts.find(item => item.id === product.id)) {
            const products = allProducts.map(
                item => item.id === product.id ? { ...item, cantidad: item.cantidad + 1 } : item
            );
            setTotal(total + product.precio * product.cantidad);
            setCountProducts(countProducts + product.cantidad);
            setAllProducts([...products]);
        } else {
            setTotal(total + product.precio * product.cantidad);
            setCountProducts(countProducts + product.cantidad);
            setAllProducts([...allProducts, product]);
        }
        setShowMessage(true); // Mostrar mensaje de producto agregado al carrito
        setTimeout(() => setShowMessage(false), 1000); // Ocultar mensaje después de 1 segundos
    };

    return (
        <>
            <section className="banner">
                <div className="content-banner">
                    <h2 id="titulo" className="content-banner">Tienda</h2>
                </div>
            </section>

            <div className="container-main">
                <div className='categorys'></div>
                <div className="container-products" id="contenedor-productos">
                    {filteredData.map(product => (
                        <div className='card-product' key={product.id}>
                            <div className="container-img">
                                <img src={product.imagen} alt={product.id} />
                                <div className="button-group">
                                    <span>
                                        <i title="Agregar a favoritos" className="fa-regular fa-heart"></i>
                                    </span>
                                    <span>
                                        <a href="#" title="Ver detalles del producto"><i className="fa-regular fa-eye"></i></a>
                                    </span>
                                </div>
                            </div>
                            <div className="content-card-product">
                                <h3><a href="#" title={`Ver detalles de ${product.nombre}`}>{product.nombre}</a></h3>
                                <button onClick={() => onAddProduct(product)} className="add-cart" data-id={product.id}>
                                    Comprar
                                    <i className="fa-solid fa-cart-shopping"></i>
                                </button>
                                <p className="price">${product.precio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {showMessage && (
                <div className="product-added-message">Producto agregado al carrito</div>
            )}
        </>
    );
};

export default Tienda;
