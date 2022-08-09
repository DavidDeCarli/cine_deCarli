import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { db } from '../firebase/firebase'
import { addDoc, collection, serverTimestamp, updateDoc, doc } from 'firebase/firestore'
import Swal from 'sweetalert2';

function Cart() {
    const { products, addProduct, deleteProduct, clear } = useContext(CartContext);
    const [nombreCliente, setNombreCliente] = useState("");
    const [telefonoCliente, setTelefonoCliente] = useState("");
    const [emailCliente, setEmailCliente] = useState("");

    const cambiarNombreCliente = (event) => {
        setNombreCliente(event.target.value)
    }

    const cambiarEmailCliente = (event) => {
        setEmailCliente(event.target.value)
    }

    const cambiarTelefonoCliente = (event) => {
        setTelefonoCliente(event.target.value)
    }

    const finalizarCompra = () => {
        const datosComprador = {
            nombre: nombreCliente,
            telefono: telefonoCliente,
            email: emailCliente,
        }
        const listaProductos = [];
        let totalPrice = 0;

        products.forEach((product) => {
            listaProductos.push({
                id: product.id,
                title: product.title,
                price: product.price,
                quantity: product.qty
            });

            totalPrice += product.qty * product.price;

            const updateCollection = doc(db, 'productos', product.id);
            updateDoc(updateCollection, { stock: product.stock - product.qty });
        });

        const ventasColeection = collection(db, 'ventas');
        addDoc(ventasColeection, {
            datosComprador, 
            items: listaProductos,
            date: serverTimestamp(),
            total: totalPrice
        })
        .then((result) => {
            Swal.fire({
                title: 'Confirmada!',
                text: 'Compra finalizada #' + result.id,
                icon: 'success',
                confirmButtonText: 'Cerrar'
            }).then (() => {
                window.location= "/"
            })
        });
    }

    return(
        <>
        {products.length === 0
            ? <h1>No hay productos, busca <Link to="/">acá</Link></h1>
            : <>{products.map((product, key) =><div key={key}><h1 key={product.id}>{product.title} ${product.price} cantidad: {product.qty} precio total: {product.totalPrice}</h1>
                    <button style={styles.margin} type="button" className="btn btn-dark" onClick={() => addProduct(product, 1)}>Agregar</button>
                    <button style={styles.margin} type="button" className="btn btn-dark" onClick={() => deleteProduct(product.id)}>Quitar</button>
            </div> )}
            <button style={styles.margin} type="button" className="btn btn-dark" onClick={clear}>Reset</button>
            <button style={styles.margin} type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#formularioModal">Finalizar</button>
            <div className="modal fade" id="formularioModal" tabindex="-1" aria-labelledby="formularioModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="formularioModalLabel">Ingrese sus datos</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <div className="mb-3">
                            <label for="name" className="form-label">Nombre y Apellido</label>
                            <input type="text" className="form-control" id="name" placeholder="Juan Pérez" value={nombreCliente} onChange={cambiarNombreCliente}/> 
                        </div>
                        <div className="mb-3">
                            <label for="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="juan@gmail.com" value={emailCliente} onChange={cambiarEmailCliente}/> 
                        </div>
                        <div className="mb-3">
                            <label for="phone" className="form-label">Teléfono</label>
                            <input type="number" className="form-control" id="phone" placeholder="1155122147" value={telefonoCliente} onChange={cambiarTelefonoCliente}/> 
                        </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" className="btn btn-primary" onClick={finalizarCompra}>Realizar pedido</button>
                        </div>
                    </div>
                </div>
            </div>
            </>
        }
        </>
    )
}

export default Cart;

const styles = {
    margin:{
        margin: 10,
    },
}