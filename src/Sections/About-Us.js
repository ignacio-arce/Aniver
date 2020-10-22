import React from 'react';
import Services from "./Services";
import title from "../Images/aniver-black.png";



const AboutUs = () => {
    return (
        <section id="about" className="about-section">
            <div className="titles-container">
                <img className="title-about" src={title} alt="" />
                <h2 className="subtitle-about">Empresa constructora en Ingeniería Civil</h2>
            </div>
            <article className="article-about">
                <p>
                    Aniver es una empresa constructora que brinda servicios y soluciones en ingeniería civil.
                    Fundada hace más de 30 años en nuestro país y desarrollada por un inmigrante italiano y sus
                    familiares, hoy transitando su tercera generación.</p>
                <p>
                    Cuenta con una gran experiencia en obras de infraestructura destinada a satisfacer una mejor
                    calidad de vida, entre ellas, redes de gas, agua y cloaca tanto en el sector privado como público.
                </p>
                <p>
                    Nuestro objetivo es poder acompañar a nuestros clientes en sus emprendimientos y proyectos a través
                    de nuestra extensa trayectoria y experiencia en el mercado creando asi crecimiento para toda la
                    nación y nuestra sociedad.
                </p>
            </article>

            <Services />

        </section>
    )
};

export default AboutUs;