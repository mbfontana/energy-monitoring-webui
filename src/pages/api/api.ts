import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_CRUD_SERVICE;

const api = axios.create({ baseURL });

export default api;
