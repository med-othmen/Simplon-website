
import React from "react";
import "./App.css";
import ContactPage from './Contact/MainContact.js'
import Equipe from './equipe/main'  // importer les composents de la page equipe
import Accueil from './Accueil/mainEquipe'  // importer les composents de la page accueil
import Navbar from './navbar/header'
import Apropos from './apropos/mainApropos'
import Footer from './footer/footer'

function App() {

  return (
    <div className="app">
      <Navbar/>
      <Accueil/>
      
      <Footer/>
    </div>
  )
}

export default App;

