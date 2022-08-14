import React, {useState} from 'react';
import { NavLink } from "react-router-dom";
import ButtonGroup from "@mui/material/ButtonGroup";

const ItemCount = ({stock, onAdd, setStock, finalizando}) => {
    const [cantidad, setCantidad] = useState(0);
    const increase = () => {
        if (stock > 0 && cantidad !== stock) {
            setCantidad(cantidad + 1);
            setStock(stock - 1);
        } else {
            console.log("No hay más stock")
        }
    }
    const decrease = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
            setStock(stock + 1);
        }
    }
    return (
        <div className="container-fluid">
            <div>
                <ButtonGroup>
                    <button type="button" className="btn btn-secondary" onClick={decrease}>-</button>
                    <span style={styles.margin}>{cantidad}</span>
                    <button type="button" className="btn btn-secondary" onClick={increase}>+</button>
                </ButtonGroup>
            </div>
            <div className="container d-flex justify-content-center">
                <div class="btn-group" role="group">
                    {
                        finalizando ? (
                            <NavLink to="/cart">
                                <button id='finalizar_compra' style={styles.button} type="button" className='btn btn-primary rounded-0'>
                                    Finalizar compra
                                </button>
                            </NavLink>
                        ) : (
                            <button style={styles.button} type="button" className="btn btn-dark rounded-0" onClick={() => onAdd(cantidad)}>
                                Agregar al carrito
                            </button>
                        )
                    }
                </div>
                <div class="btn-group" role="group">
                    <NavLink to="/" style={styles.button} className='btn btn-secondary rounded-0'>
                        Seguir comprando
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default ItemCount;

const styles = {
    margin:{
        margin: 10,
    },
    button:{
        marginTop: 10,
        padding: 10
    }
}