import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './ItemCount';
import Swal from 'sweetalert2';

function ItemDetail(props){
    const [itemsAlCarrito, setItemsAlCarrito] = useState(0);
    const [stock, setStock] = useState(6);
    const [finalizando, setFinalizando] = useState(false);
    const onAdd = (cantidad) => {
        Swal.fire({
            title: 'Confirmada!',
            text: 'Tu compra fue confirmada',
            icon: 'success',
            confirmButtonText: 'Cerrar'
        })
        setItemsAlCarrito(cantidad);
        setFinalizando(true);
        console.log('stock: ', stock)
    }

    return (
        <div className='container'>
            <div className='container d-flex justify-content-center bg-info col-sm-4'>
                <div id={props.product.id}>
                    <div className='card text-center bg-dark'>
                        <img src={props.product.image} alt={props.product.title}></img>
                        <div className='card-body text-light'>
                            <h2 className='card-title'>{props.product.title}</h2>
                            <h4 className='card-title'>${props.product.price}</h4>
                            <p className='card-text text-secondary'>{props.product.category}</p>
                            <p className='card-text text-secondary'>{props.product.description}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container d-row text-center bg-info col-sm-4'>
                <ItemCount onAdd={onAdd} stock={stock} setStock={setStock} finalizando={finalizando} />
            </div>
        </div>
    )
}

export default ItemDetail;