import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SupplierService from '../../Service/SupplierService';
import './CSS/consultar_proveedores.css';

const ListarProveedores = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const suppliersPerPage = 10;

  useEffect(() => {
    SupplierService.getAllSupplier()
      .then(
        response => {
          setSuppliers(response.data.data);
          console.log(response.data);
        }
      )
      .catch(
        error => {
          console.error(error);
        }
      );
  }, []);

  // Calcular el índice del último proveedor en la página actual
  const indexOfLastSupplier = currentPage * suppliersPerPage;
  // Calcular el índice del primer proveedor en la página actual
  const indexOfFirstSupplier = indexOfLastSupplier - suppliersPerPage;
  // Obtener los proveedores para la página actual
  const currentSuppliers = suppliers.slice(indexOfFirstSupplier, indexOfLastSupplier);

  // Cambiar a la siguiente página
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  // Cambiar a la página anterior
  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className="container-ListSuppliers">
      <div className="titulo">
        <h2>Proveedores Registrados</h2>
      </div>
      <br />
      <div className='button-redirect'>
        <Link to={"/Admin/RegistrarProveedor"} className="user-link">Añadir Nuevo</Link>
      </div>
      <br /><br /><br />
      <div className="table-responsive">
        <table id="miTabla" className="table table-striped table-bordered table-sm">
          <thead>
            <tr>
              <th>NIT</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Dirección</th>
              <th>Teléfono</th>
              <th>Email</th>
              <th>Razón Social</th>
              <th>Productos</th>
              <th>Marca</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {currentSuppliers.map(supplier => (
              <tr key={supplier.pkNit}>
                <td>{supplier.pkNit}</td>
                <td>{supplier.name}</td>
                <td>{supplier.lastName}</td>
                <td>{supplier.address}</td>
                <td>{supplier.telephone}</td>
                <td>{supplier.email}</td>
                <td>{supplier.companyName}</td>
                <td>{supplier.productType}</td>
                <td>{supplier.supplierBrand}</td>
                <td>
                  <br />
                  <Link className="editar" to={`/Admin/EditarProveedor/${supplier.pkNit}`}>Editar</Link>
                  <br /><br />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Mostrar botones de paginación */}
      <div className="pagination">
        {currentPage > 1 && (
          <button onClick={prevPage}>Anterior</button>
        )}
        {currentSuppliers.length === suppliersPerPage && (
          <button onClick={nextPage}>Siguiente</button>
        )}
      </div>
    </div>
  );
};

export default ListarProveedores;
