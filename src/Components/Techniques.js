import React from 'react';


const Techniques = props => {
    return (
            <article className="technique">
                <div className="img-technique-box">
                    <img className="icon-tech" src={props.TechniqueImg} alt="" />
                </div>
                <p className="technique-text">{props.TechniquesText}</p>
            </article>
    )
}

export default Techniques;