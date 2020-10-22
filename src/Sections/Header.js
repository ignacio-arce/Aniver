import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from "../Images/logo-png.png";
import title from "../Images/aniver-white.png";


const Header = () => {
    return (
        <header>
            <div className="header-title">
                <img className="logo" src={logo} alt="" />
                <img className="aniver-title" src={title} alt="" />
            </div>

            <div className="menu-container">
                <button className="menu-button">
                        <FontAwesomeIcon className="faBars" icon={faBars} />
                </button>
                <nav className="menu-nav">
                    <ul>
                        <li><a href="#hero" className="link-nav">Inicio</a></li>
                        <li><a href="#about" className="link-nav">Nosotros</a></li>
                        <li><a href="#services" className="link-nav">Servicios</a></li>
                        <li><a href="#works" className="link-nav">Obras</a></li>
                        <li><a href="#contact" className="link-nav">Contacto</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
};

export default Header;