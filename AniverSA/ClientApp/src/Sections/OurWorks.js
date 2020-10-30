import React from 'react';
import Work from "../Components/Work";
import WorksInfo from "../Components/Works-info";

const OurWorks = () => {
    return (
        <section id="works" className="works-section">
            <div className="works-title">

                <h2>Nuestras obras</h2>
                <p>
                    Aniver ha realizado mas de 500 obras dentro de la región del AMBA, logrando asi que miles de
                    vecinos e industrias de la provincia puedan conectarse al servicio de gas natural, agua y cloaca.
                </p>
            </div>

            <div className="works-container">

                {WorksInfo.map(obra => {
                    return <Work WorksImg={obra.image} WorksTitle={obra.title} WorksText={obra.text} />
                })}

            </div>

        </section>
    )
};

export default OurWorks;

/*
{WorksInfo.map(obra => {
    return <Work WorksImg={obra.image} WorksTitle={obra.title} WorksText={obra.text}></Work>
})}*/