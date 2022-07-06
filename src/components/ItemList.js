import React from 'react';
import Item  from './Item';
import 'bootstrap/dist/css/bootstrap.min.css';


function ItemList({InitialProducts}){
    return (
        <div className='container d-flex justify-content-center bg-info'>
            {<div className='row'>
                {
                    InitialProducts.map((item) => (
                        <div className='col-md-6' key={item.id}>
                            <Item title={item.title} pictureUrl={item.pictureUrl} price={item.price} description={item.description} url={item.url}/>
                        </div>
                    ))
                }
            </div>}
        </div>
    )
}

export default ItemList;