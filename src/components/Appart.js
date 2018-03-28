import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Appart extends Component {
  render() {
    return (
      <div className="container">
        <h1>Fais ton appart</h1>

        <Link to='/appart/entree' params={{ piece: "Entrée" }}>
          <p>Entrée</p>
        </Link>
        <Link to='/appart/bathroom' params={{ piece: "Bathroom" }}>
          <p>Bathroom</p>      
        </Link>
        <Link to='/appart/cuisine' params={{ piece: "Cuisine" }}>
          <p>Cuisine</p>      
        </Link>
        <Link to='/appart/salon' params={{ piece: "Salon" }}>
          <p>Salon</p>      
        </Link>
        <Link to='/appart/chambre' params={{ piece: "Chambre" }}>
          <p>Chambre</p>      
        </Link>
      </div>
    );
  }
}
 
export default Appart;