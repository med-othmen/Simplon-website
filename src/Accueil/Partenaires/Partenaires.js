import React from 'react';
import Partenaire from './Partenaire.css'

function Partners(props) {
    return(
    <div className="partenaire">
       <h2>Nos partenaires </h2>
       <h3>
       Nous remercions toutes les personnes qui nous ont soutenus au fil des ans. <br/> Nous remercions en particulier :
       </h3>

        <div className="mainn">
        { props.Partner.map(  el =>
                <div className="containers">
                    <img src={el.source} alt={el.name}  class="imagee"/>
                    <div class="overlayy">
                    <div class="textt"> {el.name} 
                    </div>
                </div>
          
                </div>
            )}

        </div> 
    </div>
    

    )
}

export default Partners;