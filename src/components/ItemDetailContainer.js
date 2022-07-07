import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import BarLoader from "react-spinners/BarLoader";
import { useParams } from 'react-router-dom';


function ItemDetailContainer(){
    const [products2, setProducts2] =useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const {id} =useParams();

    useEffect(() =>{
        const getProducts = `https://fakestoreapi.com/products/${id}`;
        const getItem = async () => {
            try{
                const response = await fetch(getProducts);
                const data = await response.json();
                setProducts2(data);
            }catch{
                setError(true);
            }finally{
                setLoading(false);
            }
        }
        getItem();
    }, [id]);

    return(
        <>
            {loading ? <BarLoader/> : 
                error ? <p>Error</p> :
                    <ul>{products2.map((product) => < key={product.id}>{product.title})} </ul>}
            
        </>
    )
}

export default ItemDetailContainer;