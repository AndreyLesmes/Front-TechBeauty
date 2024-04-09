import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CSS/registrar_Producto.css';
import ProductService from '../../Service/ProductService';

const CrearProducto = () => {
  const [categoria, setCategoria] = useState('');
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [unidadMedida, setUnidadMedida] = useState('');
  const [referencia, setReferencia] = useState('');

  const obtenerNombreCategoria = (category) => {
    switch (category) {
      case '1':
        return 'Maquillaje';
      case '2':
        return 'Cuidado Facial';
      case '3':
        return 'Cuidado Corporal';
      case '4':
        return 'Esmaltes';
      case '5':
        return 'Cabello';
      default:
        return '';
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nombreCategoria = obtenerNombreCategoria(categoria);

    const product = {
      fkIdCategories: {
        pkId: categoria,
        name: nombreCategoria
      },
      name: nombre,
      price: precio,
      productQuantity: cantidad,
      description: descripcion,
      measurementUnit: unidadMedida,
      productReference: referencia
    };

    try {
      await ProductService.createProduct(product);
      alert('Producto creado exitosamente');
      window.location.href = '/ListarProductos'; // Redirect to list of products
    } catch (error) {
      console.error('Error al crear el producto:', error);
      alert('Error al crear el producto');
    }
  };

  return (
    <div className="container-createProduct">
      <main>
        <div className="contentCreate-container">
          <h1>Registrar Productos</h1>
          <form className="registro_productos" onSubmit={handleSubmit}>
            <div className="registrarProductos">
              <div className="box-create">
                <label htmlFor="categoria">Categoria: </label>
                <select className="categorias-select" value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                  <option value="" disabled>Seleccione la categoria</option>
                  <option value="1">Maquillaje</option>
                  <option value="2">Cuidado Facial</option>
                  <option value="3">Cuidado Corporal</option>
                  <option value="4">Esmaltes</option>
                  <option value="5">Cabello</option>
                </select>
                <br /><br />
                <label htmlFor="nombre">Nombre: </label><br />
                <input className="control-create" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Escriba el nombre del producto" />
                <br /><br />
                <label htmlFor="Precio">Precio: </label><br />
                <input className="control-create" type="number" value={precio} onChange={(e) => setPrecio(e.target.value)} placeholder="Ingrese el Precio del producto" required min="1" step="1" />
                <br /><br />
                <label htmlFor="cantidad">Cantidad: </label><br />
                <input className="control-create" type="number" value={cantidad} onChange={(e) => setCantidad(e.target.value)} placeholder="Ingrese la cantidad del producto" required min="1" max="500" step="1" />
              </div>
              <div className="box-create">
                <label htmlFor="descripcion">Descripción: </label><br />
                <textarea className="control-create" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} rows="3" cols="25"></textarea>
                <br /><br />
                <label htmlFor="und_med">Unidad de Medida: </label><br />
                <input className="control-create" type="text" value={unidadMedida} onChange={(e) => setUnidadMedida(e.target.value)} placeholder="Ingrese la unidad de medida" required />
                <br /><br />
                <label htmlFor="referencia">Referencia: </label><br />
                <input className="control-create" type="text" value={referencia} onChange={(e) => setReferencia(e.target.value)} placeholder="Ingrese la referencia del producto" required />
                <br />
                <div className='buttons-action'>
                  <input type="submit" className='button-create' name="submit" value="Crear Producto" />
                  <Link className="button-create" to={"/ListarProductos"}>Cancelar</Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default CrearProducto;
