import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function ItemDetail(products){
    return (
        <div className='container d-flex justify-content-center bg-info'>
            <div className='row'>
                <img src={products.product.image} alt={products.product.title}></img>
                <h1>{products.product.title}</h1>
                <span>${products.product.price}</span>
                <p>{products.product.description}</p>
            </div>
        </div>
    )
}

export default ItemDetail;