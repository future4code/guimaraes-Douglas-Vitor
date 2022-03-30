import { useState, useEffect } from 'react';

export const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        console.log("Api foi chamada")
        setProducts(["chá", "frutas"])
    }, []);

    return products;
}