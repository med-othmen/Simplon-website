
import React from "react";
import "./App.css";
import ContactPage from './Contact/MainContact.js'
import './App.css';
import Equipe from './equipe/main'  // importer les composents de la page equipe
import Accueil from './Accueil/mainEquipe'  // importer les composents de la page accueil
import Navbar from './navbar/header'

function App() {

  return (
    
    <div className="app">
      <Navbar/>
     
      <Accueil/>
    </div>
  )
}

export default App;

