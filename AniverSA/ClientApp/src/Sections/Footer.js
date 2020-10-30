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
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.542542453356!2d-58.29084178481012!3d-34.74192358042389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32dd0f97de865%3A0x1f3be378881d04c!2sAv.%2012%20de%20Octubre%202966%2C%20B1879AAV%20Quilmes%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1603650114367!5m2!1ses-419!2sar" width="300" height="200" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
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
                    <a href="https://www.linkedin.com/in/giuliana-cecchetto/"> Giuliana Cecchetto</a>
                </p>
            </footer>

        </section>
    )
};

export default Footer;
