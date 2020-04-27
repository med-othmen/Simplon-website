import React from "react";
import './cardleft.css'


function Cardleft(props) {
  return ( <div>
 
            <div className= "carte1">


      <div className="photo1">
         <img  src={props.droite.image}  alt=""/>
         </div>
      
      <div className="description"> 
         <h2 >{props.droite.title}</h2>
         <p>{props.droite.paragraphe}</p>
         </div> 
             </div>

</div>
  );
}

export default Cardleft;