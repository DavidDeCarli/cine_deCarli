import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function ItemDetail({product}){
    return (
        <div className='container d-flex justify-content-center bg-info'>
            <div className='row'>
                <img src={product.img} alt={product.name}></img>
                <h1>{product.name}</h1>
                <span>${product.price}</span>
                <p>{product.description}</p>
            </div>
        </div>
    )
}

export default ItemDetail;