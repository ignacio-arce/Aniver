import React from 'react';
import contact from "../Images/contact.jpg";
import whatsapp from "../Images/icons/whatsapp.svg";

const Contact = props => {
    return (
        <section id="contact">
            <h2 className="contact-title">Contáctanos</h2>

            <div className="box">
                <div className="form-container">
                    <div className="wsp-box">
                        <h3>Contactate a través de nuestro Whatsapp</h3>
                        <button className="wsp-button">
                            <img className="whatsapp-contact" src={whatsapp} alt=""/>
                        </button>
                    </div>

                    <h3>o a través de nuestro email</h3>
                    <form method="post" action="#" id="contact-form">
                        <ul className="form-list">
                            <li>
                                <label for="name">Nombre:</label>
                                <input type="text" id="name" name="user_name" />
                            </li>
                            <li>
                                <label for="mail">Correo electrónico:</label>
                                <input type="email" id="mail" name="user_mail" />
                            </li>
                            <li id="li-tablet">
                                <label for="msg">Mensaje:</label>
                                <textarea id="msg" name="user_message" />
                            </li>
                            <li id="li-tablet">
                                <button type="submit" className="form-button">Enviar</button>
                            </li>

                        </ul>
                    </form>
                </div>

                <div>
                    <img className="contact-img" src={contact} alt="" />
                </div>
            </div>
        </section>
    )
};

export default Contact;