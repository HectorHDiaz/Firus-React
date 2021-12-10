import React from 'react'
import './Navbar.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import CartWidget from '../CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar bg-dark">
        <a className="navbar-brand" href="/#">
          <img src="https://i.imgur.com/38GH9x0.png" width="120" height="60" alt="" loading="lazy"/>
        </a>

        <div className="">
            <ul className="navbar-nav d-flex flex-row">
            <li className="nav-item">
                <Link to={'/category/Adopcion'}>En Adopción</Link>
            </li>
            <li className="nav-item">
                <Link to={'/category/Perdidos'}>Perdidos</Link>
            </li>
            <li className="nav-item">
                <Link to={'/category/Adoptados'}>Adoptados</Link>
            </li>
            </ul>
        </div>
        <CartWidget/>
      </nav>
    )
}

export default Navbar
