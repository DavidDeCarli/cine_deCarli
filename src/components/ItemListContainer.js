import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import BarLoader from "react-spinners/BarLoader";
import { useParams } from 'react-router-dom';

function ItemListContainer(greeting) {
    const {categoryName} = useParams();
    const {subtitulo} = greeting;
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false)

    const URL = categoryName ? `https://fakestoreapi.com/products/category/${categoryName}` : `https://fakestoreapi.com/products`;

    useEffect(() =>{
        const getItems = async () => {
            try{
                const response = await fetch(URL);
                const data = await response.json();
                setProducts(data);
            }catch{
                setError(true);
            }finally{
                setLoading(false);
                console.log(error);
            }
        }

        setTimeout(()=>{
            getItems();
        },2000);

    }, [categoryName]);

    return (
        <>
        <p>{subtitulo}</p>
        {loading ? <BarLoader/> : <ItemList InitialProducts={products}/>}
        </>
    );
}

export default ItemListContainer;