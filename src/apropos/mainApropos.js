import React from "react";
import "./main.css";

import img1 from './images/local.png'
import img2 from './images/group.png'
import img3 from './images/pc.jpg'
import Cardleft from './cardleft/cardleft';
import Cardright from './cardright/cardright';
import Cardmiddle from './cardmiddle/cardmiddle';
import video from './images/video-SIMPLON-HD.mp4'
import { BrowserRouter ,Route} from 'react-router-dom'



const card1= [
  {title:"Notre mission",paragraphe:"Selon l’étude menée par Simplon avec le soutien de l’Agence Française de Développement (AFD) ,depuis 2016, l’un des métiers les plus demandés par les entreprises du secteur numériques est celui du Développeur.se Web et Mobile. Actuellement en Tunisie ,le secteur des TIC emploi plus de 80000 personnes et compte plus de 1500 entreprises privées, Mais Ces dernièrs ,déclarent éprouver des difficultés à trouver des candidats remplissant les conditions professionnelles requises pour les emplois offerts ce qui freinent souvent les recrutements et le développement dans le secteur.booked last month",image:img1 },

  
]

const card2= [
  {title:"Nos valeurs",paragraphe:"Simplon Tunis en partenariat avec Le15 et avec le soutien financier de la Fondation Société Générale et de la Région Ile de France, a lancé en 2019 le premier cursus de cette école inclusive, visant à former gratuitement des publics éloignés de la formation et/où de l’emploi aux métiers du numérique en tension, en s’adaptant aux communautés et écosystèmes locaux.",image:img2 },
]
const card3= [
  {title:"Notre vision",paragraphe:" En 5 ans, Simplon a formé plus de 3200 personnes dont 31% de femmes et 60% de personnes de niveau inférieur ou égal au baccalauréat et forme désormais 2000 personnes par an au travers de son réseau de 53 écoles en propre ou en partenariat, en France dans les quartiers populaires, en milieu rural ou en Outre-Mer et à l'étranger (Europe, Moyen Orient et Afrique) avec un taux de sortie positive en emploi, en entrepreneuriat ou en reprise d'étude de 77% dans les 6 mois qui suivent la fin de leur formation.",image:img3 },
]


function Apropos() {
  return <div className="main">

     <div><p>Crée à Montreuil (France) en avril 2013, Simplon.co est une entreprise sociale 
          qui propose des formations présentielles gratuites aux métiers techniques 
          du numérique en forte tension et ce en priorité aux profils sous-représentés
           dans le métiers TIC (jeunes peu ou pas diplômés, 
          demandeurs d'emploi, réfugiés) avec un objectif de parité femmes - hommes.
      </p></div>

      <div className="lavideo">
        <video id="Video" width="640" height="480" controls>
        <source src={video} type="video/mp4"> 
        </source>
      </video>
      </div>

      { card1.map(el =>   <Cardleft droite={el}  />   )}
      { card2.map(el =>   <Cardmiddle milieu={el}  />   )}
      { card3.map(el =>   <Cardright gauche={el}  />   )}
     
     
   </div>
}

export default Apropos;