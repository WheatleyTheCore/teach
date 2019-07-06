import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Lesson from './Components/Lesson/Lesson';
import WelcomeCard from './Components/WelcomeCard/WelcomeCard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/:course" component={WelcomeCard} />
      <Route path="/:course/lessons/:lesson" component={Lesson} />
      {/* <Route path="/lessons/:course/:lesson" />} />  */}
      {/* <Route path="/Electronegativity" render={<Lesson course="Chemistry" lesson="Electronegativity" />} /> */}
    </div>
  );
}

export default App;
