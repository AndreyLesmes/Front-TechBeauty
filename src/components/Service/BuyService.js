import axios from "axios";

const Buy_Api_Url = "http://localhost:8087/api/buy";

class BuyService {
    getAllBuys() {
        return axios.get(`${Buy_Api_Url}/all`);
    }

    getBuyById(id) {
        return axios.get(`${Buy_Api_Url}/all/${id}`); 
    }

    createBuy(Buy) {
        return axios.post(`${Buy_Api_Url}/create`, Buy);
    }

    updateBuy(id, Buy) { 
        return axios.put(`${Buy_Api_Url}/update/${id}`, Buy); 
    }
}

export default new BuyService();
