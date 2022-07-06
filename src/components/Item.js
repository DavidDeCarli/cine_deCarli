import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const item =[
        {id: 1, title: 'THOR AMOR Y TRUENO', description: 'Aventuras', price: 300, pictureUrl: 'https://static.cinemarkhoyts.com.ar/Images/Posters/914da0f1922c6952b94e4f33a808f551.jpg?v=000002', stock: 1 ,url: ''}, 
        {id: 2, title: 'LIGHTYEAR', description: 'Animación', price: 200, pictureUrl: 'https://static.cinemarkhoyts.com.ar/Images/Posters/d10e5b1babbdf39543ceb124388cc4e8.jpg?v=00000235', stock: 5, url: ''},
        {id: 3, title: 'JURASSIC WORLD DOMINIO', description: 'Aventuras', price: 150, pictureUrl: 'https://static.cinemarkhoyts.com.ar/Images/Posters/8e790cea0d15c67b011cb150ba71ad94.jpg?v=00000235', stock: 20, url: ''},
        {id: 4, title: 'EL TELEFONO NEGRO', description: 'Terror', price: 100, pictureUrl: 'https://static.cinemarkhoyts.com.ar/Images/Posters/ef56bcb3868ac50518c2240284142265.jpg?v=00000235', stock: 50, url: ''},
]

console.log(item)

function Item ({item}){
    return (
        <div className='card text-center bg-dark'>
            <img src={item.pictureUrl} alt="Pelicula 1"></img>
            <div className='card-body text-light'>
                <h2 className='card-title'>{item.title}</h2>
                <h4 className='card-title'>{item.price}</h4>
                <p className='card-text text-secondary'>{item.description}</p>
                <a href={item.url} className='btn btn-outline-secondary rounded-0'>
                    Ir a reservar
                </a>
            </div>     
        </div>
    );
}

export default Item;