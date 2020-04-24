import React from 'react';
import './App.css';
import Introequipe from  './equipe/intro-equipe/index'  // importation de la composent intro-equipe 
import Pictures from  './equipe/pictures-viewer/index'  // importation de la composent pictures-viewer

// importation des images localement
import img1 from './equipe/slide-photos/image1.JPG' 
import img2 from './equipe/slide-photos/image2.JPG' 
import img3 from './equipe/slide-photos/image3.JPG' 
import img4 from './equipe/slide-photos/image4.JPG' 
import img5 from './equipe/slide-photos/image5.JPG' 
import img6 from './equipe/slide-photos/image6.JPG' 

// tableau des images pour l"utiliser dans la composent 'pictures-viewer'

const pictSlides=[img1, img2, img3,img4,img5,img6 ]


function App() {
  return (
    <div className="App">

        <Introequipe />  

        <Pictures pictSlides={pictSlides} />
      
    </div>
  )
}

export default App;
