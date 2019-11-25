import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import { Routes } from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import userActions from './Redux/Actions/userActions';
import Nav from './Components/Nav';


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

const mapDispatchToProps = {
  persistUserFromAPI: userActions.persistUserFromAPI
};

const mapStateToProps = state => state;
export default connect(mapStateToProps, mapDispatchToProps)(App);
