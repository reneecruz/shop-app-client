import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import { Routes } from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';


class App extends React.Component {
  render(){
    return (
      <>
      <Router>
        <Routes />
      </Router>
      </>
     );
  }
  
}

export default App;
