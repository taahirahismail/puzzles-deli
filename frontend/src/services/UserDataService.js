import http from "../http-common"; 

class UserDataService{
    fetchUsers(){
        return http.get("/users"); 
    }

    fetchUser(id){
        return http.get(`/user/${id}`)
    }

    register(data){
        return http.post("/register", data)
    }

    login(data){
        return http.login("/login", data)
    }

    updateUser(id, data){
        return http.put(`/user/${id}`, data)
    }

    deleteUser(id){
        return http.delete(`/user/${id}`)
    }

}

export default new UserDataService(); 