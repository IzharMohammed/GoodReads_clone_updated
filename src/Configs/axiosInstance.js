import axios from "axios";

const instance =axios.create();
console.log('url',import.meta.env.VITE_BACKEND_URL);
instance.defaults.baseURL=import.meta.env.VITE_BACKEND_URL;

export default instance;