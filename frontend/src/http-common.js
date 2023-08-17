import axios from 'axios'; 

export default axios.create({
    baseURL: ("https://puzzles-deli-db.onrender.com/Products"),
    headers: {
        "Content-type": "application/json"
    }
});