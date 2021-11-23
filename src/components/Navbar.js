import React from 'react'
import './Navbar.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import CartWidget from './CartWidget';

const Navbar = () => {
    return (
        <nav className="navbar bg-dark">
        <a className="navbar-brand" href="/#">
          <img src="https://i.imgur.com/38GH9x0.png" width="120" height="60" alt="" loading="lazy"/>
        </a>

        <div className="">
            <ul className="navbar-nav d-flex flex-row">
            <li className="nav-item active">
                <a className="nav-link" href="/#">Inicio <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/#">Buscar</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/#">Informar</a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled" href="/#">Contacto</a>
            </li>
            </ul>
        </div>

        <CartWidget/>

      </nav>
    )
}

export default Navbar
