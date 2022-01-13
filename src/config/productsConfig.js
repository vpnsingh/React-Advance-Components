import { MAIN_URL } from './Url';
import axios from 'axios';

export function getProducts() {
    return axios.get(MAIN_URL);
}

export function getProductById(id) {
    return axios.get(`${MAIN_URL}${id}`)
}

export function addProducts(data) {
    return axios.post(MAIN_URL,data);
}

export function deleteProduct(id) {
    return axios.delete(`${MAIN_URL}${id}`);
}

export function updateProduct(id,data) {
    return axios.put(`${MAIN_URL}${id}`,data);
}