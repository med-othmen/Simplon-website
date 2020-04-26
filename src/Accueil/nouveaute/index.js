import React from 'react';
import './style.css';




function Nouveaute(props) {

  return (
    <div className="nouveaute">

     {props.nouveaute.map(el => 
      
                                  <div className="nouv">
                                  
                                  <img className="card" src={el.src} alt="nouveauté " />
                                  <h3> {el.title} </h3>
                                  <p className="text <Equipe />">{el.parag}</p>
                                  <a href={el.link}>Read More</a>
                                  </div> 
                                
     )
     
  
              }

    </div>
  )
}

export default Nouveaute;
