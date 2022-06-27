import React, { useState } from 'react';
import ItemCount from './ItemCount';
import Swal from 'sweetalert2';

function ItemListContainer(props) {
    const {subtitulo} = props;

    const [productos, setProductos] = useState([]);

    const onAdd = () => {
        Swal.fire({
            title: 'Confirmada!',
            // text: `Usted reservó ${reserva} entrada/s`,
            text: 'Su reserva fue confirmada',
            icon: 'succes',
            confirmButtonText: 'Cerrar'
        })
    }

    return (
        <>
        <p>{subtitulo}</p>
        <ItemCount productos={productos} onAdd={onAdd} stock={6}/>
        </>
    );
}

export default ItemListContainer;