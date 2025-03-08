import axios from "axios";

const baseURL = "http://localhost:3001";


// Configurando a chamada para api
export function listar() {
    const response = axios.get(`${baseURL}/noticias`);    
    return response;
}