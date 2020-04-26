import React from 'react';


import Introequipe from  '../equipe/intro-equipe/index'  // importation de la composent intro-equipe 
import Pictures from  '../equipe/pictures-viewer/index'  // importation de la composent pictures-viewer
import LogoCode from '../equipe/logo-InCodeWeTrust/index' // importation de la composent logo In Code We trust 
import Team from '../equipe/team/index' // importation de la composent team section 

// importation des images localement
import img1 from '../equipe/pictures-viewer/slide-photos/image1.JPG' 
import img2 from '../equipe/pictures-viewer/slide-photos/image2.JPG' 
import img3 from '../equipe/pictures-viewer/slide-photos/image3.JPG' 
import img4 from '../equipe/pictures-viewer/slide-photos/image4.JPG' 
import img5 from '../equipe/pictures-viewer/slide-photos/image5.JPG' 
import img6 from '../equipe/pictures-viewer/slide-photos/image6.JPG' 


// importer le logo de 'In Code we trust ' 
import imgCode from '../equipe/img/simplon-wetrust.png'

// importer les images d'équipes 
import directrice from '../equipe/img/team-pictures/directrice.jpeg'
import formateur from '../equipe/img/team-pictures/formateur.jpg'
import responsable from '../equipe/img/team-pictures/responsable.jpg'

// tableau des images pour l"utiliser dans la composent 'pictures-viewer'
const pictSlides=[img1, img2, img3,img4,img5,img6 ]

// tableau des images d'équipes pour l'utiliser dans la composent 'team'
const teampictures=[
 {name: "Mouna ayari", src: directrice, poste:"Directice"},
 {name: "Mohamed seif hamza", src: formateur, poste:"Formateur"},
 {name: "Syrine Auguste Amy", src: responsable, poste:"Chef de fabrique"}
]

function Equipe() {

  return (
    <div className="App">

      <Introequipe />  
      <Pictures pictSlides={pictSlides} />
      <LogoCode  imgCode={imgCode}      />
      <Team teampictures={teampictures} />

    </div>
  )
}

export default Equipe;
