import React, {useState} from 'react';
import { NavLink} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ButtonGroup from "@mui/material/ButtonGroup";

const ItemCount = ({stock, onAdd, setStock, finalizando}) => {
    const [cantidad, setCantidad] = useState(0);
    const increase = () => {
        if (stock > 0) {
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
                <Badge color="secondary" badgeContent={cantidad}>
                <ShoppingCartIcon />{" "}
                </Badge>
                <ButtonGroup>
                    <button type="button" className="btn btn-secondary" onClick={decrease}>-</button>
                    <span style={styles.margin}>{cantidad}</span>
                    <button type="button" className="btn btn-secondary" onClick={increase}>+</button>
                </ButtonGroup>
            </div>
            {finalizando 
                ? <NavLink to="/cart"><button id='finalizar_compra' type="button" className='btn btn-primary rounded-0'>Finalizar compra</button></NavLink>
                : <button style={styles.marginTop} type="button" className="btn btn-dark" onClick={() => onAdd(cantidad)}>Agregar al carrito</button>
            }
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