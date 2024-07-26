import {getData} from "./http.js";

const fetchCategories = async () =>{
    try {
        const categories = await getData('https://fakestoreapi.com/products/categories');
        return ('categories: ', categories);

    } catch (error) {
        console.error('Error fetching categories:', error);
    }
}
fetchCategories();


const fetchProducts = async () =>{
    try {
        const products = await getData('https://fakestoreapi.com/products');
        return ("products: ",products);
        
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}
fetchProducts();