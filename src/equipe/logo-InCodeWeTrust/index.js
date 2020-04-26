import React from 'react';
import './style.css';


function LogoCode(props) {
  return (
    <div className="CodeSection">
      <img className="logoInCode" src={props.imgCode} alt="logo " />
  </div>
  )
}

export default LogoCode;
