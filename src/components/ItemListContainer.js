import React, { useEffect, useState } from 'react';
import ItemCount from './ItemCount';
import Swal from 'sweetalert2';
import ItemList from './ItemList';
import BarLoader from "react-spinners/BarLoader";
import ItemDetailContainer from './ItemDetailContainer';

function ItemListContainer(greeting) {
    const {subtitulo} = greeting;
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false)

    const onAdd = () => {
        Swal.fire({
            title: 'Confirmada!',
            text: 'Tu compra fue confirmada',
            icon: 'success',
            confirmButtonText: 'Cerrar'
        })
    }

    useEffect(() =>{
        const URL = `https://fakestoreapi.com/products`;
        const getItems = async () => {
            try{
                const response = await fetch(URL);
                const data = await response.json();
                console.log(data)
                setProducts(data);
            }catch{
                setError(true);
            }finally{
                setLoading(false);
            }
        }

        setTimeout(()=>{
            getItems();
        },2000);

    }, []);

    return (
        <>
        <p>{subtitulo}</p>
        <ItemCount onAdd={onAdd} stock={6}/>
        {error ? <span>Error</span> : null}
        {loading ? <BarLoader/> : <ItemList InitialProducts={products}/>}
        <ItemDetailContainer/>
        </>
    );
}

export default ItemListContainer;