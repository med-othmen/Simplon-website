import React from "react";
import './cardright.css'




function Cardright(props) {
  return ( <div>
 
            <div className= "carte3">
              
            

      <div className="photo3">
         <img  src={props.gauche.image}  alt=""/>
         </div>

         <div className="description"> 
       <h2 >{props.gauche.title}</h2>
         <p>{props.gauche.paragraphe}</p>
         </div> 
      


             </div>
      
 
 
</div>
  );
}

export default Cardright;