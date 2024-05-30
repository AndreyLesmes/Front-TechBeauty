import React, { useState, useEffect } from 'react';
import ProductService from '../../../components/Service/ProductService';
import { Link } from 'react-router-dom';
import BarraDashboard from './BarraDashboard';

const ListarProductos = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  useEffect(() => {
    ProductService.getAllProducts()
      .then(response => {
        setProducts(response.data.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  // Calcular el índice del último producto en la página actual
  const indexOfLastProduct = currentPage * productsPerPage;
  // Calcular el índice del primer producto en la página actual
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  // Obtener los productos para la página actual
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Cambiar a la siguiente página
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  // Cambiar a la página anterior
  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <>
      {/*<BarraDashboard />*/}
      <div className="container">
        <div className="titulo">
          <h2>Productos Registrados</h2>
        </div>
        <br />
        <div className='boton-redirect'>
          <Link to={"/Admin/CrearProducto"} className="btn btn-primary">Añadir Nuevo</Link>
        </div>
        <br /><br /><br />
        <div className="table-responsive">
          <table id="miTabla" className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Categoria</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Descripción</th>
                <th>Unidad Medida</th>
                <th>Referencia</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {currentProducts.map(product => (
                <tr key={product.pkId}>
                  <td>{product.pkId}</td>
                  <td>{product.fkIdCategories && product.fkIdCategories.name}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.productQuantity}</td>
                  <td className='td-description'>{product.description}</td>
                  <td>{product.measurementUnit}</td>
                  <td>{product.productReference}</td>
                  <td>
                    <Link className="btn btn-info" to={`/Admin/EditarProducto/${product.pkId}`}>Editar</Link>
                    <br /> <br /> <br />
                    <a className="btn btn-danger" href={`../../Controller/Productos/eliminarProducto.php?Id=${product.pkId}`}>Eliminar</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Mostrar botones de paginación */}
        <div className="pagination">
          {currentPage > 1 && (
            <button className="btn btn-secondary" onClick={prevPage}>Anterior</button>
          )}
          {currentProducts.length === productsPerPage && (
            <button className="btn btn-secondary" onClick={nextPage}>Siguiente</button>
          )}
        </div>
      </div>
    </>
  );
};

export default ListarProductos;
