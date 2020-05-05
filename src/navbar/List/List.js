import React from "react";
import "./List.css";
import {Link} from 'react-router-dom'


function List() {
  return (

   
    <div className="nav">

    
     <ul>
      <li><Link   to="/">Accueil </Link></li>
      <li><Link   to="/Apropos">A propos</Link></li>
      <li><Link   to="/Equipe">Equipe</Link></li>
      <li><Link   to="/Contact">Contact</Link></li>
      </ul>
      
   
    </div>
    
  );
}

export default List;
