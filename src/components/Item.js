import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetail from './ItemDetail';

function Item (props){

    const handleclick = (event) => {
        if(document.getElementById('verMas').style.display=='none'){
            document.getElementById('verMas').style.display='block';
        }else{
            document.getElementById('verMas').style.display='none';
        }
    }
    <ItemDetail title={props.title} image={props.image} price={props.price} category={props.category} description={props.description}/>  
    return (
        <div style={styles.card} className='card text-center bg-dark'>
            <img style={styles.cardImg} src={props.image}></img>
            <div className='card-body text-light'>
                <h2 className='card-title'>{props.title}</h2>
                <h4 className='card-title'>${props.price}</h4>
                <p className='card-text text-secondary'>{props.category}</p>
                <button onClick={handleclick} className='btn btn-outline-secondary rounded-0 type="button"'>
                        Mostrar detalle
                </button>
            </div>
            <div id='verMas'>
            </div>   
        </div>
    );
}

export default Item;

const styles = {
    card:{
        width: '100%',
        height: '100%',
        border: 0,
        margin: 'auto auto',
        textAlign: 'center',
        backgroundColor: 'transparent'
    },
    cardImg:{
        width: '100%',
        height: '100%',
    }
}