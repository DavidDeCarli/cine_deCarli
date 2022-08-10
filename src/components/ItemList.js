import React from 'react';
import Item  from './Item';

function ItemList({InitialProducts}){
    return (
        <div className='container d-flex justify-content-center bg-info'>
            {<div className='row'>
                {
                    InitialProducts.map((item) => (
                        <div className='card col-md-3' key={item.id}>
                            <Item item={item}/>
                        </div>
                    ))
                }
            </div>}
        </div>
    )
}

export default ItemList;