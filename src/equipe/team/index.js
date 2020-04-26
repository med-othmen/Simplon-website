import React from 'react';
import './style.css';

function Team(props) {
  return (
    <div className="teamsection">
     {props.teampictures.map(el =>

            <div className="cards">
    
             <img className="card" src={el.src} alt="logo " />
             <h1 className="name">  {el.name} </h1> 
             <h3 className="poste">{el.poste}</h3>

            </div>      
              )
          }

  </div>
  )
}

export default Team;