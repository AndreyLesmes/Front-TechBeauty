import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductService from '../../Service/ProductService';
import './CSS/registrar_Producto.css';

const EditarProducto = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState({ id: '', categoria: '', nombre: '', precio: '', cantidad: '', descripcion: '', unidadMedida: '', referencia: '' });

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await ProductService.getProductById(id);
                const data = response.data;
    
                if (data && data.data) {
                    const productData = data.data;
                    setProducto({ id: productData.pkId || '', categoria: (productData.fkIdCategories && productData.fkIdCategories.pkId) || '', nombre: productData.name || '', precio: productData.price || '', cantidad: productData.productQuantity || '', descripcion: productData.description || '', unidadMedida: productData.measurementUnit || '', referencia: productData.productReference || '' });
                } else {
                    console.error('Error: No se encontraron datos válidos en la respuesta.');
                }
            } catch (error) {
                console.error('Error al obtener el producto:', error);
            }
        };
    
        fetchProduct();
    }, [id]);
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        const updatedProduct = {
            pkId: producto.id,
            fkIdCategories: { pkId: producto.categoria },
            name: producto.nombre,
            price: producto.precio,
            productQuantity: producto.cantidad,
            description: producto.descripcion,
            measurementUnit: producto.unidadMedida,
            productReference: producto.referencia
        };

        try {
            await ProductService.updateProduct(id, updatedProduct);
            alert('Producto actualizado exitosamente');
        } catch (error) {
            console.error('Error al actualizar el producto:', error);
            alert('Error al actualizar el producto');
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProducto({ ...producto, [name]: value });
    };

    return (
        <div className="modal fade" id="editarProductoModal" tabIndex="-1" role="dialog" aria-labelledby="editarProductoModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="editarProductoModalLabel">Editar Producto</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <input type="hidden" name="id" value={producto.id} />
                            <div className="form-group">
                                <label htmlFor="categoria">Categoria:</label>
                                <select className="form-control" name="categoria" id="categoria" value={producto.categoria} onChange={handleChange}>
                                    <option value="">Seleccione la categoria</option>
                                    <option value="1">Maquillaje</option>
                                    <option value="2">Cuidado Facial</option>
                                    <option value="3">Cuidado Corporal</option>
                                    <option value="4">Esmaltes</option>
                                    <option value="5">Cabello</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre:</label>
                                <input type="text" className="form-control" name="nombre" id="nombre" value={producto.nombre} onChange={handleChange} placeholder="Escriba el nombre del producto" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="precio">Precio:</label>
                                <input type="number" className="form-control" name="precio" id="precio" value={producto.precio} onChange={handleChange} placeholder="Ingrese el Precio del producto" required min="1" step="1" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="cantidad">Cantidad:</label>
                                <input type="number" className="form-control" name="cantidad" id="cantidad" value={producto.cantidad} onChange={handleChange} placeholder="Ingrese la cantidad del producto" required min="1" max="500" step="1" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="descripcion">Descripción:</label>
                                <textarea className="form-control" name="descripcion" id="descripcion" value={producto.descripcion} onChange={handleChange} rows="3" cols="25"></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="unidadMedida">Unidad de Medida:</label>
                                <input type="text" className="form-control" name="unidadMedida" id="unidadMedida" value={producto.unidadMedida} onChange={handleChange} placeholder="Ingrese la unidad de medida" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="referencia">Referencia:</label>
                                <input type="text" className="form-control" name="referencia" id="referencia" value={producto.referencia} onChange={handleChange} placeholder="Ingrese la referencia del producto" required />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                <button type="submit" className="btn btn-primary">Actualizar Producto</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditarProducto;
