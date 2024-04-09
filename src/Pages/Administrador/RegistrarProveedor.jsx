import React, { useState } from 'react';
import './CSS/proveedores_style.css';
import SupplierService from '../../Service/SupplierService';

const RegistrarProveedor = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [celular, setCelular] = useState('');
  const [nit, setNit] = useState('');
  const [razonSocial, setRazonSocial] = useState('');
  const [marca, setMarca] = useState('');
  const [direccion, setDireccion] = useState('');
  const [productos, setProductos] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const supplier = {
      name: nombre,
      lastName: apellido,
      email: correo,
      telephone: celular,
      pkNit: nit,
      companyName: razonSocial,
      supplierBrand: marca,
      address: direccion,
      productType: productos
    };

    try {
      await SupplierService.createSupplier(supplier);
      alert('Proveedor creado exitosamente');
    } catch (error) {
      console.error('Error al crear el proveedor:', error);
      alert('Error al crear el proveedor');
    }
  };

  return (
    <div className="containerCreateSupplier">
      <main>
        <div className="contentContainer-Supplier">
          <h2 className='tituloSupplier'>Registrar Proveedor</h2>
          <form className="registrarProveedor" onSubmit={handleSubmit}>
            <div className="proveedores">
              <div className="boxCreate-Supplier">
                <label htmlFor="Nombre">Nombre: </label><br />
                <input className="barra-create" type="text" id="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Ingrese el Nombre" />
                <br /><br />
                <label htmlFor="Apellido">Apellido: </label><br />
                <input className="barra-create" type="text" id="Apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} placeholder="Ingrese el Apellido" required />
                <br /><br />
                <label htmlFor="correo">Correo: </label><br />
                <input className="barra-create" type="email" id="correo" value={correo} onChange={(e) => setCorreo(e.target.value)} placeholder="Ingrese el Correo" required />
                <br /><br />
                <label htmlFor="Celular">Celular: </label><br />
                <input className="barra-create" type="number" id="Celular" value={celular} onChange={(e) => setCelular(e.target.value)} placeholder="Ingrese el Número de Teléfono" required maxLength="10" />
                <br /><br />
                <label htmlFor="Nit">Nit: </label><br />
                <input className="barra-create" type="text" id="Nit" value={nit} onChange={(e) => setNit(e.target.value)} placeholder="Ingrese el NIT" required />
                <br /><br />
              </div>
              <div className="boxCreate-Supplier">
                <label htmlFor="RSocial">Razón Social: </label><br />
                <input className="barra-create" type="text" id="RSocial" value={razonSocial} onChange={(e) => setRazonSocial(e.target.value)} placeholder="Ingrese Nombre de la Empresa" required />
                <br /><br />
                <label htmlFor="marca">Marca: </label><br />
                <input className="barra-create" type="text" id="marca" value={marca} onChange={(e) => setMarca(e.target.value)} placeholder="Ingrese la Marca" />
                <br /><br />
                <label htmlFor="direccion">Dirección: </label><br />
                <input className="barra-create" type="text" id="direccion" value={direccion} onChange={(e) => setDireccion(e.target.value)} placeholder="Dirección de la Empresa" />
                <br /><br />
                <label htmlFor="productos">Listado de Productos: </label><br />
                <textarea name="productos" className='productosTextArea' id="productos" value={productos} onChange={(e) => setProductos(e.target.value)} rows="7" cols="25" placeholder="Ingrese los productos que distribuye"></textarea>
                <br /><br />
                <button type="submit" className='button-save'>Guardar</button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default RegistrarProveedor;
