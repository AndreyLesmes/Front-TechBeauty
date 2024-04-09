import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/tienda.css';
import { data } from './Data';

const Esmaltes = ({ allProducts, setAllProducts, countProducts, setCountProducts, total, setTotal, categoria }) => {

    console.log('Categoria recibida:', categoria);

    const nailProducts = categoria === 'Esmaltes' ? data.filter(product => product.categoria.nombre === 'Esmaltes') : [];
    
    const onAddProduct = product => {
        if (allProducts.find(item => item.id === product.id)) {
            const products = allProducts.map(
                item => item.id === product.id ? { ...item, cantidad: item.cantidad + 1 } : item
            );

            setTotal(total + product.precio * product.cantidad);
            setCountProducts(countProducts + product.cantidad);
            return setAllProducts([...products])
        }

        setTotal(total + product.precio * product.cantidad);
        setCountProducts(countProducts + product.cantidad);
        setAllProducts([...allProducts, product]);
    };

    return (
        <>
            <section className="banner">
                <div className="content-banner">
                    <h2>{categoria}</h2>
                </div>
            </section>
            <div className="container-main">
                <div className='categorys'></div>
                <div className="container-products">
                    {nailProducts.map(product => (
                        <div className='card-product' key={product.id}>
                            <div className="container-img">
                                <img src={product.imagen} alt={product.id} />
                                <div className="button-group">
                                    <span>
                                        <i className="fa-regular fa-heart"></i>
                                    </span>
                                    <span>
                                        <a href="#"><i className="fa-regular fa-eye"></i></a>
                                    </span>
                                </div>
                            </div>
                            <div className="content-card-product">
                                <h3><a href="">{product.nombre}</a></h3>
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
        </>
    );
}

export default Esmaltes;
