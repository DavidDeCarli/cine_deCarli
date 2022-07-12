import React from 'react';
import logo2 from '../assets/cyan_logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';
import {Link, NavLink} from "react-router-dom"

const viewport = {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
}

const NavBar = () => {
    const categories = [
        {name: "Ropa Masculina", id: 0, route: "/category/men's clothing"},
        {name: "Ropa Femenina", id: 1, route: "/category/women's clothing"},
        {name: "Electronica", id: 2, route: "/category/electronics"},
        {name: "Joyeria", id: 3, route: "/category/jewelery"},
    ];

    return (
        <>
        <header className="header navbar-dark bg-dark">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                    <img src={logo2} alt='Logo de carrito' width="30" height="24" className="d-inline-block"></img>Compra tus productos
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">
                            <Link to="/cart"><CartWidget /></Link>
                            <li style={styles.lista} className="nav-item">{categories.map((category) => <NavLink key={category.id} className="nav-link active d-inline-block" aria-current="page" to={category.route}>{category.name}</NavLink>)}</li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        </>
    );
}

export default NavBar;

const styles = {
    lista:{
        listStyle: 'none',
    }
}