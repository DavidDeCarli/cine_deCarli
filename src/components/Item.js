import React from 'react';
import { NavLink} from "react-router-dom";

function Item ({item}){
    const {id, title, image, price, category, stock} = item;

    return (
        <div style={styles.card} className='card text-center bg-dark'>
            <img style={styles.cardImg} src={image} alt={title}></img>
            <div className='card-body text-light'>
                <h2 className='card-title'>{title}</h2>
                <h4 className='card-title'>${price}</h4>
                <p className='card-text text-secondary'>{category}</p>
                <p className='card-text text'>{stock}</p>
                <NavLink to={`/item/${id}`}><button className='btn btn-outline-secondary rounded-0 type="button"'>Mostrar detalle</button></NavLink>
            </div>   
        </div>
    );
}

export default Item;

const styles = {
    card:{
        width: '100%',
        height: '100%',
        border: 0,
        margin: 'auto auto',
        textAlign: 'center',
        backgroundColor: 'transparent'
    },
    cardImg:{
        width: '100%',
        height: '100%',
    }
}