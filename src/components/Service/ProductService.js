import axios from "axios";

const Product_Api_Url = "http://localhost:8087/api/product";

class ProductService {
    getAllProducts() {
        return axios.get(`${Product_Api_Url}/all`);
    }

    getProductById(id) {
        return axios.get(`${Product_Api_Url}/all/${id}`); 
    }

    createProduct(product) {
        return axios.post(`${Product_Api_Url}/create`, product);
    }

    updateProduct(id, product) { 
        return axios.put(`${Product_Api_Url}/update/${id}`, product); 
    }
}

export default new ProductService();
