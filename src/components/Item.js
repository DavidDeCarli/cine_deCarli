import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Item (props){
    console.log(props);
    return (
        <div className='card text-center bg-dark'>
            <img src={props.pictureUrl} alt="Pelicula 1"></img>
            <div className='card-body text-light'>
                <h2 className='card-title'>{props.title}</h2>
                <h4 className='card-title'>{props.price}</h4>
                <p className='card-text text-secondary'>{props.description}</p>
                <a href={props.url} className='btn btn-outline-secondary rounded-0'>
                    Ir a reservar
                </a>
            </div>     
        </div>
    );
}

export default Item;