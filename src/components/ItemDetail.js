import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './ItemCount';
import Swal from 'sweetalert2';
import { NavLink} from "react-router-dom";

function ItemDetail(props){
    console.log(props.product)
    const onAdd = () => {
        Swal.fire({
            title: 'Confirmada!',
            text: 'Tu compra fue confirmada',
            icon: 'success',
            confirmButtonText: 'Cerrar'
        })
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
                <ItemCount onAdd={onAdd} stock={6}/>
                <NavLink to="/context/CartContext"><button className='btn btn-primary rounded-0 type="button"'>Finalizar compra</button></NavLink>
            </div>
        </div>
    )
}

export default ItemDetail;

// Tiene que tener un botón englobado con un link que envíe la información a Cart
// imagen
//     nombre
//     descripción
//     precio
//     condicion (manejar en un estado de la función onAdd, puede ser con un UseState) ? itemCount :  botonFinalizar

// import ItemDetail from "./ItemDetail";

// function Cart() {

//     const [producto, setProducto] = useState('');
//     const [productos, setProductos] = useState([]);

//     const controlarCambio = (event) => {
//         setProducto(event.tarjet.value);
//     }

//     // Agregar contenido al listado
//     const modificarCantidad = () => {
//         const copia = [...productos];
//         copia.push(producto);
//         setProductos(copia);
//         // setProductos([...productos, producto]); abreviado
//     }

// //     return(
// //         <div>
// //             <input onChange={controlarCambio} type='text'></input>
// //             <button Onclick={modificarCantidad}>Agregar</button>
// //             <ItemDetail productos ={productos}/>
// //         </div>
// //     )
// // }

// // export default Cart;