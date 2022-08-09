import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import BarLoader from "react-spinners/BarLoader";
import { useParams } from 'react-router-dom';
import { db } from '../firebase/firebase';
import { getDoc, collection, doc } from "firebase/firestore";

function ItemDetailContainer(){
    const [products2, setProducts2] =useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const { productId } = useParams();

    useEffect(() =>{
        const productCollection = collection(db, 'productos');    
        const refDoc = doc(productCollection, productId);
        getDoc(refDoc)
        .then(result => {
            const producto = {
                id: result.id,
                ...result.data(),
            }
            setProducts2(producto);
        })
        .catch(() => setError(true))
        .finally(() => setLoading(false))

    }, [productId]);

    return(
        <>  
            {error ? <span>Error</span> : null}
            {loading ? <BarLoader/> : <ItemDetail product={products2}/>}
        </>
    )
}

export default ItemDetailContainer;