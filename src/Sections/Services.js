import React from 'react';
import Technique from "../Components/Techniques";
import TechniqueInfo from "../Components/Techniques-info";


const Services = () => {

    return (
        <section id="services" className="services">

            <h2 className="title-services">Nuestros servicios</h2>

            <div className="services-techniques">
                    {TechniqueInfo.map(tech => {
                        return <Technique TechniqueImg={tech.image} TechniquesText={tech.text}></Technique>
                    })}
            </div>

        </section>
    )
}

export default Services;