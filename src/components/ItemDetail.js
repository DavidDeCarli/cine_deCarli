import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function ItemDetail(products){
    return (
        <div className='container d-flex justify-content-center bg-info col-md-6'>
            <div className='row'>
                <img src={products.product.image} alt={products.product.title}></img>
                <h1>{products.product.title}</h1>
                <span>${products.product.price}</span>
                <p>{products.product.description}</p>
                <button className='btn btn-warning rounded-0 type="button"'>
                    <a src='#'>Finalizar compra</a>
                </button>
            </div>
        </div>
    )
}

export default ItemDetail;