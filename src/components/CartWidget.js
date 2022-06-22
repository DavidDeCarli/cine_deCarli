import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function CartWidget() {
    return (
        <div className='CartWidget'>
        <ShoppingCart color="primary" fontSize="large"/>
        </div>
    );
}

export default CartWidget;