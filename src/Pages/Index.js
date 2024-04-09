import React from 'react';
import { Link } from 'react-router-dom';
import Slider from './Layout/Slider';
import gallery1 from './img/pag_Inicial/1-cosmetics.jpeg';
import gallery2 from './img/pag_Inicial/2-esmaltes.jpeg';
import gallery3 from './img/pag_Inicial/3-women.jpg';
import gallery4 from './img/pag_Inicial/4-makeup.jpeg';
import gallery5 from './img/pag_Inicial/5-products.jpeg';
import product1 from './img/pag_Inicial/corporal_2.jpg';
import product2 from './img/pag_Inicial/maquillaje_4.png';
import product3 from './img/pag_Inicial/facial_3.jpg';
import './CSS/indexs.css';

const Index = () => {
    return (
        <>
        <Slider/>
            <main className="main-content">
                <div className="categorias-middle-card">
                    <i className="fa-solid fa-heart fa-beat"></i>
                    <h1 className='ourCategories-middle-card'>Nuestras Categorias</h1>
                    <i className="fa-solid fa-heart fa-beat"></i>
                </div>
                <section className="containerCategories all-categories">
                    <div className="container-categories">
                        <div className="card-category category-makeup">
                            <p>Maquillaje</p>
                            <button className="more" ><Link to={'/Tienda/Maquillaje'}>Ver más</Link></button>
                        </div>
                        <div className="card-category category-facialcare">
                            <p>Cuidado Facial</p>
                            <button className="more"><Link to={'/Tienda/CuidadoFacial'}>Ver más</Link></button>
                        </div>
                        <div className="card-category category-bodycare">
                            <p>Cuidado Corporal</p>
                            <button className="more"><Link to={'/Tienda/CuidadoCorporal'}>Ver más</Link></button>
                        </div>
                        <div className="card-category category-nailpolish">
                            <p>Esmaltes</p>
                            <button className="more"><Link to={'/Tienda/Esmaltes'}>Ver más</Link></button>
                        </div>
                        <div className="card-category category-hair">
                            <p>Cabello</p>
                            <button className="more"><Link to={'/Tienda/Cabello'}>Ver más</Link></button>
                        </div>
                    </div>
                </section>
                <section className="gallery">
                    <img src={gallery1} alt="Gallery1" />
                    <img src={gallery2} alt="Gallery2" />
                    <img src={gallery3} alt="Gallery3" className="gallery-img-3" />
                    <img src={gallery4} alt="Gallery4" />
                    <img src={gallery5} alt="Gallery5" />
                </section>
                <div className="bestProducts-middle-card">
                    <i className="fa-solid fa-heart fa-beat"></i>
                    <h1 className='bestProducts-middlecard'>Mejores Productos</h1>
                    <i className="fa-solid fa-heart fa-beat"></i>
                </div>
                <section className="containerProducts top-products">
                    <div className="container-products">
                        <div className="card-product">
                            <div className="container-img">
                                <img src={product1} alt="LocionCo-vitu" />
                                <div className="button-group">
                                    <span>
                                        <i className="fa-regular fa-heart"></i>
                                    </span>
                                    <span>
                                        <i className="fa-regular fa-eye"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="content-card-product">
                                <div className="stars">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                </div>
                                <h3><a href="">Loción Corporal Mango y Lichi Vitú</a></h3>
                                <span className="add-cart">
                                    Comprar
                                    <i className="fa-solid fa-cart-shopping"></i>
                                </span>
                                <p className="price">$17.900</p>
                            </div>
                        </div>
                        <div className="card-product">
                            <div className="container-img">
                                <img src={product2} alt="Sombra-Kitty" />
                                <div className="button-group">
                                    <span>
                                        <i className="fa-regular fa-heart"></i>
                                    </span>
                                    <span>
                                        <i className="fa-regular fa-eye"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="content-card-product">
                                <div className="stars">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                </div>
                                <h3><a href="">Sombra Kitty TRENDY</a></h3>
                                <span className="add-cart">
                                    Comprar
                                    <i className="fa-solid fa-cart-shopping"></i>
                                </span>
                                <p className="price">$10.000</p>
                            </div>
                        </div>
                        <div className="card-product">
                            <div className="container-img">
                                <img src={product3} alt="Limpiador-Ponds" />
                                <div className="button-group">
                                    <span>
                                        <i className="fa-regular fa-heart"></i>
                                    </span>
                                    <span>
                                        <i className="fa-regular fa-eye"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="content-card-product">
                                <div className="stars">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <h3><a href="">Limpiador facial Ponds diario micro exfoliante</a></h3>
                                <span className="add-cart">
                                    Comprar
                                    <i className="fa-solid fa-cart-shopping"></i>
                                </span>
                                <p className="price">$12.500</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <script src="./JS/index.js"></script>
        </>
    );
}

export default Index;
