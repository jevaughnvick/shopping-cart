import { useState, useEffect } from "react";
import ItemCard from "./ItemCard";

export default function Items(){

    const [ products, setProducts ] = useState(null);
    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {

        fetch('https://fakestoreapi.com/products', {mode: "cors"})
        .then(response => {

            if(response.status >= 400){
                throw new Error("server error");
            }
            return response.json();
        })
        .then(json => setProducts(json))
        .catch(error => setError(error))
        .finally(() => setLoading(false));
    }, []);

    if(loading) return <p>Loading...</p>

    if(error) return <p>A network error was encountered.</p>;

    return(
        <ul id="items">
            {products.map(product => (
                <ItemCard key={product.id} product={product} />
            ))}
        </ul>
    )
}