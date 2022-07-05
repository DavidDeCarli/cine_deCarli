import React from 'react';
import Item  from './Item';

function ItemList({items}) {
    return (
        <div>
            <ul>
                {items.map((item) =><li><Item key={item.id}>{item.name}</Item></li>)}
            </ul>
        </div>
    );
}
export default ItemList;