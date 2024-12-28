import axios from "axios";
import { useEffect, useState } from "react";

export const useApiHook = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getProducts() {
            setLoading(true);
            try {
                const response = await axios.get('https://dummyjson.com/products');
                const modifiedData = response.data.products.filter((product) => {
                    return product.tags.some((tag) => tag.toLowerCase() === 'beauty');
                }) || [];
                setData(modifiedData);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        }
        getProducts();
    }, [])

    return {data, loading};
}