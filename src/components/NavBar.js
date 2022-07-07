import React from 'react';
import logo2 from '../images/cyan_logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';

function NavBar() {
    return (
        <>
        <header className="header navbar-dark bg-dark">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                    <img src={logo2} alt='Logo de carrito' width="30" height="24" className="d-inline-block"></img>Compra tus productos
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">
                            <CartWidget />
                            <li style={styles.lista} className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Productos</a>
                            </li>
                            <li style={styles.lista} className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">About Us</a>
                            </li>
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