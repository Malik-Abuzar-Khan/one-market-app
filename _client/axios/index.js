import axios from "axios";

const ip = '192.168.1.8';
const axiosBase = axios.create({
    baseURL: `http://${ip}:3001`
})

export default axiosBase;