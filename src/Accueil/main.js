import React from 'react';
import './style.css';
import Nouveaute from './nouveaute/index';


// importer les images des actualités section 
import act1 from './img/actualite/actualite.jpg'
import act2 from './img/actualite/actualite2.jpg'
import act3 from './img/actualite/actualite3.jpg'


// tableau des nouveautés 

const nouveautés=[
    {src:act1, 
        title:"Entepreneur , Innovation", 
    parag:"Heureux d'avoir reçu cet après midi, the one and only Youssef Bouayed😍🤩 entrepreneur enthousiaste, passionné de mode et d'innovation, pour partager avec nos Simploniens son parcours et l'aboutissement du lancement de sa marque de chaussure Men & Panda🔝✔️ 💯#madeintunisia 🇹🇳🇹🇳", link:"https://www.facebook.com/SimplonTunis/photos/fpp.1872371252891858/2661299167332392/?type=3&theater" },

    {src:act2,
        title:"🎉 Bonne nouvelle 🎉", 
    parag:"Nous vous informons que nous prolongeons le délai d’inscription à notre formation Initiation aux métiers du digital, Et oui les inscriptions sont encore ouvertes jusqu'au 15 Mars 2020.", link:"https://www.facebook.com/SimplonTunis/photos/a.1907281872734129/2661262300669412/?type=3&theater" },

    {src:act3,title:"Atelier", 
    parag:"Ce week-end on a eu le plaisir de recevoir les Graines d'entrepreneurs Tunisie au sein de Simplon Tunis pour deux ateliers d'initiation aux métiers numériques et au code 👩‍💻👨‍💻 animés par les alumnis Alaa Belhadj Amor🥰 & Elyes Hk🥰 de notre première promotion en développement web 👏👏", link:"https://www.facebook.com/grainesdentrepreneurstunisie/photos/pcb.580192372540083/580191525873501/?type=3&theater" }
]


function Accueil() {

  return (
    <div className="App">
      
   <Nouveaute nouveaute={nouveautés} />

    </div>
  )
}

export default Accueil;
