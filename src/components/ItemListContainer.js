import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import BarLoader from "react-spinners/BarLoader";
import { useParams } from 'react-router-dom';
import { db } from '../firebase/firebase';
import { getDocs, collection, query, where} from "firebase/firestore";

function ItemListContainer(greeting) {
    const {subtitulo} = greeting;
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false)
    let { categoryName } = useParams();

    categoryName = categoryName !== undefined ? categoryName : false;


    useEffect(() =>{
        const productCollection = collection(db, 'productos');
        let q = false;

        if(categoryName){
            q = query(productCollection, where('category', '==', categoryName));
        } else {
            q = query(productCollection);
        }

        getDocs(q)
            .then(result => {
                const lista = result.docs.map(doc => {
                    return {
                        id: doc.id,
                        ...doc.data(),
                    }
                })
                setProducts(lista);
            })
            .catch(() => setError(true))
            .finally(() => setLoading(false));

    }, [categoryName]);

    return (
        <>
        <p>{subtitulo}</p>
        {error ? <span>Error</span> : null}
        {loading ? <BarLoader/> : <ItemList InitialProducts={products}/>}
        </>
    );
}

export default ItemListContainer;