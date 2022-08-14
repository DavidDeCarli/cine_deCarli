import React from 'react';
import Item  from './Item';

function ItemList({InitialProducts}){
    return (
        <div className='container'>
            <div className='row'>
                {
                    InitialProducts.map((item) => (
                        <Item item={item} key={item.id}/>
                    ))
                }
            </div>
        </div>
    )
}

export default ItemList;