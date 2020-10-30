import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


const Work = props => {
    return (
        <div className="card-square">
            <section className="work-card" style={
                {
                    backgroundImage: `url(${props.WorksImg})`
                }
            }>
                <article className="text-work-box">
                    <h3>{props.WorksTitle}</h3>
                    <p>
                        <span>
                            <FontAwesomeIcon className="ubication-icon" icon={faMapMarkerAlt} />
                        </span>
                        {props.WorksText}
                    </p>
                </article>
            </section>
        </div>
    )
}

export default Work;