import axios from "axios";

const baseURL = "http://localhost:3001";


// Configurando a chamada para api
export function listar() {
    const response = axios.get(`${baseURL}/noticias`);    
    return response;
}

// Configurando a chamada para api
export function listarTopNoticias() {
    const response = axios.get(`${baseURL}/noticias/top`);    
    return response;
}