import React from 'react';
import contact from '../Images/contact.jpg';
import whatsapp from '../Images/icons/whatsapp.svg';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // var message = document.getElementById('message');
    // var email = document.getElementById('email');
    // var text = document.getElementById('text');
    // var data = {
    //   message,
    //   email,
    //   text,
    // };
    // var request = new XMLHttpRequest();
    // request.open('POST', '/mail', true);
    // request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    // request.send(JSON.stringify(data));
    fetch('/mail', {
      method: 'POST',
      body: JSON.stringify(
        Object.fromEntries(new FormData(document.getElementById('contact-form')))
      ),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(function (response) {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(response);
      })
      .then(function (data) {
        console.log(data);
      })
      .catch(function (error) {
        console.warn(error);
      });
  };
  return (
    <section id="contact">
      <h2 className="contact-title">Contáctanos</h2>

      <div className="box">
        <div className="form-container">
          <div className="wsp-box">
            <h3>Contactate a través de nuestro Whatsapp</h3>
            <a href="https://api.whatsapp.com/send?phone=numero&text=Hola, tengo una consulta">
              <button className="wsp-button">
                <img className="whatsapp-contact" src={whatsapp} alt="" />
              </button>
            </a>
          </div>

          <h3>o a través de nuestro email</h3>
          <form method="post" id="contact-form">
            <ul className="form-list">
              <li>
                <label for="name">Nombre:</label>
                <input type="text" id="name" name="subject" required />
              </li>
              <li>
                <label for="mail">Correo electrónico:</label>
                <input type="email" id="email" name="from" required />
              </li>
              <li id="li-tablet">
                <label for="msg">Mensaje:</label>
                <textarea id="message" name="text" required />
              </li>
              <li id="li-tablet">
                <button id="submit" type="submit" onClick={handleSubmit} className="form-button">
                  Enviar
                </button>
              </li>
            </ul>
          </form>
        </div>

        <div>
          <img className="contact-img" src={contact} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
