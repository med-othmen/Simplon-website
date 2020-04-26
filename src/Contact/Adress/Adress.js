import React from 'react';
import Adress from './Adress.css'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'



function ContactAdress() {
    return(
<div>
<h2 className="title">Contact Address</h2>
<div className="container">
    
    <div className="location">
        <iframe src="https://maps.google.com/maps?q=simplon%20tunis&t=&z=13&ie=UTF8&iwloc=&output=embed" 
        width="100%" height="350"  frameborder="0" allowfullscreen></iframe>
         
    </div>

    <div className="adress">
        <h3> Emplacement et contact</h3>
        <hr width="30%"/>
        <h4 > lieux </h4>
        <small>Le15, 15 Avenue De Carthage, Tunis 1001   </small>
        <h4 > Numéro de téléphone </h4>
        <small>+216 55 077 406  </small>        
        <h4> Email </h4>
        <small>asyrine.ext@simplon.co </small>
    </div>
</div>
</div>
        
    )
}
 export default ContactAdress;