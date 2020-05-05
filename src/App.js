
import React from "react";
import "./App.css";
import Navbar from './navbar/header'
import Footer from './footer/footer'
import Apropos from'./apropos/mainApropos'
import Equipe from'./equipe/main'
import ContactPage from './Contact/MainContact'
import Accueil from './Accueil/mainEquipe'
import{BrowserRouter,Route}from 'react-router-dom'


function App() {

  return (
    
      
    
      
      
      
      <BrowserRouter>
      <div className="app">
      <Navbar/>
      <Route exact path="/" component={Accueil} />
      <Route  path="/Apropos" component={Apropos} />
      <Route path="/Contact" component={ContactPage} />
      <Route path="/Equipe" component={Equipe} />
      <Footer/>
      </div>
      </BrowserRouter>
     
    
  )
}

export default App;

