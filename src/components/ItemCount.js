import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ButtonGroup from "@mui/material/ButtonGroup";


const ItemCount = ({stock, initial = 1, onAdd}) => {
    const [cantidad, setCantidad] = useState(initial);
    const agregar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        } else {
            console.log("No hay más stock")
        }
    }
    const quitar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    }
    console.log(cantidad)
    return (
        <div className="container-fluid">
            <div>
                <Badge color="secondary" badgeContent={cantidad}>
                <ShoppingCartIcon />
                </Badge>
                <ButtonGroup>
                    <button type="button" className="btn btn-secondary" onClick={quitar}>-</button>
                    <span style={styles.margin}>{cantidad}</span>
                    <button type="button" className="btn btn-secondary" onClick={agregar}>+</button>
                </ButtonGroup>
            </div>
            <button style={styles.marginTop} type="button" className="btn btn-dark" onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;

const styles = {
    margin:{
        margin: 10,
    },
    marginTop:{
        marginTop: 10,
    }
}