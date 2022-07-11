import React from 'react';
import Item  from './Item';
import 'bootstrap/dist/css/bootstrap.min.css';


function ItemList({InitialProducts}){
    return (
        <div className='container d-flex justify-content-center bg-info'>
            {<div className='row'>
                {
                    InitialProducts.map((item) => (
                        <div className='card col-md-3' key={item.id}>
                            <Item title={item.title} image={item.image} price={item.price} category={item.category} description={item.description}/>
                        </div>
                    ))
                }
            </div>}
        </div>
    )
}

export default ItemList;