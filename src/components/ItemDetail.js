import React, {useState, useContext} from 'react';
import { CartContext } from "../context/CartContext";
import ItemCount from './ItemCount';
import Swal from 'sweetalert2';

function ItemDetail(props){
    const { addProduct } = useContext(CartContext);
    const [stock, setStock] = useState(0);
    const [finalizando, setFinalizando] = useState(false);
    const onAdd = (cantidad) => {
        if(cantidad > 0){
            Swal.fire({
                title: 'Directo al carrito',
                text: 'Se agrego el producto al carrito',
                icon: 'success',
                confirmButtonText: 'Cerrar'
            })
            addProduct(props.product, cantidad)
            setFinalizando(true);
            console.log(stock);
        }
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
                            <p className='card-text text-secondary'>{props.product.stock}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container d-row text-center bg-info col-sm-4'>
                <ItemCount onAdd={onAdd} stock={props.product.stock} setStock={setStock} finalizando={finalizando} />
            </div>
        </div>
    )
}

export default ItemDetail;