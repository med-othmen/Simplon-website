import React from 'react';
import Scontact from './Scontact.css'
  


function SocialMedia(props) {
    
    return(
        <div className="social-media "> 
            <h2 class="social-media-title"> Rejoignez nous </h2>
            <br/> 
            <div className="media">

                { props.social.map(  el =>
                <div>
                    <a href={el.source} target="_Blanck" className={el.name}> {el.name} </a>
          
                </div>
            )}
            </div>
        </div>
        

    )
}
export default SocialMedia;