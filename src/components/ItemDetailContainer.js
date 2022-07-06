import React, { useEffect, useState } from 'react';
import ItemCount from './ItemCount';
import Swal from 'sweetalert2';
import ItemList from './ItemList';
import Item  from './Item';
import BarLoader from "react-spinners/BarLoader";

const promise = new Promise((res, rej) =>{
    setTimeout(()=>{
        res(Item);
    },2000);
});

function ItemListContainer(greeting) {
    const {subtitulo} = greeting;
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([Item]);

    const onAdd = () => {
        Swal.fire({
            title: 'Confirmada!',
            text: 'Su reserva fue confirmada',
            icon: 'succes',
            confirmButtonText: 'Cerrar'
        })
    }

    useEffect(()=>{
        promise
        .then((products)=>{
            setProducts(products);
        })
        .catch((error)=>{
            console.log(error= 'Error');
        })
        .finally(()=>{
            setLoading(false);
        })
    }, []);

    return (
        <>
        <p>{subtitulo}</p>
        <h1>{products}</h1>
        <h2>{loading}</h2>
        <ItemCount onAdd={onAdd} stock={6}/>
        <ItemList/>
        <BarLoader/>
        </>
    );
}

export default ItemListContainer;