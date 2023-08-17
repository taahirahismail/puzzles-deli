import http from "../http-common"; 

class ProductDataService{
    fetchProducts(){
        return http.get("/products");
    }

    fetchProduct(id){
        return http.get(`/product/${id}`);
    }

    addProduct(data){
        return http.post("/product", data);
    }

    updateProduct(id, data){
        return http.put(`/product/${id}`, data)
    }

    deleteProduct(id){
        return http.delete(`/product/${id}`)
    }
}

export default new ProductDataService();