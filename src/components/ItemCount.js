import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemCount = ({stock, initial = 1, onAdd}) => {
    let [reserva, setReserva] = useState(initial);

    const agregar = () => {
        if (reserva < stock) {
            setReserva(reserva + 1);
        } else {
            console.log("Solo se permite 6 reservas por Usuario")
        }
    }

    const quitar = () => {
        if (reserva > 1) {
            setReserva(reserva - 1);
        }
    }

    return (
        <>
        <div class="container-fluid">
            <p>Cuantas entradas quiere reservar? Máximo 6 entradas por usuario</p>
            
            <div>
                <button type="button" class="btn btn-secondary" onClick={quitar}>-</button>
                <span style={styles.margin}>{reserva}</span>
                <button type="button" class="btn btn-secondary" onClick={agregar}>+</button>
            </div>
            <button style={styles.marginTop} type="button" class="btn btn-dark" onClick={onAdd}>Reservar</button>
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