import React from 'react';
import Form from './Form.css'

function Info() {
    return(
        <div className="contact-information">
             <div className="contact-info">
                <img src="https://image.ibb.co/kUASdV/contact-image.png" alt="image"/>
                <h2 className="contact-info-title"> N'hésitez pas a nous contacter </h2>
                <h4 className="contact-info-title-h4">Une question? un avis? Simplon <br/> est a votre disposition ! </h4>
            </div>
        </div>

    )
}
function Submit() {
    return(
        <button type="submit" class="sent"> Envoyer</button>
    )
}

function FormContact() {
  return (
    
    <div className="containere">
        <Info/>
        <div className="contact-form">
            <div >
                <label  for="fname">Nom et Prénom:</label>
                <div >          
                    <input type="text" className="input" id="fname" placeholder="Nom et Prenom" name="fname"/>
                </div>
            </div>
            <div >
                <label  for="email">Email:</label>
                <div >
                    <input type="email" className="input" id="email" placeholder="Email" name="email"/>
                </div>
            </div>
            <div >
                <label  for="comment"> Message:</label>
                <div >
                    <textarea className="input" rows="5" id="comment"></textarea>
                </div>
            </div>
            <Submit/>
        </div>

    </div>  
  );
}

export default FormContact;