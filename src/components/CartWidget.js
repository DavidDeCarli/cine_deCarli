import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function CartWidget() {
    return (
        <div className='CartWidget'>
            <ShoppingCartIcon style={styles.margin} color="primary" sx={{ fontSize: 25 }}/>
        </div>
    );
}

export default CartWidget;

const styles = {
    margin:{
        marginTop: 8,
    }
}