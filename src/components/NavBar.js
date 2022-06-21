import React from 'react';
import logo2 from '../images/cyan_logo.png'

function NavBar() {
    return (
        <header>
            <nav>
                <a href="https://www.cinemarkhoyts.com.ar/">
                <img src={logo2} alt='Logo del Cine'></img>Cyan Cine Congreso
                </a>
                <ul>
                    <li>
                        <a href="../pages/peliculas.html">Peliculas</a>
                    </li>
                    <li>
                        <a href="../pages/candy.html">Candy</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;