import React, { useEffect } from 'react';
import './CSS/tienda.css';
import { data } from './Data';



export const Tienda = ({ allProducts, setAllProducts, countProducts, setCountProducts, total, setTotal}) => {

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
                    <h2 id="titulo" className="content-banner">Tienda</h2>
                </div>
            </section>
            

            <div className="container-main">
                <div className='categorys'></div>
                <div className="container-products" id="contenedor-productos">
                    {data.map(product => (
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
    )
}

export default Tienda;