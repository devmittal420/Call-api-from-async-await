import {getData} from "./http.js";

const fetchCategories = async () =>{
    try {
        const categories = await getData('https://fakestoreapi.com/products/categories');
        console.log(categories);
        return categories;
    } catch (error) {
        console.error('Error fetching categories:', error);
    }
}

const fetchProducts = async () =>{
    try {
        const products = await getData('https://fakestoreapi.com/products');
        console.log(products);
        return products;
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

const categoriesAndProducts = async () =>{

    const success = await fetchCategories();
    if(success)
    {
        await fetchProducts();
    }
    else{
        console.error("error");
    }
    
}

categoriesAndProducts();
