import React from 'react';
import FormContact from './contact-form/Form'
import SocialMedia from './SocialMediaContact/SMcontact'
import ContactAdress from './Adress/Adress.js'


const social = [
  {name : "facebook" , source : "https://www.facebook.com/SimplonTunis/"},
  {name : "instagram" , source : "https://www.instagram.com/simplontunis/"},
  {name : "twitter" , source : "https://twitter.com/SimplonTunis"}, 
  {name : "youtube" , source : "www.youtube.com"},
  {name : "linkedin" , source :"https://www.linkedin.com/in/simplon-tunis-735987177/"}
]

function ContactPage() {
  return (
    <div className="App">
      <FormContact/>
      <SocialMedia  social= {social} />
      <ContactAdress/>
    </div>
  );
}

export default ContactPage;
