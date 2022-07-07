import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import BarLoader from "react-spinners/BarLoader";
import { useParams } from 'react-router-dom';


function ItemDetailContainer(){
    const [products2, setProducts2] =useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    let {id} =useParams();

    useEffect(() =>{
        const URL = `https://fakestoreapi.com/products/${id}`;
        const getItem = async () => {
            try{
                const response = await fetch(URL);
                const data = await response.json();
                setProducts2(data);
            }catch{
                setError(true);
            }finally{
                setLoading(false);
            }
        }

        setTimeout(()=>{
            getItem();
        },2000);

    }, [id]);

    return(
        <>
            {loading ? <BarLoader/> : 
                error ? <p>Error</p> :
                    <ItemDetail product={products2}/>
            }
        </>
    )
}

export default ItemDetailContainer;