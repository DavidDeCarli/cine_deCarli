import React from 'react';
import logo2 from '../images/cyan_logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';

function NavBar() {
    return (
        <>
        <header class="header navbar-dark bg-dark">
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <a class="navbar-brand" href="https://www.cinemarkhoyts.com.ar/">
                    <img src={logo2} alt='Logo del Cine' width="30" height="24" class="d-inline-block"></img>Cyan Cine Congreso
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav ms-auto">
                            <li style={styles.lista} class="nav-item">
                                <a class="nav-link active" aria-current="page" href="../pages/peliculas.html">Peliculas</a>
                            </li>
                            <li style={styles.lista} class="nav-item">
                                <a class="nav-link active" aria-current="page" href="../pages/candy.html">Candy</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        <CartWidget />
        </>
    );
}

export default NavBar;

const styles = {
    lista:{
        listStyle: 'none',
    }
}