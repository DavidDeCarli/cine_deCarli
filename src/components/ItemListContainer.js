import React, { useEffect, useState } from 'react';
import ItemCount from './ItemCount';
import Swal from 'sweetalert2';
import ItemList from './ItemList';
import BarLoader from "react-spinners/BarLoader";
import InitialProducts from './InitialProducts';
import ItemDetailContainer from './ItemDetailContainer';

const promise = new Promise((res, rej) =>{
    setTimeout(()=>{
        res(InitialProducts);
    },2000);
});

function ItemListContainer(greeting) {
    const {subtitulo} = greeting;
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

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
        <ItemCount onAdd={onAdd} stock={6}/>
        {loading ? <BarLoader/> : <ItemList InitialProducts={products}/>}
        <ItemDetailContainer/>
        </>
    );
}

export default ItemListContainer;