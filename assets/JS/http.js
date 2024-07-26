export const getData = async (url) =>{
    try {
        const result = await fetch(url);
        const parsedResult = await result.json();
        console.log(parsedResult);
    } catch (error) {
        console.error('Error fetching categories and products:', error);
    }
}