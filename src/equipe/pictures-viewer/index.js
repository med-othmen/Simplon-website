import React from 'react';
import './style.css';

function Pictures(props) {
  return (
    <div className="slide">
     {props.pictSlides.map(el =>
             <img className="item" src={el} alt="logo " />
           
              )
          }
  </div>
  )
}

export default Pictures;
