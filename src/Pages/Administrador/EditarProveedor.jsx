import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import SupplierService from '../../Service/SupplierService';
import './CSS/editarProveedor.css';

const EditarProveedor = () => {
    const { nit } = useParams();

    const [proveedor, setProveedor] = useState({
        pkNit: '',
        name: '',
        lastName: '',
        address: '',
        telephone: '',
        email: '',
        companyName: '',
        productType: '',
        supplierBrand: ''
    });

    useEffect(() => {
        const fetchProvider = async () => {
            try {
                const response = await SupplierService.getSupplierById(nit);
                const data = response.data;

                if (data && data.data) {
                    const providerData = data.data;
                    setProveedor({
                        pkNit: providerData.pkNit || '',
                        name: providerData.name || '',
                        lastName: providerData.lastName || '',
                        address: providerData.address || '',
                        telephone: providerData.telephone || '',
                        email: providerData.email || '',
                        companyName: providerData.companyName || '',
                        productType: providerData.productType || '',
                        supplierBrand: providerData.supplierBrand || ''
                    });
                } else {
                    console.error('Error: No se encontraron datos válidos en la respuesta.');
                }
            } catch (error) {
                console.error('Error al obtener el proveedor:', error);
            }
        };

        fetchProvider();
    }, [nit]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const updatedProveedor = {
            pkNit: proveedor.pkNit,
            name: proveedor.name,
            lastName: proveedor.lastName,
            address: proveedor.address,
            telephone: proveedor.telephone,
            email: proveedor.email,
            companyName: proveedor.companyName,
            productType: proveedor.productType,
            supplierBrand: proveedor.supplierBrand
        };

        try {
            await SupplierService.updateSupplier(nit, updatedProveedor);
            alert('Proveedor actualizado exitosamente');
        } catch (error) {
            console.error('Error al actualizar el proveedor:', error);
            alert('Error al actualizar el proveedor');
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProveedor({ ...proveedor, [name]: value });
    };

    return (
        <div className="container-editSupplier">
            <main>
                <div className="contentSupplier-container">
                    <h1>Editar Proveedor</h1>
                    <form className="registro_proveedores" onSubmit={handleSubmit}>
                        <div className="registroSupplier">
                            <div className="boxEdit-Supplier">
                                <input type="hidden" name="pkNit" value={proveedor.pkNit} />
                                <label htmlFor="name">Nombre: </label>
                                <input className="control-EditSupplier" type="text" name="name" id="name" placeholder="Escriba el nombre del proveedor: " value={proveedor.name} onChange={handleChange} />
                                <br /><br />
                                <label htmlFor="lastName">Apellido: </label>
                                <input className="control-EditSupplier" type="text" name="lastName" id="lastName" placeholder="Escriba el apellido del proveedor: " value={proveedor.lastName} onChange={handleChange} />
                                <br /><br />
                                <label htmlFor="address">Dirección: </label>
                                <input className="control-EditSupplier" type="text" name="address" id="address" placeholder="Ingrese la dirección del proveedor: " value={proveedor.address} onChange={handleChange} />
                                <br /><br />
                                <label htmlFor="telephone">Teléfono: </label>
                                <input className="control-EditSupplier" type="text" name="telephone" id="telephone" placeholder="Ingrese el teléfono del proveedor: " value={proveedor.telephone} onChange={handleChange} />
                                <br /><br />
                                <label htmlFor="email">Email: </label>
                                <input className="control-EditSupplier" type="email" name="email" id="email" placeholder="Ingrese el email del proveedor: " value={proveedor.email} onChange={handleChange} />
                                <br /><br />
                                <label htmlFor="companyName">Razón Social: </label>
                                <input className="control-EditSupplier" type="text" name="companyName" id="companyName" placeholder="Ingrese la razón social del proveedor: " value={proveedor.companyName} onChange={handleChange} />
                            </div>
                            <div className="boxEdit-Supplier">
                                <label htmlFor="productType">Tipo de Producto: </label>
                                <input className="control-EditSupplier" type="text" name="productType" id="productType" placeholder="Ingrese el tipo de producto del proveedor: " value={proveedor.productType} onChange={handleChange} />
                                <br /><br />
                                <label htmlFor="supplierBrand">Marca: </label>
                                <input className="control-EditSupplier" type="text" name="supplierBrand" id="supplierBrand" placeholder="Ingrese la marca del proveedor: " value={proveedor.supplierBrand} onChange={handleChange} />
                                <div className="boton-container">
                                    <input type="submit" className='button-editSupplier' name="submit" value="Editar Proveedor" />
                                    <br />
                                    <Link to={"/ListarProveedores"} className="botonRegresar" >Regresar</Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default EditarProveedor;
