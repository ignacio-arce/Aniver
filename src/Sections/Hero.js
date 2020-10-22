import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';


const Hero = props => {
    return (
        <section id="hero" className="hero">
            <div className="opacity">
                <div className="hero-info">
                    <h1>Mauris id nunc id lectus pretium</h1>
                        <a href="#contact" className="hero-button">
                            Contactanos
                        </a>
                    <button className="arrow-button">
                        <a href="#about">
                            <FontAwesomeIcon className="hero-arrow" icon={faAngleDoubleDown} />
                        </a>
                    </button>
                </div>
            </div>
        </section>
    )
};

export default Hero;
