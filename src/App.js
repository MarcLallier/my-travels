import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Travel_1 from './components/Travel_1'
import Travel_2 from './components/Travel_2'

const trip1  = {
  destination : "Paris", 
  distance    : "100km",
   country    : "France", 
   landscape      : "http://paris.cg.mfa.gov.tr/Content/assets/m-covers/1100118/phone1.jpg"
}  

const trip2 = {
  destination : "Petaouchnok",
  distance : "archi loin",
  country : "Trouducudumond",
  landscape : "http://media.topito.com/wp-content/uploads/2015/12/une_nom_ville_perdue.jpg"
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Travel_1 {...trip1} />
          <Travel_2 {...trip2} />
        </header>
      </div>
    );
  }
}

export default App;
