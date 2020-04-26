import React from 'react';
import Partenaire from './Partenaire.css'

function Partners(props) {
    return(
    <div className="partenaire">
       <h2>Nos partenaires </h2>
       <h3>
       Nous remercions toutes les personnes qui nous ont soutenus au fil des ans. <br/> Nous remercions en particulier :
       </h3>

        <div className="main">
        { props.Partner.map(  el =>
                <div className="container">
                    <img src={el.source} alt={el.name}  class="image"/>
                    <div class="overlay">
                    <div class="text"> {el.name} 
                    </div>
                </div>
          
                </div>
            )}

        </div> 
    </div>
    

    )
}

export default Partners;