import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:2503",
});

export default api;
