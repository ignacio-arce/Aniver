import React  from 'react';
import contact from "../Images/contact.jpg";
import whatsapp from "../Images/icons/whatsapp.svg";


const Contact = () => {
    return (
        <section id="contact">
            <h2 className="contact-title">Contáctanos</h2>

            <div className="box">
                <div className="form-container">
                    <div className="wsp-box">
                        <h3>Contactate a través de nuestro Whatsapp</h3>
                        <a href="https://api.whatsapp.com/send?phone=1162018490&text=Hola, tengo una consulta">
                            <button className="wsp-button">
                                <img className="whatsapp-contact" src={whatsapp} alt="" />
                            </button>
                        </a>
                    </div>

                    <h3>o a través de nuestro email</h3>
                    <form method="post" action="#" id="contact-form">
                        <ul className="form-list">
                            <li>
                                <label for="name">Nombre:</label>
                                <input type="text" id="name" name="user_name" required />
                            </li>
                            <li>
                                <label for="mail">Correo electrónico:</label>
                                <input type="email" id="email" name="user_mail" required />
                            </li>
                            <li id="li-tablet">
                                <label for="msg">Mensaje:</label>
                                <textarea id="message" name="user_message" required />
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