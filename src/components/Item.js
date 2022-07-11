import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, NavLink} from "react-router-dom"


function Item (props){

    let id = 0;

    const handleclick = (producto) => {
        let parentProduct = producto.target.parentElement
        id++
        if(parentProduct.children.length == 4){
            parentProduct.innerHTML += 
        `<div id='${id}'>
            <div className='card text-center bg-dark'>
            <img style='width: 100%; height: 100%' src=${props.image}></img>
            <div className='card-body text-light'>
                <h2 className='card-title'>${props.title}</h2>
                <h4 className='card-title'>${props.price}</h4>
                <p className='card-text text-secondary'>${props.category}</p>
                <p className='card-text text-secondary'>${props.description}</p>
            </div>
        </div>`
        }else{
            parentProduct.children[4].style.display= 'none'
        }
    }

    return (
        <div style={styles.card} className='card text-center bg-dark'>
            <img style={styles.cardImg} src={props.image}></img>
            <div className='card-body text-light'>
                <h2 className='card-title'>{props.title}</h2>
                <h4 className='card-title'>${props.price}</h4>
                <p className='card-text text-secondary'>{props.category}</p>
                <button onClick={handleclick} className='btn btn-outline-secondary rounded-0 type="button"'>
                        Más info
                </button>
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