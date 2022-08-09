import React, { useContext } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from '../context/CartContext';
import Badge from '@mui/material/Badge';

function CartWidget() {
    const { products } = useContext(CartContext);
    const getQty = () => {
        let total = 0;
        products.forEach(p => { 
            total = total + p.qty
            
        });
        return total;
    }
    
    return (
        <div className='CartWidget'>
            <Badge color="secondary" badgeContent={getQty()}>
            <ShoppingCartIcon style={styles.margin} color="primary" sx={{ fontSize: 25 }}/>
            </Badge>
        </div>
    );
}

export default CartWidget;

const styles = {
    margin:{
        marginTop: 8,
    }
}