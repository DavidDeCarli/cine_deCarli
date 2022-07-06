import React from 'react';
import Item  from './Item';
import 'bootstrap/dist/css/bootstrap.min.css';

function ItemList({items}){
    return (
        <div className='container d-flex justify-content-center bg-info'>
            <div className='row'>
                {
                    items.map((item) => (
                        <div className='col-md-6' key={item.id}>
                            <Item title={item.title} imagen={item.pictureUrl} precio={item.price} description={item.description} url={item.url}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ItemList;