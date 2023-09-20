import axios from "axios";
require("dotenv").config();
// Define as configurações padrões quando cria a instância
const instance = axios.create({
  baseURL: process.env.development.VUE_APP_API_URL
});

// Altera as configurações padrões após a instância ser criada
instance.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`;

export default instance;
