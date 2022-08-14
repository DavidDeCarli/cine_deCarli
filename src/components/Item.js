import React from 'react';
import { NavLink} from "react-router-dom";

function Item ({item}){
    const {id, title, image, price, category, stock} = item;

    return (
        <div className='col-3' style={styles.columna}>
            <div style={styles.card} className='card text-center bg-dark'>
                <img className='card-img-top' style={styles.cardImg} src={image} alt={title}></img>
                <div className='card-body text-light'>
                    <h4 className='card-title'>{title}</h4>
                    <h5 className='card-title'>U$S {price}</h5>
                    <p className='card-text text-secondary'>{category}</p>
                    <p className='card-text text'>Stock: {stock}</p>
                    <NavLink to={`/item/${id}`}><button className='btn btn-outline-secondary rounded-0 type="button"'>Mostrar detalle</button></NavLink>
                </div>   
            </div>
        </div>
    );
}

export default Item;

const styles = {
    columna: {
        paddingBottom: '20px'
    },
    card: {
        height: '100%'
    },
    cardImg: {
        height: '250px'
    }
}