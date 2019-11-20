import axios from "axios";

const host = process.env.DB_HOST || "http://localhost:3333";
const api = axios.create({
  baseURL: host
});

export default api;
