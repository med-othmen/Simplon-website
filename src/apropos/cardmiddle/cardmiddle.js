import React from "react";
import './cardmiddle.css'


function Cardmiddle(props) {
  return ( <div>
 
            <div className= "carte2">

            <div className="description"> 
         <h2 >{props.milieu.title}</h2>
         <p>{props.milieu.paragraphe}</p>
         </div> 

      <div className="photo2">
         <img  src={props.milieu.image}  alt=""/>
         </div>
      
      
             </div>

</div>
  );
}

export default Cardmiddle;