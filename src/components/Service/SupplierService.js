import axios from "axios";

const Supplier_Api_Url = "http://localhost:8087/api/supplier";

class SupplierService {
    getAllSupplier() {
        return axios.get(`${Supplier_Api_Url}/all`);
    }

    getSupplierById(nit) {
        return axios.get(`${Supplier_Api_Url}/${nit}`); 
    }

    createSupplier(supplier) {
        return axios.post(`${Supplier_Api_Url}/create`, supplier);
    }

    updateSupplier(nit, supplier) { 
        return axios.put(`${Supplier_Api_Url}/update/${nit}`, supplier); 
    }
}

export default new SupplierService();
