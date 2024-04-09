import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
import Index from './Pages/Index';
import Login from './Pages/Login';
import Header from './Pages/Layout/Header';
import Footer from './Pages/Layout/Footer';
import Tienda from './Pages/Tienda';
import Nosotros from './Pages/Nosotros';
import Registrarse from './Pages/Registrarse';
import Recuperar from './Pages/Recuperar';
import Maquillaje from './Pages/Maquillaje';
import CuidadoFacial from './Pages/CuidadoFacial';
import CuidadoCorporal from './Pages/CuidadoCorporal';
import Esmaltes from './Pages/Esmaltes';
import Cabello from './Pages/Cabello';
import Error404 from './Pages/Error404';
import Error500 from './Pages/Error500';
//Rutas Administrador
import ListarProveedores from './Pages/Administrador/ListarProveedores';
import CrearProducto from './Pages/Administrador/CrearProducto';
import RegistrarProveedor from './Pages/Administrador/RegistrarProveedor';
import EditarProducto from './Pages/Administrador/EditarProducto';
import EditarProveedor from './Pages/Administrador/EditarProveedor';
import Administrador from './Pages/Administrador/Administrador';
import ListarProductos1 from './Pages/Administrador/ListarProductos';

function FooterControl() {
  const location = useLocation();
  const isNotErrorPage = !location.pathname.includes('/Error');

  if (isNotErrorPage) {
    return <Footer />;
  } else {
    return null;
  }
}

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  const [categoria, setCategoria] = useState();

  return (
    <BrowserRouter>
      <Header allProducts={allProducts} setAllProducts={setAllProducts} total={total} setTotal={setTotal} countProducts={countProducts} setCountProducts={setCountProducts} categoria={categoria} setCategoria={setCategoria}/>

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registrarse" element={<Registrarse />} />
        <Route path="/Recuperar" element={<Recuperar />} />
        <Route path="/Tienda" element={<Tienda allProducts={allProducts} setAllProducts={setAllProducts} total={total} setTotal={setTotal} countProducts={countProducts} setCountProducts={setCountProducts}/>} />
        <Route path="/Tienda/Maquillaje" element={<Maquillaje allProducts={allProducts} setAllProducts={setAllProducts} total={total} setTotal={setTotal} countProducts={countProducts} setCountProducts={setCountProducts} categoria={categoria}/>} />
        <Route path="/Tienda/CuidadoFacial" element={<CuidadoFacial allProducts={allProducts} setAllProducts={setAllProducts} total={total} setTotal={setTotal} countProducts={countProducts} setCountProducts={setCountProducts} categoria={categoria}/>} />
        <Route path="/Tienda/CuidadoCorporal" element={<CuidadoCorporal allProducts={allProducts} setAllProducts={setAllProducts} total={total} setTotal={setTotal} countProducts={countProducts} setCountProducts={setCountProducts} categoria={categoria}/>} />
        <Route path="/Tienda/Esmaltes" element={<Esmaltes allProducts={allProducts} setAllProducts={setAllProducts} total={total} setTotal={setTotal} countProducts={countProducts} setCountProducts={setCountProducts} categoria={categoria}/>} />
        <Route path="/Tienda/Cabello" element={<Cabello allProducts={allProducts} setAllProducts={setAllProducts} total={total} setTotal={setTotal} countProducts={countProducts} setCountProducts={setCountProducts} categoria={categoria}/>} />
        <Route path="/Error404" element={<Error404 />} />
        <Route path="/Error500" element={<Error500 />} />
        <Route path="/ListarProductos" element={<ListarProductos1 />} />
        <Route path="/ListarProveedores" element={<ListarProveedores />} />
        <Route path="/Admin/CrearProducto" element={<CrearProducto />} />
        <Route path="/Admin/RegistrarProveedor" element={<RegistrarProveedor />} />
        <Route path="/Admin/EditarProducto/:id" element={<EditarProducto />} />
        <Route path="/Admin/EditarProveedor/:nit" element={<EditarProveedor />} />
        <Route path="/Administrador" element={<Administrador />} />
      </Routes>

      <FooterControl />
    </BrowserRouter>
  );
}

export default App;
