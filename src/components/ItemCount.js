import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemCount = ({stock, initial = 1, onAdd}) => {
    let [reserva, setReserva] = useState(initial);

    const agregar = () => {
        if (reserva < stock) {
            setReserva(reserva + 1);
        } else {
            console.log("No hay más stock")
        }
    }

    const quitar = () => {
        if (reserva > 1) {
            setReserva(reserva - 1);
        }
    }

    return (
        <>
        <div className="container-fluid">
            <p>Aprovecha la oferta con los últimos productos!</p>
            
            <div>
                <button type="button" className="btn btn-secondary" onClick={quitar}>-</button>
                <span style={styles.margin}>{reserva}</span>
                <button type="button" className="btn btn-secondary" onClick={agregar}>+</button>
            </div>
            <button style={styles.marginTop} type="button" className="btn btn-dark" onClick={onAdd}>Reservar</button>
        </div>
        </>
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