import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://localhost:7178/api/',
    withCredentials: false,
    headers: {
        'Access-Control-Allow-Origin' : true,
        "Content-Type": "application/json"
    }
})

export default instance;