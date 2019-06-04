import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import ChemWelcome from './Courses/Chemistry/ChemWelcome/ChemWelcome';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/Chemistry" component={ChemWelcome} />
    </div>
  );
}

export default App;
