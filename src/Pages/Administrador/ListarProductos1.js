import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CSS/consultar_productos.css'

const ListarProductos = () => {
  const [products, setProducts] = useState(new Set());
  const [categories, setCategories] = useState(new Set());
  const [message, setMessage] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState('create');
  const [product, setProduct] = useState({
    pkId: '',
    name: '',
    price: '',
    productQuantity: '',
    description: '',
    measurementUnit: '',
    productReference: '',
    fkIdCategories: {
      pkId: '',
      name: ''
    }
  });

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8087/api/product/all');
      const newProducts = response.data.data;

      // Crear un nuevo conjunto con los productos existentes
      const updatedProducts = new Set([...products]);

      // Actualizar o agregar productos al conjunto
      newProducts.forEach(product => {
        // Verificar si ya existe un producto con el mismo pkId
        const existingProduct = Array.from(updatedProducts).find(p => p.pkId === product.pkId);

        if (existingProduct) {
          // Si existe, actualizar el producto
          Object.assign(existingProduct, product);
        } else {
          // Si no existe, agregarlo al conjunto
          updatedProducts.add(product);
        }
      });

      setProducts(updatedProducts);
      setMessage('');
    } catch (error) {
      console.error('Error al listar los productos', error);
      setMessage('Error al listar los productos');
    }
  };


  const fetchFkIdCategories = async () => {
    try {
      const response = await axios.get('http://localhost:8087/api/category/all');
      const newCategories = response.data.data;
      
      const updatedCategories = new Set([...categories]);

      // Actualizar o agregar productos al conjunto
      newCategories.forEach(categories => {
        // Verificar si ya existe un producto con el mismo pkId
        const existingCategories = Array.from(updatedCategories).find(c => c.pkId === categories.pkId);

        if (existingCategories) {
          // Si existe, actualizar el producto
          Object.assign(existingCategories, categories);
        } else {
          // Si no existe, agregarlo al conjunto
          updatedCategories.add(categories);
        }
      });

      setCategories(updatedCategories);
    } catch (error) {
      console.error('Error al listar las categorias', error);
      setMessage('Error al listar las categorias');
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchFkIdCategories();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'fkIdCategories.pkId') {
      setProduct({
        ...product,
        fkIdCategories: {
          ...product.fkIdCategories,
          pkId: value
        }
      });
    } else {
      setProduct({ ...product, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formType === 'create') {
      await createProduct();
    } else {
      await updateProduct();
    }
  };

  const createProduct = async () => {
    try {
      await axios.post('http://localhost:8087/api/product/create', {
        name: product.name,
        price: product.price,
        productQuantity: product.productQuantity,
        description: product.description,
        measurementUnit: product.measurementUnit,
        productReference: product.productReference,
        fkIdCategories: {
          pkId: product.fkIdCategories.pkId,
          name: product.fkIdCategories.name
        }
      });
      setShowForm(false);
      fetchProducts();
    } catch (error) {
      console.error('Error al crear el producto', error);
      setMessage('Error al crear el producto');
    }
  };

  const updateProduct = async () => {
    try {
      await axios.put(`http://localhost:8087/api/product/update/${product.pkId}`, {
        name: product.name,
        price: product.price,
        productQuantity: product.productQuantity,
        description: product.description,
        measurementUnit: product.measurementUnit,
        productReference: product.productReference,
        fkIdCategories: {
          pkId: product.fkIdCategories.pkId,
          name: product.fkIdCategories.name
        }
      });
      setShowForm(false);
      fetchProducts();
    } catch (error) {
      console.error('Error al actualizar el producto', error);
      setMessage('Error al actualizar el producto');
    }
  };

  const deleteProduct = async (pkId) => {
    try {
      await axios.delete(`http://localhost:8087/api/product/delete/${pkId}`);
      // setProducts(products.filter(product => product.pkId !== pkId)); // Eliminar el producto de la lista de productos
      setMessage('Producto Eliminado :O');
    } catch (error) {
      console.error('Error al eliminar el producto', error);
      setMessage('Error al eliminar el producto');
    }
  };

  const showCreateForm = () => {
    setShowForm(true);
    setFormType('create');
    setProduct({
      pkId: '',
      name: '',
      price: '',
      productQuantity: '',
      description: '',
      measurementUnit: '',
      productReference: '',
      fkIdCategories: {
        pkId: '',
        name: ''
      }
    });
  };

  const showEditForm = (selectedProduct) => {
    if (selectedProduct) {
      setShowForm(true);
      setFormType('edit');
      setProduct({
        pkId: selectedProduct.pkId,
        name: selectedProduct.name,
        price: selectedProduct.price,
        productQuantity: selectedProduct.productQuantity,
        description: selectedProduct.description,
        measurementUnit: selectedProduct.measurementUnit,
        productReference: selectedProduct.productReference,
        fkIdCategories: {
          pkId: selectedProduct.fkIdCategories ? selectedProduct.fkIdCategories.pkId : '',
          name: selectedProduct.fkIdCategories ? selectedProduct.fkIdCategories.name : ''
        }
      });
    } else {
      console.error('Error al seleccionar el producto');
    }
  };

  return (
    <>
      <div className="container-ListProducts">
        <div className="titulo">
          <h2>Productos Registrados</h2>
        </div>
        <br />
        <button onClick={showCreateForm} className="create-new">Añadir Nuevo</button>
        {showForm && (
          <div className='card-tittle'>
            {formType === 'create' ? (
              <>
                <h2 className='tittle-card'>Crear Producto</h2>
              </>
            ) : (
              <>
                <h2 className='tittle-card'>Editar Producto</h2>
              </>
            )}
            <button type="button" className="closeFormButton" onClick={() => setShowForm(false)}><i class="fa-solid fa-xmark"></i> Cancelar</button>
          </div>
        )}
        <div className='card-body'>
          {showForm && (
            <form className="registro_productos" onSubmit={handleSubmit}>
              <div className="registrarProductos">
                <div className="box-create">
                  <label htmlFor="categoria">Categoria: </label>
                  <select className="categorias-select" name='fkIdCategories.pkId' value={product.fkIdCategories.pkId} onChange={handleInputChange}>
                    <option value="" disabled>Seleccione la categoria</option>
                    {[...categories].map((category) => (
                      <option key={category.pkId} value={category.pkId}>{category.name}</option>
                    ))}
                  </select>
                  <br /><br />
                  <label htmlFor="nombre">Nombre: </label><br />
                  <input className="control-create" type="text" name='name' value={product.name} onChange={handleInputChange} placeholder="Escriba el nombre del producto" />
                  <br /><br />
                  <label htmlFor="Precio">Precio: </label><br />
                  <input className="control-create" type="number" name='price' value={product.price} onChange={handleInputChange} placeholder="Ingrese el Precio del producto" required min="1" step="1" />
                  <br /><br />
                  <label htmlFor="cantidad">Cantidad: </label><br />
                  <input className="control-create" type="number" name='productQuantity' value={product.productQuantity} onChange={handleInputChange} placeholder="Ingrese la cantidad del producto" required min="1" max="500" step="1" />
                </div>
                <div className="box-create">
                  <label htmlFor="descripcion">Descripción: </label><br />
                  <textarea className="control-create" name='description' value={product.description} onChange={handleInputChange} rows="3" cols="25"></textarea>
                  <br /><br />
                  <label htmlFor="und_med">Unidad de Medida: </label><br />
                  <input className="control-create" type="text" name='measurementUnit' value={product.measurementUnit} onChange={handleInputChange} placeholder="Ingrese la unidad de medida" required />
                  <br /><br />
                  <label htmlFor="referencia">Referencia: </label><br />
                  <input className="control-create" type="text" name='productReference' value={product.productReference} onChange={handleInputChange} placeholder="Ingrese la referencia del producto" required />
                  <br />
                  <div className='buttons-action'>
                    <button className='button-create' type="submit"> {formType === 'create' ? 'Crear Producto' : 'Editar Producto'} </button>
                    <button className='button-create' onClick={() => setShowForm(false)}><span>Cancelar</span></button>
                  </div>
                  
                </div>
              </div>
            </form>
          )}
        </div>
        <div className="table-responsive">
          <table id="miTabla" className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Categoria</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Descripcion</th>
                <th>Unidad Medida</th>
                <th>Referencia</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {[...products].map(product => (
                <tr key={product.pkId}>
                  <td>{product.pkId}</td>
                  <td>{product.fkIdCategories ? product.fkIdCategories.name : 'N/A'}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.productQuantity}</td>
                  <td>{product.description}</td>
                  <td>{product.measurementUnit}</td>
                  <td>{product.productReference}</td>
                  <td>
                    <button className="editar" onClick={() => showEditForm(product)}>Editar</button>
                    <button className="eliminar" onClick={() => deleteProduct(product.pkId)}>Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {message && <p>{message}</p>}
        </div>
      </div>
    </>
  );
};

export default ListarProductos;
