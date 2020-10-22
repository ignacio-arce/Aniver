import React from 'react';
import aniver from "../Images/aniver-white.png";
import whatsapp from "../Images/icons/whatsapp.svg";
import linkedin from "../Images/icons/linkedin.svg";
import mail from "../Images/icons/mail.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
    return (
        <section id="footer">
            <div className="footer-container">
                <div id="title-footer">
                    <img className="aniver-footer" src={aniver} alt="" />
                    <h2 className="subtitle-footer">Empresa constructora en Ingeniería Civil</h2>
                    <button className="links-button">
                        <a href="#">
                            <img className="icon-footer" src={whatsapp} alt="" />
                        </a>
                    </button>
                    <button className="links-button">
                        <a href="https://www.linkedin.com/company/aniver-s-a/about/">
                            <img className="icon-footer" src={linkedin} alt="" />
                        </a>
                    </button>
                    <button className="links-button">
                        <a href="#">
                            <img className="icon-footer" src={mail} alt="" />
                        </a>
                    </button>
                </div>

                <nav className="footer-nav">
                    <ul>
                        <li><a href="#hero" className="link-footer">Inicio</a></li>
                        <li><a href="#about" className="link-footer">Nosotros</a></li>
                        <li><a href="#services" className="link-footer">Servicios</a></li>
                        <li><a href="#works" className="link-footer">Obras</a></li>
                        <li><a href="#contact" className="link-footer">Contacto</a></li>
                    </ul>
                </nav>

                <div className="map-container">
                    <mapa></mapa>
                    <p>
                        <span>
                            <FontAwesomeIcon className="ubication-icon" icon={faMapMarkerAlt} />
                        </span>
                    Av. 12 de Octubre N° 2966, Local 2, Quilmes Oeste
                </p>
                </div>
            </div>

            <footer className="designed-by">
                <p>Desarrollado por 
                    <a href="#"> Giuliana Cecchetto</a>
                </p>
            </footer>

        </section>
    )
};

export default Footer;