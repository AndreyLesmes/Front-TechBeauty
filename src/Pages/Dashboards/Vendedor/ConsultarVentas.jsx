import React, { useState, useEffect } from 'react';
import BuyService from '../../../components/Service/BuyService';
import BarraVendedor from './BarraVendedor';

const ConsultarVentasV = () => {
  const [ventas, setVentas] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const ventasPorPagina = 10;

  useEffect(() => {
    BuyService.getAllBuys()
      .then(response => {
        setVentas(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const indexOfLastVenta = currentPage * ventasPorPagina;
  const indexOfFirstVenta = indexOfLastVenta - ventasPorPagina;
  const currentVentas = ventas.slice(indexOfFirstVenta, indexOfLastVenta);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <BarraVendedor />
      <div className="container">
        <div className="titulo">
          <h2>Ventas Registradas</h2>
        </div>
        <br />
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Cliente</th>
                <th>Cantidad</th>
                <th>Fecha</th>
                <th>Subtotal</th>
                <th>Total IVA</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {currentVentas.map(venta => (
                <tr key={venta.pkId}>
                  <td>{venta.pkId}</td>
                  <td>{venta.fkIdCustomer && venta.fkIdCustomer.name}</td>
                  <td>{venta.productQuantity}</td>
                  <td>{venta.dateBuy}</td>
                  <td>{venta.subTotal}</td>
                  <td>{venta.totalIva}</td>
                  <td>{venta.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="pagination">
          {currentPage > 1 && (
            <button className="btn btn-secondary" onClick={prevPage}>Anterior</button>
          )}
          {currentVentas.length === ventasPorPagina && (
            <button className="btn btn-secondary" onClick={nextPage}>Siguiente</button>
          )}
        </div>
      </div>
    </>
  );
};

export default ConsultarVentasV;
