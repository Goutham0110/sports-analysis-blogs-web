import axios from "axios";
import configs from "../configs/configs";

//create axios instance with base URL and common request content type
const apiInstance = axios.create({
    baseURL: configs.BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});


export default apiInstance;