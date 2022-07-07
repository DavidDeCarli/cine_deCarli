import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// const ItemDetail = ({products}) => {
//     return (
//         <>
//             {
//                 products.map((products) => (
//                     <ItemDetail key={products.id} products={products}/>
//                 ))
//             }
//         </>
//     )
// }

function ItemDetail({products}){
    return (
        <div className='container d-flex justify-content-center bg-info'>
            <div className='row'>
                <img src={products.image} alt={products.title}></img>
                <h1>{products.title}</h1>
                <span>${products.price}</span>
                <p>{products.description}</p>
            </div>
        </div>
    )
}

export default ItemDetail;